import Ct, { useState as Oe, useEffect as Se, useRef as Je } from "react";
function Fn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fe = { exports: {} }, Te = {};
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
function wr() {
  if (Vt) return Te;
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
  return Te.Fragment = t, Te.jsx = n, Te.jsxs = n, Te;
}
var Pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gt;
function Ar() {
  return Gt || (Gt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(i) {
      if (i == null) return null;
      if (typeof i == "function")
        return i.$$typeof === se ? null : i.displayName || i.name || null;
      if (typeof i == "string") return i;
      switch (i) {
        case P:
          return "Fragment";
        case j:
          return "Profiler";
        case T:
          return "StrictMode";
        case p:
          return "Suspense";
        case V:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof i == "object")
        switch (typeof i.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), i.$$typeof) {
          case C:
            return "Portal";
          case _:
            return (i.displayName || "Context") + ".Provider";
          case R:
            return (i._context.displayName || "Context") + ".Consumer";
          case D:
            var f = i.render;
            return i = i.displayName, i || (i = f.displayName || f.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
          case B:
            return f = i.displayName || null, f !== null ? f : e(i.type) || "Memo";
          case X:
            f = i._payload, i = i._init;
            try {
              return e(i(f));
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
        var f = !1;
      } catch {
        f = !0;
      }
      if (f) {
        f = console;
        var v = f.error, E = typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return v.call(
          f,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          E
        ), t(i);
      }
    }
    function r(i) {
      if (i === P) return "<>";
      if (typeof i == "object" && i !== null && i.$$typeof === X)
        return "<...>";
      try {
        var f = e(i);
        return f ? "<" + f + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var i = K.A;
      return i === null ? null : i.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(i) {
      if (le.call(i, "key")) {
        var f = Object.getOwnPropertyDescriptor(i, "key").get;
        if (f && f.isReactWarning) return !1;
      }
      return i.key !== void 0;
    }
    function l(i, f) {
      function v() {
        fe || (fe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          f
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(i, "key", {
        get: v,
        configurable: !0
      });
    }
    function m() {
      var i = e(this.type);
      return G[i] || (G[i] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), i = this.props.ref, i !== void 0 ? i : null;
    }
    function c(i, f, v, E, A, k, I, N) {
      return v = k.ref, i = {
        $$typeof: S,
        type: i,
        key: f,
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
        value: I
      }), Object.defineProperty(i, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    }
    function d(i, f, v, E, A, k, I, N) {
      var O = f.children;
      if (O !== void 0)
        if (E)
          if (ge(O)) {
            for (E = 0; E < O.length; E++)
              y(O[E]);
            Object.freeze && Object.freeze(O);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(O);
      if (le.call(f, "key")) {
        O = e(i);
        var M = Object.keys(f).filter(function(U) {
          return U !== "key";
        });
        E = 0 < M.length ? "{key: someKey, " + M.join(": ..., ") + ": ...}" : "{key: someKey}", Z[O + E] || (M = 0 < M.length ? "{" + M.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          E,
          O,
          M,
          O
        ), Z[O + E] = !0);
      }
      if (O = null, v !== void 0 && (n(v), O = "" + v), s(f) && (n(f.key), O = "" + f.key), "key" in f) {
        v = {};
        for (var F in f)
          F !== "key" && (v[F] = f[F]);
      } else v = f;
      return O && l(
        v,
        typeof i == "function" ? i.displayName || i.name || "Unknown" : i
      ), c(
        i,
        O,
        k,
        A,
        a(),
        v,
        I,
        N
      );
    }
    function y(i) {
      typeof i == "object" && i !== null && i.$$typeof === S && i._store && (i._store.validated = 1);
    }
    var b = Ct, S = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), se = Symbol.for("react.client.reference"), K = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, le = Object.prototype.hasOwnProperty, ge = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      "react-stack-bottom-frame": function(i) {
        return i();
      }
    };
    var fe, G = {}, g = b["react-stack-bottom-frame"].bind(
      b,
      o
    )(), Y = J(r(o)), Z = {};
    Pe.Fragment = P, Pe.jsx = function(i, f, v, E, A) {
      var k = 1e4 > K.recentlyCreatedOwnerStacks++;
      return d(
        i,
        f,
        v,
        !1,
        E,
        A,
        k ? Error("react-stack-top-frame") : g,
        k ? J(r(i)) : Y
      );
    }, Pe.jsxs = function(i, f, v, E, A) {
      var k = 1e4 > K.recentlyCreatedOwnerStacks++;
      return d(
        i,
        f,
        v,
        !0,
        E,
        A,
        k ? Error("react-stack-top-frame") : g,
        k ? J(r(i)) : Y
      );
    };
  }()), Pe;
}
var Ht;
function Or() {
  return Ht || (Ht = 1, process.env.NODE_ENV === "production" ? Fe.exports = wr() : Fe.exports = Ar()), Fe.exports;
}
var W = Or(), De = { exports: {} }, Le = { exports: {} }, L = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bt;
function Tr() {
  if (Bt) return L;
  Bt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, P = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function _(p) {
    if (typeof p == "object" && p !== null) {
      var V = p.$$typeof;
      switch (V) {
        case t:
          switch (p = p.type, p) {
            case m:
            case c:
            case r:
            case o:
            case a:
            case y:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case l:
                case d:
                case C:
                case S:
                case s:
                  return p;
                default:
                  return V;
              }
          }
        case n:
          return V;
      }
    }
  }
  function D(p) {
    return _(p) === c;
  }
  return L.AsyncMode = m, L.ConcurrentMode = c, L.ContextConsumer = l, L.ContextProvider = s, L.Element = t, L.ForwardRef = d, L.Fragment = r, L.Lazy = C, L.Memo = S, L.Portal = n, L.Profiler = o, L.StrictMode = a, L.Suspense = y, L.isAsyncMode = function(p) {
    return D(p) || _(p) === m;
  }, L.isConcurrentMode = D, L.isContextConsumer = function(p) {
    return _(p) === l;
  }, L.isContextProvider = function(p) {
    return _(p) === s;
  }, L.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, L.isForwardRef = function(p) {
    return _(p) === d;
  }, L.isFragment = function(p) {
    return _(p) === r;
  }, L.isLazy = function(p) {
    return _(p) === C;
  }, L.isMemo = function(p) {
    return _(p) === S;
  }, L.isPortal = function(p) {
    return _(p) === n;
  }, L.isProfiler = function(p) {
    return _(p) === o;
  }, L.isStrictMode = function(p) {
    return _(p) === a;
  }, L.isSuspense = function(p) {
    return _(p) === y;
  }, L.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === c || p === o || p === a || p === y || p === b || typeof p == "object" && p !== null && (p.$$typeof === C || p.$$typeof === S || p.$$typeof === s || p.$$typeof === l || p.$$typeof === d || p.$$typeof === T || p.$$typeof === j || p.$$typeof === R || p.$$typeof === P);
  }, L.typeOf = _, L;
}
var z = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xt;
function Pr() {
  return Xt || (Xt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, P = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function _(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === r || h === c || h === o || h === a || h === y || h === b || typeof h == "object" && h !== null && (h.$$typeof === C || h.$$typeof === S || h.$$typeof === s || h.$$typeof === l || h.$$typeof === d || h.$$typeof === T || h.$$typeof === j || h.$$typeof === R || h.$$typeof === P);
    }
    function D(h) {
      if (typeof h == "object" && h !== null) {
        var ee = h.$$typeof;
        switch (ee) {
          case t:
            var Me = h.type;
            switch (Me) {
              case m:
              case c:
              case r:
              case o:
              case a:
              case y:
                return Me;
              default:
                var qt = Me && Me.$$typeof;
                switch (qt) {
                  case l:
                  case d:
                  case C:
                  case S:
                  case s:
                    return qt;
                  default:
                    return ee;
                }
            }
          case n:
            return ee;
        }
      }
    }
    var p = m, V = c, B = l, X = s, Q = t, se = d, K = r, le = C, ge = S, J = n, fe = o, G = a, g = y, Y = !1;
    function Z(h) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), i(h) || D(h) === m;
    }
    function i(h) {
      return D(h) === c;
    }
    function f(h) {
      return D(h) === l;
    }
    function v(h) {
      return D(h) === s;
    }
    function E(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function A(h) {
      return D(h) === d;
    }
    function k(h) {
      return D(h) === r;
    }
    function I(h) {
      return D(h) === C;
    }
    function N(h) {
      return D(h) === S;
    }
    function O(h) {
      return D(h) === n;
    }
    function M(h) {
      return D(h) === o;
    }
    function F(h) {
      return D(h) === a;
    }
    function U(h) {
      return D(h) === y;
    }
    z.AsyncMode = p, z.ConcurrentMode = V, z.ContextConsumer = B, z.ContextProvider = X, z.Element = Q, z.ForwardRef = se, z.Fragment = K, z.Lazy = le, z.Memo = ge, z.Portal = J, z.Profiler = fe, z.StrictMode = G, z.Suspense = g, z.isAsyncMode = Z, z.isConcurrentMode = i, z.isContextConsumer = f, z.isContextProvider = v, z.isElement = E, z.isForwardRef = A, z.isFragment = k, z.isLazy = I, z.isMemo = N, z.isPortal = O, z.isProfiler = M, z.isStrictMode = F, z.isSuspense = U, z.isValidElementType = _, z.typeOf = D;
  }()), z;
}
var Kt;
function Dn() {
  return Kt || (Kt = 1, process.env.NODE_ENV === "production" ? Le.exports = Tr() : Le.exports = Pr()), Le.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ze, Jt;
function Sr() {
  if (Jt) return Ze;
  Jt = 1;
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
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        c[d] = d;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ze = a() ? Object.assign : function(o, s) {
    for (var l, m = r(o), c, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var y in l)
        t.call(l, y) && (m[y] = l[y]);
      if (e) {
        c = e(l);
        for (var b = 0; b < c.length; b++)
          n.call(l, c[b]) && (m[c[b]] = l[c[b]]);
      }
    }
    return m;
  }, Ze;
}
var Qe, Zt;
function Rt() {
  if (Zt) return Qe;
  Zt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qe = e, Qe;
}
var et, Qt;
function Ln() {
  return Qt || (Qt = 1, et = Function.call.bind(Object.prototype.hasOwnProperty)), et;
}
var tt, en;
function _r() {
  if (en) return tt;
  en = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Rt(), n = {}, r = /* @__PURE__ */ Ln();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, l, m, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in o)
        if (r(o, d)) {
          var y;
          try {
            if (typeof o[d] != "function") {
              var b = Error(
                (m || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            y = o[d](s, d, m, l, null, t);
          } catch (C) {
            y = C;
          }
          if (y && !(y instanceof Error) && e(
            (m || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in n)) {
            n[y.message] = !0;
            var S = c ? c() : "";
            e(
              "Failed " + l + " type: " + y.message + (S ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, tt = a, tt;
}
var nt, tn;
function kr() {
  if (tn) return nt;
  tn = 1;
  var e = Dn(), t = Sr(), n = /* @__PURE__ */ Rt(), r = /* @__PURE__ */ Ln(), a = /* @__PURE__ */ _r(), o = function() {
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
  return nt = function(l, m) {
    var c = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function y(i) {
      var f = i && (c && i[c] || i[d]);
      if (typeof f == "function")
        return f;
    }
    var b = "<<anonymous>>", S = {
      array: j("array"),
      bigint: j("bigint"),
      bool: j("boolean"),
      func: j("function"),
      number: j("number"),
      object: j("object"),
      string: j("string"),
      symbol: j("symbol"),
      any: R(),
      arrayOf: _,
      element: D(),
      elementType: p(),
      instanceOf: V,
      node: se(),
      objectOf: X,
      oneOf: B,
      oneOfType: Q,
      shape: le,
      exact: ge
    };
    function C(i, f) {
      return i === f ? i !== 0 || 1 / i === 1 / f : i !== i && f !== f;
    }
    function P(i, f) {
      this.message = i, this.data = f && typeof f == "object" ? f : {}, this.stack = "";
    }
    P.prototype = Error.prototype;
    function T(i) {
      if (process.env.NODE_ENV !== "production")
        var f = {}, v = 0;
      function E(k, I, N, O, M, F, U) {
        if (O = O || b, F = F || N, U !== n) {
          if (m) {
            var h = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw h.name = "Invariant Violation", h;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = O + ":" + N;
            !f[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            v < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), f[ee] = !0, v++);
          }
        }
        return I[N] == null ? k ? I[N] === null ? new P("The " + M + " `" + F + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new P("The " + M + " `" + F + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : i(I, N, O, M, F);
      }
      var A = E.bind(null, !1);
      return A.isRequired = E.bind(null, !0), A;
    }
    function j(i) {
      function f(v, E, A, k, I, N) {
        var O = v[E], M = G(O);
        if (M !== i) {
          var F = g(O);
          return new P(
            "Invalid " + k + " `" + I + "` of type " + ("`" + F + "` supplied to `" + A + "`, expected ") + ("`" + i + "`."),
            { expectedType: i }
          );
        }
        return null;
      }
      return T(f);
    }
    function R() {
      return T(s);
    }
    function _(i) {
      function f(v, E, A, k, I) {
        if (typeof i != "function")
          return new P("Property `" + I + "` of component `" + A + "` has invalid PropType notation inside arrayOf.");
        var N = v[E];
        if (!Array.isArray(N)) {
          var O = G(N);
          return new P("Invalid " + k + " `" + I + "` of type " + ("`" + O + "` supplied to `" + A + "`, expected an array."));
        }
        for (var M = 0; M < N.length; M++) {
          var F = i(N, M, A, k, I + "[" + M + "]", n);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return T(f);
    }
    function D() {
      function i(f, v, E, A, k) {
        var I = f[v];
        if (!l(I)) {
          var N = G(I);
          return new P("Invalid " + A + " `" + k + "` of type " + ("`" + N + "` supplied to `" + E + "`, expected a single ReactElement."));
        }
        return null;
      }
      return T(i);
    }
    function p() {
      function i(f, v, E, A, k) {
        var I = f[v];
        if (!e.isValidElementType(I)) {
          var N = G(I);
          return new P("Invalid " + A + " `" + k + "` of type " + ("`" + N + "` supplied to `" + E + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return T(i);
    }
    function V(i) {
      function f(v, E, A, k, I) {
        if (!(v[E] instanceof i)) {
          var N = i.name || b, O = Z(v[E]);
          return new P("Invalid " + k + " `" + I + "` of type " + ("`" + O + "` supplied to `" + A + "`, expected ") + ("instance of `" + N + "`."));
        }
        return null;
      }
      return T(f);
    }
    function B(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function f(v, E, A, k, I) {
        for (var N = v[E], O = 0; O < i.length; O++)
          if (C(N, i[O]))
            return null;
        var M = JSON.stringify(i, function(U, h) {
          var ee = g(h);
          return ee === "symbol" ? String(h) : h;
        });
        return new P("Invalid " + k + " `" + I + "` of value `" + String(N) + "` " + ("supplied to `" + A + "`, expected one of " + M + "."));
      }
      return T(f);
    }
    function X(i) {
      function f(v, E, A, k, I) {
        if (typeof i != "function")
          return new P("Property `" + I + "` of component `" + A + "` has invalid PropType notation inside objectOf.");
        var N = v[E], O = G(N);
        if (O !== "object")
          return new P("Invalid " + k + " `" + I + "` of type " + ("`" + O + "` supplied to `" + A + "`, expected an object."));
        for (var M in N)
          if (r(N, M)) {
            var F = i(N, M, A, k, I + "." + M, n);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return T(f);
    }
    function Q(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var f = 0; f < i.length; f++) {
        var v = i[f];
        if (typeof v != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Y(v) + " at index " + f + "."
          ), s;
      }
      function E(A, k, I, N, O) {
        for (var M = [], F = 0; F < i.length; F++) {
          var U = i[F], h = U(A, k, I, N, O, n);
          if (h == null)
            return null;
          h.data && r(h.data, "expectedType") && M.push(h.data.expectedType);
        }
        var ee = M.length > 0 ? ", expected one of type [" + M.join(", ") + "]" : "";
        return new P("Invalid " + N + " `" + O + "` supplied to " + ("`" + I + "`" + ee + "."));
      }
      return T(E);
    }
    function se() {
      function i(f, v, E, A, k) {
        return J(f[v]) ? null : new P("Invalid " + A + " `" + k + "` supplied to " + ("`" + E + "`, expected a ReactNode."));
      }
      return T(i);
    }
    function K(i, f, v, E, A) {
      return new P(
        (i || "React class") + ": " + f + " type `" + v + "." + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + A + "`."
      );
    }
    function le(i) {
      function f(v, E, A, k, I) {
        var N = v[E], O = G(N);
        if (O !== "object")
          return new P("Invalid " + k + " `" + I + "` of type `" + O + "` " + ("supplied to `" + A + "`, expected `object`."));
        for (var M in i) {
          var F = i[M];
          if (typeof F != "function")
            return K(A, k, I, M, g(F));
          var U = F(N, M, A, k, I + "." + M, n);
          if (U)
            return U;
        }
        return null;
      }
      return T(f);
    }
    function ge(i) {
      function f(v, E, A, k, I) {
        var N = v[E], O = G(N);
        if (O !== "object")
          return new P("Invalid " + k + " `" + I + "` of type `" + O + "` " + ("supplied to `" + A + "`, expected `object`."));
        var M = t({}, v[E], i);
        for (var F in M) {
          var U = i[F];
          if (r(i, F) && typeof U != "function")
            return K(A, k, I, F, g(U));
          if (!U)
            return new P(
              "Invalid " + k + " `" + I + "` key `" + F + "` supplied to `" + A + "`.\nBad object: " + JSON.stringify(v[E], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(i), null, "  ")
            );
          var h = U(N, F, A, k, I + "." + F, n);
          if (h)
            return h;
        }
        return null;
      }
      return T(f);
    }
    function J(i) {
      switch (typeof i) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !i;
        case "object":
          if (Array.isArray(i))
            return i.every(J);
          if (i === null || l(i))
            return !0;
          var f = y(i);
          if (f) {
            var v = f.call(i), E;
            if (f !== i.entries) {
              for (; !(E = v.next()).done; )
                if (!J(E.value))
                  return !1;
            } else
              for (; !(E = v.next()).done; ) {
                var A = E.value;
                if (A && !J(A[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function fe(i, f) {
      return i === "symbol" ? !0 : f ? f["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && f instanceof Symbol : !1;
    }
    function G(i) {
      var f = typeof i;
      return Array.isArray(i) ? "array" : i instanceof RegExp ? "object" : fe(f, i) ? "symbol" : f;
    }
    function g(i) {
      if (typeof i > "u" || i === null)
        return "" + i;
      var f = G(i);
      if (f === "object") {
        if (i instanceof Date)
          return "date";
        if (i instanceof RegExp)
          return "regexp";
      }
      return f;
    }
    function Y(i) {
      var f = g(i);
      switch (f) {
        case "array":
        case "object":
          return "an " + f;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + f;
        default:
          return f;
      }
    }
    function Z(i) {
      return !i.constructor || !i.constructor.name ? b : i.constructor.name;
    }
    return S.checkPropTypes = a, S.resetWarningCache = a.resetWarningCache, S.PropTypes = S, S;
  }, nt;
}
var rt, nn;
function Cr() {
  if (nn) return rt;
  nn = 1;
  var e = /* @__PURE__ */ Rt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, rt = function() {
    function r(s, l, m, c, d, y) {
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
var rn;
function Rr() {
  if (rn) return De.exports;
  if (rn = 1, process.env.NODE_ENV !== "production") {
    var e = Dn(), t = !0;
    De.exports = /* @__PURE__ */ kr()(e.isElement, t);
  } else
    De.exports = /* @__PURE__ */ Cr()();
  return De.exports;
}
var Ir = /* @__PURE__ */ Rr();
const w = /* @__PURE__ */ Fn(Ir);
var at = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var an;
function Nr() {
  return an || (an = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var o = "", s = 0; s < arguments.length; s++) {
          var l = arguments[s];
          l && (o = a(o, r(l)));
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
        for (var l in o)
          t.call(o, l) && o[l] && (s = a(s, l));
        return s;
      }
      function a(o, s) {
        return s ? o ? o + " " + s : o + s : o;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(at)), at.exports;
}
var jr = Nr();
const ce = /* @__PURE__ */ Fn(jr);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Mr(e, t, n) {
  return (t = Dr(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function on(e, t) {
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
    t % 2 ? on(Object(n), !0).forEach(function(r) {
      Mr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : on(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Fr(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Dr(e) {
  var t = Fr(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const sn = () => {
};
let It = {}, zn = {}, Yn = null, $n = {
  mark: sn,
  measure: sn
};
try {
  typeof window < "u" && (It = window), typeof document < "u" && (zn = document), typeof MutationObserver < "u" && (Yn = MutationObserver), typeof performance < "u" && ($n = performance);
} catch {
}
const {
  userAgent: ln = ""
} = It.navigator || {}, de = It, $ = zn, fn = Yn, ze = $n;
de.document;
const ie = !!$.documentElement && !!$.head && typeof $.addEventListener == "function" && typeof $.createElement == "function", Wn = ~ln.indexOf("MSIE") || ~ln.indexOf("Trident/");
var Lr = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, zr = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Un = {
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
}, Yr = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, qn = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], q = "classic", Ge = "duotone", $r = "sharp", Wr = "sharp-duotone", Vn = [q, Ge, $r, Wr], Ur = {
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
}, qr = {
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
}, Vr = /* @__PURE__ */ new Map([["classic", {
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
}]]), Gr = {
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
}, Hr = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], cn = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Br = ["kit"], Xr = {
  kit: {
    "fa-kit": "fak"
  }
}, Kr = ["fak", "fakd"], Jr = {
  kit: {
    fak: "fa-kit"
  }
}, un = {
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
}, Zr = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Qr = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], ea = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, ta = {
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
}, na = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, ut = {
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
}, ra = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], dt = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Zr, ...ra], aa = ["solid", "regular", "light", "thin", "duotone", "brands"], Gn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], oa = Gn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ia = [...Object.keys(na), ...aa, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ye.GROUP, Ye.SWAP_OPACITY, Ye.PRIMARY, Ye.SECONDARY].concat(Gn.map((e) => "".concat(e, "x"))).concat(oa.map((e) => "w-".concat(e))), sa = {
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
const ae = "___FONT_AWESOME___", mt = 16, Hn = "fa", Bn = "svg-inline--fa", ye = "data-fa-i2svg", pt = "data-fa-pseudo-element", la = "data-fa-pseudo-element-pending", Nt = "data-prefix", jt = "data-icon", dn = "fontawesome-i2svg", fa = "async", ca = ["HTML", "HEAD", "STYLE", "SCRIPT"], Xn = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Ne(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[q];
    }
  });
}
const Kn = u({}, Un);
Kn[q] = u(u(u(u({}, {
  "fa-duotone": "duotone"
}), Un[q]), cn.kit), cn["kit-duotone"]);
const ua = Ne(Kn), gt = u({}, Gr);
gt[q] = u(u(u(u({}, {
  duotone: "fad"
}), gt[q]), un.kit), un["kit-duotone"]);
const mn = Ne(gt), ht = u({}, ut);
ht[q] = u(u({}, ht[q]), Jr.kit);
const Mt = Ne(ht), yt = u({}, ta);
yt[q] = u(u({}, yt[q]), Xr.kit);
Ne(yt);
const da = Lr, Jn = "fa-layers-text", ma = zr, pa = u({}, Ur);
Ne(pa);
const ga = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], ot = Yr, ha = [...Br, ...ia], ke = de.FontAwesomeConfig || {};
function ya(e) {
  var t = $.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function ba(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
$ && typeof $.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = ba(ya(n));
  a != null && (ke[r] = a);
});
const Zn = {
  styleDefault: "solid",
  familyDefault: q,
  cssPrefix: Hn,
  replacementClass: Bn,
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
ke.familyPrefix && (ke.cssPrefix = ke.familyPrefix);
const we = u(u({}, Zn), ke);
we.autoReplaceSvg || (we.observeMutations = !1);
const x = {};
Object.keys(Zn).forEach((e) => {
  Object.defineProperty(x, e, {
    enumerable: !0,
    set: function(t) {
      we[e] = t, Ce.forEach((n) => n(x));
    },
    get: function() {
      return we[e];
    }
  });
});
Object.defineProperty(x, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    we.cssPrefix = e, Ce.forEach((t) => t(x));
  },
  get: function() {
    return we.cssPrefix;
  }
});
de.FontAwesomeConfig = x;
const Ce = [];
function va(e) {
  return Ce.push(e), () => {
    Ce.splice(Ce.indexOf(e), 1);
  };
}
const ue = mt, ne = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function xa(e) {
  if (!e || !ie)
    return;
  const t = $.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = $.head.childNodes;
  let r = null;
  for (let a = n.length - 1; a > -1; a--) {
    const o = n[a], s = (o.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (r = o);
  }
  return $.head.insertBefore(t, r), e;
}
const Ea = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Re() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Ea[Math.random() * 62 | 0];
  return t;
}
function Ae(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Ft(e) {
  return e.classList ? Ae(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Qn(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function wa(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Qn(e[n]), '" '), "").trim();
}
function He(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Dt(e) {
  return e.size !== ne.size || e.x !== ne.x || e.y !== ne.y || e.rotate !== ne.rotate || e.flipX || e.flipY;
}
function Aa(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), l = "rotate(".concat(t.rotate, " 0 0)"), m = {
    transform: "".concat(o, " ").concat(s, " ").concat(l)
  }, c = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: m,
    path: c
  };
}
function Oa(e) {
  let {
    transform: t,
    width: n = mt,
    height: r = mt,
    startCentered: a = !1
  } = e, o = "";
  return a && Wn ? o += "translate(".concat(t.x / ue - n / 2, "em, ").concat(t.y / ue - r / 2, "em) ") : a ? o += "translate(calc(-50% + ".concat(t.x / ue, "em), calc(-50% + ").concat(t.y / ue, "em)) ") : o += "translate(".concat(t.x / ue, "em, ").concat(t.y / ue, "em) "), o += "scale(".concat(t.size / ue * (t.flipX ? -1 : 1), ", ").concat(t.size / ue * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var Ta = `:root, :host {
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
function er() {
  const e = Hn, t = Bn, n = x.cssPrefix, r = x.replacementClass;
  let a = Ta;
  if (n !== e || r !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(t), "g");
    a = a.replace(o, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(l, ".".concat(r));
  }
  return a;
}
let pn = !1;
function it() {
  x.autoAddCss && !pn && (xa(er()), pn = !0);
}
var Pa = {
  mixout() {
    return {
      dom: {
        css: er,
        insertCss: it
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        it();
      },
      beforeI2svg() {
        it();
      }
    };
  }
};
const oe = de || {};
oe[ae] || (oe[ae] = {});
oe[ae].styles || (oe[ae].styles = {});
oe[ae].hooks || (oe[ae].hooks = {});
oe[ae].shims || (oe[ae].shims = []);
var re = oe[ae];
const tr = [], nr = function() {
  $.removeEventListener("DOMContentLoaded", nr), Ue = 1, tr.map((e) => e());
};
let Ue = !1;
ie && (Ue = ($.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test($.readyState), Ue || $.addEventListener("DOMContentLoaded", nr));
function Sa(e) {
  ie && (Ue ? setTimeout(e, 0) : tr.push(e));
}
function je(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Qn(e) : "<".concat(t, " ").concat(wa(n), ">").concat(r.map(je).join(""), "</").concat(t, ">");
}
function gn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var st = function(t, n, r, a) {
  var o = Object.keys(t), s = o.length, l = n, m, c, d;
  for (r === void 0 ? (m = 1, d = t[o[0]]) : (m = 0, d = r); m < s; m++)
    c = o[m], d = l(d, t[c], c, t);
  return d;
};
function _a(e) {
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
function bt(e) {
  const t = _a(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function ka(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function hn(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function vt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = hn(t);
  typeof re.hooks.addPack == "function" && !r ? re.hooks.addPack(e, hn(t)) : re.styles[e] = u(u({}, re.styles[e] || {}), a), e === "fas" && vt("fa", t);
}
const {
  styles: Ie,
  shims: Ca
} = re, rr = Object.keys(Mt), Ra = rr.reduce((e, t) => (e[t] = Object.keys(Mt[t]), e), {});
let Lt = null, ar = {}, or = {}, ir = {}, sr = {}, lr = {};
function Ia(e) {
  return ~ha.indexOf(e);
}
function Na(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Ia(a) ? a : null;
}
const fr = () => {
  const e = (r) => st(Ie, (a, o, s) => (a[s] = st(o, r, {}), a), {});
  ar = e((r, a, o) => (a[3] && (r[a[3]] = o), a[2] && a[2].filter((l) => typeof l == "number").forEach((l) => {
    r[l.toString(16)] = o;
  }), r)), or = e((r, a, o) => (r[o] = o, a[2] && a[2].filter((l) => typeof l == "string").forEach((l) => {
    r[l] = o;
  }), r)), lr = e((r, a, o) => {
    const s = a[2];
    return r[o] = o, s.forEach((l) => {
      r[l] = o;
    }), r;
  });
  const t = "far" in Ie || x.autoFetchSvg, n = st(Ca, (r, a) => {
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
  ir = n.names, sr = n.unicodes, Lt = Be(x.styleDefault, {
    family: x.familyDefault
  });
};
va((e) => {
  Lt = Be(e.styleDefault, {
    family: x.familyDefault
  });
});
fr();
function zt(e, t) {
  return (ar[e] || {})[t];
}
function ja(e, t) {
  return (or[e] || {})[t];
}
function he(e, t) {
  return (lr[e] || {})[t];
}
function cr(e) {
  return ir[e] || {
    prefix: null,
    iconName: null
  };
}
function Ma(e) {
  const t = sr[e], n = zt("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function me() {
  return Lt;
}
const ur = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Fa(e) {
  let t = q;
  const n = rr.reduce((r, a) => (r[a] = "".concat(x.cssPrefix, "-").concat(a), r), {});
  return Vn.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => Ra[r].includes(a))) && (t = r);
  }), t;
}
function Be(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = q
  } = t, r = ua[n][e];
  if (n === Ge && !e)
    return "fad";
  const a = mn[n][e] || mn[n][r], o = e in re.styles ? e : null;
  return a || o || null;
}
function Da(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = Na(x.cssPrefix, r);
    a ? n = a : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function yn(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function Xe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const a = dt.concat(Qr), o = yn(e.filter((y) => a.includes(y))), s = yn(e.filter((y) => !dt.includes(y))), l = o.filter((y) => (r = y, !qn.includes(y))), [m = null] = l, c = Fa(o), d = u(u({}, Da(s)), {}, {
    prefix: Be(m, {
      family: c
    })
  });
  return u(u(u({}, d), $a({
    values: e,
    family: c,
    styles: Ie,
    config: x,
    canonical: d,
    givenPrefix: r
  })), La(n, r, d));
}
function La(e, t, n) {
  let {
    prefix: r,
    iconName: a
  } = n;
  if (e || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  const o = t === "fa" ? cr(a) : {}, s = he(r, a);
  return a = o.iconName || s || a, r = o.prefix || r, r === "far" && !Ie.far && Ie.fas && !x.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const za = Vn.filter((e) => e !== q || e !== Ge), Ya = Object.keys(ut).filter((e) => e !== q).map((e) => Object.keys(ut[e])).flat();
function $a(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: o = {},
    config: s = {}
  } = e, l = n === Ge, m = t.includes("fa-duotone") || t.includes("fad"), c = s.familyDefault === "duotone", d = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!l && (m || c || d) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && za.includes(n) && (Object.keys(o).find((b) => Ya.includes(b)) || s.autoFetchSvg)) {
    const b = Vr.get(n).defaultShortPrefixId;
    r.prefix = b, r.iconName = he(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = me() || "fas"), r;
}
class Wa {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((o) => {
      this.definitions[o] = u(u({}, this.definitions[o] || {}), a[o]), vt(o, a[o]);
      const s = Mt[q][o];
      s && vt(s, a[o]), fr();
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
      t[o] || (t[o] = {}), m.length > 0 && m.forEach((c) => {
        typeof c == "string" && (t[o][c] = l);
      }), t[o][s] = l;
    }), t;
  }
}
let bn = [], ve = {};
const Ee = {}, Ua = Object.keys(Ee);
function qa(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return bn = e, ve = {}, Object.keys(Ee).forEach((r) => {
    Ua.indexOf(r) === -1 && delete Ee[r];
  }), bn.forEach((r) => {
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
    r.provides && r.provides(Ee);
  }), n;
}
function xt(e, t) {
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
function pe() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Ee[e] ? Ee[e].apply(null, t) : void 0;
}
function Et(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || me();
  if (t)
    return t = he(n, t) || t, gn(dr.definitions, n, t) || gn(re.styles, n, t);
}
const dr = new Wa(), Va = () => {
  x.autoReplaceSvg = !1, x.observeMutations = !1, be("noAuto");
}, Ga = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return ie ? (be("beforeI2svg", e), pe("pseudoElements2svg", e), pe("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    x.autoReplaceSvg === !1 && (x.autoReplaceSvg = !0), x.observeMutations = !0, Sa(() => {
      Ba({
        autoReplaceSvgRoot: t
      }), be("watch", e);
    });
  }
}, Ha = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: he(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Be(e[0]);
      return {
        prefix: n,
        iconName: he(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(x.cssPrefix, "-")) > -1 || e.match(da))) {
      const t = Xe(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || me(),
        iconName: he(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = me();
      return {
        prefix: t,
        iconName: he(t, e) || e
      };
    }
  }
}, H = {
  noAuto: Va,
  config: x,
  dom: Ga,
  parse: Ha,
  library: dr,
  findIconDefinition: Et,
  toHtml: je
}, Ba = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = $
  } = e;
  (Object.keys(re.styles).length > 0 || x.autoFetchSvg) && ie && x.autoReplaceSvg && H.dom.i2svg({
    node: t
  });
};
function Ke(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => je(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!ie) return;
      const n = $.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Xa(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: o,
    transform: s
  } = e;
  if (Dt(s) && n.found && !r.found) {
    const {
      width: l,
      height: m
    } = n, c = {
      x: l / m / 2,
      y: 0.5
    };
    a.style = He(u(u({}, o), {}, {
      "transform-origin": "".concat(c.x + s.x / 16, "em ").concat(c.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Ka(e) {
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
function Yt(e) {
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
    titleId: c,
    extra: d,
    watchable: y = !1
  } = e, {
    width: b,
    height: S
  } = n.found ? n : t, C = Kr.includes(r), P = [x.replacementClass, a ? "".concat(x.cssPrefix, "-").concat(a) : ""].filter((p) => d.classes.indexOf(p) === -1).filter((p) => p !== "" || !!p).concat(d.classes).join(" ");
  let T = {
    children: [],
    attributes: u(u({}, d.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: P,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(b, " ").concat(S)
    })
  };
  const j = C && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(b / S * 16 * 0.0625, "em")
  } : {};
  y && (T.attributes[ye] = ""), l && (T.children.push({
    tag: "title",
    attributes: {
      id: T.attributes["aria-labelledby"] || "title-".concat(c || Re())
    },
    children: [l]
  }), delete T.attributes.title);
  const R = u(u({}, T), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: m,
    transform: o,
    symbol: s,
    styles: u(u({}, j), d.styles)
  }), {
    children: _,
    attributes: D
  } = n.found && t.found ? pe("generateAbstractMask", R) || {
    children: [],
    attributes: {}
  } : pe("generateAbstractIcon", R) || {
    children: [],
    attributes: {}
  };
  return R.children = _, R.attributes = D, s ? Ka(R) : Xa(R);
}
function vn(e) {
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
  l && (m[ye] = "");
  const c = u({}, s.styles);
  Dt(a) && (c.transform = Oa({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), c["-webkit-transform"] = c.transform);
  const d = He(c);
  d.length > 0 && (m.style = d);
  const y = [];
  return y.push({
    tag: "span",
    attributes: m,
    children: [t]
  }), o && y.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), y;
}
function Ja(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, a = u(u(u({}, r.attributes), n ? {
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
  styles: lt
} = re;
function wt(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(x.cssPrefix, "-").concat(ot.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(x.cssPrefix, "-").concat(ot.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(x.cssPrefix, "-").concat(ot.PRIMARY),
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
const Za = {
  found: !1,
  width: 512,
  height: 512
};
function Qa(e, t) {
  !Xn && !x.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function At(e, t) {
  let n = t;
  return t === "fa" && x.styleDefault !== null && (t = me()), new Promise((r, a) => {
    if (n === "fa") {
      const o = cr(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && lt[t] && lt[t][e]) {
      const o = lt[t][e];
      return r(wt(o));
    }
    Qa(e, t), r(u(u({}, Za), {}, {
      icon: x.showMissingIcons && e ? pe("missingIconAbstract") || {} : {}
    }));
  });
}
const xn = () => {
}, Ot = x.measurePerformance && ze && ze.mark && ze.measure ? ze : {
  mark: xn,
  measure: xn
}, _e = 'FA "6.7.2"', eo = (e) => (Ot.mark("".concat(_e, " ").concat(e, " begins")), () => mr(e)), mr = (e) => {
  Ot.mark("".concat(_e, " ").concat(e, " ends")), Ot.measure("".concat(_e, " ").concat(e), "".concat(_e, " ").concat(e, " begins"), "".concat(_e, " ").concat(e, " ends"));
};
var $t = {
  begin: eo,
  end: mr
};
const $e = () => {
};
function En(e) {
  return typeof (e.getAttribute ? e.getAttribute(ye) : null) == "string";
}
function to(e) {
  const t = e.getAttribute ? e.getAttribute(Nt) : null, n = e.getAttribute ? e.getAttribute(jt) : null;
  return t && n;
}
function no(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(x.replacementClass);
}
function ro() {
  return x.autoReplaceSvg === !0 ? We.replace : We[x.autoReplaceSvg] || We.replace;
}
function ao(e) {
  return $.createElementNS("http://www.w3.org/2000/svg", e);
}
function oo(e) {
  return $.createElement(e);
}
function pr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? ao : oo
  } = t;
  if (typeof e == "string")
    return $.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  }), (e.children || []).forEach(function(o) {
    r.appendChild(pr(o, {
      ceFn: n
    }));
  }), r;
}
function io(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const We = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(pr(n), t);
      }), t.getAttribute(ye) === null && x.keepOriginalSource) {
        let n = $.createComment(io(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Ft(t).indexOf(x.replacementClass))
      return We.replace(e);
    const r = new RegExp("".concat(x.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const o = n[0].attributes.class.split(" ").reduce((s, l) => (l === x.replacementClass || l.match(r) ? s.toSvg.push(l) : s.toNode.push(l), s), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    const a = n.map((o) => je(o)).join(`
`);
    t.setAttribute(ye, ""), t.innerHTML = a;
  }
};
function wn(e) {
  e();
}
function gr(e, t) {
  const n = typeof t == "function" ? t : $e;
  if (e.length === 0)
    n();
  else {
    let r = wn;
    x.mutateApproach === fa && (r = de.requestAnimationFrame || wn), r(() => {
      const a = ro(), o = $t.begin("mutate");
      e.map(a), o(), n();
    });
  }
}
let Wt = !1;
function hr() {
  Wt = !0;
}
function Tt() {
  Wt = !1;
}
let qe = null;
function An(e) {
  if (!fn || !x.observeMutations)
    return;
  const {
    treeCallback: t = $e,
    nodeCallback: n = $e,
    pseudoElementsCallback: r = $e,
    observeMutationsRoot: a = $
  } = e;
  qe = new fn((o) => {
    if (Wt) return;
    const s = me();
    Ae(o).forEach((l) => {
      if (l.type === "childList" && l.addedNodes.length > 0 && !En(l.addedNodes[0]) && (x.searchPseudoElements && r(l.target), t(l.target)), l.type === "attributes" && l.target.parentNode && x.searchPseudoElements && r(l.target.parentNode), l.type === "attributes" && En(l.target) && ~ga.indexOf(l.attributeName))
        if (l.attributeName === "class" && to(l.target)) {
          const {
            prefix: m,
            iconName: c
          } = Xe(Ft(l.target));
          l.target.setAttribute(Nt, m || s), c && l.target.setAttribute(jt, c);
        } else no(l.target) && n(l.target);
    });
  }), ie && qe.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function so() {
  qe && qe.disconnect();
}
function lo(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const o = a.split(":"), s = o[0], l = o.slice(1);
    return s && l.length > 0 && (r[s] = l.join(":").trim()), r;
  }, {})), n;
}
function fo(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = Xe(Ft(e));
  return a.prefix || (a.prefix = me()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = ja(a.prefix, e.innerText) || zt(a.prefix, bt(e.innerText))), !a.iconName && x.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function co(e) {
  const t = Ae(e.attributes).reduce((a, o) => (a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return x.autoA11y && (n ? t["aria-labelledby"] = "".concat(x.replacementClass, "-title-").concat(r || Re()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function uo() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: ne,
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
function On(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: a
  } = fo(e), o = co(e), s = xt("parseNodeAttributes", {}, e);
  let l = t.styleParser ? lo(e) : [];
  return u({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: ne,
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
  styles: mo
} = re;
function yr(e) {
  const t = x.autoReplaceSvg === "nest" ? On(e, {
    styleParser: !1
  }) : On(e);
  return ~t.extra.classes.indexOf(Jn) ? pe("generateLayersText", e, t) : pe("generateSvgReplacementMutation", e, t);
}
function po() {
  return [...Hr, ...dt];
}
function Tn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ie) return Promise.resolve();
  const n = $.documentElement.classList, r = (d) => n.add("".concat(dn, "-").concat(d)), a = (d) => n.remove("".concat(dn, "-").concat(d)), o = x.autoFetchSvg ? po() : qn.concat(Object.keys(mo));
  o.includes("fa") || o.push("fa");
  const s = [".".concat(Jn, ":not([").concat(ye, "])")].concat(o.map((d) => ".".concat(d, ":not([").concat(ye, "])"))).join(", ");
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
  const m = $t.begin("onTree"), c = l.reduce((d, y) => {
    try {
      const b = yr(y);
      b && d.push(b);
    } catch (b) {
      Xn || b.name === "MissingIcon" && console.error(b);
    }
    return d;
  }, []);
  return new Promise((d, y) => {
    Promise.all(c).then((b) => {
      gr(b, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), m(), d();
      });
    }).catch((b) => {
      m(), y(b);
    });
  });
}
function go(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  yr(e).then((n) => {
    n && gr([n], t);
  });
}
function ho(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Et(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : Et(a || {})), e(r, u(u({}, n), {}, {
      mask: a
    }));
  };
}
const yo = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = ne,
    symbol: r = !1,
    mask: a = null,
    maskId: o = null,
    title: s = null,
    titleId: l = null,
    classes: m = [],
    attributes: c = {},
    styles: d = {}
  } = t;
  if (!e) return;
  const {
    prefix: y,
    iconName: b,
    icon: S
  } = e;
  return Ke(u({
    type: "icon"
  }, e), () => (be("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), x.autoA11y && (s ? c["aria-labelledby"] = "".concat(x.replacementClass, "-title-").concat(l || Re()) : (c["aria-hidden"] = "true", c.focusable = "false")), Yt({
    icons: {
      main: wt(S),
      mask: a ? wt(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: y,
    iconName: b,
    transform: u(u({}, ne), n),
    symbol: r,
    title: s,
    maskId: o,
    titleId: l,
    extra: {
      attributes: c,
      styles: d,
      classes: m
    }
  })));
};
var bo = {
  mixout() {
    return {
      icon: ho(yo)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Tn, e.nodeCallback = go, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = $,
        callback: r = () => {
        }
      } = t;
      return Tn(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: a,
        titleId: o,
        prefix: s,
        transform: l,
        symbol: m,
        mask: c,
        maskId: d,
        extra: y
      } = n;
      return new Promise((b, S) => {
        Promise.all([At(r, s), c.iconName ? At(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((C) => {
          let [P, T] = C;
          b([t, Yt({
            icons: {
              main: P,
              mask: T
            },
            prefix: s,
            iconName: r,
            transform: l,
            symbol: m,
            maskId: d,
            title: a,
            titleId: o,
            extra: y,
            watchable: !0
          })]);
        }).catch(S);
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
      let m;
      return Dt(o) && (m = pe("generateAbstractTransformGrouping", {
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
}, vo = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Ke({
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
}, xo = {
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
        return Ke({
          type: "counter",
          content: e
        }, () => (be("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Ja({
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
}, Eo = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = ne,
          title: r = null,
          classes: a = [],
          attributes: o = {},
          styles: s = {}
        } = t;
        return Ke({
          type: "text",
          content: e
        }, () => (be("beforeDOMElementCreation", {
          content: e,
          params: t
        }), vn({
          content: e,
          transform: u(u({}, ne), n),
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
      if (Wn) {
        const m = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        s = c.width / m, l = c.height / m;
      }
      return x.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, vn({
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
const wo = new RegExp('"', "ug"), Pn = [1105920, 1112319], Sn = u(u(u(u({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), qr), sa), ea), Pt = Object.keys(Sn).reduce((e, t) => (e[t.toLowerCase()] = Sn[t], e), {}), Ao = Object.keys(Pt).reduce((e, t) => {
  const n = Pt[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function Oo(e) {
  const t = e.replace(wo, ""), n = ka(t, 0), r = n >= Pn[0] && n <= Pn[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: bt(a ? t[0] : t),
    isSecondary: r || a
  };
}
function To(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (Pt[n] || {})[a] || Ao[n];
}
function _n(e, t) {
  const n = "".concat(la).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const s = Ae(e.children).filter((b) => b.getAttribute(pt) === t)[0], l = de.getComputedStyle(e, t), m = l.getPropertyValue("font-family"), c = m.match(ma), d = l.getPropertyValue("font-weight"), y = l.getPropertyValue("content");
    if (s && !c)
      return e.removeChild(s), r();
    if (c && y !== "none" && y !== "") {
      const b = l.getPropertyValue("content");
      let S = To(m, d);
      const {
        value: C,
        isSecondary: P
      } = Oo(b), T = c[0].startsWith("FontAwesome");
      let j = zt(S, C), R = j;
      if (T) {
        const _ = Ma(C);
        _.iconName && _.prefix && (j = _.iconName, S = _.prefix);
      }
      if (j && !P && (!s || s.getAttribute(Nt) !== S || s.getAttribute(jt) !== R)) {
        e.setAttribute(n, R), s && e.removeChild(s);
        const _ = uo(), {
          extra: D
        } = _;
        D.attributes[pt] = t, At(j, S).then((p) => {
          const V = Yt(u(u({}, _), {}, {
            icons: {
              main: p,
              mask: ur()
            },
            prefix: S,
            iconName: R,
            extra: D,
            watchable: !0
          })), B = $.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(B, e.firstChild) : e.appendChild(B), B.outerHTML = V.map((X) => je(X)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function Po(e) {
  return Promise.all([_n(e, "::before"), _n(e, "::after")]);
}
function So(e) {
  return e.parentNode !== document.head && !~ca.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(pt) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function kn(e) {
  if (ie)
    return new Promise((t, n) => {
      const r = Ae(e.querySelectorAll("*")).filter(So).map(Po), a = $t.begin("searchPseudoElements");
      hr(), Promise.all(r).then(() => {
        a(), Tt(), t();
      }).catch(() => {
        a(), Tt(), n();
      });
    });
}
var _o = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = kn, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = $
      } = t;
      x.searchPseudoElements && kn(n);
    };
  }
};
let Cn = !1;
var ko = {
  mixout() {
    return {
      dom: {
        unwatch() {
          hr(), Cn = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        An(xt("mutationObserverCallbacks", {}));
      },
      noAuto() {
        so();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Cn ? Tt() : An(xt("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Rn = (e) => {
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
var Co = {
  mixout() {
    return {
      parse: {
        transform: (e) => Rn(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Rn(n)), e;
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
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), m = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), c = "rotate(".concat(r.rotate, " 0 0)"), d = {
        transform: "".concat(l, " ").concat(m, " ").concat(c)
      }, y = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
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
const ft = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function In(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Ro(e) {
  return e.tag === "g" ? e.children : [e];
}
var Io = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Xe(n.split(" ").map((a) => a.trim())) : ur();
        return r.prefix || (r.prefix = me()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
        icon: c
      } = a, {
        width: d,
        icon: y
      } = o, b = Aa({
        transform: l,
        containerWidth: d,
        iconWidth: m
      }), S = {
        tag: "rect",
        attributes: u(u({}, ft), {}, {
          fill: "white"
        })
      }, C = c.children ? {
        children: c.children.map(In)
      } : {}, P = {
        tag: "g",
        attributes: u({}, b.inner),
        children: [In(u({
          tag: c.tag,
          attributes: u(u({}, c.attributes), b.path)
        }, C))]
      }, T = {
        tag: "g",
        attributes: u({}, b.outer),
        children: [P]
      }, j = "mask-".concat(s || Re()), R = "clip-".concat(s || Re()), _ = {
        tag: "mask",
        attributes: u(u({}, ft), {}, {
          id: j,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [S, T]
      }, D = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: R
          },
          children: Ro(y)
        }, _]
      };
      return n.push(D, {
        tag: "rect",
        attributes: u({
          fill: "currentColor",
          "clip-path": "url(#".concat(R, ")"),
          mask: "url(#".concat(j, ")")
        }, ft)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, No = {
  provides(e) {
    let t = !1;
    de.matchMedia && (t = de.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
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
}, jo = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Mo = [Pa, bo, vo, xo, Eo, _o, ko, Co, Io, No, jo];
qa(Mo, {
  mixoutsTo: H
});
H.noAuto;
H.config;
H.library;
H.dom;
const St = H.parse;
H.findIconDefinition;
H.toHtml;
const Fo = H.icon;
H.layer;
H.text;
H.counter;
function Nn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nn(Object(n), !0).forEach(function(r) {
      xe(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ve(e) {
  "@babel/helpers - typeof";
  return Ve = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ve(e);
}
function xe(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Do(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Lo(e, t) {
  if (e == null) return {};
  var n = Do(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function _t(e) {
  return zo(e) || Yo(e) || $o(e) || Wo();
}
function zo(e) {
  if (Array.isArray(e)) return kt(e);
}
function Yo(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function $o(e, t) {
  if (e) {
    if (typeof e == "string") return kt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return kt(e, t);
  }
}
function kt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Wo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Uo(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, o = e.bounce, s = e.shake, l = e.flash, m = e.spin, c = e.spinPulse, d = e.spinReverse, y = e.pulse, b = e.fixedWidth, S = e.inverse, C = e.border, P = e.listItem, T = e.flip, j = e.size, R = e.rotation, _ = e.pull, D = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": o,
    "fa-shake": s,
    "fa-flash": l,
    "fa-spin": m,
    "fa-spin-reverse": d,
    "fa-spin-pulse": c,
    "fa-pulse": y,
    "fa-fw": b,
    "fa-inverse": S,
    "fa-border": C,
    "fa-li": P,
    "fa-flip": T === !0,
    "fa-flip-horizontal": T === "horizontal" || T === "both",
    "fa-flip-vertical": T === "vertical" || T === "both"
  }, xe(t, "fa-".concat(j), typeof j < "u" && j !== null), xe(t, "fa-rotate-".concat(R), typeof R < "u" && R !== null && R !== 0), xe(t, "fa-pull-".concat(_), typeof _ < "u" && _ !== null), xe(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(D).map(function(p) {
    return D[p] ? p : null;
  }).filter(function(p) {
    return p;
  });
}
function qo(e) {
  return e = e - 0, e === e;
}
function br(e) {
  return qo(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Vo = ["style"];
function Go(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ho(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = br(n.slice(0, r)), o = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Go(a)] = o : t[a] = o, t;
  }, {});
}
function vr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(m) {
    return vr(e, m);
  }), a = Object.keys(t.attributes || {}).reduce(function(m, c) {
    var d = t.attributes[c];
    switch (c) {
      case "class":
        m.attrs.className = d, delete t.attributes.class;
        break;
      case "style":
        m.attrs.style = Ho(d);
        break;
      default:
        c.indexOf("aria-") === 0 || c.indexOf("data-") === 0 ? m.attrs[c.toLowerCase()] = d : m.attrs[br(c)] = d;
    }
    return m;
  }, {
    attrs: {}
  }), o = n.style, s = o === void 0 ? {} : o, l = Lo(n, Vo);
  return a.attrs.style = te(te({}, a.attrs.style), s), e.apply(void 0, [t.tag, te(te({}, a.attrs), l)].concat(_t(r)));
}
var xr = !1;
try {
  xr = process.env.NODE_ENV === "production";
} catch {
}
function Bo() {
  if (!xr && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function jn(e) {
  if (e && Ve(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (St.icon)
    return St.icon(e);
  if (e === null)
    return null;
  if (e && Ve(e) === "object" && e.prefix && e.iconName)
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
var Mn = {
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
}, Ut = /* @__PURE__ */ Ct.forwardRef(function(e, t) {
  var n = te(te({}, Mn), e), r = n.icon, a = n.mask, o = n.symbol, s = n.className, l = n.title, m = n.titleId, c = n.maskId, d = jn(r), y = ct("classes", [].concat(_t(Uo(n)), _t((s || "").split(" ")))), b = ct("transform", typeof n.transform == "string" ? St.transform(n.transform) : n.transform), S = ct("mask", jn(a)), C = Fo(d, te(te(te(te({}, y), b), S), {}, {
    symbol: o,
    title: l,
    titleId: m,
    maskId: c
  }));
  if (!C)
    return Bo("Could not find icon", d), null;
  var P = C.abstract, T = {
    ref: t
  };
  return Object.keys(n).forEach(function(j) {
    Mn.hasOwnProperty(j) || (T[j] = n[j]);
  }), Xo(P[0], T);
});
Ut.displayName = "FontAwesomeIcon";
Ut.propTypes = {
  beat: w.bool,
  border: w.bool,
  beatFade: w.bool,
  bounce: w.bool,
  className: w.string,
  fade: w.bool,
  flash: w.bool,
  mask: w.oneOfType([w.object, w.array, w.string]),
  maskId: w.string,
  fixedWidth: w.bool,
  inverse: w.bool,
  flip: w.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: w.oneOfType([w.object, w.array, w.string]),
  listItem: w.bool,
  pull: w.oneOf(["right", "left"]),
  pulse: w.bool,
  rotation: w.oneOf([0, 90, 180, 270]),
  shake: w.bool,
  size: w.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: w.bool,
  spinPulse: w.bool,
  spinReverse: w.bool,
  symbol: w.oneOfType([w.bool, w.string]),
  title: w.string,
  titleId: w.string,
  transform: w.oneOfType([w.string, w.object]),
  swapOpacity: w.bool
};
var Xo = vr.bind(null, Ct.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Ko = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, Jo = () => {
  if (typeof window > "u") return !1;
  const e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t = ("ontouchstart" in window || navigator.maxTouchPoints > 0) && window.matchMedia("(pointer: coarse)").matches, n = window.matchMedia("(max-width: 768px)").matches;
  return e || t && n;
}, Zo = (e, t) => {
  Se(() => {
    const n = (r) => {
      !e.current || e.current.contains(r.target) || t(r);
    };
    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
      document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n);
    };
  }, [e, t]);
}, Er = ({
  id: e,
  label: t,
  hintText: n,
  options: r,
  disabled: a,
  error: o,
  className: s,
  selectedOptionValue: l,
  onSelect: m,
  defaultOptionLabel: c = "- Select -",
  forceCustom: d = !1
  // Allow forcing custom dropdown for testing
}) => {
  const [y, b] = Oe(!1);
  Se(() => {
    b(d ? !1 : Jo());
  }, [d]);
  const S = () => t && /* @__PURE__ */ W.jsxs("label", { className: "usa-label", htmlFor: e, children: [
    /* @__PURE__ */ W.jsx("span", { className: ce("usa-label__text", { "usa-label--error": o }), children: t }),
    n && /* @__PURE__ */ W.jsx("span", { className: "usa-hint__text", children: n }),
    o && typeof o == "string" && /* @__PURE__ */ W.jsx("span", { className: "usa-error-message", role: "alert", children: o }),
    o && typeof o != "string" && /* @__PURE__ */ W.jsx("span", { className: "usa-error-message", role: "alert", children: "This field is required." })
  ] });
  if (y)
    return /* @__PURE__ */ W.jsxs("div", { className: ce("dropdown__container", s, {
      "usa-form-group": t,
      "usa-form-group--error": o
    }), children: [
      S(),
      /* @__PURE__ */ W.jsxs(
        "select",
        {
          id: e,
          className: ce(
            "dropdown__native-select",
            { "dropdown__native-select--error": o }
          ),
          value: l || "",
          onChange: (g) => m(g.target.value),
          disabled: a,
          "aria-label": t,
          "aria-invalid": !!o,
          children: [
            /* @__PURE__ */ W.jsx("option", { value: "", disabled: !0, children: c }),
            r.map((g) => /* @__PURE__ */ W.jsx("option", { value: g.value, children: g.label }, g.value))
          ]
        }
      ),
      o && typeof o == "string" && !t && /* @__PURE__ */ W.jsx("span", { id: `${e}-error-message`, className: "usa-error-message", role: "alert", children: o })
    ] });
  const [C, P] = Oe(!1), [T, j] = Oe(null), [R, _] = Oe(-1), [D, p] = Oe(""), V = Je(null), B = Je(null), X = Je(null), Q = `${e}-dropdown-menu`;
  Zo(B, () => P(!1)), Se(() => {
    if (l && r) {
      const g = r.find((Y) => Y.value === l);
      j(g || null);
    } else
      j(null);
  }, [l, r]), Se(() => {
    if (C) {
      const g = document.getElementById(Q);
      g && g.focus();
    } else X.current && X.current.focus();
  }, [C, Q]);
  const se = (g) => {
    const Y = D + g.toLowerCase();
    p(Y);
    const Z = r.findIndex(
      (i) => i.label.toLowerCase().startsWith(Y)
    );
    Z !== -1 && _(Z), V.current && clearTimeout(V.current), V.current = setTimeout(() => p(""), 500);
  }, K = (g, Y) => {
    j(g), P(!1), _(Y), m && m(g.value);
  }, le = (g) => {
    if (!C && (g.key === "ArrowDown" || g.key === "Enter" || g.key === " ")) {
      P(!0);
      const Y = T ? r.findIndex((Z) => Z.value === T.value) : 0;
      _(Y), g.preventDefault();
    } else C && (g.key === "ArrowDown" ? (_((Y) => (Y + 1) % r.length), g.preventDefault()) : g.key === "ArrowUp" ? (_((Y) => (Y - 1 + r.length) % r.length), g.preventDefault()) : g.key === "Enter" || g.key === " " ? (R >= 0 && R < r.length && K(r[R], R), g.preventDefault()) : g.key === "Escape" ? (P(!1), g.preventDefault()) : g.key === "Tab" ? P(!1) : g.key.length === 1 && /^[a-z0-9]$/i.test(g.key) && se(g.key));
  }, ge = (g) => {
    g.key === "ArrowDown" ? (_((Y) => (Y + 1) % r.length), g.preventDefault()) : g.key === "ArrowUp" ? (_((Y) => (Y - 1 + r.length) % r.length), g.preventDefault()) : g.key === "Enter" || g.key === " " ? (R >= 0 && R < r.length && K(r[R], R), g.preventDefault()) : g.key === "Escape" ? (P(!1), g.preventDefault()) : g.key === "Tab" ? P(!1) : g.key.length === 1 && /^[a-z0-9]$/i.test(g.key) && se(g.key);
  };
  Se(() => {
    if (C && R >= 0) {
      const g = document.getElementById(`${e}-option-${R}`);
      g && g.scrollIntoView({ block: "nearest" });
    }
  }, [C, R, e]);
  const J = ce(
    "dropdown__container",
    {
      "usa-form-group": t,
      "usa-form-group--error": o
    },
    s
  ), fe = ce(
    "usa-input",
    {
      "usa-input--error": o,
      "usa-input--disabled": a
    },
    "dropdown__button"
  ), G = ce(
    "dropdown__menu"
  );
  return /* @__PURE__ */ W.jsxs("div", { className: J, ref: B, children: [
    S(),
    /* @__PURE__ */ W.jsxs(
      "button",
      {
        type: "button",
        id: e,
        className: fe,
        onClick: () => !a && P(!C),
        onKeyDown: le,
        disabled: a,
        "aria-haspopup": "listbox",
        "aria-expanded": C,
        "aria-controls": Q,
        role: "combobox",
        "aria-activedescendant": C && R >= 0 ? `${e}-option-${R}` : void 0,
        "aria-labelledby": t ? void 0 : e,
        ref: X,
        children: [
          /* @__PURE__ */ W.jsx("span", { className: "dropdown__selected-value", children: T ? T.label : c }),
          /* @__PURE__ */ W.jsx(
            Ut,
            {
              icon: Ko,
              className: ce("dropdown__custom-chevron", { "dropdown__custom-chevron--open": C }),
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ W.jsx(
      "ul",
      {
        className: G,
        role: "listbox",
        id: Q,
        "aria-labelledby": e,
        hidden: !C,
        onKeyDown: ge,
        tabIndex: C ? 0 : -1,
        children: r.map((g, Y) => /* @__PURE__ */ W.jsx(
          "li",
          {
            id: `${e}-option-${Y}`,
            className: ce("dropdown__item", {
              "dropdown__item--selected": T && T.value === g.value,
              "dropdown__item--active": R === Y
            }),
            onClick: () => K(g, Y),
            role: "option",
            "aria-selected": T && T.value === g.value,
            tabIndex: -1,
            "data-footer": g.isFooter ? "true" : void 0,
            children: g.label
          },
          g.value
        ))
      }
    ),
    o && typeof o == "string" && !t && /* @__PURE__ */ W.jsx("span", { id: `${e}-error-message`, className: "usa-error-message", role: "alert", children: o })
  ] });
};
Er.propTypes = {
  /** Unique identifier for the dropdown (required) */
  id: w.string.isRequired,
  /** Label text for the dropdown */
  label: w.string,
  /** Helper text displayed below the label */
  hintText: w.string,
  /** Array of options to display (required) */
  options: w.arrayOf(
    w.shape({
      value: w.string.isRequired,
      label: w.string.isRequired
    })
  ).isRequired,
  /** Whether the dropdown is disabled */
  disabled: w.bool,
  /** Error state or error message */
  error: w.oneOfType([w.bool, w.string]),
  /** Additional CSS classes */
  className: w.string,
  /** Currently selected option value */
  selectedOptionValue: w.string,
  /** Callback function when an option is selected */
  onSelect: w.func,
  /** Text for the default/placeholder option */
  defaultOptionLabel: w.string,
  /** Force custom dropdown implementation (for testing) */
  forceCustom: w.bool
};
Er.defaultProps = {
  label: null,
  disabled: !1,
  error: !1,
  className: "",
  selectedOptionValue: null,
  onSelect: () => {
  },
  defaultOptionLabel: "- Select -",
  forceCustom: !1
};
export {
  Er as Dropdown
};
//# sourceMappingURL=index.js.map
