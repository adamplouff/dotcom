---
title: Hair rig
description: Proof of concept for an element in a character rig. Been playing around with .valueAtTime() for creating motion delays and waves and wanted to see if it could work for hair.
date: 2014-11-11
tags:
  - motion
published: true
image: hair-rig.gif
file:
---
![hair](hair-rig.gif)

Proof of concept for an element in a character rig. Been playing around with .valueAtTime() for creating motion delays and waves and wanted to see if it could work for hair.

Hair is a series of pins on a low triangle count mesh, a parent-chain created with Puppet Tools by [@Greg Gunn](https://dribbble.com/ggunn), and each pin-null is rotated and offset in time based on a layer naming prefix 04_17_ (offset 4 frames and rotate at an amplitude of 17). Been messing around with slicing strings lately.

Zero keyframes. None at all. Just one sine wave, the same block of code applied to each null and adjusted naming prefix.
