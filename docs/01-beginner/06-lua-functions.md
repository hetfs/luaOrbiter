---
id: 06-lua-functions
title: Functions and Scope
sidebar_position: 6
---

# 🛠️ Functions and Scope

Functions are one of Lua's most powerful and flexible features. They let you break code into reusable blocks — essential for clean, modular programs.

---

## 📦 What Is a Function?

A function is a block of code you can call by name. It may take parameters (inputs) and return values (outputs).

```lua
function greet(name)
  print("Hello, " .. name)
end

greet("Lua")
````

---

## 🧮 Returning Values

Functions can return data using the `return` keyword.

```lua
function add(a, b)
  return a + b
end

local result = add(5, 3)
print(result) -- 8
```

You can return multiple values too:

```lua
function min_max(x, y)
  if x > y then
    return y, x
  else
    return x, y
  end
end

local low, high = min_max(10, 3)
```

---

## 📍 Variable Scope

**Scope** determines where a variable exists and can be accessed.

### 🔹 Local Variables

```lua
local x = 42 -- only available inside this block
```

Use `local` to avoid polluting the global namespace.

### 🔸 Global Variables

```lua
y = 10 -- accessible everywhere (not recommended!)
```

Unless marked `local`, variables are **global by default** in Lua.

---

## 💡 Anonymous Functions

Functions are first-class — you can store them in variables or pass them around.

```lua
local say_hi = function()
  print("Hi!")
end

say_hi()
```

---

## 📐 Closures (Functions Inside Functions)

Functions can access variables from their parent scope:

```lua
function outer()
  local msg = "Lua!"

  function inner()
    print("Hello, " .. msg)
  end

  return inner
end

local greet = outer()
greet() -- prints: Hello, Lua!
```

---

## 🧪 Practice Time

✅ Predict the output:

```lua
function multiply(a, b)
  return a * b
end

print(multiply(4, 5))
```

✅ Can you write a function that checks if a number is even?

---

## ✅ Lesson Recap

* [ ] I defined functions with parameters and return values
* [ ] I used local vs global variables
* [ ] I explored closures and anonymous functions
* [ ] I marked this lesson complete in my [Progress Tracker](./02-beginner-checklist.md)

---
