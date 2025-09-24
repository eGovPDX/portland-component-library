import * as R from "react";
import mt, { useLayoutEffect as nn, useState as xt, useRef as wt, useEffect as ze } from "react";
import * as rn from "react-dom";
function kn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Se = { exports: {} }, ye = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt;
function Ln() {
  if (Tt) return ye;
  Tt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, o, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      s = {};
      for (var c in o)
        c !== "key" && (s[c] = o[c]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return ye.Fragment = t, ye.jsx = n, ye.jsxs = n, ye;
}
var be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function jn() {
  return St || (St = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === U ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case p:
          return "Fragment";
        case C:
          return "Profiler";
        case E:
          return "StrictMode";
        case h:
          return "Suspense";
        case q:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case y:
            return "Portal";
          case w:
            return (a.displayName || "Context") + ".Provider";
          case O:
            return (a._context.displayName || "Context") + ".Consumer";
          case P:
            var g = a.render;
            return a = a.displayName, a || (a = g.displayName || g.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case Y:
            return g = a.displayName || null, g !== null ? g : e(a.type) || "Memo";
          case X:
            g = a._payload, a = a._init;
            try {
              return e(a(g));
            } catch {
            }
        }
      return null;
    }
    function t(a) {
      return "" + a;
    }
    function n(a) {
      try {
        t(a);
        var g = !1;
      } catch {
        g = !0;
      }
      if (g) {
        g = console;
        var b = g.error, T = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return b.call(
          g,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          T
        ), t(a);
      }
    }
    function r(a) {
      if (a === p) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === X)
        return "<...>";
      try {
        var g = e(a);
        return g ? "<" + g + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var a = G.A;
      return a === null ? null : a.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(a) {
      if (Z.call(a, "key")) {
        var g = Object.getOwnPropertyDescriptor(a, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function c(a, g) {
      function b() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          g
        ));
      }
      b.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: b,
        configurable: !0
      });
    }
    function u() {
      var a = e(this.type);
      return W[a] || (W[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function l(a, g, b, T, M, L, F, N) {
      return b = L.ref, a = {
        $$typeof: f,
        type: a,
        key: g,
        props: L,
        _owner: M
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(a, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function d(a, g, b, T, M, L, F, N) {
      var A = g.children;
      if (A !== void 0)
        if (T)
          if ($(A)) {
            for (T = 0; T < A.length; T++)
              m(A[T]);
            Object.freeze && Object.freeze(A);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(A);
      if (Z.call(g, "key")) {
        A = e(a);
        var k = Object.keys(g).filter(function(H) {
          return H !== "key";
        });
        T = 0 < k.length ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}", j[A + T] || (k = 0 < k.length ? "{" + k.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          T,
          A,
          k,
          A
        ), j[A + T] = !0);
      }
      if (A = null, b !== void 0 && (n(b), A = "" + b), i(g) && (n(g.key), A = "" + g.key), "key" in g) {
        b = {};
        for (var D in g)
          D !== "key" && (b[D] = g[D]);
      } else b = g;
      return A && c(
        b,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), l(
        a,
        A,
        L,
        M,
        o(),
        b,
        F,
        N
      );
    }
    function m(a) {
      typeof a == "object" && a !== null && a.$$typeof === f && a._store && (a._store.validated = 1);
    }
    var v = mt, f = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), w = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), U = Symbol.for("react.client.reference"), G = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = Object.prototype.hasOwnProperty, $ = Array.isArray, x = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var z, W = {}, I = v["react-stack-bottom-frame"].bind(
      v,
      s
    )(), _ = x(r(s)), j = {};
    be.Fragment = p, be.jsx = function(a, g, b, T, M) {
      var L = 1e4 > G.recentlyCreatedOwnerStacks++;
      return d(
        a,
        g,
        b,
        !1,
        T,
        M,
        L ? Error("react-stack-top-frame") : I,
        L ? x(r(a)) : _
      );
    }, be.jsxs = function(a, g, b, T, M) {
      var L = 1e4 > G.recentlyCreatedOwnerStacks++;
      return d(
        a,
        g,
        b,
        !0,
        T,
        M,
        L ? Error("react-stack-top-frame") : I,
        L ? x(r(a)) : _
      );
    };
  }()), be;
}
var Ct;
function Nn() {
  return Ct || (Ct = 1, process.env.NODE_ENV === "production" ? Se.exports = Ln() : Se.exports = jn()), Se.exports;
}
var K = Nn(), Ce = { exports: {} }, Oe = { exports: {} }, B = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function Dn() {
  if (Ot) return B;
  Ot = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function w(h) {
    if (typeof h == "object" && h !== null) {
      var q = h.$$typeof;
      switch (q) {
        case t:
          switch (h = h.type, h) {
            case u:
            case l:
            case r:
            case s:
            case o:
            case m:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case d:
                case y:
                case f:
                case i:
                  return h;
                default:
                  return q;
              }
          }
        case n:
          return q;
      }
    }
  }
  function P(h) {
    return w(h) === l;
  }
  return B.AsyncMode = u, B.ConcurrentMode = l, B.ContextConsumer = c, B.ContextProvider = i, B.Element = t, B.ForwardRef = d, B.Fragment = r, B.Lazy = y, B.Memo = f, B.Portal = n, B.Profiler = s, B.StrictMode = o, B.Suspense = m, B.isAsyncMode = function(h) {
    return P(h) || w(h) === u;
  }, B.isConcurrentMode = P, B.isContextConsumer = function(h) {
    return w(h) === c;
  }, B.isContextProvider = function(h) {
    return w(h) === i;
  }, B.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, B.isForwardRef = function(h) {
    return w(h) === d;
  }, B.isFragment = function(h) {
    return w(h) === r;
  }, B.isLazy = function(h) {
    return w(h) === y;
  }, B.isMemo = function(h) {
    return w(h) === f;
  }, B.isPortal = function(h) {
    return w(h) === n;
  }, B.isProfiler = function(h) {
    return w(h) === s;
  }, B.isStrictMode = function(h) {
    return w(h) === o;
  }, B.isSuspense = function(h) {
    return w(h) === m;
  }, B.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === l || h === s || h === o || h === m || h === v || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === f || h.$$typeof === i || h.$$typeof === c || h.$$typeof === d || h.$$typeof === E || h.$$typeof === C || h.$$typeof === O || h.$$typeof === p);
  }, B.typeOf = w, B;
}
var V = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function Fn() {
  return Pt || (Pt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function w(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === r || S === l || S === s || S === o || S === m || S === v || typeof S == "object" && S !== null && (S.$$typeof === y || S.$$typeof === f || S.$$typeof === i || S.$$typeof === c || S.$$typeof === d || S.$$typeof === E || S.$$typeof === C || S.$$typeof === O || S.$$typeof === p);
    }
    function P(S) {
      if (typeof S == "object" && S !== null) {
        var ie = S.$$typeof;
        switch (ie) {
          case t:
            var Te = S.type;
            switch (Te) {
              case u:
              case l:
              case r:
              case s:
              case o:
              case m:
                return Te;
              default:
                var Et = Te && Te.$$typeof;
                switch (Et) {
                  case c:
                  case d:
                  case y:
                  case f:
                  case i:
                    return Et;
                  default:
                    return ie;
                }
            }
          case n:
            return ie;
        }
      }
    }
    var h = u, q = l, Y = c, X = i, Q = t, U = d, G = r, Z = y, $ = f, x = n, z = s, W = o, I = m, _ = !1;
    function j(S) {
      return _ || (_ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), a(S) || P(S) === u;
    }
    function a(S) {
      return P(S) === l;
    }
    function g(S) {
      return P(S) === c;
    }
    function b(S) {
      return P(S) === i;
    }
    function T(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function M(S) {
      return P(S) === d;
    }
    function L(S) {
      return P(S) === r;
    }
    function F(S) {
      return P(S) === y;
    }
    function N(S) {
      return P(S) === f;
    }
    function A(S) {
      return P(S) === n;
    }
    function k(S) {
      return P(S) === s;
    }
    function D(S) {
      return P(S) === o;
    }
    function H(S) {
      return P(S) === m;
    }
    V.AsyncMode = h, V.ConcurrentMode = q, V.ContextConsumer = Y, V.ContextProvider = X, V.Element = Q, V.ForwardRef = U, V.Fragment = G, V.Lazy = Z, V.Memo = $, V.Portal = x, V.Profiler = z, V.StrictMode = W, V.Suspense = I, V.isAsyncMode = j, V.isConcurrentMode = a, V.isContextConsumer = g, V.isContextProvider = b, V.isElement = T, V.isForwardRef = M, V.isFragment = L, V.isLazy = F, V.isMemo = N, V.isPortal = A, V.isProfiler = k, V.isStrictMode = D, V.isSuspense = H, V.isValidElementType = w, V.typeOf = P;
  }()), V;
}
var At;
function on() {
  return At || (At = 1, process.env.NODE_ENV === "production" ? Oe.exports = Dn() : Oe.exports = Fn()), Oe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var He, _t;
function $n() {
  if (_t) return He;
  _t = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var i = {}, c = 0; c < 10; c++)
        i["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(i).map(function(d) {
        return i[d];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        l[d] = d;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return He = o() ? Object.assign : function(s, i) {
    for (var c, u = r(s), l, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var m in c)
        t.call(c, m) && (u[m] = c[m]);
      if (e) {
        l = e(c);
        for (var v = 0; v < l.length; v++)
          n.call(c, l[v]) && (u[l[v]] = c[l[v]]);
      }
    }
    return u;
  }, He;
}
var Xe, It;
function pt() {
  if (It) return Xe;
  It = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Xe = e, Xe;
}
var Ge, Mt;
function sn() {
  return Mt || (Mt = 1, Ge = Function.call.bind(Object.prototype.hasOwnProperty)), Ge;
}
var Je, kt;
function Yn() {
  if (kt) return Je;
  kt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ pt(), n = {}, r = /* @__PURE__ */ sn();
    e = function(s) {
      var i = "Warning: " + s;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(s, i, c, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (r(s, d)) {
          var m;
          try {
            if (typeof s[d] != "function") {
              var v = Error(
                (u || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            m = s[d](i, d, u, c, null, t);
          } catch (y) {
            m = y;
          }
          if (m && !(m instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var f = l ? l() : "";
            e(
              "Failed " + c + " type: " + m.message + (f ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Je = o, Je;
}
var Ze, Lt;
function Wn() {
  if (Lt) return Ze;
  Lt = 1;
  var e = on(), t = $n(), n = /* @__PURE__ */ pt(), r = /* @__PURE__ */ sn(), o = /* @__PURE__ */ Yn(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return Ze = function(c, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function m(a) {
      var g = a && (l && a[l] || a[d]);
      if (typeof g == "function")
        return g;
    }
    var v = "<<anonymous>>", f = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: O(),
      arrayOf: w,
      element: P(),
      elementType: h(),
      instanceOf: q,
      node: U(),
      objectOf: X,
      oneOf: Y,
      oneOfType: Q,
      shape: Z,
      exact: $
    };
    function y(a, g) {
      return a === g ? a !== 0 || 1 / a === 1 / g : a !== a && g !== g;
    }
    function p(a, g) {
      this.message = a, this.data = g && typeof g == "object" ? g : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function E(a) {
      if (process.env.NODE_ENV !== "production")
        var g = {}, b = 0;
      function T(L, F, N, A, k, D, H) {
        if (A = A || v, D = D || N, H !== n) {
          if (u) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ie = A + ":" + N;
            !g[ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            b < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + D + "` prop on `" + A + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), g[ie] = !0, b++);
          }
        }
        return F[N] == null ? L ? F[N] === null ? new p("The " + k + " `" + D + "` is marked as required " + ("in `" + A + "`, but its value is `null`.")) : new p("The " + k + " `" + D + "` is marked as required in " + ("`" + A + "`, but its value is `undefined`.")) : null : a(F, N, A, k, D);
      }
      var M = T.bind(null, !1);
      return M.isRequired = T.bind(null, !0), M;
    }
    function C(a) {
      function g(b, T, M, L, F, N) {
        var A = b[T], k = W(A);
        if (k !== a) {
          var D = I(A);
          return new p(
            "Invalid " + L + " `" + F + "` of type " + ("`" + D + "` supplied to `" + M + "`, expected ") + ("`" + a + "`."),
            { expectedType: a }
          );
        }
        return null;
      }
      return E(g);
    }
    function O() {
      return E(i);
    }
    function w(a) {
      function g(b, T, M, L, F) {
        if (typeof a != "function")
          return new p("Property `" + F + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var N = b[T];
        if (!Array.isArray(N)) {
          var A = W(N);
          return new p("Invalid " + L + " `" + F + "` of type " + ("`" + A + "` supplied to `" + M + "`, expected an array."));
        }
        for (var k = 0; k < N.length; k++) {
          var D = a(N, k, M, L, F + "[" + k + "]", n);
          if (D instanceof Error)
            return D;
        }
        return null;
      }
      return E(g);
    }
    function P() {
      function a(g, b, T, M, L) {
        var F = g[b];
        if (!c(F)) {
          var N = W(F);
          return new p("Invalid " + M + " `" + L + "` of type " + ("`" + N + "` supplied to `" + T + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(a);
    }
    function h() {
      function a(g, b, T, M, L) {
        var F = g[b];
        if (!e.isValidElementType(F)) {
          var N = W(F);
          return new p("Invalid " + M + " `" + L + "` of type " + ("`" + N + "` supplied to `" + T + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(a);
    }
    function q(a) {
      function g(b, T, M, L, F) {
        if (!(b[T] instanceof a)) {
          var N = a.name || v, A = j(b[T]);
          return new p("Invalid " + L + " `" + F + "` of type " + ("`" + A + "` supplied to `" + M + "`, expected ") + ("instance of `" + N + "`."));
        }
        return null;
      }
      return E(g);
    }
    function Y(a) {
      if (!Array.isArray(a))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), i;
      function g(b, T, M, L, F) {
        for (var N = b[T], A = 0; A < a.length; A++)
          if (y(N, a[A]))
            return null;
        var k = JSON.stringify(a, function(H, S) {
          var ie = I(S);
          return ie === "symbol" ? String(S) : S;
        });
        return new p("Invalid " + L + " `" + F + "` of value `" + String(N) + "` " + ("supplied to `" + M + "`, expected one of " + k + "."));
      }
      return E(g);
    }
    function X(a) {
      function g(b, T, M, L, F) {
        if (typeof a != "function")
          return new p("Property `" + F + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var N = b[T], A = W(N);
        if (A !== "object")
          return new p("Invalid " + L + " `" + F + "` of type " + ("`" + A + "` supplied to `" + M + "`, expected an object."));
        for (var k in N)
          if (r(N, k)) {
            var D = a(N, k, M, L, F + "." + k, n);
            if (D instanceof Error)
              return D;
          }
        return null;
      }
      return E(g);
    }
    function Q(a) {
      if (!Array.isArray(a))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var g = 0; g < a.length; g++) {
        var b = a[g];
        if (typeof b != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + _(b) + " at index " + g + "."
          ), i;
      }
      function T(M, L, F, N, A) {
        for (var k = [], D = 0; D < a.length; D++) {
          var H = a[D], S = H(M, L, F, N, A, n);
          if (S == null)
            return null;
          S.data && r(S.data, "expectedType") && k.push(S.data.expectedType);
        }
        var ie = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new p("Invalid " + N + " `" + A + "` supplied to " + ("`" + F + "`" + ie + "."));
      }
      return E(T);
    }
    function U() {
      function a(g, b, T, M, L) {
        return x(g[b]) ? null : new p("Invalid " + M + " `" + L + "` supplied to " + ("`" + T + "`, expected a ReactNode."));
      }
      return E(a);
    }
    function G(a, g, b, T, M) {
      return new p(
        (a || "React class") + ": " + g + " type `" + b + "." + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function Z(a) {
      function g(b, T, M, L, F) {
        var N = b[T], A = W(N);
        if (A !== "object")
          return new p("Invalid " + L + " `" + F + "` of type `" + A + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var k in a) {
          var D = a[k];
          if (typeof D != "function")
            return G(M, L, F, k, I(D));
          var H = D(N, k, M, L, F + "." + k, n);
          if (H)
            return H;
        }
        return null;
      }
      return E(g);
    }
    function $(a) {
      function g(b, T, M, L, F) {
        var N = b[T], A = W(N);
        if (A !== "object")
          return new p("Invalid " + L + " `" + F + "` of type `" + A + "` " + ("supplied to `" + M + "`, expected `object`."));
        var k = t({}, b[T], a);
        for (var D in k) {
          var H = a[D];
          if (r(a, D) && typeof H != "function")
            return G(M, L, F, D, I(H));
          if (!H)
            return new p(
              "Invalid " + L + " `" + F + "` key `" + D + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(b[T], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(a), null, "  ")
            );
          var S = H(N, D, M, L, F + "." + D, n);
          if (S)
            return S;
        }
        return null;
      }
      return E(g);
    }
    function x(a) {
      switch (typeof a) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !a;
        case "object":
          if (Array.isArray(a))
            return a.every(x);
          if (a === null || c(a))
            return !0;
          var g = m(a);
          if (g) {
            var b = g.call(a), T;
            if (g !== a.entries) {
              for (; !(T = b.next()).done; )
                if (!x(T.value))
                  return !1;
            } else
              for (; !(T = b.next()).done; ) {
                var M = T.value;
                if (M && !x(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function z(a, g) {
      return a === "symbol" ? !0 : g ? g["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && g instanceof Symbol : !1;
    }
    function W(a) {
      var g = typeof a;
      return Array.isArray(a) ? "array" : a instanceof RegExp ? "object" : z(g, a) ? "symbol" : g;
    }
    function I(a) {
      if (typeof a > "u" || a === null)
        return "" + a;
      var g = W(a);
      if (g === "object") {
        if (a instanceof Date)
          return "date";
        if (a instanceof RegExp)
          return "regexp";
      }
      return g;
    }
    function _(a) {
      var g = I(a);
      switch (g) {
        case "array":
        case "object":
          return "an " + g;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + g;
        default:
          return g;
      }
    }
    function j(a) {
      return !a.constructor || !a.constructor.name ? v : a.constructor.name;
    }
    return f.checkPropTypes = o, f.resetWarningCache = o.resetWarningCache, f.PropTypes = f, f;
  }, Ze;
}
var Ke, jt;
function qn() {
  if (jt) return Ke;
  jt = 1;
  var e = /* @__PURE__ */ pt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ke = function() {
    function r(i, c, u, l, d, m) {
      if (m !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Ke;
}
var Nt;
function Bn() {
  if (Nt) return Ce.exports;
  if (Nt = 1, process.env.NODE_ENV !== "production") {
    var e = on(), t = !0;
    Ce.exports = /* @__PURE__ */ Wn()(e.isElement, t);
  } else
    Ce.exports = /* @__PURE__ */ qn()();
  return Ce.exports;
}
var Vn = /* @__PURE__ */ Bn();
const ee = /* @__PURE__ */ kn(Vn);
function Ye() {
  return typeof window < "u";
}
function he(e) {
  return an(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ne(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ce(e) {
  var t;
  return (t = (an(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function an(e) {
  return Ye() ? e instanceof Node || e instanceof ne(e).Node : !1;
}
function J(e) {
  return Ye() ? e instanceof Element || e instanceof ne(e).Element : !1;
}
function re(e) {
  return Ye() ? e instanceof HTMLElement || e instanceof ne(e).HTMLElement : !1;
}
function Ie(e) {
  return !Ye() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ne(e).ShadowRoot;
}
const Un = /* @__PURE__ */ new Set(["inline", "contents"]);
function we(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Un.has(o);
}
const zn = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Hn(e) {
  return zn.has(he(e));
}
const Xn = [":popover-open", ":modal"];
function We(e) {
  return Xn.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Gn = ["transform", "translate", "scale", "rotate", "perspective"], Jn = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Zn = ["paint", "layout", "strict", "content"];
function vt(e) {
  const t = gt(), n = J(e) ? oe(e) : e;
  return Gn.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Jn.some((r) => (n.willChange || "").includes(r)) || Zn.some((r) => (n.contain || "").includes(r));
}
function Kn(e) {
  let t = fe(e);
  for (; re(t) && !ge(t); ) {
    if (vt(t))
      return t;
    if (We(t))
      return null;
    t = fe(t);
  }
  return null;
}
function gt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Qn = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ge(e) {
  return Qn.has(he(e));
}
function oe(e) {
  return ne(e).getComputedStyle(e);
}
function qe(e) {
  return J(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function fe(e) {
  if (he(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ie(e) && e.host || // Fallback.
    ce(e)
  );
  return Ie(t) ? t.host : t;
}
function cn(e) {
  const t = fe(e);
  return ge(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : re(t) && we(t) ? t : cn(t);
}
function Ee(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = cn(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = ne(o);
  if (s) {
    const c = at(i);
    return t.concat(i, i.visualViewport || [], we(o) ? o : [], c && n ? Ee(c) : []);
  }
  return t.concat(o, Ee(o, [], n));
}
function at(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const Me = Math.min, de = Math.max, ke = Math.round, Pe = Math.floor, se = (e) => ({
  x: e,
  y: e
}), er = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, tr = {
  start: "end",
  end: "start"
};
function Dt(e, t, n) {
  return de(e, Me(t, n));
}
function Be(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function me(e) {
  return e.split("-")[0];
}
function Ve(e) {
  return e.split("-")[1];
}
function un(e) {
  return e === "x" ? "y" : "x";
}
function ln(e) {
  return e === "y" ? "height" : "width";
}
const nr = /* @__PURE__ */ new Set(["top", "bottom"]);
function ue(e) {
  return nr.has(me(e)) ? "y" : "x";
}
function fn(e) {
  return un(ue(e));
}
function rr(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ve(e), o = fn(e), s = ln(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Le(i)), [i, Le(i)];
}
function or(e) {
  const t = Le(e);
  return [ct(e), t, ct(t)];
}
function ct(e) {
  return e.replace(/start|end/g, (t) => tr[t]);
}
const Ft = ["left", "right"], $t = ["right", "left"], ir = ["top", "bottom"], sr = ["bottom", "top"];
function ar(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? $t : Ft : t ? Ft : $t;
    case "left":
    case "right":
      return t ? ir : sr;
    default:
      return [];
  }
}
function cr(e, t, n, r) {
  const o = Ve(e);
  let s = ar(me(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(ct)))), s;
}
function Le(e) {
  return e.replace(/left|right|bottom|top/g, (t) => er[t]);
}
function ur(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function lr(e) {
  return typeof e != "number" ? ur(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function je(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var fr = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], ut = /* @__PURE__ */ fr.join(","), dn = typeof Element > "u", xe = dn ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Ne = !dn && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, De = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var o = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), s = o === "" || o === "true", i = s || n && t && e(t.parentNode);
  return i;
}, dr = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, mr = function(t, n, r) {
  if (De(t))
    return [];
  var o = Array.prototype.slice.apply(t.querySelectorAll(ut));
  return n && xe.call(t, ut) && o.unshift(t), o = o.filter(r), o;
}, pr = function e(t, n, r) {
  for (var o = [], s = Array.from(t); s.length; ) {
    var i = s.shift();
    if (!De(i, !1))
      if (i.tagName === "SLOT") {
        var c = i.assignedElements(), u = c.length ? c : i.children, l = e(u, !0, r);
        r.flatten ? o.push.apply(o, l) : o.push({
          scopeParent: i,
          candidates: l
        });
      } else {
        var d = xe.call(i, ut);
        d && r.filter(i) && (n || !t.includes(i)) && o.push(i);
        var m = i.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(i), v = !De(m, !1) && (!r.shadowRootFilter || r.shadowRootFilter(i));
        if (m && v) {
          var f = e(m === !0 ? i.children : m.children, !0, r);
          r.flatten ? o.push.apply(o, f) : o.push({
            scopeParent: i,
            candidates: f
          });
        } else
          s.unshift.apply(s, i.children);
      }
  }
  return o;
}, mn = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, pn = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || dr(t)) && !mn(t) ? 0 : t.tabIndex;
}, vr = function(t, n) {
  var r = pn(t);
  return r < 0 && n && !mn(t) ? 0 : r;
}, gr = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, vn = function(t) {
  return t.tagName === "INPUT";
}, hr = function(t) {
  return vn(t) && t.type === "hidden";
}, yr = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, br = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, Rr = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Ne(t), r = function(c) {
    return n.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = r(window.CSS.escape(t.name));
  else
    try {
      o = r(t.name);
    } catch (i) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i.message), !1;
    }
  var s = br(o, t.form);
  return !s || s === t;
}, Er = function(t) {
  return vn(t) && t.type === "radio";
}, xr = function(t) {
  return Er(t) && !Rr(t);
}, wr = function(t) {
  var n, r = t && Ne(t), o = (n = r) === null || n === void 0 ? void 0 : n.host, s = !1;
  if (r && r !== t) {
    var i, c, u;
    for (s = !!((i = o) !== null && i !== void 0 && (c = i.ownerDocument) !== null && c !== void 0 && c.contains(o) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !s && o; ) {
      var l, d, m;
      r = Ne(o), o = (l = r) === null || l === void 0 ? void 0 : l.host, s = !!((d = o) !== null && d !== void 0 && (m = d.ownerDocument) !== null && m !== void 0 && m.contains(o));
    }
  }
  return s;
}, Yt = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, o = n.height;
  return r === 0 && o === 0;
}, Tr = function(t, n) {
  var r = n.displayCheck, o = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var s = xe.call(t, "details>summary:first-of-type"), i = s ? t.parentElement : t;
  if (xe.call(i, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof o == "function") {
      for (var c = t; t; ) {
        var u = t.parentElement, l = Ne(t);
        if (u && !u.shadowRoot && o(u) === !0)
          return Yt(t);
        t.assignedSlot ? t = t.assignedSlot : !u && l !== t.ownerDocument ? t = l.host : t = u;
      }
      t = c;
    }
    if (wr(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return Yt(t);
  return !1;
}, Sr = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var o = n.children.item(r);
          if (o.tagName === "LEGEND")
            return xe.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Cr = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  De(n) || hr(n) || Tr(n, t) || // For a details element with a summary, the summary element gets the focus
  yr(n) || Sr(n));
}, Wt = function(t, n) {
  return !(xr(n) || pn(n) < 0 || !Cr(t, n));
}, Or = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Pr = function e(t) {
  var n = [], r = [];
  return t.forEach(function(o, s) {
    var i = !!o.scopeParent, c = i ? o.scopeParent : o, u = vr(c, i), l = i ? e(o.candidates) : c;
    u === 0 ? i ? n.push.apply(n, l) : n.push(c) : r.push({
      documentOrder: s,
      tabIndex: u,
      item: o,
      isScope: i,
      content: l
    });
  }), r.sort(gr).reduce(function(o, s) {
    return s.isScope ? o.push.apply(o, s.content) : o.push(s.content), o;
  }, []).concat(n);
}, gn = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = pr([t], n.includeContainer, {
    filter: Wt.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Or
  }) : r = mr(t, n.includeContainer, Wt.bind(null, n)), Pr(r);
};
function Ar() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function _r() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function hn() {
  return /apple/i.test(navigator.vendor);
}
function Ir() {
  return Ar().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function Mr() {
  return _r().includes("jsdom/");
}
const qt = "data-floating-ui-focusable", kr = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function lt(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function Fe(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ie(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function Lr(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function le(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function jr(e) {
  return re(e) && e.matches(kr);
}
function Nr(e) {
  if (!e || Mr()) return !0;
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}
function Dr(e) {
  return e ? e.hasAttribute(qt) ? e : e.querySelector("[" + qt + "]") || e : null;
}
function ft(e, t) {
  const n = ["mouse", "pen"];
  return n.push("", void 0), n.includes(e);
}
var Fr = typeof document < "u", $r = function() {
}, ae = Fr ? nn : $r;
const Yr = {
  ...R
};
function Ae(e) {
  const t = R.useRef(e);
  return ae(() => {
    t.current = e;
  }), t;
}
const Wr = Yr.useInsertionEffect, qr = Wr || ((e) => e());
function Re(e) {
  const t = R.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return qr(() => {
    t.current = e;
  }), R.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
const yn = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function bn(e, t) {
  const n = gn(e, yn()), r = n.length;
  if (r === 0) return;
  const o = lt(le(e)), s = n.indexOf(o), i = s === -1 ? t === 1 ? 0 : r - 1 : s + t;
  return n[i];
}
function Br(e) {
  return bn(le(e).body, 1) || e;
}
function Vr(e) {
  return bn(le(e).body, -1) || e;
}
function Qe(e, t) {
  const n = t || e.currentTarget, r = e.relatedTarget;
  return !r || !Fe(n, r);
}
function Ur(e) {
  gn(e, yn()).forEach((n) => {
    n.dataset.tabindex = n.getAttribute("tabindex") || "", n.setAttribute("tabindex", "-1");
  });
}
function Bt(e) {
  e.querySelectorAll("[data-tabindex]").forEach((n) => {
    const r = n.dataset.tabindex;
    delete n.dataset.tabindex, r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex");
  });
}
function Vt(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = ue(t), i = fn(t), c = ln(i), u = me(t), l = s === "y", d = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, v = r[c] / 2 - o[c] / 2;
  let f;
  switch (u) {
    case "top":
      f = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      f = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      f = {
        x: r.x - o.width,
        y: m
      };
      break;
    default:
      f = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ve(t)) {
    case "start":
      f[i] -= v * (n && l ? -1 : 1);
      break;
    case "end":
      f[i] += v * (n && l ? -1 : 1);
      break;
  }
  return f;
}
const zr = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, c = s.filter(Boolean), u = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: m
  } = Vt(l, r, u), v = r, f = {}, y = 0;
  for (let p = 0; p < c.length; p++) {
    const {
      name: E,
      fn: C
    } = c[p], {
      x: O,
      y: w,
      data: P,
      reset: h
    } = await C({
      x: d,
      y: m,
      initialPlacement: r,
      placement: v,
      strategy: o,
      middlewareData: f,
      rects: l,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = O ?? d, m = w ?? m, f = {
      ...f,
      [E]: {
        ...f[E],
        ...P
      }
    }, h && y <= 50 && (y++, typeof h == "object" && (h.placement && (v = h.placement), h.rects && (l = h.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : h.rects), {
      x: d,
      y: m
    } = Vt(l, v, u)), p = -1);
  }
  return {
    x: d,
    y: m,
    placement: v,
    strategy: o,
    middlewareData: f
  };
};
async function Rn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: c,
    strategy: u
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: m = "floating",
    altBoundary: v = !1,
    padding: f = 0
  } = Be(t, e), y = lr(f), E = c[v ? m === "floating" ? "reference" : "floating" : m], C = je(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(E))) == null || n ? E : E.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: l,
    rootBoundary: d,
    strategy: u
  })), O = m === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), P = await (s.isElement == null ? void 0 : s.isElement(w)) ? await (s.getScale == null ? void 0 : s.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, h = je(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: O,
    offsetParent: w,
    strategy: u
  }) : O);
  return {
    top: (C.top - h.top + y.top) / P.y,
    bottom: (h.bottom - C.bottom + y.bottom) / P.y,
    left: (C.left - h.left + y.left) / P.x,
    right: (h.right - C.right + y.right) / P.x
  };
}
const Hr = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: c,
        platform: u,
        elements: l
      } = t, {
        mainAxis: d = !0,
        crossAxis: m = !0,
        fallbackPlacements: v,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: p = !0,
        ...E
      } = Be(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const C = me(o), O = ue(c), w = me(c) === c, P = await (u.isRTL == null ? void 0 : u.isRTL(l.floating)), h = v || (w || !p ? [Le(c)] : or(c)), q = y !== "none";
      !v && q && h.push(...cr(c, p, y, P));
      const Y = [c, ...h], X = await Rn(t, E), Q = [];
      let U = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && Q.push(X[C]), m) {
        const x = rr(o, i, P);
        Q.push(X[x[0]], X[x[1]]);
      }
      if (U = [...U, {
        placement: o,
        overflows: Q
      }], !Q.every((x) => x <= 0)) {
        var G, Z;
        const x = (((G = s.flip) == null ? void 0 : G.index) || 0) + 1, z = Y[x];
        if (z && (!(m === "alignment" ? O !== ue(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        U.every((_) => _.overflows[0] > 0 && ue(_.placement) === O)))
          return {
            data: {
              index: x,
              overflows: U
            },
            reset: {
              placement: z
            }
          };
        let W = (Z = U.filter((I) => I.overflows[0] <= 0).sort((I, _) => I.overflows[1] - _.overflows[1])[0]) == null ? void 0 : Z.placement;
        if (!W)
          switch (f) {
            case "bestFit": {
              var $;
              const I = ($ = U.filter((_) => {
                if (q) {
                  const j = ue(_.placement);
                  return j === O || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((_) => [_.placement, _.overflows.filter((j) => j > 0).reduce((j, a) => j + a, 0)]).sort((_, j) => _[1] - j[1])[0]) == null ? void 0 : $[0];
              I && (W = I);
              break;
            }
            case "initialPlacement":
              W = c;
              break;
          }
        if (o !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
}, Xr = /* @__PURE__ */ new Set(["left", "top"]);
async function Gr(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = me(n), c = Ve(n), u = ue(n) === "y", l = Xr.has(i) ? -1 : 1, d = s && u ? -1 : 1, m = Be(t, e);
  let {
    mainAxis: v,
    crossAxis: f,
    alignmentAxis: y
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return c && typeof y == "number" && (f = c === "end" ? y * -1 : y), u ? {
    x: f * d,
    y: v * l
  } : {
    x: v * l,
    y: f * d
  };
}
const Jr = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: c
      } = t, u = await Gr(t, e);
      return i === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : {
        x: o + u.x,
        y: s + u.y,
        data: {
          ...u,
          placement: i
        }
      };
    }
  };
}, Zr = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: c = {
          fn: (E) => {
            let {
              x: C,
              y: O
            } = E;
            return {
              x: C,
              y: O
            };
          }
        },
        ...u
      } = Be(e, t), l = {
        x: n,
        y: r
      }, d = await Rn(t, u), m = ue(me(o)), v = un(m);
      let f = l[v], y = l[m];
      if (s) {
        const E = v === "y" ? "top" : "left", C = v === "y" ? "bottom" : "right", O = f + d[E], w = f - d[C];
        f = Dt(O, f, w);
      }
      if (i) {
        const E = m === "y" ? "top" : "left", C = m === "y" ? "bottom" : "right", O = y + d[E], w = y - d[C];
        y = Dt(O, y, w);
      }
      const p = c.fn({
        ...t,
        [v]: f,
        [m]: y
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r,
          enabled: {
            [v]: s,
            [m]: i
          }
        }
      };
    }
  };
};
function En(e) {
  const t = oe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = re(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, c = ke(n) !== s || ke(r) !== i;
  return c && (n = s, r = i), {
    width: n,
    height: r,
    $: c
  };
}
function ht(e) {
  return J(e) ? e : e.contextElement;
}
function ve(e) {
  const t = ht(e);
  if (!re(t))
    return se(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = En(t);
  let i = (s ? ke(n.width) : n.width) / r, c = (s ? ke(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const Kr = /* @__PURE__ */ se(0);
function xn(e) {
  const t = ne(e);
  return !gt() || !t.visualViewport ? Kr : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Qr(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ne(e) ? !1 : t;
}
function pe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = ht(e);
  let i = se(1);
  t && (r ? J(r) && (i = ve(r)) : i = ve(e));
  const c = Qr(s, n, r) ? xn(s) : se(0);
  let u = (o.left + c.x) / i.x, l = (o.top + c.y) / i.y, d = o.width / i.x, m = o.height / i.y;
  if (s) {
    const v = ne(s), f = r && J(r) ? ne(r) : r;
    let y = v, p = at(y);
    for (; p && r && f !== y; ) {
      const E = ve(p), C = p.getBoundingClientRect(), O = oe(p), w = C.left + (p.clientLeft + parseFloat(O.paddingLeft)) * E.x, P = C.top + (p.clientTop + parseFloat(O.paddingTop)) * E.y;
      u *= E.x, l *= E.y, d *= E.x, m *= E.y, u += w, l += P, y = ne(p), p = at(y);
    }
  }
  return je({
    width: d,
    height: m,
    x: u,
    y: l
  });
}
function yt(e, t) {
  const n = qe(e).scrollLeft;
  return t ? t.left + n : pe(ce(e)).left + n;
}
function wn(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    yt(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function eo(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = ce(r), c = t ? We(t.floating) : !1;
  if (r === i || c && s)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = se(1);
  const d = se(0), m = re(r);
  if ((m || !m && !s) && ((he(r) !== "body" || we(i)) && (u = qe(r)), re(r))) {
    const f = pe(r);
    l = ve(r), d.x = f.x + r.clientLeft, d.y = f.y + r.clientTop;
  }
  const v = i && !m && !s ? wn(i, u, !0) : se(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - u.scrollLeft * l.x + d.x + v.x,
    y: n.y * l.y - u.scrollTop * l.y + d.y + v.y
  };
}
function to(e) {
  return Array.from(e.getClientRects());
}
function no(e) {
  const t = ce(e), n = qe(e), r = e.ownerDocument.body, o = de(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = de(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + yt(e);
  const c = -n.scrollTop;
  return oe(r).direction === "rtl" && (i += de(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: c
  };
}
function ro(e, t) {
  const n = ne(e), r = ce(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, c = 0, u = 0;
  if (o) {
    s = o.width, i = o.height;
    const l = gt();
    (!l || l && t === "fixed") && (c = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: c,
    y: u
  };
}
const oo = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function io(e, t) {
  const n = pe(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = re(e) ? ve(e) : se(1), i = e.clientWidth * s.x, c = e.clientHeight * s.y, u = o * s.x, l = r * s.y;
  return {
    width: i,
    height: c,
    x: u,
    y: l
  };
}
function Ut(e, t, n) {
  let r;
  if (t === "viewport")
    r = ro(e, n);
  else if (t === "document")
    r = no(ce(e));
  else if (J(t))
    r = io(t, n);
  else {
    const o = xn(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return je(r);
}
function Tn(e, t) {
  const n = fe(e);
  return n === t || !J(n) || ge(n) ? !1 : oe(n).position === "fixed" || Tn(n, t);
}
function so(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ee(e, [], !1).filter((c) => J(c) && he(c) !== "body"), o = null;
  const s = oe(e).position === "fixed";
  let i = s ? fe(e) : e;
  for (; J(i) && !ge(i); ) {
    const c = oe(i), u = vt(i);
    !u && c.position === "fixed" && (o = null), (s ? !u && !o : !u && c.position === "static" && !!o && oo.has(o.position) || we(i) && !u && Tn(e, i)) ? r = r.filter((d) => d !== i) : o = c, i = fe(i);
  }
  return t.set(e, r), r;
}
function ao(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? We(t) ? [] : so(t, this._c) : [].concat(n), r], c = i[0], u = i.reduce((l, d) => {
    const m = Ut(t, d, o);
    return l.top = de(m.top, l.top), l.right = Me(m.right, l.right), l.bottom = Me(m.bottom, l.bottom), l.left = de(m.left, l.left), l;
  }, Ut(t, c, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function co(e) {
  const {
    width: t,
    height: n
  } = En(e);
  return {
    width: t,
    height: n
  };
}
function uo(e, t, n) {
  const r = re(t), o = ce(t), s = n === "fixed", i = pe(e, !0, s, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = se(0);
  function l() {
    u.x = yt(o);
  }
  if (r || !r && !s)
    if ((he(t) !== "body" || we(o)) && (c = qe(t)), r) {
      const f = pe(t, !0, s, t);
      u.x = f.x + t.clientLeft, u.y = f.y + t.clientTop;
    } else o && l();
  s && !r && o && l();
  const d = o && !r && !s ? wn(o, c) : se(0), m = i.left + c.scrollLeft - u.x - d.x, v = i.top + c.scrollTop - u.y - d.y;
  return {
    x: m,
    y: v,
    width: i.width,
    height: i.height
  };
}
function et(e) {
  return oe(e).position === "static";
}
function zt(e, t) {
  if (!re(e) || oe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ce(e) === n && (n = n.ownerDocument.body), n;
}
function Sn(e, t) {
  const n = ne(e);
  if (We(e))
    return n;
  if (!re(e)) {
    let o = fe(e);
    for (; o && !ge(o); ) {
      if (J(o) && !et(o))
        return o;
      o = fe(o);
    }
    return n;
  }
  let r = zt(e, t);
  for (; r && Hn(r) && et(r); )
    r = zt(r, t);
  return r && ge(r) && et(r) && !vt(r) ? n : r || Kn(e) || n;
}
const lo = async function(e) {
  const t = this.getOffsetParent || Sn, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: uo(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function fo(e) {
  return oe(e).direction === "rtl";
}
const mo = {
  convertOffsetParentRelativeRectToViewportRelativeRect: eo,
  getDocumentElement: ce,
  getClippingRect: ao,
  getOffsetParent: Sn,
  getElementRects: lo,
  getClientRects: to,
  getDimensions: co,
  getScale: ve,
  isElement: J,
  isRTL: fo
};
function Cn(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function po(e, t) {
  let n = null, r;
  const o = ce(e);
  function s() {
    var c;
    clearTimeout(r), (c = n) == null || c.disconnect(), n = null;
  }
  function i(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), s();
    const l = e.getBoundingClientRect(), {
      left: d,
      top: m,
      width: v,
      height: f
    } = l;
    if (c || t(), !v || !f)
      return;
    const y = Pe(m), p = Pe(o.clientWidth - (d + v)), E = Pe(o.clientHeight - (m + f)), C = Pe(d), w = {
      rootMargin: -y + "px " + -p + "px " + -E + "px " + -C + "px",
      threshold: de(0, Me(1, u)) || 1
    };
    let P = !0;
    function h(q) {
      const Y = q[0].intersectionRatio;
      if (Y !== u) {
        if (!P)
          return i();
        Y ? i(!1, Y) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      Y === 1 && !Cn(l, e.getBoundingClientRect()) && i(), P = !1;
    }
    try {
      n = new IntersectionObserver(h, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(h, w);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function vo(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, l = ht(e), d = o || s ? [...l ? Ee(l) : [], ...Ee(t)] : [];
  d.forEach((C) => {
    o && C.addEventListener("scroll", n, {
      passive: !0
    }), s && C.addEventListener("resize", n);
  });
  const m = l && c ? po(l, n) : null;
  let v = -1, f = null;
  i && (f = new ResizeObserver((C) => {
    let [O] = C;
    O && O.target === l && f && (f.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var w;
      (w = f) == null || w.observe(t);
    })), n();
  }), l && !u && f.observe(l), f.observe(t));
  let y, p = u ? pe(e) : null;
  u && E();
  function E() {
    const C = pe(e);
    p && !Cn(p, C) && n(), p = C, y = requestAnimationFrame(E);
  }
  return n(), () => {
    var C;
    d.forEach((O) => {
      o && O.removeEventListener("scroll", n), s && O.removeEventListener("resize", n);
    }), m == null || m(), (C = f) == null || C.disconnect(), f = null, u && cancelAnimationFrame(y);
  };
}
const go = Jr, ho = Zr, yo = Hr, bo = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: mo,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return zr(e, t, {
    ...o,
    platform: s
  });
};
var Ro = typeof document < "u", Eo = function() {
}, _e = Ro ? nn : Eo;
function $e(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!$e(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !$e(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function On(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ht(e, t) {
  const n = On(e);
  return Math.round(t * n) / n;
}
function tt(e) {
  const t = R.useRef(e);
  return _e(() => {
    t.current = e;
  }), t;
}
function xo(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: c = !0,
    whileElementsMounted: u,
    open: l
  } = e, [d, m] = R.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, f] = R.useState(r);
  $e(v, r) || f(r);
  const [y, p] = R.useState(null), [E, C] = R.useState(null), O = R.useCallback((_) => {
    _ !== q.current && (q.current = _, p(_));
  }, []), w = R.useCallback((_) => {
    _ !== Y.current && (Y.current = _, C(_));
  }, []), P = s || y, h = i || E, q = R.useRef(null), Y = R.useRef(null), X = R.useRef(d), Q = u != null, U = tt(u), G = tt(o), Z = tt(l), $ = R.useCallback(() => {
    if (!q.current || !Y.current)
      return;
    const _ = {
      placement: t,
      strategy: n,
      middleware: v
    };
    G.current && (_.platform = G.current), bo(q.current, Y.current, _).then((j) => {
      const a = {
        ...j,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: Z.current !== !1
      };
      x.current && !$e(X.current, a) && (X.current = a, rn.flushSync(() => {
        m(a);
      }));
    });
  }, [v, t, n, G, Z]);
  _e(() => {
    l === !1 && X.current.isPositioned && (X.current.isPositioned = !1, m((_) => ({
      ..._,
      isPositioned: !1
    })));
  }, [l]);
  const x = R.useRef(!1);
  _e(() => (x.current = !0, () => {
    x.current = !1;
  }), []), _e(() => {
    if (P && (q.current = P), h && (Y.current = h), P && h) {
      if (U.current)
        return U.current(P, h, $);
      $();
    }
  }, [P, h, $, U, Q]);
  const z = R.useMemo(() => ({
    reference: q,
    floating: Y,
    setReference: O,
    setFloating: w
  }), [O, w]), W = R.useMemo(() => ({
    reference: P,
    floating: h
  }), [P, h]), I = R.useMemo(() => {
    const _ = {
      position: n,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return _;
    const j = Ht(W.floating, d.x), a = Ht(W.floating, d.y);
    return c ? {
      ..._,
      transform: "translate(" + j + "px, " + a + "px)",
      ...On(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: j,
      top: a
    };
  }, [n, c, W.floating, d.x, d.y]);
  return R.useMemo(() => ({
    ...d,
    update: $,
    refs: z,
    elements: W,
    floatingStyles: I
  }), [d, $, z, W, I]);
}
const wo = (e, t) => ({
  ...go(e),
  options: [e, t]
}), To = (e, t) => ({
  ...ho(e),
  options: [e, t]
}), So = (e, t) => ({
  ...yo(e),
  options: [e, t]
}), Co = "data-floating-ui-focusable", Xt = "active", Gt = "selected", Oo = {
  ...R
};
let Jt = !1, Po = 0;
const Zt = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Po++
);
function Ao() {
  const [e, t] = R.useState(() => Jt ? Zt() : void 0);
  return ae(() => {
    e == null && t(Zt());
  }, []), R.useEffect(() => {
    Jt = !0;
  }, []), e;
}
const _o = Oo.useId, bt = _o || Ao;
let dt;
process.env.NODE_ENV !== "production" && (dt = /* @__PURE__ */ new Set());
function Io() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = dt) != null && e.has(o))) {
    var s;
    (s = dt) == null || s.add(o), console.error(o);
  }
}
function Mo() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((o) => o(n));
    },
    on(t, n) {
      e.has(t) || e.set(t, /* @__PURE__ */ new Set()), e.get(t).add(n);
    },
    off(t, n) {
      var r;
      (r = e.get(t)) == null || r.delete(n);
    }
  };
}
const ko = /* @__PURE__ */ R.createContext(null), Lo = /* @__PURE__ */ R.createContext(null), Rt = () => {
  var e;
  return ((e = R.useContext(ko)) == null ? void 0 : e.id) || null;
}, Pn = () => R.useContext(Lo);
function Ue(e) {
  return "data-floating-ui-" + e;
}
function te(e) {
  e.current !== -1 && (clearTimeout(e.current), e.current = -1);
}
const Kt = /* @__PURE__ */ Ue("safe-polygon");
function nt(e, t, n) {
  if (n && !ft(n))
    return 0;
  if (typeof e == "number")
    return e;
  if (typeof e == "function") {
    const r = e();
    return typeof r == "number" ? r : r == null ? void 0 : r[t];
  }
  return e == null ? void 0 : e[t];
}
function rt(e) {
  return typeof e == "function" ? e() : e;
}
function jo(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: o,
    events: s,
    elements: i
  } = e, {
    enabled: c = !0,
    delay: u = 0,
    handleClose: l = null,
    mouseOnly: d = !1,
    restMs: m = 0,
    move: v = !0
  } = t, f = Pn(), y = Rt(), p = Ae(l), E = Ae(u), C = Ae(n), O = Ae(m), w = R.useRef(), P = R.useRef(-1), h = R.useRef(), q = R.useRef(-1), Y = R.useRef(!0), X = R.useRef(!1), Q = R.useRef(() => {
  }), U = R.useRef(!1), G = Re(() => {
    var I;
    const _ = (I = o.current.openEvent) == null ? void 0 : I.type;
    return (_ == null ? void 0 : _.includes("mouse")) && _ !== "mousedown";
  });
  R.useEffect(() => {
    if (!c) return;
    function I(_) {
      let {
        open: j
      } = _;
      j || (te(P), te(q), Y.current = !0, U.current = !1);
    }
    return s.on("openchange", I), () => {
      s.off("openchange", I);
    };
  }, [c, s]), R.useEffect(() => {
    if (!c || !p.current || !n) return;
    function I(j) {
      G() && r(!1, j, "hover");
    }
    const _ = le(i.floating).documentElement;
    return _.addEventListener("mouseleave", I), () => {
      _.removeEventListener("mouseleave", I);
    };
  }, [i.floating, n, r, c, p, G]);
  const Z = R.useCallback(function(I, _, j) {
    _ === void 0 && (_ = !0), j === void 0 && (j = "hover");
    const a = nt(E.current, "close", w.current);
    a && !h.current ? (te(P), P.current = window.setTimeout(() => r(!1, I, j), a)) : _ && (te(P), r(!1, I, j));
  }, [E, r]), $ = Re(() => {
    Q.current(), h.current = void 0;
  }), x = Re(() => {
    if (X.current) {
      const I = le(i.floating).body;
      I.style.pointerEvents = "", I.removeAttribute(Kt), X.current = !1;
    }
  }), z = Re(() => o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1);
  R.useEffect(() => {
    if (!c) return;
    function I(b) {
      if (te(P), Y.current = !1, d && !ft(w.current) || rt(O.current) > 0 && !nt(E.current, "open"))
        return;
      const T = nt(E.current, "open", w.current);
      T ? P.current = window.setTimeout(() => {
        C.current || r(!0, b, "hover");
      }, T) : n || r(!0, b, "hover");
    }
    function _(b) {
      if (z()) {
        x();
        return;
      }
      Q.current();
      const T = le(i.floating);
      if (te(q), U.current = !1, p.current && o.current.floatingContext) {
        n || te(P), h.current = p.current({
          ...o.current.floatingContext,
          tree: f,
          x: b.clientX,
          y: b.clientY,
          onClose() {
            x(), $(), z() || Z(b, !0, "safe-polygon");
          }
        });
        const L = h.current;
        T.addEventListener("mousemove", L), Q.current = () => {
          T.removeEventListener("mousemove", L);
        };
        return;
      }
      (w.current === "touch" ? !Fe(i.floating, b.relatedTarget) : !0) && Z(b);
    }
    function j(b) {
      z() || o.current.floatingContext && (p.current == null || p.current({
        ...o.current.floatingContext,
        tree: f,
        x: b.clientX,
        y: b.clientY,
        onClose() {
          x(), $(), z() || Z(b);
        }
      })(b));
    }
    function a() {
      te(P);
    }
    function g(b) {
      z() || Z(b, !1);
    }
    if (J(i.domReference)) {
      const b = i.domReference, T = i.floating;
      return n && b.addEventListener("mouseleave", j), v && b.addEventListener("mousemove", I, {
        once: !0
      }), b.addEventListener("mouseenter", I), b.addEventListener("mouseleave", _), T && (T.addEventListener("mouseleave", j), T.addEventListener("mouseenter", a), T.addEventListener("mouseleave", g)), () => {
        n && b.removeEventListener("mouseleave", j), v && b.removeEventListener("mousemove", I), b.removeEventListener("mouseenter", I), b.removeEventListener("mouseleave", _), T && (T.removeEventListener("mouseleave", j), T.removeEventListener("mouseenter", a), T.removeEventListener("mouseleave", g));
      };
    }
  }, [i, c, e, d, v, Z, $, x, r, n, C, f, E, p, o, z, O]), ae(() => {
    var I;
    if (c && n && (I = p.current) != null && (I = I.__options) != null && I.blockPointerEvents && G()) {
      X.current = !0;
      const j = i.floating;
      if (J(i.domReference) && j) {
        var _;
        const a = le(i.floating).body;
        a.setAttribute(Kt, "");
        const g = i.domReference, b = f == null || (_ = f.nodesRef.current.find((T) => T.id === y)) == null || (_ = _.context) == null ? void 0 : _.elements.floating;
        return b && (b.style.pointerEvents = ""), a.style.pointerEvents = "none", g.style.pointerEvents = "auto", j.style.pointerEvents = "auto", () => {
          a.style.pointerEvents = "", g.style.pointerEvents = "", j.style.pointerEvents = "";
        };
      }
    }
  }, [c, n, y, i, f, p, G]), ae(() => {
    n || (w.current = void 0, U.current = !1, $(), x());
  }, [n, $, x]), R.useEffect(() => () => {
    $(), te(P), te(q), x();
  }, [c, i.domReference, $, x]);
  const W = R.useMemo(() => {
    function I(_) {
      w.current = _.pointerType;
    }
    return {
      onPointerDown: I,
      onPointerEnter: I,
      onMouseMove(_) {
        const {
          nativeEvent: j
        } = _;
        function a() {
          !Y.current && !C.current && r(!0, j, "hover");
        }
        d && !ft(w.current) || n || rt(O.current) === 0 || U.current && _.movementX ** 2 + _.movementY ** 2 < 2 || (te(q), w.current === "touch" ? a() : (U.current = !0, q.current = window.setTimeout(a, rt(O.current))));
      }
    };
  }, [d, r, n, C, O]);
  return R.useMemo(() => c ? {
    reference: W
  } : {}, [c, W]);
}
function ot(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ie(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function No(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const An = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
}, Qt = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const [r, o] = R.useState();
  ae(() => {
    hn() && o("button");
  }, []);
  const s = {
    ref: n,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: r,
    "aria-hidden": r ? void 0 : !0,
    [Ue("focus-guard")]: "",
    style: An
  };
  return /* @__PURE__ */ K.jsx("span", {
    ...t,
    ...s
  });
}), _n = /* @__PURE__ */ R.createContext(null), en = /* @__PURE__ */ Ue("portal");
function Do(e) {
  e === void 0 && (e = {});
  const {
    id: t,
    root: n
  } = e, r = bt(), o = $o(), [s, i] = R.useState(null), c = R.useRef(null);
  return ae(() => () => {
    s == null || s.remove(), queueMicrotask(() => {
      c.current = null;
    });
  }, [s]), ae(() => {
    if (!r || c.current) return;
    const u = t ? document.getElementById(t) : null;
    if (!u) return;
    const l = document.createElement("div");
    l.id = r, l.setAttribute(en, ""), u.appendChild(l), c.current = l, i(l);
  }, [t, r]), ae(() => {
    if (n === null || !r || c.current) return;
    let u = n || (o == null ? void 0 : o.portalNode);
    u && !J(u) && (u = u.current), u = u || document.body;
    let l = null;
    t && (l = document.createElement("div"), l.id = t, u.appendChild(l));
    const d = document.createElement("div");
    d.id = r, d.setAttribute(en, ""), u = l || u, u.appendChild(d), c.current = d, i(d);
  }, [t, n, r, o]), s;
}
function Fo(e) {
  const {
    children: t,
    id: n,
    root: r,
    preserveTabOrder: o = !0
  } = e, s = Do({
    id: n,
    root: r
  }), [i, c] = R.useState(null), u = R.useRef(null), l = R.useRef(null), d = R.useRef(null), m = R.useRef(null), v = i == null ? void 0 : i.modal, f = i == null ? void 0 : i.open, y = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!i && // Guards are only for non-modal focus management.
    !i.modal && // Don't render if unmount is transitioning.
    i.open && o && !!(r || s)
  );
  return R.useEffect(() => {
    if (!s || !o || v)
      return;
    function p(E) {
      s && Qe(E) && (E.type === "focusin" ? Bt : Ur)(s);
    }
    return s.addEventListener("focusin", p, !0), s.addEventListener("focusout", p, !0), () => {
      s.removeEventListener("focusin", p, !0), s.removeEventListener("focusout", p, !0);
    };
  }, [s, o, v]), R.useEffect(() => {
    s && (f || Bt(s));
  }, [f, s]), /* @__PURE__ */ K.jsxs(_n.Provider, {
    value: R.useMemo(() => ({
      preserveTabOrder: o,
      beforeOutsideRef: u,
      afterOutsideRef: l,
      beforeInsideRef: d,
      afterInsideRef: m,
      portalNode: s,
      setFocusManagerState: c
    }), [o, s]),
    children: [y && s && /* @__PURE__ */ K.jsx(Qt, {
      "data-type": "outside",
      ref: u,
      onFocus: (p) => {
        if (Qe(p, s)) {
          var E;
          (E = d.current) == null || E.focus();
        } else {
          const C = i ? i.domReference : null, O = Vr(C);
          O == null || O.focus();
        }
      }
    }), y && s && /* @__PURE__ */ K.jsx("span", {
      "aria-owns": s.id,
      style: An
    }), s && /* @__PURE__ */ rn.createPortal(t, s), y && s && /* @__PURE__ */ K.jsx(Qt, {
      "data-type": "outside",
      ref: l,
      onFocus: (p) => {
        if (Qe(p, s)) {
          var E;
          (E = m.current) == null || E.focus();
        } else {
          const C = i ? i.domReference : null, O = Br(C);
          O == null || O.focus(), i != null && i.closeOnFocusOut && (i == null || i.onOpenChange(!1, p.nativeEvent, "focus-out"));
        }
      }
    })]
  });
}
const $o = () => R.useContext(_n);
function Yo(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = bt(), s = R.useRef({}), [i] = R.useState(() => Mo()), c = Rt() != null;
  if (process.env.NODE_ENV !== "production") {
    const f = r.reference;
    f && !J(f) && Io("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [u, l] = R.useState(r.reference), d = Re((f, y, p) => {
    s.current.openEvent = f ? y : void 0, i.emit("openchange", {
      open: f,
      event: y,
      reason: p,
      nested: c
    }), n == null || n(f, y, p);
  }), m = R.useMemo(() => ({
    setPositionReference: l
  }), []), v = R.useMemo(() => ({
    reference: u || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [u, r.reference, r.floating]);
  return R.useMemo(() => ({
    dataRef: s,
    open: t,
    onOpenChange: d,
    elements: v,
    events: i,
    floatingId: o,
    refs: m
  }), [t, d, v, i, o, m]);
}
function Wo(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Yo({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [s, i] = R.useState(null), [c, u] = R.useState(null), d = (o == null ? void 0 : o.domReference) || s, m = R.useRef(null), v = Pn();
  ae(() => {
    d && (m.current = d);
  }, [d]);
  const f = xo({
    ...e,
    elements: {
      ...o,
      ...c && {
        reference: c
      }
    }
  }), y = R.useCallback((w) => {
    const P = J(w) ? {
      getBoundingClientRect: () => w.getBoundingClientRect(),
      getClientRects: () => w.getClientRects(),
      contextElement: w
    } : w;
    u(P), f.refs.setReference(P);
  }, [f.refs]), p = R.useCallback((w) => {
    (J(w) || w === null) && (m.current = w, i(w)), (J(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    w !== null && !J(w)) && f.refs.setReference(w);
  }, [f.refs]), E = R.useMemo(() => ({
    ...f.refs,
    setReference: p,
    setPositionReference: y,
    domReference: m
  }), [f.refs, p, y]), C = R.useMemo(() => ({
    ...f.elements,
    domReference: d
  }), [f.elements, d]), O = R.useMemo(() => ({
    ...f,
    ...r,
    refs: E,
    elements: C,
    nodeId: t
  }), [f, E, C, t, r]);
  return ae(() => {
    r.dataRef.current.floatingContext = O;
    const w = v == null ? void 0 : v.nodesRef.current.find((P) => P.id === t);
    w && (w.context = O);
  }), R.useMemo(() => ({
    ...f,
    context: O,
    refs: E,
    elements: C
  }), [f, E, C, O]);
}
function it() {
  return Ir() && hn();
}
function qo(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    events: o,
    dataRef: s,
    elements: i
  } = e, {
    enabled: c = !0,
    visibleOnly: u = !0
  } = t, l = R.useRef(!1), d = R.useRef(-1), m = R.useRef(!0);
  R.useEffect(() => {
    if (!c) return;
    const f = ne(i.domReference);
    function y() {
      !n && re(i.domReference) && i.domReference === lt(le(i.domReference)) && (l.current = !0);
    }
    function p() {
      m.current = !0;
    }
    function E() {
      m.current = !1;
    }
    return f.addEventListener("blur", y), it() && (f.addEventListener("keydown", p, !0), f.addEventListener("pointerdown", E, !0)), () => {
      f.removeEventListener("blur", y), it() && (f.removeEventListener("keydown", p, !0), f.removeEventListener("pointerdown", E, !0));
    };
  }, [i.domReference, n, c]), R.useEffect(() => {
    if (!c) return;
    function f(y) {
      let {
        reason: p
      } = y;
      (p === "reference-press" || p === "escape-key") && (l.current = !0);
    }
    return o.on("openchange", f), () => {
      o.off("openchange", f);
    };
  }, [o, c]), R.useEffect(() => () => {
    te(d);
  }, []);
  const v = R.useMemo(() => ({
    onMouseLeave() {
      l.current = !1;
    },
    onFocus(f) {
      if (l.current) return;
      const y = Lr(f.nativeEvent);
      if (u && J(y)) {
        if (it() && !f.relatedTarget) {
          if (!m.current && !jr(y))
            return;
        } else if (!Nr(y))
          return;
      }
      r(!0, f.nativeEvent, "focus");
    },
    onBlur(f) {
      l.current = !1;
      const y = f.relatedTarget, p = f.nativeEvent, E = J(y) && y.hasAttribute(Ue("focus-guard")) && y.getAttribute("data-type") === "outside";
      d.current = window.setTimeout(() => {
        var C;
        const O = lt(i.domReference ? i.domReference.ownerDocument : document);
        !y && O === i.domReference || Fe((C = s.current.floatingContext) == null ? void 0 : C.refs.floating.current, O) || Fe(i.domReference, O) || E || r(!1, p, "focus");
      });
    }
  }), [s, i.domReference, r, u]);
  return R.useMemo(() => c ? {
    reference: v
  } : {}, [c, v]);
}
function st(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let s = e;
  if (o && e) {
    const {
      [Xt]: i,
      [Gt]: c,
      ...u
    } = e;
    s = u;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [Co]: ""
    },
    ...s,
    ...t.map((i) => {
      const c = i ? i[n] : null;
      return typeof c == "function" ? e ? c(e) : null : c;
    }).concat(e).reduce((i, c) => (c && Object.entries(c).forEach((u) => {
      let [l, d] = u;
      if (!(o && [Xt, Gt].includes(l)))
        if (l.indexOf("on") === 0) {
          if (r.has(l) || r.set(l, []), typeof d == "function") {
            var m;
            (m = r.get(l)) == null || m.push(d), i[l] = function() {
              for (var v, f = arguments.length, y = new Array(f), p = 0; p < f; p++)
                y[p] = arguments[p];
              return (v = r.get(l)) == null ? void 0 : v.map((E) => E(...y)).find((E) => E !== void 0);
            };
          }
        } else
          i[l] = d;
    }), i), {})
  };
}
function Bo(e) {
  e === void 0 && (e = []);
  const t = e.map((c) => c == null ? void 0 : c.reference), n = e.map((c) => c == null ? void 0 : c.floating), r = e.map((c) => c == null ? void 0 : c.item), o = R.useCallback(
    (c) => st(c, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), s = R.useCallback(
    (c) => st(c, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), i = R.useCallback(
    (c) => st(c, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return R.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: s,
    getItemProps: i
  }), [o, s, i]);
}
const Vo = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function Uo(e, t) {
  var n, r;
  t === void 0 && (t = {});
  const {
    open: o,
    elements: s,
    floatingId: i
  } = e, {
    enabled: c = !0,
    role: u = "dialog"
  } = t, l = bt(), d = ((n = s.domReference) == null ? void 0 : n.id) || l, m = R.useMemo(() => {
    var O;
    return ((O = Dr(s.floating)) == null ? void 0 : O.id) || i;
  }, [s.floating, i]), v = (r = Vo.get(u)) != null ? r : u, y = Rt() != null, p = R.useMemo(() => v === "tooltip" || u === "label" ? {
    ["aria-" + (u === "label" ? "labelledby" : "describedby")]: o ? m : void 0
  } : {
    "aria-expanded": o ? "true" : "false",
    "aria-haspopup": v === "alertdialog" ? "dialog" : v,
    "aria-controls": o ? m : void 0,
    ...v === "listbox" && {
      role: "combobox"
    },
    ...v === "menu" && {
      id: d
    },
    ...v === "menu" && y && {
      role: "menuitem"
    },
    ...u === "select" && {
      "aria-autocomplete": "none"
    },
    ...u === "combobox" && {
      "aria-autocomplete": "list"
    }
  }, [v, m, y, o, d, u]), E = R.useMemo(() => {
    const O = {
      id: m,
      ...v && {
        role: v
      }
    };
    return v === "tooltip" || u === "label" ? O : {
      ...O,
      ...v === "menu" && {
        "aria-labelledby": d
      }
    };
  }, [v, m, d, u]), C = R.useCallback((O) => {
    let {
      active: w,
      selected: P
    } = O;
    const h = {
      role: "option",
      ...w && {
        id: m + "-fui-option"
      }
    };
    switch (u) {
      case "select":
        return {
          ...h,
          "aria-selected": w && P
        };
      case "combobox":
        return {
          ...h,
          "aria-selected": P
        };
    }
    return {};
  }, [m, u]);
  return R.useMemo(() => c ? {
    reference: p,
    floating: E,
    item: C
  } : {}, [c, p, E, C]);
}
function In(e, t, n) {
  return n === void 0 && (n = !0), e.filter((o) => {
    var s;
    return o.parentId === t && (!n || ((s = o.context) == null ? void 0 : s.open));
  }).flatMap((o) => [o, ...In(e, o.id, n)]);
}
function tn(e, t) {
  const [n, r] = e;
  let o = !1;
  const s = t.length;
  for (let i = 0, c = s - 1; i < s; c = i++) {
    const [u, l] = t[i] || [0, 0], [d, m] = t[c] || [0, 0];
    l >= r != m >= r && n <= (d - u) * (r - l) / (m - l) + u && (o = !o);
  }
  return o;
}
function zo(e, t) {
  return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height;
}
function Ho(e) {
  e === void 0 && (e = {});
  const {
    buffer: t = 0.5,
    blockPointerEvents: n = !1,
    requireIntent: r = !0
  } = e, o = {
    current: -1
  };
  let s = !1, i = null, c = null, u = performance.now();
  function l(m, v) {
    const f = performance.now(), y = f - u;
    if (i === null || c === null || y === 0)
      return i = m, c = v, u = f, null;
    const p = m - i, E = v - c, O = Math.sqrt(p * p + E * E) / y;
    return i = m, c = v, u = f, O;
  }
  const d = (m) => {
    let {
      x: v,
      y: f,
      placement: y,
      elements: p,
      onClose: E,
      nodeId: C,
      tree: O
    } = m;
    return function(P) {
      function h() {
        te(o), E();
      }
      if (te(o), !p.domReference || !p.floating || y == null || v == null || f == null)
        return;
      const {
        clientX: q,
        clientY: Y
      } = P, X = [q, Y], Q = No(P), U = P.type === "mouseleave", G = ot(p.floating, Q), Z = ot(p.domReference, Q), $ = p.domReference.getBoundingClientRect(), x = p.floating.getBoundingClientRect(), z = y.split("-")[0], W = v > x.right - x.width / 2, I = f > x.bottom - x.height / 2, _ = zo(X, $), j = x.width > $.width, a = x.height > $.height, g = (j ? $ : x).left, b = (j ? $ : x).right, T = (a ? $ : x).top, M = (a ? $ : x).bottom;
      if (G && (s = !0, !U))
        return;
      if (Z && (s = !1), Z && !U) {
        s = !0;
        return;
      }
      if (U && J(P.relatedTarget) && ot(p.floating, P.relatedTarget) || O && In(O.nodesRef.current, C).length)
        return;
      if (z === "top" && f >= $.bottom - 1 || z === "bottom" && f <= $.top + 1 || z === "left" && v >= $.right - 1 || z === "right" && v <= $.left + 1)
        return h();
      let L = [];
      switch (z) {
        case "top":
          L = [[g, $.top + 1], [g, x.bottom - 1], [b, x.bottom - 1], [b, $.top + 1]];
          break;
        case "bottom":
          L = [[g, x.top + 1], [g, $.bottom - 1], [b, $.bottom - 1], [b, x.top + 1]];
          break;
        case "left":
          L = [[x.right - 1, M], [x.right - 1, T], [$.left + 1, T], [$.left + 1, M]];
          break;
        case "right":
          L = [[$.right - 1, M], [$.right - 1, T], [x.left + 1, T], [x.left + 1, M]];
          break;
      }
      function F(N) {
        let [A, k] = N;
        switch (z) {
          case "top": {
            const D = [j ? A + t / 2 : W ? A + t * 4 : A - t * 4, k + t + 1], H = [j ? A - t / 2 : W ? A + t * 4 : A - t * 4, k + t + 1], S = [[x.left, W || j ? x.bottom - t : x.top], [x.right, W ? j ? x.bottom - t : x.top : x.bottom - t]];
            return [D, H, ...S];
          }
          case "bottom": {
            const D = [j ? A + t / 2 : W ? A + t * 4 : A - t * 4, k - t], H = [j ? A - t / 2 : W ? A + t * 4 : A - t * 4, k - t], S = [[x.left, W || j ? x.top + t : x.bottom], [x.right, W ? j ? x.top + t : x.bottom : x.top + t]];
            return [D, H, ...S];
          }
          case "left": {
            const D = [A + t + 1, a ? k + t / 2 : I ? k + t * 4 : k - t * 4], H = [A + t + 1, a ? k - t / 2 : I ? k + t * 4 : k - t * 4];
            return [...[[I || a ? x.right - t : x.left, x.top], [I ? a ? x.right - t : x.left : x.right - t, x.bottom]], D, H];
          }
          case "right": {
            const D = [A - t, a ? k + t / 2 : I ? k + t * 4 : k - t * 4], H = [A - t, a ? k - t / 2 : I ? k + t * 4 : k - t * 4], S = [[I || a ? x.left + t : x.right, x.top], [I ? a ? x.left + t : x.right : x.left + t, x.bottom]];
            return [D, H, ...S];
          }
        }
      }
      if (!tn([q, Y], L)) {
        if (s && !_)
          return h();
        if (!U && r) {
          const N = l(P.clientX, P.clientY);
          if (N !== null && N < 0.1)
            return h();
        }
        tn([q, Y], F([v, f])) ? !s && r && (o.current = window.setTimeout(h, 40)) : h();
      }
    };
  };
  return d.__options = {
    blockPointerEvents: n
  }, d;
}
const Mn = ({
  heading: e,
  text: t,
  actionButton: n,
  onClick: r,
  className: o,
  children: s,
  media: i,
  mediaPosition: c = "left",
  mediaExdent: u = !1,
  mediaFirst: l = !1,
  mediaInset: d = !1,
  ...m
}) => {
  const f = [
    "usa-card",
    i && "usa-card--media",
    u && "usa-card--exdent",
    l && "usa-card--header-first",
    d && "usa-card--inset",
    o
  ].filter(Boolean).join(" "), y = n && r ? mt.cloneElement(n, { onClick: r }) : n, p = () => i ? /* @__PURE__ */ K.jsx("div", { className: `usa-card__media ${u ? "usa-card__media--exdent" : ""}`, children: /* @__PURE__ */ K.jsx("div", { className: "usa-card__img", children: typeof i == "string" ? /* @__PURE__ */ K.jsx("img", { src: i, alt: "" }) : i }) }) : null;
  return /* @__PURE__ */ K.jsx("div", { className: f, ...m, children: /* @__PURE__ */ K.jsxs("div", { className: "usa-card__container", children: [
    i && p(),
    e && /* @__PURE__ */ K.jsx("div", { className: "usa-card__header", children: /* @__PURE__ */ K.jsx("h4", { className: "usa-card__heading", children: e }) }),
    /* @__PURE__ */ K.jsxs("div", { className: "usa-card__body", children: [
      t && /* @__PURE__ */ K.jsx("p", { children: t }),
      s
    ] }),
    n && /* @__PURE__ */ K.jsx("div", { className: "usa-card__footer", children: y })
  ] }) });
};
Mn.propTypes = {
  heading: ee.string,
  text: ee.string,
  actionButton: ee.node,
  onClick: ee.func,
  className: ee.string,
  children: ee.node,
  media: ee.oneOfType([ee.string, ee.node]),
  mediaPosition: ee.oneOf(["left", "right"]),
  mediaExdent: ee.bool,
  mediaFirst: ee.bool,
  mediaInset: ee.bool
};
const Xo = ({
  children: e,
  cardProps: t,
  position: n = "top",
  className: r = ""
}) => {
  const [o, s] = xt(!1), i = wt(null), c = wt(null), u = typeof window < "u" && !!window.__STORYBOOK_ADDONS_CHANNEL__, { x: l, y: d, strategy: m, refs: v, context: f } = Wo({
    open: o,
    onOpenChange: s,
    placement: n,
    middleware: [
      wo(8),
      So(),
      To({ padding: 8 })
    ],
    whileElementsMounted: vo
  }), y = jo(f, {
    move: !1,
    handleClose: Ho()
  }), p = qo(f), E = Uo(f, { role: "dialog" }), { getReferenceProps: C, getFloatingProps: O } = Bo([
    y,
    p,
    E
  ]), [w, P] = xt(!1);
  ze(() => (P(!0), () => P(!1)), []), ze(() => {
    if (!u)
      if (o && c.current) {
        const Y = c.current.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        Y ? Y.focus() : c.current.focus();
      } else !o && i.current && i.current.focus();
  }, [o, u]), ze(() => {
    if (!o) return;
    const Y = (X) => {
      X.key === "Escape" && s(!1);
    };
    return window.addEventListener("keydown", Y), () => window.removeEventListener("keydown", Y);
  }, [o]);
  const h = t.heading ? "popover-card-heading" : void 0, q = t.heading ? { ...t, heading: /* @__PURE__ */ K.jsx("span", { id: h, children: t.heading }) } : t;
  return /* @__PURE__ */ K.jsxs(K.Fragment, { children: [
    mt.cloneElement(
      e,
      {
        ref: (Y) => {
          v.setReference(Y), i.current = Y;
        },
        ...C()
      }
    ),
    w && o && /* @__PURE__ */ K.jsx(Fo, { children: /* @__PURE__ */ K.jsx(
      "div",
      {
        ref: (Y) => {
          v.setFloating(Y), c.current = Y;
        },
        className: `popover-card ${r}`,
        style: {
          position: m,
          top: d ?? 0,
          left: l ?? 0,
          zIndex: 1e3
        },
        role: "dialog",
        "aria-modal": "false",
        tabIndex: -1,
        "aria-labelledby": h,
        ...O(),
        children: /* @__PURE__ */ K.jsx(Mn, { className: "popover-card__content", ...q })
      }
    ) })
  ] });
};
Xo.propTypes = {
  /** The element that triggers the popover */
  children: ee.element.isRequired,
  /** Props to pass to the Card component */
  cardProps: ee.object.isRequired,
  /** Position of the popover relative to the trigger element */
  position: ee.oneOf(["top", "right", "bottom", "left"]),
  /** Additional CSS classes to apply to the popover */
  className: ee.string
};
export {
  Xo as PopoverWithCard
};
//# sourceMappingURL=index.js.map
