import Re from "react";
var C = { exports: {} }, h = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce;
function he() {
  if (ce) return h;
  ce = 1;
  var s = Symbol.for("react.transitional.element"), p = Symbol.for("react.fragment");
  function E(_, i, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), i.key !== void 0 && (f = "" + i.key), "key" in i) {
      c = {};
      for (var x in i)
        x !== "key" && (c[x] = i[x]);
    } else c = i;
    return i = c.ref, {
      $$typeof: s,
      type: _,
      key: f,
      ref: i !== void 0 ? i : null,
      props: c
    };
  }
  return h.Fragment = p, h.jsx = E, h.jsxs = E, h;
}
var j = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function je() {
  return fe || (fe = 1, process.env.NODE_ENV !== "production" && function() {
    function s(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === xe ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case P:
          return "Fragment";
        case pe:
          return "Portal";
        case F:
          return "Profiler";
        case X:
          return "StrictMode";
        case $:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Z:
            return (e.displayName || "Context") + ".Provider";
          case L:
            return (e._context.displayName || "Context") + ".Consumer";
          case Y:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case W:
            return r = e.displayName || null, r !== null ? r : s(e.type) || "Memo";
          case U:
            r = e._payload, e = e._init;
            try {
              return s(e(r));
            } catch {
            }
        }
      return null;
    }
    function p(e) {
      return "" + e;
    }
    function E(e) {
      try {
        p(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), p(e);
      }
    }
    function _() {
    }
    function i() {
      if (w === 0) {
        K = console.log, D = console.info, ee = console.warn, re = console.error, te = console.group, oe = console.groupCollapsed, ne = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: _,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      w++;
    }
    function c() {
      if (w--, w === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: g({}, e, { value: K }),
          info: g({}, e, { value: D }),
          warn: g({}, e, { value: ee }),
          error: g({}, e, { value: re }),
          group: g({}, e, { value: te }),
          groupCollapsed: g({}, e, { value: oe }),
          groupEnd: g({}, e, { value: ne })
        });
      }
      0 > w && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function f(e) {
      if (J === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          J = r && r[1] || "", ae = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + J + e + ae;
    }
    function x(e, r) {
      if (!e || z) return "";
      var t = V.get(e);
      if (t !== void 0) return t;
      z = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var n = null;
      n = m.H, m.H = null, i();
      try {
        var u = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var b = function() {
                  throw Error();
                };
                if (Object.defineProperty(b.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(b, []);
                  } catch (d) {
                    var S = d;
                  }
                  Reflect.construct(e, [], b);
                } else {
                  try {
                    b.call();
                  } catch (d) {
                    S = d;
                  }
                  e.call(b.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (d) {
                  S = d;
                }
                (b = e()) && typeof b.catch == "function" && b.catch(function() {
                });
              }
            } catch (d) {
              if (d && S && typeof d.stack == "string")
                return [d.stack, S.stack];
            }
            return [null, null];
          }
        };
        u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(
          u.DetermineComponentFrameRoot,
          "name"
        );
        a && a.configurable && Object.defineProperty(
          u.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = u.DetermineComponentFrameRoot(), v = o[0], T = o[1];
        if (v && T) {
          var l = v.split(`
`), y = T.split(`
`);
          for (o = a = 0; a < l.length && !l[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; o < y.length && !y[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (a === l.length || o === y.length)
            for (a = l.length - 1, o = y.length - 1; 1 <= a && 0 <= o && l[a] !== y[o]; )
              o--;
          for (; 1 <= a && 0 <= o; a--, o--)
            if (l[a] !== y[o]) {
              if (a !== 1 || o !== 1)
                do
                  if (a--, o--, 0 > o || l[a] !== y[o]) {
                    var R = `
` + l[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, R), R;
                  }
                while (1 <= a && 0 <= o);
              break;
            }
        }
      } finally {
        z = !1, m.H = n, c(), Error.prepareStackTrace = t;
      }
      return l = (l = e ? e.displayName || e.name : "") ? f(l) : "", typeof e == "function" && V.set(e, l), l;
    }
    function k(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return x(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return f(e);
      switch (e) {
        case $:
          return f("Suspense");
        case M:
          return f("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Y:
            return e = x(e.render, !1), e;
          case W:
            return k(e.type);
          case U:
            r = e._payload, e = e._init;
            try {
              return k(e(r));
            } catch {
            }
        }
      return "";
    }
    function O() {
      var e = m.A;
      return e === null ? null : e.getOwner();
    }
    function de(e) {
      if (Q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function Ee(e, r) {
      function t() {
        ue || (ue = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function be() {
      var e = s(this.type);
      return le[e] || (le[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function me(e, r, t, n, u, a) {
      return t = a.ref, e = {
        $$typeof: N,
        type: e,
        key: r,
        props: a,
        _owner: u
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: be
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function G(e, r, t, n, u, a) {
      if (typeof e == "string" || typeof e == "function" || e === P || e === F || e === X || e === $ || e === M || e === _e || typeof e == "object" && e !== null && (e.$$typeof === U || e.$$typeof === W || e.$$typeof === Z || e.$$typeof === L || e.$$typeof === Y || e.$$typeof === Te || e.getModuleId !== void 0)) {
        var o = r.children;
        if (o !== void 0)
          if (n)
            if (q(o)) {
              for (n = 0; n < o.length; n++)
                B(o[n], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else B(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : q(e) ? n = "array" : e !== void 0 && e.$$typeof === N ? (n = "<" + (s(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          o
        );
      if (Q.call(r, "key")) {
        o = s(e);
        var v = Object.keys(r).filter(function(l) {
          return l !== "key";
        });
        n = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", se[o + n] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          v,
          o
        ), se[o + n] = !0);
      }
      if (o = null, t !== void 0 && (E(t), o = "" + t), de(r) && (E(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var T in r)
          T !== "key" && (t[T] = r[T]);
      } else t = r;
      return o && Ee(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), me(e, o, a, u, O(), t);
    }
    function B(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== we) {
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            A(n) && H(n, r);
          }
        else if (A(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = I && e[I] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            A(e.value) && H(e.value, r);
      }
    }
    function A(e) {
      return typeof e == "object" && e !== null && e.$$typeof === N;
    }
    function H(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = ge(r), !ie[r])) {
        ie[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== O() && (t = null, typeof e._owner.tag == "number" ? t = s(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var n = m.getCurrentStack;
        m.getCurrentStack = function() {
          var u = k(e.type);
          return n && (u += n() || ""), u;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), m.getCurrentStack = n;
      }
    }
    function ge(e) {
      var r = "", t = O();
      return t && (t = s(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = s(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var ye = Re, N = Symbol.for("react.transitional.element"), pe = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), _e = Symbol.for("react.offscreen"), I = Symbol.iterator, xe = Symbol.for("react.client.reference"), m = ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, g = Object.assign, Te = Symbol.for("react.client.reference"), q = Array.isArray, w = 0, K, D, ee, re, te, oe, ne;
    _.__reactDisabledLog = !0;
    var J, ae, z = !1, V = new (typeof WeakMap == "function" ? WeakMap : Map)(), we = Symbol.for("react.client.reference"), ue, le = {}, se = {}, ie = {};
    j.Fragment = P, j.jsx = function(e, r, t, n, u) {
      return G(e, r, t, !1, n, u);
    }, j.jsxs = function(e, r, t, n, u) {
      return G(e, r, t, !0, n, u);
    };
  }()), j;
}
var ve;
function Se() {
  return ve || (ve = 1, process.env.NODE_ENV === "production" ? C.exports = he() : C.exports = je()), C.exports;
}
var Ce = Se();
const Oe = ({
  label: s,
  variant: p = "primary",
  disabled: E = !1,
  onClick: _
}) => {
  const f = `px-4 py-2 rounded font-medium focus:outline-none ${{
    primary: "bg-[var(--portland-primary)] text-white hover:opacity-90",
    secondary: "bg-[var(--portland-secondary)] text-white hover:opacity-90",
    tertiary: "bg-white border border-[var(--portland-primary)] text-[var(--portland-primary)] hover:bg-gray-50"
  }[p]} ${E ? "opacity-50 cursor-not-allowed" : ""}`;
  return /* @__PURE__ */ Ce.jsx(
    "button",
    {
      type: "button",
      className: f,
      disabled: E,
      onClick: _,
      children: s
    }
  );
};
export {
  Oe as Button
};
