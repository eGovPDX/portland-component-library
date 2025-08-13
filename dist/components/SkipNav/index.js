import Ce from "react";
function Ae(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var re = { exports: {} }, Q = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pe;
function je() {
  if (pe) return Q;
  pe = 1;
  var t = Symbol.for("react.transitional.element"), P = Symbol.for("react.fragment");
  function T(l, y, u) {
    var h = null;
    if (u !== void 0 && (h = "" + u), y.key !== void 0 && (h = "" + y.key), "key" in y) {
      u = {};
      for (var p in y)
        p !== "key" && (u[p] = y[p]);
    } else u = y;
    return y = u.ref, {
      $$typeof: t,
      type: l,
      key: h,
      ref: y !== void 0 ? y : null,
      props: u
    };
  }
  return Q.Fragment = P, Q.jsx = T, Q.jsxs = T, Q;
}
var K = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ve;
function ke() {
  return ve || (ve = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === H ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case O:
          return "Fragment";
        case M:
          return "Profiler";
        case k:
          return "StrictMode";
        case o:
          return "Suspense";
        case W:
          return "SuspenseList";
        case X:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case $:
            return "Portal";
          case j:
            return (e.displayName || "Context") + ".Provider";
          case L:
            return (e._context.displayName || "Context") + ".Consumer";
          case A:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case G:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case z:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function P(e) {
      return "" + e;
    }
    function T(e) {
      try {
        P(e);
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
        ), P(e);
      }
    }
    function l(e) {
      if (e === O) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === z)
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
    function h(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, r) {
      function a() {
        J || (J = !0, console.error(
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
    function S(e, r, a, i, s, f, d, v) {
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
        value: d
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: v
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function E(e, r, a, i, s, f, d, v) {
      var c = r.children;
      if (c !== void 0)
        if (i)
          if (Z(c)) {
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
        var m = Object.keys(r).filter(function(I) {
          return I !== "key";
        });
        i = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", B[c + i] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), B[c + i] = !0);
      }
      if (c = null, a !== void 0 && (T(a), c = "" + a), h(r) && (T(r.key), c = "" + r.key), "key" in r) {
        a = {};
        for (var b in r)
          b !== "key" && (a[b] = r[b]);
      } else a = r;
      return c && p(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), S(
        e,
        c,
        f,
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
    var w = Ce, C = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), j = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), H = Symbol.for("react.client.reference"), F = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, Z = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var J, Y = {}, q = w["react-stack-bottom-frame"].bind(
      w,
      u
    )(), U = N(l(u)), B = {};
    K.Fragment = O, K.jsx = function(e, r, a, i, s) {
      var f = 1e4 > F.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        a,
        !1,
        i,
        s,
        f ? Error("react-stack-top-frame") : q,
        f ? N(l(e)) : U
      );
    }, K.jsxs = function(e, r, a, i, s) {
      var f = 1e4 > F.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        a,
        !0,
        i,
        s,
        f ? Error("react-stack-top-frame") : q,
        f ? N(l(e)) : U
      );
    };
  }()), K;
}
var ye;
function Ie() {
  return ye || (ye = 1, process.env.NODE_ENV === "production" ? re.exports = je() : re.exports = ke()), re.exports;
}
var $e = Ie(), te = { exports: {} }, ne = { exports: {} }, _ = {};
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
  var t = typeof Symbol == "function" && Symbol.for, P = t ? Symbol.for("react.element") : 60103, T = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, y = t ? Symbol.for("react.strict_mode") : 60108, u = t ? Symbol.for("react.profiler") : 60114, h = t ? Symbol.for("react.provider") : 60109, p = t ? Symbol.for("react.context") : 60110, x = t ? Symbol.for("react.async_mode") : 60111, S = t ? Symbol.for("react.concurrent_mode") : 60111, E = t ? Symbol.for("react.forward_ref") : 60112, R = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, O = t ? Symbol.for("react.block") : 60121, k = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, L = t ? Symbol.for("react.scope") : 60119;
  function j(o) {
    if (typeof o == "object" && o !== null) {
      var W = o.$$typeof;
      switch (W) {
        case P:
          switch (o = o.type, o) {
            case x:
            case S:
            case l:
            case u:
            case y:
            case R:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case p:
                case E:
                case $:
                case C:
                case h:
                  return o;
                default:
                  return W;
              }
          }
        case T:
          return W;
      }
    }
  }
  function A(o) {
    return j(o) === S;
  }
  return _.AsyncMode = x, _.ConcurrentMode = S, _.ContextConsumer = p, _.ContextProvider = h, _.Element = P, _.ForwardRef = E, _.Fragment = l, _.Lazy = $, _.Memo = C, _.Portal = T, _.Profiler = u, _.StrictMode = y, _.Suspense = R, _.isAsyncMode = function(o) {
    return A(o) || j(o) === x;
  }, _.isConcurrentMode = A, _.isContextConsumer = function(o) {
    return j(o) === p;
  }, _.isContextProvider = function(o) {
    return j(o) === h;
  }, _.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === P;
  }, _.isForwardRef = function(o) {
    return j(o) === E;
  }, _.isFragment = function(o) {
    return j(o) === l;
  }, _.isLazy = function(o) {
    return j(o) === $;
  }, _.isMemo = function(o) {
    return j(o) === C;
  }, _.isPortal = function(o) {
    return j(o) === T;
  }, _.isProfiler = function(o) {
    return j(o) === u;
  }, _.isStrictMode = function(o) {
    return j(o) === y;
  }, _.isSuspense = function(o) {
    return j(o) === R;
  }, _.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === l || o === S || o === u || o === y || o === R || o === w || typeof o == "object" && o !== null && (o.$$typeof === $ || o.$$typeof === C || o.$$typeof === h || o.$$typeof === p || o.$$typeof === E || o.$$typeof === k || o.$$typeof === M || o.$$typeof === L || o.$$typeof === O);
  }, _.typeOf = j, _;
}
var g = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function Ye() {
  return be || (be = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, P = t ? Symbol.for("react.element") : 60103, T = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, y = t ? Symbol.for("react.strict_mode") : 60108, u = t ? Symbol.for("react.profiler") : 60114, h = t ? Symbol.for("react.provider") : 60109, p = t ? Symbol.for("react.context") : 60110, x = t ? Symbol.for("react.async_mode") : 60111, S = t ? Symbol.for("react.concurrent_mode") : 60111, E = t ? Symbol.for("react.forward_ref") : 60112, R = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, O = t ? Symbol.for("react.block") : 60121, k = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, L = t ? Symbol.for("react.scope") : 60119;
    function j(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === l || n === S || n === u || n === y || n === R || n === w || typeof n == "object" && n !== null && (n.$$typeof === $ || n.$$typeof === C || n.$$typeof === h || n.$$typeof === p || n.$$typeof === E || n.$$typeof === k || n.$$typeof === M || n.$$typeof === L || n.$$typeof === O);
    }
    function A(n) {
      if (typeof n == "object" && n !== null) {
        var D = n.$$typeof;
        switch (D) {
          case P:
            var ee = n.type;
            switch (ee) {
              case x:
              case S:
              case l:
              case u:
              case y:
              case R:
                return ee;
              default:
                var de = ee && ee.$$typeof;
                switch (de) {
                  case p:
                  case E:
                  case $:
                  case C:
                  case h:
                    return de;
                  default:
                    return D;
                }
            }
          case T:
            return D;
        }
      }
    }
    var o = x, W = S, G = p, z = h, X = P, H = E, F = l, V = $, Z = C, N = T, J = u, Y = y, q = R, U = !1;
    function B(n) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(n) || A(n) === x;
    }
    function e(n) {
      return A(n) === S;
    }
    function r(n) {
      return A(n) === p;
    }
    function a(n) {
      return A(n) === h;
    }
    function i(n) {
      return typeof n == "object" && n !== null && n.$$typeof === P;
    }
    function s(n) {
      return A(n) === E;
    }
    function f(n) {
      return A(n) === l;
    }
    function d(n) {
      return A(n) === $;
    }
    function v(n) {
      return A(n) === C;
    }
    function c(n) {
      return A(n) === T;
    }
    function m(n) {
      return A(n) === u;
    }
    function b(n) {
      return A(n) === y;
    }
    function I(n) {
      return A(n) === R;
    }
    g.AsyncMode = o, g.ConcurrentMode = W, g.ContextConsumer = G, g.ContextProvider = z, g.Element = X, g.ForwardRef = H, g.Fragment = F, g.Lazy = V, g.Memo = Z, g.Portal = N, g.Profiler = J, g.StrictMode = Y, g.Suspense = q, g.isAsyncMode = B, g.isConcurrentMode = e, g.isContextConsumer = r, g.isContextProvider = a, g.isElement = i, g.isForwardRef = s, g.isFragment = f, g.isLazy = d, g.isMemo = v, g.isPortal = c, g.isProfiler = m, g.isStrictMode = b, g.isSuspense = I, g.isValidElementType = j, g.typeOf = A;
  }()), g;
}
var Ee;
function Pe() {
  return Ee || (Ee = 1, process.env.NODE_ENV === "production" ? ne.exports = Me() : ne.exports = Ye()), ne.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var oe, Te;
function Ne() {
  if (Te) return oe;
  Te = 1;
  var t = Object.getOwnPropertySymbols, P = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable;
  function l(u) {
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
      for (var h = {}, p = 0; p < 10; p++)
        h["_" + String.fromCharCode(p)] = p;
      var x = Object.getOwnPropertyNames(h).map(function(E) {
        return h[E];
      });
      if (x.join("") !== "0123456789")
        return !1;
      var S = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(E) {
        S[E] = E;
      }), Object.keys(Object.assign({}, S)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return oe = y() ? Object.assign : function(u, h) {
    for (var p, x = l(u), S, E = 1; E < arguments.length; E++) {
      p = Object(arguments[E]);
      for (var R in p)
        P.call(p, R) && (x[R] = p[R]);
      if (t) {
        S = t(p);
        for (var w = 0; w < S.length; w++)
          T.call(p, S[w]) && (x[S[w]] = p[S[w]]);
      }
    }
    return x;
  }, oe;
}
var ae, he;
function le() {
  if (he) return ae;
  he = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ae = t, ae;
}
var ie, Re;
function xe() {
  return Re || (Re = 1, ie = Function.call.bind(Object.prototype.hasOwnProperty)), ie;
}
var se, _e;
function qe() {
  if (_e) return se;
  _e = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var P = /* @__PURE__ */ le(), T = {}, l = /* @__PURE__ */ xe();
    t = function(u) {
      var h = "Warning: " + u;
      typeof console < "u" && console.error(h);
      try {
        throw new Error(h);
      } catch {
      }
    };
  }
  function y(u, h, p, x, S) {
    if (process.env.NODE_ENV !== "production") {
      for (var E in u)
        if (l(u, E)) {
          var R;
          try {
            if (typeof u[E] != "function") {
              var w = Error(
                (x || "React class") + ": " + p + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            R = u[E](h, E, x, p, null, P);
          } catch ($) {
            R = $;
          }
          if (R && !(R instanceof Error) && t(
            (x || "React class") + ": type specification of " + p + " `" + E + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof R + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), R instanceof Error && !(R.message in T)) {
            T[R.message] = !0;
            var C = S ? S() : "";
            t(
              "Failed " + p + " type: " + R.message + (C ?? "")
            );
          }
        }
    }
  }
  return y.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (T = {});
  }, se = y, se;
}
var ce, ge;
function De() {
  if (ge) return ce;
  ge = 1;
  var t = Pe(), P = Ne(), T = /* @__PURE__ */ le(), l = /* @__PURE__ */ xe(), y = /* @__PURE__ */ qe(), u = function() {
  };
  process.env.NODE_ENV !== "production" && (u = function(p) {
    var x = "Warning: " + p;
    typeof console < "u" && console.error(x);
    try {
      throw new Error(x);
    } catch {
    }
  });
  function h() {
    return null;
  }
  return ce = function(p, x) {
    var S = typeof Symbol == "function" && Symbol.iterator, E = "@@iterator";
    function R(e) {
      var r = e && (S && e[S] || e[E]);
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
      any: L(),
      arrayOf: j,
      element: A(),
      elementType: o(),
      instanceOf: W,
      node: H(),
      objectOf: z,
      oneOf: G,
      oneOfType: X,
      shape: V,
      exact: Z
    };
    function $(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    }
    function O(e, r) {
      this.message = e, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    O.prototype = Error.prototype;
    function k(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, a = 0;
      function i(f, d, v, c, m, b, I) {
        if (c = c || w, b = b || v, I !== T) {
          if (x) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var D = c + ":" + v;
            !r[D] && // Avoid spamming the console because they are often not actionable except for lib authors
            a < 3 && (u(
              "You are manually calling a React.PropTypes validation function for the `" + b + "` prop on `" + c + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[D] = !0, a++);
          }
        }
        return d[v] == null ? f ? d[v] === null ? new O("The " + m + " `" + b + "` is marked as required " + ("in `" + c + "`, but its value is `null`.")) : new O("The " + m + " `" + b + "` is marked as required in " + ("`" + c + "`, but its value is `undefined`.")) : null : e(d, v, c, m, b);
      }
      var s = i.bind(null, !1);
      return s.isRequired = i.bind(null, !0), s;
    }
    function M(e) {
      function r(a, i, s, f, d, v) {
        var c = a[i], m = Y(c);
        if (m !== e) {
          var b = q(c);
          return new O(
            "Invalid " + f + " `" + d + "` of type " + ("`" + b + "` supplied to `" + s + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return k(r);
    }
    function L() {
      return k(h);
    }
    function j(e) {
      function r(a, i, s, f, d) {
        if (typeof e != "function")
          return new O("Property `" + d + "` of component `" + s + "` has invalid PropType notation inside arrayOf.");
        var v = a[i];
        if (!Array.isArray(v)) {
          var c = Y(v);
          return new O("Invalid " + f + " `" + d + "` of type " + ("`" + c + "` supplied to `" + s + "`, expected an array."));
        }
        for (var m = 0; m < v.length; m++) {
          var b = e(v, m, s, f, d + "[" + m + "]", T);
          if (b instanceof Error)
            return b;
        }
        return null;
      }
      return k(r);
    }
    function A() {
      function e(r, a, i, s, f) {
        var d = r[a];
        if (!p(d)) {
          var v = Y(d);
          return new O("Invalid " + s + " `" + f + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(e);
    }
    function o() {
      function e(r, a, i, s, f) {
        var d = r[a];
        if (!t.isValidElementType(d)) {
          var v = Y(d);
          return new O("Invalid " + s + " `" + f + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(e);
    }
    function W(e) {
      function r(a, i, s, f, d) {
        if (!(a[i] instanceof e)) {
          var v = e.name || w, c = B(a[i]);
          return new O("Invalid " + f + " `" + d + "` of type " + ("`" + c + "` supplied to `" + s + "`, expected ") + ("instance of `" + v + "`."));
        }
        return null;
      }
      return k(r);
    }
    function G(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? u(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : u("Invalid argument supplied to oneOf, expected an array.")), h;
      function r(a, i, s, f, d) {
        for (var v = a[i], c = 0; c < e.length; c++)
          if ($(v, e[c]))
            return null;
        var m = JSON.stringify(e, function(I, n) {
          var D = q(n);
          return D === "symbol" ? String(n) : n;
        });
        return new O("Invalid " + f + " `" + d + "` of value `" + String(v) + "` " + ("supplied to `" + s + "`, expected one of " + m + "."));
      }
      return k(r);
    }
    function z(e) {
      function r(a, i, s, f, d) {
        if (typeof e != "function")
          return new O("Property `" + d + "` of component `" + s + "` has invalid PropType notation inside objectOf.");
        var v = a[i], c = Y(v);
        if (c !== "object")
          return new O("Invalid " + f + " `" + d + "` of type " + ("`" + c + "` supplied to `" + s + "`, expected an object."));
        for (var m in v)
          if (l(v, m)) {
            var b = e(v, m, s, f, d + "." + m, T);
            if (b instanceof Error)
              return b;
          }
        return null;
      }
      return k(r);
    }
    function X(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && u("Invalid argument supplied to oneOfType, expected an instance of array."), h;
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        if (typeof a != "function")
          return u(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + U(a) + " at index " + r + "."
          ), h;
      }
      function i(s, f, d, v, c) {
        for (var m = [], b = 0; b < e.length; b++) {
          var I = e[b], n = I(s, f, d, v, c, T);
          if (n == null)
            return null;
          n.data && l(n.data, "expectedType") && m.push(n.data.expectedType);
        }
        var D = m.length > 0 ? ", expected one of type [" + m.join(", ") + "]" : "";
        return new O("Invalid " + v + " `" + c + "` supplied to " + ("`" + d + "`" + D + "."));
      }
      return k(i);
    }
    function H() {
      function e(r, a, i, s, f) {
        return N(r[a]) ? null : new O("Invalid " + s + " `" + f + "` supplied to " + ("`" + i + "`, expected a ReactNode."));
      }
      return k(e);
    }
    function F(e, r, a, i, s) {
      return new O(
        (e || "React class") + ": " + r + " type `" + a + "." + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + s + "`."
      );
    }
    function V(e) {
      function r(a, i, s, f, d) {
        var v = a[i], c = Y(v);
        if (c !== "object")
          return new O("Invalid " + f + " `" + d + "` of type `" + c + "` " + ("supplied to `" + s + "`, expected `object`."));
        for (var m in e) {
          var b = e[m];
          if (typeof b != "function")
            return F(s, f, d, m, q(b));
          var I = b(v, m, s, f, d + "." + m, T);
          if (I)
            return I;
        }
        return null;
      }
      return k(r);
    }
    function Z(e) {
      function r(a, i, s, f, d) {
        var v = a[i], c = Y(v);
        if (c !== "object")
          return new O("Invalid " + f + " `" + d + "` of type `" + c + "` " + ("supplied to `" + s + "`, expected `object`."));
        var m = P({}, a[i], e);
        for (var b in m) {
          var I = e[b];
          if (l(e, b) && typeof I != "function")
            return F(s, f, d, b, q(I));
          if (!I)
            return new O(
              "Invalid " + f + " `" + d + "` key `" + b + "` supplied to `" + s + "`.\nBad object: " + JSON.stringify(a[i], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var n = I(v, b, s, f, d + "." + b, T);
          if (n)
            return n;
        }
        return null;
      }
      return k(r);
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
          if (e === null || p(e))
            return !0;
          var r = R(e);
          if (r) {
            var a = r.call(e), i;
            if (r !== e.entries) {
              for (; !(i = a.next()).done; )
                if (!N(i.value))
                  return !1;
            } else
              for (; !(i = a.next()).done; ) {
                var s = i.value;
                if (s && !N(s[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function J(e, r) {
      return e === "symbol" ? !0 : r ? r["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && r instanceof Symbol : !1;
    }
    function Y(e) {
      var r = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : J(r, e) ? "symbol" : r;
    }
    function q(e) {
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
    function U(e) {
      var r = q(e);
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
  }, ce;
}
var ue, Se;
function We() {
  if (Se) return ue;
  Se = 1;
  var t = /* @__PURE__ */ le();
  function P() {
  }
  function T() {
  }
  return T.resetWarningCache = P, ue = function() {
    function l(h, p, x, S, E, R) {
      if (R !== t) {
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
      checkPropTypes: T,
      resetWarningCache: P
    };
    return u.PropTypes = u, u;
  }, ue;
}
var Oe;
function Fe() {
  if (Oe) return te.exports;
  if (Oe = 1, process.env.NODE_ENV !== "production") {
    var t = Pe(), P = !0;
    te.exports = /* @__PURE__ */ De()(t.isElement, P);
  } else
    te.exports = /* @__PURE__ */ We()();
  return te.exports;
}
var Le = /* @__PURE__ */ Fe();
const fe = /* @__PURE__ */ Ae(Le), we = ({
  text: t = "Skip to main content",
  mainContentId: P = "main-content",
  className: T = ""
}) => {
  const l = ["skipnav", T].filter(Boolean).join(" ");
  return /* @__PURE__ */ $e.jsx(
    "a",
    {
      href: `#${P}`,
      className: l,
      "data-testid": "skip-nav",
      children: t
    }
  );
};
we.propTypes = {
  /** The text to display in the skip nav link */
  text: fe.string,
  /** The ID of the main content element to skip to */
  mainContentId: fe.string,
  /** Custom class name */
  className: fe.string
};
we.defaultProps = {
  text: "Skip to main content",
  mainContentId: "main-content",
  className: ""
};
export {
  we as SkipNav
};
//# sourceMappingURL=index.js.map
