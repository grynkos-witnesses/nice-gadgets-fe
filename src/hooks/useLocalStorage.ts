/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import { CartPhone } from '../types/CartPhone';
import { FavoritePhone } from '../types/FavoritePhone';

type LocalAddFunc = (key: string, value: CartPhone | FavoritePhone) => void;
type LocalRemoveFunc = (
  key: string,
  removingElId: string,
  clearCompletely: boolean,
) => void;
type HookOutput = [CartPhone[], FavoritePhone[], LocalAddFunc, LocalRemoveFunc];

export function useLocalStorage(): HookOutput {
  const cartJSON = localStorage.getItem('cart') || '[]';
  const favoritesJSON = localStorage.getItem('favorites') || '[]';

  const [cart, setCart] = useState(JSON.parse(cartJSON));
  const [favorites, setFavorites] = useState(JSON.parse(favoritesJSON));

  useEffect(() => {
    const handleStorage = (event: any) => {
      if (event.key === 'cart') {
        setCart(event.body);
      }

      if (event.key === 'favorites') {
        setFavorites(event.body);
      }
    };

    window.addEventListener('storage', handleStorage);

    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  function addToLocalStorage(key: string, value: CartPhone | FavoritePhone) {
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

    const event: any = new Event('storage');

    event.key = key;
    event.body = storage;

    window.dispatchEvent(event);
  }

  function removeFromLocalStorage(
    key: string,
    removingElId: string,
    clearCompletely = false,
  ) {
    const stringStorage = localStorage.getItem(key);

    let storage = stringStorage ? JSON.parse(stringStorage) : [];

    const exsistingProduct = storage.find(
      (el: { id: string }) => el.id === removingElId,
    );

    if (!exsistingProduct) {
      return;
    }

    if (clearCompletely) {
      storage = storage.filter((el: { id: string }) => el.id !== removingElId);
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

    const event: any = new Event('storage');

    event.key = key;
    event.body = storage;

    window.dispatchEvent(event);
  }

  return [cart, favorites, addToLocalStorage, removeFromLocalStorage];
}
