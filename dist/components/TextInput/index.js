import Tt from "react";
function pr(e) {
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
function gr() {
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
function hr() {
  return $t || ($t = 1, process.env.NODE_ENV !== "production" && function() {
    function e(i) {
      if (i == null) return null;
      if (typeof i == "function")
        return i.$$typeof === Ee ? null : i.displayName || i.name || null;
      if (typeof i == "string") return i;
      switch (i) {
        case _:
          return "Fragment";
        case j:
          return "Profiler";
        case w:
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
          case N:
            return "Portal";
          case I:
            return (i.displayName || "Context") + ".Provider";
          case L:
            return (i._context.displayName || "Context") + ".Consumer";
          case F:
            var l = i.render;
            return i = i.displayName, i || (i = l.displayName || l.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
          case K:
            return l = i.displayName || null, l !== null ? l : e(i.type) || "Memo";
          case ne:
            l = i._payload, i = i._init;
            try {
              return e(i(l));
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
        var l = !1;
      } catch {
        l = !0;
      }
      if (l) {
        l = console;
        var b = l.error, x = typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return b.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), t(i);
      }
    }
    function r(i) {
      if (i === _) return "<>";
      if (typeof i == "object" && i !== null && i.$$typeof === ne)
        return "<...>";
      try {
        var l = e(i);
        return l ? "<" + l + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var i = re.A;
      return i === null ? null : i.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(i) {
      if (de.call(i, "key")) {
        var l = Object.getOwnPropertyDescriptor(i, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return i.key !== void 0;
    }
    function f(i, l) {
      function b() {
        me || (me = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          l
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
    function c(i, l, b, x, A, P, S, k) {
      return b = P.ref, i = {
        $$typeof: T,
        type: i,
        key: l,
        props: P,
        _owner: A
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
        value: S
      }), Object.defineProperty(i, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    }
    function d(i, l, b, x, A, P, S, k) {
      var O = l.children;
      if (O !== void 0)
        if (x)
          if (Ae(O)) {
            for (x = 0; x < O.length; x++)
              h(O[x]);
            Object.freeze && Object.freeze(O);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(O);
      if (de.call(l, "key")) {
        O = e(i);
        var C = Object.keys(l).filter(function(Y) {
          return Y !== "key";
        });
        x = 0 < C.length ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}", pe[O + x] || (C = 0 < C.length ? "{" + C.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          O,
          C,
          O
        ), pe[O + x] = !0);
      }
      if (O = null, b !== void 0 && (n(b), O = "" + b), s(l) && (n(l.key), O = "" + l.key), "key" in l) {
        b = {};
        for (var R in l)
          R !== "key" && (b[R] = l[R]);
      } else b = l;
      return O && f(
        b,
        typeof i == "function" ? i.displayName || i.name || "Unknown" : i
      ), c(
        i,
        O,
        P,
        A,
        a(),
        b,
        S,
        k
      );
    }
    function h(i) {
      typeof i == "object" && i !== null && i.$$typeof === T && i._store && (i._store.validated = 1);
    }
    var y = Tt, T = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), I = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), xe = Symbol.for("react.activity"), Ee = Symbol.for("react.client.reference"), re = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = Object.prototype.hasOwnProperty, Ae = Array.isArray, G = console.createTask ? console.createTask : function() {
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
    )(), fe = G(r(o)), pe = {};
    Pe.Fragment = _, Pe.jsx = function(i, l, b, x, A) {
      var P = 1e4 > re.recentlyCreatedOwnerStacks++;
      return d(
        i,
        l,
        b,
        !1,
        x,
        A,
        P ? Error("react-stack-top-frame") : H,
        P ? G(r(i)) : fe
      );
    }, Pe.jsxs = function(i, l, b, x, A) {
      var P = 1e4 > re.recentlyCreatedOwnerStacks++;
      return d(
        i,
        l,
        b,
        !0,
        x,
        A,
        P ? Error("react-stack-top-frame") : H,
        P ? G(r(i)) : fe
      );
    };
  }()), Pe;
}
var Wt;
function yr() {
  return Wt || (Wt = 1, process.env.NODE_ENV === "production" ? Ne.exports = gr() : Ne.exports = hr()), Ne.exports;
}
var Z = yr(), je = { exports: {} }, Fe = { exports: {} }, M = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ut;
function br() {
  if (Ut) return M;
  Ut = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, N = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
  function I(p) {
    if (typeof p == "object" && p !== null) {
      var q = p.$$typeof;
      switch (q) {
        case t:
          switch (p = p.type, p) {
            case m:
            case c:
            case r:
            case o:
            case a:
            case h:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case f:
                case d:
                case N:
                case T:
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
  function F(p) {
    return I(p) === c;
  }
  return M.AsyncMode = m, M.ConcurrentMode = c, M.ContextConsumer = f, M.ContextProvider = s, M.Element = t, M.ForwardRef = d, M.Fragment = r, M.Lazy = N, M.Memo = T, M.Portal = n, M.Profiler = o, M.StrictMode = a, M.Suspense = h, M.isAsyncMode = function(p) {
    return F(p) || I(p) === m;
  }, M.isConcurrentMode = F, M.isContextConsumer = function(p) {
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
    return I(p) === N;
  }, M.isMemo = function(p) {
    return I(p) === T;
  }, M.isPortal = function(p) {
    return I(p) === n;
  }, M.isProfiler = function(p) {
    return I(p) === o;
  }, M.isStrictMode = function(p) {
    return I(p) === a;
  }, M.isSuspense = function(p) {
    return I(p) === h;
  }, M.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === c || p === o || p === a || p === h || p === y || typeof p == "object" && p !== null && (p.$$typeof === N || p.$$typeof === T || p.$$typeof === s || p.$$typeof === f || p.$$typeof === d || p.$$typeof === w || p.$$typeof === j || p.$$typeof === L || p.$$typeof === _);
  }, M.typeOf = I, M;
}
var D = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function vr() {
  return qt || (qt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, N = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
    function I(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === r || g === c || g === o || g === a || g === h || g === y || typeof g == "object" && g !== null && (g.$$typeof === N || g.$$typeof === T || g.$$typeof === s || g.$$typeof === f || g.$$typeof === d || g.$$typeof === w || g.$$typeof === j || g.$$typeof === L || g.$$typeof === _);
    }
    function F(g) {
      if (typeof g == "object" && g !== null) {
        var V = g.$$typeof;
        switch (V) {
          case t:
            var Ie = g.type;
            switch (Ie) {
              case m:
              case c:
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
                  case N:
                  case T:
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
    var p = m, q = c, K = f, ne = s, xe = t, Ee = d, re = r, de = N, Ae = T, G = n, me = o, W = a, H = h, fe = !1;
    function pe(g) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), i(g) || F(g) === m;
    }
    function i(g) {
      return F(g) === c;
    }
    function l(g) {
      return F(g) === f;
    }
    function b(g) {
      return F(g) === s;
    }
    function x(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function A(g) {
      return F(g) === d;
    }
    function P(g) {
      return F(g) === r;
    }
    function S(g) {
      return F(g) === N;
    }
    function k(g) {
      return F(g) === T;
    }
    function O(g) {
      return F(g) === n;
    }
    function C(g) {
      return F(g) === o;
    }
    function R(g) {
      return F(g) === a;
    }
    function Y(g) {
      return F(g) === h;
    }
    D.AsyncMode = p, D.ConcurrentMode = q, D.ContextConsumer = K, D.ContextProvider = ne, D.Element = xe, D.ForwardRef = Ee, D.Fragment = re, D.Lazy = de, D.Memo = Ae, D.Portal = G, D.Profiler = me, D.StrictMode = W, D.Suspense = H, D.isAsyncMode = pe, D.isConcurrentMode = i, D.isContextConsumer = l, D.isContextProvider = b, D.isElement = x, D.isForwardRef = A, D.isFragment = P, D.isLazy = S, D.isMemo = k, D.isPortal = O, D.isProfiler = C, D.isStrictMode = R, D.isSuspense = Y, D.isValidElementType = I, D.typeOf = F;
  }()), D;
}
var Gt;
function Cn() {
  return Gt || (Gt = 1, process.env.NODE_ENV === "production" ? Fe.exports = br() : Fe.exports = vr()), Fe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Xe, Ht;
function xr() {
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
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        c[d] = d;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Xe = a() ? Object.assign : function(o, s) {
    for (var f, m = r(o), c, d = 1; d < arguments.length; d++) {
      f = Object(arguments[d]);
      for (var h in f)
        t.call(f, h) && (m[h] = f[h]);
      if (e) {
        c = e(f);
        for (var y = 0; y < c.length; y++)
          n.call(f, c[y]) && (m[c[y]] = f[c[y]]);
      }
    }
    return m;
  }, Xe;
}
var Be, Vt;
function wt() {
  if (Vt) return Be;
  Vt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Be = e, Be;
}
var Je, Xt;
function Rn() {
  return Xt || (Xt = 1, Je = Function.call.bind(Object.prototype.hasOwnProperty)), Je;
}
var Ke, Bt;
function Er() {
  if (Bt) return Ke;
  Bt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ wt(), n = {}, r = /* @__PURE__ */ Rn();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, f, m, c) {
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
          } catch (N) {
            h = N;
          }
          if (h && !(h instanceof Error) && e(
            (m || "React class") + ": type specification of " + f + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in n)) {
            n[h.message] = !0;
            var T = c ? c() : "";
            e(
              "Failed " + f + " type: " + h.message + (T ?? "")
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
function Ar() {
  if (Jt) return Ze;
  Jt = 1;
  var e = Cn(), t = xr(), n = /* @__PURE__ */ wt(), r = /* @__PURE__ */ Rn(), a = /* @__PURE__ */ Er(), o = function() {
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
    var c = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(i) {
      var l = i && (c && i[c] || i[d]);
      if (typeof l == "function")
        return l;
    }
    var y = "<<anonymous>>", T = {
      array: j("array"),
      bigint: j("bigint"),
      bool: j("boolean"),
      func: j("function"),
      number: j("number"),
      object: j("object"),
      string: j("string"),
      symbol: j("symbol"),
      any: L(),
      arrayOf: I,
      element: F(),
      elementType: p(),
      instanceOf: q,
      node: Ee(),
      objectOf: ne,
      oneOf: K,
      oneOfType: xe,
      shape: de,
      exact: Ae
    };
    function N(i, l) {
      return i === l ? i !== 0 || 1 / i === 1 / l : i !== i && l !== l;
    }
    function _(i, l) {
      this.message = i, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
    }
    _.prototype = Error.prototype;
    function w(i) {
      if (process.env.NODE_ENV !== "production")
        var l = {}, b = 0;
      function x(P, S, k, O, C, R, Y) {
        if (O = O || y, R = R || k, Y !== n) {
          if (m) {
            var g = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw g.name = "Invariant Violation", g;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var V = O + ":" + k;
            !l[V] && // Avoid spamming the console because they are often not actionable except for lib authors
            b < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + R + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[V] = !0, b++);
          }
        }
        return S[k] == null ? P ? S[k] === null ? new _("The " + C + " `" + R + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new _("The " + C + " `" + R + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : i(S, k, O, C, R);
      }
      var A = x.bind(null, !1);
      return A.isRequired = x.bind(null, !0), A;
    }
    function j(i) {
      function l(b, x, A, P, S, k) {
        var O = b[x], C = W(O);
        if (C !== i) {
          var R = H(O);
          return new _(
            "Invalid " + P + " `" + S + "` of type " + ("`" + R + "` supplied to `" + A + "`, expected ") + ("`" + i + "`."),
            { expectedType: i }
          );
        }
        return null;
      }
      return w(l);
    }
    function L() {
      return w(s);
    }
    function I(i) {
      function l(b, x, A, P, S) {
        if (typeof i != "function")
          return new _("Property `" + S + "` of component `" + A + "` has invalid PropType notation inside arrayOf.");
        var k = b[x];
        if (!Array.isArray(k)) {
          var O = W(k);
          return new _("Invalid " + P + " `" + S + "` of type " + ("`" + O + "` supplied to `" + A + "`, expected an array."));
        }
        for (var C = 0; C < k.length; C++) {
          var R = i(k, C, A, P, S + "[" + C + "]", n);
          if (R instanceof Error)
            return R;
        }
        return null;
      }
      return w(l);
    }
    function F() {
      function i(l, b, x, A, P) {
        var S = l[b];
        if (!f(S)) {
          var k = W(S);
          return new _("Invalid " + A + " `" + P + "` of type " + ("`" + k + "` supplied to `" + x + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(i);
    }
    function p() {
      function i(l, b, x, A, P) {
        var S = l[b];
        if (!e.isValidElementType(S)) {
          var k = W(S);
          return new _("Invalid " + A + " `" + P + "` of type " + ("`" + k + "` supplied to `" + x + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(i);
    }
    function q(i) {
      function l(b, x, A, P, S) {
        if (!(b[x] instanceof i)) {
          var k = i.name || y, O = pe(b[x]);
          return new _("Invalid " + P + " `" + S + "` of type " + ("`" + O + "` supplied to `" + A + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return w(l);
    }
    function K(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function l(b, x, A, P, S) {
        for (var k = b[x], O = 0; O < i.length; O++)
          if (N(k, i[O]))
            return null;
        var C = JSON.stringify(i, function(Y, g) {
          var V = H(g);
          return V === "symbol" ? String(g) : g;
        });
        return new _("Invalid " + P + " `" + S + "` of value `" + String(k) + "` " + ("supplied to `" + A + "`, expected one of " + C + "."));
      }
      return w(l);
    }
    function ne(i) {
      function l(b, x, A, P, S) {
        if (typeof i != "function")
          return new _("Property `" + S + "` of component `" + A + "` has invalid PropType notation inside objectOf.");
        var k = b[x], O = W(k);
        if (O !== "object")
          return new _("Invalid " + P + " `" + S + "` of type " + ("`" + O + "` supplied to `" + A + "`, expected an object."));
        for (var C in k)
          if (r(k, C)) {
            var R = i(k, C, A, P, S + "." + C, n);
            if (R instanceof Error)
              return R;
          }
        return null;
      }
      return w(l);
    }
    function xe(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var l = 0; l < i.length; l++) {
        var b = i[l];
        if (typeof b != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(b) + " at index " + l + "."
          ), s;
      }
      function x(A, P, S, k, O) {
        for (var C = [], R = 0; R < i.length; R++) {
          var Y = i[R], g = Y(A, P, S, k, O, n);
          if (g == null)
            return null;
          g.data && r(g.data, "expectedType") && C.push(g.data.expectedType);
        }
        var V = C.length > 0 ? ", expected one of type [" + C.join(", ") + "]" : "";
        return new _("Invalid " + k + " `" + O + "` supplied to " + ("`" + S + "`" + V + "."));
      }
      return w(x);
    }
    function Ee() {
      function i(l, b, x, A, P) {
        return G(l[b]) ? null : new _("Invalid " + A + " `" + P + "` supplied to " + ("`" + x + "`, expected a ReactNode."));
      }
      return w(i);
    }
    function re(i, l, b, x, A) {
      return new _(
        (i || "React class") + ": " + l + " type `" + b + "." + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + A + "`."
      );
    }
    function de(i) {
      function l(b, x, A, P, S) {
        var k = b[x], O = W(k);
        if (O !== "object")
          return new _("Invalid " + P + " `" + S + "` of type `" + O + "` " + ("supplied to `" + A + "`, expected `object`."));
        for (var C in i) {
          var R = i[C];
          if (typeof R != "function")
            return re(A, P, S, C, H(R));
          var Y = R(k, C, A, P, S + "." + C, n);
          if (Y)
            return Y;
        }
        return null;
      }
      return w(l);
    }
    function Ae(i) {
      function l(b, x, A, P, S) {
        var k = b[x], O = W(k);
        if (O !== "object")
          return new _("Invalid " + P + " `" + S + "` of type `" + O + "` " + ("supplied to `" + A + "`, expected `object`."));
        var C = t({}, b[x], i);
        for (var R in C) {
          var Y = i[R];
          if (r(i, R) && typeof Y != "function")
            return re(A, P, S, R, H(Y));
          if (!Y)
            return new _(
              "Invalid " + P + " `" + S + "` key `" + R + "` supplied to `" + A + "`.\nBad object: " + JSON.stringify(b[x], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(i), null, "  ")
            );
          var g = Y(k, R, A, P, S + "." + R, n);
          if (g)
            return g;
        }
        return null;
      }
      return w(l);
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
          var l = h(i);
          if (l) {
            var b = l.call(i), x;
            if (l !== i.entries) {
              for (; !(x = b.next()).done; )
                if (!G(x.value))
                  return !1;
            } else
              for (; !(x = b.next()).done; ) {
                var A = x.value;
                if (A && !G(A[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function me(i, l) {
      return i === "symbol" ? !0 : l ? l["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && l instanceof Symbol : !1;
    }
    function W(i) {
      var l = typeof i;
      return Array.isArray(i) ? "array" : i instanceof RegExp ? "object" : me(l, i) ? "symbol" : l;
    }
    function H(i) {
      if (typeof i > "u" || i === null)
        return "" + i;
      var l = W(i);
      if (l === "object") {
        if (i instanceof Date)
          return "date";
        if (i instanceof RegExp)
          return "regexp";
      }
      return l;
    }
    function fe(i) {
      var l = H(i);
      switch (l) {
        case "array":
        case "object":
          return "an " + l;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + l;
        default:
          return l;
      }
    }
    function pe(i) {
      return !i.constructor || !i.constructor.name ? y : i.constructor.name;
    }
    return T.checkPropTypes = a, T.resetWarningCache = a.resetWarningCache, T.PropTypes = T, T;
  }, Ze;
}
var Qe, Kt;
function Or() {
  if (Kt) return Qe;
  Kt = 1;
  var e = /* @__PURE__ */ wt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Qe = function() {
    function r(s, f, m, c, d, h) {
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
function Pr() {
  if (Zt) return je.exports;
  if (Zt = 1, process.env.NODE_ENV !== "production") {
    var e = Cn(), t = !0;
    je.exports = /* @__PURE__ */ Ar()(e.isElement, t);
  } else
    je.exports = /* @__PURE__ */ Or()();
  return je.exports;
}
var Tr = /* @__PURE__ */ Pr();
const E = /* @__PURE__ */ pr(Tr);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function wr(e, t, n) {
  return (t = _r(t)) in e ? Object.defineProperty(e, t, {
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
function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qt(Object(n), !0).forEach(function(r) {
      wr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qt(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Sr(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _r(e) {
  var t = Sr(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const en = () => {
};
let St = {}, In = {}, Nn = null, jn = {
  mark: en,
  measure: en
};
try {
  typeof window < "u" && (St = window), typeof document < "u" && (In = document), typeof MutationObserver < "u" && (Nn = MutationObserver), typeof performance < "u" && (jn = performance);
} catch {
}
const {
  userAgent: tn = ""
} = St.navigator || {}, oe = St, z = In, nn = Nn, Me = jn;
oe.document;
const te = !!z.documentElement && !!z.head && typeof z.addEventListener == "function" && typeof z.createElement == "function", Fn = ~tn.indexOf("MSIE") || ~tn.indexOf("Trident/");
var kr = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Cr = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Mn = {
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
}, Rr = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Dn = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], $ = "classic", Ue = "duotone", Ir = "sharp", Nr = "sharp-duotone", Ln = [$, Ue, Ir, Nr], jr = {
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
}, Fr = {
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
}, Mr = /* @__PURE__ */ new Map([["classic", {
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
}]]), Dr = {
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
}, Lr = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], rn = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, zr = ["kit"], Yr = {
  kit: {
    "fa-kit": "fak"
  }
}, $r = ["fak", "fakd"], Wr = {
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
}, Ur = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], qr = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Gr = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Hr = {
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
}, Vr = {
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
}, Xr = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], st = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Ur, ...Xr], Br = ["solid", "regular", "light", "thin", "duotone", "brands"], zn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Jr = zn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Kr = [...Object.keys(Vr), ...Br, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", De.GROUP, De.SWAP_OPACITY, De.PRIMARY, De.SECONDARY].concat(zn.map((e) => "".concat(e, "x"))).concat(Jr.map((e) => "w-".concat(e))), Zr = {
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
const Q = "___FONT_AWESOME___", ft = 16, Yn = "fa", $n = "svg-inline--fa", ce = "data-fa-i2svg", lt = "data-fa-pseudo-element", Qr = "data-fa-pseudo-element-pending", _t = "data-prefix", kt = "data-icon", on = "fontawesome-i2svg", ea = "async", ta = ["HTML", "HEAD", "STYLE", "SCRIPT"], Wn = (() => {
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
const Un = u({}, Mn);
Un[$] = u(u(u(u({}, {
  "fa-duotone": "duotone"
}), Mn[$]), rn.kit), rn["kit-duotone"]);
const na = Ce(Un), ct = u({}, Dr);
ct[$] = u(u(u(u({}, {
  duotone: "fad"
}), ct[$]), an.kit), an["kit-duotone"]);
const sn = Ce(ct), ut = u({}, it);
ut[$] = u(u({}, ut[$]), Wr.kit);
const Ct = Ce(ut), dt = u({}, Hr);
dt[$] = u(u({}, dt[$]), Yr.kit);
Ce(dt);
const ra = kr, qn = "fa-layers-text", aa = Cr, oa = u({}, jr);
Ce(oa);
const ia = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], et = Rr, sa = [...zr, ...Kr], we = oe.FontAwesomeConfig || {};
function fa(e) {
  var t = z.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function la(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
z && typeof z.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = la(fa(n));
  a != null && (we[r] = a);
});
const Gn = {
  styleDefault: "solid",
  familyDefault: $,
  cssPrefix: Yn,
  replacementClass: $n,
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
we.familyPrefix && (we.cssPrefix = we.familyPrefix);
const be = u(u({}, Gn), we);
be.autoReplaceSvg || (be.observeMutations = !1);
const v = {};
Object.keys(Gn).forEach((e) => {
  Object.defineProperty(v, e, {
    enumerable: !0,
    set: function(t) {
      be[e] = t, Se.forEach((n) => n(v));
    },
    get: function() {
      return be[e];
    }
  });
});
Object.defineProperty(v, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    be.cssPrefix = e, Se.forEach((t) => t(v));
  },
  get: function() {
    return be.cssPrefix;
  }
});
oe.FontAwesomeConfig = v;
const Se = [];
function ca(e) {
  return Se.push(e), () => {
    Se.splice(Se.indexOf(e), 1);
  };
}
const ae = ft, B = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ua(e) {
  if (!e || !te)
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
const da = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function _e() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += da[Math.random() * 62 | 0];
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
function Hn(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ma(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Hn(e[n]), '" '), "").trim();
}
function qe(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function It(e) {
  return e.size !== B.size || e.x !== B.x || e.y !== B.y || e.rotate !== B.rotate || e.flipX || e.flipY;
}
function pa(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), f = "rotate(".concat(t.rotate, " 0 0)"), m = {
    transform: "".concat(o, " ").concat(s, " ").concat(f)
  }, c = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: m,
    path: c
  };
}
function ga(e) {
  let {
    transform: t,
    width: n = ft,
    height: r = ft,
    startCentered: a = !1
  } = e, o = "";
  return a && Fn ? o += "translate(".concat(t.x / ae - n / 2, "em, ").concat(t.y / ae - r / 2, "em) ") : a ? o += "translate(calc(-50% + ".concat(t.x / ae, "em), calc(-50% + ").concat(t.y / ae, "em)) ") : o += "translate(".concat(t.x / ae, "em, ").concat(t.y / ae, "em) "), o += "scale(".concat(t.size / ae * (t.flipX ? -1 : 1), ", ").concat(t.size / ae * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var ha = `:root, :host {
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
function Vn() {
  const e = Yn, t = $n, n = v.cssPrefix, r = v.replacementClass;
  let a = ha;
  if (n !== e || r !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), f = new RegExp("\\.".concat(t), "g");
    a = a.replace(o, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(f, ".".concat(r));
  }
  return a;
}
let fn = !1;
function tt() {
  v.autoAddCss && !fn && (ua(Vn()), fn = !0);
}
var ya = {
  mixout() {
    return {
      dom: {
        css: Vn,
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
const ee = oe || {};
ee[Q] || (ee[Q] = {});
ee[Q].styles || (ee[Q].styles = {});
ee[Q].hooks || (ee[Q].hooks = {});
ee[Q].shims || (ee[Q].shims = []);
var J = ee[Q];
const Xn = [], Bn = function() {
  z.removeEventListener("DOMContentLoaded", Bn), Ye = 1, Xn.map((e) => e());
};
let Ye = !1;
te && (Ye = (z.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(z.readyState), Ye || z.addEventListener("DOMContentLoaded", Bn));
function ba(e) {
  te && (Ye ? setTimeout(e, 0) : Xn.push(e));
}
function Re(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Hn(e) : "<".concat(t, " ").concat(ma(n), ">").concat(r.map(Re).join(""), "</").concat(t, ">");
}
function ln(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var nt = function(t, n, r, a) {
  var o = Object.keys(t), s = o.length, f = n, m, c, d;
  for (r === void 0 ? (m = 1, d = t[o[0]]) : (m = 0, d = r); m < s; m++)
    c = o[m], d = f(d, t[c], c, t);
  return d;
};
function va(e) {
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
  const t = va(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function xa(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function cn(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function pt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = cn(t);
  typeof J.hooks.addPack == "function" && !r ? J.hooks.addPack(e, cn(t)) : J.styles[e] = u(u({}, J.styles[e] || {}), a), e === "fas" && pt("fa", t);
}
const {
  styles: ke,
  shims: Ea
} = J, Jn = Object.keys(Ct), Aa = Jn.reduce((e, t) => (e[t] = Object.keys(Ct[t]), e), {});
let Nt = null, Kn = {}, Zn = {}, Qn = {}, er = {}, tr = {};
function Oa(e) {
  return ~sa.indexOf(e);
}
function Pa(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Oa(a) ? a : null;
}
const nr = () => {
  const e = (r) => nt(ke, (a, o, s) => (a[s] = nt(o, r, {}), a), {});
  Kn = e((r, a, o) => (a[3] && (r[a[3]] = o), a[2] && a[2].filter((f) => typeof f == "number").forEach((f) => {
    r[f.toString(16)] = o;
  }), r)), Zn = e((r, a, o) => (r[o] = o, a[2] && a[2].filter((f) => typeof f == "string").forEach((f) => {
    r[f] = o;
  }), r)), tr = e((r, a, o) => {
    const s = a[2];
    return r[o] = o, s.forEach((f) => {
      r[f] = o;
    }), r;
  });
  const t = "far" in ke || v.autoFetchSvg, n = nt(Ea, (r, a) => {
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
  Qn = n.names, er = n.unicodes, Nt = Ge(v.styleDefault, {
    family: v.familyDefault
  });
};
ca((e) => {
  Nt = Ge(e.styleDefault, {
    family: v.familyDefault
  });
});
nr();
function jt(e, t) {
  return (Kn[e] || {})[t];
}
function Ta(e, t) {
  return (Zn[e] || {})[t];
}
function le(e, t) {
  return (tr[e] || {})[t];
}
function rr(e) {
  return Qn[e] || {
    prefix: null,
    iconName: null
  };
}
function wa(e) {
  const t = er[e], n = jt("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function ie() {
  return Nt;
}
const ar = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Sa(e) {
  let t = $;
  const n = Jn.reduce((r, a) => (r[a] = "".concat(v.cssPrefix, "-").concat(a), r), {});
  return Ln.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => Aa[r].includes(a))) && (t = r);
  }), t;
}
function Ge(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = $
  } = t, r = na[n][e];
  if (n === Ue && !e)
    return "fad";
  const a = sn[n][e] || sn[n][r], o = e in J.styles ? e : null;
  return a || o || null;
}
function _a(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = Pa(v.cssPrefix, r);
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
  const a = st.concat(qr), o = un(e.filter((h) => a.includes(h))), s = un(e.filter((h) => !st.includes(h))), f = o.filter((h) => (r = h, !Dn.includes(h))), [m = null] = f, c = Sa(o), d = u(u({}, _a(s)), {}, {
    prefix: Ge(m, {
      family: c
    })
  });
  return u(u(u({}, d), Ia({
    values: e,
    family: c,
    styles: ke,
    config: v,
    canonical: d,
    givenPrefix: r
  })), ka(n, r, d));
}
function ka(e, t, n) {
  let {
    prefix: r,
    iconName: a
  } = n;
  if (e || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  const o = t === "fa" ? rr(a) : {}, s = le(r, a);
  return a = o.iconName || s || a, r = o.prefix || r, r === "far" && !ke.far && ke.fas && !v.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const Ca = Ln.filter((e) => e !== $ || e !== Ue), Ra = Object.keys(it).filter((e) => e !== $).map((e) => Object.keys(it[e])).flat();
function Ia(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: o = {},
    config: s = {}
  } = e, f = n === Ue, m = t.includes("fa-duotone") || t.includes("fad"), c = s.familyDefault === "duotone", d = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!f && (m || c || d) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Ca.includes(n) && (Object.keys(o).find((y) => Ra.includes(y)) || s.autoFetchSvg)) {
    const y = Mr.get(n).defaultShortPrefixId;
    r.prefix = y, r.iconName = le(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = ie() || "fas"), r;
}
class Na {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((o) => {
      this.definitions[o] = u(u({}, this.definitions[o] || {}), a[o]), pt(o, a[o]);
      const s = Ct[$][o];
      s && pt(s, a[o]), nr();
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
      t[o] || (t[o] = {}), m.length > 0 && m.forEach((c) => {
        typeof c == "string" && (t[o][c] = f);
      }), t[o][s] = f;
    }), t;
  }
}
let dn = [], ge = {};
const ye = {}, ja = Object.keys(ye);
function Fa(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return dn = e, ge = {}, Object.keys(ye).forEach((r) => {
    ja.indexOf(r) === -1 && delete ye[r];
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
function se() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return ye[e] ? ye[e].apply(null, t) : void 0;
}
function ht(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || ie();
  if (t)
    return t = le(n, t) || t, ln(or.definitions, n, t) || ln(J.styles, n, t);
}
const or = new Na(), Ma = () => {
  v.autoReplaceSvg = !1, v.observeMutations = !1, ue("noAuto");
}, Da = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return te ? (ue("beforeI2svg", e), se("pseudoElements2svg", e), se("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    v.autoReplaceSvg === !1 && (v.autoReplaceSvg = !0), v.observeMutations = !0, ba(() => {
      za({
        autoReplaceSvgRoot: t
      }), ue("watch", e);
    });
  }
}, La = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: le(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Ge(e[0]);
      return {
        prefix: n,
        iconName: le(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(v.cssPrefix, "-")) > -1 || e.match(ra))) {
      const t = He(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || ie(),
        iconName: le(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = ie();
      return {
        prefix: t,
        iconName: le(t, e) || e
      };
    }
  }
}, U = {
  noAuto: Ma,
  config: v,
  dom: Da,
  parse: La,
  library: or,
  findIconDefinition: ht,
  toHtml: Re
}, za = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = z
  } = e;
  (Object.keys(J.styles).length > 0 || v.autoFetchSvg) && te && v.autoReplaceSvg && U.dom.i2svg({
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
      if (!te) return;
      const n = z.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Ya(e) {
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
    } = n, c = {
      x: f / m / 2,
      y: 0.5
    };
    a.style = qe(u(u({}, o), {}, {
      "transform-origin": "".concat(c.x + s.x / 16, "em ").concat(c.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function $a(e) {
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
      attributes: u(u({}, a), {}, {
        id: s
      }),
      children: r
    }]
  }];
}
function Ft(e) {
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
    titleId: c,
    extra: d,
    watchable: h = !1
  } = e, {
    width: y,
    height: T
  } = n.found ? n : t, N = $r.includes(r), _ = [v.replacementClass, a ? "".concat(v.cssPrefix, "-").concat(a) : ""].filter((p) => d.classes.indexOf(p) === -1).filter((p) => p !== "" || !!p).concat(d.classes).join(" ");
  let w = {
    children: [],
    attributes: u(u({}, d.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: _,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(y, " ").concat(T)
    })
  };
  const j = N && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(y / T * 16 * 0.0625, "em")
  } : {};
  h && (w.attributes[ce] = ""), f && (w.children.push({
    tag: "title",
    attributes: {
      id: w.attributes["aria-labelledby"] || "title-".concat(c || _e())
    },
    children: [f]
  }), delete w.attributes.title);
  const L = u(u({}, w), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: m,
    transform: o,
    symbol: s,
    styles: u(u({}, j), d.styles)
  }), {
    children: I,
    attributes: F
  } = n.found && t.found ? se("generateAbstractMask", L) || {
    children: [],
    attributes: {}
  } : se("generateAbstractIcon", L) || {
    children: [],
    attributes: {}
  };
  return L.children = I, L.attributes = F, s ? $a(L) : Ya(L);
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
  } = e, m = u(u(u({}, s.attributes), o ? {
    title: o
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  f && (m[ce] = "");
  const c = u({}, s.styles);
  It(a) && (c.transform = ga({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), c["-webkit-transform"] = c.transform);
  const d = qe(c);
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
function Wa(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, a = u(u(u({}, r.attributes), n ? {
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
const Ua = {
  found: !1,
  width: 512,
  height: 512
};
function qa(e, t) {
  !Wn && !v.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function bt(e, t) {
  let n = t;
  return t === "fa" && v.styleDefault !== null && (t = ie()), new Promise((r, a) => {
    if (n === "fa") {
      const o = rr(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && rt[t] && rt[t][e]) {
      const o = rt[t][e];
      return r(yt(o));
    }
    qa(e, t), r(u(u({}, Ua), {}, {
      icon: v.showMissingIcons && e ? se("missingIconAbstract") || {} : {}
    }));
  });
}
const pn = () => {
}, vt = v.measurePerformance && Me && Me.mark && Me.measure ? Me : {
  mark: pn,
  measure: pn
}, Te = 'FA "6.7.2"', Ga = (e) => (vt.mark("".concat(Te, " ").concat(e, " begins")), () => ir(e)), ir = (e) => {
  vt.mark("".concat(Te, " ").concat(e, " ends")), vt.measure("".concat(Te, " ").concat(e), "".concat(Te, " ").concat(e, " begins"), "".concat(Te, " ").concat(e, " ends"));
};
var Mt = {
  begin: Ga,
  end: ir
};
const Le = () => {
};
function gn(e) {
  return typeof (e.getAttribute ? e.getAttribute(ce) : null) == "string";
}
function Ha(e) {
  const t = e.getAttribute ? e.getAttribute(_t) : null, n = e.getAttribute ? e.getAttribute(kt) : null;
  return t && n;
}
function Va(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(v.replacementClass);
}
function Xa() {
  return v.autoReplaceSvg === !0 ? ze.replace : ze[v.autoReplaceSvg] || ze.replace;
}
function Ba(e) {
  return z.createElementNS("http://www.w3.org/2000/svg", e);
}
function Ja(e) {
  return z.createElement(e);
}
function sr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Ba : Ja
  } = t;
  if (typeof e == "string")
    return z.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  }), (e.children || []).forEach(function(o) {
    r.appendChild(sr(o, {
      ceFn: n
    }));
  }), r;
}
function Ka(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const ze = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(sr(n), t);
      }), t.getAttribute(ce) === null && v.keepOriginalSource) {
        let n = z.createComment(Ka(t));
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
    t.setAttribute(ce, ""), t.innerHTML = a;
  }
};
function hn(e) {
  e();
}
function fr(e, t) {
  const n = typeof t == "function" ? t : Le;
  if (e.length === 0)
    n();
  else {
    let r = hn;
    v.mutateApproach === ea && (r = oe.requestAnimationFrame || hn), r(() => {
      const a = Xa(), o = Mt.begin("mutate");
      e.map(a), o(), n();
    });
  }
}
let Dt = !1;
function lr() {
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
    const s = ie();
    ve(o).forEach((f) => {
      if (f.type === "childList" && f.addedNodes.length > 0 && !gn(f.addedNodes[0]) && (v.searchPseudoElements && r(f.target), t(f.target)), f.type === "attributes" && f.target.parentNode && v.searchPseudoElements && r(f.target.parentNode), f.type === "attributes" && gn(f.target) && ~ia.indexOf(f.attributeName))
        if (f.attributeName === "class" && Ha(f.target)) {
          const {
            prefix: m,
            iconName: c
          } = He(Rt(f.target));
          f.target.setAttribute(_t, m || s), c && f.target.setAttribute(kt, c);
        } else Va(f.target) && n(f.target);
    });
  }), te && $e.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Za() {
  $e && $e.disconnect();
}
function Qa(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const o = a.split(":"), s = o[0], f = o.slice(1);
    return s && f.length > 0 && (r[s] = f.join(":").trim()), r;
  }, {})), n;
}
function eo(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = He(Rt(e));
  return a.prefix || (a.prefix = ie()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Ta(a.prefix, e.innerText) || jt(a.prefix, mt(e.innerText))), !a.iconName && v.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function to(e) {
  const t = ve(e.attributes).reduce((a, o) => (a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return v.autoA11y && (n ? t["aria-labelledby"] = "".concat(v.replacementClass, "-title-").concat(r || _e()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function no() {
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
  } = eo(e), o = to(e), s = gt("parseNodeAttributes", {}, e);
  let f = t.styleParser ? Qa(e) : [];
  return u({
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
  styles: ro
} = J;
function cr(e) {
  const t = v.autoReplaceSvg === "nest" ? bn(e, {
    styleParser: !1
  }) : bn(e);
  return ~t.extra.classes.indexOf(qn) ? se("generateLayersText", e, t) : se("generateSvgReplacementMutation", e, t);
}
function ao() {
  return [...Lr, ...st];
}
function vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!te) return Promise.resolve();
  const n = z.documentElement.classList, r = (d) => n.add("".concat(on, "-").concat(d)), a = (d) => n.remove("".concat(on, "-").concat(d)), o = v.autoFetchSvg ? ao() : Dn.concat(Object.keys(ro));
  o.includes("fa") || o.push("fa");
  const s = [".".concat(qn, ":not([").concat(ce, "])")].concat(o.map((d) => ".".concat(d, ":not([").concat(ce, "])"))).join(", ");
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
  const m = Mt.begin("onTree"), c = f.reduce((d, h) => {
    try {
      const y = cr(h);
      y && d.push(y);
    } catch (y) {
      Wn || y.name === "MissingIcon" && console.error(y);
    }
    return d;
  }, []);
  return new Promise((d, h) => {
    Promise.all(c).then((y) => {
      fr(y, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), m(), d();
      });
    }).catch((y) => {
      m(), h(y);
    });
  });
}
function oo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  cr(e).then((n) => {
    n && fr([n], t);
  });
}
function io(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : ht(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : ht(a || {})), e(r, u(u({}, n), {}, {
      mask: a
    }));
  };
}
const so = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = B,
    symbol: r = !1,
    mask: a = null,
    maskId: o = null,
    title: s = null,
    titleId: f = null,
    classes: m = [],
    attributes: c = {},
    styles: d = {}
  } = t;
  if (!e) return;
  const {
    prefix: h,
    iconName: y,
    icon: T
  } = e;
  return Ve(u({
    type: "icon"
  }, e), () => (ue("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), v.autoA11y && (s ? c["aria-labelledby"] = "".concat(v.replacementClass, "-title-").concat(f || _e()) : (c["aria-hidden"] = "true", c.focusable = "false")), Ft({
    icons: {
      main: yt(T),
      mask: a ? yt(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: h,
    iconName: y,
    transform: u(u({}, B), n),
    symbol: r,
    title: s,
    maskId: o,
    titleId: f,
    extra: {
      attributes: c,
      styles: d,
      classes: m
    }
  })));
};
var fo = {
  mixout() {
    return {
      icon: io(so)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = vn, e.nodeCallback = oo, e;
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
        mask: c,
        maskId: d,
        extra: h
      } = n;
      return new Promise((y, T) => {
        Promise.all([bt(r, s), c.iconName ? bt(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((N) => {
          let [_, w] = N;
          y([t, Ft({
            icons: {
              main: _,
              mask: w
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
        }).catch(T);
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
      return It(o) && (m = se("generateAbstractTransformGrouping", {
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
}, lo = {
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
}, co = {
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
        }), Wa({
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
}, uo = {
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
          transform: u(u({}, B), n),
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
      if (Fn) {
        const m = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        s = c.width / m, f = c.height / m;
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
const mo = new RegExp('"', "ug"), xn = [1105920, 1112319], En = u(u(u(u({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Fr), Zr), Gr), Et = Object.keys(En).reduce((e, t) => (e[t.toLowerCase()] = En[t], e), {}), po = Object.keys(Et).reduce((e, t) => {
  const n = Et[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function go(e) {
  const t = e.replace(mo, ""), n = xa(t, 0), r = n >= xn[0] && n <= xn[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: mt(a ? t[0] : t),
    isSecondary: r || a
  };
}
function ho(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (Et[n] || {})[a] || po[n];
}
function An(e, t) {
  const n = "".concat(Qr).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const s = ve(e.children).filter((y) => y.getAttribute(lt) === t)[0], f = oe.getComputedStyle(e, t), m = f.getPropertyValue("font-family"), c = m.match(aa), d = f.getPropertyValue("font-weight"), h = f.getPropertyValue("content");
    if (s && !c)
      return e.removeChild(s), r();
    if (c && h !== "none" && h !== "") {
      const y = f.getPropertyValue("content");
      let T = ho(m, d);
      const {
        value: N,
        isSecondary: _
      } = go(y), w = c[0].startsWith("FontAwesome");
      let j = jt(T, N), L = j;
      if (w) {
        const I = wa(N);
        I.iconName && I.prefix && (j = I.iconName, T = I.prefix);
      }
      if (j && !_ && (!s || s.getAttribute(_t) !== T || s.getAttribute(kt) !== L)) {
        e.setAttribute(n, L), s && e.removeChild(s);
        const I = no(), {
          extra: F
        } = I;
        F.attributes[lt] = t, bt(j, T).then((p) => {
          const q = Ft(u(u({}, I), {}, {
            icons: {
              main: p,
              mask: ar()
            },
            prefix: T,
            iconName: L,
            extra: F,
            watchable: !0
          })), K = z.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(K, e.firstChild) : e.appendChild(K), K.outerHTML = q.map((ne) => Re(ne)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function yo(e) {
  return Promise.all([An(e, "::before"), An(e, "::after")]);
}
function bo(e) {
  return e.parentNode !== document.head && !~ta.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(lt) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function On(e) {
  if (te)
    return new Promise((t, n) => {
      const r = ve(e.querySelectorAll("*")).filter(bo).map(yo), a = Mt.begin("searchPseudoElements");
      lr(), Promise.all(r).then(() => {
        a(), xt(), t();
      }).catch(() => {
        a(), xt(), n();
      });
    });
}
var vo = {
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
var xo = {
  mixout() {
    return {
      dom: {
        unwatch() {
          lr(), Pn = !0;
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
        Za();
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
var Eo = {
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
      }, f = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), m = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), c = "rotate(".concat(r.rotate, " 0 0)"), d = {
        transform: "".concat(f, " ").concat(m, " ").concat(c)
      }, h = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, y = {
        outer: s,
        inner: d,
        path: h
      };
      return {
        tag: "g",
        attributes: u({}, y.outer),
        children: [{
          tag: "g",
          attributes: u({}, y.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: u(u({}, n.icon.attributes), y.path)
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
function wn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Ao(e) {
  return e.tag === "g" ? e.children : [e];
}
var Oo = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? He(n.split(" ").map((a) => a.trim())) : ar();
        return r.prefix || (r.prefix = ie()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
        icon: c
      } = a, {
        width: d,
        icon: h
      } = o, y = pa({
        transform: f,
        containerWidth: d,
        iconWidth: m
      }), T = {
        tag: "rect",
        attributes: u(u({}, at), {}, {
          fill: "white"
        })
      }, N = c.children ? {
        children: c.children.map(wn)
      } : {}, _ = {
        tag: "g",
        attributes: u({}, y.inner),
        children: [wn(u({
          tag: c.tag,
          attributes: u(u({}, c.attributes), y.path)
        }, N))]
      }, w = {
        tag: "g",
        attributes: u({}, y.outer),
        children: [_]
      }, j = "mask-".concat(s || _e()), L = "clip-".concat(s || _e()), I = {
        tag: "mask",
        attributes: u(u({}, at), {}, {
          id: j,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [T, w]
      }, F = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: L
          },
          children: Ao(h)
        }, I]
      };
      return n.push(F, {
        tag: "rect",
        attributes: u({
          fill: "currentColor",
          "clip-path": "url(#".concat(L, ")"),
          mask: "url(#".concat(j, ")")
        }, at)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Po = {
  provides(e) {
    let t = !1;
    oe.matchMedia && (t = oe.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: u(u({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const o = u(u({}, a), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: u(u({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || s.children.push({
        tag: "animate",
        attributes: u(u({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: u(u({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: u(u({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: u(u({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: u(u({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: u(u({}, o), {}, {
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
}, To = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, wo = [ya, fo, lo, co, uo, vo, xo, Eo, Oo, Po, To];
Fa(wo, {
  mixoutsTo: U
});
U.noAuto;
U.config;
U.library;
U.dom;
const At = U.parse;
U.findIconDefinition;
U.toHtml;
const So = U.icon;
U.layer;
U.text;
U.counter;
function Sn(e, t) {
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
    t % 2 ? Sn(Object(n), !0).forEach(function(r) {
      he(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sn(Object(n)).forEach(function(r) {
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
function _o(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function ko(e, t) {
  if (e == null) return {};
  var n = _o(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ot(e) {
  return Co(e) || Ro(e) || Io(e) || No();
}
function Co(e) {
  if (Array.isArray(e)) return Pt(e);
}
function Ro(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Io(e, t) {
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
function No() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jo(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, o = e.bounce, s = e.shake, f = e.flash, m = e.spin, c = e.spinPulse, d = e.spinReverse, h = e.pulse, y = e.fixedWidth, T = e.inverse, N = e.border, _ = e.listItem, w = e.flip, j = e.size, L = e.rotation, I = e.pull, F = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": o,
    "fa-shake": s,
    "fa-flash": f,
    "fa-spin": m,
    "fa-spin-reverse": d,
    "fa-spin-pulse": c,
    "fa-pulse": h,
    "fa-fw": y,
    "fa-inverse": T,
    "fa-border": N,
    "fa-li": _,
    "fa-flip": w === !0,
    "fa-flip-horizontal": w === "horizontal" || w === "both",
    "fa-flip-vertical": w === "vertical" || w === "both"
  }, he(t, "fa-".concat(j), typeof j < "u" && j !== null), he(t, "fa-rotate-".concat(L), typeof L < "u" && L !== null && L !== 0), he(t, "fa-pull-".concat(I), typeof I < "u" && I !== null), he(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(F).map(function(p) {
    return F[p] ? p : null;
  }).filter(function(p) {
    return p;
  });
}
function Fo(e) {
  return e = e - 0, e === e;
}
function ur(e) {
  return Fo(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Mo = ["style"];
function Do(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Lo(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = ur(n.slice(0, r)), o = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Do(a)] = o : t[a] = o, t;
  }, {});
}
function dr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(m) {
    return dr(e, m);
  }), a = Object.keys(t.attributes || {}).reduce(function(m, c) {
    var d = t.attributes[c];
    switch (c) {
      case "class":
        m.attrs.className = d, delete t.attributes.class;
        break;
      case "style":
        m.attrs.style = Lo(d);
        break;
      default:
        c.indexOf("aria-") === 0 || c.indexOf("data-") === 0 ? m.attrs[c.toLowerCase()] = d : m.attrs[ur(c)] = d;
    }
    return m;
  }, {
    attrs: {}
  }), o = n.style, s = o === void 0 ? {} : o, f = ko(n, Mo);
  return a.attrs.style = X(X({}, a.attrs.style), s), e.apply(void 0, [t.tag, X(X({}, a.attrs), f)].concat(Ot(r)));
}
var mr = !1;
try {
  mr = process.env.NODE_ENV === "production";
} catch {
}
function zo() {
  if (!mr && console && typeof console.error == "function") {
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
  var n = X(X({}, kn), e), r = n.icon, a = n.mask, o = n.symbol, s = n.className, f = n.title, m = n.titleId, c = n.maskId, d = _n(r), h = ot("classes", [].concat(Ot(jo(n)), Ot((s || "").split(" ")))), y = ot("transform", typeof n.transform == "string" ? At.transform(n.transform) : n.transform), T = ot("mask", _n(a)), N = So(d, X(X(X(X({}, h), y), T), {}, {
    symbol: o,
    title: f,
    titleId: m,
    maskId: c
  }));
  if (!N)
    return zo("Could not find icon", d), null;
  var _ = N.abstract, w = {
    ref: t
  };
  return Object.keys(n).forEach(function(j) {
    kn.hasOwnProperty(j) || (w[j] = n[j]);
  }), Yo(_[0], w);
});
Lt.displayName = "FontAwesomeIcon";
Lt.propTypes = {
  beat: E.bool,
  border: E.bool,
  beatFade: E.bool,
  bounce: E.bool,
  className: E.string,
  fade: E.bool,
  flash: E.bool,
  mask: E.oneOfType([E.object, E.array, E.string]),
  maskId: E.string,
  fixedWidth: E.bool,
  inverse: E.bool,
  flip: E.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: E.oneOfType([E.object, E.array, E.string]),
  listItem: E.bool,
  pull: E.oneOf(["right", "left"]),
  pulse: E.bool,
  rotation: E.oneOf([0, 90, 180, 270]),
  shake: E.bool,
  size: E.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: E.bool,
  spinPulse: E.bool,
  spinReverse: E.bool,
  symbol: E.oneOfType([E.bool, E.string]),
  title: E.string,
  titleId: E.string,
  transform: E.oneOfType([E.string, E.object]),
  swapOpacity: E.bool
};
var Yo = dr.bind(null, Tt.createElement);
const $o = ({
  id: e,
  label: t,
  description: n,
  state: r = "default",
  size: a = "default",
  disabled: o = !1,
  value: s,
  onChange: f,
  prefixIcon: m,
  suffixContent: c,
  pattern: d,
  errorMessage: h,
  className: y,
  ...T
}) => {
  const N = o || r === "disabled", _ = [
    "usa-input",
    a !== "default" ? `usa-input--${a}` : "",
    r === "error" ? "usa-input--error" : "",
    r === "success" ? "usa-input--success" : "",
    N ? "usa-input--disabled" : "",
    y
  ].filter(Boolean).join(" "), w = [
    "usa-input-wrapper",
    a !== "default" ? `usa-input-wrapper--${a}` : "",
    m ? "usa-input-wrapper--prefix" : "",
    c ? "usa-input-wrapper--suffix" : "",
    r === "error" ? "usa-input-wrapper--error" : "",
    r === "success" ? "usa-input-wrapper--success" : "",
    N ? "usa-input-wrapper--disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ Z.jsxs("div", { className: "usa-text-input", children: [
    t && /* @__PURE__ */ Z.jsx("label", { className: "usa-label", htmlFor: e, children: t }),
    n && /* @__PURE__ */ Z.jsx("span", { className: "usa-text-input__description", children: n }),
    r === "error" && h && /* @__PURE__ */ Z.jsx("span", { className: "usa-text-input__error-message", children: h }),
    /* @__PURE__ */ Z.jsxs("div", { className: w, children: [
      m && /* @__PURE__ */ Z.jsx("div", { className: "usa-input-prefix", children: /* @__PURE__ */ Z.jsx(Lt, { icon: m }) }),
      /* @__PURE__ */ Z.jsx(
        "input",
        {
          id: e,
          className: _,
          disabled: N,
          value: s,
          onChange: f,
          pattern: d,
          "aria-invalid": r === "error",
          ...T
        }
      ),
      c && /* @__PURE__ */ Z.jsx("div", { className: "usa-input-suffix", children: c })
    ] })
  ] });
};
$o.propTypes = {
  id: E.string.isRequired,
  label: E.string,
  description: E.string,
  state: E.oneOf(["default", "disabled", "error", "success"]),
  size: E.oneOf(["default", "2xs", "xs", "sm", "md", "lg", "xl", "2xl"]),
  disabled: E.bool,
  value: E.string,
  onChange: E.func,
  prefixIcon: E.oneOfType([E.object, E.array, E.string]),
  suffixContent: E.node,
  pattern: E.string,
  errorMessage: E.string,
  className: E.string
};
export {
  $o as TextInput
};
//# sourceMappingURL=index.js.map
