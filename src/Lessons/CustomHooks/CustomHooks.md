# 📌 Custom Hooks in React

## 🔍 What Are Custom Hooks?

Custom Hooks are **JavaScript functions** that let you extract and reuse component logic using React’s hooks like `useState`, `useEffect`, etc. They start with the word `use` and follow the same rules as built-in hooks.

---

## ✨ Why Use Custom Hooks?

- Reuse logic across multiple components
- Clean and organized code
- Separate concerns (e.g. fetching, event handling)
- Improve testability and scalability

---

## 🧱 Basic Structure

```js
import { useState, useEffect } from "react";

const useCustomHook = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // logic here
  }, []);

  return data;
};

export default useCustomHook;
```
