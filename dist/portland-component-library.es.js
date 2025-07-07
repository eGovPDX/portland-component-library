import * as F from "react";
import be, { useState as ye, useEffect as ke, useRef as nt, useCallback as mt, useLayoutEffect as Za } from "react";
import * as Qa from "react-dom";
function ei(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ti(e) {
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
function ks() {
  if (Fr) return Xe;
  Fr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), a.key !== void 0 && (s = "" + a.key), "key" in a) {
      i = {};
      for (var c in a)
        c !== "key" && (i[c] = a[c]);
    } else i = a;
    return a = i.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: a !== void 0 ? a : null,
      props: i
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
function Ss() {
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
          case y:
            return "Portal";
          case E:
            return (m.displayName || "Context") + ".Provider";
          case _:
            return (m._context.displayName || "Context") + ".Consumer";
          case O:
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
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(m) {
      if (W.call(m, "key")) {
        var R = Object.getOwnPropertyDescriptor(m, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return m.key !== void 0;
    }
    function c(m, R) {
      function S() {
        k || (k = !0, console.error(
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
      if (B = null, S !== void 0 && (n(S), B = "" + S), s(R) && (n(R.key), B = "" + R.key), "key" in R) {
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
    var g = be, p = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), E = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), N = Symbol.for("react.client.reference"), Y = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, x = Array.isArray, b = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(m) {
        return m();
      }
    };
    var k, z = {}, D = g["react-stack-bottom-frame"].bind(
      g,
      i
    )(), L = b(r(i)), M = {};
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
        H ? b(r(m)) : L
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
        H ? b(r(m)) : L
      );
    };
  }()), Ke;
}
var Lr;
function Ps() {
  return Lr || (Lr = 1, process.env.NODE_ENV === "production" ? pt.exports = ks() : pt.exports = Ss()), pt.exports;
}
var o = Ps(), ht = { exports: {} }, gt = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr;
function As() {
  if (Mr) return Q;
  Mr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function E(j) {
    if (typeof j == "object" && j !== null) {
      var G = j.$$typeof;
      switch (G) {
        case t:
          switch (j = j.type, j) {
            case u:
            case f:
            case r:
            case i:
            case a:
            case h:
              return j;
            default:
              switch (j = j && j.$$typeof, j) {
                case c:
                case d:
                case y:
                case p:
                case s:
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
  function O(j) {
    return E(j) === f;
  }
  return Q.AsyncMode = u, Q.ConcurrentMode = f, Q.ContextConsumer = c, Q.ContextProvider = s, Q.Element = t, Q.ForwardRef = d, Q.Fragment = r, Q.Lazy = y, Q.Memo = p, Q.Portal = n, Q.Profiler = i, Q.StrictMode = a, Q.Suspense = h, Q.isAsyncMode = function(j) {
    return O(j) || E(j) === u;
  }, Q.isConcurrentMode = O, Q.isContextConsumer = function(j) {
    return E(j) === c;
  }, Q.isContextProvider = function(j) {
    return E(j) === s;
  }, Q.isElement = function(j) {
    return typeof j == "object" && j !== null && j.$$typeof === t;
  }, Q.isForwardRef = function(j) {
    return E(j) === d;
  }, Q.isFragment = function(j) {
    return E(j) === r;
  }, Q.isLazy = function(j) {
    return E(j) === y;
  }, Q.isMemo = function(j) {
    return E(j) === p;
  }, Q.isPortal = function(j) {
    return E(j) === n;
  }, Q.isProfiler = function(j) {
    return E(j) === i;
  }, Q.isStrictMode = function(j) {
    return E(j) === a;
  }, Q.isSuspense = function(j) {
    return E(j) === h;
  }, Q.isValidElementType = function(j) {
    return typeof j == "string" || typeof j == "function" || j === r || j === f || j === i || j === a || j === h || j === g || typeof j == "object" && j !== null && (j.$$typeof === y || j.$$typeof === p || j.$$typeof === s || j.$$typeof === c || j.$$typeof === d || j.$$typeof === w || j.$$typeof === T || j.$$typeof === _ || j.$$typeof === v);
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
function Is() {
  return zr || (zr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function E($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === r || $ === f || $ === i || $ === a || $ === h || $ === g || typeof $ == "object" && $ !== null && ($.$$typeof === y || $.$$typeof === p || $.$$typeof === s || $.$$typeof === c || $.$$typeof === d || $.$$typeof === w || $.$$typeof === T || $.$$typeof === _ || $.$$typeof === v);
    }
    function O($) {
      if (typeof $ == "object" && $ !== null) {
        var fe = $.$$typeof;
        switch (fe) {
          case t:
            var dt = $.type;
            switch (dt) {
              case u:
              case f:
              case r:
              case i:
              case a:
              case h:
                return dt;
              default:
                var Ir = dt && dt.$$typeof;
                switch (Ir) {
                  case c:
                  case d:
                  case y:
                  case p:
                  case s:
                    return Ir;
                  default:
                    return fe;
                }
            }
          case n:
            return fe;
        }
      }
    }
    var j = u, G = f, P = c, A = s, C = t, N = d, Y = r, W = y, x = p, b = n, k = i, z = a, D = h, L = !1;
    function M($) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m($) || O($) === u;
    }
    function m($) {
      return O($) === f;
    }
    function R($) {
      return O($) === c;
    }
    function S($) {
      return O($) === s;
    }
    function q($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function U($) {
      return O($) === d;
    }
    function H($) {
      return O($) === r;
    }
    function J($) {
      return O($) === y;
    }
    function K($) {
      return O($) === p;
    }
    function B($) {
      return O($) === n;
    }
    function X($) {
      return O($) === i;
    }
    function Z($) {
      return O($) === a;
    }
    function re($) {
      return O($) === h;
    }
    ee.AsyncMode = j, ee.ConcurrentMode = G, ee.ContextConsumer = P, ee.ContextProvider = A, ee.Element = C, ee.ForwardRef = N, ee.Fragment = Y, ee.Lazy = W, ee.Memo = x, ee.Portal = b, ee.Profiler = k, ee.StrictMode = z, ee.Suspense = D, ee.isAsyncMode = M, ee.isConcurrentMode = m, ee.isContextConsumer = R, ee.isContextProvider = S, ee.isElement = q, ee.isForwardRef = U, ee.isFragment = H, ee.isLazy = J, ee.isMemo = K, ee.isPortal = B, ee.isProfiler = X, ee.isStrictMode = Z, ee.isSuspense = re, ee.isValidElementType = E, ee.typeOf = O;
  }()), ee;
}
var qr;
function ni() {
  return qr || (qr = 1, process.env.NODE_ENV === "production" ? gt.exports = As() : gt.exports = Is()), gt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Zt, $r;
function Fs() {
  if ($r) return Zt;
  $r = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
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
  return Zt = a() ? Object.assign : function(i, s) {
    for (var c, u = r(i), f, d = 1; d < arguments.length; d++) {
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
function ri() {
  return Wr || (Wr = 1, en = Function.call.bind(Object.prototype.hasOwnProperty)), en;
}
var tn, Yr;
function Ds() {
  if (Yr) return tn;
  Yr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Gn(), n = {}, r = /* @__PURE__ */ ri();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(i, s, c, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (r(i, d)) {
          var h;
          try {
            if (typeof i[d] != "function") {
              var g = Error(
                (u || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            h = i[d](s, d, u, c, null, t);
          } catch (y) {
            h = y;
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
function Ls() {
  if (Ur) return nn;
  Ur = 1;
  var e = ni(), t = Fs(), n = /* @__PURE__ */ Gn(), r = /* @__PURE__ */ ri(), a = /* @__PURE__ */ Ds(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
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
      element: O(),
      elementType: j(),
      instanceOf: G,
      node: N(),
      objectOf: A,
      oneOf: P,
      oneOfType: C,
      shape: W,
      exact: x
    };
    function y(m, R) {
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
            var fe = B + ":" + K;
            !R[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            S < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + B + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[fe] = !0, S++);
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
      return w(s);
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
    function O() {
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
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function R(S, q, U, H, J) {
        for (var K = S[q], B = 0; B < m.length; B++)
          if (y(K, m[B]))
            return null;
        var X = JSON.stringify(m, function(re, $) {
          var fe = D($);
          return fe === "symbol" ? String($) : $;
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
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var R = 0; R < m.length; R++) {
        var S = m[R];
        if (typeof S != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + L(S) + " at index " + R + "."
          ), s;
      }
      function q(U, H, J, K, B) {
        for (var X = [], Z = 0; Z < m.length; Z++) {
          var re = m[Z], $ = re(U, H, J, K, B, n);
          if ($ == null)
            return null;
          $.data && r($.data, "expectedType") && X.push($.data.expectedType);
        }
        var fe = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new v("Invalid " + K + " `" + B + "` supplied to " + ("`" + J + "`" + fe + "."));
      }
      return w(q);
    }
    function N() {
      function m(R, S, q, U, H) {
        return b(R[S]) ? null : new v("Invalid " + U + " `" + H + "` supplied to " + ("`" + q + "`, expected a ReactNode."));
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
    function b(m) {
      switch (typeof m) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !m;
        case "object":
          if (Array.isArray(m))
            return m.every(b);
          if (m === null || c(m))
            return !0;
          var R = h(m);
          if (R) {
            var S = R.call(m), q;
            if (R !== m.entries) {
              for (; !(q = S.next()).done; )
                if (!b(q.value))
                  return !1;
            } else
              for (; !(q = S.next()).done; ) {
                var U = q.value;
                if (U && !b(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function k(m, R) {
      return m === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function z(m) {
      var R = typeof m;
      return Array.isArray(m) ? "array" : m instanceof RegExp ? "object" : k(R, m) ? "symbol" : R;
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
function Ms() {
  if (Hr) return rn;
  Hr = 1;
  var e = /* @__PURE__ */ Gn();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, rn = function() {
    function r(s, c, u, f, d, h) {
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
    var i = {
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
    return i.PropTypes = i, i;
  }, rn;
}
var Vr;
function zs() {
  if (Vr) return ht.exports;
  if (Vr = 1, process.env.NODE_ENV !== "production") {
    var e = ni(), t = !0;
    ht.exports = /* @__PURE__ */ Ls()(e.isElement, t);
  } else
    ht.exports = /* @__PURE__ */ Ms()();
  return ht.exports;
}
var qs = /* @__PURE__ */ zs();
const l = /* @__PURE__ */ ei(qs);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function $s(e, t, n) {
  return (t = Ws(t)) in e ? Object.defineProperty(e, t, {
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
      $s(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Bs(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ws(e) {
  var t = Bs(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const Xr = () => {
};
let Xn = {}, ai = {}, ii = null, si = {
  mark: Xr,
  measure: Xr
};
try {
  typeof window < "u" && (Xn = window), typeof document < "u" && (ai = document), typeof MutationObserver < "u" && (ii = MutationObserver), typeof performance < "u" && (si = performance);
} catch {
}
const {
  userAgent: Kr = ""
} = Xn.navigator || {}, Ee = Xn, ne = ai, Jr = ii, vt = si;
Ee.document;
const Ne = !!ne.documentElement && !!ne.head && typeof ne.addEventListener == "function" && typeof ne.createElement == "function", oi = ~Kr.indexOf("MSIE") || ~Kr.indexOf("Trident/");
var Ys = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Us = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, li = {
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
}, Hs = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, ci = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], ie = "classic", Bt = "duotone", Vs = "sharp", Gs = "sharp-duotone", ui = [ie, Bt, Vs, Gs], Xs = {
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
}, Ks = {
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
}, Js = /* @__PURE__ */ new Map([["classic", {
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
}]]), Zs = {
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
}, Qs = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Zr = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, eo = ["kit"], to = {
  kit: {
    "fa-kit": "fak"
  }
}, no = ["fak", "fakd"], ro = {
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
}, ao = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], io = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], so = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, oo = {
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
}, lo = {
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
}, co = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Nn = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...ao, ...co], uo = ["solid", "regular", "light", "thin", "duotone", "brands"], fi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fo = fi.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), mo = [...Object.keys(lo), ...uo, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", bt.GROUP, bt.SWAP_OPACITY, bt.PRIMARY, bt.SECONDARY].concat(fi.map((e) => "".concat(e, "x"))).concat(fo.map((e) => "w-".concat(e))), po = {
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
const xe = "___FONT_AWESOME___", jn = 16, di = "fa", mi = "svg-inline--fa", Fe = "data-fa-i2svg", Rn = "data-fa-pseudo-element", ho = "data-fa-pseudo-element-pending", Kn = "data-prefix", Jn = "data-icon", ea = "fontawesome-i2svg", go = "async", vo = ["HTML", "HEAD", "STYLE", "SCRIPT"], pi = (() => {
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
const hi = I({}, li);
hi[ie] = I(I(I(I({}, {
  "fa-duotone": "duotone"
}), li[ie]), Zr.kit), Zr["kit-duotone"]);
const bo = ot(hi), _n = I({}, Zs);
_n[ie] = I(I(I(I({}, {
  duotone: "fad"
}), _n[ie]), Qr.kit), Qr["kit-duotone"]);
const ta = ot(_n), En = I({}, wn);
En[ie] = I(I({}, En[ie]), ro.kit);
const Zn = ot(En), Tn = I({}, oo);
Tn[ie] = I(I({}, Tn[ie]), to.kit);
ot(Tn);
const yo = Ys, gi = "fa-layers-text", xo = Us, wo = I({}, Xs);
ot(wo);
const No = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], an = Hs, jo = [...eo, ...mo], Qe = Ee.FontAwesomeConfig || {};
function Ro(e) {
  var t = ne.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function _o(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ne && typeof ne.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = _o(Ro(n));
  a != null && (Qe[r] = a);
});
const vi = {
  styleDefault: "solid",
  familyDefault: ie,
  cssPrefix: di,
  replacementClass: mi,
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
const Ye = I(I({}, vi), Qe);
Ye.autoReplaceSvg || (Ye.observeMutations = !1);
const V = {};
Object.keys(vi).forEach((e) => {
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
Ee.FontAwesomeConfig = V;
const et = [];
function Eo(e) {
  return et.push(e), () => {
    et.splice(et.indexOf(e), 1);
  };
}
const je = jn, me = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function To(e) {
  if (!e || !Ne)
    return;
  const t = ne.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = ne.head.childNodes;
  let r = null;
  for (let a = n.length - 1; a > -1; a--) {
    const i = n[a], s = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (r = i);
  }
  return ne.head.insertBefore(t, r), e;
}
const Co = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function rt() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Co[Math.random() * 62 | 0];
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
function bi(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Oo(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(bi(e[n]), '" '), "").trim();
}
function Wt(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function er(e) {
  return e.size !== me.size || e.x !== me.x || e.y !== me.y || e.rotate !== me.rotate || e.flipX || e.flipY;
}
function ko(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), c = "rotate(".concat(t.rotate, " 0 0)"), u = {
    transform: "".concat(i, " ").concat(s, " ").concat(c)
  }, f = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: u,
    path: f
  };
}
function So(e) {
  let {
    transform: t,
    width: n = jn,
    height: r = jn,
    startCentered: a = !1
  } = e, i = "";
  return a && oi ? i += "translate(".concat(t.x / je - n / 2, "em, ").concat(t.y / je - r / 2, "em) ") : a ? i += "translate(calc(-50% + ".concat(t.x / je, "em), calc(-50% + ").concat(t.y / je, "em)) ") : i += "translate(".concat(t.x / je, "em, ").concat(t.y / je, "em) "), i += "scale(".concat(t.size / je * (t.flipX ? -1 : 1), ", ").concat(t.size / je * (t.flipY ? -1 : 1), ") "), i += "rotate(".concat(t.rotate, "deg) "), i;
}
var Po = `:root, :host {
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
function yi() {
  const e = di, t = mi, n = V.cssPrefix, r = V.replacementClass;
  let a = Po;
  if (n !== e || r !== t) {
    const i = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), c = new RegExp("\\.".concat(t), "g");
    a = a.replace(i, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(c, ".".concat(r));
  }
  return a;
}
let na = !1;
function sn() {
  V.autoAddCss && !na && (To(yi()), na = !0);
}
var Ao = {
  mixout() {
    return {
      dom: {
        css: yi,
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
const we = Ee || {};
we[xe] || (we[xe] = {});
we[xe].styles || (we[xe].styles = {});
we[xe].hooks || (we[xe].hooks = {});
we[xe].shims || (we[xe].shims = []);
var pe = we[xe];
const xi = [], wi = function() {
  ne.removeEventListener("DOMContentLoaded", wi), Ot = 1, xi.map((e) => e());
};
let Ot = !1;
Ne && (Ot = (ne.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ne.readyState), Ot || ne.addEventListener("DOMContentLoaded", wi));
function Io(e) {
  Ne && (Ot ? setTimeout(e, 0) : xi.push(e));
}
function lt(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? bi(e) : "<".concat(t, " ").concat(Oo(n), ">").concat(r.map(lt).join(""), "</").concat(t, ">");
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
  var i = Object.keys(t), s = i.length, c = n, u, f, d;
  for (r === void 0 ? (u = 1, d = t[i[0]]) : (u = 0, d = r); u < s; u++)
    f = i[u], d = c(d, t[f], f, t);
  return d;
};
function Fo(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      const i = e.charCodeAt(n++);
      (i & 64512) == 56320 ? t.push(((a & 1023) << 10) + (i & 1023) + 65536) : (t.push(a), n--);
    } else
      t.push(a);
  }
  return t;
}
function Cn(e) {
  const t = Fo(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Do(e, t) {
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
function On(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = aa(t);
  typeof pe.hooks.addPack == "function" && !r ? pe.hooks.addPack(e, aa(t)) : pe.styles[e] = I(I({}, pe.styles[e] || {}), a), e === "fas" && On("fa", t);
}
const {
  styles: at,
  shims: Lo
} = pe, Ni = Object.keys(Zn), Mo = Ni.reduce((e, t) => (e[t] = Object.keys(Zn[t]), e), {});
let tr = null, ji = {}, Ri = {}, _i = {}, Ei = {}, Ti = {};
function zo(e) {
  return ~jo.indexOf(e);
}
function qo(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !zo(a) ? a : null;
}
const Ci = () => {
  const e = (r) => on(at, (a, i, s) => (a[s] = on(i, r, {}), a), {});
  ji = e((r, a, i) => (a[3] && (r[a[3]] = i), a[2] && a[2].filter((c) => typeof c == "number").forEach((c) => {
    r[c.toString(16)] = i;
  }), r)), Ri = e((r, a, i) => (r[i] = i, a[2] && a[2].filter((c) => typeof c == "string").forEach((c) => {
    r[c] = i;
  }), r)), Ti = e((r, a, i) => {
    const s = a[2];
    return r[i] = i, s.forEach((c) => {
      r[c] = i;
    }), r;
  });
  const t = "far" in at || V.autoFetchSvg, n = on(Lo, (r, a) => {
    const i = a[0];
    let s = a[1];
    const c = a[2];
    return s === "far" && !t && (s = "fas"), typeof i == "string" && (r.names[i] = {
      prefix: s,
      iconName: c
    }), typeof i == "number" && (r.unicodes[i.toString(16)] = {
      prefix: s,
      iconName: c
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  _i = n.names, Ei = n.unicodes, tr = Yt(V.styleDefault, {
    family: V.familyDefault
  });
};
Eo((e) => {
  tr = Yt(e.styleDefault, {
    family: V.familyDefault
  });
});
Ci();
function nr(e, t) {
  return (ji[e] || {})[t];
}
function $o(e, t) {
  return (Ri[e] || {})[t];
}
function Pe(e, t) {
  return (Ti[e] || {})[t];
}
function Oi(e) {
  return _i[e] || {
    prefix: null,
    iconName: null
  };
}
function Bo(e) {
  const t = Ei[e], n = nr("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Te() {
  return tr;
}
const ki = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Wo(e) {
  let t = ie;
  const n = Ni.reduce((r, a) => (r[a] = "".concat(V.cssPrefix, "-").concat(a), r), {});
  return ui.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => Mo[r].includes(a))) && (t = r);
  }), t;
}
function Yt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = ie
  } = t, r = bo[n][e];
  if (n === Bt && !e)
    return "fad";
  const a = ta[n][e] || ta[n][r], i = e in pe.styles ? e : null;
  return a || i || null;
}
function Yo(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = qo(V.cssPrefix, r);
    a ? n = a : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function ia(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function Ut(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const a = Nn.concat(io), i = ia(e.filter((h) => a.includes(h))), s = ia(e.filter((h) => !Nn.includes(h))), c = i.filter((h) => (r = h, !ci.includes(h))), [u = null] = c, f = Wo(i), d = I(I({}, Yo(s)), {}, {
    prefix: Yt(u, {
      family: f
    })
  });
  return I(I(I({}, d), Go({
    values: e,
    family: f,
    styles: at,
    config: V,
    canonical: d,
    givenPrefix: r
  })), Uo(n, r, d));
}
function Uo(e, t, n) {
  let {
    prefix: r,
    iconName: a
  } = n;
  if (e || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  const i = t === "fa" ? Oi(a) : {}, s = Pe(r, a);
  return a = i.iconName || s || a, r = i.prefix || r, r === "far" && !at.far && at.fas && !V.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const Ho = ui.filter((e) => e !== ie || e !== Bt), Vo = Object.keys(wn).filter((e) => e !== ie).map((e) => Object.keys(wn[e])).flat();
function Go(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: i = {},
    config: s = {}
  } = e, c = n === Bt, u = t.includes("fa-duotone") || t.includes("fad"), f = s.familyDefault === "duotone", d = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!c && (u || f || d) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Ho.includes(n) && (Object.keys(i).find((g) => Vo.includes(g)) || s.autoFetchSvg)) {
    const g = Js.get(n).defaultShortPrefixId;
    r.prefix = g, r.iconName = Pe(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = Te() || "fas"), r;
}
class Xo {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((i) => {
      this.definitions[i] = I(I({}, this.definitions[i] || {}), a[i]), On(i, a[i]);
      const s = Zn[ie][i];
      s && On(s, a[i]), Ci();
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
        prefix: i,
        iconName: s,
        icon: c
      } = r[a], u = c[2];
      t[i] || (t[i] = {}), u.length > 0 && u.forEach((f) => {
        typeof f == "string" && (t[i][f] = c);
      }), t[i][s] = c;
    }), t;
  }
}
let sa = [], qe = {};
const Be = {}, Ko = Object.keys(Be);
function Jo(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return sa = e, qe = {}, Object.keys(Be).forEach((r) => {
    Ko.indexOf(r) === -1 && delete Be[r];
  }), sa.forEach((r) => {
    const a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach((i) => {
      typeof a[i] == "function" && (n[i] = a[i]), typeof a[i] == "object" && Object.keys(a[i]).forEach((s) => {
        n[i] || (n[i] = {}), n[i][s] = a[i][s];
      });
    }), r.hooks) {
      const i = r.hooks();
      Object.keys(i).forEach((s) => {
        qe[s] || (qe[s] = []), qe[s].push(i[s]);
      });
    }
    r.provides && r.provides(Be);
  }), n;
}
function kn(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (qe[e] || []).forEach((s) => {
    t = s.apply(null, [t, ...r]);
  }), t;
}
function De(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (qe[e] || []).forEach((i) => {
    i.apply(null, n);
  });
}
function Ce() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Be[e] ? Be[e].apply(null, t) : void 0;
}
function Sn(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Te();
  if (t)
    return t = Pe(n, t) || t, ra(Si.definitions, n, t) || ra(pe.styles, n, t);
}
const Si = new Xo(), Zo = () => {
  V.autoReplaceSvg = !1, V.observeMutations = !1, De("noAuto");
}, Qo = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Ne ? (De("beforeI2svg", e), Ce("pseudoElements2svg", e), Ce("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    V.autoReplaceSvg === !1 && (V.autoReplaceSvg = !0), V.observeMutations = !0, Io(() => {
      tl({
        autoReplaceSvgRoot: t
      }), De("watch", e);
    });
  }
}, el = {
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
    if (typeof e == "string" && (e.indexOf("".concat(V.cssPrefix, "-")) > -1 || e.match(yo))) {
      const t = Ut(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Te(),
        iconName: Pe(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Te();
      return {
        prefix: t,
        iconName: Pe(t, e) || e
      };
    }
  }
}, le = {
  noAuto: Zo,
  config: V,
  dom: Qo,
  parse: el,
  library: Si,
  findIconDefinition: Sn,
  toHtml: lt
}, tl = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = ne
  } = e;
  (Object.keys(pe.styles).length > 0 || V.autoFetchSvg) && Ne && V.autoReplaceSvg && le.dom.i2svg({
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
      if (!Ne) return;
      const n = ne.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function nl(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: i,
    transform: s
  } = e;
  if (er(s) && n.found && !r.found) {
    const {
      width: c,
      height: u
    } = n, f = {
      x: c / u / 2,
      y: 0.5
    };
    a.style = Wt(I(I({}, i), {}, {
      "transform-origin": "".concat(f.x + s.x / 16, "em ").concat(f.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function rl(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: a,
    symbol: i
  } = e;
  const s = i === !0 ? "".concat(t, "-").concat(V.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: I(I({}, a), {}, {
        id: s
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
    transform: i,
    symbol: s,
    title: c,
    maskId: u,
    titleId: f,
    extra: d,
    watchable: h = !1
  } = e, {
    width: g,
    height: p
  } = n.found ? n : t, y = no.includes(r), v = [V.replacementClass, a ? "".concat(V.cssPrefix, "-").concat(a) : ""].filter((j) => d.classes.indexOf(j) === -1).filter((j) => j !== "" || !!j).concat(d.classes).join(" ");
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
  const T = y && !~d.classes.indexOf("fa-fw") ? {
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
    transform: i,
    symbol: s,
    styles: I(I({}, T), d.styles)
  }), {
    children: E,
    attributes: O
  } = n.found && t.found ? Ce("generateAbstractMask", _) || {
    children: [],
    attributes: {}
  } : Ce("generateAbstractIcon", _) || {
    children: [],
    attributes: {}
  };
  return _.children = E, _.attributes = O, s ? rl(_) : nl(_);
}
function oa(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: a,
    title: i,
    extra: s,
    watchable: c = !1
  } = e, u = I(I(I({}, s.attributes), i ? {
    title: i
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  c && (u[Fe] = "");
  const f = I({}, s.styles);
  er(a) && (f.transform = So({
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
  }), i && h.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), h;
}
function al(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, a = I(I(I({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), i = Wt(r.styles);
  i.length > 0 && (a.style = i);
  const s = [];
  return s.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), n && s.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), s;
}
const {
  styles: ln
} = pe;
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
const il = {
  found: !1,
  width: 512,
  height: 512
};
function sl(e, t) {
  !pi && !V.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function An(e, t) {
  let n = t;
  return t === "fa" && V.styleDefault !== null && (t = Te()), new Promise((r, a) => {
    if (n === "fa") {
      const i = Oi(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && ln[t] && ln[t][e]) {
      const i = ln[t][e];
      return r(Pn(i));
    }
    sl(e, t), r(I(I({}, il), {}, {
      icon: V.showMissingIcons && e ? Ce("missingIconAbstract") || {} : {}
    }));
  });
}
const la = () => {
}, In = V.measurePerformance && vt && vt.mark && vt.measure ? vt : {
  mark: la,
  measure: la
}, Ze = 'FA "6.7.2"', ol = (e) => (In.mark("".concat(Ze, " ").concat(e, " begins")), () => Pi(e)), Pi = (e) => {
  In.mark("".concat(Ze, " ").concat(e, " ends")), In.measure("".concat(Ze, " ").concat(e), "".concat(Ze, " ").concat(e, " begins"), "".concat(Ze, " ").concat(e, " ends"));
};
var ar = {
  begin: ol,
  end: Pi
};
const Rt = () => {
};
function ca(e) {
  return typeof (e.getAttribute ? e.getAttribute(Fe) : null) == "string";
}
function ll(e) {
  const t = e.getAttribute ? e.getAttribute(Kn) : null, n = e.getAttribute ? e.getAttribute(Jn) : null;
  return t && n;
}
function cl(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(V.replacementClass);
}
function ul() {
  return V.autoReplaceSvg === !0 ? _t.replace : _t[V.autoReplaceSvg] || _t.replace;
}
function fl(e) {
  return ne.createElementNS("http://www.w3.org/2000/svg", e);
}
function dl(e) {
  return ne.createElement(e);
}
function Ai(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? fl : dl
  } = t;
  if (typeof e == "string")
    return ne.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(i) {
    r.setAttribute(i, e.attributes[i]);
  }), (e.children || []).forEach(function(i) {
    r.appendChild(Ai(i, {
      ceFn: n
    }));
  }), r;
}
function ml(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const _t = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(Ai(n), t);
      }), t.getAttribute(Fe) === null && V.keepOriginalSource) {
        let n = ne.createComment(ml(t));
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
      const i = n[0].attributes.class.split(" ").reduce((s, c) => (c === V.replacementClass || c.match(r) ? s.toSvg.push(c) : s.toNode.push(c), s), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
    }
    const a = n.map((i) => lt(i)).join(`
`);
    t.setAttribute(Fe, ""), t.innerHTML = a;
  }
};
function ua(e) {
  e();
}
function Ii(e, t) {
  const n = typeof t == "function" ? t : Rt;
  if (e.length === 0)
    n();
  else {
    let r = ua;
    V.mutateApproach === go && (r = Ee.requestAnimationFrame || ua), r(() => {
      const a = ul(), i = ar.begin("mutate");
      e.map(a), i(), n();
    });
  }
}
let ir = !1;
function Fi() {
  ir = !0;
}
function Fn() {
  ir = !1;
}
let kt = null;
function fa(e) {
  if (!Jr || !V.observeMutations)
    return;
  const {
    treeCallback: t = Rt,
    nodeCallback: n = Rt,
    pseudoElementsCallback: r = Rt,
    observeMutationsRoot: a = ne
  } = e;
  kt = new Jr((i) => {
    if (ir) return;
    const s = Te();
    Ve(i).forEach((c) => {
      if (c.type === "childList" && c.addedNodes.length > 0 && !ca(c.addedNodes[0]) && (V.searchPseudoElements && r(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && V.searchPseudoElements && r(c.target.parentNode), c.type === "attributes" && ca(c.target) && ~No.indexOf(c.attributeName))
        if (c.attributeName === "class" && ll(c.target)) {
          const {
            prefix: u,
            iconName: f
          } = Ut(Qn(c.target));
          c.target.setAttribute(Kn, u || s), f && c.target.setAttribute(Jn, f);
        } else cl(c.target) && n(c.target);
    });
  }), Ne && kt.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function pl() {
  kt && kt.disconnect();
}
function hl(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const i = a.split(":"), s = i[0], c = i.slice(1);
    return s && c.length > 0 && (r[s] = c.join(":").trim()), r;
  }, {})), n;
}
function gl(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = Ut(Qn(e));
  return a.prefix || (a.prefix = Te()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = $o(a.prefix, e.innerText) || nr(a.prefix, Cn(e.innerText))), !a.iconName && V.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function vl(e) {
  const t = Ve(e.attributes).reduce((a, i) => (a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return V.autoA11y && (n ? t["aria-labelledby"] = "".concat(V.replacementClass, "-title-").concat(r || rt()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function bl() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: me,
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
  } = gl(e), i = vl(e), s = kn("parseNodeAttributes", {}, e);
  let c = t.styleParser ? hl(e) : [];
  return I({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: me,
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
      attributes: i
    }
  }, s);
}
const {
  styles: yl
} = pe;
function Di(e) {
  const t = V.autoReplaceSvg === "nest" ? da(e, {
    styleParser: !1
  }) : da(e);
  return ~t.extra.classes.indexOf(gi) ? Ce("generateLayersText", e, t) : Ce("generateSvgReplacementMutation", e, t);
}
function xl() {
  return [...Qs, ...Nn];
}
function ma(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ne) return Promise.resolve();
  const n = ne.documentElement.classList, r = (d) => n.add("".concat(ea, "-").concat(d)), a = (d) => n.remove("".concat(ea, "-").concat(d)), i = V.autoFetchSvg ? xl() : ci.concat(Object.keys(yl));
  i.includes("fa") || i.push("fa");
  const s = [".".concat(gi, ":not([").concat(Fe, "])")].concat(i.map((d) => ".".concat(d, ":not([").concat(Fe, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let c = [];
  try {
    c = Ve(e.querySelectorAll(s));
  } catch {
  }
  if (c.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const u = ar.begin("onTree"), f = c.reduce((d, h) => {
    try {
      const g = Di(h);
      g && d.push(g);
    } catch (g) {
      pi || g.name === "MissingIcon" && console.error(g);
    }
    return d;
  }, []);
  return new Promise((d, h) => {
    Promise.all(f).then((g) => {
      Ii(g, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), u(), d();
      });
    }).catch((g) => {
      u(), h(g);
    });
  });
}
function wl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Di(e).then((n) => {
    n && Ii([n], t);
  });
}
function Nl(e) {
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
const jl = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = me,
    symbol: r = !1,
    mask: a = null,
    maskId: i = null,
    title: s = null,
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
  }), V.autoA11y && (s ? f["aria-labelledby"] = "".concat(V.replacementClass, "-title-").concat(c || rt()) : (f["aria-hidden"] = "true", f.focusable = "false")), rr({
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
    transform: I(I({}, me), n),
    symbol: r,
    title: s,
    maskId: i,
    titleId: c,
    extra: {
      attributes: f,
      styles: d,
      classes: u
    }
  })));
};
var Rl = {
  mixout() {
    return {
      icon: Nl(jl)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = ma, e.nodeCallback = wl, e;
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
        titleId: i,
        prefix: s,
        transform: c,
        symbol: u,
        mask: f,
        maskId: d,
        extra: h
      } = n;
      return new Promise((g, p) => {
        Promise.all([An(r, s), f.iconName ? An(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((y) => {
          let [v, w] = y;
          g([t, rr({
            icons: {
              main: v,
              mask: w
            },
            prefix: s,
            iconName: r,
            transform: c,
            symbol: u,
            maskId: d,
            title: a,
            titleId: i,
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
        transform: i,
        styles: s
      } = t;
      const c = Wt(s);
      c.length > 0 && (r.style = c);
      let u;
      return er(i) && (u = Ce("generateAbstractTransformGrouping", {
        main: a,
        transform: i,
        containerWidth: a.width,
        iconWidth: a.width
      })), n.push(u || a.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, _l = {
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
            Array.isArray(a) ? a.map((i) => {
              r = r.concat(i.abstract);
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
}, El = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: a = {},
          styles: i = {}
        } = t;
        return Ht({
          type: "counter",
          content: e
        }, () => (De("beforeDOMElementCreation", {
          content: e,
          params: t
        }), al({
          content: e.toString(),
          title: n,
          extra: {
            attributes: a,
            styles: i,
            classes: ["".concat(V.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, Tl = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = me,
          title: r = null,
          classes: a = [],
          attributes: i = {},
          styles: s = {}
        } = t;
        return Ht({
          type: "text",
          content: e
        }, () => (De("beforeDOMElementCreation", {
          content: e,
          params: t
        }), oa({
          content: e,
          transform: I(I({}, me), n),
          title: r,
          extra: {
            attributes: i,
            styles: s,
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
        extra: i
      } = n;
      let s = null, c = null;
      if (oi) {
        const u = parseInt(getComputedStyle(t).fontSize, 10), f = t.getBoundingClientRect();
        s = f.width / u, c = f.height / u;
      }
      return V.autoA11y && !r && (i.attributes["aria-hidden"] = "true"), Promise.resolve([t, oa({
        content: t.innerHTML,
        width: s,
        height: c,
        transform: a,
        title: r,
        extra: i,
        watchable: !0
      })]);
    };
  }
};
const Cl = new RegExp('"', "ug"), pa = [1105920, 1112319], ha = I(I(I(I({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Ks), po), so), Dn = Object.keys(ha).reduce((e, t) => (e[t.toLowerCase()] = ha[t], e), {}), Ol = Object.keys(Dn).reduce((e, t) => {
  const n = Dn[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function kl(e) {
  const t = e.replace(Cl, ""), n = Do(t, 0), r = n >= pa[0] && n <= pa[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Cn(a ? t[0] : t),
    isSecondary: r || a
  };
}
function Sl(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (Dn[n] || {})[a] || Ol[n];
}
function ga(e, t) {
  const n = "".concat(ho).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const s = Ve(e.children).filter((g) => g.getAttribute(Rn) === t)[0], c = Ee.getComputedStyle(e, t), u = c.getPropertyValue("font-family"), f = u.match(xo), d = c.getPropertyValue("font-weight"), h = c.getPropertyValue("content");
    if (s && !f)
      return e.removeChild(s), r();
    if (f && h !== "none" && h !== "") {
      const g = c.getPropertyValue("content");
      let p = Sl(u, d);
      const {
        value: y,
        isSecondary: v
      } = kl(g), w = f[0].startsWith("FontAwesome");
      let T = nr(p, y), _ = T;
      if (w) {
        const E = Bo(y);
        E.iconName && E.prefix && (T = E.iconName, p = E.prefix);
      }
      if (T && !v && (!s || s.getAttribute(Kn) !== p || s.getAttribute(Jn) !== _)) {
        e.setAttribute(n, _), s && e.removeChild(s);
        const E = bl(), {
          extra: O
        } = E;
        O.attributes[Rn] = t, An(T, p).then((j) => {
          const G = rr(I(I({}, E), {}, {
            icons: {
              main: j,
              mask: ki()
            },
            prefix: p,
            iconName: _,
            extra: O,
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
function Pl(e) {
  return Promise.all([ga(e, "::before"), ga(e, "::after")]);
}
function Al(e) {
  return e.parentNode !== document.head && !~vo.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Rn) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function va(e) {
  if (Ne)
    return new Promise((t, n) => {
      const r = Ve(e.querySelectorAll("*")).filter(Al).map(Pl), a = ar.begin("searchPseudoElements");
      Fi(), Promise.all(r).then(() => {
        a(), Fn(), t();
      }).catch(() => {
        a(), Fn(), n();
      });
    });
}
var Il = {
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
var Fl = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Fi(), ba = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        fa(kn("mutationObserverCallbacks", {}));
      },
      noAuto() {
        pl();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        ba ? Fn() : fa(kn("mutationObserverCallbacks", {
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
    const a = r.toLowerCase().split("-"), i = a[0];
    let s = a.slice(1).join("-");
    if (i && s === "h")
      return n.flipX = !0, n;
    if (i && s === "v")
      return n.flipY = !0, n;
    if (s = parseFloat(s), isNaN(s))
      return n;
    switch (i) {
      case "grow":
        n.size = n.size + s;
        break;
      case "shrink":
        n.size = n.size - s;
        break;
      case "left":
        n.x = n.x - s;
        break;
      case "right":
        n.x = n.x + s;
        break;
      case "up":
        n.y = n.y - s;
        break;
      case "down":
        n.y = n.y + s;
        break;
      case "rotate":
        n.rotate = n.rotate + s;
        break;
    }
    return n;
  }, t);
};
var Dl = {
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
        iconWidth: i
      } = t;
      const s = {
        transform: "translate(".concat(a / 2, " 256)")
      }, c = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), u = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), f = "rotate(".concat(r.rotate, " 0 0)"), d = {
        transform: "".concat(c, " ").concat(u, " ").concat(f)
      }, h = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, g = {
        outer: s,
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
function Ll(e) {
  return e.tag === "g" ? e.children : [e];
}
var Ml = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Ut(n.split(" ").map((a) => a.trim())) : ki();
        return r.prefix || (r.prefix = Te()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        mask: i,
        maskId: s,
        transform: c
      } = t;
      const {
        width: u,
        icon: f
      } = a, {
        width: d,
        icon: h
      } = i, g = ko({
        transform: c,
        containerWidth: d,
        iconWidth: u
      }), p = {
        tag: "rect",
        attributes: I(I({}, cn), {}, {
          fill: "white"
        })
      }, y = f.children ? {
        children: f.children.map(xa)
      } : {}, v = {
        tag: "g",
        attributes: I({}, g.inner),
        children: [xa(I({
          tag: f.tag,
          attributes: I(I({}, f.attributes), g.path)
        }, y))]
      }, w = {
        tag: "g",
        attributes: I({}, g.outer),
        children: [v]
      }, T = "mask-".concat(s || rt()), _ = "clip-".concat(s || rt()), E = {
        tag: "mask",
        attributes: I(I({}, cn), {}, {
          id: T,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [p, w]
      }, O = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: _
          },
          children: Ll(h)
        }, E]
      };
      return n.push(O, {
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
}, zl = {
  provides(e) {
    let t = !1;
    Ee.matchMedia && (t = Ee.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
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
      const i = I(I({}, a), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: I(I({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || s.children.push({
        tag: "animate",
        attributes: I(I({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: I(I({}, i), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: I(I({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: I(I({}, i), {}, {
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
          attributes: I(I({}, i), {}, {
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
}, ql = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, $l = [Ao, Rl, _l, El, Tl, Il, Fl, Dl, Ml, zl, ql];
Jo($l, {
  mixoutsTo: le
});
le.noAuto;
le.config;
le.library;
le.dom;
const Ln = le.parse;
le.findIconDefinition;
le.toHtml;
const Bl = le.icon;
le.layer;
le.text;
le.counter;
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
function de(e) {
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
function Wl(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Yl(e, t) {
  if (e == null) return {};
  var n = Wl(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Mn(e) {
  return Ul(e) || Hl(e) || Vl(e) || Gl();
}
function Ul(e) {
  if (Array.isArray(e)) return zn(e);
}
function Hl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Vl(e, t) {
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
function Gl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xl(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, i = e.bounce, s = e.shake, c = e.flash, u = e.spin, f = e.spinPulse, d = e.spinReverse, h = e.pulse, g = e.fixedWidth, p = e.inverse, y = e.border, v = e.listItem, w = e.flip, T = e.size, _ = e.rotation, E = e.pull, O = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": i,
    "fa-shake": s,
    "fa-flash": c,
    "fa-spin": u,
    "fa-spin-reverse": d,
    "fa-spin-pulse": f,
    "fa-pulse": h,
    "fa-fw": g,
    "fa-inverse": p,
    "fa-border": y,
    "fa-li": v,
    "fa-flip": w === !0,
    "fa-flip-horizontal": w === "horizontal" || w === "both",
    "fa-flip-vertical": w === "vertical" || w === "both"
  }, $e(t, "fa-".concat(T), typeof T < "u" && T !== null), $e(t, "fa-rotate-".concat(_), typeof _ < "u" && _ !== null && _ !== 0), $e(t, "fa-pull-".concat(E), typeof E < "u" && E !== null), $e(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(O).map(function(j) {
    return O[j] ? j : null;
  }).filter(function(j) {
    return j;
  });
}
function Kl(e) {
  return e = e - 0, e === e;
}
function Li(e) {
  return Kl(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Jl = ["style"];
function Zl(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ql(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = Li(n.slice(0, r)), i = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Zl(a)] = i : t[a] = i, t;
  }, {});
}
function Mi(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(u) {
    return Mi(e, u);
  }), a = Object.keys(t.attributes || {}).reduce(function(u, f) {
    var d = t.attributes[f];
    switch (f) {
      case "class":
        u.attrs.className = d, delete t.attributes.class;
        break;
      case "style":
        u.attrs.style = Ql(d);
        break;
      default:
        f.indexOf("aria-") === 0 || f.indexOf("data-") === 0 ? u.attrs[f.toLowerCase()] = d : u.attrs[Li(f)] = d;
    }
    return u;
  }, {
    attrs: {}
  }), i = n.style, s = i === void 0 ? {} : i, c = Yl(n, Jl);
  return a.attrs.style = de(de({}, a.attrs.style), s), e.apply(void 0, [t.tag, de(de({}, a.attrs), c)].concat(Mn(r)));
}
var zi = !1;
try {
  zi = process.env.NODE_ENV === "production";
} catch {
}
function ec() {
  if (!zi && console && typeof console.error == "function") {
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
}, te = /* @__PURE__ */ be.forwardRef(function(e, t) {
  var n = de(de({}, ja), e), r = n.icon, a = n.mask, i = n.symbol, s = n.className, c = n.title, u = n.titleId, f = n.maskId, d = Na(r), h = un("classes", [].concat(Mn(Xl(n)), Mn((s || "").split(" ")))), g = un("transform", typeof n.transform == "string" ? Ln.transform(n.transform) : n.transform), p = un("mask", Na(a)), y = Bl(d, de(de(de(de({}, h), g), p), {}, {
    symbol: i,
    title: c,
    titleId: u,
    maskId: f
  }));
  if (!y)
    return ec("Could not find icon", d), null;
  var v = y.abstract, w = {
    ref: t
  };
  return Object.keys(n).forEach(function(T) {
    ja.hasOwnProperty(T) || (w[T] = n[T]);
  }), tc(v[0], w);
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
var tc = Mi.bind(null, be.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const nc = {
  prefix: "fas",
  iconName: "cloud",
  icon: [640, 512, [9729], "f0c2", "M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"]
}, rc = {
  prefix: "fas",
  iconName: "compass",
  icon: [512, 512, [129517], "f14e", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, ac = {
  prefix: "fas",
  iconName: "circle-exclamation",
  icon: [512, 512, ["exclamation-circle"], "f06a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, Ra = ac, ic = {
  prefix: "fas",
  iconName: "lock",
  icon: [448, 512, [128274], "f023", "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]
}, sc = {
  prefix: "fas",
  iconName: "pizza-slice",
  icon: [512, 512, [], "f818", "M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, oc = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, lc = oc, cc = {
  prefix: "fas",
  iconName: "arrow-left",
  icon: [448, 512, [8592], "f060", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]
}, fn = {
  prefix: "fas",
  iconName: "phone-volume",
  icon: [512, 512, ["volume-control-phone"], "f2a0", "M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"]
}, uc = {
  prefix: "fas",
  iconName: "envelope",
  icon: [512, 512, [128386, 9993, 61443], "f0e0", "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]
}, fc = {
  prefix: "fas",
  iconName: "circle-info",
  icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, _a = fc, dc = {
  prefix: "fas",
  iconName: "landmark",
  icon: [512, 512, [127963], "f66f", "M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8L32 192c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9l0-.9 4.4-1.6L240.1 4.2zM64 224l64 0 0 192 40 0 0-192 64 0 0 192 48 0 0-192 64 0 0 192 40 0 0-192 64 0 0 196.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 224z"]
}, mc = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, pc = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, hc = pc, Ea = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, gc = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, vc = gc, bc = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, qi = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, yc = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, xc = yc, sr = ({
  domain: e = "An official website of the City of Portland",
  icon: t = void 0,
  heading: n = "Official websites use .gov",
  description: r = "A .gov website belongs to an official government organization in the United States.",
  bannerLinkText: a = "Here's how you know",
  showHttpsGuidance: i = !0,
  initiallyExpanded: s = !1,
  className: c = ""
}) => {
  const [u, f] = ye(s), d = ["banner", c].filter(Boolean).join(" "), h = () => {
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
            /* @__PURE__ */ o.jsx("div", { className: "banner-guidance-icon", children: /* @__PURE__ */ o.jsx(te, { icon: dc, style: { fontSize: "40px", color: "#2378C3" } }) || null }),
            /* @__PURE__ */ o.jsx("div", { className: "banner-guidance-text", children: /* @__PURE__ */ o.jsxs("p", { children: [
              /* @__PURE__ */ o.jsx("strong", { children: n }),
              /* @__PURE__ */ o.jsx("br", {}),
              r
            ] }) })
          ] }),
          i && /* @__PURE__ */ o.jsxs("div", { className: "banner-guidance", children: [
            /* @__PURE__ */ o.jsx("div", { className: "banner-guidance-icon", children: /* @__PURE__ */ o.jsx(te, { icon: ic, style: { fontSize: "40px", color: "#719F2A" } }) }),
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
sr.propTypes = {
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
sr.defaultProps = {
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
const $i = ({ item: e }) => /* @__PURE__ */ o.jsx("li", { className: "header-menu-item", role: "menuitem", children: /* @__PURE__ */ o.jsxs(
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
$i.propTypes = {
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
    /* @__PURE__ */ o.jsx("ul", { className: "header-menu-group-items", role: "menu", children: e.map((i, s) => /* @__PURE__ */ o.jsx($i, { item: i }, s)) })
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
  mainHeading: i,
  menuText: s,
  openMenuAriaLabel: c,
  closeMenuAriaLabel: u,
  className: f
}) => {
  const [d, h] = ye(!1), g = () => {
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
            /* @__PURE__ */ o.jsx("span", { className: "header-mobile-menu-text", "aria-hidden": "true", children: s })
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
            mainHeading: i,
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
  relayServiceText: i,
  relayServiceNumber: s,
  translationText: c,
  generalInfoLinks: u,
  termsLinks: f,
  portlandGovLinks: d,
  socialMediaLinks: h,
  cityName: g,
  cityLogoUrl: p,
  cityLogoAlt: y,
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
          /* @__PURE__ */ o.jsx("a", { href: `tel:${s.replace(/\D/g, "")}`, className: "footer-relay-link", children: s }),
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
      /* @__PURE__ */ o.jsx("img", { src: p, alt: y, className: "footer-city-logo" }),
      /* @__PURE__ */ o.jsx("p", { className: "footer-copyright", children: v })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ o.jsx("h4", { className: "footer-heading", children: "General Information" }),
      /* @__PURE__ */ o.jsx("ul", { className: "footer-links", children: u.map((E, O) => /* @__PURE__ */ o.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ o.jsx("a", { href: E.href, className: "footer-link", children: E.label }) }, `general-link-${O}`)) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ o.jsx("h4", { className: "footer-heading", children: "Terms And Policies" }),
      /* @__PURE__ */ o.jsx("ul", { className: "footer-links", children: f.map((E, O) => /* @__PURE__ */ o.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ o.jsx("a", { href: E.href, className: "footer-link", children: E.label }) }, `terms-link-${O}`)) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ o.jsx("h4", { className: "footer-heading", children: "Portland.Gov" }),
      /* @__PURE__ */ o.jsx("ul", { className: "footer-links", children: d.map((E, O) => /* @__PURE__ */ o.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ o.jsx("a", { href: E.href, className: "footer-link", children: E.label }) }, `pgov-link-${O}`)) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ o.jsx("h4", { className: "footer-heading", children: "Social Media" }),
      /* @__PURE__ */ o.jsx("ul", { className: "footer-links", children: h.map((E, O) => /* @__PURE__ */ o.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ o.jsx("a", { href: E.href, className: "footer-link", children: E.label }) }, `social-link-${O}`)) })
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
  const [r, a] = ye(window.innerWidth < 768);
  ke(() => {
    const u = () => {
      const f = window.innerWidth < 768;
      r !== f && a(f);
    };
    return window.addEventListener("resize", u), () => window.removeEventListener("resize", u);
  }, [r]);
  const i = () => n || /* @__PURE__ */ o.jsx(
    te,
    {
      icon: r ? cc : qi,
      className: "breadcrumb__separator",
      "aria-hidden": "true"
    }
  ), s = () => e.map((u, f) => /* @__PURE__ */ o.jsxs("li", { className: "breadcrumb__item", children: [
    r && f > 0 && i(),
    f === e.length - 1 ? /* @__PURE__ */ o.jsx("span", { className: "breadcrumb__current", "aria-current": "page", children: u.text }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("a", { href: u.href, className: "breadcrumb__link", children: u.text }),
      !r && i()
    ] })
  ] }, f)), c = ["breadcrumb", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx(
    "nav",
    {
      className: c,
      "aria-label": "Breadcrumbs",
      children: /* @__PURE__ */ o.jsx("ol", { className: "breadcrumb__list", children: s() })
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
const Bi = ({
  bannerProps: e,
  headerProps: t,
  skipNavProps: n,
  footerProps: r,
  breadcrumbsProps: a,
  children: i,
  includeBanner: s = !0,
  includeSkipNav: c = !0,
  includeFooter: u = !0,
  includeBreadcrumbs: f = !0,
  className: d = ""
}) => /* @__PURE__ */ o.jsxs("div", { className: `pgov-page-template ${d}`, children: [
  c && /* @__PURE__ */ o.jsx(ur, { ...n }),
  s && /* @__PURE__ */ o.jsx(sr, { ...e }),
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
        i
      ]
    }
  ),
  u && /* @__PURE__ */ o.jsx(fr, { ...r })
] });
Bi.propTypes = {
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
Bi.defaultProps = {
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
function wc() {
  return Ta || (Ta = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var i = "", s = 0; s < arguments.length; s++) {
          var c = arguments[s];
          c && (i = a(i, r(c)));
        }
        return i;
      }
      function r(i) {
        if (typeof i == "string" || typeof i == "number")
          return i;
        if (typeof i != "object")
          return "";
        if (Array.isArray(i))
          return n.apply(null, i);
        if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
          return i.toString();
        var s = "";
        for (var c in i)
          t.call(i, c) && i[c] && (s = a(s, c));
        return s;
      }
      function a(i, s) {
        return s ? i ? i + " " + s : i + s : i;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(dn)), dn.exports;
}
var Nc = wc();
const yt = /* @__PURE__ */ ei(Nc), qn = ({
  children: e,
  variant: t = "default",
  size: n = "default",
  disabled: r = !1,
  ariaDisabled: a = !1,
  unstyled: i = !1,
  onClick: s,
  type: c = "button",
  startIcon: u,
  endIcon: f,
  className: d,
  ...h
}) => {
  const g = "usa-button", p = t !== "default" ? `${g}--${t}` : "", y = n === "big" ? `${g}--big` : "", v = i ? `${g}--unstyled` : "", w = [
    g,
    p,
    y,
    v,
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs(
    "button",
    {
      type: c,
      className: w,
      onClick: s,
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
const jc = [
  { code: "en", nativeName: "English", englishName: "English" },
  { code: "es", nativeName: "Español", englishName: "Spanish" },
  { code: "fr", nativeName: "Français", englishName: "French" },
  { code: "ar", nativeName: "العربية", englishName: "Arabic" },
  { code: "zh", nativeName: "简体字", englishName: "Chinese - Simplified" },
  { code: "it", nativeName: "Italiano", englishName: "Italian" }
], Rc = (e, t) => {
  ke(() => {
    const n = (r) => {
      !e.current || e.current.contains(r.target) || t(r);
    };
    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
      document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n);
    };
  }, [e, t]);
}, _c = ({
  languages: e = jc,
  selectedLanguage: t = "en",
  onLanguageChange: n,
  variant: r = "default",
  buttonText: a = "Languages",
  buttonVariant: i = "default",
  buttonSize: s = "default",
  className: c,
  id: u = "language-selector",
  disabled: f = !1,
  showFooterText: d = !0,
  footerText: h = "Selected content in additional languages",
  ariaLabel: g = "Select language",
  ...p
}) => {
  const [y, v] = ye(!1), [w, T] = ye(-1), _ = nt(null), E = nt(null), O = `${u}-menu`;
  Rc(_, () => v(!1)), e.find((C) => C.code === t) || e[0];
  const j = (C, N) => {
    v(!1), T(N), n && n(C.code, C);
  }, G = (C) => {
    var N;
    if (!f) {
      if (!y && (C.key === "ArrowDown" || C.key === "Enter" || C.key === " "))
        C.preventDefault(), v(!0), T(0);
      else if (y)
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
        v((C) => !C), y || T(0);
  };
  ke(() => {
    if (y && w >= 0) {
      const C = document.getElementById(`${u}-option-${w}`);
      C && typeof C.scrollIntoView == "function" && C.scrollIntoView({ block: "nearest" });
    }
  }, [y, w, u]);
  const A = yt(
    "usa-language-selector",
    {
      "usa-language-selector--two-languages": r === "two-languages",
      "usa-language-selector--unstyled": r === "unstyled",
      "usa-language-selector--open": y
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
        variant: i,
        size: s,
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
        "aria-expanded": y,
        "aria-controls": O,
        children: [
          a,
          /* @__PURE__ */ o.jsx(
            te,
            {
              icon: Ea,
              className: yt("usa-language-selector__chevron", {
                "usa-language-selector__chevron--open": y
              }),
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    y && /* @__PURE__ */ o.jsxs(
      "ul",
      {
        id: O,
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
        variant: i,
        size: s,
        disabled: f,
        onClick: P,
        onKeyDown: G,
        "aria-label": g,
        "aria-haspopup": "listbox",
        "aria-expanded": y,
        "aria-controls": O,
        className: "usa-language-selector__button",
        endIcon: Ea,
        children: a
      }
    ),
    y && /* @__PURE__ */ o.jsxs(
      "ul",
      {
        id: O,
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
_c.propTypes = {
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
const Wi = ({ item: e, isActive: t, isExpanded: n, isParent: r, position: a, onClick: i }) => {
  const s = [
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
      className: s,
      "aria-current": t ? "page" : void 0,
      "aria-expanded": r ? n : void 0,
      onClick: (c) => {
        r && (c.preventDefault(), i());
      },
      children: [
        /* @__PURE__ */ o.jsx("div", { className: `nav-indicator ${t ? "active-indicator" : ""}` }),
        /* @__PURE__ */ o.jsx("div", { className: "nav-content", children: /* @__PURE__ */ o.jsx("div", { className: "side-nav-text", children: e.title }) })
      ]
    }
  );
};
Wi.propTypes = {
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
const Yi = ({ items: e, activeItemId: t, activeIndex: n }) => {
  const [r, a] = ye(null), i = (c, u, f = !1) => c === 0 && !f ? "top" : c === u - 1 ? "bottom" : "middle", s = (c, u = !1) => c.map((f, d) => {
    var v;
    const h = !!((v = f.children) != null && v.length), g = t ? f.link === t : d === n, p = r === f.link, y = i(d, c.length, u);
    return /* @__PURE__ */ o.jsxs("li", { className: "nav-item-container", children: [
      /* @__PURE__ */ o.jsx(
        Wi,
        {
          item: f,
          isActive: g,
          isExpanded: p,
          isParent: h,
          position: y,
          onClick: () => {
            a(p ? null : f.link);
          }
        }
      ),
      h && p && /* @__PURE__ */ o.jsx("ul", { className: "nav-children", children: s(f.children, !0) })
    ] }, f.link);
  });
  return /* @__PURE__ */ o.jsx(
    "nav",
    {
      className: "side-nav",
      "aria-label": "Section Navigation",
      role: "navigation",
      children: /* @__PURE__ */ o.jsx("ul", { children: s(e) })
    }
  );
};
Yi.propTypes = {
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
Yi.defaultProps = {
  activeItemId: null,
  activeIndex: null
};
const Ec = ({ heading: e, description: t, children: n }) => {
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
Ec.propTypes = {
  heading: l.string.isRequired,
  description: l.string,
  children: l.node.isRequired
};
const Ui = ({ number: e }) => /* @__PURE__ */ o.jsxs("div", { className: "stepNumberWrapper", children: [
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
Ui.propTypes = {
  number: l.number.isRequired
};
const Hi = ({ step: e, stepNumber: t, isLast: n }) => /* @__PURE__ */ o.jsxs("div", { className: "stepItem", children: [
  /* @__PURE__ */ o.jsxs("div", { className: "stepNumberContainer", children: [
    /* @__PURE__ */ o.jsx(Ui, { number: t }),
    !n && /* @__PURE__ */ o.jsx("div", { className: "verticalBar" })
  ] }),
  /* @__PURE__ */ o.jsxs("div", { className: "stepContent", children: [
    /* @__PURE__ */ o.jsx("h3", { className: "stepHeading", children: e.heading }),
    /* @__PURE__ */ o.jsx("p", { className: "stepDescription", children: e.description })
  ] })
] });
Hi.propTypes = {
  step: l.shape({
    heading: l.string.isRequired,
    description: l.string.isRequired
  }).isRequired,
  stepNumber: l.number.isRequired,
  isLast: l.bool.isRequired
};
const Tc = ({ title: e, mainDescription: t, steps: n }) => /* @__PURE__ */ o.jsxs("div", { className: "processSteps", children: [
  /* @__PURE__ */ o.jsxs("div", { className: "header", children: [
    /* @__PURE__ */ o.jsx("h2", { className: "title", children: e }),
    /* @__PURE__ */ o.jsx("p", { className: "mainDescription", children: t })
  ] }),
  /* @__PURE__ */ o.jsx("div", { className: "stepsContainer", children: n.map((r, a) => /* @__PURE__ */ o.jsx(
    Hi,
    {
      step: r,
      stepNumber: a + 1,
      isLast: a === n.length - 1
    },
    a
  )) })
] });
Tc.propTypes = {
  title: l.string.isRequired,
  mainDescription: l.string.isRequired,
  steps: l.arrayOf(
    l.shape({
      heading: l.string.isRequired,
      description: l.string.isRequired
    })
  ).isRequired
};
const Cc = ({ variant: e = "default", children: t, className: n, ...r }) => {
  const s = ["usa-tag", e === "big" ? "usa-tag--big" : "", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx("span", { className: s, ...r, children: t });
};
Cc.propTypes = {
  /** The content of the tag */
  children: l.node.isRequired,
  /** The variant of the tag */
  variant: l.oneOf(["default", "big"]),
  /** Additional className to be applied to the tag */
  className: l.string
};
const Oc = ({
  variant: e = "default",
  buttonText: t = "Search",
  className: n,
  id: r,
  name: a = "search",
  placeholder: i,
  onSubmit: s,
  ...c
}) => {
  const d = ["usa-search", e === "big" ? "usa-search--big" : e === "small" ? "usa-search--small" : "", n].filter(Boolean).join(" "), h = (g) => {
    g.preventDefault(), s && s(g);
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
        placeholder: i,
        ...c
      }
    ),
    /* @__PURE__ */ o.jsx("button", { className: "usa-button", type: "submit", children: e === "small" ? /* @__PURE__ */ o.jsx(
      te,
      {
        icon: hc,
        className: "usa-search__submit-icon",
        "aria-hidden": "true"
      }
    ) : /* @__PURE__ */ o.jsx("span", { className: "usa-search__submit-text", children: t }) })
  ] }) });
};
Oc.propTypes = {
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
const kc = {
  prefix: "fab",
  iconName: "instagram",
  icon: [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
}, Sc = {
  prefix: "fab",
  iconName: "facebook",
  icon: [512, 512, [62e3], "f09a", "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]
}, Pc = {
  prefix: "fab",
  iconName: "twitter",
  icon: [512, 512, [], "f099", "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]
}, Ac = ({
  title: e,
  emailAddress: t,
  officePhone: n,
  informationPhone: r,
  relayServicePhone: a,
  socialMedia: i,
  officeDetails: s,
  className: c
}) => {
  const {
    facebook: u,
    twitter: f,
    bluesky: d,
    instagram: h
  } = i || {}, {
    address: g,
    room: p,
    city: y,
    state: v,
    zip: w,
    days: T,
    hours: _
  } = s || {};
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
                /* @__PURE__ */ o.jsx(te, { icon: uc, className: "contacts__button-icon" }),
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
      i && /* @__PURE__ */ o.jsxs("div", { className: "contacts__section", children: [
        /* @__PURE__ */ o.jsx("h3", { className: "contacts__heading", children: "Social Media" }),
        /* @__PURE__ */ o.jsxs("div", { className: "contacts__social-list", children: [
          u && /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(te, { icon: Sc, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "Facebook" })
            ] }),
            /* @__PURE__ */ o.jsx("a", { href: `https://facebook.com/${u}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: u })
          ] }),
          f && /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(te, { icon: Pc, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "X (Twitter)" })
            ] }),
            /* @__PURE__ */ o.jsx("a", { href: `https://twitter.com/${f}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: f })
          ] }),
          d && /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(te, { icon: nc, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "Bluesky" })
            ] }),
            /* @__PURE__ */ o.jsx("a", { href: `https://bsky.app/profile/${d}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: d })
          ] }),
          h && /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(te, { icon: kc, className: "contacts__icon" }),
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
              /* @__PURE__ */ o.jsx(te, { icon: rc, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "Address" })
            ] }),
            /* @__PURE__ */ o.jsxs("a", { href: `https://maps.google.com/?q=${g} ${y}, ${v} ${w}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: [
              g,
              /* @__PURE__ */ o.jsx("br", {}),
              p && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                p,
                /* @__PURE__ */ o.jsx("br", {})
              ] }),
              y,
              ", ",
              v,
              " ",
              w
            ] })
          ] }),
          _ && /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(te, { icon: mc, className: "contacts__icon" }),
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
Ac.propTypes = {
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
const Ic = ({
  title: e,
  subtitle: t,
  searchComponent: n,
  links: r = [],
  className: a,
  ...i
}) => {
  const s = "pgov-hero-homepage", c = [
    s,
    a
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs("div", { className: c, ...i, children: [
    /* @__PURE__ */ o.jsx("div", { className: `${s}__title-container`, children: /* @__PURE__ */ o.jsx("h1", { className: `${s}__title`, children: e }) }),
    /* @__PURE__ */ o.jsx("div", { className: `${s}__search-container`, children: n }),
    t && /* @__PURE__ */ o.jsx("div", { className: `${s}__subtitle-container`, children: /* @__PURE__ */ o.jsx("h2", { className: `${s}__subtitle`, children: t }) }),
    r.length > 0 && /* @__PURE__ */ o.jsx("div", { className: `${s}__links-container`, children: r.map((u, f) => /* @__PURE__ */ o.jsx(
      "a",
      {
        href: u.href,
        className: `${s}__link`,
        ...u.props,
        children: u.text
      },
      f
    )) })
  ] });
};
Ic.propTypes = {
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
const Fc = ({
  title: e,
  description: t,
  tags: n = [],
  image: r,
  actionButton: a,
  className: i,
  ...s
}) => {
  const c = "hero-global", u = be.useId(), f = [
    c,
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx(
    "section",
    {
      className: f,
      role: "banner",
      "aria-labelledby": u,
      ...s,
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
Fc.propTypes = {
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
var Vi = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Pt = /* @__PURE__ */ Vi.join(","), Gi = typeof Element > "u", Le = Gi ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, At = !Gi && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, It = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var a = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), i = a === "" || a === "true", s = i || n && t && e(t.parentNode);
  return s;
}, Dc = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, Xi = function(t, n, r) {
  if (It(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Pt));
  return n && Le.call(t, Pt) && a.unshift(t), a = a.filter(r), a;
}, Ki = function e(t, n, r) {
  for (var a = [], i = Array.from(t); i.length; ) {
    var s = i.shift();
    if (!It(s, !1))
      if (s.tagName === "SLOT") {
        var c = s.assignedElements(), u = c.length ? c : s.children, f = e(u, !0, r);
        r.flatten ? a.push.apply(a, f) : a.push({
          scopeParent: s,
          candidates: f
        });
      } else {
        var d = Le.call(s, Pt);
        d && r.filter(s) && (n || !t.includes(s)) && a.push(s);
        var h = s.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(s), g = !It(h, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
        if (h && g) {
          var p = e(h === !0 ? s.children : h.children, !0, r);
          r.flatten ? a.push.apply(a, p) : a.push({
            scopeParent: s,
            candidates: p
          });
        } else
          i.unshift.apply(i, s.children);
      }
  }
  return a;
}, Ji = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Re = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Dc(t)) && !Ji(t) ? 0 : t.tabIndex;
}, Lc = function(t, n) {
  var r = Re(t);
  return r < 0 && n && !Ji(t) ? 0 : r;
}, Mc = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Zi = function(t) {
  return t.tagName === "INPUT";
}, zc = function(t) {
  return Zi(t) && t.type === "hidden";
}, qc = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, $c = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, Bc = function(t) {
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
    } catch (s) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1;
    }
  var i = $c(a, t.form);
  return !i || i === t;
}, Wc = function(t) {
  return Zi(t) && t.type === "radio";
}, Yc = function(t) {
  return Wc(t) && !Bc(t);
}, Uc = function(t) {
  var n, r = t && At(t), a = (n = r) === null || n === void 0 ? void 0 : n.host, i = !1;
  if (r && r !== t) {
    var s, c, u;
    for (i = !!((s = a) !== null && s !== void 0 && (c = s.ownerDocument) !== null && c !== void 0 && c.contains(a) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !i && a; ) {
      var f, d, h;
      r = At(a), a = (f = r) === null || f === void 0 ? void 0 : f.host, i = !!((d = a) !== null && d !== void 0 && (h = d.ownerDocument) !== null && h !== void 0 && h.contains(a));
    }
  }
  return i;
}, Ca = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, a = n.height;
  return r === 0 && a === 0;
}, Hc = function(t, n) {
  var r = n.displayCheck, a = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var i = Le.call(t, "details>summary:first-of-type"), s = i ? t.parentElement : t;
  if (Le.call(s, "details:not([open]) *"))
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
    if (Uc(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return Ca(t);
  return !1;
}, Vc = function(t) {
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
  It(n) || zc(n) || Hc(n, t) || // For a details element with a summary, the summary element gets the focus
  qc(n) || Vc(n));
}, $n = function(t, n) {
  return !(Yc(n) || Re(n) < 0 || !Ft(t, n));
}, Gc = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Xc = function e(t) {
  var n = [], r = [];
  return t.forEach(function(a, i) {
    var s = !!a.scopeParent, c = s ? a.scopeParent : a, u = Lc(c, s), f = s ? e(a.candidates) : c;
    u === 0 ? s ? n.push.apply(n, f) : n.push(c) : r.push({
      documentOrder: i,
      tabIndex: u,
      item: a,
      isScope: s,
      content: f
    });
  }), r.sort(Mc).reduce(function(a, i) {
    return i.isScope ? a.push.apply(a, i.content) : a.push(i.content), a;
  }, []).concat(n);
}, Vt = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Ki([t], n.includeContainer, {
    filter: $n.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Gc
  }) : r = Xi(t, n.includeContainer, $n.bind(null, n)), Xc(r);
}, Qi = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Ki([t], n.includeContainer, {
    filter: Ft.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = Xi(t, n.includeContainer, Ft.bind(null, n)), r;
}, Se = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return Le.call(t, Pt) === !1 ? !1 : $n(n, t);
}, Kc = /* @__PURE__ */ Vi.concat("iframe").join(","), Et = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return Le.call(t, Kc) === !1 ? !1 : Ft(n, t);
};
const Jc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  focusable: Qi,
  getTabIndex: Re,
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
function Zc(e) {
  if (Array.isArray(e)) return Bn(e);
}
function Qc(e, t, n) {
  return (t = au(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function eu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function tu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ka(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Oa(Object(n), !0).forEach(function(r) {
      Qc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oa(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function nu(e) {
  return Zc(e) || eu(e) || iu(e) || tu();
}
function ru(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function au(e) {
  var t = ru(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function iu(e, t) {
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
}, su = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, ou = function(t) {
  return (t == null ? void 0 : t.key) === "Escape" || (t == null ? void 0 : t.key) === "Esc" || (t == null ? void 0 : t.keyCode) === 27;
}, tt = function(t) {
  return (t == null ? void 0 : t.key) === "Tab" || (t == null ? void 0 : t.keyCode) === 9;
}, lu = function(t) {
  return tt(t) && !t.shiftKey;
}, cu = function(t) {
  return tt(t) && t.shiftKey;
}, Pa = function(t) {
  return setTimeout(t, 0);
}, Je = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, r) : t;
}, wt = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, uu = [], fu = function(t, n) {
  var r = (n == null ? void 0 : n.document) || document, a = (n == null ? void 0 : n.trapStack) || uu, i = ka({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: lu,
    isKeyBackward: cu
  }, n), s = {
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
  }, c, u = function(x, b, k) {
    return x && x[b] !== void 0 ? x[b] : i[k || b];
  }, f = function(x, b) {
    var k = typeof (b == null ? void 0 : b.composedPath) == "function" ? b.composedPath() : void 0;
    return s.containerGroups.findIndex(function(z) {
      var D = z.container, L = z.tabbableNodes;
      return D.contains(x) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (k == null ? void 0 : k.includes(D)) || L.find(function(M) {
        return M === x;
      });
    });
  }, d = function(x) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, k = b.hasFallback, z = k === void 0 ? !1 : k, D = b.params, L = D === void 0 ? [] : D, M = i[x];
    if (typeof M == "function" && (M = M.apply(void 0, nu(L))), M === !0 && (M = void 0), !M) {
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
    if (x === void 0 || x && !Et(x, i.tabbableOptions))
      if (f(r.activeElement) >= 0)
        x = r.activeElement;
      else {
        var b = s.tabbableGroups[0], k = b && b.firstTabbableNode;
        x = k || d("fallbackFocus");
      }
    else x === null && (x = d("fallbackFocus"));
    if (!x)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return x;
  }, g = function() {
    if (s.containerGroups = s.containers.map(function(x) {
      var b = Vt(x, i.tabbableOptions), k = Qi(x, i.tabbableOptions), z = b.length > 0 ? b[0] : void 0, D = b.length > 0 ? b[b.length - 1] : void 0, L = k.find(function(R) {
        return Se(R);
      }), M = k.slice().reverse().find(function(R) {
        return Se(R);
      }), m = !!b.find(function(R) {
        return Re(R) > 0;
      });
      return {
        container: x,
        tabbableNodes: b,
        focusableNodes: k,
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
          var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, U = b.indexOf(S);
          return U < 0 ? q ? k.slice(k.indexOf(S) + 1).find(function(H) {
            return Se(H);
          }) : k.slice(0, k.indexOf(S)).reverse().find(function(H) {
            return Se(H);
          }) : b[U + (q ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(x) {
      return x.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !d("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(x) {
      return x.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, p = function(x) {
    var b = x.activeElement;
    if (b)
      return b.shadowRoot && b.shadowRoot.activeElement !== null ? p(b.shadowRoot) : b;
  }, y = function(x) {
    if (x !== !1 && x !== p(document)) {
      if (!x || !x.focus) {
        y(h());
        return;
      }
      x.focus({
        preventScroll: !!i.preventScroll
      }), s.mostRecentlyFocusedNode = x, su(x) && x.select();
    }
  }, v = function(x) {
    var b = d("setReturnFocus", {
      params: [x]
    });
    return b || (b === !1 ? !1 : x);
  }, w = function(x) {
    var b = x.target, k = x.event, z = x.isBackward, D = z === void 0 ? !1 : z;
    b = b || wt(k), g();
    var L = null;
    if (s.tabbableGroups.length > 0) {
      var M = f(b, k), m = M >= 0 ? s.containerGroups[M] : void 0;
      if (M < 0)
        D ? L = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : L = s.tabbableGroups[0].firstTabbableNode;
      else if (D) {
        var R = s.tabbableGroups.findIndex(function(K) {
          var B = K.firstTabbableNode;
          return b === B;
        });
        if (R < 0 && (m.container === b || Et(b, i.tabbableOptions) && !Se(b, i.tabbableOptions) && !m.nextTabbableNode(b, !1)) && (R = M), R >= 0) {
          var S = R === 0 ? s.tabbableGroups.length - 1 : R - 1, q = s.tabbableGroups[S];
          L = Re(b) >= 0 ? q.lastTabbableNode : q.lastDomTabbableNode;
        } else tt(k) || (L = m.nextTabbableNode(b, !1));
      } else {
        var U = s.tabbableGroups.findIndex(function(K) {
          var B = K.lastTabbableNode;
          return b === B;
        });
        if (U < 0 && (m.container === b || Et(b, i.tabbableOptions) && !Se(b, i.tabbableOptions) && !m.nextTabbableNode(b)) && (U = M), U >= 0) {
          var H = U === s.tabbableGroups.length - 1 ? 0 : U + 1, J = s.tabbableGroups[H];
          L = Re(b) >= 0 ? J.firstTabbableNode : J.firstDomTabbableNode;
        } else tt(k) || (L = m.nextTabbableNode(b));
      }
    } else
      L = d("fallbackFocus");
    return L;
  }, T = function(x) {
    var b = wt(x);
    if (!(f(b, x) >= 0)) {
      if (Je(i.clickOutsideDeactivates, x)) {
        c.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: i.returnFocusOnDeactivate
        });
        return;
      }
      Je(i.allowOutsideClick, x) || x.preventDefault();
    }
  }, _ = function(x) {
    var b = wt(x), k = f(b, x) >= 0;
    if (k || b instanceof Document)
      k && (s.mostRecentlyFocusedNode = b);
    else {
      x.stopImmediatePropagation();
      var z, D = !0;
      if (s.mostRecentlyFocusedNode)
        if (Re(s.mostRecentlyFocusedNode) > 0) {
          var L = f(s.mostRecentlyFocusedNode), M = s.containerGroups[L].tabbableNodes;
          if (M.length > 0) {
            var m = M.findIndex(function(R) {
              return R === s.mostRecentlyFocusedNode;
            });
            m >= 0 && (i.isKeyForward(s.recentNavEvent) ? m + 1 < M.length && (z = M[m + 1], D = !1) : m - 1 >= 0 && (z = M[m - 1], D = !1));
          }
        } else
          s.containerGroups.some(function(R) {
            return R.tabbableNodes.some(function(S) {
              return Re(S) > 0;
            });
          }) || (D = !1);
      else
        D = !1;
      D && (z = w({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: i.isKeyBackward(s.recentNavEvent)
      })), y(z || s.mostRecentlyFocusedNode || h());
    }
    s.recentNavEvent = void 0;
  }, E = function(x) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = x;
    var k = w({
      event: x,
      isBackward: b
    });
    k && (tt(x) && x.preventDefault(), y(k));
  }, O = function(x) {
    (i.isKeyForward(x) || i.isKeyBackward(x)) && E(x, i.isKeyBackward(x));
  }, j = function(x) {
    ou(x) && Je(i.escapeDeactivates, x) !== !1 && (x.preventDefault(), c.deactivate());
  }, G = function(x) {
    var b = wt(x);
    f(b, x) >= 0 || Je(i.clickOutsideDeactivates, x) || Je(i.allowOutsideClick, x) || (x.preventDefault(), x.stopImmediatePropagation());
  }, P = function() {
    if (s.active)
      return Sa.activateTrap(a, c), s.delayInitialFocusTimer = i.delayInitialFocus ? Pa(function() {
        y(h());
      }) : y(h()), r.addEventListener("focusin", _, !0), r.addEventListener("mousedown", T, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", T, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", G, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", O, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", j), c;
  }, A = function() {
    if (s.active)
      return r.removeEventListener("focusin", _, !0), r.removeEventListener("mousedown", T, !0), r.removeEventListener("touchstart", T, !0), r.removeEventListener("click", G, !0), r.removeEventListener("keydown", O, !0), r.removeEventListener("keydown", j), c;
  }, C = function(x) {
    var b = x.some(function(k) {
      var z = Array.from(k.removedNodes);
      return z.some(function(D) {
        return D === s.mostRecentlyFocusedNode;
      });
    });
    b && y(h());
  }, N = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(C) : void 0, Y = function() {
    N && (N.disconnect(), s.active && !s.paused && s.containers.map(function(x) {
      N.observe(x, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return c = {
    get active() {
      return s.active;
    },
    get paused() {
      return s.paused;
    },
    activate: function(x) {
      if (s.active)
        return this;
      var b = u(x, "onActivate"), k = u(x, "onPostActivate"), z = u(x, "checkCanFocusTrap");
      z || g(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = p(r), b == null || b();
      var D = function() {
        z && g(), P(), Y(), k == null || k();
      };
      return z ? (z(s.containers.concat()).then(D, D), this) : (D(), this);
    },
    deactivate: function(x) {
      if (!s.active)
        return this;
      var b = ka({
        onDeactivate: i.onDeactivate,
        onPostDeactivate: i.onPostDeactivate,
        checkCanReturnFocus: i.checkCanReturnFocus
      }, x);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, A(), s.active = !1, s.paused = !1, Y(), Sa.deactivateTrap(a, c);
      var k = u(b, "onDeactivate"), z = u(b, "onPostDeactivate"), D = u(b, "checkCanReturnFocus"), L = u(b, "returnFocus", "returnFocusOnDeactivate");
      k == null || k();
      var M = function() {
        Pa(function() {
          L && y(v(s.nodeFocusedBeforeActivation)), z == null || z();
        });
      };
      return L && D ? (D(v(s.nodeFocusedBeforeActivation)).then(M, M), this) : (M(), this);
    },
    pause: function(x) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, x)) : this;
    },
    unpause: function(x) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, x)) : this;
    },
    updateContainerElements: function(x) {
      var b = [].concat(x).filter(Boolean);
      return s.containers = b.map(function(k) {
        return typeof k == "string" ? r.querySelector(k) : k;
      }), s.active && g(), Y(), this;
    }
  }, Object.defineProperties(c, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(x, b) {
        if (s.paused === x)
          return this;
        if (s.paused = x, x) {
          var k = u(b, "onPause"), z = u(b, "onPostPause");
          k == null || k(), A(), Y(), z == null || z();
        } else {
          var D = u(b, "onUnpause"), L = u(b, "onPostUnpause");
          D == null || D(), g(), P(), Y(), L == null || L();
        }
        return this;
      }
    }
  }), c.updateContainerElements(t), c;
};
const du = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createFocusTrap: fu
}, Symbol.toStringTag, { value: "Module" })), mu = /* @__PURE__ */ ti(du), pu = /* @__PURE__ */ ti(Jc);
var Aa;
function hu() {
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
      N.enumerable = N.enumerable || !1, N.configurable = !0, "value" in N && (N.writable = !0), Object.defineProperty(P, y(N.key), N);
    }
  }
  function i(P, A, C) {
    return A && a(P.prototype, A), Object.defineProperty(P, "prototype", { writable: !1 }), P;
  }
  function s(P, A, C) {
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
    return (A = y(A)) in P ? Object.defineProperty(P, A, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : P[A] = C, P;
  }
  function y(P) {
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
  var w = be, T = mu, _ = T.createFocusTrap, E = pu, O = E.isFocusable, j = parseInt((t = (n = /^(\d+)\./.exec(w.version)) === null || n === void 0 ? void 0 : n[1]) !== null && t !== void 0 ? t : 0, 10), G = /* @__PURE__ */ function(P) {
    function A(C) {
      var N;
      r(this, A), N = s(this, A, [C]), p(N, "getNodeForOption", function(x) {
        var b, k = (b = this.internalOptions[x]) !== null && b !== void 0 ? b : this.originalOptions[x];
        if (typeof k == "function") {
          for (var z = arguments.length, D = new Array(z > 1 ? z - 1 : 0), L = 1; L < z; L++)
            D[L - 1] = arguments[L];
          k = k.apply(void 0, D);
        }
        if (k === !0 && (k = void 0), !k) {
          if (k === void 0 || k === !1)
            return k;
          throw new Error("`".concat(x, "` was specified but was not a node, or did not return a node"));
        }
        var M = k;
        if (typeof k == "string") {
          var m;
          if (M = (m = this.getDocument()) === null || m === void 0 ? void 0 : m.querySelector(k), !M)
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
    return h(A, P), i(A, [{
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
          var x = N.getReturnFocusNode(), b = !!// did the consumer allow it?
          (N.originalOptions.returnFocusOnDeactivate && // can we actually focus the node?
          x !== null && x !== void 0 && x.focus && // was there an outside click that allowed deactivation?
          (!N.outsideClick || // did the consumer allow deactivation when the outside node was clicked?
          N.outsideClick.allowDeactivation && // is the outside node NOT focusable (implying that it did NOT receive focus
          //  as a result of the click-through) -- in which case do NOT restore focus
          //  to `returnFocusNode` because focus should remain on the outside node
          !O(N.outsideClick.target, N.internalOptions.tabbableOptions))), k = N.internalOptions.preventScroll, z = k === void 0 ? !1 : k;
          b && x.focus({
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
          var Y = !N.active && this.props.active, W = N.active && !this.props.active, x = !N.paused && this.props.paused, b = N.paused && !this.props.paused;
          if (Y && (this.updatePreviousElement(), this.focusTrap.activate()), W) {
            this.deactivateTrap();
            return;
          }
          x && this.focusTrap.pause(), b && this.focusTrap.unpause();
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
          var W = function(k) {
            var z = N.props.containerElements;
            Y && (j >= 19 ? typeof Y.props.ref == "function" ? Y.props.ref(k) : Y.props.ref && (Y.props.ref.current = k) : typeof Y.ref == "function" ? Y.ref(k) : Y.ref && (Y.ref.current = k)), N.focusTrapElements = z || [k];
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
var gu = hu();
const es = ({
  heading: e,
  text: t,
  actionButton: n,
  onClick: r,
  className: a,
  children: i,
  media: s,
  mediaPosition: c = "left",
  mediaExdent: u = !1,
  mediaFirst: f = !1,
  mediaInset: d = !1,
  ...h
}) => {
  const p = [
    "usa-card",
    s && "usa-card--media",
    u && "usa-card--exdent",
    f && "usa-card--header-first",
    d && "usa-card--inset",
    a
  ].filter(Boolean).join(" "), y = n && r ? be.cloneElement(n, { onClick: r }) : n, v = () => s ? /* @__PURE__ */ o.jsx("div", { className: `usa-card__media ${u ? "usa-card__media--exdent" : ""}`, children: /* @__PURE__ */ o.jsx("div", { className: "usa-card__img", children: typeof s == "string" ? /* @__PURE__ */ o.jsx("img", { src: s, alt: "" }) : s }) }) : null;
  return /* @__PURE__ */ o.jsx("div", { className: p, ...h, children: /* @__PURE__ */ o.jsxs("div", { className: "usa-card__container", children: [
    s && v(),
    e && /* @__PURE__ */ o.jsx("div", { className: "usa-card__header", children: /* @__PURE__ */ o.jsx("h4", { className: "usa-card__heading", children: e }) }),
    /* @__PURE__ */ o.jsxs("div", { className: "usa-card__body", children: [
      t && /* @__PURE__ */ o.jsx("p", { children: t }),
      i
    ] }),
    n && /* @__PURE__ */ o.jsx("div", { className: "usa-card__footer", children: y })
  ] }) });
};
es.propTypes = {
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
const vu = ({
  isOpen: e = !1,
  onClose: t,
  onConfirm: n,
  heading: r,
  children: a,
  confirmButton: i,
  cancelButton: s,
  size: c = "default",
  forcedAction: u = !1,
  className: f,
  ariaLabelledBy: d,
  ariaDescribedBy: h,
  ...g
}) => {
  const p = nt(null), y = nt(null);
  ke(() => {
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
  }, [n]), E = i && be.cloneElement(i, {
    onClick: (N) => {
      i.props.onClick && i.props.onClick(N), _();
    },
    tabIndex: 0
    // Ensure button is focusable
  }), O = s && be.cloneElement(s, {
    onClick: (N) => {
      s.props.onClick && s.props.onClick(N), T();
    },
    tabIndex: 0
    // Ensure button is focusable
  }), j = (E || O) && /* @__PURE__ */ o.jsxs("div", { className: "usa-button-group", children: [
    E && /* @__PURE__ */ o.jsx("div", { className: "usa-button-group__item", children: E }),
    O && /* @__PURE__ */ o.jsx("div", { className: "usa-button-group__item", children: O })
  ] }), G = [
    "usa-modal",
    c === "large" && "usa-modal--lg",
    u && "usa-modal--forced-action",
    f
  ].filter(Boolean).join(" "), C = !!(E || O) || !u;
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
        gu.FocusTrap,
        {
          active: e,
          focusTrapOptions: {
            allowOutsideClick: !u,
            escapeDeactivates: !u,
            returnFocusOnDeactivate: !0,
            clickOutsideDeactivates: !u,
            initialFocus: () => {
              const N = y.current;
              if (!N) return !1;
              const Y = N.querySelector('button:not([disabled]):not([aria-hidden="true"])');
              if (Y)
                return Y;
              const W = N.querySelector('[tabindex="0"], input, select, textarea, button, a[href]');
              return W || N;
            },
            setReturnFocus: (N) => N,
            fallbackFocus: () => y.current ? (y.current.setAttribute("tabindex", "0"), y.current) : !1
          },
          children: /* @__PURE__ */ o.jsxs(
            "div",
            {
              ref: y,
              className: "usa-modal__container",
              tabIndex: C ? void 0 : 0,
              children: [
                /* @__PURE__ */ o.jsxs(
                  es,
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
                          children: /* @__PURE__ */ o.jsx(te, { icon: vc, className: "usa-icon" })
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
                      y.current && y.current.focus();
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
vu.propTypes = {
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
    for (let s = 1; s <= t; s++)
      yield { type: "page", value: s, isCurrent: s === e };
    return;
  }
  yield { type: "page", value: 1, isCurrent: e === 1 };
  const r = Math.floor((n - 3) / 2), a = Math.max(2, e - r), i = Math.min(t - 1, e + r);
  a > 2 && (yield { type: "ellipsis", value: "..." });
  for (let s = a; s <= i; s++)
    yield { type: "page", value: s, isCurrent: s === e };
  i < t - 1 && (yield { type: "ellipsis", value: "..." }), t > 1 && (yield { type: "page", value: t, isCurrent: e === t });
}
const bu = ({
  currentPage: e,
  totalPages: t,
  onPageChange: n,
  maxVisiblePages: r = 7,
  showEllipsis: a = !0,
  ariaLabel: i = "Pagination",
  previousText: s = "Previous",
  nextText: c = "Next",
  className: u,
  ...f
}) => {
  if (e < 1 || e > t || t < 1)
    return console.warn("Pagination: Invalid currentPage or totalPages"), null;
  const h = ["usa-pagination", u].filter(Boolean).join(" "), g = e > 1, p = e < t, y = (_) => {
    _ !== e && n && n(_);
  }, v = () => {
    g && y(e - 1);
  }, w = () => {
    p && y(e + 1);
  }, T = Array.from(
    a ? Ia(e, t, r) : Ia(e, t, t)
    // Show all pages
  );
  return /* @__PURE__ */ o.jsx(
    "nav",
    {
      "aria-label": i,
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
                  icon: bc,
                  className: "usa-pagination__icon usa-pagination__icon--left",
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ o.jsx("span", { className: "usa-pagination__link-text", children: s })
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
            onClick: () => y(_.value),
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
                  icon: qi,
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
bu.propTypes = {
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
  const i = ["pgov-font-size-display", a].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs("div", { className: i, children: [
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
  const n = ["pgov-font-families", t].filter(Boolean).join(" "), r = e || ts;
  return /* @__PURE__ */ o.jsx("div", { className: n, children: r.map((a, i) => /* @__PURE__ */ o.jsx(
    mr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    i
  )) });
}, ts = [
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
  families: ts,
  className: ""
};
const yr = ({ sizes: e, className: t }) => {
  const n = ["pgov-font-sizes", t].filter(Boolean).join(" "), r = e || ns;
  return /* @__PURE__ */ o.jsx("div", { className: n, children: r.map((a, i) => /* @__PURE__ */ o.jsx(
    pr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value,
      sizeInPx: a.sizeInPx
    },
    i
  )) });
}, ns = [
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
  sizes: ns,
  className: ""
};
const xr = ({ weights: e, className: t }) => {
  const n = ["pgov-font-weights", t].filter(Boolean).join(" "), r = e || rs;
  return /* @__PURE__ */ o.jsx("div", { className: n, children: r.map((a, i) => /* @__PURE__ */ o.jsx(
    hr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    i
  )) });
}, rs = [
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
  weights: rs,
  className: ""
};
const wr = ({ lineHeights: e, className: t }) => {
  const n = ["pgov-line-heights", t].filter(Boolean).join(" "), r = e || as;
  return /* @__PURE__ */ o.jsx("div", { className: n, children: r.map((a, i) => /* @__PURE__ */ o.jsx(
    gr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    i
  )) });
}, as = [
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
  lineHeights: as,
  className: ""
};
const Nr = ({ letterSpacings: e, className: t }) => {
  const n = ["pgov-letter-spacings", t].filter(Boolean).join(" "), r = e || is;
  return /* @__PURE__ */ o.jsx("div", { className: n, children: r.map((a, i) => /* @__PURE__ */ o.jsx(
    vr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    i
  )) });
}, is = [
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
  letterSpacings: is,
  className: ""
};
l.string.isRequired, l.string.isRequired, l.string.isRequired;
l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired;
l.string.isRequired, l.string.isRequired, l.string.isRequired;
l.string.isRequired, l.string.isRequired, l.string.isRequired;
l.string.isRequired, l.string.isRequired, l.string.isRequired;
const ss = ({
  showFontFamilies: e,
  showFontSizes: t,
  showFontWeights: n,
  showLineHeights: r,
  showLetterSpacings: a,
  className: i
}) => {
  const s = ["pgov-typography", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs("div", { className: s, "data-testid": "typography-container", children: [
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
ss.propTypes = {
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
ss.defaultProps = {
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
  }, i = a[n] || a.medium, { width: s, height: c } = i, u = {
    width: `${s}px`,
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
  className: i
}) => {
  const [s, c] = ye("");
  ke(() => {
    if (typeof window < "u" && t)
      try {
        const f = getComputedStyle(document.documentElement).getPropertyValue(t).trim();
        c(f);
      } catch (f) {
        console.error(`Error getting computed style for ${t}:`, f), c("Error");
      }
  }, [t]);
  const u = `pgov-color-swatch-details ${i || ""}`;
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
        s && !n && /* @__PURE__ */ o.jsx("div", { className: "pgov-color-swatch-hex", "aria-label": `Computed value: ${s}`, children: s }),
        !s && r && !n && /* @__PURE__ */ o.jsxs("div", { className: "pgov-color-swatch-hex", "aria-label": `Initial Hex value: ${r}`, children: [
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
  className: i
}) => {
  const s = `pgov-color-swatch-item ${i || ""}`;
  return /* @__PURE__ */ o.jsxs("div", { className: s, children: [
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
const os = ({
  colorVar: e,
  name: t,
  description: n,
  hexValue: r,
  size: a,
  orientation: i,
  className: s
}) => /* @__PURE__ */ o.jsx(
  _r,
  {
    colorVar: e,
    name: t,
    description: n,
    hexValue: r,
    size: a,
    orientation: i,
    className: s
  }
);
os.propTypes = {
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
os.defaultProps = {
  description: void 0,
  hexValue: void 0,
  size: "medium",
  orientation: "horizontal",
  className: ""
};
const ls = ({ name: e, variable: t, value: n, pixels: r }) => /* @__PURE__ */ o.jsxs("div", { style: {
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
ls.propTypes = {
  name: l.string.isRequired,
  variable: l.string.isRequired,
  value: l.string.isRequired,
  pixels: l.string.isRequired
};
const Zf = () => {
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
    ls,
    {
      name: t.name,
      variable: t.variable,
      value: t.value,
      pixels: t.pixels
    },
    n
  )) });
}, Qf = () => /* @__PURE__ */ o.jsxs("div", { style: {
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
  return cs(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function se(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ve(e) {
  var t;
  return (t = (cs(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function cs(e) {
  return Gt() ? e instanceof Node || e instanceof se(e).Node : !1;
}
function ae(e) {
  return Gt() ? e instanceof Element || e instanceof se(e).Element : !1;
}
function oe(e) {
  return Gt() ? e instanceof HTMLElement || e instanceof se(e).HTMLElement : !1;
}
function Dt(e) {
  return !Gt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof se(e).ShadowRoot;
}
function ct(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = ue(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(a);
}
function yu(e) {
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
  const t = Tr(), n = ae(e) ? ue(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function xu(e) {
  let t = Oe(e);
  for (; oe(t) && !Ue(t); ) {
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
function ue(e) {
  return se(e).getComputedStyle(e);
}
function Kt(e) {
  return ae(e) ? {
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
    ve(e)
  );
  return Dt(t) ? t.host : t;
}
function us(e) {
  const t = Oe(e);
  return Ue(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : oe(t) && ct(t) ? t : us(t);
}
function it(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = us(e), i = a === ((r = e.ownerDocument) == null ? void 0 : r.body), s = se(a);
  if (i) {
    const c = Wn(s);
    return t.concat(s, s.visualViewport || [], ct(a) ? a : [], c && n ? it(c) : []);
  }
  return t.concat(a, it(a, [], n));
}
function Wn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const He = Math.min, Ae = Math.max, Lt = Math.round, Nt = Math.floor, he = (e) => ({
  x: e,
  y: e
}), wu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Nu = {
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
function fs(e) {
  return e === "x" ? "y" : "x";
}
function Cr(e) {
  return e === "y" ? "height" : "width";
}
function Ie(e) {
  return ["top", "bottom"].includes(Me(e)) ? "y" : "x";
}
function Or(e) {
  return fs(Ie(e));
}
function ju(e, t, n) {
  n === void 0 && (n = !1);
  const r = ft(e), a = Or(e), i = Cr(a);
  let s = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Mt(s)), [s, Mt(s)];
}
function Ru(e) {
  const t = Mt(e);
  return [Un(e), t, Un(t)];
}
function Un(e) {
  return e.replace(/start|end/g, (t) => Nu[t]);
}
function _u(e, t, n) {
  const r = ["left", "right"], a = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? a : r : t ? r : a;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function Eu(e, t, n, r) {
  const a = ft(e);
  let i = _u(Me(e), n === "start", r);
  return a && (i = i.map((s) => s + "-" + a), t && (i = i.concat(i.map(Un)))), i;
}
function Mt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => wu[t]);
}
function Tu(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ds(e) {
  return typeof e != "number" ? Tu(e) : {
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
function Cu() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function Ou() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function ms() {
  return /apple/i.test(navigator.vendor);
}
function ku() {
  return Cu().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function Su() {
  return Ou().includes("jsdom/");
}
const Fa = "data-floating-ui-focusable", Pu = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
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
function Au(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function _e(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function ps(e) {
  return oe(e) && e.matches(Pu);
}
function Iu(e) {
  if (!e || Su()) return !0;
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}
function Fu(e) {
  return e ? e.hasAttribute(Fa) ? e : e.querySelector("[" + Fa + "]") || e : null;
}
function st(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
var ge = typeof document < "u" ? Za : ke;
const Du = {
  ...F
};
function jt(e) {
  const t = F.useRef(e);
  return ge(() => {
    t.current = e;
  }), t;
}
const Lu = Du.useInsertionEffect, Mu = Lu || ((e) => e());
function Tt(e) {
  const t = F.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Mu(() => {
    t.current = e;
  }), F.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
      r[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
const hs = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function gs(e, t) {
  const n = Vt(e, hs()), r = n.length;
  if (r === 0) return;
  const a = Hn(_e(e)), i = n.indexOf(a), s = i === -1 ? t === 1 ? 0 : r - 1 : i + t;
  return n[s];
}
function zu(e) {
  return gs(_e(e).body, 1) || e;
}
function qu(e) {
  return gs(_e(e).body, -1) || e;
}
function mn(e, t) {
  const n = t || e.currentTarget, r = e.relatedTarget;
  return !r || !qt(n, r);
}
function $u(e) {
  Vt(e, hs()).forEach((n) => {
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
  const i = Ie(t), s = Or(t), c = Cr(s), u = Me(t), f = i === "y", d = r.x + r.width / 2 - a.width / 2, h = r.y + r.height / 2 - a.height / 2, g = r[c] / 2 - a[c] / 2;
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
      p[s] -= g * (n && f ? -1 : 1);
      break;
    case "end":
      p[s] += g * (n && f ? -1 : 1);
      break;
  }
  return p;
}
const Bu = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: a = "absolute",
    middleware: i = [],
    platform: s
  } = n, c = i.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: d,
    y: h
  } = La(f, r, u), g = r, p = {}, y = 0;
  for (let v = 0; v < c.length; v++) {
    const {
      name: w,
      fn: T
    } = c[v], {
      x: _,
      y: E,
      data: O,
      reset: j
    } = await T({
      x: d,
      y: h,
      initialPlacement: r,
      placement: g,
      strategy: a,
      middlewareData: p,
      rects: f,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = _ ?? d, h = E ?? h, p = {
      ...p,
      [w]: {
        ...p[w],
        ...O
      }
    }, j && y <= 50 && (y++, typeof j == "object" && (j.placement && (g = j.placement), j.rects && (f = j.rects === !0 ? await s.getElementRects({
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
async function vs(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: a,
    platform: i,
    rects: s,
    elements: c,
    strategy: u
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: h = "floating",
    altBoundary: g = !1,
    padding: p = 0
  } = ut(t, e), y = ds(p), w = c[g ? h === "floating" ? "reference" : "floating" : h], T = zt(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: f,
    rootBoundary: d,
    strategy: u
  })), _ = h === "floating" ? {
    x: r,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), O = await (i.isElement == null ? void 0 : i.isElement(E)) ? await (i.getScale == null ? void 0 : i.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, j = zt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: _,
    offsetParent: E,
    strategy: u
  }) : _);
  return {
    top: (T.top - j.top + y.top) / O.y,
    bottom: (j.bottom - T.bottom + y.bottom) / O.y,
    left: (T.left - j.left + y.left) / O.x,
    right: (j.right - T.right + y.right) / O.x
  };
}
const Wu = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: a,
      rects: i,
      platform: s,
      elements: c,
      middlewareData: u
    } = t, {
      element: f,
      padding: d = 0
    } = ut(e, t) || {};
    if (f == null)
      return {};
    const h = ds(d), g = {
      x: n,
      y: r
    }, p = Or(a), y = Cr(p), v = await s.getDimensions(f), w = p === "y", T = w ? "top" : "left", _ = w ? "bottom" : "right", E = w ? "clientHeight" : "clientWidth", O = i.reference[y] + i.reference[p] - g[p] - i.floating[y], j = g[p] - i.reference[p], G = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let P = G ? G[E] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(G))) && (P = c.floating[E] || i.floating[y]);
    const A = O / 2 - j / 2, C = P / 2 - v[y] / 2 - 1, N = He(h[T], C), Y = He(h[_], C), W = N, x = P - v[y] - Y, b = P / 2 - v[y] / 2 + A, k = Yn(W, b, x), z = !u.arrow && ft(a) != null && b !== k && i.reference[y] / 2 - (b < W ? N : Y) - v[y] / 2 < 0, D = z ? b < W ? b - W : b - x : 0;
    return {
      [p]: g[p] + D,
      data: {
        [p]: k,
        centerOffset: b - k - D,
        ...z && {
          alignmentOffset: D
        }
      },
      reset: z
    };
  }
}), Yu = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: a,
        middlewareData: i,
        rects: s,
        initialPlacement: c,
        platform: u,
        elements: f
      } = t, {
        mainAxis: d = !0,
        crossAxis: h = !0,
        fallbackPlacements: g,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: v = !0,
        ...w
      } = ut(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const T = Me(a), _ = Ie(c), E = Me(c) === c, O = await (u.isRTL == null ? void 0 : u.isRTL(f.floating)), j = g || (E || !v ? [Mt(c)] : Ru(c)), G = y !== "none";
      !g && G && j.push(...Eu(c, v, y, O));
      const P = [c, ...j], A = await vs(t, w), C = [];
      let N = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && C.push(A[T]), h) {
        const k = ju(a, s, O);
        C.push(A[k[0]], A[k[1]]);
      }
      if (N = [...N, {
        placement: a,
        overflows: C
      }], !C.every((k) => k <= 0)) {
        var Y, W;
        const k = (((Y = i.flip) == null ? void 0 : Y.index) || 0) + 1, z = P[k];
        if (z) {
          var x;
          const L = h === "alignment" ? _ !== Ie(z) : !1, M = ((x = N[0]) == null ? void 0 : x.overflows[0]) > 0;
          if (!L || M)
            return {
              data: {
                index: k,
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
              var b;
              const L = (b = N.filter((M) => {
                if (G) {
                  const m = Ie(M.placement);
                  return m === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  m === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((m) => m > 0).reduce((m, R) => m + R, 0)]).sort((M, m) => M[1] - m[1])[0]) == null ? void 0 : b[0];
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
async function Uu(e, t) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), s = Me(n), c = ft(n), u = Ie(n) === "y", f = ["left", "top"].includes(s) ? -1 : 1, d = i && u ? -1 : 1, h = ut(t, e);
  let {
    mainAxis: g,
    crossAxis: p,
    alignmentAxis: y
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return c && typeof y == "number" && (p = c === "end" ? y * -1 : y), u ? {
    x: p * d,
    y: g * f
  } : {
    x: g * f,
    y: p * d
  };
}
const Hu = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: a,
        y: i,
        placement: s,
        middlewareData: c
      } = t, u = await Uu(t, e);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : {
        x: a + u.x,
        y: i + u.y,
        data: {
          ...u,
          placement: s
        }
      };
    }
  };
}, Vu = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: a
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
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
      }, d = await vs(t, u), h = Ie(Me(a)), g = fs(h);
      let p = f[g], y = f[h];
      if (i) {
        const w = g === "y" ? "top" : "left", T = g === "y" ? "bottom" : "right", _ = p + d[w], E = p - d[T];
        p = Yn(_, p, E);
      }
      if (s) {
        const w = h === "y" ? "top" : "left", T = h === "y" ? "bottom" : "right", _ = y + d[w], E = y - d[T];
        y = Yn(_, y, E);
      }
      const v = c.fn({
        ...t,
        [g]: p,
        [h]: y
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [g]: i,
            [h]: s
          }
        }
      };
    }
  };
};
function bs(e) {
  const t = ue(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = oe(e), i = a ? e.offsetWidth : n, s = a ? e.offsetHeight : r, c = Lt(n) !== i || Lt(r) !== s;
  return c && (n = i, r = s), {
    width: n,
    height: r,
    $: c
  };
}
function kr(e) {
  return ae(e) ? e : e.contextElement;
}
function We(e) {
  const t = kr(e);
  if (!oe(t))
    return he(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: i
  } = bs(t);
  let s = (i ? Lt(n.width) : n.width) / r, c = (i ? Lt(n.height) : n.height) / a;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const Gu = /* @__PURE__ */ he(0);
function ys(e) {
  const t = se(e);
  return !Tr() || !t.visualViewport ? Gu : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Xu(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== se(e) ? !1 : t;
}
function ze(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), i = kr(e);
  let s = he(1);
  t && (r ? ae(r) && (s = We(r)) : s = We(e));
  const c = Xu(i, n, r) ? ys(i) : he(0);
  let u = (a.left + c.x) / s.x, f = (a.top + c.y) / s.y, d = a.width / s.x, h = a.height / s.y;
  if (i) {
    const g = se(i), p = r && ae(r) ? se(r) : r;
    let y = g, v = Wn(y);
    for (; v && r && p !== y; ) {
      const w = We(v), T = v.getBoundingClientRect(), _ = ue(v), E = T.left + (v.clientLeft + parseFloat(_.paddingLeft)) * w.x, O = T.top + (v.clientTop + parseFloat(_.paddingTop)) * w.y;
      u *= w.x, f *= w.y, d *= w.x, h *= w.y, u += E, f += O, y = se(v), v = Wn(y);
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
  return t ? t.left + n : ze(ve(e)).left + n;
}
function xs(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Sr(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: a,
    y: i
  };
}
function Ku(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: a
  } = e;
  const i = a === "fixed", s = ve(r), c = t ? Xt(t.floating) : !1;
  if (r === s || c && i)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = he(1);
  const d = he(0), h = oe(r);
  if ((h || !h && !i) && ((Ge(r) !== "body" || ct(s)) && (u = Kt(r)), oe(r))) {
    const p = ze(r);
    f = We(r), d.x = p.x + r.clientLeft, d.y = p.y + r.clientTop;
  }
  const g = s && !h && !i ? xs(s, u, !0) : he(0);
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - u.scrollLeft * f.x + d.x + g.x,
    y: n.y * f.y - u.scrollTop * f.y + d.y + g.y
  };
}
function Ju(e) {
  return Array.from(e.getClientRects());
}
function Zu(e) {
  const t = ve(e), n = Kt(e), r = e.ownerDocument.body, a = Ae(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Ae(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Sr(e);
  const c = -n.scrollTop;
  return ue(r).direction === "rtl" && (s += Ae(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
function Qu(e, t) {
  const n = se(e), r = ve(e), a = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, c = 0, u = 0;
  if (a) {
    i = a.width, s = a.height;
    const f = Tr();
    (!f || f && t === "fixed") && (c = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: c,
    y: u
  };
}
function ef(e, t) {
  const n = ze(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, i = oe(e) ? We(e) : he(1), s = e.clientWidth * i.x, c = e.clientHeight * i.y, u = a * i.x, f = r * i.y;
  return {
    width: s,
    height: c,
    x: u,
    y: f
  };
}
function Ma(e, t, n) {
  let r;
  if (t === "viewport")
    r = Qu(e, n);
  else if (t === "document")
    r = Zu(ve(e));
  else if (ae(t))
    r = ef(t, n);
  else {
    const a = ys(e);
    r = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return zt(r);
}
function ws(e, t) {
  const n = Oe(e);
  return n === t || !ae(n) || Ue(n) ? !1 : ue(n).position === "fixed" || ws(n, t);
}
function tf(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = it(e, [], !1).filter((c) => ae(c) && Ge(c) !== "body"), a = null;
  const i = ue(e).position === "fixed";
  let s = i ? Oe(e) : e;
  for (; ae(s) && !Ue(s); ) {
    const c = ue(s), u = Er(s);
    !u && c.position === "fixed" && (a = null), (i ? !u && !a : !u && c.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || ct(s) && !u && ws(e, s)) ? r = r.filter((d) => d !== s) : a = c, s = Oe(s);
  }
  return t.set(e, r), r;
}
function nf(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const s = [...n === "clippingAncestors" ? Xt(t) ? [] : tf(t, this._c) : [].concat(n), r], c = s[0], u = s.reduce((f, d) => {
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
function rf(e) {
  const {
    width: t,
    height: n
  } = bs(e);
  return {
    width: t,
    height: n
  };
}
function af(e, t, n) {
  const r = oe(t), a = ve(t), i = n === "fixed", s = ze(e, !0, i, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = he(0);
  function f() {
    u.x = Sr(a);
  }
  if (r || !r && !i)
    if ((Ge(t) !== "body" || ct(a)) && (c = Kt(t)), r) {
      const p = ze(t, !0, i, t);
      u.x = p.x + t.clientLeft, u.y = p.y + t.clientTop;
    } else a && f();
  i && !r && a && f();
  const d = a && !r && !i ? xs(a, c) : he(0), h = s.left + c.scrollLeft - u.x - d.x, g = s.top + c.scrollTop - u.y - d.y;
  return {
    x: h,
    y: g,
    width: s.width,
    height: s.height
  };
}
function pn(e) {
  return ue(e).position === "static";
}
function za(e, t) {
  if (!oe(e) || ue(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ve(e) === n && (n = n.ownerDocument.body), n;
}
function Ns(e, t) {
  const n = se(e);
  if (Xt(e))
    return n;
  if (!oe(e)) {
    let a = Oe(e);
    for (; a && !Ue(a); ) {
      if (ae(a) && !pn(a))
        return a;
      a = Oe(a);
    }
    return n;
  }
  let r = za(e, t);
  for (; r && yu(r) && pn(r); )
    r = za(r, t);
  return r && Ue(r) && pn(r) && !Er(r) ? n : r || xu(e) || n;
}
const sf = async function(e) {
  const t = this.getOffsetParent || Ns, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: af(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function of(e) {
  return ue(e).direction === "rtl";
}
const lf = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ku,
  getDocumentElement: ve,
  getClippingRect: nf,
  getOffsetParent: Ns,
  getElementRects: sf,
  getClientRects: Ju,
  getDimensions: rf,
  getScale: We,
  isElement: ae,
  isRTL: of
};
function js(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function cf(e, t) {
  let n = null, r;
  const a = ve(e);
  function i() {
    var c;
    clearTimeout(r), (c = n) == null || c.disconnect(), n = null;
  }
  function s(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), i();
    const f = e.getBoundingClientRect(), {
      left: d,
      top: h,
      width: g,
      height: p
    } = f;
    if (c || t(), !g || !p)
      return;
    const y = Nt(h), v = Nt(a.clientWidth - (d + g)), w = Nt(a.clientHeight - (h + p)), T = Nt(d), E = {
      rootMargin: -y + "px " + -v + "px " + -w + "px " + -T + "px",
      threshold: Ae(0, He(1, u)) || 1
    };
    let O = !0;
    function j(G) {
      const P = G[0].intersectionRatio;
      if (P !== u) {
        if (!O)
          return s();
        P ? s(!1, P) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !js(f, e.getBoundingClientRect()) && s(), O = !1;
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
  return s(!0), i;
}
function uf(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, f = kr(e), d = a || i ? [...f ? it(f) : [], ...it(t)] : [];
  d.forEach((T) => {
    a && T.addEventListener("scroll", n, {
      passive: !0
    }), i && T.addEventListener("resize", n);
  });
  const h = f && c ? cf(f, n) : null;
  let g = -1, p = null;
  s && (p = new ResizeObserver((T) => {
    let [_] = T;
    _ && _.target === f && p && (p.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var E;
      (E = p) == null || E.observe(t);
    })), n();
  }), f && !u && p.observe(f), p.observe(t));
  let y, v = u ? ze(e) : null;
  u && w();
  function w() {
    const T = ze(e);
    v && !js(v, T) && n(), v = T, y = requestAnimationFrame(w);
  }
  return n(), () => {
    var T;
    d.forEach((_) => {
      a && _.removeEventListener("scroll", n), i && _.removeEventListener("resize", n);
    }), h == null || h(), (T = p) == null || T.disconnect(), p = null, u && cancelAnimationFrame(y);
  };
}
const ff = Hu, df = Vu, mf = Yu, qa = Wu, pf = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = {
    platform: lf,
    ...n
  }, i = {
    ...a.platform,
    _c: r
  };
  return Bu(e, t, {
    ...a,
    platform: i
  });
};
var Ct = typeof document < "u" ? Za : ke;
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
      const i = a[r];
      if (!(i === "_owner" && e.$$typeof) && !$t(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Rs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function $a(e, t) {
  const n = Rs(e);
  return Math.round(t * n) / n;
}
function hn(e) {
  const t = F.useRef(e);
  return Ct(() => {
    t.current = e;
  }), t;
}
function hf(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: a,
    elements: {
      reference: i,
      floating: s
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
  const [y, v] = F.useState(null), [w, T] = F.useState(null), _ = F.useCallback((L) => {
    L !== G.current && (G.current = L, v(L));
  }, []), E = F.useCallback((L) => {
    L !== P.current && (P.current = L, T(L));
  }, []), O = i || y, j = s || w, G = F.useRef(null), P = F.useRef(null), A = F.useRef(d), C = u != null, N = hn(u), Y = hn(a), W = hn(f), x = F.useCallback(() => {
    if (!G.current || !P.current)
      return;
    const L = {
      placement: t,
      strategy: n,
      middleware: g
    };
    Y.current && (L.platform = Y.current), pf(G.current, P.current, L).then((M) => {
      const m = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: W.current !== !1
      };
      b.current && !$t(A.current, m) && (A.current = m, Qa.flushSync(() => {
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
  const b = F.useRef(!1);
  Ct(() => (b.current = !0, () => {
    b.current = !1;
  }), []), Ct(() => {
    if (O && (G.current = O), j && (P.current = j), O && j) {
      if (N.current)
        return N.current(O, j, x);
      x();
    }
  }, [O, j, x, N, C]);
  const k = F.useMemo(() => ({
    reference: G,
    floating: P,
    setReference: _,
    setFloating: E
  }), [_, E]), z = F.useMemo(() => ({
    reference: O,
    floating: j
  }), [O, j]), D = F.useMemo(() => {
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
      ...Rs(z.floating) >= 1.5 && {
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
    refs: k,
    elements: z,
    floatingStyles: D
  }), [d, x, k, z, D]);
}
const gf = (e) => {
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
}, vf = (e, t) => ({
  ...ff(e),
  options: [e, t]
}), bf = (e, t) => ({
  ...df(e),
  options: [e, t]
}), yf = (e, t) => ({
  ...mf(e),
  options: [e, t]
}), xf = (e, t) => ({
  ...gf(e),
  options: [e, t]
}), wf = "data-floating-ui-focusable", Ba = "active", Wa = "selected", Nf = {
  ...F
};
let Ya = !1, jf = 0;
const Ua = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + jf++
);
function Rf() {
  const [e, t] = F.useState(() => Ya ? Ua() : void 0);
  return ge(() => {
    e == null && t(Ua());
  }, []), F.useEffect(() => {
    Ya = !0;
  }, []), e;
}
const _f = Nf.useId, Pr = _f || Rf;
let Vn;
process.env.NODE_ENV !== "production" && (Vn = /* @__PURE__ */ new Set());
function Ef() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const a = "Floating UI: " + n.join(" ");
  if (!((e = Vn) != null && e.has(a))) {
    var i;
    (i = Vn) == null || i.add(a), console.error(a);
  }
}
function Tf() {
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
const Cf = /* @__PURE__ */ F.createContext(null), Of = /* @__PURE__ */ F.createContext(null), Ar = () => {
  var e;
  return ((e = F.useContext(Cf)) == null ? void 0 : e.id) || null;
}, _s = () => F.useContext(Of);
function Jt(e) {
  return "data-floating-ui-" + e;
}
function ce(e) {
  e.current !== -1 && (clearTimeout(e.current), e.current = -1);
}
const Ha = /* @__PURE__ */ Jt("safe-polygon");
function gn(e, t, n) {
  if (n && !st(n))
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
function kf(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: a,
    events: i,
    elements: s
  } = e, {
    enabled: c = !0,
    delay: u = 0,
    handleClose: f = null,
    mouseOnly: d = !1,
    restMs: h = 0,
    move: g = !0
  } = t, p = _s(), y = Ar(), v = jt(f), w = jt(u), T = jt(n), _ = jt(h), E = F.useRef(), O = F.useRef(-1), j = F.useRef(), G = F.useRef(-1), P = F.useRef(!0), A = F.useRef(!1), C = F.useRef(() => {
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
      M || (ce(O), ce(G), P.current = !0, N.current = !1);
    }
    return i.on("openchange", D), () => {
      i.off("openchange", D);
    };
  }, [c, i]), F.useEffect(() => {
    if (!c || !v.current || !n) return;
    function D(M) {
      Y() && r(!1, M, "hover");
    }
    const L = _e(s.floating).documentElement;
    return L.addEventListener("mouseleave", D), () => {
      L.removeEventListener("mouseleave", D);
    };
  }, [s.floating, n, r, c, v, Y]);
  const W = F.useCallback(function(D, L, M) {
    L === void 0 && (L = !0), M === void 0 && (M = "hover");
    const m = gn(w.current, "close", E.current);
    m && !j.current ? (ce(O), O.current = window.setTimeout(() => r(!1, D, M), m)) : L && (ce(O), r(!1, D, M));
  }, [w, r]), x = Tt(() => {
    C.current(), j.current = void 0;
  }), b = Tt(() => {
    if (A.current) {
      const D = _e(s.floating).body;
      D.style.pointerEvents = "", D.removeAttribute(Ha), A.current = !1;
    }
  }), k = Tt(() => a.current.openEvent ? ["click", "mousedown"].includes(a.current.openEvent.type) : !1);
  F.useEffect(() => {
    if (!c) return;
    function D(S) {
      if (ce(O), P.current = !1, d && !st(E.current) || vn(_.current) > 0 && !gn(w.current, "open"))
        return;
      const q = gn(w.current, "open", E.current);
      q ? O.current = window.setTimeout(() => {
        T.current || r(!0, S, "hover");
      }, q) : n || r(!0, S, "hover");
    }
    function L(S) {
      if (k()) {
        b();
        return;
      }
      C.current();
      const q = _e(s.floating);
      if (ce(G), N.current = !1, v.current && a.current.floatingContext) {
        n || ce(O), j.current = v.current({
          ...a.current.floatingContext,
          tree: p,
          x: S.clientX,
          y: S.clientY,
          onClose() {
            b(), x(), k() || W(S, !0, "safe-polygon");
          }
        });
        const H = j.current;
        q.addEventListener("mousemove", H), C.current = () => {
          q.removeEventListener("mousemove", H);
        };
        return;
      }
      (E.current === "touch" ? !qt(s.floating, S.relatedTarget) : !0) && W(S);
    }
    function M(S) {
      k() || a.current.floatingContext && (v.current == null || v.current({
        ...a.current.floatingContext,
        tree: p,
        x: S.clientX,
        y: S.clientY,
        onClose() {
          b(), x(), k() || W(S);
        }
      })(S));
    }
    function m() {
      ce(O);
    }
    function R(S) {
      k() || W(S, !1);
    }
    if (ae(s.domReference)) {
      const S = s.domReference, q = s.floating;
      return n && S.addEventListener("mouseleave", M), g && S.addEventListener("mousemove", D, {
        once: !0
      }), S.addEventListener("mouseenter", D), S.addEventListener("mouseleave", L), q && (q.addEventListener("mouseleave", M), q.addEventListener("mouseenter", m), q.addEventListener("mouseleave", R)), () => {
        n && S.removeEventListener("mouseleave", M), g && S.removeEventListener("mousemove", D), S.removeEventListener("mouseenter", D), S.removeEventListener("mouseleave", L), q && (q.removeEventListener("mouseleave", M), q.removeEventListener("mouseenter", m), q.removeEventListener("mouseleave", R));
      };
    }
  }, [s, c, e, d, g, W, x, b, r, n, T, p, w, v, a, k, _]), ge(() => {
    var D;
    if (c && n && (D = v.current) != null && D.__options.blockPointerEvents && Y()) {
      A.current = !0;
      const M = s.floating;
      if (ae(s.domReference) && M) {
        var L;
        const m = _e(s.floating).body;
        m.setAttribute(Ha, "");
        const R = s.domReference, S = p == null || (L = p.nodesRef.current.find((q) => q.id === y)) == null || (L = L.context) == null ? void 0 : L.elements.floating;
        return S && (S.style.pointerEvents = ""), m.style.pointerEvents = "none", R.style.pointerEvents = "auto", M.style.pointerEvents = "auto", () => {
          m.style.pointerEvents = "", R.style.pointerEvents = "", M.style.pointerEvents = "";
        };
      }
    }
  }, [c, n, y, s, p, v, Y]), ge(() => {
    n || (E.current = void 0, N.current = !1, x(), b());
  }, [n, x, b]), F.useEffect(() => () => {
    x(), ce(O), ce(G), b();
  }, [c, s.domReference, x, b]);
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
        d && !st(E.current) || n || vn(_.current) === 0 || N.current && L.movementX ** 2 + L.movementY ** 2 < 2 || (ce(G), E.current === "touch" ? m() : (N.current = !0, G.current = window.setTimeout(m, vn(_.current))));
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
function Sf(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const Es = {
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
  ge(() => {
    ms() && a("button");
  }, []);
  const i = {
    ref: n,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: r,
    "aria-hidden": r ? void 0 : !0,
    [Jt("focus-guard")]: "",
    style: Es
  };
  return /* @__PURE__ */ o.jsx("span", {
    ...t,
    ...i
  });
}), Ts = /* @__PURE__ */ F.createContext(null), Ga = /* @__PURE__ */ Jt("portal");
function Pf(e) {
  e === void 0 && (e = {});
  const {
    id: t,
    root: n
  } = e, r = Pr(), a = If(), [i, s] = F.useState(null), c = F.useRef(null);
  return ge(() => () => {
    i == null || i.remove(), queueMicrotask(() => {
      c.current = null;
    });
  }, [i]), ge(() => {
    if (!r || c.current) return;
    const u = t ? document.getElementById(t) : null;
    if (!u) return;
    const f = document.createElement("div");
    f.id = r, f.setAttribute(Ga, ""), u.appendChild(f), c.current = f, s(f);
  }, [t, r]), ge(() => {
    if (n === null || !r || c.current) return;
    let u = n || (a == null ? void 0 : a.portalNode);
    u && !ae(u) && (u = u.current), u = u || document.body;
    let f = null;
    t && (f = document.createElement("div"), f.id = t, u.appendChild(f));
    const d = document.createElement("div");
    d.id = r, d.setAttribute(Ga, ""), u = f || u, u.appendChild(d), c.current = d, s(d);
  }, [t, n, r, a]), i;
}
function Af(e) {
  const {
    children: t,
    id: n,
    root: r,
    preserveTabOrder: a = !0
  } = e, i = Pf({
    id: n,
    root: r
  }), [s, c] = F.useState(null), u = F.useRef(null), f = F.useRef(null), d = F.useRef(null), h = F.useRef(null), g = s == null ? void 0 : s.modal, p = s == null ? void 0 : s.open, y = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!s && // Guards are only for non-modal focus management.
    !s.modal && // Don't render if unmount is transitioning.
    s.open && a && !!(r || i)
  );
  return F.useEffect(() => {
    if (!i || !a || g)
      return;
    function v(w) {
      i && mn(w) && (w.type === "focusin" ? Da : $u)(i);
    }
    return i.addEventListener("focusin", v, !0), i.addEventListener("focusout", v, !0), () => {
      i.removeEventListener("focusin", v, !0), i.removeEventListener("focusout", v, !0);
    };
  }, [i, a, g]), F.useEffect(() => {
    i && (p || Da(i));
  }, [p, i]), /* @__PURE__ */ o.jsxs(Ts.Provider, {
    value: F.useMemo(() => ({
      preserveTabOrder: a,
      beforeOutsideRef: u,
      afterOutsideRef: f,
      beforeInsideRef: d,
      afterInsideRef: h,
      portalNode: i,
      setFocusManagerState: c
    }), [a, i]),
    children: [y && i && /* @__PURE__ */ o.jsx(Va, {
      "data-type": "outside",
      ref: u,
      onFocus: (v) => {
        if (mn(v, i)) {
          var w;
          (w = d.current) == null || w.focus();
        } else {
          const T = s ? s.domReference : null, _ = qu(T);
          _ == null || _.focus();
        }
      }
    }), y && i && /* @__PURE__ */ o.jsx("span", {
      "aria-owns": i.id,
      style: Es
    }), i && /* @__PURE__ */ Qa.createPortal(t, i), y && i && /* @__PURE__ */ o.jsx(Va, {
      "data-type": "outside",
      ref: f,
      onFocus: (v) => {
        if (mn(v, i)) {
          var w;
          (w = h.current) == null || w.focus();
        } else {
          const T = s ? s.domReference : null, _ = zu(T);
          _ == null || _.focus(), s != null && s.closeOnFocusOut && (s == null || s.onOpenChange(!1, v.nativeEvent, "focus-out"));
        }
      }
    })]
  });
}
const If = () => F.useContext(Ts);
function Xa(e) {
  return oe(e.target) && e.target.tagName === "BUTTON";
}
function Ff(e) {
  return oe(e.target) && e.target.tagName === "A";
}
function Ka(e) {
  return ps(e);
}
function Df(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: a,
    elements: {
      domReference: i
    }
  } = e, {
    enabled: s = !0,
    event: c = "click",
    toggle: u = !0,
    ignoreMouse: f = !1,
    keyboardHandlers: d = !0,
    stickIfOpen: h = !0
  } = t, g = F.useRef(), p = F.useRef(!1), y = F.useMemo(() => ({
    onPointerDown(v) {
      g.current = v.pointerType;
    },
    onMouseDown(v) {
      const w = g.current;
      v.button === 0 && c !== "click" && (st(w, !0) && f || (n && u && (!(a.current.openEvent && h) || a.current.openEvent.type === "mousedown") ? r(!1, v.nativeEvent, "click") : (v.preventDefault(), r(!0, v.nativeEvent, "click"))));
    },
    onClick(v) {
      const w = g.current;
      if (c === "mousedown" && g.current) {
        g.current = void 0;
        return;
      }
      st(w, !0) && f || (n && u && (!(a.current.openEvent && h) || a.current.openEvent.type === "click") ? r(!1, v.nativeEvent, "click") : r(!0, v.nativeEvent, "click"));
    },
    onKeyDown(v) {
      g.current = void 0, !(v.defaultPrevented || !d || Xa(v)) && (v.key === " " && !Ka(i) && (v.preventDefault(), p.current = !0), !Ff(v) && v.key === "Enter" && r(!(n && u), v.nativeEvent, "click"));
    },
    onKeyUp(v) {
      v.defaultPrevented || !d || Xa(v) || Ka(i) || v.key === " " && p.current && (p.current = !1, r(!(n && u), v.nativeEvent, "click"));
    }
  }), [a, i, c, f, d, r, n, h, u]);
  return F.useMemo(() => s ? {
    reference: y
  } : {}, [s, y]);
}
function Lf(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, a = Pr(), i = F.useRef({}), [s] = F.useState(() => Tf()), c = Ar() != null;
  if (process.env.NODE_ENV !== "production") {
    const p = r.reference;
    p && !ae(p) && Ef("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [u, f] = F.useState(r.reference), d = Tt((p, y, v) => {
    i.current.openEvent = p ? y : void 0, s.emit("openchange", {
      open: p,
      event: y,
      reason: v,
      nested: c
    }), n == null || n(p, y, v);
  }), h = F.useMemo(() => ({
    setPositionReference: f
  }), []), g = F.useMemo(() => ({
    reference: u || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [u, r.reference, r.floating]);
  return F.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: d,
    elements: g,
    events: s,
    floatingId: a,
    refs: h
  }), [t, d, g, s, a, h]);
}
function Mf(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Lf({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, a = r.elements, [i, s] = F.useState(null), [c, u] = F.useState(null), d = (a == null ? void 0 : a.domReference) || i, h = F.useRef(null), g = _s();
  ge(() => {
    d && (h.current = d);
  }, [d]);
  const p = hf({
    ...e,
    elements: {
      ...a,
      ...c && {
        reference: c
      }
    }
  }), y = F.useCallback((E) => {
    const O = ae(E) ? {
      getBoundingClientRect: () => E.getBoundingClientRect(),
      getClientRects: () => E.getClientRects(),
      contextElement: E
    } : E;
    u(O), p.refs.setReference(O);
  }, [p.refs]), v = F.useCallback((E) => {
    (ae(E) || E === null) && (h.current = E, s(E)), (ae(p.refs.reference.current) || p.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    E !== null && !ae(E)) && p.refs.setReference(E);
  }, [p.refs]), w = F.useMemo(() => ({
    ...p.refs,
    setReference: v,
    setPositionReference: y,
    domReference: h
  }), [p.refs, v, y]), T = F.useMemo(() => ({
    ...p.elements,
    domReference: d
  }), [p.elements, d]), _ = F.useMemo(() => ({
    ...p,
    ...r,
    refs: w,
    elements: T,
    nodeId: t
  }), [p, w, T, t, r]);
  return ge(() => {
    r.dataRef.current.floatingContext = _;
    const E = g == null ? void 0 : g.nodesRef.current.find((O) => O.id === t);
    E && (E.context = _);
  }), F.useMemo(() => ({
    ...p,
    context: _,
    refs: w,
    elements: T
  }), [p, w, T, _]);
}
function yn() {
  return ku() && ms();
}
function zf(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    events: a,
    dataRef: i,
    elements: s
  } = e, {
    enabled: c = !0,
    visibleOnly: u = !0
  } = t, f = F.useRef(!1), d = F.useRef(-1), h = F.useRef(!0);
  F.useEffect(() => {
    if (!c) return;
    const p = se(s.domReference);
    function y() {
      !n && oe(s.domReference) && s.domReference === Hn(_e(s.domReference)) && (f.current = !0);
    }
    function v() {
      h.current = !0;
    }
    function w() {
      h.current = !1;
    }
    return p.addEventListener("blur", y), yn() && (p.addEventListener("keydown", v, !0), p.addEventListener("pointerdown", w, !0)), () => {
      p.removeEventListener("blur", y), yn() && (p.removeEventListener("keydown", v, !0), p.removeEventListener("pointerdown", w, !0));
    };
  }, [s.domReference, n, c]), F.useEffect(() => {
    if (!c) return;
    function p(y) {
      let {
        reason: v
      } = y;
      (v === "reference-press" || v === "escape-key") && (f.current = !0);
    }
    return a.on("openchange", p), () => {
      a.off("openchange", p);
    };
  }, [a, c]), F.useEffect(() => () => {
    ce(d);
  }, []);
  const g = F.useMemo(() => ({
    onMouseLeave() {
      f.current = !1;
    },
    onFocus(p) {
      if (f.current) return;
      const y = Au(p.nativeEvent);
      if (u && ae(y)) {
        if (yn() && !p.relatedTarget) {
          if (!h.current && !ps(y))
            return;
        } else if (!Iu(y))
          return;
      }
      r(!0, p.nativeEvent, "focus");
    },
    onBlur(p) {
      f.current = !1;
      const y = p.relatedTarget, v = p.nativeEvent, w = ae(y) && y.hasAttribute(Jt("focus-guard")) && y.getAttribute("data-type") === "outside";
      d.current = window.setTimeout(() => {
        var T;
        const _ = Hn(s.domReference ? s.domReference.ownerDocument : document);
        !y && _ === s.domReference || qt((T = i.current.floatingContext) == null ? void 0 : T.refs.floating.current, _) || qt(s.domReference, _) || w || r(!1, v, "focus");
      });
    }
  }), [i, s.domReference, r, u]);
  return F.useMemo(() => c ? {
    reference: g
  } : {}, [c, g]);
}
function xn(e, t, n) {
  const r = /* @__PURE__ */ new Map(), a = n === "item";
  let i = e;
  if (a && e) {
    const {
      [Ba]: s,
      [Wa]: c,
      ...u
    } = e;
    i = u;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [wf]: ""
    },
    ...i,
    ...t.map((s) => {
      const c = s ? s[n] : null;
      return typeof c == "function" ? e ? c(e) : null : c;
    }).concat(e).reduce((s, c) => (c && Object.entries(c).forEach((u) => {
      let [f, d] = u;
      if (!(a && [Ba, Wa].includes(f)))
        if (f.indexOf("on") === 0) {
          if (r.has(f) || r.set(f, []), typeof d == "function") {
            var h;
            (h = r.get(f)) == null || h.push(d), s[f] = function() {
              for (var g, p = arguments.length, y = new Array(p), v = 0; v < p; v++)
                y[v] = arguments[v];
              return (g = r.get(f)) == null ? void 0 : g.map((w) => w(...y)).find((w) => w !== void 0);
            };
          }
        } else
          s[f] = d;
    }), s), {})
  };
}
function qf(e) {
  e === void 0 && (e = []);
  const t = e.map((c) => c == null ? void 0 : c.reference), n = e.map((c) => c == null ? void 0 : c.floating), r = e.map((c) => c == null ? void 0 : c.item), a = F.useCallback(
    (c) => xn(c, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = F.useCallback(
    (c) => xn(c, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), s = F.useCallback(
    (c) => xn(c, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return F.useMemo(() => ({
    getReferenceProps: a,
    getFloatingProps: i,
    getItemProps: s
  }), [a, i, s]);
}
const $f = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function Bf(e, t) {
  var n, r;
  t === void 0 && (t = {});
  const {
    open: a,
    elements: i,
    floatingId: s
  } = e, {
    enabled: c = !0,
    role: u = "dialog"
  } = t, f = Pr(), d = ((n = i.domReference) == null ? void 0 : n.id) || f, h = F.useMemo(() => {
    var _;
    return ((_ = Fu(i.floating)) == null ? void 0 : _.id) || s;
  }, [i.floating, s]), g = (r = $f.get(u)) != null ? r : u, y = Ar() != null, v = F.useMemo(() => g === "tooltip" || u === "label" ? {
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
    ...g === "menu" && y && {
      role: "menuitem"
    },
    ...u === "select" && {
      "aria-autocomplete": "none"
    },
    ...u === "combobox" && {
      "aria-autocomplete": "list"
    }
  }, [g, h, y, a, d, u]), w = F.useMemo(() => {
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
      selected: O
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
          "aria-selected": E && O
        };
      case "combobox":
        return {
          ...j,
          "aria-selected": O
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
function Wf(e, t, n) {
  n === void 0 && (n = !0);
  let r = e.filter((i) => {
    var s;
    return i.parentId === t && ((s = i.context) == null ? void 0 : s.open);
  }), a = r;
  for (; a.length; )
    a = n ? e.filter((i) => {
      var s;
      return (s = a) == null ? void 0 : s.some((c) => {
        var u;
        return i.parentId === c.id && ((u = i.context) == null ? void 0 : u.open);
      });
    }) : e, r = r.concat(a);
  return r;
}
function Ja(e, t) {
  const [n, r] = e;
  let a = !1;
  const i = t.length;
  for (let s = 0, c = i - 1; s < i; c = s++) {
    const [u, f] = t[s] || [0, 0], [d, h] = t[c] || [0, 0];
    f >= r != h >= r && n <= (d - u) * (r - f) / (h - f) + u && (a = !a);
  }
  return a;
}
function Yf(e, t) {
  return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height;
}
function Uf(e) {
  e === void 0 && (e = {});
  const {
    buffer: t = 0.5,
    blockPointerEvents: n = !1,
    requireIntent: r = !0
  } = e;
  let a, i = !1, s = null, c = null, u = performance.now();
  function f(h, g) {
    const p = performance.now(), y = p - u;
    if (s === null || c === null || y === 0)
      return s = h, c = g, u = p, null;
    const v = h - s, w = g - c, _ = Math.sqrt(v * v + w * w) / y;
    return s = h, c = g, u = p, _;
  }
  const d = (h) => {
    let {
      x: g,
      y: p,
      placement: y,
      elements: v,
      onClose: w,
      nodeId: T,
      tree: _
    } = h;
    return function(O) {
      function j() {
        clearTimeout(a), w();
      }
      if (clearTimeout(a), !v.domReference || !v.floating || y == null || g == null || p == null)
        return;
      const {
        clientX: G,
        clientY: P
      } = O, A = [G, P], C = Sf(O), N = O.type === "mouseleave", Y = bn(v.floating, C), W = bn(v.domReference, C), x = v.domReference.getBoundingClientRect(), b = v.floating.getBoundingClientRect(), k = y.split("-")[0], z = g > b.right - b.width / 2, D = p > b.bottom - b.height / 2, L = Yf(A, x), M = b.width > x.width, m = b.height > x.height, R = (M ? x : b).left, S = (M ? x : b).right, q = (m ? x : b).top, U = (m ? x : b).bottom;
      if (Y && (i = !0, !N))
        return;
      if (W && (i = !1), W && !N) {
        i = !0;
        return;
      }
      if (N && ae(O.relatedTarget) && bn(v.floating, O.relatedTarget) || _ && Wf(_.nodesRef.current, T).some((K) => {
        let {
          context: B
        } = K;
        return B == null ? void 0 : B.open;
      }))
        return;
      if (k === "top" && p >= x.bottom - 1 || k === "bottom" && p <= x.top + 1 || k === "left" && g >= x.right - 1 || k === "right" && g <= x.left + 1)
        return j();
      let H = [];
      switch (k) {
        case "top":
          H = [[R, x.top + 1], [R, b.bottom - 1], [S, b.bottom - 1], [S, x.top + 1]];
          break;
        case "bottom":
          H = [[R, b.top + 1], [R, x.bottom - 1], [S, x.bottom - 1], [S, b.top + 1]];
          break;
        case "left":
          H = [[b.right - 1, U], [b.right - 1, q], [x.left + 1, q], [x.left + 1, U]];
          break;
        case "right":
          H = [[x.right - 1, U], [x.right - 1, q], [b.left + 1, q], [b.left + 1, U]];
          break;
      }
      function J(K) {
        let [B, X] = K;
        switch (k) {
          case "top": {
            const Z = [M ? B + t / 2 : z ? B + t * 4 : B - t * 4, X + t + 1], re = [M ? B - t / 2 : z ? B + t * 4 : B - t * 4, X + t + 1], $ = [[b.left, z || M ? b.bottom - t : b.top], [b.right, z ? M ? b.bottom - t : b.top : b.bottom - t]];
            return [Z, re, ...$];
          }
          case "bottom": {
            const Z = [M ? B + t / 2 : z ? B + t * 4 : B - t * 4, X - t], re = [M ? B - t / 2 : z ? B + t * 4 : B - t * 4, X - t], $ = [[b.left, z || M ? b.top + t : b.bottom], [b.right, z ? M ? b.top + t : b.bottom : b.top + t]];
            return [Z, re, ...$];
          }
          case "left": {
            const Z = [B + t + 1, m ? X + t / 2 : D ? X + t * 4 : X - t * 4], re = [B + t + 1, m ? X - t / 2 : D ? X + t * 4 : X - t * 4];
            return [...[[D || m ? b.right - t : b.left, b.top], [D ? m ? b.right - t : b.left : b.right - t, b.bottom]], Z, re];
          }
          case "right": {
            const Z = [B - t, m ? X + t / 2 : D ? X + t * 4 : X - t * 4], re = [B - t, m ? X - t / 2 : D ? X + t * 4 : X - t * 4], $ = [[D || m ? b.left + t : b.right, b.top], [D ? m ? b.left + t : b.right : b.left + t, b.bottom]];
            return [Z, re, ...$];
          }
        }
      }
      if (!Ja([G, P], H)) {
        if (i && !L)
          return j();
        if (!N && r) {
          const K = f(O.clientX, O.clientY);
          if (K !== null && K < 0.1)
            return j();
        }
        Ja([G, P], J([g, p])) ? !i && r && (a = window.setTimeout(j, 40)) : j();
      }
    };
  };
  return d.__options = {
    blockPointerEvents: n
  }, d;
}
const Hf = ({
  children: e,
  content: t,
  position: n = "top",
  theme: r = "dark",
  showArrow: a = !0,
  className: i = "",
  isPopup: s = !1,
  triggerOnClick: c = !1
}) => {
  var b, k;
  const [u, f] = ye(!1), d = nt(null), { x: h, y: g, strategy: p, refs: y, context: v, middlewareData: w, placement: T } = Mf({
    open: u,
    onOpenChange: f,
    placement: n,
    middleware: [
      vf(8),
      yf(),
      bf({ padding: 8 }),
      ...a ? [xf({ element: d })] : []
    ],
    whileElementsMounted: uf
  }), _ = kf(v, {
    move: !1,
    handleClose: Uf(),
    enabled: !c
  }), E = Df(v, {
    enabled: c
  }), O = zf(v), j = Bf(v, { role: "tooltip" }), { getReferenceProps: G, getFloatingProps: P } = qf([
    _,
    O,
    j,
    ...c ? [E] : []
  ]), A = (b = w.arrow) == null ? void 0 : b.x, C = (k = w.arrow) == null ? void 0 : k.y, N = {
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
  }, [W, x] = ye(!1);
  return ke(() => (x(!0), () => x(!1)), []), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    be.cloneElement(
      e,
      {
        ref: y.setReference,
        ...G()
      }
    ),
    W && u && /* @__PURE__ */ o.jsx(Af, { children: /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: y.setFloating,
        className: `tooltip__body tooltip__body--${r} ${s ? "tooltip__body--popup" : ""} ${i}`,
        style: {
          position: p,
          top: g ?? 0,
          left: h ?? 0,
          zIndex: 1e3,
          pointerEvents: s ? "auto" : "none"
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
Hf.propTypes = {
  children: l.node.isRequired,
  content: l.node.isRequired,
  position: l.oneOf(["top", "right", "bottom", "left"]),
  theme: l.oneOf(["dark", "light"]),
  showArrow: l.bool,
  className: l.string,
  isPopup: l.bool,
  triggerOnClick: l.bool
};
const Cs = ({
  type: e = "info",
  heading: t,
  children: n,
  slim: r = !1,
  noIcon: a = !1,
  className: i = ""
}) => {
  const s = [
    "alert",
    `alert--${e}`,
    r && "alert--slim",
    a && "alert--no-icon",
    i
  ].filter(Boolean).join(" "), c = () => {
    switch (e) {
      case "info":
        return _a;
      case "warning":
        return xc;
      case "success":
        return lc;
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
      className: s,
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
Cs.propTypes = {
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
Cs.defaultProps = {
  type: "info",
  heading: void 0,
  slim: !1,
  noIcon: !1,
  className: ""
};
const Vf = ({
  name: e,
  title: t,
  description: n,
  options: r,
  selectedValues: a = [],
  onChange: i,
  tiled: s = !1,
  required: c = !1,
  errorMessage: u,
  className: f
}) => {
  const d = c && u, h = [
    "usa-fieldset",
    "checkbox-group",
    s ? "checkbox-group--tiled" : "",
    d ? "checkbox-group--error" : "",
    f
  ].filter(Boolean).join(" "), g = (p, y) => {
    let v;
    y ? v = [...a, p] : v = a.filter((w) => w !== p), i(v);
  };
  return /* @__PURE__ */ o.jsxs("fieldset", { className: h, children: [
    /* @__PURE__ */ o.jsxs("legend", { className: "usa-legend", children: [
      t,
      c && /* @__PURE__ */ o.jsx("span", { className: "checkbox-required-asterisk", children: " *" })
    ] }),
    n && /* @__PURE__ */ o.jsx("p", { className: "checkbox-description", children: n }),
    d && /* @__PURE__ */ o.jsx("p", { className: "checkbox-error-message", children: u }),
    /* @__PURE__ */ o.jsx("div", { className: "checkbox-options-wrapper", children: r.map((p) => {
      const { value: y, labelText: v, labelDescription: w, disabled: T } = p, _ = a.includes(y), E = `${e}-${y}`, O = [
        "usa-checkbox",
        T ? "usa-checkbox--disabled" : ""
      ].filter(Boolean).join(" "), j = [
        "usa-checkbox__input",
        s ? "usa-checkbox__input--tile" : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ o.jsxs("div", { className: O, children: [
        /* @__PURE__ */ o.jsx(
          "input",
          {
            className: j,
            type: "checkbox",
            id: E,
            name: e,
            value: y,
            checked: _,
            onChange: (G) => g(y, G.target.checked),
            disabled: T
          }
        ),
        /* @__PURE__ */ o.jsxs("label", { className: "usa-checkbox__label", htmlFor: E, children: [
          v,
          w && /* @__PURE__ */ o.jsx("span", { className: "usa-checkbox__label-description", children: w })
        ] })
      ] }, y);
    }) })
  ] });
};
Vf.propTypes = {
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
const ed = () => /* @__PURE__ */ o.jsxs(
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
), Gf = ({
  id: e,
  label: t,
  description: n,
  state: r = "default",
  size: a = "default",
  disabled: i = !1,
  value: s,
  onChange: c,
  prefixIcon: u,
  suffixContent: f,
  pattern: d,
  errorMessage: h,
  className: g,
  ...p
}) => {
  const y = [
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
    i ? "usa-input-wrapper--disabled" : ""
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
          className: y,
          disabled: i,
          value: s,
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
Gf.propTypes = {
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
const Os = ({
  label: e,
  status: t,
  showLabel: n = !0,
  showCounter: r = !1,
  smallCounter: a = !1,
  centered: i = !1,
  number: s
}) => {
  const c = "usa-step-indicator__segment", u = `${c} ${c}--${t}`;
  return /* @__PURE__ */ o.jsxs("li", { className: u, "aria-current": t === "current" ? "true" : void 0, children: [
    r && /* @__PURE__ */ o.jsx("span", { className: "usa-step-indicator__counter", children: /* @__PURE__ */ o.jsx("span", { className: "usa-step-indicator__counter-inner", children: s }) }),
    n && /* @__PURE__ */ o.jsxs("span", { className: "usa-step-indicator__segment-label", children: [
      e,
      t === "complete" && /* @__PURE__ */ o.jsx("span", { className: "usa-sr-only", children: "completed" }),
      t === "not-complete" && /* @__PURE__ */ o.jsx("span", { className: "usa-sr-only", children: "not completed" })
    ] })
  ] });
};
Os.propTypes = {
  label: l.string.isRequired,
  status: l.oneOf(["complete", "current", "not-complete"]).isRequired,
  showLabel: l.bool,
  showCounter: l.bool,
  smallCounter: l.bool,
  centered: l.bool,
  number: l.number.isRequired
};
const Xf = ({
  steps: e,
  currentStep: t,
  title: n,
  variant: r = "default",
  showLabels: a = !0,
  showCounters: i = !1,
  centered: s = !1,
  smallCounters: c = !1,
  className: u = "",
  ...f
}) => {
  const d = "usa-step-indicator", h = a ? "" : `${d}--no-labels`, g = i ? `${d}--counters` : "", p = c ? `${d}--counters-sm` : "", y = s ? `${d}--center` : "", v = r !== "default" ? `${d}--${r}` : "", w = [
    d,
    h,
    g,
    p,
    y,
    v,
    u
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs("div", { className: w, variant: r, ...f, children: [
    /* @__PURE__ */ o.jsx("ol", { className: "usa-step-indicator__segments", children: e.map((T, _) => /* @__PURE__ */ o.jsx(
      Os,
      {
        label: T.label,
        status: Kf(_, t - 1),
        showLabel: a,
        showCounter: i,
        smallCounter: c,
        centered: s,
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
        /* @__PURE__ */ o.jsx(te, { icon: sc, className: "usa-step-indicator__heading-icon" }),
        /* @__PURE__ */ o.jsx("span", { className: "usa-step-indicator__heading-text", children: n })
      ] })
    ] }) })
  ] });
};
function Kf(e, t) {
  return e < t ? "complete" : e === t ? "current" : "not-complete";
}
Xf.propTypes = {
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
export {
  Cs as Alert,
  sr as Banner,
  dr as Breadcrumbs,
  qn as Button,
  Vf as Checkbox,
  os as ColorSwatch,
  Ac as Contacts,
  ed as ExternalLinkIcon,
  fr as Footer,
  cr as Header,
  Fc as HeroGlobal,
  Ic as HeroHomepage,
  _c as LanguageSelector,
  vu as Modal,
  Bi as PageTemplate,
  bu as Pagination,
  Tc as ProcessSteps,
  Oc as Search,
  Yi as SideNav,
  ur as SkipNav,
  ls as SpacingDisplay,
  Qf as SpacingExamples,
  Zf as SpacingTokens,
  Xf as StepIndicator,
  Ec as SummaryBox,
  Cc as Tag,
  Gf as TextInput,
  Hf as Tooltip,
  ss as Typography
};
