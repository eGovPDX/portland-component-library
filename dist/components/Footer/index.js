import Pt from "react";
function gr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ie = { exports: {} }, Te = {};
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
  if (Yt) return Te;
  Yt = 1;
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
  return Te.Fragment = t, Te.jsx = n, Te.jsxs = n, Te;
}
var Oe = {};
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
        case F:
          return "Profiler";
        case w:
          return "StrictMode";
        case h:
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
          case S:
            return (i.displayName || "Context") + ".Provider";
          case z:
            return (i._context.displayName || "Context") + ".Consumer";
          case N:
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
        var v = c.error, E = typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return v.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          E
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
    function l(i, c) {
      function v() {
        me || (me = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(i, "key", {
        get: v,
        configurable: !0
      });
    }
    function m() {
      var i = e(this.type);
      return W[i] || (W[i] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), i = this.props.ref, i !== void 0 ? i : null;
    }
    function f(i, c, v, E, A, k, C, R) {
      return v = k.ref, i = {
        $$typeof: P,
        type: i,
        key: c,
        props: k,
        _owner: A
      }, (v !== void 0 ? v : null) !== null ? Object.defineProperty(i, "ref", {
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
        value: C
      }), Object.defineProperty(i, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    }
    function d(i, c, v, E, A, k, C, R) {
      var T = c.children;
      if (T !== void 0)
        if (E)
          if (Ae(T)) {
            for (E = 0; E < T.length; E++)
              b(T[E]);
            Object.freeze && Object.freeze(T);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(T);
      if (de.call(c, "key")) {
        T = e(i);
        var I = Object.keys(c).filter(function($) {
          return $ !== "key";
        });
        E = 0 < I.length ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}", pe[T + E] || (I = 0 < I.length ? "{" + I.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          E,
          T,
          I,
          T
        ), pe[T + E] = !0);
      }
      if (T = null, v !== void 0 && (n(v), T = "" + v), s(c) && (n(c.key), T = "" + c.key), "key" in c) {
        v = {};
        for (var j in c)
          j !== "key" && (v[j] = c[j]);
      } else v = c;
      return T && l(
        v,
        typeof i == "function" ? i.displayName || i.name || "Unknown" : i
      ), f(
        i,
        T,
        k,
        A,
        a(),
        v,
        C,
        R
      );
    }
    function b(i) {
      typeof i == "object" && i !== null && i.$$typeof === P && i._store && (i._store.validated = 1);
    }
    var g = Pt, P = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), S = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), xe = Symbol.for("react.activity"), Ee = Symbol.for("react.client.reference"), re = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = Object.prototype.hasOwnProperty, Ae = Array.isArray, V = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(i) {
        return i();
      }
    };
    var me, W = {}, H = g["react-stack-bottom-frame"].bind(
      g,
      o
    )(), le = V(r(o)), pe = {};
    Oe.Fragment = _, Oe.jsx = function(i, c, v, E, A) {
      var k = 1e4 > re.recentlyCreatedOwnerStacks++;
      return d(
        i,
        c,
        v,
        !1,
        E,
        A,
        k ? Error("react-stack-top-frame") : H,
        k ? V(r(i)) : le
      );
    }, Oe.jsxs = function(i, c, v, E, A) {
      var k = 1e4 > re.recentlyCreatedOwnerStacks++;
      return d(
        i,
        c,
        v,
        !0,
        E,
        A,
        k ? Error("react-stack-top-frame") : H,
        k ? V(r(i)) : le
      );
    };
  }()), Oe;
}
var Ut;
function vr() {
  return Ut || (Ut = 1, process.env.NODE_ENV === "production" ? Ie.exports = yr() : Ie.exports = br()), Ie.exports;
}
var O = vr(), je = { exports: {} }, Fe = { exports: {} }, D = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wt;
function xr() {
  if (Wt) return D;
  Wt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, b = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, P = e ? Symbol.for("react.memo") : 60115, M = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function S(h) {
    if (typeof h == "object" && h !== null) {
      var G = h.$$typeof;
      switch (G) {
        case t:
          switch (h = h.type, h) {
            case m:
            case f:
            case r:
            case o:
            case a:
            case b:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case l:
                case d:
                case M:
                case P:
                case s:
                  return h;
                default:
                  return G;
              }
          }
        case n:
          return G;
      }
    }
  }
  function N(h) {
    return S(h) === f;
  }
  return D.AsyncMode = m, D.ConcurrentMode = f, D.ContextConsumer = l, D.ContextProvider = s, D.Element = t, D.ForwardRef = d, D.Fragment = r, D.Lazy = M, D.Memo = P, D.Portal = n, D.Profiler = o, D.StrictMode = a, D.Suspense = b, D.isAsyncMode = function(h) {
    return N(h) || S(h) === m;
  }, D.isConcurrentMode = N, D.isContextConsumer = function(h) {
    return S(h) === l;
  }, D.isContextProvider = function(h) {
    return S(h) === s;
  }, D.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, D.isForwardRef = function(h) {
    return S(h) === d;
  }, D.isFragment = function(h) {
    return S(h) === r;
  }, D.isLazy = function(h) {
    return S(h) === M;
  }, D.isMemo = function(h) {
    return S(h) === P;
  }, D.isPortal = function(h) {
    return S(h) === n;
  }, D.isProfiler = function(h) {
    return S(h) === o;
  }, D.isStrictMode = function(h) {
    return S(h) === a;
  }, D.isSuspense = function(h) {
    return S(h) === b;
  }, D.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === f || h === o || h === a || h === b || h === g || typeof h == "object" && h !== null && (h.$$typeof === M || h.$$typeof === P || h.$$typeof === s || h.$$typeof === l || h.$$typeof === d || h.$$typeof === w || h.$$typeof === F || h.$$typeof === z || h.$$typeof === _);
  }, D.typeOf = S, D;
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
var qt;
function Er() {
  return qt || (qt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, b = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, P = e ? Symbol.for("react.memo") : 60115, M = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
    function S(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === r || y === f || y === o || y === a || y === b || y === g || typeof y == "object" && y !== null && (y.$$typeof === M || y.$$typeof === P || y.$$typeof === s || y.$$typeof === l || y.$$typeof === d || y.$$typeof === w || y.$$typeof === F || y.$$typeof === z || y.$$typeof === _);
    }
    function N(y) {
      if (typeof y == "object" && y !== null) {
        var X = y.$$typeof;
        switch (X) {
          case t:
            var Ne = y.type;
            switch (Ne) {
              case m:
              case f:
              case r:
              case o:
              case a:
              case b:
                return Ne;
              default:
                var zt = Ne && Ne.$$typeof;
                switch (zt) {
                  case l:
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
    var h = m, G = f, Z = l, ne = s, xe = t, Ee = d, re = r, de = M, Ae = P, V = n, me = o, W = a, H = b, le = !1;
    function pe(y) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), i(y) || N(y) === m;
    }
    function i(y) {
      return N(y) === f;
    }
    function c(y) {
      return N(y) === l;
    }
    function v(y) {
      return N(y) === s;
    }
    function E(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }
    function A(y) {
      return N(y) === d;
    }
    function k(y) {
      return N(y) === r;
    }
    function C(y) {
      return N(y) === M;
    }
    function R(y) {
      return N(y) === P;
    }
    function T(y) {
      return N(y) === n;
    }
    function I(y) {
      return N(y) === o;
    }
    function j(y) {
      return N(y) === a;
    }
    function $(y) {
      return N(y) === b;
    }
    L.AsyncMode = h, L.ConcurrentMode = G, L.ContextConsumer = Z, L.ContextProvider = ne, L.Element = xe, L.ForwardRef = Ee, L.Fragment = re, L.Lazy = de, L.Memo = Ae, L.Portal = V, L.Profiler = me, L.StrictMode = W, L.Suspense = H, L.isAsyncMode = pe, L.isConcurrentMode = i, L.isContextConsumer = c, L.isContextProvider = v, L.isElement = E, L.isForwardRef = A, L.isFragment = k, L.isLazy = C, L.isMemo = R, L.isPortal = T, L.isProfiler = I, L.isStrictMode = j, L.isSuspense = $, L.isValidElementType = S, L.typeOf = N;
  }()), L;
}
var Gt;
function Cn() {
  return Gt || (Gt = 1, process.env.NODE_ENV === "production" ? Fe.exports = xr() : Fe.exports = Er()), Fe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Be, Vt;
function Ar() {
  if (Vt) return Be;
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
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var m = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        f[d] = d;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Be = a() ? Object.assign : function(o, s) {
    for (var l, m = r(o), f, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var b in l)
        t.call(l, b) && (m[b] = l[b]);
      if (e) {
        f = e(l);
        for (var g = 0; g < f.length; g++)
          n.call(l, f[g]) && (m[f[g]] = l[f[g]]);
      }
    }
    return m;
  }, Be;
}
var Ke, Ht;
function wt() {
  if (Ht) return Ke;
  Ht = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ke = e, Ke;
}
var Je, Xt;
function Rn() {
  return Xt || (Xt = 1, Je = Function.call.bind(Object.prototype.hasOwnProperty)), Je;
}
var Ze, Bt;
function Tr() {
  if (Bt) return Ze;
  Bt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ wt(), n = {}, r = /* @__PURE__ */ Rn();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, l, m, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in o)
        if (r(o, d)) {
          var b;
          try {
            if (typeof o[d] != "function") {
              var g = Error(
                (m || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            b = o[d](s, d, m, l, null, t);
          } catch (M) {
            b = M;
          }
          if (b && !(b instanceof Error) && e(
            (m || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof b + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), b instanceof Error && !(b.message in n)) {
            n[b.message] = !0;
            var P = f ? f() : "";
            e(
              "Failed " + l + " type: " + b.message + (P ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Ze = a, Ze;
}
var Qe, Kt;
function Or() {
  if (Kt) return Qe;
  Kt = 1;
  var e = Cn(), t = Ar(), n = /* @__PURE__ */ wt(), r = /* @__PURE__ */ Rn(), a = /* @__PURE__ */ Tr(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(l) {
    var m = "Warning: " + l;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Qe = function(l, m) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function b(i) {
      var c = i && (f && i[f] || i[d]);
      if (typeof c == "function")
        return c;
    }
    var g = "<<anonymous>>", P = {
      array: F("array"),
      bigint: F("bigint"),
      bool: F("boolean"),
      func: F("function"),
      number: F("number"),
      object: F("object"),
      string: F("string"),
      symbol: F("symbol"),
      any: z(),
      arrayOf: S,
      element: N(),
      elementType: h(),
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
    function w(i) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, v = 0;
      function E(k, C, R, T, I, j, $) {
        if (T = T || g, j = j || R, $ !== n) {
          if (m) {
            var y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw y.name = "Invariant Violation", y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var X = T + ":" + R;
            !c[X] && // Avoid spamming the console because they are often not actionable except for lib authors
            v < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + T + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[X] = !0, v++);
          }
        }
        return C[R] == null ? k ? C[R] === null ? new _("The " + I + " `" + j + "` is marked as required " + ("in `" + T + "`, but its value is `null`.")) : new _("The " + I + " `" + j + "` is marked as required in " + ("`" + T + "`, but its value is `undefined`.")) : null : i(C, R, T, I, j);
      }
      var A = E.bind(null, !1);
      return A.isRequired = E.bind(null, !0), A;
    }
    function F(i) {
      function c(v, E, A, k, C, R) {
        var T = v[E], I = W(T);
        if (I !== i) {
          var j = H(T);
          return new _(
            "Invalid " + k + " `" + C + "` of type " + ("`" + j + "` supplied to `" + A + "`, expected ") + ("`" + i + "`."),
            { expectedType: i }
          );
        }
        return null;
      }
      return w(c);
    }
    function z() {
      return w(s);
    }
    function S(i) {
      function c(v, E, A, k, C) {
        if (typeof i != "function")
          return new _("Property `" + C + "` of component `" + A + "` has invalid PropType notation inside arrayOf.");
        var R = v[E];
        if (!Array.isArray(R)) {
          var T = W(R);
          return new _("Invalid " + k + " `" + C + "` of type " + ("`" + T + "` supplied to `" + A + "`, expected an array."));
        }
        for (var I = 0; I < R.length; I++) {
          var j = i(R, I, A, k, C + "[" + I + "]", n);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return w(c);
    }
    function N() {
      function i(c, v, E, A, k) {
        var C = c[v];
        if (!l(C)) {
          var R = W(C);
          return new _("Invalid " + A + " `" + k + "` of type " + ("`" + R + "` supplied to `" + E + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(i);
    }
    function h() {
      function i(c, v, E, A, k) {
        var C = c[v];
        if (!e.isValidElementType(C)) {
          var R = W(C);
          return new _("Invalid " + A + " `" + k + "` of type " + ("`" + R + "` supplied to `" + E + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(i);
    }
    function G(i) {
      function c(v, E, A, k, C) {
        if (!(v[E] instanceof i)) {
          var R = i.name || g, T = pe(v[E]);
          return new _("Invalid " + k + " `" + C + "` of type " + ("`" + T + "` supplied to `" + A + "`, expected ") + ("instance of `" + R + "`."));
        }
        return null;
      }
      return w(c);
    }
    function Z(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function c(v, E, A, k, C) {
        for (var R = v[E], T = 0; T < i.length; T++)
          if (M(R, i[T]))
            return null;
        var I = JSON.stringify(i, function($, y) {
          var X = H(y);
          return X === "symbol" ? String(y) : y;
        });
        return new _("Invalid " + k + " `" + C + "` of value `" + String(R) + "` " + ("supplied to `" + A + "`, expected one of " + I + "."));
      }
      return w(c);
    }
    function ne(i) {
      function c(v, E, A, k, C) {
        if (typeof i != "function")
          return new _("Property `" + C + "` of component `" + A + "` has invalid PropType notation inside objectOf.");
        var R = v[E], T = W(R);
        if (T !== "object")
          return new _("Invalid " + k + " `" + C + "` of type " + ("`" + T + "` supplied to `" + A + "`, expected an object."));
        for (var I in R)
          if (r(R, I)) {
            var j = i(R, I, A, k, C + "." + I, n);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return w(c);
    }
    function xe(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var c = 0; c < i.length; c++) {
        var v = i[c];
        if (typeof v != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(v) + " at index " + c + "."
          ), s;
      }
      function E(A, k, C, R, T) {
        for (var I = [], j = 0; j < i.length; j++) {
          var $ = i[j], y = $(A, k, C, R, T, n);
          if (y == null)
            return null;
          y.data && r(y.data, "expectedType") && I.push(y.data.expectedType);
        }
        var X = I.length > 0 ? ", expected one of type [" + I.join(", ") + "]" : "";
        return new _("Invalid " + R + " `" + T + "` supplied to " + ("`" + C + "`" + X + "."));
      }
      return w(E);
    }
    function Ee() {
      function i(c, v, E, A, k) {
        return V(c[v]) ? null : new _("Invalid " + A + " `" + k + "` supplied to " + ("`" + E + "`, expected a ReactNode."));
      }
      return w(i);
    }
    function re(i, c, v, E, A) {
      return new _(
        (i || "React class") + ": " + c + " type `" + v + "." + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + A + "`."
      );
    }
    function de(i) {
      function c(v, E, A, k, C) {
        var R = v[E], T = W(R);
        if (T !== "object")
          return new _("Invalid " + k + " `" + C + "` of type `" + T + "` " + ("supplied to `" + A + "`, expected `object`."));
        for (var I in i) {
          var j = i[I];
          if (typeof j != "function")
            return re(A, k, C, I, H(j));
          var $ = j(R, I, A, k, C + "." + I, n);
          if ($)
            return $;
        }
        return null;
      }
      return w(c);
    }
    function Ae(i) {
      function c(v, E, A, k, C) {
        var R = v[E], T = W(R);
        if (T !== "object")
          return new _("Invalid " + k + " `" + C + "` of type `" + T + "` " + ("supplied to `" + A + "`, expected `object`."));
        var I = t({}, v[E], i);
        for (var j in I) {
          var $ = i[j];
          if (r(i, j) && typeof $ != "function")
            return re(A, k, C, j, H($));
          if (!$)
            return new _(
              "Invalid " + k + " `" + C + "` key `" + j + "` supplied to `" + A + "`.\nBad object: " + JSON.stringify(v[E], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(i), null, "  ")
            );
          var y = $(R, j, A, k, C + "." + j, n);
          if (y)
            return y;
        }
        return null;
      }
      return w(c);
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
          if (i === null || l(i))
            return !0;
          var c = b(i);
          if (c) {
            var v = c.call(i), E;
            if (c !== i.entries) {
              for (; !(E = v.next()).done; )
                if (!V(E.value))
                  return !1;
            } else
              for (; !(E = v.next()).done; ) {
                var A = E.value;
                if (A && !V(A[1]))
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
    function W(i) {
      var c = typeof i;
      return Array.isArray(i) ? "array" : i instanceof RegExp ? "object" : me(c, i) ? "symbol" : c;
    }
    function H(i) {
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
    function le(i) {
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
      return !i.constructor || !i.constructor.name ? g : i.constructor.name;
    }
    return P.checkPropTypes = a, P.resetWarningCache = a.resetWarningCache, P.PropTypes = P, P;
  }, Qe;
}
var et, Jt;
function Sr() {
  if (Jt) return et;
  Jt = 1;
  var e = /* @__PURE__ */ wt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, et = function() {
    function r(s, l, m, f, d, b) {
      if (b !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
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
  }, et;
}
var Zt;
function Pr() {
  if (Zt) return je.exports;
  if (Zt = 1, process.env.NODE_ENV !== "production") {
    var e = Cn(), t = !0;
    je.exports = /* @__PURE__ */ Or()(e.isElement, t);
  } else
    je.exports = /* @__PURE__ */ Sr()();
  return je.exports;
}
var wr = /* @__PURE__ */ Pr();
const p = /* @__PURE__ */ gr(wr);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function kr(e, t, n) {
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
      kr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qt(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function _r(e, t) {
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
  var t = _r(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const en = () => {
};
let kt = {}, Nn = {}, In = null, jn = {
  mark: en,
  measure: en
};
try {
  typeof window < "u" && (kt = window), typeof document < "u" && (Nn = document), typeof MutationObserver < "u" && (In = MutationObserver), typeof performance < "u" && (jn = performance);
} catch {
}
const {
  userAgent: tn = ""
} = kt.navigator || {}, oe = kt, Y = Nn, nn = In, Me = jn;
oe.document;
const te = !!Y.documentElement && !!Y.head && typeof Y.addEventListener == "function" && typeof Y.createElement == "function", Fn = ~tn.indexOf("MSIE") || ~tn.indexOf("Trident/");
var Rr = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Nr = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Mn = {
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
}, Ir = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Dn = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], U = "classic", qe = "duotone", jr = "sharp", Fr = "sharp-duotone", Ln = [U, qe, jr, Fr], Mr = {
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
}, Dr = {
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
}, Lr = /* @__PURE__ */ new Map([["classic", {
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
}, $r = ["kit"], Ur = {
  kit: {
    "fa-kit": "fak"
  }
}, Wr = ["fak", "fakd"], qr = {
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
}, De = {
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
}, st = {
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
}, Kr = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], lt = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Gr, ...Kr], Jr = ["solid", "regular", "light", "thin", "duotone", "brands"], zn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Zr = zn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Qr = [...Object.keys(Br), ...Jr, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", De.GROUP, De.SWAP_OPACITY, De.PRIMARY, De.SECONDARY].concat(zn.map((e) => "".concat(e, "x"))).concat(Zr.map((e) => "w-".concat(e))), ea = {
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
const Q = "___FONT_AWESOME___", ct = 16, Yn = "fa", $n = "svg-inline--fa", fe = "data-fa-i2svg", ft = "data-fa-pseudo-element", ta = "data-fa-pseudo-element-pending", _t = "data-prefix", Ct = "data-icon", on = "fontawesome-i2svg", na = "async", ra = ["HTML", "HEAD", "STYLE", "SCRIPT"], Un = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Ce(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[U];
    }
  });
}
const Wn = u({}, Mn);
Wn[U] = u(u(u(u({}, {
  "fa-duotone": "duotone"
}), Mn[U]), rn.kit), rn["kit-duotone"]);
const aa = Ce(Wn), ut = u({}, zr);
ut[U] = u(u(u(u({}, {
  duotone: "fad"
}), ut[U]), an.kit), an["kit-duotone"]);
const sn = Ce(ut), dt = u({}, st);
dt[U] = u(u({}, dt[U]), qr.kit);
const Rt = Ce(dt), mt = u({}, Xr);
mt[U] = u(u({}, mt[U]), Ur.kit);
Ce(mt);
const oa = Rr, qn = "fa-layers-text", ia = Nr, sa = u({}, Mr);
Ce(sa);
const la = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], tt = Ir, ca = [...$r, ...Qr], Pe = oe.FontAwesomeConfig || {};
function fa(e) {
  var t = Y.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function ua(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
Y && typeof Y.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = ua(fa(n));
  a != null && (Pe[r] = a);
});
const Gn = {
  styleDefault: "solid",
  familyDefault: U,
  cssPrefix: Yn,
  replacementClass: $n,
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
Pe.familyPrefix && (Pe.cssPrefix = Pe.familyPrefix);
const be = u(u({}, Gn), Pe);
be.autoReplaceSvg || (be.observeMutations = !1);
const x = {};
Object.keys(Gn).forEach((e) => {
  Object.defineProperty(x, e, {
    enumerable: !0,
    set: function(t) {
      be[e] = t, we.forEach((n) => n(x));
    },
    get: function() {
      return be[e];
    }
  });
});
Object.defineProperty(x, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    be.cssPrefix = e, we.forEach((t) => t(x));
  },
  get: function() {
    return be.cssPrefix;
  }
});
oe.FontAwesomeConfig = x;
const we = [];
function da(e) {
  return we.push(e), () => {
    we.splice(we.indexOf(e), 1);
  };
}
const ae = ct, K = {
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
const pa = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ke() {
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
function Nt(e) {
  return e.classList ? ve(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Vn(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ha(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Vn(e[n]), '" '), "").trim();
}
function Ge(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function It(e) {
  return e.size !== K.size || e.x !== K.x || e.y !== K.y || e.rotate !== K.rotate || e.flipX || e.flipY;
}
function ga(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), l = "rotate(".concat(t.rotate, " 0 0)"), m = {
    transform: "".concat(o, " ").concat(s, " ").concat(l)
  }, f = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: m,
    path: f
  };
}
function ya(e) {
  let {
    transform: t,
    width: n = ct,
    height: r = ct,
    startCentered: a = !1
  } = e, o = "";
  return a && Fn ? o += "translate(".concat(t.x / ae - n / 2, "em, ").concat(t.y / ae - r / 2, "em) ") : a ? o += "translate(calc(-50% + ".concat(t.x / ae, "em), calc(-50% + ").concat(t.y / ae, "em)) ") : o += "translate(".concat(t.x / ae, "em, ").concat(t.y / ae, "em) "), o += "scale(".concat(t.size / ae * (t.flipX ? -1 : 1), ", ").concat(t.size / ae * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
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
function Hn() {
  const e = Yn, t = $n, n = x.cssPrefix, r = x.replacementClass;
  let a = ba;
  if (n !== e || r !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(t), "g");
    a = a.replace(o, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(l, ".".concat(r));
  }
  return a;
}
let ln = !1;
function nt() {
  x.autoAddCss && !ln && (ma(Hn()), ln = !0);
}
var va = {
  mixout() {
    return {
      dom: {
        css: Hn,
        insertCss: nt
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        nt();
      },
      beforeI2svg() {
        nt();
      }
    };
  }
};
const ee = oe || {};
ee[Q] || (ee[Q] = {});
ee[Q].styles || (ee[Q].styles = {});
ee[Q].hooks || (ee[Q].hooks = {});
ee[Q].shims || (ee[Q].shims = []);
var J = ee[Q];
const Xn = [], Bn = function() {
  Y.removeEventListener("DOMContentLoaded", Bn), Ye = 1, Xn.map((e) => e());
};
let Ye = !1;
te && (Ye = (Y.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Y.readyState), Ye || Y.addEventListener("DOMContentLoaded", Bn));
function xa(e) {
  te && (Ye ? setTimeout(e, 0) : Xn.push(e));
}
function Re(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Vn(e) : "<".concat(t, " ").concat(ha(n), ">").concat(r.map(Re).join(""), "</").concat(t, ">");
}
function cn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var rt = function(t, n, r, a) {
  var o = Object.keys(t), s = o.length, l = n, m, f, d;
  for (r === void 0 ? (m = 1, d = t[o[0]]) : (m = 0, d = r); m < s; m++)
    f = o[m], d = l(d, t[f], f, t);
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
function pt(e) {
  const t = Ea(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Aa(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function fn(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function ht(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = fn(t);
  typeof J.hooks.addPack == "function" && !r ? J.hooks.addPack(e, fn(t)) : J.styles[e] = u(u({}, J.styles[e] || {}), a), e === "fas" && ht("fa", t);
}
const {
  styles: _e,
  shims: Ta
} = J, Kn = Object.keys(Rt), Oa = Kn.reduce((e, t) => (e[t] = Object.keys(Rt[t]), e), {});
let jt = null, Jn = {}, Zn = {}, Qn = {}, er = {}, tr = {};
function Sa(e) {
  return ~ca.indexOf(e);
}
function Pa(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Sa(a) ? a : null;
}
const nr = () => {
  const e = (r) => rt(_e, (a, o, s) => (a[s] = rt(o, r, {}), a), {});
  Jn = e((r, a, o) => (a[3] && (r[a[3]] = o), a[2] && a[2].filter((l) => typeof l == "number").forEach((l) => {
    r[l.toString(16)] = o;
  }), r)), Zn = e((r, a, o) => (r[o] = o, a[2] && a[2].filter((l) => typeof l == "string").forEach((l) => {
    r[l] = o;
  }), r)), tr = e((r, a, o) => {
    const s = a[2];
    return r[o] = o, s.forEach((l) => {
      r[l] = o;
    }), r;
  });
  const t = "far" in _e || x.autoFetchSvg, n = rt(Ta, (r, a) => {
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
  Qn = n.names, er = n.unicodes, jt = Ve(x.styleDefault, {
    family: x.familyDefault
  });
};
da((e) => {
  jt = Ve(e.styleDefault, {
    family: x.familyDefault
  });
});
nr();
function Ft(e, t) {
  return (Jn[e] || {})[t];
}
function wa(e, t) {
  return (Zn[e] || {})[t];
}
function ce(e, t) {
  return (tr[e] || {})[t];
}
function rr(e) {
  return Qn[e] || {
    prefix: null,
    iconName: null
  };
}
function ka(e) {
  const t = er[e], n = Ft("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function ie() {
  return jt;
}
const ar = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function _a(e) {
  let t = U;
  const n = Kn.reduce((r, a) => (r[a] = "".concat(x.cssPrefix, "-").concat(a), r), {});
  return Ln.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => Oa[r].includes(a))) && (t = r);
  }), t;
}
function Ve(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = U
  } = t, r = aa[n][e];
  if (n === qe && !e)
    return "fad";
  const a = sn[n][e] || sn[n][r], o = e in J.styles ? e : null;
  return a || o || null;
}
function Ca(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = Pa(x.cssPrefix, r);
    a ? n = a : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function un(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function He(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const a = lt.concat(Vr), o = un(e.filter((b) => a.includes(b))), s = un(e.filter((b) => !lt.includes(b))), l = o.filter((b) => (r = b, !Dn.includes(b))), [m = null] = l, f = _a(o), d = u(u({}, Ca(s)), {}, {
    prefix: Ve(m, {
      family: f
    })
  });
  return u(u(u({}, d), ja({
    values: e,
    family: f,
    styles: _e,
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
  const o = t === "fa" ? rr(a) : {}, s = ce(r, a);
  return a = o.iconName || s || a, r = o.prefix || r, r === "far" && !_e.far && _e.fas && !x.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const Na = Ln.filter((e) => e !== U || e !== qe), Ia = Object.keys(st).filter((e) => e !== U).map((e) => Object.keys(st[e])).flat();
function ja(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: o = {},
    config: s = {}
  } = e, l = n === qe, m = t.includes("fa-duotone") || t.includes("fad"), f = s.familyDefault === "duotone", d = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!l && (m || f || d) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Na.includes(n) && (Object.keys(o).find((g) => Ia.includes(g)) || s.autoFetchSvg)) {
    const g = Lr.get(n).defaultShortPrefixId;
    r.prefix = g, r.iconName = ce(r.prefix, r.iconName) || r.iconName;
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
      this.definitions[o] = u(u({}, this.definitions[o] || {}), a[o]), ht(o, a[o]);
      const s = Rt[U][o];
      s && ht(s, a[o]), nr();
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
      } = r[a], m = l[2];
      t[o] || (t[o] = {}), m.length > 0 && m.forEach((f) => {
        typeof f == "string" && (t[o][f] = l);
      }), t[o][s] = l;
    }), t;
  }
}
let dn = [], he = {};
const ye = {}, Ma = Object.keys(ye);
function Da(e, t) {
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
function gt(e, t) {
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
function yt(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || ie();
  if (t)
    return t = ce(n, t) || t, cn(or.definitions, n, t) || cn(J.styles, n, t);
}
const or = new Fa(), La = () => {
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
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Ve(e[0]);
      return {
        prefix: n,
        iconName: ce(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(x.cssPrefix, "-")) > -1 || e.match(oa))) {
      const t = He(e.split(" "), {
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
  noAuto: La,
  config: x,
  dom: za,
  parse: Ya,
  library: or,
  findIconDefinition: yt,
  toHtml: Re
}, $a = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = Y
  } = e;
  (Object.keys(J.styles).length > 0 || x.autoFetchSvg) && te && x.autoReplaceSvg && q.dom.i2svg({
    node: t
  });
};
function Xe(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Re(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!te) return;
      const n = Y.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Ua(e) {
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
      width: l,
      height: m
    } = n, f = {
      x: l / m / 2,
      y: 0.5
    };
    a.style = Ge(u(u({}, o), {}, {
      "transform-origin": "".concat(f.x + s.x / 16, "em ").concat(f.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Wa(e) {
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
function Mt(e) {
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
    maskId: m,
    titleId: f,
    extra: d,
    watchable: b = !1
  } = e, {
    width: g,
    height: P
  } = n.found ? n : t, M = Wr.includes(r), _ = [x.replacementClass, a ? "".concat(x.cssPrefix, "-").concat(a) : ""].filter((h) => d.classes.indexOf(h) === -1).filter((h) => h !== "" || !!h).concat(d.classes).join(" ");
  let w = {
    children: [],
    attributes: u(u({}, d.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: _,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(g, " ").concat(P)
    })
  };
  const F = M && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(g / P * 16 * 0.0625, "em")
  } : {};
  b && (w.attributes[fe] = ""), l && (w.children.push({
    tag: "title",
    attributes: {
      id: w.attributes["aria-labelledby"] || "title-".concat(f || ke())
    },
    children: [l]
  }), delete w.attributes.title);
  const z = u(u({}, w), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: m,
    transform: o,
    symbol: s,
    styles: u(u({}, F), d.styles)
  }), {
    children: S,
    attributes: N
  } = n.found && t.found ? se("generateAbstractMask", z) || {
    children: [],
    attributes: {}
  } : se("generateAbstractIcon", z) || {
    children: [],
    attributes: {}
  };
  return z.children = S, z.attributes = N, s ? Wa(z) : Ua(z);
}
function mn(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: a,
    title: o,
    extra: s,
    watchable: l = !1
  } = e, m = u(u(u({}, s.attributes), o ? {
    title: o
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  l && (m[fe] = "");
  const f = u({}, s.styles);
  It(a) && (f.transform = ya({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), f["-webkit-transform"] = f.transform);
  const d = Ge(f);
  d.length > 0 && (m.style = d);
  const b = [];
  return b.push({
    tag: "span",
    attributes: m,
    children: [t]
  }), o && b.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), b;
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
  }), o = Ge(r.styles);
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
  styles: at
} = J;
function bt(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(x.cssPrefix, "-").concat(tt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(x.cssPrefix, "-").concat(tt.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(x.cssPrefix, "-").concat(tt.PRIMARY),
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
function vt(e, t) {
  let n = t;
  return t === "fa" && x.styleDefault !== null && (t = ie()), new Promise((r, a) => {
    if (n === "fa") {
      const o = rr(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && at[t] && at[t][e]) {
      const o = at[t][e];
      return r(bt(o));
    }
    Va(e, t), r(u(u({}, Ga), {}, {
      icon: x.showMissingIcons && e ? se("missingIconAbstract") || {} : {}
    }));
  });
}
const pn = () => {
}, xt = x.measurePerformance && Me && Me.mark && Me.measure ? Me : {
  mark: pn,
  measure: pn
}, Se = 'FA "6.7.2"', Ha = (e) => (xt.mark("".concat(Se, " ").concat(e, " begins")), () => ir(e)), ir = (e) => {
  xt.mark("".concat(Se, " ").concat(e, " ends")), xt.measure("".concat(Se, " ").concat(e), "".concat(Se, " ").concat(e, " begins"), "".concat(Se, " ").concat(e, " ends"));
};
var Dt = {
  begin: Ha,
  end: ir
};
const Le = () => {
};
function hn(e) {
  return typeof (e.getAttribute ? e.getAttribute(fe) : null) == "string";
}
function Xa(e) {
  const t = e.getAttribute ? e.getAttribute(_t) : null, n = e.getAttribute ? e.getAttribute(Ct) : null;
  return t && n;
}
function Ba(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(x.replacementClass);
}
function Ka() {
  return x.autoReplaceSvg === !0 ? ze.replace : ze[x.autoReplaceSvg] || ze.replace;
}
function Ja(e) {
  return Y.createElementNS("http://www.w3.org/2000/svg", e);
}
function Za(e) {
  return Y.createElement(e);
}
function sr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Ja : Za
  } = t;
  if (typeof e == "string")
    return Y.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  }), (e.children || []).forEach(function(o) {
    r.appendChild(sr(o, {
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
        t.parentNode.insertBefore(sr(n), t);
      }), t.getAttribute(fe) === null && x.keepOriginalSource) {
        let n = Y.createComment(Qa(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Nt(t).indexOf(x.replacementClass))
      return ze.replace(e);
    const r = new RegExp("".concat(x.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const o = n[0].attributes.class.split(" ").reduce((s, l) => (l === x.replacementClass || l.match(r) ? s.toSvg.push(l) : s.toNode.push(l), s), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    const a = n.map((o) => Re(o)).join(`
`);
    t.setAttribute(fe, ""), t.innerHTML = a;
  }
};
function gn(e) {
  e();
}
function lr(e, t) {
  const n = typeof t == "function" ? t : Le;
  if (e.length === 0)
    n();
  else {
    let r = gn;
    x.mutateApproach === na && (r = oe.requestAnimationFrame || gn), r(() => {
      const a = Ka(), o = Dt.begin("mutate");
      e.map(a), o(), n();
    });
  }
}
let Lt = !1;
function cr() {
  Lt = !0;
}
function Et() {
  Lt = !1;
}
let $e = null;
function yn(e) {
  if (!nn || !x.observeMutations)
    return;
  const {
    treeCallback: t = Le,
    nodeCallback: n = Le,
    pseudoElementsCallback: r = Le,
    observeMutationsRoot: a = Y
  } = e;
  $e = new nn((o) => {
    if (Lt) return;
    const s = ie();
    ve(o).forEach((l) => {
      if (l.type === "childList" && l.addedNodes.length > 0 && !hn(l.addedNodes[0]) && (x.searchPseudoElements && r(l.target), t(l.target)), l.type === "attributes" && l.target.parentNode && x.searchPseudoElements && r(l.target.parentNode), l.type === "attributes" && hn(l.target) && ~la.indexOf(l.attributeName))
        if (l.attributeName === "class" && Xa(l.target)) {
          const {
            prefix: m,
            iconName: f
          } = He(Nt(l.target));
          l.target.setAttribute(_t, m || s), f && l.target.setAttribute(Ct, f);
        } else Ba(l.target) && n(l.target);
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
    const o = a.split(":"), s = o[0], l = o.slice(1);
    return s && l.length > 0 && (r[s] = l.join(":").trim()), r;
  }, {})), n;
}
function no(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = He(Nt(e));
  return a.prefix || (a.prefix = ie()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = wa(a.prefix, e.innerText) || Ft(a.prefix, pt(e.innerText))), !a.iconName && x.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function ro(e) {
  const t = ve(e.attributes).reduce((a, o) => (a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return x.autoA11y && (n ? t["aria-labelledby"] = "".concat(x.replacementClass, "-title-").concat(r || ke()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function ao() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: K,
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
  } = no(e), o = ro(e), s = gt("parseNodeAttributes", {}, e);
  let l = t.styleParser ? to(e) : [];
  return u({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: K,
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
  styles: oo
} = J;
function fr(e) {
  const t = x.autoReplaceSvg === "nest" ? bn(e, {
    styleParser: !1
  }) : bn(e);
  return ~t.extra.classes.indexOf(qn) ? se("generateLayersText", e, t) : se("generateSvgReplacementMutation", e, t);
}
function io() {
  return [...Yr, ...lt];
}
function vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!te) return Promise.resolve();
  const n = Y.documentElement.classList, r = (d) => n.add("".concat(on, "-").concat(d)), a = (d) => n.remove("".concat(on, "-").concat(d)), o = x.autoFetchSvg ? io() : Dn.concat(Object.keys(oo));
  o.includes("fa") || o.push("fa");
  const s = [".".concat(qn, ":not([").concat(fe, "])")].concat(o.map((d) => ".".concat(d, ":not([").concat(fe, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let l = [];
  try {
    l = ve(e.querySelectorAll(s));
  } catch {
  }
  if (l.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const m = Dt.begin("onTree"), f = l.reduce((d, b) => {
    try {
      const g = fr(b);
      g && d.push(g);
    } catch (g) {
      Un || g.name === "MissingIcon" && console.error(g);
    }
    return d;
  }, []);
  return new Promise((d, b) => {
    Promise.all(f).then((g) => {
      lr(g, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), m(), d();
      });
    }).catch((g) => {
      m(), b(g);
    });
  });
}
function so(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  fr(e).then((n) => {
    n && lr([n], t);
  });
}
function lo(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : yt(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : yt(a || {})), e(r, u(u({}, n), {}, {
      mask: a
    }));
  };
}
const co = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = K,
    symbol: r = !1,
    mask: a = null,
    maskId: o = null,
    title: s = null,
    titleId: l = null,
    classes: m = [],
    attributes: f = {},
    styles: d = {}
  } = t;
  if (!e) return;
  const {
    prefix: b,
    iconName: g,
    icon: P
  } = e;
  return Xe(u({
    type: "icon"
  }, e), () => (ue("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), x.autoA11y && (s ? f["aria-labelledby"] = "".concat(x.replacementClass, "-title-").concat(l || ke()) : (f["aria-hidden"] = "true", f.focusable = "false")), Mt({
    icons: {
      main: bt(P),
      mask: a ? bt(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: b,
    iconName: g,
    transform: u(u({}, K), n),
    symbol: r,
    title: s,
    maskId: o,
    titleId: l,
    extra: {
      attributes: f,
      styles: d,
      classes: m
    }
  })));
};
var fo = {
  mixout() {
    return {
      icon: lo(co)
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
        node: n = Y,
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
        transform: l,
        symbol: m,
        mask: f,
        maskId: d,
        extra: b
      } = n;
      return new Promise((g, P) => {
        Promise.all([vt(r, s), f.iconName ? vt(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((M) => {
          let [_, w] = M;
          g([t, Mt({
            icons: {
              main: _,
              mask: w
            },
            prefix: s,
            iconName: r,
            transform: l,
            symbol: m,
            maskId: d,
            title: a,
            titleId: o,
            extra: b,
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
      const l = Ge(s);
      l.length > 0 && (r.style = l);
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
        return Xe({
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
        return Xe({
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
          transform: n = K,
          title: r = null,
          classes: a = [],
          attributes: o = {},
          styles: s = {}
        } = t;
        return Xe({
          type: "text",
          content: e
        }, () => (ue("beforeDOMElementCreation", {
          content: e,
          params: t
        }), mn({
          content: e,
          transform: u(u({}, K), n),
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
      if (Fn) {
        const m = parseInt(getComputedStyle(t).fontSize, 10), f = t.getBoundingClientRect();
        s = f.width / m, l = f.height / m;
      }
      return x.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, mn({
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
const ho = new RegExp('"', "ug"), xn = [1105920, 1112319], En = u(u(u(u({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Dr), ea), Hr), At = Object.keys(En).reduce((e, t) => (e[t.toLowerCase()] = En[t], e), {}), go = Object.keys(At).reduce((e, t) => {
  const n = At[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function yo(e) {
  const t = e.replace(ho, ""), n = Aa(t, 0), r = n >= xn[0] && n <= xn[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: pt(a ? t[0] : t),
    isSecondary: r || a
  };
}
function bo(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (At[n] || {})[a] || go[n];
}
function An(e, t) {
  const n = "".concat(ta).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const s = ve(e.children).filter((g) => g.getAttribute(ft) === t)[0], l = oe.getComputedStyle(e, t), m = l.getPropertyValue("font-family"), f = m.match(ia), d = l.getPropertyValue("font-weight"), b = l.getPropertyValue("content");
    if (s && !f)
      return e.removeChild(s), r();
    if (f && b !== "none" && b !== "") {
      const g = l.getPropertyValue("content");
      let P = bo(m, d);
      const {
        value: M,
        isSecondary: _
      } = yo(g), w = f[0].startsWith("FontAwesome");
      let F = Ft(P, M), z = F;
      if (w) {
        const S = ka(M);
        S.iconName && S.prefix && (F = S.iconName, P = S.prefix);
      }
      if (F && !_ && (!s || s.getAttribute(_t) !== P || s.getAttribute(Ct) !== z)) {
        e.setAttribute(n, z), s && e.removeChild(s);
        const S = ao(), {
          extra: N
        } = S;
        N.attributes[ft] = t, vt(F, P).then((h) => {
          const G = Mt(u(u({}, S), {}, {
            icons: {
              main: h,
              mask: ar()
            },
            prefix: P,
            iconName: z,
            extra: N,
            watchable: !0
          })), Z = Y.createElementNS("http://www.w3.org/2000/svg", "svg");
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
  return e.parentNode !== document.head && !~ra.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ft) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Tn(e) {
  if (te)
    return new Promise((t, n) => {
      const r = ve(e.querySelectorAll("*")).filter(xo).map(vo), a = Dt.begin("searchPseudoElements");
      cr(), Promise.all(r).then(() => {
        a(), Et(), t();
      }).catch(() => {
        a(), Et(), n();
      });
    });
}
var Eo = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Tn, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = Y
      } = t;
      x.searchPseudoElements && Tn(n);
    };
  }
};
let On = !1;
var Ao = {
  mixout() {
    return {
      dom: {
        unwatch() {
          cr(), On = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        yn(gt("mutationObserverCallbacks", {}));
      },
      noAuto() {
        eo();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        On ? Et() : yn(gt("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Sn = (e) => {
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
var To = {
  mixout() {
    return {
      parse: {
        transform: (e) => Sn(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Sn(n)), e;
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
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), m = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), f = "rotate(".concat(r.rotate, " 0 0)"), d = {
        transform: "".concat(l, " ").concat(m, " ").concat(f)
      }, b = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, g = {
        outer: s,
        inner: d,
        path: b
      };
      return {
        tag: "g",
        attributes: u({}, g.outer),
        children: [{
          tag: "g",
          attributes: u({}, g.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: u(u({}, n.icon.attributes), g.path)
          }]
        }]
      };
    };
  }
};
const ot = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Pn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Oo(e) {
  return e.tag === "g" ? e.children : [e];
}
var So = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? He(n.split(" ").map((a) => a.trim())) : ar();
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
        transform: l
      } = t;
      const {
        width: m,
        icon: f
      } = a, {
        width: d,
        icon: b
      } = o, g = ga({
        transform: l,
        containerWidth: d,
        iconWidth: m
      }), P = {
        tag: "rect",
        attributes: u(u({}, ot), {}, {
          fill: "white"
        })
      }, M = f.children ? {
        children: f.children.map(Pn)
      } : {}, _ = {
        tag: "g",
        attributes: u({}, g.inner),
        children: [Pn(u({
          tag: f.tag,
          attributes: u(u({}, f.attributes), g.path)
        }, M))]
      }, w = {
        tag: "g",
        attributes: u({}, g.outer),
        children: [_]
      }, F = "mask-".concat(s || ke()), z = "clip-".concat(s || ke()), S = {
        tag: "mask",
        attributes: u(u({}, ot), {}, {
          id: F,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [P, w]
      }, N = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: z
          },
          children: Oo(b)
        }, S]
      };
      return n.push(N, {
        tag: "rect",
        attributes: u({
          fill: "currentColor",
          "clip-path": "url(#".concat(z, ")"),
          mask: "url(#".concat(F, ")")
        }, ot)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Po = {
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
}, wo = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, ko = [va, fo, uo, mo, po, Eo, Ao, To, So, Po, wo];
Da(ko, {
  mixoutsTo: q
});
q.noAuto;
q.config;
q.library;
q.dom;
const Tt = q.parse;
q.findIconDefinition;
q.toHtml;
const _o = q.icon;
q.layer;
q.text;
q.counter;
function wn(e, t) {
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
    t % 2 ? wn(Object(n), !0).forEach(function(r) {
      ge(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ue(e) {
  "@babel/helpers - typeof";
  return Ue = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ue(e);
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
  return No(e) || Io(e) || jo(e) || Fo();
}
function No(e) {
  if (Array.isArray(e)) return St(e);
}
function Io(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function jo(e, t) {
  if (e) {
    if (typeof e == "string") return St(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return St(e, t);
  }
}
function St(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Fo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mo(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, o = e.bounce, s = e.shake, l = e.flash, m = e.spin, f = e.spinPulse, d = e.spinReverse, b = e.pulse, g = e.fixedWidth, P = e.inverse, M = e.border, _ = e.listItem, w = e.flip, F = e.size, z = e.rotation, S = e.pull, N = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": o,
    "fa-shake": s,
    "fa-flash": l,
    "fa-spin": m,
    "fa-spin-reverse": d,
    "fa-spin-pulse": f,
    "fa-pulse": b,
    "fa-fw": g,
    "fa-inverse": P,
    "fa-border": M,
    "fa-li": _,
    "fa-flip": w === !0,
    "fa-flip-horizontal": w === "horizontal" || w === "both",
    "fa-flip-vertical": w === "vertical" || w === "both"
  }, ge(t, "fa-".concat(F), typeof F < "u" && F !== null), ge(t, "fa-rotate-".concat(z), typeof z < "u" && z !== null && z !== 0), ge(t, "fa-pull-".concat(S), typeof S < "u" && S !== null), ge(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(N).map(function(h) {
    return N[h] ? h : null;
  }).filter(function(h) {
    return h;
  });
}
function Do(e) {
  return e = e - 0, e === e;
}
function ur(e) {
  return Do(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Lo = ["style"];
function zo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Yo(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = ur(n.slice(0, r)), o = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[zo(a)] = o : t[a] = o, t;
  }, {});
}
function dr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(m) {
    return dr(e, m);
  }), a = Object.keys(t.attributes || {}).reduce(function(m, f) {
    var d = t.attributes[f];
    switch (f) {
      case "class":
        m.attrs.className = d, delete t.attributes.class;
        break;
      case "style":
        m.attrs.style = Yo(d);
        break;
      default:
        f.indexOf("aria-") === 0 || f.indexOf("data-") === 0 ? m.attrs[f.toLowerCase()] = d : m.attrs[ur(f)] = d;
    }
    return m;
  }, {
    attrs: {}
  }), o = n.style, s = o === void 0 ? {} : o, l = Ro(n, Lo);
  return a.attrs.style = B(B({}, a.attrs.style), s), e.apply(void 0, [t.tag, B(B({}, a.attrs), l)].concat(Ot(r)));
}
var mr = !1;
try {
  mr = process.env.NODE_ENV === "production";
} catch {
}
function $o() {
  if (!mr && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function kn(e) {
  if (e && Ue(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Tt.icon)
    return Tt.icon(e);
  if (e === null)
    return null;
  if (e && Ue(e) === "object" && e.prefix && e.iconName)
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
function it(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ge({}, e, t) : {};
}
var _n = {
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
}, We = /* @__PURE__ */ Pt.forwardRef(function(e, t) {
  var n = B(B({}, _n), e), r = n.icon, a = n.mask, o = n.symbol, s = n.className, l = n.title, m = n.titleId, f = n.maskId, d = kn(r), b = it("classes", [].concat(Ot(Mo(n)), Ot((s || "").split(" ")))), g = it("transform", typeof n.transform == "string" ? Tt.transform(n.transform) : n.transform), P = it("mask", kn(a)), M = _o(d, B(B(B(B({}, b), g), P), {}, {
    symbol: o,
    title: l,
    titleId: m,
    maskId: f
  }));
  if (!M)
    return $o("Could not find icon", d), null;
  var _ = M.abstract, w = {
    ref: t
  };
  return Object.keys(n).forEach(function(F) {
    _n.hasOwnProperty(F) || (w[F] = n[F]);
  }), Uo(_[0], w);
});
We.displayName = "FontAwesomeIcon";
We.propTypes = {
  beat: p.bool,
  border: p.bool,
  beatFade: p.bool,
  bounce: p.bool,
  className: p.string,
  fade: p.bool,
  flash: p.bool,
  mask: p.oneOfType([p.object, p.array, p.string]),
  maskId: p.string,
  fixedWidth: p.bool,
  inverse: p.bool,
  flip: p.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: p.oneOfType([p.object, p.array, p.string]),
  listItem: p.bool,
  pull: p.oneOf(["right", "left"]),
  pulse: p.bool,
  rotation: p.oneOf([0, 90, 180, 270]),
  shake: p.bool,
  size: p.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: p.bool,
  spinPulse: p.bool,
  spinReverse: p.bool,
  symbol: p.oneOfType([p.bool, p.string]),
  title: p.string,
  titleId: p.string,
  transform: p.oneOfType([p.string, p.object]),
  swapOpacity: p.bool
};
var Uo = dr.bind(null, Pt.createElement);
const pr = ({
  children: e,
  variant: t = "default",
  size: n = "default",
  disabled: r = !1,
  ariaDisabled: a = !1,
  unstyled: o = !1,
  onClick: s,
  type: l = "button",
  startIcon: m,
  endIcon: f,
  className: d,
  ...b
}) => {
  const g = "usa-button", P = t !== "default" ? `${g}--${t}` : "", M = n === "big" ? `${g}--big` : "", _ = o ? `${g}--unstyled` : "", w = [
    g,
    P,
    M,
    _,
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ O.jsxs(
    "button",
    {
      type: l,
      className: w,
      onClick: s,
      disabled: r,
      "aria-disabled": a || r,
      ...b,
      children: [
        m && /* @__PURE__ */ O.jsx("span", { className: "usa-button__icon usa-button__icon--left", children: /* @__PURE__ */ O.jsx(We, { icon: m }) }),
        e,
        f && /* @__PURE__ */ O.jsx("span", { className: "usa-button__icon usa-button__icon--right", children: /* @__PURE__ */ O.jsx(We, { icon: f }) })
      ]
    }
  );
};
pr.propTypes = {
  children: p.node.isRequired,
  variant: p.oneOf([
    "default",
    "secondary",
    "accent-cool",
    "accent-warm",
    "base",
    "outline",
    "outline-inverse"
  ]),
  size: p.oneOf(["default", "big"]),
  disabled: p.bool,
  ariaDisabled: p.bool,
  unstyled: p.bool,
  onClick: p.func,
  type: p.oneOf(["button", "submit", "reset"]),
  startIcon: p.oneOfType([p.object, p.array, p.string]),
  endIcon: p.oneOfType([p.object, p.array, p.string]),
  className: p.string
};
const hr = ({
  feedbackUrl: e,
  accessibilityText: t,
  serviceRequestText: n,
  onlineServiceUrl: r,
  phoneNumber: a,
  relayServiceText: o,
  relayServiceNumber: s,
  translationText: l,
  generalInfoLinks: m,
  termsLinks: f,
  portlandGovLinks: d,
  socialMediaLinks: b,
  cityName: g,
  cityLogoUrl: P,
  cityLogoAlt: M,
  copyrightText: _,
  exploreServicesText: w,
  exploreServicesUrl: F,
  className: z
}) => /* @__PURE__ */ O.jsxs("footer", { className: `footer ${z}`, role: "contentinfo", children: [
  /* @__PURE__ */ O.jsx("div", { className: "footer-feedback-section", children: /* @__PURE__ */ O.jsxs("p", { className: "footer-feedback-text", children: [
    "See something we could improve on this page? ",
    /* @__PURE__ */ O.jsx("a", { href: e, className: "footer-feedback-link", children: "Give website feedback" }),
    "."
  ] }) }),
  /* @__PURE__ */ O.jsx("div", { className: "footer-accessibility-section", children: /* @__PURE__ */ O.jsxs("div", { className: "footer-accessibility-container", children: [
    /* @__PURE__ */ O.jsxs("div", { className: "footer-text-container", children: [
      /* @__PURE__ */ O.jsxs("p", { className: "footer-accessibility-text", children: [
        t,
        " ",
        /* @__PURE__ */ O.jsxs("span", { className: "footer-request-services", children: [
          "Request these services ",
          /* @__PURE__ */ O.jsx("a", { href: r, className: "footer-online-link", children: "online" }),
          " or ",
          /* @__PURE__ */ O.jsx("a", { href: `tel:${a.replace(/\D/g, "")}`, className: "footer-phone-link", children: a }),
          ". Relay Service: ",
          /* @__PURE__ */ O.jsx("a", { href: `tel:${s.replace(/\D/g, "")}`, className: "footer-relay-link", children: s }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ O.jsxs("p", { className: "footer-translation-text", children: [
        /* @__PURE__ */ O.jsx("a", { href: `tel:${a.replace(/\D/g, "")}`, className: "footer-translation-phone-link", children: a }),
        " ",
        l
      ] })
    ] }),
    /* @__PURE__ */ O.jsx("div", { className: "footer-explore-services", children: /* @__PURE__ */ O.jsxs(pr, { href: F, className: "footer-explore-button", children: [
      w,
      " ",
      /* @__PURE__ */ O.jsx("span", { className: "footer-explore-arrow", children: "→" })
    ] }) })
  ] }) }),
  /* @__PURE__ */ O.jsx("div", { className: "footer-main", children: /* @__PURE__ */ O.jsxs("div", { className: "footer-nav", children: [
    /* @__PURE__ */ O.jsxs("div", { className: "footer-city-info", children: [
      /* @__PURE__ */ O.jsx("p", { className: "footer-city-name", children: g }),
      /* @__PURE__ */ O.jsx("img", { src: P, alt: M, className: "footer-city-logo" }),
      /* @__PURE__ */ O.jsx("p", { className: "footer-copyright", children: _ })
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ O.jsx("h4", { className: "footer-heading", children: "General Information" }),
      /* @__PURE__ */ O.jsx("ul", { className: "footer-links", children: m.map((S, N) => /* @__PURE__ */ O.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ O.jsx("a", { href: S.href, className: "footer-link", children: S.label }) }, `general-link-${N}`)) })
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ O.jsx("h4", { className: "footer-heading", children: "Terms And Policies" }),
      /* @__PURE__ */ O.jsx("ul", { className: "footer-links", children: f.map((S, N) => /* @__PURE__ */ O.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ O.jsx("a", { href: S.href, className: "footer-link", children: S.label }) }, `terms-link-${N}`)) })
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ O.jsx("h4", { className: "footer-heading", children: "Portland.Gov" }),
      /* @__PURE__ */ O.jsx("ul", { className: "footer-links", children: d.map((S, N) => /* @__PURE__ */ O.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ O.jsx("a", { href: S.href, className: "footer-link", children: S.label }) }, `pgov-link-${N}`)) })
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ O.jsx("h4", { className: "footer-heading", children: "Social Media" }),
      /* @__PURE__ */ O.jsx("ul", { className: "footer-links", children: b.map((S, N) => /* @__PURE__ */ O.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ O.jsx("a", { href: S.href, className: "footer-link", children: S.label }) }, `social-link-${N}`)) })
    ] })
  ] }) })
] });
hr.propTypes = {
  /** URL for the feedback link */
  feedbackUrl: p.string,
  /** Text for the accessibility section */
  accessibilityText: p.string,
  /** Text for service request */
  serviceRequestText: p.string,
  /** URL for online service */
  onlineServiceUrl: p.string,
  /** Phone number for services */
  phoneNumber: p.string,
  /** Text for relay service */
  relayServiceText: p.string,
  /** Relay service number */
  relayServiceNumber: p.string,
  /** Text for translation section */
  translationText: p.string,
  /** Links for general information section */
  generalInfoLinks: p.arrayOf(
    p.shape({
      label: p.string.isRequired,
      href: p.string.isRequired
    })
  ),
  /** Links for terms and policies section */
  termsLinks: p.arrayOf(
    p.shape({
      label: p.string.isRequired,
      href: p.string.isRequired
    })
  ),
  /** Links for Portland.gov section */
  portlandGovLinks: p.arrayOf(
    p.shape({
      label: p.string.isRequired,
      href: p.string.isRequired
    })
  ),
  /** Social media links */
  socialMediaLinks: p.arrayOf(
    p.shape({
      label: p.string.isRequired,
      href: p.string.isRequired
    })
  ),
  /** City name */
  cityName: p.string,
  /** URL for the city logo */
  cityLogoUrl: p.string,
  /** Alt text for the city logo */
  cityLogoAlt: p.string,
  /** Copyright text */
  copyrightText: p.string,
  /** Text for explore services button */
  exploreServicesText: p.string,
  /** URL for explore services button */
  exploreServicesUrl: p.string,
  /** Additional CSS class for the footer */
  className: p.string
};
hr.defaultProps = {
  feedbackUrl: "/contact",
  accessibilityText: "The City of Portland ensures meaningful access to City programs, services, and activities to comply with Civil Rights Title VI and ADA Title II laws and reasonably provides: translation, interpretation, modifications, accommodations, alternative formats, auxiliary aids and services.",
  serviceRequestText: "Request these services",
  onlineServiceUrl: "/contact",
  phoneNumber: "503-823-4000",
  relayServiceText: "Relay Service",
  relayServiceNumber: "711",
  translationText: "Traducción e Interpretación | Biên Dịch và Thông Dịch | 口笔译服务 | Устный и письменный перевод | Turjumaad iyo Fasiraad | Письмовий і усний переклад | Traducere și interpretariat | Chiaku me Awewen Kapas | अनुवादन तथा व्याख्या",
  generalInfoLinks: [
    { label: "311@portlandoregon.gov", href: "mailto:311@portlandoregon.gov" },
    { label: "311 information an customer service", href: "/customer-service" },
    { label: "503-823-4000", href: "tel:5038234000" },
    { label: "711 Oregon Relay Service", href: "tel:711" }
  ],
  termsLinks: [
    { label: "ADA accommodation", href: "/ada-accommodation" },
    { label: "Captioning and transcription", href: "/captioning" },
    { label: "Privacy Policy", href: "/privacy" }
  ],
  portlandGovLinks: [
    { label: "About this website", href: "/about" },
    { label: "Employee portal", href: "/employees" },
    { label: "Editor log in", href: "/login" }
  ],
  socialMediaLinks: [
    { label: "Bluesky", href: "https://bsky.app" },
    { label: "Facebook", href: "https://facebook.com/CityofPortland" },
    { label: "Instagram", href: "https://instagram.com/portlandoregon" },
    { label: "X (Twitter)", href: "https://twitter.com/portlandgov" }
  ],
  cityName: "City of Portland, Oregon",
  cityLogoUrl: "/city-seal.png",
  cityLogoAlt: "City of Portland Seal",
  copyrightText: "© Copyright 2018-2023",
  exploreServicesText: "Explore all services",
  exploreServicesUrl: "/services",
  className: ""
};
export {
  hr as Footer
};
//# sourceMappingURL=index.js.map
