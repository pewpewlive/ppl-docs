---
sidebar_position: 1
---

# Manifest files

Manifests are mandatory files for every submited levels.

They describe the content of the level, and are written in JSON.

Example of a manifest file:

```json title="manifest.json"
{
  "name": "The name of the level",
  "descriptions": ["A short description for your level."],
  "information": "Information regarding your level. Up to 350 characters long. Can include #ff0000ffcolor!",
  "entry_point": "level.lua",
  "has_score_leaderboard": true,
  "rank_thresholds_1p": { "bronze": 1000, "silver": 2000, "gold": 3000 }
}
```

## Fields descriptions

- `name` is the name of the level. Keep it short (30 char max).
- `descriptions` is an array of strings. You can put multiple descriptions, but for now only the first string is displayed.
- `information` is an optional string that can be 350 characters long that should contain information relevant to the level.
- `entry_point` contains the path to the main entry point of the level.

:::warning

`entry_point` must be `level.lua`.

In the future other entry points may be supported.

:::

- `has_score_leaderboard` is a boolean that specifies whether the level should have a score leaderboard.
- `rank_thresholds_1p` contains the requirements for the players to unlock bronze, silver, and gold stars. You must not include this field if `has_score_leaderboard` is false. If all the thresholds are 0, then the level will not give out stars.
