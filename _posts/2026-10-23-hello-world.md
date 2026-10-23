---
title: "Hello World"
description: "First post on the new blog — a quick intro and a taste of LaTeX rendering."
tags: [Meta]
---

Welcome to my new blog! This is where I'll write about code, maths, and whatever else I'm exploring.

## Why a blog

I already have a [maths section](/maths/index.html) for longer educational content, but a blog lets me publish shorter, more informal thoughts — build logs, explanations of things I've learned, and notes from projects.

## Markdown + LaTeX

Posts are written in Markdown, so formatting is simple:

- **Bold**, *italic*, `inline code`
- Lists, links, and code blocks all work
- Maths renders with MathJax

Here's a little calculus, since that's my thing:

$$\int_{0}^{1} x^2 \, dx = \left[ \frac{x^3}{3} \right]_{0}^{1} = \frac{1}{3}$$

And an inline formula: $e^{i\pi} + 1 = 0$.

## Code blocks

```python
def integrate_sq(x):
    return x**3 / 3

print(integrate_sq(1) - integrate_sq(0))  # 0.333...
```

That's it for the first post — more coming soon.
