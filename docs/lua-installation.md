---
title: 🛠️ Installation
sidebar_position: 4
---

# 🛠️ Lua Installation Guide

Welcome! This guide walks you through installing **Lua**, **LuaJIT**, and setting up **luaDev** — a modern, secure build system for Lua developers working across platforms and industries.

---

## 🚀 Choose Your Setup

Select the option that fits your needs:

## 🟢 Option 1: Beginner Setup (Quick Start)

Perfect for learning, testing, or experimenting with Lua code.

### 🌐 Use an Online Playground

| Platform                                  | Versions | Multiplayer | Best For         |
|-------------------------------------------|----------|-------------|------------------|
| [Replit](https://replit.com/languages/lua) | 5.1–5.4  | ✅          | Team learning     |
| [glot.io](https://glot.io/new/lua)         | 5.1–5.4  | ❌          | Safe experiments  |
| [OneCompiler](https://onecompiler.com/lua) | 5.4      | ❌          | Quick scripting   |

### 🪟 Install Lua Locally (Optional)

```powershell
winget install --id=DEVCOM.Lua
winget install --id=DEVCOM.LuaJIT
scoop install lua luarocks
````

---

### 🔧 Option 2: Full Setup with `luaDev` (Recommended)

[`luaDev`](https://github.com/hetfs/luaDev) is a modular CMake-based build system for:

* 🔐 Hardened Lua + LuaJIT builds
* 🧰 Automated toolchain setup
* 📦 LuaRocks & C module integration
* 📑 Markdown-based build reports

---

## 🧰 What `luaDev` Installs Automatically

| Tool       | Purpose                         |
| ---------- | ------------------------------- |
| LLVM/Clang | Compile Lua + native modules    |
| Lua/LuaJIT | Core runtimes                   |
| LuaRocks   | Dependency manager              |
| Busted     | Unit testing                    |
| Luacheck   | Linter and static analysis      |
| Stylua     | Code formatting                 |
| Luadoc     | Documentation generation        |
| clangd     | C/C++ language server           |
| Cargo      | Rust FFI + module builds        |
| Git, Perl  | Compatibility + scripting tools |

> ✅ Everything is installed by `prereqs.ps1` (Windows) or `prereqs.sh` (Linux/macOS).

---

## 🛠️ Install `luaDev`

### 1. Clone the Repository

```bash
git clone https://github.com/hetfs/luaDev.git
cd luaDev/scripts
```

---

### 2. Install Toolchain Prerequisites

#### 🪟 Windows (PowerShell 7+)

```powershell
./prereqs.ps1
```

#### 🐧 Linux/macOS

```bash
bash prereqs.sh
```

This installs compilers, Lua toolchains, language servers, and formatters.

---

### 3. Build Lua or LuaJIT

#### 🧱 Build Lua 5.4 with Clang

```powershell
./buildLua.ps1 `
  -Engines lua `
  -EngineVersions 5.4.8 `
  -Compiler clang `
  -BuildMode Release `
  -ExportReport markdown
```

#### ⚡ Build LuaJIT 2.1.0-beta3

```powershell
./buildLua.ps1 `
  -Engines luajit `
  -EngineVersions 2.1.0-beta3 `
  -Compiler clang `
  -ExportReport markdown
```

> 📁 Build logs are saved to `scripts/logs/*.md`

---

## 🔍 Verify the Installation

### 🧪 Check Installed Versions

```bash
lua -v      # e.g., Lua 5.4.8
luajit -v   # e.g., LuaJIT 2.1.0-beta3
```

---

### 🧪 Launch the Lua Prompt (REPL)

After installing Lua, you can use the REPL (Read-Eval-Print Loop) to interactively run Lua code.

### 🪟 Windows

1. Press `Win + R`, type `cmd`, and hit Enter
2. In the command prompt, type:

```powershell
lua
```

You’ll see:

```bash
Lua 5.4.8  Copyright (C) 1994–2025 Lua.org
>
```

### 🐧 macOS/Linux

1. Open your terminal
2. Type:

```bash
lua
```

---

### ✅ Try a Basic Test

Once inside the Lua prompt:

```lua
print("Lua works!")
print(_VERSION)
```

Expected output:

```
Lua works!
Lua 5.4
```

🔚 Exiting Lua

```lua
os.exit()
```

This is correct, but only works if the os library is available (which it is in the standard Lua interpreter). In some restricted environments (like embedded Lua), it might be disabled.
> 💡 The REPL is a great place to test small ideas and learn Lua incrementally.

---

## 🔒 Production-Grade Security

`luaDev` applies compiler hardening automatically:

```bash
-O2 -fstack-protector-strong -D_FORTIFY_SOURCE=2
```

✅ Logs are exported
✅ C module builds are supported
✅ LuaJIT FFI works out of the box

---

## 📦 Installing Lua Modules with LuaRocks

Use LuaRocks to install libraries like this:

```bash
luarocks install penlight
luarocks list
```

LuaRocks is auto-installed and integrated with every `luaDev` build.

---

 [🌐 luaDev GitHub](https://github.com/hetfs/luaDev)

> *"luaDev gives you production-grade Lua with zero manual setup."*
> Team luaOrbiter
