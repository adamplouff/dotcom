---
title: Colons in Lua
description: Use a Colon on a method (`object:method()`) between when passing self as the first parameter.
date: 2024-09-03
tags:
  - til
  - lua
published: false
---
While working through the [Norns studies](https://monome.org/docs/norns/study-4/#tactile-numbers) I stumbled over when to use a period or colon on method calls. Coming from Javascript this puzzled me, since properties and methods both use period, and Lua seemed to use both.

> Use a Colon on a method (`object:method()`) instead of a period when passing `self` as the first parameter.

```lua
g:led(1,8,15)
g:refresh()

-- is the same as
g.led(g,1,8,15)
g.refresh(g)
```
