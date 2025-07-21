---
id: 10-builtin-functions
title: Built-in Functions in Lua
sidebar_position: 10
---

# 🧰 Built-in Functions in Lua

Lua provides a robust set of built-in functions for core programming, math, string manipulation, table handling, and more. You can use them directly no need to import anything.

---

## 📌 Core Functions

These are available globally and cover basic utilities:

| Function         | Description                                             |
|------------------|---------------------------------------------------------|
| `assert()`       | Throws an error if the condition is false               |
| `error()`         | Raises a custom error                                  |
| `print()`         | Prints values to standard output                      |
| `type()`          | Returns the type of a value                           |
| `tonumber()`      | Converts a value to a number                          |
| `tostring()`      | Converts a value to a string                          |

<details>
<summary>▶️ See more core functions</summary>

```lua
getmetatable()
setmetatable()
rawequal()
rawget()
rawset()
rawlen()
next()
pairs()
ipairs()
select()
pcall()
xpcall()
load()
loadfile()
dofile()
collectgarbage()
````

</details>

---

## 🧮 Math Functions

From rounding to trigonometry, the `math` library is essential:

<details>
<summary>▶️ Common math functions</summary>

```lua
math.abs(x)
math.ceil(x)
math.floor(x)
math.max(a, b, ...)
math.min(a, b, ...)
math.sqrt(x)
math.random()
math.randomseed(seed)
```

</details>

<details>
<summary>▶️ Advanced math and constants</summary>

```lua
math.sin(), math.cos(), math.tan()
math.log(x), math.exp(x)
math.deg(x), math.rad(x)
math.pi  -- Constant for π
```

</details>

---

## 📚 String Functions

Powerful string utilities from basic manipulation to pattern matching.

<details>
<summary>▶️ Basic string functions</summary>

```lua
string.len("Lua")
string.upper("Lua")
string.lower("Lua")
string.sub("Lua", 1, 2)
string.rep("Lua", 3)
string.reverse("Lua")
```

</details>

<details>
<summary>▶️ Pattern matching & formatting</summary>

```lua
string.find("hello", "l")
string.match("abc123", "%d+")
string.gmatch("1 2 3", "%d+")
string.gsub("foo", "o", "0")
string.format("Hi %s", "Binahf")
```

</details>

---

## 📏 Table Functions

Great for list manipulation, sorting, and packing/unpacking:

<details>
<summary>▶️ Table manipulation</summary>

```lua
table.insert(t, value)
table.remove(t, index)
table.sort(t)
table.concat(t, ", ")
```

</details>

<details>
<summary>▶️ Advanced table helpers</summary>

```lua
table.unpack(t)
table.move(t1, f, e, t, t2)
```

</details>

---

## ⏲️ OS Functions

Interact with the system clock, environment, and file system.

<details>
<summary>▶️ OS date/time and system tools</summary>

```lua
os.time()
os.date("%Y-%m-%d")
os.clock()
os.difftime(t2, t1)
os.exit()
os.getenv("PATH")
os.remove("file.txt")
```

</details>

---

## 📁 File I/O

Low-level file operations from reading and writing to streaming.

<details>
<summary>▶️ File reading & writing</summary>

```lua
local file = io.open("data.txt", "w")
file:write("Hello Lua!")
file:close()
```

</details>

<details>
<summary>▶️ Other IO helpers</summary>

```lua
io.read(), io.write(), io.flush()
io.input(), io.output()
io.lines()
```

</details>

---

## 🧪 Debug (Advanced)

Use for metaprogramming, profiling, or introspection. Use with caution.

<details>
<summary>▶️ Debug utilities</summary>

```lua
debug.traceback()
debug.getinfo(f)
debug.getlocal(f, i)
debug.setlocal(f, i, value)
debug.getupvalue(f, i)
debug.setupvalue(f, i, value)
debug.sethook(), debug.gethook()
```

</details>

---

## 🧠 Tip: List All Global Functions

Try this in any Lua interpreter to discover available globals:

```lua
for k, v in pairs(_G) do
  if type(v) == "function" then
    print(k)
  end
end
```

---

> 💡 Want to keep track of which functions you've learned? Add a checklist or progress tracker using Markdown or interactive UI components!
