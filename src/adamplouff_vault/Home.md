---
title: 
description: 
date: 2024-09-16
tags: 
published: false
image: 
file:
---


## Unpublished
```dataview
table title as "Title", dateformat(date,"yyyy-MM-dd") as "Date", tags
from "notes"
sort date desc
where !published
```

## Published

```dataview
table title as "Title", dateformat(date,"yyyy-MM-dd") as "Date", tags
from "notes"
sort date desc
where published
```
## Motion

```dataview
LIST
FROM #motion
```
