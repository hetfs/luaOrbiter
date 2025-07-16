---
id: 05-lua-operators.md
title: Lua Operators
sidebar_position: 5
---

# 🧮 Lua Operators

Lua offers a powerful and flexible set of operators for performing mathematical calculations, logical evaluations, and data manipulation. Operators act on values called **operands** to produce results.

---

### 🔢 Arithmetic Operators

Arithmetic operators perform basic mathematical operations. Lua handles automatic conversion between integers and floats behind the scenes.

| Operator | Description            | Example      | Result |
|----------|------------------------|--------------|--------|
| `+`      | Addition               | `5 + 3`      | `8`    |
| `-`      | Subtraction            | `10 - 4`     | `6`    |
| `*`      | Multiplication         | `3 * 2.5`    | `7.5`  |
| `/`      | Division (float)       | `10 / 4`     | `2.5`  |
| `//`     | Floor division         | `10 // 4`    | `2`    |
| `%`      | Modulo (remainder)     | `10 % 3`     | `1`    |
| `^`      | Exponentiation         | `2 ^ 3`      | `8`    |
| `-`      | Unary minus (negation) | `-(-5)`      | `5`    |

```lua
print(7 // 3)    --> 2   (integer division)
print(7 / 3)     --> 2.333...
print(2 ^ 8)     --> 256
````

---

### ⚖️ Relational Operators

Relational operators compare values and return a boolean result: `true` or `false`.

| Operator | Description        | Example       | Result  |
| -------- | ------------------ | ------------- | ------- |
| `==`     | Equal to           | `5 == 5.0`    | `true`  |
| `~=`     | Not equal to       | `"5" ~= 5`    | `true`  |
| `<`      | Less than          | `10 < 5`      | `false` |
| `>`      | Greater than       | `math.pi > 3` | `true`  |
| `<=`     | Less than or equal | `10 <= 10`    | `true`  |
| `>=`     | Greater or equal   | `8 >= 2^3`    | `true`  |

**Important behaviors:**

* Different types never compare as equal (`"0" == 0` → `false`)
* Tables and userdata are compared by reference
* `NaN` (e.g. `0/0`) is never equal to itself
* You can override comparison behavior using metamethods: `__eq`, `__lt`, `__le`

---

### 🧠 Logical Operators

Logical operators work with **truthy** and **falsey** values:

* Only `false` and `nil` are considered falsey
* Everything else is truthy (including `0` and `""`)

| Operator | Description                        | Example          | Result  |
| -------- | ---------------------------------- | ---------------- | ------- |
| `and`    | Returns first falsey or last value | `nil and 10`     | `nil`   |
| `or`     | Returns first truthy or last value | `false or "Lua"` | `"Lua"` |
| `not`    | Boolean negation                   | `not (1 == 1)`   | `false` |

```lua
-- Default fallback
port = config.port or 8080

-- Safe access
name = user and user.name

-- Ternary-like expression
result = (score > 50) and "Pass" or "Fail"
```

---

### 📏 Length Operator (`#`)

Returns the length of:

* a **string** (number of bytes/characters)
* a **table sequence** (integer keys starting from 1)

```lua
message = "Lua"
print(#message)    --> 3

colors = {"red", "green", "blue"}
print(#colors)     --> 3

-- Sparse tables return undefined results
sparse = {[1] = "a", [3] = "c", [5] = "e"}
print(#sparse)     --> 1, 3, or 5 (unspecified)
```

**Notes:**

* Lua treats a table as a *sequence* if its keys are continuous from 1 without `nil` gaps
* The length behavior can be customized using the `__len` metamethod

---

### 🔗 Concatenation Operator (`..`)

Used to join strings. Automatically converts numbers to strings when needed.

```lua
name = "Lua"
version = 5.4
print(name .. " " .. version)  --> "Lua 5.4"

-- Custom concatenation with __concat
local t = { value = 5 }
setmetatable(t, {
  __concat = function(a, b)
    return a.value + b.value
  end
})
print(t .. t)  --> 10
```

---

### ⚙️ Bitwise Operators

Perform operations on the binary (bitwise) representations of integers. Available since Lua 5.3+.

| Operator | Description       | Example    | Result |     |     |
| -------- | ----------------- | ---------- | ------ | --- | --- |
| `&`      | Bitwise AND       | `5 & 3`    | `1`    |     |     |
| \`       | \`                | Bitwise OR | \`5    | 3\` | `7` |
| `~`      | Bitwise XOR       | `5 ~ 3`    | `6`    |     |     |
| `>>`     | Right shift       | `8 >> 1`   | `4`    |     |     |
| `<<`     | Left shift        | `1 << 3`   | `8`    |     |     |
| `~`      | Unary bitwise NOT | `~0`       | `-1`   |     |     |

```lua
-- Combine RGB into one hex color
function rgb(r, g, b)
  return (r << 16) | (g << 8) | b
end

print(string.format("%x", rgb(255, 128, 0)))  --> ff8000
```

---

### 📊 Operator Precedence

Operators follow a specific order of evaluation, from highest to lowest precedence:

| Precedence | Operators                            |    |
| ---------- | ------------------------------------ | -- |
| 1 (High)   | `^`                                  |    |
| 2          | `not`, `#`, `-` (unary), `~` (unary) |    |
| 3          | `*`, `/`, `//`, `%`                  |    |
| 4          | `+`, `-`                             |    |
| 5          | `..`                                 |    |
| 6          | `<<`, `>>`                           |    |
| 7          | `&`                                  |    |
| 8          | `~`                                  |    |
| 9          | \`                                   | \` |
| 10         | `<`, `>`, `<=`, `>=`, `~=`, `==`     |    |
| 11         | `and`                                |    |
| 12 (Low)   | `or`                                 |    |

```lua
result = 5 + 2 * 3 ^ 2
-- 3^2 = 9 → 2*9 = 18 → 5+18 = 23
```

---

### 🔄 Type Coercion Rules

Lua performs automatic type conversion in specific contexts:

| Context              | Automatic Conversion              |
| -------------------- | --------------------------------- |
| Arithmetic           | Strings → Numbers (`"10"` → `10`) |
| Concatenation        | Numbers → Strings (`5` → `"5"`)   |
| Bitwise Operations   | Floats → Integers (`5.0` → `5`)   |
| Relational Operators | ❌ No automatic conversion         |

```lua
print("10" + 5)     --> 15       (string → number)
print(10 .. 5)      --> "105"    (number → string)
print("5" == 5)     --> false    (no coercion)
```

> 💡 **Tip**: Prefer explicit conversions using `tonumber()` and `tostring()` for clarity and reliability.
