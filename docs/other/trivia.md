---
sidebar_position: 3
---

# Trivia

This page contains a random bag of technical information concerning PewPew Live.

## The Lua interpreter

PewPew Live uses a fork of Lua 5.3.

## Version number

PewPew Live's version numbers consist of 3 parts: MAJOR.MINOR.BUILD

MAJOR and MINOR may get updated with any significant release.
The BUILD number is an ever-increasing number representing a point in time of PewPew Live's development.

## Ports

PewPew Live uses several different ports.

- Multiplayer servers open the 51980 UDP port. If the port is unavailable, the server will try all ports up to 51989. If they are all taken, it will try to open ports random ports in the 49152-65535 range.
- LAN multiplayer room discovery is made by broadcasting on the ports 19869, 23902, 28013, 40124, 58240.
- The custom level development server exposes an http server on the TCP port 9000.
