/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { CartPhone } from '../types/CartPhone';
import { FavoritePhone } from '../types/FavoritePhone';

export type LocalAddFunc = (
  key: string,
  value: CartPhone | FavoritePhone,
) => void;
export type LocalRemoveFunc = (
  key: string,
  removingElId: string,
  clearCompletely: boolean,
) => void;
type HookOutput = [CartPhone[], FavoritePhone[], LocalAddFunc, LocalRemoveFunc];

export function useLocalStorage(): HookOutput {
  const event: any = useMemo(() => new Event('storage'), []);
  const cartJSON = localStorage.getItem('cart') || '[]';
  const favoritesJSON = localStorage.getItem('favorites') || '[]';

  const [cart, setCart] = useState(JSON.parse(cartJSON));
  const [favorites, setFavorites] = useState(JSON.parse(favoritesJSON));

  useEffect(() => {
    const handleStorage = (e: any) => {
      if (e.key === 'cart') {
        setCart(e.body);
      }

      if (e.key === 'favorites') {
        setFavorites(e.body);
      }
    };

    window.addEventListener('storage', handleStorage);

    return () => window.removeEventListener('storage', handleStorage);
  }, [event.key, event.body]);

  const addToLocalStorage = useCallback(
    (key: string, value: CartPhone | FavoritePhone) => {
      const stringStorage = localStorage.getItem(key);

      const storage = stringStorage ? JSON.parse(stringStorage) : [];

      const exsistingProduct = storage.find(
        (el: { id: string }) => el.id === value.id,
      );

      switch (key) {
        case 'cart':
          if (exsistingProduct) {
            exsistingProduct.counter += 1;
          } else {
            storage.push(value);
          }

          break;

        default:
          if (exsistingProduct) {
            return undefined;
          }

          storage.push(value);

          break;
      }

      localStorage.setItem(key, JSON.stringify(storage));

      event.key = key;
      event.body = storage;

      window.dispatchEvent(event);
    },
    [],
  );

  const removeFromLocalStorage = useCallback(
    (key: string, removingElId: string, clearCompletely = false) => {
      const stringStorage = localStorage.getItem(key);

      let storage = stringStorage ? JSON.parse(stringStorage) : [];

      const exsistingProduct = storage.find(
        (el: { id: string }) => el.id === removingElId,
      );

      if (!exsistingProduct) {
        return;
      }

      if (clearCompletely) {
        storage = storage.filter(
          (el: { id: string }) => el.id !== removingElId,
        );
      }

      switch (key) {
        case 'cart':
          if (exsistingProduct.counter > 1) {
            exsistingProduct.counter -= 1;
          } else {
            storage = storage.filter(
              (el: { id: string }) => el.id !== removingElId,
            );
          }

          break;

        default:
          storage = storage.filter(
            (el: { id: string }) => el.id !== removingElId,
          );

          break;
      }

      localStorage.setItem(key, JSON.stringify(storage));

      event.key = key;
      event.body = storage;

      window.dispatchEvent(event);
    },
    [],
  );

  const HO: HookOutput = useMemo(
    () => [cart, favorites, addToLocalStorage, removeFromLocalStorage],
    [cart, favorites],
  );

  return HO;
}
