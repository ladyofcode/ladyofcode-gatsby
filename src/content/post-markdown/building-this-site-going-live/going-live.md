---
slug: "/building-this-site-going-live"
date: "2020-06-11"
title: "Building this site: Going live"
tags: ['gatsby', 'javascript']
category: "journal"
---

Having this thing go live without a hitch was too much to hope for. As usual. Combined feedback:

- [x] Increase spacing between menu items.
- [x] Fix typo on about page.
- [x] Adjust post tag list bottom margin.
- [x] SSL changes, my sites aren't all redirecting to https for some reason.
- [x] Add a loader before the CV page loads

Another annoying thing: styling checkboxes in Firefox just doesn't work with pseudo-elements unless there's the text next to it is inside a `<label>`. But I'm using markdown and don't know how to that make little bit happen programatically. *Sigh*. Whatever. This is future Tabs' problem.

I used `gatsby-plugin-nprogress` for the loader, for now. Turns out that the loader can't be tested in `develop` mode, and I have to `build` it before testing it. At least I can do that!

I encountered a loading order issue with CSS. Turns out I really should be referencing my reset CSS just... once. I had to make sure in `layout.js` I added the `import` statement for it, then the global css module, *then* the header and footer components. Subsequently, `gatsby build` worked just fine. I didn't need to chuck the reset into the global css sass file as I initially thought. Ah well!