---
id: 07-lua-expressions
title: Expressions in Lua
sidebar_position: 7
---

# 🧠 Expressions in Lua

In Lua, **expressions** are bits of code that produce values. You use them for math, logic, function calls, and building tables.

> 💡 **Beginner Tip**: An *expression* is anything that produces a value when Lua runs it like `3 + 4` or `"Lua" .. "Script"`.

---

<details>
<summary><strong>📘 Simplified Expression Grammar</strong></summary>

Lua expressions follow this basic grammar:

```ebnf
exp ::= prefixexp
      | nil | false | true
      | Numeral | LiteralString
      | functiondef | tableconstructor
      | ...
      | exp binop exp
      | unop exp

prefixexp ::= var | functioncall | (‘exp’)
````

</details>

---

## 🧩 1. Simple Values

<details>
<summary><strong>📦 Click to expand</strong></summary>

These are basic values you can write in Lua:

```lua
local x = nil          -- no value
local flag = true      -- Boolean
local count = 42       -- integer
local pi = 3.14        -- float
local name = "Lua"     -- string
```

You can write strings using:

* Single quotes: `'hello'`
* Double quotes: `"hello"`
* Long brackets: `[[multi-line text]]`

> 💡 **Beginner Tip**: `nil` means no value. `"Lua"` is a string.

</details>

---

## 🧩 2. Combined Expressions

<details>
<summary><strong>🔧 Click to expand</strong></summary>

You can combine expressions to define functions, create tables, or handle flexible input.

## Function Definition

```lua
local square = function(x)
  return x * x
end
```

## Table Creation

```lua
local person = { name = "Ada", age = 28 }
local list = { 10, 20, 30 }
```

## Varargs (Flexible Arguments)

```lua
local function sum(...)
  local total = 0
  for _, n in ipairs({...}) do
    total = total + n
  end
  return total
end
```

> 💡 **Beginner Tip**: The `...` lets a function accept any number of arguments.

</details>

---

## 🧩 3. Operators

<details>
<summary><strong>🧮 Click to expand</strong></summary>

## Binary Operators

```lua
local sum = 3 + 4               -- 7
local area = 5 * 5              -- 25
local same = (5 == 5)           -- true
local logic = true or false     -- true
local name = "Lua" .. "Script"  -- "LuaScript"
```

## Unary Operators

```lua
local neg = -5               -- -5
local len = #"Hello"         -- 5
local nottrue = not true     -- false
local inverted = ~0x0F       -- bitwise NOT
```

> 💡 **Beginner Tip**: Unary means one value (`-5`). Binary means two values (`3 + 4`).

</details>

---

## 🧩 4. Prefix Expressions

<details>
<summary><strong>🧩 Click to expand</strong></summary>

These start with a variable, a function call, or a grouped expression:

```lua
local x = 5
print(x)
local result = (2 + 3) * 4  -- (5) * 4 = 20
```

> 💡 **Beginner Tip**: Use parentheses `()` to control the order of operations.

</details>

---

## 🧠 Key Points to Remember

> 💡 Expressions **evaluate** to values. For example, `not false` becomes `true`.

* Use `...` only inside functions.
* Use parentheses to group expressions.
* Lua does not convert numbers to strings automatically:

```lua
print(10 == "10")  -- false
print(10 == 10.0)  -- true
```

---

## 🧪 Test Yourself!

<details>
<summary><strong>📘 Check your understanding</strong></summary>

**1. Which of these is a valid unary expression?**

A. `-x`
B. `x + 1`
C. `x = 5`
D. `x and y`

<details>
<summary>💡 Show Answer</summary>

✅ **Answer**: A
🧠 **Why?** It uses a unary operator on a single value.

</details>

---

**2. What does `#{1, 2, 3}` return?**

A. `3`
B. `2`
C. `nil`
D. `1`

<details>
<summary>💡 Show Answer</summary>

✅ **Answer**: A
🧠 **Why?** `#` returns the number of list elements.

</details>

---

**3. Which one creates a table?**

A. `{}`
B. `[]`
C. `()`
D. `nil`

<details>
<summary>💡 Show Answer</summary>

✅ **Answer**: A
🧠 **Why?** `{}` creates a table. The others don’t.

</details>

---

**4. True or False: The `#` operator counts items in a table.**

<details>
<summary>💡 Show Answer</summary>

✅ **Answer**: True
🧠 **Why?** It returns the count of list-style elements.

</details>

---

**5. True or False: `()` creates a new table.**

<details>
<summary>💡 Show Answer</summary>

❌ **Answer**: False
🧠 **Why?** `()` groups expressions—it doesn’t create anything.

</details>

---

**6. Fill in the blank: The operator used to join two strings is `__`.**

<details>
<summary>💡 Show Answer</summary>

✅ **Answer**: `..`
🧠 **Why?** Use `..` to concatenate strings.

</details>

---

**7. Fill in the blank: The expression `not false` evaluates to `__`.**

<details>
<summary>💡 Show Answer</summary>

✅ **Answer**: `true`
🧠 **Why?** `not` inverts the Boolean value.

</details>

</details>

---

🎉 Great job! Try these again without hints to solidify your understanding.
