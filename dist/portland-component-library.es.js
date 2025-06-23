import * as P from "react";
import be, { useState as Ee, useRef as nt, useEffect as Ie, useCallback as mt, useLayoutEffect as Ha } from "react";
import * as Va from "react-dom";
function Ns(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ga(e) {
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
var Pr;
function js() {
  if (Pr) return Xe;
  Pr = 1;
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
var Ar;
function Rs() {
  return Ar || (Ar = 1, process.env.NODE_ENV !== "production" && function() {
    function e(m) {
      if (m == null) return null;
      if (typeof m == "function")
        return m.$$typeof === R ? null : m.displayName || m.name || null;
      if (typeof m == "string") return m;
      switch (m) {
        case v:
          return "Fragment";
        case T:
          return "Profiler";
        case w:
          return "StrictMode";
        case N:
          return "Suspense";
        case X:
          return "SuspenseList";
        case U:
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
          case C:
            var j = m.render;
            return m = m.displayName, m || (m = j.displayName || j.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
          case M:
            return j = m.displayName || null, j !== null ? j : e(m.type) || "Memo";
          case L:
            j = m._payload, m = m._init;
            try {
              return e(m(j));
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
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var k = j.error, z = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return k.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          z
        ), t(m);
      }
    }
    function r(m) {
      if (m === v) return "<>";
      if (typeof m == "object" && m !== null && m.$$typeof === L)
        return "<...>";
      try {
        var j = e(m);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var m = W.A;
      return m === null ? null : m.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(m) {
      if (B.call(m, "key")) {
        var j = Object.getOwnPropertyDescriptor(m, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return m.key !== void 0;
    }
    function c(m, j) {
      function k() {
        O || (O = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      k.isReactWarning = !0, Object.defineProperty(m, "key", {
        get: k,
        configurable: !0
      });
    }
    function u() {
      var m = e(this.type);
      return D[m] || (D[m] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), m = this.props.ref, m !== void 0 ? m : null;
    }
    function f(m, j, k, z, Y, H, J, K) {
      return k = H.ref, m = {
        $$typeof: h,
        type: m,
        key: j,
        props: H,
        _owner: Y
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(m, "ref", {
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
    function d(m, j, k, z, Y, H, J, K) {
      var $ = j.children;
      if ($ !== void 0)
        if (z)
          if (x($)) {
            for (z = 0; z < $.length; z++)
              p($[z]);
            Object.freeze && Object.freeze($);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p($);
      if (B.call(j, "key")) {
        $ = e(m);
        var G = Object.keys(j).filter(function(ne) {
          return ne !== "key";
        });
        z = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", F[$ + z] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          $,
          G,
          $
        ), F[$ + z] = !0);
      }
      if ($ = null, k !== void 0 && (n(k), $ = "" + k), s(j) && (n(j.key), $ = "" + j.key), "key" in j) {
        k = {};
        for (var Z in j)
          Z !== "key" && (k[Z] = j[Z]);
      } else k = j;
      return $ && c(
        k,
        typeof m == "function" ? m.displayName || m.name || "Unknown" : m
      ), f(
        m,
        $,
        H,
        Y,
        a(),
        k,
        J,
        K
      );
    }
    function p(m) {
      typeof m == "object" && m !== null && m.$$typeof === h && m._store && (m._store.validated = 1);
    }
    var g = be, h = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), E = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), U = Symbol.for("react.activity"), R = Symbol.for("react.client.reference"), W = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, x = Array.isArray, b = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(m) {
        return m();
      }
    };
    var O, D = {}, A = g["react-stack-bottom-frame"].bind(
      g,
      i
    )(), I = b(r(i)), F = {};
    Ke.Fragment = v, Ke.jsx = function(m, j, k, z, Y) {
      var H = 1e4 > W.recentlyCreatedOwnerStacks++;
      return d(
        m,
        j,
        k,
        !1,
        z,
        Y,
        H ? Error("react-stack-top-frame") : A,
        H ? b(r(m)) : I
      );
    }, Ke.jsxs = function(m, j, k, z, Y) {
      var H = 1e4 > W.recentlyCreatedOwnerStacks++;
      return d(
        m,
        j,
        k,
        !0,
        z,
        Y,
        H ? Error("react-stack-top-frame") : A,
        H ? b(r(m)) : I
      );
    };
  }()), Ke;
}
var Ir;
function Es() {
  return Ir || (Ir = 1, process.env.NODE_ENV === "production" ? pt.exports = js() : pt.exports = Rs()), pt.exports;
}
var o = Es(), ht = { exports: {} }, gt = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fr;
function Ts() {
  if (Fr) return Q;
  Fr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function E(N) {
    if (typeof N == "object" && N !== null) {
      var X = N.$$typeof;
      switch (X) {
        case t:
          switch (N = N.type, N) {
            case u:
            case f:
            case r:
            case i:
            case a:
            case p:
              return N;
            default:
              switch (N = N && N.$$typeof, N) {
                case c:
                case d:
                case y:
                case h:
                case s:
                  return N;
                default:
                  return X;
              }
          }
        case n:
          return X;
      }
    }
  }
  function C(N) {
    return E(N) === f;
  }
  return Q.AsyncMode = u, Q.ConcurrentMode = f, Q.ContextConsumer = c, Q.ContextProvider = s, Q.Element = t, Q.ForwardRef = d, Q.Fragment = r, Q.Lazy = y, Q.Memo = h, Q.Portal = n, Q.Profiler = i, Q.StrictMode = a, Q.Suspense = p, Q.isAsyncMode = function(N) {
    return C(N) || E(N) === u;
  }, Q.isConcurrentMode = C, Q.isContextConsumer = function(N) {
    return E(N) === c;
  }, Q.isContextProvider = function(N) {
    return E(N) === s;
  }, Q.isElement = function(N) {
    return typeof N == "object" && N !== null && N.$$typeof === t;
  }, Q.isForwardRef = function(N) {
    return E(N) === d;
  }, Q.isFragment = function(N) {
    return E(N) === r;
  }, Q.isLazy = function(N) {
    return E(N) === y;
  }, Q.isMemo = function(N) {
    return E(N) === h;
  }, Q.isPortal = function(N) {
    return E(N) === n;
  }, Q.isProfiler = function(N) {
    return E(N) === i;
  }, Q.isStrictMode = function(N) {
    return E(N) === a;
  }, Q.isSuspense = function(N) {
    return E(N) === p;
  }, Q.isValidElementType = function(N) {
    return typeof N == "string" || typeof N == "function" || N === r || N === f || N === i || N === a || N === p || N === g || typeof N == "object" && N !== null && (N.$$typeof === y || N.$$typeof === h || N.$$typeof === s || N.$$typeof === c || N.$$typeof === d || N.$$typeof === w || N.$$typeof === T || N.$$typeof === _ || N.$$typeof === v);
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
var Mr;
function _s() {
  return Mr || (Mr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function E(q) {
      return typeof q == "string" || typeof q == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      q === r || q === f || q === i || q === a || q === p || q === g || typeof q == "object" && q !== null && (q.$$typeof === y || q.$$typeof === h || q.$$typeof === s || q.$$typeof === c || q.$$typeof === d || q.$$typeof === w || q.$$typeof === T || q.$$typeof === _ || q.$$typeof === v);
    }
    function C(q) {
      if (typeof q == "object" && q !== null) {
        var fe = q.$$typeof;
        switch (fe) {
          case t:
            var dt = q.type;
            switch (dt) {
              case u:
              case f:
              case r:
              case i:
              case a:
              case p:
                return dt;
              default:
                var Sr = dt && dt.$$typeof;
                switch (Sr) {
                  case c:
                  case d:
                  case y:
                  case h:
                  case s:
                    return Sr;
                  default:
                    return fe;
                }
            }
          case n:
            return fe;
        }
      }
    }
    var N = u, X = f, M = c, L = s, U = t, R = d, W = r, B = y, x = h, b = n, O = i, D = a, A = p, I = !1;
    function F(q) {
      return I || (I = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m(q) || C(q) === u;
    }
    function m(q) {
      return C(q) === f;
    }
    function j(q) {
      return C(q) === c;
    }
    function k(q) {
      return C(q) === s;
    }
    function z(q) {
      return typeof q == "object" && q !== null && q.$$typeof === t;
    }
    function Y(q) {
      return C(q) === d;
    }
    function H(q) {
      return C(q) === r;
    }
    function J(q) {
      return C(q) === y;
    }
    function K(q) {
      return C(q) === h;
    }
    function $(q) {
      return C(q) === n;
    }
    function G(q) {
      return C(q) === i;
    }
    function Z(q) {
      return C(q) === a;
    }
    function ne(q) {
      return C(q) === p;
    }
    ee.AsyncMode = N, ee.ConcurrentMode = X, ee.ContextConsumer = M, ee.ContextProvider = L, ee.Element = U, ee.ForwardRef = R, ee.Fragment = W, ee.Lazy = B, ee.Memo = x, ee.Portal = b, ee.Profiler = O, ee.StrictMode = D, ee.Suspense = A, ee.isAsyncMode = F, ee.isConcurrentMode = m, ee.isContextConsumer = j, ee.isContextProvider = k, ee.isElement = z, ee.isForwardRef = Y, ee.isFragment = H, ee.isLazy = J, ee.isMemo = K, ee.isPortal = $, ee.isProfiler = G, ee.isStrictMode = Z, ee.isSuspense = ne, ee.isValidElementType = E, ee.typeOf = C;
  }()), ee;
}
var Lr;
function Xa() {
  return Lr || (Lr = 1, process.env.NODE_ENV === "production" ? gt.exports = Ts() : gt.exports = _s()), gt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Jt, Dr;
function Os() {
  if (Dr) return Jt;
  Dr = 1;
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
  return Jt = a() ? Object.assign : function(i, s) {
    for (var c, u = r(i), f, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var p in c)
        t.call(c, p) && (u[p] = c[p]);
      if (e) {
        f = e(c);
        for (var g = 0; g < f.length; g++)
          n.call(c, f[g]) && (u[f[g]] = c[f[g]]);
      }
    }
    return u;
  }, Jt;
}
var Zt, zr;
function Un() {
  if (zr) return Zt;
  zr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Zt = e, Zt;
}
var Qt, qr;
function Ka() {
  return qr || (qr = 1, Qt = Function.call.bind(Object.prototype.hasOwnProperty)), Qt;
}
var en, $r;
function Cs() {
  if ($r) return en;
  $r = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Un(), n = {}, r = /* @__PURE__ */ Ka();
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
          var p;
          try {
            if (typeof i[d] != "function") {
              var g = Error(
                (u || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            p = i[d](s, d, u, c, null, t);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var h = f ? f() : "";
            e(
              "Failed " + c + " type: " + p.message + (h ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, en = a, en;
}
var tn, Br;
function ks() {
  if (Br) return tn;
  Br = 1;
  var e = Xa(), t = Os(), n = /* @__PURE__ */ Un(), r = /* @__PURE__ */ Ka(), a = /* @__PURE__ */ Cs(), i = function() {
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
  return tn = function(c, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(m) {
      var j = m && (f && m[f] || m[d]);
      if (typeof j == "function")
        return j;
    }
    var g = "<<anonymous>>", h = {
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
      element: C(),
      elementType: N(),
      instanceOf: X,
      node: R(),
      objectOf: L,
      oneOf: M,
      oneOfType: U,
      shape: B,
      exact: x
    };
    function y(m, j) {
      return m === j ? m !== 0 || 1 / m === 1 / j : m !== m && j !== j;
    }
    function v(m, j) {
      this.message = m, this.data = j && typeof j == "object" ? j : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function w(m) {
      if (process.env.NODE_ENV !== "production")
        var j = {}, k = 0;
      function z(H, J, K, $, G, Z, ne) {
        if ($ = $ || g, Z = Z || K, ne !== n) {
          if (u) {
            var q = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw q.name = "Invariant Violation", q;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = $ + ":" + K;
            !j[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            k < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), j[fe] = !0, k++);
          }
        }
        return J[K] == null ? H ? J[K] === null ? new v("The " + G + " `" + Z + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new v("The " + G + " `" + Z + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : m(J, K, $, G, Z);
      }
      var Y = z.bind(null, !1);
      return Y.isRequired = z.bind(null, !0), Y;
    }
    function T(m) {
      function j(k, z, Y, H, J, K) {
        var $ = k[z], G = D($);
        if (G !== m) {
          var Z = A($);
          return new v(
            "Invalid " + H + " `" + J + "` of type " + ("`" + Z + "` supplied to `" + Y + "`, expected ") + ("`" + m + "`."),
            { expectedType: m }
          );
        }
        return null;
      }
      return w(j);
    }
    function _() {
      return w(s);
    }
    function E(m) {
      function j(k, z, Y, H, J) {
        if (typeof m != "function")
          return new v("Property `" + J + "` of component `" + Y + "` has invalid PropType notation inside arrayOf.");
        var K = k[z];
        if (!Array.isArray(K)) {
          var $ = D(K);
          return new v("Invalid " + H + " `" + J + "` of type " + ("`" + $ + "` supplied to `" + Y + "`, expected an array."));
        }
        for (var G = 0; G < K.length; G++) {
          var Z = m(K, G, Y, H, J + "[" + G + "]", n);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return w(j);
    }
    function C() {
      function m(j, k, z, Y, H) {
        var J = j[k];
        if (!c(J)) {
          var K = D(J);
          return new v("Invalid " + Y + " `" + H + "` of type " + ("`" + K + "` supplied to `" + z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(m);
    }
    function N() {
      function m(j, k, z, Y, H) {
        var J = j[k];
        if (!e.isValidElementType(J)) {
          var K = D(J);
          return new v("Invalid " + Y + " `" + H + "` of type " + ("`" + K + "` supplied to `" + z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(m);
    }
    function X(m) {
      function j(k, z, Y, H, J) {
        if (!(k[z] instanceof m)) {
          var K = m.name || g, $ = F(k[z]);
          return new v("Invalid " + H + " `" + J + "` of type " + ("`" + $ + "` supplied to `" + Y + "`, expected ") + ("instance of `" + K + "`."));
        }
        return null;
      }
      return w(j);
    }
    function M(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function j(k, z, Y, H, J) {
        for (var K = k[z], $ = 0; $ < m.length; $++)
          if (y(K, m[$]))
            return null;
        var G = JSON.stringify(m, function(ne, q) {
          var fe = A(q);
          return fe === "symbol" ? String(q) : q;
        });
        return new v("Invalid " + H + " `" + J + "` of value `" + String(K) + "` " + ("supplied to `" + Y + "`, expected one of " + G + "."));
      }
      return w(j);
    }
    function L(m) {
      function j(k, z, Y, H, J) {
        if (typeof m != "function")
          return new v("Property `" + J + "` of component `" + Y + "` has invalid PropType notation inside objectOf.");
        var K = k[z], $ = D(K);
        if ($ !== "object")
          return new v("Invalid " + H + " `" + J + "` of type " + ("`" + $ + "` supplied to `" + Y + "`, expected an object."));
        for (var G in K)
          if (r(K, G)) {
            var Z = m(K, G, Y, H, J + "." + G, n);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return w(j);
    }
    function U(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var j = 0; j < m.length; j++) {
        var k = m[j];
        if (typeof k != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + I(k) + " at index " + j + "."
          ), s;
      }
      function z(Y, H, J, K, $) {
        for (var G = [], Z = 0; Z < m.length; Z++) {
          var ne = m[Z], q = ne(Y, H, J, K, $, n);
          if (q == null)
            return null;
          q.data && r(q.data, "expectedType") && G.push(q.data.expectedType);
        }
        var fe = G.length > 0 ? ", expected one of type [" + G.join(", ") + "]" : "";
        return new v("Invalid " + K + " `" + $ + "` supplied to " + ("`" + J + "`" + fe + "."));
      }
      return w(z);
    }
    function R() {
      function m(j, k, z, Y, H) {
        return b(j[k]) ? null : new v("Invalid " + Y + " `" + H + "` supplied to " + ("`" + z + "`, expected a ReactNode."));
      }
      return w(m);
    }
    function W(m, j, k, z, Y) {
      return new v(
        (m || "React class") + ": " + j + " type `" + k + "." + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Y + "`."
      );
    }
    function B(m) {
      function j(k, z, Y, H, J) {
        var K = k[z], $ = D(K);
        if ($ !== "object")
          return new v("Invalid " + H + " `" + J + "` of type `" + $ + "` " + ("supplied to `" + Y + "`, expected `object`."));
        for (var G in m) {
          var Z = m[G];
          if (typeof Z != "function")
            return W(Y, H, J, G, A(Z));
          var ne = Z(K, G, Y, H, J + "." + G, n);
          if (ne)
            return ne;
        }
        return null;
      }
      return w(j);
    }
    function x(m) {
      function j(k, z, Y, H, J) {
        var K = k[z], $ = D(K);
        if ($ !== "object")
          return new v("Invalid " + H + " `" + J + "` of type `" + $ + "` " + ("supplied to `" + Y + "`, expected `object`."));
        var G = t({}, k[z], m);
        for (var Z in G) {
          var ne = m[Z];
          if (r(m, Z) && typeof ne != "function")
            return W(Y, H, J, Z, A(ne));
          if (!ne)
            return new v(
              "Invalid " + H + " `" + J + "` key `" + Z + "` supplied to `" + Y + "`.\nBad object: " + JSON.stringify(k[z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(m), null, "  ")
            );
          var q = ne(K, Z, Y, H, J + "." + Z, n);
          if (q)
            return q;
        }
        return null;
      }
      return w(j);
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
          var j = p(m);
          if (j) {
            var k = j.call(m), z;
            if (j !== m.entries) {
              for (; !(z = k.next()).done; )
                if (!b(z.value))
                  return !1;
            } else
              for (; !(z = k.next()).done; ) {
                var Y = z.value;
                if (Y && !b(Y[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function O(m, j) {
      return m === "symbol" ? !0 : j ? j["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && j instanceof Symbol : !1;
    }
    function D(m) {
      var j = typeof m;
      return Array.isArray(m) ? "array" : m instanceof RegExp ? "object" : O(j, m) ? "symbol" : j;
    }
    function A(m) {
      if (typeof m > "u" || m === null)
        return "" + m;
      var j = D(m);
      if (j === "object") {
        if (m instanceof Date)
          return "date";
        if (m instanceof RegExp)
          return "regexp";
      }
      return j;
    }
    function I(m) {
      var j = A(m);
      switch (j) {
        case "array":
        case "object":
          return "an " + j;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + j;
        default:
          return j;
      }
    }
    function F(m) {
      return !m.constructor || !m.constructor.name ? g : m.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, tn;
}
var nn, Wr;
function Ss() {
  if (Wr) return nn;
  Wr = 1;
  var e = /* @__PURE__ */ Un();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, nn = function() {
    function r(s, c, u, f, d, p) {
      if (p !== e) {
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
  }, nn;
}
var Yr;
function Ps() {
  if (Yr) return ht.exports;
  if (Yr = 1, process.env.NODE_ENV !== "production") {
    var e = Xa(), t = !0;
    ht.exports = /* @__PURE__ */ ks()(e.isElement, t);
  } else
    ht.exports = /* @__PURE__ */ Ss()();
  return ht.exports;
}
var As = /* @__PURE__ */ Ps();
const l = /* @__PURE__ */ Ns(As);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Is(e, t, n) {
  return (t = Ms(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ur(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ur(Object(n), !0).forEach(function(r) {
      Is(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ur(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Fs(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ms(e) {
  var t = Fs(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const Hr = () => {
};
let Hn = {}, Ja = {}, Za = null, Qa = {
  mark: Hr,
  measure: Hr
};
try {
  typeof window < "u" && (Hn = window), typeof document < "u" && (Ja = document), typeof MutationObserver < "u" && (Za = MutationObserver), typeof performance < "u" && (Qa = performance);
} catch {
}
const {
  userAgent: Vr = ""
} = Hn.navigator || {}, Te = Hn, te = Ja, Gr = Za, vt = Qa;
Te.document;
const we = !!te.documentElement && !!te.head && typeof te.addEventListener == "function" && typeof te.createElement == "function", ei = ~Vr.indexOf("MSIE") || ~Vr.indexOf("Trident/");
var Ls = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Ds = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, ti = {
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
}, zs = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, ni = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], ie = "classic", $t = "duotone", qs = "sharp", $s = "sharp-duotone", ri = [ie, $t, qs, $s], Bs = {
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
}, Ws = {
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
}, Ys = /* @__PURE__ */ new Map([["classic", {
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
}]]), Us = {
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
}, Hs = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Xr = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Vs = ["kit"], Gs = {
  kit: {
    "fa-kit": "fak"
  }
}, Xs = ["fak", "fakd"], Ks = {
  kit: {
    fak: "fa-kit"
  }
}, Kr = {
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
}, Js = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Zs = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Qs = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, eo = {
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
}, to = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, yn = {
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
}, no = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], xn = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Js, ...no], ro = ["solid", "regular", "light", "thin", "duotone", "brands"], ai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ao = ai.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), io = [...Object.keys(to), ...ro, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", bt.GROUP, bt.SWAP_OPACITY, bt.PRIMARY, bt.SECONDARY].concat(ai.map((e) => "".concat(e, "x"))).concat(ao.map((e) => "w-".concat(e))), so = {
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
const ye = "___FONT_AWESOME___", wn = 16, ii = "fa", si = "svg-inline--fa", Fe = "data-fa-i2svg", Nn = "data-fa-pseudo-element", oo = "data-fa-pseudo-element-pending", Vn = "data-prefix", Gn = "data-icon", Jr = "fontawesome-i2svg", lo = "async", co = ["HTML", "HEAD", "STYLE", "SCRIPT"], oi = (() => {
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
const li = S({}, ti);
li[ie] = S(S(S(S({}, {
  "fa-duotone": "duotone"
}), ti[ie]), Xr.kit), Xr["kit-duotone"]);
const uo = ot(li), jn = S({}, Us);
jn[ie] = S(S(S(S({}, {
  duotone: "fad"
}), jn[ie]), Kr.kit), Kr["kit-duotone"]);
const Zr = ot(jn), Rn = S({}, yn);
Rn[ie] = S(S({}, Rn[ie]), Ks.kit);
const Xn = ot(Rn), En = S({}, eo);
En[ie] = S(S({}, En[ie]), Gs.kit);
ot(En);
const fo = Ls, ci = "fa-layers-text", mo = Ds, po = S({}, Bs);
ot(po);
const ho = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], rn = zs, go = [...Vs, ...io], Qe = Te.FontAwesomeConfig || {};
function vo(e) {
  var t = te.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function bo(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
te && typeof te.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = bo(vo(n));
  a != null && (Qe[r] = a);
});
const ui = {
  styleDefault: "solid",
  familyDefault: ie,
  cssPrefix: ii,
  replacementClass: si,
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
const Ye = S(S({}, ui), Qe);
Ye.autoReplaceSvg || (Ye.observeMutations = !1);
const V = {};
Object.keys(ui).forEach((e) => {
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
function yo(e) {
  return et.push(e), () => {
    et.splice(et.indexOf(e), 1);
  };
}
const Ne = wn, me = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function xo(e) {
  if (!e || !we)
    return;
  const t = te.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = te.head.childNodes;
  let r = null;
  for (let a = n.length - 1; a > -1; a--) {
    const i = n[a], s = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (r = i);
  }
  return te.head.insertBefore(t, r), e;
}
const wo = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function rt() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += wo[Math.random() * 62 | 0];
  return t;
}
function Ve(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Kn(e) {
  return e.classList ? Ve(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function fi(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function No(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(fi(e[n]), '" '), "").trim();
}
function Bt(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Jn(e) {
  return e.size !== me.size || e.x !== me.x || e.y !== me.y || e.rotate !== me.rotate || e.flipX || e.flipY;
}
function jo(e) {
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
function Ro(e) {
  let {
    transform: t,
    width: n = wn,
    height: r = wn,
    startCentered: a = !1
  } = e, i = "";
  return a && ei ? i += "translate(".concat(t.x / Ne - n / 2, "em, ").concat(t.y / Ne - r / 2, "em) ") : a ? i += "translate(calc(-50% + ".concat(t.x / Ne, "em), calc(-50% + ").concat(t.y / Ne, "em)) ") : i += "translate(".concat(t.x / Ne, "em, ").concat(t.y / Ne, "em) "), i += "scale(".concat(t.size / Ne * (t.flipX ? -1 : 1), ", ").concat(t.size / Ne * (t.flipY ? -1 : 1), ") "), i += "rotate(".concat(t.rotate, "deg) "), i;
}
var Eo = `:root, :host {
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
function di() {
  const e = ii, t = si, n = V.cssPrefix, r = V.replacementClass;
  let a = Eo;
  if (n !== e || r !== t) {
    const i = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), c = new RegExp("\\.".concat(t), "g");
    a = a.replace(i, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(c, ".".concat(r));
  }
  return a;
}
let Qr = !1;
function an() {
  V.autoAddCss && !Qr && (xo(di()), Qr = !0);
}
var To = {
  mixout() {
    return {
      dom: {
        css: di,
        insertCss: an
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        an();
      },
      beforeI2svg() {
        an();
      }
    };
  }
};
const xe = Te || {};
xe[ye] || (xe[ye] = {});
xe[ye].styles || (xe[ye].styles = {});
xe[ye].hooks || (xe[ye].hooks = {});
xe[ye].shims || (xe[ye].shims = []);
var pe = xe[ye];
const mi = [], pi = function() {
  te.removeEventListener("DOMContentLoaded", pi), Ot = 1, mi.map((e) => e());
};
let Ot = !1;
we && (Ot = (te.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(te.readyState), Ot || te.addEventListener("DOMContentLoaded", pi));
function _o(e) {
  we && (Ot ? setTimeout(e, 0) : mi.push(e));
}
function lt(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? fi(e) : "<".concat(t, " ").concat(No(n), ">").concat(r.map(lt).join(""), "</").concat(t, ">");
}
function ea(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var sn = function(t, n, r, a) {
  var i = Object.keys(t), s = i.length, c = n, u, f, d;
  for (r === void 0 ? (u = 1, d = t[i[0]]) : (u = 0, d = r); u < s; u++)
    f = i[u], d = c(d, t[f], f, t);
  return d;
};
function Oo(e) {
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
function Tn(e) {
  const t = Oo(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Co(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function ta(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function _n(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = ta(t);
  typeof pe.hooks.addPack == "function" && !r ? pe.hooks.addPack(e, ta(t)) : pe.styles[e] = S(S({}, pe.styles[e] || {}), a), e === "fas" && _n("fa", t);
}
const {
  styles: at,
  shims: ko
} = pe, hi = Object.keys(Xn), So = hi.reduce((e, t) => (e[t] = Object.keys(Xn[t]), e), {});
let Zn = null, gi = {}, vi = {}, bi = {}, yi = {}, xi = {};
function Po(e) {
  return ~go.indexOf(e);
}
function Ao(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Po(a) ? a : null;
}
const wi = () => {
  const e = (r) => sn(at, (a, i, s) => (a[s] = sn(i, r, {}), a), {});
  gi = e((r, a, i) => (a[3] && (r[a[3]] = i), a[2] && a[2].filter((c) => typeof c == "number").forEach((c) => {
    r[c.toString(16)] = i;
  }), r)), vi = e((r, a, i) => (r[i] = i, a[2] && a[2].filter((c) => typeof c == "string").forEach((c) => {
    r[c] = i;
  }), r)), xi = e((r, a, i) => {
    const s = a[2];
    return r[i] = i, s.forEach((c) => {
      r[c] = i;
    }), r;
  });
  const t = "far" in at || V.autoFetchSvg, n = sn(ko, (r, a) => {
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
  bi = n.names, yi = n.unicodes, Zn = Wt(V.styleDefault, {
    family: V.familyDefault
  });
};
yo((e) => {
  Zn = Wt(e.styleDefault, {
    family: V.familyDefault
  });
});
wi();
function Qn(e, t) {
  return (gi[e] || {})[t];
}
function Io(e, t) {
  return (vi[e] || {})[t];
}
function Se(e, t) {
  return (xi[e] || {})[t];
}
function Ni(e) {
  return bi[e] || {
    prefix: null,
    iconName: null
  };
}
function Fo(e) {
  const t = yi[e], n = Qn("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function _e() {
  return Zn;
}
const ji = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Mo(e) {
  let t = ie;
  const n = hi.reduce((r, a) => (r[a] = "".concat(V.cssPrefix, "-").concat(a), r), {});
  return ri.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => So[r].includes(a))) && (t = r);
  }), t;
}
function Wt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = ie
  } = t, r = uo[n][e];
  if (n === $t && !e)
    return "fad";
  const a = Zr[n][e] || Zr[n][r], i = e in pe.styles ? e : null;
  return a || i || null;
}
function Lo(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = Ao(V.cssPrefix, r);
    a ? n = a : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function na(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function Yt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const a = xn.concat(Zs), i = na(e.filter((p) => a.includes(p))), s = na(e.filter((p) => !xn.includes(p))), c = i.filter((p) => (r = p, !ni.includes(p))), [u = null] = c, f = Mo(i), d = S(S({}, Lo(s)), {}, {
    prefix: Wt(u, {
      family: f
    })
  });
  return S(S(S({}, d), $o({
    values: e,
    family: f,
    styles: at,
    config: V,
    canonical: d,
    givenPrefix: r
  })), Do(n, r, d));
}
function Do(e, t, n) {
  let {
    prefix: r,
    iconName: a
  } = n;
  if (e || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  const i = t === "fa" ? Ni(a) : {}, s = Se(r, a);
  return a = i.iconName || s || a, r = i.prefix || r, r === "far" && !at.far && at.fas && !V.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const zo = ri.filter((e) => e !== ie || e !== $t), qo = Object.keys(yn).filter((e) => e !== ie).map((e) => Object.keys(yn[e])).flat();
function $o(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: i = {},
    config: s = {}
  } = e, c = n === $t, u = t.includes("fa-duotone") || t.includes("fad"), f = s.familyDefault === "duotone", d = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!c && (u || f || d) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && zo.includes(n) && (Object.keys(i).find((g) => qo.includes(g)) || s.autoFetchSvg)) {
    const g = Ys.get(n).defaultShortPrefixId;
    r.prefix = g, r.iconName = Se(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = _e() || "fas"), r;
}
class Bo {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((i) => {
      this.definitions[i] = S(S({}, this.definitions[i] || {}), a[i]), _n(i, a[i]);
      const s = Xn[ie][i];
      s && _n(s, a[i]), wi();
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
let ra = [], qe = {};
const Be = {}, Wo = Object.keys(Be);
function Yo(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return ra = e, qe = {}, Object.keys(Be).forEach((r) => {
    Wo.indexOf(r) === -1 && delete Be[r];
  }), ra.forEach((r) => {
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
function On(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (qe[e] || []).forEach((s) => {
    t = s.apply(null, [t, ...r]);
  }), t;
}
function Me(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (qe[e] || []).forEach((i) => {
    i.apply(null, n);
  });
}
function Oe() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Be[e] ? Be[e].apply(null, t) : void 0;
}
function Cn(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || _e();
  if (t)
    return t = Se(n, t) || t, ea(Ri.definitions, n, t) || ea(pe.styles, n, t);
}
const Ri = new Bo(), Uo = () => {
  V.autoReplaceSvg = !1, V.observeMutations = !1, Me("noAuto");
}, Ho = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return we ? (Me("beforeI2svg", e), Oe("pseudoElements2svg", e), Oe("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    V.autoReplaceSvg === !1 && (V.autoReplaceSvg = !0), V.observeMutations = !0, _o(() => {
      Go({
        autoReplaceSvgRoot: t
      }), Me("watch", e);
    });
  }
}, Vo = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Se(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Wt(e[0]);
      return {
        prefix: n,
        iconName: Se(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(V.cssPrefix, "-")) > -1 || e.match(fo))) {
      const t = Yt(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || _e(),
        iconName: Se(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = _e();
      return {
        prefix: t,
        iconName: Se(t, e) || e
      };
    }
  }
}, le = {
  noAuto: Uo,
  config: V,
  dom: Ho,
  parse: Vo,
  library: Ri,
  findIconDefinition: Cn,
  toHtml: lt
}, Go = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = te
  } = e;
  (Object.keys(pe.styles).length > 0 || V.autoFetchSvg) && we && V.autoReplaceSvg && le.dom.i2svg({
    node: t
  });
};
function Ut(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => lt(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!we) return;
      const n = te.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Xo(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: i,
    transform: s
  } = e;
  if (Jn(s) && n.found && !r.found) {
    const {
      width: c,
      height: u
    } = n, f = {
      x: c / u / 2,
      y: 0.5
    };
    a.style = Bt(S(S({}, i), {}, {
      "transform-origin": "".concat(f.x + s.x / 16, "em ").concat(f.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Ko(e) {
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
      attributes: S(S({}, a), {}, {
        id: s
      }),
      children: r
    }]
  }];
}
function er(e) {
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
    watchable: p = !1
  } = e, {
    width: g,
    height: h
  } = n.found ? n : t, y = Xs.includes(r), v = [V.replacementClass, a ? "".concat(V.cssPrefix, "-").concat(a) : ""].filter((N) => d.classes.indexOf(N) === -1).filter((N) => N !== "" || !!N).concat(d.classes).join(" ");
  let w = {
    children: [],
    attributes: S(S({}, d.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: v,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(g, " ").concat(h)
    })
  };
  const T = y && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(g / h * 16 * 0.0625, "em")
  } : {};
  p && (w.attributes[Fe] = ""), c && (w.children.push({
    tag: "title",
    attributes: {
      id: w.attributes["aria-labelledby"] || "title-".concat(f || rt())
    },
    children: [c]
  }), delete w.attributes.title);
  const _ = S(S({}, w), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: u,
    transform: i,
    symbol: s,
    styles: S(S({}, T), d.styles)
  }), {
    children: E,
    attributes: C
  } = n.found && t.found ? Oe("generateAbstractMask", _) || {
    children: [],
    attributes: {}
  } : Oe("generateAbstractIcon", _) || {
    children: [],
    attributes: {}
  };
  return _.children = E, _.attributes = C, s ? Ko(_) : Xo(_);
}
function aa(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: a,
    title: i,
    extra: s,
    watchable: c = !1
  } = e, u = S(S(S({}, s.attributes), i ? {
    title: i
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  c && (u[Fe] = "");
  const f = S({}, s.styles);
  Jn(a) && (f.transform = Ro({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), f["-webkit-transform"] = f.transform);
  const d = Bt(f);
  d.length > 0 && (u.style = d);
  const p = [];
  return p.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), i && p.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), p;
}
function Jo(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, a = S(S(S({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), i = Bt(r.styles);
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
  styles: on
} = pe;
function kn(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(V.cssPrefix, "-").concat(rn.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(V.cssPrefix, "-").concat(rn.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(V.cssPrefix, "-").concat(rn.PRIMARY),
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
const Zo = {
  found: !1,
  width: 512,
  height: 512
};
function Qo(e, t) {
  !oi && !V.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Sn(e, t) {
  let n = t;
  return t === "fa" && V.styleDefault !== null && (t = _e()), new Promise((r, a) => {
    if (n === "fa") {
      const i = Ni(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && on[t] && on[t][e]) {
      const i = on[t][e];
      return r(kn(i));
    }
    Qo(e, t), r(S(S({}, Zo), {}, {
      icon: V.showMissingIcons && e ? Oe("missingIconAbstract") || {} : {}
    }));
  });
}
const ia = () => {
}, Pn = V.measurePerformance && vt && vt.mark && vt.measure ? vt : {
  mark: ia,
  measure: ia
}, Ze = 'FA "6.7.2"', el = (e) => (Pn.mark("".concat(Ze, " ").concat(e, " begins")), () => Ei(e)), Ei = (e) => {
  Pn.mark("".concat(Ze, " ").concat(e, " ends")), Pn.measure("".concat(Ze, " ").concat(e), "".concat(Ze, " ").concat(e, " begins"), "".concat(Ze, " ").concat(e, " ends"));
};
var tr = {
  begin: el,
  end: Ei
};
const jt = () => {
};
function sa(e) {
  return typeof (e.getAttribute ? e.getAttribute(Fe) : null) == "string";
}
function tl(e) {
  const t = e.getAttribute ? e.getAttribute(Vn) : null, n = e.getAttribute ? e.getAttribute(Gn) : null;
  return t && n;
}
function nl(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(V.replacementClass);
}
function rl() {
  return V.autoReplaceSvg === !0 ? Rt.replace : Rt[V.autoReplaceSvg] || Rt.replace;
}
function al(e) {
  return te.createElementNS("http://www.w3.org/2000/svg", e);
}
function il(e) {
  return te.createElement(e);
}
function Ti(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? al : il
  } = t;
  if (typeof e == "string")
    return te.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(i) {
    r.setAttribute(i, e.attributes[i]);
  }), (e.children || []).forEach(function(i) {
    r.appendChild(Ti(i, {
      ceFn: n
    }));
  }), r;
}
function sl(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Rt = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(Ti(n), t);
      }), t.getAttribute(Fe) === null && V.keepOriginalSource) {
        let n = te.createComment(sl(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Kn(t).indexOf(V.replacementClass))
      return Rt.replace(e);
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
function oa(e) {
  e();
}
function _i(e, t) {
  const n = typeof t == "function" ? t : jt;
  if (e.length === 0)
    n();
  else {
    let r = oa;
    V.mutateApproach === lo && (r = Te.requestAnimationFrame || oa), r(() => {
      const a = rl(), i = tr.begin("mutate");
      e.map(a), i(), n();
    });
  }
}
let nr = !1;
function Oi() {
  nr = !0;
}
function An() {
  nr = !1;
}
let Ct = null;
function la(e) {
  if (!Gr || !V.observeMutations)
    return;
  const {
    treeCallback: t = jt,
    nodeCallback: n = jt,
    pseudoElementsCallback: r = jt,
    observeMutationsRoot: a = te
  } = e;
  Ct = new Gr((i) => {
    if (nr) return;
    const s = _e();
    Ve(i).forEach((c) => {
      if (c.type === "childList" && c.addedNodes.length > 0 && !sa(c.addedNodes[0]) && (V.searchPseudoElements && r(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && V.searchPseudoElements && r(c.target.parentNode), c.type === "attributes" && sa(c.target) && ~ho.indexOf(c.attributeName))
        if (c.attributeName === "class" && tl(c.target)) {
          const {
            prefix: u,
            iconName: f
          } = Yt(Kn(c.target));
          c.target.setAttribute(Vn, u || s), f && c.target.setAttribute(Gn, f);
        } else nl(c.target) && n(c.target);
    });
  }), we && Ct.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function ol() {
  Ct && Ct.disconnect();
}
function ll(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const i = a.split(":"), s = i[0], c = i.slice(1);
    return s && c.length > 0 && (r[s] = c.join(":").trim()), r;
  }, {})), n;
}
function cl(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = Yt(Kn(e));
  return a.prefix || (a.prefix = _e()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Io(a.prefix, e.innerText) || Qn(a.prefix, Tn(e.innerText))), !a.iconName && V.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function ul(e) {
  const t = Ve(e.attributes).reduce((a, i) => (a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return V.autoA11y && (n ? t["aria-labelledby"] = "".concat(V.replacementClass, "-title-").concat(r || rt()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function fl() {
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
function ca(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: a
  } = cl(e), i = ul(e), s = On("parseNodeAttributes", {}, e);
  let c = t.styleParser ? ll(e) : [];
  return S({
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
  styles: dl
} = pe;
function Ci(e) {
  const t = V.autoReplaceSvg === "nest" ? ca(e, {
    styleParser: !1
  }) : ca(e);
  return ~t.extra.classes.indexOf(ci) ? Oe("generateLayersText", e, t) : Oe("generateSvgReplacementMutation", e, t);
}
function ml() {
  return [...Hs, ...xn];
}
function ua(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!we) return Promise.resolve();
  const n = te.documentElement.classList, r = (d) => n.add("".concat(Jr, "-").concat(d)), a = (d) => n.remove("".concat(Jr, "-").concat(d)), i = V.autoFetchSvg ? ml() : ni.concat(Object.keys(dl));
  i.includes("fa") || i.push("fa");
  const s = [".".concat(ci, ":not([").concat(Fe, "])")].concat(i.map((d) => ".".concat(d, ":not([").concat(Fe, "])"))).join(", ");
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
  const u = tr.begin("onTree"), f = c.reduce((d, p) => {
    try {
      const g = Ci(p);
      g && d.push(g);
    } catch (g) {
      oi || g.name === "MissingIcon" && console.error(g);
    }
    return d;
  }, []);
  return new Promise((d, p) => {
    Promise.all(f).then((g) => {
      _i(g, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), u(), d();
      });
    }).catch((g) => {
      u(), p(g);
    });
  });
}
function pl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Ci(e).then((n) => {
    n && _i([n], t);
  });
}
function hl(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Cn(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : Cn(a || {})), e(r, S(S({}, n), {}, {
      mask: a
    }));
  };
}
const gl = function(e) {
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
    prefix: p,
    iconName: g,
    icon: h
  } = e;
  return Ut(S({
    type: "icon"
  }, e), () => (Me("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), V.autoA11y && (s ? f["aria-labelledby"] = "".concat(V.replacementClass, "-title-").concat(c || rt()) : (f["aria-hidden"] = "true", f.focusable = "false")), er({
    icons: {
      main: kn(h),
      mask: a ? kn(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: p,
    iconName: g,
    transform: S(S({}, me), n),
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
var vl = {
  mixout() {
    return {
      icon: hl(gl)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = ua, e.nodeCallback = pl, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = te,
        callback: r = () => {
        }
      } = t;
      return ua(n, r);
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
        extra: p
      } = n;
      return new Promise((g, h) => {
        Promise.all([Sn(r, s), f.iconName ? Sn(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((y) => {
          let [v, w] = y;
          g([t, er({
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
            extra: p,
            watchable: !0
          })]);
        }).catch(h);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        transform: i,
        styles: s
      } = t;
      const c = Bt(s);
      c.length > 0 && (r.style = c);
      let u;
      return Jn(i) && (u = Oe("generateAbstractTransformGrouping", {
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
}, bl = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Ut({
          type: "layer"
        }, () => {
          Me("beforeDOMElementCreation", {
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
}, yl = {
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
        return Ut({
          type: "counter",
          content: e
        }, () => (Me("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Jo({
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
}, xl = {
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
        return Ut({
          type: "text",
          content: e
        }, () => (Me("beforeDOMElementCreation", {
          content: e,
          params: t
        }), aa({
          content: e,
          transform: S(S({}, me), n),
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
      if (ei) {
        const u = parseInt(getComputedStyle(t).fontSize, 10), f = t.getBoundingClientRect();
        s = f.width / u, c = f.height / u;
      }
      return V.autoA11y && !r && (i.attributes["aria-hidden"] = "true"), Promise.resolve([t, aa({
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
const wl = new RegExp('"', "ug"), fa = [1105920, 1112319], da = S(S(S(S({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Ws), so), Qs), In = Object.keys(da).reduce((e, t) => (e[t.toLowerCase()] = da[t], e), {}), Nl = Object.keys(In).reduce((e, t) => {
  const n = In[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function jl(e) {
  const t = e.replace(wl, ""), n = Co(t, 0), r = n >= fa[0] && n <= fa[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Tn(a ? t[0] : t),
    isSecondary: r || a
  };
}
function Rl(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (In[n] || {})[a] || Nl[n];
}
function ma(e, t) {
  const n = "".concat(oo).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const s = Ve(e.children).filter((g) => g.getAttribute(Nn) === t)[0], c = Te.getComputedStyle(e, t), u = c.getPropertyValue("font-family"), f = u.match(mo), d = c.getPropertyValue("font-weight"), p = c.getPropertyValue("content");
    if (s && !f)
      return e.removeChild(s), r();
    if (f && p !== "none" && p !== "") {
      const g = c.getPropertyValue("content");
      let h = Rl(u, d);
      const {
        value: y,
        isSecondary: v
      } = jl(g), w = f[0].startsWith("FontAwesome");
      let T = Qn(h, y), _ = T;
      if (w) {
        const E = Fo(y);
        E.iconName && E.prefix && (T = E.iconName, h = E.prefix);
      }
      if (T && !v && (!s || s.getAttribute(Vn) !== h || s.getAttribute(Gn) !== _)) {
        e.setAttribute(n, _), s && e.removeChild(s);
        const E = fl(), {
          extra: C
        } = E;
        C.attributes[Nn] = t, Sn(T, h).then((N) => {
          const X = er(S(S({}, E), {}, {
            icons: {
              main: N,
              mask: ji()
            },
            prefix: h,
            iconName: _,
            extra: C,
            watchable: !0
          })), M = te.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(M, e.firstChild) : e.appendChild(M), M.outerHTML = X.map((L) => lt(L)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function El(e) {
  return Promise.all([ma(e, "::before"), ma(e, "::after")]);
}
function Tl(e) {
  return e.parentNode !== document.head && !~co.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Nn) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function pa(e) {
  if (we)
    return new Promise((t, n) => {
      const r = Ve(e.querySelectorAll("*")).filter(Tl).map(El), a = tr.begin("searchPseudoElements");
      Oi(), Promise.all(r).then(() => {
        a(), An(), t();
      }).catch(() => {
        a(), An(), n();
      });
    });
}
var _l = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = pa, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = te
      } = t;
      V.searchPseudoElements && pa(n);
    };
  }
};
let ha = !1;
var Ol = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Oi(), ha = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        la(On("mutationObserverCallbacks", {}));
      },
      noAuto() {
        ol();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        ha ? An() : la(On("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const ga = (e) => {
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
var Cl = {
  mixout() {
    return {
      parse: {
        transform: (e) => ga(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = ga(n)), e;
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
      }, p = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, g = {
        outer: s,
        inner: d,
        path: p
      };
      return {
        tag: "g",
        attributes: S({}, g.outer),
        children: [{
          tag: "g",
          attributes: S({}, g.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: S(S({}, n.icon.attributes), g.path)
          }]
        }]
      };
    };
  }
};
const ln = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function va(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function kl(e) {
  return e.tag === "g" ? e.children : [e];
}
var Sl = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Yt(n.split(" ").map((a) => a.trim())) : ji();
        return r.prefix || (r.prefix = _e()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
        icon: p
      } = i, g = jo({
        transform: c,
        containerWidth: d,
        iconWidth: u
      }), h = {
        tag: "rect",
        attributes: S(S({}, ln), {}, {
          fill: "white"
        })
      }, y = f.children ? {
        children: f.children.map(va)
      } : {}, v = {
        tag: "g",
        attributes: S({}, g.inner),
        children: [va(S({
          tag: f.tag,
          attributes: S(S({}, f.attributes), g.path)
        }, y))]
      }, w = {
        tag: "g",
        attributes: S({}, g.outer),
        children: [v]
      }, T = "mask-".concat(s || rt()), _ = "clip-".concat(s || rt()), E = {
        tag: "mask",
        attributes: S(S({}, ln), {}, {
          id: T,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [h, w]
      }, C = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: _
          },
          children: kl(p)
        }, E]
      };
      return n.push(C, {
        tag: "rect",
        attributes: S({
          fill: "currentColor",
          "clip-path": "url(#".concat(_, ")"),
          mask: "url(#".concat(T, ")")
        }, ln)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Pl = {
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
        attributes: S(S({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const i = S(S({}, a), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: S(S({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || s.children.push({
        tag: "animate",
        attributes: S(S({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: S(S({}, i), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: S(S({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: S(S({}, i), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: S(S({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: S(S({}, i), {}, {
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
}, Al = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Il = [To, vl, bl, yl, xl, _l, Ol, Cl, Sl, Pl, Al];
Yo(Il, {
  mixoutsTo: le
});
le.noAuto;
le.config;
le.library;
le.dom;
const Fn = le.parse;
le.findIconDefinition;
le.toHtml;
const Fl = le.icon;
le.layer;
le.text;
le.counter;
function ba(e, t) {
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
    t % 2 ? ba(Object(n), !0).forEach(function(r) {
      $e(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ba(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function kt(e) {
  "@babel/helpers - typeof";
  return kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kt(e);
}
function $e(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ml(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Ll(e, t) {
  if (e == null) return {};
  var n = Ml(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Mn(e) {
  return Dl(e) || zl(e) || ql(e) || $l();
}
function Dl(e) {
  if (Array.isArray(e)) return Ln(e);
}
function zl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ql(e, t) {
  if (e) {
    if (typeof e == "string") return Ln(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ln(e, t);
  }
}
function Ln(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function $l() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bl(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, i = e.bounce, s = e.shake, c = e.flash, u = e.spin, f = e.spinPulse, d = e.spinReverse, p = e.pulse, g = e.fixedWidth, h = e.inverse, y = e.border, v = e.listItem, w = e.flip, T = e.size, _ = e.rotation, E = e.pull, C = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": i,
    "fa-shake": s,
    "fa-flash": c,
    "fa-spin": u,
    "fa-spin-reverse": d,
    "fa-spin-pulse": f,
    "fa-pulse": p,
    "fa-fw": g,
    "fa-inverse": h,
    "fa-border": y,
    "fa-li": v,
    "fa-flip": w === !0,
    "fa-flip-horizontal": w === "horizontal" || w === "both",
    "fa-flip-vertical": w === "vertical" || w === "both"
  }, $e(t, "fa-".concat(T), typeof T < "u" && T !== null), $e(t, "fa-rotate-".concat(_), typeof _ < "u" && _ !== null && _ !== 0), $e(t, "fa-pull-".concat(E), typeof E < "u" && E !== null), $e(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(C).map(function(N) {
    return C[N] ? N : null;
  }).filter(function(N) {
    return N;
  });
}
function Wl(e) {
  return e = e - 0, e === e;
}
function ki(e) {
  return Wl(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Yl = ["style"];
function Ul(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Hl(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = ki(n.slice(0, r)), i = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Ul(a)] = i : t[a] = i, t;
  }, {});
}
function Si(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(u) {
    return Si(e, u);
  }), a = Object.keys(t.attributes || {}).reduce(function(u, f) {
    var d = t.attributes[f];
    switch (f) {
      case "class":
        u.attrs.className = d, delete t.attributes.class;
        break;
      case "style":
        u.attrs.style = Hl(d);
        break;
      default:
        f.indexOf("aria-") === 0 || f.indexOf("data-") === 0 ? u.attrs[f.toLowerCase()] = d : u.attrs[ki(f)] = d;
    }
    return u;
  }, {
    attrs: {}
  }), i = n.style, s = i === void 0 ? {} : i, c = Ll(n, Yl);
  return a.attrs.style = de(de({}, a.attrs.style), s), e.apply(void 0, [t.tag, de(de({}, a.attrs), c)].concat(Mn(r)));
}
var Pi = !1;
try {
  Pi = process.env.NODE_ENV === "production";
} catch {
}
function Vl() {
  if (!Pi && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function ya(e) {
  if (e && kt(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Fn.icon)
    return Fn.icon(e);
  if (e === null)
    return null;
  if (e && kt(e) === "object" && e.prefix && e.iconName)
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
function cn(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? $e({}, e, t) : {};
}
var xa = {
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
}, re = /* @__PURE__ */ be.forwardRef(function(e, t) {
  var n = de(de({}, xa), e), r = n.icon, a = n.mask, i = n.symbol, s = n.className, c = n.title, u = n.titleId, f = n.maskId, d = ya(r), p = cn("classes", [].concat(Mn(Bl(n)), Mn((s || "").split(" ")))), g = cn("transform", typeof n.transform == "string" ? Fn.transform(n.transform) : n.transform), h = cn("mask", ya(a)), y = Fl(d, de(de(de(de({}, p), g), h), {}, {
    symbol: i,
    title: c,
    titleId: u,
    maskId: f
  }));
  if (!y)
    return Vl("Could not find icon", d), null;
  var v = y.abstract, w = {
    ref: t
  };
  return Object.keys(n).forEach(function(T) {
    xa.hasOwnProperty(T) || (w[T] = n[T]);
  }), Gl(v[0], w);
});
re.displayName = "FontAwesomeIcon";
re.propTypes = {
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
var Gl = Si.bind(null, be.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Xl = {
  prefix: "fas",
  iconName: "cloud",
  icon: [640, 512, [9729], "f0c2", "M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"]
}, Kl = {
  prefix: "fas",
  iconName: "compass",
  icon: [512, 512, [129517], "f14e", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, Jl = {
  prefix: "fas",
  iconName: "circle-exclamation",
  icon: [512, 512, ["exclamation-circle"], "f06a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, wa = Jl, Zl = {
  prefix: "fas",
  iconName: "lock",
  icon: [448, 512, [128274], "f023", "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]
}, Ql = {
  prefix: "fas",
  iconName: "pizza-slice",
  icon: [512, 512, [], "f818", "M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, ec = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, tc = ec, nc = {
  prefix: "fas",
  iconName: "arrow-left",
  icon: [448, 512, [8592], "f060", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]
}, un = {
  prefix: "fas",
  iconName: "phone-volume",
  icon: [512, 512, ["volume-control-phone"], "f2a0", "M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"]
}, rc = {
  prefix: "fas",
  iconName: "envelope",
  icon: [512, 512, [128386, 9993, 61443], "f0e0", "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]
}, ac = {
  prefix: "fas",
  iconName: "circle-info",
  icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, Na = ac, ic = {
  prefix: "fas",
  iconName: "landmark",
  icon: [512, 512, [127963], "f66f", "M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8L32 192c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9l0-.9 4.4-1.6L240.1 4.2zM64 224l64 0 0 192 40 0 0-192 64 0 0 192 48 0 0-192 64 0 0 192 40 0 0-192 64 0 0 196.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 224z"]
}, sc = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, oc = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, lc = oc, cc = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, uc = cc, fc = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, dc = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, mc = dc, rr = ({
  domain: e = "An official website of the City of Portland",
  icon: t = void 0,
  heading: n = "Official websites use .gov",
  description: r = "A .gov website belongs to an official government organization in the United States.",
  showHttpsGuidance: a = !0,
  initiallyExpanded: i = !1,
  className: s = ""
}) => {
  const [c, u] = Ee(i), f = ["banner", s].filter(Boolean).join(" "), d = () => {
    u(!c);
  };
  return /* @__PURE__ */ o.jsxs("section", { className: f, children: [
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
          onClick: d,
          "aria-expanded": c,
          "aria-controls": "banner-content",
          children: [
            /* @__PURE__ */ o.jsx("span", { className: "banner-button-text", children: "Here's how you know" }),
            /* @__PURE__ */ o.jsx("span", { className: `banner-button-icon ${c ? "is-open" : ""}`, children: /* @__PURE__ */ o.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ o.jsx("polyline", { points: "6 9 12 15 18 9" }) }) })
          ]
        }
      )
    ] }),
    c && /* @__PURE__ */ o.jsxs(
      "div",
      {
        id: "banner-expanded-content",
        className: "banner-expanded-content",
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: "banner-guidance", children: [
            /* @__PURE__ */ o.jsx("div", { className: "banner-guidance-icon", children: /* @__PURE__ */ o.jsx(re, { icon: ic, style: { fontSize: "40px", color: "#2378C3" } }) || null }),
            /* @__PURE__ */ o.jsx("div", { className: "banner-guidance-text", children: /* @__PURE__ */ o.jsxs("p", { children: [
              /* @__PURE__ */ o.jsx("strong", { children: n }),
              /* @__PURE__ */ o.jsx("br", {}),
              r
            ] }) })
          ] }),
          a && /* @__PURE__ */ o.jsxs("div", { className: "banner-guidance", children: [
            /* @__PURE__ */ o.jsx("div", { className: "banner-guidance-icon", children: /* @__PURE__ */ o.jsx(re, { icon: Zl, style: { fontSize: "40px", color: "#719F2A" } }) }),
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
rr.propTypes = {
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
rr.defaultProps = {
  domain: "An official website of the City of Portland",
  icon: void 0,
  heading: "Official websites use .gov",
  description: "A .gov website belongs to an official government organization in the United States.",
  showHttpsGuidance: !0,
  initiallyExpanded: !1,
  className: ""
};
const ar = ({
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
ar.propTypes = {
  /** Title text for the header */
  title: l.string.isRequired,
  /** URL for the logo image */
  logoUrl: l.string,
  /** Alt text for the logo image */
  logoAlt: l.string,
  /** Optional tagline displayed below the title */
  tagline: l.string
};
ar.defaultProps = {
  logoUrl: void 0,
  logoAlt: "Logo",
  tagline: void 0
};
const Ai = ({ item: e }) => /* @__PURE__ */ o.jsx("li", { className: "header-menu-item", role: "menuitem", children: /* @__PURE__ */ o.jsxs(
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
Ai.propTypes = {
  /** Menu item object containing label, href, description, and current state */
  item: l.shape({
    label: l.string.isRequired,
    href: l.string.isRequired,
    description: l.string,
    current: l.bool
  }).isRequired
};
const ir = ({
  items: e,
  mainHeading: t,
  id: n,
  className: r
}) => {
  const a = `${n}-heading`;
  return /* @__PURE__ */ o.jsxs("nav", { className: `header-menu-group ${r || ""}`, role: "navigation", "aria-labelledby": a, children: [
    /* @__PURE__ */ o.jsx("h3", { id: a, className: "header-menu-heading", children: t }),
    /* @__PURE__ */ o.jsx("ul", { className: "header-menu-group-items", role: "menu", children: e.map((i, s) => /* @__PURE__ */ o.jsx(Ai, { item: i }, s)) })
  ] });
};
ir.propTypes = {
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
ir.defaultProps = {
  mainHeading: "General Information",
  id: "pgov-header-menu-group"
};
const sr = ({
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
  const [d, p] = Ee(!1), g = () => {
    p(!d);
  };
  return /* @__PURE__ */ o.jsxs("header", { className: `header ${f || ""}`, children: [
    /* @__PURE__ */ o.jsx("div", { className: "header-main", children: /* @__PURE__ */ o.jsxs("div", { className: "header-container", children: [
      /* @__PURE__ */ o.jsx("div", { className: "header-logo", children: /* @__PURE__ */ o.jsx(
        ar,
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
          ir,
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
sr.propTypes = {
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
sr.defaultProps = {
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
const or = ({
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
or.propTypes = {
  /** The text to display in the skip nav link */
  text: l.string,
  /** The ID of the main content element to skip to */
  mainContentId: l.string,
  /** Custom class name */
  className: l.string
};
or.defaultProps = {
  text: "Skip to main content",
  mainContentId: "main-content",
  className: ""
};
const lr = ({
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
  socialMediaLinks: p,
  cityName: g,
  cityLogoUrl: h,
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
      /* @__PURE__ */ o.jsx("img", { src: h, alt: y, className: "footer-city-logo" }),
      /* @__PURE__ */ o.jsx("p", { className: "footer-copyright", children: v })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ o.jsx("h4", { className: "footer-heading", children: "General Information" }),
      /* @__PURE__ */ o.jsx("ul", { className: "footer-links", children: u.map((E, C) => /* @__PURE__ */ o.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ o.jsx("a", { href: E.href, className: "footer-link", children: E.label }) }, `general-link-${C}`)) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ o.jsx("h4", { className: "footer-heading", children: "Terms And Policies" }),
      /* @__PURE__ */ o.jsx("ul", { className: "footer-links", children: f.map((E, C) => /* @__PURE__ */ o.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ o.jsx("a", { href: E.href, className: "footer-link", children: E.label }) }, `terms-link-${C}`)) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ o.jsx("h4", { className: "footer-heading", children: "Portland.Gov" }),
      /* @__PURE__ */ o.jsx("ul", { className: "footer-links", children: d.map((E, C) => /* @__PURE__ */ o.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ o.jsx("a", { href: E.href, className: "footer-link", children: E.label }) }, `pgov-link-${C}`)) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ o.jsx("h4", { className: "footer-heading", children: "Social Media" }),
      /* @__PURE__ */ o.jsx("ul", { className: "footer-links", children: p.map((E, C) => /* @__PURE__ */ o.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ o.jsx("a", { href: E.href, className: "footer-link", children: E.label }) }, `social-link-${C}`)) })
    ] })
  ] }) })
] });
lr.propTypes = {
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
lr.defaultProps = {
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
const cr = ({
  items: e,
  truncateMiddle: t = !1,
  className: n = "",
  customSeparator: r
}) => {
  const [a, i] = Ee(window.innerWidth < 768), [s, c] = Ee(!1), u = nt(null), f = nt(null), d = (y) => {
    if (!u.current || !f.current || !t || e.length <= 3 || a) {
      c(!1);
      return;
    }
    if (typeof y == "boolean") {
      c(y);
      return;
    }
    c(!1), requestAnimationFrame(() => {
      const v = u.current.offsetWidth, w = f.current;
      Array.from(w.children).reduce((_, E) => _ + E.offsetWidth, 0) > v && c(!0);
    });
  };
  Ie(() => {
    const y = () => {
      const w = window.innerWidth < 768;
      i(w), w ? c(!1) : d();
    };
    window.addEventListener("resize", y), d();
    const v = new ResizeObserver(() => {
      d();
    });
    return u.current && v.observe(u.current), () => {
      window.removeEventListener("resize", y), v.disconnect();
    };
  }, [a, t, e]), Ie(() => {
    process.env.NODE_ENV === "test" && t && e.length > 3 && d(!0);
  }, [t, e]);
  const p = () => r || /* @__PURE__ */ o.jsx(
    re,
    {
      icon: a ? nc : fc,
      className: "breadcrumb__separator",
      "aria-hidden": "true"
    }
  ), g = () => {
    if (!s || a)
      return e.map((T, _) => /* @__PURE__ */ o.jsxs("li", { className: "breadcrumb__item", children: [
        a && _ > 0 && p(),
        _ === e.length - 1 ? /* @__PURE__ */ o.jsx("span", { className: "breadcrumb__current", "aria-current": "page", children: T.text }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("a", { href: T.href, className: "breadcrumb__link", children: T.text }),
          !a && p()
        ] })
      ] }, _));
    const y = e[0], v = e[e.length - 1], w = e.length - 2;
    return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsxs("li", { className: "breadcrumb__item", children: [
        /* @__PURE__ */ o.jsx("a", { href: y.href, className: "breadcrumb__link", children: y.text }),
        p()
      ] }, "first"),
      /* @__PURE__ */ o.jsxs("li", { className: "breadcrumb__item ellipsis", children: [
        /* @__PURE__ */ o.jsx("span", { "aria-label": `${w} more levels`, children: "..." }),
        p()
      ] }, "ellipsis"),
      /* @__PURE__ */ o.jsx("li", { className: "breadcrumb__item", children: /* @__PURE__ */ o.jsx("span", { className: "breadcrumb__current", "aria-current": "page", children: v.text }) }, "last")
    ] });
  }, h = [
    "breadcrumb",
    s && !a && "breadcrumb--truncated",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx(
    "nav",
    {
      className: h,
      "aria-label": "Breadcrumbs",
      ref: u,
      children: /* @__PURE__ */ o.jsx(
        "ol",
        {
          className: `breadcrumb__list ${s ? "breadcrumb__list--truncate" : ""}`,
          ref: f,
          children: g()
        }
      )
    }
  );
};
cr.propTypes = {
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
   * Whether to truncate middle items when breadcrumbs get too long
   */
  truncateMiddle: l.bool,
  /**
   * Additional CSS class names
   */
  className: l.string,
  /**
   * Custom separator element
   */
  customSeparator: l.node
};
cr.defaultProps = {
  truncateMiddle: !1,
  className: "",
  customSeparator: void 0
};
const Ii = ({
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
  c && /* @__PURE__ */ o.jsx(or, { ...n }),
  s && /* @__PURE__ */ o.jsx(rr, { ...e }),
  /* @__PURE__ */ o.jsx(sr, { ...t }),
  /* @__PURE__ */ o.jsxs(
    "main",
    {
      id: "main-content",
      className: "pgov-page-template-main",
      tabIndex: "-1",
      role: "main",
      "aria-label": "Main content",
      children: [
        f && /* @__PURE__ */ o.jsx(cr, { ...a }),
        i
      ]
    }
  ),
  u && /* @__PURE__ */ o.jsx(lr, { ...r })
] });
Ii.propTypes = {
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
Ii.defaultProps = {
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
const Fi = ({ item: e, isActive: t, isExpanded: n, isParent: r, position: a, onClick: i }) => {
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
Fi.propTypes = {
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
const Mi = ({ items: e, activeItemId: t, activeIndex: n }) => {
  const [r, a] = Ee(null), i = (c, u, f = !1) => c === 0 && !f ? "top" : c === u - 1 ? "bottom" : "middle", s = (c, u = !1) => c.map((f, d) => {
    var v;
    const p = !!((v = f.children) != null && v.length), g = t ? f.link === t : d === n, h = r === f.link, y = i(d, c.length, u);
    return /* @__PURE__ */ o.jsxs("li", { className: "nav-item-container", children: [
      /* @__PURE__ */ o.jsx(
        Fi,
        {
          item: f,
          isActive: g,
          isExpanded: h,
          isParent: p,
          position: y,
          onClick: () => {
            a(h ? null : f.link);
          }
        }
      ),
      p && h && /* @__PURE__ */ o.jsx("ul", { className: "nav-children", children: s(f.children, !0) })
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
Mi.propTypes = {
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
Mi.defaultProps = {
  activeItemId: null,
  activeIndex: null
};
const pc = ({ heading: e, description: t, children: n }) => {
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
pc.propTypes = {
  heading: l.string.isRequired,
  description: l.string,
  children: l.node.isRequired
};
const Li = ({ number: e }) => /* @__PURE__ */ o.jsxs("div", { className: "stepNumberWrapper", children: [
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
Li.propTypes = {
  number: l.number.isRequired
};
const Di = ({ step: e, stepNumber: t, isLast: n }) => /* @__PURE__ */ o.jsxs("div", { className: "stepItem", children: [
  /* @__PURE__ */ o.jsxs("div", { className: "stepNumberContainer", children: [
    /* @__PURE__ */ o.jsx(Li, { number: t }),
    !n && /* @__PURE__ */ o.jsx("div", { className: "verticalBar" })
  ] }),
  /* @__PURE__ */ o.jsxs("div", { className: "stepContent", children: [
    /* @__PURE__ */ o.jsx("h3", { className: "stepHeading", children: e.heading }),
    /* @__PURE__ */ o.jsx("p", { className: "stepDescription", children: e.description })
  ] })
] });
Di.propTypes = {
  step: l.shape({
    heading: l.string.isRequired,
    description: l.string.isRequired
  }).isRequired,
  stepNumber: l.number.isRequired,
  isLast: l.bool.isRequired
};
const hc = ({ title: e, mainDescription: t, steps: n }) => /* @__PURE__ */ o.jsxs("div", { className: "processSteps", children: [
  /* @__PURE__ */ o.jsxs("div", { className: "header", children: [
    /* @__PURE__ */ o.jsx("h2", { className: "title", children: e }),
    /* @__PURE__ */ o.jsx("p", { className: "mainDescription", children: t })
  ] }),
  /* @__PURE__ */ o.jsx("div", { className: "stepsContainer", children: n.map((r, a) => /* @__PURE__ */ o.jsx(
    Di,
    {
      step: r,
      stepNumber: a + 1,
      isLast: a === n.length - 1
    },
    a
  )) })
] });
hc.propTypes = {
  title: l.string.isRequired,
  mainDescription: l.string.isRequired,
  steps: l.arrayOf(
    l.shape({
      heading: l.string.isRequired,
      description: l.string.isRequired
    })
  ).isRequired
};
const gc = ({ variant: e = "default", children: t, className: n, ...r }) => {
  const s = ["usa-tag", e === "big" ? "usa-tag--big" : "", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx("span", { className: s, ...r, children: t });
};
gc.propTypes = {
  /** The content of the tag */
  children: l.node.isRequired,
  /** The variant of the tag */
  variant: l.oneOf(["default", "big"]),
  /** Additional className to be applied to the tag */
  className: l.string
};
const vc = ({
  variant: e = "default",
  buttonText: t = "Search",
  className: n,
  id: r,
  name: a = "search",
  placeholder: i,
  onSubmit: s,
  ...c
}) => {
  const d = ["usa-search", e === "big" ? "usa-search--big" : e === "small" ? "usa-search--small" : "", n].filter(Boolean).join(" "), p = (g) => {
    g.preventDefault(), s && s(g);
  };
  return /* @__PURE__ */ o.jsx("section", { "aria-label": `${e} search component`, children: /* @__PURE__ */ o.jsxs("form", { className: d, role: "search", onSubmit: p, children: [
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
      re,
      {
        icon: lc,
        className: "usa-search__submit-icon",
        "aria-hidden": "true"
      }
    ) : /* @__PURE__ */ o.jsx("span", { className: "usa-search__submit-text", children: t }) })
  ] }) });
};
vc.propTypes = {
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
const bc = {
  prefix: "fab",
  iconName: "instagram",
  icon: [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
}, yc = {
  prefix: "fab",
  iconName: "facebook",
  icon: [512, 512, [62e3], "f09a", "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]
}, xc = {
  prefix: "fab",
  iconName: "twitter",
  icon: [512, 512, [], "f099", "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]
}, wc = ({
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
    instagram: p
  } = i || {}, {
    address: g,
    room: h,
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
                /* @__PURE__ */ o.jsx(re, { icon: rc, className: "contacts__button-icon" }),
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
              /* @__PURE__ */ o.jsx(re, { icon: un, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "Phone: Office" })
            ] }),
            /* @__PURE__ */ o.jsx("a", { href: `tel:${n}`, className: "contacts__link", children: n })
          ] }),
          r && /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(re, { icon: un, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "Phone: Information" })
            ] }),
            /* @__PURE__ */ o.jsx("a", { href: `tel:${r}`, className: "contacts__link", children: r })
          ] }),
          a && /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(re, { icon: un, className: "contacts__icon" }),
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
              /* @__PURE__ */ o.jsx(re, { icon: yc, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "Facebook" })
            ] }),
            /* @__PURE__ */ o.jsx("a", { href: `https://facebook.com/${u}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: u })
          ] }),
          f && /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(re, { icon: xc, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "X (Twitter)" })
            ] }),
            /* @__PURE__ */ o.jsx("a", { href: `https://twitter.com/${f}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: f })
          ] }),
          d && /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(re, { icon: Xl, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "Bluesky" })
            ] }),
            /* @__PURE__ */ o.jsx("a", { href: `https://bsky.app/profile/${d}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: d })
          ] }),
          p && /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(re, { icon: bc, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "Instagram" })
            ] }),
            /* @__PURE__ */ o.jsx("a", { href: `https://instagram.com/${p}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: p })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "contacts__section", children: [
        /* @__PURE__ */ o.jsx("h3", { className: "contacts__heading", children: "Office" }),
        /* @__PURE__ */ o.jsxs("div", { className: "contacts__office-info", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ o.jsx(re, { icon: Kl, className: "contacts__icon" }),
              /* @__PURE__ */ o.jsx("span", { className: "contacts__label", children: "Address" })
            ] }),
            /* @__PURE__ */ o.jsxs("a", { href: `https://maps.google.com/?q=${g} ${y}, ${v} ${w}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: [
              g,
              /* @__PURE__ */ o.jsx("br", {}),
              h && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                h,
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
              /* @__PURE__ */ o.jsx(re, { icon: sc, className: "contacts__icon" }),
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
wc.propTypes = {
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
const Nc = ({
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
Nc.propTypes = {
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
const jc = ({
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
              children: n.map((d, p) => /* @__PURE__ */ o.jsx(
                "span",
                {
                  className: `${c}__tag`,
                  children: d
                },
                p
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
jc.propTypes = {
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
var yt = { exports: {} };
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var zi = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], St = /* @__PURE__ */ zi.join(","), qi = typeof Element > "u", Le = qi ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Pt = !qi && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, At = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var a = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), i = a === "" || a === "true", s = i || n && t && e(t.parentNode);
  return s;
}, Rc = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, $i = function(t, n, r) {
  if (At(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(St));
  return n && Le.call(t, St) && a.unshift(t), a = a.filter(r), a;
}, Bi = function e(t, n, r) {
  for (var a = [], i = Array.from(t); i.length; ) {
    var s = i.shift();
    if (!At(s, !1))
      if (s.tagName === "SLOT") {
        var c = s.assignedElements(), u = c.length ? c : s.children, f = e(u, !0, r);
        r.flatten ? a.push.apply(a, f) : a.push({
          scopeParent: s,
          candidates: f
        });
      } else {
        var d = Le.call(s, St);
        d && r.filter(s) && (n || !t.includes(s)) && a.push(s);
        var p = s.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(s), g = !At(p, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
        if (p && g) {
          var h = e(p === !0 ? s.children : p.children, !0, r);
          r.flatten ? a.push.apply(a, h) : a.push({
            scopeParent: s,
            candidates: h
          });
        } else
          i.unshift.apply(i, s.children);
      }
  }
  return a;
}, Wi = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, je = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Rc(t)) && !Wi(t) ? 0 : t.tabIndex;
}, Ec = function(t, n) {
  var r = je(t);
  return r < 0 && n && !Wi(t) ? 0 : r;
}, Tc = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Yi = function(t) {
  return t.tagName === "INPUT";
}, _c = function(t) {
  return Yi(t) && t.type === "hidden";
}, Oc = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Cc = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, kc = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Pt(t), r = function(c) {
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
  var i = Cc(a, t.form);
  return !i || i === t;
}, Sc = function(t) {
  return Yi(t) && t.type === "radio";
}, Pc = function(t) {
  return Sc(t) && !kc(t);
}, Ac = function(t) {
  var n, r = t && Pt(t), a = (n = r) === null || n === void 0 ? void 0 : n.host, i = !1;
  if (r && r !== t) {
    var s, c, u;
    for (i = !!((s = a) !== null && s !== void 0 && (c = s.ownerDocument) !== null && c !== void 0 && c.contains(a) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !i && a; ) {
      var f, d, p;
      r = Pt(a), a = (f = r) === null || f === void 0 ? void 0 : f.host, i = !!((d = a) !== null && d !== void 0 && (p = d.ownerDocument) !== null && p !== void 0 && p.contains(a));
    }
  }
  return i;
}, ja = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, a = n.height;
  return r === 0 && a === 0;
}, Ic = function(t, n) {
  var r = n.displayCheck, a = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var i = Le.call(t, "details>summary:first-of-type"), s = i ? t.parentElement : t;
  if (Le.call(s, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof a == "function") {
      for (var c = t; t; ) {
        var u = t.parentElement, f = Pt(t);
        if (u && !u.shadowRoot && a(u) === !0)
          return ja(t);
        t.assignedSlot ? t = t.assignedSlot : !u && f !== t.ownerDocument ? t = f.host : t = u;
      }
      t = c;
    }
    if (Ac(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return ja(t);
  return !1;
}, Fc = function(t) {
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
}, It = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  At(n) || _c(n) || Ic(n, t) || // For a details element with a summary, the summary element gets the focus
  Oc(n) || Fc(n));
}, Dn = function(t, n) {
  return !(Pc(n) || je(n) < 0 || !It(t, n));
}, Mc = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Lc = function e(t) {
  var n = [], r = [];
  return t.forEach(function(a, i) {
    var s = !!a.scopeParent, c = s ? a.scopeParent : a, u = Ec(c, s), f = s ? e(a.candidates) : c;
    u === 0 ? s ? n.push.apply(n, f) : n.push(c) : r.push({
      documentOrder: i,
      tabIndex: u,
      item: a,
      isScope: s,
      content: f
    });
  }), r.sort(Tc).reduce(function(a, i) {
    return i.isScope ? a.push.apply(a, i.content) : a.push(i.content), a;
  }, []).concat(n);
}, Ht = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Bi([t], n.includeContainer, {
    filter: Dn.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Mc
  }) : r = $i(t, n.includeContainer, Dn.bind(null, n)), Lc(r);
}, Ui = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Bi([t], n.includeContainer, {
    filter: It.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = $i(t, n.includeContainer, It.bind(null, n)), r;
}, ke = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return Le.call(t, St) === !1 ? !1 : Dn(n, t);
}, Dc = /* @__PURE__ */ zi.concat("iframe").join(","), Et = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return Le.call(t, Dc) === !1 ? !1 : It(n, t);
};
const zc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  focusable: Ui,
  getTabIndex: je,
  isFocusable: Et,
  isTabbable: ke,
  tabbable: Ht
}, Symbol.toStringTag, { value: "Module" }));
/*!
* focus-trap 7.6.5
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function zn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function qc(e) {
  if (Array.isArray(e)) return zn(e);
}
function $c(e, t, n) {
  return (t = Hc(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Bc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Wc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ra(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ra(Object(n), !0).forEach(function(r) {
      $c(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ra(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Yc(e) {
  return qc(e) || Bc(e) || Vc(e) || Wc();
}
function Uc(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Hc(e) {
  var t = Uc(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Vc(e, t) {
  if (e) {
    if (typeof e == "string") return zn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zn(e, t) : void 0;
  }
}
var Ta = {
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
}, Gc = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Xc = function(t) {
  return (t == null ? void 0 : t.key) === "Escape" || (t == null ? void 0 : t.key) === "Esc" || (t == null ? void 0 : t.keyCode) === 27;
}, tt = function(t) {
  return (t == null ? void 0 : t.key) === "Tab" || (t == null ? void 0 : t.keyCode) === 9;
}, Kc = function(t) {
  return tt(t) && !t.shiftKey;
}, Jc = function(t) {
  return tt(t) && t.shiftKey;
}, _a = function(t) {
  return setTimeout(t, 0);
}, Je = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, r) : t;
}, xt = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Zc = [], Qc = function(t, n) {
  var r = (n == null ? void 0 : n.document) || document, a = (n == null ? void 0 : n.trapStack) || Zc, i = Ea({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: Kc,
    isKeyBackward: Jc
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
  }, c, u = function(x, b, O) {
    return x && x[b] !== void 0 ? x[b] : i[O || b];
  }, f = function(x, b) {
    var O = typeof (b == null ? void 0 : b.composedPath) == "function" ? b.composedPath() : void 0;
    return s.containerGroups.findIndex(function(D) {
      var A = D.container, I = D.tabbableNodes;
      return A.contains(x) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (O == null ? void 0 : O.includes(A)) || I.find(function(F) {
        return F === x;
      });
    });
  }, d = function(x) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, O = b.hasFallback, D = O === void 0 ? !1 : O, A = b.params, I = A === void 0 ? [] : A, F = i[x];
    if (typeof F == "function" && (F = F.apply(void 0, Yc(I))), F === !0 && (F = void 0), !F) {
      if (F === void 0 || F === !1)
        return F;
      throw new Error("`".concat(x, "` was specified but was not a node, or did not return a node"));
    }
    var m = F;
    if (typeof F == "string") {
      try {
        m = r.querySelector(F);
      } catch (j) {
        throw new Error("`".concat(x, '` appears to be an invalid selector; error="').concat(j.message, '"'));
      }
      if (!m && !D)
        throw new Error("`".concat(x, "` as selector refers to no known node"));
    }
    return m;
  }, p = function() {
    var x = d("initialFocus", {
      hasFallback: !0
    });
    if (x === !1)
      return !1;
    if (x === void 0 || x && !Et(x, i.tabbableOptions))
      if (f(r.activeElement) >= 0)
        x = r.activeElement;
      else {
        var b = s.tabbableGroups[0], O = b && b.firstTabbableNode;
        x = O || d("fallbackFocus");
      }
    else x === null && (x = d("fallbackFocus"));
    if (!x)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return x;
  }, g = function() {
    if (s.containerGroups = s.containers.map(function(x) {
      var b = Ht(x, i.tabbableOptions), O = Ui(x, i.tabbableOptions), D = b.length > 0 ? b[0] : void 0, A = b.length > 0 ? b[b.length - 1] : void 0, I = O.find(function(j) {
        return ke(j);
      }), F = O.slice().reverse().find(function(j) {
        return ke(j);
      }), m = !!b.find(function(j) {
        return je(j) > 0;
      });
      return {
        container: x,
        tabbableNodes: b,
        focusableNodes: O,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: m,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: D,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: A,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: I,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: F,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(k) {
          var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Y = b.indexOf(k);
          return Y < 0 ? z ? O.slice(O.indexOf(k) + 1).find(function(H) {
            return ke(H);
          }) : O.slice(0, O.indexOf(k)).reverse().find(function(H) {
            return ke(H);
          }) : b[Y + (z ? 1 : -1)];
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
  }, h = function(x) {
    var b = x.activeElement;
    if (b)
      return b.shadowRoot && b.shadowRoot.activeElement !== null ? h(b.shadowRoot) : b;
  }, y = function(x) {
    if (x !== !1 && x !== h(document)) {
      if (!x || !x.focus) {
        y(p());
        return;
      }
      x.focus({
        preventScroll: !!i.preventScroll
      }), s.mostRecentlyFocusedNode = x, Gc(x) && x.select();
    }
  }, v = function(x) {
    var b = d("setReturnFocus", {
      params: [x]
    });
    return b || (b === !1 ? !1 : x);
  }, w = function(x) {
    var b = x.target, O = x.event, D = x.isBackward, A = D === void 0 ? !1 : D;
    b = b || xt(O), g();
    var I = null;
    if (s.tabbableGroups.length > 0) {
      var F = f(b, O), m = F >= 0 ? s.containerGroups[F] : void 0;
      if (F < 0)
        A ? I = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : I = s.tabbableGroups[0].firstTabbableNode;
      else if (A) {
        var j = s.tabbableGroups.findIndex(function(K) {
          var $ = K.firstTabbableNode;
          return b === $;
        });
        if (j < 0 && (m.container === b || Et(b, i.tabbableOptions) && !ke(b, i.tabbableOptions) && !m.nextTabbableNode(b, !1)) && (j = F), j >= 0) {
          var k = j === 0 ? s.tabbableGroups.length - 1 : j - 1, z = s.tabbableGroups[k];
          I = je(b) >= 0 ? z.lastTabbableNode : z.lastDomTabbableNode;
        } else tt(O) || (I = m.nextTabbableNode(b, !1));
      } else {
        var Y = s.tabbableGroups.findIndex(function(K) {
          var $ = K.lastTabbableNode;
          return b === $;
        });
        if (Y < 0 && (m.container === b || Et(b, i.tabbableOptions) && !ke(b, i.tabbableOptions) && !m.nextTabbableNode(b)) && (Y = F), Y >= 0) {
          var H = Y === s.tabbableGroups.length - 1 ? 0 : Y + 1, J = s.tabbableGroups[H];
          I = je(b) >= 0 ? J.firstTabbableNode : J.firstDomTabbableNode;
        } else tt(O) || (I = m.nextTabbableNode(b));
      }
    } else
      I = d("fallbackFocus");
    return I;
  }, T = function(x) {
    var b = xt(x);
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
    var b = xt(x), O = f(b, x) >= 0;
    if (O || b instanceof Document)
      O && (s.mostRecentlyFocusedNode = b);
    else {
      x.stopImmediatePropagation();
      var D, A = !0;
      if (s.mostRecentlyFocusedNode)
        if (je(s.mostRecentlyFocusedNode) > 0) {
          var I = f(s.mostRecentlyFocusedNode), F = s.containerGroups[I].tabbableNodes;
          if (F.length > 0) {
            var m = F.findIndex(function(j) {
              return j === s.mostRecentlyFocusedNode;
            });
            m >= 0 && (i.isKeyForward(s.recentNavEvent) ? m + 1 < F.length && (D = F[m + 1], A = !1) : m - 1 >= 0 && (D = F[m - 1], A = !1));
          }
        } else
          s.containerGroups.some(function(j) {
            return j.tabbableNodes.some(function(k) {
              return je(k) > 0;
            });
          }) || (A = !1);
      else
        A = !1;
      A && (D = w({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: i.isKeyBackward(s.recentNavEvent)
      })), y(D || s.mostRecentlyFocusedNode || p());
    }
    s.recentNavEvent = void 0;
  }, E = function(x) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = x;
    var O = w({
      event: x,
      isBackward: b
    });
    O && (tt(x) && x.preventDefault(), y(O));
  }, C = function(x) {
    (i.isKeyForward(x) || i.isKeyBackward(x)) && E(x, i.isKeyBackward(x));
  }, N = function(x) {
    Xc(x) && Je(i.escapeDeactivates, x) !== !1 && (x.preventDefault(), c.deactivate());
  }, X = function(x) {
    var b = xt(x);
    f(b, x) >= 0 || Je(i.clickOutsideDeactivates, x) || Je(i.allowOutsideClick, x) || (x.preventDefault(), x.stopImmediatePropagation());
  }, M = function() {
    if (s.active)
      return Ta.activateTrap(a, c), s.delayInitialFocusTimer = i.delayInitialFocus ? _a(function() {
        y(p());
      }) : y(p()), r.addEventListener("focusin", _, !0), r.addEventListener("mousedown", T, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", T, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", X, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", C, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", N), c;
  }, L = function() {
    if (s.active)
      return r.removeEventListener("focusin", _, !0), r.removeEventListener("mousedown", T, !0), r.removeEventListener("touchstart", T, !0), r.removeEventListener("click", X, !0), r.removeEventListener("keydown", C, !0), r.removeEventListener("keydown", N), c;
  }, U = function(x) {
    var b = x.some(function(O) {
      var D = Array.from(O.removedNodes);
      return D.some(function(A) {
        return A === s.mostRecentlyFocusedNode;
      });
    });
    b && y(p());
  }, R = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(U) : void 0, W = function() {
    R && (R.disconnect(), s.active && !s.paused && s.containers.map(function(x) {
      R.observe(x, {
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
      var b = u(x, "onActivate"), O = u(x, "onPostActivate"), D = u(x, "checkCanFocusTrap");
      D || g(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = h(r), b == null || b();
      var A = function() {
        D && g(), M(), W(), O == null || O();
      };
      return D ? (D(s.containers.concat()).then(A, A), this) : (A(), this);
    },
    deactivate: function(x) {
      if (!s.active)
        return this;
      var b = Ea({
        onDeactivate: i.onDeactivate,
        onPostDeactivate: i.onPostDeactivate,
        checkCanReturnFocus: i.checkCanReturnFocus
      }, x);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, L(), s.active = !1, s.paused = !1, W(), Ta.deactivateTrap(a, c);
      var O = u(b, "onDeactivate"), D = u(b, "onPostDeactivate"), A = u(b, "checkCanReturnFocus"), I = u(b, "returnFocus", "returnFocusOnDeactivate");
      O == null || O();
      var F = function() {
        _a(function() {
          I && y(v(s.nodeFocusedBeforeActivation)), D == null || D();
        });
      };
      return I && A ? (A(v(s.nodeFocusedBeforeActivation)).then(F, F), this) : (F(), this);
    },
    pause: function(x) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, x)) : this;
    },
    unpause: function(x) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, x)) : this;
    },
    updateContainerElements: function(x) {
      var b = [].concat(x).filter(Boolean);
      return s.containers = b.map(function(O) {
        return typeof O == "string" ? r.querySelector(O) : O;
      }), s.active && g(), W(), this;
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
          var O = u(b, "onPause"), D = u(b, "onPostPause");
          O == null || O(), L(), W(), D == null || D();
        } else {
          var A = u(b, "onUnpause"), I = u(b, "onPostUnpause");
          A == null || A(), g(), M(), W(), I == null || I();
        }
        return this;
      }
    }
  }), c.updateContainerElements(t), c;
};
const eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createFocusTrap: Qc
}, Symbol.toStringTag, { value: "Module" })), tu = /* @__PURE__ */ Ga(eu), nu = /* @__PURE__ */ Ga(zc);
var Oa;
function ru() {
  if (Oa) return yt.exports;
  Oa = 1;
  function e(M) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(L) {
      return typeof L;
    } : function(L) {
      return L && typeof Symbol == "function" && L.constructor === Symbol && L !== Symbol.prototype ? "symbol" : typeof L;
    }, e(M);
  }
  var t, n;
  function r(M, L) {
    if (!(M instanceof L)) throw new TypeError("Cannot call a class as a function");
  }
  function a(M, L) {
    for (var U = 0; U < L.length; U++) {
      var R = L[U];
      R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(M, y(R.key), R);
    }
  }
  function i(M, L, U) {
    return L && a(M.prototype, L), Object.defineProperty(M, "prototype", { writable: !1 }), M;
  }
  function s(M, L, U) {
    return L = d(L), c(M, f() ? Reflect.construct(L, U || [], d(M).constructor) : L.apply(M, U));
  }
  function c(M, L) {
    if (L && (e(L) == "object" || typeof L == "function")) return L;
    if (L !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return u(M);
  }
  function u(M) {
    if (M === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return M;
  }
  function f() {
    try {
      var M = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (f = function() {
      return !!M;
    })();
  }
  function d(M) {
    return d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(L) {
      return L.__proto__ || Object.getPrototypeOf(L);
    }, d(M);
  }
  function p(M, L) {
    if (typeof L != "function" && L !== null) throw new TypeError("Super expression must either be null or a function");
    M.prototype = Object.create(L && L.prototype, { constructor: { value: M, writable: !0, configurable: !0 } }), Object.defineProperty(M, "prototype", { writable: !1 }), L && g(M, L);
  }
  function g(M, L) {
    return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(U, R) {
      return U.__proto__ = R, U;
    }, g(M, L);
  }
  function h(M, L, U) {
    return (L = y(L)) in M ? Object.defineProperty(M, L, { value: U, enumerable: !0, configurable: !0, writable: !0 }) : M[L] = U, M;
  }
  function y(M) {
    var L = v(M, "string");
    return e(L) == "symbol" ? L : L + "";
  }
  function v(M, L) {
    if (e(M) != "object" || !M) return M;
    var U = M[Symbol.toPrimitive];
    if (U !== void 0) {
      var R = U.call(M, L);
      if (e(R) != "object") return R;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (L === "string" ? String : Number)(M);
  }
  var w = be, T = tu, _ = T.createFocusTrap, E = nu, C = E.isFocusable, N = parseInt((t = (n = /^(\d+)\./.exec(w.version)) === null || n === void 0 ? void 0 : n[1]) !== null && t !== void 0 ? t : 0, 10), X = /* @__PURE__ */ function(M) {
    function L(U) {
      var R;
      r(this, L), R = s(this, L, [U]), h(R, "getNodeForOption", function(x) {
        var b, O = (b = this.internalOptions[x]) !== null && b !== void 0 ? b : this.originalOptions[x];
        if (typeof O == "function") {
          for (var D = arguments.length, A = new Array(D > 1 ? D - 1 : 0), I = 1; I < D; I++)
            A[I - 1] = arguments[I];
          O = O.apply(void 0, A);
        }
        if (O === !0 && (O = void 0), !O) {
          if (O === void 0 || O === !1)
            return O;
          throw new Error("`".concat(x, "` was specified but was not a node, or did not return a node"));
        }
        var F = O;
        if (typeof O == "string") {
          var m;
          if (F = (m = this.getDocument()) === null || m === void 0 ? void 0 : m.querySelector(O), !F)
            throw new Error("`".concat(x, "` as selector refers to no known node"));
        }
        return F;
      }), R.handleDeactivate = R.handleDeactivate.bind(R), R.handlePostDeactivate = R.handlePostDeactivate.bind(R), R.handleClickOutsideDeactivates = R.handleClickOutsideDeactivates.bind(R), R.internalOptions = {
        // We need to hijack the returnFocusOnDeactivate option,
        // because React can move focus into the element before we arrived at
        // this lifecycle hook (e.g. with autoFocus inputs). So the component
        // captures the previouslyFocusedElement in componentWillMount,
        // then (optionally) returns focus to it in componentWillUnmount.
        returnFocusOnDeactivate: !1,
        // the rest of these are also related to deactivation of the trap, and we
        //  need to use them and control them as well
        checkCanReturnFocus: null,
        onDeactivate: R.handleDeactivate,
        onPostDeactivate: R.handlePostDeactivate,
        // we need to special-case this setting as well so that we can know if we should
        //  NOT return focus if the trap gets auto-deactivated as the result of an
        //  outside click (otherwise, we'll always think we should return focus because
        //  of how we manage that flag internally here)
        clickOutsideDeactivates: R.handleClickOutsideDeactivates
      }, R.originalOptions = {
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
      var W = U.focusTrapOptions;
      for (var B in W)
        if (Object.prototype.hasOwnProperty.call(W, B)) {
          if (B === "returnFocusOnDeactivate" || B === "onDeactivate" || B === "onPostDeactivate" || B === "checkCanReturnFocus" || B === "clickOutsideDeactivates") {
            R.originalOptions[B] = W[B];
            continue;
          }
          R.internalOptions[B] = W[B];
        }
      return R.outsideClick = null, R.focusTrapElements = U.containerElements || [], R.updatePreviousElement(), R;
    }
    return p(L, M), i(L, [{
      key: "getDocument",
      value: function() {
        return this.props.focusTrapOptions.document || (typeof document < "u" ? document : void 0);
      }
    }, {
      key: "getReturnFocusNode",
      value: function() {
        var R = this.getNodeForOption("setReturnFocus", this.previouslyFocusedElement);
        return R || (R === !1 ? !1 : this.previouslyFocusedElement);
      }
      /** Update the previously focused element with the currently focused element. */
    }, {
      key: "updatePreviousElement",
      value: function() {
        var R = this.getDocument();
        R && (this.previouslyFocusedElement = R.activeElement);
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
      value: function(R) {
        var W = typeof this.originalOptions.clickOutsideDeactivates == "function" ? this.originalOptions.clickOutsideDeactivates.call(null, R) : this.originalOptions.clickOutsideDeactivates;
        return W && (this.outsideClick = {
          target: R.target,
          allowDeactivation: W
        }), W;
      }
    }, {
      key: "handleDeactivate",
      value: function() {
        this.originalOptions.onDeactivate && this.originalOptions.onDeactivate.call(null), this.deactivateTrap();
      }
    }, {
      key: "handlePostDeactivate",
      value: function() {
        var R = this, W = function() {
          var x = R.getReturnFocusNode(), b = !!// did the consumer allow it?
          (R.originalOptions.returnFocusOnDeactivate && // can we actually focus the node?
          x !== null && x !== void 0 && x.focus && // was there an outside click that allowed deactivation?
          (!R.outsideClick || // did the consumer allow deactivation when the outside node was clicked?
          R.outsideClick.allowDeactivation && // is the outside node NOT focusable (implying that it did NOT receive focus
          //  as a result of the click-through) -- in which case do NOT restore focus
          //  to `returnFocusNode` because focus should remain on the outside node
          !C(R.outsideClick.target, R.internalOptions.tabbableOptions))), O = R.internalOptions.preventScroll, D = O === void 0 ? !1 : O;
          b && x.focus({
            preventScroll: D
          }), R.originalOptions.onPostDeactivate && R.originalOptions.onPostDeactivate.call(null), R.outsideClick = null;
        };
        this.originalOptions.checkCanReturnFocus ? this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()).then(W, W) : W();
      }
    }, {
      key: "setupFocusTrap",
      value: function() {
        if (this.focusTrap)
          this.props.active && !this.focusTrap.active && (this.focusTrap.activate(), this.props.paused && this.focusTrap.pause());
        else {
          var R = this.focusTrapElements.some(Boolean);
          R && (this.focusTrap = this.props._createFocusTrap(this.focusTrapElements, this.internalOptions), this.props.active && this.focusTrap.activate(), this.props.paused && this.focusTrap.pause());
        }
      }
    }, {
      key: "componentDidMount",
      value: function() {
        this.props.active && this.setupFocusTrap();
      }
    }, {
      key: "componentDidUpdate",
      value: function(R) {
        if (this.focusTrap) {
          R.containerElements !== this.props.containerElements && this.focusTrap.updateContainerElements(this.props.containerElements);
          var W = !R.active && this.props.active, B = R.active && !this.props.active, x = !R.paused && this.props.paused, b = R.paused && !this.props.paused;
          if (W && (this.updatePreviousElement(), this.focusTrap.activate()), B) {
            this.deactivateTrap();
            return;
          }
          x && this.focusTrap.pause(), b && this.focusTrap.unpause();
        } else
          R.containerElements !== this.props.containerElements && (this.focusTrapElements = this.props.containerElements), this.props.active && (this.updatePreviousElement(), this.setupFocusTrap());
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.deactivateTrap();
      }
    }, {
      key: "render",
      value: function() {
        var R = this, W = this.props.children ? w.Children.only(this.props.children) : void 0;
        if (W) {
          if (W.type && W.type === w.Fragment)
            throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");
          var B = function(O) {
            var D = R.props.containerElements;
            W && (N >= 19 ? typeof W.props.ref == "function" ? W.props.ref(O) : W.props.ref && (W.props.ref.current = O) : typeof W.ref == "function" ? W.ref(O) : W.ref && (W.ref.current = O)), R.focusTrapElements = D || [O];
          }, x = w.cloneElement(W, {
            ref: B
          });
          return x;
        }
        return null;
      }
    }]);
  }(w.Component);
  return X.defaultProps = {
    active: !0,
    paused: !1,
    focusTrapOptions: {},
    _createFocusTrap: _
  }, yt.exports = X, yt.exports.FocusTrap = X, yt.exports;
}
var au = ru();
const Hi = ({
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
  ...p
}) => {
  const h = [
    "usa-card",
    s && "usa-card--media",
    u && "usa-card--exdent",
    f && "usa-card--header-first",
    d && "usa-card--inset",
    a
  ].filter(Boolean).join(" "), y = n && r ? be.cloneElement(n, { onClick: r }) : n, v = () => s ? /* @__PURE__ */ o.jsx("div", { className: `usa-card__media ${u ? "usa-card__media--exdent" : ""}`, children: /* @__PURE__ */ o.jsx("div", { className: "usa-card__img", children: typeof s == "string" ? /* @__PURE__ */ o.jsx("img", { src: s, alt: "" }) : s }) }) : null;
  return /* @__PURE__ */ o.jsx("div", { className: h, ...p, children: /* @__PURE__ */ o.jsxs("div", { className: "usa-card__container", children: [
    s && v(),
    e && /* @__PURE__ */ o.jsx("div", { className: "usa-card__header", children: /* @__PURE__ */ o.jsx("h4", { className: "usa-card__heading", children: e }) }),
    /* @__PURE__ */ o.jsxs("div", { className: "usa-card__body", children: [
      t && /* @__PURE__ */ o.jsx("p", { children: t }),
      i
    ] }),
    n && /* @__PURE__ */ o.jsx("div", { className: "usa-card__footer", children: y })
  ] }) });
};
Hi.propTypes = {
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
const iu = ({
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
  ariaDescribedBy: p,
  ...g
}) => {
  const h = nt(null), y = nt(null);
  Ie(() => {
    const R = h.current;
    if (R)
      if (e)
        R.showModal(), R.classList.add("usa-modal--visible"), document.body.classList.add("usa-js-modal--active");
      else {
        R.classList.remove("usa-modal--visible");
        const W = setTimeout(() => {
          R.open && R.close(), document.body.classList.remove("usa-js-modal--active");
        }, 150);
        return () => clearTimeout(W);
      }
  }, [e]);
  const v = mt((R) => {
    R.key === "Escape" && !u && t && (R.preventDefault(), t());
  }, [u, t]), w = mt((R) => {
    R.target === h.current && !u && t && t();
  }, [u, t]), T = mt(() => {
    t && t();
  }, [t]), _ = mt(() => {
    n && n();
  }, [n]), E = i && be.cloneElement(i, {
    onClick: (R) => {
      i.props.onClick && i.props.onClick(R), _();
    },
    tabIndex: 0
    // Ensure button is focusable
  }), C = s && be.cloneElement(s, {
    onClick: (R) => {
      s.props.onClick && s.props.onClick(R), T();
    },
    tabIndex: 0
    // Ensure button is focusable
  }), N = (E || C) && /* @__PURE__ */ o.jsxs("div", { className: "usa-button-group", children: [
    E && /* @__PURE__ */ o.jsx("div", { className: "usa-button-group__item", children: E }),
    C && /* @__PURE__ */ o.jsx("div", { className: "usa-button-group__item", children: C })
  ] }), X = [
    "usa-modal",
    c === "large" && "usa-modal--lg",
    u && "usa-modal--forced-action",
    f
  ].filter(Boolean).join(" "), U = !!(E || C) || !u;
  return /* @__PURE__ */ o.jsx(
    "dialog",
    {
      ref: h,
      className: X,
      onKeyDown: v,
      onClick: w,
      "aria-labelledby": d,
      "aria-describedby": p,
      "aria-modal": "true",
      ...g,
      children: /* @__PURE__ */ o.jsx(
        au.FocusTrap,
        {
          active: e,
          focusTrapOptions: {
            allowOutsideClick: !u,
            escapeDeactivates: !u,
            returnFocusOnDeactivate: !0,
            clickOutsideDeactivates: !u,
            initialFocus: () => {
              const R = y.current;
              if (!R) return !1;
              const W = R.querySelector('button:not([disabled]):not([aria-hidden="true"])');
              if (W)
                return W;
              const B = R.querySelector('[tabindex="0"], input, select, textarea, button, a[href]');
              return B || R;
            },
            setReturnFocus: (R) => R,
            fallbackFocus: () => y.current ? (y.current.setAttribute("tabindex", "0"), y.current) : !1
          },
          children: /* @__PURE__ */ o.jsxs(
            "div",
            {
              ref: y,
              className: "usa-modal__container",
              tabIndex: U ? void 0 : 0,
              children: [
                /* @__PURE__ */ o.jsxs(
                  Hi,
                  {
                    heading: r,
                    actionButton: N,
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
                          children: /* @__PURE__ */ o.jsx(re, { icon: uc, className: "usa-icon" })
                        }
                      ),
                      a
                    ]
                  }
                ),
                !U && /* @__PURE__ */ o.jsx(
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
                    onFocus: (R) => {
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
iu.propTypes = {
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
const ur = ({ name: e, variable: t, value: n, className: r }) => {
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
ur.propTypes = {
  /** Name of the font family */
  name: l.string.isRequired,
  /** CSS variable name */
  variable: l.string.isRequired,
  /** Actual font-family value */
  value: l.string.isRequired,
  /** Additional CSS class */
  className: l.string
};
ur.defaultProps = {
  className: ""
};
const fr = ({ name: e, variable: t, value: n, sizeInPx: r, className: a }) => {
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
fr.propTypes = {
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
fr.defaultProps = {
  className: ""
};
const dr = ({ name: e, variable: t, value: n, className: r }) => {
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
dr.propTypes = {
  /** Name of the font weight */
  name: l.string.isRequired,
  /** CSS variable name */
  variable: l.string.isRequired,
  /** Actual font-weight value */
  value: l.string.isRequired,
  /** Additional CSS class */
  className: l.string
};
dr.defaultProps = {
  className: ""
};
const mr = ({ name: e, variable: t, value: n, className: r }) => {
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
mr.propTypes = {
  /** Name of the line height */
  name: l.string.isRequired,
  /** CSS variable name */
  variable: l.string.isRequired,
  /** Actual line-height value */
  value: l.string.isRequired,
  /** Additional CSS class */
  className: l.string
};
mr.defaultProps = {
  className: ""
};
const pr = ({ name: e, variable: t, value: n, className: r }) => {
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
pr.propTypes = {
  /** Name of the letter spacing */
  name: l.string.isRequired,
  /** CSS variable name */
  variable: l.string.isRequired,
  /** Actual letter-spacing value */
  value: l.string.isRequired,
  /** Additional CSS class */
  className: l.string
};
pr.defaultProps = {
  className: ""
};
const hr = ({ families: e, className: t }) => {
  const n = ["pgov-font-families", t].filter(Boolean).join(" "), r = e || Vi;
  return /* @__PURE__ */ o.jsx("div", { className: n, children: r.map((a, i) => /* @__PURE__ */ o.jsx(
    ur,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    i
  )) });
}, Vi = [
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
hr.propTypes = {
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
hr.defaultProps = {
  families: Vi,
  className: ""
};
const gr = ({ sizes: e, className: t }) => {
  const n = ["pgov-font-sizes", t].filter(Boolean).join(" "), r = e || Gi;
  return /* @__PURE__ */ o.jsx("div", { className: n, children: r.map((a, i) => /* @__PURE__ */ o.jsx(
    fr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value,
      sizeInPx: a.sizeInPx
    },
    i
  )) });
}, Gi = [
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
gr.propTypes = {
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
gr.defaultProps = {
  sizes: Gi,
  className: ""
};
const vr = ({ weights: e, className: t }) => {
  const n = ["pgov-font-weights", t].filter(Boolean).join(" "), r = e || Xi;
  return /* @__PURE__ */ o.jsx("div", { className: n, children: r.map((a, i) => /* @__PURE__ */ o.jsx(
    dr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    i
  )) });
}, Xi = [
  { name: "Thin", variable: "--theme-font-weight-thin", value: "100" },
  { name: "Light", variable: "--theme-font-weight-light", value: "300" },
  { name: "Regular", variable: "--theme-font-weight-normal", value: "400" },
  { name: "Semi Bold", variable: "--theme-font-weight-semibold", value: "600" },
  { name: "Bold", variable: "--theme-font-weight-bold", value: "700" },
  { name: "Extra Bold", variable: "--theme-font-weight-heavy", value: "800" }
];
vr.propTypes = {
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
vr.defaultProps = {
  weights: Xi,
  className: ""
};
const br = ({ lineHeights: e, className: t }) => {
  const n = ["pgov-line-heights", t].filter(Boolean).join(" "), r = e || Ki;
  return /* @__PURE__ */ o.jsx("div", { className: n, children: r.map((a, i) => /* @__PURE__ */ o.jsx(
    mr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    i
  )) });
}, Ki = [
  { name: "Tight", variable: "1.1", value: "1" },
  { name: "Snug", variable: "1.25", value: "1.25" },
  { name: "Normal", variable: "1.5", value: "1.5" },
  { name: "Relaxed", variable: "1.75", value: "1.75" },
  { name: "Loose", variable: "1.7", value: "2" }
];
br.propTypes = {
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
br.defaultProps = {
  lineHeights: Ki,
  className: ""
};
const yr = ({ letterSpacings: e, className: t }) => {
  const n = ["pgov-letter-spacings", t].filter(Boolean).join(" "), r = e || Ji;
  return /* @__PURE__ */ o.jsx("div", { className: n, children: r.map((a, i) => /* @__PURE__ */ o.jsx(
    pr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    i
  )) });
}, Ji = [
  { name: "Tighter", variable: "-0.05em", value: "-0.05em" },
  { name: "Tight", variable: "-0.01em", value: "-0.025em" },
  { name: "Normal", variable: "0", value: "0em" },
  { name: "Wide", variable: "0.025em", value: "0.025em" },
  { name: "Wider", variable: "0.05em", value: "0.05em" },
  { name: "Widest", variable: "0.1em", value: "0.1em" }
];
yr.propTypes = {
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
yr.defaultProps = {
  letterSpacings: Ji,
  className: ""
};
l.string.isRequired, l.string.isRequired, l.string.isRequired;
l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired;
l.string.isRequired, l.string.isRequired, l.string.isRequired;
l.string.isRequired, l.string.isRequired, l.string.isRequired;
l.string.isRequired, l.string.isRequired, l.string.isRequired;
const Zi = ({
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
      /* @__PURE__ */ o.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ o.jsx(hr, {}) })
    ] }),
    t && /* @__PURE__ */ o.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ o.jsx("h3", { className: "pgov-typography-section-title", children: "Font Sizes" }),
      /* @__PURE__ */ o.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ o.jsx(gr, {}) })
    ] }),
    n && /* @__PURE__ */ o.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ o.jsx("h3", { className: "pgov-typography-section-title", children: "Font Weights" }),
      /* @__PURE__ */ o.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ o.jsx(vr, {}) })
    ] }),
    r && /* @__PURE__ */ o.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ o.jsx("h3", { className: "pgov-typography-section-title", children: "Line Heights" }),
      /* @__PURE__ */ o.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ o.jsx(br, {}) })
    ] }),
    a && /* @__PURE__ */ o.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ o.jsx("h3", { className: "pgov-typography-section-title", children: "Letter Spacing" }),
      /* @__PURE__ */ o.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ o.jsx(yr, {}) })
    ] })
  ] });
};
Zi.propTypes = {
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
Zi.defaultProps = {
  showFontFamilies: !0,
  showFontSizes: !0,
  showFontWeights: !0,
  showLineHeights: !0,
  showLetterSpacings: !0,
  className: ""
};
const xr = ({
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
xr.propTypes = {
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
xr.defaultProps = {
  size: "medium",
  className: ""
};
const wr = ({
  name: e,
  colorVar: t,
  description: n,
  hexValue: r,
  alignment: a,
  className: i
}) => {
  const [s, c] = Ee("");
  Ie(() => {
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
wr.propTypes = {
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
wr.defaultProps = {
  description: void 0,
  hexValue: void 0,
  alignment: "left",
  className: ""
};
const Nr = ({
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
      xr,
      {
        colorValue: e,
        name: t,
        size: r
      }
    ),
    /* @__PURE__ */ o.jsx(
      wr,
      {
        name: t,
        colorVar: e,
        description: n,
        alignment: "center"
      }
    )
  ] });
};
Nr.propTypes = {
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
Nr.defaultProps = {
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
const Qi = ({
  colorVar: e,
  name: t,
  description: n,
  hexValue: r,
  size: a,
  orientation: i,
  className: s
}) => /* @__PURE__ */ o.jsx(
  Nr,
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
Qi.propTypes = {
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
Qi.defaultProps = {
  description: void 0,
  hexValue: void 0,
  size: "medium",
  orientation: "horizontal",
  className: ""
};
const es = ({ name: e, variable: t, value: n, pixels: r }) => /* @__PURE__ */ o.jsxs("div", { style: {
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
es.propTypes = {
  name: l.string.isRequired,
  variable: l.string.isRequired,
  value: l.string.isRequired,
  pixels: l.string.isRequired
};
const qf = () => {
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
    es,
    {
      name: t.name,
      variable: t.variable,
      value: t.value,
      pixels: t.pixels
    },
    n
  )) });
}, $f = () => /* @__PURE__ */ o.jsxs("div", { style: {
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
function Vt() {
  return typeof window < "u";
}
function Ge(e) {
  return ts(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function se(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ve(e) {
  var t;
  return (t = (ts(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ts(e) {
  return Vt() ? e instanceof Node || e instanceof se(e).Node : !1;
}
function ae(e) {
  return Vt() ? e instanceof Element || e instanceof se(e).Element : !1;
}
function oe(e) {
  return Vt() ? e instanceof HTMLElement || e instanceof se(e).HTMLElement : !1;
}
function Ft(e) {
  return !Vt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof se(e).ShadowRoot;
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
function su(e) {
  return ["table", "td", "th"].includes(Ge(e));
}
function Gt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function jr(e) {
  const t = Rr(), n = ae(e) ? ue(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function ou(e) {
  let t = Ce(e);
  for (; oe(t) && !Ue(t); ) {
    if (jr(t))
      return t;
    if (Gt(t))
      return null;
    t = Ce(t);
  }
  return null;
}
function Rr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ue(e) {
  return ["html", "body", "#document"].includes(Ge(e));
}
function ue(e) {
  return se(e).getComputedStyle(e);
}
function Xt(e) {
  return ae(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ce(e) {
  if (Ge(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ft(e) && e.host || // Fallback.
    ve(e)
  );
  return Ft(t) ? t.host : t;
}
function ns(e) {
  const t = Ce(e);
  return Ue(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : oe(t) && ct(t) ? t : ns(t);
}
function it(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = ns(e), i = a === ((r = e.ownerDocument) == null ? void 0 : r.body), s = se(a);
  if (i) {
    const c = qn(s);
    return t.concat(s, s.visualViewport || [], ct(a) ? a : [], c && n ? it(c) : []);
  }
  return t.concat(a, it(a, [], n));
}
function qn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const He = Math.min, Pe = Math.max, Mt = Math.round, wt = Math.floor, he = (e) => ({
  x: e,
  y: e
}), lu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, cu = {
  start: "end",
  end: "start"
};
function $n(e, t, n) {
  return Pe(e, He(t, n));
}
function ut(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function De(e) {
  return e.split("-")[0];
}
function ft(e) {
  return e.split("-")[1];
}
function rs(e) {
  return e === "x" ? "y" : "x";
}
function Er(e) {
  return e === "y" ? "height" : "width";
}
function Ae(e) {
  return ["top", "bottom"].includes(De(e)) ? "y" : "x";
}
function Tr(e) {
  return rs(Ae(e));
}
function uu(e, t, n) {
  n === void 0 && (n = !1);
  const r = ft(e), a = Tr(e), i = Er(a);
  let s = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Lt(s)), [s, Lt(s)];
}
function fu(e) {
  const t = Lt(e);
  return [Bn(e), t, Bn(t)];
}
function Bn(e) {
  return e.replace(/start|end/g, (t) => cu[t]);
}
function du(e, t, n) {
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
function mu(e, t, n, r) {
  const a = ft(e);
  let i = du(De(e), n === "start", r);
  return a && (i = i.map((s) => s + "-" + a), t && (i = i.concat(i.map(Bn)))), i;
}
function Lt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => lu[t]);
}
function pu(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function as(e) {
  return typeof e != "number" ? pu(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Dt(e) {
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
function hu() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function gu() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function is() {
  return /apple/i.test(navigator.vendor);
}
function vu() {
  return hu().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function bu() {
  return gu().includes("jsdom/");
}
const Ca = "data-floating-ui-focusable", yu = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function Wn(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function zt(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ft(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function xu(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function Re(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function ss(e) {
  return oe(e) && e.matches(yu);
}
function wu(e) {
  if (!e || bu()) return !0;
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}
function Nu(e) {
  return e ? e.hasAttribute(Ca) ? e : e.querySelector("[" + Ca + "]") || e : null;
}
function st(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
var ge = typeof document < "u" ? Ha : Ie;
const ju = {
  ...P
};
function Nt(e) {
  const t = P.useRef(e);
  return ge(() => {
    t.current = e;
  }), t;
}
const Ru = ju.useInsertionEffect, Eu = Ru || ((e) => e());
function Tt(e) {
  const t = P.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Eu(() => {
    t.current = e;
  }), P.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
      r[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
const os = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function ls(e, t) {
  const n = Ht(e, os()), r = n.length;
  if (r === 0) return;
  const a = Wn(Re(e)), i = n.indexOf(a), s = i === -1 ? t === 1 ? 0 : r - 1 : i + t;
  return n[s];
}
function Tu(e) {
  return ls(Re(e).body, 1) || e;
}
function _u(e) {
  return ls(Re(e).body, -1) || e;
}
function fn(e, t) {
  const n = t || e.currentTarget, r = e.relatedTarget;
  return !r || !zt(n, r);
}
function Ou(e) {
  Ht(e, os()).forEach((n) => {
    n.dataset.tabindex = n.getAttribute("tabindex") || "", n.setAttribute("tabindex", "-1");
  });
}
function ka(e) {
  e.querySelectorAll("[data-tabindex]").forEach((n) => {
    const r = n.dataset.tabindex;
    delete n.dataset.tabindex, r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex");
  });
}
function Sa(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const i = Ae(t), s = Tr(t), c = Er(s), u = De(t), f = i === "y", d = r.x + r.width / 2 - a.width / 2, p = r.y + r.height / 2 - a.height / 2, g = r[c] / 2 - a[c] / 2;
  let h;
  switch (u) {
    case "top":
      h = {
        x: d,
        y: r.y - a.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      h = {
        x: r.x - a.width,
        y: p
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (ft(t)) {
    case "start":
      h[s] -= g * (n && f ? -1 : 1);
      break;
    case "end":
      h[s] += g * (n && f ? -1 : 1);
      break;
  }
  return h;
}
const Cu = async (e, t, n) => {
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
    y: p
  } = Sa(f, r, u), g = r, h = {}, y = 0;
  for (let v = 0; v < c.length; v++) {
    const {
      name: w,
      fn: T
    } = c[v], {
      x: _,
      y: E,
      data: C,
      reset: N
    } = await T({
      x: d,
      y: p,
      initialPlacement: r,
      placement: g,
      strategy: a,
      middlewareData: h,
      rects: f,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = _ ?? d, p = E ?? p, h = {
      ...h,
      [w]: {
        ...h[w],
        ...C
      }
    }, N && y <= 50 && (y++, typeof N == "object" && (N.placement && (g = N.placement), N.rects && (f = N.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : N.rects), {
      x: d,
      y: p
    } = Sa(f, g, u)), v = -1);
  }
  return {
    x: d,
    y: p,
    placement: g,
    strategy: a,
    middlewareData: h
  };
};
async function cs(e, t) {
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
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: h = 0
  } = ut(t, e), y = as(h), w = c[g ? p === "floating" ? "reference" : "floating" : p], T = Dt(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: f,
    rootBoundary: d,
    strategy: u
  })), _ = p === "floating" ? {
    x: r,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), C = await (i.isElement == null ? void 0 : i.isElement(E)) ? await (i.getScale == null ? void 0 : i.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, N = Dt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: _,
    offsetParent: E,
    strategy: u
  }) : _);
  return {
    top: (T.top - N.top + y.top) / C.y,
    bottom: (N.bottom - T.bottom + y.bottom) / C.y,
    left: (T.left - N.left + y.left) / C.x,
    right: (N.right - T.right + y.right) / C.x
  };
}
const ku = (e) => ({
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
    const p = as(d), g = {
      x: n,
      y: r
    }, h = Tr(a), y = Er(h), v = await s.getDimensions(f), w = h === "y", T = w ? "top" : "left", _ = w ? "bottom" : "right", E = w ? "clientHeight" : "clientWidth", C = i.reference[y] + i.reference[h] - g[h] - i.floating[y], N = g[h] - i.reference[h], X = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let M = X ? X[E] : 0;
    (!M || !await (s.isElement == null ? void 0 : s.isElement(X))) && (M = c.floating[E] || i.floating[y]);
    const L = C / 2 - N / 2, U = M / 2 - v[y] / 2 - 1, R = He(p[T], U), W = He(p[_], U), B = R, x = M - v[y] - W, b = M / 2 - v[y] / 2 + L, O = $n(B, b, x), D = !u.arrow && ft(a) != null && b !== O && i.reference[y] / 2 - (b < B ? R : W) - v[y] / 2 < 0, A = D ? b < B ? b - B : b - x : 0;
    return {
      [h]: g[h] + A,
      data: {
        [h]: O,
        centerOffset: b - O - A,
        ...D && {
          alignmentOffset: A
        }
      },
      reset: D
    };
  }
}), Su = function(e) {
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
        crossAxis: p = !0,
        fallbackPlacements: g,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: v = !0,
        ...w
      } = ut(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const T = De(a), _ = Ae(c), E = De(c) === c, C = await (u.isRTL == null ? void 0 : u.isRTL(f.floating)), N = g || (E || !v ? [Lt(c)] : fu(c)), X = y !== "none";
      !g && X && N.push(...mu(c, v, y, C));
      const M = [c, ...N], L = await cs(t, w), U = [];
      let R = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && U.push(L[T]), p) {
        const O = uu(a, s, C);
        U.push(L[O[0]], L[O[1]]);
      }
      if (R = [...R, {
        placement: a,
        overflows: U
      }], !U.every((O) => O <= 0)) {
        var W, B;
        const O = (((W = i.flip) == null ? void 0 : W.index) || 0) + 1, D = M[O];
        if (D) {
          var x;
          const I = p === "alignment" ? _ !== Ae(D) : !1, F = ((x = R[0]) == null ? void 0 : x.overflows[0]) > 0;
          if (!I || F)
            return {
              data: {
                index: O,
                overflows: R
              },
              reset: {
                placement: D
              }
            };
        }
        let A = (B = R.filter((I) => I.overflows[0] <= 0).sort((I, F) => I.overflows[1] - F.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!A)
          switch (h) {
            case "bestFit": {
              var b;
              const I = (b = R.filter((F) => {
                if (X) {
                  const m = Ae(F.placement);
                  return m === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  m === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((m) => m > 0).reduce((m, j) => m + j, 0)]).sort((F, m) => F[1] - m[1])[0]) == null ? void 0 : b[0];
              I && (A = I);
              break;
            }
            case "initialPlacement":
              A = c;
              break;
          }
        if (a !== A)
          return {
            reset: {
              placement: A
            }
          };
      }
      return {};
    }
  };
};
async function Pu(e, t) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), s = De(n), c = ft(n), u = Ae(n) === "y", f = ["left", "top"].includes(s) ? -1 : 1, d = i && u ? -1 : 1, p = ut(t, e);
  let {
    mainAxis: g,
    crossAxis: h,
    alignmentAxis: y
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return c && typeof y == "number" && (h = c === "end" ? y * -1 : y), u ? {
    x: h * d,
    y: g * f
  } : {
    x: g * f,
    y: h * d
  };
}
const Au = function(e) {
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
      } = t, u = await Pu(t, e);
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
}, Iu = function(e) {
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
      }, d = await cs(t, u), p = Ae(De(a)), g = rs(p);
      let h = f[g], y = f[p];
      if (i) {
        const w = g === "y" ? "top" : "left", T = g === "y" ? "bottom" : "right", _ = h + d[w], E = h - d[T];
        h = $n(_, h, E);
      }
      if (s) {
        const w = p === "y" ? "top" : "left", T = p === "y" ? "bottom" : "right", _ = y + d[w], E = y - d[T];
        y = $n(_, y, E);
      }
      const v = c.fn({
        ...t,
        [g]: h,
        [p]: y
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [g]: i,
            [p]: s
          }
        }
      };
    }
  };
};
function us(e) {
  const t = ue(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = oe(e), i = a ? e.offsetWidth : n, s = a ? e.offsetHeight : r, c = Mt(n) !== i || Mt(r) !== s;
  return c && (n = i, r = s), {
    width: n,
    height: r,
    $: c
  };
}
function _r(e) {
  return ae(e) ? e : e.contextElement;
}
function We(e) {
  const t = _r(e);
  if (!oe(t))
    return he(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: i
  } = us(t);
  let s = (i ? Mt(n.width) : n.width) / r, c = (i ? Mt(n.height) : n.height) / a;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const Fu = /* @__PURE__ */ he(0);
function fs(e) {
  const t = se(e);
  return !Rr() || !t.visualViewport ? Fu : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Mu(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== se(e) ? !1 : t;
}
function ze(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), i = _r(e);
  let s = he(1);
  t && (r ? ae(r) && (s = We(r)) : s = We(e));
  const c = Mu(i, n, r) ? fs(i) : he(0);
  let u = (a.left + c.x) / s.x, f = (a.top + c.y) / s.y, d = a.width / s.x, p = a.height / s.y;
  if (i) {
    const g = se(i), h = r && ae(r) ? se(r) : r;
    let y = g, v = qn(y);
    for (; v && r && h !== y; ) {
      const w = We(v), T = v.getBoundingClientRect(), _ = ue(v), E = T.left + (v.clientLeft + parseFloat(_.paddingLeft)) * w.x, C = T.top + (v.clientTop + parseFloat(_.paddingTop)) * w.y;
      u *= w.x, f *= w.y, d *= w.x, p *= w.y, u += E, f += C, y = se(v), v = qn(y);
    }
  }
  return Dt({
    width: d,
    height: p,
    x: u,
    y: f
  });
}
function Or(e, t) {
  const n = Xt(e).scrollLeft;
  return t ? t.left + n : ze(ve(e)).left + n;
}
function ds(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Or(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: a,
    y: i
  };
}
function Lu(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: a
  } = e;
  const i = a === "fixed", s = ve(r), c = t ? Gt(t.floating) : !1;
  if (r === s || c && i)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = he(1);
  const d = he(0), p = oe(r);
  if ((p || !p && !i) && ((Ge(r) !== "body" || ct(s)) && (u = Xt(r)), oe(r))) {
    const h = ze(r);
    f = We(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const g = s && !p && !i ? ds(s, u, !0) : he(0);
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - u.scrollLeft * f.x + d.x + g.x,
    y: n.y * f.y - u.scrollTop * f.y + d.y + g.y
  };
}
function Du(e) {
  return Array.from(e.getClientRects());
}
function zu(e) {
  const t = ve(e), n = Xt(e), r = e.ownerDocument.body, a = Pe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Pe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Or(e);
  const c = -n.scrollTop;
  return ue(r).direction === "rtl" && (s += Pe(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
function qu(e, t) {
  const n = se(e), r = ve(e), a = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, c = 0, u = 0;
  if (a) {
    i = a.width, s = a.height;
    const f = Rr();
    (!f || f && t === "fixed") && (c = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: c,
    y: u
  };
}
function $u(e, t) {
  const n = ze(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, i = oe(e) ? We(e) : he(1), s = e.clientWidth * i.x, c = e.clientHeight * i.y, u = a * i.x, f = r * i.y;
  return {
    width: s,
    height: c,
    x: u,
    y: f
  };
}
function Pa(e, t, n) {
  let r;
  if (t === "viewport")
    r = qu(e, n);
  else if (t === "document")
    r = zu(ve(e));
  else if (ae(t))
    r = $u(t, n);
  else {
    const a = fs(e);
    r = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return Dt(r);
}
function ms(e, t) {
  const n = Ce(e);
  return n === t || !ae(n) || Ue(n) ? !1 : ue(n).position === "fixed" || ms(n, t);
}
function Bu(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = it(e, [], !1).filter((c) => ae(c) && Ge(c) !== "body"), a = null;
  const i = ue(e).position === "fixed";
  let s = i ? Ce(e) : e;
  for (; ae(s) && !Ue(s); ) {
    const c = ue(s), u = jr(s);
    !u && c.position === "fixed" && (a = null), (i ? !u && !a : !u && c.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || ct(s) && !u && ms(e, s)) ? r = r.filter((d) => d !== s) : a = c, s = Ce(s);
  }
  return t.set(e, r), r;
}
function Wu(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const s = [...n === "clippingAncestors" ? Gt(t) ? [] : Bu(t, this._c) : [].concat(n), r], c = s[0], u = s.reduce((f, d) => {
    const p = Pa(t, d, a);
    return f.top = Pe(p.top, f.top), f.right = He(p.right, f.right), f.bottom = He(p.bottom, f.bottom), f.left = Pe(p.left, f.left), f;
  }, Pa(t, c, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Yu(e) {
  const {
    width: t,
    height: n
  } = us(e);
  return {
    width: t,
    height: n
  };
}
function Uu(e, t, n) {
  const r = oe(t), a = ve(t), i = n === "fixed", s = ze(e, !0, i, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = he(0);
  function f() {
    u.x = Or(a);
  }
  if (r || !r && !i)
    if ((Ge(t) !== "body" || ct(a)) && (c = Xt(t)), r) {
      const h = ze(t, !0, i, t);
      u.x = h.x + t.clientLeft, u.y = h.y + t.clientTop;
    } else a && f();
  i && !r && a && f();
  const d = a && !r && !i ? ds(a, c) : he(0), p = s.left + c.scrollLeft - u.x - d.x, g = s.top + c.scrollTop - u.y - d.y;
  return {
    x: p,
    y: g,
    width: s.width,
    height: s.height
  };
}
function dn(e) {
  return ue(e).position === "static";
}
function Aa(e, t) {
  if (!oe(e) || ue(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ve(e) === n && (n = n.ownerDocument.body), n;
}
function ps(e, t) {
  const n = se(e);
  if (Gt(e))
    return n;
  if (!oe(e)) {
    let a = Ce(e);
    for (; a && !Ue(a); ) {
      if (ae(a) && !dn(a))
        return a;
      a = Ce(a);
    }
    return n;
  }
  let r = Aa(e, t);
  for (; r && su(r) && dn(r); )
    r = Aa(r, t);
  return r && Ue(r) && dn(r) && !jr(r) ? n : r || ou(e) || n;
}
const Hu = async function(e) {
  const t = this.getOffsetParent || ps, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Uu(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Vu(e) {
  return ue(e).direction === "rtl";
}
const Gu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Lu,
  getDocumentElement: ve,
  getClippingRect: Wu,
  getOffsetParent: ps,
  getElementRects: Hu,
  getClientRects: Du,
  getDimensions: Yu,
  getScale: We,
  isElement: ae,
  isRTL: Vu
};
function hs(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Xu(e, t) {
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
      top: p,
      width: g,
      height: h
    } = f;
    if (c || t(), !g || !h)
      return;
    const y = wt(p), v = wt(a.clientWidth - (d + g)), w = wt(a.clientHeight - (p + h)), T = wt(d), E = {
      rootMargin: -y + "px " + -v + "px " + -w + "px " + -T + "px",
      threshold: Pe(0, He(1, u)) || 1
    };
    let C = !0;
    function N(X) {
      const M = X[0].intersectionRatio;
      if (M !== u) {
        if (!C)
          return s();
        M ? s(!1, M) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !hs(f, e.getBoundingClientRect()) && s(), C = !1;
    }
    try {
      n = new IntersectionObserver(N, {
        ...E,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(N, E);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Ku(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, f = _r(e), d = a || i ? [...f ? it(f) : [], ...it(t)] : [];
  d.forEach((T) => {
    a && T.addEventListener("scroll", n, {
      passive: !0
    }), i && T.addEventListener("resize", n);
  });
  const p = f && c ? Xu(f, n) : null;
  let g = -1, h = null;
  s && (h = new ResizeObserver((T) => {
    let [_] = T;
    _ && _.target === f && h && (h.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var E;
      (E = h) == null || E.observe(t);
    })), n();
  }), f && !u && h.observe(f), h.observe(t));
  let y, v = u ? ze(e) : null;
  u && w();
  function w() {
    const T = ze(e);
    v && !hs(v, T) && n(), v = T, y = requestAnimationFrame(w);
  }
  return n(), () => {
    var T;
    d.forEach((_) => {
      a && _.removeEventListener("scroll", n), i && _.removeEventListener("resize", n);
    }), p == null || p(), (T = h) == null || T.disconnect(), h = null, u && cancelAnimationFrame(y);
  };
}
const Ju = Au, Zu = Iu, Qu = Su, Ia = ku, ef = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = {
    platform: Gu,
    ...n
  }, i = {
    ...a.platform,
    _c: r
  };
  return Cu(e, t, {
    ...a,
    platform: i
  });
};
var _t = typeof document < "u" ? Ha : Ie;
function qt(e, t) {
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
        if (!qt(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !qt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function gs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fa(e, t) {
  const n = gs(e);
  return Math.round(t * n) / n;
}
function mn(e) {
  const t = P.useRef(e);
  return _t(() => {
    t.current = e;
  }), t;
}
function tf(e) {
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
  } = e, [d, p] = P.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, h] = P.useState(r);
  qt(g, r) || h(r);
  const [y, v] = P.useState(null), [w, T] = P.useState(null), _ = P.useCallback((I) => {
    I !== X.current && (X.current = I, v(I));
  }, []), E = P.useCallback((I) => {
    I !== M.current && (M.current = I, T(I));
  }, []), C = i || y, N = s || w, X = P.useRef(null), M = P.useRef(null), L = P.useRef(d), U = u != null, R = mn(u), W = mn(a), B = mn(f), x = P.useCallback(() => {
    if (!X.current || !M.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: g
    };
    W.current && (I.platform = W.current), ef(X.current, M.current, I).then((F) => {
      const m = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: B.current !== !1
      };
      b.current && !qt(L.current, m) && (L.current = m, Va.flushSync(() => {
        p(m);
      }));
    });
  }, [g, t, n, W, B]);
  _t(() => {
    f === !1 && L.current.isPositioned && (L.current.isPositioned = !1, p((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [f]);
  const b = P.useRef(!1);
  _t(() => (b.current = !0, () => {
    b.current = !1;
  }), []), _t(() => {
    if (C && (X.current = C), N && (M.current = N), C && N) {
      if (R.current)
        return R.current(C, N, x);
      x();
    }
  }, [C, N, x, R, U]);
  const O = P.useMemo(() => ({
    reference: X,
    floating: M,
    setReference: _,
    setFloating: E
  }), [_, E]), D = P.useMemo(() => ({
    reference: C,
    floating: N
  }), [C, N]), A = P.useMemo(() => {
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return I;
    const F = Fa(D.floating, d.x), m = Fa(D.floating, d.y);
    return c ? {
      ...I,
      transform: "translate(" + F + "px, " + m + "px)",
      ...gs(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: F,
      top: m
    };
  }, [n, c, D.floating, d.x, d.y]);
  return P.useMemo(() => ({
    ...d,
    update: x,
    refs: O,
    elements: D,
    floatingStyles: A
  }), [d, x, O, D, A]);
}
const nf = (e) => {
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
      return r && t(r) ? r.current != null ? Ia({
        element: r.current,
        padding: a
      }).fn(n) : {} : r ? Ia({
        element: r,
        padding: a
      }).fn(n) : {};
    }
  };
}, rf = (e, t) => ({
  ...Ju(e),
  options: [e, t]
}), af = (e, t) => ({
  ...Zu(e),
  options: [e, t]
}), sf = (e, t) => ({
  ...Qu(e),
  options: [e, t]
}), of = (e, t) => ({
  ...nf(e),
  options: [e, t]
}), lf = "data-floating-ui-focusable", Ma = "active", La = "selected", cf = {
  ...P
};
let Da = !1, uf = 0;
const za = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + uf++
);
function ff() {
  const [e, t] = P.useState(() => Da ? za() : void 0);
  return ge(() => {
    e == null && t(za());
  }, []), P.useEffect(() => {
    Da = !0;
  }, []), e;
}
const df = cf.useId, Cr = df || ff;
let Yn;
process.env.NODE_ENV !== "production" && (Yn = /* @__PURE__ */ new Set());
function mf() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const a = "Floating UI: " + n.join(" ");
  if (!((e = Yn) != null && e.has(a))) {
    var i;
    (i = Yn) == null || i.add(a), console.error(a);
  }
}
function pf() {
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
const hf = /* @__PURE__ */ P.createContext(null), gf = /* @__PURE__ */ P.createContext(null), kr = () => {
  var e;
  return ((e = P.useContext(hf)) == null ? void 0 : e.id) || null;
}, vs = () => P.useContext(gf);
function Kt(e) {
  return "data-floating-ui-" + e;
}
function ce(e) {
  e.current !== -1 && (clearTimeout(e.current), e.current = -1);
}
const qa = /* @__PURE__ */ Kt("safe-polygon");
function pn(e, t, n) {
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
function hn(e) {
  return typeof e == "function" ? e() : e;
}
function vf(e, t) {
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
    restMs: p = 0,
    move: g = !0
  } = t, h = vs(), y = kr(), v = Nt(f), w = Nt(u), T = Nt(n), _ = Nt(p), E = P.useRef(), C = P.useRef(-1), N = P.useRef(), X = P.useRef(-1), M = P.useRef(!0), L = P.useRef(!1), U = P.useRef(() => {
  }), R = P.useRef(!1), W = P.useCallback(() => {
    var A;
    const I = (A = a.current.openEvent) == null ? void 0 : A.type;
    return (I == null ? void 0 : I.includes("mouse")) && I !== "mousedown";
  }, [a]);
  P.useEffect(() => {
    if (!c) return;
    function A(I) {
      let {
        open: F
      } = I;
      F || (ce(C), ce(X), M.current = !0, R.current = !1);
    }
    return i.on("openchange", A), () => {
      i.off("openchange", A);
    };
  }, [c, i]), P.useEffect(() => {
    if (!c || !v.current || !n) return;
    function A(F) {
      W() && r(!1, F, "hover");
    }
    const I = Re(s.floating).documentElement;
    return I.addEventListener("mouseleave", A), () => {
      I.removeEventListener("mouseleave", A);
    };
  }, [s.floating, n, r, c, v, W]);
  const B = P.useCallback(function(A, I, F) {
    I === void 0 && (I = !0), F === void 0 && (F = "hover");
    const m = pn(w.current, "close", E.current);
    m && !N.current ? (ce(C), C.current = window.setTimeout(() => r(!1, A, F), m)) : I && (ce(C), r(!1, A, F));
  }, [w, r]), x = Tt(() => {
    U.current(), N.current = void 0;
  }), b = Tt(() => {
    if (L.current) {
      const A = Re(s.floating).body;
      A.style.pointerEvents = "", A.removeAttribute(qa), L.current = !1;
    }
  }), O = Tt(() => a.current.openEvent ? ["click", "mousedown"].includes(a.current.openEvent.type) : !1);
  P.useEffect(() => {
    if (!c) return;
    function A(k) {
      if (ce(C), M.current = !1, d && !st(E.current) || hn(_.current) > 0 && !pn(w.current, "open"))
        return;
      const z = pn(w.current, "open", E.current);
      z ? C.current = window.setTimeout(() => {
        T.current || r(!0, k, "hover");
      }, z) : n || r(!0, k, "hover");
    }
    function I(k) {
      if (O()) {
        b();
        return;
      }
      U.current();
      const z = Re(s.floating);
      if (ce(X), R.current = !1, v.current && a.current.floatingContext) {
        n || ce(C), N.current = v.current({
          ...a.current.floatingContext,
          tree: h,
          x: k.clientX,
          y: k.clientY,
          onClose() {
            b(), x(), O() || B(k, !0, "safe-polygon");
          }
        });
        const H = N.current;
        z.addEventListener("mousemove", H), U.current = () => {
          z.removeEventListener("mousemove", H);
        };
        return;
      }
      (E.current === "touch" ? !zt(s.floating, k.relatedTarget) : !0) && B(k);
    }
    function F(k) {
      O() || a.current.floatingContext && (v.current == null || v.current({
        ...a.current.floatingContext,
        tree: h,
        x: k.clientX,
        y: k.clientY,
        onClose() {
          b(), x(), O() || B(k);
        }
      })(k));
    }
    function m() {
      ce(C);
    }
    function j(k) {
      O() || B(k, !1);
    }
    if (ae(s.domReference)) {
      const k = s.domReference, z = s.floating;
      return n && k.addEventListener("mouseleave", F), g && k.addEventListener("mousemove", A, {
        once: !0
      }), k.addEventListener("mouseenter", A), k.addEventListener("mouseleave", I), z && (z.addEventListener("mouseleave", F), z.addEventListener("mouseenter", m), z.addEventListener("mouseleave", j)), () => {
        n && k.removeEventListener("mouseleave", F), g && k.removeEventListener("mousemove", A), k.removeEventListener("mouseenter", A), k.removeEventListener("mouseleave", I), z && (z.removeEventListener("mouseleave", F), z.removeEventListener("mouseenter", m), z.removeEventListener("mouseleave", j));
      };
    }
  }, [s, c, e, d, g, B, x, b, r, n, T, h, w, v, a, O, _]), ge(() => {
    var A;
    if (c && n && (A = v.current) != null && A.__options.blockPointerEvents && W()) {
      L.current = !0;
      const F = s.floating;
      if (ae(s.domReference) && F) {
        var I;
        const m = Re(s.floating).body;
        m.setAttribute(qa, "");
        const j = s.domReference, k = h == null || (I = h.nodesRef.current.find((z) => z.id === y)) == null || (I = I.context) == null ? void 0 : I.elements.floating;
        return k && (k.style.pointerEvents = ""), m.style.pointerEvents = "none", j.style.pointerEvents = "auto", F.style.pointerEvents = "auto", () => {
          m.style.pointerEvents = "", j.style.pointerEvents = "", F.style.pointerEvents = "";
        };
      }
    }
  }, [c, n, y, s, h, v, W]), ge(() => {
    n || (E.current = void 0, R.current = !1, x(), b());
  }, [n, x, b]), P.useEffect(() => () => {
    x(), ce(C), ce(X), b();
  }, [c, s.domReference, x, b]);
  const D = P.useMemo(() => {
    function A(I) {
      E.current = I.pointerType;
    }
    return {
      onPointerDown: A,
      onPointerEnter: A,
      onMouseMove(I) {
        const {
          nativeEvent: F
        } = I;
        function m() {
          !M.current && !T.current && r(!0, F, "hover");
        }
        d && !st(E.current) || n || hn(_.current) === 0 || R.current && I.movementX ** 2 + I.movementY ** 2 < 2 || (ce(X), E.current === "touch" ? m() : (R.current = !0, X.current = window.setTimeout(m, hn(_.current))));
      }
    };
  }, [d, r, n, T, _]);
  return P.useMemo(() => c ? {
    reference: D
  } : {}, [c, D]);
}
function gn(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ft(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function bf(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const bs = {
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
}, $a = /* @__PURE__ */ P.forwardRef(function(t, n) {
  const [r, a] = P.useState();
  ge(() => {
    is() && a("button");
  }, []);
  const i = {
    ref: n,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: r,
    "aria-hidden": r ? void 0 : !0,
    [Kt("focus-guard")]: "",
    style: bs
  };
  return /* @__PURE__ */ o.jsx("span", {
    ...t,
    ...i
  });
}), ys = /* @__PURE__ */ P.createContext(null), Ba = /* @__PURE__ */ Kt("portal");
function yf(e) {
  e === void 0 && (e = {});
  const {
    id: t,
    root: n
  } = e, r = Cr(), a = wf(), [i, s] = P.useState(null), c = P.useRef(null);
  return ge(() => () => {
    i == null || i.remove(), queueMicrotask(() => {
      c.current = null;
    });
  }, [i]), ge(() => {
    if (!r || c.current) return;
    const u = t ? document.getElementById(t) : null;
    if (!u) return;
    const f = document.createElement("div");
    f.id = r, f.setAttribute(Ba, ""), u.appendChild(f), c.current = f, s(f);
  }, [t, r]), ge(() => {
    if (n === null || !r || c.current) return;
    let u = n || (a == null ? void 0 : a.portalNode);
    u && !ae(u) && (u = u.current), u = u || document.body;
    let f = null;
    t && (f = document.createElement("div"), f.id = t, u.appendChild(f));
    const d = document.createElement("div");
    d.id = r, d.setAttribute(Ba, ""), u = f || u, u.appendChild(d), c.current = d, s(d);
  }, [t, n, r, a]), i;
}
function xf(e) {
  const {
    children: t,
    id: n,
    root: r,
    preserveTabOrder: a = !0
  } = e, i = yf({
    id: n,
    root: r
  }), [s, c] = P.useState(null), u = P.useRef(null), f = P.useRef(null), d = P.useRef(null), p = P.useRef(null), g = s == null ? void 0 : s.modal, h = s == null ? void 0 : s.open, y = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!s && // Guards are only for non-modal focus management.
    !s.modal && // Don't render if unmount is transitioning.
    s.open && a && !!(r || i)
  );
  return P.useEffect(() => {
    if (!i || !a || g)
      return;
    function v(w) {
      i && fn(w) && (w.type === "focusin" ? ka : Ou)(i);
    }
    return i.addEventListener("focusin", v, !0), i.addEventListener("focusout", v, !0), () => {
      i.removeEventListener("focusin", v, !0), i.removeEventListener("focusout", v, !0);
    };
  }, [i, a, g]), P.useEffect(() => {
    i && (h || ka(i));
  }, [h, i]), /* @__PURE__ */ o.jsxs(ys.Provider, {
    value: P.useMemo(() => ({
      preserveTabOrder: a,
      beforeOutsideRef: u,
      afterOutsideRef: f,
      beforeInsideRef: d,
      afterInsideRef: p,
      portalNode: i,
      setFocusManagerState: c
    }), [a, i]),
    children: [y && i && /* @__PURE__ */ o.jsx($a, {
      "data-type": "outside",
      ref: u,
      onFocus: (v) => {
        if (fn(v, i)) {
          var w;
          (w = d.current) == null || w.focus();
        } else {
          const T = s ? s.domReference : null, _ = _u(T);
          _ == null || _.focus();
        }
      }
    }), y && i && /* @__PURE__ */ o.jsx("span", {
      "aria-owns": i.id,
      style: bs
    }), i && /* @__PURE__ */ Va.createPortal(t, i), y && i && /* @__PURE__ */ o.jsx($a, {
      "data-type": "outside",
      ref: f,
      onFocus: (v) => {
        if (fn(v, i)) {
          var w;
          (w = p.current) == null || w.focus();
        } else {
          const T = s ? s.domReference : null, _ = Tu(T);
          _ == null || _.focus(), s != null && s.closeOnFocusOut && (s == null || s.onOpenChange(!1, v.nativeEvent, "focus-out"));
        }
      }
    })]
  });
}
const wf = () => P.useContext(ys);
function Wa(e) {
  return oe(e.target) && e.target.tagName === "BUTTON";
}
function Nf(e) {
  return oe(e.target) && e.target.tagName === "A";
}
function Ya(e) {
  return ss(e);
}
function jf(e, t) {
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
    stickIfOpen: p = !0
  } = t, g = P.useRef(), h = P.useRef(!1), y = P.useMemo(() => ({
    onPointerDown(v) {
      g.current = v.pointerType;
    },
    onMouseDown(v) {
      const w = g.current;
      v.button === 0 && c !== "click" && (st(w, !0) && f || (n && u && (!(a.current.openEvent && p) || a.current.openEvent.type === "mousedown") ? r(!1, v.nativeEvent, "click") : (v.preventDefault(), r(!0, v.nativeEvent, "click"))));
    },
    onClick(v) {
      const w = g.current;
      if (c === "mousedown" && g.current) {
        g.current = void 0;
        return;
      }
      st(w, !0) && f || (n && u && (!(a.current.openEvent && p) || a.current.openEvent.type === "click") ? r(!1, v.nativeEvent, "click") : r(!0, v.nativeEvent, "click"));
    },
    onKeyDown(v) {
      g.current = void 0, !(v.defaultPrevented || !d || Wa(v)) && (v.key === " " && !Ya(i) && (v.preventDefault(), h.current = !0), !Nf(v) && v.key === "Enter" && r(!(n && u), v.nativeEvent, "click"));
    },
    onKeyUp(v) {
      v.defaultPrevented || !d || Wa(v) || Ya(i) || v.key === " " && h.current && (h.current = !1, r(!(n && u), v.nativeEvent, "click"));
    }
  }), [a, i, c, f, d, r, n, p, u]);
  return P.useMemo(() => s ? {
    reference: y
  } : {}, [s, y]);
}
function Rf(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, a = Cr(), i = P.useRef({}), [s] = P.useState(() => pf()), c = kr() != null;
  if (process.env.NODE_ENV !== "production") {
    const h = r.reference;
    h && !ae(h) && mf("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [u, f] = P.useState(r.reference), d = Tt((h, y, v) => {
    i.current.openEvent = h ? y : void 0, s.emit("openchange", {
      open: h,
      event: y,
      reason: v,
      nested: c
    }), n == null || n(h, y, v);
  }), p = P.useMemo(() => ({
    setPositionReference: f
  }), []), g = P.useMemo(() => ({
    reference: u || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [u, r.reference, r.floating]);
  return P.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: d,
    elements: g,
    events: s,
    floatingId: a,
    refs: p
  }), [t, d, g, s, a, p]);
}
function Ef(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Rf({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, a = r.elements, [i, s] = P.useState(null), [c, u] = P.useState(null), d = (a == null ? void 0 : a.domReference) || i, p = P.useRef(null), g = vs();
  ge(() => {
    d && (p.current = d);
  }, [d]);
  const h = tf({
    ...e,
    elements: {
      ...a,
      ...c && {
        reference: c
      }
    }
  }), y = P.useCallback((E) => {
    const C = ae(E) ? {
      getBoundingClientRect: () => E.getBoundingClientRect(),
      getClientRects: () => E.getClientRects(),
      contextElement: E
    } : E;
    u(C), h.refs.setReference(C);
  }, [h.refs]), v = P.useCallback((E) => {
    (ae(E) || E === null) && (p.current = E, s(E)), (ae(h.refs.reference.current) || h.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    E !== null && !ae(E)) && h.refs.setReference(E);
  }, [h.refs]), w = P.useMemo(() => ({
    ...h.refs,
    setReference: v,
    setPositionReference: y,
    domReference: p
  }), [h.refs, v, y]), T = P.useMemo(() => ({
    ...h.elements,
    domReference: d
  }), [h.elements, d]), _ = P.useMemo(() => ({
    ...h,
    ...r,
    refs: w,
    elements: T,
    nodeId: t
  }), [h, w, T, t, r]);
  return ge(() => {
    r.dataRef.current.floatingContext = _;
    const E = g == null ? void 0 : g.nodesRef.current.find((C) => C.id === t);
    E && (E.context = _);
  }), P.useMemo(() => ({
    ...h,
    context: _,
    refs: w,
    elements: T
  }), [h, w, T, _]);
}
function vn() {
  return vu() && is();
}
function Tf(e, t) {
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
  } = t, f = P.useRef(!1), d = P.useRef(-1), p = P.useRef(!0);
  P.useEffect(() => {
    if (!c) return;
    const h = se(s.domReference);
    function y() {
      !n && oe(s.domReference) && s.domReference === Wn(Re(s.domReference)) && (f.current = !0);
    }
    function v() {
      p.current = !0;
    }
    function w() {
      p.current = !1;
    }
    return h.addEventListener("blur", y), vn() && (h.addEventListener("keydown", v, !0), h.addEventListener("pointerdown", w, !0)), () => {
      h.removeEventListener("blur", y), vn() && (h.removeEventListener("keydown", v, !0), h.removeEventListener("pointerdown", w, !0));
    };
  }, [s.domReference, n, c]), P.useEffect(() => {
    if (!c) return;
    function h(y) {
      let {
        reason: v
      } = y;
      (v === "reference-press" || v === "escape-key") && (f.current = !0);
    }
    return a.on("openchange", h), () => {
      a.off("openchange", h);
    };
  }, [a, c]), P.useEffect(() => () => {
    ce(d);
  }, []);
  const g = P.useMemo(() => ({
    onMouseLeave() {
      f.current = !1;
    },
    onFocus(h) {
      if (f.current) return;
      const y = xu(h.nativeEvent);
      if (u && ae(y)) {
        if (vn() && !h.relatedTarget) {
          if (!p.current && !ss(y))
            return;
        } else if (!wu(y))
          return;
      }
      r(!0, h.nativeEvent, "focus");
    },
    onBlur(h) {
      f.current = !1;
      const y = h.relatedTarget, v = h.nativeEvent, w = ae(y) && y.hasAttribute(Kt("focus-guard")) && y.getAttribute("data-type") === "outside";
      d.current = window.setTimeout(() => {
        var T;
        const _ = Wn(s.domReference ? s.domReference.ownerDocument : document);
        !y && _ === s.domReference || zt((T = i.current.floatingContext) == null ? void 0 : T.refs.floating.current, _) || zt(s.domReference, _) || w || r(!1, v, "focus");
      });
    }
  }), [i, s.domReference, r, u]);
  return P.useMemo(() => c ? {
    reference: g
  } : {}, [c, g]);
}
function bn(e, t, n) {
  const r = /* @__PURE__ */ new Map(), a = n === "item";
  let i = e;
  if (a && e) {
    const {
      [Ma]: s,
      [La]: c,
      ...u
    } = e;
    i = u;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [lf]: ""
    },
    ...i,
    ...t.map((s) => {
      const c = s ? s[n] : null;
      return typeof c == "function" ? e ? c(e) : null : c;
    }).concat(e).reduce((s, c) => (c && Object.entries(c).forEach((u) => {
      let [f, d] = u;
      if (!(a && [Ma, La].includes(f)))
        if (f.indexOf("on") === 0) {
          if (r.has(f) || r.set(f, []), typeof d == "function") {
            var p;
            (p = r.get(f)) == null || p.push(d), s[f] = function() {
              for (var g, h = arguments.length, y = new Array(h), v = 0; v < h; v++)
                y[v] = arguments[v];
              return (g = r.get(f)) == null ? void 0 : g.map((w) => w(...y)).find((w) => w !== void 0);
            };
          }
        } else
          s[f] = d;
    }), s), {})
  };
}
function _f(e) {
  e === void 0 && (e = []);
  const t = e.map((c) => c == null ? void 0 : c.reference), n = e.map((c) => c == null ? void 0 : c.floating), r = e.map((c) => c == null ? void 0 : c.item), a = P.useCallback(
    (c) => bn(c, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = P.useCallback(
    (c) => bn(c, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), s = P.useCallback(
    (c) => bn(c, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return P.useMemo(() => ({
    getReferenceProps: a,
    getFloatingProps: i,
    getItemProps: s
  }), [a, i, s]);
}
const Of = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function Cf(e, t) {
  var n, r;
  t === void 0 && (t = {});
  const {
    open: a,
    elements: i,
    floatingId: s
  } = e, {
    enabled: c = !0,
    role: u = "dialog"
  } = t, f = Cr(), d = ((n = i.domReference) == null ? void 0 : n.id) || f, p = P.useMemo(() => {
    var _;
    return ((_ = Nu(i.floating)) == null ? void 0 : _.id) || s;
  }, [i.floating, s]), g = (r = Of.get(u)) != null ? r : u, y = kr() != null, v = P.useMemo(() => g === "tooltip" || u === "label" ? {
    ["aria-" + (u === "label" ? "labelledby" : "describedby")]: a ? p : void 0
  } : {
    "aria-expanded": a ? "true" : "false",
    "aria-haspopup": g === "alertdialog" ? "dialog" : g,
    "aria-controls": a ? p : void 0,
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
  }, [g, p, y, a, d, u]), w = P.useMemo(() => {
    const _ = {
      id: p,
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
  }, [g, p, d, u]), T = P.useCallback((_) => {
    let {
      active: E,
      selected: C
    } = _;
    const N = {
      role: "option",
      ...E && {
        id: p + "-fui-option"
      }
    };
    switch (u) {
      case "select":
        return {
          ...N,
          "aria-selected": E && C
        };
      case "combobox":
        return {
          ...N,
          "aria-selected": C
        };
    }
    return {};
  }, [p, u]);
  return P.useMemo(() => c ? {
    reference: v,
    floating: w,
    item: T
  } : {}, [c, v, w, T]);
}
function kf(e, t, n) {
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
function Ua(e, t) {
  const [n, r] = e;
  let a = !1;
  const i = t.length;
  for (let s = 0, c = i - 1; s < i; c = s++) {
    const [u, f] = t[s] || [0, 0], [d, p] = t[c] || [0, 0];
    f >= r != p >= r && n <= (d - u) * (r - f) / (p - f) + u && (a = !a);
  }
  return a;
}
function Sf(e, t) {
  return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height;
}
function Pf(e) {
  e === void 0 && (e = {});
  const {
    buffer: t = 0.5,
    blockPointerEvents: n = !1,
    requireIntent: r = !0
  } = e;
  let a, i = !1, s = null, c = null, u = performance.now();
  function f(p, g) {
    const h = performance.now(), y = h - u;
    if (s === null || c === null || y === 0)
      return s = p, c = g, u = h, null;
    const v = p - s, w = g - c, _ = Math.sqrt(v * v + w * w) / y;
    return s = p, c = g, u = h, _;
  }
  const d = (p) => {
    let {
      x: g,
      y: h,
      placement: y,
      elements: v,
      onClose: w,
      nodeId: T,
      tree: _
    } = p;
    return function(C) {
      function N() {
        clearTimeout(a), w();
      }
      if (clearTimeout(a), !v.domReference || !v.floating || y == null || g == null || h == null)
        return;
      const {
        clientX: X,
        clientY: M
      } = C, L = [X, M], U = bf(C), R = C.type === "mouseleave", W = gn(v.floating, U), B = gn(v.domReference, U), x = v.domReference.getBoundingClientRect(), b = v.floating.getBoundingClientRect(), O = y.split("-")[0], D = g > b.right - b.width / 2, A = h > b.bottom - b.height / 2, I = Sf(L, x), F = b.width > x.width, m = b.height > x.height, j = (F ? x : b).left, k = (F ? x : b).right, z = (m ? x : b).top, Y = (m ? x : b).bottom;
      if (W && (i = !0, !R))
        return;
      if (B && (i = !1), B && !R) {
        i = !0;
        return;
      }
      if (R && ae(C.relatedTarget) && gn(v.floating, C.relatedTarget) || _ && kf(_.nodesRef.current, T).some((K) => {
        let {
          context: $
        } = K;
        return $ == null ? void 0 : $.open;
      }))
        return;
      if (O === "top" && h >= x.bottom - 1 || O === "bottom" && h <= x.top + 1 || O === "left" && g >= x.right - 1 || O === "right" && g <= x.left + 1)
        return N();
      let H = [];
      switch (O) {
        case "top":
          H = [[j, x.top + 1], [j, b.bottom - 1], [k, b.bottom - 1], [k, x.top + 1]];
          break;
        case "bottom":
          H = [[j, b.top + 1], [j, x.bottom - 1], [k, x.bottom - 1], [k, b.top + 1]];
          break;
        case "left":
          H = [[b.right - 1, Y], [b.right - 1, z], [x.left + 1, z], [x.left + 1, Y]];
          break;
        case "right":
          H = [[x.right - 1, Y], [x.right - 1, z], [b.left + 1, z], [b.left + 1, Y]];
          break;
      }
      function J(K) {
        let [$, G] = K;
        switch (O) {
          case "top": {
            const Z = [F ? $ + t / 2 : D ? $ + t * 4 : $ - t * 4, G + t + 1], ne = [F ? $ - t / 2 : D ? $ + t * 4 : $ - t * 4, G + t + 1], q = [[b.left, D || F ? b.bottom - t : b.top], [b.right, D ? F ? b.bottom - t : b.top : b.bottom - t]];
            return [Z, ne, ...q];
          }
          case "bottom": {
            const Z = [F ? $ + t / 2 : D ? $ + t * 4 : $ - t * 4, G - t], ne = [F ? $ - t / 2 : D ? $ + t * 4 : $ - t * 4, G - t], q = [[b.left, D || F ? b.top + t : b.bottom], [b.right, D ? F ? b.top + t : b.bottom : b.top + t]];
            return [Z, ne, ...q];
          }
          case "left": {
            const Z = [$ + t + 1, m ? G + t / 2 : A ? G + t * 4 : G - t * 4], ne = [$ + t + 1, m ? G - t / 2 : A ? G + t * 4 : G - t * 4];
            return [...[[A || m ? b.right - t : b.left, b.top], [A ? m ? b.right - t : b.left : b.right - t, b.bottom]], Z, ne];
          }
          case "right": {
            const Z = [$ - t, m ? G + t / 2 : A ? G + t * 4 : G - t * 4], ne = [$ - t, m ? G - t / 2 : A ? G + t * 4 : G - t * 4], q = [[A || m ? b.left + t : b.right, b.top], [A ? m ? b.left + t : b.right : b.left + t, b.bottom]];
            return [Z, ne, ...q];
          }
        }
      }
      if (!Ua([X, M], H)) {
        if (i && !I)
          return N();
        if (!R && r) {
          const K = f(C.clientX, C.clientY);
          if (K !== null && K < 0.1)
            return N();
        }
        Ua([X, M], J([g, h])) ? !i && r && (a = window.setTimeout(N, 40)) : N();
      }
    };
  };
  return d.__options = {
    blockPointerEvents: n
  }, d;
}
const Af = ({
  children: e,
  content: t,
  position: n = "top",
  theme: r = "dark",
  showArrow: a = !0,
  className: i = "",
  isPopup: s = !1,
  triggerOnClick: c = !1
}) => {
  var b, O;
  const [u, f] = Ee(!1), d = nt(null), { x: p, y: g, strategy: h, refs: y, context: v, middlewareData: w, placement: T } = Ef({
    open: u,
    onOpenChange: f,
    placement: n,
    middleware: [
      rf(8),
      sf(),
      af({ padding: 8 }),
      ...a ? [of({ element: d })] : []
    ],
    whileElementsMounted: Ku
  }), _ = vf(v, {
    move: !1,
    handleClose: Pf(),
    enabled: !c
  }), E = jf(v, {
    enabled: c
  }), C = Tf(v), N = Cf(v, { role: "tooltip" }), { getReferenceProps: X, getFloatingProps: M } = _f([
    _,
    C,
    N,
    ...c ? [E] : []
  ]), L = (b = w.arrow) == null ? void 0 : b.x, U = (O = w.arrow) == null ? void 0 : O.y, R = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[T.split("-")[0]], W = () => {
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
  }, [B, x] = Ee(!1);
  return Ie(() => (x(!0), () => x(!1)), []), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    be.cloneElement(
      e,
      {
        ref: y.setReference,
        ...X()
      }
    ),
    B && u && /* @__PURE__ */ o.jsx(xf, { children: /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: y.setFloating,
        className: `tooltip__body tooltip__body--${r} ${s ? "tooltip__body--popup" : ""} ${i}`,
        style: {
          position: h,
          top: g ?? 0,
          left: p ?? 0,
          zIndex: 1e3,
          pointerEvents: s ? "auto" : "none"
        },
        ...M(),
        children: [
          t,
          a && /* @__PURE__ */ o.jsx(
            "div",
            {
              ref: d,
              className: "tooltip__arrow",
              style: {
                position: "absolute",
                left: L != null ? `${L}px` : "",
                top: U != null ? `${U}px` : "",
                [R]: "-5px",
                width: "10px",
                height: "10px",
                backgroundColor: r === "light" ? "#f0f0f0" : "#181818",
                transform: `rotate(${W()})`
              }
            }
          )
        ]
      }
    ) })
  ] });
};
Af.propTypes = {
  children: l.node.isRequired,
  content: l.node.isRequired,
  position: l.oneOf(["top", "right", "bottom", "left"]),
  theme: l.oneOf(["dark", "light"]),
  showArrow: l.bool,
  className: l.string,
  isPopup: l.bool,
  triggerOnClick: l.bool
};
const If = ({
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
  ...p
}) => {
  const g = "usa-button", h = t !== "default" ? `${g}--${t}` : "", y = n === "big" ? `${g}--big` : "", v = i ? `${g}--unstyled` : "", w = [
    g,
    h,
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
      ...p,
      children: [
        u && /* @__PURE__ */ o.jsx("span", { className: "usa-button__icon usa-button__icon--left", children: /* @__PURE__ */ o.jsx(re, { icon: u }) }),
        e,
        f && /* @__PURE__ */ o.jsx("span", { className: "usa-button__icon usa-button__icon--right", children: /* @__PURE__ */ o.jsx(re, { icon: f }) })
      ]
    }
  );
};
If.propTypes = {
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
const xs = ({
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
        return Na;
      case "warning":
        return mc;
      case "success":
        return tc;
      case "error":
        return wa;
      case "emergency":
        return wa;
      default:
        return Na;
    }
  };
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      className: s,
      role: e === "error" || e === "emergency" ? "alert" : void 0,
      children: /* @__PURE__ */ o.jsxs("div", { className: "alert__body", children: [
        !a && /* @__PURE__ */ o.jsx("div", { className: "alert__icon", children: /* @__PURE__ */ o.jsx(re, { icon: c() }) }),
        /* @__PURE__ */ o.jsxs("div", { className: "alert__content", children: [
          t && /* @__PURE__ */ o.jsx("h4", { className: "alert__heading", children: t }),
          /* @__PURE__ */ o.jsx("div", { className: "alert__text", children: n })
        ] })
      ] })
    }
  );
};
xs.propTypes = {
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
xs.defaultProps = {
  type: "info",
  heading: void 0,
  slim: !1,
  noIcon: !1,
  className: ""
};
const Ff = ({
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
  const d = c && u, p = [
    "usa-fieldset",
    "checkbox-group",
    s ? "checkbox-group--tiled" : "",
    d ? "checkbox-group--error" : "",
    f
  ].filter(Boolean).join(" "), g = (h, y) => {
    let v;
    y ? v = [...a, h] : v = a.filter((w) => w !== h), i(v);
  };
  return /* @__PURE__ */ o.jsxs("fieldset", { className: p, children: [
    /* @__PURE__ */ o.jsxs("legend", { className: "usa-legend", children: [
      t,
      c && /* @__PURE__ */ o.jsx("span", { className: "checkbox-required-asterisk", children: " *" })
    ] }),
    n && /* @__PURE__ */ o.jsx("p", { className: "checkbox-description", children: n }),
    d && /* @__PURE__ */ o.jsx("p", { className: "checkbox-error-message", children: u }),
    /* @__PURE__ */ o.jsx("div", { className: "checkbox-options-wrapper", children: r.map((h) => {
      const { value: y, labelText: v, labelDescription: w, disabled: T } = h, _ = a.includes(y), E = `${e}-${y}`, C = [
        "usa-checkbox",
        T ? "usa-checkbox--disabled" : ""
      ].filter(Boolean).join(" "), N = [
        "usa-checkbox__input",
        s ? "usa-checkbox__input--tile" : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ o.jsxs("div", { className: C, children: [
        /* @__PURE__ */ o.jsx(
          "input",
          {
            className: N,
            type: "checkbox",
            id: E,
            name: e,
            value: y,
            checked: _,
            onChange: (X) => g(y, X.target.checked),
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
Ff.propTypes = {
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
const Bf = () => /* @__PURE__ */ o.jsxs(
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
), Mf = ({
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
  errorMessage: p,
  className: g,
  ...h
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
    r === "error" && p && /* @__PURE__ */ o.jsx("span", { className: "usa-text-input__error-message", children: p }),
    /* @__PURE__ */ o.jsxs("div", { className: v, children: [
      u && /* @__PURE__ */ o.jsx("div", { className: "usa-input-prefix", children: /* @__PURE__ */ o.jsx(re, { icon: u }) }),
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
          ...h
        }
      ),
      f && /* @__PURE__ */ o.jsx("div", { className: "usa-input-suffix", children: f })
    ] })
  ] });
};
Mf.propTypes = {
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
const ws = ({
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
ws.propTypes = {
  label: l.string.isRequired,
  status: l.oneOf(["complete", "current", "not-complete"]).isRequired,
  showLabel: l.bool,
  showCounter: l.bool,
  smallCounter: l.bool,
  centered: l.bool,
  number: l.number.isRequired
};
const Lf = ({
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
  const d = "usa-step-indicator", p = a ? "" : `${d}--no-labels`, g = i ? `${d}--counters` : "", h = c ? `${d}--counters-sm` : "", y = s ? `${d}--center` : "", v = r !== "default" ? `${d}--${r}` : "", w = [
    d,
    p,
    g,
    h,
    y,
    v,
    u
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs("div", { className: w, variant: r, ...f, children: [
    /* @__PURE__ */ o.jsx("ol", { className: "usa-step-indicator__segments", children: e.map((T, _) => /* @__PURE__ */ o.jsx(
      ws,
      {
        label: T.label,
        status: Df(_, t - 1),
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
        /* @__PURE__ */ o.jsx(re, { icon: Ql, className: "usa-step-indicator__heading-icon" }),
        /* @__PURE__ */ o.jsx("span", { className: "usa-step-indicator__heading-text", children: n })
      ] })
    ] }) })
  ] });
};
function Df(e, t) {
  return e < t ? "complete" : e === t ? "current" : "not-complete";
}
Lf.propTypes = {
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
  xs as Alert,
  rr as Banner,
  cr as Breadcrumbs,
  If as Button,
  Ff as Checkbox,
  Qi as ColorSwatch,
  wc as Contacts,
  Bf as ExternalLinkIcon,
  lr as Footer,
  sr as Header,
  jc as HeroGlobal,
  Nc as HeroHomepage,
  iu as Modal,
  Ii as PageTemplate,
  hc as ProcessSteps,
  vc as Search,
  Mi as SideNav,
  or as SkipNav,
  es as SpacingDisplay,
  $f as SpacingExamples,
  qf as SpacingTokens,
  Lf as StepIndicator,
  pc as SummaryBox,
  gc as Tag,
  Mf as TextInput,
  Af as Tooltip,
  Zi as Typography
};
