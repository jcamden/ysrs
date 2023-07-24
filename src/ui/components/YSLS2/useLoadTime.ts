import { useEffect, useState } from "react";

export const useLoadTime = (time: number | undefined = 1000) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, time);
  }, []);

  return { loaded };
};
