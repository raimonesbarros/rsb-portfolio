import { isClient } from "~/utils";

let Storage: Storage;

if (typeof window !== "undefined") {
  Storage = window.localStorage;
}

const clearWholeStorage = (): void => {
  Storage.clear();
};

const getStorageItem = (key: string): any => {
  if (isClient) {
    const item = Storage.getItem(key);

    return item;
  }
};

const clearStorageItem = (key: string): void => {
  Storage.removeItem(key);
};

export const StorageService = {
  clearStorageItem,
  clearWholeStorage,
  getStorageItem,
};
