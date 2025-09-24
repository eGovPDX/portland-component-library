import * as D from "react";
import ne, { useState as ie, useEffect as le, useRef as pe, useCallback as vt, useMemo as tn, useLayoutEffect as ls } from "react";
import * as cs from "react-dom";
function us(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function fs(e) {
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
var bt = { exports: {} }, Qe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ur;
function oo() {
  if (Ur) return Qe;
  Ur = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, i) {
    var o = null;
    if (i !== void 0 && (o = "" + i), a.key !== void 0 && (o = "" + a.key), "key" in a) {
      i = {};
      for (var c in a)
        c !== "key" && (i[c] = a[c]);
    } else i = a;
    return a = i.ref, {
      $$typeof: e,
      type: r,
      key: o,
      ref: a !== void 0 ? a : null,
      props: i
    };
  }
  return Qe.Fragment = t, Qe.jsx = n, Qe.jsxs = n, Qe;
}
var et = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr;
function lo() {
  return Yr || (Yr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(m) {
      if (m == null) return null;
      if (typeof m == "function")
        return m.$$typeof === k ? null : m.displayName || m.name || null;
      if (typeof m == "string") return m;
      switch (m) {
        case v:
          return "Fragment";
        case R:
          return "Profiler";
        case x:
          return "StrictMode";
        case C:
          return "Suspense";
        case V:
          return "SuspenseList";
        case W:
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
          case T:
            return (m._context.displayName || "Context") + ".Consumer";
          case O:
            var _ = m.render;
            return m = m.displayName, m || (m = _.displayName || _.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
          case I:
            return _ = m.displayName || null, _ !== null ? _ : e(m.type) || "Memo";
          case M:
            _ = m._payload, m = m._init;
            try {
              return e(m(_));
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
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var P = _.error, $ = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return P.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          $
        ), t(m);
      }
    }
    function r(m) {
      if (m === v) return "<>";
      if (typeof m == "object" && m !== null && m.$$typeof === M)
        return "<...>";
      try {
        var _ = e(m);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var m = q.A;
      return m === null ? null : m.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(m) {
      if (z.call(m, "key")) {
        var _ = Object.getOwnPropertyDescriptor(m, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return m.key !== void 0;
    }
    function c(m, _) {
      function P() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      P.isReactWarning = !0, Object.defineProperty(m, "key", {
        get: P,
        configurable: !0
      });
    }
    function u() {
      var m = e(this.type);
      return A[m] || (A[m] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), m = this.props.ref, m !== void 0 ? m : null;
    }
    function f(m, _, P, $, Y, H, X, J) {
      return P = H.ref, m = {
        $$typeof: h,
        type: m,
        key: _,
        props: H,
        _owner: Y
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(m, "ref", {
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
        value: X
      }), Object.defineProperty(m, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    }
    function d(m, _, P, $, Y, H, X, J) {
      var U = _.children;
      if (U !== void 0)
        if ($)
          if (w(U)) {
            for ($ = 0; $ < U.length; $++)
              p(U[$]);
            Object.freeze && Object.freeze(U);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(U);
      if (z.call(_, "key")) {
        U = e(m);
        var K = Object.keys(_).filter(function(re) {
          return re !== "key";
        });
        $ = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", F[U + $] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          $,
          U,
          K,
          U
        ), F[U + $] = !0);
      }
      if (U = null, P !== void 0 && (n(P), U = "" + P), o(_) && (n(_.key), U = "" + _.key), "key" in _) {
        P = {};
        for (var Z in _)
          Z !== "key" && (P[Z] = _[Z]);
      } else P = _;
      return U && c(
        P,
        typeof m == "function" ? m.displayName || m.name || "Unknown" : m
      ), f(
        m,
        U,
        H,
        Y,
        a(),
        P,
        X,
        J
      );
    }
    function p(m) {
      typeof m == "object" && m !== null && m.$$typeof === h && m._store && (m._store.validated = 1);
    }
    var g = ne, h = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), E = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), q = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, w = Array.isArray, y = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(m) {
        return m();
      }
    };
    var N, A = {}, j = g["react-stack-bottom-frame"].bind(
      g,
      i
    )(), S = y(r(i)), F = {};
    et.Fragment = v, et.jsx = function(m, _, P, $, Y) {
      var H = 1e4 > q.recentlyCreatedOwnerStacks++;
      return d(
        m,
        _,
        P,
        !1,
        $,
        Y,
        H ? Error("react-stack-top-frame") : j,
        H ? y(r(m)) : S
      );
    }, et.jsxs = function(m, _, P, $, Y) {
      var H = 1e4 > q.recentlyCreatedOwnerStacks++;
      return d(
        m,
        _,
        P,
        !0,
        $,
        Y,
        H ? Error("react-stack-top-frame") : j,
        H ? y(r(m)) : S
      );
    };
  }()), et;
}
var Hr;
function co() {
  return Hr || (Hr = 1, process.env.NODE_ENV === "production" ? bt.exports = oo() : bt.exports = lo()), bt.exports;
}
var s = co(), yt = { exports: {} }, xt = { exports: {} }, ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function uo() {
  if (Vr) return ee;
  Vr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function E(C) {
    if (typeof C == "object" && C !== null) {
      var V = C.$$typeof;
      switch (V) {
        case t:
          switch (C = C.type, C) {
            case u:
            case f:
            case r:
            case i:
            case a:
            case p:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case c:
                case d:
                case b:
                case h:
                case o:
                  return C;
                default:
                  return V;
              }
          }
        case n:
          return V;
      }
    }
  }
  function O(C) {
    return E(C) === f;
  }
  return ee.AsyncMode = u, ee.ConcurrentMode = f, ee.ContextConsumer = c, ee.ContextProvider = o, ee.Element = t, ee.ForwardRef = d, ee.Fragment = r, ee.Lazy = b, ee.Memo = h, ee.Portal = n, ee.Profiler = i, ee.StrictMode = a, ee.Suspense = p, ee.isAsyncMode = function(C) {
    return O(C) || E(C) === u;
  }, ee.isConcurrentMode = O, ee.isContextConsumer = function(C) {
    return E(C) === c;
  }, ee.isContextProvider = function(C) {
    return E(C) === o;
  }, ee.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, ee.isForwardRef = function(C) {
    return E(C) === d;
  }, ee.isFragment = function(C) {
    return E(C) === r;
  }, ee.isLazy = function(C) {
    return E(C) === b;
  }, ee.isMemo = function(C) {
    return E(C) === h;
  }, ee.isPortal = function(C) {
    return E(C) === n;
  }, ee.isProfiler = function(C) {
    return E(C) === i;
  }, ee.isStrictMode = function(C) {
    return E(C) === a;
  }, ee.isSuspense = function(C) {
    return E(C) === p;
  }, ee.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === r || C === f || C === i || C === a || C === p || C === g || typeof C == "object" && C !== null && (C.$$typeof === b || C.$$typeof === h || C.$$typeof === o || C.$$typeof === c || C.$$typeof === d || C.$$typeof === x || C.$$typeof === R || C.$$typeof === T || C.$$typeof === v);
  }, ee.typeOf = E, ee;
}
var te = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr;
function fo() {
  return Gr || (Gr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function E(B) {
      return typeof B == "string" || typeof B == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      B === r || B === f || B === i || B === a || B === p || B === g || typeof B == "object" && B !== null && (B.$$typeof === b || B.$$typeof === h || B.$$typeof === o || B.$$typeof === c || B.$$typeof === d || B.$$typeof === x || B.$$typeof === R || B.$$typeof === T || B.$$typeof === v);
    }
    function O(B) {
      if (typeof B == "object" && B !== null) {
        var me = B.$$typeof;
        switch (me) {
          case t:
            var Ie = B.type;
            switch (Ie) {
              case u:
              case f:
              case r:
              case i:
              case a:
              case p:
                return Ie;
              default:
                var Ze = Ie && Ie.$$typeof;
                switch (Ze) {
                  case c:
                  case d:
                  case b:
                  case h:
                  case o:
                    return Ze;
                  default:
                    return me;
                }
            }
          case n:
            return me;
        }
      }
    }
    var C = u, V = f, I = c, M = o, W = t, k = d, q = r, z = b, w = h, y = n, N = i, A = a, j = p, S = !1;
    function F(B) {
      return S || (S = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m(B) || O(B) === u;
    }
    function m(B) {
      return O(B) === f;
    }
    function _(B) {
      return O(B) === c;
    }
    function P(B) {
      return O(B) === o;
    }
    function $(B) {
      return typeof B == "object" && B !== null && B.$$typeof === t;
    }
    function Y(B) {
      return O(B) === d;
    }
    function H(B) {
      return O(B) === r;
    }
    function X(B) {
      return O(B) === b;
    }
    function J(B) {
      return O(B) === h;
    }
    function U(B) {
      return O(B) === n;
    }
    function K(B) {
      return O(B) === i;
    }
    function Z(B) {
      return O(B) === a;
    }
    function re(B) {
      return O(B) === p;
    }
    te.AsyncMode = C, te.ConcurrentMode = V, te.ContextConsumer = I, te.ContextProvider = M, te.Element = W, te.ForwardRef = k, te.Fragment = q, te.Lazy = z, te.Memo = w, te.Portal = y, te.Profiler = N, te.StrictMode = A, te.Suspense = j, te.isAsyncMode = F, te.isConcurrentMode = m, te.isContextConsumer = _, te.isContextProvider = P, te.isElement = $, te.isForwardRef = Y, te.isFragment = H, te.isLazy = X, te.isMemo = J, te.isPortal = U, te.isProfiler = K, te.isStrictMode = Z, te.isSuspense = re, te.isValidElementType = E, te.typeOf = O;
  }()), te;
}
var Xr;
function ds() {
  return Xr || (Xr = 1, process.env.NODE_ENV === "production" ? xt.exports = uo() : xt.exports = fo()), xt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var nn, Kr;
function mo() {
  if (Kr) return nn;
  Kr = 1;
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
      for (var o = {}, c = 0; c < 10; c++)
        o["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(o).map(function(d) {
        return o[d];
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
  return nn = a() ? Object.assign : function(i, o) {
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
  }, nn;
}
var rn, Jr;
function Zn() {
  if (Jr) return rn;
  Jr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return rn = e, rn;
}
var an, Zr;
function ms() {
  return Zr || (Zr = 1, an = Function.call.bind(Object.prototype.hasOwnProperty)), an;
}
var sn, Qr;
function po() {
  if (Qr) return sn;
  Qr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Zn(), n = {}, r = /* @__PURE__ */ ms();
    e = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function a(i, o, c, u, f) {
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
            p = i[d](o, d, u, c, null, t);
          } catch (b) {
            p = b;
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
  }, sn = a, sn;
}
var on, ea;
function ho() {
  if (ea) return on;
  ea = 1;
  var e = ds(), t = mo(), n = /* @__PURE__ */ Zn(), r = /* @__PURE__ */ ms(), a = /* @__PURE__ */ po(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return on = function(c, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(m) {
      var _ = m && (f && m[f] || m[d]);
      if (typeof _ == "function")
        return _;
    }
    var g = "<<anonymous>>", h = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: T(),
      arrayOf: E,
      element: O(),
      elementType: C(),
      instanceOf: V,
      node: k(),
      objectOf: M,
      oneOf: I,
      oneOfType: W,
      shape: z,
      exact: w
    };
    function b(m, _) {
      return m === _ ? m !== 0 || 1 / m === 1 / _ : m !== m && _ !== _;
    }
    function v(m, _) {
      this.message = m, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function x(m) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, P = 0;
      function $(H, X, J, U, K, Z, re) {
        if (U = U || g, Z = Z || J, re !== n) {
          if (u) {
            var B = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw B.name = "Invariant Violation", B;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var me = U + ":" + J;
            !_[me] && // Avoid spamming the console because they are often not actionable except for lib authors
            P < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[me] = !0, P++);
          }
        }
        return X[J] == null ? H ? X[J] === null ? new v("The " + K + " `" + Z + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new v("The " + K + " `" + Z + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : m(X, J, U, K, Z);
      }
      var Y = $.bind(null, !1);
      return Y.isRequired = $.bind(null, !0), Y;
    }
    function R(m) {
      function _(P, $, Y, H, X, J) {
        var U = P[$], K = A(U);
        if (K !== m) {
          var Z = j(U);
          return new v(
            "Invalid " + H + " `" + X + "` of type " + ("`" + Z + "` supplied to `" + Y + "`, expected ") + ("`" + m + "`."),
            { expectedType: m }
          );
        }
        return null;
      }
      return x(_);
    }
    function T() {
      return x(o);
    }
    function E(m) {
      function _(P, $, Y, H, X) {
        if (typeof m != "function")
          return new v("Property `" + X + "` of component `" + Y + "` has invalid PropType notation inside arrayOf.");
        var J = P[$];
        if (!Array.isArray(J)) {
          var U = A(J);
          return new v("Invalid " + H + " `" + X + "` of type " + ("`" + U + "` supplied to `" + Y + "`, expected an array."));
        }
        for (var K = 0; K < J.length; K++) {
          var Z = m(J, K, Y, H, X + "[" + K + "]", n);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return x(_);
    }
    function O() {
      function m(_, P, $, Y, H) {
        var X = _[P];
        if (!c(X)) {
          var J = A(X);
          return new v("Invalid " + Y + " `" + H + "` of type " + ("`" + J + "` supplied to `" + $ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(m);
    }
    function C() {
      function m(_, P, $, Y, H) {
        var X = _[P];
        if (!e.isValidElementType(X)) {
          var J = A(X);
          return new v("Invalid " + Y + " `" + H + "` of type " + ("`" + J + "` supplied to `" + $ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(m);
    }
    function V(m) {
      function _(P, $, Y, H, X) {
        if (!(P[$] instanceof m)) {
          var J = m.name || g, U = F(P[$]);
          return new v("Invalid " + H + " `" + X + "` of type " + ("`" + U + "` supplied to `" + Y + "`, expected ") + ("instance of `" + J + "`."));
        }
        return null;
      }
      return x(_);
    }
    function I(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function _(P, $, Y, H, X) {
        for (var J = P[$], U = 0; U < m.length; U++)
          if (b(J, m[U]))
            return null;
        var K = JSON.stringify(m, function(re, B) {
          var me = j(B);
          return me === "symbol" ? String(B) : B;
        });
        return new v("Invalid " + H + " `" + X + "` of value `" + String(J) + "` " + ("supplied to `" + Y + "`, expected one of " + K + "."));
      }
      return x(_);
    }
    function M(m) {
      function _(P, $, Y, H, X) {
        if (typeof m != "function")
          return new v("Property `" + X + "` of component `" + Y + "` has invalid PropType notation inside objectOf.");
        var J = P[$], U = A(J);
        if (U !== "object")
          return new v("Invalid " + H + " `" + X + "` of type " + ("`" + U + "` supplied to `" + Y + "`, expected an object."));
        for (var K in J)
          if (r(J, K)) {
            var Z = m(J, K, Y, H, X + "." + K, n);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return x(_);
    }
    function W(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var _ = 0; _ < m.length; _++) {
        var P = m[_];
        if (typeof P != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + S(P) + " at index " + _ + "."
          ), o;
      }
      function $(Y, H, X, J, U) {
        for (var K = [], Z = 0; Z < m.length; Z++) {
          var re = m[Z], B = re(Y, H, X, J, U, n);
          if (B == null)
            return null;
          B.data && r(B.data, "expectedType") && K.push(B.data.expectedType);
        }
        var me = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new v("Invalid " + J + " `" + U + "` supplied to " + ("`" + X + "`" + me + "."));
      }
      return x($);
    }
    function k() {
      function m(_, P, $, Y, H) {
        return y(_[P]) ? null : new v("Invalid " + Y + " `" + H + "` supplied to " + ("`" + $ + "`, expected a ReactNode."));
      }
      return x(m);
    }
    function q(m, _, P, $, Y) {
      return new v(
        (m || "React class") + ": " + _ + " type `" + P + "." + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Y + "`."
      );
    }
    function z(m) {
      function _(P, $, Y, H, X) {
        var J = P[$], U = A(J);
        if (U !== "object")
          return new v("Invalid " + H + " `" + X + "` of type `" + U + "` " + ("supplied to `" + Y + "`, expected `object`."));
        for (var K in m) {
          var Z = m[K];
          if (typeof Z != "function")
            return q(Y, H, X, K, j(Z));
          var re = Z(J, K, Y, H, X + "." + K, n);
          if (re)
            return re;
        }
        return null;
      }
      return x(_);
    }
    function w(m) {
      function _(P, $, Y, H, X) {
        var J = P[$], U = A(J);
        if (U !== "object")
          return new v("Invalid " + H + " `" + X + "` of type `" + U + "` " + ("supplied to `" + Y + "`, expected `object`."));
        var K = t({}, P[$], m);
        for (var Z in K) {
          var re = m[Z];
          if (r(m, Z) && typeof re != "function")
            return q(Y, H, X, Z, j(re));
          if (!re)
            return new v(
              "Invalid " + H + " `" + X + "` key `" + Z + "` supplied to `" + Y + "`.\nBad object: " + JSON.stringify(P[$], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(m), null, "  ")
            );
          var B = re(J, Z, Y, H, X + "." + Z, n);
          if (B)
            return B;
        }
        return null;
      }
      return x(_);
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
          var _ = p(m);
          if (_) {
            var P = _.call(m), $;
            if (_ !== m.entries) {
              for (; !($ = P.next()).done; )
                if (!y($.value))
                  return !1;
            } else
              for (; !($ = P.next()).done; ) {
                var Y = $.value;
                if (Y && !y(Y[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function N(m, _) {
      return m === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function A(m) {
      var _ = typeof m;
      return Array.isArray(m) ? "array" : m instanceof RegExp ? "object" : N(_, m) ? "symbol" : _;
    }
    function j(m) {
      if (typeof m > "u" || m === null)
        return "" + m;
      var _ = A(m);
      if (_ === "object") {
        if (m instanceof Date)
          return "date";
        if (m instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function S(m) {
      var _ = j(m);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function F(m) {
      return !m.constructor || !m.constructor.name ? g : m.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, on;
}
var ln, ta;
function go() {
  if (ta) return ln;
  ta = 1;
  var e = /* @__PURE__ */ Zn();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, ln = function() {
    function r(o, c, u, f, d, p) {
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
  }, ln;
}
var na;
function vo() {
  if (na) return yt.exports;
  if (na = 1, process.env.NODE_ENV !== "production") {
    var e = ds(), t = !0;
    yt.exports = /* @__PURE__ */ ho()(e.isElement, t);
  } else
    yt.exports = /* @__PURE__ */ go()();
  return yt.exports;
}
var bo = /* @__PURE__ */ vo();
const l = /* @__PURE__ */ us(bo);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function yo(e, t, n) {
  return (t = wo(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ra(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ra(Object(n), !0).forEach(function(r) {
      yo(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ra(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function xo(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wo(e) {
  var t = xo(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const aa = () => {
};
let Qn = {}, ps = {}, hs = null, gs = {
  mark: aa,
  measure: aa
};
try {
  typeof window < "u" && (Qn = window), typeof document < "u" && (ps = document), typeof MutationObserver < "u" && (hs = MutationObserver), typeof performance < "u" && (gs = performance);
} catch {
}
const {
  userAgent: sa = ""
} = Qn.navigator || {}, Oe = Qn, ae = ps, ia = hs, wt = gs;
Oe.document;
const Re = !!ae.documentElement && !!ae.head && typeof ae.addEventListener == "function" && typeof ae.createElement == "function", vs = ~sa.indexOf("MSIE") || ~sa.indexOf("Trident/");
var No = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, jo = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, bs = {
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
}, _o = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, ys = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], oe = "classic", Yt = "duotone", Ro = "sharp", Eo = "sharp-duotone", xs = [oe, Yt, Ro, Eo], To = {
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
}, Co = {
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
}, ko = /* @__PURE__ */ new Map([["classic", {
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
}]]), Oo = {
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
}, So = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], oa = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Po = ["kit"], Ao = {
  kit: {
    "fa-kit": "fak"
  }
}, Io = ["fak", "fakd"], Mo = {
  kit: {
    fak: "fa-kit"
  }
}, la = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Nt = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Fo = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Lo = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Do = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, $o = {
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
}, qo = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, En = {
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
}, zo = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Tn = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Fo, ...zo], Bo = ["solid", "regular", "light", "thin", "duotone", "brands"], ws = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Wo = ws.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Uo = [...Object.keys(qo), ...Bo, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Nt.GROUP, Nt.SWAP_OPACITY, Nt.PRIMARY, Nt.SECONDARY].concat(ws.map((e) => "".concat(e, "x"))).concat(Wo.map((e) => "w-".concat(e))), Yo = {
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
const je = "___FONT_AWESOME___", Cn = 16, Ns = "fa", js = "svg-inline--fa", De = "data-fa-i2svg", kn = "data-fa-pseudo-element", Ho = "data-fa-pseudo-element-pending", er = "data-prefix", tr = "data-icon", ca = "fontawesome-i2svg", Vo = "async", Go = ["HTML", "HEAD", "STYLE", "SCRIPT"], _s = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function ft(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[oe];
    }
  });
}
const Rs = L({}, bs);
Rs[oe] = L(L(L(L({}, {
  "fa-duotone": "duotone"
}), bs[oe]), oa.kit), oa["kit-duotone"]);
const Xo = ft(Rs), On = L({}, Oo);
On[oe] = L(L(L(L({}, {
  duotone: "fad"
}), On[oe]), la.kit), la["kit-duotone"]);
const ua = ft(On), Sn = L({}, En);
Sn[oe] = L(L({}, Sn[oe]), Mo.kit);
const nr = ft(Sn), Pn = L({}, $o);
Pn[oe] = L(L({}, Pn[oe]), Ao.kit);
ft(Pn);
const Ko = No, Es = "fa-layers-text", Jo = jo, Zo = L({}, To);
ft(Zo);
const Qo = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], cn = _o, el = [...Po, ...Uo], at = Oe.FontAwesomeConfig || {};
function tl(e) {
  var t = ae.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function nl(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ae && typeof ae.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = nl(tl(n));
  a != null && (at[r] = a);
});
const Ts = {
  styleDefault: "solid",
  familyDefault: oe,
  cssPrefix: Ns,
  replacementClass: js,
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
at.familyPrefix && (at.cssPrefix = at.familyPrefix);
const Ve = L(L({}, Ts), at);
Ve.autoReplaceSvg || (Ve.observeMutations = !1);
const G = {};
Object.keys(Ts).forEach((e) => {
  Object.defineProperty(G, e, {
    enumerable: !0,
    set: function(t) {
      Ve[e] = t, st.forEach((n) => n(G));
    },
    get: function() {
      return Ve[e];
    }
  });
});
Object.defineProperty(G, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Ve.cssPrefix = e, st.forEach((t) => t(G));
  },
  get: function() {
    return Ve.cssPrefix;
  }
});
Oe.FontAwesomeConfig = G;
const st = [];
function rl(e) {
  return st.push(e), () => {
    st.splice(st.indexOf(e), 1);
  };
}
const Ee = Cn, be = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function al(e) {
  if (!e || !Re)
    return;
  const t = ae.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = ae.head.childNodes;
  let r = null;
  for (let a = n.length - 1; a > -1; a--) {
    const i = n[a], o = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
  }
  return ae.head.insertBefore(t, r), e;
}
const sl = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ot() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += sl[Math.random() * 62 | 0];
  return t;
}
function Ke(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function rr(e) {
  return e.classList ? Ke(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Cs(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function il(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Cs(e[n]), '" '), "").trim();
}
function Ht(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function ar(e) {
  return e.size !== be.size || e.x !== be.x || e.y !== be.y || e.rotate !== be.rotate || e.flipX || e.flipY;
}
function ol(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), c = "rotate(".concat(t.rotate, " 0 0)"), u = {
    transform: "".concat(i, " ").concat(o, " ").concat(c)
  }, f = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: u,
    path: f
  };
}
function ll(e) {
  let {
    transform: t,
    width: n = Cn,
    height: r = Cn,
    startCentered: a = !1
  } = e, i = "";
  return a && vs ? i += "translate(".concat(t.x / Ee - n / 2, "em, ").concat(t.y / Ee - r / 2, "em) ") : a ? i += "translate(calc(-50% + ".concat(t.x / Ee, "em), calc(-50% + ").concat(t.y / Ee, "em)) ") : i += "translate(".concat(t.x / Ee, "em, ").concat(t.y / Ee, "em) "), i += "scale(".concat(t.size / Ee * (t.flipX ? -1 : 1), ", ").concat(t.size / Ee * (t.flipY ? -1 : 1), ") "), i += "rotate(".concat(t.rotate, "deg) "), i;
}
var cl = `:root, :host {
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
function ks() {
  const e = Ns, t = js, n = G.cssPrefix, r = G.replacementClass;
  let a = cl;
  if (n !== e || r !== t) {
    const i = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), c = new RegExp("\\.".concat(t), "g");
    a = a.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(c, ".".concat(r));
  }
  return a;
}
let fa = !1;
function un() {
  G.autoAddCss && !fa && (al(ks()), fa = !0);
}
var ul = {
  mixout() {
    return {
      dom: {
        css: ks,
        insertCss: un
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        un();
      },
      beforeI2svg() {
        un();
      }
    };
  }
};
const _e = Oe || {};
_e[je] || (_e[je] = {});
_e[je].styles || (_e[je].styles = {});
_e[je].hooks || (_e[je].hooks = {});
_e[je].shims || (_e[je].shims = []);
var ye = _e[je];
const Os = [], Ss = function() {
  ae.removeEventListener("DOMContentLoaded", Ss), St = 1, Os.map((e) => e());
};
let St = !1;
Re && (St = (ae.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ae.readyState), St || ae.addEventListener("DOMContentLoaded", Ss));
function fl(e) {
  Re && (St ? setTimeout(e, 0) : Os.push(e));
}
function dt(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Cs(e) : "<".concat(t, " ").concat(il(n), ">").concat(r.map(dt).join(""), "</").concat(t, ">");
}
function da(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var fn = function(t, n, r, a) {
  var i = Object.keys(t), o = i.length, c = n, u, f, d;
  for (r === void 0 ? (u = 1, d = t[i[0]]) : (u = 0, d = r); u < o; u++)
    f = i[u], d = c(d, t[f], f, t);
  return d;
};
function dl(e) {
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
function An(e) {
  const t = dl(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function ml(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function ma(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function In(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = ma(t);
  typeof ye.hooks.addPack == "function" && !r ? ye.hooks.addPack(e, ma(t)) : ye.styles[e] = L(L({}, ye.styles[e] || {}), a), e === "fas" && In("fa", t);
}
const {
  styles: lt,
  shims: pl
} = ye, Ps = Object.keys(nr), hl = Ps.reduce((e, t) => (e[t] = Object.keys(nr[t]), e), {});
let sr = null, As = {}, Is = {}, Ms = {}, Fs = {}, Ls = {};
function gl(e) {
  return ~el.indexOf(e);
}
function vl(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !gl(a) ? a : null;
}
const Ds = () => {
  const e = (r) => fn(lt, (a, i, o) => (a[o] = fn(i, r, {}), a), {});
  As = e((r, a, i) => (a[3] && (r[a[3]] = i), a[2] && a[2].filter((c) => typeof c == "number").forEach((c) => {
    r[c.toString(16)] = i;
  }), r)), Is = e((r, a, i) => (r[i] = i, a[2] && a[2].filter((c) => typeof c == "string").forEach((c) => {
    r[c] = i;
  }), r)), Ls = e((r, a, i) => {
    const o = a[2];
    return r[i] = i, o.forEach((c) => {
      r[c] = i;
    }), r;
  });
  const t = "far" in lt || G.autoFetchSvg, n = fn(pl, (r, a) => {
    const i = a[0];
    let o = a[1];
    const c = a[2];
    return o === "far" && !t && (o = "fas"), typeof i == "string" && (r.names[i] = {
      prefix: o,
      iconName: c
    }), typeof i == "number" && (r.unicodes[i.toString(16)] = {
      prefix: o,
      iconName: c
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  Ms = n.names, Fs = n.unicodes, sr = Vt(G.styleDefault, {
    family: G.familyDefault
  });
};
rl((e) => {
  sr = Vt(e.styleDefault, {
    family: G.familyDefault
  });
});
Ds();
function ir(e, t) {
  return (As[e] || {})[t];
}
function bl(e, t) {
  return (Is[e] || {})[t];
}
function Fe(e, t) {
  return (Ls[e] || {})[t];
}
function $s(e) {
  return Ms[e] || {
    prefix: null,
    iconName: null
  };
}
function yl(e) {
  const t = Fs[e], n = ir("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Se() {
  return sr;
}
const qs = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function xl(e) {
  let t = oe;
  const n = Ps.reduce((r, a) => (r[a] = "".concat(G.cssPrefix, "-").concat(a), r), {});
  return xs.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => hl[r].includes(a))) && (t = r);
  }), t;
}
function Vt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = oe
  } = t, r = Xo[n][e];
  if (n === Yt && !e)
    return "fad";
  const a = ua[n][e] || ua[n][r], i = e in ye.styles ? e : null;
  return a || i || null;
}
function wl(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = vl(G.cssPrefix, r);
    a ? n = a : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function pa(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function Gt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const a = Tn.concat(Lo), i = pa(e.filter((p) => a.includes(p))), o = pa(e.filter((p) => !Tn.includes(p))), c = i.filter((p) => (r = p, !ys.includes(p))), [u = null] = c, f = xl(i), d = L(L({}, wl(o)), {}, {
    prefix: Vt(u, {
      family: f
    })
  });
  return L(L(L({}, d), Rl({
    values: e,
    family: f,
    styles: lt,
    config: G,
    canonical: d,
    givenPrefix: r
  })), Nl(n, r, d));
}
function Nl(e, t, n) {
  let {
    prefix: r,
    iconName: a
  } = n;
  if (e || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  const i = t === "fa" ? $s(a) : {}, o = Fe(r, a);
  return a = i.iconName || o || a, r = i.prefix || r, r === "far" && !lt.far && lt.fas && !G.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const jl = xs.filter((e) => e !== oe || e !== Yt), _l = Object.keys(En).filter((e) => e !== oe).map((e) => Object.keys(En[e])).flat();
function Rl(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: i = {},
    config: o = {}
  } = e, c = n === Yt, u = t.includes("fa-duotone") || t.includes("fad"), f = o.familyDefault === "duotone", d = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!c && (u || f || d) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && jl.includes(n) && (Object.keys(i).find((g) => _l.includes(g)) || o.autoFetchSvg)) {
    const g = ko.get(n).defaultShortPrefixId;
    r.prefix = g, r.iconName = Fe(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = Se() || "fas"), r;
}
class El {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((i) => {
      this.definitions[i] = L(L({}, this.definitions[i] || {}), a[i]), In(i, a[i]);
      const o = nr[oe][i];
      o && In(o, a[i]), Ds();
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
        iconName: o,
        icon: c
      } = r[a], u = c[2];
      t[i] || (t[i] = {}), u.length > 0 && u.forEach((f) => {
        typeof f == "string" && (t[i][f] = c);
      }), t[i][o] = c;
    }), t;
  }
}
let ha = [], We = {};
const Ye = {}, Tl = Object.keys(Ye);
function Cl(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return ha = e, We = {}, Object.keys(Ye).forEach((r) => {
    Tl.indexOf(r) === -1 && delete Ye[r];
  }), ha.forEach((r) => {
    const a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach((i) => {
      typeof a[i] == "function" && (n[i] = a[i]), typeof a[i] == "object" && Object.keys(a[i]).forEach((o) => {
        n[i] || (n[i] = {}), n[i][o] = a[i][o];
      });
    }), r.hooks) {
      const i = r.hooks();
      Object.keys(i).forEach((o) => {
        We[o] || (We[o] = []), We[o].push(i[o]);
      });
    }
    r.provides && r.provides(Ye);
  }), n;
}
function Mn(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (We[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...r]);
  }), t;
}
function $e(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (We[e] || []).forEach((i) => {
    i.apply(null, n);
  });
}
function Pe() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Ye[e] ? Ye[e].apply(null, t) : void 0;
}
function Fn(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Se();
  if (t)
    return t = Fe(n, t) || t, da(zs.definitions, n, t) || da(ye.styles, n, t);
}
const zs = new El(), kl = () => {
  G.autoReplaceSvg = !1, G.observeMutations = !1, $e("noAuto");
}, Ol = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Re ? ($e("beforeI2svg", e), Pe("pseudoElements2svg", e), Pe("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    G.autoReplaceSvg === !1 && (G.autoReplaceSvg = !0), G.observeMutations = !0, fl(() => {
      Pl({
        autoReplaceSvgRoot: t
      }), $e("watch", e);
    });
  }
}, Sl = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Fe(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Vt(e[0]);
      return {
        prefix: n,
        iconName: Fe(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(G.cssPrefix, "-")) > -1 || e.match(Ko))) {
      const t = Gt(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Se(),
        iconName: Fe(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Se();
      return {
        prefix: t,
        iconName: Fe(t, e) || e
      };
    }
  }
}, de = {
  noAuto: kl,
  config: G,
  dom: Ol,
  parse: Sl,
  library: zs,
  findIconDefinition: Fn,
  toHtml: dt
}, Pl = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = ae
  } = e;
  (Object.keys(ye.styles).length > 0 || G.autoFetchSvg) && Re && G.autoReplaceSvg && de.dom.i2svg({
    node: t
  });
};
function Xt(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => dt(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!Re) return;
      const n = ae.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Al(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: i,
    transform: o
  } = e;
  if (ar(o) && n.found && !r.found) {
    const {
      width: c,
      height: u
    } = n, f = {
      x: c / u / 2,
      y: 0.5
    };
    a.style = Ht(L(L({}, i), {}, {
      "transform-origin": "".concat(f.x + o.x / 16, "em ").concat(f.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Il(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: a,
    symbol: i
  } = e;
  const o = i === !0 ? "".concat(t, "-").concat(G.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: L(L({}, a), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function or(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: a,
    transform: i,
    symbol: o,
    title: c,
    maskId: u,
    titleId: f,
    extra: d,
    watchable: p = !1
  } = e, {
    width: g,
    height: h
  } = n.found ? n : t, b = Io.includes(r), v = [G.replacementClass, a ? "".concat(G.cssPrefix, "-").concat(a) : ""].filter((C) => d.classes.indexOf(C) === -1).filter((C) => C !== "" || !!C).concat(d.classes).join(" ");
  let x = {
    children: [],
    attributes: L(L({}, d.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: v,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(g, " ").concat(h)
    })
  };
  const R = b && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(g / h * 16 * 0.0625, "em")
  } : {};
  p && (x.attributes[De] = ""), c && (x.children.push({
    tag: "title",
    attributes: {
      id: x.attributes["aria-labelledby"] || "title-".concat(f || ot())
    },
    children: [c]
  }), delete x.attributes.title);
  const T = L(L({}, x), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: u,
    transform: i,
    symbol: o,
    styles: L(L({}, R), d.styles)
  }), {
    children: E,
    attributes: O
  } = n.found && t.found ? Pe("generateAbstractMask", T) || {
    children: [],
    attributes: {}
  } : Pe("generateAbstractIcon", T) || {
    children: [],
    attributes: {}
  };
  return T.children = E, T.attributes = O, o ? Il(T) : Al(T);
}
function ga(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: a,
    title: i,
    extra: o,
    watchable: c = !1
  } = e, u = L(L(L({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  c && (u[De] = "");
  const f = L({}, o.styles);
  ar(a) && (f.transform = ll({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), f["-webkit-transform"] = f.transform);
  const d = Ht(f);
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
function Ml(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, a = L(L(L({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), i = Ht(r.styles);
  i.length > 0 && (a.style = i);
  const o = [];
  return o.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
const {
  styles: dn
} = ye;
function Ln(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(G.cssPrefix, "-").concat(cn.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(G.cssPrefix, "-").concat(cn.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(G.cssPrefix, "-").concat(cn.PRIMARY),
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
const Fl = {
  found: !1,
  width: 512,
  height: 512
};
function Ll(e, t) {
  !_s && !G.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Dn(e, t) {
  let n = t;
  return t === "fa" && G.styleDefault !== null && (t = Se()), new Promise((r, a) => {
    if (n === "fa") {
      const i = $s(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && dn[t] && dn[t][e]) {
      const i = dn[t][e];
      return r(Ln(i));
    }
    Ll(e, t), r(L(L({}, Fl), {}, {
      icon: G.showMissingIcons && e ? Pe("missingIconAbstract") || {} : {}
    }));
  });
}
const va = () => {
}, $n = G.measurePerformance && wt && wt.mark && wt.measure ? wt : {
  mark: va,
  measure: va
}, nt = 'FA "6.7.2"', Dl = (e) => ($n.mark("".concat(nt, " ").concat(e, " begins")), () => Bs(e)), Bs = (e) => {
  $n.mark("".concat(nt, " ").concat(e, " ends")), $n.measure("".concat(nt, " ").concat(e), "".concat(nt, " ").concat(e, " begins"), "".concat(nt, " ").concat(e, " ends"));
};
var lr = {
  begin: Dl,
  end: Bs
};
const Tt = () => {
};
function ba(e) {
  return typeof (e.getAttribute ? e.getAttribute(De) : null) == "string";
}
function $l(e) {
  const t = e.getAttribute ? e.getAttribute(er) : null, n = e.getAttribute ? e.getAttribute(tr) : null;
  return t && n;
}
function ql(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(G.replacementClass);
}
function zl() {
  return G.autoReplaceSvg === !0 ? Ct.replace : Ct[G.autoReplaceSvg] || Ct.replace;
}
function Bl(e) {
  return ae.createElementNS("http://www.w3.org/2000/svg", e);
}
function Wl(e) {
  return ae.createElement(e);
}
function Ws(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Bl : Wl
  } = t;
  if (typeof e == "string")
    return ae.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(i) {
    r.setAttribute(i, e.attributes[i]);
  }), (e.children || []).forEach(function(i) {
    r.appendChild(Ws(i, {
      ceFn: n
    }));
  }), r;
}
function Ul(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Ct = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(Ws(n), t);
      }), t.getAttribute(De) === null && G.keepOriginalSource) {
        let n = ae.createComment(Ul(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~rr(t).indexOf(G.replacementClass))
      return Ct.replace(e);
    const r = new RegExp("".concat(G.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const i = n[0].attributes.class.split(" ").reduce((o, c) => (c === G.replacementClass || c.match(r) ? o.toSvg.push(c) : o.toNode.push(c), o), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
    }
    const a = n.map((i) => dt(i)).join(`
`);
    t.setAttribute(De, ""), t.innerHTML = a;
  }
};
function ya(e) {
  e();
}
function Us(e, t) {
  const n = typeof t == "function" ? t : Tt;
  if (e.length === 0)
    n();
  else {
    let r = ya;
    G.mutateApproach === Vo && (r = Oe.requestAnimationFrame || ya), r(() => {
      const a = zl(), i = lr.begin("mutate");
      e.map(a), i(), n();
    });
  }
}
let cr = !1;
function Ys() {
  cr = !0;
}
function qn() {
  cr = !1;
}
let Pt = null;
function xa(e) {
  if (!ia || !G.observeMutations)
    return;
  const {
    treeCallback: t = Tt,
    nodeCallback: n = Tt,
    pseudoElementsCallback: r = Tt,
    observeMutationsRoot: a = ae
  } = e;
  Pt = new ia((i) => {
    if (cr) return;
    const o = Se();
    Ke(i).forEach((c) => {
      if (c.type === "childList" && c.addedNodes.length > 0 && !ba(c.addedNodes[0]) && (G.searchPseudoElements && r(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && G.searchPseudoElements && r(c.target.parentNode), c.type === "attributes" && ba(c.target) && ~Qo.indexOf(c.attributeName))
        if (c.attributeName === "class" && $l(c.target)) {
          const {
            prefix: u,
            iconName: f
          } = Gt(rr(c.target));
          c.target.setAttribute(er, u || o), f && c.target.setAttribute(tr, f);
        } else ql(c.target) && n(c.target);
    });
  }), Re && Pt.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Yl() {
  Pt && Pt.disconnect();
}
function Hl(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const i = a.split(":"), o = i[0], c = i.slice(1);
    return o && c.length > 0 && (r[o] = c.join(":").trim()), r;
  }, {})), n;
}
function Vl(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = Gt(rr(e));
  return a.prefix || (a.prefix = Se()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = bl(a.prefix, e.innerText) || ir(a.prefix, An(e.innerText))), !a.iconName && G.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function Gl(e) {
  const t = Ke(e.attributes).reduce((a, i) => (a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return G.autoA11y && (n ? t["aria-labelledby"] = "".concat(G.replacementClass, "-title-").concat(r || ot()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Xl() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: be,
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
function wa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: a
  } = Vl(e), i = Gl(e), o = Mn("parseNodeAttributes", {}, e);
  let c = t.styleParser ? Hl(e) : [];
  return L({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: be,
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
  }, o);
}
const {
  styles: Kl
} = ye;
function Hs(e) {
  const t = G.autoReplaceSvg === "nest" ? wa(e, {
    styleParser: !1
  }) : wa(e);
  return ~t.extra.classes.indexOf(Es) ? Pe("generateLayersText", e, t) : Pe("generateSvgReplacementMutation", e, t);
}
function Jl() {
  return [...So, ...Tn];
}
function Na(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Re) return Promise.resolve();
  const n = ae.documentElement.classList, r = (d) => n.add("".concat(ca, "-").concat(d)), a = (d) => n.remove("".concat(ca, "-").concat(d)), i = G.autoFetchSvg ? Jl() : ys.concat(Object.keys(Kl));
  i.includes("fa") || i.push("fa");
  const o = [".".concat(Es, ":not([").concat(De, "])")].concat(i.map((d) => ".".concat(d, ":not([").concat(De, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let c = [];
  try {
    c = Ke(e.querySelectorAll(o));
  } catch {
  }
  if (c.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const u = lr.begin("onTree"), f = c.reduce((d, p) => {
    try {
      const g = Hs(p);
      g && d.push(g);
    } catch (g) {
      _s || g.name === "MissingIcon" && console.error(g);
    }
    return d;
  }, []);
  return new Promise((d, p) => {
    Promise.all(f).then((g) => {
      Us(g, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), u(), d();
      });
    }).catch((g) => {
      u(), p(g);
    });
  });
}
function Zl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Hs(e).then((n) => {
    n && Us([n], t);
  });
}
function Ql(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Fn(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : Fn(a || {})), e(r, L(L({}, n), {}, {
      mask: a
    }));
  };
}
const ec = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = be,
    symbol: r = !1,
    mask: a = null,
    maskId: i = null,
    title: o = null,
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
  return Xt(L({
    type: "icon"
  }, e), () => ($e("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), G.autoA11y && (o ? f["aria-labelledby"] = "".concat(G.replacementClass, "-title-").concat(c || ot()) : (f["aria-hidden"] = "true", f.focusable = "false")), or({
    icons: {
      main: Ln(h),
      mask: a ? Ln(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: p,
    iconName: g,
    transform: L(L({}, be), n),
    symbol: r,
    title: o,
    maskId: i,
    titleId: c,
    extra: {
      attributes: f,
      styles: d,
      classes: u
    }
  })));
};
var tc = {
  mixout() {
    return {
      icon: Ql(ec)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Na, e.nodeCallback = Zl, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = ae,
        callback: r = () => {
        }
      } = t;
      return Na(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: a,
        titleId: i,
        prefix: o,
        transform: c,
        symbol: u,
        mask: f,
        maskId: d,
        extra: p
      } = n;
      return new Promise((g, h) => {
        Promise.all([Dn(r, o), f.iconName ? Dn(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((b) => {
          let [v, x] = b;
          g([t, or({
            icons: {
              main: v,
              mask: x
            },
            prefix: o,
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
        styles: o
      } = t;
      const c = Ht(o);
      c.length > 0 && (r.style = c);
      let u;
      return ar(i) && (u = Pe("generateAbstractTransformGrouping", {
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
}, nc = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Xt({
          type: "layer"
        }, () => {
          $e("beforeDOMElementCreation", {
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
              class: ["".concat(G.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, rc = {
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
        return Xt({
          type: "counter",
          content: e
        }, () => ($e("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Ml({
          content: e.toString(),
          title: n,
          extra: {
            attributes: a,
            styles: i,
            classes: ["".concat(G.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, ac = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = be,
          title: r = null,
          classes: a = [],
          attributes: i = {},
          styles: o = {}
        } = t;
        return Xt({
          type: "text",
          content: e
        }, () => ($e("beforeDOMElementCreation", {
          content: e,
          params: t
        }), ga({
          content: e,
          transform: L(L({}, be), n),
          title: r,
          extra: {
            attributes: i,
            styles: o,
            classes: ["".concat(G.cssPrefix, "-layers-text"), ...a]
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
      let o = null, c = null;
      if (vs) {
        const u = parseInt(getComputedStyle(t).fontSize, 10), f = t.getBoundingClientRect();
        o = f.width / u, c = f.height / u;
      }
      return G.autoA11y && !r && (i.attributes["aria-hidden"] = "true"), Promise.resolve([t, ga({
        content: t.innerHTML,
        width: o,
        height: c,
        transform: a,
        title: r,
        extra: i,
        watchable: !0
      })]);
    };
  }
};
const sc = new RegExp('"', "ug"), ja = [1105920, 1112319], _a = L(L(L(L({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Co), Yo), Do), zn = Object.keys(_a).reduce((e, t) => (e[t.toLowerCase()] = _a[t], e), {}), ic = Object.keys(zn).reduce((e, t) => {
  const n = zn[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function oc(e) {
  const t = e.replace(sc, ""), n = ml(t, 0), r = n >= ja[0] && n <= ja[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: An(a ? t[0] : t),
    isSecondary: r || a
  };
}
function lc(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (zn[n] || {})[a] || ic[n];
}
function Ra(e, t) {
  const n = "".concat(Ho).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const o = Ke(e.children).filter((g) => g.getAttribute(kn) === t)[0], c = Oe.getComputedStyle(e, t), u = c.getPropertyValue("font-family"), f = u.match(Jo), d = c.getPropertyValue("font-weight"), p = c.getPropertyValue("content");
    if (o && !f)
      return e.removeChild(o), r();
    if (f && p !== "none" && p !== "") {
      const g = c.getPropertyValue("content");
      let h = lc(u, d);
      const {
        value: b,
        isSecondary: v
      } = oc(g), x = f[0].startsWith("FontAwesome");
      let R = ir(h, b), T = R;
      if (x) {
        const E = yl(b);
        E.iconName && E.prefix && (R = E.iconName, h = E.prefix);
      }
      if (R && !v && (!o || o.getAttribute(er) !== h || o.getAttribute(tr) !== T)) {
        e.setAttribute(n, T), o && e.removeChild(o);
        const E = Xl(), {
          extra: O
        } = E;
        O.attributes[kn] = t, Dn(R, h).then((C) => {
          const V = or(L(L({}, E), {}, {
            icons: {
              main: C,
              mask: qs()
            },
            prefix: h,
            iconName: T,
            extra: O,
            watchable: !0
          })), I = ae.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(I, e.firstChild) : e.appendChild(I), I.outerHTML = V.map((M) => dt(M)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function cc(e) {
  return Promise.all([Ra(e, "::before"), Ra(e, "::after")]);
}
function uc(e) {
  return e.parentNode !== document.head && !~Go.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(kn) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Ea(e) {
  if (Re)
    return new Promise((t, n) => {
      const r = Ke(e.querySelectorAll("*")).filter(uc).map(cc), a = lr.begin("searchPseudoElements");
      Ys(), Promise.all(r).then(() => {
        a(), qn(), t();
      }).catch(() => {
        a(), qn(), n();
      });
    });
}
var fc = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Ea, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = ae
      } = t;
      G.searchPseudoElements && Ea(n);
    };
  }
};
let Ta = !1;
var dc = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Ys(), Ta = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        xa(Mn("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Yl();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Ta ? qn() : xa(Mn("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Ca = (e) => {
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
    let o = a.slice(1).join("-");
    if (i && o === "h")
      return n.flipX = !0, n;
    if (i && o === "v")
      return n.flipY = !0, n;
    if (o = parseFloat(o), isNaN(o))
      return n;
    switch (i) {
      case "grow":
        n.size = n.size + o;
        break;
      case "shrink":
        n.size = n.size - o;
        break;
      case "left":
        n.x = n.x - o;
        break;
      case "right":
        n.x = n.x + o;
        break;
      case "up":
        n.y = n.y - o;
        break;
      case "down":
        n.y = n.y + o;
        break;
      case "rotate":
        n.rotate = n.rotate + o;
        break;
    }
    return n;
  }, t);
};
var mc = {
  mixout() {
    return {
      parse: {
        transform: (e) => Ca(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Ca(n)), e;
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
      const o = {
        transform: "translate(".concat(a / 2, " 256)")
      }, c = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), u = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), f = "rotate(".concat(r.rotate, " 0 0)"), d = {
        transform: "".concat(c, " ").concat(u, " ").concat(f)
      }, p = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, g = {
        outer: o,
        inner: d,
        path: p
      };
      return {
        tag: "g",
        attributes: L({}, g.outer),
        children: [{
          tag: "g",
          attributes: L({}, g.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: L(L({}, n.icon.attributes), g.path)
          }]
        }]
      };
    };
  }
};
const mn = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function ka(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function pc(e) {
  return e.tag === "g" ? e.children : [e];
}
var hc = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Gt(n.split(" ").map((a) => a.trim())) : qs();
        return r.prefix || (r.prefix = Se()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
        maskId: o,
        transform: c
      } = t;
      const {
        width: u,
        icon: f
      } = a, {
        width: d,
        icon: p
      } = i, g = ol({
        transform: c,
        containerWidth: d,
        iconWidth: u
      }), h = {
        tag: "rect",
        attributes: L(L({}, mn), {}, {
          fill: "white"
        })
      }, b = f.children ? {
        children: f.children.map(ka)
      } : {}, v = {
        tag: "g",
        attributes: L({}, g.inner),
        children: [ka(L({
          tag: f.tag,
          attributes: L(L({}, f.attributes), g.path)
        }, b))]
      }, x = {
        tag: "g",
        attributes: L({}, g.outer),
        children: [v]
      }, R = "mask-".concat(o || ot()), T = "clip-".concat(o || ot()), E = {
        tag: "mask",
        attributes: L(L({}, mn), {}, {
          id: R,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [h, x]
      }, O = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: T
          },
          children: pc(p)
        }, E]
      };
      return n.push(O, {
        tag: "rect",
        attributes: L({
          fill: "currentColor",
          "clip-path": "url(#".concat(T, ")"),
          mask: "url(#".concat(R, ")")
        }, mn)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, gc = {
  provides(e) {
    let t = !1;
    Oe.matchMedia && (t = Oe.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: L(L({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const i = L(L({}, a), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: L(L({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || o.children.push({
        tag: "animate",
        attributes: L(L({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: L(L({}, i), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(o), n.push({
        tag: "path",
        attributes: L(L({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: L(L({}, i), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: L(L({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: L(L({}, i), {}, {
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
}, vc = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, bc = [ul, tc, nc, rc, ac, fc, dc, mc, hc, gc, vc];
Cl(bc, {
  mixoutsTo: de
});
de.noAuto;
de.config;
de.library;
de.dom;
const Bn = de.parse;
de.findIconDefinition;
de.toHtml;
const yc = de.icon;
de.layer;
de.text;
de.counter;
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
function ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Oa(Object(n), !0).forEach(function(r) {
      Ue(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oa(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function At(e) {
  "@babel/helpers - typeof";
  return At = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, At(e);
}
function Ue(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function xc(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function wc(e, t) {
  if (e == null) return {};
  var n = xc(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Wn(e) {
  return Nc(e) || jc(e) || _c(e) || Rc();
}
function Nc(e) {
  if (Array.isArray(e)) return Un(e);
}
function jc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _c(e, t) {
  if (e) {
    if (typeof e == "string") return Un(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Un(e, t);
  }
}
function Un(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Rc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ec(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, i = e.bounce, o = e.shake, c = e.flash, u = e.spin, f = e.spinPulse, d = e.spinReverse, p = e.pulse, g = e.fixedWidth, h = e.inverse, b = e.border, v = e.listItem, x = e.flip, R = e.size, T = e.rotation, E = e.pull, O = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": i,
    "fa-shake": o,
    "fa-flash": c,
    "fa-spin": u,
    "fa-spin-reverse": d,
    "fa-spin-pulse": f,
    "fa-pulse": p,
    "fa-fw": g,
    "fa-inverse": h,
    "fa-border": b,
    "fa-li": v,
    "fa-flip": x === !0,
    "fa-flip-horizontal": x === "horizontal" || x === "both",
    "fa-flip-vertical": x === "vertical" || x === "both"
  }, Ue(t, "fa-".concat(R), typeof R < "u" && R !== null), Ue(t, "fa-rotate-".concat(T), typeof T < "u" && T !== null && T !== 0), Ue(t, "fa-pull-".concat(E), typeof E < "u" && E !== null), Ue(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(O).map(function(C) {
    return O[C] ? C : null;
  }).filter(function(C) {
    return C;
  });
}
function Tc(e) {
  return e = e - 0, e === e;
}
function Vs(e) {
  return Tc(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Cc = ["style"];
function kc(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Oc(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = Vs(n.slice(0, r)), i = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[kc(a)] = i : t[a] = i, t;
  }, {});
}
function Gs(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(u) {
    return Gs(e, u);
  }), a = Object.keys(t.attributes || {}).reduce(function(u, f) {
    var d = t.attributes[f];
    switch (f) {
      case "class":
        u.attrs.className = d, delete t.attributes.class;
        break;
      case "style":
        u.attrs.style = Oc(d);
        break;
      default:
        f.indexOf("aria-") === 0 || f.indexOf("data-") === 0 ? u.attrs[f.toLowerCase()] = d : u.attrs[Vs(f)] = d;
    }
    return u;
  }, {
    attrs: {}
  }), i = n.style, o = i === void 0 ? {} : i, c = wc(n, Cc);
  return a.attrs.style = ve(ve({}, a.attrs.style), o), e.apply(void 0, [t.tag, ve(ve({}, a.attrs), c)].concat(Wn(r)));
}
var Xs = !1;
try {
  Xs = process.env.NODE_ENV === "production";
} catch {
}
function Sc() {
  if (!Xs && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Sa(e) {
  if (e && At(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Bn.icon)
    return Bn.icon(e);
  if (e === null)
    return null;
  if (e && At(e) === "object" && e.prefix && e.iconName)
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
function pn(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Ue({}, e, t) : {};
}
var Pa = {
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
}, Q = /* @__PURE__ */ ne.forwardRef(function(e, t) {
  var n = ve(ve({}, Pa), e), r = n.icon, a = n.mask, i = n.symbol, o = n.className, c = n.title, u = n.titleId, f = n.maskId, d = Sa(r), p = pn("classes", [].concat(Wn(Ec(n)), Wn((o || "").split(" ")))), g = pn("transform", typeof n.transform == "string" ? Bn.transform(n.transform) : n.transform), h = pn("mask", Sa(a)), b = yc(d, ve(ve(ve(ve({}, p), g), h), {}, {
    symbol: i,
    title: c,
    titleId: u,
    maskId: f
  }));
  if (!b)
    return Sc("Could not find icon", d), null;
  var v = b.abstract, x = {
    ref: t
  };
  return Object.keys(n).forEach(function(R) {
    Pa.hasOwnProperty(R) || (x[R] = n[R]);
  }), Pc(v[0], x);
});
Q.displayName = "FontAwesomeIcon";
Q.propTypes = {
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
var Pc = Gs.bind(null, ne.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Ac = {
  prefix: "fas",
  iconName: "compass",
  icon: [512, 512, [129517], "f14e", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, Ic = {
  prefix: "fas",
  iconName: "circle-exclamation",
  icon: [512, 512, ["exclamation-circle"], "f06a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, Aa = Ic, Mc = {
  prefix: "fas",
  iconName: "lock",
  icon: [448, 512, [128274], "f023", "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]
}, Fc = {
  prefix: "fas",
  iconName: "pizza-slice",
  icon: [512, 512, [], "f818", "M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, Lc = {
  prefix: "fas",
  iconName: "angles-right",
  icon: [512, 512, [187, "angle-double-right"], "f101", "M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]
}, Dc = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, $c = Dc, hn = {
  prefix: "fas",
  iconName: "language",
  icon: [640, 512, [], "f1ab", "M0 128C0 92.7 28.7 64 64 64l192 0 48 0 16 0 256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-256 0-16 0-48 0L64 448c-35.3 0-64-28.7-64-64L0 128zm320 0l0 256 256 0 0-256-256 0zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1 73.6 0 8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276l-38 0 19-42.8zM448 164c11 0 20 9 20 20l0 4 44 0 16 0c11 0 20 9 20 20s-9 20-20 20l-2 0-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45L448 228l-72 0c-11 0-20-9-20-20s9-20 20-20l52 0 0-4c0-11 9-20 20-20z"]
}, qc = {
  prefix: "fas",
  iconName: "arrow-up-right-from-square",
  icon: [512, 512, ["external-link"], "f08e", "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]
}, zc = {
  prefix: "fas",
  iconName: "arrow-left",
  icon: [448, 512, [8592], "f060", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]
}, gn = {
  prefix: "fas",
  iconName: "phone-volume",
  icon: [512, 512, ["volume-control-phone"], "f2a0", "M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"]
}, Bc = {
  prefix: "fas",
  iconName: "envelope",
  icon: [512, 512, [128386, 9993, 61443], "f0e0", "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]
}, Wc = {
  prefix: "fas",
  iconName: "circle-info",
  icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, Ia = Wc, Uc = {
  prefix: "fas",
  iconName: "landmark",
  icon: [512, 512, [127963], "f66f", "M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8L32 192c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9l0-.9 4.4-1.6L240.1 4.2zM64 224l64 0 0 192 40 0 0-192 64 0 0 192 48 0 0-192 64 0 0 192 40 0 0-192 64 0 0 196.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 224z"]
}, Yc = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, Hc = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, Vc = Hc, Gc = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, Xc = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, Kc = Xc, Jc = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, Ks = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, Zc = {
  prefix: "fas",
  iconName: "angles-left",
  icon: [512, 512, [171, "angle-double-left"], "f100", "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"]
}, Qc = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, eu = Qc, ur = ({
  domain: e = "An official website of the City of Portland",
  icon: t = void 0,
  heading: n = "Official websites use .gov",
  description: r = "A .gov website belongs to an official government organization in the United States.",
  bannerLinkText: a = "Here's how you know",
  showHttpsGuidance: i = !0,
  initiallyExpanded: o = !1,
  className: c = ""
}) => {
  const [u, f] = ie(o), d = ["banner", c].filter(Boolean).join(" "), p = () => {
    f(!u);
  };
  return /* @__PURE__ */ s.jsxs("section", { className: d, children: [
    /* @__PURE__ */ s.jsxs("div", { className: "banner-content", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "banner-header", children: [
        /* @__PURE__ */ s.jsx("div", { className: "banner-header-icon", children: ne.isValidElement(t) ? t : /* @__PURE__ */ s.jsxs("svg", { width: "24", height: "16", viewBox: "0 0 24 16", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ s.jsx("rect", { width: "24", height: "16", fill: "#B22234" }),
          /* @__PURE__ */ s.jsx("rect", { y: "1.23", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ s.jsx("rect", { y: "3.69", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ s.jsx("rect", { y: "6.15", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ s.jsx("rect", { y: "8.62", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ s.jsx("rect", { y: "11.08", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ s.jsx("rect", { y: "13.54", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ s.jsx("rect", { width: "9.6", height: "8.62", fill: "#3C3B6E" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "1.2", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "2.4", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "3.6", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "4.8", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "6", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "7.2", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "8.4", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "1.8", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "3", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "4.2", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "5.4", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "6.6", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "7.8", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "1.2", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "2.4", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "3.6", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "4.8", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "6", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "7.2", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "8.4", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "1.8", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "3", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "4.2", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "5.4", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "6.6", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "7.8", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "1.2", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "2.4", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "3.6", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "4.8", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "6", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "7.2", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "8.4", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "1.8", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "3", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "4.2", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "5.4", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "6.6", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "7.8", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "1.2", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "2.4", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "3.6", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "4.8", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "6", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "7.2", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ s.jsx("circle", { cx: "8.4", cy: "7.7", r: "0.3", fill: "white" })
        ] }) }),
        /* @__PURE__ */ s.jsx("p", { className: "banner-header-text", children: e })
      ] }),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          className: "banner-button",
          onClick: p,
          "aria-expanded": u,
          "aria-controls": "banner-content",
          children: [
            /* @__PURE__ */ s.jsx("span", { className: "banner-button-text", children: a }),
            /* @__PURE__ */ s.jsx("span", { className: `banner-button-icon ${u ? "is-open" : ""}`, children: /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ s.jsx("polyline", { points: "6 9 12 15 18 9" }) }) })
          ]
        }
      )
    ] }),
    u && /* @__PURE__ */ s.jsxs(
      "div",
      {
        id: "banner-expanded-content",
        className: "banner-expanded-content",
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "banner-guidance", children: [
            /* @__PURE__ */ s.jsx("div", { className: "banner-guidance-icon", children: /* @__PURE__ */ s.jsx(Q, { icon: Uc, style: { fontSize: "40px", color: "#2378C3" } }) || null }),
            /* @__PURE__ */ s.jsxs("div", { className: "banner-guidance-text", children: [
              /* @__PURE__ */ s.jsx("div", { className: "banner-guidance-heading", children: n }),
              /* @__PURE__ */ s.jsx("div", { className: "banner-guidance-description", children: r })
            ] })
          ] }),
          i && /* @__PURE__ */ s.jsxs("div", { className: "banner-guidance", children: [
            /* @__PURE__ */ s.jsx("div", { className: "banner-guidance-icon", children: /* @__PURE__ */ s.jsx(Q, { icon: Mc, style: { fontSize: "40px", color: "#719F2A" } }) }),
            /* @__PURE__ */ s.jsxs("div", { className: "banner-guidance-text", children: [
              /* @__PURE__ */ s.jsx("div", { className: "banner-guidance-heading", children: "Secure websites use HTTPS" }),
              /* @__PURE__ */ s.jsxs("div", { className: "banner-guidance-description", children: [
                "A ",
                /* @__PURE__ */ s.jsx("strong", { children: "lock" }),
                " or ",
                /* @__PURE__ */ s.jsx("strong", { children: "https://" }),
                " means you've safely connected to the .gov website. Share sensitive information only on official, secure websites."
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
};
ur.propTypes = {
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
ur.defaultProps = {
  domain: "An official website of the City of Portland",
  icon: void 0,
  heading: "Official websites use .gov",
  description: "A .gov website belongs to an official government organization in the United States.",
  showHttpsGuidance: !0,
  initiallyExpanded: !1,
  className: ""
};
const fr = ({
  logoUrl: e,
  logoAlt: t
}) => /* @__PURE__ */ s.jsx("a", { href: "/", className: "header-logo-container", children: e && /* @__PURE__ */ s.jsx(
  "img",
  {
    src: e,
    alt: t,
    className: "header-logo-img"
  }
) });
fr.propTypes = {
  /** URL for the logo image */
  logoUrl: l.string,
  /** Alt text for the logo image */
  logoAlt: l.string
};
fr.defaultProps = {
  logoUrl: void 0,
  logoAlt: "Logo"
};
const Js = ({ item: e }) => /* @__PURE__ */ s.jsx("li", { className: "header-menu-item", role: "menuitem", children: /* @__PURE__ */ s.jsxs(
  "a",
  {
    href: e.href,
    className: "header-menu-link",
    "aria-current": e.current ? "page" : void 0,
    children: [
      /* @__PURE__ */ s.jsx("span", { className: "header-menu-link-title", children: e.label }),
      e.description && /* @__PURE__ */ s.jsx("span", { className: "header-menu-link-description", children: e.description })
    ]
  }
) });
Js.propTypes = {
  /** Menu item object containing label, href, description, and current state */
  item: l.shape({
    label: l.string.isRequired,
    href: l.string.isRequired,
    description: l.string,
    current: l.bool
  }).isRequired
};
const dr = ({
  items: e,
  mainHeading: t,
  id: n,
  className: r
}) => {
  const a = `${n}-heading`;
  return /* @__PURE__ */ s.jsxs("nav", { className: `header-menu-group ${r || ""}`, role: "navigation", "aria-labelledby": a, children: [
    /* @__PURE__ */ s.jsx("h3", { id: a, className: "header-menu-heading", children: t }),
    /* @__PURE__ */ s.jsx("ul", { className: "header-menu-group-items", role: "menu", children: e.map((i, o) => /* @__PURE__ */ s.jsx(Js, { item: i }, o)) })
  ] });
};
dr.propTypes = {
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
dr.defaultProps = {
  mainHeading: "General Information",
  id: "pgov-header-menu-group"
};
const mr = ({
  title: e,
  logoUrl: t,
  logoAlt: n,
  tagline: r,
  navItems: a,
  mainHeading: i,
  menuText: o,
  openMenuAriaLabel: c,
  closeMenuAriaLabel: u,
  className: f
}) => {
  const [d, p] = ie(!1), g = () => {
    p(!d);
  };
  return /* @__PURE__ */ s.jsxs("header", { className: `header ${f || ""}`, children: [
    /* @__PURE__ */ s.jsx("div", { className: "header-main", children: /* @__PURE__ */ s.jsxs("div", { className: "header-container", children: [
      /* @__PURE__ */ s.jsx("div", { className: "header-logo", children: /* @__PURE__ */ s.jsx(
        fr,
        {
          logoUrl: t,
          logoAlt: n
        }
      ) }),
      /* @__PURE__ */ s.jsxs("div", { className: "header-text-container", children: [
        /* @__PURE__ */ s.jsx("span", { className: "header-title", children: e }),
        r && /* @__PURE__ */ s.jsx("span", { className: "header-tagline", children: r })
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: `header-mobile-menu ${d ? "is-open" : ""}`, children: /* @__PURE__ */ s.jsxs(
        "button",
        {
          className: "header-mobile-menu-button",
          "aria-label": d ? u : c,
          "aria-expanded": d,
          "aria-controls": "header-mobile-dropdown",
          onClick: g,
          children: [
            /* @__PURE__ */ s.jsxs("span", { className: "header-mobile-menu-icon", children: [
              /* @__PURE__ */ s.jsx("span", {}),
              /* @__PURE__ */ s.jsx("span", {}),
              /* @__PURE__ */ s.jsx("span", {})
            ] }),
            /* @__PURE__ */ s.jsx("span", { className: "header-mobile-menu-text", "aria-hidden": "true", children: o })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ s.jsx(
      "div",
      {
        id: "header-mobile-dropdown",
        className: `header-mobile-dropdown ${d ? "is-open" : ""}`,
        children: /* @__PURE__ */ s.jsx("div", { className: "header-mobile-menu-content", children: /* @__PURE__ */ s.jsx("nav", { className: "header-mobile-nav", "aria-label": "Primary navigation", children: /* @__PURE__ */ s.jsx(
          dr,
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
mr.propTypes = {
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
mr.defaultProps = {
  title: "Portland.gov",
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
const pr = ({
  text: e = "Skip to main content",
  mainContentId: t = "main-content",
  className: n = ""
}) => {
  const r = ["skipnav", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsx(
    "a",
    {
      href: `#${t}`,
      className: r,
      "data-testid": "skip-nav",
      children: e
    }
  );
};
pr.propTypes = {
  /** The text to display in the skip nav link */
  text: l.string,
  /** The ID of the main content element to skip to */
  mainContentId: l.string,
  /** Custom class name */
  className: l.string
};
pr.defaultProps = {
  text: "Skip to main content",
  mainContentId: "main-content",
  className: ""
};
const It = ({
  children: e,
  variant: t = "default",
  size: n = "default",
  disabled: r = !1,
  ariaDisabled: a = !1,
  unstyled: i = !1,
  onClick: o,
  type: c = "button",
  startIcon: u,
  endIcon: f,
  className: d,
  ...p
}) => {
  const g = "usa-button", h = t !== "default" ? `${g}--${t}` : "", b = n === "big" ? `${g}--big` : "", v = i ? `${g}--unstyled` : "", x = [
    g,
    h,
    b,
    v,
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: c,
      className: x,
      onClick: o,
      disabled: r,
      "aria-disabled": a || r,
      ...p,
      children: [
        u && /* @__PURE__ */ s.jsx("span", { className: "usa-button__icon usa-button__icon--left", children: /* @__PURE__ */ s.jsx(Q, { icon: u }) }),
        e,
        f && /* @__PURE__ */ s.jsx("span", { className: "usa-button__icon usa-button__icon--right", children: /* @__PURE__ */ s.jsx(Q, { icon: f }) })
      ]
    }
  );
};
It.propTypes = {
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
const hr = ({
  feedbackUrl: e,
  accessibilityText: t,
  serviceRequestText: n,
  onlineServiceUrl: r,
  phoneNumber: a,
  relayServiceText: i,
  relayServiceNumber: o,
  translationText: c,
  generalInfoLinks: u,
  termsLinks: f,
  portlandGovLinks: d,
  socialMediaLinks: p,
  cityName: g,
  cityLogoUrl: h,
  cityLogoAlt: b,
  copyrightText: v,
  exploreServicesText: x,
  exploreServicesUrl: R,
  className: T
}) => /* @__PURE__ */ s.jsxs("footer", { className: `footer ${T}`, role: "contentinfo", children: [
  /* @__PURE__ */ s.jsx("div", { className: "footer-feedback-section", children: /* @__PURE__ */ s.jsxs("p", { className: "footer-feedback-text", children: [
    "See something we could improve on this page? ",
    /* @__PURE__ */ s.jsx("a", { href: e, className: "footer-feedback-link", children: "Give website feedback" }),
    "."
  ] }) }),
  /* @__PURE__ */ s.jsx("div", { className: "footer-accessibility-section", children: /* @__PURE__ */ s.jsxs("div", { className: "footer-accessibility-container", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "footer-text-container", children: [
      /* @__PURE__ */ s.jsxs("p", { className: "footer-accessibility-text", children: [
        t,
        " ",
        /* @__PURE__ */ s.jsxs("span", { className: "footer-request-services", children: [
          "Request these services ",
          /* @__PURE__ */ s.jsx("a", { href: r, className: "footer-online-link", children: "online" }),
          " or ",
          /* @__PURE__ */ s.jsx("a", { href: `tel:${a.replace(/\D/g, "")}`, className: "footer-phone-link", children: a }),
          ". Relay Service: ",
          /* @__PURE__ */ s.jsx("a", { href: `tel:${o.replace(/\D/g, "")}`, className: "footer-relay-link", children: o }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("p", { className: "footer-translation-text", children: [
        /* @__PURE__ */ s.jsx("a", { href: `tel:${a.replace(/\D/g, "")}`, className: "footer-translation-phone-link", children: a }),
        " ",
        c
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "footer-explore-services", children: /* @__PURE__ */ s.jsxs(It, { href: R, className: "footer-explore-button", children: [
      x,
      " ",
      /* @__PURE__ */ s.jsx("span", { className: "footer-explore-arrow", children: "→" })
    ] }) })
  ] }) }),
  /* @__PURE__ */ s.jsx("div", { className: "footer-main", children: /* @__PURE__ */ s.jsxs("div", { className: "footer-nav", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "footer-city-info", children: [
      /* @__PURE__ */ s.jsx("p", { className: "footer-city-name", children: g }),
      /* @__PURE__ */ s.jsx("img", { src: h, alt: b, className: "footer-city-logo" }),
      /* @__PURE__ */ s.jsx("p", { className: "footer-copyright", children: v })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ s.jsx("h4", { className: "footer-heading", children: "General Information" }),
      /* @__PURE__ */ s.jsx("ul", { className: "footer-links", children: u.map((E, O) => /* @__PURE__ */ s.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ s.jsx("a", { href: E.href, className: "footer-link", children: E.label }) }, `general-link-${O}`)) })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ s.jsx("h4", { className: "footer-heading", children: "Terms And Policies" }),
      /* @__PURE__ */ s.jsx("ul", { className: "footer-links", children: f.map((E, O) => /* @__PURE__ */ s.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ s.jsx("a", { href: E.href, className: "footer-link", children: E.label }) }, `terms-link-${O}`)) })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ s.jsx("h4", { className: "footer-heading", children: "Portland.Gov" }),
      /* @__PURE__ */ s.jsx("ul", { className: "footer-links", children: d.map((E, O) => /* @__PURE__ */ s.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ s.jsx("a", { href: E.href, className: "footer-link", children: E.label }) }, `pgov-link-${O}`)) })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ s.jsx("h4", { className: "footer-heading", children: "Social Media" }),
      /* @__PURE__ */ s.jsx("ul", { className: "footer-links", children: p.map((E, O) => /* @__PURE__ */ s.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ s.jsx("a", { href: E.href, className: "footer-link", children: E.label }) }, `social-link-${O}`)) })
    ] })
  ] }) })
] });
hr.propTypes = {
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
hr.defaultProps = {
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
const gr = ({
  items: e,
  className: t = "",
  customSeparator: n
}) => {
  const [r, a] = ie(window.innerWidth < 768);
  le(() => {
    const u = () => {
      const f = window.innerWidth < 768;
      r !== f && a(f);
    };
    return window.addEventListener("resize", u), () => window.removeEventListener("resize", u);
  }, [r]);
  const i = () => n || /* @__PURE__ */ s.jsx(
    Q,
    {
      icon: r ? zc : Ks,
      className: "breadcrumb__separator",
      "aria-hidden": "true"
    }
  ), o = () => e.map((u, f) => /* @__PURE__ */ s.jsxs("li", { className: "breadcrumb__item", children: [
    r && f > 0 && i(),
    f === e.length - 1 ? /* @__PURE__ */ s.jsx("span", { className: "breadcrumb__current", "aria-current": "page", children: u.text }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx("a", { href: u.href, className: "breadcrumb__link", children: u.text }),
      !r && i()
    ] })
  ] }, f)), c = ["breadcrumb", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsx(
    "nav",
    {
      className: c,
      "aria-label": "Breadcrumbs",
      children: /* @__PURE__ */ s.jsx("ol", { className: "breadcrumb__list", children: o() })
    }
  );
};
gr.propTypes = {
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
gr.defaultProps = {
  className: "",
  customSeparator: void 0
};
const Zs = ({
  bannerProps: e,
  headerProps: t,
  skipNavProps: n,
  footerProps: r,
  breadcrumbsProps: a,
  children: i,
  includeBanner: o = !0,
  includeSkipNav: c = !0,
  includeFooter: u = !0,
  includeBreadcrumbs: f = !0,
  className: d = ""
}) => /* @__PURE__ */ s.jsxs("div", { className: `pgov-page-template ${d}`, children: [
  c && /* @__PURE__ */ s.jsx(pr, { ...n }),
  o && /* @__PURE__ */ s.jsx(ur, { ...e }),
  /* @__PURE__ */ s.jsx(mr, { ...t }),
  /* @__PURE__ */ s.jsxs(
    "main",
    {
      id: "main-content",
      className: "pgov-page-template-main",
      tabIndex: "-1",
      role: "main",
      "aria-label": "Main content",
      children: [
        f && /* @__PURE__ */ s.jsx(gr, { ...a }),
        i
      ]
    }
  ),
  u && /* @__PURE__ */ s.jsx(hr, { ...r })
] });
Zs.propTypes = {
  /** Props for the Banner component */
  bannerProps: l.object,
  /** Props for the PGOVHeader component */
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
Zs.defaultProps = {
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
var vn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ma;
function tu() {
  return Ma || (Ma = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var i = "", o = 0; o < arguments.length; o++) {
          var c = arguments[o];
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
        var o = "";
        for (var c in i)
          t.call(i, c) && i[c] && (o = a(o, c));
        return o;
      }
      function a(i, o) {
        return o ? i ? i + " " + o : i + o : i;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(vn)), vn.exports;
}
var nu = tu();
const he = /* @__PURE__ */ us(nu), ru = () => {
  if (typeof window > "u") return !1;
  const e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t = ("ontouchstart" in window || navigator.maxTouchPoints > 0) && window.matchMedia("(pointer: coarse)").matches, n = window.matchMedia("(max-width: 768px)").matches;
  return e || t && n;
}, au = (e, t) => {
  le(() => {
    const n = (r) => {
      !e.current || e.current.contains(r.target) || t(r);
    };
    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
      document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n);
    };
  }, [e, t]);
}, su = [
  { code: "en", nativeName: "English", englishName: "English" },
  { code: "es", nativeName: "Español", englishName: "Spanish" },
  { code: "fr", nativeName: "Français", englishName: "French" },
  { code: "ar", nativeName: "العربية", englishName: "Arabic" },
  { code: "zh", nativeName: "简体字", englishName: "Chinese - Simplified" },
  { code: "it", nativeName: "Italiano", englishName: "Italian" }
], iu = ({
  languages: e = su,
  selectedLanguage: t = "en",
  onLanguageChange: n,
  variant: r = "default",
  buttonText: a = "Languages",
  buttonVariant: i = "default",
  buttonSize: o = "default",
  className: c,
  id: u = "language-selector",
  disabled: f = !1,
  showFooterText: d = !0,
  footerText: p = "Selected content in additional languages",
  ariaLabel: g = "Select language",
  showIcon: h = !1,
  ...b
}) => {
  const [v, x] = ie(!1), [R, T] = ie(-1), [E, O] = ie(""), [C, V] = ie(!1), I = pe(null), M = pe(null), W = pe(null), k = pe(null);
  au(I, () => x(!1)), le(() => {
    V(ru());
  }, []);
  const q = (N) => {
    if (N === "footer")
      return;
    const A = e.find((j) => j.code === N);
    n && A && n(N, A), x(!1), T(-1);
  }, z = (N) => {
    const A = E + N.toLowerCase();
    O(A);
    const j = e.findIndex(
      (S) => S.nativeName.toLowerCase().startsWith(A) || S.englishName.toLowerCase().startsWith(A)
    );
    j !== -1 && T(j), k.current && clearTimeout(k.current), k.current = setTimeout(() => O(""), 500);
  }, w = (N) => {
    var A;
    !v && (N.key === "ArrowDown" || N.key === "Enter" || N.key === " ") ? (x(!0), T(0), N.preventDefault()) : v && (N.key === "ArrowDown" ? (T((j) => (j + 1) % e.length), N.preventDefault()) : N.key === "ArrowUp" ? (T((j) => (j - 1 + e.length) % e.length), N.preventDefault()) : N.key === "Enter" || N.key === " " ? (R >= 0 && R < e.length && q(e[R].code), N.preventDefault()) : N.key === "Escape" ? (x(!1), T(-1), (A = M.current) == null || A.focus(), N.preventDefault()) : N.key === "Tab" ? (x(!1), T(-1)) : N.key.length === 1 && /^[a-z0-9]$/i.test(N.key) && z(N.key));
  };
  le(() => {
    if (v && R >= 0 && W.current) {
      const N = W.current.querySelector(`[data-index="${R}"]`);
      N && N.scrollIntoView({ block: "nearest" });
    }
  }, [v, R]);
  const y = he(
    "usa-language-selector",
    {
      "usa-language-selector--two-languages": r === "two-languages",
      "usa-language-selector--unstyled": r === "unstyled",
      "usa-language-selector--with-icon": h
    },
    c
  );
  if (r === "two-languages") {
    const N = e.find((A) => A.code !== t) || e[1];
    return /* @__PURE__ */ s.jsx("div", { className: y, ...b, children: /* @__PURE__ */ s.jsxs(
      It,
      {
        id: u,
        variant: i,
        size: o,
        disabled: f,
        onClick: () => q(N.code),
        "aria-label": g,
        className: "usa-language-selector__button",
        children: [
          h && /* @__PURE__ */ s.jsx(
            Q,
            {
              icon: hn,
              className: "usa-language-selector__icon",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ s.jsx("span", { lang: N.code, children: N.nativeName }),
          N.englishName !== N.nativeName && /* @__PURE__ */ s.jsx("span", { className: "usa-language-selector__english-name", children: ` (${N.englishName})` })
        ]
      }
    ) });
  }
  return C ? /* @__PURE__ */ s.jsx("div", { className: y, ref: I, ...b, children: /* @__PURE__ */ s.jsxs(
    "select",
    {
      id: u,
      className: "usa-language-selector__native-select",
      value: t || "",
      onChange: (N) => q(N.target.value),
      disabled: f,
      "aria-label": g,
      children: [
        /* @__PURE__ */ s.jsx("option", { value: "", disabled: !0, children: a }),
        e.map((N) => /* @__PURE__ */ s.jsx("option", { value: N.code, children: N.nativeName !== N.englishName ? `${N.nativeName} (${N.englishName})` : N.nativeName }, N.code))
      ]
    }
  ) }) : r === "unstyled" ? /* @__PURE__ */ s.jsxs("div", { className: y, ref: I, ...b, children: [
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        type: "button",
        id: u,
        ref: M,
        className: "usa-language-selector__button usa-language-selector__button--unstyled",
        onClick: () => !f && x(!v),
        onKeyDown: w,
        disabled: f,
        "aria-haspopup": "listbox",
        "aria-expanded": v,
        "aria-controls": `${u}-menu`,
        "aria-label": g,
        "aria-activedescendant": v && R >= 0 ? `${u}-option-${R}` : void 0,
        children: [
          h && /* @__PURE__ */ s.jsx(
            Q,
            {
              icon: hn,
              className: "usa-language-selector__icon",
              "aria-hidden": "true"
            }
          ),
          a
        ]
      }
    ),
    v && /* @__PURE__ */ s.jsxs(
      "ul",
      {
        id: `${u}-menu`,
        ref: W,
        className: "usa-language-selector__menu",
        role: "listbox",
        "aria-labelledby": u,
        onKeyDown: w,
        children: [
          e.map((N, A) => /* @__PURE__ */ s.jsxs(
            "li",
            {
              id: `${u}-option-${A}`,
              "data-index": A,
              className: he("usa-language-selector__option", {
                "usa-language-selector__option--selected": t === N.code,
                "usa-language-selector__option--active": R === A
              }),
              onClick: () => q(N.code),
              role: "option",
              "aria-selected": t === N.code,
              children: [
                /* @__PURE__ */ s.jsx("span", { lang: N.code, children: N.nativeName }),
                N.englishName !== N.nativeName && /* @__PURE__ */ s.jsx("span", { className: "usa-language-selector__english-name", children: ` (${N.englishName})` })
              ]
            },
            N.code
          )),
          d && /* @__PURE__ */ s.jsx(
            "li",
            {
              className: "usa-language-selector__footer",
              role: "presentation",
              children: p
            }
          )
        ]
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: y, ref: I, ...b, children: [
    /* @__PURE__ */ s.jsxs(
      It,
      {
        id: u,
        ref: M,
        variant: i,
        size: o,
        disabled: f,
        onClick: () => !f && x(!v),
        onKeyDown: w,
        className: "usa-language-selector__button",
        "aria-haspopup": "listbox",
        "aria-expanded": v,
        "aria-controls": `${u}-menu`,
        "aria-label": g,
        "aria-activedescendant": v && R >= 0 ? `${u}-option-${R}` : void 0,
        children: [
          h && /* @__PURE__ */ s.jsx(
            Q,
            {
              icon: hn,
              className: "usa-language-selector__icon",
              "aria-hidden": "true"
            }
          ),
          a
        ]
      }
    ),
    v && /* @__PURE__ */ s.jsxs(
      "ul",
      {
        id: `${u}-menu`,
        ref: W,
        className: "usa-language-selector__menu",
        role: "listbox",
        "aria-labelledby": u,
        onKeyDown: w,
        children: [
          e.map((N, A) => /* @__PURE__ */ s.jsxs(
            "li",
            {
              id: `${u}-option-${A}`,
              "data-index": A,
              className: he("usa-language-selector__option", {
                "usa-language-selector__option--selected": t === N.code,
                "usa-language-selector__option--active": R === A
              }),
              onClick: () => q(N.code),
              role: "option",
              "aria-selected": t === N.code,
              children: [
                /* @__PURE__ */ s.jsx("span", { lang: N.code, children: N.nativeName }),
                N.englishName !== N.nativeName && /* @__PURE__ */ s.jsx("span", { className: "usa-language-selector__english-name", children: ` (${N.englishName})` })
              ]
            },
            N.code
          )),
          d && /* @__PURE__ */ s.jsx(
            "li",
            {
              className: "usa-language-selector__footer",
              role: "presentation",
              children: p
            }
          )
        ]
      }
    )
  ] });
};
iu.propTypes = {
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
  ariaLabel: l.string,
  /** Whether to show the language icon */
  showIcon: l.bool
};
const Qs = ({ item: e, isActive: t, isExpanded: n, isParent: r, position: a, onClick: i }) => {
  const o = [
    "side-nav-item",
    t ? "active" : "",
    r ? "parent" : "child",
    a,
    n ? "expanded" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs(
    "a",
    {
      href: e.link,
      className: o,
      "aria-current": t ? "page" : void 0,
      "aria-expanded": r ? n : void 0,
      onClick: (c) => {
        r && (c.preventDefault(), i());
      },
      children: [
        /* @__PURE__ */ s.jsx("div", { className: `nav-indicator ${t ? "active-indicator" : ""}` }),
        /* @__PURE__ */ s.jsx("div", { className: "nav-content", children: /* @__PURE__ */ s.jsx("div", { className: "side-nav-text", children: e.title }) })
      ]
    }
  );
};
Qs.propTypes = {
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
const ei = ({ items: e, activeItemId: t, activeIndex: n }) => {
  const [r, a] = ie(null), i = (c, u, f = !1) => c === 0 && !f ? "top" : c === u - 1 ? "bottom" : "middle", o = (c, u = !1) => c.map((f, d) => {
    var v;
    const p = !!((v = f.children) != null && v.length), g = t ? f.link === t : d === n, h = r === f.link, b = i(d, c.length, u);
    return /* @__PURE__ */ s.jsxs("li", { className: "nav-item-container", children: [
      /* @__PURE__ */ s.jsx(
        Qs,
        {
          item: f,
          isActive: g,
          isExpanded: h,
          isParent: p,
          position: b,
          onClick: () => {
            a(h ? null : f.link);
          }
        }
      ),
      p && h && /* @__PURE__ */ s.jsx("ul", { className: "nav-children", children: o(f.children, !0) })
    ] }, f.link);
  });
  return /* @__PURE__ */ s.jsx(
    "nav",
    {
      className: "side-nav",
      "aria-label": "Section Navigation",
      role: "navigation",
      children: /* @__PURE__ */ s.jsx("ul", { className: "side-nav-list", children: o(e) })
    }
  );
};
ei.propTypes = {
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
ei.defaultProps = {
  activeItemId: null,
  activeIndex: null
};
const ou = ({ heading: e, description: t, children: n }) => {
  const r = `summary-box-${e.toLowerCase().replace(/\s+/g, "-")}`;
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "usa-summary-box",
      role: "region",
      "aria-labelledby": r,
      children: /* @__PURE__ */ s.jsxs("div", { className: "usa-summary-box__body", children: [
        /* @__PURE__ */ s.jsx("div", { className: "usa-summary-box__heading", id: r, children: e }),
        t && /* @__PURE__ */ s.jsx("div", { className: "summary-box-description", children: t }),
        /* @__PURE__ */ s.jsx("div", { className: "usa-summary-box__text", children: n })
      ] })
    }
  );
};
ou.propTypes = {
  heading: l.string.isRequired,
  description: l.string,
  children: l.node.isRequired
};
const ti = ({ number: e }) => /* @__PURE__ */ s.jsxs("div", { className: "stepNumberWrapper", children: [
  /* @__PURE__ */ s.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      className: "stepNumberSvg",
      children: /* @__PURE__ */ s.jsx(
        "circle",
        {
          cx: "24",
          cy: "24",
          r: "22"
        }
      )
    }
  ),
  /* @__PURE__ */ s.jsx("span", { className: "stepNumberText", children: e })
] });
ti.propTypes = {
  number: l.number.isRequired
};
const ni = ({ step: e, stepNumber: t, isLast: n }) => /* @__PURE__ */ s.jsxs("div", { className: "stepItem", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "stepNumberContainer", children: [
    /* @__PURE__ */ s.jsx(ti, { number: t }),
    !n && /* @__PURE__ */ s.jsx("div", { className: "verticalBar" })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "stepContent", children: [
    /* @__PURE__ */ s.jsx("h3", { className: "stepHeading", children: e.heading }),
    /* @__PURE__ */ s.jsx("p", { className: "stepDescription", children: e.description }),
    e.cta && /* @__PURE__ */ s.jsx("div", { className: "stepCta", children: e.cta })
  ] })
] });
ni.propTypes = {
  step: l.shape({
    heading: l.string.isRequired,
    description: l.string.isRequired,
    cta: l.node
  }).isRequired,
  stepNumber: l.number.isRequired,
  isLast: l.bool.isRequired
};
const lu = ({ title: e, mainDescription: t, steps: n }) => /* @__PURE__ */ s.jsxs("div", { className: "processSteps", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "header", children: [
    /* @__PURE__ */ s.jsx("h2", { className: "title", children: e }),
    /* @__PURE__ */ s.jsx("p", { className: "mainDescription", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "stepsContainer", children: n.map((r, a) => /* @__PURE__ */ s.jsx(
    ni,
    {
      step: r,
      stepNumber: a + 1,
      isLast: a === n.length - 1
    },
    a
  )) })
] });
lu.propTypes = {
  title: l.string.isRequired,
  mainDescription: l.string.isRequired,
  steps: l.arrayOf(
    l.shape({
      heading: l.string.isRequired,
      description: l.string.isRequired,
      cta: l.node
    })
  ).isRequired
};
const cu = ({ variant: e = "default", children: t, className: n, ...r }) => {
  const o = ["usa-tag", e === "big" ? "usa-tag--big" : "", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsx("span", { className: o, ...r, children: t });
};
cu.propTypes = {
  /** The content of the tag */
  children: l.node.isRequired,
  /** The variant of the tag */
  variant: l.oneOf(["default", "big"]),
  /** Additional className to be applied to the tag */
  className: l.string
};
const uu = ({
  variant: e = "default",
  buttonText: t = "Search",
  className: n,
  id: r,
  name: a = "search",
  placeholder: i,
  onSubmit: o,
  ...c
}) => {
  const d = ["usa-search", e === "big" ? "usa-search--big" : e === "small" ? "usa-search--small" : "", n].filter(Boolean).join(" "), p = (g) => {
    g.preventDefault(), o && o(g);
  };
  return /* @__PURE__ */ s.jsx("section", { "aria-label": `${e} search component`, children: /* @__PURE__ */ s.jsxs("form", { className: d, role: "search", onSubmit: p, children: [
    /* @__PURE__ */ s.jsx("label", { className: "usa-sr-only", htmlFor: r, children: t }),
    /* @__PURE__ */ s.jsx(
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
    /* @__PURE__ */ s.jsx("button", { className: "usa-button", type: "submit", children: e === "small" ? /* @__PURE__ */ s.jsx(
      Q,
      {
        icon: Vc,
        className: "usa-search__submit-icon",
        "aria-hidden": "true"
      }
    ) : /* @__PURE__ */ s.jsx("span", { className: "usa-search__submit-text", children: t }) })
  ] }) });
};
uu.propTypes = {
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
const fu = {
  prefix: "fab",
  iconName: "x-twitter",
  icon: [512, 512, [], "e61b", "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]
}, du = {
  prefix: "fab",
  iconName: "instagram",
  icon: [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
}, mu = {
  prefix: "fab",
  iconName: "facebook",
  icon: [512, 512, [62e3], "f09a", "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]
}, pu = {
  prefix: "fab",
  iconName: "bluesky",
  icon: [512, 512, [], "e671", "M111.8 62.2C170.2 105.9 233 194.7 256 242.4c23-47.6 85.8-136.4 144.2-180.2c42.1-31.6 110.3-56 110.3 21.8c0 15.5-8.9 130.5-14.1 149.2C478.2 298 412 314.6 353.1 304.5c102.9 17.5 129.1 75.5 72.5 133.5c-107.4 110.2-154.3-27.6-166.3-62.9l0 0c-1.7-4.9-2.6-7.8-3.3-7.8s-1.6 3-3.3 7.8l0 0c-12 35.3-59 173.1-166.3 62.9c-56.5-58-30.4-116 72.5-133.5C100 314.6 33.8 298 15.7 233.1C10.4 214.4 1.5 99.4 1.5 83.9c0-77.8 68.2-53.4 110.3-21.8z"]
}, hu = ({
  title: e,
  emailAddress: t,
  officePhone: n,
  informationPhone: r,
  relayServicePhone: a,
  socialMedia: i,
  officeDetails: o,
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
    city: b,
    state: v,
    zip: x,
    days: R,
    hours: T
  } = o || {};
  return /* @__PURE__ */ s.jsxs("div", { className: `contacts ${c || ""}`, children: [
    /* @__PURE__ */ s.jsx("div", { className: "contacts__border" }),
    /* @__PURE__ */ s.jsxs("div", { className: "contacts__container", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "contacts__section", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "contacts__section-header", children: [
          /* @__PURE__ */ s.jsx("h3", { className: "contacts__heading", children: "Contact" }),
          /* @__PURE__ */ s.jsx("div", { className: "contacts__button-container", children: /* @__PURE__ */ s.jsxs(
            "a",
            {
              href: `mailto:${t}`,
              className: "contacts__button",
              "aria-label": `Contact ${e} via email`,
              children: [
                /* @__PURE__ */ s.jsx(Q, { icon: Bc, className: "contacts__button-icon" }),
                /* @__PURE__ */ s.jsxs("span", { children: [
                  "Contact this ",
                  e
                ] })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "contacts__phone-list", children: [
          n && /* @__PURE__ */ s.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ s.jsx(Q, { icon: gn, className: "contacts__icon" }),
              /* @__PURE__ */ s.jsx("span", { className: "contacts__label", children: "Phone: Office" })
            ] }),
            /* @__PURE__ */ s.jsx("a", { href: `tel:${n}`, className: "contacts__link", children: n })
          ] }),
          r && /* @__PURE__ */ s.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ s.jsx(Q, { icon: gn, className: "contacts__icon" }),
              /* @__PURE__ */ s.jsx("span", { className: "contacts__label", children: "Phone: Information" })
            ] }),
            /* @__PURE__ */ s.jsx("a", { href: `tel:${r}`, className: "contacts__link", children: r })
          ] }),
          a && /* @__PURE__ */ s.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ s.jsx(Q, { icon: gn, className: "contacts__icon" }),
              /* @__PURE__ */ s.jsx("span", { className: "contacts__label", children: "Phone: Oregon Relay Service" })
            ] }),
            /* @__PURE__ */ s.jsx("a", { href: `tel:${a}`, className: "contacts__link", children: a })
          ] })
        ] })
      ] }),
      i && /* @__PURE__ */ s.jsxs("div", { className: "contacts__section", children: [
        /* @__PURE__ */ s.jsx("h3", { className: "contacts__heading", children: "Social Media" }),
        /* @__PURE__ */ s.jsxs("div", { className: "contacts__social-list", children: [
          u && /* @__PURE__ */ s.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ s.jsx(Q, { icon: mu, className: "contacts__icon" }),
              /* @__PURE__ */ s.jsx("span", { className: "contacts__label", children: "Facebook" })
            ] }),
            /* @__PURE__ */ s.jsx("a", { href: `https://facebook.com/${u}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: u })
          ] }),
          f && /* @__PURE__ */ s.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ s.jsx(Q, { icon: fu, className: "contacts__icon" }),
              /* @__PURE__ */ s.jsx("span", { className: "contacts__label", children: "X (Twitter)" })
            ] }),
            /* @__PURE__ */ s.jsx("a", { href: `https://twitter.com/${f}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: f })
          ] }),
          d && /* @__PURE__ */ s.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ s.jsx(Q, { icon: pu, className: "contacts__icon" }),
              /* @__PURE__ */ s.jsx("span", { className: "contacts__label", children: "Bluesky" })
            ] }),
            /* @__PURE__ */ s.jsx("a", { href: `https://bsky.app/profile/${d}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: d })
          ] }),
          p && /* @__PURE__ */ s.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ s.jsx(Q, { icon: du, className: "contacts__icon" }),
              /* @__PURE__ */ s.jsx("span", { className: "contacts__label", children: "Instagram" })
            ] }),
            /* @__PURE__ */ s.jsx("a", { href: `https://instagram.com/${p}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: p })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "contacts__section", children: [
        /* @__PURE__ */ s.jsx("h3", { className: "contacts__heading", children: "Office" }),
        /* @__PURE__ */ s.jsxs("div", { className: "contacts__office-info", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ s.jsx(Q, { icon: Ac, className: "contacts__icon" }),
              /* @__PURE__ */ s.jsx("span", { className: "contacts__label", children: "Address" })
            ] }),
            /* @__PURE__ */ s.jsxs("a", { href: `https://maps.google.com/?q=${g} ${b}, ${v} ${x}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: [
              g,
              /* @__PURE__ */ s.jsx("br", {}),
              h && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                h,
                /* @__PURE__ */ s.jsx("br", {})
              ] }),
              b,
              ", ",
              v,
              " ",
              x
            ] })
          ] }),
          T && /* @__PURE__ */ s.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ s.jsx(Q, { icon: Yc, className: "contacts__icon" }),
              /* @__PURE__ */ s.jsx("span", { className: "contacts__label", children: "Hours" })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "contacts__hours-value", children: [
              /* @__PURE__ */ s.jsx("div", { children: R }),
              /* @__PURE__ */ s.jsx("div", { children: T })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
};
hu.propTypes = {
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
const gu = ({
  title: e,
  subtitle: t,
  searchComponent: n,
  links: r = [],
  className: a,
  ...i
}) => {
  const o = "pgov-hero-homepage", c = [
    o,
    a
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: c, ...i, children: [
    /* @__PURE__ */ s.jsx("div", { className: `${o}__title-container`, children: /* @__PURE__ */ s.jsx("h1", { className: `${o}__title`, children: e }) }),
    /* @__PURE__ */ s.jsx("div", { className: `${o}__search-container`, children: n }),
    (r == null ? void 0 : r.length) > 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      t && /* @__PURE__ */ s.jsx("div", { className: `${o}__subtitle-container`, children: /* @__PURE__ */ s.jsx("h2", { className: `${o}__subtitle`, children: t }) }),
      /* @__PURE__ */ s.jsx("div", { className: `${o}__links-container`, children: r.map((u, f) => /* @__PURE__ */ s.jsx(
        "a",
        {
          href: u.href,
          className: `${o}__link`,
          ...u.props,
          children: u.text
        },
        f
      )) })
    ] })
  ] });
};
gu.propTypes = {
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
const vu = ({
  title: e,
  description: t,
  tags: n = [],
  image: r,
  actionButton: a,
  className: i,
  ...o
}) => {
  const c = "hero-global", u = ne.useId(), f = [
    c,
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsx(
    "section",
    {
      className: f,
      role: "banner",
      "aria-labelledby": u,
      ...o,
      children: /* @__PURE__ */ s.jsxs("div", { className: `${c}__container`, children: [
        /* @__PURE__ */ s.jsx("div", { className: `${c}__content-wrapper`, children: /* @__PURE__ */ s.jsxs("div", { className: `${c}__content`, children: [
          /* @__PURE__ */ s.jsx(
            "h1",
            {
              id: u,
              className: `${c}__title`,
              children: e
            }
          ),
          n.length > 0 && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `${c}__tags`,
              "aria-label": "Content categories",
              children: n.map((d, p) => /* @__PURE__ */ s.jsx(
                "span",
                {
                  className: `${c}__tag`,
                  children: d
                },
                p
              ))
            }
          ),
          t && /* @__PURE__ */ s.jsx("p", { className: `${c}__description`, children: t }),
          a && /* @__PURE__ */ s.jsx("div", { className: `${c}__action`, children: a })
        ] }) }),
        r && /* @__PURE__ */ s.jsx("div", { className: `${c}__image-wrapper`, children: /* @__PURE__ */ s.jsxs("div", { className: `${c}__image-container`, children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("div", { className: `${c}__image-placeholder`, "aria-hidden": "true" })
        ] }) })
      ] })
    }
  );
};
vu.propTypes = {
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
const Fa = () => /* @__PURE__ */ s.jsx(
  Q,
  {
    icon: qc,
    style: {
      marginLeft: "0.25rem",
      fontSize: "0.75em",
      verticalAlign: "middle"
    },
    "aria-hidden": "true"
  }
), ri = ({
  domain: e,
  agencies: t = [],
  parentAgency: n,
  requiredLinks: r = [],
  usaGovText: a = {},
  taxpayerDisclaimer: i = !1,
  lang: o = "en",
  className: c = ""
}) => {
  const u = [
    "usa-identifier",
    c
  ].filter(Boolean).join(" "), f = (x) => {
    if (!x) return !1;
    if (x.startsWith("http://") || x.startsWith("https://")) {
      if (e)
        try {
          const E = new URL(x).hostname.replace(/^www\./, ""), O = e.replace(/^www\./, "");
          return E !== O;
        } catch {
          return !0;
        }
      return !0;
    }
    return !!x.startsWith("//");
  }, d = [
    { text: o === "es" ? "Acerca de" : "About", href: "#" },
    { text: o === "es" ? "Declaración de accesibilidad" : "Accessibility statement", href: "#" },
    { text: o === "es" ? "Solicitud a través de FOIA" : "FOIA requests", href: "#" },
    { text: o === "es" ? "Datos de la ley No FEAR" : "No FEAR Act data", href: "#" },
    { text: o === "es" ? "Oficina del Inspector General" : "Office of the Inspector General", href: "#" },
    { text: o === "es" ? "Informes de desempeño" : "Performance reports", href: "#" },
    { text: o === "es" ? "Política de privacidad" : "Privacy policy", href: "#" }
  ], p = r.length > 0 ? r : d, h = { ...{
    text: o === "es" ? "¿Necesita información y servicios del Gobierno?" : "Looking for U.S. government information and services?",
    linkText: o === "es" ? "Visite USAGov en Español" : "Visit USA.gov",
    href: o === "es" ? "https://www.usa.gov/es/" : "https://www.usa.gov/"
  }, ...a }, v = (() => {
    if (!n && t.length === 0) return "";
    if (t.length === 1)
      return t[0].name || n;
    if (t.length === 2) {
      const x = o === "es" ? "y" : "and the";
      return `${t[0].name} ${x} ${t[1].name}`;
    } else if (t.length > 2) {
      const x = t[t.length - 1];
      return `${t.slice(0, -1).map((E) => E.name).join(", ")}${o === "es" ? "y" : ", and the"} ${x.name}`;
    }
    return n;
  })();
  return /* @__PURE__ */ s.jsxs("div", { className: u, children: [
    /* @__PURE__ */ s.jsx(
      "section",
      {
        className: "usa-identifier__section usa-identifier__section--masthead",
        "aria-label": o === "es" ? "Identificador de agencia," : "Agency identifier,",
        children: /* @__PURE__ */ s.jsxs("div", { className: "usa-identifier__container", children: [
          t.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "usa-identifier__logos", children: t.map((x, R) => /* @__PURE__ */ s.jsx(
            "a",
            {
              href: x.href || "#",
              className: "usa-identifier__logo",
              children: /* @__PURE__ */ s.jsx(
                "img",
                {
                  className: "usa-identifier__logo-img",
                  src: x.logoSrc,
                  alt: x.logoAlt || `${x.name} logo`,
                  role: "img"
                }
              )
            },
            R
          )) }),
          /* @__PURE__ */ s.jsxs(
            "section",
            {
              className: "usa-identifier__identity",
              "aria-label": o === "es" ? "Descripción de agencia," : "Agency description,",
              children: [
                e && /* @__PURE__ */ s.jsx("p", { className: "usa-identifier__identity-domain", children: e }),
                /* @__PURE__ */ s.jsxs("p", { className: "usa-identifier__identity-disclaimer", children: [
                  o === "es" ? "" : /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: "An " }),
                  o === "es" ? "Un sitio web oficial de" : "official website of the",
                  " ",
                  v,
                  i && o === "es" && ". Producido y publicado con dinero de los contribuyentes de impuestos.",
                  i && o !== "es" && ". Produced and published at taxpayer expense."
                ] })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      "nav",
      {
        className: "usa-identifier__section usa-identifier__section--required-links",
        "aria-label": o === "es" ? "Enlaces importantes," : "Important links,",
        children: /* @__PURE__ */ s.jsx("div", { className: "usa-identifier__container", children: /* @__PURE__ */ s.jsx("ul", { className: "usa-identifier__required-links-list", children: p.map((x, R) => {
          const T = f(x.href);
          return /* @__PURE__ */ s.jsx("li", { className: "usa-identifier__required-links-item", children: /* @__PURE__ */ s.jsxs(
            "a",
            {
              href: x.href,
              className: "usa-identifier__required-link usa-link",
              ...T && { target: "_blank", rel: "noopener noreferrer" },
              children: [
                x.text,
                T && /* @__PURE__ */ s.jsx(Fa, {})
              ]
            }
          ) }, R);
        }) }) })
      }
    ),
    /* @__PURE__ */ s.jsx(
      "section",
      {
        className: "usa-identifier__section usa-identifier__section--usagov",
        "aria-label": o === "es" ? "Enlace a USA.gov," : "U.S. government information and services,",
        children: /* @__PURE__ */ s.jsx("div", { className: "usa-identifier__container", children: /* @__PURE__ */ s.jsxs("div", { className: "usa-identifier__usagov-description", children: [
          h.text,
          /* @__PURE__ */ s.jsxs(
            "a",
            {
              href: h.href,
              className: "usa-link",
              ...f(h.href) && { target: "_blank", rel: "noopener noreferrer" },
              children: [
                h.linkText,
                f(h.href) && /* @__PURE__ */ s.jsx(Fa, {})
              ]
            }
          )
        ] }) })
      }
    )
  ] });
};
ri.propTypes = {
  /** Site domain (e.g., "domain.gov") */
  domain: l.string,
  /** Array of agency objects with name, logoSrc, logoAlt, and optional href */
  agencies: l.arrayOf(l.shape({
    name: l.string.isRequired,
    shortname: l.string,
    logoSrc: l.string,
    logoAlt: l.string,
    href: l.string
  })),
  /** Parent agency name (used when no agencies array provided) */
  parentAgency: l.string,
  /** Array of required policy links */
  requiredLinks: l.arrayOf(l.shape({
    text: l.string.isRequired,
    href: l.string.isRequired
  })),
  /** USA.gov section content */
  usaGovText: l.shape({
    text: l.string,
    linkText: l.string,
    href: l.string
  }),
  /** Whether to show taxpayer disclaimer */
  taxpayerDisclaimer: l.bool,
  /** Language code ('en' or 'es') */
  lang: l.oneOf(["en", "es"]),
  /** Additional CSS class name */
  className: l.string
};
ri.defaultProps = {
  domain: "",
  agencies: [],
  parentAgency: "",
  requiredLinks: [],
  usaGovText: {},
  taxpayerDisclaimer: !1,
  lang: "en",
  className: ""
};
var jt = { exports: {} };
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var ai = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Mt = /* @__PURE__ */ ai.join(","), si = typeof Element > "u", qe = si ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Ft = !si && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, Lt = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var a = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), i = a === "" || a === "true", o = i || n && t && e(t.parentNode);
  return o;
}, bu = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, ii = function(t, n, r) {
  if (Lt(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Mt));
  return n && qe.call(t, Mt) && a.unshift(t), a = a.filter(r), a;
}, oi = function e(t, n, r) {
  for (var a = [], i = Array.from(t); i.length; ) {
    var o = i.shift();
    if (!Lt(o, !1))
      if (o.tagName === "SLOT") {
        var c = o.assignedElements(), u = c.length ? c : o.children, f = e(u, !0, r);
        r.flatten ? a.push.apply(a, f) : a.push({
          scopeParent: o,
          candidates: f
        });
      } else {
        var d = qe.call(o, Mt);
        d && r.filter(o) && (n || !t.includes(o)) && a.push(o);
        var p = o.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(o), g = !Lt(p, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
        if (p && g) {
          var h = e(p === !0 ? o.children : p.children, !0, r);
          r.flatten ? a.push.apply(a, h) : a.push({
            scopeParent: o,
            candidates: h
          });
        } else
          i.unshift.apply(i, o.children);
      }
  }
  return a;
}, li = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Te = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || bu(t)) && !li(t) ? 0 : t.tabIndex;
}, yu = function(t, n) {
  var r = Te(t);
  return r < 0 && n && !li(t) ? 0 : r;
}, xu = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, ci = function(t) {
  return t.tagName === "INPUT";
}, wu = function(t) {
  return ci(t) && t.type === "hidden";
}, Nu = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, ju = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, _u = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Ft(t), r = function(c) {
    return n.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = r(window.CSS.escape(t.name));
  else
    try {
      a = r(t.name);
    } catch (o) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), !1;
    }
  var i = ju(a, t.form);
  return !i || i === t;
}, Ru = function(t) {
  return ci(t) && t.type === "radio";
}, Eu = function(t) {
  return Ru(t) && !_u(t);
}, Tu = function(t) {
  var n, r = t && Ft(t), a = (n = r) === null || n === void 0 ? void 0 : n.host, i = !1;
  if (r && r !== t) {
    var o, c, u;
    for (i = !!((o = a) !== null && o !== void 0 && (c = o.ownerDocument) !== null && c !== void 0 && c.contains(a) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !i && a; ) {
      var f, d, p;
      r = Ft(a), a = (f = r) === null || f === void 0 ? void 0 : f.host, i = !!((d = a) !== null && d !== void 0 && (p = d.ownerDocument) !== null && p !== void 0 && p.contains(a));
    }
  }
  return i;
}, La = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, a = n.height;
  return r === 0 && a === 0;
}, Cu = function(t, n) {
  var r = n.displayCheck, a = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var i = qe.call(t, "details>summary:first-of-type"), o = i ? t.parentElement : t;
  if (qe.call(o, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof a == "function") {
      for (var c = t; t; ) {
        var u = t.parentElement, f = Ft(t);
        if (u && !u.shadowRoot && a(u) === !0)
          return La(t);
        t.assignedSlot ? t = t.assignedSlot : !u && f !== t.ownerDocument ? t = f.host : t = u;
      }
      t = c;
    }
    if (Tu(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return La(t);
  return !1;
}, ku = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var a = n.children.item(r);
          if (a.tagName === "LEGEND")
            return qe.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Dt = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Lt(n) || wu(n) || Cu(n, t) || // For a details element with a summary, the summary element gets the focus
  Nu(n) || ku(n));
}, Yn = function(t, n) {
  return !(Eu(n) || Te(n) < 0 || !Dt(t, n));
}, Ou = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Su = function e(t) {
  var n = [], r = [];
  return t.forEach(function(a, i) {
    var o = !!a.scopeParent, c = o ? a.scopeParent : a, u = yu(c, o), f = o ? e(a.candidates) : c;
    u === 0 ? o ? n.push.apply(n, f) : n.push(c) : r.push({
      documentOrder: i,
      tabIndex: u,
      item: a,
      isScope: o,
      content: f
    });
  }), r.sort(xu).reduce(function(a, i) {
    return i.isScope ? a.push.apply(a, i.content) : a.push(i.content), a;
  }, []).concat(n);
}, Kt = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = oi([t], n.includeContainer, {
    filter: Yn.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Ou
  }) : r = ii(t, n.includeContainer, Yn.bind(null, n)), Su(r);
}, ui = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = oi([t], n.includeContainer, {
    filter: Dt.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = ii(t, n.includeContainer, Dt.bind(null, n)), r;
}, Me = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return qe.call(t, Mt) === !1 ? !1 : Yn(n, t);
}, Pu = /* @__PURE__ */ ai.concat("iframe").join(","), kt = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return qe.call(t, Pu) === !1 ? !1 : Dt(n, t);
};
const Au = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  focusable: ui,
  getTabIndex: Te,
  isFocusable: kt,
  isTabbable: Me,
  tabbable: Kt
}, Symbol.toStringTag, { value: "Module" }));
/*!
* focus-trap 7.6.5
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function Hn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Iu(e) {
  if (Array.isArray(e)) return Hn(e);
}
function Mu(e, t, n) {
  return (t = qu(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Fu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Lu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Da(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function $a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Da(Object(n), !0).forEach(function(r) {
      Mu(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Da(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Du(e) {
  return Iu(e) || Fu(e) || zu(e) || Lu();
}
function $u(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qu(e) {
  var t = $u(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function zu(e, t) {
  if (e) {
    if (typeof e == "string") return Hn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Hn(e, t) : void 0;
  }
}
var qa = {
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
}, Bu = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Wu = function(t) {
  return (t == null ? void 0 : t.key) === "Escape" || (t == null ? void 0 : t.key) === "Esc" || (t == null ? void 0 : t.keyCode) === 27;
}, it = function(t) {
  return (t == null ? void 0 : t.key) === "Tab" || (t == null ? void 0 : t.keyCode) === 9;
}, Uu = function(t) {
  return it(t) && !t.shiftKey;
}, Yu = function(t) {
  return it(t) && t.shiftKey;
}, za = function(t) {
  return setTimeout(t, 0);
}, tt = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, r) : t;
}, _t = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Hu = [], Vu = function(t, n) {
  var r = (n == null ? void 0 : n.document) || document, a = (n == null ? void 0 : n.trapStack) || Hu, i = $a({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: Uu,
    isKeyBackward: Yu
  }, n), o = {
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
  }, c, u = function(w, y, N) {
    return w && w[y] !== void 0 ? w[y] : i[N || y];
  }, f = function(w, y) {
    var N = typeof (y == null ? void 0 : y.composedPath) == "function" ? y.composedPath() : void 0;
    return o.containerGroups.findIndex(function(A) {
      var j = A.container, S = A.tabbableNodes;
      return j.contains(w) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (N == null ? void 0 : N.includes(j)) || S.find(function(F) {
        return F === w;
      });
    });
  }, d = function(w) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = y.hasFallback, A = N === void 0 ? !1 : N, j = y.params, S = j === void 0 ? [] : j, F = i[w];
    if (typeof F == "function" && (F = F.apply(void 0, Du(S))), F === !0 && (F = void 0), !F) {
      if (F === void 0 || F === !1)
        return F;
      throw new Error("`".concat(w, "` was specified but was not a node, or did not return a node"));
    }
    var m = F;
    if (typeof F == "string") {
      try {
        m = r.querySelector(F);
      } catch (_) {
        throw new Error("`".concat(w, '` appears to be an invalid selector; error="').concat(_.message, '"'));
      }
      if (!m && !A)
        throw new Error("`".concat(w, "` as selector refers to no known node"));
    }
    return m;
  }, p = function() {
    var w = d("initialFocus", {
      hasFallback: !0
    });
    if (w === !1)
      return !1;
    if (w === void 0 || w && !kt(w, i.tabbableOptions))
      if (f(r.activeElement) >= 0)
        w = r.activeElement;
      else {
        var y = o.tabbableGroups[0], N = y && y.firstTabbableNode;
        w = N || d("fallbackFocus");
      }
    else w === null && (w = d("fallbackFocus"));
    if (!w)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return w;
  }, g = function() {
    if (o.containerGroups = o.containers.map(function(w) {
      var y = Kt(w, i.tabbableOptions), N = ui(w, i.tabbableOptions), A = y.length > 0 ? y[0] : void 0, j = y.length > 0 ? y[y.length - 1] : void 0, S = N.find(function(_) {
        return Me(_);
      }), F = N.slice().reverse().find(function(_) {
        return Me(_);
      }), m = !!y.find(function(_) {
        return Te(_) > 0;
      });
      return {
        container: w,
        tabbableNodes: y,
        focusableNodes: N,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: m,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: A,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: j,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: S,
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
        nextTabbableNode: function(P) {
          var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Y = y.indexOf(P);
          return Y < 0 ? $ ? N.slice(N.indexOf(P) + 1).find(function(H) {
            return Me(H);
          }) : N.slice(0, N.indexOf(P)).reverse().find(function(H) {
            return Me(H);
          }) : y[Y + ($ ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(w) {
      return w.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !d("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(w) {
      return w.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, h = function(w) {
    var y = w.activeElement;
    if (y)
      return y.shadowRoot && y.shadowRoot.activeElement !== null ? h(y.shadowRoot) : y;
  }, b = function(w) {
    if (w !== !1 && w !== h(document)) {
      if (!w || !w.focus) {
        b(p());
        return;
      }
      w.focus({
        preventScroll: !!i.preventScroll
      }), o.mostRecentlyFocusedNode = w, Bu(w) && w.select();
    }
  }, v = function(w) {
    var y = d("setReturnFocus", {
      params: [w]
    });
    return y || (y === !1 ? !1 : w);
  }, x = function(w) {
    var y = w.target, N = w.event, A = w.isBackward, j = A === void 0 ? !1 : A;
    y = y || _t(N), g();
    var S = null;
    if (o.tabbableGroups.length > 0) {
      var F = f(y, N), m = F >= 0 ? o.containerGroups[F] : void 0;
      if (F < 0)
        j ? S = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : S = o.tabbableGroups[0].firstTabbableNode;
      else if (j) {
        var _ = o.tabbableGroups.findIndex(function(J) {
          var U = J.firstTabbableNode;
          return y === U;
        });
        if (_ < 0 && (m.container === y || kt(y, i.tabbableOptions) && !Me(y, i.tabbableOptions) && !m.nextTabbableNode(y, !1)) && (_ = F), _ >= 0) {
          var P = _ === 0 ? o.tabbableGroups.length - 1 : _ - 1, $ = o.tabbableGroups[P];
          S = Te(y) >= 0 ? $.lastTabbableNode : $.lastDomTabbableNode;
        } else it(N) || (S = m.nextTabbableNode(y, !1));
      } else {
        var Y = o.tabbableGroups.findIndex(function(J) {
          var U = J.lastTabbableNode;
          return y === U;
        });
        if (Y < 0 && (m.container === y || kt(y, i.tabbableOptions) && !Me(y, i.tabbableOptions) && !m.nextTabbableNode(y)) && (Y = F), Y >= 0) {
          var H = Y === o.tabbableGroups.length - 1 ? 0 : Y + 1, X = o.tabbableGroups[H];
          S = Te(y) >= 0 ? X.firstTabbableNode : X.firstDomTabbableNode;
        } else it(N) || (S = m.nextTabbableNode(y));
      }
    } else
      S = d("fallbackFocus");
    return S;
  }, R = function(w) {
    var y = _t(w);
    if (!(f(y, w) >= 0)) {
      if (tt(i.clickOutsideDeactivates, w)) {
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
      tt(i.allowOutsideClick, w) || w.preventDefault();
    }
  }, T = function(w) {
    var y = _t(w), N = f(y, w) >= 0;
    if (N || y instanceof Document)
      N && (o.mostRecentlyFocusedNode = y);
    else {
      w.stopImmediatePropagation();
      var A, j = !0;
      if (o.mostRecentlyFocusedNode)
        if (Te(o.mostRecentlyFocusedNode) > 0) {
          var S = f(o.mostRecentlyFocusedNode), F = o.containerGroups[S].tabbableNodes;
          if (F.length > 0) {
            var m = F.findIndex(function(_) {
              return _ === o.mostRecentlyFocusedNode;
            });
            m >= 0 && (i.isKeyForward(o.recentNavEvent) ? m + 1 < F.length && (A = F[m + 1], j = !1) : m - 1 >= 0 && (A = F[m - 1], j = !1));
          }
        } else
          o.containerGroups.some(function(_) {
            return _.tabbableNodes.some(function(P) {
              return Te(P) > 0;
            });
          }) || (j = !1);
      else
        j = !1;
      j && (A = x({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: i.isKeyBackward(o.recentNavEvent)
      })), b(A || o.mostRecentlyFocusedNode || p());
    }
    o.recentNavEvent = void 0;
  }, E = function(w) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = w;
    var N = x({
      event: w,
      isBackward: y
    });
    N && (it(w) && w.preventDefault(), b(N));
  }, O = function(w) {
    (i.isKeyForward(w) || i.isKeyBackward(w)) && E(w, i.isKeyBackward(w));
  }, C = function(w) {
    Wu(w) && tt(i.escapeDeactivates, w) !== !1 && (w.preventDefault(), c.deactivate());
  }, V = function(w) {
    var y = _t(w);
    f(y, w) >= 0 || tt(i.clickOutsideDeactivates, w) || tt(i.allowOutsideClick, w) || (w.preventDefault(), w.stopImmediatePropagation());
  }, I = function() {
    if (o.active)
      return qa.activateTrap(a, c), o.delayInitialFocusTimer = i.delayInitialFocus ? za(function() {
        b(p());
      }) : b(p()), r.addEventListener("focusin", T, !0), r.addEventListener("mousedown", R, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", R, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", V, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", O, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", C), c;
  }, M = function() {
    if (o.active)
      return r.removeEventListener("focusin", T, !0), r.removeEventListener("mousedown", R, !0), r.removeEventListener("touchstart", R, !0), r.removeEventListener("click", V, !0), r.removeEventListener("keydown", O, !0), r.removeEventListener("keydown", C), c;
  }, W = function(w) {
    var y = w.some(function(N) {
      var A = Array.from(N.removedNodes);
      return A.some(function(j) {
        return j === o.mostRecentlyFocusedNode;
      });
    });
    y && b(p());
  }, k = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(W) : void 0, q = function() {
    k && (k.disconnect(), o.active && !o.paused && o.containers.map(function(w) {
      k.observe(w, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return c = {
    get active() {
      return o.active;
    },
    get paused() {
      return o.paused;
    },
    activate: function(w) {
      if (o.active)
        return this;
      var y = u(w, "onActivate"), N = u(w, "onPostActivate"), A = u(w, "checkCanFocusTrap");
      A || g(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = h(r), y == null || y();
      var j = function() {
        A && g(), I(), q(), N == null || N();
      };
      return A ? (A(o.containers.concat()).then(j, j), this) : (j(), this);
    },
    deactivate: function(w) {
      if (!o.active)
        return this;
      var y = $a({
        onDeactivate: i.onDeactivate,
        onPostDeactivate: i.onPostDeactivate,
        checkCanReturnFocus: i.checkCanReturnFocus
      }, w);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, M(), o.active = !1, o.paused = !1, q(), qa.deactivateTrap(a, c);
      var N = u(y, "onDeactivate"), A = u(y, "onPostDeactivate"), j = u(y, "checkCanReturnFocus"), S = u(y, "returnFocus", "returnFocusOnDeactivate");
      N == null || N();
      var F = function() {
        za(function() {
          S && b(v(o.nodeFocusedBeforeActivation)), A == null || A();
        });
      };
      return S && j ? (j(v(o.nodeFocusedBeforeActivation)).then(F, F), this) : (F(), this);
    },
    pause: function(w) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, w)) : this;
    },
    unpause: function(w) {
      return o.active ? (o.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, w)) : this;
    },
    updateContainerElements: function(w) {
      var y = [].concat(w).filter(Boolean);
      return o.containers = y.map(function(N) {
        return typeof N == "string" ? r.querySelector(N) : N;
      }), o.active && g(), q(), this;
    }
  }, Object.defineProperties(c, {
    _isManuallyPaused: {
      value: function() {
        return o.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(w, y) {
        if (o.paused === w)
          return this;
        if (o.paused = w, w) {
          var N = u(y, "onPause"), A = u(y, "onPostPause");
          N == null || N(), M(), q(), A == null || A();
        } else {
          var j = u(y, "onUnpause"), S = u(y, "onPostUnpause");
          j == null || j(), g(), I(), q(), S == null || S();
        }
        return this;
      }
    }
  }), c.updateContainerElements(t), c;
};
const Gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createFocusTrap: Vu
}, Symbol.toStringTag, { value: "Module" })), Xu = /* @__PURE__ */ fs(Gu), Ku = /* @__PURE__ */ fs(Au);
var Ba;
function Ju() {
  if (Ba) return jt.exports;
  Ba = 1;
  function e(I) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(M) {
      return typeof M;
    } : function(M) {
      return M && typeof Symbol == "function" && M.constructor === Symbol && M !== Symbol.prototype ? "symbol" : typeof M;
    }, e(I);
  }
  var t, n;
  function r(I, M) {
    if (!(I instanceof M)) throw new TypeError("Cannot call a class as a function");
  }
  function a(I, M) {
    for (var W = 0; W < M.length; W++) {
      var k = M[W];
      k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(I, b(k.key), k);
    }
  }
  function i(I, M, W) {
    return M && a(I.prototype, M), Object.defineProperty(I, "prototype", { writable: !1 }), I;
  }
  function o(I, M, W) {
    return M = d(M), c(I, f() ? Reflect.construct(M, W || [], d(I).constructor) : M.apply(I, W));
  }
  function c(I, M) {
    if (M && (e(M) == "object" || typeof M == "function")) return M;
    if (M !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return u(I);
  }
  function u(I) {
    if (I === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return I;
  }
  function f() {
    try {
      var I = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (f = function() {
      return !!I;
    })();
  }
  function d(I) {
    return d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(M) {
      return M.__proto__ || Object.getPrototypeOf(M);
    }, d(I);
  }
  function p(I, M) {
    if (typeof M != "function" && M !== null) throw new TypeError("Super expression must either be null or a function");
    I.prototype = Object.create(M && M.prototype, { constructor: { value: I, writable: !0, configurable: !0 } }), Object.defineProperty(I, "prototype", { writable: !1 }), M && g(I, M);
  }
  function g(I, M) {
    return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(W, k) {
      return W.__proto__ = k, W;
    }, g(I, M);
  }
  function h(I, M, W) {
    return (M = b(M)) in I ? Object.defineProperty(I, M, { value: W, enumerable: !0, configurable: !0, writable: !0 }) : I[M] = W, I;
  }
  function b(I) {
    var M = v(I, "string");
    return e(M) == "symbol" ? M : M + "";
  }
  function v(I, M) {
    if (e(I) != "object" || !I) return I;
    var W = I[Symbol.toPrimitive];
    if (W !== void 0) {
      var k = W.call(I, M);
      if (e(k) != "object") return k;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (M === "string" ? String : Number)(I);
  }
  var x = ne, R = Xu, T = R.createFocusTrap, E = Ku, O = E.isFocusable, C = parseInt((t = (n = /^(\d+)\./.exec(x.version)) === null || n === void 0 ? void 0 : n[1]) !== null && t !== void 0 ? t : 0, 10), V = /* @__PURE__ */ function(I) {
    function M(W) {
      var k;
      r(this, M), k = o(this, M, [W]), h(k, "getNodeForOption", function(w) {
        var y, N = (y = this.internalOptions[w]) !== null && y !== void 0 ? y : this.originalOptions[w];
        if (typeof N == "function") {
          for (var A = arguments.length, j = new Array(A > 1 ? A - 1 : 0), S = 1; S < A; S++)
            j[S - 1] = arguments[S];
          N = N.apply(void 0, j);
        }
        if (N === !0 && (N = void 0), !N) {
          if (N === void 0 || N === !1)
            return N;
          throw new Error("`".concat(w, "` was specified but was not a node, or did not return a node"));
        }
        var F = N;
        if (typeof N == "string") {
          var m;
          if (F = (m = this.getDocument()) === null || m === void 0 ? void 0 : m.querySelector(N), !F)
            throw new Error("`".concat(w, "` as selector refers to no known node"));
        }
        return F;
      }), k.handleDeactivate = k.handleDeactivate.bind(k), k.handlePostDeactivate = k.handlePostDeactivate.bind(k), k.handleClickOutsideDeactivates = k.handleClickOutsideDeactivates.bind(k), k.internalOptions = {
        // We need to hijack the returnFocusOnDeactivate option,
        // because React can move focus into the element before we arrived at
        // this lifecycle hook (e.g. with autoFocus inputs). So the component
        // captures the previouslyFocusedElement in componentWillMount,
        // then (optionally) returns focus to it in componentWillUnmount.
        returnFocusOnDeactivate: !1,
        // the rest of these are also related to deactivation of the trap, and we
        //  need to use them and control them as well
        checkCanReturnFocus: null,
        onDeactivate: k.handleDeactivate,
        onPostDeactivate: k.handlePostDeactivate,
        // we need to special-case this setting as well so that we can know if we should
        //  NOT return focus if the trap gets auto-deactivated as the result of an
        //  outside click (otherwise, we'll always think we should return focus because
        //  of how we manage that flag internally here)
        clickOutsideDeactivates: k.handleClickOutsideDeactivates
      }, k.originalOptions = {
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
      var q = W.focusTrapOptions;
      for (var z in q)
        if (Object.prototype.hasOwnProperty.call(q, z)) {
          if (z === "returnFocusOnDeactivate" || z === "onDeactivate" || z === "onPostDeactivate" || z === "checkCanReturnFocus" || z === "clickOutsideDeactivates") {
            k.originalOptions[z] = q[z];
            continue;
          }
          k.internalOptions[z] = q[z];
        }
      return k.outsideClick = null, k.focusTrapElements = W.containerElements || [], k.updatePreviousElement(), k;
    }
    return p(M, I), i(M, [{
      key: "getDocument",
      value: function() {
        return this.props.focusTrapOptions.document || (typeof document < "u" ? document : void 0);
      }
    }, {
      key: "getReturnFocusNode",
      value: function() {
        var k = this.getNodeForOption("setReturnFocus", this.previouslyFocusedElement);
        return k || (k === !1 ? !1 : this.previouslyFocusedElement);
      }
      /** Update the previously focused element with the currently focused element. */
    }, {
      key: "updatePreviousElement",
      value: function() {
        var k = this.getDocument();
        k && (this.previouslyFocusedElement = k.activeElement);
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
      value: function(k) {
        var q = typeof this.originalOptions.clickOutsideDeactivates == "function" ? this.originalOptions.clickOutsideDeactivates.call(null, k) : this.originalOptions.clickOutsideDeactivates;
        return q && (this.outsideClick = {
          target: k.target,
          allowDeactivation: q
        }), q;
      }
    }, {
      key: "handleDeactivate",
      value: function() {
        this.originalOptions.onDeactivate && this.originalOptions.onDeactivate.call(null), this.deactivateTrap();
      }
    }, {
      key: "handlePostDeactivate",
      value: function() {
        var k = this, q = function() {
          var w = k.getReturnFocusNode(), y = !!// did the consumer allow it?
          (k.originalOptions.returnFocusOnDeactivate && // can we actually focus the node?
          w !== null && w !== void 0 && w.focus && // was there an outside click that allowed deactivation?
          (!k.outsideClick || // did the consumer allow deactivation when the outside node was clicked?
          k.outsideClick.allowDeactivation && // is the outside node NOT focusable (implying that it did NOT receive focus
          //  as a result of the click-through) -- in which case do NOT restore focus
          //  to `returnFocusNode` because focus should remain on the outside node
          !O(k.outsideClick.target, k.internalOptions.tabbableOptions))), N = k.internalOptions.preventScroll, A = N === void 0 ? !1 : N;
          y && w.focus({
            preventScroll: A
          }), k.originalOptions.onPostDeactivate && k.originalOptions.onPostDeactivate.call(null), k.outsideClick = null;
        };
        this.originalOptions.checkCanReturnFocus ? this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()).then(q, q) : q();
      }
    }, {
      key: "setupFocusTrap",
      value: function() {
        if (this.focusTrap)
          this.props.active && !this.focusTrap.active && (this.focusTrap.activate(), this.props.paused && this.focusTrap.pause());
        else {
          var k = this.focusTrapElements.some(Boolean);
          k && (this.focusTrap = this.props._createFocusTrap(this.focusTrapElements, this.internalOptions), this.props.active && this.focusTrap.activate(), this.props.paused && this.focusTrap.pause());
        }
      }
    }, {
      key: "componentDidMount",
      value: function() {
        this.props.active && this.setupFocusTrap();
      }
    }, {
      key: "componentDidUpdate",
      value: function(k) {
        if (this.focusTrap) {
          k.containerElements !== this.props.containerElements && this.focusTrap.updateContainerElements(this.props.containerElements);
          var q = !k.active && this.props.active, z = k.active && !this.props.active, w = !k.paused && this.props.paused, y = k.paused && !this.props.paused;
          if (q && (this.updatePreviousElement(), this.focusTrap.activate()), z) {
            this.deactivateTrap();
            return;
          }
          w && this.focusTrap.pause(), y && this.focusTrap.unpause();
        } else
          k.containerElements !== this.props.containerElements && (this.focusTrapElements = this.props.containerElements), this.props.active && (this.updatePreviousElement(), this.setupFocusTrap());
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.deactivateTrap();
      }
    }, {
      key: "render",
      value: function() {
        var k = this, q = this.props.children ? x.Children.only(this.props.children) : void 0;
        if (q) {
          if (q.type && q.type === x.Fragment)
            throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");
          var z = function(N) {
            var A = k.props.containerElements;
            q && (C >= 19 ? typeof q.props.ref == "function" ? q.props.ref(N) : q.props.ref && (q.props.ref.current = N) : typeof q.ref == "function" ? q.ref(N) : q.ref && (q.ref.current = N)), k.focusTrapElements = A || [N];
          }, w = x.cloneElement(q, {
            ref: z
          });
          return w;
        }
        return null;
      }
    }]);
  }(x.Component);
  return V.defaultProps = {
    active: !0,
    paused: !1,
    focusTrapOptions: {},
    _createFocusTrap: T
  }, jt.exports = V, jt.exports.FocusTrap = V, jt.exports;
}
var Zu = Ju();
const fi = ({
  heading: e,
  text: t,
  actionButton: n,
  onClick: r,
  className: a,
  children: i,
  media: o,
  mediaPosition: c = "left",
  mediaExdent: u = !1,
  mediaFirst: f = !1,
  mediaInset: d = !1,
  ...p
}) => {
  const h = [
    "usa-card",
    o && "usa-card--media",
    u && "usa-card--exdent",
    f && "usa-card--header-first",
    d && "usa-card--inset",
    a
  ].filter(Boolean).join(" "), b = n && r ? ne.cloneElement(n, { onClick: r }) : n, v = () => o ? /* @__PURE__ */ s.jsx("div", { className: `usa-card__media ${u ? "usa-card__media--exdent" : ""}`, children: /* @__PURE__ */ s.jsx("div", { className: "usa-card__img", children: typeof o == "string" ? /* @__PURE__ */ s.jsx("img", { src: o, alt: "" }) : o }) }) : null;
  return /* @__PURE__ */ s.jsx("div", { className: h, ...p, children: /* @__PURE__ */ s.jsxs("div", { className: "usa-card__container", children: [
    o && v(),
    e && /* @__PURE__ */ s.jsx("div", { className: "usa-card__header", children: /* @__PURE__ */ s.jsx("h4", { className: "usa-card__heading", children: e }) }),
    /* @__PURE__ */ s.jsxs("div", { className: "usa-card__body", children: [
      t && /* @__PURE__ */ s.jsx("p", { children: t }),
      i
    ] }),
    n && /* @__PURE__ */ s.jsx("div", { className: "usa-card__footer", children: b })
  ] }) });
};
fi.propTypes = {
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
const Qu = ({
  isOpen: e = !1,
  onClose: t,
  onConfirm: n,
  heading: r,
  children: a,
  confirmButton: i,
  cancelButton: o,
  size: c = "default",
  forcedAction: u = !1,
  className: f,
  ariaLabelledBy: d,
  ariaDescribedBy: p,
  ...g
}) => {
  const h = pe(null), b = pe(null);
  le(() => {
    const k = h.current;
    if (k)
      if (e)
        k.showModal(), k.classList.add("usa-modal--visible"), document.body.classList.add("usa-js-modal--active");
      else {
        k.classList.remove("usa-modal--visible");
        const q = setTimeout(() => {
          k.open && k.close(), document.body.classList.remove("usa-js-modal--active");
        }, 150);
        return () => clearTimeout(q);
      }
  }, [e]);
  const v = vt((k) => {
    k.key === "Escape" && !u && t && (k.preventDefault(), t());
  }, [u, t]), x = vt((k) => {
    k.target === h.current && !u && t && t();
  }, [u, t]), R = vt(() => {
    t && t();
  }, [t]), T = vt(() => {
    n && n();
  }, [n]), E = i && ne.cloneElement(i, {
    onClick: (k) => {
      i.props.onClick && i.props.onClick(k), T();
    },
    tabIndex: 0
    // Ensure button is focusable
  }), O = o && ne.cloneElement(o, {
    onClick: (k) => {
      o.props.onClick && o.props.onClick(k), R();
    },
    tabIndex: 0
    // Ensure button is focusable
  }), C = (E || O) && /* @__PURE__ */ s.jsxs("div", { className: "usa-button-group", children: [
    E && /* @__PURE__ */ s.jsx("div", { className: "usa-button-group__item", children: E }),
    O && /* @__PURE__ */ s.jsx("div", { className: "usa-button-group__item", children: O })
  ] }), V = [
    "usa-modal",
    c === "large" && "usa-modal--lg",
    u && "usa-modal--forced-action",
    f
  ].filter(Boolean).join(" "), W = !!(E || O) || !u;
  return /* @__PURE__ */ s.jsx(
    "dialog",
    {
      ref: h,
      className: V,
      onKeyDown: v,
      onClick: x,
      "aria-labelledby": d,
      "aria-describedby": p,
      "aria-modal": "true",
      ...g,
      children: /* @__PURE__ */ s.jsx(
        Zu.FocusTrap,
        {
          active: e,
          focusTrapOptions: {
            allowOutsideClick: !u,
            escapeDeactivates: !u,
            returnFocusOnDeactivate: !0,
            clickOutsideDeactivates: !u,
            initialFocus: () => {
              const k = b.current;
              if (!k) return !1;
              const q = k.querySelector('button:not([disabled]):not([aria-hidden="true"])');
              if (q)
                return q;
              const z = k.querySelector('[tabindex="0"], input, select, textarea, button, a[href]');
              return z || k;
            },
            setReturnFocus: (k) => k,
            fallbackFocus: () => b.current ? (b.current.setAttribute("tabindex", "0"), b.current) : !1
          },
          children: /* @__PURE__ */ s.jsxs(
            "div",
            {
              ref: b,
              className: "usa-modal__container",
              tabIndex: W ? void 0 : 0,
              children: [
                /* @__PURE__ */ s.jsxs(
                  fi,
                  {
                    heading: r,
                    actionButton: C,
                    className: "usa-modal__card",
                    children: [
                      !u && /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "usa-modal__close",
                          "aria-label": "Close this modal",
                          onClick: R,
                          tabIndex: "0",
                          children: /* @__PURE__ */ s.jsx(Q, { icon: Kc, className: "usa-icon" })
                        }
                      ),
                      a
                    ]
                  }
                ),
                !W && /* @__PURE__ */ s.jsx(
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
                    onFocus: (k) => {
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
Qu.propTypes = {
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
function ef(e, t, n, r, a, i) {
  const o = [], c = Math.max(1, Math.floor(n || 1));
  if (t <= c) {
    for (let p = 1; p <= t; p++)
      o.push({ type: "page", value: p, isCurrent: p === e });
    return o;
  }
  if (r) {
    o.push({ type: "page", value: 1, isCurrent: e === 1 });
    const p = Math.max(0, t - 2);
    let g = Math.max(0, c - 3);
    g = Math.min(g, p);
    const h = 2, b = h + g - 1;
    for (let x = h; x <= b; x++)
      x >= 2 && x <= t - 1 && o.push({ type: "page", value: x, isCurrent: x === e });
    return a && b < t - 1 && o.push({ type: "ellipsis", value: "..." }), o.push({ type: "page", value: t, isCurrent: e === t }), o;
  }
  const u = Math.max(1, c - (a ? 1 : 0));
  if (u >= t) {
    for (let p = 1; p <= t; p++)
      o.push({ type: "page", value: p, isCurrent: p === e });
    return o;
  }
  let f = Math.min(t, Math.max(e, u)), d = Math.max(1, f - u + 1);
  e > f && (f = e, d = Math.max(1, f - u + 1));
  for (let p = d; p <= f; p++)
    o.push({ type: "page", value: p, isCurrent: p === e });
  return a && f < t && o.push({ type: "ellipsis", value: "..." }), o;
}
const tf = ({
  currentPage: e,
  totalPages: t,
  onPageChange: n,
  maxVisiblePages: r = 7,
  showEllipsis: a = !0,
  ariaLabel: i = "Pagination",
  previousButtonText: o = "Back",
  nextButtonText: c = "Next",
  showFirstLast: u = !0,
  firstButtonText: f = "First",
  lastButtonText: d = "Last",
  showStatus: p = !0,
  resultsPerPage: g,
  totalResults: h,
  statusPosition: b = "before",
  showStatusText: v = !1,
  className: x,
  ...R
}) => {
  const T = typeof g == "number" && typeof h == "number" && g > 0 && h > 0, E = T ? Math.max(1, Math.ceil(h / g)) : t, O = Math.min(
    Math.max(1, Math.floor(Number(e) || 1)),
    Math.max(1, Math.floor(Number(E) || 1))
  );
  if (O < 1 || O > E || E < 1)
    return console.warn("Pagination: Invalid currentPage or totalPages"), null;
  const V = ["usa-pagination", x].filter(Boolean).join(" "), I = pe(null), M = pe(null), [W, k] = ie(r), q = O > 1, z = O < E;
  le(() => {
    const _ = I.current, P = M.current;
    if (!_ || !P) return;
    const $ = () => {
      const H = _, X = H && H.parentElement, J = X && X.parentElement, U = J && J.parentElement, K = [H, X, J, U].filter(Boolean).map((Wr) => Wr.clientWidth || Wr.getBoundingClientRect().width || 0);
      let Z = Math.max(...K, 0);
      const re = window.getComputedStyle(_), B = parseFloat(re.paddingLeft || "0") || 0, me = parseFloat(re.paddingRight || "0") || 0;
      if (Z = Math.max(0, Z - B - me), !Z || Z <= 0) return;
      const Ie = P.querySelector(".usa-pagination__arrow .usa-pagination__button"), Ze = P.querySelector(".usa-pagination__page-no .usa-pagination__button"), Dr = P.querySelector(".usa-pagination__overflow"), $r = window.getComputedStyle(P), gt = parseFloat($r.columnGap || $r.gap || "0") || 0, Vi = Ie ? Math.ceil(Ie.getBoundingClientRect().width) : 40, qr = Ze ? Math.ceil(Ze.getBoundingClientRect().width) : 36, Gi = Dr ? Math.ceil(Dr.getBoundingClientRect().width) : qr, Xi = 1, Ki = 1, Ji = u ? 1 : 0, Zi = u ? 1 : 0, zr = Xi + Ki + Ji + Zi, Qi = zr * Vi + zr * gt, eo = !(typeof window < "u" && window.matchMedia && window.matchMedia("(max-width: 480px)").matches && u), to = (a && eo ? 1 : 0) * (Gi + gt), no = Math.max(0, Z - Qi - to), Br = qr + gt, ro = Br > 0 ? Math.floor((no + gt) / Br) : r, ao = 1, so = Math.max(3, r), io = Math.max(ao, Math.min(so, ro));
      k(io);
    };
    $();
    const Y = new ResizeObserver(() => {
      window.requestAnimationFrame($);
    });
    return Y.observe(_), () => Y.disconnect();
  }, [r, u, O, E, q, z]);
  const w = (_) => {
    _ !== e && n && n(_);
  }, y = () => {
    q && w(O - 1);
  }, N = () => {
    z && w(O + 1);
  }, A = tn(() => Math.min(r, W), [r, W]), j = tn(() => {
    if (!a) {
      const H = [];
      for (let X = 1; X <= E; X++)
        H.push({ type: "page", value: X, isCurrent: X === O });
      return H;
    }
    const _ = !u, $ = !(typeof window < "u" && window.matchMedia && window.matchMedia("(max-width: 480px)").matches && u), Y = Math.max(1, A);
    return ef(
      O,
      E,
      Y,
      _,
      a && $
    );
  }, [O, E, a, A, u]), S = () => {
    O !== 1 && w(1);
  }, F = () => {
    O !== E && w(E);
  }, m = tn(() => {
    if (!p) return null;
    if (T) {
      const _ = (O - 1) * g + 1, P = Math.min(O * g, h);
      return `Showing results ${_} - ${P} of ${h}`;
    }
    return `Page ${O} of ${E}`;
  }, [p, g, h, O, E]);
  return /* @__PURE__ */ s.jsxs(
    "nav",
    {
      "aria-label": i,
      className: V,
      ref: I,
      ...R,
      children: [
        p && /* @__PURE__ */ s.jsx("div", { className: "visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: m }),
        v && m && b === "before" && /* @__PURE__ */ s.jsx("div", { className: "usa-pagination__status", children: m }),
        /* @__PURE__ */ s.jsxs("ul", { className: "usa-pagination__list", ref: M, children: [
          u && /* @__PURE__ */ s.jsx("li", { className: "usa-pagination__item usa-pagination__arrow", children: /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "usa-pagination__button usa-pagination__first-page",
              "aria-label": "First page",
              onClick: S,
              "aria-disabled": O === 1,
              disabled: O === 1,
              children: [
                /* @__PURE__ */ s.jsx(
                  Q,
                  {
                    icon: Zc,
                    className: "usa-pagination__icon usa-pagination__icon--left",
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ s.jsx("span", { className: "usa-pagination__link-text", children: f })
              ]
            }
          ) }),
          /* @__PURE__ */ s.jsx("li", { className: "usa-pagination__item usa-pagination__arrow", children: /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "usa-pagination__button usa-pagination__previous-page",
              "aria-label": "Previous page",
              onClick: y,
              "aria-disabled": !q,
              disabled: !q,
              children: [
                /* @__PURE__ */ s.jsx(
                  Q,
                  {
                    icon: Jc,
                    className: "usa-pagination__icon usa-pagination__icon--left",
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ s.jsx("span", { className: "usa-pagination__link-text", children: o })
              ]
            }
          ) }),
          j.map((_, P) => _.type === "ellipsis" ? /* @__PURE__ */ s.jsx(
            "li",
            {
              className: "usa-pagination__item usa-pagination__overflow",
              "aria-hidden": "true",
              children: /* @__PURE__ */ s.jsx("span", { className: "usa-pagination__ellipsis", "aria-hidden": "true", children: _.value })
            },
            `ellipsis-${P}`
          ) : /* @__PURE__ */ s.jsx("li", { className: "usa-pagination__item usa-pagination__page-no", children: /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: `usa-pagination__button ${_.isCurrent ? "usa-pagination__button--current" : ""}`,
              "aria-label": `${_.isCurrent ? "Current page, " : ""}Page ${_.value}`,
              "aria-current": _.isCurrent ? "page" : void 0,
              onClick: () => w(_.value),
              disabled: _.isCurrent,
              children: _.value
            }
          ) }, _.value)),
          /* @__PURE__ */ s.jsx("li", { className: "usa-pagination__item usa-pagination__arrow", children: /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "usa-pagination__button usa-pagination__next-page",
              "aria-label": "Next page",
              onClick: N,
              "aria-disabled": !z,
              disabled: !z,
              children: [
                /* @__PURE__ */ s.jsx("span", { className: "usa-pagination__link-text", children: c }),
                /* @__PURE__ */ s.jsx(
                  Q,
                  {
                    icon: Ks,
                    className: "usa-pagination__icon usa-pagination__icon--right",
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ) }),
          u && /* @__PURE__ */ s.jsx("li", { className: "usa-pagination__item usa-pagination__arrow", children: /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "usa-pagination__button usa-pagination__last-page",
              "aria-label": "Last page",
              onClick: F,
              "aria-disabled": O === E,
              disabled: O === E,
              children: [
                /* @__PURE__ */ s.jsx("span", { className: "usa-pagination__link-text", children: d }),
                /* @__PURE__ */ s.jsx(
                  Q,
                  {
                    icon: Lc,
                    className: "usa-pagination__icon usa-pagination__icon--right",
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ) })
        ] }),
        v && m && b === "after" && /* @__PURE__ */ s.jsx("div", { className: "usa-pagination__status", children: m })
      ]
    }
  );
};
tf.propTypes = {
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
  previousButtonText: l.string,
  /** 
   * Text content for the next page button.
   * Can be localized for different languages.
   * @type {string}
   * @default 'Next'
   */
  nextButtonText: l.string,
  /**
   * Whether to show fast navigation buttons to jump to first/last page.
   * @type {boolean}
   * @default true
   */
  showFirstLast: l.bool,
  /**
   * Text content for the first page button.
   * @type {string}
   * @default 'First'
   */
  firstButtonText: l.string,
  /**
   * Text content for the last page button.
   * @type {string}
   * @default 'Last'
   */
  lastButtonText: l.string,
  /**
   * Shows status text indicating current page or results range.
   * When resultsPerPage and totalResults are provided, shows "Showing results X - Y of Z".
   * Otherwise shows "Page current of total".
   * @type {boolean}
   * @default true
   */
  showStatus: l.bool,
  /**
   * Controls whether the computed status text is rendered at all.
   * Useful when you want status text available for screen readers but hidden visually via your own layout logic.
   * @type {boolean}
   * @default true
   */
  showStatusText: l.bool,
  /** Number of results per page. When used with totalResults, enables results summary status. */
  resultsPerPage: l.number,
  /** Total number of results. When used with resultsPerPage, enables results summary status. */
  totalResults: l.number,
  /** Where to render the status text relative to the controls. 'before' or 'after'. */
  statusPosition: l.oneOf(["before", "after"]),
  /** 
   * Additional CSS class names to apply to the root navigation element.
   * Will be combined with the base 'usa-pagination' class.
   * @type {string}
   */
  className: l.string
};
const vr = ({ name: e, variable: t, value: n, className: r }) => {
  const a = ["pgov-font-family-display", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: a, children: [
    /* @__PURE__ */ s.jsx("div", { className: "pgov-font-family-display-example", style: { fontFamily: n }, children: "The quick brown fox jumps over the lazy dog" }),
    /* @__PURE__ */ s.jsxs("div", { className: "pgov-font-family-display-metadata", children: [
      /* @__PURE__ */ s.jsx("div", { className: "pgov-font-family-display-name", children: e }),
      /* @__PURE__ */ s.jsx("code", { className: "pgov-font-family-display-variable", children: t }),
      /* @__PURE__ */ s.jsx("div", { className: "pgov-font-family-display-value", children: n })
    ] })
  ] });
};
vr.propTypes = {
  /** Name of the font family */
  name: l.string.isRequired,
  /** CSS variable name */
  variable: l.string.isRequired,
  /** Actual font-family value */
  value: l.string.isRequired,
  /** Additional CSS class */
  className: l.string
};
vr.defaultProps = {
  className: ""
};
const br = ({ name: e, variable: t, value: n, sizeInPx: r, className: a }) => {
  const i = ["pgov-font-size-display", a].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: i, children: [
    /* @__PURE__ */ s.jsx("div", { className: "pgov-font-size-display-example", style: { fontSize: n }, children: "Aa" }),
    /* @__PURE__ */ s.jsxs("div", { className: "pgov-font-size-display-metadata", children: [
      /* @__PURE__ */ s.jsx("div", { className: "pgov-font-size-display-name", children: e }),
      /* @__PURE__ */ s.jsx("code", { className: "pgov-font-size-display-variable", children: t }),
      /* @__PURE__ */ s.jsxs("div", { className: "pgov-font-size-display-value", children: [
        n,
        " (",
        r,
        ")"
      ] })
    ] })
  ] });
};
br.propTypes = {
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
br.defaultProps = {
  className: ""
};
const yr = ({ name: e, variable: t, value: n, className: r }) => {
  const a = ["pgov-font-weight-display", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: a, children: [
    /* @__PURE__ */ s.jsx("div", { className: "pgov-font-weight-display-example", style: { fontWeight: n }, children: "Aa" }),
    /* @__PURE__ */ s.jsxs("div", { className: "pgov-font-weight-display-metadata", children: [
      /* @__PURE__ */ s.jsx("div", { className: "pgov-font-weight-display-name", children: e }),
      /* @__PURE__ */ s.jsx("code", { className: "pgov-font-weight-display-variable", children: t }),
      /* @__PURE__ */ s.jsx("div", { className: "pgov-font-weight-display-value", children: n })
    ] })
  ] });
};
yr.propTypes = {
  /** Name of the font weight */
  name: l.string.isRequired,
  /** CSS variable name */
  variable: l.string.isRequired,
  /** Actual font-weight value */
  value: l.string.isRequired,
  /** Additional CSS class */
  className: l.string
};
yr.defaultProps = {
  className: ""
};
const xr = ({ name: e, variable: t, value: n, className: r }) => {
  const a = ["pgov-line-height-display", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: a, children: [
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "pgov-line-height-display-example",
        style: { lineHeight: n },
        children: [
          "This is an example of text with ",
          e,
          " line height.",
          /* @__PURE__ */ s.jsx("br", {}),
          "The quick brown fox jumps over the lazy dog.",
          /* @__PURE__ */ s.jsx("br", {}),
          "This shows how lines of text are spaced."
        ]
      }
    ),
    /* @__PURE__ */ s.jsxs("div", { className: "pgov-line-height-display-metadata", children: [
      /* @__PURE__ */ s.jsx("div", { className: "pgov-line-height-display-name", children: e }),
      /* @__PURE__ */ s.jsx("code", { className: "pgov-line-height-display-variable", children: t }),
      /* @__PURE__ */ s.jsx("div", { className: "pgov-line-height-display-value", children: n })
    ] })
  ] });
};
xr.propTypes = {
  /** Name of the line height */
  name: l.string.isRequired,
  /** CSS variable name */
  variable: l.string.isRequired,
  /** Actual line-height value */
  value: l.string.isRequired,
  /** Additional CSS class */
  className: l.string
};
xr.defaultProps = {
  className: ""
};
const wr = ({ name: e, variable: t, value: n, className: r }) => {
  const a = ["pgov-letter-spacing-display", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: a, children: [
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "pgov-letter-spacing-display-example",
        style: { letterSpacing: n },
        children: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
      }
    ),
    /* @__PURE__ */ s.jsxs("div", { className: "pgov-letter-spacing-display-metadata", children: [
      /* @__PURE__ */ s.jsx("div", { className: "pgov-letter-spacing-display-name", children: e }),
      /* @__PURE__ */ s.jsx("code", { className: "pgov-letter-spacing-display-variable", children: t }),
      /* @__PURE__ */ s.jsx("div", { className: "pgov-letter-spacing-display-value", children: n })
    ] })
  ] });
};
wr.propTypes = {
  /** Name of the letter spacing */
  name: l.string.isRequired,
  /** CSS variable name */
  variable: l.string.isRequired,
  /** Actual letter-spacing value */
  value: l.string.isRequired,
  /** Additional CSS class */
  className: l.string
};
wr.defaultProps = {
  className: ""
};
const Nr = ({ families: e, className: t }) => {
  const n = ["pgov-font-families", t].filter(Boolean).join(" "), r = e || di;
  return /* @__PURE__ */ s.jsx("div", { className: n, children: r.map((a, i) => /* @__PURE__ */ s.jsx(
    vr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    i
  )) });
}, di = [
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
Nr.propTypes = {
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
Nr.defaultProps = {
  families: di,
  className: ""
};
const jr = ({ sizes: e, className: t }) => {
  const n = ["pgov-font-sizes", t].filter(Boolean).join(" "), r = e || mi;
  return /* @__PURE__ */ s.jsx("div", { className: n, children: r.map((a, i) => /* @__PURE__ */ s.jsx(
    br,
    {
      name: a.name,
      variable: a.variable,
      value: a.value,
      sizeInPx: a.sizeInPx
    },
    i
  )) });
}, mi = [
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
jr.propTypes = {
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
jr.defaultProps = {
  sizes: mi,
  className: ""
};
const _r = ({ weights: e, className: t }) => {
  const n = ["pgov-font-weights", t].filter(Boolean).join(" "), r = e || pi;
  return /* @__PURE__ */ s.jsx("div", { className: n, children: r.map((a, i) => /* @__PURE__ */ s.jsx(
    yr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    i
  )) });
}, pi = [
  { name: "Thin", variable: "--theme-font-weight-thin", value: "100" },
  { name: "Light", variable: "--theme-font-weight-light", value: "300" },
  { name: "Regular", variable: "--theme-font-weight-normal", value: "400" },
  { name: "Semi Bold", variable: "--theme-font-weight-semibold", value: "600" },
  { name: "Bold", variable: "--theme-font-weight-bold", value: "700" },
  { name: "Extra Bold", variable: "--theme-font-weight-heavy", value: "800" }
];
_r.propTypes = {
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
_r.defaultProps = {
  weights: pi,
  className: ""
};
const Rr = ({ lineHeights: e, className: t }) => {
  const n = ["pgov-line-heights", t].filter(Boolean).join(" "), r = e || hi;
  return /* @__PURE__ */ s.jsx("div", { className: n, children: r.map((a, i) => /* @__PURE__ */ s.jsx(
    xr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    i
  )) });
}, hi = [
  { name: "Tight", variable: "1.1", value: "1" },
  { name: "Snug", variable: "1.25", value: "1.25" },
  { name: "Normal", variable: "1.5", value: "1.5" },
  { name: "Relaxed", variable: "1.75", value: "1.75" },
  { name: "Loose", variable: "1.7", value: "2" }
];
Rr.propTypes = {
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
Rr.defaultProps = {
  lineHeights: hi,
  className: ""
};
const Er = ({ letterSpacings: e, className: t }) => {
  const n = ["pgov-letter-spacings", t].filter(Boolean).join(" "), r = e || gi;
  return /* @__PURE__ */ s.jsx("div", { className: n, children: r.map((a, i) => /* @__PURE__ */ s.jsx(
    wr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    i
  )) });
}, gi = [
  { name: "Tighter", variable: "-0.05em", value: "-0.05em" },
  { name: "Tight", variable: "-0.01em", value: "-0.025em" },
  { name: "Normal", variable: "0", value: "0em" },
  { name: "Wide", variable: "0.025em", value: "0.025em" },
  { name: "Wider", variable: "0.05em", value: "0.05em" },
  { name: "Widest", variable: "0.1em", value: "0.1em" }
];
Er.propTypes = {
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
Er.defaultProps = {
  letterSpacings: gi,
  className: ""
};
l.string.isRequired, l.string.isRequired, l.string.isRequired;
l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired;
l.string.isRequired, l.string.isRequired, l.string.isRequired;
l.string.isRequired, l.string.isRequired, l.string.isRequired;
l.string.isRequired, l.string.isRequired, l.string.isRequired;
const vi = ({
  showFontFamilies: e,
  showFontSizes: t,
  showFontWeights: n,
  showLineHeights: r,
  showLetterSpacings: a,
  className: i
}) => {
  const o = ["pgov-typography", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: o, "data-testid": "typography-container", children: [
    /* @__PURE__ */ s.jsx("h2", { className: "pgov-typography-title", children: "Typography Tokens" }),
    /* @__PURE__ */ s.jsx("p", { className: "pgov-typography-description", children: "The PGOV design system includes a comprehensive set of typography tokens for use in the UI." }),
    e && /* @__PURE__ */ s.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ s.jsx("h3", { className: "pgov-typography-section-title", children: "Font Families" }),
      /* @__PURE__ */ s.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ s.jsx(Nr, {}) })
    ] }),
    t && /* @__PURE__ */ s.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ s.jsx("h3", { className: "pgov-typography-section-title", children: "Font Sizes" }),
      /* @__PURE__ */ s.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ s.jsx(jr, {}) })
    ] }),
    n && /* @__PURE__ */ s.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ s.jsx("h3", { className: "pgov-typography-section-title", children: "Font Weights" }),
      /* @__PURE__ */ s.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ s.jsx(_r, {}) })
    ] }),
    r && /* @__PURE__ */ s.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ s.jsx("h3", { className: "pgov-typography-section-title", children: "Line Heights" }),
      /* @__PURE__ */ s.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ s.jsx(Rr, {}) })
    ] }),
    a && /* @__PURE__ */ s.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ s.jsx("h3", { className: "pgov-typography-section-title", children: "Letter Spacing" }),
      /* @__PURE__ */ s.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ s.jsx(Er, {}) })
    ] })
  ] });
};
vi.propTypes = {
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
vi.defaultProps = {
  showFontFamilies: !0,
  showFontSizes: !0,
  showFontWeights: !0,
  showLineHeights: !0,
  showLetterSpacings: !0,
  className: ""
};
const Tr = ({
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
  }, i = a[n] || a.medium, { width: o, height: c } = i, u = {
    width: `${o}px`,
    height: `${c}px`,
    backgroundColor: e,
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  }, f = `pgov-color-swatch-preview ${r || ""}`;
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      style: u,
      className: f,
      "aria-label": `Color swatch for ${t}`
    }
  );
};
Tr.propTypes = {
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
Tr.defaultProps = {
  size: "medium",
  className: ""
};
const Cr = ({
  name: e,
  colorVar: t,
  description: n,
  hexValue: r,
  alignment: a,
  className: i
}) => {
  const [o, c] = ie("");
  le(() => {
    if (typeof window < "u" && t)
      try {
        const f = getComputedStyle(document.documentElement).getPropertyValue(t).trim();
        c(f);
      } catch (f) {
        console.error(`Error getting computed style for ${t}:`, f), c("Error");
      }
  }, [t]);
  const u = `pgov-color-swatch-details ${i || ""}`;
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: u,
      role: "group",
      "aria-label": `Details for ${e} color`,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "pgov-color-swatch-name", children: e }),
        /* @__PURE__ */ s.jsx("div", { className: "pgov-color-swatch-var", "aria-label": `CSS variable: ${t}`, children: t }),
        n && /* @__PURE__ */ s.jsx("div", { className: "pgov-color-swatch-description", "aria-label": `Description: ${n}`, children: n }),
        o && !n && /* @__PURE__ */ s.jsx("div", { className: "pgov-color-swatch-hex", "aria-label": `Computed value: ${o}`, children: o }),
        !o && r && !n && /* @__PURE__ */ s.jsxs("div", { className: "pgov-color-swatch-hex", "aria-label": `Initial Hex value: ${r}`, children: [
          r,
          " (Initial)"
        ] })
      ]
    }
  );
};
Cr.propTypes = {
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
Cr.defaultProps = {
  description: void 0,
  hexValue: void 0,
  alignment: "left",
  className: ""
};
const kr = ({
  colorVar: e,
  name: t,
  description: n,
  size: r,
  orientation: a,
  className: i
}) => {
  const o = `pgov-color-swatch-item ${i || ""}`;
  return /* @__PURE__ */ s.jsxs("div", { className: o, children: [
    /* @__PURE__ */ s.jsx(
      Tr,
      {
        colorValue: e,
        name: t,
        size: r
      }
    ),
    /* @__PURE__ */ s.jsx(
      Cr,
      {
        name: t,
        colorVar: e,
        description: n,
        alignment: "center"
      }
    )
  ] });
};
kr.propTypes = {
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
kr.defaultProps = {
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
const bi = ({
  colorVar: e,
  name: t,
  description: n,
  hexValue: r,
  size: a,
  orientation: i,
  className: o
}) => /* @__PURE__ */ s.jsx(
  kr,
  {
    colorVar: e,
    name: t,
    description: n,
    hexValue: r,
    size: a,
    orientation: i,
    className: o
  }
);
bi.propTypes = {
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
bi.defaultProps = {
  description: void 0,
  hexValue: void 0,
  size: "medium",
  orientation: "horizontal",
  className: ""
};
const yi = ({ name: e, variable: t, value: n, pixels: r }) => /* @__PURE__ */ s.jsxs("div", { style: {
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
  /* @__PURE__ */ s.jsx("div", { style: {
    width: n,
    height: "24px",
    backgroundColor: "#0050d8",
    borderRadius: "4px"
  } }),
  /* @__PURE__ */ s.jsxs("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    textAlign: "right",
    minWidth: "200px"
  }, children: [
    /* @__PURE__ */ s.jsx("div", { style: { fontWeight: "bold" }, children: e }),
    /* @__PURE__ */ s.jsx("code", { style: {
      backgroundColor: "#f5f5f5",
      padding: "4px 8px",
      borderRadius: "4px",
      fontSize: "14px"
    }, children: t }),
    /* @__PURE__ */ s.jsxs("div", { style: {
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
yi.propTypes = {
  name: l.string.isRequired,
  variable: l.string.isRequired,
  value: l.string.isRequired,
  pixels: l.string.isRequired
};
const am = () => {
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
  return /* @__PURE__ */ s.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "20px" }, children: e.map((t, n) => /* @__PURE__ */ s.jsx(
    yi,
    {
      name: t.name,
      variable: t.variable,
      value: t.value,
      pixels: t.pixels
    },
    n
  )) });
}, sm = () => /* @__PURE__ */ s.jsxs("div", { style: {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  maxWidth: "800px"
}, children: [
  /* @__PURE__ */ s.jsxs("div", { children: [
    /* @__PURE__ */ s.jsx("h3", { style: { marginBottom: "16px" }, children: "Margin Examples" }),
    /* @__PURE__ */ s.jsxs("div", { style: {
      border: "1px dashed #ddd",
      padding: "20px",
      borderRadius: "4px"
    }, children: [
      /* @__PURE__ */ s.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "16px",
        marginBottom: "var(--spacing-global-3)",
        borderRadius: "4px"
      }, children: "Element with margin-bottom: var(--spacing-global-3)" }),
      /* @__PURE__ */ s.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: "Next element" })
    ] })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { children: [
    /* @__PURE__ */ s.jsx("h3", { style: { marginBottom: "16px" }, children: "Padding Examples" }),
    /* @__PURE__ */ s.jsxs("div", { style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px"
    }, children: [
      /* @__PURE__ */ s.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "var(--spacing-global-3)",
        borderRadius: "4px",
        width: "200px"
      }, children: "Padding: var(--spacing-global-3)" }),
      /* @__PURE__ */ s.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "var(--spacing-global-105)",
        borderRadius: "4px",
        width: "200px"
      }, children: "Padding: var(--spacing-global-105)" }),
      /* @__PURE__ */ s.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "var(--spacing-global-5)",
        borderRadius: "4px",
        width: "200px"
      }, children: "Padding: var(--spacing-global-5)" })
    ] })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { children: [
    /* @__PURE__ */ s.jsx("h3", { style: { marginBottom: "16px" }, children: "Gap Examples" }),
    /* @__PURE__ */ s.jsxs("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }, children: [
      /* @__PURE__ */ s.jsxs("div", { style: {
        display: "flex",
        gap: "var(--spacing-global-3)",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: [
        /* @__PURE__ */ s.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ s.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ s.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { style: {
        display: "flex",
        gap: "var(--spacing-global-105)",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: [
        /* @__PURE__ */ s.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ s.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ s.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { style: {
        display: "flex",
        gap: "var(--spacing-global-5)",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: [
        /* @__PURE__ */ s.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ s.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ s.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" })
      ] })
    ] })
  ] })
] });
function Jt() {
  return typeof window < "u";
}
function Je(e) {
  return xi(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ue(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ne(e) {
  var t;
  return (t = (xi(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function xi(e) {
  return Jt() ? e instanceof Node || e instanceof ue(e).Node : !1;
}
function se(e) {
  return Jt() ? e instanceof Element || e instanceof ue(e).Element : !1;
}
function fe(e) {
  return Jt() ? e instanceof HTMLElement || e instanceof ue(e).HTMLElement : !1;
}
function $t(e) {
  return !Jt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ue(e).ShadowRoot;
}
const nf = /* @__PURE__ */ new Set(["inline", "contents"]);
function mt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = ge(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !nf.has(a);
}
const rf = /* @__PURE__ */ new Set(["table", "td", "th"]);
function af(e) {
  return rf.has(Je(e));
}
const sf = [":popover-open", ":modal"];
function Zt(e) {
  return sf.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const of = ["transform", "translate", "scale", "rotate", "perspective"], lf = ["transform", "translate", "scale", "rotate", "perspective", "filter"], cf = ["paint", "layout", "strict", "content"];
function Or(e) {
  const t = Sr(), n = se(e) ? ge(e) : e;
  return of.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || lf.some((r) => (n.willChange || "").includes(r)) || cf.some((r) => (n.contain || "").includes(r));
}
function uf(e) {
  let t = Ae(e);
  for (; fe(t) && !Ge(t); ) {
    if (Or(t))
      return t;
    if (Zt(t))
      return null;
    t = Ae(t);
  }
  return null;
}
function Sr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const ff = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ge(e) {
  return ff.has(Je(e));
}
function ge(e) {
  return ue(e).getComputedStyle(e);
}
function Qt(e) {
  return se(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ae(e) {
  if (Je(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    $t(e) && e.host || // Fallback.
    Ne(e)
  );
  return $t(t) ? t.host : t;
}
function wi(e) {
  const t = Ae(e);
  return Ge(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : fe(t) && mt(t) ? t : wi(t);
}
function ct(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = wi(e), i = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = ue(a);
  if (i) {
    const c = Vn(o);
    return t.concat(o, o.visualViewport || [], mt(a) ? a : [], c && n ? ct(c) : []);
  }
  return t.concat(a, ct(a, [], n));
}
function Vn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const Xe = Math.min, Le = Math.max, qt = Math.round, Rt = Math.floor, xe = (e) => ({
  x: e,
  y: e
}), df = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, mf = {
  start: "end",
  end: "start"
};
function Gn(e, t, n) {
  return Le(e, Xe(t, n));
}
function pt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ze(e) {
  return e.split("-")[0];
}
function ht(e) {
  return e.split("-")[1];
}
function Ni(e) {
  return e === "x" ? "y" : "x";
}
function Pr(e) {
  return e === "y" ? "height" : "width";
}
const pf = /* @__PURE__ */ new Set(["top", "bottom"]);
function Ce(e) {
  return pf.has(ze(e)) ? "y" : "x";
}
function Ar(e) {
  return Ni(Ce(e));
}
function hf(e, t, n) {
  n === void 0 && (n = !1);
  const r = ht(e), a = Ar(e), i = Pr(a);
  let o = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (o = zt(o)), [o, zt(o)];
}
function gf(e) {
  const t = zt(e);
  return [Xn(e), t, Xn(t)];
}
function Xn(e) {
  return e.replace(/start|end/g, (t) => mf[t]);
}
const Wa = ["left", "right"], Ua = ["right", "left"], vf = ["top", "bottom"], bf = ["bottom", "top"];
function yf(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ua : Wa : t ? Wa : Ua;
    case "left":
    case "right":
      return t ? vf : bf;
    default:
      return [];
  }
}
function xf(e, t, n, r) {
  const a = ht(e);
  let i = yf(ze(e), n === "start", r);
  return a && (i = i.map((o) => o + "-" + a), t && (i = i.concat(i.map(Xn)))), i;
}
function zt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => df[t]);
}
function wf(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ji(e) {
  return typeof e != "number" ? wf(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Bt(e) {
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
function Nf() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function jf() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function _i() {
  return /apple/i.test(navigator.vendor);
}
function _f() {
  return Nf().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function Rf() {
  return jf().includes("jsdom/");
}
const Ya = "data-floating-ui-focusable", Ef = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function Kn(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function Wt(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && $t(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function Tf(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function ke(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function Ri(e) {
  return fe(e) && e.matches(Ef);
}
function Cf(e) {
  if (!e || Rf()) return !0;
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}
function kf(e) {
  return e ? e.hasAttribute(Ya) ? e : e.querySelector("[" + Ya + "]") || e : null;
}
function ut(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
var Of = typeof document < "u", Sf = function() {
}, we = Of ? ls : Sf;
const Pf = {
  ...D
};
function Et(e) {
  const t = D.useRef(e);
  return we(() => {
    t.current = e;
  }), t;
}
const Af = Pf.useInsertionEffect, If = Af || ((e) => e());
function rt(e) {
  const t = D.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return If(() => {
    t.current = e;
  }), D.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
      r[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
const Ei = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function Ti(e, t) {
  const n = Kt(e, Ei()), r = n.length;
  if (r === 0) return;
  const a = Kn(ke(e)), i = n.indexOf(a), o = i === -1 ? t === 1 ? 0 : r - 1 : i + t;
  return n[o];
}
function Mf(e) {
  return Ti(ke(e).body, 1) || e;
}
function Ff(e) {
  return Ti(ke(e).body, -1) || e;
}
function bn(e, t) {
  const n = t || e.currentTarget, r = e.relatedTarget;
  return !r || !Wt(n, r);
}
function Lf(e) {
  Kt(e, Ei()).forEach((n) => {
    n.dataset.tabindex = n.getAttribute("tabindex") || "", n.setAttribute("tabindex", "-1");
  });
}
function Ha(e) {
  e.querySelectorAll("[data-tabindex]").forEach((n) => {
    const r = n.dataset.tabindex;
    delete n.dataset.tabindex, r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex");
  });
}
function Va(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const i = Ce(t), o = Ar(t), c = Pr(o), u = ze(t), f = i === "y", d = r.x + r.width / 2 - a.width / 2, p = r.y + r.height / 2 - a.height / 2, g = r[c] / 2 - a[c] / 2;
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
  switch (ht(t)) {
    case "start":
      h[o] -= g * (n && f ? -1 : 1);
      break;
    case "end":
      h[o] += g * (n && f ? -1 : 1);
      break;
  }
  return h;
}
const Df = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: a = "absolute",
    middleware: i = [],
    platform: o
  } = n, c = i.filter(Boolean), u = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let f = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: d,
    y: p
  } = Va(f, r, u), g = r, h = {}, b = 0;
  for (let v = 0; v < c.length; v++) {
    const {
      name: x,
      fn: R
    } = c[v], {
      x: T,
      y: E,
      data: O,
      reset: C
    } = await R({
      x: d,
      y: p,
      initialPlacement: r,
      placement: g,
      strategy: a,
      middlewareData: h,
      rects: f,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = T ?? d, p = E ?? p, h = {
      ...h,
      [x]: {
        ...h[x],
        ...O
      }
    }, C && b <= 50 && (b++, typeof C == "object" && (C.placement && (g = C.placement), C.rects && (f = C.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : C.rects), {
      x: d,
      y: p
    } = Va(f, g, u)), v = -1);
  }
  return {
    x: d,
    y: p,
    placement: g,
    strategy: a,
    middlewareData: h
  };
};
async function Ci(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: a,
    platform: i,
    rects: o,
    elements: c,
    strategy: u
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: h = 0
  } = pt(t, e), b = ji(h), x = c[g ? p === "floating" ? "reference" : "floating" : p], R = Bt(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: f,
    rootBoundary: d,
    strategy: u
  })), T = p === "floating" ? {
    x: r,
    y: a,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), O = await (i.isElement == null ? void 0 : i.isElement(E)) ? await (i.getScale == null ? void 0 : i.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Bt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: T,
    offsetParent: E,
    strategy: u
  }) : T);
  return {
    top: (R.top - C.top + b.top) / O.y,
    bottom: (C.bottom - R.bottom + b.bottom) / O.y,
    left: (R.left - C.left + b.left) / O.x,
    right: (C.right - R.right + b.right) / O.x
  };
}
const $f = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: a,
      rects: i,
      platform: o,
      elements: c,
      middlewareData: u
    } = t, {
      element: f,
      padding: d = 0
    } = pt(e, t) || {};
    if (f == null)
      return {};
    const p = ji(d), g = {
      x: n,
      y: r
    }, h = Ar(a), b = Pr(h), v = await o.getDimensions(f), x = h === "y", R = x ? "top" : "left", T = x ? "bottom" : "right", E = x ? "clientHeight" : "clientWidth", O = i.reference[b] + i.reference[h] - g[h] - i.floating[b], C = g[h] - i.reference[h], V = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(f));
    let I = V ? V[E] : 0;
    (!I || !await (o.isElement == null ? void 0 : o.isElement(V))) && (I = c.floating[E] || i.floating[b]);
    const M = O / 2 - C / 2, W = I / 2 - v[b] / 2 - 1, k = Xe(p[R], W), q = Xe(p[T], W), z = k, w = I - v[b] - q, y = I / 2 - v[b] / 2 + M, N = Gn(z, y, w), A = !u.arrow && ht(a) != null && y !== N && i.reference[b] / 2 - (y < z ? k : q) - v[b] / 2 < 0, j = A ? y < z ? y - z : y - w : 0;
    return {
      [h]: g[h] + j,
      data: {
        [h]: N,
        centerOffset: y - N - j,
        ...A && {
          alignmentOffset: j
        }
      },
      reset: A
    };
  }
}), qf = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: a,
        middlewareData: i,
        rects: o,
        initialPlacement: c,
        platform: u,
        elements: f
      } = t, {
        mainAxis: d = !0,
        crossAxis: p = !0,
        fallbackPlacements: g,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: v = !0,
        ...x
      } = pt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const R = ze(a), T = Ce(c), E = ze(c) === c, O = await (u.isRTL == null ? void 0 : u.isRTL(f.floating)), C = g || (E || !v ? [zt(c)] : gf(c)), V = b !== "none";
      !g && V && C.push(...xf(c, v, b, O));
      const I = [c, ...C], M = await Ci(t, x), W = [];
      let k = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && W.push(M[R]), p) {
        const y = hf(a, o, O);
        W.push(M[y[0]], M[y[1]]);
      }
      if (k = [...k, {
        placement: a,
        overflows: W
      }], !W.every((y) => y <= 0)) {
        var q, z;
        const y = (((q = i.flip) == null ? void 0 : q.index) || 0) + 1, N = I[y];
        if (N && (!(p === "alignment" ? T !== Ce(N) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        k.every((S) => S.overflows[0] > 0 && Ce(S.placement) === T)))
          return {
            data: {
              index: y,
              overflows: k
            },
            reset: {
              placement: N
            }
          };
        let A = (z = k.filter((j) => j.overflows[0] <= 0).sort((j, S) => j.overflows[1] - S.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!A)
          switch (h) {
            case "bestFit": {
              var w;
              const j = (w = k.filter((S) => {
                if (V) {
                  const F = Ce(S.placement);
                  return F === T || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((S) => [S.placement, S.overflows.filter((F) => F > 0).reduce((F, m) => F + m, 0)]).sort((S, F) => S[1] - F[1])[0]) == null ? void 0 : w[0];
              j && (A = j);
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
}, zf = /* @__PURE__ */ new Set(["left", "top"]);
async function Bf(e, t) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), o = ze(n), c = ht(n), u = Ce(n) === "y", f = zf.has(o) ? -1 : 1, d = i && u ? -1 : 1, p = pt(t, e);
  let {
    mainAxis: g,
    crossAxis: h,
    alignmentAxis: b
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return c && typeof b == "number" && (h = c === "end" ? b * -1 : b), u ? {
    x: h * d,
    y: g * f
  } : {
    x: g * f,
    y: h * d
  };
}
const Wf = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: a,
        y: i,
        placement: o,
        middlewareData: c
      } = t, u = await Bf(t, e);
      return o === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : {
        x: a + u.x,
        y: i + u.y,
        data: {
          ...u,
          placement: o
        }
      };
    }
  };
}, Uf = function(e) {
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
        crossAxis: o = !1,
        limiter: c = {
          fn: (x) => {
            let {
              x: R,
              y: T
            } = x;
            return {
              x: R,
              y: T
            };
          }
        },
        ...u
      } = pt(e, t), f = {
        x: n,
        y: r
      }, d = await Ci(t, u), p = Ce(ze(a)), g = Ni(p);
      let h = f[g], b = f[p];
      if (i) {
        const x = g === "y" ? "top" : "left", R = g === "y" ? "bottom" : "right", T = h + d[x], E = h - d[R];
        h = Gn(T, h, E);
      }
      if (o) {
        const x = p === "y" ? "top" : "left", R = p === "y" ? "bottom" : "right", T = b + d[x], E = b - d[R];
        b = Gn(T, b, E);
      }
      const v = c.fn({
        ...t,
        [g]: h,
        [p]: b
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [g]: i,
            [p]: o
          }
        }
      };
    }
  };
};
function ki(e) {
  const t = ge(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = fe(e), i = a ? e.offsetWidth : n, o = a ? e.offsetHeight : r, c = qt(n) !== i || qt(r) !== o;
  return c && (n = i, r = o), {
    width: n,
    height: r,
    $: c
  };
}
function Ir(e) {
  return se(e) ? e : e.contextElement;
}
function He(e) {
  const t = Ir(e);
  if (!fe(t))
    return xe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: i
  } = ki(t);
  let o = (i ? qt(n.width) : n.width) / r, c = (i ? qt(n.height) : n.height) / a;
  return (!o || !Number.isFinite(o)) && (o = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: o,
    y: c
  };
}
const Yf = /* @__PURE__ */ xe(0);
function Oi(e) {
  const t = ue(e);
  return !Sr() || !t.visualViewport ? Yf : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Hf(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ue(e) ? !1 : t;
}
function Be(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), i = Ir(e);
  let o = xe(1);
  t && (r ? se(r) && (o = He(r)) : o = He(e));
  const c = Hf(i, n, r) ? Oi(i) : xe(0);
  let u = (a.left + c.x) / o.x, f = (a.top + c.y) / o.y, d = a.width / o.x, p = a.height / o.y;
  if (i) {
    const g = ue(i), h = r && se(r) ? ue(r) : r;
    let b = g, v = Vn(b);
    for (; v && r && h !== b; ) {
      const x = He(v), R = v.getBoundingClientRect(), T = ge(v), E = R.left + (v.clientLeft + parseFloat(T.paddingLeft)) * x.x, O = R.top + (v.clientTop + parseFloat(T.paddingTop)) * x.y;
      u *= x.x, f *= x.y, d *= x.x, p *= x.y, u += E, f += O, b = ue(v), v = Vn(b);
    }
  }
  return Bt({
    width: d,
    height: p,
    x: u,
    y: f
  });
}
function Mr(e, t) {
  const n = Qt(e).scrollLeft;
  return t ? t.left + n : Be(Ne(e)).left + n;
}
function Si(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Mr(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: a,
    y: i
  };
}
function Vf(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: a
  } = e;
  const i = a === "fixed", o = Ne(r), c = t ? Zt(t.floating) : !1;
  if (r === o || c && i)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = xe(1);
  const d = xe(0), p = fe(r);
  if ((p || !p && !i) && ((Je(r) !== "body" || mt(o)) && (u = Qt(r)), fe(r))) {
    const h = Be(r);
    f = He(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const g = o && !p && !i ? Si(o, u, !0) : xe(0);
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - u.scrollLeft * f.x + d.x + g.x,
    y: n.y * f.y - u.scrollTop * f.y + d.y + g.y
  };
}
function Gf(e) {
  return Array.from(e.getClientRects());
}
function Xf(e) {
  const t = Ne(e), n = Qt(e), r = e.ownerDocument.body, a = Le(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Le(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + Mr(e);
  const c = -n.scrollTop;
  return ge(r).direction === "rtl" && (o += Le(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: i,
    x: o,
    y: c
  };
}
function Kf(e, t) {
  const n = ue(e), r = Ne(e), a = n.visualViewport;
  let i = r.clientWidth, o = r.clientHeight, c = 0, u = 0;
  if (a) {
    i = a.width, o = a.height;
    const f = Sr();
    (!f || f && t === "fixed") && (c = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: c,
    y: u
  };
}
const Jf = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Zf(e, t) {
  const n = Be(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, i = fe(e) ? He(e) : xe(1), o = e.clientWidth * i.x, c = e.clientHeight * i.y, u = a * i.x, f = r * i.y;
  return {
    width: o,
    height: c,
    x: u,
    y: f
  };
}
function Ga(e, t, n) {
  let r;
  if (t === "viewport")
    r = Kf(e, n);
  else if (t === "document")
    r = Xf(Ne(e));
  else if (se(t))
    r = Zf(t, n);
  else {
    const a = Oi(e);
    r = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return Bt(r);
}
function Pi(e, t) {
  const n = Ae(e);
  return n === t || !se(n) || Ge(n) ? !1 : ge(n).position === "fixed" || Pi(n, t);
}
function Qf(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ct(e, [], !1).filter((c) => se(c) && Je(c) !== "body"), a = null;
  const i = ge(e).position === "fixed";
  let o = i ? Ae(e) : e;
  for (; se(o) && !Ge(o); ) {
    const c = ge(o), u = Or(o);
    !u && c.position === "fixed" && (a = null), (i ? !u && !a : !u && c.position === "static" && !!a && Jf.has(a.position) || mt(o) && !u && Pi(e, o)) ? r = r.filter((d) => d !== o) : a = c, o = Ae(o);
  }
  return t.set(e, r), r;
}
function ed(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const o = [...n === "clippingAncestors" ? Zt(t) ? [] : Qf(t, this._c) : [].concat(n), r], c = o[0], u = o.reduce((f, d) => {
    const p = Ga(t, d, a);
    return f.top = Le(p.top, f.top), f.right = Xe(p.right, f.right), f.bottom = Xe(p.bottom, f.bottom), f.left = Le(p.left, f.left), f;
  }, Ga(t, c, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function td(e) {
  const {
    width: t,
    height: n
  } = ki(e);
  return {
    width: t,
    height: n
  };
}
function nd(e, t, n) {
  const r = fe(t), a = Ne(t), i = n === "fixed", o = Be(e, !0, i, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = xe(0);
  function f() {
    u.x = Mr(a);
  }
  if (r || !r && !i)
    if ((Je(t) !== "body" || mt(a)) && (c = Qt(t)), r) {
      const h = Be(t, !0, i, t);
      u.x = h.x + t.clientLeft, u.y = h.y + t.clientTop;
    } else a && f();
  i && !r && a && f();
  const d = a && !r && !i ? Si(a, c) : xe(0), p = o.left + c.scrollLeft - u.x - d.x, g = o.top + c.scrollTop - u.y - d.y;
  return {
    x: p,
    y: g,
    width: o.width,
    height: o.height
  };
}
function yn(e) {
  return ge(e).position === "static";
}
function Xa(e, t) {
  if (!fe(e) || ge(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ne(e) === n && (n = n.ownerDocument.body), n;
}
function Ai(e, t) {
  const n = ue(e);
  if (Zt(e))
    return n;
  if (!fe(e)) {
    let a = Ae(e);
    for (; a && !Ge(a); ) {
      if (se(a) && !yn(a))
        return a;
      a = Ae(a);
    }
    return n;
  }
  let r = Xa(e, t);
  for (; r && af(r) && yn(r); )
    r = Xa(r, t);
  return r && Ge(r) && yn(r) && !Or(r) ? n : r || uf(e) || n;
}
const rd = async function(e) {
  const t = this.getOffsetParent || Ai, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: nd(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function ad(e) {
  return ge(e).direction === "rtl";
}
const sd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Vf,
  getDocumentElement: Ne,
  getClippingRect: ed,
  getOffsetParent: Ai,
  getElementRects: rd,
  getClientRects: Gf,
  getDimensions: td,
  getScale: He,
  isElement: se,
  isRTL: ad
};
function Ii(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function id(e, t) {
  let n = null, r;
  const a = Ne(e);
  function i() {
    var c;
    clearTimeout(r), (c = n) == null || c.disconnect(), n = null;
  }
  function o(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), i();
    const f = e.getBoundingClientRect(), {
      left: d,
      top: p,
      width: g,
      height: h
    } = f;
    if (c || t(), !g || !h)
      return;
    const b = Rt(p), v = Rt(a.clientWidth - (d + g)), x = Rt(a.clientHeight - (p + h)), R = Rt(d), E = {
      rootMargin: -b + "px " + -v + "px " + -x + "px " + -R + "px",
      threshold: Le(0, Xe(1, u)) || 1
    };
    let O = !0;
    function C(V) {
      const I = V[0].intersectionRatio;
      if (I !== u) {
        if (!O)
          return o();
        I ? o(!1, I) : r = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      I === 1 && !Ii(f, e.getBoundingClientRect()) && o(), O = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...E,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, E);
    }
    n.observe(e);
  }
  return o(!0), i;
}
function od(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: i = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, f = Ir(e), d = a || i ? [...f ? ct(f) : [], ...ct(t)] : [];
  d.forEach((R) => {
    a && R.addEventListener("scroll", n, {
      passive: !0
    }), i && R.addEventListener("resize", n);
  });
  const p = f && c ? id(f, n) : null;
  let g = -1, h = null;
  o && (h = new ResizeObserver((R) => {
    let [T] = R;
    T && T.target === f && h && (h.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var E;
      (E = h) == null || E.observe(t);
    })), n();
  }), f && !u && h.observe(f), h.observe(t));
  let b, v = u ? Be(e) : null;
  u && x();
  function x() {
    const R = Be(e);
    v && !Ii(v, R) && n(), v = R, b = requestAnimationFrame(x);
  }
  return n(), () => {
    var R;
    d.forEach((T) => {
      a && T.removeEventListener("scroll", n), i && T.removeEventListener("resize", n);
    }), p == null || p(), (R = h) == null || R.disconnect(), h = null, u && cancelAnimationFrame(b);
  };
}
const ld = Wf, cd = Uf, ud = qf, Ka = $f, fd = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = {
    platform: sd,
    ...n
  }, i = {
    ...a.platform,
    _c: r
  };
  return Df(e, t, {
    ...a,
    platform: i
  });
};
var dd = typeof document < "u", md = function() {
}, Ot = dd ? ls : md;
function Ut(e, t) {
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
        if (!Ut(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Ut(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Mi(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ja(e, t) {
  const n = Mi(e);
  return Math.round(t * n) / n;
}
function xn(e) {
  const t = D.useRef(e);
  return Ot(() => {
    t.current = e;
  }), t;
}
function pd(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: a,
    elements: {
      reference: i,
      floating: o
    } = {},
    transform: c = !0,
    whileElementsMounted: u,
    open: f
  } = e, [d, p] = D.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, h] = D.useState(r);
  Ut(g, r) || h(r);
  const [b, v] = D.useState(null), [x, R] = D.useState(null), T = D.useCallback((S) => {
    S !== V.current && (V.current = S, v(S));
  }, []), E = D.useCallback((S) => {
    S !== I.current && (I.current = S, R(S));
  }, []), O = i || b, C = o || x, V = D.useRef(null), I = D.useRef(null), M = D.useRef(d), W = u != null, k = xn(u), q = xn(a), z = xn(f), w = D.useCallback(() => {
    if (!V.current || !I.current)
      return;
    const S = {
      placement: t,
      strategy: n,
      middleware: g
    };
    q.current && (S.platform = q.current), fd(V.current, I.current, S).then((F) => {
      const m = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: z.current !== !1
      };
      y.current && !Ut(M.current, m) && (M.current = m, cs.flushSync(() => {
        p(m);
      }));
    });
  }, [g, t, n, q, z]);
  Ot(() => {
    f === !1 && M.current.isPositioned && (M.current.isPositioned = !1, p((S) => ({
      ...S,
      isPositioned: !1
    })));
  }, [f]);
  const y = D.useRef(!1);
  Ot(() => (y.current = !0, () => {
    y.current = !1;
  }), []), Ot(() => {
    if (O && (V.current = O), C && (I.current = C), O && C) {
      if (k.current)
        return k.current(O, C, w);
      w();
    }
  }, [O, C, w, k, W]);
  const N = D.useMemo(() => ({
    reference: V,
    floating: I,
    setReference: T,
    setFloating: E
  }), [T, E]), A = D.useMemo(() => ({
    reference: O,
    floating: C
  }), [O, C]), j = D.useMemo(() => {
    const S = {
      position: n,
      left: 0,
      top: 0
    };
    if (!A.floating)
      return S;
    const F = Ja(A.floating, d.x), m = Ja(A.floating, d.y);
    return c ? {
      ...S,
      transform: "translate(" + F + "px, " + m + "px)",
      ...Mi(A.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: F,
      top: m
    };
  }, [n, c, A.floating, d.x, d.y]);
  return D.useMemo(() => ({
    ...d,
    update: w,
    refs: N,
    elements: A,
    floatingStyles: j
  }), [d, w, N, A, j]);
}
const hd = (e) => {
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
      return r && t(r) ? r.current != null ? Ka({
        element: r.current,
        padding: a
      }).fn(n) : {} : r ? Ka({
        element: r,
        padding: a
      }).fn(n) : {};
    }
  };
}, gd = (e, t) => ({
  ...ld(e),
  options: [e, t]
}), vd = (e, t) => ({
  ...cd(e),
  options: [e, t]
}), bd = (e, t) => ({
  ...ud(e),
  options: [e, t]
}), yd = (e, t) => ({
  ...hd(e),
  options: [e, t]
}), xd = "data-floating-ui-focusable", Za = "active", Qa = "selected", wd = {
  ...D
};
let es = !1, Nd = 0;
const ts = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Nd++
);
function jd() {
  const [e, t] = D.useState(() => es ? ts() : void 0);
  return we(() => {
    e == null && t(ts());
  }, []), D.useEffect(() => {
    es = !0;
  }, []), e;
}
const _d = wd.useId, Fr = _d || jd;
let Jn;
process.env.NODE_ENV !== "production" && (Jn = /* @__PURE__ */ new Set());
function Rd() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const a = "Floating UI: " + n.join(" ");
  if (!((e = Jn) != null && e.has(a))) {
    var i;
    (i = Jn) == null || i.add(a), console.error(a);
  }
}
function Ed() {
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
const Td = /* @__PURE__ */ D.createContext(null), Cd = /* @__PURE__ */ D.createContext(null), Lr = () => {
  var e;
  return ((e = D.useContext(Td)) == null ? void 0 : e.id) || null;
}, Fi = () => D.useContext(Cd);
function en(e) {
  return "data-floating-ui-" + e;
}
function ce(e) {
  e.current !== -1 && (clearTimeout(e.current), e.current = -1);
}
const ns = /* @__PURE__ */ en("safe-polygon");
function wn(e, t, n) {
  if (n && !ut(n))
    return 0;
  if (typeof e == "number")
    return e;
  if (typeof e == "function") {
    const r = e();
    return typeof r == "number" ? r : r == null ? void 0 : r[t];
  }
  return e == null ? void 0 : e[t];
}
function Nn(e) {
  return typeof e == "function" ? e() : e;
}
function kd(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: a,
    events: i,
    elements: o
  } = e, {
    enabled: c = !0,
    delay: u = 0,
    handleClose: f = null,
    mouseOnly: d = !1,
    restMs: p = 0,
    move: g = !0
  } = t, h = Fi(), b = Lr(), v = Et(f), x = Et(u), R = Et(n), T = Et(p), E = D.useRef(), O = D.useRef(-1), C = D.useRef(), V = D.useRef(-1), I = D.useRef(!0), M = D.useRef(!1), W = D.useRef(() => {
  }), k = D.useRef(!1), q = rt(() => {
    var j;
    const S = (j = a.current.openEvent) == null ? void 0 : j.type;
    return (S == null ? void 0 : S.includes("mouse")) && S !== "mousedown";
  });
  D.useEffect(() => {
    if (!c) return;
    function j(S) {
      let {
        open: F
      } = S;
      F || (ce(O), ce(V), I.current = !0, k.current = !1);
    }
    return i.on("openchange", j), () => {
      i.off("openchange", j);
    };
  }, [c, i]), D.useEffect(() => {
    if (!c || !v.current || !n) return;
    function j(F) {
      q() && r(!1, F, "hover");
    }
    const S = ke(o.floating).documentElement;
    return S.addEventListener("mouseleave", j), () => {
      S.removeEventListener("mouseleave", j);
    };
  }, [o.floating, n, r, c, v, q]);
  const z = D.useCallback(function(j, S, F) {
    S === void 0 && (S = !0), F === void 0 && (F = "hover");
    const m = wn(x.current, "close", E.current);
    m && !C.current ? (ce(O), O.current = window.setTimeout(() => r(!1, j, F), m)) : S && (ce(O), r(!1, j, F));
  }, [x, r]), w = rt(() => {
    W.current(), C.current = void 0;
  }), y = rt(() => {
    if (M.current) {
      const j = ke(o.floating).body;
      j.style.pointerEvents = "", j.removeAttribute(ns), M.current = !1;
    }
  }), N = rt(() => a.current.openEvent ? ["click", "mousedown"].includes(a.current.openEvent.type) : !1);
  D.useEffect(() => {
    if (!c) return;
    function j(P) {
      if (ce(O), I.current = !1, d && !ut(E.current) || Nn(T.current) > 0 && !wn(x.current, "open"))
        return;
      const $ = wn(x.current, "open", E.current);
      $ ? O.current = window.setTimeout(() => {
        R.current || r(!0, P, "hover");
      }, $) : n || r(!0, P, "hover");
    }
    function S(P) {
      if (N()) {
        y();
        return;
      }
      W.current();
      const $ = ke(o.floating);
      if (ce(V), k.current = !1, v.current && a.current.floatingContext) {
        n || ce(O), C.current = v.current({
          ...a.current.floatingContext,
          tree: h,
          x: P.clientX,
          y: P.clientY,
          onClose() {
            y(), w(), N() || z(P, !0, "safe-polygon");
          }
        });
        const H = C.current;
        $.addEventListener("mousemove", H), W.current = () => {
          $.removeEventListener("mousemove", H);
        };
        return;
      }
      (E.current === "touch" ? !Wt(o.floating, P.relatedTarget) : !0) && z(P);
    }
    function F(P) {
      N() || a.current.floatingContext && (v.current == null || v.current({
        ...a.current.floatingContext,
        tree: h,
        x: P.clientX,
        y: P.clientY,
        onClose() {
          y(), w(), N() || z(P);
        }
      })(P));
    }
    function m() {
      ce(O);
    }
    function _(P) {
      N() || z(P, !1);
    }
    if (se(o.domReference)) {
      const P = o.domReference, $ = o.floating;
      return n && P.addEventListener("mouseleave", F), g && P.addEventListener("mousemove", j, {
        once: !0
      }), P.addEventListener("mouseenter", j), P.addEventListener("mouseleave", S), $ && ($.addEventListener("mouseleave", F), $.addEventListener("mouseenter", m), $.addEventListener("mouseleave", _)), () => {
        n && P.removeEventListener("mouseleave", F), g && P.removeEventListener("mousemove", j), P.removeEventListener("mouseenter", j), P.removeEventListener("mouseleave", S), $ && ($.removeEventListener("mouseleave", F), $.removeEventListener("mouseenter", m), $.removeEventListener("mouseleave", _));
      };
    }
  }, [o, c, e, d, g, z, w, y, r, n, R, h, x, v, a, N, T]), we(() => {
    var j;
    if (c && n && (j = v.current) != null && (j = j.__options) != null && j.blockPointerEvents && q()) {
      M.current = !0;
      const F = o.floating;
      if (se(o.domReference) && F) {
        var S;
        const m = ke(o.floating).body;
        m.setAttribute(ns, "");
        const _ = o.domReference, P = h == null || (S = h.nodesRef.current.find(($) => $.id === b)) == null || (S = S.context) == null ? void 0 : S.elements.floating;
        return P && (P.style.pointerEvents = ""), m.style.pointerEvents = "none", _.style.pointerEvents = "auto", F.style.pointerEvents = "auto", () => {
          m.style.pointerEvents = "", _.style.pointerEvents = "", F.style.pointerEvents = "";
        };
      }
    }
  }, [c, n, b, o, h, v, q]), we(() => {
    n || (E.current = void 0, k.current = !1, w(), y());
  }, [n, w, y]), D.useEffect(() => () => {
    w(), ce(O), ce(V), y();
  }, [c, o.domReference, w, y]);
  const A = D.useMemo(() => {
    function j(S) {
      E.current = S.pointerType;
    }
    return {
      onPointerDown: j,
      onPointerEnter: j,
      onMouseMove(S) {
        const {
          nativeEvent: F
        } = S;
        function m() {
          !I.current && !R.current && r(!0, F, "hover");
        }
        d && !ut(E.current) || n || Nn(T.current) === 0 || k.current && S.movementX ** 2 + S.movementY ** 2 < 2 || (ce(V), E.current === "touch" ? m() : (k.current = !0, V.current = window.setTimeout(m, Nn(T.current))));
      }
    };
  }, [d, r, n, R, T]);
  return D.useMemo(() => c ? {
    reference: A
  } : {}, [c, A]);
}
function jn(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && $t(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function Od(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const Li = {
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
}, rs = /* @__PURE__ */ D.forwardRef(function(t, n) {
  const [r, a] = D.useState();
  we(() => {
    _i() && a("button");
  }, []);
  const i = {
    ref: n,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: r,
    "aria-hidden": r ? void 0 : !0,
    [en("focus-guard")]: "",
    style: Li
  };
  return /* @__PURE__ */ s.jsx("span", {
    ...t,
    ...i
  });
}), Di = /* @__PURE__ */ D.createContext(null), as = /* @__PURE__ */ en("portal");
function Sd(e) {
  e === void 0 && (e = {});
  const {
    id: t,
    root: n
  } = e, r = Fr(), a = Ad(), [i, o] = D.useState(null), c = D.useRef(null);
  return we(() => () => {
    i == null || i.remove(), queueMicrotask(() => {
      c.current = null;
    });
  }, [i]), we(() => {
    if (!r || c.current) return;
    const u = t ? document.getElementById(t) : null;
    if (!u) return;
    const f = document.createElement("div");
    f.id = r, f.setAttribute(as, ""), u.appendChild(f), c.current = f, o(f);
  }, [t, r]), we(() => {
    if (n === null || !r || c.current) return;
    let u = n || (a == null ? void 0 : a.portalNode);
    u && !se(u) && (u = u.current), u = u || document.body;
    let f = null;
    t && (f = document.createElement("div"), f.id = t, u.appendChild(f));
    const d = document.createElement("div");
    d.id = r, d.setAttribute(as, ""), u = f || u, u.appendChild(d), c.current = d, o(d);
  }, [t, n, r, a]), i;
}
function Pd(e) {
  const {
    children: t,
    id: n,
    root: r,
    preserveTabOrder: a = !0
  } = e, i = Sd({
    id: n,
    root: r
  }), [o, c] = D.useState(null), u = D.useRef(null), f = D.useRef(null), d = D.useRef(null), p = D.useRef(null), g = o == null ? void 0 : o.modal, h = o == null ? void 0 : o.open, b = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!o && // Guards are only for non-modal focus management.
    !o.modal && // Don't render if unmount is transitioning.
    o.open && a && !!(r || i)
  );
  return D.useEffect(() => {
    if (!i || !a || g)
      return;
    function v(x) {
      i && bn(x) && (x.type === "focusin" ? Ha : Lf)(i);
    }
    return i.addEventListener("focusin", v, !0), i.addEventListener("focusout", v, !0), () => {
      i.removeEventListener("focusin", v, !0), i.removeEventListener("focusout", v, !0);
    };
  }, [i, a, g]), D.useEffect(() => {
    i && (h || Ha(i));
  }, [h, i]), /* @__PURE__ */ s.jsxs(Di.Provider, {
    value: D.useMemo(() => ({
      preserveTabOrder: a,
      beforeOutsideRef: u,
      afterOutsideRef: f,
      beforeInsideRef: d,
      afterInsideRef: p,
      portalNode: i,
      setFocusManagerState: c
    }), [a, i]),
    children: [b && i && /* @__PURE__ */ s.jsx(rs, {
      "data-type": "outside",
      ref: u,
      onFocus: (v) => {
        if (bn(v, i)) {
          var x;
          (x = d.current) == null || x.focus();
        } else {
          const R = o ? o.domReference : null, T = Ff(R);
          T == null || T.focus();
        }
      }
    }), b && i && /* @__PURE__ */ s.jsx("span", {
      "aria-owns": i.id,
      style: Li
    }), i && /* @__PURE__ */ cs.createPortal(t, i), b && i && /* @__PURE__ */ s.jsx(rs, {
      "data-type": "outside",
      ref: f,
      onFocus: (v) => {
        if (bn(v, i)) {
          var x;
          (x = p.current) == null || x.focus();
        } else {
          const R = o ? o.domReference : null, T = Mf(R);
          T == null || T.focus(), o != null && o.closeOnFocusOut && (o == null || o.onOpenChange(!1, v.nativeEvent, "focus-out"));
        }
      }
    })]
  });
}
const Ad = () => D.useContext(Di);
function ss(e) {
  return fe(e.target) && e.target.tagName === "BUTTON";
}
function Id(e) {
  return fe(e.target) && e.target.tagName === "A";
}
function is(e) {
  return Ri(e);
}
function Md(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: a,
    elements: {
      domReference: i
    }
  } = e, {
    enabled: o = !0,
    event: c = "click",
    toggle: u = !0,
    ignoreMouse: f = !1,
    keyboardHandlers: d = !0,
    stickIfOpen: p = !0
  } = t, g = D.useRef(), h = D.useRef(!1), b = D.useMemo(() => ({
    onPointerDown(v) {
      g.current = v.pointerType;
    },
    onMouseDown(v) {
      const x = g.current;
      v.button === 0 && c !== "click" && (ut(x, !0) && f || (n && u && (!(a.current.openEvent && p) || a.current.openEvent.type === "mousedown") ? r(!1, v.nativeEvent, "click") : (v.preventDefault(), r(!0, v.nativeEvent, "click"))));
    },
    onClick(v) {
      const x = g.current;
      if (c === "mousedown" && g.current) {
        g.current = void 0;
        return;
      }
      ut(x, !0) && f || (n && u && (!(a.current.openEvent && p) || a.current.openEvent.type === "click") ? r(!1, v.nativeEvent, "click") : r(!0, v.nativeEvent, "click"));
    },
    onKeyDown(v) {
      g.current = void 0, !(v.defaultPrevented || !d || ss(v)) && (v.key === " " && !is(i) && (v.preventDefault(), h.current = !0), !Id(v) && v.key === "Enter" && r(!(n && u), v.nativeEvent, "click"));
    },
    onKeyUp(v) {
      v.defaultPrevented || !d || ss(v) || is(i) || v.key === " " && h.current && (h.current = !1, r(!(n && u), v.nativeEvent, "click"));
    }
  }), [a, i, c, f, d, r, n, p, u]);
  return D.useMemo(() => o ? {
    reference: b
  } : {}, [o, b]);
}
function Fd(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, a = Fr(), i = D.useRef({}), [o] = D.useState(() => Ed()), c = Lr() != null;
  if (process.env.NODE_ENV !== "production") {
    const h = r.reference;
    h && !se(h) && Rd("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [u, f] = D.useState(r.reference), d = rt((h, b, v) => {
    i.current.openEvent = h ? b : void 0, o.emit("openchange", {
      open: h,
      event: b,
      reason: v,
      nested: c
    }), n == null || n(h, b, v);
  }), p = D.useMemo(() => ({
    setPositionReference: f
  }), []), g = D.useMemo(() => ({
    reference: u || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [u, r.reference, r.floating]);
  return D.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: d,
    elements: g,
    events: o,
    floatingId: a,
    refs: p
  }), [t, d, g, o, a, p]);
}
function Ld(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Fd({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, a = r.elements, [i, o] = D.useState(null), [c, u] = D.useState(null), d = (a == null ? void 0 : a.domReference) || i, p = D.useRef(null), g = Fi();
  we(() => {
    d && (p.current = d);
  }, [d]);
  const h = pd({
    ...e,
    elements: {
      ...a,
      ...c && {
        reference: c
      }
    }
  }), b = D.useCallback((E) => {
    const O = se(E) ? {
      getBoundingClientRect: () => E.getBoundingClientRect(),
      getClientRects: () => E.getClientRects(),
      contextElement: E
    } : E;
    u(O), h.refs.setReference(O);
  }, [h.refs]), v = D.useCallback((E) => {
    (se(E) || E === null) && (p.current = E, o(E)), (se(h.refs.reference.current) || h.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    E !== null && !se(E)) && h.refs.setReference(E);
  }, [h.refs]), x = D.useMemo(() => ({
    ...h.refs,
    setReference: v,
    setPositionReference: b,
    domReference: p
  }), [h.refs, v, b]), R = D.useMemo(() => ({
    ...h.elements,
    domReference: d
  }), [h.elements, d]), T = D.useMemo(() => ({
    ...h,
    ...r,
    refs: x,
    elements: R,
    nodeId: t
  }), [h, x, R, t, r]);
  return we(() => {
    r.dataRef.current.floatingContext = T;
    const E = g == null ? void 0 : g.nodesRef.current.find((O) => O.id === t);
    E && (E.context = T);
  }), D.useMemo(() => ({
    ...h,
    context: T,
    refs: x,
    elements: R
  }), [h, x, R, T]);
}
function _n() {
  return _f() && _i();
}
function Dd(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    events: a,
    dataRef: i,
    elements: o
  } = e, {
    enabled: c = !0,
    visibleOnly: u = !0
  } = t, f = D.useRef(!1), d = D.useRef(-1), p = D.useRef(!0);
  D.useEffect(() => {
    if (!c) return;
    const h = ue(o.domReference);
    function b() {
      !n && fe(o.domReference) && o.domReference === Kn(ke(o.domReference)) && (f.current = !0);
    }
    function v() {
      p.current = !0;
    }
    function x() {
      p.current = !1;
    }
    return h.addEventListener("blur", b), _n() && (h.addEventListener("keydown", v, !0), h.addEventListener("pointerdown", x, !0)), () => {
      h.removeEventListener("blur", b), _n() && (h.removeEventListener("keydown", v, !0), h.removeEventListener("pointerdown", x, !0));
    };
  }, [o.domReference, n, c]), D.useEffect(() => {
    if (!c) return;
    function h(b) {
      let {
        reason: v
      } = b;
      (v === "reference-press" || v === "escape-key") && (f.current = !0);
    }
    return a.on("openchange", h), () => {
      a.off("openchange", h);
    };
  }, [a, c]), D.useEffect(() => () => {
    ce(d);
  }, []);
  const g = D.useMemo(() => ({
    onMouseLeave() {
      f.current = !1;
    },
    onFocus(h) {
      if (f.current) return;
      const b = Tf(h.nativeEvent);
      if (u && se(b)) {
        if (_n() && !h.relatedTarget) {
          if (!p.current && !Ri(b))
            return;
        } else if (!Cf(b))
          return;
      }
      r(!0, h.nativeEvent, "focus");
    },
    onBlur(h) {
      f.current = !1;
      const b = h.relatedTarget, v = h.nativeEvent, x = se(b) && b.hasAttribute(en("focus-guard")) && b.getAttribute("data-type") === "outside";
      d.current = window.setTimeout(() => {
        var R;
        const T = Kn(o.domReference ? o.domReference.ownerDocument : document);
        !b && T === o.domReference || Wt((R = i.current.floatingContext) == null ? void 0 : R.refs.floating.current, T) || Wt(o.domReference, T) || x || r(!1, v, "focus");
      });
    }
  }), [i, o.domReference, r, u]);
  return D.useMemo(() => c ? {
    reference: g
  } : {}, [c, g]);
}
function Rn(e, t, n) {
  const r = /* @__PURE__ */ new Map(), a = n === "item";
  let i = e;
  if (a && e) {
    const {
      [Za]: o,
      [Qa]: c,
      ...u
    } = e;
    i = u;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [xd]: ""
    },
    ...i,
    ...t.map((o) => {
      const c = o ? o[n] : null;
      return typeof c == "function" ? e ? c(e) : null : c;
    }).concat(e).reduce((o, c) => (c && Object.entries(c).forEach((u) => {
      let [f, d] = u;
      if (!(a && [Za, Qa].includes(f)))
        if (f.indexOf("on") === 0) {
          if (r.has(f) || r.set(f, []), typeof d == "function") {
            var p;
            (p = r.get(f)) == null || p.push(d), o[f] = function() {
              for (var g, h = arguments.length, b = new Array(h), v = 0; v < h; v++)
                b[v] = arguments[v];
              return (g = r.get(f)) == null ? void 0 : g.map((x) => x(...b)).find((x) => x !== void 0);
            };
          }
        } else
          o[f] = d;
    }), o), {})
  };
}
function $d(e) {
  e === void 0 && (e = []);
  const t = e.map((c) => c == null ? void 0 : c.reference), n = e.map((c) => c == null ? void 0 : c.floating), r = e.map((c) => c == null ? void 0 : c.item), a = D.useCallback(
    (c) => Rn(c, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = D.useCallback(
    (c) => Rn(c, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), o = D.useCallback(
    (c) => Rn(c, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return D.useMemo(() => ({
    getReferenceProps: a,
    getFloatingProps: i,
    getItemProps: o
  }), [a, i, o]);
}
const qd = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function zd(e, t) {
  var n, r;
  t === void 0 && (t = {});
  const {
    open: a,
    elements: i,
    floatingId: o
  } = e, {
    enabled: c = !0,
    role: u = "dialog"
  } = t, f = Fr(), d = ((n = i.domReference) == null ? void 0 : n.id) || f, p = D.useMemo(() => {
    var T;
    return ((T = kf(i.floating)) == null ? void 0 : T.id) || o;
  }, [i.floating, o]), g = (r = qd.get(u)) != null ? r : u, b = Lr() != null, v = D.useMemo(() => g === "tooltip" || u === "label" ? {
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
    ...g === "menu" && b && {
      role: "menuitem"
    },
    ...u === "select" && {
      "aria-autocomplete": "none"
    },
    ...u === "combobox" && {
      "aria-autocomplete": "list"
    }
  }, [g, p, b, a, d, u]), x = D.useMemo(() => {
    const T = {
      id: p,
      ...g && {
        role: g
      }
    };
    return g === "tooltip" || u === "label" ? T : {
      ...T,
      ...g === "menu" && {
        "aria-labelledby": d
      }
    };
  }, [g, p, d, u]), R = D.useCallback((T) => {
    let {
      active: E,
      selected: O
    } = T;
    const C = {
      role: "option",
      ...E && {
        id: p + "-fui-option"
      }
    };
    switch (u) {
      case "select":
        return {
          ...C,
          "aria-selected": E && O
        };
      case "combobox":
        return {
          ...C,
          "aria-selected": O
        };
    }
    return {};
  }, [p, u]);
  return D.useMemo(() => c ? {
    reference: v,
    floating: x,
    item: R
  } : {}, [c, v, x, R]);
}
function $i(e, t, n) {
  return n === void 0 && (n = !0), e.filter((a) => {
    var i;
    return a.parentId === t && (!n || ((i = a.context) == null ? void 0 : i.open));
  }).flatMap((a) => [a, ...$i(e, a.id, n)]);
}
function os(e, t) {
  const [n, r] = e;
  let a = !1;
  const i = t.length;
  for (let o = 0, c = i - 1; o < i; c = o++) {
    const [u, f] = t[o] || [0, 0], [d, p] = t[c] || [0, 0];
    f >= r != p >= r && n <= (d - u) * (r - f) / (p - f) + u && (a = !a);
  }
  return a;
}
function Bd(e, t) {
  return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height;
}
function Wd(e) {
  e === void 0 && (e = {});
  const {
    buffer: t = 0.5,
    blockPointerEvents: n = !1,
    requireIntent: r = !0
  } = e, a = {
    current: -1
  };
  let i = !1, o = null, c = null, u = performance.now();
  function f(p, g) {
    const h = performance.now(), b = h - u;
    if (o === null || c === null || b === 0)
      return o = p, c = g, u = h, null;
    const v = p - o, x = g - c, T = Math.sqrt(v * v + x * x) / b;
    return o = p, c = g, u = h, T;
  }
  const d = (p) => {
    let {
      x: g,
      y: h,
      placement: b,
      elements: v,
      onClose: x,
      nodeId: R,
      tree: T
    } = p;
    return function(O) {
      function C() {
        ce(a), x();
      }
      if (ce(a), !v.domReference || !v.floating || b == null || g == null || h == null)
        return;
      const {
        clientX: V,
        clientY: I
      } = O, M = [V, I], W = Od(O), k = O.type === "mouseleave", q = jn(v.floating, W), z = jn(v.domReference, W), w = v.domReference.getBoundingClientRect(), y = v.floating.getBoundingClientRect(), N = b.split("-")[0], A = g > y.right - y.width / 2, j = h > y.bottom - y.height / 2, S = Bd(M, w), F = y.width > w.width, m = y.height > w.height, _ = (F ? w : y).left, P = (F ? w : y).right, $ = (m ? w : y).top, Y = (m ? w : y).bottom;
      if (q && (i = !0, !k))
        return;
      if (z && (i = !1), z && !k) {
        i = !0;
        return;
      }
      if (k && se(O.relatedTarget) && jn(v.floating, O.relatedTarget) || T && $i(T.nodesRef.current, R).length)
        return;
      if (N === "top" && h >= w.bottom - 1 || N === "bottom" && h <= w.top + 1 || N === "left" && g >= w.right - 1 || N === "right" && g <= w.left + 1)
        return C();
      let H = [];
      switch (N) {
        case "top":
          H = [[_, w.top + 1], [_, y.bottom - 1], [P, y.bottom - 1], [P, w.top + 1]];
          break;
        case "bottom":
          H = [[_, y.top + 1], [_, w.bottom - 1], [P, w.bottom - 1], [P, y.top + 1]];
          break;
        case "left":
          H = [[y.right - 1, Y], [y.right - 1, $], [w.left + 1, $], [w.left + 1, Y]];
          break;
        case "right":
          H = [[w.right - 1, Y], [w.right - 1, $], [y.left + 1, $], [y.left + 1, Y]];
          break;
      }
      function X(J) {
        let [U, K] = J;
        switch (N) {
          case "top": {
            const Z = [F ? U + t / 2 : A ? U + t * 4 : U - t * 4, K + t + 1], re = [F ? U - t / 2 : A ? U + t * 4 : U - t * 4, K + t + 1], B = [[y.left, A || F ? y.bottom - t : y.top], [y.right, A ? F ? y.bottom - t : y.top : y.bottom - t]];
            return [Z, re, ...B];
          }
          case "bottom": {
            const Z = [F ? U + t / 2 : A ? U + t * 4 : U - t * 4, K - t], re = [F ? U - t / 2 : A ? U + t * 4 : U - t * 4, K - t], B = [[y.left, A || F ? y.top + t : y.bottom], [y.right, A ? F ? y.top + t : y.bottom : y.top + t]];
            return [Z, re, ...B];
          }
          case "left": {
            const Z = [U + t + 1, m ? K + t / 2 : j ? K + t * 4 : K - t * 4], re = [U + t + 1, m ? K - t / 2 : j ? K + t * 4 : K - t * 4];
            return [...[[j || m ? y.right - t : y.left, y.top], [j ? m ? y.right - t : y.left : y.right - t, y.bottom]], Z, re];
          }
          case "right": {
            const Z = [U - t, m ? K + t / 2 : j ? K + t * 4 : K - t * 4], re = [U - t, m ? K - t / 2 : j ? K + t * 4 : K - t * 4], B = [[j || m ? y.left + t : y.right, y.top], [j ? m ? y.left + t : y.right : y.left + t, y.bottom]];
            return [Z, re, ...B];
          }
        }
      }
      if (!os([V, I], H)) {
        if (i && !S)
          return C();
        if (!k && r) {
          const J = f(O.clientX, O.clientY);
          if (J !== null && J < 0.1)
            return C();
        }
        os([V, I], X([g, h])) ? !i && r && (a.current = window.setTimeout(C, 40)) : C();
      }
    };
  };
  return d.__options = {
    blockPointerEvents: n
  }, d;
}
const Ud = ({
  children: e,
  content: t,
  position: n = "top",
  theme: r = "dark",
  showArrow: a = !0,
  className: i = "",
  isPopup: o = !1,
  triggerOnClick: c = !1
}) => {
  var y, N;
  const [u, f] = ie(!1), d = pe(null), { x: p, y: g, strategy: h, refs: b, context: v, middlewareData: x, placement: R } = Ld({
    open: u,
    onOpenChange: f,
    placement: n,
    middleware: [
      gd(8),
      bd(),
      vd({ padding: 8 }),
      ...a ? [yd({ element: d })] : []
    ],
    whileElementsMounted: od
  }), T = kd(v, {
    move: !1,
    handleClose: Wd(),
    enabled: !c
  }), E = Md(v, {
    enabled: c
  }), O = Dd(v), C = zd(v, { role: "tooltip" }), { getReferenceProps: V, getFloatingProps: I } = $d([
    T,
    O,
    C,
    ...c ? [E] : []
  ]), M = (y = x.arrow) == null ? void 0 : y.x, W = (N = x.arrow) == null ? void 0 : N.y, k = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[R.split("-")[0]], q = () => {
    switch (R.split("-")[0]) {
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
  }, [z, w] = ie(!1);
  return le(() => (w(!0), () => w(!1)), []), /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    ne.cloneElement(
      e,
      {
        ref: b.setReference,
        ...V()
      }
    ),
    z && u && /* @__PURE__ */ s.jsx(Pd, { children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: b.setFloating,
        className: `tooltip__body tooltip__body--${r} ${o ? "tooltip__body--popup" : ""} ${i}`,
        style: {
          position: h,
          top: g ?? 0,
          left: p ?? 0,
          zIndex: 1e3,
          pointerEvents: o ? "auto" : "none"
        },
        ...I(),
        children: [
          t,
          a && /* @__PURE__ */ s.jsx(
            "div",
            {
              ref: d,
              className: "tooltip__arrow",
              style: {
                position: "absolute",
                left: M != null ? `${M}px` : "",
                top: W != null ? `${W}px` : "",
                [k]: "-5px",
                width: "10px",
                height: "10px",
                backgroundColor: r === "light" ? "#f0f0f0" : "#181818",
                transform: `rotate(${q()})`
              }
            }
          )
        ]
      }
    ) })
  ] });
};
Ud.propTypes = {
  children: l.node.isRequired,
  content: l.node.isRequired,
  position: l.oneOf(["top", "right", "bottom", "left"]),
  theme: l.oneOf(["dark", "light"]),
  showArrow: l.bool,
  className: l.string,
  isPopup: l.bool,
  triggerOnClick: l.bool
};
const qi = ({
  type: e = "info",
  heading: t,
  children: n,
  slim: r = !1,
  noIcon: a = !1,
  roundedCorners: i = !1,
  className: o = ""
}) => {
  const c = [
    "alert",
    `alert--${e}`,
    r && "alert--slim",
    a && "alert--no-icon",
    i && "alert--rounded-corners",
    o
  ].filter(Boolean).join(" "), u = () => {
    switch (e) {
      case "info":
        return Ia;
      case "warning":
        return eu;
      case "success":
        return $c;
      case "error":
        return Aa;
      case "emergency":
        return Aa;
      default:
        return Ia;
    }
  };
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: c,
      role: e === "error" || e === "emergency" ? "alert" : void 0,
      children: /* @__PURE__ */ s.jsxs("div", { className: "alert__body", children: [
        !a && /* @__PURE__ */ s.jsx("div", { className: "alert__icon", children: /* @__PURE__ */ s.jsx(Q, { icon: u() }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "alert__content", children: [
          t && /* @__PURE__ */ s.jsx("h4", { className: "alert__heading", children: t }),
          /* @__PURE__ */ s.jsx("div", { className: "alert__text", children: n })
        ] })
      ] })
    }
  );
};
qi.propTypes = {
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
qi.defaultProps = {
  type: "info",
  heading: void 0,
  slim: !1,
  noIcon: !1,
  className: ""
};
const Yd = ({
  name: e,
  title: t,
  description: n,
  options: r,
  selectedValues: a = [],
  onChange: i,
  tiled: o = !1,
  required: c = !1,
  errorMessage: u,
  className: f
}) => {
  const d = c && u, p = [
    "usa-fieldset",
    "checkbox-group",
    o ? "checkbox-group--tiled" : "",
    d ? "checkbox-group--error" : "",
    f
  ].filter(Boolean).join(" "), g = (h, b) => {
    let v;
    b ? v = [...a, h] : v = a.filter((x) => x !== h), i(v);
  };
  return /* @__PURE__ */ s.jsxs("fieldset", { className: p, children: [
    /* @__PURE__ */ s.jsxs("legend", { className: "usa-legend", children: [
      t,
      c && /* @__PURE__ */ s.jsx("span", { className: "checkbox-required-asterisk", children: " *" })
    ] }),
    n && /* @__PURE__ */ s.jsx("p", { className: "checkbox-description", children: n }),
    d && /* @__PURE__ */ s.jsx("p", { className: "checkbox-error-message", children: u }),
    /* @__PURE__ */ s.jsx("div", { className: "checkbox-options-wrapper", children: r.map((h) => {
      const { value: b, labelText: v, labelDescription: x, disabled: R } = h, T = a.includes(b), E = `${e}-${b}`, O = [
        "usa-checkbox",
        R ? "usa-checkbox--disabled" : ""
      ].filter(Boolean).join(" "), C = [
        "usa-checkbox__input",
        o ? "usa-checkbox__input--tile" : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ s.jsxs("div", { className: O, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            className: C,
            type: "checkbox",
            id: E,
            name: e,
            value: b,
            checked: T,
            onChange: (V) => g(b, V.target.checked),
            disabled: R
          }
        ),
        /* @__PURE__ */ s.jsxs("label", { className: "usa-checkbox__label", htmlFor: E, children: [
          v,
          x && /* @__PURE__ */ s.jsx("span", { className: "usa-checkbox__label-description", children: x })
        ] })
      ] }, b);
    }) })
  ] });
};
Yd.propTypes = {
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
const Hd = ({
  id: e,
  label: t,
  description: n,
  state: r = "default",
  size: a = "default",
  disabled: i = !1,
  value: o,
  onChange: c,
  prefixIcon: u,
  suffixContent: f,
  pattern: d,
  errorMessage: p,
  className: g,
  ...h
}) => {
  const b = i || r === "disabled", v = [
    "usa-input",
    a !== "default" ? `usa-input--${a}` : "",
    r === "error" ? "usa-input--error" : "",
    r === "success" ? "usa-input--success" : "",
    b ? "usa-input--disabled" : "",
    g
  ].filter(Boolean).join(" "), x = [
    "usa-input-wrapper",
    a !== "default" ? `usa-input-wrapper--${a}` : "",
    u ? "usa-input-wrapper--prefix" : "",
    f ? "usa-input-wrapper--suffix" : "",
    r === "error" ? "usa-input-wrapper--error" : "",
    r === "success" ? "usa-input-wrapper--success" : "",
    b ? "usa-input-wrapper--disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: "usa-text-input", children: [
    t && /* @__PURE__ */ s.jsx("label", { className: "usa-label", htmlFor: e, children: t }),
    n && /* @__PURE__ */ s.jsx("span", { className: "usa-text-input__description", children: n }),
    r === "error" && p && /* @__PURE__ */ s.jsx("span", { className: "usa-text-input__error-message", children: p }),
    /* @__PURE__ */ s.jsxs("div", { className: x, children: [
      u && /* @__PURE__ */ s.jsx("div", { className: "usa-input-prefix", children: /* @__PURE__ */ s.jsx(Q, { icon: u }) }),
      /* @__PURE__ */ s.jsx(
        "input",
        {
          id: e,
          className: v,
          disabled: b,
          value: o,
          onChange: c,
          pattern: d,
          "aria-invalid": r === "error",
          ...h
        }
      ),
      f && /* @__PURE__ */ s.jsx("div", { className: "usa-input-suffix", children: f })
    ] })
  ] });
};
Hd.propTypes = {
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
const zi = ({
  label: e,
  status: t,
  showLabel: n = !0,
  showCounter: r = !1,
  smallCounter: a = !1,
  centered: i = !1,
  number: o
}) => {
  const c = "usa-step-indicator__segment", u = `${c} ${c}--${t}`;
  return /* @__PURE__ */ s.jsxs("li", { className: u, "aria-current": t === "current" ? "true" : void 0, children: [
    r && /* @__PURE__ */ s.jsx("span", { className: "usa-step-indicator__counter", children: /* @__PURE__ */ s.jsx("span", { className: "usa-step-indicator__counter-inner", children: o }) }),
    n && /* @__PURE__ */ s.jsxs("span", { className: "usa-step-indicator__segment-label", children: [
      e,
      t === "complete" && /* @__PURE__ */ s.jsx("span", { className: "usa-sr-only", children: "completed" }),
      t === "not-complete" && /* @__PURE__ */ s.jsx("span", { className: "usa-sr-only", children: "not completed" })
    ] })
  ] });
};
zi.propTypes = {
  label: l.string.isRequired,
  status: l.oneOf(["complete", "current", "not-complete"]).isRequired,
  showLabel: l.bool,
  showCounter: l.bool,
  smallCounter: l.bool,
  centered: l.bool,
  number: l.number.isRequired
};
const Vd = ({
  steps: e,
  currentStep: t,
  title: n,
  variant: r = "default",
  showLabels: a = !0,
  showCounters: i = !1,
  centered: o = !1,
  smallCounters: c = !1,
  className: u = "",
  ...f
}) => {
  const d = "usa-step-indicator", p = a ? "" : `${d}--no-labels`, g = i ? `${d}--counters` : "", h = c ? `${d}--counters-sm` : "", b = o ? `${d}--center` : "", v = r !== "default" ? `${d}--${r}` : "", x = [
    d,
    p,
    g,
    h,
    b,
    v,
    u
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: x, variant: r, ...f, children: [
    /* @__PURE__ */ s.jsx("ol", { className: "usa-step-indicator__segments", children: e.map((R, T) => /* @__PURE__ */ s.jsx(
      zi,
      {
        label: R.label,
        status: Gd(T, t - 1),
        showLabel: a,
        showCounter: i,
        smallCounter: c,
        centered: o,
        number: T + 1
      },
      T
    )) }),
    /* @__PURE__ */ s.jsx("div", { className: "usa-step-indicator__header", children: /* @__PURE__ */ s.jsxs("h4", { className: "usa-step-indicator__heading", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "usa-step-indicator__counter-container", children: [
        /* @__PURE__ */ s.jsx("span", { className: "usa-sr-only", children: "Step" }),
        /* @__PURE__ */ s.jsx("span", { className: "usa-step-indicator__current-step", children: t }),
        /* @__PURE__ */ s.jsxs("span", { className: "usa-step-indicator__total-steps", children: [
          "of ",
          e.length
        ] })
      ] }),
      n && /* @__PURE__ */ s.jsxs("div", { className: "usa-step-indicator__title-container", children: [
        /* @__PURE__ */ s.jsx(Q, { icon: Fc, className: "usa-step-indicator__heading-icon" }),
        /* @__PURE__ */ s.jsx("span", { className: "usa-step-indicator__heading-text", children: n })
      ] })
    ] }) })
  ] });
};
function Gd(e, t) {
  return e < t ? "complete" : e === t ? "current" : "not-complete";
}
Vd.propTypes = {
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
const Xd = () => {
  if (typeof window > "u") return !1;
  const e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t = ("ontouchstart" in window || navigator.maxTouchPoints > 0) && window.matchMedia("(pointer: coarse)").matches, n = window.matchMedia("(max-width: 768px)").matches;
  return e || t && n;
}, Kd = (e, t) => {
  le(() => {
    const n = (r) => {
      !e.current || e.current.contains(r.target) || t(r);
    };
    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
      document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n);
    };
  }, [e, t]);
}, Bi = ({
  id: e,
  label: t,
  hintText: n,
  options: r,
  disabled: a,
  error: i,
  className: o,
  selectedOptionValue: c,
  onSelect: u,
  defaultOptionLabel: f = "- Select -",
  forceCustom: d = !1
  // Allow forcing custom dropdown for testing
}) => {
  const [p, g] = ie(!1);
  le(() => {
    g(d ? !1 : Xd());
  }, [d]);
  const h = () => t && /* @__PURE__ */ s.jsxs("label", { className: "usa-label", htmlFor: e, children: [
    /* @__PURE__ */ s.jsx("span", { className: he("usa-label__text", { "usa-label--error": i }), children: t }),
    n && /* @__PURE__ */ s.jsx("span", { className: "usa-hint__text", children: n }),
    i && typeof i == "string" && /* @__PURE__ */ s.jsx("span", { className: "usa-error-message", role: "alert", children: i }),
    i && typeof i != "string" && /* @__PURE__ */ s.jsx("span", { className: "usa-error-message", role: "alert", children: "This field is required." })
  ] });
  if (p)
    return /* @__PURE__ */ s.jsxs("div", { className: he("dropdown__container", o, {
      "usa-form-group": t,
      "usa-form-group--error": i
    }), children: [
      h(),
      /* @__PURE__ */ s.jsxs(
        "select",
        {
          id: e,
          className: he(
            "dropdown__native-select",
            { "dropdown__native-select--error": i }
          ),
          value: c || "",
          onChange: (j) => u(j.target.value),
          disabled: a,
          "aria-label": t,
          "aria-invalid": !!i,
          children: [
            /* @__PURE__ */ s.jsx("option", { value: "", disabled: !0, children: f }),
            r.map((j) => /* @__PURE__ */ s.jsx("option", { value: j.value, children: j.label }, j.value))
          ]
        }
      ),
      i && typeof i == "string" && !t && /* @__PURE__ */ s.jsx("span", { id: `${e}-error-message`, className: "usa-error-message", role: "alert", children: i })
    ] });
  const [b, v] = ie(!1), [x, R] = ie(null), [T, E] = ie(-1), [O, C] = ie(""), V = pe(null), I = pe(null), M = pe(null), W = `${e}-dropdown-menu`;
  Kd(I, () => v(!1)), le(() => {
    if (c && r) {
      const j = r.find((S) => S.value === c);
      R(j || null);
    } else
      R(null);
  }, [c, r]), le(() => {
    if (b) {
      const j = document.getElementById(W);
      j && j.focus();
    } else M.current && M.current.focus();
  }, [b, W]);
  const k = (j) => {
    const S = O + j.toLowerCase();
    C(S);
    const F = r.findIndex(
      (m) => m.label.toLowerCase().startsWith(S)
    );
    F !== -1 && E(F), V.current && clearTimeout(V.current), V.current = setTimeout(() => C(""), 500);
  }, q = (j, S) => {
    R(j), v(!1), E(S), u && u(j.value);
  }, z = (j) => {
    if (!b && (j.key === "ArrowDown" || j.key === "Enter" || j.key === " ")) {
      v(!0);
      const S = x ? r.findIndex((F) => F.value === x.value) : 0;
      E(S), j.preventDefault();
    } else b && (j.key === "ArrowDown" ? (E((S) => (S + 1) % r.length), j.preventDefault()) : j.key === "ArrowUp" ? (E((S) => (S - 1 + r.length) % r.length), j.preventDefault()) : j.key === "Enter" || j.key === " " ? (T >= 0 && T < r.length && q(r[T], T), j.preventDefault()) : j.key === "Escape" ? (v(!1), j.preventDefault()) : j.key === "Tab" ? v(!1) : j.key.length === 1 && /^[a-z0-9]$/i.test(j.key) && k(j.key));
  }, w = (j) => {
    j.key === "ArrowDown" ? (E((S) => (S + 1) % r.length), j.preventDefault()) : j.key === "ArrowUp" ? (E((S) => (S - 1 + r.length) % r.length), j.preventDefault()) : j.key === "Enter" || j.key === " " ? (T >= 0 && T < r.length && q(r[T], T), j.preventDefault()) : j.key === "Escape" ? (v(!1), j.preventDefault()) : j.key === "Tab" ? v(!1) : j.key.length === 1 && /^[a-z0-9]$/i.test(j.key) && k(j.key);
  };
  le(() => {
    if (b && T >= 0) {
      const j = document.getElementById(`${e}-option-${T}`);
      j && j.scrollIntoView({ block: "nearest" });
    }
  }, [b, T, e]);
  const y = he(
    "dropdown__container",
    {
      "usa-form-group": t,
      "usa-form-group--error": i
    },
    o
  ), N = he(
    "usa-input",
    {
      "usa-input--error": i,
      "usa-input--disabled": a
    },
    "dropdown__button"
  ), A = he(
    "dropdown__menu"
  );
  return /* @__PURE__ */ s.jsxs("div", { className: y, ref: I, children: [
    h(),
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        type: "button",
        id: e,
        className: N,
        onClick: () => !a && v(!b),
        onKeyDown: z,
        disabled: a,
        "aria-haspopup": "listbox",
        "aria-expanded": b,
        "aria-controls": W,
        role: "combobox",
        "aria-activedescendant": b && T >= 0 ? `${e}-option-${T}` : void 0,
        "aria-labelledby": t ? void 0 : e,
        ref: M,
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "dropdown__selected-value", children: x ? x.label : f }),
          /* @__PURE__ */ s.jsx(
            Q,
            {
              icon: Gc,
              className: he("dropdown__custom-chevron", { "dropdown__custom-chevron--open": b }),
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ s.jsx(
      "ul",
      {
        className: A,
        role: "listbox",
        id: W,
        "aria-labelledby": e,
        hidden: !b,
        onKeyDown: w,
        tabIndex: b ? 0 : -1,
        children: r.map((j, S) => /* @__PURE__ */ s.jsx(
          "li",
          {
            id: `${e}-option-${S}`,
            className: he("dropdown__item", {
              "dropdown__item--selected": x && x.value === j.value,
              "dropdown__item--active": T === S
            }),
            onClick: () => q(j, S),
            role: "option",
            "aria-selected": x && x.value === j.value,
            tabIndex: -1,
            "data-footer": j.isFooter ? "true" : void 0,
            children: j.label
          },
          j.value
        ))
      }
    ),
    i && typeof i == "string" && !t && /* @__PURE__ */ s.jsx("span", { id: `${e}-error-message`, className: "usa-error-message", role: "alert", children: i })
  ] });
};
Bi.propTypes = {
  /** Unique identifier for the dropdown (required) */
  id: l.string.isRequired,
  /** Label text for the dropdown */
  label: l.string,
  /** Helper text displayed below the label */
  hintText: l.string,
  /** Array of options to display (required) */
  options: l.arrayOf(
    l.shape({
      value: l.string.isRequired,
      label: l.string.isRequired
    })
  ).isRequired,
  /** Whether the dropdown is disabled */
  disabled: l.bool,
  /** Error state or error message */
  error: l.oneOfType([l.bool, l.string]),
  /** Additional CSS classes */
  className: l.string,
  /** Currently selected option value */
  selectedOptionValue: l.string,
  /** Callback function when an option is selected */
  onSelect: l.func,
  /** Text for the default/placeholder option */
  defaultOptionLabel: l.string,
  /** Force custom dropdown implementation (for testing) */
  forceCustom: l.bool
};
Bi.defaultProps = {
  label: null,
  disabled: !1,
  error: !1,
  className: "",
  selectedOptionValue: null,
  onSelect: () => {
  },
  defaultOptionLabel: "- Select -",
  forceCustom: !1
};
const Wi = ({
  children: e,
  bordered: t = !0,
  striped: n = !1,
  scrollable: r = !1,
  stickyHeader: a = !1,
  stacked: i = !1,
  className: o = "",
  sortConfig: c = null,
  onSort: u = null,
  ...f
}) => {
  const [d, p] = ie(!1), [g, h] = ie([]);
  le(() => {
    const R = () => {
      const T = i || window.innerWidth < 640;
      p(T);
    };
    return R(), window.addEventListener("resize", R), () => window.removeEventListener("resize", R);
  }, [i]);
  const b = "usa-table", v = [
    b,
    !t && `${b}--borderless`,
    n && `${b}--striped`,
    a && `${b}--sticky-header`,
    d && `${b}--stacked`,
    o
  ].filter(Boolean).join(" "), x = /* @__PURE__ */ s.jsx(
    "table",
    {
      className: v,
      role: "table",
      ...f,
      children: ne.Children.map(e, (R) => {
        var T, E, O, C;
        return ne.isValidElement(R) ? ((T = R.type) == null ? void 0 : T.displayName) === "TableHeader" || ((E = R.props) == null ? void 0 : E.role) === "rowgroup" ? ne.cloneElement(R, {
          sortConfig: c,
          onSort: u,
          isStackedView: d,
          onHeadersExtracted: h
        }) : ((O = R.type) == null ? void 0 : O.displayName) === "TableBody" || ((C = R.props) == null ? void 0 : C.role) === "rowgroup" ? ne.cloneElement(R, {
          isStackedView: d,
          headers: g
        }) : R : R;
      })
    }
  );
  return r && !d ? /* @__PURE__ */ s.jsx("div", { className: `${b}--scrollable`, tabIndex: "0", role: "region", "aria-label": "Scrollable table", children: x }) : x;
};
Wi.propTypes = {
  /** Table content including TableCaption, TableHeader, and TableBody components */
  children: l.node.isRequired,
  /** Whether to display table borders */
  bordered: l.bool,
  /** Whether to display alternating row colors for better readability */
  striped: l.bool,
  /** Whether the table should be horizontally scrollable on smaller screens */
  scrollable: l.bool,
  /** Whether the table header should stick to the top when scrolling vertically */
  stickyHeader: l.bool,
  /** Whether to force stacked layout (automatically enabled on mobile devices) */
  stacked: l.bool,
  /** Additional CSS classes to apply to the table */
  className: l.string,
  /** Configuration object for table sorting */
  sortConfig: l.shape({
    column: l.string,
    direction: l.oneOf(["asc", "desc"])
  }),
  /** Callback function called when a sortable column header is clicked */
  onSort: l.func
};
Wi.defaultProps = {
  bordered: !0,
  striped: !1,
  scrollable: !1,
  stickyHeader: !1,
  stacked: !1,
  className: "",
  sortConfig: null,
  onSort: null
};
const Ui = ({
  children: e,
  sortConfig: t,
  onSort: n,
  isStackedView: r,
  onHeadersExtracted: a,
  ...i
}) => (le(() => {
  if (r && a) {
    const o = [];
    ne.Children.forEach(e, (c) => {
      ne.isValidElement(c) && ne.Children.forEach(c.props.children, (u) => {
        ne.isValidElement(u) && o.push(u.props.children);
      });
    }), a(o);
  }
}, [e, r, a]), r ? null : /* @__PURE__ */ s.jsx("thead", { ...i, children: ne.Children.map(e, (o) => ne.isValidElement(o) ? ne.cloneElement(o, {
  sortConfig: t,
  onSort: n
}) : o) }));
Ui.displayName = "TableHeader";
Ui.propTypes = {
  children: l.node.isRequired,
  sortConfig: l.shape({
    column: l.string,
    direction: l.oneOf(["asc", "desc"])
  }),
  onSort: l.func,
  isStackedView: l.bool,
  onHeadersExtracted: l.func
};
const Yi = ({ direction: e, className: t = "" }) => {
  const n = /* @__PURE__ */ s.jsxs(
    "svg",
    {
      className: t,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ s.jsx(
          "path",
          {
            d: "M7 10l5 5 5-5H7z",
            fill: "currentColor",
            opacity: !e || e === "asc" ? 0.3 : 1
          }
        ),
        /* @__PURE__ */ s.jsx(
          "path",
          {
            d: "M7 14l5-5 5 5H7z",
            fill: "currentColor",
            opacity: !e || e === "desc" ? 0.3 : 1
          }
        )
      ]
    }
  ), r = /* @__PURE__ */ s.jsx(
    "svg",
    {
      className: t,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M7 10l5 5 5-5H7z",
          fill: "currentColor"
        }
      )
    }
  ), a = /* @__PURE__ */ s.jsx(
    "svg",
    {
      className: t,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: /* @__PURE__ */ s.jsx(
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
Yi.propTypes = {
  direction: l.oneOf(["asc", "desc", null]),
  className: l.string
};
const Jd = ({
  children: e,
  sortKey: t,
  sortConfig: n,
  onSort: r,
  scope: a = "col",
  className: i = "",
  ...o
}) => {
  const c = t && r, u = c && (n == null ? void 0 : n.column) === t, f = u ? n == null ? void 0 : n.direction : null, d = () => {
    c && r(t, u && f === "asc" ? "desc" : "asc");
  }, p = (b) => {
    c && (b.key === "Enter" || b.key === " ") && (b.preventDefault(), d());
  }, g = [
    "usa-table__header-cell",
    u && "usa-table__header-cell--sorted",
    i
  ].filter(Boolean).join(" "), h = u ? f === "asc" ? "ascending" : "descending" : null;
  return /* @__PURE__ */ s.jsx(
    "th",
    {
      scope: a,
      className: g,
      onClick: c ? d : void 0,
      onKeyDown: c ? p : void 0,
      tabIndex: c ? 0 : void 0,
      role: c ? "columnheader button" : "columnheader",
      "aria-sort": h,
      "aria-label": c ? `${e}, activate to sort column` : void 0,
      ...o,
      children: /* @__PURE__ */ s.jsxs("div", { className: "usa-table__header-cell-content", children: [
        e,
        c && /* @__PURE__ */ s.jsx(
          Yi,
          {
            direction: f,
            className: "usa-table__sort-icon"
          }
        )
      ] })
    }
  );
};
Jd.propTypes = {
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
const Hi = ({
  children: e,
  isStackedView: t,
  headers: n = [],
  ...r
}) => /* @__PURE__ */ s.jsx("tbody", { ...r, children: ne.Children.map(e, (a, i) => ne.isValidElement(a) ? ne.cloneElement(a, {
  isStackedView: t,
  headers: n,
  rowIndex: i
}) : a) });
Hi.displayName = "TableBody";
Hi.propTypes = {
  children: l.node.isRequired,
  isStackedView: l.bool,
  headers: l.arrayOf(l.string)
};
const Zd = ({
  children: e,
  isStackedView: t,
  headers: n = [],
  rowIndex: r,
  sortConfig: a,
  onSort: i,
  ...o
}) => t ? /* @__PURE__ */ s.jsx("tr", { className: "usa-table__row--stacked", ...o, children: /* @__PURE__ */ s.jsx("td", { className: "usa-table__cell--stacked", children: ne.Children.map(e, (c, u) => {
  if (!ne.isValidElement(c)) return c;
  const f = n[u] || "";
  return /* @__PURE__ */ s.jsxs("div", { className: "usa-table__cell-group--stacked", children: [
    f && /* @__PURE__ */ s.jsx("div", { className: "usa-table__header--stacked", children: f }),
    /* @__PURE__ */ s.jsx("div", { className: "usa-table__cell-content--stacked", children: c.props.children })
  ] }, u);
}) }) }) : /* @__PURE__ */ s.jsx("tr", { ...o, children: ne.Children.map(e, (c) => {
  var u;
  return ne.isValidElement(c) && ((u = c.type) == null ? void 0 : u.name) === "TableHeaderCell" ? ne.cloneElement(c, {
    sortConfig: a,
    onSort: i
  }) : c;
}) });
Zd.propTypes = {
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
const Qd = ({
  children: e,
  className: t = "",
  header: n = !1,
  scope: r = "row",
  ...a
}) => {
  const i = [
    "usa-table__cell",
    t
  ].filter(Boolean).join(" ");
  return n ? /* @__PURE__ */ s.jsx(
    "th",
    {
      scope: r,
      className: i,
      ...a,
      children: e
    }
  ) : /* @__PURE__ */ s.jsx(
    "td",
    {
      className: i,
      ...a,
      children: e
    }
  );
};
Qd.propTypes = {
  children: l.node,
  className: l.string,
  header: l.bool,
  scope: l.string
};
const em = ({
  children: e,
  className: t = "",
  ...n
}) => {
  const r = [
    "usa-table__caption",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsx(
    "caption",
    {
      className: r,
      ...n,
      children: e
    }
  );
};
em.propTypes = {
  children: l.node.isRequired,
  className: l.string
};
export {
  qi as Alert,
  ur as Banner,
  gr as Breadcrumbs,
  It as Button,
  Yd as Checkbox,
  bi as ColorSwatch,
  hu as Contacts,
  Bi as Dropdown,
  Fa as ExternalLinkIcon,
  hr as Footer,
  vu as HeroGlobal,
  gu as HeroHomepage,
  ri as Identifier,
  iu as LanguageSelector,
  Qu as Modal,
  mr as PGOVHeader,
  Zs as PageTemplate,
  tf as Pagination,
  lu as ProcessSteps,
  uu as Search,
  ei as SideNav,
  pr as SkipNav,
  yi as SpacingDisplay,
  sm as SpacingExamples,
  am as SpacingTokens,
  Vd as StepIndicator,
  ou as SummaryBox,
  Wi as Table,
  Hi as TableBody,
  em as TableCaption,
  Qd as TableCell,
  Ui as TableHeader,
  Jd as TableHeaderCell,
  Zd as TableRow,
  cu as Tag,
  Hd as TextInput,
  Ud as Tooltip,
  vi as Typography
};
//# sourceMappingURL=portland-component-library.js.map
