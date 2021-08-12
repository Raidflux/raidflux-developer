---
sidebar_position: 1
slug: /
---

# Introduction

## Welcome to our documentation page!

Raidflux is an auto-scaling multiplayer game server hosting platform. 
That's focussed on providing  
auto-scaled multiplayer game-server infrastructure to developers of any size by simplifying the  
process. We do this by providing a web-based interface that allows you to set up your infrastructure in a matter of minutes! 

You can find all the documentation you need to get Raidflux integrated in your game!

## Terminology & Autoscaling

**Console** - Our webinterface that allows you to set up a multiplayer game server infrastructure.  
**Team** - One or more user(s) that work together on a single infrastructure on the console of Raidflux.  
**Build Repository** - Page to upload and manage builds.  
**Build** - A packaged Linux targeted server application of a game.  
**Region Plan** - A plan where the user determines the type of fleetship and the mothership's deploy locations.  
**Region** - A central location (e.g. Amsterdam) and it's connect radius.  
**Deployment** - The place the user determines what build goes live using a specific Region plan.  
**Billing Profile** - Payment profile to assign to a team.  
:::importanty
**Mothership** - A Virtual Machine running Raidflux software that orchestrates a region and its fleetships.  
**Fleetship** - Virtual Machine hosting one or more game servers.  
**Seats** - The amount of open spots for players to join in a game server.  
**Game server** - An instance of the game server application uploaded by the user which clients of the game can connect to.  
**Autoscaling** - Automatically starting or stopping fleetships based on user traffic.  
**WebSocket** - A TCP socket implementing the web-socket protocol meant for real-time connections in web-browsers.  
**Rfcli** - Command line interface partially implementing Raidflux's API meant for use with CI/CD.  
:::

The user picks the Region(s) where a Mothership will take charge off. The Mothership sents out a fleetship that can have an x amount of game-servers, this is dependent on the strength of your fleetship and the amount of resources your game servers use. When all Seats are filled in a fleetship the Mothership gets signaled and makes sure a new fleetship gets deployed for the players in the waiting queue! But what if people decide to leave the Fleetship leaving it empty? In case of a empty Fleet ship the Mothership will recall it to make sure the user doesn’t waste any valuable resources! This way the user only pays for what's used by the players of their game.

We currently have support for **Unreal Engine** and **Unity**.  
Support for **Godot** and other platforms/languages will get developed when there's a demand for it.

## Getting Started
TODO