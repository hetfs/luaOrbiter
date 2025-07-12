---
id: metatables-oop
title: Metatables and OOP in Lua
sidebar_position: 3
---

# 🧠 Metatables and Object-Oriented Programming in Lua

Lua doesn’t have built-in classes, but with **metatables** and the `__index` metamethod, you can implement powerful object-oriented patterns.

---

## 🔍 What is a Metatable?

A **metatable** is a table that changes the behavior of another table. You can use it to override operators, method lookups, and more.

---

## 📦 The `__index` Metamethod

The most common use of metatables is for **inheritance** or method delegation:

```lua
-- Define a prototype
Character = {health = 100, name = "Unnamed"}

-- Create constructor
function Character:new(o)
  o = o or {}
  setmetatable(o, self)
  self.__index = self
  return o
end

-- Add method
function Character:greet()
  print("Hi, I am " .. self.name)
end

-- Create an instance
hero = Character:new({name = "Luna"})
hero:greet()  -- Output: Hi, I am Luna
```

🧠 The `__index` tells Lua where to look when a field is missing. This enables method sharing across many instances.

---

## 🧱 Custom Operators with `__add`

You can use metatables to override operators too:

```lua
Vector = {}
Vector.__index = Vector

function Vector:new(x, y)
  return setmetatable({x = x, y = y}, self)
end

function Vector:__add(v)
  return Vector:new(self.x + v.x, self.y + v.y)
end

-- Add metamethod
setmetatable(Vector, {
  __add = Vector.__add
})

a = Vector:new(1, 2)
b = Vector:new(3, 4)
c = a + b  -- Vector addition
print(c.x, c.y) -- Output: 4, 6
```

---

## 🧩 Object Patterns You’ll Learn

- Prototypes and cloning
- Method sharing
- Custom operator logic
- Composition vs inheritance

---

## 🔧 Practice Task

Try writing a `Player` object that:

- Inherits from `Character`
- Adds a `level` property
- Has a method to gain XP and level up

---

## ✅ Summary

With metatables and `__index`, Lua can model classes, inheritance, and polymorphism — all using simple tables. You’re now equipped to build robust object systems!

Next up: Error Handling with `pcall` and `xpcall` ➡️
