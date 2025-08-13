import * as w from "react";
import on, { useLayoutEffect as sn, useState as xt, useRef as Ln, useEffect as Fn } from "react";
import * as an from "react-dom";
function Nn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ae = { exports: {} }, be = {};
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
function jn() {
  if (Tt) return be;
  Tt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      i = {};
      for (var c in o)
        c !== "key" && (i[c] = o[c]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: s,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return be.Fragment = t, be.jsx = r, be.jsxs = r, be;
}
var Re = {};
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
function $n() {
  return St || (St = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === V ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case d:
          return "Fragment";
        case T:
          return "Profiler";
        case b:
          return "StrictMode";
        case g:
          return "Suspense";
        case W:
          return "SuspenseList";
        case J:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case y:
            return "Portal";
          case x:
            return (a.displayName || "Context") + ".Provider";
          case S:
            return (a._context.displayName || "Context") + ".Consumer";
          case C:
            var h = a.render;
            return a = a.displayName, a || (a = h.displayName || h.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case q:
            return h = a.displayName || null, h !== null ? h : e(a.type) || "Memo";
          case G:
            h = a._payload, a = a._init;
            try {
              return e(a(h));
            } catch {
            }
        }
      return null;
    }
    function t(a) {
      return "" + a;
    }
    function r(a) {
      try {
        t(a);
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var E = h.error, O = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return E.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), t(a);
      }
    }
    function n(a) {
      if (a === d) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === G)
        return "<...>";
      try {
        var h = e(a);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var a = X.A;
      return a === null ? null : a.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(a) {
      if (H.call(a, "key")) {
        var h = Object.getOwnPropertyDescriptor(a, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function c(a, h) {
      function E() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: E,
        configurable: !0
      });
    }
    function u() {
      var a = e(this.type);
      return $[a] || ($[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function l(a, h, E, O, I, D, Y, N) {
      return E = D.ref, a = {
        $$typeof: f,
        type: a,
        key: h,
        props: D,
        _owner: I
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(a, "ref", {
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
        value: Y
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function m(a, h, E, O, I, D, Y, N) {
      var A = h.children;
      if (A !== void 0)
        if (O)
          if (F(A)) {
            for (O = 0; O < A.length; O++)
              p(A[O]);
            Object.freeze && Object.freeze(A);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(A);
      if (H.call(h, "key")) {
        A = e(a);
        var k = Object.keys(h).filter(function(Z) {
          return Z !== "key";
        });
        O = 0 < k.length ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}", L[A + O] || (k = 0 < k.length ? "{" + k.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          A,
          k,
          A
        ), L[A + O] = !0);
      }
      if (A = null, E !== void 0 && (r(E), A = "" + E), s(h) && (r(h.key), A = "" + h.key), "key" in h) {
        E = {};
        for (var j in h)
          j !== "key" && (E[j] = h[j]);
      } else E = h;
      return A && c(
        E,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), l(
        a,
        A,
        D,
        I,
        o(),
        E,
        Y,
        N
      );
    }
    function p(a) {
      typeof a == "object" && a !== null && a.$$typeof === f && a._store && (a._store.validated = 1);
    }
    var v = on, f = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), x = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), J = Symbol.for("react.activity"), V = Symbol.for("react.client.reference"), X = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, F = Array.isArray, R = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var B, $ = {}, M = v["react-stack-bottom-frame"].bind(
      v,
      i
    )(), _ = R(n(i)), L = {};
    Re.Fragment = d, Re.jsx = function(a, h, E, O, I) {
      var D = 1e4 > X.recentlyCreatedOwnerStacks++;
      return m(
        a,
        h,
        E,
        !1,
        O,
        I,
        D ? Error("react-stack-top-frame") : M,
        D ? R(n(a)) : _
      );
    }, Re.jsxs = function(a, h, E, O, I) {
      var D = 1e4 > X.recentlyCreatedOwnerStacks++;
      return m(
        a,
        h,
        E,
        !0,
        O,
        I,
        D ? Error("react-stack-top-frame") : M,
        D ? R(n(a)) : _
      );
    };
  }()), Re;
}
var Ot;
function Yn() {
  return Ot || (Ot = 1, process.env.NODE_ENV === "production" ? Ae.exports = jn() : Ae.exports = $n()), Ae.exports;
}
var oe = Yn(), _e = { exports: {} }, Me = { exports: {} }, U = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function Wn() {
  if (Pt) return U;
  Pt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function x(g) {
    if (typeof g == "object" && g !== null) {
      var W = g.$$typeof;
      switch (W) {
        case t:
          switch (g = g.type, g) {
            case u:
            case l:
            case n:
            case i:
            case o:
            case p:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case c:
                case m:
                case y:
                case f:
                case s:
                  return g;
                default:
                  return W;
              }
          }
        case r:
          return W;
      }
    }
  }
  function C(g) {
    return x(g) === l;
  }
  return U.AsyncMode = u, U.ConcurrentMode = l, U.ContextConsumer = c, U.ContextProvider = s, U.Element = t, U.ForwardRef = m, U.Fragment = n, U.Lazy = y, U.Memo = f, U.Portal = r, U.Profiler = i, U.StrictMode = o, U.Suspense = p, U.isAsyncMode = function(g) {
    return C(g) || x(g) === u;
  }, U.isConcurrentMode = C, U.isContextConsumer = function(g) {
    return x(g) === c;
  }, U.isContextProvider = function(g) {
    return x(g) === s;
  }, U.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, U.isForwardRef = function(g) {
    return x(g) === m;
  }, U.isFragment = function(g) {
    return x(g) === n;
  }, U.isLazy = function(g) {
    return x(g) === y;
  }, U.isMemo = function(g) {
    return x(g) === f;
  }, U.isPortal = function(g) {
    return x(g) === r;
  }, U.isProfiler = function(g) {
    return x(g) === i;
  }, U.isStrictMode = function(g) {
    return x(g) === o;
  }, U.isSuspense = function(g) {
    return x(g) === p;
  }, U.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === l || g === i || g === o || g === p || g === v || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === f || g.$$typeof === s || g.$$typeof === c || g.$$typeof === m || g.$$typeof === b || g.$$typeof === T || g.$$typeof === S || g.$$typeof === d);
  }, U.typeOf = x, U;
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
var Ct;
function qn() {
  return Ct || (Ct = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function x(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === n || P === l || P === i || P === o || P === p || P === v || typeof P == "object" && P !== null && (P.$$typeof === y || P.$$typeof === f || P.$$typeof === s || P.$$typeof === c || P.$$typeof === m || P.$$typeof === b || P.$$typeof === T || P.$$typeof === S || P.$$typeof === d);
    }
    function C(P) {
      if (typeof P == "object" && P !== null) {
        var re = P.$$typeof;
        switch (re) {
          case t:
            var Ce = P.type;
            switch (Ce) {
              case u:
              case l:
              case n:
              case i:
              case o:
              case p:
                return Ce;
              default:
                var wt = Ce && Ce.$$typeof;
                switch (wt) {
                  case c:
                  case m:
                  case y:
                  case f:
                  case s:
                    return wt;
                  default:
                    return re;
                }
            }
          case r:
            return re;
        }
      }
    }
    var g = u, W = l, q = c, G = s, J = t, V = m, X = n, H = y, F = f, R = r, B = i, $ = o, M = p, _ = !1;
    function L(P) {
      return _ || (_ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), a(P) || C(P) === u;
    }
    function a(P) {
      return C(P) === l;
    }
    function h(P) {
      return C(P) === c;
    }
    function E(P) {
      return C(P) === s;
    }
    function O(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function I(P) {
      return C(P) === m;
    }
    function D(P) {
      return C(P) === n;
    }
    function Y(P) {
      return C(P) === y;
    }
    function N(P) {
      return C(P) === f;
    }
    function A(P) {
      return C(P) === r;
    }
    function k(P) {
      return C(P) === i;
    }
    function j(P) {
      return C(P) === o;
    }
    function Z(P) {
      return C(P) === p;
    }
    z.AsyncMode = g, z.ConcurrentMode = W, z.ContextConsumer = q, z.ContextProvider = G, z.Element = J, z.ForwardRef = V, z.Fragment = X, z.Lazy = H, z.Memo = F, z.Portal = R, z.Profiler = B, z.StrictMode = $, z.Suspense = M, z.isAsyncMode = L, z.isConcurrentMode = a, z.isContextConsumer = h, z.isContextProvider = E, z.isElement = O, z.isForwardRef = I, z.isFragment = D, z.isLazy = Y, z.isMemo = N, z.isPortal = A, z.isProfiler = k, z.isStrictMode = j, z.isSuspense = Z, z.isValidElementType = x, z.typeOf = C;
  }()), z;
}
var At;
function cn() {
  return At || (At = 1, process.env.NODE_ENV === "production" ? Me.exports = Wn() : Me.exports = qn()), Me.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var He, _t;
function Bn() {
  if (_t) return He;
  _t = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(s).map(function(m) {
        return s[m];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        l[m] = m;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return He = o() ? Object.assign : function(i, s) {
    for (var c, u = n(i), l, m = 1; m < arguments.length; m++) {
      c = Object(arguments[m]);
      for (var p in c)
        t.call(c, p) && (u[p] = c[p]);
      if (e) {
        l = e(c);
        for (var v = 0; v < l.length; v++)
          r.call(c, l[v]) && (u[l[v]] = c[l[v]]);
      }
    }
    return u;
  }, He;
}
var Xe, Mt;
function mt() {
  if (Mt) return Xe;
  Mt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Xe = e, Xe;
}
var Ge, It;
function un() {
  return It || (It = 1, Ge = Function.call.bind(Object.prototype.hasOwnProperty)), Ge;
}
var Je, kt;
function Vn() {
  if (kt) return Je;
  kt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ mt(), r = {}, n = /* @__PURE__ */ un();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, c, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in i)
        if (n(i, m)) {
          var p;
          try {
            if (typeof i[m] != "function") {
              var v = Error(
                (u || "React class") + ": " + c + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            p = i[m](s, m, u, c, null, t);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var f = l ? l() : "";
            e(
              "Failed " + c + " type: " + p.message + (f ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Je = o, Je;
}
var Ze, Dt;
function Un() {
  if (Dt) return Ze;
  Dt = 1;
  var e = cn(), t = Bn(), r = /* @__PURE__ */ mt(), n = /* @__PURE__ */ un(), o = /* @__PURE__ */ Vn(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Ze = function(c, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function p(a) {
      var h = a && (l && a[l] || a[m]);
      if (typeof h == "function")
        return h;
    }
    var v = "<<anonymous>>", f = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: S(),
      arrayOf: x,
      element: C(),
      elementType: g(),
      instanceOf: W,
      node: V(),
      objectOf: G,
      oneOf: q,
      oneOfType: J,
      shape: H,
      exact: F
    };
    function y(a, h) {
      return a === h ? a !== 0 || 1 / a === 1 / h : a !== a && h !== h;
    }
    function d(a, h) {
      this.message = a, this.data = h && typeof h == "object" ? h : {}, this.stack = "";
    }
    d.prototype = Error.prototype;
    function b(a) {
      if (process.env.NODE_ENV !== "production")
        var h = {}, E = 0;
      function O(D, Y, N, A, k, j, Z) {
        if (A = A || v, j = j || N, Z !== r) {
          if (u) {
            var P = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw P.name = "Invariant Violation", P;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var re = A + ":" + N;
            !h[re] && // Avoid spamming the console because they are often not actionable except for lib authors
            E < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + A + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), h[re] = !0, E++);
          }
        }
        return Y[N] == null ? D ? Y[N] === null ? new d("The " + k + " `" + j + "` is marked as required " + ("in `" + A + "`, but its value is `null`.")) : new d("The " + k + " `" + j + "` is marked as required in " + ("`" + A + "`, but its value is `undefined`.")) : null : a(Y, N, A, k, j);
      }
      var I = O.bind(null, !1);
      return I.isRequired = O.bind(null, !0), I;
    }
    function T(a) {
      function h(E, O, I, D, Y, N) {
        var A = E[O], k = $(A);
        if (k !== a) {
          var j = M(A);
          return new d(
            "Invalid " + D + " `" + Y + "` of type " + ("`" + j + "` supplied to `" + I + "`, expected ") + ("`" + a + "`."),
            { expectedType: a }
          );
        }
        return null;
      }
      return b(h);
    }
    function S() {
      return b(s);
    }
    function x(a) {
      function h(E, O, I, D, Y) {
        if (typeof a != "function")
          return new d("Property `" + Y + "` of component `" + I + "` has invalid PropType notation inside arrayOf.");
        var N = E[O];
        if (!Array.isArray(N)) {
          var A = $(N);
          return new d("Invalid " + D + " `" + Y + "` of type " + ("`" + A + "` supplied to `" + I + "`, expected an array."));
        }
        for (var k = 0; k < N.length; k++) {
          var j = a(N, k, I, D, Y + "[" + k + "]", r);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return b(h);
    }
    function C() {
      function a(h, E, O, I, D) {
        var Y = h[E];
        if (!c(Y)) {
          var N = $(Y);
          return new d("Invalid " + I + " `" + D + "` of type " + ("`" + N + "` supplied to `" + O + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(a);
    }
    function g() {
      function a(h, E, O, I, D) {
        var Y = h[E];
        if (!e.isValidElementType(Y)) {
          var N = $(Y);
          return new d("Invalid " + I + " `" + D + "` of type " + ("`" + N + "` supplied to `" + O + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(a);
    }
    function W(a) {
      function h(E, O, I, D, Y) {
        if (!(E[O] instanceof a)) {
          var N = a.name || v, A = L(E[O]);
          return new d("Invalid " + D + " `" + Y + "` of type " + ("`" + A + "` supplied to `" + I + "`, expected ") + ("instance of `" + N + "`."));
        }
        return null;
      }
      return b(h);
    }
    function q(a) {
      if (!Array.isArray(a))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function h(E, O, I, D, Y) {
        for (var N = E[O], A = 0; A < a.length; A++)
          if (y(N, a[A]))
            return null;
        var k = JSON.stringify(a, function(Z, P) {
          var re = M(P);
          return re === "symbol" ? String(P) : P;
        });
        return new d("Invalid " + D + " `" + Y + "` of value `" + String(N) + "` " + ("supplied to `" + I + "`, expected one of " + k + "."));
      }
      return b(h);
    }
    function G(a) {
      function h(E, O, I, D, Y) {
        if (typeof a != "function")
          return new d("Property `" + Y + "` of component `" + I + "` has invalid PropType notation inside objectOf.");
        var N = E[O], A = $(N);
        if (A !== "object")
          return new d("Invalid " + D + " `" + Y + "` of type " + ("`" + A + "` supplied to `" + I + "`, expected an object."));
        for (var k in N)
          if (n(N, k)) {
            var j = a(N, k, I, D, Y + "." + k, r);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return b(h);
    }
    function J(a) {
      if (!Array.isArray(a))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var h = 0; h < a.length; h++) {
        var E = a[h];
        if (typeof E != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + _(E) + " at index " + h + "."
          ), s;
      }
      function O(I, D, Y, N, A) {
        for (var k = [], j = 0; j < a.length; j++) {
          var Z = a[j], P = Z(I, D, Y, N, A, r);
          if (P == null)
            return null;
          P.data && n(P.data, "expectedType") && k.push(P.data.expectedType);
        }
        var re = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new d("Invalid " + N + " `" + A + "` supplied to " + ("`" + Y + "`" + re + "."));
      }
      return b(O);
    }
    function V() {
      function a(h, E, O, I, D) {
        return R(h[E]) ? null : new d("Invalid " + I + " `" + D + "` supplied to " + ("`" + O + "`, expected a ReactNode."));
      }
      return b(a);
    }
    function X(a, h, E, O, I) {
      return new d(
        (a || "React class") + ": " + h + " type `" + E + "." + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + I + "`."
      );
    }
    function H(a) {
      function h(E, O, I, D, Y) {
        var N = E[O], A = $(N);
        if (A !== "object")
          return new d("Invalid " + D + " `" + Y + "` of type `" + A + "` " + ("supplied to `" + I + "`, expected `object`."));
        for (var k in a) {
          var j = a[k];
          if (typeof j != "function")
            return X(I, D, Y, k, M(j));
          var Z = j(N, k, I, D, Y + "." + k, r);
          if (Z)
            return Z;
        }
        return null;
      }
      return b(h);
    }
    function F(a) {
      function h(E, O, I, D, Y) {
        var N = E[O], A = $(N);
        if (A !== "object")
          return new d("Invalid " + D + " `" + Y + "` of type `" + A + "` " + ("supplied to `" + I + "`, expected `object`."));
        var k = t({}, E[O], a);
        for (var j in k) {
          var Z = a[j];
          if (n(a, j) && typeof Z != "function")
            return X(I, D, Y, j, M(Z));
          if (!Z)
            return new d(
              "Invalid " + D + " `" + Y + "` key `" + j + "` supplied to `" + I + "`.\nBad object: " + JSON.stringify(E[O], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(a), null, "  ")
            );
          var P = Z(N, j, I, D, Y + "." + j, r);
          if (P)
            return P;
        }
        return null;
      }
      return b(h);
    }
    function R(a) {
      switch (typeof a) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !a;
        case "object":
          if (Array.isArray(a))
            return a.every(R);
          if (a === null || c(a))
            return !0;
          var h = p(a);
          if (h) {
            var E = h.call(a), O;
            if (h !== a.entries) {
              for (; !(O = E.next()).done; )
                if (!R(O.value))
                  return !1;
            } else
              for (; !(O = E.next()).done; ) {
                var I = O.value;
                if (I && !R(I[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function B(a, h) {
      return a === "symbol" ? !0 : h ? h["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && h instanceof Symbol : !1;
    }
    function $(a) {
      var h = typeof a;
      return Array.isArray(a) ? "array" : a instanceof RegExp ? "object" : B(h, a) ? "symbol" : h;
    }
    function M(a) {
      if (typeof a > "u" || a === null)
        return "" + a;
      var h = $(a);
      if (h === "object") {
        if (a instanceof Date)
          return "date";
        if (a instanceof RegExp)
          return "regexp";
      }
      return h;
    }
    function _(a) {
      var h = M(a);
      switch (h) {
        case "array":
        case "object":
          return "an " + h;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + h;
        default:
          return h;
      }
    }
    function L(a) {
      return !a.constructor || !a.constructor.name ? v : a.constructor.name;
    }
    return f.checkPropTypes = o, f.resetWarningCache = o.resetWarningCache, f.PropTypes = f, f;
  }, Ze;
}
var Ke, Lt;
function zn() {
  if (Lt) return Ke;
  Lt = 1;
  var e = /* @__PURE__ */ mt();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ke = function() {
    function n(s, c, u, l, m, p) {
      if (p !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Ke;
}
var Ft;
function Hn() {
  if (Ft) return _e.exports;
  if (Ft = 1, process.env.NODE_ENV !== "production") {
    var e = cn(), t = !0;
    _e.exports = /* @__PURE__ */ Un()(e.isElement, t);
  } else
    _e.exports = /* @__PURE__ */ zn()();
  return _e.exports;
}
var Xn = /* @__PURE__ */ Hn();
const ce = /* @__PURE__ */ Nn(Xn);
function Be() {
  return typeof window < "u";
}
function ye(e) {
  return ln(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ee(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ae(e) {
  var t;
  return (t = (ln(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ln(e) {
  return Be() ? e instanceof Node || e instanceof ee(e).Node : !1;
}
function K(e) {
  return Be() ? e instanceof Element || e instanceof ee(e).Element : !1;
}
function te(e) {
  return Be() ? e instanceof HTMLElement || e instanceof ee(e).HTMLElement : !1;
}
function Le(e) {
  return !Be() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ee(e).ShadowRoot;
}
const Gn = /* @__PURE__ */ new Set(["inline", "contents"]);
function Se(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = ne(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !Gn.has(o);
}
const Jn = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Zn(e) {
  return Jn.has(ye(e));
}
const Kn = [":popover-open", ":modal"];
function Ve(e) {
  return Kn.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Qn = ["transform", "translate", "scale", "rotate", "perspective"], er = ["transform", "translate", "scale", "rotate", "perspective", "filter"], tr = ["paint", "layout", "strict", "content"];
function pt(e) {
  const t = vt(), r = K(e) ? ne(e) : e;
  return Qn.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || er.some((n) => (r.willChange || "").includes(n)) || tr.some((n) => (r.contain || "").includes(n));
}
function nr(e) {
  let t = fe(e);
  for (; te(t) && !ge(t); ) {
    if (pt(t))
      return t;
    if (Ve(t))
      return null;
    t = fe(t);
  }
  return null;
}
function vt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const rr = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ge(e) {
  return rr.has(ye(e));
}
function ne(e) {
  return ee(e).getComputedStyle(e);
}
function Ue(e) {
  return K(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function fe(e) {
  if (ye(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Le(e) && e.host || // Fallback.
    ae(e)
  );
  return Le(t) ? t.host : t;
}
function fn(e) {
  const t = fe(e);
  return ge(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : te(t) && Se(t) ? t : fn(t);
}
function we(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = fn(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = ee(o);
  if (i) {
    const c = at(s);
    return t.concat(s, s.visualViewport || [], Se(o) ? o : [], c && r ? we(c) : []);
  }
  return t.concat(o, we(o, [], r));
}
function at(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const he = Math.min, de = Math.max, Fe = Math.round, Ie = Math.floor, ie = (e) => ({
  x: e,
  y: e
}), or = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ir = {
  start: "end",
  end: "start"
};
function ct(e, t, r) {
  return de(e, he(t, r));
}
function Oe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function me(e) {
  return e.split("-")[0];
}
function Pe(e) {
  return e.split("-")[1];
}
function dn(e) {
  return e === "x" ? "y" : "x";
}
function gt(e) {
  return e === "y" ? "height" : "width";
}
const sr = /* @__PURE__ */ new Set(["top", "bottom"]);
function ue(e) {
  return sr.has(me(e)) ? "y" : "x";
}
function ht(e) {
  return dn(ue(e));
}
function ar(e, t, r) {
  r === void 0 && (r = !1);
  const n = Pe(e), o = ht(e), i = gt(o);
  let s = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Ne(s)), [s, Ne(s)];
}
function cr(e) {
  const t = Ne(e);
  return [ut(e), t, ut(t)];
}
function ut(e) {
  return e.replace(/start|end/g, (t) => ir[t]);
}
const Nt = ["left", "right"], jt = ["right", "left"], ur = ["top", "bottom"], lr = ["bottom", "top"];
function fr(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? jt : Nt : t ? Nt : jt;
    case "left":
    case "right":
      return t ? ur : lr;
    default:
      return [];
  }
}
function dr(e, t, r, n) {
  const o = Pe(e);
  let i = fr(me(e), r === "start", n);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ut)))), i;
}
function Ne(e) {
  return e.replace(/left|right|bottom|top/g, (t) => or[t]);
}
function mr(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function mn(e) {
  return typeof e != "number" ? mr(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function je(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: o
  } = e;
  return {
    width: n,
    height: o,
    top: r,
    left: t,
    right: t + n,
    bottom: r + o,
    x: t,
    y: r
  };
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var pr = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], lt = /* @__PURE__ */ pr.join(","), pn = typeof Element > "u", xe = pn ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, $e = !pn && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, Ye = function e(t, r) {
  var n;
  r === void 0 && (r = !0);
  var o = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), i = o === "" || o === "true", s = i || r && t && e(t.parentNode);
  return s;
}, vr = function(t) {
  var r, n = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "contenteditable");
  return n === "" || n === "true";
}, gr = function(t, r, n) {
  if (Ye(t))
    return [];
  var o = Array.prototype.slice.apply(t.querySelectorAll(lt));
  return r && xe.call(t, lt) && o.unshift(t), o = o.filter(n), o;
}, hr = function e(t, r, n) {
  for (var o = [], i = Array.from(t); i.length; ) {
    var s = i.shift();
    if (!Ye(s, !1))
      if (s.tagName === "SLOT") {
        var c = s.assignedElements(), u = c.length ? c : s.children, l = e(u, !0, n);
        n.flatten ? o.push.apply(o, l) : o.push({
          scopeParent: s,
          candidates: l
        });
      } else {
        var m = xe.call(s, lt);
        m && n.filter(s) && (r || !t.includes(s)) && o.push(s);
        var p = s.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(s), v = !Ye(p, !1) && (!n.shadowRootFilter || n.shadowRootFilter(s));
        if (p && v) {
          var f = e(p === !0 ? s.children : p.children, !0, n);
          n.flatten ? o.push.apply(o, f) : o.push({
            scopeParent: s,
            candidates: f
          });
        } else
          i.unshift.apply(i, s.children);
      }
  }
  return o;
}, vn = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, gn = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || vr(t)) && !vn(t) ? 0 : t.tabIndex;
}, yr = function(t, r) {
  var n = gn(t);
  return n < 0 && r && !vn(t) ? 0 : n;
}, br = function(t, r) {
  return t.tabIndex === r.tabIndex ? t.documentOrder - r.documentOrder : t.tabIndex - r.tabIndex;
}, hn = function(t) {
  return t.tagName === "INPUT";
}, Rr = function(t) {
  return hn(t) && t.type === "hidden";
}, Er = function(t) {
  var r = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return r;
}, wr = function(t, r) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === r)
      return t[n];
}, xr = function(t) {
  if (!t.name)
    return !0;
  var r = t.form || $e(t), n = function(c) {
    return r.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = n(window.CSS.escape(t.name));
  else
    try {
      o = n(t.name);
    } catch (s) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1;
    }
  var i = wr(o, t.form);
  return !i || i === t;
}, Tr = function(t) {
  return hn(t) && t.type === "radio";
}, Sr = function(t) {
  return Tr(t) && !xr(t);
}, Or = function(t) {
  var r, n = t && $e(t), o = (r = n) === null || r === void 0 ? void 0 : r.host, i = !1;
  if (n && n !== t) {
    var s, c, u;
    for (i = !!((s = o) !== null && s !== void 0 && (c = s.ownerDocument) !== null && c !== void 0 && c.contains(o) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !i && o; ) {
      var l, m, p;
      n = $e(o), o = (l = n) === null || l === void 0 ? void 0 : l.host, i = !!((m = o) !== null && m !== void 0 && (p = m.ownerDocument) !== null && p !== void 0 && p.contains(o));
    }
  }
  return i;
}, $t = function(t) {
  var r = t.getBoundingClientRect(), n = r.width, o = r.height;
  return n === 0 && o === 0;
}, Pr = function(t, r) {
  var n = r.displayCheck, o = r.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var i = xe.call(t, "details>summary:first-of-type"), s = i ? t.parentElement : t;
  if (xe.call(s, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || n === "legacy-full") {
    if (typeof o == "function") {
      for (var c = t; t; ) {
        var u = t.parentElement, l = $e(t);
        if (u && !u.shadowRoot && o(u) === !0)
          return $t(t);
        t.assignedSlot ? t = t.assignedSlot : !u && l !== t.ownerDocument ? t = l.host : t = u;
      }
      t = c;
    }
    if (Or(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return $t(t);
  return !1;
}, Cr = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var r = t.parentElement; r; ) {
      if (r.tagName === "FIELDSET" && r.disabled) {
        for (var n = 0; n < r.children.length; n++) {
          var o = r.children.item(n);
          if (o.tagName === "LEGEND")
            return xe.call(r, "fieldset[disabled] *") ? !0 : !o.contains(t);
        }
        return !0;
      }
      r = r.parentElement;
    }
  return !1;
}, Ar = function(t, r) {
  return !(r.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Ye(r) || Rr(r) || Pr(r, t) || // For a details element with a summary, the summary element gets the focus
  Er(r) || Cr(r));
}, Yt = function(t, r) {
  return !(Sr(r) || gn(r) < 0 || !Ar(t, r));
}, _r = function(t) {
  var r = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(r) || r >= 0);
}, Mr = function e(t) {
  var r = [], n = [];
  return t.forEach(function(o, i) {
    var s = !!o.scopeParent, c = s ? o.scopeParent : o, u = yr(c, s), l = s ? e(o.candidates) : c;
    u === 0 ? s ? r.push.apply(r, l) : r.push(c) : n.push({
      documentOrder: i,
      tabIndex: u,
      item: o,
      isScope: s,
      content: l
    });
  }), n.sort(br).reduce(function(o, i) {
    return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o;
  }, []).concat(r);
}, yn = function(t, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = hr([t], r.includeContainer, {
    filter: Yt.bind(null, r),
    flatten: !1,
    getShadowRoot: r.getShadowRoot,
    shadowRootFilter: _r
  }) : n = gr(t, r.includeContainer, Yt.bind(null, r)), Mr(n);
};
function Ir() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function kr() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: r,
      version: n
    } = t;
    return r + "/" + n;
  }).join(" ") : navigator.userAgent;
}
function bn() {
  return /apple/i.test(navigator.vendor);
}
function Dr() {
  return Ir().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function Lr() {
  return kr().includes("jsdom/");
}
const Wt = "data-floating-ui-focusable", Fr = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function ft(e) {
  let t = e.activeElement;
  for (; ((r = t) == null || (r = r.shadowRoot) == null ? void 0 : r.activeElement) != null; ) {
    var r;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function We(e, t) {
  if (!e || !t)
    return !1;
  const r = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Le(r)) {
    let n = t;
    for (; n; ) {
      if (e === n)
        return !0;
      n = n.parentNode || n.host;
    }
  }
  return !1;
}
function Nr(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function le(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function Rn(e) {
  return te(e) && e.matches(Fr);
}
function jr(e) {
  if (!e || Lr()) return !0;
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}
function $r(e) {
  return e ? e.hasAttribute(Wt) ? e : e.querySelector("[" + Wt + "]") || e : null;
}
function Te(e, t) {
  const r = ["mouse", "pen"];
  return t || r.push("", void 0), r.includes(e);
}
var Yr = typeof document < "u", Wr = function() {
}, se = Yr ? sn : Wr;
const qr = {
  ...w
};
function ke(e) {
  const t = w.useRef(e);
  return se(() => {
    t.current = e;
  }), t;
}
const Br = qr.useInsertionEffect, Vr = Br || ((e) => e());
function Ee(e) {
  const t = w.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Vr(() => {
    t.current = e;
  }), w.useCallback(function() {
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...n);
  }, []);
}
const En = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function wn(e, t) {
  const r = yn(e, En()), n = r.length;
  if (n === 0) return;
  const o = ft(le(e)), i = r.indexOf(o), s = i === -1 ? t === 1 ? 0 : n - 1 : i + t;
  return r[s];
}
function Ur(e) {
  return wn(le(e).body, 1) || e;
}
function zr(e) {
  return wn(le(e).body, -1) || e;
}
function Qe(e, t) {
  const r = t || e.currentTarget, n = e.relatedTarget;
  return !n || !We(r, n);
}
function Hr(e) {
  yn(e, En()).forEach((r) => {
    r.dataset.tabindex = r.getAttribute("tabindex") || "", r.setAttribute("tabindex", "-1");
  });
}
function qt(e) {
  e.querySelectorAll("[data-tabindex]").forEach((r) => {
    const n = r.dataset.tabindex;
    delete r.dataset.tabindex, n ? r.setAttribute("tabindex", n) : r.removeAttribute("tabindex");
  });
}
function Bt(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const i = ue(t), s = ht(t), c = gt(s), u = me(t), l = i === "y", m = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, v = n[c] / 2 - o[c] / 2;
  let f;
  switch (u) {
    case "top":
      f = {
        x: m,
        y: n.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: m,
        y: n.y + n.height
      };
      break;
    case "right":
      f = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      f = {
        x: n.x - o.width,
        y: p
      };
      break;
    default:
      f = {
        x: n.x,
        y: n.y
      };
  }
  switch (Pe(t)) {
    case "start":
      f[s] -= v * (r && l ? -1 : 1);
      break;
    case "end":
      f[s] += v * (r && l ? -1 : 1);
      break;
  }
  return f;
}
const Xr = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = r, c = i.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: m,
    y: p
  } = Bt(l, n, u), v = n, f = {}, y = 0;
  for (let d = 0; d < c.length; d++) {
    const {
      name: b,
      fn: T
    } = c[d], {
      x: S,
      y: x,
      data: C,
      reset: g
    } = await T({
      x: m,
      y: p,
      initialPlacement: n,
      placement: v,
      strategy: o,
      middlewareData: f,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    m = S ?? m, p = x ?? p, f = {
      ...f,
      [b]: {
        ...f[b],
        ...C
      }
    }, g && y <= 50 && (y++, typeof g == "object" && (g.placement && (v = g.placement), g.rects && (l = g.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : g.rects), {
      x: m,
      y: p
    } = Bt(l, v, u)), d = -1);
  }
  return {
    x: m,
    y: p,
    placement: v,
    strategy: o,
    middlewareData: f
  };
};
async function xn(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: i,
    rects: s,
    elements: c,
    strategy: u
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: p = "floating",
    altBoundary: v = !1,
    padding: f = 0
  } = Oe(t, e), y = mn(f), b = c[v ? p === "floating" ? "reference" : "floating" : p], T = je(await i.getClippingRect({
    element: (r = await (i.isElement == null ? void 0 : i.isElement(b))) == null || r ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: l,
    rootBoundary: m,
    strategy: u
  })), S = p === "floating" ? {
    x: n,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), C = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, g = je(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: S,
    offsetParent: x,
    strategy: u
  }) : S);
  return {
    top: (T.top - g.top + y.top) / C.y,
    bottom: (g.bottom - T.bottom + y.bottom) / C.y,
    left: (T.left - g.left + y.left) / C.x,
    right: (g.right - T.right + y.right) / C.x
  };
}
const Gr = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: o,
      rects: i,
      platform: s,
      elements: c,
      middlewareData: u
    } = t, {
      element: l,
      padding: m = 0
    } = Oe(e, t) || {};
    if (l == null)
      return {};
    const p = mn(m), v = {
      x: r,
      y: n
    }, f = ht(o), y = gt(f), d = await s.getDimensions(l), b = f === "y", T = b ? "top" : "left", S = b ? "bottom" : "right", x = b ? "clientHeight" : "clientWidth", C = i.reference[y] + i.reference[f] - v[f] - i.floating[y], g = v[f] - i.reference[f], W = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let q = W ? W[x] : 0;
    (!q || !await (s.isElement == null ? void 0 : s.isElement(W))) && (q = c.floating[x] || i.floating[y]);
    const G = C / 2 - g / 2, J = q / 2 - d[y] / 2 - 1, V = he(p[T], J), X = he(p[S], J), H = V, F = q - d[y] - X, R = q / 2 - d[y] / 2 + G, B = ct(H, R, F), $ = !u.arrow && Pe(o) != null && R !== B && i.reference[y] / 2 - (R < H ? V : X) - d[y] / 2 < 0, M = $ ? R < H ? R - H : R - F : 0;
    return {
      [f]: v[f] + M,
      data: {
        [f]: B,
        centerOffset: R - B - M,
        ...$ && {
          alignmentOffset: M
        }
      },
      reset: $
    };
  }
}), Jr = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: c,
        platform: u,
        elements: l
      } = t, {
        mainAxis: m = !0,
        crossAxis: p = !0,
        fallbackPlacements: v,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: d = !0,
        ...b
      } = Oe(e, t);
      if ((r = i.arrow) != null && r.alignmentOffset)
        return {};
      const T = me(o), S = ue(c), x = me(c) === c, C = await (u.isRTL == null ? void 0 : u.isRTL(l.floating)), g = v || (x || !d ? [Ne(c)] : cr(c)), W = y !== "none";
      !v && W && g.push(...dr(c, d, y, C));
      const q = [c, ...g], G = await xn(t, b), J = [];
      let V = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (m && J.push(G[T]), p) {
        const R = ar(o, s, C);
        J.push(G[R[0]], G[R[1]]);
      }
      if (V = [...V, {
        placement: o,
        overflows: J
      }], !J.every((R) => R <= 0)) {
        var X, H;
        const R = (((X = i.flip) == null ? void 0 : X.index) || 0) + 1, B = q[R];
        if (B && (!(p === "alignment" ? S !== ue(B) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        V.every((_) => _.overflows[0] > 0 && ue(_.placement) === S)))
          return {
            data: {
              index: R,
              overflows: V
            },
            reset: {
              placement: B
            }
          };
        let $ = (H = V.filter((M) => M.overflows[0] <= 0).sort((M, _) => M.overflows[1] - _.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!$)
          switch (f) {
            case "bestFit": {
              var F;
              const M = (F = V.filter((_) => {
                if (W) {
                  const L = ue(_.placement);
                  return L === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((_) => [_.placement, _.overflows.filter((L) => L > 0).reduce((L, a) => L + a, 0)]).sort((_, L) => _[1] - L[1])[0]) == null ? void 0 : F[0];
              M && ($ = M);
              break;
            }
            case "initialPlacement":
              $ = c;
              break;
          }
        if (o !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
}, Zr = /* @__PURE__ */ new Set(["left", "top"]);
async function Kr(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, i = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), s = me(r), c = Pe(r), u = ue(r) === "y", l = Zr.has(s) ? -1 : 1, m = i && u ? -1 : 1, p = Oe(t, e);
  let {
    mainAxis: v,
    crossAxis: f,
    alignmentAxis: y
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return c && typeof y == "number" && (f = c === "end" ? y * -1 : y), u ? {
    x: f * m,
    y: v * l
  } : {
    x: v * l,
    y: f * m
  };
}
const Qr = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: c
      } = t, u = await Kr(t, e);
      return s === ((r = c.offset) == null ? void 0 : r.placement) && (n = c.arrow) != null && n.alignmentOffset ? {} : {
        x: o + u.x,
        y: i + u.y,
        data: {
          ...u,
          placement: s
        }
      };
    }
  };
}, eo = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: c = {
          fn: (b) => {
            let {
              x: T,
              y: S
            } = b;
            return {
              x: T,
              y: S
            };
          }
        },
        ...u
      } = Oe(e, t), l = {
        x: r,
        y: n
      }, m = await xn(t, u), p = ue(me(o)), v = dn(p);
      let f = l[v], y = l[p];
      if (i) {
        const b = v === "y" ? "top" : "left", T = v === "y" ? "bottom" : "right", S = f + m[b], x = f - m[T];
        f = ct(S, f, x);
      }
      if (s) {
        const b = p === "y" ? "top" : "left", T = p === "y" ? "bottom" : "right", S = y + m[b], x = y - m[T];
        y = ct(S, y, x);
      }
      const d = c.fn({
        ...t,
        [v]: f,
        [p]: y
      });
      return {
        ...d,
        data: {
          x: d.x - r,
          y: d.y - n,
          enabled: {
            [v]: i,
            [p]: s
          }
        }
      };
    }
  };
};
function Tn(e) {
  const t = ne(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = te(e), i = o ? e.offsetWidth : r, s = o ? e.offsetHeight : n, c = Fe(r) !== i || Fe(n) !== s;
  return c && (r = i, n = s), {
    width: r,
    height: n,
    $: c
  };
}
function yt(e) {
  return K(e) ? e : e.contextElement;
}
function ve(e) {
  const t = yt(e);
  if (!te(t))
    return ie(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: i
  } = Tn(t);
  let s = (i ? Fe(r.width) : r.width) / n, c = (i ? Fe(r.height) : r.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const to = /* @__PURE__ */ ie(0);
function Sn(e) {
  const t = ee(e);
  return !vt() || !t.visualViewport ? to : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function no(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== ee(e) ? !1 : t;
}
function pe(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), i = yt(e);
  let s = ie(1);
  t && (n ? K(n) && (s = ve(n)) : s = ve(e));
  const c = no(i, r, n) ? Sn(i) : ie(0);
  let u = (o.left + c.x) / s.x, l = (o.top + c.y) / s.y, m = o.width / s.x, p = o.height / s.y;
  if (i) {
    const v = ee(i), f = n && K(n) ? ee(n) : n;
    let y = v, d = at(y);
    for (; d && n && f !== y; ) {
      const b = ve(d), T = d.getBoundingClientRect(), S = ne(d), x = T.left + (d.clientLeft + parseFloat(S.paddingLeft)) * b.x, C = T.top + (d.clientTop + parseFloat(S.paddingTop)) * b.y;
      u *= b.x, l *= b.y, m *= b.x, p *= b.y, u += x, l += C, y = ee(d), d = at(y);
    }
  }
  return je({
    width: m,
    height: p,
    x: u,
    y: l
  });
}
function bt(e, t) {
  const r = Ue(e).scrollLeft;
  return t ? t.left + r : pe(ae(e)).left + r;
}
function On(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    bt(e, n)
  )), i = n.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function ro(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const i = o === "fixed", s = ae(n), c = t ? Ve(t.floating) : !1;
  if (n === s || c && i)
    return r;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = ie(1);
  const m = ie(0), p = te(n);
  if ((p || !p && !i) && ((ye(n) !== "body" || Se(s)) && (u = Ue(n)), te(n))) {
    const f = pe(n);
    l = ve(n), m.x = f.x + n.clientLeft, m.y = f.y + n.clientTop;
  }
  const v = s && !p && !i ? On(s, u, !0) : ie(0);
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - u.scrollLeft * l.x + m.x + v.x,
    y: r.y * l.y - u.scrollTop * l.y + m.y + v.y
  };
}
function oo(e) {
  return Array.from(e.getClientRects());
}
function io(e) {
  const t = ae(e), r = Ue(e), n = e.ownerDocument.body, o = de(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = de(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -r.scrollLeft + bt(e);
  const c = -r.scrollTop;
  return ne(n).direction === "rtl" && (s += de(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: c
  };
}
function so(e, t) {
  const r = ee(e), n = ae(e), o = r.visualViewport;
  let i = n.clientWidth, s = n.clientHeight, c = 0, u = 0;
  if (o) {
    i = o.width, s = o.height;
    const l = vt();
    (!l || l && t === "fixed") && (c = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: c,
    y: u
  };
}
const ao = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function co(e, t) {
  const r = pe(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, i = te(e) ? ve(e) : ie(1), s = e.clientWidth * i.x, c = e.clientHeight * i.y, u = o * i.x, l = n * i.y;
  return {
    width: s,
    height: c,
    x: u,
    y: l
  };
}
function Vt(e, t, r) {
  let n;
  if (t === "viewport")
    n = so(e, r);
  else if (t === "document")
    n = io(ae(e));
  else if (K(t))
    n = co(t, r);
  else {
    const o = Sn(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return je(n);
}
function Pn(e, t) {
  const r = fe(e);
  return r === t || !K(r) || ge(r) ? !1 : ne(r).position === "fixed" || Pn(r, t);
}
function uo(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = we(e, [], !1).filter((c) => K(c) && ye(c) !== "body"), o = null;
  const i = ne(e).position === "fixed";
  let s = i ? fe(e) : e;
  for (; K(s) && !ge(s); ) {
    const c = ne(s), u = pt(s);
    !u && c.position === "fixed" && (o = null), (i ? !u && !o : !u && c.position === "static" && !!o && ao.has(o.position) || Se(s) && !u && Pn(e, s)) ? n = n.filter((m) => m !== s) : o = c, s = fe(s);
  }
  return t.set(e, n), n;
}
function lo(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const s = [...r === "clippingAncestors" ? Ve(t) ? [] : uo(t, this._c) : [].concat(r), n], c = s[0], u = s.reduce((l, m) => {
    const p = Vt(t, m, o);
    return l.top = de(p.top, l.top), l.right = he(p.right, l.right), l.bottom = he(p.bottom, l.bottom), l.left = de(p.left, l.left), l;
  }, Vt(t, c, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function fo(e) {
  const {
    width: t,
    height: r
  } = Tn(e);
  return {
    width: t,
    height: r
  };
}
function mo(e, t, r) {
  const n = te(t), o = ae(t), i = r === "fixed", s = pe(e, !0, i, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = ie(0);
  function l() {
    u.x = bt(o);
  }
  if (n || !n && !i)
    if ((ye(t) !== "body" || Se(o)) && (c = Ue(t)), n) {
      const f = pe(t, !0, i, t);
      u.x = f.x + t.clientLeft, u.y = f.y + t.clientTop;
    } else o && l();
  i && !n && o && l();
  const m = o && !n && !i ? On(o, c) : ie(0), p = s.left + c.scrollLeft - u.x - m.x, v = s.top + c.scrollTop - u.y - m.y;
  return {
    x: p,
    y: v,
    width: s.width,
    height: s.height
  };
}
function et(e) {
  return ne(e).position === "static";
}
function Ut(e, t) {
  if (!te(e) || ne(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return ae(e) === r && (r = r.ownerDocument.body), r;
}
function Cn(e, t) {
  const r = ee(e);
  if (Ve(e))
    return r;
  if (!te(e)) {
    let o = fe(e);
    for (; o && !ge(o); ) {
      if (K(o) && !et(o))
        return o;
      o = fe(o);
    }
    return r;
  }
  let n = Ut(e, t);
  for (; n && Zn(n) && et(n); )
    n = Ut(n, t);
  return n && ge(n) && et(n) && !pt(n) ? r : n || nr(e) || r;
}
const po = async function(e) {
  const t = this.getOffsetParent || Cn, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: mo(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function vo(e) {
  return ne(e).direction === "rtl";
}
const go = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ro,
  getDocumentElement: ae,
  getClippingRect: lo,
  getOffsetParent: Cn,
  getElementRects: po,
  getClientRects: oo,
  getDimensions: fo,
  getScale: ve,
  isElement: K,
  isRTL: vo
};
function An(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ho(e, t) {
  let r = null, n;
  const o = ae(e);
  function i() {
    var c;
    clearTimeout(n), (c = r) == null || c.disconnect(), r = null;
  }
  function s(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), i();
    const l = e.getBoundingClientRect(), {
      left: m,
      top: p,
      width: v,
      height: f
    } = l;
    if (c || t(), !v || !f)
      return;
    const y = Ie(p), d = Ie(o.clientWidth - (m + v)), b = Ie(o.clientHeight - (p + f)), T = Ie(m), x = {
      rootMargin: -y + "px " + -d + "px " + -b + "px " + -T + "px",
      threshold: de(0, he(1, u)) || 1
    };
    let C = !0;
    function g(W) {
      const q = W[0].intersectionRatio;
      if (q !== u) {
        if (!C)
          return s();
        q ? s(!1, q) : n = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      q === 1 && !An(l, e.getBoundingClientRect()) && s(), C = !1;
    }
    try {
      r = new IntersectionObserver(g, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(g, x);
    }
    r.observe(e);
  }
  return s(!0), i;
}
function yo(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, l = yt(e), m = o || i ? [...l ? we(l) : [], ...we(t)] : [];
  m.forEach((T) => {
    o && T.addEventListener("scroll", r, {
      passive: !0
    }), i && T.addEventListener("resize", r);
  });
  const p = l && c ? ho(l, r) : null;
  let v = -1, f = null;
  s && (f = new ResizeObserver((T) => {
    let [S] = T;
    S && S.target === l && f && (f.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var x;
      (x = f) == null || x.observe(t);
    })), r();
  }), l && !u && f.observe(l), f.observe(t));
  let y, d = u ? pe(e) : null;
  u && b();
  function b() {
    const T = pe(e);
    d && !An(d, T) && r(), d = T, y = requestAnimationFrame(b);
  }
  return r(), () => {
    var T;
    m.forEach((S) => {
      o && S.removeEventListener("scroll", r), i && S.removeEventListener("resize", r);
    }), p == null || p(), (T = f) == null || T.disconnect(), f = null, u && cancelAnimationFrame(y);
  };
}
const bo = Qr, Ro = eo, Eo = Jr, zt = Gr, wo = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: go,
    ...r
  }, i = {
    ...o.platform,
    _c: n
  };
  return Xr(e, t, {
    ...o,
    platform: i
  });
};
var xo = typeof document < "u", To = function() {
}, De = xo ? sn : To;
function qe(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!qe(e[n], t[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const i = o[n];
      if (!(i === "_owner" && e.$$typeof) && !qe(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function _n(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ht(e, t) {
  const r = _n(e);
  return Math.round(t * r) / r;
}
function tt(e) {
  const t = w.useRef(e);
  return De(() => {
    t.current = e;
  }), t;
}
function So(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: u,
    open: l
  } = e, [m, p] = w.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, f] = w.useState(n);
  qe(v, n) || f(n);
  const [y, d] = w.useState(null), [b, T] = w.useState(null), S = w.useCallback((_) => {
    _ !== W.current && (W.current = _, d(_));
  }, []), x = w.useCallback((_) => {
    _ !== q.current && (q.current = _, T(_));
  }, []), C = i || y, g = s || b, W = w.useRef(null), q = w.useRef(null), G = w.useRef(m), J = u != null, V = tt(u), X = tt(o), H = tt(l), F = w.useCallback(() => {
    if (!W.current || !q.current)
      return;
    const _ = {
      placement: t,
      strategy: r,
      middleware: v
    };
    X.current && (_.platform = X.current), wo(W.current, q.current, _).then((L) => {
      const a = {
        ...L,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: H.current !== !1
      };
      R.current && !qe(G.current, a) && (G.current = a, an.flushSync(() => {
        p(a);
      }));
    });
  }, [v, t, r, X, H]);
  De(() => {
    l === !1 && G.current.isPositioned && (G.current.isPositioned = !1, p((_) => ({
      ..._,
      isPositioned: !1
    })));
  }, [l]);
  const R = w.useRef(!1);
  De(() => (R.current = !0, () => {
    R.current = !1;
  }), []), De(() => {
    if (C && (W.current = C), g && (q.current = g), C && g) {
      if (V.current)
        return V.current(C, g, F);
      F();
    }
  }, [C, g, F, V, J]);
  const B = w.useMemo(() => ({
    reference: W,
    floating: q,
    setReference: S,
    setFloating: x
  }), [S, x]), $ = w.useMemo(() => ({
    reference: C,
    floating: g
  }), [C, g]), M = w.useMemo(() => {
    const _ = {
      position: r,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return _;
    const L = Ht($.floating, m.x), a = Ht($.floating, m.y);
    return c ? {
      ..._,
      transform: "translate(" + L + "px, " + a + "px)",
      ..._n($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: L,
      top: a
    };
  }, [r, c, $.floating, m.x, m.y]);
  return w.useMemo(() => ({
    ...m,
    update: F,
    refs: B,
    elements: $,
    floatingStyles: M
  }), [m, F, B, $, M]);
}
const Oo = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: n,
        padding: o
      } = typeof e == "function" ? e(r) : e;
      return n && t(n) ? n.current != null ? zt({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? zt({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, Po = (e, t) => ({
  ...bo(e),
  options: [e, t]
}), Co = (e, t) => ({
  ...Ro(e),
  options: [e, t]
}), Ao = (e, t) => ({
  ...Eo(e),
  options: [e, t]
}), _o = (e, t) => ({
  ...Oo(e),
  options: [e, t]
}), Mo = "data-floating-ui-focusable", Xt = "active", Gt = "selected", Io = {
  ...w
};
let Jt = !1, ko = 0;
const Zt = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + ko++
);
function Do() {
  const [e, t] = w.useState(() => Jt ? Zt() : void 0);
  return se(() => {
    e == null && t(Zt());
  }, []), w.useEffect(() => {
    Jt = !0;
  }, []), e;
}
const Lo = Io.useId, Rt = Lo || Do;
let dt;
process.env.NODE_ENV !== "production" && (dt = /* @__PURE__ */ new Set());
function Fo() {
  for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  const o = "Floating UI: " + r.join(" ");
  if (!((e = dt) != null && e.has(o))) {
    var i;
    (i = dt) == null || i.add(o), console.error(o);
  }
}
function No() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, r) {
      var n;
      (n = e.get(t)) == null || n.forEach((o) => o(r));
    },
    on(t, r) {
      e.has(t) || e.set(t, /* @__PURE__ */ new Set()), e.get(t).add(r);
    },
    off(t, r) {
      var n;
      (n = e.get(t)) == null || n.delete(r);
    }
  };
}
const jo = /* @__PURE__ */ w.createContext(null), $o = /* @__PURE__ */ w.createContext(null), Et = () => {
  var e;
  return ((e = w.useContext(jo)) == null ? void 0 : e.id) || null;
}, Mn = () => w.useContext($o);
function ze(e) {
  return "data-floating-ui-" + e;
}
function Q(e) {
  e.current !== -1 && (clearTimeout(e.current), e.current = -1);
}
const Kt = /* @__PURE__ */ ze("safe-polygon");
function nt(e, t, r) {
  if (r && !Te(r))
    return 0;
  if (typeof e == "number")
    return e;
  if (typeof e == "function") {
    const n = e();
    return typeof n == "number" ? n : n == null ? void 0 : n[t];
  }
  return e == null ? void 0 : e[t];
}
function rt(e) {
  return typeof e == "function" ? e() : e;
}
function Yo(e, t) {
  t === void 0 && (t = {});
  const {
    open: r,
    onOpenChange: n,
    dataRef: o,
    events: i,
    elements: s
  } = e, {
    enabled: c = !0,
    delay: u = 0,
    handleClose: l = null,
    mouseOnly: m = !1,
    restMs: p = 0,
    move: v = !0
  } = t, f = Mn(), y = Et(), d = ke(l), b = ke(u), T = ke(r), S = ke(p), x = w.useRef(), C = w.useRef(-1), g = w.useRef(), W = w.useRef(-1), q = w.useRef(!0), G = w.useRef(!1), J = w.useRef(() => {
  }), V = w.useRef(!1), X = Ee(() => {
    var M;
    const _ = (M = o.current.openEvent) == null ? void 0 : M.type;
    return (_ == null ? void 0 : _.includes("mouse")) && _ !== "mousedown";
  });
  w.useEffect(() => {
    if (!c) return;
    function M(_) {
      let {
        open: L
      } = _;
      L || (Q(C), Q(W), q.current = !0, V.current = !1);
    }
    return i.on("openchange", M), () => {
      i.off("openchange", M);
    };
  }, [c, i]), w.useEffect(() => {
    if (!c || !d.current || !r) return;
    function M(L) {
      X() && n(!1, L, "hover");
    }
    const _ = le(s.floating).documentElement;
    return _.addEventListener("mouseleave", M), () => {
      _.removeEventListener("mouseleave", M);
    };
  }, [s.floating, r, n, c, d, X]);
  const H = w.useCallback(function(M, _, L) {
    _ === void 0 && (_ = !0), L === void 0 && (L = "hover");
    const a = nt(b.current, "close", x.current);
    a && !g.current ? (Q(C), C.current = window.setTimeout(() => n(!1, M, L), a)) : _ && (Q(C), n(!1, M, L));
  }, [b, n]), F = Ee(() => {
    J.current(), g.current = void 0;
  }), R = Ee(() => {
    if (G.current) {
      const M = le(s.floating).body;
      M.style.pointerEvents = "", M.removeAttribute(Kt), G.current = !1;
    }
  }), B = Ee(() => o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1);
  w.useEffect(() => {
    if (!c) return;
    function M(E) {
      if (Q(C), q.current = !1, m && !Te(x.current) || rt(S.current) > 0 && !nt(b.current, "open"))
        return;
      const O = nt(b.current, "open", x.current);
      O ? C.current = window.setTimeout(() => {
        T.current || n(!0, E, "hover");
      }, O) : r || n(!0, E, "hover");
    }
    function _(E) {
      if (B()) {
        R();
        return;
      }
      J.current();
      const O = le(s.floating);
      if (Q(W), V.current = !1, d.current && o.current.floatingContext) {
        r || Q(C), g.current = d.current({
          ...o.current.floatingContext,
          tree: f,
          x: E.clientX,
          y: E.clientY,
          onClose() {
            R(), F(), B() || H(E, !0, "safe-polygon");
          }
        });
        const D = g.current;
        O.addEventListener("mousemove", D), J.current = () => {
          O.removeEventListener("mousemove", D);
        };
        return;
      }
      (x.current === "touch" ? !We(s.floating, E.relatedTarget) : !0) && H(E);
    }
    function L(E) {
      B() || o.current.floatingContext && (d.current == null || d.current({
        ...o.current.floatingContext,
        tree: f,
        x: E.clientX,
        y: E.clientY,
        onClose() {
          R(), F(), B() || H(E);
        }
      })(E));
    }
    function a() {
      Q(C);
    }
    function h(E) {
      B() || H(E, !1);
    }
    if (K(s.domReference)) {
      const E = s.domReference, O = s.floating;
      return r && E.addEventListener("mouseleave", L), v && E.addEventListener("mousemove", M, {
        once: !0
      }), E.addEventListener("mouseenter", M), E.addEventListener("mouseleave", _), O && (O.addEventListener("mouseleave", L), O.addEventListener("mouseenter", a), O.addEventListener("mouseleave", h)), () => {
        r && E.removeEventListener("mouseleave", L), v && E.removeEventListener("mousemove", M), E.removeEventListener("mouseenter", M), E.removeEventListener("mouseleave", _), O && (O.removeEventListener("mouseleave", L), O.removeEventListener("mouseenter", a), O.removeEventListener("mouseleave", h));
      };
    }
  }, [s, c, e, m, v, H, F, R, n, r, T, f, b, d, o, B, S]), se(() => {
    var M;
    if (c && r && (M = d.current) != null && (M = M.__options) != null && M.blockPointerEvents && X()) {
      G.current = !0;
      const L = s.floating;
      if (K(s.domReference) && L) {
        var _;
        const a = le(s.floating).body;
        a.setAttribute(Kt, "");
        const h = s.domReference, E = f == null || (_ = f.nodesRef.current.find((O) => O.id === y)) == null || (_ = _.context) == null ? void 0 : _.elements.floating;
        return E && (E.style.pointerEvents = ""), a.style.pointerEvents = "none", h.style.pointerEvents = "auto", L.style.pointerEvents = "auto", () => {
          a.style.pointerEvents = "", h.style.pointerEvents = "", L.style.pointerEvents = "";
        };
      }
    }
  }, [c, r, y, s, f, d, X]), se(() => {
    r || (x.current = void 0, V.current = !1, F(), R());
  }, [r, F, R]), w.useEffect(() => () => {
    F(), Q(C), Q(W), R();
  }, [c, s.domReference, F, R]);
  const $ = w.useMemo(() => {
    function M(_) {
      x.current = _.pointerType;
    }
    return {
      onPointerDown: M,
      onPointerEnter: M,
      onMouseMove(_) {
        const {
          nativeEvent: L
        } = _;
        function a() {
          !q.current && !T.current && n(!0, L, "hover");
        }
        m && !Te(x.current) || r || rt(S.current) === 0 || V.current && _.movementX ** 2 + _.movementY ** 2 < 2 || (Q(W), x.current === "touch" ? a() : (V.current = !0, W.current = window.setTimeout(a, rt(S.current))));
      }
    };
  }, [m, n, r, T, S]);
  return w.useMemo(() => c ? {
    reference: $
  } : {}, [c, $]);
}
function ot(e, t) {
  if (!e || !t)
    return !1;
  const r = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Le(r)) {
    let n = t;
    for (; n; ) {
      if (e === n)
        return !0;
      n = n.parentNode || n.host;
    }
  }
  return !1;
}
function Wo(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const In = {
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
}, Qt = /* @__PURE__ */ w.forwardRef(function(t, r) {
  const [n, o] = w.useState();
  se(() => {
    bn() && o("button");
  }, []);
  const i = {
    ref: r,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: n,
    "aria-hidden": n ? void 0 : !0,
    [ze("focus-guard")]: "",
    style: In
  };
  return /* @__PURE__ */ oe.jsx("span", {
    ...t,
    ...i
  });
}), kn = /* @__PURE__ */ w.createContext(null), en = /* @__PURE__ */ ze("portal");
function qo(e) {
  e === void 0 && (e = {});
  const {
    id: t,
    root: r
  } = e, n = Rt(), o = Vo(), [i, s] = w.useState(null), c = w.useRef(null);
  return se(() => () => {
    i == null || i.remove(), queueMicrotask(() => {
      c.current = null;
    });
  }, [i]), se(() => {
    if (!n || c.current) return;
    const u = t ? document.getElementById(t) : null;
    if (!u) return;
    const l = document.createElement("div");
    l.id = n, l.setAttribute(en, ""), u.appendChild(l), c.current = l, s(l);
  }, [t, n]), se(() => {
    if (r === null || !n || c.current) return;
    let u = r || (o == null ? void 0 : o.portalNode);
    u && !K(u) && (u = u.current), u = u || document.body;
    let l = null;
    t && (l = document.createElement("div"), l.id = t, u.appendChild(l));
    const m = document.createElement("div");
    m.id = n, m.setAttribute(en, ""), u = l || u, u.appendChild(m), c.current = m, s(m);
  }, [t, r, n, o]), i;
}
function Bo(e) {
  const {
    children: t,
    id: r,
    root: n,
    preserveTabOrder: o = !0
  } = e, i = qo({
    id: r,
    root: n
  }), [s, c] = w.useState(null), u = w.useRef(null), l = w.useRef(null), m = w.useRef(null), p = w.useRef(null), v = s == null ? void 0 : s.modal, f = s == null ? void 0 : s.open, y = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!s && // Guards are only for non-modal focus management.
    !s.modal && // Don't render if unmount is transitioning.
    s.open && o && !!(n || i)
  );
  return w.useEffect(() => {
    if (!i || !o || v)
      return;
    function d(b) {
      i && Qe(b) && (b.type === "focusin" ? qt : Hr)(i);
    }
    return i.addEventListener("focusin", d, !0), i.addEventListener("focusout", d, !0), () => {
      i.removeEventListener("focusin", d, !0), i.removeEventListener("focusout", d, !0);
    };
  }, [i, o, v]), w.useEffect(() => {
    i && (f || qt(i));
  }, [f, i]), /* @__PURE__ */ oe.jsxs(kn.Provider, {
    value: w.useMemo(() => ({
      preserveTabOrder: o,
      beforeOutsideRef: u,
      afterOutsideRef: l,
      beforeInsideRef: m,
      afterInsideRef: p,
      portalNode: i,
      setFocusManagerState: c
    }), [o, i]),
    children: [y && i && /* @__PURE__ */ oe.jsx(Qt, {
      "data-type": "outside",
      ref: u,
      onFocus: (d) => {
        if (Qe(d, i)) {
          var b;
          (b = m.current) == null || b.focus();
        } else {
          const T = s ? s.domReference : null, S = zr(T);
          S == null || S.focus();
        }
      }
    }), y && i && /* @__PURE__ */ oe.jsx("span", {
      "aria-owns": i.id,
      style: In
    }), i && /* @__PURE__ */ an.createPortal(t, i), y && i && /* @__PURE__ */ oe.jsx(Qt, {
      "data-type": "outside",
      ref: l,
      onFocus: (d) => {
        if (Qe(d, i)) {
          var b;
          (b = p.current) == null || b.focus();
        } else {
          const T = s ? s.domReference : null, S = Ur(T);
          S == null || S.focus(), s != null && s.closeOnFocusOut && (s == null || s.onOpenChange(!1, d.nativeEvent, "focus-out"));
        }
      }
    })]
  });
}
const Vo = () => w.useContext(kn);
function tn(e) {
  return te(e.target) && e.target.tagName === "BUTTON";
}
function Uo(e) {
  return te(e.target) && e.target.tagName === "A";
}
function nn(e) {
  return Rn(e);
}
function zo(e, t) {
  t === void 0 && (t = {});
  const {
    open: r,
    onOpenChange: n,
    dataRef: o,
    elements: {
      domReference: i
    }
  } = e, {
    enabled: s = !0,
    event: c = "click",
    toggle: u = !0,
    ignoreMouse: l = !1,
    keyboardHandlers: m = !0,
    stickIfOpen: p = !0
  } = t, v = w.useRef(), f = w.useRef(!1), y = w.useMemo(() => ({
    onPointerDown(d) {
      v.current = d.pointerType;
    },
    onMouseDown(d) {
      const b = v.current;
      d.button === 0 && c !== "click" && (Te(b, !0) && l || (r && u && (!(o.current.openEvent && p) || o.current.openEvent.type === "mousedown") ? n(!1, d.nativeEvent, "click") : (d.preventDefault(), n(!0, d.nativeEvent, "click"))));
    },
    onClick(d) {
      const b = v.current;
      if (c === "mousedown" && v.current) {
        v.current = void 0;
        return;
      }
      Te(b, !0) && l || (r && u && (!(o.current.openEvent && p) || o.current.openEvent.type === "click") ? n(!1, d.nativeEvent, "click") : n(!0, d.nativeEvent, "click"));
    },
    onKeyDown(d) {
      v.current = void 0, !(d.defaultPrevented || !m || tn(d)) && (d.key === " " && !nn(i) && (d.preventDefault(), f.current = !0), !Uo(d) && d.key === "Enter" && n(!(r && u), d.nativeEvent, "click"));
    },
    onKeyUp(d) {
      d.defaultPrevented || !m || tn(d) || nn(i) || d.key === " " && f.current && (f.current = !1, n(!(r && u), d.nativeEvent, "click"));
    }
  }), [o, i, c, l, m, n, r, p, u]);
  return w.useMemo(() => s ? {
    reference: y
  } : {}, [s, y]);
}
function Ho(e) {
  const {
    open: t = !1,
    onOpenChange: r,
    elements: n
  } = e, o = Rt(), i = w.useRef({}), [s] = w.useState(() => No()), c = Et() != null;
  if (process.env.NODE_ENV !== "production") {
    const f = n.reference;
    f && !K(f) && Fo("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [u, l] = w.useState(n.reference), m = Ee((f, y, d) => {
    i.current.openEvent = f ? y : void 0, s.emit("openchange", {
      open: f,
      event: y,
      reason: d,
      nested: c
    }), r == null || r(f, y, d);
  }), p = w.useMemo(() => ({
    setPositionReference: l
  }), []), v = w.useMemo(() => ({
    reference: u || n.reference || null,
    floating: n.floating || null,
    domReference: n.reference
  }), [u, n.reference, n.floating]);
  return w.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: m,
    elements: v,
    events: s,
    floatingId: o,
    refs: p
  }), [t, m, v, s, o, p]);
}
function Xo(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, r = Ho({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), n = e.rootContext || r, o = n.elements, [i, s] = w.useState(null), [c, u] = w.useState(null), m = (o == null ? void 0 : o.domReference) || i, p = w.useRef(null), v = Mn();
  se(() => {
    m && (p.current = m);
  }, [m]);
  const f = So({
    ...e,
    elements: {
      ...o,
      ...c && {
        reference: c
      }
    }
  }), y = w.useCallback((x) => {
    const C = K(x) ? {
      getBoundingClientRect: () => x.getBoundingClientRect(),
      getClientRects: () => x.getClientRects(),
      contextElement: x
    } : x;
    u(C), f.refs.setReference(C);
  }, [f.refs]), d = w.useCallback((x) => {
    (K(x) || x === null) && (p.current = x, s(x)), (K(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    x !== null && !K(x)) && f.refs.setReference(x);
  }, [f.refs]), b = w.useMemo(() => ({
    ...f.refs,
    setReference: d,
    setPositionReference: y,
    domReference: p
  }), [f.refs, d, y]), T = w.useMemo(() => ({
    ...f.elements,
    domReference: m
  }), [f.elements, m]), S = w.useMemo(() => ({
    ...f,
    ...n,
    refs: b,
    elements: T,
    nodeId: t
  }), [f, b, T, t, n]);
  return se(() => {
    n.dataRef.current.floatingContext = S;
    const x = v == null ? void 0 : v.nodesRef.current.find((C) => C.id === t);
    x && (x.context = S);
  }), w.useMemo(() => ({
    ...f,
    context: S,
    refs: b,
    elements: T
  }), [f, b, T, S]);
}
function it() {
  return Dr() && bn();
}
function Go(e, t) {
  t === void 0 && (t = {});
  const {
    open: r,
    onOpenChange: n,
    events: o,
    dataRef: i,
    elements: s
  } = e, {
    enabled: c = !0,
    visibleOnly: u = !0
  } = t, l = w.useRef(!1), m = w.useRef(-1), p = w.useRef(!0);
  w.useEffect(() => {
    if (!c) return;
    const f = ee(s.domReference);
    function y() {
      !r && te(s.domReference) && s.domReference === ft(le(s.domReference)) && (l.current = !0);
    }
    function d() {
      p.current = !0;
    }
    function b() {
      p.current = !1;
    }
    return f.addEventListener("blur", y), it() && (f.addEventListener("keydown", d, !0), f.addEventListener("pointerdown", b, !0)), () => {
      f.removeEventListener("blur", y), it() && (f.removeEventListener("keydown", d, !0), f.removeEventListener("pointerdown", b, !0));
    };
  }, [s.domReference, r, c]), w.useEffect(() => {
    if (!c) return;
    function f(y) {
      let {
        reason: d
      } = y;
      (d === "reference-press" || d === "escape-key") && (l.current = !0);
    }
    return o.on("openchange", f), () => {
      o.off("openchange", f);
    };
  }, [o, c]), w.useEffect(() => () => {
    Q(m);
  }, []);
  const v = w.useMemo(() => ({
    onMouseLeave() {
      l.current = !1;
    },
    onFocus(f) {
      if (l.current) return;
      const y = Nr(f.nativeEvent);
      if (u && K(y)) {
        if (it() && !f.relatedTarget) {
          if (!p.current && !Rn(y))
            return;
        } else if (!jr(y))
          return;
      }
      n(!0, f.nativeEvent, "focus");
    },
    onBlur(f) {
      l.current = !1;
      const y = f.relatedTarget, d = f.nativeEvent, b = K(y) && y.hasAttribute(ze("focus-guard")) && y.getAttribute("data-type") === "outside";
      m.current = window.setTimeout(() => {
        var T;
        const S = ft(s.domReference ? s.domReference.ownerDocument : document);
        !y && S === s.domReference || We((T = i.current.floatingContext) == null ? void 0 : T.refs.floating.current, S) || We(s.domReference, S) || b || n(!1, d, "focus");
      });
    }
  }), [i, s.domReference, n, u]);
  return w.useMemo(() => c ? {
    reference: v
  } : {}, [c, v]);
}
function st(e, t, r) {
  const n = /* @__PURE__ */ new Map(), o = r === "item";
  let i = e;
  if (o && e) {
    const {
      [Xt]: s,
      [Gt]: c,
      ...u
    } = e;
    i = u;
  }
  return {
    ...r === "floating" && {
      tabIndex: -1,
      [Mo]: ""
    },
    ...i,
    ...t.map((s) => {
      const c = s ? s[r] : null;
      return typeof c == "function" ? e ? c(e) : null : c;
    }).concat(e).reduce((s, c) => (c && Object.entries(c).forEach((u) => {
      let [l, m] = u;
      if (!(o && [Xt, Gt].includes(l)))
        if (l.indexOf("on") === 0) {
          if (n.has(l) || n.set(l, []), typeof m == "function") {
            var p;
            (p = n.get(l)) == null || p.push(m), s[l] = function() {
              for (var v, f = arguments.length, y = new Array(f), d = 0; d < f; d++)
                y[d] = arguments[d];
              return (v = n.get(l)) == null ? void 0 : v.map((b) => b(...y)).find((b) => b !== void 0);
            };
          }
        } else
          s[l] = m;
    }), s), {})
  };
}
function Jo(e) {
  e === void 0 && (e = []);
  const t = e.map((c) => c == null ? void 0 : c.reference), r = e.map((c) => c == null ? void 0 : c.floating), n = e.map((c) => c == null ? void 0 : c.item), o = w.useCallback(
    (c) => st(c, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = w.useCallback(
    (c) => st(c, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  ), s = w.useCallback(
    (c) => st(c, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  );
  return w.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: s
  }), [o, i, s]);
}
const Zo = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function Ko(e, t) {
  var r, n;
  t === void 0 && (t = {});
  const {
    open: o,
    elements: i,
    floatingId: s
  } = e, {
    enabled: c = !0,
    role: u = "dialog"
  } = t, l = Rt(), m = ((r = i.domReference) == null ? void 0 : r.id) || l, p = w.useMemo(() => {
    var S;
    return ((S = $r(i.floating)) == null ? void 0 : S.id) || s;
  }, [i.floating, s]), v = (n = Zo.get(u)) != null ? n : u, y = Et() != null, d = w.useMemo(() => v === "tooltip" || u === "label" ? {
    ["aria-" + (u === "label" ? "labelledby" : "describedby")]: o ? p : void 0
  } : {
    "aria-expanded": o ? "true" : "false",
    "aria-haspopup": v === "alertdialog" ? "dialog" : v,
    "aria-controls": o ? p : void 0,
    ...v === "listbox" && {
      role: "combobox"
    },
    ...v === "menu" && {
      id: m
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
  }, [v, p, y, o, m, u]), b = w.useMemo(() => {
    const S = {
      id: p,
      ...v && {
        role: v
      }
    };
    return v === "tooltip" || u === "label" ? S : {
      ...S,
      ...v === "menu" && {
        "aria-labelledby": m
      }
    };
  }, [v, p, m, u]), T = w.useCallback((S) => {
    let {
      active: x,
      selected: C
    } = S;
    const g = {
      role: "option",
      ...x && {
        id: p + "-fui-option"
      }
    };
    switch (u) {
      case "select":
        return {
          ...g,
          "aria-selected": x && C
        };
      case "combobox":
        return {
          ...g,
          "aria-selected": C
        };
    }
    return {};
  }, [p, u]);
  return w.useMemo(() => c ? {
    reference: d,
    floating: b,
    item: T
  } : {}, [c, d, b, T]);
}
function Dn(e, t, r) {
  return r === void 0 && (r = !0), e.filter((o) => {
    var i;
    return o.parentId === t && (!r || ((i = o.context) == null ? void 0 : i.open));
  }).flatMap((o) => [o, ...Dn(e, o.id, r)]);
}
function rn(e, t) {
  const [r, n] = e;
  let o = !1;
  const i = t.length;
  for (let s = 0, c = i - 1; s < i; c = s++) {
    const [u, l] = t[s] || [0, 0], [m, p] = t[c] || [0, 0];
    l >= n != p >= n && r <= (m - u) * (n - l) / (p - l) + u && (o = !o);
  }
  return o;
}
function Qo(e, t) {
  return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height;
}
function ei(e) {
  e === void 0 && (e = {});
  const {
    buffer: t = 0.5,
    blockPointerEvents: r = !1,
    requireIntent: n = !0
  } = e, o = {
    current: -1
  };
  let i = !1, s = null, c = null, u = performance.now();
  function l(p, v) {
    const f = performance.now(), y = f - u;
    if (s === null || c === null || y === 0)
      return s = p, c = v, u = f, null;
    const d = p - s, b = v - c, S = Math.sqrt(d * d + b * b) / y;
    return s = p, c = v, u = f, S;
  }
  const m = (p) => {
    let {
      x: v,
      y: f,
      placement: y,
      elements: d,
      onClose: b,
      nodeId: T,
      tree: S
    } = p;
    return function(C) {
      function g() {
        Q(o), b();
      }
      if (Q(o), !d.domReference || !d.floating || y == null || v == null || f == null)
        return;
      const {
        clientX: W,
        clientY: q
      } = C, G = [W, q], J = Wo(C), V = C.type === "mouseleave", X = ot(d.floating, J), H = ot(d.domReference, J), F = d.domReference.getBoundingClientRect(), R = d.floating.getBoundingClientRect(), B = y.split("-")[0], $ = v > R.right - R.width / 2, M = f > R.bottom - R.height / 2, _ = Qo(G, F), L = R.width > F.width, a = R.height > F.height, h = (L ? F : R).left, E = (L ? F : R).right, O = (a ? F : R).top, I = (a ? F : R).bottom;
      if (X && (i = !0, !V))
        return;
      if (H && (i = !1), H && !V) {
        i = !0;
        return;
      }
      if (V && K(C.relatedTarget) && ot(d.floating, C.relatedTarget) || S && Dn(S.nodesRef.current, T).length)
        return;
      if (B === "top" && f >= F.bottom - 1 || B === "bottom" && f <= F.top + 1 || B === "left" && v >= F.right - 1 || B === "right" && v <= F.left + 1)
        return g();
      let D = [];
      switch (B) {
        case "top":
          D = [[h, F.top + 1], [h, R.bottom - 1], [E, R.bottom - 1], [E, F.top + 1]];
          break;
        case "bottom":
          D = [[h, R.top + 1], [h, F.bottom - 1], [E, F.bottom - 1], [E, R.top + 1]];
          break;
        case "left":
          D = [[R.right - 1, I], [R.right - 1, O], [F.left + 1, O], [F.left + 1, I]];
          break;
        case "right":
          D = [[F.right - 1, I], [F.right - 1, O], [R.left + 1, O], [R.left + 1, I]];
          break;
      }
      function Y(N) {
        let [A, k] = N;
        switch (B) {
          case "top": {
            const j = [L ? A + t / 2 : $ ? A + t * 4 : A - t * 4, k + t + 1], Z = [L ? A - t / 2 : $ ? A + t * 4 : A - t * 4, k + t + 1], P = [[R.left, $ || L ? R.bottom - t : R.top], [R.right, $ ? L ? R.bottom - t : R.top : R.bottom - t]];
            return [j, Z, ...P];
          }
          case "bottom": {
            const j = [L ? A + t / 2 : $ ? A + t * 4 : A - t * 4, k - t], Z = [L ? A - t / 2 : $ ? A + t * 4 : A - t * 4, k - t], P = [[R.left, $ || L ? R.top + t : R.bottom], [R.right, $ ? L ? R.top + t : R.bottom : R.top + t]];
            return [j, Z, ...P];
          }
          case "left": {
            const j = [A + t + 1, a ? k + t / 2 : M ? k + t * 4 : k - t * 4], Z = [A + t + 1, a ? k - t / 2 : M ? k + t * 4 : k - t * 4];
            return [...[[M || a ? R.right - t : R.left, R.top], [M ? a ? R.right - t : R.left : R.right - t, R.bottom]], j, Z];
          }
          case "right": {
            const j = [A - t, a ? k + t / 2 : M ? k + t * 4 : k - t * 4], Z = [A - t, a ? k - t / 2 : M ? k + t * 4 : k - t * 4], P = [[M || a ? R.left + t : R.right, R.top], [M ? a ? R.left + t : R.right : R.left + t, R.bottom]];
            return [j, Z, ...P];
          }
        }
      }
      if (!rn([W, q], D)) {
        if (i && !_)
          return g();
        if (!V && n) {
          const N = l(C.clientX, C.clientY);
          if (N !== null && N < 0.1)
            return g();
        }
        rn([W, q], Y([v, f])) ? !i && n && (o.current = window.setTimeout(g, 40)) : g();
      }
    };
  };
  return m.__options = {
    blockPointerEvents: r
  }, m;
}
const ti = ({
  children: e,
  content: t,
  position: r = "top",
  theme: n = "dark",
  showArrow: o = !0,
  className: i = "",
  isPopup: s = !1,
  triggerOnClick: c = !1
}) => {
  var R, B;
  const [u, l] = xt(!1), m = Ln(null), { x: p, y: v, strategy: f, refs: y, context: d, middlewareData: b, placement: T } = Xo({
    open: u,
    onOpenChange: l,
    placement: r,
    middleware: [
      Po(8),
      Ao(),
      Co({ padding: 8 }),
      ...o ? [_o({ element: m })] : []
    ],
    whileElementsMounted: yo
  }), S = Yo(d, {
    move: !1,
    handleClose: ei(),
    enabled: !c
  }), x = zo(d, {
    enabled: c
  }), C = Go(d), g = Ko(d, { role: "tooltip" }), { getReferenceProps: W, getFloatingProps: q } = Jo([
    S,
    C,
    g,
    ...c ? [x] : []
  ]), G = (R = b.arrow) == null ? void 0 : R.x, J = (B = b.arrow) == null ? void 0 : B.y, V = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[T.split("-")[0]], X = () => {
    switch (T.split("-")[0]) {
      case "top":
        return "225deg";
      // Arrow points down (away from trigger at top)
      case "bottom":
        return "45deg";
      // Arrow points up (away from trigger at bottom)
      case "left":
        return "315deg";
      // Arrow points right (away from trigger at left)
      case "right":
        return "135deg";
      // Arrow points left (away from trigger at right)
      default:
        return "45deg";
    }
  }, [H, F] = xt(!1);
  return Fn(() => (F(!0), () => F(!1)), []), /* @__PURE__ */ oe.jsxs(oe.Fragment, { children: [
    on.cloneElement(
      e,
      {
        ref: y.setReference,
        ...W()
      }
    ),
    H && u && /* @__PURE__ */ oe.jsx(Bo, { children: /* @__PURE__ */ oe.jsxs(
      "div",
      {
        ref: y.setFloating,
        className: `tooltip__body tooltip__body--${n} ${s ? "tooltip__body--popup" : ""} ${i}`,
        style: {
          position: f,
          top: v ?? 0,
          left: p ?? 0,
          zIndex: 1e3,
          pointerEvents: s ? "auto" : "none"
        },
        ...q(),
        children: [
          t,
          o && /* @__PURE__ */ oe.jsx(
            "div",
            {
              ref: m,
              className: "tooltip__arrow",
              style: {
                position: "absolute",
                left: G != null ? `${G}px` : "",
                top: J != null ? `${J}px` : "",
                [V]: "-5px",
                width: "10px",
                height: "10px",
                backgroundColor: n === "light" ? "#f0f0f0" : "#181818",
                transform: `rotate(${X()})`
              }
            }
          )
        ]
      }
    ) })
  ] });
};
ti.propTypes = {
  children: ce.node.isRequired,
  content: ce.node.isRequired,
  position: ce.oneOf(["top", "right", "bottom", "left"]),
  theme: ce.oneOf(["dark", "light"]),
  showArrow: ce.bool,
  className: ce.string,
  isPopup: ce.bool,
  triggerOnClick: ce.bool
};
export {
  ti as Tooltip
};
//# sourceMappingURL=index.js.map
