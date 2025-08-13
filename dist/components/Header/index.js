import de from "react";
function we(t) {
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
var ye;
function Ae() {
  if (ye) return ee;
  ye = 1;
  var t = Symbol.for("react.transitional.element"), x = Symbol.for("react.fragment");
  function g(p, l, s) {
    var m = null;
    if (s !== void 0 && (m = "" + s), l.key !== void 0 && (m = "" + l.key), "key" in l) {
      s = {};
      for (var f in l)
        f !== "key" && (s[f] = l[f]);
    } else s = l;
    return l = s.ref, {
      $$typeof: t,
      type: p,
      key: m,
      ref: l !== void 0 ? l : null,
      props: s
    };
  }
  return ee.Fragment = x, ee.jsx = g, ee.jsxs = g, ee;
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
var me;
function ke() {
  return me || (me = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case R:
          return "Fragment";
        case M:
          return "Profiler";
        case I:
          return "StrictMode";
        case n:
          return "Suspense";
        case q:
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
          case A:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case V:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case L:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function x(e) {
      return "" + e;
    }
    function g(e) {
      try {
        x(e);
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
        ), x(e);
      }
    }
    function p(e) {
      if (e === R) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === L)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = J.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (G.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, r) {
      function a() {
        X || (X = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function S() {
      var e = t(this.type);
      return D[e] || (D[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function h(e, r, a, i, c, d, v, y) {
      return a = d.ref, e = {
        $$typeof: C,
        type: e,
        key: r,
        props: d,
        _owner: c
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: S
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
    function b(e, r, a, i, c, d, v, y) {
      var u = r.children;
      if (u !== void 0)
        if (i)
          if (K(u)) {
            for (i = 0; i < u.length; i++)
              _(u[i]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(u);
      if (G.call(r, "key")) {
        u = t(e);
        var E = Object.keys(r).filter(function(N) {
          return N !== "key";
        });
        i = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", H[u + i] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          u,
          E,
          u
        ), H[u + i] = !0);
      }
      if (u = null, a !== void 0 && (g(a), u = "" + a), m(r) && (g(r.key), u = "" + r.key), "key" in r) {
        a = {};
        for (var T in r)
          T !== "key" && (a[T] = r[T]);
      } else a = r;
      return u && f(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), h(
        e,
        u,
        d,
        c,
        l(),
        a,
        v,
        y
      );
    }
    function _(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var j = de, C = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), k = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), n = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), J = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = Object.prototype.hasOwnProperty, K = Array.isArray, W = console.createTask ? console.createTask : function() {
      return null;
    };
    j = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var X, D = {}, F = j["react-stack-bottom-frame"].bind(
      j,
      s
    )(), B = W(p(s)), H = {};
    re.Fragment = R, re.jsx = function(e, r, a, i, c) {
      var d = 1e4 > J.recentlyCreatedOwnerStacks++;
      return b(
        e,
        r,
        a,
        !1,
        i,
        c,
        d ? Error("react-stack-top-frame") : F,
        d ? W(p(e)) : B
      );
    }, re.jsxs = function(e, r, a, i, c) {
      var d = 1e4 > J.recentlyCreatedOwnerStacks++;
      return b(
        e,
        r,
        a,
        !0,
        i,
        c,
        d ? Error("react-stack-top-frame") : F,
        d ? W(p(e)) : B
      );
    };
  }()), re;
}
var be;
function Ie() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? ne.exports = Ae() : ne.exports = ke()), ne.exports;
}
var w = Ie(), oe = { exports: {} }, ae = { exports: {} }, O = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function $e() {
  if (Ee) return O;
  Ee = 1;
  var t = typeof Symbol == "function" && Symbol.for, x = t ? Symbol.for("react.element") : 60103, g = t ? Symbol.for("react.portal") : 60106, p = t ? Symbol.for("react.fragment") : 60107, l = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, m = t ? Symbol.for("react.provider") : 60109, f = t ? Symbol.for("react.context") : 60110, S = t ? Symbol.for("react.async_mode") : 60111, h = t ? Symbol.for("react.concurrent_mode") : 60111, b = t ? Symbol.for("react.forward_ref") : 60112, _ = t ? Symbol.for("react.suspense") : 60113, j = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, R = t ? Symbol.for("react.block") : 60121, I = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, z = t ? Symbol.for("react.scope") : 60119;
  function k(n) {
    if (typeof n == "object" && n !== null) {
      var q = n.$$typeof;
      switch (q) {
        case x:
          switch (n = n.type, n) {
            case S:
            case h:
            case p:
            case s:
            case l:
            case _:
              return n;
            default:
              switch (n = n && n.$$typeof, n) {
                case f:
                case b:
                case $:
                case C:
                case m:
                  return n;
                default:
                  return q;
              }
          }
        case g:
          return q;
      }
    }
  }
  function A(n) {
    return k(n) === h;
  }
  return O.AsyncMode = S, O.ConcurrentMode = h, O.ContextConsumer = f, O.ContextProvider = m, O.Element = x, O.ForwardRef = b, O.Fragment = p, O.Lazy = $, O.Memo = C, O.Portal = g, O.Profiler = s, O.StrictMode = l, O.Suspense = _, O.isAsyncMode = function(n) {
    return A(n) || k(n) === S;
  }, O.isConcurrentMode = A, O.isContextConsumer = function(n) {
    return k(n) === f;
  }, O.isContextProvider = function(n) {
    return k(n) === m;
  }, O.isElement = function(n) {
    return typeof n == "object" && n !== null && n.$$typeof === x;
  }, O.isForwardRef = function(n) {
    return k(n) === b;
  }, O.isFragment = function(n) {
    return k(n) === p;
  }, O.isLazy = function(n) {
    return k(n) === $;
  }, O.isMemo = function(n) {
    return k(n) === C;
  }, O.isPortal = function(n) {
    return k(n) === g;
  }, O.isProfiler = function(n) {
    return k(n) === s;
  }, O.isStrictMode = function(n) {
    return k(n) === l;
  }, O.isSuspense = function(n) {
    return k(n) === _;
  }, O.isValidElementType = function(n) {
    return typeof n == "string" || typeof n == "function" || n === p || n === h || n === s || n === l || n === _ || n === j || typeof n == "object" && n !== null && (n.$$typeof === $ || n.$$typeof === C || n.$$typeof === m || n.$$typeof === f || n.$$typeof === b || n.$$typeof === I || n.$$typeof === M || n.$$typeof === z || n.$$typeof === R);
  }, O.typeOf = k, O;
}
var P = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function Me() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, x = t ? Symbol.for("react.element") : 60103, g = t ? Symbol.for("react.portal") : 60106, p = t ? Symbol.for("react.fragment") : 60107, l = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, m = t ? Symbol.for("react.provider") : 60109, f = t ? Symbol.for("react.context") : 60110, S = t ? Symbol.for("react.async_mode") : 60111, h = t ? Symbol.for("react.concurrent_mode") : 60111, b = t ? Symbol.for("react.forward_ref") : 60112, _ = t ? Symbol.for("react.suspense") : 60113, j = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, R = t ? Symbol.for("react.block") : 60121, I = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, z = t ? Symbol.for("react.scope") : 60119;
    function k(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === p || o === h || o === s || o === l || o === _ || o === j || typeof o == "object" && o !== null && (o.$$typeof === $ || o.$$typeof === C || o.$$typeof === m || o.$$typeof === f || o.$$typeof === b || o.$$typeof === I || o.$$typeof === M || o.$$typeof === z || o.$$typeof === R);
    }
    function A(o) {
      if (typeof o == "object" && o !== null) {
        var U = o.$$typeof;
        switch (U) {
          case x:
            var te = o.type;
            switch (te) {
              case S:
              case h:
              case p:
              case s:
              case l:
              case _:
                return te;
              default:
                var ve = te && te.$$typeof;
                switch (ve) {
                  case f:
                  case b:
                  case $:
                  case C:
                  case m:
                    return ve;
                  default:
                    return U;
                }
            }
          case g:
            return U;
        }
      }
    }
    var n = S, q = h, V = f, L = m, Z = x, Q = b, J = p, G = $, K = C, W = g, X = s, D = l, F = _, B = !1;
    function H(o) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(o) || A(o) === S;
    }
    function e(o) {
      return A(o) === h;
    }
    function r(o) {
      return A(o) === f;
    }
    function a(o) {
      return A(o) === m;
    }
    function i(o) {
      return typeof o == "object" && o !== null && o.$$typeof === x;
    }
    function c(o) {
      return A(o) === b;
    }
    function d(o) {
      return A(o) === p;
    }
    function v(o) {
      return A(o) === $;
    }
    function y(o) {
      return A(o) === C;
    }
    function u(o) {
      return A(o) === g;
    }
    function E(o) {
      return A(o) === s;
    }
    function T(o) {
      return A(o) === l;
    }
    function N(o) {
      return A(o) === _;
    }
    P.AsyncMode = n, P.ConcurrentMode = q, P.ContextConsumer = V, P.ContextProvider = L, P.Element = Z, P.ForwardRef = Q, P.Fragment = J, P.Lazy = G, P.Memo = K, P.Portal = W, P.Profiler = X, P.StrictMode = D, P.Suspense = F, P.isAsyncMode = H, P.isConcurrentMode = e, P.isContextConsumer = r, P.isContextProvider = a, P.isElement = i, P.isForwardRef = c, P.isFragment = d, P.isLazy = v, P.isMemo = y, P.isPortal = u, P.isProfiler = E, P.isStrictMode = T, P.isSuspense = N, P.isValidElementType = k, P.typeOf = A;
  }()), P;
}
var he;
function je() {
  return he || (he = 1, process.env.NODE_ENV === "production" ? ae.exports = $e() : ae.exports = Me()), ae.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ie, _e;
function Ne() {
  if (_e) return ie;
  _e = 1;
  var t = Object.getOwnPropertySymbols, x = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
  function p(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function l() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var m = {}, f = 0; f < 10; f++)
        m["_" + String.fromCharCode(f)] = f;
      var S = Object.getOwnPropertyNames(m).map(function(b) {
        return m[b];
      });
      if (S.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(b) {
        h[b] = b;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = l() ? Object.assign : function(s, m) {
    for (var f, S = p(s), h, b = 1; b < arguments.length; b++) {
      f = Object(arguments[b]);
      for (var _ in f)
        x.call(f, _) && (S[_] = f[_]);
      if (t) {
        h = t(f);
        for (var j = 0; j < h.length; j++)
          g.call(f, h[j]) && (S[h[j]] = f[h[j]]);
      }
    }
    return S;
  }, ie;
}
var se, ge;
function pe() {
  if (ge) return se;
  ge = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return se = t, se;
}
var ce, Re;
function Ce() {
  return Re || (Re = 1, ce = Function.call.bind(Object.prototype.hasOwnProperty)), ce;
}
var ue, Se;
function Ye() {
  if (Se) return ue;
  Se = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var x = /* @__PURE__ */ pe(), g = {}, p = /* @__PURE__ */ Ce();
    t = function(s) {
      var m = "Warning: " + s;
      typeof console < "u" && console.error(m);
      try {
        throw new Error(m);
      } catch {
      }
    };
  }
  function l(s, m, f, S, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var b in s)
        if (p(s, b)) {
          var _;
          try {
            if (typeof s[b] != "function") {
              var j = Error(
                (S || "React class") + ": " + f + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw j.name = "Invariant Violation", j;
            }
            _ = s[b](m, b, S, f, null, x);
          } catch ($) {
            _ = $;
          }
          if (_ && !(_ instanceof Error) && t(
            (S || "React class") + ": type specification of " + f + " `" + b + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof _ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), _ instanceof Error && !(_.message in g)) {
            g[_.message] = !0;
            var C = h ? h() : "";
            t(
              "Failed " + f + " type: " + _.message + (C ?? "")
            );
          }
        }
    }
  }
  return l.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (g = {});
  }, ue = l, ue;
}
var fe, Oe;
function De() {
  if (Oe) return fe;
  Oe = 1;
  var t = je(), x = Ne(), g = /* @__PURE__ */ pe(), p = /* @__PURE__ */ Ce(), l = /* @__PURE__ */ Ye(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(f) {
    var S = "Warning: " + f;
    typeof console < "u" && console.error(S);
    try {
      throw new Error(S);
    } catch {
    }
  });
  function m() {
    return null;
  }
  return fe = function(f, S) {
    var h = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
    function _(e) {
      var r = e && (h && e[h] || e[b]);
      if (typeof r == "function")
        return r;
    }
    var j = "<<anonymous>>", C = {
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
      element: A(),
      elementType: n(),
      instanceOf: q,
      node: Q(),
      objectOf: L,
      oneOf: V,
      oneOfType: Z,
      shape: G,
      exact: K
    };
    function $(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    }
    function R(e, r) {
      this.message = e, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    R.prototype = Error.prototype;
    function I(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, a = 0;
      function i(d, v, y, u, E, T, N) {
        if (u = u || j, T = T || y, N !== g) {
          if (S) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var U = u + ":" + y;
            !r[U] && // Avoid spamming the console because they are often not actionable except for lib authors
            a < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + T + "` prop on `" + u + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[U] = !0, a++);
          }
        }
        return v[y] == null ? d ? v[y] === null ? new R("The " + E + " `" + T + "` is marked as required " + ("in `" + u + "`, but its value is `null`.")) : new R("The " + E + " `" + T + "` is marked as required in " + ("`" + u + "`, but its value is `undefined`.")) : null : e(v, y, u, E, T);
      }
      var c = i.bind(null, !1);
      return c.isRequired = i.bind(null, !0), c;
    }
    function M(e) {
      function r(a, i, c, d, v, y) {
        var u = a[i], E = D(u);
        if (E !== e) {
          var T = F(u);
          return new R(
            "Invalid " + d + " `" + v + "` of type " + ("`" + T + "` supplied to `" + c + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return I(r);
    }
    function z() {
      return I(m);
    }
    function k(e) {
      function r(a, i, c, d, v) {
        if (typeof e != "function")
          return new R("Property `" + v + "` of component `" + c + "` has invalid PropType notation inside arrayOf.");
        var y = a[i];
        if (!Array.isArray(y)) {
          var u = D(y);
          return new R("Invalid " + d + " `" + v + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an array."));
        }
        for (var E = 0; E < y.length; E++) {
          var T = e(y, E, c, d, v + "[" + E + "]", g);
          if (T instanceof Error)
            return T;
        }
        return null;
      }
      return I(r);
    }
    function A() {
      function e(r, a, i, c, d) {
        var v = r[a];
        if (!f(v)) {
          var y = D(v);
          return new R("Invalid " + c + " `" + d + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(e);
    }
    function n() {
      function e(r, a, i, c, d) {
        var v = r[a];
        if (!t.isValidElementType(v)) {
          var y = D(v);
          return new R("Invalid " + c + " `" + d + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(e);
    }
    function q(e) {
      function r(a, i, c, d, v) {
        if (!(a[i] instanceof e)) {
          var y = e.name || j, u = H(a[i]);
          return new R("Invalid " + d + " `" + v + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return I(r);
    }
    function V(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), m;
      function r(a, i, c, d, v) {
        for (var y = a[i], u = 0; u < e.length; u++)
          if ($(y, e[u]))
            return null;
        var E = JSON.stringify(e, function(N, o) {
          var U = F(o);
          return U === "symbol" ? String(o) : o;
        });
        return new R("Invalid " + d + " `" + v + "` of value `" + String(y) + "` " + ("supplied to `" + c + "`, expected one of " + E + "."));
      }
      return I(r);
    }
    function L(e) {
      function r(a, i, c, d, v) {
        if (typeof e != "function")
          return new R("Property `" + v + "` of component `" + c + "` has invalid PropType notation inside objectOf.");
        var y = a[i], u = D(y);
        if (u !== "object")
          return new R("Invalid " + d + " `" + v + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an object."));
        for (var E in y)
          if (p(y, E)) {
            var T = e(y, E, c, d, v + "." + E, g);
            if (T instanceof Error)
              return T;
          }
        return null;
      }
      return I(r);
    }
    function Z(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), m;
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        if (typeof a != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + B(a) + " at index " + r + "."
          ), m;
      }
      function i(c, d, v, y, u) {
        for (var E = [], T = 0; T < e.length; T++) {
          var N = e[T], o = N(c, d, v, y, u, g);
          if (o == null)
            return null;
          o.data && p(o.data, "expectedType") && E.push(o.data.expectedType);
        }
        var U = E.length > 0 ? ", expected one of type [" + E.join(", ") + "]" : "";
        return new R("Invalid " + y + " `" + u + "` supplied to " + ("`" + v + "`" + U + "."));
      }
      return I(i);
    }
    function Q() {
      function e(r, a, i, c, d) {
        return W(r[a]) ? null : new R("Invalid " + c + " `" + d + "` supplied to " + ("`" + i + "`, expected a ReactNode."));
      }
      return I(e);
    }
    function J(e, r, a, i, c) {
      return new R(
        (e || "React class") + ": " + r + " type `" + a + "." + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + c + "`."
      );
    }
    function G(e) {
      function r(a, i, c, d, v) {
        var y = a[i], u = D(y);
        if (u !== "object")
          return new R("Invalid " + d + " `" + v + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        for (var E in e) {
          var T = e[E];
          if (typeof T != "function")
            return J(c, d, v, E, F(T));
          var N = T(y, E, c, d, v + "." + E, g);
          if (N)
            return N;
        }
        return null;
      }
      return I(r);
    }
    function K(e) {
      function r(a, i, c, d, v) {
        var y = a[i], u = D(y);
        if (u !== "object")
          return new R("Invalid " + d + " `" + v + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        var E = x({}, a[i], e);
        for (var T in E) {
          var N = e[T];
          if (p(e, T) && typeof N != "function")
            return J(c, d, v, T, F(N));
          if (!N)
            return new R(
              "Invalid " + d + " `" + v + "` key `" + T + "` supplied to `" + c + "`.\nBad object: " + JSON.stringify(a[i], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var o = N(y, T, c, d, v + "." + T, g);
          if (o)
            return o;
        }
        return null;
      }
      return I(r);
    }
    function W(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(W);
          if (e === null || f(e))
            return !0;
          var r = _(e);
          if (r) {
            var a = r.call(e), i;
            if (r !== e.entries) {
              for (; !(i = a.next()).done; )
                if (!W(i.value))
                  return !1;
            } else
              for (; !(i = a.next()).done; ) {
                var c = i.value;
                if (c && !W(c[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function X(e, r) {
      return e === "symbol" ? !0 : r ? r["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && r instanceof Symbol : !1;
    }
    function D(e) {
      var r = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : X(r, e) ? "symbol" : r;
    }
    function F(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var r = D(e);
      if (r === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return r;
    }
    function B(e) {
      var r = F(e);
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
    function H(e) {
      return !e.constructor || !e.constructor.name ? j : e.constructor.name;
    }
    return C.checkPropTypes = l, C.resetWarningCache = l.resetWarningCache, C.PropTypes = C, C;
  }, fe;
}
var le, Pe;
function qe() {
  if (Pe) return le;
  Pe = 1;
  var t = /* @__PURE__ */ pe();
  function x() {
  }
  function g() {
  }
  return g.resetWarningCache = x, le = function() {
    function p(m, f, S, h, b, _) {
      if (_ !== t) {
        var j = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw j.name = "Invariant Violation", j;
      }
    }
    p.isRequired = p;
    function l() {
      return p;
    }
    var s = {
      array: p,
      bigint: p,
      bool: p,
      func: p,
      number: p,
      object: p,
      string: p,
      symbol: p,
      any: p,
      arrayOf: l,
      element: p,
      elementType: p,
      instanceOf: l,
      node: p,
      objectOf: l,
      oneOf: l,
      oneOfType: l,
      shape: l,
      exact: l,
      checkPropTypes: g,
      resetWarningCache: x
    };
    return s.PropTypes = s, s;
  }, le;
}
var xe;
function Le() {
  if (xe) return oe.exports;
  if (xe = 1, process.env.NODE_ENV !== "production") {
    var t = je(), x = !0;
    oe.exports = /* @__PURE__ */ De()(t.isElement, x);
  } else
    oe.exports = /* @__PURE__ */ qe()();
  return oe.exports;
}
var We = /* @__PURE__ */ Le();
const Y = /* @__PURE__ */ we(We), Fe = ({
  title: t,
  subtitle: x,
  titleUrl: g = "/",
  variant: p = "basic",
  extended: l = !1,
  megamenu: s = !1,
  search: m,
  primaryNav: f,
  secondaryNav: S,
  secondaryContent: h,
  mobileMenuLabel: b = "Menu",
  mobileCloseLabel: _ = "Close",
  className: j,
  children: C,
  ...$
}) => {
  const R = "usa-header", I = p !== "basic" ? `${R}--${p}` : "", M = l ? `${R}--extended` : "", z = s ? `${R}--megamenu` : "", k = [
    R,
    I,
    M,
    z,
    j
  ].filter(Boolean).join(" "), A = () => t ? /* @__PURE__ */ w.jsxs("div", { className: "usa-logo", children: [
    /* @__PURE__ */ w.jsx("em", { className: "usa-logo__text", children: /* @__PURE__ */ w.jsx("a", { href: g, title: t, "aria-label": t, children: t }) }),
    x && /* @__PURE__ */ w.jsx("div", { className: "usa-logo__subtitle", children: x })
  ] }) : null, n = () => !f && !m && !S && !h ? null : /* @__PURE__ */ w.jsxs("nav", { "aria-label": "Primary navigation", className: "usa-nav", children: [
    l && /* @__PURE__ */ w.jsxs("div", { className: "usa-nav__inner", children: [
      q(),
      (S || h || m) && /* @__PURE__ */ w.jsxs("div", { className: "usa-nav__secondary", children: [
        S && /* @__PURE__ */ w.jsx("ul", { className: "usa-nav__secondary-links", children: de.Children.map(S, (V, L) => /* @__PURE__ */ w.jsx("li", { className: "usa-nav__secondary-item", children: V }, L)) }),
        h,
        m && /* @__PURE__ */ w.jsx("section", { "aria-label": "Search component", children: m })
      ] })
    ] }),
    !l && q()
  ] }), q = () => /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx("button", { type: "button", className: "usa-nav__close", children: /* @__PURE__ */ w.jsx(
      "img",
      {
        src: "/assets/img/usa-icons/close.svg",
        role: "img",
        alt: _
      }
    ) }),
    f && /* @__PURE__ */ w.jsx("ul", { className: "usa-nav__primary usa-accordion", children: de.Children.map(f, (V, L) => /* @__PURE__ */ w.jsx("li", { className: "usa-nav__primary-item", children: V }, L)) }),
    !l && m && /* @__PURE__ */ w.jsx("section", { "aria-label": "Search component", children: m })
  ] });
  return l ? /* @__PURE__ */ w.jsxs("header", { className: k, role: "banner", ...$, children: [
    /* @__PURE__ */ w.jsxs("div", { className: "usa-navbar", children: [
      A(),
      /* @__PURE__ */ w.jsx("button", { type: "button", className: "usa-menu-btn", children: b })
    ] }),
    n(),
    C
  ] }) : /* @__PURE__ */ w.jsxs("header", { className: k, role: "banner", ...$, children: [
    /* @__PURE__ */ w.jsxs("div", { className: "usa-nav-container", children: [
      /* @__PURE__ */ w.jsxs("div", { className: "usa-navbar", children: [
        A(),
        /* @__PURE__ */ w.jsx("button", { type: "button", className: "usa-menu-btn", children: b })
      ] }),
      n()
    ] }),
    C
  ] });
};
Fe.propTypes = {
  /** Title text for the header */
  title: Y.string,
  /** Subtitle or tagline text */
  subtitle: Y.string,
  /** URL for the title link */
  titleUrl: Y.string,
  /** Header variant */
  variant: Y.oneOf(["basic"]),
  /** Whether to use extended header layout */
  extended: Y.bool,
  /** Whether to enable megamenu support */
  megamenu: Y.bool,
  /** Search component to display */
  search: Y.node,
  /** Primary navigation items */
  primaryNav: Y.node,
  /** Secondary navigation items (for extended headers) */
  secondaryNav: Y.node,
  /** Additional content for secondary area */
  secondaryContent: Y.node,
  /** Label for mobile menu button */
  mobileMenuLabel: Y.string,
  /** Label for mobile close button */
  mobileCloseLabel: Y.string,
  /** Additional CSS classes */
  className: Y.string,
  /** Additional content (for secondary row) */
  children: Y.node
};
export {
  Fe as Header
};
//# sourceMappingURL=index.js.map
