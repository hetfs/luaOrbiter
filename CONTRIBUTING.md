# 🤝 Contributing to luaOrbiter

Thank you for considering contributing to **luaOrbiter** — a community-driven course helping developers master Lua from beginner to expert.

---

## 📌 How to Contribute

We welcome all kinds of contributions:

### 💡 Ideas & Content

- Suggest new lesson topics
- Add project-based challenges
- Improve explanations or add real-world examples

### 🛠 Code Contributions

- Fix typos or bugs in Markdown
- Improve Mermaid diagrams or examples
- Add new Lua code snippets or modules
- Submit reusable components or templates

### 🌍 Community Help

- Translate docs into your native language
- Review and comment on open issues
- Share the repo with others who may benefit

---

## 🧰 Getting Started

1. **Fork the repo**  
2. **Clone your fork**  
   ```bash
   git clone https://github.com/YOUR_USERNAME/luaOrbiter.git
   cd luaOrbiter
````

3. **Install dependencies**

   ```bash
   npm install
   ```
4. **Create a new branch**

   ```bash
   git checkout -b your-feature-name
   ```
5. **Make your changes** (edit files in `docs/`, `static/`, etc.)
6. **Commit and push**

   ```bash
   git add .
   git commit -m "Add: new AI scripting example"
   git push origin your-feature-name
   ```
7. **Open a pull request** from your fork’s branch to `main`

---

## 🧭 Style Guide

* Use consistent Markdown formatting
* Prefer code examples with comments
* Keep code clean, idiomatic, and Lua 5.1–5.4 compatible
* Use semantic commit messages (`Add:`, `Fix:`, `Update:`)

---

## 📄 License

All contributions will be licensed under the **MIT License**.
By submitting a PR, you agree that your work will be licensed accordingly.

Let’s help more devs learn Lua, together! 🌍✨
— Team `luaOrbiter`

````

---

## 🚀 GitHub Pages Deployment

To deploy your Docusaurus course to GitHub Pages:

### 1. Add `homepage` in `package.json`

```json
"homepage": "https://hetfs.github.io/luaOrbiter"
````

### 2. Enable GitHub Pages in your repo settings:

* Go to **Settings → Pages**
* Set source to: `gh-pages` branch → `/ (root)`

### 3. Install required Docusaurus plugin

```bash
npm install --save docusaurus-plugin-sitemap
```

### 4. Deploy manually (optional):

```bash
GIT_USER=your-username npm run deploy
```

This will build your site and push to `gh-pages` branch.

---

## 🏷 Optional Badges

Here are some more badges you can include in your README:

```markdown
![Last Commit](https://img.shields.io/github/last-commit/hetfs/luaOrbiter)
![Contributors](https://img.shields.io/github/contributors/hetfs/luaOrbiter)
![Issues](https://img.shields.io/github/issues/hetfs/luaOrbiter)
![Pull Requests](https://img.shields.io/github/issues-pr/hetfs/luaOrbiter)
```

Just paste these under your title/logo section.

---
