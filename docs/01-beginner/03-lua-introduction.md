---
id: 03-lua-introduction
title: Introduction to Lua
sidebar_position: 3
---

# 🌙 Introduction to Lua

Welcome to **luaOrbiter**, your launchpad into the world of Lua! This powerful yet lightweight language fuels everything from game AI to high-performance web servers. Lua continues to attract developers across industries thanks to its simplicity, speed, and versatility.

```mermaid
graph TD
A[Why Lua Rocks] --> B[Lightweight under 300KB]
A --> C[Blazing Fast Execution]
A --> D[Seamless C Integration]
A --> E[Multi-paradigm Flexibility]
````

---

## 🚀 Why choose Lua

* **Embeddable**: Integrates with C/C++ and other languages
* **Portable**: Runs on any system with an ANSI C (American National Standards Institute C) compiler
* **Minimalist**: Small core with clear, consistent syntax
* **Efficient**: Fast, garbage-collected, register-based VM

## Real-world use cases

| **Domain**     | **Examples**                             |
| -------------- | ---------------------------------------- |
| 🎮 Game Dev    | Roblox, WoW, LÖVE2D                      |
| 🌐 Web Servers | NGINX (engine x)/OpenResty, Kong Gateway |
| 🔌 Embedded    | IoT devices, firmware scripting          |
| 🤖 AI/ML       | Configuration and control logic          |
| 🛠 Tools       | Neovim, Redis, Wireshark                 |

---

## ⚡ First steps with Lua

## Try the REPL (interactive mode)

```bash
> Lua -i
Lua 5.4.8  Copyright (C) 1994-2025 Lua.org

> print("Moonscript: " .. _VERSION)
Moonscript: Lua 5.4

> 5 + math.pi * 2
11.28318530718
> os.exit()
```

### Run a script

1. Create `hello.lua`:

   ```lua
   io.write("Hello from ", _VERSION, "!\n")
   ```

2. Run it:

   ```bash
   $ lua hello.lua
   Hello from Lua 5.4!
   ```

### One-liners by shell

| Shell                    | Command                       |
| ------------------------ | ----------------------------- |
| **Command Prompt (CMD)** | `lua -e "io.write('Hello!')"` |
| **PowerShell**           | `lua -e "io.write('Hello!')"` |
| **Bash**                 | `lua -e 'io.write("Hello!")'` |

> 💡 **Tip**: Use `lua -v` to check your Lua version. Add `#!/usr/bin/env lua` to make scripts executable.

---

## 🔤 Lexical conventions

Lua treats source code as free-form and case-sensitive, ignoring spaces and comments between tokens unless needed as delimiters. It recognizes these whitespace characters from the ASCII (American Standard Code for Information Interchange) set:

* Space, form feed, newline, carriage return, horizontal tab, vertical tab

The following section outlines Lua’s basic building blocks:

---

## 🧱 1. Tokens

Tokens are the smallest components of code with meaning.

## 🔹 Identifiers

Names for variables, functions, and fields.

✅ Valid:

```lua
player_score = 100
_calculateTotal = true
```

❌ Not allowed:

```lua
3dModel = "error"      -- Starts with a digit
function = "oops"      -- Uses a keyword
```

**Rules**:

* Start with a letter or underscore
* Followed by letters, digits, or underscores
* Can't use reserved keywords
* Case-sensitive: `and` ≠ `And` ≠ `AND`

> ⚠️ **Convention**: Avoid names starting with underscore + uppercase letters (e.g., `_VERSION`)

## 🔹 Reserved keywords

| Type         | Keywords                                                                              |
| ------------ | ------------------------------------------------------------------------------------- |
| Control Flow | `if`, `else`, `then`, `end`, `while`, `repeat`, `until`, `break`, `do`, `for`, `goto` |
| Logic        | `and`, `or`, `not`                                                                    |
| Declarations | `local`, `function`, `return`, `in`                                                   |
| Constants    | `true`, `false`, `nil`                                                                |

> 🔎 `nil` = no value; `false` = Boolean false

## 🔹 Literals

Values written directly in code.

```lua
"Hello"           -- String
[[Raw block]]     -- Multiline string
42                -- Integer
0x1.8p3           -- Hex float
true, false, nil  -- Boolean and nil
```

---

## ⚙️ 2. Operators

| Type           | Symbols                      |
| -------------- | ---------------------------- |
| Arithmetic     | `+` `-` `*` `/` `%` `^` `//` |
| Comparison     | `==` `~=` `<` `>` `<=` `>=`  |
| Logical        | `and` `or` `not`             |
| Concatenation  | `..`                         |
| Assignment     | `=`                          |
| Bitwise (5.3+) | `&` `\|` `~` `<<` `>>`       |
| Length         | `#`                          |

---

## 🧩 3. Symbols and delimiters

Used to group and structure Lua code:

* `()` for grouping and function calls
* `{}` for table creation
* `[]` for indexing
* `;` optional statement separator
* `:` method call
* `::label::` for `goto`
* `,` comma separator
* `.` table field access
* `...` expression for passing multiple unnamed arguments

---

## 🧵 Strings in Lua

Lua supports two types of strings:

### 🔸 Short strings

Quoted and supports escapes:

```lua
"Line\nBreak"
'Tabbed\tText'
"\x41\x42"    -- AB (hex escape)
'\117'        -- 'u' (decimal escape)
'\u{1F600}'   -- 😀 (Unicode)
```

### 🔸 Long strings (block strings)

Great for raw, multi-line text with bracket levels:

```lua
[==[
  Multiline
  [[Nested brackets are OK]]
  Text
]==]
```

* Level matching with equal signs: `[= =]`, `[== ==]`, etc.
* Features:

  * Ignore all escape sequences
  * Convert EOL (End of Line) sequences to newline
  * Ignore newline immediately after opening bracket
  * Can contain any text except matching closing bracket

---

### 🧪 String Declaration Examples

<details>
<summary>📦 String Definitions and Outputs (click to expand)</summary>

```lua
-- Examples of different ways to define strings in Lua:

s1 = 'alo\n123"'         -- Uses single quotes, \n adds a newline, " is just a quote inside the string
print(s1)
-- Output:
-- alo
-- 123"

s2 = "alo\n123\""        -- Uses double quotes, escapes the inner quote with \"
print(s2)
-- Output:
-- alo
-- 123"

s3 = '\97lo\10\04923"'   -- Uses ASCII decimal escapes: \97 = 'a', \10 = newline, \049 = '1'
print(s3)
-- Output:
-- alo
-- 123"

s4 = [[alo
123"]]                  -- Long bracket string: raw multiline, no escape sequences needed
print(s4)
-- Output:
-- alo
-- 123"

s5 = [==[
alo
123"]
]==]                    -- Long bracket string with custom delimiters: useful if the string contains ]]
print(s5)
-- Output:
-- alo
-- 123"]
```

🔍 **Why use different styles?**

* Use `'` or `"` for short strings with escape characters like `\n`, `\"`, or `\\`.
* Use `[[...]]` or `[===[...]===[` for raw multiline strings—ideal for embedded content, HTML, or config text.
* Use ASCII escapes (like `\97` or `\10`) when dynamically building strings from byte values.

</details>

---

## 💬 Comments

### 🔸 Single-line

```lua
-- This is a short comment
```

### 🔸 Block (multi-line)

```lua
--[[
  Long comment spanning
  multiple lines
]]
```

### 🔸 Nested comments

```lua
--[==[
  [[Nested]] comments
  --[=[More nesting]=]
]==]
```

### 🔸 Toggle block (debug)

```lua
---[[
print("This code is active when uncommented")
--]]
```

---

## 🔢 Numeric constants

Lua automatically detects numeric types:

```lua
42
0xFF
3.14159
6.02e23
0x1.2p4
0xA23p-4
```

---

## 🧑‍🏫 Syntax best practices

✅ Clean:

```lua
local max_speed = 120
if score >= high_score then
  print("New record!")
end
```

❌ Messy:

```lua
local function = "bad"  -- Reserved keyword
local 2ndPlayer = nil   -- Invalid identifier
```

---

## 🔍 Syntax validation

Use this command to check token structure and syntax:

```bash
luac -p -l your_script.lua
```

---

## ✅ Lesson checklist

* [ ] Ran Lua in REPL mode
* [ ] Created and ran a Lua script
* [ ] Identified valid and problematic tokens
* [ ] Practiced writing identifiers
* [ ] Marked this lesson in the [Progress Tracker](./02-beginner-checklist.md)

> 🗣 "Lua is the Swiss Army knife of scripting—small enough to embed anywhere, powerful enough to run the show."
> – AAA Game Developer

📜 **License**: MIT (Massachusetts Institute of Technology)–like license (free for all uses)
🔗 **Official Site**: [lua.org](https://www.lua.org)
