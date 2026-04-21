const TOKENS = [
  '--h5p-bg',
  '--h5p-fg',
  '--h5p-muted',
  '--h5p-border',
  '--h5p-accent',
  '--h5p-radius',
  '--h5p-font',
];

function syncThemeFromParent() {
  try {
    if (window.parent === window) return;

    // const parentRoot = window.parent.document.documentElement;
    // const parentStyles = window.parent.getComputedStyle(parentRoot);
    // const localRoot = document.documentElement;

    // for (const token of TOKENS) {
    //   const value = parentStyles.getPropertyValue(token).trim();
    //   if (value) localRoot.style.setProperty(token, value);
    // }

    const parentDoc = window.parent.document;
    const sources = [parentDoc.documentElement, parentDoc.body].filter(Boolean);
    const localRoot = document.documentElement;

    for (const token of TOKENS) {
      let value = '';
      for (const src of sources) {
        value = window.parent
          .getComputedStyle(src)
          .getPropertyValue(token)
          .trim();
        if (value) break;
      }
      if (value) localRoot.style.setProperty(token, value);
    }

  } catch {}
}

function watchTheme() {
  try {
    if (window.parent === window) return;

    const parentRoot = window.parent.document.documentElement;
    const observer = new MutationObserver(syncThemeFromParent);

    observer.observe(parentRoot, {
      attributes: true,
      attributeFilter: ['class', 'style', 'saved-theme', 'data-theme'],
    });
  } catch {}
}

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  syncThemeFromParent();
  watchTheme();
});
