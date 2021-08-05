---
sidebar_position: 2
---
# Client Side Implementation
:::important
Raidflux **ONLY** works with Linux game server builds! Don't worry the game itself can be build for any target!   
If you're not on Linux make sure you've added **Linux Build Support (Mono)** to your Unity version!  
Want to know how to add Linux Build Support? go [here](../preparing-unity.md)!
:::

The client side of Raidflux is able to fetch motherships and their fleetships's game servers.  
You can use these to join available game servers.

To get a list of regions (Motherships) sorted based on distance to the user you can use the `RaidfluxServer.Singleton.ListMotherships(string deploymentID, Action<List<Mothership>> onComplete)` function as shown below:
```cs
RaidfluxServer.Singleton.ListMotherships(deploymentID, list =>
{
...
});
```

Once you have a mothership, you can list its gameservers by using the function as shown below:
```cs
RaidfluxServer.Singleton.ListGameservers(mothership.id, list =>
{
...
});
```
[Implementation example](https://github.com/Raidflux/raidflux-unity-demo/blob/main/Assets/Scripts/Menu/Menu.cs#L40).  
[Gameserver fetched from Raidflux example](https://github.com/Raidflux/raidflux-unity-demo/blob/main/Assets/Scripts/Menu/Menu.cs#L105)