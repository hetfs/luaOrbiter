---
id: 05-lua-data-types
title: Lua Data Types Deep Dive
sidebar_position: 5
---

# 📦 Understanding Lua Data Types

Lua is a lightweight, dynamically typed language with a compact but powerful set of fundamental data types. Let's explore each type, how they're used, and what makes them unique.

---

## 🔢 Core Data Types Overview

| **Type**    | **Description**           | **Key Traits**                                                              | **Examples**                                   | **Memory Notes**                  |
|-------------|---------------------------|-----------------------------------------------------------------------------|------------------------------------------------|-----------------------------------|
| `nil`       | Absence of value          | • Evaluates as false • Default for uninitialized variables                  | `local x` ; `if value == nil then`             | Minimal (tag only)                |
| `boolean`   | Logical true/false values | • Only `false` and `nil` are falsy • Everything else is truthy              | `is_active = true` ; `done = false`            | ~1 byte                           |
| `number`    | All numeric values        | • No int/float distinction • 64-bit double by default                       | `count = 42` ; `pi = 3.14` ; `0xFF`, `1e3`     | ~8 bytes                          |
| `string`    | Immutable byte sequences  | • Supports binary data • Interned for performance                          | `"Lua"` ; `[[Multiline]]` ; `'char'`           | Header + data (16–24B + content) |
| `function`  | Executable code blocks    | • First-class values • Support closures & varargs (`...`)                  | `function(x) return x*2 end`                   | Depends on upvalues               |
| `userdata`  | External data wrappers    | • Interface to C data • Can be light or full                                | `io.open("file.txt")` ; `ffi.new()`            | Managed by Lua or C allocator     |
| `thread`    | Coroutine handle          | • Cooperative multitasking • Pausable/resumable                             | `coroutine.create(func)`                       | ~2 KB initial memory              |
| `table`     | General-purpose container | • Arrays, maps, objects in one • 1-based indexing • Reference-based         | `{1, 2, 3}` ; `{name="Lee"}` ; `t[1]=100`       | 56B base + per entry              |

> 💡 **Inspect Types**  
> Use `type(value)` to return the type as a string:  
> ```lua
> print(type(123))   --> "number"
> print(type(true))  --> "boolean"
> ```

---

## 🔍 Deep Dive: Key Behaviors & Patterns

## 🧮 Number Precision & Conversion

```lua
print(0.1 + 0.2 == 0.3)   --> false  (floating-point precision issue)
print(7 // 3)             --> 2      (integer division)
print(2^53 + 1 == 2^53)   --> true   (precision loss)

-- Conversions
print(tostring(10))         --> "10"
print(tonumber("FF", 16))   --> 255
````

---

## 🔤 Strings: Internals & Performance

```lua
local a = "Lua"
local b = string.sub("LuaRocks", 1, 3)
print(a == b)    --> true (interned strings are shared)

-- Efficient concatenation
local parts = {"Lua", " ", "5.4"}
print(table.concat(parts))  --> "Lua 5.4"
```

---

## 📚 Tables: Arrays, Dictionaries & OOP

```lua
-- Module-style usage
local Math = {}
function Math.add(a, b) return a + b end

-- Class-like with metatables
local Player = {}
Player.__index = Player

function Player.new(name)
  return setmetatable({name = name, score = 0}, Player)
end

function Player:add(points)
  self.score = self.score + points
end
```

---

## 🧵 Coroutines: Cooperative Threads

```lua
function counter()
  for i = 1, 3 do
    print("Yielding", i)
    coroutine.yield(i)
  end
  return "done"
end

local co = coroutine.create(counter)
while coroutine.status(co) ~= "dead" do
  print("Resumed:", coroutine.resume(co))
end
```

---

## 🔌 Userdata: C Interop

```lua
-- LuaJIT FFI example
local ffi = require("ffi")
ffi.cdef[[
  struct Point { double x; double y; };
]]
local pt = ffi.new("struct Point", {10.5, 20.3})
print(pt.x, pt.y)   --> 10.5  20.3
```

---

## ⚙️ Practical Operations & Common Pitfalls

## ⚠️ Type Coercion Rules

```lua
print("10" + 5)    --> 15    (string coerced to number)
print("10" .. 5)   --> "105" (number to string)
print(10 == "10")  --> false (strict comparison)
```

---

## 🧠 Table Identity vs. Content

```lua
local a = {1, 2, 3}
local b = {1, 2, 3}
print(a == b)      --> false (different references)

-- Deep equality check
function table.equals(t1, t2)
  for k, v in pairs(t1) do if t2[k] ~= v then return false end end
  for k, v in pairs(t2) do if t1[k] ~= v then return false end end
  return true
end
```

---

## 🛡️ Function Sandboxing (Lua 5.1)

```lua
-- Limit function scope with a custom environment
local env = {print = print, math = math}
setfenv(function()
  os = nil  -- Disabled in this sandbox
  return math.sqrt(25)
end, env)()  --> 5
```

> ⚠️ `setfenv` is only available in Lua 5.1 or via compatibility libraries in later versions.

---

## ✅ Type Mastery Checklist

* [ ] I understand value vs. reference semantics
* [ ] I can use metatables for custom behavior
* [ ] I know when to use `userdata` for C integration
* [ ] I can identify coercion and comparison rules

> 🔧 **Pro Tip**: Use [Luacheck](https://github.com/lunarmodules/luacheck) to catch:
>
> * Implicit globals
> * Unused variables
> * Type-related mistakes
> * Shadowed locals
