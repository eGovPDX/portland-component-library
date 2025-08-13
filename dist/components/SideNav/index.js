import je, { useState as ke } from "react";
function Ie(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ne = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ve;
function $e() {
  if (ve) return ee;
  ve = 1;
  var t = Symbol.for("react.transitional.element"), _ = Symbol.for("react.fragment");
  function R(l, p, s) {
    var b = null;
    if (s !== void 0 && (b = "" + s), p.key !== void 0 && (b = "" + p.key), "key" in p) {
      s = {};
      for (var f in p)
        f !== "key" && (s[f] = p[f]);
    } else s = p;
    return p = s.ref, {
      $$typeof: t,
      type: l,
      key: b,
      ref: p !== void 0 ? p : null,
      props: s
    };
  }
  return ee.Fragment = _, ee.jsx = R, ee.jsxs = R, ee;
}
var re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ye;
function qe() {
  return ye || (ye = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case x:
          return "Fragment";
        case M:
          return "Profiler";
        case I:
          return "StrictMode";
        case o:
          return "Suspense";
        case F:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case $:
            return "Portal";
          case k:
            return (e.displayName || "Context") + ".Provider";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case j:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case J:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function _(e) {
      return "" + e;
    }
    function R(e) {
      try {
        _(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), _(e);
      }
    }
    function l(e) {
      if (e === x) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === J)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function p() {
      var e = U.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function b(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, r) {
      function a() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function P() {
      var e = t(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function m(e, r, a, i, c, d, v, y) {
      return a = d.ref, e = {
        $$typeof: C,
        type: e,
        key: r,
        props: d,
        _owner: c
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: P
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
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: v
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: y
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function E(e, r, a, i, c, d, v, y) {
      var u = r.children;
      if (u !== void 0)
        if (i)
          if (K(u)) {
            for (i = 0; i < u.length; i++)
              g(u[i]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(u);
      if (B.call(r, "key")) {
        u = t(e);
        var T = Object.keys(r).filter(function(q) {
          return q !== "key";
        });
        i = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", X[u + i] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          u,
          T,
          u
        ), X[u + i] = !0);
      }
      if (u = null, a !== void 0 && (R(a), u = "" + a), b(r) && (R(r.key), u = "" + r.key), "key" in r) {
        a = {};
        for (var h in r)
          h !== "key" && (a[h] = r[h]);
      } else a = r;
      return u && f(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), m(
        e,
        u,
        d,
        c,
        p(),
        a,
        v,
        y
      );
    }
    function g(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var w = je, C = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), k = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), U = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, K = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var G, Y = {}, D = w["react-stack-bottom-frame"].bind(
      w,
      s
    )(), V = N(l(s)), X = {};
    re.Fragment = x, re.jsx = function(e, r, a, i, c) {
      var d = 1e4 > U.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        a,
        !1,
        i,
        c,
        d ? Error("react-stack-top-frame") : D,
        d ? N(l(e)) : V
      );
    }, re.jsxs = function(e, r, a, i, c) {
      var d = 1e4 > U.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        a,
        !0,
        i,
        c,
        d ? Error("react-stack-top-frame") : D,
        d ? N(l(e)) : V
      );
    };
  }()), re;
}
var me;
function Me() {
  return me || (me = 1, process.env.NODE_ENV === "production" ? ne.exports = $e() : ne.exports = qe()), ne.exports;
}
var L = Me(), oe = { exports: {} }, ae = { exports: {} }, S = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function Ye() {
  if (be) return S;
  be = 1;
  var t = typeof Symbol == "function" && Symbol.for, _ = t ? Symbol.for("react.element") : 60103, R = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, p = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, b = t ? Symbol.for("react.provider") : 60109, f = t ? Symbol.for("react.context") : 60110, P = t ? Symbol.for("react.async_mode") : 60111, m = t ? Symbol.for("react.concurrent_mode") : 60111, E = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, x = t ? Symbol.for("react.block") : 60121, I = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, z = t ? Symbol.for("react.scope") : 60119;
  function k(o) {
    if (typeof o == "object" && o !== null) {
      var F = o.$$typeof;
      switch (F) {
        case _:
          switch (o = o.type, o) {
            case P:
            case m:
            case l:
            case s:
            case p:
            case g:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case f:
                case E:
                case $:
                case C:
                case b:
                  return o;
                default:
                  return F;
              }
          }
        case R:
          return F;
      }
    }
  }
  function j(o) {
    return k(o) === m;
  }
  return S.AsyncMode = P, S.ConcurrentMode = m, S.ContextConsumer = f, S.ContextProvider = b, S.Element = _, S.ForwardRef = E, S.Fragment = l, S.Lazy = $, S.Memo = C, S.Portal = R, S.Profiler = s, S.StrictMode = p, S.Suspense = g, S.isAsyncMode = function(o) {
    return j(o) || k(o) === P;
  }, S.isConcurrentMode = j, S.isContextConsumer = function(o) {
    return k(o) === f;
  }, S.isContextProvider = function(o) {
    return k(o) === b;
  }, S.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === _;
  }, S.isForwardRef = function(o) {
    return k(o) === E;
  }, S.isFragment = function(o) {
    return k(o) === l;
  }, S.isLazy = function(o) {
    return k(o) === $;
  }, S.isMemo = function(o) {
    return k(o) === C;
  }, S.isPortal = function(o) {
    return k(o) === R;
  }, S.isProfiler = function(o) {
    return k(o) === s;
  }, S.isStrictMode = function(o) {
    return k(o) === p;
  }, S.isSuspense = function(o) {
    return k(o) === g;
  }, S.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === l || o === m || o === s || o === p || o === g || o === w || typeof o == "object" && o !== null && (o.$$typeof === $ || o.$$typeof === C || o.$$typeof === b || o.$$typeof === f || o.$$typeof === E || o.$$typeof === I || o.$$typeof === M || o.$$typeof === z || o.$$typeof === x);
  }, S.typeOf = k, S;
}
var O = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function Ne() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, _ = t ? Symbol.for("react.element") : 60103, R = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, p = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, b = t ? Symbol.for("react.provider") : 60109, f = t ? Symbol.for("react.context") : 60110, P = t ? Symbol.for("react.async_mode") : 60111, m = t ? Symbol.for("react.concurrent_mode") : 60111, E = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, x = t ? Symbol.for("react.block") : 60121, I = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, z = t ? Symbol.for("react.scope") : 60119;
    function k(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === l || n === m || n === s || n === p || n === g || n === w || typeof n == "object" && n !== null && (n.$$typeof === $ || n.$$typeof === C || n.$$typeof === b || n.$$typeof === f || n.$$typeof === E || n.$$typeof === I || n.$$typeof === M || n.$$typeof === z || n.$$typeof === x);
    }
    function j(n) {
      if (typeof n == "object" && n !== null) {
        var W = n.$$typeof;
        switch (W) {
          case _:
            var te = n.type;
            switch (te) {
              case P:
              case m:
              case l:
              case s:
              case p:
              case g:
                return te;
              default:
                var pe = te && te.$$typeof;
                switch (pe) {
                  case f:
                  case E:
                  case $:
                  case C:
                  case b:
                    return pe;
                  default:
                    return W;
                }
            }
          case R:
            return W;
        }
      }
    }
    var o = P, F = m, H = f, J = b, Z = _, Q = E, U = l, B = $, K = C, N = R, G = s, Y = p, D = g, V = !1;
    function X(n) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(n) || j(n) === P;
    }
    function e(n) {
      return j(n) === m;
    }
    function r(n) {
      return j(n) === f;
    }
    function a(n) {
      return j(n) === b;
    }
    function i(n) {
      return typeof n == "object" && n !== null && n.$$typeof === _;
    }
    function c(n) {
      return j(n) === E;
    }
    function d(n) {
      return j(n) === l;
    }
    function v(n) {
      return j(n) === $;
    }
    function y(n) {
      return j(n) === C;
    }
    function u(n) {
      return j(n) === R;
    }
    function T(n) {
      return j(n) === s;
    }
    function h(n) {
      return j(n) === p;
    }
    function q(n) {
      return j(n) === g;
    }
    O.AsyncMode = o, O.ConcurrentMode = F, O.ContextConsumer = H, O.ContextProvider = J, O.Element = Z, O.ForwardRef = Q, O.Fragment = U, O.Lazy = B, O.Memo = K, O.Portal = N, O.Profiler = G, O.StrictMode = Y, O.Suspense = D, O.isAsyncMode = X, O.isConcurrentMode = e, O.isContextConsumer = r, O.isContextProvider = a, O.isElement = i, O.isForwardRef = c, O.isFragment = d, O.isLazy = v, O.isMemo = y, O.isPortal = u, O.isProfiler = T, O.isStrictMode = h, O.isSuspense = q, O.isValidElementType = k, O.typeOf = j;
  }()), O;
}
var Te;
function xe() {
  return Te || (Te = 1, process.env.NODE_ENV === "production" ? ae.exports = Ye() : ae.exports = Ne()), ae.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ie, he;
function De() {
  if (he) return ie;
  he = 1;
  var t = Object.getOwnPropertySymbols, _ = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
  function l(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function p() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var b = {}, f = 0; f < 10; f++)
        b["_" + String.fromCharCode(f)] = f;
      var P = Object.getOwnPropertyNames(b).map(function(E) {
        return b[E];
      });
      if (P.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(E) {
        m[E] = E;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = p() ? Object.assign : function(s, b) {
    for (var f, P = l(s), m, E = 1; E < arguments.length; E++) {
      f = Object(arguments[E]);
      for (var g in f)
        _.call(f, g) && (P[g] = f[g]);
      if (t) {
        m = t(f);
        for (var w = 0; w < m.length; w++)
          R.call(f, m[w]) && (P[m[w]] = f[m[w]]);
      }
    }
    return P;
  }, ie;
}
var se, Re;
function de() {
  if (Re) return se;
  Re = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return se = t, se;
}
var ce, ge;
function we() {
  return ge || (ge = 1, ce = Function.call.bind(Object.prototype.hasOwnProperty)), ce;
}
var ue, _e;
function We() {
  if (_e) return ue;
  _e = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var _ = /* @__PURE__ */ de(), R = {}, l = /* @__PURE__ */ we();
    t = function(s) {
      var b = "Warning: " + s;
      typeof console < "u" && console.error(b);
      try {
        throw new Error(b);
      } catch {
      }
    };
  }
  function p(s, b, f, P, m) {
    if (process.env.NODE_ENV !== "production") {
      for (var E in s)
        if (l(s, E)) {
          var g;
          try {
            if (typeof s[E] != "function") {
              var w = Error(
                (P || "React class") + ": " + f + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            g = s[E](b, E, P, f, null, _);
          } catch ($) {
            g = $;
          }
          if (g && !(g instanceof Error) && t(
            (P || "React class") + ": type specification of " + f + " `" + E + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in R)) {
            R[g.message] = !0;
            var C = m ? m() : "";
            t(
              "Failed " + f + " type: " + g.message + (C ?? "")
            );
          }
        }
    }
  }
  return p.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (R = {});
  }, ue = p, ue;
}
var fe, Se;
function Fe() {
  if (Se) return fe;
  Se = 1;
  var t = xe(), _ = De(), R = /* @__PURE__ */ de(), l = /* @__PURE__ */ we(), p = /* @__PURE__ */ We(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(f) {
    var P = "Warning: " + f;
    typeof console < "u" && console.error(P);
    try {
      throw new Error(P);
    } catch {
    }
  });
  function b() {
    return null;
  }
  return fe = function(f, P) {
    var m = typeof Symbol == "function" && Symbol.iterator, E = "@@iterator";
    function g(e) {
      var r = e && (m && e[m] || e[E]);
      if (typeof r == "function")
        return r;
    }
    var w = "<<anonymous>>", C = {
      array: M("array"),
      bigint: M("bigint"),
      bool: M("boolean"),
      func: M("function"),
      number: M("number"),
      object: M("object"),
      string: M("string"),
      symbol: M("symbol"),
      any: z(),
      arrayOf: k,
      element: j(),
      elementType: o(),
      instanceOf: F,
      node: Q(),
      objectOf: J,
      oneOf: H,
      oneOfType: Z,
      shape: B,
      exact: K
    };
    function $(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    }
    function x(e, r) {
      this.message = e, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function I(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, a = 0;
      function i(d, v, y, u, T, h, q) {
        if (u = u || w, h = h || y, q !== R) {
          if (P) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var W = u + ":" + y;
            !r[W] && // Avoid spamming the console because they are often not actionable except for lib authors
            a < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + h + "` prop on `" + u + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[W] = !0, a++);
          }
        }
        return v[y] == null ? d ? v[y] === null ? new x("The " + T + " `" + h + "` is marked as required " + ("in `" + u + "`, but its value is `null`.")) : new x("The " + T + " `" + h + "` is marked as required in " + ("`" + u + "`, but its value is `undefined`.")) : null : e(v, y, u, T, h);
      }
      var c = i.bind(null, !1);
      return c.isRequired = i.bind(null, !0), c;
    }
    function M(e) {
      function r(a, i, c, d, v, y) {
        var u = a[i], T = Y(u);
        if (T !== e) {
          var h = D(u);
          return new x(
            "Invalid " + d + " `" + v + "` of type " + ("`" + h + "` supplied to `" + c + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return I(r);
    }
    function z() {
      return I(b);
    }
    function k(e) {
      function r(a, i, c, d, v) {
        if (typeof e != "function")
          return new x("Property `" + v + "` of component `" + c + "` has invalid PropType notation inside arrayOf.");
        var y = a[i];
        if (!Array.isArray(y)) {
          var u = Y(y);
          return new x("Invalid " + d + " `" + v + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an array."));
        }
        for (var T = 0; T < y.length; T++) {
          var h = e(y, T, c, d, v + "[" + T + "]", R);
          if (h instanceof Error)
            return h;
        }
        return null;
      }
      return I(r);
    }
    function j() {
      function e(r, a, i, c, d) {
        var v = r[a];
        if (!f(v)) {
          var y = Y(v);
          return new x("Invalid " + c + " `" + d + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(e);
    }
    function o() {
      function e(r, a, i, c, d) {
        var v = r[a];
        if (!t.isValidElementType(v)) {
          var y = Y(v);
          return new x("Invalid " + c + " `" + d + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(e);
    }
    function F(e) {
      function r(a, i, c, d, v) {
        if (!(a[i] instanceof e)) {
          var y = e.name || w, u = X(a[i]);
          return new x("Invalid " + d + " `" + v + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return I(r);
    }
    function H(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), b;
      function r(a, i, c, d, v) {
        for (var y = a[i], u = 0; u < e.length; u++)
          if ($(y, e[u]))
            return null;
        var T = JSON.stringify(e, function(q, n) {
          var W = D(n);
          return W === "symbol" ? String(n) : n;
        });
        return new x("Invalid " + d + " `" + v + "` of value `" + String(y) + "` " + ("supplied to `" + c + "`, expected one of " + T + "."));
      }
      return I(r);
    }
    function J(e) {
      function r(a, i, c, d, v) {
        if (typeof e != "function")
          return new x("Property `" + v + "` of component `" + c + "` has invalid PropType notation inside objectOf.");
        var y = a[i], u = Y(y);
        if (u !== "object")
          return new x("Invalid " + d + " `" + v + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an object."));
        for (var T in y)
          if (l(y, T)) {
            var h = e(y, T, c, d, v + "." + T, R);
            if (h instanceof Error)
              return h;
          }
        return null;
      }
      return I(r);
    }
    function Z(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), b;
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        if (typeof a != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + V(a) + " at index " + r + "."
          ), b;
      }
      function i(c, d, v, y, u) {
        for (var T = [], h = 0; h < e.length; h++) {
          var q = e[h], n = q(c, d, v, y, u, R);
          if (n == null)
            return null;
          n.data && l(n.data, "expectedType") && T.push(n.data.expectedType);
        }
        var W = T.length > 0 ? ", expected one of type [" + T.join(", ") + "]" : "";
        return new x("Invalid " + y + " `" + u + "` supplied to " + ("`" + v + "`" + W + "."));
      }
      return I(i);
    }
    function Q() {
      function e(r, a, i, c, d) {
        return N(r[a]) ? null : new x("Invalid " + c + " `" + d + "` supplied to " + ("`" + i + "`, expected a ReactNode."));
      }
      return I(e);
    }
    function U(e, r, a, i, c) {
      return new x(
        (e || "React class") + ": " + r + " type `" + a + "." + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + c + "`."
      );
    }
    function B(e) {
      function r(a, i, c, d, v) {
        var y = a[i], u = Y(y);
        if (u !== "object")
          return new x("Invalid " + d + " `" + v + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        for (var T in e) {
          var h = e[T];
          if (typeof h != "function")
            return U(c, d, v, T, D(h));
          var q = h(y, T, c, d, v + "." + T, R);
          if (q)
            return q;
        }
        return null;
      }
      return I(r);
    }
    function K(e) {
      function r(a, i, c, d, v) {
        var y = a[i], u = Y(y);
        if (u !== "object")
          return new x("Invalid " + d + " `" + v + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        var T = _({}, a[i], e);
        for (var h in T) {
          var q = e[h];
          if (l(e, h) && typeof q != "function")
            return U(c, d, v, h, D(q));
          if (!q)
            return new x(
              "Invalid " + d + " `" + v + "` key `" + h + "` supplied to `" + c + "`.\nBad object: " + JSON.stringify(a[i], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var n = q(y, h, c, d, v + "." + h, R);
          if (n)
            return n;
        }
        return null;
      }
      return I(r);
    }
    function N(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(N);
          if (e === null || f(e))
            return !0;
          var r = g(e);
          if (r) {
            var a = r.call(e), i;
            if (r !== e.entries) {
              for (; !(i = a.next()).done; )
                if (!N(i.value))
                  return !1;
            } else
              for (; !(i = a.next()).done; ) {
                var c = i.value;
                if (c && !N(c[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function G(e, r) {
      return e === "symbol" ? !0 : r ? r["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && r instanceof Symbol : !1;
    }
    function Y(e) {
      var r = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : G(r, e) ? "symbol" : r;
    }
    function D(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var r = Y(e);
      if (r === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return r;
    }
    function V(e) {
      var r = D(e);
      switch (r) {
        case "array":
        case "object":
          return "an " + r;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + r;
        default:
          return r;
      }
    }
    function X(e) {
      return !e.constructor || !e.constructor.name ? w : e.constructor.name;
    }
    return C.checkPropTypes = p, C.resetWarningCache = p.resetWarningCache, C.PropTypes = C, C;
  }, fe;
}
var le, Oe;
function Le() {
  if (Oe) return le;
  Oe = 1;
  var t = /* @__PURE__ */ de();
  function _() {
  }
  function R() {
  }
  return R.resetWarningCache = _, le = function() {
    function l(b, f, P, m, E, g) {
      if (g !== t) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    l.isRequired = l;
    function p() {
      return l;
    }
    var s = {
      array: l,
      bigint: l,
      bool: l,
      func: l,
      number: l,
      object: l,
      string: l,
      symbol: l,
      any: l,
      arrayOf: p,
      element: l,
      elementType: l,
      instanceOf: p,
      node: l,
      objectOf: p,
      oneOf: p,
      oneOfType: p,
      shape: p,
      exact: p,
      checkPropTypes: R,
      resetWarningCache: _
    };
    return s.PropTypes = s, s;
  }, le;
}
var Pe;
function Ue() {
  if (Pe) return oe.exports;
  if (Pe = 1, process.env.NODE_ENV !== "production") {
    var t = xe(), _ = !0;
    oe.exports = /* @__PURE__ */ Fe()(t.isElement, _);
  } else
    oe.exports = /* @__PURE__ */ Le()();
  return oe.exports;
}
var ze = /* @__PURE__ */ Ue();
const A = /* @__PURE__ */ Ie(ze), Ce = ({ item: t, isActive: _, isExpanded: R, isParent: l, position: p, onClick: s }) => {
  const b = [
    "side-nav-item",
    _ ? "active" : "",
    l ? "parent" : "child",
    p,
    R ? "expanded" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ L.jsxs(
    "a",
    {
      href: t.link,
      className: b,
      "aria-current": _ ? "page" : void 0,
      "aria-expanded": l ? R : void 0,
      onClick: (f) => {
        l && (f.preventDefault(), s());
      },
      children: [
        /* @__PURE__ */ L.jsx("div", { className: `nav-indicator ${_ ? "active-indicator" : ""}` }),
        /* @__PURE__ */ L.jsx("div", { className: "nav-content", children: /* @__PURE__ */ L.jsx("div", { className: "side-nav-text", children: t.title }) })
      ]
    }
  );
};
Ce.propTypes = {
  item: A.shape({
    title: A.string.isRequired,
    link: A.string.isRequired,
    children: A.arrayOf(A.shape({
      title: A.string.isRequired,
      link: A.string.isRequired
    }))
  }).isRequired,
  isActive: A.bool.isRequired,
  isExpanded: A.bool.isRequired,
  isParent: A.bool.isRequired,
  position: A.oneOf(["top", "middle", "bottom"]).isRequired,
  onClick: A.func.isRequired
};
const Ae = ({ items: t, activeItemId: _, activeIndex: R }) => {
  const [l, p] = ke(null), s = (f, P, m = !1) => f === 0 && !m ? "top" : f === P - 1 ? "bottom" : "middle", b = (f, P = !1) => f.map((m, E) => {
    var x;
    const g = !!((x = m.children) != null && x.length), w = _ ? m.link === _ : E === R, C = l === m.link, $ = s(E, f.length, P);
    return /* @__PURE__ */ L.jsxs("li", { className: "nav-item-container", children: [
      /* @__PURE__ */ L.jsx(
        Ce,
        {
          item: m,
          isActive: w,
          isExpanded: C,
          isParent: g,
          position: $,
          onClick: () => {
            p(C ? null : m.link);
          }
        }
      ),
      g && C && /* @__PURE__ */ L.jsx("ul", { className: "nav-children", children: b(m.children, !0) })
    ] }, m.link);
  });
  return /* @__PURE__ */ L.jsx(
    "nav",
    {
      className: "side-nav",
      "aria-label": "Section Navigation",
      role: "navigation",
      children: /* @__PURE__ */ L.jsx("ul", { className: "side-nav-list", children: b(t) })
    }
  );
};
Ae.propTypes = {
  items: A.arrayOf(
    A.shape({
      title: A.string.isRequired,
      link: A.string.isRequired,
      children: A.arrayOf(A.shape({
        title: A.string.isRequired,
        link: A.string.isRequired
      }))
    })
  ).isRequired,
  activeItemId: A.string,
  activeIndex: A.number
};
Ae.defaultProps = {
  activeItemId: null,
  activeIndex: null
};
export {
  Ae as SideNav
};
//# sourceMappingURL=index.js.map
