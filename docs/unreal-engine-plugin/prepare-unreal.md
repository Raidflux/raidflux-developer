---
sidebar_position: 1
---

# Preparing Unreal Engine

Unfortunately, Unreal Engine doesn't support building dedicated servers out of the box, in order to do this you will have to build the engine from source. This sounds scary and difficult, but it's actually pretty easy. If you follow the steps in the urls below (in order) you'll have this set up in no time. 

:::caution
When picking a location for the source of Unreal Engine, make sure you locate it on the root of the drive you want it to be located, this prevents issues that might occur in the last stages of running Setup.bat.
:::

:::tip
We recommend putting the source for Unreal Engine on an SSD drive when possible, this will make sure development goes much smoother compared to an HDD. This is mostly due to Unreal Engine being such a big project.
:::

1. https://www.unrealengine.com/en-US/ue4-on-github
2. https://docs.unrealengine.com/4.26/en-US/ProgrammingAndScripting/ProgrammingWithCPP/DownloadingSourceCode/
3. https://docs.unrealengine.com/4.26/en-US/ProductionPipelines/DevelopmentSetup/BuildingUnrealEngine/

Raidflux only supports gameservers build for linux. You will need to enable building for linux before you can start using Raidflux. This also sounds scary and difficult, but Epic Games had made this very easy as well. Using the url below, install the toolchain for your engine version and you're ready to go!

https://docs.unrealengine.com/4.26/en-US/SharingAndReleasing/Linux/GettingStarted/
