import { useState } from "react";
export const useHooks = () => {
  const [isClose, setIsClose] = useState<boolean>(false);
  return {
    isClose,
    setIsClose,
  };
};
