---
sidebar_position: 1
---

# Design principles

## General guidelines

- Gameplay is king.
- To be consistent with the rest of the game:
  - Prefer procedurally generated graphics over manually created graphics.
  - Prefer angular designs instead of curved designs.
  - Prefer abstract designs over realistic designs.

## Gameplay advice

### Users will try to camp in the corners

Corners reduce the exposure of the players' ships, so players will naturally tend to hide there. Either incentivize players to move by putting bonuses away from the corners, or de-incentivize players from staying there by spawning enemies there.
The same thing applies (to a lesser extent) to level's borders.

### Fair randomness

If players have a very slim chance of getting a bonus that massively increases their score, the top of the leaderboard will be populated by people that were lucky, not by people that were skilled. This is not necessarily a bad thing, but it's something to keep in mind.

### Be mindful of farming

Ask yourself if it is possible for the player to accumulate a lot of points (or a lot of shields) simply by not triggering an event. For example, I once made a level where shields kept appearing until all enemies were killed. Some players discovered that by leaving one enemy alive, they could farm shields.
