const TOKENS = [
  "--h5p-bg",
  "--h5p-fg",
  "--h5p-muted",
  "--h5p-border",
  "--h5p-accent",
  "--h5p-radius",
  "--h5p-font",
];

function syncThemeFromParent() {
  try {
    if (window.parent === window) return;

    const parentRoot = window.parent.document.documentElement;
    const parentStyles = window.parent.getComputedStyle(parentRoot);
    const localRoot = document.documentElement;

    for (const token of TOKENS) {
      const value = parentStyles.getPropertyValue(token).trim();
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
      attributeFilter: ["class", "style", "saved-theme", "data-theme"],
    });
  } catch {}
}

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  syncThemeFromParent();
  watchTheme();
});