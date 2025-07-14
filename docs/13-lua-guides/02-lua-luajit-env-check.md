---
id: 02-lua-luajit-env-check
title: Lua Environment Verification
sidebar_position: 2
description: Verify Lua/LuaJIT environments with sandbox-safe detection techniques
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Lua & LuaJIT Environment Verification

## Basic Environment Checks

## Standard Verification

```lua
print("✅ Lua environment operational")
print("Runtime version: " .. _VERSION)
```

**Output Examples:**

<Tabs>
  <TabItem value="lua" label="Standard Lua">

```text
✅ Lua environment operational
Runtime version: Lua 5.4
```

  </TabItem>
  <TabItem value="luajit" label="LuaJIT">

```text
✅ Lua environment operational
Runtime version: Lua 5.1  // LuaJIT always reports 5.1
```

  </TabItem>
</Tabs>

## Advanced Detection

## Version Comparison Table

| Feature       | Lua 5.x       | LuaJIT         |
|--------------|--------------|--------------|
| `_VERSION`   | Accurate     | Always "Lua 5.1" |
| `jit` table  | Absent       | Present      |
| Performance  | Interpreted  | JIT-compiled |

## Sandbox-Safe Detection

```lua title="safe_detection.lua"
function is_luajit()
  local ok = pcall(function()
    return type(jit) == 'table' and jit.version
  end)
  return ok
end
```

## Performance Optimization

<Tabs>
  <TabItem value="bad" label="Inefficient">

```lua
-- String concatenation in loop
local result = ""
for i = 1, 1000 do
  result = result .. tostring(i)
end
```

  </TabItem>
  <TabItem value="good" label="Optimized">

```lua
-- Table buffering pattern
local buffer = {}
for i = 1, 1000 do
  buffer[#buffer+1] = tostring(i)
end
local result = table.concat(buffer)
```

  </TabItem>
</Tabs>

## Security Considerations

## Diagnostic Script

```lua
local checks = {
  {"Global _G", function() return _G end},
  {"JIT access", function() return jit end},
  {"OS functions", function() return os.exit end}
}

for _, check in ipairs(checks) do
  local ok = pcall(check[2])
  print(check[1] .. ": " .. (ok and "✅" or "❌"))
end
```

## FAQ

<details>
  <summary>Why does LuaJIT report version 5.1?</summary>
  LuaJIT maintains compatibility with Lua 5.1's bytecode and APIs, even though it implements many 5.2+ features.
</details>

<details>
  <summary>How to safely exit in sandboxed environments?</summary>

```lua
-- Graceful fallback when os.exit is blocked
function safe_exit()
  if pcall(os.exit) then return end
  error("Exit blocked by sandbox", 0)
end
```

</details>

## Further Reading

- [_VERSION](https://www.lua.org/manual/5.4/manual.html#pdf-_VERSION)
- [os.exit](https://www.lua.org/manual/5.4/manual.html#pdf-os.exit)
- [LuaJIT Extensions](https://luajit.org/extensions.html)
- [Sandboxing Patterns](https://lua-users.org/wiki/SandBoxes)
