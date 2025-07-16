---
id: 06-lua-control-flow
title: Control Flow
sidebar_position: 6
---

# 🔀 Control Flow in Lua

Now that you understand variables and data types, let’s learn how to **control the flow** of your Lua programs — making decisions and repeating actions.

---

## 🧠 What Is Control Flow?

Control flow lets your program:

- **Make decisions** using conditions (`if`, `else`)
- **Repeat actions** using loops (`while`, `for`, `repeat`)

---

## 🧪 `if` / `elseif` / `else`

```lua
local score = 85

if score >= 90 then
  print("Excellent!")
elseif score >= 70 then
  print("Good job!")
else
  print("Keep practicing.")
end
````

* Conditions must evaluate to `true` or `false`.
* Only `false` and `nil` are considered "falsey" — everything else is "truthy".

---

## 🔁 `while` Loop

Repeats **while** a condition is true.

```lua
local i = 1

while i <= 5 do
  print("i = " .. i)
  i = i + 1
end
```

---

## 🔃 `repeat` / `until` Loop

Runs at least once, **then repeats until the condition becomes true**.

```lua
local x = 1

repeat
  print("x = " .. x)
  x = x + 1
until x > 5
```

> Think of this as a reverse `while` — the condition ends the loop.

---

## 🔁 `for` Loop (Numeric)

Use this to loop a known number of times.

```lua
for i = 1, 5 do
  print("Count: " .. i)
end
```

You can also add a step:

```lua
for i = 10, 1, -2 do
  print(i)
end
```

---

## 🧰 Loop Control: `break`

Use `break` to stop a loop early.

```lua
for i = 1, 10 do
  if i == 5 then
    break
  end
  print(i)
end
```

---

## 🧪 Mini Challenges

✅ Predict what this prints:

```lua
local age = 18
if age >= 21 then
  print("You can drink")
else
  print("Not allowed")
end
```

✅ What about this?

```lua
for i = 1, 3 do
  print("Lua is cool!")
end
```

✅ Can you fix this infinite loop?

```lua
local count = 1
while true do
  print(count)
  -- missing something here
end
```

---

## 🧠 When to Use Each

| Use Case                 | Best Tool              |
| ------------------------ | ---------------------- |
| Making choices           | `if`, `elseif`, `else` |
| Repeating known steps    | `for` loop             |
| Repeating with condition | `while` or `repeat`    |
| Checking after execution | `repeat` loop          |

---

## ✅ Lesson Recap

* [ ] I wrote `if` / `else` conditions
* [ ] I created loops with `while`, `for`, and `repeat`
* [ ] I used `break` to stop loops early
* [ ] I marked this lesson complete in my [Progress Tracker](./02-beginner-checklist.md)

---
