---
id: 30-lua-beginner-project
title: Project – Build a Text Adventure Game
sidebar_position: 30
---

# 🧭 Project: Text Adventure Game

Time to put your Lua skills to the test! In this project, you’ll build a simple **text-based adventure game** using tables, conditionals, and functions.

---

## 🧱 What You’ll Build

A terminal-based adventure where players explore rooms, collect items, and solve basic challenges.

**Key Concepts Used:**

- Variables and tables
- Control flow (`if`, `while`)
- Functions and input
- Game loop logic

---

## 🛠️ Game Blueprint

Here’s what the game should do:

- Start in a room (e.g. "entrance")
- Show the room description and options
- Let the player type a command (`look`, `go north`, `take key`)
- Update the game state accordingly

---

## 🧩 Room Map

```
Entrance ↔ Hallway ↔ Library
↓
Treasure Room
```

---

## 🧰 Starter Code

Here’s a working game skeleton to begin with:

```lua
-- Game state
local currentRoom = "entrance"
local inventory = {}

-- Room data
local rooms = {
  entrance = {
    description = "You are at the entrance of a dark mansion.",
    exits = {north = "hallway"}
  },
  hallway = {
    description = "A dimly lit hallway with dusty paintings.",
    exits = {south = "entrance", east = "library", down = "treasure"},
    item = "key"
  },
  library = {
    description = "Rows of ancient books line the walls.",
    exits = {west = "hallway"}
  },
  treasure = {
    description = "A locked door blocks the treasure room!",
    exits = {},
    locked = true
  }
}

-- Game loop
while true do
  local room = rooms[currentRoom]
  print("\n" .. room.description)

  if room.item then
    print("You see a " .. room.item)
  end

  io.write("What do you do? ")
  local input = io.read()

  if input == "exit" then
    print("Goodbye!")
    break
  elseif input == "look" then
    -- redisplay room description
  elseif input:match("^go ") then
    local direction = input:sub(4)
    local nextRoom = room.exits[direction]

    if nextRoom then
      if nextRoom == "treasure" and rooms.treasure.locked then
        if inventory["key"] then
          print("You unlock the door with the key!")
          rooms.treasure.locked = false
          currentRoom = nextRoom
        else
          print("The door is locked.")
        end
      else
        currentRoom = nextRoom
      end
    else
      print("You can't go that way.")
    end

  elseif input:match("^take ") then
    local item = input:sub(6)
    if room.item == item then
      inventory[item] = true
      print("You took the " .. item)
      room.item = nil
    else
      print("There's no " .. item .. " here.")
    end
  else
    print("Unknown command.")
  end
end
```

---

## 🧠 Things to Try

* Add more rooms and directions
* Add new items (`torch`, `map`, `sword`)
* Let players "use" items
* Create traps or puzzles
* Show inventory with `inventory` command

---

## 🧪 Sample Gameplay

```
You are at the entrance of a dark mansion.
What do you do? go north

A dimly lit hallway with dusty paintings.
You see a key
What do you do? take key

You took the key
What do you do? down

The door is locked.
What do you do? go down

You unlock the door with the key!
A locked door blocks the treasure room!
```

---

## ✅ Project Recap

* [ ] I built a playable terminal-based adventure
* [ ] I used conditionals and game logic
* [ ] I created multiple rooms and exits
* [ ] I tracked player state using variables/tables
* [ ] I marked this lesson complete in my [Progress Tracker](./02-beginner-checklist.md)

---
