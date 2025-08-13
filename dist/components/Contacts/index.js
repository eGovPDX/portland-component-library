import St from "react";
function hr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ie = { exports: {} }, Oe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t;
function gr() {
  if ($t) return Oe;
  $t = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), a.key !== void 0 && (i = "" + a.key), "key" in a) {
      o = {};
      for (var c in a)
        c !== "key" && (o[c] = a[c]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: r,
      key: i,
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
var Wt;
function yr() {
  return Wt || (Wt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === Ee ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case w:
          return "Fragment";
        case I:
          return "Profiler";
        case S:
          return "StrictMode";
        case p:
          return "Suspense";
        case H:
          return "SuspenseList";
        case _e:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case M:
            return "Portal";
          case j:
            return (s.displayName || "Context") + ".Provider";
          case z:
            return (s._context.displayName || "Context") + ".Consumer";
          case F:
            var l = s.render;
            return s = s.displayName, s || (s = l.displayName || l.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case Q:
            return l = s.displayName || null, l !== null ? l : e(s.type) || "Memo";
          case re:
            l = s._payload, s = s._init;
            try {
              return e(s(l));
            } catch {
            }
        }
      return null;
    }
    function t(s) {
      return "" + s;
    }
    function n(s) {
      try {
        t(s);
        var l = !1;
      } catch {
        l = !0;
      }
      if (l) {
        l = console;
        var v = l.error, E = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return v.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          E
        ), t(s);
      }
    }
    function r(s) {
      if (s === w) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === re)
        return "<...>";
      try {
        var l = e(s);
        return l ? "<" + l + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var s = ae.A;
      return s === null ? null : s.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(s) {
      if (me.call(s, "key")) {
        var l = Object.getOwnPropertyDescriptor(s, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function c(s, l) {
      function v() {
        pe || (pe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          l
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: v,
        configurable: !0
      });
    }
    function m() {
      var s = e(this.type);
      return U[s] || (U[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function f(s, l, v, E, A, T, k, C) {
      return v = T.ref, s = {
        $$typeof: P,
        type: s,
        key: l,
        props: T,
        _owner: A
      }, (v !== void 0 ? v : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(s, "ref", { enumerable: !1, value: null }), s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(s, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(s, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function d(s, l, v, E, A, T, k, C) {
      var O = l.children;
      if (O !== void 0)
        if (E)
          if (Ae(O)) {
            for (E = 0; E < O.length; E++)
              y(O[E]);
            Object.freeze && Object.freeze(O);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(O);
      if (me.call(l, "key")) {
        O = e(s);
        var N = Object.keys(l).filter(function($) {
          return $ !== "key";
        });
        E = 0 < N.length ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}", he[O + E] || (N = 0 < N.length ? "{" + N.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          E,
          O,
          N,
          O
        ), he[O + E] = !0);
      }
      if (O = null, v !== void 0 && (n(v), O = "" + v), i(l) && (n(l.key), O = "" + l.key), "key" in l) {
        v = {};
        for (var R in l)
          R !== "key" && (v[R] = l[R]);
      } else v = l;
      return O && c(
        v,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), f(
        s,
        O,
        T,
        A,
        a(),
        v,
        k,
        C
      );
    }
    function y(s) {
      typeof s == "object" && s !== null && s.$$typeof === P && s._store && (s._store.validated = 1);
    }
    var b = St, P = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), j = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), _e = Symbol.for("react.activity"), Ee = Symbol.for("react.client.reference"), ae = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, me = Object.prototype.hasOwnProperty, Ae = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      "react-stack-bottom-frame": function(s) {
        return s();
      }
    };
    var pe, U = {}, G = b["react-stack-bottom-frame"].bind(
      b,
      o
    )(), le = X(r(o)), he = {};
    Pe.Fragment = w, Pe.jsx = function(s, l, v, E, A) {
      var T = 1e4 > ae.recentlyCreatedOwnerStacks++;
      return d(
        s,
        l,
        v,
        !1,
        E,
        A,
        T ? Error("react-stack-top-frame") : G,
        T ? X(r(s)) : le
      );
    }, Pe.jsxs = function(s, l, v, E, A) {
      var T = 1e4 > ae.recentlyCreatedOwnerStacks++;
      return d(
        s,
        l,
        v,
        !0,
        E,
        A,
        T ? Error("react-stack-top-frame") : G,
        T ? X(r(s)) : le
      );
    };
  }()), Pe;
}
var Ut;
function br() {
  return Ut || (Ut = 1, process.env.NODE_ENV === "production" ? Ie.exports = gr() : Ie.exports = yr()), Ie.exports;
}
var g = br(), Me = { exports: {} }, Fe = { exports: {} }, L = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function vr() {
  if (qt) return L;
  qt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, P = e ? Symbol.for("react.memo") : 60115, M = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function j(p) {
    if (typeof p == "object" && p !== null) {
      var H = p.$$typeof;
      switch (H) {
        case t:
          switch (p = p.type, p) {
            case m:
            case f:
            case r:
            case o:
            case a:
            case y:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case c:
                case d:
                case M:
                case P:
                case i:
                  return p;
                default:
                  return H;
              }
          }
        case n:
          return H;
      }
    }
  }
  function F(p) {
    return j(p) === f;
  }
  return L.AsyncMode = m, L.ConcurrentMode = f, L.ContextConsumer = c, L.ContextProvider = i, L.Element = t, L.ForwardRef = d, L.Fragment = r, L.Lazy = M, L.Memo = P, L.Portal = n, L.Profiler = o, L.StrictMode = a, L.Suspense = y, L.isAsyncMode = function(p) {
    return F(p) || j(p) === m;
  }, L.isConcurrentMode = F, L.isContextConsumer = function(p) {
    return j(p) === c;
  }, L.isContextProvider = function(p) {
    return j(p) === i;
  }, L.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, L.isForwardRef = function(p) {
    return j(p) === d;
  }, L.isFragment = function(p) {
    return j(p) === r;
  }, L.isLazy = function(p) {
    return j(p) === M;
  }, L.isMemo = function(p) {
    return j(p) === P;
  }, L.isPortal = function(p) {
    return j(p) === n;
  }, L.isProfiler = function(p) {
    return j(p) === o;
  }, L.isStrictMode = function(p) {
    return j(p) === a;
  }, L.isSuspense = function(p) {
    return j(p) === y;
  }, L.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === f || p === o || p === a || p === y || p === b || typeof p == "object" && p !== null && (p.$$typeof === M || p.$$typeof === P || p.$$typeof === i || p.$$typeof === c || p.$$typeof === d || p.$$typeof === S || p.$$typeof === I || p.$$typeof === z || p.$$typeof === w);
  }, L.typeOf = j, L;
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
var Vt;
function xr() {
  return Vt || (Vt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, P = e ? Symbol.for("react.memo") : 60115, M = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
    function j(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === r || h === f || h === o || h === a || h === y || h === b || typeof h == "object" && h !== null && (h.$$typeof === M || h.$$typeof === P || h.$$typeof === i || h.$$typeof === c || h.$$typeof === d || h.$$typeof === S || h.$$typeof === I || h.$$typeof === z || h.$$typeof === w);
    }
    function F(h) {
      if (typeof h == "object" && h !== null) {
        var B = h.$$typeof;
        switch (B) {
          case t:
            var je = h.type;
            switch (je) {
              case m:
              case f:
              case r:
              case o:
              case a:
              case y:
                return je;
              default:
                var Yt = je && je.$$typeof;
                switch (Yt) {
                  case c:
                  case d:
                  case M:
                  case P:
                  case i:
                    return Yt;
                  default:
                    return B;
                }
            }
          case n:
            return B;
        }
      }
    }
    var p = m, H = f, Q = c, re = i, _e = t, Ee = d, ae = r, me = M, Ae = P, X = n, pe = o, U = a, G = y, le = !1;
    function he(h) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), s(h) || F(h) === m;
    }
    function s(h) {
      return F(h) === f;
    }
    function l(h) {
      return F(h) === c;
    }
    function v(h) {
      return F(h) === i;
    }
    function E(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function A(h) {
      return F(h) === d;
    }
    function T(h) {
      return F(h) === r;
    }
    function k(h) {
      return F(h) === M;
    }
    function C(h) {
      return F(h) === P;
    }
    function O(h) {
      return F(h) === n;
    }
    function N(h) {
      return F(h) === o;
    }
    function R(h) {
      return F(h) === a;
    }
    function $(h) {
      return F(h) === y;
    }
    D.AsyncMode = p, D.ConcurrentMode = H, D.ContextConsumer = Q, D.ContextProvider = re, D.Element = _e, D.ForwardRef = Ee, D.Fragment = ae, D.Lazy = me, D.Memo = Ae, D.Portal = X, D.Profiler = pe, D.StrictMode = U, D.Suspense = G, D.isAsyncMode = he, D.isConcurrentMode = s, D.isContextConsumer = l, D.isContextProvider = v, D.isElement = E, D.isForwardRef = A, D.isFragment = T, D.isLazy = k, D.isMemo = C, D.isPortal = O, D.isProfiler = N, D.isStrictMode = R, D.isSuspense = $, D.isValidElementType = j, D.typeOf = F;
  }()), D;
}
var Ht;
function Nn() {
  return Ht || (Ht = 1, process.env.NODE_ENV === "production" ? Fe.exports = vr() : Fe.exports = xr()), Fe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Be, Xt;
function _r() {
  if (Xt) return Be;
  Xt = 1;
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
      for (var i = {}, c = 0; c < 10; c++)
        i["_" + String.fromCharCode(c)] = c;
      var m = Object.getOwnPropertyNames(i).map(function(d) {
        return i[d];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        f[d] = d;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Be = a() ? Object.assign : function(o, i) {
    for (var c, m = r(o), f, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var y in c)
        t.call(c, y) && (m[y] = c[y]);
      if (e) {
        f = e(c);
        for (var b = 0; b < f.length; b++)
          n.call(c, f[b]) && (m[f[b]] = c[f[b]]);
      }
    }
    return m;
  }, Be;
}
var Je, Gt;
function wt() {
  if (Gt) return Je;
  Gt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Je = e, Je;
}
var Ke, Bt;
function Rn() {
  return Bt || (Bt = 1, Ke = Function.call.bind(Object.prototype.hasOwnProperty)), Ke;
}
var Ze, Jt;
function Er() {
  if (Jt) return Ze;
  Jt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ wt(), n = {}, r = /* @__PURE__ */ Rn();
    e = function(o) {
      var i = "Warning: " + o;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function a(o, i, c, m, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in o)
        if (r(o, d)) {
          var y;
          try {
            if (typeof o[d] != "function") {
              var b = Error(
                (m || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            y = o[d](i, d, m, c, null, t);
          } catch (M) {
            y = M;
          }
          if (y && !(y instanceof Error) && e(
            (m || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in n)) {
            n[y.message] = !0;
            var P = f ? f() : "";
            e(
              "Failed " + c + " type: " + y.message + (P ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Ze = a, Ze;
}
var Qe, Kt;
function Ar() {
  if (Kt) return Qe;
  Kt = 1;
  var e = Nn(), t = _r(), n = /* @__PURE__ */ wt(), r = /* @__PURE__ */ Rn(), a = /* @__PURE__ */ Er(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(c) {
    var m = "Warning: " + c;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return Qe = function(c, m) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function y(s) {
      var l = s && (f && s[f] || s[d]);
      if (typeof l == "function")
        return l;
    }
    var b = "<<anonymous>>", P = {
      array: I("array"),
      bigint: I("bigint"),
      bool: I("boolean"),
      func: I("function"),
      number: I("number"),
      object: I("object"),
      string: I("string"),
      symbol: I("symbol"),
      any: z(),
      arrayOf: j,
      element: F(),
      elementType: p(),
      instanceOf: H,
      node: Ee(),
      objectOf: re,
      oneOf: Q,
      oneOfType: _e,
      shape: me,
      exact: Ae
    };
    function M(s, l) {
      return s === l ? s !== 0 || 1 / s === 1 / l : s !== s && l !== l;
    }
    function w(s, l) {
      this.message = s, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function S(s) {
      if (process.env.NODE_ENV !== "production")
        var l = {}, v = 0;
      function E(T, k, C, O, N, R, $) {
        if (O = O || b, R = R || C, $ !== n) {
          if (m) {
            var h = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw h.name = "Invariant Violation", h;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var B = O + ":" + C;
            !l[B] && // Avoid spamming the console because they are often not actionable except for lib authors
            v < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + R + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[B] = !0, v++);
          }
        }
        return k[C] == null ? T ? k[C] === null ? new w("The " + N + " `" + R + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new w("The " + N + " `" + R + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : s(k, C, O, N, R);
      }
      var A = E.bind(null, !1);
      return A.isRequired = E.bind(null, !0), A;
    }
    function I(s) {
      function l(v, E, A, T, k, C) {
        var O = v[E], N = U(O);
        if (N !== s) {
          var R = G(O);
          return new w(
            "Invalid " + T + " `" + k + "` of type " + ("`" + R + "` supplied to `" + A + "`, expected ") + ("`" + s + "`."),
            { expectedType: s }
          );
        }
        return null;
      }
      return S(l);
    }
    function z() {
      return S(i);
    }
    function j(s) {
      function l(v, E, A, T, k) {
        if (typeof s != "function")
          return new w("Property `" + k + "` of component `" + A + "` has invalid PropType notation inside arrayOf.");
        var C = v[E];
        if (!Array.isArray(C)) {
          var O = U(C);
          return new w("Invalid " + T + " `" + k + "` of type " + ("`" + O + "` supplied to `" + A + "`, expected an array."));
        }
        for (var N = 0; N < C.length; N++) {
          var R = s(C, N, A, T, k + "[" + N + "]", n);
          if (R instanceof Error)
            return R;
        }
        return null;
      }
      return S(l);
    }
    function F() {
      function s(l, v, E, A, T) {
        var k = l[v];
        if (!c(k)) {
          var C = U(k);
          return new w("Invalid " + A + " `" + T + "` of type " + ("`" + C + "` supplied to `" + E + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(s);
    }
    function p() {
      function s(l, v, E, A, T) {
        var k = l[v];
        if (!e.isValidElementType(k)) {
          var C = U(k);
          return new w("Invalid " + A + " `" + T + "` of type " + ("`" + C + "` supplied to `" + E + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(s);
    }
    function H(s) {
      function l(v, E, A, T, k) {
        if (!(v[E] instanceof s)) {
          var C = s.name || b, O = he(v[E]);
          return new w("Invalid " + T + " `" + k + "` of type " + ("`" + O + "` supplied to `" + A + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return S(l);
    }
    function Q(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), i;
      function l(v, E, A, T, k) {
        for (var C = v[E], O = 0; O < s.length; O++)
          if (M(C, s[O]))
            return null;
        var N = JSON.stringify(s, function($, h) {
          var B = G(h);
          return B === "symbol" ? String(h) : h;
        });
        return new w("Invalid " + T + " `" + k + "` of value `" + String(C) + "` " + ("supplied to `" + A + "`, expected one of " + N + "."));
      }
      return S(l);
    }
    function re(s) {
      function l(v, E, A, T, k) {
        if (typeof s != "function")
          return new w("Property `" + k + "` of component `" + A + "` has invalid PropType notation inside objectOf.");
        var C = v[E], O = U(C);
        if (O !== "object")
          return new w("Invalid " + T + " `" + k + "` of type " + ("`" + O + "` supplied to `" + A + "`, expected an object."));
        for (var N in C)
          if (r(C, N)) {
            var R = s(C, N, A, T, k + "." + N, n);
            if (R instanceof Error)
              return R;
          }
        return null;
      }
      return S(l);
    }
    function _e(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var l = 0; l < s.length; l++) {
        var v = s[l];
        if (typeof v != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(v) + " at index " + l + "."
          ), i;
      }
      function E(A, T, k, C, O) {
        for (var N = [], R = 0; R < s.length; R++) {
          var $ = s[R], h = $(A, T, k, C, O, n);
          if (h == null)
            return null;
          h.data && r(h.data, "expectedType") && N.push(h.data.expectedType);
        }
        var B = N.length > 0 ? ", expected one of type [" + N.join(", ") + "]" : "";
        return new w("Invalid " + C + " `" + O + "` supplied to " + ("`" + k + "`" + B + "."));
      }
      return S(E);
    }
    function Ee() {
      function s(l, v, E, A, T) {
        return X(l[v]) ? null : new w("Invalid " + A + " `" + T + "` supplied to " + ("`" + E + "`, expected a ReactNode."));
      }
      return S(s);
    }
    function ae(s, l, v, E, A) {
      return new w(
        (s || "React class") + ": " + l + " type `" + v + "." + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + A + "`."
      );
    }
    function me(s) {
      function l(v, E, A, T, k) {
        var C = v[E], O = U(C);
        if (O !== "object")
          return new w("Invalid " + T + " `" + k + "` of type `" + O + "` " + ("supplied to `" + A + "`, expected `object`."));
        for (var N in s) {
          var R = s[N];
          if (typeof R != "function")
            return ae(A, T, k, N, G(R));
          var $ = R(C, N, A, T, k + "." + N, n);
          if ($)
            return $;
        }
        return null;
      }
      return S(l);
    }
    function Ae(s) {
      function l(v, E, A, T, k) {
        var C = v[E], O = U(C);
        if (O !== "object")
          return new w("Invalid " + T + " `" + k + "` of type `" + O + "` " + ("supplied to `" + A + "`, expected `object`."));
        var N = t({}, v[E], s);
        for (var R in N) {
          var $ = s[R];
          if (r(s, R) && typeof $ != "function")
            return ae(A, T, k, R, G($));
          if (!$)
            return new w(
              "Invalid " + T + " `" + k + "` key `" + R + "` supplied to `" + A + "`.\nBad object: " + JSON.stringify(v[E], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(s), null, "  ")
            );
          var h = $(C, R, A, T, k + "." + R, n);
          if (h)
            return h;
        }
        return null;
      }
      return S(l);
    }
    function X(s) {
      switch (typeof s) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !s;
        case "object":
          if (Array.isArray(s))
            return s.every(X);
          if (s === null || c(s))
            return !0;
          var l = y(s);
          if (l) {
            var v = l.call(s), E;
            if (l !== s.entries) {
              for (; !(E = v.next()).done; )
                if (!X(E.value))
                  return !1;
            } else
              for (; !(E = v.next()).done; ) {
                var A = E.value;
                if (A && !X(A[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function pe(s, l) {
      return s === "symbol" ? !0 : l ? l["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && l instanceof Symbol : !1;
    }
    function U(s) {
      var l = typeof s;
      return Array.isArray(s) ? "array" : s instanceof RegExp ? "object" : pe(l, s) ? "symbol" : l;
    }
    function G(s) {
      if (typeof s > "u" || s === null)
        return "" + s;
      var l = U(s);
      if (l === "object") {
        if (s instanceof Date)
          return "date";
        if (s instanceof RegExp)
          return "regexp";
      }
      return l;
    }
    function le(s) {
      var l = G(s);
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
    function he(s) {
      return !s.constructor || !s.constructor.name ? b : s.constructor.name;
    }
    return P.checkPropTypes = a, P.resetWarningCache = a.resetWarningCache, P.PropTypes = P, P;
  }, Qe;
}
var et, Zt;
function Or() {
  if (Zt) return et;
  Zt = 1;
  var e = /* @__PURE__ */ wt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, et = function() {
    function r(i, c, m, f, d, y) {
      if (y !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
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
var Qt;
function Pr() {
  if (Qt) return Me.exports;
  if (Qt = 1, process.env.NODE_ENV !== "production") {
    var e = Nn(), t = !0;
    Me.exports = /* @__PURE__ */ Ar()(e.isElement, t);
  } else
    Me.exports = /* @__PURE__ */ Or()();
  return Me.exports;
}
var Tr = /* @__PURE__ */ Pr();
const _ = /* @__PURE__ */ hr(Tr);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Sr(e, t, n) {
  return (t = kr(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function en(e, t) {
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
    t % 2 ? en(Object(n), !0).forEach(function(r) {
      Sr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : en(Object(n)).forEach(function(r) {
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
function kr(e) {
  var t = wr(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const tn = () => {
};
let kt = {}, jn = {}, In = null, Mn = {
  mark: tn,
  measure: tn
};
try {
  typeof window < "u" && (kt = window), typeof document < "u" && (jn = document), typeof MutationObserver < "u" && (In = MutationObserver), typeof performance < "u" && (Mn = performance);
} catch {
}
const {
  userAgent: nn = ""
} = kt.navigator || {}, se = kt, Y = jn, rn = In, Le = Mn;
se.document;
const ne = !!Y.documentElement && !!Y.head && typeof Y.addEventListener == "function" && typeof Y.createElement == "function", Fn = ~nn.indexOf("MSIE") || ~nn.indexOf("Trident/");
var Cr = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Nr = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Ln = {
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
}, Dn = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], W = "classic", qe = "duotone", jr = "sharp", Ir = "sharp-duotone", zn = [W, qe, jr, Ir], Mr = {
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
}, Lr = /* @__PURE__ */ new Map([["classic", {
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
}, zr = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], an = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Yr = ["kit"], $r = {
  kit: {
    "fa-kit": "fak"
  }
}, Wr = ["fak", "fakd"], Ur = {
  kit: {
    fak: "fa-kit"
  }
}, on = {
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
}, qr = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Vr = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Hr = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Xr = {
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
}, Gr = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, ct = {
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
}, Br = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], lt = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...qr, ...Br], Jr = ["solid", "regular", "light", "thin", "duotone", "brands"], Yn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Kr = Yn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Zr = [...Object.keys(Gr), ...Jr, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", De.GROUP, De.SWAP_OPACITY, De.PRIMARY, De.SECONDARY].concat(Yn.map((e) => "".concat(e, "x"))).concat(Kr.map((e) => "w-".concat(e))), Qr = {
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
const ee = "___FONT_AWESOME___", ft = 16, $n = "fa", Wn = "svg-inline--fa", ue = "data-fa-i2svg", ut = "data-fa-pseudo-element", ea = "data-fa-pseudo-element-pending", Ct = "data-prefix", Nt = "data-icon", sn = "fontawesome-i2svg", ta = "async", na = ["HTML", "HEAD", "STYLE", "SCRIPT"], Un = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Ne(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[W];
    }
  });
}
const qn = u({}, Ln);
qn[W] = u(u(u(u({}, {
  "fa-duotone": "duotone"
}), Ln[W]), an.kit), an["kit-duotone"]);
const ra = Ne(qn), dt = u({}, Dr);
dt[W] = u(u(u(u({}, {
  duotone: "fad"
}), dt[W]), on.kit), on["kit-duotone"]);
const cn = Ne(dt), mt = u({}, ct);
mt[W] = u(u({}, mt[W]), Ur.kit);
const Rt = Ne(mt), pt = u({}, Xr);
pt[W] = u(u({}, pt[W]), $r.kit);
Ne(pt);
const aa = Cr, Vn = "fa-layers-text", oa = Nr, sa = u({}, Mr);
Ne(sa);
const ia = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], tt = Rr, ca = [...Yr, ...Zr], Se = se.FontAwesomeConfig || {};
function la(e) {
  var t = Y.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function fa(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
Y && typeof Y.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = fa(la(n));
  a != null && (Se[r] = a);
});
const Hn = {
  styleDefault: "solid",
  familyDefault: W,
  cssPrefix: $n,
  replacementClass: Wn,
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
const ve = u(u({}, Hn), Se);
ve.autoReplaceSvg || (ve.observeMutations = !1);
const x = {};
Object.keys(Hn).forEach((e) => {
  Object.defineProperty(x, e, {
    enumerable: !0,
    set: function(t) {
      ve[e] = t, we.forEach((n) => n(x));
    },
    get: function() {
      return ve[e];
    }
  });
});
Object.defineProperty(x, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    ve.cssPrefix = e, we.forEach((t) => t(x));
  },
  get: function() {
    return ve.cssPrefix;
  }
});
se.FontAwesomeConfig = x;
const we = [];
function ua(e) {
  return we.push(e), () => {
    we.splice(we.indexOf(e), 1);
  };
}
const oe = ft, K = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function da(e) {
  if (!e || !ne)
    return;
  const t = Y.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = Y.head.childNodes;
  let r = null;
  for (let a = n.length - 1; a > -1; a--) {
    const o = n[a], i = (o.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(i) > -1 && (r = o);
  }
  return Y.head.insertBefore(t, r), e;
}
const ma = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ke() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += ma[Math.random() * 62 | 0];
  return t;
}
function xe(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function jt(e) {
  return e.classList ? xe(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Xn(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function pa(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Xn(e[n]), '" '), "").trim();
}
function Ve(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function It(e) {
  return e.size !== K.size || e.x !== K.x || e.y !== K.y || e.rotate !== K.rotate || e.flipX || e.flipY;
}
function ha(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), c = "rotate(".concat(t.rotate, " 0 0)"), m = {
    transform: "".concat(o, " ").concat(i, " ").concat(c)
  }, f = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: m,
    path: f
  };
}
function ga(e) {
  let {
    transform: t,
    width: n = ft,
    height: r = ft,
    startCentered: a = !1
  } = e, o = "";
  return a && Fn ? o += "translate(".concat(t.x / oe - n / 2, "em, ").concat(t.y / oe - r / 2, "em) ") : a ? o += "translate(calc(-50% + ".concat(t.x / oe, "em), calc(-50% + ").concat(t.y / oe, "em)) ") : o += "translate(".concat(t.x / oe, "em, ").concat(t.y / oe, "em) "), o += "scale(".concat(t.size / oe * (t.flipX ? -1 : 1), ", ").concat(t.size / oe * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var ya = `:root, :host {
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
function Gn() {
  const e = $n, t = Wn, n = x.cssPrefix, r = x.replacementClass;
  let a = ya;
  if (n !== e || r !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"), i = new RegExp("\\--".concat(e, "\\-"), "g"), c = new RegExp("\\.".concat(t), "g");
    a = a.replace(o, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(c, ".".concat(r));
  }
  return a;
}
let ln = !1;
function nt() {
  x.autoAddCss && !ln && (da(Gn()), ln = !0);
}
var ba = {
  mixout() {
    return {
      dom: {
        css: Gn,
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
const te = se || {};
te[ee] || (te[ee] = {});
te[ee].styles || (te[ee].styles = {});
te[ee].hooks || (te[ee].hooks = {});
te[ee].shims || (te[ee].shims = []);
var Z = te[ee];
const Bn = [], Jn = function() {
  Y.removeEventListener("DOMContentLoaded", Jn), $e = 1, Bn.map((e) => e());
};
let $e = !1;
ne && ($e = (Y.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Y.readyState), $e || Y.addEventListener("DOMContentLoaded", Jn));
function va(e) {
  ne && ($e ? setTimeout(e, 0) : Bn.push(e));
}
function Re(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Xn(e) : "<".concat(t, " ").concat(pa(n), ">").concat(r.map(Re).join(""), "</").concat(t, ">");
}
function fn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var rt = function(t, n, r, a) {
  var o = Object.keys(t), i = o.length, c = n, m, f, d;
  for (r === void 0 ? (m = 1, d = t[o[0]]) : (m = 0, d = r); m < i; m++)
    f = o[m], d = c(d, t[f], f, t);
  return d;
};
function xa(e) {
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
function ht(e) {
  const t = xa(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function _a(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function un(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function gt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = un(t);
  typeof Z.hooks.addPack == "function" && !r ? Z.hooks.addPack(e, un(t)) : Z.styles[e] = u(u({}, Z.styles[e] || {}), a), e === "fas" && gt("fa", t);
}
const {
  styles: Ce,
  shims: Ea
} = Z, Kn = Object.keys(Rt), Aa = Kn.reduce((e, t) => (e[t] = Object.keys(Rt[t]), e), {});
let Mt = null, Zn = {}, Qn = {}, er = {}, tr = {}, nr = {};
function Oa(e) {
  return ~ca.indexOf(e);
}
function Pa(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Oa(a) ? a : null;
}
const rr = () => {
  const e = (r) => rt(Ce, (a, o, i) => (a[i] = rt(o, r, {}), a), {});
  Zn = e((r, a, o) => (a[3] && (r[a[3]] = o), a[2] && a[2].filter((c) => typeof c == "number").forEach((c) => {
    r[c.toString(16)] = o;
  }), r)), Qn = e((r, a, o) => (r[o] = o, a[2] && a[2].filter((c) => typeof c == "string").forEach((c) => {
    r[c] = o;
  }), r)), nr = e((r, a, o) => {
    const i = a[2];
    return r[o] = o, i.forEach((c) => {
      r[c] = o;
    }), r;
  });
  const t = "far" in Ce || x.autoFetchSvg, n = rt(Ea, (r, a) => {
    const o = a[0];
    let i = a[1];
    const c = a[2];
    return i === "far" && !t && (i = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: i,
      iconName: c
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: i,
      iconName: c
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  er = n.names, tr = n.unicodes, Mt = He(x.styleDefault, {
    family: x.familyDefault
  });
};
ua((e) => {
  Mt = He(e.styleDefault, {
    family: x.familyDefault
  });
});
rr();
function Ft(e, t) {
  return (Zn[e] || {})[t];
}
function Ta(e, t) {
  return (Qn[e] || {})[t];
}
function fe(e, t) {
  return (nr[e] || {})[t];
}
function ar(e) {
  return er[e] || {
    prefix: null,
    iconName: null
  };
}
function Sa(e) {
  const t = tr[e], n = Ft("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function ie() {
  return Mt;
}
const or = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function wa(e) {
  let t = W;
  const n = Kn.reduce((r, a) => (r[a] = "".concat(x.cssPrefix, "-").concat(a), r), {});
  return zn.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => Aa[r].includes(a))) && (t = r);
  }), t;
}
function He(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = W
  } = t, r = ra[n][e];
  if (n === qe && !e)
    return "fad";
  const a = cn[n][e] || cn[n][r], o = e in Z.styles ? e : null;
  return a || o || null;
}
function ka(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = Pa(x.cssPrefix, r);
    a ? n = a : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function dn(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function Xe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const a = lt.concat(Vr), o = dn(e.filter((y) => a.includes(y))), i = dn(e.filter((y) => !lt.includes(y))), c = o.filter((y) => (r = y, !Dn.includes(y))), [m = null] = c, f = wa(o), d = u(u({}, ka(i)), {}, {
    prefix: He(m, {
      family: f
    })
  });
  return u(u(u({}, d), ja({
    values: e,
    family: f,
    styles: Ce,
    config: x,
    canonical: d,
    givenPrefix: r
  })), Ca(n, r, d));
}
function Ca(e, t, n) {
  let {
    prefix: r,
    iconName: a
  } = n;
  if (e || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  const o = t === "fa" ? ar(a) : {}, i = fe(r, a);
  return a = o.iconName || i || a, r = o.prefix || r, r === "far" && !Ce.far && Ce.fas && !x.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const Na = zn.filter((e) => e !== W || e !== qe), Ra = Object.keys(ct).filter((e) => e !== W).map((e) => Object.keys(ct[e])).flat();
function ja(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: o = {},
    config: i = {}
  } = e, c = n === qe, m = t.includes("fa-duotone") || t.includes("fad"), f = i.familyDefault === "duotone", d = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!c && (m || f || d) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Na.includes(n) && (Object.keys(o).find((b) => Ra.includes(b)) || i.autoFetchSvg)) {
    const b = Lr.get(n).defaultShortPrefixId;
    r.prefix = b, r.iconName = fe(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = ie() || "fas"), r;
}
class Ia {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((o) => {
      this.definitions[o] = u(u({}, this.definitions[o] || {}), a[o]), gt(o, a[o]);
      const i = Rt[W][o];
      i && gt(i, a[o]), rr();
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
        iconName: i,
        icon: c
      } = r[a], m = c[2];
      t[o] || (t[o] = {}), m.length > 0 && m.forEach((f) => {
        typeof f == "string" && (t[o][f] = c);
      }), t[o][i] = c;
    }), t;
  }
}
let mn = [], ge = {};
const be = {}, Ma = Object.keys(be);
function Fa(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return mn = e, ge = {}, Object.keys(be).forEach((r) => {
    Ma.indexOf(r) === -1 && delete be[r];
  }), mn.forEach((r) => {
    const a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach((o) => {
      typeof a[o] == "function" && (n[o] = a[o]), typeof a[o] == "object" && Object.keys(a[o]).forEach((i) => {
        n[o] || (n[o] = {}), n[o][i] = a[o][i];
      });
    }), r.hooks) {
      const o = r.hooks();
      Object.keys(o).forEach((i) => {
        ge[i] || (ge[i] = []), ge[i].push(o[i]);
      });
    }
    r.provides && r.provides(be);
  }), n;
}
function yt(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (ge[e] || []).forEach((i) => {
    t = i.apply(null, [t, ...r]);
  }), t;
}
function de(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (ge[e] || []).forEach((o) => {
    o.apply(null, n);
  });
}
function ce() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return be[e] ? be[e].apply(null, t) : void 0;
}
function bt(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || ie();
  if (t)
    return t = fe(n, t) || t, fn(sr.definitions, n, t) || fn(Z.styles, n, t);
}
const sr = new Ia(), La = () => {
  x.autoReplaceSvg = !1, x.observeMutations = !1, de("noAuto");
}, Da = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return ne ? (de("beforeI2svg", e), ce("pseudoElements2svg", e), ce("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    x.autoReplaceSvg === !1 && (x.autoReplaceSvg = !0), x.observeMutations = !0, va(() => {
      Ya({
        autoReplaceSvgRoot: t
      }), de("watch", e);
    });
  }
}, za = {
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
    if (typeof e == "string" && (e.indexOf("".concat(x.cssPrefix, "-")) > -1 || e.match(aa))) {
      const t = Xe(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || ie(),
        iconName: fe(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = ie();
      return {
        prefix: t,
        iconName: fe(t, e) || e
      };
    }
  }
}, q = {
  noAuto: La,
  config: x,
  dom: Da,
  parse: za,
  library: sr,
  findIconDefinition: bt,
  toHtml: Re
}, Ya = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = Y
  } = e;
  (Object.keys(Z.styles).length > 0 || x.autoFetchSvg) && ne && x.autoReplaceSvg && q.dom.i2svg({
    node: t
  });
};
function Ge(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Re(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!ne) return;
      const n = Y.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function $a(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: o,
    transform: i
  } = e;
  if (It(i) && n.found && !r.found) {
    const {
      width: c,
      height: m
    } = n, f = {
      x: c / m / 2,
      y: 0.5
    };
    a.style = Ve(u(u({}, o), {}, {
      "transform-origin": "".concat(f.x + i.x / 16, "em ").concat(f.y + i.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Wa(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: a,
    symbol: o
  } = e;
  const i = o === !0 ? "".concat(t, "-").concat(x.cssPrefix, "-").concat(n) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: u(u({}, a), {}, {
        id: i
      }),
      children: r
    }]
  }];
}
function Lt(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: a,
    transform: o,
    symbol: i,
    title: c,
    maskId: m,
    titleId: f,
    extra: d,
    watchable: y = !1
  } = e, {
    width: b,
    height: P
  } = n.found ? n : t, M = Wr.includes(r), w = [x.replacementClass, a ? "".concat(x.cssPrefix, "-").concat(a) : ""].filter((p) => d.classes.indexOf(p) === -1).filter((p) => p !== "" || !!p).concat(d.classes).join(" ");
  let S = {
    children: [],
    attributes: u(u({}, d.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: w,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(b, " ").concat(P)
    })
  };
  const I = M && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(b / P * 16 * 0.0625, "em")
  } : {};
  y && (S.attributes[ue] = ""), c && (S.children.push({
    tag: "title",
    attributes: {
      id: S.attributes["aria-labelledby"] || "title-".concat(f || ke())
    },
    children: [c]
  }), delete S.attributes.title);
  const z = u(u({}, S), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: m,
    transform: o,
    symbol: i,
    styles: u(u({}, I), d.styles)
  }), {
    children: j,
    attributes: F
  } = n.found && t.found ? ce("generateAbstractMask", z) || {
    children: [],
    attributes: {}
  } : ce("generateAbstractIcon", z) || {
    children: [],
    attributes: {}
  };
  return z.children = j, z.attributes = F, i ? Wa(z) : $a(z);
}
function pn(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: a,
    title: o,
    extra: i,
    watchable: c = !1
  } = e, m = u(u(u({}, i.attributes), o ? {
    title: o
  } : {}), {}, {
    class: i.classes.join(" ")
  });
  c && (m[ue] = "");
  const f = u({}, i.styles);
  It(a) && (f.transform = ga({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), f["-webkit-transform"] = f.transform);
  const d = Ve(f);
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
function Ua(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, a = u(u(u({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), o = Ve(r.styles);
  o.length > 0 && (a.style = o);
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
  styles: at
} = Z;
function vt(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(x.cssPrefix, "-").concat(tt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(x.cssPrefix, "-").concat(tt.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(x.cssPrefix, "-").concat(tt.PRIMARY),
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
const qa = {
  found: !1,
  width: 512,
  height: 512
};
function Va(e, t) {
  !Un && !x.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function xt(e, t) {
  let n = t;
  return t === "fa" && x.styleDefault !== null && (t = ie()), new Promise((r, a) => {
    if (n === "fa") {
      const o = ar(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && at[t] && at[t][e]) {
      const o = at[t][e];
      return r(vt(o));
    }
    Va(e, t), r(u(u({}, qa), {}, {
      icon: x.showMissingIcons && e ? ce("missingIconAbstract") || {} : {}
    }));
  });
}
const hn = () => {
}, _t = x.measurePerformance && Le && Le.mark && Le.measure ? Le : {
  mark: hn,
  measure: hn
}, Te = 'FA "6.7.2"', Ha = (e) => (_t.mark("".concat(Te, " ").concat(e, " begins")), () => ir(e)), ir = (e) => {
  _t.mark("".concat(Te, " ").concat(e, " ends")), _t.measure("".concat(Te, " ").concat(e), "".concat(Te, " ").concat(e, " begins"), "".concat(Te, " ").concat(e, " ends"));
};
var Dt = {
  begin: Ha,
  end: ir
};
const ze = () => {
};
function gn(e) {
  return typeof (e.getAttribute ? e.getAttribute(ue) : null) == "string";
}
function Xa(e) {
  const t = e.getAttribute ? e.getAttribute(Ct) : null, n = e.getAttribute ? e.getAttribute(Nt) : null;
  return t && n;
}
function Ga(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(x.replacementClass);
}
function Ba() {
  return x.autoReplaceSvg === !0 ? Ye.replace : Ye[x.autoReplaceSvg] || Ye.replace;
}
function Ja(e) {
  return Y.createElementNS("http://www.w3.org/2000/svg", e);
}
function Ka(e) {
  return Y.createElement(e);
}
function cr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Ja : Ka
  } = t;
  if (typeof e == "string")
    return Y.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  }), (e.children || []).forEach(function(o) {
    r.appendChild(cr(o, {
      ceFn: n
    }));
  }), r;
}
function Za(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Ye = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(cr(n), t);
      }), t.getAttribute(ue) === null && x.keepOriginalSource) {
        let n = Y.createComment(Za(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~jt(t).indexOf(x.replacementClass))
      return Ye.replace(e);
    const r = new RegExp("".concat(x.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const o = n[0].attributes.class.split(" ").reduce((i, c) => (c === x.replacementClass || c.match(r) ? i.toSvg.push(c) : i.toNode.push(c), i), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    const a = n.map((o) => Re(o)).join(`
`);
    t.setAttribute(ue, ""), t.innerHTML = a;
  }
};
function yn(e) {
  e();
}
function lr(e, t) {
  const n = typeof t == "function" ? t : ze;
  if (e.length === 0)
    n();
  else {
    let r = yn;
    x.mutateApproach === ta && (r = se.requestAnimationFrame || yn), r(() => {
      const a = Ba(), o = Dt.begin("mutate");
      e.map(a), o(), n();
    });
  }
}
let zt = !1;
function fr() {
  zt = !0;
}
function Et() {
  zt = !1;
}
let We = null;
function bn(e) {
  if (!rn || !x.observeMutations)
    return;
  const {
    treeCallback: t = ze,
    nodeCallback: n = ze,
    pseudoElementsCallback: r = ze,
    observeMutationsRoot: a = Y
  } = e;
  We = new rn((o) => {
    if (zt) return;
    const i = ie();
    xe(o).forEach((c) => {
      if (c.type === "childList" && c.addedNodes.length > 0 && !gn(c.addedNodes[0]) && (x.searchPseudoElements && r(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && x.searchPseudoElements && r(c.target.parentNode), c.type === "attributes" && gn(c.target) && ~ia.indexOf(c.attributeName))
        if (c.attributeName === "class" && Xa(c.target)) {
          const {
            prefix: m,
            iconName: f
          } = Xe(jt(c.target));
          c.target.setAttribute(Ct, m || i), f && c.target.setAttribute(Nt, f);
        } else Ga(c.target) && n(c.target);
    });
  }), ne && We.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Qa() {
  We && We.disconnect();
}
function eo(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const o = a.split(":"), i = o[0], c = o.slice(1);
    return i && c.length > 0 && (r[i] = c.join(":").trim()), r;
  }, {})), n;
}
function to(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = Xe(jt(e));
  return a.prefix || (a.prefix = ie()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Ta(a.prefix, e.innerText) || Ft(a.prefix, ht(e.innerText))), !a.iconName && x.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function no(e) {
  const t = xe(e.attributes).reduce((a, o) => (a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return x.autoA11y && (n ? t["aria-labelledby"] = "".concat(x.replacementClass, "-title-").concat(r || ke()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function ro() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: K,
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
function vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: a
  } = to(e), o = no(e), i = yt("parseNodeAttributes", {}, e);
  let c = t.styleParser ? eo(e) : [];
  return u({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: K,
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
      attributes: o
    }
  }, i);
}
const {
  styles: ao
} = Z;
function ur(e) {
  const t = x.autoReplaceSvg === "nest" ? vn(e, {
    styleParser: !1
  }) : vn(e);
  return ~t.extra.classes.indexOf(Vn) ? ce("generateLayersText", e, t) : ce("generateSvgReplacementMutation", e, t);
}
function oo() {
  return [...zr, ...lt];
}
function xn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ne) return Promise.resolve();
  const n = Y.documentElement.classList, r = (d) => n.add("".concat(sn, "-").concat(d)), a = (d) => n.remove("".concat(sn, "-").concat(d)), o = x.autoFetchSvg ? oo() : Dn.concat(Object.keys(ao));
  o.includes("fa") || o.push("fa");
  const i = [".".concat(Vn, ":not([").concat(ue, "])")].concat(o.map((d) => ".".concat(d, ":not([").concat(ue, "])"))).join(", ");
  if (i.length === 0)
    return Promise.resolve();
  let c = [];
  try {
    c = xe(e.querySelectorAll(i));
  } catch {
  }
  if (c.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const m = Dt.begin("onTree"), f = c.reduce((d, y) => {
    try {
      const b = ur(y);
      b && d.push(b);
    } catch (b) {
      Un || b.name === "MissingIcon" && console.error(b);
    }
    return d;
  }, []);
  return new Promise((d, y) => {
    Promise.all(f).then((b) => {
      lr(b, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), m(), d();
      });
    }).catch((b) => {
      m(), y(b);
    });
  });
}
function so(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  ur(e).then((n) => {
    n && lr([n], t);
  });
}
function io(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : bt(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : bt(a || {})), e(r, u(u({}, n), {}, {
      mask: a
    }));
  };
}
const co = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = K,
    symbol: r = !1,
    mask: a = null,
    maskId: o = null,
    title: i = null,
    titleId: c = null,
    classes: m = [],
    attributes: f = {},
    styles: d = {}
  } = t;
  if (!e) return;
  const {
    prefix: y,
    iconName: b,
    icon: P
  } = e;
  return Ge(u({
    type: "icon"
  }, e), () => (de("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), x.autoA11y && (i ? f["aria-labelledby"] = "".concat(x.replacementClass, "-title-").concat(c || ke()) : (f["aria-hidden"] = "true", f.focusable = "false")), Lt({
    icons: {
      main: vt(P),
      mask: a ? vt(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: y,
    iconName: b,
    transform: u(u({}, K), n),
    symbol: r,
    title: i,
    maskId: o,
    titleId: c,
    extra: {
      attributes: f,
      styles: d,
      classes: m
    }
  })));
};
var lo = {
  mixout() {
    return {
      icon: io(co)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = xn, e.nodeCallback = so, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = Y,
        callback: r = () => {
        }
      } = t;
      return xn(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: a,
        titleId: o,
        prefix: i,
        transform: c,
        symbol: m,
        mask: f,
        maskId: d,
        extra: y
      } = n;
      return new Promise((b, P) => {
        Promise.all([xt(r, i), f.iconName ? xt(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((M) => {
          let [w, S] = M;
          b([t, Lt({
            icons: {
              main: w,
              mask: S
            },
            prefix: i,
            iconName: r,
            transform: c,
            symbol: m,
            maskId: d,
            title: a,
            titleId: o,
            extra: y,
            watchable: !0
          })]);
        }).catch(P);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        transform: o,
        styles: i
      } = t;
      const c = Ve(i);
      c.length > 0 && (r.style = c);
      let m;
      return It(o) && (m = ce("generateAbstractTransformGrouping", {
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
}, fo = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Ge({
          type: "layer"
        }, () => {
          de("beforeDOMElementCreation", {
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
              class: ["".concat(x.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, uo = {
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
        return Ge({
          type: "counter",
          content: e
        }, () => (de("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Ua({
          content: e.toString(),
          title: n,
          extra: {
            attributes: a,
            styles: o,
            classes: ["".concat(x.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, mo = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = K,
          title: r = null,
          classes: a = [],
          attributes: o = {},
          styles: i = {}
        } = t;
        return Ge({
          type: "text",
          content: e
        }, () => (de("beforeDOMElementCreation", {
          content: e,
          params: t
        }), pn({
          content: e,
          transform: u(u({}, K), n),
          title: r,
          extra: {
            attributes: o,
            styles: i,
            classes: ["".concat(x.cssPrefix, "-layers-text"), ...a]
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
      let i = null, c = null;
      if (Fn) {
        const m = parseInt(getComputedStyle(t).fontSize, 10), f = t.getBoundingClientRect();
        i = f.width / m, c = f.height / m;
      }
      return x.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, pn({
        content: t.innerHTML,
        width: i,
        height: c,
        transform: a,
        title: r,
        extra: o,
        watchable: !0
      })]);
    };
  }
};
const po = new RegExp('"', "ug"), _n = [1105920, 1112319], En = u(u(u(u({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Fr), Qr), Hr), At = Object.keys(En).reduce((e, t) => (e[t.toLowerCase()] = En[t], e), {}), ho = Object.keys(At).reduce((e, t) => {
  const n = At[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function go(e) {
  const t = e.replace(po, ""), n = _a(t, 0), r = n >= _n[0] && n <= _n[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: ht(a ? t[0] : t),
    isSecondary: r || a
  };
}
function yo(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (At[n] || {})[a] || ho[n];
}
function An(e, t) {
  const n = "".concat(ea).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const i = xe(e.children).filter((b) => b.getAttribute(ut) === t)[0], c = se.getComputedStyle(e, t), m = c.getPropertyValue("font-family"), f = m.match(oa), d = c.getPropertyValue("font-weight"), y = c.getPropertyValue("content");
    if (i && !f)
      return e.removeChild(i), r();
    if (f && y !== "none" && y !== "") {
      const b = c.getPropertyValue("content");
      let P = yo(m, d);
      const {
        value: M,
        isSecondary: w
      } = go(b), S = f[0].startsWith("FontAwesome");
      let I = Ft(P, M), z = I;
      if (S) {
        const j = Sa(M);
        j.iconName && j.prefix && (I = j.iconName, P = j.prefix);
      }
      if (I && !w && (!i || i.getAttribute(Ct) !== P || i.getAttribute(Nt) !== z)) {
        e.setAttribute(n, z), i && e.removeChild(i);
        const j = ro(), {
          extra: F
        } = j;
        F.attributes[ut] = t, xt(I, P).then((p) => {
          const H = Lt(u(u({}, j), {}, {
            icons: {
              main: p,
              mask: or()
            },
            prefix: P,
            iconName: z,
            extra: F,
            watchable: !0
          })), Q = Y.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(Q, e.firstChild) : e.appendChild(Q), Q.outerHTML = H.map((re) => Re(re)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function bo(e) {
  return Promise.all([An(e, "::before"), An(e, "::after")]);
}
function vo(e) {
  return e.parentNode !== document.head && !~na.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ut) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function On(e) {
  if (ne)
    return new Promise((t, n) => {
      const r = xe(e.querySelectorAll("*")).filter(vo).map(bo), a = Dt.begin("searchPseudoElements");
      fr(), Promise.all(r).then(() => {
        a(), Et(), t();
      }).catch(() => {
        a(), Et(), n();
      });
    });
}
var xo = {
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
        node: n = Y
      } = t;
      x.searchPseudoElements && On(n);
    };
  }
};
let Pn = !1;
var _o = {
  mixout() {
    return {
      dom: {
        unwatch() {
          fr(), Pn = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        bn(yt("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Qa();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Pn ? Et() : bn(yt("mutationObserverCallbacks", {
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
    let i = a.slice(1).join("-");
    if (o && i === "h")
      return n.flipX = !0, n;
    if (o && i === "v")
      return n.flipY = !0, n;
    if (i = parseFloat(i), isNaN(i))
      return n;
    switch (o) {
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
      const i = {
        transform: "translate(".concat(a / 2, " 256)")
      }, c = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), m = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), f = "rotate(".concat(r.rotate, " 0 0)"), d = {
        transform: "".concat(c, " ").concat(m, " ").concat(f)
      }, y = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, b = {
        outer: i,
        inner: d,
        path: y
      };
      return {
        tag: "g",
        attributes: u({}, b.outer),
        children: [{
          tag: "g",
          attributes: u({}, b.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: u(u({}, n.icon.attributes), b.path)
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
function Ao(e) {
  return e.tag === "g" ? e.children : [e];
}
var Oo = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Xe(n.split(" ").map((a) => a.trim())) : or();
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
        maskId: i,
        transform: c
      } = t;
      const {
        width: m,
        icon: f
      } = a, {
        width: d,
        icon: y
      } = o, b = ha({
        transform: c,
        containerWidth: d,
        iconWidth: m
      }), P = {
        tag: "rect",
        attributes: u(u({}, ot), {}, {
          fill: "white"
        })
      }, M = f.children ? {
        children: f.children.map(Sn)
      } : {}, w = {
        tag: "g",
        attributes: u({}, b.inner),
        children: [Sn(u({
          tag: f.tag,
          attributes: u(u({}, f.attributes), b.path)
        }, M))]
      }, S = {
        tag: "g",
        attributes: u({}, b.outer),
        children: [w]
      }, I = "mask-".concat(i || ke()), z = "clip-".concat(i || ke()), j = {
        tag: "mask",
        attributes: u(u({}, ot), {}, {
          id: I,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [P, S]
      }, F = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: z
          },
          children: Ao(y)
        }, j]
      };
      return n.push(F, {
        tag: "rect",
        attributes: u({
          fill: "currentColor",
          "clip-path": "url(#".concat(z, ")"),
          mask: "url(#".concat(I, ")")
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
    se.matchMedia && (t = se.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
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
      }), i = {
        tag: "circle",
        attributes: u(u({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || i.children.push({
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
      }), n.push(i), n.push({
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
}, So = [ba, lo, fo, uo, mo, xo, _o, Eo, Oo, Po, To];
Fa(So, {
  mixoutsTo: q
});
q.noAuto;
q.config;
q.library;
q.dom;
const Ot = q.parse;
q.findIconDefinition;
q.toHtml;
const wo = q.icon;
q.layer;
q.text;
q.counter;
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
function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wn(Object(n), !0).forEach(function(r) {
      ye(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ue(e) {
  "@babel/helpers - typeof";
  return Ue = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ue(e);
}
function ye(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ko(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Co(e, t) {
  if (e == null) return {};
  var n = ko(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Pt(e) {
  return No(e) || Ro(e) || jo(e) || Io();
}
function No(e) {
  if (Array.isArray(e)) return Tt(e);
}
function Ro(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function jo(e, t) {
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
function Io() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mo(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, o = e.bounce, i = e.shake, c = e.flash, m = e.spin, f = e.spinPulse, d = e.spinReverse, y = e.pulse, b = e.fixedWidth, P = e.inverse, M = e.border, w = e.listItem, S = e.flip, I = e.size, z = e.rotation, j = e.pull, F = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": o,
    "fa-shake": i,
    "fa-flash": c,
    "fa-spin": m,
    "fa-spin-reverse": d,
    "fa-spin-pulse": f,
    "fa-pulse": y,
    "fa-fw": b,
    "fa-inverse": P,
    "fa-border": M,
    "fa-li": w,
    "fa-flip": S === !0,
    "fa-flip-horizontal": S === "horizontal" || S === "both",
    "fa-flip-vertical": S === "vertical" || S === "both"
  }, ye(t, "fa-".concat(I), typeof I < "u" && I !== null), ye(t, "fa-rotate-".concat(z), typeof z < "u" && z !== null && z !== 0), ye(t, "fa-pull-".concat(j), typeof j < "u" && j !== null), ye(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(F).map(function(p) {
    return F[p] ? p : null;
  }).filter(function(p) {
    return p;
  });
}
function Fo(e) {
  return e = e - 0, e === e;
}
function dr(e) {
  return Fo(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Lo = ["style"];
function Do(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function zo(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = dr(n.slice(0, r)), o = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Do(a)] = o : t[a] = o, t;
  }, {});
}
function mr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(m) {
    return mr(e, m);
  }), a = Object.keys(t.attributes || {}).reduce(function(m, f) {
    var d = t.attributes[f];
    switch (f) {
      case "class":
        m.attrs.className = d, delete t.attributes.class;
        break;
      case "style":
        m.attrs.style = zo(d);
        break;
      default:
        f.indexOf("aria-") === 0 || f.indexOf("data-") === 0 ? m.attrs[f.toLowerCase()] = d : m.attrs[dr(f)] = d;
    }
    return m;
  }, {
    attrs: {}
  }), o = n.style, i = o === void 0 ? {} : o, c = Co(n, Lo);
  return a.attrs.style = J(J({}, a.attrs.style), i), e.apply(void 0, [t.tag, J(J({}, a.attrs), c)].concat(Pt(r)));
}
var pr = !1;
try {
  pr = process.env.NODE_ENV === "production";
} catch {
}
function Yo() {
  if (!pr && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function kn(e) {
  if (e && Ue(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Ot.icon)
    return Ot.icon(e);
  if (e === null)
    return null;
  if (e && Ue(e) === "object" && e.prefix && e.iconName)
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
function st(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ye({}, e, t) : {};
}
var Cn = {
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
}, V = /* @__PURE__ */ St.forwardRef(function(e, t) {
  var n = J(J({}, Cn), e), r = n.icon, a = n.mask, o = n.symbol, i = n.className, c = n.title, m = n.titleId, f = n.maskId, d = kn(r), y = st("classes", [].concat(Pt(Mo(n)), Pt((i || "").split(" ")))), b = st("transform", typeof n.transform == "string" ? Ot.transform(n.transform) : n.transform), P = st("mask", kn(a)), M = wo(d, J(J(J(J({}, y), b), P), {}, {
    symbol: o,
    title: c,
    titleId: m,
    maskId: f
  }));
  if (!M)
    return Yo("Could not find icon", d), null;
  var w = M.abstract, S = {
    ref: t
  };
  return Object.keys(n).forEach(function(I) {
    Cn.hasOwnProperty(I) || (S[I] = n[I]);
  }), $o(w[0], S);
});
V.displayName = "FontAwesomeIcon";
V.propTypes = {
  beat: _.bool,
  border: _.bool,
  beatFade: _.bool,
  bounce: _.bool,
  className: _.string,
  fade: _.bool,
  flash: _.bool,
  mask: _.oneOfType([_.object, _.array, _.string]),
  maskId: _.string,
  fixedWidth: _.bool,
  inverse: _.bool,
  flip: _.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: _.oneOfType([_.object, _.array, _.string]),
  listItem: _.bool,
  pull: _.oneOf(["right", "left"]),
  pulse: _.bool,
  rotation: _.oneOf([0, 90, 180, 270]),
  shake: _.bool,
  size: _.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: _.bool,
  spinPulse: _.bool,
  spinReverse: _.bool,
  symbol: _.oneOfType([_.bool, _.string]),
  title: _.string,
  titleId: _.string,
  transform: _.oneOfType([_.string, _.object]),
  swapOpacity: _.bool
};
var $o = mr.bind(null, St.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Wo = {
  prefix: "fas",
  iconName: "compass",
  icon: [512, 512, [129517], "f14e", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, it = {
  prefix: "fas",
  iconName: "phone-volume",
  icon: [512, 512, ["volume-control-phone"], "f2a0", "M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"]
}, Uo = {
  prefix: "fas",
  iconName: "envelope",
  icon: [512, 512, [128386, 9993, 61443], "f0e0", "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]
}, qo = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Vo = {
  prefix: "fab",
  iconName: "x-twitter",
  icon: [512, 512, [], "e61b", "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]
}, Ho = {
  prefix: "fab",
  iconName: "instagram",
  icon: [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
}, Xo = {
  prefix: "fab",
  iconName: "facebook",
  icon: [512, 512, [62e3], "f09a", "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]
}, Go = {
  prefix: "fab",
  iconName: "bluesky",
  icon: [512, 512, [], "e671", "M111.8 62.2C170.2 105.9 233 194.7 256 242.4c23-47.6 85.8-136.4 144.2-180.2c42.1-31.6 110.3-56 110.3 21.8c0 15.5-8.9 130.5-14.1 149.2C478.2 298 412 314.6 353.1 304.5c102.9 17.5 129.1 75.5 72.5 133.5c-107.4 110.2-154.3-27.6-166.3-62.9l0 0c-1.7-4.9-2.6-7.8-3.3-7.8s-1.6 3-3.3 7.8l0 0c-12 35.3-59 173.1-166.3 62.9c-56.5-58-30.4-116 72.5-133.5C100 314.6 33.8 298 15.7 233.1C10.4 214.4 1.5 99.4 1.5 83.9c0-77.8 68.2-53.4 110.3-21.8z"]
}, Bo = ({
  title: e,
  emailAddress: t,
  officePhone: n,
  informationPhone: r,
  relayServicePhone: a,
  socialMedia: o,
  officeDetails: i,
  className: c
}) => {
  const {
    facebook: m,
    twitter: f,
    bluesky: d,
    instagram: y
  } = o || {}, {
    address: b,
    room: P,
    city: M,
    state: w,
    zip: S,
    days: I,
    hours: z
  } = i || {};
  return /* @__PURE__ */ g.jsxs("div", { className: `contacts ${c || ""}`, children: [
    /* @__PURE__ */ g.jsx("div", { className: "contacts__border" }),
    /* @__PURE__ */ g.jsxs("div", { className: "contacts__container", children: [
      /* @__PURE__ */ g.jsxs("div", { className: "contacts__section", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "contacts__section-header", children: [
          /* @__PURE__ */ g.jsx("h3", { className: "contacts__heading", children: "Contact" }),
          /* @__PURE__ */ g.jsx("div", { className: "contacts__button-container", children: /* @__PURE__ */ g.jsxs(
            "a",
            {
              href: `mailto:${t}`,
              className: "contacts__button",
              "aria-label": `Contact ${e} via email`,
              children: [
                /* @__PURE__ */ g.jsx(V, { icon: Uo, className: "contacts__button-icon" }),
                /* @__PURE__ */ g.jsxs("span", { children: [
                  "Contact this ",
                  e
                ] })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ g.jsxs("div", { className: "contacts__phone-list", children: [
          n && /* @__PURE__ */ g.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ g.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ g.jsx(V, { icon: it, className: "contacts__icon" }),
              /* @__PURE__ */ g.jsx("span", { className: "contacts__label", children: "Phone: Office" })
            ] }),
            /* @__PURE__ */ g.jsx("a", { href: `tel:${n}`, className: "contacts__link", children: n })
          ] }),
          r && /* @__PURE__ */ g.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ g.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ g.jsx(V, { icon: it, className: "contacts__icon" }),
              /* @__PURE__ */ g.jsx("span", { className: "contacts__label", children: "Phone: Information" })
            ] }),
            /* @__PURE__ */ g.jsx("a", { href: `tel:${r}`, className: "contacts__link", children: r })
          ] }),
          a && /* @__PURE__ */ g.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ g.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ g.jsx(V, { icon: it, className: "contacts__icon" }),
              /* @__PURE__ */ g.jsx("span", { className: "contacts__label", children: "Phone: Oregon Relay Service" })
            ] }),
            /* @__PURE__ */ g.jsx("a", { href: `tel:${a}`, className: "contacts__link", children: a })
          ] })
        ] })
      ] }),
      o && /* @__PURE__ */ g.jsxs("div", { className: "contacts__section", children: [
        /* @__PURE__ */ g.jsx("h3", { className: "contacts__heading", children: "Social Media" }),
        /* @__PURE__ */ g.jsxs("div", { className: "contacts__social-list", children: [
          m && /* @__PURE__ */ g.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ g.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ g.jsx(V, { icon: Xo, className: "contacts__icon" }),
              /* @__PURE__ */ g.jsx("span", { className: "contacts__label", children: "Facebook" })
            ] }),
            /* @__PURE__ */ g.jsx("a", { href: `https://facebook.com/${m}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: m })
          ] }),
          f && /* @__PURE__ */ g.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ g.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ g.jsx(V, { icon: Vo, className: "contacts__icon" }),
              /* @__PURE__ */ g.jsx("span", { className: "contacts__label", children: "X (Twitter)" })
            ] }),
            /* @__PURE__ */ g.jsx("a", { href: `https://twitter.com/${f}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: f })
          ] }),
          d && /* @__PURE__ */ g.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ g.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ g.jsx(V, { icon: Go, className: "contacts__icon" }),
              /* @__PURE__ */ g.jsx("span", { className: "contacts__label", children: "Bluesky" })
            ] }),
            /* @__PURE__ */ g.jsx("a", { href: `https://bsky.app/profile/${d}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: d })
          ] }),
          y && /* @__PURE__ */ g.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ g.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ g.jsx(V, { icon: Ho, className: "contacts__icon" }),
              /* @__PURE__ */ g.jsx("span", { className: "contacts__label", children: "Instagram" })
            ] }),
            /* @__PURE__ */ g.jsx("a", { href: `https://instagram.com/${y}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: y })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "contacts__section", children: [
        /* @__PURE__ */ g.jsx("h3", { className: "contacts__heading", children: "Office" }),
        /* @__PURE__ */ g.jsxs("div", { className: "contacts__office-info", children: [
          /* @__PURE__ */ g.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ g.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ g.jsx(V, { icon: Wo, className: "contacts__icon" }),
              /* @__PURE__ */ g.jsx("span", { className: "contacts__label", children: "Address" })
            ] }),
            /* @__PURE__ */ g.jsxs("a", { href: `https://maps.google.com/?q=${b} ${M}, ${w} ${S}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: [
              b,
              /* @__PURE__ */ g.jsx("br", {}),
              P && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                P,
                /* @__PURE__ */ g.jsx("br", {})
              ] }),
              M,
              ", ",
              w,
              " ",
              S
            ] })
          ] }),
          z && /* @__PURE__ */ g.jsxs("div", { className: "contacts__item", children: [
            /* @__PURE__ */ g.jsxs("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ g.jsx(V, { icon: qo, className: "contacts__icon" }),
              /* @__PURE__ */ g.jsx("span", { className: "contacts__label", children: "Hours" })
            ] }),
            /* @__PURE__ */ g.jsxs("div", { className: "contacts__hours-value", children: [
              /* @__PURE__ */ g.jsx("div", { children: I }),
              /* @__PURE__ */ g.jsx("div", { children: z })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
};
Bo.propTypes = {
  title: _.string.isRequired,
  emailAddress: _.string.isRequired,
  officePhone: _.string,
  informationPhone: _.string,
  relayServicePhone: _.string,
  socialMedia: _.shape({
    facebook: _.string,
    twitter: _.string,
    bluesky: _.string,
    instagram: _.string
  }),
  officeDetails: _.shape({
    address: _.string.isRequired,
    room: _.string,
    city: _.string.isRequired,
    state: _.string.isRequired,
    zip: _.string.isRequired,
    hours: _.string
  }).isRequired,
  className: _.string
};
export {
  Bo as Contacts
};
//# sourceMappingURL=index.js.map
