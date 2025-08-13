import de from "react";
function Ce(t) {
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
var ye;
function je() {
  if (ye) return ee;
  ye = 1;
  var t = Symbol.for("react.transitional.element"), x = Symbol.for("react.fragment");
  function T(d, v, s) {
    var E = null;
    if (s !== void 0 && (E = "" + s), v.key !== void 0 && (E = "" + v.key), "key" in v) {
      s = {};
      for (var l in v)
        l !== "key" && (s[l] = v[l]);
    } else s = v;
    return v = s.ref, {
      $$typeof: t,
      type: d,
      key: E,
      ref: v !== void 0 ? v : null,
      props: s
    };
  }
  return ee.Fragment = x, ee.jsx = T, ee.jsxs = T, ee;
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
var me;
function ke() {
  return me || (me = 1, process.env.NODE_ENV !== "production" && function() {
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
        case W:
          return "SuspenseList";
        case Z:
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
          case U:
            return (e._context.displayName || "Context") + ".Consumer";
          case C:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case V:
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
    function T(e) {
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
    function d(e) {
      if (e === P) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === V)
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
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function l(e, r) {
      function a() {
        B || (B = !0, console.error(
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
    function O(e, r, a, i, c, f, p, y) {
      return a = f.ref, e = {
        $$typeof: A,
        type: e,
        key: r,
        props: f,
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
    function h(e, r, a, i, c, f, p, y) {
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
      if (J.call(r, "key")) {
        u = t(e);
        var m = Object.keys(r).filter(function(I) {
          return I !== "key";
        });
        i = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", G[u + i] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), G[u + i] = !0);
      }
      if (u = null, a !== void 0 && (T(a), u = "" + a), E(r) && (T(r.key), u = "" + r.key), "key" in r) {
        a = {};
        for (var b in r)
          b !== "key" && (a[b] = r[b]);
      } else a = r;
      return u && l(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), O(
        e,
        u,
        f,
        c,
        v(),
        a,
        p,
        y
      );
    }
    function _(e) {
      typeof e == "object" && e !== null && e.$$typeof === A && e._store && (e._store.validated = 1);
    }
    var w = de, A = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), j = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), F = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, K = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var B, Y = {}, q = w["react-stack-bottom-frame"].bind(
      w,
      s
    )(), z = N(d(s)), G = {};
    re.Fragment = P, re.jsx = function(e, r, a, i, c) {
      var f = 1e4 > F.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        a,
        !1,
        i,
        c,
        f ? Error("react-stack-top-frame") : q,
        f ? N(d(e)) : z
      );
    }, re.jsxs = function(e, r, a, i, c) {
      var f = 1e4 > F.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        a,
        !0,
        i,
        c,
        f ? Error("react-stack-top-frame") : q,
        f ? N(d(e)) : z
      );
    };
  }()), re;
}
var be;
function Ie() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? ne.exports = je() : ne.exports = ke()), ne.exports;
}
var X = Ie(), oe = { exports: {} }, ae = { exports: {} }, g = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function $e() {
  if (Ee) return g;
  Ee = 1;
  var t = typeof Symbol == "function" && Symbol.for, x = t ? Symbol.for("react.element") : 60103, T = t ? Symbol.for("react.portal") : 60106, d = t ? Symbol.for("react.fragment") : 60107, v = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, E = t ? Symbol.for("react.provider") : 60109, l = t ? Symbol.for("react.context") : 60110, S = t ? Symbol.for("react.async_mode") : 60111, O = t ? Symbol.for("react.concurrent_mode") : 60111, h = t ? Symbol.for("react.forward_ref") : 60112, _ = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, A = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, P = t ? Symbol.for("react.block") : 60121, k = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, U = t ? Symbol.for("react.scope") : 60119;
  function j(o) {
    if (typeof o == "object" && o !== null) {
      var W = o.$$typeof;
      switch (W) {
        case x:
          switch (o = o.type, o) {
            case S:
            case O:
            case d:
            case s:
            case v:
            case _:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case l:
                case h:
                case $:
                case A:
                case E:
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
    return j(o) === O;
  }
  return g.AsyncMode = S, g.ConcurrentMode = O, g.ContextConsumer = l, g.ContextProvider = E, g.Element = x, g.ForwardRef = h, g.Fragment = d, g.Lazy = $, g.Memo = A, g.Portal = T, g.Profiler = s, g.StrictMode = v, g.Suspense = _, g.isAsyncMode = function(o) {
    return C(o) || j(o) === S;
  }, g.isConcurrentMode = C, g.isContextConsumer = function(o) {
    return j(o) === l;
  }, g.isContextProvider = function(o) {
    return j(o) === E;
  }, g.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === x;
  }, g.isForwardRef = function(o) {
    return j(o) === h;
  }, g.isFragment = function(o) {
    return j(o) === d;
  }, g.isLazy = function(o) {
    return j(o) === $;
  }, g.isMemo = function(o) {
    return j(o) === A;
  }, g.isPortal = function(o) {
    return j(o) === T;
  }, g.isProfiler = function(o) {
    return j(o) === s;
  }, g.isStrictMode = function(o) {
    return j(o) === v;
  }, g.isSuspense = function(o) {
    return j(o) === _;
  }, g.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === d || o === O || o === s || o === v || o === _ || o === w || typeof o == "object" && o !== null && (o.$$typeof === $ || o.$$typeof === A || o.$$typeof === E || o.$$typeof === l || o.$$typeof === h || o.$$typeof === k || o.$$typeof === M || o.$$typeof === U || o.$$typeof === P);
  }, g.typeOf = j, g;
}
var R = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function Me() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, x = t ? Symbol.for("react.element") : 60103, T = t ? Symbol.for("react.portal") : 60106, d = t ? Symbol.for("react.fragment") : 60107, v = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, E = t ? Symbol.for("react.provider") : 60109, l = t ? Symbol.for("react.context") : 60110, S = t ? Symbol.for("react.async_mode") : 60111, O = t ? Symbol.for("react.concurrent_mode") : 60111, h = t ? Symbol.for("react.forward_ref") : 60112, _ = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, A = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, P = t ? Symbol.for("react.block") : 60121, k = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, U = t ? Symbol.for("react.scope") : 60119;
    function j(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === d || n === O || n === s || n === v || n === _ || n === w || typeof n == "object" && n !== null && (n.$$typeof === $ || n.$$typeof === A || n.$$typeof === E || n.$$typeof === l || n.$$typeof === h || n.$$typeof === k || n.$$typeof === M || n.$$typeof === U || n.$$typeof === P);
    }
    function C(n) {
      if (typeof n == "object" && n !== null) {
        var D = n.$$typeof;
        switch (D) {
          case x:
            var te = n.type;
            switch (te) {
              case S:
              case O:
              case d:
              case s:
              case v:
              case _:
                return te;
              default:
                var ve = te && te.$$typeof;
                switch (ve) {
                  case l:
                  case h:
                  case $:
                  case A:
                  case E:
                    return ve;
                  default:
                    return D;
                }
            }
          case T:
            return D;
        }
      }
    }
    var o = S, W = O, H = l, V = E, Z = x, Q = h, F = d, J = $, K = A, N = T, B = s, Y = v, q = _, z = !1;
    function G(n) {
      return z || (z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(n) || C(n) === S;
    }
    function e(n) {
      return C(n) === O;
    }
    function r(n) {
      return C(n) === l;
    }
    function a(n) {
      return C(n) === E;
    }
    function i(n) {
      return typeof n == "object" && n !== null && n.$$typeof === x;
    }
    function c(n) {
      return C(n) === h;
    }
    function f(n) {
      return C(n) === d;
    }
    function p(n) {
      return C(n) === $;
    }
    function y(n) {
      return C(n) === A;
    }
    function u(n) {
      return C(n) === T;
    }
    function m(n) {
      return C(n) === s;
    }
    function b(n) {
      return C(n) === v;
    }
    function I(n) {
      return C(n) === _;
    }
    R.AsyncMode = o, R.ConcurrentMode = W, R.ContextConsumer = H, R.ContextProvider = V, R.Element = Z, R.ForwardRef = Q, R.Fragment = F, R.Lazy = J, R.Memo = K, R.Portal = N, R.Profiler = B, R.StrictMode = Y, R.Suspense = q, R.isAsyncMode = G, R.isConcurrentMode = e, R.isContextConsumer = r, R.isContextProvider = a, R.isElement = i, R.isForwardRef = c, R.isFragment = f, R.isLazy = p, R.isMemo = y, R.isPortal = u, R.isProfiler = m, R.isStrictMode = b, R.isSuspense = I, R.isValidElementType = j, R.typeOf = C;
  }()), R;
}
var he;
function we() {
  return he || (he = 1, process.env.NODE_ENV === "production" ? ae.exports = $e() : ae.exports = Me()), ae.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ie, _e;
function Ye() {
  if (_e) return ie;
  _e = 1;
  var t = Object.getOwnPropertySymbols, x = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable;
  function d(s) {
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
      for (var E = {}, l = 0; l < 10; l++)
        E["_" + String.fromCharCode(l)] = l;
      var S = Object.getOwnPropertyNames(E).map(function(h) {
        return E[h];
      });
      if (S.join("") !== "0123456789")
        return !1;
      var O = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        O[h] = h;
      }), Object.keys(Object.assign({}, O)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = v() ? Object.assign : function(s, E) {
    for (var l, S = d(s), O, h = 1; h < arguments.length; h++) {
      l = Object(arguments[h]);
      for (var _ in l)
        x.call(l, _) && (S[_] = l[_]);
      if (t) {
        O = t(l);
        for (var w = 0; w < O.length; w++)
          T.call(l, O[w]) && (S[O[w]] = l[O[w]]);
      }
    }
    return S;
  }, ie;
}
var se, ge;
function pe() {
  if (ge) return se;
  ge = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return se = t, se;
}
var ce, Re;
function Ae() {
  return Re || (Re = 1, ce = Function.call.bind(Object.prototype.hasOwnProperty)), ce;
}
var ue, Oe;
function Ne() {
  if (Oe) return ue;
  Oe = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var x = /* @__PURE__ */ pe(), T = {}, d = /* @__PURE__ */ Ae();
    t = function(s) {
      var E = "Warning: " + s;
      typeof console < "u" && console.error(E);
      try {
        throw new Error(E);
      } catch {
      }
    };
  }
  function v(s, E, l, S, O) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in s)
        if (d(s, h)) {
          var _;
          try {
            if (typeof s[h] != "function") {
              var w = Error(
                (S || "React class") + ": " + l + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            _ = s[h](E, h, S, l, null, x);
          } catch ($) {
            _ = $;
          }
          if (_ && !(_ instanceof Error) && t(
            (S || "React class") + ": type specification of " + l + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof _ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), _ instanceof Error && !(_.message in T)) {
            T[_.message] = !0;
            var A = O ? O() : "";
            t(
              "Failed " + l + " type: " + _.message + (A ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (T = {});
  }, ue = v, ue;
}
var fe, Se;
function qe() {
  if (Se) return fe;
  Se = 1;
  var t = we(), x = Ye(), T = /* @__PURE__ */ pe(), d = /* @__PURE__ */ Ae(), v = /* @__PURE__ */ Ne(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var S = "Warning: " + l;
    typeof console < "u" && console.error(S);
    try {
      throw new Error(S);
    } catch {
    }
  });
  function E() {
    return null;
  }
  return fe = function(l, S) {
    var O = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function _(e) {
      var r = e && (O && e[O] || e[h]);
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
      any: U(),
      arrayOf: j,
      element: C(),
      elementType: o(),
      instanceOf: W,
      node: Q(),
      objectOf: V,
      oneOf: H,
      oneOfType: Z,
      shape: J,
      exact: K
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
      function i(f, p, y, u, m, b, I) {
        if (u = u || w, b = b || y, I !== T) {
          if (S) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var D = u + ":" + y;
            !r[D] && // Avoid spamming the console because they are often not actionable except for lib authors
            a < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + b + "` prop on `" + u + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[D] = !0, a++);
          }
        }
        return p[y] == null ? f ? p[y] === null ? new P("The " + m + " `" + b + "` is marked as required " + ("in `" + u + "`, but its value is `null`.")) : new P("The " + m + " `" + b + "` is marked as required in " + ("`" + u + "`, but its value is `undefined`.")) : null : e(p, y, u, m, b);
      }
      var c = i.bind(null, !1);
      return c.isRequired = i.bind(null, !0), c;
    }
    function M(e) {
      function r(a, i, c, f, p, y) {
        var u = a[i], m = Y(u);
        if (m !== e) {
          var b = q(u);
          return new P(
            "Invalid " + f + " `" + p + "` of type " + ("`" + b + "` supplied to `" + c + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return k(r);
    }
    function U() {
      return k(E);
    }
    function j(e) {
      function r(a, i, c, f, p) {
        if (typeof e != "function")
          return new P("Property `" + p + "` of component `" + c + "` has invalid PropType notation inside arrayOf.");
        var y = a[i];
        if (!Array.isArray(y)) {
          var u = Y(y);
          return new P("Invalid " + f + " `" + p + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an array."));
        }
        for (var m = 0; m < y.length; m++) {
          var b = e(y, m, c, f, p + "[" + m + "]", T);
          if (b instanceof Error)
            return b;
        }
        return null;
      }
      return k(r);
    }
    function C() {
      function e(r, a, i, c, f) {
        var p = r[a];
        if (!l(p)) {
          var y = Y(p);
          return new P("Invalid " + c + " `" + f + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(e);
    }
    function o() {
      function e(r, a, i, c, f) {
        var p = r[a];
        if (!t.isValidElementType(p)) {
          var y = Y(p);
          return new P("Invalid " + c + " `" + f + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(e);
    }
    function W(e) {
      function r(a, i, c, f, p) {
        if (!(a[i] instanceof e)) {
          var y = e.name || w, u = G(a[i]);
          return new P("Invalid " + f + " `" + p + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return k(r);
    }
    function H(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), E;
      function r(a, i, c, f, p) {
        for (var y = a[i], u = 0; u < e.length; u++)
          if ($(y, e[u]))
            return null;
        var m = JSON.stringify(e, function(I, n) {
          var D = q(n);
          return D === "symbol" ? String(n) : n;
        });
        return new P("Invalid " + f + " `" + p + "` of value `" + String(y) + "` " + ("supplied to `" + c + "`, expected one of " + m + "."));
      }
      return k(r);
    }
    function V(e) {
      function r(a, i, c, f, p) {
        if (typeof e != "function")
          return new P("Property `" + p + "` of component `" + c + "` has invalid PropType notation inside objectOf.");
        var y = a[i], u = Y(y);
        if (u !== "object")
          return new P("Invalid " + f + " `" + p + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an object."));
        for (var m in y)
          if (d(y, m)) {
            var b = e(y, m, c, f, p + "." + m, T);
            if (b instanceof Error)
              return b;
          }
        return null;
      }
      return k(r);
    }
    function Z(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), E;
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        if (typeof a != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + z(a) + " at index " + r + "."
          ), E;
      }
      function i(c, f, p, y, u) {
        for (var m = [], b = 0; b < e.length; b++) {
          var I = e[b], n = I(c, f, p, y, u, T);
          if (n == null)
            return null;
          n.data && d(n.data, "expectedType") && m.push(n.data.expectedType);
        }
        var D = m.length > 0 ? ", expected one of type [" + m.join(", ") + "]" : "";
        return new P("Invalid " + y + " `" + u + "` supplied to " + ("`" + p + "`" + D + "."));
      }
      return k(i);
    }
    function Q() {
      function e(r, a, i, c, f) {
        return N(r[a]) ? null : new P("Invalid " + c + " `" + f + "` supplied to " + ("`" + i + "`, expected a ReactNode."));
      }
      return k(e);
    }
    function F(e, r, a, i, c) {
      return new P(
        (e || "React class") + ": " + r + " type `" + a + "." + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + c + "`."
      );
    }
    function J(e) {
      function r(a, i, c, f, p) {
        var y = a[i], u = Y(y);
        if (u !== "object")
          return new P("Invalid " + f + " `" + p + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        for (var m in e) {
          var b = e[m];
          if (typeof b != "function")
            return F(c, f, p, m, q(b));
          var I = b(y, m, c, f, p + "." + m, T);
          if (I)
            return I;
        }
        return null;
      }
      return k(r);
    }
    function K(e) {
      function r(a, i, c, f, p) {
        var y = a[i], u = Y(y);
        if (u !== "object")
          return new P("Invalid " + f + " `" + p + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        var m = x({}, a[i], e);
        for (var b in m) {
          var I = e[b];
          if (d(e, b) && typeof I != "function")
            return F(c, f, p, b, q(I));
          if (!I)
            return new P(
              "Invalid " + f + " `" + p + "` key `" + b + "` supplied to `" + c + "`.\nBad object: " + JSON.stringify(a[i], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var n = I(y, b, c, f, p + "." + b, T);
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
          if (e === null || l(e))
            return !0;
          var r = _(e);
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
    function B(e, r) {
      return e === "symbol" ? !0 : r ? r["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && r instanceof Symbol : !1;
    }
    function Y(e) {
      var r = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : B(r, e) ? "symbol" : r;
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
    function z(e) {
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
    function G(e) {
      return !e.constructor || !e.constructor.name ? w : e.constructor.name;
    }
    return A.checkPropTypes = v, A.resetWarningCache = v.resetWarningCache, A.PropTypes = A, A;
  }, fe;
}
var le, Pe;
function De() {
  if (Pe) return le;
  Pe = 1;
  var t = /* @__PURE__ */ pe();
  function x() {
  }
  function T() {
  }
  return T.resetWarningCache = x, le = function() {
    function d(E, l, S, O, h, _) {
      if (_ !== t) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    d.isRequired = d;
    function v() {
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
      arrayOf: v,
      element: d,
      elementType: d,
      instanceOf: v,
      node: d,
      objectOf: v,
      oneOf: v,
      oneOfType: v,
      shape: v,
      exact: v,
      checkPropTypes: T,
      resetWarningCache: x
    };
    return s.PropTypes = s, s;
  }, le;
}
var xe;
function We() {
  if (xe) return oe.exports;
  if (xe = 1, process.env.NODE_ENV !== "production") {
    var t = we(), x = !0;
    oe.exports = /* @__PURE__ */ qe()(t.isElement, x);
  } else
    oe.exports = /* @__PURE__ */ De()();
  return oe.exports;
}
var Fe = /* @__PURE__ */ We();
const L = /* @__PURE__ */ Ce(Fe);
function Le({
  heading: t,
  text: x,
  media: T,
  mediaAlt: d = "Card media",
  mediaPosition: v = "left",
  mediaInset: s = !1,
  actionButton: E,
  className: l = ""
}) {
  const S = [
    "pdx-card-flag__media",
    s ? "pdx-card-flag__media--inset" : "",
    `pdx-card-flag__media--${v}`
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ X.jsxs(
    "div",
    {
      className: `pdx-card-flag pdx-card-flag--media-${v} ${l}`.trim(),
      "data-testid": "card-flag",
      children: [
        /* @__PURE__ */ X.jsx("div", { className: S, "data-testid": "card-flag-media", children: de.isValidElement(T) ? de.cloneElement(T, { alt: d, className: "pdx-card-flag__media-element" }) : T }),
        /* @__PURE__ */ X.jsxs("div", { className: "pdx-card-flag__content", children: [
          /* @__PURE__ */ X.jsx("div", { className: "pdx-card-flag__heading", "data-testid": "card-flag-heading", children: t }),
          /* @__PURE__ */ X.jsx("div", { className: "pdx-card-flag__body", "data-testid": "card-flag-body", children: x }),
          E && /* @__PURE__ */ X.jsx("div", { className: "pdx-card-flag__footer", "data-testid": "card-flag-footer", children: E })
        ] })
      ]
    }
  );
}
Le.propTypes = {
  heading: L.string.isRequired,
  text: L.string.isRequired,
  media: L.node.isRequired,
  mediaAlt: L.string,
  mediaPosition: L.oneOf(["left", "right"]),
  mediaInset: L.bool,
  actionButton: L.node,
  className: L.string
};
export {
  Le as CardFlag
};
//# sourceMappingURL=index.js.map
