---
sidebar_position: 1
---

# Home

This community-maintained websites references the resources useful for creating custom levels for PewPew Live.

Levels are created by writing Lua code. If you are new to programming or new to Lua, a good first step is to start with the [Beginner](Guides/Lua/beginner) guide.

If you are already familiar with programming, a good starting point is to look at the examples (for example, the [simple_level]) to get a feeling of how a level is made, and then go through this website to get more precise information about the various aspect of level creation.

If you have questions, the game's creator and many level creators are available on [Discord].

## Level structure

A level is a directory that contains a [manifest](File%20Information/manifest-files) and Lua files. The Lua files fall in three categories:

- Files that describe [graphics](File%20Information/mesh-files).
- Files that describe [sounds](File%20Information/sound-files).
- Files that describe the behavior of the level. They make use of the [pewpew](APIs/PewPew) and [fmath](APIs/Fmath) libraries, which require an understanding of the [types](APIs/types) used.

## Uploading your level

You can upload your level by signing into your account on [https://pewpew.live] and navigating to the _Manage your custom levels_ page.

![screenshot of UI for uploading](/img/documentation/manage-custom-levels.png)

## PewPew Live's Lua

PewPew Live embeds a slightly customized version of Lua 5.3.

Among the changes are:
* Added a [fixed point type](APIs/types) to make the game logic deterministic everywhere.
* Iteration over tables was made deterministic.
* The interpreter search for files in a virtual "dynamic" directory.
* The interpreter has aggressive [memory limits](Other/game-limits).

## Recommended Lua Style guide

When writing code, it is recommended to follow [LuaRocks's style guide], but using 2 space
indentation to be consistent with the rest of PewPew's codebase.

## Helpful tools and utilities

- [PewPew Snippets] is an essential Visual Studio Code extension that offers autocompletion and useful code snippets for creating levels.
- [PewPewLive-MeshExporter] is a Blender plugin for converting scenes into PewPew Live 3D meshes.

[Discord]: https://pewpew.live/discord
[simple_level]: https://github.com/jyaif/ppl-utils/blob/d32dbec8a171c9bcc0f800dcd864f175c42c34fd/content/levels/simple_level/
[LuaRocks's style guide]: https://github.com/luarocks/lua-style-guide
[https://pewpew.live]: https://pewpew.live
[PewPewLive-MeshExporter]: https://github.com/ModEngineer/PewPewLive-MeshExporter
[PewPew Snippets]: https://hybroid.pewpew.live/pps/
