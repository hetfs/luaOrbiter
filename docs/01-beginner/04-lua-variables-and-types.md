---
id: 04-lua-variables-and-types
title: Variables & Data Types
sidebar_position: 4
---

# 🧠 Variables & Data Types

Let’s start writing real Lua code by understanding variables and the basic types you'll use daily.

---

## 🧩 What Is a Variable?

A **variable** is a named container that holds a value. Lua variables are dynamically typed — meaning their types are determined at runtime.

```lua
name = "Lua"
year = 1993
isAwesome = true
````

---

## 🔢 Basic Data Types in Lua

| Type       | Example              | Description                          |
| ---------- | -------------------- | ------------------------------------ |
| `nil`      | `value = nil`        | Represents *no value* or *undefined* |
| `boolean`  | `true`, `false`      | Logic conditions                     |
| `number`   | `x = 3.14`           | Floating-point or integers           |
| `string`   | `"Hello"`            | Text enclosed in quotes              |
| `table`    | `{1, 2, 3}`          | Lua’s only compound data type        |
| `function` | `function foo() end` | Functions are first-class values     |

---

## 🔍 Declaring Variables

```lua
local username = "orbiter"
print(username)
```

* `local` means this variable is visible only in the current block or function.
* Without `local`, the variable becomes global.

---

## 📏 Dynamic Typing in Action

You don’t declare types — Lua figures it out at runtime.

```lua
value = 10      -- a number
value = "ten"   -- now it's a string
value = true    -- now it's a boolean
```

This flexibility makes Lua quick to write, but you need to stay mindful of what type you're working with.

---

## 📘 String Operations

```lua
local first = "Lua"
local second = "Orbiter"
print(first .. " " .. second) -- concatenation
```

The `..` operator is used to **concatenate strings**.

You can also use string library functions:

```lua
local msg = "hello world"
print(string.upper(msg)) -- HELLO WORLD
```

---

## 🧮 Number Math

```lua
a = 5
b = 2
print(a + b)   -- 7
print(a * b)   -- 10
print(a ^ b)   -- 25 (exponentiation)
print(a % b)   -- 1 (modulo)
```

Lua only has **one number type**: a floating-point double (`number`). It handles both integers and floats.

---

## 🕵️ Boolean Logic

```lua
isDay = true
isNight = false

if isDay then
  print("The sun is out!")
end
```

Use boolean values for decision-making. Only `false` and `nil` are considered *falsey* — everything else is *truthy*.

---

## 🧼 nil — Lua's "Nothing"

If a variable doesn't exist or you explicitly set it to `nil`, it means "no value."

```lua
local username = nil
print(username) --> nil (nothing to print)
```

You can even remove values from tables using `nil`.

---

## 🧪 Mini Practice

✅ What does this print?

```lua
local x = 5
x = x + 3
print(x)
```

✅ Guess the output:

```lua
local result = "Lua" .. 2025
print(result)
```

✅ What type is this?

```lua
local t = {1, 2, 3}
print(type(t))
```

---

## ✅ Lesson Recap

* [ ] I understand how to declare and assign Lua variables
* [ ] I used `nil`, `boolean`, `number`, and `string` types
* [ ] I performed string and number operations
* [ ] I marked this lesson complete in my [Progress Tracker](./02-beginner-checklist.md)

---
