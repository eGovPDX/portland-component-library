import qe, { useState as St, useEffect as Pr } from "react";
function Or(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ie = { exports: {} }, Te = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vt;
function Sr() {
  if (Vt) return Te;
  Vt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, i) {
    var l = null;
    if (i !== void 0 && (l = "" + i), a.key !== void 0 && (l = "" + a.key), "key" in a) {
      i = {};
      for (var c in a)
        c !== "key" && (i[c] = a[c]);
    } else i = a;
    return a = i.ref, {
      $$typeof: e,
      type: r,
      key: l,
      ref: a !== void 0 ? a : null,
      props: i
    };
  }
  return Te.Fragment = t, Te.jsx = n, Te.jsxs = n, Te;
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
var Xt;
function jr() {
  return Xt || (Xt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === Ee ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case k:
          return "Fragment";
        case M:
          return "Profiler";
        case S:
          return "StrictMode";
        case g:
          return "Suspense";
        case B:
          return "SuspenseList";
        case we:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case F:
            return "Portal";
          case P:
            return (s.displayName || "Context") + ".Provider";
          case z:
            return (s._context.displayName || "Context") + ".Consumer";
          case C:
            var p = s.render;
            return s = s.displayName, s || (s = p.displayName || p.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case Z:
            return p = s.displayName || null, p !== null ? p : e(s.type) || "Memo";
          case ne:
            p = s._payload, s = s._init;
            try {
              return e(s(p));
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
        var p = !1;
      } catch {
        p = !0;
      }
      if (p) {
        p = console;
        var x = p.error, E = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return x.call(
          p,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          E
        ), t(s);
      }
    }
    function r(s) {
      if (s === k) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === ne)
        return "<...>";
      try {
        var p = e(s);
        return p ? "<" + p + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var s = re.A;
      return s === null ? null : s.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function l(s) {
      if (me.call(s, "key")) {
        var p = Object.getOwnPropertyDescriptor(s, "key").get;
        if (p && p.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function c(s, p) {
      function x() {
        pe || (pe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          p
        ));
      }
      x.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: x,
        configurable: !0
      });
    }
    function d() {
      var s = e(this.type);
      return W[s] || (W[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function u(s, p, x, E, A, j, N, _) {
      return x = j.ref, s = {
        $$typeof: O,
        type: s,
        key: p,
        props: j,
        _owner: A
      }, (x !== void 0 ? x : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: d
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
        value: N
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function m(s, p, x, E, A, j, N, _) {
      var T = p.children;
      if (T !== void 0)
        if (E)
          if (Ae(T)) {
            for (E = 0; E < T.length; E++)
              y(T[E]);
            Object.freeze && Object.freeze(T);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(T);
      if (me.call(p, "key")) {
        T = e(s);
        var R = Object.keys(p).filter(function(Y) {
          return Y !== "key";
        });
        E = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", he[T + E] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          E,
          T,
          R,
          T
        ), he[T + E] = !0);
      }
      if (T = null, x !== void 0 && (n(x), T = "" + x), l(p) && (n(p.key), T = "" + p.key), "key" in p) {
        x = {};
        for (var I in p)
          I !== "key" && (x[I] = p[I]);
      } else x = p;
      return T && c(
        x,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), u(
        s,
        T,
        j,
        A,
        a(),
        x,
        N,
        _
      );
    }
    function y(s) {
      typeof s == "object" && s !== null && s.$$typeof === O && s._store && (s._store.validated = 1);
    }
    var b = qe, O = Symbol.for("react.transitional.element"), F = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), P = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), we = Symbol.for("react.activity"), Ee = Symbol.for("react.client.reference"), re = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, me = Object.prototype.hasOwnProperty, Ae = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      "react-stack-bottom-frame": function(s) {
        return s();
      }
    };
    var pe, W = {}, G = b["react-stack-bottom-frame"].bind(
      b,
      i
    )(), le = H(r(i)), he = {};
    Pe.Fragment = k, Pe.jsx = function(s, p, x, E, A) {
      var j = 1e4 > re.recentlyCreatedOwnerStacks++;
      return m(
        s,
        p,
        x,
        !1,
        E,
        A,
        j ? Error("react-stack-top-frame") : G,
        j ? H(r(s)) : le
      );
    }, Pe.jsxs = function(s, p, x, E, A) {
      var j = 1e4 > re.recentlyCreatedOwnerStacks++;
      return m(
        s,
        p,
        x,
        !0,
        E,
        A,
        j ? Error("react-stack-top-frame") : G,
        j ? H(r(s)) : le
      );
    };
  }()), Pe;
}
var Kt;
function kr() {
  return Kt || (Kt = 1, process.env.NODE_ENV === "production" ? Ie.exports = Sr() : Ie.exports = jr()), Ie.exports;
}
var o = kr(), Me = { exports: {} }, Fe = { exports: {} }, L = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function Nr() {
  if (Jt) return L;
  Jt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, O = e ? Symbol.for("react.memo") : 60115, F = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function P(g) {
    if (typeof g == "object" && g !== null) {
      var B = g.$$typeof;
      switch (B) {
        case t:
          switch (g = g.type, g) {
            case d:
            case u:
            case r:
            case i:
            case a:
            case y:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case c:
                case m:
                case F:
                case O:
                case l:
                  return g;
                default:
                  return B;
              }
          }
        case n:
          return B;
      }
    }
  }
  function C(g) {
    return P(g) === u;
  }
  return L.AsyncMode = d, L.ConcurrentMode = u, L.ContextConsumer = c, L.ContextProvider = l, L.Element = t, L.ForwardRef = m, L.Fragment = r, L.Lazy = F, L.Memo = O, L.Portal = n, L.Profiler = i, L.StrictMode = a, L.Suspense = y, L.isAsyncMode = function(g) {
    return C(g) || P(g) === d;
  }, L.isConcurrentMode = C, L.isContextConsumer = function(g) {
    return P(g) === c;
  }, L.isContextProvider = function(g) {
    return P(g) === l;
  }, L.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, L.isForwardRef = function(g) {
    return P(g) === m;
  }, L.isFragment = function(g) {
    return P(g) === r;
  }, L.isLazy = function(g) {
    return P(g) === F;
  }, L.isMemo = function(g) {
    return P(g) === O;
  }, L.isPortal = function(g) {
    return P(g) === n;
  }, L.isProfiler = function(g) {
    return P(g) === i;
  }, L.isStrictMode = function(g) {
    return P(g) === a;
  }, L.isSuspense = function(g) {
    return P(g) === y;
  }, L.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === u || g === i || g === a || g === y || g === b || typeof g == "object" && g !== null && (g.$$typeof === F || g.$$typeof === O || g.$$typeof === l || g.$$typeof === c || g.$$typeof === m || g.$$typeof === S || g.$$typeof === M || g.$$typeof === z || g.$$typeof === k);
  }, L.typeOf = P, L;
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
var Zt;
function _r() {
  return Zt || (Zt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, O = e ? Symbol.for("react.memo") : 60115, F = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
    function P(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === r || v === u || v === i || v === a || v === y || v === b || typeof v == "object" && v !== null && (v.$$typeof === F || v.$$typeof === O || v.$$typeof === l || v.$$typeof === c || v.$$typeof === m || v.$$typeof === S || v.$$typeof === M || v.$$typeof === z || v.$$typeof === k);
    }
    function C(v) {
      if (typeof v == "object" && v !== null) {
        var V = v.$$typeof;
        switch (V) {
          case t:
            var Re = v.type;
            switch (Re) {
              case d:
              case u:
              case r:
              case i:
              case a:
              case y:
                return Re;
              default:
                var Gt = Re && Re.$$typeof;
                switch (Gt) {
                  case c:
                  case m:
                  case F:
                  case O:
                  case l:
                    return Gt;
                  default:
                    return V;
                }
            }
          case n:
            return V;
        }
      }
    }
    var g = d, B = u, Z = c, ne = l, we = t, Ee = m, re = r, me = F, Ae = O, H = n, pe = i, W = a, G = y, le = !1;
    function he(v) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), s(v) || C(v) === d;
    }
    function s(v) {
      return C(v) === u;
    }
    function p(v) {
      return C(v) === c;
    }
    function x(v) {
      return C(v) === l;
    }
    function E(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function A(v) {
      return C(v) === m;
    }
    function j(v) {
      return C(v) === r;
    }
    function N(v) {
      return C(v) === F;
    }
    function _(v) {
      return C(v) === O;
    }
    function T(v) {
      return C(v) === n;
    }
    function R(v) {
      return C(v) === i;
    }
    function I(v) {
      return C(v) === a;
    }
    function Y(v) {
      return C(v) === y;
    }
    D.AsyncMode = g, D.ConcurrentMode = B, D.ContextConsumer = Z, D.ContextProvider = ne, D.Element = we, D.ForwardRef = Ee, D.Fragment = re, D.Lazy = me, D.Memo = Ae, D.Portal = H, D.Profiler = pe, D.StrictMode = W, D.Suspense = G, D.isAsyncMode = he, D.isConcurrentMode = s, D.isContextConsumer = p, D.isContextProvider = x, D.isElement = E, D.isForwardRef = A, D.isFragment = j, D.isLazy = N, D.isMemo = _, D.isPortal = T, D.isProfiler = R, D.isStrictMode = I, D.isSuspense = Y, D.isValidElementType = P, D.typeOf = C;
  }()), D;
}
var Qt;
function Dn() {
  return Qt || (Qt = 1, process.env.NODE_ENV === "production" ? Fe.exports = Nr() : Fe.exports = _r()), Fe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ke, en;
function Cr() {
  if (en) return Ke;
  en = 1;
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
      for (var l = {}, c = 0; c < 10; c++)
        l["_" + String.fromCharCode(c)] = c;
      var d = Object.getOwnPropertyNames(l).map(function(m) {
        return l[m];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        u[m] = m;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ke = a() ? Object.assign : function(i, l) {
    for (var c, d = r(i), u, m = 1; m < arguments.length; m++) {
      c = Object(arguments[m]);
      for (var y in c)
        t.call(c, y) && (d[y] = c[y]);
      if (e) {
        u = e(c);
        for (var b = 0; b < u.length; b++)
          n.call(c, u[b]) && (d[u[b]] = c[u[b]]);
      }
    }
    return d;
  }, Ke;
}
var Je, tn;
function jt() {
  if (tn) return Je;
  tn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Je = e, Je;
}
var Ze, nn;
function zn() {
  return nn || (nn = 1, Ze = Function.call.bind(Object.prototype.hasOwnProperty)), Ze;
}
var Qe, rn;
function Rr() {
  if (rn) return Qe;
  rn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ jt(), n = {}, r = /* @__PURE__ */ zn();
    e = function(i) {
      var l = "Warning: " + i;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function a(i, l, c, d, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in i)
        if (r(i, m)) {
          var y;
          try {
            if (typeof i[m] != "function") {
              var b = Error(
                (d || "React class") + ": " + c + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            y = i[m](l, m, d, c, null, t);
          } catch (F) {
            y = F;
          }
          if (y && !(y instanceof Error) && e(
            (d || "React class") + ": type specification of " + c + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in n)) {
            n[y.message] = !0;
            var O = u ? u() : "";
            e(
              "Failed " + c + " type: " + y.message + (O ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Qe = a, Qe;
}
var et, an;
function Ir() {
  if (an) return et;
  an = 1;
  var e = Dn(), t = Cr(), n = /* @__PURE__ */ jt(), r = /* @__PURE__ */ zn(), a = /* @__PURE__ */ Rr(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var d = "Warning: " + c;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return et = function(c, d) {
    var u = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function y(s) {
      var p = s && (u && s[u] || s[m]);
      if (typeof p == "function")
        return p;
    }
    var b = "<<anonymous>>", O = {
      array: M("array"),
      bigint: M("bigint"),
      bool: M("boolean"),
      func: M("function"),
      number: M("number"),
      object: M("object"),
      string: M("string"),
      symbol: M("symbol"),
      any: z(),
      arrayOf: P,
      element: C(),
      elementType: g(),
      instanceOf: B,
      node: Ee(),
      objectOf: ne,
      oneOf: Z,
      oneOfType: we,
      shape: me,
      exact: Ae
    };
    function F(s, p) {
      return s === p ? s !== 0 || 1 / s === 1 / p : s !== s && p !== p;
    }
    function k(s, p) {
      this.message = s, this.data = p && typeof p == "object" ? p : {}, this.stack = "";
    }
    k.prototype = Error.prototype;
    function S(s) {
      if (process.env.NODE_ENV !== "production")
        var p = {}, x = 0;
      function E(j, N, _, T, R, I, Y) {
        if (T = T || b, I = I || _, Y !== n) {
          if (d) {
            var v = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw v.name = "Invariant Violation", v;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var V = T + ":" + _;
            !p[V] && // Avoid spamming the console because they are often not actionable except for lib authors
            x < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + I + "` prop on `" + T + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), p[V] = !0, x++);
          }
        }
        return N[_] == null ? j ? N[_] === null ? new k("The " + R + " `" + I + "` is marked as required " + ("in `" + T + "`, but its value is `null`.")) : new k("The " + R + " `" + I + "` is marked as required in " + ("`" + T + "`, but its value is `undefined`.")) : null : s(N, _, T, R, I);
      }
      var A = E.bind(null, !1);
      return A.isRequired = E.bind(null, !0), A;
    }
    function M(s) {
      function p(x, E, A, j, N, _) {
        var T = x[E], R = W(T);
        if (R !== s) {
          var I = G(T);
          return new k(
            "Invalid " + j + " `" + N + "` of type " + ("`" + I + "` supplied to `" + A + "`, expected ") + ("`" + s + "`."),
            { expectedType: s }
          );
        }
        return null;
      }
      return S(p);
    }
    function z() {
      return S(l);
    }
    function P(s) {
      function p(x, E, A, j, N) {
        if (typeof s != "function")
          return new k("Property `" + N + "` of component `" + A + "` has invalid PropType notation inside arrayOf.");
        var _ = x[E];
        if (!Array.isArray(_)) {
          var T = W(_);
          return new k("Invalid " + j + " `" + N + "` of type " + ("`" + T + "` supplied to `" + A + "`, expected an array."));
        }
        for (var R = 0; R < _.length; R++) {
          var I = s(_, R, A, j, N + "[" + R + "]", n);
          if (I instanceof Error)
            return I;
        }
        return null;
      }
      return S(p);
    }
    function C() {
      function s(p, x, E, A, j) {
        var N = p[x];
        if (!c(N)) {
          var _ = W(N);
          return new k("Invalid " + A + " `" + j + "` of type " + ("`" + _ + "` supplied to `" + E + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(s);
    }
    function g() {
      function s(p, x, E, A, j) {
        var N = p[x];
        if (!e.isValidElementType(N)) {
          var _ = W(N);
          return new k("Invalid " + A + " `" + j + "` of type " + ("`" + _ + "` supplied to `" + E + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(s);
    }
    function B(s) {
      function p(x, E, A, j, N) {
        if (!(x[E] instanceof s)) {
          var _ = s.name || b, T = he(x[E]);
          return new k("Invalid " + j + " `" + N + "` of type " + ("`" + T + "` supplied to `" + A + "`, expected ") + ("instance of `" + _ + "`."));
        }
        return null;
      }
      return S(p);
    }
    function Z(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), l;
      function p(x, E, A, j, N) {
        for (var _ = x[E], T = 0; T < s.length; T++)
          if (F(_, s[T]))
            return null;
        var R = JSON.stringify(s, function(Y, v) {
          var V = G(v);
          return V === "symbol" ? String(v) : v;
        });
        return new k("Invalid " + j + " `" + N + "` of value `" + String(_) + "` " + ("supplied to `" + A + "`, expected one of " + R + "."));
      }
      return S(p);
    }
    function ne(s) {
      function p(x, E, A, j, N) {
        if (typeof s != "function")
          return new k("Property `" + N + "` of component `" + A + "` has invalid PropType notation inside objectOf.");
        var _ = x[E], T = W(_);
        if (T !== "object")
          return new k("Invalid " + j + " `" + N + "` of type " + ("`" + T + "` supplied to `" + A + "`, expected an object."));
        for (var R in _)
          if (r(_, R)) {
            var I = s(_, R, A, j, N + "." + R, n);
            if (I instanceof Error)
              return I;
          }
        return null;
      }
      return S(p);
    }
    function we(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var p = 0; p < s.length; p++) {
        var x = s[p];
        if (typeof x != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(x) + " at index " + p + "."
          ), l;
      }
      function E(A, j, N, _, T) {
        for (var R = [], I = 0; I < s.length; I++) {
          var Y = s[I], v = Y(A, j, N, _, T, n);
          if (v == null)
            return null;
          v.data && r(v.data, "expectedType") && R.push(v.data.expectedType);
        }
        var V = R.length > 0 ? ", expected one of type [" + R.join(", ") + "]" : "";
        return new k("Invalid " + _ + " `" + T + "` supplied to " + ("`" + N + "`" + V + "."));
      }
      return S(E);
    }
    function Ee() {
      function s(p, x, E, A, j) {
        return H(p[x]) ? null : new k("Invalid " + A + " `" + j + "` supplied to " + ("`" + E + "`, expected a ReactNode."));
      }
      return S(s);
    }
    function re(s, p, x, E, A) {
      return new k(
        (s || "React class") + ": " + p + " type `" + x + "." + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + A + "`."
      );
    }
    function me(s) {
      function p(x, E, A, j, N) {
        var _ = x[E], T = W(_);
        if (T !== "object")
          return new k("Invalid " + j + " `" + N + "` of type `" + T + "` " + ("supplied to `" + A + "`, expected `object`."));
        for (var R in s) {
          var I = s[R];
          if (typeof I != "function")
            return re(A, j, N, R, G(I));
          var Y = I(_, R, A, j, N + "." + R, n);
          if (Y)
            return Y;
        }
        return null;
      }
      return S(p);
    }
    function Ae(s) {
      function p(x, E, A, j, N) {
        var _ = x[E], T = W(_);
        if (T !== "object")
          return new k("Invalid " + j + " `" + N + "` of type `" + T + "` " + ("supplied to `" + A + "`, expected `object`."));
        var R = t({}, x[E], s);
        for (var I in R) {
          var Y = s[I];
          if (r(s, I) && typeof Y != "function")
            return re(A, j, N, I, G(Y));
          if (!Y)
            return new k(
              "Invalid " + j + " `" + N + "` key `" + I + "` supplied to `" + A + "`.\nBad object: " + JSON.stringify(x[E], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(s), null, "  ")
            );
          var v = Y(_, I, A, j, N + "." + I, n);
          if (v)
            return v;
        }
        return null;
      }
      return S(p);
    }
    function H(s) {
      switch (typeof s) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !s;
        case "object":
          if (Array.isArray(s))
            return s.every(H);
          if (s === null || c(s))
            return !0;
          var p = y(s);
          if (p) {
            var x = p.call(s), E;
            if (p !== s.entries) {
              for (; !(E = x.next()).done; )
                if (!H(E.value))
                  return !1;
            } else
              for (; !(E = x.next()).done; ) {
                var A = E.value;
                if (A && !H(A[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function pe(s, p) {
      return s === "symbol" ? !0 : p ? p["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && p instanceof Symbol : !1;
    }
    function W(s) {
      var p = typeof s;
      return Array.isArray(s) ? "array" : s instanceof RegExp ? "object" : pe(p, s) ? "symbol" : p;
    }
    function G(s) {
      if (typeof s > "u" || s === null)
        return "" + s;
      var p = W(s);
      if (p === "object") {
        if (s instanceof Date)
          return "date";
        if (s instanceof RegExp)
          return "regexp";
      }
      return p;
    }
    function le(s) {
      var p = G(s);
      switch (p) {
        case "array":
        case "object":
          return "an " + p;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + p;
        default:
          return p;
      }
    }
    function he(s) {
      return !s.constructor || !s.constructor.name ? b : s.constructor.name;
    }
    return O.checkPropTypes = a, O.resetWarningCache = a.resetWarningCache, O.PropTypes = O, O;
  }, et;
}
var tt, sn;
function Mr() {
  if (sn) return tt;
  sn = 1;
  var e = /* @__PURE__ */ jt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, tt = function() {
    function r(l, c, d, u, m, y) {
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
  }, tt;
}
var on;
function Fr() {
  if (on) return Me.exports;
  if (on = 1, process.env.NODE_ENV !== "production") {
    var e = Dn(), t = !0;
    Me.exports = /* @__PURE__ */ Ir()(e.isElement, t);
  } else
    Me.exports = /* @__PURE__ */ Mr()();
  return Me.exports;
}
var Lr = /* @__PURE__ */ Fr();
const f = /* @__PURE__ */ Or(Lr);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Dr(e, t, n) {
  return (t = $r(t)) in e ? Object.defineProperty(e, t, {
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
function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ln(Object(n), !0).forEach(function(r) {
      Dr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ln(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function zr(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $r(e) {
  var t = zr(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const cn = () => {
};
let kt = {}, $n = {}, Yn = null, Un = {
  mark: cn,
  measure: cn
};
try {
  typeof window < "u" && (kt = window), typeof document < "u" && ($n = document), typeof MutationObserver < "u" && (Yn = MutationObserver), typeof performance < "u" && (Un = performance);
} catch {
}
const {
  userAgent: fn = ""
} = kt.navigator || {}, ie = kt, $ = $n, un = Yn, Le = Un;
ie.document;
const te = !!$.documentElement && !!$.head && typeof $.addEventListener == "function" && typeof $.createElement == "function", Wn = ~fn.indexOf("MSIE") || ~fn.indexOf("Trident/");
var Yr = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Ur = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, qn = {
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
}, Wr = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Bn = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], U = "classic", Be = "duotone", qr = "sharp", Br = "sharp-duotone", Hn = [U, Be, qr, Br], Hr = {
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
}]]), Xr = {
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
}, Kr = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], dn = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Jr = ["kit"], Zr = {
  kit: {
    "fa-kit": "fak"
  }
}, Qr = ["fak", "fakd"], ea = {
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
}, De = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, ta = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], na = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], ra = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, aa = {
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
}, ia = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, lt = {
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
}, sa = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], ct = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...ta, ...sa], oa = ["solid", "regular", "light", "thin", "duotone", "brands"], Gn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], la = Gn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ca = [...Object.keys(ia), ...oa, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", De.GROUP, De.SWAP_OPACITY, De.PRIMARY, De.SECONDARY].concat(Gn.map((e) => "".concat(e, "x"))).concat(la.map((e) => "w-".concat(e))), fa = {
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
const Q = "___FONT_AWESOME___", ft = 16, Vn = "fa", Xn = "svg-inline--fa", fe = "data-fa-i2svg", ut = "data-fa-pseudo-element", ua = "data-fa-pseudo-element-pending", Nt = "data-prefix", _t = "data-icon", pn = "fontawesome-i2svg", da = "async", ma = ["HTML", "HEAD", "STYLE", "SCRIPT"], Kn = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function _e(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[U];
    }
  });
}
const Jn = h({}, qn);
Jn[U] = h(h(h(h({}, {
  "fa-duotone": "duotone"
}), qn[U]), dn.kit), dn["kit-duotone"]);
const pa = _e(Jn), dt = h({}, Xr);
dt[U] = h(h(h(h({}, {
  duotone: "fad"
}), dt[U]), mn.kit), mn["kit-duotone"]);
const hn = _e(dt), mt = h({}, lt);
mt[U] = h(h({}, mt[U]), ea.kit);
const Ct = _e(mt), pt = h({}, aa);
pt[U] = h(h({}, pt[U]), Zr.kit);
_e(pt);
const ha = Yr, Zn = "fa-layers-text", ga = Ur, ya = h({}, Hr);
_e(ya);
const ba = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], nt = Wr, va = [...Jr, ...ca], Se = ie.FontAwesomeConfig || {};
function xa(e) {
  var t = $.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function wa(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
$ && typeof $.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = wa(xa(n));
  a != null && (Se[r] = a);
});
const Qn = {
  styleDefault: "solid",
  familyDefault: U,
  cssPrefix: Vn,
  replacementClass: Xn,
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
const ve = h(h({}, Qn), Se);
ve.autoReplaceSvg || (ve.observeMutations = !1);
const w = {};
Object.keys(Qn).forEach((e) => {
  Object.defineProperty(w, e, {
    enumerable: !0,
    set: function(t) {
      ve[e] = t, je.forEach((n) => n(w));
    },
    get: function() {
      return ve[e];
    }
  });
});
Object.defineProperty(w, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    ve.cssPrefix = e, je.forEach((t) => t(w));
  },
  get: function() {
    return ve.cssPrefix;
  }
});
ie.FontAwesomeConfig = w;
const je = [];
function Ea(e) {
  return je.push(e), () => {
    je.splice(je.indexOf(e), 1);
  };
}
const ae = ft, K = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Aa(e) {
  if (!e || !te)
    return;
  const t = $.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = $.head.childNodes;
  let r = null;
  for (let a = n.length - 1; a > -1; a--) {
    const i = n[a], l = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(l) > -1 && (r = i);
  }
  return $.head.insertBefore(t, r), e;
}
const Ta = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ke() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Ta[Math.random() * 62 | 0];
  return t;
}
function xe(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Rt(e) {
  return e.classList ? xe(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function er(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Pa(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(er(e[n]), '" '), "").trim();
}
function He(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function It(e) {
  return e.size !== K.size || e.x !== K.x || e.y !== K.y || e.rotate !== K.rotate || e.flipX || e.flipY;
}
function Oa(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), l = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), c = "rotate(".concat(t.rotate, " 0 0)"), d = {
    transform: "".concat(i, " ").concat(l, " ").concat(c)
  }, u = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: d,
    path: u
  };
}
function Sa(e) {
  let {
    transform: t,
    width: n = ft,
    height: r = ft,
    startCentered: a = !1
  } = e, i = "";
  return a && Wn ? i += "translate(".concat(t.x / ae - n / 2, "em, ").concat(t.y / ae - r / 2, "em) ") : a ? i += "translate(calc(-50% + ".concat(t.x / ae, "em), calc(-50% + ").concat(t.y / ae, "em)) ") : i += "translate(".concat(t.x / ae, "em, ").concat(t.y / ae, "em) "), i += "scale(".concat(t.size / ae * (t.flipX ? -1 : 1), ", ").concat(t.size / ae * (t.flipY ? -1 : 1), ") "), i += "rotate(".concat(t.rotate, "deg) "), i;
}
var ja = `:root, :host {
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
function tr() {
  const e = Vn, t = Xn, n = w.cssPrefix, r = w.replacementClass;
  let a = ja;
  if (n !== e || r !== t) {
    const i = new RegExp("\\.".concat(e, "\\-"), "g"), l = new RegExp("\\--".concat(e, "\\-"), "g"), c = new RegExp("\\.".concat(t), "g");
    a = a.replace(i, ".".concat(n, "-")).replace(l, "--".concat(n, "-")).replace(c, ".".concat(r));
  }
  return a;
}
let gn = !1;
function rt() {
  w.autoAddCss && !gn && (Aa(tr()), gn = !0);
}
var ka = {
  mixout() {
    return {
      dom: {
        css: tr,
        insertCss: rt
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        rt();
      },
      beforeI2svg() {
        rt();
      }
    };
  }
};
const ee = ie || {};
ee[Q] || (ee[Q] = {});
ee[Q].styles || (ee[Q].styles = {});
ee[Q].hooks || (ee[Q].hooks = {});
ee[Q].shims || (ee[Q].shims = []);
var J = ee[Q];
const nr = [], rr = function() {
  $.removeEventListener("DOMContentLoaded", rr), Ye = 1, nr.map((e) => e());
};
let Ye = !1;
te && (Ye = ($.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test($.readyState), Ye || $.addEventListener("DOMContentLoaded", rr));
function Na(e) {
  te && (Ye ? setTimeout(e, 0) : nr.push(e));
}
function Ce(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? er(e) : "<".concat(t, " ").concat(Pa(n), ">").concat(r.map(Ce).join(""), "</").concat(t, ">");
}
function yn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var at = function(t, n, r, a) {
  var i = Object.keys(t), l = i.length, c = n, d, u, m;
  for (r === void 0 ? (d = 1, m = t[i[0]]) : (d = 0, m = r); d < l; d++)
    u = i[d], m = c(m, t[u], u, t);
  return m;
};
function _a(e) {
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
function ht(e) {
  const t = _a(e);
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
function gt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = bn(t);
  typeof J.hooks.addPack == "function" && !r ? J.hooks.addPack(e, bn(t)) : J.styles[e] = h(h({}, J.styles[e] || {}), a), e === "fas" && gt("fa", t);
}
const {
  styles: Ne,
  shims: Ra
} = J, ar = Object.keys(Ct), Ia = ar.reduce((e, t) => (e[t] = Object.keys(Ct[t]), e), {});
let Mt = null, ir = {}, sr = {}, or = {}, lr = {}, cr = {};
function Ma(e) {
  return ~va.indexOf(e);
}
function Fa(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Ma(a) ? a : null;
}
const fr = () => {
  const e = (r) => at(Ne, (a, i, l) => (a[l] = at(i, r, {}), a), {});
  ir = e((r, a, i) => (a[3] && (r[a[3]] = i), a[2] && a[2].filter((c) => typeof c == "number").forEach((c) => {
    r[c.toString(16)] = i;
  }), r)), sr = e((r, a, i) => (r[i] = i, a[2] && a[2].filter((c) => typeof c == "string").forEach((c) => {
    r[c] = i;
  }), r)), cr = e((r, a, i) => {
    const l = a[2];
    return r[i] = i, l.forEach((c) => {
      r[c] = i;
    }), r;
  });
  const t = "far" in Ne || w.autoFetchSvg, n = at(Ra, (r, a) => {
    const i = a[0];
    let l = a[1];
    const c = a[2];
    return l === "far" && !t && (l = "fas"), typeof i == "string" && (r.names[i] = {
      prefix: l,
      iconName: c
    }), typeof i == "number" && (r.unicodes[i.toString(16)] = {
      prefix: l,
      iconName: c
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  or = n.names, lr = n.unicodes, Mt = Ge(w.styleDefault, {
    family: w.familyDefault
  });
};
Ea((e) => {
  Mt = Ge(e.styleDefault, {
    family: w.familyDefault
  });
});
fr();
function Ft(e, t) {
  return (ir[e] || {})[t];
}
function La(e, t) {
  return (sr[e] || {})[t];
}
function ce(e, t) {
  return (cr[e] || {})[t];
}
function ur(e) {
  return or[e] || {
    prefix: null,
    iconName: null
  };
}
function Da(e) {
  const t = lr[e], n = Ft("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function se() {
  return Mt;
}
const dr = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function za(e) {
  let t = U;
  const n = ar.reduce((r, a) => (r[a] = "".concat(w.cssPrefix, "-").concat(a), r), {});
  return Hn.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => Ia[r].includes(a))) && (t = r);
  }), t;
}
function Ge(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = U
  } = t, r = pa[n][e];
  if (n === Be && !e)
    return "fad";
  const a = hn[n][e] || hn[n][r], i = e in J.styles ? e : null;
  return a || i || null;
}
function $a(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = Fa(w.cssPrefix, r);
    a ? n = a : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function vn(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function Ve(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const a = ct.concat(na), i = vn(e.filter((y) => a.includes(y))), l = vn(e.filter((y) => !ct.includes(y))), c = i.filter((y) => (r = y, !Bn.includes(y))), [d = null] = c, u = za(i), m = h(h({}, $a(l)), {}, {
    prefix: Ge(d, {
      family: u
    })
  });
  return h(h(h({}, m), qa({
    values: e,
    family: u,
    styles: Ne,
    config: w,
    canonical: m,
    givenPrefix: r
  })), Ya(n, r, m));
}
function Ya(e, t, n) {
  let {
    prefix: r,
    iconName: a
  } = n;
  if (e || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  const i = t === "fa" ? ur(a) : {}, l = ce(r, a);
  return a = i.iconName || l || a, r = i.prefix || r, r === "far" && !Ne.far && Ne.fas && !w.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const Ua = Hn.filter((e) => e !== U || e !== Be), Wa = Object.keys(lt).filter((e) => e !== U).map((e) => Object.keys(lt[e])).flat();
function qa(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: i = {},
    config: l = {}
  } = e, c = n === Be, d = t.includes("fa-duotone") || t.includes("fad"), u = l.familyDefault === "duotone", m = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!c && (d || u || m) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Ua.includes(n) && (Object.keys(i).find((b) => Wa.includes(b)) || l.autoFetchSvg)) {
    const b = Vr.get(n).defaultShortPrefixId;
    r.prefix = b, r.iconName = ce(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = se() || "fas"), r;
}
class Ba {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((i) => {
      this.definitions[i] = h(h({}, this.definitions[i] || {}), a[i]), gt(i, a[i]);
      const l = Ct[U][i];
      l && gt(l, a[i]), fr();
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
        iconName: l,
        icon: c
      } = r[a], d = c[2];
      t[i] || (t[i] = {}), d.length > 0 && d.forEach((u) => {
        typeof u == "string" && (t[i][u] = c);
      }), t[i][l] = c;
    }), t;
  }
}
let xn = [], ge = {};
const be = {}, Ha = Object.keys(be);
function Ga(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return xn = e, ge = {}, Object.keys(be).forEach((r) => {
    Ha.indexOf(r) === -1 && delete be[r];
  }), xn.forEach((r) => {
    const a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach((i) => {
      typeof a[i] == "function" && (n[i] = a[i]), typeof a[i] == "object" && Object.keys(a[i]).forEach((l) => {
        n[i] || (n[i] = {}), n[i][l] = a[i][l];
      });
    }), r.hooks) {
      const i = r.hooks();
      Object.keys(i).forEach((l) => {
        ge[l] || (ge[l] = []), ge[l].push(i[l]);
      });
    }
    r.provides && r.provides(be);
  }), n;
}
function yt(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (ge[e] || []).forEach((l) => {
    t = l.apply(null, [t, ...r]);
  }), t;
}
function ue(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (ge[e] || []).forEach((i) => {
    i.apply(null, n);
  });
}
function oe() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return be[e] ? be[e].apply(null, t) : void 0;
}
function bt(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || se();
  if (t)
    return t = ce(n, t) || t, yn(mr.definitions, n, t) || yn(J.styles, n, t);
}
const mr = new Ba(), Va = () => {
  w.autoReplaceSvg = !1, w.observeMutations = !1, ue("noAuto");
}, Xa = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return te ? (ue("beforeI2svg", e), oe("pseudoElements2svg", e), oe("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    w.autoReplaceSvg === !1 && (w.autoReplaceSvg = !0), w.observeMutations = !0, Na(() => {
      Ja({
        autoReplaceSvgRoot: t
      }), ue("watch", e);
    });
  }
}, Ka = {
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
    if (typeof e == "string" && (e.indexOf("".concat(w.cssPrefix, "-")) > -1 || e.match(ha))) {
      const t = Ve(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || se(),
        iconName: ce(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = se();
      return {
        prefix: t,
        iconName: ce(t, e) || e
      };
    }
  }
}, q = {
  noAuto: Va,
  config: w,
  dom: Xa,
  parse: Ka,
  library: mr,
  findIconDefinition: bt,
  toHtml: Ce
}, Ja = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = $
  } = e;
  (Object.keys(J.styles).length > 0 || w.autoFetchSvg) && te && w.autoReplaceSvg && q.dom.i2svg({
    node: t
  });
};
function Xe(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Ce(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!te) return;
      const n = $.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Za(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: i,
    transform: l
  } = e;
  if (It(l) && n.found && !r.found) {
    const {
      width: c,
      height: d
    } = n, u = {
      x: c / d / 2,
      y: 0.5
    };
    a.style = He(h(h({}, i), {}, {
      "transform-origin": "".concat(u.x + l.x / 16, "em ").concat(u.y + l.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Qa(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: a,
    symbol: i
  } = e;
  const l = i === !0 ? "".concat(t, "-").concat(w.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: h(h({}, a), {}, {
        id: l
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
    transform: i,
    symbol: l,
    title: c,
    maskId: d,
    titleId: u,
    extra: m,
    watchable: y = !1
  } = e, {
    width: b,
    height: O
  } = n.found ? n : t, F = Qr.includes(r), k = [w.replacementClass, a ? "".concat(w.cssPrefix, "-").concat(a) : ""].filter((g) => m.classes.indexOf(g) === -1).filter((g) => g !== "" || !!g).concat(m.classes).join(" ");
  let S = {
    children: [],
    attributes: h(h({}, m.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: k,
      role: m.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(b, " ").concat(O)
    })
  };
  const M = F && !~m.classes.indexOf("fa-fw") ? {
    width: "".concat(b / O * 16 * 0.0625, "em")
  } : {};
  y && (S.attributes[fe] = ""), c && (S.children.push({
    tag: "title",
    attributes: {
      id: S.attributes["aria-labelledby"] || "title-".concat(u || ke())
    },
    children: [c]
  }), delete S.attributes.title);
  const z = h(h({}, S), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: d,
    transform: i,
    symbol: l,
    styles: h(h({}, M), m.styles)
  }), {
    children: P,
    attributes: C
  } = n.found && t.found ? oe("generateAbstractMask", z) || {
    children: [],
    attributes: {}
  } : oe("generateAbstractIcon", z) || {
    children: [],
    attributes: {}
  };
  return z.children = P, z.attributes = C, l ? Qa(z) : Za(z);
}
function wn(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: a,
    title: i,
    extra: l,
    watchable: c = !1
  } = e, d = h(h(h({}, l.attributes), i ? {
    title: i
  } : {}), {}, {
    class: l.classes.join(" ")
  });
  c && (d[fe] = "");
  const u = h({}, l.styles);
  It(a) && (u.transform = Sa({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), u["-webkit-transform"] = u.transform);
  const m = He(u);
  m.length > 0 && (d.style = m);
  const y = [];
  return y.push({
    tag: "span",
    attributes: d,
    children: [t]
  }), i && y.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), y;
}
function ei(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, a = h(h(h({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), i = He(r.styles);
  i.length > 0 && (a.style = i);
  const l = [];
  return l.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), n && l.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), l;
}
const {
  styles: it
} = J;
function vt(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(w.cssPrefix, "-").concat(nt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(w.cssPrefix, "-").concat(nt.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(w.cssPrefix, "-").concat(nt.PRIMARY),
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
const ti = {
  found: !1,
  width: 512,
  height: 512
};
function ni(e, t) {
  !Kn && !w.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function xt(e, t) {
  let n = t;
  return t === "fa" && w.styleDefault !== null && (t = se()), new Promise((r, a) => {
    if (n === "fa") {
      const i = ur(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && it[t] && it[t][e]) {
      const i = it[t][e];
      return r(vt(i));
    }
    ni(e, t), r(h(h({}, ti), {}, {
      icon: w.showMissingIcons && e ? oe("missingIconAbstract") || {} : {}
    }));
  });
}
const En = () => {
}, wt = w.measurePerformance && Le && Le.mark && Le.measure ? Le : {
  mark: En,
  measure: En
}, Oe = 'FA "6.7.2"', ri = (e) => (wt.mark("".concat(Oe, " ").concat(e, " begins")), () => pr(e)), pr = (e) => {
  wt.mark("".concat(Oe, " ").concat(e, " ends")), wt.measure("".concat(Oe, " ").concat(e), "".concat(Oe, " ").concat(e, " begins"), "".concat(Oe, " ").concat(e, " ends"));
};
var Dt = {
  begin: ri,
  end: pr
};
const ze = () => {
};
function An(e) {
  return typeof (e.getAttribute ? e.getAttribute(fe) : null) == "string";
}
function ai(e) {
  const t = e.getAttribute ? e.getAttribute(Nt) : null, n = e.getAttribute ? e.getAttribute(_t) : null;
  return t && n;
}
function ii(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(w.replacementClass);
}
function si() {
  return w.autoReplaceSvg === !0 ? $e.replace : $e[w.autoReplaceSvg] || $e.replace;
}
function oi(e) {
  return $.createElementNS("http://www.w3.org/2000/svg", e);
}
function li(e) {
  return $.createElement(e);
}
function hr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? oi : li
  } = t;
  if (typeof e == "string")
    return $.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(i) {
    r.setAttribute(i, e.attributes[i]);
  }), (e.children || []).forEach(function(i) {
    r.appendChild(hr(i, {
      ceFn: n
    }));
  }), r;
}
function ci(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const $e = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(hr(n), t);
      }), t.getAttribute(fe) === null && w.keepOriginalSource) {
        let n = $.createComment(ci(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Rt(t).indexOf(w.replacementClass))
      return $e.replace(e);
    const r = new RegExp("".concat(w.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const i = n[0].attributes.class.split(" ").reduce((l, c) => (c === w.replacementClass || c.match(r) ? l.toSvg.push(c) : l.toNode.push(c), l), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
    }
    const a = n.map((i) => Ce(i)).join(`
`);
    t.setAttribute(fe, ""), t.innerHTML = a;
  }
};
function Tn(e) {
  e();
}
function gr(e, t) {
  const n = typeof t == "function" ? t : ze;
  if (e.length === 0)
    n();
  else {
    let r = Tn;
    w.mutateApproach === da && (r = ie.requestAnimationFrame || Tn), r(() => {
      const a = si(), i = Dt.begin("mutate");
      e.map(a), i(), n();
    });
  }
}
let zt = !1;
function yr() {
  zt = !0;
}
function Et() {
  zt = !1;
}
let Ue = null;
function Pn(e) {
  if (!un || !w.observeMutations)
    return;
  const {
    treeCallback: t = ze,
    nodeCallback: n = ze,
    pseudoElementsCallback: r = ze,
    observeMutationsRoot: a = $
  } = e;
  Ue = new un((i) => {
    if (zt) return;
    const l = se();
    xe(i).forEach((c) => {
      if (c.type === "childList" && c.addedNodes.length > 0 && !An(c.addedNodes[0]) && (w.searchPseudoElements && r(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && w.searchPseudoElements && r(c.target.parentNode), c.type === "attributes" && An(c.target) && ~ba.indexOf(c.attributeName))
        if (c.attributeName === "class" && ai(c.target)) {
          const {
            prefix: d,
            iconName: u
          } = Ve(Rt(c.target));
          c.target.setAttribute(Nt, d || l), u && c.target.setAttribute(_t, u);
        } else ii(c.target) && n(c.target);
    });
  }), te && Ue.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function fi() {
  Ue && Ue.disconnect();
}
function ui(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const i = a.split(":"), l = i[0], c = i.slice(1);
    return l && c.length > 0 && (r[l] = c.join(":").trim()), r;
  }, {})), n;
}
function di(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = Ve(Rt(e));
  return a.prefix || (a.prefix = se()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = La(a.prefix, e.innerText) || Ft(a.prefix, ht(e.innerText))), !a.iconName && w.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function mi(e) {
  const t = xe(e.attributes).reduce((a, i) => (a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return w.autoA11y && (n ? t["aria-labelledby"] = "".concat(w.replacementClass, "-title-").concat(r || ke()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function pi() {
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
function On(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: a
  } = di(e), i = mi(e), l = yt("parseNodeAttributes", {}, e);
  let c = t.styleParser ? ui(e) : [];
  return h({
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
      attributes: i
    }
  }, l);
}
const {
  styles: hi
} = J;
function br(e) {
  const t = w.autoReplaceSvg === "nest" ? On(e, {
    styleParser: !1
  }) : On(e);
  return ~t.extra.classes.indexOf(Zn) ? oe("generateLayersText", e, t) : oe("generateSvgReplacementMutation", e, t);
}
function gi() {
  return [...Kr, ...ct];
}
function Sn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!te) return Promise.resolve();
  const n = $.documentElement.classList, r = (m) => n.add("".concat(pn, "-").concat(m)), a = (m) => n.remove("".concat(pn, "-").concat(m)), i = w.autoFetchSvg ? gi() : Bn.concat(Object.keys(hi));
  i.includes("fa") || i.push("fa");
  const l = [".".concat(Zn, ":not([").concat(fe, "])")].concat(i.map((m) => ".".concat(m, ":not([").concat(fe, "])"))).join(", ");
  if (l.length === 0)
    return Promise.resolve();
  let c = [];
  try {
    c = xe(e.querySelectorAll(l));
  } catch {
  }
  if (c.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const d = Dt.begin("onTree"), u = c.reduce((m, y) => {
    try {
      const b = br(y);
      b && m.push(b);
    } catch (b) {
      Kn || b.name === "MissingIcon" && console.error(b);
    }
    return m;
  }, []);
  return new Promise((m, y) => {
    Promise.all(u).then((b) => {
      gr(b, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), d(), m();
      });
    }).catch((b) => {
      d(), y(b);
    });
  });
}
function yi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  br(e).then((n) => {
    n && gr([n], t);
  });
}
function bi(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : bt(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : bt(a || {})), e(r, h(h({}, n), {}, {
      mask: a
    }));
  };
}
const vi = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = K,
    symbol: r = !1,
    mask: a = null,
    maskId: i = null,
    title: l = null,
    titleId: c = null,
    classes: d = [],
    attributes: u = {},
    styles: m = {}
  } = t;
  if (!e) return;
  const {
    prefix: y,
    iconName: b,
    icon: O
  } = e;
  return Xe(h({
    type: "icon"
  }, e), () => (ue("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), w.autoA11y && (l ? u["aria-labelledby"] = "".concat(w.replacementClass, "-title-").concat(c || ke()) : (u["aria-hidden"] = "true", u.focusable = "false")), Lt({
    icons: {
      main: vt(O),
      mask: a ? vt(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: y,
    iconName: b,
    transform: h(h({}, K), n),
    symbol: r,
    title: l,
    maskId: i,
    titleId: c,
    extra: {
      attributes: u,
      styles: m,
      classes: d
    }
  })));
};
var xi = {
  mixout() {
    return {
      icon: bi(vi)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Sn, e.nodeCallback = yi, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = $,
        callback: r = () => {
        }
      } = t;
      return Sn(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: a,
        titleId: i,
        prefix: l,
        transform: c,
        symbol: d,
        mask: u,
        maskId: m,
        extra: y
      } = n;
      return new Promise((b, O) => {
        Promise.all([xt(r, l), u.iconName ? xt(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((F) => {
          let [k, S] = F;
          b([t, Lt({
            icons: {
              main: k,
              mask: S
            },
            prefix: l,
            iconName: r,
            transform: c,
            symbol: d,
            maskId: m,
            title: a,
            titleId: i,
            extra: y,
            watchable: !0
          })]);
        }).catch(O);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        transform: i,
        styles: l
      } = t;
      const c = He(l);
      c.length > 0 && (r.style = c);
      let d;
      return It(i) && (d = oe("generateAbstractTransformGrouping", {
        main: a,
        transform: i,
        containerWidth: a.width,
        iconWidth: a.width
      })), n.push(d || a.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, wi = {
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
          ue("beforeDOMElementCreation", {
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
              class: ["".concat(w.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, Ei = {
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
        return Xe({
          type: "counter",
          content: e
        }, () => (ue("beforeDOMElementCreation", {
          content: e,
          params: t
        }), ei({
          content: e.toString(),
          title: n,
          extra: {
            attributes: a,
            styles: i,
            classes: ["".concat(w.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, Ai = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = K,
          title: r = null,
          classes: a = [],
          attributes: i = {},
          styles: l = {}
        } = t;
        return Xe({
          type: "text",
          content: e
        }, () => (ue("beforeDOMElementCreation", {
          content: e,
          params: t
        }), wn({
          content: e,
          transform: h(h({}, K), n),
          title: r,
          extra: {
            attributes: i,
            styles: l,
            classes: ["".concat(w.cssPrefix, "-layers-text"), ...a]
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
      let l = null, c = null;
      if (Wn) {
        const d = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        l = u.width / d, c = u.height / d;
      }
      return w.autoA11y && !r && (i.attributes["aria-hidden"] = "true"), Promise.resolve([t, wn({
        content: t.innerHTML,
        width: l,
        height: c,
        transform: a,
        title: r,
        extra: i,
        watchable: !0
      })]);
    };
  }
};
const Ti = new RegExp('"', "ug"), jn = [1105920, 1112319], kn = h(h(h(h({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Gr), fa), ra), At = Object.keys(kn).reduce((e, t) => (e[t.toLowerCase()] = kn[t], e), {}), Pi = Object.keys(At).reduce((e, t) => {
  const n = At[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function Oi(e) {
  const t = e.replace(Ti, ""), n = Ca(t, 0), r = n >= jn[0] && n <= jn[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: ht(a ? t[0] : t),
    isSecondary: r || a
  };
}
function Si(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (At[n] || {})[a] || Pi[n];
}
function Nn(e, t) {
  const n = "".concat(ua).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const l = xe(e.children).filter((b) => b.getAttribute(ut) === t)[0], c = ie.getComputedStyle(e, t), d = c.getPropertyValue("font-family"), u = d.match(ga), m = c.getPropertyValue("font-weight"), y = c.getPropertyValue("content");
    if (l && !u)
      return e.removeChild(l), r();
    if (u && y !== "none" && y !== "") {
      const b = c.getPropertyValue("content");
      let O = Si(d, m);
      const {
        value: F,
        isSecondary: k
      } = Oi(b), S = u[0].startsWith("FontAwesome");
      let M = Ft(O, F), z = M;
      if (S) {
        const P = Da(F);
        P.iconName && P.prefix && (M = P.iconName, O = P.prefix);
      }
      if (M && !k && (!l || l.getAttribute(Nt) !== O || l.getAttribute(_t) !== z)) {
        e.setAttribute(n, z), l && e.removeChild(l);
        const P = pi(), {
          extra: C
        } = P;
        C.attributes[ut] = t, xt(M, O).then((g) => {
          const B = Lt(h(h({}, P), {}, {
            icons: {
              main: g,
              mask: dr()
            },
            prefix: O,
            iconName: z,
            extra: C,
            watchable: !0
          })), Z = $.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(Z, e.firstChild) : e.appendChild(Z), Z.outerHTML = B.map((ne) => Ce(ne)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function ji(e) {
  return Promise.all([Nn(e, "::before"), Nn(e, "::after")]);
}
function ki(e) {
  return e.parentNode !== document.head && !~ma.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ut) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function _n(e) {
  if (te)
    return new Promise((t, n) => {
      const r = xe(e.querySelectorAll("*")).filter(ki).map(ji), a = Dt.begin("searchPseudoElements");
      yr(), Promise.all(r).then(() => {
        a(), Et(), t();
      }).catch(() => {
        a(), Et(), n();
      });
    });
}
var Ni = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = _n, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = $
      } = t;
      w.searchPseudoElements && _n(n);
    };
  }
};
let Cn = !1;
var _i = {
  mixout() {
    return {
      dom: {
        unwatch() {
          yr(), Cn = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Pn(yt("mutationObserverCallbacks", {}));
      },
      noAuto() {
        fi();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Cn ? Et() : Pn(yt("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Rn = (e) => {
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
    let l = a.slice(1).join("-");
    if (i && l === "h")
      return n.flipX = !0, n;
    if (i && l === "v")
      return n.flipY = !0, n;
    if (l = parseFloat(l), isNaN(l))
      return n;
    switch (i) {
      case "grow":
        n.size = n.size + l;
        break;
      case "shrink":
        n.size = n.size - l;
        break;
      case "left":
        n.x = n.x - l;
        break;
      case "right":
        n.x = n.x + l;
        break;
      case "up":
        n.y = n.y - l;
        break;
      case "down":
        n.y = n.y + l;
        break;
      case "rotate":
        n.rotate = n.rotate + l;
        break;
    }
    return n;
  }, t);
};
var Ci = {
  mixout() {
    return {
      parse: {
        transform: (e) => Rn(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Rn(n)), e;
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
      const l = {
        transform: "translate(".concat(a / 2, " 256)")
      }, c = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), d = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), u = "rotate(".concat(r.rotate, " 0 0)"), m = {
        transform: "".concat(c, " ").concat(d, " ").concat(u)
      }, y = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, b = {
        outer: l,
        inner: m,
        path: y
      };
      return {
        tag: "g",
        attributes: h({}, b.outer),
        children: [{
          tag: "g",
          attributes: h({}, b.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: h(h({}, n.icon.attributes), b.path)
          }]
        }]
      };
    };
  }
};
const st = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function In(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Ri(e) {
  return e.tag === "g" ? e.children : [e];
}
var Ii = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Ve(n.split(" ").map((a) => a.trim())) : dr();
        return r.prefix || (r.prefix = se()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
        maskId: l,
        transform: c
      } = t;
      const {
        width: d,
        icon: u
      } = a, {
        width: m,
        icon: y
      } = i, b = Oa({
        transform: c,
        containerWidth: m,
        iconWidth: d
      }), O = {
        tag: "rect",
        attributes: h(h({}, st), {}, {
          fill: "white"
        })
      }, F = u.children ? {
        children: u.children.map(In)
      } : {}, k = {
        tag: "g",
        attributes: h({}, b.inner),
        children: [In(h({
          tag: u.tag,
          attributes: h(h({}, u.attributes), b.path)
        }, F))]
      }, S = {
        tag: "g",
        attributes: h({}, b.outer),
        children: [k]
      }, M = "mask-".concat(l || ke()), z = "clip-".concat(l || ke()), P = {
        tag: "mask",
        attributes: h(h({}, st), {}, {
          id: M,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [O, S]
      }, C = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: z
          },
          children: Ri(y)
        }, P]
      };
      return n.push(C, {
        tag: "rect",
        attributes: h({
          fill: "currentColor",
          "clip-path": "url(#".concat(z, ")"),
          mask: "url(#".concat(M, ")")
        }, st)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Mi = {
  provides(e) {
    let t = !1;
    ie.matchMedia && (t = ie.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: h(h({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const i = h(h({}, a), {}, {
        attributeName: "opacity"
      }), l = {
        tag: "circle",
        attributes: h(h({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || l.children.push({
        tag: "animate",
        attributes: h(h({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: h(h({}, i), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(l), n.push({
        tag: "path",
        attributes: h(h({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: h(h({}, i), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: h(h({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: h(h({}, i), {}, {
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
}, Fi = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Li = [ka, xi, wi, Ei, Ai, Ni, _i, Ci, Ii, Mi, Fi];
Ga(Li, {
  mixoutsTo: q
});
q.noAuto;
q.config;
q.library;
q.dom;
const Tt = q.parse;
q.findIconDefinition;
q.toHtml;
const Di = q.icon;
q.layer;
q.text;
q.counter;
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
function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mn(Object(n), !0).forEach(function(r) {
      ye(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mn(Object(n)).forEach(function(r) {
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
function ye(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function zi(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function $i(e, t) {
  if (e == null) return {};
  var n = zi(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Pt(e) {
  return Yi(e) || Ui(e) || Wi(e) || qi();
}
function Yi(e) {
  if (Array.isArray(e)) return Ot(e);
}
function Ui(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Wi(e, t) {
  if (e) {
    if (typeof e == "string") return Ot(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ot(e, t);
  }
}
function Ot(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function qi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bi(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, i = e.bounce, l = e.shake, c = e.flash, d = e.spin, u = e.spinPulse, m = e.spinReverse, y = e.pulse, b = e.fixedWidth, O = e.inverse, F = e.border, k = e.listItem, S = e.flip, M = e.size, z = e.rotation, P = e.pull, C = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": i,
    "fa-shake": l,
    "fa-flash": c,
    "fa-spin": d,
    "fa-spin-reverse": m,
    "fa-spin-pulse": u,
    "fa-pulse": y,
    "fa-fw": b,
    "fa-inverse": O,
    "fa-border": F,
    "fa-li": k,
    "fa-flip": S === !0,
    "fa-flip-horizontal": S === "horizontal" || S === "both",
    "fa-flip-vertical": S === "vertical" || S === "both"
  }, ye(t, "fa-".concat(M), typeof M < "u" && M !== null), ye(t, "fa-rotate-".concat(z), typeof z < "u" && z !== null && z !== 0), ye(t, "fa-pull-".concat(P), typeof P < "u" && P !== null), ye(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(C).map(function(g) {
    return C[g] ? g : null;
  }).filter(function(g) {
    return g;
  });
}
function Hi(e) {
  return e = e - 0, e === e;
}
function vr(e) {
  return Hi(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Gi = ["style"];
function Vi(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Xi(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = vr(n.slice(0, r)), i = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Vi(a)] = i : t[a] = i, t;
  }, {});
}
function xr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(d) {
    return xr(e, d);
  }), a = Object.keys(t.attributes || {}).reduce(function(d, u) {
    var m = t.attributes[u];
    switch (u) {
      case "class":
        d.attrs.className = m, delete t.attributes.class;
        break;
      case "style":
        d.attrs.style = Xi(m);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? d.attrs[u.toLowerCase()] = m : d.attrs[vr(u)] = m;
    }
    return d;
  }, {
    attrs: {}
  }), i = n.style, l = i === void 0 ? {} : i, c = $i(n, Gi);
  return a.attrs.style = X(X({}, a.attrs.style), l), e.apply(void 0, [t.tag, X(X({}, a.attrs), c)].concat(Pt(r)));
}
var wr = !1;
try {
  wr = process.env.NODE_ENV === "production";
} catch {
}
function Ki() {
  if (!wr && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Fn(e) {
  if (e && We(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Tt.icon)
    return Tt.icon(e);
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
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ye({}, e, t) : {};
}
var Ln = {
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
}, de = /* @__PURE__ */ qe.forwardRef(function(e, t) {
  var n = X(X({}, Ln), e), r = n.icon, a = n.mask, i = n.symbol, l = n.className, c = n.title, d = n.titleId, u = n.maskId, m = Fn(r), y = ot("classes", [].concat(Pt(Bi(n)), Pt((l || "").split(" ")))), b = ot("transform", typeof n.transform == "string" ? Tt.transform(n.transform) : n.transform), O = ot("mask", Fn(a)), F = Di(m, X(X(X(X({}, y), b), O), {}, {
    symbol: i,
    title: c,
    titleId: d,
    maskId: u
  }));
  if (!F)
    return Ki("Could not find icon", m), null;
  var k = F.abstract, S = {
    ref: t
  };
  return Object.keys(n).forEach(function(M) {
    Ln.hasOwnProperty(M) || (S[M] = n[M]);
  }), Ji(k[0], S);
});
de.displayName = "FontAwesomeIcon";
de.propTypes = {
  beat: f.bool,
  border: f.bool,
  beatFade: f.bool,
  bounce: f.bool,
  className: f.string,
  fade: f.bool,
  flash: f.bool,
  mask: f.oneOfType([f.object, f.array, f.string]),
  maskId: f.string,
  fixedWidth: f.bool,
  inverse: f.bool,
  flip: f.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: f.oneOfType([f.object, f.array, f.string]),
  listItem: f.bool,
  pull: f.oneOf(["right", "left"]),
  pulse: f.bool,
  rotation: f.oneOf([0, 90, 180, 270]),
  shake: f.bool,
  size: f.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: f.bool,
  spinPulse: f.bool,
  spinReverse: f.bool,
  symbol: f.oneOfType([f.bool, f.string]),
  title: f.string,
  titleId: f.string,
  transform: f.oneOfType([f.string, f.object]),
  swapOpacity: f.bool
};
var Ji = xr.bind(null, qe.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Zi = {
  prefix: "fas",
  iconName: "lock",
  icon: [448, 512, [128274], "f023", "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]
}, Qi = {
  prefix: "fas",
  iconName: "arrow-left",
  icon: [448, 512, [8592], "f060", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]
}, es = {
  prefix: "fas",
  iconName: "landmark",
  icon: [512, 512, [127963], "f66f", "M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8L32 192c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9l0-.9 4.4-1.6L240.1 4.2zM64 224l64 0 0 192 40 0 0-192 64 0 0 192 48 0 0-192 64 0 0 192 40 0 0-192 64 0 0 196.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 224z"]
}, ts = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, $t = ({
  domain: e = "An official website of the City of Portland",
  icon: t = void 0,
  heading: n = "Official websites use .gov",
  description: r = "A .gov website belongs to an official government organization in the United States.",
  bannerLinkText: a = "Here's how you know",
  showHttpsGuidance: i = !0,
  initiallyExpanded: l = !1,
  className: c = ""
}) => {
  const [d, u] = St(l), m = ["banner", c].filter(Boolean).join(" "), y = () => {
    u(!d);
  };
  return /* @__PURE__ */ o.jsxs("section", { className: m, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "banner-content", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "banner-header", children: [
        /* @__PURE__ */ o.jsx("div", { className: "banner-header-icon", children: qe.isValidElement(t) ? t : /* @__PURE__ */ o.jsxs("svg", { width: "24", height: "16", viewBox: "0 0 24 16", xmlns: "http://www.w3.org/2000/svg", children: [
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
          onClick: y,
          "aria-expanded": d,
          "aria-controls": "banner-content",
          children: [
            /* @__PURE__ */ o.jsx("span", { className: "banner-button-text", children: a }),
            /* @__PURE__ */ o.jsx("span", { className: `banner-button-icon ${d ? "is-open" : ""}`, children: /* @__PURE__ */ o.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ o.jsx("polyline", { points: "6 9 12 15 18 9" }) }) })
          ]
        }
      )
    ] }),
    d && /* @__PURE__ */ o.jsxs(
      "div",
      {
        id: "banner-expanded-content",
        className: "banner-expanded-content",
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: "banner-guidance", children: [
            /* @__PURE__ */ o.jsx("div", { className: "banner-guidance-icon", children: /* @__PURE__ */ o.jsx(de, { icon: es, style: { fontSize: "40px", color: "#2378C3" } }) || null }),
            /* @__PURE__ */ o.jsxs("div", { className: "banner-guidance-text", children: [
              /* @__PURE__ */ o.jsx("div", { className: "banner-guidance-heading", children: n }),
              /* @__PURE__ */ o.jsx("div", { className: "banner-guidance-description", children: r })
            ] })
          ] }),
          i && /* @__PURE__ */ o.jsxs("div", { className: "banner-guidance", children: [
            /* @__PURE__ */ o.jsx("div", { className: "banner-guidance-icon", children: /* @__PURE__ */ o.jsx(de, { icon: Zi, style: { fontSize: "40px", color: "#719F2A" } }) }),
            /* @__PURE__ */ o.jsxs("div", { className: "banner-guidance-text", children: [
              /* @__PURE__ */ o.jsx("div", { className: "banner-guidance-heading", children: "Secure websites use HTTPS" }),
              /* @__PURE__ */ o.jsxs("div", { className: "banner-guidance-description", children: [
                "A ",
                /* @__PURE__ */ o.jsx("strong", { children: "lock" }),
                " or ",
                /* @__PURE__ */ o.jsx("strong", { children: "https://" }),
                " means you've safely connected to the .gov website. Share sensitive information only on official, secure websites."
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
};
$t.propTypes = {
  /** Text describing the domain/owner of the site */
  domain: f.string,
  /** Custom icon element to display in the banner */
  icon: f.node,
  /** Heading text for the banner content */
  heading: f.string,
  /** Description text for the banner content */
  description: f.node,
  /** Whether to show the HTTPS guidance section */
  showHttpsGuidance: f.bool,
  /** Whether the banner content is initially expanded */
  initiallyExpanded: f.bool,
  /** Additional CSS class for the banner */
  className: f.string
};
$t.defaultProps = {
  domain: "An official website of the City of Portland",
  icon: void 0,
  heading: "Official websites use .gov",
  description: "A .gov website belongs to an official government organization in the United States.",
  showHttpsGuidance: !0,
  initiallyExpanded: !1,
  className: ""
};
const Yt = ({
  logoUrl: e,
  logoAlt: t
}) => /* @__PURE__ */ o.jsx("a", { href: "/", className: "header-logo-container", children: e && /* @__PURE__ */ o.jsx(
  "img",
  {
    src: e,
    alt: t,
    className: "header-logo-img"
  }
) });
Yt.propTypes = {
  /** URL for the logo image */
  logoUrl: f.string,
  /** Alt text for the logo image */
  logoAlt: f.string
};
Yt.defaultProps = {
  logoUrl: void 0,
  logoAlt: "Logo"
};
const Er = ({ item: e }) => /* @__PURE__ */ o.jsx("li", { className: "header-menu-item", role: "menuitem", children: /* @__PURE__ */ o.jsxs(
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
Er.propTypes = {
  /** Menu item object containing label, href, description, and current state */
  item: f.shape({
    label: f.string.isRequired,
    href: f.string.isRequired,
    description: f.string,
    current: f.bool
  }).isRequired
};
const Ut = ({
  items: e,
  mainHeading: t,
  id: n,
  className: r
}) => {
  const a = `${n}-heading`;
  return /* @__PURE__ */ o.jsxs("nav", { className: `header-menu-group ${r || ""}`, role: "navigation", "aria-labelledby": a, children: [
    /* @__PURE__ */ o.jsx("h3", { id: a, className: "header-menu-heading", children: t }),
    /* @__PURE__ */ o.jsx("ul", { className: "header-menu-group-items", role: "menu", children: e.map((i, l) => /* @__PURE__ */ o.jsx(Er, { item: i }, l)) })
  ] });
};
Ut.propTypes = {
  /** Array of menu items to display */
  items: f.arrayOf(
    f.shape({
      label: f.string.isRequired,
      href: f.string.isRequired,
      description: f.string,
      current: f.bool
    })
  ).isRequired,
  /** Main heading text for the menu group */
  mainHeading: f.string,
  /** ID for the component */
  id: f.string,
  /** Custom class name */
  className: f.string
};
Ut.defaultProps = {
  mainHeading: "General Information",
  id: "pgov-header-menu-group"
};
const Wt = ({
  title: e,
  logoUrl: t,
  logoAlt: n,
  tagline: r,
  navItems: a,
  mainHeading: i,
  menuText: l,
  openMenuAriaLabel: c,
  closeMenuAriaLabel: d,
  className: u
}) => {
  const [m, y] = St(!1), b = () => {
    y(!m);
  };
  return /* @__PURE__ */ o.jsxs("header", { className: `header ${u || ""}`, children: [
    /* @__PURE__ */ o.jsx("div", { className: "header-main", children: /* @__PURE__ */ o.jsxs("div", { className: "header-container", children: [
      /* @__PURE__ */ o.jsx("div", { className: "header-logo", children: /* @__PURE__ */ o.jsx(
        Yt,
        {
          logoUrl: t,
          logoAlt: n
        }
      ) }),
      /* @__PURE__ */ o.jsxs("div", { className: "header-text-container", children: [
        /* @__PURE__ */ o.jsx("span", { className: "header-title", children: e }),
        r && /* @__PURE__ */ o.jsx("span", { className: "header-tagline", children: r })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: `header-mobile-menu ${m ? "is-open" : ""}`, children: /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "header-mobile-menu-button",
          "aria-label": m ? d : c,
          "aria-expanded": m,
          "aria-controls": "header-mobile-dropdown",
          onClick: b,
          children: [
            /* @__PURE__ */ o.jsxs("span", { className: "header-mobile-menu-icon", children: [
              /* @__PURE__ */ o.jsx("span", {}),
              /* @__PURE__ */ o.jsx("span", {}),
              /* @__PURE__ */ o.jsx("span", {})
            ] }),
            /* @__PURE__ */ o.jsx("span", { className: "header-mobile-menu-text", "aria-hidden": "true", children: l })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ o.jsx(
      "div",
      {
        id: "header-mobile-dropdown",
        className: `header-mobile-dropdown ${m ? "is-open" : ""}`,
        children: /* @__PURE__ */ o.jsx("div", { className: "header-mobile-menu-content", children: /* @__PURE__ */ o.jsx("nav", { className: "header-mobile-nav", "aria-label": "Primary navigation", children: /* @__PURE__ */ o.jsx(
          Ut,
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
Wt.propTypes = {
  /** Title text for the header */
  title: f.string.isRequired,
  /** URL for the logo image */
  logoUrl: f.string,
  /** Alt text for the logo image */
  logoAlt: f.string,
  /** Optional tagline displayed below the title */
  tagline: f.string,
  /** Array of navigation items */
  navItems: f.arrayOf(
    f.shape({
      label: f.string.isRequired,
      href: f.string.isRequired,
      description: f.string,
      current: f.bool
    })
  ).isRequired,
  /** Main heading text for the navigation menu */
  mainHeading: f.string,
  /** Text for the menu button */
  menuText: f.string,
  /** Aria label for opening the menu */
  openMenuAriaLabel: f.string,
  /** Aria label for closing the menu */
  closeMenuAriaLabel: f.string,
  /** Additional CSS class names */
  className: f.string
};
Wt.defaultProps = {
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
const qt = ({
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
qt.propTypes = {
  /** The text to display in the skip nav link */
  text: f.string,
  /** The ID of the main content element to skip to */
  mainContentId: f.string,
  /** Custom class name */
  className: f.string
};
qt.defaultProps = {
  text: "Skip to main content",
  mainContentId: "main-content",
  className: ""
};
const Ar = ({
  children: e,
  variant: t = "default",
  size: n = "default",
  disabled: r = !1,
  ariaDisabled: a = !1,
  unstyled: i = !1,
  onClick: l,
  type: c = "button",
  startIcon: d,
  endIcon: u,
  className: m,
  ...y
}) => {
  const b = "usa-button", O = t !== "default" ? `${b}--${t}` : "", F = n === "big" ? `${b}--big` : "", k = i ? `${b}--unstyled` : "", S = [
    b,
    O,
    F,
    k,
    m
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs(
    "button",
    {
      type: c,
      className: S,
      onClick: l,
      disabled: r,
      "aria-disabled": a || r,
      ...y,
      children: [
        d && /* @__PURE__ */ o.jsx("span", { className: "usa-button__icon usa-button__icon--left", children: /* @__PURE__ */ o.jsx(de, { icon: d }) }),
        e,
        u && /* @__PURE__ */ o.jsx("span", { className: "usa-button__icon usa-button__icon--right", children: /* @__PURE__ */ o.jsx(de, { icon: u }) })
      ]
    }
  );
};
Ar.propTypes = {
  children: f.node.isRequired,
  variant: f.oneOf([
    "default",
    "secondary",
    "accent-cool",
    "accent-warm",
    "base",
    "outline",
    "outline-inverse"
  ]),
  size: f.oneOf(["default", "big"]),
  disabled: f.bool,
  ariaDisabled: f.bool,
  unstyled: f.bool,
  onClick: f.func,
  type: f.oneOf(["button", "submit", "reset"]),
  startIcon: f.oneOfType([f.object, f.array, f.string]),
  endIcon: f.oneOfType([f.object, f.array, f.string]),
  className: f.string
};
const Bt = ({
  feedbackUrl: e,
  accessibilityText: t,
  serviceRequestText: n,
  onlineServiceUrl: r,
  phoneNumber: a,
  relayServiceText: i,
  relayServiceNumber: l,
  translationText: c,
  generalInfoLinks: d,
  termsLinks: u,
  portlandGovLinks: m,
  socialMediaLinks: y,
  cityName: b,
  cityLogoUrl: O,
  cityLogoAlt: F,
  copyrightText: k,
  exploreServicesText: S,
  exploreServicesUrl: M,
  className: z
}) => /* @__PURE__ */ o.jsxs("footer", { className: `footer ${z}`, role: "contentinfo", children: [
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
          /* @__PURE__ */ o.jsx("a", { href: `tel:${l.replace(/\D/g, "")}`, className: "footer-relay-link", children: l }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("p", { className: "footer-translation-text", children: [
        /* @__PURE__ */ o.jsx("a", { href: `tel:${a.replace(/\D/g, "")}`, className: "footer-translation-phone-link", children: a }),
        " ",
        c
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "footer-explore-services", children: /* @__PURE__ */ o.jsxs(Ar, { href: M, className: "footer-explore-button", children: [
      S,
      " ",
      /* @__PURE__ */ o.jsx("span", { className: "footer-explore-arrow", children: "→" })
    ] }) })
  ] }) }),
  /* @__PURE__ */ o.jsx("div", { className: "footer-main", children: /* @__PURE__ */ o.jsxs("div", { className: "footer-nav", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "footer-city-info", children: [
      /* @__PURE__ */ o.jsx("p", { className: "footer-city-name", children: b }),
      /* @__PURE__ */ o.jsx("img", { src: O, alt: F, className: "footer-city-logo" }),
      /* @__PURE__ */ o.jsx("p", { className: "footer-copyright", children: k })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ o.jsx("h4", { className: "footer-heading", children: "General Information" }),
      /* @__PURE__ */ o.jsx("ul", { className: "footer-links", children: d.map((P, C) => /* @__PURE__ */ o.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ o.jsx("a", { href: P.href, className: "footer-link", children: P.label }) }, `general-link-${C}`)) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ o.jsx("h4", { className: "footer-heading", children: "Terms And Policies" }),
      /* @__PURE__ */ o.jsx("ul", { className: "footer-links", children: u.map((P, C) => /* @__PURE__ */ o.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ o.jsx("a", { href: P.href, className: "footer-link", children: P.label }) }, `terms-link-${C}`)) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ o.jsx("h4", { className: "footer-heading", children: "Portland.Gov" }),
      /* @__PURE__ */ o.jsx("ul", { className: "footer-links", children: m.map((P, C) => /* @__PURE__ */ o.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ o.jsx("a", { href: P.href, className: "footer-link", children: P.label }) }, `pgov-link-${C}`)) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ o.jsx("h4", { className: "footer-heading", children: "Social Media" }),
      /* @__PURE__ */ o.jsx("ul", { className: "footer-links", children: y.map((P, C) => /* @__PURE__ */ o.jsx("li", { className: "footer-link-item", children: /* @__PURE__ */ o.jsx("a", { href: P.href, className: "footer-link", children: P.label }) }, `social-link-${C}`)) })
    ] })
  ] }) })
] });
Bt.propTypes = {
  /** URL for the feedback link */
  feedbackUrl: f.string,
  /** Text for the accessibility section */
  accessibilityText: f.string,
  /** Text for service request */
  serviceRequestText: f.string,
  /** URL for online service */
  onlineServiceUrl: f.string,
  /** Phone number for services */
  phoneNumber: f.string,
  /** Text for relay service */
  relayServiceText: f.string,
  /** Relay service number */
  relayServiceNumber: f.string,
  /** Text for translation section */
  translationText: f.string,
  /** Links for general information section */
  generalInfoLinks: f.arrayOf(
    f.shape({
      label: f.string.isRequired,
      href: f.string.isRequired
    })
  ),
  /** Links for terms and policies section */
  termsLinks: f.arrayOf(
    f.shape({
      label: f.string.isRequired,
      href: f.string.isRequired
    })
  ),
  /** Links for Portland.gov section */
  portlandGovLinks: f.arrayOf(
    f.shape({
      label: f.string.isRequired,
      href: f.string.isRequired
    })
  ),
  /** Social media links */
  socialMediaLinks: f.arrayOf(
    f.shape({
      label: f.string.isRequired,
      href: f.string.isRequired
    })
  ),
  /** City name */
  cityName: f.string,
  /** URL for the city logo */
  cityLogoUrl: f.string,
  /** Alt text for the city logo */
  cityLogoAlt: f.string,
  /** Copyright text */
  copyrightText: f.string,
  /** Text for explore services button */
  exploreServicesText: f.string,
  /** URL for explore services button */
  exploreServicesUrl: f.string,
  /** Additional CSS class for the footer */
  className: f.string
};
Bt.defaultProps = {
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
const Ht = ({
  items: e,
  className: t = "",
  customSeparator: n
}) => {
  const [r, a] = St(window.innerWidth < 768);
  Pr(() => {
    const d = () => {
      const u = window.innerWidth < 768;
      r !== u && a(u);
    };
    return window.addEventListener("resize", d), () => window.removeEventListener("resize", d);
  }, [r]);
  const i = () => n || /* @__PURE__ */ o.jsx(
    de,
    {
      icon: r ? Qi : ts,
      className: "breadcrumb__separator",
      "aria-hidden": "true"
    }
  ), l = () => e.map((d, u) => /* @__PURE__ */ o.jsxs("li", { className: "breadcrumb__item", children: [
    r && u > 0 && i(),
    u === e.length - 1 ? /* @__PURE__ */ o.jsx("span", { className: "breadcrumb__current", "aria-current": "page", children: d.text }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("a", { href: d.href, className: "breadcrumb__link", children: d.text }),
      !r && i()
    ] })
  ] }, u)), c = ["breadcrumb", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx(
    "nav",
    {
      className: c,
      "aria-label": "Breadcrumbs",
      children: /* @__PURE__ */ o.jsx("ol", { className: "breadcrumb__list", children: l() })
    }
  );
};
Ht.propTypes = {
  /**
   * Array of breadcrumb items with text and href
   */
  items: f.arrayOf(
    f.shape({
      text: f.string.isRequired,
      href: f.string
    })
  ).isRequired,
  /**
   * Additional CSS class names
   */
  className: f.string,
  /**
   * Custom separator element
   */
  customSeparator: f.node
};
Ht.defaultProps = {
  className: "",
  customSeparator: void 0
};
const Tr = ({
  bannerProps: e,
  headerProps: t,
  skipNavProps: n,
  footerProps: r,
  breadcrumbsProps: a,
  children: i,
  includeBanner: l = !0,
  includeSkipNav: c = !0,
  includeFooter: d = !0,
  includeBreadcrumbs: u = !0,
  className: m = ""
}) => /* @__PURE__ */ o.jsxs("div", { className: `pgov-page-template ${m}`, children: [
  c && /* @__PURE__ */ o.jsx(qt, { ...n }),
  l && /* @__PURE__ */ o.jsx($t, { ...e }),
  /* @__PURE__ */ o.jsx(Wt, { ...t }),
  /* @__PURE__ */ o.jsxs(
    "main",
    {
      id: "main-content",
      className: "pgov-page-template-main",
      tabIndex: "-1",
      role: "main",
      "aria-label": "Main content",
      children: [
        u && /* @__PURE__ */ o.jsx(Ht, { ...a }),
        i
      ]
    }
  ),
  d && /* @__PURE__ */ o.jsx(Bt, { ...r })
] });
Tr.propTypes = {
  /** Props for the Banner component */
  bannerProps: f.object,
  /** Props for the PGOVHeader component */
  headerProps: f.object.isRequired,
  /** Props for the SkipNav component */
  skipNavProps: f.object,
  /** Props for the Footer component */
  footerProps: f.object,
  /** Props for the Breadcrumbs component */
  breadcrumbsProps: f.object,
  /** Content to be rendered in the main section */
  children: f.node,
  /** Whether to include the Banner component */
  includeBanner: f.bool,
  /** Whether to include the SkipNav component */
  includeSkipNav: f.bool,
  /** Whether to include the Footer component */
  includeFooter: f.bool,
  /** Whether to include the Breadcrumbs component */
  includeBreadcrumbs: f.bool,
  /** Additional CSS class name */
  className: f.string
};
Tr.defaultProps = {
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
export {
  Tr as PageTemplate
};
//# sourceMappingURL=index.js.map
