import * as F from "react";
import ae, { useState as be, useEffect as Ne, useRef as nt, useCallback as mt, useLayoutEffect as Za } from "react";
import * as Qa from "react-dom";
function es(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ts(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var pt = { exports: {} }, Xe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fr;
function Ai() {
  if (Fr) return Xe;
  Fr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), a.key !== void 0 && (i = "" + a.key), "key" in a) {
      s = {};
      for (var c in a)
        c !== "key" && (s[c] = a[c]);
    } else s = a;
    return a = s.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return Xe.Fragment = t, Xe.jsx = n, Xe.jsxs = n, Xe;
}
var Ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dr;
function Ii() {
  return Dr || (Dr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(m) {
      if (m == null) return null;
      if (typeof m == "function")
        return m.$$typeof === N ? null : m.displayName || m.name || null;
      if (typeof m == "string") return m;
      switch (m) {
        case v:
          return "Fragment";
        case T:
          return "Profiler";
        case w:
          return "StrictMode";
        case j:
          return "Suspense";
        case G:
          return "SuspenseList";
        case C:
          return "Activity";
      }
      if (typeof m == "object")
        switch (typeof m.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), m.$$typeof) {
          case b:
            return "Portal";
          case E:
            return (m.displayName || "Context") + ".Provider";
          case _:
            return (m._context.displayName || "Context") + ".Consumer";
          case k:
            var R = m.render;
            return m = m.displayName, m || (m = R.displayName || R.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
          case P:
            return R = m.displayName || null, R !== null ? R : e(m.type) || "Memo";
          case A:
            R = m._payload, m = m._init;
            try {
              return e(m(R));
            } catch {
            }
        }
      return null;
    }
    function t(m) {
      return "" + m;
    }
    function n(m) {
      try {
        t(m);
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var S = R.error, q = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return S.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          q
        ), t(m);
      }
    }
    function r(m) {
      if (m === v) return "<>";
      if (typeof m == "object" && m !== null && m.$$typeof === A)
        return "<...>";
      try {
        var R = e(m);
        return R ? "<" + R + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var m = Y.A;
      return m === null ? null : m.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(m) {
      if (W.call(m, "key")) {
        var R = Object.getOwnPropertyDescriptor(m, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return m.key !== void 0;
    }
    function c(m, R) {
      function S() {
        O || (O = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      S.isReactWarning = !0, Object.defineProperty(m, "key", {
        get: S,
        configurable: !0
      });
    }
    function u() {
      var m = e(this.type);
      return z[m] || (z[m] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), m = this.props.ref, m !== void 0 ? m : null;
    }
    function f(m, R, S, q, U, H, J, K) {
      return S = H.ref, m = {
        $$typeof: p,
        type: m,
        key: R,
        props: H,
        _owner: U
      }, (S !== void 0 ? S : null) !== null ? Object.defineProperty(m, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(m, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(m, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.defineProperty(m, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    }
    function d(m, R, S, q, U, H, J, K) {
      var B = R.children;
      if (B !== void 0)
        if (q)
          if (x(B)) {
            for (q = 0; q < B.length; q++)
              h(B[q]);
            Object.freeze && Object.freeze(B);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(B);
      if (W.call(R, "key")) {
        B = e(m);
        var X = Object.keys(R).filter(function(re) {
          return re !== "key";
        });
        q = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", M[B + q] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          q,
          B,
          X,
          B
        ), M[B + q] = !0);
      }
      if (B = null, S !== void 0 && (n(S), B = "" + S), i(R) && (n(R.key), B = "" + R.key), "key" in R) {
        S = {};
        for (var Z in R)
          Z !== "key" && (S[Z] = R[Z]);
      } else S = R;
      return B && c(
        S,
        typeof m == "function" ? m.displayName || m.name || "Unknown" : m
      ), f(
        m,
        B,
        H,
        U,
        a(),
        S,
        J,
        K
      );
    }
    function h(m) {
      typeof m == "object" && m !== null && m.$$typeof === p && m._store && (m._store.validated = 1);
    }
    var g = ae, p = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), E = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), N = Symbol.for("react.client.reference"), Y = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, x = Array.isArray, y = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(m) {
        return m();
      }
    };
    var O, z = {}, D = g["react-stack-bottom-frame"].bind(
      g,
      s
    )(), L = y(r(s)), M = {};
    Ke.Fragment = v, Ke.jsx = function(m, R, S, q, U) {
      var H = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return d(
        m,
        R,
        S,
        !1,
        q,
        U,
        H ? Error("react-stack-top-frame") : D,
        H ? y(r(m)) : L
      );
    }, Ke.jsxs = function(m, R, S, q, U) {
      var H = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return d(
        m,
        R,
        S,
        !0,
        q,
        U,
        H ? Error("react-stack-top-frame") : D,
        H ? y(r(m)) : L
      );
    };
  }()), Ke;
}
var Lr;
function Fi() {
  return Lr || (Lr = 1, process.env.NODE_ENV === "production" ? pt.exports = Ai() : pt.exports = Ii()), pt.exports;
}
var o = Fi(), ht = { exports: {} }, gt = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr;
function Di() {
  if (Mr) return Q;
  Mr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function E(j) {
    if (typeof j == "object" && j !== null) {
      var G = j.$$typeof;
      switch (G) {
        case t:
          switch (j = j.type, j) {
            case u:
            case f:
            case r:
            case s:
            case a:
            case h:
              return j;
            default:
              switch (j = j && j.$$typeof, j) {
                case c:
                case d:
                case b:
                case p:
                case i:
                  return j;
                default:
                  return G;
              }
          }
        case n:
          return G;
      }
    }
  }
  function k(j) {
    return E(j) === f;
  }
  return Q.AsyncMode = u, Q.ConcurrentMode = f, Q.ContextConsumer = c, Q.ContextProvider = i, Q.Element = t, Q.ForwardRef = d, Q.Fragment = r, Q.Lazy = b, Q.Memo = p, Q.Portal = n, Q.Profiler = s, Q.StrictMode = a, Q.Suspense = h, Q.isAsyncMode = function(j) {
    return k(j) || E(j) === u;
  }, Q.isConcurrentMode = k, Q.isContextConsumer = function(j) {
    return E(j) === c;
  }, Q.isContextProvider = function(j) {
    return E(j) === i;
  }, Q.isElement = function(j) {
    return typeof j == "object" && j !== null && j.$$typeof === t;
  }, Q.isForwardRef = function(j) {
    return E(j) === d;
  }, Q.isFragment = function(j) {
    return E(j) === r;
  }, Q.isLazy = function(j) {
    return E(j) === b;
  }, Q.isMemo = function(j) {
    return E(j) === p;
  }, Q.isPortal = function(j) {
    return E(j) === n;
  }, Q.isProfiler = function(j) {
    return E(j) === s;
  }, Q.isStrictMode = function(j) {
    return E(j) === a;
  }, Q.isSuspense = function(j) {
    return E(j) === h;
  }, Q.isValidElementType = function(j) {
    return typeof j == "string" || typeof j == "function" || j === r || j === f || j === s || j === a || j === h || j === g || typeof j == "object" && j !== null && (j.$$typeof === b || j.$$typeof === p || j.$$typeof === i || j.$$typeof === c || j.$$typeof === d || j.$$typeof === w || j.$$typeof === T || j.$$typeof === _ || j.$$typeof === v);
  }, Q.typeOf = E, Q;
}
var ee = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr;
function Li() {
  return zr || (zr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function E($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === r || $ === f || $ === s || $ === a || $ === h || $ === g || typeof $ == "object" && $ !== null && ($.$$typeof === b || $.$$typeof === p || $.$$typeof === i || $.$$typeof === c || $.$$typeof === d || $.$$typeof === w || $.$$typeof === T || $.$$typeof === _ || $.$$typeof === v);
    }
    function k($) {
      if (typeof $ == "object" && $ !== null) {
        var de = $.$$typeof;
        switch (de) {
          case t:
            var dt = $.type;
            switch (dt) {
              case u:
              case f:
              case r:
              case s:
              case a:
              case h:
                return dt;
              default:
                var Ir = dt && dt.$$typeof;
                switch (Ir) {
                  case c:
                  case d:
                  case b:
                  case p:
                  case i:
                    return Ir;
                  default:
                    return de;
                }
            }
          case n:
            return de;
        }
      }
    }
    var j = u, G = f, P = c, A = i, C = t, N = d, Y = r, W = b, x = p, y = n, O = s, z = a, D = h, L = !1;
    function M($) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m($) || k($) === u;
    }
    function m($) {
      return k($) === f;
    }
    function R($) {
      return k($) === c;
    }
    function S($) {
      return k($) === i;
    }
    function q($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function U($) {
      return k($) === d;
    }
    function H($) {
      return k($) === r;
    }
    function J($) {
      return k($) === b;
    }
    function K($) {
      return k($) === p;
    }
    function B($) {
      return k($) === n;
    }
    function X($) {
      return k($) === s;
    }
    function Z($) {
      return k($) === a;
    }
    function re($) {
      return k($) === h;
    }
    ee.AsyncMode = j, ee.ConcurrentMode = G, ee.ContextConsumer = P, ee.ContextProvider = A, ee.Element = C, ee.ForwardRef = N, ee.Fragment = Y, ee.Lazy = W, ee.Memo = x, ee.Portal = y, ee.Profiler = O, ee.StrictMode = z, ee.Suspense = D, ee.isAsyncMode = M, ee.isConcurrentMode = m, ee.isContextConsumer = R, ee.isContextProvider = S, ee.isElement = q, ee.isForwardRef = U, ee.isFragment = H, ee.isLazy = J, ee.isMemo = K, ee.isPortal = B, ee.isProfiler = X, ee.isStrictMode = Z, ee.isSuspense = re, ee.isValidElementType = E, ee.typeOf = k;
  }()), ee;
}
var qr;
function ns() {
  return qr || (qr = 1, process.env.NODE_ENV === "production" ? gt.exports = Di() : gt.exports = Li()), gt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Zt, $r;
function Mi() {
  if ($r) return Zt;
  $r = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var i = {}, c = 0; c < 10; c++)
        i["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(i).map(function(d) {
        return i[d];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        f[d] = d;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Zt = a() ? Object.assign : function(s, i) {
    for (var c, u = r(s), f, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var h in c)
        t.call(c, h) && (u[h] = c[h]);
      if (e) {
        f = e(c);
        for (var g = 0; g < f.length; g++)
          n.call(c, f[g]) && (u[f[g]] = c[f[g]]);
      }
    }
    return u;
  }, Zt;
}
var Qt, Br;
function Gn() {
  if (Br) return Qt;
  Br = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qt = e, Qt;
}
var en, Wr;
function rs() {
  return Wr || (Wr = 1, en = Function.call.bind(Object.prototype.hasOwnProperty)), en;
}
var tn, Yr;
function zi() {
  if (Yr) return tn;
  Yr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Gn(), n = {}, r = /* @__PURE__ */ rs();
    e = function(s) {
      var i = "Warning: " + s;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function a(s, i, c, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (r(s, d)) {
          var h;
          try {
            if (typeof s[d] != "function") {
              var g = Error(
                (u || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            h = s[d](i, d, u, c, null, t);
          } catch (b) {
            h = b;
          }
          if (h && !(h instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in n)) {
            n[h.message] = !0;
            var p = f ? f() : "";
            e(
              "Failed " + c + " type: " + h.message + (p ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, tn = a, tn;
}
var nn, Ur;
function qi() {
  if (Ur) return nn;
  Ur = 1;
  var e = ns(), t = Mi(), n = /* @__PURE__ */ Gn(), r = /* @__PURE__ */ rs(), a = /* @__PURE__ */ zi(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return nn = function(c, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(m) {
      var R = m && (f && m[f] || m[d]);
      if (typeof R == "function")
        return R;
    }
    var g = "<<anonymous>>", p = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: _(),
      arrayOf: E,
      element: k(),
      elementType: j(),
      instanceOf: G,
      node: N(),
      objectOf: A,
      oneOf: P,
      oneOfType: C,
      shape: W,
      exact: x
    };
    function b(m, R) {
      return m === R ? m !== 0 || 1 / m === 1 / R : m !== m && R !== R;
    }
    function v(m, R) {
      this.message = m, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function w(m) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, S = 0;
      function q(H, J, K, B, X, Z, re) {
        if (B = B || g, Z = Z || K, re !== n) {
          if (u) {
            var $ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw $.name = "Invariant Violation", $;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var de = B + ":" + K;
            !R[de] && // Avoid spamming the console because they are often not actionable except for lib authors
            S < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + B + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[de] = !0, S++);
          }
        }
        return J[K] == null ? H ? J[K] === null ? new v("The " + X + " `" + Z + "` is marked as required " + ("in `" + B + "`, but its value is `null`.")) : new v("The " + X + " `" + Z + "` is marked as required in " + ("`" + B + "`, but its value is `undefined`.")) : null : m(J, K, B, X, Z);
      }
      var U = q.bind(null, !1);
      return U.isRequired = q.bind(null, !0), U;
    }
    function T(m) {
      function R(S, q, U, H, J, K) {
        var B = S[q], X = z(B);
        if (X !== m) {
          var Z = D(B);
          return new v(
            "Invalid " + H + " `" + J + "` of type " + ("`" + Z + "` supplied to `" + U + "`, expected ") + ("`" + m + "`."),
            { expectedType: m }
          );
        }
        return null;
      }
      return w(R);
    }
    function _() {
      return w(i);
    }
    function E(m) {
      function R(S, q, U, H, J) {
        if (typeof m != "function")
          return new v("Property `" + J + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var K = S[q];
        if (!Array.isArray(K)) {
          var B = z(K);
          return new v("Invalid " + H + " `" + J + "` of type " + ("`" + B + "` supplied to `" + U + "`, expected an array."));
        }
        for (var X = 0; X < K.length; X++) {
          var Z = m(K, X, U, H, J + "[" + X + "]", n);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return w(R);
    }
    function k() {
      function m(R, S, q, U, H) {
        var J = R[S];
        if (!c(J)) {
          var K = z(J);
          return new v("Invalid " + U + " `" + H + "` of type " + ("`" + K + "` supplied to `" + q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(m);
    }
    function j() {
      function m(R, S, q, U, H) {
        var J = R[S];
        if (!e.isValidElementType(J)) {
          var K = z(J);
          return new v("Invalid " + U + " `" + H + "` of type " + ("`" + K + "` supplied to `" + q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(m);
    }
    function G(m) {
      function R(S, q, U, H, J) {
        if (!(S[q] instanceof m)) {
          var K = m.name || g, B = M(S[q]);
          return new v("Invalid " + H + " `" + J + "` of type " + ("`" + B + "` supplied to `" + U + "`, expected ") + ("instance of `" + K + "`."));
        }
        return null;
      }
      return w(R);
    }
    function P(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), i;
      function R(S, q, U, H, J) {
        for (var K = S[q], B = 0; B < m.length; B++)
          if (b(K, m[B]))
            return null;
        var X = JSON.stringify(m, function(re, $) {
          var de = D($);
          return de === "symbol" ? String($) : $;
        });
        return new v("Invalid " + H + " `" + J + "` of value `" + String(K) + "` " + ("supplied to `" + U + "`, expected one of " + X + "."));
      }
      return w(R);
    }
    function A(m) {
      function R(S, q, U, H, J) {
        if (typeof m != "function")
          return new v("Property `" + J + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var K = S[q], B = z(K);
        if (B !== "object")
          return new v("Invalid " + H + " `" + J + "` of type " + ("`" + B + "` supplied to `" + U + "`, expected an object."));
        for (var X in K)
          if (r(K, X)) {
            var Z = m(K, X, U, H, J + "." + X, n);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return w(R);
    }
    function C(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var R = 0; R < m.length; R++) {
        var S = m[R];
        if (typeof S != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + L(S) + " at index " + R + "."
          ), i;
      }
      function q(U, H, J, K, B) {
        for (var X = [], Z = 0; Z < m.length; Z++) {
          var re = m[Z], $ = re(U, H, J, K, B, n);
          if ($ == null)
            return null;
          $.data && r($.data, "expectedType") && X.push($.data.expectedType);
        }
        var de = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new v("Invalid " + K + " `" + B + "` supplied to " + ("`" + J + "`" + de + "."));
      }
      return w(q);
    }
    function N() {
      function m(R, S, q, U, H) {
        return y(R[S]) ? null : new v("Invalid " + U + " `" + H + "` supplied to " + ("`" + q + "`, expected a ReactNode."));
      }
      return w(m);
    }
    function Y(m, R, S, q, U) {
      return new v(
        (m || "React class") + ": " + R + " type `" + S + "." + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function W(m) {
      function R(S, q, U, H, J) {
        var K = S[q], B = z(K);
        if (B !== "object")
          return new v("Invalid " + H + " `" + J + "` of type `" + B + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var X in m) {
          var Z = m[X];
          if (typeof Z != "function")
            return Y(U, H, J, X, D(Z));
          var re = Z(K, X, U, H, J + "." + X, n);
          if (re)
            return re;
        }
        return null;
      }
      return w(R);
    }
    function x(m) {
      function R(S, q, U, H, J) {
        var K = S[q], B = z(K);
        if (B !== "object")
          return new v("Invalid " + H + " `" + J + "` of type `" + B + "` " + ("supplied to `" + U + "`, expected `object`."));
        var X = t({}, S[q], m);
        for (var Z in X) {
          var re = m[Z];
          if (r(m, Z) && typeof re != "function")
            return Y(U, H, J, Z, D(re));
          if (!re)
            return new v(
              "Invalid " + H + " `" + J + "` key `" + Z + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(S[q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(m), null, "  ")
            );
          var $ = re(K, Z, U, H, J + "." + Z, n);
          if ($)
            return $;
        }
        return null;
      }
      return w(R);
    }
    function y(m) {
      switch (typeof m) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !m;
        case "object":
          if (Array.isArray(m))
            return m.every(y);
          if (m === null || c(m))
            return !0;
          var R = h(m);
          if (R) {
            var S = R.call(m), q;
            if (R !== m.entries) {
              for (; !(q = S.next()).done; )
                if (!y(q.value))
                  return !1;
            } else
              for (; !(q = S.next()).done; ) {
                var U = q.value;
                if (U && !y(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function O(m, R) {
      return m === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function z(m) {
      var R = typeof m;
      return Array.isArray(m) ? "array" : m instanceof RegExp ? "object" : O(R, m) ? "symbol" : R;
    }
    function D(m) {
      if (typeof m > "u" || m === null)
        return "" + m;
      var R = z(m);
      if (R === "object") {
        if (m instanceof Date)
          return "date";
        if (m instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function L(m) {
      var R = D(m);
      switch (R) {
        case "array":
        case "object":
          return "an " + R;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + R;
        default:
          return R;
      }
    }
    function M(m) {
      return !m.constructor || !m.constructor.name ? g : m.constructor.name;
    }
    return p.checkPropTypes = a, p.resetWarningCache = a.resetWarningCache, p.PropTypes = p, p;
  }, nn;
}
var rn, Hr;
function $i() {
  if (Hr) return rn;
  Hr = 1;
  var e = /* @__PURE__ */ Gn();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, rn = function() {
    function r(i, c, u, f, d, h) {
      if (h !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, rn;
}
var Vr;
function Bi() {
  if (Vr) return ht.exports;
  if (Vr = 1, process.env.NODE_ENV !== "production") {
    var e = ns(), t = !0;
    ht.exports = /* @__PURE__ */ qi()(e.isElement, t);
  } else
    ht.exports = /* @__PURE__ */ $i()();
  return ht.exports;
}
var Wi = /* @__PURE__ */ Bi();
const l = /* @__PURE__ */ es(Wi);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Yi(e, t, n) {
  return (t = Hi(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Gr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gr(Object(n), !0).forEach(function(r) {
      Yi(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ui(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Hi(e) {
  var t = Ui(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const Xr = () => {
};
let Xn = {}, as = {}, ss = null, is = {
  mark: Xr,
  measure: Xr
};
try {
  typeof window < "u" && (Xn = window), typeof document < "u" && (as = document), typeof MutationObserver < "u" && (ss = MutationObserver), typeof performance < "u" && (is = performance);
} catch {
}
const {
  userAgent: Kr = ""
} = Xn.navigator || {}, Te = Xn, ne = as, Jr = ss, vt = is;
Te.document;
const je = !!ne.documentElement && !!ne.head && typeof ne.addEventListener == "function" && typeof ne.createElement == "function", os = ~Kr.indexOf("MSIE") || ~Kr.indexOf("Trident/");
var Vi = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Gi = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, ls = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, Xi = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, cs = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], ie = "classic", Bt = "duotone", Ki = "sharp", Ji = "sharp-duotone", us = [ie, Bt, Ki, Ji], Zi = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, Qi = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, eo = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), to = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, no = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Zr = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, ro = ["kit"], ao = {
  kit: {
    "fa-kit": "fak"
  }
}, so = ["fak", "fakd"], io = {
  kit: {
    fak: "fa-kit"
  }
}, Qr = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, bt = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, oo = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], lo = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], co = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, uo = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, fo = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, wn = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, mo = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Nn = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...oo, ...mo], po = ["solid", "regular", "light", "thin", "duotone", "brands"], fs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ho = fs.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), go = [...Object.keys(fo), ...po, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", bt.GROUP, bt.SWAP_OPACITY, bt.PRIMARY, bt.SECONDARY].concat(fs.map((e) => "".concat(e, "x"))).concat(ho.map((e) => "w-".concat(e))), vo = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const xe = "___FONT_AWESOME___", jn = 16, ds = "fa", ms = "svg-inline--fa", Fe = "data-fa-i2svg", Rn = "data-fa-pseudo-element", bo = "data-fa-pseudo-element-pending", Kn = "data-prefix", Jn = "data-icon", ea = "fontawesome-i2svg", yo = "async", xo = ["HTML", "HEAD", "STYLE", "SCRIPT"], ps = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function ot(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[ie];
    }
  });
}
const hs = I({}, ls);
hs[ie] = I(I(I(I({}, {
  "fa-duotone": "duotone"
}), ls[ie]), Zr.kit), Zr["kit-duotone"]);
const wo = ot(hs), _n = I({}, to);
_n[ie] = I(I(I(I({}, {
  duotone: "fad"
}), _n[ie]), Qr.kit), Qr["kit-duotone"]);
const ta = ot(_n), En = I({}, wn);
En[ie] = I(I({}, En[ie]), io.kit);
const Zn = ot(En), Tn = I({}, uo);
Tn[ie] = I(I({}, Tn[ie]), ao.kit);
ot(Tn);
const No = Vi, gs = "fa-layers-text", jo = Gi, Ro = I({}, Zi);
ot(Ro);
const _o = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], an = Xi, Eo = [...ro, ...go], Qe = Te.FontAwesomeConfig || {};
function To(e) {
  var t = ne.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Co(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ne && typeof ne.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = Co(To(n));
  a != null && (Qe[r] = a);
});
const vs = {
  styleDefault: "solid",
  familyDefault: ie,
  cssPrefix: ds,
  replacementClass: ms,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Qe.familyPrefix && (Qe.cssPrefix = Qe.familyPrefix);
const Ye = I(I({}, vs), Qe);
Ye.autoReplaceSvg || (Ye.observeMutations = !1);
const V = {};
Object.keys(vs).forEach((e) => {
  Object.defineProperty(V, e, {
    enumerable: !0,
    set: function(t) {
      Ye[e] = t, et.forEach((n) => n(V));
    },
    get: function() {
      return Ye[e];
    }
  });
});
Object.defineProperty(V, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Ye.cssPrefix = e, et.forEach((t) => t(V));
  },
  get: function() {
    return Ye.cssPrefix;
  }
});
Te.FontAwesomeConfig = V;
const et = [];
function ko(e) {
  return et.push(e), () => {
    et.splice(et.indexOf(e), 1);
  };
}
const Re = jn, pe = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Oo(e) {
  if (!e || !je)
    return;
  const t = ne.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = ne.head.childNodes;
  let r = null;
  for (let a = n.length - 1; a > -1; a--) {
    const s = n[a], i = (s.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(i) > -1 && (r = s);
  }
  return ne.head.insertBefore(t, r), e;
}
const So = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function rt() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += So[Math.random() * 62 | 0];
  return t;
}
function Ve(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Qn(e) {
  return e.classList ? Ve(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function bs(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Po(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(bs(e[n]), '" '), "").trim();
}
function Wt(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function er(e) {
  return e.size !== pe.size || e.x !== pe.x || e.y !== pe.y || e.rotate !== pe.rotate || e.flipX || e.flipY;
}
function Ao(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, s = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), c = "rotate(".concat(t.rotate, " 0 0)"), u = {
    transform: "".concat(s, " ").concat(i, " ").concat(c)
  }, f = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: u,
    path: f
  };
}
function Io(e) {
  let {
    transform: t,
    width: n = jn,
    height: r = jn,
    startCentered: a = !1
  } = e, s = "";
  return a && os ? s += "translate(".concat(t.x / Re - n / 2, "em, ").concat(t.y / Re - r / 2, "em) ") : a ? s += "translate(calc(-50% + ".concat(t.x / Re, "em), calc(-50% + ").concat(t.y / Re, "em)) ") : s += "translate(".concat(t.x / Re, "em, ").concat(t.y / Re, "em) "), s += "scale(".concat(t.size / Re * (t.flipX ? -1 : 1), ", ").concat(t.size / Re * (t.flipY ? -1 : 1), ") "), s += "rotate(".concat(t.rotate, "deg) "), s;
}
var Fo = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function ys() {
  const e = ds, t = ms, n = V.cssPrefix, r = V.replacementClass;
  let a = Fo;
  if (n !== e || r !== t) {
    const s = new RegExp("\\.".concat(e, "\\-"), "g"), i = new RegExp("\\--".concat(e, "\\-"), "g"), c = new RegExp("\\.".concat(t), "g");
    a = a.replace(s, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(c, ".".concat(r));
  }
  return a;
}
let na = !1;
function sn() {
  V.autoAddCss && !na && (Oo(ys()), na = !0);
}
var Do = {
  mixout() {
    return {
      dom: {
        css: ys,
        insertCss: sn
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        sn();
      },
      beforeI2svg() {
        sn();
      }
    };
  }
};
const we = Te || {};
we[xe] || (we[xe] = {});
we[xe].styles || (we[xe].styles = {});
we[xe].hooks || (we[xe].hooks = {});
we[xe].shims || (we[xe].shims = []);
var he = we[xe];
const xs = [], ws = function() {
  ne.removeEventListener("DOMContentLoaded", ws), kt = 1, xs.map((e) => e());
};
let kt = !1;
je && (kt = (ne.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ne.readyState), kt || ne.addEventListener("DOMContentLoaded", ws));
function Lo(e) {
  je && (kt ? setTimeout(e, 0) : xs.push(e));
}
function lt(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? bs(e) : "<".concat(t, " ").concat(Po(n), ">").concat(r.map(lt).join(""), "</").concat(t, ">");
}
function ra(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var on = function(t, n, r, a) {
  var s = Object.keys(t), i = s.length, c = n, u, f, d;
  for (r === void 0 ? (u = 1, d = t[s[0]]) : (u = 0, d = r); u < i; u++)
    f = s[u], d = c(d, t[f], f, t);
  return d;
};
function Mo(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      const s = e.charCodeAt(n++);
      (s & 64512) == 56320 ? t.push(((a & 1023) << 10) + (s & 1023) + 65536) : (t.push(a), n--);
    } else
      t.push(a);
  }
  return t;
}
function Cn(e) {
  const t = Mo(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function zo(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function aa(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function kn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = aa(t);
  typeof he.hooks.addPack == "function" && !r ? he.hooks.addPack(e, aa(t)) : he.styles[e] = I(I({}, he.styles[e] || {}), a), e === "fas" && kn("fa", t);
}
const {
  styles: at,
  shims: qo
} = he, Ns = Object.keys(Zn), $o = Ns.reduce((e, t) => (e[t] = Object.keys(Zn[t]), e), {});
let tr = null, js = {}, Rs = {}, _s = {}, Es = {}, Ts = {};
function Bo(e) {
  return ~Eo.indexOf(e);
}
function Wo(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Bo(a) ? a : null;
}
const Cs = () => {
  const e = (r) => on(at, (a, s, i) => (a[i] = on(s, r, {}), a), {});
  js = e((r, a, s) => (a[3] && (r[a[3]] = s), a[2] && a[2].filter((c) => typeof c == "number").forEach((c) => {
    r[c.toString(16)] = s;
  }), r)), Rs = e((r, a, s) => (r[s] = s, a[2] && a[2].filter((c) => typeof c == "string").forEach((c) => {
    r[c] = s;
  }), r)), Ts = e((r, a, s) => {
    const i = a[2];
    return r[s] = s, i.forEach((c) => {
      r[c] = s;
    }), r;
  });
  const t = "far" in at || V.autoFetchSvg, n = on(qo, (r, a) => {
    const s = a[0];
    let i = a[1];
    const c = a[2];
    return i === "far" && !t && (i = "fas"), typeof s == "string" && (r.names[s] = {
      prefix: i,
      iconName: c
    }), typeof s == "number" && (r.unicodes[s.toString(16)] = {
      prefix: i,
      iconName: c
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  _s = n.names, Es = n.unicodes, tr = Yt(V.styleDefault, {
    family: V.familyDefault
  });
};
ko((e) => {
  tr = Yt(e.styleDefault, {
    family: V.familyDefault
  });
});
Cs();
function nr(e, t) {
  return (js[e] || {})[t];
}
function Yo(e, t) {
  return (Rs[e] || {})[t];
}
function Pe(e, t) {
  return (Ts[e] || {})[t];
}
function ks(e) {
  return _s[e] || {
    prefix: null,
    iconName: null
  };
}
function Uo(e) {
  const t = Es[e], n = nr("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Ce() {
  return tr;
}
const Os = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Ho(e) {
  let t = ie;
  const n = Ns.reduce((r, a) => (r[a] = "".concat(V.cssPrefix, "-").concat(a), r), {});
  return us.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => $o[r].includes(a))) && (t = r);
  }), t;
}
function Yt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = ie
  } = t, r = wo[n][e];
  if (n === Bt && !e)
    return "fad";
  const a = ta[n][e] || ta[n][r], s = e in he.styles ? e : null;
  return a || s || null;
}
function Vo(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = Wo(V.cssPrefix, r);
    a ? n = a : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function sa(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function Ut(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const a = Nn.concat(lo), s = sa(e.filter((h) => a.includes(h))), i = sa(e.filter((h) => !Nn.includes(h))), c = s.filter((h) => (r = h, !cs.includes(h))), [u = null] = c, f = Ho(s), d = I(I({}, Vo(i)), {}, {
    prefix: Yt(u, {
      family: f
    })
  });
  return I(I(I({}, d), Jo({
    values: e,
    family: f,
    styles: at,
    config: V,
    canonical: d,
    givenPrefix: r
  })), Go(n, r, d));
}
function Go(e, t, n) {
  let {
    prefix: r,
    iconName: a
  } = n;
  if (e || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  const s = t === "fa" ? ks(a) : {}, i = Pe(r, a);
  return a = s.iconName || i || a, r = s.prefix || r, r === "far" && !at.far && at.fas && !V.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const Xo = us.filter((e) => e !== ie || e !== Bt), Ko = Object.keys(wn).filter((e) => e !== ie).map((e) => Object.keys(wn[e])).flat();
function Jo(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: s = {},
    config: i = {}
  } = e, c = n === Bt, u = t.includes("fa-duotone") || t.includes("fad"), f = i.familyDefault === "duotone", d = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!c && (u || f || d) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Xo.includes(n) && (Object.keys(s).find((g) => Ko.includes(g)) || i.autoFetchSvg)) {
    const g = eo.get(n).defaultShortPrefixId;
    r.prefix = g, r.iconName = Pe(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = Ce() || "fas"), r;
}
class Zo {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((s) => {
      this.definitions[s] = I(I({}, this.definitions[s] || {}), a[s]), kn(s, a[s]);
      const i = Zn[ie][s];
      i && kn(i, a[s]), Cs();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((a) => {
      const {
        prefix: s,
        iconName: i,
        icon: c
      } = r[a], u = c[2];
      t[s] || (t[s] = {}), u.length > 0 && u.forEach((f) => {
        typeof f == "string" && (t[s][f] = c);
      }), t[s][i] = c;
    }), t;
  }
}
let ia = [], qe = {};
const Be = {}, Qo = Object.keys(Be);
function el(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return ia = e, qe = {}, Object.keys(Be).forEach((r) => {
    Qo.indexOf(r) === -1 && delete Be[r];
  }), ia.forEach((r) => {
    const a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach((s) => {
      typeof a[s] == "function" && (n[s] = a[s]), typeof a[s] == "object" && Object.keys(a[s]).forEach((i) => {
        n[s] || (n[s] = {}), n[s][i] = a[s][i];
      });
    }), r.hooks) {
      const s = r.hooks();
      Object.keys(s).forEach((i) => {
        qe[i] || (qe[i] = []), qe[i].push(s[i]);
      });
    }
    r.provides && r.provides(Be);
  }), n;
}
function On(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (qe[e] || []).forEach((i) => {
    t = i.apply(null, [t, ...r]);
  }), t;
}
function De(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (qe[e] || []).forEach((s) => {
    s.apply(null, n);
  });
}
function ke() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Be[e] ? Be[e].apply(null, t) : void 0;
}
function Sn(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Ce();
  if (t)
    return t = Pe(n, t) || t, ra(Ss.definitions, n, t) || ra(he.styles, n, t);
}
const Ss = new Zo(), tl = () => {
  V.autoReplaceSvg = !1, V.observeMutations = !1, De("noAuto");
}, nl = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return je ? (De("beforeI2svg", e), ke("pseudoElements2svg", e), ke("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    V.autoReplaceSvg === !1 && (V.autoReplaceSvg = !0), V.observeMutations = !0, Lo(() => {
      al({
        autoReplaceSvgRoot: t
      }), De("watch", e);
    });
  }
}, rl = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Pe(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Yt(e[0]);
      return {
        prefix: n,
        iconName: Pe(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(V.cssPrefix, "-")) > -1 || e.match(No))) {
      const t = Ut(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Ce(),
        iconName: Pe(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Ce();
      return {
        prefix: t,
        iconName: Pe(t, e) || e
      };
    }
  }
}, ce = {
  noAuto: tl,
  config: V,
  dom: nl,
  parse: rl,
  library: Ss,
  findIconDefinition: Sn,
  toHtml: lt
}, al = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = ne
  } = e;
  (Object.keys(he.styles).length > 0 || V.autoFetchSvg) && je && V.autoReplaceSvg && ce.dom.i2svg({
    node: t
  });
};
function Ht(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => lt(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!je) return;
      const n = ne.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function sl(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: s,
    transform: i
  } = e;
  if (er(i) && n.found && !r.found) {
    const {
      width: c,
      height: u
    } = n, f = {
      x: c / u / 2,
      y: 0.5
    };
    a.style = Wt(I(I({}, s), {}, {
      "transform-origin": "".concat(f.x + i.x / 16, "em ").concat(f.y + i.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function il(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: a,
    symbol: s
  } = e;
  const i = s === !0 ? "".concat(t, "-").concat(V.cssPrefix, "-").concat(n) : s;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: I(I({}, a), {}, {
        id: i
      }),
      children: r
    }]
  }];
}
function rr(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: a,
    transform: s,
    symbol: i,
    title: c,
    maskId: u,
    titleId: f,
    extra: d,
    watchable: h = !1
  } = e, {
    width: g,
    height: p
  } = n.found ? n : t, b = so.includes(r), v = [V.replacementClass, a ? "".concat(V.cssPrefix, "-").concat(a) : ""].filter((j) => d.classes.indexOf(j) === -1).filter((j) => j !== "" || !!j).concat(d.classes).join(" ");
  let w = {
    children: [],
    attributes: I(I({}, d.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: v,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(g, " ").concat(p)
    })
  };
  const T = b && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(g / p * 16 * 0.0625, "em")
  } : {};
  h && (w.attributes[Fe] = ""), c && (w.children.push({
    tag: "title",
    attributes: {
      id: w.attributes["aria-labelledby"] || "title-".concat(f || rt())
    },
    children: [c]
  }), delete w.attributes.title);
  const _ = I(I({}, w), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: u,
    transform: s,
    symbol: i,
    styles: I(I({}, T), d.styles)
  }), {
    children: E,
    attributes: k
  } = n.found && t.found ? ke("generateAbstractMask", _) || {
    children: [],
    attributes: {}
  } : ke("generateAbstractIcon", _) || {
    children: [],
    attributes: {}
  };
  return _.children = E, _.attributes = k, i ? il(_) : sl(_);
}
function oa(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: a,
    title: s,
    extra: i,
    watchable: c = !1
  } = e, u = I(I(I({}, i.attributes), s ? {
    title: s
  } : {}), {}, {
    class: i.classes.join(" ")
  });
  c && (u[Fe] = "");
  const f = I({}, i.styles);
  er(a) && (f.transform = Io({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), f["-webkit-transform"] = f.transform);
  const d = Wt(f);
  d.length > 0 && (u.style = d);
  const h = [];
  return h.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), s && h.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [s]
  }), h;
}
function ol(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, a = I(I(I({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), s = Wt(r.styles);
  s.length > 0 && (a.style = s);
  const i = [];
  return i.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), n && i.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), i;
}
const {
  styles: ln
} = he;
function Pn(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(V.cssPrefix, "-").concat(an.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(V.cssPrefix, "-").concat(an.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(V.cssPrefix, "-").concat(an.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : a = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: a
  };
}
const ll = {
  found: !1,
  width: 512,
  height: 512
};
function cl(e, t) {
  !ps && !V.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function An(e, t) {
  let n = t;
  return t === "fa" && V.styleDefault !== null && (t = Ce()), new Promise((r, a) => {
    if (n === "fa") {
      const s = ks(e) || {};
      e = s.iconName || e, t = s.prefix || t;
    }
    if (e && t && ln[t] && ln[t][e]) {
      const s = ln[t][e];
      return r(Pn(s));
    }
    cl(e, t), r(I(I({}, ll), {}, {
      icon: V.showMissingIcons && e ? ke("missingIconAbstract") || {} : {}
    }));
  });
}
const la = () => {
}, In = V.measurePerformance && vt && vt.mark && vt.measure ? vt : {
  mark: la,
  measure: la
}, Ze = 'FA "6.7.2"', ul = (e) => (In.mark("".concat(Ze, " ").concat(e, " begins")), () => Ps(e)), Ps = (e) => {
  In.mark("".concat(Ze, " ").concat(e, " ends")), In.measure("".concat(Ze, " ").concat(e), "".concat(Ze, " ").concat(e, " begins"), "".concat(Ze, " ").concat(e, " ends"));
};
var ar = {
  begin: ul,
  end: Ps
};
const Rt = () => {
};
function ca(e) {
  return typeof (e.getAttribute ? e.getAttribute(Fe) : null) == "string";
}
function fl(e) {
  const t = e.getAttribute ? e.getAttribute(Kn) : null, n = e.getAttribute ? e.getAttribute(Jn) : null;
  return t && n;
}
function dl(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(V.replacementClass);
}
function ml() {
  return V.autoReplaceSvg === !0 ? _t.replace : _t[V.autoReplaceSvg] || _t.replace;
}
function pl(e) {
  return ne.createElementNS("http://www.w3.org/2000/svg", e);
}
function hl(e) {
  return ne.createElement(e);
}
function As(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? pl : hl
  } = t;
  if (typeof e == "string")
    return ne.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(s) {
    r.setAttribute(s, e.attributes[s]);
  }), (e.children || []).forEach(function(s) {
    r.appendChild(As(s, {
      ceFn: n
    }));
  }), r;
}
function gl(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const _t = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(As(n), t);
      }), t.getAttribute(Fe) === null && V.keepOriginalSource) {
        let n = ne.createComment(gl(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Qn(t).indexOf(V.replacementClass))
      return _t.replace(e);
    const r = new RegExp("".concat(V.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const s = n[0].attributes.class.split(" ").reduce((i, c) => (c === V.replacementClass || c.match(r) ? i.toSvg.push(c) : i.toNode.push(c), i), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = s.toSvg.join(" "), s.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", s.toNode.join(" "));
    }
    const a = n.map((s) => lt(s)).join(`
`);
    t.setAttribute(Fe, ""), t.innerHTML = a;
  }
};
function ua(e) {
  e();
}
function Is(e, t) {
  const n = typeof t == "function" ? t : Rt;
  if (e.length === 0)
    n();
  else {
    let r = ua;
    V.mutateApproach === yo && (r = Te.requestAnimationFrame || ua), r(() => {
      const a = ml(), s = ar.begin("mutate");
      e.map(a), s(), n();
    });
  }
}
let sr = !1;
function Fs() {
  sr = !0;
}
function Fn() {
  sr = !1;
}
let Ot = null;
function fa(e) {
  if (!Jr || !V.observeMutations)
    return;
  const {
    treeCallback: t = Rt,
    nodeCallback: n = Rt,
    pseudoElementsCallback: r = Rt,
    observeMutationsRoot: a = ne
  } = e;
  Ot = new Jr((s) => {
    if (sr) return;
    const i = Ce();
    Ve(s).forEach((c) => {
      if (c.type === "childList" && c.addedNodes.length > 0 && !ca(c.addedNodes[0]) && (V.searchPseudoElements && r(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && V.searchPseudoElements && r(c.target.parentNode), c.type === "attributes" && ca(c.target) && ~_o.indexOf(c.attributeName))
        if (c.attributeName === "class" && fl(c.target)) {
          const {
            prefix: u,
            iconName: f
          } = Ut(Qn(c.target));
          c.target.setAttribute(Kn, u || i), f && c.target.setAttribute(Jn, f);
        } else dl(c.target) && n(c.target);
    });
  }), je && Ot.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function vl() {
  Ot && Ot.disconnect();
}
function bl(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const s = a.split(":"), i = s[0], c = s.slice(1);
    return i && c.length > 0 && (r[i] = c.join(":").trim()), r;
  }, {})), n;
}
function yl(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = Ut(Qn(e));
  return a.prefix || (a.prefix = Ce()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Yo(a.prefix, e.innerText) || nr(a.prefix, Cn(e.innerText))), !a.iconName && V.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function xl(e) {
  const t = Ve(e.attributes).reduce((a, s) => (a.name !== "class" && a.name !== "style" && (a[s.name] = s.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return V.autoA11y && (n ? t["aria-labelledby"] = "".concat(V.replacementClass, "-title-").concat(r || rt()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function wl() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: pe,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function da(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: a
  } = yl(e), s = xl(e), i = On("parseNodeAttributes", {}, e);
  let c = t.styleParser ? bl(e) : [];
  return I({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: pe,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: a,
      styles: c,
      attributes: s
    }
  }, i);
}
const {
  styles: Nl
} = he;
function Ds(e) {
  const t = V.autoReplaceSvg === "nest" ? da(e, {
    styleParser: !1
  }) : da(e);
  return ~t.extra.classes.indexOf(gs) ? ke("generateLayersText", e, t) : ke("generateSvgReplacementMutation", e, t);
}
function jl() {
  return [...no, ...Nn];
}
function ma(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!je) return Promise.resolve();
  const n = ne.documentElement.classList, r = (d) => n.add("".concat(ea, "-").concat(d)), a = (d) => n.remove("".concat(ea, "-").concat(d)), s = V.autoFetchSvg ? jl() : cs.concat(Object.keys(Nl));
  s.includes("fa") || s.push("fa");
  const i = [".".concat(gs, ":not([").concat(Fe, "])")].concat(s.map((d) => ".".concat(d, ":not([").concat(Fe, "])"))).join(", ");
  if (i.length === 0)
    return Promise.resolve();
  let c = [];
  try {
    c = Ve(e.querySelectorAll(i));
  } catch {
  }
  if (c.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const u = ar.begin("onTree"), f = c.reduce((d, h) => {
    try {
      const g = Ds(h);
      g && d.push(g);
    } catch (g) {
      ps || g.name === "MissingIcon" && console.error(g);
    }
    return d;
  }, []);
  return new Promise((d, h) => {
    Promise.all(f).then((g) => {
      Is(g, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), u(), d();
      });
    }).catch((g) => {
      u(), h(g);
    });
  });
}
function Rl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Ds(e).then((n) => {
    n && Is([n], t);
  });
}
function _l(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Sn(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : Sn(a || {})), e(r, I(I({}, n), {}, {
      mask: a
    }));
  };
}
const El = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = pe,
    symbol: r = !1,
    mask: a = null,
    maskId: s = null,
    title: i = null,
    titleId: c = null,
    classes: u = [],
    attributes: f = {},
    styles: d = {}
  } = t;
  if (!e) return;
  const {
    prefix: h,
    iconName: g,
    icon: p
  } = e;
  return Ht(I({
    type: "icon"
  }, e), () => (De("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), V.autoA11y && (i ? f["aria-labelledby"] = "".concat(V.replacementClass, "-title-").concat(c || rt()) : (f["aria-hidden"] = "true", f.focusable = "false")), rr({
    icons: {
      main: Pn(p),
      mask: a ? Pn(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: h,
    iconName: g,
    transform: I(I({}, pe), n),
    symbol: r,
    title: i,
    maskId: s,
    titleId: c,
    extra: {
      attributes: f,
      styles: d,
      classes: u
    }
  })));
};
var Tl = {
  mixout() {
    return {
      icon: _l(El)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = ma, e.nodeCallback = Rl, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = ne,
        callback: r = () => {
        }
      } = t;
      return ma(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: a,
        titleId: s,
        prefix: i,
        transform: c,
        symbol: u,
        mask: f,
        maskId: d,
        extra: h
      } = n;
      return new Promise((g, p) => {
        Promise.all([An(r, i), f.iconName ? An(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((b) => {
          let [v, w] = b;
          g([t, rr({
            icons: {
              main: v,
              mask: w
            },
            prefix: i,
            iconName: r,
            transform: c,
            symbol: u,
            maskId: d,
            title: a,
            titleId: s,
            extra: h,
            watchable: !0
          })]);
        }).catch(p);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        transform: s,
        styles: i
      } = t;
      const c = Wt(i);
      c.length > 0 && (r.style = c);
      let u;
      return er(s) && (u = ke("generateAbstractTransformGrouping", {
        main: a,
        transform: s,
        containerWidth: a.width,
        iconWidth: a.width
      })), n.push(u || a.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, Cl = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Ht({
          type: "layer"
        }, () => {
          De("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((a) => {
            Array.isArray(a) ? a.map((s) => {
              r = r.concat(s.abstract);
            }) : r = r.concat(a.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(V.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, kl = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: a = {},
          styles: s = {}
        } = t;
        return Ht({
          type: "counter",
          content: e
        }, () => (De("beforeDOMElementCreation", {
          content: e,
          params: t
        }), ol({
          content: e.toString(),
          title: n,
          extra: {
            attributes: a,
            styles: s,
            classes: ["".concat(V.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, Ol = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = pe,
          title: r = null,
          classes: a = [],
          attributes: s = {},
          styles: i = {}
        } = t;
        return Ht({
          type: "text",
          content: e
        }, () => (De("beforeDOMElementCreation", {
          content: e,
          params: t
        }), oa({
          content: e,
          transform: I(I({}, pe), n),
          title: r,
          extra: {
            attributes: s,
            styles: i,
            classes: ["".concat(V.cssPrefix, "-layers-text"), ...a]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: a,
        extra: s
      } = n;
      let i = null, c = null;
      if (os) {
        const u = parseInt(getComputedStyle(t).fontSize, 10), f = t.getBoundingClientRect();
        i = f.width / u, c = f.height / u;
      }
      return V.autoA11y && !r && (s.attributes["aria-hidden"] = "true"), Promise.resolve([t, oa({
        content: t.innerHTML,
        width: i,
        height: c,
        transform: a,
        title: r,
        extra: s,
        watchable: !0
      })]);
    };
  }
};
const Sl = new RegExp('"', "ug"), pa = [1105920, 1112319], ha = I(I(I(I({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Qi), vo), co), Dn = Object.keys(ha).reduce((e, t) => (e[t.toLowerCase()] = ha[t], e), {}), Pl = Object.keys(Dn).reduce((e, t) => {
  const n = Dn[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function Al(e) {
  const t = e.replace(Sl, ""), n = zo(t, 0), r = n >= pa[0] && n <= pa[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Cn(a ? t[0] : t),
    isSecondary: r || a
  };
}
function Il(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (Dn[n] || {})[a] || Pl[n];
}
function ga(e, t) {
  const n = "".concat(bo).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const i = Ve(e.children).filter((g) => g.getAttribute(Rn) === t)[0], c = Te.getComputedStyle(e, t), u = c.getPropertyValue("font-family"), f = u.match(jo), d = c.getPropertyValue("font-weight"), h = c.getPropertyValue("content");
    if (i && !f)
      return e.removeChild(i), r();
    if (f && h !== "none" && h !== "") {
      const g = c.getPropertyValue("content");
      let p = Il(u, d);
      const {
        value: b,
        isSecondary: v
      } = Al(g), w = f[0].startsWith("FontAwesome");
      let T = nr(p, b), _ = T;
      if (w) {
        const E = Uo(b);
        E.iconName && E.prefix && (T = E.iconName, p = E.prefix);
      }
      if (T && !v && (!i || i.getAttribute(Kn) !== p || i.getAttribute(Jn) !== _)) {
        e.setAttribute(n, _), i && e.removeChild(i);
        const E = wl(), {
          extra: k
        } = E;
        k.attributes[Rn] = t, An(T, p).then((j) => {
          const G = rr(I(I({}, E), {}, {
            icons: {
              main: j,
              mask: Os()
            },
            prefix: p,
            iconName: _,
            extra: k,
            watchable: !0
          })), P = ne.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(P, e.firstChild) : e.appendChild(P), P.outerHTML = G.map((A) => lt(A)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function Fl(e) {
  return Promise.all([ga(e, "::before"), ga(e, "::after")]);
}
function Dl(e) {
  return e.parentNode !== document.head && !~xo.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Rn) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function va(e) {
  if (je)
    return new Promise((t, n) => {
      const r = Ve(e.querySelectorAll("*")).filter(Dl).map(Fl), a = ar.begin("searchPseudoElements");
      Fs(), Promise.all(r).then(() => {
        a(), Fn(), t();
      }).catch(() => {
        a(), Fn(), n();
      });
    });
}
var Ll = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = va, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = ne
      } = t;
      V.searchPseudoElements && va(n);
    };
  }
};
let ba = !1;
var Ml = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Fs(), ba = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        fa(On("mutationObserverCallbacks", {}));
      },
      noAuto() {
        vl();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        ba ? Fn() : fa(On("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const ya = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const a = r.toLowerCase().split("-"), s = a[0];
    let i = a.slice(1).join("-");
    if (s && i === "h")
      return n.flipX = !0, n;
    if (s && i === "v")
      return n.flipY = !0, n;
    if (i = parseFloat(i), isNaN(i))
      return n;
    switch (s) {
      case "grow":
        n.size = n.size + i;
        break;
      case "shrink":
        n.size = n.size - i;
        break;
      case "left":
        n.x = n.x - i;
        break;
      case "right":
        n.x = n.x + i;
        break;
      case "up":
        n.y = n.y - i;
        break;
      case "down":
        n.y = n.y + i;
        break;
      case "rotate":
        n.rotate = n.rotate + i;
        break;
    }
    return n;
  }, t);
};
var zl = {
  mixout() {
    return {
      parse: {
        transform: (e) => ya(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = ya(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: a,
        iconWidth: s
      } = t;
      const i = {
        transform: "translate(".concat(a / 2, " 256)")
      }, c = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), u = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), f = "rotate(".concat(r.rotate, " 0 0)"), d = {
        transform: "".concat(c, " ").concat(u, " ").concat(f)
      }, h = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, g = {
        outer: i,
        inner: d,
        path: h
      };
      return {
        tag: "g",
        attributes: I({}, g.outer),
        children: [{
          tag: "g",
          attributes: I({}, g.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: I(I({}, n.icon.attributes), g.path)
          }]
        }]
      };
    };
  }
};
const cn = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function xa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function ql(e) {
  return e.tag === "g" ? e.children : [e];
}
var $l = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Ut(n.split(" ").map((a) => a.trim())) : Os();
        return r.prefix || (r.prefix = Ce()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        mask: s,
        maskId: i,
        transform: c
      } = t;
      const {
        width: u,
        icon: f
      } = a, {
        width: d,
        icon: h
      } = s, g = Ao({
        transform: c,
        containerWidth: d,
        iconWidth: u
      }), p = {
        tag: "rect",
        attributes: I(I({}, cn), {}, {
          fill: "white"
        })
      }, b = f.children ? {
        children: f.children.map(xa)
      } : {}, v = {
        tag: "g",
        attributes: I({}, g.inner),
        children: [xa(I({
          tag: f.tag,
          attributes: I(I({}, f.attributes), g.path)
        }, b))]
      }, w = {
        tag: "g",
        attributes: I({}, g.outer),
        children: [v]
      }, T = "mask-".concat(i || rt()), _ = "clip-".concat(i || rt()), E = {
        tag: "mask",
        attributes: I(I({}, cn), {}, {
          id: T,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [p, w]
      }, k = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: _
          },
          children: ql(h)
        }, E]
      };
      return n.push(k, {
        tag: "rect",
        attributes: I({
          fill: "currentColor",
          "clip-path": "url(#".concat(_, ")"),
          mask: "url(#".concat(T, ")")
        }, cn)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Bl = {
  provides(e) {
    let t = !1;
    Te.matchMedia && (t = Te.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: I(I({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const s = I(I({}, a), {}, {
        attributeName: "opacity"
      }), i = {
        tag: "circle",
        attributes: I(I({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || i.children.push({
        tag: "animate",
        attributes: I(I({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: I(I({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(i), n.push({
        tag: "path",
        attributes: I(I({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: I(I({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: I(I({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: I(I({}, s), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, Wl = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Yl = [Do, Tl, Cl, kl, Ol, Ll, Ml, zl, $l, Bl, Wl];
el(Yl, {
  mixoutsTo: ce
});
ce.noAuto;
ce.config;
ce.library;
ce.dom;
const Ln = ce.parse;
ce.findIconDefinition;
ce.toHtml;
const Ul = ce.icon;
ce.layer;
ce.text;
ce.counter;
function wa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wa(Object(n), !0).forEach(function(r) {
      $e(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wa(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function St(e) {
  "@babel/helpers - typeof";
  return St = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, St(e);
}
function $e(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Hl(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, s;
  for (s = 0; s < r.length; s++)
    a = r[s], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Vl(e, t) {
  if (e == null) return {};
  var n = Hl(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (a = 0; a < s.length; a++)
      r = s[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Mn(e) {
  return Gl(e) || Xl(e) || Kl(e) || Jl();
}
function Gl(e) {
  if (Array.isArray(e)) return zn(e);
}
function Xl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Kl(e, t) {
  if (e) {
    if (typeof e == "string") return zn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return zn(e, t);
  }
}
function zn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Jl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zl(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, s = e.bounce, i = e.shake, c = e.flash, u = e.spin, f = e.spinPulse, d = e.spinReverse, h = e.pulse, g = e.fixedWidth, p = e.inverse, b = e.border, v = e.listItem, w = e.flip, T = e.size, _ = e.rotation, E = e.pull, k = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": s,
    "fa-shake": i,
    "fa-flash": c,
    "fa-spin": u,
    "fa-spin-reverse": d,
    "fa-spin-pulse": f,
    "fa-pulse": h,
    "fa-fw": g,
    "fa-inverse": p,
    "fa-border": b,
    "fa-li": v,
    "fa-flip": w === !0,
    "fa-flip-horizontal": w === "horizontal" || w === "both",
    "fa-flip-vertical": w === "vertical" || w === "both"
  }, $e(t, "fa-".concat(T), typeof T < "u" && T !== null), $e(t, "fa-rotate-".concat(_), typeof _ < "u" && _ !== null && _ !== 0), $e(t, "fa-pull-".concat(E), typeof E < "u" && E !== null), $e(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(k).map(function(j) {
    return k[j] ? j : null;
  }).filter(function(j) {
    return j;
  });
}
function Ql(e) {
  return e = e - 0, e === e;
}
function Ls(e) {
  return Ql(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var ec = ["style"];
function tc(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function nc(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = Ls(n.slice(0, r)), s = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[tc(a)] = s : t[a] = s, t;
  }, {});
}
function Ms(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(u) {
    return Ms(e, u);
  }), a = Object.keys(t.attributes || {}).reduce(function(u, f) {
    var d = t.attributes[f];
    switch (f) {
      case "class":
        u.attrs.className = d, delete t.attributes.class;
        break;
      case "style":
        u.attrs.style = nc(d);
        break;
      default:
        f.indexOf("aria-") === 0 || f.indexOf("data-") === 0 ? u.attrs[f.toLowerCase()] = d : u.attrs[Ls(f)] = d;
    }
    return u;
  }, {
    attrs: {}
  }), s = n.style, i = s === void 0 ? {} : s, c = Vl(n, ec);
  return a.attrs.style = me(me({}, a.attrs.style), i), e.apply(void 0, [t.tag, me(me({}, a.attrs), c)].concat(Mn(r)));
}
var zs = !1;
try {
  zs = process.env.NODE_ENV === "production";
} catch {
}
function rc() {
  if (!zs && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Na(e) {
  if (e && St(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Ln.icon)
    return Ln.icon(e);
  if (e === null)
    return null;
  if (e && St(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function un(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? $e({}, e, t) : {};
}
var ja = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
}, te = /* @__PURE__ */ ae.forwardRef(function(e, t) {
  var n = me(me({}, ja), e), r = n.icon, a = n.mask, s = n.symbol, i = n.className, c = n.title, u = n.titleId, f = n.maskId, d = Na(r), h = un("classes", [].concat(Mn(Zl(n)), Mn((i || "").split(" ")))), g = un("transform", typeof n.transform == "string" ? Ln.transform(n.transform) : n.transform), p = un("mask", Na(a)), b = Ul(d, me(me(me(me({}, h), g), p), {}, {
    symbol: s,
    title: c,
    titleId: u,
    maskId: f
  }));
  if (!b)
    return rc("Could not find icon", d), null;
  var v = b.abstract, w = {
    ref: t
  };
  return Object.keys(n).forEach(function(T) {
    ja.hasOwnProperty(T) || (w[T] = n[T]);
  }), ac(v[0], w);
});
te.displayName = "FontAwesomeIcon";
te.propTypes = {
  beat: l.bool,
  border: l.bool,
  beatFade: l.bool,
  bounce: l.bool,
  className: l.string,
  fade: l.bool,
  flash: l.bool,
  mask: l.oneOfType([l.object, l.array, l.string]),
  maskId: l.string,
  fixedWidth: l.bool,
  inverse: l.bool,
  flip: l.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: l.oneOfType([l.object, l.array, l.string]),
  listItem: l.bool,
  pull: l.oneOf(["right", "left"]),
  pulse: l.bool,
  rotation: l.oneOf([0, 90, 180, 270]),
  shake: l.bool,
  size: l.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: l.bool,
  spinPulse: l.bool,
  spinReverse: l.bool,
  symbol: l.oneOfType([l.bool, l.string]),
  title: l.string,
  titleId: l.string,
  transform: l.oneOfType([l.string, l.object]),
  swapOpacity: l.bool
};
var ac = Ms.bind(null, ae.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const sc = {
  prefix: "fas",
  iconName: "cloud",
  icon: [640, 512, [9729], "f0c2", "M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"]
}, ic = {
  prefix: "fas",
  iconName: "compass",
  icon: [512, 512, [129517], "f14e", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, oc = {
  prefix: "fas",
  iconName: "circle-exclamation",
  icon: [512, 512, ["exclamation-circle"], "f06a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, Ra = oc, lc = {
  prefix: "fas",
  iconName: "lock",
  icon: [448, 512, [128274], "f023", "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]
}, cc = {
  prefix: "fas",
  iconName: "pizza-slice",
  icon: [512, 512, [], "f818", "M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, uc = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, fc = uc, dc = {
  prefix: "fas",
  iconName: "arrow-left",
  icon: [448, 512, [8592], "f060", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]
}, fn = {
  prefix: "fas",
  iconName: "phone-volume",
  icon: [512, 512, ["volume-control-phone"], "f2a0", "M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"]
}, mc = {
  prefix: "fas",
  iconName: "envelope",
  icon: [512, 512, [128386, 9993, 61443], "f0e0", "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]
}, pc = {
  prefix: "fas",
  iconName: "circle-info",
  icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, _a = pc, hc = {
  prefix: "fas",
  iconName: "landmark",
  icon: [512, 512, [127963], "f66f", "M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8L32 192c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9l0-.9 4.4-1.6L240.1 4.2zM64 224l64 0 0 192 40 0 0-192 64 0 0 192 48 0 0-192 64 0 0 192 40 0 0-192 64 0 0 196.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 224z"]
}, gc = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, vc = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, bc = vc, Ea = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, yc = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, xc = yc, wc = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, qs = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, Nc = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, jc = Nc, ir = ({
  domain: e = "An official website of the City of Portland",
  icon: t = void 0,
  heading: n = "Official websites use .gov",
  description: r = "A .gov website belongs to an official government organization in the United States.",
  bannerLinkText: a = "Here's how you know",
  showHttpsGuidance: s = !0,
  initiallyExpanded: i = !1,
  className: c = ""
}) => {
  const [u, f] = be(i), d = ["banner", c].filter(Boolean).join(" "), h = () => {
    f(!u);
  };
  return /* @__PURE__ */ o.jsxs("section", { className: d, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "banner-content", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "banner-header", children: [
        /* @__PURE__ */ o.jsx("div", { className: "banner-header-icon", children: t || /* @__PURE__ */ o.jsxs("svg", { width: "24", height: "16", viewBox: "0 0 24 16", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ o.jsx("rect", { width: "24", height: "16", fill: "#B22234" }),
          /* @__PURE__ */ o.jsx("rect", { y: "1.23", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ o.jsx("rect", { y: "3.69", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ o.jsx("rect", { y: "6.15", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ o.jsx("rect", { y: "8.62", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ o.jsx("rect", { y: "11.08", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ o.jsx("rect", { y: "13.54", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ o.jsx("rect", { width: "9.6", height: "8.62", fill: "#3C3B6E" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "1.2", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "2.4", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "3.6", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "4.8", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "6", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "7.2", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "8.4", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "1.8", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "3", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "4.2", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "5.4", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "6.6", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "7.8", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "1.2", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "2.4", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "3.6", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "4.8", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "6", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "7.2", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "8.4", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "1.8", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "3", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "4.2", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "5.4", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "6.6", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "7.8", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "1.2", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "2.4", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "3.6", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "4.8", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "6", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "7.2", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "8.4", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "1.8", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "3", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "4.2", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "5.4", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "6.6", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "7.8", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "1.2", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "2.4", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "3.6", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "4.8", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "6", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "7.2", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "8.4", cy: "7.7", r: "0.3", fill: "white" })
        ] }) }),
        /* @__PURE__ */ o.jsx("p", { className: "banner-header-text", children: e })
      ] }),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "banner-button",
          onClick: h,
          "aria-expanded": u,
          "aria-controls": "banner-content",
          children: [
            /* @__PURE__ */ o.jsx("span", { className: "banner-button-text", children: a }),
            /* @__PURE__ */ o.jsx("span", { className: `banner-button-icon ${u ? "is-open" : ""}`, children: /* @__PURE__ */ o.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ o.jsx("polyline", { points: "6 9 12 15 18 9" }) }) })
          ]
        }
      )
    ] }),
    u && /* @__PURE__ */ o.jsxs(
      "div",
      {
        id: "banner-expanded-content",
        className: "banner-expanded-content",
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: "banner-guidance", children: [
            /* @__PURE__ */ o.jsx("div", { className: "banner-guidance-icon", children: /* @__PURE__ */ o.jsx(te, { icon: hc, style: { fontSize: "40px", color: "#2378C3" } }) || null }),
            /* @__PURE__ */ o.jsx("div", { className: "banner-guidance-text", children: /* @__PURE__ */ o.jsxs("p", { children: [
              /* @__PURE__ */ o.jsx("strong", { children: n }),
              /* @__PURE__ */ o.jsx("br", {}),
              r
            ] }) })
          ] }),
          s && /* @__PURE__ */ o.jsxs("div", { className: "banner-guidance", children: [
            /* @__PURE__ */ o.jsx("div", { className: "banner-guidance-icon", children: /* @__PURE__ */ o.jsx(te, { icon: lc, style: { fontSize: "40px", color: "#719F2A" } }) }),
            /* @__PURE__ */ o.jsx("div", { className: "banner-guidance-text", children: /* @__PURE__ */ o.jsxs("p", { children: [
              /* @__PURE__ */ o.jsx("strong", { children: "Secure websites use HTTPS" }),
              /* @__PURE__ */ o.jsx("br", {}),
              "A ",
              /* @__PURE__ */ o.jsx("strong", { children: "lock" }),
              " or ",
              /* @__PURE__ */ o.jsx("strong", { children: "https://" }),
              " means you've safely connected to the .gov website. Share sensitive information only on official, secure websites."
            ] }) })
          ] })
        ]
      }
    )
  ] });
};
ir.propTypes = {
  /** Text describing the domain/owner of the site */
  domain: l.string,
  /** Custom icon element to display in the banner */
  icon: l.node,
  /** Heading text for the banner content */
  heading: l.string,
  /** Description text for the banner content */
  description: l.node,
  /** Whether to show the HTTPS guidance section */
  showHttpsGuidance: l.bool,
  /** Whether the banner content is initially expanded */
  initiallyExpanded: l.bool,
  /** Additional CSS class for the banner */
  className: l.string
};
ir.defaultProps = {
  domain: "An official website of the City of Portland",
  icon: void 0,
  heading: "Official websites use .gov",
  description: "A .gov website belongs to an official government organization in the United States.",
  showHttpsGuidance: !0,
  initiallyExpanded: !1,
  className: ""
};
const or = ({
  title: e,
  logoUrl: t,
  logoAlt: n,
  tagline: r
}) => /* @__PURE__ */ o.jsxs("a", { href: "/", className: "header-logo-container", children: [
  t && /* @__PURE__ */ o.jsx(
    "img",
    {
      src: t,
      alt: n,
      className: "header-logo-img"
    }
  ),
  /* @__PURE__ */ o.jsxs("div", { className: "header-logo-text-container", children: [
    /* @__PURE__ */ o.jsx("span", { className: "header-logo-text", children: e }),
    r && /* @__PURE__ */ o.jsx("span", { className: "header-logo-tagline", children: r })
  ] })
] });
or.propTypes = {
  /** Title text for the header */
  title: l.string.isRequired,
  /** URL for the logo image */
  logoUrl: l.string,
  /** Alt text for the logo image */
  logoAlt: l.string,
  /** Optional tagline displayed below the title */
  tagline: l.string
};
or.defaultProps = {
  logoUrl: void 0,
  logoAlt: "Logo",
  tagline: void 0
};
const $s = ({ item: e }) => /* @__PURE__ */ o.jsx("li", { className: "header-menu-item", role: "menuitem", children: /* @__PURE__ */ o.jsxs(
  "a",
  {
    href: e.href,
    className: "header-menu-link",
    "aria-current": e.current ? "page" : void 0,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "header-menu-link-title", children: e.label }),
      e.description && /* @__PURE__ */ o.jsx("span", { className: "header-menu-link-description", children: e.description })
    ]
  }
) });
$s.propTypes = {
  /** Menu item object containing label, href, description, and current state */
  item: l.shape({
    label: l.string.isRequired,
    href: l.string.isRequired,
    description: l.string,
    current: l.bool
  }).isRequired
};
const lr = ({
  items: e,
  mainHeading: t,
  id: n,
  className: r
}) => {
  const a = `${n}-heading`;
  return /* @__PURE__ */ o.jsxs("nav", { className: `header-menu-group ${r || ""}`, role: "navigation", "aria-labelledby": a, children: [
    /* @__PURE__ */ o.jsx("h3", { id: a, className: "header-menu-heading", children: t }),
    /* @__PURE__ */ o.jsx("ul", { className: "header-menu-group-items", role: "menu", children: e.map((s, i) => /* @__PURE__ */ o.jsx($s, { item: s }, i)) })
  ] });
};
lr.propTypes = {
  /** Array of menu items to display */
  items: l.arrayOf(
    l.shape({
      label: l.string.isRequired,
      href: l.string.isRequired,
      description: l.string,
      current: l.bool
    })
  ).isRequired,
  /** Main heading text for the menu group */
  mainHeading: l.string,
  /** ID for the component */
  id: l.string,
  /** Custom class name */
  className: l.string
};
lr.defaultProps = {
  mainHeading: "General Information",
  id: "pgov-header-menu-group"
};
const cr = ({
  title: e,
  logoUrl: t,
  logoAlt: n,
  tagline: r,
  navItems: a,
  mainHeading: s,
  menuText: i,
  openMenuAriaLabel: c,
  closeMenuAriaLabel: u,
  className: f
}) => {
  const [d, h] = be(!1), g = () => {
    h(!d);
  };
  return /* @__PURE__ */ o.jsxs("header", { className: `header ${f || ""}`, children: [
    /* @__PURE__ */ o.jsx("div", { className: "header-main", children: /* @__PURE__ */ o.jsxs("div", { className: "header-container", children: [
      /* @__PURE__ */ o.jsx("div", { className: "header-logo", children: /* @__PURE__ */ o.jsx(
        or,
        {
          title: e,
          logoUrl: t,
          logoAlt: n,
          tagline: r
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: `header-mobile-menu ${d ? "is-open" : ""}`, children: /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "header-mobile-menu-button",
          "aria-label": d ? u : c,
          "aria-expanded": d,
          "aria-controls": "header-mobile-dropdown",
          onClick: g,
          children: [
            /* @__PURE__ */ o.jsxs("span", { className: "header-mobile-menu-icon", children: [
              /* @__PURE__ */ o.jsx("span", {}),
              /* @__PURE__ */ o.jsx("span", {}),
              /* @__PURE__ */ o.jsx("span", {})
            ] }),
            /* @__PURE__ */ o.jsx("span", { className: "header-mobile-menu-text", "aria-hidden": "true", children: i })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ o.jsx(
      "div",
      {
        id: "header-mobile-dropdown",
        className: `header-mobile-dropdown ${d ? "is-open" : ""}`,
        children: /* @__PURE__ */ o.jsx("div", { className: "header-mobile-menu-content", children: /* @__PURE__ */ o.jsx("nav", { className: "header-mobile-nav", "aria-label": "Primary navigation", children: /* @__PURE__ */ o.jsx(
          lr,
          {
            items: a,
            mainHeading: s,
            id: "header-menu-group"
          }
        ) }) })
      }
    )
  ] });
};
cr.propTypes = {
  /** Title text for the header */
  title: l.string.isRequired,
  /** URL for the logo image */
  logoUrl: l.string,
  /** Alt text for the logo image */
  logoAlt: l.string,
  /** Optional tagline displayed below the title */
  tagline: l.string,
  /** Array of navigation items */
  navItems: l.arrayOf(
    l.shape({
      label: l.string.isRequired,
      href: l.string.isRequired,
      description: l.string,
      current: l.bool
    })
  ).isRequired,
  /** Main heading text for the navigation menu */
  mainHeading: l.string,
  /** Text for the menu button */
  menuText: l.string,
  /** Aria label for opening the menu */
  openMenuAriaLabel: l.string,
  /** Aria label for closing the menu */
  closeMenuAriaLabel: l.string,
  /** Additional CSS class names */
  className: l.string
};
cr.defaultProps = {
  logoUrl: void 0,
  logoAlt: "Logo",
  tagline: void 0,
  mainHeading: "General Information",
  menuText: "Menu",
  openMenuAriaLabel: "Menu",
  closeMenuAriaLabel: "Close menu",
  className: void 0
};
l.bool.isRequired, l.func.isRequired, l.string, l.string, l.string, l.string;
const ur = ({
  text: e = "Skip to main content",
  mainContentId: t = "main-content",
  className: n = ""
}) => {
  const r = ["skipnav", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx(
    "a",
    {
      href: `#${t}`,
      className: r,
      "data-testid": "skip-nav",
      children: e
    }
  );
};
ur.propTypes = {
  /** The text to display in the skip nav link */
  text: l.string,
  /** The ID of the main content element to skip to */
  mainContentId: l.string,
  /** Custom class name */
  className: l.string
};
ur.defaultProps = {
  text: "Skip to main content",
  mainContentId: "main-content",
  className: ""
};
const fr = ({
  feedbackUrl: e,
  accessibilityText: t,
  serviceRequestText: n,
  onlineServiceUrl: r,
  phoneNumber: a,
  relayServiceText: s,
  relayServiceNumber: i,
  translationText: c,
  generalInfoLinks: u,
  termsLinks: f,
  portlandGovLinks: d,
  socialMediaLinks: h,
  cityName: g,
  cityLogoUrl: p,
  cityLogoAlt: b,
  copyrightText: v,
  exploreServicesText: w,
  exploreServicesUrl: T,
  className: _
}) => /* @__PURE__ */ o.jsxs("footer", { className: `footer ${_}`, role: "contentinfo", children: [
  /* @__PURE__ */ o.jsx("div", { className: "footer-feedback-section", children: /* @__PURE__ */ o.jsxs("p", { className: "footer-feedback-text", children: [
    "See something we could improve on this page? ",
    /* @__PURE__ */ o.jsx("a", { href: e, className: "footer-feedback-link", children: "Give website feedback" }),
    "."
  ] }) }),
  /* @__PURE__ */ o.jsx("div", { className: "footer-accessibility-section", children: /* @__PURE__ */ o.jsxs("div", { className: "footer-accessibility-container", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "footer-text-container", children: [
      /* @__PURE__ */ o.jsxs("p", { className: "footer-accessibility-text", children: [
        t,
        " ",
        /* @__PURE__ */ o.jsxs("span", { className: "footer-request-services", children: [
          "Request these services ",
          /* @__PURE__ */ o.jsx("a", { href: r, className: "footer-online-link", children: "online" }),
          " or ",
          /* @__PURE__ */ o.jsx("a", { href: `tel:${a.replace(/\D/g, "")}`, className: "footer-phone-link", children: a }),
          ". Relay Service: ",
          /* @__PURE__ */ o.jsx("a", { href: `tel:${i.replace(/\D/g, "")}`, className: "footer-relay-link", children: i }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("p", { className: "footer-translation-text", children: [
        /* @__PURE__ */ o.jsx("a", { href: `tel:${a.replace(/\D/g, "")}`, className: "footer-translation-phone-link", children: a }),
        " ",
        c
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "footer-explore-services", children: /* @__PURE__ */ o.jsxs("a", { href: T, className: "footer-explore-button", children: [
      w,
      " ",
      /* @__PURE__ */ o.jsx("span", { className: "footer-explore-arrow", children: "→" })
    ] }) })
  ] }) }),
  /* @__PURE__ */ o.jsx("div", { className: "footer-main", children: /* @__PURE__ */ o.jsxs("div", { className: "footer-nav", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "footer-city-info", children: [
      /* @__PURE__ */ o.jsx("p", { className: "footer-city-name", children: g }),
      /* @__PURE__ */ o.jsx("img", { src: p, alt: b, className: "footer-city-logo" }),
      /* @__PURE__ */ o.jsx("p", { className: "footer-copyright", children: v })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ o.jsx("h4", { className: "footer-heading", children: "General Information" }),
      /* @__PURE__ */ o.jsx("ul", { className: "footer-links", children: u.map((E, k) => /* @__PURE__ */ o.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ o.jsx("a", { href: E.href, className: "footer-link", children: E.label }) }, `general-link-${k}`)) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ o.jsx("h4", { className: "footer-heading", children: "Terms And Policies" }),
      /* @__PURE__ */ o.jsx("ul", { className: "footer-links", children: f.map((E, k) => /* @__PURE__ */ o.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ o.jsx("a", { href: E.href, className: "footer-link", children: E.label }) }, `terms-link-${k}`)) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ o.jsx("h4", { className: "footer-heading", children: "Portland.Gov" }),
      /* @__PURE__ */ o.jsx("ul", { className: "footer-links", children: d.map((E, k) => /* @__PURE__ */ o.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ o.jsx("a", { href: E.href, className: "footer-link", children: E.label }) }, `pgov-link-${k}`)) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ o.jsx("h4", { className: "footer-heading", children: "Social Media" }),
      /* @__PURE__ */ o.jsx("ul", { className: "footer-links", children: h.map((E, k) => /* @__PURE__ */ o.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ o.jsx("a", { href: E.href, className: "footer-link", children: E.label }) }, `social-link-${k}`)) })
    ] })
  ] }) })
] });
fr.propTypes = {
  /** URL for the feedback link */
  feedbackUrl: l.string,
  /** Text for the accessibility section */
  accessibilityText: l.string,
  /** Text for service request */
  serviceRequestText: l.string,
  /** URL for online service */
  onlineServiceUrl: l.string,
  /** Phone number for services */
  phoneNumber: l.string,
  /** Text for relay service */
  relayServiceText: l.string,
  /** Relay service number */
  relayServiceNumber: l.string,
  /** Text for translation section */
  translationText: l.string,
  /** Links for general information section */
  generalInfoLinks: l.arrayOf(
    l.shape({
      label: l.string.isRequired,
      href: l.string.isRequired
    })
  ),
  /** Links for terms and policies section */
  termsLinks: l.arrayOf(
    l.shape({
      label: l.string.isRequired,
      href: l.string.isRequired
    })
  ),
  /** Links for Portland.gov section */
  portlandGovLinks: l.arrayOf(
    l.shape({
      label: l.string.isRequired,
      href: l.string.isRequired
    })
  ),
  /** Social media links */
  socialMediaLinks: l.arrayOf(
    l.shape({
      label: l.string.isRequired,
      href: l.string.isRequired
    })
  ),
  /** City name */
  cityName: l.string,
  /** URL for the city logo */
  cityLogoUrl: l.string,
  /** Alt text for the city logo */
  cityLogoAlt: l.string,
  /** Copyright text */
  copyrightText: l.string,
  /** Text for explore services button */
  exploreServicesText: l.string,
  /** URL for explore services button */
  exploreServicesUrl: l.string,
  /** Additional CSS class for the footer */
  className: l.string
};
fr.defaultProps = {
  feedbackUrl: "/contact",
  accessibilityText: "The City of Portland ensures meaningful access to City programs, services, and activities to comply with Civil Rights Title VI and ADA Title II laws and reasonably provides: translation, interpretation, modifications, accommodations, alternative formats, auxiliary aids and services.",
  serviceRequestText: "Request these services",
  onlineServiceUrl: "/contact",
  phoneNumber: "503-823-4000",
  relayServiceText: "Relay Service",
  relayServiceNumber: "711",
  translationText: "Traducción e Interpretación | Biên Dịch và Thông Dịch | 口笔译服务 | Устный и письменный перевод | Turjumaad iyo Fasiraad | Письмовий і усний переклад | Traducere și interpretariat | Chiaku me Awewen Kapas | अनुवादन तथा व्याख्या",
  generalInfoLinks: [
    { label: "311@portlandoregon.gov", href: "mailto:311@portlandoregon.gov" },
    { label: "311 information an customer service", href: "/customer-service" },
    { label: "503-823-4000", href: "tel:5038234000" },
    { label: "711 Oregon Relay Service", href: "tel:711" }
  ],
  termsLinks: [
    { label: "ADA accommodation", href: "/ada-accommodation" },
    { label: "Captioning and transcription", href: "/captioning" },
    { label: "Privacy Policy", href: "/privacy" }
  ],
  portlandGovLinks: [
    { label: "About this website", href: "/about" },
    { label: "Employee portal", href: "/employees" },
    { label: "Editor log in", href: "/login" }
  ],
  socialMediaLinks: [
    { label: "Bluesky", href: "https://bsky.app" },
    { label: "Facebook", href: "https://facebook.com/CityofPortland" },
    { label: "Instagram", href: "https://instagram.com/portlandoregon" },
    { label: "X (Twitter)", href: "https://twitter.com/portlandgov" }
  ],
  cityName: "City of Portland, Oregon",
  cityLogoUrl: "/city-seal.png",
  cityLogoAlt: "City of Portland Seal",
  copyrightText: "© Copyright 2018-2023",
  exploreServicesText: "Explore all services",
  exploreServicesUrl: "/services",
  className: ""
};
const dr = ({
  items: e,
  className: t = "",
  customSeparator: n
}) => {
  const [r, a] = be(window.innerWidth < 768);
  Ne(() => {
    const u = () => {
      const f = window.innerWidth < 768;
      r !== f && a(f);
    };
    return window.addEventListener("resize", u), () => window.removeEventListener("resize", u);
  }, [r]);
  const s = () => n || /* @__PURE__ */ o.jsx(
    te,
    {
      icon: r ? dc : qs,
      className: "breadcrumb__separator",
      "aria-hidden": "true"
    }
  ), i = () => e.map((u, f) => /* @__PURE__ */ o.jsxs("li", { className: "breadcrumb__item", children: [
    r && f > 0 && s(),
    f === e.length - 1 ? /* @__PURE__ */ o.jsx("span", { className: "breadcrumb__current", "aria-current": "page", children: u.text }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("a", { href: u.href, className: "breadcrumb__link", children: u.text }),
      !r && s()
    ] })
  ] }, f)), c = ["breadcrumb", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx(
    "nav",
    {
      className: c,
      "aria-label": "Breadcrumbs",
      children: /* @__PURE__ */ o.jsx("ol", { className: "breadcrumb__list", children: i() })
    }
  );
};
dr.propTypes = {
  /**
   * Array of breadcrumb items with text and href
   */
  items: l.arrayOf(
    l.shape({
      text: l.string.isRequired,
      href: l.string
    })
  ).isRequired,
  /**
   * Additional CSS class names
   */
  className: l.string,
  /**
   * Custom separator element
   */
  customSeparator: l.node
};
dr.defaultProps = {
  className: "",
  customSeparator: void 0
};
const Bs = ({
  bannerProps: e,
  headerProps: t,
  skipNavProps: n,
  footerProps: r,
  breadcrumbsProps: a,
  children: s,
  includeBanner: i = !0,
  includeSkipNav: c = !0,
  includeFooter: u = !0,
  includeBreadcrumbs: f = !0,
  className: d = ""
}) => /* @__PURE__ */ o.jsxs("div", { className: `pgov-page-template ${d}`, children: [
  c && /* @__PURE__ */ o.jsx(ur, { ...n }),
  i && /* @__PURE__ */ o.jsx(ir, { ...e }),
  /* @__PURE__ */ o.jsx(cr, { ...t }),
  /* @__PURE__ */ o.jsxs(
    "main",
    {
      id: "main-content",
      className: "pgov-page-template-main",
      tabIndex: "-1",
      role: "main",
      "aria-label": "Main content",
      children: [
        f && /* @__PURE__ */ o.jsx(dr, { ...a }),
        s
      ]
    }
  ),
  u && /* @__PURE__ */ o.jsx(fr, { ...r })
] });
Bs.propTypes = {
  /** Props for the Banner component */
  bannerProps: l.object,
  /** Props for the Header component */
  headerProps: l.object.isRequired,
  /** Props for the SkipNav component */
  skipNavProps: l.object,
  /** Props for the Footer component */
  footerProps: l.object,
  /** Props for the Breadcrumbs component */
  breadcrumbsProps: l.object,
  /** Content to be rendered in the main section */
  children: l.node,
  /** Whether to include the Banner component */
  includeBanner: l.bool,
  /** Whether to include the SkipNav component */
  includeSkipNav: l.bool,
  /** Whether to include the Footer component */
  includeFooter: l.bool,
  /** Whether to include the Breadcrumbs component */
  includeBreadcrumbs: l.bool,
  /** Additional CSS class name */
  className: l.string
};
Bs.defaultProps = {
  bannerProps: {},
  skipNavProps: {},
  breadcrumbsProps: {},
  children: null,
  includeBanner: !0,
  includeSkipNav: !0,
  includeFooter: !0,
  includeBreadcrumbs: !0,
  className: ""
};
var dn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ta;
function Rc() {
  return Ta || (Ta = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var s = "", i = 0; i < arguments.length; i++) {
          var c = arguments[i];
          c && (s = a(s, r(c)));
        }
        return s;
      }
      function r(s) {
        if (typeof s == "string" || typeof s == "number")
          return s;
        if (typeof s != "object")
          return "";
        if (Array.isArray(s))
          return n.apply(null, s);
        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
          return s.toString();
        var i = "";
        for (var c in s)
          t.call(s, c) && s[c] && (i = a(i, c));
        return i;
      }
      function a(s, i) {
        return i ? s ? s + " " + i : s + i : s;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(dn)), dn.exports;
}
var _c = Rc();
const yt = /* @__PURE__ */ es(_c), qn = ({
  children: e,
  variant: t = "default",
  size: n = "default",
  disabled: r = !1,
  ariaDisabled: a = !1,
  unstyled: s = !1,
  onClick: i,
  type: c = "button",
  startIcon: u,
  endIcon: f,
  className: d,
  ...h
}) => {
  const g = "usa-button", p = t !== "default" ? `${g}--${t}` : "", b = n === "big" ? `${g}--big` : "", v = s ? `${g}--unstyled` : "", w = [
    g,
    p,
    b,
    v,
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs(
    "button",
    {
      type: c,
      className: w,
      onClick: i,
      disabled: r,
      "aria-disabled": a || r,
      ...h,
      children: [
        u && /* @__PURE__ */ o.jsx("span", { className: "usa-button__icon usa-button__icon--left", children: /* @__PURE__ */ o.jsx(te, { icon: u }) }),
        e,
        f && /* @__PURE__ */ o.jsx("span", { className: "usa-button__icon usa-button__icon--right", children: /* @__PURE__ */ o.jsx(te, { icon: f }) })
      ]
    }
  );
};
qn.propTypes = {
  children: l.node.isRequired,
  variant: l.oneOf([
    "default",
    "secondary",
    "accent-cool",
    "accent-warm",
    "base",
    "outline",
    "outline-inverse"
  ]),
  size: l.oneOf(["default", "big"]),
  disabled: l.bool,
  ariaDisabled: l.bool,
  unstyled: l.bool,
  onClick: l.func,
  type: l.oneOf(["button", "submit", "reset"]),
  startIcon: l.oneOfType([l.object, l.array, l.string]),
  endIcon: l.oneOfType([l.object, l.array, l.string]),
  className: l.string
};
const Ec = [
  { code: "en", nativeName: "English", englishName: "English" },
  { code: "es", nativeName: "Español", englishName: "Spanish" },
  { code: "fr", nativeName: "Français", englishName: "French" },
  { code: "ar", nativeName: "العربية", englishName: "Arabic" },
  { code: "zh", nativeName: "简体字", englishName: "Chinese - Simplified" },
  { code: "it", nativeName: "Italiano", englishName: "Italian" }
], Tc = (e, t) => {
  Ne(() => {
    const n = (r) => {
      !e.current || e.current.contains(r.target) || t(r);
    };
    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
      document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n);
    };
  }, [e, t]);
}, Cc = ({
  languages: e = Ec,
  selectedLanguage: t = "en",
  onLanguageChange: n,
  variant: r = "default",
  buttonText: a = "Languages",
  buttonVariant: s = "default",
  buttonSize: i = "default",
  className: c,
  id: u = "language-selector",
  disabled: f = !1,
  showFooterText: d = !0,
  footerText: h = "Selected content in additional languages",
  ariaLabel: g = "Select language",
  ...p
}) => {
  const [b, v] = be(!1), [w, T] = be(-1), _ = nt(null), E = nt(null), k = `${u}-menu`;
  Tc(_, () => v(!1));
  const j = (C, N) => {
    v(!1), T(N), n && n(C.code, C);
  }, G = (C) => {
    var N;
    if (!f) {
      if (!b && (C.key === "ArrowDown" || C.key === "Enter" || C.key === " "))
        C.preventDefault(), v(!0), T(0);
      else if (b)
        switch (C.key) {
          case "ArrowDown":
            C.preventDefault(), T((Y) => (Y + 1) % e.length);
            break;
          case "ArrowUp":
            C.preventDefault(), T((Y) => (Y - 1 + e.length) % e.length);
            break;
          case "Enter":
          case " ":
            C.preventDefault(), w >= 0 && w < e.length && j(e[w], w);
            break;
          case "Escape":
            C.preventDefault(), v(!1), T(-1), (N = E.current) == null || N.focus();
            break;
        }
    }
  }, P = () => {
    if (!f)
      if (r === "two-languages") {
        const C = e.find((N) => N.code !== t) || e[1];
        j(C, e.indexOf(C));
      } else
        v((C) => !C), b || T(0);
  };
  Ne(() => {
    if (b && w >= 0) {
      const C = document.getElementById(`${u}-option-${w}`);
      C && typeof C.scrollIntoView == "function" && C.scrollIntoView({ block: "nearest" });
    }
  }, [b, w, u]);
  const A = yt(
    "usa-language-selector",
    {
      "usa-language-selector--two-languages": r === "two-languages",
      "usa-language-selector--unstyled": r === "unstyled",
      "usa-language-selector--open": b
    },
    c
  );
  if (r === "two-languages") {
    const C = e.find((N) => N.code !== t) || e[1];
    return /* @__PURE__ */ o.jsx("div", { className: A, ...p, children: /* @__PURE__ */ o.jsxs(
      qn,
      {
        ref: E,
        id: u,
        variant: s,
        size: i,
        disabled: f,
        onClick: P,
        onKeyDown: G,
        "aria-label": g,
        className: "usa-language-selector__button",
        children: [
          /* @__PURE__ */ o.jsx("span", { lang: C.code, children: C.nativeName }),
          C.englishName !== C.nativeName && /* @__PURE__ */ o.jsx("span", { className: "usa-language-selector__english-name", children: ` (${C.englishName})` })
        ]
      }
    ) });
  }
  return r === "unstyled" ? /* @__PURE__ */ o.jsxs("div", { className: A, ref: _, ...p, children: [
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        ref: E,
        id: u,
        type: "button",
        className: "usa-language-selector__button usa-language-selector__button--unstyled",
        onClick: P,
        onKeyDown: G,
        disabled: f,
        "aria-label": g,
        "aria-haspopup": "listbox",
        "aria-expanded": b,
        "aria-controls": k,
        children: [
          a,
          /* @__PURE__ */ o.jsx(
            te,
            {
              icon: Ea,
              className: yt("usa-language-selector__chevron", {
                "usa-language-selector__chevron--open": b
              }),
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    b && /* @__PURE__ */ o.jsxs(
      "ul",
      {
        id: k,
        className: "usa-language-selector__menu",
        role: "listbox",
        "aria-labelledby": u,
        children: [
          e.map((C, N) => /* @__PURE__ */ o.jsxs(
            "li",
            {
              id: `${u}-option-${N}`,
              className: yt("usa-language-selector__option", {
                "usa-language-selector__option--selected": C.code === t,
                "usa-language-selector__option--active": w === N
              }),
              role: "option",
              "aria-selected": C.code === t,
              onClick: () => j(C, N),
              tabIndex: -1,
              children: [
                /* @__PURE__ */ o.jsx("span", { lang: C.code, children: C.nativeName }),
                C.englishName !== C.nativeName && /* @__PURE__ */ o.jsx("span", { className: "usa-language-selector__english-name", children: ` (${C.englishName})` })
              ]
            },
            C.code
          )),
          d && /* @__PURE__ */ o.jsx("li", { className: "usa-language-selector__footer", children: h })
        ]
      }
    )
  ] }) : /* @__PURE__ */ o.jsxs("div", { className: A, ref: _, ...p, children: [
    /* @__PURE__ */ o.jsx(
      qn,
      {
        ref: E,
        id: u,
        variant: s,
        size: i,
        disabled: f,
        onClick: P,
        onKeyDown: G,
        "aria-label": g,
        "aria-haspopup": "listbox",
        "aria-expanded": b,
        "aria-controls": k,
        className: "usa-language-selector__button",
        endIcon: Ea,
        children: a
      }
    ),
    b && /* @__PURE__ */ o.jsxs(
      "ul",
      {
        id: k,
        className: "usa-language-selector__menu",
        role: "listbox",
        "aria-labelledby": u,
        children: [
          e.map((C, N) => /* @__PURE__ */ o.jsxs(
            "li",
            {
              id: `${u}-option-${N}`,
              className: yt("usa-language-selector__option", {
                "usa-language-selector__option--selected": C.code === t,
                "usa-language-selector__option--active": w === N
              }),
              role: "option",
              "aria-selected": C.code === t,
              onClick: () => j(C, N),
              tabIndex: -1,
              children: [
                /* @__PURE__ */ o.jsx("span", { lang: C.code, children: C.nativeName }),
                C.englishName !== C.nativeName && /* @__PURE__ */ o.jsx("span", { className: "usa-language-selector__english-name", children: ` (${C.englishName})` })
              ]
            },
            C.code
          )),
          d && /* @__PURE__ */ o.jsx("li", { className: "usa-language-selector__footer", children: h })
        ]
      }
    )
  ] });
};
Cc.propTypes = {
  /** Array of language objects with code, nativeName, and englishName */
  languages: l.arrayOf(
    l.shape({
      code: l.string.isRequired,
      nativeName: l.string.isRequired,
      englishName: l.string.isRequired
    })
  ),
  /** Currently selected language code */
  selectedLanguage: l.string,
  /** Callback function when language is changed */
  onLanguageChange: l.func,
  /** Component variant */
  variant: l.oneOf(["default", "two-languages", "unstyled"]),
  /** Text to display on the button */
  buttonText: l.string,
  /** Button variant for styling */
  buttonVariant: l.oneOf([
    "default",
    "secondary",
    "accent-cool",
    "accent-warm",
    "base",
    "outline",
    "outline-inverse"
  ]),
  /** Button size */
  buttonSize: l.oneOf(["default", "big"]),
  /** Additional CSS classes */
  className: l.string,
  /** Component ID for accessibility */
  id: l.string,
  /** Whether the component is disabled */
  disabled: l.bool,
  /** Whether to show footer text */
  showFooterText: l.bool,
  /** Custom footer text */
  footerText: l.string,
  /** ARIA label for the component */
  ariaLabel: l.string
};
const Ws = ({ item: e, isActive: t, isExpanded: n, isParent: r, position: a, onClick: s }) => {
  const i = [
    "side-nav-item",
    t ? "active" : "",
    r ? "parent" : "child",
    a,
    n ? "expanded" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs(
    "a",
    {
      href: e.link,
      className: i,
      "aria-current": t ? "page" : void 0,
      "aria-expanded": r ? n : void 0,
      onClick: (c) => {
        r && (c.preventDefault(), s());
      },
      children: [
        /* @__PURE__ */ o.jsx("div", { className: `nav-indicator ${t ? "active-indicator" : ""}` }),
        /* @__PURE__ */ o.jsx("div", { className: "nav-content", children: /* @__PURE__ */ o.jsx("div", { className: "side-nav-text", children: e.title }) })
      ]
    }
  );
};
Ws.propTypes = {
  item: l.shape({
    title: l.string.isRequired,
    link: l.string.isRequired,
    children: l.arrayOf(l.shape({
      title: l.string.isRequired,
      link: l.string.isRequired
    }))
  }).isRequired,
  isActive: l.bool.isRequired,
  isExpanded: l.bool.isRequired,
  isParent: l.bool.isRequired,
  position: l.oneOf(["top", "middle", "bottom"]).isRequired,
  onClick: l.func.isRequired
};
const Ys = ({ items: e, activeItemId: t, activeIndex: n }) => {
  const [r, a] = be(null), s = (c, u, f = !1) => c === 0 && !f ? "top" : c === u - 1 ? "bottom" : "middle", i = (c, u = !1) => c.map((f, d) => {
    var v;
    const h = !!((v = f.children) != null && v.length), g = t ? f.link === t : d === n, p = r === f.link, b = s(d, c.length, u);
    return /* @__PURE__ */ o.jsxs("li", { className: "nav-item-container", children: [
      /* @__PURE__ */ o.jsx(
        Ws,
        {
          item: f,
          isActive: g,
          isExpanded: p,
          isParent: h,
          position: b,
          onClick: () => {
            a(p ? null : f.link);
          }
        }
      ),
      h && p && /* @__PURE__ */ o.jsx("ul", { className: "nav-children", children: i(f.children, !0) })
    ] }, f.link);
  });
  return /* @__PURE__ */ o.jsx(
    "nav",
    {
      className: "side-nav",
      "aria-label": "Section Navigation",
      role: "navigation",
      children: /* @__PURE__ */ o.jsx("ul", { children: i(e) })
    }
  );
};
Ys.propTypes = {
  items: l.arrayOf(
    l.shape({
      title: l.string.isRequired,
      link: l.string.isRequired,
      children: l.arrayOf(l.shape({
        title: l.string.isRequired,
        link: l.string.isRequired
      }))
    })
  ).isRequired,
  activeItemId: l.string,
  activeIndex: l.number
};
Ys.defaultProps = {
  activeItemId: null,
  activeIndex: null
};
const kc = ({ heading: e, description: t, children: n }) => {
  const r = `summary-box-${e.toLowerCase().replace(/\s+/g, "-")}`;
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      className: "usa-summary-box",
      role: "region",
      "aria-labelledby": r,
      children: /* @__PURE__ */ o.jsxs("div", { className: "usa-summary-box__body", children: [
        /* @__PURE__ */ o.jsx("h4", { className: "usa-summary-box__heading", id: r, children: e }),
        t && /* @__PURE__ */ o.jsx("div", { className: "summary-box-description", children: t }),
        /* @__PURE__ */ o.jsx("div", { className: "usa-summary-box__text", children: n })
      ] })
    }
  );
};
kc.propTypes = {
  heading: l.string.isRequired,
  description: l.string,
  children: l.node.isRequired
};
const Us = ({ number: e }) => /* @__PURE__ */ o.jsxs("div", { className: "stepNumberWrapper", children: [
  /* @__PURE__ */ o.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      className: "stepNumberSvg",
      children: /* @__PURE__ */ o.jsx(
        "circle",
        {
          cx: "24",
          cy: "24",
          r: "22"
        }
      )
    }
  ),
  /* @__PURE__ */ o.jsx("span", { className: "stepNumberText", children: e })
] });
Us.propTypes = {
  number: l.number.isRequired
};
const Hs = ({ step: e, stepNumber: t, isLast: n }) => /* @__PURE__ */ o.jsxs("div", { className: "stepItem", children: [
  /* @__PURE__ */ o.jsxs("div", { className: "stepNumberContainer", children: [
    /* @__PURE__ */ o.jsx(Us, { number: t }),
    !n && /* @__PURE__ */ o.jsx("div", { className: "verticalBar" })
  ] }),
  /* @__PURE__ */ o.jsxs("div", { className: "stepContent", children: [
    /* @__PURE__ */ o.jsx("h3", { className: "stepHeading", children: e.heading }),
    /* @__PURE__ */ o.jsx("p", { className: "stepDescription", children: e.description })
  ] })
] });
Hs.propTypes = {
  step: l.shape({
    heading: l.string.isRequired,
    description: l.string.isRequired
  }).isRequired,
  stepNumber: l.number.isRequired,
  isLast: l.bool.isRequired
};
const Oc = ({ title: e, mainDescription: t, steps: n }) => /* @__PURE__ */ o.jsxs("div", { className: "processSteps", children: [
  /* @__PURE__ */ o.jsxs("div", { className: "header", children: [
    /* @__PURE__ */ o.jsx("h2", { className: "title", children: e }),
    /* @__PURE__ */ o.jsx("p", { className: "mainDescription", children: t })
  ] }),
  /* @__PURE__ */ o.jsx("div", { className: "stepsContainer", children: n.map((r, a) => /* @__PURE__ */ o.jsx(
    Hs,
    {
      step: r,
      stepNumber: a + 1,
      isLast: a === n.length - 1
    },
    a
  )) })
] });
Oc.propTypes = {
  title: l.string.isRequired,
  mainDescription: l.string.isRequired,
  steps: l.arrayOf(
    l.shape({
      heading: l.string.isRequired,
      description: l.string.isRequired
    })
  ).isRequired
};
const Sc = ({ variant: e = "default", children: t, className: n, ...r }) => {
  const i = ["usa-tag", e === "big" ? "usa-tag--big" : "", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx("span", { className: i, ...r, children: t });
};
Sc.propTypes = {
  /** The content of the tag */
  children: l.node.isRequired,
  /** The variant of the tag */
  variant: l.oneOf(["default", "big"]),
  /** Additional className to be applied to the tag */
  className: l.string
};
const Pc = ({
  variant: e = "default",
  buttonText: t = "Search",
  className: n,
  id: r,
  name: a = "search",
  placeholder: s,
  onSubmit: i,
  ...c
}) => {
  const d = ["usa-search", e === "big" ? "usa-search--big" : e === "small" ? "usa-search--small" : "", n].filter(Boolean).join(" "), h = (g) => {
    g.preventDefault(), i && i(g);
  };
  return /* @__PURE__ */ o.jsx("section", { "aria-label": `${e} search component`, children: /* @__PURE__ */ o.jsxs("form", { className: d, role: "search", onSubmit: h, children: [
    /* @__PURE__ */ o.jsx("label", { className: "usa-sr-only", htmlFor: r, children: t }),
    /* @__PURE__ */ o.jsx(
      "input",
      {
        className: "usa-input",
        id: r,
        type: "search",
        name: a,
        placeholder: s,
        ...c
      }
    ),
    /* @__PURE__ */ o.jsx("button", { className: "usa-button", type: "submit", children: e === "small" ? /* @__PURE__ */ o.jsx(
      te,
      {
        icon: bc,
        className: "usa-search__submit-icon",
        "aria-hidden": "true"
      }
    ) : /* @__PURE__ */ o.jsx("span", { className: "usa-search__submit-text", children: t }) })
  ] }) });
};
Pc.propTypes = {
  /** The variant of the search component */
  variant: l.oneOf(["default", "big", "small"]),
  /** The text to display on the search button */
  buttonText: l.string,
  /** Additional className to be applied to the search component */
  className: l.string,
  /** The id of the search input */
  id: l.string.isRequired,
  /** The name of the search input */
  name: l.string,
  /** The placeholder text for the search input */
  placeholder: l.string,
  /** Function to call when the form is submitted */
  onSubmit: l.func
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Ac = {
  prefix: "fab",
  iconName: "instagram",
  icon: [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
}, Ic = {
  prefix: "fab",
  iconName: "facebook",
  icon: [512, 512, [62e3], "f09a", "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]
}, Fc = {
  prefix: "fab",
  iconName: "twitter",
  icon: [512, 512, [], "f099", "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]
}, Dc = ({
  title: e,
  emailAddress: t,
  officePhone: n,
  informationPhone: r,
  relayServicePhone: a,
  socialMedia: s,
  officeDetails: i,
  className: c
}) => {
  const {
    facebook: u,
    twitter: f,
    bluesky: d,
    instagram: h
  } = s || {}, {
    address: g,
    room: p,
    city: b,
    state: v,
    zip: w,
    days: T,
    hours: _
  } = i || {};
  return /* @__PURE__ */ o.jsxs("div", { className: `contacts ${c || ""}`, children: [
    /* @__PURE__ */ o.jsx("div", { className: "contacts__border" }),
    /* @__PURE__ */ o.jsxs("div", { className: "contacts__container", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "contacts__section", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "contacts__section-header", children: [
          /* @__PURE__ */ o.jsx("h3", { className: "contacts__heading", children: "Contact" }),
          /* @__PURE__ */ o.jsx("div", { className: "contacts__button-container", children: /* @__PURE__ */ o.jsxs(
            "a",
            {
              href: `mailto:${t}`,
              className: "contacts__button",
              "aria-label": `Contact ${e} via email`,
              children: [
                /* @__PURE__ */ o.jsx(te, { icon: mc, className: "contacts__button-icon" }),
                /* @__PURE__ */ o.jsxs("span", { children: [
                  "Contact this ",
                  e
                ] })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "contacts__phone-list", children: [
          n && /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(te, { icon: fn, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "Phone: Office" })
            ] }),
            /* @__PURE__ */ o.jsx("a", { href: `tel:${n}`, className: "contacts__link", children: n })
          ] }),
          r && /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(te, { icon: fn, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "Phone: Information" })
            ] }),
            /* @__PURE__ */ o.jsx("a", { href: `tel:${r}`, className: "contacts__link", children: r })
          ] }),
          a && /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(te, { icon: fn, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "Phone: Oregon Relay Service" })
            ] }),
            /* @__PURE__ */ o.jsx("a", { href: `tel:${a}`, className: "contacts__link", children: a })
          ] })
        ] })
      ] }),
      s && /* @__PURE__ */ o.jsxs("div", { className: "contacts__section", children: [
        /* @__PURE__ */ o.jsx("h3", { className: "contacts__heading", children: "Social Media" }),
        /* @__PURE__ */ o.jsxs("div", { className: "contacts__social-list", children: [
          u && /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(te, { icon: Ic, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "Facebook" })
            ] }),
            /* @__PURE__ */ o.jsx("a", { href: `https://facebook.com/${u}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: u })
          ] }),
          f && /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(te, { icon: Fc, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "X (Twitter)" })
            ] }),
            /* @__PURE__ */ o.jsx("a", { href: `https://twitter.com/${f}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: f })
          ] }),
          d && /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(te, { icon: sc, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "Bluesky" })
            ] }),
            /* @__PURE__ */ o.jsx("a", { href: `https://bsky.app/profile/${d}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: d })
          ] }),
          h && /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(te, { icon: Ac, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "Instagram" })
            ] }),
            /* @__PURE__ */ o.jsx("a", { href: `https://instagram.com/${h}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: h })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "contacts__section", children: [
        /* @__PURE__ */ o.jsx("h3", { className: "contacts__heading", children: "Office" }),
        /* @__PURE__ */ o.jsxs("div", { className: "contacts__office-info", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(te, { icon: ic, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "Address" })
            ] }),
            /* @__PURE__ */ o.jsxs("a", { href: `https://maps.google.com/?q=${g} ${b}, ${v} ${w}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: [
              g,
              /* @__PURE__ */ o.jsx("br", {}),
              p && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                p,
                /* @__PURE__ */ o.jsx("br", {})
              ] }),
              b,
              ", ",
              v,
              " ",
              w
            ] })
          ] }),
          _ && /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(te, { icon: gc, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "Hours" })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__hours-value", children: [
              /* @__PURE__ */ o.jsx("div", { children: T }),
              /* @__PURE__ */ o.jsx("div", { children: _ })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
};
Dc.propTypes = {
  title: l.string.isRequired,
  emailAddress: l.string.isRequired,
  officePhone: l.string,
  informationPhone: l.string,
  relayServicePhone: l.string,
  socialMedia: l.shape({
    facebook: l.string,
    twitter: l.string,
    bluesky: l.string,
    instagram: l.string
  }),
  officeDetails: l.shape({
    address: l.string.isRequired,
    room: l.string,
    city: l.string.isRequired,
    state: l.string.isRequired,
    zip: l.string.isRequired,
    hours: l.string
  }).isRequired,
  className: l.string
};
const Lc = ({
  title: e,
  subtitle: t,
  searchComponent: n,
  links: r = [],
  className: a,
  ...s
}) => {
  const i = "pgov-hero-homepage", c = [
    i,
    a
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs("div", { className: c, ...s, children: [
    /* @__PURE__ */ o.jsx("div", { className: `${i}__title-container`, children: /* @__PURE__ */ o.jsx("h1", { className: `${i}__title`, children: e }) }),
    /* @__PURE__ */ o.jsx("div", { className: `${i}__search-container`, children: n }),
    t && /* @__PURE__ */ o.jsx("div", { className: `${i}__subtitle-container`, children: /* @__PURE__ */ o.jsx("h2", { className: `${i}__subtitle`, children: t }) }),
    r.length > 0 && /* @__PURE__ */ o.jsx("div", { className: `${i}__links-container`, children: r.map((u, f) => /* @__PURE__ */ o.jsx(
      "a",
      {
        href: u.href,
        className: `${i}__link`,
        ...u.props,
        children: u.text
      },
      f
    )) })
  ] });
};
Lc.propTypes = {
  title: l.string.isRequired,
  subtitle: l.string,
  searchComponent: l.node.isRequired,
  links: l.arrayOf(
    l.shape({
      text: l.string.isRequired,
      href: l.string.isRequired,
      props: l.object
    })
  ),
  className: l.string
};
const Mc = ({
  title: e,
  description: t,
  tags: n = [],
  image: r,
  actionButton: a,
  className: s,
  ...i
}) => {
  const c = "hero-global", u = ae.useId(), f = [
    c,
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx(
    "section",
    {
      className: f,
      role: "banner",
      "aria-labelledby": u,
      ...i,
      children: /* @__PURE__ */ o.jsxs("div", { className: `${c}__container`, children: [
        /* @__PURE__ */ o.jsx("div", { className: `${c}__content-wrapper`, children: /* @__PURE__ */ o.jsxs("div", { className: `${c}__content`, children: [
          /* @__PURE__ */ o.jsx(
            "h1",
            {
              id: u,
              className: `${c}__title`,
              children: e
            }
          ),
          n.length > 0 && /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `${c}__tags`,
              "aria-label": "Content categories",
              children: n.map((d, h) => /* @__PURE__ */ o.jsx(
                "span",
                {
                  className: `${c}__tag`,
                  children: d
                },
                h
              ))
            }
          ),
          t && /* @__PURE__ */ o.jsx("p", { className: `${c}__description`, children: t }),
          a && /* @__PURE__ */ o.jsx("div", { className: `${c}__action`, children: a })
        ] }) }),
        r && /* @__PURE__ */ o.jsx("div", { className: `${c}__image-wrapper`, children: /* @__PURE__ */ o.jsxs("div", { className: `${c}__image-container`, children: [
          /* @__PURE__ */ o.jsx(
            "img",
            {
              src: typeof r.src == "string" ? r.src : r.src.default || r.src,
              alt: r.alt || "",
              className: `${c}__image`,
              loading: "lazy",
              onError: (d) => {
                console.error("Image failed to load:", r.src), console.error("Error event:", d), console.error("Image element:", d.target), console.error("Image natural dimensions:", d.target.naturalWidth, d.target.naturalHeight), d.target.classList.add(`${c}__image--error`);
              },
              onLoad: (d) => {
                console.log("Image loaded successfully:", r.src), console.log("Image element:", d.target), console.log("Image natural dimensions:", d.target.naturalWidth, d.target.naturalHeight);
              }
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: `${c}__image-placeholder`, "aria-hidden": "true" })
        ] }) })
      ] })
    }
  );
};
Mc.propTypes = {
  /** The main title of the hero section */
  title: l.string.isRequired,
  /** Optional description text */
  description: l.string,
  /** Array of tag strings to display */
  tags: l.arrayOf(l.string),
  /** Optional image configuration */
  image: l.shape({
    src: l.oneOfType([
      l.string,
      l.object
      // For Vite/webpack imported assets
    ]).isRequired,
    alt: l.string
  }),
  /** Optional action button component */
  actionButton: l.node,
  /** Additional CSS class name */
  className: l.string
};
var xt = { exports: {} };
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Vs = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Pt = /* @__PURE__ */ Vs.join(","), Gs = typeof Element > "u", Le = Gs ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, At = !Gs && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, It = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var a = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), s = a === "" || a === "true", i = s || n && t && e(t.parentNode);
  return i;
}, zc = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, Xs = function(t, n, r) {
  if (It(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Pt));
  return n && Le.call(t, Pt) && a.unshift(t), a = a.filter(r), a;
}, Ks = function e(t, n, r) {
  for (var a = [], s = Array.from(t); s.length; ) {
    var i = s.shift();
    if (!It(i, !1))
      if (i.tagName === "SLOT") {
        var c = i.assignedElements(), u = c.length ? c : i.children, f = e(u, !0, r);
        r.flatten ? a.push.apply(a, f) : a.push({
          scopeParent: i,
          candidates: f
        });
      } else {
        var d = Le.call(i, Pt);
        d && r.filter(i) && (n || !t.includes(i)) && a.push(i);
        var h = i.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(i), g = !It(h, !1) && (!r.shadowRootFilter || r.shadowRootFilter(i));
        if (h && g) {
          var p = e(h === !0 ? i.children : h.children, !0, r);
          r.flatten ? a.push.apply(a, p) : a.push({
            scopeParent: i,
            candidates: p
          });
        } else
          s.unshift.apply(s, i.children);
      }
  }
  return a;
}, Js = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, _e = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || zc(t)) && !Js(t) ? 0 : t.tabIndex;
}, qc = function(t, n) {
  var r = _e(t);
  return r < 0 && n && !Js(t) ? 0 : r;
}, $c = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Zs = function(t) {
  return t.tagName === "INPUT";
}, Bc = function(t) {
  return Zs(t) && t.type === "hidden";
}, Wc = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Yc = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, Uc = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || At(t), r = function(c) {
    return n.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = r(window.CSS.escape(t.name));
  else
    try {
      a = r(t.name);
    } catch (i) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i.message), !1;
    }
  var s = Yc(a, t.form);
  return !s || s === t;
}, Hc = function(t) {
  return Zs(t) && t.type === "radio";
}, Vc = function(t) {
  return Hc(t) && !Uc(t);
}, Gc = function(t) {
  var n, r = t && At(t), a = (n = r) === null || n === void 0 ? void 0 : n.host, s = !1;
  if (r && r !== t) {
    var i, c, u;
    for (s = !!((i = a) !== null && i !== void 0 && (c = i.ownerDocument) !== null && c !== void 0 && c.contains(a) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !s && a; ) {
      var f, d, h;
      r = At(a), a = (f = r) === null || f === void 0 ? void 0 : f.host, s = !!((d = a) !== null && d !== void 0 && (h = d.ownerDocument) !== null && h !== void 0 && h.contains(a));
    }
  }
  return s;
}, Ca = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, a = n.height;
  return r === 0 && a === 0;
}, Xc = function(t, n) {
  var r = n.displayCheck, a = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var s = Le.call(t, "details>summary:first-of-type"), i = s ? t.parentElement : t;
  if (Le.call(i, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof a == "function") {
      for (var c = t; t; ) {
        var u = t.parentElement, f = At(t);
        if (u && !u.shadowRoot && a(u) === !0)
          return Ca(t);
        t.assignedSlot ? t = t.assignedSlot : !u && f !== t.ownerDocument ? t = f.host : t = u;
      }
      t = c;
    }
    if (Gc(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return Ca(t);
  return !1;
}, Kc = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var a = n.children.item(r);
          if (a.tagName === "LEGEND")
            return Le.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Ft = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  It(n) || Bc(n) || Xc(n, t) || // For a details element with a summary, the summary element gets the focus
  Wc(n) || Kc(n));
}, $n = function(t, n) {
  return !(Vc(n) || _e(n) < 0 || !Ft(t, n));
}, Jc = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Zc = function e(t) {
  var n = [], r = [];
  return t.forEach(function(a, s) {
    var i = !!a.scopeParent, c = i ? a.scopeParent : a, u = qc(c, i), f = i ? e(a.candidates) : c;
    u === 0 ? i ? n.push.apply(n, f) : n.push(c) : r.push({
      documentOrder: s,
      tabIndex: u,
      item: a,
      isScope: i,
      content: f
    });
  }), r.sort($c).reduce(function(a, s) {
    return s.isScope ? a.push.apply(a, s.content) : a.push(s.content), a;
  }, []).concat(n);
}, Vt = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Ks([t], n.includeContainer, {
    filter: $n.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Jc
  }) : r = Xs(t, n.includeContainer, $n.bind(null, n)), Zc(r);
}, Qs = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Ks([t], n.includeContainer, {
    filter: Ft.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = Xs(t, n.includeContainer, Ft.bind(null, n)), r;
}, Se = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return Le.call(t, Pt) === !1 ? !1 : $n(n, t);
}, Qc = /* @__PURE__ */ Vs.concat("iframe").join(","), Et = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return Le.call(t, Qc) === !1 ? !1 : Ft(n, t);
};
const eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  focusable: Qs,
  getTabIndex: _e,
  isFocusable: Et,
  isTabbable: Se,
  tabbable: Vt
}, Symbol.toStringTag, { value: "Module" }));
/*!
* focus-trap 7.6.5
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function Bn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function tu(e) {
  if (Array.isArray(e)) return Bn(e);
}
function nu(e, t, n) {
  return (t = ou(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ru(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function au() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ka(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Oa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ka(Object(n), !0).forEach(function(r) {
      nu(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ka(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function su(e) {
  return tu(e) || ru(e) || lu(e) || au();
}
function iu(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ou(e) {
  var t = iu(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function lu(e, t) {
  if (e) {
    if (typeof e == "string") return Bn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Bn(e, t) : void 0;
  }
}
var Sa = {
  activateTrap: function(t, n) {
    if (t.length > 0) {
      var r = t[t.length - 1];
      r !== n && r._setPausedState(!0);
    }
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  deactivateTrap: function(t, n) {
    var r = t.indexOf(n);
    r !== -1 && t.splice(r, 1), t.length > 0 && !t[t.length - 1]._isManuallyPaused() && t[t.length - 1]._setPausedState(!1);
  }
}, cu = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, uu = function(t) {
  return (t == null ? void 0 : t.key) === "Escape" || (t == null ? void 0 : t.key) === "Esc" || (t == null ? void 0 : t.keyCode) === 27;
}, tt = function(t) {
  return (t == null ? void 0 : t.key) === "Tab" || (t == null ? void 0 : t.keyCode) === 9;
}, fu = function(t) {
  return tt(t) && !t.shiftKey;
}, du = function(t) {
  return tt(t) && t.shiftKey;
}, Pa = function(t) {
  return setTimeout(t, 0);
}, Je = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, r) : t;
}, wt = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, mu = [], pu = function(t, n) {
  var r = (n == null ? void 0 : n.document) || document, a = (n == null ? void 0 : n.trapStack) || mu, s = Oa({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: fu,
    isKeyBackward: du
  }, n), i = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    manuallyPaused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, c, u = function(x, y, O) {
    return x && x[y] !== void 0 ? x[y] : s[O || y];
  }, f = function(x, y) {
    var O = typeof (y == null ? void 0 : y.composedPath) == "function" ? y.composedPath() : void 0;
    return i.containerGroups.findIndex(function(z) {
      var D = z.container, L = z.tabbableNodes;
      return D.contains(x) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (O == null ? void 0 : O.includes(D)) || L.find(function(M) {
        return M === x;
      });
    });
  }, d = function(x) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, O = y.hasFallback, z = O === void 0 ? !1 : O, D = y.params, L = D === void 0 ? [] : D, M = s[x];
    if (typeof M == "function" && (M = M.apply(void 0, su(L))), M === !0 && (M = void 0), !M) {
      if (M === void 0 || M === !1)
        return M;
      throw new Error("`".concat(x, "` was specified but was not a node, or did not return a node"));
    }
    var m = M;
    if (typeof M == "string") {
      try {
        m = r.querySelector(M);
      } catch (R) {
        throw new Error("`".concat(x, '` appears to be an invalid selector; error="').concat(R.message, '"'));
      }
      if (!m && !z)
        throw new Error("`".concat(x, "` as selector refers to no known node"));
    }
    return m;
  }, h = function() {
    var x = d("initialFocus", {
      hasFallback: !0
    });
    if (x === !1)
      return !1;
    if (x === void 0 || x && !Et(x, s.tabbableOptions))
      if (f(r.activeElement) >= 0)
        x = r.activeElement;
      else {
        var y = i.tabbableGroups[0], O = y && y.firstTabbableNode;
        x = O || d("fallbackFocus");
      }
    else x === null && (x = d("fallbackFocus"));
    if (!x)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return x;
  }, g = function() {
    if (i.containerGroups = i.containers.map(function(x) {
      var y = Vt(x, s.tabbableOptions), O = Qs(x, s.tabbableOptions), z = y.length > 0 ? y[0] : void 0, D = y.length > 0 ? y[y.length - 1] : void 0, L = O.find(function(R) {
        return Se(R);
      }), M = O.slice().reverse().find(function(R) {
        return Se(R);
      }), m = !!y.find(function(R) {
        return _e(R) > 0;
      });
      return {
        container: x,
        tabbableNodes: y,
        focusableNodes: O,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: m,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: z,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: D,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: L,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: M,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(S) {
          var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, U = y.indexOf(S);
          return U < 0 ? q ? O.slice(O.indexOf(S) + 1).find(function(H) {
            return Se(H);
          }) : O.slice(0, O.indexOf(S)).reverse().find(function(H) {
            return Se(H);
          }) : y[U + (q ? 1 : -1)];
        }
      };
    }), i.tabbableGroups = i.containerGroups.filter(function(x) {
      return x.tabbableNodes.length > 0;
    }), i.tabbableGroups.length <= 0 && !d("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (i.containerGroups.find(function(x) {
      return x.posTabIndexesFound;
    }) && i.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, p = function(x) {
    var y = x.activeElement;
    if (y)
      return y.shadowRoot && y.shadowRoot.activeElement !== null ? p(y.shadowRoot) : y;
  }, b = function(x) {
    if (x !== !1 && x !== p(document)) {
      if (!x || !x.focus) {
        b(h());
        return;
      }
      x.focus({
        preventScroll: !!s.preventScroll
      }), i.mostRecentlyFocusedNode = x, cu(x) && x.select();
    }
  }, v = function(x) {
    var y = d("setReturnFocus", {
      params: [x]
    });
    return y || (y === !1 ? !1 : x);
  }, w = function(x) {
    var y = x.target, O = x.event, z = x.isBackward, D = z === void 0 ? !1 : z;
    y = y || wt(O), g();
    var L = null;
    if (i.tabbableGroups.length > 0) {
      var M = f(y, O), m = M >= 0 ? i.containerGroups[M] : void 0;
      if (M < 0)
        D ? L = i.tabbableGroups[i.tabbableGroups.length - 1].lastTabbableNode : L = i.tabbableGroups[0].firstTabbableNode;
      else if (D) {
        var R = i.tabbableGroups.findIndex(function(K) {
          var B = K.firstTabbableNode;
          return y === B;
        });
        if (R < 0 && (m.container === y || Et(y, s.tabbableOptions) && !Se(y, s.tabbableOptions) && !m.nextTabbableNode(y, !1)) && (R = M), R >= 0) {
          var S = R === 0 ? i.tabbableGroups.length - 1 : R - 1, q = i.tabbableGroups[S];
          L = _e(y) >= 0 ? q.lastTabbableNode : q.lastDomTabbableNode;
        } else tt(O) || (L = m.nextTabbableNode(y, !1));
      } else {
        var U = i.tabbableGroups.findIndex(function(K) {
          var B = K.lastTabbableNode;
          return y === B;
        });
        if (U < 0 && (m.container === y || Et(y, s.tabbableOptions) && !Se(y, s.tabbableOptions) && !m.nextTabbableNode(y)) && (U = M), U >= 0) {
          var H = U === i.tabbableGroups.length - 1 ? 0 : U + 1, J = i.tabbableGroups[H];
          L = _e(y) >= 0 ? J.firstTabbableNode : J.firstDomTabbableNode;
        } else tt(O) || (L = m.nextTabbableNode(y));
      }
    } else
      L = d("fallbackFocus");
    return L;
  }, T = function(x) {
    var y = wt(x);
    if (!(f(y, x) >= 0)) {
      if (Je(s.clickOutsideDeactivates, x)) {
        c.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: s.returnFocusOnDeactivate
        });
        return;
      }
      Je(s.allowOutsideClick, x) || x.preventDefault();
    }
  }, _ = function(x) {
    var y = wt(x), O = f(y, x) >= 0;
    if (O || y instanceof Document)
      O && (i.mostRecentlyFocusedNode = y);
    else {
      x.stopImmediatePropagation();
      var z, D = !0;
      if (i.mostRecentlyFocusedNode)
        if (_e(i.mostRecentlyFocusedNode) > 0) {
          var L = f(i.mostRecentlyFocusedNode), M = i.containerGroups[L].tabbableNodes;
          if (M.length > 0) {
            var m = M.findIndex(function(R) {
              return R === i.mostRecentlyFocusedNode;
            });
            m >= 0 && (s.isKeyForward(i.recentNavEvent) ? m + 1 < M.length && (z = M[m + 1], D = !1) : m - 1 >= 0 && (z = M[m - 1], D = !1));
          }
        } else
          i.containerGroups.some(function(R) {
            return R.tabbableNodes.some(function(S) {
              return _e(S) > 0;
            });
          }) || (D = !1);
      else
        D = !1;
      D && (z = w({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: i.mostRecentlyFocusedNode,
        isBackward: s.isKeyBackward(i.recentNavEvent)
      })), b(z || i.mostRecentlyFocusedNode || h());
    }
    i.recentNavEvent = void 0;
  }, E = function(x) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    i.recentNavEvent = x;
    var O = w({
      event: x,
      isBackward: y
    });
    O && (tt(x) && x.preventDefault(), b(O));
  }, k = function(x) {
    (s.isKeyForward(x) || s.isKeyBackward(x)) && E(x, s.isKeyBackward(x));
  }, j = function(x) {
    uu(x) && Je(s.escapeDeactivates, x) !== !1 && (x.preventDefault(), c.deactivate());
  }, G = function(x) {
    var y = wt(x);
    f(y, x) >= 0 || Je(s.clickOutsideDeactivates, x) || Je(s.allowOutsideClick, x) || (x.preventDefault(), x.stopImmediatePropagation());
  }, P = function() {
    if (i.active)
      return Sa.activateTrap(a, c), i.delayInitialFocusTimer = s.delayInitialFocus ? Pa(function() {
        b(h());
      }) : b(h()), r.addEventListener("focusin", _, !0), r.addEventListener("mousedown", T, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", T, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", G, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", k, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", j), c;
  }, A = function() {
    if (i.active)
      return r.removeEventListener("focusin", _, !0), r.removeEventListener("mousedown", T, !0), r.removeEventListener("touchstart", T, !0), r.removeEventListener("click", G, !0), r.removeEventListener("keydown", k, !0), r.removeEventListener("keydown", j), c;
  }, C = function(x) {
    var y = x.some(function(O) {
      var z = Array.from(O.removedNodes);
      return z.some(function(D) {
        return D === i.mostRecentlyFocusedNode;
      });
    });
    y && b(h());
  }, N = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(C) : void 0, Y = function() {
    N && (N.disconnect(), i.active && !i.paused && i.containers.map(function(x) {
      N.observe(x, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return c = {
    get active() {
      return i.active;
    },
    get paused() {
      return i.paused;
    },
    activate: function(x) {
      if (i.active)
        return this;
      var y = u(x, "onActivate"), O = u(x, "onPostActivate"), z = u(x, "checkCanFocusTrap");
      z || g(), i.active = !0, i.paused = !1, i.nodeFocusedBeforeActivation = p(r), y == null || y();
      var D = function() {
        z && g(), P(), Y(), O == null || O();
      };
      return z ? (z(i.containers.concat()).then(D, D), this) : (D(), this);
    },
    deactivate: function(x) {
      if (!i.active)
        return this;
      var y = Oa({
        onDeactivate: s.onDeactivate,
        onPostDeactivate: s.onPostDeactivate,
        checkCanReturnFocus: s.checkCanReturnFocus
      }, x);
      clearTimeout(i.delayInitialFocusTimer), i.delayInitialFocusTimer = void 0, A(), i.active = !1, i.paused = !1, Y(), Sa.deactivateTrap(a, c);
      var O = u(y, "onDeactivate"), z = u(y, "onPostDeactivate"), D = u(y, "checkCanReturnFocus"), L = u(y, "returnFocus", "returnFocusOnDeactivate");
      O == null || O();
      var M = function() {
        Pa(function() {
          L && b(v(i.nodeFocusedBeforeActivation)), z == null || z();
        });
      };
      return L && D ? (D(v(i.nodeFocusedBeforeActivation)).then(M, M), this) : (M(), this);
    },
    pause: function(x) {
      return i.active ? (i.manuallyPaused = !0, this._setPausedState(!0, x)) : this;
    },
    unpause: function(x) {
      return i.active ? (i.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, x)) : this;
    },
    updateContainerElements: function(x) {
      var y = [].concat(x).filter(Boolean);
      return i.containers = y.map(function(O) {
        return typeof O == "string" ? r.querySelector(O) : O;
      }), i.active && g(), Y(), this;
    }
  }, Object.defineProperties(c, {
    _isManuallyPaused: {
      value: function() {
        return i.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(x, y) {
        if (i.paused === x)
          return this;
        if (i.paused = x, x) {
          var O = u(y, "onPause"), z = u(y, "onPostPause");
          O == null || O(), A(), Y(), z == null || z();
        } else {
          var D = u(y, "onUnpause"), L = u(y, "onPostUnpause");
          D == null || D(), g(), P(), Y(), L == null || L();
        }
        return this;
      }
    }
  }), c.updateContainerElements(t), c;
};
const hu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createFocusTrap: pu
}, Symbol.toStringTag, { value: "Module" })), gu = /* @__PURE__ */ ts(hu), vu = /* @__PURE__ */ ts(eu);
var Aa;
function bu() {
  if (Aa) return xt.exports;
  Aa = 1;
  function e(P) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A) {
      return typeof A;
    } : function(A) {
      return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
    }, e(P);
  }
  var t, n;
  function r(P, A) {
    if (!(P instanceof A)) throw new TypeError("Cannot call a class as a function");
  }
  function a(P, A) {
    for (var C = 0; C < A.length; C++) {
      var N = A[C];
      N.enumerable = N.enumerable || !1, N.configurable = !0, "value" in N && (N.writable = !0), Object.defineProperty(P, b(N.key), N);
    }
  }
  function s(P, A, C) {
    return A && a(P.prototype, A), Object.defineProperty(P, "prototype", { writable: !1 }), P;
  }
  function i(P, A, C) {
    return A = d(A), c(P, f() ? Reflect.construct(A, C || [], d(P).constructor) : A.apply(P, C));
  }
  function c(P, A) {
    if (A && (e(A) == "object" || typeof A == "function")) return A;
    if (A !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return u(P);
  }
  function u(P) {
    if (P === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return P;
  }
  function f() {
    try {
      var P = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (f = function() {
      return !!P;
    })();
  }
  function d(P) {
    return d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(A) {
      return A.__proto__ || Object.getPrototypeOf(A);
    }, d(P);
  }
  function h(P, A) {
    if (typeof A != "function" && A !== null) throw new TypeError("Super expression must either be null or a function");
    P.prototype = Object.create(A && A.prototype, { constructor: { value: P, writable: !0, configurable: !0 } }), Object.defineProperty(P, "prototype", { writable: !1 }), A && g(P, A);
  }
  function g(P, A) {
    return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(C, N) {
      return C.__proto__ = N, C;
    }, g(P, A);
  }
  function p(P, A, C) {
    return (A = b(A)) in P ? Object.defineProperty(P, A, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : P[A] = C, P;
  }
  function b(P) {
    var A = v(P, "string");
    return e(A) == "symbol" ? A : A + "";
  }
  function v(P, A) {
    if (e(P) != "object" || !P) return P;
    var C = P[Symbol.toPrimitive];
    if (C !== void 0) {
      var N = C.call(P, A);
      if (e(N) != "object") return N;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (A === "string" ? String : Number)(P);
  }
  var w = ae, T = gu, _ = T.createFocusTrap, E = vu, k = E.isFocusable, j = parseInt((t = (n = /^(\d+)\./.exec(w.version)) === null || n === void 0 ? void 0 : n[1]) !== null && t !== void 0 ? t : 0, 10), G = /* @__PURE__ */ function(P) {
    function A(C) {
      var N;
      r(this, A), N = i(this, A, [C]), p(N, "getNodeForOption", function(x) {
        var y, O = (y = this.internalOptions[x]) !== null && y !== void 0 ? y : this.originalOptions[x];
        if (typeof O == "function") {
          for (var z = arguments.length, D = new Array(z > 1 ? z - 1 : 0), L = 1; L < z; L++)
            D[L - 1] = arguments[L];
          O = O.apply(void 0, D);
        }
        if (O === !0 && (O = void 0), !O) {
          if (O === void 0 || O === !1)
            return O;
          throw new Error("`".concat(x, "` was specified but was not a node, or did not return a node"));
        }
        var M = O;
        if (typeof O == "string") {
          var m;
          if (M = (m = this.getDocument()) === null || m === void 0 ? void 0 : m.querySelector(O), !M)
            throw new Error("`".concat(x, "` as selector refers to no known node"));
        }
        return M;
      }), N.handleDeactivate = N.handleDeactivate.bind(N), N.handlePostDeactivate = N.handlePostDeactivate.bind(N), N.handleClickOutsideDeactivates = N.handleClickOutsideDeactivates.bind(N), N.internalOptions = {
        // We need to hijack the returnFocusOnDeactivate option,
        // because React can move focus into the element before we arrived at
        // this lifecycle hook (e.g. with autoFocus inputs). So the component
        // captures the previouslyFocusedElement in componentWillMount,
        // then (optionally) returns focus to it in componentWillUnmount.
        returnFocusOnDeactivate: !1,
        // the rest of these are also related to deactivation of the trap, and we
        //  need to use them and control them as well
        checkCanReturnFocus: null,
        onDeactivate: N.handleDeactivate,
        onPostDeactivate: N.handlePostDeactivate,
        // we need to special-case this setting as well so that we can know if we should
        //  NOT return focus if the trap gets auto-deactivated as the result of an
        //  outside click (otherwise, we'll always think we should return focus because
        //  of how we manage that flag internally here)
        clickOutsideDeactivates: N.handleClickOutsideDeactivates
      }, N.originalOptions = {
        // because of the above `internalOptions`, we maintain our own flag for
        //  this option, and default it to `true` because that's focus-trap's default
        returnFocusOnDeactivate: !0,
        // because of the above `internalOptions`, we keep these separate since
        //  they're part of the deactivation process which we configure (internally) to
        //  be shared between focus-trap and focus-trap-react
        onDeactivate: null,
        onPostDeactivate: null,
        checkCanReturnFocus: null,
        // the user's setting, defaulted to false since focus-trap defaults this to false
        clickOutsideDeactivates: !1
      };
      var Y = C.focusTrapOptions;
      for (var W in Y)
        if (Object.prototype.hasOwnProperty.call(Y, W)) {
          if (W === "returnFocusOnDeactivate" || W === "onDeactivate" || W === "onPostDeactivate" || W === "checkCanReturnFocus" || W === "clickOutsideDeactivates") {
            N.originalOptions[W] = Y[W];
            continue;
          }
          N.internalOptions[W] = Y[W];
        }
      return N.outsideClick = null, N.focusTrapElements = C.containerElements || [], N.updatePreviousElement(), N;
    }
    return h(A, P), s(A, [{
      key: "getDocument",
      value: function() {
        return this.props.focusTrapOptions.document || (typeof document < "u" ? document : void 0);
      }
    }, {
      key: "getReturnFocusNode",
      value: function() {
        var N = this.getNodeForOption("setReturnFocus", this.previouslyFocusedElement);
        return N || (N === !1 ? !1 : this.previouslyFocusedElement);
      }
      /** Update the previously focused element with the currently focused element. */
    }, {
      key: "updatePreviousElement",
      value: function() {
        var N = this.getDocument();
        N && (this.previouslyFocusedElement = N.activeElement);
      }
    }, {
      key: "deactivateTrap",
      value: function() {
        !this.focusTrap || !this.focusTrap.active || this.focusTrap.deactivate({
          // NOTE: we never let the trap return the focus since we do that ourselves
          returnFocus: !1,
          // we'll call this in our own post deactivate handler so make sure the trap doesn't
          //  do it prematurely
          checkCanReturnFocus: null,
          // let it call the user's original deactivate handler, if any, instead of
          //  our own which calls back into this function
          onDeactivate: this.originalOptions.onDeactivate
          // NOTE: for post deactivate, don't specify anything so that it calls the
          //  onPostDeactivate handler specified on `this.internalOptions`
          //  which will always be our own `handlePostDeactivate()` handler, which
          //  will finish things off by calling the user's provided onPostDeactivate
          //  handler, if any, at the right time
          // onPostDeactivate: NOTHING
        });
      }
    }, {
      key: "handleClickOutsideDeactivates",
      value: function(N) {
        var Y = typeof this.originalOptions.clickOutsideDeactivates == "function" ? this.originalOptions.clickOutsideDeactivates.call(null, N) : this.originalOptions.clickOutsideDeactivates;
        return Y && (this.outsideClick = {
          target: N.target,
          allowDeactivation: Y
        }), Y;
      }
    }, {
      key: "handleDeactivate",
      value: function() {
        this.originalOptions.onDeactivate && this.originalOptions.onDeactivate.call(null), this.deactivateTrap();
      }
    }, {
      key: "handlePostDeactivate",
      value: function() {
        var N = this, Y = function() {
          var x = N.getReturnFocusNode(), y = !!// did the consumer allow it?
          (N.originalOptions.returnFocusOnDeactivate && // can we actually focus the node?
          x !== null && x !== void 0 && x.focus && // was there an outside click that allowed deactivation?
          (!N.outsideClick || // did the consumer allow deactivation when the outside node was clicked?
          N.outsideClick.allowDeactivation && // is the outside node NOT focusable (implying that it did NOT receive focus
          //  as a result of the click-through) -- in which case do NOT restore focus
          //  to `returnFocusNode` because focus should remain on the outside node
          !k(N.outsideClick.target, N.internalOptions.tabbableOptions))), O = N.internalOptions.preventScroll, z = O === void 0 ? !1 : O;
          y && x.focus({
            preventScroll: z
          }), N.originalOptions.onPostDeactivate && N.originalOptions.onPostDeactivate.call(null), N.outsideClick = null;
        };
        this.originalOptions.checkCanReturnFocus ? this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()).then(Y, Y) : Y();
      }
    }, {
      key: "setupFocusTrap",
      value: function() {
        if (this.focusTrap)
          this.props.active && !this.focusTrap.active && (this.focusTrap.activate(), this.props.paused && this.focusTrap.pause());
        else {
          var N = this.focusTrapElements.some(Boolean);
          N && (this.focusTrap = this.props._createFocusTrap(this.focusTrapElements, this.internalOptions), this.props.active && this.focusTrap.activate(), this.props.paused && this.focusTrap.pause());
        }
      }
    }, {
      key: "componentDidMount",
      value: function() {
        this.props.active && this.setupFocusTrap();
      }
    }, {
      key: "componentDidUpdate",
      value: function(N) {
        if (this.focusTrap) {
          N.containerElements !== this.props.containerElements && this.focusTrap.updateContainerElements(this.props.containerElements);
          var Y = !N.active && this.props.active, W = N.active && !this.props.active, x = !N.paused && this.props.paused, y = N.paused && !this.props.paused;
          if (Y && (this.updatePreviousElement(), this.focusTrap.activate()), W) {
            this.deactivateTrap();
            return;
          }
          x && this.focusTrap.pause(), y && this.focusTrap.unpause();
        } else
          N.containerElements !== this.props.containerElements && (this.focusTrapElements = this.props.containerElements), this.props.active && (this.updatePreviousElement(), this.setupFocusTrap());
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.deactivateTrap();
      }
    }, {
      key: "render",
      value: function() {
        var N = this, Y = this.props.children ? w.Children.only(this.props.children) : void 0;
        if (Y) {
          if (Y.type && Y.type === w.Fragment)
            throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");
          var W = function(O) {
            var z = N.props.containerElements;
            Y && (j >= 19 ? typeof Y.props.ref == "function" ? Y.props.ref(O) : Y.props.ref && (Y.props.ref.current = O) : typeof Y.ref == "function" ? Y.ref(O) : Y.ref && (Y.ref.current = O)), N.focusTrapElements = z || [O];
          }, x = w.cloneElement(Y, {
            ref: W
          });
          return x;
        }
        return null;
      }
    }]);
  }(w.Component);
  return G.defaultProps = {
    active: !0,
    paused: !1,
    focusTrapOptions: {},
    _createFocusTrap: _
  }, xt.exports = G, xt.exports.FocusTrap = G, xt.exports;
}
var yu = bu();
const ei = ({
  heading: e,
  text: t,
  actionButton: n,
  onClick: r,
  className: a,
  children: s,
  media: i,
  mediaPosition: c = "left",
  mediaExdent: u = !1,
  mediaFirst: f = !1,
  mediaInset: d = !1,
  ...h
}) => {
  const p = [
    "usa-card",
    i && "usa-card--media",
    u && "usa-card--exdent",
    f && "usa-card--header-first",
    d && "usa-card--inset",
    a
  ].filter(Boolean).join(" "), b = n && r ? ae.cloneElement(n, { onClick: r }) : n, v = () => i ? /* @__PURE__ */ o.jsx("div", { className: `usa-card__media ${u ? "usa-card__media--exdent" : ""}`, children: /* @__PURE__ */ o.jsx("div", { className: "usa-card__img", children: typeof i == "string" ? /* @__PURE__ */ o.jsx("img", { src: i, alt: "" }) : i }) }) : null;
  return /* @__PURE__ */ o.jsx("div", { className: p, ...h, children: /* @__PURE__ */ o.jsxs("div", { className: "usa-card__container", children: [
    i && v(),
    e && /* @__PURE__ */ o.jsx("div", { className: "usa-card__header", children: /* @__PURE__ */ o.jsx("h4", { className: "usa-card__heading", children: e }) }),
    /* @__PURE__ */ o.jsxs("div", { className: "usa-card__body", children: [
      t && /* @__PURE__ */ o.jsx("p", { children: t }),
      s
    ] }),
    n && /* @__PURE__ */ o.jsx("div", { className: "usa-card__footer", children: b })
  ] }) });
};
ei.propTypes = {
  heading: l.string,
  text: l.string,
  actionButton: l.node,
  onClick: l.func,
  className: l.string,
  children: l.node,
  media: l.oneOfType([l.string, l.node]),
  mediaPosition: l.oneOf(["left", "right"]),
  mediaExdent: l.bool,
  mediaFirst: l.bool,
  mediaInset: l.bool
};
const xu = ({
  isOpen: e = !1,
  onClose: t,
  onConfirm: n,
  heading: r,
  children: a,
  confirmButton: s,
  cancelButton: i,
  size: c = "default",
  forcedAction: u = !1,
  className: f,
  ariaLabelledBy: d,
  ariaDescribedBy: h,
  ...g
}) => {
  const p = nt(null), b = nt(null);
  Ne(() => {
    const N = p.current;
    if (N)
      if (e)
        N.showModal(), N.classList.add("usa-modal--visible"), document.body.classList.add("usa-js-modal--active");
      else {
        N.classList.remove("usa-modal--visible");
        const Y = setTimeout(() => {
          N.open && N.close(), document.body.classList.remove("usa-js-modal--active");
        }, 150);
        return () => clearTimeout(Y);
      }
  }, [e]);
  const v = mt((N) => {
    N.key === "Escape" && !u && t && (N.preventDefault(), t());
  }, [u, t]), w = mt((N) => {
    N.target === p.current && !u && t && t();
  }, [u, t]), T = mt(() => {
    t && t();
  }, [t]), _ = mt(() => {
    n && n();
  }, [n]), E = s && ae.cloneElement(s, {
    onClick: (N) => {
      s.props.onClick && s.props.onClick(N), _();
    },
    tabIndex: 0
    // Ensure button is focusable
  }), k = i && ae.cloneElement(i, {
    onClick: (N) => {
      i.props.onClick && i.props.onClick(N), T();
    },
    tabIndex: 0
    // Ensure button is focusable
  }), j = (E || k) && /* @__PURE__ */ o.jsxs("div", { className: "usa-button-group", children: [
    E && /* @__PURE__ */ o.jsx("div", { className: "usa-button-group__item", children: E }),
    k && /* @__PURE__ */ o.jsx("div", { className: "usa-button-group__item", children: k })
  ] }), G = [
    "usa-modal",
    c === "large" && "usa-modal--lg",
    u && "usa-modal--forced-action",
    f
  ].filter(Boolean).join(" "), C = !!(E || k) || !u;
  return /* @__PURE__ */ o.jsx(
    "dialog",
    {
      ref: p,
      className: G,
      onKeyDown: v,
      onClick: w,
      "aria-labelledby": d,
      "aria-describedby": h,
      "aria-modal": "true",
      ...g,
      children: /* @__PURE__ */ o.jsx(
        yu.FocusTrap,
        {
          active: e,
          focusTrapOptions: {
            allowOutsideClick: !u,
            escapeDeactivates: !u,
            returnFocusOnDeactivate: !0,
            clickOutsideDeactivates: !u,
            initialFocus: () => {
              const N = b.current;
              if (!N) return !1;
              const Y = N.querySelector('button:not([disabled]):not([aria-hidden="true"])');
              if (Y)
                return Y;
              const W = N.querySelector('[tabindex="0"], input, select, textarea, button, a[href]');
              return W || N;
            },
            setReturnFocus: (N) => N,
            fallbackFocus: () => b.current ? (b.current.setAttribute("tabindex", "0"), b.current) : !1
          },
          children: /* @__PURE__ */ o.jsxs(
            "div",
            {
              ref: b,
              className: "usa-modal__container",
              tabIndex: C ? void 0 : 0,
              children: [
                /* @__PURE__ */ o.jsxs(
                  ei,
                  {
                    heading: r,
                    actionButton: j,
                    className: "usa-modal__card",
                    children: [
                      !u && /* @__PURE__ */ o.jsx(
                        "button",
                        {
                          type: "button",
                          className: "usa-modal__close",
                          "aria-label": "Close this modal",
                          onClick: T,
                          tabIndex: "0",
                          children: /* @__PURE__ */ o.jsx(te, { icon: xc, className: "usa-icon" })
                        }
                      ),
                      a
                    ]
                  }
                ),
                !C && /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    type: "button",
                    className: "usa-modal__fallback-focus",
                    tabIndex: "0",
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "1px",
                      height: "1px",
                      padding: 0,
                      margin: "-1px",
                      overflow: "hidden",
                      clip: "rect(0, 0, 0, 0)",
                      whiteSpace: "nowrap",
                      border: 0
                    },
                    "aria-label": "Focus target",
                    onFocus: (N) => {
                      b.current && b.current.focus();
                    },
                    children: " "
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
};
xu.propTypes = {
  /** Whether the modal is open */
  isOpen: l.bool,
  /** Function called when modal should close */
  onClose: l.func,
  /** Function called when primary action is confirmed */
  onConfirm: l.func,
  /** Modal heading text */
  heading: l.string,
  /** Modal content */
  children: l.node,
  /** Primary action button element */
  confirmButton: l.element,
  /** Secondary/cancel button element */
  cancelButton: l.element,
  /** Size of the modal */
  size: l.oneOf(["default", "large"]),
  /** Whether user must take action (cannot close with escape or backdrop click) */
  forcedAction: l.bool,
  /** Additional CSS classes */
  className: l.string,
  /** ID of element that labels the modal */
  ariaLabelledBy: l.string,
  /** ID of element that describes the modal */
  ariaDescribedBy: l.string
};
function* Ia(e, t, n = 7) {
  if (t <= n) {
    for (let i = 1; i <= t; i++)
      yield { type: "page", value: i, isCurrent: i === e };
    return;
  }
  yield { type: "page", value: 1, isCurrent: e === 1 };
  const r = Math.floor((n - 3) / 2), a = Math.max(2, e - r), s = Math.min(t - 1, e + r);
  a > 2 && (yield { type: "ellipsis", value: "..." });
  for (let i = a; i <= s; i++)
    yield { type: "page", value: i, isCurrent: i === e };
  s < t - 1 && (yield { type: "ellipsis", value: "..." }), t > 1 && (yield { type: "page", value: t, isCurrent: e === t });
}
const wu = ({
  currentPage: e,
  totalPages: t,
  onPageChange: n,
  maxVisiblePages: r = 7,
  showEllipsis: a = !0,
  ariaLabel: s = "Pagination",
  previousText: i = "Previous",
  nextText: c = "Next",
  className: u,
  ...f
}) => {
  if (e < 1 || e > t || t < 1)
    return console.warn("Pagination: Invalid currentPage or totalPages"), null;
  const h = ["usa-pagination", u].filter(Boolean).join(" "), g = e > 1, p = e < t, b = (_) => {
    _ !== e && n && n(_);
  }, v = () => {
    g && b(e - 1);
  }, w = () => {
    p && b(e + 1);
  }, T = Array.from(
    a ? Ia(e, t, r) : Ia(e, t, t)
    // Show all pages
  );
  return /* @__PURE__ */ o.jsx(
    "nav",
    {
      "aria-label": s,
      className: h,
      ...f,
      children: /* @__PURE__ */ o.jsxs("ul", { className: "usa-pagination__list", children: [
        /* @__PURE__ */ o.jsx("li", { className: "usa-pagination__item usa-pagination__arrow", children: /* @__PURE__ */ o.jsxs(
          "button",
          {
            type: "button",
            className: `usa-pagination__link usa-pagination__previous-page ${g ? "" : "usa-pagination__link--disabled"}`,
            "aria-label": "Previous page",
            onClick: v,
            disabled: !g,
            children: [
              /* @__PURE__ */ o.jsx(
                te,
                {
                  icon: wc,
                  className: "usa-pagination__icon usa-pagination__icon--left",
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ o.jsx("span", { className: "usa-pagination__link-text", children: i })
            ]
          }
        ) }),
        T.map((_, E) => _.type === "ellipsis" ? /* @__PURE__ */ o.jsx(
          "li",
          {
            className: "usa-pagination__item usa-pagination__overflow",
            "aria-label": "ellipsis indicating non-visible pages",
            children: /* @__PURE__ */ o.jsx("span", { className: "usa-pagination__ellipsis", children: _.value })
          },
          `ellipsis-${E}`
        ) : /* @__PURE__ */ o.jsx("li", { className: "usa-pagination__item usa-pagination__page-no", children: /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            className: `usa-pagination__button ${_.isCurrent ? "usa-pagination__button--current" : ""}`,
            "aria-label": `${_.isCurrent ? "Current page, " : ""}Page ${_.value}`,
            "aria-current": _.isCurrent ? "page" : void 0,
            onClick: () => b(_.value),
            disabled: _.isCurrent,
            children: _.value
          }
        ) }, _.value)),
        /* @__PURE__ */ o.jsx("li", { className: "usa-pagination__item usa-pagination__arrow", children: /* @__PURE__ */ o.jsxs(
          "button",
          {
            type: "button",
            className: `usa-pagination__link usa-pagination__next-page ${p ? "" : "usa-pagination__link--disabled"}`,
            "aria-label": "Next page",
            onClick: w,
            disabled: !p,
            children: [
              /* @__PURE__ */ o.jsx("span", { className: "usa-pagination__link-text", children: c }),
              /* @__PURE__ */ o.jsx(
                te,
                {
                  icon: qs,
                  className: "usa-pagination__icon usa-pagination__icon--right",
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ) })
      ] })
    }
  );
};
wu.propTypes = {
  /** 
   * The currently active page number (1-based index).
   * Must be a positive integer between 1 and totalPages (inclusive).
   * @type {number}
   */
  currentPage: l.number.isRequired,
  /** 
   * The total number of pages available.
   * Must be a positive integer greater than 0.
   * @type {number}
   */
  totalPages: l.number.isRequired,
  /** 
   * Callback function called when a page is selected.
   * Receives the new page number as the first argument.
   * @type {function}
   * @param {number} page - The selected page number
   */
  onPageChange: l.func.isRequired,
  /** 
   * Maximum number of page buttons to show (including ellipsis).
   * Determines how many page numbers are visible before truncation occurs.
   * Should be an odd number >= 5 for optimal UX (allows current page to be centered).
   * @type {number}
   * @default 7
   */
  maxVisiblePages: l.number,
  /** 
   * Whether to show ellipsis (...) for truncated pages.
   * When false, all pages will be shown regardless of maxVisiblePages.
   * @type {boolean}
   * @default true
   */
  showEllipsis: l.bool,
  /** 
   * Aria label for the pagination navigation element.
   * Used by screen readers to identify the pagination component.
   * @type {string}
   * @default 'Pagination'
   */
  ariaLabel: l.string,
  /** 
   * Text content for the previous page button.
   * Can be localized for different languages.
   * @type {string}
   * @default 'Previous'
   */
  previousText: l.string,
  /** 
   * Text content for the next page button.
   * Can be localized for different languages.
   * @type {string}
   * @default 'Next'
   */
  nextText: l.string,
  /** 
   * Additional CSS class names to apply to the root navigation element.
   * Will be combined with the base 'usa-pagination' class.
   * @type {string}
   */
  className: l.string
};
const mr = ({ name: e, variable: t, value: n, className: r }) => {
  const a = ["pgov-font-family-display", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs("div", { className: a, children: [
    /* @__PURE__ */ o.jsx("div", { className: "pgov-font-family-display-example", style: { fontFamily: n }, children: "The quick brown fox jumps over the lazy dog" }),
    /* @__PURE__ */ o.jsxs("div", { className: "pgov-font-family-display-metadata", children: [
      /* @__PURE__ */ o.jsx("div", { className: "pgov-font-family-display-name", children: e }),
      /* @__PURE__ */ o.jsx("code", { className: "pgov-font-family-display-variable", children: t }),
      /* @__PURE__ */ o.jsx("div", { className: "pgov-font-family-display-value", children: n })
    ] })
  ] });
};
mr.propTypes = {
  /** Name of the font family */
  name: l.string.isRequired,
  /** CSS variable name */
  variable: l.string.isRequired,
  /** Actual font-family value */
  value: l.string.isRequired,
  /** Additional CSS class */
  className: l.string
};
mr.defaultProps = {
  className: ""
};
const pr = ({ name: e, variable: t, value: n, sizeInPx: r, className: a }) => {
  const s = ["pgov-font-size-display", a].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs("div", { className: s, children: [
    /* @__PURE__ */ o.jsx("div", { className: "pgov-font-size-display-example", style: { fontSize: n }, children: "Aa" }),
    /* @__PURE__ */ o.jsxs("div", { className: "pgov-font-size-display-metadata", children: [
      /* @__PURE__ */ o.jsx("div", { className: "pgov-font-size-display-name", children: e }),
      /* @__PURE__ */ o.jsx("code", { className: "pgov-font-size-display-variable", children: t }),
      /* @__PURE__ */ o.jsxs("div", { className: "pgov-font-size-display-value", children: [
        n,
        " (",
        r,
        ")"
      ] })
    ] })
  ] });
};
pr.propTypes = {
  /** Name of the font size */
  name: l.string.isRequired,
  /** CSS variable name */
  variable: l.string.isRequired,
  /** Actual font-size value (with unit) */
  value: l.string.isRequired,
  /** Size in pixels for reference */
  sizeInPx: l.string.isRequired,
  /** Additional CSS class */
  className: l.string
};
pr.defaultProps = {
  className: ""
};
const hr = ({ name: e, variable: t, value: n, className: r }) => {
  const a = ["pgov-font-weight-display", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs("div", { className: a, children: [
    /* @__PURE__ */ o.jsx("div", { className: "pgov-font-weight-display-example", style: { fontWeight: n }, children: "Aa" }),
    /* @__PURE__ */ o.jsxs("div", { className: "pgov-font-weight-display-metadata", children: [
      /* @__PURE__ */ o.jsx("div", { className: "pgov-font-weight-display-name", children: e }),
      /* @__PURE__ */ o.jsx("code", { className: "pgov-font-weight-display-variable", children: t }),
      /* @__PURE__ */ o.jsx("div", { className: "pgov-font-weight-display-value", children: n })
    ] })
  ] });
};
hr.propTypes = {
  /** Name of the font weight */
  name: l.string.isRequired,
  /** CSS variable name */
  variable: l.string.isRequired,
  /** Actual font-weight value */
  value: l.string.isRequired,
  /** Additional CSS class */
  className: l.string
};
hr.defaultProps = {
  className: ""
};
const gr = ({ name: e, variable: t, value: n, className: r }) => {
  const a = ["pgov-line-height-display", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs("div", { className: a, children: [
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: "pgov-line-height-display-example",
        style: { lineHeight: n },
        children: [
          "This is an example of text with ",
          e,
          " line height.",
          /* @__PURE__ */ o.jsx("br", {}),
          "The quick brown fox jumps over the lazy dog.",
          /* @__PURE__ */ o.jsx("br", {}),
          "This shows how lines of text are spaced."
        ]
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: "pgov-line-height-display-metadata", children: [
      /* @__PURE__ */ o.jsx("div", { className: "pgov-line-height-display-name", children: e }),
      /* @__PURE__ */ o.jsx("code", { className: "pgov-line-height-display-variable", children: t }),
      /* @__PURE__ */ o.jsx("div", { className: "pgov-line-height-display-value", children: n })
    ] })
  ] });
};
gr.propTypes = {
  /** Name of the line height */
  name: l.string.isRequired,
  /** CSS variable name */
  variable: l.string.isRequired,
  /** Actual line-height value */
  value: l.string.isRequired,
  /** Additional CSS class */
  className: l.string
};
gr.defaultProps = {
  className: ""
};
const vr = ({ name: e, variable: t, value: n, className: r }) => {
  const a = ["pgov-letter-spacing-display", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs("div", { className: a, children: [
    /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "pgov-letter-spacing-display-example",
        style: { letterSpacing: n },
        children: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: "pgov-letter-spacing-display-metadata", children: [
      /* @__PURE__ */ o.jsx("div", { className: "pgov-letter-spacing-display-name", children: e }),
      /* @__PURE__ */ o.jsx("code", { className: "pgov-letter-spacing-display-variable", children: t }),
      /* @__PURE__ */ o.jsx("div", { className: "pgov-letter-spacing-display-value", children: n })
    ] })
  ] });
};
vr.propTypes = {
  /** Name of the letter spacing */
  name: l.string.isRequired,
  /** CSS variable name */
  variable: l.string.isRequired,
  /** Actual letter-spacing value */
  value: l.string.isRequired,
  /** Additional CSS class */
  className: l.string
};
vr.defaultProps = {
  className: ""
};
const br = ({ families: e, className: t }) => {
  const n = ["pgov-font-families", t].filter(Boolean).join(" "), r = e || ti;
  return /* @__PURE__ */ o.jsx("div", { className: n, children: r.map((a, s) => /* @__PURE__ */ o.jsx(
    mr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    s
  )) });
}, ti = [
  {
    name: "Sans Serif",
    variable: "var(--font-family-reading-public-sans)",
    value: "Public Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
  },
  {
    name: "Serif",
    variable: "var(--font-family-display-merriweather)",
    value: "Merriweather, Georgia, Cambria, 'Times New Roman', Times, serif"
  },
  {
    name: "Monospace",
    variable: "var(--font-family-mono-roboto-mono)",
    value: "'Roboto Mono', Consolas, Monaco, 'Andale Mono', monospace"
  }
];
br.propTypes = {
  /** Array of font family objects */
  families: l.arrayOf(
    l.shape({
      name: l.string.isRequired,
      variable: l.string.isRequired,
      value: l.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: l.string
};
br.defaultProps = {
  families: ti,
  className: ""
};
const yr = ({ sizes: e, className: t }) => {
  const n = ["pgov-font-sizes", t].filter(Boolean).join(" "), r = e || ni;
  return /* @__PURE__ */ o.jsx("div", { className: n, children: r.map((a, s) => /* @__PURE__ */ o.jsx(
    pr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value,
      sizeInPx: a.sizeInPx
    },
    s
  )) });
}, ni = [
  { name: "XS", variable: "var(--font-size-1)", value: "0.75rem", sizeInPx: "12px" },
  { name: "SM", variable: "var(--font-size-3)", value: "0.875rem", sizeInPx: "14px" },
  { name: "MD", variable: "var(--font-size-5)", value: "1rem", sizeInPx: "16px" },
  { name: "LG", variable: "var(--font-size-7)", value: "1.125rem", sizeInPx: "18px" },
  { name: "XL", variable: "var(--font-size-8)", value: "1.25rem", sizeInPx: "20px" },
  { name: "2XL", variable: "var(--font-size-10)", value: "1.5rem", sizeInPx: "24px" },
  { name: "3XL", variable: "var(--font-size-11)", value: "1.75rem", sizeInPx: "28px" },
  { name: "4XL", variable: "var(--font-size-12)", value: "2rem", sizeInPx: "32px" },
  { name: "5XL", variable: "var(--font-size-14)", value: "2.5rem", sizeInPx: "40px" },
  { name: "6XL", variable: "var(--font-size-15)", value: "3rem", sizeInPx: "48px" },
  { name: "7XL", variable: "var(--font-size-16)", value: "3.5rem", sizeInPx: "56px" },
  { name: "8XL", variable: "var(--font-size-17)", value: "4rem", sizeInPx: "64px" },
  { name: "10XL", variable: "var(--font-size-18)", value: "5rem", sizeInPx: "80px" }
];
yr.propTypes = {
  /** Array of font size objects */
  sizes: l.arrayOf(
    l.shape({
      name: l.string.isRequired,
      variable: l.string.isRequired,
      value: l.string.isRequired,
      sizeInPx: l.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: l.string
};
yr.defaultProps = {
  sizes: ni,
  className: ""
};
const xr = ({ weights: e, className: t }) => {
  const n = ["pgov-font-weights", t].filter(Boolean).join(" "), r = e || ri;
  return /* @__PURE__ */ o.jsx("div", { className: n, children: r.map((a, s) => /* @__PURE__ */ o.jsx(
    hr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    s
  )) });
}, ri = [
  { name: "Thin", variable: "--theme-font-weight-thin", value: "100" },
  { name: "Light", variable: "--theme-font-weight-light", value: "300" },
  { name: "Regular", variable: "--theme-font-weight-normal", value: "400" },
  { name: "Semi Bold", variable: "--theme-font-weight-semibold", value: "600" },
  { name: "Bold", variable: "--theme-font-weight-bold", value: "700" },
  { name: "Extra Bold", variable: "--theme-font-weight-heavy", value: "800" }
];
xr.propTypes = {
  /** Array of font weight objects */
  weights: l.arrayOf(
    l.shape({
      name: l.string.isRequired,
      variable: l.string.isRequired,
      value: l.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: l.string
};
xr.defaultProps = {
  weights: ri,
  className: ""
};
const wr = ({ lineHeights: e, className: t }) => {
  const n = ["pgov-line-heights", t].filter(Boolean).join(" "), r = e || ai;
  return /* @__PURE__ */ o.jsx("div", { className: n, children: r.map((a, s) => /* @__PURE__ */ o.jsx(
    gr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    s
  )) });
}, ai = [
  { name: "Tight", variable: "1.1", value: "1" },
  { name: "Snug", variable: "1.25", value: "1.25" },
  { name: "Normal", variable: "1.5", value: "1.5" },
  { name: "Relaxed", variable: "1.75", value: "1.75" },
  { name: "Loose", variable: "1.7", value: "2" }
];
wr.propTypes = {
  /** Array of line height objects */
  lineHeights: l.arrayOf(
    l.shape({
      name: l.string.isRequired,
      variable: l.string.isRequired,
      value: l.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: l.string
};
wr.defaultProps = {
  lineHeights: ai,
  className: ""
};
const Nr = ({ letterSpacings: e, className: t }) => {
  const n = ["pgov-letter-spacings", t].filter(Boolean).join(" "), r = e || si;
  return /* @__PURE__ */ o.jsx("div", { className: n, children: r.map((a, s) => /* @__PURE__ */ o.jsx(
    vr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    s
  )) });
}, si = [
  { name: "Tighter", variable: "-0.05em", value: "-0.05em" },
  { name: "Tight", variable: "-0.01em", value: "-0.025em" },
  { name: "Normal", variable: "0", value: "0em" },
  { name: "Wide", variable: "0.025em", value: "0.025em" },
  { name: "Wider", variable: "0.05em", value: "0.05em" },
  { name: "Widest", variable: "0.1em", value: "0.1em" }
];
Nr.propTypes = {
  /** Array of letter spacing objects */
  letterSpacings: l.arrayOf(
    l.shape({
      name: l.string.isRequired,
      variable: l.string.isRequired,
      value: l.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: l.string
};
Nr.defaultProps = {
  letterSpacings: si,
  className: ""
};
l.string.isRequired, l.string.isRequired, l.string.isRequired;
l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired;
l.string.isRequired, l.string.isRequired, l.string.isRequired;
l.string.isRequired, l.string.isRequired, l.string.isRequired;
l.string.isRequired, l.string.isRequired, l.string.isRequired;
const ii = ({
  showFontFamilies: e,
  showFontSizes: t,
  showFontWeights: n,
  showLineHeights: r,
  showLetterSpacings: a,
  className: s
}) => {
  const i = ["pgov-typography", s].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs("div", { className: i, "data-testid": "typography-container", children: [
    /* @__PURE__ */ o.jsx("h2", { className: "pgov-typography-title", children: "Typography Tokens" }),
    /* @__PURE__ */ o.jsx("p", { className: "pgov-typography-description", children: "The PGOV design system includes a comprehensive set of typography tokens for use in the UI." }),
    e && /* @__PURE__ */ o.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ o.jsx("h3", { className: "pgov-typography-section-title", children: "Font Families" }),
      /* @__PURE__ */ o.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ o.jsx(br, {}) })
    ] }),
    t && /* @__PURE__ */ o.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ o.jsx("h3", { className: "pgov-typography-section-title", children: "Font Sizes" }),
      /* @__PURE__ */ o.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ o.jsx(yr, {}) })
    ] }),
    n && /* @__PURE__ */ o.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ o.jsx("h3", { className: "pgov-typography-section-title", children: "Font Weights" }),
      /* @__PURE__ */ o.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ o.jsx(xr, {}) })
    ] }),
    r && /* @__PURE__ */ o.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ o.jsx("h3", { className: "pgov-typography-section-title", children: "Line Heights" }),
      /* @__PURE__ */ o.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ o.jsx(wr, {}) })
    ] }),
    a && /* @__PURE__ */ o.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ o.jsx("h3", { className: "pgov-typography-section-title", children: "Letter Spacing" }),
      /* @__PURE__ */ o.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ o.jsx(Nr, {}) })
    ] })
  ] });
};
ii.propTypes = {
  /** Whether to show font families section */
  showFontFamilies: l.bool,
  /** Whether to show font sizes section */
  showFontSizes: l.bool,
  /** Whether to show font weights section */
  showFontWeights: l.bool,
  /** Whether to show line heights section */
  showLineHeights: l.bool,
  /** Whether to show letter spacings section */
  showLetterSpacings: l.bool,
  /** Additional CSS class */
  className: l.string
};
ii.defaultProps = {
  showFontFamilies: !0,
  showFontSizes: !0,
  showFontWeights: !0,
  showLineHeights: !0,
  showLetterSpacings: !0,
  className: ""
};
const jr = ({
  colorValue: e,
  name: t,
  size: n = "medium",
  className: r
}) => {
  const a = {
    small: { width: 40, height: 40 },
    // Was 32x32
    medium: { width: 80, height: 80 },
    // Was 64x64
    large: { width: 125, height: 125 }
    // Was 100x100
  }, s = a[n] || a.medium, { width: i, height: c } = s, u = {
    width: `${i}px`,
    height: `${c}px`,
    backgroundColor: e,
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  }, f = `pgov-color-swatch-preview ${r || ""}`;
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      style: u,
      className: f,
      "aria-label": `Color swatch for ${t}`
    }
  );
};
jr.propTypes = {
  /**
   * Color value (CSS var or hex)
   */
  colorValue: l.string.isRequired,
  /**
   * Name of the color (for accessibility)
   */
  name: l.string.isRequired,
  /**
   * Size of the preview
   */
  size: l.oneOf(["small", "medium", "large"]),
  /**
   * Additional CSS class names
   */
  className: l.string
};
jr.defaultProps = {
  size: "medium",
  className: ""
};
const Rr = ({
  name: e,
  colorVar: t,
  description: n,
  hexValue: r,
  alignment: a,
  className: s
}) => {
  const [i, c] = be("");
  Ne(() => {
    if (typeof window < "u" && t)
      try {
        const f = getComputedStyle(document.documentElement).getPropertyValue(t).trim();
        c(f);
      } catch (f) {
        console.error(`Error getting computed style for ${t}:`, f), c("Error");
      }
  }, [t]);
  const u = `pgov-color-swatch-details ${s || ""}`;
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: u,
      role: "group",
      "aria-label": `Details for ${e} color`,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "pgov-color-swatch-name", children: e }),
        /* @__PURE__ */ o.jsx("div", { className: "pgov-color-swatch-var", "aria-label": `CSS variable: ${t}`, children: t }),
        n && /* @__PURE__ */ o.jsx("div", { className: "pgov-color-swatch-description", "aria-label": `Description: ${n}`, children: n }),
        i && !n && /* @__PURE__ */ o.jsx("div", { className: "pgov-color-swatch-hex", "aria-label": `Computed value: ${i}`, children: i }),
        !i && r && !n && /* @__PURE__ */ o.jsxs("div", { className: "pgov-color-swatch-hex", "aria-label": `Initial Hex value: ${r}`, children: [
          r,
          " (Initial)"
        ] })
      ]
    }
  );
};
Rr.propTypes = {
  /**
   * Name of the color
   */
  name: l.string.isRequired,
  /**
   * CSS variable name for the color
   */
  colorVar: l.string.isRequired,
  /**
   * Description of the color
   */
  description: l.string,
  /**
   * Hex value of the color (passed from parent, can be kept for prop validation)
   */
  hexValue: l.string,
  /**
   * Text alignment
   */
  alignment: l.oneOf(["left", "center", "right"]),
  /**
   * Additional CSS class names
   */
  className: l.string
};
Rr.defaultProps = {
  description: void 0,
  hexValue: void 0,
  alignment: "left",
  className: ""
};
const _r = ({
  colorVar: e,
  name: t,
  description: n,
  size: r,
  orientation: a,
  className: s
}) => {
  const i = `pgov-color-swatch-item ${s || ""}`;
  return /* @__PURE__ */ o.jsxs("div", { className: i, children: [
    /* @__PURE__ */ o.jsx(
      jr,
      {
        colorValue: e,
        name: t,
        size: r
      }
    ),
    /* @__PURE__ */ o.jsx(
      Rr,
      {
        name: t,
        colorVar: e,
        description: n,
        alignment: "center"
      }
    )
  ] });
};
_r.propTypes = {
  /**
   * CSS variable name for the color
   */
  colorVar: l.string.isRequired,
  /**
   * Name of the color
   */
  name: l.string.isRequired,
  /**
   * Description of the color
   */
  description: l.string,
  /**
   * Size of the color swatch preview
   */
  size: l.oneOf(["small", "medium", "large"]),
  /**
   * Layout orientation of the swatch
   */
  orientation: l.oneOf(["horizontal", "vertical"]),
  /**
   * Additional CSS class names
   */
  className: l.string
};
_r.defaultProps = {
  description: void 0,
  size: "medium",
  orientation: "vertical",
  className: ""
};
l.arrayOf(
  l.shape({
    name: l.string.isRequired,
    colorVar: l.string.isRequired,
    description: l.string,
    hexValue: l.string
  })
).isRequired, l.string, l.string, l.oneOf(["grid", "flex"]), l.oneOf(["horizontal", "vertical"]), l.oneOf(["small", "medium", "large"]), l.string;
const oi = ({
  colorVar: e,
  name: t,
  description: n,
  hexValue: r,
  size: a,
  orientation: s,
  className: i
}) => /* @__PURE__ */ o.jsx(
  _r,
  {
    colorVar: e,
    name: t,
    description: n,
    hexValue: r,
    size: a,
    orientation: s,
    className: i
  }
);
oi.propTypes = {
  /**
   * CSS variable name for the color
   */
  colorVar: l.string.isRequired,
  /**
   * Name of the color
   */
  name: l.string.isRequired,
  /**
   * Description of the color
   */
  description: l.string,
  /**
   * Hex value of the color
   */
  hexValue: l.string,
  /**
   * Size of the color swatch
   */
  size: l.oneOf(["small", "medium", "large"]),
  /**
   * Orientation of the swatch (horizontal or vertical)
   */
  orientation: l.oneOf(["horizontal", "vertical"]),
  /**
   * Additional CSS class names
   */
  className: l.string
};
oi.defaultProps = {
  description: void 0,
  hexValue: void 0,
  size: "medium",
  orientation: "horizontal",
  className: ""
};
const li = ({ name: e, variable: t, value: n, pixels: r }) => /* @__PURE__ */ o.jsxs("div", { style: {
  margin: "10px",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  width: "100%",
  maxWidth: "600px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
}, children: [
  /* @__PURE__ */ o.jsx("div", { style: {
    width: n,
    height: "24px",
    backgroundColor: "#0050d8",
    borderRadius: "4px"
  } }),
  /* @__PURE__ */ o.jsxs("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    textAlign: "right",
    minWidth: "200px"
  }, children: [
    /* @__PURE__ */ o.jsx("div", { style: { fontWeight: "bold" }, children: e }),
    /* @__PURE__ */ o.jsx("code", { style: {
      backgroundColor: "#f5f5f5",
      padding: "4px 8px",
      borderRadius: "4px",
      fontSize: "14px"
    }, children: t }),
    /* @__PURE__ */ o.jsxs("div", { style: {
      fontSize: "14px",
      color: "#666"
    }, children: [
      n,
      " (",
      r,
      ")"
    ] })
  ] })
] });
li.propTypes = {
  name: l.string.isRequired,
  variable: l.string.isRequired,
  value: l.string.isRequired,
  pixels: l.string.isRequired
};
const id = () => {
  const e = [
    { name: "3XS", variable: "var(--spacing-global-05)", value: "0.25rem", pixels: "4px" },
    { name: "2XS", variable: "var(--spacing-global-1)", value: "0.5rem", pixels: "8px" },
    { name: "XS", variable: "var(--spacing-global-105)", value: "0.75rem", pixels: "12px" },
    { name: "SM", variable: "var(--spacing-global-2)", value: "1rem", pixels: "16px" },
    { name: "MD", variable: "var(--spacing-global-3)", value: "1.5rem", pixels: "24px" },
    { name: "LG", variable: "var(--spacing-global-4)", value: "2rem", pixels: "32px" },
    { name: "XL", variable: "var(--spacing-global-5)", value: "2.5rem", pixels: "40px" },
    { name: "2XL", variable: "var(--spacing-global-6)", value: "3rem", pixels: "48px" },
    { name: "3XL", variable: "var(--spacing-global-8)", value: "4rem", pixels: "64px" }
  ];
  return /* @__PURE__ */ o.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "20px" }, children: e.map((t, n) => /* @__PURE__ */ o.jsx(
    li,
    {
      name: t.name,
      variable: t.variable,
      value: t.value,
      pixels: t.pixels
    },
    n
  )) });
}, od = () => /* @__PURE__ */ o.jsxs("div", { style: {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  maxWidth: "800px"
}, children: [
  /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsx("h3", { style: { marginBottom: "16px" }, children: "Margin Examples" }),
    /* @__PURE__ */ o.jsxs("div", { style: {
      border: "1px dashed #ddd",
      padding: "20px",
      borderRadius: "4px"
    }, children: [
      /* @__PURE__ */ o.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "16px",
        marginBottom: "var(--spacing-global-3)",
        borderRadius: "4px"
      }, children: "Element with margin-bottom: var(--spacing-global-3)" }),
      /* @__PURE__ */ o.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: "Next element" })
    ] })
  ] }),
  /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsx("h3", { style: { marginBottom: "16px" }, children: "Padding Examples" }),
    /* @__PURE__ */ o.jsxs("div", { style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px"
    }, children: [
      /* @__PURE__ */ o.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "var(--spacing-global-3)",
        borderRadius: "4px",
        width: "200px"
      }, children: "Padding: var(--spacing-global-3)" }),
      /* @__PURE__ */ o.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "var(--spacing-global-105)",
        borderRadius: "4px",
        width: "200px"
      }, children: "Padding: var(--spacing-global-105)" }),
      /* @__PURE__ */ o.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "var(--spacing-global-5)",
        borderRadius: "4px",
        width: "200px"
      }, children: "Padding: var(--spacing-global-5)" })
    ] })
  ] }),
  /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsx("h3", { style: { marginBottom: "16px" }, children: "Gap Examples" }),
    /* @__PURE__ */ o.jsxs("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }, children: [
      /* @__PURE__ */ o.jsxs("div", { style: {
        display: "flex",
        gap: "var(--spacing-global-3)",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: [
        /* @__PURE__ */ o.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ o.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ o.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { style: {
        display: "flex",
        gap: "var(--spacing-global-105)",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: [
        /* @__PURE__ */ o.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ o.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ o.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { style: {
        display: "flex",
        gap: "var(--spacing-global-5)",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: [
        /* @__PURE__ */ o.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ o.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ o.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" })
      ] })
    ] })
  ] })
] });
function Gt() {
  return typeof window < "u";
}
function Ge(e) {
  return ci(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function oe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ye(e) {
  var t;
  return (t = (ci(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ci(e) {
  return Gt() ? e instanceof Node || e instanceof oe(e).Node : !1;
}
function se(e) {
  return Gt() ? e instanceof Element || e instanceof oe(e).Element : !1;
}
function le(e) {
  return Gt() ? e instanceof HTMLElement || e instanceof oe(e).HTMLElement : !1;
}
function Dt(e) {
  return !Gt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof oe(e).ShadowRoot;
}
function ct(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(a);
}
function Nu(e) {
  return ["table", "td", "th"].includes(Ge(e));
}
function Xt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Er(e) {
  const t = Tr(), n = se(e) ? fe(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function ju(e) {
  let t = Oe(e);
  for (; le(t) && !Ue(t); ) {
    if (Er(t))
      return t;
    if (Xt(t))
      return null;
    t = Oe(t);
  }
  return null;
}
function Tr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ue(e) {
  return ["html", "body", "#document"].includes(Ge(e));
}
function fe(e) {
  return oe(e).getComputedStyle(e);
}
function Kt(e) {
  return se(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Oe(e) {
  if (Ge(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Dt(e) && e.host || // Fallback.
    ye(e)
  );
  return Dt(t) ? t.host : t;
}
function ui(e) {
  const t = Oe(e);
  return Ue(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : le(t) && ct(t) ? t : ui(t);
}
function st(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = ui(e), s = a === ((r = e.ownerDocument) == null ? void 0 : r.body), i = oe(a);
  if (s) {
    const c = Wn(i);
    return t.concat(i, i.visualViewport || [], ct(a) ? a : [], c && n ? st(c) : []);
  }
  return t.concat(a, st(a, [], n));
}
function Wn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const He = Math.min, Ae = Math.max, Lt = Math.round, Nt = Math.floor, ge = (e) => ({
  x: e,
  y: e
}), Ru = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, _u = {
  start: "end",
  end: "start"
};
function Yn(e, t, n) {
  return Ae(e, He(t, n));
}
function ut(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Me(e) {
  return e.split("-")[0];
}
function ft(e) {
  return e.split("-")[1];
}
function fi(e) {
  return e === "x" ? "y" : "x";
}
function Cr(e) {
  return e === "y" ? "height" : "width";
}
function Ie(e) {
  return ["top", "bottom"].includes(Me(e)) ? "y" : "x";
}
function kr(e) {
  return fi(Ie(e));
}
function Eu(e, t, n) {
  n === void 0 && (n = !1);
  const r = ft(e), a = kr(e), s = Cr(a);
  let i = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Mt(i)), [i, Mt(i)];
}
function Tu(e) {
  const t = Mt(e);
  return [Un(e), t, Un(t)];
}
function Un(e) {
  return e.replace(/start|end/g, (t) => _u[t]);
}
function Cu(e, t, n) {
  const r = ["left", "right"], a = ["right", "left"], s = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? a : r : t ? r : a;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function ku(e, t, n, r) {
  const a = ft(e);
  let s = Cu(Me(e), n === "start", r);
  return a && (s = s.map((i) => i + "-" + a), t && (s = s.concat(s.map(Un)))), s;
}
function Mt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ru[t]);
}
function Ou(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function di(e) {
  return typeof e != "number" ? Ou(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function zt(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: a
  } = e;
  return {
    width: r,
    height: a,
    top: n,
    left: t,
    right: t + r,
    bottom: n + a,
    x: t,
    y: n
  };
}
function Su() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function Pu() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function mi() {
  return /apple/i.test(navigator.vendor);
}
function Au() {
  return Su().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function Iu() {
  return Pu().includes("jsdom/");
}
const Fa = "data-floating-ui-focusable", Fu = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function Hn(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function qt(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Dt(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function Du(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function Ee(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function pi(e) {
  return le(e) && e.matches(Fu);
}
function Lu(e) {
  if (!e || Iu()) return !0;
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}
function Mu(e) {
  return e ? e.hasAttribute(Fa) ? e : e.querySelector("[" + Fa + "]") || e : null;
}
function it(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
var ve = typeof document < "u" ? Za : Ne;
const zu = {
  ...F
};
function jt(e) {
  const t = F.useRef(e);
  return ve(() => {
    t.current = e;
  }), t;
}
const qu = zu.useInsertionEffect, $u = qu || ((e) => e());
function Tt(e) {
  const t = F.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return $u(() => {
    t.current = e;
  }), F.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
      r[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
const hi = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function gi(e, t) {
  const n = Vt(e, hi()), r = n.length;
  if (r === 0) return;
  const a = Hn(Ee(e)), s = n.indexOf(a), i = s === -1 ? t === 1 ? 0 : r - 1 : s + t;
  return n[i];
}
function Bu(e) {
  return gi(Ee(e).body, 1) || e;
}
function Wu(e) {
  return gi(Ee(e).body, -1) || e;
}
function mn(e, t) {
  const n = t || e.currentTarget, r = e.relatedTarget;
  return !r || !qt(n, r);
}
function Yu(e) {
  Vt(e, hi()).forEach((n) => {
    n.dataset.tabindex = n.getAttribute("tabindex") || "", n.setAttribute("tabindex", "-1");
  });
}
function Da(e) {
  e.querySelectorAll("[data-tabindex]").forEach((n) => {
    const r = n.dataset.tabindex;
    delete n.dataset.tabindex, r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex");
  });
}
function La(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const s = Ie(t), i = kr(t), c = Cr(i), u = Me(t), f = s === "y", d = r.x + r.width / 2 - a.width / 2, h = r.y + r.height / 2 - a.height / 2, g = r[c] / 2 - a[c] / 2;
  let p;
  switch (u) {
    case "top":
      p = {
        x: d,
        y: r.y - a.height
      };
      break;
    case "bottom":
      p = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: h
      };
      break;
    case "left":
      p = {
        x: r.x - a.width,
        y: h
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (ft(t)) {
    case "start":
      p[i] -= g * (n && f ? -1 : 1);
      break;
    case "end":
      p[i] += g * (n && f ? -1 : 1);
      break;
  }
  return p;
}
const Uu = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: a = "absolute",
    middleware: s = [],
    platform: i
  } = n, c = s.filter(Boolean), u = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let f = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: d,
    y: h
  } = La(f, r, u), g = r, p = {}, b = 0;
  for (let v = 0; v < c.length; v++) {
    const {
      name: w,
      fn: T
    } = c[v], {
      x: _,
      y: E,
      data: k,
      reset: j
    } = await T({
      x: d,
      y: h,
      initialPlacement: r,
      placement: g,
      strategy: a,
      middlewareData: p,
      rects: f,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = _ ?? d, h = E ?? h, p = {
      ...p,
      [w]: {
        ...p[w],
        ...k
      }
    }, j && b <= 50 && (b++, typeof j == "object" && (j.placement && (g = j.placement), j.rects && (f = j.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : j.rects), {
      x: d,
      y: h
    } = La(f, g, u)), v = -1);
  }
  return {
    x: d,
    y: h,
    placement: g,
    strategy: a,
    middlewareData: p
  };
};
async function vi(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: a,
    platform: s,
    rects: i,
    elements: c,
    strategy: u
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: h = "floating",
    altBoundary: g = !1,
    padding: p = 0
  } = ut(t, e), b = di(p), w = c[g ? h === "floating" ? "reference" : "floating" : h], T = zt(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: f,
    rootBoundary: d,
    strategy: u
  })), _ = h === "floating" ? {
    x: r,
    y: a,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), k = await (s.isElement == null ? void 0 : s.isElement(E)) ? await (s.getScale == null ? void 0 : s.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, j = zt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: _,
    offsetParent: E,
    strategy: u
  }) : _);
  return {
    top: (T.top - j.top + b.top) / k.y,
    bottom: (j.bottom - T.bottom + b.bottom) / k.y,
    left: (T.left - j.left + b.left) / k.x,
    right: (j.right - T.right + b.right) / k.x
  };
}
const Hu = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: a,
      rects: s,
      platform: i,
      elements: c,
      middlewareData: u
    } = t, {
      element: f,
      padding: d = 0
    } = ut(e, t) || {};
    if (f == null)
      return {};
    const h = di(d), g = {
      x: n,
      y: r
    }, p = kr(a), b = Cr(p), v = await i.getDimensions(f), w = p === "y", T = w ? "top" : "left", _ = w ? "bottom" : "right", E = w ? "clientHeight" : "clientWidth", k = s.reference[b] + s.reference[p] - g[p] - s.floating[b], j = g[p] - s.reference[p], G = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(f));
    let P = G ? G[E] : 0;
    (!P || !await (i.isElement == null ? void 0 : i.isElement(G))) && (P = c.floating[E] || s.floating[b]);
    const A = k / 2 - j / 2, C = P / 2 - v[b] / 2 - 1, N = He(h[T], C), Y = He(h[_], C), W = N, x = P - v[b] - Y, y = P / 2 - v[b] / 2 + A, O = Yn(W, y, x), z = !u.arrow && ft(a) != null && y !== O && s.reference[b] / 2 - (y < W ? N : Y) - v[b] / 2 < 0, D = z ? y < W ? y - W : y - x : 0;
    return {
      [p]: g[p] + D,
      data: {
        [p]: O,
        centerOffset: y - O - D,
        ...z && {
          alignmentOffset: D
        }
      },
      reset: z
    };
  }
}), Vu = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: a,
        middlewareData: s,
        rects: i,
        initialPlacement: c,
        platform: u,
        elements: f
      } = t, {
        mainAxis: d = !0,
        crossAxis: h = !0,
        fallbackPlacements: g,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: v = !0,
        ...w
      } = ut(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const T = Me(a), _ = Ie(c), E = Me(c) === c, k = await (u.isRTL == null ? void 0 : u.isRTL(f.floating)), j = g || (E || !v ? [Mt(c)] : Tu(c)), G = b !== "none";
      !g && G && j.push(...ku(c, v, b, k));
      const P = [c, ...j], A = await vi(t, w), C = [];
      let N = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && C.push(A[T]), h) {
        const O = Eu(a, i, k);
        C.push(A[O[0]], A[O[1]]);
      }
      if (N = [...N, {
        placement: a,
        overflows: C
      }], !C.every((O) => O <= 0)) {
        var Y, W;
        const O = (((Y = s.flip) == null ? void 0 : Y.index) || 0) + 1, z = P[O];
        if (z) {
          var x;
          const L = h === "alignment" ? _ !== Ie(z) : !1, M = ((x = N[0]) == null ? void 0 : x.overflows[0]) > 0;
          if (!L || M)
            return {
              data: {
                index: O,
                overflows: N
              },
              reset: {
                placement: z
              }
            };
        }
        let D = (W = N.filter((L) => L.overflows[0] <= 0).sort((L, M) => L.overflows[1] - M.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!D)
          switch (p) {
            case "bestFit": {
              var y;
              const L = (y = N.filter((M) => {
                if (G) {
                  const m = Ie(M.placement);
                  return m === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  m === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((m) => m > 0).reduce((m, R) => m + R, 0)]).sort((M, m) => M[1] - m[1])[0]) == null ? void 0 : y[0];
              L && (D = L);
              break;
            }
            case "initialPlacement":
              D = c;
              break;
          }
        if (a !== D)
          return {
            reset: {
              placement: D
            }
          };
      }
      return {};
    }
  };
};
async function Gu(e, t) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), i = Me(n), c = ft(n), u = Ie(n) === "y", f = ["left", "top"].includes(i) ? -1 : 1, d = s && u ? -1 : 1, h = ut(t, e);
  let {
    mainAxis: g,
    crossAxis: p,
    alignmentAxis: b
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return c && typeof b == "number" && (p = c === "end" ? b * -1 : b), u ? {
    x: p * d,
    y: g * f
  } : {
    x: g * f,
    y: p * d
  };
}
const Xu = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: a,
        y: s,
        placement: i,
        middlewareData: c
      } = t, u = await Gu(t, e);
      return i === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : {
        x: a + u.x,
        y: s + u.y,
        data: {
          ...u,
          placement: i
        }
      };
    }
  };
}, Ku = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: a
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: c = {
          fn: (w) => {
            let {
              x: T,
              y: _
            } = w;
            return {
              x: T,
              y: _
            };
          }
        },
        ...u
      } = ut(e, t), f = {
        x: n,
        y: r
      }, d = await vi(t, u), h = Ie(Me(a)), g = fi(h);
      let p = f[g], b = f[h];
      if (s) {
        const w = g === "y" ? "top" : "left", T = g === "y" ? "bottom" : "right", _ = p + d[w], E = p - d[T];
        p = Yn(_, p, E);
      }
      if (i) {
        const w = h === "y" ? "top" : "left", T = h === "y" ? "bottom" : "right", _ = b + d[w], E = b - d[T];
        b = Yn(_, b, E);
      }
      const v = c.fn({
        ...t,
        [g]: p,
        [h]: b
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [g]: s,
            [h]: i
          }
        }
      };
    }
  };
};
function bi(e) {
  const t = fe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = le(e), s = a ? e.offsetWidth : n, i = a ? e.offsetHeight : r, c = Lt(n) !== s || Lt(r) !== i;
  return c && (n = s, r = i), {
    width: n,
    height: r,
    $: c
  };
}
function Or(e) {
  return se(e) ? e : e.contextElement;
}
function We(e) {
  const t = Or(e);
  if (!le(t))
    return ge(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: s
  } = bi(t);
  let i = (s ? Lt(n.width) : n.width) / r, c = (s ? Lt(n.height) : n.height) / a;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const Ju = /* @__PURE__ */ ge(0);
function yi(e) {
  const t = oe(e);
  return !Tr() || !t.visualViewport ? Ju : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Zu(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== oe(e) ? !1 : t;
}
function ze(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), s = Or(e);
  let i = ge(1);
  t && (r ? se(r) && (i = We(r)) : i = We(e));
  const c = Zu(s, n, r) ? yi(s) : ge(0);
  let u = (a.left + c.x) / i.x, f = (a.top + c.y) / i.y, d = a.width / i.x, h = a.height / i.y;
  if (s) {
    const g = oe(s), p = r && se(r) ? oe(r) : r;
    let b = g, v = Wn(b);
    for (; v && r && p !== b; ) {
      const w = We(v), T = v.getBoundingClientRect(), _ = fe(v), E = T.left + (v.clientLeft + parseFloat(_.paddingLeft)) * w.x, k = T.top + (v.clientTop + parseFloat(_.paddingTop)) * w.y;
      u *= w.x, f *= w.y, d *= w.x, h *= w.y, u += E, f += k, b = oe(v), v = Wn(b);
    }
  }
  return zt({
    width: d,
    height: h,
    x: u,
    y: f
  });
}
function Sr(e, t) {
  const n = Kt(e).scrollLeft;
  return t ? t.left + n : ze(ye(e)).left + n;
}
function xi(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Sr(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: a,
    y: s
  };
}
function Qu(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: a
  } = e;
  const s = a === "fixed", i = ye(r), c = t ? Xt(t.floating) : !1;
  if (r === i || c && s)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = ge(1);
  const d = ge(0), h = le(r);
  if ((h || !h && !s) && ((Ge(r) !== "body" || ct(i)) && (u = Kt(r)), le(r))) {
    const p = ze(r);
    f = We(r), d.x = p.x + r.clientLeft, d.y = p.y + r.clientTop;
  }
  const g = i && !h && !s ? xi(i, u, !0) : ge(0);
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - u.scrollLeft * f.x + d.x + g.x,
    y: n.y * f.y - u.scrollTop * f.y + d.y + g.y
  };
}
function ef(e) {
  return Array.from(e.getClientRects());
}
function tf(e) {
  const t = ye(e), n = Kt(e), r = e.ownerDocument.body, a = Ae(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Ae(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Sr(e);
  const c = -n.scrollTop;
  return fe(r).direction === "rtl" && (i += Ae(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function nf(e, t) {
  const n = oe(e), r = ye(e), a = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, c = 0, u = 0;
  if (a) {
    s = a.width, i = a.height;
    const f = Tr();
    (!f || f && t === "fixed") && (c = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: c,
    y: u
  };
}
function rf(e, t) {
  const n = ze(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, s = le(e) ? We(e) : ge(1), i = e.clientWidth * s.x, c = e.clientHeight * s.y, u = a * s.x, f = r * s.y;
  return {
    width: i,
    height: c,
    x: u,
    y: f
  };
}
function Ma(e, t, n) {
  let r;
  if (t === "viewport")
    r = nf(e, n);
  else if (t === "document")
    r = tf(ye(e));
  else if (se(t))
    r = rf(t, n);
  else {
    const a = yi(e);
    r = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return zt(r);
}
function wi(e, t) {
  const n = Oe(e);
  return n === t || !se(n) || Ue(n) ? !1 : fe(n).position === "fixed" || wi(n, t);
}
function af(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = st(e, [], !1).filter((c) => se(c) && Ge(c) !== "body"), a = null;
  const s = fe(e).position === "fixed";
  let i = s ? Oe(e) : e;
  for (; se(i) && !Ue(i); ) {
    const c = fe(i), u = Er(i);
    !u && c.position === "fixed" && (a = null), (s ? !u && !a : !u && c.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || ct(i) && !u && wi(e, i)) ? r = r.filter((d) => d !== i) : a = c, i = Oe(i);
  }
  return t.set(e, r), r;
}
function sf(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const i = [...n === "clippingAncestors" ? Xt(t) ? [] : af(t, this._c) : [].concat(n), r], c = i[0], u = i.reduce((f, d) => {
    const h = Ma(t, d, a);
    return f.top = Ae(h.top, f.top), f.right = He(h.right, f.right), f.bottom = He(h.bottom, f.bottom), f.left = Ae(h.left, f.left), f;
  }, Ma(t, c, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function of(e) {
  const {
    width: t,
    height: n
  } = bi(e);
  return {
    width: t,
    height: n
  };
}
function lf(e, t, n) {
  const r = le(t), a = ye(t), s = n === "fixed", i = ze(e, !0, s, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = ge(0);
  function f() {
    u.x = Sr(a);
  }
  if (r || !r && !s)
    if ((Ge(t) !== "body" || ct(a)) && (c = Kt(t)), r) {
      const p = ze(t, !0, s, t);
      u.x = p.x + t.clientLeft, u.y = p.y + t.clientTop;
    } else a && f();
  s && !r && a && f();
  const d = a && !r && !s ? xi(a, c) : ge(0), h = i.left + c.scrollLeft - u.x - d.x, g = i.top + c.scrollTop - u.y - d.y;
  return {
    x: h,
    y: g,
    width: i.width,
    height: i.height
  };
}
function pn(e) {
  return fe(e).position === "static";
}
function za(e, t) {
  if (!le(e) || fe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ye(e) === n && (n = n.ownerDocument.body), n;
}
function Ni(e, t) {
  const n = oe(e);
  if (Xt(e))
    return n;
  if (!le(e)) {
    let a = Oe(e);
    for (; a && !Ue(a); ) {
      if (se(a) && !pn(a))
        return a;
      a = Oe(a);
    }
    return n;
  }
  let r = za(e, t);
  for (; r && Nu(r) && pn(r); )
    r = za(r, t);
  return r && Ue(r) && pn(r) && !Er(r) ? n : r || ju(e) || n;
}
const cf = async function(e) {
  const t = this.getOffsetParent || Ni, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: lf(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function uf(e) {
  return fe(e).direction === "rtl";
}
const ff = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Qu,
  getDocumentElement: ye,
  getClippingRect: sf,
  getOffsetParent: Ni,
  getElementRects: cf,
  getClientRects: ef,
  getDimensions: of,
  getScale: We,
  isElement: se,
  isRTL: uf
};
function ji(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function df(e, t) {
  let n = null, r;
  const a = ye(e);
  function s() {
    var c;
    clearTimeout(r), (c = n) == null || c.disconnect(), n = null;
  }
  function i(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), s();
    const f = e.getBoundingClientRect(), {
      left: d,
      top: h,
      width: g,
      height: p
    } = f;
    if (c || t(), !g || !p)
      return;
    const b = Nt(h), v = Nt(a.clientWidth - (d + g)), w = Nt(a.clientHeight - (h + p)), T = Nt(d), E = {
      rootMargin: -b + "px " + -v + "px " + -w + "px " + -T + "px",
      threshold: Ae(0, He(1, u)) || 1
    };
    let k = !0;
    function j(G) {
      const P = G[0].intersectionRatio;
      if (P !== u) {
        if (!k)
          return i();
        P ? i(!1, P) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !ji(f, e.getBoundingClientRect()) && i(), k = !1;
    }
    try {
      n = new IntersectionObserver(j, {
        ...E,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(j, E);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function mf(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, f = Or(e), d = a || s ? [...f ? st(f) : [], ...st(t)] : [];
  d.forEach((T) => {
    a && T.addEventListener("scroll", n, {
      passive: !0
    }), s && T.addEventListener("resize", n);
  });
  const h = f && c ? df(f, n) : null;
  let g = -1, p = null;
  i && (p = new ResizeObserver((T) => {
    let [_] = T;
    _ && _.target === f && p && (p.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var E;
      (E = p) == null || E.observe(t);
    })), n();
  }), f && !u && p.observe(f), p.observe(t));
  let b, v = u ? ze(e) : null;
  u && w();
  function w() {
    const T = ze(e);
    v && !ji(v, T) && n(), v = T, b = requestAnimationFrame(w);
  }
  return n(), () => {
    var T;
    d.forEach((_) => {
      a && _.removeEventListener("scroll", n), s && _.removeEventListener("resize", n);
    }), h == null || h(), (T = p) == null || T.disconnect(), p = null, u && cancelAnimationFrame(b);
  };
}
const pf = Xu, hf = Ku, gf = Vu, qa = Hu, vf = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = {
    platform: ff,
    ...n
  }, s = {
    ...a.platform,
    _c: r
  };
  return Uu(e, t, {
    ...a,
    platform: s
  });
};
var Ct = typeof document < "u" ? Za : Ne;
function $t(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, a;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!$t(e[r], t[r]))
          return !1;
      return !0;
    }
    if (a = Object.keys(e), n = a.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, a[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = a[r];
      if (!(s === "_owner" && e.$$typeof) && !$t(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ri(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function $a(e, t) {
  const n = Ri(e);
  return Math.round(t * n) / n;
}
function hn(e) {
  const t = F.useRef(e);
  return Ct(() => {
    t.current = e;
  }), t;
}
function bf(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: a,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: c = !0,
    whileElementsMounted: u,
    open: f
  } = e, [d, h] = F.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, p] = F.useState(r);
  $t(g, r) || p(r);
  const [b, v] = F.useState(null), [w, T] = F.useState(null), _ = F.useCallback((L) => {
    L !== G.current && (G.current = L, v(L));
  }, []), E = F.useCallback((L) => {
    L !== P.current && (P.current = L, T(L));
  }, []), k = s || b, j = i || w, G = F.useRef(null), P = F.useRef(null), A = F.useRef(d), C = u != null, N = hn(u), Y = hn(a), W = hn(f), x = F.useCallback(() => {
    if (!G.current || !P.current)
      return;
    const L = {
      placement: t,
      strategy: n,
      middleware: g
    };
    Y.current && (L.platform = Y.current), vf(G.current, P.current, L).then((M) => {
      const m = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: W.current !== !1
      };
      y.current && !$t(A.current, m) && (A.current = m, Qa.flushSync(() => {
        h(m);
      }));
    });
  }, [g, t, n, Y, W]);
  Ct(() => {
    f === !1 && A.current.isPositioned && (A.current.isPositioned = !1, h((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [f]);
  const y = F.useRef(!1);
  Ct(() => (y.current = !0, () => {
    y.current = !1;
  }), []), Ct(() => {
    if (k && (G.current = k), j && (P.current = j), k && j) {
      if (N.current)
        return N.current(k, j, x);
      x();
    }
  }, [k, j, x, N, C]);
  const O = F.useMemo(() => ({
    reference: G,
    floating: P,
    setReference: _,
    setFloating: E
  }), [_, E]), z = F.useMemo(() => ({
    reference: k,
    floating: j
  }), [k, j]), D = F.useMemo(() => {
    const L = {
      position: n,
      left: 0,
      top: 0
    };
    if (!z.floating)
      return L;
    const M = $a(z.floating, d.x), m = $a(z.floating, d.y);
    return c ? {
      ...L,
      transform: "translate(" + M + "px, " + m + "px)",
      ...Ri(z.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: m
    };
  }, [n, c, z.floating, d.x, d.y]);
  return F.useMemo(() => ({
    ...d,
    update: x,
    refs: O,
    elements: z,
    floatingStyles: D
  }), [d, x, O, z, D]);
}
const yf = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: a
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? qa({
        element: r.current,
        padding: a
      }).fn(n) : {} : r ? qa({
        element: r,
        padding: a
      }).fn(n) : {};
    }
  };
}, xf = (e, t) => ({
  ...pf(e),
  options: [e, t]
}), wf = (e, t) => ({
  ...hf(e),
  options: [e, t]
}), Nf = (e, t) => ({
  ...gf(e),
  options: [e, t]
}), jf = (e, t) => ({
  ...yf(e),
  options: [e, t]
}), Rf = "data-floating-ui-focusable", Ba = "active", Wa = "selected", _f = {
  ...F
};
let Ya = !1, Ef = 0;
const Ua = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Ef++
);
function Tf() {
  const [e, t] = F.useState(() => Ya ? Ua() : void 0);
  return ve(() => {
    e == null && t(Ua());
  }, []), F.useEffect(() => {
    Ya = !0;
  }, []), e;
}
const Cf = _f.useId, Pr = Cf || Tf;
let Vn;
process.env.NODE_ENV !== "production" && (Vn = /* @__PURE__ */ new Set());
function kf() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const a = "Floating UI: " + n.join(" ");
  if (!((e = Vn) != null && e.has(a))) {
    var s;
    (s = Vn) == null || s.add(a), console.error(a);
  }
}
function Of() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((a) => a(n));
    },
    on(t, n) {
      e.has(t) || e.set(t, /* @__PURE__ */ new Set()), e.get(t).add(n);
    },
    off(t, n) {
      var r;
      (r = e.get(t)) == null || r.delete(n);
    }
  };
}
const Sf = /* @__PURE__ */ F.createContext(null), Pf = /* @__PURE__ */ F.createContext(null), Ar = () => {
  var e;
  return ((e = F.useContext(Sf)) == null ? void 0 : e.id) || null;
}, _i = () => F.useContext(Pf);
function Jt(e) {
  return "data-floating-ui-" + e;
}
function ue(e) {
  e.current !== -1 && (clearTimeout(e.current), e.current = -1);
}
const Ha = /* @__PURE__ */ Jt("safe-polygon");
function gn(e, t, n) {
  if (n && !it(n))
    return 0;
  if (typeof e == "number")
    return e;
  if (typeof e == "function") {
    const r = e();
    return typeof r == "number" ? r : r == null ? void 0 : r[t];
  }
  return e == null ? void 0 : e[t];
}
function vn(e) {
  return typeof e == "function" ? e() : e;
}
function Af(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: a,
    events: s,
    elements: i
  } = e, {
    enabled: c = !0,
    delay: u = 0,
    handleClose: f = null,
    mouseOnly: d = !1,
    restMs: h = 0,
    move: g = !0
  } = t, p = _i(), b = Ar(), v = jt(f), w = jt(u), T = jt(n), _ = jt(h), E = F.useRef(), k = F.useRef(-1), j = F.useRef(), G = F.useRef(-1), P = F.useRef(!0), A = F.useRef(!1), C = F.useRef(() => {
  }), N = F.useRef(!1), Y = F.useCallback(() => {
    var D;
    const L = (D = a.current.openEvent) == null ? void 0 : D.type;
    return (L == null ? void 0 : L.includes("mouse")) && L !== "mousedown";
  }, [a]);
  F.useEffect(() => {
    if (!c) return;
    function D(L) {
      let {
        open: M
      } = L;
      M || (ue(k), ue(G), P.current = !0, N.current = !1);
    }
    return s.on("openchange", D), () => {
      s.off("openchange", D);
    };
  }, [c, s]), F.useEffect(() => {
    if (!c || !v.current || !n) return;
    function D(M) {
      Y() && r(!1, M, "hover");
    }
    const L = Ee(i.floating).documentElement;
    return L.addEventListener("mouseleave", D), () => {
      L.removeEventListener("mouseleave", D);
    };
  }, [i.floating, n, r, c, v, Y]);
  const W = F.useCallback(function(D, L, M) {
    L === void 0 && (L = !0), M === void 0 && (M = "hover");
    const m = gn(w.current, "close", E.current);
    m && !j.current ? (ue(k), k.current = window.setTimeout(() => r(!1, D, M), m)) : L && (ue(k), r(!1, D, M));
  }, [w, r]), x = Tt(() => {
    C.current(), j.current = void 0;
  }), y = Tt(() => {
    if (A.current) {
      const D = Ee(i.floating).body;
      D.style.pointerEvents = "", D.removeAttribute(Ha), A.current = !1;
    }
  }), O = Tt(() => a.current.openEvent ? ["click", "mousedown"].includes(a.current.openEvent.type) : !1);
  F.useEffect(() => {
    if (!c) return;
    function D(S) {
      if (ue(k), P.current = !1, d && !it(E.current) || vn(_.current) > 0 && !gn(w.current, "open"))
        return;
      const q = gn(w.current, "open", E.current);
      q ? k.current = window.setTimeout(() => {
        T.current || r(!0, S, "hover");
      }, q) : n || r(!0, S, "hover");
    }
    function L(S) {
      if (O()) {
        y();
        return;
      }
      C.current();
      const q = Ee(i.floating);
      if (ue(G), N.current = !1, v.current && a.current.floatingContext) {
        n || ue(k), j.current = v.current({
          ...a.current.floatingContext,
          tree: p,
          x: S.clientX,
          y: S.clientY,
          onClose() {
            y(), x(), O() || W(S, !0, "safe-polygon");
          }
        });
        const H = j.current;
        q.addEventListener("mousemove", H), C.current = () => {
          q.removeEventListener("mousemove", H);
        };
        return;
      }
      (E.current === "touch" ? !qt(i.floating, S.relatedTarget) : !0) && W(S);
    }
    function M(S) {
      O() || a.current.floatingContext && (v.current == null || v.current({
        ...a.current.floatingContext,
        tree: p,
        x: S.clientX,
        y: S.clientY,
        onClose() {
          y(), x(), O() || W(S);
        }
      })(S));
    }
    function m() {
      ue(k);
    }
    function R(S) {
      O() || W(S, !1);
    }
    if (se(i.domReference)) {
      const S = i.domReference, q = i.floating;
      return n && S.addEventListener("mouseleave", M), g && S.addEventListener("mousemove", D, {
        once: !0
      }), S.addEventListener("mouseenter", D), S.addEventListener("mouseleave", L), q && (q.addEventListener("mouseleave", M), q.addEventListener("mouseenter", m), q.addEventListener("mouseleave", R)), () => {
        n && S.removeEventListener("mouseleave", M), g && S.removeEventListener("mousemove", D), S.removeEventListener("mouseenter", D), S.removeEventListener("mouseleave", L), q && (q.removeEventListener("mouseleave", M), q.removeEventListener("mouseenter", m), q.removeEventListener("mouseleave", R));
      };
    }
  }, [i, c, e, d, g, W, x, y, r, n, T, p, w, v, a, O, _]), ve(() => {
    var D;
    if (c && n && (D = v.current) != null && D.__options.blockPointerEvents && Y()) {
      A.current = !0;
      const M = i.floating;
      if (se(i.domReference) && M) {
        var L;
        const m = Ee(i.floating).body;
        m.setAttribute(Ha, "");
        const R = i.domReference, S = p == null || (L = p.nodesRef.current.find((q) => q.id === b)) == null || (L = L.context) == null ? void 0 : L.elements.floating;
        return S && (S.style.pointerEvents = ""), m.style.pointerEvents = "none", R.style.pointerEvents = "auto", M.style.pointerEvents = "auto", () => {
          m.style.pointerEvents = "", R.style.pointerEvents = "", M.style.pointerEvents = "";
        };
      }
    }
  }, [c, n, b, i, p, v, Y]), ve(() => {
    n || (E.current = void 0, N.current = !1, x(), y());
  }, [n, x, y]), F.useEffect(() => () => {
    x(), ue(k), ue(G), y();
  }, [c, i.domReference, x, y]);
  const z = F.useMemo(() => {
    function D(L) {
      E.current = L.pointerType;
    }
    return {
      onPointerDown: D,
      onPointerEnter: D,
      onMouseMove(L) {
        const {
          nativeEvent: M
        } = L;
        function m() {
          !P.current && !T.current && r(!0, M, "hover");
        }
        d && !it(E.current) || n || vn(_.current) === 0 || N.current && L.movementX ** 2 + L.movementY ** 2 < 2 || (ue(G), E.current === "touch" ? m() : (N.current = !0, G.current = window.setTimeout(m, vn(_.current))));
      }
    };
  }, [d, r, n, T, _]);
  return F.useMemo(() => c ? {
    reference: z
  } : {}, [c, z]);
}
function bn(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Dt(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function If(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const Ei = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
}, Va = /* @__PURE__ */ F.forwardRef(function(t, n) {
  const [r, a] = F.useState();
  ve(() => {
    mi() && a("button");
  }, []);
  const s = {
    ref: n,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: r,
    "aria-hidden": r ? void 0 : !0,
    [Jt("focus-guard")]: "",
    style: Ei
  };
  return /* @__PURE__ */ o.jsx("span", {
    ...t,
    ...s
  });
}), Ti = /* @__PURE__ */ F.createContext(null), Ga = /* @__PURE__ */ Jt("portal");
function Ff(e) {
  e === void 0 && (e = {});
  const {
    id: t,
    root: n
  } = e, r = Pr(), a = Lf(), [s, i] = F.useState(null), c = F.useRef(null);
  return ve(() => () => {
    s == null || s.remove(), queueMicrotask(() => {
      c.current = null;
    });
  }, [s]), ve(() => {
    if (!r || c.current) return;
    const u = t ? document.getElementById(t) : null;
    if (!u) return;
    const f = document.createElement("div");
    f.id = r, f.setAttribute(Ga, ""), u.appendChild(f), c.current = f, i(f);
  }, [t, r]), ve(() => {
    if (n === null || !r || c.current) return;
    let u = n || (a == null ? void 0 : a.portalNode);
    u && !se(u) && (u = u.current), u = u || document.body;
    let f = null;
    t && (f = document.createElement("div"), f.id = t, u.appendChild(f));
    const d = document.createElement("div");
    d.id = r, d.setAttribute(Ga, ""), u = f || u, u.appendChild(d), c.current = d, i(d);
  }, [t, n, r, a]), s;
}
function Df(e) {
  const {
    children: t,
    id: n,
    root: r,
    preserveTabOrder: a = !0
  } = e, s = Ff({
    id: n,
    root: r
  }), [i, c] = F.useState(null), u = F.useRef(null), f = F.useRef(null), d = F.useRef(null), h = F.useRef(null), g = i == null ? void 0 : i.modal, p = i == null ? void 0 : i.open, b = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!i && // Guards are only for non-modal focus management.
    !i.modal && // Don't render if unmount is transitioning.
    i.open && a && !!(r || s)
  );
  return F.useEffect(() => {
    if (!s || !a || g)
      return;
    function v(w) {
      s && mn(w) && (w.type === "focusin" ? Da : Yu)(s);
    }
    return s.addEventListener("focusin", v, !0), s.addEventListener("focusout", v, !0), () => {
      s.removeEventListener("focusin", v, !0), s.removeEventListener("focusout", v, !0);
    };
  }, [s, a, g]), F.useEffect(() => {
    s && (p || Da(s));
  }, [p, s]), /* @__PURE__ */ o.jsxs(Ti.Provider, {
    value: F.useMemo(() => ({
      preserveTabOrder: a,
      beforeOutsideRef: u,
      afterOutsideRef: f,
      beforeInsideRef: d,
      afterInsideRef: h,
      portalNode: s,
      setFocusManagerState: c
    }), [a, s]),
    children: [b && s && /* @__PURE__ */ o.jsx(Va, {
      "data-type": "outside",
      ref: u,
      onFocus: (v) => {
        if (mn(v, s)) {
          var w;
          (w = d.current) == null || w.focus();
        } else {
          const T = i ? i.domReference : null, _ = Wu(T);
          _ == null || _.focus();
        }
      }
    }), b && s && /* @__PURE__ */ o.jsx("span", {
      "aria-owns": s.id,
      style: Ei
    }), s && /* @__PURE__ */ Qa.createPortal(t, s), b && s && /* @__PURE__ */ o.jsx(Va, {
      "data-type": "outside",
      ref: f,
      onFocus: (v) => {
        if (mn(v, s)) {
          var w;
          (w = h.current) == null || w.focus();
        } else {
          const T = i ? i.domReference : null, _ = Bu(T);
          _ == null || _.focus(), i != null && i.closeOnFocusOut && (i == null || i.onOpenChange(!1, v.nativeEvent, "focus-out"));
        }
      }
    })]
  });
}
const Lf = () => F.useContext(Ti);
function Xa(e) {
  return le(e.target) && e.target.tagName === "BUTTON";
}
function Mf(e) {
  return le(e.target) && e.target.tagName === "A";
}
function Ka(e) {
  return pi(e);
}
function zf(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: a,
    elements: {
      domReference: s
    }
  } = e, {
    enabled: i = !0,
    event: c = "click",
    toggle: u = !0,
    ignoreMouse: f = !1,
    keyboardHandlers: d = !0,
    stickIfOpen: h = !0
  } = t, g = F.useRef(), p = F.useRef(!1), b = F.useMemo(() => ({
    onPointerDown(v) {
      g.current = v.pointerType;
    },
    onMouseDown(v) {
      const w = g.current;
      v.button === 0 && c !== "click" && (it(w, !0) && f || (n && u && (!(a.current.openEvent && h) || a.current.openEvent.type === "mousedown") ? r(!1, v.nativeEvent, "click") : (v.preventDefault(), r(!0, v.nativeEvent, "click"))));
    },
    onClick(v) {
      const w = g.current;
      if (c === "mousedown" && g.current) {
        g.current = void 0;
        return;
      }
      it(w, !0) && f || (n && u && (!(a.current.openEvent && h) || a.current.openEvent.type === "click") ? r(!1, v.nativeEvent, "click") : r(!0, v.nativeEvent, "click"));
    },
    onKeyDown(v) {
      g.current = void 0, !(v.defaultPrevented || !d || Xa(v)) && (v.key === " " && !Ka(s) && (v.preventDefault(), p.current = !0), !Mf(v) && v.key === "Enter" && r(!(n && u), v.nativeEvent, "click"));
    },
    onKeyUp(v) {
      v.defaultPrevented || !d || Xa(v) || Ka(s) || v.key === " " && p.current && (p.current = !1, r(!(n && u), v.nativeEvent, "click"));
    }
  }), [a, s, c, f, d, r, n, h, u]);
  return F.useMemo(() => i ? {
    reference: b
  } : {}, [i, b]);
}
function qf(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, a = Pr(), s = F.useRef({}), [i] = F.useState(() => Of()), c = Ar() != null;
  if (process.env.NODE_ENV !== "production") {
    const p = r.reference;
    p && !se(p) && kf("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [u, f] = F.useState(r.reference), d = Tt((p, b, v) => {
    s.current.openEvent = p ? b : void 0, i.emit("openchange", {
      open: p,
      event: b,
      reason: v,
      nested: c
    }), n == null || n(p, b, v);
  }), h = F.useMemo(() => ({
    setPositionReference: f
  }), []), g = F.useMemo(() => ({
    reference: u || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [u, r.reference, r.floating]);
  return F.useMemo(() => ({
    dataRef: s,
    open: t,
    onOpenChange: d,
    elements: g,
    events: i,
    floatingId: a,
    refs: h
  }), [t, d, g, i, a, h]);
}
function $f(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = qf({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, a = r.elements, [s, i] = F.useState(null), [c, u] = F.useState(null), d = (a == null ? void 0 : a.domReference) || s, h = F.useRef(null), g = _i();
  ve(() => {
    d && (h.current = d);
  }, [d]);
  const p = bf({
    ...e,
    elements: {
      ...a,
      ...c && {
        reference: c
      }
    }
  }), b = F.useCallback((E) => {
    const k = se(E) ? {
      getBoundingClientRect: () => E.getBoundingClientRect(),
      getClientRects: () => E.getClientRects(),
      contextElement: E
    } : E;
    u(k), p.refs.setReference(k);
  }, [p.refs]), v = F.useCallback((E) => {
    (se(E) || E === null) && (h.current = E, i(E)), (se(p.refs.reference.current) || p.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    E !== null && !se(E)) && p.refs.setReference(E);
  }, [p.refs]), w = F.useMemo(() => ({
    ...p.refs,
    setReference: v,
    setPositionReference: b,
    domReference: h
  }), [p.refs, v, b]), T = F.useMemo(() => ({
    ...p.elements,
    domReference: d
  }), [p.elements, d]), _ = F.useMemo(() => ({
    ...p,
    ...r,
    refs: w,
    elements: T,
    nodeId: t
  }), [p, w, T, t, r]);
  return ve(() => {
    r.dataRef.current.floatingContext = _;
    const E = g == null ? void 0 : g.nodesRef.current.find((k) => k.id === t);
    E && (E.context = _);
  }), F.useMemo(() => ({
    ...p,
    context: _,
    refs: w,
    elements: T
  }), [p, w, T, _]);
}
function yn() {
  return Au() && mi();
}
function Bf(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    events: a,
    dataRef: s,
    elements: i
  } = e, {
    enabled: c = !0,
    visibleOnly: u = !0
  } = t, f = F.useRef(!1), d = F.useRef(-1), h = F.useRef(!0);
  F.useEffect(() => {
    if (!c) return;
    const p = oe(i.domReference);
    function b() {
      !n && le(i.domReference) && i.domReference === Hn(Ee(i.domReference)) && (f.current = !0);
    }
    function v() {
      h.current = !0;
    }
    function w() {
      h.current = !1;
    }
    return p.addEventListener("blur", b), yn() && (p.addEventListener("keydown", v, !0), p.addEventListener("pointerdown", w, !0)), () => {
      p.removeEventListener("blur", b), yn() && (p.removeEventListener("keydown", v, !0), p.removeEventListener("pointerdown", w, !0));
    };
  }, [i.domReference, n, c]), F.useEffect(() => {
    if (!c) return;
    function p(b) {
      let {
        reason: v
      } = b;
      (v === "reference-press" || v === "escape-key") && (f.current = !0);
    }
    return a.on("openchange", p), () => {
      a.off("openchange", p);
    };
  }, [a, c]), F.useEffect(() => () => {
    ue(d);
  }, []);
  const g = F.useMemo(() => ({
    onMouseLeave() {
      f.current = !1;
    },
    onFocus(p) {
      if (f.current) return;
      const b = Du(p.nativeEvent);
      if (u && se(b)) {
        if (yn() && !p.relatedTarget) {
          if (!h.current && !pi(b))
            return;
        } else if (!Lu(b))
          return;
      }
      r(!0, p.nativeEvent, "focus");
    },
    onBlur(p) {
      f.current = !1;
      const b = p.relatedTarget, v = p.nativeEvent, w = se(b) && b.hasAttribute(Jt("focus-guard")) && b.getAttribute("data-type") === "outside";
      d.current = window.setTimeout(() => {
        var T;
        const _ = Hn(i.domReference ? i.domReference.ownerDocument : document);
        !b && _ === i.domReference || qt((T = s.current.floatingContext) == null ? void 0 : T.refs.floating.current, _) || qt(i.domReference, _) || w || r(!1, v, "focus");
      });
    }
  }), [s, i.domReference, r, u]);
  return F.useMemo(() => c ? {
    reference: g
  } : {}, [c, g]);
}
function xn(e, t, n) {
  const r = /* @__PURE__ */ new Map(), a = n === "item";
  let s = e;
  if (a && e) {
    const {
      [Ba]: i,
      [Wa]: c,
      ...u
    } = e;
    s = u;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [Rf]: ""
    },
    ...s,
    ...t.map((i) => {
      const c = i ? i[n] : null;
      return typeof c == "function" ? e ? c(e) : null : c;
    }).concat(e).reduce((i, c) => (c && Object.entries(c).forEach((u) => {
      let [f, d] = u;
      if (!(a && [Ba, Wa].includes(f)))
        if (f.indexOf("on") === 0) {
          if (r.has(f) || r.set(f, []), typeof d == "function") {
            var h;
            (h = r.get(f)) == null || h.push(d), i[f] = function() {
              for (var g, p = arguments.length, b = new Array(p), v = 0; v < p; v++)
                b[v] = arguments[v];
              return (g = r.get(f)) == null ? void 0 : g.map((w) => w(...b)).find((w) => w !== void 0);
            };
          }
        } else
          i[f] = d;
    }), i), {})
  };
}
function Wf(e) {
  e === void 0 && (e = []);
  const t = e.map((c) => c == null ? void 0 : c.reference), n = e.map((c) => c == null ? void 0 : c.floating), r = e.map((c) => c == null ? void 0 : c.item), a = F.useCallback(
    (c) => xn(c, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), s = F.useCallback(
    (c) => xn(c, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), i = F.useCallback(
    (c) => xn(c, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return F.useMemo(() => ({
    getReferenceProps: a,
    getFloatingProps: s,
    getItemProps: i
  }), [a, s, i]);
}
const Yf = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function Uf(e, t) {
  var n, r;
  t === void 0 && (t = {});
  const {
    open: a,
    elements: s,
    floatingId: i
  } = e, {
    enabled: c = !0,
    role: u = "dialog"
  } = t, f = Pr(), d = ((n = s.domReference) == null ? void 0 : n.id) || f, h = F.useMemo(() => {
    var _;
    return ((_ = Mu(s.floating)) == null ? void 0 : _.id) || i;
  }, [s.floating, i]), g = (r = Yf.get(u)) != null ? r : u, b = Ar() != null, v = F.useMemo(() => g === "tooltip" || u === "label" ? {
    ["aria-" + (u === "label" ? "labelledby" : "describedby")]: a ? h : void 0
  } : {
    "aria-expanded": a ? "true" : "false",
    "aria-haspopup": g === "alertdialog" ? "dialog" : g,
    "aria-controls": a ? h : void 0,
    ...g === "listbox" && {
      role: "combobox"
    },
    ...g === "menu" && {
      id: d
    },
    ...g === "menu" && b && {
      role: "menuitem"
    },
    ...u === "select" && {
      "aria-autocomplete": "none"
    },
    ...u === "combobox" && {
      "aria-autocomplete": "list"
    }
  }, [g, h, b, a, d, u]), w = F.useMemo(() => {
    const _ = {
      id: h,
      ...g && {
        role: g
      }
    };
    return g === "tooltip" || u === "label" ? _ : {
      ..._,
      ...g === "menu" && {
        "aria-labelledby": d
      }
    };
  }, [g, h, d, u]), T = F.useCallback((_) => {
    let {
      active: E,
      selected: k
    } = _;
    const j = {
      role: "option",
      ...E && {
        id: h + "-fui-option"
      }
    };
    switch (u) {
      case "select":
        return {
          ...j,
          "aria-selected": E && k
        };
      case "combobox":
        return {
          ...j,
          "aria-selected": k
        };
    }
    return {};
  }, [h, u]);
  return F.useMemo(() => c ? {
    reference: v,
    floating: w,
    item: T
  } : {}, [c, v, w, T]);
}
function Hf(e, t, n) {
  n === void 0 && (n = !0);
  let r = e.filter((s) => {
    var i;
    return s.parentId === t && ((i = s.context) == null ? void 0 : i.open);
  }), a = r;
  for (; a.length; )
    a = n ? e.filter((s) => {
      var i;
      return (i = a) == null ? void 0 : i.some((c) => {
        var u;
        return s.parentId === c.id && ((u = s.context) == null ? void 0 : u.open);
      });
    }) : e, r = r.concat(a);
  return r;
}
function Ja(e, t) {
  const [n, r] = e;
  let a = !1;
  const s = t.length;
  for (let i = 0, c = s - 1; i < s; c = i++) {
    const [u, f] = t[i] || [0, 0], [d, h] = t[c] || [0, 0];
    f >= r != h >= r && n <= (d - u) * (r - f) / (h - f) + u && (a = !a);
  }
  return a;
}
function Vf(e, t) {
  return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height;
}
function Gf(e) {
  e === void 0 && (e = {});
  const {
    buffer: t = 0.5,
    blockPointerEvents: n = !1,
    requireIntent: r = !0
  } = e;
  let a, s = !1, i = null, c = null, u = performance.now();
  function f(h, g) {
    const p = performance.now(), b = p - u;
    if (i === null || c === null || b === 0)
      return i = h, c = g, u = p, null;
    const v = h - i, w = g - c, _ = Math.sqrt(v * v + w * w) / b;
    return i = h, c = g, u = p, _;
  }
  const d = (h) => {
    let {
      x: g,
      y: p,
      placement: b,
      elements: v,
      onClose: w,
      nodeId: T,
      tree: _
    } = h;
    return function(k) {
      function j() {
        clearTimeout(a), w();
      }
      if (clearTimeout(a), !v.domReference || !v.floating || b == null || g == null || p == null)
        return;
      const {
        clientX: G,
        clientY: P
      } = k, A = [G, P], C = If(k), N = k.type === "mouseleave", Y = bn(v.floating, C), W = bn(v.domReference, C), x = v.domReference.getBoundingClientRect(), y = v.floating.getBoundingClientRect(), O = b.split("-")[0], z = g > y.right - y.width / 2, D = p > y.bottom - y.height / 2, L = Vf(A, x), M = y.width > x.width, m = y.height > x.height, R = (M ? x : y).left, S = (M ? x : y).right, q = (m ? x : y).top, U = (m ? x : y).bottom;
      if (Y && (s = !0, !N))
        return;
      if (W && (s = !1), W && !N) {
        s = !0;
        return;
      }
      if (N && se(k.relatedTarget) && bn(v.floating, k.relatedTarget) || _ && Hf(_.nodesRef.current, T).some((K) => {
        let {
          context: B
        } = K;
        return B == null ? void 0 : B.open;
      }))
        return;
      if (O === "top" && p >= x.bottom - 1 || O === "bottom" && p <= x.top + 1 || O === "left" && g >= x.right - 1 || O === "right" && g <= x.left + 1)
        return j();
      let H = [];
      switch (O) {
        case "top":
          H = [[R, x.top + 1], [R, y.bottom - 1], [S, y.bottom - 1], [S, x.top + 1]];
          break;
        case "bottom":
          H = [[R, y.top + 1], [R, x.bottom - 1], [S, x.bottom - 1], [S, y.top + 1]];
          break;
        case "left":
          H = [[y.right - 1, U], [y.right - 1, q], [x.left + 1, q], [x.left + 1, U]];
          break;
        case "right":
          H = [[x.right - 1, U], [x.right - 1, q], [y.left + 1, q], [y.left + 1, U]];
          break;
      }
      function J(K) {
        let [B, X] = K;
        switch (O) {
          case "top": {
            const Z = [M ? B + t / 2 : z ? B + t * 4 : B - t * 4, X + t + 1], re = [M ? B - t / 2 : z ? B + t * 4 : B - t * 4, X + t + 1], $ = [[y.left, z || M ? y.bottom - t : y.top], [y.right, z ? M ? y.bottom - t : y.top : y.bottom - t]];
            return [Z, re, ...$];
          }
          case "bottom": {
            const Z = [M ? B + t / 2 : z ? B + t * 4 : B - t * 4, X - t], re = [M ? B - t / 2 : z ? B + t * 4 : B - t * 4, X - t], $ = [[y.left, z || M ? y.top + t : y.bottom], [y.right, z ? M ? y.top + t : y.bottom : y.top + t]];
            return [Z, re, ...$];
          }
          case "left": {
            const Z = [B + t + 1, m ? X + t / 2 : D ? X + t * 4 : X - t * 4], re = [B + t + 1, m ? X - t / 2 : D ? X + t * 4 : X - t * 4];
            return [...[[D || m ? y.right - t : y.left, y.top], [D ? m ? y.right - t : y.left : y.right - t, y.bottom]], Z, re];
          }
          case "right": {
            const Z = [B - t, m ? X + t / 2 : D ? X + t * 4 : X - t * 4], re = [B - t, m ? X - t / 2 : D ? X + t * 4 : X - t * 4], $ = [[D || m ? y.left + t : y.right, y.top], [D ? m ? y.left + t : y.right : y.left + t, y.bottom]];
            return [Z, re, ...$];
          }
        }
      }
      if (!Ja([G, P], H)) {
        if (s && !L)
          return j();
        if (!N && r) {
          const K = f(k.clientX, k.clientY);
          if (K !== null && K < 0.1)
            return j();
        }
        Ja([G, P], J([g, p])) ? !s && r && (a = window.setTimeout(j, 40)) : j();
      }
    };
  };
  return d.__options = {
    blockPointerEvents: n
  }, d;
}
const Xf = ({
  children: e,
  content: t,
  position: n = "top",
  theme: r = "dark",
  showArrow: a = !0,
  className: s = "",
  isPopup: i = !1,
  triggerOnClick: c = !1
}) => {
  var y, O;
  const [u, f] = be(!1), d = nt(null), { x: h, y: g, strategy: p, refs: b, context: v, middlewareData: w, placement: T } = $f({
    open: u,
    onOpenChange: f,
    placement: n,
    middleware: [
      xf(8),
      Nf(),
      wf({ padding: 8 }),
      ...a ? [jf({ element: d })] : []
    ],
    whileElementsMounted: mf
  }), _ = Af(v, {
    move: !1,
    handleClose: Gf(),
    enabled: !c
  }), E = zf(v, {
    enabled: c
  }), k = Bf(v), j = Uf(v, { role: "tooltip" }), { getReferenceProps: G, getFloatingProps: P } = Wf([
    _,
    k,
    j,
    ...c ? [E] : []
  ]), A = (y = w.arrow) == null ? void 0 : y.x, C = (O = w.arrow) == null ? void 0 : O.y, N = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[T.split("-")[0]], Y = () => {
    switch (T.split("-")[0]) {
      case "top":
        return "225deg";
      // Arrow points down (away from trigger at top)
      case "bottom":
        return "45deg";
      // Arrow points up (away from trigger at bottom)
      case "left":
        return "315deg";
      // Arrow points right (away from trigger at left)
      case "right":
        return "135deg";
      // Arrow points left (away from trigger at right)
      default:
        return "45deg";
    }
  }, [W, x] = be(!1);
  return Ne(() => (x(!0), () => x(!1)), []), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    ae.cloneElement(
      e,
      {
        ref: b.setReference,
        ...G()
      }
    ),
    W && u && /* @__PURE__ */ o.jsx(Df, { children: /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: b.setFloating,
        className: `tooltip__body tooltip__body--${r} ${i ? "tooltip__body--popup" : ""} ${s}`,
        style: {
          position: p,
          top: g ?? 0,
          left: h ?? 0,
          zIndex: 1e3,
          pointerEvents: i ? "auto" : "none"
        },
        ...P(),
        children: [
          t,
          a && /* @__PURE__ */ o.jsx(
            "div",
            {
              ref: d,
              className: "tooltip__arrow",
              style: {
                position: "absolute",
                left: A != null ? `${A}px` : "",
                top: C != null ? `${C}px` : "",
                [N]: "-5px",
                width: "10px",
                height: "10px",
                backgroundColor: r === "light" ? "#f0f0f0" : "#181818",
                transform: `rotate(${Y()})`
              }
            }
          )
        ]
      }
    ) })
  ] });
};
Xf.propTypes = {
  children: l.node.isRequired,
  content: l.node.isRequired,
  position: l.oneOf(["top", "right", "bottom", "left"]),
  theme: l.oneOf(["dark", "light"]),
  showArrow: l.bool,
  className: l.string,
  isPopup: l.bool,
  triggerOnClick: l.bool
};
const Ci = ({
  type: e = "info",
  heading: t,
  children: n,
  slim: r = !1,
  noIcon: a = !1,
  className: s = ""
}) => {
  const i = [
    "alert",
    `alert--${e}`,
    r && "alert--slim",
    a && "alert--no-icon",
    s
  ].filter(Boolean).join(" "), c = () => {
    switch (e) {
      case "info":
        return _a;
      case "warning":
        return jc;
      case "success":
        return fc;
      case "error":
        return Ra;
      case "emergency":
        return Ra;
      default:
        return _a;
    }
  };
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      className: i,
      role: e === "error" || e === "emergency" ? "alert" : void 0,
      children: /* @__PURE__ */ o.jsxs("div", { className: "alert__body", children: [
        !a && /* @__PURE__ */ o.jsx("div", { className: "alert__icon", children: /* @__PURE__ */ o.jsx(te, { icon: c() }) }),
        /* @__PURE__ */ o.jsxs("div", { className: "alert__content", children: [
          t && /* @__PURE__ */ o.jsx("h4", { className: "alert__heading", children: t }),
          /* @__PURE__ */ o.jsx("div", { className: "alert__text", children: n })
        ] })
      ] })
    }
  );
};
Ci.propTypes = {
  /**
   * Type of alert to display
   */
  type: l.oneOf(["info", "warning", "success", "error", "emergency"]),
  /**
   * Optional heading text for the alert
   */
  heading: l.string,
  /**
   * Content to display in the alert
   */
  children: l.node.isRequired,
  /**
   * Whether to display a slim version of the alert
   */
  slim: l.bool,
  /**
   * Whether to display the alert without an icon
   */
  noIcon: l.bool,
  /**
   * Additional CSS class names
   */
  className: l.string
};
Ci.defaultProps = {
  type: "info",
  heading: void 0,
  slim: !1,
  noIcon: !1,
  className: ""
};
const Kf = ({
  name: e,
  title: t,
  description: n,
  options: r,
  selectedValues: a = [],
  onChange: s,
  tiled: i = !1,
  required: c = !1,
  errorMessage: u,
  className: f
}) => {
  const d = c && u, h = [
    "usa-fieldset",
    "checkbox-group",
    i ? "checkbox-group--tiled" : "",
    d ? "checkbox-group--error" : "",
    f
  ].filter(Boolean).join(" "), g = (p, b) => {
    let v;
    b ? v = [...a, p] : v = a.filter((w) => w !== p), s(v);
  };
  return /* @__PURE__ */ o.jsxs("fieldset", { className: h, children: [
    /* @__PURE__ */ o.jsxs("legend", { className: "usa-legend", children: [
      t,
      c && /* @__PURE__ */ o.jsx("span", { className: "checkbox-required-asterisk", children: " *" })
    ] }),
    n && /* @__PURE__ */ o.jsx("p", { className: "checkbox-description", children: n }),
    d && /* @__PURE__ */ o.jsx("p", { className: "checkbox-error-message", children: u }),
    /* @__PURE__ */ o.jsx("div", { className: "checkbox-options-wrapper", children: r.map((p) => {
      const { value: b, labelText: v, labelDescription: w, disabled: T } = p, _ = a.includes(b), E = `${e}-${b}`, k = [
        "usa-checkbox",
        T ? "usa-checkbox--disabled" : ""
      ].filter(Boolean).join(" "), j = [
        "usa-checkbox__input",
        i ? "usa-checkbox__input--tile" : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ o.jsxs("div", { className: k, children: [
        /* @__PURE__ */ o.jsx(
          "input",
          {
            className: j,
            type: "checkbox",
            id: E,
            name: e,
            value: b,
            checked: _,
            onChange: (G) => g(b, G.target.checked),
            disabled: T
          }
        ),
        /* @__PURE__ */ o.jsxs("label", { className: "usa-checkbox__label", htmlFor: E, children: [
          v,
          w && /* @__PURE__ */ o.jsx("span", { className: "usa-checkbox__label-description", children: w })
        ] })
      ] }, b);
    }) })
  ] });
};
Kf.propTypes = {
  /**
   * The name for the checkbox group.
   */
  name: l.string.isRequired,
  /**
   * The title for the checkbox group.
   */
  title: l.string.isRequired,
  /**
   * Optional description for the checkbox group.
   */
  description: l.string,
  /**
   * Array of checkbox options.
   */
  options: l.arrayOf(
    l.shape({
      value: l.string.isRequired,
      labelText: l.string.isRequired,
      labelDescription: l.string,
      disabled: l.bool
    })
  ).isRequired,
  /**
   * Array of currently selected values.
   */
  selectedValues: l.arrayOf(l.string),
  /**
   * Callback function when checkbox selection changes.
   */
  onChange: l.func.isRequired,
  /**
   * If `true`, the tiled variant is used.
   */
  tiled: l.bool,
  /**
   * If `true`, the checkbox group is required.
   */
  required: l.bool,
  /**
   * The error message to display when required and no option is selected.
   */
  errorMessage: l.string,
  /**
   * Additional classes for the component.
   */
  className: l.string
};
const ld = () => /* @__PURE__ */ o.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: { display: "inline-block", marginLeft: "4px", verticalAlign: "middle" },
    children: [
      /* @__PURE__ */ o.jsx("path", { d: "M11 1H1v10h10V1z" }),
      /* @__PURE__ */ o.jsx("path", { d: "M4 8l4-4M4 4h4v4" })
    ]
  }
), Jf = ({
  id: e,
  label: t,
  description: n,
  state: r = "default",
  size: a = "default",
  disabled: s = !1,
  value: i,
  onChange: c,
  prefixIcon: u,
  suffixContent: f,
  pattern: d,
  errorMessage: h,
  className: g,
  ...p
}) => {
  const b = [
    "usa-input",
    a !== "default" ? `usa-input--${a}` : "",
    r === "error" ? "usa-input--error" : "",
    r === "success" ? "usa-input--success" : "",
    r === "disabled" ? "usa-input--disabled" : "",
    g
  ].filter(Boolean).join(" "), v = [
    "usa-input-wrapper",
    a !== "default" ? `usa-input-wrapper--${a}` : "",
    u ? "usa-input-wrapper--prefix" : "",
    f ? "usa-input-wrapper--suffix" : "",
    r === "error" ? "usa-input-wrapper--error" : "",
    r === "success" ? "usa-input-wrapper--success" : "",
    s ? "usa-input-wrapper--disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs("div", { className: "usa-text-input", children: [
    t && /* @__PURE__ */ o.jsx("label", { className: "usa-label", htmlFor: e, children: t }),
    n && /* @__PURE__ */ o.jsx("span", { className: "usa-text-input__description", children: n }),
    r === "error" && h && /* @__PURE__ */ o.jsx("span", { className: "usa-text-input__error-message", children: h }),
    /* @__PURE__ */ o.jsxs("div", { className: v, children: [
      u && /* @__PURE__ */ o.jsx("div", { className: "usa-input-prefix", children: /* @__PURE__ */ o.jsx(te, { icon: u }) }),
      /* @__PURE__ */ o.jsx(
        "input",
        {
          id: e,
          className: b,
          disabled: s,
          value: i,
          onChange: c,
          pattern: d,
          "aria-invalid": r === "error",
          ...p
        }
      ),
      f && /* @__PURE__ */ o.jsx("div", { className: "usa-input-suffix", children: f })
    ] })
  ] });
};
Jf.propTypes = {
  id: l.string.isRequired,
  label: l.string,
  description: l.string,
  state: l.oneOf(["default", "disabled", "error", "success"]),
  size: l.oneOf(["default", "2xs", "xs", "sm", "md", "lg", "xl", "2xl"]),
  disabled: l.bool,
  value: l.string,
  onChange: l.func,
  prefixIcon: l.oneOfType([l.object, l.array, l.string]),
  suffixContent: l.node,
  pattern: l.string,
  errorMessage: l.string,
  className: l.string
};
const ki = ({
  label: e,
  status: t,
  showLabel: n = !0,
  showCounter: r = !1,
  smallCounter: a = !1,
  centered: s = !1,
  number: i
}) => {
  const c = "usa-step-indicator__segment", u = `${c} ${c}--${t}`;
  return /* @__PURE__ */ o.jsxs("li", { className: u, "aria-current": t === "current" ? "true" : void 0, children: [
    r && /* @__PURE__ */ o.jsx("span", { className: "usa-step-indicator__counter", children: /* @__PURE__ */ o.jsx("span", { className: "usa-step-indicator__counter-inner", children: i }) }),
    n && /* @__PURE__ */ o.jsxs("span", { className: "usa-step-indicator__segment-label", children: [
      e,
      t === "complete" && /* @__PURE__ */ o.jsx("span", { className: "usa-sr-only", children: "completed" }),
      t === "not-complete" && /* @__PURE__ */ o.jsx("span", { className: "usa-sr-only", children: "not completed" })
    ] })
  ] });
};
ki.propTypes = {
  label: l.string.isRequired,
  status: l.oneOf(["complete", "current", "not-complete"]).isRequired,
  showLabel: l.bool,
  showCounter: l.bool,
  smallCounter: l.bool,
  centered: l.bool,
  number: l.number.isRequired
};
const Zf = ({
  steps: e,
  currentStep: t,
  title: n,
  variant: r = "default",
  showLabels: a = !0,
  showCounters: s = !1,
  centered: i = !1,
  smallCounters: c = !1,
  className: u = "",
  ...f
}) => {
  const d = "usa-step-indicator", h = a ? "" : `${d}--no-labels`, g = s ? `${d}--counters` : "", p = c ? `${d}--counters-sm` : "", b = i ? `${d}--center` : "", v = r !== "default" ? `${d}--${r}` : "", w = [
    d,
    h,
    g,
    p,
    b,
    v,
    u
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs("div", { className: w, variant: r, ...f, children: [
    /* @__PURE__ */ o.jsx("ol", { className: "usa-step-indicator__segments", children: e.map((T, _) => /* @__PURE__ */ o.jsx(
      ki,
      {
        label: T.label,
        status: Qf(_, t - 1),
        showLabel: a,
        showCounter: s,
        smallCounter: c,
        centered: i,
        number: _ + 1
      },
      _
    )) }),
    /* @__PURE__ */ o.jsx("div", { className: "usa-step-indicator__header", children: /* @__PURE__ */ o.jsxs("h4", { className: "usa-step-indicator__heading", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "usa-step-indicator__counter-container", children: [
        /* @__PURE__ */ o.jsx("span", { className: "usa-sr-only", children: "Step" }),
        /* @__PURE__ */ o.jsx("span", { className: "usa-step-indicator__current-step", children: t }),
        /* @__PURE__ */ o.jsxs("span", { className: "usa-step-indicator__total-steps", children: [
          "of ",
          e.length
        ] })
      ] }),
      n && /* @__PURE__ */ o.jsxs("div", { className: "usa-step-indicator__title-container", children: [
        /* @__PURE__ */ o.jsx(te, { icon: cc, className: "usa-step-indicator__heading-icon" }),
        /* @__PURE__ */ o.jsx("span", { className: "usa-step-indicator__heading-text", children: n })
      ] })
    ] }) })
  ] });
};
function Qf(e, t) {
  return e < t ? "complete" : e === t ? "current" : "not-complete";
}
Zf.propTypes = {
  steps: l.arrayOf(
    l.shape({
      label: l.string.isRequired
    })
  ).isRequired,
  currentStep: l.number.isRequired,
  title: l.string,
  variant: l.oneOf(["default", "mobile"]),
  showLabels: l.bool,
  showCounters: l.bool,
  centered: l.bool,
  smallCounters: l.bool,
  className: l.string
};
const ed = ({
  children: e,
  bordered: t = !0,
  striped: n = !1,
  scrollable: r = !1,
  stickyHeader: a = !1,
  stacked: s = !1,
  className: i = "",
  sortConfig: c = null,
  onSort: u = null,
  ...f
}) => {
  const [d, h] = be(!1);
  Ne(() => {
    const v = () => {
      const w = s || window.innerWidth < 640;
      h(w);
    };
    return v(), window.addEventListener("resize", v), () => window.removeEventListener("resize", v);
  }, [s]);
  const g = "usa-table", p = [
    g,
    !t && `${g}--borderless`,
    n && `${g}--striped`,
    a && `${g}--sticky-header`,
    d && `${g}--stacked`,
    i
  ].filter(Boolean).join(" "), b = /* @__PURE__ */ o.jsx(
    "table",
    {
      className: p,
      role: "table",
      ...f,
      children: ae.Children.map(e, (v) => {
        var w, T, _, E;
        return ae.isValidElement(v) ? ((w = v.type) == null ? void 0 : w.displayName) === "TableHeader" || ((T = v.props) == null ? void 0 : T.role) === "rowgroup" ? ae.cloneElement(v, {
          sortConfig: c,
          onSort: u,
          isStackedView: d
        }) : ((_ = v.type) == null ? void 0 : _.displayName) === "TableBody" || ((E = v.props) == null ? void 0 : E.role) === "rowgroup" ? ae.cloneElement(v, {
          isStackedView: d
        }) : v : v;
      })
    }
  );
  return r && !d ? /* @__PURE__ */ o.jsx("div", { className: `${g}--scrollable`, tabIndex: "0", role: "region", "aria-label": "Scrollable table", children: b }) : b;
};
ed.propTypes = {
  children: l.node.isRequired,
  bordered: l.bool,
  striped: l.bool,
  scrollable: l.bool,
  stickyHeader: l.bool,
  stacked: l.bool,
  className: l.string,
  sortConfig: l.shape({
    column: l.string,
    direction: l.oneOf(["asc", "desc"])
  }),
  onSort: l.func
};
const Oi = ({
  children: e,
  sortConfig: t,
  onSort: n,
  isStackedView: r,
  ...a
}) => r ? null : /* @__PURE__ */ o.jsx("thead", { ...a, children: ae.Children.map(e, (s) => ae.isValidElement(s) ? ae.cloneElement(s, {
  sortConfig: t,
  onSort: n
}) : s) });
Oi.displayName = "TableHeader";
Oi.propTypes = {
  children: l.node.isRequired,
  sortConfig: l.shape({
    column: l.string,
    direction: l.oneOf(["asc", "desc"])
  }),
  onSort: l.func,
  isStackedView: l.bool
};
const Si = ({ direction: e, className: t = "" }) => {
  const n = /* @__PURE__ */ o.jsxs(
    "svg",
    {
      className: t,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ o.jsx(
          "path",
          {
            d: "M7 10l5 5 5-5H7z",
            fill: "currentColor",
            opacity: !e || e === "asc" ? 0.3 : 1
          }
        ),
        /* @__PURE__ */ o.jsx(
          "path",
          {
            d: "M7 14l5-5 5 5H7z",
            fill: "currentColor",
            opacity: !e || e === "desc" ? 0.3 : 1
          }
        )
      ]
    }
  ), r = /* @__PURE__ */ o.jsx(
    "svg",
    {
      className: t,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: /* @__PURE__ */ o.jsx(
        "path",
        {
          d: "M7 10l5 5 5-5H7z",
          fill: "currentColor"
        }
      )
    }
  ), a = /* @__PURE__ */ o.jsx(
    "svg",
    {
      className: t,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: /* @__PURE__ */ o.jsx(
        "path",
        {
          d: "M7 14l5-5 5 5H7z",
          fill: "currentColor"
        }
      )
    }
  );
  return e ? e === "asc" ? a : r : n;
};
Si.propTypes = {
  direction: l.oneOf(["asc", "desc", null]),
  className: l.string
};
const td = ({
  children: e,
  sortKey: t,
  sortConfig: n,
  onSort: r,
  scope: a = "col",
  className: s = "",
  ...i
}) => {
  const c = t && r, u = c && (n == null ? void 0 : n.column) === t, f = u ? n == null ? void 0 : n.direction : null, d = () => {
    c && r(t, u && f === "asc" ? "desc" : "asc");
  }, h = (b) => {
    c && (b.key === "Enter" || b.key === " ") && (b.preventDefault(), d());
  }, g = [
    "usa-table__header-cell",
    u && "usa-table__header-cell--sorted",
    s
  ].filter(Boolean).join(" "), p = u ? f === "asc" ? "ascending" : "descending" : null;
  return /* @__PURE__ */ o.jsx(
    "th",
    {
      scope: a,
      className: g,
      onClick: c ? d : void 0,
      onKeyDown: c ? h : void 0,
      tabIndex: c ? 0 : void 0,
      role: c ? "columnheader button" : "columnheader",
      "aria-sort": p,
      "aria-label": c ? `${e}, activate to sort column` : void 0,
      ...i,
      children: /* @__PURE__ */ o.jsxs("div", { className: "usa-table__header-cell-content", children: [
        e,
        c && /* @__PURE__ */ o.jsx(
          Si,
          {
            direction: f,
            className: "usa-table__sort-icon"
          }
        )
      ] })
    }
  );
};
td.propTypes = {
  children: l.node.isRequired,
  sortKey: l.string,
  sortConfig: l.shape({
    column: l.string,
    direction: l.oneOf(["asc", "desc"])
  }),
  onSort: l.func,
  scope: l.string,
  className: l.string
};
const Pi = ({
  children: e,
  isStackedView: t,
  headers: n = [],
  ...r
}) => /* @__PURE__ */ o.jsx("tbody", { ...r, children: ae.Children.map(e, (a, s) => ae.isValidElement(a) ? ae.cloneElement(a, {
  isStackedView: t,
  headers: n,
  rowIndex: s
}) : a) });
Pi.displayName = "TableBody";
Pi.propTypes = {
  children: l.node.isRequired,
  isStackedView: l.bool,
  headers: l.arrayOf(l.string)
};
const nd = ({
  children: e,
  isStackedView: t,
  headers: n = [],
  rowIndex: r,
  sortConfig: a,
  onSort: s,
  ...i
}) => t ? /* @__PURE__ */ o.jsx("tr", { className: "usa-table__row--stacked", ...i, children: /* @__PURE__ */ o.jsx("td", { className: "usa-table__cell--stacked", children: ae.Children.map(e, (c, u) => {
  if (!ae.isValidElement(c)) return c;
  const f = n[u] || "";
  return /* @__PURE__ */ o.jsxs("div", { className: "usa-table__cell-group--stacked", children: [
    f && /* @__PURE__ */ o.jsx("div", { className: "usa-table__header--stacked", children: f }),
    /* @__PURE__ */ o.jsx("div", { className: "usa-table__cell-content--stacked", children: c.props.children })
  ] }, u);
}) }) }) : /* @__PURE__ */ o.jsx("tr", { ...i, children: ae.Children.map(e, (c) => {
  var u;
  return ae.isValidElement(c) && ((u = c.type) == null ? void 0 : u.name) === "TableHeaderCell" ? ae.cloneElement(c, {
    sortConfig: a,
    onSort: s
  }) : c;
}) });
nd.propTypes = {
  children: l.node.isRequired,
  isStackedView: l.bool,
  headers: l.arrayOf(l.string),
  rowIndex: l.number,
  sortConfig: l.shape({
    column: l.string,
    direction: l.oneOf(["asc", "desc"])
  }),
  onSort: l.func
};
const rd = ({
  children: e,
  className: t = "",
  header: n = !1,
  scope: r = "row",
  ...a
}) => {
  const s = [
    "usa-table__cell",
    t
  ].filter(Boolean).join(" ");
  return n ? /* @__PURE__ */ o.jsx(
    "th",
    {
      scope: r,
      className: s,
      ...a,
      children: e
    }
  ) : /* @__PURE__ */ o.jsx(
    "td",
    {
      className: s,
      ...a,
      children: e
    }
  );
};
rd.propTypes = {
  children: l.node,
  className: l.string,
  header: l.bool,
  scope: l.string
};
const ad = ({
  children: e,
  className: t = "",
  ...n
}) => {
  const r = [
    "usa-table__caption",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx(
    "caption",
    {
      className: r,
      ...n,
      children: e
    }
  );
};
ad.propTypes = {
  children: l.node.isRequired,
  className: l.string
};
export {
  Ci as Alert,
  ir as Banner,
  dr as Breadcrumbs,
  qn as Button,
  Kf as Checkbox,
  oi as ColorSwatch,
  Dc as Contacts,
  ld as ExternalLinkIcon,
  fr as Footer,
  cr as Header,
  Mc as HeroGlobal,
  Lc as HeroHomepage,
  Cc as LanguageSelector,
  xu as Modal,
  Bs as PageTemplate,
  wu as Pagination,
  Oc as ProcessSteps,
  Pc as Search,
  Ys as SideNav,
  ur as SkipNav,
  li as SpacingDisplay,
  od as SpacingExamples,
  id as SpacingTokens,
  Zf as StepIndicator,
  kc as SummaryBox,
  ed as Table,
  Pi as TableBody,
  ad as TableCaption,
  rd as TableCell,
  Oi as TableHeader,
  td as TableHeaderCell,
  nd as TableRow,
  Sc as Tag,
  Jf as TextInput,
  Xf as Tooltip,
  ii as Typography
};
