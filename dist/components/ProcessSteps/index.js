import Ae from "react";
function ke(t) {
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
function Ie() {
  if (ve) return ee;
  ve = 1;
  var t = Symbol.for("react.transitional.element"), O = Symbol.for("react.fragment");
  function E(l, d, u) {
    var h = null;
    if (u !== void 0 && (h = "" + u), d.key !== void 0 && (h = "" + d.key), "key" in d) {
      u = {};
      for (var v in d)
        v !== "key" && (u[v] = d[v]);
    } else u = d;
    return d = u.ref, {
      $$typeof: t,
      type: l,
      key: h,
      ref: d !== void 0 ? d : null,
      props: u
    };
  }
  return ee.Fragment = O, ee.jsx = E, ee.jsxs = E, ee;
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
function $e() {
  return ye || (ye = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case P:
          return "Fragment";
        case M:
          return "Profiler";
        case k:
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
          case N:
            return "Portal";
          case A:
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
    function O(e) {
      return "" + e;
    }
    function E(e) {
      try {
        O(e);
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
        ), O(e);
      }
    }
    function l(e) {
      if (e === P) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === J)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function d() {
      var e = U.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function h(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function v(e, r) {
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
    function x() {
      var e = t(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function S(e, r, a, i, s, f, p, y) {
      return a = f.ref, e = {
        $$typeof: C,
        type: e,
        key: r,
        props: f,
        _owner: s
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: x
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
        value: y
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function T(e, r, a, i, s, f, p, y) {
      var c = r.children;
      if (c !== void 0)
        if (i)
          if (K(c)) {
            for (i = 0; i < c.length; i++)
              R(c[i]);
            Object.freeze && Object.freeze(c);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(c);
      if (B.call(r, "key")) {
        c = t(e);
        var m = Object.keys(r).filter(function($) {
          return $ !== "key";
        });
        i = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", X[c + i] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          c,
          m,
          c
        ), X[c + i] = !0);
      }
      if (c = null, a !== void 0 && (E(a), c = "" + a), h(r) && (E(r.key), c = "" + r.key), "key" in r) {
        a = {};
        for (var b in r)
          b !== "key" && (a[b] = r[b]);
      } else a = r;
      return c && v(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), S(
        e,
        c,
        f,
        s,
        d(),
        a,
        p,
        y
      );
    }
    function R(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var w = Ae, C = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), A = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), U = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, K = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var G, Y = {}, W = w["react-stack-bottom-frame"].bind(
      w,
      u
    )(), V = D(l(u)), X = {};
    re.Fragment = P, re.jsx = function(e, r, a, i, s) {
      var f = 1e4 > U.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        a,
        !1,
        i,
        s,
        f ? Error("react-stack-top-frame") : W,
        f ? D(l(e)) : V
      );
    }, re.jsxs = function(e, r, a, i, s) {
      var f = 1e4 > U.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        a,
        !0,
        i,
        s,
        f ? Error("react-stack-top-frame") : W,
        f ? D(l(e)) : V
      );
    };
  }()), re;
}
var me;
function Ne() {
  return me || (me = 1, process.env.NODE_ENV === "production" ? ne.exports = Ie() : ne.exports = $e()), ne.exports;
}
var I = Ne(), oe = { exports: {} }, ae = { exports: {} }, g = {};
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
  if (be) return g;
  be = 1;
  var t = typeof Symbol == "function" && Symbol.for, O = t ? Symbol.for("react.element") : 60103, E = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, d = t ? Symbol.for("react.strict_mode") : 60108, u = t ? Symbol.for("react.profiler") : 60114, h = t ? Symbol.for("react.provider") : 60109, v = t ? Symbol.for("react.context") : 60110, x = t ? Symbol.for("react.async_mode") : 60111, S = t ? Symbol.for("react.concurrent_mode") : 60111, T = t ? Symbol.for("react.forward_ref") : 60112, R = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, N = t ? Symbol.for("react.lazy") : 60116, P = t ? Symbol.for("react.block") : 60121, k = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, z = t ? Symbol.for("react.scope") : 60119;
  function A(o) {
    if (typeof o == "object" && o !== null) {
      var F = o.$$typeof;
      switch (F) {
        case O:
          switch (o = o.type, o) {
            case x:
            case S:
            case l:
            case u:
            case d:
            case R:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case v:
                case T:
                case N:
                case C:
                case h:
                  return o;
                default:
                  return F;
              }
          }
        case E:
          return F;
      }
    }
  }
  function j(o) {
    return A(o) === S;
  }
  return g.AsyncMode = x, g.ConcurrentMode = S, g.ContextConsumer = v, g.ContextProvider = h, g.Element = O, g.ForwardRef = T, g.Fragment = l, g.Lazy = N, g.Memo = C, g.Portal = E, g.Profiler = u, g.StrictMode = d, g.Suspense = R, g.isAsyncMode = function(o) {
    return j(o) || A(o) === x;
  }, g.isConcurrentMode = j, g.isContextConsumer = function(o) {
    return A(o) === v;
  }, g.isContextProvider = function(o) {
    return A(o) === h;
  }, g.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === O;
  }, g.isForwardRef = function(o) {
    return A(o) === T;
  }, g.isFragment = function(o) {
    return A(o) === l;
  }, g.isLazy = function(o) {
    return A(o) === N;
  }, g.isMemo = function(o) {
    return A(o) === C;
  }, g.isPortal = function(o) {
    return A(o) === E;
  }, g.isProfiler = function(o) {
    return A(o) === u;
  }, g.isStrictMode = function(o) {
    return A(o) === d;
  }, g.isSuspense = function(o) {
    return A(o) === R;
  }, g.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === l || o === S || o === u || o === d || o === R || o === w || typeof o == "object" && o !== null && (o.$$typeof === N || o.$$typeof === C || o.$$typeof === h || o.$$typeof === v || o.$$typeof === T || o.$$typeof === k || o.$$typeof === M || o.$$typeof === z || o.$$typeof === P);
  }, g.typeOf = A, g;
}
var _ = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function qe() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, O = t ? Symbol.for("react.element") : 60103, E = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, d = t ? Symbol.for("react.strict_mode") : 60108, u = t ? Symbol.for("react.profiler") : 60114, h = t ? Symbol.for("react.provider") : 60109, v = t ? Symbol.for("react.context") : 60110, x = t ? Symbol.for("react.async_mode") : 60111, S = t ? Symbol.for("react.concurrent_mode") : 60111, T = t ? Symbol.for("react.forward_ref") : 60112, R = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, N = t ? Symbol.for("react.lazy") : 60116, P = t ? Symbol.for("react.block") : 60121, k = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, z = t ? Symbol.for("react.scope") : 60119;
    function A(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === l || n === S || n === u || n === d || n === R || n === w || typeof n == "object" && n !== null && (n.$$typeof === N || n.$$typeof === C || n.$$typeof === h || n.$$typeof === v || n.$$typeof === T || n.$$typeof === k || n.$$typeof === M || n.$$typeof === z || n.$$typeof === P);
    }
    function j(n) {
      if (typeof n == "object" && n !== null) {
        var L = n.$$typeof;
        switch (L) {
          case O:
            var te = n.type;
            switch (te) {
              case x:
              case S:
              case l:
              case u:
              case d:
              case R:
                return te;
              default:
                var pe = te && te.$$typeof;
                switch (pe) {
                  case v:
                  case T:
                  case N:
                  case C:
                  case h:
                    return pe;
                  default:
                    return L;
                }
            }
          case E:
            return L;
        }
      }
    }
    var o = x, F = S, H = v, J = h, Z = O, Q = T, U = l, B = N, K = C, D = E, G = u, Y = d, W = R, V = !1;
    function X(n) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(n) || j(n) === x;
    }
    function e(n) {
      return j(n) === S;
    }
    function r(n) {
      return j(n) === v;
    }
    function a(n) {
      return j(n) === h;
    }
    function i(n) {
      return typeof n == "object" && n !== null && n.$$typeof === O;
    }
    function s(n) {
      return j(n) === T;
    }
    function f(n) {
      return j(n) === l;
    }
    function p(n) {
      return j(n) === N;
    }
    function y(n) {
      return j(n) === C;
    }
    function c(n) {
      return j(n) === E;
    }
    function m(n) {
      return j(n) === u;
    }
    function b(n) {
      return j(n) === d;
    }
    function $(n) {
      return j(n) === R;
    }
    _.AsyncMode = o, _.ConcurrentMode = F, _.ContextConsumer = H, _.ContextProvider = J, _.Element = Z, _.ForwardRef = Q, _.Fragment = U, _.Lazy = B, _.Memo = K, _.Portal = D, _.Profiler = G, _.StrictMode = Y, _.Suspense = W, _.isAsyncMode = X, _.isConcurrentMode = e, _.isContextConsumer = r, _.isContextProvider = a, _.isElement = i, _.isForwardRef = s, _.isFragment = f, _.isLazy = p, _.isMemo = y, _.isPortal = c, _.isProfiler = m, _.isStrictMode = b, _.isSuspense = $, _.isValidElementType = A, _.typeOf = j;
  }()), _;
}
var Te;
function xe() {
  return Te || (Te = 1, process.env.NODE_ENV === "production" ? ae.exports = Me() : ae.exports = qe()), ae.exports;
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
  var t = Object.getOwnPropertySymbols, O = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
  function l(u) {
    if (u == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(u);
  }
  function d() {
    try {
      if (!Object.assign)
        return !1;
      var u = new String("abc");
      if (u[5] = "de", Object.getOwnPropertyNames(u)[0] === "5")
        return !1;
      for (var h = {}, v = 0; v < 10; v++)
        h["_" + String.fromCharCode(v)] = v;
      var x = Object.getOwnPropertyNames(h).map(function(T) {
        return h[T];
      });
      if (x.join("") !== "0123456789")
        return !1;
      var S = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(T) {
        S[T] = T;
      }), Object.keys(Object.assign({}, S)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = d() ? Object.assign : function(u, h) {
    for (var v, x = l(u), S, T = 1; T < arguments.length; T++) {
      v = Object(arguments[T]);
      for (var R in v)
        O.call(v, R) && (x[R] = v[R]);
      if (t) {
        S = t(v);
        for (var w = 0; w < S.length; w++)
          E.call(v, S[w]) && (x[S[w]] = v[S[w]]);
      }
    }
    return x;
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
function De() {
  if (_e) return ue;
  _e = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var O = /* @__PURE__ */ de(), E = {}, l = /* @__PURE__ */ we();
    t = function(u) {
      var h = "Warning: " + u;
      typeof console < "u" && console.error(h);
      try {
        throw new Error(h);
      } catch {
      }
    };
  }
  function d(u, h, v, x, S) {
    if (process.env.NODE_ENV !== "production") {
      for (var T in u)
        if (l(u, T)) {
          var R;
          try {
            if (typeof u[T] != "function") {
              var w = Error(
                (x || "React class") + ": " + v + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            R = u[T](h, T, x, v, null, O);
          } catch (N) {
            R = N;
          }
          if (R && !(R instanceof Error) && t(
            (x || "React class") + ": type specification of " + v + " `" + T + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof R + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), R instanceof Error && !(R.message in E)) {
            E[R.message] = !0;
            var C = S ? S() : "";
            t(
              "Failed " + v + " type: " + R.message + (C ?? "")
            );
          }
        }
    }
  }
  return d.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (E = {});
  }, ue = d, ue;
}
var fe, Se;
function We() {
  if (Se) return fe;
  Se = 1;
  var t = xe(), O = Ye(), E = /* @__PURE__ */ de(), l = /* @__PURE__ */ we(), d = /* @__PURE__ */ De(), u = function() {
  };
  process.env.NODE_ENV !== "production" && (u = function(v) {
    var x = "Warning: " + v;
    typeof console < "u" && console.error(x);
    try {
      throw new Error(x);
    } catch {
    }
  });
  function h() {
    return null;
  }
  return fe = function(v, x) {
    var S = typeof Symbol == "function" && Symbol.iterator, T = "@@iterator";
    function R(e) {
      var r = e && (S && e[S] || e[T]);
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
      arrayOf: A,
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
    function N(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    }
    function P(e, r) {
      this.message = e, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    P.prototype = Error.prototype;
    function k(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, a = 0;
      function i(f, p, y, c, m, b, $) {
        if (c = c || w, b = b || y, $ !== E) {
          if (x) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var L = c + ":" + y;
            !r[L] && // Avoid spamming the console because they are often not actionable except for lib authors
            a < 3 && (u(
              "You are manually calling a React.PropTypes validation function for the `" + b + "` prop on `" + c + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[L] = !0, a++);
          }
        }
        return p[y] == null ? f ? p[y] === null ? new P("The " + m + " `" + b + "` is marked as required " + ("in `" + c + "`, but its value is `null`.")) : new P("The " + m + " `" + b + "` is marked as required in " + ("`" + c + "`, but its value is `undefined`.")) : null : e(p, y, c, m, b);
      }
      var s = i.bind(null, !1);
      return s.isRequired = i.bind(null, !0), s;
    }
    function M(e) {
      function r(a, i, s, f, p, y) {
        var c = a[i], m = Y(c);
        if (m !== e) {
          var b = W(c);
          return new P(
            "Invalid " + f + " `" + p + "` of type " + ("`" + b + "` supplied to `" + s + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return k(r);
    }
    function z() {
      return k(h);
    }
    function A(e) {
      function r(a, i, s, f, p) {
        if (typeof e != "function")
          return new P("Property `" + p + "` of component `" + s + "` has invalid PropType notation inside arrayOf.");
        var y = a[i];
        if (!Array.isArray(y)) {
          var c = Y(y);
          return new P("Invalid " + f + " `" + p + "` of type " + ("`" + c + "` supplied to `" + s + "`, expected an array."));
        }
        for (var m = 0; m < y.length; m++) {
          var b = e(y, m, s, f, p + "[" + m + "]", E);
          if (b instanceof Error)
            return b;
        }
        return null;
      }
      return k(r);
    }
    function j() {
      function e(r, a, i, s, f) {
        var p = r[a];
        if (!v(p)) {
          var y = Y(p);
          return new P("Invalid " + s + " `" + f + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(e);
    }
    function o() {
      function e(r, a, i, s, f) {
        var p = r[a];
        if (!t.isValidElementType(p)) {
          var y = Y(p);
          return new P("Invalid " + s + " `" + f + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(e);
    }
    function F(e) {
      function r(a, i, s, f, p) {
        if (!(a[i] instanceof e)) {
          var y = e.name || w, c = X(a[i]);
          return new P("Invalid " + f + " `" + p + "` of type " + ("`" + c + "` supplied to `" + s + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return k(r);
    }
    function H(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? u(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : u("Invalid argument supplied to oneOf, expected an array.")), h;
      function r(a, i, s, f, p) {
        for (var y = a[i], c = 0; c < e.length; c++)
          if (N(y, e[c]))
            return null;
        var m = JSON.stringify(e, function($, n) {
          var L = W(n);
          return L === "symbol" ? String(n) : n;
        });
        return new P("Invalid " + f + " `" + p + "` of value `" + String(y) + "` " + ("supplied to `" + s + "`, expected one of " + m + "."));
      }
      return k(r);
    }
    function J(e) {
      function r(a, i, s, f, p) {
        if (typeof e != "function")
          return new P("Property `" + p + "` of component `" + s + "` has invalid PropType notation inside objectOf.");
        var y = a[i], c = Y(y);
        if (c !== "object")
          return new P("Invalid " + f + " `" + p + "` of type " + ("`" + c + "` supplied to `" + s + "`, expected an object."));
        for (var m in y)
          if (l(y, m)) {
            var b = e(y, m, s, f, p + "." + m, E);
            if (b instanceof Error)
              return b;
          }
        return null;
      }
      return k(r);
    }
    function Z(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && u("Invalid argument supplied to oneOfType, expected an instance of array."), h;
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        if (typeof a != "function")
          return u(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + V(a) + " at index " + r + "."
          ), h;
      }
      function i(s, f, p, y, c) {
        for (var m = [], b = 0; b < e.length; b++) {
          var $ = e[b], n = $(s, f, p, y, c, E);
          if (n == null)
            return null;
          n.data && l(n.data, "expectedType") && m.push(n.data.expectedType);
        }
        var L = m.length > 0 ? ", expected one of type [" + m.join(", ") + "]" : "";
        return new P("Invalid " + y + " `" + c + "` supplied to " + ("`" + p + "`" + L + "."));
      }
      return k(i);
    }
    function Q() {
      function e(r, a, i, s, f) {
        return D(r[a]) ? null : new P("Invalid " + s + " `" + f + "` supplied to " + ("`" + i + "`, expected a ReactNode."));
      }
      return k(e);
    }
    function U(e, r, a, i, s) {
      return new P(
        (e || "React class") + ": " + r + " type `" + a + "." + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + s + "`."
      );
    }
    function B(e) {
      function r(a, i, s, f, p) {
        var y = a[i], c = Y(y);
        if (c !== "object")
          return new P("Invalid " + f + " `" + p + "` of type `" + c + "` " + ("supplied to `" + s + "`, expected `object`."));
        for (var m in e) {
          var b = e[m];
          if (typeof b != "function")
            return U(s, f, p, m, W(b));
          var $ = b(y, m, s, f, p + "." + m, E);
          if ($)
            return $;
        }
        return null;
      }
      return k(r);
    }
    function K(e) {
      function r(a, i, s, f, p) {
        var y = a[i], c = Y(y);
        if (c !== "object")
          return new P("Invalid " + f + " `" + p + "` of type `" + c + "` " + ("supplied to `" + s + "`, expected `object`."));
        var m = O({}, a[i], e);
        for (var b in m) {
          var $ = e[b];
          if (l(e, b) && typeof $ != "function")
            return U(s, f, p, b, W($));
          if (!$)
            return new P(
              "Invalid " + f + " `" + p + "` key `" + b + "` supplied to `" + s + "`.\nBad object: " + JSON.stringify(a[i], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var n = $(y, b, s, f, p + "." + b, E);
          if (n)
            return n;
        }
        return null;
      }
      return k(r);
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
          if (e === null || v(e))
            return !0;
          var r = R(e);
          if (r) {
            var a = r.call(e), i;
            if (r !== e.entries) {
              for (; !(i = a.next()).done; )
                if (!D(i.value))
                  return !1;
            } else
              for (; !(i = a.next()).done; ) {
                var s = i.value;
                if (s && !D(s[1]))
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
    function W(e) {
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
    function X(e) {
      return !e.constructor || !e.constructor.name ? w : e.constructor.name;
    }
    return C.checkPropTypes = d, C.resetWarningCache = d.resetWarningCache, C.PropTypes = C, C;
  }, fe;
}
var le, Oe;
function Le() {
  if (Oe) return le;
  Oe = 1;
  var t = /* @__PURE__ */ de();
  function O() {
  }
  function E() {
  }
  return E.resetWarningCache = O, le = function() {
    function l(h, v, x, S, T, R) {
      if (R !== t) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    l.isRequired = l;
    function d() {
      return l;
    }
    var u = {
      array: l,
      bigint: l,
      bool: l,
      func: l,
      number: l,
      object: l,
      string: l,
      symbol: l,
      any: l,
      arrayOf: d,
      element: l,
      elementType: l,
      instanceOf: d,
      node: l,
      objectOf: d,
      oneOf: d,
      oneOfType: d,
      shape: d,
      exact: d,
      checkPropTypes: E,
      resetWarningCache: O
    };
    return u.PropTypes = u, u;
  }, le;
}
var Pe;
function Fe() {
  if (Pe) return oe.exports;
  if (Pe = 1, process.env.NODE_ENV !== "production") {
    var t = xe(), O = !0;
    oe.exports = /* @__PURE__ */ We()(t.isElement, O);
  } else
    oe.exports = /* @__PURE__ */ Le()();
  return oe.exports;
}
var Ue = /* @__PURE__ */ Fe();
const q = /* @__PURE__ */ ke(Ue), Ce = ({ number: t }) => /* @__PURE__ */ I.jsxs("div", { className: "stepNumberWrapper", children: [
  /* @__PURE__ */ I.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      className: "stepNumberSvg",
      children: /* @__PURE__ */ I.jsx(
        "circle",
        {
          cx: "24",
          cy: "24",
          r: "22"
        }
      )
    }
  ),
  /* @__PURE__ */ I.jsx("span", { className: "stepNumberText", children: t })
] });
Ce.propTypes = {
  number: q.number.isRequired
};
const je = ({ step: t, stepNumber: O, isLast: E }) => /* @__PURE__ */ I.jsxs("div", { className: "stepItem", children: [
  /* @__PURE__ */ I.jsxs("div", { className: "stepNumberContainer", children: [
    /* @__PURE__ */ I.jsx(Ce, { number: O }),
    !E && /* @__PURE__ */ I.jsx("div", { className: "verticalBar" })
  ] }),
  /* @__PURE__ */ I.jsxs("div", { className: "stepContent", children: [
    /* @__PURE__ */ I.jsx("h3", { className: "stepHeading", children: t.heading }),
    /* @__PURE__ */ I.jsx("p", { className: "stepDescription", children: t.description }),
    t.cta && /* @__PURE__ */ I.jsx("div", { className: "stepCta", children: t.cta })
  ] })
] });
je.propTypes = {
  step: q.shape({
    heading: q.string.isRequired,
    description: q.string.isRequired,
    cta: q.node
  }).isRequired,
  stepNumber: q.number.isRequired,
  isLast: q.bool.isRequired
};
const ze = ({ title: t, mainDescription: O, steps: E }) => /* @__PURE__ */ I.jsxs("div", { className: "processSteps", children: [
  /* @__PURE__ */ I.jsxs("div", { className: "header", children: [
    /* @__PURE__ */ I.jsx("h2", { className: "title", children: t }),
    /* @__PURE__ */ I.jsx("p", { className: "mainDescription", children: O })
  ] }),
  /* @__PURE__ */ I.jsx("div", { className: "stepsContainer", children: E.map((l, d) => /* @__PURE__ */ I.jsx(
    je,
    {
      step: l,
      stepNumber: d + 1,
      isLast: d === E.length - 1
    },
    d
  )) })
] });
ze.propTypes = {
  title: q.string.isRequired,
  mainDescription: q.string.isRequired,
  steps: q.arrayOf(
    q.shape({
      heading: q.string.isRequired,
      description: q.string.isRequired,
      cta: q.node
    })
  ).isRequired
};
export {
  ze as ProcessSteps
};
//# sourceMappingURL=index.js.map
