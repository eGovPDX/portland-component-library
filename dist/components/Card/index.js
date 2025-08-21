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
function je() {
  if (ve) return ee;
  ve = 1;
  var t = Symbol.for("react.transitional.element"), x = Symbol.for("react.fragment");
  function h(l, y, s) {
    var m = null;
    if (s !== void 0 && (m = "" + s), y.key !== void 0 && (m = "" + y.key), "key" in y) {
      s = {};
      for (var d in y)
        d !== "key" && (s[d] = y[d]);
    } else s = y;
    return y = s.ref, {
      $$typeof: t,
      type: l,
      key: m,
      ref: y !== void 0 ? y : null,
      props: s
    };
  }
  return ee.Fragment = x, ee.jsx = h, ee.jsxs = h, ee;
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
        case M:
          return "Profiler";
        case k:
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
          case I:
            return "Portal";
          case j:
            return (e.displayName || "Context") + ".Provider";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case A:
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
    function x(e) {
      return "" + e;
    }
    function h(e) {
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
    function l(e) {
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
      var e = U.A;
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
    function d(e, r) {
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
    function P() {
      var e = t(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function R(e, r, a, i, c, f, p, v) {
      return a = f.ref, e = {
        $$typeof: C,
        type: e,
        key: r,
        props: f,
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
    function T(e, r, a, i, c, f, p, v) {
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
        var b = Object.keys(r).filter(function($) {
          return $ !== "key";
        });
        i = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", B[u + i] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          u,
          b,
          u
        ), B[u + i] = !0);
      }
      if (u = null, a !== void 0 && (h(a), u = "" + a), m(r) && (h(r.key), u = "" + r.key), "key" in r) {
        a = {};
        for (var E in r)
          E !== "key" && (a[E] = r[E]);
      } else a = r;
      return u && d(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), R(
        e,
        u,
        f,
        c,
        y(),
        a,
        p,
        v
      );
    }
    function _(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var w = xe, C = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), j = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), U = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = Object.prototype.hasOwnProperty, K = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var X, Y = {}, D = w["react-stack-bottom-frame"].bind(
      w,
      s
    )(), V = q(l(s)), B = {};
    re.Fragment = S, re.jsx = function(e, r, a, i, c) {
      var f = 1e4 > U.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        a,
        !1,
        i,
        c,
        f ? Error("react-stack-top-frame") : D,
        f ? q(l(e)) : V
      );
    }, re.jsxs = function(e, r, a, i, c) {
      var f = 1e4 > U.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        a,
        !0,
        i,
        c,
        f ? Error("react-stack-top-frame") : D,
        f ? q(l(e)) : V
      );
    };
  }()), re;
}
var me;
function Ie() {
  return me || (me = 1, process.env.NODE_ENV === "production" ? ne.exports = je() : ne.exports = ke()), ne.exports;
}
var F = Ie(), oe = { exports: {} }, ae = { exports: {} }, g = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function $e() {
  if (be) return g;
  be = 1;
  var t = typeof Symbol == "function" && Symbol.for, x = t ? Symbol.for("react.element") : 60103, h = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, y = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, m = t ? Symbol.for("react.provider") : 60109, d = t ? Symbol.for("react.context") : 60110, P = t ? Symbol.for("react.async_mode") : 60111, R = t ? Symbol.for("react.concurrent_mode") : 60111, T = t ? Symbol.for("react.forward_ref") : 60112, _ = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, I = t ? Symbol.for("react.lazy") : 60116, S = t ? Symbol.for("react.block") : 60121, k = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, z = t ? Symbol.for("react.scope") : 60119;
  function j(o) {
    if (typeof o == "object" && o !== null) {
      var L = o.$$typeof;
      switch (L) {
        case x:
          switch (o = o.type, o) {
            case P:
            case R:
            case l:
            case s:
            case y:
            case _:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case d:
                case T:
                case I:
                case C:
                case m:
                  return o;
                default:
                  return L;
              }
          }
        case h:
          return L;
      }
    }
  }
  function A(o) {
    return j(o) === R;
  }
  return g.AsyncMode = P, g.ConcurrentMode = R, g.ContextConsumer = d, g.ContextProvider = m, g.Element = x, g.ForwardRef = T, g.Fragment = l, g.Lazy = I, g.Memo = C, g.Portal = h, g.Profiler = s, g.StrictMode = y, g.Suspense = _, g.isAsyncMode = function(o) {
    return A(o) || j(o) === P;
  }, g.isConcurrentMode = A, g.isContextConsumer = function(o) {
    return j(o) === d;
  }, g.isContextProvider = function(o) {
    return j(o) === m;
  }, g.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === x;
  }, g.isForwardRef = function(o) {
    return j(o) === T;
  }, g.isFragment = function(o) {
    return j(o) === l;
  }, g.isLazy = function(o) {
    return j(o) === I;
  }, g.isMemo = function(o) {
    return j(o) === C;
  }, g.isPortal = function(o) {
    return j(o) === h;
  }, g.isProfiler = function(o) {
    return j(o) === s;
  }, g.isStrictMode = function(o) {
    return j(o) === y;
  }, g.isSuspense = function(o) {
    return j(o) === _;
  }, g.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === l || o === R || o === s || o === y || o === _ || o === w || typeof o == "object" && o !== null && (o.$$typeof === I || o.$$typeof === C || o.$$typeof === m || o.$$typeof === d || o.$$typeof === T || o.$$typeof === k || o.$$typeof === M || o.$$typeof === z || o.$$typeof === S);
  }, g.typeOf = j, g;
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
    var t = typeof Symbol == "function" && Symbol.for, x = t ? Symbol.for("react.element") : 60103, h = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, y = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, m = t ? Symbol.for("react.provider") : 60109, d = t ? Symbol.for("react.context") : 60110, P = t ? Symbol.for("react.async_mode") : 60111, R = t ? Symbol.for("react.concurrent_mode") : 60111, T = t ? Symbol.for("react.forward_ref") : 60112, _ = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, I = t ? Symbol.for("react.lazy") : 60116, S = t ? Symbol.for("react.block") : 60121, k = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, z = t ? Symbol.for("react.scope") : 60119;
    function j(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === l || n === R || n === s || n === y || n === _ || n === w || typeof n == "object" && n !== null && (n.$$typeof === I || n.$$typeof === C || n.$$typeof === m || n.$$typeof === d || n.$$typeof === T || n.$$typeof === k || n.$$typeof === M || n.$$typeof === z || n.$$typeof === S);
    }
    function A(n) {
      if (typeof n == "object" && n !== null) {
        var W = n.$$typeof;
        switch (W) {
          case x:
            var te = n.type;
            switch (te) {
              case P:
              case R:
              case l:
              case s:
              case y:
              case _:
                return te;
              default:
                var pe = te && te.$$typeof;
                switch (pe) {
                  case d:
                  case T:
                  case I:
                  case C:
                  case m:
                    return pe;
                  default:
                    return W;
                }
            }
          case h:
            return W;
        }
      }
    }
    var o = P, L = R, H = d, J = m, Z = x, Q = T, U = l, G = I, K = C, q = h, X = s, Y = y, D = _, V = !1;
    function B(n) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(n) || A(n) === P;
    }
    function e(n) {
      return A(n) === R;
    }
    function r(n) {
      return A(n) === d;
    }
    function a(n) {
      return A(n) === m;
    }
    function i(n) {
      return typeof n == "object" && n !== null && n.$$typeof === x;
    }
    function c(n) {
      return A(n) === T;
    }
    function f(n) {
      return A(n) === l;
    }
    function p(n) {
      return A(n) === I;
    }
    function v(n) {
      return A(n) === C;
    }
    function u(n) {
      return A(n) === h;
    }
    function b(n) {
      return A(n) === s;
    }
    function E(n) {
      return A(n) === y;
    }
    function $(n) {
      return A(n) === _;
    }
    O.AsyncMode = o, O.ConcurrentMode = L, O.ContextConsumer = H, O.ContextProvider = J, O.Element = Z, O.ForwardRef = Q, O.Fragment = U, O.Lazy = G, O.Memo = K, O.Portal = q, O.Profiler = X, O.StrictMode = Y, O.Suspense = D, O.isAsyncMode = B, O.isConcurrentMode = e, O.isContextConsumer = r, O.isContextProvider = a, O.isElement = i, O.isForwardRef = c, O.isFragment = f, O.isLazy = p, O.isMemo = v, O.isPortal = u, O.isProfiler = b, O.isStrictMode = E, O.isSuspense = $, O.isValidElementType = j, O.typeOf = A;
  }()), O;
}
var Te;
function we() {
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
  var t = Object.getOwnPropertySymbols, x = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
  function l(s) {
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
      for (var m = {}, d = 0; d < 10; d++)
        m["_" + String.fromCharCode(d)] = d;
      var P = Object.getOwnPropertyNames(m).map(function(T) {
        return m[T];
      });
      if (P.join("") !== "0123456789")
        return !1;
      var R = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(T) {
        R[T] = T;
      }), Object.keys(Object.assign({}, R)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = y() ? Object.assign : function(s, m) {
    for (var d, P = l(s), R, T = 1; T < arguments.length; T++) {
      d = Object(arguments[T]);
      for (var _ in d)
        x.call(d, _) && (P[_] = d[_]);
      if (t) {
        R = t(d);
        for (var w = 0; w < R.length; w++)
          h.call(d, R[w]) && (P[R[w]] = d[R[w]]);
      }
    }
    return P;
  }, ie;
}
var se, _e;
function de() {
  if (_e) return se;
  _e = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return se = t, se;
}
var ce, Re;
function Ce() {
  return Re || (Re = 1, ce = Function.call.bind(Object.prototype.hasOwnProperty)), ce;
}
var ue, ge;
function Ne() {
  if (ge) return ue;
  ge = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var x = /* @__PURE__ */ de(), h = {}, l = /* @__PURE__ */ Ce();
    t = function(s) {
      var m = "Warning: " + s;
      typeof console < "u" && console.error(m);
      try {
        throw new Error(m);
      } catch {
      }
    };
  }
  function y(s, m, d, P, R) {
    if (process.env.NODE_ENV !== "production") {
      for (var T in s)
        if (l(s, T)) {
          var _;
          try {
            if (typeof s[T] != "function") {
              var w = Error(
                (P || "React class") + ": " + d + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            _ = s[T](m, T, P, d, null, x);
          } catch (I) {
            _ = I;
          }
          if (_ && !(_ instanceof Error) && t(
            (P || "React class") + ": type specification of " + d + " `" + T + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof _ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), _ instanceof Error && !(_.message in h)) {
            h[_.message] = !0;
            var C = R ? R() : "";
            t(
              "Failed " + d + " type: " + _.message + (C ?? "")
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
  var t = we(), x = Ye(), h = /* @__PURE__ */ de(), l = /* @__PURE__ */ Ce(), y = /* @__PURE__ */ Ne(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(d) {
    var P = "Warning: " + d;
    typeof console < "u" && console.error(P);
    try {
      throw new Error(P);
    } catch {
    }
  });
  function m() {
    return null;
  }
  return fe = function(d, P) {
    var R = typeof Symbol == "function" && Symbol.iterator, T = "@@iterator";
    function _(e) {
      var r = e && (R && e[R] || e[T]);
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
      arrayOf: j,
      element: A(),
      elementType: o(),
      instanceOf: L,
      node: Q(),
      objectOf: J,
      oneOf: H,
      oneOfType: Z,
      shape: G,
      exact: K
    };
    function I(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    }
    function S(e, r) {
      this.message = e, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    S.prototype = Error.prototype;
    function k(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, a = 0;
      function i(f, p, v, u, b, E, $) {
        if (u = u || w, E = E || v, $ !== h) {
          if (P) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var W = u + ":" + v;
            !r[W] && // Avoid spamming the console because they are often not actionable except for lib authors
            a < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + E + "` prop on `" + u + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[W] = !0, a++);
          }
        }
        return p[v] == null ? f ? p[v] === null ? new S("The " + b + " `" + E + "` is marked as required " + ("in `" + u + "`, but its value is `null`.")) : new S("The " + b + " `" + E + "` is marked as required in " + ("`" + u + "`, but its value is `undefined`.")) : null : e(p, v, u, b, E);
      }
      var c = i.bind(null, !1);
      return c.isRequired = i.bind(null, !0), c;
    }
    function M(e) {
      function r(a, i, c, f, p, v) {
        var u = a[i], b = Y(u);
        if (b !== e) {
          var E = D(u);
          return new S(
            "Invalid " + f + " `" + p + "` of type " + ("`" + E + "` supplied to `" + c + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return k(r);
    }
    function z() {
      return k(m);
    }
    function j(e) {
      function r(a, i, c, f, p) {
        if (typeof e != "function")
          return new S("Property `" + p + "` of component `" + c + "` has invalid PropType notation inside arrayOf.");
        var v = a[i];
        if (!Array.isArray(v)) {
          var u = Y(v);
          return new S("Invalid " + f + " `" + p + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an array."));
        }
        for (var b = 0; b < v.length; b++) {
          var E = e(v, b, c, f, p + "[" + b + "]", h);
          if (E instanceof Error)
            return E;
        }
        return null;
      }
      return k(r);
    }
    function A() {
      function e(r, a, i, c, f) {
        var p = r[a];
        if (!d(p)) {
          var v = Y(p);
          return new S("Invalid " + c + " `" + f + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(e);
    }
    function o() {
      function e(r, a, i, c, f) {
        var p = r[a];
        if (!t.isValidElementType(p)) {
          var v = Y(p);
          return new S("Invalid " + c + " `" + f + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(e);
    }
    function L(e) {
      function r(a, i, c, f, p) {
        if (!(a[i] instanceof e)) {
          var v = e.name || w, u = B(a[i]);
          return new S("Invalid " + f + " `" + p + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected ") + ("instance of `" + v + "`."));
        }
        return null;
      }
      return k(r);
    }
    function H(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), m;
      function r(a, i, c, f, p) {
        for (var v = a[i], u = 0; u < e.length; u++)
          if (I(v, e[u]))
            return null;
        var b = JSON.stringify(e, function($, n) {
          var W = D(n);
          return W === "symbol" ? String(n) : n;
        });
        return new S("Invalid " + f + " `" + p + "` of value `" + String(v) + "` " + ("supplied to `" + c + "`, expected one of " + b + "."));
      }
      return k(r);
    }
    function J(e) {
      function r(a, i, c, f, p) {
        if (typeof e != "function")
          return new S("Property `" + p + "` of component `" + c + "` has invalid PropType notation inside objectOf.");
        var v = a[i], u = Y(v);
        if (u !== "object")
          return new S("Invalid " + f + " `" + p + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an object."));
        for (var b in v)
          if (l(v, b)) {
            var E = e(v, b, c, f, p + "." + b, h);
            if (E instanceof Error)
              return E;
          }
        return null;
      }
      return k(r);
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
      function i(c, f, p, v, u) {
        for (var b = [], E = 0; E < e.length; E++) {
          var $ = e[E], n = $(c, f, p, v, u, h);
          if (n == null)
            return null;
          n.data && l(n.data, "expectedType") && b.push(n.data.expectedType);
        }
        var W = b.length > 0 ? ", expected one of type [" + b.join(", ") + "]" : "";
        return new S("Invalid " + v + " `" + u + "` supplied to " + ("`" + p + "`" + W + "."));
      }
      return k(i);
    }
    function Q() {
      function e(r, a, i, c, f) {
        return q(r[a]) ? null : new S("Invalid " + c + " `" + f + "` supplied to " + ("`" + i + "`, expected a ReactNode."));
      }
      return k(e);
    }
    function U(e, r, a, i, c) {
      return new S(
        (e || "React class") + ": " + r + " type `" + a + "." + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + c + "`."
      );
    }
    function G(e) {
      function r(a, i, c, f, p) {
        var v = a[i], u = Y(v);
        if (u !== "object")
          return new S("Invalid " + f + " `" + p + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        for (var b in e) {
          var E = e[b];
          if (typeof E != "function")
            return U(c, f, p, b, D(E));
          var $ = E(v, b, c, f, p + "." + b, h);
          if ($)
            return $;
        }
        return null;
      }
      return k(r);
    }
    function K(e) {
      function r(a, i, c, f, p) {
        var v = a[i], u = Y(v);
        if (u !== "object")
          return new S("Invalid " + f + " `" + p + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        var b = x({}, a[i], e);
        for (var E in b) {
          var $ = e[E];
          if (l(e, E) && typeof $ != "function")
            return U(c, f, p, E, D($));
          if (!$)
            return new S(
              "Invalid " + f + " `" + p + "` key `" + E + "` supplied to `" + c + "`.\nBad object: " + JSON.stringify(a[i], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var n = $(v, E, c, f, p + "." + E, h);
          if (n)
            return n;
        }
        return null;
      }
      return k(r);
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
          if (e === null || d(e))
            return !0;
          var r = _(e);
          if (r) {
            var a = r.call(e), i;
            if (r !== e.entries) {
              for (; !(i = a.next()).done; )
                if (!q(i.value))
                  return !1;
            } else
              for (; !(i = a.next()).done; ) {
                var c = i.value;
                if (c && !q(c[1]))
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
    function Y(e) {
      var r = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : X(r, e) ? "symbol" : r;
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
    function B(e) {
      return !e.constructor || !e.constructor.name ? w : e.constructor.name;
    }
    return C.checkPropTypes = y, C.resetWarningCache = y.resetWarningCache, C.PropTypes = C, C;
  }, fe;
}
var le, Pe;
function De() {
  if (Pe) return le;
  Pe = 1;
  var t = /* @__PURE__ */ de();
  function x() {
  }
  function h() {
  }
  return h.resetWarningCache = x, le = function() {
    function l(m, d, P, R, T, _) {
      if (_ !== t) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    l.isRequired = l;
    function y() {
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
      arrayOf: y,
      element: l,
      elementType: l,
      instanceOf: y,
      node: l,
      objectOf: y,
      oneOf: y,
      oneOfType: y,
      shape: y,
      exact: y,
      checkPropTypes: h,
      resetWarningCache: x
    };
    return s.PropTypes = s, s;
  }, le;
}
var Se;
function We() {
  if (Se) return oe.exports;
  if (Se = 1, process.env.NODE_ENV !== "production") {
    var t = we(), x = !0;
    oe.exports = /* @__PURE__ */ qe()(t.isElement, x);
  } else
    oe.exports = /* @__PURE__ */ De()();
  return oe.exports;
}
var Fe = /* @__PURE__ */ We();
const N = /* @__PURE__ */ Ae(Fe), Le = ({
  heading: t,
  text: x,
  actionButton: h,
  onClick: l,
  className: y,
  children: s,
  media: m,
  mediaPosition: d = "left",
  mediaExdent: P = !1,
  mediaFirst: R = !1,
  mediaInset: T = !1,
  ..._
}) => {
  const C = [
    "usa-card",
    m && "usa-card--media",
    P && "usa-card--exdent",
    R && "usa-card--header-first",
    T && "usa-card--inset",
    y
  ].filter(Boolean).join(" "), I = h && l ? xe.cloneElement(h, { onClick: l }) : h, S = () => m ? /* @__PURE__ */ F.jsx("div", { className: `usa-card__media ${P ? "usa-card__media--exdent" : ""}`, children: /* @__PURE__ */ F.jsx("div", { className: "usa-card__img", children: typeof m == "string" ? /* @__PURE__ */ F.jsx("img", { src: m, alt: "" }) : m }) }) : null;
  return /* @__PURE__ */ F.jsx("div", { className: C, ..._, children: /* @__PURE__ */ F.jsxs("div", { className: "usa-card__container", children: [
    m && S(),
    t && /* @__PURE__ */ F.jsx("div", { className: "usa-card__header", children: /* @__PURE__ */ F.jsx("h4", { className: "usa-card__heading", children: t }) }),
    /* @__PURE__ */ F.jsxs("div", { className: "usa-card__body", children: [
      x && /* @__PURE__ */ F.jsx("p", { children: x }),
      s
    ] }),
    h && /* @__PURE__ */ F.jsx("div", { className: "usa-card__footer", children: I })
  ] }) });
};
Le.propTypes = {
  heading: N.string,
  text: N.string,
  actionButton: N.node,
  onClick: N.func,
  className: N.string,
  children: N.node,
  media: N.oneOfType([N.string, N.node]),
  mediaPosition: N.oneOf(["left", "right"]),
  mediaExdent: N.bool,
  mediaFirst: N.bool,
  mediaInset: N.bool
};
export {
  Le as Card
};
//# sourceMappingURL=index.js.map
