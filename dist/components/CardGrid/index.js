import xe from "react";
function Ae(t) {
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
function ke() {
  if (ve) return ee;
  ve = 1;
  var t = Symbol.for("react.transitional.element"), x = Symbol.for("react.fragment");
  function b(f, p, s) {
    var m = null;
    if (s !== void 0 && (m = "" + s), p.key !== void 0 && (m = "" + p.key), "key" in p) {
      s = {};
      for (var l in p)
        l !== "key" && (s[l] = p[l]);
    } else s = p;
    return p = s.ref, {
      $$typeof: t,
      type: f,
      key: m,
      ref: p !== void 0 ? p : null,
      props: s
    };
  }
  return ee.Fragment = x, ee.jsx = b, ee.jsxs = b, ee;
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
function Ie() {
  return ye || (ye = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
          return "Fragment";
        case Y:
          return "Profiler";
        case I:
          return "StrictMode";
        case o:
          return "Suspense";
        case L:
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
          case X:
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
    function x(e) {
      return "" + e;
    }
    function b(e) {
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
    function f(e) {
      if (e === w) return "<>";
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
    function m(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function l(e, r) {
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
    function R() {
      var e = t(this.type);
      return q[e] || (q[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function _(e, r, a, i, c, d, v, y) {
      return a = d.ref, e = {
        $$typeof: j,
        type: e,
        key: r,
        props: d,
        _owner: c
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: R
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
    function h(e, r, a, i, c, d, v, y) {
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
        var E = Object.keys(r).filter(function(M) {
          return M !== "key";
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
      if (u = null, a !== void 0 && (b(a), u = "" + a), m(r) && (b(r.key), u = "" + r.key), "key" in r) {
        a = {};
        for (var T in r)
          T !== "key" && (a[T] = r[T]);
      } else a = r;
      return u && l(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), _(
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
      typeof e == "object" && e !== null && e.$$typeof === j && e._store && (e._store.validated = 1);
    }
    var C = xe, j = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), k = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), U = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, K = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var G, q = {}, W = C["react-stack-bottom-frame"].bind(
      C,
      s
    )(), V = D(f(s)), H = {};
    re.Fragment = w, re.jsx = function(e, r, a, i, c) {
      var d = 1e4 > U.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        a,
        !1,
        i,
        c,
        d ? Error("react-stack-top-frame") : W,
        d ? D(f(e)) : V
      );
    }, re.jsxs = function(e, r, a, i, c) {
      var d = 1e4 > U.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        a,
        !0,
        i,
        c,
        d ? Error("react-stack-top-frame") : W,
        d ? D(f(e)) : V
      );
    };
  }()), re;
}
var me;
function $e() {
  return me || (me = 1, process.env.NODE_ENV === "production" ? ne.exports = ke() : ne.exports = Ie()), ne.exports;
}
var N = $e(), oe = { exports: {} }, ae = { exports: {} }, O = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function Me() {
  if (be) return O;
  be = 1;
  var t = typeof Symbol == "function" && Symbol.for, x = t ? Symbol.for("react.element") : 60103, b = t ? Symbol.for("react.portal") : 60106, f = t ? Symbol.for("react.fragment") : 60107, p = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, m = t ? Symbol.for("react.provider") : 60109, l = t ? Symbol.for("react.context") : 60110, R = t ? Symbol.for("react.async_mode") : 60111, _ = t ? Symbol.for("react.concurrent_mode") : 60111, h = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, C = t ? Symbol.for("react.suspense_list") : 60120, j = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, w = t ? Symbol.for("react.block") : 60121, I = t ? Symbol.for("react.fundamental") : 60117, Y = t ? Symbol.for("react.responder") : 60118, z = t ? Symbol.for("react.scope") : 60119;
  function k(o) {
    if (typeof o == "object" && o !== null) {
      var L = o.$$typeof;
      switch (L) {
        case x:
          switch (o = o.type, o) {
            case R:
            case _:
            case f:
            case s:
            case p:
            case g:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case l:
                case h:
                case $:
                case j:
                case m:
                  return o;
                default:
                  return L;
              }
          }
        case b:
          return L;
      }
    }
  }
  function A(o) {
    return k(o) === _;
  }
  return O.AsyncMode = R, O.ConcurrentMode = _, O.ContextConsumer = l, O.ContextProvider = m, O.Element = x, O.ForwardRef = h, O.Fragment = f, O.Lazy = $, O.Memo = j, O.Portal = b, O.Profiler = s, O.StrictMode = p, O.Suspense = g, O.isAsyncMode = function(o) {
    return A(o) || k(o) === R;
  }, O.isConcurrentMode = A, O.isContextConsumer = function(o) {
    return k(o) === l;
  }, O.isContextProvider = function(o) {
    return k(o) === m;
  }, O.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === x;
  }, O.isForwardRef = function(o) {
    return k(o) === h;
  }, O.isFragment = function(o) {
    return k(o) === f;
  }, O.isLazy = function(o) {
    return k(o) === $;
  }, O.isMemo = function(o) {
    return k(o) === j;
  }, O.isPortal = function(o) {
    return k(o) === b;
  }, O.isProfiler = function(o) {
    return k(o) === s;
  }, O.isStrictMode = function(o) {
    return k(o) === p;
  }, O.isSuspense = function(o) {
    return k(o) === g;
  }, O.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === f || o === _ || o === s || o === p || o === g || o === C || typeof o == "object" && o !== null && (o.$$typeof === $ || o.$$typeof === j || o.$$typeof === m || o.$$typeof === l || o.$$typeof === h || o.$$typeof === I || o.$$typeof === Y || o.$$typeof === z || o.$$typeof === w);
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
var Ee;
function Ne() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, x = t ? Symbol.for("react.element") : 60103, b = t ? Symbol.for("react.portal") : 60106, f = t ? Symbol.for("react.fragment") : 60107, p = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, m = t ? Symbol.for("react.provider") : 60109, l = t ? Symbol.for("react.context") : 60110, R = t ? Symbol.for("react.async_mode") : 60111, _ = t ? Symbol.for("react.concurrent_mode") : 60111, h = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, C = t ? Symbol.for("react.suspense_list") : 60120, j = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, w = t ? Symbol.for("react.block") : 60121, I = t ? Symbol.for("react.fundamental") : 60117, Y = t ? Symbol.for("react.responder") : 60118, z = t ? Symbol.for("react.scope") : 60119;
    function k(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === f || n === _ || n === s || n === p || n === g || n === C || typeof n == "object" && n !== null && (n.$$typeof === $ || n.$$typeof === j || n.$$typeof === m || n.$$typeof === l || n.$$typeof === h || n.$$typeof === I || n.$$typeof === Y || n.$$typeof === z || n.$$typeof === w);
    }
    function A(n) {
      if (typeof n == "object" && n !== null) {
        var F = n.$$typeof;
        switch (F) {
          case x:
            var te = n.type;
            switch (te) {
              case R:
              case _:
              case f:
              case s:
              case p:
              case g:
                return te;
              default:
                var pe = te && te.$$typeof;
                switch (pe) {
                  case l:
                  case h:
                  case $:
                  case j:
                  case m:
                    return pe;
                  default:
                    return F;
                }
            }
          case b:
            return F;
        }
      }
    }
    var o = R, L = _, X = l, J = m, Z = x, Q = h, U = f, B = $, K = j, D = b, G = s, q = p, W = g, V = !1;
    function H(n) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(n) || A(n) === R;
    }
    function e(n) {
      return A(n) === _;
    }
    function r(n) {
      return A(n) === l;
    }
    function a(n) {
      return A(n) === m;
    }
    function i(n) {
      return typeof n == "object" && n !== null && n.$$typeof === x;
    }
    function c(n) {
      return A(n) === h;
    }
    function d(n) {
      return A(n) === f;
    }
    function v(n) {
      return A(n) === $;
    }
    function y(n) {
      return A(n) === j;
    }
    function u(n) {
      return A(n) === b;
    }
    function E(n) {
      return A(n) === s;
    }
    function T(n) {
      return A(n) === p;
    }
    function M(n) {
      return A(n) === g;
    }
    P.AsyncMode = o, P.ConcurrentMode = L, P.ContextConsumer = X, P.ContextProvider = J, P.Element = Z, P.ForwardRef = Q, P.Fragment = U, P.Lazy = B, P.Memo = K, P.Portal = D, P.Profiler = G, P.StrictMode = q, P.Suspense = W, P.isAsyncMode = H, P.isConcurrentMode = e, P.isContextConsumer = r, P.isContextProvider = a, P.isElement = i, P.isForwardRef = c, P.isFragment = d, P.isLazy = v, P.isMemo = y, P.isPortal = u, P.isProfiler = E, P.isStrictMode = T, P.isSuspense = M, P.isValidElementType = k, P.typeOf = A;
  }()), P;
}
var Te;
function we() {
  return Te || (Te = 1, process.env.NODE_ENV === "production" ? ae.exports = Me() : ae.exports = Ne()), ae.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ie, he;
function Ye() {
  if (he) return ie;
  he = 1;
  var t = Object.getOwnPropertySymbols, x = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
  function f(s) {
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
      for (var m = {}, l = 0; l < 10; l++)
        m["_" + String.fromCharCode(l)] = l;
      var R = Object.getOwnPropertyNames(m).map(function(h) {
        return m[h];
      });
      if (R.join("") !== "0123456789")
        return !1;
      var _ = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        _[h] = h;
      }), Object.keys(Object.assign({}, _)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = p() ? Object.assign : function(s, m) {
    for (var l, R = f(s), _, h = 1; h < arguments.length; h++) {
      l = Object(arguments[h]);
      for (var g in l)
        x.call(l, g) && (R[g] = l[g]);
      if (t) {
        _ = t(l);
        for (var C = 0; C < _.length; C++)
          b.call(l, _[C]) && (R[_[C]] = l[_[C]]);
      }
    }
    return R;
  }, ie;
}
var se, _e;
function de() {
  if (_e) return se;
  _e = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return se = t, se;
}
var ce, ge;
function Ce() {
  return ge || (ge = 1, ce = Function.call.bind(Object.prototype.hasOwnProperty)), ce;
}
var ue, Re;
function qe() {
  if (Re) return ue;
  Re = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var x = /* @__PURE__ */ de(), b = {}, f = /* @__PURE__ */ Ce();
    t = function(s) {
      var m = "Warning: " + s;
      typeof console < "u" && console.error(m);
      try {
        throw new Error(m);
      } catch {
      }
    };
  }
  function p(s, m, l, R, _) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in s)
        if (f(s, h)) {
          var g;
          try {
            if (typeof s[h] != "function") {
              var C = Error(
                (R || "React class") + ": " + l + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw C.name = "Invariant Violation", C;
            }
            g = s[h](m, h, R, l, null, x);
          } catch ($) {
            g = $;
          }
          if (g && !(g instanceof Error) && t(
            (R || "React class") + ": type specification of " + l + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in b)) {
            b[g.message] = !0;
            var j = _ ? _() : "";
            t(
              "Failed " + l + " type: " + g.message + (j ?? "")
            );
          }
        }
    }
  }
  return p.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (b = {});
  }, ue = p, ue;
}
var fe, Oe;
function De() {
  if (Oe) return fe;
  Oe = 1;
  var t = we(), x = Ye(), b = /* @__PURE__ */ de(), f = /* @__PURE__ */ Ce(), p = /* @__PURE__ */ qe(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var R = "Warning: " + l;
    typeof console < "u" && console.error(R);
    try {
      throw new Error(R);
    } catch {
    }
  });
  function m() {
    return null;
  }
  return fe = function(l, R) {
    var _ = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function g(e) {
      var r = e && (_ && e[_] || e[h]);
      if (typeof r == "function")
        return r;
    }
    var C = "<<anonymous>>", j = {
      array: Y("array"),
      bigint: Y("bigint"),
      bool: Y("boolean"),
      func: Y("function"),
      number: Y("number"),
      object: Y("object"),
      string: Y("string"),
      symbol: Y("symbol"),
      any: z(),
      arrayOf: k,
      element: A(),
      elementType: o(),
      instanceOf: L,
      node: Q(),
      objectOf: J,
      oneOf: X,
      oneOfType: Z,
      shape: B,
      exact: K
    };
    function $(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    }
    function w(e, r) {
      this.message = e, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function I(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, a = 0;
      function i(d, v, y, u, E, T, M) {
        if (u = u || C, T = T || y, M !== b) {
          if (R) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var F = u + ":" + y;
            !r[F] && // Avoid spamming the console because they are often not actionable except for lib authors
            a < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + T + "` prop on `" + u + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[F] = !0, a++);
          }
        }
        return v[y] == null ? d ? v[y] === null ? new w("The " + E + " `" + T + "` is marked as required " + ("in `" + u + "`, but its value is `null`.")) : new w("The " + E + " `" + T + "` is marked as required in " + ("`" + u + "`, but its value is `undefined`.")) : null : e(v, y, u, E, T);
      }
      var c = i.bind(null, !1);
      return c.isRequired = i.bind(null, !0), c;
    }
    function Y(e) {
      function r(a, i, c, d, v, y) {
        var u = a[i], E = q(u);
        if (E !== e) {
          var T = W(u);
          return new w(
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
          return new w("Property `" + v + "` of component `" + c + "` has invalid PropType notation inside arrayOf.");
        var y = a[i];
        if (!Array.isArray(y)) {
          var u = q(y);
          return new w("Invalid " + d + " `" + v + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an array."));
        }
        for (var E = 0; E < y.length; E++) {
          var T = e(y, E, c, d, v + "[" + E + "]", b);
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
        if (!l(v)) {
          var y = q(v);
          return new w("Invalid " + c + " `" + d + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(e);
    }
    function o() {
      function e(r, a, i, c, d) {
        var v = r[a];
        if (!t.isValidElementType(v)) {
          var y = q(v);
          return new w("Invalid " + c + " `" + d + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(e);
    }
    function L(e) {
      function r(a, i, c, d, v) {
        if (!(a[i] instanceof e)) {
          var y = e.name || C, u = H(a[i]);
          return new w("Invalid " + d + " `" + v + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return I(r);
    }
    function X(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), m;
      function r(a, i, c, d, v) {
        for (var y = a[i], u = 0; u < e.length; u++)
          if ($(y, e[u]))
            return null;
        var E = JSON.stringify(e, function(M, n) {
          var F = W(n);
          return F === "symbol" ? String(n) : n;
        });
        return new w("Invalid " + d + " `" + v + "` of value `" + String(y) + "` " + ("supplied to `" + c + "`, expected one of " + E + "."));
      }
      return I(r);
    }
    function J(e) {
      function r(a, i, c, d, v) {
        if (typeof e != "function")
          return new w("Property `" + v + "` of component `" + c + "` has invalid PropType notation inside objectOf.");
        var y = a[i], u = q(y);
        if (u !== "object")
          return new w("Invalid " + d + " `" + v + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an object."));
        for (var E in y)
          if (f(y, E)) {
            var T = e(y, E, c, d, v + "." + E, b);
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
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + V(a) + " at index " + r + "."
          ), m;
      }
      function i(c, d, v, y, u) {
        for (var E = [], T = 0; T < e.length; T++) {
          var M = e[T], n = M(c, d, v, y, u, b);
          if (n == null)
            return null;
          n.data && f(n.data, "expectedType") && E.push(n.data.expectedType);
        }
        var F = E.length > 0 ? ", expected one of type [" + E.join(", ") + "]" : "";
        return new w("Invalid " + y + " `" + u + "` supplied to " + ("`" + v + "`" + F + "."));
      }
      return I(i);
    }
    function Q() {
      function e(r, a, i, c, d) {
        return D(r[a]) ? null : new w("Invalid " + c + " `" + d + "` supplied to " + ("`" + i + "`, expected a ReactNode."));
      }
      return I(e);
    }
    function U(e, r, a, i, c) {
      return new w(
        (e || "React class") + ": " + r + " type `" + a + "." + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + c + "`."
      );
    }
    function B(e) {
      function r(a, i, c, d, v) {
        var y = a[i], u = q(y);
        if (u !== "object")
          return new w("Invalid " + d + " `" + v + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        for (var E in e) {
          var T = e[E];
          if (typeof T != "function")
            return U(c, d, v, E, W(T));
          var M = T(y, E, c, d, v + "." + E, b);
          if (M)
            return M;
        }
        return null;
      }
      return I(r);
    }
    function K(e) {
      function r(a, i, c, d, v) {
        var y = a[i], u = q(y);
        if (u !== "object")
          return new w("Invalid " + d + " `" + v + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        var E = x({}, a[i], e);
        for (var T in E) {
          var M = e[T];
          if (f(e, T) && typeof M != "function")
            return U(c, d, v, T, W(M));
          if (!M)
            return new w(
              "Invalid " + d + " `" + v + "` key `" + T + "` supplied to `" + c + "`.\nBad object: " + JSON.stringify(a[i], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var n = M(y, T, c, d, v + "." + T, b);
          if (n)
            return n;
        }
        return null;
      }
      return I(r);
    }
    function D(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(D);
          if (e === null || l(e))
            return !0;
          var r = g(e);
          if (r) {
            var a = r.call(e), i;
            if (r !== e.entries) {
              for (; !(i = a.next()).done; )
                if (!D(i.value))
                  return !1;
            } else
              for (; !(i = a.next()).done; ) {
                var c = i.value;
                if (c && !D(c[1]))
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
    function q(e) {
      var r = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : G(r, e) ? "symbol" : r;
    }
    function W(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var r = q(e);
      if (r === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return r;
    }
    function V(e) {
      var r = W(e);
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
      return !e.constructor || !e.constructor.name ? C : e.constructor.name;
    }
    return j.checkPropTypes = p, j.resetWarningCache = p.resetWarningCache, j.PropTypes = j, j;
  }, fe;
}
var le, Pe;
function We() {
  if (Pe) return le;
  Pe = 1;
  var t = /* @__PURE__ */ de();
  function x() {
  }
  function b() {
  }
  return b.resetWarningCache = x, le = function() {
    function f(m, l, R, _, h, g) {
      if (g !== t) {
        var C = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw C.name = "Invariant Violation", C;
      }
    }
    f.isRequired = f;
    function p() {
      return f;
    }
    var s = {
      array: f,
      bigint: f,
      bool: f,
      func: f,
      number: f,
      object: f,
      string: f,
      symbol: f,
      any: f,
      arrayOf: p,
      element: f,
      elementType: f,
      instanceOf: p,
      node: f,
      objectOf: p,
      oneOf: p,
      oneOfType: p,
      shape: p,
      exact: p,
      checkPropTypes: b,
      resetWarningCache: x
    };
    return s.PropTypes = s, s;
  }, le;
}
var Se;
function Fe() {
  if (Se) return oe.exports;
  if (Se = 1, process.env.NODE_ENV !== "production") {
    var t = we(), x = !0;
    oe.exports = /* @__PURE__ */ De()(t.isElement, x);
  } else
    oe.exports = /* @__PURE__ */ We()();
  return oe.exports;
}
var Le = /* @__PURE__ */ Fe();
const S = /* @__PURE__ */ Ae(Le), je = ({
  heading: t,
  text: x,
  actionButton: b,
  onClick: f,
  className: p,
  children: s,
  media: m,
  mediaPosition: l = "left",
  mediaExdent: R = !1,
  mediaFirst: _ = !1,
  mediaInset: h = !1,
  ...g
}) => {
  const j = [
    "usa-card",
    m && "usa-card--media",
    R && "usa-card--exdent",
    _ && "usa-card--header-first",
    h && "usa-card--inset",
    p
  ].filter(Boolean).join(" "), $ = b && f ? xe.cloneElement(b, { onClick: f }) : b, w = () => m ? /* @__PURE__ */ N.jsx("div", { className: `usa-card__media ${R ? "usa-card__media--exdent" : ""}`, children: /* @__PURE__ */ N.jsx("div", { className: "usa-card__img", children: typeof m == "string" ? /* @__PURE__ */ N.jsx("img", { src: m, alt: "" }) : m }) }) : null;
  return /* @__PURE__ */ N.jsx("div", { className: j, ...g, children: /* @__PURE__ */ N.jsxs("div", { className: "usa-card__container", children: [
    m && w(),
    t && /* @__PURE__ */ N.jsx("div", { className: "usa-card__header", children: /* @__PURE__ */ N.jsx("h4", { className: "usa-card__heading", children: t }) }),
    /* @__PURE__ */ N.jsxs("div", { className: "usa-card__body", children: [
      x && /* @__PURE__ */ N.jsx("p", { children: x }),
      s
    ] }),
    b && /* @__PURE__ */ N.jsx("div", { className: "usa-card__footer", children: $ })
  ] }) });
};
je.propTypes = {
  heading: S.string,
  text: S.string,
  actionButton: S.node,
  onClick: S.func,
  className: S.string,
  children: S.node,
  media: S.oneOfType([S.string, S.node]),
  mediaPosition: S.oneOf(["left", "right"]),
  mediaExdent: S.bool,
  mediaFirst: S.bool,
  mediaInset: S.bool
};
const Ue = ({
  heading: t,
  showDivider: x = !0,
  showHeading: b = !0,
  cards: f,
  className: p,
  ...s
}) => {
  const l = [
    "card-grid",
    p
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ N.jsxs("div", { className: l, "data-testid": "card-grid", ...s, children: [
    x && /* @__PURE__ */ N.jsx("hr", { className: "card-grid__divider" }),
    b && t && /* @__PURE__ */ N.jsx("h3", { className: "card-grid__heading", children: t }),
    /* @__PURE__ */ N.jsx("div", { className: "card-grid__container", children: f.map((R, _) => /* @__PURE__ */ N.jsx(je, { ...R }, _)) })
  ] });
};
Ue.propTypes = {
  heading: S.string,
  showDivider: S.bool,
  showHeading: S.bool,
  cards: S.arrayOf(S.shape({
    heading: S.string,
    text: S.string,
    actionButton: S.node,
    onClick: S.func,
    media: S.oneOfType([S.string, S.node]),
    mediaPosition: S.oneOf(["left", "right"]),
    mediaExdent: S.bool,
    mediaFirst: S.bool,
    mediaInset: S.bool
  })).isRequired,
  className: S.string
};
export {
  Ue as CardGrid
};
//# sourceMappingURL=index.js.map
