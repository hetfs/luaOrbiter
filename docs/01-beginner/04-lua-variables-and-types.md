---
id: 04-lua-variables-and-types
title: Variables & Data Types
sidebar_position: 4
---

# 🧠 Mastering Variables and Data Types

## 🔑 Core Concepts

### What is a Variable?
A **variable** is a named container that stores values in memory. Lua uses **dynamic typing** - variable types are determined at runtime based on assigned values.

```lua
player = "Alex"     -- String
score = 100         -- Number
is_alive = true     -- Boolean
```

### Variable Naming Rules
- **Valid names**: `health`, `_temp`, `item3`
- **Invalid names**: `3player`, `first-name`, `$currency`
- **Case-sensitive**: `Position ≠ position`
- **Cannot use keywords**: `local`, `function`, `end`, etc.

---

## 🌐 Variable Scopes

### 1. Local Variables (Recommended)
```lua
function calculate()
  local result = 0  -- Only accessible in calculate()
  print(result)
end
```
- Declared with `local`
- Limited to current block/function
- 30-40% faster access than globals

### 2. Global Variables (Use Sparingly)
```lua
_G.config = {}  -- Explicit global (accessible anywhere)

function init()
  difficulty = "hard"  -- Implicit global (risky!)
end
```
- Persist throughout program lifetime
- Accessible via `_G` table
- Risk of name collisions and memory leaks

### 3. Table Fields
```lua
player = {
  name = "Lee",     -- Field
  score = 0,        -- Field
  update = function() end  -- Function field
}
```
- Stored in Lua's primary data structure
- Accessed via `object.field` or `object["field"]`

---

## ⚙️ Declaring & Assigning Variables

### Basic Patterns
```lua
local x           -- Declaration (value = nil)
x = 10            -- Assignment

local y = 20      -- Declaration + initialization

local a, b = 5, "text"  -- Multiple assignment
```

### Special Cases
```lua
local p, q = 5            -- p=5, q=nil
local r, s = 1, 2, 3      -- r=1, s=2 (3 discarded)
local t = 5; t = "five"   -- Dynamic typing in action
```

---

## 🔄 Assignment Mechanics

### Valid Left-Side (Containers)
```lua
health = 100            -- Simple variable
inventory.weapon = "sword"  -- Table field
x, y = 10, 20           -- Parallel assignment
```

### Valid Right-Side (Values)
```lua
name = "Lua"                      -- String literal
damage = base_dmg * multiplier    -- Math expression
now = os.time()                   -- Function return
```

### Invalid Assignments
```lua
10 = 5                 -- Error: literal on left
(2 + 3) = 10           -- Error: expression not container
print() = "result"     -- Error: function call not container
```

### Parallel Assignment
```lua
-- Swap without temp variable
x, y = 10, 20
x, y = y, x  -- x=20, y=10

-- Capture multiple returns
function get_coords() return 100, 200 end
pos_x, pos_y = get_coords()

-- Handle mismatched counts
a, b = 1, 2, 3  -- a=1, b=2 (3 ignored)
c, d = 5        -- c=5, d=nil
```

---

## 📦 Fundamental Lua Data Types

| Type | Description | Key Features | Example |
|------|-------------|--------------|---------|
| **`nil`** | Absence of value | - Evaluates false<br/>- Different from empty | `local x` |
| **`boolean`** | Logical true/false | - Only `false`/`nil` falsey<br/>- Used in conditionals | `is_active = true` |
| **`number`** | Numeric values | - Integer/float subtypes<br/>- Auto-convert when needed | `score = 9.8`<br/>`count = 42` |
| **`string`** | Text data | - Immutable sequences<br/>- 8-bit clean | `name = "Lua"` |
| **`function`** | Executable code | - First-class citizens<br/>- Support closures | `function add(a,b) return a+b end` |
| **`userdata`** | C data containers | - Full (Lua-managed)<br/>- Light (C pointers) | `file = io.open("test.txt")` |
| **`thread`** | Coroutine handles | - Cooperative multitasking<br/>- Not OS threads | `co = coroutine.create(fn)` |
| **`table`** | Primary data structure | - Associative arrays<br/>- Can mix types | `player = {name="Lee", score=100}` |

> 💡 **Type Identification**: Use `type(value)` to inspect values at runtime

### Type Insights
1. **Numbers**: 
   ```lua
   a = 5       -- Integer
   b = 2.0     -- Float
   print(a == b)  --> true (auto-convert)
   ```

2. **Tables as Universal Containers**:
   ```lua
   -- Array + dictionary + object
   config = {
     "Lua",            -- index 1
     version = 5.4,    -- key "version"
     log = function(msg) print(msg) end
   }
   ```

3. **Coroutine Execution**:
   ```lua
   co = coroutine.create(function()
     print("Coroutine active")
   end)
   coroutine.resume(co)  -- Runs the thread
   ```

4. **Userdata in Practice**:
   ```lua
   -- Typical file handle
   local file = io.open("data.txt", "r")
   print(type(file))  --> userdata
   ```

---

## 🧪 Practical Examples

### Strings
```lua
local path = "C:/Program Files/Lua"
print(string.upper(path))  --> "C:/PROGRAM FILES/LUA"
print(path:sub(1, 3))      --> "C:/" (method syntax)
```

### Numbers
```lua
print(7 // 3)     --> 2 (integer division)
print(2 ^ 10)     --> 1024 (exponentiation)
print(math.floor(3.9))  --> 3
```

### Booleans
```lua
local has_key = false
local door_locked = true

if door_locked and not has_key then
  print("You need a key!")
end
```

---

## ✅ Best Practices

1. **Prefer Local Variables**:
   ```lua
   local function calculate()
     local result = 0  -- Local is faster/safer
     -- ...
   end
   ```

2. **Avoid Global Pollution**:
   ```lua
   -- Module pattern
   local M = {}
   function M.init() end
   return M
   ```

3. **Strict Mode (Lua 5.2+)**:
   ```lua
   setmetatable(_G, {
     __newindex = function(_, n)
       error("global '"..n.."' not allowed", 2)
     end
   })
   ```

4. **Descriptive Naming**:
   ```lua
   local player_health -- Clear
   local ph           -- Avoid
   ```

---

## 🧠 Check Your Understanding

```lua
-- 1. What's the output?
local a, b = 10, "20"
print(a .. b)  --> "1020"

-- 2. Spot the error:
local function test()
  value = 5  -- Implicit global!
end

-- 3. Fix the assignment:
-- Original: 10 = 5 + 5
local result = 5 + 5  -- Correct
```

> ✅ **Progress Checklist**  
> [ ] I can declare variables with proper scope  
> [ ] I understand Lua's data types  
> [ ] I can use parallel assignment  
> [ ] I completed [Progress Tracker](./02-beginner-checklist.md)

💡 **Pro Tip**: Use [Luacheck](https://github.com/lunarmodules/luacheck) to detect scoping issues and common mistakes!
