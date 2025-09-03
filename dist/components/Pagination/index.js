import Ct, { useRef as Xt, useState as Lr, useEffect as Dr, useMemo as Ke } from "react";
function zr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fe = { exports: {} }, Se = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vt;
function Yr() {
  if (Vt) return Se;
  Vt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, o) {
    var s = null;
    if (o !== void 0 && (s = "" + o), a.key !== void 0 && (s = "" + a.key), "key" in a) {
      o = {};
      for (var l in a)
        l !== "key" && (o[l] = a[l]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return Se.Fragment = t, Se.jsx = n, Se.jsxs = n, Se;
}
var Te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function $r() {
  return Jt || (Jt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(i) {
      if (i == null) return null;
      if (typeof i == "function")
        return i.$$typeof === pe ? null : i.displayName || i.name || null;
      if (typeof i == "string") return i;
      switch (i) {
        case R:
          return "Fragment";
        case j:
          return "Profiler";
        case C:
          return "StrictMode";
        case g:
          return "Suspense";
        case q:
          return "SuspenseList";
        case se:
          return "Activity";
      }
      if (typeof i == "object")
        switch (typeof i.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), i.$$typeof) {
          case M:
            return "Portal";
          case S:
            return (i.displayName || "Context") + ".Provider";
          case D:
            return (i._context.displayName || "Context") + ".Consumer";
          case w:
            var c = i.render;
            return i = i.displayName, i || (i = c.displayName || c.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
          case H:
            return c = i.displayName || null, c !== null ? c : e(i.type) || "Memo";
          case K:
            c = i._payload, i = i._init;
            try {
              return e(i(c));
            } catch {
            }
        }
      return null;
    }
    function t(i) {
      return "" + i;
    }
    function n(i) {
      try {
        t(i);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var y = c.error, v = typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return y.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          v
        ), t(i);
      }
    }
    function r(i) {
      if (i === R) return "<>";
      if (typeof i == "object" && i !== null && i.$$typeof === K)
        return "<...>";
      try {
        var c = e(i);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var i = B.A;
      return i === null ? null : i.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(i) {
      if (Z.call(i, "key")) {
        var c = Object.getOwnPropertyDescriptor(i, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return i.key !== void 0;
    }
    function l(i, c) {
      function y() {
        le || (le = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      y.isReactWarning = !0, Object.defineProperty(i, "key", {
        get: y,
        configurable: !0
      });
    }
    function u() {
      var i = e(this.type);
      return W[i] || (W[i] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), i = this.props.ref, i !== void 0 ? i : null;
    }
    function f(i, c, y, v, E, T, P, k) {
      return y = T.ref, i = {
        $$typeof: O,
        type: i,
        key: c,
        props: T,
        _owner: E
      }, (y !== void 0 ? y : null) !== null ? Object.defineProperty(i, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(i, "ref", { enumerable: !1, value: null }), i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(i, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(i, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.defineProperty(i, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    }
    function m(i, c, y, v, E, T, P, k) {
      var A = c.children;
      if (A !== void 0)
        if (v)
          if (Q(A)) {
            for (v = 0; v < A.length; v++)
              p(A[v]);
            Object.freeze && Object.freeze(A);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(A);
      if (Z.call(c, "key")) {
        A = e(i);
        var N = Object.keys(c).filter(function($) {
          return $ !== "key";
        });
        v = 0 < N.length ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}", ce[A + v] || (N = 0 < N.length ? "{" + N.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          v,
          A,
          N,
          A
        ), ce[A + v] = !0);
      }
      if (A = null, y !== void 0 && (n(y), A = "" + y), s(c) && (n(c.key), A = "" + c.key), "key" in c) {
        y = {};
        for (var I in c)
          I !== "key" && (y[I] = c[I]);
      } else y = c;
      return A && l(
        y,
        typeof i == "function" ? i.displayName || i.name || "Unknown" : i
      ), f(
        i,
        A,
        T,
        E,
        a(),
        y,
        P,
        k
      );
    }
    function p(i) {
      typeof i == "object" && i !== null && i.$$typeof === O && i._store && (i._store.validated = 1);
    }
    var h = Ct, O = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), S = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), pe = Symbol.for("react.client.reference"), B = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = Object.prototype.hasOwnProperty, Q = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      "react-stack-bottom-frame": function(i) {
        return i();
      }
    };
    var le, W = {}, V = h["react-stack-bottom-frame"].bind(
      h,
      o
    )(), re = X(r(o)), ce = {};
    Te.Fragment = R, Te.jsx = function(i, c, y, v, E) {
      var T = 1e4 > B.recentlyCreatedOwnerStacks++;
      return m(
        i,
        c,
        y,
        !1,
        v,
        E,
        T ? Error("react-stack-top-frame") : V,
        T ? X(r(i)) : re
      );
    }, Te.jsxs = function(i, c, y, v, E) {
      var T = 1e4 > B.recentlyCreatedOwnerStacks++;
      return m(
        i,
        c,
        y,
        !0,
        v,
        E,
        T ? Error("react-stack-top-frame") : V,
        T ? X(r(i)) : re
      );
    };
  }()), Te;
}
var Kt;
function Wr() {
  return Kt || (Kt = 1, process.env.NODE_ENV === "production" ? Fe.exports = Yr() : Fe.exports = $r()), Fe.exports;
}
var z = Wr(), Le = { exports: {} }, De = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zt;
function Ur() {
  if (Zt) return F;
  Zt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, O = e ? Symbol.for("react.memo") : 60115, M = e ? Symbol.for("react.lazy") : 60116, R = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function S(g) {
    if (typeof g == "object" && g !== null) {
      var q = g.$$typeof;
      switch (q) {
        case t:
          switch (g = g.type, g) {
            case u:
            case f:
            case r:
            case o:
            case a:
            case p:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case m:
                case M:
                case O:
                case s:
                  return g;
                default:
                  return q;
              }
          }
        case n:
          return q;
      }
    }
  }
  function w(g) {
    return S(g) === f;
  }
  return F.AsyncMode = u, F.ConcurrentMode = f, F.ContextConsumer = l, F.ContextProvider = s, F.Element = t, F.ForwardRef = m, F.Fragment = r, F.Lazy = M, F.Memo = O, F.Portal = n, F.Profiler = o, F.StrictMode = a, F.Suspense = p, F.isAsyncMode = function(g) {
    return w(g) || S(g) === u;
  }, F.isConcurrentMode = w, F.isContextConsumer = function(g) {
    return S(g) === l;
  }, F.isContextProvider = function(g) {
    return S(g) === s;
  }, F.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, F.isForwardRef = function(g) {
    return S(g) === m;
  }, F.isFragment = function(g) {
    return S(g) === r;
  }, F.isLazy = function(g) {
    return S(g) === M;
  }, F.isMemo = function(g) {
    return S(g) === O;
  }, F.isPortal = function(g) {
    return S(g) === n;
  }, F.isProfiler = function(g) {
    return S(g) === o;
  }, F.isStrictMode = function(g) {
    return S(g) === a;
  }, F.isSuspense = function(g) {
    return S(g) === p;
  }, F.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === f || g === o || g === a || g === p || g === h || typeof g == "object" && g !== null && (g.$$typeof === M || g.$$typeof === O || g.$$typeof === s || g.$$typeof === l || g.$$typeof === m || g.$$typeof === C || g.$$typeof === j || g.$$typeof === D || g.$$typeof === R);
  }, F.typeOf = S, F;
}
var L = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qt;
function qr() {
  return Qt || (Qt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, O = e ? Symbol.for("react.memo") : 60115, M = e ? Symbol.for("react.lazy") : 60116, R = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function S(b) {
      return typeof b == "string" || typeof b == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      b === r || b === f || b === o || b === a || b === p || b === h || typeof b == "object" && b !== null && (b.$$typeof === M || b.$$typeof === O || b.$$typeof === s || b.$$typeof === l || b.$$typeof === m || b.$$typeof === C || b.$$typeof === j || b.$$typeof === D || b.$$typeof === R);
    }
    function w(b) {
      if (typeof b == "object" && b !== null) {
        var J = b.$$typeof;
        switch (J) {
          case t:
            var ge = b.type;
            switch (ge) {
              case u:
              case f:
              case r:
              case o:
              case a:
              case p:
                return ge;
              default:
                var Oe = ge && ge.$$typeof;
                switch (Oe) {
                  case l:
                  case m:
                  case M:
                  case O:
                  case s:
                    return Oe;
                  default:
                    return J;
                }
            }
          case n:
            return J;
        }
      }
    }
    var g = u, q = f, H = l, K = s, se = t, pe = m, B = r, Z = M, Q = O, X = n, le = o, W = a, V = p, re = !1;
    function ce(b) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), i(b) || w(b) === u;
    }
    function i(b) {
      return w(b) === f;
    }
    function c(b) {
      return w(b) === l;
    }
    function y(b) {
      return w(b) === s;
    }
    function v(b) {
      return typeof b == "object" && b !== null && b.$$typeof === t;
    }
    function E(b) {
      return w(b) === m;
    }
    function T(b) {
      return w(b) === r;
    }
    function P(b) {
      return w(b) === M;
    }
    function k(b) {
      return w(b) === O;
    }
    function A(b) {
      return w(b) === n;
    }
    function N(b) {
      return w(b) === o;
    }
    function I(b) {
      return w(b) === a;
    }
    function $(b) {
      return w(b) === p;
    }
    L.AsyncMode = g, L.ConcurrentMode = q, L.ContextConsumer = H, L.ContextProvider = K, L.Element = se, L.ForwardRef = pe, L.Fragment = B, L.Lazy = Z, L.Memo = Q, L.Portal = X, L.Profiler = le, L.StrictMode = W, L.Suspense = V, L.isAsyncMode = ce, L.isConcurrentMode = i, L.isContextConsumer = c, L.isContextProvider = y, L.isElement = v, L.isForwardRef = E, L.isFragment = T, L.isLazy = P, L.isMemo = k, L.isPortal = A, L.isProfiler = N, L.isStrictMode = I, L.isSuspense = $, L.isValidElementType = S, L.typeOf = w;
  }()), L;
}
var en;
function zn() {
  return en || (en = 1, process.env.NODE_ENV === "production" ? De.exports = Ur() : De.exports = qr()), De.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ze, tn;
function Br() {
  if (tn) return Ze;
  tn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var u = Object.getOwnPropertyNames(s).map(function(m) {
        return s[m];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        f[m] = m;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ze = a() ? Object.assign : function(o, s) {
    for (var l, u = r(o), f, m = 1; m < arguments.length; m++) {
      l = Object(arguments[m]);
      for (var p in l)
        t.call(l, p) && (u[p] = l[p]);
      if (e) {
        f = e(l);
        for (var h = 0; h < f.length; h++)
          n.call(l, f[h]) && (u[f[h]] = l[f[h]]);
      }
    }
    return u;
  }, Ze;
}
var Qe, nn;
function kt() {
  if (nn) return Qe;
  nn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qe = e, Qe;
}
var et, rn;
function Yn() {
  return rn || (rn = 1, et = Function.call.bind(Object.prototype.hasOwnProperty)), et;
}
var tt, an;
function Gr() {
  if (an) return tt;
  an = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ kt(), n = {}, r = /* @__PURE__ */ Yn();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, l, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in o)
        if (r(o, m)) {
          var p;
          try {
            if (typeof o[m] != "function") {
              var h = Error(
                (u || "React class") + ": " + l + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            p = o[m](s, m, u, l, null, t);
          } catch (M) {
            p = M;
          }
          if (p && !(p instanceof Error) && e(
            (u || "React class") + ": type specification of " + l + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var O = f ? f() : "";
            e(
              "Failed " + l + " type: " + p.message + (O ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, tt = a, tt;
}
var nt, on;
function Hr() {
  if (on) return nt;
  on = 1;
  var e = zn(), t = Br(), n = /* @__PURE__ */ kt(), r = /* @__PURE__ */ Yn(), a = /* @__PURE__ */ Gr(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(l) {
    var u = "Warning: " + l;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return nt = function(l, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function p(i) {
      var c = i && (f && i[f] || i[m]);
      if (typeof c == "function")
        return c;
    }
    var h = "<<anonymous>>", O = {
      array: j("array"),
      bigint: j("bigint"),
      bool: j("boolean"),
      func: j("function"),
      number: j("number"),
      object: j("object"),
      string: j("string"),
      symbol: j("symbol"),
      any: D(),
      arrayOf: S,
      element: w(),
      elementType: g(),
      instanceOf: q,
      node: pe(),
      objectOf: K,
      oneOf: H,
      oneOfType: se,
      shape: Z,
      exact: Q
    };
    function M(i, c) {
      return i === c ? i !== 0 || 1 / i === 1 / c : i !== i && c !== c;
    }
    function R(i, c) {
      this.message = i, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    R.prototype = Error.prototype;
    function C(i) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, y = 0;
      function v(T, P, k, A, N, I, $) {
        if (A = A || h, I = I || k, $ !== n) {
          if (u) {
            var b = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw b.name = "Invariant Violation", b;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var J = A + ":" + k;
            !c[J] && // Avoid spamming the console because they are often not actionable except for lib authors
            y < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + I + "` prop on `" + A + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[J] = !0, y++);
          }
        }
        return P[k] == null ? T ? P[k] === null ? new R("The " + N + " `" + I + "` is marked as required " + ("in `" + A + "`, but its value is `null`.")) : new R("The " + N + " `" + I + "` is marked as required in " + ("`" + A + "`, but its value is `undefined`.")) : null : i(P, k, A, N, I);
      }
      var E = v.bind(null, !1);
      return E.isRequired = v.bind(null, !0), E;
    }
    function j(i) {
      function c(y, v, E, T, P, k) {
        var A = y[v], N = W(A);
        if (N !== i) {
          var I = V(A);
          return new R(
            "Invalid " + T + " `" + P + "` of type " + ("`" + I + "` supplied to `" + E + "`, expected ") + ("`" + i + "`."),
            { expectedType: i }
          );
        }
        return null;
      }
      return C(c);
    }
    function D() {
      return C(s);
    }
    function S(i) {
      function c(y, v, E, T, P) {
        if (typeof i != "function")
          return new R("Property `" + P + "` of component `" + E + "` has invalid PropType notation inside arrayOf.");
        var k = y[v];
        if (!Array.isArray(k)) {
          var A = W(k);
          return new R("Invalid " + T + " `" + P + "` of type " + ("`" + A + "` supplied to `" + E + "`, expected an array."));
        }
        for (var N = 0; N < k.length; N++) {
          var I = i(k, N, E, T, P + "[" + N + "]", n);
          if (I instanceof Error)
            return I;
        }
        return null;
      }
      return C(c);
    }
    function w() {
      function i(c, y, v, E, T) {
        var P = c[y];
        if (!l(P)) {
          var k = W(P);
          return new R("Invalid " + E + " `" + T + "` of type " + ("`" + k + "` supplied to `" + v + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(i);
    }
    function g() {
      function i(c, y, v, E, T) {
        var P = c[y];
        if (!e.isValidElementType(P)) {
          var k = W(P);
          return new R("Invalid " + E + " `" + T + "` of type " + ("`" + k + "` supplied to `" + v + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(i);
    }
    function q(i) {
      function c(y, v, E, T, P) {
        if (!(y[v] instanceof i)) {
          var k = i.name || h, A = ce(y[v]);
          return new R("Invalid " + T + " `" + P + "` of type " + ("`" + A + "` supplied to `" + E + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return C(c);
    }
    function H(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function c(y, v, E, T, P) {
        for (var k = y[v], A = 0; A < i.length; A++)
          if (M(k, i[A]))
            return null;
        var N = JSON.stringify(i, function($, b) {
          var J = V(b);
          return J === "symbol" ? String(b) : b;
        });
        return new R("Invalid " + T + " `" + P + "` of value `" + String(k) + "` " + ("supplied to `" + E + "`, expected one of " + N + "."));
      }
      return C(c);
    }
    function K(i) {
      function c(y, v, E, T, P) {
        if (typeof i != "function")
          return new R("Property `" + P + "` of component `" + E + "` has invalid PropType notation inside objectOf.");
        var k = y[v], A = W(k);
        if (A !== "object")
          return new R("Invalid " + T + " `" + P + "` of type " + ("`" + A + "` supplied to `" + E + "`, expected an object."));
        for (var N in k)
          if (r(k, N)) {
            var I = i(k, N, E, T, P + "." + N, n);
            if (I instanceof Error)
              return I;
          }
        return null;
      }
      return C(c);
    }
    function se(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var c = 0; c < i.length; c++) {
        var y = i[c];
        if (typeof y != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + re(y) + " at index " + c + "."
          ), s;
      }
      function v(E, T, P, k, A) {
        for (var N = [], I = 0; I < i.length; I++) {
          var $ = i[I], b = $(E, T, P, k, A, n);
          if (b == null)
            return null;
          b.data && r(b.data, "expectedType") && N.push(b.data.expectedType);
        }
        var J = N.length > 0 ? ", expected one of type [" + N.join(", ") + "]" : "";
        return new R("Invalid " + k + " `" + A + "` supplied to " + ("`" + P + "`" + J + "."));
      }
      return C(v);
    }
    function pe() {
      function i(c, y, v, E, T) {
        return X(c[y]) ? null : new R("Invalid " + E + " `" + T + "` supplied to " + ("`" + v + "`, expected a ReactNode."));
      }
      return C(i);
    }
    function B(i, c, y, v, E) {
      return new R(
        (i || "React class") + ": " + c + " type `" + y + "." + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + E + "`."
      );
    }
    function Z(i) {
      function c(y, v, E, T, P) {
        var k = y[v], A = W(k);
        if (A !== "object")
          return new R("Invalid " + T + " `" + P + "` of type `" + A + "` " + ("supplied to `" + E + "`, expected `object`."));
        for (var N in i) {
          var I = i[N];
          if (typeof I != "function")
            return B(E, T, P, N, V(I));
          var $ = I(k, N, E, T, P + "." + N, n);
          if ($)
            return $;
        }
        return null;
      }
      return C(c);
    }
    function Q(i) {
      function c(y, v, E, T, P) {
        var k = y[v], A = W(k);
        if (A !== "object")
          return new R("Invalid " + T + " `" + P + "` of type `" + A + "` " + ("supplied to `" + E + "`, expected `object`."));
        var N = t({}, y[v], i);
        for (var I in N) {
          var $ = i[I];
          if (r(i, I) && typeof $ != "function")
            return B(E, T, P, I, V($));
          if (!$)
            return new R(
              "Invalid " + T + " `" + P + "` key `" + I + "` supplied to `" + E + "`.\nBad object: " + JSON.stringify(y[v], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(i), null, "  ")
            );
          var b = $(k, I, E, T, P + "." + I, n);
          if (b)
            return b;
        }
        return null;
      }
      return C(c);
    }
    function X(i) {
      switch (typeof i) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !i;
        case "object":
          if (Array.isArray(i))
            return i.every(X);
          if (i === null || l(i))
            return !0;
          var c = p(i);
          if (c) {
            var y = c.call(i), v;
            if (c !== i.entries) {
              for (; !(v = y.next()).done; )
                if (!X(v.value))
                  return !1;
            } else
              for (; !(v = y.next()).done; ) {
                var E = v.value;
                if (E && !X(E[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function le(i, c) {
      return i === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function W(i) {
      var c = typeof i;
      return Array.isArray(i) ? "array" : i instanceof RegExp ? "object" : le(c, i) ? "symbol" : c;
    }
    function V(i) {
      if (typeof i > "u" || i === null)
        return "" + i;
      var c = W(i);
      if (c === "object") {
        if (i instanceof Date)
          return "date";
        if (i instanceof RegExp)
          return "regexp";
      }
      return c;
    }
    function re(i) {
      var c = V(i);
      switch (c) {
        case "array":
        case "object":
          return "an " + c;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + c;
        default:
          return c;
      }
    }
    function ce(i) {
      return !i.constructor || !i.constructor.name ? h : i.constructor.name;
    }
    return O.checkPropTypes = a, O.resetWarningCache = a.resetWarningCache, O.PropTypes = O, O;
  }, nt;
}
var rt, sn;
function Xr() {
  if (sn) return rt;
  sn = 1;
  var e = /* @__PURE__ */ kt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, rt = function() {
    function r(s, l, u, f, m, p) {
      if (p !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, rt;
}
var ln;
function Vr() {
  if (ln) return Le.exports;
  if (ln = 1, process.env.NODE_ENV !== "production") {
    var e = zn(), t = !0;
    Le.exports = /* @__PURE__ */ Hr()(e.isElement, t);
  } else
    Le.exports = /* @__PURE__ */ Xr()();
  return Le.exports;
}
var Jr = /* @__PURE__ */ Vr();
const _ = /* @__PURE__ */ zr(Jr);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Kr(e, t, n) {
  return (t = Qr(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function cn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cn(Object(n), !0).forEach(function(r) {
      Kr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Zr(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Qr(e) {
  var t = Zr(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const fn = () => {
};
let Rt = {}, $n = {}, Wn = null, Un = {
  mark: fn,
  measure: fn
};
try {
  typeof window < "u" && (Rt = window), typeof document < "u" && ($n = document), typeof MutationObserver < "u" && (Wn = MutationObserver), typeof performance < "u" && (Un = performance);
} catch {
}
const {
  userAgent: un = ""
} = Rt.navigator || {}, ue = Rt, Y = $n, dn = Wn, ze = Un;
ue.document;
const ie = !!Y.documentElement && !!Y.head && typeof Y.addEventListener == "function" && typeof Y.createElement == "function", qn = ~un.indexOf("MSIE") || ~un.indexOf("Trident/");
var ea = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, ta = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Bn = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, na = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Gn = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], U = "classic", Ge = "duotone", ra = "sharp", aa = "sharp-duotone", Hn = [U, Ge, ra, aa], oa = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, ia = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, sa = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), la = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, ca = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], mn = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, fa = ["kit"], ua = {
  kit: {
    "fa-kit": "fak"
  }
}, da = ["fak", "fakd"], ma = {
  kit: {
    fak: "fa-kit"
  }
}, pn = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Ye = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, pa = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], ga = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], ha = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, ya = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, ba = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, ft = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, va = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], ut = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...pa, ...va], xa = ["solid", "regular", "light", "thin", "duotone", "brands"], Xn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Ea = Xn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), _a = [...Object.keys(ba), ...xa, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ye.GROUP, Ye.SWAP_OPACITY, Ye.PRIMARY, Ye.SECONDARY].concat(Xn.map((e) => "".concat(e, "x"))).concat(Ea.map((e) => "w-".concat(e))), wa = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const ae = "___FONT_AWESOME___", dt = 16, Vn = "fa", Jn = "svg-inline--fa", ye = "data-fa-i2svg", mt = "data-fa-pseudo-element", Aa = "data-fa-pseudo-element-pending", It = "data-prefix", Nt = "data-icon", gn = "fontawesome-i2svg", Oa = "async", Sa = ["HTML", "HEAD", "STYLE", "SCRIPT"], Kn = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Ne(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[U];
    }
  });
}
const Zn = d({}, Bn);
Zn[U] = d(d(d(d({}, {
  "fa-duotone": "duotone"
}), Bn[U]), mn.kit), mn["kit-duotone"]);
const Ta = Ne(Zn), pt = d({}, la);
pt[U] = d(d(d(d({}, {
  duotone: "fad"
}), pt[U]), pn.kit), pn["kit-duotone"]);
const hn = Ne(pt), gt = d({}, ft);
gt[U] = d(d({}, gt[U]), ma.kit);
const Mt = Ne(gt), ht = d({}, ya);
ht[U] = d(d({}, ht[U]), ua.kit);
Ne(ht);
const Pa = ea, Qn = "fa-layers-text", Ca = ta, ka = d({}, oa);
Ne(ka);
const Ra = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], at = na, Ia = [...fa, ..._a], Ce = ue.FontAwesomeConfig || {};
function Na(e) {
  var t = Y.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Ma(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
Y && typeof Y.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = Ma(Na(n));
  a != null && (Ce[r] = a);
});
const er = {
  styleDefault: "solid",
  familyDefault: U,
  cssPrefix: Vn,
  replacementClass: Jn,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Ce.familyPrefix && (Ce.cssPrefix = Ce.familyPrefix);
const we = d(d({}, er), Ce);
we.autoReplaceSvg || (we.observeMutations = !1);
const x = {};
Object.keys(er).forEach((e) => {
  Object.defineProperty(x, e, {
    enumerable: !0,
    set: function(t) {
      we[e] = t, ke.forEach((n) => n(x));
    },
    get: function() {
      return we[e];
    }
  });
});
Object.defineProperty(x, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    we.cssPrefix = e, ke.forEach((t) => t(x));
  },
  get: function() {
    return we.cssPrefix;
  }
});
ue.FontAwesomeConfig = x;
const ke = [];
function ja(e) {
  return ke.push(e), () => {
    ke.splice(ke.indexOf(e), 1);
  };
}
const fe = dt, te = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Fa(e) {
  if (!e || !ie)
    return;
  const t = Y.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = Y.head.childNodes;
  let r = null;
  for (let a = n.length - 1; a > -1; a--) {
    const o = n[a], s = (o.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (r = o);
  }
  return Y.head.insertBefore(t, r), e;
}
const La = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Re() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += La[Math.random() * 62 | 0];
  return t;
}
function Ae(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function jt(e) {
  return e.classList ? Ae(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function tr(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Da(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(tr(e[n]), '" '), "").trim();
}
function He(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Ft(e) {
  return e.size !== te.size || e.x !== te.x || e.y !== te.y || e.rotate !== te.rotate || e.flipX || e.flipY;
}
function za(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), l = "rotate(".concat(t.rotate, " 0 0)"), u = {
    transform: "".concat(o, " ").concat(s, " ").concat(l)
  }, f = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: u,
    path: f
  };
}
function Ya(e) {
  let {
    transform: t,
    width: n = dt,
    height: r = dt,
    startCentered: a = !1
  } = e, o = "";
  return a && qn ? o += "translate(".concat(t.x / fe - n / 2, "em, ").concat(t.y / fe - r / 2, "em) ") : a ? o += "translate(calc(-50% + ".concat(t.x / fe, "em), calc(-50% + ").concat(t.y / fe, "em)) ") : o += "translate(".concat(t.x / fe, "em, ").concat(t.y / fe, "em) "), o += "scale(".concat(t.size / fe * (t.flipX ? -1 : 1), ", ").concat(t.size / fe * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var $a = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function nr() {
  const e = Vn, t = Jn, n = x.cssPrefix, r = x.replacementClass;
  let a = $a;
  if (n !== e || r !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(t), "g");
    a = a.replace(o, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(l, ".".concat(r));
  }
  return a;
}
let yn = !1;
function ot() {
  x.autoAddCss && !yn && (Fa(nr()), yn = !0);
}
var Wa = {
  mixout() {
    return {
      dom: {
        css: nr,
        insertCss: ot
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        ot();
      },
      beforeI2svg() {
        ot();
      }
    };
  }
};
const oe = ue || {};
oe[ae] || (oe[ae] = {});
oe[ae].styles || (oe[ae].styles = {});
oe[ae].hooks || (oe[ae].hooks = {});
oe[ae].shims || (oe[ae].shims = []);
var ne = oe[ae];
const rr = [], ar = function() {
  Y.removeEventListener("DOMContentLoaded", ar), Ue = 1, rr.map((e) => e());
};
let Ue = !1;
ie && (Ue = (Y.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Y.readyState), Ue || Y.addEventListener("DOMContentLoaded", ar));
function Ua(e) {
  ie && (Ue ? setTimeout(e, 0) : rr.push(e));
}
function Me(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? tr(e) : "<".concat(t, " ").concat(Da(n), ">").concat(r.map(Me).join(""), "</").concat(t, ">");
}
function bn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var it = function(t, n, r, a) {
  var o = Object.keys(t), s = o.length, l = n, u, f, m;
  for (r === void 0 ? (u = 1, m = t[o[0]]) : (u = 0, m = r); u < s; u++)
    f = o[u], m = l(m, t[f], f, t);
  return m;
};
function qa(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      const o = e.charCodeAt(n++);
      (o & 64512) == 56320 ? t.push(((a & 1023) << 10) + (o & 1023) + 65536) : (t.push(a), n--);
    } else
      t.push(a);
  }
  return t;
}
function yt(e) {
  const t = qa(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Ba(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function vn(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function bt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = vn(t);
  typeof ne.hooks.addPack == "function" && !r ? ne.hooks.addPack(e, vn(t)) : ne.styles[e] = d(d({}, ne.styles[e] || {}), a), e === "fas" && bt("fa", t);
}
const {
  styles: Ie,
  shims: Ga
} = ne, or = Object.keys(Mt), Ha = or.reduce((e, t) => (e[t] = Object.keys(Mt[t]), e), {});
let Lt = null, ir = {}, sr = {}, lr = {}, cr = {}, fr = {};
function Xa(e) {
  return ~Ia.indexOf(e);
}
function Va(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Xa(a) ? a : null;
}
const ur = () => {
  const e = (r) => it(Ie, (a, o, s) => (a[s] = it(o, r, {}), a), {});
  ir = e((r, a, o) => (a[3] && (r[a[3]] = o), a[2] && a[2].filter((l) => typeof l == "number").forEach((l) => {
    r[l.toString(16)] = o;
  }), r)), sr = e((r, a, o) => (r[o] = o, a[2] && a[2].filter((l) => typeof l == "string").forEach((l) => {
    r[l] = o;
  }), r)), fr = e((r, a, o) => {
    const s = a[2];
    return r[o] = o, s.forEach((l) => {
      r[l] = o;
    }), r;
  });
  const t = "far" in Ie || x.autoFetchSvg, n = it(Ga, (r, a) => {
    const o = a[0];
    let s = a[1];
    const l = a[2];
    return s === "far" && !t && (s = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: s,
      iconName: l
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: l
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  lr = n.names, cr = n.unicodes, Lt = Xe(x.styleDefault, {
    family: x.familyDefault
  });
};
ja((e) => {
  Lt = Xe(e.styleDefault, {
    family: x.familyDefault
  });
});
ur();
function Dt(e, t) {
  return (ir[e] || {})[t];
}
function Ja(e, t) {
  return (sr[e] || {})[t];
}
function he(e, t) {
  return (fr[e] || {})[t];
}
function dr(e) {
  return lr[e] || {
    prefix: null,
    iconName: null
  };
}
function Ka(e) {
  const t = cr[e], n = Dt("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function de() {
  return Lt;
}
const mr = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Za(e) {
  let t = U;
  const n = or.reduce((r, a) => (r[a] = "".concat(x.cssPrefix, "-").concat(a), r), {});
  return Hn.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => Ha[r].includes(a))) && (t = r);
  }), t;
}
function Xe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = U
  } = t, r = Ta[n][e];
  if (n === Ge && !e)
    return "fad";
  const a = hn[n][e] || hn[n][r], o = e in ne.styles ? e : null;
  return a || o || null;
}
function Qa(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = Va(x.cssPrefix, r);
    a ? n = a : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function xn(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function Ve(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const a = ut.concat(ga), o = xn(e.filter((p) => a.includes(p))), s = xn(e.filter((p) => !ut.includes(p))), l = o.filter((p) => (r = p, !Gn.includes(p))), [u = null] = l, f = Za(o), m = d(d({}, Qa(s)), {}, {
    prefix: Xe(u, {
      family: f
    })
  });
  return d(d(d({}, m), ro({
    values: e,
    family: f,
    styles: Ie,
    config: x,
    canonical: m,
    givenPrefix: r
  })), eo(n, r, m));
}
function eo(e, t, n) {
  let {
    prefix: r,
    iconName: a
  } = n;
  if (e || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  const o = t === "fa" ? dr(a) : {}, s = he(r, a);
  return a = o.iconName || s || a, r = o.prefix || r, r === "far" && !Ie.far && Ie.fas && !x.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const to = Hn.filter((e) => e !== U || e !== Ge), no = Object.keys(ft).filter((e) => e !== U).map((e) => Object.keys(ft[e])).flat();
function ro(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: o = {},
    config: s = {}
  } = e, l = n === Ge, u = t.includes("fa-duotone") || t.includes("fad"), f = s.familyDefault === "duotone", m = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!l && (u || f || m) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && to.includes(n) && (Object.keys(o).find((h) => no.includes(h)) || s.autoFetchSvg)) {
    const h = sa.get(n).defaultShortPrefixId;
    r.prefix = h, r.iconName = he(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = de() || "fas"), r;
}
class ao {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((o) => {
      this.definitions[o] = d(d({}, this.definitions[o] || {}), a[o]), bt(o, a[o]);
      const s = Mt[U][o];
      s && bt(s, a[o]), ur();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((a) => {
      const {
        prefix: o,
        iconName: s,
        icon: l
      } = r[a], u = l[2];
      t[o] || (t[o] = {}), u.length > 0 && u.forEach((f) => {
        typeof f == "string" && (t[o][f] = l);
      }), t[o][s] = l;
    }), t;
  }
}
let En = [], ve = {};
const _e = {}, oo = Object.keys(_e);
function io(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return En = e, ve = {}, Object.keys(_e).forEach((r) => {
    oo.indexOf(r) === -1 && delete _e[r];
  }), En.forEach((r) => {
    const a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach((o) => {
      typeof a[o] == "function" && (n[o] = a[o]), typeof a[o] == "object" && Object.keys(a[o]).forEach((s) => {
        n[o] || (n[o] = {}), n[o][s] = a[o][s];
      });
    }), r.hooks) {
      const o = r.hooks();
      Object.keys(o).forEach((s) => {
        ve[s] || (ve[s] = []), ve[s].push(o[s]);
      });
    }
    r.provides && r.provides(_e);
  }), n;
}
function vt(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (ve[e] || []).forEach((s) => {
    t = s.apply(null, [t, ...r]);
  }), t;
}
function be(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (ve[e] || []).forEach((o) => {
    o.apply(null, n);
  });
}
function me() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return _e[e] ? _e[e].apply(null, t) : void 0;
}
function xt(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || de();
  if (t)
    return t = he(n, t) || t, bn(pr.definitions, n, t) || bn(ne.styles, n, t);
}
const pr = new ao(), so = () => {
  x.autoReplaceSvg = !1, x.observeMutations = !1, be("noAuto");
}, lo = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return ie ? (be("beforeI2svg", e), me("pseudoElements2svg", e), me("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    x.autoReplaceSvg === !1 && (x.autoReplaceSvg = !0), x.observeMutations = !0, Ua(() => {
      fo({
        autoReplaceSvgRoot: t
      }), be("watch", e);
    });
  }
}, co = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: he(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Xe(e[0]);
      return {
        prefix: n,
        iconName: he(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(x.cssPrefix, "-")) > -1 || e.match(Pa))) {
      const t = Ve(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || de(),
        iconName: he(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = de();
      return {
        prefix: t,
        iconName: he(t, e) || e
      };
    }
  }
}, G = {
  noAuto: so,
  config: x,
  dom: lo,
  parse: co,
  library: pr,
  findIconDefinition: xt,
  toHtml: Me
}, fo = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = Y
  } = e;
  (Object.keys(ne.styles).length > 0 || x.autoFetchSvg) && ie && x.autoReplaceSvg && G.dom.i2svg({
    node: t
  });
};
function Je(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Me(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!ie) return;
      const n = Y.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function uo(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: o,
    transform: s
  } = e;
  if (Ft(s) && n.found && !r.found) {
    const {
      width: l,
      height: u
    } = n, f = {
      x: l / u / 2,
      y: 0.5
    };
    a.style = He(d(d({}, o), {}, {
      "transform-origin": "".concat(f.x + s.x / 16, "em ").concat(f.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function mo(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: a,
    symbol: o
  } = e;
  const s = o === !0 ? "".concat(t, "-").concat(x.cssPrefix, "-").concat(n) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: d(d({}, a), {}, {
        id: s
      }),
      children: r
    }]
  }];
}
function zt(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: a,
    transform: o,
    symbol: s,
    title: l,
    maskId: u,
    titleId: f,
    extra: m,
    watchable: p = !1
  } = e, {
    width: h,
    height: O
  } = n.found ? n : t, M = da.includes(r), R = [x.replacementClass, a ? "".concat(x.cssPrefix, "-").concat(a) : ""].filter((g) => m.classes.indexOf(g) === -1).filter((g) => g !== "" || !!g).concat(m.classes).join(" ");
  let C = {
    children: [],
    attributes: d(d({}, m.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: R,
      role: m.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(h, " ").concat(O)
    })
  };
  const j = M && !~m.classes.indexOf("fa-fw") ? {
    width: "".concat(h / O * 16 * 0.0625, "em")
  } : {};
  p && (C.attributes[ye] = ""), l && (C.children.push({
    tag: "title",
    attributes: {
      id: C.attributes["aria-labelledby"] || "title-".concat(f || Re())
    },
    children: [l]
  }), delete C.attributes.title);
  const D = d(d({}, C), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: u,
    transform: o,
    symbol: s,
    styles: d(d({}, j), m.styles)
  }), {
    children: S,
    attributes: w
  } = n.found && t.found ? me("generateAbstractMask", D) || {
    children: [],
    attributes: {}
  } : me("generateAbstractIcon", D) || {
    children: [],
    attributes: {}
  };
  return D.children = S, D.attributes = w, s ? mo(D) : uo(D);
}
function _n(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: a,
    title: o,
    extra: s,
    watchable: l = !1
  } = e, u = d(d(d({}, s.attributes), o ? {
    title: o
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  l && (u[ye] = "");
  const f = d({}, s.styles);
  Ft(a) && (f.transform = Ya({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), f["-webkit-transform"] = f.transform);
  const m = He(f);
  m.length > 0 && (u.style = m);
  const p = [];
  return p.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), o && p.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), p;
}
function po(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, a = d(d(d({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), o = He(r.styles);
  o.length > 0 && (a.style = o);
  const s = [];
  return s.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), n && s.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), s;
}
const {
  styles: st
} = ne;
function Et(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(x.cssPrefix, "-").concat(at.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(x.cssPrefix, "-").concat(at.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(x.cssPrefix, "-").concat(at.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : a = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: a
  };
}
const go = {
  found: !1,
  width: 512,
  height: 512
};
function ho(e, t) {
  !Kn && !x.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function _t(e, t) {
  let n = t;
  return t === "fa" && x.styleDefault !== null && (t = de()), new Promise((r, a) => {
    if (n === "fa") {
      const o = dr(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && st[t] && st[t][e]) {
      const o = st[t][e];
      return r(Et(o));
    }
    ho(e, t), r(d(d({}, go), {}, {
      icon: x.showMissingIcons && e ? me("missingIconAbstract") || {} : {}
    }));
  });
}
const wn = () => {
}, wt = x.measurePerformance && ze && ze.mark && ze.measure ? ze : {
  mark: wn,
  measure: wn
}, Pe = 'FA "6.7.2"', yo = (e) => (wt.mark("".concat(Pe, " ").concat(e, " begins")), () => gr(e)), gr = (e) => {
  wt.mark("".concat(Pe, " ").concat(e, " ends")), wt.measure("".concat(Pe, " ").concat(e), "".concat(Pe, " ").concat(e, " begins"), "".concat(Pe, " ").concat(e, " ends"));
};
var Yt = {
  begin: yo,
  end: gr
};
const $e = () => {
};
function An(e) {
  return typeof (e.getAttribute ? e.getAttribute(ye) : null) == "string";
}
function bo(e) {
  const t = e.getAttribute ? e.getAttribute(It) : null, n = e.getAttribute ? e.getAttribute(Nt) : null;
  return t && n;
}
function vo(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(x.replacementClass);
}
function xo() {
  return x.autoReplaceSvg === !0 ? We.replace : We[x.autoReplaceSvg] || We.replace;
}
function Eo(e) {
  return Y.createElementNS("http://www.w3.org/2000/svg", e);
}
function _o(e) {
  return Y.createElement(e);
}
function hr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Eo : _o
  } = t;
  if (typeof e == "string")
    return Y.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  }), (e.children || []).forEach(function(o) {
    r.appendChild(hr(o, {
      ceFn: n
    }));
  }), r;
}
function wo(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const We = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(hr(n), t);
      }), t.getAttribute(ye) === null && x.keepOriginalSource) {
        let n = Y.createComment(wo(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~jt(t).indexOf(x.replacementClass))
      return We.replace(e);
    const r = new RegExp("".concat(x.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const o = n[0].attributes.class.split(" ").reduce((s, l) => (l === x.replacementClass || l.match(r) ? s.toSvg.push(l) : s.toNode.push(l), s), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    const a = n.map((o) => Me(o)).join(`
`);
    t.setAttribute(ye, ""), t.innerHTML = a;
  }
};
function On(e) {
  e();
}
function yr(e, t) {
  const n = typeof t == "function" ? t : $e;
  if (e.length === 0)
    n();
  else {
    let r = On;
    x.mutateApproach === Oa && (r = ue.requestAnimationFrame || On), r(() => {
      const a = xo(), o = Yt.begin("mutate");
      e.map(a), o(), n();
    });
  }
}
let $t = !1;
function br() {
  $t = !0;
}
function At() {
  $t = !1;
}
let qe = null;
function Sn(e) {
  if (!dn || !x.observeMutations)
    return;
  const {
    treeCallback: t = $e,
    nodeCallback: n = $e,
    pseudoElementsCallback: r = $e,
    observeMutationsRoot: a = Y
  } = e;
  qe = new dn((o) => {
    if ($t) return;
    const s = de();
    Ae(o).forEach((l) => {
      if (l.type === "childList" && l.addedNodes.length > 0 && !An(l.addedNodes[0]) && (x.searchPseudoElements && r(l.target), t(l.target)), l.type === "attributes" && l.target.parentNode && x.searchPseudoElements && r(l.target.parentNode), l.type === "attributes" && An(l.target) && ~Ra.indexOf(l.attributeName))
        if (l.attributeName === "class" && bo(l.target)) {
          const {
            prefix: u,
            iconName: f
          } = Ve(jt(l.target));
          l.target.setAttribute(It, u || s), f && l.target.setAttribute(Nt, f);
        } else vo(l.target) && n(l.target);
    });
  }), ie && qe.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Ao() {
  qe && qe.disconnect();
}
function Oo(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const o = a.split(":"), s = o[0], l = o.slice(1);
    return s && l.length > 0 && (r[s] = l.join(":").trim()), r;
  }, {})), n;
}
function So(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = Ve(jt(e));
  return a.prefix || (a.prefix = de()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Ja(a.prefix, e.innerText) || Dt(a.prefix, yt(e.innerText))), !a.iconName && x.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function To(e) {
  const t = Ae(e.attributes).reduce((a, o) => (a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return x.autoA11y && (n ? t["aria-labelledby"] = "".concat(x.replacementClass, "-title-").concat(r || Re()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Po() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: te,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function Tn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: a
  } = So(e), o = To(e), s = vt("parseNodeAttributes", {}, e);
  let l = t.styleParser ? Oo(e) : [];
  return d({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: te,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: a,
      styles: l,
      attributes: o
    }
  }, s);
}
const {
  styles: Co
} = ne;
function vr(e) {
  const t = x.autoReplaceSvg === "nest" ? Tn(e, {
    styleParser: !1
  }) : Tn(e);
  return ~t.extra.classes.indexOf(Qn) ? me("generateLayersText", e, t) : me("generateSvgReplacementMutation", e, t);
}
function ko() {
  return [...ca, ...ut];
}
function Pn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ie) return Promise.resolve();
  const n = Y.documentElement.classList, r = (m) => n.add("".concat(gn, "-").concat(m)), a = (m) => n.remove("".concat(gn, "-").concat(m)), o = x.autoFetchSvg ? ko() : Gn.concat(Object.keys(Co));
  o.includes("fa") || o.push("fa");
  const s = [".".concat(Qn, ":not([").concat(ye, "])")].concat(o.map((m) => ".".concat(m, ":not([").concat(ye, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let l = [];
  try {
    l = Ae(e.querySelectorAll(s));
  } catch {
  }
  if (l.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const u = Yt.begin("onTree"), f = l.reduce((m, p) => {
    try {
      const h = vr(p);
      h && m.push(h);
    } catch (h) {
      Kn || h.name === "MissingIcon" && console.error(h);
    }
    return m;
  }, []);
  return new Promise((m, p) => {
    Promise.all(f).then((h) => {
      yr(h, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), u(), m();
      });
    }).catch((h) => {
      u(), p(h);
    });
  });
}
function Ro(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  vr(e).then((n) => {
    n && yr([n], t);
  });
}
function Io(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : xt(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : xt(a || {})), e(r, d(d({}, n), {}, {
      mask: a
    }));
  };
}
const No = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = te,
    symbol: r = !1,
    mask: a = null,
    maskId: o = null,
    title: s = null,
    titleId: l = null,
    classes: u = [],
    attributes: f = {},
    styles: m = {}
  } = t;
  if (!e) return;
  const {
    prefix: p,
    iconName: h,
    icon: O
  } = e;
  return Je(d({
    type: "icon"
  }, e), () => (be("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), x.autoA11y && (s ? f["aria-labelledby"] = "".concat(x.replacementClass, "-title-").concat(l || Re()) : (f["aria-hidden"] = "true", f.focusable = "false")), zt({
    icons: {
      main: Et(O),
      mask: a ? Et(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: p,
    iconName: h,
    transform: d(d({}, te), n),
    symbol: r,
    title: s,
    maskId: o,
    titleId: l,
    extra: {
      attributes: f,
      styles: m,
      classes: u
    }
  })));
};
var Mo = {
  mixout() {
    return {
      icon: Io(No)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Pn, e.nodeCallback = Ro, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = Y,
        callback: r = () => {
        }
      } = t;
      return Pn(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: a,
        titleId: o,
        prefix: s,
        transform: l,
        symbol: u,
        mask: f,
        maskId: m,
        extra: p
      } = n;
      return new Promise((h, O) => {
        Promise.all([_t(r, s), f.iconName ? _t(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((M) => {
          let [R, C] = M;
          h([t, zt({
            icons: {
              main: R,
              mask: C
            },
            prefix: s,
            iconName: r,
            transform: l,
            symbol: u,
            maskId: m,
            title: a,
            titleId: o,
            extra: p,
            watchable: !0
          })]);
        }).catch(O);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        transform: o,
        styles: s
      } = t;
      const l = He(s);
      l.length > 0 && (r.style = l);
      let u;
      return Ft(o) && (u = me("generateAbstractTransformGrouping", {
        main: a,
        transform: o,
        containerWidth: a.width,
        iconWidth: a.width
      })), n.push(u || a.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, jo = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Je({
          type: "layer"
        }, () => {
          be("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((a) => {
            Array.isArray(a) ? a.map((o) => {
              r = r.concat(o.abstract);
            }) : r = r.concat(a.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(x.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, Fo = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: a = {},
          styles: o = {}
        } = t;
        return Je({
          type: "counter",
          content: e
        }, () => (be("beforeDOMElementCreation", {
          content: e,
          params: t
        }), po({
          content: e.toString(),
          title: n,
          extra: {
            attributes: a,
            styles: o,
            classes: ["".concat(x.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, Lo = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = te,
          title: r = null,
          classes: a = [],
          attributes: o = {},
          styles: s = {}
        } = t;
        return Je({
          type: "text",
          content: e
        }, () => (be("beforeDOMElementCreation", {
          content: e,
          params: t
        }), _n({
          content: e,
          transform: d(d({}, te), n),
          title: r,
          extra: {
            attributes: o,
            styles: s,
            classes: ["".concat(x.cssPrefix, "-layers-text"), ...a]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: a,
        extra: o
      } = n;
      let s = null, l = null;
      if (qn) {
        const u = parseInt(getComputedStyle(t).fontSize, 10), f = t.getBoundingClientRect();
        s = f.width / u, l = f.height / u;
      }
      return x.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, _n({
        content: t.innerHTML,
        width: s,
        height: l,
        transform: a,
        title: r,
        extra: o,
        watchable: !0
      })]);
    };
  }
};
const Do = new RegExp('"', "ug"), Cn = [1105920, 1112319], kn = d(d(d(d({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), ia), wa), ha), Ot = Object.keys(kn).reduce((e, t) => (e[t.toLowerCase()] = kn[t], e), {}), zo = Object.keys(Ot).reduce((e, t) => {
  const n = Ot[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function Yo(e) {
  const t = e.replace(Do, ""), n = Ba(t, 0), r = n >= Cn[0] && n <= Cn[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: yt(a ? t[0] : t),
    isSecondary: r || a
  };
}
function $o(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (Ot[n] || {})[a] || zo[n];
}
function Rn(e, t) {
  const n = "".concat(Aa).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const s = Ae(e.children).filter((h) => h.getAttribute(mt) === t)[0], l = ue.getComputedStyle(e, t), u = l.getPropertyValue("font-family"), f = u.match(Ca), m = l.getPropertyValue("font-weight"), p = l.getPropertyValue("content");
    if (s && !f)
      return e.removeChild(s), r();
    if (f && p !== "none" && p !== "") {
      const h = l.getPropertyValue("content");
      let O = $o(u, m);
      const {
        value: M,
        isSecondary: R
      } = Yo(h), C = f[0].startsWith("FontAwesome");
      let j = Dt(O, M), D = j;
      if (C) {
        const S = Ka(M);
        S.iconName && S.prefix && (j = S.iconName, O = S.prefix);
      }
      if (j && !R && (!s || s.getAttribute(It) !== O || s.getAttribute(Nt) !== D)) {
        e.setAttribute(n, D), s && e.removeChild(s);
        const S = Po(), {
          extra: w
        } = S;
        w.attributes[mt] = t, _t(j, O).then((g) => {
          const q = zt(d(d({}, S), {}, {
            icons: {
              main: g,
              mask: mr()
            },
            prefix: O,
            iconName: D,
            extra: w,
            watchable: !0
          })), H = Y.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(H, e.firstChild) : e.appendChild(H), H.outerHTML = q.map((K) => Me(K)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function Wo(e) {
  return Promise.all([Rn(e, "::before"), Rn(e, "::after")]);
}
function Uo(e) {
  return e.parentNode !== document.head && !~Sa.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(mt) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function In(e) {
  if (ie)
    return new Promise((t, n) => {
      const r = Ae(e.querySelectorAll("*")).filter(Uo).map(Wo), a = Yt.begin("searchPseudoElements");
      br(), Promise.all(r).then(() => {
        a(), At(), t();
      }).catch(() => {
        a(), At(), n();
      });
    });
}
var qo = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = In, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = Y
      } = t;
      x.searchPseudoElements && In(n);
    };
  }
};
let Nn = !1;
var Bo = {
  mixout() {
    return {
      dom: {
        unwatch() {
          br(), Nn = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Sn(vt("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Ao();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Nn ? At() : Sn(vt("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Mn = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const a = r.toLowerCase().split("-"), o = a[0];
    let s = a.slice(1).join("-");
    if (o && s === "h")
      return n.flipX = !0, n;
    if (o && s === "v")
      return n.flipY = !0, n;
    if (s = parseFloat(s), isNaN(s))
      return n;
    switch (o) {
      case "grow":
        n.size = n.size + s;
        break;
      case "shrink":
        n.size = n.size - s;
        break;
      case "left":
        n.x = n.x - s;
        break;
      case "right":
        n.x = n.x + s;
        break;
      case "up":
        n.y = n.y - s;
        break;
      case "down":
        n.y = n.y + s;
        break;
      case "rotate":
        n.rotate = n.rotate + s;
        break;
    }
    return n;
  }, t);
};
var Go = {
  mixout() {
    return {
      parse: {
        transform: (e) => Mn(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Mn(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: a,
        iconWidth: o
      } = t;
      const s = {
        transform: "translate(".concat(a / 2, " 256)")
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), u = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), f = "rotate(".concat(r.rotate, " 0 0)"), m = {
        transform: "".concat(l, " ").concat(u, " ").concat(f)
      }, p = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, h = {
        outer: s,
        inner: m,
        path: p
      };
      return {
        tag: "g",
        attributes: d({}, h.outer),
        children: [{
          tag: "g",
          attributes: d({}, h.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: d(d({}, n.icon.attributes), h.path)
          }]
        }]
      };
    };
  }
};
const lt = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function jn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Ho(e) {
  return e.tag === "g" ? e.children : [e];
}
var Xo = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Ve(n.split(" ").map((a) => a.trim())) : mr();
        return r.prefix || (r.prefix = de()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        mask: o,
        maskId: s,
        transform: l
      } = t;
      const {
        width: u,
        icon: f
      } = a, {
        width: m,
        icon: p
      } = o, h = za({
        transform: l,
        containerWidth: m,
        iconWidth: u
      }), O = {
        tag: "rect",
        attributes: d(d({}, lt), {}, {
          fill: "white"
        })
      }, M = f.children ? {
        children: f.children.map(jn)
      } : {}, R = {
        tag: "g",
        attributes: d({}, h.inner),
        children: [jn(d({
          tag: f.tag,
          attributes: d(d({}, f.attributes), h.path)
        }, M))]
      }, C = {
        tag: "g",
        attributes: d({}, h.outer),
        children: [R]
      }, j = "mask-".concat(s || Re()), D = "clip-".concat(s || Re()), S = {
        tag: "mask",
        attributes: d(d({}, lt), {}, {
          id: j,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [O, C]
      }, w = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: D
          },
          children: Ho(p)
        }, S]
      };
      return n.push(w, {
        tag: "rect",
        attributes: d({
          fill: "currentColor",
          "clip-path": "url(#".concat(D, ")"),
          mask: "url(#".concat(j, ")")
        }, lt)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Vo = {
  provides(e) {
    let t = !1;
    ue.matchMedia && (t = ue.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: d(d({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const o = d(d({}, a), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: d(d({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || s.children.push({
        tag: "animate",
        attributes: d(d({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: d(d({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: d(d({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: d(d({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: d(d({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: d(d({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, Jo = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Ko = [Wa, Mo, jo, Fo, Lo, qo, Bo, Go, Xo, Vo, Jo];
io(Ko, {
  mixoutsTo: G
});
G.noAuto;
G.config;
G.library;
G.dom;
const St = G.parse;
G.findIconDefinition;
G.toHtml;
const Zo = G.icon;
G.layer;
G.text;
G.counter;
function Fn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fn(Object(n), !0).forEach(function(r) {
      xe(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Be(e) {
  "@babel/helpers - typeof";
  return Be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Be(e);
}
function xe(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Qo(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function ei(e, t) {
  if (e == null) return {};
  var n = Qo(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Tt(e) {
  return ti(e) || ni(e) || ri(e) || ai();
}
function ti(e) {
  if (Array.isArray(e)) return Pt(e);
}
function ni(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ri(e, t) {
  if (e) {
    if (typeof e == "string") return Pt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pt(e, t);
  }
}
function Pt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ai() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oi(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, o = e.bounce, s = e.shake, l = e.flash, u = e.spin, f = e.spinPulse, m = e.spinReverse, p = e.pulse, h = e.fixedWidth, O = e.inverse, M = e.border, R = e.listItem, C = e.flip, j = e.size, D = e.rotation, S = e.pull, w = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": o,
    "fa-shake": s,
    "fa-flash": l,
    "fa-spin": u,
    "fa-spin-reverse": m,
    "fa-spin-pulse": f,
    "fa-pulse": p,
    "fa-fw": h,
    "fa-inverse": O,
    "fa-border": M,
    "fa-li": R,
    "fa-flip": C === !0,
    "fa-flip-horizontal": C === "horizontal" || C === "both",
    "fa-flip-vertical": C === "vertical" || C === "both"
  }, xe(t, "fa-".concat(j), typeof j < "u" && j !== null), xe(t, "fa-rotate-".concat(D), typeof D < "u" && D !== null && D !== 0), xe(t, "fa-pull-".concat(S), typeof S < "u" && S !== null), xe(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(w).map(function(g) {
    return w[g] ? g : null;
  }).filter(function(g) {
    return g;
  });
}
function ii(e) {
  return e = e - 0, e === e;
}
function xr(e) {
  return ii(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var si = ["style"];
function li(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ci(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = xr(n.slice(0, r)), o = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[li(a)] = o : t[a] = o, t;
  }, {});
}
function Er(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(u) {
    return Er(e, u);
  }), a = Object.keys(t.attributes || {}).reduce(function(u, f) {
    var m = t.attributes[f];
    switch (f) {
      case "class":
        u.attrs.className = m, delete t.attributes.class;
        break;
      case "style":
        u.attrs.style = ci(m);
        break;
      default:
        f.indexOf("aria-") === 0 || f.indexOf("data-") === 0 ? u.attrs[f.toLowerCase()] = m : u.attrs[xr(f)] = m;
    }
    return u;
  }, {
    attrs: {}
  }), o = n.style, s = o === void 0 ? {} : o, l = ei(n, si);
  return a.attrs.style = ee(ee({}, a.attrs.style), s), e.apply(void 0, [t.tag, ee(ee({}, a.attrs), l)].concat(Tt(r)));
}
var _r = !1;
try {
  _r = process.env.NODE_ENV === "production";
} catch {
}
function fi() {
  if (!_r && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Ln(e) {
  if (e && Be(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (St.icon)
    return St.icon(e);
  if (e === null)
    return null;
  if (e && Be(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function ct(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? xe({}, e, t) : {};
}
var Dn = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
}, Ee = /* @__PURE__ */ Ct.forwardRef(function(e, t) {
  var n = ee(ee({}, Dn), e), r = n.icon, a = n.mask, o = n.symbol, s = n.className, l = n.title, u = n.titleId, f = n.maskId, m = Ln(r), p = ct("classes", [].concat(Tt(oi(n)), Tt((s || "").split(" ")))), h = ct("transform", typeof n.transform == "string" ? St.transform(n.transform) : n.transform), O = ct("mask", Ln(a)), M = Zo(m, ee(ee(ee(ee({}, p), h), O), {}, {
    symbol: o,
    title: l,
    titleId: u,
    maskId: f
  }));
  if (!M)
    return fi("Could not find icon", m), null;
  var R = M.abstract, C = {
    ref: t
  };
  return Object.keys(n).forEach(function(j) {
    Dn.hasOwnProperty(j) || (C[j] = n[j]);
  }), ui(R[0], C);
});
Ee.displayName = "FontAwesomeIcon";
Ee.propTypes = {
  beat: _.bool,
  border: _.bool,
  beatFade: _.bool,
  bounce: _.bool,
  className: _.string,
  fade: _.bool,
  flash: _.bool,
  mask: _.oneOfType([_.object, _.array, _.string]),
  maskId: _.string,
  fixedWidth: _.bool,
  inverse: _.bool,
  flip: _.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: _.oneOfType([_.object, _.array, _.string]),
  listItem: _.bool,
  pull: _.oneOf(["right", "left"]),
  pulse: _.bool,
  rotation: _.oneOf([0, 90, 180, 270]),
  shake: _.bool,
  size: _.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: _.bool,
  spinPulse: _.bool,
  spinReverse: _.bool,
  symbol: _.oneOfType([_.bool, _.string]),
  title: _.string,
  titleId: _.string,
  transform: _.oneOfType([_.string, _.object]),
  swapOpacity: _.bool
};
var ui = Er.bind(null, Ct.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const di = {
  prefix: "fas",
  iconName: "angles-right",
  icon: [512, 512, [187, "angle-double-right"], "f101", "M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]
}, mi = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, pi = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, gi = {
  prefix: "fas",
  iconName: "angles-left",
  icon: [512, 512, [171, "angle-double-left"], "f100", "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"]
};
function hi(e, t, n, r, a, o) {
  const s = [], l = Math.max(1, Math.floor(n || 1));
  if (t <= l) {
    for (let p = 1; p <= t; p++)
      s.push({ type: "page", value: p, isCurrent: p === e });
    return s;
  }
  if (r) {
    s.push({ type: "page", value: 1, isCurrent: e === 1 });
    const p = Math.max(0, t - 2);
    let h = Math.max(0, l - 3);
    h = Math.min(h, p);
    const O = 2, M = O + h - 1;
    for (let C = O; C <= M; C++)
      C >= 2 && C <= t - 1 && s.push({ type: "page", value: C, isCurrent: C === e });
    return a && M < t - 1 && s.push({ type: "ellipsis", value: "..." }), s.push({ type: "page", value: t, isCurrent: e === t }), s;
  }
  const u = Math.max(1, l - (a ? 1 : 0));
  if (u >= t) {
    for (let p = 1; p <= t; p++)
      s.push({ type: "page", value: p, isCurrent: p === e });
    return s;
  }
  let f = Math.min(t, Math.max(e, u)), m = Math.max(1, f - u + 1);
  e > f && (f = e, m = Math.max(1, f - u + 1));
  for (let p = m; p <= f; p++)
    s.push({ type: "page", value: p, isCurrent: p === e });
  return a && f < t && s.push({ type: "ellipsis", value: "..." }), s;
}
const yi = ({
  currentPage: e,
  totalPages: t,
  onPageChange: n,
  maxVisiblePages: r = 7,
  showEllipsis: a = !0,
  ariaLabel: o = "Pagination",
  previousButtonText: s = "Back",
  nextButtonText: l = "Next",
  showFirstLast: u = !0,
  firstButtonText: f = "First",
  lastButtonText: m = "Last",
  showStatus: p = !0,
  resultsPerPage: h,
  totalResults: O,
  statusPosition: M = "before",
  showStatusText: R = !1,
  className: C,
  ...j
}) => {
  const D = typeof h == "number" && typeof O == "number" && h > 0 && O > 0, S = D ? Math.max(1, Math.ceil(O / h)) : t, w = Math.min(
    Math.max(1, Math.floor(Number(e) || 1)),
    Math.max(1, Math.floor(Number(S) || 1))
  );
  if (w < 1 || w > S || S < 1)
    return console.warn("Pagination: Invalid currentPage or totalPages"), null;
  const q = ["usa-pagination", C].filter(Boolean).join(" "), H = Xt(null), K = Xt(null), [se, pe] = Lr(r), B = w > 1, Z = w < S;
  Dr(() => {
    const c = H.current, y = K.current;
    if (!c || !y) return;
    const v = () => {
      const T = c, P = T && T.parentElement, k = P && P.parentElement, A = k && k.parentElement, N = [T, P, k, A].filter(Boolean).map((Ht) => Ht.clientWidth || Ht.getBoundingClientRect().width || 0);
      let I = Math.max(...N, 0);
      const $ = window.getComputedStyle(c), b = parseFloat($.paddingLeft || "0") || 0, J = parseFloat($.paddingRight || "0") || 0;
      if (I = Math.max(0, I - b - J), !I || I <= 0) return;
      const ge = y.querySelector(".usa-pagination__arrow .usa-pagination__button"), Oe = y.querySelector(".usa-pagination__page-no .usa-pagination__button"), Wt = y.querySelector(".usa-pagination__overflow"), Ut = window.getComputedStyle(y), je = parseFloat(Ut.columnGap || Ut.gap || "0") || 0, wr = ge ? Math.ceil(ge.getBoundingClientRect().width) : 40, qt = Oe ? Math.ceil(Oe.getBoundingClientRect().width) : 36, Ar = Wt ? Math.ceil(Wt.getBoundingClientRect().width) : qt, Or = 1, Sr = 1, Tr = u ? 1 : 0, Pr = u ? 1 : 0, Bt = Or + Sr + Tr + Pr, Cr = Bt * wr + Bt * je, kr = !(typeof window < "u" && window.matchMedia && window.matchMedia("(max-width: 480px)").matches && u), Rr = (a && kr ? 1 : 0) * (Ar + je), Ir = Math.max(0, I - Cr - Rr), Gt = qt + je, Nr = Gt > 0 ? Math.floor((Ir + je) / Gt) : r, Mr = 1, jr = Math.max(3, r), Fr = Math.max(Mr, Math.min(jr, Nr));
      pe(Fr);
    };
    v();
    const E = new ResizeObserver(() => {
      window.requestAnimationFrame(v);
    });
    return E.observe(c), () => E.disconnect();
  }, [r, u, w, S, B, Z]);
  const Q = (c) => {
    c !== e && n && n(c);
  }, X = () => {
    B && Q(w - 1);
  }, le = () => {
    Z && Q(w + 1);
  }, W = Ke(() => Math.min(r, se), [r, se]), V = Ke(() => {
    if (!a) {
      const T = [];
      for (let P = 1; P <= S; P++)
        T.push({ type: "page", value: P, isCurrent: P === w });
      return T;
    }
    const c = !u, v = !(typeof window < "u" && window.matchMedia && window.matchMedia("(max-width: 480px)").matches && u), E = Math.max(1, W);
    return hi(
      w,
      S,
      E,
      c,
      a && v
    );
  }, [w, S, a, W, u]), re = () => {
    w !== 1 && Q(1);
  }, ce = () => {
    w !== S && Q(S);
  }, i = Ke(() => {
    if (!p) return null;
    if (D) {
      const c = (w - 1) * h + 1, y = Math.min(w * h, O);
      return `Showing results ${c} - ${y} of ${O}`;
    }
    return `Page ${w} of ${S}`;
  }, [p, h, O, w, S]);
  return /* @__PURE__ */ z.jsxs(
    "nav",
    {
      "aria-label": o,
      className: q,
      ref: H,
      ...j,
      children: [
        p && /* @__PURE__ */ z.jsx("div", { className: "visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: i }),
        R && i && M === "before" && /* @__PURE__ */ z.jsx("div", { className: "usa-pagination__status", children: i }),
        /* @__PURE__ */ z.jsxs("ul", { className: "usa-pagination__list", ref: K, children: [
          u && /* @__PURE__ */ z.jsx("li", { className: "usa-pagination__item usa-pagination__arrow", children: /* @__PURE__ */ z.jsxs(
            "button",
            {
              type: "button",
              className: "usa-pagination__button usa-pagination__first-page",
              "aria-label": "First page",
              onClick: re,
              "aria-disabled": w === 1,
              disabled: w === 1,
              children: [
                /* @__PURE__ */ z.jsx(
                  Ee,
                  {
                    icon: gi,
                    className: "usa-pagination__icon usa-pagination__icon--left",
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ z.jsx("span", { className: "usa-pagination__link-text", children: f })
              ]
            }
          ) }),
          /* @__PURE__ */ z.jsx("li", { className: "usa-pagination__item usa-pagination__arrow", children: /* @__PURE__ */ z.jsxs(
            "button",
            {
              type: "button",
              className: "usa-pagination__button usa-pagination__previous-page",
              "aria-label": "Previous page",
              onClick: X,
              "aria-disabled": !B,
              disabled: !B,
              children: [
                /* @__PURE__ */ z.jsx(
                  Ee,
                  {
                    icon: mi,
                    className: "usa-pagination__icon usa-pagination__icon--left",
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ z.jsx("span", { className: "usa-pagination__link-text", children: s })
              ]
            }
          ) }),
          V.map((c, y) => c.type === "ellipsis" ? /* @__PURE__ */ z.jsx(
            "li",
            {
              className: "usa-pagination__item usa-pagination__overflow",
              "aria-hidden": "true",
              children: /* @__PURE__ */ z.jsx("span", { className: "usa-pagination__ellipsis", "aria-hidden": "true", children: c.value })
            },
            `ellipsis-${y}`
          ) : /* @__PURE__ */ z.jsx("li", { className: "usa-pagination__item usa-pagination__page-no", children: /* @__PURE__ */ z.jsx(
            "button",
            {
              type: "button",
              className: `usa-pagination__button ${c.isCurrent ? "usa-pagination__button--current" : ""}`,
              "aria-label": `${c.isCurrent ? "Current page, " : ""}Page ${c.value}`,
              "aria-current": c.isCurrent ? "page" : void 0,
              onClick: () => Q(c.value),
              disabled: c.isCurrent,
              children: c.value
            }
          ) }, c.value)),
          /* @__PURE__ */ z.jsx("li", { className: "usa-pagination__item usa-pagination__arrow", children: /* @__PURE__ */ z.jsxs(
            "button",
            {
              type: "button",
              className: "usa-pagination__button usa-pagination__next-page",
              "aria-label": "Next page",
              onClick: le,
              "aria-disabled": !Z,
              disabled: !Z,
              children: [
                /* @__PURE__ */ z.jsx("span", { className: "usa-pagination__link-text", children: l }),
                /* @__PURE__ */ z.jsx(
                  Ee,
                  {
                    icon: pi,
                    className: "usa-pagination__icon usa-pagination__icon--right",
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ) }),
          u && /* @__PURE__ */ z.jsx("li", { className: "usa-pagination__item usa-pagination__arrow", children: /* @__PURE__ */ z.jsxs(
            "button",
            {
              type: "button",
              className: "usa-pagination__button usa-pagination__last-page",
              "aria-label": "Last page",
              onClick: ce,
              "aria-disabled": w === S,
              disabled: w === S,
              children: [
                /* @__PURE__ */ z.jsx("span", { className: "usa-pagination__link-text", children: m }),
                /* @__PURE__ */ z.jsx(
                  Ee,
                  {
                    icon: di,
                    className: "usa-pagination__icon usa-pagination__icon--right",
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ) })
        ] }),
        R && i && M === "after" && /* @__PURE__ */ z.jsx("div", { className: "usa-pagination__status", children: i })
      ]
    }
  );
};
yi.propTypes = {
  /** 
   * The currently active page number (1-based index).
   * Must be a positive integer between 1 and totalPages (inclusive).
   * @type {number}
   */
  currentPage: _.number.isRequired,
  /** 
   * The total number of pages available.
   * Must be a positive integer greater than 0.
   * @type {number}
   */
  totalPages: _.number.isRequired,
  /** 
   * Callback function called when a page is selected.
   * Receives the new page number as the first argument.
   * @type {function}
   * @param {number} page - The selected page number
   */
  onPageChange: _.func.isRequired,
  /** 
   * Maximum number of page buttons to show (including ellipsis).
   * Determines how many page numbers are visible before truncation occurs.
   * Should be an odd number >= 5 for optimal UX (allows current page to be centered).
   * @type {number}
   * @default 7
   */
  maxVisiblePages: _.number,
  /** 
   * Whether to show ellipsis (...) for truncated pages.
   * When false, all pages will be shown regardless of maxVisiblePages.
   * @type {boolean}
   * @default true
   */
  showEllipsis: _.bool,
  /** 
   * Aria label for the pagination navigation element.
   * Used by screen readers to identify the pagination component.
   * @type {string}
   * @default 'Pagination'
   */
  ariaLabel: _.string,
  /** 
   * Text content for the previous page button.
   * Can be localized for different languages.
   * @type {string}
   * @default 'Previous'
   */
  previousButtonText: _.string,
  /** 
   * Text content for the next page button.
   * Can be localized for different languages.
   * @type {string}
   * @default 'Next'
   */
  nextButtonText: _.string,
  /**
   * Whether to show fast navigation buttons to jump to first/last page.
   * @type {boolean}
   * @default true
   */
  showFirstLast: _.bool,
  /**
   * Text content for the first page button.
   * @type {string}
   * @default 'First'
   */
  firstButtonText: _.string,
  /**
   * Text content for the last page button.
   * @type {string}
   * @default 'Last'
   */
  lastButtonText: _.string,
  /**
   * Shows status text indicating current page or results range.
   * When resultsPerPage and totalResults are provided, shows "Showing results X - Y of Z".
   * Otherwise shows "Page current of total".
   * @type {boolean}
   * @default true
   */
  showStatus: _.bool,
  /**
   * Controls whether the computed status text is rendered at all.
   * Useful when you want status text available for screen readers but hidden visually via your own layout logic.
   * @type {boolean}
   * @default true
   */
  showStatusText: _.bool,
  /** Number of results per page. When used with totalResults, enables results summary status. */
  resultsPerPage: _.number,
  /** Total number of results. When used with resultsPerPage, enables results summary status. */
  totalResults: _.number,
  /** Where to render the status text relative to the controls. 'before' or 'after'. */
  statusPosition: _.oneOf(["before", "after"]),
  /** 
   * Additional CSS class names to apply to the root navigation element.
   * Will be combined with the base 'usa-pagination' class.
   * @type {string}
   */
  className: _.string
};
export {
  yi as Pagination
};
//# sourceMappingURL=index.js.map
