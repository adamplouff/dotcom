---
title: Xamarin Text Cloud
description: 
date: 2015-04-28
tags:
  - motion
  - rubberhose
published: true
image: test-cloud-gestures.gif
file:
---

> [!NOTE] Title
> This is the project that started [Rubberhose](https://battleaxe.co/rubberhose)


<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/127564104?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="To This Day Project: Part 3"></iframe></div>

Xamarin Test Cloud is a really smart service that saves developers a lot of time by automatically testing their app on a thousand+ devices and OS configurations all while they building it. The goal was (as always) to simplify a complex and technical problem and clearly communicate the benefits of a feature-rich product.

![palette](test-cloud-palette.gif)

![devices](test-cloud-devices.gif)

The product itself tests on real hardware and reveals the errors before the user has time to find them. Knowing we would be featuring so many devices, screen sizes and scene scales – a small tool was built for quickly customizing each device layer to vary form-factors and aesthetics. An almost infinite variety of phones and tablets can be created and customized to fit each scene.

![character customize](test-cloud-characters.gif)

Another central feature of the project were the many characters needed for both development teams, users and automation team (13 characters total). An interchangeable system was built allowing characters to be rigged and animated then have facial features and costumes reworked to get the most appropriate compositions.

![scaling tryptic](test-cloud-3.gif)

Early into stroyboarding one scene really stuck out that we knew would be a lot of fun –mainly because I didn't really know how to pull it off. I wanted the flexibility to pull back from the device to a wide shot of the character but typical rigging methods do not allow for this level resolution independence. A shape based system was developed to allow character limbs to resize naturally and be invisible.

![early Rubberhose](test-cloud-rh.gif)

A new type of rubber-hose arm/leg system was built for the project to allow for quick costume changes and an unrivaled level of speed and flexibility in the animation process. Rather than some kind of IK system parented downstream from one another relying an a complex system of precomps, pins and control nulls, each limb is controlled by only two layers: one for the base and one for the hand/foot. The system allows you to define the length of the limb, the direction of bend, and the place the control points wherever desired. The system draws a simplified curved between the points, bending when appropriate. This works well for footfalls and grabbing objects.

![gestures](test-cloud-gestures.gif)

The rubber-hose rig was also used for the fingers of the briefly seen device gestures.
