const a = /* @__PURE__ */ new Set();
async function t(o) {
  if (!a.has(o))
    try {
      switch (o) {
        case "pgov":
          await Promise.resolve({         });
          break;
        case "pgov-dark":
          await Promise.resolve({              });
          break;
        case "uswds-default":
          await Promise.resolve({                  });
          break;
        default:
          console.warn(`Theme "${o}" not found.`);
          return;
      }
      a.add(o);
    } catch (r) {
      throw console.error(`Failed to load theme "${o}":`, r), r;
    }
}
export {
  t as loadTheme
};
//# sourceMappingURL=themeLoader.js.map
