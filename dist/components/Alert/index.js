import Tt from "react";
function yr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ne = { exports: {} }, Oe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt;
function br() {
  if (Yt) return Oe;
  Yt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, o) {
    var s = null;
    if (o !== void 0 && (s = "" + o), a.key !== void 0 && (s = "" + a.key), "key" in a) {
      o = {};
      for (var f in a)
        f !== "key" && (o[f] = a[f]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return Oe.Fragment = t, Oe.jsx = n, Oe.jsxs = n, Oe;
}
var Pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t;
function vr() {
  return $t || ($t = 1, process.env.NODE_ENV !== "production" && function() {
    function e(i) {
      if (i == null) return null;
      if (typeof i == "function")
        return i.$$typeof === Ee ? null : i.displayName || i.name || null;
      if (typeof i == "string") return i;
      switch (i) {
        case k:
          return "Fragment";
        case N:
          return "Profiler";
        case _:
          return "StrictMode";
        case p:
          return "Suspense";
        case q:
          return "SuspenseList";
        case xe:
          return "Activity";
      }
      if (typeof i == "object")
        switch (typeof i.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), i.$$typeof) {
          case D:
            return "Portal";
          case I:
            return (i.displayName || "Context") + ".Provider";
          case L:
            return (i._context.displayName || "Context") + ".Consumer";
          case j:
            var c = i.render;
            return i = i.displayName, i || (i = c.displayName || c.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
          case K:
            return c = i.displayName || null, c !== null ? c : e(i.type) || "Memo";
          case te:
            c = i._payload, i = i._init;
            try {
              return e(i(c));
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
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var b = c.error, x = typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return b.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), t(i);
      }
    }
    function r(i) {
      if (i === k) return "<>";
      if (typeof i == "object" && i !== null && i.$$typeof === te)
        return "<...>";
      try {
        var c = e(i);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var i = ne.A;
      return i === null ? null : i.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(i) {
      if (de.call(i, "key")) {
        var c = Object.getOwnPropertyDescriptor(i, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return i.key !== void 0;
    }
    function f(i, c) {
      function b() {
        me || (me = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      b.isReactWarning = !0, Object.defineProperty(i, "key", {
        get: b,
        configurable: !0
      });
    }
    function m() {
      var i = e(this.type);
      return W[i] || (W[i] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), i = this.props.ref, i !== void 0 ? i : null;
    }
    function u(i, c, b, x, E, O, T, w) {
      return b = O.ref, i = {
        $$typeof: S,
        type: i,
        key: c,
        props: O,
        _owner: E
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(i, "ref", {
        enumerable: !1,
        get: m
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
        value: T
      }), Object.defineProperty(i, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    }
    function d(i, c, b, x, E, O, T, w) {
      var A = c.children;
      if (A !== void 0)
        if (x)
          if (Ae(A)) {
            for (x = 0; x < A.length; x++)
              h(A[x]);
            Object.freeze && Object.freeze(A);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(A);
      if (de.call(c, "key")) {
        A = e(i);
        var C = Object.keys(c).filter(function(Y) {
          return Y !== "key";
        });
        x = 0 < C.length ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}", pe[A + x] || (C = 0 < C.length ? "{" + C.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          A,
          C,
          A
        ), pe[A + x] = !0);
      }
      if (A = null, b !== void 0 && (n(b), A = "" + b), s(c) && (n(c.key), A = "" + c.key), "key" in c) {
        b = {};
        for (var R in c)
          R !== "key" && (b[R] = c[R]);
      } else b = c;
      return A && f(
        b,
        typeof i == "function" ? i.displayName || i.name || "Unknown" : i
      ), u(
        i,
        A,
        O,
        E,
        a(),
        b,
        T,
        w
      );
    }
    function h(i) {
      typeof i == "object" && i !== null && i.$$typeof === S && i._store && (i._store.validated = 1);
    }
    var y = Tt, S = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), I = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), xe = Symbol.for("react.activity"), Ee = Symbol.for("react.client.reference"), ne = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = Object.prototype.hasOwnProperty, Ae = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      "react-stack-bottom-frame": function(i) {
        return i();
      }
    };
    var me, W = {}, H = y["react-stack-bottom-frame"].bind(
      y,
      o
    )(), se = G(r(o)), pe = {};
    Pe.Fragment = k, Pe.jsx = function(i, c, b, x, E) {
      var O = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return d(
        i,
        c,
        b,
        !1,
        x,
        E,
        O ? Error("react-stack-top-frame") : H,
        O ? G(r(i)) : se
      );
    }, Pe.jsxs = function(i, c, b, x, E) {
      var O = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return d(
        i,
        c,
        b,
        !0,
        x,
        E,
        O ? Error("react-stack-top-frame") : H,
        O ? G(r(i)) : se
      );
    };
  }()), Pe;
}
var Wt;
function xr() {
  return Wt || (Wt = 1, process.env.NODE_ENV === "production" ? Ne.exports = br() : Ne.exports = vr()), Ne.exports;
}
var fe = xr(), je = { exports: {} }, Me = { exports: {} }, M = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ut;
function Er() {
  if (Ut) return M;
  Ut = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, D = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
  function I(p) {
    if (typeof p == "object" && p !== null) {
      var q = p.$$typeof;
      switch (q) {
        case t:
          switch (p = p.type, p) {
            case m:
            case u:
            case r:
            case o:
            case a:
            case h:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case f:
                case d:
                case D:
                case S:
                case s:
                  return p;
                default:
                  return q;
              }
          }
        case n:
          return q;
      }
    }
  }
  function j(p) {
    return I(p) === u;
  }
  return M.AsyncMode = m, M.ConcurrentMode = u, M.ContextConsumer = f, M.ContextProvider = s, M.Element = t, M.ForwardRef = d, M.Fragment = r, M.Lazy = D, M.Memo = S, M.Portal = n, M.Profiler = o, M.StrictMode = a, M.Suspense = h, M.isAsyncMode = function(p) {
    return j(p) || I(p) === m;
  }, M.isConcurrentMode = j, M.isContextConsumer = function(p) {
    return I(p) === f;
  }, M.isContextProvider = function(p) {
    return I(p) === s;
  }, M.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, M.isForwardRef = function(p) {
    return I(p) === d;
  }, M.isFragment = function(p) {
    return I(p) === r;
  }, M.isLazy = function(p) {
    return I(p) === D;
  }, M.isMemo = function(p) {
    return I(p) === S;
  }, M.isPortal = function(p) {
    return I(p) === n;
  }, M.isProfiler = function(p) {
    return I(p) === o;
  }, M.isStrictMode = function(p) {
    return I(p) === a;
  }, M.isSuspense = function(p) {
    return I(p) === h;
  }, M.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === u || p === o || p === a || p === h || p === y || typeof p == "object" && p !== null && (p.$$typeof === D || p.$$typeof === S || p.$$typeof === s || p.$$typeof === f || p.$$typeof === d || p.$$typeof === _ || p.$$typeof === N || p.$$typeof === L || p.$$typeof === k);
  }, M.typeOf = I, M;
}
var F = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function Ar() {
  return qt || (qt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, D = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
    function I(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === r || g === u || g === o || g === a || g === h || g === y || typeof g == "object" && g !== null && (g.$$typeof === D || g.$$typeof === S || g.$$typeof === s || g.$$typeof === f || g.$$typeof === d || g.$$typeof === _ || g.$$typeof === N || g.$$typeof === L || g.$$typeof === k);
    }
    function j(g) {
      if (typeof g == "object" && g !== null) {
        var V = g.$$typeof;
        switch (V) {
          case t:
            var Ie = g.type;
            switch (Ie) {
              case m:
              case u:
              case r:
              case o:
              case a:
              case h:
                return Ie;
              default:
                var zt = Ie && Ie.$$typeof;
                switch (zt) {
                  case f:
                  case d:
                  case D:
                  case S:
                  case s:
                    return zt;
                  default:
                    return V;
                }
            }
          case n:
            return V;
        }
      }
    }
    var p = m, q = u, K = f, te = s, xe = t, Ee = d, ne = r, de = D, Ae = S, G = n, me = o, W = a, H = h, se = !1;
    function pe(g) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), i(g) || j(g) === m;
    }
    function i(g) {
      return j(g) === u;
    }
    function c(g) {
      return j(g) === f;
    }
    function b(g) {
      return j(g) === s;
    }
    function x(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function E(g) {
      return j(g) === d;
    }
    function O(g) {
      return j(g) === r;
    }
    function T(g) {
      return j(g) === D;
    }
    function w(g) {
      return j(g) === S;
    }
    function A(g) {
      return j(g) === n;
    }
    function C(g) {
      return j(g) === o;
    }
    function R(g) {
      return j(g) === a;
    }
    function Y(g) {
      return j(g) === h;
    }
    F.AsyncMode = p, F.ConcurrentMode = q, F.ContextConsumer = K, F.ContextProvider = te, F.Element = xe, F.ForwardRef = Ee, F.Fragment = ne, F.Lazy = de, F.Memo = Ae, F.Portal = G, F.Profiler = me, F.StrictMode = W, F.Suspense = H, F.isAsyncMode = pe, F.isConcurrentMode = i, F.isContextConsumer = c, F.isContextProvider = b, F.isElement = x, F.isForwardRef = E, F.isFragment = O, F.isLazy = T, F.isMemo = w, F.isPortal = A, F.isProfiler = C, F.isStrictMode = R, F.isSuspense = Y, F.isValidElementType = I, F.typeOf = j;
  }()), F;
}
var Gt;
function In() {
  return Gt || (Gt = 1, process.env.NODE_ENV === "production" ? Me.exports = Er() : Me.exports = Ar()), Me.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Xe, Ht;
function Or() {
  if (Ht) return Xe;
  Ht = 1;
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
      for (var s = {}, f = 0; f < 10; f++)
        s["_" + String.fromCharCode(f)] = f;
      var m = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Xe = a() ? Object.assign : function(o, s) {
    for (var f, m = r(o), u, d = 1; d < arguments.length; d++) {
      f = Object(arguments[d]);
      for (var h in f)
        t.call(f, h) && (m[h] = f[h]);
      if (e) {
        u = e(f);
        for (var y = 0; y < u.length; y++)
          n.call(f, u[y]) && (m[u[y]] = f[u[y]]);
      }
    }
    return m;
  }, Xe;
}
var Be, Vt;
function St() {
  if (Vt) return Be;
  Vt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Be = e, Be;
}
var Je, Xt;
function Nn() {
  return Xt || (Xt = 1, Je = Function.call.bind(Object.prototype.hasOwnProperty)), Je;
}
var Ke, Bt;
function Pr() {
  if (Bt) return Ke;
  Bt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ St(), n = {}, r = /* @__PURE__ */ Nn();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, f, m, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in o)
        if (r(o, d)) {
          var h;
          try {
            if (typeof o[d] != "function") {
              var y = Error(
                (m || "React class") + ": " + f + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            h = o[d](s, d, m, f, null, t);
          } catch (D) {
            h = D;
          }
          if (h && !(h instanceof Error) && e(
            (m || "React class") + ": type specification of " + f + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in n)) {
            n[h.message] = !0;
            var S = u ? u() : "";
            e(
              "Failed " + f + " type: " + h.message + (S ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Ke = a, Ke;
}
var Ze, Jt;
function Tr() {
  if (Jt) return Ze;
  Jt = 1;
  var e = In(), t = Or(), n = /* @__PURE__ */ St(), r = /* @__PURE__ */ Nn(), a = /* @__PURE__ */ Pr(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(f) {
    var m = "Warning: " + f;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Ze = function(f, m) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(i) {
      var c = i && (u && i[u] || i[d]);
      if (typeof c == "function")
        return c;
    }
    var y = "<<anonymous>>", S = {
      array: N("array"),
      bigint: N("bigint"),
      bool: N("boolean"),
      func: N("function"),
      number: N("number"),
      object: N("object"),
      string: N("string"),
      symbol: N("symbol"),
      any: L(),
      arrayOf: I,
      element: j(),
      elementType: p(),
      instanceOf: q,
      node: Ee(),
      objectOf: te,
      oneOf: K,
      oneOfType: xe,
      shape: de,
      exact: Ae
    };
    function D(i, c) {
      return i === c ? i !== 0 || 1 / i === 1 / c : i !== i && c !== c;
    }
    function k(i, c) {
      this.message = i, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    k.prototype = Error.prototype;
    function _(i) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, b = 0;
      function x(O, T, w, A, C, R, Y) {
        if (A = A || y, R = R || w, Y !== n) {
          if (m) {
            var g = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw g.name = "Invariant Violation", g;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var V = A + ":" + w;
            !c[V] && // Avoid spamming the console because they are often not actionable except for lib authors
            b < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + R + "` prop on `" + A + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[V] = !0, b++);
          }
        }
        return T[w] == null ? O ? T[w] === null ? new k("The " + C + " `" + R + "` is marked as required " + ("in `" + A + "`, but its value is `null`.")) : new k("The " + C + " `" + R + "` is marked as required in " + ("`" + A + "`, but its value is `undefined`.")) : null : i(T, w, A, C, R);
      }
      var E = x.bind(null, !1);
      return E.isRequired = x.bind(null, !0), E;
    }
    function N(i) {
      function c(b, x, E, O, T, w) {
        var A = b[x], C = W(A);
        if (C !== i) {
          var R = H(A);
          return new k(
            "Invalid " + O + " `" + T + "` of type " + ("`" + R + "` supplied to `" + E + "`, expected ") + ("`" + i + "`."),
            { expectedType: i }
          );
        }
        return null;
      }
      return _(c);
    }
    function L() {
      return _(s);
    }
    function I(i) {
      function c(b, x, E, O, T) {
        if (typeof i != "function")
          return new k("Property `" + T + "` of component `" + E + "` has invalid PropType notation inside arrayOf.");
        var w = b[x];
        if (!Array.isArray(w)) {
          var A = W(w);
          return new k("Invalid " + O + " `" + T + "` of type " + ("`" + A + "` supplied to `" + E + "`, expected an array."));
        }
        for (var C = 0; C < w.length; C++) {
          var R = i(w, C, E, O, T + "[" + C + "]", n);
          if (R instanceof Error)
            return R;
        }
        return null;
      }
      return _(c);
    }
    function j() {
      function i(c, b, x, E, O) {
        var T = c[b];
        if (!f(T)) {
          var w = W(T);
          return new k("Invalid " + E + " `" + O + "` of type " + ("`" + w + "` supplied to `" + x + "`, expected a single ReactElement."));
        }
        return null;
      }
      return _(i);
    }
    function p() {
      function i(c, b, x, E, O) {
        var T = c[b];
        if (!e.isValidElementType(T)) {
          var w = W(T);
          return new k("Invalid " + E + " `" + O + "` of type " + ("`" + w + "` supplied to `" + x + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return _(i);
    }
    function q(i) {
      function c(b, x, E, O, T) {
        if (!(b[x] instanceof i)) {
          var w = i.name || y, A = pe(b[x]);
          return new k("Invalid " + O + " `" + T + "` of type " + ("`" + A + "` supplied to `" + E + "`, expected ") + ("instance of `" + w + "`."));
        }
        return null;
      }
      return _(c);
    }
    function K(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function c(b, x, E, O, T) {
        for (var w = b[x], A = 0; A < i.length; A++)
          if (D(w, i[A]))
            return null;
        var C = JSON.stringify(i, function(Y, g) {
          var V = H(g);
          return V === "symbol" ? String(g) : g;
        });
        return new k("Invalid " + O + " `" + T + "` of value `" + String(w) + "` " + ("supplied to `" + E + "`, expected one of " + C + "."));
      }
      return _(c);
    }
    function te(i) {
      function c(b, x, E, O, T) {
        if (typeof i != "function")
          return new k("Property `" + T + "` of component `" + E + "` has invalid PropType notation inside objectOf.");
        var w = b[x], A = W(w);
        if (A !== "object")
          return new k("Invalid " + O + " `" + T + "` of type " + ("`" + A + "` supplied to `" + E + "`, expected an object."));
        for (var C in w)
          if (r(w, C)) {
            var R = i(w, C, E, O, T + "." + C, n);
            if (R instanceof Error)
              return R;
          }
        return null;
      }
      return _(c);
    }
    function xe(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var c = 0; c < i.length; c++) {
        var b = i[c];
        if (typeof b != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(b) + " at index " + c + "."
          ), s;
      }
      function x(E, O, T, w, A) {
        for (var C = [], R = 0; R < i.length; R++) {
          var Y = i[R], g = Y(E, O, T, w, A, n);
          if (g == null)
            return null;
          g.data && r(g.data, "expectedType") && C.push(g.data.expectedType);
        }
        var V = C.length > 0 ? ", expected one of type [" + C.join(", ") + "]" : "";
        return new k("Invalid " + w + " `" + A + "` supplied to " + ("`" + T + "`" + V + "."));
      }
      return _(x);
    }
    function Ee() {
      function i(c, b, x, E, O) {
        return G(c[b]) ? null : new k("Invalid " + E + " `" + O + "` supplied to " + ("`" + x + "`, expected a ReactNode."));
      }
      return _(i);
    }
    function ne(i, c, b, x, E) {
      return new k(
        (i || "React class") + ": " + c + " type `" + b + "." + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + E + "`."
      );
    }
    function de(i) {
      function c(b, x, E, O, T) {
        var w = b[x], A = W(w);
        if (A !== "object")
          return new k("Invalid " + O + " `" + T + "` of type `" + A + "` " + ("supplied to `" + E + "`, expected `object`."));
        for (var C in i) {
          var R = i[C];
          if (typeof R != "function")
            return ne(E, O, T, C, H(R));
          var Y = R(w, C, E, O, T + "." + C, n);
          if (Y)
            return Y;
        }
        return null;
      }
      return _(c);
    }
    function Ae(i) {
      function c(b, x, E, O, T) {
        var w = b[x], A = W(w);
        if (A !== "object")
          return new k("Invalid " + O + " `" + T + "` of type `" + A + "` " + ("supplied to `" + E + "`, expected `object`."));
        var C = t({}, b[x], i);
        for (var R in C) {
          var Y = i[R];
          if (r(i, R) && typeof Y != "function")
            return ne(E, O, T, R, H(Y));
          if (!Y)
            return new k(
              "Invalid " + O + " `" + T + "` key `" + R + "` supplied to `" + E + "`.\nBad object: " + JSON.stringify(b[x], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(i), null, "  ")
            );
          var g = Y(w, R, E, O, T + "." + R, n);
          if (g)
            return g;
        }
        return null;
      }
      return _(c);
    }
    function G(i) {
      switch (typeof i) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !i;
        case "object":
          if (Array.isArray(i))
            return i.every(G);
          if (i === null || f(i))
            return !0;
          var c = h(i);
          if (c) {
            var b = c.call(i), x;
            if (c !== i.entries) {
              for (; !(x = b.next()).done; )
                if (!G(x.value))
                  return !1;
            } else
              for (; !(x = b.next()).done; ) {
                var E = x.value;
                if (E && !G(E[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function me(i, c) {
      return i === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function W(i) {
      var c = typeof i;
      return Array.isArray(i) ? "array" : i instanceof RegExp ? "object" : me(c, i) ? "symbol" : c;
    }
    function H(i) {
      if (typeof i > "u" || i === null)
        return "" + i;
      var c = W(i);
      if (c === "object") {
        if (i instanceof Date)
          return "date";
        if (i instanceof RegExp)
          return "regexp";
      }
      return c;
    }
    function se(i) {
      var c = H(i);
      switch (c) {
        case "array":
        case "object":
          return "an " + c;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + c;
        default:
          return c;
      }
    }
    function pe(i) {
      return !i.constructor || !i.constructor.name ? y : i.constructor.name;
    }
    return S.checkPropTypes = a, S.resetWarningCache = a.resetWarningCache, S.PropTypes = S, S;
  }, Ze;
}
var Qe, Kt;
function Sr() {
  if (Kt) return Qe;
  Kt = 1;
  var e = /* @__PURE__ */ St();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Qe = function() {
    function r(s, f, m, u, d, h) {
      if (h !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
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
  }, Qe;
}
var Zt;
function wr() {
  if (Zt) return je.exports;
  if (Zt = 1, process.env.NODE_ENV !== "production") {
    var e = In(), t = !0;
    je.exports = /* @__PURE__ */ Tr()(e.isElement, t);
  } else
    je.exports = /* @__PURE__ */ Sr()();
  return je.exports;
}
var _r = /* @__PURE__ */ wr();
const P = /* @__PURE__ */ yr(_r);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function kr(e, t, n) {
  return (t = Rr(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Qt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qt(Object(n), !0).forEach(function(r) {
      kr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qt(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Cr(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Rr(e) {
  var t = Cr(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const en = () => {
};
let wt = {}, jn = {}, Mn = null, Fn = {
  mark: en,
  measure: en
};
try {
  typeof window < "u" && (wt = window), typeof document < "u" && (jn = document), typeof MutationObserver < "u" && (Mn = MutationObserver), typeof performance < "u" && (Fn = performance);
} catch {
}
const {
  userAgent: tn = ""
} = wt.navigator || {}, ae = wt, z = jn, nn = Mn, Fe = Fn;
ae.document;
const ee = !!z.documentElement && !!z.head && typeof z.addEventListener == "function" && typeof z.createElement == "function", Dn = ~tn.indexOf("MSIE") || ~tn.indexOf("Trident/");
var Ir = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Nr = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Ln = {
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
}, jr = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, zn = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], $ = "classic", Ue = "duotone", Mr = "sharp", Fr = "sharp-duotone", Yn = [$, Ue, Mr, Fr], Dr = {
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
}, Lr = {
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
}, zr = /* @__PURE__ */ new Map([["classic", {
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
}]]), Yr = {
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
}, $r = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], rn = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Wr = ["kit"], Ur = {
  kit: {
    "fa-kit": "fak"
  }
}, qr = ["fak", "fakd"], Gr = {
  kit: {
    fak: "fa-kit"
  }
}, an = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, De = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Hr = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Vr = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Xr = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Br = {
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
}, Jr = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, it = {
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
}, Kr = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], st = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Hr, ...Kr], Zr = ["solid", "regular", "light", "thin", "duotone", "brands"], $n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Qr = $n.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ea = [...Object.keys(Jr), ...Zr, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", De.GROUP, De.SWAP_OPACITY, De.PRIMARY, De.SECONDARY].concat($n.map((e) => "".concat(e, "x"))).concat(Qr.map((e) => "w-".concat(e))), ta = {
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
const Z = "___FONT_AWESOME___", ft = 16, Wn = "fa", Un = "svg-inline--fa", le = "data-fa-i2svg", ct = "data-fa-pseudo-element", na = "data-fa-pseudo-element-pending", _t = "data-prefix", kt = "data-icon", on = "fontawesome-i2svg", ra = "async", aa = ["HTML", "HEAD", "STYLE", "SCRIPT"], qn = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Ce(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[$];
    }
  });
}
const Gn = l({}, Ln);
Gn[$] = l(l(l(l({}, {
  "fa-duotone": "duotone"
}), Ln[$]), rn.kit), rn["kit-duotone"]);
const oa = Ce(Gn), lt = l({}, Yr);
lt[$] = l(l(l(l({}, {
  duotone: "fad"
}), lt[$]), an.kit), an["kit-duotone"]);
const sn = Ce(lt), ut = l({}, it);
ut[$] = l(l({}, ut[$]), Gr.kit);
const Ct = Ce(ut), dt = l({}, Br);
dt[$] = l(l({}, dt[$]), Ur.kit);
Ce(dt);
const ia = Ir, Hn = "fa-layers-text", sa = Nr, fa = l({}, Dr);
Ce(fa);
const ca = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], et = jr, la = [...Wr, ...ea], Se = ae.FontAwesomeConfig || {};
function ua(e) {
  var t = z.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function da(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
z && typeof z.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = da(ua(n));
  a != null && (Se[r] = a);
});
const Vn = {
  styleDefault: "solid",
  familyDefault: $,
  cssPrefix: Wn,
  replacementClass: Un,
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
Se.familyPrefix && (Se.cssPrefix = Se.familyPrefix);
const be = l(l({}, Vn), Se);
be.autoReplaceSvg || (be.observeMutations = !1);
const v = {};
Object.keys(Vn).forEach((e) => {
  Object.defineProperty(v, e, {
    enumerable: !0,
    set: function(t) {
      be[e] = t, we.forEach((n) => n(v));
    },
    get: function() {
      return be[e];
    }
  });
});
Object.defineProperty(v, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    be.cssPrefix = e, we.forEach((t) => t(v));
  },
  get: function() {
    return be.cssPrefix;
  }
});
ae.FontAwesomeConfig = v;
const we = [];
function ma(e) {
  return we.push(e), () => {
    we.splice(we.indexOf(e), 1);
  };
}
const re = ft, B = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function pa(e) {
  if (!e || !ee)
    return;
  const t = z.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = z.head.childNodes;
  let r = null;
  for (let a = n.length - 1; a > -1; a--) {
    const o = n[a], s = (o.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (r = o);
  }
  return z.head.insertBefore(t, r), e;
}
const ga = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function _e() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += ga[Math.random() * 62 | 0];
  return t;
}
function ve(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Rt(e) {
  return e.classList ? ve(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Xn(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ha(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Xn(e[n]), '" '), "").trim();
}
function qe(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function It(e) {
  return e.size !== B.size || e.x !== B.x || e.y !== B.y || e.rotate !== B.rotate || e.flipX || e.flipY;
}
function ya(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), f = "rotate(".concat(t.rotate, " 0 0)"), m = {
    transform: "".concat(o, " ").concat(s, " ").concat(f)
  }, u = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: m,
    path: u
  };
}
function ba(e) {
  let {
    transform: t,
    width: n = ft,
    height: r = ft,
    startCentered: a = !1
  } = e, o = "";
  return a && Dn ? o += "translate(".concat(t.x / re - n / 2, "em, ").concat(t.y / re - r / 2, "em) ") : a ? o += "translate(calc(-50% + ".concat(t.x / re, "em), calc(-50% + ").concat(t.y / re, "em)) ") : o += "translate(".concat(t.x / re, "em, ").concat(t.y / re, "em) "), o += "scale(".concat(t.size / re * (t.flipX ? -1 : 1), ", ").concat(t.size / re * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var va = `:root, :host {
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
function Bn() {
  const e = Wn, t = Un, n = v.cssPrefix, r = v.replacementClass;
  let a = va;
  if (n !== e || r !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), f = new RegExp("\\.".concat(t), "g");
    a = a.replace(o, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(f, ".".concat(r));
  }
  return a;
}
let fn = !1;
function tt() {
  v.autoAddCss && !fn && (pa(Bn()), fn = !0);
}
var xa = {
  mixout() {
    return {
      dom: {
        css: Bn,
        insertCss: tt
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        tt();
      },
      beforeI2svg() {
        tt();
      }
    };
  }
};
const Q = ae || {};
Q[Z] || (Q[Z] = {});
Q[Z].styles || (Q[Z].styles = {});
Q[Z].hooks || (Q[Z].hooks = {});
Q[Z].shims || (Q[Z].shims = []);
var J = Q[Z];
const Jn = [], Kn = function() {
  z.removeEventListener("DOMContentLoaded", Kn), Ye = 1, Jn.map((e) => e());
};
let Ye = !1;
ee && (Ye = (z.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(z.readyState), Ye || z.addEventListener("DOMContentLoaded", Kn));
function Ea(e) {
  ee && (Ye ? setTimeout(e, 0) : Jn.push(e));
}
function Re(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Xn(e) : "<".concat(t, " ").concat(ha(n), ">").concat(r.map(Re).join(""), "</").concat(t, ">");
}
function cn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var nt = function(t, n, r, a) {
  var o = Object.keys(t), s = o.length, f = n, m, u, d;
  for (r === void 0 ? (m = 1, d = t[o[0]]) : (m = 0, d = r); m < s; m++)
    u = o[m], d = f(d, t[u], u, t);
  return d;
};
function Aa(e) {
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
function mt(e) {
  const t = Aa(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Oa(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function ln(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function pt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = ln(t);
  typeof J.hooks.addPack == "function" && !r ? J.hooks.addPack(e, ln(t)) : J.styles[e] = l(l({}, J.styles[e] || {}), a), e === "fas" && pt("fa", t);
}
const {
  styles: ke,
  shims: Pa
} = J, Zn = Object.keys(Ct), Ta = Zn.reduce((e, t) => (e[t] = Object.keys(Ct[t]), e), {});
let Nt = null, Qn = {}, er = {}, tr = {}, nr = {}, rr = {};
function Sa(e) {
  return ~la.indexOf(e);
}
function wa(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Sa(a) ? a : null;
}
const ar = () => {
  const e = (r) => nt(ke, (a, o, s) => (a[s] = nt(o, r, {}), a), {});
  Qn = e((r, a, o) => (a[3] && (r[a[3]] = o), a[2] && a[2].filter((f) => typeof f == "number").forEach((f) => {
    r[f.toString(16)] = o;
  }), r)), er = e((r, a, o) => (r[o] = o, a[2] && a[2].filter((f) => typeof f == "string").forEach((f) => {
    r[f] = o;
  }), r)), rr = e((r, a, o) => {
    const s = a[2];
    return r[o] = o, s.forEach((f) => {
      r[f] = o;
    }), r;
  });
  const t = "far" in ke || v.autoFetchSvg, n = nt(Pa, (r, a) => {
    const o = a[0];
    let s = a[1];
    const f = a[2];
    return s === "far" && !t && (s = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: s,
      iconName: f
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: f
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  tr = n.names, nr = n.unicodes, Nt = Ge(v.styleDefault, {
    family: v.familyDefault
  });
};
ma((e) => {
  Nt = Ge(e.styleDefault, {
    family: v.familyDefault
  });
});
ar();
function jt(e, t) {
  return (Qn[e] || {})[t];
}
function _a(e, t) {
  return (er[e] || {})[t];
}
function ce(e, t) {
  return (rr[e] || {})[t];
}
function or(e) {
  return tr[e] || {
    prefix: null,
    iconName: null
  };
}
function ka(e) {
  const t = nr[e], n = jt("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function oe() {
  return Nt;
}
const ir = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Ca(e) {
  let t = $;
  const n = Zn.reduce((r, a) => (r[a] = "".concat(v.cssPrefix, "-").concat(a), r), {});
  return Yn.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => Ta[r].includes(a))) && (t = r);
  }), t;
}
function Ge(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = $
  } = t, r = oa[n][e];
  if (n === Ue && !e)
    return "fad";
  const a = sn[n][e] || sn[n][r], o = e in J.styles ? e : null;
  return a || o || null;
}
function Ra(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = wa(v.cssPrefix, r);
    a ? n = a : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function un(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function He(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const a = st.concat(Vr), o = un(e.filter((h) => a.includes(h))), s = un(e.filter((h) => !st.includes(h))), f = o.filter((h) => (r = h, !zn.includes(h))), [m = null] = f, u = Ca(o), d = l(l({}, Ra(s)), {}, {
    prefix: Ge(m, {
      family: u
    })
  });
  return l(l(l({}, d), Ma({
    values: e,
    family: u,
    styles: ke,
    config: v,
    canonical: d,
    givenPrefix: r
  })), Ia(n, r, d));
}
function Ia(e, t, n) {
  let {
    prefix: r,
    iconName: a
  } = n;
  if (e || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  const o = t === "fa" ? or(a) : {}, s = ce(r, a);
  return a = o.iconName || s || a, r = o.prefix || r, r === "far" && !ke.far && ke.fas && !v.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const Na = Yn.filter((e) => e !== $ || e !== Ue), ja = Object.keys(it).filter((e) => e !== $).map((e) => Object.keys(it[e])).flat();
function Ma(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: o = {},
    config: s = {}
  } = e, f = n === Ue, m = t.includes("fa-duotone") || t.includes("fad"), u = s.familyDefault === "duotone", d = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!f && (m || u || d) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Na.includes(n) && (Object.keys(o).find((y) => ja.includes(y)) || s.autoFetchSvg)) {
    const y = zr.get(n).defaultShortPrefixId;
    r.prefix = y, r.iconName = ce(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = oe() || "fas"), r;
}
class Fa {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((o) => {
      this.definitions[o] = l(l({}, this.definitions[o] || {}), a[o]), pt(o, a[o]);
      const s = Ct[$][o];
      s && pt(s, a[o]), ar();
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
        icon: f
      } = r[a], m = f[2];
      t[o] || (t[o] = {}), m.length > 0 && m.forEach((u) => {
        typeof u == "string" && (t[o][u] = f);
      }), t[o][s] = f;
    }), t;
  }
}
let dn = [], ge = {};
const ye = {}, Da = Object.keys(ye);
function La(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return dn = e, ge = {}, Object.keys(ye).forEach((r) => {
    Da.indexOf(r) === -1 && delete ye[r];
  }), dn.forEach((r) => {
    const a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach((o) => {
      typeof a[o] == "function" && (n[o] = a[o]), typeof a[o] == "object" && Object.keys(a[o]).forEach((s) => {
        n[o] || (n[o] = {}), n[o][s] = a[o][s];
      });
    }), r.hooks) {
      const o = r.hooks();
      Object.keys(o).forEach((s) => {
        ge[s] || (ge[s] = []), ge[s].push(o[s]);
      });
    }
    r.provides && r.provides(ye);
  }), n;
}
function gt(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (ge[e] || []).forEach((s) => {
    t = s.apply(null, [t, ...r]);
  }), t;
}
function ue(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (ge[e] || []).forEach((o) => {
    o.apply(null, n);
  });
}
function ie() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return ye[e] ? ye[e].apply(null, t) : void 0;
}
function ht(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || oe();
  if (t)
    return t = ce(n, t) || t, cn(sr.definitions, n, t) || cn(J.styles, n, t);
}
const sr = new Fa(), za = () => {
  v.autoReplaceSvg = !1, v.observeMutations = !1, ue("noAuto");
}, Ya = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return ee ? (ue("beforeI2svg", e), ie("pseudoElements2svg", e), ie("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    v.autoReplaceSvg === !1 && (v.autoReplaceSvg = !0), v.observeMutations = !0, Ea(() => {
      Wa({
        autoReplaceSvgRoot: t
      }), ue("watch", e);
    });
  }
}, $a = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: ce(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Ge(e[0]);
      return {
        prefix: n,
        iconName: ce(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(v.cssPrefix, "-")) > -1 || e.match(ia))) {
      const t = He(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || oe(),
        iconName: ce(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = oe();
      return {
        prefix: t,
        iconName: ce(t, e) || e
      };
    }
  }
}, U = {
  noAuto: za,
  config: v,
  dom: Ya,
  parse: $a,
  library: sr,
  findIconDefinition: ht,
  toHtml: Re
}, Wa = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = z
  } = e;
  (Object.keys(J.styles).length > 0 || v.autoFetchSvg) && ee && v.autoReplaceSvg && U.dom.i2svg({
    node: t
  });
};
function Ve(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Re(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!ee) return;
      const n = z.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Ua(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: o,
    transform: s
  } = e;
  if (It(s) && n.found && !r.found) {
    const {
      width: f,
      height: m
    } = n, u = {
      x: f / m / 2,
      y: 0.5
    };
    a.style = qe(l(l({}, o), {}, {
      "transform-origin": "".concat(u.x + s.x / 16, "em ").concat(u.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function qa(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: a,
    symbol: o
  } = e;
  const s = o === !0 ? "".concat(t, "-").concat(v.cssPrefix, "-").concat(n) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: l(l({}, a), {}, {
        id: s
      }),
      children: r
    }]
  }];
}
function Mt(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: a,
    transform: o,
    symbol: s,
    title: f,
    maskId: m,
    titleId: u,
    extra: d,
    watchable: h = !1
  } = e, {
    width: y,
    height: S
  } = n.found ? n : t, D = qr.includes(r), k = [v.replacementClass, a ? "".concat(v.cssPrefix, "-").concat(a) : ""].filter((p) => d.classes.indexOf(p) === -1).filter((p) => p !== "" || !!p).concat(d.classes).join(" ");
  let _ = {
    children: [],
    attributes: l(l({}, d.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: k,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(y, " ").concat(S)
    })
  };
  const N = D && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(y / S * 16 * 0.0625, "em")
  } : {};
  h && (_.attributes[le] = ""), f && (_.children.push({
    tag: "title",
    attributes: {
      id: _.attributes["aria-labelledby"] || "title-".concat(u || _e())
    },
    children: [f]
  }), delete _.attributes.title);
  const L = l(l({}, _), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: m,
    transform: o,
    symbol: s,
    styles: l(l({}, N), d.styles)
  }), {
    children: I,
    attributes: j
  } = n.found && t.found ? ie("generateAbstractMask", L) || {
    children: [],
    attributes: {}
  } : ie("generateAbstractIcon", L) || {
    children: [],
    attributes: {}
  };
  return L.children = I, L.attributes = j, s ? qa(L) : Ua(L);
}
function mn(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: a,
    title: o,
    extra: s,
    watchable: f = !1
  } = e, m = l(l(l({}, s.attributes), o ? {
    title: o
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  f && (m[le] = "");
  const u = l({}, s.styles);
  It(a) && (u.transform = ba({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), u["-webkit-transform"] = u.transform);
  const d = qe(u);
  d.length > 0 && (m.style = d);
  const h = [];
  return h.push({
    tag: "span",
    attributes: m,
    children: [t]
  }), o && h.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), h;
}
function Ga(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, a = l(l(l({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), o = qe(r.styles);
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
  styles: rt
} = J;
function yt(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(v.cssPrefix, "-").concat(et.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(v.cssPrefix, "-").concat(et.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(v.cssPrefix, "-").concat(et.PRIMARY),
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
const Ha = {
  found: !1,
  width: 512,
  height: 512
};
function Va(e, t) {
  !qn && !v.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function bt(e, t) {
  let n = t;
  return t === "fa" && v.styleDefault !== null && (t = oe()), new Promise((r, a) => {
    if (n === "fa") {
      const o = or(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && rt[t] && rt[t][e]) {
      const o = rt[t][e];
      return r(yt(o));
    }
    Va(e, t), r(l(l({}, Ha), {}, {
      icon: v.showMissingIcons && e ? ie("missingIconAbstract") || {} : {}
    }));
  });
}
const pn = () => {
}, vt = v.measurePerformance && Fe && Fe.mark && Fe.measure ? Fe : {
  mark: pn,
  measure: pn
}, Te = 'FA "6.7.2"', Xa = (e) => (vt.mark("".concat(Te, " ").concat(e, " begins")), () => fr(e)), fr = (e) => {
  vt.mark("".concat(Te, " ").concat(e, " ends")), vt.measure("".concat(Te, " ").concat(e), "".concat(Te, " ").concat(e, " begins"), "".concat(Te, " ").concat(e, " ends"));
};
var Ft = {
  begin: Xa,
  end: fr
};
const Le = () => {
};
function gn(e) {
  return typeof (e.getAttribute ? e.getAttribute(le) : null) == "string";
}
function Ba(e) {
  const t = e.getAttribute ? e.getAttribute(_t) : null, n = e.getAttribute ? e.getAttribute(kt) : null;
  return t && n;
}
function Ja(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(v.replacementClass);
}
function Ka() {
  return v.autoReplaceSvg === !0 ? ze.replace : ze[v.autoReplaceSvg] || ze.replace;
}
function Za(e) {
  return z.createElementNS("http://www.w3.org/2000/svg", e);
}
function Qa(e) {
  return z.createElement(e);
}
function cr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Za : Qa
  } = t;
  if (typeof e == "string")
    return z.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  }), (e.children || []).forEach(function(o) {
    r.appendChild(cr(o, {
      ceFn: n
    }));
  }), r;
}
function eo(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const ze = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(cr(n), t);
      }), t.getAttribute(le) === null && v.keepOriginalSource) {
        let n = z.createComment(eo(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Rt(t).indexOf(v.replacementClass))
      return ze.replace(e);
    const r = new RegExp("".concat(v.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const o = n[0].attributes.class.split(" ").reduce((s, f) => (f === v.replacementClass || f.match(r) ? s.toSvg.push(f) : s.toNode.push(f), s), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    const a = n.map((o) => Re(o)).join(`
`);
    t.setAttribute(le, ""), t.innerHTML = a;
  }
};
function hn(e) {
  e();
}
function lr(e, t) {
  const n = typeof t == "function" ? t : Le;
  if (e.length === 0)
    n();
  else {
    let r = hn;
    v.mutateApproach === ra && (r = ae.requestAnimationFrame || hn), r(() => {
      const a = Ka(), o = Ft.begin("mutate");
      e.map(a), o(), n();
    });
  }
}
let Dt = !1;
function ur() {
  Dt = !0;
}
function xt() {
  Dt = !1;
}
let $e = null;
function yn(e) {
  if (!nn || !v.observeMutations)
    return;
  const {
    treeCallback: t = Le,
    nodeCallback: n = Le,
    pseudoElementsCallback: r = Le,
    observeMutationsRoot: a = z
  } = e;
  $e = new nn((o) => {
    if (Dt) return;
    const s = oe();
    ve(o).forEach((f) => {
      if (f.type === "childList" && f.addedNodes.length > 0 && !gn(f.addedNodes[0]) && (v.searchPseudoElements && r(f.target), t(f.target)), f.type === "attributes" && f.target.parentNode && v.searchPseudoElements && r(f.target.parentNode), f.type === "attributes" && gn(f.target) && ~ca.indexOf(f.attributeName))
        if (f.attributeName === "class" && Ba(f.target)) {
          const {
            prefix: m,
            iconName: u
          } = He(Rt(f.target));
          f.target.setAttribute(_t, m || s), u && f.target.setAttribute(kt, u);
        } else Ja(f.target) && n(f.target);
    });
  }), ee && $e.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function to() {
  $e && $e.disconnect();
}
function no(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const o = a.split(":"), s = o[0], f = o.slice(1);
    return s && f.length > 0 && (r[s] = f.join(":").trim()), r;
  }, {})), n;
}
function ro(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = He(Rt(e));
  return a.prefix || (a.prefix = oe()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = _a(a.prefix, e.innerText) || jt(a.prefix, mt(e.innerText))), !a.iconName && v.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function ao(e) {
  const t = ve(e.attributes).reduce((a, o) => (a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return v.autoA11y && (n ? t["aria-labelledby"] = "".concat(v.replacementClass, "-title-").concat(r || _e()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function oo() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: B,
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
function bn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: a
  } = ro(e), o = ao(e), s = gt("parseNodeAttributes", {}, e);
  let f = t.styleParser ? no(e) : [];
  return l({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: B,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: a,
      styles: f,
      attributes: o
    }
  }, s);
}
const {
  styles: io
} = J;
function dr(e) {
  const t = v.autoReplaceSvg === "nest" ? bn(e, {
    styleParser: !1
  }) : bn(e);
  return ~t.extra.classes.indexOf(Hn) ? ie("generateLayersText", e, t) : ie("generateSvgReplacementMutation", e, t);
}
function so() {
  return [...$r, ...st];
}
function vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ee) return Promise.resolve();
  const n = z.documentElement.classList, r = (d) => n.add("".concat(on, "-").concat(d)), a = (d) => n.remove("".concat(on, "-").concat(d)), o = v.autoFetchSvg ? so() : zn.concat(Object.keys(io));
  o.includes("fa") || o.push("fa");
  const s = [".".concat(Hn, ":not([").concat(le, "])")].concat(o.map((d) => ".".concat(d, ":not([").concat(le, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let f = [];
  try {
    f = ve(e.querySelectorAll(s));
  } catch {
  }
  if (f.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const m = Ft.begin("onTree"), u = f.reduce((d, h) => {
    try {
      const y = dr(h);
      y && d.push(y);
    } catch (y) {
      qn || y.name === "MissingIcon" && console.error(y);
    }
    return d;
  }, []);
  return new Promise((d, h) => {
    Promise.all(u).then((y) => {
      lr(y, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), m(), d();
      });
    }).catch((y) => {
      m(), h(y);
    });
  });
}
function fo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  dr(e).then((n) => {
    n && lr([n], t);
  });
}
function co(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : ht(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : ht(a || {})), e(r, l(l({}, n), {}, {
      mask: a
    }));
  };
}
const lo = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = B,
    symbol: r = !1,
    mask: a = null,
    maskId: o = null,
    title: s = null,
    titleId: f = null,
    classes: m = [],
    attributes: u = {},
    styles: d = {}
  } = t;
  if (!e) return;
  const {
    prefix: h,
    iconName: y,
    icon: S
  } = e;
  return Ve(l({
    type: "icon"
  }, e), () => (ue("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), v.autoA11y && (s ? u["aria-labelledby"] = "".concat(v.replacementClass, "-title-").concat(f || _e()) : (u["aria-hidden"] = "true", u.focusable = "false")), Mt({
    icons: {
      main: yt(S),
      mask: a ? yt(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: h,
    iconName: y,
    transform: l(l({}, B), n),
    symbol: r,
    title: s,
    maskId: o,
    titleId: f,
    extra: {
      attributes: u,
      styles: d,
      classes: m
    }
  })));
};
var uo = {
  mixout() {
    return {
      icon: co(lo)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = vn, e.nodeCallback = fo, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = z,
        callback: r = () => {
        }
      } = t;
      return vn(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: a,
        titleId: o,
        prefix: s,
        transform: f,
        symbol: m,
        mask: u,
        maskId: d,
        extra: h
      } = n;
      return new Promise((y, S) => {
        Promise.all([bt(r, s), u.iconName ? bt(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((D) => {
          let [k, _] = D;
          y([t, Mt({
            icons: {
              main: k,
              mask: _
            },
            prefix: s,
            iconName: r,
            transform: f,
            symbol: m,
            maskId: d,
            title: a,
            titleId: o,
            extra: h,
            watchable: !0
          })]);
        }).catch(S);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        transform: o,
        styles: s
      } = t;
      const f = qe(s);
      f.length > 0 && (r.style = f);
      let m;
      return It(o) && (m = ie("generateAbstractTransformGrouping", {
        main: a,
        transform: o,
        containerWidth: a.width,
        iconWidth: a.width
      })), n.push(m || a.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, mo = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Ve({
          type: "layer"
        }, () => {
          ue("beforeDOMElementCreation", {
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
              class: ["".concat(v.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, po = {
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
        return Ve({
          type: "counter",
          content: e
        }, () => (ue("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Ga({
          content: e.toString(),
          title: n,
          extra: {
            attributes: a,
            styles: o,
            classes: ["".concat(v.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, go = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = B,
          title: r = null,
          classes: a = [],
          attributes: o = {},
          styles: s = {}
        } = t;
        return Ve({
          type: "text",
          content: e
        }, () => (ue("beforeDOMElementCreation", {
          content: e,
          params: t
        }), mn({
          content: e,
          transform: l(l({}, B), n),
          title: r,
          extra: {
            attributes: o,
            styles: s,
            classes: ["".concat(v.cssPrefix, "-layers-text"), ...a]
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
      let s = null, f = null;
      if (Dn) {
        const m = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        s = u.width / m, f = u.height / m;
      }
      return v.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, mn({
        content: t.innerHTML,
        width: s,
        height: f,
        transform: a,
        title: r,
        extra: o,
        watchable: !0
      })]);
    };
  }
};
const ho = new RegExp('"', "ug"), xn = [1105920, 1112319], En = l(l(l(l({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Lr), ta), Xr), Et = Object.keys(En).reduce((e, t) => (e[t.toLowerCase()] = En[t], e), {}), yo = Object.keys(Et).reduce((e, t) => {
  const n = Et[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function bo(e) {
  const t = e.replace(ho, ""), n = Oa(t, 0), r = n >= xn[0] && n <= xn[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: mt(a ? t[0] : t),
    isSecondary: r || a
  };
}
function vo(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (Et[n] || {})[a] || yo[n];
}
function An(e, t) {
  const n = "".concat(na).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const s = ve(e.children).filter((y) => y.getAttribute(ct) === t)[0], f = ae.getComputedStyle(e, t), m = f.getPropertyValue("font-family"), u = m.match(sa), d = f.getPropertyValue("font-weight"), h = f.getPropertyValue("content");
    if (s && !u)
      return e.removeChild(s), r();
    if (u && h !== "none" && h !== "") {
      const y = f.getPropertyValue("content");
      let S = vo(m, d);
      const {
        value: D,
        isSecondary: k
      } = bo(y), _ = u[0].startsWith("FontAwesome");
      let N = jt(S, D), L = N;
      if (_) {
        const I = ka(D);
        I.iconName && I.prefix && (N = I.iconName, S = I.prefix);
      }
      if (N && !k && (!s || s.getAttribute(_t) !== S || s.getAttribute(kt) !== L)) {
        e.setAttribute(n, L), s && e.removeChild(s);
        const I = oo(), {
          extra: j
        } = I;
        j.attributes[ct] = t, bt(N, S).then((p) => {
          const q = Mt(l(l({}, I), {}, {
            icons: {
              main: p,
              mask: ir()
            },
            prefix: S,
            iconName: L,
            extra: j,
            watchable: !0
          })), K = z.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(K, e.firstChild) : e.appendChild(K), K.outerHTML = q.map((te) => Re(te)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function xo(e) {
  return Promise.all([An(e, "::before"), An(e, "::after")]);
}
function Eo(e) {
  return e.parentNode !== document.head && !~aa.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ct) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function On(e) {
  if (ee)
    return new Promise((t, n) => {
      const r = ve(e.querySelectorAll("*")).filter(Eo).map(xo), a = Ft.begin("searchPseudoElements");
      ur(), Promise.all(r).then(() => {
        a(), xt(), t();
      }).catch(() => {
        a(), xt(), n();
      });
    });
}
var Ao = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = On, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = z
      } = t;
      v.searchPseudoElements && On(n);
    };
  }
};
let Pn = !1;
var Oo = {
  mixout() {
    return {
      dom: {
        unwatch() {
          ur(), Pn = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        yn(gt("mutationObserverCallbacks", {}));
      },
      noAuto() {
        to();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Pn ? xt() : yn(gt("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Tn = (e) => {
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
var Po = {
  mixout() {
    return {
      parse: {
        transform: (e) => Tn(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Tn(n)), e;
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
      }, f = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), m = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), u = "rotate(".concat(r.rotate, " 0 0)"), d = {
        transform: "".concat(f, " ").concat(m, " ").concat(u)
      }, h = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, y = {
        outer: s,
        inner: d,
        path: h
      };
      return {
        tag: "g",
        attributes: l({}, y.outer),
        children: [{
          tag: "g",
          attributes: l({}, y.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: l(l({}, n.icon.attributes), y.path)
          }]
        }]
      };
    };
  }
};
const at = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Sn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function To(e) {
  return e.tag === "g" ? e.children : [e];
}
var So = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? He(n.split(" ").map((a) => a.trim())) : ir();
        return r.prefix || (r.prefix = oe()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
        transform: f
      } = t;
      const {
        width: m,
        icon: u
      } = a, {
        width: d,
        icon: h
      } = o, y = ya({
        transform: f,
        containerWidth: d,
        iconWidth: m
      }), S = {
        tag: "rect",
        attributes: l(l({}, at), {}, {
          fill: "white"
        })
      }, D = u.children ? {
        children: u.children.map(Sn)
      } : {}, k = {
        tag: "g",
        attributes: l({}, y.inner),
        children: [Sn(l({
          tag: u.tag,
          attributes: l(l({}, u.attributes), y.path)
        }, D))]
      }, _ = {
        tag: "g",
        attributes: l({}, y.outer),
        children: [k]
      }, N = "mask-".concat(s || _e()), L = "clip-".concat(s || _e()), I = {
        tag: "mask",
        attributes: l(l({}, at), {}, {
          id: N,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [S, _]
      }, j = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: L
          },
          children: To(h)
        }, I]
      };
      return n.push(j, {
        tag: "rect",
        attributes: l({
          fill: "currentColor",
          "clip-path": "url(#".concat(L, ")"),
          mask: "url(#".concat(N, ")")
        }, at)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, wo = {
  provides(e) {
    let t = !1;
    ae.matchMedia && (t = ae.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: l(l({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const o = l(l({}, a), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: l(l({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || s.children.push({
        tag: "animate",
        attributes: l(l({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: l(l({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: l(l({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: l(l({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: l(l({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: l(l({}, o), {}, {
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
}, _o = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, ko = [xa, uo, mo, po, go, Ao, Oo, Po, So, wo, _o];
La(ko, {
  mixoutsTo: U
});
U.noAuto;
U.config;
U.library;
U.dom;
const At = U.parse;
U.findIconDefinition;
U.toHtml;
const Co = U.icon;
U.layer;
U.text;
U.counter;
function wn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wn(Object(n), !0).forEach(function(r) {
      he(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function We(e) {
  "@babel/helpers - typeof";
  return We = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, We(e);
}
function he(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ro(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Io(e, t) {
  if (e == null) return {};
  var n = Ro(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ot(e) {
  return No(e) || jo(e) || Mo(e) || Fo();
}
function No(e) {
  if (Array.isArray(e)) return Pt(e);
}
function jo(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Mo(e, t) {
  if (e) {
    if (typeof e == "string") return Pt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pt(e, t);
  }
}
function Pt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Fo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Do(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, o = e.bounce, s = e.shake, f = e.flash, m = e.spin, u = e.spinPulse, d = e.spinReverse, h = e.pulse, y = e.fixedWidth, S = e.inverse, D = e.border, k = e.listItem, _ = e.flip, N = e.size, L = e.rotation, I = e.pull, j = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": o,
    "fa-shake": s,
    "fa-flash": f,
    "fa-spin": m,
    "fa-spin-reverse": d,
    "fa-spin-pulse": u,
    "fa-pulse": h,
    "fa-fw": y,
    "fa-inverse": S,
    "fa-border": D,
    "fa-li": k,
    "fa-flip": _ === !0,
    "fa-flip-horizontal": _ === "horizontal" || _ === "both",
    "fa-flip-vertical": _ === "vertical" || _ === "both"
  }, he(t, "fa-".concat(N), typeof N < "u" && N !== null), he(t, "fa-rotate-".concat(L), typeof L < "u" && L !== null && L !== 0), he(t, "fa-pull-".concat(I), typeof I < "u" && I !== null), he(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(j).map(function(p) {
    return j[p] ? p : null;
  }).filter(function(p) {
    return p;
  });
}
function Lo(e) {
  return e = e - 0, e === e;
}
function mr(e) {
  return Lo(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var zo = ["style"];
function Yo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function $o(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = mr(n.slice(0, r)), o = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Yo(a)] = o : t[a] = o, t;
  }, {});
}
function pr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(m) {
    return pr(e, m);
  }), a = Object.keys(t.attributes || {}).reduce(function(m, u) {
    var d = t.attributes[u];
    switch (u) {
      case "class":
        m.attrs.className = d, delete t.attributes.class;
        break;
      case "style":
        m.attrs.style = $o(d);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? m.attrs[u.toLowerCase()] = d : m.attrs[mr(u)] = d;
    }
    return m;
  }, {
    attrs: {}
  }), o = n.style, s = o === void 0 ? {} : o, f = Io(n, zo);
  return a.attrs.style = X(X({}, a.attrs.style), s), e.apply(void 0, [t.tag, X(X({}, a.attrs), f)].concat(Ot(r)));
}
var gr = !1;
try {
  gr = process.env.NODE_ENV === "production";
} catch {
}
function Wo() {
  if (!gr && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function _n(e) {
  if (e && We(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (At.icon)
    return At.icon(e);
  if (e === null)
    return null;
  if (e && We(e) === "object" && e.prefix && e.iconName)
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
function ot(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? he({}, e, t) : {};
}
var kn = {
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
}, Lt = /* @__PURE__ */ Tt.forwardRef(function(e, t) {
  var n = X(X({}, kn), e), r = n.icon, a = n.mask, o = n.symbol, s = n.className, f = n.title, m = n.titleId, u = n.maskId, d = _n(r), h = ot("classes", [].concat(Ot(Do(n)), Ot((s || "").split(" ")))), y = ot("transform", typeof n.transform == "string" ? At.transform(n.transform) : n.transform), S = ot("mask", _n(a)), D = Co(d, X(X(X(X({}, h), y), S), {}, {
    symbol: o,
    title: f,
    titleId: m,
    maskId: u
  }));
  if (!D)
    return Wo("Could not find icon", d), null;
  var k = D.abstract, _ = {
    ref: t
  };
  return Object.keys(n).forEach(function(N) {
    kn.hasOwnProperty(N) || (_[N] = n[N]);
  }), Uo(k[0], _);
});
Lt.displayName = "FontAwesomeIcon";
Lt.propTypes = {
  beat: P.bool,
  border: P.bool,
  beatFade: P.bool,
  bounce: P.bool,
  className: P.string,
  fade: P.bool,
  flash: P.bool,
  mask: P.oneOfType([P.object, P.array, P.string]),
  maskId: P.string,
  fixedWidth: P.bool,
  inverse: P.bool,
  flip: P.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: P.oneOfType([P.object, P.array, P.string]),
  listItem: P.bool,
  pull: P.oneOf(["right", "left"]),
  pulse: P.bool,
  rotation: P.oneOf([0, 90, 180, 270]),
  shake: P.bool,
  size: P.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: P.bool,
  spinPulse: P.bool,
  spinReverse: P.bool,
  symbol: P.oneOfType([P.bool, P.string]),
  title: P.string,
  titleId: P.string,
  transform: P.oneOfType([P.string, P.object]),
  swapOpacity: P.bool
};
var Uo = pr.bind(null, Tt.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const qo = {
  prefix: "fas",
  iconName: "circle-exclamation",
  icon: [512, 512, ["exclamation-circle"], "f06a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, Cn = qo, Go = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, Ho = Go, Vo = {
  prefix: "fas",
  iconName: "circle-info",
  icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, Rn = Vo, Xo = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, Bo = Xo, hr = ({
  type: e = "info",
  heading: t,
  children: n,
  slim: r = !1,
  noIcon: a = !1,
  roundedCorners: o = !1,
  className: s = ""
}) => {
  const f = [
    "alert",
    `alert--${e}`,
    r && "alert--slim",
    a && "alert--no-icon",
    o && "alert--rounded-corners",
    s
  ].filter(Boolean).join(" "), m = () => {
    switch (e) {
      case "info":
        return Rn;
      case "warning":
        return Bo;
      case "success":
        return Ho;
      case "error":
        return Cn;
      case "emergency":
        return Cn;
      default:
        return Rn;
    }
  };
  return /* @__PURE__ */ fe.jsx(
    "div",
    {
      className: f,
      role: e === "error" || e === "emergency" ? "alert" : void 0,
      children: /* @__PURE__ */ fe.jsxs("div", { className: "alert__body", children: [
        !a && /* @__PURE__ */ fe.jsx("div", { className: "alert__icon", children: /* @__PURE__ */ fe.jsx(Lt, { icon: m() }) }),
        /* @__PURE__ */ fe.jsxs("div", { className: "alert__content", children: [
          t && /* @__PURE__ */ fe.jsx("h4", { className: "alert__heading", children: t }),
          /* @__PURE__ */ fe.jsx("div", { className: "alert__text", children: n })
        ] })
      ] })
    }
  );
};
hr.propTypes = {
  /**
   * Type of alert to display
   */
  type: P.oneOf(["info", "warning", "success", "error", "emergency"]),
  /**
   * Optional heading text for the alert
   */
  heading: P.string,
  /**
   * Content to display in the alert
   */
  children: P.node.isRequired,
  /**
   * Whether to display a slim version of the alert
   */
  slim: P.bool,
  /**
   * Whether to display the alert without an icon
   */
  noIcon: P.bool,
  /**
   * Additional CSS class names
   */
  className: P.string
};
hr.defaultProps = {
  type: "info",
  heading: void 0,
  slim: !1,
  noIcon: !1,
  className: ""
};
export {
  hr as Alert
};
//# sourceMappingURL=index.js.map
