import Ce from "react";
function Ae(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var te = { exports: {} }, K = {};
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
  if (ve) return K;
  ve = 1;
  var t = Symbol.for("react.transitional.element"), T = Symbol.for("react.fragment");
  function x(f, y, u) {
    var E = null;
    if (u !== void 0 && (E = "" + u), y.key !== void 0 && (E = "" + y.key), "key" in y) {
      u = {};
      for (var p in y)
        p !== "key" && (u[p] = y[p]);
    } else u = y;
    return y = u.ref, {
      $$typeof: t,
      type: f,
      key: E,
      ref: y !== void 0 ? y : null,
      props: u
    };
  }
  return K.Fragment = T, K.jsx = x, K.jsxs = x, K;
}
var ee = {};
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
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case O:
          return "Fragment";
        case Y:
          return "Profiler";
        case I:
          return "StrictMode";
        case o:
          return "Suspense";
        case L:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case k:
            return (e.displayName || "Context") + ".Provider";
          case U:
            return (e._context.displayName || "Context") + ".Consumer";
          case A:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case G:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case X:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function T(e) {
      return "" + e;
    }
    function x(e) {
      try {
        T(e);
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
        ), T(e);
      }
    }
    function f(e) {
      if (e === O) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === X)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function y() {
      var e = F.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function E(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, r) {
      function a() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function w() {
      var e = t(this.type);
      return D[e] || (D[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function P(e, r, a, i, s, l, d, v) {
      return a = l.ref, e = {
        $$typeof: C,
        type: e,
        key: r,
        props: l,
        _owner: s
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: w
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
        value: d
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: v
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function h(e, r, a, i, s, l, d, v) {
      var c = r.children;
      if (c !== void 0)
        if (i)
          if (Q(c)) {
            for (i = 0; i < c.length; i++)
              R(c[i]);
            Object.freeze && Object.freeze(c);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(c);
      if (V.call(r, "key")) {
        c = t(e);
        var b = Object.keys(r).filter(function($) {
          return $ !== "key";
        });
        i = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", J[c + i] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          c,
          b,
          c
        ), J[c + i] = !0);
      }
      if (c = null, a !== void 0 && (x(a), c = "" + a), E(r) && (x(r.key), c = "" + r.key), "key" in r) {
        a = {};
        for (var m in r)
          m !== "key" && (a[m] = r[m]);
      } else a = r;
      return c && p(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), P(
        e,
        c,
        l,
        s,
        y(),
        a,
        d,
        v
      );
    }
    function R(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var j = Ce, C = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), k = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), F = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, Q = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    j = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var B, D = {}, W = j["react-stack-bottom-frame"].bind(
      j,
      u
    )(), z = q(f(u)), J = {};
    ee.Fragment = O, ee.jsx = function(e, r, a, i, s) {
      var l = 1e4 > F.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        a,
        !1,
        i,
        s,
        l ? Error("react-stack-top-frame") : W,
        l ? q(f(e)) : z
      );
    }, ee.jsxs = function(e, r, a, i, s) {
      var l = 1e4 > F.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        a,
        !0,
        i,
        s,
        l ? Error("react-stack-top-frame") : W,
        l ? q(f(e)) : z
      );
    };
  }()), ee;
}
var be;
function $e() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? te.exports = ke() : te.exports = Ie()), te.exports;
}
var g = $e(), ne = { exports: {} }, oe = { exports: {} }, _ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function Me() {
  if (me) return _;
  me = 1;
  var t = typeof Symbol == "function" && Symbol.for, T = t ? Symbol.for("react.element") : 60103, x = t ? Symbol.for("react.portal") : 60106, f = t ? Symbol.for("react.fragment") : 60107, y = t ? Symbol.for("react.strict_mode") : 60108, u = t ? Symbol.for("react.profiler") : 60114, E = t ? Symbol.for("react.provider") : 60109, p = t ? Symbol.for("react.context") : 60110, w = t ? Symbol.for("react.async_mode") : 60111, P = t ? Symbol.for("react.concurrent_mode") : 60111, h = t ? Symbol.for("react.forward_ref") : 60112, R = t ? Symbol.for("react.suspense") : 60113, j = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, M = t ? Symbol.for("react.lazy") : 60116, O = t ? Symbol.for("react.block") : 60121, I = t ? Symbol.for("react.fundamental") : 60117, Y = t ? Symbol.for("react.responder") : 60118, U = t ? Symbol.for("react.scope") : 60119;
  function k(o) {
    if (typeof o == "object" && o !== null) {
      var L = o.$$typeof;
      switch (L) {
        case T:
          switch (o = o.type, o) {
            case w:
            case P:
            case f:
            case u:
            case y:
            case R:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case p:
                case h:
                case M:
                case C:
                case E:
                  return o;
                default:
                  return L;
              }
          }
        case x:
          return L;
      }
    }
  }
  function A(o) {
    return k(o) === P;
  }
  return _.AsyncMode = w, _.ConcurrentMode = P, _.ContextConsumer = p, _.ContextProvider = E, _.Element = T, _.ForwardRef = h, _.Fragment = f, _.Lazy = M, _.Memo = C, _.Portal = x, _.Profiler = u, _.StrictMode = y, _.Suspense = R, _.isAsyncMode = function(o) {
    return A(o) || k(o) === w;
  }, _.isConcurrentMode = A, _.isContextConsumer = function(o) {
    return k(o) === p;
  }, _.isContextProvider = function(o) {
    return k(o) === E;
  }, _.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === T;
  }, _.isForwardRef = function(o) {
    return k(o) === h;
  }, _.isFragment = function(o) {
    return k(o) === f;
  }, _.isLazy = function(o) {
    return k(o) === M;
  }, _.isMemo = function(o) {
    return k(o) === C;
  }, _.isPortal = function(o) {
    return k(o) === x;
  }, _.isProfiler = function(o) {
    return k(o) === u;
  }, _.isStrictMode = function(o) {
    return k(o) === y;
  }, _.isSuspense = function(o) {
    return k(o) === R;
  }, _.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === f || o === P || o === u || o === y || o === R || o === j || typeof o == "object" && o !== null && (o.$$typeof === M || o.$$typeof === C || o.$$typeof === E || o.$$typeof === p || o.$$typeof === h || o.$$typeof === I || o.$$typeof === Y || o.$$typeof === U || o.$$typeof === O);
  }, _.typeOf = k, _;
}
var S = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge;
function Ye() {
  return ge || (ge = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, T = t ? Symbol.for("react.element") : 60103, x = t ? Symbol.for("react.portal") : 60106, f = t ? Symbol.for("react.fragment") : 60107, y = t ? Symbol.for("react.strict_mode") : 60108, u = t ? Symbol.for("react.profiler") : 60114, E = t ? Symbol.for("react.provider") : 60109, p = t ? Symbol.for("react.context") : 60110, w = t ? Symbol.for("react.async_mode") : 60111, P = t ? Symbol.for("react.concurrent_mode") : 60111, h = t ? Symbol.for("react.forward_ref") : 60112, R = t ? Symbol.for("react.suspense") : 60113, j = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, M = t ? Symbol.for("react.lazy") : 60116, O = t ? Symbol.for("react.block") : 60121, I = t ? Symbol.for("react.fundamental") : 60117, Y = t ? Symbol.for("react.responder") : 60118, U = t ? Symbol.for("react.scope") : 60119;
    function k(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === f || n === P || n === u || n === y || n === R || n === j || typeof n == "object" && n !== null && (n.$$typeof === M || n.$$typeof === C || n.$$typeof === E || n.$$typeof === p || n.$$typeof === h || n.$$typeof === I || n.$$typeof === Y || n.$$typeof === U || n.$$typeof === O);
    }
    function A(n) {
      if (typeof n == "object" && n !== null) {
        var N = n.$$typeof;
        switch (N) {
          case T:
            var re = n.type;
            switch (re) {
              case w:
              case P:
              case f:
              case u:
              case y:
              case R:
                return re;
              default:
                var pe = re && re.$$typeof;
                switch (pe) {
                  case p:
                  case h:
                  case M:
                  case C:
                  case E:
                    return pe;
                  default:
                    return N;
                }
            }
          case x:
            return N;
        }
      }
    }
    var o = w, L = P, G = p, X = E, H = T, Z = h, F = f, V = M, Q = C, q = x, B = u, D = y, W = R, z = !1;
    function J(n) {
      return z || (z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(n) || A(n) === w;
    }
    function e(n) {
      return A(n) === P;
    }
    function r(n) {
      return A(n) === p;
    }
    function a(n) {
      return A(n) === E;
    }
    function i(n) {
      return typeof n == "object" && n !== null && n.$$typeof === T;
    }
    function s(n) {
      return A(n) === h;
    }
    function l(n) {
      return A(n) === f;
    }
    function d(n) {
      return A(n) === M;
    }
    function v(n) {
      return A(n) === C;
    }
    function c(n) {
      return A(n) === x;
    }
    function b(n) {
      return A(n) === u;
    }
    function m(n) {
      return A(n) === y;
    }
    function $(n) {
      return A(n) === R;
    }
    S.AsyncMode = o, S.ConcurrentMode = L, S.ContextConsumer = G, S.ContextProvider = X, S.Element = H, S.ForwardRef = Z, S.Fragment = F, S.Lazy = V, S.Memo = Q, S.Portal = q, S.Profiler = B, S.StrictMode = D, S.Suspense = W, S.isAsyncMode = J, S.isConcurrentMode = e, S.isContextConsumer = r, S.isContextProvider = a, S.isElement = i, S.isForwardRef = s, S.isFragment = l, S.isLazy = d, S.isMemo = v, S.isPortal = c, S.isProfiler = b, S.isStrictMode = m, S.isSuspense = $, S.isValidElementType = k, S.typeOf = A;
  }()), S;
}
var xe;
function Oe() {
  return xe || (xe = 1, process.env.NODE_ENV === "production" ? oe.exports = Me() : oe.exports = Ye()), oe.exports;
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
  var t = Object.getOwnPropertySymbols, T = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
  function f(u) {
    if (u == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(u);
  }
  function y() {
    try {
      if (!Object.assign)
        return !1;
      var u = new String("abc");
      if (u[5] = "de", Object.getOwnPropertyNames(u)[0] === "5")
        return !1;
      for (var E = {}, p = 0; p < 10; p++)
        E["_" + String.fromCharCode(p)] = p;
      var w = Object.getOwnPropertyNames(E).map(function(h) {
        return E[h];
      });
      if (w.join("") !== "0123456789")
        return !1;
      var P = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        P[h] = h;
      }), Object.keys(Object.assign({}, P)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = y() ? Object.assign : function(u, E) {
    for (var p, w = f(u), P, h = 1; h < arguments.length; h++) {
      p = Object(arguments[h]);
      for (var R in p)
        T.call(p, R) && (w[R] = p[R]);
      if (t) {
        P = t(p);
        for (var j = 0; j < P.length; j++)
          x.call(p, P[j]) && (w[P[j]] = p[P[j]]);
      }
    }
    return w;
  }, ie;
}
var se, Ee;
function de() {
  if (Ee) return se;
  Ee = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return se = t, se;
}
var ce, Te;
function we() {
  return Te || (Te = 1, ce = Function.call.bind(Object.prototype.hasOwnProperty)), ce;
}
var ue, Re;
function qe() {
  if (Re) return ue;
  Re = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var T = /* @__PURE__ */ de(), x = {}, f = /* @__PURE__ */ we();
    t = function(u) {
      var E = "Warning: " + u;
      typeof console < "u" && console.error(E);
      try {
        throw new Error(E);
      } catch {
      }
    };
  }
  function y(u, E, p, w, P) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in u)
        if (f(u, h)) {
          var R;
          try {
            if (typeof u[h] != "function") {
              var j = Error(
                (w || "React class") + ": " + p + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw j.name = "Invariant Violation", j;
            }
            R = u[h](E, h, w, p, null, T);
          } catch (M) {
            R = M;
          }
          if (R && !(R instanceof Error) && t(
            (w || "React class") + ": type specification of " + p + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof R + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), R instanceof Error && !(R.message in x)) {
            x[R.message] = !0;
            var C = P ? P() : "";
            t(
              "Failed " + p + " type: " + R.message + (C ?? "")
            );
          }
        }
    }
  }
  return y.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (x = {});
  }, ue = y, ue;
}
var le, _e;
function We() {
  if (_e) return le;
  _e = 1;
  var t = Oe(), T = De(), x = /* @__PURE__ */ de(), f = /* @__PURE__ */ we(), y = /* @__PURE__ */ qe(), u = function() {
  };
  process.env.NODE_ENV !== "production" && (u = function(p) {
    var w = "Warning: " + p;
    typeof console < "u" && console.error(w);
    try {
      throw new Error(w);
    } catch {
    }
  });
  function E() {
    return null;
  }
  return le = function(p, w) {
    var P = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function R(e) {
      var r = e && (P && e[P] || e[h]);
      if (typeof r == "function")
        return r;
    }
    var j = "<<anonymous>>", C = {
      array: Y("array"),
      bigint: Y("bigint"),
      bool: Y("boolean"),
      func: Y("function"),
      number: Y("number"),
      object: Y("object"),
      string: Y("string"),
      symbol: Y("symbol"),
      any: U(),
      arrayOf: k,
      element: A(),
      elementType: o(),
      instanceOf: L,
      node: Z(),
      objectOf: X,
      oneOf: G,
      oneOfType: H,
      shape: V,
      exact: Q
    };
    function M(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    }
    function O(e, r) {
      this.message = e, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    O.prototype = Error.prototype;
    function I(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, a = 0;
      function i(l, d, v, c, b, m, $) {
        if (c = c || j, m = m || v, $ !== x) {
          if (w) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var N = c + ":" + v;
            !r[N] && // Avoid spamming the console because they are often not actionable except for lib authors
            a < 3 && (u(
              "You are manually calling a React.PropTypes validation function for the `" + m + "` prop on `" + c + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[N] = !0, a++);
          }
        }
        return d[v] == null ? l ? d[v] === null ? new O("The " + b + " `" + m + "` is marked as required " + ("in `" + c + "`, but its value is `null`.")) : new O("The " + b + " `" + m + "` is marked as required in " + ("`" + c + "`, but its value is `undefined`.")) : null : e(d, v, c, b, m);
      }
      var s = i.bind(null, !1);
      return s.isRequired = i.bind(null, !0), s;
    }
    function Y(e) {
      function r(a, i, s, l, d, v) {
        var c = a[i], b = D(c);
        if (b !== e) {
          var m = W(c);
          return new O(
            "Invalid " + l + " `" + d + "` of type " + ("`" + m + "` supplied to `" + s + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return I(r);
    }
    function U() {
      return I(E);
    }
    function k(e) {
      function r(a, i, s, l, d) {
        if (typeof e != "function")
          return new O("Property `" + d + "` of component `" + s + "` has invalid PropType notation inside arrayOf.");
        var v = a[i];
        if (!Array.isArray(v)) {
          var c = D(v);
          return new O("Invalid " + l + " `" + d + "` of type " + ("`" + c + "` supplied to `" + s + "`, expected an array."));
        }
        for (var b = 0; b < v.length; b++) {
          var m = e(v, b, s, l, d + "[" + b + "]", x);
          if (m instanceof Error)
            return m;
        }
        return null;
      }
      return I(r);
    }
    function A() {
      function e(r, a, i, s, l) {
        var d = r[a];
        if (!p(d)) {
          var v = D(d);
          return new O("Invalid " + s + " `" + l + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(e);
    }
    function o() {
      function e(r, a, i, s, l) {
        var d = r[a];
        if (!t.isValidElementType(d)) {
          var v = D(d);
          return new O("Invalid " + s + " `" + l + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(e);
    }
    function L(e) {
      function r(a, i, s, l, d) {
        if (!(a[i] instanceof e)) {
          var v = e.name || j, c = J(a[i]);
          return new O("Invalid " + l + " `" + d + "` of type " + ("`" + c + "` supplied to `" + s + "`, expected ") + ("instance of `" + v + "`."));
        }
        return null;
      }
      return I(r);
    }
    function G(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? u(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : u("Invalid argument supplied to oneOf, expected an array.")), E;
      function r(a, i, s, l, d) {
        for (var v = a[i], c = 0; c < e.length; c++)
          if (M(v, e[c]))
            return null;
        var b = JSON.stringify(e, function($, n) {
          var N = W(n);
          return N === "symbol" ? String(n) : n;
        });
        return new O("Invalid " + l + " `" + d + "` of value `" + String(v) + "` " + ("supplied to `" + s + "`, expected one of " + b + "."));
      }
      return I(r);
    }
    function X(e) {
      function r(a, i, s, l, d) {
        if (typeof e != "function")
          return new O("Property `" + d + "` of component `" + s + "` has invalid PropType notation inside objectOf.");
        var v = a[i], c = D(v);
        if (c !== "object")
          return new O("Invalid " + l + " `" + d + "` of type " + ("`" + c + "` supplied to `" + s + "`, expected an object."));
        for (var b in v)
          if (f(v, b)) {
            var m = e(v, b, s, l, d + "." + b, x);
            if (m instanceof Error)
              return m;
          }
        return null;
      }
      return I(r);
    }
    function H(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && u("Invalid argument supplied to oneOfType, expected an instance of array."), E;
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        if (typeof a != "function")
          return u(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + z(a) + " at index " + r + "."
          ), E;
      }
      function i(s, l, d, v, c) {
        for (var b = [], m = 0; m < e.length; m++) {
          var $ = e[m], n = $(s, l, d, v, c, x);
          if (n == null)
            return null;
          n.data && f(n.data, "expectedType") && b.push(n.data.expectedType);
        }
        var N = b.length > 0 ? ", expected one of type [" + b.join(", ") + "]" : "";
        return new O("Invalid " + v + " `" + c + "` supplied to " + ("`" + d + "`" + N + "."));
      }
      return I(i);
    }
    function Z() {
      function e(r, a, i, s, l) {
        return q(r[a]) ? null : new O("Invalid " + s + " `" + l + "` supplied to " + ("`" + i + "`, expected a ReactNode."));
      }
      return I(e);
    }
    function F(e, r, a, i, s) {
      return new O(
        (e || "React class") + ": " + r + " type `" + a + "." + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + s + "`."
      );
    }
    function V(e) {
      function r(a, i, s, l, d) {
        var v = a[i], c = D(v);
        if (c !== "object")
          return new O("Invalid " + l + " `" + d + "` of type `" + c + "` " + ("supplied to `" + s + "`, expected `object`."));
        for (var b in e) {
          var m = e[b];
          if (typeof m != "function")
            return F(s, l, d, b, W(m));
          var $ = m(v, b, s, l, d + "." + b, x);
          if ($)
            return $;
        }
        return null;
      }
      return I(r);
    }
    function Q(e) {
      function r(a, i, s, l, d) {
        var v = a[i], c = D(v);
        if (c !== "object")
          return new O("Invalid " + l + " `" + d + "` of type `" + c + "` " + ("supplied to `" + s + "`, expected `object`."));
        var b = T({}, a[i], e);
        for (var m in b) {
          var $ = e[m];
          if (f(e, m) && typeof $ != "function")
            return F(s, l, d, m, W($));
          if (!$)
            return new O(
              "Invalid " + l + " `" + d + "` key `" + m + "` supplied to `" + s + "`.\nBad object: " + JSON.stringify(a[i], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var n = $(v, m, s, l, d + "." + m, x);
          if (n)
            return n;
        }
        return null;
      }
      return I(r);
    }
    function q(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(q);
          if (e === null || p(e))
            return !0;
          var r = R(e);
          if (r) {
            var a = r.call(e), i;
            if (r !== e.entries) {
              for (; !(i = a.next()).done; )
                if (!q(i.value))
                  return !1;
            } else
              for (; !(i = a.next()).done; ) {
                var s = i.value;
                if (s && !q(s[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function B(e, r) {
      return e === "symbol" ? !0 : r ? r["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && r instanceof Symbol : !1;
    }
    function D(e) {
      var r = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : B(r, e) ? "symbol" : r;
    }
    function W(e) {
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
    function z(e) {
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
    function J(e) {
      return !e.constructor || !e.constructor.name ? j : e.constructor.name;
    }
    return C.checkPropTypes = y, C.resetWarningCache = y.resetWarningCache, C.PropTypes = C, C;
  }, le;
}
var fe, Se;
function Ne() {
  if (Se) return fe;
  Se = 1;
  var t = /* @__PURE__ */ de();
  function T() {
  }
  function x() {
  }
  return x.resetWarningCache = T, fe = function() {
    function f(E, p, w, P, h, R) {
      if (R !== t) {
        var j = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw j.name = "Invariant Violation", j;
      }
    }
    f.isRequired = f;
    function y() {
      return f;
    }
    var u = {
      array: f,
      bigint: f,
      bool: f,
      func: f,
      number: f,
      object: f,
      string: f,
      symbol: f,
      any: f,
      arrayOf: y,
      element: f,
      elementType: f,
      instanceOf: y,
      node: f,
      objectOf: y,
      oneOf: y,
      oneOfType: y,
      shape: y,
      exact: y,
      checkPropTypes: x,
      resetWarningCache: T
    };
    return u.PropTypes = u, u;
  }, fe;
}
var Pe;
function Le() {
  if (Pe) return ne.exports;
  if (Pe = 1, process.env.NODE_ENV !== "production") {
    var t = Oe(), T = !0;
    ne.exports = /* @__PURE__ */ We()(t.isElement, T);
  } else
    ne.exports = /* @__PURE__ */ Ne()();
  return ne.exports;
}
var Fe = /* @__PURE__ */ Le();
const ae = /* @__PURE__ */ Ae(Fe), je = ({ name: t, variable: T, value: x, pixels: f }) => /* @__PURE__ */ g.jsxs("div", { style: {
  margin: "10px",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  width: "100%",
  maxWidth: "600px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
}, children: [
  /* @__PURE__ */ g.jsx("div", { style: {
    width: x,
    height: "24px",
    backgroundColor: "#0050d8",
    borderRadius: "4px"
  } }),
  /* @__PURE__ */ g.jsxs("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    textAlign: "right",
    minWidth: "200px"
  }, children: [
    /* @__PURE__ */ g.jsx("div", { style: { fontWeight: "bold" }, children: t }),
    /* @__PURE__ */ g.jsx("code", { style: {
      backgroundColor: "#f5f5f5",
      padding: "4px 8px",
      borderRadius: "4px",
      fontSize: "14px"
    }, children: T }),
    /* @__PURE__ */ g.jsxs("div", { style: {
      fontSize: "14px",
      color: "#666"
    }, children: [
      x,
      " (",
      f,
      ")"
    ] })
  ] })
] });
je.propTypes = {
  name: ae.string.isRequired,
  variable: ae.string.isRequired,
  value: ae.string.isRequired,
  pixels: ae.string.isRequired
};
const ze = () => {
  const t = [
    { name: "3XS", variable: "var(--spacing-global-05)", value: "0.25rem", pixels: "4px" },
    { name: "2XS", variable: "var(--spacing-global-1)", value: "0.5rem", pixels: "8px" },
    { name: "XS", variable: "var(--spacing-global-105)", value: "0.75rem", pixels: "12px" },
    { name: "SM", variable: "var(--spacing-global-2)", value: "1rem", pixels: "16px" },
    { name: "MD", variable: "var(--spacing-global-3)", value: "1.5rem", pixels: "24px" },
    { name: "LG", variable: "var(--spacing-global-4)", value: "2rem", pixels: "32px" },
    { name: "XL", variable: "var(--spacing-global-5)", value: "2.5rem", pixels: "40px" },
    { name: "2XL", variable: "var(--spacing-global-6)", value: "3rem", pixels: "48px" },
    { name: "3XL", variable: "var(--spacing-global-8)", value: "4rem", pixels: "64px" }
  ];
  return /* @__PURE__ */ g.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "20px" }, children: t.map((T, x) => /* @__PURE__ */ g.jsx(
    je,
    {
      name: T.name,
      variable: T.variable,
      value: T.value,
      pixels: T.pixels
    },
    x
  )) });
}, Xe = () => /* @__PURE__ */ g.jsxs("div", { style: {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  maxWidth: "800px"
}, children: [
  /* @__PURE__ */ g.jsxs("div", { children: [
    /* @__PURE__ */ g.jsx("h3", { style: { marginBottom: "16px" }, children: "Margin Examples" }),
    /* @__PURE__ */ g.jsxs("div", { style: {
      border: "1px dashed #ddd",
      padding: "20px",
      borderRadius: "4px"
    }, children: [
      /* @__PURE__ */ g.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "16px",
        marginBottom: "var(--spacing-global-3)",
        borderRadius: "4px"
      }, children: "Element with margin-bottom: var(--spacing-global-3)" }),
      /* @__PURE__ */ g.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: "Next element" })
    ] })
  ] }),
  /* @__PURE__ */ g.jsxs("div", { children: [
    /* @__PURE__ */ g.jsx("h3", { style: { marginBottom: "16px" }, children: "Padding Examples" }),
    /* @__PURE__ */ g.jsxs("div", { style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px"
    }, children: [
      /* @__PURE__ */ g.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "var(--spacing-global-3)",
        borderRadius: "4px",
        width: "200px"
      }, children: "Padding: var(--spacing-global-3)" }),
      /* @__PURE__ */ g.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "var(--spacing-global-105)",
        borderRadius: "4px",
        width: "200px"
      }, children: "Padding: var(--spacing-global-105)" }),
      /* @__PURE__ */ g.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "var(--spacing-global-5)",
        borderRadius: "4px",
        width: "200px"
      }, children: "Padding: var(--spacing-global-5)" })
    ] })
  ] }),
  /* @__PURE__ */ g.jsxs("div", { children: [
    /* @__PURE__ */ g.jsx("h3", { style: { marginBottom: "16px" }, children: "Gap Examples" }),
    /* @__PURE__ */ g.jsxs("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }, children: [
      /* @__PURE__ */ g.jsxs("div", { style: {
        display: "flex",
        gap: "var(--spacing-global-3)",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: [
        /* @__PURE__ */ g.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ g.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ g.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { style: {
        display: "flex",
        gap: "var(--spacing-global-105)",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: [
        /* @__PURE__ */ g.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ g.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ g.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { style: {
        display: "flex",
        gap: "var(--spacing-global-5)",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: [
        /* @__PURE__ */ g.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ g.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ g.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" })
      ] })
    ] })
  ] })
] });
export {
  je as SpacingDisplay,
  Xe as SpacingExamples,
  ze as SpacingTokens
};
//# sourceMappingURL=index.js.map
