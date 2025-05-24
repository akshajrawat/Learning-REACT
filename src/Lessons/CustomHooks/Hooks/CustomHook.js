import { useState, useEffect } from "react";

const useCustomHook = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // logic here
  }, []);

  return data;
};

export default useCustomHook;
