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
  var t = Symbol.for("react.transitional.element"), P = Symbol.for("react.fragment");
  function h(l, y, c) {
    var T = null;
    if (c !== void 0 && (T = "" + c), y.key !== void 0 && (T = "" + y.key), "key" in y) {
      c = {};
      for (var i in y)
        i !== "key" && (c[i] = y[i]);
    } else c = y;
    return y = c.ref, {
      $$typeof: t,
      type: l,
      key: T,
      ref: y !== void 0 ? y : null,
      props: c
    };
  }
  return ee.Fragment = P, ee.jsx = h, ee.jsxs = h, ee;
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
        case x:
          return "Fragment";
        case M:
          return "Profiler";
        case $:
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
          case I:
            return "Portal";
          case j:
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
        var a = r.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), P(e);
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
    function y() {
      var e = U.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function T(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function i(e, r) {
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
    function S() {
      var e = t(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function g(e, r, a, s, u, p, v, m) {
      return a = p.ref, e = {
        $$typeof: C,
        type: e,
        key: r,
        props: p,
        _owner: u
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
        value: m
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function d(e, r, a, s, u, p, v, m) {
      var f = r.children;
      if (f !== void 0)
        if (s)
          if (K(f)) {
            for (s = 0; s < f.length; s++)
              _(f[s]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(f);
      if (B.call(r, "key")) {
        f = t(e);
        var b = Object.keys(r).filter(function(k) {
          return k !== "key";
        });
        s = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", H[f + s] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          f,
          b,
          f
        ), H[f + s] = !0);
      }
      if (f = null, a !== void 0 && (h(a), f = "" + a), T(r) && (h(r.key), f = "" + r.key), "key" in r) {
        a = {};
        for (var E in r)
          E !== "key" && (a[E] = r[E]);
      } else a = r;
      return f && i(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), g(
        e,
        f,
        p,
        u,
        y(),
        a,
        v,
        m
      );
    }
    function _(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var w = xe, C = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), j = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), U = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, K = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var G, N = {}, W = w["react-stack-bottom-frame"].bind(
      w,
      c
    )(), V = D(l(c)), H = {};
    re.Fragment = x, re.jsx = function(e, r, a, s, u) {
      var p = 1e4 > U.recentlyCreatedOwnerStacks++;
      return d(
        e,
        r,
        a,
        !1,
        s,
        u,
        p ? Error("react-stack-top-frame") : W,
        p ? D(l(e)) : V
      );
    }, re.jsxs = function(e, r, a, s, u) {
      var p = 1e4 > U.recentlyCreatedOwnerStacks++;
      return d(
        e,
        r,
        a,
        !0,
        s,
        u,
        p ? Error("react-stack-top-frame") : W,
        p ? D(l(e)) : V
      );
    };
  }()), re;
}
var me;
function ke() {
  return me || (me = 1, process.env.NODE_ENV === "production" ? ne.exports = je() : ne.exports = $e()), ne.exports;
}
var Y = ke(), oe = { exports: {} }, ae = { exports: {} }, R = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function Ie() {
  if (be) return R;
  be = 1;
  var t = typeof Symbol == "function" && Symbol.for, P = t ? Symbol.for("react.element") : 60103, h = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, y = t ? Symbol.for("react.strict_mode") : 60108, c = t ? Symbol.for("react.profiler") : 60114, T = t ? Symbol.for("react.provider") : 60109, i = t ? Symbol.for("react.context") : 60110, S = t ? Symbol.for("react.async_mode") : 60111, g = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, _ = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, I = t ? Symbol.for("react.lazy") : 60116, x = t ? Symbol.for("react.block") : 60121, $ = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, z = t ? Symbol.for("react.scope") : 60119;
  function j(o) {
    if (typeof o == "object" && o !== null) {
      var F = o.$$typeof;
      switch (F) {
        case P:
          switch (o = o.type, o) {
            case S:
            case g:
            case l:
            case c:
            case y:
            case _:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case i:
                case d:
                case I:
                case C:
                case T:
                  return o;
                default:
                  return F;
              }
          }
        case h:
          return F;
      }
    }
  }
  function A(o) {
    return j(o) === g;
  }
  return R.AsyncMode = S, R.ConcurrentMode = g, R.ContextConsumer = i, R.ContextProvider = T, R.Element = P, R.ForwardRef = d, R.Fragment = l, R.Lazy = I, R.Memo = C, R.Portal = h, R.Profiler = c, R.StrictMode = y, R.Suspense = _, R.isAsyncMode = function(o) {
    return A(o) || j(o) === S;
  }, R.isConcurrentMode = A, R.isContextConsumer = function(o) {
    return j(o) === i;
  }, R.isContextProvider = function(o) {
    return j(o) === T;
  }, R.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === P;
  }, R.isForwardRef = function(o) {
    return j(o) === d;
  }, R.isFragment = function(o) {
    return j(o) === l;
  }, R.isLazy = function(o) {
    return j(o) === I;
  }, R.isMemo = function(o) {
    return j(o) === C;
  }, R.isPortal = function(o) {
    return j(o) === h;
  }, R.isProfiler = function(o) {
    return j(o) === c;
  }, R.isStrictMode = function(o) {
    return j(o) === y;
  }, R.isSuspense = function(o) {
    return j(o) === _;
  }, R.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === l || o === g || o === c || o === y || o === _ || o === w || typeof o == "object" && o !== null && (o.$$typeof === I || o.$$typeof === C || o.$$typeof === T || o.$$typeof === i || o.$$typeof === d || o.$$typeof === $ || o.$$typeof === M || o.$$typeof === z || o.$$typeof === x);
  }, R.typeOf = j, R;
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
    var t = typeof Symbol == "function" && Symbol.for, P = t ? Symbol.for("react.element") : 60103, h = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, y = t ? Symbol.for("react.strict_mode") : 60108, c = t ? Symbol.for("react.profiler") : 60114, T = t ? Symbol.for("react.provider") : 60109, i = t ? Symbol.for("react.context") : 60110, S = t ? Symbol.for("react.async_mode") : 60111, g = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, _ = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, I = t ? Symbol.for("react.lazy") : 60116, x = t ? Symbol.for("react.block") : 60121, $ = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, z = t ? Symbol.for("react.scope") : 60119;
    function j(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === l || n === g || n === c || n === y || n === _ || n === w || typeof n == "object" && n !== null && (n.$$typeof === I || n.$$typeof === C || n.$$typeof === T || n.$$typeof === i || n.$$typeof === d || n.$$typeof === $ || n.$$typeof === M || n.$$typeof === z || n.$$typeof === x);
    }
    function A(n) {
      if (typeof n == "object" && n !== null) {
        var L = n.$$typeof;
        switch (L) {
          case P:
            var te = n.type;
            switch (te) {
              case S:
              case g:
              case l:
              case c:
              case y:
              case _:
                return te;
              default:
                var pe = te && te.$$typeof;
                switch (pe) {
                  case i:
                  case d:
                  case I:
                  case C:
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
    var o = S, F = g, X = i, J = T, Z = P, Q = d, U = l, B = I, K = C, D = h, G = c, N = y, W = _, V = !1;
    function H(n) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(n) || A(n) === S;
    }
    function e(n) {
      return A(n) === g;
    }
    function r(n) {
      return A(n) === i;
    }
    function a(n) {
      return A(n) === T;
    }
    function s(n) {
      return typeof n == "object" && n !== null && n.$$typeof === P;
    }
    function u(n) {
      return A(n) === d;
    }
    function p(n) {
      return A(n) === l;
    }
    function v(n) {
      return A(n) === I;
    }
    function m(n) {
      return A(n) === C;
    }
    function f(n) {
      return A(n) === h;
    }
    function b(n) {
      return A(n) === c;
    }
    function E(n) {
      return A(n) === y;
    }
    function k(n) {
      return A(n) === _;
    }
    O.AsyncMode = o, O.ConcurrentMode = F, O.ContextConsumer = X, O.ContextProvider = J, O.Element = Z, O.ForwardRef = Q, O.Fragment = U, O.Lazy = B, O.Memo = K, O.Portal = D, O.Profiler = G, O.StrictMode = N, O.Suspense = W, O.isAsyncMode = H, O.isConcurrentMode = e, O.isContextConsumer = r, O.isContextProvider = a, O.isElement = s, O.isForwardRef = u, O.isFragment = p, O.isLazy = v, O.isMemo = m, O.isPortal = f, O.isProfiler = b, O.isStrictMode = E, O.isSuspense = k, O.isValidElementType = j, O.typeOf = A;
  }()), O;
}
var Te;
function we() {
  return Te || (Te = 1, process.env.NODE_ENV === "production" ? ae.exports = Ie() : ae.exports = Me()), ae.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ie, he;
function Ne() {
  if (he) return ie;
  he = 1;
  var t = Object.getOwnPropertySymbols, P = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
  function l(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function y() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
        return !1;
      for (var T = {}, i = 0; i < 10; i++)
        T["_" + String.fromCharCode(i)] = i;
      var S = Object.getOwnPropertyNames(T).map(function(d) {
        return T[d];
      });
      if (S.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        g[d] = d;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = y() ? Object.assign : function(c, T) {
    for (var i, S = l(c), g, d = 1; d < arguments.length; d++) {
      i = Object(arguments[d]);
      for (var _ in i)
        P.call(i, _) && (S[_] = i[_]);
      if (t) {
        g = t(i);
        for (var w = 0; w < g.length; w++)
          h.call(i, g[w]) && (S[g[w]] = i[g[w]]);
      }
    }
    return S;
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
function Ye() {
  if (Re) return ue;
  Re = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var P = /* @__PURE__ */ de(), h = {}, l = /* @__PURE__ */ Ce();
    t = function(c) {
      var T = "Warning: " + c;
      typeof console < "u" && console.error(T);
      try {
        throw new Error(T);
      } catch {
      }
    };
  }
  function y(c, T, i, S, g) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in c)
        if (l(c, d)) {
          var _;
          try {
            if (typeof c[d] != "function") {
              var w = Error(
                (S || "React class") + ": " + i + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            _ = c[d](T, d, S, i, null, P);
          } catch (I) {
            _ = I;
          }
          if (_ && !(_ instanceof Error) && t(
            (S || "React class") + ": type specification of " + i + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof _ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), _ instanceof Error && !(_.message in h)) {
            h[_.message] = !0;
            var C = g ? g() : "";
            t(
              "Failed " + i + " type: " + _.message + (C ?? "")
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
  var t = we(), P = Ne(), h = /* @__PURE__ */ de(), l = /* @__PURE__ */ Ce(), y = /* @__PURE__ */ Ye(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(i) {
    var S = "Warning: " + i;
    typeof console < "u" && console.error(S);
    try {
      throw new Error(S);
    } catch {
    }
  });
  function T() {
    return null;
  }
  return fe = function(i, S) {
    var g = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function _(e) {
      var r = e && (g && e[g] || e[d]);
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
      instanceOf: F,
      node: Q(),
      objectOf: J,
      oneOf: X,
      oneOfType: Z,
      shape: B,
      exact: K
    };
    function I(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    }
    function x(e, r) {
      this.message = e, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function $(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, a = 0;
      function s(p, v, m, f, b, E, k) {
        if (f = f || w, E = E || m, k !== h) {
          if (S) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var L = f + ":" + m;
            !r[L] && // Avoid spamming the console because they are often not actionable except for lib authors
            a < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + E + "` prop on `" + f + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[L] = !0, a++);
          }
        }
        return v[m] == null ? p ? v[m] === null ? new x("The " + b + " `" + E + "` is marked as required " + ("in `" + f + "`, but its value is `null`.")) : new x("The " + b + " `" + E + "` is marked as required in " + ("`" + f + "`, but its value is `undefined`.")) : null : e(v, m, f, b, E);
      }
      var u = s.bind(null, !1);
      return u.isRequired = s.bind(null, !0), u;
    }
    function M(e) {
      function r(a, s, u, p, v, m) {
        var f = a[s], b = N(f);
        if (b !== e) {
          var E = W(f);
          return new x(
            "Invalid " + p + " `" + v + "` of type " + ("`" + E + "` supplied to `" + u + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return $(r);
    }
    function z() {
      return $(T);
    }
    function j(e) {
      function r(a, s, u, p, v) {
        if (typeof e != "function")
          return new x("Property `" + v + "` of component `" + u + "` has invalid PropType notation inside arrayOf.");
        var m = a[s];
        if (!Array.isArray(m)) {
          var f = N(m);
          return new x("Invalid " + p + " `" + v + "` of type " + ("`" + f + "` supplied to `" + u + "`, expected an array."));
        }
        for (var b = 0; b < m.length; b++) {
          var E = e(m, b, u, p, v + "[" + b + "]", h);
          if (E instanceof Error)
            return E;
        }
        return null;
      }
      return $(r);
    }
    function A() {
      function e(r, a, s, u, p) {
        var v = r[a];
        if (!i(v)) {
          var m = N(v);
          return new x("Invalid " + u + " `" + p + "` of type " + ("`" + m + "` supplied to `" + s + "`, expected a single ReactElement."));
        }
        return null;
      }
      return $(e);
    }
    function o() {
      function e(r, a, s, u, p) {
        var v = r[a];
        if (!t.isValidElementType(v)) {
          var m = N(v);
          return new x("Invalid " + u + " `" + p + "` of type " + ("`" + m + "` supplied to `" + s + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return $(e);
    }
    function F(e) {
      function r(a, s, u, p, v) {
        if (!(a[s] instanceof e)) {
          var m = e.name || w, f = H(a[s]);
          return new x("Invalid " + p + " `" + v + "` of type " + ("`" + f + "` supplied to `" + u + "`, expected ") + ("instance of `" + m + "`."));
        }
        return null;
      }
      return $(r);
    }
    function X(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), T;
      function r(a, s, u, p, v) {
        for (var m = a[s], f = 0; f < e.length; f++)
          if (I(m, e[f]))
            return null;
        var b = JSON.stringify(e, function(k, n) {
          var L = W(n);
          return L === "symbol" ? String(n) : n;
        });
        return new x("Invalid " + p + " `" + v + "` of value `" + String(m) + "` " + ("supplied to `" + u + "`, expected one of " + b + "."));
      }
      return $(r);
    }
    function J(e) {
      function r(a, s, u, p, v) {
        if (typeof e != "function")
          return new x("Property `" + v + "` of component `" + u + "` has invalid PropType notation inside objectOf.");
        var m = a[s], f = N(m);
        if (f !== "object")
          return new x("Invalid " + p + " `" + v + "` of type " + ("`" + f + "` supplied to `" + u + "`, expected an object."));
        for (var b in m)
          if (l(m, b)) {
            var E = e(m, b, u, p, v + "." + b, h);
            if (E instanceof Error)
              return E;
          }
        return null;
      }
      return $(r);
    }
    function Z(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), T;
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        if (typeof a != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + V(a) + " at index " + r + "."
          ), T;
      }
      function s(u, p, v, m, f) {
        for (var b = [], E = 0; E < e.length; E++) {
          var k = e[E], n = k(u, p, v, m, f, h);
          if (n == null)
            return null;
          n.data && l(n.data, "expectedType") && b.push(n.data.expectedType);
        }
        var L = b.length > 0 ? ", expected one of type [" + b.join(", ") + "]" : "";
        return new x("Invalid " + m + " `" + f + "` supplied to " + ("`" + v + "`" + L + "."));
      }
      return $(s);
    }
    function Q() {
      function e(r, a, s, u, p) {
        return D(r[a]) ? null : new x("Invalid " + u + " `" + p + "` supplied to " + ("`" + s + "`, expected a ReactNode."));
      }
      return $(e);
    }
    function U(e, r, a, s, u) {
      return new x(
        (e || "React class") + ": " + r + " type `" + a + "." + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + u + "`."
      );
    }
    function B(e) {
      function r(a, s, u, p, v) {
        var m = a[s], f = N(m);
        if (f !== "object")
          return new x("Invalid " + p + " `" + v + "` of type `" + f + "` " + ("supplied to `" + u + "`, expected `object`."));
        for (var b in e) {
          var E = e[b];
          if (typeof E != "function")
            return U(u, p, v, b, W(E));
          var k = E(m, b, u, p, v + "." + b, h);
          if (k)
            return k;
        }
        return null;
      }
      return $(r);
    }
    function K(e) {
      function r(a, s, u, p, v) {
        var m = a[s], f = N(m);
        if (f !== "object")
          return new x("Invalid " + p + " `" + v + "` of type `" + f + "` " + ("supplied to `" + u + "`, expected `object`."));
        var b = P({}, a[s], e);
        for (var E in b) {
          var k = e[E];
          if (l(e, E) && typeof k != "function")
            return U(u, p, v, E, W(k));
          if (!k)
            return new x(
              "Invalid " + p + " `" + v + "` key `" + E + "` supplied to `" + u + "`.\nBad object: " + JSON.stringify(a[s], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var n = k(m, E, u, p, v + "." + E, h);
          if (n)
            return n;
        }
        return null;
      }
      return $(r);
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
          if (e === null || i(e))
            return !0;
          var r = _(e);
          if (r) {
            var a = r.call(e), s;
            if (r !== e.entries) {
              for (; !(s = a.next()).done; )
                if (!D(s.value))
                  return !1;
            } else
              for (; !(s = a.next()).done; ) {
                var u = s.value;
                if (u && !D(u[1]))
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
    function W(e) {
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
      return !e.constructor || !e.constructor.name ? w : e.constructor.name;
    }
    return C.checkPropTypes = y, C.resetWarningCache = y.resetWarningCache, C.PropTypes = C, C;
  }, fe;
}
var le, Se;
function De() {
  if (Se) return le;
  Se = 1;
  var t = /* @__PURE__ */ de();
  function P() {
  }
  function h() {
  }
  return h.resetWarningCache = P, le = function() {
    function l(T, i, S, g, d, _) {
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
      resetWarningCache: P
    };
    return c.PropTypes = c, c;
  }, le;
}
var Pe;
function We() {
  if (Pe) return oe.exports;
  if (Pe = 1, process.env.NODE_ENV !== "production") {
    var t = we(), P = !0;
    oe.exports = /* @__PURE__ */ qe()(t.isElement, P);
  } else
    oe.exports = /* @__PURE__ */ De()();
  return oe.exports;
}
var Le = /* @__PURE__ */ We();
const q = /* @__PURE__ */ Ae(Le), Fe = ({
  title: t,
  description: P,
  tags: h = [],
  image: l,
  actionButton: y,
  className: c,
  ...T
}) => {
  const i = "hero-global", S = xe.useId(), g = [
    i,
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ Y.jsx(
    "section",
    {
      className: g,
      role: "banner",
      "aria-labelledby": S,
      ...T,
      children: /* @__PURE__ */ Y.jsxs("div", { className: `${i}__container`, children: [
        /* @__PURE__ */ Y.jsx("div", { className: `${i}__content-wrapper`, children: /* @__PURE__ */ Y.jsxs("div", { className: `${i}__content`, children: [
          /* @__PURE__ */ Y.jsx(
            "h1",
            {
              id: S,
              className: `${i}__title`,
              children: t
            }
          ),
          h.length > 0 && /* @__PURE__ */ Y.jsx(
            "div",
            {
              className: `${i}__tags`,
              "aria-label": "Content categories",
              children: h.map((d, _) => /* @__PURE__ */ Y.jsx(
                "span",
                {
                  className: `${i}__tag`,
                  children: d
                },
                _
              ))
            }
          ),
          P && /* @__PURE__ */ Y.jsx("p", { className: `${i}__description`, children: P }),
          y && /* @__PURE__ */ Y.jsx("div", { className: `${i}__action`, children: y })
        ] }) }),
        l && /* @__PURE__ */ Y.jsx("div", { className: `${i}__image-wrapper`, children: /* @__PURE__ */ Y.jsxs("div", { className: `${i}__image-container`, children: [
          /* @__PURE__ */ Y.jsx(
            "img",
            {
              src: typeof l.src == "string" ? l.src : l.src.default || l.src,
              alt: l.alt || "",
              className: `${i}__image`,
              loading: "lazy",
              onError: (d) => {
                console.error("Image failed to load:", l.src), console.error("Error event:", d), console.error("Image element:", d.target), console.error("Image natural dimensions:", d.target.naturalWidth, d.target.naturalHeight), d.target.classList.add(`${i}__image--error`);
              },
              onLoad: (d) => {
                console.log("Image loaded successfully:", l.src), console.log("Image element:", d.target), console.log("Image natural dimensions:", d.target.naturalWidth, d.target.naturalHeight);
              }
            }
          ),
          /* @__PURE__ */ Y.jsx("div", { className: `${i}__image-placeholder`, "aria-hidden": "true" })
        ] }) })
      ] })
    }
  );
};
Fe.propTypes = {
  /** The main title of the hero section */
  title: q.string.isRequired,
  /** Optional description text */
  description: q.string,
  /** Array of tag strings to display */
  tags: q.arrayOf(q.string),
  /** Optional image configuration */
  image: q.shape({
    src: q.oneOfType([
      q.string,
      q.object
      // For Vite/webpack imported assets
    ]).isRequired,
    alt: q.string
  }),
  /** Optional action button component */
  actionButton: q.node,
  /** Additional CSS class name */
  className: q.string
};
export {
  Fe as HeroGlobal
};
//# sourceMappingURL=index.js.map
