let Storage: Storage;

if (typeof window !== "undefined") {
  Storage = window.localStorage;
}

const storage = window.localStorage;

const clearWholeStorage = (): void => {
  Storage.clear();
};

const clearStorageItem = (key: string): void => {
  Storage.removeItem(key);
};

export const StorageService = {
  storage,
  clearStorageItem,
  clearWholeStorage,
};
