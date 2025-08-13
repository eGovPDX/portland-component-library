import Ce from "react";
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
function je() {
  if (ve) return ee;
  ve = 1;
  var t = Symbol.for("react.transitional.element"), C = Symbol.for("react.fragment");
  function h(d, y, s) {
    var T = null;
    if (s !== void 0 && (T = "" + s), y.key !== void 0 && (T = "" + y.key), "key" in y) {
      s = {};
      for (var f in y)
        f !== "key" && (s[f] = y[f]);
    } else s = y;
    return y = s.ref, {
      $$typeof: t,
      type: d,
      key: T,
      ref: y !== void 0 ? y : null,
      props: s
    };
  }
  return ee.Fragment = C, ee.jsx = h, ee.jsxs = h, ee;
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
function ke() {
  return ye || (ye = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case S:
          return "Fragment";
        case $:
          return "Profiler";
        case A:
          return "StrictMode";
        case o:
          return "Suspense";
        case U:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case I:
            return "Portal";
          case j:
            return (e.displayName || "Context") + ".Provider";
          case D:
            return (e._context.displayName || "Context") + ".Consumer";
          case k:
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
    function C(e) {
      return "" + e;
    }
    function h(e) {
      try {
        C(e);
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
        ), C(e);
      }
    }
    function d(e) {
      if (e === S) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === J)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function y() {
      var e = z.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function T(e) {
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
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function g(e, r, a, i, c, l, p, v) {
      return a = l.ref, e = {
        $$typeof: x,
        type: e,
        key: r,
        props: l,
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
        value: p
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: v
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function b(e, r, a, i, c, l, p, v) {
      var u = r.children;
      if (u !== void 0)
        if (i)
          if (K(u)) {
            for (i = 0; i < u.length; i++)
              R(u[i]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(u);
      if (B.call(r, "key")) {
        u = t(e);
        var m = Object.keys(r).filter(function(M) {
          return M !== "key";
        });
        i = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", X[u + i] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          u,
          m,
          u
        ), X[u + i] = !0);
      }
      if (u = null, a !== void 0 && (h(a), u = "" + a), T(r) && (h(r.key), u = "" + r.key), "key" in r) {
        a = {};
        for (var E in r)
          E !== "key" && (a[E] = r[E]);
      } else a = r;
      return u && f(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), g(
        e,
        u,
        l,
        c,
        y(),
        a,
        p,
        v
      );
    }
    function R(e) {
      typeof e == "object" && e !== null && e.$$typeof === x && e._store && (e._store.validated = 1);
    }
    var w = Ce, x = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), j = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), z = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, K = Array.isArray, W = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var G, N = {}, F = w["react-stack-bottom-frame"].bind(
      w,
      s
    )(), V = W(d(s)), X = {};
    re.Fragment = S, re.jsx = function(e, r, a, i, c) {
      var l = 1e4 > z.recentlyCreatedOwnerStacks++;
      return b(
        e,
        r,
        a,
        !1,
        i,
        c,
        l ? Error("react-stack-top-frame") : F,
        l ? W(d(e)) : V
      );
    }, re.jsxs = function(e, r, a, i, c) {
      var l = 1e4 > z.recentlyCreatedOwnerStacks++;
      return b(
        e,
        r,
        a,
        !0,
        i,
        c,
        l ? Error("react-stack-top-frame") : F,
        l ? W(d(e)) : V
      );
    };
  }()), re;
}
var be;
function Ie() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? ne.exports = je() : ne.exports = ke()), ne.exports;
}
var q = Ie(), oe = { exports: {} }, ae = { exports: {} }, _ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function $e() {
  if (me) return _;
  me = 1;
  var t = typeof Symbol == "function" && Symbol.for, C = t ? Symbol.for("react.element") : 60103, h = t ? Symbol.for("react.portal") : 60106, d = t ? Symbol.for("react.fragment") : 60107, y = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, T = t ? Symbol.for("react.provider") : 60109, f = t ? Symbol.for("react.context") : 60110, P = t ? Symbol.for("react.async_mode") : 60111, g = t ? Symbol.for("react.concurrent_mode") : 60111, b = t ? Symbol.for("react.forward_ref") : 60112, R = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, x = t ? Symbol.for("react.memo") : 60115, I = t ? Symbol.for("react.lazy") : 60116, S = t ? Symbol.for("react.block") : 60121, A = t ? Symbol.for("react.fundamental") : 60117, $ = t ? Symbol.for("react.responder") : 60118, D = t ? Symbol.for("react.scope") : 60119;
  function j(o) {
    if (typeof o == "object" && o !== null) {
      var U = o.$$typeof;
      switch (U) {
        case C:
          switch (o = o.type, o) {
            case P:
            case g:
            case d:
            case s:
            case y:
            case R:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case f:
                case b:
                case I:
                case x:
                case T:
                  return o;
                default:
                  return U;
              }
          }
        case h:
          return U;
      }
    }
  }
  function k(o) {
    return j(o) === g;
  }
  return _.AsyncMode = P, _.ConcurrentMode = g, _.ContextConsumer = f, _.ContextProvider = T, _.Element = C, _.ForwardRef = b, _.Fragment = d, _.Lazy = I, _.Memo = x, _.Portal = h, _.Profiler = s, _.StrictMode = y, _.Suspense = R, _.isAsyncMode = function(o) {
    return k(o) || j(o) === P;
  }, _.isConcurrentMode = k, _.isContextConsumer = function(o) {
    return j(o) === f;
  }, _.isContextProvider = function(o) {
    return j(o) === T;
  }, _.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === C;
  }, _.isForwardRef = function(o) {
    return j(o) === b;
  }, _.isFragment = function(o) {
    return j(o) === d;
  }, _.isLazy = function(o) {
    return j(o) === I;
  }, _.isMemo = function(o) {
    return j(o) === x;
  }, _.isPortal = function(o) {
    return j(o) === h;
  }, _.isProfiler = function(o) {
    return j(o) === s;
  }, _.isStrictMode = function(o) {
    return j(o) === y;
  }, _.isSuspense = function(o) {
    return j(o) === R;
  }, _.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === d || o === g || o === s || o === y || o === R || o === w || typeof o == "object" && o !== null && (o.$$typeof === I || o.$$typeof === x || o.$$typeof === T || o.$$typeof === f || o.$$typeof === b || o.$$typeof === A || o.$$typeof === $ || o.$$typeof === D || o.$$typeof === S);
  }, _.typeOf = j, _;
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
function Me() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, C = t ? Symbol.for("react.element") : 60103, h = t ? Symbol.for("react.portal") : 60106, d = t ? Symbol.for("react.fragment") : 60107, y = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, T = t ? Symbol.for("react.provider") : 60109, f = t ? Symbol.for("react.context") : 60110, P = t ? Symbol.for("react.async_mode") : 60111, g = t ? Symbol.for("react.concurrent_mode") : 60111, b = t ? Symbol.for("react.forward_ref") : 60112, R = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, x = t ? Symbol.for("react.memo") : 60115, I = t ? Symbol.for("react.lazy") : 60116, S = t ? Symbol.for("react.block") : 60121, A = t ? Symbol.for("react.fundamental") : 60117, $ = t ? Symbol.for("react.responder") : 60118, D = t ? Symbol.for("react.scope") : 60119;
    function j(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === d || n === g || n === s || n === y || n === R || n === w || typeof n == "object" && n !== null && (n.$$typeof === I || n.$$typeof === x || n.$$typeof === T || n.$$typeof === f || n.$$typeof === b || n.$$typeof === A || n.$$typeof === $ || n.$$typeof === D || n.$$typeof === S);
    }
    function k(n) {
      if (typeof n == "object" && n !== null) {
        var L = n.$$typeof;
        switch (L) {
          case C:
            var te = n.type;
            switch (te) {
              case P:
              case g:
              case d:
              case s:
              case y:
              case R:
                return te;
              default:
                var pe = te && te.$$typeof;
                switch (pe) {
                  case f:
                  case b:
                  case I:
                  case x:
                  case T:
                    return pe;
                  default:
                    return L;
                }
            }
          case h:
            return L;
        }
      }
    }
    var o = P, U = g, H = f, J = T, Z = C, Q = b, z = d, B = I, K = x, W = h, G = s, N = y, F = R, V = !1;
    function X(n) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(n) || k(n) === P;
    }
    function e(n) {
      return k(n) === g;
    }
    function r(n) {
      return k(n) === f;
    }
    function a(n) {
      return k(n) === T;
    }
    function i(n) {
      return typeof n == "object" && n !== null && n.$$typeof === C;
    }
    function c(n) {
      return k(n) === b;
    }
    function l(n) {
      return k(n) === d;
    }
    function p(n) {
      return k(n) === I;
    }
    function v(n) {
      return k(n) === x;
    }
    function u(n) {
      return k(n) === h;
    }
    function m(n) {
      return k(n) === s;
    }
    function E(n) {
      return k(n) === y;
    }
    function M(n) {
      return k(n) === R;
    }
    O.AsyncMode = o, O.ConcurrentMode = U, O.ContextConsumer = H, O.ContextProvider = J, O.Element = Z, O.ForwardRef = Q, O.Fragment = z, O.Lazy = B, O.Memo = K, O.Portal = W, O.Profiler = G, O.StrictMode = N, O.Suspense = F, O.isAsyncMode = X, O.isConcurrentMode = e, O.isContextConsumer = r, O.isContextProvider = a, O.isElement = i, O.isForwardRef = c, O.isFragment = l, O.isLazy = p, O.isMemo = v, O.isPortal = u, O.isProfiler = m, O.isStrictMode = E, O.isSuspense = M, O.isValidElementType = j, O.typeOf = k;
  }()), O;
}
var Te;
function xe() {
  return Te || (Te = 1, process.env.NODE_ENV === "production" ? ae.exports = $e() : ae.exports = Me()), ae.exports;
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
  var t = Object.getOwnPropertySymbols, C = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
  function d(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function y() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var T = {}, f = 0; f < 10; f++)
        T["_" + String.fromCharCode(f)] = f;
      var P = Object.getOwnPropertyNames(T).map(function(b) {
        return T[b];
      });
      if (P.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(b) {
        g[b] = b;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = y() ? Object.assign : function(s, T) {
    for (var f, P = d(s), g, b = 1; b < arguments.length; b++) {
      f = Object(arguments[b]);
      for (var R in f)
        C.call(f, R) && (P[R] = f[R]);
      if (t) {
        g = t(f);
        for (var w = 0; w < g.length; w++)
          h.call(f, g[w]) && (P[g[w]] = f[g[w]]);
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
function Ne() {
  if (_e) return ue;
  _e = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var C = /* @__PURE__ */ de(), h = {}, d = /* @__PURE__ */ we();
    t = function(s) {
      var T = "Warning: " + s;
      typeof console < "u" && console.error(T);
      try {
        throw new Error(T);
      } catch {
      }
    };
  }
  function y(s, T, f, P, g) {
    if (process.env.NODE_ENV !== "production") {
      for (var b in s)
        if (d(s, b)) {
          var R;
          try {
            if (typeof s[b] != "function") {
              var w = Error(
                (P || "React class") + ": " + f + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            R = s[b](T, b, P, f, null, C);
          } catch (I) {
            R = I;
          }
          if (R && !(R instanceof Error) && t(
            (P || "React class") + ": type specification of " + f + " `" + b + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof R + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), R instanceof Error && !(R.message in h)) {
            h[R.message] = !0;
            var x = g ? g() : "";
            t(
              "Failed " + f + " type: " + R.message + (x ?? "")
            );
          }
        }
    }
  }
  return y.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (h = {});
  }, ue = y, ue;
}
var fe, Oe;
function qe() {
  if (Oe) return fe;
  Oe = 1;
  var t = xe(), C = Ye(), h = /* @__PURE__ */ de(), d = /* @__PURE__ */ we(), y = /* @__PURE__ */ Ne(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(f) {
    var P = "Warning: " + f;
    typeof console < "u" && console.error(P);
    try {
      throw new Error(P);
    } catch {
    }
  });
  function T() {
    return null;
  }
  return fe = function(f, P) {
    var g = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
    function R(e) {
      var r = e && (g && e[g] || e[b]);
      if (typeof r == "function")
        return r;
    }
    var w = "<<anonymous>>", x = {
      array: $("array"),
      bigint: $("bigint"),
      bool: $("boolean"),
      func: $("function"),
      number: $("number"),
      object: $("object"),
      string: $("string"),
      symbol: $("symbol"),
      any: D(),
      arrayOf: j,
      element: k(),
      elementType: o(),
      instanceOf: U,
      node: Q(),
      objectOf: J,
      oneOf: H,
      oneOfType: Z,
      shape: B,
      exact: K
    };
    function I(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    }
    function S(e, r) {
      this.message = e, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    S.prototype = Error.prototype;
    function A(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, a = 0;
      function i(l, p, v, u, m, E, M) {
        if (u = u || w, E = E || v, M !== h) {
          if (P) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var L = u + ":" + v;
            !r[L] && // Avoid spamming the console because they are often not actionable except for lib authors
            a < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + E + "` prop on `" + u + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[L] = !0, a++);
          }
        }
        return p[v] == null ? l ? p[v] === null ? new S("The " + m + " `" + E + "` is marked as required " + ("in `" + u + "`, but its value is `null`.")) : new S("The " + m + " `" + E + "` is marked as required in " + ("`" + u + "`, but its value is `undefined`.")) : null : e(p, v, u, m, E);
      }
      var c = i.bind(null, !1);
      return c.isRequired = i.bind(null, !0), c;
    }
    function $(e) {
      function r(a, i, c, l, p, v) {
        var u = a[i], m = N(u);
        if (m !== e) {
          var E = F(u);
          return new S(
            "Invalid " + l + " `" + p + "` of type " + ("`" + E + "` supplied to `" + c + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return A(r);
    }
    function D() {
      return A(T);
    }
    function j(e) {
      function r(a, i, c, l, p) {
        if (typeof e != "function")
          return new S("Property `" + p + "` of component `" + c + "` has invalid PropType notation inside arrayOf.");
        var v = a[i];
        if (!Array.isArray(v)) {
          var u = N(v);
          return new S("Invalid " + l + " `" + p + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an array."));
        }
        for (var m = 0; m < v.length; m++) {
          var E = e(v, m, c, l, p + "[" + m + "]", h);
          if (E instanceof Error)
            return E;
        }
        return null;
      }
      return A(r);
    }
    function k() {
      function e(r, a, i, c, l) {
        var p = r[a];
        if (!f(p)) {
          var v = N(p);
          return new S("Invalid " + c + " `" + l + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected a single ReactElement."));
        }
        return null;
      }
      return A(e);
    }
    function o() {
      function e(r, a, i, c, l) {
        var p = r[a];
        if (!t.isValidElementType(p)) {
          var v = N(p);
          return new S("Invalid " + c + " `" + l + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return A(e);
    }
    function U(e) {
      function r(a, i, c, l, p) {
        if (!(a[i] instanceof e)) {
          var v = e.name || w, u = X(a[i]);
          return new S("Invalid " + l + " `" + p + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected ") + ("instance of `" + v + "`."));
        }
        return null;
      }
      return A(r);
    }
    function H(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), T;
      function r(a, i, c, l, p) {
        for (var v = a[i], u = 0; u < e.length; u++)
          if (I(v, e[u]))
            return null;
        var m = JSON.stringify(e, function(M, n) {
          var L = F(n);
          return L === "symbol" ? String(n) : n;
        });
        return new S("Invalid " + l + " `" + p + "` of value `" + String(v) + "` " + ("supplied to `" + c + "`, expected one of " + m + "."));
      }
      return A(r);
    }
    function J(e) {
      function r(a, i, c, l, p) {
        if (typeof e != "function")
          return new S("Property `" + p + "` of component `" + c + "` has invalid PropType notation inside objectOf.");
        var v = a[i], u = N(v);
        if (u !== "object")
          return new S("Invalid " + l + " `" + p + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an object."));
        for (var m in v)
          if (d(v, m)) {
            var E = e(v, m, c, l, p + "." + m, h);
            if (E instanceof Error)
              return E;
          }
        return null;
      }
      return A(r);
    }
    function Z(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), T;
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        if (typeof a != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + V(a) + " at index " + r + "."
          ), T;
      }
      function i(c, l, p, v, u) {
        for (var m = [], E = 0; E < e.length; E++) {
          var M = e[E], n = M(c, l, p, v, u, h);
          if (n == null)
            return null;
          n.data && d(n.data, "expectedType") && m.push(n.data.expectedType);
        }
        var L = m.length > 0 ? ", expected one of type [" + m.join(", ") + "]" : "";
        return new S("Invalid " + v + " `" + u + "` supplied to " + ("`" + p + "`" + L + "."));
      }
      return A(i);
    }
    function Q() {
      function e(r, a, i, c, l) {
        return W(r[a]) ? null : new S("Invalid " + c + " `" + l + "` supplied to " + ("`" + i + "`, expected a ReactNode."));
      }
      return A(e);
    }
    function z(e, r, a, i, c) {
      return new S(
        (e || "React class") + ": " + r + " type `" + a + "." + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + c + "`."
      );
    }
    function B(e) {
      function r(a, i, c, l, p) {
        var v = a[i], u = N(v);
        if (u !== "object")
          return new S("Invalid " + l + " `" + p + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        for (var m in e) {
          var E = e[m];
          if (typeof E != "function")
            return z(c, l, p, m, F(E));
          var M = E(v, m, c, l, p + "." + m, h);
          if (M)
            return M;
        }
        return null;
      }
      return A(r);
    }
    function K(e) {
      function r(a, i, c, l, p) {
        var v = a[i], u = N(v);
        if (u !== "object")
          return new S("Invalid " + l + " `" + p + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        var m = C({}, a[i], e);
        for (var E in m) {
          var M = e[E];
          if (d(e, E) && typeof M != "function")
            return z(c, l, p, E, F(M));
          if (!M)
            return new S(
              "Invalid " + l + " `" + p + "` key `" + E + "` supplied to `" + c + "`.\nBad object: " + JSON.stringify(a[i], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var n = M(v, E, c, l, p + "." + E, h);
          if (n)
            return n;
        }
        return null;
      }
      return A(r);
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
          var r = R(e);
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
    function G(e, r) {
      return e === "symbol" ? !0 : r ? r["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && r instanceof Symbol : !1;
    }
    function N(e) {
      var r = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : G(r, e) ? "symbol" : r;
    }
    function F(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var r = N(e);
      if (r === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return r;
    }
    function V(e) {
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
    function X(e) {
      return !e.constructor || !e.constructor.name ? w : e.constructor.name;
    }
    return x.checkPropTypes = y, x.resetWarningCache = y.resetWarningCache, x.PropTypes = x, x;
  }, fe;
}
var le, Se;
function De() {
  if (Se) return le;
  Se = 1;
  var t = /* @__PURE__ */ de();
  function C() {
  }
  function h() {
  }
  return h.resetWarningCache = C, le = function() {
    function d(T, f, P, g, b, R) {
      if (R !== t) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    d.isRequired = d;
    function y() {
      return d;
    }
    var s = {
      array: d,
      bigint: d,
      bool: d,
      func: d,
      number: d,
      object: d,
      string: d,
      symbol: d,
      any: d,
      arrayOf: y,
      element: d,
      elementType: d,
      instanceOf: y,
      node: d,
      objectOf: y,
      oneOf: y,
      oneOfType: y,
      shape: y,
      exact: y,
      checkPropTypes: h,
      resetWarningCache: C
    };
    return s.PropTypes = s, s;
  }, le;
}
var Pe;
function We() {
  if (Pe) return oe.exports;
  if (Pe = 1, process.env.NODE_ENV !== "production") {
    var t = xe(), C = !0;
    oe.exports = /* @__PURE__ */ qe()(t.isElement, C);
  } else
    oe.exports = /* @__PURE__ */ De()();
  return oe.exports;
}
var Fe = /* @__PURE__ */ We();
const Y = /* @__PURE__ */ Ae(Fe), Le = ({
  name: t,
  legend: C,
  description: h,
  options: d,
  selectedValue: y,
  onChange: s,
  tiled: T = !1,
  required: f = !1,
  errorMessage: P,
  className: g
}) => {
  const b = f && P, R = [
    "radio-buttons-group",
    T ? "tiled" : "",
    b ? "error" : "",
    g
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ q.jsxs("fieldset", { className: R, children: [
    /* @__PURE__ */ q.jsxs("legend", { className: "radio-buttons-legend", children: [
      C,
      f && /* @__PURE__ */ q.jsx("span", { className: "required-asterisk", children: " *" })
    ] }),
    h && /* @__PURE__ */ q.jsx("p", { className: "radio-buttons-description", children: h }),
    b && /* @__PURE__ */ q.jsx("p", { className: "error-message", children: P }),
    /* @__PURE__ */ q.jsx("div", { className: "options-wrapper", children: d.map((w) => {
      const { value: x, labelText: I, labelDescription: S, disabled: A } = w, $ = y === x, D = `${t}-${x}`, j = [
        "radio-button-item",
        A ? "disabled" : "",
        $ ? "selected" : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ q.jsxs("div", { className: j, children: [
        /* @__PURE__ */ q.jsx(
          "input",
          {
            className: "radio-button-input",
            type: "radio",
            id: D,
            name: t,
            value: x,
            checked: $,
            onChange: () => s(x),
            disabled: A
          }
        ),
        /* @__PURE__ */ q.jsxs("label", { className: "radio-button-label", htmlFor: D, children: [
          /* @__PURE__ */ q.jsx("span", { className: "label-text", children: I }),
          S && /* @__PURE__ */ q.jsx("span", { className: "label-description", children: S })
        ] })
      ] }, x);
    }) })
  ] });
};
Le.propTypes = {
  /**
   * The name attribute for the radio button group.
   * This is used to group related radio buttons together and is required for proper form functionality.
   * @required
   */
  name: Y.string.isRequired,
  /**
   * The legend text displayed above the radio button group.
   * This provides context and accessibility for the radio button group.
   * @required
   */
  legend: Y.string.isRequired,
  /**
   * Optional description text displayed below the legend.
   * Provides additional context or instructions for the radio button group.
   */
  description: Y.string,
  /**
   * Array of radio button options to display.
   * Each option should contain a value, labelText, and optionally labelDescription and disabled status.
   * @required
   */
  options: Y.arrayOf(
    Y.shape({
      /**
       * The value for the radio button option.
       * This is what gets passed to the onChange callback when selected.
       * @required
       */
      value: Y.string.isRequired,
      /**
       * The text label for the radio button option.
       * This is what users see and what screen readers announce.
       * @required
       */
      labelText: Y.string.isRequired,
      /**
       * Optional description text for the option.
       * Provides additional context for the specific option.
       */
      labelDescription: Y.string,
      /**
       * Whether the option is disabled.
       * Disabled options cannot be selected and are visually dimmed.
       */
      disabled: Y.bool
    })
  ).isRequired,
  /**
   * The currently selected value.
   * Should match one of the values in the options array.
   */
  selectedValue: Y.string,
  /**
   * Callback function called when a radio button is selected.
   * Receives the value of the selected radio button as its parameter.
   * @required
   */
  onChange: Y.func.isRequired,
  /**
   * Whether to use the tiled layout variant.
   * When true, radio buttons are displayed in a grid layout instead of a vertical stack.
   * @default false
   */
  tiled: Y.bool,
  /**
   * Whether the radio button group is required.
   * When true and no option is selected, error styling and message are displayed.
   * @default false
   */
  required: Y.bool,
  /**
   * Error message to display when required is true and no option is selected.
   * This message is displayed below the radio button group with error styling.
   */
  errorMessage: Y.string,
  /**
   * Additional CSS classes for the component.
   * These classes are applied to the fieldset element.
   */
  className: Y.string
};
export {
  Le as RadioButtons
};
//# sourceMappingURL=index.js.map
