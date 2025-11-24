// src/queries/persister.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";

export const persister = createAsyncStoragePersister({
  storage: AsyncStorage,
  key: "reactQuery",
  throttleTime: 1000,
});
