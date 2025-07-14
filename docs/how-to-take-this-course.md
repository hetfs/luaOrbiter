---
id: how-to-take-this-course
title: 🧭 How to Take This Course
sidebar_position: 3
---

# 🧭 How to Take This Course

Welcome to **luaOrbiter** — a mission-based Lua learning journey for developers, engineers, and creative technologists. Whether you're just beginning or diving deep into embedded scripting, this guide will help you get the most out of the platform.

---

## 🚀 Step 1: Set Up Your Environment

### 🖥 Requirements

To get started, you'll need:

- A modern web browser (for reading lessons)
- A code editor (we recommend [VSCode](https://code.visualstudio.com/))
- Optionally: Local Lua environment via [`luaDev`](https://github.com/hetfs/luaDev) for advanced learners

### 🛠 Running Locally (optional)

```bash
git clone https://github.com/hetfs/luaOrbiter.git
cd luaOrbiter
npm install
npm run start
````

Once running, access the course at: [http://localhost:3000](http://localhost:3000/)

---

## 📚 Step 2: Follow the Learning Path

luaOrbiter is structured into 5 progressive levels. Go sequentially or skip ahead if you're already familiar with the basics.

| Level              | What You’ll Learn                               | Suggested Duration |
| ------------------ | ----------------------------------------------- | ------------------ |
| 👶 Beginner        | Syntax, tables, control flow, basic functions   | 2–4 weeks          |
| 👨‍💻 Intermediate | Modules, metatables, coroutines, JSON handling  | 8–12 weeks         |
| 👨‍🏫 Advanced     | LuaJIT, FFI, profiling, C bindings              | 4–6 months         |
| 🧠 Expert          | DSLs, VM internals, sandboxing, transpilers     | 1–2 years          |
| 💼 Professional    | Real-world tooling, AI pipelines, embedded apps | Career-focused     |

Each level includes hands-on projects like:

* 🧮 Text-based calculators
* 🤖 AI bots with decision trees
* 🌐 Lua-powered API clients
* 🔌 Edge controllers using LuaJIT
* 🧰 CLI tools & Lua integrations

---

## 🎯 Step 3: Choose a Specialization Track (Optional)

Once you’ve mastered the basics, specialize based on your goals.

| Track              | Focus Areas                                              |
| ------------------ | -------------------------------------------------------- |
| 🎮 Game Dev        | Game engines (Roblox, Love2D), NPC scripting, UI modding |
| 🔌 Embedded        | IoT scripting, hardware interfacing, ESP32 firmware      |
| 🤖 AI & Automation | ML pipelines, control layers for LLMs & edge inference   |
| 🛠 Dev Tools       | Custom editors, linters, plugin systems, transpilers     |

Specialization modules are marked throughout the course.

---

## 🧪 Step 4: Build, Build, Build

Learning by doing is at the core of luaOrbiter. Each module includes practical projects and real-world scripts.

Start simple:

```lua
-- Rock-paper-scissors logic
choices = {"rock", "paper", "scissors"}
print("You chose: " .. choices[math.random(1, 3)])
```

Then level up to:

* 🎮 A full dialogue system for NPCs
* 🌐 API clients with error handling
* 🧠 AI decision-making with tables & state machines
* ⚙️ Lua/C integrations via LuaJIT FFI
* 🧰 Developer tools like formatters or linters

---

## 🤝 Step 5: Contribute and Collaborate

You’re not alone — luaOrbiter is open-source and community-driven.

* Submit your own lessons, code samples, or diagrams
* Help translate or fix typos
* Join the community via GitHub Discussions or Discord (coming soon)
* ⭐ Star the [repo](https://github.com/hetfs/luaOrbiter) to support development

> Learn by building. Build by sharing.

---

## 📦 Bonus for Advanced Learners: Use `luaDev`

Install [`luaDev`](https://github.com/hetfs/luaDev) to unlock full control over Lua/LuaJIT builds and project scaffolding.

With `luaDev`, you can:

* Compile Lua across versions (Lua 5.1–5.4, LuaJIT 2.1)
* Generate CMake templates and logs
* Build embedded systems with structured diagnostics
* Explore internals like GC tuning, bytecode manipulation

---

## ⏱ Weekly Flow for Steady Progress

| Day     | Activity                              |
| ------- | ------------------------------------- |
| Mon–Wed | Read 1–2 lessons and explore examples |
| Thu     | Complete a mini-project               |
| Fri     | Reflect and read a FAQ/guide          |
| Weekend | Contribute or try bonus material      |

---

## 🔗 Helpful Resources

* [🆕 What’s New](./what-new.md)
* [🤝 Contributing Guide](./contributing.md)
* [🧠 luaDev Build Engine](https://github.com/hetfs/luaDev)

---

> *“This isn’t just a course — it’s a launchpad into real-world Lua development.”*
> — Team luaOrbiter
