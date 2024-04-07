---
sidebar_position: 2
---

# Game limits

## Entity count

At most 1300 entities can exist at any given moment. This includes the player's bullet. If there are already 1300 entities, no more entities will be created. This means that the player won't be able to shoot.

## Duration

A game lasts at most 1 hour. If the level has not called [`stop_game`](../APIs/PewPew#stop_game) by then, it will be called automatically.
The reason for this limitation is that replays then become too large.

## Memory usage

- The Lua interpreter can't use more than 500KB of memory when running a level. Unless you have a memory leak in your level, this shouldn't be a problem.
- The Lua interpreter can't use more than 3MB of memory when loading a mesh. You will need to split a mesh into multiple files if you are hitting this limit.
- The Lua interpreter can't use more than 3MB of memory when loading sounds. Unless you are doing something really crazy, this will never be a problem.
