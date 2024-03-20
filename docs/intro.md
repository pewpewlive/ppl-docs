---
sidebar_position: 1
---

# Introduction

This community-maintained wiki holds the resources useful for creating custom levels for PewPew Live.

Levels are created by writing Lua code. If you are new to programming or new to Lua, a good first step is to start with the [[Beginner]] guide.

If you are already familiar with programming, a good approach is to first look at the examples (for example, the [simple_level]) to get a feeling of how a level is made, and then come back to the wiki to get more precise information about the various aspect of level creation.

If you have questions, the game's creator and many level creators are available on [Discord].

# Level structure

A level is a directory that contains a [manifest](file-information/manifest-files) and Lua files. The Lua files fall in three categories:

- Files that describe [graphics](file-information/mesh-files).
- Files that describe [sounds](file-information/sound-files).
- Files that describe the behavior of the level. They make use of the [pewpew](api/pewpew-library) and [fmath](api/fmath-library) libraries, which require an understanding of the [types](api/types) used.

# Uploading your level

You can upload your level by signing into your account on [https://pewpew.live] and navigating to the _Manage your custom levels_ page.

# Recommended Lua Style guide

When writing code, it is recommended to follow [LuaRocks's style guide], but using 2 space
indentation to be consistent with the rest of PewPew's codebase.

# Helpful tools and utilities

- [PewPew Snippets] is an essential Visual Studio Code extension that offers autocompletion and useful code snippets for creating levels.
- [PewPewLive-MeshExporter] is a Blender plugin for converting scenes into PewPew Live 3D meshes.
- [PPLAF] is an opinionated Lua framework for creating advanced levels.

[Discord]: https://pewpew.live/discord
[simple_level]: https://github.com/jyaif/ppl-utils/blob/d32dbec8a171c9bcc0f800dcd864f175c42c34fd/content/levels/simple_level/
[LuaRocks's style guide]: https://github.com/luarocks/lua-style-guide
[https://pewpew.live]: https://pewpew.live
[PewPewLive-MeshExporter]: https://github.com/ModEngineer/PewPewLive-MeshExporter
[PewPew Snippets]: https://meshstudio.pewpew.live/pps/
[PPLAF]: https://github.com/glebi574/PPLAF/
