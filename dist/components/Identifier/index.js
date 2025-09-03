import Pt from "react";
function gr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ne = { exports: {} }, Oe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt;
function yr() {
  if (Yt) return Oe;
  Yt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, o) {
    var s = null;
    if (o !== void 0 && (s = "" + o), a.key !== void 0 && (s = "" + a.key), "key" in a) {
      o = {};
      for (var f in a)
        f !== "key" && (o[f] = a[f]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return Oe.Fragment = t, Oe.jsx = n, Oe.jsxs = n, Oe;
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
var $t;
function br() {
  return $t || ($t = 1, process.env.NODE_ENV !== "production" && function() {
    function e(i) {
      if (i == null) return null;
      if (typeof i == "function")
        return i.$$typeof === Ee ? null : i.displayName || i.name || null;
      if (typeof i == "string") return i;
      switch (i) {
        case _:
          return "Fragment";
        case C:
          return "Profiler";
        case v:
          return "StrictMode";
        case p:
          return "Suspense";
        case G:
          return "SuspenseList";
        case xe:
          return "Activity";
      }
      if (typeof i == "object")
        switch (typeof i.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), i.$$typeof) {
          case M:
            return "Portal";
          case R:
            return (i.displayName || "Context") + ".Provider";
          case F:
            return (i._context.displayName || "Context") + ".Consumer";
          case j:
            var c = i.render;
            return i = i.displayName, i || (i = c.displayName || c.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
          case Z:
            return c = i.displayName || null, c !== null ? c : e(i.type) || "Memo";
          case ne:
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
        var b = c.error, A = typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return b.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          A
        ), t(i);
      }
    }
    function r(i) {
      if (i === _) return "<>";
      if (typeof i == "object" && i !== null && i.$$typeof === ne)
        return "<...>";
      try {
        var c = e(i);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var i = re.A;
      return i === null ? null : i.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(i) {
      if (de.call(i, "key")) {
        var c = Object.getOwnPropertyDescriptor(i, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return i.key !== void 0;
    }
    function f(i, c) {
      function b() {
        me || (me = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      b.isReactWarning = !0, Object.defineProperty(i, "key", {
        get: b,
        configurable: !0
      });
    }
    function m() {
      var i = e(this.type);
      return U[i] || (U[i] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), i = this.props.ref, i !== void 0 ? i : null;
    }
    function l(i, c, b, A, O, w, S, k) {
      return b = w.ref, i = {
        $$typeof: P,
        type: i,
        key: c,
        props: w,
        _owner: O
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(i, "ref", {
        enumerable: !1,
        get: m
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
        value: S
      }), Object.defineProperty(i, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    }
    function d(i, c, b, A, O, w, S, k) {
      var T = c.children;
      if (T !== void 0)
        if (A)
          if (Ae(T)) {
            for (A = 0; A < T.length; A++)
              g(T[A]);
            Object.freeze && Object.freeze(T);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(T);
      if (de.call(c, "key")) {
        T = e(i);
        var I = Object.keys(c).filter(function($) {
          return $ !== "key";
        });
        A = 0 < I.length ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}", pe[T + A] || (I = 0 < I.length ? "{" + I.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          A,
          T,
          I,
          T
        ), pe[T + A] = !0);
      }
      if (T = null, b !== void 0 && (n(b), T = "" + b), s(c) && (n(c.key), T = "" + c.key), "key" in c) {
        b = {};
        for (var N in c)
          N !== "key" && (b[N] = c[N]);
      } else b = c;
      return T && f(
        b,
        typeof i == "function" ? i.displayName || i.name || "Unknown" : i
      ), l(
        i,
        T,
        w,
        O,
        a(),
        b,
        S,
        k
      );
    }
    function g(i) {
      typeof i == "object" && i !== null && i.$$typeof === P && i._store && (i._store.validated = 1);
    }
    var y = Pt, P = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), R = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), xe = Symbol.for("react.activity"), Ee = Symbol.for("react.client.reference"), re = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = Object.prototype.hasOwnProperty, Ae = Array.isArray, V = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      "react-stack-bottom-frame": function(i) {
        return i();
      }
    };
    var me, U = {}, H = y["react-stack-bottom-frame"].bind(
      y,
      o
    )(), fe = V(r(o)), pe = {};
    Te.Fragment = _, Te.jsx = function(i, c, b, A, O) {
      var w = 1e4 > re.recentlyCreatedOwnerStacks++;
      return d(
        i,
        c,
        b,
        !1,
        A,
        O,
        w ? Error("react-stack-top-frame") : H,
        w ? V(r(i)) : fe
      );
    }, Te.jsxs = function(i, c, b, A, O) {
      var w = 1e4 > re.recentlyCreatedOwnerStacks++;
      return d(
        i,
        c,
        b,
        !0,
        A,
        O,
        w ? Error("react-stack-top-frame") : H,
        w ? V(r(i)) : fe
      );
    };
  }()), Te;
}
var Wt;
function vr() {
  return Wt || (Wt = 1, process.env.NODE_ENV === "production" ? Ne.exports = yr() : Ne.exports = br()), Ne.exports;
}
var Y = vr(), je = { exports: {} }, Fe = { exports: {} }, L = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ut;
function xr() {
  if (Ut) return L;
  Ut = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, P = e ? Symbol.for("react.memo") : 60115, M = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
  function R(p) {
    if (typeof p == "object" && p !== null) {
      var G = p.$$typeof;
      switch (G) {
        case t:
          switch (p = p.type, p) {
            case m:
            case l:
            case r:
            case o:
            case a:
            case g:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case f:
                case d:
                case M:
                case P:
                case s:
                  return p;
                default:
                  return G;
              }
          }
        case n:
          return G;
      }
    }
  }
  function j(p) {
    return R(p) === l;
  }
  return L.AsyncMode = m, L.ConcurrentMode = l, L.ContextConsumer = f, L.ContextProvider = s, L.Element = t, L.ForwardRef = d, L.Fragment = r, L.Lazy = M, L.Memo = P, L.Portal = n, L.Profiler = o, L.StrictMode = a, L.Suspense = g, L.isAsyncMode = function(p) {
    return j(p) || R(p) === m;
  }, L.isConcurrentMode = j, L.isContextConsumer = function(p) {
    return R(p) === f;
  }, L.isContextProvider = function(p) {
    return R(p) === s;
  }, L.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, L.isForwardRef = function(p) {
    return R(p) === d;
  }, L.isFragment = function(p) {
    return R(p) === r;
  }, L.isLazy = function(p) {
    return R(p) === M;
  }, L.isMemo = function(p) {
    return R(p) === P;
  }, L.isPortal = function(p) {
    return R(p) === n;
  }, L.isProfiler = function(p) {
    return R(p) === o;
  }, L.isStrictMode = function(p) {
    return R(p) === a;
  }, L.isSuspense = function(p) {
    return R(p) === g;
  }, L.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === l || p === o || p === a || p === g || p === y || typeof p == "object" && p !== null && (p.$$typeof === M || p.$$typeof === P || p.$$typeof === s || p.$$typeof === f || p.$$typeof === d || p.$$typeof === v || p.$$typeof === C || p.$$typeof === F || p.$$typeof === _);
  }, L.typeOf = R, L;
}
var D = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function Er() {
  return qt || (qt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, P = e ? Symbol.for("react.memo") : 60115, M = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
    function R(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === r || h === l || h === o || h === a || h === g || h === y || typeof h == "object" && h !== null && (h.$$typeof === M || h.$$typeof === P || h.$$typeof === s || h.$$typeof === f || h.$$typeof === d || h.$$typeof === v || h.$$typeof === C || h.$$typeof === F || h.$$typeof === _);
    }
    function j(h) {
      if (typeof h == "object" && h !== null) {
        var X = h.$$typeof;
        switch (X) {
          case t:
            var Ie = h.type;
            switch (Ie) {
              case m:
              case l:
              case r:
              case o:
              case a:
              case g:
                return Ie;
              default:
                var zt = Ie && Ie.$$typeof;
                switch (zt) {
                  case f:
                  case d:
                  case M:
                  case P:
                  case s:
                    return zt;
                  default:
                    return X;
                }
            }
          case n:
            return X;
        }
      }
    }
    var p = m, G = l, Z = f, ne = s, xe = t, Ee = d, re = r, de = M, Ae = P, V = n, me = o, U = a, H = g, fe = !1;
    function pe(h) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), i(h) || j(h) === m;
    }
    function i(h) {
      return j(h) === l;
    }
    function c(h) {
      return j(h) === f;
    }
    function b(h) {
      return j(h) === s;
    }
    function A(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function O(h) {
      return j(h) === d;
    }
    function w(h) {
      return j(h) === r;
    }
    function S(h) {
      return j(h) === M;
    }
    function k(h) {
      return j(h) === P;
    }
    function T(h) {
      return j(h) === n;
    }
    function I(h) {
      return j(h) === o;
    }
    function N(h) {
      return j(h) === a;
    }
    function $(h) {
      return j(h) === g;
    }
    D.AsyncMode = p, D.ConcurrentMode = G, D.ContextConsumer = Z, D.ContextProvider = ne, D.Element = xe, D.ForwardRef = Ee, D.Fragment = re, D.Lazy = de, D.Memo = Ae, D.Portal = V, D.Profiler = me, D.StrictMode = U, D.Suspense = H, D.isAsyncMode = pe, D.isConcurrentMode = i, D.isContextConsumer = c, D.isContextProvider = b, D.isElement = A, D.isForwardRef = O, D.isFragment = w, D.isLazy = S, D.isMemo = k, D.isPortal = T, D.isProfiler = I, D.isStrictMode = N, D.isSuspense = $, D.isValidElementType = R, D.typeOf = j;
  }()), D;
}
var Gt;
function Rn() {
  return Gt || (Gt = 1, process.env.NODE_ENV === "production" ? Fe.exports = xr() : Fe.exports = Er()), Fe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Xe, Vt;
function Ar() {
  if (Vt) return Xe;
  Vt = 1;
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
      for (var s = {}, f = 0; f < 10; f++)
        s["_" + String.fromCharCode(f)] = f;
      var m = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        l[d] = d;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Xe = a() ? Object.assign : function(o, s) {
    for (var f, m = r(o), l, d = 1; d < arguments.length; d++) {
      f = Object(arguments[d]);
      for (var g in f)
        t.call(f, g) && (m[g] = f[g]);
      if (e) {
        l = e(f);
        for (var y = 0; y < l.length; y++)
          n.call(f, l[y]) && (m[l[y]] = f[l[y]]);
      }
    }
    return m;
  }, Xe;
}
var Be, Ht;
function wt() {
  if (Ht) return Be;
  Ht = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Be = e, Be;
}
var Je, Xt;
function In() {
  return Xt || (Xt = 1, Je = Function.call.bind(Object.prototype.hasOwnProperty)), Je;
}
var Ke, Bt;
function Or() {
  if (Bt) return Ke;
  Bt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ wt(), n = {}, r = /* @__PURE__ */ In();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, f, m, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in o)
        if (r(o, d)) {
          var g;
          try {
            if (typeof o[d] != "function") {
              var y = Error(
                (m || "React class") + ": " + f + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            g = o[d](s, d, m, f, null, t);
          } catch (M) {
            g = M;
          }
          if (g && !(g instanceof Error) && e(
            (m || "React class") + ": type specification of " + f + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in n)) {
            n[g.message] = !0;
            var P = l ? l() : "";
            e(
              "Failed " + f + " type: " + g.message + (P ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Ke = a, Ke;
}
var Ze, Jt;
function Tr() {
  if (Jt) return Ze;
  Jt = 1;
  var e = Rn(), t = Ar(), n = /* @__PURE__ */ wt(), r = /* @__PURE__ */ In(), a = /* @__PURE__ */ Or(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(f) {
    var m = "Warning: " + f;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Ze = function(f, m) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function g(i) {
      var c = i && (l && i[l] || i[d]);
      if (typeof c == "function")
        return c;
    }
    var y = "<<anonymous>>", P = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: F(),
      arrayOf: R,
      element: j(),
      elementType: p(),
      instanceOf: G,
      node: Ee(),
      objectOf: ne,
      oneOf: Z,
      oneOfType: xe,
      shape: de,
      exact: Ae
    };
    function M(i, c) {
      return i === c ? i !== 0 || 1 / i === 1 / c : i !== i && c !== c;
    }
    function _(i, c) {
      this.message = i, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    _.prototype = Error.prototype;
    function v(i) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, b = 0;
      function A(w, S, k, T, I, N, $) {
        if (T = T || y, N = N || k, $ !== n) {
          if (m) {
            var h = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw h.name = "Invariant Violation", h;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var X = T + ":" + k;
            !c[X] && // Avoid spamming the console because they are often not actionable except for lib authors
            b < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + N + "` prop on `" + T + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[X] = !0, b++);
          }
        }
        return S[k] == null ? w ? S[k] === null ? new _("The " + I + " `" + N + "` is marked as required " + ("in `" + T + "`, but its value is `null`.")) : new _("The " + I + " `" + N + "` is marked as required in " + ("`" + T + "`, but its value is `undefined`.")) : null : i(S, k, T, I, N);
      }
      var O = A.bind(null, !1);
      return O.isRequired = A.bind(null, !0), O;
    }
    function C(i) {
      function c(b, A, O, w, S, k) {
        var T = b[A], I = U(T);
        if (I !== i) {
          var N = H(T);
          return new _(
            "Invalid " + w + " `" + S + "` of type " + ("`" + N + "` supplied to `" + O + "`, expected ") + ("`" + i + "`."),
            { expectedType: i }
          );
        }
        return null;
      }
      return v(c);
    }
    function F() {
      return v(s);
    }
    function R(i) {
      function c(b, A, O, w, S) {
        if (typeof i != "function")
          return new _("Property `" + S + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var k = b[A];
        if (!Array.isArray(k)) {
          var T = U(k);
          return new _("Invalid " + w + " `" + S + "` of type " + ("`" + T + "` supplied to `" + O + "`, expected an array."));
        }
        for (var I = 0; I < k.length; I++) {
          var N = i(k, I, O, w, S + "[" + I + "]", n);
          if (N instanceof Error)
            return N;
        }
        return null;
      }
      return v(c);
    }
    function j() {
      function i(c, b, A, O, w) {
        var S = c[b];
        if (!f(S)) {
          var k = U(S);
          return new _("Invalid " + O + " `" + w + "` of type " + ("`" + k + "` supplied to `" + A + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(i);
    }
    function p() {
      function i(c, b, A, O, w) {
        var S = c[b];
        if (!e.isValidElementType(S)) {
          var k = U(S);
          return new _("Invalid " + O + " `" + w + "` of type " + ("`" + k + "` supplied to `" + A + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(i);
    }
    function G(i) {
      function c(b, A, O, w, S) {
        if (!(b[A] instanceof i)) {
          var k = i.name || y, T = pe(b[A]);
          return new _("Invalid " + w + " `" + S + "` of type " + ("`" + T + "` supplied to `" + O + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return v(c);
    }
    function Z(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function c(b, A, O, w, S) {
        for (var k = b[A], T = 0; T < i.length; T++)
          if (M(k, i[T]))
            return null;
        var I = JSON.stringify(i, function($, h) {
          var X = H(h);
          return X === "symbol" ? String(h) : h;
        });
        return new _("Invalid " + w + " `" + S + "` of value `" + String(k) + "` " + ("supplied to `" + O + "`, expected one of " + I + "."));
      }
      return v(c);
    }
    function ne(i) {
      function c(b, A, O, w, S) {
        if (typeof i != "function")
          return new _("Property `" + S + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var k = b[A], T = U(k);
        if (T !== "object")
          return new _("Invalid " + w + " `" + S + "` of type " + ("`" + T + "` supplied to `" + O + "`, expected an object."));
        for (var I in k)
          if (r(k, I)) {
            var N = i(k, I, O, w, S + "." + I, n);
            if (N instanceof Error)
              return N;
          }
        return null;
      }
      return v(c);
    }
    function xe(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var c = 0; c < i.length; c++) {
        var b = i[c];
        if (typeof b != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(b) + " at index " + c + "."
          ), s;
      }
      function A(O, w, S, k, T) {
        for (var I = [], N = 0; N < i.length; N++) {
          var $ = i[N], h = $(O, w, S, k, T, n);
          if (h == null)
            return null;
          h.data && r(h.data, "expectedType") && I.push(h.data.expectedType);
        }
        var X = I.length > 0 ? ", expected one of type [" + I.join(", ") + "]" : "";
        return new _("Invalid " + k + " `" + T + "` supplied to " + ("`" + S + "`" + X + "."));
      }
      return v(A);
    }
    function Ee() {
      function i(c, b, A, O, w) {
        return V(c[b]) ? null : new _("Invalid " + O + " `" + w + "` supplied to " + ("`" + A + "`, expected a ReactNode."));
      }
      return v(i);
    }
    function re(i, c, b, A, O) {
      return new _(
        (i || "React class") + ": " + c + " type `" + b + "." + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function de(i) {
      function c(b, A, O, w, S) {
        var k = b[A], T = U(k);
        if (T !== "object")
          return new _("Invalid " + w + " `" + S + "` of type `" + T + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var I in i) {
          var N = i[I];
          if (typeof N != "function")
            return re(O, w, S, I, H(N));
          var $ = N(k, I, O, w, S + "." + I, n);
          if ($)
            return $;
        }
        return null;
      }
      return v(c);
    }
    function Ae(i) {
      function c(b, A, O, w, S) {
        var k = b[A], T = U(k);
        if (T !== "object")
          return new _("Invalid " + w + " `" + S + "` of type `" + T + "` " + ("supplied to `" + O + "`, expected `object`."));
        var I = t({}, b[A], i);
        for (var N in I) {
          var $ = i[N];
          if (r(i, N) && typeof $ != "function")
            return re(O, w, S, N, H($));
          if (!$)
            return new _(
              "Invalid " + w + " `" + S + "` key `" + N + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(b[A], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(i), null, "  ")
            );
          var h = $(k, N, O, w, S + "." + N, n);
          if (h)
            return h;
        }
        return null;
      }
      return v(c);
    }
    function V(i) {
      switch (typeof i) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !i;
        case "object":
          if (Array.isArray(i))
            return i.every(V);
          if (i === null || f(i))
            return !0;
          var c = g(i);
          if (c) {
            var b = c.call(i), A;
            if (c !== i.entries) {
              for (; !(A = b.next()).done; )
                if (!V(A.value))
                  return !1;
            } else
              for (; !(A = b.next()).done; ) {
                var O = A.value;
                if (O && !V(O[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function me(i, c) {
      return i === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function U(i) {
      var c = typeof i;
      return Array.isArray(i) ? "array" : i instanceof RegExp ? "object" : me(c, i) ? "symbol" : c;
    }
    function H(i) {
      if (typeof i > "u" || i === null)
        return "" + i;
      var c = U(i);
      if (c === "object") {
        if (i instanceof Date)
          return "date";
        if (i instanceof RegExp)
          return "regexp";
      }
      return c;
    }
    function fe(i) {
      var c = H(i);
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
    function pe(i) {
      return !i.constructor || !i.constructor.name ? y : i.constructor.name;
    }
    return P.checkPropTypes = a, P.resetWarningCache = a.resetWarningCache, P.PropTypes = P, P;
  }, Ze;
}
var Qe, Kt;
function Pr() {
  if (Kt) return Qe;
  Kt = 1;
  var e = /* @__PURE__ */ wt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Qe = function() {
    function r(s, f, m, l, d, g) {
      if (g !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
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
  }, Qe;
}
var Zt;
function wr() {
  if (Zt) return je.exports;
  if (Zt = 1, process.env.NODE_ENV !== "production") {
    var e = Rn(), t = !0;
    je.exports = /* @__PURE__ */ Tr()(e.isElement, t);
  } else
    je.exports = /* @__PURE__ */ Pr()();
  return je.exports;
}
var Sr = /* @__PURE__ */ wr();
const E = /* @__PURE__ */ gr(Sr);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function _r(e, t, n) {
  return (t = Cr(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Qt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qt(Object(n), !0).forEach(function(r) {
      _r(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qt(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function kr(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Cr(e) {
  var t = kr(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const en = () => {
};
let St = {}, Nn = {}, jn = null, Fn = {
  mark: en,
  measure: en
};
try {
  typeof window < "u" && (St = window), typeof document < "u" && (Nn = document), typeof MutationObserver < "u" && (jn = MutationObserver), typeof performance < "u" && (Fn = performance);
} catch {
}
const {
  userAgent: tn = ""
} = St.navigator || {}, oe = St, z = Nn, nn = jn, Me = Fn;
oe.document;
const te = !!z.documentElement && !!z.head && typeof z.addEventListener == "function" && typeof z.createElement == "function", Mn = ~tn.indexOf("MSIE") || ~tn.indexOf("Trident/");
var Rr = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Ir = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Ln = {
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
}, Nr = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Dn = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], W = "classic", Ue = "duotone", jr = "sharp", Fr = "sharp-duotone", zn = [W, Ue, jr, Fr], Mr = {
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
}, Lr = {
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
}, Dr = /* @__PURE__ */ new Map([["classic", {
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
}]]), zr = {
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
}, Yr = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], rn = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, $r = ["kit"], Wr = {
  kit: {
    "fa-kit": "fak"
  }
}, Ur = ["fak", "fakd"], qr = {
  kit: {
    fak: "fa-kit"
  }
}, an = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Le = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Gr = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Vr = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Hr = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Xr = {
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
}, Br = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, it = {
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
}, Jr = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], st = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Gr, ...Jr], Kr = ["solid", "regular", "light", "thin", "duotone", "brands"], Yn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Zr = Yn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Qr = [...Object.keys(Br), ...Kr, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Le.GROUP, Le.SWAP_OPACITY, Le.PRIMARY, Le.SECONDARY].concat(Yn.map((e) => "".concat(e, "x"))).concat(Zr.map((e) => "w-".concat(e))), ea = {
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
const Q = "___FONT_AWESOME___", ft = 16, $n = "fa", Wn = "svg-inline--fa", le = "data-fa-i2svg", ct = "data-fa-pseudo-element", ta = "data-fa-pseudo-element-pending", _t = "data-prefix", kt = "data-icon", on = "fontawesome-i2svg", na = "async", ra = ["HTML", "HEAD", "STYLE", "SCRIPT"], Un = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Ce(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[W];
    }
  });
}
const qn = u({}, Ln);
qn[W] = u(u(u(u({}, {
  "fa-duotone": "duotone"
}), Ln[W]), rn.kit), rn["kit-duotone"]);
const aa = Ce(qn), lt = u({}, zr);
lt[W] = u(u(u(u({}, {
  duotone: "fad"
}), lt[W]), an.kit), an["kit-duotone"]);
const sn = Ce(lt), ut = u({}, it);
ut[W] = u(u({}, ut[W]), qr.kit);
const Ct = Ce(ut), dt = u({}, Xr);
dt[W] = u(u({}, dt[W]), Wr.kit);
Ce(dt);
const oa = Rr, Gn = "fa-layers-text", ia = Ir, sa = u({}, Mr);
Ce(sa);
const fa = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], et = Nr, ca = [...$r, ...Qr], we = oe.FontAwesomeConfig || {};
function la(e) {
  var t = z.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function ua(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
z && typeof z.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = ua(la(n));
  a != null && (we[r] = a);
});
const Vn = {
  styleDefault: "solid",
  familyDefault: W,
  cssPrefix: $n,
  replacementClass: Wn,
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
we.familyPrefix && (we.cssPrefix = we.familyPrefix);
const be = u(u({}, Vn), we);
be.autoReplaceSvg || (be.observeMutations = !1);
const x = {};
Object.keys(Vn).forEach((e) => {
  Object.defineProperty(x, e, {
    enumerable: !0,
    set: function(t) {
      be[e] = t, Se.forEach((n) => n(x));
    },
    get: function() {
      return be[e];
    }
  });
});
Object.defineProperty(x, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    be.cssPrefix = e, Se.forEach((t) => t(x));
  },
  get: function() {
    return be.cssPrefix;
  }
});
oe.FontAwesomeConfig = x;
const Se = [];
function da(e) {
  return Se.push(e), () => {
    Se.splice(Se.indexOf(e), 1);
  };
}
const ae = ft, J = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ma(e) {
  if (!e || !te)
    return;
  const t = z.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = z.head.childNodes;
  let r = null;
  for (let a = n.length - 1; a > -1; a--) {
    const o = n[a], s = (o.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (r = o);
  }
  return z.head.insertBefore(t, r), e;
}
const pa = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function _e() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += pa[Math.random() * 62 | 0];
  return t;
}
function ve(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Rt(e) {
  return e.classList ? ve(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Hn(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ha(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Hn(e[n]), '" '), "").trim();
}
function qe(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function It(e) {
  return e.size !== J.size || e.x !== J.x || e.y !== J.y || e.rotate !== J.rotate || e.flipX || e.flipY;
}
function ga(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), f = "rotate(".concat(t.rotate, " 0 0)"), m = {
    transform: "".concat(o, " ").concat(s, " ").concat(f)
  }, l = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: m,
    path: l
  };
}
function ya(e) {
  let {
    transform: t,
    width: n = ft,
    height: r = ft,
    startCentered: a = !1
  } = e, o = "";
  return a && Mn ? o += "translate(".concat(t.x / ae - n / 2, "em, ").concat(t.y / ae - r / 2, "em) ") : a ? o += "translate(calc(-50% + ".concat(t.x / ae, "em), calc(-50% + ").concat(t.y / ae, "em)) ") : o += "translate(".concat(t.x / ae, "em, ").concat(t.y / ae, "em) "), o += "scale(".concat(t.size / ae * (t.flipX ? -1 : 1), ", ").concat(t.size / ae * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var ba = `:root, :host {
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
function Xn() {
  const e = $n, t = Wn, n = x.cssPrefix, r = x.replacementClass;
  let a = ba;
  if (n !== e || r !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), f = new RegExp("\\.".concat(t), "g");
    a = a.replace(o, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(f, ".".concat(r));
  }
  return a;
}
let fn = !1;
function tt() {
  x.autoAddCss && !fn && (ma(Xn()), fn = !0);
}
var va = {
  mixout() {
    return {
      dom: {
        css: Xn,
        insertCss: tt
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        tt();
      },
      beforeI2svg() {
        tt();
      }
    };
  }
};
const ee = oe || {};
ee[Q] || (ee[Q] = {});
ee[Q].styles || (ee[Q].styles = {});
ee[Q].hooks || (ee[Q].hooks = {});
ee[Q].shims || (ee[Q].shims = []);
var K = ee[Q];
const Bn = [], Jn = function() {
  z.removeEventListener("DOMContentLoaded", Jn), Ye = 1, Bn.map((e) => e());
};
let Ye = !1;
te && (Ye = (z.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(z.readyState), Ye || z.addEventListener("DOMContentLoaded", Jn));
function xa(e) {
  te && (Ye ? setTimeout(e, 0) : Bn.push(e));
}
function Re(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Hn(e) : "<".concat(t, " ").concat(ha(n), ">").concat(r.map(Re).join(""), "</").concat(t, ">");
}
function cn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var nt = function(t, n, r, a) {
  var o = Object.keys(t), s = o.length, f = n, m, l, d;
  for (r === void 0 ? (m = 1, d = t[o[0]]) : (m = 0, d = r); m < s; m++)
    l = o[m], d = f(d, t[l], l, t);
  return d;
};
function Ea(e) {
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
function mt(e) {
  const t = Ea(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Aa(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function ln(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function pt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = ln(t);
  typeof K.hooks.addPack == "function" && !r ? K.hooks.addPack(e, ln(t)) : K.styles[e] = u(u({}, K.styles[e] || {}), a), e === "fas" && pt("fa", t);
}
const {
  styles: ke,
  shims: Oa
} = K, Kn = Object.keys(Ct), Ta = Kn.reduce((e, t) => (e[t] = Object.keys(Ct[t]), e), {});
let Nt = null, Zn = {}, Qn = {}, er = {}, tr = {}, nr = {};
function Pa(e) {
  return ~ca.indexOf(e);
}
function wa(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Pa(a) ? a : null;
}
const rr = () => {
  const e = (r) => nt(ke, (a, o, s) => (a[s] = nt(o, r, {}), a), {});
  Zn = e((r, a, o) => (a[3] && (r[a[3]] = o), a[2] && a[2].filter((f) => typeof f == "number").forEach((f) => {
    r[f.toString(16)] = o;
  }), r)), Qn = e((r, a, o) => (r[o] = o, a[2] && a[2].filter((f) => typeof f == "string").forEach((f) => {
    r[f] = o;
  }), r)), nr = e((r, a, o) => {
    const s = a[2];
    return r[o] = o, s.forEach((f) => {
      r[f] = o;
    }), r;
  });
  const t = "far" in ke || x.autoFetchSvg, n = nt(Oa, (r, a) => {
    const o = a[0];
    let s = a[1];
    const f = a[2];
    return s === "far" && !t && (s = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: s,
      iconName: f
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: f
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  er = n.names, tr = n.unicodes, Nt = Ge(x.styleDefault, {
    family: x.familyDefault
  });
};
da((e) => {
  Nt = Ge(e.styleDefault, {
    family: x.familyDefault
  });
});
rr();
function jt(e, t) {
  return (Zn[e] || {})[t];
}
function Sa(e, t) {
  return (Qn[e] || {})[t];
}
function ce(e, t) {
  return (nr[e] || {})[t];
}
function ar(e) {
  return er[e] || {
    prefix: null,
    iconName: null
  };
}
function _a(e) {
  const t = tr[e], n = jt("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function ie() {
  return Nt;
}
const or = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function ka(e) {
  let t = W;
  const n = Kn.reduce((r, a) => (r[a] = "".concat(x.cssPrefix, "-").concat(a), r), {});
  return zn.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => Ta[r].includes(a))) && (t = r);
  }), t;
}
function Ge(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = W
  } = t, r = aa[n][e];
  if (n === Ue && !e)
    return "fad";
  const a = sn[n][e] || sn[n][r], o = e in K.styles ? e : null;
  return a || o || null;
}
function Ca(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = wa(x.cssPrefix, r);
    a ? n = a : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function un(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function Ve(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const a = st.concat(Vr), o = un(e.filter((g) => a.includes(g))), s = un(e.filter((g) => !st.includes(g))), f = o.filter((g) => (r = g, !Dn.includes(g))), [m = null] = f, l = ka(o), d = u(u({}, Ca(s)), {}, {
    prefix: Ge(m, {
      family: l
    })
  });
  return u(u(u({}, d), ja({
    values: e,
    family: l,
    styles: ke,
    config: x,
    canonical: d,
    givenPrefix: r
  })), Ra(n, r, d));
}
function Ra(e, t, n) {
  let {
    prefix: r,
    iconName: a
  } = n;
  if (e || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  const o = t === "fa" ? ar(a) : {}, s = ce(r, a);
  return a = o.iconName || s || a, r = o.prefix || r, r === "far" && !ke.far && ke.fas && !x.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const Ia = zn.filter((e) => e !== W || e !== Ue), Na = Object.keys(it).filter((e) => e !== W).map((e) => Object.keys(it[e])).flat();
function ja(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: o = {},
    config: s = {}
  } = e, f = n === Ue, m = t.includes("fa-duotone") || t.includes("fad"), l = s.familyDefault === "duotone", d = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!f && (m || l || d) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Ia.includes(n) && (Object.keys(o).find((y) => Na.includes(y)) || s.autoFetchSvg)) {
    const y = Dr.get(n).defaultShortPrefixId;
    r.prefix = y, r.iconName = ce(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = ie() || "fas"), r;
}
class Fa {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((o) => {
      this.definitions[o] = u(u({}, this.definitions[o] || {}), a[o]), pt(o, a[o]);
      const s = Ct[W][o];
      s && pt(s, a[o]), rr();
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
        icon: f
      } = r[a], m = f[2];
      t[o] || (t[o] = {}), m.length > 0 && m.forEach((l) => {
        typeof l == "string" && (t[o][l] = f);
      }), t[o][s] = f;
    }), t;
  }
}
let dn = [], he = {};
const ye = {}, Ma = Object.keys(ye);
function La(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return dn = e, he = {}, Object.keys(ye).forEach((r) => {
    Ma.indexOf(r) === -1 && delete ye[r];
  }), dn.forEach((r) => {
    const a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach((o) => {
      typeof a[o] == "function" && (n[o] = a[o]), typeof a[o] == "object" && Object.keys(a[o]).forEach((s) => {
        n[o] || (n[o] = {}), n[o][s] = a[o][s];
      });
    }), r.hooks) {
      const o = r.hooks();
      Object.keys(o).forEach((s) => {
        he[s] || (he[s] = []), he[s].push(o[s]);
      });
    }
    r.provides && r.provides(ye);
  }), n;
}
function ht(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (he[e] || []).forEach((s) => {
    t = s.apply(null, [t, ...r]);
  }), t;
}
function ue(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (he[e] || []).forEach((o) => {
    o.apply(null, n);
  });
}
function se() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return ye[e] ? ye[e].apply(null, t) : void 0;
}
function gt(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || ie();
  if (t)
    return t = ce(n, t) || t, cn(ir.definitions, n, t) || cn(K.styles, n, t);
}
const ir = new Fa(), Da = () => {
  x.autoReplaceSvg = !1, x.observeMutations = !1, ue("noAuto");
}, za = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return te ? (ue("beforeI2svg", e), se("pseudoElements2svg", e), se("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    x.autoReplaceSvg === !1 && (x.autoReplaceSvg = !0), x.observeMutations = !0, xa(() => {
      $a({
        autoReplaceSvgRoot: t
      }), ue("watch", e);
    });
  }
}, Ya = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: ce(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Ge(e[0]);
      return {
        prefix: n,
        iconName: ce(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(x.cssPrefix, "-")) > -1 || e.match(oa))) {
      const t = Ve(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || ie(),
        iconName: ce(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = ie();
      return {
        prefix: t,
        iconName: ce(t, e) || e
      };
    }
  }
}, q = {
  noAuto: Da,
  config: x,
  dom: za,
  parse: Ya,
  library: ir,
  findIconDefinition: gt,
  toHtml: Re
}, $a = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = z
  } = e;
  (Object.keys(K.styles).length > 0 || x.autoFetchSvg) && te && x.autoReplaceSvg && q.dom.i2svg({
    node: t
  });
};
function He(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Re(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!te) return;
      const n = z.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Wa(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: o,
    transform: s
  } = e;
  if (It(s) && n.found && !r.found) {
    const {
      width: f,
      height: m
    } = n, l = {
      x: f / m / 2,
      y: 0.5
    };
    a.style = qe(u(u({}, o), {}, {
      "transform-origin": "".concat(l.x + s.x / 16, "em ").concat(l.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Ua(e) {
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
      attributes: u(u({}, a), {}, {
        id: s
      }),
      children: r
    }]
  }];
}
function Ft(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: a,
    transform: o,
    symbol: s,
    title: f,
    maskId: m,
    titleId: l,
    extra: d,
    watchable: g = !1
  } = e, {
    width: y,
    height: P
  } = n.found ? n : t, M = Ur.includes(r), _ = [x.replacementClass, a ? "".concat(x.cssPrefix, "-").concat(a) : ""].filter((p) => d.classes.indexOf(p) === -1).filter((p) => p !== "" || !!p).concat(d.classes).join(" ");
  let v = {
    children: [],
    attributes: u(u({}, d.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: _,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(y, " ").concat(P)
    })
  };
  const C = M && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(y / P * 16 * 0.0625, "em")
  } : {};
  g && (v.attributes[le] = ""), f && (v.children.push({
    tag: "title",
    attributes: {
      id: v.attributes["aria-labelledby"] || "title-".concat(l || _e())
    },
    children: [f]
  }), delete v.attributes.title);
  const F = u(u({}, v), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: m,
    transform: o,
    symbol: s,
    styles: u(u({}, C), d.styles)
  }), {
    children: R,
    attributes: j
  } = n.found && t.found ? se("generateAbstractMask", F) || {
    children: [],
    attributes: {}
  } : se("generateAbstractIcon", F) || {
    children: [],
    attributes: {}
  };
  return F.children = R, F.attributes = j, s ? Ua(F) : Wa(F);
}
function mn(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: a,
    title: o,
    extra: s,
    watchable: f = !1
  } = e, m = u(u(u({}, s.attributes), o ? {
    title: o
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  f && (m[le] = "");
  const l = u({}, s.styles);
  It(a) && (l.transform = ya({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), l["-webkit-transform"] = l.transform);
  const d = qe(l);
  d.length > 0 && (m.style = d);
  const g = [];
  return g.push({
    tag: "span",
    attributes: m,
    children: [t]
  }), o && g.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), g;
}
function qa(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, a = u(u(u({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), o = qe(r.styles);
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
  styles: rt
} = K;
function yt(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(x.cssPrefix, "-").concat(et.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(x.cssPrefix, "-").concat(et.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(x.cssPrefix, "-").concat(et.PRIMARY),
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
const Ga = {
  found: !1,
  width: 512,
  height: 512
};
function Va(e, t) {
  !Un && !x.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function bt(e, t) {
  let n = t;
  return t === "fa" && x.styleDefault !== null && (t = ie()), new Promise((r, a) => {
    if (n === "fa") {
      const o = ar(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && rt[t] && rt[t][e]) {
      const o = rt[t][e];
      return r(yt(o));
    }
    Va(e, t), r(u(u({}, Ga), {}, {
      icon: x.showMissingIcons && e ? se("missingIconAbstract") || {} : {}
    }));
  });
}
const pn = () => {
}, vt = x.measurePerformance && Me && Me.mark && Me.measure ? Me : {
  mark: pn,
  measure: pn
}, Pe = 'FA "6.7.2"', Ha = (e) => (vt.mark("".concat(Pe, " ").concat(e, " begins")), () => sr(e)), sr = (e) => {
  vt.mark("".concat(Pe, " ").concat(e, " ends")), vt.measure("".concat(Pe, " ").concat(e), "".concat(Pe, " ").concat(e, " begins"), "".concat(Pe, " ").concat(e, " ends"));
};
var Mt = {
  begin: Ha,
  end: sr
};
const De = () => {
};
function hn(e) {
  return typeof (e.getAttribute ? e.getAttribute(le) : null) == "string";
}
function Xa(e) {
  const t = e.getAttribute ? e.getAttribute(_t) : null, n = e.getAttribute ? e.getAttribute(kt) : null;
  return t && n;
}
function Ba(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(x.replacementClass);
}
function Ja() {
  return x.autoReplaceSvg === !0 ? ze.replace : ze[x.autoReplaceSvg] || ze.replace;
}
function Ka(e) {
  return z.createElementNS("http://www.w3.org/2000/svg", e);
}
function Za(e) {
  return z.createElement(e);
}
function fr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Ka : Za
  } = t;
  if (typeof e == "string")
    return z.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  }), (e.children || []).forEach(function(o) {
    r.appendChild(fr(o, {
      ceFn: n
    }));
  }), r;
}
function Qa(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const ze = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(fr(n), t);
      }), t.getAttribute(le) === null && x.keepOriginalSource) {
        let n = z.createComment(Qa(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Rt(t).indexOf(x.replacementClass))
      return ze.replace(e);
    const r = new RegExp("".concat(x.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const o = n[0].attributes.class.split(" ").reduce((s, f) => (f === x.replacementClass || f.match(r) ? s.toSvg.push(f) : s.toNode.push(f), s), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    const a = n.map((o) => Re(o)).join(`
`);
    t.setAttribute(le, ""), t.innerHTML = a;
  }
};
function gn(e) {
  e();
}
function cr(e, t) {
  const n = typeof t == "function" ? t : De;
  if (e.length === 0)
    n();
  else {
    let r = gn;
    x.mutateApproach === na && (r = oe.requestAnimationFrame || gn), r(() => {
      const a = Ja(), o = Mt.begin("mutate");
      e.map(a), o(), n();
    });
  }
}
let Lt = !1;
function lr() {
  Lt = !0;
}
function xt() {
  Lt = !1;
}
let $e = null;
function yn(e) {
  if (!nn || !x.observeMutations)
    return;
  const {
    treeCallback: t = De,
    nodeCallback: n = De,
    pseudoElementsCallback: r = De,
    observeMutationsRoot: a = z
  } = e;
  $e = new nn((o) => {
    if (Lt) return;
    const s = ie();
    ve(o).forEach((f) => {
      if (f.type === "childList" && f.addedNodes.length > 0 && !hn(f.addedNodes[0]) && (x.searchPseudoElements && r(f.target), t(f.target)), f.type === "attributes" && f.target.parentNode && x.searchPseudoElements && r(f.target.parentNode), f.type === "attributes" && hn(f.target) && ~fa.indexOf(f.attributeName))
        if (f.attributeName === "class" && Xa(f.target)) {
          const {
            prefix: m,
            iconName: l
          } = Ve(Rt(f.target));
          f.target.setAttribute(_t, m || s), l && f.target.setAttribute(kt, l);
        } else Ba(f.target) && n(f.target);
    });
  }), te && $e.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function eo() {
  $e && $e.disconnect();
}
function to(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const o = a.split(":"), s = o[0], f = o.slice(1);
    return s && f.length > 0 && (r[s] = f.join(":").trim()), r;
  }, {})), n;
}
function no(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = Ve(Rt(e));
  return a.prefix || (a.prefix = ie()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Sa(a.prefix, e.innerText) || jt(a.prefix, mt(e.innerText))), !a.iconName && x.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function ro(e) {
  const t = ve(e.attributes).reduce((a, o) => (a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return x.autoA11y && (n ? t["aria-labelledby"] = "".concat(x.replacementClass, "-title-").concat(r || _e()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function ao() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: J,
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
function bn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: a
  } = no(e), o = ro(e), s = ht("parseNodeAttributes", {}, e);
  let f = t.styleParser ? to(e) : [];
  return u({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: J,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: a,
      styles: f,
      attributes: o
    }
  }, s);
}
const {
  styles: oo
} = K;
function ur(e) {
  const t = x.autoReplaceSvg === "nest" ? bn(e, {
    styleParser: !1
  }) : bn(e);
  return ~t.extra.classes.indexOf(Gn) ? se("generateLayersText", e, t) : se("generateSvgReplacementMutation", e, t);
}
function io() {
  return [...Yr, ...st];
}
function vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!te) return Promise.resolve();
  const n = z.documentElement.classList, r = (d) => n.add("".concat(on, "-").concat(d)), a = (d) => n.remove("".concat(on, "-").concat(d)), o = x.autoFetchSvg ? io() : Dn.concat(Object.keys(oo));
  o.includes("fa") || o.push("fa");
  const s = [".".concat(Gn, ":not([").concat(le, "])")].concat(o.map((d) => ".".concat(d, ":not([").concat(le, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let f = [];
  try {
    f = ve(e.querySelectorAll(s));
  } catch {
  }
  if (f.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const m = Mt.begin("onTree"), l = f.reduce((d, g) => {
    try {
      const y = ur(g);
      y && d.push(y);
    } catch (y) {
      Un || y.name === "MissingIcon" && console.error(y);
    }
    return d;
  }, []);
  return new Promise((d, g) => {
    Promise.all(l).then((y) => {
      cr(y, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), m(), d();
      });
    }).catch((y) => {
      m(), g(y);
    });
  });
}
function so(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  ur(e).then((n) => {
    n && cr([n], t);
  });
}
function fo(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : gt(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : gt(a || {})), e(r, u(u({}, n), {}, {
      mask: a
    }));
  };
}
const co = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = J,
    symbol: r = !1,
    mask: a = null,
    maskId: o = null,
    title: s = null,
    titleId: f = null,
    classes: m = [],
    attributes: l = {},
    styles: d = {}
  } = t;
  if (!e) return;
  const {
    prefix: g,
    iconName: y,
    icon: P
  } = e;
  return He(u({
    type: "icon"
  }, e), () => (ue("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), x.autoA11y && (s ? l["aria-labelledby"] = "".concat(x.replacementClass, "-title-").concat(f || _e()) : (l["aria-hidden"] = "true", l.focusable = "false")), Ft({
    icons: {
      main: yt(P),
      mask: a ? yt(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: g,
    iconName: y,
    transform: u(u({}, J), n),
    symbol: r,
    title: s,
    maskId: o,
    titleId: f,
    extra: {
      attributes: l,
      styles: d,
      classes: m
    }
  })));
};
var lo = {
  mixout() {
    return {
      icon: fo(co)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = vn, e.nodeCallback = so, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = z,
        callback: r = () => {
        }
      } = t;
      return vn(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: a,
        titleId: o,
        prefix: s,
        transform: f,
        symbol: m,
        mask: l,
        maskId: d,
        extra: g
      } = n;
      return new Promise((y, P) => {
        Promise.all([bt(r, s), l.iconName ? bt(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((M) => {
          let [_, v] = M;
          y([t, Ft({
            icons: {
              main: _,
              mask: v
            },
            prefix: s,
            iconName: r,
            transform: f,
            symbol: m,
            maskId: d,
            title: a,
            titleId: o,
            extra: g,
            watchable: !0
          })]);
        }).catch(P);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        transform: o,
        styles: s
      } = t;
      const f = qe(s);
      f.length > 0 && (r.style = f);
      let m;
      return It(o) && (m = se("generateAbstractTransformGrouping", {
        main: a,
        transform: o,
        containerWidth: a.width,
        iconWidth: a.width
      })), n.push(m || a.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, uo = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return He({
          type: "layer"
        }, () => {
          ue("beforeDOMElementCreation", {
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
}, mo = {
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
        return He({
          type: "counter",
          content: e
        }, () => (ue("beforeDOMElementCreation", {
          content: e,
          params: t
        }), qa({
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
}, po = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = J,
          title: r = null,
          classes: a = [],
          attributes: o = {},
          styles: s = {}
        } = t;
        return He({
          type: "text",
          content: e
        }, () => (ue("beforeDOMElementCreation", {
          content: e,
          params: t
        }), mn({
          content: e,
          transform: u(u({}, J), n),
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
      let s = null, f = null;
      if (Mn) {
        const m = parseInt(getComputedStyle(t).fontSize, 10), l = t.getBoundingClientRect();
        s = l.width / m, f = l.height / m;
      }
      return x.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, mn({
        content: t.innerHTML,
        width: s,
        height: f,
        transform: a,
        title: r,
        extra: o,
        watchable: !0
      })]);
    };
  }
};
const ho = new RegExp('"', "ug"), xn = [1105920, 1112319], En = u(u(u(u({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Lr), ea), Hr), Et = Object.keys(En).reduce((e, t) => (e[t.toLowerCase()] = En[t], e), {}), go = Object.keys(Et).reduce((e, t) => {
  const n = Et[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function yo(e) {
  const t = e.replace(ho, ""), n = Aa(t, 0), r = n >= xn[0] && n <= xn[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: mt(a ? t[0] : t),
    isSecondary: r || a
  };
}
function bo(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (Et[n] || {})[a] || go[n];
}
function An(e, t) {
  const n = "".concat(ta).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const s = ve(e.children).filter((y) => y.getAttribute(ct) === t)[0], f = oe.getComputedStyle(e, t), m = f.getPropertyValue("font-family"), l = m.match(ia), d = f.getPropertyValue("font-weight"), g = f.getPropertyValue("content");
    if (s && !l)
      return e.removeChild(s), r();
    if (l && g !== "none" && g !== "") {
      const y = f.getPropertyValue("content");
      let P = bo(m, d);
      const {
        value: M,
        isSecondary: _
      } = yo(y), v = l[0].startsWith("FontAwesome");
      let C = jt(P, M), F = C;
      if (v) {
        const R = _a(M);
        R.iconName && R.prefix && (C = R.iconName, P = R.prefix);
      }
      if (C && !_ && (!s || s.getAttribute(_t) !== P || s.getAttribute(kt) !== F)) {
        e.setAttribute(n, F), s && e.removeChild(s);
        const R = ao(), {
          extra: j
        } = R;
        j.attributes[ct] = t, bt(C, P).then((p) => {
          const G = Ft(u(u({}, R), {}, {
            icons: {
              main: p,
              mask: or()
            },
            prefix: P,
            iconName: F,
            extra: j,
            watchable: !0
          })), Z = z.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(Z, e.firstChild) : e.appendChild(Z), Z.outerHTML = G.map((ne) => Re(ne)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function vo(e) {
  return Promise.all([An(e, "::before"), An(e, "::after")]);
}
function xo(e) {
  return e.parentNode !== document.head && !~ra.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ct) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function On(e) {
  if (te)
    return new Promise((t, n) => {
      const r = ve(e.querySelectorAll("*")).filter(xo).map(vo), a = Mt.begin("searchPseudoElements");
      lr(), Promise.all(r).then(() => {
        a(), xt(), t();
      }).catch(() => {
        a(), xt(), n();
      });
    });
}
var Eo = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = On, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = z
      } = t;
      x.searchPseudoElements && On(n);
    };
  }
};
let Tn = !1;
var Ao = {
  mixout() {
    return {
      dom: {
        unwatch() {
          lr(), Tn = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        yn(ht("mutationObserverCallbacks", {}));
      },
      noAuto() {
        eo();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Tn ? xt() : yn(ht("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Pn = (e) => {
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
var Oo = {
  mixout() {
    return {
      parse: {
        transform: (e) => Pn(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Pn(n)), e;
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
      }, f = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), m = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), l = "rotate(".concat(r.rotate, " 0 0)"), d = {
        transform: "".concat(f, " ").concat(m, " ").concat(l)
      }, g = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, y = {
        outer: s,
        inner: d,
        path: g
      };
      return {
        tag: "g",
        attributes: u({}, y.outer),
        children: [{
          tag: "g",
          attributes: u({}, y.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: u(u({}, n.icon.attributes), y.path)
          }]
        }]
      };
    };
  }
};
const at = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function wn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function To(e) {
  return e.tag === "g" ? e.children : [e];
}
var Po = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Ve(n.split(" ").map((a) => a.trim())) : or();
        return r.prefix || (r.prefix = ie()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
        transform: f
      } = t;
      const {
        width: m,
        icon: l
      } = a, {
        width: d,
        icon: g
      } = o, y = ga({
        transform: f,
        containerWidth: d,
        iconWidth: m
      }), P = {
        tag: "rect",
        attributes: u(u({}, at), {}, {
          fill: "white"
        })
      }, M = l.children ? {
        children: l.children.map(wn)
      } : {}, _ = {
        tag: "g",
        attributes: u({}, y.inner),
        children: [wn(u({
          tag: l.tag,
          attributes: u(u({}, l.attributes), y.path)
        }, M))]
      }, v = {
        tag: "g",
        attributes: u({}, y.outer),
        children: [_]
      }, C = "mask-".concat(s || _e()), F = "clip-".concat(s || _e()), R = {
        tag: "mask",
        attributes: u(u({}, at), {}, {
          id: C,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [P, v]
      }, j = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: F
          },
          children: To(g)
        }, R]
      };
      return n.push(j, {
        tag: "rect",
        attributes: u({
          fill: "currentColor",
          "clip-path": "url(#".concat(F, ")"),
          mask: "url(#".concat(C, ")")
        }, at)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, wo = {
  provides(e) {
    let t = !1;
    oe.matchMedia && (t = oe.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: u(u({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const o = u(u({}, a), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: u(u({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || s.children.push({
        tag: "animate",
        attributes: u(u({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: u(u({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: u(u({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: u(u({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: u(u({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: u(u({}, o), {}, {
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
}, So = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, _o = [va, lo, uo, mo, po, Eo, Ao, Oo, Po, wo, So];
La(_o, {
  mixoutsTo: q
});
q.noAuto;
q.config;
q.library;
q.dom;
const At = q.parse;
q.findIconDefinition;
q.toHtml;
const ko = q.icon;
q.layer;
q.text;
q.counter;
function Sn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sn(Object(n), !0).forEach(function(r) {
      ge(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function We(e) {
  "@babel/helpers - typeof";
  return We = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, We(e);
}
function ge(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Co(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Ro(e, t) {
  if (e == null) return {};
  var n = Co(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ot(e) {
  return Io(e) || No(e) || jo(e) || Fo();
}
function Io(e) {
  if (Array.isArray(e)) return Tt(e);
}
function No(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function jo(e, t) {
  if (e) {
    if (typeof e == "string") return Tt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tt(e, t);
  }
}
function Tt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Fo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mo(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, o = e.bounce, s = e.shake, f = e.flash, m = e.spin, l = e.spinPulse, d = e.spinReverse, g = e.pulse, y = e.fixedWidth, P = e.inverse, M = e.border, _ = e.listItem, v = e.flip, C = e.size, F = e.rotation, R = e.pull, j = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": o,
    "fa-shake": s,
    "fa-flash": f,
    "fa-spin": m,
    "fa-spin-reverse": d,
    "fa-spin-pulse": l,
    "fa-pulse": g,
    "fa-fw": y,
    "fa-inverse": P,
    "fa-border": M,
    "fa-li": _,
    "fa-flip": v === !0,
    "fa-flip-horizontal": v === "horizontal" || v === "both",
    "fa-flip-vertical": v === "vertical" || v === "both"
  }, ge(t, "fa-".concat(C), typeof C < "u" && C !== null), ge(t, "fa-rotate-".concat(F), typeof F < "u" && F !== null && F !== 0), ge(t, "fa-pull-".concat(R), typeof R < "u" && R !== null), ge(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(j).map(function(p) {
    return j[p] ? p : null;
  }).filter(function(p) {
    return p;
  });
}
function Lo(e) {
  return e = e - 0, e === e;
}
function dr(e) {
  return Lo(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Do = ["style"];
function zo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Yo(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = dr(n.slice(0, r)), o = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[zo(a)] = o : t[a] = o, t;
  }, {});
}
function mr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(m) {
    return mr(e, m);
  }), a = Object.keys(t.attributes || {}).reduce(function(m, l) {
    var d = t.attributes[l];
    switch (l) {
      case "class":
        m.attrs.className = d, delete t.attributes.class;
        break;
      case "style":
        m.attrs.style = Yo(d);
        break;
      default:
        l.indexOf("aria-") === 0 || l.indexOf("data-") === 0 ? m.attrs[l.toLowerCase()] = d : m.attrs[dr(l)] = d;
    }
    return m;
  }, {
    attrs: {}
  }), o = n.style, s = o === void 0 ? {} : o, f = Ro(n, Do);
  return a.attrs.style = B(B({}, a.attrs.style), s), e.apply(void 0, [t.tag, B(B({}, a.attrs), f)].concat(Ot(r)));
}
var pr = !1;
try {
  pr = process.env.NODE_ENV === "production";
} catch {
}
function $o() {
  if (!pr && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function _n(e) {
  if (e && We(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (At.icon)
    return At.icon(e);
  if (e === null)
    return null;
  if (e && We(e) === "object" && e.prefix && e.iconName)
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
function ot(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ge({}, e, t) : {};
}
var kn = {
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
}, Dt = /* @__PURE__ */ Pt.forwardRef(function(e, t) {
  var n = B(B({}, kn), e), r = n.icon, a = n.mask, o = n.symbol, s = n.className, f = n.title, m = n.titleId, l = n.maskId, d = _n(r), g = ot("classes", [].concat(Ot(Mo(n)), Ot((s || "").split(" ")))), y = ot("transform", typeof n.transform == "string" ? At.transform(n.transform) : n.transform), P = ot("mask", _n(a)), M = ko(d, B(B(B(B({}, g), y), P), {}, {
    symbol: o,
    title: f,
    titleId: m,
    maskId: l
  }));
  if (!M)
    return $o("Could not find icon", d), null;
  var _ = M.abstract, v = {
    ref: t
  };
  return Object.keys(n).forEach(function(C) {
    kn.hasOwnProperty(C) || (v[C] = n[C]);
  }), Wo(_[0], v);
});
Dt.displayName = "FontAwesomeIcon";
Dt.propTypes = {
  beat: E.bool,
  border: E.bool,
  beatFade: E.bool,
  bounce: E.bool,
  className: E.string,
  fade: E.bool,
  flash: E.bool,
  mask: E.oneOfType([E.object, E.array, E.string]),
  maskId: E.string,
  fixedWidth: E.bool,
  inverse: E.bool,
  flip: E.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: E.oneOfType([E.object, E.array, E.string]),
  listItem: E.bool,
  pull: E.oneOf(["right", "left"]),
  pulse: E.bool,
  rotation: E.oneOf([0, 90, 180, 270]),
  shake: E.bool,
  size: E.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: E.bool,
  spinPulse: E.bool,
  spinReverse: E.bool,
  symbol: E.oneOfType([E.bool, E.string]),
  title: E.string,
  titleId: E.string,
  transform: E.oneOfType([E.string, E.object]),
  swapOpacity: E.bool
};
var Wo = mr.bind(null, Pt.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Uo = {
  prefix: "fas",
  iconName: "arrow-up-right-from-square",
  icon: [512, 512, ["external-link"], "f08e", "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]
}, Cn = () => /* @__PURE__ */ Y.jsx(
  Dt,
  {
    icon: Uo,
    style: {
      marginLeft: "0.25rem",
      fontSize: "0.75em",
      verticalAlign: "middle"
    },
    "aria-hidden": "true"
  }
), hr = ({
  domain: e,
  agencies: t = [],
  parentAgency: n,
  requiredLinks: r = [],
  usaGovText: a = {},
  taxpayerDisclaimer: o = !1,
  lang: s = "en",
  className: f = ""
}) => {
  const m = [
    "usa-identifier",
    f
  ].filter(Boolean).join(" "), l = (v) => {
    if (!v) return !1;
    if (v.startsWith("http://") || v.startsWith("https://")) {
      if (e)
        try {
          const R = new URL(v).hostname.replace(/^www\./, ""), j = e.replace(/^www\./, "");
          return R !== j;
        } catch {
          return !0;
        }
      return !0;
    }
    return !!v.startsWith("//");
  }, d = [
    { text: s === "es" ? "Acerca de" : "About", href: "#" },
    { text: s === "es" ? "Declaración de accesibilidad" : "Accessibility statement", href: "#" },
    { text: s === "es" ? "Solicitud a través de FOIA" : "FOIA requests", href: "#" },
    { text: s === "es" ? "Datos de la ley No FEAR" : "No FEAR Act data", href: "#" },
    { text: s === "es" ? "Oficina del Inspector General" : "Office of the Inspector General", href: "#" },
    { text: s === "es" ? "Informes de desempeño" : "Performance reports", href: "#" },
    { text: s === "es" ? "Política de privacidad" : "Privacy policy", href: "#" }
  ], g = r.length > 0 ? r : d, P = { ...{
    text: s === "es" ? "¿Necesita información y servicios del Gobierno?" : "Looking for U.S. government information and services?",
    linkText: s === "es" ? "Visite USAGov en Español" : "Visit USA.gov",
    href: s === "es" ? "https://www.usa.gov/es/" : "https://www.usa.gov/"
  }, ...a }, _ = (() => {
    if (!n && t.length === 0) return "";
    if (t.length === 1)
      return t[0].name || n;
    if (t.length === 2) {
      const v = s === "es" ? "y" : "and the";
      return `${t[0].name} ${v} ${t[1].name}`;
    } else if (t.length > 2) {
      const v = t[t.length - 1];
      return `${t.slice(0, -1).map((R) => R.name).join(", ")}${s === "es" ? "y" : ", and the"} ${v.name}`;
    }
    return n;
  })();
  return /* @__PURE__ */ Y.jsxs("div", { className: m, children: [
    /* @__PURE__ */ Y.jsx(
      "section",
      {
        className: "usa-identifier__section usa-identifier__section--masthead",
        "aria-label": s === "es" ? "Identificador de agencia," : "Agency identifier,",
        children: /* @__PURE__ */ Y.jsxs("div", { className: "usa-identifier__container", children: [
          t.length > 0 && /* @__PURE__ */ Y.jsx("div", { className: "usa-identifier__logos", children: t.map((v, C) => /* @__PURE__ */ Y.jsx(
            "a",
            {
              href: v.href || "#",
              className: "usa-identifier__logo",
              children: /* @__PURE__ */ Y.jsx(
                "img",
                {
                  className: "usa-identifier__logo-img",
                  src: v.logoSrc,
                  alt: v.logoAlt || `${v.name} logo`,
                  role: "img"
                }
              )
            },
            C
          )) }),
          /* @__PURE__ */ Y.jsxs(
            "section",
            {
              className: "usa-identifier__identity",
              "aria-label": s === "es" ? "Descripción de agencia," : "Agency description,",
              children: [
                e && /* @__PURE__ */ Y.jsx("p", { className: "usa-identifier__identity-domain", children: e }),
                /* @__PURE__ */ Y.jsxs("p", { className: "usa-identifier__identity-disclaimer", children: [
                  s === "es" ? "" : /* @__PURE__ */ Y.jsx("span", { "aria-hidden": "true", children: "An " }),
                  s === "es" ? "Un sitio web oficial de" : "official website of the",
                  " ",
                  _,
                  o && s === "es" && ". Producido y publicado con dinero de los contribuyentes de impuestos.",
                  o && s !== "es" && ". Produced and published at taxpayer expense."
                ] })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ Y.jsx(
      "nav",
      {
        className: "usa-identifier__section usa-identifier__section--required-links",
        "aria-label": s === "es" ? "Enlaces importantes," : "Important links,",
        children: /* @__PURE__ */ Y.jsx("div", { className: "usa-identifier__container", children: /* @__PURE__ */ Y.jsx("ul", { className: "usa-identifier__required-links-list", children: g.map((v, C) => {
          const F = l(v.href);
          return /* @__PURE__ */ Y.jsx("li", { className: "usa-identifier__required-links-item", children: /* @__PURE__ */ Y.jsxs(
            "a",
            {
              href: v.href,
              className: "usa-identifier__required-link usa-link",
              ...F && { target: "_blank", rel: "noopener noreferrer" },
              children: [
                v.text,
                F && /* @__PURE__ */ Y.jsx(Cn, {})
              ]
            }
          ) }, C);
        }) }) })
      }
    ),
    /* @__PURE__ */ Y.jsx(
      "section",
      {
        className: "usa-identifier__section usa-identifier__section--usagov",
        "aria-label": s === "es" ? "Enlace a USA.gov," : "U.S. government information and services,",
        children: /* @__PURE__ */ Y.jsx("div", { className: "usa-identifier__container", children: /* @__PURE__ */ Y.jsxs("div", { className: "usa-identifier__usagov-description", children: [
          P.text,
          /* @__PURE__ */ Y.jsxs(
            "a",
            {
              href: P.href,
              className: "usa-link",
              ...l(P.href) && { target: "_blank", rel: "noopener noreferrer" },
              children: [
                P.linkText,
                l(P.href) && /* @__PURE__ */ Y.jsx(Cn, {})
              ]
            }
          )
        ] }) })
      }
    )
  ] });
};
hr.propTypes = {
  /** Site domain (e.g., "domain.gov") */
  domain: E.string,
  /** Array of agency objects with name, logoSrc, logoAlt, and optional href */
  agencies: E.arrayOf(E.shape({
    name: E.string.isRequired,
    shortname: E.string,
    logoSrc: E.string,
    logoAlt: E.string,
    href: E.string
  })),
  /** Parent agency name (used when no agencies array provided) */
  parentAgency: E.string,
  /** Array of required policy links */
  requiredLinks: E.arrayOf(E.shape({
    text: E.string.isRequired,
    href: E.string.isRequired
  })),
  /** USA.gov section content */
  usaGovText: E.shape({
    text: E.string,
    linkText: E.string,
    href: E.string
  }),
  /** Whether to show taxpayer disclaimer */
  taxpayerDisclaimer: E.bool,
  /** Language code ('en' or 'es') */
  lang: E.oneOf(["en", "es"]),
  /** Additional CSS class name */
  className: E.string
};
hr.defaultProps = {
  domain: "",
  agencies: [],
  parentAgency: "",
  requiredLinks: [],
  usaGovText: {},
  taxpayerDisclaimer: !1,
  lang: "en",
  className: ""
};
export {
  hr as Identifier
};
//# sourceMappingURL=index.js.map
