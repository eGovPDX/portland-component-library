import qe, { useState as hr } from "react";
function gr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ie = { exports: {} }, Ae = {};
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
  if (Yt) return Ae;
  Yt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), a.key !== void 0 && (s = "" + a.key), "key" in a) {
      i = {};
      for (var c in a)
        c !== "key" && (i[c] = a[c]);
    } else i = a;
    return a = i.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: a !== void 0 ? a : null,
      props: i
    };
  }
  return Ae.Fragment = t, Ae.jsx = n, Ae.jsxs = n, Ae;
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
    function e(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === we ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case C:
          return "Fragment";
        case N:
          return "Profiler";
        case _:
          return "StrictMode";
        case h:
          return "Suspense";
        case H:
          return "SuspenseList";
        case xe:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case D:
            return "Portal";
          case I:
            return (o.displayName || "Context") + ".Provider";
          case z:
            return (o._context.displayName || "Context") + ".Consumer";
          case M:
            var l = o.render;
            return o = o.displayName, o || (o = l.displayName || l.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case Z:
            return l = o.displayName || null, l !== null ? l : e(o.type) || "Memo";
          case ne:
            l = o._payload, o = o._init;
            try {
              return e(o(l));
            } catch {
            }
        }
      return null;
    }
    function t(o) {
      return "" + o;
    }
    function n(o) {
      try {
        t(o);
        var l = !1;
      } catch {
        l = !0;
      }
      if (l) {
        l = console;
        var v = l.error, w = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return v.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          w
        ), t(o);
      }
    }
    function r(o) {
      if (o === C) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === ne)
        return "<...>";
      try {
        var l = e(o);
        return l ? "<" + l + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var o = re.A;
      return o === null ? null : o.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(o) {
      if (de.call(o, "key")) {
        var l = Object.getOwnPropertyDescriptor(o, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function c(o, l) {
      function v() {
        me || (me = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          l
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: v,
        configurable: !0
      });
    }
    function m() {
      var o = e(this.type);
      return U[o] || (U[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function f(o, l, v, w, E, P, S, k) {
      return v = P.ref, o = {
        $$typeof: T,
        type: o,
        key: l,
        props: P,
        _owner: E
      }, (v !== void 0 ? v : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(o, "ref", { enumerable: !1, value: null }), o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(o, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(o, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function d(o, l, v, w, E, P, S, k) {
      var A = l.children;
      if (A !== void 0)
        if (w)
          if (Ee(A)) {
            for (w = 0; w < A.length; w++)
              y(A[w]);
            Object.freeze && Object.freeze(A);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(A);
      if (de.call(l, "key")) {
        A = e(o);
        var j = Object.keys(l).filter(function($) {
          return $ !== "key";
        });
        w = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", pe[A + w] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          w,
          A,
          j,
          A
        ), pe[A + w] = !0);
      }
      if (A = null, v !== void 0 && (n(v), A = "" + v), s(l) && (n(l.key), A = "" + l.key), "key" in l) {
        v = {};
        for (var R in l)
          R !== "key" && (v[R] = l[R]);
      } else v = l;
      return A && c(
        v,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), f(
        o,
        A,
        P,
        E,
        a(),
        v,
        S,
        k
      );
    }
    function y(o) {
      typeof o == "object" && o !== null && o.$$typeof === T && o._store && (o._store.validated = 1);
    }
    var b = qe, T = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), I = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), xe = Symbol.for("react.activity"), we = Symbol.for("react.client.reference"), re = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = Object.prototype.hasOwnProperty, Ee = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      "react-stack-bottom-frame": function(o) {
        return o();
      }
    };
    var me, U = {}, B = b["react-stack-bottom-frame"].bind(
      b,
      i
    )(), ce = G(r(i)), pe = {};
    Oe.Fragment = C, Oe.jsx = function(o, l, v, w, E) {
      var P = 1e4 > re.recentlyCreatedOwnerStacks++;
      return d(
        o,
        l,
        v,
        !1,
        w,
        E,
        P ? Error("react-stack-top-frame") : B,
        P ? G(r(o)) : ce
      );
    }, Oe.jsxs = function(o, l, v, w, E) {
      var P = 1e4 > re.recentlyCreatedOwnerStacks++;
      return d(
        o,
        l,
        v,
        !0,
        w,
        E,
        P ? Error("react-stack-top-frame") : B,
        P ? G(r(o)) : ce
      );
    };
  }()), Oe;
}
var Wt;
function vr() {
  return Wt || (Wt = 1, process.env.NODE_ENV === "production" ? Ie.exports = yr() : Ie.exports = br()), Ie.exports;
}
var p = vr(), Ne = { exports: {} }, Me = { exports: {} }, F = {};
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
  if (Ut) return F;
  Ut = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, D = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function I(h) {
    if (typeof h == "object" && h !== null) {
      var H = h.$$typeof;
      switch (H) {
        case t:
          switch (h = h.type, h) {
            case m:
            case f:
            case r:
            case i:
            case a:
            case y:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case d:
                case D:
                case T:
                case s:
                  return h;
                default:
                  return H;
              }
          }
        case n:
          return H;
      }
    }
  }
  function M(h) {
    return I(h) === f;
  }
  return F.AsyncMode = m, F.ConcurrentMode = f, F.ContextConsumer = c, F.ContextProvider = s, F.Element = t, F.ForwardRef = d, F.Fragment = r, F.Lazy = D, F.Memo = T, F.Portal = n, F.Profiler = i, F.StrictMode = a, F.Suspense = y, F.isAsyncMode = function(h) {
    return M(h) || I(h) === m;
  }, F.isConcurrentMode = M, F.isContextConsumer = function(h) {
    return I(h) === c;
  }, F.isContextProvider = function(h) {
    return I(h) === s;
  }, F.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, F.isForwardRef = function(h) {
    return I(h) === d;
  }, F.isFragment = function(h) {
    return I(h) === r;
  }, F.isLazy = function(h) {
    return I(h) === D;
  }, F.isMemo = function(h) {
    return I(h) === T;
  }, F.isPortal = function(h) {
    return I(h) === n;
  }, F.isProfiler = function(h) {
    return I(h) === i;
  }, F.isStrictMode = function(h) {
    return I(h) === a;
  }, F.isSuspense = function(h) {
    return I(h) === y;
  }, F.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === f || h === i || h === a || h === y || h === b || typeof h == "object" && h !== null && (h.$$typeof === D || h.$$typeof === T || h.$$typeof === s || h.$$typeof === c || h.$$typeof === d || h.$$typeof === _ || h.$$typeof === N || h.$$typeof === z || h.$$typeof === C);
  }, F.typeOf = I, F;
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
function wr() {
  return qt || (qt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, D = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
    function I(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === r || g === f || g === i || g === a || g === y || g === b || typeof g == "object" && g !== null && (g.$$typeof === D || g.$$typeof === T || g.$$typeof === s || g.$$typeof === c || g.$$typeof === d || g.$$typeof === _ || g.$$typeof === N || g.$$typeof === z || g.$$typeof === C);
    }
    function M(g) {
      if (typeof g == "object" && g !== null) {
        var V = g.$$typeof;
        switch (V) {
          case t:
            var Re = g.type;
            switch (Re) {
              case m:
              case f:
              case r:
              case i:
              case a:
              case y:
                return Re;
              default:
                var zt = Re && Re.$$typeof;
                switch (zt) {
                  case c:
                  case d:
                  case D:
                  case T:
                  case s:
                    return zt;
                  default:
                    return V;
                }
            }
          case n:
            return V;
        }
      }
    }
    var h = m, H = f, Z = c, ne = s, xe = t, we = d, re = r, de = D, Ee = T, G = n, me = i, U = a, B = y, ce = !1;
    function pe(g) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), o(g) || M(g) === m;
    }
    function o(g) {
      return M(g) === f;
    }
    function l(g) {
      return M(g) === c;
    }
    function v(g) {
      return M(g) === s;
    }
    function w(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function E(g) {
      return M(g) === d;
    }
    function P(g) {
      return M(g) === r;
    }
    function S(g) {
      return M(g) === D;
    }
    function k(g) {
      return M(g) === T;
    }
    function A(g) {
      return M(g) === n;
    }
    function j(g) {
      return M(g) === i;
    }
    function R(g) {
      return M(g) === a;
    }
    function $(g) {
      return M(g) === y;
    }
    L.AsyncMode = h, L.ConcurrentMode = H, L.ContextConsumer = Z, L.ContextProvider = ne, L.Element = xe, L.ForwardRef = we, L.Fragment = re, L.Lazy = de, L.Memo = Ee, L.Portal = G, L.Profiler = me, L.StrictMode = U, L.Suspense = B, L.isAsyncMode = pe, L.isConcurrentMode = o, L.isContextConsumer = l, L.isContextProvider = v, L.isElement = w, L.isForwardRef = E, L.isFragment = P, L.isLazy = S, L.isMemo = k, L.isPortal = A, L.isProfiler = j, L.isStrictMode = R, L.isSuspense = $, L.isValidElementType = I, L.typeOf = M;
  }()), L;
}
var Ht;
function Cn() {
  return Ht || (Ht = 1, process.env.NODE_ENV === "production" ? Me.exports = xr() : Me.exports = wr()), Me.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Je, Gt;
function Er() {
  if (Gt) return Je;
  Gt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
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
  return Je = a() ? Object.assign : function(i, s) {
    for (var c, m = r(i), f, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var y in c)
        t.call(c, y) && (m[y] = c[y]);
      if (e) {
        f = e(c);
        for (var b = 0; b < f.length; b++)
          n.call(c, f[b]) && (m[f[b]] = c[f[b]]);
      }
    }
    return m;
  }, Je;
}
var Ke, Bt;
function Tt() {
  if (Bt) return Ke;
  Bt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ke = e, Ke;
}
var Ze, Vt;
function jn() {
  return Vt || (Vt = 1, Ze = Function.call.bind(Object.prototype.hasOwnProperty)), Ze;
}
var Qe, Xt;
function Ar() {
  if (Xt) return Qe;
  Xt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Tt(), n = {}, r = /* @__PURE__ */ jn();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(i, s, c, m, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (r(i, d)) {
          var y;
          try {
            if (typeof i[d] != "function") {
              var b = Error(
                (m || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            y = i[d](s, d, m, c, null, t);
          } catch (D) {
            y = D;
          }
          if (y && !(y instanceof Error) && e(
            (m || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in n)) {
            n[y.message] = !0;
            var T = f ? f() : "";
            e(
              "Failed " + c + " type: " + y.message + (T ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Qe = a, Qe;
}
var et, Jt;
function Or() {
  if (Jt) return et;
  Jt = 1;
  var e = Cn(), t = Er(), n = /* @__PURE__ */ Tt(), r = /* @__PURE__ */ jn(), a = /* @__PURE__ */ Ar(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var m = "Warning: " + c;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return et = function(c, m) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function y(o) {
      var l = o && (f && o[f] || o[d]);
      if (typeof l == "function")
        return l;
    }
    var b = "<<anonymous>>", T = {
      array: N("array"),
      bigint: N("bigint"),
      bool: N("boolean"),
      func: N("function"),
      number: N("number"),
      object: N("object"),
      string: N("string"),
      symbol: N("symbol"),
      any: z(),
      arrayOf: I,
      element: M(),
      elementType: h(),
      instanceOf: H,
      node: we(),
      objectOf: ne,
      oneOf: Z,
      oneOfType: xe,
      shape: de,
      exact: Ee
    };
    function D(o, l) {
      return o === l ? o !== 0 || 1 / o === 1 / l : o !== o && l !== l;
    }
    function C(o, l) {
      this.message = o, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
    }
    C.prototype = Error.prototype;
    function _(o) {
      if (process.env.NODE_ENV !== "production")
        var l = {}, v = 0;
      function w(P, S, k, A, j, R, $) {
        if (A = A || b, R = R || k, $ !== n) {
          if (m) {
            var g = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw g.name = "Invariant Violation", g;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var V = A + ":" + k;
            !l[V] && // Avoid spamming the console because they are often not actionable except for lib authors
            v < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + R + "` prop on `" + A + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[V] = !0, v++);
          }
        }
        return S[k] == null ? P ? S[k] === null ? new C("The " + j + " `" + R + "` is marked as required " + ("in `" + A + "`, but its value is `null`.")) : new C("The " + j + " `" + R + "` is marked as required in " + ("`" + A + "`, but its value is `undefined`.")) : null : o(S, k, A, j, R);
      }
      var E = w.bind(null, !1);
      return E.isRequired = w.bind(null, !0), E;
    }
    function N(o) {
      function l(v, w, E, P, S, k) {
        var A = v[w], j = U(A);
        if (j !== o) {
          var R = B(A);
          return new C(
            "Invalid " + P + " `" + S + "` of type " + ("`" + R + "` supplied to `" + E + "`, expected ") + ("`" + o + "`."),
            { expectedType: o }
          );
        }
        return null;
      }
      return _(l);
    }
    function z() {
      return _(s);
    }
    function I(o) {
      function l(v, w, E, P, S) {
        if (typeof o != "function")
          return new C("Property `" + S + "` of component `" + E + "` has invalid PropType notation inside arrayOf.");
        var k = v[w];
        if (!Array.isArray(k)) {
          var A = U(k);
          return new C("Invalid " + P + " `" + S + "` of type " + ("`" + A + "` supplied to `" + E + "`, expected an array."));
        }
        for (var j = 0; j < k.length; j++) {
          var R = o(k, j, E, P, S + "[" + j + "]", n);
          if (R instanceof Error)
            return R;
        }
        return null;
      }
      return _(l);
    }
    function M() {
      function o(l, v, w, E, P) {
        var S = l[v];
        if (!c(S)) {
          var k = U(S);
          return new C("Invalid " + E + " `" + P + "` of type " + ("`" + k + "` supplied to `" + w + "`, expected a single ReactElement."));
        }
        return null;
      }
      return _(o);
    }
    function h() {
      function o(l, v, w, E, P) {
        var S = l[v];
        if (!e.isValidElementType(S)) {
          var k = U(S);
          return new C("Invalid " + E + " `" + P + "` of type " + ("`" + k + "` supplied to `" + w + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return _(o);
    }
    function H(o) {
      function l(v, w, E, P, S) {
        if (!(v[w] instanceof o)) {
          var k = o.name || b, A = pe(v[w]);
          return new C("Invalid " + P + " `" + S + "` of type " + ("`" + A + "` supplied to `" + E + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return _(l);
    }
    function Z(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function l(v, w, E, P, S) {
        for (var k = v[w], A = 0; A < o.length; A++)
          if (D(k, o[A]))
            return null;
        var j = JSON.stringify(o, function($, g) {
          var V = B(g);
          return V === "symbol" ? String(g) : g;
        });
        return new C("Invalid " + P + " `" + S + "` of value `" + String(k) + "` " + ("supplied to `" + E + "`, expected one of " + j + "."));
      }
      return _(l);
    }
    function ne(o) {
      function l(v, w, E, P, S) {
        if (typeof o != "function")
          return new C("Property `" + S + "` of component `" + E + "` has invalid PropType notation inside objectOf.");
        var k = v[w], A = U(k);
        if (A !== "object")
          return new C("Invalid " + P + " `" + S + "` of type " + ("`" + A + "` supplied to `" + E + "`, expected an object."));
        for (var j in k)
          if (r(k, j)) {
            var R = o(k, j, E, P, S + "." + j, n);
            if (R instanceof Error)
              return R;
          }
        return null;
      }
      return _(l);
    }
    function xe(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var l = 0; l < o.length; l++) {
        var v = o[l];
        if (typeof v != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(v) + " at index " + l + "."
          ), s;
      }
      function w(E, P, S, k, A) {
        for (var j = [], R = 0; R < o.length; R++) {
          var $ = o[R], g = $(E, P, S, k, A, n);
          if (g == null)
            return null;
          g.data && r(g.data, "expectedType") && j.push(g.data.expectedType);
        }
        var V = j.length > 0 ? ", expected one of type [" + j.join(", ") + "]" : "";
        return new C("Invalid " + k + " `" + A + "` supplied to " + ("`" + S + "`" + V + "."));
      }
      return _(w);
    }
    function we() {
      function o(l, v, w, E, P) {
        return G(l[v]) ? null : new C("Invalid " + E + " `" + P + "` supplied to " + ("`" + w + "`, expected a ReactNode."));
      }
      return _(o);
    }
    function re(o, l, v, w, E) {
      return new C(
        (o || "React class") + ": " + l + " type `" + v + "." + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + E + "`."
      );
    }
    function de(o) {
      function l(v, w, E, P, S) {
        var k = v[w], A = U(k);
        if (A !== "object")
          return new C("Invalid " + P + " `" + S + "` of type `" + A + "` " + ("supplied to `" + E + "`, expected `object`."));
        for (var j in o) {
          var R = o[j];
          if (typeof R != "function")
            return re(E, P, S, j, B(R));
          var $ = R(k, j, E, P, S + "." + j, n);
          if ($)
            return $;
        }
        return null;
      }
      return _(l);
    }
    function Ee(o) {
      function l(v, w, E, P, S) {
        var k = v[w], A = U(k);
        if (A !== "object")
          return new C("Invalid " + P + " `" + S + "` of type `" + A + "` " + ("supplied to `" + E + "`, expected `object`."));
        var j = t({}, v[w], o);
        for (var R in j) {
          var $ = o[R];
          if (r(o, R) && typeof $ != "function")
            return re(E, P, S, R, B($));
          if (!$)
            return new C(
              "Invalid " + P + " `" + S + "` key `" + R + "` supplied to `" + E + "`.\nBad object: " + JSON.stringify(v[w], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(o), null, "  ")
            );
          var g = $(k, R, E, P, S + "." + R, n);
          if (g)
            return g;
        }
        return null;
      }
      return _(l);
    }
    function G(o) {
      switch (typeof o) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !o;
        case "object":
          if (Array.isArray(o))
            return o.every(G);
          if (o === null || c(o))
            return !0;
          var l = y(o);
          if (l) {
            var v = l.call(o), w;
            if (l !== o.entries) {
              for (; !(w = v.next()).done; )
                if (!G(w.value))
                  return !1;
            } else
              for (; !(w = v.next()).done; ) {
                var E = w.value;
                if (E && !G(E[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function me(o, l) {
      return o === "symbol" ? !0 : l ? l["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && l instanceof Symbol : !1;
    }
    function U(o) {
      var l = typeof o;
      return Array.isArray(o) ? "array" : o instanceof RegExp ? "object" : me(l, o) ? "symbol" : l;
    }
    function B(o) {
      if (typeof o > "u" || o === null)
        return "" + o;
      var l = U(o);
      if (l === "object") {
        if (o instanceof Date)
          return "date";
        if (o instanceof RegExp)
          return "regexp";
      }
      return l;
    }
    function ce(o) {
      var l = B(o);
      switch (l) {
        case "array":
        case "object":
          return "an " + l;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + l;
        default:
          return l;
      }
    }
    function pe(o) {
      return !o.constructor || !o.constructor.name ? b : o.constructor.name;
    }
    return T.checkPropTypes = a, T.resetWarningCache = a.resetWarningCache, T.PropTypes = T, T;
  }, et;
}
var tt, Kt;
function Pr() {
  if (Kt) return tt;
  Kt = 1;
  var e = /* @__PURE__ */ Tt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, tt = function() {
    function r(s, c, m, f, d, y) {
      if (y !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var i = {
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
    return i.PropTypes = i, i;
  }, tt;
}
var Zt;
function Sr() {
  if (Zt) return Ne.exports;
  if (Zt = 1, process.env.NODE_ENV !== "production") {
    var e = Cn(), t = !0;
    Ne.exports = /* @__PURE__ */ Or()(e.isElement, t);
  } else
    Ne.exports = /* @__PURE__ */ Pr()();
  return Ne.exports;
}
var Tr = /* @__PURE__ */ Sr();
const O = /* @__PURE__ */ gr(Tr);
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
let kt = {}, Rn = {}, In = null, Nn = {
  mark: en,
  measure: en
};
try {
  typeof window < "u" && (kt = window), typeof document < "u" && (Rn = document), typeof MutationObserver < "u" && (In = MutationObserver), typeof performance < "u" && (Nn = performance);
} catch {
}
const {
  userAgent: tn = ""
} = kt.navigator || {}, ie = kt, Y = Rn, nn = In, Fe = Nn;
ie.document;
const te = !!Y.documentElement && !!Y.head && typeof Y.addEventListener == "function" && typeof Y.createElement == "function", Mn = ~tn.indexOf("MSIE") || ~tn.indexOf("Trident/");
var jr = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Rr = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Fn = {
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
}, Ln = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], W = "classic", He = "duotone", Nr = "sharp", Mr = "sharp-duotone", Dn = [W, He, Nr, Mr], Fr = {
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
}, Hr = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Gr = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Br = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Vr = {
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
}, Xr = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, ct = {
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
}, Jr = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], lt = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Hr, ...Jr], Kr = ["solid", "regular", "light", "thin", "duotone", "brands"], zn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Zr = zn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Qr = [...Object.keys(Xr), ...Kr, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Le.GROUP, Le.SWAP_OPACITY, Le.PRIMARY, Le.SECONDARY].concat(zn.map((e) => "".concat(e, "x"))).concat(Zr.map((e) => "w-".concat(e))), ea = {
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
const Q = "___FONT_AWESOME___", ft = 16, Yn = "fa", $n = "svg-inline--fa", fe = "data-fa-i2svg", ut = "data-fa-pseudo-element", ta = "data-fa-pseudo-element-pending", _t = "data-prefix", Ct = "data-icon", on = "fontawesome-i2svg", na = "async", ra = ["HTML", "HEAD", "STYLE", "SCRIPT"], Wn = (() => {
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
const Un = u({}, Fn);
Un[W] = u(u(u(u({}, {
  "fa-duotone": "duotone"
}), Fn[W]), rn.kit), rn["kit-duotone"]);
const aa = Ce(Un), dt = u({}, zr);
dt[W] = u(u(u(u({}, {
  duotone: "fad"
}), dt[W]), an.kit), an["kit-duotone"]);
const sn = Ce(dt), mt = u({}, ct);
mt[W] = u(u({}, mt[W]), qr.kit);
const jt = Ce(mt), pt = u({}, Vr);
pt[W] = u(u({}, pt[W]), Wr.kit);
Ce(pt);
const ia = jr, qn = "fa-layers-text", oa = Rr, sa = u({}, Fr);
Ce(sa);
const ca = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], nt = Ir, la = [...$r, ...Qr], Se = ie.FontAwesomeConfig || {};
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
  a != null && (Se[r] = a);
});
const Hn = {
  styleDefault: "solid",
  familyDefault: W,
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
Se.familyPrefix && (Se.cssPrefix = Se.familyPrefix);
const be = u(u({}, Hn), Se);
be.autoReplaceSvg || (be.observeMutations = !1);
const x = {};
Object.keys(Hn).forEach((e) => {
  Object.defineProperty(x, e, {
    enumerable: !0,
    set: function(t) {
      be[e] = t, Te.forEach((n) => n(x));
    },
    get: function() {
      return be[e];
    }
  });
});
Object.defineProperty(x, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    be.cssPrefix = e, Te.forEach((t) => t(x));
  },
  get: function() {
    return be.cssPrefix;
  }
});
ie.FontAwesomeConfig = x;
const Te = [];
function da(e) {
  return Te.push(e), () => {
    Te.splice(Te.indexOf(e), 1);
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
  const t = Y.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = Y.head.childNodes;
  let r = null;
  for (let a = n.length - 1; a > -1; a--) {
    const i = n[a], s = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (r = i);
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
function Rt(e) {
  return e.classList ? ve(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Gn(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ha(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Gn(e[n]), '" '), "").trim();
}
function Ge(e) {
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
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), c = "rotate(".concat(t.rotate, " 0 0)"), m = {
    transform: "".concat(i, " ").concat(s, " ").concat(c)
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
    width: n = ft,
    height: r = ft,
    startCentered: a = !1
  } = e, i = "";
  return a && Mn ? i += "translate(".concat(t.x / ae - n / 2, "em, ").concat(t.y / ae - r / 2, "em) ") : a ? i += "translate(calc(-50% + ".concat(t.x / ae, "em), calc(-50% + ").concat(t.y / ae, "em)) ") : i += "translate(".concat(t.x / ae, "em, ").concat(t.y / ae, "em) "), i += "scale(".concat(t.size / ae * (t.flipX ? -1 : 1), ", ").concat(t.size / ae * (t.flipY ? -1 : 1), ") "), i += "rotate(".concat(t.rotate, "deg) "), i;
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
function Bn() {
  const e = Yn, t = $n, n = x.cssPrefix, r = x.replacementClass;
  let a = ba;
  if (n !== e || r !== t) {
    const i = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), c = new RegExp("\\.".concat(t), "g");
    a = a.replace(i, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(c, ".".concat(r));
  }
  return a;
}
let cn = !1;
function rt() {
  x.autoAddCss && !cn && (ma(Bn()), cn = !0);
}
var va = {
  mixout() {
    return {
      dom: {
        css: Bn,
        insertCss: rt
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        rt();
      },
      beforeI2svg() {
        rt();
      }
    };
  }
};
const ee = ie || {};
ee[Q] || (ee[Q] = {});
ee[Q].styles || (ee[Q].styles = {});
ee[Q].hooks || (ee[Q].hooks = {});
ee[Q].shims || (ee[Q].shims = []);
var K = ee[Q];
const Vn = [], Xn = function() {
  Y.removeEventListener("DOMContentLoaded", Xn), Ye = 1, Vn.map((e) => e());
};
let Ye = !1;
te && (Ye = (Y.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Y.readyState), Ye || Y.addEventListener("DOMContentLoaded", Xn));
function xa(e) {
  te && (Ye ? setTimeout(e, 0) : Vn.push(e));
}
function je(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Gn(e) : "<".concat(t, " ").concat(ha(n), ">").concat(r.map(je).join(""), "</").concat(t, ">");
}
function ln(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var at = function(t, n, r, a) {
  var i = Object.keys(t), s = i.length, c = n, m, f, d;
  for (r === void 0 ? (m = 1, d = t[i[0]]) : (m = 0, d = r); m < s; m++)
    f = i[m], d = c(d, t[f], f, t);
  return d;
};
function wa(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      const i = e.charCodeAt(n++);
      (i & 64512) == 56320 ? t.push(((a & 1023) << 10) + (i & 1023) + 65536) : (t.push(a), n--);
    } else
      t.push(a);
  }
  return t;
}
function ht(e) {
  const t = wa(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Ea(e, t) {
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
function gt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = fn(t);
  typeof K.hooks.addPack == "function" && !r ? K.hooks.addPack(e, fn(t)) : K.styles[e] = u(u({}, K.styles[e] || {}), a), e === "fas" && gt("fa", t);
}
const {
  styles: _e,
  shims: Aa
} = K, Jn = Object.keys(jt), Oa = Jn.reduce((e, t) => (e[t] = Object.keys(jt[t]), e), {});
let Nt = null, Kn = {}, Zn = {}, Qn = {}, er = {}, tr = {};
function Pa(e) {
  return ~la.indexOf(e);
}
function Sa(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Pa(a) ? a : null;
}
const nr = () => {
  const e = (r) => at(_e, (a, i, s) => (a[s] = at(i, r, {}), a), {});
  Kn = e((r, a, i) => (a[3] && (r[a[3]] = i), a[2] && a[2].filter((c) => typeof c == "number").forEach((c) => {
    r[c.toString(16)] = i;
  }), r)), Zn = e((r, a, i) => (r[i] = i, a[2] && a[2].filter((c) => typeof c == "string").forEach((c) => {
    r[c] = i;
  }), r)), tr = e((r, a, i) => {
    const s = a[2];
    return r[i] = i, s.forEach((c) => {
      r[c] = i;
    }), r;
  });
  const t = "far" in _e || x.autoFetchSvg, n = at(Aa, (r, a) => {
    const i = a[0];
    let s = a[1];
    const c = a[2];
    return s === "far" && !t && (s = "fas"), typeof i == "string" && (r.names[i] = {
      prefix: s,
      iconName: c
    }), typeof i == "number" && (r.unicodes[i.toString(16)] = {
      prefix: s,
      iconName: c
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  Qn = n.names, er = n.unicodes, Nt = Be(x.styleDefault, {
    family: x.familyDefault
  });
};
da((e) => {
  Nt = Be(e.styleDefault, {
    family: x.familyDefault
  });
});
nr();
function Mt(e, t) {
  return (Kn[e] || {})[t];
}
function Ta(e, t) {
  return (Zn[e] || {})[t];
}
function le(e, t) {
  return (tr[e] || {})[t];
}
function rr(e) {
  return Qn[e] || {
    prefix: null,
    iconName: null
  };
}
function ka(e) {
  const t = er[e], n = Mt("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function oe() {
  return Nt;
}
const ar = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function _a(e) {
  let t = W;
  const n = Jn.reduce((r, a) => (r[a] = "".concat(x.cssPrefix, "-").concat(a), r), {});
  return Dn.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => Oa[r].includes(a))) && (t = r);
  }), t;
}
function Be(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = W
  } = t, r = aa[n][e];
  if (n === He && !e)
    return "fad";
  const a = sn[n][e] || sn[n][r], i = e in K.styles ? e : null;
  return a || i || null;
}
function Ca(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = Sa(x.cssPrefix, r);
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
  const a = lt.concat(Gr), i = un(e.filter((y) => a.includes(y))), s = un(e.filter((y) => !lt.includes(y))), c = i.filter((y) => (r = y, !Ln.includes(y))), [m = null] = c, f = _a(i), d = u(u({}, Ca(s)), {}, {
    prefix: Be(m, {
      family: f
    })
  });
  return u(u(u({}, d), Na({
    values: e,
    family: f,
    styles: _e,
    config: x,
    canonical: d,
    givenPrefix: r
  })), ja(n, r, d));
}
function ja(e, t, n) {
  let {
    prefix: r,
    iconName: a
  } = n;
  if (e || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  const i = t === "fa" ? rr(a) : {}, s = le(r, a);
  return a = i.iconName || s || a, r = i.prefix || r, r === "far" && !_e.far && _e.fas && !x.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const Ra = Dn.filter((e) => e !== W || e !== He), Ia = Object.keys(ct).filter((e) => e !== W).map((e) => Object.keys(ct[e])).flat();
function Na(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: i = {},
    config: s = {}
  } = e, c = n === He, m = t.includes("fa-duotone") || t.includes("fad"), f = s.familyDefault === "duotone", d = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!c && (m || f || d) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Ra.includes(n) && (Object.keys(i).find((b) => Ia.includes(b)) || s.autoFetchSvg)) {
    const b = Dr.get(n).defaultShortPrefixId;
    r.prefix = b, r.iconName = le(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = oe() || "fas"), r;
}
class Ma {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((i) => {
      this.definitions[i] = u(u({}, this.definitions[i] || {}), a[i]), gt(i, a[i]);
      const s = jt[W][i];
      s && gt(s, a[i]), nr();
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
        prefix: i,
        iconName: s,
        icon: c
      } = r[a], m = c[2];
      t[i] || (t[i] = {}), m.length > 0 && m.forEach((f) => {
        typeof f == "string" && (t[i][f] = c);
      }), t[i][s] = c;
    }), t;
  }
}
let dn = [], he = {};
const ye = {}, Fa = Object.keys(ye);
function La(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return dn = e, he = {}, Object.keys(ye).forEach((r) => {
    Fa.indexOf(r) === -1 && delete ye[r];
  }), dn.forEach((r) => {
    const a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach((i) => {
      typeof a[i] == "function" && (n[i] = a[i]), typeof a[i] == "object" && Object.keys(a[i]).forEach((s) => {
        n[i] || (n[i] = {}), n[i][s] = a[i][s];
      });
    }), r.hooks) {
      const i = r.hooks();
      Object.keys(i).forEach((s) => {
        he[s] || (he[s] = []), he[s].push(i[s]);
      });
    }
    r.provides && r.provides(ye);
  }), n;
}
function yt(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (he[e] || []).forEach((s) => {
    t = s.apply(null, [t, ...r]);
  }), t;
}
function ue(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (he[e] || []).forEach((i) => {
    i.apply(null, n);
  });
}
function se() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return ye[e] ? ye[e].apply(null, t) : void 0;
}
function bt(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || oe();
  if (t)
    return t = le(n, t) || t, ln(ir.definitions, n, t) || ln(K.styles, n, t);
}
const ir = new Ma(), Da = () => {
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
        iconName: le(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Be(e[0]);
      return {
        prefix: n,
        iconName: le(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(x.cssPrefix, "-")) > -1 || e.match(ia))) {
      const t = Ve(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || oe(),
        iconName: le(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = oe();
      return {
        prefix: t,
        iconName: le(t, e) || e
      };
    }
  }
}, q = {
  noAuto: Da,
  config: x,
  dom: za,
  parse: Ya,
  library: ir,
  findIconDefinition: bt,
  toHtml: je
}, $a = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = Y
  } = e;
  (Object.keys(K.styles).length > 0 || x.autoFetchSvg) && te && x.autoReplaceSvg && q.dom.i2svg({
    node: t
  });
};
function Xe(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => je(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!te) return;
      const n = Y.createElement("div");
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
    styles: i,
    transform: s
  } = e;
  if (It(s) && n.found && !r.found) {
    const {
      width: c,
      height: m
    } = n, f = {
      x: c / m / 2,
      y: 0.5
    };
    a.style = Ge(u(u({}, i), {}, {
      "transform-origin": "".concat(f.x + s.x / 16, "em ").concat(f.y + s.y / 16, "em")
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
    symbol: i
  } = e;
  const s = i === !0 ? "".concat(t, "-").concat(x.cssPrefix, "-").concat(n) : i;
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
    transform: i,
    symbol: s,
    title: c,
    maskId: m,
    titleId: f,
    extra: d,
    watchable: y = !1
  } = e, {
    width: b,
    height: T
  } = n.found ? n : t, D = Ur.includes(r), C = [x.replacementClass, a ? "".concat(x.cssPrefix, "-").concat(a) : ""].filter((h) => d.classes.indexOf(h) === -1).filter((h) => h !== "" || !!h).concat(d.classes).join(" ");
  let _ = {
    children: [],
    attributes: u(u({}, d.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: C,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(b, " ").concat(T)
    })
  };
  const N = D && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(b / T * 16 * 0.0625, "em")
  } : {};
  y && (_.attributes[fe] = ""), c && (_.children.push({
    tag: "title",
    attributes: {
      id: _.attributes["aria-labelledby"] || "title-".concat(f || ke())
    },
    children: [c]
  }), delete _.attributes.title);
  const z = u(u({}, _), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: m,
    transform: i,
    symbol: s,
    styles: u(u({}, N), d.styles)
  }), {
    children: I,
    attributes: M
  } = n.found && t.found ? se("generateAbstractMask", z) || {
    children: [],
    attributes: {}
  } : se("generateAbstractIcon", z) || {
    children: [],
    attributes: {}
  };
  return z.children = I, z.attributes = M, s ? Ua(z) : Wa(z);
}
function mn(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: a,
    title: i,
    extra: s,
    watchable: c = !1
  } = e, m = u(u(u({}, s.attributes), i ? {
    title: i
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  c && (m[fe] = "");
  const f = u({}, s.styles);
  It(a) && (f.transform = ya({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), f["-webkit-transform"] = f.transform);
  const d = Ge(f);
  d.length > 0 && (m.style = d);
  const y = [];
  return y.push({
    tag: "span",
    attributes: m,
    children: [t]
  }), i && y.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), y;
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
  }), i = Ge(r.styles);
  i.length > 0 && (a.style = i);
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
  styles: it
} = K;
function vt(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(x.cssPrefix, "-").concat(nt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(x.cssPrefix, "-").concat(nt.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(x.cssPrefix, "-").concat(nt.PRIMARY),
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
const Ha = {
  found: !1,
  width: 512,
  height: 512
};
function Ga(e, t) {
  !Wn && !x.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function xt(e, t) {
  let n = t;
  return t === "fa" && x.styleDefault !== null && (t = oe()), new Promise((r, a) => {
    if (n === "fa") {
      const i = rr(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && it[t] && it[t][e]) {
      const i = it[t][e];
      return r(vt(i));
    }
    Ga(e, t), r(u(u({}, Ha), {}, {
      icon: x.showMissingIcons && e ? se("missingIconAbstract") || {} : {}
    }));
  });
}
const pn = () => {
}, wt = x.measurePerformance && Fe && Fe.mark && Fe.measure ? Fe : {
  mark: pn,
  measure: pn
}, Pe = 'FA "6.7.2"', Ba = (e) => (wt.mark("".concat(Pe, " ").concat(e, " begins")), () => or(e)), or = (e) => {
  wt.mark("".concat(Pe, " ").concat(e, " ends")), wt.measure("".concat(Pe, " ").concat(e), "".concat(Pe, " ").concat(e, " begins"), "".concat(Pe, " ").concat(e, " ends"));
};
var Lt = {
  begin: Ba,
  end: or
};
const De = () => {
};
function hn(e) {
  return typeof (e.getAttribute ? e.getAttribute(fe) : null) == "string";
}
function Va(e) {
  const t = e.getAttribute ? e.getAttribute(_t) : null, n = e.getAttribute ? e.getAttribute(Ct) : null;
  return t && n;
}
function Xa(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(x.replacementClass);
}
function Ja() {
  return x.autoReplaceSvg === !0 ? ze.replace : ze[x.autoReplaceSvg] || ze.replace;
}
function Ka(e) {
  return Y.createElementNS("http://www.w3.org/2000/svg", e);
}
function Za(e) {
  return Y.createElement(e);
}
function sr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Ka : Za
  } = t;
  if (typeof e == "string")
    return Y.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(i) {
    r.setAttribute(i, e.attributes[i]);
  }), (e.children || []).forEach(function(i) {
    r.appendChild(sr(i, {
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
    if (~Rt(t).indexOf(x.replacementClass))
      return ze.replace(e);
    const r = new RegExp("".concat(x.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const i = n[0].attributes.class.split(" ").reduce((s, c) => (c === x.replacementClass || c.match(r) ? s.toSvg.push(c) : s.toNode.push(c), s), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
    }
    const a = n.map((i) => je(i)).join(`
`);
    t.setAttribute(fe, ""), t.innerHTML = a;
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
    x.mutateApproach === na && (r = ie.requestAnimationFrame || gn), r(() => {
      const a = Ja(), i = Lt.begin("mutate");
      e.map(a), i(), n();
    });
  }
}
let Dt = !1;
function lr() {
  Dt = !0;
}
function Et() {
  Dt = !1;
}
let $e = null;
function yn(e) {
  if (!nn || !x.observeMutations)
    return;
  const {
    treeCallback: t = De,
    nodeCallback: n = De,
    pseudoElementsCallback: r = De,
    observeMutationsRoot: a = Y
  } = e;
  $e = new nn((i) => {
    if (Dt) return;
    const s = oe();
    ve(i).forEach((c) => {
      if (c.type === "childList" && c.addedNodes.length > 0 && !hn(c.addedNodes[0]) && (x.searchPseudoElements && r(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && x.searchPseudoElements && r(c.target.parentNode), c.type === "attributes" && hn(c.target) && ~ca.indexOf(c.attributeName))
        if (c.attributeName === "class" && Va(c.target)) {
          const {
            prefix: m,
            iconName: f
          } = Ve(Rt(c.target));
          c.target.setAttribute(_t, m || s), f && c.target.setAttribute(Ct, f);
        } else Xa(c.target) && n(c.target);
    });
  }), te && $e.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function ei() {
  $e && $e.disconnect();
}
function ti(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const i = a.split(":"), s = i[0], c = i.slice(1);
    return s && c.length > 0 && (r[s] = c.join(":").trim()), r;
  }, {})), n;
}
function ni(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = Ve(Rt(e));
  return a.prefix || (a.prefix = oe()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Ta(a.prefix, e.innerText) || Mt(a.prefix, ht(e.innerText))), !a.iconName && x.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function ri(e) {
  const t = ve(e.attributes).reduce((a, i) => (a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return x.autoA11y && (n ? t["aria-labelledby"] = "".concat(x.replacementClass, "-title-").concat(r || ke()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function ai() {
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
  } = ni(e), i = ri(e), s = yt("parseNodeAttributes", {}, e);
  let c = t.styleParser ? ti(e) : [];
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
      styles: c,
      attributes: i
    }
  }, s);
}
const {
  styles: ii
} = K;
function fr(e) {
  const t = x.autoReplaceSvg === "nest" ? bn(e, {
    styleParser: !1
  }) : bn(e);
  return ~t.extra.classes.indexOf(qn) ? se("generateLayersText", e, t) : se("generateSvgReplacementMutation", e, t);
}
function oi() {
  return [...Yr, ...lt];
}
function vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!te) return Promise.resolve();
  const n = Y.documentElement.classList, r = (d) => n.add("".concat(on, "-").concat(d)), a = (d) => n.remove("".concat(on, "-").concat(d)), i = x.autoFetchSvg ? oi() : Ln.concat(Object.keys(ii));
  i.includes("fa") || i.push("fa");
  const s = [".".concat(qn, ":not([").concat(fe, "])")].concat(i.map((d) => ".".concat(d, ":not([").concat(fe, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let c = [];
  try {
    c = ve(e.querySelectorAll(s));
  } catch {
  }
  if (c.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const m = Lt.begin("onTree"), f = c.reduce((d, y) => {
    try {
      const b = fr(y);
      b && d.push(b);
    } catch (b) {
      Wn || b.name === "MissingIcon" && console.error(b);
    }
    return d;
  }, []);
  return new Promise((d, y) => {
    Promise.all(f).then((b) => {
      cr(b, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), m(), d();
      });
    }).catch((b) => {
      m(), y(b);
    });
  });
}
function si(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  fr(e).then((n) => {
    n && cr([n], t);
  });
}
function ci(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : bt(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : bt(a || {})), e(r, u(u({}, n), {}, {
      mask: a
    }));
  };
}
const li = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = J,
    symbol: r = !1,
    mask: a = null,
    maskId: i = null,
    title: s = null,
    titleId: c = null,
    classes: m = [],
    attributes: f = {},
    styles: d = {}
  } = t;
  if (!e) return;
  const {
    prefix: y,
    iconName: b,
    icon: T
  } = e;
  return Xe(u({
    type: "icon"
  }, e), () => (ue("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), x.autoA11y && (s ? f["aria-labelledby"] = "".concat(x.replacementClass, "-title-").concat(c || ke()) : (f["aria-hidden"] = "true", f.focusable = "false")), Ft({
    icons: {
      main: vt(T),
      mask: a ? vt(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: y,
    iconName: b,
    transform: u(u({}, J), n),
    symbol: r,
    title: s,
    maskId: i,
    titleId: c,
    extra: {
      attributes: f,
      styles: d,
      classes: m
    }
  })));
};
var fi = {
  mixout() {
    return {
      icon: ci(li)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = vn, e.nodeCallback = si, e;
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
        titleId: i,
        prefix: s,
        transform: c,
        symbol: m,
        mask: f,
        maskId: d,
        extra: y
      } = n;
      return new Promise((b, T) => {
        Promise.all([xt(r, s), f.iconName ? xt(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((D) => {
          let [C, _] = D;
          b([t, Ft({
            icons: {
              main: C,
              mask: _
            },
            prefix: s,
            iconName: r,
            transform: c,
            symbol: m,
            maskId: d,
            title: a,
            titleId: i,
            extra: y,
            watchable: !0
          })]);
        }).catch(T);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        transform: i,
        styles: s
      } = t;
      const c = Ge(s);
      c.length > 0 && (r.style = c);
      let m;
      return It(i) && (m = se("generateAbstractTransformGrouping", {
        main: a,
        transform: i,
        containerWidth: a.width,
        iconWidth: a.width
      })), n.push(m || a.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, ui = {
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
            Array.isArray(a) ? a.map((i) => {
              r = r.concat(i.abstract);
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
}, di = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: a = {},
          styles: i = {}
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
            styles: i,
            classes: ["".concat(x.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, mi = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = J,
          title: r = null,
          classes: a = [],
          attributes: i = {},
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
          transform: u(u({}, J), n),
          title: r,
          extra: {
            attributes: i,
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
        extra: i
      } = n;
      let s = null, c = null;
      if (Mn) {
        const m = parseInt(getComputedStyle(t).fontSize, 10), f = t.getBoundingClientRect();
        s = f.width / m, c = f.height / m;
      }
      return x.autoA11y && !r && (i.attributes["aria-hidden"] = "true"), Promise.resolve([t, mn({
        content: t.innerHTML,
        width: s,
        height: c,
        transform: a,
        title: r,
        extra: i,
        watchable: !0
      })]);
    };
  }
};
const pi = new RegExp('"', "ug"), xn = [1105920, 1112319], wn = u(u(u(u({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Lr), ea), Br), At = Object.keys(wn).reduce((e, t) => (e[t.toLowerCase()] = wn[t], e), {}), hi = Object.keys(At).reduce((e, t) => {
  const n = At[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function gi(e) {
  const t = e.replace(pi, ""), n = Ea(t, 0), r = n >= xn[0] && n <= xn[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: ht(a ? t[0] : t),
    isSecondary: r || a
  };
}
function yi(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (At[n] || {})[a] || hi[n];
}
function En(e, t) {
  const n = "".concat(ta).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const s = ve(e.children).filter((b) => b.getAttribute(ut) === t)[0], c = ie.getComputedStyle(e, t), m = c.getPropertyValue("font-family"), f = m.match(oa), d = c.getPropertyValue("font-weight"), y = c.getPropertyValue("content");
    if (s && !f)
      return e.removeChild(s), r();
    if (f && y !== "none" && y !== "") {
      const b = c.getPropertyValue("content");
      let T = yi(m, d);
      const {
        value: D,
        isSecondary: C
      } = gi(b), _ = f[0].startsWith("FontAwesome");
      let N = Mt(T, D), z = N;
      if (_) {
        const I = ka(D);
        I.iconName && I.prefix && (N = I.iconName, T = I.prefix);
      }
      if (N && !C && (!s || s.getAttribute(_t) !== T || s.getAttribute(Ct) !== z)) {
        e.setAttribute(n, z), s && e.removeChild(s);
        const I = ai(), {
          extra: M
        } = I;
        M.attributes[ut] = t, xt(N, T).then((h) => {
          const H = Ft(u(u({}, I), {}, {
            icons: {
              main: h,
              mask: ar()
            },
            prefix: T,
            iconName: z,
            extra: M,
            watchable: !0
          })), Z = Y.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(Z, e.firstChild) : e.appendChild(Z), Z.outerHTML = H.map((ne) => je(ne)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function bi(e) {
  return Promise.all([En(e, "::before"), En(e, "::after")]);
}
function vi(e) {
  return e.parentNode !== document.head && !~ra.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ut) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function An(e) {
  if (te)
    return new Promise((t, n) => {
      const r = ve(e.querySelectorAll("*")).filter(vi).map(bi), a = Lt.begin("searchPseudoElements");
      lr(), Promise.all(r).then(() => {
        a(), Et(), t();
      }).catch(() => {
        a(), Et(), n();
      });
    });
}
var xi = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = An, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = Y
      } = t;
      x.searchPseudoElements && An(n);
    };
  }
};
let On = !1;
var wi = {
  mixout() {
    return {
      dom: {
        unwatch() {
          lr(), On = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        yn(yt("mutationObserverCallbacks", {}));
      },
      noAuto() {
        ei();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        On ? Et() : yn(yt("mutationObserverCallbacks", {
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
    const a = r.toLowerCase().split("-"), i = a[0];
    let s = a.slice(1).join("-");
    if (i && s === "h")
      return n.flipX = !0, n;
    if (i && s === "v")
      return n.flipY = !0, n;
    if (s = parseFloat(s), isNaN(s))
      return n;
    switch (i) {
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
var Ei = {
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
        iconWidth: i
      } = t;
      const s = {
        transform: "translate(".concat(a / 2, " 256)")
      }, c = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), m = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), f = "rotate(".concat(r.rotate, " 0 0)"), d = {
        transform: "".concat(c, " ").concat(m, " ").concat(f)
      }, y = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, b = {
        outer: s,
        inner: d,
        path: y
      };
      return {
        tag: "g",
        attributes: u({}, b.outer),
        children: [{
          tag: "g",
          attributes: u({}, b.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: u(u({}, n.icon.attributes), b.path)
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
function Sn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Ai(e) {
  return e.tag === "g" ? e.children : [e];
}
var Oi = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Ve(n.split(" ").map((a) => a.trim())) : ar();
        return r.prefix || (r.prefix = oe()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        mask: i,
        maskId: s,
        transform: c
      } = t;
      const {
        width: m,
        icon: f
      } = a, {
        width: d,
        icon: y
      } = i, b = ga({
        transform: c,
        containerWidth: d,
        iconWidth: m
      }), T = {
        tag: "rect",
        attributes: u(u({}, ot), {}, {
          fill: "white"
        })
      }, D = f.children ? {
        children: f.children.map(Sn)
      } : {}, C = {
        tag: "g",
        attributes: u({}, b.inner),
        children: [Sn(u({
          tag: f.tag,
          attributes: u(u({}, f.attributes), b.path)
        }, D))]
      }, _ = {
        tag: "g",
        attributes: u({}, b.outer),
        children: [C]
      }, N = "mask-".concat(s || ke()), z = "clip-".concat(s || ke()), I = {
        tag: "mask",
        attributes: u(u({}, ot), {}, {
          id: N,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [T, _]
      }, M = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: z
          },
          children: Ai(y)
        }, I]
      };
      return n.push(M, {
        tag: "rect",
        attributes: u({
          fill: "currentColor",
          "clip-path": "url(#".concat(z, ")"),
          mask: "url(#".concat(N, ")")
        }, ot)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Pi = {
  provides(e) {
    let t = !1;
    ie.matchMedia && (t = ie.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
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
      const i = u(u({}, a), {}, {
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
        attributes: u(u({}, i), {}, {
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
          attributes: u(u({}, i), {}, {
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
          attributes: u(u({}, i), {}, {
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
}, Si = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Ti = [va, fi, ui, di, mi, xi, wi, Ei, Oi, Pi, Si];
La(Ti, {
  mixoutsTo: q
});
q.noAuto;
q.config;
q.library;
q.dom;
const Ot = q.parse;
q.findIconDefinition;
q.toHtml;
const ki = q.icon;
q.layer;
q.text;
q.counter;
function Tn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tn(Object(n), !0).forEach(function(r) {
      ge(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tn(Object(n)).forEach(function(r) {
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
function _i(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Ci(e, t) {
  if (e == null) return {};
  var n = _i(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Pt(e) {
  return ji(e) || Ri(e) || Ii(e) || Ni();
}
function ji(e) {
  if (Array.isArray(e)) return St(e);
}
function Ri(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ii(e, t) {
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
function Ni() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mi(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, i = e.bounce, s = e.shake, c = e.flash, m = e.spin, f = e.spinPulse, d = e.spinReverse, y = e.pulse, b = e.fixedWidth, T = e.inverse, D = e.border, C = e.listItem, _ = e.flip, N = e.size, z = e.rotation, I = e.pull, M = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": i,
    "fa-shake": s,
    "fa-flash": c,
    "fa-spin": m,
    "fa-spin-reverse": d,
    "fa-spin-pulse": f,
    "fa-pulse": y,
    "fa-fw": b,
    "fa-inverse": T,
    "fa-border": D,
    "fa-li": C,
    "fa-flip": _ === !0,
    "fa-flip-horizontal": _ === "horizontal" || _ === "both",
    "fa-flip-vertical": _ === "vertical" || _ === "both"
  }, ge(t, "fa-".concat(N), typeof N < "u" && N !== null), ge(t, "fa-rotate-".concat(z), typeof z < "u" && z !== null && z !== 0), ge(t, "fa-pull-".concat(I), typeof I < "u" && I !== null), ge(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(M).map(function(h) {
    return M[h] ? h : null;
  }).filter(function(h) {
    return h;
  });
}
function Fi(e) {
  return e = e - 0, e === e;
}
function ur(e) {
  return Fi(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Li = ["style"];
function Di(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function zi(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = ur(n.slice(0, r)), i = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Di(a)] = i : t[a] = i, t;
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
        m.attrs.style = zi(d);
        break;
      default:
        f.indexOf("aria-") === 0 || f.indexOf("data-") === 0 ? m.attrs[f.toLowerCase()] = d : m.attrs[ur(f)] = d;
    }
    return m;
  }, {
    attrs: {}
  }), i = n.style, s = i === void 0 ? {} : i, c = Ci(n, Li);
  return a.attrs.style = X(X({}, a.attrs.style), s), e.apply(void 0, [t.tag, X(X({}, a.attrs), c)].concat(Pt(r)));
}
var mr = !1;
try {
  mr = process.env.NODE_ENV === "production";
} catch {
}
function Yi() {
  if (!mr && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function kn(e) {
  if (e && We(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Ot.icon)
    return Ot.icon(e);
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
function st(e, t) {
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
}, Ue = /* @__PURE__ */ qe.forwardRef(function(e, t) {
  var n = X(X({}, _n), e), r = n.icon, a = n.mask, i = n.symbol, s = n.className, c = n.title, m = n.titleId, f = n.maskId, d = kn(r), y = st("classes", [].concat(Pt(Mi(n)), Pt((s || "").split(" ")))), b = st("transform", typeof n.transform == "string" ? Ot.transform(n.transform) : n.transform), T = st("mask", kn(a)), D = ki(d, X(X(X(X({}, y), b), T), {}, {
    symbol: i,
    title: c,
    titleId: m,
    maskId: f
  }));
  if (!D)
    return Yi("Could not find icon", d), null;
  var C = D.abstract, _ = {
    ref: t
  };
  return Object.keys(n).forEach(function(N) {
    _n.hasOwnProperty(N) || (_[N] = n[N]);
  }), $i(C[0], _);
});
Ue.displayName = "FontAwesomeIcon";
Ue.propTypes = {
  beat: O.bool,
  border: O.bool,
  beatFade: O.bool,
  bounce: O.bool,
  className: O.string,
  fade: O.bool,
  flash: O.bool,
  mask: O.oneOfType([O.object, O.array, O.string]),
  maskId: O.string,
  fixedWidth: O.bool,
  inverse: O.bool,
  flip: O.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: O.oneOfType([O.object, O.array, O.string]),
  listItem: O.bool,
  pull: O.oneOf(["right", "left"]),
  pulse: O.bool,
  rotation: O.oneOf([0, 90, 180, 270]),
  shake: O.bool,
  size: O.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: O.bool,
  spinPulse: O.bool,
  spinReverse: O.bool,
  symbol: O.oneOfType([O.bool, O.string]),
  title: O.string,
  titleId: O.string,
  transform: O.oneOfType([O.string, O.object]),
  swapOpacity: O.bool
};
var $i = dr.bind(null, qe.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Wi = {
  prefix: "fas",
  iconName: "lock",
  icon: [448, 512, [128274], "f023", "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]
}, Ui = {
  prefix: "fas",
  iconName: "landmark",
  icon: [512, 512, [127963], "f66f", "M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8L32 192c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9l0-.9 4.4-1.6L240.1 4.2zM64 224l64 0 0 192 40 0 0-192 64 0 0 192 48 0 0-192 64 0 0 192 40 0 0-192 64 0 0 196.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 224z"]
}, pr = ({
  domain: e = "An official website of the City of Portland",
  icon: t = void 0,
  heading: n = "Official websites use .gov",
  description: r = "A .gov website belongs to an official government organization in the United States.",
  bannerLinkText: a = "Here's how you know",
  showHttpsGuidance: i = !0,
  initiallyExpanded: s = !1,
  className: c = ""
}) => {
  const [m, f] = hr(s), d = ["banner", c].filter(Boolean).join(" "), y = () => {
    f(!m);
  };
  return /* @__PURE__ */ p.jsxs("section", { className: d, children: [
    /* @__PURE__ */ p.jsxs("div", { className: "banner-content", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "banner-header", children: [
        /* @__PURE__ */ p.jsx("div", { className: "banner-header-icon", children: qe.isValidElement(t) ? t : /* @__PURE__ */ p.jsxs("svg", { width: "24", height: "16", viewBox: "0 0 24 16", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ p.jsx("rect", { width: "24", height: "16", fill: "#B22234" }),
          /* @__PURE__ */ p.jsx("rect", { y: "1.23", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ p.jsx("rect", { y: "3.69", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ p.jsx("rect", { y: "6.15", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ p.jsx("rect", { y: "8.62", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ p.jsx("rect", { y: "11.08", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ p.jsx("rect", { y: "13.54", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ p.jsx("rect", { width: "9.6", height: "8.62", fill: "#3C3B6E" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "1.2", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "2.4", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "3.6", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "4.8", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "6", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "7.2", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "8.4", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "1.8", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "3", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "4.2", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "5.4", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "6.6", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "7.8", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "1.2", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "2.4", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "3.6", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "4.8", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "6", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "7.2", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "8.4", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "1.8", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "3", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "4.2", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "5.4", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "6.6", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "7.8", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "1.2", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "2.4", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "3.6", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "4.8", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "6", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "7.2", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "8.4", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "1.8", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "3", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "4.2", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "5.4", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "6.6", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "7.8", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "1.2", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "2.4", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "3.6", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "4.8", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "6", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "7.2", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ p.jsx("circle", { cx: "8.4", cy: "7.7", r: "0.3", fill: "white" })
        ] }) }),
        /* @__PURE__ */ p.jsx("p", { className: "banner-header-text", children: e })
      ] }),
      /* @__PURE__ */ p.jsxs(
        "button",
        {
          className: "banner-button",
          onClick: y,
          "aria-expanded": m,
          "aria-controls": "banner-content",
          children: [
            /* @__PURE__ */ p.jsx("span", { className: "banner-button-text", children: a }),
            /* @__PURE__ */ p.jsx("span", { className: `banner-button-icon ${m ? "is-open" : ""}`, children: /* @__PURE__ */ p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ p.jsx("polyline", { points: "6 9 12 15 18 9" }) }) })
          ]
        }
      )
    ] }),
    m && /* @__PURE__ */ p.jsxs(
      "div",
      {
        id: "banner-expanded-content",
        className: "banner-expanded-content",
        children: [
          /* @__PURE__ */ p.jsxs("div", { className: "banner-guidance", children: [
            /* @__PURE__ */ p.jsx("div", { className: "banner-guidance-icon", children: /* @__PURE__ */ p.jsx(Ue, { icon: Ui, style: { fontSize: "40px", color: "#2378C3" } }) || null }),
            /* @__PURE__ */ p.jsxs("div", { className: "banner-guidance-text", children: [
              /* @__PURE__ */ p.jsx("div", { className: "banner-guidance-heading", children: n }),
              /* @__PURE__ */ p.jsx("div", { className: "banner-guidance-description", children: r })
            ] })
          ] }),
          i && /* @__PURE__ */ p.jsxs("div", { className: "banner-guidance", children: [
            /* @__PURE__ */ p.jsx("div", { className: "banner-guidance-icon", children: /* @__PURE__ */ p.jsx(Ue, { icon: Wi, style: { fontSize: "40px", color: "#719F2A" } }) }),
            /* @__PURE__ */ p.jsxs("div", { className: "banner-guidance-text", children: [
              /* @__PURE__ */ p.jsx("div", { className: "banner-guidance-heading", children: "Secure websites use HTTPS" }),
              /* @__PURE__ */ p.jsxs("div", { className: "banner-guidance-description", children: [
                "A ",
                /* @__PURE__ */ p.jsx("strong", { children: "lock" }),
                " or ",
                /* @__PURE__ */ p.jsx("strong", { children: "https://" }),
                " means you've safely connected to the .gov website. Share sensitive information only on official, secure websites."
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
};
pr.propTypes = {
  /** Text describing the domain/owner of the site */
  domain: O.string,
  /** Custom icon element to display in the banner */
  icon: O.node,
  /** Heading text for the banner content */
  heading: O.string,
  /** Description text for the banner content */
  description: O.node,
  /** Whether to show the HTTPS guidance section */
  showHttpsGuidance: O.bool,
  /** Whether the banner content is initially expanded */
  initiallyExpanded: O.bool,
  /** Additional CSS class for the banner */
  className: O.string
};
pr.defaultProps = {
  domain: "An official website of the City of Portland",
  icon: void 0,
  heading: "Official websites use .gov",
  description: "A .gov website belongs to an official government organization in the United States.",
  showHttpsGuidance: !0,
  initiallyExpanded: !1,
  className: ""
};
export {
  pr as Banner
};
//# sourceMappingURL=index.js.map
