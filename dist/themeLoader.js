const r = /* @__PURE__ */ new Set();
async function t(a) {
  if (!r.has(a))
    try {
      switch (a) {
        case "pgov":
          await Promise.resolve({         });
          break;
        case "pgov-dark":
          await Promise.resolve({         }), await Promise.resolve({              });
          break;
        case "uswds-default":
          await Promise.resolve({                  });
          break;
        default:
          console.warn(`Theme "${a}" not found.`);
          return;
      }
      r.add(a);
    } catch (o) {
      throw console.error(`Failed to load theme "${a}":`, o), o;
    }
}
export {
  t as loadTheme
};
//# sourceMappingURL=themeLoader.js.map
