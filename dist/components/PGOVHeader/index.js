import Ie, { useState as se } from "react";
function Me(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var te = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ye;
function qe() {
  if (ye) return ee;
  ye = 1;
  var n = Symbol.for("react.transitional.element"), x = Symbol.for("react.fragment");
  function v(c, f, s) {
    var u = null;
    if (s !== void 0 && (u = "" + s), f.key !== void 0 && (u = "" + f.key), "key" in f) {
      s = {};
      for (var d in f)
        d !== "key" && (s[d] = f[d]);
    } else s = f;
    return f = s.ref, {
      $$typeof: n,
      type: c,
      key: u,
      ref: f !== void 0 ? f : null,
      props: s
    };
  }
  return ee.Fragment = x, ee.jsx = v, ee.jsxs = v, ee;
}
var re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function Ye() {
  return be || (be = 1, process.env.NODE_ENV !== "production" && function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case A:
          return "Fragment";
        case q:
          return "Profiler";
        case $:
          return "StrictMode";
        case o:
          return "Suspense";
        case F:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case N:
            return (e.displayName || "Context") + ".Provider";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case k:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return r = e.displayName || null, r !== null ? r : n(e.type) || "Memo";
          case V:
            r = e._payload, e = e._init;
            try {
              return n(e(r));
            } catch {
            }
        }
      return null;
    }
    function x(e) {
      return "" + e;
    }
    function v(e) {
      try {
        x(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var i = r.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), x(e);
      }
    }
    function c(e) {
      if (e === A) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === V)
        return "<...>";
      try {
        var r = n(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function f() {
      var e = U.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function u(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function i() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function _() {
      var e = n(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function y(e, r, i, l, p, m, b, g) {
      return i = m.ref, e = {
        $$typeof: C,
        type: e,
        key: r,
        props: m,
        _owner: p
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: _
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: b
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: g
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function E(e, r, i, l, p, m, b, g) {
      var h = r.children;
      if (h !== void 0)
        if (l)
          if (K(h)) {
            for (l = 0; l < h.length; l++)
              S(h[l]);
            Object.freeze && Object.freeze(h);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(h);
      if (B.call(r, "key")) {
        h = n(e);
        var R = Object.keys(r).filter(function(I) {
          return I !== "key";
        });
        l = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", J[h + l] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          h,
          R,
          h
        ), J[h + l] = !0);
      }
      if (h = null, i !== void 0 && (v(i), h = "" + i), u(r) && (v(r.key), h = "" + r.key), "key" in r) {
        i = {};
        for (var j in r)
          j !== "key" && (i[j] = r[j]);
      } else i = r;
      return h && d(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), y(
        e,
        h,
        m,
        p,
        f(),
        i,
        b,
        g
      );
    }
    function S(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var w = Ie, C = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), N = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), U = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, K = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var G, Y = {}, D = w["react-stack-bottom-frame"].bind(
      w,
      s
    )(), H = L(c(s)), J = {};
    re.Fragment = A, re.jsx = function(e, r, i, l, p) {
      var m = 1e4 > U.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        i,
        !1,
        l,
        p,
        m ? Error("react-stack-top-frame") : D,
        m ? L(c(e)) : H
      );
    }, re.jsxs = function(e, r, i, l, p) {
      var m = 1e4 > U.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        i,
        !0,
        l,
        p,
        m ? Error("react-stack-top-frame") : D,
        m ? L(c(e)) : H
      );
    };
  }()), re;
}
var ge;
function Le() {
  return ge || (ge = 1, process.env.NODE_ENV === "production" ? te.exports = qe() : te.exports = Ye()), te.exports;
}
var t = Le(), ae = { exports: {} }, oe = { exports: {} }, O = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function De() {
  if (xe) return O;
  xe = 1;
  var n = typeof Symbol == "function" && Symbol.for, x = n ? Symbol.for("react.element") : 60103, v = n ? Symbol.for("react.portal") : 60106, c = n ? Symbol.for("react.fragment") : 60107, f = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, u = n ? Symbol.for("react.provider") : 60109, d = n ? Symbol.for("react.context") : 60110, _ = n ? Symbol.for("react.async_mode") : 60111, y = n ? Symbol.for("react.concurrent_mode") : 60111, E = n ? Symbol.for("react.forward_ref") : 60112, S = n ? Symbol.for("react.suspense") : 60113, w = n ? Symbol.for("react.suspense_list") : 60120, C = n ? Symbol.for("react.memo") : 60115, M = n ? Symbol.for("react.lazy") : 60116, A = n ? Symbol.for("react.block") : 60121, $ = n ? Symbol.for("react.fundamental") : 60117, q = n ? Symbol.for("react.responder") : 60118, z = n ? Symbol.for("react.scope") : 60119;
  function N(o) {
    if (typeof o == "object" && o !== null) {
      var F = o.$$typeof;
      switch (F) {
        case x:
          switch (o = o.type, o) {
            case _:
            case y:
            case c:
            case s:
            case f:
            case S:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case d:
                case E:
                case M:
                case C:
                case u:
                  return o;
                default:
                  return F;
              }
          }
        case v:
          return F;
      }
    }
  }
  function k(o) {
    return N(o) === y;
  }
  return O.AsyncMode = _, O.ConcurrentMode = y, O.ContextConsumer = d, O.ContextProvider = u, O.Element = x, O.ForwardRef = E, O.Fragment = c, O.Lazy = M, O.Memo = C, O.Portal = v, O.Profiler = s, O.StrictMode = f, O.Suspense = S, O.isAsyncMode = function(o) {
    return k(o) || N(o) === _;
  }, O.isConcurrentMode = k, O.isContextConsumer = function(o) {
    return N(o) === d;
  }, O.isContextProvider = function(o) {
    return N(o) === u;
  }, O.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === x;
  }, O.isForwardRef = function(o) {
    return N(o) === E;
  }, O.isFragment = function(o) {
    return N(o) === c;
  }, O.isLazy = function(o) {
    return N(o) === M;
  }, O.isMemo = function(o) {
    return N(o) === C;
  }, O.isPortal = function(o) {
    return N(o) === v;
  }, O.isProfiler = function(o) {
    return N(o) === s;
  }, O.isStrictMode = function(o) {
    return N(o) === f;
  }, O.isSuspense = function(o) {
    return N(o) === S;
  }, O.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === c || o === y || o === s || o === f || o === S || o === w || typeof o == "object" && o !== null && (o.$$typeof === M || o.$$typeof === C || o.$$typeof === u || o.$$typeof === d || o.$$typeof === E || o.$$typeof === $ || o.$$typeof === q || o.$$typeof === z || o.$$typeof === A);
  }, O.typeOf = N, O;
}
var P = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function We() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, x = n ? Symbol.for("react.element") : 60103, v = n ? Symbol.for("react.portal") : 60106, c = n ? Symbol.for("react.fragment") : 60107, f = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, u = n ? Symbol.for("react.provider") : 60109, d = n ? Symbol.for("react.context") : 60110, _ = n ? Symbol.for("react.async_mode") : 60111, y = n ? Symbol.for("react.concurrent_mode") : 60111, E = n ? Symbol.for("react.forward_ref") : 60112, S = n ? Symbol.for("react.suspense") : 60113, w = n ? Symbol.for("react.suspense_list") : 60120, C = n ? Symbol.for("react.memo") : 60115, M = n ? Symbol.for("react.lazy") : 60116, A = n ? Symbol.for("react.block") : 60121, $ = n ? Symbol.for("react.fundamental") : 60117, q = n ? Symbol.for("react.responder") : 60118, z = n ? Symbol.for("react.scope") : 60119;
    function N(a) {
      return typeof a == "string" || typeof a == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      a === c || a === y || a === s || a === f || a === S || a === w || typeof a == "object" && a !== null && (a.$$typeof === M || a.$$typeof === C || a.$$typeof === u || a.$$typeof === d || a.$$typeof === E || a.$$typeof === $ || a.$$typeof === q || a.$$typeof === z || a.$$typeof === A);
    }
    function k(a) {
      if (typeof a == "object" && a !== null) {
        var W = a.$$typeof;
        switch (W) {
          case x:
            var ne = a.type;
            switch (ne) {
              case _:
              case y:
              case c:
              case s:
              case f:
              case S:
                return ne;
              default:
                var ve = ne && ne.$$typeof;
                switch (ve) {
                  case d:
                  case E:
                  case M:
                  case C:
                  case u:
                    return ve;
                  default:
                    return W;
                }
            }
          case v:
            return W;
        }
      }
    }
    var o = _, F = y, X = d, V = u, Q = x, Z = E, U = c, B = M, K = C, L = v, G = s, Y = f, D = S, H = !1;
    function J(a) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(a) || k(a) === _;
    }
    function e(a) {
      return k(a) === y;
    }
    function r(a) {
      return k(a) === d;
    }
    function i(a) {
      return k(a) === u;
    }
    function l(a) {
      return typeof a == "object" && a !== null && a.$$typeof === x;
    }
    function p(a) {
      return k(a) === E;
    }
    function m(a) {
      return k(a) === c;
    }
    function b(a) {
      return k(a) === M;
    }
    function g(a) {
      return k(a) === C;
    }
    function h(a) {
      return k(a) === v;
    }
    function R(a) {
      return k(a) === s;
    }
    function j(a) {
      return k(a) === f;
    }
    function I(a) {
      return k(a) === S;
    }
    P.AsyncMode = o, P.ConcurrentMode = F, P.ContextConsumer = X, P.ContextProvider = V, P.Element = Q, P.ForwardRef = Z, P.Fragment = U, P.Lazy = B, P.Memo = K, P.Portal = L, P.Profiler = G, P.StrictMode = Y, P.Suspense = D, P.isAsyncMode = J, P.isConcurrentMode = e, P.isContextConsumer = r, P.isContextProvider = i, P.isElement = l, P.isForwardRef = p, P.isFragment = m, P.isLazy = b, P.isMemo = g, P.isPortal = h, P.isProfiler = R, P.isStrictMode = j, P.isSuspense = I, P.isValidElementType = N, P.typeOf = k;
  }()), P;
}
var Te;
function Ae() {
  return Te || (Te = 1, process.env.NODE_ENV === "production" ? oe.exports = De() : oe.exports = We()), oe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ie, Re;
function Fe() {
  if (Re) return ie;
  Re = 1;
  var n = Object.getOwnPropertySymbols, x = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
  function c(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function f() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var u = {}, d = 0; d < 10; d++)
        u["_" + String.fromCharCode(d)] = d;
      var _ = Object.getOwnPropertyNames(u).map(function(E) {
        return u[E];
      });
      if (_.join("") !== "0123456789")
        return !1;
      var y = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(E) {
        y[E] = E;
      }), Object.keys(Object.assign({}, y)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = f() ? Object.assign : function(s, u) {
    for (var d, _ = c(s), y, E = 1; E < arguments.length; E++) {
      d = Object(arguments[E]);
      for (var S in d)
        x.call(d, S) && (_[S] = d[S]);
      if (n) {
        y = n(d);
        for (var w = 0; w < y.length; w++)
          v.call(d, y[w]) && (_[y[w]] = d[y[w]]);
      }
    }
    return _;
  }, ie;
}
var ce, je;
function pe() {
  if (je) return ce;
  je = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ce = n, ce;
}
var ue, _e;
function Ce() {
  return _e || (_e = 1, ue = Function.call.bind(Object.prototype.hasOwnProperty)), ue;
}
var le, Se;
function Ue() {
  if (Se) return le;
  Se = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var x = /* @__PURE__ */ pe(), v = {}, c = /* @__PURE__ */ Ce();
    n = function(s) {
      var u = "Warning: " + s;
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
  }
  function f(s, u, d, _, y) {
    if (process.env.NODE_ENV !== "production") {
      for (var E in s)
        if (c(s, E)) {
          var S;
          try {
            if (typeof s[E] != "function") {
              var w = Error(
                (_ || "React class") + ": " + d + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            S = s[E](u, E, _, d, null, x);
          } catch (M) {
            S = M;
          }
          if (S && !(S instanceof Error) && n(
            (_ || "React class") + ": type specification of " + d + " `" + E + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof S + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), S instanceof Error && !(S.message in v)) {
            v[S.message] = !0;
            var C = y ? y() : "";
            n(
              "Failed " + d + " type: " + S.message + (C ?? "")
            );
          }
        }
    }
  }
  return f.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (v = {});
  }, le = f, le;
}
var fe, Oe;
function ze() {
  if (Oe) return fe;
  Oe = 1;
  var n = Ae(), x = Fe(), v = /* @__PURE__ */ pe(), c = /* @__PURE__ */ Ce(), f = /* @__PURE__ */ Ue(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(d) {
    var _ = "Warning: " + d;
    typeof console < "u" && console.error(_);
    try {
      throw new Error(_);
    } catch {
    }
  });
  function u() {
    return null;
  }
  return fe = function(d, _) {
    var y = typeof Symbol == "function" && Symbol.iterator, E = "@@iterator";
    function S(e) {
      var r = e && (y && e[y] || e[E]);
      if (typeof r == "function")
        return r;
    }
    var w = "<<anonymous>>", C = {
      array: q("array"),
      bigint: q("bigint"),
      bool: q("boolean"),
      func: q("function"),
      number: q("number"),
      object: q("object"),
      string: q("string"),
      symbol: q("symbol"),
      any: z(),
      arrayOf: N,
      element: k(),
      elementType: o(),
      instanceOf: F,
      node: Z(),
      objectOf: V,
      oneOf: X,
      oneOfType: Q,
      shape: B,
      exact: K
    };
    function M(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    }
    function A(e, r) {
      this.message = e, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    A.prototype = Error.prototype;
    function $(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, i = 0;
      function l(m, b, g, h, R, j, I) {
        if (h = h || w, j = j || g, I !== v) {
          if (_) {
            var a = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw a.name = "Invariant Violation", a;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var W = h + ":" + g;
            !r[W] && // Avoid spamming the console because they are often not actionable except for lib authors
            i < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + h + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[W] = !0, i++);
          }
        }
        return b[g] == null ? m ? b[g] === null ? new A("The " + R + " `" + j + "` is marked as required " + ("in `" + h + "`, but its value is `null`.")) : new A("The " + R + " `" + j + "` is marked as required in " + ("`" + h + "`, but its value is `undefined`.")) : null : e(b, g, h, R, j);
      }
      var p = l.bind(null, !1);
      return p.isRequired = l.bind(null, !0), p;
    }
    function q(e) {
      function r(i, l, p, m, b, g) {
        var h = i[l], R = Y(h);
        if (R !== e) {
          var j = D(h);
          return new A(
            "Invalid " + m + " `" + b + "` of type " + ("`" + j + "` supplied to `" + p + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return $(r);
    }
    function z() {
      return $(u);
    }
    function N(e) {
      function r(i, l, p, m, b) {
        if (typeof e != "function")
          return new A("Property `" + b + "` of component `" + p + "` has invalid PropType notation inside arrayOf.");
        var g = i[l];
        if (!Array.isArray(g)) {
          var h = Y(g);
          return new A("Invalid " + m + " `" + b + "` of type " + ("`" + h + "` supplied to `" + p + "`, expected an array."));
        }
        for (var R = 0; R < g.length; R++) {
          var j = e(g, R, p, m, b + "[" + R + "]", v);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return $(r);
    }
    function k() {
      function e(r, i, l, p, m) {
        var b = r[i];
        if (!d(b)) {
          var g = Y(b);
          return new A("Invalid " + p + " `" + m + "` of type " + ("`" + g + "` supplied to `" + l + "`, expected a single ReactElement."));
        }
        return null;
      }
      return $(e);
    }
    function o() {
      function e(r, i, l, p, m) {
        var b = r[i];
        if (!n.isValidElementType(b)) {
          var g = Y(b);
          return new A("Invalid " + p + " `" + m + "` of type " + ("`" + g + "` supplied to `" + l + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return $(e);
    }
    function F(e) {
      function r(i, l, p, m, b) {
        if (!(i[l] instanceof e)) {
          var g = e.name || w, h = J(i[l]);
          return new A("Invalid " + m + " `" + b + "` of type " + ("`" + h + "` supplied to `" + p + "`, expected ") + ("instance of `" + g + "`."));
        }
        return null;
      }
      return $(r);
    }
    function X(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), u;
      function r(i, l, p, m, b) {
        for (var g = i[l], h = 0; h < e.length; h++)
          if (M(g, e[h]))
            return null;
        var R = JSON.stringify(e, function(I, a) {
          var W = D(a);
          return W === "symbol" ? String(a) : a;
        });
        return new A("Invalid " + m + " `" + b + "` of value `" + String(g) + "` " + ("supplied to `" + p + "`, expected one of " + R + "."));
      }
      return $(r);
    }
    function V(e) {
      function r(i, l, p, m, b) {
        if (typeof e != "function")
          return new A("Property `" + b + "` of component `" + p + "` has invalid PropType notation inside objectOf.");
        var g = i[l], h = Y(g);
        if (h !== "object")
          return new A("Invalid " + m + " `" + b + "` of type " + ("`" + h + "` supplied to `" + p + "`, expected an object."));
        for (var R in g)
          if (c(g, R)) {
            var j = e(g, R, p, m, b + "." + R, v);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return $(r);
    }
    function Q(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var r = 0; r < e.length; r++) {
        var i = e[r];
        if (typeof i != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + H(i) + " at index " + r + "."
          ), u;
      }
      function l(p, m, b, g, h) {
        for (var R = [], j = 0; j < e.length; j++) {
          var I = e[j], a = I(p, m, b, g, h, v);
          if (a == null)
            return null;
          a.data && c(a.data, "expectedType") && R.push(a.data.expectedType);
        }
        var W = R.length > 0 ? ", expected one of type [" + R.join(", ") + "]" : "";
        return new A("Invalid " + g + " `" + h + "` supplied to " + ("`" + b + "`" + W + "."));
      }
      return $(l);
    }
    function Z() {
      function e(r, i, l, p, m) {
        return L(r[i]) ? null : new A("Invalid " + p + " `" + m + "` supplied to " + ("`" + l + "`, expected a ReactNode."));
      }
      return $(e);
    }
    function U(e, r, i, l, p) {
      return new A(
        (e || "React class") + ": " + r + " type `" + i + "." + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + p + "`."
      );
    }
    function B(e) {
      function r(i, l, p, m, b) {
        var g = i[l], h = Y(g);
        if (h !== "object")
          return new A("Invalid " + m + " `" + b + "` of type `" + h + "` " + ("supplied to `" + p + "`, expected `object`."));
        for (var R in e) {
          var j = e[R];
          if (typeof j != "function")
            return U(p, m, b, R, D(j));
          var I = j(g, R, p, m, b + "." + R, v);
          if (I)
            return I;
        }
        return null;
      }
      return $(r);
    }
    function K(e) {
      function r(i, l, p, m, b) {
        var g = i[l], h = Y(g);
        if (h !== "object")
          return new A("Invalid " + m + " `" + b + "` of type `" + h + "` " + ("supplied to `" + p + "`, expected `object`."));
        var R = x({}, i[l], e);
        for (var j in R) {
          var I = e[j];
          if (c(e, j) && typeof I != "function")
            return U(p, m, b, j, D(I));
          if (!I)
            return new A(
              "Invalid " + m + " `" + b + "` key `" + j + "` supplied to `" + p + "`.\nBad object: " + JSON.stringify(i[l], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var a = I(g, j, p, m, b + "." + j, v);
          if (a)
            return a;
        }
        return null;
      }
      return $(r);
    }
    function L(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(L);
          if (e === null || d(e))
            return !0;
          var r = S(e);
          if (r) {
            var i = r.call(e), l;
            if (r !== e.entries) {
              for (; !(l = i.next()).done; )
                if (!L(l.value))
                  return !1;
            } else
              for (; !(l = i.next()).done; ) {
                var p = l.value;
                if (p && !L(p[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function G(e, r) {
      return e === "symbol" ? !0 : r ? r["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && r instanceof Symbol : !1;
    }
    function Y(e) {
      var r = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : G(r, e) ? "symbol" : r;
    }
    function D(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var r = Y(e);
      if (r === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return r;
    }
    function H(e) {
      var r = D(e);
      switch (r) {
        case "array":
        case "object":
          return "an " + r;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + r;
        default:
          return r;
      }
    }
    function J(e) {
      return !e.constructor || !e.constructor.name ? w : e.constructor.name;
    }
    return C.checkPropTypes = f, C.resetWarningCache = f.resetWarningCache, C.PropTypes = C, C;
  }, fe;
}
var de, Pe;
function He() {
  if (Pe) return de;
  Pe = 1;
  var n = /* @__PURE__ */ pe();
  function x() {
  }
  function v() {
  }
  return v.resetWarningCache = x, de = function() {
    function c(u, d, _, y, E, S) {
      if (S !== n) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    c.isRequired = c;
    function f() {
      return c;
    }
    var s = {
      array: c,
      bigint: c,
      bool: c,
      func: c,
      number: c,
      object: c,
      string: c,
      symbol: c,
      any: c,
      arrayOf: f,
      element: c,
      elementType: c,
      instanceOf: f,
      node: c,
      objectOf: f,
      oneOf: f,
      oneOfType: f,
      shape: f,
      exact: f,
      checkPropTypes: v,
      resetWarningCache: x
    };
    return s.PropTypes = s, s;
  }, de;
}
var we;
function Ve() {
  if (we) return ae.exports;
  if (we = 1, process.env.NODE_ENV !== "production") {
    var n = Ae(), x = !0;
    ae.exports = /* @__PURE__ */ ze()(n.isElement, x);
  } else
    ae.exports = /* @__PURE__ */ He()();
  return ae.exports;
}
var Be = /* @__PURE__ */ Ve();
const T = /* @__PURE__ */ Me(Be), he = ({
  logoUrl: n,
  logoAlt: x
}) => /* @__PURE__ */ t.jsx("a", { href: "/", className: "header-logo-container", children: n && /* @__PURE__ */ t.jsx(
  "img",
  {
    src: n,
    alt: x,
    className: "header-logo-img"
  }
) });
he.propTypes = {
  /** URL for the logo image */
  logoUrl: T.string,
  /** Alt text for the logo image */
  logoAlt: T.string
};
he.defaultProps = {
  logoUrl: void 0,
  logoAlt: "Logo"
};
const ke = ({ item: n }) => /* @__PURE__ */ t.jsx("li", { className: "header-menu-item", role: "menuitem", children: /* @__PURE__ */ t.jsxs(
  "a",
  {
    href: n.href,
    className: "header-menu-link",
    "aria-current": n.current ? "page" : void 0,
    children: [
      /* @__PURE__ */ t.jsx("span", { className: "header-menu-link-title", children: n.label }),
      n.description && /* @__PURE__ */ t.jsx("span", { className: "header-menu-link-description", children: n.description })
    ]
  }
) });
ke.propTypes = {
  /** Menu item object containing label, href, description, and current state */
  item: T.shape({
    label: T.string.isRequired,
    href: T.string.isRequired,
    description: T.string,
    current: T.bool
  }).isRequired
};
const me = ({
  items: n,
  mainHeading: x,
  id: v,
  className: c
}) => {
  const f = `${v}-heading`;
  return /* @__PURE__ */ t.jsxs("nav", { className: `header-menu-group ${c || ""}`, role: "navigation", "aria-labelledby": f, children: [
    /* @__PURE__ */ t.jsx("h3", { id: f, className: "header-menu-heading", children: x }),
    /* @__PURE__ */ t.jsx("ul", { className: "header-menu-group-items", role: "menu", children: n.map((s, u) => /* @__PURE__ */ t.jsx(ke, { item: s }, u)) })
  ] });
};
me.propTypes = {
  /** Array of menu items to display */
  items: T.arrayOf(
    T.shape({
      label: T.string.isRequired,
      href: T.string.isRequired,
      description: T.string,
      current: T.bool
    })
  ).isRequired,
  /** Main heading text for the menu group */
  mainHeading: T.string,
  /** ID for the component */
  id: T.string,
  /** Custom class name */
  className: T.string
};
me.defaultProps = {
  mainHeading: "General Information",
  id: "pgov-header-menu-group"
};
const Ne = ({
  title: n,
  logoUrl: x,
  logoAlt: v,
  tagline: c,
  navItems: f,
  mainHeading: s,
  menuText: u,
  openMenuAriaLabel: d,
  closeMenuAriaLabel: _,
  className: y
}) => {
  const [E, S] = se(!1), w = () => {
    S(!E);
  };
  return /* @__PURE__ */ t.jsxs("header", { className: `header ${y || ""}`, children: [
    /* @__PURE__ */ t.jsx("div", { className: "header-main", children: /* @__PURE__ */ t.jsxs("div", { className: "header-container", children: [
      /* @__PURE__ */ t.jsx("div", { className: "header-logo", children: /* @__PURE__ */ t.jsx(
        he,
        {
          logoUrl: x,
          logoAlt: v
        }
      ) }),
      /* @__PURE__ */ t.jsxs("div", { className: "header-text-container", children: [
        /* @__PURE__ */ t.jsx("span", { className: "header-title", children: n }),
        c && /* @__PURE__ */ t.jsx("span", { className: "header-tagline", children: c })
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: `header-mobile-menu ${E ? "is-open" : ""}`, children: /* @__PURE__ */ t.jsxs(
        "button",
        {
          className: "header-mobile-menu-button",
          "aria-label": E ? _ : d,
          "aria-expanded": E,
          "aria-controls": "header-mobile-dropdown",
          onClick: w,
          children: [
            /* @__PURE__ */ t.jsxs("span", { className: "header-mobile-menu-icon", children: [
              /* @__PURE__ */ t.jsx("span", {}),
              /* @__PURE__ */ t.jsx("span", {}),
              /* @__PURE__ */ t.jsx("span", {})
            ] }),
            /* @__PURE__ */ t.jsx("span", { className: "header-mobile-menu-text", "aria-hidden": "true", children: u })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        id: "header-mobile-dropdown",
        className: `header-mobile-dropdown ${E ? "is-open" : ""}`,
        children: /* @__PURE__ */ t.jsx("div", { className: "header-mobile-menu-content", children: /* @__PURE__ */ t.jsx("nav", { className: "header-mobile-nav", "aria-label": "Primary navigation", children: /* @__PURE__ */ t.jsx(
          me,
          {
            items: f,
            mainHeading: s,
            id: "header-menu-group"
          }
        ) }) })
      }
    )
  ] });
};
Ne.propTypes = {
  /** Title text for the header */
  title: T.string.isRequired,
  /** URL for the logo image */
  logoUrl: T.string,
  /** Alt text for the logo image */
  logoAlt: T.string,
  /** Optional tagline displayed below the title */
  tagline: T.string,
  /** Array of navigation items */
  navItems: T.arrayOf(
    T.shape({
      label: T.string.isRequired,
      href: T.string.isRequired,
      description: T.string,
      current: T.bool
    })
  ).isRequired,
  /** Main heading text for the navigation menu */
  mainHeading: T.string,
  /** Text for the menu button */
  menuText: T.string,
  /** Aria label for opening the menu */
  openMenuAriaLabel: T.string,
  /** Aria label for closing the menu */
  closeMenuAriaLabel: T.string,
  /** Additional CSS class names */
  className: T.string
};
Ne.defaultProps = {
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
const Je = ({
  navItems: n,
  isMobile: x = !1,
  onCloseMenu: v = () => {
  }
}) => {
  const [c, f] = se(null), s = (u) => {
    f(c === u ? null : u);
  };
  return /* @__PURE__ */ t.jsxs("nav", { className: `header-nav ${x ? "is-mobile" : ""}`, role: "navigation", children: [
    x && /* @__PURE__ */ t.jsx(
      "button",
      {
        className: "header-nav-close",
        onClick: v,
        "aria-label": "Close menu",
        children: /* @__PURE__ */ t.jsx("span", { className: "header-nav-close-icon", children: "×" })
      }
    ),
    /* @__PURE__ */ t.jsx("ul", { className: "header-nav-list", children: n.map((u, d) => /* @__PURE__ */ t.jsx(
      "li",
      {
        className: `header-nav-item ${u.current ? "is-current" : ""}`,
        children: u.children && u.children.length > 0 ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
          /* @__PURE__ */ t.jsxs(
            "button",
            {
              className: `header-nav-button ${c === u.label ? "is-open" : ""}`,
              onClick: () => s(u.label),
              "aria-expanded": c === u.label,
              "aria-controls": `submenu-${d}`,
              children: [
                /* @__PURE__ */ t.jsx("span", { children: u.label }),
                /* @__PURE__ */ t.jsx("span", { className: "header-nav-button-icon", children: c === u.label ? "▲" : "▼" })
              ]
            }
          ),
          /* @__PURE__ */ t.jsx(
            "ul",
            {
              id: `submenu-${d}`,
              className: `header-submenu ${c === u.label ? "is-open" : ""}`,
              children: u.children.map((_, y) => /* @__PURE__ */ t.jsx(
                "li",
                {
                  className: `header-submenu-item ${_.current ? "is-current" : ""}`,
                  children: /* @__PURE__ */ t.jsx(
                    "a",
                    {
                      href: _.href,
                      className: "header-submenu-link",
                      onClick: x ? v : void 0,
                      "aria-current": _.current ? "page" : void 0,
                      children: _.label
                    }
                  )
                },
                y
              ))
            }
          )
        ] }) : /* @__PURE__ */ t.jsx(
          "a",
          {
            href: u.href,
            className: "header-nav-link",
            onClick: x ? v : void 0,
            "aria-current": u.current ? "page" : void 0,
            children: u.label
          }
        )
      },
      d
    )) })
  ] });
}, Xe = ({
  placeholder: n = "Search",
  onSearch: x,
  inline: v = !1
}) => {
  const [c, f] = se(""), [s, u] = se(!1), d = (y) => {
    y.preventDefault(), x && c.trim() && x(c.trim());
  }, _ = () => {
    u(!s), s || setTimeout(() => {
      const y = document.getElementById("header-search-input");
      y && y.focus();
    }, 100);
  };
  return v ? /* @__PURE__ */ t.jsx("div", { className: "header-search header-search-inline", children: /* @__PURE__ */ t.jsxs(
    "form",
    {
      className: "header-search-form",
      onSubmit: d,
      role: "search",
      children: [
        /* @__PURE__ */ t.jsx(
          "label",
          {
            htmlFor: "header-search-input",
            className: "header-sr-only",
            children: n
          }
        ),
        /* @__PURE__ */ t.jsxs("div", { className: "header-search-input-wrapper", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: "header-search-input",
              className: "header-search-input",
              type: "search",
              placeholder: n,
              value: c,
              onChange: (y) => f(y.target.value)
            }
          ),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              type: "submit",
              className: "header-search-submit",
              "aria-label": "Submit search",
              children: /* @__PURE__ */ t.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ t.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                /* @__PURE__ */ t.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
              ] })
            }
          )
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ t.jsxs("div", { className: `header-search ${s ? "is-expanded" : ""}`, children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        className: "header-search-button",
        onClick: _,
        "aria-expanded": s,
        "aria-label": s ? "Close search" : "Open search",
        type: "button",
        children: [
          /* @__PURE__ */ t.jsx("span", { className: "header-search-button-text", children: "Search" }),
          /* @__PURE__ */ t.jsx("span", { className: "header-search-button-icon", children: /* @__PURE__ */ t.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ t.jsx("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ t.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ t.jsxs(
      "form",
      {
        className: "header-search-form",
        onSubmit: d,
        role: "search",
        children: [
          /* @__PURE__ */ t.jsx(
            "label",
            {
              htmlFor: "header-search-input",
              className: "header-sr-only",
              children: n
            }
          ),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              id: "header-search-input",
              className: "header-search-input",
              type: "search",
              placeholder: n,
              value: c,
              onChange: (y) => f(y.target.value)
            }
          ),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              type: "submit",
              className: "header-search-submit",
              "aria-label": "Submit search",
              children: /* @__PURE__ */ t.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ t.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                /* @__PURE__ */ t.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
              ] })
            }
          )
        ]
      }
    )
  ] });
}, $e = ({
  isOpen: n,
  onClick: x,
  menuText: v = "Menu",
  openMenuAriaLabel: c,
  closeMenuAriaLabel: f,
  menuId: s
}) => /* @__PURE__ */ t.jsx("div", { className: `header-mobile-menu ${n ? "is-open" : ""}`, children: /* @__PURE__ */ t.jsxs(
  "button",
  {
    className: "header-mobile-menu-button",
    onClick: x,
    "aria-expanded": n,
    "aria-controls": s,
    "aria-label": n ? f : c,
    "aria-haspopup": "true",
    type: "button",
    children: [
      /* @__PURE__ */ t.jsxs("div", { className: "header-mobile-menu-icon", "aria-hidden": "true", children: [
        /* @__PURE__ */ t.jsx("span", {}),
        /* @__PURE__ */ t.jsx("span", {}),
        /* @__PURE__ */ t.jsx("span", {})
      ] }),
      /* @__PURE__ */ t.jsx("span", { className: "header-mobile-menu-text", children: v })
    ]
  }
) });
$e.propTypes = {
  /** Whether the mobile menu is open */
  isOpen: T.bool.isRequired,
  /** Click handler for the menu button */
  onClick: T.func.isRequired,
  /** Text displayed on the menu button */
  menuText: T.string,
  /** Aria label for the button when menu is closed */
  openMenuAriaLabel: T.string,
  /** Aria label for the button when menu is open */
  closeMenuAriaLabel: T.string,
  /** ID of the menu being controlled */
  menuId: T.string
};
$e.defaultProps = {
  menuText: "Menu",
  openMenuAriaLabel: "Open menu",
  closeMenuAriaLabel: "Close menu",
  menuId: "pgov-header-mobile-menu"
};
export {
  he as HeaderLogo,
  me as HeaderMenuGroup,
  ke as HeaderMenuItem,
  $e as HeaderMobileMenu,
  Je as HeaderNav,
  Xe as HeaderSearch,
  Ne as PGOVHeader
};
//# sourceMappingURL=index.js.map
