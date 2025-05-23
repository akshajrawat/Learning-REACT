import React from "react";

//Import useContext for getting the value
import { useContext } from "react";
import { counterContext } from "./context/context";

const Component = () => {
  // Set up the counter using useContext for single value
  //   const counter = useContext(counterContext);

  // Set up the counter using useContext for object value.. so you can access all the value using {value.count}, {value.setCount}...
  const value = useContext(counterContext);

  //   Use the {counter} freely...
  return (
    <div className="bg-amber-700 flex justify-center items-center p-10 ">
      hi this is sample component and it will show the count :- {value.count}
    </div>
  );
};

export default Component;
