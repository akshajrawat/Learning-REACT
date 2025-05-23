import React, { useState } from "react";
import Component from "./Component";

// import counterContext
import { counterContext } from "./context/context";

const ContextApi = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* Wrap the app in <CounterContext.provider value={value}>... This will make the value available to all the code and child component inside it...*/}

      {/* <counterContext.Provider value={count}> */}

      {/* You can also pass a object in value */}
      <counterContext.Provider value={{ count, setCount }}>
        <div className="text-white flex flex-col justify-center items-center gap-4">
          Hi this is context Api... {count}
          <button
            className="border p-3"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            increament
          </button>
          {/* <Component count={count}/>  
      Accepting count in child component using prop drilling*/}
          <Component />
        </div>
      </counterContext.Provider>
    </>
  );
};

export default ContextApi;
