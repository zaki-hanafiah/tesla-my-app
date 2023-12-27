import React, { createContext } from "react";
import { IStoreState } from "definitions";
import { useStore } from "hooks";

export const StoreContext = createContext<IStoreState>({
  isFullScreen: false,
});

export const StoreProvider = ({ children }: IStoreProps) => {
  const store_data = useStore();

  return (
    <StoreContext.Provider value={store_data}>{children}</StoreContext.Provider>
  );
};

interface IStoreProps {
  children: React.ReactNode;
}
