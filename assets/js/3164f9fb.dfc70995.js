"use strict";(self.webpackChunkppl_docs=self.webpackChunkppl_docs||[]).push([[198],{8730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=n(4848),o=n(8453);const s={sidebar_position:2},r="Intermediate",l={id:"Guides/Lua/intermediate",title:"Intermediate",description:"If you are here, you made it through the learning process of the Lua language! Keep in mind, this section assumes that you know basic Lua. If you need to freshen up, look back onto the Beginner tutorials!",source:"@site/docs/Guides/Lua/intermediate.md",sourceDirName:"Guides/Lua",slug:"/Guides/Lua/intermediate",permalink:"/ppl-docs/docs/Guides/Lua/intermediate",draft:!1,unlisted:!1,editUrl:"https://github.com/pewpewlive/ppl-docs/edit/master/docs/Guides/Lua/intermediate.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Beginner Lua Tutorial",permalink:"/ppl-docs/docs/Guides/Lua/beginner"},next:{title:"Advanced",permalink:"/ppl-docs/docs/Guides/Lua/advanced"}},a={},d=[{value:"Getting started",id:"getting-started",level:2},{value:"PewPew Live API - functions",id:"pewpew-live-api---functions",level:2},{value:"PewPew Live API - fmath",id:"pewpew-live-api---fmath",level:2},{value:"PewPew Live API - enums",id:"pewpew-live-api---enums",level:2},{value:"Where does this level go?",id:"where-does-this-level-go",level:2},{value:"Open your level",id:"open-your-level",level:2},{value:"The start of a level",id:"the-start-of-a-level",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"intermediate",children:"Intermediate"}),"\n",(0,i.jsx)(t.p,{children:"If you are here, you made it through the learning process of the Lua language! Keep in mind, this section assumes that you know basic Lua. If you need to freshen up, look back onto the Beginner tutorials!"}),"\n",(0,i.jsxs)(t.p,{children:["Here, we will learn ",(0,i.jsx)(t.strong,{children:"how to make a PewPew Live Custom Level"})]}),"\n",(0,i.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsx)(t.p,{children:"So in order to begin making a level, you will need to visit a couple of links."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/jyaif/ppl-utils",children:"https://github.com/jyaif/ppl-utils"})," <--- This link right here will take you to the files you need to make your level! Scroll down to ",(0,i.jsx)(t.strong,{children:"Getting Started"})," and follow the directions!"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://pewpewlive.github.io/ppl-utils/",children:"https://pewpewlive.github.io/ppl-utils/"})," <--- This link right here is the PewPew Live API. That means, many important functions and items that are needed to make your level are found on this site!"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Also, make sure you have a text editor to make your code in! If you need help with this, go to the discord and ask about it in #technical-discuss!"})}),"\n",(0,i.jsx)(t.h2,{id:"pewpew-live-api---functions",children:"PewPew Live API - functions"}),"\n",(0,i.jsx)(t.p,{children:"Before we begin in our first steps to making a level, it is crucial to understand the PewPew Live API."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Let's take a look..."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/cudNZOp.png",alt:"PewPew Live API Functions"})}),"\n",(0,i.jsxs)(t.p,{children:["These are some of the functions that you will be using in PewPew Live! I suggest giving it a lookover, and try to see what it all means! Whenever you use a function in PewPew's library (API), you MUST put ",(0,i.jsx)(t.code,{children:"pewpew."})," infront of it!"]}),"\n",(0,i.jsxs)(t.p,{children:["So you see, ",(0,i.jsx)(t.code,{children:"print(String str)"})," would be typed in your code as ",(0,i.jsx)(t.code,{children:"pewpew.print(String str)"}),". The black boxes with green text (things like ",(0,i.jsx)(t.code,{children:"String"}),", ",(0,i.jsx)(t.code,{children:"Int"}),", etc) tell you what kind of data the function uses, and what type of function it is! Don't worry too much about the type of function, focus mainly on the data that the functions take in, like ",(0,i.jsx)(t.code,{children:"Int"})," and ",(0,i.jsx)(t.code,{children:"String"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"pewpew-live-api---fmath",children:"PewPew Live API - fmath"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Another main part of the API is the Fmath library!"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/S3KoZf8.png",alt:"PewPew Live API Fmath"})}),"\n",(0,i.jsxs)(t.p,{children:["These are more functions in PewPew Live, but slightly different. To use these functions, you MUST put ",(0,i.jsx)(t.code,{children:"fmath."})," infront of it!"]}),"\n",(0,i.jsxs)(t.p,{children:["So ",(0,i.jsx)(t.code,{children:"sqrt(FixedPoint x)"})," would be typed in your code as ",(0,i.jsx)(t.code,{children:"fmath.sqrt(FixedPoint x)"}),". Now, what exactly is ",(0,i.jsx)(t.code,{children:"FixedPoint"}),"?"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"FixedPoint"})," refers to a specific kind of ",(0,i.jsx)(t.strong,{children:"number"})," in PewPew levels. We just call them fixed point numbers. They are strange, but don't worry, you'll get the hang of them! You really only use fixed point numbers when dealing with location and size. But don't worry, fixed point numbers and normal numbers are the same!"]}),"\n",(0,i.jsxs)(t.p,{children:["...For the most part. See, you write a normal number as ",(0,i.jsx)(t.code,{children:"n"}),", and fixed point numbers are written as ",(0,i.jsx)(t.code,{children:"nfx"}),". Fixed point numbers are put in the code by putting ",(0,i.jsx)(t.code,{children:"fx"})," after your number! So you have numbers like ",(0,i.jsx)(t.code,{children:"1, 2, 3"}),". But in fixed point numbers, they would be ",(0,i.jsx)(t.code,{children:"1fx, 2fx, 3fx"}),". And so on!"]}),"\n",(0,i.jsxs)(t.p,{children:["Another main difference I should note is their decimals! It's a little strange, and I won't go into too much detail, but ",(0,i.jsx)(t.code,{children:"2.6fx"})," does not exist. The number ",(0,i.jsx)(t.code,{children:"2.5"})," is written as ",(0,i.jsx)(t.code,{children:"2.2048fx"}),". It's strange, I know! And there is a specific and good reason for this! But for now, don't worry too much about decimals. If you need to use a number that isn't a full number, stick with fractions! Like instead of writing ",(0,i.jsx)(t.code,{children:"2.2048fx"}),", write ",(0,i.jsx)(t.code,{children:"5fx/2fx"}),"! See? Much better! ",(0,i.jsx)(t.strong,{children:"Just remember that these fixed point numbers are mostly used for location and size!"})," In later examples we will see exactly how they are used!"]}),"\n",(0,i.jsx)(t.h2,{id:"pewpew-live-api---enums",children:"PewPew Live API - enums"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"The last main part that I need to cover is the Enums section of the API"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/6iA5ayl.png",alt:"PewPew Live API Enums"})}),"\n",(0,i.jsxs)(t.p,{children:["So what is an ",(0,i.jsx)(t.code,{children:"Enum"}),"? ",(0,i.jsx)(t.code,{children:"Enum"})," stands for ",(0,i.jsx)(t.em,{children:"Enumerator"}),", and is just a fancy way of talking about a list of items and properties. So here is the list of enemies and the properties of enemies, AKA the ",(0,i.jsx)(t.code,{children:"Enums"}),", that a person can access and use. Again, you need to put ",(0,i.jsx)(t.code,{children:"pewpew."})," infront of these when you use them. A quick example of a reference to a specific enemy would be ",(0,i.jsx)(t.code,{children:"pewpew.MothershipType.THREE_CORNERS"}),". This piece of code references the pink triangles (motherships) that you see in Eskiv."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"We will go into detail on how to use Enums in specific ways, but for now, that is the general briefing on how to read the PewPew Live API!"})}),"\n",(0,i.jsx)(t.h2,{id:"where-does-this-level-go",children:"Where does this level go?"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"So we are finally about to make our level. Where do we keep it? Well at the very top, you went to the main github page and downloaded the files, you need that!"})}),"\n",(0,i.jsxs)(t.p,{children:["You will need to extract the file, and then you will enter it. You will see two files, a folder and an ",(0,i.jsx)(t.code,{children:".exe"})," file. That ",(0,i.jsx)(t.code,{children:".exe"})," is very important to running your level, keep it in mind!"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/CrvXuXT.png",alt:"Windows explorer window in ppl-utils directory"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["You will then see a bunch of files, and a folder. You do NOT need to worry about these files at all! Just the folder! The ",(0,i.jsx)(t.code,{children:"levels"})," folder is where all custom levels are stored! So that is the folder you enter into next!"]})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/JVRk9P6.png",alt:"Windows explorer window in ppl-utils/content directory"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"As you can see below, there are some levels already here! The developer, JF, put these levels here as examples for level creators to look at while they work! This is where you will create your level."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/mgmeZ0g.png",alt:"Windows explorer window in ppl-utils/content/levels directory"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"So all you need to do is make a new folder. I'm going to call my folder TUTORIAL_LEVEL, although you can call your folder whatever you like."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/OoUkG9m.png",alt:"Windows explorer window in ppl-utils/content/levels directory and creating TUTORIAL_LEVEL directory"})}),"\n",(0,i.jsx)(t.p,{children:"And there you go! You now have the location of your custom level, and all the levels are nice and organized! Time for the fun stuff!"}),"\n",(0,i.jsx)(t.h2,{id:"open-your-level",children:"Open your level"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Here we can go into the environment that we need to code! Just to let you know, I use a text editor called Visual Studio Code. You may use something different, and again, if you need help with this text editor stuff, reach out in the discord!"})}),"\n",(0,i.jsx)(t.p,{children:"You can either open up just your level file in your text editor, or you can open the folder that contains all the levels. This is helpful for looking at other levels while you code! So head back to this screen below:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/JVRk9P6.png",alt:"Windows explorer window in ppl-utils/content directory"})}),"\n",(0,i.jsx)(t.p,{children:"And open the levels folder with your text editor! If you need help with this, feel free to reach out for help! If you're ready, then proceed down below!"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/BfYNE64.png",alt:"Visual Studio Code window open in ppl-utils/content/levels directory"})}),"\n",(0,i.jsxs)(t.p,{children:["As pointed out by the very helpful green arrow, my level is on the left. The folder was initially empty. You need create a new script that will be your main level script. It HAS to be called ",(0,i.jsx)(t.code,{children:"level.lua"}),". This is how PewPew Live enters into your level and runs it. It might change in the future, but it is good practice to keep consistency. And with the script made, you have an empty canvas. What's next?"]}),"\n",(0,i.jsx)(t.h2,{id:"the-start-of-a-level",children:"The start of a level"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"This next portion will go over how to make your map, and how to spawn the player. Yes! You have to put in the code that spawns the player yourself! But don't worry, it's not too terrible."})}),"\n",(0,i.jsxs)(t.p,{children:["Look back into the PewPew API, there is a function that sets the map size. I'll state it here, it is ",(0,i.jsx)(t.code,{children:"set_level_size(FixedPoint width, FixedPoint height)"}),". This is the code that will make your map! It is very simple, and here is a sample code."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:"local level_height = 300fx\nlocal level_length = 400fx\npewpew.set_level_size(level_length, level_height)\n"})}),"\n",(0,i.jsxs)(t.p,{children:["And that's all there is to it! You have made a map! Remember, when using a PewPew function, you MUST put ",(0,i.jsx)(t.code,{children:"pewpew."})," in front, or it won't work! And we are dealing with location/size, so fixed point numbers must be used! And you don't need to set the sizes as variables, I just consider it good practice. It's also easier to reference the map sizes if they are variables. You could have written ",(0,i.jsx)(t.code,{children:"pewpew.set_level_size(300fx, 400fx)"}),", but it's up to you."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Hold it!"})," Before you try out your level, you need to spawn the player! This requires another handy function from the API. This one is ",(0,i.jsx)(t.code,{children:"new_player_ship(FixedPoint x, FixedPoint y, int player_index)"}),". A player's spawn point is a matter of ",(0,i.jsx)(t.em,{children:"location"}),", so fixed points are required! ",(0,i.jsx)(t.strong,{children:"Also, notice how the index is not a fixed point number, but a normal number!"})," The index is not size or location, so using normal numbers is fine!"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:"pewpew.new_player_ship(100fx, 100fx, 0)\n"})}),"\n",(0,i.jsxs)(t.p,{children:["And there you have it! The player has spawned, and you have a map made. I should back track, what is ",(0,i.jsx)(t.code,{children:"player_index"}),"? And what does the ",(0,i.jsx)(t.code,{children:"0"}),' have to do with it? Well each player, whether it is single-player or multi-player, are assigned an "index" to keep track of which player is which. Player 1 has an index of ',(0,i.jsx)(t.code,{children:"0"}),", player 2 has an index ",(0,i.jsx)(t.code,{children:"1"}),", and so on. ",(0,i.jsx)(t.strong,{children:"BUT"})," at the current moment, custom levels only support one player, so whenever you use ",(0,i.jsx)(t.code,{children:"new_player_ship(FixedPoint x, FixedPoint y, int player_index)"}),", just use 0 for the ",(0,i.jsx)(t.code,{children:"player_index"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The code above worked just fine, but another way, which is good practice, to write the above code is"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:"local x_spawn = 100fx\nlocal y_spawn = 100fx\nlocal p1_index = 0\nlocal player1_ship = pewpew.new_player_ship(x_spawn, y_spawn, p1_index)\n"})}),"\n",(0,i.jsx)(t.p,{children:"This piece of code sets the ship as a variable that you can reference later on! I highly recommend using this second piece of code rather than the first one!"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"And there you have it! Down below is the final product."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/VHV6s29.png",alt:""})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["Now there's one more step before we can test out our level! We need something called a ",(0,i.jsx)(t.code,{children:"manifest"})]})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"manifest"})," is your level description, name, and entry! I will explain entry in a bit, but for now, here's how to make a manifest. This one is actually written in a language other than Lua. I won't explain it too much, I will just show you the code and you can make a ",(0,i.jsx)(t.code,{children:"manifest"}),". But first, make a new file in your level folder and call it ",(0,i.jsx)(t.code,{children:"manifest.json"}),". ",(0,i.jsxs)(t.strong,{children:["NOT ",(0,i.jsx)(t.code,{children:"manifest.lua"}),". Like I said, it's a different language!"]})]}),"\n",(0,i.jsx)(t.p,{children:"In the manifest you need to put this piece of code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "name": "LEVEL_NAME",\n  "descriptions": ["LEVEL DESCRIPTION"],\n  "entry_point": "level.lua"\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["You can look at it and kind of get a sense of what's going on, but I will brief you on it. You put your level name where ",(0,i.jsx)(t.code,{children:'"LEVEL_NAME"'})," is ",(0,i.jsx)(t.strong,{children:"INSIDE"})," the quotation ",(0,i.jsx)(t.code,{children:'""'})," marks! You can do the same with the level description, inside the quotation marks and brackets ",(0,i.jsx)(t.code,{children:'[""]'}),"! See the ",(0,i.jsx)(t.code,{children:'"entry_point"'}),"? That's why we named the main script ",(0,i.jsx)(t.code,{children:"level.lua"}),". The game enters through that script and runs your level. And that is ",(0,i.jsx)(t.em,{children:"all"})," you need to know about this new file. Down below is the manifest for my tutorial level."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/eMCp8e5.png",alt:""})}),"\n",(0,i.jsx)(t.p,{children:"You are done! You can run your level!"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["Ready to take it out for a spin? Good! Remember that ",(0,i.jsx)(t.code,{children:".exe"})," I mentioned some time back? Yeah, we need that. Head back to the screen below."]})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/CrvXuXT.png",alt:""})}),"\n",(0,i.jsx)(t.p,{children:"You need to run the ppl-utils file. It will open a window, and your computer will warn you about this file. Go ahead and run the file anyway, and you will be able to try out your level! You should get something like below:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/0GVpONe.png",alt:""})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Your levels are being run! Now you need to go to the website that the screen above is telling you!"})," The website to run your levels is ",(0,i.jsx)(t.a,{href:"http://localhost:9000/pewpew.html",children:"http://localhost:9000/pewpew.html"})]}),"\n",(0,i.jsx)(t.p,{children:"You should get a screen like this:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/Diaobu9.png",alt:""})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"As you can see, the manifest dictated what name my level would show as."})}),"\n",(0,i.jsx)(t.p,{children:'My tutorial world is at the top of the page, called "Tutorial Level". As it should, as that is what I put in the manifest above. You will need to find your level in the list of levels. And there you go! Just go into your level and give it a whirl!'})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(6540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);