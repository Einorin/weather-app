(() => {
  "use strict";
  var e = {
      426: (e, n, t) => {
        t.d(n, { Z: () => p });
        var o = t(81),
          r = t.n(o),
          i = t(645),
          c = t.n(i),
          a = t(667),
          s = t.n(a),
          u = new URL(t(206), t.b),
          l = c()(r()),
          d = s()(u);
        l.push([
          e.id,
          `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody{\n  height: calc(100vh - 48px);\n}\n\nul {\n  display: flex;\n  height: 48px;\n  width: 100vw;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 12px 0 12px;\n  background: url(${d});\n}\n\n.logo,\n.search,\nul li a {\n  list-style: none;\n  text-decoration: none;\n  color: inherit;\n}\n.search{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.logo {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #FFF;\n  text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18\n\n}\n#search {\n  width: 8rem;\n}\nbody {\n  background: url(${d});\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n.wholeBody{\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 2.8fr;\n}\n\n\n.left{\n  display: grid;\n  gap: 2rem;\n  padding: 2rem;\n  grid-template-rows: 1fr 1fr;\n}\n\n\n.tempC, .tempF{\n  margin: 0 2rem 0 0;\n  color: white;\n}\n\n.weatherIcon{\n  width: 100px;\n  height: 100px;\n  /* background: url(./images/cloudWhite.svg); */\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.weatherCondition{\n  font-size: 2rem;\n  font-weight: 800;\n  color: #FFF;\n  \n}\n\n.country, .city{\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: white;\n}\n\n.mainContent{\n  display: grid;\n  /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */\n  /* grid-template-rows: 1fr 1fr 1fr; */\n  gap: 12px;\n  align-items: center;\n  padding: 8px;\n}\n\n.leftBot{\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  font-size: 1.5rem;\n}\n\n#currC, #currF, #feelsF, #feelsC{\n  font-size: 3.5rem;\n}\n\n.error{\n  visibility: hidden;\n  color: darkred;\n  font-weight: 800;\n  font-size: 2rem;\n  margin: 8px;\n}\n\n\n/* @media screen and (max-width: 1200px) {\n  body {\n    background-size: auto;\n  }\n} */\n`,
          "",
        ]);
        const p = l;
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
            (n.i = function (e, t, o, r, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var c = {};
              if (o)
                for (var a = 0; a < this.length; a++) {
                  var s = this[a][0];
                  null != s && (c[s] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
                (o && c[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  t &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = t))
                      : (l[2] = t)),
                  r &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = r))
                      : (l[4] = "".concat(r))),
                  n.push(l));
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
          for (var i = {}, c = [], a = 0; a < e.length; a++) {
            var s = e[a],
              u = o.base ? s[0] + o.base : s[0],
              l = i[u] || 0,
              d = "".concat(u, " ").concat(l);
            i[u] = l + 1;
            var p = t(d),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) n[p].references++, n[p].updater(f);
            else {
              var m = r(f, o);
              (o.byIndex = a),
                n.splice(a, 0, { identifier: d, updater: m, references: 1 });
            }
            c.push(d);
          }
          return c;
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
          var i = o((e = e || []), (r = r || {}));
          return function (e) {
            e = e || [];
            for (var c = 0; c < i.length; c++) {
              var a = t(i[c]);
              n[a].references--;
            }
            for (var s = o(e, r), u = 0; u < i.length; u++) {
              var l = t(i[u]);
              0 === n[l].references && (n[l].updater(), n.splice(l, 1));
            }
            i = s;
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
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
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
    var i = (n[o] = { id: o, exports: {} });
    return e[o](i, i.exports, t), i.exports;
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
        i = t(569),
        c = t.n(i),
        a = t(565),
        s = t.n(a),
        u = t(216),
        l = t.n(u),
        d = t(589),
        p = t.n(d),
        f = t(426),
        m = {};
      (m.styleTagTransform = p()),
        (m.setAttributes = s()),
        (m.insert = c().bind(null, "head")),
        (m.domAPI = r()),
        (m.insertStyleElement = l()),
        n()(f.Z, m),
        f.Z && f.Z.locals && f.Z.locals;
      const g = t.p + "b3f25088dad8a8dc336f.svg",
        y = t.p + "1239cbd1467b77ca1fb8.svg",
        h = t.p + "1d265467bb1e07e03352.svg",
        b = t.p + "7fc799939683bfc66890.svg",
        v = t.p + "3b9b973ade3aee403440.svg";
      function x(e) {
        return (
          "https://api.weatherapi.com/v1/current.json?key=e2952967c6f348b5ae622932230908&q=" +
          e +
          "&aqi=no"
        );
      }
      const w = document.querySelector(".weatherIcon");
      let F = "manila";
      const C = document.querySelector(".error");
      async function k(e) {
        try {
          const n = await fetch(e, { mode: "cors" });
          if (!n.ok) throw new Error("network response was not ok");
          const t = await n.json(),
            o = t.current.condition.text,
            r = t.location.country,
            i = t.location.name,
            c = t.current.temp_c,
            a = t.current.feelslike_c;
          return (function (e, n, t, o, r, i, c) {
            return {
              condition: e,
              location: n,
              cityLoc: t,
              tempC: o,
              feelsLIkeC: r,
              tempF: i,
              feelsLikeF: c,
            };
          })(o, r, i, c, a, t.current.temp_f, t.current.feelslike_f);
        } catch (e) {
          console.error("Error", e);
        }
      }
      k(x(F)).then((e) => {
        e
          ? ((document.querySelector(".weatherCondition").textContent =
              e.condition),
            e.condition.includes("cloud") || e.condition.includes("Cloud")
              ? (w.style.backgroundImage = `url(${g})`)
              : e.condition.includes("sun") ||
                e.condition.includes("Sun") ||
                e.condition.includes("hot")
              ? (w.style.backgroundImage = `url(${b})`)
              : e.condition.includes("rain") || e.condition.includes("Rain")
              ? (w.style.backgroundImage = `url(${y})`)
              : e.condition.includes("snow") || e.condition.includes("Snow")
              ? (w.style.backgroundImage = `url(${h})`)
              : "Mist" === e.condition || "Fog" === e.condition
              ? (w.style.backgroundImage = `url(${v})`)
              : (w.style.backgroundImage = `url(${g})`),
            (document.querySelector(".country").textContent = e.location),
            (document.querySelector(".city").textContent = e.cityLoc),
            (document.querySelector("#currC").textContent = e.tempC),
            (document.querySelector("#FeelsC").textContent = e.feelsLIkeC),
            (document.querySelector("#currF").textContent = e.tempF),
            (document.querySelector("#FeelsF").textContent = e.feelsLikeF))
          : ((C.style.visibility = "visible"),
            setTimeout(() => {
              C.style.visibility = "hidden";
            }, 2e3));
      }),
        document
          .querySelector("button")
          .addEventListener("click", async (e) => {
            e.preventDefault();
            const n = document.querySelector("#search").value;
            F = n;
            const t = x(F);
            try {
              const e = await k(t);
              e
                ? ((document.querySelector(".weatherCondition").textContent =
                    e.condition),
                  e.condition.includes("cloud") || e.condition.includes("Cloud")
                    ? (w.style.backgroundImage = `url(${g})`)
                    : e.condition.includes("sun") ||
                      e.condition.includes("Sun") ||
                      e.condition.includes("hot")
                    ? (w.style.backgroundImage = `url(${b})`)
                    : e.condition.includes("rain") ||
                      e.condition.includes("Rain")
                    ? (w.style.backgroundImage = `url(${y})`)
                    : e.condition.includes("snow") ||
                      e.condition.includes("Snow")
                    ? (w.style.backgroundImage = `url(${h})`)
                    : "Mist" === e.condition || "Fog" === e.condition
                    ? (w.style.backgroundImage = `url(${v})`)
                    : (w.style.backgroundImage = `url(${g})`),
                  (document.querySelector(".country").textContent = e.location),
                  (document.querySelector(".city").textContent = e.cityLoc),
                  (document.querySelector("#currC").textContent = e.tempC),
                  (document.querySelector("#FeelsC").textContent =
                    e.feelsLIkeC),
                  (document.querySelector("#currF").textContent = e.tempF),
                  (document.querySelector("#FeelsF").textContent =
                    e.feelsLikeF))
                : ((C.style.visibility = "visible"),
                  setTimeout(() => {
                    C.style.visibility = "hidden";
                  }, 2e3));
            } catch (e) {
              (C.style.visibility = "visible"),
                setTimeout(() => {
                  C.style.visibility = "hidden";
                }, 3e3);
            }
          });
    })();
})();
