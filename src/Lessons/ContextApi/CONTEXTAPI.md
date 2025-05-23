# Why do we use useContext Hook??
   Suppose we have multiple nested components and from the top most parent component we want a state to be passed on to the last component. (We have to do prop drilling) but passing unwanted components just to do prop drilling on component which do not actually need them is kind of useless. 
   HERE WE CAN USE useContext HOOK!!

# Context API:
    The Context API is a state management feature in React that lets you pass data deeply through the component tree without having to pass props down manually at every level.
    It includes:

    - React.createContext()

    - Context.Provider

    - Context.Consumer (older, less used now)

    - useContext() (React Hook to consume context)


# How to use ContextApi:

    - Create a folder named :- { context }

    - Inside the folder create a {JS_file :- context.js}
        - Visit the file

## In main file: 

    - Import the exported context from {JS_file :- context.js}.... (Here CounterContext.provider)

    - Wrap the app in <CounterContext.provider value={value}>... This will make the value available to all the code and child component inside it...

    - Now accept the value in the child you want



    