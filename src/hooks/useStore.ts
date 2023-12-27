import { usePersistedState } from "hooks";

export const useStore = () => {
  const [isFullScreen, setIsFullScreen] = usePersistedState<boolean>(
    "isFullScreen",
    false,
  );

  return {
    isFullScreen,
    setIsFullScreen,
  };
};
