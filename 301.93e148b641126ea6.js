"use strict";
(self.webpackChunkapp_scottytheais = self.webpackChunkapp_scottytheais || []).push([
    [301], {
        9111: (Oe, H, j) => {
            j.d(H, {
                ConfigCtrl: () => $,
                zv: () => v,
                uA: () => fe,
                ExplorerCtrl: () => Ne,
                jb: () => $e,
                OptionsCtrl: () => L,
                AV: () => ne,
                ThemeCtrl: () => ze,
                ToastCtrl: () => He
            });
            var W = j(5861);
            Symbol();
            const x = Symbol(),
                Y = Object.getPrototypeOf,
                q = new WeakMap,
                ue = (e, t = !0) => {
                    q.set(e, t)
                },
                se = e => "object" == typeof e && null !== e,
                U = new WeakMap,
                B = new WeakSet,
                [je] = ((e = Object.is, t = ((r, f) => new Proxy(r, f)), s = (r => se(r) && !B.has(r) && (Array.isArray(r) || !(Symbol.iterator in r)) && !(r instanceof WeakMap) && !(r instanceof WeakSet) && !(r instanceof Error) && !(r instanceof Number) && !(r instanceof Date) && !(r instanceof String) && !(r instanceof RegExp) && !(r instanceof ArrayBuffer)), n = (r => {
                    switch (r.status) {
                        case "fulfilled":
                            return r.value;
                        case "rejected":
                            throw r.reason;
                        default:
                            throw r
                    }
                }), a = new WeakMap, o = ((r, f, b = n) => {
                    const p = a.get(r);
                    if (p ? .[0] === f) return p[1];
                    const m = Array.isArray(r) ? [] : Object.create(Object.getPrototypeOf(r));
                    return ue(m, !0), a.set(r, [f, m]), Reflect.ownKeys(r).forEach(w => {
                        if (Object.getOwnPropertyDescriptor(m, w)) return;
                        const g = Reflect.get(r, w),
                            C = {
                                value: g,
                                enumerable: !0,
                                configurable: !0
                            };
                        if (B.has(g)) ue(g, !1);
                        else if (g instanceof Promise) delete C.value, C.get = () => b(g);
                        else if (U.has(g)) {
                            const [O, le] = U.get(g);
                            C.value = o(O, le(), b)
                        }
                        Object.defineProperty(m, w, C)
                    }), Object.preventExtensions(m)
                }), i = new WeakMap, l = [1, 1], h = (r => {
                    if (!se(r)) throw new Error("object required");
                    const f = i.get(r);
                    if (f) return f;
                    let b = l[0];
                    const p = new Set,
                        m = (u, d = ++l[0]) => {
                            b !== d && (b = d, p.forEach(c => c(u, d)))
                        };
                    let w = l[1];
                    const C = u => (d, c) => {
                            const E = [...d];
                            E[1] = [u, ...E[1]], m(E, c)
                        },
                        O = new Map,
                        ve = u => {
                            var d;
                            const c = O.get(u);
                            c && (O.delete(u), null == (d = c[1]) || d.call(c))
                        },
                        ce = Array.isArray(r) ? [] : Object.create(Object.getPrototypeOf(r)),
                        Q = t(ce, {
                            deleteProperty(u, d) {
                                const c = Reflect.get(u, d);
                                ve(d);
                                const E = Reflect.deleteProperty(u, d);
                                return E && m(["delete", [d], c]), E
                            },
                            set(u, d, c, E) {
                                const K = Reflect.has(u, d),
                                    z = Reflect.get(u, d, E);
                                if (K && (e(z, c) || i.has(c) && e(z, i.get(c)))) return !0;
                                ve(d), se(c) && (c = (e => (e => e && (q.has(e) ? q.get(e) : Y(e) === Object.prototype || Y(e) === Array.prototype))(e) && e[x] || null)(c) || c);
                                let X = c;
                                if (c instanceof Promise) c.then(S => {
                                    c.status = "fulfilled", c.value = S, m(["resolve", [d], S])
                                }).catch(S => {
                                    c.status = "rejected", c.reason = S, m(["reject", [d], S])
                                });
                                else {
                                    !U.has(c) && s(c) && (X = h(c));
                                    const S = !B.has(X) && U.get(X);
                                    S && ((u, d) => {
                                        if (O.has(u)) throw new Error("prop listener already exists");
                                        if (p.size) {
                                            const c = d[3](C(u));
                                            O.set(u, [d, c])
                                        } else O.set(u, [d])
                                    })(d, S)
                                }
                                return Reflect.set(u, d, X, E), m(["set", [d], c, z]), !0
                            }
                        });
                    return i.set(r, Q), U.set(Q, [ce, (u = ++l[1]) => (w !== u && !p.size && (w = u, O.forEach(([d]) => {
                        const c = d[1](u);
                        c > b && (b = c)
                    })), b), o, u => (p.add(u), 1 === p.size && O.forEach(([c, E], K) => {
                        if (E) throw new Error("remove already exists");
                        const z = c[3](C(K));
                        O.set(K, [c, z])
                    }), () => {
                        p.delete(u), 0 === p.size && O.forEach(([c, E], K) => {
                            E && (E(), O.set(K, [c]))
                        })
                    })]), Reflect.ownKeys(r).forEach(u => {
                        const d = Object.getOwnPropertyDescriptor(r, u);
                        "value" in d && (Q[u] = r[u], delete d.value, delete d.writable), Object.defineProperty(ce, u, d)
                    }), Q
                })) => [h, U, B, e, t, s, n, a, o, i, l])();

            function _(e = {}) {
                return je(e)
            }

            function k(e, t, s) {
                const n = U.get(e);
                let a;
                n || console.warn("Please use proxy object");
                const o = [];
                let l = !1;
                const r = (0, n[3])(f => {
                    o.push(f), s ? t(o.splice(0)) : a || (a = Promise.resolve().then(() => {
                        a = void 0, l && t(o.splice(0))
                    }))
                });
                return l = !0, () => {
                    l = !1, r()
                }
            }
            const y = _({
                    history: ["ConnectWallet"],
                    view: "ConnectWallet",
                    data: void 0
                }),
                ne = {
                    state: y,
                    subscribe: e => k(y, () => e(y)),
                    push(e, t) {
                        e !== y.view && (y.view = e, t && (y.data = t), y.history.push(e))
                    },
                    reset(e) {
                        y.view = e, y.history = [e]
                    },
                    replace(e) {
                        y.history.length > 1 && (y.history[y.history.length - 1] = e, y.view = e)
                    },
                    goBack() {
                        if (y.history.length > 1) {
                            y.history.pop();
                            const [e] = y.history.slice(-1);
                            y.view = e
                        }
                    },
                    setData(e) {
                        y.data = e
                    }
                },
                v = {
                    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
                    WCM_VERSION: "WCM_VERSION",
                    RECOMMENDED_WALLET_AMOUNT: 9,
                    isMobile: () => typeof window < "u" && !(!window.matchMedia("(pointer:coarse)").matches && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),
                    isAndroid: () => v.isMobile() && navigator.userAgent.toLowerCase().includes("android"),
                    isIos() {
                        const e = navigator.userAgent.toLowerCase();
                        return v.isMobile() && (e.includes("iphone") || e.includes("ipad"))
                    },
                    isHttpUrl: e => e.startsWith("http://") || e.startsWith("https://"),
                    isArray: e => Array.isArray(e) && e.length > 0,
                    formatNativeUrl(e, t, s) {
                        if (v.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
                        let n = e;
                        return n.includes("://") || (n = e.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, s), `${n}wc?uri=${encodeURIComponent(t)}`
                    },
                    formatUniversalUrl(e, t, s) {
                        if (!v.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
                        let n = e;
                        return n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, s), `${n}wc?uri=${encodeURIComponent(t)}`
                    },
                    wait: e => (0, W.Z)(function*() {
                        return new Promise(t => {
                            setTimeout(t, e)
                        })
                    })(),
                    openHref(e, t) {
                        window.open(e, t, "noreferrer noopener")
                    },
                    setWalletConnectDeepLink(e, t) {
                        try {
                            localStorage.setItem(v.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                                href: e,
                                name: t
                            }))
                        } catch {
                            console.info("Unable to set WalletConnect deep link")
                        }
                    },
                    setWalletConnectAndroidDeepLink(e) {
                        try {
                            const [t] = e.split("?");
                            localStorage.setItem(v.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                                href: t,
                                name: "Android"
                            }))
                        } catch {
                            console.info("Unable to set WalletConnect android deep link")
                        }
                    },
                    removeWalletConnectDeepLink() {
                        try {
                            localStorage.removeItem(v.WALLETCONNECT_DEEPLINK_CHOICE)
                        } catch {
                            console.info("Unable to remove WalletConnect deep link")
                        }
                    },
                    setModalVersionInStorage() {
                        try {
                            typeof localStorage < "u" && localStorage.setItem(v.WCM_VERSION, "2.6.2")
                        } catch {
                            console.info("Unable to set Web3Modal version in storage")
                        }
                    },
                    getWalletRouterData() {
                        var e;
                        const t = null == (e = ne.state.data) ? void 0 : e.Wallet;
                        if (!t) throw new Error('Missing "Wallet" view data');
                        return t
                    }
                },
                I = _({
                    enabled: typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")),
                    userSessionId: "",
                    events: [],
                    connectedWalletId: void 0
                }),
                fe = {
                    state: I,
                    subscribe: e => k(I.events, () => e(function Ae(e, t) {
                        const s = U.get(e);
                        s || console.warn("Please use proxy object");
                        const [n, a, o] = s;
                        return o(n, a(), t)
                    }(I.events[I.events.length - 1]))),
                    initialize() {
                        I.enabled && typeof(null == crypto ? void 0 : crypto.randomUUID) < "u" && (I.userSessionId = crypto.randomUUID())
                    },
                    setConnectedWalletId(e) {
                        I.connectedWalletId = e
                    },
                    click(e) {
                        if (I.enabled) {
                            const t = {
                                type: "CLICK",
                                name: e.name,
                                userSessionId: I.userSessionId,
                                timestamp: Date.now(),
                                data: e
                            };
                            I.events.push(t)
                        }
                    },
                    track(e) {
                        if (I.enabled) {
                            const t = {
                                type: "TRACK",
                                name: e.name,
                                userSessionId: I.userSessionId,
                                timestamp: Date.now(),
                                data: e
                            };
                            I.events.push(t)
                        }
                    },
                    view(e) {
                        if (I.enabled) {
                            const t = {
                                type: "VIEW",
                                name: e.name,
                                userSessionId: I.userSessionId,
                                timestamp: Date.now(),
                                data: e
                            };
                            I.events.push(t)
                        }
                    }
                },
                D = _({
                    chains: void 0,
                    walletConnectUri: void 0,
                    isAuth: !1,
                    isCustomDesktop: !1,
                    isCustomMobile: !1,
                    isDataLoaded: !1,
                    isUiLoaded: !1
                }),
                L = {
                    state: D,
                    subscribe: e => k(D, () => e(D)),
                    setChains(e) {
                        D.chains = e
                    },
                    setWalletConnectUri(e) {
                        D.walletConnectUri = e
                    },
                    setIsCustomDesktop(e) {
                        D.isCustomDesktop = e
                    },
                    setIsCustomMobile(e) {
                        D.isCustomMobile = e
                    },
                    setIsDataLoaded(e) {
                        D.isDataLoaded = e
                    },
                    setIsUiLoaded(e) {
                        D.isUiLoaded = e
                    },
                    setIsAuth(e) {
                        D.isAuth = e
                    }
                },
                G = _({
                    projectId: "",
                    mobileWallets: void 0,
                    desktopWallets: void 0,
                    walletImages: void 0,
                    chains: void 0,
                    enableAuthMode: !1,
                    enableExplorer: !0,
                    explorerExcludedWalletIds: void 0,
                    explorerRecommendedWalletIds: void 0,
                    termsOfServiceUrl: void 0,
                    privacyPolicyUrl: void 0
                }),
                $ = {
                    state: G,
                    subscribe: e => k(G, () => e(G)),
                    setConfig(e) {
                        var t, s;
                        fe.initialize(), L.setChains(e.chains), L.setIsAuth(!!e.enableAuthMode), L.setIsCustomMobile(!(null == (t = e.mobileWallets) || !t.length)), L.setIsCustomDesktop(!(null == (s = e.desktopWallets) || !s.length)), v.setModalVersionInStorage(), Object.assign(G, e)
                    }
                };
            var De = Object.defineProperty,
                pe = Object.getOwnPropertySymbols,
                Me = Object.prototype.hasOwnProperty,
                Ue = Object.prototype.propertyIsEnumerable,
                he = (e, t, s) => t in e ? De(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s,
                _e = (e, t) => {
                    for (var s in t || (t = {})) Me.call(t, s) && he(e, s, t[s]);
                    if (pe)
                        for (var s of pe(t)) Ue.call(t, s) && he(e, s, t[s]);
                    return e
                };
            const re = "https://explorer-api.walletconnect.com",
                oe = "wcm",
                ie = "js-2.6.2";

            function J(e, t) {
                return ae.apply(this, arguments)
            }

            function ae() {
                return (ae = (0, W.Z)(function*(e, t) {
                    const s = _e({
                            sdkType: oe,
                            sdkVersion: ie
                        }, t),
                        n = new URL(e, re);
                    return n.searchParams.append("projectId", $.state.projectId), Object.entries(s).forEach(([a, o]) => {
                        o && n.searchParams.append(a, String(o))
                    }), (yield fetch(n)).json()
                })).apply(this, arguments)
            }
            const R_getDesktopListings = e => (0, W.Z)(function*() {
                    return J("/w3m/v1/getDesktopListings", e)
                })(),
                R_getMobileListings = e => (0, W.Z)(function*() {
                    return J("/w3m/v1/getMobileListings", e)
                })(),
                R_getAllListings = e => (0, W.Z)(function*() {
                    return J("/w3m/v1/getAllListings", e)
                })(),
                R_getWalletImageUrl = e => `${re}/w3m/v1/getWalletImage/${e}?projectId=${$.state.projectId}&sdkType=${oe}&sdkVersion=${ie}`,
                R_getAssetImageUrl = e => `${re}/w3m/v1/getAssetImage/${e}?projectId=${$.state.projectId}&sdkType=${oe}&sdkVersion=${ie}`;
            var Se = Object.defineProperty,
                ge = Object.getOwnPropertySymbols,
                ke = Object.prototype.hasOwnProperty,
                Re = Object.prototype.propertyIsEnumerable,
                me = (e, t, s) => t in e ? Se(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s;
            const ye = v.isMobile(),
                M = _({
                    wallets: {
                        listings: [],
                        total: 0,
                        page: 1
                    },
                    search: {
                        listings: [],
                        total: 0,
                        page: 1
                    },
                    recomendedWallets: []
                }),
                Ne = {
                    state: M,
                    getRecomendedWallets: () => (0, W.Z)(function*() {
                        const {
                            explorerRecommendedWalletIds: e,
                            explorerExcludedWalletIds: t
                        } = $.state;
                        if ("NONE" === e || "ALL" === t && !e) return M.recomendedWallets;
                        if (v.isArray(e)) {
                            const s = {
                                    recommendedIds: e.join(",")
                                },
                                {
                                    listings: n
                                } = yield R_getAllListings(s), a = Object.values(n);
                            a.sort((o, i) => e.indexOf(o.id) - e.indexOf(i.id)), M.recomendedWallets = a
                        } else {
                            const {
                                chains: s,
                                isAuth: n
                            } = L.state, a = s ? .join(","), o = v.isArray(t), i = {
                                page: 1,
                                sdks: n ? "auth_v1" : void 0,
                                entries: v.RECOMMENDED_WALLET_AMOUNT,
                                chains: a,
                                version: 2,
                                excludedIds: o ? t.join(",") : void 0
                            }, {
                                listings: l
                            } = ye ? yield R_getMobileListings(i): yield R_getDesktopListings(i);
                            M.recomendedWallets = Object.values(l)
                        }
                        return M.recomendedWallets
                    })(),
                    getWallets: e => (0, W.Z)(function*() {
                        const t = ((e, t) => {
                                for (var s in t || (t = {})) ke.call(t, s) && me(e, s, t[s]);
                                if (ge)
                                    for (var s of ge(t)) Re.call(t, s) && me(e, s, t[s]);
                                return e
                            })({}, e),
                            {
                                explorerRecommendedWalletIds: s,
                                explorerExcludedWalletIds: n
                            } = $.state,
                            {
                                recomendedWallets: a
                            } = M;
                        if ("ALL" === n) return M.wallets;
                        a.length ? t.excludedIds = a.map(b => b.id).join(",") : v.isArray(s) && (t.excludedIds = s.join(",")), v.isArray(n) && (t.excludedIds = [t.excludedIds, n].filter(Boolean).join(",")), L.state.isAuth && (t.sdks = "auth_v1");
                        const {
                            page: o,
                            search: i
                        } = e, {
                            listings: l,
                            total: h
                        } = ye ? yield R_getMobileListings(t): yield R_getDesktopListings(t), r = Object.values(l), f = i ? "search" : "wallets";
                        return M[f] = {
                            listings: [...M[f].listings, ...r],
                            total: h,
                            page: o ? ? 1
                        }, {
                            listings: r,
                            total: h
                        }
                    })(),
                    getWalletImageUrl: e => R_getWalletImageUrl(e),
                    getAssetImageUrl: e => R_getAssetImageUrl(e),
                    resetSearch() {
                        M.search = {
                            listings: [],
                            total: 0,
                            page: 1
                        }
                    }
                },
                V = _({
                    open: !1
                }),
                $e = {
                    state: V,
                    subscribe: e => k(V, () => e(V)),
                    open: e => (0, W.Z)(function*() {
                        return new Promise(t => {
                            const {
                                isUiLoaded: s,
                                isDataLoaded: n
                            } = L.state;
                            if (v.removeWalletConnectDeepLink(), L.setWalletConnectUri(e ? .uri), L.setChains(e ? .chains), ne.reset("ConnectWallet"), s && n) V.open = !0, t();
                            else {
                                const a = setInterval(() => {
                                    const o = L.state;
                                    o.isUiLoaded && o.isDataLoaded && (clearInterval(a), V.open = !0, t())
                                }, 200)
                            }
                        })
                    })(),
                    close() {
                        V.open = !1
                    }
                };
            var Ve = Object.defineProperty,
                be = Object.getOwnPropertySymbols,
                Ke = Object.prototype.hasOwnProperty,
                xe = Object.prototype.propertyIsEnumerable,
                we = (e, t, s) => t in e ? Ve(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s;
            const Z = _({
                    themeMode: function Ze() {
                        return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches
                    }() ? "dark" : "light"
                }),
                ze = {
                    state: Z,
                    subscribe: e => k(Z, () => e(Z)),
                    setThemeConfig(e) {
                        const {
                            themeMode: t,
                            themeVariables: s
                        } = e;
                        t && (Z.themeMode = t), s && (Z.themeVariables = ((e, t) => {
                            for (var s in t || (t = {})) Ke.call(t, s) && we(e, s, t[s]);
                            if (be)
                                for (var s of be(t)) xe.call(t, s) && we(e, s, t[s]);
                            return e
                        })({}, s))
                    }
                },
                T = _({
                    open: !1,
                    message: "",
                    variant: "success"
                }),
                He = {
                    state: T,
                    subscribe: e => k(T, () => e(T)),
                    openToast(e, t) {
                        T.open = !0, T.message = e, T.variant = t
                    },
                    closeToast() {
                        T.open = !1
                    }
                }
        },
        3301: (Oe, H, j) => {
            j.r(H), j.d(H, {
                WalletConnectModal: () => x
            });
            var W = j(5861),
                A = j(9111);
            class x {
                constructor(P) {
                    this.openModal = A.jb.open, this.closeModal = A.jb.close, this.subscribeModal = A.jb.subscribe, this.setTheme = A.ThemeCtrl.setThemeConfig, A.ThemeCtrl.setThemeConfig(P), A.ConfigCtrl.setConfig(P), this.initUi()
                }
                initUi() {
                    return (0, W.Z)(function*() {
                        if (typeof window < "u") {
                            yield j.e(293).then(j.bind(j, 3293));
                            const P = document.createElement("wcm-modal");
                            document.body.insertAdjacentElement("beforeend", P), A.OptionsCtrl.setIsUiLoaded(!0)
                        }
                    })()
                }
            }
        }
    }
]);