import oe, { useState as ft, useRef as xr, useEffect as Wt } from "react";
function jn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var je = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ut;
function Er() {
  if (Ut) return Pe;
  Ut = 1;
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
  return Pe.Fragment = t, Pe.jsx = n, Pe.jsxs = n, Pe;
}
var Se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function Ar() {
  return qt || (qt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(i) {
      if (i == null) return null;
      if (typeof i == "function")
        return i.$$typeof === Ae ? null : i.displayName || i.name || null;
      if (typeof i == "string") return i;
      switch (i) {
        case T:
          return "Fragment";
        case N:
          return "Profiler";
        case k:
          return "StrictMode";
        case p:
          return "Suspense";
        case q:
          return "SuspenseList";
        case Ee:
          return "Activity";
      }
      if (typeof i == "object")
        switch (typeof i.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), i.$$typeof) {
          case j:
            return "Portal";
          case I:
            return (i.displayName || "Context") + ".Provider";
          case L:
            return (i._context.displayName || "Context") + ".Consumer";
          case M:
            var c = i.render;
            return i = i.displayName, i || (i = c.displayName || c.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
          case K:
            return c = i.displayName || null, c !== null ? c : e(i.type) || "Memo";
          case te:
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
        var b = c.error, x = typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return b.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), t(i);
      }
    }
    function r(i) {
      if (i === T) return "<>";
      if (typeof i == "object" && i !== null && i.$$typeof === te)
        return "<...>";
      try {
        var c = e(i);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var i = ne.A;
      return i === null ? null : i.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(i) {
      if (me.call(i, "key")) {
        var c = Object.getOwnPropertyDescriptor(i, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return i.key !== void 0;
    }
    function f(i, c) {
      function b() {
        pe || (pe = !0, console.error(
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
      return W[i] || (W[i] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), i = this.props.ref, i !== void 0 ? i : null;
    }
    function u(i, c, b, x, E, S, w, _) {
      return b = S.ref, i = {
        $$typeof: P,
        type: i,
        key: c,
        props: S,
        _owner: E
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
        value: w
      }), Object.defineProperty(i, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    }
    function l(i, c, b, x, E, S, w, _) {
      var A = c.children;
      if (A !== void 0)
        if (x)
          if (Oe(A)) {
            for (x = 0; x < A.length; x++)
              g(A[x]);
            Object.freeze && Object.freeze(A);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(A);
      if (me.call(c, "key")) {
        A = e(i);
        var C = Object.keys(c).filter(function(Y) {
          return Y !== "key";
        });
        x = 0 < C.length ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}", ge[A + x] || (C = 0 < C.length ? "{" + C.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          A,
          C,
          A
        ), ge[A + x] = !0);
      }
      if (A = null, b !== void 0 && (n(b), A = "" + b), s(c) && (n(c.key), A = "" + c.key), "key" in c) {
        b = {};
        for (var R in c)
          R !== "key" && (b[R] = c[R]);
      } else b = c;
      return A && f(
        b,
        typeof i == "function" ? i.displayName || i.name || "Unknown" : i
      ), u(
        i,
        A,
        S,
        E,
        a(),
        b,
        w,
        _
      );
    }
    function g(i) {
      typeof i == "object" && i !== null && i.$$typeof === P && i._store && (i._store.validated = 1);
    }
    var h = oe, P = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), I = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), Ee = Symbol.for("react.activity"), Ae = Symbol.for("react.client.reference"), ne = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, me = Object.prototype.hasOwnProperty, Oe = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      "react-stack-bottom-frame": function(i) {
        return i();
      }
    };
    var pe, W = {}, V = h["react-stack-bottom-frame"].bind(
      h,
      o
    )(), ce = H(r(o)), ge = {};
    Se.Fragment = T, Se.jsx = function(i, c, b, x, E) {
      var S = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return l(
        i,
        c,
        b,
        !1,
        x,
        E,
        S ? Error("react-stack-top-frame") : V,
        S ? H(r(i)) : ce
      );
    }, Se.jsxs = function(i, c, b, x, E) {
      var S = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return l(
        i,
        c,
        b,
        !0,
        x,
        E,
        S ? Error("react-stack-top-frame") : V,
        S ? H(r(i)) : ce
      );
    };
  }()), Se;
}
var Ht;
function Or() {
  return Ht || (Ht = 1, process.env.NODE_ENV === "production" ? je.exports = Er() : je.exports = Ar()), je.exports;
}
var ae = Or(), Me = { exports: {} }, Fe = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vt;
function Pr() {
  if (Vt) return F;
  Vt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, P = e ? Symbol.for("react.memo") : 60115, j = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
  function I(p) {
    if (typeof p == "object" && p !== null) {
      var q = p.$$typeof;
      switch (q) {
        case t:
          switch (p = p.type, p) {
            case m:
            case u:
            case r:
            case o:
            case a:
            case g:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case f:
                case l:
                case j:
                case P:
                case s:
                  return p;
                default:
                  return q;
              }
          }
        case n:
          return q;
      }
    }
  }
  function M(p) {
    return I(p) === u;
  }
  return F.AsyncMode = m, F.ConcurrentMode = u, F.ContextConsumer = f, F.ContextProvider = s, F.Element = t, F.ForwardRef = l, F.Fragment = r, F.Lazy = j, F.Memo = P, F.Portal = n, F.Profiler = o, F.StrictMode = a, F.Suspense = g, F.isAsyncMode = function(p) {
    return M(p) || I(p) === m;
  }, F.isConcurrentMode = M, F.isContextConsumer = function(p) {
    return I(p) === f;
  }, F.isContextProvider = function(p) {
    return I(p) === s;
  }, F.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, F.isForwardRef = function(p) {
    return I(p) === l;
  }, F.isFragment = function(p) {
    return I(p) === r;
  }, F.isLazy = function(p) {
    return I(p) === j;
  }, F.isMemo = function(p) {
    return I(p) === P;
  }, F.isPortal = function(p) {
    return I(p) === n;
  }, F.isProfiler = function(p) {
    return I(p) === o;
  }, F.isStrictMode = function(p) {
    return I(p) === a;
  }, F.isSuspense = function(p) {
    return I(p) === g;
  }, F.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === u || p === o || p === a || p === g || p === h || typeof p == "object" && p !== null && (p.$$typeof === j || p.$$typeof === P || p.$$typeof === s || p.$$typeof === f || p.$$typeof === l || p.$$typeof === k || p.$$typeof === N || p.$$typeof === L || p.$$typeof === T);
  }, F.typeOf = I, F;
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
var Gt;
function Sr() {
  return Gt || (Gt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, P = e ? Symbol.for("react.memo") : 60115, j = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
    function I(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === r || y === u || y === o || y === a || y === g || y === h || typeof y == "object" && y !== null && (y.$$typeof === j || y.$$typeof === P || y.$$typeof === s || y.$$typeof === f || y.$$typeof === l || y.$$typeof === k || y.$$typeof === N || y.$$typeof === L || y.$$typeof === T);
    }
    function M(y) {
      if (typeof y == "object" && y !== null) {
        var G = y.$$typeof;
        switch (G) {
          case t:
            var Ne = y.type;
            switch (Ne) {
              case m:
              case u:
              case r:
              case o:
              case a:
              case g:
                return Ne;
              default:
                var $t = Ne && Ne.$$typeof;
                switch ($t) {
                  case f:
                  case l:
                  case j:
                  case P:
                  case s:
                    return $t;
                  default:
                    return G;
                }
            }
          case n:
            return G;
        }
      }
    }
    var p = m, q = u, K = f, te = s, Ee = t, Ae = l, ne = r, me = j, Oe = P, H = n, pe = o, W = a, V = g, ce = !1;
    function ge(y) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), i(y) || M(y) === m;
    }
    function i(y) {
      return M(y) === u;
    }
    function c(y) {
      return M(y) === f;
    }
    function b(y) {
      return M(y) === s;
    }
    function x(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }
    function E(y) {
      return M(y) === l;
    }
    function S(y) {
      return M(y) === r;
    }
    function w(y) {
      return M(y) === j;
    }
    function _(y) {
      return M(y) === P;
    }
    function A(y) {
      return M(y) === n;
    }
    function C(y) {
      return M(y) === o;
    }
    function R(y) {
      return M(y) === a;
    }
    function Y(y) {
      return M(y) === g;
    }
    D.AsyncMode = p, D.ConcurrentMode = q, D.ContextConsumer = K, D.ContextProvider = te, D.Element = Ee, D.ForwardRef = Ae, D.Fragment = ne, D.Lazy = me, D.Memo = Oe, D.Portal = H, D.Profiler = pe, D.StrictMode = W, D.Suspense = V, D.isAsyncMode = ge, D.isConcurrentMode = i, D.isContextConsumer = c, D.isContextProvider = b, D.isElement = x, D.isForwardRef = E, D.isFragment = S, D.isLazy = w, D.isMemo = _, D.isPortal = A, D.isProfiler = C, D.isStrictMode = R, D.isSuspense = Y, D.isValidElementType = I, D.typeOf = M;
  }()), D;
}
var Xt;
function Mn() {
  return Xt || (Xt = 1, process.env.NODE_ENV === "production" ? Fe.exports = Pr() : Fe.exports = Sr()), Fe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Be, Bt;
function Tr() {
  if (Bt) return Be;
  Bt = 1;
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
      var m = Object.getOwnPropertyNames(s).map(function(l) {
        return s[l];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        u[l] = l;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Be = a() ? Object.assign : function(o, s) {
    for (var f, m = r(o), u, l = 1; l < arguments.length; l++) {
      f = Object(arguments[l]);
      for (var g in f)
        t.call(f, g) && (m[g] = f[g]);
      if (e) {
        u = e(f);
        for (var h = 0; h < u.length; h++)
          n.call(f, u[h]) && (m[u[h]] = f[u[h]]);
      }
    }
    return m;
  }, Be;
}
var Je, Jt;
function _t() {
  if (Jt) return Je;
  Jt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Je = e, Je;
}
var Ke, Kt;
function Fn() {
  return Kt || (Kt = 1, Ke = Function.call.bind(Object.prototype.hasOwnProperty)), Ke;
}
var Ze, Zt;
function wr() {
  if (Zt) return Ze;
  Zt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ _t(), n = {}, r = /* @__PURE__ */ Fn();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, f, m, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in o)
        if (r(o, l)) {
          var g;
          try {
            if (typeof o[l] != "function") {
              var h = Error(
                (m || "React class") + ": " + f + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            g = o[l](s, l, m, f, null, t);
          } catch (j) {
            g = j;
          }
          if (g && !(g instanceof Error) && e(
            (m || "React class") + ": type specification of " + f + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in n)) {
            n[g.message] = !0;
            var P = u ? u() : "";
            e(
              "Failed " + f + " type: " + g.message + (P ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Ze = a, Ze;
}
var Qe, Qt;
function _r() {
  if (Qt) return Qe;
  Qt = 1;
  var e = Mn(), t = Tr(), n = /* @__PURE__ */ _t(), r = /* @__PURE__ */ Fn(), a = /* @__PURE__ */ wr(), o = function() {
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
  return Qe = function(f, m) {
    var u = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function g(i) {
      var c = i && (u && i[u] || i[l]);
      if (typeof c == "function")
        return c;
    }
    var h = "<<anonymous>>", P = {
      array: N("array"),
      bigint: N("bigint"),
      bool: N("boolean"),
      func: N("function"),
      number: N("number"),
      object: N("object"),
      string: N("string"),
      symbol: N("symbol"),
      any: L(),
      arrayOf: I,
      element: M(),
      elementType: p(),
      instanceOf: q,
      node: Ae(),
      objectOf: te,
      oneOf: K,
      oneOfType: Ee,
      shape: me,
      exact: Oe
    };
    function j(i, c) {
      return i === c ? i !== 0 || 1 / i === 1 / c : i !== i && c !== c;
    }
    function T(i, c) {
      this.message = i, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    T.prototype = Error.prototype;
    function k(i) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, b = 0;
      function x(S, w, _, A, C, R, Y) {
        if (A = A || h, R = R || _, Y !== n) {
          if (m) {
            var y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw y.name = "Invariant Violation", y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var G = A + ":" + _;
            !c[G] && // Avoid spamming the console because they are often not actionable except for lib authors
            b < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + R + "` prop on `" + A + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[G] = !0, b++);
          }
        }
        return w[_] == null ? S ? w[_] === null ? new T("The " + C + " `" + R + "` is marked as required " + ("in `" + A + "`, but its value is `null`.")) : new T("The " + C + " `" + R + "` is marked as required in " + ("`" + A + "`, but its value is `undefined`.")) : null : i(w, _, A, C, R);
      }
      var E = x.bind(null, !1);
      return E.isRequired = x.bind(null, !0), E;
    }
    function N(i) {
      function c(b, x, E, S, w, _) {
        var A = b[x], C = W(A);
        if (C !== i) {
          var R = V(A);
          return new T(
            "Invalid " + S + " `" + w + "` of type " + ("`" + R + "` supplied to `" + E + "`, expected ") + ("`" + i + "`."),
            { expectedType: i }
          );
        }
        return null;
      }
      return k(c);
    }
    function L() {
      return k(s);
    }
    function I(i) {
      function c(b, x, E, S, w) {
        if (typeof i != "function")
          return new T("Property `" + w + "` of component `" + E + "` has invalid PropType notation inside arrayOf.");
        var _ = b[x];
        if (!Array.isArray(_)) {
          var A = W(_);
          return new T("Invalid " + S + " `" + w + "` of type " + ("`" + A + "` supplied to `" + E + "`, expected an array."));
        }
        for (var C = 0; C < _.length; C++) {
          var R = i(_, C, E, S, w + "[" + C + "]", n);
          if (R instanceof Error)
            return R;
        }
        return null;
      }
      return k(c);
    }
    function M() {
      function i(c, b, x, E, S) {
        var w = c[b];
        if (!f(w)) {
          var _ = W(w);
          return new T("Invalid " + E + " `" + S + "` of type " + ("`" + _ + "` supplied to `" + x + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(i);
    }
    function p() {
      function i(c, b, x, E, S) {
        var w = c[b];
        if (!e.isValidElementType(w)) {
          var _ = W(w);
          return new T("Invalid " + E + " `" + S + "` of type " + ("`" + _ + "` supplied to `" + x + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(i);
    }
    function q(i) {
      function c(b, x, E, S, w) {
        if (!(b[x] instanceof i)) {
          var _ = i.name || h, A = ge(b[x]);
          return new T("Invalid " + S + " `" + w + "` of type " + ("`" + A + "` supplied to `" + E + "`, expected ") + ("instance of `" + _ + "`."));
        }
        return null;
      }
      return k(c);
    }
    function K(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function c(b, x, E, S, w) {
        for (var _ = b[x], A = 0; A < i.length; A++)
          if (j(_, i[A]))
            return null;
        var C = JSON.stringify(i, function(Y, y) {
          var G = V(y);
          return G === "symbol" ? String(y) : y;
        });
        return new T("Invalid " + S + " `" + w + "` of value `" + String(_) + "` " + ("supplied to `" + E + "`, expected one of " + C + "."));
      }
      return k(c);
    }
    function te(i) {
      function c(b, x, E, S, w) {
        if (typeof i != "function")
          return new T("Property `" + w + "` of component `" + E + "` has invalid PropType notation inside objectOf.");
        var _ = b[x], A = W(_);
        if (A !== "object")
          return new T("Invalid " + S + " `" + w + "` of type " + ("`" + A + "` supplied to `" + E + "`, expected an object."));
        for (var C in _)
          if (r(_, C)) {
            var R = i(_, C, E, S, w + "." + C, n);
            if (R instanceof Error)
              return R;
          }
        return null;
      }
      return k(c);
    }
    function Ee(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var c = 0; c < i.length; c++) {
        var b = i[c];
        if (typeof b != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(b) + " at index " + c + "."
          ), s;
      }
      function x(E, S, w, _, A) {
        for (var C = [], R = 0; R < i.length; R++) {
          var Y = i[R], y = Y(E, S, w, _, A, n);
          if (y == null)
            return null;
          y.data && r(y.data, "expectedType") && C.push(y.data.expectedType);
        }
        var G = C.length > 0 ? ", expected one of type [" + C.join(", ") + "]" : "";
        return new T("Invalid " + _ + " `" + A + "` supplied to " + ("`" + w + "`" + G + "."));
      }
      return k(x);
    }
    function Ae() {
      function i(c, b, x, E, S) {
        return H(c[b]) ? null : new T("Invalid " + E + " `" + S + "` supplied to " + ("`" + x + "`, expected a ReactNode."));
      }
      return k(i);
    }
    function ne(i, c, b, x, E) {
      return new T(
        (i || "React class") + ": " + c + " type `" + b + "." + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + E + "`."
      );
    }
    function me(i) {
      function c(b, x, E, S, w) {
        var _ = b[x], A = W(_);
        if (A !== "object")
          return new T("Invalid " + S + " `" + w + "` of type `" + A + "` " + ("supplied to `" + E + "`, expected `object`."));
        for (var C in i) {
          var R = i[C];
          if (typeof R != "function")
            return ne(E, S, w, C, V(R));
          var Y = R(_, C, E, S, w + "." + C, n);
          if (Y)
            return Y;
        }
        return null;
      }
      return k(c);
    }
    function Oe(i) {
      function c(b, x, E, S, w) {
        var _ = b[x], A = W(_);
        if (A !== "object")
          return new T("Invalid " + S + " `" + w + "` of type `" + A + "` " + ("supplied to `" + E + "`, expected `object`."));
        var C = t({}, b[x], i);
        for (var R in C) {
          var Y = i[R];
          if (r(i, R) && typeof Y != "function")
            return ne(E, S, w, R, V(Y));
          if (!Y)
            return new T(
              "Invalid " + S + " `" + w + "` key `" + R + "` supplied to `" + E + "`.\nBad object: " + JSON.stringify(b[x], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(i), null, "  ")
            );
          var y = Y(_, R, E, S, w + "." + R, n);
          if (y)
            return y;
        }
        return null;
      }
      return k(c);
    }
    function H(i) {
      switch (typeof i) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !i;
        case "object":
          if (Array.isArray(i))
            return i.every(H);
          if (i === null || f(i))
            return !0;
          var c = g(i);
          if (c) {
            var b = c.call(i), x;
            if (c !== i.entries) {
              for (; !(x = b.next()).done; )
                if (!H(x.value))
                  return !1;
            } else
              for (; !(x = b.next()).done; ) {
                var E = x.value;
                if (E && !H(E[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function pe(i, c) {
      return i === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function W(i) {
      var c = typeof i;
      return Array.isArray(i) ? "array" : i instanceof RegExp ? "object" : pe(c, i) ? "symbol" : c;
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
    function ce(i) {
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
    function ge(i) {
      return !i.constructor || !i.constructor.name ? h : i.constructor.name;
    }
    return P.checkPropTypes = a, P.resetWarningCache = a.resetWarningCache, P.PropTypes = P, P;
  }, Qe;
}
var et, en;
function kr() {
  if (en) return et;
  en = 1;
  var e = /* @__PURE__ */ _t();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, et = function() {
    function r(s, f, m, u, l, g) {
      if (g !== e) {
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
  }, et;
}
var tn;
function Cr() {
  if (tn) return Me.exports;
  if (tn = 1, process.env.NODE_ENV !== "production") {
    var e = Mn(), t = !0;
    Me.exports = /* @__PURE__ */ _r()(e.isElement, t);
  } else
    Me.exports = /* @__PURE__ */ kr()();
  return Me.exports;
}
var Rr = /* @__PURE__ */ Cr();
const O = /* @__PURE__ */ jn(Rr);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Ir(e, t, n) {
  return (t = jr(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function nn(e, t) {
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
    t % 2 ? nn(Object(n), !0).forEach(function(r) {
      Ir(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Nr(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jr(e) {
  var t = Nr(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const rn = () => {
};
let kt = {}, Dn = {}, Ln = null, zn = {
  mark: rn,
  measure: rn
};
try {
  typeof window < "u" && (kt = window), typeof document < "u" && (Dn = document), typeof MutationObserver < "u" && (Ln = MutationObserver), typeof performance < "u" && (zn = performance);
} catch {
}
const {
  userAgent: an = ""
} = kt.navigator || {}, ie = kt, z = Dn, on = Ln, De = zn;
ie.document;
const ee = !!z.documentElement && !!z.head && typeof z.addEventListener == "function" && typeof z.createElement == "function", Yn = ~an.indexOf("MSIE") || ~an.indexOf("Trident/");
var Mr = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Fr = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, $n = {
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
}, Dr = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Wn = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], $ = "classic", qe = "duotone", Lr = "sharp", zr = "sharp-duotone", Un = [$, qe, Lr, zr], Yr = {
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
}, $r = {
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
}, Wr = /* @__PURE__ */ new Map([["classic", {
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
}]]), Ur = {
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
}, qr = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], sn = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Hr = ["kit"], Vr = {
  kit: {
    "fa-kit": "fak"
  }
}, Gr = ["fak", "fakd"], Xr = {
  kit: {
    fak: "fa-kit"
  }
}, fn = {
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
}, Br = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Jr = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Kr = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Zr = {
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
}, Qr = {
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
}, ea = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], lt = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Br, ...ea], ta = ["solid", "regular", "light", "thin", "duotone", "brands"], qn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], na = qn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ra = [...Object.keys(Qr), ...ta, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Le.GROUP, Le.SWAP_OPACITY, Le.PRIMARY, Le.SECONDARY].concat(qn.map((e) => "".concat(e, "x"))).concat(na.map((e) => "w-".concat(e))), aa = {
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
const Z = "___FONT_AWESOME___", ut = 16, Hn = "fa", Vn = "svg-inline--fa", ue = "data-fa-i2svg", dt = "data-fa-pseudo-element", oa = "data-fa-pseudo-element-pending", Ct = "data-prefix", Rt = "data-icon", cn = "fontawesome-i2svg", ia = "async", sa = ["HTML", "HEAD", "STYLE", "SCRIPT"], Gn = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Re(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[$];
    }
  });
}
const Xn = d({}, $n);
Xn[$] = d(d(d(d({}, {
  "fa-duotone": "duotone"
}), $n[$]), sn.kit), sn["kit-duotone"]);
const fa = Re(Xn), mt = d({}, Ur);
mt[$] = d(d(d(d({}, {
  duotone: "fad"
}), mt[$]), fn.kit), fn["kit-duotone"]);
const ln = Re(mt), pt = d({}, ct);
pt[$] = d(d({}, pt[$]), Xr.kit);
const It = Re(pt), gt = d({}, Zr);
gt[$] = d(d({}, gt[$]), Vr.kit);
Re(gt);
const ca = Mr, Bn = "fa-layers-text", la = Fr, ua = d({}, Yr);
Re(ua);
const da = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], tt = Dr, ma = [...Hr, ...ra], we = ie.FontAwesomeConfig || {};
function pa(e) {
  var t = z.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function ga(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
z && typeof z.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = ga(pa(n));
  a != null && (we[r] = a);
});
const Jn = {
  styleDefault: "solid",
  familyDefault: $,
  cssPrefix: Hn,
  replacementClass: Vn,
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
const ve = d(d({}, Jn), we);
ve.autoReplaceSvg || (ve.observeMutations = !1);
const v = {};
Object.keys(Jn).forEach((e) => {
  Object.defineProperty(v, e, {
    enumerable: !0,
    set: function(t) {
      ve[e] = t, _e.forEach((n) => n(v));
    },
    get: function() {
      return ve[e];
    }
  });
});
Object.defineProperty(v, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    ve.cssPrefix = e, _e.forEach((t) => t(v));
  },
  get: function() {
    return ve.cssPrefix;
  }
});
ie.FontAwesomeConfig = v;
const _e = [];
function ha(e) {
  return _e.push(e), () => {
    _e.splice(_e.indexOf(e), 1);
  };
}
const re = ut, B = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ya(e) {
  if (!e || !ee)
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
const ba = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ke() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += ba[Math.random() * 62 | 0];
  return t;
}
function xe(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Nt(e) {
  return e.classList ? xe(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Kn(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function va(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Kn(e[n]), '" '), "").trim();
}
function He(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function jt(e) {
  return e.size !== B.size || e.x !== B.x || e.y !== B.y || e.rotate !== B.rotate || e.flipX || e.flipY;
}
function xa(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), f = "rotate(".concat(t.rotate, " 0 0)"), m = {
    transform: "".concat(o, " ").concat(s, " ").concat(f)
  }, u = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: m,
    path: u
  };
}
function Ea(e) {
  let {
    transform: t,
    width: n = ut,
    height: r = ut,
    startCentered: a = !1
  } = e, o = "";
  return a && Yn ? o += "translate(".concat(t.x / re - n / 2, "em, ").concat(t.y / re - r / 2, "em) ") : a ? o += "translate(calc(-50% + ".concat(t.x / re, "em), calc(-50% + ").concat(t.y / re, "em)) ") : o += "translate(".concat(t.x / re, "em, ").concat(t.y / re, "em) "), o += "scale(".concat(t.size / re * (t.flipX ? -1 : 1), ", ").concat(t.size / re * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var Aa = `:root, :host {
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
function Zn() {
  const e = Hn, t = Vn, n = v.cssPrefix, r = v.replacementClass;
  let a = Aa;
  if (n !== e || r !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), f = new RegExp("\\.".concat(t), "g");
    a = a.replace(o, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(f, ".".concat(r));
  }
  return a;
}
let un = !1;
function nt() {
  v.autoAddCss && !un && (ya(Zn()), un = !0);
}
var Oa = {
  mixout() {
    return {
      dom: {
        css: Zn,
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
const Q = ie || {};
Q[Z] || (Q[Z] = {});
Q[Z].styles || (Q[Z].styles = {});
Q[Z].hooks || (Q[Z].hooks = {});
Q[Z].shims || (Q[Z].shims = []);
var J = Q[Z];
const Qn = [], er = function() {
  z.removeEventListener("DOMContentLoaded", er), $e = 1, Qn.map((e) => e());
};
let $e = !1;
ee && ($e = (z.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(z.readyState), $e || z.addEventListener("DOMContentLoaded", er));
function Pa(e) {
  ee && ($e ? setTimeout(e, 0) : Qn.push(e));
}
function Ie(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Kn(e) : "<".concat(t, " ").concat(va(n), ">").concat(r.map(Ie).join(""), "</").concat(t, ">");
}
function dn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var rt = function(t, n, r, a) {
  var o = Object.keys(t), s = o.length, f = n, m, u, l;
  for (r === void 0 ? (m = 1, l = t[o[0]]) : (m = 0, l = r); m < s; m++)
    u = o[m], l = f(l, t[u], u, t);
  return l;
};
function Sa(e) {
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
function ht(e) {
  const t = Sa(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Ta(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function mn(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function yt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = mn(t);
  typeof J.hooks.addPack == "function" && !r ? J.hooks.addPack(e, mn(t)) : J.styles[e] = d(d({}, J.styles[e] || {}), a), e === "fas" && yt("fa", t);
}
const {
  styles: Ce,
  shims: wa
} = J, tr = Object.keys(It), _a = tr.reduce((e, t) => (e[t] = Object.keys(It[t]), e), {});
let Mt = null, nr = {}, rr = {}, ar = {}, or = {}, ir = {};
function ka(e) {
  return ~ma.indexOf(e);
}
function Ca(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !ka(a) ? a : null;
}
const sr = () => {
  const e = (r) => rt(Ce, (a, o, s) => (a[s] = rt(o, r, {}), a), {});
  nr = e((r, a, o) => (a[3] && (r[a[3]] = o), a[2] && a[2].filter((f) => typeof f == "number").forEach((f) => {
    r[f.toString(16)] = o;
  }), r)), rr = e((r, a, o) => (r[o] = o, a[2] && a[2].filter((f) => typeof f == "string").forEach((f) => {
    r[f] = o;
  }), r)), ir = e((r, a, o) => {
    const s = a[2];
    return r[o] = o, s.forEach((f) => {
      r[f] = o;
    }), r;
  });
  const t = "far" in Ce || v.autoFetchSvg, n = rt(wa, (r, a) => {
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
  ar = n.names, or = n.unicodes, Mt = Ve(v.styleDefault, {
    family: v.familyDefault
  });
};
ha((e) => {
  Mt = Ve(e.styleDefault, {
    family: v.familyDefault
  });
});
sr();
function Ft(e, t) {
  return (nr[e] || {})[t];
}
function Ra(e, t) {
  return (rr[e] || {})[t];
}
function le(e, t) {
  return (ir[e] || {})[t];
}
function fr(e) {
  return ar[e] || {
    prefix: null,
    iconName: null
  };
}
function Ia(e) {
  const t = or[e], n = Ft("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function se() {
  return Mt;
}
const cr = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Na(e) {
  let t = $;
  const n = tr.reduce((r, a) => (r[a] = "".concat(v.cssPrefix, "-").concat(a), r), {});
  return Un.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => _a[r].includes(a))) && (t = r);
  }), t;
}
function Ve(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = $
  } = t, r = fa[n][e];
  if (n === qe && !e)
    return "fad";
  const a = ln[n][e] || ln[n][r], o = e in J.styles ? e : null;
  return a || o || null;
}
function ja(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = Ca(v.cssPrefix, r);
    a ? n = a : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function pn(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function Ge(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const a = lt.concat(Jr), o = pn(e.filter((g) => a.includes(g))), s = pn(e.filter((g) => !lt.includes(g))), f = o.filter((g) => (r = g, !Wn.includes(g))), [m = null] = f, u = Na(o), l = d(d({}, ja(s)), {}, {
    prefix: Ve(m, {
      family: u
    })
  });
  return d(d(d({}, l), La({
    values: e,
    family: u,
    styles: Ce,
    config: v,
    canonical: l,
    givenPrefix: r
  })), Ma(n, r, l));
}
function Ma(e, t, n) {
  let {
    prefix: r,
    iconName: a
  } = n;
  if (e || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  const o = t === "fa" ? fr(a) : {}, s = le(r, a);
  return a = o.iconName || s || a, r = o.prefix || r, r === "far" && !Ce.far && Ce.fas && !v.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const Fa = Un.filter((e) => e !== $ || e !== qe), Da = Object.keys(ct).filter((e) => e !== $).map((e) => Object.keys(ct[e])).flat();
function La(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: o = {},
    config: s = {}
  } = e, f = n === qe, m = t.includes("fa-duotone") || t.includes("fad"), u = s.familyDefault === "duotone", l = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!f && (m || u || l) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Fa.includes(n) && (Object.keys(o).find((h) => Da.includes(h)) || s.autoFetchSvg)) {
    const h = Wr.get(n).defaultShortPrefixId;
    r.prefix = h, r.iconName = le(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = se() || "fas"), r;
}
class za {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((o) => {
      this.definitions[o] = d(d({}, this.definitions[o] || {}), a[o]), yt(o, a[o]);
      const s = It[$][o];
      s && yt(s, a[o]), sr();
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
      t[o] || (t[o] = {}), m.length > 0 && m.forEach((u) => {
        typeof u == "string" && (t[o][u] = f);
      }), t[o][s] = f;
    }), t;
  }
}
let gn = [], he = {};
const be = {}, Ya = Object.keys(be);
function $a(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return gn = e, he = {}, Object.keys(be).forEach((r) => {
    Ya.indexOf(r) === -1 && delete be[r];
  }), gn.forEach((r) => {
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
    r.provides && r.provides(be);
  }), n;
}
function bt(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (he[e] || []).forEach((s) => {
    t = s.apply(null, [t, ...r]);
  }), t;
}
function de(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (he[e] || []).forEach((o) => {
    o.apply(null, n);
  });
}
function fe() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return be[e] ? be[e].apply(null, t) : void 0;
}
function vt(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || se();
  if (t)
    return t = le(n, t) || t, dn(lr.definitions, n, t) || dn(J.styles, n, t);
}
const lr = new za(), Wa = () => {
  v.autoReplaceSvg = !1, v.observeMutations = !1, de("noAuto");
}, Ua = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return ee ? (de("beforeI2svg", e), fe("pseudoElements2svg", e), fe("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    v.autoReplaceSvg === !1 && (v.autoReplaceSvg = !0), v.observeMutations = !0, Pa(() => {
      Ha({
        autoReplaceSvgRoot: t
      }), de("watch", e);
    });
  }
}, qa = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: le(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Ve(e[0]);
      return {
        prefix: n,
        iconName: le(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(v.cssPrefix, "-")) > -1 || e.match(ca))) {
      const t = Ge(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || se(),
        iconName: le(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = se();
      return {
        prefix: t,
        iconName: le(t, e) || e
      };
    }
  }
}, U = {
  noAuto: Wa,
  config: v,
  dom: Ua,
  parse: qa,
  library: lr,
  findIconDefinition: vt,
  toHtml: Ie
}, Ha = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = z
  } = e;
  (Object.keys(J.styles).length > 0 || v.autoFetchSvg) && ee && v.autoReplaceSvg && U.dom.i2svg({
    node: t
  });
};
function Xe(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Ie(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!ee) return;
      const n = z.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Va(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: o,
    transform: s
  } = e;
  if (jt(s) && n.found && !r.found) {
    const {
      width: f,
      height: m
    } = n, u = {
      x: f / m / 2,
      y: 0.5
    };
    a.style = He(d(d({}, o), {}, {
      "transform-origin": "".concat(u.x + s.x / 16, "em ").concat(u.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Ga(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: a,
    symbol: o
  } = e;
  const s = o === !0 ? "".concat(t, "-").concat(v.cssPrefix, "-").concat(n) : o;
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
function Dt(e) {
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
    titleId: u,
    extra: l,
    watchable: g = !1
  } = e, {
    width: h,
    height: P
  } = n.found ? n : t, j = Gr.includes(r), T = [v.replacementClass, a ? "".concat(v.cssPrefix, "-").concat(a) : ""].filter((p) => l.classes.indexOf(p) === -1).filter((p) => p !== "" || !!p).concat(l.classes).join(" ");
  let k = {
    children: [],
    attributes: d(d({}, l.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: T,
      role: l.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(h, " ").concat(P)
    })
  };
  const N = j && !~l.classes.indexOf("fa-fw") ? {
    width: "".concat(h / P * 16 * 0.0625, "em")
  } : {};
  g && (k.attributes[ue] = ""), f && (k.children.push({
    tag: "title",
    attributes: {
      id: k.attributes["aria-labelledby"] || "title-".concat(u || ke())
    },
    children: [f]
  }), delete k.attributes.title);
  const L = d(d({}, k), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: m,
    transform: o,
    symbol: s,
    styles: d(d({}, N), l.styles)
  }), {
    children: I,
    attributes: M
  } = n.found && t.found ? fe("generateAbstractMask", L) || {
    children: [],
    attributes: {}
  } : fe("generateAbstractIcon", L) || {
    children: [],
    attributes: {}
  };
  return L.children = I, L.attributes = M, s ? Ga(L) : Va(L);
}
function hn(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: a,
    title: o,
    extra: s,
    watchable: f = !1
  } = e, m = d(d(d({}, s.attributes), o ? {
    title: o
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  f && (m[ue] = "");
  const u = d({}, s.styles);
  jt(a) && (u.transform = Ea({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), u["-webkit-transform"] = u.transform);
  const l = He(u);
  l.length > 0 && (m.style = l);
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
function Xa(e) {
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
  styles: at
} = J;
function xt(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(v.cssPrefix, "-").concat(tt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(v.cssPrefix, "-").concat(tt.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(v.cssPrefix, "-").concat(tt.PRIMARY),
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
const Ba = {
  found: !1,
  width: 512,
  height: 512
};
function Ja(e, t) {
  !Gn && !v.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Et(e, t) {
  let n = t;
  return t === "fa" && v.styleDefault !== null && (t = se()), new Promise((r, a) => {
    if (n === "fa") {
      const o = fr(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && at[t] && at[t][e]) {
      const o = at[t][e];
      return r(xt(o));
    }
    Ja(e, t), r(d(d({}, Ba), {}, {
      icon: v.showMissingIcons && e ? fe("missingIconAbstract") || {} : {}
    }));
  });
}
const yn = () => {
}, At = v.measurePerformance && De && De.mark && De.measure ? De : {
  mark: yn,
  measure: yn
}, Te = 'FA "6.7.2"', Ka = (e) => (At.mark("".concat(Te, " ").concat(e, " begins")), () => ur(e)), ur = (e) => {
  At.mark("".concat(Te, " ").concat(e, " ends")), At.measure("".concat(Te, " ").concat(e), "".concat(Te, " ").concat(e, " begins"), "".concat(Te, " ").concat(e, " ends"));
};
var Lt = {
  begin: Ka,
  end: ur
};
const ze = () => {
};
function bn(e) {
  return typeof (e.getAttribute ? e.getAttribute(ue) : null) == "string";
}
function Za(e) {
  const t = e.getAttribute ? e.getAttribute(Ct) : null, n = e.getAttribute ? e.getAttribute(Rt) : null;
  return t && n;
}
function Qa(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(v.replacementClass);
}
function eo() {
  return v.autoReplaceSvg === !0 ? Ye.replace : Ye[v.autoReplaceSvg] || Ye.replace;
}
function to(e) {
  return z.createElementNS("http://www.w3.org/2000/svg", e);
}
function no(e) {
  return z.createElement(e);
}
function dr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? to : no
  } = t;
  if (typeof e == "string")
    return z.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  }), (e.children || []).forEach(function(o) {
    r.appendChild(dr(o, {
      ceFn: n
    }));
  }), r;
}
function ro(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Ye = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(dr(n), t);
      }), t.getAttribute(ue) === null && v.keepOriginalSource) {
        let n = z.createComment(ro(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Nt(t).indexOf(v.replacementClass))
      return Ye.replace(e);
    const r = new RegExp("".concat(v.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const o = n[0].attributes.class.split(" ").reduce((s, f) => (f === v.replacementClass || f.match(r) ? s.toSvg.push(f) : s.toNode.push(f), s), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    const a = n.map((o) => Ie(o)).join(`
`);
    t.setAttribute(ue, ""), t.innerHTML = a;
  }
};
function vn(e) {
  e();
}
function mr(e, t) {
  const n = typeof t == "function" ? t : ze;
  if (e.length === 0)
    n();
  else {
    let r = vn;
    v.mutateApproach === ia && (r = ie.requestAnimationFrame || vn), r(() => {
      const a = eo(), o = Lt.begin("mutate");
      e.map(a), o(), n();
    });
  }
}
let zt = !1;
function pr() {
  zt = !0;
}
function Ot() {
  zt = !1;
}
let We = null;
function xn(e) {
  if (!on || !v.observeMutations)
    return;
  const {
    treeCallback: t = ze,
    nodeCallback: n = ze,
    pseudoElementsCallback: r = ze,
    observeMutationsRoot: a = z
  } = e;
  We = new on((o) => {
    if (zt) return;
    const s = se();
    xe(o).forEach((f) => {
      if (f.type === "childList" && f.addedNodes.length > 0 && !bn(f.addedNodes[0]) && (v.searchPseudoElements && r(f.target), t(f.target)), f.type === "attributes" && f.target.parentNode && v.searchPseudoElements && r(f.target.parentNode), f.type === "attributes" && bn(f.target) && ~da.indexOf(f.attributeName))
        if (f.attributeName === "class" && Za(f.target)) {
          const {
            prefix: m,
            iconName: u
          } = Ge(Nt(f.target));
          f.target.setAttribute(Ct, m || s), u && f.target.setAttribute(Rt, u);
        } else Qa(f.target) && n(f.target);
    });
  }), ee && We.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function ao() {
  We && We.disconnect();
}
function oo(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const o = a.split(":"), s = o[0], f = o.slice(1);
    return s && f.length > 0 && (r[s] = f.join(":").trim()), r;
  }, {})), n;
}
function io(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = Ge(Nt(e));
  return a.prefix || (a.prefix = se()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Ra(a.prefix, e.innerText) || Ft(a.prefix, ht(e.innerText))), !a.iconName && v.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function so(e) {
  const t = xe(e.attributes).reduce((a, o) => (a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return v.autoA11y && (n ? t["aria-labelledby"] = "".concat(v.replacementClass, "-title-").concat(r || ke()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function fo() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: B,
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
function En(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: a
  } = io(e), o = so(e), s = bt("parseNodeAttributes", {}, e);
  let f = t.styleParser ? oo(e) : [];
  return d({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: B,
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
  styles: co
} = J;
function gr(e) {
  const t = v.autoReplaceSvg === "nest" ? En(e, {
    styleParser: !1
  }) : En(e);
  return ~t.extra.classes.indexOf(Bn) ? fe("generateLayersText", e, t) : fe("generateSvgReplacementMutation", e, t);
}
function lo() {
  return [...qr, ...lt];
}
function An(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ee) return Promise.resolve();
  const n = z.documentElement.classList, r = (l) => n.add("".concat(cn, "-").concat(l)), a = (l) => n.remove("".concat(cn, "-").concat(l)), o = v.autoFetchSvg ? lo() : Wn.concat(Object.keys(co));
  o.includes("fa") || o.push("fa");
  const s = [".".concat(Bn, ":not([").concat(ue, "])")].concat(o.map((l) => ".".concat(l, ":not([").concat(ue, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let f = [];
  try {
    f = xe(e.querySelectorAll(s));
  } catch {
  }
  if (f.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const m = Lt.begin("onTree"), u = f.reduce((l, g) => {
    try {
      const h = gr(g);
      h && l.push(h);
    } catch (h) {
      Gn || h.name === "MissingIcon" && console.error(h);
    }
    return l;
  }, []);
  return new Promise((l, g) => {
    Promise.all(u).then((h) => {
      mr(h, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), m(), l();
      });
    }).catch((h) => {
      m(), g(h);
    });
  });
}
function uo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  gr(e).then((n) => {
    n && mr([n], t);
  });
}
function mo(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : vt(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : vt(a || {})), e(r, d(d({}, n), {}, {
      mask: a
    }));
  };
}
const po = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = B,
    symbol: r = !1,
    mask: a = null,
    maskId: o = null,
    title: s = null,
    titleId: f = null,
    classes: m = [],
    attributes: u = {},
    styles: l = {}
  } = t;
  if (!e) return;
  const {
    prefix: g,
    iconName: h,
    icon: P
  } = e;
  return Xe(d({
    type: "icon"
  }, e), () => (de("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), v.autoA11y && (s ? u["aria-labelledby"] = "".concat(v.replacementClass, "-title-").concat(f || ke()) : (u["aria-hidden"] = "true", u.focusable = "false")), Dt({
    icons: {
      main: xt(P),
      mask: a ? xt(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: g,
    iconName: h,
    transform: d(d({}, B), n),
    symbol: r,
    title: s,
    maskId: o,
    titleId: f,
    extra: {
      attributes: u,
      styles: l,
      classes: m
    }
  })));
};
var go = {
  mixout() {
    return {
      icon: mo(po)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = An, e.nodeCallback = uo, e;
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
      return An(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: a,
        titleId: o,
        prefix: s,
        transform: f,
        symbol: m,
        mask: u,
        maskId: l,
        extra: g
      } = n;
      return new Promise((h, P) => {
        Promise.all([Et(r, s), u.iconName ? Et(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((j) => {
          let [T, k] = j;
          h([t, Dt({
            icons: {
              main: T,
              mask: k
            },
            prefix: s,
            iconName: r,
            transform: f,
            symbol: m,
            maskId: l,
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
      const f = He(s);
      f.length > 0 && (r.style = f);
      let m;
      return jt(o) && (m = fe("generateAbstractTransformGrouping", {
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
}, ho = {
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
          de("beforeDOMElementCreation", {
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
              class: ["".concat(v.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, yo = {
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
        }, () => (de("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Xa({
          content: e.toString(),
          title: n,
          extra: {
            attributes: a,
            styles: o,
            classes: ["".concat(v.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, bo = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = B,
          title: r = null,
          classes: a = [],
          attributes: o = {},
          styles: s = {}
        } = t;
        return Xe({
          type: "text",
          content: e
        }, () => (de("beforeDOMElementCreation", {
          content: e,
          params: t
        }), hn({
          content: e,
          transform: d(d({}, B), n),
          title: r,
          extra: {
            attributes: o,
            styles: s,
            classes: ["".concat(v.cssPrefix, "-layers-text"), ...a]
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
      if (Yn) {
        const m = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        s = u.width / m, f = u.height / m;
      }
      return v.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, hn({
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
const vo = new RegExp('"', "ug"), On = [1105920, 1112319], Pn = d(d(d(d({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), $r), aa), Kr), Pt = Object.keys(Pn).reduce((e, t) => (e[t.toLowerCase()] = Pn[t], e), {}), xo = Object.keys(Pt).reduce((e, t) => {
  const n = Pt[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function Eo(e) {
  const t = e.replace(vo, ""), n = Ta(t, 0), r = n >= On[0] && n <= On[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: ht(a ? t[0] : t),
    isSecondary: r || a
  };
}
function Ao(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (Pt[n] || {})[a] || xo[n];
}
function Sn(e, t) {
  const n = "".concat(oa).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const s = xe(e.children).filter((h) => h.getAttribute(dt) === t)[0], f = ie.getComputedStyle(e, t), m = f.getPropertyValue("font-family"), u = m.match(la), l = f.getPropertyValue("font-weight"), g = f.getPropertyValue("content");
    if (s && !u)
      return e.removeChild(s), r();
    if (u && g !== "none" && g !== "") {
      const h = f.getPropertyValue("content");
      let P = Ao(m, l);
      const {
        value: j,
        isSecondary: T
      } = Eo(h), k = u[0].startsWith("FontAwesome");
      let N = Ft(P, j), L = N;
      if (k) {
        const I = Ia(j);
        I.iconName && I.prefix && (N = I.iconName, P = I.prefix);
      }
      if (N && !T && (!s || s.getAttribute(Ct) !== P || s.getAttribute(Rt) !== L)) {
        e.setAttribute(n, L), s && e.removeChild(s);
        const I = fo(), {
          extra: M
        } = I;
        M.attributes[dt] = t, Et(N, P).then((p) => {
          const q = Dt(d(d({}, I), {}, {
            icons: {
              main: p,
              mask: cr()
            },
            prefix: P,
            iconName: L,
            extra: M,
            watchable: !0
          })), K = z.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(K, e.firstChild) : e.appendChild(K), K.outerHTML = q.map((te) => Ie(te)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function Oo(e) {
  return Promise.all([Sn(e, "::before"), Sn(e, "::after")]);
}
function Po(e) {
  return e.parentNode !== document.head && !~sa.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(dt) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Tn(e) {
  if (ee)
    return new Promise((t, n) => {
      const r = xe(e.querySelectorAll("*")).filter(Po).map(Oo), a = Lt.begin("searchPseudoElements");
      pr(), Promise.all(r).then(() => {
        a(), Ot(), t();
      }).catch(() => {
        a(), Ot(), n();
      });
    });
}
var So = {
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
        node: n = z
      } = t;
      v.searchPseudoElements && Tn(n);
    };
  }
};
let wn = !1;
var To = {
  mixout() {
    return {
      dom: {
        unwatch() {
          pr(), wn = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        xn(bt("mutationObserverCallbacks", {}));
      },
      noAuto() {
        ao();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        wn ? Ot() : xn(bt("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const _n = (e) => {
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
var wo = {
  mixout() {
    return {
      parse: {
        transform: (e) => _n(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = _n(n)), e;
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
      }, f = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), m = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), u = "rotate(".concat(r.rotate, " 0 0)"), l = {
        transform: "".concat(f, " ").concat(m, " ").concat(u)
      }, g = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, h = {
        outer: s,
        inner: l,
        path: g
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
const ot = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function kn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function _o(e) {
  return e.tag === "g" ? e.children : [e];
}
var ko = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Ge(n.split(" ").map((a) => a.trim())) : cr();
        return r.prefix || (r.prefix = se()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
        icon: u
      } = a, {
        width: l,
        icon: g
      } = o, h = xa({
        transform: f,
        containerWidth: l,
        iconWidth: m
      }), P = {
        tag: "rect",
        attributes: d(d({}, ot), {}, {
          fill: "white"
        })
      }, j = u.children ? {
        children: u.children.map(kn)
      } : {}, T = {
        tag: "g",
        attributes: d({}, h.inner),
        children: [kn(d({
          tag: u.tag,
          attributes: d(d({}, u.attributes), h.path)
        }, j))]
      }, k = {
        tag: "g",
        attributes: d({}, h.outer),
        children: [T]
      }, N = "mask-".concat(s || ke()), L = "clip-".concat(s || ke()), I = {
        tag: "mask",
        attributes: d(d({}, ot), {}, {
          id: N,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [P, k]
      }, M = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: L
          },
          children: _o(g)
        }, I]
      };
      return n.push(M, {
        tag: "rect",
        attributes: d({
          fill: "currentColor",
          "clip-path": "url(#".concat(L, ")"),
          mask: "url(#".concat(N, ")")
        }, ot)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Co = {
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
}, Ro = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Io = [Oa, go, ho, yo, bo, So, To, wo, ko, Co, Ro];
$a(Io, {
  mixoutsTo: U
});
U.noAuto;
U.config;
U.library;
U.dom;
const St = U.parse;
U.findIconDefinition;
U.toHtml;
const No = U.icon;
U.layer;
U.text;
U.counter;
function Cn(e, t) {
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
    t % 2 ? Cn(Object(n), !0).forEach(function(r) {
      ye(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Cn(Object(n)).forEach(function(r) {
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
function ye(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function jo(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Mo(e, t) {
  if (e == null) return {};
  var n = jo(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Tt(e) {
  return Fo(e) || Do(e) || Lo(e) || zo();
}
function Fo(e) {
  if (Array.isArray(e)) return wt(e);
}
function Do(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Lo(e, t) {
  if (e) {
    if (typeof e == "string") return wt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return wt(e, t);
  }
}
function wt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function zo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yo(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, o = e.bounce, s = e.shake, f = e.flash, m = e.spin, u = e.spinPulse, l = e.spinReverse, g = e.pulse, h = e.fixedWidth, P = e.inverse, j = e.border, T = e.listItem, k = e.flip, N = e.size, L = e.rotation, I = e.pull, M = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": o,
    "fa-shake": s,
    "fa-flash": f,
    "fa-spin": m,
    "fa-spin-reverse": l,
    "fa-spin-pulse": u,
    "fa-pulse": g,
    "fa-fw": h,
    "fa-inverse": P,
    "fa-border": j,
    "fa-li": T,
    "fa-flip": k === !0,
    "fa-flip-horizontal": k === "horizontal" || k === "both",
    "fa-flip-vertical": k === "vertical" || k === "both"
  }, ye(t, "fa-".concat(N), typeof N < "u" && N !== null), ye(t, "fa-rotate-".concat(L), typeof L < "u" && L !== null && L !== 0), ye(t, "fa-pull-".concat(I), typeof I < "u" && I !== null), ye(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(M).map(function(p) {
    return M[p] ? p : null;
  }).filter(function(p) {
    return p;
  });
}
function $o(e) {
  return e = e - 0, e === e;
}
function hr(e) {
  return $o(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Wo = ["style"];
function Uo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function qo(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = hr(n.slice(0, r)), o = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Uo(a)] = o : t[a] = o, t;
  }, {});
}
function yr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(m) {
    return yr(e, m);
  }), a = Object.keys(t.attributes || {}).reduce(function(m, u) {
    var l = t.attributes[u];
    switch (u) {
      case "class":
        m.attrs.className = l, delete t.attributes.class;
        break;
      case "style":
        m.attrs.style = qo(l);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? m.attrs[u.toLowerCase()] = l : m.attrs[hr(u)] = l;
    }
    return m;
  }, {
    attrs: {}
  }), o = n.style, s = o === void 0 ? {} : o, f = Mo(n, Wo);
  return a.attrs.style = X(X({}, a.attrs.style), s), e.apply(void 0, [t.tag, X(X({}, a.attrs), f)].concat(Tt(r)));
}
var br = !1;
try {
  br = process.env.NODE_ENV === "production";
} catch {
}
function Ho() {
  if (!br && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Rn(e) {
  if (e && Ue(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (St.icon)
    return St.icon(e);
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
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ye({}, e, t) : {};
}
var In = {
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
}, Yt = /* @__PURE__ */ oe.forwardRef(function(e, t) {
  var n = X(X({}, In), e), r = n.icon, a = n.mask, o = n.symbol, s = n.className, f = n.title, m = n.titleId, u = n.maskId, l = Rn(r), g = it("classes", [].concat(Tt(Yo(n)), Tt((s || "").split(" ")))), h = it("transform", typeof n.transform == "string" ? St.transform(n.transform) : n.transform), P = it("mask", Rn(a)), j = No(l, X(X(X(X({}, g), h), P), {}, {
    symbol: o,
    title: f,
    titleId: m,
    maskId: u
  }));
  if (!j)
    return Ho("Could not find icon", l), null;
  var T = j.abstract, k = {
    ref: t
  };
  return Object.keys(n).forEach(function(N) {
    In.hasOwnProperty(N) || (k[N] = n[N]);
  }), Vo(T[0], k);
});
Yt.displayName = "FontAwesomeIcon";
Yt.propTypes = {
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
var Vo = yr.bind(null, oe.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Go = {
  prefix: "fas",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]
}, Xo = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
};
var st = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Nn;
function Bo() {
  return Nn || (Nn = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var o = "", s = 0; s < arguments.length; s++) {
          var f = arguments[s];
          f && (o = a(o, r(f)));
        }
        return o;
      }
      function r(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return n.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var s = "";
        for (var f in o)
          t.call(o, f) && o[f] && (s = a(s, f));
        return s;
      }
      function a(o, s) {
        return s ? o ? o + " " + s : o + s : o;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(st)), st.exports;
}
var Jo = Bo();
const vr = /* @__PURE__ */ jn(Jo), Ko = ({
  children: e,
  summaryText: t,
  headingLevel: n = "h4",
  open: r = !1,
  type: a = "default",
  onToggle: o,
  ...s
}) => {
  const [f, m] = ft(r), u = xr(null), [l, g] = ft("0px"), h = n;
  Wt(() => {
    f && u.current ? g(`${u.current.scrollHeight}px`) : g("0px");
  }, [f]), Wt(() => {
    m(r);
  }, [r]);
  const P = () => {
    const T = !f;
    m(T), o && o(T);
  }, j = vr("accordion-item", {
    "accordion-item--bordered": a === "bordered",
    "accordion-item--open": f
  });
  return /* @__PURE__ */ ae.jsxs("div", { className: j, ...s, children: [
    /* @__PURE__ */ ae.jsxs(
      "button",
      {
        className: "accordion-button",
        "aria-expanded": f,
        type: "button",
        onClick: P,
        children: [
          /* @__PURE__ */ ae.jsx(h, { className: "accordion-summaryText", children: t }),
          /* @__PURE__ */ ae.jsx("span", { className: "accordion-icon", children: /* @__PURE__ */ ae.jsx(Yt, { icon: f ? Go : Xo }) })
        ]
      }
    ),
    /* @__PURE__ */ ae.jsx(
      "div",
      {
        className: "accordion-details-container",
        style: { height: l },
        "aria-hidden": !f,
        children: /* @__PURE__ */ ae.jsx("div", { className: "accordion-details", ref: u, children: e })
      }
    )
  ] });
};
Ko.propTypes = {
  /** Content to display when accordion is expanded */
  children: O.node.isRequired,
  /** Summary text displayed in the accordion header */
  summaryText: O.node.isRequired,
  /** Heading level for the accordion item */
  headingLevel: O.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  /** Whether the accordion item is initially expanded */
  open: O.bool,
  /** The variant style of the accordion item */
  type: O.oneOf(["default", "bordered"]),
  /** Callback when accordion item is toggled */
  onToggle: O.func
};
const Zo = ({
  children: e,
  type: t = "default",
  multiselectable: n = !1,
  className: r,
  ...a
}) => {
  const [o, s] = ft(() => {
    const l = [];
    return oe.Children.forEach(e, (g, h) => {
      oe.isValidElement(g) && g.props.open && l.push(h);
    }), l;
  }), f = (l, g) => {
    s((h) => n ? g ? [...h, l] : h.filter((P) => P !== l) : g ? [l] : []);
  }, m = vr("accordion", r, {
    "accordion--bordered": t === "bordered"
  }), u = oe.Children.map(e, (l, g) => oe.isValidElement(l) ? oe.cloneElement(l, {
    type: t,
    open: o.includes(g),
    onToggle: (h) => f(g, h)
  }) : l);
  return /* @__PURE__ */ ae.jsx(
    "div",
    {
      className: m,
      "data-allow-multiple": n,
      ...a,
      children: u
    }
  );
};
Zo.propTypes = {
  /** AccordionItem components */
  children: O.node.isRequired,
  /** The variant style of the accordion */
  type: O.oneOf(["default", "bordered"]),
  /** Whether multiple accordion items can be expanded at once */
  multiselectable: O.bool,
  /** Additional CSS class names */
  className: O.string
};
export {
  Zo as Accordion,
  Ko as AccordionItem,
  Zo as default
};
//# sourceMappingURL=index.js.map
