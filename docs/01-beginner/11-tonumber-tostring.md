---
id: 11-tonumber-tostring
title: Explicit Conversion
sidebar_position: 11
---

# 🔁 `tonumber()` and `tostring()` in Lua

Lua gives you two built-in functions to **explicitly convert** values between strings and numbers:  
- `tonumber()` for converting to numbers  
- `tostring()` for converting to strings

Using them helps prevent unexpected bugs caused by Lua’s automatic coercion.

---

<details>
<summary>🔢 <strong>What is <code>tonumber()</code>?</strong></summary>

### ✅ Convert to Number

```lua
print(tonumber("42"))     --> 42
print(tonumber("3.14"))   --> 3.14
print(tonumber(100))      --> 100
````

### ⚠️ What if conversion fails?

It returns `nil` (not an error):

```lua
print(tonumber("abc"))    --> nil
```

### 🔢 Use optional base (2–36)

Convert strings in other number bases like binary or hex:

```lua
print(tonumber("1010", 2))   --> 10
print(tonumber("1f", 16))    --> 31
```

</details>

---

<details>
<summary>📝 <strong>What is <code>tostring()</code>?</strong></summary>

### ✅ Convert any value to a string

```lua
print(tostring(123))     --> "123"
print(tostring(true))    --> "true"
print(tostring(nil))     --> "nil"
```

### 🧩 Custom string output for tables

If the value is a table, `tostring()` returns a reference unless `__tostring` is defined:

```lua
local t = {}
print(tostring(t))   --> "table: 0x564fe3..."

setmetatable(t, {
  __tostring = function(tbl)
    return "Custom Table"
  end
})

print(tostring(t))   --> "Custom Table"
```

</details>

---

<details>
<summary>🌍 <strong>Real-World Use Cases for <code>tonumber()</code></strong></summary>

### 1. ✅ Validate user input

```lua
local ageInput = "24"
local age = tonumber(ageInput)

if age then
  print("In 10 years, you'll be:", age + 10)
else
  print("Please enter a valid number.")
end
```

### 2. 🔢 Parse hex or binary strings

```lua
print(tonumber("ff", 16))     --> 255
print(tonumber("1101", 2))    --> 13
```

</details>

---

<details>
<summary>📝 <strong>Real-World Use Cases for <code>tostring()</code></strong></summary>

### 1. 🖨️ Safe logging and debugging

```lua
function log(value)
  print("[DEBUG]: " .. tostring(value))
end

log(42)     --> [DEBUG]: 42
log(nil)    --> [DEBUG]: nil
log({})     --> [DEBUG]: table: ...
```

### 2. 📬 Building strings for APIs or CSVs

```lua
local user = { id = 101, name = "Binahf", score = 99.5 }
local row = tostring(user.id) .. "," .. user.name .. "," .. tostring(user.score)
print(row)   --> "101,Binahf,99.5"
```

### 3. 🧩 Format custom table output

```lua
local point = {x = 10, y = 20}

setmetatable(point, {
  __tostring = function(p)
    return "(" .. p.x .. ", " .. p.y .. ")"
  end
})

print(tostring(point))   --> (10, 20)
```

</details>

---

<details>
<summary>🤝 <strong>Using Both Together</strong></summary>

```lua
local num1 = "5"
local num2 = 3

-- Convert for math
print(tonumber(num1) + num2)    --> 8

-- Convert for strings
print(tostring(num1) .. num2)   --> "53"
```

</details>

---

<details>
<summary>🧠 <strong>Summary Table</strong></summary>

| Function     | Purpose                  | Returns           | Safe on Error?        |
| ------------ | ------------------------ | ----------------- | --------------------- |
| `tonumber()` | Converts string → number | `number` or `nil` | ✅ Yes (returns `nil`) |
| `tostring()` | Converts value → string  | `string`          | ✅ Always succeeds     |

</details>

---

> 💡 **Pro Tip**: Always use `tonumber()` and `tostring()` when you're dealing with input, APIs, file formats, or anything that mixes strings and numbers.
