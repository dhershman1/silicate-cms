# Silicate Headless CMS

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

A simple locally hosted headless CMS. I planned to use this for myself on any future projects that required something like this, however the license is MIT and the plan it to keep it that way, so as it comes along feel free to use it for yourself!

## Support

| Browser  | Support |
| -------- | -------- |
| Firefox  | 52+  |
| Chrome  | 57+  |
| Safari  | 10.1+  |
| Edge  | 16+  |
| Opera  | 44+  |
| Internet Explorer  | Not Supported  |

## How To

Currently the project is not being hosted (We're still in heavy development) with the lack of more legit functionality.

However if you'd like to preview some of the UI pieces and give some feedback here's how you can locally run the CMS:

- `clone` this repo
- `cd` into the repo directory
- Run `npm i`
- Run `npm run dev`
- Go to `localhost:3000`

There are no current permission or authentication blockers so whatever UI currently exists is accessible!

## Features (Current and Planned)

- Complete Accessibility following WCAG Standards
- Handles all levels of content: Text, Images, Files, Themes, etc...
- Easy to use REST API to retrieve data objects for your content
- Generate and serve Static HTML files (No sending html over the wire)
- Authentication system baked right in
- Internal permissions system baked right in
- User management for the CMS itself
- Plug and play

## Philosophy

The goal for Silicate is not to re invent the wheel so to speak, but to build upon and improve where it can to become a useful and easy to learn tool in your web development world.

Making client work easy to serve up so your clients can still edit their site when you're done, without needing to be on something like WordPress.

Granted, there are plenty of headless CMS tools to give you this advantage as well! However with Silicate ease of use, better A to B connecting, and following strict rules and standards might help to put it ahead. As well as expanding upon and improving implemented ideas of course!

## Technology

Built on [Nuxt](https://nuxtjs.org/). Hand crafted styles, and taking advantage of the [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) system
