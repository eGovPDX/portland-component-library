import xe from "react";
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
  function h(l, v, s) {
    var E = null;
    if (s !== void 0 && (E = "" + s), v.key !== void 0 && (E = "" + v.key), "key" in v) {
      s = {};
      for (var d in v)
        d !== "key" && (s[d] = v[d]);
    } else s = v;
    return v = s.ref, {
      $$typeof: t,
      type: l,
      key: E,
      ref: v !== void 0 ? v : null,
      props: s
    };
  }
  return Q.Fragment = P, Q.jsx = h, Q.jsxs = h, Q;
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
        case S:
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
    function h(e) {
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
      if (e === S) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === z)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function v() {
      var e = F.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function E(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
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
    function O(e, r, a, i, u, f, p, y) {
      return a = f.ref, e = {
        $$typeof: C,
        type: e,
        key: r,
        props: f,
        _owner: u
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
    function T(e, r, a, i, u, f, p, y) {
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
      if (c = null, a !== void 0 && (h(a), c = "" + a), E(r) && (h(r.key), c = "" + r.key), "key" in r) {
        a = {};
        for (var b in r)
          b !== "key" && (a[b] = r[b]);
      } else a = r;
      return c && d(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), O(
        e,
        c,
        f,
        u,
        v(),
        a,
        p,
        y
      );
    }
    function R(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var w = xe, C = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), j = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), H = Symbol.for("react.client.reference"), F = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, Z = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var J, Y = {}, D = w["react-stack-bottom-frame"].bind(
      w,
      s
    )(), U = q(l(s)), B = {};
    K.Fragment = S, K.jsx = function(e, r, a, i, u) {
      var f = 1e4 > F.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        a,
        !1,
        i,
        u,
        f ? Error("react-stack-top-frame") : D,
        f ? q(l(e)) : U
      );
    }, K.jsxs = function(e, r, a, i, u) {
      var f = 1e4 > F.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        a,
        !0,
        i,
        u,
        f ? Error("react-stack-top-frame") : D,
        f ? q(l(e)) : U
      );
    };
  }()), K;
}
var ye;
function Ie() {
  return ye || (ye = 1, process.env.NODE_ENV === "production" ? re.exports = je() : re.exports = ke()), re.exports;
}
var me = Ie(), te = { exports: {} }, ne = { exports: {} }, _ = {};
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
  if (be) return _;
  be = 1;
  var t = typeof Symbol == "function" && Symbol.for, P = t ? Symbol.for("react.element") : 60103, h = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, v = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, E = t ? Symbol.for("react.provider") : 60109, d = t ? Symbol.for("react.context") : 60110, x = t ? Symbol.for("react.async_mode") : 60111, O = t ? Symbol.for("react.concurrent_mode") : 60111, T = t ? Symbol.for("react.forward_ref") : 60112, R = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, S = t ? Symbol.for("react.block") : 60121, k = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, L = t ? Symbol.for("react.scope") : 60119;
  function j(o) {
    if (typeof o == "object" && o !== null) {
      var W = o.$$typeof;
      switch (W) {
        case P:
          switch (o = o.type, o) {
            case x:
            case O:
            case l:
            case s:
            case v:
            case R:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case d:
                case T:
                case $:
                case C:
                case E:
                  return o;
                default:
                  return W;
              }
          }
        case h:
          return W;
      }
    }
  }
  function A(o) {
    return j(o) === O;
  }
  return _.AsyncMode = x, _.ConcurrentMode = O, _.ContextConsumer = d, _.ContextProvider = E, _.Element = P, _.ForwardRef = T, _.Fragment = l, _.Lazy = $, _.Memo = C, _.Portal = h, _.Profiler = s, _.StrictMode = v, _.Suspense = R, _.isAsyncMode = function(o) {
    return A(o) || j(o) === x;
  }, _.isConcurrentMode = A, _.isContextConsumer = function(o) {
    return j(o) === d;
  }, _.isContextProvider = function(o) {
    return j(o) === E;
  }, _.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === P;
  }, _.isForwardRef = function(o) {
    return j(o) === T;
  }, _.isFragment = function(o) {
    return j(o) === l;
  }, _.isLazy = function(o) {
    return j(o) === $;
  }, _.isMemo = function(o) {
    return j(o) === C;
  }, _.isPortal = function(o) {
    return j(o) === h;
  }, _.isProfiler = function(o) {
    return j(o) === s;
  }, _.isStrictMode = function(o) {
    return j(o) === v;
  }, _.isSuspense = function(o) {
    return j(o) === R;
  }, _.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === l || o === O || o === s || o === v || o === R || o === w || typeof o == "object" && o !== null && (o.$$typeof === $ || o.$$typeof === C || o.$$typeof === E || o.$$typeof === d || o.$$typeof === T || o.$$typeof === k || o.$$typeof === M || o.$$typeof === L || o.$$typeof === S);
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
var Ee;
function Me() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, P = t ? Symbol.for("react.element") : 60103, h = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, v = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, E = t ? Symbol.for("react.provider") : 60109, d = t ? Symbol.for("react.context") : 60110, x = t ? Symbol.for("react.async_mode") : 60111, O = t ? Symbol.for("react.concurrent_mode") : 60111, T = t ? Symbol.for("react.forward_ref") : 60112, R = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, S = t ? Symbol.for("react.block") : 60121, k = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, L = t ? Symbol.for("react.scope") : 60119;
    function j(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === l || n === O || n === s || n === v || n === R || n === w || typeof n == "object" && n !== null && (n.$$typeof === $ || n.$$typeof === C || n.$$typeof === E || n.$$typeof === d || n.$$typeof === T || n.$$typeof === k || n.$$typeof === M || n.$$typeof === L || n.$$typeof === S);
    }
    function A(n) {
      if (typeof n == "object" && n !== null) {
        var N = n.$$typeof;
        switch (N) {
          case P:
            var ee = n.type;
            switch (ee) {
              case x:
              case O:
              case l:
              case s:
              case v:
              case R:
                return ee;
              default:
                var de = ee && ee.$$typeof;
                switch (de) {
                  case d:
                  case T:
                  case $:
                  case C:
                  case E:
                    return de;
                  default:
                    return N;
                }
            }
          case h:
            return N;
        }
      }
    }
    var o = x, W = O, G = d, z = E, X = P, H = T, F = l, V = $, Z = C, q = h, J = s, Y = v, D = R, U = !1;
    function B(n) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(n) || A(n) === x;
    }
    function e(n) {
      return A(n) === O;
    }
    function r(n) {
      return A(n) === d;
    }
    function a(n) {
      return A(n) === E;
    }
    function i(n) {
      return typeof n == "object" && n !== null && n.$$typeof === P;
    }
    function u(n) {
      return A(n) === T;
    }
    function f(n) {
      return A(n) === l;
    }
    function p(n) {
      return A(n) === $;
    }
    function y(n) {
      return A(n) === C;
    }
    function c(n) {
      return A(n) === h;
    }
    function m(n) {
      return A(n) === s;
    }
    function b(n) {
      return A(n) === v;
    }
    function I(n) {
      return A(n) === R;
    }
    g.AsyncMode = o, g.ConcurrentMode = W, g.ContextConsumer = G, g.ContextProvider = z, g.Element = X, g.ForwardRef = H, g.Fragment = F, g.Lazy = V, g.Memo = Z, g.Portal = q, g.Profiler = J, g.StrictMode = Y, g.Suspense = D, g.isAsyncMode = B, g.isConcurrentMode = e, g.isContextConsumer = r, g.isContextProvider = a, g.isElement = i, g.isForwardRef = u, g.isFragment = f, g.isLazy = p, g.isMemo = y, g.isPortal = c, g.isProfiler = m, g.isStrictMode = b, g.isSuspense = I, g.isValidElementType = j, g.typeOf = A;
  }()), g;
}
var Te;
function we() {
  return Te || (Te = 1, process.env.NODE_ENV === "production" ? ne.exports = $e() : ne.exports = Me()), ne.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var oe, he;
function Ye() {
  if (he) return oe;
  he = 1;
  var t = Object.getOwnPropertySymbols, P = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
  function l(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function v() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var E = {}, d = 0; d < 10; d++)
        E["_" + String.fromCharCode(d)] = d;
      var x = Object.getOwnPropertyNames(E).map(function(T) {
        return E[T];
      });
      if (x.join("") !== "0123456789")
        return !1;
      var O = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(T) {
        O[T] = T;
      }), Object.keys(Object.assign({}, O)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return oe = v() ? Object.assign : function(s, E) {
    for (var d, x = l(s), O, T = 1; T < arguments.length; T++) {
      d = Object(arguments[T]);
      for (var R in d)
        P.call(d, R) && (x[R] = d[R]);
      if (t) {
        O = t(d);
        for (var w = 0; w < O.length; w++)
          h.call(d, O[w]) && (x[O[w]] = d[O[w]]);
      }
    }
    return x;
  }, oe;
}
var ae, Re;
function le() {
  if (Re) return ae;
  Re = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ae = t, ae;
}
var ie, _e;
function Ce() {
  return _e || (_e = 1, ie = Function.call.bind(Object.prototype.hasOwnProperty)), ie;
}
var se, ge;
function qe() {
  if (ge) return se;
  ge = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var P = /* @__PURE__ */ le(), h = {}, l = /* @__PURE__ */ Ce();
    t = function(s) {
      var E = "Warning: " + s;
      typeof console < "u" && console.error(E);
      try {
        throw new Error(E);
      } catch {
      }
    };
  }
  function v(s, E, d, x, O) {
    if (process.env.NODE_ENV !== "production") {
      for (var T in s)
        if (l(s, T)) {
          var R;
          try {
            if (typeof s[T] != "function") {
              var w = Error(
                (x || "React class") + ": " + d + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            R = s[T](E, T, x, d, null, P);
          } catch ($) {
            R = $;
          }
          if (R && !(R instanceof Error) && t(
            (x || "React class") + ": type specification of " + d + " `" + T + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof R + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), R instanceof Error && !(R.message in h)) {
            h[R.message] = !0;
            var C = O ? O() : "";
            t(
              "Failed " + d + " type: " + R.message + (C ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (h = {});
  }, se = v, se;
}
var ue, Oe;
function De() {
  if (Oe) return ue;
  Oe = 1;
  var t = we(), P = Ye(), h = /* @__PURE__ */ le(), l = /* @__PURE__ */ Ce(), v = /* @__PURE__ */ qe(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(d) {
    var x = "Warning: " + d;
    typeof console < "u" && console.error(x);
    try {
      throw new Error(x);
    } catch {
    }
  });
  function E() {
    return null;
  }
  return ue = function(d, x) {
    var O = typeof Symbol == "function" && Symbol.iterator, T = "@@iterator";
    function R(e) {
      var r = e && (O && e[O] || e[T]);
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
    function S(e, r) {
      this.message = e, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    S.prototype = Error.prototype;
    function k(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, a = 0;
      function i(f, p, y, c, m, b, I) {
        if (c = c || w, b = b || y, I !== h) {
          if (x) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var N = c + ":" + y;
            !r[N] && // Avoid spamming the console because they are often not actionable except for lib authors
            a < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + b + "` prop on `" + c + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[N] = !0, a++);
          }
        }
        return p[y] == null ? f ? p[y] === null ? new S("The " + m + " `" + b + "` is marked as required " + ("in `" + c + "`, but its value is `null`.")) : new S("The " + m + " `" + b + "` is marked as required in " + ("`" + c + "`, but its value is `undefined`.")) : null : e(p, y, c, m, b);
      }
      var u = i.bind(null, !1);
      return u.isRequired = i.bind(null, !0), u;
    }
    function M(e) {
      function r(a, i, u, f, p, y) {
        var c = a[i], m = Y(c);
        if (m !== e) {
          var b = D(c);
          return new S(
            "Invalid " + f + " `" + p + "` of type " + ("`" + b + "` supplied to `" + u + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return k(r);
    }
    function L() {
      return k(E);
    }
    function j(e) {
      function r(a, i, u, f, p) {
        if (typeof e != "function")
          return new S("Property `" + p + "` of component `" + u + "` has invalid PropType notation inside arrayOf.");
        var y = a[i];
        if (!Array.isArray(y)) {
          var c = Y(y);
          return new S("Invalid " + f + " `" + p + "` of type " + ("`" + c + "` supplied to `" + u + "`, expected an array."));
        }
        for (var m = 0; m < y.length; m++) {
          var b = e(y, m, u, f, p + "[" + m + "]", h);
          if (b instanceof Error)
            return b;
        }
        return null;
      }
      return k(r);
    }
    function A() {
      function e(r, a, i, u, f) {
        var p = r[a];
        if (!d(p)) {
          var y = Y(p);
          return new S("Invalid " + u + " `" + f + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(e);
    }
    function o() {
      function e(r, a, i, u, f) {
        var p = r[a];
        if (!t.isValidElementType(p)) {
          var y = Y(p);
          return new S("Invalid " + u + " `" + f + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(e);
    }
    function W(e) {
      function r(a, i, u, f, p) {
        if (!(a[i] instanceof e)) {
          var y = e.name || w, c = B(a[i]);
          return new S("Invalid " + f + " `" + p + "` of type " + ("`" + c + "` supplied to `" + u + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return k(r);
    }
    function G(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), E;
      function r(a, i, u, f, p) {
        for (var y = a[i], c = 0; c < e.length; c++)
          if ($(y, e[c]))
            return null;
        var m = JSON.stringify(e, function(I, n) {
          var N = D(n);
          return N === "symbol" ? String(n) : n;
        });
        return new S("Invalid " + f + " `" + p + "` of value `" + String(y) + "` " + ("supplied to `" + u + "`, expected one of " + m + "."));
      }
      return k(r);
    }
    function z(e) {
      function r(a, i, u, f, p) {
        if (typeof e != "function")
          return new S("Property `" + p + "` of component `" + u + "` has invalid PropType notation inside objectOf.");
        var y = a[i], c = Y(y);
        if (c !== "object")
          return new S("Invalid " + f + " `" + p + "` of type " + ("`" + c + "` supplied to `" + u + "`, expected an object."));
        for (var m in y)
          if (l(y, m)) {
            var b = e(y, m, u, f, p + "." + m, h);
            if (b instanceof Error)
              return b;
          }
        return null;
      }
      return k(r);
    }
    function X(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), E;
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        if (typeof a != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + U(a) + " at index " + r + "."
          ), E;
      }
      function i(u, f, p, y, c) {
        for (var m = [], b = 0; b < e.length; b++) {
          var I = e[b], n = I(u, f, p, y, c, h);
          if (n == null)
            return null;
          n.data && l(n.data, "expectedType") && m.push(n.data.expectedType);
        }
        var N = m.length > 0 ? ", expected one of type [" + m.join(", ") + "]" : "";
        return new S("Invalid " + y + " `" + c + "` supplied to " + ("`" + p + "`" + N + "."));
      }
      return k(i);
    }
    function H() {
      function e(r, a, i, u, f) {
        return q(r[a]) ? null : new S("Invalid " + u + " `" + f + "` supplied to " + ("`" + i + "`, expected a ReactNode."));
      }
      return k(e);
    }
    function F(e, r, a, i, u) {
      return new S(
        (e || "React class") + ": " + r + " type `" + a + "." + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + u + "`."
      );
    }
    function V(e) {
      function r(a, i, u, f, p) {
        var y = a[i], c = Y(y);
        if (c !== "object")
          return new S("Invalid " + f + " `" + p + "` of type `" + c + "` " + ("supplied to `" + u + "`, expected `object`."));
        for (var m in e) {
          var b = e[m];
          if (typeof b != "function")
            return F(u, f, p, m, D(b));
          var I = b(y, m, u, f, p + "." + m, h);
          if (I)
            return I;
        }
        return null;
      }
      return k(r);
    }
    function Z(e) {
      function r(a, i, u, f, p) {
        var y = a[i], c = Y(y);
        if (c !== "object")
          return new S("Invalid " + f + " `" + p + "` of type `" + c + "` " + ("supplied to `" + u + "`, expected `object`."));
        var m = P({}, a[i], e);
        for (var b in m) {
          var I = e[b];
          if (l(e, b) && typeof I != "function")
            return F(u, f, p, b, D(I));
          if (!I)
            return new S(
              "Invalid " + f + " `" + p + "` key `" + b + "` supplied to `" + u + "`.\nBad object: " + JSON.stringify(a[i], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var n = I(y, b, u, f, p + "." + b, h);
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
          var r = R(e);
          if (r) {
            var a = r.call(e), i;
            if (r !== e.entries) {
              for (; !(i = a.next()).done; )
                if (!q(i.value))
                  return !1;
            } else
              for (; !(i = a.next()).done; ) {
                var u = i.value;
                if (u && !q(u[1]))
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
    function U(e) {
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
    return C.checkPropTypes = v, C.resetWarningCache = v.resetWarningCache, C.PropTypes = C, C;
  }, ue;
}
var ce, Se;
function Ne() {
  if (Se) return ce;
  Se = 1;
  var t = /* @__PURE__ */ le();
  function P() {
  }
  function h() {
  }
  return h.resetWarningCache = P, ce = function() {
    function l(E, d, x, O, T, R) {
      if (R !== t) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    l.isRequired = l;
    function v() {
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
      arrayOf: v,
      element: l,
      elementType: l,
      instanceOf: v,
      node: l,
      objectOf: v,
      oneOf: v,
      oneOfType: v,
      shape: v,
      exact: v,
      checkPropTypes: h,
      resetWarningCache: P
    };
    return s.PropTypes = s, s;
  }, ce;
}
var Pe;
function We() {
  if (Pe) return te.exports;
  if (Pe = 1, process.env.NODE_ENV !== "production") {
    var t = we(), P = !0;
    te.exports = /* @__PURE__ */ De()(t.isElement, P);
  } else
    te.exports = /* @__PURE__ */ Ne()();
  return te.exports;
}
var Fe = /* @__PURE__ */ We();
const fe = /* @__PURE__ */ Ae(Fe), Le = ({
  children: t,
  segmented: P = !1,
  className: h,
  ...l
}) => {
  const v = "usa-button-group", s = P ? `${v}--segmented` : "", E = [
    v,
    s,
    h
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ me.jsx("ul", { className: E, role: "group", "aria-label": l["aria-label"] || "Button Group", ...l, children: xe.Children.map(t, (d) => /* @__PURE__ */ me.jsx("li", { className: "usa-button-group__item", children: d })) });
};
Le.propTypes = {
  /**
   * Button elements to be grouped
   */
  children: fe.node.isRequired,
  /**
   * Whether the button group should be segmented (no spacing between buttons)
   */
  segmented: fe.bool,
  /**
   * Additional CSS class names
   */
  className: fe.string
};
export {
  Le as ButtonGroup
};
//# sourceMappingURL=index.js.map
