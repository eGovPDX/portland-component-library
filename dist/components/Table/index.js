import Y, { useState as ve, useEffect as Ce } from "react";
function Ne(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var oe = { exports: {} }, re = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function Ye() {
  if (be) return re;
  be = 1;
  var t = Symbol.for("react.transitional.element"), b = Symbol.for("react.fragment");
  function f(c, u, s) {
    var v = null;
    if (s !== void 0 && (v = "" + s), u.key !== void 0 && (v = "" + u.key), "key" in u) {
      s = {};
      for (var a in u)
        a !== "key" && (s[a] = u[a]);
    } else s = u;
    return u = s.ref, {
      $$typeof: t,
      type: c,
      key: v,
      ref: u !== void 0 ? u : null,
      props: s
    };
  }
  return re.Fragment = b, re.jsx = f, re.jsxs = f, re;
}
var te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function De() {
  return me || (me = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case C:
          return "Fragment";
        case j:
          return "Profiler";
        case N:
          return "StrictMode";
        case n:
          return "Suspense";
        case U:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case A:
            return "Portal";
          case M:
            return (e.displayName || "Context") + ".Provider";
          case W:
            return (e._context.displayName || "Context") + ".Consumer";
          case I:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case B:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function b(e) {
      return "" + e;
    }
    function f(e) {
      try {
        b(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var i = r.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), b(e);
      }
    }
    function c(e) {
      if (e === C) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === B)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var e = V.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function v(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function a(e, r) {
      function i() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function E() {
      var e = t(this.type);
      return q[e] || (q[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function g(e, r, i, l, d, m, T, _) {
      return i = m.ref, e = {
        $$typeof: k,
        type: e,
        key: r,
        props: m,
        _owner: d
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: E
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
        value: T
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function h(e, r, i, l, d, m, T, _) {
      var p = r.children;
      if (p !== void 0)
        if (l)
          if (ee(p)) {
            for (l = 0; l < p.length; l++)
              w(p[l]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(p);
      if (J.call(r, "key")) {
        p = t(e);
        var R = Object.keys(r).filter(function(D) {
          return D !== "key";
        });
        l = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", X[p + l] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          p,
          R,
          p
        ), X[p + l] = !0);
      }
      if (p = null, i !== void 0 && (f(i), p = "" + i), v(r) && (f(r.key), p = "" + r.key), "key" in r) {
        i = {};
        for (var S in r)
          S !== "key" && (i[S] = r[S]);
      } else i = r;
      return p && a(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), g(
        e,
        p,
        m,
        d,
        u(),
        i,
        T,
        _
      );
    }
    function w(e) {
      typeof e == "object" && e !== null && e.$$typeof === k && e._store && (e._store.validated = 1);
    }
    var P = Y, k = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), W = Symbol.for("react.consumer"), M = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), n = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), V = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, ee = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    P = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var G, q = {}, F = P["react-stack-bottom-frame"].bind(
      P,
      s
    )(), H = L(c(s)), X = {};
    te.Fragment = C, te.jsx = function(e, r, i, l, d) {
      var m = 1e4 > V.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        i,
        !1,
        l,
        d,
        m ? Error("react-stack-top-frame") : F,
        m ? L(c(e)) : H
      );
    }, te.jsxs = function(e, r, i, l, d) {
      var m = 1e4 > V.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        i,
        !0,
        l,
        d,
        m ? Error("react-stack-top-frame") : F,
        m ? L(c(e)) : H
      );
    };
  }()), te;
}
var Ee;
function qe() {
  return Ee || (Ee = 1, process.env.NODE_ENV === "production" ? oe.exports = Ye() : oe.exports = De()), oe.exports;
}
var $ = qe(), ae = { exports: {} }, se = { exports: {} }, O = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function We() {
  if (he) return O;
  he = 1;
  var t = typeof Symbol == "function" && Symbol.for, b = t ? Symbol.for("react.element") : 60103, f = t ? Symbol.for("react.portal") : 60106, c = t ? Symbol.for("react.fragment") : 60107, u = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, v = t ? Symbol.for("react.provider") : 60109, a = t ? Symbol.for("react.context") : 60110, E = t ? Symbol.for("react.async_mode") : 60111, g = t ? Symbol.for("react.concurrent_mode") : 60111, h = t ? Symbol.for("react.forward_ref") : 60112, w = t ? Symbol.for("react.suspense") : 60113, P = t ? Symbol.for("react.suspense_list") : 60120, k = t ? Symbol.for("react.memo") : 60115, A = t ? Symbol.for("react.lazy") : 60116, C = t ? Symbol.for("react.block") : 60121, N = t ? Symbol.for("react.fundamental") : 60117, j = t ? Symbol.for("react.responder") : 60118, W = t ? Symbol.for("react.scope") : 60119;
  function M(n) {
    if (typeof n == "object" && n !== null) {
      var U = n.$$typeof;
      switch (U) {
        case b:
          switch (n = n.type, n) {
            case E:
            case g:
            case c:
            case s:
            case u:
            case w:
              return n;
            default:
              switch (n = n && n.$$typeof, n) {
                case a:
                case h:
                case A:
                case k:
                case v:
                  return n;
                default:
                  return U;
              }
          }
        case f:
          return U;
      }
    }
  }
  function I(n) {
    return M(n) === g;
  }
  return O.AsyncMode = E, O.ConcurrentMode = g, O.ContextConsumer = a, O.ContextProvider = v, O.Element = b, O.ForwardRef = h, O.Fragment = c, O.Lazy = A, O.Memo = k, O.Portal = f, O.Profiler = s, O.StrictMode = u, O.Suspense = w, O.isAsyncMode = function(n) {
    return I(n) || M(n) === E;
  }, O.isConcurrentMode = I, O.isContextConsumer = function(n) {
    return M(n) === a;
  }, O.isContextProvider = function(n) {
    return M(n) === v;
  }, O.isElement = function(n) {
    return typeof n == "object" && n !== null && n.$$typeof === b;
  }, O.isForwardRef = function(n) {
    return M(n) === h;
  }, O.isFragment = function(n) {
    return M(n) === c;
  }, O.isLazy = function(n) {
    return M(n) === A;
  }, O.isMemo = function(n) {
    return M(n) === k;
  }, O.isPortal = function(n) {
    return M(n) === f;
  }, O.isProfiler = function(n) {
    return M(n) === s;
  }, O.isStrictMode = function(n) {
    return M(n) === u;
  }, O.isSuspense = function(n) {
    return M(n) === w;
  }, O.isValidElementType = function(n) {
    return typeof n == "string" || typeof n == "function" || n === c || n === g || n === s || n === u || n === w || n === P || typeof n == "object" && n !== null && (n.$$typeof === A || n.$$typeof === k || n.$$typeof === v || n.$$typeof === a || n.$$typeof === h || n.$$typeof === N || n.$$typeof === j || n.$$typeof === W || n.$$typeof === C);
  }, O.typeOf = M, O;
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
var Te;
function Le() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, b = t ? Symbol.for("react.element") : 60103, f = t ? Symbol.for("react.portal") : 60106, c = t ? Symbol.for("react.fragment") : 60107, u = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, v = t ? Symbol.for("react.provider") : 60109, a = t ? Symbol.for("react.context") : 60110, E = t ? Symbol.for("react.async_mode") : 60111, g = t ? Symbol.for("react.concurrent_mode") : 60111, h = t ? Symbol.for("react.forward_ref") : 60112, w = t ? Symbol.for("react.suspense") : 60113, P = t ? Symbol.for("react.suspense_list") : 60120, k = t ? Symbol.for("react.memo") : 60115, A = t ? Symbol.for("react.lazy") : 60116, C = t ? Symbol.for("react.block") : 60121, N = t ? Symbol.for("react.fundamental") : 60117, j = t ? Symbol.for("react.responder") : 60118, W = t ? Symbol.for("react.scope") : 60119;
    function M(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === c || o === g || o === s || o === u || o === w || o === P || typeof o == "object" && o !== null && (o.$$typeof === A || o.$$typeof === k || o.$$typeof === v || o.$$typeof === a || o.$$typeof === h || o.$$typeof === N || o.$$typeof === j || o.$$typeof === W || o.$$typeof === C);
    }
    function I(o) {
      if (typeof o == "object" && o !== null) {
        var z = o.$$typeof;
        switch (z) {
          case b:
            var ne = o.type;
            switch (ne) {
              case E:
              case g:
              case c:
              case s:
              case u:
              case w:
                return ne;
              default:
                var ye = ne && ne.$$typeof;
                switch (ye) {
                  case a:
                  case h:
                  case A:
                  case k:
                  case v:
                    return ye;
                  default:
                    return z;
                }
            }
          case f:
            return z;
        }
      }
    }
    var n = E, U = g, Z = a, B = v, Q = b, K = h, V = c, J = A, ee = k, L = f, G = s, q = u, F = w, H = !1;
    function X(o) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(o) || I(o) === E;
    }
    function e(o) {
      return I(o) === g;
    }
    function r(o) {
      return I(o) === a;
    }
    function i(o) {
      return I(o) === v;
    }
    function l(o) {
      return typeof o == "object" && o !== null && o.$$typeof === b;
    }
    function d(o) {
      return I(o) === h;
    }
    function m(o) {
      return I(o) === c;
    }
    function T(o) {
      return I(o) === A;
    }
    function _(o) {
      return I(o) === k;
    }
    function p(o) {
      return I(o) === f;
    }
    function R(o) {
      return I(o) === s;
    }
    function S(o) {
      return I(o) === u;
    }
    function D(o) {
      return I(o) === w;
    }
    x.AsyncMode = n, x.ConcurrentMode = U, x.ContextConsumer = Z, x.ContextProvider = B, x.Element = Q, x.ForwardRef = K, x.Fragment = V, x.Lazy = J, x.Memo = ee, x.Portal = L, x.Profiler = G, x.StrictMode = q, x.Suspense = F, x.isAsyncMode = X, x.isConcurrentMode = e, x.isContextConsumer = r, x.isContextProvider = i, x.isElement = l, x.isForwardRef = d, x.isFragment = m, x.isLazy = T, x.isMemo = _, x.isPortal = p, x.isProfiler = R, x.isStrictMode = S, x.isSuspense = D, x.isValidElementType = M, x.typeOf = I;
  }()), x;
}
var _e;
function je() {
  return _e || (_e = 1, process.env.NODE_ENV === "production" ? se.exports = We() : se.exports = Le()), se.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ie, ge;
function Fe() {
  if (ge) return ie;
  ge = 1;
  var t = Object.getOwnPropertySymbols, b = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
  function c(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function u() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var v = {}, a = 0; a < 10; a++)
        v["_" + String.fromCharCode(a)] = a;
      var E = Object.getOwnPropertyNames(v).map(function(h) {
        return v[h];
      });
      if (E.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        g[h] = h;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = u() ? Object.assign : function(s, v) {
    for (var a, E = c(s), g, h = 1; h < arguments.length; h++) {
      a = Object(arguments[h]);
      for (var w in a)
        b.call(a, w) && (E[w] = a[w]);
      if (t) {
        g = t(a);
        for (var P = 0; P < g.length; P++)
          f.call(a, g[P]) && (E[g[P]] = a[g[P]]);
      }
    }
    return E;
  }, ie;
}
var ce, Re;
function pe() {
  if (Re) return ce;
  Re = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ce = t, ce;
}
var ue, Se;
function Ae() {
  return Se || (Se = 1, ue = Function.call.bind(Object.prototype.hasOwnProperty)), ue;
}
var le, we;
function ze() {
  if (we) return le;
  we = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var b = /* @__PURE__ */ pe(), f = {}, c = /* @__PURE__ */ Ae();
    t = function(s) {
      var v = "Warning: " + s;
      typeof console < "u" && console.error(v);
      try {
        throw new Error(v);
      } catch {
      }
    };
  }
  function u(s, v, a, E, g) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in s)
        if (c(s, h)) {
          var w;
          try {
            if (typeof s[h] != "function") {
              var P = Error(
                (E || "React class") + ": " + a + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw P.name = "Invariant Violation", P;
            }
            w = s[h](v, h, E, a, null, b);
          } catch (A) {
            w = A;
          }
          if (w && !(w instanceof Error) && t(
            (E || "React class") + ": type specification of " + a + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof w + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), w instanceof Error && !(w.message in f)) {
            f[w.message] = !0;
            var k = g ? g() : "";
            t(
              "Failed " + a + " type: " + w.message + (k ?? "")
            );
          }
        }
    }
  }
  return u.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (f = {});
  }, le = u, le;
}
var fe, Oe;
function Ue() {
  if (Oe) return fe;
  Oe = 1;
  var t = je(), b = Fe(), f = /* @__PURE__ */ pe(), c = /* @__PURE__ */ Ae(), u = /* @__PURE__ */ ze(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(a) {
    var E = "Warning: " + a;
    typeof console < "u" && console.error(E);
    try {
      throw new Error(E);
    } catch {
    }
  });
  function v() {
    return null;
  }
  return fe = function(a, E) {
    var g = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function w(e) {
      var r = e && (g && e[g] || e[h]);
      if (typeof r == "function")
        return r;
    }
    var P = "<<anonymous>>", k = {
      array: j("array"),
      bigint: j("bigint"),
      bool: j("boolean"),
      func: j("function"),
      number: j("number"),
      object: j("object"),
      string: j("string"),
      symbol: j("symbol"),
      any: W(),
      arrayOf: M,
      element: I(),
      elementType: n(),
      instanceOf: U,
      node: K(),
      objectOf: B,
      oneOf: Z,
      oneOfType: Q,
      shape: J,
      exact: ee
    };
    function A(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    }
    function C(e, r) {
      this.message = e, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    C.prototype = Error.prototype;
    function N(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, i = 0;
      function l(m, T, _, p, R, S, D) {
        if (p = p || P, S = S || _, D !== f) {
          if (E) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var z = p + ":" + _;
            !r[z] && // Avoid spamming the console because they are often not actionable except for lib authors
            i < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + S + "` prop on `" + p + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[z] = !0, i++);
          }
        }
        return T[_] == null ? m ? T[_] === null ? new C("The " + R + " `" + S + "` is marked as required " + ("in `" + p + "`, but its value is `null`.")) : new C("The " + R + " `" + S + "` is marked as required in " + ("`" + p + "`, but its value is `undefined`.")) : null : e(T, _, p, R, S);
      }
      var d = l.bind(null, !1);
      return d.isRequired = l.bind(null, !0), d;
    }
    function j(e) {
      function r(i, l, d, m, T, _) {
        var p = i[l], R = q(p);
        if (R !== e) {
          var S = F(p);
          return new C(
            "Invalid " + m + " `" + T + "` of type " + ("`" + S + "` supplied to `" + d + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return N(r);
    }
    function W() {
      return N(v);
    }
    function M(e) {
      function r(i, l, d, m, T) {
        if (typeof e != "function")
          return new C("Property `" + T + "` of component `" + d + "` has invalid PropType notation inside arrayOf.");
        var _ = i[l];
        if (!Array.isArray(_)) {
          var p = q(_);
          return new C("Invalid " + m + " `" + T + "` of type " + ("`" + p + "` supplied to `" + d + "`, expected an array."));
        }
        for (var R = 0; R < _.length; R++) {
          var S = e(_, R, d, m, T + "[" + R + "]", f);
          if (S instanceof Error)
            return S;
        }
        return null;
      }
      return N(r);
    }
    function I() {
      function e(r, i, l, d, m) {
        var T = r[i];
        if (!a(T)) {
          var _ = q(T);
          return new C("Invalid " + d + " `" + m + "` of type " + ("`" + _ + "` supplied to `" + l + "`, expected a single ReactElement."));
        }
        return null;
      }
      return N(e);
    }
    function n() {
      function e(r, i, l, d, m) {
        var T = r[i];
        if (!t.isValidElementType(T)) {
          var _ = q(T);
          return new C("Invalid " + d + " `" + m + "` of type " + ("`" + _ + "` supplied to `" + l + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return N(e);
    }
    function U(e) {
      function r(i, l, d, m, T) {
        if (!(i[l] instanceof e)) {
          var _ = e.name || P, p = X(i[l]);
          return new C("Invalid " + m + " `" + T + "` of type " + ("`" + p + "` supplied to `" + d + "`, expected ") + ("instance of `" + _ + "`."));
        }
        return null;
      }
      return N(r);
    }
    function Z(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), v;
      function r(i, l, d, m, T) {
        for (var _ = i[l], p = 0; p < e.length; p++)
          if (A(_, e[p]))
            return null;
        var R = JSON.stringify(e, function(D, o) {
          var z = F(o);
          return z === "symbol" ? String(o) : o;
        });
        return new C("Invalid " + m + " `" + T + "` of value `" + String(_) + "` " + ("supplied to `" + d + "`, expected one of " + R + "."));
      }
      return N(r);
    }
    function B(e) {
      function r(i, l, d, m, T) {
        if (typeof e != "function")
          return new C("Property `" + T + "` of component `" + d + "` has invalid PropType notation inside objectOf.");
        var _ = i[l], p = q(_);
        if (p !== "object")
          return new C("Invalid " + m + " `" + T + "` of type " + ("`" + p + "` supplied to `" + d + "`, expected an object."));
        for (var R in _)
          if (c(_, R)) {
            var S = e(_, R, d, m, T + "." + R, f);
            if (S instanceof Error)
              return S;
          }
        return null;
      }
      return N(r);
    }
    function Q(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), v;
      for (var r = 0; r < e.length; r++) {
        var i = e[r];
        if (typeof i != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + H(i) + " at index " + r + "."
          ), v;
      }
      function l(d, m, T, _, p) {
        for (var R = [], S = 0; S < e.length; S++) {
          var D = e[S], o = D(d, m, T, _, p, f);
          if (o == null)
            return null;
          o.data && c(o.data, "expectedType") && R.push(o.data.expectedType);
        }
        var z = R.length > 0 ? ", expected one of type [" + R.join(", ") + "]" : "";
        return new C("Invalid " + _ + " `" + p + "` supplied to " + ("`" + T + "`" + z + "."));
      }
      return N(l);
    }
    function K() {
      function e(r, i, l, d, m) {
        return L(r[i]) ? null : new C("Invalid " + d + " `" + m + "` supplied to " + ("`" + l + "`, expected a ReactNode."));
      }
      return N(e);
    }
    function V(e, r, i, l, d) {
      return new C(
        (e || "React class") + ": " + r + " type `" + i + "." + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + d + "`."
      );
    }
    function J(e) {
      function r(i, l, d, m, T) {
        var _ = i[l], p = q(_);
        if (p !== "object")
          return new C("Invalid " + m + " `" + T + "` of type `" + p + "` " + ("supplied to `" + d + "`, expected `object`."));
        for (var R in e) {
          var S = e[R];
          if (typeof S != "function")
            return V(d, m, T, R, F(S));
          var D = S(_, R, d, m, T + "." + R, f);
          if (D)
            return D;
        }
        return null;
      }
      return N(r);
    }
    function ee(e) {
      function r(i, l, d, m, T) {
        var _ = i[l], p = q(_);
        if (p !== "object")
          return new C("Invalid " + m + " `" + T + "` of type `" + p + "` " + ("supplied to `" + d + "`, expected `object`."));
        var R = b({}, i[l], e);
        for (var S in R) {
          var D = e[S];
          if (c(e, S) && typeof D != "function")
            return V(d, m, T, S, F(D));
          if (!D)
            return new C(
              "Invalid " + m + " `" + T + "` key `" + S + "` supplied to `" + d + "`.\nBad object: " + JSON.stringify(i[l], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var o = D(_, S, d, m, T + "." + S, f);
          if (o)
            return o;
        }
        return null;
      }
      return N(r);
    }
    function L(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(L);
          if (e === null || a(e))
            return !0;
          var r = w(e);
          if (r) {
            var i = r.call(e), l;
            if (r !== e.entries) {
              for (; !(l = i.next()).done; )
                if (!L(l.value))
                  return !1;
            } else
              for (; !(l = i.next()).done; ) {
                var d = l.value;
                if (d && !L(d[1]))
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
    function q(e) {
      var r = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : G(r, e) ? "symbol" : r;
    }
    function F(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var r = q(e);
      if (r === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return r;
    }
    function H(e) {
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
      return !e.constructor || !e.constructor.name ? P : e.constructor.name;
    }
    return k.checkPropTypes = u, k.resetWarningCache = u.resetWarningCache, k.PropTypes = k, k;
  }, fe;
}
var de, xe;
function Ve() {
  if (xe) return de;
  xe = 1;
  var t = /* @__PURE__ */ pe();
  function b() {
  }
  function f() {
  }
  return f.resetWarningCache = b, de = function() {
    function c(v, a, E, g, h, w) {
      if (w !== t) {
        var P = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw P.name = "Invariant Violation", P;
      }
    }
    c.isRequired = c;
    function u() {
      return c;
    }
    var s = {
      array: c,
      bigint: c,
      bool: c,
      func: c,
      number: c,
      object: c,
      string: c,
      symbol: c,
      any: c,
      arrayOf: u,
      element: c,
      elementType: c,
      instanceOf: u,
      node: c,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: f,
      resetWarningCache: b
    };
    return s.PropTypes = s, s;
  }, de;
}
var Pe;
function He() {
  if (Pe) return ae.exports;
  if (Pe = 1, process.env.NODE_ENV !== "production") {
    var t = je(), b = !0;
    ae.exports = /* @__PURE__ */ Ue()(t.isElement, b);
  } else
    ae.exports = /* @__PURE__ */ Ve()();
  return ae.exports;
}
var Be = /* @__PURE__ */ He();
const y = /* @__PURE__ */ Ne(Be), ke = ({
  children: t,
  bordered: b = !0,
  striped: f = !1,
  scrollable: c = !1,
  stickyHeader: u = !1,
  stacked: s = !1,
  className: v = "",
  sortConfig: a = null,
  onSort: E = null,
  ...g
}) => {
  const [h, w] = ve(!1), [P, k] = ve([]);
  Ce(() => {
    const j = () => {
      const W = s || window.innerWidth < 640;
      w(W);
    };
    return j(), window.addEventListener("resize", j), () => window.removeEventListener("resize", j);
  }, [s]);
  const A = "usa-table", C = [
    A,
    !b && `${A}--borderless`,
    f && `${A}--striped`,
    u && `${A}--sticky-header`,
    h && `${A}--stacked`,
    v
  ].filter(Boolean).join(" "), N = /* @__PURE__ */ $.jsx(
    "table",
    {
      className: C,
      role: "table",
      ...g,
      children: Y.Children.map(t, (j) => {
        var W, M, I, n;
        return Y.isValidElement(j) ? ((W = j.type) == null ? void 0 : W.displayName) === "TableHeader" || ((M = j.props) == null ? void 0 : M.role) === "rowgroup" ? Y.cloneElement(j, {
          sortConfig: a,
          onSort: E,
          isStackedView: h,
          onHeadersExtracted: k
        }) : ((I = j.type) == null ? void 0 : I.displayName) === "TableBody" || ((n = j.props) == null ? void 0 : n.role) === "rowgroup" ? Y.cloneElement(j, {
          isStackedView: h,
          headers: P
        }) : j : j;
      })
    }
  );
  return c && !h ? /* @__PURE__ */ $.jsx("div", { className: `${A}--scrollable`, tabIndex: "0", role: "region", "aria-label": "Scrollable table", children: N }) : N;
};
ke.propTypes = {
  /** Table content including TableCaption, TableHeader, and TableBody components */
  children: y.node.isRequired,
  /** Whether to display table borders */
  bordered: y.bool,
  /** Whether to display alternating row colors for better readability */
  striped: y.bool,
  /** Whether the table should be horizontally scrollable on smaller screens */
  scrollable: y.bool,
  /** Whether the table header should stick to the top when scrolling vertically */
  stickyHeader: y.bool,
  /** Whether to force stacked layout (automatically enabled on mobile devices) */
  stacked: y.bool,
  /** Additional CSS classes to apply to the table */
  className: y.string,
  /** Configuration object for table sorting */
  sortConfig: y.shape({
    column: y.string,
    direction: y.oneOf(["asc", "desc"])
  }),
  /** Callback function called when a sortable column header is clicked */
  onSort: y.func
};
ke.defaultProps = {
  bordered: !0,
  striped: !1,
  scrollable: !1,
  stickyHeader: !1,
  stacked: !1,
  className: "",
  sortConfig: null,
  onSort: null
};
const Ie = ({
  children: t,
  sortConfig: b,
  onSort: f,
  isStackedView: c,
  onHeadersExtracted: u,
  ...s
}) => (Ce(() => {
  if (c && u) {
    const v = [];
    Y.Children.forEach(t, (a) => {
      Y.isValidElement(a) && Y.Children.forEach(a.props.children, (E) => {
        Y.isValidElement(E) && v.push(E.props.children);
      });
    }), u(v);
  }
}, [t, c, u]), c ? null : /* @__PURE__ */ $.jsx("thead", { ...s, children: Y.Children.map(t, (v) => Y.isValidElement(v) ? Y.cloneElement(v, {
  sortConfig: b,
  onSort: f
}) : v) }));
Ie.displayName = "TableHeader";
Ie.propTypes = {
  children: y.node.isRequired,
  sortConfig: y.shape({
    column: y.string,
    direction: y.oneOf(["asc", "desc"])
  }),
  onSort: y.func,
  isStackedView: y.bool,
  onHeadersExtracted: y.func
};
const $e = ({ direction: t, className: b = "" }) => {
  const f = /* @__PURE__ */ $.jsxs(
    "svg",
    {
      className: b,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ $.jsx(
          "path",
          {
            d: "M7 10l5 5 5-5H7z",
            fill: "currentColor",
            opacity: !t || t === "asc" ? 0.3 : 1
          }
        ),
        /* @__PURE__ */ $.jsx(
          "path",
          {
            d: "M7 14l5-5 5 5H7z",
            fill: "currentColor",
            opacity: !t || t === "desc" ? 0.3 : 1
          }
        )
      ]
    }
  ), c = /* @__PURE__ */ $.jsx(
    "svg",
    {
      className: b,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: /* @__PURE__ */ $.jsx(
        "path",
        {
          d: "M7 10l5 5 5-5H7z",
          fill: "currentColor"
        }
      )
    }
  ), u = /* @__PURE__ */ $.jsx(
    "svg",
    {
      className: b,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: /* @__PURE__ */ $.jsx(
        "path",
        {
          d: "M7 14l5-5 5 5H7z",
          fill: "currentColor"
        }
      )
    }
  );
  return t ? t === "asc" ? u : c : f;
};
$e.propTypes = {
  direction: y.oneOf(["asc", "desc", null]),
  className: y.string
};
const Je = ({
  children: t,
  sortKey: b,
  sortConfig: f,
  onSort: c,
  scope: u = "col",
  className: s = "",
  ...v
}) => {
  const a = b && c, E = a && (f == null ? void 0 : f.column) === b, g = E ? f == null ? void 0 : f.direction : null, h = () => {
    a && c(b, E && g === "asc" ? "desc" : "asc");
  }, w = (A) => {
    a && (A.key === "Enter" || A.key === " ") && (A.preventDefault(), h());
  }, P = [
    "usa-table__header-cell",
    E && "usa-table__header-cell--sorted",
    s
  ].filter(Boolean).join(" "), k = E ? g === "asc" ? "ascending" : "descending" : null;
  return /* @__PURE__ */ $.jsx(
    "th",
    {
      scope: u,
      className: P,
      onClick: a ? h : void 0,
      onKeyDown: a ? w : void 0,
      tabIndex: a ? 0 : void 0,
      role: a ? "columnheader button" : "columnheader",
      "aria-sort": k,
      "aria-label": a ? `${t}, activate to sort column` : void 0,
      ...v,
      children: /* @__PURE__ */ $.jsxs("div", { className: "usa-table__header-cell-content", children: [
        t,
        a && /* @__PURE__ */ $.jsx(
          $e,
          {
            direction: g,
            className: "usa-table__sort-icon"
          }
        )
      ] })
    }
  );
};
Je.propTypes = {
  children: y.node.isRequired,
  sortKey: y.string,
  sortConfig: y.shape({
    column: y.string,
    direction: y.oneOf(["asc", "desc"])
  }),
  onSort: y.func,
  scope: y.string,
  className: y.string
};
const Me = ({
  children: t,
  isStackedView: b,
  headers: f = [],
  ...c
}) => /* @__PURE__ */ $.jsx("tbody", { ...c, children: Y.Children.map(t, (u, s) => Y.isValidElement(u) ? Y.cloneElement(u, {
  isStackedView: b,
  headers: f,
  rowIndex: s
}) : u) });
Me.displayName = "TableBody";
Me.propTypes = {
  children: y.node.isRequired,
  isStackedView: y.bool,
  headers: y.arrayOf(y.string)
};
const Ge = ({
  children: t,
  isStackedView: b,
  headers: f = [],
  rowIndex: c,
  sortConfig: u,
  onSort: s,
  ...v
}) => b ? /* @__PURE__ */ $.jsx("tr", { className: "usa-table__row--stacked", ...v, children: /* @__PURE__ */ $.jsx("td", { className: "usa-table__cell--stacked", children: Y.Children.map(t, (a, E) => {
  if (!Y.isValidElement(a)) return a;
  const g = f[E] || "";
  return /* @__PURE__ */ $.jsxs("div", { className: "usa-table__cell-group--stacked", children: [
    g && /* @__PURE__ */ $.jsx("div", { className: "usa-table__header--stacked", children: g }),
    /* @__PURE__ */ $.jsx("div", { className: "usa-table__cell-content--stacked", children: a.props.children })
  ] }, E);
}) }) }) : /* @__PURE__ */ $.jsx("tr", { ...v, children: Y.Children.map(t, (a) => {
  var E;
  return Y.isValidElement(a) && ((E = a.type) == null ? void 0 : E.name) === "TableHeaderCell" ? Y.cloneElement(a, {
    sortConfig: u,
    onSort: s
  }) : a;
}) });
Ge.propTypes = {
  children: y.node.isRequired,
  isStackedView: y.bool,
  headers: y.arrayOf(y.string),
  rowIndex: y.number,
  sortConfig: y.shape({
    column: y.string,
    direction: y.oneOf(["asc", "desc"])
  }),
  onSort: y.func
};
const Xe = ({
  children: t,
  className: b = "",
  header: f = !1,
  scope: c = "row",
  ...u
}) => {
  const s = [
    "usa-table__cell",
    b
  ].filter(Boolean).join(" ");
  return f ? /* @__PURE__ */ $.jsx(
    "th",
    {
      scope: c,
      className: s,
      ...u,
      children: t
    }
  ) : /* @__PURE__ */ $.jsx(
    "td",
    {
      className: s,
      ...u,
      children: t
    }
  );
};
Xe.propTypes = {
  children: y.node,
  className: y.string,
  header: y.bool,
  scope: y.string
};
const Ze = ({
  children: t,
  className: b = "",
  ...f
}) => {
  const c = [
    "usa-table__caption",
    b
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ $.jsx(
    "caption",
    {
      className: c,
      ...f,
      children: t
    }
  );
};
Ze.propTypes = {
  children: y.node.isRequired,
  className: y.string
};
export {
  ke as Table,
  Me as TableBody,
  Ze as TableCaption,
  Xe as TableCell,
  Ie as TableHeader,
  Je as TableHeaderCell,
  Ge as TableRow
};
//# sourceMappingURL=index.js.map
