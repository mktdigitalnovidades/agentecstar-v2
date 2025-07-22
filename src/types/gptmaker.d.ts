
declare global {
  interface Window {
    GPTMaker?: {
      open: () => void;
      close: () => void;
    };
  }
}

export {};
