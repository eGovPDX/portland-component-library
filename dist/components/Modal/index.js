import ge, { useRef as tn, useEffect as Gr, useCallback as ze } from "react";
function Vr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Zn(e) {
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
var $e = { exports: {} }, ke = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nn;
function Kr() {
  if (nn) return ke;
  nn = 1;
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
  return ke.Fragment = t, ke.jsx = n, ke.jsxs = n, ke;
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
var rn;
function Hr() {
  return rn || (rn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === m ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case M:
          return "Fragment";
        case q:
          return "Profiler";
        case I:
          return "StrictMode";
        case b:
          return "Suspense";
        case Q:
          return "SuspenseList";
        case Y:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case F:
            return "Portal";
          case L:
            return (s.displayName || "Context") + ".Provider";
          case H:
            return (s._context.displayName || "Context") + ".Consumer";
          case B:
            var u = s.render;
            return s = s.displayName, s || (s = u.displayName || u.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case P:
            return u = s.displayName || null, u !== null ? u : e(s.type) || "Memo";
          case x:
            u = s._payload, s = s._init;
            try {
              return e(s(u));
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
        var u = !1;
      } catch {
        u = !0;
      }
      if (u) {
        u = console;
        var O = u.error, S = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return O.call(
          u,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), t(s);
      }
    }
    function r(s) {
      if (s === M) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === x)
        return "<...>";
      try {
        var u = e(s);
        return u ? "<" + u + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var s = j.A;
      return s === null ? null : s.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(s) {
      if (N.call(s, "key")) {
        var u = Object.getOwnPropertyDescriptor(s, "key").get;
        if (u && u.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function c(s, u) {
      function O() {
        E || (E = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          u
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: O,
        configurable: !0
      });
    }
    function l() {
      var s = e(this.type);
      return C[s] || (C[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function d(s, u, O, S, k, D, z, $) {
      return O = D.ref, s = {
        $$typeof: _,
        type: s,
        key: u,
        props: D,
        _owner: k
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: l
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
        value: z
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function p(s, u, O, S, k, D, z, $) {
      var R = u.children;
      if (R !== void 0)
        if (S)
          if (f(R)) {
            for (S = 0; S < R.length; S++)
              g(R[S]);
            Object.freeze && Object.freeze(R);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(R);
      if (N.call(u, "key")) {
        R = e(s);
        var V = Object.keys(u).filter(function(te) {
          return te !== "key";
        });
        S = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", U[R + S] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          R,
          V,
          R
        ), U[R + S] = !0);
      }
      if (R = null, O !== void 0 && (n(O), R = "" + O), o(u) && (n(u.key), R = "" + u.key), "key" in u) {
        O = {};
        for (var K in u)
          K !== "key" && (O[K] = u[K]);
      } else O = u;
      return R && c(
        O,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), d(
        s,
        R,
        D,
        k,
        a(),
        O,
        z,
        $
      );
    }
    function g(s) {
      typeof s == "object" && s !== null && s.$$typeof === _ && s._store && (s._store.validated = 1);
    }
    var y = ge, _ = Symbol.for("react.transitional.element"), F = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), L = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), m = Symbol.for("react.client.reference"), j = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, f = Array.isArray, v = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      "react-stack-bottom-frame": function(s) {
        return s();
      }
    };
    var E, C = {}, W = y["react-stack-bottom-frame"].bind(
      y,
      i
    )(), G = v(r(i)), U = {};
    Ae.Fragment = M, Ae.jsx = function(s, u, O, S, k) {
      var D = 1e4 > j.recentlyCreatedOwnerStacks++;
      return p(
        s,
        u,
        O,
        !1,
        S,
        k,
        D ? Error("react-stack-top-frame") : W,
        D ? v(r(s)) : G
      );
    }, Ae.jsxs = function(s, u, O, S, k) {
      var D = 1e4 > j.recentlyCreatedOwnerStacks++;
      return p(
        s,
        u,
        O,
        !0,
        S,
        k,
        D ? Error("react-stack-top-frame") : W,
        D ? v(r(s)) : G
      );
    };
  }()), Ae;
}
var an;
function Xr() {
  return an || (an = 1, process.env.NODE_ENV === "production" ? $e.exports = Kr() : $e.exports = Hr()), $e.exports;
}
var ee = Xr(), Ye = { exports: {} }, We = { exports: {} }, X = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var on;
function Jr() {
  if (on) return X;
  on = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, F = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, q = e ? Symbol.for("react.responder") : 60118, H = e ? Symbol.for("react.scope") : 60119;
  function L(b) {
    if (typeof b == "object" && b !== null) {
      var Q = b.$$typeof;
      switch (Q) {
        case t:
          switch (b = b.type, b) {
            case l:
            case d:
            case r:
            case i:
            case a:
            case g:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case p:
                case F:
                case _:
                case o:
                  return b;
                default:
                  return Q;
              }
          }
        case n:
          return Q;
      }
    }
  }
  function B(b) {
    return L(b) === d;
  }
  return X.AsyncMode = l, X.ConcurrentMode = d, X.ContextConsumer = c, X.ContextProvider = o, X.Element = t, X.ForwardRef = p, X.Fragment = r, X.Lazy = F, X.Memo = _, X.Portal = n, X.Profiler = i, X.StrictMode = a, X.Suspense = g, X.isAsyncMode = function(b) {
    return B(b) || L(b) === l;
  }, X.isConcurrentMode = B, X.isContextConsumer = function(b) {
    return L(b) === c;
  }, X.isContextProvider = function(b) {
    return L(b) === o;
  }, X.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, X.isForwardRef = function(b) {
    return L(b) === p;
  }, X.isFragment = function(b) {
    return L(b) === r;
  }, X.isLazy = function(b) {
    return L(b) === F;
  }, X.isMemo = function(b) {
    return L(b) === _;
  }, X.isPortal = function(b) {
    return L(b) === n;
  }, X.isProfiler = function(b) {
    return L(b) === i;
  }, X.isStrictMode = function(b) {
    return L(b) === a;
  }, X.isSuspense = function(b) {
    return L(b) === g;
  }, X.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === d || b === i || b === a || b === g || b === y || typeof b == "object" && b !== null && (b.$$typeof === F || b.$$typeof === _ || b.$$typeof === o || b.$$typeof === c || b.$$typeof === p || b.$$typeof === I || b.$$typeof === q || b.$$typeof === H || b.$$typeof === M);
  }, X.typeOf = L, X;
}
var J = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sn;
function Zr() {
  return sn || (sn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, F = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, q = e ? Symbol.for("react.responder") : 60118, H = e ? Symbol.for("react.scope") : 60119;
    function L(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === r || T === d || T === i || T === a || T === g || T === y || typeof T == "object" && T !== null && (T.$$typeof === F || T.$$typeof === _ || T.$$typeof === o || T.$$typeof === c || T.$$typeof === p || T.$$typeof === I || T.$$typeof === q || T.$$typeof === H || T.$$typeof === M);
    }
    function B(T) {
      if (typeof T == "object" && T !== null) {
        var ae = T.$$typeof;
        switch (ae) {
          case t:
            var Le = T.type;
            switch (Le) {
              case l:
              case d:
              case r:
              case i:
              case a:
              case g:
                return Le;
              default:
                var en = Le && Le.$$typeof;
                switch (en) {
                  case c:
                  case p:
                  case F:
                  case _:
                  case o:
                    return en;
                  default:
                    return ae;
                }
            }
          case n:
            return ae;
        }
      }
    }
    var b = l, Q = d, P = c, x = o, Y = t, m = p, j = r, N = F, f = _, v = n, E = i, C = a, W = g, G = !1;
    function U(T) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), s(T) || B(T) === l;
    }
    function s(T) {
      return B(T) === d;
    }
    function u(T) {
      return B(T) === c;
    }
    function O(T) {
      return B(T) === o;
    }
    function S(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function k(T) {
      return B(T) === p;
    }
    function D(T) {
      return B(T) === r;
    }
    function z(T) {
      return B(T) === F;
    }
    function $(T) {
      return B(T) === _;
    }
    function R(T) {
      return B(T) === n;
    }
    function V(T) {
      return B(T) === i;
    }
    function K(T) {
      return B(T) === a;
    }
    function te(T) {
      return B(T) === g;
    }
    J.AsyncMode = b, J.ConcurrentMode = Q, J.ContextConsumer = P, J.ContextProvider = x, J.Element = Y, J.ForwardRef = m, J.Fragment = j, J.Lazy = N, J.Memo = f, J.Portal = v, J.Profiler = E, J.StrictMode = C, J.Suspense = W, J.isAsyncMode = U, J.isConcurrentMode = s, J.isContextConsumer = u, J.isContextProvider = O, J.isElement = S, J.isForwardRef = k, J.isFragment = D, J.isLazy = z, J.isMemo = $, J.isPortal = R, J.isProfiler = V, J.isStrictMode = K, J.isSuspense = te, J.isValidElementType = L, J.typeOf = B;
  }()), J;
}
var cn;
function Qn() {
  return cn || (cn = 1, process.env.NODE_ENV === "production" ? We.exports = Jr() : We.exports = Zr()), We.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ct, ln;
function Qr() {
  if (ln) return ct;
  ln = 1;
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
      var l = Object.getOwnPropertyNames(o).map(function(p) {
        return o[p];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        d[p] = p;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ct = a() ? Object.assign : function(i, o) {
    for (var c, l = r(i), d, p = 1; p < arguments.length; p++) {
      c = Object(arguments[p]);
      for (var g in c)
        t.call(c, g) && (l[g] = c[g]);
      if (e) {
        d = e(c);
        for (var y = 0; y < d.length; y++)
          n.call(c, d[y]) && (l[d[y]] = c[d[y]]);
      }
    }
    return l;
  }, ct;
}
var lt, un;
function Yt() {
  if (un) return lt;
  un = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return lt = e, lt;
}
var ut, fn;
function er() {
  return fn || (fn = 1, ut = Function.call.bind(Object.prototype.hasOwnProperty)), ut;
}
var ft, dn;
function ea() {
  if (dn) return ft;
  dn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Yt(), n = {}, r = /* @__PURE__ */ er();
    e = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function a(i, o, c, l, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (r(i, p)) {
          var g;
          try {
            if (typeof i[p] != "function") {
              var y = Error(
                (l || "React class") + ": " + c + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            g = i[p](o, p, l, c, null, t);
          } catch (F) {
            g = F;
          }
          if (g && !(g instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in n)) {
            n[g.message] = !0;
            var _ = d ? d() : "";
            e(
              "Failed " + c + " type: " + g.message + (_ ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ft = a, ft;
}
var dt, pn;
function ta() {
  if (pn) return dt;
  pn = 1;
  var e = Qn(), t = Qr(), n = /* @__PURE__ */ Yt(), r = /* @__PURE__ */ er(), a = /* @__PURE__ */ ea(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return dt = function(c, l) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function g(s) {
      var u = s && (d && s[d] || s[p]);
      if (typeof u == "function")
        return u;
    }
    var y = "<<anonymous>>", _ = {
      array: q("array"),
      bigint: q("bigint"),
      bool: q("boolean"),
      func: q("function"),
      number: q("number"),
      object: q("object"),
      string: q("string"),
      symbol: q("symbol"),
      any: H(),
      arrayOf: L,
      element: B(),
      elementType: b(),
      instanceOf: Q,
      node: m(),
      objectOf: x,
      oneOf: P,
      oneOfType: Y,
      shape: N,
      exact: f
    };
    function F(s, u) {
      return s === u ? s !== 0 || 1 / s === 1 / u : s !== s && u !== u;
    }
    function M(s, u) {
      this.message = s, this.data = u && typeof u == "object" ? u : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function I(s) {
      if (process.env.NODE_ENV !== "production")
        var u = {}, O = 0;
      function S(D, z, $, R, V, K, te) {
        if (R = R || y, K = K || $, te !== n) {
          if (l) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ae = R + ":" + $;
            !u[ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            O < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + R + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), u[ae] = !0, O++);
          }
        }
        return z[$] == null ? D ? z[$] === null ? new M("The " + V + " `" + K + "` is marked as required " + ("in `" + R + "`, but its value is `null`.")) : new M("The " + V + " `" + K + "` is marked as required in " + ("`" + R + "`, but its value is `undefined`.")) : null : s(z, $, R, V, K);
      }
      var k = S.bind(null, !1);
      return k.isRequired = S.bind(null, !0), k;
    }
    function q(s) {
      function u(O, S, k, D, z, $) {
        var R = O[S], V = C(R);
        if (V !== s) {
          var K = W(R);
          return new M(
            "Invalid " + D + " `" + z + "` of type " + ("`" + K + "` supplied to `" + k + "`, expected ") + ("`" + s + "`."),
            { expectedType: s }
          );
        }
        return null;
      }
      return I(u);
    }
    function H() {
      return I(o);
    }
    function L(s) {
      function u(O, S, k, D, z) {
        if (typeof s != "function")
          return new M("Property `" + z + "` of component `" + k + "` has invalid PropType notation inside arrayOf.");
        var $ = O[S];
        if (!Array.isArray($)) {
          var R = C($);
          return new M("Invalid " + D + " `" + z + "` of type " + ("`" + R + "` supplied to `" + k + "`, expected an array."));
        }
        for (var V = 0; V < $.length; V++) {
          var K = s($, V, k, D, z + "[" + V + "]", n);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return I(u);
    }
    function B() {
      function s(u, O, S, k, D) {
        var z = u[O];
        if (!c(z)) {
          var $ = C(z);
          return new M("Invalid " + k + " `" + D + "` of type " + ("`" + $ + "` supplied to `" + S + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(s);
    }
    function b() {
      function s(u, O, S, k, D) {
        var z = u[O];
        if (!e.isValidElementType(z)) {
          var $ = C(z);
          return new M("Invalid " + k + " `" + D + "` of type " + ("`" + $ + "` supplied to `" + S + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(s);
    }
    function Q(s) {
      function u(O, S, k, D, z) {
        if (!(O[S] instanceof s)) {
          var $ = s.name || y, R = U(O[S]);
          return new M("Invalid " + D + " `" + z + "` of type " + ("`" + R + "` supplied to `" + k + "`, expected ") + ("instance of `" + $ + "`."));
        }
        return null;
      }
      return I(u);
    }
    function P(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function u(O, S, k, D, z) {
        for (var $ = O[S], R = 0; R < s.length; R++)
          if (F($, s[R]))
            return null;
        var V = JSON.stringify(s, function(te, T) {
          var ae = W(T);
          return ae === "symbol" ? String(T) : T;
        });
        return new M("Invalid " + D + " `" + z + "` of value `" + String($) + "` " + ("supplied to `" + k + "`, expected one of " + V + "."));
      }
      return I(u);
    }
    function x(s) {
      function u(O, S, k, D, z) {
        if (typeof s != "function")
          return new M("Property `" + z + "` of component `" + k + "` has invalid PropType notation inside objectOf.");
        var $ = O[S], R = C($);
        if (R !== "object")
          return new M("Invalid " + D + " `" + z + "` of type " + ("`" + R + "` supplied to `" + k + "`, expected an object."));
        for (var V in $)
          if (r($, V)) {
            var K = s($, V, k, D, z + "." + V, n);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return I(u);
    }
    function Y(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var u = 0; u < s.length; u++) {
        var O = s[u];
        if (typeof O != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + G(O) + " at index " + u + "."
          ), o;
      }
      function S(k, D, z, $, R) {
        for (var V = [], K = 0; K < s.length; K++) {
          var te = s[K], T = te(k, D, z, $, R, n);
          if (T == null)
            return null;
          T.data && r(T.data, "expectedType") && V.push(T.data.expectedType);
        }
        var ae = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new M("Invalid " + $ + " `" + R + "` supplied to " + ("`" + z + "`" + ae + "."));
      }
      return I(S);
    }
    function m() {
      function s(u, O, S, k, D) {
        return v(u[O]) ? null : new M("Invalid " + k + " `" + D + "` supplied to " + ("`" + S + "`, expected a ReactNode."));
      }
      return I(s);
    }
    function j(s, u, O, S, k) {
      return new M(
        (s || "React class") + ": " + u + " type `" + O + "." + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + k + "`."
      );
    }
    function N(s) {
      function u(O, S, k, D, z) {
        var $ = O[S], R = C($);
        if (R !== "object")
          return new M("Invalid " + D + " `" + z + "` of type `" + R + "` " + ("supplied to `" + k + "`, expected `object`."));
        for (var V in s) {
          var K = s[V];
          if (typeof K != "function")
            return j(k, D, z, V, W(K));
          var te = K($, V, k, D, z + "." + V, n);
          if (te)
            return te;
        }
        return null;
      }
      return I(u);
    }
    function f(s) {
      function u(O, S, k, D, z) {
        var $ = O[S], R = C($);
        if (R !== "object")
          return new M("Invalid " + D + " `" + z + "` of type `" + R + "` " + ("supplied to `" + k + "`, expected `object`."));
        var V = t({}, O[S], s);
        for (var K in V) {
          var te = s[K];
          if (r(s, K) && typeof te != "function")
            return j(k, D, z, K, W(te));
          if (!te)
            return new M(
              "Invalid " + D + " `" + z + "` key `" + K + "` supplied to `" + k + "`.\nBad object: " + JSON.stringify(O[S], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(s), null, "  ")
            );
          var T = te($, K, k, D, z + "." + K, n);
          if (T)
            return T;
        }
        return null;
      }
      return I(u);
    }
    function v(s) {
      switch (typeof s) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !s;
        case "object":
          if (Array.isArray(s))
            return s.every(v);
          if (s === null || c(s))
            return !0;
          var u = g(s);
          if (u) {
            var O = u.call(s), S;
            if (u !== s.entries) {
              for (; !(S = O.next()).done; )
                if (!v(S.value))
                  return !1;
            } else
              for (; !(S = O.next()).done; ) {
                var k = S.value;
                if (k && !v(k[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function E(s, u) {
      return s === "symbol" ? !0 : u ? u["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && u instanceof Symbol : !1;
    }
    function C(s) {
      var u = typeof s;
      return Array.isArray(s) ? "array" : s instanceof RegExp ? "object" : E(u, s) ? "symbol" : u;
    }
    function W(s) {
      if (typeof s > "u" || s === null)
        return "" + s;
      var u = C(s);
      if (u === "object") {
        if (s instanceof Date)
          return "date";
        if (s instanceof RegExp)
          return "regexp";
      }
      return u;
    }
    function G(s) {
      var u = W(s);
      switch (u) {
        case "array":
        case "object":
          return "an " + u;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + u;
        default:
          return u;
      }
    }
    function U(s) {
      return !s.constructor || !s.constructor.name ? y : s.constructor.name;
    }
    return _.checkPropTypes = a, _.resetWarningCache = a.resetWarningCache, _.PropTypes = _, _;
  }, dt;
}
var pt, mn;
function na() {
  if (mn) return pt;
  mn = 1;
  var e = /* @__PURE__ */ Yt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, pt = function() {
    function r(o, c, l, d, p, g) {
      if (g !== e) {
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
  }, pt;
}
var vn;
function ra() {
  if (vn) return Ye.exports;
  if (vn = 1, process.env.NODE_ENV !== "production") {
    var e = Qn(), t = !0;
    Ye.exports = /* @__PURE__ */ ta()(e.isElement, t);
  } else
    Ye.exports = /* @__PURE__ */ na()();
  return Ye.exports;
}
var aa = /* @__PURE__ */ ra();
const w = /* @__PURE__ */ Vr(aa);
var Ue = { exports: {} };
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var tr = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Xe = /* @__PURE__ */ tr.join(","), nr = typeof Element > "u", ye = nr ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Je = !nr && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, Ze = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var a = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), i = a === "" || a === "true", o = i || n && t && e(t.parentNode);
  return o;
}, ia = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, rr = function(t, n, r) {
  if (Ze(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Xe));
  return n && ye.call(t, Xe) && a.unshift(t), a = a.filter(r), a;
}, ar = function e(t, n, r) {
  for (var a = [], i = Array.from(t); i.length; ) {
    var o = i.shift();
    if (!Ze(o, !1))
      if (o.tagName === "SLOT") {
        var c = o.assignedElements(), l = c.length ? c : o.children, d = e(l, !0, r);
        r.flatten ? a.push.apply(a, d) : a.push({
          scopeParent: o,
          candidates: d
        });
      } else {
        var p = ye.call(o, Xe);
        p && r.filter(o) && (n || !t.includes(o)) && a.push(o);
        var g = o.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(o), y = !Ze(g, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
        if (g && y) {
          var _ = e(g === !0 ? o.children : g.children, !0, r);
          r.flatten ? a.push.apply(a, _) : a.push({
            scopeParent: o,
            candidates: _
          });
        } else
          i.unshift.apply(i, o.children);
      }
  }
  return a;
}, ir = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, de = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || ia(t)) && !ir(t) ? 0 : t.tabIndex;
}, oa = function(t, n) {
  var r = de(t);
  return r < 0 && n && !ir(t) ? 0 : r;
}, sa = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, or = function(t) {
  return t.tagName === "INPUT";
}, ca = function(t) {
  return or(t) && t.type === "hidden";
}, la = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, ua = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, fa = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Je(t), r = function(c) {
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
  var i = ua(a, t.form);
  return !i || i === t;
}, da = function(t) {
  return or(t) && t.type === "radio";
}, pa = function(t) {
  return da(t) && !fa(t);
}, ma = function(t) {
  var n, r = t && Je(t), a = (n = r) === null || n === void 0 ? void 0 : n.host, i = !1;
  if (r && r !== t) {
    var o, c, l;
    for (i = !!((o = a) !== null && o !== void 0 && (c = o.ownerDocument) !== null && c !== void 0 && c.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !i && a; ) {
      var d, p, g;
      r = Je(a), a = (d = r) === null || d === void 0 ? void 0 : d.host, i = !!((p = a) !== null && p !== void 0 && (g = p.ownerDocument) !== null && g !== void 0 && g.contains(a));
    }
  }
  return i;
}, hn = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, a = n.height;
  return r === 0 && a === 0;
}, va = function(t, n) {
  var r = n.displayCheck, a = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var i = ye.call(t, "details>summary:first-of-type"), o = i ? t.parentElement : t;
  if (ye.call(o, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof a == "function") {
      for (var c = t; t; ) {
        var l = t.parentElement, d = Je(t);
        if (l && !l.shadowRoot && a(l) === !0)
          return hn(t);
        t.assignedSlot ? t = t.assignedSlot : !l && d !== t.ownerDocument ? t = d.host : t = l;
      }
      t = c;
    }
    if (ma(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return hn(t);
  return !1;
}, ha = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var a = n.children.item(r);
          if (a.tagName === "LEGEND")
            return ye.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Qe = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Ze(n) || ca(n) || va(n, t) || // For a details element with a summary, the summary element gets the focus
  la(n) || ha(n));
}, Et = function(t, n) {
  return !(pa(n) || de(n) < 0 || !Qe(t, n));
}, ba = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, ga = function e(t) {
  var n = [], r = [];
  return t.forEach(function(a, i) {
    var o = !!a.scopeParent, c = o ? a.scopeParent : a, l = oa(c, o), d = o ? e(a.candidates) : c;
    l === 0 ? o ? n.push.apply(n, d) : n.push(c) : r.push({
      documentOrder: i,
      tabIndex: l,
      item: a,
      isScope: o,
      content: d
    });
  }), r.sort(sa).reduce(function(a, i) {
    return i.isScope ? a.push.apply(a, i.content) : a.push(i.content), a;
  }, []).concat(n);
}, sr = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = ar([t], n.includeContainer, {
    filter: Et.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: ba
  }) : r = rr(t, n.includeContainer, Et.bind(null, n)), ga(r);
}, cr = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = ar([t], n.includeContainer, {
    filter: Qe.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = rr(t, n.includeContainer, Qe.bind(null, n)), r;
}, he = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ye.call(t, Xe) === !1 ? !1 : Et(n, t);
}, ya = /* @__PURE__ */ tr.concat("iframe").join(","), Ve = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ye.call(t, ya) === !1 ? !1 : Qe(n, t);
};
const Ea = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  focusable: cr,
  getTabIndex: de,
  isFocusable: Ve,
  isTabbable: he,
  tabbable: sr
}, Symbol.toStringTag, { value: "Module" }));
/*!
* focus-trap 7.6.5
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function xt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function xa(e) {
  if (Array.isArray(e)) return xt(e);
}
function Ta(e, t, n) {
  return (t = ka(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Oa(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function wa() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function gn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bn(Object(n), !0).forEach(function(r) {
      Ta(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Pa(e) {
  return xa(e) || Oa(e) || Aa(e) || wa();
}
function Sa(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ka(e) {
  var t = Sa(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Aa(e, t) {
  if (e) {
    if (typeof e == "string") return xt(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xt(e, t) : void 0;
  }
}
var yn = {
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
}, _a = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Ca = function(t) {
  return (t == null ? void 0 : t.key) === "Escape" || (t == null ? void 0 : t.key) === "Esc" || (t == null ? void 0 : t.keyCode) === 27;
}, Re = function(t) {
  return (t == null ? void 0 : t.key) === "Tab" || (t == null ? void 0 : t.keyCode) === 9;
}, Ra = function(t) {
  return Re(t) && !t.shiftKey;
}, Fa = function(t) {
  return Re(t) && t.shiftKey;
}, En = function(t) {
  return setTimeout(t, 0);
}, _e = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, r) : t;
}, qe = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Na = [], Ia = function(t, n) {
  var r = (n == null ? void 0 : n.document) || document, a = (n == null ? void 0 : n.trapStack) || Na, i = gn({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: Ra,
    isKeyBackward: Fa
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
  }, c, l = function(f, v, E) {
    return f && f[v] !== void 0 ? f[v] : i[E || v];
  }, d = function(f, v) {
    var E = typeof (v == null ? void 0 : v.composedPath) == "function" ? v.composedPath() : void 0;
    return o.containerGroups.findIndex(function(C) {
      var W = C.container, G = C.tabbableNodes;
      return W.contains(f) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (E == null ? void 0 : E.includes(W)) || G.find(function(U) {
        return U === f;
      });
    });
  }, p = function(f) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E = v.hasFallback, C = E === void 0 ? !1 : E, W = v.params, G = W === void 0 ? [] : W, U = i[f];
    if (typeof U == "function" && (U = U.apply(void 0, Pa(G))), U === !0 && (U = void 0), !U) {
      if (U === void 0 || U === !1)
        return U;
      throw new Error("`".concat(f, "` was specified but was not a node, or did not return a node"));
    }
    var s = U;
    if (typeof U == "string") {
      try {
        s = r.querySelector(U);
      } catch (u) {
        throw new Error("`".concat(f, '` appears to be an invalid selector; error="').concat(u.message, '"'));
      }
      if (!s && !C)
        throw new Error("`".concat(f, "` as selector refers to no known node"));
    }
    return s;
  }, g = function() {
    var f = p("initialFocus", {
      hasFallback: !0
    });
    if (f === !1)
      return !1;
    if (f === void 0 || f && !Ve(f, i.tabbableOptions))
      if (d(r.activeElement) >= 0)
        f = r.activeElement;
      else {
        var v = o.tabbableGroups[0], E = v && v.firstTabbableNode;
        f = E || p("fallbackFocus");
      }
    else f === null && (f = p("fallbackFocus"));
    if (!f)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return f;
  }, y = function() {
    if (o.containerGroups = o.containers.map(function(f) {
      var v = sr(f, i.tabbableOptions), E = cr(f, i.tabbableOptions), C = v.length > 0 ? v[0] : void 0, W = v.length > 0 ? v[v.length - 1] : void 0, G = E.find(function(u) {
        return he(u);
      }), U = E.slice().reverse().find(function(u) {
        return he(u);
      }), s = !!v.find(function(u) {
        return de(u) > 0;
      });
      return {
        container: f,
        tabbableNodes: v,
        focusableNodes: E,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: s,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: C,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: W,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: G,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: U,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(O) {
          var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, k = v.indexOf(O);
          return k < 0 ? S ? E.slice(E.indexOf(O) + 1).find(function(D) {
            return he(D);
          }) : E.slice(0, E.indexOf(O)).reverse().find(function(D) {
            return he(D);
          }) : v[k + (S ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(f) {
      return f.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !p("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(f) {
      return f.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, _ = function(f) {
    var v = f.activeElement;
    if (v)
      return v.shadowRoot && v.shadowRoot.activeElement !== null ? _(v.shadowRoot) : v;
  }, F = function(f) {
    if (f !== !1 && f !== _(document)) {
      if (!f || !f.focus) {
        F(g());
        return;
      }
      f.focus({
        preventScroll: !!i.preventScroll
      }), o.mostRecentlyFocusedNode = f, _a(f) && f.select();
    }
  }, M = function(f) {
    var v = p("setReturnFocus", {
      params: [f]
    });
    return v || (v === !1 ? !1 : f);
  }, I = function(f) {
    var v = f.target, E = f.event, C = f.isBackward, W = C === void 0 ? !1 : C;
    v = v || qe(E), y();
    var G = null;
    if (o.tabbableGroups.length > 0) {
      var U = d(v, E), s = U >= 0 ? o.containerGroups[U] : void 0;
      if (U < 0)
        W ? G = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : G = o.tabbableGroups[0].firstTabbableNode;
      else if (W) {
        var u = o.tabbableGroups.findIndex(function($) {
          var R = $.firstTabbableNode;
          return v === R;
        });
        if (u < 0 && (s.container === v || Ve(v, i.tabbableOptions) && !he(v, i.tabbableOptions) && !s.nextTabbableNode(v, !1)) && (u = U), u >= 0) {
          var O = u === 0 ? o.tabbableGroups.length - 1 : u - 1, S = o.tabbableGroups[O];
          G = de(v) >= 0 ? S.lastTabbableNode : S.lastDomTabbableNode;
        } else Re(E) || (G = s.nextTabbableNode(v, !1));
      } else {
        var k = o.tabbableGroups.findIndex(function($) {
          var R = $.lastTabbableNode;
          return v === R;
        });
        if (k < 0 && (s.container === v || Ve(v, i.tabbableOptions) && !he(v, i.tabbableOptions) && !s.nextTabbableNode(v)) && (k = U), k >= 0) {
          var D = k === o.tabbableGroups.length - 1 ? 0 : k + 1, z = o.tabbableGroups[D];
          G = de(v) >= 0 ? z.firstTabbableNode : z.firstDomTabbableNode;
        } else Re(E) || (G = s.nextTabbableNode(v));
      }
    } else
      G = p("fallbackFocus");
    return G;
  }, q = function(f) {
    var v = qe(f);
    if (!(d(v, f) >= 0)) {
      if (_e(i.clickOutsideDeactivates, f)) {
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
      _e(i.allowOutsideClick, f) || f.preventDefault();
    }
  }, H = function(f) {
    var v = qe(f), E = d(v, f) >= 0;
    if (E || v instanceof Document)
      E && (o.mostRecentlyFocusedNode = v);
    else {
      f.stopImmediatePropagation();
      var C, W = !0;
      if (o.mostRecentlyFocusedNode)
        if (de(o.mostRecentlyFocusedNode) > 0) {
          var G = d(o.mostRecentlyFocusedNode), U = o.containerGroups[G].tabbableNodes;
          if (U.length > 0) {
            var s = U.findIndex(function(u) {
              return u === o.mostRecentlyFocusedNode;
            });
            s >= 0 && (i.isKeyForward(o.recentNavEvent) ? s + 1 < U.length && (C = U[s + 1], W = !1) : s - 1 >= 0 && (C = U[s - 1], W = !1));
          }
        } else
          o.containerGroups.some(function(u) {
            return u.tabbableNodes.some(function(O) {
              return de(O) > 0;
            });
          }) || (W = !1);
      else
        W = !1;
      W && (C = I({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: i.isKeyBackward(o.recentNavEvent)
      })), F(C || o.mostRecentlyFocusedNode || g());
    }
    o.recentNavEvent = void 0;
  }, L = function(f) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = f;
    var E = I({
      event: f,
      isBackward: v
    });
    E && (Re(f) && f.preventDefault(), F(E));
  }, B = function(f) {
    (i.isKeyForward(f) || i.isKeyBackward(f)) && L(f, i.isKeyBackward(f));
  }, b = function(f) {
    Ca(f) && _e(i.escapeDeactivates, f) !== !1 && (f.preventDefault(), c.deactivate());
  }, Q = function(f) {
    var v = qe(f);
    d(v, f) >= 0 || _e(i.clickOutsideDeactivates, f) || _e(i.allowOutsideClick, f) || (f.preventDefault(), f.stopImmediatePropagation());
  }, P = function() {
    if (o.active)
      return yn.activateTrap(a, c), o.delayInitialFocusTimer = i.delayInitialFocus ? En(function() {
        F(g());
      }) : F(g()), r.addEventListener("focusin", H, !0), r.addEventListener("mousedown", q, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", q, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", Q, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", B, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", b), c;
  }, x = function() {
    if (o.active)
      return r.removeEventListener("focusin", H, !0), r.removeEventListener("mousedown", q, !0), r.removeEventListener("touchstart", q, !0), r.removeEventListener("click", Q, !0), r.removeEventListener("keydown", B, !0), r.removeEventListener("keydown", b), c;
  }, Y = function(f) {
    var v = f.some(function(E) {
      var C = Array.from(E.removedNodes);
      return C.some(function(W) {
        return W === o.mostRecentlyFocusedNode;
      });
    });
    v && F(g());
  }, m = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(Y) : void 0, j = function() {
    m && (m.disconnect(), o.active && !o.paused && o.containers.map(function(f) {
      m.observe(f, {
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
    activate: function(f) {
      if (o.active)
        return this;
      var v = l(f, "onActivate"), E = l(f, "onPostActivate"), C = l(f, "checkCanFocusTrap");
      C || y(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = _(r), v == null || v();
      var W = function() {
        C && y(), P(), j(), E == null || E();
      };
      return C ? (C(o.containers.concat()).then(W, W), this) : (W(), this);
    },
    deactivate: function(f) {
      if (!o.active)
        return this;
      var v = gn({
        onDeactivate: i.onDeactivate,
        onPostDeactivate: i.onPostDeactivate,
        checkCanReturnFocus: i.checkCanReturnFocus
      }, f);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, x(), o.active = !1, o.paused = !1, j(), yn.deactivateTrap(a, c);
      var E = l(v, "onDeactivate"), C = l(v, "onPostDeactivate"), W = l(v, "checkCanReturnFocus"), G = l(v, "returnFocus", "returnFocusOnDeactivate");
      E == null || E();
      var U = function() {
        En(function() {
          G && F(M(o.nodeFocusedBeforeActivation)), C == null || C();
        });
      };
      return G && W ? (W(M(o.nodeFocusedBeforeActivation)).then(U, U), this) : (U(), this);
    },
    pause: function(f) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, f)) : this;
    },
    unpause: function(f) {
      return o.active ? (o.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, f)) : this;
    },
    updateContainerElements: function(f) {
      var v = [].concat(f).filter(Boolean);
      return o.containers = v.map(function(E) {
        return typeof E == "string" ? r.querySelector(E) : E;
      }), o.active && y(), j(), this;
    }
  }, Object.defineProperties(c, {
    _isManuallyPaused: {
      value: function() {
        return o.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(f, v) {
        if (o.paused === f)
          return this;
        if (o.paused = f, f) {
          var E = l(v, "onPause"), C = l(v, "onPostPause");
          E == null || E(), x(), j(), C == null || C();
        } else {
          var W = l(v, "onUnpause"), G = l(v, "onPostUnpause");
          W == null || W(), y(), P(), j(), G == null || G();
        }
        return this;
      }
    }
  }), c.updateContainerElements(t), c;
};
const Da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createFocusTrap: Ia
}, Symbol.toStringTag, { value: "Module" })), ja = /* @__PURE__ */ Zn(Da), Ma = /* @__PURE__ */ Zn(Ea);
var xn;
function La() {
  if (xn) return Ue.exports;
  xn = 1;
  function e(P) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(x) {
      return typeof x;
    } : function(x) {
      return x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : typeof x;
    }, e(P);
  }
  var t, n;
  function r(P, x) {
    if (!(P instanceof x)) throw new TypeError("Cannot call a class as a function");
  }
  function a(P, x) {
    for (var Y = 0; Y < x.length; Y++) {
      var m = x[Y];
      m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(P, F(m.key), m);
    }
  }
  function i(P, x, Y) {
    return x && a(P.prototype, x), Object.defineProperty(P, "prototype", { writable: !1 }), P;
  }
  function o(P, x, Y) {
    return x = p(x), c(P, d() ? Reflect.construct(x, Y || [], p(P).constructor) : x.apply(P, Y));
  }
  function c(P, x) {
    if (x && (e(x) == "object" || typeof x == "function")) return x;
    if (x !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return l(P);
  }
  function l(P) {
    if (P === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return P;
  }
  function d() {
    try {
      var P = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (d = function() {
      return !!P;
    })();
  }
  function p(P) {
    return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(x) {
      return x.__proto__ || Object.getPrototypeOf(x);
    }, p(P);
  }
  function g(P, x) {
    if (typeof x != "function" && x !== null) throw new TypeError("Super expression must either be null or a function");
    P.prototype = Object.create(x && x.prototype, { constructor: { value: P, writable: !0, configurable: !0 } }), Object.defineProperty(P, "prototype", { writable: !1 }), x && y(P, x);
  }
  function y(P, x) {
    return y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(Y, m) {
      return Y.__proto__ = m, Y;
    }, y(P, x);
  }
  function _(P, x, Y) {
    return (x = F(x)) in P ? Object.defineProperty(P, x, { value: Y, enumerable: !0, configurable: !0, writable: !0 }) : P[x] = Y, P;
  }
  function F(P) {
    var x = M(P, "string");
    return e(x) == "symbol" ? x : x + "";
  }
  function M(P, x) {
    if (e(P) != "object" || !P) return P;
    var Y = P[Symbol.toPrimitive];
    if (Y !== void 0) {
      var m = Y.call(P, x);
      if (e(m) != "object") return m;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (x === "string" ? String : Number)(P);
  }
  var I = ge, q = ja, H = q.createFocusTrap, L = Ma, B = L.isFocusable, b = parseInt((t = (n = /^(\d+)\./.exec(I.version)) === null || n === void 0 ? void 0 : n[1]) !== null && t !== void 0 ? t : 0, 10), Q = /* @__PURE__ */ function(P) {
    function x(Y) {
      var m;
      r(this, x), m = o(this, x, [Y]), _(m, "getNodeForOption", function(f) {
        var v, E = (v = this.internalOptions[f]) !== null && v !== void 0 ? v : this.originalOptions[f];
        if (typeof E == "function") {
          for (var C = arguments.length, W = new Array(C > 1 ? C - 1 : 0), G = 1; G < C; G++)
            W[G - 1] = arguments[G];
          E = E.apply(void 0, W);
        }
        if (E === !0 && (E = void 0), !E) {
          if (E === void 0 || E === !1)
            return E;
          throw new Error("`".concat(f, "` was specified but was not a node, or did not return a node"));
        }
        var U = E;
        if (typeof E == "string") {
          var s;
          if (U = (s = this.getDocument()) === null || s === void 0 ? void 0 : s.querySelector(E), !U)
            throw new Error("`".concat(f, "` as selector refers to no known node"));
        }
        return U;
      }), m.handleDeactivate = m.handleDeactivate.bind(m), m.handlePostDeactivate = m.handlePostDeactivate.bind(m), m.handleClickOutsideDeactivates = m.handleClickOutsideDeactivates.bind(m), m.internalOptions = {
        // We need to hijack the returnFocusOnDeactivate option,
        // because React can move focus into the element before we arrived at
        // this lifecycle hook (e.g. with autoFocus inputs). So the component
        // captures the previouslyFocusedElement in componentWillMount,
        // then (optionally) returns focus to it in componentWillUnmount.
        returnFocusOnDeactivate: !1,
        // the rest of these are also related to deactivation of the trap, and we
        //  need to use them and control them as well
        checkCanReturnFocus: null,
        onDeactivate: m.handleDeactivate,
        onPostDeactivate: m.handlePostDeactivate,
        // we need to special-case this setting as well so that we can know if we should
        //  NOT return focus if the trap gets auto-deactivated as the result of an
        //  outside click (otherwise, we'll always think we should return focus because
        //  of how we manage that flag internally here)
        clickOutsideDeactivates: m.handleClickOutsideDeactivates
      }, m.originalOptions = {
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
      var j = Y.focusTrapOptions;
      for (var N in j)
        if (Object.prototype.hasOwnProperty.call(j, N)) {
          if (N === "returnFocusOnDeactivate" || N === "onDeactivate" || N === "onPostDeactivate" || N === "checkCanReturnFocus" || N === "clickOutsideDeactivates") {
            m.originalOptions[N] = j[N];
            continue;
          }
          m.internalOptions[N] = j[N];
        }
      return m.outsideClick = null, m.focusTrapElements = Y.containerElements || [], m.updatePreviousElement(), m;
    }
    return g(x, P), i(x, [{
      key: "getDocument",
      value: function() {
        return this.props.focusTrapOptions.document || (typeof document < "u" ? document : void 0);
      }
    }, {
      key: "getReturnFocusNode",
      value: function() {
        var m = this.getNodeForOption("setReturnFocus", this.previouslyFocusedElement);
        return m || (m === !1 ? !1 : this.previouslyFocusedElement);
      }
      /** Update the previously focused element with the currently focused element. */
    }, {
      key: "updatePreviousElement",
      value: function() {
        var m = this.getDocument();
        m && (this.previouslyFocusedElement = m.activeElement);
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
      value: function(m) {
        var j = typeof this.originalOptions.clickOutsideDeactivates == "function" ? this.originalOptions.clickOutsideDeactivates.call(null, m) : this.originalOptions.clickOutsideDeactivates;
        return j && (this.outsideClick = {
          target: m.target,
          allowDeactivation: j
        }), j;
      }
    }, {
      key: "handleDeactivate",
      value: function() {
        this.originalOptions.onDeactivate && this.originalOptions.onDeactivate.call(null), this.deactivateTrap();
      }
    }, {
      key: "handlePostDeactivate",
      value: function() {
        var m = this, j = function() {
          var f = m.getReturnFocusNode(), v = !!// did the consumer allow it?
          (m.originalOptions.returnFocusOnDeactivate && // can we actually focus the node?
          f !== null && f !== void 0 && f.focus && // was there an outside click that allowed deactivation?
          (!m.outsideClick || // did the consumer allow deactivation when the outside node was clicked?
          m.outsideClick.allowDeactivation && // is the outside node NOT focusable (implying that it did NOT receive focus
          //  as a result of the click-through) -- in which case do NOT restore focus
          //  to `returnFocusNode` because focus should remain on the outside node
          !B(m.outsideClick.target, m.internalOptions.tabbableOptions))), E = m.internalOptions.preventScroll, C = E === void 0 ? !1 : E;
          v && f.focus({
            preventScroll: C
          }), m.originalOptions.onPostDeactivate && m.originalOptions.onPostDeactivate.call(null), m.outsideClick = null;
        };
        this.originalOptions.checkCanReturnFocus ? this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()).then(j, j) : j();
      }
    }, {
      key: "setupFocusTrap",
      value: function() {
        if (this.focusTrap)
          this.props.active && !this.focusTrap.active && (this.focusTrap.activate(), this.props.paused && this.focusTrap.pause());
        else {
          var m = this.focusTrapElements.some(Boolean);
          m && (this.focusTrap = this.props._createFocusTrap(this.focusTrapElements, this.internalOptions), this.props.active && this.focusTrap.activate(), this.props.paused && this.focusTrap.pause());
        }
      }
    }, {
      key: "componentDidMount",
      value: function() {
        this.props.active && this.setupFocusTrap();
      }
    }, {
      key: "componentDidUpdate",
      value: function(m) {
        if (this.focusTrap) {
          m.containerElements !== this.props.containerElements && this.focusTrap.updateContainerElements(this.props.containerElements);
          var j = !m.active && this.props.active, N = m.active && !this.props.active, f = !m.paused && this.props.paused, v = m.paused && !this.props.paused;
          if (j && (this.updatePreviousElement(), this.focusTrap.activate()), N) {
            this.deactivateTrap();
            return;
          }
          f && this.focusTrap.pause(), v && this.focusTrap.unpause();
        } else
          m.containerElements !== this.props.containerElements && (this.focusTrapElements = this.props.containerElements), this.props.active && (this.updatePreviousElement(), this.setupFocusTrap());
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.deactivateTrap();
      }
    }, {
      key: "render",
      value: function() {
        var m = this, j = this.props.children ? I.Children.only(this.props.children) : void 0;
        if (j) {
          if (j.type && j.type === I.Fragment)
            throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");
          var N = function(E) {
            var C = m.props.containerElements;
            j && (b >= 19 ? typeof j.props.ref == "function" ? j.props.ref(E) : j.props.ref && (j.props.ref.current = E) : typeof j.ref == "function" ? j.ref(E) : j.ref && (j.ref.current = E)), m.focusTrapElements = C || [E];
          }, f = I.cloneElement(j, {
            ref: N
          });
          return f;
        }
        return null;
      }
    }]);
  }(I.Component);
  return Q.defaultProps = {
    active: !0,
    paused: !1,
    focusTrapOptions: {},
    _createFocusTrap: H
  }, Ue.exports = Q, Ue.exports.FocusTrap = Q, Ue.exports;
}
var za = La();
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function $a(e, t, n) {
  return (t = Wa(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Tn(e, t) {
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
    t % 2 ? Tn(Object(n), !0).forEach(function(r) {
      $a(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ya(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Wa(e) {
  var t = Ya(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const On = () => {
};
let Wt = {}, lr = {}, ur = null, fr = {
  mark: On,
  measure: On
};
try {
  typeof window < "u" && (Wt = window), typeof document < "u" && (lr = document), typeof MutationObserver < "u" && (ur = MutationObserver), typeof performance < "u" && (fr = performance);
} catch {
}
const {
  userAgent: wn = ""
} = Wt.navigator || {}, pe = Wt, Z = lr, Pn = ur, Be = fr;
pe.document;
const ue = !!Z.documentElement && !!Z.head && typeof Z.addEventListener == "function" && typeof Z.createElement == "function", dr = ~wn.indexOf("MSIE") || ~wn.indexOf("Trident/");
var Ua = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, qa = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, pr = {
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
}, Ba = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, mr = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], ne = "classic", rt = "duotone", Ga = "sharp", Va = "sharp-duotone", vr = [ne, rt, Ga, Va], Ka = {
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
}, Ha = {
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
}, Xa = /* @__PURE__ */ new Map([["classic", {
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
}]]), Ja = {
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
}, Za = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Sn = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Qa = ["kit"], ei = {
  kit: {
    "fa-kit": "fak"
  }
}, ti = ["fak", "fakd"], ni = {
  kit: {
    fak: "fa-kit"
  }
}, kn = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Ge = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, ri = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], ai = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], ii = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, oi = {
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
}, si = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Tt = {
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
}, ci = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Ot = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...ri, ...ci], li = ["solid", "regular", "light", "thin", "duotone", "brands"], hr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ui = hr.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), fi = [...Object.keys(si), ...li, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ge.GROUP, Ge.SWAP_OPACITY, Ge.PRIMARY, Ge.SECONDARY].concat(hr.map((e) => "".concat(e, "x"))).concat(ui.map((e) => "w-".concat(e))), di = {
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
const ce = "___FONT_AWESOME___", wt = 16, br = "fa", gr = "svg-inline--fa", Ee = "data-fa-i2svg", Pt = "data-fa-pseudo-element", pi = "data-fa-pseudo-element-pending", Ut = "data-prefix", qt = "data-icon", An = "fontawesome-i2svg", mi = "async", vi = ["HTML", "HEAD", "STYLE", "SCRIPT"], yr = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function je(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[ne];
    }
  });
}
const Er = h({}, pr);
Er[ne] = h(h(h(h({}, {
  "fa-duotone": "duotone"
}), pr[ne]), Sn.kit), Sn["kit-duotone"]);
const hi = je(Er), St = h({}, Ja);
St[ne] = h(h(h(h({}, {
  duotone: "fad"
}), St[ne]), kn.kit), kn["kit-duotone"]);
const _n = je(St), kt = h({}, Tt);
kt[ne] = h(h({}, kt[ne]), ni.kit);
const Bt = je(kt), At = h({}, oi);
At[ne] = h(h({}, At[ne]), ei.kit);
je(At);
const bi = Ua, xr = "fa-layers-text", gi = qa, yi = h({}, Ka);
je(yi);
const Ei = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], mt = Ba, xi = [...Qa, ...fi], Fe = pe.FontAwesomeConfig || {};
function Ti(e) {
  var t = Z.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Oi(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
Z && typeof Z.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = Oi(Ti(n));
  a != null && (Fe[r] = a);
});
const Tr = {
  styleDefault: "solid",
  familyDefault: ne,
  cssPrefix: br,
  replacementClass: gr,
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
Fe.familyPrefix && (Fe.cssPrefix = Fe.familyPrefix);
const Pe = h(h({}, Tr), Fe);
Pe.autoReplaceSvg || (Pe.observeMutations = !1);
const A = {};
Object.keys(Tr).forEach((e) => {
  Object.defineProperty(A, e, {
    enumerable: !0,
    set: function(t) {
      Pe[e] = t, Ne.forEach((n) => n(A));
    },
    get: function() {
      return Pe[e];
    }
  });
});
Object.defineProperty(A, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Pe.cssPrefix = e, Ne.forEach((t) => t(A));
  },
  get: function() {
    return Pe.cssPrefix;
  }
});
pe.FontAwesomeConfig = A;
const Ne = [];
function wi(e) {
  return Ne.push(e), () => {
    Ne.splice(Ne.indexOf(e), 1);
  };
}
const fe = wt, oe = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Pi(e) {
  if (!e || !ue)
    return;
  const t = Z.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = Z.head.childNodes;
  let r = null;
  for (let a = n.length - 1; a > -1; a--) {
    const i = n[a], o = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
  }
  return Z.head.insertBefore(t, r), e;
}
const Si = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Ie() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Si[Math.random() * 62 | 0];
  return t;
}
function Se(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Gt(e) {
  return e.classList ? Se(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Or(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ki(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Or(e[n]), '" '), "").trim();
}
function at(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Vt(e) {
  return e.size !== oe.size || e.x !== oe.x || e.y !== oe.y || e.rotate !== oe.rotate || e.flipX || e.flipY;
}
function Ai(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), c = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(i, " ").concat(o, " ").concat(c)
  }, d = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: l,
    path: d
  };
}
function _i(e) {
  let {
    transform: t,
    width: n = wt,
    height: r = wt,
    startCentered: a = !1
  } = e, i = "";
  return a && dr ? i += "translate(".concat(t.x / fe - n / 2, "em, ").concat(t.y / fe - r / 2, "em) ") : a ? i += "translate(calc(-50% + ".concat(t.x / fe, "em), calc(-50% + ").concat(t.y / fe, "em)) ") : i += "translate(".concat(t.x / fe, "em, ").concat(t.y / fe, "em) "), i += "scale(".concat(t.size / fe * (t.flipX ? -1 : 1), ", ").concat(t.size / fe * (t.flipY ? -1 : 1), ") "), i += "rotate(".concat(t.rotate, "deg) "), i;
}
var Ci = `:root, :host {
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
function wr() {
  const e = br, t = gr, n = A.cssPrefix, r = A.replacementClass;
  let a = Ci;
  if (n !== e || r !== t) {
    const i = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), c = new RegExp("\\.".concat(t), "g");
    a = a.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(c, ".".concat(r));
  }
  return a;
}
let Cn = !1;
function vt() {
  A.autoAddCss && !Cn && (Pi(wr()), Cn = !0);
}
var Ri = {
  mixout() {
    return {
      dom: {
        css: wr,
        insertCss: vt
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        vt();
      },
      beforeI2svg() {
        vt();
      }
    };
  }
};
const le = pe || {};
le[ce] || (le[ce] = {});
le[ce].styles || (le[ce].styles = {});
le[ce].hooks || (le[ce].hooks = {});
le[ce].shims || (le[ce].shims = []);
var se = le[ce];
const Pr = [], Sr = function() {
  Z.removeEventListener("DOMContentLoaded", Sr), et = 1, Pr.map((e) => e());
};
let et = !1;
ue && (et = (Z.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Z.readyState), et || Z.addEventListener("DOMContentLoaded", Sr));
function Fi(e) {
  ue && (et ? setTimeout(e, 0) : Pr.push(e));
}
function Me(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Or(e) : "<".concat(t, " ").concat(ki(n), ">").concat(r.map(Me).join(""), "</").concat(t, ">");
}
function Rn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var ht = function(t, n, r, a) {
  var i = Object.keys(t), o = i.length, c = n, l, d, p;
  for (r === void 0 ? (l = 1, p = t[i[0]]) : (l = 0, p = r); l < o; l++)
    d = i[l], p = c(p, t[d], d, t);
  return p;
};
function Ni(e) {
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
function _t(e) {
  const t = Ni(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Ii(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function Fn(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Ct(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = Fn(t);
  typeof se.hooks.addPack == "function" && !r ? se.hooks.addPack(e, Fn(t)) : se.styles[e] = h(h({}, se.styles[e] || {}), a), e === "fas" && Ct("fa", t);
}
const {
  styles: De,
  shims: Di
} = se, kr = Object.keys(Bt), ji = kr.reduce((e, t) => (e[t] = Object.keys(Bt[t]), e), {});
let Kt = null, Ar = {}, _r = {}, Cr = {}, Rr = {}, Fr = {};
function Mi(e) {
  return ~xi.indexOf(e);
}
function Li(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Mi(a) ? a : null;
}
const Nr = () => {
  const e = (r) => ht(De, (a, i, o) => (a[o] = ht(i, r, {}), a), {});
  Ar = e((r, a, i) => (a[3] && (r[a[3]] = i), a[2] && a[2].filter((c) => typeof c == "number").forEach((c) => {
    r[c.toString(16)] = i;
  }), r)), _r = e((r, a, i) => (r[i] = i, a[2] && a[2].filter((c) => typeof c == "string").forEach((c) => {
    r[c] = i;
  }), r)), Fr = e((r, a, i) => {
    const o = a[2];
    return r[i] = i, o.forEach((c) => {
      r[c] = i;
    }), r;
  });
  const t = "far" in De || A.autoFetchSvg, n = ht(Di, (r, a) => {
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
  Cr = n.names, Rr = n.unicodes, Kt = it(A.styleDefault, {
    family: A.familyDefault
  });
};
wi((e) => {
  Kt = it(e.styleDefault, {
    family: A.familyDefault
  });
});
Nr();
function Ht(e, t) {
  return (Ar[e] || {})[t];
}
function zi(e, t) {
  return (_r[e] || {})[t];
}
function be(e, t) {
  return (Fr[e] || {})[t];
}
function Ir(e) {
  return Cr[e] || {
    prefix: null,
    iconName: null
  };
}
function $i(e) {
  const t = Rr[e], n = Ht("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function me() {
  return Kt;
}
const Dr = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Yi(e) {
  let t = ne;
  const n = kr.reduce((r, a) => (r[a] = "".concat(A.cssPrefix, "-").concat(a), r), {});
  return vr.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => ji[r].includes(a))) && (t = r);
  }), t;
}
function it(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = ne
  } = t, r = hi[n][e];
  if (n === rt && !e)
    return "fad";
  const a = _n[n][e] || _n[n][r], i = e in se.styles ? e : null;
  return a || i || null;
}
function Wi(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = Li(A.cssPrefix, r);
    a ? n = a : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function Nn(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function ot(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const a = Ot.concat(ai), i = Nn(e.filter((g) => a.includes(g))), o = Nn(e.filter((g) => !Ot.includes(g))), c = i.filter((g) => (r = g, !mr.includes(g))), [l = null] = c, d = Yi(i), p = h(h({}, Wi(o)), {}, {
    prefix: it(l, {
      family: d
    })
  });
  return h(h(h({}, p), Gi({
    values: e,
    family: d,
    styles: De,
    config: A,
    canonical: p,
    givenPrefix: r
  })), Ui(n, r, p));
}
function Ui(e, t, n) {
  let {
    prefix: r,
    iconName: a
  } = n;
  if (e || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  const i = t === "fa" ? Ir(a) : {}, o = be(r, a);
  return a = i.iconName || o || a, r = i.prefix || r, r === "far" && !De.far && De.fas && !A.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const qi = vr.filter((e) => e !== ne || e !== rt), Bi = Object.keys(Tt).filter((e) => e !== ne).map((e) => Object.keys(Tt[e])).flat();
function Gi(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: i = {},
    config: o = {}
  } = e, c = n === rt, l = t.includes("fa-duotone") || t.includes("fad"), d = o.familyDefault === "duotone", p = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!c && (l || d || p) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && qi.includes(n) && (Object.keys(i).find((y) => Bi.includes(y)) || o.autoFetchSvg)) {
    const y = Xa.get(n).defaultShortPrefixId;
    r.prefix = y, r.iconName = be(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = me() || "fas"), r;
}
class Vi {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((i) => {
      this.definitions[i] = h(h({}, this.definitions[i] || {}), a[i]), Ct(i, a[i]);
      const o = Bt[ne][i];
      o && Ct(o, a[i]), Nr();
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
      } = r[a], l = c[2];
      t[i] || (t[i] = {}), l.length > 0 && l.forEach((d) => {
        typeof d == "string" && (t[i][d] = c);
      }), t[i][o] = c;
    }), t;
  }
}
let In = [], Te = {};
const we = {}, Ki = Object.keys(we);
function Hi(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return In = e, Te = {}, Object.keys(we).forEach((r) => {
    Ki.indexOf(r) === -1 && delete we[r];
  }), In.forEach((r) => {
    const a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach((i) => {
      typeof a[i] == "function" && (n[i] = a[i]), typeof a[i] == "object" && Object.keys(a[i]).forEach((o) => {
        n[i] || (n[i] = {}), n[i][o] = a[i][o];
      });
    }), r.hooks) {
      const i = r.hooks();
      Object.keys(i).forEach((o) => {
        Te[o] || (Te[o] = []), Te[o].push(i[o]);
      });
    }
    r.provides && r.provides(we);
  }), n;
}
function Rt(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (Te[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...r]);
  }), t;
}
function xe(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (Te[e] || []).forEach((i) => {
    i.apply(null, n);
  });
}
function ve() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return we[e] ? we[e].apply(null, t) : void 0;
}
function Ft(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || me();
  if (t)
    return t = be(n, t) || t, Rn(jr.definitions, n, t) || Rn(se.styles, n, t);
}
const jr = new Vi(), Xi = () => {
  A.autoReplaceSvg = !1, A.observeMutations = !1, xe("noAuto");
}, Ji = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return ue ? (xe("beforeI2svg", e), ve("pseudoElements2svg", e), ve("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    A.autoReplaceSvg === !1 && (A.autoReplaceSvg = !0), A.observeMutations = !0, Fi(() => {
      Qi({
        autoReplaceSvgRoot: t
      }), xe("watch", e);
    });
  }
}, Zi = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: be(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = it(e[0]);
      return {
        prefix: n,
        iconName: be(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(A.cssPrefix, "-")) > -1 || e.match(bi))) {
      const t = ot(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || me(),
        iconName: be(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = me();
      return {
        prefix: t,
        iconName: be(t, e) || e
      };
    }
  }
}, re = {
  noAuto: Xi,
  config: A,
  dom: Ji,
  parse: Zi,
  library: jr,
  findIconDefinition: Ft,
  toHtml: Me
}, Qi = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = Z
  } = e;
  (Object.keys(se.styles).length > 0 || A.autoFetchSvg) && ue && A.autoReplaceSvg && re.dom.i2svg({
    node: t
  });
};
function st(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Me(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!ue) return;
      const n = Z.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function eo(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: i,
    transform: o
  } = e;
  if (Vt(o) && n.found && !r.found) {
    const {
      width: c,
      height: l
    } = n, d = {
      x: c / l / 2,
      y: 0.5
    };
    a.style = at(h(h({}, i), {}, {
      "transform-origin": "".concat(d.x + o.x / 16, "em ").concat(d.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function to(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: a,
    symbol: i
  } = e;
  const o = i === !0 ? "".concat(t, "-").concat(A.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: h(h({}, a), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function Xt(e) {
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
    maskId: l,
    titleId: d,
    extra: p,
    watchable: g = !1
  } = e, {
    width: y,
    height: _
  } = n.found ? n : t, F = ti.includes(r), M = [A.replacementClass, a ? "".concat(A.cssPrefix, "-").concat(a) : ""].filter((b) => p.classes.indexOf(b) === -1).filter((b) => b !== "" || !!b).concat(p.classes).join(" ");
  let I = {
    children: [],
    attributes: h(h({}, p.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: M,
      role: p.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(y, " ").concat(_)
    })
  };
  const q = F && !~p.classes.indexOf("fa-fw") ? {
    width: "".concat(y / _ * 16 * 0.0625, "em")
  } : {};
  g && (I.attributes[Ee] = ""), c && (I.children.push({
    tag: "title",
    attributes: {
      id: I.attributes["aria-labelledby"] || "title-".concat(d || Ie())
    },
    children: [c]
  }), delete I.attributes.title);
  const H = h(h({}, I), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: l,
    transform: i,
    symbol: o,
    styles: h(h({}, q), p.styles)
  }), {
    children: L,
    attributes: B
  } = n.found && t.found ? ve("generateAbstractMask", H) || {
    children: [],
    attributes: {}
  } : ve("generateAbstractIcon", H) || {
    children: [],
    attributes: {}
  };
  return H.children = L, H.attributes = B, o ? to(H) : eo(H);
}
function Dn(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: a,
    title: i,
    extra: o,
    watchable: c = !1
  } = e, l = h(h(h({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  c && (l[Ee] = "");
  const d = h({}, o.styles);
  Vt(a) && (d.transform = _i({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), d["-webkit-transform"] = d.transform);
  const p = at(d);
  p.length > 0 && (l.style = p);
  const g = [];
  return g.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), i && g.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), g;
}
function no(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, a = h(h(h({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), i = at(r.styles);
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
  styles: bt
} = se;
function Nt(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(A.cssPrefix, "-").concat(mt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(A.cssPrefix, "-").concat(mt.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(A.cssPrefix, "-").concat(mt.PRIMARY),
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
const ro = {
  found: !1,
  width: 512,
  height: 512
};
function ao(e, t) {
  !yr && !A.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function It(e, t) {
  let n = t;
  return t === "fa" && A.styleDefault !== null && (t = me()), new Promise((r, a) => {
    if (n === "fa") {
      const i = Ir(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && bt[t] && bt[t][e]) {
      const i = bt[t][e];
      return r(Nt(i));
    }
    ao(e, t), r(h(h({}, ro), {}, {
      icon: A.showMissingIcons && e ? ve("missingIconAbstract") || {} : {}
    }));
  });
}
const jn = () => {
}, Dt = A.measurePerformance && Be && Be.mark && Be.measure ? Be : {
  mark: jn,
  measure: jn
}, Ce = 'FA "6.7.2"', io = (e) => (Dt.mark("".concat(Ce, " ").concat(e, " begins")), () => Mr(e)), Mr = (e) => {
  Dt.mark("".concat(Ce, " ").concat(e, " ends")), Dt.measure("".concat(Ce, " ").concat(e), "".concat(Ce, " ").concat(e, " begins"), "".concat(Ce, " ").concat(e, " ends"));
};
var Jt = {
  begin: io,
  end: Mr
};
const Ke = () => {
};
function Mn(e) {
  return typeof (e.getAttribute ? e.getAttribute(Ee) : null) == "string";
}
function oo(e) {
  const t = e.getAttribute ? e.getAttribute(Ut) : null, n = e.getAttribute ? e.getAttribute(qt) : null;
  return t && n;
}
function so(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(A.replacementClass);
}
function co() {
  return A.autoReplaceSvg === !0 ? He.replace : He[A.autoReplaceSvg] || He.replace;
}
function lo(e) {
  return Z.createElementNS("http://www.w3.org/2000/svg", e);
}
function uo(e) {
  return Z.createElement(e);
}
function Lr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? lo : uo
  } = t;
  if (typeof e == "string")
    return Z.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(i) {
    r.setAttribute(i, e.attributes[i]);
  }), (e.children || []).forEach(function(i) {
    r.appendChild(Lr(i, {
      ceFn: n
    }));
  }), r;
}
function fo(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const He = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(Lr(n), t);
      }), t.getAttribute(Ee) === null && A.keepOriginalSource) {
        let n = Z.createComment(fo(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Gt(t).indexOf(A.replacementClass))
      return He.replace(e);
    const r = new RegExp("".concat(A.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const i = n[0].attributes.class.split(" ").reduce((o, c) => (c === A.replacementClass || c.match(r) ? o.toSvg.push(c) : o.toNode.push(c), o), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
    }
    const a = n.map((i) => Me(i)).join(`
`);
    t.setAttribute(Ee, ""), t.innerHTML = a;
  }
};
function Ln(e) {
  e();
}
function zr(e, t) {
  const n = typeof t == "function" ? t : Ke;
  if (e.length === 0)
    n();
  else {
    let r = Ln;
    A.mutateApproach === mi && (r = pe.requestAnimationFrame || Ln), r(() => {
      const a = co(), i = Jt.begin("mutate");
      e.map(a), i(), n();
    });
  }
}
let Zt = !1;
function $r() {
  Zt = !0;
}
function jt() {
  Zt = !1;
}
let tt = null;
function zn(e) {
  if (!Pn || !A.observeMutations)
    return;
  const {
    treeCallback: t = Ke,
    nodeCallback: n = Ke,
    pseudoElementsCallback: r = Ke,
    observeMutationsRoot: a = Z
  } = e;
  tt = new Pn((i) => {
    if (Zt) return;
    const o = me();
    Se(i).forEach((c) => {
      if (c.type === "childList" && c.addedNodes.length > 0 && !Mn(c.addedNodes[0]) && (A.searchPseudoElements && r(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && A.searchPseudoElements && r(c.target.parentNode), c.type === "attributes" && Mn(c.target) && ~Ei.indexOf(c.attributeName))
        if (c.attributeName === "class" && oo(c.target)) {
          const {
            prefix: l,
            iconName: d
          } = ot(Gt(c.target));
          c.target.setAttribute(Ut, l || o), d && c.target.setAttribute(qt, d);
        } else so(c.target) && n(c.target);
    });
  }), ue && tt.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function po() {
  tt && tt.disconnect();
}
function mo(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const i = a.split(":"), o = i[0], c = i.slice(1);
    return o && c.length > 0 && (r[o] = c.join(":").trim()), r;
  }, {})), n;
}
function vo(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = ot(Gt(e));
  return a.prefix || (a.prefix = me()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = zi(a.prefix, e.innerText) || Ht(a.prefix, _t(e.innerText))), !a.iconName && A.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function ho(e) {
  const t = Se(e.attributes).reduce((a, i) => (a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return A.autoA11y && (n ? t["aria-labelledby"] = "".concat(A.replacementClass, "-title-").concat(r || Ie()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function bo() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: oe,
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
function $n(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: a
  } = vo(e), i = ho(e), o = Rt("parseNodeAttributes", {}, e);
  let c = t.styleParser ? mo(e) : [];
  return h({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: oe,
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
  styles: go
} = se;
function Yr(e) {
  const t = A.autoReplaceSvg === "nest" ? $n(e, {
    styleParser: !1
  }) : $n(e);
  return ~t.extra.classes.indexOf(xr) ? ve("generateLayersText", e, t) : ve("generateSvgReplacementMutation", e, t);
}
function yo() {
  return [...Za, ...Ot];
}
function Yn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ue) return Promise.resolve();
  const n = Z.documentElement.classList, r = (p) => n.add("".concat(An, "-").concat(p)), a = (p) => n.remove("".concat(An, "-").concat(p)), i = A.autoFetchSvg ? yo() : mr.concat(Object.keys(go));
  i.includes("fa") || i.push("fa");
  const o = [".".concat(xr, ":not([").concat(Ee, "])")].concat(i.map((p) => ".".concat(p, ":not([").concat(Ee, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let c = [];
  try {
    c = Se(e.querySelectorAll(o));
  } catch {
  }
  if (c.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const l = Jt.begin("onTree"), d = c.reduce((p, g) => {
    try {
      const y = Yr(g);
      y && p.push(y);
    } catch (y) {
      yr || y.name === "MissingIcon" && console.error(y);
    }
    return p;
  }, []);
  return new Promise((p, g) => {
    Promise.all(d).then((y) => {
      zr(y, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), l(), p();
      });
    }).catch((y) => {
      l(), g(y);
    });
  });
}
function Eo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Yr(e).then((n) => {
    n && zr([n], t);
  });
}
function xo(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Ft(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : Ft(a || {})), e(r, h(h({}, n), {}, {
      mask: a
    }));
  };
}
const To = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = oe,
    symbol: r = !1,
    mask: a = null,
    maskId: i = null,
    title: o = null,
    titleId: c = null,
    classes: l = [],
    attributes: d = {},
    styles: p = {}
  } = t;
  if (!e) return;
  const {
    prefix: g,
    iconName: y,
    icon: _
  } = e;
  return st(h({
    type: "icon"
  }, e), () => (xe("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), A.autoA11y && (o ? d["aria-labelledby"] = "".concat(A.replacementClass, "-title-").concat(c || Ie()) : (d["aria-hidden"] = "true", d.focusable = "false")), Xt({
    icons: {
      main: Nt(_),
      mask: a ? Nt(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: g,
    iconName: y,
    transform: h(h({}, oe), n),
    symbol: r,
    title: o,
    maskId: i,
    titleId: c,
    extra: {
      attributes: d,
      styles: p,
      classes: l
    }
  })));
};
var Oo = {
  mixout() {
    return {
      icon: xo(To)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Yn, e.nodeCallback = Eo, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = Z,
        callback: r = () => {
        }
      } = t;
      return Yn(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: a,
        titleId: i,
        prefix: o,
        transform: c,
        symbol: l,
        mask: d,
        maskId: p,
        extra: g
      } = n;
      return new Promise((y, _) => {
        Promise.all([It(r, o), d.iconName ? It(d.iconName, d.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((F) => {
          let [M, I] = F;
          y([t, Xt({
            icons: {
              main: M,
              mask: I
            },
            prefix: o,
            iconName: r,
            transform: c,
            symbol: l,
            maskId: p,
            title: a,
            titleId: i,
            extra: g,
            watchable: !0
          })]);
        }).catch(_);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        transform: i,
        styles: o
      } = t;
      const c = at(o);
      c.length > 0 && (r.style = c);
      let l;
      return Vt(i) && (l = ve("generateAbstractTransformGrouping", {
        main: a,
        transform: i,
        containerWidth: a.width,
        iconWidth: a.width
      })), n.push(l || a.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, wo = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return st({
          type: "layer"
        }, () => {
          xe("beforeDOMElementCreation", {
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
              class: ["".concat(A.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, Po = {
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
        return st({
          type: "counter",
          content: e
        }, () => (xe("beforeDOMElementCreation", {
          content: e,
          params: t
        }), no({
          content: e.toString(),
          title: n,
          extra: {
            attributes: a,
            styles: i,
            classes: ["".concat(A.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, So = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = oe,
          title: r = null,
          classes: a = [],
          attributes: i = {},
          styles: o = {}
        } = t;
        return st({
          type: "text",
          content: e
        }, () => (xe("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Dn({
          content: e,
          transform: h(h({}, oe), n),
          title: r,
          extra: {
            attributes: i,
            styles: o,
            classes: ["".concat(A.cssPrefix, "-layers-text"), ...a]
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
      if (dr) {
        const l = parseInt(getComputedStyle(t).fontSize, 10), d = t.getBoundingClientRect();
        o = d.width / l, c = d.height / l;
      }
      return A.autoA11y && !r && (i.attributes["aria-hidden"] = "true"), Promise.resolve([t, Dn({
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
const ko = new RegExp('"', "ug"), Wn = [1105920, 1112319], Un = h(h(h(h({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Ha), di), ii), Mt = Object.keys(Un).reduce((e, t) => (e[t.toLowerCase()] = Un[t], e), {}), Ao = Object.keys(Mt).reduce((e, t) => {
  const n = Mt[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function _o(e) {
  const t = e.replace(ko, ""), n = Ii(t, 0), r = n >= Wn[0] && n <= Wn[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: _t(a ? t[0] : t),
    isSecondary: r || a
  };
}
function Co(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (Mt[n] || {})[a] || Ao[n];
}
function qn(e, t) {
  const n = "".concat(pi).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const o = Se(e.children).filter((y) => y.getAttribute(Pt) === t)[0], c = pe.getComputedStyle(e, t), l = c.getPropertyValue("font-family"), d = l.match(gi), p = c.getPropertyValue("font-weight"), g = c.getPropertyValue("content");
    if (o && !d)
      return e.removeChild(o), r();
    if (d && g !== "none" && g !== "") {
      const y = c.getPropertyValue("content");
      let _ = Co(l, p);
      const {
        value: F,
        isSecondary: M
      } = _o(y), I = d[0].startsWith("FontAwesome");
      let q = Ht(_, F), H = q;
      if (I) {
        const L = $i(F);
        L.iconName && L.prefix && (q = L.iconName, _ = L.prefix);
      }
      if (q && !M && (!o || o.getAttribute(Ut) !== _ || o.getAttribute(qt) !== H)) {
        e.setAttribute(n, H), o && e.removeChild(o);
        const L = bo(), {
          extra: B
        } = L;
        B.attributes[Pt] = t, It(q, _).then((b) => {
          const Q = Xt(h(h({}, L), {}, {
            icons: {
              main: b,
              mask: Dr()
            },
            prefix: _,
            iconName: H,
            extra: B,
            watchable: !0
          })), P = Z.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(P, e.firstChild) : e.appendChild(P), P.outerHTML = Q.map((x) => Me(x)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function Ro(e) {
  return Promise.all([qn(e, "::before"), qn(e, "::after")]);
}
function Fo(e) {
  return e.parentNode !== document.head && !~vi.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Pt) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Bn(e) {
  if (ue)
    return new Promise((t, n) => {
      const r = Se(e.querySelectorAll("*")).filter(Fo).map(Ro), a = Jt.begin("searchPseudoElements");
      $r(), Promise.all(r).then(() => {
        a(), jt(), t();
      }).catch(() => {
        a(), jt(), n();
      });
    });
}
var No = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Bn, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = Z
      } = t;
      A.searchPseudoElements && Bn(n);
    };
  }
};
let Gn = !1;
var Io = {
  mixout() {
    return {
      dom: {
        unwatch() {
          $r(), Gn = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        zn(Rt("mutationObserverCallbacks", {}));
      },
      noAuto() {
        po();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Gn ? jt() : zn(Rt("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Vn = (e) => {
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
var Do = {
  mixout() {
    return {
      parse: {
        transform: (e) => Vn(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Vn(n)), e;
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
      }, c = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), l = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), d = "rotate(".concat(r.rotate, " 0 0)"), p = {
        transform: "".concat(c, " ").concat(l, " ").concat(d)
      }, g = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, y = {
        outer: o,
        inner: p,
        path: g
      };
      return {
        tag: "g",
        attributes: h({}, y.outer),
        children: [{
          tag: "g",
          attributes: h({}, y.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: h(h({}, n.icon.attributes), y.path)
          }]
        }]
      };
    };
  }
};
const gt = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Kn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function jo(e) {
  return e.tag === "g" ? e.children : [e];
}
var Mo = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? ot(n.split(" ").map((a) => a.trim())) : Dr();
        return r.prefix || (r.prefix = me()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
        width: l,
        icon: d
      } = a, {
        width: p,
        icon: g
      } = i, y = Ai({
        transform: c,
        containerWidth: p,
        iconWidth: l
      }), _ = {
        tag: "rect",
        attributes: h(h({}, gt), {}, {
          fill: "white"
        })
      }, F = d.children ? {
        children: d.children.map(Kn)
      } : {}, M = {
        tag: "g",
        attributes: h({}, y.inner),
        children: [Kn(h({
          tag: d.tag,
          attributes: h(h({}, d.attributes), y.path)
        }, F))]
      }, I = {
        tag: "g",
        attributes: h({}, y.outer),
        children: [M]
      }, q = "mask-".concat(o || Ie()), H = "clip-".concat(o || Ie()), L = {
        tag: "mask",
        attributes: h(h({}, gt), {}, {
          id: q,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [_, I]
      }, B = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: H
          },
          children: jo(g)
        }, L]
      };
      return n.push(B, {
        tag: "rect",
        attributes: h({
          fill: "currentColor",
          "clip-path": "url(#".concat(H, ")"),
          mask: "url(#".concat(q, ")")
        }, gt)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Lo = {
  provides(e) {
    let t = !1;
    pe.matchMedia && (t = pe.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
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
      }), o = {
        tag: "circle",
        attributes: h(h({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || o.children.push({
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
      }), n.push(o), n.push({
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
}, zo = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, $o = [Ri, Oo, wo, Po, So, No, Io, Do, Mo, Lo, zo];
Hi($o, {
  mixoutsTo: re
});
re.noAuto;
re.config;
re.library;
re.dom;
const Lt = re.parse;
re.findIconDefinition;
re.toHtml;
const Yo = re.icon;
re.layer;
re.text;
re.counter;
function Hn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hn(Object(n), !0).forEach(function(r) {
      Oe(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function nt(e) {
  "@babel/helpers - typeof";
  return nt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nt(e);
}
function Oe(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Wo(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Uo(e, t) {
  if (e == null) return {};
  var n = Wo(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function zt(e) {
  return qo(e) || Bo(e) || Go(e) || Vo();
}
function qo(e) {
  if (Array.isArray(e)) return $t(e);
}
function Bo(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Go(e, t) {
  if (e) {
    if (typeof e == "string") return $t(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $t(e, t);
  }
}
function $t(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Vo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ko(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, i = e.bounce, o = e.shake, c = e.flash, l = e.spin, d = e.spinPulse, p = e.spinReverse, g = e.pulse, y = e.fixedWidth, _ = e.inverse, F = e.border, M = e.listItem, I = e.flip, q = e.size, H = e.rotation, L = e.pull, B = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": i,
    "fa-shake": o,
    "fa-flash": c,
    "fa-spin": l,
    "fa-spin-reverse": p,
    "fa-spin-pulse": d,
    "fa-pulse": g,
    "fa-fw": y,
    "fa-inverse": _,
    "fa-border": F,
    "fa-li": M,
    "fa-flip": I === !0,
    "fa-flip-horizontal": I === "horizontal" || I === "both",
    "fa-flip-vertical": I === "vertical" || I === "both"
  }, Oe(t, "fa-".concat(q), typeof q < "u" && q !== null), Oe(t, "fa-rotate-".concat(H), typeof H < "u" && H !== null && H !== 0), Oe(t, "fa-pull-".concat(L), typeof L < "u" && L !== null), Oe(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(B).map(function(b) {
    return B[b] ? b : null;
  }).filter(function(b) {
    return b;
  });
}
function Ho(e) {
  return e = e - 0, e === e;
}
function Wr(e) {
  return Ho(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Xo = ["style"];
function Jo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Zo(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = Wr(n.slice(0, r)), i = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Jo(a)] = i : t[a] = i, t;
  }, {});
}
function Ur(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(l) {
    return Ur(e, l);
  }), a = Object.keys(t.attributes || {}).reduce(function(l, d) {
    var p = t.attributes[d];
    switch (d) {
      case "class":
        l.attrs.className = p, delete t.attributes.class;
        break;
      case "style":
        l.attrs.style = Zo(p);
        break;
      default:
        d.indexOf("aria-") === 0 || d.indexOf("data-") === 0 ? l.attrs[d.toLowerCase()] = p : l.attrs[Wr(d)] = p;
    }
    return l;
  }, {
    attrs: {}
  }), i = n.style, o = i === void 0 ? {} : i, c = Uo(n, Xo);
  return a.attrs.style = ie(ie({}, a.attrs.style), o), e.apply(void 0, [t.tag, ie(ie({}, a.attrs), c)].concat(zt(r)));
}
var qr = !1;
try {
  qr = process.env.NODE_ENV === "production";
} catch {
}
function Qo() {
  if (!qr && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Xn(e) {
  if (e && nt(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Lt.icon)
    return Lt.icon(e);
  if (e === null)
    return null;
  if (e && nt(e) === "object" && e.prefix && e.iconName)
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
function yt(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Oe({}, e, t) : {};
}
var Jn = {
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
}, Qt = /* @__PURE__ */ ge.forwardRef(function(e, t) {
  var n = ie(ie({}, Jn), e), r = n.icon, a = n.mask, i = n.symbol, o = n.className, c = n.title, l = n.titleId, d = n.maskId, p = Xn(r), g = yt("classes", [].concat(zt(Ko(n)), zt((o || "").split(" ")))), y = yt("transform", typeof n.transform == "string" ? Lt.transform(n.transform) : n.transform), _ = yt("mask", Xn(a)), F = Yo(p, ie(ie(ie(ie({}, g), y), _), {}, {
    symbol: i,
    title: c,
    titleId: l,
    maskId: d
  }));
  if (!F)
    return Qo("Could not find icon", p), null;
  var M = F.abstract, I = {
    ref: t
  };
  return Object.keys(n).forEach(function(q) {
    Jn.hasOwnProperty(q) || (I[q] = n[q]);
  }), es(M[0], I);
});
Qt.displayName = "FontAwesomeIcon";
Qt.propTypes = {
  beat: w.bool,
  border: w.bool,
  beatFade: w.bool,
  bounce: w.bool,
  className: w.string,
  fade: w.bool,
  flash: w.bool,
  mask: w.oneOfType([w.object, w.array, w.string]),
  maskId: w.string,
  fixedWidth: w.bool,
  inverse: w.bool,
  flip: w.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: w.oneOfType([w.object, w.array, w.string]),
  listItem: w.bool,
  pull: w.oneOf(["right", "left"]),
  pulse: w.bool,
  rotation: w.oneOf([0, 90, 180, 270]),
  shake: w.bool,
  size: w.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: w.bool,
  spinPulse: w.bool,
  spinReverse: w.bool,
  symbol: w.oneOfType([w.bool, w.string]),
  title: w.string,
  titleId: w.string,
  transform: w.oneOfType([w.string, w.object]),
  swapOpacity: w.bool
};
var es = Ur.bind(null, ge.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const ts = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, ns = ts, Br = ({
  heading: e,
  text: t,
  actionButton: n,
  onClick: r,
  className: a,
  children: i,
  media: o,
  mediaPosition: c = "left",
  mediaExdent: l = !1,
  mediaFirst: d = !1,
  mediaInset: p = !1,
  ...g
}) => {
  const _ = [
    "usa-card",
    o && "usa-card--media",
    l && "usa-card--exdent",
    d && "usa-card--header-first",
    p && "usa-card--inset",
    a
  ].filter(Boolean).join(" "), F = n && r ? ge.cloneElement(n, { onClick: r }) : n, M = () => o ? /* @__PURE__ */ ee.jsx("div", { className: `usa-card__media ${l ? "usa-card__media--exdent" : ""}`, children: /* @__PURE__ */ ee.jsx("div", { className: "usa-card__img", children: typeof o == "string" ? /* @__PURE__ */ ee.jsx("img", { src: o, alt: "" }) : o }) }) : null;
  return /* @__PURE__ */ ee.jsx("div", { className: _, ...g, children: /* @__PURE__ */ ee.jsxs("div", { className: "usa-card__container", children: [
    o && M(),
    e && /* @__PURE__ */ ee.jsx("div", { className: "usa-card__header", children: /* @__PURE__ */ ee.jsx("h4", { className: "usa-card__heading", children: e }) }),
    /* @__PURE__ */ ee.jsxs("div", { className: "usa-card__body", children: [
      t && /* @__PURE__ */ ee.jsx("p", { children: t }),
      i
    ] }),
    n && /* @__PURE__ */ ee.jsx("div", { className: "usa-card__footer", children: F })
  ] }) });
};
Br.propTypes = {
  heading: w.string,
  text: w.string,
  actionButton: w.node,
  onClick: w.func,
  className: w.string,
  children: w.node,
  media: w.oneOfType([w.string, w.node]),
  mediaPosition: w.oneOf(["left", "right"]),
  mediaExdent: w.bool,
  mediaFirst: w.bool,
  mediaInset: w.bool
};
const rs = ({
  isOpen: e = !1,
  onClose: t,
  onConfirm: n,
  heading: r,
  children: a,
  confirmButton: i,
  cancelButton: o,
  size: c = "default",
  forcedAction: l = !1,
  className: d,
  ariaLabelledBy: p,
  ariaDescribedBy: g,
  ...y
}) => {
  const _ = tn(null), F = tn(null);
  Gr(() => {
    const m = _.current;
    if (m)
      if (e)
        m.showModal(), m.classList.add("usa-modal--visible"), document.body.classList.add("usa-js-modal--active");
      else {
        m.classList.remove("usa-modal--visible");
        const j = setTimeout(() => {
          m.open && m.close(), document.body.classList.remove("usa-js-modal--active");
        }, 150);
        return () => clearTimeout(j);
      }
  }, [e]);
  const M = ze((m) => {
    m.key === "Escape" && !l && t && (m.preventDefault(), t());
  }, [l, t]), I = ze((m) => {
    m.target === _.current && !l && t && t();
  }, [l, t]), q = ze(() => {
    t && t();
  }, [t]), H = ze(() => {
    n && n();
  }, [n]), L = i && ge.cloneElement(i, {
    onClick: (m) => {
      i.props.onClick && i.props.onClick(m), H();
    },
    tabIndex: 0
    // Ensure button is focusable
  }), B = o && ge.cloneElement(o, {
    onClick: (m) => {
      o.props.onClick && o.props.onClick(m), q();
    },
    tabIndex: 0
    // Ensure button is focusable
  }), b = (L || B) && /* @__PURE__ */ ee.jsxs("div", { className: "usa-button-group", children: [
    L && /* @__PURE__ */ ee.jsx("div", { className: "usa-button-group__item", children: L }),
    B && /* @__PURE__ */ ee.jsx("div", { className: "usa-button-group__item", children: B })
  ] }), Q = [
    "usa-modal",
    c === "large" && "usa-modal--lg",
    l && "usa-modal--forced-action",
    d
  ].filter(Boolean).join(" "), Y = !!(L || B) || !l;
  return /* @__PURE__ */ ee.jsx(
    "dialog",
    {
      ref: _,
      className: Q,
      onKeyDown: M,
      onClick: I,
      "aria-labelledby": p,
      "aria-describedby": g,
      "aria-modal": "true",
      ...y,
      children: /* @__PURE__ */ ee.jsx(
        za.FocusTrap,
        {
          active: e,
          focusTrapOptions: {
            allowOutsideClick: !l,
            escapeDeactivates: !l,
            returnFocusOnDeactivate: !0,
            clickOutsideDeactivates: !l,
            initialFocus: () => {
              const m = F.current;
              if (!m) return !1;
              const j = m.querySelector('button:not([disabled]):not([aria-hidden="true"])');
              if (j)
                return j;
              const N = m.querySelector('[tabindex="0"], input, select, textarea, button, a[href]');
              return N || m;
            },
            setReturnFocus: (m) => m,
            fallbackFocus: () => F.current ? (F.current.setAttribute("tabindex", "0"), F.current) : !1
          },
          children: /* @__PURE__ */ ee.jsxs(
            "div",
            {
              ref: F,
              className: "usa-modal__container",
              tabIndex: Y ? void 0 : 0,
              children: [
                /* @__PURE__ */ ee.jsxs(
                  Br,
                  {
                    heading: r,
                    actionButton: b,
                    className: "usa-modal__card",
                    children: [
                      !l && /* @__PURE__ */ ee.jsx(
                        "button",
                        {
                          type: "button",
                          className: "usa-modal__close",
                          "aria-label": "Close this modal",
                          onClick: q,
                          tabIndex: "0",
                          children: /* @__PURE__ */ ee.jsx(Qt, { icon: ns, className: "usa-icon" })
                        }
                      ),
                      a
                    ]
                  }
                ),
                !Y && /* @__PURE__ */ ee.jsx(
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
                    onFocus: (m) => {
                      F.current && F.current.focus();
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
rs.propTypes = {
  /** Whether the modal is open */
  isOpen: w.bool,
  /** Function called when modal should close */
  onClose: w.func,
  /** Function called when primary action is confirmed */
  onConfirm: w.func,
  /** Modal heading text */
  heading: w.string,
  /** Modal content */
  children: w.node,
  /** Primary action button element */
  confirmButton: w.element,
  /** Secondary/cancel button element */
  cancelButton: w.element,
  /** Size of the modal */
  size: w.oneOf(["default", "large"]),
  /** Whether user must take action (cannot close with escape or backdrop click) */
  forcedAction: w.bool,
  /** Additional CSS classes */
  className: w.string,
  /** ID of element that labels the modal */
  ariaLabelledBy: w.string,
  /** ID of element that describes the modal */
  ariaDescribedBy: w.string
};
export {
  rs as Modal
};
//# sourceMappingURL=index.js.map
