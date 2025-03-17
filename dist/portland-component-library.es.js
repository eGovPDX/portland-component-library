import tr, { useState as Ve } from "react";
function or(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var be = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function ar() {
  if (ke) return me;
  ke = 1;
  var r = Symbol.for("react.transitional.element"), g = Symbol.for("react.fragment");
  function y(f, d, s) {
    var m = null;
    if (s !== void 0 && (m = "" + s), d.key !== void 0 && (m = "" + d.key), "key" in d) {
      s = {};
      for (var p in d)
        p !== "key" && (s[p] = d[p]);
    } else s = d;
    return d = s.ref, {
      $$typeof: r,
      type: f,
      key: m,
      ref: d !== void 0 ? d : null,
      props: s
    };
  }
  return me.Fragment = g, me.jsx = y, me.jsxs = y, me;
}
var ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function ir() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === de ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case J:
          return "Fragment";
        case i:
          return "Portal";
        case ue:
          return "Profiler";
        case ce:
          return "StrictMode";
        case oe:
          return "Suspense";
        case ae:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case fe:
            return (e.displayName || "Context") + ".Provider";
          case le:
            return (e._context.displayName || "Context") + ".Consumer";
          case ee:
            var c = e.render;
            return e = e.displayName, e || (e = c.displayName || c.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return c = e.displayName || null, c !== null ? c : r(e.type) || "Memo";
          case ie:
            c = e._payload, e = e._init;
            try {
              return r(e(c));
            } catch {
            }
        }
      return null;
    }
    function g(e) {
      return "" + e;
    }
    function y(e) {
      try {
        g(e);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var u = c.error, P = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), g(e);
      }
    }
    function f() {
    }
    function d() {
      if (v === 0) {
        j = console.log, b = console.info, x = console.warn, R = console.error, O = console.group, _ = console.groupCollapsed, U = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: f,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      v++;
    }
    function s() {
      if (v--, v === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: a({}, e, { value: j }),
          info: a({}, e, { value: b }),
          warn: a({}, e, { value: x }),
          error: a({}, e, { value: R }),
          group: a({}, e, { value: O }),
          groupCollapsed: a({}, e, { value: _ }),
          groupEnd: a({}, e, { value: U })
        });
      }
      0 > v && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function m(e) {
      if (t === void 0)
        try {
          throw Error();
        } catch (u) {
          var c = u.stack.trim().match(/\n( *(at )?)/);
          t = c && c[1] || "", V = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + t + e + V;
    }
    function p(e, c) {
      if (!e || re) return "";
      var u = pe.get(e);
      if (u !== void 0) return u;
      re = !0, u = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var P = null;
      P = G.H, G.H = null, d();
      try {
        var z = {
          DetermineComponentFrameRoot: function() {
            try {
              if (c) {
                var ne = function() {
                  throw Error();
                };
                if (Object.defineProperty(ne.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(ne, []);
                  } catch (Q) {
                    var he = Q;
                  }
                  Reflect.construct(e, [], ne);
                } else {
                  try {
                    ne.call();
                  } catch (Q) {
                    he = Q;
                  }
                  e.call(ne.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Q) {
                  he = Q;
                }
                (ne = e()) && typeof ne.catch == "function" && ne.catch(function() {
                });
              }
            } catch (Q) {
              if (Q && he && typeof Q.stack == "string")
                return [Q.stack, he.stack];
            }
            return [null, null];
          }
        };
        z.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var $ = Object.getOwnPropertyDescriptor(
          z.DetermineComponentFrameRoot,
          "name"
        );
        $ && $.configurable && Object.defineProperty(
          z.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var E = z.DetermineComponentFrameRoot(), K = E[0], ve = E[1];
        if (K && ve) {
          var F = K.split(`
`), se = ve.split(`
`);
          for (E = $ = 0; $ < F.length && !F[$].includes(
            "DetermineComponentFrameRoot"
          ); )
            $++;
          for (; E < se.length && !se[E].includes(
            "DetermineComponentFrameRoot"
          ); )
            E++;
          if ($ === F.length || E === se.length)
            for ($ = F.length - 1, E = se.length - 1; 1 <= $ && 0 <= E && F[$] !== se[E]; )
              E--;
          for (; 1 <= $ && 0 <= E; $--, E--)
            if (F[$] !== se[E]) {
              if ($ !== 1 || E !== 1)
                do
                  if ($--, E--, 0 > E || F[$] !== se[E]) {
                    var ye = `
` + F[$].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && ye.includes("<anonymous>") && (ye = ye.replace("<anonymous>", e.displayName)), typeof e == "function" && pe.set(e, ye), ye;
                  }
                while (1 <= $ && 0 <= E);
              break;
            }
        }
      } finally {
        re = !1, G.H = P, s(), Error.prepareStackTrace = u;
      }
      return F = (F = e ? e.displayName || e.name : "") ? m(F) : "", typeof e == "function" && pe.set(e, F), F;
    }
    function C(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var c = e.prototype;
        return p(
          e,
          !(!c || !c.isReactComponent)
        );
      }
      if (typeof e == "string") return m(e);
      switch (e) {
        case oe:
          return m("Suspense");
        case ae:
          return m("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ee:
            return e = p(e.render, !1), e;
          case X:
            return C(e.type);
          case ie:
            c = e._payload, e = e._init;
            try {
              return C(e(c));
            } catch {
            }
        }
      return "";
    }
    function w() {
      var e = G.A;
      return e === null ? null : e.getOwner();
    }
    function S(e) {
      if (n.call(e, "key")) {
        var c = Object.getOwnPropertyDescriptor(e, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function k(e, c) {
      function u() {
        Oe || (Oe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: u,
        configurable: !0
      });
    }
    function q() {
      var e = r(this.type);
      return Pe[e] || (Pe[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function Y(e, c, u, P, z, $) {
      return u = $.ref, e = {
        $$typeof: I,
        type: e,
        key: c,
        props: $,
        _owner: z
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: q
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
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function H(e, c, u, P, z, $) {
      if (typeof e == "string" || typeof e == "function" || e === J || e === ue || e === ce || e === oe || e === ae || e === D || typeof e == "object" && e !== null && (e.$$typeof === ie || e.$$typeof === X || e.$$typeof === fe || e.$$typeof === le || e.$$typeof === ee || e.$$typeof === T || e.getModuleId !== void 0)) {
        var E = c.children;
        if (E !== void 0)
          if (P)
            if (h(E)) {
              for (P = 0; P < E.length; P++)
                M(E[P], e);
              Object.freeze && Object.freeze(E);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else M(E, e);
      } else
        E = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? P = "null" : h(e) ? P = "array" : e !== void 0 && e.$$typeof === I ? (P = "<" + (r(e.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : P = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          P,
          E
        );
      if (n.call(c, "key")) {
        E = r(e);
        var K = Object.keys(c).filter(function(F) {
          return F !== "key";
        });
        P = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", Ae[E + P] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          E,
          K,
          E
        ), Ae[E + P] = !0);
      }
      if (E = null, u !== void 0 && (y(u), E = "" + u), S(c) && (y(c.key), E = "" + c.key), "key" in c) {
        u = {};
        for (var ve in c)
          ve !== "key" && (u[ve] = c[ve]);
      } else u = c;
      return E && k(
        u,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), Y(e, E, $, z, w(), u);
    }
    function M(e, c) {
      if (typeof e == "object" && e && e.$$typeof !== nr) {
        if (h(e))
          for (var u = 0; u < e.length; u++) {
            var P = e[u];
            W(P) && B(P, c);
          }
        else if (W(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? u = null : (u = Z && e[Z] || e["@@iterator"], u = typeof u == "function" ? u : null), typeof u == "function" && u !== e.entries && (u = u.call(e), u !== e))
          for (; !(e = u.next()).done; )
            W(e.value) && B(e.value, c);
      }
    }
    function W(e) {
      return typeof e == "object" && e !== null && e.$$typeof === I;
    }
    function B(e, c) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, c = te(c), !Ne[c])) {
        Ne[c] = !0;
        var u = "";
        e && e._owner != null && e._owner !== w() && (u = null, typeof e._owner.tag == "number" ? u = r(e._owner.type) : typeof e._owner.name == "string" && (u = e._owner.name), u = " It was passed a child from " + u + ".");
        var P = G.getCurrentStack;
        G.getCurrentStack = function() {
          var z = C(e.type);
          return P && (z += P() || ""), z;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          c,
          u
        ), G.getCurrentStack = P;
      }
    }
    function te(e) {
      var c = "", u = w();
      return u && (u = r(u.type)) && (c = `

Check the render method of \`` + u + "`."), c || (e = r(e)) && (c = `

Check the top-level render call using <` + e + ">."), c;
    }
    var L = tr, I = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), ce = Symbol.for("react.strict_mode"), ue = Symbol.for("react.profiler"), le = Symbol.for("react.consumer"), fe = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), Z = Symbol.iterator, de = Symbol.for("react.client.reference"), G = L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, n = Object.prototype.hasOwnProperty, a = Object.assign, T = Symbol.for("react.client.reference"), h = Array.isArray, v = 0, j, b, x, R, O, _, U;
    f.__reactDisabledLog = !0;
    var t, V, re = !1, pe = new (typeof WeakMap == "function" ? WeakMap : Map)(), nr = Symbol.for("react.client.reference"), Oe, Pe = {}, Ae = {}, Ne = {};
    ge.Fragment = J, ge.jsx = function(e, c, u, P, z) {
      return H(e, c, u, !1, P, z);
    }, ge.jsxs = function(e, c, u, P, z) {
      return H(e, c, u, !0, P, z);
    };
  }()), ge;
}
var $e;
function sr() {
  return $e || ($e = 1, process.env.NODE_ENV === "production" ? be.exports = ar() : be.exports = ir()), be.exports;
}
var o = sr(), Ee = { exports: {} }, xe = { exports: {} }, A = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function cr() {
  if (Ie) return A;
  Ie = 1;
  var r = typeof Symbol == "function" && Symbol.for, g = r ? Symbol.for("react.element") : 60103, y = r ? Symbol.for("react.portal") : 60106, f = r ? Symbol.for("react.fragment") : 60107, d = r ? Symbol.for("react.strict_mode") : 60108, s = r ? Symbol.for("react.profiler") : 60114, m = r ? Symbol.for("react.provider") : 60109, p = r ? Symbol.for("react.context") : 60110, C = r ? Symbol.for("react.async_mode") : 60111, w = r ? Symbol.for("react.concurrent_mode") : 60111, S = r ? Symbol.for("react.forward_ref") : 60112, k = r ? Symbol.for("react.suspense") : 60113, q = r ? Symbol.for("react.suspense_list") : 60120, Y = r ? Symbol.for("react.memo") : 60115, H = r ? Symbol.for("react.lazy") : 60116, M = r ? Symbol.for("react.block") : 60121, W = r ? Symbol.for("react.fundamental") : 60117, B = r ? Symbol.for("react.responder") : 60118, te = r ? Symbol.for("react.scope") : 60119;
  function L(i) {
    if (typeof i == "object" && i !== null) {
      var J = i.$$typeof;
      switch (J) {
        case g:
          switch (i = i.type, i) {
            case C:
            case w:
            case f:
            case s:
            case d:
            case k:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case p:
                case S:
                case H:
                case Y:
                case m:
                  return i;
                default:
                  return J;
              }
          }
        case y:
          return J;
      }
    }
  }
  function I(i) {
    return L(i) === w;
  }
  return A.AsyncMode = C, A.ConcurrentMode = w, A.ContextConsumer = p, A.ContextProvider = m, A.Element = g, A.ForwardRef = S, A.Fragment = f, A.Lazy = H, A.Memo = Y, A.Portal = y, A.Profiler = s, A.StrictMode = d, A.Suspense = k, A.isAsyncMode = function(i) {
    return I(i) || L(i) === C;
  }, A.isConcurrentMode = I, A.isContextConsumer = function(i) {
    return L(i) === p;
  }, A.isContextProvider = function(i) {
    return L(i) === m;
  }, A.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === g;
  }, A.isForwardRef = function(i) {
    return L(i) === S;
  }, A.isFragment = function(i) {
    return L(i) === f;
  }, A.isLazy = function(i) {
    return L(i) === H;
  }, A.isMemo = function(i) {
    return L(i) === Y;
  }, A.isPortal = function(i) {
    return L(i) === y;
  }, A.isProfiler = function(i) {
    return L(i) === s;
  }, A.isStrictMode = function(i) {
    return L(i) === d;
  }, A.isSuspense = function(i) {
    return L(i) === k;
  }, A.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === f || i === w || i === s || i === d || i === k || i === q || typeof i == "object" && i !== null && (i.$$typeof === H || i.$$typeof === Y || i.$$typeof === m || i.$$typeof === p || i.$$typeof === S || i.$$typeof === W || i.$$typeof === B || i.$$typeof === te || i.$$typeof === M);
  }, A.typeOf = L, A;
}
var N = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function ur() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, g = r ? Symbol.for("react.element") : 60103, y = r ? Symbol.for("react.portal") : 60106, f = r ? Symbol.for("react.fragment") : 60107, d = r ? Symbol.for("react.strict_mode") : 60108, s = r ? Symbol.for("react.profiler") : 60114, m = r ? Symbol.for("react.provider") : 60109, p = r ? Symbol.for("react.context") : 60110, C = r ? Symbol.for("react.async_mode") : 60111, w = r ? Symbol.for("react.concurrent_mode") : 60111, S = r ? Symbol.for("react.forward_ref") : 60112, k = r ? Symbol.for("react.suspense") : 60113, q = r ? Symbol.for("react.suspense_list") : 60120, Y = r ? Symbol.for("react.memo") : 60115, H = r ? Symbol.for("react.lazy") : 60116, M = r ? Symbol.for("react.block") : 60121, W = r ? Symbol.for("react.fundamental") : 60117, B = r ? Symbol.for("react.responder") : 60118, te = r ? Symbol.for("react.scope") : 60119;
    function L(t) {
      return typeof t == "string" || typeof t == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      t === f || t === w || t === s || t === d || t === k || t === q || typeof t == "object" && t !== null && (t.$$typeof === H || t.$$typeof === Y || t.$$typeof === m || t.$$typeof === p || t.$$typeof === S || t.$$typeof === W || t.$$typeof === B || t.$$typeof === te || t.$$typeof === M);
    }
    function I(t) {
      if (typeof t == "object" && t !== null) {
        var V = t.$$typeof;
        switch (V) {
          case g:
            var re = t.type;
            switch (re) {
              case C:
              case w:
              case f:
              case s:
              case d:
              case k:
                return re;
              default:
                var pe = re && re.$$typeof;
                switch (pe) {
                  case p:
                  case S:
                  case H:
                  case Y:
                  case m:
                    return pe;
                  default:
                    return V;
                }
            }
          case y:
            return V;
        }
      }
    }
    var i = C, J = w, ce = p, ue = m, le = g, fe = S, ee = f, oe = H, ae = Y, X = y, ie = s, D = d, Z = k, de = !1;
    function G(t) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), n(t) || I(t) === C;
    }
    function n(t) {
      return I(t) === w;
    }
    function a(t) {
      return I(t) === p;
    }
    function T(t) {
      return I(t) === m;
    }
    function h(t) {
      return typeof t == "object" && t !== null && t.$$typeof === g;
    }
    function v(t) {
      return I(t) === S;
    }
    function j(t) {
      return I(t) === f;
    }
    function b(t) {
      return I(t) === H;
    }
    function x(t) {
      return I(t) === Y;
    }
    function R(t) {
      return I(t) === y;
    }
    function O(t) {
      return I(t) === s;
    }
    function _(t) {
      return I(t) === d;
    }
    function U(t) {
      return I(t) === k;
    }
    N.AsyncMode = i, N.ConcurrentMode = J, N.ContextConsumer = ce, N.ContextProvider = ue, N.Element = le, N.ForwardRef = fe, N.Fragment = ee, N.Lazy = oe, N.Memo = ae, N.Portal = X, N.Profiler = ie, N.StrictMode = D, N.Suspense = Z, N.isAsyncMode = G, N.isConcurrentMode = n, N.isContextConsumer = a, N.isContextProvider = T, N.isElement = h, N.isForwardRef = v, N.isFragment = j, N.isLazy = b, N.isMemo = x, N.isPortal = R, N.isProfiler = O, N.isStrictMode = _, N.isSuspense = U, N.isValidElementType = L, N.typeOf = I;
  }()), N;
}
var Ye;
function De() {
  return Ye || (Ye = 1, process.env.NODE_ENV === "production" ? xe.exports = cr() : xe.exports = ur()), xe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Te, We;
function lr() {
  if (We) return Te;
  We = 1;
  var r = Object.getOwnPropertySymbols, g = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
  function f(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function d() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var m = {}, p = 0; p < 10; p++)
        m["_" + String.fromCharCode(p)] = p;
      var C = Object.getOwnPropertyNames(m).map(function(S) {
        return m[S];
      });
      if (C.join("") !== "0123456789")
        return !1;
      var w = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(S) {
        w[S] = S;
      }), Object.keys(Object.assign({}, w)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Te = d() ? Object.assign : function(s, m) {
    for (var p, C = f(s), w, S = 1; S < arguments.length; S++) {
      p = Object(arguments[S]);
      for (var k in p)
        g.call(p, k) && (C[k] = p[k]);
      if (r) {
        w = r(p);
        for (var q = 0; q < w.length; q++)
          y.call(p, w[q]) && (C[w[q]] = p[w[q]]);
      }
    }
    return C;
  }, Te;
}
var je, Le;
function Se() {
  if (Le) return je;
  Le = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return je = r, je;
}
var Re, Ue;
function Je() {
  return Ue || (Ue = 1, Re = Function.call.bind(Object.prototype.hasOwnProperty)), Re;
}
var _e, He;
function fr() {
  if (He) return _e;
  He = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var g = /* @__PURE__ */ Se(), y = {}, f = /* @__PURE__ */ Je();
    r = function(s) {
      var m = "Warning: " + s;
      typeof console < "u" && console.error(m);
      try {
        throw new Error(m);
      } catch {
      }
    };
  }
  function d(s, m, p, C, w) {
    if (process.env.NODE_ENV !== "production") {
      for (var S in s)
        if (f(s, S)) {
          var k;
          try {
            if (typeof s[S] != "function") {
              var q = Error(
                (C || "React class") + ": " + p + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw q.name = "Invariant Violation", q;
            }
            k = s[S](m, S, C, p, null, g);
          } catch (H) {
            k = H;
          }
          if (k && !(k instanceof Error) && r(
            (C || "React class") + ": type specification of " + p + " `" + S + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof k + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), k instanceof Error && !(k.message in y)) {
            y[k.message] = !0;
            var Y = w ? w() : "";
            r(
              "Failed " + p + " type: " + k.message + (Y ?? "")
            );
          }
        }
    }
  }
  return d.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (y = {});
  }, _e = d, _e;
}
var Ce, ze;
function dr() {
  if (ze) return Ce;
  ze = 1;
  var r = De(), g = lr(), y = /* @__PURE__ */ Se(), f = /* @__PURE__ */ Je(), d = /* @__PURE__ */ fr(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(p) {
    var C = "Warning: " + p;
    typeof console < "u" && console.error(C);
    try {
      throw new Error(C);
    } catch {
    }
  });
  function m() {
    return null;
  }
  return Ce = function(p, C) {
    var w = typeof Symbol == "function" && Symbol.iterator, S = "@@iterator";
    function k(n) {
      var a = n && (w && n[w] || n[S]);
      if (typeof a == "function")
        return a;
    }
    var q = "<<anonymous>>", Y = {
      array: B("array"),
      bigint: B("bigint"),
      bool: B("boolean"),
      func: B("function"),
      number: B("number"),
      object: B("object"),
      string: B("string"),
      symbol: B("symbol"),
      any: te(),
      arrayOf: L,
      element: I(),
      elementType: i(),
      instanceOf: J,
      node: fe(),
      objectOf: ue,
      oneOf: ce,
      oneOfType: le,
      shape: oe,
      exact: ae
    };
    function H(n, a) {
      return n === a ? n !== 0 || 1 / n === 1 / a : n !== n && a !== a;
    }
    function M(n, a) {
      this.message = n, this.data = a && typeof a == "object" ? a : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function W(n) {
      if (process.env.NODE_ENV !== "production")
        var a = {}, T = 0;
      function h(j, b, x, R, O, _, U) {
        if (R = R || q, _ = _ || x, U !== y) {
          if (C) {
            var t = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw t.name = "Invariant Violation", t;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var V = R + ":" + x;
            !a[V] && // Avoid spamming the console because they are often not actionable except for lib authors
            T < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + _ + "` prop on `" + R + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), a[V] = !0, T++);
          }
        }
        return b[x] == null ? j ? b[x] === null ? new M("The " + O + " `" + _ + "` is marked as required " + ("in `" + R + "`, but its value is `null`.")) : new M("The " + O + " `" + _ + "` is marked as required in " + ("`" + R + "`, but its value is `undefined`.")) : null : n(b, x, R, O, _);
      }
      var v = h.bind(null, !1);
      return v.isRequired = h.bind(null, !0), v;
    }
    function B(n) {
      function a(T, h, v, j, b, x) {
        var R = T[h], O = D(R);
        if (O !== n) {
          var _ = Z(R);
          return new M(
            "Invalid " + j + " `" + b + "` of type " + ("`" + _ + "` supplied to `" + v + "`, expected ") + ("`" + n + "`."),
            { expectedType: n }
          );
        }
        return null;
      }
      return W(a);
    }
    function te() {
      return W(m);
    }
    function L(n) {
      function a(T, h, v, j, b) {
        if (typeof n != "function")
          return new M("Property `" + b + "` of component `" + v + "` has invalid PropType notation inside arrayOf.");
        var x = T[h];
        if (!Array.isArray(x)) {
          var R = D(x);
          return new M("Invalid " + j + " `" + b + "` of type " + ("`" + R + "` supplied to `" + v + "`, expected an array."));
        }
        for (var O = 0; O < x.length; O++) {
          var _ = n(x, O, v, j, b + "[" + O + "]", y);
          if (_ instanceof Error)
            return _;
        }
        return null;
      }
      return W(a);
    }
    function I() {
      function n(a, T, h, v, j) {
        var b = a[T];
        if (!p(b)) {
          var x = D(b);
          return new M("Invalid " + v + " `" + j + "` of type " + ("`" + x + "` supplied to `" + h + "`, expected a single ReactElement."));
        }
        return null;
      }
      return W(n);
    }
    function i() {
      function n(a, T, h, v, j) {
        var b = a[T];
        if (!r.isValidElementType(b)) {
          var x = D(b);
          return new M("Invalid " + v + " `" + j + "` of type " + ("`" + x + "` supplied to `" + h + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return W(n);
    }
    function J(n) {
      function a(T, h, v, j, b) {
        if (!(T[h] instanceof n)) {
          var x = n.name || q, R = G(T[h]);
          return new M("Invalid " + j + " `" + b + "` of type " + ("`" + R + "` supplied to `" + v + "`, expected ") + ("instance of `" + x + "`."));
        }
        return null;
      }
      return W(a);
    }
    function ce(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), m;
      function a(T, h, v, j, b) {
        for (var x = T[h], R = 0; R < n.length; R++)
          if (H(x, n[R]))
            return null;
        var O = JSON.stringify(n, function(U, t) {
          var V = Z(t);
          return V === "symbol" ? String(t) : t;
        });
        return new M("Invalid " + j + " `" + b + "` of value `" + String(x) + "` " + ("supplied to `" + v + "`, expected one of " + O + "."));
      }
      return W(a);
    }
    function ue(n) {
      function a(T, h, v, j, b) {
        if (typeof n != "function")
          return new M("Property `" + b + "` of component `" + v + "` has invalid PropType notation inside objectOf.");
        var x = T[h], R = D(x);
        if (R !== "object")
          return new M("Invalid " + j + " `" + b + "` of type " + ("`" + R + "` supplied to `" + v + "`, expected an object."));
        for (var O in x)
          if (f(x, O)) {
            var _ = n(x, O, v, j, b + "." + O, y);
            if (_ instanceof Error)
              return _;
          }
        return null;
      }
      return W(a);
    }
    function le(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), m;
      for (var a = 0; a < n.length; a++) {
        var T = n[a];
        if (typeof T != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + de(T) + " at index " + a + "."
          ), m;
      }
      function h(v, j, b, x, R) {
        for (var O = [], _ = 0; _ < n.length; _++) {
          var U = n[_], t = U(v, j, b, x, R, y);
          if (t == null)
            return null;
          t.data && f(t.data, "expectedType") && O.push(t.data.expectedType);
        }
        var V = O.length > 0 ? ", expected one of type [" + O.join(", ") + "]" : "";
        return new M("Invalid " + x + " `" + R + "` supplied to " + ("`" + b + "`" + V + "."));
      }
      return W(h);
    }
    function fe() {
      function n(a, T, h, v, j) {
        return X(a[T]) ? null : new M("Invalid " + v + " `" + j + "` supplied to " + ("`" + h + "`, expected a ReactNode."));
      }
      return W(n);
    }
    function ee(n, a, T, h, v) {
      return new M(
        (n || "React class") + ": " + a + " type `" + T + "." + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + v + "`."
      );
    }
    function oe(n) {
      function a(T, h, v, j, b) {
        var x = T[h], R = D(x);
        if (R !== "object")
          return new M("Invalid " + j + " `" + b + "` of type `" + R + "` " + ("supplied to `" + v + "`, expected `object`."));
        for (var O in n) {
          var _ = n[O];
          if (typeof _ != "function")
            return ee(v, j, b, O, Z(_));
          var U = _(x, O, v, j, b + "." + O, y);
          if (U)
            return U;
        }
        return null;
      }
      return W(a);
    }
    function ae(n) {
      function a(T, h, v, j, b) {
        var x = T[h], R = D(x);
        if (R !== "object")
          return new M("Invalid " + j + " `" + b + "` of type `" + R + "` " + ("supplied to `" + v + "`, expected `object`."));
        var O = g({}, T[h], n);
        for (var _ in O) {
          var U = n[_];
          if (f(n, _) && typeof U != "function")
            return ee(v, j, b, _, Z(U));
          if (!U)
            return new M(
              "Invalid " + j + " `" + b + "` key `" + _ + "` supplied to `" + v + "`.\nBad object: " + JSON.stringify(T[h], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(n), null, "  ")
            );
          var t = U(x, _, v, j, b + "." + _, y);
          if (t)
            return t;
        }
        return null;
      }
      return W(a);
    }
    function X(n) {
      switch (typeof n) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !n;
        case "object":
          if (Array.isArray(n))
            return n.every(X);
          if (n === null || p(n))
            return !0;
          var a = k(n);
          if (a) {
            var T = a.call(n), h;
            if (a !== n.entries) {
              for (; !(h = T.next()).done; )
                if (!X(h.value))
                  return !1;
            } else
              for (; !(h = T.next()).done; ) {
                var v = h.value;
                if (v && !X(v[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ie(n, a) {
      return n === "symbol" ? !0 : a ? a["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && a instanceof Symbol : !1;
    }
    function D(n) {
      var a = typeof n;
      return Array.isArray(n) ? "array" : n instanceof RegExp ? "object" : ie(a, n) ? "symbol" : a;
    }
    function Z(n) {
      if (typeof n > "u" || n === null)
        return "" + n;
      var a = D(n);
      if (a === "object") {
        if (n instanceof Date)
          return "date";
        if (n instanceof RegExp)
          return "regexp";
      }
      return a;
    }
    function de(n) {
      var a = Z(n);
      switch (a) {
        case "array":
        case "object":
          return "an " + a;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + a;
        default:
          return a;
      }
    }
    function G(n) {
      return !n.constructor || !n.constructor.name ? q : n.constructor.name;
    }
    return Y.checkPropTypes = d, Y.resetWarningCache = d.resetWarningCache, Y.PropTypes = Y, Y;
  }, Ce;
}
var we, Be;
function pr() {
  if (Be) return we;
  Be = 1;
  var r = /* @__PURE__ */ Se();
  function g() {
  }
  function y() {
  }
  return y.resetWarningCache = g, we = function() {
    function f(m, p, C, w, S, k) {
      if (k !== r) {
        var q = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw q.name = "Invariant Violation", q;
      }
    }
    f.isRequired = f;
    function d() {
      return f;
    }
    var s = {
      array: f,
      bigint: f,
      bool: f,
      func: f,
      number: f,
      object: f,
      string: f,
      symbol: f,
      any: f,
      arrayOf: d,
      element: f,
      elementType: f,
      instanceOf: d,
      node: f,
      objectOf: d,
      oneOf: d,
      oneOfType: d,
      shape: d,
      exact: d,
      checkPropTypes: y,
      resetWarningCache: g
    };
    return s.PropTypes = s, s;
  }, we;
}
var Fe;
function vr() {
  if (Fe) return Ee.exports;
  if (Fe = 1, process.env.NODE_ENV !== "production") {
    var r = De(), g = !0;
    Ee.exports = /* @__PURE__ */ dr()(r.isElement, g);
  } else
    Ee.exports = /* @__PURE__ */ pr()();
  return Ee.exports;
}
var yr = /* @__PURE__ */ vr();
const l = /* @__PURE__ */ or(yr), mr = ({
  variant: r = "primary",
  size: g = "medium",
  disabled: y = !1,
  children: f,
  onClick: d,
  className: s = ""
}) => {
  const m = [
    "portland-button",
    `portland-button--${r}`,
    `portland-button--${g}`,
    s
  ].join(" ");
  return /* @__PURE__ */ o.jsx(
    "button",
    {
      type: "button",
      className: m,
      disabled: y,
      onClick: d,
      children: f
    }
  );
};
mr.propTypes = {
  /**
   * Button variant/style
   */
  variant: l.oneOf(["primary", "secondary", "tertiary"]),
  /**
   * Button size
   */
  size: l.oneOf(["small", "medium", "large"]),
  /**
   * Is the button disabled?
   */
  disabled: l.bool,
  /**
   * Button contents
   */
  children: l.node.isRequired,
  /**
   * Optional click handler
   */
  onClick: l.func,
  /**
   * Additional CSS class names
   */
  className: l.string
};
const Ge = ({
  domain: r = "An official website of the City of Portland",
  icon: g,
  heading: y = "Important Information",
  description: f = "This is a placeholder description that can be changed in the Banner story.",
  className: d = ""
}) => {
  const [s, m] = Ve(!1), p = () => {
    m(!s);
  }, C = /* @__PURE__ */ o.jsx("svg", { width: "40", height: "40", viewBox: "0 0 60 60", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ o.jsx("path", { d: "M30 54C21.375 54 13.5 49.5 9.1875 42C4.875 34.5938 4.875 25.5 9.1875 18C13.5 10.5938 21.375 6 30 6C38.5312 6 46.4062 10.5938 50.7188 18C55.0312 25.5 55.0312 34.5938 50.7188 42C46.4062 49.5 38.5312 54 30 54ZM26.25 37.5C24.9375 37.5 24 38.5312 24 39.75C24 41.0625 24.9375 42 26.25 42H33.75C34.9688 42 36 41.0625 36 39.75C36 38.5312 34.9688 37.5 33.75 37.5H33V29.25C33 28.0312 31.9688 27 30.75 27H26.25C24.9375 27 24 28.0312 24 29.25C24 30.5625 24.9375 31.5 26.25 31.5H28.5V37.5H26.25ZM30 18C28.3125 18 27 19.4062 27 21C27 22.6875 28.3125 24 30 24C31.5938 24 33 22.6875 33 21C33 19.4062 31.5938 18 30 18Z", fill: "currentColor" }) });
  return /* @__PURE__ */ o.jsx("section", { className: `pgov-banner ${d}`, children: /* @__PURE__ */ o.jsxs("div", { className: "pgov-banner-inner", children: [
    /* @__PURE__ */ o.jsx("div", { className: "pgov-banner-header", children: /* @__PURE__ */ o.jsxs("div", { className: "pgov-banner-header-inner", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "pgov-banner-header-content", children: [
        /* @__PURE__ */ o.jsx("div", { className: "pgov-banner-header-icon", children: g || C }),
        /* @__PURE__ */ o.jsx("p", { className: "pgov-banner-header-text", children: r })
      ] }),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "pgov-banner-button",
          onClick: p,
          "aria-expanded": s,
          "aria-controls": "pgov-banner-content",
          children: [
            /* @__PURE__ */ o.jsx("span", { className: "pgov-banner-button-text", children: "Here's how you know" }),
            /* @__PURE__ */ o.jsx("span", { className: `pgov-banner-button-icon ${s ? "is-open" : ""}`, children: /* @__PURE__ */ o.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ o.jsx("polyline", { points: "6 9 12 15 18 9" }) }) })
          ]
        }
      )
    ] }) }),
    s && /* @__PURE__ */ o.jsxs(
      "div",
      {
        id: "pgov-banner-content",
        className: "pgov-banner-content",
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: "pgov-banner-guidance", children: [
            /* @__PURE__ */ o.jsx("div", { className: "pgov-banner-guidance-icon", children: g || C }),
            /* @__PURE__ */ o.jsx("div", { className: "pgov-banner-guidance-text", children: /* @__PURE__ */ o.jsxs("p", { children: [
              /* @__PURE__ */ o.jsx("strong", { children: y }),
              /* @__PURE__ */ o.jsx("br", {}),
              f
            ] }) })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "pgov-banner-guidance", children: [
            /* @__PURE__ */ o.jsx("div", { className: "pgov-banner-guidance-icon", children: /* @__PURE__ */ o.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ o.jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
              /* @__PURE__ */ o.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
            ] }) }),
            /* @__PURE__ */ o.jsx("div", { className: "pgov-banner-guidance-text", children: /* @__PURE__ */ o.jsxs("p", { children: [
              /* @__PURE__ */ o.jsx("strong", { children: "Secure websites use HTTPS" }),
              /* @__PURE__ */ o.jsx("br", {}),
              "A ",
              /* @__PURE__ */ o.jsx("strong", { children: "lock" }),
              " or ",
              /* @__PURE__ */ o.jsx("strong", { children: "https://" }),
              " means you've safely connected to the .gov website. Share sensitive information only on official, secure websites."
            ] }) })
          ] })
        ]
      }
    )
  ] }) });
};
Ge.propTypes = {
  /** Text describing the domain/owner of the site */
  domain: l.string,
  /** Custom icon element to display in the banner */
  icon: l.node,
  /** Heading text for the banner content */
  heading: l.string,
  /** Description text for the banner content */
  description: l.string,
  /** Additional CSS class for the banner */
  className: l.string
};
const Xe = ({
  title: r,
  logoUrl: g,
  logoAlt: y = "Logo",
  tagline: f,
  homeUrl: d = "/",
  homeTitle: s = "Home",
  homeAriaLabel: m = "Home"
}) => /* @__PURE__ */ o.jsx("div", { className: "pgov-header-logo", children: /* @__PURE__ */ o.jsx("a", { href: d, title: s, "aria-label": m, children: /* @__PURE__ */ o.jsxs("div", { className: "pgov-header-logo-container", children: [
  g && /* @__PURE__ */ o.jsx(
    "img",
    {
      src: g,
      alt: y,
      className: "pgov-header-logo-img"
    }
  ),
  /* @__PURE__ */ o.jsxs("div", { className: "pgov-header-logo-text-container", children: [
    /* @__PURE__ */ o.jsx("span", { className: "pgov-header-logo-text", children: r }),
    f && /* @__PURE__ */ o.jsx("span", { className: "pgov-header-logo-tagline", children: f })
  ] })
] }) }) });
Xe.propTypes = {
  /** Title text for the logo */
  title: l.string.isRequired,
  /** URL for the logo image */
  logoUrl: l.string,
  /** Alt text for the logo image */
  logoAlt: l.string,
  /** Optional tagline displayed below the title */
  tagline: l.string,
  /** URL for the home link */
  homeUrl: l.string,
  /** Title attribute for the home link */
  homeTitle: l.string,
  /** Aria label for the home link */
  homeAriaLabel: l.string
};
const Ze = ({
  isOpen: r,
  onClick: g,
  menuText: y = "Menu",
  openMenuAriaLabel: f = "Open menu",
  closeMenuAriaLabel: d = "Close menu"
}) => /* @__PURE__ */ o.jsx("div", { className: `pgov-header-mobile-menu ${r ? "is-open" : ""}`, children: /* @__PURE__ */ o.jsxs(
  "button",
  {
    className: "pgov-header-mobile-menu-button",
    onClick: g,
    "aria-expanded": r,
    "aria-label": r ? d : f,
    type: "button",
    children: [
      /* @__PURE__ */ o.jsxs("div", { className: "pgov-header-mobile-menu-icon", children: [
        /* @__PURE__ */ o.jsx("span", {}),
        /* @__PURE__ */ o.jsx("span", {}),
        /* @__PURE__ */ o.jsx("span", {})
      ] }),
      /* @__PURE__ */ o.jsx("span", { className: "pgov-header-mobile-menu-text", children: y })
    ]
  }
) });
Ze.propTypes = {
  /** Whether the mobile menu is open */
  isOpen: l.bool.isRequired,
  /** Click handler for the menu button */
  onClick: l.func.isRequired,
  /** Text displayed on the menu button */
  menuText: l.string,
  /** Aria label for the button when menu is closed */
  openMenuAriaLabel: l.string,
  /** Aria label for the button when menu is open */
  closeMenuAriaLabel: l.string
};
const Ke = ({ item: r }) => /* @__PURE__ */ o.jsx("li", { className: "pgov-header-menu-item", children: /* @__PURE__ */ o.jsx("a", { href: r.href, className: "pgov-header-menu-link", children: /* @__PURE__ */ o.jsxs("div", { className: "pgov-header-menu-link-content", children: [
  /* @__PURE__ */ o.jsx("span", { className: "pgov-header-menu-link-title", children: r.label }),
  r.description && /* @__PURE__ */ o.jsx("span", { className: "pgov-header-menu-link-description", children: r.description })
] }) }) });
Ke.propTypes = {
  /** Item object containing link details */
  item: l.shape({
    /** Text label for the menu item */
    label: l.string.isRequired,
    /** URL for the menu item link */
    href: l.string.isRequired,
    /** Optional description text */
    description: l.string
  }).isRequired
};
const Qe = ({
  items: r,
  mainHeading: g = "General Information"
}) => /* @__PURE__ */ o.jsxs("div", { className: "pgov-header-menu-group", children: [
  /* @__PURE__ */ o.jsx("h3", { className: "pgov-header-menu-group-main-heading", children: g }),
  /* @__PURE__ */ o.jsx("ul", { className: "pgov-header-menu-group-items", children: r.map((y, f) => /* @__PURE__ */ o.jsx(Ke, { item: y }, f)) })
] });
Qe.propTypes = {
  /** Array of menu items to display */
  items: l.arrayOf(
    l.shape({
      label: l.string.isRequired,
      href: l.string.isRequired,
      description: l.string
    })
  ).isRequired,
  /** Main heading text for the menu group */
  mainHeading: l.string
};
const er = ({
  title: r,
  logoUrl: g,
  logoAlt: y,
  tagline: f,
  navItems: d = [],
  className: s = "",
  mainHeading: m = "General Information"
}) => {
  const [p, C] = Ve(!1), w = () => {
    C(!p);
  };
  return /* @__PURE__ */ o.jsxs("header", { className: `pgov-header ${s}`, children: [
    /* @__PURE__ */ o.jsx("div", { className: "pgov-header-main", children: /* @__PURE__ */ o.jsxs("div", { className: "pgov-header-container", children: [
      /* @__PURE__ */ o.jsx(
        Xe,
        {
          title: r,
          logoUrl: g,
          logoAlt: y,
          tagline: f
        }
      ),
      /* @__PURE__ */ o.jsx(
        Ze,
        {
          isOpen: p,
          onClick: w
        }
      )
    ] }) }),
    /* @__PURE__ */ o.jsx("div", { className: `pgov-header-mobile-dropdown ${p ? "is-open" : ""}`, children: /* @__PURE__ */ o.jsx("div", { className: "pgov-header-mobile-menu-content", children: /* @__PURE__ */ o.jsx("div", { className: "pgov-header-mobile-nav", children: /* @__PURE__ */ o.jsx(
      Qe,
      {
        items: d,
        mainHeading: m
      }
    ) }) }) })
  ] });
};
er.propTypes = {
  /** Title displayed in the header */
  title: l.string.isRequired,
  /** URL for the logo image */
  logoUrl: l.string,
  /** Alt text for the logo image */
  logoAlt: l.string,
  /** Tagline displayed below the title */
  tagline: l.string,
  /** Array of navigation items */
  navItems: l.arrayOf(
    l.shape({
      label: l.string.isRequired,
      href: l.string.isRequired,
      description: l.string
    })
  ),
  /** Additional CSS class for the header */
  className: l.string,
  /** Main heading for the navigation group */
  mainHeading: l.string
};
const rr = ({
  skipToId: r = "main-content",
  label: g = "Skip to main content",
  className: y = ""
}) => /* @__PURE__ */ o.jsx(
  "a",
  {
    href: `#${r}`,
    className: `pgov-skipnav ${y}`,
    children: g
  }
);
rr.propTypes = {
  /** ID of the element to skip to */
  skipToId: l.string,
  /** Link text */
  label: l.string,
  /** Additional CSS class */
  className: l.string
};
const gr = ({
  bannerProps: r,
  headerProps: g,
  skipNavProps: y,
  children: f,
  includeBanner: d = !0,
  includeSkipNav: s = !0,
  className: m = ""
}) => /* @__PURE__ */ o.jsxs("div", { className: `pgov-page-template ${m}`, children: [
  s && /* @__PURE__ */ o.jsx(rr, { ...y }),
  d && /* @__PURE__ */ o.jsx(Ge, { ...r }),
  /* @__PURE__ */ o.jsx(er, { ...g }),
  /* @__PURE__ */ o.jsx("main", { id: "main-content", className: "pgov-page-template-main", children: f })
] });
gr.propTypes = {
  /** Props for the Banner component */
  bannerProps: l.object,
  /** Props for the Header component */
  headerProps: l.object.isRequired,
  /** Props for the SkipNav component */
  skipNavProps: l.object,
  /** Content to be rendered in the main section */
  children: l.node,
  /** Whether to include the Banner component */
  includeBanner: l.bool,
  /** Whether to include the SkipNav component */
  includeSkipNav: l.bool,
  /** Additional CSS class for the template */
  className: l.string
};
export {
  Ge as Banner,
  mr as Button,
  er as Header,
  gr as PageTemplate,
  rr as SkipNav
};
