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
        if (exsistingProduct.counter === 1) {
          return undefined;
        }

        storage.push(value);

        break;
    }

    localStorage.setItem(key, JSON.stringify(storage));

    return undefined;
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
  }

  const cartJSON = localStorage.getItem('cart') || '[]';
  const favoritesJSON = localStorage.getItem('favorites') || '[]';

  const cart: CartPhone[] = JSON.parse(cartJSON);
  const favorites: Phone[] = JSON.parse(favoritesJSON);

  return [cart, favorites, addToLocalStorage, removeFromLocalStorage];
}
