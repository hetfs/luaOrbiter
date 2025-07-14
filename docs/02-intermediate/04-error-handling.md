---
id: 04-error-handling
title: Error Handling in Lua
sidebar_position: 4
---

# 🚨 Error Handling in Lua

Mistakes happen — and Lua gives you tools to **handle runtime errors gracefully** without crashing your entire program.

In this lesson, you'll learn how to catch and recover from errors using `pcall` and `xpcall`.

---

## 🔹 Why Error Handling Matters

In production systems, bad input, failed network calls, or file I/O issues can cause runtime errors. If not handled, they will **crash** your script.

Good error handling:

- Prevents full system failure
- Provides helpful debug output
- Keeps the app responsive and recoverable

---

## 🧰 `pcall` – Protected Call

```lua
local success, result = pcall(function()
  return 10 / 0
end)

if not success then
  print("Caught an error: " .. result)
end
```

✅ Output: `Caught an error: attempt to divide by zero`

`pcall` returns `true, result` if the call succeeds, or `false, error message` if it fails.

---

## 🛠 `xpcall` – Protected Call with Traceback

```lua
function risky()
  error("Something went wrong!")
end

function handler(err)
  return "Error captured: " .. err
end

local ok, msg = xpcall(risky, handler)
print(msg)
```

✅ Output: `Error captured: Something went wrong!`

---

## 🧱 Defensive Programming Patterns

Use `pcall`/`xpcall` when:

- Loading external files or user data
- Calling unknown or unstable APIs
- Handling networking or file I/O
- Running untrusted code (e.g. plugins, mods)

---

## 💡 Tip: Logging Errors

You can create a safe executor wrapper:

```lua
function safe(fn)
  local ok, result = xpcall(fn, debug.traceback)
  if not ok then
    print("LOG:", result)
  end
  return ok, result
end
```

---

## 🔧 Practice Task

Write a function that:

- Asks for a file path
- Attempts to open and read it
- Returns the contents, or a user-friendly error message

Use `pcall` to avoid crashing on invalid files.

---

## ✅ Summary

With `pcall` and `xpcall`, you can write robust Lua scripts that catch failures early, log intelligently, and recover gracefully.

Next: Modularizing your Lua projects ➡️
