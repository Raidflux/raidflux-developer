---
sidebar_position: 2
---

# Building your game server 

:::important
Raidflux **ONLY** works with Linux game server builds!  
Don't worry the game itself can be build for any target!   
If you're not on Linux make sure you've added **Linux Build Support (Mono)** to your Unity version!  
Want to know how to add Linux Build Support? go [here](../preparing-unity.md)!
:::
:::caution
This page is for building a game server when you're using our demo project!  
If you're integrating Raidflux into your own project go [here](../integrate/building-game-server-integrate)
:::

Go to **File** -> **Build settings** and select **Linux** as build target.
If the *Server build checkbox* is visible make sure it’s **checked** if it isn’t visible ignore it.  
![build-target-linux](./assets/build-target-linux.png)  
**Build** the server and locate the build directory.  

**Create** a text file in the root of your build and change the name to "**gameserver**" and the file extension to "**.ini**".  

**Open** the gameserver.ini with a text editor and paste in the following lines:
```ini
[ports.udp] 
-: 7777

[entrypoint]
entrypoint = name_of_game_server_build.x86_64

[entrypoint.args]
-: -mlapi
-: server
```

Make sure the text behind ***entrypoint =*** is exactly the same as the name of your linux build, as shown below:
![gameserver-save](./assets/gameserver-ini.png)  

If done correctly, your build folder looks somewhat like this (your Linux build might have a different name):
![build-folder](./assets/build-folder.png)  

Select everything in the folder and **compress** it into a **.zip** file.
:::caution
Make sure you've compressed it into a **.zip** file, other archive types can't be uploaded to Raidflux!
:::
You're done here, if you've already created a team continue at [Uploading your build](./../../raidflux-console/builds#uploading-your-build) else continue at [Teams](./../../account-teams).
