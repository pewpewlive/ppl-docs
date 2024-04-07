---
sidebar_position: 3
---

# Standard libraries

Only a subset of the standard Lua libraries are available in PewPew Live:
The [string](#string-library) library, the [table](#table-library) library, and (for meshes and sound effects only) the [math](#math-library) library.

:::info

Level files do not have access to the math library. Use fmath instead.

:::

## String library

The library exposes the following functions:

- `byte`
- `char`
- `dump`
- `find`
- `format`
- `gmatch`
- `gsub`
- `len`
- `lower`
- `match`
- `rep`
- `reverse`
- `sub`
- `upper`
- `pack`
- `packsize`
- `unpack`

The official Lua website has the [documentation](https://www.lua.org/manual/5.3/manual.html#6.4) for the string library.

## Table library

The library exposes the following functions:

- `concat`
- `insert`
- `pack`
- `unpack`
- `remove`
- `move`
- `sort`

The official Lua website has the [documentation](https://www.lua.org/manual/5.3/manual.html#6.6) for the table library.

## Math library

The Lua `math` library is only available for meshes and sound effects.
It is not available when creating levels because the functions it offer are often for dealing with floating point numbers.

The library exposes the following functions:

- `abs`
- `acos`
- `asin`
- `atan`
- `ceil`
- `cos`
- `deg`
- `exp`
- `tointeger`
- `floor`
- `fmod`
- `ult`
- `log`
- `max`
- `min`
- `modf`
- `rad`
- `random`
- `sin`
- `sincos`
- `sqrt`
- `tan`
- `type`

and the constants:

- `pi`
- `huge`
- `maxinteger`
- `mininteger`

The only absent API is `randomseed` (the RNG is already seeded with a good seed).
If you need a predictable random sequence, use your own RNG implemented in Lua.

The official Lua website has the [documentation](https://www.lua.org/manual/5.3/manual.html#6.7) for the math library.
