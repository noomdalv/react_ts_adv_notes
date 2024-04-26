import { useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T | (() => T)
) => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue == null) {
      return initialValue;
    } else {
      if (typeof storedValue == "function") {
        return (storedValue as () => T)();
      }
      return JSON.parse(storedValue);
    }
  });

  return [value, setValue] as [T, typeof setValue];
};
