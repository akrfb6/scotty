(() => {
    "use strict";
    var e, v = {},
        h = {};

    function t(e) {
        var n = h[e];
        if (void 0 !== n) return n.exports;
        var r = h[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return v[e].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    t.m = v, e = [], t.O = (n, r, f, o) => {
        if (!r) {
            var a = 1 / 0;
            for (i = 0; i < e.length; i++) {
                for (var [r, f, o] = e[i], s = !0, d = 0; d < r.length; d++)(!1 & o || a >= o) && Object.keys(t.O).every(b => t.O[b](r[d])) ? r.splice(d--, 1) : (s = !1, o < a && (a = o));
                if (s) {
                    e.splice(i--, 1);
                    var l = f();
                    void 0 !== l && (n = l)
                }
            }
            return n
        }
        o = o || 0;
        for (var i = e.length; i > 0 && e[i - 1][2] > o; i--) e[i] = e[i - 1];
        e[i] = [r, f, o]
    }, t.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return t.d(n, {
            a: n
        }), n
    }, t.d = (e, n) => {
        for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: n[r]
        })
    }, t.f = {}, t.e = e => Promise.all(Object.keys(t.f).reduce((n, r) => (t.f[r](e, n), n), [])), t.u = e => e + "." + {
        190: "aa056db2fc7aeafc",
        293: "5917bee2a766b8c0",
        301: "93e148b641126ea6",
        509: "62452c67b7210af6",
        959: "0bd97403c3b013f6"
    }[e] + ".js", t.miniCssF = e => {}, t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), (() => {
        var e = {},
            n = "app-scottytheais:";
        t.l = (r, f, o, i) => {
            if (e[r]) e[r].push(f);
            else {
                var a, s;
                if (void 0 !== o)
                    for (var d = document.getElementsByTagName("script"), l = 0; l < d.length; l++) {
                        var u = d[l];
                        if (u.getAttribute("src") == r || u.getAttribute("data-webpack") == n + o) {
                            a = u;
                            break
                        }
                    }
                a || (s = !0, (a = document.createElement("script")).type = "module", a.charset = "utf-8", a.timeout = 120, t.nc && a.setAttribute("nonce", t.nc), a.setAttribute("data-webpack", n + o), a.src = t.tu(r)), e[r] = [f];
                var c = (g, b) => {
                        a.onerror = a.onload = null, clearTimeout(p);
                        var m = e[r];
                        if (delete e[r], a.parentNode && a.parentNode.removeChild(a), m && m.forEach(_ => _(b)), g) return g(b)
                    },
                    p = setTimeout(c.bind(null, void 0, {
                        type: "timeout",
                        target: a
                    }), 12e4);
                a.onerror = c.bind(null, a.onerror), a.onload = c.bind(null, a.onload), s && document.head.appendChild(a)
            }
        }
    })(), t.r = e => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e;
        t.tt = () => (void 0 === e && (e = {
            createScriptURL: n => n
        }, typeof trustedTypes < "u" && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("angular#bundler", e))), e)
    })(), t.tu = e => t.tt().createScriptURL(e), t.p = "", (() => {
        var e = {
            666: 0
        };
        t.f.j = (f, o) => {
            var i = t.o(e, f) ? e[f] : void 0;
            if (0 !== i)
                if (i) o.push(i[2]);
                else if (666 != f) {
                var a = new Promise((u, c) => i = e[f] = [u, c]);
                o.push(i[2] = a);
                var s = t.p + t.u(f),
                    d = new Error;
                t.l(s, u => {
                    if (t.o(e, f) && (0 !== (i = e[f]) && (e[f] = void 0), i)) {
                        var c = u && ("load" === u.type ? "missing" : u.type),
                            p = u && u.target && u.target.src;
                        d.message = "Loading chunk " + f + " failed.\n(" + c + ": " + p + ")", d.name = "ChunkLoadError", d.type = c, d.request = p, i[1](d)
                    }
                }, "chunk-" + f, f)
            } else e[f] = 0
        }, t.O.j = f => 0 === e[f];
        var n = (f, o) => {
                var d, l, [i, a, s] = o,
                    u = 0;
                if (i.some(p => 0 !== e[p])) {
                    for (d in a) t.o(a, d) && (t.m[d] = a[d]);
                    if (s) var c = s(t)
                }
                for (f && f(o); u < i.length; u++) t.o(e, l = i[u]) && e[l] && e[l][0](), e[l] = 0;
                return t.O(c)
            },
            r = self.webpackChunkapp_scottytheais = self.webpackChunkapp_scottytheais || [];
        r.forEach(n.bind(null, 0)), r.push = n.bind(null, r.push.bind(r))
    })()
})();