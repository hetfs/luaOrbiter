---
id: 04-lua-variables
title: Variables in Lua
sidebar_position: 4
---

# 🧠 Mastering Variables in Lua

In Lua, **variables** are essential building blocks. They allow you to label data, manage program state, and pass values between functions. Lua’s **dynamic typing** model makes variables flexible and expressive ideal for scripting, game logic, and embedded systems.

---

## 🔑 Core Concepts

## What Are Variables?

A **variable** is a named placeholder that stores values in memory. Lua uses **dynamic typing**, which means a variable’s type is determined when you assign a value to it not beforehand.

```lua
player = "Alex"     -- String (inferred)
score = 100         -- Number (integer)
is_alive = true     -- Boolean
velocity = 3.14     -- Floating-point number
````

**Key Characteristics**:

* 🧪 **Dynamic Typing**: Variables can store values of any type and be reassigned freely.
* 🧠 **Type Inference**: The Lua runtime infers the type from the assigned value.
* ♻️ **Garbage Collection**: Memory used by variables is automatically reclaimed when no longer referenced.

---

## 📛 Naming Rules and Conventions

## ✅ Valid Names

```lua
health = 100       -- Alphabetic only
_temp = {}         -- Underscore prefix
item3 = "Sword"    -- Alphanumeric suffix
```

## ❌ Invalid Names

```lua
3player = "Lee"      -- Starts with a digit
first-name = "Kai"   -- Hyphen is invalid
$currency = 100      -- Special symbols not allowed
function = true      -- Reserved keywords are forbidden
```

## 🧭 Best Practices

```lua
local player_health = 100  -- Snake_case for variables
local MAX_SPEED = 50       -- UPPER_SNAKE for constants
local function Calculate() -- PascalCase for modules/functions
```

> [Naming convention](https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/)
---

## 🌐 Variable Scope

Scope determines **where** a variable can be accessed or modified.

## 1. Local Variables (Block Scope)

```lua
function calculate()
  local result = 0
  for i = 1, 10 do
    local temp = i * 2
  end
  print(result)
end
```

* ✅ Fast access: \~30–40% faster than globals
* 🧼 Cleaner code with no side effects
* 🧠 Keep the scope as narrow as possible for clarity and safety

## 2. Global Variables (Program Scope)

```lua
_G.config = {debug = true}  -- Explicit global (safer)

function init()
  difficulty = "hard"  -- Implicit global (unsafe!)
end
```

* ⚠️ **Risks**:

  * Memory leaks from persistent values
  * Name conflicts between modules
  * Unintended overwrites during execution

## 3. Table Fields (Object-like Behavior)

```lua
player = {
  name = "Lee",
  score = 0,
  update = function(self)
    self.score = self.score + 10
  end
}

print(player.name)          -- Dot notation
player["score"] = 100       -- Bracket notation
```

* ✅ Encapsulates data logically
* 🚀 Used for objects, modules, and records

---

## ⚙️ Declaration and Assignment

## Basic Patterns

```lua
local x           -- Declared (default = nil)
x = 10            -- Assigned
x = "ten"         -- Type can change freely

local y = 20      -- Declare and assign
```

## Multiple Assignment

```lua
-- Value swap
a, b = 10, 20
a, b = b, a      -- a = 20, b = 10

-- Handling multiple returns
function getStats()
  return 100, "active"
end
local hp, status = getStats()

-- Mismatch examples
local x, y = 5           -- x = 5, y = nil
local p, q = 1, 2, 3     -- p = 1, q = 2 (3 is ignored)
```

---

## ⚠️ Invalid Assignments

Avoid common assignment errors:

```lua
10 = 5                  -- ❌ Literal cannot be assigned
(2 + 3) = 10            -- ❌ Expression is not a container
print() = "result"      -- ❌ Function calls can’t receive values

-- ✅ Correct form
local result = 5 + 5
local sum = 2 + 3
local output = "result"
print(output)
```

---

## ✅ Best Practices

## 1. Always Use `local` When Possible

```lua
-- ❌ Implicit global
function update()
  speed = 5
end

-- ✅ Scoped safely
function update()
  local speed = 5
end
```

## 2. Avoid Global Pollution

```lua
-- Module-style pattern
local GameUtils = {}

function GameUtils.calculateDamage(attack, defense)
  return attack * 1.5 - defense
end

return GameUtils
```

## 3. Enable Strict Global Checking

```lua
-- Works in Lua 5.2+
setmetatable(_G, {
  __newindex = function(_, name)
    error("Global variable '" .. name .. "' is not allowed", 2)
  end,
  __index = function(_, name)
    error("Attempt to read undeclared global '" .. name .. "'", 2)
  end
})
```

## 4. Use Descriptive Names

```lua
local projectile_velocity  -- ✅ Clear and readable
local p_vel                -- ❌ Cryptic and unclear
```

---

## 🧠 Knowledge Check

```lua
-- 1. What’s printed?
local a, b = 10, "20"
print(a .. b)  --> "1020" (number is coerced to string)

-- 2. Spot the issue:
local function test()
  value = 5  -- ❌ Implicit global (missing 'local')
end

-- 3. Fix the syntax:
-- Original: 10 = 5 + 5
local result = 5 + 5  -- ✅ Correct
```

---

 ✅ **Progress Tracker**
[x] I understand variable scoping
[ ] I mastered multiple assignment
[ ] I can avoid global misuse
[ ] I explored strict mode
[ ] I completed [Progress Checklist](./02-beginner-checklist.md)

💡 **Pro Tip**: Use [Luacheck](https://github.com/lunarmodules/luacheck) to:

* Catch accidental globals
* Detect shadowed locals
* Enforce naming conventions
