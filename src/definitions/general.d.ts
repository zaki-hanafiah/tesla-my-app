export interface IStoreState {
  isFullScreen?: boolean;
  setIsFullScreen: (value: boolean) => void;
  darkModeOn?: boolean;
  setDarkModeOn: (value: boolean) => void;
}
