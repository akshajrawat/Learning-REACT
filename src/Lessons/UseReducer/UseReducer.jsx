import React from "react";

// Lets create a simple counter usiing useReducer Hook

// import the hook
import { useReducer } from "react";

const UseReducer = () => {
  // make the reducer function.. This function takes 2 params :- state and action.
  //   state is the defined state in this case Count and action is received from dispatch function.
  const reducer = (state, action) => {
    console.log(state);
    console.log(action);

    // Now you can run code on state using the provided action:-

    if (action.type === "INCREMENT") {
      return state + 1;
    }
    if (action.type === "DECREMENT") {
      return state - 1;
    }
  };

  // Set up the hook
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="text-white flex justify-center items-center flex-col gap-10 pt-10">
      <h1>{count}</h1>

      {/* Both the onClick funtion are sending an object to the reducer fucyion in action parameter */}
      <div className="flex gap-20">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decreament
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
