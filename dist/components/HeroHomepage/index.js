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
  var t = Symbol.for("react.transitional.element"), P = Symbol.for("react.fragment");
  function h(f, m, s) {
    var v = null;
    if (s !== void 0 && (v = "" + s), m.key !== void 0 && (v = "" + m.key), "key" in m) {
      s = {};
      for (var d in m)
        d !== "key" && (s[d] = m[d]);
    } else s = m;
    return m = s.ref, {
      $$typeof: t,
      type: f,
      key: v,
      ref: m !== void 0 ? m : null,
      props: s
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
function ke() {
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
        var a = r.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), P(e);
      }
    }
    function f(e) {
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
    function m() {
      var e = U.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function v(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
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
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function _(e, r, a, i, c, l, p, y) {
      return a = l.ref, e = {
        $$typeof: C,
        type: e,
        key: r,
        props: l,
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
        value: p
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: y
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function T(e, r, a, i, c, l, p, y) {
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
        var b = Object.keys(r).filter(function($) {
          return $ !== "key";
        });
        i = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", H[u + i] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), H[u + i] = !0);
      }
      if (u = null, a !== void 0 && (h(a), u = "" + a), v(r) && (h(r.key), u = "" + r.key), "key" in r) {
        a = {};
        for (var E in r)
          E !== "key" && (a[E] = r[E]);
      } else a = r;
      return u && d(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), _(
        e,
        u,
        l,
        c,
        m(),
        a,
        p,
        y
      );
    }
    function R(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var w = Ce, C = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), j = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), U = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, K = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var G, Y = {}, q = w["react-stack-bottom-frame"].bind(
      w,
      s
    )(), V = N(f(s)), H = {};
    re.Fragment = x, re.jsx = function(e, r, a, i, c) {
      var l = 1e4 > U.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        a,
        !1,
        i,
        c,
        l ? Error("react-stack-top-frame") : q,
        l ? N(f(e)) : V
      );
    }, re.jsxs = function(e, r, a, i, c) {
      var l = 1e4 > U.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        a,
        !0,
        i,
        c,
        l ? Error("react-stack-top-frame") : q,
        l ? N(f(e)) : V
      );
    };
  }()), re;
}
var me;
function $e() {
  return me || (me = 1, process.env.NODE_ENV === "production" ? ne.exports = je() : ne.exports = ke()), ne.exports;
}
var W = $e(), oe = { exports: {} }, ae = { exports: {} }, g = {};
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
  if (be) return g;
  be = 1;
  var t = typeof Symbol == "function" && Symbol.for, P = t ? Symbol.for("react.element") : 60103, h = t ? Symbol.for("react.portal") : 60106, f = t ? Symbol.for("react.fragment") : 60107, m = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, v = t ? Symbol.for("react.provider") : 60109, d = t ? Symbol.for("react.context") : 60110, S = t ? Symbol.for("react.async_mode") : 60111, _ = t ? Symbol.for("react.concurrent_mode") : 60111, T = t ? Symbol.for("react.forward_ref") : 60112, R = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, I = t ? Symbol.for("react.lazy") : 60116, x = t ? Symbol.for("react.block") : 60121, k = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, z = t ? Symbol.for("react.scope") : 60119;
  function j(o) {
    if (typeof o == "object" && o !== null) {
      var F = o.$$typeof;
      switch (F) {
        case P:
          switch (o = o.type, o) {
            case S:
            case _:
            case f:
            case s:
            case m:
            case R:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case d:
                case T:
                case I:
                case C:
                case v:
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
    return j(o) === _;
  }
  return g.AsyncMode = S, g.ConcurrentMode = _, g.ContextConsumer = d, g.ContextProvider = v, g.Element = P, g.ForwardRef = T, g.Fragment = f, g.Lazy = I, g.Memo = C, g.Portal = h, g.Profiler = s, g.StrictMode = m, g.Suspense = R, g.isAsyncMode = function(o) {
    return A(o) || j(o) === S;
  }, g.isConcurrentMode = A, g.isContextConsumer = function(o) {
    return j(o) === d;
  }, g.isContextProvider = function(o) {
    return j(o) === v;
  }, g.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === P;
  }, g.isForwardRef = function(o) {
    return j(o) === T;
  }, g.isFragment = function(o) {
    return j(o) === f;
  }, g.isLazy = function(o) {
    return j(o) === I;
  }, g.isMemo = function(o) {
    return j(o) === C;
  }, g.isPortal = function(o) {
    return j(o) === h;
  }, g.isProfiler = function(o) {
    return j(o) === s;
  }, g.isStrictMode = function(o) {
    return j(o) === m;
  }, g.isSuspense = function(o) {
    return j(o) === R;
  }, g.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === f || o === _ || o === s || o === m || o === R || o === w || typeof o == "object" && o !== null && (o.$$typeof === I || o.$$typeof === C || o.$$typeof === v || o.$$typeof === d || o.$$typeof === T || o.$$typeof === k || o.$$typeof === M || o.$$typeof === z || o.$$typeof === x);
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
    var t = typeof Symbol == "function" && Symbol.for, P = t ? Symbol.for("react.element") : 60103, h = t ? Symbol.for("react.portal") : 60106, f = t ? Symbol.for("react.fragment") : 60107, m = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, v = t ? Symbol.for("react.provider") : 60109, d = t ? Symbol.for("react.context") : 60110, S = t ? Symbol.for("react.async_mode") : 60111, _ = t ? Symbol.for("react.concurrent_mode") : 60111, T = t ? Symbol.for("react.forward_ref") : 60112, R = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, I = t ? Symbol.for("react.lazy") : 60116, x = t ? Symbol.for("react.block") : 60121, k = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, z = t ? Symbol.for("react.scope") : 60119;
    function j(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === f || n === _ || n === s || n === m || n === R || n === w || typeof n == "object" && n !== null && (n.$$typeof === I || n.$$typeof === C || n.$$typeof === v || n.$$typeof === d || n.$$typeof === T || n.$$typeof === k || n.$$typeof === M || n.$$typeof === z || n.$$typeof === x);
    }
    function A(n) {
      if (typeof n == "object" && n !== null) {
        var D = n.$$typeof;
        switch (D) {
          case P:
            var te = n.type;
            switch (te) {
              case S:
              case _:
              case f:
              case s:
              case m:
              case R:
                return te;
              default:
                var pe = te && te.$$typeof;
                switch (pe) {
                  case d:
                  case T:
                  case I:
                  case C:
                  case v:
                    return pe;
                  default:
                    return D;
                }
            }
          case h:
            return D;
        }
      }
    }
    var o = S, F = _, X = d, J = v, Z = P, Q = T, U = f, B = I, K = C, N = h, G = s, Y = m, q = R, V = !1;
    function H(n) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(n) || A(n) === S;
    }
    function e(n) {
      return A(n) === _;
    }
    function r(n) {
      return A(n) === d;
    }
    function a(n) {
      return A(n) === v;
    }
    function i(n) {
      return typeof n == "object" && n !== null && n.$$typeof === P;
    }
    function c(n) {
      return A(n) === T;
    }
    function l(n) {
      return A(n) === f;
    }
    function p(n) {
      return A(n) === I;
    }
    function y(n) {
      return A(n) === C;
    }
    function u(n) {
      return A(n) === h;
    }
    function b(n) {
      return A(n) === s;
    }
    function E(n) {
      return A(n) === m;
    }
    function $(n) {
      return A(n) === R;
    }
    O.AsyncMode = o, O.ConcurrentMode = F, O.ContextConsumer = X, O.ContextProvider = J, O.Element = Z, O.ForwardRef = Q, O.Fragment = U, O.Lazy = B, O.Memo = K, O.Portal = N, O.Profiler = G, O.StrictMode = Y, O.Suspense = q, O.isAsyncMode = H, O.isConcurrentMode = e, O.isContextConsumer = r, O.isContextProvider = a, O.isElement = i, O.isForwardRef = c, O.isFragment = l, O.isLazy = p, O.isMemo = y, O.isPortal = u, O.isProfiler = b, O.isStrictMode = E, O.isSuspense = $, O.isValidElementType = j, O.typeOf = A;
  }()), O;
}
var Te;
function xe() {
  return Te || (Te = 1, process.env.NODE_ENV === "production" ? ae.exports = Ie() : ae.exports = Me()), ae.exports;
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
  var t = Object.getOwnPropertySymbols, P = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
  function f(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function m() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var v = {}, d = 0; d < 10; d++)
        v["_" + String.fromCharCode(d)] = d;
      var S = Object.getOwnPropertyNames(v).map(function(T) {
        return v[T];
      });
      if (S.join("") !== "0123456789")
        return !1;
      var _ = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(T) {
        _[T] = T;
      }), Object.keys(Object.assign({}, _)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = m() ? Object.assign : function(s, v) {
    for (var d, S = f(s), _, T = 1; T < arguments.length; T++) {
      d = Object(arguments[T]);
      for (var R in d)
        P.call(d, R) && (S[R] = d[R]);
      if (t) {
        _ = t(d);
        for (var w = 0; w < _.length; w++)
          h.call(d, _[w]) && (S[_[w]] = d[_[w]]);
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
var ce, Re;
function we() {
  return Re || (Re = 1, ce = Function.call.bind(Object.prototype.hasOwnProperty)), ce;
}
var ue, ge;
function Ne() {
  if (ge) return ue;
  ge = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var P = /* @__PURE__ */ de(), h = {}, f = /* @__PURE__ */ we();
    t = function(s) {
      var v = "Warning: " + s;
      typeof console < "u" && console.error(v);
      try {
        throw new Error(v);
      } catch {
      }
    };
  }
  function m(s, v, d, S, _) {
    if (process.env.NODE_ENV !== "production") {
      for (var T in s)
        if (f(s, T)) {
          var R;
          try {
            if (typeof s[T] != "function") {
              var w = Error(
                (S || "React class") + ": " + d + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            R = s[T](v, T, S, d, null, P);
          } catch (I) {
            R = I;
          }
          if (R && !(R instanceof Error) && t(
            (S || "React class") + ": type specification of " + d + " `" + T + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof R + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), R instanceof Error && !(R.message in h)) {
            h[R.message] = !0;
            var C = _ ? _() : "";
            t(
              "Failed " + d + " type: " + R.message + (C ?? "")
            );
          }
        }
    }
  }
  return m.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (h = {});
  }, ue = m, ue;
}
var fe, Oe;
function qe() {
  if (Oe) return fe;
  Oe = 1;
  var t = xe(), P = Ye(), h = /* @__PURE__ */ de(), f = /* @__PURE__ */ we(), m = /* @__PURE__ */ Ne(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(d) {
    var S = "Warning: " + d;
    typeof console < "u" && console.error(S);
    try {
      throw new Error(S);
    } catch {
    }
  });
  function v() {
    return null;
  }
  return fe = function(d, S) {
    var _ = typeof Symbol == "function" && Symbol.iterator, T = "@@iterator";
    function R(e) {
      var r = e && (_ && e[_] || e[T]);
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
    function k(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, a = 0;
      function i(l, p, y, u, b, E, $) {
        if (u = u || w, E = E || y, $ !== h) {
          if (S) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var D = u + ":" + y;
            !r[D] && // Avoid spamming the console because they are often not actionable except for lib authors
            a < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + E + "` prop on `" + u + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[D] = !0, a++);
          }
        }
        return p[y] == null ? l ? p[y] === null ? new x("The " + b + " `" + E + "` is marked as required " + ("in `" + u + "`, but its value is `null`.")) : new x("The " + b + " `" + E + "` is marked as required in " + ("`" + u + "`, but its value is `undefined`.")) : null : e(p, y, u, b, E);
      }
      var c = i.bind(null, !1);
      return c.isRequired = i.bind(null, !0), c;
    }
    function M(e) {
      function r(a, i, c, l, p, y) {
        var u = a[i], b = Y(u);
        if (b !== e) {
          var E = q(u);
          return new x(
            "Invalid " + l + " `" + p + "` of type " + ("`" + E + "` supplied to `" + c + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return k(r);
    }
    function z() {
      return k(v);
    }
    function j(e) {
      function r(a, i, c, l, p) {
        if (typeof e != "function")
          return new x("Property `" + p + "` of component `" + c + "` has invalid PropType notation inside arrayOf.");
        var y = a[i];
        if (!Array.isArray(y)) {
          var u = Y(y);
          return new x("Invalid " + l + " `" + p + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an array."));
        }
        for (var b = 0; b < y.length; b++) {
          var E = e(y, b, c, l, p + "[" + b + "]", h);
          if (E instanceof Error)
            return E;
        }
        return null;
      }
      return k(r);
    }
    function A() {
      function e(r, a, i, c, l) {
        var p = r[a];
        if (!d(p)) {
          var y = Y(p);
          return new x("Invalid " + c + " `" + l + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(e);
    }
    function o() {
      function e(r, a, i, c, l) {
        var p = r[a];
        if (!t.isValidElementType(p)) {
          var y = Y(p);
          return new x("Invalid " + c + " `" + l + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(e);
    }
    function F(e) {
      function r(a, i, c, l, p) {
        if (!(a[i] instanceof e)) {
          var y = e.name || w, u = H(a[i]);
          return new x("Invalid " + l + " `" + p + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return k(r);
    }
    function X(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), v;
      function r(a, i, c, l, p) {
        for (var y = a[i], u = 0; u < e.length; u++)
          if (I(y, e[u]))
            return null;
        var b = JSON.stringify(e, function($, n) {
          var D = q(n);
          return D === "symbol" ? String(n) : n;
        });
        return new x("Invalid " + l + " `" + p + "` of value `" + String(y) + "` " + ("supplied to `" + c + "`, expected one of " + b + "."));
      }
      return k(r);
    }
    function J(e) {
      function r(a, i, c, l, p) {
        if (typeof e != "function")
          return new x("Property `" + p + "` of component `" + c + "` has invalid PropType notation inside objectOf.");
        var y = a[i], u = Y(y);
        if (u !== "object")
          return new x("Invalid " + l + " `" + p + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an object."));
        for (var b in y)
          if (f(y, b)) {
            var E = e(y, b, c, l, p + "." + b, h);
            if (E instanceof Error)
              return E;
          }
        return null;
      }
      return k(r);
    }
    function Z(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), v;
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        if (typeof a != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + V(a) + " at index " + r + "."
          ), v;
      }
      function i(c, l, p, y, u) {
        for (var b = [], E = 0; E < e.length; E++) {
          var $ = e[E], n = $(c, l, p, y, u, h);
          if (n == null)
            return null;
          n.data && f(n.data, "expectedType") && b.push(n.data.expectedType);
        }
        var D = b.length > 0 ? ", expected one of type [" + b.join(", ") + "]" : "";
        return new x("Invalid " + y + " `" + u + "` supplied to " + ("`" + p + "`" + D + "."));
      }
      return k(i);
    }
    function Q() {
      function e(r, a, i, c, l) {
        return N(r[a]) ? null : new x("Invalid " + c + " `" + l + "` supplied to " + ("`" + i + "`, expected a ReactNode."));
      }
      return k(e);
    }
    function U(e, r, a, i, c) {
      return new x(
        (e || "React class") + ": " + r + " type `" + a + "." + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + c + "`."
      );
    }
    function B(e) {
      function r(a, i, c, l, p) {
        var y = a[i], u = Y(y);
        if (u !== "object")
          return new x("Invalid " + l + " `" + p + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        for (var b in e) {
          var E = e[b];
          if (typeof E != "function")
            return U(c, l, p, b, q(E));
          var $ = E(y, b, c, l, p + "." + b, h);
          if ($)
            return $;
        }
        return null;
      }
      return k(r);
    }
    function K(e) {
      function r(a, i, c, l, p) {
        var y = a[i], u = Y(y);
        if (u !== "object")
          return new x("Invalid " + l + " `" + p + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        var b = P({}, a[i], e);
        for (var E in b) {
          var $ = e[E];
          if (f(e, E) && typeof $ != "function")
            return U(c, l, p, E, q($));
          if (!$)
            return new x(
              "Invalid " + l + " `" + p + "` key `" + E + "` supplied to `" + c + "`.\nBad object: " + JSON.stringify(a[i], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var n = $(y, E, c, l, p + "." + E, h);
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
          if (e === null || d(e))
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
                var c = i.value;
                if (c && !N(c[1]))
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
    function V(e) {
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
    function H(e) {
      return !e.constructor || !e.constructor.name ? w : e.constructor.name;
    }
    return C.checkPropTypes = m, C.resetWarningCache = m.resetWarningCache, C.PropTypes = C, C;
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
    function f(v, d, S, _, T, R) {
      if (R !== t) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    f.isRequired = f;
    function m() {
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
      arrayOf: m,
      element: f,
      elementType: f,
      instanceOf: m,
      node: f,
      objectOf: m,
      oneOf: m,
      oneOfType: m,
      shape: m,
      exact: m,
      checkPropTypes: h,
      resetWarningCache: P
    };
    return s.PropTypes = s, s;
  }, le;
}
var Pe;
function We() {
  if (Pe) return oe.exports;
  if (Pe = 1, process.env.NODE_ENV !== "production") {
    var t = xe(), P = !0;
    oe.exports = /* @__PURE__ */ qe()(t.isElement, P);
  } else
    oe.exports = /* @__PURE__ */ De()();
  return oe.exports;
}
var Fe = /* @__PURE__ */ We();
const L = /* @__PURE__ */ Ae(Fe), Le = ({
  title: t,
  subtitle: P,
  searchComponent: h,
  links: f = [],
  className: m,
  ...s
}) => {
  const v = "pgov-hero-homepage", d = [
    v,
    m
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ W.jsxs("div", { className: d, ...s, children: [
    /* @__PURE__ */ W.jsx("div", { className: `${v}__title-container`, children: /* @__PURE__ */ W.jsx("h1", { className: `${v}__title`, children: t }) }),
    /* @__PURE__ */ W.jsx("div", { className: `${v}__search-container`, children: h }),
    (f == null ? void 0 : f.length) > 0 && /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
      P && /* @__PURE__ */ W.jsx("div", { className: `${v}__subtitle-container`, children: /* @__PURE__ */ W.jsx("h2", { className: `${v}__subtitle`, children: P }) }),
      /* @__PURE__ */ W.jsx("div", { className: `${v}__links-container`, children: f.map((S, _) => /* @__PURE__ */ W.jsx(
        "a",
        {
          href: S.href,
          className: `${v}__link`,
          ...S.props,
          children: S.text
        },
        _
      )) })
    ] })
  ] });
};
Le.propTypes = {
  title: L.string.isRequired,
  subtitle: L.string,
  searchComponent: L.node.isRequired,
  links: L.arrayOf(
    L.shape({
      text: L.string.isRequired,
      href: L.string.isRequired,
      props: L.object
    })
  ),
  className: L.string
};
export {
  Le as HeroHomepage
};
//# sourceMappingURL=index.js.map
