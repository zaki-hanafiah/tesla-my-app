import { usePersistedState } from "hooks";

export const useStore = () => {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isFullScreen, setIsFullScreen] = usePersistedState<boolean>(
    "isFullScreen",
    false,
  );
  const [darkModeOn, setDarkModeOn] = usePersistedState<boolean>(
    "darkModeOn",
    isDarkTheme,
  );

  return {
    isFullScreen,
    setIsFullScreen,
    darkModeOn,
    setDarkModeOn,
  };
};
