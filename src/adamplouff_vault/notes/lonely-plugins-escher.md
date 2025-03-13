---
title: Lonely Plugins - Card Dance + Vegas
description: Doing my best MC Escher impression
date: 2012-07-21
tags:
  - motion
published: true
image: lonelyplugins-escher.webp
file:
---
![Escher cubes](lonelyplugins-escher.webp)

When I was about 7 years old I was looking for books on magic tricks in the school library. I got to the right area, but one section over. There was a giant book on the work of MC Escher. I spent a lot of time looking at that book.

**Card Dance** for hatching, **Vegas** for contour lines.

![Escher stack](lonelyplugins-escher-stack.jpg)

Geometric primitives were built with solid layers and masks. I think there are some scripts for this stuff on AEscripts, but I was too lazy to download. 

Light badly. Good/subtle lighting wont work. The contrast had to be pretty sharp to shade it properly off the luma values.

Pure Green and Red were used to for the shapes to make isolation easier.

**Confusing** Since black should have the thickest lines and white should be thin or blank, we have to remap the colors. Card Dance sets White the highest value and 50% grey to zero. SO thick lines = white, thin/blank = 50% grey. So we have to: Invert, adjust curves, unsharp mask (to get the line to taper), levels the black (inverted white) level to 50% grey. 

Vegas was used to create the contour lines on the white shape. 

See [[link](http://chriszwar.com/wordpress/2009/02/halftone-effect-using-card-dance/)] for more on building a halftone with Card Dance. 

Adjust the X and Y offsets in Card dance to stretch the circles into tapered lines.

---
from [tumblr](https://www.tumblr.com/lonelyplugins/27711499207/when-i-was-about-7-years-old-i-was-looking-for?source=share)