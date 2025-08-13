import Ae from "react";
function Ce(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var te = { exports: {} }, Q = {};
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
function je() {
  if (ye) return Q;
  ye = 1;
  var t = Symbol.for("react.transitional.element"), O = Symbol.for("react.fragment");
  function T(l, v, c) {
    var h = null;
    if (c !== void 0 && (h = "" + c), v.key !== void 0 && (h = "" + v.key), "key" in v) {
      c = {};
      for (var p in v)
        p !== "key" && (c[p] = v[p]);
    } else c = v;
    return v = c.ref, {
      $$typeof: t,
      type: l,
      key: h,
      ref: v !== void 0 ? v : null,
      props: c
    };
  }
  return Q.Fragment = O, Q.jsx = T, Q.jsxs = T, Q;
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
        case P:
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
          case F:
            return (e._context.displayName || "Context") + ".Consumer";
          case C:
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
    function O(e) {
      return "" + e;
    }
    function T(e) {
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
      var e = L.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
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
    function S(e, r, a, i, s, f, d, y) {
      return a = f.ref, e = {
        $$typeof: A,
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
        value: y
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function E(e, r, a, i, s, f, d, y) {
      var u = r.children;
      if (u !== void 0)
        if (i)
          if (Z(u)) {
            for (i = 0; i < u.length; i++)
              _(u[i]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(u);
      if (V.call(r, "key")) {
        u = t(e);
        var m = Object.keys(r).filter(function(I) {
          return I !== "key";
        });
        i = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", B[u + i] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), B[u + i] = !0);
      }
      if (u = null, a !== void 0 && (T(a), u = "" + a), h(r) && (T(r.key), u = "" + r.key), "key" in r) {
        a = {};
        for (var b in r)
          b !== "key" && (a[b] = r[b]);
      } else a = r;
      return u && p(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), S(
        e,
        u,
        f,
        s,
        v(),
        a,
        d,
        y
      );
    }
    function _(e) {
      typeof e == "object" && e !== null && e.$$typeof === A && e._store && (e._store.validated = 1);
    }
    var w = Ae, A = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), j = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), H = Symbol.for("react.client.reference"), L = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, Z = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var J, Y = {}, N = w["react-stack-bottom-frame"].bind(
      w,
      c
    )(), U = q(l(c)), B = {};
    K.Fragment = P, K.jsx = function(e, r, a, i, s) {
      var f = 1e4 > L.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        a,
        !1,
        i,
        s,
        f ? Error("react-stack-top-frame") : N,
        f ? q(l(e)) : U
      );
    }, K.jsxs = function(e, r, a, i, s) {
      var f = 1e4 > L.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        a,
        !0,
        i,
        s,
        f ? Error("react-stack-top-frame") : N,
        f ? q(l(e)) : U
      );
    };
  }()), K;
}
var me;
function Ie() {
  return me || (me = 1, process.env.NODE_ENV === "production" ? te.exports = je() : te.exports = ke()), te.exports;
}
var ee = Ie(), ne = { exports: {} }, oe = { exports: {} }, R = {};
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
  if (be) return R;
  be = 1;
  var t = typeof Symbol == "function" && Symbol.for, O = t ? Symbol.for("react.element") : 60103, T = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, v = t ? Symbol.for("react.strict_mode") : 60108, c = t ? Symbol.for("react.profiler") : 60114, h = t ? Symbol.for("react.provider") : 60109, p = t ? Symbol.for("react.context") : 60110, x = t ? Symbol.for("react.async_mode") : 60111, S = t ? Symbol.for("react.concurrent_mode") : 60111, E = t ? Symbol.for("react.forward_ref") : 60112, _ = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, A = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, P = t ? Symbol.for("react.block") : 60121, k = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, F = t ? Symbol.for("react.scope") : 60119;
  function j(o) {
    if (typeof o == "object" && o !== null) {
      var W = o.$$typeof;
      switch (W) {
        case O:
          switch (o = o.type, o) {
            case x:
            case S:
            case l:
            case c:
            case v:
            case _:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case p:
                case E:
                case $:
                case A:
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
  function C(o) {
    return j(o) === S;
  }
  return R.AsyncMode = x, R.ConcurrentMode = S, R.ContextConsumer = p, R.ContextProvider = h, R.Element = O, R.ForwardRef = E, R.Fragment = l, R.Lazy = $, R.Memo = A, R.Portal = T, R.Profiler = c, R.StrictMode = v, R.Suspense = _, R.isAsyncMode = function(o) {
    return C(o) || j(o) === x;
  }, R.isConcurrentMode = C, R.isContextConsumer = function(o) {
    return j(o) === p;
  }, R.isContextProvider = function(o) {
    return j(o) === h;
  }, R.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === O;
  }, R.isForwardRef = function(o) {
    return j(o) === E;
  }, R.isFragment = function(o) {
    return j(o) === l;
  }, R.isLazy = function(o) {
    return j(o) === $;
  }, R.isMemo = function(o) {
    return j(o) === A;
  }, R.isPortal = function(o) {
    return j(o) === T;
  }, R.isProfiler = function(o) {
    return j(o) === c;
  }, R.isStrictMode = function(o) {
    return j(o) === v;
  }, R.isSuspense = function(o) {
    return j(o) === _;
  }, R.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === l || o === S || o === c || o === v || o === _ || o === w || typeof o == "object" && o !== null && (o.$$typeof === $ || o.$$typeof === A || o.$$typeof === h || o.$$typeof === p || o.$$typeof === E || o.$$typeof === k || o.$$typeof === M || o.$$typeof === F || o.$$typeof === P);
  }, R.typeOf = j, R;
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
    var t = typeof Symbol == "function" && Symbol.for, O = t ? Symbol.for("react.element") : 60103, T = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, v = t ? Symbol.for("react.strict_mode") : 60108, c = t ? Symbol.for("react.profiler") : 60114, h = t ? Symbol.for("react.provider") : 60109, p = t ? Symbol.for("react.context") : 60110, x = t ? Symbol.for("react.async_mode") : 60111, S = t ? Symbol.for("react.concurrent_mode") : 60111, E = t ? Symbol.for("react.forward_ref") : 60112, _ = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, A = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, P = t ? Symbol.for("react.block") : 60121, k = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, F = t ? Symbol.for("react.scope") : 60119;
    function j(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === l || n === S || n === c || n === v || n === _ || n === w || typeof n == "object" && n !== null && (n.$$typeof === $ || n.$$typeof === A || n.$$typeof === h || n.$$typeof === p || n.$$typeof === E || n.$$typeof === k || n.$$typeof === M || n.$$typeof === F || n.$$typeof === P);
    }
    function C(n) {
      if (typeof n == "object" && n !== null) {
        var D = n.$$typeof;
        switch (D) {
          case O:
            var re = n.type;
            switch (re) {
              case x:
              case S:
              case l:
              case c:
              case v:
              case _:
                return re;
              default:
                var pe = re && re.$$typeof;
                switch (pe) {
                  case p:
                  case E:
                  case $:
                  case A:
                  case h:
                    return pe;
                  default:
                    return D;
                }
            }
          case T:
            return D;
        }
      }
    }
    var o = x, W = S, G = p, z = h, X = O, H = E, L = l, V = $, Z = A, q = T, J = c, Y = v, N = _, U = !1;
    function B(n) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(n) || C(n) === x;
    }
    function e(n) {
      return C(n) === S;
    }
    function r(n) {
      return C(n) === p;
    }
    function a(n) {
      return C(n) === h;
    }
    function i(n) {
      return typeof n == "object" && n !== null && n.$$typeof === O;
    }
    function s(n) {
      return C(n) === E;
    }
    function f(n) {
      return C(n) === l;
    }
    function d(n) {
      return C(n) === $;
    }
    function y(n) {
      return C(n) === A;
    }
    function u(n) {
      return C(n) === T;
    }
    function m(n) {
      return C(n) === c;
    }
    function b(n) {
      return C(n) === v;
    }
    function I(n) {
      return C(n) === _;
    }
    g.AsyncMode = o, g.ConcurrentMode = W, g.ContextConsumer = G, g.ContextProvider = z, g.Element = X, g.ForwardRef = H, g.Fragment = L, g.Lazy = V, g.Memo = Z, g.Portal = q, g.Profiler = J, g.StrictMode = Y, g.Suspense = N, g.isAsyncMode = B, g.isConcurrentMode = e, g.isContextConsumer = r, g.isContextProvider = a, g.isElement = i, g.isForwardRef = s, g.isFragment = f, g.isLazy = d, g.isMemo = y, g.isPortal = u, g.isProfiler = m, g.isStrictMode = b, g.isSuspense = I, g.isValidElementType = j, g.typeOf = C;
  }()), g;
}
var Te;
function xe() {
  return Te || (Te = 1, process.env.NODE_ENV === "production" ? oe.exports = $e() : oe.exports = Me()), oe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ae, he;
function Ye() {
  if (he) return ae;
  he = 1;
  var t = Object.getOwnPropertySymbols, O = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable;
  function l(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function v() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
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
  return ae = v() ? Object.assign : function(c, h) {
    for (var p, x = l(c), S, E = 1; E < arguments.length; E++) {
      p = Object(arguments[E]);
      for (var _ in p)
        O.call(p, _) && (x[_] = p[_]);
      if (t) {
        S = t(p);
        for (var w = 0; w < S.length; w++)
          T.call(p, S[w]) && (x[S[w]] = p[S[w]]);
      }
    }
    return x;
  }, ae;
}
var ie, _e;
function de() {
  if (_e) return ie;
  _e = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ie = t, ie;
}
var se, Re;
function we() {
  return Re || (Re = 1, se = Function.call.bind(Object.prototype.hasOwnProperty)), se;
}
var ue, ge;
function qe() {
  if (ge) return ue;
  ge = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var O = /* @__PURE__ */ de(), T = {}, l = /* @__PURE__ */ we();
    t = function(c) {
      var h = "Warning: " + c;
      typeof console < "u" && console.error(h);
      try {
        throw new Error(h);
      } catch {
      }
    };
  }
  function v(c, h, p, x, S) {
    if (process.env.NODE_ENV !== "production") {
      for (var E in c)
        if (l(c, E)) {
          var _;
          try {
            if (typeof c[E] != "function") {
              var w = Error(
                (x || "React class") + ": " + p + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            _ = c[E](h, E, x, p, null, O);
          } catch ($) {
            _ = $;
          }
          if (_ && !(_ instanceof Error) && t(
            (x || "React class") + ": type specification of " + p + " `" + E + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof _ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), _ instanceof Error && !(_.message in T)) {
            T[_.message] = !0;
            var A = S ? S() : "";
            t(
              "Failed " + p + " type: " + _.message + (A ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (T = {});
  }, ue = v, ue;
}
var ce, Se;
function Ne() {
  if (Se) return ce;
  Se = 1;
  var t = xe(), O = Ye(), T = /* @__PURE__ */ de(), l = /* @__PURE__ */ we(), v = /* @__PURE__ */ qe(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(p) {
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
    function _(e) {
      var r = e && (S && e[S] || e[E]);
      if (typeof r == "function")
        return r;
    }
    var w = "<<anonymous>>", A = {
      array: M("array"),
      bigint: M("bigint"),
      bool: M("boolean"),
      func: M("function"),
      number: M("number"),
      object: M("object"),
      string: M("string"),
      symbol: M("symbol"),
      any: F(),
      arrayOf: j,
      element: C(),
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
    function P(e, r) {
      this.message = e, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    P.prototype = Error.prototype;
    function k(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, a = 0;
      function i(f, d, y, u, m, b, I) {
        if (u = u || w, b = b || y, I !== T) {
          if (x) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var D = u + ":" + y;
            !r[D] && // Avoid spamming the console because they are often not actionable except for lib authors
            a < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + b + "` prop on `" + u + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[D] = !0, a++);
          }
        }
        return d[y] == null ? f ? d[y] === null ? new P("The " + m + " `" + b + "` is marked as required " + ("in `" + u + "`, but its value is `null`.")) : new P("The " + m + " `" + b + "` is marked as required in " + ("`" + u + "`, but its value is `undefined`.")) : null : e(d, y, u, m, b);
      }
      var s = i.bind(null, !1);
      return s.isRequired = i.bind(null, !0), s;
    }
    function M(e) {
      function r(a, i, s, f, d, y) {
        var u = a[i], m = Y(u);
        if (m !== e) {
          var b = N(u);
          return new P(
            "Invalid " + f + " `" + d + "` of type " + ("`" + b + "` supplied to `" + s + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return k(r);
    }
    function F() {
      return k(h);
    }
    function j(e) {
      function r(a, i, s, f, d) {
        if (typeof e != "function")
          return new P("Property `" + d + "` of component `" + s + "` has invalid PropType notation inside arrayOf.");
        var y = a[i];
        if (!Array.isArray(y)) {
          var u = Y(y);
          return new P("Invalid " + f + " `" + d + "` of type " + ("`" + u + "` supplied to `" + s + "`, expected an array."));
        }
        for (var m = 0; m < y.length; m++) {
          var b = e(y, m, s, f, d + "[" + m + "]", T);
          if (b instanceof Error)
            return b;
        }
        return null;
      }
      return k(r);
    }
    function C() {
      function e(r, a, i, s, f) {
        var d = r[a];
        if (!p(d)) {
          var y = Y(d);
          return new P("Invalid " + s + " `" + f + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(e);
    }
    function o() {
      function e(r, a, i, s, f) {
        var d = r[a];
        if (!t.isValidElementType(d)) {
          var y = Y(d);
          return new P("Invalid " + s + " `" + f + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(e);
    }
    function W(e) {
      function r(a, i, s, f, d) {
        if (!(a[i] instanceof e)) {
          var y = e.name || w, u = B(a[i]);
          return new P("Invalid " + f + " `" + d + "` of type " + ("`" + u + "` supplied to `" + s + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return k(r);
    }
    function G(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), h;
      function r(a, i, s, f, d) {
        for (var y = a[i], u = 0; u < e.length; u++)
          if ($(y, e[u]))
            return null;
        var m = JSON.stringify(e, function(I, n) {
          var D = N(n);
          return D === "symbol" ? String(n) : n;
        });
        return new P("Invalid " + f + " `" + d + "` of value `" + String(y) + "` " + ("supplied to `" + s + "`, expected one of " + m + "."));
      }
      return k(r);
    }
    function z(e) {
      function r(a, i, s, f, d) {
        if (typeof e != "function")
          return new P("Property `" + d + "` of component `" + s + "` has invalid PropType notation inside objectOf.");
        var y = a[i], u = Y(y);
        if (u !== "object")
          return new P("Invalid " + f + " `" + d + "` of type " + ("`" + u + "` supplied to `" + s + "`, expected an object."));
        for (var m in y)
          if (l(y, m)) {
            var b = e(y, m, s, f, d + "." + m, T);
            if (b instanceof Error)
              return b;
          }
        return null;
      }
      return k(r);
    }
    function X(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), h;
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        if (typeof a != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + U(a) + " at index " + r + "."
          ), h;
      }
      function i(s, f, d, y, u) {
        for (var m = [], b = 0; b < e.length; b++) {
          var I = e[b], n = I(s, f, d, y, u, T);
          if (n == null)
            return null;
          n.data && l(n.data, "expectedType") && m.push(n.data.expectedType);
        }
        var D = m.length > 0 ? ", expected one of type [" + m.join(", ") + "]" : "";
        return new P("Invalid " + y + " `" + u + "` supplied to " + ("`" + d + "`" + D + "."));
      }
      return k(i);
    }
    function H() {
      function e(r, a, i, s, f) {
        return q(r[a]) ? null : new P("Invalid " + s + " `" + f + "` supplied to " + ("`" + i + "`, expected a ReactNode."));
      }
      return k(e);
    }
    function L(e, r, a, i, s) {
      return new P(
        (e || "React class") + ": " + r + " type `" + a + "." + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + s + "`."
      );
    }
    function V(e) {
      function r(a, i, s, f, d) {
        var y = a[i], u = Y(y);
        if (u !== "object")
          return new P("Invalid " + f + " `" + d + "` of type `" + u + "` " + ("supplied to `" + s + "`, expected `object`."));
        for (var m in e) {
          var b = e[m];
          if (typeof b != "function")
            return L(s, f, d, m, N(b));
          var I = b(y, m, s, f, d + "." + m, T);
          if (I)
            return I;
        }
        return null;
      }
      return k(r);
    }
    function Z(e) {
      function r(a, i, s, f, d) {
        var y = a[i], u = Y(y);
        if (u !== "object")
          return new P("Invalid " + f + " `" + d + "` of type `" + u + "` " + ("supplied to `" + s + "`, expected `object`."));
        var m = O({}, a[i], e);
        for (var b in m) {
          var I = e[b];
          if (l(e, b) && typeof I != "function")
            return L(s, f, d, b, N(I));
          if (!I)
            return new P(
              "Invalid " + f + " `" + d + "` key `" + b + "` supplied to `" + s + "`.\nBad object: " + JSON.stringify(a[i], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var n = I(y, b, s, f, d + "." + b, T);
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
          if (e === null || p(e))
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
    function J(e, r) {
      return e === "symbol" ? !0 : r ? r["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && r instanceof Symbol : !1;
    }
    function Y(e) {
      var r = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : J(r, e) ? "symbol" : r;
    }
    function N(e) {
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
      var r = N(e);
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
    return A.checkPropTypes = v, A.resetWarningCache = v.resetWarningCache, A.PropTypes = A, A;
  }, ce;
}
var fe, Oe;
function De() {
  if (Oe) return fe;
  Oe = 1;
  var t = /* @__PURE__ */ de();
  function O() {
  }
  function T() {
  }
  return T.resetWarningCache = O, fe = function() {
    function l(h, p, x, S, E, _) {
      if (_ !== t) {
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
    var c = {
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
      checkPropTypes: T,
      resetWarningCache: O
    };
    return c.PropTypes = c, c;
  }, fe;
}
var Pe;
function We() {
  if (Pe) return ne.exports;
  if (Pe = 1, process.env.NODE_ENV !== "production") {
    var t = xe(), O = !0;
    ne.exports = /* @__PURE__ */ Ne()(t.isElement, O);
  } else
    ne.exports = /* @__PURE__ */ De()();
  return ne.exports;
}
var Le = /* @__PURE__ */ We();
const le = /* @__PURE__ */ Ce(Le), Fe = ({ heading: t, description: O, children: T }) => {
  const l = `summary-box-${t.toLowerCase().replace(/\s+/g, "-")}`;
  return /* @__PURE__ */ ee.jsx(
    "div",
    {
      className: "usa-summary-box",
      role: "region",
      "aria-labelledby": l,
      children: /* @__PURE__ */ ee.jsxs("div", { className: "usa-summary-box__body", children: [
        /* @__PURE__ */ ee.jsx("div", { className: "usa-summary-box__heading", id: l, children: t }),
        O && /* @__PURE__ */ ee.jsx("div", { className: "summary-box-description", children: O }),
        /* @__PURE__ */ ee.jsx("div", { className: "usa-summary-box__text", children: T })
      ] })
    }
  );
};
Fe.propTypes = {
  heading: le.string.isRequired,
  description: le.string,
  children: le.node.isRequired
};
export {
  Fe as SummaryBox
};
//# sourceMappingURL=index.js.map
