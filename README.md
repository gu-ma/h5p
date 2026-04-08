# H5P Assets Repo

This repo stores H5P content used in classes, and supporting static files for reuse across Quartz, GitHub Pages, and Jupyter embeds.

## What’s here

- H5P content packages, unpacked into static folders.
- Standalone HTML wrappers for each interaction.
- Shared assets for H5P rendering when needed.
- Optional notes or source files for how each activity was created.

## Why this repo exists

Free, self-hosted workflow for interactive learning content without relying on a paid H5P subscription.  
The goal is to author content once, host it statically, and embed it anywhere with an iframe.

## Workflow

1. Create H5P content in a local editor such as Lumi.
2. Export the content as a `.h5p` file.
3. Rename to zip and unpack the package into a folder in this repo.
4. Keep the `.h5p` file to be able to edit later.
5. Copy libraries to `shared-libraries`.
4. Add or update the standalone HTML wrapper for that activity.
5. Push / publish the repo or sync it into Quartz/GitHub Pages.
6. Embed the published HTML page in Quartz or Jupyter.

## Embedding

Each activity can be embedded as a standalone HTML page:

```html
<iframe
  src="https://your-site.example/h5p/html/quiz-1.html"
  width="100%"
  height="700"
  frameborder="0"
  title="H5P activity"
>
</iframe>
```

## Notes

- Keep the H5P package and the HTML wrapper in sync.
- Use relative paths where possible.
- Store only the files needed to render and document each activity.
- If a package is no longer used, archive it rather than deleting it.

## License

Unless otherwise noted, the content in this repo is my own.  
Any third-party libraries or assets remain under their original licenses.
