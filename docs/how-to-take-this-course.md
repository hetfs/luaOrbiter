---
id: how-to-take-this-course
title: 🧭 How to take this course
sidebar_position: 3
---

# 🧭 How to take this course

Welcome to **luaOrbiter**, a mission-based Lua learning guide for developers, engineers, and creative technologists. 
Whether starting with Lua or exploring embedded scripting, this guide helps you get the most from the platform.

---

## 🚀 Step 1: Set up your environment

### 🖥 Requirements

Before starting, check that you have the following:
- A modern web browser for reading lessons
- A code editor such as [VSCode](https://code.visualstudio.com/), [Neovim](https://neovim.io/) or [Notepad++](https://notepad-plus-plus.org/)
- Optionally: a local Lua setup using [`luaDev`](https://github.com/hetfs/luaDev) for advanced usage

### 🛠 Running locally (optional)

```bash
git clone https://github.com/hetfs/luaOrbiter.git
cd luaOrbiter
npm install
npm run start
````

Once started, open [http://localhost:3000](http://localhost:3000/) in your browser.

---

## 📚 Step 2: Follow the learning path

The luaOrbiter curriculum progresses through five structured levels. Follow them sequentially or skip ahead if you already know the basics.

| Level              | What you will learn                                            | Suggested duration |
| ------------------ | -------------------------------------------------------------- | ------------------ |
| 👶 Beginner        | Syntax, tables, control flow, basic functions                  | 2–4 weeks          |
| 👨‍💻 Intermediate | Modules, metatables, coroutines, JSON handling                 | 8–12 weeks         |
| 👨‍🏫 Advanced     | LuaJIT, foreign function interface, profiling, C bindings      | 4–6 months         |
| 🧠 Expert          | Domain-specific languages, VM internals, Sandboxing, compilers | 1–2 years          |
| 💼 Professional    | Real-world tooling, AI pipelines, embedded systems             | Career-oriented    |

Featured projects include:

* 🧮 A text-based calculator
* 🤖 AI bots with decision logic
* 🌐 Lua-powered API clients
* 🔌 Edge device control using LuaJIT
* 🧰 CLI tools and Lua-based utilities

---

## 🎯 Step 3: Choose a specialization track (optional)

After learning the core concepts, consider exploring a specialization that aligns with your goals.

| Track                | Focus areas                                            |
| -------------------- | ------------------------------------------------------ |
| 🎮 Game development  | Game engines (Roblox, Love2D), scripting, UI extension |
| 🔌 Embedded systems  | IoT scripting, hardware control, ESP32 firmware        |
| 🤖 AI and automation | Machine learning, pipeline orchestration, edge logic   |
| 🛠 Developer tools   | Editors, linters, plugin systems, code transformation  |

These specialization modules appear throughout the course.

---

## 🧪 Step 4: Build practical projects

Hands-on learning drives luaOrbiter. Each module offers projects and real-world code samples.

Start with something small:

```lua
-- Rock-paper-scissors logic
choices = {"rock", "paper", "scissors"}
print("You chose: " .. choices[math.random(1, 3)])
```

Then move on to:

* 🎮 A complete non-player character (NPC) dialogue engine
* 🌐 API clients with error handling
* 🧠 AI logic using tables and state machines
* ⚙️ Lua and C integration via LuaJIT’s foreign function interface (FFI)
* 🧰 Development tools like formatters or linters

---

## 🤝 Step 5: Contribute and collaborate

luaOrbiter operates as an open-source, community-driven platform.

* Submit lessons, code examples, or diagrams
* Help with translation or typo fixes
* Join discussions on GitHub (Discord support coming soon)
* ⭐ Star the [repository](https://github.com/hetfs/luaOrbiter) to show support

> Learn through building. Build through sharing.

---

## 📦 Bonus for advanced learners: Use `luaDev`

Install [`luaDev`](https://github.com/hetfs/luaDev) to gain full control over Lua and LuaJIT compilation and tooling.

With `luaDev`, you can:

* Build Lua for different versions (5.1 to 5.4, LuaJIT 2.1)
* Generate CMake templates and logs
* Deploy embedded Lua with structured diagnostics
* Explore internals such as garbage collection and bytecode

---

## ⏱ Weekly study plan

| Day     | Activity                              |
| ------- | ------------------------------------- |
| Mon–Wed | Read lessons and review examples      |
| Thu     | Complete a mini-project               |
| Fri     | Reflect and read a related guide      |
| Weekend | Contribute or explore advanced topics |

---

## 🔗 Helpful resources

* [🆕 What’s new](./what-new.md)
* [🤝 Contributing guide](./contributing.md)
* [🧠 luaDev build engine](https://github.com/hetfs/luaDev)

---

> *“This course serves as a launchpad into real-world Lua development.”*
>
> The luaOrbiter team
