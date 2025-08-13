import $e, { useState as Ie, useEffect as Me } from "react";
function Ne(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var te = { exports: {} }, re = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function Ye() {
  if (he) return re;
  he = 1;
  var o = Symbol.for("react.transitional.element"), y = Symbol.for("react.fragment");
  function v(s, d, i) {
    var m = null;
    if (i !== void 0 && (m = "" + i), d.key !== void 0 && (m = "" + d.key), "key" in d) {
      i = {};
      for (var l in d)
        l !== "key" && (i[l] = d[l]);
    } else i = d;
    return d = i.ref, {
      $$typeof: o,
      type: s,
      key: m,
      ref: d !== void 0 ? d : null,
      props: i
    };
  }
  return re.Fragment = y, re.jsx = v, re.jsxs = v, re;
}
var oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function qe() {
  return be || (be = 1, process.env.NODE_ENV !== "production" && function() {
    function o(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case C:
          return "Fragment";
        case N:
          return "Profiler";
        case $:
          return "StrictMode";
        case t:
          return "Suspense";
        case W:
          return "SuspenseList";
        case Q:
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
          case F:
            return (e._context.displayName || "Context") + ".Consumer";
          case V:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : o(e.type) || "Memo";
          case B:
            r = e._payload, e = e._init;
            try {
              return o(e(r));
            } catch {
            }
        }
      return null;
    }
    function y(e) {
      return "" + e;
    }
    function v(e) {
      try {
        y(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, c = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), y(e);
      }
    }
    function s(e) {
      if (e === C) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === B)
        return "<...>";
      try {
        var r = o(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function d() {
      var e = L.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function l(e, r) {
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
    function O() {
      var e = o(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function b(e, r, a, c, u, p, g, h) {
      return a = p.ref, e = {
        $$typeof: j,
        type: e,
        key: r,
        props: p,
        _owner: u
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: O
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
        value: g
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: h
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function R(e, r, a, c, u, p, g, h) {
      var f = r.children;
      if (f !== void 0)
        if (c)
          if (ee(f)) {
            for (c = 0; c < f.length; c++)
              S(f[c]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(f);
      if (J.call(r, "key")) {
        f = o(e);
        var E = Object.keys(r).filter(function(I) {
          return I !== "key";
        });
        c = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", H[f + c] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          f,
          E,
          f
        ), H[f + c] = !0);
      }
      if (f = null, a !== void 0 && (v(a), f = "" + a), m(r) && (v(r.key), f = "" + r.key), "key" in r) {
        a = {};
        for (var T in r)
          T !== "key" && (a[T] = r[T]);
      } else a = r;
      return f && l(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), b(
        e,
        f,
        p,
        u,
        d(),
        a,
        g,
        h
      );
    }
    function S(e) {
      typeof e == "object" && e !== null && e.$$typeof === j && e._store && (e._store.validated = 1);
    }
    var P = $e, j = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), k = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), t = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), L = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, ee = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    P = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var X, Y = {}, D = P["react-stack-bottom-frame"].bind(
      P,
      i
    )(), U = q(s(i)), H = {};
    oe.Fragment = C, oe.jsx = function(e, r, a, c, u) {
      var p = 1e4 > L.recentlyCreatedOwnerStacks++;
      return R(
        e,
        r,
        a,
        !1,
        c,
        u,
        p ? Error("react-stack-top-frame") : D,
        p ? q(s(e)) : U
      );
    }, oe.jsxs = function(e, r, a, c, u) {
      var p = 1e4 > L.recentlyCreatedOwnerStacks++;
      return R(
        e,
        r,
        a,
        !0,
        c,
        u,
        p ? Error("react-stack-top-frame") : D,
        p ? q(s(e)) : U
      );
    };
  }()), oe;
}
var Ee;
function De() {
  return Ee || (Ee = 1, process.env.NODE_ENV === "production" ? te.exports = Ye() : te.exports = qe()), te.exports;
}
var A = De(), ae = { exports: {} }, ie = { exports: {} }, _ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function ze() {
  if (Te) return _;
  Te = 1;
  var o = typeof Symbol == "function" && Symbol.for, y = o ? Symbol.for("react.element") : 60103, v = o ? Symbol.for("react.portal") : 60106, s = o ? Symbol.for("react.fragment") : 60107, d = o ? Symbol.for("react.strict_mode") : 60108, i = o ? Symbol.for("react.profiler") : 60114, m = o ? Symbol.for("react.provider") : 60109, l = o ? Symbol.for("react.context") : 60110, O = o ? Symbol.for("react.async_mode") : 60111, b = o ? Symbol.for("react.concurrent_mode") : 60111, R = o ? Symbol.for("react.forward_ref") : 60112, S = o ? Symbol.for("react.suspense") : 60113, P = o ? Symbol.for("react.suspense_list") : 60120, j = o ? Symbol.for("react.memo") : 60115, M = o ? Symbol.for("react.lazy") : 60116, C = o ? Symbol.for("react.block") : 60121, $ = o ? Symbol.for("react.fundamental") : 60117, N = o ? Symbol.for("react.responder") : 60118, F = o ? Symbol.for("react.scope") : 60119;
  function k(t) {
    if (typeof t == "object" && t !== null) {
      var W = t.$$typeof;
      switch (W) {
        case y:
          switch (t = t.type, t) {
            case O:
            case b:
            case s:
            case i:
            case d:
            case S:
              return t;
            default:
              switch (t = t && t.$$typeof, t) {
                case l:
                case R:
                case M:
                case j:
                case m:
                  return t;
                default:
                  return W;
              }
          }
        case v:
          return W;
      }
    }
  }
  function V(t) {
    return k(t) === b;
  }
  return _.AsyncMode = O, _.ConcurrentMode = b, _.ContextConsumer = l, _.ContextProvider = m, _.Element = y, _.ForwardRef = R, _.Fragment = s, _.Lazy = M, _.Memo = j, _.Portal = v, _.Profiler = i, _.StrictMode = d, _.Suspense = S, _.isAsyncMode = function(t) {
    return V(t) || k(t) === O;
  }, _.isConcurrentMode = V, _.isContextConsumer = function(t) {
    return k(t) === l;
  }, _.isContextProvider = function(t) {
    return k(t) === m;
  }, _.isElement = function(t) {
    return typeof t == "object" && t !== null && t.$$typeof === y;
  }, _.isForwardRef = function(t) {
    return k(t) === R;
  }, _.isFragment = function(t) {
    return k(t) === s;
  }, _.isLazy = function(t) {
    return k(t) === M;
  }, _.isMemo = function(t) {
    return k(t) === j;
  }, _.isPortal = function(t) {
    return k(t) === v;
  }, _.isProfiler = function(t) {
    return k(t) === i;
  }, _.isStrictMode = function(t) {
    return k(t) === d;
  }, _.isSuspense = function(t) {
    return k(t) === S;
  }, _.isValidElementType = function(t) {
    return typeof t == "string" || typeof t == "function" || t === s || t === b || t === i || t === d || t === S || t === P || typeof t == "object" && t !== null && (t.$$typeof === M || t.$$typeof === j || t.$$typeof === m || t.$$typeof === l || t.$$typeof === R || t.$$typeof === $ || t.$$typeof === N || t.$$typeof === F || t.$$typeof === C);
  }, _.typeOf = k, _;
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
var Re;
function Ge() {
  return Re || (Re = 1, process.env.NODE_ENV !== "production" && function() {
    var o = typeof Symbol == "function" && Symbol.for, y = o ? Symbol.for("react.element") : 60103, v = o ? Symbol.for("react.portal") : 60106, s = o ? Symbol.for("react.fragment") : 60107, d = o ? Symbol.for("react.strict_mode") : 60108, i = o ? Symbol.for("react.profiler") : 60114, m = o ? Symbol.for("react.provider") : 60109, l = o ? Symbol.for("react.context") : 60110, O = o ? Symbol.for("react.async_mode") : 60111, b = o ? Symbol.for("react.concurrent_mode") : 60111, R = o ? Symbol.for("react.forward_ref") : 60112, S = o ? Symbol.for("react.suspense") : 60113, P = o ? Symbol.for("react.suspense_list") : 60120, j = o ? Symbol.for("react.memo") : 60115, M = o ? Symbol.for("react.lazy") : 60116, C = o ? Symbol.for("react.block") : 60121, $ = o ? Symbol.for("react.fundamental") : 60117, N = o ? Symbol.for("react.responder") : 60118, F = o ? Symbol.for("react.scope") : 60119;
    function k(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === s || n === b || n === i || n === d || n === S || n === P || typeof n == "object" && n !== null && (n.$$typeof === M || n.$$typeof === j || n.$$typeof === m || n.$$typeof === l || n.$$typeof === R || n.$$typeof === $ || n.$$typeof === N || n.$$typeof === F || n.$$typeof === C);
    }
    function V(n) {
      if (typeof n == "object" && n !== null) {
        var z = n.$$typeof;
        switch (z) {
          case y:
            var ne = n.type;
            switch (ne) {
              case O:
              case b:
              case s:
              case i:
              case d:
              case S:
                return ne;
              default:
                var ge = ne && ne.$$typeof;
                switch (ge) {
                  case l:
                  case R:
                  case M:
                  case j:
                  case m:
                    return ge;
                  default:
                    return z;
                }
            }
          case v:
            return z;
        }
      }
    }
    var t = O, W = b, Z = l, B = m, Q = y, K = R, L = s, J = M, ee = j, q = v, X = i, Y = d, D = S, U = !1;
    function H(n) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(n) || V(n) === O;
    }
    function e(n) {
      return V(n) === b;
    }
    function r(n) {
      return V(n) === l;
    }
    function a(n) {
      return V(n) === m;
    }
    function c(n) {
      return typeof n == "object" && n !== null && n.$$typeof === y;
    }
    function u(n) {
      return V(n) === R;
    }
    function p(n) {
      return V(n) === s;
    }
    function g(n) {
      return V(n) === M;
    }
    function h(n) {
      return V(n) === j;
    }
    function f(n) {
      return V(n) === v;
    }
    function E(n) {
      return V(n) === i;
    }
    function T(n) {
      return V(n) === d;
    }
    function I(n) {
      return V(n) === S;
    }
    x.AsyncMode = t, x.ConcurrentMode = W, x.ContextConsumer = Z, x.ContextProvider = B, x.Element = Q, x.ForwardRef = K, x.Fragment = L, x.Lazy = J, x.Memo = ee, x.Portal = q, x.Profiler = X, x.StrictMode = Y, x.Suspense = D, x.isAsyncMode = H, x.isConcurrentMode = e, x.isContextConsumer = r, x.isContextProvider = a, x.isElement = c, x.isForwardRef = u, x.isFragment = p, x.isLazy = g, x.isMemo = h, x.isPortal = f, x.isProfiler = E, x.isStrictMode = T, x.isSuspense = I, x.isValidElementType = k, x.typeOf = V;
  }()), x;
}
var we;
function je() {
  return we || (we = 1, process.env.NODE_ENV === "production" ? ie.exports = ze() : ie.exports = Ge()), ie.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var le, Oe;
function We() {
  if (Oe) return le;
  Oe = 1;
  var o = Object.getOwnPropertySymbols, y = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
  function s(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function d() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var m = {}, l = 0; l < 10; l++)
        m["_" + String.fromCharCode(l)] = l;
      var O = Object.getOwnPropertyNames(m).map(function(R) {
        return m[R];
      });
      if (O.join("") !== "0123456789")
        return !1;
      var b = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(R) {
        b[R] = R;
      }), Object.keys(Object.assign({}, b)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return le = d() ? Object.assign : function(i, m) {
    for (var l, O = s(i), b, R = 1; R < arguments.length; R++) {
      l = Object(arguments[R]);
      for (var S in l)
        y.call(l, S) && (O[S] = l[S]);
      if (o) {
        b = o(l);
        for (var P = 0; P < b.length; P++)
          v.call(l, b[P]) && (O[b[P]] = l[b[P]]);
      }
    }
    return O;
  }, le;
}
var se, Se;
function me() {
  if (Se) return se;
  Se = 1;
  var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return se = o, se;
}
var ue, _e;
function Ve() {
  return _e || (_e = 1, ue = Function.call.bind(Object.prototype.hasOwnProperty)), ue;
}
var fe, xe;
function Le() {
  if (xe) return fe;
  xe = 1;
  var o = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var y = /* @__PURE__ */ me(), v = {}, s = /* @__PURE__ */ Ve();
    o = function(i) {
      var m = "Warning: " + i;
      typeof console < "u" && console.error(m);
      try {
        throw new Error(m);
      } catch {
      }
    };
  }
  function d(i, m, l, O, b) {
    if (process.env.NODE_ENV !== "production") {
      for (var R in i)
        if (s(i, R)) {
          var S;
          try {
            if (typeof i[R] != "function") {
              var P = Error(
                (O || "React class") + ": " + l + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw P.name = "Invariant Violation", P;
            }
            S = i[R](m, R, O, l, null, y);
          } catch (M) {
            S = M;
          }
          if (S && !(S instanceof Error) && o(
            (O || "React class") + ": type specification of " + l + " `" + R + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof S + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), S instanceof Error && !(S.message in v)) {
            v[S.message] = !0;
            var j = b ? b() : "";
            o(
              "Failed " + l + " type: " + S.message + (j ?? "")
            );
          }
        }
    }
  }
  return d.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (v = {});
  }, fe = d, fe;
}
var de, Ce;
function Fe() {
  if (Ce) return de;
  Ce = 1;
  var o = je(), y = We(), v = /* @__PURE__ */ me(), s = /* @__PURE__ */ Ve(), d = /* @__PURE__ */ Le(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var O = "Warning: " + l;
    typeof console < "u" && console.error(O);
    try {
      throw new Error(O);
    } catch {
    }
  });
  function m() {
    return null;
  }
  return de = function(l, O) {
    var b = typeof Symbol == "function" && Symbol.iterator, R = "@@iterator";
    function S(e) {
      var r = e && (b && e[b] || e[R]);
      if (typeof r == "function")
        return r;
    }
    var P = "<<anonymous>>", j = {
      array: N("array"),
      bigint: N("bigint"),
      bool: N("boolean"),
      func: N("function"),
      number: N("number"),
      object: N("object"),
      string: N("string"),
      symbol: N("symbol"),
      any: F(),
      arrayOf: k,
      element: V(),
      elementType: t(),
      instanceOf: W,
      node: K(),
      objectOf: B,
      oneOf: Z,
      oneOfType: Q,
      shape: J,
      exact: ee
    };
    function M(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    }
    function C(e, r) {
      this.message = e, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    C.prototype = Error.prototype;
    function $(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, a = 0;
      function c(p, g, h, f, E, T, I) {
        if (f = f || P, T = T || h, I !== v) {
          if (O) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var z = f + ":" + h;
            !r[z] && // Avoid spamming the console because they are often not actionable except for lib authors
            a < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + T + "` prop on `" + f + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[z] = !0, a++);
          }
        }
        return g[h] == null ? p ? g[h] === null ? new C("The " + E + " `" + T + "` is marked as required " + ("in `" + f + "`, but its value is `null`.")) : new C("The " + E + " `" + T + "` is marked as required in " + ("`" + f + "`, but its value is `undefined`.")) : null : e(g, h, f, E, T);
      }
      var u = c.bind(null, !1);
      return u.isRequired = c.bind(null, !0), u;
    }
    function N(e) {
      function r(a, c, u, p, g, h) {
        var f = a[c], E = Y(f);
        if (E !== e) {
          var T = D(f);
          return new C(
            "Invalid " + p + " `" + g + "` of type " + ("`" + T + "` supplied to `" + u + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return $(r);
    }
    function F() {
      return $(m);
    }
    function k(e) {
      function r(a, c, u, p, g) {
        if (typeof e != "function")
          return new C("Property `" + g + "` of component `" + u + "` has invalid PropType notation inside arrayOf.");
        var h = a[c];
        if (!Array.isArray(h)) {
          var f = Y(h);
          return new C("Invalid " + p + " `" + g + "` of type " + ("`" + f + "` supplied to `" + u + "`, expected an array."));
        }
        for (var E = 0; E < h.length; E++) {
          var T = e(h, E, u, p, g + "[" + E + "]", v);
          if (T instanceof Error)
            return T;
        }
        return null;
      }
      return $(r);
    }
    function V() {
      function e(r, a, c, u, p) {
        var g = r[a];
        if (!l(g)) {
          var h = Y(g);
          return new C("Invalid " + u + " `" + p + "` of type " + ("`" + h + "` supplied to `" + c + "`, expected a single ReactElement."));
        }
        return null;
      }
      return $(e);
    }
    function t() {
      function e(r, a, c, u, p) {
        var g = r[a];
        if (!o.isValidElementType(g)) {
          var h = Y(g);
          return new C("Invalid " + u + " `" + p + "` of type " + ("`" + h + "` supplied to `" + c + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return $(e);
    }
    function W(e) {
      function r(a, c, u, p, g) {
        if (!(a[c] instanceof e)) {
          var h = e.name || P, f = H(a[c]);
          return new C("Invalid " + p + " `" + g + "` of type " + ("`" + f + "` supplied to `" + u + "`, expected ") + ("instance of `" + h + "`."));
        }
        return null;
      }
      return $(r);
    }
    function Z(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), m;
      function r(a, c, u, p, g) {
        for (var h = a[c], f = 0; f < e.length; f++)
          if (M(h, e[f]))
            return null;
        var E = JSON.stringify(e, function(I, n) {
          var z = D(n);
          return z === "symbol" ? String(n) : n;
        });
        return new C("Invalid " + p + " `" + g + "` of value `" + String(h) + "` " + ("supplied to `" + u + "`, expected one of " + E + "."));
      }
      return $(r);
    }
    function B(e) {
      function r(a, c, u, p, g) {
        if (typeof e != "function")
          return new C("Property `" + g + "` of component `" + u + "` has invalid PropType notation inside objectOf.");
        var h = a[c], f = Y(h);
        if (f !== "object")
          return new C("Invalid " + p + " `" + g + "` of type " + ("`" + f + "` supplied to `" + u + "`, expected an object."));
        for (var E in h)
          if (s(h, E)) {
            var T = e(h, E, u, p, g + "." + E, v);
            if (T instanceof Error)
              return T;
          }
        return null;
      }
      return $(r);
    }
    function Q(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), m;
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        if (typeof a != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + U(a) + " at index " + r + "."
          ), m;
      }
      function c(u, p, g, h, f) {
        for (var E = [], T = 0; T < e.length; T++) {
          var I = e[T], n = I(u, p, g, h, f, v);
          if (n == null)
            return null;
          n.data && s(n.data, "expectedType") && E.push(n.data.expectedType);
        }
        var z = E.length > 0 ? ", expected one of type [" + E.join(", ") + "]" : "";
        return new C("Invalid " + h + " `" + f + "` supplied to " + ("`" + g + "`" + z + "."));
      }
      return $(c);
    }
    function K() {
      function e(r, a, c, u, p) {
        return q(r[a]) ? null : new C("Invalid " + u + " `" + p + "` supplied to " + ("`" + c + "`, expected a ReactNode."));
      }
      return $(e);
    }
    function L(e, r, a, c, u) {
      return new C(
        (e || "React class") + ": " + r + " type `" + a + "." + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + u + "`."
      );
    }
    function J(e) {
      function r(a, c, u, p, g) {
        var h = a[c], f = Y(h);
        if (f !== "object")
          return new C("Invalid " + p + " `" + g + "` of type `" + f + "` " + ("supplied to `" + u + "`, expected `object`."));
        for (var E in e) {
          var T = e[E];
          if (typeof T != "function")
            return L(u, p, g, E, D(T));
          var I = T(h, E, u, p, g + "." + E, v);
          if (I)
            return I;
        }
        return null;
      }
      return $(r);
    }
    function ee(e) {
      function r(a, c, u, p, g) {
        var h = a[c], f = Y(h);
        if (f !== "object")
          return new C("Invalid " + p + " `" + g + "` of type `" + f + "` " + ("supplied to `" + u + "`, expected `object`."));
        var E = y({}, a[c], e);
        for (var T in E) {
          var I = e[T];
          if (s(e, T) && typeof I != "function")
            return L(u, p, g, T, D(I));
          if (!I)
            return new C(
              "Invalid " + p + " `" + g + "` key `" + T + "` supplied to `" + u + "`.\nBad object: " + JSON.stringify(a[c], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var n = I(h, T, u, p, g + "." + T, v);
          if (n)
            return n;
        }
        return null;
      }
      return $(r);
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
          if (e === null || l(e))
            return !0;
          var r = S(e);
          if (r) {
            var a = r.call(e), c;
            if (r !== e.entries) {
              for (; !(c = a.next()).done; )
                if (!q(c.value))
                  return !1;
            } else
              for (; !(c = a.next()).done; ) {
                var u = c.value;
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
    function H(e) {
      return !e.constructor || !e.constructor.name ? P : e.constructor.name;
    }
    return j.checkPropTypes = d, j.resetWarningCache = d.resetWarningCache, j.PropTypes = j, j;
  }, de;
}
var ve, Pe;
function Ue() {
  if (Pe) return ve;
  Pe = 1;
  var o = /* @__PURE__ */ me();
  function y() {
  }
  function v() {
  }
  return v.resetWarningCache = y, ve = function() {
    function s(m, l, O, b, R, S) {
      if (S !== o) {
        var P = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw P.name = "Invariant Violation", P;
      }
    }
    s.isRequired = s;
    function d() {
      return s;
    }
    var i = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: d,
      element: s,
      elementType: s,
      instanceOf: d,
      node: s,
      objectOf: d,
      oneOf: d,
      oneOfType: d,
      shape: d,
      exact: d,
      checkPropTypes: v,
      resetWarningCache: y
    };
    return i.PropTypes = i, i;
  }, ve;
}
var Ae;
function Be() {
  if (Ae) return ae.exports;
  if (Ae = 1, process.env.NODE_ENV !== "production") {
    var o = je(), y = !0;
    ae.exports = /* @__PURE__ */ Fe()(o.isElement, y);
  } else
    ae.exports = /* @__PURE__ */ Ue()();
  return ae.exports;
}
var Je = /* @__PURE__ */ Be();
const w = /* @__PURE__ */ Ne(Je), pe = ({
  colorValue: o,
  name: y,
  size: v = "medium",
  className: s
}) => {
  const d = {
    small: { width: 40, height: 40 },
    // Was 32x32
    medium: { width: 80, height: 80 },
    // Was 64x64
    large: { width: 125, height: 125 }
    // Was 100x100
  }, i = d[v] || d.medium, { width: m, height: l } = i, O = {
    width: `${m}px`,
    height: `${l}px`,
    backgroundColor: o,
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  }, b = `pgov-color-swatch-preview ${s || ""}`;
  return /* @__PURE__ */ A.jsx(
    "div",
    {
      style: O,
      className: b,
      "aria-label": `Color swatch for ${y}`
    }
  );
};
pe.propTypes = {
  /**
   * Color value (CSS var or hex)
   */
  colorValue: w.string.isRequired,
  /**
   * Name of the color (for accessibility)
   */
  name: w.string.isRequired,
  /**
   * Size of the preview
   */
  size: w.oneOf(["small", "medium", "large"]),
  /**
   * Additional CSS class names
   */
  className: w.string
};
pe.defaultProps = {
  size: "medium",
  className: ""
};
const ye = ({
  name: o,
  colorVar: y,
  description: v,
  hexValue: s,
  alignment: d,
  className: i
}) => {
  const [m, l] = Ie("");
  Me(() => {
    if (typeof window < "u" && y)
      try {
        const b = getComputedStyle(document.documentElement).getPropertyValue(y).trim();
        l(b);
      } catch (b) {
        console.error(`Error getting computed style for ${y}:`, b), l("Error");
      }
  }, [y]);
  const O = `pgov-color-swatch-details ${i || ""}`;
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: O,
      role: "group",
      "aria-label": `Details for ${o} color`,
      children: [
        /* @__PURE__ */ A.jsx("div", { className: "pgov-color-swatch-name", children: o }),
        /* @__PURE__ */ A.jsx("div", { className: "pgov-color-swatch-var", "aria-label": `CSS variable: ${y}`, children: y }),
        v && /* @__PURE__ */ A.jsx("div", { className: "pgov-color-swatch-description", "aria-label": `Description: ${v}`, children: v }),
        m && !v && /* @__PURE__ */ A.jsx("div", { className: "pgov-color-swatch-hex", "aria-label": `Computed value: ${m}`, children: m }),
        !m && s && !v && /* @__PURE__ */ A.jsxs("div", { className: "pgov-color-swatch-hex", "aria-label": `Initial Hex value: ${s}`, children: [
          s,
          " (Initial)"
        ] })
      ]
    }
  );
};
ye.propTypes = {
  /**
   * Name of the color
   */
  name: w.string.isRequired,
  /**
   * CSS variable name for the color
   */
  colorVar: w.string.isRequired,
  /**
   * Description of the color
   */
  description: w.string,
  /**
   * Hex value of the color (passed from parent, can be kept for prop validation)
   */
  hexValue: w.string,
  /**
   * Text alignment
   */
  alignment: w.oneOf(["left", "center", "right"]),
  /**
   * Additional CSS class names
   */
  className: w.string
};
ye.defaultProps = {
  description: void 0,
  hexValue: void 0,
  alignment: "left",
  className: ""
};
const ce = ({
  colorVar: o,
  name: y,
  description: v,
  size: s,
  orientation: d,
  className: i
}) => {
  const m = `pgov-color-swatch-item ${i || ""}`;
  return /* @__PURE__ */ A.jsxs("div", { className: m, children: [
    /* @__PURE__ */ A.jsx(
      pe,
      {
        colorValue: o,
        name: y,
        size: s
      }
    ),
    /* @__PURE__ */ A.jsx(
      ye,
      {
        name: y,
        colorVar: o,
        description: v,
        alignment: "center"
      }
    )
  ] });
};
ce.propTypes = {
  /**
   * CSS variable name for the color
   */
  colorVar: w.string.isRequired,
  /**
   * Name of the color
   */
  name: w.string.isRequired,
  /**
   * Description of the color
   */
  description: w.string,
  /**
   * Size of the color swatch preview
   */
  size: w.oneOf(["small", "medium", "large"]),
  /**
   * Layout orientation of the swatch
   */
  orientation: w.oneOf(["horizontal", "vertical"]),
  /**
   * Additional CSS class names
   */
  className: w.string
};
ce.defaultProps = {
  description: void 0,
  size: "medium",
  orientation: "vertical",
  className: ""
};
const G = ({
  colors: o,
  title: y,
  description: v,
  layout: s,
  itemOrientation: d,
  swatchSize: i,
  className: m
}) => {
  const l = y ? `color-palette-${y.toLowerCase().replace(/\s+/g, "-")}` : void 0, O = `pgov-color-palette ${m || ""}`;
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: O,
      role: "region",
      "aria-labelledby": l,
      children: [
        y && /* @__PURE__ */ A.jsx("h3", { id: l, className: "pgov-color-palette-title", children: y }),
        v && /* @__PURE__ */ A.jsx(
          "p",
          {
            className: "pgov-color-palette-description",
            id: l ? `${l}-desc` : void 0,
            children: v
          }
        ),
        /* @__PURE__ */ A.jsx(
          "div",
          {
            className: "pgov-color-palette-grid",
            "aria-describedby": l && v ? `${l}-desc` : void 0,
            children: o.map((b, R) => /* @__PURE__ */ A.jsx(
              ce,
              {
                colorVar: b.colorVar,
                name: b.name,
                description: b.description,
                hexValue: b.hexValue,
                size: i,
                orientation: d
              },
              R
            ))
          }
        )
      ]
    }
  );
};
G.propTypes = {
  /**
   * Array of color objects to display
   */
  colors: w.arrayOf(
    w.shape({
      name: w.string.isRequired,
      colorVar: w.string.isRequired,
      description: w.string,
      hexValue: w.string
    })
  ).isRequired,
  /**
   * Title for the palette (optional)
   */
  title: w.string,
  /**
   * Description for the palette (optional)
   */
  description: w.string,
  /**
   * Layout style for the colors
   */
  layout: w.oneOf(["grid", "flex"]),
  /**
   * Orientation of individual color swatch items
   */
  itemOrientation: w.oneOf(["horizontal", "vertical"]),
  /**
   * Size of the color swatches
   */
  swatchSize: w.oneOf(["small", "medium", "large"]),
  /**
   * Additional CSS class names
   */
  className: w.string
};
G.defaultProps = {
  title: void 0,
  description: void 0,
  layout: "grid",
  itemOrientation: "vertical",
  swatchSize: "large",
  className: ""
};
const ke = ({
  colorVar: o,
  name: y,
  description: v,
  hexValue: s,
  size: d,
  orientation: i,
  className: m
}) => /* @__PURE__ */ A.jsx(
  ce,
  {
    colorVar: o,
    name: y,
    description: v,
    hexValue: s,
    size: d,
    orientation: i,
    className: m
  }
);
ke.propTypes = {
  /**
   * CSS variable name for the color
   */
  colorVar: w.string.isRequired,
  /**
   * Name of the color
   */
  name: w.string.isRequired,
  /**
   * Description of the color
   */
  description: w.string,
  /**
   * Hex value of the color
   */
  hexValue: w.string,
  /**
   * Size of the color swatch
   */
  size: w.oneOf(["small", "medium", "large"]),
  /**
   * Orientation of the swatch (horizontal or vertical)
   */
  orientation: w.oneOf(["horizontal", "vertical"]),
  /**
   * Additional CSS class names
   */
  className: w.string
};
ke.defaultProps = {
  description: void 0,
  hexValue: void 0,
  size: "medium",
  orientation: "horizontal",
  className: ""
};
const He = () => {
  const o = [
    { name: "Red 5", colorVar: "var(--color-red-5)" },
    { name: "Red 10", colorVar: "var(--color-red-10)" },
    { name: "Red 20", colorVar: "var(--color-red-20)" },
    { name: "Red 30", colorVar: "var(--color-red-30)" },
    { name: "Red 40", colorVar: "var(--color-red-40)" },
    { name: "Red 50", colorVar: "var(--color-red-50)" },
    { name: "Red 60", colorVar: "var(--color-red-60)" },
    { name: "Red 70", colorVar: "var(--color-red-70)" },
    { name: "Red 80", colorVar: "var(--color-red-80)" },
    { name: "Red 90", colorVar: "var(--color-red-90)" }
  ];
  return /* @__PURE__ */ A.jsx(
    G,
    {
      colors: o,
      title: "Red Colors",
      description: "A range of red colors from lightest to darkest."
    }
  );
}, Ze = () => {
  const o = [
    { name: "Orange 5", colorVar: "var(--color-orange-5)" },
    { name: "Orange 10", colorVar: "var(--color-orange-10)" },
    { name: "Orange 20", colorVar: "var(--color-orange-20)" },
    { name: "Orange 30", colorVar: "var(--color-orange-30)" },
    { name: "Orange 40", colorVar: "var(--color-orange-40)" },
    { name: "Orange 50", colorVar: "var(--color-orange-50)" },
    { name: "Orange 60", colorVar: "var(--color-orange-60)" },
    { name: "Orange 70", colorVar: "var(--color-orange-70)" },
    { name: "Orange 80", colorVar: "var(--color-orange-80)" },
    { name: "Orange 90", colorVar: "var(--color-orange-90)" }
  ];
  return /* @__PURE__ */ A.jsx(
    G,
    {
      colors: o,
      title: "Orange Colors",
      description: "A range of orange colors from lightest to darkest."
    }
  );
}, Qe = () => {
  const o = [
    { name: "Gold 5", colorVar: "var(--color-gold-5)" },
    { name: "Gold 10", colorVar: "var(--color-gold-10)" },
    { name: "Gold 20", colorVar: "var(--color-gold-20)" },
    { name: "Gold 30", colorVar: "var(--color-gold-30)" },
    { name: "Gold 40", colorVar: "var(--color-gold-40)" },
    { name: "Gold 50", colorVar: "var(--color-gold-50)" },
    { name: "Gold 60", colorVar: "var(--color-gold-60)" },
    { name: "Gold 70", colorVar: "var(--color-gold-70)" },
    { name: "Gold 80", colorVar: "var(--color-gold-80)" },
    { name: "Gold 90", colorVar: "var(--color-gold-90)" }
  ];
  return /* @__PURE__ */ A.jsx(
    G,
    {
      colors: o,
      title: "Gold Colors",
      description: "A range of gold colors from lightest to darkest."
    }
  );
}, Ke = () => {
  const o = [
    { name: "Yellow 5", colorVar: "var(--color-yellow-5)" },
    { name: "Yellow 10", colorVar: "var(--color-yellow-10)" },
    { name: "Yellow 20", colorVar: "var(--color-yellow-20)" },
    { name: "Yellow 30", colorVar: "var(--color-yellow-30)" },
    { name: "Yellow 40", colorVar: "var(--color-yellow-40)" },
    { name: "Yellow 50", colorVar: "var(--color-yellow-50)" },
    { name: "Yellow 60", colorVar: "var(--color-yellow-60)" },
    { name: "Yellow 70", colorVar: "var(--color-yellow-70)" },
    { name: "Yellow 80", colorVar: "var(--color-yellow-80)" },
    { name: "Yellow 90", colorVar: "var(--color-yellow-90)" }
  ];
  return /* @__PURE__ */ A.jsx(
    G,
    {
      colors: o,
      title: "Yellow Colors",
      description: "A range of yellow colors from lightest to darkest."
    }
  );
}, er = () => {
  const o = [
    { name: "Green 5", colorVar: "var(--color-green-5)" },
    { name: "Green 10", colorVar: "var(--color-green-10)" },
    { name: "Green 20", colorVar: "var(--color-green-20)" },
    { name: "Green 30", colorVar: "var(--color-green-30)" },
    { name: "Green 40", colorVar: "var(--color-green-40)" },
    { name: "Green 50", colorVar: "var(--color-green-50)" },
    { name: "Green 60", colorVar: "var(--color-green-60)" },
    { name: "Green 70", colorVar: "var(--color-green-70)" },
    { name: "Green 80", colorVar: "var(--color-green-80)" },
    { name: "Green 90", colorVar: "var(--color-green-90)" }
  ];
  return /* @__PURE__ */ A.jsx(
    G,
    {
      colors: o,
      title: "Green Colors",
      description: "A range of green colors from lightest to darkest."
    }
  );
}, rr = () => {
  const o = [
    { name: "Mint 5", colorVar: "var(--color-mint-5)" },
    { name: "Mint 10", colorVar: "var(--color-mint-10)" },
    { name: "Mint 20", colorVar: "var(--color-mint-20)" },
    { name: "Mint 30", colorVar: "var(--color-mint-30)" },
    { name: "Mint 40", colorVar: "var(--color-mint-40)" },
    { name: "Mint 50", colorVar: "var(--color-mint-50)" },
    { name: "Mint 60", colorVar: "var(--color-mint-60)" },
    { name: "Mint 70", colorVar: "var(--color-mint-70)" },
    { name: "Mint 80", colorVar: "var(--color-mint-80)" },
    { name: "Mint 90", colorVar: "var(--color-mint-90)" }
  ];
  return /* @__PURE__ */ A.jsx(
    G,
    {
      colors: o,
      title: "Mint Colors",
      description: "A range of mint colors from lightest to darkest."
    }
  );
}, or = () => {
  const o = [
    { name: "Cyan 5", colorVar: "var(--color-cyan-5)" },
    { name: "Cyan 10", colorVar: "var(--color-cyan-10)" },
    { name: "Cyan 20", colorVar: "var(--color-cyan-20)" },
    { name: "Cyan 30", colorVar: "var(--color-cyan-30)" },
    { name: "Cyan 40", colorVar: "var(--color-cyan-40)" },
    { name: "Cyan 50", colorVar: "var(--color-cyan-50)" },
    { name: "Cyan 60", colorVar: "var(--color-cyan-60)" },
    { name: "Cyan 70", colorVar: "var(--color-cyan-70)" },
    { name: "Cyan 80", colorVar: "var(--color-cyan-80)" },
    { name: "Cyan 90", colorVar: "var(--color-cyan-90)" }
  ];
  return /* @__PURE__ */ A.jsx(
    G,
    {
      colors: o,
      title: "Cyan Colors",
      description: "A range of cyan colors from lightest to darkest."
    }
  );
}, nr = () => {
  const o = [
    { name: "Blue 5", colorVar: "var(--color-blue-5)" },
    { name: "Blue 10", colorVar: "var(--color-blue-10)" },
    { name: "Blue 20", colorVar: "var(--color-blue-20)" },
    { name: "Blue 30", colorVar: "var(--color-blue-30)" },
    { name: "Blue 40", colorVar: "var(--color-blue-40)" },
    { name: "Blue 50", colorVar: "var(--color-blue-50)" },
    { name: "Blue 60", colorVar: "var(--color-blue-60)" },
    { name: "Blue 70", colorVar: "var(--color-blue-70)" },
    { name: "Blue 80", colorVar: "var(--color-blue-80)" },
    { name: "Blue 90", colorVar: "var(--color-blue-90)" }
  ];
  return /* @__PURE__ */ A.jsx(
    G,
    {
      colors: o,
      title: "Blue Colors",
      description: "A range of blue colors from lightest to darkest."
    }
  );
};
export {
  nr as BlueColorSwatches,
  G as ColorPalette,
  ke as ColorSwatch,
  ye as ColorSwatchDetails,
  ce as ColorSwatchItem,
  pe as ColorSwatchPreview,
  or as CyanColorSwatches,
  Qe as GoldColorSwatches,
  er as GreenColorSwatches,
  rr as MintColorSwatches,
  Ze as OrangeColorSwatches,
  He as RedColorSwatches,
  Ke as YellowColorSwatches
};
//# sourceMappingURL=index.js.map
