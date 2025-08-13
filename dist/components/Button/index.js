import St from "react";
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
var Ae = {};
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
        return i.$$typeof === xe ? null : i.displayName || i.name || null;
      if (typeof i == "string") return i;
      switch (i) {
        case _:
          return "Fragment";
        case N:
          return "Profiler";
        case S:
          return "StrictMode";
        case p:
          return "Suspense";
        case q:
          return "SuspenseList";
        case ve:
          return "Activity";
      }
      if (typeof i == "object")
        switch (typeof i.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), i.$$typeof) {
          case j:
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
          case te:
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
        var b = l.error, E = typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return b.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          E
        ), t(i);
      }
    }
    function r(i) {
      if (i === _) return "<>";
      if (typeof i == "object" && i !== null && i.$$typeof === te)
        return "<...>";
      try {
        var l = e(i);
        return l ? "<" + l + ">" : "<...>";
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
      if (ue.call(i, "key")) {
        var l = Object.getOwnPropertyDescriptor(i, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return i.key !== void 0;
    }
    function f(i, l) {
      function b() {
        de || (de = !0, console.error(
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
    function c(i, l, b, E, O, P, w, k) {
      return b = P.ref, i = {
        $$typeof: T,
        type: i,
        key: l,
        props: P,
        _owner: O
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
        value: w
      }), Object.defineProperty(i, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    }
    function d(i, l, b, E, O, P, w, k) {
      var A = l.children;
      if (A !== void 0)
        if (E)
          if (Ee(A)) {
            for (E = 0; E < A.length; E++)
              y(A[E]);
            Object.freeze && Object.freeze(A);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(A);
      if (ue.call(l, "key")) {
        A = e(i);
        var C = Object.keys(l).filter(function(Y) {
          return Y !== "key";
        });
        E = 0 < C.length ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}", me[A + E] || (C = 0 < C.length ? "{" + C.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          E,
          A,
          C,
          A
        ), me[A + E] = !0);
      }
      if (A = null, b !== void 0 && (n(b), A = "" + b), s(l) && (n(l.key), A = "" + l.key), "key" in l) {
        b = {};
        for (var R in l)
          R !== "key" && (b[R] = l[R]);
      } else b = l;
      return A && f(
        b,
        typeof i == "function" ? i.displayName || i.name || "Unknown" : i
      ), c(
        i,
        A,
        P,
        O,
        a(),
        b,
        w,
        k
      );
    }
    function y(i) {
      typeof i == "object" && i !== null && i.$$typeof === T && i._store && (i._store.validated = 1);
    }
    var h = St, T = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), I = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), ve = Symbol.for("react.activity"), xe = Symbol.for("react.client.reference"), ne = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = Object.prototype.hasOwnProperty, Ee = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      "react-stack-bottom-frame": function(i) {
        return i();
      }
    };
    var de, W = {}, H = h["react-stack-bottom-frame"].bind(
      h,
      o
    )(), se = G(r(o)), me = {};
    Ae.Fragment = _, Ae.jsx = function(i, l, b, E, O) {
      var P = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return d(
        i,
        l,
        b,
        !1,
        E,
        O,
        P ? Error("react-stack-top-frame") : H,
        P ? G(r(i)) : se
      );
    }, Ae.jsxs = function(i, l, b, E, O) {
      var P = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return d(
        i,
        l,
        b,
        !0,
        E,
        O,
        P ? Error("react-stack-top-frame") : H,
        P ? G(r(i)) : se
      );
    };
  }()), Ae;
}
var Wt;
function yr() {
  return Wt || (Wt = 1, process.env.NODE_ENV === "production" ? Ne.exports = gr() : Ne.exports = hr()), Ne.exports;
}
var Pe = yr(), je = { exports: {} }, Fe = { exports: {} }, M = {};
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
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, j = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
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
            case y:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case f:
                case d:
                case j:
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
  return M.AsyncMode = m, M.ConcurrentMode = c, M.ContextConsumer = f, M.ContextProvider = s, M.Element = t, M.ForwardRef = d, M.Fragment = r, M.Lazy = j, M.Memo = T, M.Portal = n, M.Profiler = o, M.StrictMode = a, M.Suspense = y, M.isAsyncMode = function(p) {
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
    return I(p) === j;
  }, M.isMemo = function(p) {
    return I(p) === T;
  }, M.isPortal = function(p) {
    return I(p) === n;
  }, M.isProfiler = function(p) {
    return I(p) === o;
  }, M.isStrictMode = function(p) {
    return I(p) === a;
  }, M.isSuspense = function(p) {
    return I(p) === y;
  }, M.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === c || p === o || p === a || p === y || p === h || typeof p == "object" && p !== null && (p.$$typeof === j || p.$$typeof === T || p.$$typeof === s || p.$$typeof === f || p.$$typeof === d || p.$$typeof === S || p.$$typeof === N || p.$$typeof === L || p.$$typeof === _);
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
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, j = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
    function I(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === r || g === c || g === o || g === a || g === y || g === h || typeof g == "object" && g !== null && (g.$$typeof === j || g.$$typeof === T || g.$$typeof === s || g.$$typeof === f || g.$$typeof === d || g.$$typeof === S || g.$$typeof === N || g.$$typeof === L || g.$$typeof === _);
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
              case y:
                return Ie;
              default:
                var zt = Ie && Ie.$$typeof;
                switch (zt) {
                  case f:
                  case d:
                  case j:
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
    var p = m, q = c, K = f, te = s, ve = t, xe = d, ne = r, ue = j, Ee = T, G = n, de = o, W = a, H = y, se = !1;
    function me(g) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), i(g) || F(g) === m;
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
    function E(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function O(g) {
      return F(g) === d;
    }
    function P(g) {
      return F(g) === r;
    }
    function w(g) {
      return F(g) === j;
    }
    function k(g) {
      return F(g) === T;
    }
    function A(g) {
      return F(g) === n;
    }
    function C(g) {
      return F(g) === o;
    }
    function R(g) {
      return F(g) === a;
    }
    function Y(g) {
      return F(g) === y;
    }
    D.AsyncMode = p, D.ConcurrentMode = q, D.ContextConsumer = K, D.ContextProvider = te, D.Element = ve, D.ForwardRef = xe, D.Fragment = ne, D.Lazy = ue, D.Memo = Ee, D.Portal = G, D.Profiler = de, D.StrictMode = W, D.Suspense = H, D.isAsyncMode = me, D.isConcurrentMode = i, D.isContextConsumer = l, D.isContextProvider = b, D.isElement = E, D.isForwardRef = O, D.isFragment = P, D.isLazy = w, D.isMemo = k, D.isPortal = A, D.isProfiler = C, D.isStrictMode = R, D.isSuspense = Y, D.isValidElementType = I, D.typeOf = F;
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
var Be, Ht;
function xr() {
  if (Ht) return Be;
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
  return Be = a() ? Object.assign : function(o, s) {
    for (var f, m = r(o), c, d = 1; d < arguments.length; d++) {
      f = Object(arguments[d]);
      for (var y in f)
        t.call(f, y) && (m[y] = f[y]);
      if (e) {
        c = e(f);
        for (var h = 0; h < c.length; h++)
          n.call(f, c[h]) && (m[c[h]] = f[c[h]]);
      }
    }
    return m;
  }, Be;
}
var Je, Vt;
function wt() {
  if (Vt) return Je;
  Vt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Je = e, Je;
}
var Ke, Xt;
function Rn() {
  return Xt || (Xt = 1, Ke = Function.call.bind(Object.prototype.hasOwnProperty)), Ke;
}
var Ze, Bt;
function Er() {
  if (Bt) return Ze;
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
          var y;
          try {
            if (typeof o[d] != "function") {
              var h = Error(
                (m || "React class") + ": " + f + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            y = o[d](s, d, m, f, null, t);
          } catch (j) {
            y = j;
          }
          if (y && !(y instanceof Error) && e(
            (m || "React class") + ": type specification of " + f + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in n)) {
            n[y.message] = !0;
            var T = c ? c() : "";
            e(
              "Failed " + f + " type: " + y.message + (T ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Ze = a, Ze;
}
var Qe, Jt;
function Or() {
  if (Jt) return Qe;
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
  return Qe = function(f, m) {
    var c = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function y(i) {
      var l = i && (c && i[c] || i[d]);
      if (typeof l == "function")
        return l;
    }
    var h = "<<anonymous>>", T = {
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
      element: F(),
      elementType: p(),
      instanceOf: q,
      node: xe(),
      objectOf: te,
      oneOf: K,
      oneOfType: ve,
      shape: ue,
      exact: Ee
    };
    function j(i, l) {
      return i === l ? i !== 0 || 1 / i === 1 / l : i !== i && l !== l;
    }
    function _(i, l) {
      this.message = i, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
    }
    _.prototype = Error.prototype;
    function S(i) {
      if (process.env.NODE_ENV !== "production")
        var l = {}, b = 0;
      function E(P, w, k, A, C, R, Y) {
        if (A = A || h, R = R || k, Y !== n) {
          if (m) {
            var g = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw g.name = "Invariant Violation", g;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var V = A + ":" + k;
            !l[V] && // Avoid spamming the console because they are often not actionable except for lib authors
            b < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + R + "` prop on `" + A + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[V] = !0, b++);
          }
        }
        return w[k] == null ? P ? w[k] === null ? new _("The " + C + " `" + R + "` is marked as required " + ("in `" + A + "`, but its value is `null`.")) : new _("The " + C + " `" + R + "` is marked as required in " + ("`" + A + "`, but its value is `undefined`.")) : null : i(w, k, A, C, R);
      }
      var O = E.bind(null, !1);
      return O.isRequired = E.bind(null, !0), O;
    }
    function N(i) {
      function l(b, E, O, P, w, k) {
        var A = b[E], C = W(A);
        if (C !== i) {
          var R = H(A);
          return new _(
            "Invalid " + P + " `" + w + "` of type " + ("`" + R + "` supplied to `" + O + "`, expected ") + ("`" + i + "`."),
            { expectedType: i }
          );
        }
        return null;
      }
      return S(l);
    }
    function L() {
      return S(s);
    }
    function I(i) {
      function l(b, E, O, P, w) {
        if (typeof i != "function")
          return new _("Property `" + w + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var k = b[E];
        if (!Array.isArray(k)) {
          var A = W(k);
          return new _("Invalid " + P + " `" + w + "` of type " + ("`" + A + "` supplied to `" + O + "`, expected an array."));
        }
        for (var C = 0; C < k.length; C++) {
          var R = i(k, C, O, P, w + "[" + C + "]", n);
          if (R instanceof Error)
            return R;
        }
        return null;
      }
      return S(l);
    }
    function F() {
      function i(l, b, E, O, P) {
        var w = l[b];
        if (!f(w)) {
          var k = W(w);
          return new _("Invalid " + O + " `" + P + "` of type " + ("`" + k + "` supplied to `" + E + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(i);
    }
    function p() {
      function i(l, b, E, O, P) {
        var w = l[b];
        if (!e.isValidElementType(w)) {
          var k = W(w);
          return new _("Invalid " + O + " `" + P + "` of type " + ("`" + k + "` supplied to `" + E + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(i);
    }
    function q(i) {
      function l(b, E, O, P, w) {
        if (!(b[E] instanceof i)) {
          var k = i.name || h, A = me(b[E]);
          return new _("Invalid " + P + " `" + w + "` of type " + ("`" + A + "` supplied to `" + O + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return S(l);
    }
    function K(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function l(b, E, O, P, w) {
        for (var k = b[E], A = 0; A < i.length; A++)
          if (j(k, i[A]))
            return null;
        var C = JSON.stringify(i, function(Y, g) {
          var V = H(g);
          return V === "symbol" ? String(g) : g;
        });
        return new _("Invalid " + P + " `" + w + "` of value `" + String(k) + "` " + ("supplied to `" + O + "`, expected one of " + C + "."));
      }
      return S(l);
    }
    function te(i) {
      function l(b, E, O, P, w) {
        if (typeof i != "function")
          return new _("Property `" + w + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var k = b[E], A = W(k);
        if (A !== "object")
          return new _("Invalid " + P + " `" + w + "` of type " + ("`" + A + "` supplied to `" + O + "`, expected an object."));
        for (var C in k)
          if (r(k, C)) {
            var R = i(k, C, O, P, w + "." + C, n);
            if (R instanceof Error)
              return R;
          }
        return null;
      }
      return S(l);
    }
    function ve(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var l = 0; l < i.length; l++) {
        var b = i[l];
        if (typeof b != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(b) + " at index " + l + "."
          ), s;
      }
      function E(O, P, w, k, A) {
        for (var C = [], R = 0; R < i.length; R++) {
          var Y = i[R], g = Y(O, P, w, k, A, n);
          if (g == null)
            return null;
          g.data && r(g.data, "expectedType") && C.push(g.data.expectedType);
        }
        var V = C.length > 0 ? ", expected one of type [" + C.join(", ") + "]" : "";
        return new _("Invalid " + k + " `" + A + "` supplied to " + ("`" + w + "`" + V + "."));
      }
      return S(E);
    }
    function xe() {
      function i(l, b, E, O, P) {
        return G(l[b]) ? null : new _("Invalid " + O + " `" + P + "` supplied to " + ("`" + E + "`, expected a ReactNode."));
      }
      return S(i);
    }
    function ne(i, l, b, E, O) {
      return new _(
        (i || "React class") + ": " + l + " type `" + b + "." + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function ue(i) {
      function l(b, E, O, P, w) {
        var k = b[E], A = W(k);
        if (A !== "object")
          return new _("Invalid " + P + " `" + w + "` of type `" + A + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var C in i) {
          var R = i[C];
          if (typeof R != "function")
            return ne(O, P, w, C, H(R));
          var Y = R(k, C, O, P, w + "." + C, n);
          if (Y)
            return Y;
        }
        return null;
      }
      return S(l);
    }
    function Ee(i) {
      function l(b, E, O, P, w) {
        var k = b[E], A = W(k);
        if (A !== "object")
          return new _("Invalid " + P + " `" + w + "` of type `" + A + "` " + ("supplied to `" + O + "`, expected `object`."));
        var C = t({}, b[E], i);
        for (var R in C) {
          var Y = i[R];
          if (r(i, R) && typeof Y != "function")
            return ne(O, P, w, R, H(Y));
          if (!Y)
            return new _(
              "Invalid " + P + " `" + w + "` key `" + R + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(b[E], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(i), null, "  ")
            );
          var g = Y(k, R, O, P, w + "." + R, n);
          if (g)
            return g;
        }
        return null;
      }
      return S(l);
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
          var l = y(i);
          if (l) {
            var b = l.call(i), E;
            if (l !== i.entries) {
              for (; !(E = b.next()).done; )
                if (!G(E.value))
                  return !1;
            } else
              for (; !(E = b.next()).done; ) {
                var O = E.value;
                if (O && !G(O[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function de(i, l) {
      return i === "symbol" ? !0 : l ? l["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && l instanceof Symbol : !1;
    }
    function W(i) {
      var l = typeof i;
      return Array.isArray(i) ? "array" : i instanceof RegExp ? "object" : de(l, i) ? "symbol" : l;
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
    function se(i) {
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
    function me(i) {
      return !i.constructor || !i.constructor.name ? h : i.constructor.name;
    }
    return T.checkPropTypes = a, T.resetWarningCache = a.resetWarningCache, T.PropTypes = T, T;
  }, Qe;
}
var et, Kt;
function Ar() {
  if (Kt) return et;
  Kt = 1;
  var e = /* @__PURE__ */ wt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, et = function() {
    function r(s, f, m, c, d, y) {
      if (y !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
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
  }, et;
}
var Zt;
function Pr() {
  if (Zt) return je.exports;
  if (Zt = 1, process.env.NODE_ENV !== "production") {
    var e = Cn(), t = !0;
    je.exports = /* @__PURE__ */ Or()(e.isElement, t);
  } else
    je.exports = /* @__PURE__ */ Ar()();
  return je.exports;
}
var Tr = /* @__PURE__ */ Pr();
const x = /* @__PURE__ */ pr(Tr);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Sr(e, t, n) {
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
      Sr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qt(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function wr(e, t) {
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
  var t = wr(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const en = () => {
};
let _t = {}, In = {}, Nn = null, jn = {
  mark: en,
  measure: en
};
try {
  typeof window < "u" && (_t = window), typeof document < "u" && (In = document), typeof MutationObserver < "u" && (Nn = MutationObserver), typeof performance < "u" && (jn = performance);
} catch {
}
const {
  userAgent: tn = ""
} = _t.navigator || {}, ae = _t, z = In, nn = Nn, Me = jn;
ae.document;
const ee = !!z.documentElement && !!z.head && typeof z.addEventListener == "function" && typeof z.createElement == "function", Fn = ~tn.indexOf("MSIE") || ~tn.indexOf("Trident/");
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
}, Dn = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], $ = "classic", qe = "duotone", Ir = "sharp", Nr = "sharp-duotone", Ln = [$, qe, Ir, Nr], jr = {
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
}, st = {
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
}, Xr = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], ft = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Ur, ...Xr], Br = ["solid", "regular", "light", "thin", "duotone", "brands"], zn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Jr = zn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Kr = [...Object.keys(Vr), ...Br, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", De.GROUP, De.SWAP_OPACITY, De.PRIMARY, De.SECONDARY].concat(zn.map((e) => "".concat(e, "x"))).concat(Jr.map((e) => "w-".concat(e))), Zr = {
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
const Z = "___FONT_AWESOME___", lt = 16, Yn = "fa", $n = "svg-inline--fa", le = "data-fa-i2svg", ct = "data-fa-pseudo-element", Qr = "data-fa-pseudo-element-pending", kt = "data-prefix", Ct = "data-icon", on = "fontawesome-i2svg", ea = "async", ta = ["HTML", "HEAD", "STYLE", "SCRIPT"], Wn = (() => {
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
const na = Ce(Un), ut = u({}, Dr);
ut[$] = u(u(u(u({}, {
  duotone: "fad"
}), ut[$]), an.kit), an["kit-duotone"]);
const sn = Ce(ut), dt = u({}, st);
dt[$] = u(u({}, dt[$]), Wr.kit);
const Rt = Ce(dt), mt = u({}, Hr);
mt[$] = u(u({}, mt[$]), Yr.kit);
Ce(mt);
const ra = kr, qn = "fa-layers-text", aa = Cr, oa = u({}, jr);
Ce(oa);
const ia = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], tt = Rr, sa = [...zr, ...Kr], Se = ae.FontAwesomeConfig || {};
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
  a != null && (Se[r] = a);
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
Se.familyPrefix && (Se.cssPrefix = Se.familyPrefix);
const ye = u(u({}, Gn), Se);
ye.autoReplaceSvg || (ye.observeMutations = !1);
const v = {};
Object.keys(Gn).forEach((e) => {
  Object.defineProperty(v, e, {
    enumerable: !0,
    set: function(t) {
      ye[e] = t, we.forEach((n) => n(v));
    },
    get: function() {
      return ye[e];
    }
  });
});
Object.defineProperty(v, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    ye.cssPrefix = e, we.forEach((t) => t(v));
  },
  get: function() {
    return ye.cssPrefix;
  }
});
ae.FontAwesomeConfig = v;
const we = [];
function ca(e) {
  return we.push(e), () => {
    we.splice(we.indexOf(e), 1);
  };
}
const re = lt, B = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ua(e) {
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
const da = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function _e() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += da[Math.random() * 62 | 0];
  return t;
}
function be(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function It(e) {
  return e.classList ? be(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Hn(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ma(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Hn(e[n]), '" '), "").trim();
}
function Ge(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Nt(e) {
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
    width: n = lt,
    height: r = lt,
    startCentered: a = !1
  } = e, o = "";
  return a && Fn ? o += "translate(".concat(t.x / re - n / 2, "em, ").concat(t.y / re - r / 2, "em) ") : a ? o += "translate(calc(-50% + ".concat(t.x / re, "em), calc(-50% + ").concat(t.y / re, "em)) ") : o += "translate(".concat(t.x / re, "em, ").concat(t.y / re, "em) "), o += "scale(".concat(t.size / re * (t.flipX ? -1 : 1), ", ").concat(t.size / re * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
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
function nt() {
  v.autoAddCss && !fn && (ua(Vn()), fn = !0);
}
var ya = {
  mixout() {
    return {
      dom: {
        css: Vn,
        insertCss: nt
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        nt();
      },
      beforeI2svg() {
        nt();
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
const Xn = [], Bn = function() {
  z.removeEventListener("DOMContentLoaded", Bn), Ye = 1, Xn.map((e) => e());
};
let Ye = !1;
ee && (Ye = (z.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(z.readyState), Ye || z.addEventListener("DOMContentLoaded", Bn));
function ba(e) {
  ee && (Ye ? setTimeout(e, 0) : Xn.push(e));
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
var rt = function(t, n, r, a) {
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
function pt(e) {
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
function gt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = cn(t);
  typeof J.hooks.addPack == "function" && !r ? J.hooks.addPack(e, cn(t)) : J.styles[e] = u(u({}, J.styles[e] || {}), a), e === "fas" && gt("fa", t);
}
const {
  styles: ke,
  shims: Ea
} = J, Jn = Object.keys(Rt), Oa = Jn.reduce((e, t) => (e[t] = Object.keys(Rt[t]), e), {});
let jt = null, Kn = {}, Zn = {}, Qn = {}, er = {}, tr = {};
function Aa(e) {
  return ~sa.indexOf(e);
}
function Pa(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Aa(a) ? a : null;
}
const nr = () => {
  const e = (r) => rt(ke, (a, o, s) => (a[s] = rt(o, r, {}), a), {});
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
  const t = "far" in ke || v.autoFetchSvg, n = rt(Ea, (r, a) => {
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
  Qn = n.names, er = n.unicodes, jt = He(v.styleDefault, {
    family: v.familyDefault
  });
};
ca((e) => {
  jt = He(e.styleDefault, {
    family: v.familyDefault
  });
});
nr();
function Ft(e, t) {
  return (Kn[e] || {})[t];
}
function Ta(e, t) {
  return (Zn[e] || {})[t];
}
function fe(e, t) {
  return (tr[e] || {})[t];
}
function rr(e) {
  return Qn[e] || {
    prefix: null,
    iconName: null
  };
}
function Sa(e) {
  const t = er[e], n = Ft("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function oe() {
  return jt;
}
const ar = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function wa(e) {
  let t = $;
  const n = Jn.reduce((r, a) => (r[a] = "".concat(v.cssPrefix, "-").concat(a), r), {});
  return Ln.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => Oa[r].includes(a))) && (t = r);
  }), t;
}
function He(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = $
  } = t, r = na[n][e];
  if (n === qe && !e)
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
function Ve(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const a = ft.concat(qr), o = un(e.filter((y) => a.includes(y))), s = un(e.filter((y) => !ft.includes(y))), f = o.filter((y) => (r = y, !Dn.includes(y))), [m = null] = f, c = wa(o), d = u(u({}, _a(s)), {}, {
    prefix: He(m, {
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
  const o = t === "fa" ? rr(a) : {}, s = fe(r, a);
  return a = o.iconName || s || a, r = o.prefix || r, r === "far" && !ke.far && ke.fas && !v.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const Ca = Ln.filter((e) => e !== $ || e !== qe), Ra = Object.keys(st).filter((e) => e !== $).map((e) => Object.keys(st[e])).flat();
function Ia(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: o = {},
    config: s = {}
  } = e, f = n === qe, m = t.includes("fa-duotone") || t.includes("fad"), c = s.familyDefault === "duotone", d = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!f && (m || c || d) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Ca.includes(n) && (Object.keys(o).find((h) => Ra.includes(h)) || s.autoFetchSvg)) {
    const h = Mr.get(n).defaultShortPrefixId;
    r.prefix = h, r.iconName = fe(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = oe() || "fas"), r;
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
      this.definitions[o] = u(u({}, this.definitions[o] || {}), a[o]), gt(o, a[o]);
      const s = Rt[$][o];
      s && gt(s, a[o]), nr();
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
let dn = [], pe = {};
const he = {}, ja = Object.keys(he);
function Fa(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return dn = e, pe = {}, Object.keys(he).forEach((r) => {
    ja.indexOf(r) === -1 && delete he[r];
  }), dn.forEach((r) => {
    const a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach((o) => {
      typeof a[o] == "function" && (n[o] = a[o]), typeof a[o] == "object" && Object.keys(a[o]).forEach((s) => {
        n[o] || (n[o] = {}), n[o][s] = a[o][s];
      });
    }), r.hooks) {
      const o = r.hooks();
      Object.keys(o).forEach((s) => {
        pe[s] || (pe[s] = []), pe[s].push(o[s]);
      });
    }
    r.provides && r.provides(he);
  }), n;
}
function ht(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (pe[e] || []).forEach((s) => {
    t = s.apply(null, [t, ...r]);
  }), t;
}
function ce(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (pe[e] || []).forEach((o) => {
    o.apply(null, n);
  });
}
function ie() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return he[e] ? he[e].apply(null, t) : void 0;
}
function yt(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || oe();
  if (t)
    return t = fe(n, t) || t, ln(or.definitions, n, t) || ln(J.styles, n, t);
}
const or = new Na(), Ma = () => {
  v.autoReplaceSvg = !1, v.observeMutations = !1, ce("noAuto");
}, Da = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return ee ? (ce("beforeI2svg", e), ie("pseudoElements2svg", e), ie("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    v.autoReplaceSvg === !1 && (v.autoReplaceSvg = !0), v.observeMutations = !0, ba(() => {
      za({
        autoReplaceSvgRoot: t
      }), ce("watch", e);
    });
  }
}, La = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: fe(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = He(e[0]);
      return {
        prefix: n,
        iconName: fe(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(v.cssPrefix, "-")) > -1 || e.match(ra))) {
      const t = Ve(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || oe(),
        iconName: fe(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = oe();
      return {
        prefix: t,
        iconName: fe(t, e) || e
      };
    }
  }
}, U = {
  noAuto: Ma,
  config: v,
  dom: Da,
  parse: La,
  library: or,
  findIconDefinition: yt,
  toHtml: Re
}, za = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = z
  } = e;
  (Object.keys(J.styles).length > 0 || v.autoFetchSvg) && ee && v.autoReplaceSvg && U.dom.i2svg({
    node: t
  });
};
function Xe(e, t) {
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
function Ya(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: o,
    transform: s
  } = e;
  if (Nt(s) && n.found && !r.found) {
    const {
      width: f,
      height: m
    } = n, c = {
      x: f / m / 2,
      y: 0.5
    };
    a.style = Ge(u(u({}, o), {}, {
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
    titleId: c,
    extra: d,
    watchable: y = !1
  } = e, {
    width: h,
    height: T
  } = n.found ? n : t, j = $r.includes(r), _ = [v.replacementClass, a ? "".concat(v.cssPrefix, "-").concat(a) : ""].filter((p) => d.classes.indexOf(p) === -1).filter((p) => p !== "" || !!p).concat(d.classes).join(" ");
  let S = {
    children: [],
    attributes: u(u({}, d.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: _,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(h, " ").concat(T)
    })
  };
  const N = j && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(h / T * 16 * 0.0625, "em")
  } : {};
  y && (S.attributes[le] = ""), f && (S.children.push({
    tag: "title",
    attributes: {
      id: S.attributes["aria-labelledby"] || "title-".concat(c || _e())
    },
    children: [f]
  }), delete S.attributes.title);
  const L = u(u({}, S), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: m,
    transform: o,
    symbol: s,
    styles: u(u({}, N), d.styles)
  }), {
    children: I,
    attributes: F
  } = n.found && t.found ? ie("generateAbstractMask", L) || {
    children: [],
    attributes: {}
  } : ie("generateAbstractIcon", L) || {
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
  f && (m[le] = "");
  const c = u({}, s.styles);
  Nt(a) && (c.transform = ga({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), c["-webkit-transform"] = c.transform);
  const d = Ge(c);
  d.length > 0 && (m.style = d);
  const y = [];
  return y.push({
    tag: "span",
    attributes: m,
    children: [t]
  }), o && y.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), y;
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
  }), o = Ge(r.styles);
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
  styles: at
} = J;
function bt(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(v.cssPrefix, "-").concat(tt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(v.cssPrefix, "-").concat(tt.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(v.cssPrefix, "-").concat(tt.PRIMARY),
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
function vt(e, t) {
  let n = t;
  return t === "fa" && v.styleDefault !== null && (t = oe()), new Promise((r, a) => {
    if (n === "fa") {
      const o = rr(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && at[t] && at[t][e]) {
      const o = at[t][e];
      return r(bt(o));
    }
    qa(e, t), r(u(u({}, Ua), {}, {
      icon: v.showMissingIcons && e ? ie("missingIconAbstract") || {} : {}
    }));
  });
}
const pn = () => {
}, xt = v.measurePerformance && Me && Me.mark && Me.measure ? Me : {
  mark: pn,
  measure: pn
}, Te = 'FA "6.7.2"', Ga = (e) => (xt.mark("".concat(Te, " ").concat(e, " begins")), () => ir(e)), ir = (e) => {
  xt.mark("".concat(Te, " ").concat(e, " ends")), xt.measure("".concat(Te, " ").concat(e), "".concat(Te, " ").concat(e, " begins"), "".concat(Te, " ").concat(e, " ends"));
};
var Dt = {
  begin: Ga,
  end: ir
};
const Le = () => {
};
function gn(e) {
  return typeof (e.getAttribute ? e.getAttribute(le) : null) == "string";
}
function Ha(e) {
  const t = e.getAttribute ? e.getAttribute(kt) : null, n = e.getAttribute ? e.getAttribute(Ct) : null;
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
      }), t.getAttribute(le) === null && v.keepOriginalSource) {
        let n = z.createComment(Ka(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~It(t).indexOf(v.replacementClass))
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
function fr(e, t) {
  const n = typeof t == "function" ? t : Le;
  if (e.length === 0)
    n();
  else {
    let r = hn;
    v.mutateApproach === ea && (r = ae.requestAnimationFrame || hn), r(() => {
      const a = Xa(), o = Dt.begin("mutate");
      e.map(a), o(), n();
    });
  }
}
let Lt = !1;
function lr() {
  Lt = !0;
}
function Et() {
  Lt = !1;
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
    if (Lt) return;
    const s = oe();
    be(o).forEach((f) => {
      if (f.type === "childList" && f.addedNodes.length > 0 && !gn(f.addedNodes[0]) && (v.searchPseudoElements && r(f.target), t(f.target)), f.type === "attributes" && f.target.parentNode && v.searchPseudoElements && r(f.target.parentNode), f.type === "attributes" && gn(f.target) && ~ia.indexOf(f.attributeName))
        if (f.attributeName === "class" && Ha(f.target)) {
          const {
            prefix: m,
            iconName: c
          } = Ve(It(f.target));
          f.target.setAttribute(kt, m || s), c && f.target.setAttribute(Ct, c);
        } else Va(f.target) && n(f.target);
    });
  }), ee && $e.observe(a, {
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
  let a = Ve(It(e));
  return a.prefix || (a.prefix = oe()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Ta(a.prefix, e.innerText) || Ft(a.prefix, pt(e.innerText))), !a.iconName && v.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function to(e) {
  const t = be(e.attributes).reduce((a, o) => (a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
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
  } = eo(e), o = to(e), s = ht("parseNodeAttributes", {}, e);
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
  return ~t.extra.classes.indexOf(qn) ? ie("generateLayersText", e, t) : ie("generateSvgReplacementMutation", e, t);
}
function ao() {
  return [...Lr, ...ft];
}
function vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ee) return Promise.resolve();
  const n = z.documentElement.classList, r = (d) => n.add("".concat(on, "-").concat(d)), a = (d) => n.remove("".concat(on, "-").concat(d)), o = v.autoFetchSvg ? ao() : Dn.concat(Object.keys(ro));
  o.includes("fa") || o.push("fa");
  const s = [".".concat(qn, ":not([").concat(le, "])")].concat(o.map((d) => ".".concat(d, ":not([").concat(le, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let f = [];
  try {
    f = be(e.querySelectorAll(s));
  } catch {
  }
  if (f.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const m = Dt.begin("onTree"), c = f.reduce((d, y) => {
    try {
      const h = cr(y);
      h && d.push(h);
    } catch (h) {
      Wn || h.name === "MissingIcon" && console.error(h);
    }
    return d;
  }, []);
  return new Promise((d, y) => {
    Promise.all(c).then((h) => {
      fr(h, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), m(), d();
      });
    }).catch((h) => {
      m(), y(h);
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
    const r = (t || {}).icon ? t : yt(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : yt(a || {})), e(r, u(u({}, n), {}, {
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
    prefix: y,
    iconName: h,
    icon: T
  } = e;
  return Xe(u({
    type: "icon"
  }, e), () => (ce("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), v.autoA11y && (s ? c["aria-labelledby"] = "".concat(v.replacementClass, "-title-").concat(f || _e()) : (c["aria-hidden"] = "true", c.focusable = "false")), Mt({
    icons: {
      main: bt(T),
      mask: a ? bt(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: y,
    iconName: h,
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
        extra: y
      } = n;
      return new Promise((h, T) => {
        Promise.all([vt(r, s), c.iconName ? vt(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((j) => {
          let [_, S] = j;
          h([t, Mt({
            icons: {
              main: _,
              mask: S
            },
            prefix: s,
            iconName: r,
            transform: f,
            symbol: m,
            maskId: d,
            title: a,
            titleId: o,
            extra: y,
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
      const f = Ge(s);
      f.length > 0 && (r.style = f);
      let m;
      return Nt(o) && (m = ie("generateAbstractTransformGrouping", {
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
        return Xe({
          type: "layer"
        }, () => {
          ce("beforeDOMElementCreation", {
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
        return Xe({
          type: "counter",
          content: e
        }, () => (ce("beforeDOMElementCreation", {
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
        return Xe({
          type: "text",
          content: e
        }, () => (ce("beforeDOMElementCreation", {
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
}), Fr), Zr), Gr), Ot = Object.keys(En).reduce((e, t) => (e[t.toLowerCase()] = En[t], e), {}), po = Object.keys(Ot).reduce((e, t) => {
  const n = Ot[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function go(e) {
  const t = e.replace(mo, ""), n = xa(t, 0), r = n >= xn[0] && n <= xn[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: pt(a ? t[0] : t),
    isSecondary: r || a
  };
}
function ho(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (Ot[n] || {})[a] || po[n];
}
function On(e, t) {
  const n = "".concat(Qr).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const s = be(e.children).filter((h) => h.getAttribute(ct) === t)[0], f = ae.getComputedStyle(e, t), m = f.getPropertyValue("font-family"), c = m.match(aa), d = f.getPropertyValue("font-weight"), y = f.getPropertyValue("content");
    if (s && !c)
      return e.removeChild(s), r();
    if (c && y !== "none" && y !== "") {
      const h = f.getPropertyValue("content");
      let T = ho(m, d);
      const {
        value: j,
        isSecondary: _
      } = go(h), S = c[0].startsWith("FontAwesome");
      let N = Ft(T, j), L = N;
      if (S) {
        const I = Sa(j);
        I.iconName && I.prefix && (N = I.iconName, T = I.prefix);
      }
      if (N && !_ && (!s || s.getAttribute(kt) !== T || s.getAttribute(Ct) !== L)) {
        e.setAttribute(n, L), s && e.removeChild(s);
        const I = no(), {
          extra: F
        } = I;
        F.attributes[ct] = t, vt(N, T).then((p) => {
          const q = Mt(u(u({}, I), {}, {
            icons: {
              main: p,
              mask: ar()
            },
            prefix: T,
            iconName: L,
            extra: F,
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
function yo(e) {
  return Promise.all([On(e, "::before"), On(e, "::after")]);
}
function bo(e) {
  return e.parentNode !== document.head && !~ta.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ct) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function An(e) {
  if (ee)
    return new Promise((t, n) => {
      const r = be(e.querySelectorAll("*")).filter(bo).map(yo), a = Dt.begin("searchPseudoElements");
      lr(), Promise.all(r).then(() => {
        a(), Et(), t();
      }).catch(() => {
        a(), Et(), n();
      });
    });
}
var vo = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = An, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = z
      } = t;
      v.searchPseudoElements && An(n);
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
        yn(ht("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Za();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Pn ? Et() : yn(ht("mutationObserverCallbacks", {
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
      }, y = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, h = {
        outer: s,
        inner: d,
        path: y
      };
      return {
        tag: "g",
        attributes: u({}, h.outer),
        children: [{
          tag: "g",
          attributes: u({}, h.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: u(u({}, n.icon.attributes), h.path)
          }]
        }]
      };
    };
  }
};
const ot = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Sn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Oo(e) {
  return e.tag === "g" ? e.children : [e];
}
var Ao = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Ve(n.split(" ").map((a) => a.trim())) : ar();
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
        icon: c
      } = a, {
        width: d,
        icon: y
      } = o, h = pa({
        transform: f,
        containerWidth: d,
        iconWidth: m
      }), T = {
        tag: "rect",
        attributes: u(u({}, ot), {}, {
          fill: "white"
        })
      }, j = c.children ? {
        children: c.children.map(Sn)
      } : {}, _ = {
        tag: "g",
        attributes: u({}, h.inner),
        children: [Sn(u({
          tag: c.tag,
          attributes: u(u({}, c.attributes), h.path)
        }, j))]
      }, S = {
        tag: "g",
        attributes: u({}, h.outer),
        children: [_]
      }, N = "mask-".concat(s || _e()), L = "clip-".concat(s || _e()), I = {
        tag: "mask",
        attributes: u(u({}, ot), {}, {
          id: N,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [T, S]
      }, F = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: L
          },
          children: Oo(y)
        }, I]
      };
      return n.push(F, {
        tag: "rect",
        attributes: u({
          fill: "currentColor",
          "clip-path": "url(#".concat(L, ")"),
          mask: "url(#".concat(N, ")")
        }, ot)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Po = {
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
}, So = [ya, fo, lo, co, uo, vo, xo, Eo, Ao, Po, To];
Fa(So, {
  mixoutsTo: U
});
U.noAuto;
U.config;
U.library;
U.dom;
const At = U.parse;
U.findIconDefinition;
U.toHtml;
const wo = U.icon;
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
      ge(e, r, n[r]);
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
function ge(e, t, n) {
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
function Pt(e) {
  return Co(e) || Ro(e) || Io(e) || No();
}
function Co(e) {
  if (Array.isArray(e)) return Tt(e);
}
function Ro(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Io(e, t) {
  if (e) {
    if (typeof e == "string") return Tt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tt(e, t);
  }
}
function Tt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function No() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jo(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, o = e.bounce, s = e.shake, f = e.flash, m = e.spin, c = e.spinPulse, d = e.spinReverse, y = e.pulse, h = e.fixedWidth, T = e.inverse, j = e.border, _ = e.listItem, S = e.flip, N = e.size, L = e.rotation, I = e.pull, F = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": o,
    "fa-shake": s,
    "fa-flash": f,
    "fa-spin": m,
    "fa-spin-reverse": d,
    "fa-spin-pulse": c,
    "fa-pulse": y,
    "fa-fw": h,
    "fa-inverse": T,
    "fa-border": j,
    "fa-li": _,
    "fa-flip": S === !0,
    "fa-flip-horizontal": S === "horizontal" || S === "both",
    "fa-flip-vertical": S === "vertical" || S === "both"
  }, ge(t, "fa-".concat(N), typeof N < "u" && N !== null), ge(t, "fa-rotate-".concat(L), typeof L < "u" && L !== null && L !== 0), ge(t, "fa-pull-".concat(I), typeof I < "u" && I !== null), ge(t, "fa-swap-opacity", e.swapOpacity), t);
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
  return a.attrs.style = X(X({}, a.attrs.style), s), e.apply(void 0, [t.tag, X(X({}, a.attrs), f)].concat(Pt(r)));
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
function it(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ge({}, e, t) : {};
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
}, Ue = /* @__PURE__ */ St.forwardRef(function(e, t) {
  var n = X(X({}, kn), e), r = n.icon, a = n.mask, o = n.symbol, s = n.className, f = n.title, m = n.titleId, c = n.maskId, d = _n(r), y = it("classes", [].concat(Pt(jo(n)), Pt((s || "").split(" ")))), h = it("transform", typeof n.transform == "string" ? At.transform(n.transform) : n.transform), T = it("mask", _n(a)), j = wo(d, X(X(X(X({}, y), h), T), {}, {
    symbol: o,
    title: f,
    titleId: m,
    maskId: c
  }));
  if (!j)
    return zo("Could not find icon", d), null;
  var _ = j.abstract, S = {
    ref: t
  };
  return Object.keys(n).forEach(function(N) {
    kn.hasOwnProperty(N) || (S[N] = n[N]);
  }), Yo(_[0], S);
});
Ue.displayName = "FontAwesomeIcon";
Ue.propTypes = {
  beat: x.bool,
  border: x.bool,
  beatFade: x.bool,
  bounce: x.bool,
  className: x.string,
  fade: x.bool,
  flash: x.bool,
  mask: x.oneOfType([x.object, x.array, x.string]),
  maskId: x.string,
  fixedWidth: x.bool,
  inverse: x.bool,
  flip: x.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: x.oneOfType([x.object, x.array, x.string]),
  listItem: x.bool,
  pull: x.oneOf(["right", "left"]),
  pulse: x.bool,
  rotation: x.oneOf([0, 90, 180, 270]),
  shake: x.bool,
  size: x.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: x.bool,
  spinPulse: x.bool,
  spinReverse: x.bool,
  symbol: x.oneOfType([x.bool, x.string]),
  title: x.string,
  titleId: x.string,
  transform: x.oneOfType([x.string, x.object]),
  swapOpacity: x.bool
};
var Yo = dr.bind(null, St.createElement);
const $o = ({
  children: e,
  variant: t = "default",
  size: n = "default",
  disabled: r = !1,
  ariaDisabled: a = !1,
  unstyled: o = !1,
  onClick: s,
  type: f = "button",
  startIcon: m,
  endIcon: c,
  className: d,
  ...y
}) => {
  const h = "usa-button", T = t !== "default" ? `${h}--${t}` : "", j = n === "big" ? `${h}--big` : "", _ = o ? `${h}--unstyled` : "", S = [
    h,
    T,
    j,
    _,
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ Pe.jsxs(
    "button",
    {
      type: f,
      className: S,
      onClick: s,
      disabled: r,
      "aria-disabled": a || r,
      ...y,
      children: [
        m && /* @__PURE__ */ Pe.jsx("span", { className: "usa-button__icon usa-button__icon--left", children: /* @__PURE__ */ Pe.jsx(Ue, { icon: m }) }),
        e,
        c && /* @__PURE__ */ Pe.jsx("span", { className: "usa-button__icon usa-button__icon--right", children: /* @__PURE__ */ Pe.jsx(Ue, { icon: c }) })
      ]
    }
  );
};
$o.propTypes = {
  children: x.node.isRequired,
  variant: x.oneOf([
    "default",
    "secondary",
    "accent-cool",
    "accent-warm",
    "base",
    "outline",
    "outline-inverse"
  ]),
  size: x.oneOf(["default", "big"]),
  disabled: x.bool,
  ariaDisabled: x.bool,
  unstyled: x.bool,
  onClick: x.func,
  type: x.oneOf(["button", "submit", "reset"]),
  startIcon: x.oneOfType([x.object, x.array, x.string]),
  endIcon: x.oneOfType([x.object, x.array, x.string]),
  className: x.string
};
export {
  $o as Button
};
//# sourceMappingURL=index.js.map
