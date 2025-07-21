---
id: 08-lua-control-flow
title: Control Flow
sidebar_position: 8
---

# 🔀 Control Flow in Lua

Control flow allows your Lua program to **make decisions** and **repeat actions**. It’s how you guide your code to decide *what happens next*.

---

## 🧠 Overview of Control Structures

| Type           | Keywords                      | Purpose                           |
|----------------|-------------------------------|-----------------------------------|
| **Conditionals** | `if`, `elseif`, `else`         | Choose between actions            |
| **Loops**        | `while`, `repeat`, `for`       | Repeat code                       |
| **Flow Control** | `break`, `goto` (rarely used) | Exit or jump in code              |

---

## ✅ Conditionals

<details>
<summary><strong>✨ Basic `if`, `elseif`, and `else`</strong></summary>

```lua
local score = 85

if score >= 90 then
  print("Excellent!")
elseif score >= 70 then
  print("Good job!")
else
  print("Keep practicing.")
end
```

> 🔎 In Lua, only `false` and `nil` are treated as false. Everything else is true.
</details>

<details>
<summary><strong>🧮 Ternary-like Expression</strong></summary>

Lua doesn’t have a real ternary operator, but you can simulate one with `and`/`or`:

```lua
local fuel = 15
local status = (fuel > 20) and "OK" or "LOW"
print(status)  --> LOW
```
</details>

---

## 🔁 Loops

<details>
<summary><strong>📍 `while` Loop</strong></summary>

```lua
local i = 1
while i <= 5 do
  print(i)
  i = i + 1
end
```

> ✅ Runs as long as the condition is true (checked before the loop starts).
</details>

<details>
<summary><strong>🔁 `repeat` / `until` Loop</strong></summary>

```lua
local input
repeat
  print("Press 'q' to quit")
  input = io.read()
until input == "q"
```

> ✅ Runs at least once before checking the condition.
</details>

<details>
<summary><strong>🔢 Numeric `for` Loop</strong></summary>

```lua
for i = 1, 5 do
  print(i)
end

for i = 10, 1, -2 do
  print(i)
end
```
</details>

<details>
<summary><strong>🔍 Generic `for` Loop with Iterators</strong></summary>

```lua
for i, v in ipairs({"a", "b", "c"}) do
  print(i, v)
end

for k, v in pairs({x = 1, y = 2}) do
  print(k, v)
end
```
</details>

---

## 🚧 Loop Control Tools

<details>
<summary><strong>⛔ `break`: Exit a Loop Early</strong></summary>

```lua
for i = 1, 10 do
  if i == 5 then break end
  print(i)
end
```
</details>

<details>
<summary><strong>⚠️ `goto`: Use with Care</strong></summary>

```lua
::retry::
if not connect() then
  sleep(1)
  goto retry
end
```

> ⚠️ Use `goto` only when necessary, such as retries or nested loop exits.
</details>

---

## 🔍 Best Practices

✅ Use the right loop for your task:

```lua
-- Count known steps → use `for`
for i = 1, 10 do ... end

-- Unknown steps → use `while`
while not done do ... end
```

✅ Use `ipairs()` for sequential tables  
✅ Declare loop variables locally  
✅ Avoid infinite loops—always include a stop condition  

---

## 🧩 Advanced Examples

<details>
<summary><strong>🔂 Exit Nested Loops</strong></summary>

```lua
for i = 1, 5 do
  for j = 1, 5 do
    if grid[i][j] == "X" then
      goto done
    end
  end
end
::done::
```
</details>

<details>
<summary><strong>⏱️ Custom Iterator</strong></summary>

```lua
function countdown(n)
  local i = n + 1
  return function()
    i = i - 1
    if i >= 0 then return i end
  end
end

for num in countdown(3) do print(num) end
```
</details>

---

## 🧪 Test Yourself

<details>
<summary><strong>📘 Check Your Understanding</strong></summary>

### 1. What will this print?

```lua
local age = 18
if age >= 21 then
  print("You can drink")
else
  print("Not allowed")
end
```

<details>
<summary>💡 Show Answer</summary>

✅ Output: `Not allowed`
</details>

---

### 2. What will this print?

```lua
local score = 75
if score >= 90 then
  print("A")
elseif score >= 80 then
  print("B")
elseif score >= 70 then
  print("C")
else
  print("F")
end
```

<details>
<summary>💡 Show Answer</summary>

✅ Output: `C`
</details>

---

### 3. What prints here?

```lua
for i = 1, 3 do
  print("Lua is cool!")
end
```

<details>
<summary>💡 Show Answer</summary>

✅ Output: printed 3 times
</details>

---

### 4. Fix the infinite loop:

```lua
local count = 1
while true do
  print(count)
  -- ??
end
```

<details>
<summary>💡 Show Answer</summary>

```lua
while true do
  print(count)
  count = count + 1
  if count > 5 then break end
end
```
</details>

---

### 5. What’s the output?

```lua
local x = 3
while x > 0 do
  print(x)
  x = x - 1
end
```

<details>
<summary>💡 Show Answer</summary>

```
3
2
1
```
</details>

---

### 6. What does this `repeat` loop do?

```lua
local n = 1
repeat
  print(n)
  n = n + 1
until n > 3
```

<details>
<summary>💡 Show Answer</summary>

```
1
2
3
```
</details>

---

### 7. What does this loop print?

```lua
for i = 10, 6, -2 do
  print(i)
end
```

<details>
<summary>💡 Show Answer</summary>

```
10
8
6
```
</details>

---

### 8. What happens here?

```lua
for i = 1, 5 do
  if i == 3 then break end
  print(i)
end
```

<details>
<summary>💡 Show Answer</summary>

```
1
2
```
</details>

---

### 9. Predict the result:

```lua
for i = 1, 4 do
  if i % 2 == 0 then
    goto skip
  end
  print(i)
  ::skip::
end
```

<details>
<summary>💡 Show Answer</summary>

```
1
3
```
</details>

---

### 10. What keyword exits a function early?

A. `stop`
B. `exit`
C. `break`
D. `return`

<details>
<summary>💡 Show Answer</summary>

✅ Answer: **D. `return`**
</details>
</details>

---

## 🔍 `ipairs()` vs `pairs()`

Both are used to loop through tables. Here's how they differ:

### 🔢 `ipairs()`  For List-Like Tables

* Goes through `1, 2, 3, ...`
* Stops at the first `nil`

```lua
local fruits = {"apple", "banana", "cherry"}

for i, v in ipairs(fruits) do
  print(i, v)
end
```

✅ Best for arrays or ordered lists.

---

### 🗂️ `pairs()` For Key-Value Tables

* Loops over all keys: strings, numbers, etc.
* Doesn’t stop at `nil` unless the key is missing

```lua
local person = {
  name = "Binahf",
  age = 28,
  city = "Accra"
}

for k, v in pairs(person) do
  print(k, v)
end
```

✅ Use for dictionaries or mixed tables.

---

### 🔬 Comparison

| Feature         | `ipairs()`   | `pairs()`                 |
| --------------- | ------------ | ------------------------- |
| Keys            | Numeric only | Any key type              |
| Stops at `nil`? | Yes          | No                        |
| Order           | Ordered      | Unordered                 |
| Use case        | Arrays/lists | Dictionaries/mixed tables |

---

### 🚧 Mixed Table Example

```lua
local data = {
  "one",
  "two",
  [10] = "ten",
  name = "Lua"
}

print("With ipairs:")
for i, v in ipairs(data) do print(i, v) end

print("With pairs:")
for k, v in pairs(data) do print(k, v) end
```

🧠 Output:

```
With ipairs:
1 one
2 two

With pairs:
1 one
2 two
10 ten
name Lua
```

---

## ✅ Self-Check

* [ ] I can write `if`, `elseif`, and `else` blocks
* [ ] I know when to use `for`, `while`, or `repeat`
* [ ] I can use `ipairs()` and `pairs()` properly
* [ ] I avoid using `goto` unless absolutely necessary

🎯 You’ve now mastered control flow in Lua! Time to build interactive, decision-making scripts.
