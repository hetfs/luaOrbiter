---
id: 05-modules-and-reuse
title: Modules and Code Reuse
sidebar_position: 5
---

# 📦 Modules and Code Reuse in Lua

As your Lua projects grow, organizing your code into **modules** makes it easier to manage, test, and scale. In this lesson, you’ll learn how to define and reuse modules in Lua.

---

## 🧠 Why Use Modules?

Modules allow you to:

- Reuse common logic across scripts
- Avoid repeating yourself (DRY principle)
- Separate concerns for clarity and testing
- Load only what you need

---

## 📁 Basic Module Structure

### `mathutils.lua`

```lua
local M = {}

function M.add(a, b)
  return a + b
end

function M.factorial(n)
  if n == 0 then return 1 end
  return n * M.factorial(n - 1)
end

return M
```

---

### Using the Module

```lua
local mathutils = require("mathutils")

print(mathutils.add(5, 7))        -- Output: 12
print(mathutils.factorial(4))     -- Output: 24
```

🧩 Note: Lua looks for `mathutils.lua` in your `package.path`.

---

## 🔧 Package Path & Loader

Lua loads modules using `package.path`, which defines where Lua looks for files:

```lua
print(package.path)
```

You can modify it like this:

```lua
package.path = package.path .. ";./lib/?.lua"
```

This tells Lua to search for modules in your `lib/` folder too.

---

## 🧪 Best Practices for Modules

- Use a single table to return public functions
- Keep internal (private) helpers local to the module
- Avoid polluting the global namespace
- Split large systems into multiple focused modules

---

## 🔁 Example Use Cases

- `logger.lua` for debug/info/error logging
- `inventory.lua` for item tracking
- `vector.lua` for math utilities
- `dialogue.lua` for interactive stories
- `config.lua` to load settings from file

---

## 🔧 Practice Task

Write a `logger.lua` module with:

- `info()`, `warn()`, and `error()` methods
- Optional timestamps
- Console color output (if supported)

Then require it in your main script and use it in your previous lessons.

---

## ✅ Summary

Modules make Lua code reusable, testable, and modular. Mastering them is essential for serious Lua development.

Next: Coroutines for async workflows ➡️
