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
  function T(d, p, s) {
    var h = null;
    if (s !== void 0 && (h = "" + s), p.key !== void 0 && (h = "" + p.key), "key" in p) {
      s = {};
      for (var f in p)
        f !== "key" && (s[f] = p[f]);
    } else s = p;
    return p = s.ref, {
      $$typeof: t,
      type: d,
      key: h,
      ref: p !== void 0 ? p : null,
      props: s
    };
  }
  return ee.Fragment = C, ee.jsx = T, ee.jsxs = T, ee;
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
        case _:
          return "Fragment";
        case $:
          return "Profiler";
        case j:
          return "StrictMode";
        case n:
          return "Suspense";
        case q:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case A:
            return "Portal";
          case k:
            return (e.displayName || "Context") + ".Provider";
          case U:
            return (e._context.displayName || "Context") + ".Consumer";
          case I:
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
    function T(e) {
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
      if (e === _) return "<>";
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
      var e = z.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function h(e) {
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
    function S() {
      var e = t(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function g(e, r, a, i, c, l, v, y) {
      return a = l.ref, e = {
        $$typeof: w,
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
        value: v
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: y
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function b(e, r, a, i, c, l, v, y) {
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
      if (u = null, a !== void 0 && (T(a), u = "" + a), h(r) && (T(r.key), u = "" + r.key), "key" in r) {
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
        p(),
        a,
        v,
        y
      );
    }
    function R(e) {
      typeof e == "object" && e !== null && e.$$typeof === w && e._store && (e._store.validated = 1);
    }
    var P = Ce, w = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), k = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), n = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), z = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, K = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    P = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var G, N = {}, W = P["react-stack-bottom-frame"].bind(
      P,
      s
    )(), V = D(d(s)), X = {};
    re.Fragment = _, re.jsx = function(e, r, a, i, c) {
      var l = 1e4 > z.recentlyCreatedOwnerStacks++;
      return b(
        e,
        r,
        a,
        !1,
        i,
        c,
        l ? Error("react-stack-top-frame") : W,
        l ? D(d(e)) : V
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
        l ? Error("react-stack-top-frame") : W,
        l ? D(d(e)) : V
      );
    };
  }()), re;
}
var be;
function Ie() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? ne.exports = je() : ne.exports = ke()), ne.exports;
}
var L = Ie(), oe = { exports: {} }, ae = { exports: {} }, O = {};
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
  if (me) return O;
  me = 1;
  var t = typeof Symbol == "function" && Symbol.for, C = t ? Symbol.for("react.element") : 60103, T = t ? Symbol.for("react.portal") : 60106, d = t ? Symbol.for("react.fragment") : 60107, p = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, h = t ? Symbol.for("react.provider") : 60109, f = t ? Symbol.for("react.context") : 60110, S = t ? Symbol.for("react.async_mode") : 60111, g = t ? Symbol.for("react.concurrent_mode") : 60111, b = t ? Symbol.for("react.forward_ref") : 60112, R = t ? Symbol.for("react.suspense") : 60113, P = t ? Symbol.for("react.suspense_list") : 60120, w = t ? Symbol.for("react.memo") : 60115, A = t ? Symbol.for("react.lazy") : 60116, _ = t ? Symbol.for("react.block") : 60121, j = t ? Symbol.for("react.fundamental") : 60117, $ = t ? Symbol.for("react.responder") : 60118, U = t ? Symbol.for("react.scope") : 60119;
  function k(n) {
    if (typeof n == "object" && n !== null) {
      var q = n.$$typeof;
      switch (q) {
        case C:
          switch (n = n.type, n) {
            case S:
            case g:
            case d:
            case s:
            case p:
            case R:
              return n;
            default:
              switch (n = n && n.$$typeof, n) {
                case f:
                case b:
                case A:
                case w:
                case h:
                  return n;
                default:
                  return q;
              }
          }
        case T:
          return q;
      }
    }
  }
  function I(n) {
    return k(n) === g;
  }
  return O.AsyncMode = S, O.ConcurrentMode = g, O.ContextConsumer = f, O.ContextProvider = h, O.Element = C, O.ForwardRef = b, O.Fragment = d, O.Lazy = A, O.Memo = w, O.Portal = T, O.Profiler = s, O.StrictMode = p, O.Suspense = R, O.isAsyncMode = function(n) {
    return I(n) || k(n) === S;
  }, O.isConcurrentMode = I, O.isContextConsumer = function(n) {
    return k(n) === f;
  }, O.isContextProvider = function(n) {
    return k(n) === h;
  }, O.isElement = function(n) {
    return typeof n == "object" && n !== null && n.$$typeof === C;
  }, O.isForwardRef = function(n) {
    return k(n) === b;
  }, O.isFragment = function(n) {
    return k(n) === d;
  }, O.isLazy = function(n) {
    return k(n) === A;
  }, O.isMemo = function(n) {
    return k(n) === w;
  }, O.isPortal = function(n) {
    return k(n) === T;
  }, O.isProfiler = function(n) {
    return k(n) === s;
  }, O.isStrictMode = function(n) {
    return k(n) === p;
  }, O.isSuspense = function(n) {
    return k(n) === R;
  }, O.isValidElementType = function(n) {
    return typeof n == "string" || typeof n == "function" || n === d || n === g || n === s || n === p || n === R || n === P || typeof n == "object" && n !== null && (n.$$typeof === A || n.$$typeof === w || n.$$typeof === h || n.$$typeof === f || n.$$typeof === b || n.$$typeof === j || n.$$typeof === $ || n.$$typeof === U || n.$$typeof === _);
  }, O.typeOf = k, O;
}
var x = {};
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
    var t = typeof Symbol == "function" && Symbol.for, C = t ? Symbol.for("react.element") : 60103, T = t ? Symbol.for("react.portal") : 60106, d = t ? Symbol.for("react.fragment") : 60107, p = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, h = t ? Symbol.for("react.provider") : 60109, f = t ? Symbol.for("react.context") : 60110, S = t ? Symbol.for("react.async_mode") : 60111, g = t ? Symbol.for("react.concurrent_mode") : 60111, b = t ? Symbol.for("react.forward_ref") : 60112, R = t ? Symbol.for("react.suspense") : 60113, P = t ? Symbol.for("react.suspense_list") : 60120, w = t ? Symbol.for("react.memo") : 60115, A = t ? Symbol.for("react.lazy") : 60116, _ = t ? Symbol.for("react.block") : 60121, j = t ? Symbol.for("react.fundamental") : 60117, $ = t ? Symbol.for("react.responder") : 60118, U = t ? Symbol.for("react.scope") : 60119;
    function k(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === d || o === g || o === s || o === p || o === R || o === P || typeof o == "object" && o !== null && (o.$$typeof === A || o.$$typeof === w || o.$$typeof === h || o.$$typeof === f || o.$$typeof === b || o.$$typeof === j || o.$$typeof === $ || o.$$typeof === U || o.$$typeof === _);
    }
    function I(o) {
      if (typeof o == "object" && o !== null) {
        var F = o.$$typeof;
        switch (F) {
          case C:
            var te = o.type;
            switch (te) {
              case S:
              case g:
              case d:
              case s:
              case p:
              case R:
                return te;
              default:
                var pe = te && te.$$typeof;
                switch (pe) {
                  case f:
                  case b:
                  case A:
                  case w:
                  case h:
                    return pe;
                  default:
                    return F;
                }
            }
          case T:
            return F;
        }
      }
    }
    var n = S, q = g, H = f, J = h, Z = C, Q = b, z = d, B = A, K = w, D = T, G = s, N = p, W = R, V = !1;
    function X(o) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(o) || I(o) === S;
    }
    function e(o) {
      return I(o) === g;
    }
    function r(o) {
      return I(o) === f;
    }
    function a(o) {
      return I(o) === h;
    }
    function i(o) {
      return typeof o == "object" && o !== null && o.$$typeof === C;
    }
    function c(o) {
      return I(o) === b;
    }
    function l(o) {
      return I(o) === d;
    }
    function v(o) {
      return I(o) === A;
    }
    function y(o) {
      return I(o) === w;
    }
    function u(o) {
      return I(o) === T;
    }
    function m(o) {
      return I(o) === s;
    }
    function E(o) {
      return I(o) === p;
    }
    function M(o) {
      return I(o) === R;
    }
    x.AsyncMode = n, x.ConcurrentMode = q, x.ContextConsumer = H, x.ContextProvider = J, x.Element = Z, x.ForwardRef = Q, x.Fragment = z, x.Lazy = B, x.Memo = K, x.Portal = D, x.Profiler = G, x.StrictMode = N, x.Suspense = W, x.isAsyncMode = X, x.isConcurrentMode = e, x.isContextConsumer = r, x.isContextProvider = a, x.isElement = i, x.isForwardRef = c, x.isFragment = l, x.isLazy = v, x.isMemo = y, x.isPortal = u, x.isProfiler = m, x.isStrictMode = E, x.isSuspense = M, x.isValidElementType = k, x.typeOf = I;
  }()), x;
}
var he;
function Pe() {
  return he || (he = 1, process.env.NODE_ENV === "production" ? ae.exports = $e() : ae.exports = Me()), ae.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ie, Te;
function Ye() {
  if (Te) return ie;
  Te = 1;
  var t = Object.getOwnPropertySymbols, C = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable;
  function d(s) {
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
      for (var h = {}, f = 0; f < 10; f++)
        h["_" + String.fromCharCode(f)] = f;
      var S = Object.getOwnPropertyNames(h).map(function(b) {
        return h[b];
      });
      if (S.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(b) {
        g[b] = b;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = p() ? Object.assign : function(s, h) {
    for (var f, S = d(s), g, b = 1; b < arguments.length; b++) {
      f = Object(arguments[b]);
      for (var R in f)
        C.call(f, R) && (S[R] = f[R]);
      if (t) {
        g = t(f);
        for (var P = 0; P < g.length; P++)
          T.call(f, g[P]) && (S[g[P]] = f[g[P]]);
      }
    }
    return S;
  }, ie;
}
var se, Re;
function de() {
  if (Re) return se;
  Re = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return se = t, se;
}
var ce, _e;
function we() {
  return _e || (_e = 1, ce = Function.call.bind(Object.prototype.hasOwnProperty)), ce;
}
var ue, ge;
function Ne() {
  if (ge) return ue;
  ge = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var C = /* @__PURE__ */ de(), T = {}, d = /* @__PURE__ */ we();
    t = function(s) {
      var h = "Warning: " + s;
      typeof console < "u" && console.error(h);
      try {
        throw new Error(h);
      } catch {
      }
    };
  }
  function p(s, h, f, S, g) {
    if (process.env.NODE_ENV !== "production") {
      for (var b in s)
        if (d(s, b)) {
          var R;
          try {
            if (typeof s[b] != "function") {
              var P = Error(
                (S || "React class") + ": " + f + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw P.name = "Invariant Violation", P;
            }
            R = s[b](h, b, S, f, null, C);
          } catch (A) {
            R = A;
          }
          if (R && !(R instanceof Error) && t(
            (S || "React class") + ": type specification of " + f + " `" + b + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof R + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), R instanceof Error && !(R.message in T)) {
            T[R.message] = !0;
            var w = g ? g() : "";
            t(
              "Failed " + f + " type: " + R.message + (w ?? "")
            );
          }
        }
    }
  }
  return p.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (T = {});
  }, ue = p, ue;
}
var fe, Oe;
function qe() {
  if (Oe) return fe;
  Oe = 1;
  var t = Pe(), C = Ye(), T = /* @__PURE__ */ de(), d = /* @__PURE__ */ we(), p = /* @__PURE__ */ Ne(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(f) {
    var S = "Warning: " + f;
    typeof console < "u" && console.error(S);
    try {
      throw new Error(S);
    } catch {
    }
  });
  function h() {
    return null;
  }
  return fe = function(f, S) {
    var g = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
    function R(e) {
      var r = e && (g && e[g] || e[b]);
      if (typeof r == "function")
        return r;
    }
    var P = "<<anonymous>>", w = {
      array: $("array"),
      bigint: $("bigint"),
      bool: $("boolean"),
      func: $("function"),
      number: $("number"),
      object: $("object"),
      string: $("string"),
      symbol: $("symbol"),
      any: U(),
      arrayOf: k,
      element: I(),
      elementType: n(),
      instanceOf: q,
      node: Q(),
      objectOf: J,
      oneOf: H,
      oneOfType: Z,
      shape: B,
      exact: K
    };
    function A(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    }
    function _(e, r) {
      this.message = e, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    _.prototype = Error.prototype;
    function j(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, a = 0;
      function i(l, v, y, u, m, E, M) {
        if (u = u || P, E = E || y, M !== T) {
          if (S) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var F = u + ":" + y;
            !r[F] && // Avoid spamming the console because they are often not actionable except for lib authors
            a < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + E + "` prop on `" + u + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[F] = !0, a++);
          }
        }
        return v[y] == null ? l ? v[y] === null ? new _("The " + m + " `" + E + "` is marked as required " + ("in `" + u + "`, but its value is `null`.")) : new _("The " + m + " `" + E + "` is marked as required in " + ("`" + u + "`, but its value is `undefined`.")) : null : e(v, y, u, m, E);
      }
      var c = i.bind(null, !1);
      return c.isRequired = i.bind(null, !0), c;
    }
    function $(e) {
      function r(a, i, c, l, v, y) {
        var u = a[i], m = N(u);
        if (m !== e) {
          var E = W(u);
          return new _(
            "Invalid " + l + " `" + v + "` of type " + ("`" + E + "` supplied to `" + c + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return j(r);
    }
    function U() {
      return j(h);
    }
    function k(e) {
      function r(a, i, c, l, v) {
        if (typeof e != "function")
          return new _("Property `" + v + "` of component `" + c + "` has invalid PropType notation inside arrayOf.");
        var y = a[i];
        if (!Array.isArray(y)) {
          var u = N(y);
          return new _("Invalid " + l + " `" + v + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an array."));
        }
        for (var m = 0; m < y.length; m++) {
          var E = e(y, m, c, l, v + "[" + m + "]", T);
          if (E instanceof Error)
            return E;
        }
        return null;
      }
      return j(r);
    }
    function I() {
      function e(r, a, i, c, l) {
        var v = r[a];
        if (!f(v)) {
          var y = N(v);
          return new _("Invalid " + c + " `" + l + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected a single ReactElement."));
        }
        return null;
      }
      return j(e);
    }
    function n() {
      function e(r, a, i, c, l) {
        var v = r[a];
        if (!t.isValidElementType(v)) {
          var y = N(v);
          return new _("Invalid " + c + " `" + l + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return j(e);
    }
    function q(e) {
      function r(a, i, c, l, v) {
        if (!(a[i] instanceof e)) {
          var y = e.name || P, u = X(a[i]);
          return new _("Invalid " + l + " `" + v + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return j(r);
    }
    function H(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), h;
      function r(a, i, c, l, v) {
        for (var y = a[i], u = 0; u < e.length; u++)
          if (A(y, e[u]))
            return null;
        var m = JSON.stringify(e, function(M, o) {
          var F = W(o);
          return F === "symbol" ? String(o) : o;
        });
        return new _("Invalid " + l + " `" + v + "` of value `" + String(y) + "` " + ("supplied to `" + c + "`, expected one of " + m + "."));
      }
      return j(r);
    }
    function J(e) {
      function r(a, i, c, l, v) {
        if (typeof e != "function")
          return new _("Property `" + v + "` of component `" + c + "` has invalid PropType notation inside objectOf.");
        var y = a[i], u = N(y);
        if (u !== "object")
          return new _("Invalid " + l + " `" + v + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an object."));
        for (var m in y)
          if (d(y, m)) {
            var E = e(y, m, c, l, v + "." + m, T);
            if (E instanceof Error)
              return E;
          }
        return null;
      }
      return j(r);
    }
    function Z(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), h;
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        if (typeof a != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + V(a) + " at index " + r + "."
          ), h;
      }
      function i(c, l, v, y, u) {
        for (var m = [], E = 0; E < e.length; E++) {
          var M = e[E], o = M(c, l, v, y, u, T);
          if (o == null)
            return null;
          o.data && d(o.data, "expectedType") && m.push(o.data.expectedType);
        }
        var F = m.length > 0 ? ", expected one of type [" + m.join(", ") + "]" : "";
        return new _("Invalid " + y + " `" + u + "` supplied to " + ("`" + v + "`" + F + "."));
      }
      return j(i);
    }
    function Q() {
      function e(r, a, i, c, l) {
        return D(r[a]) ? null : new _("Invalid " + c + " `" + l + "` supplied to " + ("`" + i + "`, expected a ReactNode."));
      }
      return j(e);
    }
    function z(e, r, a, i, c) {
      return new _(
        (e || "React class") + ": " + r + " type `" + a + "." + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + c + "`."
      );
    }
    function B(e) {
      function r(a, i, c, l, v) {
        var y = a[i], u = N(y);
        if (u !== "object")
          return new _("Invalid " + l + " `" + v + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        for (var m in e) {
          var E = e[m];
          if (typeof E != "function")
            return z(c, l, v, m, W(E));
          var M = E(y, m, c, l, v + "." + m, T);
          if (M)
            return M;
        }
        return null;
      }
      return j(r);
    }
    function K(e) {
      function r(a, i, c, l, v) {
        var y = a[i], u = N(y);
        if (u !== "object")
          return new _("Invalid " + l + " `" + v + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        var m = C({}, a[i], e);
        for (var E in m) {
          var M = e[E];
          if (d(e, E) && typeof M != "function")
            return z(c, l, v, E, W(M));
          if (!M)
            return new _(
              "Invalid " + l + " `" + v + "` key `" + E + "` supplied to `" + c + "`.\nBad object: " + JSON.stringify(a[i], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var o = M(y, E, c, l, v + "." + E, T);
          if (o)
            return o;
        }
        return null;
      }
      return j(r);
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
          if (e === null || f(e))
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
    function X(e) {
      return !e.constructor || !e.constructor.name ? P : e.constructor.name;
    }
    return w.checkPropTypes = p, w.resetWarningCache = p.resetWarningCache, w.PropTypes = w, w;
  }, fe;
}
var le, xe;
function De() {
  if (xe) return le;
  xe = 1;
  var t = /* @__PURE__ */ de();
  function C() {
  }
  function T() {
  }
  return T.resetWarningCache = C, le = function() {
    function d(h, f, S, g, b, R) {
      if (R !== t) {
        var P = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw P.name = "Invariant Violation", P;
      }
    }
    d.isRequired = d;
    function p() {
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
      arrayOf: p,
      element: d,
      elementType: d,
      instanceOf: p,
      node: d,
      objectOf: p,
      oneOf: p,
      oneOfType: p,
      shape: p,
      exact: p,
      checkPropTypes: T,
      resetWarningCache: C
    };
    return s.PropTypes = s, s;
  }, le;
}
var Se;
function We() {
  if (Se) return oe.exports;
  if (Se = 1, process.env.NODE_ENV !== "production") {
    var t = Pe(), C = !0;
    oe.exports = /* @__PURE__ */ qe()(t.isElement, C);
  } else
    oe.exports = /* @__PURE__ */ De()();
  return oe.exports;
}
var Fe = /* @__PURE__ */ We();
const Y = /* @__PURE__ */ Ae(Fe), Le = ({
  name: t,
  title: C,
  description: T,
  options: d,
  selectedValues: p = [],
  onChange: s,
  tiled: h = !1,
  required: f = !1,
  errorMessage: S,
  className: g
}) => {
  const b = f && S, R = [
    "usa-fieldset",
    "checkbox-group",
    h ? "checkbox-group--tiled" : "",
    b ? "checkbox-group--error" : "",
    g
  ].filter(Boolean).join(" "), P = (w, A) => {
    let _;
    A ? _ = [...p, w] : _ = p.filter((j) => j !== w), s(_);
  };
  return /* @__PURE__ */ L.jsxs("fieldset", { className: R, children: [
    /* @__PURE__ */ L.jsxs("legend", { className: "usa-legend", children: [
      C,
      f && /* @__PURE__ */ L.jsx("span", { className: "checkbox-required-asterisk", children: " *" })
    ] }),
    T && /* @__PURE__ */ L.jsx("p", { className: "checkbox-description", children: T }),
    b && /* @__PURE__ */ L.jsx("p", { className: "checkbox-error-message", children: S }),
    /* @__PURE__ */ L.jsx("div", { className: "checkbox-options-wrapper", children: d.map((w) => {
      const { value: A, labelText: _, labelDescription: j, disabled: $ } = w, U = p.includes(A), k = `${t}-${A}`, I = [
        "usa-checkbox",
        $ ? "usa-checkbox--disabled" : ""
      ].filter(Boolean).join(" "), n = [
        "usa-checkbox__input",
        h ? "usa-checkbox__input--tile" : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ L.jsxs("div", { className: I, children: [
        /* @__PURE__ */ L.jsx(
          "input",
          {
            className: n,
            type: "checkbox",
            id: k,
            name: t,
            value: A,
            checked: U,
            onChange: (q) => P(A, q.target.checked),
            disabled: $
          }
        ),
        /* @__PURE__ */ L.jsxs("label", { className: "usa-checkbox__label", htmlFor: k, children: [
          _,
          j && /* @__PURE__ */ L.jsx("span", { className: "usa-checkbox__label-description", children: j })
        ] })
      ] }, A);
    }) })
  ] });
};
Le.propTypes = {
  /**
   * The name for the checkbox group.
   */
  name: Y.string.isRequired,
  /**
   * The title for the checkbox group.
   */
  title: Y.string.isRequired,
  /**
   * Optional description for the checkbox group.
   */
  description: Y.string,
  /**
   * Array of checkbox options.
   */
  options: Y.arrayOf(
    Y.shape({
      value: Y.string.isRequired,
      labelText: Y.string.isRequired,
      labelDescription: Y.string,
      disabled: Y.bool
    })
  ).isRequired,
  /**
   * Array of currently selected values.
   */
  selectedValues: Y.arrayOf(Y.string),
  /**
   * Callback function when checkbox selection changes.
   */
  onChange: Y.func.isRequired,
  /**
   * If `true`, the tiled variant is used.
   */
  tiled: Y.bool,
  /**
   * If `true`, the checkbox group is required.
   */
  required: Y.bool,
  /**
   * The error message to display when required and no option is selected.
   */
  errorMessage: Y.string,
  /**
   * Additional classes for the component.
   */
  className: Y.string
};
export {
  Le as Checkbox
};
//# sourceMappingURL=index.js.map
