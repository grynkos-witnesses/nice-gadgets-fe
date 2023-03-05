/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import { Phone } from '../types/Phone';

interface CartPhone {
  id: string;
  name: string;
  price: number;
  counter: number;
}

type LocalAddFunc = (key: string, value: CartPhone | Phone) => void;
type LocalRemoveFunc = (key: string, removingElId: string) => void;
type HookOutput = [CartPhone[], Phone[], LocalAddFunc, LocalRemoveFunc];

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

  function addToLocalStorage(key: string, value: CartPhone | Phone) {
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

  function removeFromLocalStorage(key: string, removingElId: string) {
    const stringStorage = localStorage.getItem(key);

    let storage = stringStorage ? JSON.parse(stringStorage) : [];

    const exsistingProduct = storage.find(
      (el: { id: string }) => el.id === removingElId,
    );

    if (!exsistingProduct) {
      return;
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
