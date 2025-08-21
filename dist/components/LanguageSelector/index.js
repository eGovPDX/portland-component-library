import It, { useState as je, useRef as Me, useEffect as dt } from "react";
function Ln(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fe = { exports: {} }, we = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ht;
function Ar() {
  if (Ht) return we;
  Ht = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, o) {
    var s = null;
    if (o !== void 0 && (s = "" + o), a.key !== void 0 && (s = "" + a.key), "key" in a) {
      o = {};
      for (var l in a)
        l !== "key" && (o[l] = a[l]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return we.Fragment = t, we.jsx = n, we.jsxs = n, we;
}
var Se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xt;
function wr() {
  return Xt || (Xt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(i) {
      if (i == null) return null;
      if (typeof i == "function")
        return i.$$typeof === oe ? null : i.displayName || i.name || null;
      if (typeof i == "string") return i;
      switch (i) {
        case O:
          return "Fragment";
        case P:
          return "Profiler";
        case w:
          return "StrictMode";
        case p:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof i == "object")
        switch (typeof i.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), i.$$typeof) {
          case I:
            return "Portal";
          case N:
            return (i.displayName || "Context") + ".Provider";
          case F:
            return (i._context.displayName || "Context") + ".Consumer";
          case D:
            var f = i.render;
            return i = i.displayName, i || (i = f.displayName || f.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
          case H:
            return f = i.displayName || null, f !== null ? f : e(i.type) || "Memo";
          case J:
            f = i._payload, i = i._init;
            try {
              return e(i(f));
            } catch {
            }
        }
      return null;
    }
    function t(i) {
      return "" + i;
    }
    function n(i) {
      try {
        t(i);
        var f = !1;
      } catch {
        f = !0;
      }
      if (f) {
        f = console;
        var x = f.error, A = typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return x.call(
          f,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          A
        ), t(i);
      }
    }
    function r(i) {
      if (i === O) return "<>";
      if (typeof i == "object" && i !== null && i.$$typeof === J)
        return "<...>";
      try {
        var f = e(i);
        return f ? "<" + f + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var i = X.A;
      return i === null ? null : i.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(i) {
      if (ce.call(i, "key")) {
        var f = Object.getOwnPropertyDescriptor(i, "key").get;
        if (f && f.isReactWarning) return !1;
      }
      return i.key !== void 0;
    }
    function l(i, f) {
      function x() {
        y || (y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          f
        ));
      }
      x.isReactWarning = !0, Object.defineProperty(i, "key", {
        get: x,
        configurable: !0
      });
    }
    function u() {
      var i = e(this.type);
      return L[i] || (L[i] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), i = this.props.ref, i !== void 0 ? i : null;
    }
    function c(i, f, x, A, S, k, C, R) {
      return x = k.ref, i = {
        $$typeof: _,
        type: i,
        key: f,
        props: k,
        _owner: S
      }, (x !== void 0 ? x : null) !== null ? Object.defineProperty(i, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(i, "ref", { enumerable: !1, value: null }), i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(i, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(i, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.defineProperty(i, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    }
    function m(i, f, x, A, S, k, C, R) {
      var T = f.children;
      if (T !== void 0)
        if (A)
          if (Q(T)) {
            for (A = 0; A < T.length; A++)
              b(T[A]);
            Object.freeze && Object.freeze(T);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(T);
      if (ce.call(f, "key")) {
        T = e(i);
        var j = Object.keys(f).filter(function(q) {
          return q !== "key";
        });
        A = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", be[T + A] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          A,
          T,
          j,
          T
        ), be[T + A] = !0);
      }
      if (T = null, x !== void 0 && (n(x), T = "" + x), s(f) && (n(f.key), T = "" + f.key), "key" in f) {
        x = {};
        for (var M in f)
          M !== "key" && (x[M] = f[M]);
      } else x = f;
      return T && l(
        x,
        typeof i == "function" ? i.displayName || i.name || "Unknown" : i
      ), c(
        i,
        T,
        k,
        S,
        a(),
        x,
        C,
        R
      );
    }
    function b(i) {
      typeof i == "object" && i !== null && i.$$typeof === _ && i._store && (i._store.validated = 1);
    }
    var g = It, _ = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), N = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), oe = Symbol.for("react.client.reference"), X = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = Object.prototype.hasOwnProperty, Q = Array.isArray, V = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(i) {
        return i();
      }
    };
    var y, L = {}, U = g["react-stack-bottom-frame"].bind(
      g,
      o
    )(), ee = V(r(o)), be = {};
    Se.Fragment = O, Se.jsx = function(i, f, x, A, S) {
      var k = 1e4 > X.recentlyCreatedOwnerStacks++;
      return m(
        i,
        f,
        x,
        !1,
        A,
        S,
        k ? Error("react-stack-top-frame") : U,
        k ? V(r(i)) : ee
      );
    }, Se.jsxs = function(i, f, x, A, S) {
      var k = 1e4 > X.recentlyCreatedOwnerStacks++;
      return m(
        i,
        f,
        x,
        !0,
        A,
        S,
        k ? Error("react-stack-top-frame") : U,
        k ? V(r(i)) : ee
      );
    };
  }()), Se;
}
var Bt;
function Sr() {
  return Bt || (Bt = 1, process.env.NODE_ENV === "production" ? Fe.exports = Ar() : Fe.exports = wr()), Fe.exports;
}
var Y = Sr(), De = { exports: {} }, Le = { exports: {} }, z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt;
function Tr() {
  if (Kt) return z;
  Kt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, b = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, O = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
  function N(p) {
    if (typeof p == "object" && p !== null) {
      var B = p.$$typeof;
      switch (B) {
        case t:
          switch (p = p.type, p) {
            case u:
            case c:
            case r:
            case o:
            case a:
            case b:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case l:
                case m:
                case I:
                case _:
                case s:
                  return p;
                default:
                  return B;
              }
          }
        case n:
          return B;
      }
    }
  }
  function D(p) {
    return N(p) === c;
  }
  return z.AsyncMode = u, z.ConcurrentMode = c, z.ContextConsumer = l, z.ContextProvider = s, z.Element = t, z.ForwardRef = m, z.Fragment = r, z.Lazy = I, z.Memo = _, z.Portal = n, z.Profiler = o, z.StrictMode = a, z.Suspense = b, z.isAsyncMode = function(p) {
    return D(p) || N(p) === u;
  }, z.isConcurrentMode = D, z.isContextConsumer = function(p) {
    return N(p) === l;
  }, z.isContextProvider = function(p) {
    return N(p) === s;
  }, z.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, z.isForwardRef = function(p) {
    return N(p) === m;
  }, z.isFragment = function(p) {
    return N(p) === r;
  }, z.isLazy = function(p) {
    return N(p) === I;
  }, z.isMemo = function(p) {
    return N(p) === _;
  }, z.isPortal = function(p) {
    return N(p) === n;
  }, z.isProfiler = function(p) {
    return N(p) === o;
  }, z.isStrictMode = function(p) {
    return N(p) === a;
  }, z.isSuspense = function(p) {
    return N(p) === b;
  }, z.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === c || p === o || p === a || p === b || p === g || typeof p == "object" && p !== null && (p.$$typeof === I || p.$$typeof === _ || p.$$typeof === s || p.$$typeof === l || p.$$typeof === m || p.$$typeof === w || p.$$typeof === P || p.$$typeof === F || p.$$typeof === O);
  }, z.typeOf = N, z;
}
var $ = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function _r() {
  return Jt || (Jt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, b = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, O = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
    function N(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === r || v === c || v === o || v === a || v === b || v === g || typeof v == "object" && v !== null && (v.$$typeof === I || v.$$typeof === _ || v.$$typeof === s || v.$$typeof === l || v.$$typeof === m || v.$$typeof === w || v.$$typeof === P || v.$$typeof === F || v.$$typeof === O);
    }
    function D(v) {
      if (typeof v == "object" && v !== null) {
        var te = v.$$typeof;
        switch (te) {
          case t:
            var Ie = v.type;
            switch (Ie) {
              case u:
              case c:
              case r:
              case o:
              case a:
              case b:
                return Ie;
              default:
                var Vt = Ie && Ie.$$typeof;
                switch (Vt) {
                  case l:
                  case m:
                  case I:
                  case _:
                  case s:
                    return Vt;
                  default:
                    return te;
                }
            }
          case n:
            return te;
        }
      }
    }
    var p = u, B = c, H = l, J = s, Z = t, oe = m, X = r, ce = I, Q = _, V = n, y = o, L = a, U = b, ee = !1;
    function be(v) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), i(v) || D(v) === u;
    }
    function i(v) {
      return D(v) === c;
    }
    function f(v) {
      return D(v) === l;
    }
    function x(v) {
      return D(v) === s;
    }
    function A(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function S(v) {
      return D(v) === m;
    }
    function k(v) {
      return D(v) === r;
    }
    function C(v) {
      return D(v) === I;
    }
    function R(v) {
      return D(v) === _;
    }
    function T(v) {
      return D(v) === n;
    }
    function j(v) {
      return D(v) === o;
    }
    function M(v) {
      return D(v) === a;
    }
    function q(v) {
      return D(v) === b;
    }
    $.AsyncMode = p, $.ConcurrentMode = B, $.ContextConsumer = H, $.ContextProvider = J, $.Element = Z, $.ForwardRef = oe, $.Fragment = X, $.Lazy = ce, $.Memo = Q, $.Portal = V, $.Profiler = y, $.StrictMode = L, $.Suspense = U, $.isAsyncMode = be, $.isConcurrentMode = i, $.isContextConsumer = f, $.isContextProvider = x, $.isElement = A, $.isForwardRef = S, $.isFragment = k, $.isLazy = C, $.isMemo = R, $.isPortal = T, $.isProfiler = j, $.isStrictMode = M, $.isSuspense = q, $.isValidElementType = N, $.typeOf = D;
  }()), $;
}
var Zt;
function zn() {
  return Zt || (Zt = 1, process.env.NODE_ENV === "production" ? Le.exports = Tr() : Le.exports = _r()), Le.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Je, Qt;
function Pr() {
  if (Qt) return Je;
  Qt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var u = Object.getOwnPropertyNames(s).map(function(m) {
        return s[m];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        c[m] = m;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Je = a() ? Object.assign : function(o, s) {
    for (var l, u = r(o), c, m = 1; m < arguments.length; m++) {
      l = Object(arguments[m]);
      for (var b in l)
        t.call(l, b) && (u[b] = l[b]);
      if (e) {
        c = e(l);
        for (var g = 0; g < c.length; g++)
          n.call(l, c[g]) && (u[c[g]] = l[c[g]]);
      }
    }
    return u;
  }, Je;
}
var Ze, en;
function jt() {
  if (en) return Ze;
  en = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ze = e, Ze;
}
var Qe, tn;
function $n() {
  return tn || (tn = 1, Qe = Function.call.bind(Object.prototype.hasOwnProperty)), Qe;
}
var et, nn;
function kr() {
  if (nn) return et;
  nn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ jt(), n = {}, r = /* @__PURE__ */ $n();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, l, u, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in o)
        if (r(o, m)) {
          var b;
          try {
            if (typeof o[m] != "function") {
              var g = Error(
                (u || "React class") + ": " + l + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            b = o[m](s, m, u, l, null, t);
          } catch (I) {
            b = I;
          }
          if (b && !(b instanceof Error) && e(
            (u || "React class") + ": type specification of " + l + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof b + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), b instanceof Error && !(b.message in n)) {
            n[b.message] = !0;
            var _ = c ? c() : "";
            e(
              "Failed " + l + " type: " + b.message + (_ ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, et = a, et;
}
var tt, rn;
function Cr() {
  if (rn) return tt;
  rn = 1;
  var e = zn(), t = Pr(), n = /* @__PURE__ */ jt(), r = /* @__PURE__ */ $n(), a = /* @__PURE__ */ kr(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(l) {
    var u = "Warning: " + l;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return tt = function(l, u) {
    var c = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function b(i) {
      var f = i && (c && i[c] || i[m]);
      if (typeof f == "function")
        return f;
    }
    var g = "<<anonymous>>", _ = {
      array: P("array"),
      bigint: P("bigint"),
      bool: P("boolean"),
      func: P("function"),
      number: P("number"),
      object: P("object"),
      string: P("string"),
      symbol: P("symbol"),
      any: F(),
      arrayOf: N,
      element: D(),
      elementType: p(),
      instanceOf: B,
      node: oe(),
      objectOf: J,
      oneOf: H,
      oneOfType: Z,
      shape: ce,
      exact: Q
    };
    function I(i, f) {
      return i === f ? i !== 0 || 1 / i === 1 / f : i !== i && f !== f;
    }
    function O(i, f) {
      this.message = i, this.data = f && typeof f == "object" ? f : {}, this.stack = "";
    }
    O.prototype = Error.prototype;
    function w(i) {
      if (process.env.NODE_ENV !== "production")
        var f = {}, x = 0;
      function A(k, C, R, T, j, M, q) {
        if (T = T || g, M = M || R, q !== n) {
          if (u) {
            var v = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw v.name = "Invariant Violation", v;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var te = T + ":" + R;
            !f[te] && // Avoid spamming the console because they are often not actionable except for lib authors
            x < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + M + "` prop on `" + T + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), f[te] = !0, x++);
          }
        }
        return C[R] == null ? k ? C[R] === null ? new O("The " + j + " `" + M + "` is marked as required " + ("in `" + T + "`, but its value is `null`.")) : new O("The " + j + " `" + M + "` is marked as required in " + ("`" + T + "`, but its value is `undefined`.")) : null : i(C, R, T, j, M);
      }
      var S = A.bind(null, !1);
      return S.isRequired = A.bind(null, !0), S;
    }
    function P(i) {
      function f(x, A, S, k, C, R) {
        var T = x[A], j = L(T);
        if (j !== i) {
          var M = U(T);
          return new O(
            "Invalid " + k + " `" + C + "` of type " + ("`" + M + "` supplied to `" + S + "`, expected ") + ("`" + i + "`."),
            { expectedType: i }
          );
        }
        return null;
      }
      return w(f);
    }
    function F() {
      return w(s);
    }
    function N(i) {
      function f(x, A, S, k, C) {
        if (typeof i != "function")
          return new O("Property `" + C + "` of component `" + S + "` has invalid PropType notation inside arrayOf.");
        var R = x[A];
        if (!Array.isArray(R)) {
          var T = L(R);
          return new O("Invalid " + k + " `" + C + "` of type " + ("`" + T + "` supplied to `" + S + "`, expected an array."));
        }
        for (var j = 0; j < R.length; j++) {
          var M = i(R, j, S, k, C + "[" + j + "]", n);
          if (M instanceof Error)
            return M;
        }
        return null;
      }
      return w(f);
    }
    function D() {
      function i(f, x, A, S, k) {
        var C = f[x];
        if (!l(C)) {
          var R = L(C);
          return new O("Invalid " + S + " `" + k + "` of type " + ("`" + R + "` supplied to `" + A + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(i);
    }
    function p() {
      function i(f, x, A, S, k) {
        var C = f[x];
        if (!e.isValidElementType(C)) {
          var R = L(C);
          return new O("Invalid " + S + " `" + k + "` of type " + ("`" + R + "` supplied to `" + A + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(i);
    }
    function B(i) {
      function f(x, A, S, k, C) {
        if (!(x[A] instanceof i)) {
          var R = i.name || g, T = be(x[A]);
          return new O("Invalid " + k + " `" + C + "` of type " + ("`" + T + "` supplied to `" + S + "`, expected ") + ("instance of `" + R + "`."));
        }
        return null;
      }
      return w(f);
    }
    function H(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function f(x, A, S, k, C) {
        for (var R = x[A], T = 0; T < i.length; T++)
          if (I(R, i[T]))
            return null;
        var j = JSON.stringify(i, function(q, v) {
          var te = U(v);
          return te === "symbol" ? String(v) : v;
        });
        return new O("Invalid " + k + " `" + C + "` of value `" + String(R) + "` " + ("supplied to `" + S + "`, expected one of " + j + "."));
      }
      return w(f);
    }
    function J(i) {
      function f(x, A, S, k, C) {
        if (typeof i != "function")
          return new O("Property `" + C + "` of component `" + S + "` has invalid PropType notation inside objectOf.");
        var R = x[A], T = L(R);
        if (T !== "object")
          return new O("Invalid " + k + " `" + C + "` of type " + ("`" + T + "` supplied to `" + S + "`, expected an object."));
        for (var j in R)
          if (r(R, j)) {
            var M = i(R, j, S, k, C + "." + j, n);
            if (M instanceof Error)
              return M;
          }
        return null;
      }
      return w(f);
    }
    function Z(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var f = 0; f < i.length; f++) {
        var x = i[f];
        if (typeof x != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(x) + " at index " + f + "."
          ), s;
      }
      function A(S, k, C, R, T) {
        for (var j = [], M = 0; M < i.length; M++) {
          var q = i[M], v = q(S, k, C, R, T, n);
          if (v == null)
            return null;
          v.data && r(v.data, "expectedType") && j.push(v.data.expectedType);
        }
        var te = j.length > 0 ? ", expected one of type [" + j.join(", ") + "]" : "";
        return new O("Invalid " + R + " `" + T + "` supplied to " + ("`" + C + "`" + te + "."));
      }
      return w(A);
    }
    function oe() {
      function i(f, x, A, S, k) {
        return V(f[x]) ? null : new O("Invalid " + S + " `" + k + "` supplied to " + ("`" + A + "`, expected a ReactNode."));
      }
      return w(i);
    }
    function X(i, f, x, A, S) {
      return new O(
        (i || "React class") + ": " + f + " type `" + x + "." + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + S + "`."
      );
    }
    function ce(i) {
      function f(x, A, S, k, C) {
        var R = x[A], T = L(R);
        if (T !== "object")
          return new O("Invalid " + k + " `" + C + "` of type `" + T + "` " + ("supplied to `" + S + "`, expected `object`."));
        for (var j in i) {
          var M = i[j];
          if (typeof M != "function")
            return X(S, k, C, j, U(M));
          var q = M(R, j, S, k, C + "." + j, n);
          if (q)
            return q;
        }
        return null;
      }
      return w(f);
    }
    function Q(i) {
      function f(x, A, S, k, C) {
        var R = x[A], T = L(R);
        if (T !== "object")
          return new O("Invalid " + k + " `" + C + "` of type `" + T + "` " + ("supplied to `" + S + "`, expected `object`."));
        var j = t({}, x[A], i);
        for (var M in j) {
          var q = i[M];
          if (r(i, M) && typeof q != "function")
            return X(S, k, C, M, U(q));
          if (!q)
            return new O(
              "Invalid " + k + " `" + C + "` key `" + M + "` supplied to `" + S + "`.\nBad object: " + JSON.stringify(x[A], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(i), null, "  ")
            );
          var v = q(R, M, S, k, C + "." + M, n);
          if (v)
            return v;
        }
        return null;
      }
      return w(f);
    }
    function V(i) {
      switch (typeof i) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !i;
        case "object":
          if (Array.isArray(i))
            return i.every(V);
          if (i === null || l(i))
            return !0;
          var f = b(i);
          if (f) {
            var x = f.call(i), A;
            if (f !== i.entries) {
              for (; !(A = x.next()).done; )
                if (!V(A.value))
                  return !1;
            } else
              for (; !(A = x.next()).done; ) {
                var S = A.value;
                if (S && !V(S[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function y(i, f) {
      return i === "symbol" ? !0 : f ? f["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && f instanceof Symbol : !1;
    }
    function L(i) {
      var f = typeof i;
      return Array.isArray(i) ? "array" : i instanceof RegExp ? "object" : y(f, i) ? "symbol" : f;
    }
    function U(i) {
      if (typeof i > "u" || i === null)
        return "" + i;
      var f = L(i);
      if (f === "object") {
        if (i instanceof Date)
          return "date";
        if (i instanceof RegExp)
          return "regexp";
      }
      return f;
    }
    function ee(i) {
      var f = U(i);
      switch (f) {
        case "array":
        case "object":
          return "an " + f;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + f;
        default:
          return f;
      }
    }
    function be(i) {
      return !i.constructor || !i.constructor.name ? g : i.constructor.name;
    }
    return _.checkPropTypes = a, _.resetWarningCache = a.resetWarningCache, _.PropTypes = _, _;
  }, tt;
}
var nt, an;
function Rr() {
  if (an) return nt;
  an = 1;
  var e = /* @__PURE__ */ jt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, nt = function() {
    function r(s, l, u, c, m, b) {
      if (b !== e) {
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
    var o = {
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
    return o.PropTypes = o, o;
  }, nt;
}
var on;
function Nr() {
  if (on) return De.exports;
  if (on = 1, process.env.NODE_ENV !== "production") {
    var e = zn(), t = !0;
    De.exports = /* @__PURE__ */ Cr()(e.isElement, t);
  } else
    De.exports = /* @__PURE__ */ Rr()();
  return De.exports;
}
var Ir = /* @__PURE__ */ Nr();
const h = /* @__PURE__ */ Ln(Ir);
var rt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var sn;
function jr() {
  return sn || (sn = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var o = "", s = 0; s < arguments.length; s++) {
          var l = arguments[s];
          l && (o = a(o, r(l)));
        }
        return o;
      }
      function r(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return n.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var s = "";
        for (var l in o)
          t.call(o, l) && o[l] && (s = a(s, l));
        return s;
      }
      function a(o, s) {
        return s ? o ? o + " " + s : o + s : o;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(rt)), rt.exports;
}
var Mr = jr();
const at = /* @__PURE__ */ Ln(Mr);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Fr(e, t, n) {
  return (t = Lr(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ln(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ln(Object(n), !0).forEach(function(r) {
      Fr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ln(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Dr(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Lr(e) {
  var t = Dr(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const cn = () => {
};
let Mt = {}, Yn = {}, Wn = null, Un = {
  mark: cn,
  measure: cn
};
try {
  typeof window < "u" && (Mt = window), typeof document < "u" && (Yn = document), typeof MutationObserver < "u" && (Wn = MutationObserver), typeof performance < "u" && (Un = performance);
} catch {
}
const {
  userAgent: fn = ""
} = Mt.navigator || {}, ue = Mt, W = Yn, un = Wn, ze = Un;
ue.document;
const le = !!W.documentElement && !!W.head && typeof W.addEventListener == "function" && typeof W.createElement == "function", qn = ~fn.indexOf("MSIE") || ~fn.indexOf("Trident/");
var zr = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, $r = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Gn = {
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
}, Yr = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Vn = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], G = "classic", Ve = "duotone", Wr = "sharp", Ur = "sharp-duotone", Hn = [G, Ve, Wr, Ur], qr = {
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
}, Gr = {
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
}, Vr = /* @__PURE__ */ new Map([["classic", {
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
}]]), Hr = {
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
}, Xr = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], dn = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Br = ["kit"], Kr = {
  kit: {
    "fa-kit": "fak"
  }
}, Jr = ["fak", "fakd"], Zr = {
  kit: {
    fak: "fa-kit"
  }
}, mn = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, $e = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Qr = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], ea = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], ta = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, na = {
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
}, ra = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, mt = {
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
}, aa = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], pt = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Qr, ...aa], oa = ["solid", "regular", "light", "thin", "duotone", "brands"], Xn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ia = Xn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), sa = [...Object.keys(ra), ...oa, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", $e.GROUP, $e.SWAP_OPACITY, $e.PRIMARY, $e.SECONDARY].concat(Xn.map((e) => "".concat(e, "x"))).concat(ia.map((e) => "w-".concat(e))), la = {
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
const ie = "___FONT_AWESOME___", ht = 16, Bn = "fa", Kn = "svg-inline--fa", ge = "data-fa-i2svg", gt = "data-fa-pseudo-element", ca = "data-fa-pseudo-element-pending", Ft = "data-prefix", Dt = "data-icon", pn = "fontawesome-i2svg", fa = "async", ua = ["HTML", "HEAD", "STYLE", "SCRIPT"], Jn = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Re(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[G];
    }
  });
}
const Zn = d({}, Gn);
Zn[G] = d(d(d(d({}, {
  "fa-duotone": "duotone"
}), Gn[G]), dn.kit), dn["kit-duotone"]);
const da = Re(Zn), yt = d({}, Hr);
yt[G] = d(d(d(d({}, {
  duotone: "fad"
}), yt[G]), mn.kit), mn["kit-duotone"]);
const hn = Re(yt), bt = d({}, mt);
bt[G] = d(d({}, bt[G]), Zr.kit);
const Lt = Re(bt), vt = d({}, na);
vt[G] = d(d({}, vt[G]), Kr.kit);
Re(vt);
const ma = zr, Qn = "fa-layers-text", pa = $r, ha = d({}, qr);
Re(ha);
const ga = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], ot = Yr, ya = [...Br, ...sa], _e = ue.FontAwesomeConfig || {};
function ba(e) {
  var t = W.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function va(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
W && typeof W.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = va(ba(n));
  a != null && (_e[r] = a);
});
const er = {
  styleDefault: "solid",
  familyDefault: G,
  cssPrefix: Bn,
  replacementClass: Kn,
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
_e.familyPrefix && (_e.cssPrefix = _e.familyPrefix);
const Oe = d(d({}, er), _e);
Oe.autoReplaceSvg || (Oe.observeMutations = !1);
const E = {};
Object.keys(er).forEach((e) => {
  Object.defineProperty(E, e, {
    enumerable: !0,
    set: function(t) {
      Oe[e] = t, Pe.forEach((n) => n(E));
    },
    get: function() {
      return Oe[e];
    }
  });
});
Object.defineProperty(E, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Oe.cssPrefix = e, Pe.forEach((t) => t(E));
  },
  get: function() {
    return Oe.cssPrefix;
  }
});
ue.FontAwesomeConfig = E;
const Pe = [];
function xa(e) {
  return Pe.push(e), () => {
    Pe.splice(Pe.indexOf(e), 1);
  };
}
const fe = ht, re = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Ea(e) {
  if (!e || !le)
    return;
  const t = W.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = W.head.childNodes;
  let r = null;
  for (let a = n.length - 1; a > -1; a--) {
    const o = n[a], s = (o.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (r = o);
  }
  return W.head.insertBefore(t, r), e;
}
const Oa = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ke() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Oa[Math.random() * 62 | 0];
  return t;
}
function Ae(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function zt(e) {
  return e.classList ? Ae(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function tr(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Aa(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(tr(e[n]), '" '), "").trim();
}
function He(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function $t(e) {
  return e.size !== re.size || e.x !== re.x || e.y !== re.y || e.rotate !== re.rotate || e.flipX || e.flipY;
}
function wa(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), l = "rotate(".concat(t.rotate, " 0 0)"), u = {
    transform: "".concat(o, " ").concat(s, " ").concat(l)
  }, c = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: u,
    path: c
  };
}
function Sa(e) {
  let {
    transform: t,
    width: n = ht,
    height: r = ht,
    startCentered: a = !1
  } = e, o = "";
  return a && qn ? o += "translate(".concat(t.x / fe - n / 2, "em, ").concat(t.y / fe - r / 2, "em) ") : a ? o += "translate(calc(-50% + ".concat(t.x / fe, "em), calc(-50% + ").concat(t.y / fe, "em)) ") : o += "translate(".concat(t.x / fe, "em, ").concat(t.y / fe, "em) "), o += "scale(".concat(t.size / fe * (t.flipX ? -1 : 1), ", ").concat(t.size / fe * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var Ta = `:root, :host {
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
function nr() {
  const e = Bn, t = Kn, n = E.cssPrefix, r = E.replacementClass;
  let a = Ta;
  if (n !== e || r !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(t), "g");
    a = a.replace(o, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(l, ".".concat(r));
  }
  return a;
}
let gn = !1;
function it() {
  E.autoAddCss && !gn && (Ea(nr()), gn = !0);
}
var _a = {
  mixout() {
    return {
      dom: {
        css: nr,
        insertCss: it
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        it();
      },
      beforeI2svg() {
        it();
      }
    };
  }
};
const se = ue || {};
se[ie] || (se[ie] = {});
se[ie].styles || (se[ie].styles = {});
se[ie].hooks || (se[ie].hooks = {});
se[ie].shims || (se[ie].shims = []);
var ae = se[ie];
const rr = [], ar = function() {
  W.removeEventListener("DOMContentLoaded", ar), Ue = 1, rr.map((e) => e());
};
let Ue = !1;
le && (Ue = (W.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(W.readyState), Ue || W.addEventListener("DOMContentLoaded", ar));
function Pa(e) {
  le && (Ue ? setTimeout(e, 0) : rr.push(e));
}
function Ne(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? tr(e) : "<".concat(t, " ").concat(Aa(n), ">").concat(r.map(Ne).join(""), "</").concat(t, ">");
}
function yn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var st = function(t, n, r, a) {
  var o = Object.keys(t), s = o.length, l = n, u, c, m;
  for (r === void 0 ? (u = 1, m = t[o[0]]) : (u = 0, m = r); u < s; u++)
    c = o[u], m = l(m, t[c], c, t);
  return m;
};
function ka(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      const o = e.charCodeAt(n++);
      (o & 64512) == 56320 ? t.push(((a & 1023) << 10) + (o & 1023) + 65536) : (t.push(a), n--);
    } else
      t.push(a);
  }
  return t;
}
function xt(e) {
  const t = ka(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Ca(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function bn(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Et(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = bn(t);
  typeof ae.hooks.addPack == "function" && !r ? ae.hooks.addPack(e, bn(t)) : ae.styles[e] = d(d({}, ae.styles[e] || {}), a), e === "fas" && Et("fa", t);
}
const {
  styles: Ce,
  shims: Ra
} = ae, or = Object.keys(Lt), Na = or.reduce((e, t) => (e[t] = Object.keys(Lt[t]), e), {});
let Yt = null, ir = {}, sr = {}, lr = {}, cr = {}, fr = {};
function Ia(e) {
  return ~ya.indexOf(e);
}
function ja(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Ia(a) ? a : null;
}
const ur = () => {
  const e = (r) => st(Ce, (a, o, s) => (a[s] = st(o, r, {}), a), {});
  ir = e((r, a, o) => (a[3] && (r[a[3]] = o), a[2] && a[2].filter((l) => typeof l == "number").forEach((l) => {
    r[l.toString(16)] = o;
  }), r)), sr = e((r, a, o) => (r[o] = o, a[2] && a[2].filter((l) => typeof l == "string").forEach((l) => {
    r[l] = o;
  }), r)), fr = e((r, a, o) => {
    const s = a[2];
    return r[o] = o, s.forEach((l) => {
      r[l] = o;
    }), r;
  });
  const t = "far" in Ce || E.autoFetchSvg, n = st(Ra, (r, a) => {
    const o = a[0];
    let s = a[1];
    const l = a[2];
    return s === "far" && !t && (s = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: s,
      iconName: l
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: l
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  lr = n.names, cr = n.unicodes, Yt = Xe(E.styleDefault, {
    family: E.familyDefault
  });
};
xa((e) => {
  Yt = Xe(e.styleDefault, {
    family: E.familyDefault
  });
});
ur();
function Wt(e, t) {
  return (ir[e] || {})[t];
}
function Ma(e, t) {
  return (sr[e] || {})[t];
}
function pe(e, t) {
  return (fr[e] || {})[t];
}
function dr(e) {
  return lr[e] || {
    prefix: null,
    iconName: null
  };
}
function Fa(e) {
  const t = cr[e], n = Wt("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function de() {
  return Yt;
}
const mr = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Da(e) {
  let t = G;
  const n = or.reduce((r, a) => (r[a] = "".concat(E.cssPrefix, "-").concat(a), r), {});
  return Hn.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => Na[r].includes(a))) && (t = r);
  }), t;
}
function Xe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = G
  } = t, r = da[n][e];
  if (n === Ve && !e)
    return "fad";
  const a = hn[n][e] || hn[n][r], o = e in ae.styles ? e : null;
  return a || o || null;
}
function La(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = ja(E.cssPrefix, r);
    a ? n = a : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function vn(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function Be(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const a = pt.concat(ea), o = vn(e.filter((b) => a.includes(b))), s = vn(e.filter((b) => !pt.includes(b))), l = o.filter((b) => (r = b, !Vn.includes(b))), [u = null] = l, c = Da(o), m = d(d({}, La(s)), {}, {
    prefix: Xe(u, {
      family: c
    })
  });
  return d(d(d({}, m), Wa({
    values: e,
    family: c,
    styles: Ce,
    config: E,
    canonical: m,
    givenPrefix: r
  })), za(n, r, m));
}
function za(e, t, n) {
  let {
    prefix: r,
    iconName: a
  } = n;
  if (e || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  const o = t === "fa" ? dr(a) : {}, s = pe(r, a);
  return a = o.iconName || s || a, r = o.prefix || r, r === "far" && !Ce.far && Ce.fas && !E.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const $a = Hn.filter((e) => e !== G || e !== Ve), Ya = Object.keys(mt).filter((e) => e !== G).map((e) => Object.keys(mt[e])).flat();
function Wa(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: o = {},
    config: s = {}
  } = e, l = n === Ve, u = t.includes("fa-duotone") || t.includes("fad"), c = s.familyDefault === "duotone", m = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!l && (u || c || m) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && $a.includes(n) && (Object.keys(o).find((g) => Ya.includes(g)) || s.autoFetchSvg)) {
    const g = Vr.get(n).defaultShortPrefixId;
    r.prefix = g, r.iconName = pe(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = de() || "fas"), r;
}
class Ua {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((o) => {
      this.definitions[o] = d(d({}, this.definitions[o] || {}), a[o]), Et(o, a[o]);
      const s = Lt[G][o];
      s && Et(s, a[o]), ur();
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
        prefix: o,
        iconName: s,
        icon: l
      } = r[a], u = l[2];
      t[o] || (t[o] = {}), u.length > 0 && u.forEach((c) => {
        typeof c == "string" && (t[o][c] = l);
      }), t[o][s] = l;
    }), t;
  }
}
let xn = [], ve = {};
const Ee = {}, qa = Object.keys(Ee);
function Ga(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return xn = e, ve = {}, Object.keys(Ee).forEach((r) => {
    qa.indexOf(r) === -1 && delete Ee[r];
  }), xn.forEach((r) => {
    const a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach((o) => {
      typeof a[o] == "function" && (n[o] = a[o]), typeof a[o] == "object" && Object.keys(a[o]).forEach((s) => {
        n[o] || (n[o] = {}), n[o][s] = a[o][s];
      });
    }), r.hooks) {
      const o = r.hooks();
      Object.keys(o).forEach((s) => {
        ve[s] || (ve[s] = []), ve[s].push(o[s]);
      });
    }
    r.provides && r.provides(Ee);
  }), n;
}
function Ot(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (ve[e] || []).forEach((s) => {
    t = s.apply(null, [t, ...r]);
  }), t;
}
function ye(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (ve[e] || []).forEach((o) => {
    o.apply(null, n);
  });
}
function me() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Ee[e] ? Ee[e].apply(null, t) : void 0;
}
function At(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || de();
  if (t)
    return t = pe(n, t) || t, yn(pr.definitions, n, t) || yn(ae.styles, n, t);
}
const pr = new Ua(), Va = () => {
  E.autoReplaceSvg = !1, E.observeMutations = !1, ye("noAuto");
}, Ha = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return le ? (ye("beforeI2svg", e), me("pseudoElements2svg", e), me("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    E.autoReplaceSvg === !1 && (E.autoReplaceSvg = !0), E.observeMutations = !0, Pa(() => {
      Ba({
        autoReplaceSvgRoot: t
      }), ye("watch", e);
    });
  }
}, Xa = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: pe(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Xe(e[0]);
      return {
        prefix: n,
        iconName: pe(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(E.cssPrefix, "-")) > -1 || e.match(ma))) {
      const t = Be(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || de(),
        iconName: pe(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = de();
      return {
        prefix: t,
        iconName: pe(t, e) || e
      };
    }
  }
}, K = {
  noAuto: Va,
  config: E,
  dom: Ha,
  parse: Xa,
  library: pr,
  findIconDefinition: At,
  toHtml: Ne
}, Ba = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = W
  } = e;
  (Object.keys(ae.styles).length > 0 || E.autoFetchSvg) && le && E.autoReplaceSvg && K.dom.i2svg({
    node: t
  });
};
function Ke(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Ne(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!le) return;
      const n = W.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Ka(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: o,
    transform: s
  } = e;
  if ($t(s) && n.found && !r.found) {
    const {
      width: l,
      height: u
    } = n, c = {
      x: l / u / 2,
      y: 0.5
    };
    a.style = He(d(d({}, o), {}, {
      "transform-origin": "".concat(c.x + s.x / 16, "em ").concat(c.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Ja(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: a,
    symbol: o
  } = e;
  const s = o === !0 ? "".concat(t, "-").concat(E.cssPrefix, "-").concat(n) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: d(d({}, a), {}, {
        id: s
      }),
      children: r
    }]
  }];
}
function Ut(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: a,
    transform: o,
    symbol: s,
    title: l,
    maskId: u,
    titleId: c,
    extra: m,
    watchable: b = !1
  } = e, {
    width: g,
    height: _
  } = n.found ? n : t, I = Jr.includes(r), O = [E.replacementClass, a ? "".concat(E.cssPrefix, "-").concat(a) : ""].filter((p) => m.classes.indexOf(p) === -1).filter((p) => p !== "" || !!p).concat(m.classes).join(" ");
  let w = {
    children: [],
    attributes: d(d({}, m.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: O,
      role: m.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(g, " ").concat(_)
    })
  };
  const P = I && !~m.classes.indexOf("fa-fw") ? {
    width: "".concat(g / _ * 16 * 0.0625, "em")
  } : {};
  b && (w.attributes[ge] = ""), l && (w.children.push({
    tag: "title",
    attributes: {
      id: w.attributes["aria-labelledby"] || "title-".concat(c || ke())
    },
    children: [l]
  }), delete w.attributes.title);
  const F = d(d({}, w), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: u,
    transform: o,
    symbol: s,
    styles: d(d({}, P), m.styles)
  }), {
    children: N,
    attributes: D
  } = n.found && t.found ? me("generateAbstractMask", F) || {
    children: [],
    attributes: {}
  } : me("generateAbstractIcon", F) || {
    children: [],
    attributes: {}
  };
  return F.children = N, F.attributes = D, s ? Ja(F) : Ka(F);
}
function En(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: a,
    title: o,
    extra: s,
    watchable: l = !1
  } = e, u = d(d(d({}, s.attributes), o ? {
    title: o
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  l && (u[ge] = "");
  const c = d({}, s.styles);
  $t(a) && (c.transform = Sa({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), c["-webkit-transform"] = c.transform);
  const m = He(c);
  m.length > 0 && (u.style = m);
  const b = [];
  return b.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), o && b.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), b;
}
function Za(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, a = d(d(d({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), o = He(r.styles);
  o.length > 0 && (a.style = o);
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
  styles: lt
} = ae;
function wt(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(E.cssPrefix, "-").concat(ot.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(E.cssPrefix, "-").concat(ot.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(E.cssPrefix, "-").concat(ot.PRIMARY),
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
const Qa = {
  found: !1,
  width: 512,
  height: 512
};
function eo(e, t) {
  !Jn && !E.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function St(e, t) {
  let n = t;
  return t === "fa" && E.styleDefault !== null && (t = de()), new Promise((r, a) => {
    if (n === "fa") {
      const o = dr(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && lt[t] && lt[t][e]) {
      const o = lt[t][e];
      return r(wt(o));
    }
    eo(e, t), r(d(d({}, Qa), {}, {
      icon: E.showMissingIcons && e ? me("missingIconAbstract") || {} : {}
    }));
  });
}
const On = () => {
}, Tt = E.measurePerformance && ze && ze.mark && ze.measure ? ze : {
  mark: On,
  measure: On
}, Te = 'FA "6.7.2"', to = (e) => (Tt.mark("".concat(Te, " ").concat(e, " begins")), () => hr(e)), hr = (e) => {
  Tt.mark("".concat(Te, " ").concat(e, " ends")), Tt.measure("".concat(Te, " ").concat(e), "".concat(Te, " ").concat(e, " begins"), "".concat(Te, " ").concat(e, " ends"));
};
var qt = {
  begin: to,
  end: hr
};
const Ye = () => {
};
function An(e) {
  return typeof (e.getAttribute ? e.getAttribute(ge) : null) == "string";
}
function no(e) {
  const t = e.getAttribute ? e.getAttribute(Ft) : null, n = e.getAttribute ? e.getAttribute(Dt) : null;
  return t && n;
}
function ro(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(E.replacementClass);
}
function ao() {
  return E.autoReplaceSvg === !0 ? We.replace : We[E.autoReplaceSvg] || We.replace;
}
function oo(e) {
  return W.createElementNS("http://www.w3.org/2000/svg", e);
}
function io(e) {
  return W.createElement(e);
}
function gr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? oo : io
  } = t;
  if (typeof e == "string")
    return W.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  }), (e.children || []).forEach(function(o) {
    r.appendChild(gr(o, {
      ceFn: n
    }));
  }), r;
}
function so(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const We = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(gr(n), t);
      }), t.getAttribute(ge) === null && E.keepOriginalSource) {
        let n = W.createComment(so(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~zt(t).indexOf(E.replacementClass))
      return We.replace(e);
    const r = new RegExp("".concat(E.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const o = n[0].attributes.class.split(" ").reduce((s, l) => (l === E.replacementClass || l.match(r) ? s.toSvg.push(l) : s.toNode.push(l), s), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    const a = n.map((o) => Ne(o)).join(`
`);
    t.setAttribute(ge, ""), t.innerHTML = a;
  }
};
function wn(e) {
  e();
}
function yr(e, t) {
  const n = typeof t == "function" ? t : Ye;
  if (e.length === 0)
    n();
  else {
    let r = wn;
    E.mutateApproach === fa && (r = ue.requestAnimationFrame || wn), r(() => {
      const a = ao(), o = qt.begin("mutate");
      e.map(a), o(), n();
    });
  }
}
let Gt = !1;
function br() {
  Gt = !0;
}
function _t() {
  Gt = !1;
}
let qe = null;
function Sn(e) {
  if (!un || !E.observeMutations)
    return;
  const {
    treeCallback: t = Ye,
    nodeCallback: n = Ye,
    pseudoElementsCallback: r = Ye,
    observeMutationsRoot: a = W
  } = e;
  qe = new un((o) => {
    if (Gt) return;
    const s = de();
    Ae(o).forEach((l) => {
      if (l.type === "childList" && l.addedNodes.length > 0 && !An(l.addedNodes[0]) && (E.searchPseudoElements && r(l.target), t(l.target)), l.type === "attributes" && l.target.parentNode && E.searchPseudoElements && r(l.target.parentNode), l.type === "attributes" && An(l.target) && ~ga.indexOf(l.attributeName))
        if (l.attributeName === "class" && no(l.target)) {
          const {
            prefix: u,
            iconName: c
          } = Be(zt(l.target));
          l.target.setAttribute(Ft, u || s), c && l.target.setAttribute(Dt, c);
        } else ro(l.target) && n(l.target);
    });
  }), le && qe.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function lo() {
  qe && qe.disconnect();
}
function co(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const o = a.split(":"), s = o[0], l = o.slice(1);
    return s && l.length > 0 && (r[s] = l.join(":").trim()), r;
  }, {})), n;
}
function fo(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = Be(zt(e));
  return a.prefix || (a.prefix = de()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Ma(a.prefix, e.innerText) || Wt(a.prefix, xt(e.innerText))), !a.iconName && E.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function uo(e) {
  const t = Ae(e.attributes).reduce((a, o) => (a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return E.autoA11y && (n ? t["aria-labelledby"] = "".concat(E.replacementClass, "-title-").concat(r || ke()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function mo() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: re,
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
function Tn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: a
  } = fo(e), o = uo(e), s = Ot("parseNodeAttributes", {}, e);
  let l = t.styleParser ? co(e) : [];
  return d({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: re,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: a,
      styles: l,
      attributes: o
    }
  }, s);
}
const {
  styles: po
} = ae;
function vr(e) {
  const t = E.autoReplaceSvg === "nest" ? Tn(e, {
    styleParser: !1
  }) : Tn(e);
  return ~t.extra.classes.indexOf(Qn) ? me("generateLayersText", e, t) : me("generateSvgReplacementMutation", e, t);
}
function ho() {
  return [...Xr, ...pt];
}
function _n(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!le) return Promise.resolve();
  const n = W.documentElement.classList, r = (m) => n.add("".concat(pn, "-").concat(m)), a = (m) => n.remove("".concat(pn, "-").concat(m)), o = E.autoFetchSvg ? ho() : Vn.concat(Object.keys(po));
  o.includes("fa") || o.push("fa");
  const s = [".".concat(Qn, ":not([").concat(ge, "])")].concat(o.map((m) => ".".concat(m, ":not([").concat(ge, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let l = [];
  try {
    l = Ae(e.querySelectorAll(s));
  } catch {
  }
  if (l.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const u = qt.begin("onTree"), c = l.reduce((m, b) => {
    try {
      const g = vr(b);
      g && m.push(g);
    } catch (g) {
      Jn || g.name === "MissingIcon" && console.error(g);
    }
    return m;
  }, []);
  return new Promise((m, b) => {
    Promise.all(c).then((g) => {
      yr(g, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), u(), m();
      });
    }).catch((g) => {
      u(), b(g);
    });
  });
}
function go(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  vr(e).then((n) => {
    n && yr([n], t);
  });
}
function yo(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : At(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : At(a || {})), e(r, d(d({}, n), {}, {
      mask: a
    }));
  };
}
const bo = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = re,
    symbol: r = !1,
    mask: a = null,
    maskId: o = null,
    title: s = null,
    titleId: l = null,
    classes: u = [],
    attributes: c = {},
    styles: m = {}
  } = t;
  if (!e) return;
  const {
    prefix: b,
    iconName: g,
    icon: _
  } = e;
  return Ke(d({
    type: "icon"
  }, e), () => (ye("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), E.autoA11y && (s ? c["aria-labelledby"] = "".concat(E.replacementClass, "-title-").concat(l || ke()) : (c["aria-hidden"] = "true", c.focusable = "false")), Ut({
    icons: {
      main: wt(_),
      mask: a ? wt(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: b,
    iconName: g,
    transform: d(d({}, re), n),
    symbol: r,
    title: s,
    maskId: o,
    titleId: l,
    extra: {
      attributes: c,
      styles: m,
      classes: u
    }
  })));
};
var vo = {
  mixout() {
    return {
      icon: yo(bo)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = _n, e.nodeCallback = go, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = W,
        callback: r = () => {
        }
      } = t;
      return _n(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: a,
        titleId: o,
        prefix: s,
        transform: l,
        symbol: u,
        mask: c,
        maskId: m,
        extra: b
      } = n;
      return new Promise((g, _) => {
        Promise.all([St(r, s), c.iconName ? St(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((I) => {
          let [O, w] = I;
          g([t, Ut({
            icons: {
              main: O,
              mask: w
            },
            prefix: s,
            iconName: r,
            transform: l,
            symbol: u,
            maskId: m,
            title: a,
            titleId: o,
            extra: b,
            watchable: !0
          })]);
        }).catch(_);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        transform: o,
        styles: s
      } = t;
      const l = He(s);
      l.length > 0 && (r.style = l);
      let u;
      return $t(o) && (u = me("generateAbstractTransformGrouping", {
        main: a,
        transform: o,
        containerWidth: a.width,
        iconWidth: a.width
      })), n.push(u || a.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, xo = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Ke({
          type: "layer"
        }, () => {
          ye("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((a) => {
            Array.isArray(a) ? a.map((o) => {
              r = r.concat(o.abstract);
            }) : r = r.concat(a.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(E.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, Eo = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: a = {},
          styles: o = {}
        } = t;
        return Ke({
          type: "counter",
          content: e
        }, () => (ye("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Za({
          content: e.toString(),
          title: n,
          extra: {
            attributes: a,
            styles: o,
            classes: ["".concat(E.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, Oo = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = re,
          title: r = null,
          classes: a = [],
          attributes: o = {},
          styles: s = {}
        } = t;
        return Ke({
          type: "text",
          content: e
        }, () => (ye("beforeDOMElementCreation", {
          content: e,
          params: t
        }), En({
          content: e,
          transform: d(d({}, re), n),
          title: r,
          extra: {
            attributes: o,
            styles: s,
            classes: ["".concat(E.cssPrefix, "-layers-text"), ...a]
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
        extra: o
      } = n;
      let s = null, l = null;
      if (qn) {
        const u = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        s = c.width / u, l = c.height / u;
      }
      return E.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, En({
        content: t.innerHTML,
        width: s,
        height: l,
        transform: a,
        title: r,
        extra: o,
        watchable: !0
      })]);
    };
  }
};
const Ao = new RegExp('"', "ug"), Pn = [1105920, 1112319], kn = d(d(d(d({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Gr), la), ta), Pt = Object.keys(kn).reduce((e, t) => (e[t.toLowerCase()] = kn[t], e), {}), wo = Object.keys(Pt).reduce((e, t) => {
  const n = Pt[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function So(e) {
  const t = e.replace(Ao, ""), n = Ca(t, 0), r = n >= Pn[0] && n <= Pn[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: xt(a ? t[0] : t),
    isSecondary: r || a
  };
}
function To(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (Pt[n] || {})[a] || wo[n];
}
function Cn(e, t) {
  const n = "".concat(ca).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const s = Ae(e.children).filter((g) => g.getAttribute(gt) === t)[0], l = ue.getComputedStyle(e, t), u = l.getPropertyValue("font-family"), c = u.match(pa), m = l.getPropertyValue("font-weight"), b = l.getPropertyValue("content");
    if (s && !c)
      return e.removeChild(s), r();
    if (c && b !== "none" && b !== "") {
      const g = l.getPropertyValue("content");
      let _ = To(u, m);
      const {
        value: I,
        isSecondary: O
      } = So(g), w = c[0].startsWith("FontAwesome");
      let P = Wt(_, I), F = P;
      if (w) {
        const N = Fa(I);
        N.iconName && N.prefix && (P = N.iconName, _ = N.prefix);
      }
      if (P && !O && (!s || s.getAttribute(Ft) !== _ || s.getAttribute(Dt) !== F)) {
        e.setAttribute(n, F), s && e.removeChild(s);
        const N = mo(), {
          extra: D
        } = N;
        D.attributes[gt] = t, St(P, _).then((p) => {
          const B = Ut(d(d({}, N), {}, {
            icons: {
              main: p,
              mask: mr()
            },
            prefix: _,
            iconName: F,
            extra: D,
            watchable: !0
          })), H = W.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(H, e.firstChild) : e.appendChild(H), H.outerHTML = B.map((J) => Ne(J)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function _o(e) {
  return Promise.all([Cn(e, "::before"), Cn(e, "::after")]);
}
function Po(e) {
  return e.parentNode !== document.head && !~ua.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(gt) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Rn(e) {
  if (le)
    return new Promise((t, n) => {
      const r = Ae(e.querySelectorAll("*")).filter(Po).map(_o), a = qt.begin("searchPseudoElements");
      br(), Promise.all(r).then(() => {
        a(), _t(), t();
      }).catch(() => {
        a(), _t(), n();
      });
    });
}
var ko = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Rn, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = W
      } = t;
      E.searchPseudoElements && Rn(n);
    };
  }
};
let Nn = !1;
var Co = {
  mixout() {
    return {
      dom: {
        unwatch() {
          br(), Nn = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Sn(Ot("mutationObserverCallbacks", {}));
      },
      noAuto() {
        lo();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Nn ? _t() : Sn(Ot("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const In = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const a = r.toLowerCase().split("-"), o = a[0];
    let s = a.slice(1).join("-");
    if (o && s === "h")
      return n.flipX = !0, n;
    if (o && s === "v")
      return n.flipY = !0, n;
    if (s = parseFloat(s), isNaN(s))
      return n;
    switch (o) {
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
var Ro = {
  mixout() {
    return {
      parse: {
        transform: (e) => In(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = In(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: a,
        iconWidth: o
      } = t;
      const s = {
        transform: "translate(".concat(a / 2, " 256)")
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), u = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), c = "rotate(".concat(r.rotate, " 0 0)"), m = {
        transform: "".concat(l, " ").concat(u, " ").concat(c)
      }, b = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, g = {
        outer: s,
        inner: m,
        path: b
      };
      return {
        tag: "g",
        attributes: d({}, g.outer),
        children: [{
          tag: "g",
          attributes: d({}, g.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: d(d({}, n.icon.attributes), g.path)
          }]
        }]
      };
    };
  }
};
const ct = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function jn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function No(e) {
  return e.tag === "g" ? e.children : [e];
}
var Io = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Be(n.split(" ").map((a) => a.trim())) : mr();
        return r.prefix || (r.prefix = de()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        mask: o,
        maskId: s,
        transform: l
      } = t;
      const {
        width: u,
        icon: c
      } = a, {
        width: m,
        icon: b
      } = o, g = wa({
        transform: l,
        containerWidth: m,
        iconWidth: u
      }), _ = {
        tag: "rect",
        attributes: d(d({}, ct), {}, {
          fill: "white"
        })
      }, I = c.children ? {
        children: c.children.map(jn)
      } : {}, O = {
        tag: "g",
        attributes: d({}, g.inner),
        children: [jn(d({
          tag: c.tag,
          attributes: d(d({}, c.attributes), g.path)
        }, I))]
      }, w = {
        tag: "g",
        attributes: d({}, g.outer),
        children: [O]
      }, P = "mask-".concat(s || ke()), F = "clip-".concat(s || ke()), N = {
        tag: "mask",
        attributes: d(d({}, ct), {}, {
          id: P,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [_, w]
      }, D = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: F
          },
          children: No(b)
        }, N]
      };
      return n.push(D, {
        tag: "rect",
        attributes: d({
          fill: "currentColor",
          "clip-path": "url(#".concat(F, ")"),
          mask: "url(#".concat(P, ")")
        }, ct)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, jo = {
  provides(e) {
    let t = !1;
    ue.matchMedia && (t = ue.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: d(d({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const o = d(d({}, a), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: d(d({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || s.children.push({
        tag: "animate",
        attributes: d(d({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: d(d({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: d(d({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: d(d({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: d(d({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: d(d({}, o), {}, {
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
}, Mo = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Fo = [_a, vo, xo, Eo, Oo, ko, Co, Ro, Io, jo, Mo];
Ga(Fo, {
  mixoutsTo: K
});
K.noAuto;
K.config;
K.library;
K.dom;
const kt = K.parse;
K.findIconDefinition;
K.toHtml;
const Do = K.icon;
K.layer;
K.text;
K.counter;
function Mn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mn(Object(n), !0).forEach(function(r) {
      xe(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ge(e) {
  "@babel/helpers - typeof";
  return Ge = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ge(e);
}
function xe(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Lo(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function zo(e, t) {
  if (e == null) return {};
  var n = Lo(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ct(e) {
  return $o(e) || Yo(e) || Wo(e) || Uo();
}
function $o(e) {
  if (Array.isArray(e)) return Rt(e);
}
function Yo(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Wo(e, t) {
  if (e) {
    if (typeof e == "string") return Rt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Rt(e, t);
  }
}
function Rt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Uo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qo(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, o = e.bounce, s = e.shake, l = e.flash, u = e.spin, c = e.spinPulse, m = e.spinReverse, b = e.pulse, g = e.fixedWidth, _ = e.inverse, I = e.border, O = e.listItem, w = e.flip, P = e.size, F = e.rotation, N = e.pull, D = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": o,
    "fa-shake": s,
    "fa-flash": l,
    "fa-spin": u,
    "fa-spin-reverse": m,
    "fa-spin-pulse": c,
    "fa-pulse": b,
    "fa-fw": g,
    "fa-inverse": _,
    "fa-border": I,
    "fa-li": O,
    "fa-flip": w === !0,
    "fa-flip-horizontal": w === "horizontal" || w === "both",
    "fa-flip-vertical": w === "vertical" || w === "both"
  }, xe(t, "fa-".concat(P), typeof P < "u" && P !== null), xe(t, "fa-rotate-".concat(F), typeof F < "u" && F !== null && F !== 0), xe(t, "fa-pull-".concat(N), typeof N < "u" && N !== null), xe(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(D).map(function(p) {
    return D[p] ? p : null;
  }).filter(function(p) {
    return p;
  });
}
function Go(e) {
  return e = e - 0, e === e;
}
function xr(e) {
  return Go(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Vo = ["style"];
function Ho(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Xo(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = xr(n.slice(0, r)), o = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Ho(a)] = o : t[a] = o, t;
  }, {});
}
function Er(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(u) {
    return Er(e, u);
  }), a = Object.keys(t.attributes || {}).reduce(function(u, c) {
    var m = t.attributes[c];
    switch (c) {
      case "class":
        u.attrs.className = m, delete t.attributes.class;
        break;
      case "style":
        u.attrs.style = Xo(m);
        break;
      default:
        c.indexOf("aria-") === 0 || c.indexOf("data-") === 0 ? u.attrs[c.toLowerCase()] = m : u.attrs[xr(c)] = m;
    }
    return u;
  }, {
    attrs: {}
  }), o = n.style, s = o === void 0 ? {} : o, l = zo(n, Vo);
  return a.attrs.style = ne(ne({}, a.attrs.style), s), e.apply(void 0, [t.tag, ne(ne({}, a.attrs), l)].concat(Ct(r)));
}
var Or = !1;
try {
  Or = process.env.NODE_ENV === "production";
} catch {
}
function Bo() {
  if (!Or && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Fn(e) {
  if (e && Ge(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (kt.icon)
    return kt.icon(e);
  if (e === null)
    return null;
  if (e && Ge(e) === "object" && e.prefix && e.iconName)
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
function ft(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? xe({}, e, t) : {};
}
var Dn = {
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
}, he = /* @__PURE__ */ It.forwardRef(function(e, t) {
  var n = ne(ne({}, Dn), e), r = n.icon, a = n.mask, o = n.symbol, s = n.className, l = n.title, u = n.titleId, c = n.maskId, m = Fn(r), b = ft("classes", [].concat(Ct(qo(n)), Ct((s || "").split(" ")))), g = ft("transform", typeof n.transform == "string" ? kt.transform(n.transform) : n.transform), _ = ft("mask", Fn(a)), I = Do(m, ne(ne(ne(ne({}, b), g), _), {}, {
    symbol: o,
    title: l,
    titleId: u,
    maskId: c
  }));
  if (!I)
    return Bo("Could not find icon", m), null;
  var O = I.abstract, w = {
    ref: t
  };
  return Object.keys(n).forEach(function(P) {
    Dn.hasOwnProperty(P) || (w[P] = n[P]);
  }), Ko(O[0], w);
});
he.displayName = "FontAwesomeIcon";
he.propTypes = {
  beat: h.bool,
  border: h.bool,
  beatFade: h.bool,
  bounce: h.bool,
  className: h.string,
  fade: h.bool,
  flash: h.bool,
  mask: h.oneOfType([h.object, h.array, h.string]),
  maskId: h.string,
  fixedWidth: h.bool,
  inverse: h.bool,
  flip: h.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: h.oneOfType([h.object, h.array, h.string]),
  listItem: h.bool,
  pull: h.oneOf(["right", "left"]),
  pulse: h.bool,
  rotation: h.oneOf([0, 90, 180, 270]),
  shake: h.bool,
  size: h.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: h.bool,
  spinPulse: h.bool,
  spinReverse: h.bool,
  symbol: h.oneOfType([h.bool, h.string]),
  title: h.string,
  titleId: h.string,
  transform: h.oneOfType([h.string, h.object]),
  swapOpacity: h.bool
};
var Ko = Er.bind(null, It.createElement);
const Nt = ({
  children: e,
  variant: t = "default",
  size: n = "default",
  disabled: r = !1,
  ariaDisabled: a = !1,
  unstyled: o = !1,
  onClick: s,
  type: l = "button",
  startIcon: u,
  endIcon: c,
  className: m,
  ...b
}) => {
  const g = "usa-button", _ = t !== "default" ? `${g}--${t}` : "", I = n === "big" ? `${g}--big` : "", O = o ? `${g}--unstyled` : "", w = [
    g,
    _,
    I,
    O,
    m
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ Y.jsxs(
    "button",
    {
      type: l,
      className: w,
      onClick: s,
      disabled: r,
      "aria-disabled": a || r,
      ...b,
      children: [
        u && /* @__PURE__ */ Y.jsx("span", { className: "usa-button__icon usa-button__icon--left", children: /* @__PURE__ */ Y.jsx(he, { icon: u }) }),
        e,
        c && /* @__PURE__ */ Y.jsx("span", { className: "usa-button__icon usa-button__icon--right", children: /* @__PURE__ */ Y.jsx(he, { icon: c }) })
      ]
    }
  );
};
Nt.propTypes = {
  children: h.node.isRequired,
  variant: h.oneOf([
    "default",
    "secondary",
    "accent-cool",
    "accent-warm",
    "base",
    "outline",
    "outline-inverse"
  ]),
  size: h.oneOf(["default", "big"]),
  disabled: h.bool,
  ariaDisabled: h.bool,
  unstyled: h.bool,
  onClick: h.func,
  type: h.oneOf(["button", "submit", "reset"]),
  startIcon: h.oneOfType([h.object, h.array, h.string]),
  endIcon: h.oneOfType([h.object, h.array, h.string]),
  className: h.string
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const ut = {
  prefix: "fas",
  iconName: "language",
  icon: [640, 512, [], "f1ab", "M0 128C0 92.7 28.7 64 64 64l192 0 48 0 16 0 256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-256 0-16 0-48 0L64 448c-35.3 0-64-28.7-64-64L0 128zm320 0l0 256 256 0 0-256-256 0zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1 73.6 0 8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276l-38 0 19-42.8zM448 164c11 0 20 9 20 20l0 4 44 0 16 0c11 0 20 9 20 20s-9 20-20 20l-2 0-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45L448 228l-72 0c-11 0-20-9-20-20s9-20 20-20l52 0 0-4c0-11 9-20 20-20z"]
}, Jo = () => {
  if (typeof window > "u") return !1;
  const e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t = ("ontouchstart" in window || navigator.maxTouchPoints > 0) && window.matchMedia("(pointer: coarse)").matches, n = window.matchMedia("(max-width: 768px)").matches;
  return e || t && n;
}, Zo = (e, t) => {
  dt(() => {
    const n = (r) => {
      !e.current || e.current.contains(r.target) || t(r);
    };
    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
      document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n);
    };
  }, [e, t]);
}, Qo = [
  { code: "en", nativeName: "English", englishName: "English" },
  { code: "es", nativeName: "Español", englishName: "Spanish" },
  { code: "fr", nativeName: "Français", englishName: "French" },
  { code: "ar", nativeName: "العربية", englishName: "Arabic" },
  { code: "zh", nativeName: "简体字", englishName: "Chinese - Simplified" },
  { code: "it", nativeName: "Italiano", englishName: "Italian" }
], ei = ({
  languages: e = Qo,
  selectedLanguage: t = "en",
  onLanguageChange: n,
  variant: r = "default",
  buttonText: a = "Languages",
  buttonVariant: o = "default",
  buttonSize: s = "default",
  className: l,
  id: u = "language-selector",
  disabled: c = !1,
  showFooterText: m = !0,
  footerText: b = "Selected content in additional languages",
  ariaLabel: g = "Select language",
  showIcon: _ = !1,
  ...I
}) => {
  const [O, w] = je(!1), [P, F] = je(-1), [N, D] = je(""), [p, B] = je(!1), H = Me(null), J = Me(null), Z = Me(null), oe = Me(null);
  Zo(H, () => w(!1)), dt(() => {
    B(Jo());
  }, []);
  const X = (y) => {
    if (y === "footer")
      return;
    const L = e.find((U) => U.code === y);
    n && L && n(y, L), w(!1), F(-1);
  }, ce = (y) => {
    const L = N + y.toLowerCase();
    D(L);
    const U = e.findIndex(
      (ee) => ee.nativeName.toLowerCase().startsWith(L) || ee.englishName.toLowerCase().startsWith(L)
    );
    U !== -1 && F(U), oe.current && clearTimeout(oe.current), oe.current = setTimeout(() => D(""), 500);
  }, Q = (y) => {
    var L;
    !O && (y.key === "ArrowDown" || y.key === "Enter" || y.key === " ") ? (w(!0), F(0), y.preventDefault()) : O && (y.key === "ArrowDown" ? (F((U) => (U + 1) % e.length), y.preventDefault()) : y.key === "ArrowUp" ? (F((U) => (U - 1 + e.length) % e.length), y.preventDefault()) : y.key === "Enter" || y.key === " " ? (P >= 0 && P < e.length && X(e[P].code), y.preventDefault()) : y.key === "Escape" ? (w(!1), F(-1), (L = J.current) == null || L.focus(), y.preventDefault()) : y.key === "Tab" ? (w(!1), F(-1)) : y.key.length === 1 && /^[a-z0-9]$/i.test(y.key) && ce(y.key));
  };
  dt(() => {
    if (O && P >= 0 && Z.current) {
      const y = Z.current.querySelector(`[data-index="${P}"]`);
      y && y.scrollIntoView({ block: "nearest" });
    }
  }, [O, P]);
  const V = at(
    "usa-language-selector",
    {
      "usa-language-selector--two-languages": r === "two-languages",
      "usa-language-selector--unstyled": r === "unstyled",
      "usa-language-selector--with-icon": _
    },
    l
  );
  if (r === "two-languages") {
    const y = e.find((L) => L.code !== t) || e[1];
    return /* @__PURE__ */ Y.jsx("div", { className: V, ...I, children: /* @__PURE__ */ Y.jsxs(
      Nt,
      {
        id: u,
        variant: o,
        size: s,
        disabled: c,
        onClick: () => X(y.code),
        "aria-label": g,
        className: "usa-language-selector__button",
        children: [
          _ && /* @__PURE__ */ Y.jsx(
            he,
            {
              icon: ut,
              className: "usa-language-selector__icon",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ Y.jsx("span", { lang: y.code, children: y.nativeName }),
          y.englishName !== y.nativeName && /* @__PURE__ */ Y.jsx("span", { className: "usa-language-selector__english-name", children: ` (${y.englishName})` })
        ]
      }
    ) });
  }
  return p ? /* @__PURE__ */ Y.jsx("div", { className: V, ref: H, ...I, children: /* @__PURE__ */ Y.jsxs(
    "select",
    {
      id: u,
      className: "usa-language-selector__native-select",
      value: t || "",
      onChange: (y) => X(y.target.value),
      disabled: c,
      "aria-label": g,
      children: [
        /* @__PURE__ */ Y.jsx("option", { value: "", disabled: !0, children: a }),
        e.map((y) => /* @__PURE__ */ Y.jsx("option", { value: y.code, children: y.nativeName !== y.englishName ? `${y.nativeName} (${y.englishName})` : y.nativeName }, y.code))
      ]
    }
  ) }) : r === "unstyled" ? /* @__PURE__ */ Y.jsxs("div", { className: V, ref: H, ...I, children: [
    /* @__PURE__ */ Y.jsxs(
      "button",
      {
        type: "button",
        id: u,
        ref: J,
        className: "usa-language-selector__button usa-language-selector__button--unstyled",
        onClick: () => !c && w(!O),
        onKeyDown: Q,
        disabled: c,
        "aria-haspopup": "listbox",
        "aria-expanded": O,
        "aria-controls": `${u}-menu`,
        "aria-label": g,
        "aria-activedescendant": O && P >= 0 ? `${u}-option-${P}` : void 0,
        children: [
          _ && /* @__PURE__ */ Y.jsx(
            he,
            {
              icon: ut,
              className: "usa-language-selector__icon",
              "aria-hidden": "true"
            }
          ),
          a
        ]
      }
    ),
    O && /* @__PURE__ */ Y.jsxs(
      "ul",
      {
        id: `${u}-menu`,
        ref: Z,
        className: "usa-language-selector__menu",
        role: "listbox",
        "aria-labelledby": u,
        onKeyDown: Q,
        children: [
          e.map((y, L) => /* @__PURE__ */ Y.jsxs(
            "li",
            {
              id: `${u}-option-${L}`,
              "data-index": L,
              className: at("usa-language-selector__option", {
                "usa-language-selector__option--selected": t === y.code,
                "usa-language-selector__option--active": P === L
              }),
              onClick: () => X(y.code),
              role: "option",
              "aria-selected": t === y.code,
              children: [
                /* @__PURE__ */ Y.jsx("span", { lang: y.code, children: y.nativeName }),
                y.englishName !== y.nativeName && /* @__PURE__ */ Y.jsx("span", { className: "usa-language-selector__english-name", children: ` (${y.englishName})` })
              ]
            },
            y.code
          )),
          m && /* @__PURE__ */ Y.jsx(
            "li",
            {
              className: "usa-language-selector__footer",
              role: "presentation",
              children: b
            }
          )
        ]
      }
    )
  ] }) : /* @__PURE__ */ Y.jsxs("div", { className: V, ref: H, ...I, children: [
    /* @__PURE__ */ Y.jsxs(
      Nt,
      {
        id: u,
        ref: J,
        variant: o,
        size: s,
        disabled: c,
        onClick: () => !c && w(!O),
        onKeyDown: Q,
        className: "usa-language-selector__button",
        "aria-haspopup": "listbox",
        "aria-expanded": O,
        "aria-controls": `${u}-menu`,
        "aria-label": g,
        "aria-activedescendant": O && P >= 0 ? `${u}-option-${P}` : void 0,
        children: [
          _ && /* @__PURE__ */ Y.jsx(
            he,
            {
              icon: ut,
              className: "usa-language-selector__icon",
              "aria-hidden": "true"
            }
          ),
          a
        ]
      }
    ),
    O && /* @__PURE__ */ Y.jsxs(
      "ul",
      {
        id: `${u}-menu`,
        ref: Z,
        className: "usa-language-selector__menu",
        role: "listbox",
        "aria-labelledby": u,
        onKeyDown: Q,
        children: [
          e.map((y, L) => /* @__PURE__ */ Y.jsxs(
            "li",
            {
              id: `${u}-option-${L}`,
              "data-index": L,
              className: at("usa-language-selector__option", {
                "usa-language-selector__option--selected": t === y.code,
                "usa-language-selector__option--active": P === L
              }),
              onClick: () => X(y.code),
              role: "option",
              "aria-selected": t === y.code,
              children: [
                /* @__PURE__ */ Y.jsx("span", { lang: y.code, children: y.nativeName }),
                y.englishName !== y.nativeName && /* @__PURE__ */ Y.jsx("span", { className: "usa-language-selector__english-name", children: ` (${y.englishName})` })
              ]
            },
            y.code
          )),
          m && /* @__PURE__ */ Y.jsx(
            "li",
            {
              className: "usa-language-selector__footer",
              role: "presentation",
              children: b
            }
          )
        ]
      }
    )
  ] });
};
ei.propTypes = {
  /** Array of language objects with code, nativeName, and englishName */
  languages: h.arrayOf(
    h.shape({
      code: h.string.isRequired,
      nativeName: h.string.isRequired,
      englishName: h.string.isRequired
    })
  ),
  /** Currently selected language code */
  selectedLanguage: h.string,
  /** Callback function when language is changed */
  onLanguageChange: h.func,
  /** Component variant */
  variant: h.oneOf(["default", "two-languages", "unstyled"]),
  /** Text to display on the button */
  buttonText: h.string,
  /** Button variant for styling */
  buttonVariant: h.oneOf([
    "default",
    "secondary",
    "accent-cool",
    "accent-warm",
    "base",
    "outline",
    "outline-inverse"
  ]),
  /** Button size */
  buttonSize: h.oneOf(["default", "big"]),
  /** Additional CSS classes */
  className: h.string,
  /** Component ID for accessibility */
  id: h.string,
  /** Whether the component is disabled */
  disabled: h.bool,
  /** Whether to show footer text */
  showFooterText: h.bool,
  /** Custom footer text */
  footerText: h.string,
  /** ARIA label for the component */
  ariaLabel: h.string,
  /** Whether to show the language icon */
  showIcon: h.bool
};
export {
  ei as LanguageSelector
};
//# sourceMappingURL=index.js.map
