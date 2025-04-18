import Nt, { useState as ke, useRef as Xe, useEffect as Ge, useId as gi, useCallback as St, cloneElement as vi } from "react";
function hi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ft = { exports: {} }, Ye = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr;
function bi() {
  if (sr) return Ye;
  sr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, s) {
    var c = null;
    if (s !== void 0 && (c = "" + s), a.key !== void 0 && (c = "" + a.key), "key" in a) {
      s = {};
      for (var l in a)
        l !== "key" && (s[l] = a[l]);
    } else s = a;
    return a = s.ref, {
      $$typeof: e,
      type: r,
      key: c,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return Ye.Fragment = t, Ye.jsx = n, Ye.jsxs = n, Ye;
}
var He = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function yi() {
  return or || (or = 1, process.env.NODE_ENV !== "production" && function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === Y ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case x:
          return "Fragment";
        case P:
          return "Profiler";
        case j:
          return "StrictMode";
        case v:
          return "Suspense";
        case L:
          return "SuspenseList";
        case V:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case w:
            return "Portal";
          case O:
            return (d.displayName || "Context") + ".Provider";
          case E:
            return (d._context.displayName || "Context") + ".Consumer";
          case N:
            var h = d.render;
            return d = d.displayName, d || (d = h.displayName || h.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case D:
            return h = d.displayName || null, h !== null ? h : e(d.type) || "Memo";
          case B:
            h = d._payload, d = d._init;
            try {
              return e(d(h));
            } catch {
            }
        }
      return null;
    }
    function t(d) {
      return "" + d;
    }
    function n(d) {
      try {
        t(d);
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var T = h.error, R = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return T.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), t(d);
      }
    }
    function r(d) {
      if (d === x) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === B)
        return "<...>";
      try {
        var h = e(d);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var d = H.A;
      return d === null ? null : d.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function c(d) {
      if (J.call(d, "key")) {
        var h = Object.getOwnPropertyDescriptor(d, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function l(d, h) {
      function T() {
        ne || (ne = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: T,
        configurable: !0
      });
    }
    function f() {
      var d = e(this.type);
      return W[d] || (W[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function p(d, h, T, R, A, C, I, M) {
      return T = C.ref, d = {
        $$typeof: b,
        type: d,
        key: h,
        props: C,
        _owner: A
      }, (T !== void 0 ? T : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(d, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: M
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function u(d, h, T, R, A, C, I, M) {
      var S = h.children;
      if (S !== void 0)
        if (R)
          if (G(S)) {
            for (R = 0; R < S.length; R++)
              m(S[R]);
            Object.freeze && Object.freeze(S);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(S);
      if (J.call(h, "key")) {
        S = e(d);
        var z = Object.keys(h).filter(function(K) {
          return K !== "key";
        });
        R = 0 < z.length ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}", re[S + R] || (z = 0 < z.length ? "{" + z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          S,
          z,
          S
        ), re[S + R] = !0);
      }
      if (S = null, T !== void 0 && (n(T), S = "" + T), c(h) && (n(h.key), S = "" + h.key), "key" in h) {
        T = {};
        for (var F in h)
          F !== "key" && (T[F] = h[F]);
      } else T = h;
      return S && l(
        T,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), p(
        d,
        S,
        C,
        A,
        a(),
        T,
        I,
        M
      );
    }
    function m(d) {
      typeof d == "object" && d !== null && d.$$typeof === b && d._store && (d._store.validated = 1);
    }
    var g = Nt, b = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), O = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), V = Symbol.for("react.activity"), Y = Symbol.for("react.client.reference"), H = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, G = Array.isArray, Z = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(d) {
        return d();
      }
    };
    var ne, W = {}, X = g["react-stack-bottom-frame"].bind(
      g,
      s
    )(), ce = Z(r(s)), re = {};
    He.Fragment = x, He.jsx = function(d, h, T, R, A) {
      var C = 1e4 > H.recentlyCreatedOwnerStacks++;
      return u(
        d,
        h,
        T,
        !1,
        R,
        A,
        C ? Error("react-stack-top-frame") : X,
        C ? Z(r(d)) : ce
      );
    }, He.jsxs = function(d, h, T, R, A) {
      var C = 1e4 > H.recentlyCreatedOwnerStacks++;
      return u(
        d,
        h,
        T,
        !0,
        R,
        A,
        C ? Error("react-stack-top-frame") : X,
        C ? Z(r(d)) : ce
      );
    };
  }()), He;
}
var lr;
function xi() {
  return lr || (lr = 1, process.env.NODE_ENV === "production" ? ft.exports = bi() : ft.exports = yi()), ft.exports;
}
var i = xi(), ut = { exports: {} }, dt = { exports: {} }, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function ji() {
  if (cr) return q;
  cr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, j = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function O(v) {
    if (typeof v == "object" && v !== null) {
      var L = v.$$typeof;
      switch (L) {
        case t:
          switch (v = v.type, v) {
            case f:
            case p:
            case r:
            case s:
            case a:
            case m:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case u:
                case w:
                case b:
                case c:
                  return v;
                default:
                  return L;
              }
          }
        case n:
          return L;
      }
    }
  }
  function N(v) {
    return O(v) === p;
  }
  return q.AsyncMode = f, q.ConcurrentMode = p, q.ContextConsumer = l, q.ContextProvider = c, q.Element = t, q.ForwardRef = u, q.Fragment = r, q.Lazy = w, q.Memo = b, q.Portal = n, q.Profiler = s, q.StrictMode = a, q.Suspense = m, q.isAsyncMode = function(v) {
    return N(v) || O(v) === f;
  }, q.isConcurrentMode = N, q.isContextConsumer = function(v) {
    return O(v) === l;
  }, q.isContextProvider = function(v) {
    return O(v) === c;
  }, q.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, q.isForwardRef = function(v) {
    return O(v) === u;
  }, q.isFragment = function(v) {
    return O(v) === r;
  }, q.isLazy = function(v) {
    return O(v) === w;
  }, q.isMemo = function(v) {
    return O(v) === b;
  }, q.isPortal = function(v) {
    return O(v) === n;
  }, q.isProfiler = function(v) {
    return O(v) === s;
  }, q.isStrictMode = function(v) {
    return O(v) === a;
  }, q.isSuspense = function(v) {
    return O(v) === m;
  }, q.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === p || v === s || v === a || v === m || v === g || typeof v == "object" && v !== null && (v.$$typeof === w || v.$$typeof === b || v.$$typeof === c || v.$$typeof === l || v.$$typeof === u || v.$$typeof === j || v.$$typeof === P || v.$$typeof === E || v.$$typeof === x);
  }, q.typeOf = O, q;
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
var fr;
function wi() {
  return fr || (fr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, j = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function O(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === r || _ === p || _ === s || _ === a || _ === m || _ === g || typeof _ == "object" && _ !== null && (_.$$typeof === w || _.$$typeof === b || _.$$typeof === c || _.$$typeof === l || _.$$typeof === u || _.$$typeof === j || _.$$typeof === P || _.$$typeof === E || _.$$typeof === x);
    }
    function N(_) {
      if (typeof _ == "object" && _ !== null) {
        var se = _.$$typeof;
        switch (se) {
          case t:
            var Ie = _.type;
            switch (Ie) {
              case f:
              case p:
              case r:
              case s:
              case a:
              case m:
                return Ie;
              default:
                var lt = Ie && Ie.$$typeof;
                switch (lt) {
                  case l:
                  case u:
                  case w:
                  case b:
                  case c:
                    return lt;
                  default:
                    return se;
                }
            }
          case n:
            return se;
        }
      }
    }
    var v = f, L = p, D = l, B = c, V = t, Y = u, H = r, J = w, G = b, Z = n, ne = s, W = a, X = m, ce = !1;
    function re(_) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(_) || N(_) === f;
    }
    function d(_) {
      return N(_) === p;
    }
    function h(_) {
      return N(_) === l;
    }
    function T(_) {
      return N(_) === c;
    }
    function R(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function A(_) {
      return N(_) === u;
    }
    function C(_) {
      return N(_) === r;
    }
    function I(_) {
      return N(_) === w;
    }
    function M(_) {
      return N(_) === b;
    }
    function S(_) {
      return N(_) === n;
    }
    function z(_) {
      return N(_) === s;
    }
    function F(_) {
      return N(_) === a;
    }
    function K(_) {
      return N(_) === m;
    }
    $.AsyncMode = v, $.ConcurrentMode = L, $.ContextConsumer = D, $.ContextProvider = B, $.Element = V, $.ForwardRef = Y, $.Fragment = H, $.Lazy = J, $.Memo = G, $.Portal = Z, $.Profiler = ne, $.StrictMode = W, $.Suspense = X, $.isAsyncMode = re, $.isConcurrentMode = d, $.isContextConsumer = h, $.isContextProvider = T, $.isElement = R, $.isForwardRef = A, $.isFragment = C, $.isLazy = I, $.isMemo = M, $.isPortal = S, $.isProfiler = z, $.isStrictMode = F, $.isSuspense = K, $.isValidElementType = O, $.typeOf = N;
  }()), $;
}
var ur;
function ia() {
  return ur || (ur = 1, process.env.NODE_ENV === "production" ? dt.exports = ji() : dt.exports = wi()), dt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var At, dr;
function Ni() {
  if (dr) return At;
  dr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var c = {}, l = 0; l < 10; l++)
        c["_" + String.fromCharCode(l)] = l;
      var f = Object.getOwnPropertyNames(c).map(function(u) {
        return c[u];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        p[u] = u;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return At = a() ? Object.assign : function(s, c) {
    for (var l, f = r(s), p, u = 1; u < arguments.length; u++) {
      l = Object(arguments[u]);
      for (var m in l)
        t.call(l, m) && (f[m] = l[m]);
      if (e) {
        p = e(l);
        for (var g = 0; g < p.length; g++)
          n.call(l, p[g]) && (f[p[g]] = l[p[g]]);
      }
    }
    return f;
  }, At;
}
var Ct, pr;
function pn() {
  if (pr) return Ct;
  pr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ct = e, Ct;
}
var It, mr;
function sa() {
  return mr || (mr = 1, It = Function.call.bind(Object.prototype.hasOwnProperty)), It;
}
var Mt, gr;
function Oi() {
  if (gr) return Mt;
  gr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ pn(), n = {}, r = /* @__PURE__ */ sa();
    e = function(s) {
      var c = "Warning: " + s;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function a(s, c, l, f, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in s)
        if (r(s, u)) {
          var m;
          try {
            if (typeof s[u] != "function") {
              var g = Error(
                (f || "React class") + ": " + l + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            m = s[u](c, u, f, l, null, t);
          } catch (w) {
            m = w;
          }
          if (m && !(m instanceof Error) && e(
            (f || "React class") + ": type specification of " + l + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var b = p ? p() : "";
            e(
              "Failed " + l + " type: " + m.message + (b ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Mt = a, Mt;
}
var Lt, vr;
function _i() {
  if (vr) return Lt;
  vr = 1;
  var e = ia(), t = Ni(), n = /* @__PURE__ */ pn(), r = /* @__PURE__ */ sa(), a = /* @__PURE__ */ Oi(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var f = "Warning: " + l;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return Lt = function(l, f) {
    var p = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function m(d) {
      var h = d && (p && d[p] || d[u]);
      if (typeof h == "function")
        return h;
    }
    var g = "<<anonymous>>", b = {
      array: P("array"),
      bigint: P("bigint"),
      bool: P("boolean"),
      func: P("function"),
      number: P("number"),
      object: P("object"),
      string: P("string"),
      symbol: P("symbol"),
      any: E(),
      arrayOf: O,
      element: N(),
      elementType: v(),
      instanceOf: L,
      node: Y(),
      objectOf: B,
      oneOf: D,
      oneOfType: V,
      shape: J,
      exact: G
    };
    function w(d, h) {
      return d === h ? d !== 0 || 1 / d === 1 / h : d !== d && h !== h;
    }
    function x(d, h) {
      this.message = d, this.data = h && typeof h == "object" ? h : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function j(d) {
      if (process.env.NODE_ENV !== "production")
        var h = {}, T = 0;
      function R(C, I, M, S, z, F, K) {
        if (S = S || g, F = F || M, K !== n) {
          if (f) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = S + ":" + M;
            !h[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            T < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + S + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), h[se] = !0, T++);
          }
        }
        return I[M] == null ? C ? I[M] === null ? new x("The " + z + " `" + F + "` is marked as required " + ("in `" + S + "`, but its value is `null`.")) : new x("The " + z + " `" + F + "` is marked as required in " + ("`" + S + "`, but its value is `undefined`.")) : null : d(I, M, S, z, F);
      }
      var A = R.bind(null, !1);
      return A.isRequired = R.bind(null, !0), A;
    }
    function P(d) {
      function h(T, R, A, C, I, M) {
        var S = T[R], z = W(S);
        if (z !== d) {
          var F = X(S);
          return new x(
            "Invalid " + C + " `" + I + "` of type " + ("`" + F + "` supplied to `" + A + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return j(h);
    }
    function E() {
      return j(c);
    }
    function O(d) {
      function h(T, R, A, C, I) {
        if (typeof d != "function")
          return new x("Property `" + I + "` of component `" + A + "` has invalid PropType notation inside arrayOf.");
        var M = T[R];
        if (!Array.isArray(M)) {
          var S = W(M);
          return new x("Invalid " + C + " `" + I + "` of type " + ("`" + S + "` supplied to `" + A + "`, expected an array."));
        }
        for (var z = 0; z < M.length; z++) {
          var F = d(M, z, A, C, I + "[" + z + "]", n);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return j(h);
    }
    function N() {
      function d(h, T, R, A, C) {
        var I = h[T];
        if (!l(I)) {
          var M = W(I);
          return new x("Invalid " + A + " `" + C + "` of type " + ("`" + M + "` supplied to `" + R + "`, expected a single ReactElement."));
        }
        return null;
      }
      return j(d);
    }
    function v() {
      function d(h, T, R, A, C) {
        var I = h[T];
        if (!e.isValidElementType(I)) {
          var M = W(I);
          return new x("Invalid " + A + " `" + C + "` of type " + ("`" + M + "` supplied to `" + R + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return j(d);
    }
    function L(d) {
      function h(T, R, A, C, I) {
        if (!(T[R] instanceof d)) {
          var M = d.name || g, S = re(T[R]);
          return new x("Invalid " + C + " `" + I + "` of type " + ("`" + S + "` supplied to `" + A + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return j(h);
    }
    function D(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), c;
      function h(T, R, A, C, I) {
        for (var M = T[R], S = 0; S < d.length; S++)
          if (w(M, d[S]))
            return null;
        var z = JSON.stringify(d, function(K, _) {
          var se = X(_);
          return se === "symbol" ? String(_) : _;
        });
        return new x("Invalid " + C + " `" + I + "` of value `" + String(M) + "` " + ("supplied to `" + A + "`, expected one of " + z + "."));
      }
      return j(h);
    }
    function B(d) {
      function h(T, R, A, C, I) {
        if (typeof d != "function")
          return new x("Property `" + I + "` of component `" + A + "` has invalid PropType notation inside objectOf.");
        var M = T[R], S = W(M);
        if (S !== "object")
          return new x("Invalid " + C + " `" + I + "` of type " + ("`" + S + "` supplied to `" + A + "`, expected an object."));
        for (var z in M)
          if (r(M, z)) {
            var F = d(M, z, A, C, I + "." + z, n);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return j(h);
    }
    function V(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var h = 0; h < d.length; h++) {
        var T = d[h];
        if (typeof T != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(T) + " at index " + h + "."
          ), c;
      }
      function R(A, C, I, M, S) {
        for (var z = [], F = 0; F < d.length; F++) {
          var K = d[F], _ = K(A, C, I, M, S, n);
          if (_ == null)
            return null;
          _.data && r(_.data, "expectedType") && z.push(_.data.expectedType);
        }
        var se = z.length > 0 ? ", expected one of type [" + z.join(", ") + "]" : "";
        return new x("Invalid " + M + " `" + S + "` supplied to " + ("`" + I + "`" + se + "."));
      }
      return j(R);
    }
    function Y() {
      function d(h, T, R, A, C) {
        return Z(h[T]) ? null : new x("Invalid " + A + " `" + C + "` supplied to " + ("`" + R + "`, expected a ReactNode."));
      }
      return j(d);
    }
    function H(d, h, T, R, A) {
      return new x(
        (d || "React class") + ": " + h + " type `" + T + "." + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + A + "`."
      );
    }
    function J(d) {
      function h(T, R, A, C, I) {
        var M = T[R], S = W(M);
        if (S !== "object")
          return new x("Invalid " + C + " `" + I + "` of type `" + S + "` " + ("supplied to `" + A + "`, expected `object`."));
        for (var z in d) {
          var F = d[z];
          if (typeof F != "function")
            return H(A, C, I, z, X(F));
          var K = F(M, z, A, C, I + "." + z, n);
          if (K)
            return K;
        }
        return null;
      }
      return j(h);
    }
    function G(d) {
      function h(T, R, A, C, I) {
        var M = T[R], S = W(M);
        if (S !== "object")
          return new x("Invalid " + C + " `" + I + "` of type `" + S + "` " + ("supplied to `" + A + "`, expected `object`."));
        var z = t({}, T[R], d);
        for (var F in z) {
          var K = d[F];
          if (r(d, F) && typeof K != "function")
            return H(A, C, I, F, X(K));
          if (!K)
            return new x(
              "Invalid " + C + " `" + I + "` key `" + F + "` supplied to `" + A + "`.\nBad object: " + JSON.stringify(T[R], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var _ = K(M, F, A, C, I + "." + F, n);
          if (_)
            return _;
        }
        return null;
      }
      return j(h);
    }
    function Z(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(Z);
          if (d === null || l(d))
            return !0;
          var h = m(d);
          if (h) {
            var T = h.call(d), R;
            if (h !== d.entries) {
              for (; !(R = T.next()).done; )
                if (!Z(R.value))
                  return !1;
            } else
              for (; !(R = T.next()).done; ) {
                var A = R.value;
                if (A && !Z(A[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(d, h) {
      return d === "symbol" ? !0 : h ? h["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && h instanceof Symbol : !1;
    }
    function W(d) {
      var h = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : ne(h, d) ? "symbol" : h;
    }
    function X(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var h = W(d);
      if (h === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return h;
    }
    function ce(d) {
      var h = X(d);
      switch (h) {
        case "array":
        case "object":
          return "an " + h;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + h;
        default:
          return h;
      }
    }
    function re(d) {
      return !d.constructor || !d.constructor.name ? g : d.constructor.name;
    }
    return b.checkPropTypes = a, b.resetWarningCache = a.resetWarningCache, b.PropTypes = b, b;
  }, Lt;
}
var zt, hr;
function Pi() {
  if (hr) return zt;
  hr = 1;
  var e = /* @__PURE__ */ pn();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, zt = function() {
    function r(c, l, f, p, u, m) {
      if (m !== e) {
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
    var s = {
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
    return s.PropTypes = s, s;
  }, zt;
}
var br;
function Ti() {
  if (br) return ut.exports;
  if (br = 1, process.env.NODE_ENV !== "production") {
    var e = ia(), t = !0;
    ut.exports = /* @__PURE__ */ _i()(e.isElement, t);
  } else
    ut.exports = /* @__PURE__ */ Pi()();
  return ut.exports;
}
var Q = /* @__PURE__ */ Ti();
const o = /* @__PURE__ */ hi(Q), Ei = () => /* @__PURE__ */ i.jsx("svg", { width: "40", height: "40", viewBox: "0 0 60 60", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ i.jsx("path", { d: "M30 54C21.375 54 13.5 49.5 9.1875 42C4.875 34.5938 4.875 25.5 9.1875 18C13.5 10.5938 21.375 6 30 6C38.5312 6 46.4062 10.5938 50.7188 18C55.0312 25.5 55.0312 34.5938 50.7188 42C46.4062 49.5 38.5312 54 30 54ZM26.25 37.5C24.9375 37.5 24 38.5312 24 39.75C24 41.0625 24.9375 42 26.25 42H33.75C34.9688 42 36 41.0625 36 39.75C36 38.5312 34.9688 37.5 33.75 37.5H33V29.25C33 28.0312 31.9688 27 30.75 27H26.25C24.9375 27 24 28.0312 24 29.25C24 30.5625 24.9375 31.5 26.25 31.5H28.5V37.5H26.25ZM30 18C28.3125 18 27 19.4062 27 21C27 22.6875 28.3125 24 30 24C31.5938 24 33 22.6875 33 21C33 19.4062 31.5938 18 30 18Z", fill: "currentColor" }) }), mn = ({
  domain: e = "An official website of the City of Portland",
  icon: t = void 0,
  heading: n = "Official websites use .gov",
  description: r = "A .gov website belongs to an official government organization in the United States.",
  showHttpsGuidance: a = !0,
  initiallyExpanded: s = !1,
  className: c = ""
}) => {
  const [l, f] = ke(s), p = ["pgov-banner", c].filter(Boolean).join(" "), u = t || Ei(), m = () => {
    f(!l);
  };
  return /* @__PURE__ */ i.jsx("section", { className: p, children: /* @__PURE__ */ i.jsxs("div", { className: "pgov-banner-inner", children: [
    /* @__PURE__ */ i.jsx("div", { className: "pgov-banner-header", children: /* @__PURE__ */ i.jsxs("div", { className: "pgov-banner-header-inner", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "pgov-banner-header-content", children: [
        /* @__PURE__ */ i.jsx("div", { className: "pgov-banner-header-icon", children: u }),
        /* @__PURE__ */ i.jsx("p", { className: "pgov-banner-header-text", children: e })
      ] }),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "pgov-banner-button",
          onClick: m,
          "aria-expanded": l,
          "aria-controls": "pgov-banner-content",
          children: [
            /* @__PURE__ */ i.jsx("span", { className: "pgov-banner-button-text", children: "Here's how you know" }),
            /* @__PURE__ */ i.jsx("span", { className: `pgov-banner-button-icon ${l ? "is-open" : ""}`, children: /* @__PURE__ */ i.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ i.jsx("polyline", { points: "6 9 12 15 18 9" }) }) })
          ]
        }
      )
    ] }) }),
    l && /* @__PURE__ */ i.jsxs(
      "div",
      {
        id: "pgov-banner-content",
        className: "pgov-banner-content",
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "pgov-banner-guidance", children: [
            /* @__PURE__ */ i.jsx("div", { className: "pgov-banner-guidance-icon", children: u }),
            /* @__PURE__ */ i.jsx("div", { className: "pgov-banner-guidance-text", children: /* @__PURE__ */ i.jsxs("p", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: n }),
              /* @__PURE__ */ i.jsx("br", {}),
              r
            ] }) })
          ] }),
          a && /* @__PURE__ */ i.jsxs("div", { className: "pgov-banner-guidance", children: [
            /* @__PURE__ */ i.jsx("div", { className: "pgov-banner-guidance-icon", children: /* @__PURE__ */ i.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ i.jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
              /* @__PURE__ */ i.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
            ] }) }),
            /* @__PURE__ */ i.jsx("div", { className: "pgov-banner-guidance-text", children: /* @__PURE__ */ i.jsxs("p", { children: [
              /* @__PURE__ */ i.jsx("strong", { children: "Secure websites use HTTPS" }),
              /* @__PURE__ */ i.jsx("br", {}),
              "A ",
              /* @__PURE__ */ i.jsx("strong", { children: "lock" }),
              " or ",
              /* @__PURE__ */ i.jsx("strong", { children: "https://" }),
              " means you've safely connected to the .gov website. Share sensitive information only on official, secure websites."
            ] }) })
          ] })
        ]
      }
    )
  ] }) });
};
mn.propTypes = {
  /** Text describing the domain/owner of the site */
  domain: o.string,
  /** Custom icon element to display in the banner */
  icon: o.node,
  /** Heading text for the banner content */
  heading: o.string,
  /** Description text for the banner content */
  description: o.node,
  /** Whether to show the HTTPS guidance section */
  showHttpsGuidance: o.bool,
  /** Whether the banner content is initially expanded */
  initiallyExpanded: o.bool,
  /** Additional CSS class for the banner */
  className: o.string
};
mn.defaultProps = {
  domain: "An official website of the City of Portland",
  icon: void 0,
  heading: "Official websites use .gov",
  description: "A .gov website belongs to an official government organization in the United States.",
  showHttpsGuidance: !0,
  initiallyExpanded: !1,
  className: ""
};
const gn = ({
  title: e,
  logoUrl: t,
  logoAlt: n,
  tagline: r
}) => /* @__PURE__ */ i.jsxs("a", { href: "/", className: "pgov-header-logo-container", children: [
  t && /* @__PURE__ */ i.jsx(
    "img",
    {
      src: t,
      alt: n,
      className: "pgov-header-logo-img"
    }
  ),
  /* @__PURE__ */ i.jsxs("div", { className: "pgov-header-logo-text-container", children: [
    /* @__PURE__ */ i.jsx("span", { className: "pgov-header-logo-text", children: e }),
    r && /* @__PURE__ */ i.jsx("span", { className: "pgov-header-logo-tagline", children: r })
  ] })
] });
gn.propTypes = {
  /** Title text for the header */
  title: o.string.isRequired,
  /** URL for the logo image */
  logoUrl: o.string,
  /** Alt text for the logo image */
  logoAlt: o.string,
  /** Optional tagline displayed below the title */
  tagline: o.string
};
gn.defaultProps = {
  logoUrl: void 0,
  logoAlt: "Logo",
  tagline: void 0
};
const oa = ({ item: e }) => /* @__PURE__ */ i.jsx("li", { className: "pgov-header-menu-item", role: "menuitem", children: /* @__PURE__ */ i.jsxs(
  "a",
  {
    href: e.href,
    className: "pgov-header-menu-link",
    "aria-current": e.current ? "page" : void 0,
    children: [
      /* @__PURE__ */ i.jsx("span", { className: "pgov-header-menu-link-title", children: e.label }),
      e.description && /* @__PURE__ */ i.jsx("span", { className: "pgov-header-menu-link-description", children: e.description })
    ]
  }
) });
oa.propTypes = {
  /** Menu item object containing label, href, description, and current state */
  item: o.shape({
    label: o.string.isRequired,
    href: o.string.isRequired,
    description: o.string,
    current: o.bool
  }).isRequired
};
const vn = ({
  items: e,
  mainHeading: t,
  id: n,
  className: r
}) => {
  const a = `${n}-heading`;
  return /* @__PURE__ */ i.jsxs("nav", { className: `pgov-header-menu-group ${r || ""}`, role: "navigation", "aria-labelledby": a, children: [
    /* @__PURE__ */ i.jsx("h3", { id: a, className: "pgov-header-menu-heading", children: t }),
    /* @__PURE__ */ i.jsx("ul", { className: "pgov-header-menu-group-items", role: "menu", children: e.map((s, c) => /* @__PURE__ */ i.jsx(oa, { item: s }, c)) })
  ] });
};
vn.propTypes = {
  /** Array of menu items to display */
  items: o.arrayOf(
    o.shape({
      label: o.string.isRequired,
      href: o.string.isRequired,
      description: o.string,
      current: o.bool
    })
  ).isRequired,
  /** Main heading text for the menu group */
  mainHeading: o.string,
  /** ID for the component */
  id: o.string,
  /** Custom class name */
  className: o.string
};
vn.defaultProps = {
  mainHeading: "General Information",
  id: "pgov-header-menu-group"
};
const hn = ({
  title: e,
  logoUrl: t,
  logoAlt: n,
  tagline: r,
  navItems: a,
  mainHeading: s,
  menuText: c,
  openMenuAriaLabel: l,
  closeMenuAriaLabel: f,
  className: p
}) => {
  const [u, m] = ke(!1), g = () => {
    m(!u);
  };
  return /* @__PURE__ */ i.jsxs("header", { className: `pgov-header ${p || ""}`, children: [
    /* @__PURE__ */ i.jsx("div", { className: "pgov-header-main", children: /* @__PURE__ */ i.jsxs("div", { className: "pgov-header-container", children: [
      /* @__PURE__ */ i.jsx("div", { className: "pgov-header-logo", children: /* @__PURE__ */ i.jsx(
        gn,
        {
          title: e,
          logoUrl: t,
          logoAlt: n,
          tagline: r
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: `pgov-header-mobile-menu ${u ? "is-open" : ""}`, children: /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "pgov-header-mobile-menu-button",
          "aria-label": u ? f : l,
          "aria-expanded": u,
          "aria-controls": "pgov-header-mobile-dropdown",
          onClick: g,
          children: [
            /* @__PURE__ */ i.jsxs("span", { className: "pgov-header-mobile-menu-icon", children: [
              /* @__PURE__ */ i.jsx("span", {}),
              /* @__PURE__ */ i.jsx("span", {}),
              /* @__PURE__ */ i.jsx("span", {})
            ] }),
            /* @__PURE__ */ i.jsx("span", { className: "pgov-header-mobile-menu-text", "aria-hidden": "true", children: c })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        id: "pgov-header-mobile-dropdown",
        className: `pgov-header-mobile-dropdown ${u ? "is-open" : ""}`,
        children: /* @__PURE__ */ i.jsx("div", { className: "pgov-header-mobile-menu-content", children: /* @__PURE__ */ i.jsx("nav", { className: "pgov-header-mobile-nav", "aria-label": "Primary navigation", children: /* @__PURE__ */ i.jsx(
          vn,
          {
            items: a,
            mainHeading: s,
            id: "pgov-header-menu-group"
          }
        ) }) })
      }
    )
  ] });
};
hn.propTypes = {
  /** Title text for the header */
  title: o.string.isRequired,
  /** URL for the logo image */
  logoUrl: o.string,
  /** Alt text for the logo image */
  logoAlt: o.string,
  /** Optional tagline displayed below the title */
  tagline: o.string,
  /** Array of navigation items */
  navItems: o.arrayOf(
    o.shape({
      label: o.string.isRequired,
      href: o.string.isRequired,
      description: o.string,
      current: o.bool
    })
  ).isRequired,
  /** Main heading text for the navigation menu */
  mainHeading: o.string,
  /** Text for the menu button */
  menuText: o.string,
  /** Aria label for opening the menu */
  openMenuAriaLabel: o.string,
  /** Aria label for closing the menu */
  closeMenuAriaLabel: o.string,
  /** Additional CSS class names */
  className: o.string
};
hn.defaultProps = {
  logoUrl: void 0,
  logoAlt: "Logo",
  tagline: void 0,
  mainHeading: "General Information",
  menuText: "Menu",
  openMenuAriaLabel: "Menu",
  closeMenuAriaLabel: "Close menu",
  className: void 0
};
o.bool.isRequired, o.func.isRequired, o.string, o.string, o.string, o.string;
const bn = ({
  text: e = "Skip to main content",
  mainContentId: t = "main-content",
  className: n = ""
}) => {
  const r = ["pgov-skipnav", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ i.jsx(
    "a",
    {
      href: `#${t}`,
      className: r,
      "data-testid": "skip-nav",
      children: e
    }
  );
};
bn.propTypes = {
  /** The text to display in the skip nav link */
  text: o.string,
  /** The ID of the main content element to skip to */
  mainContentId: o.string,
  /** Custom class name */
  className: o.string
};
bn.defaultProps = {
  text: "Skip to main content",
  mainContentId: "main-content",
  className: ""
};
const yn = ({
  feedbackUrl: e,
  accessibilityText: t,
  serviceRequestText: n,
  onlineServiceUrl: r,
  phoneNumber: a,
  relayServiceText: s,
  relayServiceNumber: c,
  translationText: l,
  generalInfoLinks: f,
  termsLinks: p,
  portlandGovLinks: u,
  socialMediaLinks: m,
  cityName: g,
  cityLogoUrl: b,
  cityLogoAlt: w,
  copyrightText: x,
  exploreServicesText: j,
  exploreServicesUrl: P,
  className: E
}) => /* @__PURE__ */ i.jsxs("footer", { className: `pgov-footer ${E}`, role: "contentinfo", children: [
  /* @__PURE__ */ i.jsx("div", { className: "pgov-feedback-section", children: /* @__PURE__ */ i.jsxs("p", { className: "pgov-feedback-text", children: [
    "See something we could improve on this page? ",
    /* @__PURE__ */ i.jsx("a", { href: e, className: "pgov-feedback-link", children: "Give website feedback" }),
    "."
  ] }) }),
  /* @__PURE__ */ i.jsx("div", { className: "pgov-accessibility-section", children: /* @__PURE__ */ i.jsxs("div", { className: "pgov-accessibility-container", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "pgov-text-container", children: [
      /* @__PURE__ */ i.jsxs("p", { className: "pgov-accessibility-text", children: [
        t,
        " ",
        /* @__PURE__ */ i.jsxs("span", { className: "pgov-request-services", children: [
          "Request these services ",
          /* @__PURE__ */ i.jsx("a", { href: r, className: "pgov-online-link", children: "online" }),
          " or ",
          /* @__PURE__ */ i.jsx("a", { href: `tel:${a.replace(/\D/g, "")}`, className: "pgov-phone-link", children: a }),
          ". Relay Service: ",
          /* @__PURE__ */ i.jsx("a", { href: `tel:${c.replace(/\D/g, "")}`, className: "pgov-relay-link", children: c }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("p", { className: "pgov-translation-text", children: [
        /* @__PURE__ */ i.jsx("a", { href: `tel:${a.replace(/\D/g, "")}`, className: "pgov-translation-phone-link", children: a }),
        " ",
        l
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "pgov-explore-services", children: /* @__PURE__ */ i.jsxs("a", { href: P, className: "pgov-explore-button", children: [
      j,
      " ",
      /* @__PURE__ */ i.jsx("span", { className: "pgov-explore-arrow", children: "→" })
    ] }) })
  ] }) }),
  /* @__PURE__ */ i.jsx("div", { className: "pgov-footer-main", children: /* @__PURE__ */ i.jsxs("div", { className: "pgov-footer-nav", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "pgov-footer-city-info", children: [
      /* @__PURE__ */ i.jsx("p", { className: "pgov-city-name", children: g }),
      /* @__PURE__ */ i.jsx("img", { src: b, alt: w, className: "pgov-city-logo" }),
      /* @__PURE__ */ i.jsx("p", { className: "pgov-copyright", children: x })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "pgov-footer-nav-section", children: [
      /* @__PURE__ */ i.jsx("h4", { className: "pgov-footer-heading", children: "General Information" }),
      /* @__PURE__ */ i.jsx("ul", { className: "pgov-footer-links", children: f.map((O, N) => /* @__PURE__ */ i.jsx("li", { className: "pgov-footer-link-item", children: /* @__PURE__ */ i.jsx("a", { href: O.href, className: "pgov-footer-link", children: O.label }) }, `general-link-${N}`)) })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "pgov-footer-nav-section", children: [
      /* @__PURE__ */ i.jsx("h4", { className: "pgov-footer-heading", children: "Terms And Policies" }),
      /* @__PURE__ */ i.jsx("ul", { className: "pgov-footer-links", children: p.map((O, N) => /* @__PURE__ */ i.jsx("li", { className: "pgov-footer-link-item", children: /* @__PURE__ */ i.jsx("a", { href: O.href, className: "pgov-footer-link", children: O.label }) }, `terms-link-${N}`)) })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "pgov-footer-nav-section", children: [
      /* @__PURE__ */ i.jsx("h4", { className: "pgov-footer-heading", children: "Portland.Gov" }),
      /* @__PURE__ */ i.jsx("ul", { className: "pgov-footer-links", children: u.map((O, N) => /* @__PURE__ */ i.jsx("li", { className: "pgov-footer-link-item", children: /* @__PURE__ */ i.jsx("a", { href: O.href, className: "pgov-footer-link", children: O.label }) }, `pgov-link-${N}`)) })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "pgov-footer-nav-section", children: [
      /* @__PURE__ */ i.jsx("h4", { className: "pgov-footer-heading", children: "Social Media" }),
      /* @__PURE__ */ i.jsx("ul", { className: "pgov-footer-links", children: m.map((O, N) => /* @__PURE__ */ i.jsx("li", { className: "pgov-footer-link-item", children: /* @__PURE__ */ i.jsx("a", { href: O.href, className: "pgov-footer-link", children: O.label }) }, `social-link-${N}`)) })
    ] })
  ] }) })
] });
yn.propTypes = {
  /** URL for the feedback link */
  feedbackUrl: o.string,
  /** Text for the accessibility section */
  accessibilityText: o.string,
  /** Text for service request */
  serviceRequestText: o.string,
  /** URL for online service */
  onlineServiceUrl: o.string,
  /** Phone number for services */
  phoneNumber: o.string,
  /** Text for relay service */
  relayServiceText: o.string,
  /** Relay service number */
  relayServiceNumber: o.string,
  /** Text for translation section */
  translationText: o.string,
  /** Links for general information section */
  generalInfoLinks: o.arrayOf(
    o.shape({
      label: o.string.isRequired,
      href: o.string.isRequired
    })
  ),
  /** Links for terms and policies section */
  termsLinks: o.arrayOf(
    o.shape({
      label: o.string.isRequired,
      href: o.string.isRequired
    })
  ),
  /** Links for Portland.gov section */
  portlandGovLinks: o.arrayOf(
    o.shape({
      label: o.string.isRequired,
      href: o.string.isRequired
    })
  ),
  /** Social media links */
  socialMediaLinks: o.arrayOf(
    o.shape({
      label: o.string.isRequired,
      href: o.string.isRequired
    })
  ),
  /** City name */
  cityName: o.string,
  /** URL for the city logo */
  cityLogoUrl: o.string,
  /** Alt text for the city logo */
  cityLogoAlt: o.string,
  /** Copyright text */
  copyrightText: o.string,
  /** Text for explore services button */
  exploreServicesText: o.string,
  /** URL for explore services button */
  exploreServicesUrl: o.string,
  /** Additional CSS class for the footer */
  className: o.string
};
yn.defaultProps = {
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
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Ri(e, t, n) {
  return (t = Si(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function yr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yr(Object(n), !0).forEach(function(r) {
      Ri(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ki(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Si(e) {
  var t = ki(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const xr = () => {
};
let xn = {}, la = {}, ca = null, fa = {
  mark: xr,
  measure: xr
};
try {
  typeof window < "u" && (xn = window), typeof document < "u" && (la = document), typeof MutationObserver < "u" && (ca = MutationObserver), typeof performance < "u" && (fa = performance);
} catch {
}
const {
  userAgent: jr = ""
} = xn.navigator || {}, Ne = xn, U = la, wr = ca, pt = fa;
Ne.document;
const je = !!U.documentElement && !!U.head && typeof U.addEventListener == "function" && typeof U.createElement == "function", ua = ~jr.indexOf("MSIE") || ~jr.indexOf("Trident/");
var Ai = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Ci = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, da = {
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
}, Ii = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, pa = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], te = "classic", Ot = "duotone", Mi = "sharp", Li = "sharp-duotone", ma = [te, Ot, Mi, Li], zi = {
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
}, Fi = {
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
}, Di = /* @__PURE__ */ new Map([["classic", {
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
}]]), qi = {
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
}, $i = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Nr = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Wi = ["kit"], Bi = {
  kit: {
    "fa-kit": "fak"
  }
}, Yi = ["fak", "fakd"], Hi = {
  kit: {
    fak: "fa-kit"
  }
}, Or = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, mt = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Ui = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Vi = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Xi = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Gi = {
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
}, Ki = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Ht = {
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
}, Ji = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Ut = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Ui, ...Ji], Zi = ["solid", "regular", "light", "thin", "duotone", "brands"], ga = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Qi = ga.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), es = [...Object.keys(Ki), ...Zi, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", mt.GROUP, mt.SWAP_OPACITY, mt.PRIMARY, mt.SECONDARY].concat(ga.map((e) => "".concat(e, "x"))).concat(Qi.map((e) => "w-".concat(e))), ts = {
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
const be = "___FONT_AWESOME___", Vt = 16, va = "fa", ha = "svg-inline--fa", Se = "data-fa-i2svg", Xt = "data-fa-pseudo-element", ns = "data-fa-pseudo-element-pending", jn = "data-prefix", wn = "data-icon", _r = "fontawesome-i2svg", rs = "async", as = ["HTML", "HEAD", "STYLE", "SCRIPT"], ba = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function at(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[te];
    }
  });
}
const ya = y({}, da);
ya[te] = y(y(y(y({}, {
  "fa-duotone": "duotone"
}), da[te]), Nr.kit), Nr["kit-duotone"]);
const is = at(ya), Gt = y({}, qi);
Gt[te] = y(y(y(y({}, {
  duotone: "fad"
}), Gt[te]), Or.kit), Or["kit-duotone"]);
const Pr = at(Gt), Kt = y({}, Ht);
Kt[te] = y(y({}, Kt[te]), Hi.kit);
const Nn = at(Kt), Jt = y({}, Gi);
Jt[te] = y(y({}, Jt[te]), Bi.kit);
at(Jt);
const ss = Ai, xa = "fa-layers-text", os = Ci, ls = y({}, zi);
at(ls);
const cs = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ft = Ii, fs = [...Wi, ...es], Ke = Ne.FontAwesomeConfig || {};
function us(e) {
  var t = U.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function ds(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
U && typeof U.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = ds(us(n));
  a != null && (Ke[r] = a);
});
const ja = {
  styleDefault: "solid",
  familyDefault: te,
  cssPrefix: va,
  replacementClass: ha,
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
Ke.familyPrefix && (Ke.cssPrefix = Ke.familyPrefix);
const Fe = y(y({}, ja), Ke);
Fe.autoReplaceSvg || (Fe.observeMutations = !1);
const k = {};
Object.keys(ja).forEach((e) => {
  Object.defineProperty(k, e, {
    enumerable: !0,
    set: function(t) {
      Fe[e] = t, Je.forEach((n) => n(k));
    },
    get: function() {
      return Fe[e];
    }
  });
});
Object.defineProperty(k, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Fe.cssPrefix = e, Je.forEach((t) => t(k));
  },
  get: function() {
    return Fe.cssPrefix;
  }
});
Ne.FontAwesomeConfig = k;
const Je = [];
function ps(e) {
  return Je.push(e), () => {
    Je.splice(Je.indexOf(e), 1);
  };
}
const we = Vt, me = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ms(e) {
  if (!e || !je)
    return;
  const t = U.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = U.head.childNodes;
  let r = null;
  for (let a = n.length - 1; a > -1; a--) {
    const s = n[a], c = (s.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(c) > -1 && (r = s);
  }
  return U.head.insertBefore(t, r), e;
}
const gs = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function et() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += gs[Math.random() * 62 | 0];
  return t;
}
function Be(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function On(e) {
  return e.classList ? Be(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function wa(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function vs(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(wa(e[n]), '" '), "").trim();
}
function _t(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function _n(e) {
  return e.size !== me.size || e.x !== me.x || e.y !== me.y || e.rotate !== me.rotate || e.flipX || e.flipY;
}
function hs(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, s = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), c = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), l = "rotate(".concat(t.rotate, " 0 0)"), f = {
    transform: "".concat(s, " ").concat(c, " ").concat(l)
  }, p = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: f,
    path: p
  };
}
function bs(e) {
  let {
    transform: t,
    width: n = Vt,
    height: r = Vt,
    startCentered: a = !1
  } = e, s = "";
  return a && ua ? s += "translate(".concat(t.x / we - n / 2, "em, ").concat(t.y / we - r / 2, "em) ") : a ? s += "translate(calc(-50% + ".concat(t.x / we, "em), calc(-50% + ").concat(t.y / we, "em)) ") : s += "translate(".concat(t.x / we, "em, ").concat(t.y / we, "em) "), s += "scale(".concat(t.size / we * (t.flipX ? -1 : 1), ", ").concat(t.size / we * (t.flipY ? -1 : 1), ") "), s += "rotate(".concat(t.rotate, "deg) "), s;
}
var ys = `:root, :host {
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
function Na() {
  const e = va, t = ha, n = k.cssPrefix, r = k.replacementClass;
  let a = ys;
  if (n !== e || r !== t) {
    const s = new RegExp("\\.".concat(e, "\\-"), "g"), c = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(t), "g");
    a = a.replace(s, ".".concat(n, "-")).replace(c, "--".concat(n, "-")).replace(l, ".".concat(r));
  }
  return a;
}
let Tr = !1;
function Dt() {
  k.autoAddCss && !Tr && (ms(Na()), Tr = !0);
}
var xs = {
  mixout() {
    return {
      dom: {
        css: Na,
        insertCss: Dt
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Dt();
      },
      beforeI2svg() {
        Dt();
      }
    };
  }
};
const ye = Ne || {};
ye[be] || (ye[be] = {});
ye[be].styles || (ye[be].styles = {});
ye[be].hooks || (ye[be].hooks = {});
ye[be].shims || (ye[be].shims = []);
var ge = ye[be];
const Oa = [], _a = function() {
  U.removeEventListener("DOMContentLoaded", _a), yt = 1, Oa.map((e) => e());
};
let yt = !1;
je && (yt = (U.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(U.readyState), yt || U.addEventListener("DOMContentLoaded", _a));
function js(e) {
  je && (yt ? setTimeout(e, 0) : Oa.push(e));
}
function it(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? wa(e) : "<".concat(t, " ").concat(vs(n), ">").concat(r.map(it).join(""), "</").concat(t, ">");
}
function Er(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var qt = function(t, n, r, a) {
  var s = Object.keys(t), c = s.length, l = n, f, p, u;
  for (r === void 0 ? (f = 1, u = t[s[0]]) : (f = 0, u = r); f < c; f++)
    p = s[f], u = l(u, t[p], p, t);
  return u;
};
function ws(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      const s = e.charCodeAt(n++);
      (s & 64512) == 56320 ? t.push(((a & 1023) << 10) + (s & 1023) + 65536) : (t.push(a), n--);
    } else
      t.push(a);
  }
  return t;
}
function Zt(e) {
  const t = ws(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Ns(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function Rr(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Qt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = Rr(t);
  typeof ge.hooks.addPack == "function" && !r ? ge.hooks.addPack(e, Rr(t)) : ge.styles[e] = y(y({}, ge.styles[e] || {}), a), e === "fas" && Qt("fa", t);
}
const {
  styles: tt,
  shims: Os
} = ge, Pa = Object.keys(Nn), _s = Pa.reduce((e, t) => (e[t] = Object.keys(Nn[t]), e), {});
let Pn = null, Ta = {}, Ea = {}, Ra = {}, ka = {}, Sa = {};
function Ps(e) {
  return ~fs.indexOf(e);
}
function Ts(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Ps(a) ? a : null;
}
const Aa = () => {
  const e = (r) => qt(tt, (a, s, c) => (a[c] = qt(s, r, {}), a), {});
  Ta = e((r, a, s) => (a[3] && (r[a[3]] = s), a[2] && a[2].filter((l) => typeof l == "number").forEach((l) => {
    r[l.toString(16)] = s;
  }), r)), Ea = e((r, a, s) => (r[s] = s, a[2] && a[2].filter((l) => typeof l == "string").forEach((l) => {
    r[l] = s;
  }), r)), Sa = e((r, a, s) => {
    const c = a[2];
    return r[s] = s, c.forEach((l) => {
      r[l] = s;
    }), r;
  });
  const t = "far" in tt || k.autoFetchSvg, n = qt(Os, (r, a) => {
    const s = a[0];
    let c = a[1];
    const l = a[2];
    return c === "far" && !t && (c = "fas"), typeof s == "string" && (r.names[s] = {
      prefix: c,
      iconName: l
    }), typeof s == "number" && (r.unicodes[s.toString(16)] = {
      prefix: c,
      iconName: l
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  Ra = n.names, ka = n.unicodes, Pn = Pt(k.styleDefault, {
    family: k.familyDefault
  });
};
ps((e) => {
  Pn = Pt(e.styleDefault, {
    family: k.familyDefault
  });
});
Aa();
function Tn(e, t) {
  return (Ta[e] || {})[t];
}
function Es(e, t) {
  return (Ea[e] || {})[t];
}
function Ee(e, t) {
  return (Sa[e] || {})[t];
}
function Ca(e) {
  return Ra[e] || {
    prefix: null,
    iconName: null
  };
}
function Rs(e) {
  const t = ka[e], n = Tn("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Oe() {
  return Pn;
}
const Ia = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function ks(e) {
  let t = te;
  const n = Pa.reduce((r, a) => (r[a] = "".concat(k.cssPrefix, "-").concat(a), r), {});
  return ma.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => _s[r].includes(a))) && (t = r);
  }), t;
}
function Pt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = te
  } = t, r = is[n][e];
  if (n === Ot && !e)
    return "fad";
  const a = Pr[n][e] || Pr[n][r], s = e in ge.styles ? e : null;
  return a || s || null;
}
function Ss(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = Ts(k.cssPrefix, r);
    a ? n = a : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function kr(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function Tt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const a = Ut.concat(Vi), s = kr(e.filter((m) => a.includes(m))), c = kr(e.filter((m) => !Ut.includes(m))), l = s.filter((m) => (r = m, !pa.includes(m))), [f = null] = l, p = ks(s), u = y(y({}, Ss(c)), {}, {
    prefix: Pt(f, {
      family: p
    })
  });
  return y(y(y({}, u), Ms({
    values: e,
    family: p,
    styles: tt,
    config: k,
    canonical: u,
    givenPrefix: r
  })), As(n, r, u));
}
function As(e, t, n) {
  let {
    prefix: r,
    iconName: a
  } = n;
  if (e || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  const s = t === "fa" ? Ca(a) : {}, c = Ee(r, a);
  return a = s.iconName || c || a, r = s.prefix || r, r === "far" && !tt.far && tt.fas && !k.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const Cs = ma.filter((e) => e !== te || e !== Ot), Is = Object.keys(Ht).filter((e) => e !== te).map((e) => Object.keys(Ht[e])).flat();
function Ms(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: s = {},
    config: c = {}
  } = e, l = n === Ot, f = t.includes("fa-duotone") || t.includes("fad"), p = c.familyDefault === "duotone", u = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!l && (f || p || u) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Cs.includes(n) && (Object.keys(s).find((g) => Is.includes(g)) || c.autoFetchSvg)) {
    const g = Di.get(n).defaultShortPrefixId;
    r.prefix = g, r.iconName = Ee(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = Oe() || "fas"), r;
}
class Ls {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((s) => {
      this.definitions[s] = y(y({}, this.definitions[s] || {}), a[s]), Qt(s, a[s]);
      const c = Nn[te][s];
      c && Qt(c, a[s]), Aa();
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
        prefix: s,
        iconName: c,
        icon: l
      } = r[a], f = l[2];
      t[s] || (t[s] = {}), f.length > 0 && f.forEach((p) => {
        typeof p == "string" && (t[s][p] = l);
      }), t[s][c] = l;
    }), t;
  }
}
let Sr = [], Me = {};
const ze = {}, zs = Object.keys(ze);
function Fs(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return Sr = e, Me = {}, Object.keys(ze).forEach((r) => {
    zs.indexOf(r) === -1 && delete ze[r];
  }), Sr.forEach((r) => {
    const a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach((s) => {
      typeof a[s] == "function" && (n[s] = a[s]), typeof a[s] == "object" && Object.keys(a[s]).forEach((c) => {
        n[s] || (n[s] = {}), n[s][c] = a[s][c];
      });
    }), r.hooks) {
      const s = r.hooks();
      Object.keys(s).forEach((c) => {
        Me[c] || (Me[c] = []), Me[c].push(s[c]);
      });
    }
    r.provides && r.provides(ze);
  }), n;
}
function en(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (Me[e] || []).forEach((c) => {
    t = c.apply(null, [t, ...r]);
  }), t;
}
function Ae(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (Me[e] || []).forEach((s) => {
    s.apply(null, n);
  });
}
function _e() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return ze[e] ? ze[e].apply(null, t) : void 0;
}
function tn(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Oe();
  if (t)
    return t = Ee(n, t) || t, Er(Ma.definitions, n, t) || Er(ge.styles, n, t);
}
const Ma = new Ls(), Ds = () => {
  k.autoReplaceSvg = !1, k.observeMutations = !1, Ae("noAuto");
}, qs = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return je ? (Ae("beforeI2svg", e), _e("pseudoElements2svg", e), _e("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    k.autoReplaceSvg === !1 && (k.autoReplaceSvg = !0), k.observeMutations = !0, js(() => {
      Ws({
        autoReplaceSvgRoot: t
      }), Ae("watch", e);
    });
  }
}, $s = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Ee(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Pt(e[0]);
      return {
        prefix: n,
        iconName: Ee(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(k.cssPrefix, "-")) > -1 || e.match(ss))) {
      const t = Tt(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Oe(),
        iconName: Ee(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Oe();
      return {
        prefix: t,
        iconName: Ee(t, e) || e
      };
    }
  }
}, le = {
  noAuto: Ds,
  config: k,
  dom: qs,
  parse: $s,
  library: Ma,
  findIconDefinition: tn,
  toHtml: it
}, Ws = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = U
  } = e;
  (Object.keys(ge.styles).length > 0 || k.autoFetchSvg) && je && k.autoReplaceSvg && le.dom.i2svg({
    node: t
  });
};
function Et(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => it(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!je) return;
      const n = U.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Bs(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: s,
    transform: c
  } = e;
  if (_n(c) && n.found && !r.found) {
    const {
      width: l,
      height: f
    } = n, p = {
      x: l / f / 2,
      y: 0.5
    };
    a.style = _t(y(y({}, s), {}, {
      "transform-origin": "".concat(p.x + c.x / 16, "em ").concat(p.y + c.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Ys(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: a,
    symbol: s
  } = e;
  const c = s === !0 ? "".concat(t, "-").concat(k.cssPrefix, "-").concat(n) : s;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: y(y({}, a), {}, {
        id: c
      }),
      children: r
    }]
  }];
}
function En(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: a,
    transform: s,
    symbol: c,
    title: l,
    maskId: f,
    titleId: p,
    extra: u,
    watchable: m = !1
  } = e, {
    width: g,
    height: b
  } = n.found ? n : t, w = Yi.includes(r), x = [k.replacementClass, a ? "".concat(k.cssPrefix, "-").concat(a) : ""].filter((v) => u.classes.indexOf(v) === -1).filter((v) => v !== "" || !!v).concat(u.classes).join(" ");
  let j = {
    children: [],
    attributes: y(y({}, u.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: x,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(g, " ").concat(b)
    })
  };
  const P = w && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(g / b * 16 * 0.0625, "em")
  } : {};
  m && (j.attributes[Se] = ""), l && (j.children.push({
    tag: "title",
    attributes: {
      id: j.attributes["aria-labelledby"] || "title-".concat(p || et())
    },
    children: [l]
  }), delete j.attributes.title);
  const E = y(y({}, j), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: f,
    transform: s,
    symbol: c,
    styles: y(y({}, P), u.styles)
  }), {
    children: O,
    attributes: N
  } = n.found && t.found ? _e("generateAbstractMask", E) || {
    children: [],
    attributes: {}
  } : _e("generateAbstractIcon", E) || {
    children: [],
    attributes: {}
  };
  return E.children = O, E.attributes = N, c ? Ys(E) : Bs(E);
}
function Ar(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: a,
    title: s,
    extra: c,
    watchable: l = !1
  } = e, f = y(y(y({}, c.attributes), s ? {
    title: s
  } : {}), {}, {
    class: c.classes.join(" ")
  });
  l && (f[Se] = "");
  const p = y({}, c.styles);
  _n(a) && (p.transform = bs({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), p["-webkit-transform"] = p.transform);
  const u = _t(p);
  u.length > 0 && (f.style = u);
  const m = [];
  return m.push({
    tag: "span",
    attributes: f,
    children: [t]
  }), s && m.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [s]
  }), m;
}
function Hs(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, a = y(y(y({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), s = _t(r.styles);
  s.length > 0 && (a.style = s);
  const c = [];
  return c.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), n && c.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), c;
}
const {
  styles: $t
} = ge;
function nn(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(k.cssPrefix, "-").concat(Ft.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(k.cssPrefix, "-").concat(Ft.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(k.cssPrefix, "-").concat(Ft.PRIMARY),
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
const Us = {
  found: !1,
  width: 512,
  height: 512
};
function Vs(e, t) {
  !ba && !k.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function rn(e, t) {
  let n = t;
  return t === "fa" && k.styleDefault !== null && (t = Oe()), new Promise((r, a) => {
    if (n === "fa") {
      const s = Ca(e) || {};
      e = s.iconName || e, t = s.prefix || t;
    }
    if (e && t && $t[t] && $t[t][e]) {
      const s = $t[t][e];
      return r(nn(s));
    }
    Vs(e, t), r(y(y({}, Us), {}, {
      icon: k.showMissingIcons && e ? _e("missingIconAbstract") || {} : {}
    }));
  });
}
const Cr = () => {
}, an = k.measurePerformance && pt && pt.mark && pt.measure ? pt : {
  mark: Cr,
  measure: Cr
}, Ve = 'FA "6.7.2"', Xs = (e) => (an.mark("".concat(Ve, " ").concat(e, " begins")), () => La(e)), La = (e) => {
  an.mark("".concat(Ve, " ").concat(e, " ends")), an.measure("".concat(Ve, " ").concat(e), "".concat(Ve, " ").concat(e, " begins"), "".concat(Ve, " ").concat(e, " ends"));
};
var Rn = {
  begin: Xs,
  end: La
};
const vt = () => {
};
function Ir(e) {
  return typeof (e.getAttribute ? e.getAttribute(Se) : null) == "string";
}
function Gs(e) {
  const t = e.getAttribute ? e.getAttribute(jn) : null, n = e.getAttribute ? e.getAttribute(wn) : null;
  return t && n;
}
function Ks(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(k.replacementClass);
}
function Js() {
  return k.autoReplaceSvg === !0 ? ht.replace : ht[k.autoReplaceSvg] || ht.replace;
}
function Zs(e) {
  return U.createElementNS("http://www.w3.org/2000/svg", e);
}
function Qs(e) {
  return U.createElement(e);
}
function za(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Zs : Qs
  } = t;
  if (typeof e == "string")
    return U.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(s) {
    r.setAttribute(s, e.attributes[s]);
  }), (e.children || []).forEach(function(s) {
    r.appendChild(za(s, {
      ceFn: n
    }));
  }), r;
}
function eo(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const ht = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(za(n), t);
      }), t.getAttribute(Se) === null && k.keepOriginalSource) {
        let n = U.createComment(eo(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~On(t).indexOf(k.replacementClass))
      return ht.replace(e);
    const r = new RegExp("".concat(k.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const s = n[0].attributes.class.split(" ").reduce((c, l) => (l === k.replacementClass || l.match(r) ? c.toSvg.push(l) : c.toNode.push(l), c), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = s.toSvg.join(" "), s.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", s.toNode.join(" "));
    }
    const a = n.map((s) => it(s)).join(`
`);
    t.setAttribute(Se, ""), t.innerHTML = a;
  }
};
function Mr(e) {
  e();
}
function Fa(e, t) {
  const n = typeof t == "function" ? t : vt;
  if (e.length === 0)
    n();
  else {
    let r = Mr;
    k.mutateApproach === rs && (r = Ne.requestAnimationFrame || Mr), r(() => {
      const a = Js(), s = Rn.begin("mutate");
      e.map(a), s(), n();
    });
  }
}
let kn = !1;
function Da() {
  kn = !0;
}
function sn() {
  kn = !1;
}
let xt = null;
function Lr(e) {
  if (!wr || !k.observeMutations)
    return;
  const {
    treeCallback: t = vt,
    nodeCallback: n = vt,
    pseudoElementsCallback: r = vt,
    observeMutationsRoot: a = U
  } = e;
  xt = new wr((s) => {
    if (kn) return;
    const c = Oe();
    Be(s).forEach((l) => {
      if (l.type === "childList" && l.addedNodes.length > 0 && !Ir(l.addedNodes[0]) && (k.searchPseudoElements && r(l.target), t(l.target)), l.type === "attributes" && l.target.parentNode && k.searchPseudoElements && r(l.target.parentNode), l.type === "attributes" && Ir(l.target) && ~cs.indexOf(l.attributeName))
        if (l.attributeName === "class" && Gs(l.target)) {
          const {
            prefix: f,
            iconName: p
          } = Tt(On(l.target));
          l.target.setAttribute(jn, f || c), p && l.target.setAttribute(wn, p);
        } else Ks(l.target) && n(l.target);
    });
  }), je && xt.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function to() {
  xt && xt.disconnect();
}
function no(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const s = a.split(":"), c = s[0], l = s.slice(1);
    return c && l.length > 0 && (r[c] = l.join(":").trim()), r;
  }, {})), n;
}
function ro(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = Tt(On(e));
  return a.prefix || (a.prefix = Oe()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Es(a.prefix, e.innerText) || Tn(a.prefix, Zt(e.innerText))), !a.iconName && k.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function ao(e) {
  const t = Be(e.attributes).reduce((a, s) => (a.name !== "class" && a.name !== "style" && (a[s.name] = s.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return k.autoA11y && (n ? t["aria-labelledby"] = "".concat(k.replacementClass, "-title-").concat(r || et()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function io() {
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
function zr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: a
  } = ro(e), s = ao(e), c = en("parseNodeAttributes", {}, e);
  let l = t.styleParser ? no(e) : [];
  return y({
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
      styles: l,
      attributes: s
    }
  }, c);
}
const {
  styles: so
} = ge;
function qa(e) {
  const t = k.autoReplaceSvg === "nest" ? zr(e, {
    styleParser: !1
  }) : zr(e);
  return ~t.extra.classes.indexOf(xa) ? _e("generateLayersText", e, t) : _e("generateSvgReplacementMutation", e, t);
}
function oo() {
  return [...$i, ...Ut];
}
function Fr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!je) return Promise.resolve();
  const n = U.documentElement.classList, r = (u) => n.add("".concat(_r, "-").concat(u)), a = (u) => n.remove("".concat(_r, "-").concat(u)), s = k.autoFetchSvg ? oo() : pa.concat(Object.keys(so));
  s.includes("fa") || s.push("fa");
  const c = [".".concat(xa, ":not([").concat(Se, "])")].concat(s.map((u) => ".".concat(u, ":not([").concat(Se, "])"))).join(", ");
  if (c.length === 0)
    return Promise.resolve();
  let l = [];
  try {
    l = Be(e.querySelectorAll(c));
  } catch {
  }
  if (l.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const f = Rn.begin("onTree"), p = l.reduce((u, m) => {
    try {
      const g = qa(m);
      g && u.push(g);
    } catch (g) {
      ba || g.name === "MissingIcon" && console.error(g);
    }
    return u;
  }, []);
  return new Promise((u, m) => {
    Promise.all(p).then((g) => {
      Fa(g, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), f(), u();
      });
    }).catch((g) => {
      f(), m(g);
    });
  });
}
function lo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  qa(e).then((n) => {
    n && Fa([n], t);
  });
}
function co(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : tn(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : tn(a || {})), e(r, y(y({}, n), {}, {
      mask: a
    }));
  };
}
const fo = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = me,
    symbol: r = !1,
    mask: a = null,
    maskId: s = null,
    title: c = null,
    titleId: l = null,
    classes: f = [],
    attributes: p = {},
    styles: u = {}
  } = t;
  if (!e) return;
  const {
    prefix: m,
    iconName: g,
    icon: b
  } = e;
  return Et(y({
    type: "icon"
  }, e), () => (Ae("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), k.autoA11y && (c ? p["aria-labelledby"] = "".concat(k.replacementClass, "-title-").concat(l || et()) : (p["aria-hidden"] = "true", p.focusable = "false")), En({
    icons: {
      main: nn(b),
      mask: a ? nn(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: m,
    iconName: g,
    transform: y(y({}, me), n),
    symbol: r,
    title: c,
    maskId: s,
    titleId: l,
    extra: {
      attributes: p,
      styles: u,
      classes: f
    }
  })));
};
var uo = {
  mixout() {
    return {
      icon: co(fo)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Fr, e.nodeCallback = lo, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = U,
        callback: r = () => {
        }
      } = t;
      return Fr(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: a,
        titleId: s,
        prefix: c,
        transform: l,
        symbol: f,
        mask: p,
        maskId: u,
        extra: m
      } = n;
      return new Promise((g, b) => {
        Promise.all([rn(r, c), p.iconName ? rn(p.iconName, p.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((w) => {
          let [x, j] = w;
          g([t, En({
            icons: {
              main: x,
              mask: j
            },
            prefix: c,
            iconName: r,
            transform: l,
            symbol: f,
            maskId: u,
            title: a,
            titleId: s,
            extra: m,
            watchable: !0
          })]);
        }).catch(b);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        transform: s,
        styles: c
      } = t;
      const l = _t(c);
      l.length > 0 && (r.style = l);
      let f;
      return _n(s) && (f = _e("generateAbstractTransformGrouping", {
        main: a,
        transform: s,
        containerWidth: a.width,
        iconWidth: a.width
      })), n.push(f || a.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, po = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Et({
          type: "layer"
        }, () => {
          Ae("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((a) => {
            Array.isArray(a) ? a.map((s) => {
              r = r.concat(s.abstract);
            }) : r = r.concat(a.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(k.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, mo = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: a = {},
          styles: s = {}
        } = t;
        return Et({
          type: "counter",
          content: e
        }, () => (Ae("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Hs({
          content: e.toString(),
          title: n,
          extra: {
            attributes: a,
            styles: s,
            classes: ["".concat(k.cssPrefix, "-layers-counter"), ...r]
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
          transform: n = me,
          title: r = null,
          classes: a = [],
          attributes: s = {},
          styles: c = {}
        } = t;
        return Et({
          type: "text",
          content: e
        }, () => (Ae("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Ar({
          content: e,
          transform: y(y({}, me), n),
          title: r,
          extra: {
            attributes: s,
            styles: c,
            classes: ["".concat(k.cssPrefix, "-layers-text"), ...a]
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
        extra: s
      } = n;
      let c = null, l = null;
      if (ua) {
        const f = parseInt(getComputedStyle(t).fontSize, 10), p = t.getBoundingClientRect();
        c = p.width / f, l = p.height / f;
      }
      return k.autoA11y && !r && (s.attributes["aria-hidden"] = "true"), Promise.resolve([t, Ar({
        content: t.innerHTML,
        width: c,
        height: l,
        transform: a,
        title: r,
        extra: s,
        watchable: !0
      })]);
    };
  }
};
const vo = new RegExp('"', "ug"), Dr = [1105920, 1112319], qr = y(y(y(y({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Fi), ts), Xi), on = Object.keys(qr).reduce((e, t) => (e[t.toLowerCase()] = qr[t], e), {}), ho = Object.keys(on).reduce((e, t) => {
  const n = on[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function bo(e) {
  const t = e.replace(vo, ""), n = Ns(t, 0), r = n >= Dr[0] && n <= Dr[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Zt(a ? t[0] : t),
    isSecondary: r || a
  };
}
function yo(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (on[n] || {})[a] || ho[n];
}
function $r(e, t) {
  const n = "".concat(ns).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const c = Be(e.children).filter((g) => g.getAttribute(Xt) === t)[0], l = Ne.getComputedStyle(e, t), f = l.getPropertyValue("font-family"), p = f.match(os), u = l.getPropertyValue("font-weight"), m = l.getPropertyValue("content");
    if (c && !p)
      return e.removeChild(c), r();
    if (p && m !== "none" && m !== "") {
      const g = l.getPropertyValue("content");
      let b = yo(f, u);
      const {
        value: w,
        isSecondary: x
      } = bo(g), j = p[0].startsWith("FontAwesome");
      let P = Tn(b, w), E = P;
      if (j) {
        const O = Rs(w);
        O.iconName && O.prefix && (P = O.iconName, b = O.prefix);
      }
      if (P && !x && (!c || c.getAttribute(jn) !== b || c.getAttribute(wn) !== E)) {
        e.setAttribute(n, E), c && e.removeChild(c);
        const O = io(), {
          extra: N
        } = O;
        N.attributes[Xt] = t, rn(P, b).then((v) => {
          const L = En(y(y({}, O), {}, {
            icons: {
              main: v,
              mask: Ia()
            },
            prefix: b,
            iconName: E,
            extra: N,
            watchable: !0
          })), D = U.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(D, e.firstChild) : e.appendChild(D), D.outerHTML = L.map((B) => it(B)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function xo(e) {
  return Promise.all([$r(e, "::before"), $r(e, "::after")]);
}
function jo(e) {
  return e.parentNode !== document.head && !~as.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Xt) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Wr(e) {
  if (je)
    return new Promise((t, n) => {
      const r = Be(e.querySelectorAll("*")).filter(jo).map(xo), a = Rn.begin("searchPseudoElements");
      Da(), Promise.all(r).then(() => {
        a(), sn(), t();
      }).catch(() => {
        a(), sn(), n();
      });
    });
}
var wo = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Wr, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = U
      } = t;
      k.searchPseudoElements && Wr(n);
    };
  }
};
let Br = !1;
var No = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Da(), Br = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Lr(en("mutationObserverCallbacks", {}));
      },
      noAuto() {
        to();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Br ? sn() : Lr(en("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Yr = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const a = r.toLowerCase().split("-"), s = a[0];
    let c = a.slice(1).join("-");
    if (s && c === "h")
      return n.flipX = !0, n;
    if (s && c === "v")
      return n.flipY = !0, n;
    if (c = parseFloat(c), isNaN(c))
      return n;
    switch (s) {
      case "grow":
        n.size = n.size + c;
        break;
      case "shrink":
        n.size = n.size - c;
        break;
      case "left":
        n.x = n.x - c;
        break;
      case "right":
        n.x = n.x + c;
        break;
      case "up":
        n.y = n.y - c;
        break;
      case "down":
        n.y = n.y + c;
        break;
      case "rotate":
        n.rotate = n.rotate + c;
        break;
    }
    return n;
  }, t);
};
var Oo = {
  mixout() {
    return {
      parse: {
        transform: (e) => Yr(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Yr(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: a,
        iconWidth: s
      } = t;
      const c = {
        transform: "translate(".concat(a / 2, " 256)")
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), f = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), p = "rotate(".concat(r.rotate, " 0 0)"), u = {
        transform: "".concat(l, " ").concat(f, " ").concat(p)
      }, m = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, g = {
        outer: c,
        inner: u,
        path: m
      };
      return {
        tag: "g",
        attributes: y({}, g.outer),
        children: [{
          tag: "g",
          attributes: y({}, g.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: y(y({}, n.icon.attributes), g.path)
          }]
        }]
      };
    };
  }
};
const Wt = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Hr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function _o(e) {
  return e.tag === "g" ? e.children : [e];
}
var Po = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Tt(n.split(" ").map((a) => a.trim())) : Ia();
        return r.prefix || (r.prefix = Oe()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        mask: s,
        maskId: c,
        transform: l
      } = t;
      const {
        width: f,
        icon: p
      } = a, {
        width: u,
        icon: m
      } = s, g = hs({
        transform: l,
        containerWidth: u,
        iconWidth: f
      }), b = {
        tag: "rect",
        attributes: y(y({}, Wt), {}, {
          fill: "white"
        })
      }, w = p.children ? {
        children: p.children.map(Hr)
      } : {}, x = {
        tag: "g",
        attributes: y({}, g.inner),
        children: [Hr(y({
          tag: p.tag,
          attributes: y(y({}, p.attributes), g.path)
        }, w))]
      }, j = {
        tag: "g",
        attributes: y({}, g.outer),
        children: [x]
      }, P = "mask-".concat(c || et()), E = "clip-".concat(c || et()), O = {
        tag: "mask",
        attributes: y(y({}, Wt), {}, {
          id: P,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [b, j]
      }, N = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: E
          },
          children: _o(m)
        }, O]
      };
      return n.push(N, {
        tag: "rect",
        attributes: y({
          fill: "currentColor",
          "clip-path": "url(#".concat(E, ")"),
          mask: "url(#".concat(P, ")")
        }, Wt)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, To = {
  provides(e) {
    let t = !1;
    Ne.matchMedia && (t = Ne.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: y(y({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const s = y(y({}, a), {}, {
        attributeName: "opacity"
      }), c = {
        tag: "circle",
        attributes: y(y({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || c.children.push({
        tag: "animate",
        attributes: y(y({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: y(y({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(c), n.push({
        tag: "path",
        attributes: y(y({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: y(y({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: y(y({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: y(y({}, s), {}, {
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
}, Eo = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Ro = [xs, uo, po, mo, go, wo, No, Oo, Po, To, Eo];
Fs(Ro, {
  mixoutsTo: le
});
le.noAuto;
le.config;
le.library;
le.dom;
const ln = le.parse;
le.findIconDefinition;
le.toHtml;
const ko = le.icon;
le.layer;
le.text;
le.counter;
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
function pe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ur(Object(n), !0).forEach(function(r) {
      Le(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ur(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function jt(e) {
  "@babel/helpers - typeof";
  return jt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jt(e);
}
function Le(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function So(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, s;
  for (s = 0; s < r.length; s++)
    a = r[s], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Ao(e, t) {
  if (e == null) return {};
  var n = So(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (a = 0; a < s.length; a++)
      r = s[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function cn(e) {
  return Co(e) || Io(e) || Mo(e) || Lo();
}
function Co(e) {
  if (Array.isArray(e)) return fn(e);
}
function Io(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Mo(e, t) {
  if (e) {
    if (typeof e == "string") return fn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fn(e, t);
  }
}
function fn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Lo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zo(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, s = e.bounce, c = e.shake, l = e.flash, f = e.spin, p = e.spinPulse, u = e.spinReverse, m = e.pulse, g = e.fixedWidth, b = e.inverse, w = e.border, x = e.listItem, j = e.flip, P = e.size, E = e.rotation, O = e.pull, N = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": s,
    "fa-shake": c,
    "fa-flash": l,
    "fa-spin": f,
    "fa-spin-reverse": u,
    "fa-spin-pulse": p,
    "fa-pulse": m,
    "fa-fw": g,
    "fa-inverse": b,
    "fa-border": w,
    "fa-li": x,
    "fa-flip": j === !0,
    "fa-flip-horizontal": j === "horizontal" || j === "both",
    "fa-flip-vertical": j === "vertical" || j === "both"
  }, Le(t, "fa-".concat(P), typeof P < "u" && P !== null), Le(t, "fa-rotate-".concat(E), typeof E < "u" && E !== null && E !== 0), Le(t, "fa-pull-".concat(O), typeof O < "u" && O !== null), Le(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(N).map(function(v) {
    return N[v] ? v : null;
  }).filter(function(v) {
    return v;
  });
}
function Fo(e) {
  return e = e - 0, e === e;
}
function $a(e) {
  return Fo(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Do = ["style"];
function qo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function $o(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = $a(n.slice(0, r)), s = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[qo(a)] = s : t[a] = s, t;
  }, {});
}
function Wa(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(f) {
    return Wa(e, f);
  }), a = Object.keys(t.attributes || {}).reduce(function(f, p) {
    var u = t.attributes[p];
    switch (p) {
      case "class":
        f.attrs.className = u, delete t.attributes.class;
        break;
      case "style":
        f.attrs.style = $o(u);
        break;
      default:
        p.indexOf("aria-") === 0 || p.indexOf("data-") === 0 ? f.attrs[p.toLowerCase()] = u : f.attrs[$a(p)] = u;
    }
    return f;
  }, {
    attrs: {}
  }), s = n.style, c = s === void 0 ? {} : s, l = Ao(n, Do);
  return a.attrs.style = pe(pe({}, a.attrs.style), c), e.apply(void 0, [t.tag, pe(pe({}, a.attrs), l)].concat(cn(r)));
}
var Ba = !1;
try {
  Ba = process.env.NODE_ENV === "production";
} catch {
}
function Wo() {
  if (!Ba && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Vr(e) {
  if (e && jt(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (ln.icon)
    return ln.icon(e);
  if (e === null)
    return null;
  if (e && jt(e) === "object" && e.prefix && e.iconName)
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
function Bt(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Le({}, e, t) : {};
}
var Xr = {
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
}, ee = /* @__PURE__ */ Nt.forwardRef(function(e, t) {
  var n = pe(pe({}, Xr), e), r = n.icon, a = n.mask, s = n.symbol, c = n.className, l = n.title, f = n.titleId, p = n.maskId, u = Vr(r), m = Bt("classes", [].concat(cn(zo(n)), cn((c || "").split(" ")))), g = Bt("transform", typeof n.transform == "string" ? ln.transform(n.transform) : n.transform), b = Bt("mask", Vr(a)), w = ko(u, pe(pe(pe(pe({}, m), g), b), {}, {
    symbol: s,
    title: l,
    titleId: f,
    maskId: p
  }));
  if (!w)
    return Wo("Could not find icon", u), null;
  var x = w.abstract, j = {
    ref: t
  };
  return Object.keys(n).forEach(function(P) {
    Xr.hasOwnProperty(P) || (j[P] = n[P]);
  }), Bo(x[0], j);
});
ee.displayName = "FontAwesomeIcon";
ee.propTypes = {
  beat: o.bool,
  border: o.bool,
  beatFade: o.bool,
  bounce: o.bool,
  className: o.string,
  fade: o.bool,
  flash: o.bool,
  mask: o.oneOfType([o.object, o.array, o.string]),
  maskId: o.string,
  fixedWidth: o.bool,
  inverse: o.bool,
  flip: o.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: o.oneOfType([o.object, o.array, o.string]),
  listItem: o.bool,
  pull: o.oneOf(["right", "left"]),
  pulse: o.bool,
  rotation: o.oneOf([0, 90, 180, 270]),
  shake: o.bool,
  size: o.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: o.bool,
  spinPulse: o.bool,
  spinReverse: o.bool,
  symbol: o.oneOfType([o.bool, o.string]),
  title: o.string,
  titleId: o.string,
  transform: o.oneOfType([o.string, o.object]),
  swapOpacity: o.bool
};
var Bo = Wa.bind(null, Nt.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Yo = {
  prefix: "fas",
  iconName: "cloud",
  icon: [640, 512, [9729], "f0c2", "M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"]
}, Ho = {
  prefix: "fas",
  iconName: "compass",
  icon: [512, 512, [129517], "f14e", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, Uo = {
  prefix: "fas",
  iconName: "circle-exclamation",
  icon: [512, 512, ["exclamation-circle"], "f06a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, Vo = Uo, Xo = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, Go = Xo, Ko = {
  prefix: "fas",
  iconName: "arrow-left",
  icon: [448, 512, [8592], "f060", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]
}, Yt = {
  prefix: "fas",
  iconName: "phone-volume",
  icon: [512, 512, ["volume-control-phone"], "f2a0", "M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"]
}, Jo = {
  prefix: "fas",
  iconName: "envelope",
  icon: [512, 512, [128386, 9993, 61443], "f0e0", "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]
}, Zo = {
  prefix: "fas",
  iconName: "circle-info",
  icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, Gr = Zo, Qo = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, el = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, tl = el, nl = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, rl = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, al = rl, il = {
  prefix: "fas",
  iconName: "exclamation",
  icon: [128, 512, [10069, 10071, 61738], "21", "M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32L96 64zM64 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]
}, Sn = ({
  items: e,
  truncateMiddle: t = !1,
  className: n = "",
  customSeparator: r
}) => {
  const [a, s] = ke(window.innerWidth < 768), [c, l] = ke(!1), f = Xe(null), p = Xe(null), u = (w) => {
    if (!f.current || !p.current || !t || e.length <= 3 || a) {
      l(!1);
      return;
    }
    if (typeof w == "boolean") {
      l(w);
      return;
    }
    l(!1), requestAnimationFrame(() => {
      const x = f.current.offsetWidth, j = p.current;
      Array.from(j.children).reduce((E, O) => E + O.offsetWidth, 0) > x && l(!0);
    });
  };
  Ge(() => {
    const w = () => {
      const j = window.innerWidth < 768;
      s(j), j ? l(!1) : u();
    };
    window.addEventListener("resize", w), u();
    const x = new ResizeObserver(() => {
      u();
    });
    return f.current && x.observe(f.current), () => {
      window.removeEventListener("resize", w), x.disconnect();
    };
  }, [a, t, e]), Ge(() => {
    process.env.NODE_ENV === "test" && t && e.length > 3 && u(!0);
  }, [t, e]);
  const m = () => r || /* @__PURE__ */ i.jsx(
    ee,
    {
      icon: a ? Ko : nl,
      className: "pgov-breadcrumb__separator",
      "aria-hidden": "true"
    }
  ), g = () => {
    if (!c || a)
      return e.map((P, E) => /* @__PURE__ */ i.jsxs("li", { className: "pgov-breadcrumb__item", children: [
        a && E > 0 && m(),
        E === e.length - 1 ? /* @__PURE__ */ i.jsx("span", { className: "pgov-breadcrumb__current", "aria-current": "page", children: P.text }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("a", { href: P.href, className: "pgov-breadcrumb__link", children: P.text }),
          !a && m()
        ] })
      ] }, E));
    const w = e[0], x = e[e.length - 1], j = e.length - 2;
    return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("li", { className: "pgov-breadcrumb__item", children: [
        /* @__PURE__ */ i.jsx("a", { href: w.href, className: "pgov-breadcrumb__link", children: w.text }),
        m()
      ] }, "first"),
      /* @__PURE__ */ i.jsxs("li", { className: "pgov-breadcrumb__item ellipsis", children: [
        /* @__PURE__ */ i.jsx("span", { "aria-label": `${j} more levels`, children: "..." }),
        m()
      ] }, "ellipsis"),
      /* @__PURE__ */ i.jsx("li", { className: "pgov-breadcrumb__item", children: /* @__PURE__ */ i.jsx("span", { className: "pgov-breadcrumb__current", "aria-current": "page", children: x.text }) }, "last")
    ] });
  }, b = [
    "pgov-breadcrumb",
    c && !a && "pgov-breadcrumb--truncated",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i.jsx(
    "nav",
    {
      className: b,
      "aria-label": "Breadcrumbs",
      ref: f,
      children: /* @__PURE__ */ i.jsx(
        "ol",
        {
          className: `pgov-breadcrumb__list ${c ? "pgov-breadcrumb__list--truncate" : ""}`,
          ref: p,
          children: g()
        }
      )
    }
  );
};
Sn.propTypes = {
  /**
   * Array of breadcrumb items with text and href
   */
  items: o.arrayOf(
    o.shape({
      text: o.string.isRequired,
      href: o.string
    })
  ).isRequired,
  /**
   * Whether to truncate middle items when breadcrumbs get too long
   */
  truncateMiddle: o.bool,
  /**
   * Additional CSS class names
   */
  className: o.string,
  /**
   * Custom separator element
   */
  customSeparator: o.node
};
Sn.defaultProps = {
  truncateMiddle: !1,
  className: "",
  customSeparator: void 0
};
const Ya = ({
  bannerProps: e,
  headerProps: t,
  skipNavProps: n,
  footerProps: r,
  breadcrumbsProps: a,
  children: s,
  includeBanner: c = !0,
  includeSkipNav: l = !0,
  includeFooter: f = !0,
  includeBreadcrumbs: p = !0,
  className: u = ""
}) => /* @__PURE__ */ i.jsxs("div", { className: `pgov-page-template ${u}`, children: [
  l && /* @__PURE__ */ i.jsx(bn, { ...n }),
  c && /* @__PURE__ */ i.jsx(mn, { ...e }),
  /* @__PURE__ */ i.jsx(hn, { ...t }),
  /* @__PURE__ */ i.jsxs(
    "main",
    {
      id: "main-content",
      className: "pgov-page-template-main",
      tabIndex: "-1",
      role: "main",
      "aria-label": "Main content",
      children: [
        p && /* @__PURE__ */ i.jsx(Sn, { ...a }),
        s
      ]
    }
  ),
  f && /* @__PURE__ */ i.jsx(yn, { ...r })
] });
Ya.propTypes = {
  /** Props for the Banner component */
  bannerProps: o.object,
  /** Props for the Header component */
  headerProps: o.object.isRequired,
  /** Props for the SkipNav component */
  skipNavProps: o.object,
  /** Props for the Footer component */
  footerProps: o.object,
  /** Props for the Breadcrumbs component */
  breadcrumbsProps: o.object,
  /** Content to be rendered in the main section */
  children: o.node,
  /** Whether to include the Banner component */
  includeBanner: o.bool,
  /** Whether to include the SkipNav component */
  includeSkipNav: o.bool,
  /** Whether to include the Footer component */
  includeFooter: o.bool,
  /** Whether to include the Breadcrumbs component */
  includeBreadcrumbs: o.bool,
  /** Additional CSS class name */
  className: o.string
};
Ya.defaultProps = {
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
const Ha = ({ item: e, isActive: t, isExpanded: n, isParent: r, position: a, onClick: s }) => {
  const c = [
    "side-nav-item",
    t ? "active" : "",
    r ? "parent" : "child",
    a,
    n ? "expanded" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i.jsxs(
    "a",
    {
      href: e.link,
      className: c,
      "aria-current": t ? "page" : void 0,
      "aria-expanded": r ? n : void 0,
      onClick: (l) => {
        r && (l.preventDefault(), s());
      },
      children: [
        /* @__PURE__ */ i.jsx("div", { className: `nav-indicator ${t ? "active-indicator" : ""}` }),
        /* @__PURE__ */ i.jsx("div", { className: "nav-content", children: /* @__PURE__ */ i.jsx("div", { className: "side-nav-text", children: e.title }) })
      ]
    }
  );
};
Ha.propTypes = {
  item: o.shape({
    title: o.string.isRequired,
    link: o.string.isRequired,
    children: o.arrayOf(o.shape({
      title: o.string.isRequired,
      link: o.string.isRequired
    }))
  }).isRequired,
  isActive: o.bool.isRequired,
  isExpanded: o.bool.isRequired,
  isParent: o.bool.isRequired,
  position: o.oneOf(["top", "middle", "bottom"]).isRequired,
  onClick: o.func.isRequired
};
const Ua = ({ items: e, activeItemId: t, activeIndex: n }) => {
  const [r, a] = ke(null), s = (l, f, p = !1) => l === 0 && !p ? "top" : l === f - 1 ? "bottom" : "middle", c = (l, f = !1) => l.map((p, u) => {
    var x;
    const m = !!((x = p.children) != null && x.length), g = t ? p.link === t : u === n, b = r === p.link, w = s(u, l.length, f);
    return /* @__PURE__ */ i.jsxs("li", { className: "nav-item-container", children: [
      /* @__PURE__ */ i.jsx(
        Ha,
        {
          item: p,
          isActive: g,
          isExpanded: b,
          isParent: m,
          position: w,
          onClick: () => {
            a(b ? null : p.link);
          }
        }
      ),
      m && b && /* @__PURE__ */ i.jsx("ul", { className: "nav-children", children: c(p.children, !0) })
    ] }, p.link);
  });
  return /* @__PURE__ */ i.jsx(
    "nav",
    {
      className: "side-nav",
      "aria-label": "Section Navigation",
      role: "navigation",
      children: /* @__PURE__ */ i.jsx("ul", { children: c(e) })
    }
  );
};
Ua.propTypes = {
  items: o.arrayOf(
    o.shape({
      title: o.string.isRequired,
      link: o.string.isRequired,
      children: o.arrayOf(o.shape({
        title: o.string.isRequired,
        link: o.string.isRequired
      }))
    })
  ).isRequired,
  activeItemId: o.string,
  activeIndex: o.number
};
Ua.defaultProps = {
  activeItemId: null,
  activeIndex: null
};
const sl = ({ heading: e, description: t, children: n }) => {
  const r = `summary-box-${e.toLowerCase().replace(/\s+/g, "-")}`;
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: "usa-summary-box",
      role: "region",
      "aria-labelledby": r,
      children: /* @__PURE__ */ i.jsxs("div", { className: "usa-summary-box__body", children: [
        /* @__PURE__ */ i.jsx("h4", { className: "usa-summary-box__heading", id: r, children: e }),
        t && /* @__PURE__ */ i.jsx("div", { className: "summary-box-description", children: t }),
        /* @__PURE__ */ i.jsx("div", { className: "usa-summary-box__text", children: n })
      ] })
    }
  );
};
sl.propTypes = {
  heading: o.string.isRequired,
  description: o.string,
  children: o.node.isRequired
};
const Va = ({ number: e }) => /* @__PURE__ */ i.jsxs("div", { className: "stepNumberWrapper", children: [
  /* @__PURE__ */ i.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      className: "stepNumberSvg",
      children: /* @__PURE__ */ i.jsx(
        "circle",
        {
          cx: "24",
          cy: "24",
          r: "22"
        }
      )
    }
  ),
  /* @__PURE__ */ i.jsx("span", { className: "stepNumberText", children: e })
] });
Va.propTypes = {
  number: o.number.isRequired
};
const Xa = ({ step: e, stepNumber: t, isLast: n }) => /* @__PURE__ */ i.jsxs("div", { className: "stepItem", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "stepNumberContainer", children: [
    /* @__PURE__ */ i.jsx(Va, { number: t }),
    !n && /* @__PURE__ */ i.jsx("div", { className: "verticalBar" })
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "stepContent", children: [
    /* @__PURE__ */ i.jsx("h3", { className: "stepHeading", children: e.heading }),
    /* @__PURE__ */ i.jsx("p", { className: "stepDescription", children: e.description })
  ] })
] });
Xa.propTypes = {
  step: o.shape({
    heading: o.string.isRequired,
    description: o.string.isRequired
  }).isRequired,
  stepNumber: o.number.isRequired,
  isLast: o.bool.isRequired
};
const ol = ({ title: e, mainDescription: t, steps: n }) => /* @__PURE__ */ i.jsxs("div", { className: "processSteps", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "header", children: [
    /* @__PURE__ */ i.jsx("h2", { className: "title", children: e }),
    /* @__PURE__ */ i.jsx("p", { className: "mainDescription", children: t })
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "stepsContainer", children: n.map((r, a) => /* @__PURE__ */ i.jsx(
    Xa,
    {
      step: r,
      stepNumber: a + 1,
      isLast: a === n.length - 1
    },
    a
  )) })
] });
ol.propTypes = {
  title: o.string.isRequired,
  mainDescription: o.string.isRequired,
  steps: o.arrayOf(
    o.shape({
      heading: o.string.isRequired,
      description: o.string.isRequired
    })
  ).isRequired
};
const ll = ({ variant: e = "default", children: t, className: n, ...r }) => {
  const c = ["usa-tag", e === "big" ? "usa-tag--big" : "", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ i.jsx("span", { className: c, ...r, children: t });
};
ll.propTypes = {
  /** The content of the tag */
  children: o.node.isRequired,
  /** The variant of the tag */
  variant: o.oneOf(["default", "big"]),
  /** Additional className to be applied to the tag */
  className: o.string
};
const cl = ({
  variant: e = "default",
  buttonText: t = "Search",
  className: n,
  id: r,
  name: a = "search",
  placeholder: s,
  onSubmit: c,
  ...l
}) => {
  const u = ["usa-search", e === "big" ? "usa-search--big" : e === "small" ? "usa-search--small" : "", n].filter(Boolean).join(" "), m = (g) => {
    g.preventDefault(), c && c(g);
  };
  return /* @__PURE__ */ i.jsx("section", { "aria-label": `${e} search component`, children: /* @__PURE__ */ i.jsxs("form", { className: u, role: "search", onSubmit: m, children: [
    /* @__PURE__ */ i.jsx("label", { className: "usa-sr-only", htmlFor: r, children: t }),
    /* @__PURE__ */ i.jsx(
      "input",
      {
        className: "usa-input",
        id: r,
        type: "search",
        name: a,
        placeholder: s,
        ...l
      }
    ),
    /* @__PURE__ */ i.jsx("button", { className: "usa-button", type: "submit", children: e === "small" ? /* @__PURE__ */ i.jsx(
      ee,
      {
        icon: tl,
        className: "usa-search__submit-icon",
        "aria-hidden": "true"
      }
    ) : /* @__PURE__ */ i.jsx("span", { className: "usa-search__submit-text", children: t }) })
  ] }) });
};
cl.propTypes = {
  /** The variant of the search component */
  variant: o.oneOf(["default", "big", "small"]),
  /** The text to display on the search button */
  buttonText: o.string,
  /** Additional className to be applied to the search component */
  className: o.string,
  /** The id of the search input */
  id: o.string.isRequired,
  /** The name of the search input */
  name: o.string,
  /** The placeholder text for the search input */
  placeholder: o.string,
  /** Function to call when the form is submitted */
  onSubmit: o.func
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const fl = {
  prefix: "fab",
  iconName: "instagram",
  icon: [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
}, ul = {
  prefix: "fab",
  iconName: "facebook",
  icon: [512, 512, [62e3], "f09a", "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]
}, dl = {
  prefix: "fab",
  iconName: "twitter",
  icon: [512, 512, [], "f099", "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]
}, pl = ({
  title: e,
  emailAddress: t,
  officePhone: n,
  informationPhone: r,
  relayServicePhone: a,
  socialMedia: s,
  officeDetails: c,
  className: l
}) => {
  const {
    facebook: f,
    twitter: p,
    bluesky: u,
    instagram: m
  } = s || {}, {
    address: g,
    room: b,
    city: w,
    state: x,
    zip: j,
    days: P,
    hours: E
  } = c || {};
  return /* @__PURE__ */ i.jsxs("div", { className: `pgov-contacts ${l || ""}`, children: [
    /* @__PURE__ */ i.jsx("div", { className: "pgov-contacts__border" }),
    /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__container", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__section", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__section-header", children: [
          /* @__PURE__ */ i.jsx("h3", { className: "pgov-contacts__heading", children: e }),
          /* @__PURE__ */ i.jsx("div", { className: "pgov-contacts__button-container", children: /* @__PURE__ */ i.jsxs(
            "a",
            {
              href: `mailto:${t}`,
              className: "pgov-contacts__button",
              "aria-label": `Contact ${e} via email`,
              children: [
                /* @__PURE__ */ i.jsx(ee, { icon: Jo, className: "pgov-contacts__button-icon" }),
                /* @__PURE__ */ i.jsxs("span", { children: [
                  "Contact this ",
                  e
                ] })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__phone-list", children: [
          n && /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__item", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__item-header", children: [
              /* @__PURE__ */ i.jsx(ee, { icon: Yt, className: "pgov-contacts__icon" }),
              /* @__PURE__ */ i.jsx("span", { className: "pgov-contacts__label", children: "Phone: Office" })
            ] }),
            /* @__PURE__ */ i.jsx("a", { href: `tel:${n}`, className: "pgov-contacts__link", children: n })
          ] }),
          r && /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__item", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__item-header", children: [
              /* @__PURE__ */ i.jsx(ee, { icon: Yt, className: "pgov-contacts__icon" }),
              /* @__PURE__ */ i.jsx("span", { className: "pgov-contacts__label", children: "Phone: Information" })
            ] }),
            /* @__PURE__ */ i.jsx("a", { href: `tel:${r}`, className: "pgov-contacts__link", children: r })
          ] }),
          a && /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__item", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__item-header", children: [
              /* @__PURE__ */ i.jsx(ee, { icon: Yt, className: "pgov-contacts__icon" }),
              /* @__PURE__ */ i.jsx("span", { className: "pgov-contacts__label", children: "Phone: Oregon Relay Service" })
            ] }),
            /* @__PURE__ */ i.jsx("a", { href: `tel:${a}`, className: "pgov-contacts__link", children: a })
          ] })
        ] })
      ] }),
      s && /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__section", children: [
        /* @__PURE__ */ i.jsx("h3", { className: "pgov-contacts__heading", children: "Social Media" }),
        /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__social-list", children: [
          f && /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__item", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__item-header", children: [
              /* @__PURE__ */ i.jsx(ee, { icon: ul, className: "pgov-contacts__icon" }),
              /* @__PURE__ */ i.jsx("span", { className: "pgov-contacts__label", children: "Facebook" })
            ] }),
            /* @__PURE__ */ i.jsx("a", { href: `https://facebook.com/${f}`, className: "pgov-contacts__link", target: "_blank", rel: "noopener noreferrer", children: f })
          ] }),
          p && /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__item", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__item-header", children: [
              /* @__PURE__ */ i.jsx(ee, { icon: dl, className: "pgov-contacts__icon" }),
              /* @__PURE__ */ i.jsx("span", { className: "pgov-contacts__label", children: "X (Twitter)" })
            ] }),
            /* @__PURE__ */ i.jsx("a", { href: `https://twitter.com/${p}`, className: "pgov-contacts__link", target: "_blank", rel: "noopener noreferrer", children: p })
          ] }),
          u && /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__item", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__item-header", children: [
              /* @__PURE__ */ i.jsx(ee, { icon: Yo, className: "pgov-contacts__icon" }),
              /* @__PURE__ */ i.jsx("span", { className: "pgov-contacts__label", children: "Bluesky" })
            ] }),
            /* @__PURE__ */ i.jsx("a", { href: `https://bsky.app/profile/${u}`, className: "pgov-contacts__link", target: "_blank", rel: "noopener noreferrer", children: u })
          ] }),
          m && /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__item", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__item-header", children: [
              /* @__PURE__ */ i.jsx(ee, { icon: fl, className: "pgov-contacts__icon" }),
              /* @__PURE__ */ i.jsx("span", { className: "pgov-contacts__label", children: "Instagram" })
            ] }),
            /* @__PURE__ */ i.jsx("a", { href: `https://instagram.com/${m}`, className: "pgov-contacts__link", target: "_blank", rel: "noopener noreferrer", children: m })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__section", children: [
        /* @__PURE__ */ i.jsx("h3", { className: "pgov-contacts__heading", children: "Office" }),
        /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__office-info", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__item", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__item-header", children: [
              /* @__PURE__ */ i.jsx(ee, { icon: Ho, className: "pgov-contacts__icon" }),
              /* @__PURE__ */ i.jsx("span", { className: "pgov-contacts__label", children: "Address" })
            ] }),
            /* @__PURE__ */ i.jsxs("a", { href: `https://maps.google.com/?q=${g} ${w}, ${x} ${j}`, className: "pgov-contacts__link", target: "_blank", rel: "noopener noreferrer", children: [
              g,
              /* @__PURE__ */ i.jsx("br", {}),
              b && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                b,
                /* @__PURE__ */ i.jsx("br", {})
              ] }),
              w,
              ", ",
              x,
              " ",
              j
            ] })
          ] }),
          E && /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__item", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__item-header", children: [
              /* @__PURE__ */ i.jsx(ee, { icon: Qo, className: "pgov-contacts__icon" }),
              /* @__PURE__ */ i.jsx("span", { className: "pgov-contacts__label", children: "Hours" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "pgov-contacts__hours-value", children: [
              /* @__PURE__ */ i.jsx("div", { children: P }),
              /* @__PURE__ */ i.jsx("div", { children: E })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
};
pl.propTypes = {
  title: o.string.isRequired,
  emailAddress: o.string.isRequired,
  officePhone: o.string,
  informationPhone: o.string,
  relayServicePhone: o.string,
  socialMedia: o.shape({
    facebook: o.string,
    twitter: o.string,
    bluesky: o.string,
    instagram: o.string
  }),
  officeDetails: o.shape({
    address: o.string.isRequired,
    room: o.string,
    city: o.string.isRequired,
    state: o.string.isRequired,
    zip: o.string.isRequired,
    hours: o.string
  }).isRequired,
  className: o.string
};
const ml = ({
  title: e,
  subtitle: t,
  searchComponent: n,
  links: r = [],
  className: a,
  ...s
}) => {
  const c = "pgov-hero-homepage", l = [
    c,
    a
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i.jsxs("div", { className: l, ...s, children: [
    /* @__PURE__ */ i.jsx("div", { className: `${c}__title-container`, children: /* @__PURE__ */ i.jsx("h1", { className: `${c}__title`, children: e }) }),
    /* @__PURE__ */ i.jsx("div", { className: `${c}__search-container`, children: n }),
    t && /* @__PURE__ */ i.jsx("div", { className: `${c}__subtitle-container`, children: /* @__PURE__ */ i.jsx("h2", { className: `${c}__subtitle`, children: t }) }),
    r.length > 0 && /* @__PURE__ */ i.jsx("div", { className: `${c}__links-container`, children: r.map((f, p) => /* @__PURE__ */ i.jsx(
      "a",
      {
        href: f.href,
        className: `${c}__link`,
        ...f.props,
        children: f.text
      },
      p
    )) })
  ] });
};
ml.propTypes = {
  title: o.string.isRequired,
  subtitle: o.string,
  searchComponent: o.node.isRequired,
  links: o.arrayOf(
    o.shape({
      text: o.string.isRequired,
      href: o.string.isRequired,
      props: o.object
    })
  ),
  className: o.string
};
const gl = ({
  title: e,
  description: t,
  tags: n = [],
  image: r,
  actionButton: a,
  className: s,
  ...c
}) => {
  const l = "pgov-hero-global", f = Nt.useId(), p = [
    l,
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i.jsx(
    "section",
    {
      className: p,
      role: "banner",
      "aria-labelledby": f,
      ...c,
      children: /* @__PURE__ */ i.jsxs("div", { className: `${l}__container`, children: [
        /* @__PURE__ */ i.jsx("div", { className: `${l}__content-wrapper`, children: /* @__PURE__ */ i.jsxs("div", { className: `${l}__content`, children: [
          /* @__PURE__ */ i.jsx(
            "h1",
            {
              id: f,
              className: `${l}__title`,
              children: e
            }
          ),
          n.length > 0 && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `${l}__tags`,
              "aria-label": "Content categories",
              children: n.map((u, m) => /* @__PURE__ */ i.jsx(
                "span",
                {
                  className: `${l}__tag`,
                  children: u
                },
                m
              ))
            }
          ),
          t && /* @__PURE__ */ i.jsx("p", { className: `${l}__description`, children: t }),
          a && /* @__PURE__ */ i.jsx("div", { className: `${l}__action`, children: a })
        ] }) }),
        r && /* @__PURE__ */ i.jsx("div", { className: `${l}__image-wrapper`, children: /* @__PURE__ */ i.jsxs("div", { className: `${l}__image-container`, children: [
          /* @__PURE__ */ i.jsx(
            "img",
            {
              src: typeof r.src == "string" ? r.src : r.src.default || r.src,
              alt: r.alt || "",
              className: `${l}__image`,
              loading: "lazy",
              onError: (u) => {
                console.error("Image failed to load:", r.src), console.error("Error event:", u), console.error("Image element:", u.target), console.error("Image natural dimensions:", u.target.naturalWidth, u.target.naturalHeight), u.target.classList.add(`${l}__image--error`);
              },
              onLoad: (u) => {
                console.log("Image loaded successfully:", r.src), console.log("Image element:", u.target), console.log("Image natural dimensions:", u.target.naturalWidth, u.target.naturalHeight);
              }
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: `${l}__image-placeholder`, "aria-hidden": "true" })
        ] }) })
      ] })
    }
  );
};
gl.propTypes = {
  /** The main title of the hero section */
  title: o.string.isRequired,
  /** Optional description text */
  description: o.string,
  /** Array of tag strings to display */
  tags: o.arrayOf(o.string),
  /** Optional image configuration */
  image: o.shape({
    src: o.oneOfType([
      o.string,
      o.object
      // For Vite/webpack imported assets
    ]).isRequired,
    alt: o.string
  }),
  /** Optional action button component */
  actionButton: o.node,
  /** Additional CSS class name */
  className: o.string
};
const An = ({ name: e, variable: t, value: n, className: r }) => {
  const a = ["pgov-font-family-display", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ i.jsxs("div", { className: a, children: [
    /* @__PURE__ */ i.jsx("div", { className: "pgov-font-family-display-example", style: { fontFamily: n }, children: "The quick brown fox jumps over the lazy dog" }),
    /* @__PURE__ */ i.jsxs("div", { className: "pgov-font-family-display-metadata", children: [
      /* @__PURE__ */ i.jsx("div", { className: "pgov-font-family-display-name", children: e }),
      /* @__PURE__ */ i.jsx("code", { className: "pgov-font-family-display-variable", children: t }),
      /* @__PURE__ */ i.jsx("div", { className: "pgov-font-family-display-value", children: n })
    ] })
  ] });
};
An.propTypes = {
  /** Name of the font family */
  name: o.string.isRequired,
  /** CSS variable name */
  variable: o.string.isRequired,
  /** Actual font-family value */
  value: o.string.isRequired,
  /** Additional CSS class */
  className: o.string
};
An.defaultProps = {
  className: ""
};
const Cn = ({ name: e, variable: t, value: n, sizeInPx: r, className: a }) => {
  const s = ["pgov-font-size-display", a].filter(Boolean).join(" ");
  return /* @__PURE__ */ i.jsxs("div", { className: s, children: [
    /* @__PURE__ */ i.jsx("div", { className: "pgov-font-size-display-example", style: { fontSize: n }, children: "Aa" }),
    /* @__PURE__ */ i.jsxs("div", { className: "pgov-font-size-display-metadata", children: [
      /* @__PURE__ */ i.jsx("div", { className: "pgov-font-size-display-name", children: e }),
      /* @__PURE__ */ i.jsx("code", { className: "pgov-font-size-display-variable", children: t }),
      /* @__PURE__ */ i.jsxs("div", { className: "pgov-font-size-display-value", children: [
        n,
        " (",
        r,
        ")"
      ] })
    ] })
  ] });
};
Cn.propTypes = {
  /** Name of the font size */
  name: o.string.isRequired,
  /** CSS variable name */
  variable: o.string.isRequired,
  /** Actual font-size value (with unit) */
  value: o.string.isRequired,
  /** Size in pixels for reference */
  sizeInPx: o.string.isRequired,
  /** Additional CSS class */
  className: o.string
};
Cn.defaultProps = {
  className: ""
};
const In = ({ name: e, variable: t, value: n, className: r }) => {
  const a = ["pgov-font-weight-display", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ i.jsxs("div", { className: a, children: [
    /* @__PURE__ */ i.jsx("div", { className: "pgov-font-weight-display-example", style: { fontWeight: n }, children: "Aa" }),
    /* @__PURE__ */ i.jsxs("div", { className: "pgov-font-weight-display-metadata", children: [
      /* @__PURE__ */ i.jsx("div", { className: "pgov-font-weight-display-name", children: e }),
      /* @__PURE__ */ i.jsx("code", { className: "pgov-font-weight-display-variable", children: t }),
      /* @__PURE__ */ i.jsx("div", { className: "pgov-font-weight-display-value", children: n })
    ] })
  ] });
};
In.propTypes = {
  /** Name of the font weight */
  name: o.string.isRequired,
  /** CSS variable name */
  variable: o.string.isRequired,
  /** Actual font-weight value */
  value: o.string.isRequired,
  /** Additional CSS class */
  className: o.string
};
In.defaultProps = {
  className: ""
};
const Mn = ({ name: e, variable: t, value: n, className: r }) => {
  const a = ["pgov-line-height-display", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ i.jsxs("div", { className: a, children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "pgov-line-height-display-example",
        style: { lineHeight: n },
        children: [
          "This is an example of text with ",
          e,
          " line height.",
          /* @__PURE__ */ i.jsx("br", {}),
          "The quick brown fox jumps over the lazy dog.",
          /* @__PURE__ */ i.jsx("br", {}),
          "This shows how lines of text are spaced."
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: "pgov-line-height-display-metadata", children: [
      /* @__PURE__ */ i.jsx("div", { className: "pgov-line-height-display-name", children: e }),
      /* @__PURE__ */ i.jsx("code", { className: "pgov-line-height-display-variable", children: t }),
      /* @__PURE__ */ i.jsx("div", { className: "pgov-line-height-display-value", children: n })
    ] })
  ] });
};
Mn.propTypes = {
  /** Name of the line height */
  name: o.string.isRequired,
  /** CSS variable name */
  variable: o.string.isRequired,
  /** Actual line-height value */
  value: o.string.isRequired,
  /** Additional CSS class */
  className: o.string
};
Mn.defaultProps = {
  className: ""
};
const Ln = ({ name: e, variable: t, value: n, className: r }) => {
  const a = ["pgov-letter-spacing-display", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ i.jsxs("div", { className: a, children: [
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "pgov-letter-spacing-display-example",
        style: { letterSpacing: n },
        children: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: "pgov-letter-spacing-display-metadata", children: [
      /* @__PURE__ */ i.jsx("div", { className: "pgov-letter-spacing-display-name", children: e }),
      /* @__PURE__ */ i.jsx("code", { className: "pgov-letter-spacing-display-variable", children: t }),
      /* @__PURE__ */ i.jsx("div", { className: "pgov-letter-spacing-display-value", children: n })
    ] })
  ] });
};
Ln.propTypes = {
  /** Name of the letter spacing */
  name: o.string.isRequired,
  /** CSS variable name */
  variable: o.string.isRequired,
  /** Actual letter-spacing value */
  value: o.string.isRequired,
  /** Additional CSS class */
  className: o.string
};
Ln.defaultProps = {
  className: ""
};
const zn = ({ families: e, className: t }) => {
  const n = ["pgov-font-families", t].filter(Boolean).join(" "), r = e || Ga;
  return /* @__PURE__ */ i.jsx("div", { className: n, children: r.map((a, s) => /* @__PURE__ */ i.jsx(
    An,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    s
  )) });
}, Ga = [
  {
    name: "Sans Serif",
    variable: "--pgov-font-family-sans",
    value: "'Source Sans Pro', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif"
  },
  {
    name: "Serif",
    variable: "--pgov-font-family-serif",
    value: "Merriweather, Georgia, Cambria, 'Times New Roman', Times, serif"
  },
  {
    name: "Monospace",
    variable: "--pgov-font-family-mono",
    value: "'Roboto Mono', Consolas, Monaco, 'Andale Mono', monospace"
  }
];
zn.propTypes = {
  /** Array of font family objects */
  families: o.arrayOf(
    o.shape({
      name: o.string.isRequired,
      variable: o.string.isRequired,
      value: o.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: o.string
};
zn.defaultProps = {
  families: Ga,
  className: ""
};
const Fn = ({ sizes: e, className: t }) => {
  const n = ["pgov-font-sizes", t].filter(Boolean).join(" "), r = e || Ka;
  return /* @__PURE__ */ i.jsx("div", { className: n, children: r.map((a, s) => /* @__PURE__ */ i.jsx(
    Cn,
    {
      name: a.name,
      variable: a.variable,
      value: a.value,
      sizeInPx: a.sizeInPx
    },
    s
  )) });
}, Ka = [
  { name: "3XS", variable: "--pgov-font-size-3xs", value: "0.5rem", sizeInPx: "8px" },
  { name: "2XS", variable: "--pgov-font-size-2xs", value: "0.625rem", sizeInPx: "10px" },
  { name: "XS", variable: "--pgov-font-size-xs", value: "0.75rem", sizeInPx: "12px" },
  { name: "SM", variable: "--pgov-font-size-sm", value: "0.875rem", sizeInPx: "14px" },
  { name: "MD", variable: "--pgov-font-size-md", value: "1rem", sizeInPx: "16px" },
  { name: "LG", variable: "--pgov-font-size-lg", value: "1.125rem", sizeInPx: "18px" },
  { name: "XL", variable: "--pgov-font-size-xl", value: "1.25rem", sizeInPx: "20px" },
  { name: "2XL", variable: "--pgov-font-size-2xl", value: "1.5rem", sizeInPx: "24px" },
  { name: "3XL", variable: "--pgov-font-size-3xl", value: "1.75rem", sizeInPx: "28px" },
  { name: "4XL", variable: "--pgov-font-size-4xl", value: "2rem", sizeInPx: "32px" },
  { name: "5XL", variable: "--pgov-font-size-5xl", value: "2.5rem", sizeInPx: "40px" },
  { name: "6XL", variable: "--pgov-font-size-6xl", value: "3rem", sizeInPx: "48px" },
  { name: "7XL", variable: "--pgov-font-size-7xl", value: "3.5rem", sizeInPx: "56px" },
  { name: "8XL", variable: "--pgov-font-size-8xl", value: "4rem", sizeInPx: "64px" },
  { name: "9XL", variable: "--pgov-font-size-9xl", value: "4.5rem", sizeInPx: "72px" },
  { name: "10XL", variable: "--pgov-font-size-10xl", value: "5rem", sizeInPx: "80px" }
];
Fn.propTypes = {
  /** Array of font size objects */
  sizes: o.arrayOf(
    o.shape({
      name: o.string.isRequired,
      variable: o.string.isRequired,
      value: o.string.isRequired,
      sizeInPx: o.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: o.string
};
Fn.defaultProps = {
  sizes: Ka,
  className: ""
};
const Dn = ({ weights: e, className: t }) => {
  const n = ["pgov-font-weights", t].filter(Boolean).join(" "), r = e || Ja;
  return /* @__PURE__ */ i.jsx("div", { className: n, children: r.map((a, s) => /* @__PURE__ */ i.jsx(
    In,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    s
  )) });
}, Ja = [
  { name: "Thin", variable: "--pgov-font-weight-thin", value: "100" },
  { name: "Extra Light", variable: "--pgov-font-weight-extralight", value: "200" },
  { name: "Light", variable: "--pgov-font-weight-light", value: "300" },
  { name: "Regular", variable: "--pgov-font-weight-regular", value: "400" },
  { name: "Medium", variable: "--pgov-font-weight-medium", value: "500" },
  { name: "Semi Bold", variable: "--pgov-font-weight-semibold", value: "600" },
  { name: "Bold", variable: "--pgov-font-weight-bold", value: "700" },
  { name: "Extra Bold", variable: "--pgov-font-weight-extrabold", value: "800" },
  { name: "Black", variable: "--pgov-font-weight-black", value: "900" }
];
Dn.propTypes = {
  /** Array of font weight objects */
  weights: o.arrayOf(
    o.shape({
      name: o.string.isRequired,
      variable: o.string.isRequired,
      value: o.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: o.string
};
Dn.defaultProps = {
  weights: Ja,
  className: ""
};
const qn = ({ lineHeights: e, className: t }) => {
  const n = ["pgov-line-heights", t].filter(Boolean).join(" "), r = e || Za;
  return /* @__PURE__ */ i.jsx("div", { className: n, children: r.map((a, s) => /* @__PURE__ */ i.jsx(
    Mn,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    s
  )) });
}, Za = [
  { name: "Tight", variable: "--pgov-line-height-tight", value: "1" },
  { name: "Snug", variable: "--pgov-line-height-snug", value: "1.25" },
  { name: "Normal", variable: "--pgov-line-height-normal", value: "1.5" },
  { name: "Relaxed", variable: "--pgov-line-height-relaxed", value: "1.75" },
  { name: "Loose", variable: "--pgov-line-height-loose", value: "2" }
];
qn.propTypes = {
  /** Array of line height objects */
  lineHeights: o.arrayOf(
    o.shape({
      name: o.string.isRequired,
      variable: o.string.isRequired,
      value: o.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: o.string
};
qn.defaultProps = {
  lineHeights: Za,
  className: ""
};
const $n = ({ letterSpacings: e, className: t }) => {
  const n = ["pgov-letter-spacings", t].filter(Boolean).join(" "), r = e || Qa;
  return /* @__PURE__ */ i.jsx("div", { className: n, children: r.map((a, s) => /* @__PURE__ */ i.jsx(
    Ln,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    s
  )) });
}, Qa = [
  { name: "Tighter", variable: "--pgov-letter-spacing-tighter", value: "-0.05em" },
  { name: "Tight", variable: "--pgov-letter-spacing-tight", value: "-0.025em" },
  { name: "Normal", variable: "--pgov-letter-spacing-normal", value: "0em" },
  { name: "Wide", variable: "--pgov-letter-spacing-wide", value: "0.025em" },
  { name: "Wider", variable: "--pgov-letter-spacing-wider", value: "0.05em" },
  { name: "Widest", variable: "--pgov-letter-spacing-widest", value: "0.1em" }
];
$n.propTypes = {
  /** Array of letter spacing objects */
  letterSpacings: o.arrayOf(
    o.shape({
      name: o.string.isRequired,
      variable: o.string.isRequired,
      value: o.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: o.string
};
$n.defaultProps = {
  letterSpacings: Qa,
  className: ""
};
o.string.isRequired, o.string.isRequired, o.string.isRequired;
o.string.isRequired, o.string.isRequired, o.string.isRequired, o.string.isRequired;
o.string.isRequired, o.string.isRequired, o.string.isRequired;
o.string.isRequired, o.string.isRequired, o.string.isRequired;
o.string.isRequired, o.string.isRequired, o.string.isRequired;
const ei = ({
  showFontFamilies: e,
  showFontSizes: t,
  showFontWeights: n,
  showLineHeights: r,
  showLetterSpacings: a,
  className: s
}) => {
  const c = ["pgov-typography", s].filter(Boolean).join(" ");
  return /* @__PURE__ */ i.jsxs("div", { className: c, "data-testid": "typography-container", children: [
    /* @__PURE__ */ i.jsx("h2", { className: "pgov-typography-title", children: "Typography Tokens" }),
    /* @__PURE__ */ i.jsx("p", { className: "pgov-typography-description", children: "The PGOV design system includes a comprehensive set of typography tokens for use in the UI." }),
    e && /* @__PURE__ */ i.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ i.jsx("h3", { className: "pgov-typography-section-title", children: "Font Families" }),
      /* @__PURE__ */ i.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ i.jsx(zn, {}) })
    ] }),
    t && /* @__PURE__ */ i.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ i.jsx("h3", { className: "pgov-typography-section-title", children: "Font Sizes" }),
      /* @__PURE__ */ i.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ i.jsx(Fn, {}) })
    ] }),
    n && /* @__PURE__ */ i.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ i.jsx("h3", { className: "pgov-typography-section-title", children: "Font Weights" }),
      /* @__PURE__ */ i.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ i.jsx(Dn, {}) })
    ] }),
    r && /* @__PURE__ */ i.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ i.jsx("h3", { className: "pgov-typography-section-title", children: "Line Heights" }),
      /* @__PURE__ */ i.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ i.jsx(qn, {}) })
    ] }),
    a && /* @__PURE__ */ i.jsxs("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ i.jsx("h3", { className: "pgov-typography-section-title", children: "Letter Spacing" }),
      /* @__PURE__ */ i.jsx("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ i.jsx($n, {}) })
    ] })
  ] });
};
ei.propTypes = {
  /** Whether to show font families section */
  showFontFamilies: o.bool,
  /** Whether to show font sizes section */
  showFontSizes: o.bool,
  /** Whether to show font weights section */
  showFontWeights: o.bool,
  /** Whether to show line heights section */
  showLineHeights: o.bool,
  /** Whether to show letter spacings section */
  showLetterSpacings: o.bool,
  /** Additional CSS class */
  className: o.string
};
ei.defaultProps = {
  showFontFamilies: !0,
  showFontSizes: !0,
  showFontWeights: !0,
  showLineHeights: !0,
  showLetterSpacings: !0,
  className: ""
};
const Wn = ({
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
  }, s = a[n] || a.medium, { width: c, height: l } = s, f = {
    width: `${c}px`,
    height: `${l}px`,
    backgroundColor: e,
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  }, p = `pgov-color-swatch-preview ${r || ""}`;
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      style: f,
      className: p,
      "aria-label": `Color swatch for ${t}`
    }
  );
};
Wn.propTypes = {
  /**
   * Color value (CSS var or hex)
   */
  colorValue: o.string.isRequired,
  /**
   * Name of the color (for accessibility)
   */
  name: o.string.isRequired,
  /**
   * Size of the preview
   */
  size: o.oneOf(["small", "medium", "large"]),
  /**
   * Additional CSS class names
   */
  className: o.string
};
Wn.defaultProps = {
  size: "medium",
  className: ""
};
const Bn = ({
  name: e,
  colorVar: t,
  description: n,
  hexValue: r,
  alignment: a,
  className: s
}) => {
  const c = `pgov-color-swatch-details ${s || ""}`;
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: c,
      role: "group",
      "aria-label": `Details for ${e} color`,
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "pgov-color-swatch-name", children: e }),
        /* @__PURE__ */ i.jsx("div", { className: "pgov-color-swatch-var", "aria-label": `CSS variable: ${t}`, children: t }),
        n && /* @__PURE__ */ i.jsx("div", { className: "pgov-color-swatch-description", "aria-label": `Description: ${n}`, children: n }),
        r && !n && /* @__PURE__ */ i.jsx("div", { className: "pgov-color-swatch-hex", "aria-label": `Hex value: ${r}`, children: r })
      ]
    }
  );
};
Bn.propTypes = {
  /**
   * Name of the color
   */
  name: o.string.isRequired,
  /**
   * CSS variable name for the color
   */
  colorVar: o.string.isRequired,
  /**
   * Description of the color
   */
  description: o.string,
  /**
   * Hex value of the color
   */
  hexValue: o.string,
  /**
   * Text alignment
   */
  alignment: o.oneOf(["left", "center", "right"]),
  /**
   * Additional CSS class names
   */
  className: o.string
};
Bn.defaultProps = {
  description: void 0,
  hexValue: void 0,
  alignment: "left",
  className: ""
};
const Yn = ({
  colorVar: e,
  name: t,
  description: n,
  hexValue: r,
  size: a,
  orientation: s,
  className: c
}) => {
  const l = `pgov-color-swatch-item ${c || ""}`;
  return /* @__PURE__ */ i.jsxs("div", { className: l, children: [
    /* @__PURE__ */ i.jsx(
      Wn,
      {
        colorValue: r || `var(${e})`,
        name: t,
        size: a
      }
    ),
    /* @__PURE__ */ i.jsx(
      Bn,
      {
        name: t,
        colorVar: e,
        description: n,
        hexValue: r,
        alignment: "center"
      }
    )
  ] });
};
Yn.propTypes = {
  /**
   * CSS variable name for the color
   */
  colorVar: o.string.isRequired,
  /**
   * Name of the color
   */
  name: o.string.isRequired,
  /**
   * Description of the color
   */
  description: o.string,
  /**
   * Hex value of the color
   */
  hexValue: o.string,
  /**
   * Size of the color swatch preview
   */
  size: o.oneOf(["small", "medium", "large"]),
  /**
   * Layout orientation of the swatch
   */
  orientation: o.oneOf(["horizontal", "vertical"]),
  /**
   * Additional CSS class names
   */
  className: o.string
};
Yn.defaultProps = {
  description: void 0,
  hexValue: void 0,
  size: "medium",
  orientation: "vertical",
  className: ""
};
o.arrayOf(
  o.shape({
    name: o.string.isRequired,
    colorVar: o.string.isRequired,
    description: o.string,
    hexValue: o.string
  })
).isRequired, o.string, o.string, o.oneOf(["grid", "flex"]), o.oneOf(["horizontal", "vertical"]), o.oneOf(["small", "medium", "large"]), o.string;
const ti = ({
  colorVar: e,
  name: t,
  description: n,
  hexValue: r,
  size: a,
  orientation: s,
  className: c
}) => /* @__PURE__ */ i.jsx(
  Yn,
  {
    colorVar: e,
    name: t,
    description: n,
    hexValue: r,
    size: a,
    orientation: s,
    className: c
  }
);
ti.propTypes = {
  /**
   * CSS variable name for the color
   */
  colorVar: o.string.isRequired,
  /**
   * Name of the color
   */
  name: o.string.isRequired,
  /**
   * Description of the color
   */
  description: o.string,
  /**
   * Hex value of the color
   */
  hexValue: o.string,
  /**
   * Size of the color swatch
   */
  size: o.oneOf(["small", "medium", "large"]),
  /**
   * Orientation of the swatch (horizontal or vertical)
   */
  orientation: o.oneOf(["horizontal", "vertical"]),
  /**
   * Additional CSS class names
   */
  className: o.string
};
ti.defaultProps = {
  description: void 0,
  hexValue: void 0,
  size: "medium",
  orientation: "horizontal",
  className: ""
};
const ni = ({ name: e, variable: t, value: n, pixels: r }) => /* @__PURE__ */ i.jsxs("div", { style: {
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
  /* @__PURE__ */ i.jsx("div", { style: {
    width: n,
    height: "24px",
    backgroundColor: "#0050d8",
    borderRadius: "4px"
  } }),
  /* @__PURE__ */ i.jsxs("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    textAlign: "right",
    minWidth: "200px"
  }, children: [
    /* @__PURE__ */ i.jsx("div", { style: { fontWeight: "bold" }, children: e }),
    /* @__PURE__ */ i.jsx("code", { style: {
      backgroundColor: "#f5f5f5",
      padding: "4px 8px",
      borderRadius: "4px",
      fontSize: "14px"
    }, children: t }),
    /* @__PURE__ */ i.jsxs("div", { style: {
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
ni.propTypes = {
  name: o.string.isRequired,
  variable: o.string.isRequired,
  value: o.string.isRequired,
  pixels: o.string.isRequired
};
const Pc = () => {
  const e = [
    { name: "3XS", variable: "--pgov-spacing-3xs", value: "0.25rem", pixels: "4px" },
    { name: "2XS", variable: "--pgov-spacing-2xs", value: "0.5rem", pixels: "8px" },
    { name: "XS", variable: "--pgov-spacing-xs", value: "0.75rem", pixels: "12px" },
    { name: "SM", variable: "--pgov-spacing-sm", value: "1rem", pixels: "16px" },
    { name: "MD", variable: "--pgov-spacing-md", value: "1.5rem", pixels: "24px" },
    { name: "LG", variable: "--pgov-spacing-lg", value: "2rem", pixels: "32px" },
    { name: "XL", variable: "--pgov-spacing-xl", value: "2.5rem", pixels: "40px" },
    { name: "2XL", variable: "--pgov-spacing-2xl", value: "3rem", pixels: "48px" },
    { name: "3XL", variable: "--pgov-spacing-3xl", value: "4rem", pixels: "64px" }
  ];
  return /* @__PURE__ */ i.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "20px" }, children: e.map((t, n) => /* @__PURE__ */ i.jsx(
    ni,
    {
      name: t.name,
      variable: t.variable,
      value: t.value,
      pixels: t.pixels
    },
    n
  )) });
}, Tc = () => /* @__PURE__ */ i.jsxs("div", { style: {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  maxWidth: "800px"
}, children: [
  /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx("h3", { style: { marginBottom: "16px" }, children: "Margin Examples" }),
    /* @__PURE__ */ i.jsxs("div", { style: {
      border: "1px dashed #ddd",
      padding: "20px",
      borderRadius: "4px"
    }, children: [
      /* @__PURE__ */ i.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "16px",
        marginBottom: "var(--pgov-spacing-md)",
        borderRadius: "4px"
      }, children: "Element with margin-bottom: var(--pgov-spacing-md)" }),
      /* @__PURE__ */ i.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: "Next element" })
    ] })
  ] }),
  /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx("h3", { style: { marginBottom: "16px" }, children: "Padding Examples" }),
    /* @__PURE__ */ i.jsxs("div", { style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px"
    }, children: [
      /* @__PURE__ */ i.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "var(--pgov-spacing-xs)",
        borderRadius: "4px",
        width: "200px"
      }, children: "Padding: var(--pgov-spacing-xs)" }),
      /* @__PURE__ */ i.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "var(--pgov-spacing-md)",
        borderRadius: "4px",
        width: "200px"
      }, children: "Padding: var(--pgov-spacing-md)" }),
      /* @__PURE__ */ i.jsx("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "var(--pgov-spacing-xl)",
        borderRadius: "4px",
        width: "200px"
      }, children: "Padding: var(--pgov-spacing-xl)" })
    ] })
  ] }),
  /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx("h3", { style: { marginBottom: "16px" }, children: "Gap Examples" }),
    /* @__PURE__ */ i.jsxs("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }, children: [
      /* @__PURE__ */ i.jsxs("div", { style: {
        display: "flex",
        gap: "var(--pgov-spacing-xs)",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: [
        /* @__PURE__ */ i.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ i.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ i.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { style: {
        display: "flex",
        gap: "var(--pgov-spacing-md)",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: [
        /* @__PURE__ */ i.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ i.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ i.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { style: {
        display: "flex",
        gap: "var(--pgov-spacing-xl)",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: [
        /* @__PURE__ */ i.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ i.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ i.jsx("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" })
      ] })
    ] })
  ] })
] });
var ae = "top", ue = "bottom", de = "right", ie = "left", Hn = "auto", st = [ae, ue, de, ie], De = "start", nt = "end", vl = "clippingParents", ri = "viewport", Ue = "popper", hl = "reference", Kr = /* @__PURE__ */ st.reduce(function(e, t) {
  return e.concat([t + "-" + De, t + "-" + nt]);
}, []), ai = /* @__PURE__ */ [].concat(st, [Hn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + De, t + "-" + nt]);
}, []), bl = "beforeRead", yl = "read", xl = "afterRead", jl = "beforeMain", wl = "main", Nl = "afterMain", Ol = "beforeWrite", _l = "write", Pl = "afterWrite", Tl = [bl, yl, xl, jl, wl, Nl, Ol, _l, Pl];
function he(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function oe(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ce(e) {
  var t = oe(e).Element;
  return e instanceof t || e instanceof Element;
}
function fe(e) {
  var t = oe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Un(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = oe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function El(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, s = t.elements[n];
    !fe(s) || !he(s) || (Object.assign(s.style, r), Object.keys(a).forEach(function(c) {
      var l = a[c];
      l === !1 ? s.removeAttribute(c) : s.setAttribute(c, l === !0 ? "" : l);
    }));
  });
}
function Rl(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var a = t.elements[r], s = t.attributes[r] || {}, c = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = c.reduce(function(f, p) {
        return f[p] = "", f;
      }, {});
      !fe(a) || !he(a) || (Object.assign(a.style, l), Object.keys(s).forEach(function(f) {
        a.removeAttribute(f);
      }));
    });
  };
}
const kl = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: El,
  effect: Rl,
  requires: ["computeStyles"]
};
function ve(e) {
  return e.split("-")[0];
}
var Re = Math.max, wt = Math.min, qe = Math.round;
function un() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ii() {
  return !/^((?!chrome|android).)*safari/i.test(un());
}
function $e(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, s = 1;
  t && fe(e) && (a = e.offsetWidth > 0 && qe(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && qe(r.height) / e.offsetHeight || 1);
  var c = Ce(e) ? oe(e) : window, l = c.visualViewport, f = !ii() && n, p = (r.left + (f && l ? l.offsetLeft : 0)) / a, u = (r.top + (f && l ? l.offsetTop : 0)) / s, m = r.width / a, g = r.height / s;
  return {
    width: m,
    height: g,
    top: u,
    right: p + m,
    bottom: u + g,
    left: p,
    x: p,
    y: u
  };
}
function Vn(e) {
  var t = $e(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function si(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Un(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function xe(e) {
  return oe(e).getComputedStyle(e);
}
function Sl(e) {
  return ["table", "td", "th"].indexOf(he(e)) >= 0;
}
function Pe(e) {
  return ((Ce(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Rt(e) {
  return he(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Un(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Pe(e)
  );
}
function Jr(e) {
  return !fe(e) || // https://github.com/popperjs/popper-core/issues/837
  xe(e).position === "fixed" ? null : e.offsetParent;
}
function Al(e) {
  var t = /firefox/i.test(un()), n = /Trident/i.test(un());
  if (n && fe(e)) {
    var r = xe(e);
    if (r.position === "fixed")
      return null;
  }
  var a = Rt(e);
  for (Un(a) && (a = a.host); fe(a) && ["html", "body"].indexOf(he(a)) < 0; ) {
    var s = xe(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function ot(e) {
  for (var t = oe(e), n = Jr(e); n && Sl(n) && xe(n).position === "static"; )
    n = Jr(n);
  return n && (he(n) === "html" || he(n) === "body" && xe(n).position === "static") ? t : n || Al(e) || t;
}
function Xn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ze(e, t, n) {
  return Re(e, wt(t, n));
}
function Cl(e, t, n) {
  var r = Ze(e, t, n);
  return r > n ? n : r;
}
function oi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function li(e) {
  return Object.assign({}, oi(), e);
}
function ci(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Il = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, li(typeof t != "number" ? t : ci(t, st));
};
function Ml(e) {
  var t, n = e.state, r = e.name, a = e.options, s = n.elements.arrow, c = n.modifiersData.popperOffsets, l = ve(n.placement), f = Xn(l), p = [ie, de].indexOf(l) >= 0, u = p ? "height" : "width";
  if (!(!s || !c)) {
    var m = Il(a.padding, n), g = Vn(s), b = f === "y" ? ae : ie, w = f === "y" ? ue : de, x = n.rects.reference[u] + n.rects.reference[f] - c[f] - n.rects.popper[u], j = c[f] - n.rects.reference[f], P = ot(s), E = P ? f === "y" ? P.clientHeight || 0 : P.clientWidth || 0 : 0, O = x / 2 - j / 2, N = m[b], v = E - g[u] - m[w], L = E / 2 - g[u] / 2 + O, D = Ze(N, L, v), B = f;
    n.modifiersData[r] = (t = {}, t[B] = D, t.centerOffset = D - L, t);
  }
}
function Ll(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || si(t.elements.popper, a) && (t.elements.arrow = a));
}
const zl = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ml,
  effect: Ll,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function We(e) {
  return e.split("-")[1];
}
var Fl = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Dl(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: qe(n * a) / a || 0,
    y: qe(r * a) / a || 0
  };
}
function Zr(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, s = e.variation, c = e.offsets, l = e.position, f = e.gpuAcceleration, p = e.adaptive, u = e.roundOffsets, m = e.isFixed, g = c.x, b = g === void 0 ? 0 : g, w = c.y, x = w === void 0 ? 0 : w, j = typeof u == "function" ? u({
    x: b,
    y: x
  }) : {
    x: b,
    y: x
  };
  b = j.x, x = j.y;
  var P = c.hasOwnProperty("x"), E = c.hasOwnProperty("y"), O = ie, N = ae, v = window;
  if (p) {
    var L = ot(n), D = "clientHeight", B = "clientWidth";
    if (L === oe(n) && (L = Pe(n), xe(L).position !== "static" && l === "absolute" && (D = "scrollHeight", B = "scrollWidth")), L = L, a === ae || (a === ie || a === de) && s === nt) {
      N = ue;
      var V = m && L === v && v.visualViewport ? v.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        L[D]
      );
      x -= V - r.height, x *= f ? 1 : -1;
    }
    if (a === ie || (a === ae || a === ue) && s === nt) {
      O = de;
      var Y = m && L === v && v.visualViewport ? v.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        L[B]
      );
      b -= Y - r.width, b *= f ? 1 : -1;
    }
  }
  var H = Object.assign({
    position: l
  }, p && Fl), J = u === !0 ? Dl({
    x: b,
    y: x
  }, oe(n)) : {
    x: b,
    y: x
  };
  if (b = J.x, x = J.y, f) {
    var G;
    return Object.assign({}, H, (G = {}, G[N] = E ? "0" : "", G[O] = P ? "0" : "", G.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + x + "px)" : "translate3d(" + b + "px, " + x + "px, 0)", G));
  }
  return Object.assign({}, H, (t = {}, t[N] = E ? x + "px" : "", t[O] = P ? b + "px" : "", t.transform = "", t));
}
function ql(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, s = n.adaptive, c = s === void 0 ? !0 : s, l = n.roundOffsets, f = l === void 0 ? !0 : l, p = {
    placement: ve(t.placement),
    variation: We(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Zr(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: c,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Zr(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const $l = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ql,
  data: {}
};
var gt = {
  passive: !0
};
function Wl(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, s = a === void 0 ? !0 : a, c = r.resize, l = c === void 0 ? !0 : c, f = oe(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && p.forEach(function(u) {
    u.addEventListener("scroll", n.update, gt);
  }), l && f.addEventListener("resize", n.update, gt), function() {
    s && p.forEach(function(u) {
      u.removeEventListener("scroll", n.update, gt);
    }), l && f.removeEventListener("resize", n.update, gt);
  };
}
const Bl = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Wl,
  data: {}
};
var Yl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function bt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Yl[t];
  });
}
var Hl = {
  start: "end",
  end: "start"
};
function Qr(e) {
  return e.replace(/start|end/g, function(t) {
    return Hl[t];
  });
}
function Gn(e) {
  var t = oe(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Kn(e) {
  return $e(Pe(e)).left + Gn(e).scrollLeft;
}
function Ul(e, t) {
  var n = oe(e), r = Pe(e), a = n.visualViewport, s = r.clientWidth, c = r.clientHeight, l = 0, f = 0;
  if (a) {
    s = a.width, c = a.height;
    var p = ii();
    (p || !p && t === "fixed") && (l = a.offsetLeft, f = a.offsetTop);
  }
  return {
    width: s,
    height: c,
    x: l + Kn(e),
    y: f
  };
}
function Vl(e) {
  var t, n = Pe(e), r = Gn(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, s = Re(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), c = Re(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), l = -r.scrollLeft + Kn(e), f = -r.scrollTop;
  return xe(a || n).direction === "rtl" && (l += Re(n.clientWidth, a ? a.clientWidth : 0) - s), {
    width: s,
    height: c,
    x: l,
    y: f
  };
}
function Jn(e) {
  var t = xe(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function fi(e) {
  return ["html", "body", "#document"].indexOf(he(e)) >= 0 ? e.ownerDocument.body : fe(e) && Jn(e) ? e : fi(Rt(e));
}
function Qe(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = fi(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = oe(r), c = a ? [s].concat(s.visualViewport || [], Jn(r) ? r : []) : r, l = t.concat(c);
  return a ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Qe(Rt(c)))
  );
}
function dn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Xl(e, t) {
  var n = $e(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ea(e, t, n) {
  return t === ri ? dn(Ul(e, n)) : Ce(t) ? Xl(t, n) : dn(Vl(Pe(e)));
}
function Gl(e) {
  var t = Qe(Rt(e)), n = ["absolute", "fixed"].indexOf(xe(e).position) >= 0, r = n && fe(e) ? ot(e) : e;
  return Ce(r) ? t.filter(function(a) {
    return Ce(a) && si(a, r) && he(a) !== "body";
  }) : [];
}
function Kl(e, t, n, r) {
  var a = t === "clippingParents" ? Gl(e) : [].concat(t), s = [].concat(a, [n]), c = s[0], l = s.reduce(function(f, p) {
    var u = ea(e, p, r);
    return f.top = Re(u.top, f.top), f.right = wt(u.right, f.right), f.bottom = wt(u.bottom, f.bottom), f.left = Re(u.left, f.left), f;
  }, ea(e, c, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function ui(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? ve(r) : null, s = r ? We(r) : null, c = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, f;
  switch (a) {
    case ae:
      f = {
        x: c,
        y: t.y - n.height
      };
      break;
    case ue:
      f = {
        x: c,
        y: t.y + t.height
      };
      break;
    case de:
      f = {
        x: t.x + t.width,
        y: l
      };
      break;
    case ie:
      f = {
        x: t.x - n.width,
        y: l
      };
      break;
    default:
      f = {
        x: t.x,
        y: t.y
      };
  }
  var p = a ? Xn(a) : null;
  if (p != null) {
    var u = p === "y" ? "height" : "width";
    switch (s) {
      case De:
        f[p] = f[p] - (t[u] / 2 - n[u] / 2);
        break;
      case nt:
        f[p] = f[p] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return f;
}
function rt(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, s = n.strategy, c = s === void 0 ? e.strategy : s, l = n.boundary, f = l === void 0 ? vl : l, p = n.rootBoundary, u = p === void 0 ? ri : p, m = n.elementContext, g = m === void 0 ? Ue : m, b = n.altBoundary, w = b === void 0 ? !1 : b, x = n.padding, j = x === void 0 ? 0 : x, P = li(typeof j != "number" ? j : ci(j, st)), E = g === Ue ? hl : Ue, O = e.rects.popper, N = e.elements[w ? E : g], v = Kl(Ce(N) ? N : N.contextElement || Pe(e.elements.popper), f, u, c), L = $e(e.elements.reference), D = ui({
    reference: L,
    element: O,
    placement: a
  }), B = dn(Object.assign({}, O, D)), V = g === Ue ? B : L, Y = {
    top: v.top - V.top + P.top,
    bottom: V.bottom - v.bottom + P.bottom,
    left: v.left - V.left + P.left,
    right: V.right - v.right + P.right
  }, H = e.modifiersData.offset;
  if (g === Ue && H) {
    var J = H[a];
    Object.keys(Y).forEach(function(G) {
      var Z = [de, ue].indexOf(G) >= 0 ? 1 : -1, ne = [ae, ue].indexOf(G) >= 0 ? "y" : "x";
      Y[G] += J[ne] * Z;
    });
  }
  return Y;
}
function Jl(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, s = n.rootBoundary, c = n.padding, l = n.flipVariations, f = n.allowedAutoPlacements, p = f === void 0 ? ai : f, u = We(r), m = u ? l ? Kr : Kr.filter(function(w) {
    return We(w) === u;
  }) : st, g = m.filter(function(w) {
    return p.indexOf(w) >= 0;
  });
  g.length === 0 && (g = m);
  var b = g.reduce(function(w, x) {
    return w[x] = rt(e, {
      placement: x,
      boundary: a,
      rootBoundary: s,
      padding: c
    })[ve(x)], w;
  }, {});
  return Object.keys(b).sort(function(w, x) {
    return b[w] - b[x];
  });
}
function Zl(e) {
  if (ve(e) === Hn)
    return [];
  var t = bt(e);
  return [Qr(e), t, Qr(t)];
}
function Ql(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, s = a === void 0 ? !0 : a, c = n.altAxis, l = c === void 0 ? !0 : c, f = n.fallbackPlacements, p = n.padding, u = n.boundary, m = n.rootBoundary, g = n.altBoundary, b = n.flipVariations, w = b === void 0 ? !0 : b, x = n.allowedAutoPlacements, j = t.options.placement, P = ve(j), E = P === j, O = f || (E || !w ? [bt(j)] : Zl(j)), N = [j].concat(O).reduce(function(A, C) {
      return A.concat(ve(C) === Hn ? Jl(t, {
        placement: C,
        boundary: u,
        rootBoundary: m,
        padding: p,
        flipVariations: w,
        allowedAutoPlacements: x
      }) : C);
    }, []), v = t.rects.reference, L = t.rects.popper, D = /* @__PURE__ */ new Map(), B = !0, V = N[0], Y = 0; Y < N.length; Y++) {
      var H = N[Y], J = ve(H), G = We(H) === De, Z = [ae, ue].indexOf(J) >= 0, ne = Z ? "width" : "height", W = rt(t, {
        placement: H,
        boundary: u,
        rootBoundary: m,
        altBoundary: g,
        padding: p
      }), X = Z ? G ? de : ie : G ? ue : ae;
      v[ne] > L[ne] && (X = bt(X));
      var ce = bt(X), re = [];
      if (s && re.push(W[J] <= 0), l && re.push(W[X] <= 0, W[ce] <= 0), re.every(function(A) {
        return A;
      })) {
        V = H, B = !1;
        break;
      }
      D.set(H, re);
    }
    if (B)
      for (var d = w ? 3 : 1, h = function(C) {
        var I = N.find(function(M) {
          var S = D.get(M);
          if (S)
            return S.slice(0, C).every(function(z) {
              return z;
            });
        });
        if (I)
          return V = I, "break";
      }, T = d; T > 0; T--) {
        var R = h(T);
        if (R === "break") break;
      }
    t.placement !== V && (t.modifiersData[r]._skip = !0, t.placement = V, t.reset = !0);
  }
}
const ec = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ql,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ta(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function na(e) {
  return [ae, de, ue, ie].some(function(t) {
    return e[t] >= 0;
  });
}
function tc(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, s = t.modifiersData.preventOverflow, c = rt(t, {
    elementContext: "reference"
  }), l = rt(t, {
    altBoundary: !0
  }), f = ta(c, r), p = ta(l, a, s), u = na(f), m = na(p);
  t.modifiersData[n] = {
    referenceClippingOffsets: f,
    popperEscapeOffsets: p,
    isReferenceHidden: u,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": m
  });
}
const nc = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: tc
};
function rc(e, t, n) {
  var r = ve(e), a = [ie, ae].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, c = s[0], l = s[1];
  return c = c || 0, l = (l || 0) * a, [ie, de].indexOf(r) >= 0 ? {
    x: l,
    y: c
  } : {
    x: c,
    y: l
  };
}
function ac(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, s = a === void 0 ? [0, 0] : a, c = ai.reduce(function(u, m) {
    return u[m] = rc(m, t.rects, s), u;
  }, {}), l = c[t.placement], f = l.x, p = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = c;
}
const ic = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ac
};
function sc(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ui({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const oc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: sc,
  data: {}
};
function lc(e) {
  return e === "x" ? "y" : "x";
}
function cc(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, s = a === void 0 ? !0 : a, c = n.altAxis, l = c === void 0 ? !1 : c, f = n.boundary, p = n.rootBoundary, u = n.altBoundary, m = n.padding, g = n.tether, b = g === void 0 ? !0 : g, w = n.tetherOffset, x = w === void 0 ? 0 : w, j = rt(t, {
    boundary: f,
    rootBoundary: p,
    padding: m,
    altBoundary: u
  }), P = ve(t.placement), E = We(t.placement), O = !E, N = Xn(P), v = lc(N), L = t.modifiersData.popperOffsets, D = t.rects.reference, B = t.rects.popper, V = typeof x == "function" ? x(Object.assign({}, t.rects, {
    placement: t.placement
  })) : x, Y = typeof V == "number" ? {
    mainAxis: V,
    altAxis: V
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, V), H = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, J = {
    x: 0,
    y: 0
  };
  if (L) {
    if (s) {
      var G, Z = N === "y" ? ae : ie, ne = N === "y" ? ue : de, W = N === "y" ? "height" : "width", X = L[N], ce = X + j[Z], re = X - j[ne], d = b ? -B[W] / 2 : 0, h = E === De ? D[W] : B[W], T = E === De ? -B[W] : -D[W], R = t.elements.arrow, A = b && R ? Vn(R) : {
        width: 0,
        height: 0
      }, C = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : oi(), I = C[Z], M = C[ne], S = Ze(0, D[W], A[W]), z = O ? D[W] / 2 - d - S - I - Y.mainAxis : h - S - I - Y.mainAxis, F = O ? -D[W] / 2 + d + S + M + Y.mainAxis : T + S + M + Y.mainAxis, K = t.elements.arrow && ot(t.elements.arrow), _ = K ? N === "y" ? K.clientTop || 0 : K.clientLeft || 0 : 0, se = (G = H == null ? void 0 : H[N]) != null ? G : 0, Ie = X + z - se - _, lt = X + F - se, Zn = Ze(b ? wt(ce, Ie) : ce, X, b ? Re(re, lt) : re);
      L[N] = Zn, J[N] = Zn - X;
    }
    if (l) {
      var Qn, pi = N === "x" ? ae : ie, mi = N === "x" ? ue : de, Te = L[v], ct = v === "y" ? "height" : "width", er = Te + j[pi], tr = Te - j[mi], kt = [ae, ie].indexOf(P) !== -1, nr = (Qn = H == null ? void 0 : H[v]) != null ? Qn : 0, rr = kt ? er : Te - D[ct] - B[ct] - nr + Y.altAxis, ar = kt ? Te + D[ct] + B[ct] - nr - Y.altAxis : tr, ir = b && kt ? Cl(rr, Te, ar) : Ze(b ? rr : er, Te, b ? ar : tr);
      L[v] = ir, J[v] = ir - Te;
    }
    t.modifiersData[r] = J;
  }
}
const fc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: cc,
  requiresIfExists: ["offset"]
};
function uc(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function dc(e) {
  return e === oe(e) || !fe(e) ? Gn(e) : uc(e);
}
function pc(e) {
  var t = e.getBoundingClientRect(), n = qe(t.width) / e.offsetWidth || 1, r = qe(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function mc(e, t, n) {
  n === void 0 && (n = !1);
  var r = fe(t), a = fe(t) && pc(t), s = Pe(t), c = $e(e, a, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((he(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Jn(s)) && (l = dc(t)), fe(t) ? (f = $e(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : s && (f.x = Kn(s))), {
    x: c.left + l.scrollLeft - f.x,
    y: c.top + l.scrollTop - f.y,
    width: c.width,
    height: c.height
  };
}
function gc(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function a(s) {
    n.add(s.name);
    var c = [].concat(s.requires || [], s.requiresIfExists || []);
    c.forEach(function(l) {
      if (!n.has(l)) {
        var f = t.get(l);
        f && a(f);
      }
    }), r.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || a(s);
  }), r;
}
function vc(e) {
  var t = gc(e);
  return Tl.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function hc(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function bc(e) {
  var t = e.reduce(function(n, r) {
    var a = n[r.name];
    return n[r.name] = a ? Object.assign({}, a, r, {
      options: Object.assign({}, a.options, r.options),
      data: Object.assign({}, a.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var ra = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function aa() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function yc(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, s = a === void 0 ? ra : a;
  return function(l, f, p) {
    p === void 0 && (p = s);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ra, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: f
      },
      attributes: {},
      styles: {}
    }, m = [], g = !1, b = {
      state: u,
      setOptions: function(P) {
        var E = typeof P == "function" ? P(u.options) : P;
        x(), u.options = Object.assign({}, s, u.options, E), u.scrollParents = {
          reference: Ce(l) ? Qe(l) : l.contextElement ? Qe(l.contextElement) : [],
          popper: Qe(f)
        };
        var O = vc(bc([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = O.filter(function(N) {
          return N.enabled;
        }), w(), b.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var P = u.elements, E = P.reference, O = P.popper;
          if (aa(E, O)) {
            u.rects = {
              reference: mc(E, ot(O), u.options.strategy === "fixed"),
              popper: Vn(O)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(Y) {
              return u.modifiersData[Y.name] = Object.assign({}, Y.data);
            });
            for (var N = 0; N < u.orderedModifiers.length; N++) {
              if (u.reset === !0) {
                u.reset = !1, N = -1;
                continue;
              }
              var v = u.orderedModifiers[N], L = v.fn, D = v.options, B = D === void 0 ? {} : D, V = v.name;
              typeof L == "function" && (u = L({
                state: u,
                options: B,
                name: V,
                instance: b
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: hc(function() {
        return new Promise(function(j) {
          b.forceUpdate(), j(u);
        });
      }),
      destroy: function() {
        x(), g = !0;
      }
    };
    if (!aa(l, f))
      return b;
    b.setOptions(p).then(function(j) {
      !g && p.onFirstUpdate && p.onFirstUpdate(j);
    });
    function w() {
      u.orderedModifiers.forEach(function(j) {
        var P = j.name, E = j.options, O = E === void 0 ? {} : E, N = j.effect;
        if (typeof N == "function") {
          var v = N({
            state: u,
            name: P,
            instance: b,
            options: O
          }), L = function() {
          };
          m.push(v || L);
        }
      });
    }
    function x() {
      m.forEach(function(j) {
        return j();
      }), m = [];
    }
    return b;
  };
}
var xc = [Bl, oc, $l, kl, ic, ec, fc, zl, nc], jc = /* @__PURE__ */ yc({
  defaultModifiers: xc
});
const wc = ({
  content: e,
  position: t = "top",
  theme: n = "light",
  className: r,
  offset: a = [0, 8]
}) => {
  const [s, c] = ke(!1), [l, f] = ke(!1), p = Xe(null), u = Xe(null), m = Xe(null), g = gi(), b = St(() => {
    !p.current || !u.current || (m.current && m.current.destroy(), m.current = jc(p.current, u.current, {
      placement: t,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: a
          }
        },
        {
          name: "preventOverflow",
          options: {
            padding: 8
          }
        },
        {
          name: "arrow",
          options: {
            element: "[data-popper-arrow]",
            padding: 8
          }
        }
      ]
    }), f(!0));
  }, [t, a]), w = St(() => {
    l || b(), c(!0);
  }, [b, l]), x = St(() => {
    c(!1);
  }, []);
  Ge(() => {
    l && b();
  }, [t, b, l]), Ge(() => {
    const E = (O) => {
      O.key === "Escape" && x();
    };
    return s && document.addEventListener("keydown", E), () => {
      document.removeEventListener("keydown", E);
    };
  }, [s, x]), Ge(() => () => {
    m.current && m.current.destroy();
  }, []);
  const j = {
    ref: u,
    id: g,
    role: "tooltip",
    className: `usa-tooltip__body usa-tooltip__body--${n} ${r || ""}`.trim(),
    style: {
      visibility: s ? "visible" : "hidden",
      display: "block"
    },
    "aria-hidden": !s
  };
  return {
    triggerProps: {
      ref: p,
      onMouseEnter: w,
      onMouseLeave: x,
      onFocus: w,
      onBlur: x,
      "aria-describedby": g
    },
    tooltipProps: j,
    content: e,
    isVisible: s
  };
}, Nc = ({
  children: e,
  content: t,
  position: n = "top",
  theme: r = "light",
  className: a,
  offset: s
}) => {
  const {
    triggerProps: c,
    tooltipProps: l
  } = wc({
    content: t,
    position: n,
    theme: r,
    className: a,
    offset: s
  }), f = vi(e, {
    ...e.props,
    ...c,
    className: `${e.props.className || ""} usa-tooltip`.trim()
  });
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    f,
    /* @__PURE__ */ i.jsxs("div", { ...l, children: [
      t,
      /* @__PURE__ */ i.jsx("div", { className: "usa-tooltip__arrow", "data-popper-arrow": !0 })
    ] })
  ] });
};
Nc.propTypes = {
  children: o.element.isRequired,
  content: o.node.isRequired,
  position: o.oneOf(["top", "right", "bottom", "left"]),
  theme: o.oneOf(["light", "dark"]),
  className: o.string,
  offset: o.arrayOf(o.number)
};
const Oc = ({
  children: e,
  variant: t = "default",
  size: n = "default",
  disabled: r = !1,
  ariaDisabled: a = !1,
  unstyled: s = !1,
  onClick: c,
  type: l = "button",
  startIcon: f,
  endIcon: p,
  className: u,
  ...m
}) => {
  const g = "usa-button", b = t !== "default" ? `${g}--${t}` : "", w = n === "big" ? `${g}--big` : "", x = s ? `${g}--unstyled` : "", j = [
    g,
    b,
    w,
    x,
    u
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i.jsxs(
    "button",
    {
      type: l,
      className: j,
      onClick: c,
      disabled: r,
      "aria-disabled": a || r,
      ...m,
      children: [
        f && /* @__PURE__ */ i.jsx("span", { className: "usa-button__icon usa-button__icon--left", children: /* @__PURE__ */ i.jsx(ee, { icon: f }) }),
        e,
        p && /* @__PURE__ */ i.jsx("span", { className: "usa-button__icon usa-button__icon--right", children: /* @__PURE__ */ i.jsx(ee, { icon: p }) })
      ]
    }
  );
};
Oc.propTypes = {
  children: Q.PropTypes.node.isRequired,
  variant: Q.PropTypes.oneOf([
    "default",
    "secondary",
    "accent-cool",
    "accent-warm",
    "base",
    "outline",
    "outline-inverse"
  ]),
  size: Q.PropTypes.oneOf(["default", "big"]),
  disabled: Q.PropTypes.bool,
  ariaDisabled: Q.PropTypes.bool,
  unstyled: Q.PropTypes.bool,
  onClick: Q.PropTypes.func,
  type: Q.PropTypes.oneOf(["button", "submit", "reset"]),
  startIcon: Q.PropTypes.oneOfType([Q.PropTypes.object, Q.PropTypes.array, Q.PropTypes.string]),
  endIcon: Q.PropTypes.oneOfType([Q.PropTypes.object, Q.PropTypes.array, Q.PropTypes.string]),
  className: Q.PropTypes.string
};
const di = ({
  type: e = "info",
  heading: t,
  children: n,
  slim: r = !1,
  noIcon: a = !1,
  className: s = ""
}) => {
  const c = [
    "pgov-alert",
    `pgov-alert--${e}`,
    r && "pgov-alert--slim",
    a && "pgov-alert--no-icon",
    s
  ].filter(Boolean).join(" "), l = () => {
    switch (e) {
      case "info":
        return Gr;
      case "warning":
        return al;
      case "success":
        return Go;
      case "error":
        return Vo;
      case "emergency":
        return il;
      default:
        return Gr;
    }
  };
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: c,
      role: e === "error" || e === "emergency" ? "alert" : void 0,
      children: /* @__PURE__ */ i.jsxs("div", { className: "pgov-alert__body", children: [
        !a && /* @__PURE__ */ i.jsx("div", { className: "pgov-alert__icon", children: /* @__PURE__ */ i.jsx(ee, { icon: l() }) }),
        /* @__PURE__ */ i.jsxs("div", { className: "pgov-alert__content", children: [
          t && /* @__PURE__ */ i.jsx("h4", { className: "pgov-alert__heading", children: t }),
          /* @__PURE__ */ i.jsx("div", { className: "pgov-alert__text", children: n })
        ] })
      ] })
    }
  );
};
di.propTypes = {
  /**
   * Type of alert to display
   */
  type: o.oneOf(["info", "warning", "success", "error", "emergency"]),
  /**
   * Optional heading text for the alert
   */
  heading: o.string,
  /**
   * Content to display in the alert
   */
  children: o.node.isRequired,
  /**
   * Whether to display a slim version of the alert
   */
  slim: o.bool,
  /**
   * Whether to display the alert without an icon
   */
  noIcon: o.bool,
  /**
   * Additional CSS class names
   */
  className: o.string
};
di.defaultProps = {
  type: "info",
  heading: void 0,
  slim: !1,
  noIcon: !1,
  className: ""
};
const Ec = () => /* @__PURE__ */ i.jsxs(
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
      /* @__PURE__ */ i.jsx("path", { d: "M11 1H1v10h10V1z" }),
      /* @__PURE__ */ i.jsx("path", { d: "M4 8l4-4M4 4h4v4" })
    ]
  }
);
export {
  di as Alert,
  mn as Banner,
  Sn as Breadcrumbs,
  Oc as Button,
  ti as ColorSwatch,
  pl as Contacts,
  Ec as ExternalLinkIcon,
  yn as Footer,
  hn as Header,
  gl as HeroGlobal,
  ml as HeroHomepage,
  Ya as PageTemplate,
  ol as ProcessSteps,
  cl as Search,
  Ua as SideNav,
  bn as SkipNav,
  ni as SpacingDisplay,
  Tc as SpacingExamples,
  Pc as SpacingTokens,
  sl as SummaryBox,
  ll as Tag,
  Nc as Tooltip,
  ei as Typography
};
