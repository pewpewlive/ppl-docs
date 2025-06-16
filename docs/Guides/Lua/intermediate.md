---
sidebar_position: 2
---

# Intermediate

If you are here, you made it through the learning process of the Lua language! Keep in mind, this section assumes that you know basic Lua. If you need to freshen up, look back onto the Beginner tutorials!

Here, we will learn **how to make a PewPew Live Custom Level**

## Getting started

So in order to begin making a level, you will need to visit a couple of links.

https://github.com/jyaif/ppl-utils &lt;--- This link right here will take you to the files you need to make your level! Scroll down to **Getting Started** and follow the directions!

[/docs/APIs/PewPew/](/docs/APIs/PewPew) &lt;--- This link right here is the PewPew Live API. That means, many important functions and items that are needed to make your level are found on this site!

**Also, make sure you have a text editor to make your code in! If you need help with this, go to the Discord server and ask about it in #pewpew-technical-discussion!**

## PewPew Live API - functions

Before we begin in our first steps to making a level, it is crucial to understand the PewPew Live API.

**Let's take a look...**

![PewPew Live API Functions](https://i.imgur.com/cudNZOp.png)

These are some of the functions that you will be using in PewPew Live! I suggest giving it a lookover, and try to see what it all means! Whenever you use a function in PewPew's library (API), you MUST put `pewpew.` infront of it!

So you see, `print(String str)` would be typed in your code as `pewpew.print(String str)`. The black boxes with green text (things like `String`, `Int`, etc) tell you what kind of data the function uses, and what type of function it is! Don't worry too much about the type of function, focus mainly on the data that the functions take in, like `Int` and `String`.

## PewPew Live API - fmath

**Another main part of the API is the Fmath library!**

![PewPew Live API Fmath](https://i.imgur.com/S3KoZf8.png)

These are more functions in PewPew Live, but slightly different. To use these functions, you MUST put `fmath.` infront of it!

So `sqrt(FixedPoint x)` would be typed in your code as `fmath.sqrt(FixedPoint x)`. Now, what exactly is `FixedPoint`?

`FixedPoint` refers to a specific kind of **number** in PewPew levels. We just call them fixed point numbers. They are strange, but don't worry, you'll get the hang of them! You really only use fixed point numbers when dealing with location and size. But don't worry, fixed point numbers and normal numbers are the same!

...For the most part. See, you write a normal number as `n`, and fixed point numbers are written as `nfx`. Fixed point numbers are put in the code by putting `fx` after your number! So you have numbers like `1, 2, 3`. But in fixed point numbers, they would be `1fx, 2fx, 3fx`. And so on!

Another main difference I should note is their decimals! It's a little strange, and I won't go into too much detail, but `2.6fx` does not exist. The number `2.5` is written as `2.2048fx`. It's strange, I know! And there is a specific and good reason for this! But for now, don't worry too much about decimals. If you need to use a number that isn't a full number, stick with fractions! Like instead of writing `2.2048fx`, write `5fx/2fx`! See? Much better! **Just remember that these fixed point numbers are mostly used for location and size!** In later examples we will see exactly how they are used!

## PewPew Live API - enums

**The last main part that I need to cover is the Enums section of the API**

![PewPew Live API Enums](https://i.imgur.com/6iA5ayl.png)

So what is an `Enum`? `Enum` stands for _Enumerator_, and is just a fancy way of talking about a list of items and properties. So here is the list of enemies and the properties of enemies, AKA the `Enums`, that a person can access and use. Again, you need to put `pewpew.` infront of these when you use them. A quick example of a reference to a specific enemy would be `pewpew.MothershipType.THREE_CORNERS`. This piece of code references the pink triangles (motherships) that you see in Eskiv.

**We will go into detail on how to use Enums in specific ways, but for now, that is the general briefing on how to read the PewPew Live API!**

## Where does this level go?

**So we are finally about to make our level. Where do we keep it? Well at the very top, you went to the main github page and downloaded the files, you need that!**

You will need to extract the file, and then you will enter it. You will see two files, a folder and an `.exe` file. That `.exe` is very important to running your level, keep it in mind!

![Windows explorer window in ppl-utils directory](https://i.imgur.com/CrvXuXT.png)

**You will then see a bunch of files, and a folder. You do NOT need to worry about these files at all! Just the folder! The `levels` folder is where all custom levels are stored! So that is the folder you enter into next!**

![Windows explorer window in ppl-utils/content directory](https://i.imgur.com/JVRk9P6.png)

**As you can see below, there are some levels already here! The developer, JF, put these levels here as examples for level creators to look at while they work! This is where you will create your level.**

![Windows explorer window in ppl-utils/content/levels directory](https://i.imgur.com/mgmeZ0g.png)

**So all you need to do is make a new folder. I'm going to call my folder TUTORIAL_LEVEL, although you can call your folder whatever you like.**

![Windows explorer window in ppl-utils/content/levels directory and creating TUTORIAL_LEVEL directory](https://i.imgur.com/OoUkG9m.png)

And there you go! You now have the location of your custom level, and all the levels are nice and organized! Time for the fun stuff!

## Open your level

**Here we can go into the environment that we need to code! Just to let you know, I use a text editor called Visual Studio Code. You may use something different, and again, if you need help with this text editor stuff, reach out in the discord!**

You can either open up just your level file in your text editor, or you can open the folder that contains all the levels. This is helpful for looking at other levels while you code! So head back to this screen below:

![Windows explorer window in ppl-utils/content directory](https://i.imgur.com/JVRk9P6.png)

And open the levels folder with your text editor! If you need help with this, feel free to reach out for help! If you're ready, then proceed down below!

![Visual Studio Code window open in ppl-utils/content/levels directory](https://i.imgur.com/BfYNE64.png)

As pointed out by the very helpful green arrow, my level is on the left. The folder was initially empty. You need create a new script that will be your main level script. It HAS to be called `level.lua`. This is how PewPew Live enters into your level and runs it. It might change in the future, but it is good practice to keep consistency. And with the script made, you have an empty canvas. What's next?

## The start of a level

**This next portion will go over how to make your map, and how to spawn the player. Yes! You have to put in the code that spawns the player yourself! But don't worry, it's not too terrible.**

Look back into the PewPew API, there is a function that sets the map size. I'll state it here, it is `set_level_size(FixedPoint width, FixedPoint height)`. This is the code that will make your map! It is very simple, and here is a sample code.

```lua
local level_height = 300fx
local level_length = 400fx
pewpew.set_level_size(level_length, level_height)
```

And that's all there is to it! You have made a map! Remember, when using a PewPew function, you MUST put `pewpew.` in front, or it won't work! And we are dealing with location/size, so fixed point numbers must be used! And you don't need to set the sizes as variables, I just consider it good practice. It's also easier to reference the map sizes if they are variables. You could have written `pewpew.set_level_size(300fx, 400fx)`, but it's up to you.

**Hold it!** Before you try out your level, you need to spawn the player! This requires another handy function from the API. This one is `new_player_ship(FixedPoint x, FixedPoint y, int player_index)`. A player's spawn point is a matter of _location_, so fixed points are required! **Also, notice how the index is not a fixed point number, but a normal number!** The index is not size or location, so using normal numbers is fine!

```lua
pewpew.new_player_ship(100fx, 100fx, 0)
```

And there you have it! The player has spawned, and you have a map made. I should back track, what is `player_index`? And what does the `0` have to do with it? Well each player, whether it is single-player or multi-player, are assigned an "index" to keep track of which player is which. Player 1 has an index of `0`, player 2 has an index `1`, and so on. **BUT** at the current moment, custom levels only support one player, so whenever you use `new_player_ship(FixedPoint x, FixedPoint y, int player_index)`, just use 0 for the `player_index`.

The code above worked just fine, but another way, which is good practice, to write the above code is

```lua
local x_spawn = 100fx
local y_spawn = 100fx
local p1_index = 0
local player1_ship = pewpew.new_player_ship(x_spawn, y_spawn, p1_index)
```

This piece of code sets the ship as a variable that you can reference later on! I highly recommend using this second piece of code rather than the first one!

**And there you have it! Down below is the final product.**

![](https://i.imgur.com/VHV6s29.png)

**Now there's one more step before we can test out our level! We need something called a `manifest`**

The `manifest` is your level description, name, and entry! I will explain entry in a bit, but for now, here's how to make a manifest. This one is actually written in a language other than Lua. I won't explain it too much, I will just show you the code and you can make a `manifest`. But first, make a new file in your level folder and call it `manifest.json`. **NOT `manifest.lua`. Like I said, it's a different language!**

In the manifest you need to put this piece of code:

```json
{
  "name": "LEVEL_NAME",
  "descriptions": ["LEVEL DESCRIPTION"],
  "entry_point": "level.lua"
}
```

You can look at it and kind of get a sense of what's going on, but I will brief you on it. You put your level name where `"LEVEL_NAME"` is **INSIDE** the quotation `""` marks! You can do the same with the level description, inside the quotation marks and brackets `[""]`! See the `"entry_point"`? That's why we named the main script `level.lua`. The game enters through that script and runs your level. And that is _all_ you need to know about this new file. Down below is the manifest for my tutorial level.

![](https://i.imgur.com/eMCp8e5.png)

You are done! You can run your level!

**Ready to take it out for a spin? Good! Remember that `.exe` I mentioned some time back? Yeah, we need that. Head back to the screen below.**

![](https://i.imgur.com/CrvXuXT.png)

You need to run the ppl-utils file. It will open a window, and your computer will warn you about this file. Go ahead and run the file anyway, and you will be able to try out your level! You should get something like below:

![](https://i.imgur.com/0GVpONe.png)

**Your levels are being run! Now you need to go to the website that the screen above is telling you!** The website to run your levels is http://localhost:9000/pewpew.html

You should get a screen like this:

![](https://i.imgur.com/Diaobu9.png)

**As you can see, the manifest dictated what name my level would show as.**

My tutorial world is at the top of the page, called "Tutorial Level". As it should, as that is what I put in the manifest above. You will need to find your level in the list of levels. And there you go! Just go into your level and give it a whirl!
