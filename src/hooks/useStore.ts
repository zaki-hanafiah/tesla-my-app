import { useState } from "react";

export const useStore = () => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  return {
    isFullScreen,
    setIsFullScreen,
  };
};
