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

# Important!!!!!!

In case you are working on a big project and have many context API and it create a mess like this in **main.jsx** :-

```js
<AuthProvider>
  <ThemeProvider>
    <CartProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </CartProvider>
  </ThemeProvider>
</AuthProvider>
```

You can make it look more cleaner by making a separate file **AppProviders.jsx**

```js import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";
import { SettingsProvider } from "./contexts/SettingsContext";

const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>
          <SettingsProvider>{children}</SettingsProvider>
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default AppProviders;
```

Then in **main.jsx** or **App.jsx** :-

```js
import AppProviders from "./AppProviders";
import App from "./App";

<AppProviders>
  <App />
</AppProviders>;
```

## Benefits of This Pattern

- Keeps your main entry file clean

- Makes it easier to manage/remove/reorder providers

- Scales well for large projects

- You can even create different provider setups for different parts of your app (e.g. admin vs user)

## Should we always wrap the App with Provider?

**Yes, it’s generally good practice to wrap your whole app with a context provider if:**

- The context provides a global concern (like authentication, theme, language, or routing).

- You might need the context in various parts of the app later.

- The context is lightweight and doesn’t re-render unnecessarily.

- But for local or niche state, it's better to scope it to where it’s needed.
