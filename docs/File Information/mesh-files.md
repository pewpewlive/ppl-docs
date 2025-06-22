---
sidebar_position: 2
---

# Mesh files

In PewPew Live, a mesh is a collection of lines in 3D.

To create a mesh, you need to list the coordinates of the points making up the model, and how the points are linked.
Lua scripts describing meshes needs to create a table called `meshes`. That table must contain one or more meshes.

Example of a file that defines two meshes:

```lua
meshes = {
  { -- A 500x500 square
    vertexes = {{0,0,0}, {500,0,0}, {500,500,0}, {0,500,0}},
    colors = {0xffffffff, 0xffff00ff, 0xff00ffff, 0xff0000ff},
    segments = {{0,1,2,3,0}}
  },
  { -- A right-angled triangle
    vertexes = {{0,0,0}, {500,0,0}, {0,500,0}},
    colors = {0xffff00ff, 0xff00ffff, 0xff0000ff},
    segments = {{0,1,2,0}}
  }
}
```

## Vertexes

The `vertexes` field contains the list of vertexes. Vertexes are represented by three numbers. Those numbers can be floating point numbers.

## Segment chains

The `segment` field describes which vertexes should be joined by a segment. It contain a list of segment chains. Each segment chain is a table that holds a lists of 0-based indexes to vertexes that should be connected by a segment.

**Important**: There is a difference between `segments = {{0,1}, {1,2}}` and `segments = {{0,1,2}}`. In the first case, 2 separate segments will be generated. In the second case, two segments linked with a miter join will be generated.

## Colors

The _optional_ `colors` field contains the colors of each vertexes. If the `colors` field is present, it **must** contain as many colors as there are vertexes. Colors are 32 bit RGBA values.

```lua
0xff0000ff -- opaque red
0xff000080 -- slightly transparent red
0xff000000 -- fully transparent red
```

:::note

All meshes are rendered with additive blending.

:::

## Procedural rendering

Astute readers may have realized that because `meshes` is described in a Lua script, it can be generated at runtime. See for instance this [example](https://github.com/jyaif/ppl-utils/blob/d32dbec8a171c9bcc0f800dcd864f175c42c34fd/content/levels/advanced_graphics/polar_graphic.lua#L36).

This is the prefered way of creating complex meshes, as it is both more efficient and more consistent with the rest of the game.
