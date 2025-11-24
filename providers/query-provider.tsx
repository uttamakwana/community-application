// src/providers/QueryProvider.tsx
import { queryClient } from "@/queries/client";
import { persister } from "@/queries/persister";
import NetInfo from "@react-native-community/netinfo";
import { QueryClientProvider, focusManager } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import React from "react";

NetInfo.addEventListener((state) => {
  focusManager.setFocused(state.isConnected ?? true);
});

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </PersistQueryClientProvider>
  );
}
