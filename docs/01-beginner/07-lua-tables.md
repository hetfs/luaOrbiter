---
id: 07-lua-tables
title: Tables (Arrays & Dictionaries)
sidebar_position: 7
---

# 🧺 Tables in Lua

Tables are the single most important data structure in Lua. They act as **arrays**, **dictionaries**, **objects**, and **records** — all in one.

---

## 🧩 What Is a Table?

A **table** in Lua is a flexible container that holds **key-value pairs**.

```lua
local player = {
  name = "Ada",
  score = 100
}
print(player.name)  -- Ada
```

You can think of a table like a JSON object in JavaScript or a dictionary in Python.

---

## 🔢 Tables as Arrays

You can use tables with **numeric keys** like arrays:

```lua
local fruits = {"apple", "banana", "cherry"}

print(fruits[1])  -- "apple" (Lua uses 1-based indexing!)
```

Add items:

```lua
fruits[4] = "date"
```

Loop through them:

```lua
for i = 1, #fruits do
  print(fruits[i])
end
```

---

## 🧠 Tables as Dictionaries

Use **string keys** to store named values:

```lua
local settings = {
  volume = 80,
  fullscreen = true
}

print(settings["volume"])     -- 80
print(settings.fullscreen)    -- true
```

You can dynamically assign keys:

```lua
settings["language"] = "en"
```

---

## 🔄 Iterating with `pairs` and `ipairs`

### 🔹 `ipairs` for arrays:

```lua
local colors = {"red", "green", "blue"}

for i, color in ipairs(colors) do
  print(i, color)
end
```

### 🔸 `pairs` for all key-value pairs:

```lua
local config = {
  width = 800,
  height = 600,
  fullscreen = false
}

for key, value in pairs(config) do
  print(key, value)
end
```

---

## ❌ Deleting from a Table

Just assign `nil`:

```lua
settings.fullscreen = nil
```

---

## 🔧 Table Functions

Lua’s `table` library has useful built-ins:

```lua
local items = {"a", "b", "c"}

table.insert(items, "d")
table.remove(items, 2)

for _, v in ipairs(items) do
  print(v)
end
```

---

## 📐 Nested Tables

Tables can contain other tables:

```lua
local game = {
  player = {
    name = "Neo",
    health = 100
  }
}

print(game.player.name)
```

---

## 🧪 Mini Practice

✅ Create a table of numbers from 1 to 5
✅ Add `"six"` as the 6th element
✅ Loop over and print each item

---

## ✅ Lesson Recap

* [ ] I created tables as arrays and dictionaries
* [ ] I accessed and modified table elements
* [ ] I used `pairs` and `ipairs` to loop through tables
* [ ] I used `table.insert()` and `table.remove()`
* [ ] I marked this lesson complete in my [Progress Tracker](./02-beginner-checklist.md)

---
