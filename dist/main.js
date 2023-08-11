(() => {
  "use strict";
  var e = {
      426: (e, n, t) => {
        t.d(n, { Z: () => d });
        var o = t(81),
          r = t.n(o),
          c = t(645),
          a = t.n(c),
          i = t(667),
          s = t.n(i),
          l = new URL(t(206), t.b),
          u = a()(r()),
          p = s()(l);
        u.push([
          e.id,
          `*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n\nul{\n  display: flex;\n  height: 48px;\n  width: 100vw;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 12px 0 12px;\n  background: url(${p});\n}\n\n.logo, .search,\nul li a{\n  list-style: none;\n  text-decoration: none;\n  color: inherit;\n}\n\n.logo{\n  font-size: 2rem;\n  font-weight: 800;\n}\n#search{\n  width: 8rem;\n}\nbody{\n  background: url(${p});\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n@media screen and (max-width: 800px){\n  body{\n    background-size: auto;\n  }\n}`,
          "",
        ]);
        const d = u;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  o = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  o &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {",
                    )),
                  (t += e(n)),
                  o && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, o, r, c) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (o)
                for (var i = 0; i < this.length; i++) {
                  var s = this[i][0];
                  null != s && (a[s] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l]);
                (o && a[u[0]]) ||
                  (void 0 !== c &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = c)),
                  t &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = t))
                      : (u[2] = t)),
                  r &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = r))
                      : (u[4] = "".concat(r))),
                  n.push(u));
              }
            }),
            n
          );
        };
      },
      667: (e) => {
        e.exports = function (e, n) {
          return (
            n || (n = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                n.hash && (e += n.hash),
                /["'() \t\n]|(%20)/.test(e) || n.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"',
                    )
                  : e)
              : e
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, o = 0; o < n.length; o++)
            if (n[o].identifier === e) {
              t = o;
              break;
            }
          return t;
        }
        function o(e, o) {
          for (var c = {}, a = [], i = 0; i < e.length; i++) {
            var s = e[i],
              l = o.base ? s[0] + o.base : s[0],
              u = c[l] || 0,
              p = "".concat(l, " ").concat(u);
            c[l] = u + 1;
            var d = t(p),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== d) n[d].references++, n[d].updater(f);
            else {
              var h = r(f, o);
              (o.byIndex = i),
                n.splice(i, 0, { identifier: p, updater: h, references: 1 });
            }
            a.push(p);
          }
          return a;
        }
        function r(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, r) {
          var c = o((e = e || []), (r = r || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < c.length; a++) {
              var i = t(c[a]);
              n[i].references--;
            }
            for (var s = o(e, r), l = 0; l < c.length; l++) {
              var u = t(c[l]);
              0 === n[u].references && (n[u].updater(), n.splice(u, 1));
            }
            c = s;
          };
        };
      },
      569: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var o = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          o.appendChild(t);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var o = "";
                t.supports && (o += "@supports (".concat(t.supports, ") {")),
                  t.media && (o += "@media ".concat(t.media, " {"));
                var r = void 0 !== t.layer;
                r &&
                  (o += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (o += t.css),
                  r && (o += "}"),
                  t.media && (o += "}"),
                  t.supports && (o += "}");
                var c = t.sourceMap;
                c &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(c)))),
                      " */",
                    )),
                  n.styleTagTransform(o, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
      206: (e, n, t) => {
        e.exports = t.p + "9b585b977adb7e68ab58.jpg";
      },
    },
    n = {};
  function t(o) {
    var r = n[o];
    if (void 0 !== r) return r.exports;
    var c = (n[o] = { id: o, exports: {} });
    return e[o](c, c.exports, t), c.exports;
  }
  (t.m = e),
    (t.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return t.d(n, { a: n }), n;
    }),
    (t.d = (e, n) => {
      for (var o in n)
        t.o(n, o) &&
          !t.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: n[o] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e;
      t.g.importScripts && (e = t.g.location + "");
      var n = t.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var o = n.getElementsByTagName("script");
        if (o.length) for (var r = o.length - 1; r > -1 && !e; ) e = o[r--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = e);
    })(),
    (t.b = document.baseURI || self.location.href),
    (t.nc = void 0),
    (() => {
      var e = t(379),
        n = t.n(e),
        o = t(795),
        r = t.n(o),
        c = t(569),
        a = t.n(c),
        i = t(565),
        s = t.n(i),
        l = t(216),
        u = t.n(l),
        p = t(589),
        d = t.n(p),
        f = t(426),
        h = {};
      function m(e) {
        return (
          "http://api.weatherapi.com/v1/current.json?key=e2952967c6f348b5ae622932230908&q=" +
          e +
          "&aqi=no"
        );
      }
      (h.styleTagTransform = d()),
        (h.setAttributes = s()),
        (h.insert = a().bind(null, "head")),
        (h.domAPI = r()),
        (h.insertStyleElement = u()),
        n()(f.Z, h),
        f.Z && f.Z.locals && f.Z.locals;
      let g = "manila";
      async function v(e) {
        try {
          const n = await fetch(e, { mode: "cors" });
          if (!n.ok) throw new Error("network response was not ok");
          const t = await n.json(),
            o = t.current.condition.text,
            r = t.location.country,
            c = t.location.name,
            a = t.current.temp_c,
            i = t.current.feelslike_c;
          return (function (e, n, t, o, r, c, a) {
            return {
              condition: e,
              location: n,
              cityLoc: t,
              tempC: o,
              feelsLIkeC: r,
              tempF: c,
              feelsLikeF: a,
            };
          })(o, r, c, a, i, t.current.temp_f, t.current.feelslike_f);
        } catch (e) {
          console.error("Error", e);
        }
      }
      v(m(g)).then((e) => {
        e
          ? (console.log(e.condition),
            console.log(e.location),
            console.log(e.cityLoc),
            console.log(e.tempC),
            console.log(e.feelsLIkeC),
            console.log(e.tempF),
            console.log(e.feelsLikeF))
          : console.log("Data does not exist");
      }),
        document
          .querySelector("button")
          .addEventListener("click", async (e) => {
            e.preventDefault();
            const n = document.querySelector("#search").value;
            g = n;
            const t = m(g);
            try {
              const e = await v(t);
              e
                ? (console.log(e.condition),
                  console.log(e.location),
                  console.log(e.cityLoc),
                  console.log(e.tempC),
                  console.log(e.feelsLIkeC),
                  console.log(e.tempF),
                  console.log(e.feelsLikeF))
                : console.log("Data does not exist");
            } catch (e) {
              console.error("Error", e);
            }
          });
    })();
})();
