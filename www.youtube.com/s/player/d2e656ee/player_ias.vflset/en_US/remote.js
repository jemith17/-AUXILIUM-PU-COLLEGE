(function(g) {
    var window = this;
    'use strict';
    var c7 = function(a) {
            g.pk(a, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ g.Xa()).toString(36));
            return a
        },
        d7 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Zga(a.D, b, c)
        },
        cqb = function(a) {
            if (a instanceof g.en) return a;
            if (typeof a.wm == "function") return a.wm(!1);
            if (g.Pa(a)) {
                var b = 0,
                    c = new g.en;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.n1;
                        if (b in a) return g.fn(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        dqb = function(a, b, c) {
            if (g.Pa(a)) g.cc(a, b, c);
            else
                for (a = cqb(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        eqb = function(a, b) {
            var c = [];
            dqb(b, function(d) {
                try {
                    var e = g.Kp.prototype.B.call(this, d, !0)
                } catch (f) {
                    if (f == "Storage: Invalid value was encountered") return;
                    throw f;
                }
                e === void 0 ? c.push(d) : g.Tla(e) && c.push(d)
            }, a);
            return c
        },
        fqb = function(a, b) {
            eqb(a, b).forEach(function(c) {
                g.Kp.prototype.remove.call(this, c)
            }, a)
        },
        gqb = function(a) {
            if (a.qa) {
                if (a.qa.locationOverrideToken) return {
                    locationOverrideToken: a.qa.locationOverrideToken
                };
                if (a.qa.latitudeE7 != null && a.qa.longitudeE7 != null) return {
                    latitudeE7: a.qa.latitudeE7,
                    longitudeE7: a.qa.longitudeE7
                }
            }
            return null
        },
        hqb = function(a, b) {
            g.Mb(a, b) || a.push(b)
        },
        iqb = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        jqb = function(a, b) {
            return g.zc(a, b)
        },
        kqb = function(a) {
            try {
                return g.Ja.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        e7 = function(a) {
            if (g.Ja.JSON) try {
                return g.Ja.JSON.parse(a)
            } catch (b) {}
            return kqb(a)
        },
        lqb = function(a) {
            if (a.Mm && typeof a.Mm == "function") return a.Mm();
            if (typeof Map !== "undefined" && a instanceof Map || typeof Set !== "undefined" && a instanceof Set) return Array.from(a.values());
            if (typeof a === "string") return a.split("");
            if (g.Pa(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return g.wc(a)
        },
        mqb = function(a) {
            if (a.Xn && typeof a.Xn == "function") return a.Xn();
            if (!a.Mm || typeof a.Mm != "function") {
                if (typeof Map !== "undefined" && a instanceof Map) return Array.from(a.keys());
                if (!(typeof Set !== "undefined" && a instanceof Set)) {
                    if (g.Pa(a) || typeof a === "string") {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return g.xc(a)
                }
            }
        },
        nqb = function(a, b) {
            if (a.forEach && typeof a.forEach == "function") a.forEach(b, void 0);
            else if (g.Pa(a) || typeof a === "string") Array.prototype.forEach.call(a, b, void 0);
            else
                for (var c = mqb(a), d = lqb(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        },
        oqb = function(a, b, c, d) {
            var e = new g.hk(null);
            a && g.ik(e, a);
            b && g.jk(e, b);
            c && g.kk(e, c);
            d && (e.B = d);
            return e
        },
        pqb = function() {
            this.j = f7();
            this.j.gk("/client_streamz/youtube/living_room/mdx/channel/opened", {
                yd: 3,
                xd: "channel_type"
            })
        },
        qqb = function(a, b) {
            a.j.lm("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        rqb = function() {
            this.j = f7();
            this.j.gk("/client_streamz/youtube/living_room/mdx/channel/closed", {
                yd: 3,
                xd: "channel_type"
            })
        },
        sqb = function(a, b) {
            a.j.lm("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        tqb = function() {
            this.j = f7();
            this.j.gk("/client_streamz/youtube/living_room/mdx/channel/message_received", {
                yd: 3,
                xd: "channel_type"
            })
        },
        uqb = function(a, b) {
            a.j.lm("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        vqb = function() {
            this.j = f7();
            this.j.gk("/client_streamz/youtube/living_room/mdx/channel/error", {
                yd: 3,
                xd: "channel_type"
            })
        },
        wqb = function(a, b) {
            a.j.lm("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        xqb = function() {
            this.j = f7();
            this.j.gk("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        yqb = function() {
            this.j = f7();
            this.j.gk("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        zqb = function(a, b) {
            return new g.jp(a, b)
        },
        g7 = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        h7 = function(a, b) {
            this.B = {};
            this.j = [];
            this.Iv = this.size = 0;
            var c = arguments.length;
            if (c > 1) {
                if (c % 2) throw Error("Uneven number of arguments");
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else if (a)
                if (a instanceof h7)
                    for (c = a.Xn(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
                else
                    for (d in a) this.set(d, a[d])
        },
        i7 = function(a) {
            if (a.size != a.j.length) {
                for (var b = 0, c = 0; b < a.j.length;) {
                    var d = a.j[b];
                    g7(a.B, d) && (a.j[c++] = d);
                    b++
                }
                a.j.length = c
            }
            if (a.size != a.j.length) {
                var e = {};
                for (c = b = 0; b < a.j.length;) d = a.j[b], g7(e, d) || (a.j[c++] = d, e[d] = 1), b++;
                a.j.length = c
            }
        },
        Dqb = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.ownerObfuscatedGaiaId = this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new h7;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
                this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.ownerObfuscatedGaiaId = a.ownerObfuscatedGaiaId || "", this.theme = a.theme || "u", Aqb(this, a.capabilities || ""), Bqb(this, a.compatibleSenderThemes || ""), Cqb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType ||
                "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        Aqb = function(a, b) {
            a.capabilities.clear();
            g.kn(b.split(","), g.Va(jqb, Eqb)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        Bqb = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.kn(b.split(","), g.Va(jqb, Fqb)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        Cqb = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        j7 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        k7 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        Gqb = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        Hqb = function(a) {
            return new j7(a)
        },
        Iqb = function(a) {
            return Array.isArray(a) ? g.Al(a, Hqb) : []
        },
        l7 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        Jqb = function(a) {
            return Array.isArray(a) ? "[" + g.Al(a, l7).join(",") + "]" : "null"
        },
        Kqb = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = Math.random() * 16 | 0;
                    return (a == "x" ? b : b & 3 | 8).toString(16)
                })
        },
        Lqb = function(a) {
            return g.Al(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        Mqb = function(a, b) {
            return g.Kb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        m7 = function(a, b) {
            return g.Kb(a, function(c) {
                return k7(c, b)
            })
        },
        Nqb = function() {
            var a = (0, g.$s)();
            a && fqb(a, a.j.wm(!0))
        },
        n7 = function() {
            var a = g.ct("yt-remote-connected-devices") || [];
            g.$b(a);
            return a
        },
        Oqb = function(a) {
            if (a.length == 0) return [];
            var b = a[0].indexOf("#"),
                c = b == -1 ? a[0] : a[0].substring(0, b);
            return g.Al(a, function(d, e) {
                return e == 0 ? d : d.substring(c.length)
            })
        },
        Pqb = function(a) {
            g.bt("yt-remote-connected-devices", a, 86400)
        },
        o7 = function() {
            if (Qqb) return Qqb;
            var a = g.ct("yt-remote-device-id");
            a || (a = Kqb(), g.bt("yt-remote-device-id", a, 31536E3));
            for (var b = n7(), c = 1, d = a; g.Mb(b, d);) c++, d = a + "#" + c;
            return Qqb = d
        },
        Rqb = function() {
            var a = n7(),
                b = o7();
            g.et() && g.bc(a, b);
            a = Oqb(a);
            if (a.length == 0) try {
                g.fs("remote_sid")
            } catch (c) {} else try {
                g.ds("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        Sqb = function() {
            return g.ct("yt-remote-session-browser-channel")
        },
        Tqb = function() {
            return g.ct("yt-remote-local-screens") || []
        },
        Uqb = function() {
            g.bt("yt-remote-lounge-token-expiration", !0, 86400)
        },
        Vqb = function(a) {
            a.length > 5 && (a = a.slice(a.length - 5));
            var b = g.Al(Tqb(), function(d) {
                    return d.loungeToken
                }),
                c = g.Al(a, function(d) {
                    return d.loungeToken
                });
            g.Bl(c, function(d) {
                return !g.Mb(b, d)
            }) && Uqb();
            g.bt("yt-remote-local-screens", a, 31536E3)
        },
        p7 = function(a) {
            a || (g.dt("yt-remote-session-screen-id"), g.dt("yt-remote-session-video-id"));
            Rqb();
            a = n7();
            g.Pb(a, o7());
            Pqb(a)
        },
        Wqb = function() {
            if (!q7) {
                var a = g.Qp();
                a && (q7 = new g.Hp(a))
            }
        },
        Xqb = function() {
            Wqb();
            return q7 ? !!q7.get("yt-remote-use-staging-server") : !1
        },
        r7 = function(a, b) {
            g.Ev[a] = !0;
            var c = g.Cv();
            c && c.publish.apply(c, arguments);
            g.Ev[a] = !1
        },
        Yqb = function() {},
        f7 = function() {
            if (!s7) {
                s7 = new g.Pe(new Yqb);
                var a = g.Qr("client_streamz_web_flush_count", -1);
                a !== -1 && (s7.C = a)
            }
            return s7
        },
        Zqb = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        $qb = function(a) {
            return !!document.currentScript && (document.currentScript.src.indexOf("?" + a) != -1 || document.currentScript.src.indexOf("&" + a) != -1)
        },
        arb = function() {
            return typeof window.__onGCastApiAvailable == "function" ? window.__onGCastApiAvailable : null
        },
        t7 = function(a) {
            a.length ? brb(a.shift(), function() {
                t7(a)
            }) : crb()
        },
        drb = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        brb = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.Pd(d, g.Kq(a));
            (document.head || document.documentElement).appendChild(d)
        },
        erb = function() {
            var a = Zqb(),
                b = [];
            if (a > 1) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        crb = function() {
            var a = arb();
            a && a(!1, "No cast extension found")
        },
        grb = function() {
            if (frb) {
                var a = 2,
                    b = arb(),
                    c = function() {
                        a--;
                        a == 0 && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                brb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", crb, c)
            }
        },
        hrb = function() {
            grb();
            var a = erb();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            t7(a)
        },
        jrb = function() {
            grb();
            var a = erb();
            a.push.apply(a, g.x(irb.map(drb)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            t7(a)
        },
        u7 = function(a, b, c) {
            g.O.call(this);
            this.K = c != null ? (0, g.Ua)(a, c) : a;
            this.cj = b;
            this.G = (0, g.Ua)(this.W4, this);
            this.j = !1;
            this.B = 0;
            this.C = this.ud = null;
            this.D = []
        },
        v7 = function(a, b, c) {
            g.O.call(this);
            this.D = c != null ? a.bind(c) : a;
            this.cj = b;
            this.C = null;
            this.j = !1;
            this.B = 0;
            this.ud = null
        },
        krb = function(a) {
            a.ud = g.Ne(function() {
                a.ud = null;
                a.j && !a.B && (a.j = !1, krb(a))
            }, a.cj);
            var b = a.C;
            a.C = null;
            a.D.apply(null, b)
        },
        w7 = function() {},
        lrb = function() {
            g.lb.call(this, "p")
        },
        mrb = function() {
            g.lb.call(this, "o")
        },
        orb = function() {
            return nrb = nrb || new g.Vc
        },
        prb = function(a) {
            g.lb.call(this, "serverreachability", a)
        },
        x7 = function(a) {
            var b = orb();
            b.dispatchEvent(new prb(b, a))
        },
        qrb = function(a) {
            g.lb.call(this, "statevent", a)
        },
        y7 = function(a) {
            var b = orb();
            b.dispatchEvent(new qrb(b, a))
        },
        rrb = function(a, b, c, d) {
            g.lb.call(this, "timingevent", a);
            this.size = b;
            this.rtt = c;
            this.retries = d
        },
        z7 = function(a, b) {
            if (typeof a !== "function") throw Error("Fn must not be null and must be a function");
            return g.Ja.setTimeout(function() {
                a()
            }, b)
        },
        A7 = function() {},
        B7 = function(a, b, c, d) {
            this.C = a;
            this.D = b;
            this.Tb = c;
            this.Ob = d || 1;
            this.yb = new g.uk(this);
            this.fb = 45E3;
            this.Ka = null;
            this.K = !1;
            this.Y = this.Ya = this.Z = this.Ra = this.Ba = this.ob = this.qa = null;
            this.ra = [];
            this.j = null;
            this.N = 0;
            this.G = this.Fa = null;
            this.Jb = -1;
            this.Ma = !1;
            this.Xa = 0;
            this.Wa = null;
            this.Kb = this.Va = this.Ab = this.Ga = !1;
            this.B = new srb
        },
        srb = function() {
            this.C = null;
            this.j = "";
            this.B = !1
        },
        urb = function(a, b, c) {
            a.Ra = 1;
            a.Z = c7(b.clone());
            a.Y = c;
            a.Ga = !0;
            trb(a, null)
        },
        trb = function(a, b) {
            a.Ba = Date.now();
            C7(a);
            a.Ya = a.Z.clone();
            d7(a.Ya, "t", a.Ob);
            a.N = 0;
            var c = a.C.Ra;
            a.B = new srb;
            a.j = vrb(a.C, c ? b : null, !a.Y);
            a.Xa > 0 && (a.Wa = new v7((0, g.Ua)(a.ZU, a, a.j), a.Xa));
            a.yb.listen(a.j, "readystatechange", a.Y4);
            b = a.Ka ? g.Fc(a.Ka) : {};
            a.Y ? (a.Fa || (a.Fa = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.Ya, a.Fa, a.Y, b)) : (a.Fa = "GET", a.j.send(a.Ya, a.Fa, null, b));
            x7(1)
        },
        xrb = function(a) {
            if (!wrb(a)) return g.bj(a.j);
            var b = g.cj(a.j);
            if (b === "") return "";
            var c = "",
                d = b.length,
                e = g.$i(a.j) == 4;
            if (!a.B.C) {
                if (typeof TextDecoder === "undefined") return D7(a), E7(a), "";
                a.B.C = new g.Ja.TextDecoder
            }
            for (var f = 0; f < d; f++) a.B.B = !0, c += a.B.C.decode(b[f], {
                stream: !(e && f == d - 1)
            });
            b.length = 0;
            a.B.j += c;
            a.N = 0;
            return a.B.j
        },
        wrb = function(a) {
            return a.j ? a.Fa == "GET" && a.Ra != 2 && a.C.jf : !1
        },
        Arb = function(a, b) {
            var c = a.N,
                d = b.indexOf("\n", c);
            if (d == -1) return yrb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return zrb;
            d += 1;
            if (d + c > b.length) return yrb;
            b = b.slice(d, d + c);
            a.N = d + c;
            return b
        },
        C7 = function(a) {
            a.ob = Date.now() + a.fb;
            Brb(a, a.fb)
        },
        Brb = function(a, b) {
            if (a.qa != null) throw Error("WatchDog timer not null");
            a.qa = z7((0, g.Ua)(a.X4, a), b)
        },
        Crb = function(a) {
            a.qa && (g.Ja.clearTimeout(a.qa), a.qa = null)
        },
        E7 = function(a) {
            a.C.Ng() || a.Ma || Drb(a.C, a)
        },
        D7 = function(a) {
            Crb(a);
            g.fb(a.Wa);
            a.Wa = null;
            a.yb.removeAll();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        Lrb = function(a, b) {
            try {
                var c = a.C;
                if (c.Sh != 0 && (c.j == a || Erb(c.B, a)))
                    if (!a.Va && Erb(c.B, a) && c.Sh == 3) {
                        try {
                            var d = c.kf.j.parse(b)
                        } catch (y) {
                            d = null
                        }
                        if (Array.isArray(d) && d.length == 3) {
                            var e = d;
                            if (e[0] == 0) a: {
                                if (!c.Z) {
                                    if (c.j)
                                        if (c.j.Ba + 3E3 < a.Ba) F7(c), G7(c);
                                        else break a;
                                    Frb(c);
                                    y7(18)
                                }
                            }
                            else c.Ie = e[1], 0 < c.Ie - c.Wa && e[2] < 37500 && c.Va && c.ra == 0 && !c.qa && (c.qa = z7((0, g.Ua)(c.Z4, c), 6E3));
                            if (Grb(c.B) <= 1 && c.Rc) {
                                try {
                                    c.Rc()
                                } catch (y) {}
                                c.Rc = void 0
                            }
                        } else H7(c, 11)
                    } else if ((a.Va || c.j == a) && F7(c), !g.pb(b))
                    for (e = c.kf.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Wa = f[0];
                        f = f[1];
                        if (c.Sh == 2)
                            if (f[0] == "c") {
                                c.D = f[1];
                                c.Ob = f[2];
                                var h = f[3];
                                h != null && (c.aV = h);
                                var l = f[5];
                                l != null && typeof l === "number" && l > 0 && (c.Xa = 1.5 * l);
                                d = c;
                                var m = a.mQ();
                                if (m) {
                                    var n = g.dj(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.B;
                                        !p.j && (g.rb(n, "spdy") || g.rb(n, "quic") || g.rb(n, "h2")) && (p.D = p.G, p.j = new Set, p.B && (Hrb(p, p.B), p.B = null))
                                    }
                                    if (d.Ga) {
                                        var q = g.dj(m, "X-HTTP-Session-Id");
                                        q && (d.ze = q, g.pk(d.Ka, d.Ga, q))
                                    }
                                }
                                c.Sh = 3;
                                c.G && c.G.gV();
                                c.yc && (c.Wc = Date.now() - a.Ba);
                                d = c;
                                var r = a;
                                d.Ed = Irb(d, d.Ra ? d.Ob : null, d.Tb);
                                if (r.Va) {
                                    Jrb(d.B,
                                        r);
                                    var t = r,
                                        u = d.Xa;
                                    u && t.setTimeout(u);
                                    t.qa && (Crb(t), C7(t));
                                    d.j = r
                                } else Krb(d);
                                c.C.length > 0 && I7(c)
                            } else f[0] != "stop" && f[0] != "close" || H7(c, 7);
                        else c.Sh == 3 && (f[0] == "stop" || f[0] == "close" ? f[0] == "stop" ? H7(c, 7) : c.disconnect() : f[0] != "noop" && c.G && c.G.fV(f), c.ra = 0)
                    }
                x7(4)
            } catch (y) {}
        },
        Mrb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        Nrb = function(a) {
            this.G = a || 10;
            g.Ja.PerformanceNavigationTiming ? (a = g.Ja.performance.getEntriesByType("navigation"), a = a.length > 0 && (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")) : a = !!(g.Ja.chrome && g.Ja.chrome.loadTimes && g.Ja.chrome.loadTimes() && g.Ja.chrome.loadTimes().wasFetchedViaSpdy);
            this.D = a ? this.G : 1;
            this.j = null;
            this.D > 1 && (this.j = new Set);
            this.B = null;
            this.C = []
        },
        Orb = function(a) {
            return a.B ? !0 : a.j ? a.j.size >= a.D : !1
        },
        Grb = function(a) {
            return a.B ? 1 : a.j ? a.j.size : 0
        },
        Erb = function(a, b) {
            return a.B ? a.B == b : a.j ? a.j.has(b) : !1
        },
        Hrb =
        function(a, b) {
            a.j ? a.j.add(b) : a.B = b
        },
        Jrb = function(a, b) {
            a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        Prb = function(a) {
            if (a.B != null) return a.C.concat(a.B.ra);
            if (a.j != null && a.j.size !== 0) {
                var b = a.C;
                a = g.w(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.ra);
                return b
            }
            return g.Tb(a.C)
        },
        Qrb = function(a, b) {
            var c = new A7;
            if (g.Ja.Image) {
                var d = new Image;
                d.onload = g.Va(J7, c, "TestLoadImage: loaded", !0, b, d);
                d.onerror = g.Va(J7, c, "TestLoadImage: error", !1, b, d);
                d.onabort = g.Va(J7, c, "TestLoadImage: abort", !1, b, d);
                d.ontimeout = g.Va(J7, c, "TestLoadImage: timeout", !1, b, d);
                g.Ja.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        Rrb = function(a, b) {
            var c = new A7,
                d = new AbortController,
                e = setTimeout(function() {
                    d.abort();
                    J7(c, "TestPingServer: timeout", !1, b)
                }, 1E4);
            fetch(a, {
                signal: d.signal
            }).then(function(f) {
                clearTimeout(e);
                f.ok ? J7(c, "TestPingServer: ok", !0, b) : J7(c, "TestPingServer: server error", !1, b)
            }).catch(function() {
                clearTimeout(e);
                J7(c, "TestPingServer: error", !1, b)
            })
        },
        J7 = function(a, b, c, d, e) {
            try {
                e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c)
            } catch (f) {}
        },
        Srb = function() {
            this.j = new w7
        },
        Trb = function(a, b, c) {
            var d = c || "";
            try {
                nqb(a, function(e, f) {
                    var h = e;
                    g.Qa(e) && (h = g.Ci(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        K7 = function(a, b, c) {
            return c && c.b$ ? c.b$[a] || b : b
        },
        Urb = function(a) {
            this.C = [];
            this.Ob = this.Ed = this.Ka = this.Tb = this.j = this.ze = this.Ga = this.Ma = this.N = this.Jb = this.Y = null;
            this.Rf = this.Ya = 0;
            this.Qf = K7("failFast", !1, a);
            this.Va = this.qa = this.Z = this.K = this.G = null;
            this.wc = !0;
            this.Ie = this.Wa = -1;
            this.Kb = this.ra = this.Ba = 0;
            this.Pf = K7("baseRetryDelayMs", 5E3, a);
            this.Sf = K7("retryDelaySeedMs", 1E4, a);
            this.wh = K7("forwardChannelMaxRetries", 2, a);
            this.Fd = K7("forwardChannelRequestTimeoutMs", 2E4, a);
            this.ge = a && a.Ypa || void 0;
            this.Uf = a && a.Ooa || void 0;
            this.jf = a && a.Wpa || !1;
            this.Xa = void 0;
            this.Ra = a && a.Cea ||
                !1;
            this.D = "";
            this.B = new Nrb(a && a.Sma);
            this.kf = new Srb;
            this.yb = a && a.jna || !1;
            this.ob = a && a.Yma || !1;
            this.yb && this.ob && (this.ob = !1);
            this.Tf = a && a.Ima || !1;
            a && a.lna && (this.wc = !1);
            this.yc = !this.yb && this.wc && a && a.Wma || !1;
            this.Zd = void 0;
            a && a.s_ && a.s_ > 0 && (this.Zd = a.s_);
            this.Rc = void 0;
            this.Wc = 0;
            this.fb = !1;
            this.Ab = this.Fa = null
        },
        G7 = function(a) {
            a.j && (Vrb(a), a.j.cancel(), a.j = null)
        },
        Wrb = function(a) {
            G7(a);
            a.Z && (g.Ja.clearTimeout(a.Z), a.Z = null);
            F7(a);
            a.B.cancel();
            a.K && (typeof a.K === "number" && g.Ja.clearTimeout(a.K), a.K = null)
        },
        I7 = function(a) {
            Orb(a.B) || a.K || (a.K = !0, g.De(a.cV, a), a.Ba = 0)
        },
        Yrb = function(a, b) {
            if (Grb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
            if (a.K) return a.C = b.ra.concat(a.C), !0;
            if (a.Sh == 1 || a.Sh == 2 || a.Ba >= (a.Qf ? 0 : a.wh)) return !1;
            a.K = z7((0, g.Ua)(a.cV, a, b), Xrb(a, a.Ba));
            a.Ba++;
            return !0
        },
        $rb = function(a, b) {
            var c;
            b ? c = b.Tb : c = a.Ya++;
            var d = a.Ka.clone();
            g.pk(d, "SID", a.D);
            g.pk(d, "RID", c);
            g.pk(d, "AID", a.Wa);
            L7(a, d);
            a.N && a.Y && g.tk(d, a.N, a.Y);
            c = new B7(a, a.D, c, a.Ba + 1);
            a.N === null && (c.Ka = a.Y);
            b && (a.C = b.ra.concat(a.C));
            b = Zrb(a, c, 1E3);
            c.setTimeout(Math.round(a.Fd * .5) + Math.round(a.Fd * .5 * Math.random()));
            Hrb(a.B, c);
            urb(c, d, b)
        },
        L7 = function(a, b) {
            a.Ma && g.qc(a.Ma, function(c, d) {
                g.pk(b, d, c)
            });
            a.G && nqb({}, function(c, d) {
                g.pk(b, d, c)
            })
        },
        Zrb = function(a, b, c) {
            c = Math.min(a.C.length, c);
            var d = a.G ? (0, g.Ua)(a.G.a5, a.G, a) : null;
            a: {
                for (var e = a.C, f = -1;;) {
                    var h = ["count=" + c];
                    f == -1 ? c > 0 ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                    for (var l = !0, m = 0; m < c; m++) {
                        var n = e[m].j,
                            p = e[m].map;
                        n -= f;
                        if (n < 0) f = Math.max(0, e[m].j - 100), l = !1;
                        else try {
                            Trb(p, h, "req" + n + "_")
                        } catch (q) {
                            d && d(p)
                        }
                    }
                    if (l) {
                        d = h.join("&");
                        break a
                    }
                }
                d = void 0
            }
            a = a.C.splice(0, c);
            b.ra = a;
            return d
        },
        Krb = function(a) {
            a.j || a.Z || (a.Kb = 1, g.De(a.bV, a), a.ra = 0)
        },
        Frb = function(a) {
            if (a.j || a.Z || a.ra >= 3) return !1;
            a.Kb++;
            a.Z = z7((0, g.Ua)(a.bV, a), Xrb(a, a.ra));
            a.ra++;
            return !0
        },
        Vrb = function(a) {
            a.Fa != null && (g.Ja.clearTimeout(a.Fa), a.Fa = null)
        },
        asb = function(a) {
            a.j = new B7(a, a.D, "rpc", a.Kb);
            a.N === null && (a.j.Ka = a.Y);
            a.j.Xa = 0;
            var b = a.Ed.clone();
            g.pk(b, "RID", "rpc");
            g.pk(b, "SID", a.D);
            g.pk(b, "AID", a.Wa);
            g.pk(b, "CI", a.Va ? "0" : "1");
            !a.Va && a.Zd && g.pk(b, "TO", a.Zd);
            g.pk(b, "TYPE", "xmlhttp");
            L7(a, b);
            a.N && a.Y && g.tk(b, a.N, a.Y);
            a.Xa && a.j.setTimeout(a.Xa);
            var c = a.j;
            a = a.Ob;
            c.Ra = 1;
            c.Z = c7(b.clone());
            c.Y = null;
            c.Ga = !0;
            trb(c, a)
        },
        F7 = function(a) {
            a.qa != null && (g.Ja.clearTimeout(a.qa), a.qa = null)
        },
        Drb = function(a, b) {
            var c = null;
            if (a.j == b) {
                F7(a);
                Vrb(a);
                a.j = null;
                var d = 2
            } else if (Erb(a.B, b)) c = b.ra, Jrb(a.B, b), d = 1;
            else return;
            if (a.Sh != 0)
                if (b.K)
                    if (d == 1) {
                        c = b.Y ? b.Y.length : 0;
                        b = Date.now() - b.Ba;
                        var e = a.Ba;
                        d = orb();
                        d.dispatchEvent(new rrb(d, c, b, e));
                        I7(a)
                    } else Krb(a);
            else {
                var f = b.Jb;
                e = b.getLastError();
                if (e == 3 || e == 0 && f > 0 || !(d == 1 && Yrb(a, b) || d == 2 && Frb(a))) switch (c && c.length > 0 && (b = a.B, b.C = b.C.concat(c)), e) {
                    case 1:
                        H7(a, 5);
                        break;
                    case 4:
                        H7(a, 10);
                        break;
                    case 3:
                        H7(a, 6);
                        break;
                    default:
                        H7(a, 2)
                }
            }
        },
        Xrb = function(a, b) {
            var c = a.Pf + Math.floor(Math.random() *
                a.Sf);
            a.isActive() || (c *= 2);
            return c * b
        },
        H7 = function(a, b) {
            if (b == 2) {
                var c = (0, g.Ua)(a.Jea, a),
                    d = a.Uf,
                    e = !d;
                d = new g.hk(d || "//www.google.com/images/cleardot.gif");
                g.Ja.location && g.Ja.location.protocol == "http" || g.ik(d, "https");
                c7(d);
                e ? Qrb(d.toString(), c) : Rrb(d.toString(), c)
            } else y7(2);
            a.Sh = 0;
            a.G && a.G.eV(b);
            bsb(a);
            Wrb(a)
        },
        bsb = function(a) {
            a.Sh = 0;
            a.Ab = [];
            if (a.G) {
                var b = Prb(a.B);
                if (b.length != 0 || a.C.length != 0) g.Ub(a.Ab, b), g.Ub(a.Ab, a.C), a.B.C.length = 0, g.Tb(a.C), a.C.length = 0;
                a.G.dV()
            }
        },
        csb = function(a) {
            if (a.Sh == 0) return a.Ab;
            var b = [];
            g.Ub(b, Prb(a.B));
            g.Ub(b, a.C);
            return b
        },
        Irb = function(a, b, c) {
            var d = g.qk(c);
            d.j != "" ? (b && g.jk(d, b + "." + d.j), g.kk(d, d.C)) : (d = g.Ja.location, d = oqb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Ga;
            c = a.ze;
            b && c && g.pk(d, b, c);
            g.pk(d, "VER", a.aV);
            L7(a, d);
            return d
        },
        vrb = function(a, b, c) {
            if (b && !a.Ra) throw Error("Can't create secondary domain capable XhrIo object.");
            b = a.jf && !a.ge ? new g.Xi(new g.dk({
                I2: c
            })) : new g.Xi(a.ge);
            b.K = a.Ra;
            return b
        },
        dsb = function() {},
        esb = function() {},
        N7 = function(a, b) {
            g.Vc.call(this);
            this.j = new Urb(b);
            this.G = a;
            this.B = b && b.O$ || null;
            a = b && b.N$ || null;
            b && b.Qma && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.Y = a;
            a = b && b.qoa || null;
            b && b.E_ && (a ? a["X-WebChannel-Content-Type"] = b.E_ : a = {
                "X-WebChannel-Content-Type": b.E_
            });
            b && b.wX && (a ? a["X-WebChannel-Client-Profile"] = b.wX : a = {
                "X-WebChannel-Client-Profile": b.wX
            });
            this.j.Jb = a;
            (a = b && b.poa) && !g.pb(a) && (this.j.N = a);
            this.K = b && b.Cea || !1;
            this.D = b && b.qpa || !1;
            (b = b && b.Y9) && !g.pb(b) && (this.j.Ga = b, g.yc(this.B, b) && (a = this.B,
                b in a && delete a[b]));
            this.C = new M7(this)
        },
        fsb = function(a) {
            lrb.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.vc(b)) ? g.Cc(b, this.j) : b : this.data = a
        },
        gsb = function(a) {
            mrb.call(this);
            this.status = 1;
            this.errorCode = a
        },
        M7 = function(a) {
            this.j = a
        },
        hsb = function(a, b) {
            this.B = a;
            this.j = b
        },
        isb = function(a) {
            return csb(a.j).map(function(b) {
                var c = a.B;
                b = b.map;
                "__data__" in b ? (b = b.__data__, c = c.D ? kqb(b) : b) : c = b;
                return c
            })
        },
        O7 = function(a, b) {
            if (typeof a !== "function") throw Error("Fn must not be null and must be a function");
            return g.Ja.setTimeout(function() {
                a()
            }, b)
        },
        Q7 = function(a) {
            P7.dispatchEvent(new jsb(P7, a))
        },
        jsb = function(a) {
            g.lb.call(this, "statevent", a)
        },
        R7 = function(a, b, c, d) {
            this.j = a;
            this.D = b;
            this.N = c;
            this.K = d || 1;
            this.B = 45E3;
            this.C = new g.uk(this);
            this.G = new g.Me;
            this.G.setInterval(250)
        },
        lsb = function(a, b, c) {
            a.xI = 1;
            a.lD = c7(b.clone());
            a.Xv = c;
            a.Ga = !0;
            ksb(a, null)
        },
        msb = function(a, b, c, d, e) {
            a.xI = 1;
            a.lD = c7(b.clone());
            a.Xv = null;
            a.Ga = c;
            e && (a.W1 = !1);
            ksb(a, d)
        },
        ksb = function(a, b) {
            a.oD = Date.now();
            nsb(a);
            a.wI = a.lD.clone();
            d7(a.wI, "t", a.K);
            a.zI = 0;
            a.uj = a.j.sN(a.j.pD() ? b : null);
            a.qN > 0 && (a.vI = new v7((0, g.Ua)(a.hV, a, a.uj), a.qN));
            a.C.listen(a.uj, "readystatechange", a.c5);
            b = a.Vv ? g.Fc(a.Vv) : {};
            a.Xv ? (a.yI = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.uj.send(a.wI, a.yI, a.Xv, b)) : (a.yI = "GET", a.W1 && !g.lc && (b.Connection = "close"), a.uj.send(a.wI, a.yI, null, b));
            a.j.xs(1)
        },
        qsb = function(a, b) {
            var c = a.zI,
                d = b.indexOf("\n", c);
            if (d == -1) return osb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return psb;
            d += 1;
            if (d + c > b.length) return osb;
            b = b.slice(d, d + c);
            a.zI = d + c;
            return b
        },
        nsb = function(a) {
            a.rN = Date.now() + a.B;
            rsb(a, a.B)
        },
        rsb = function(a, b) {
            if (a.nz != null) throw Error("WatchDog timer not null");
            a.nz = O7((0, g.Ua)(a.b5, a), b)
        },
        ssb = function(a) {
            a.nz && (g.Ja.clearTimeout(a.nz), a.nz = null)
        },
        tsb = function(a) {
            a.j.Ng() || a.mD || a.j.uN(a)
        },
        S7 = function(a) {
            ssb(a);
            g.fb(a.vI);
            a.vI = null;
            a.G.stop();
            a.C.removeAll();
            if (a.uj) {
                var b = a.uj;
                a.uj = null;
                b.abort();
                b.dispose()
            }
            a.d3 && (a.d3 = null)
        },
        usb = function(a, b) {
            try {
                a.j.iV(a, b), a.j.xs(4)
            } catch (c) {}
        },
        wsb = function(a, b, c, d, e) {
            if (d == 0) c(!1);
            else {
                var f = e || 0;
                d--;
                vsb(a, b, function(h) {
                    h ? c(!0) : g.Ja.setTimeout(function() {
                        wsb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        vsb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    T7(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    T7(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    T7(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    T7(d), c(!1)
                } catch (e) {}
            };
            g.Ja.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        T7 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        xsb = function(a) {
            this.j = a;
            this.B = new w7
        },
        ysb = function(a) {
            var b = U7(a.j, a.lE, "/mail/images/cleardot.gif");
            c7(b);
            wsb(b.toString(), 5E3, (0, g.Ua)(a.t7, a), 3, 2E3);
            a.xs(1)
        },
        zsb = function(a) {
            var b = a.j.K;
            b != null ? (Q7(5), b ? (Q7(11), V7(a.j, a, !1)) : (Q7(12), V7(a.j, a, !0))) : (a.il = new R7(a), a.il.Vv = a.tN, b = a.j, b = U7(b, b.pD() ? a.AI : null, a.vN), Q7(5), d7(b, "TYPE", "xmlhttp"), msb(a.il, b, !1, a.AI, !1))
        },
        Asb = function(a, b, c) {
            this.j = 1;
            this.B = [];
            this.C = [];
            this.G = new w7;
            this.Y = a || null;
            this.K = b != null ? b : null;
            this.Z = c || !1
        },
        Bsb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        Csb = function(a, b, c, d) {
            g.lb.call(this, "timingevent", a);
            this.size = b;
            this.rtt = c;
            this.retries = d
        },
        Dsb = function(a) {
            g.lb.call(this, "serverreachability", a)
        },
        Fsb = function(a) {
            a.d5(1, 0);
            a.BI = U7(a, null, a.xN);
            Esb(a)
        },
        Gsb = function(a) {
            a.Jt && (a.Jt.abort(), a.Jt = null);
            a.Wg && (a.Wg.cancel(), a.Wg = null);
            a.jr && (g.Ja.clearTimeout(a.jr), a.jr = null);
            W7(a);
            a.yk && (a.yk.cancel(), a.yk = null);
            a.kt && (g.Ja.clearTimeout(a.kt), a.kt = null)
        },
        Hsb = function(a, b) {
            if (a.j == 0) throw Error("Invalid operation: sending map when state is closed");
            a.B.push(new Bsb(a.e5++, b));
            a.j != 2 && a.j != 3 || Esb(a)
        },
        Isb = function(a) {
            var b = 0;
            a.Wg && b++;
            a.yk && b++;
            return b
        },
        Esb = function(a) {
            a.yk || a.kt || (a.kt = O7((0, g.Ua)(a.mV, a), 0), a.pz = 0)
        },
        Lsb = function(a, b) {
            if (a.j == 1) {
                if (!b) {
                    a.rD = Math.floor(Math.random() * 1E5);
                    b = a.rD++;
                    var c = new R7(a, "", b);
                    c.Vv = a.tp;
                    var d = Jsb(a),
                        e = a.BI.clone();
                    g.pk(e, "RID", b);
                    g.pk(e, "CVER", "1");
                    X7(a, e);
                    lsb(c, e, d);
                    a.yk = c;
                    a.j = 2
                }
            } else a.j == 3 && (b ? Ksb(a, b) : a.B.length == 0 || a.yk || Ksb(a))
        },
        Ksb = function(a, b) {
            if (b)
                if (a.Yv > 6) {
                    a.B = a.C.concat(a.B);
                    a.C.length = 0;
                    var c = a.rD - 1;
                    b = Jsb(a)
                } else c = b.N, b = b.Xv;
            else c = a.rD++, b = Jsb(a);
            var d = a.BI.clone();
            g.pk(d, "SID", a.D);
            g.pk(d, "RID", c);
            g.pk(d, "AID", a.qz);
            X7(a, d);
            c = new R7(a, a.D, c, a.pz + 1);
            c.Vv = a.tp;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.yk = c;
            lsb(c, d, b)
        },
        X7 = function(a, b) {
            a.Si && (a = a.Si.qV()) && g.qc(a, function(c, d) {
                g.pk(b, d, c)
            })
        },
        Jsb = function(a) {
            var b = Math.min(a.B.length, 1E3),
                c = ["count=" + b];
            if (a.Yv > 6 && b > 0) {
                var d = a.B[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    gG: void 0
                }, f++) {
                e.gG = a.B[f].j;
                var h = a.B[f].map;
                e.gG = a.Yv <= 6 ? f : e.gG - d;
                try {
                    g.qc(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.gG + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.gG + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.C = a.C.concat(a.B.splice(0, b));
            return c.join("&")
        },
        Msb = function(a) {
            a.Wg || a.jr || (a.N = 1, a.jr = O7((0, g.Ua)(a.lV, a), 0), a.oz = 0)
        },
        Osb = function(a) {
            if (a.Wg || a.jr || a.oz >= 3) return !1;
            a.N++;
            a.jr = O7((0, g.Ua)(a.lV, a), Nsb(a, a.oz));
            a.oz++;
            return !0
        },
        V7 = function(a, b, c) {
            a.dN = a.K == null ? c : !a.K;
            a.vp = b.ir;
            a.Z || Fsb(a)
        },
        W7 = function(a) {
            a.Zv != null && (g.Ja.clearTimeout(a.Zv), a.Zv = null)
        },
        Nsb = function(a, b) {
            var c = 5E3 + Math.floor(Math.random() * 1E4);
            a.isActive() || (c *= 2);
            return c * b
        },
        Y7 = function(a, b) {
            if (b == 2 || b == 9) {
                var c = null;
                a.Si && (c = null);
                var d = (0, g.Ua)(a.Iea, a);
                c || (c = new g.hk("//www.google.com/images/cleardot.gif"), c7(c));
                vsb(c.toString(), 1E4, d)
            } else Q7(2);
            Psb(a, b)
        },
        Psb = function(a, b) {
            a.j = 0;
            a.Si && a.Si.nV(b);
            Qsb(a);
            Gsb(a)
        },
        Qsb = function(a) {
            a.j = 0;
            a.vp = -1;
            if (a.Si)
                if (a.C.length == 0 && a.B.length == 0) a.Si.yN();
                else {
                    var b = g.Tb(a.C),
                        c = g.Tb(a.B);
                    a.C.length = 0;
                    a.B.length = 0;
                    a.Si.yN(b, c)
                }
        },
        U7 = function(a, b, c) {
            var d = g.qk(c);
            if (d.j != "") b && g.jk(d, b + "." + d.j), g.kk(d, d.C);
            else {
                var e = window.location;
                d = oqb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.qD && g.qc(a.qD, function(f, h) {
                g.pk(d, h, f)
            });
            g.pk(d, "VER", a.Yv);
            X7(a, d);
            return d
        },
        Rsb = function() {},
        Ssb = function() {
            this.j = [];
            this.B = []
        },
        Tsb = function(a) {
            g.lb.call(this, "channelMessage");
            this.message = a
        },
        Usb = function(a) {
            g.lb.call(this, "channelError");
            this.error = a
        },
        Vsb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        Z7 = function(a, b) {
            g.O.call(this);
            this.j = new g.fp(this.xca, 0, this);
            g.P(this, this.j);
            this.cj = 5E3;
            this.B = 0;
            if (typeof a === "function") b && (a = (0, g.Ua)(a, b));
            else if (a && typeof a.handleEvent === "function") a = (0, g.Ua)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.C = a
        },
        Wsb = function(a, b, c, d, e) {
            c = c === void 0 ? !1 : c;
            d = d === void 0 ? function() {
                return ""
            } : d;
            e = e === void 0 ? !1 : e;
            this.Ba = a;
            this.N = b;
            this.C = new g.Gp;
            this.B = new Z7(this.Nda, this);
            this.j = null;
            this.qa = !1;
            this.K = null;
            this.Y = "";
            this.Z = this.G = 0;
            this.D = [];
            this.Ra = c;
            this.ra = d;
            this.Va = e;
            this.Ka = new pqb;
            this.Fa = new rqb;
            this.Ma = new tqb;
            this.Ga = new vqb;
            this.Wa = new xqb;
            this.Ya = new yqb
        },
        Xsb = function(a) {
            if (a.j) {
                var b = a.ra(),
                    c = a.j.tp || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.tp = c
            }
        },
        $7 = function(a) {
            this.scheme = "https";
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.B = !0;
            a = a || document.location.href;
            var b = Number(g.Mi(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Ni(a) || "";
            a = g.wb();
            a.search("MSIE") >= 0 && (a = a.match(/MSIE ([\d.]+)/)[1], g.vb(a, "10.0") < 0 && (this.B = !1))
        },
        a8 = function(a, b) {
            var c = a.j;
            a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
            return g.Ti(c + b, {})
        },
        Ysb = function(a, b) {
            g.Vc.call(this);
            var c = this;
            this.Hd = a();
            this.Hd.subscribe("handlerOpened", this.g5, this);
            this.Hd.subscribe("handlerClosed", this.onClosed, this);
            this.Hd.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Hd.subscribe("handlerMessage", this.onMessage, this);
            this.j = b
        },
        Zsb = function(a, b, c) {
            var d = this;
            c = c === void 0 ? function() {
                return ""
            } : c;
            var e = e === void 0 ? new esb : e;
            var f = f === void 0 ? new g.Gp : f;
            this.pathPrefix = a;
            this.j = b;
            this.Ba = c;
            this.G = f;
            this.Z = null;
            this.Y = this.N = 0;
            this.channel = null;
            this.K = 0;
            this.C = new Z7(function() {
                d.C.isActive();
                var h;
                ((h = d.channel) == null ? void 0 : Grb((new hsb(h, h.j)).j.B)) === 0 && d.connect(d.Z, d.N)
            });
            this.D = {};
            this.B = {};
            this.qa = !1;
            this.logger = null;
            this.ra = [];
            this.Ag = void 0;
            this.Ka = new pqb;
            this.Fa = new rqb;
            this.Ma = new tqb;
            this.Ga = new vqb
        },
        $sb = function(a) {
            g.Nc(a.channel, "m", function() {
                a.K = 3;
                a.C.reset();
                a.Z = null;
                a.N = 0;
                for (var b = g.w(a.ra), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.ra = [];
                a.publish("webChannelOpened");
                qqb(a.Ka, "WEB_CHANNEL")
            });
            g.Nc(a.channel, "n", function() {
                a.K = 0;
                a.C.isActive() || a.publish("webChannelClosed");
                var b, c = (b = a.channel) == null ? void 0 : isb(new hsb(b, b.j));
                c && (a.ra = [].concat(g.x(c)));
                sqb(a.Fa, "WEB_CHANNEL")
            });
            g.Nc(a.channel, "p", function(b) {
                var c = b.data;
                c[0] === "gracefulReconnect" ? (a.C.start(), a.channel && a.channel.close()) : a.publish("webChannelMessage", new Vsb(c[0], c[1]));
                a.Ag = b.statusCode;
                uqb(a.Ma, "WEB_CHANNEL")
            });
            g.Nc(a.channel, "o", function() {
                a.Ag === 401 || a.C.start();
                a.publish("webChannelError");
                wqb(a.Ga, "WEB_CHANNEL")
            })
        },
        atb = function(a) {
            var b = a.Ba();
            b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"]
        },
        btb = function(a) {
            g.Vc.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.i5, this);
            this.j.subscribe("webChannelClosed", this.onClosed, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.onMessage, this)
        },
        ctb = function(a, b, c, d, e) {
            function f() {
                return new Wsb(a8(a, "/bc"), b, !1, c, d)
            }
            c = c === void 0 ? function() {
                return ""
            } : c;
            return g.Pr("enable_mdx_web_channel_desktop") ? new btb(function() {
                return new Zsb(a8(a, "/wc"), b, c)
            }) : new Ysb(f, e)
        },
        gtb = function() {
            var a = dtb;
            etb();
            b8.push(a);
            ftb()
        },
        c8 = function(a, b) {
            etb();
            var c = htb(a, String(b));
            b8.length == 0 ? itb(c) : (ftb(), g.cc(b8, function(d) {
                d(c)
            }))
        },
        d8 = function(a) {
            c8("CP", a)
        },
        etb = function() {
            b8 || (b8 = g.La("yt.mdx.remote.debug.handlers_") || [], g.Ka("yt.mdx.remote.debug.handlers_", b8))
        },
        itb = function(a) {
            var b = (e8 + 1) % 50;
            e8 = b;
            f8[b] = a;
            g8 || (g8 = b == 49)
        },
        ftb = function() {
            var a = b8;
            if (f8[0]) {
                var b = g8 ? e8 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = f8[b];
                    g.cc(a, function(d) {
                        d(c)
                    })
                } while (b != e8);
                f8 = Array(50);
                e8 = -1;
                g8 = !1
            }
        },
        htb = function(a, b) {
            var c = (Date.now() - jtb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        h8 = function(a) {
            g.Fx.call(this);
            this.K = a;
            this.screens = []
        },
        ktb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        ltb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.kn(a.screens, function(f) {
                return !!Mqb(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = ktb(a, b[d]) || c;
            return c
        },
        mtb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.kn(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        ntb = function(a, b, c, d, e) {
            g.Fx.call(this);
            this.C = a;
            this.N = b;
            this.D = c;
            this.K = d;
            this.G = e;
            this.B = 0;
            this.j = null;
            this.ud = NaN
        },
        j8 = function(a) {
            h8.call(this, "LocalScreenService");
            this.B = a;
            this.j = NaN;
            i8(this);
            this.info("Initializing with " + Jqb(this.screens))
        },
        otb = function(a) {
            if (a.screens.length) {
                var b = g.Al(a.screens, function(d) {
                        return d.id
                    }),
                    c = a8(a.B, "/pairing/get_lounge_token_batch");
                a.B.sendRequest("POST", c, {
                    screen_ids: b.join(",")
                }, (0, g.Ua)(a.y9, a), (0, g.Ua)(a.x9, a))
            }
        },
        i8 = function(a) {
            if (g.Pr("deprecate_pair_servlet_enabled")) return ltb(a, []);
            var b = Iqb(Tqb());
            b = g.kn(b, function(c) {
                return !c.uuid
            });
            return ltb(a, b)
        },
        k8 = function(a, b) {
            Vqb(g.Al(a.screens, Gqb));
            b && Uqb()
        },
        qtb = function(a, b) {
            g.Fx.call(this);
            this.K = b;
            b = (b = g.ct("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.Mb(b, h)
            }
            this.j = c;
            this.G = a;
            this.C = this.D = NaN;
            this.B = null;
            ptb("Initialized with " + g.Ci(this.j))
        },
        rtb = function(a, b, c) {
            var d = a8(a.G, "/pairing/get_screen_availability");
            a.G.sendRequest("POST", d, {
                lounge_token: b.token
            }, (0, g.Ua)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c(e[h].status == "online");
                        return
                    }
                c(!1)
            }, a), (0, g.Ua)(function() {
                c(!1)
            }, a))
        },
        ttb = function(a, b) {
            a: if (iqb(b) != iqb(a.j)) var c = !1;
                else {
                    c = g.xc(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (ptb("Updated online screens: " + g.Ci(a.j)), a.j = b, a.publish("screenChange"));stb(a)
        },
        l8 = function(a) {
            isNaN(a.C) || g.Mr(a.C);
            a.C = g.Kr((0, g.Ua)(a.gT, a), a.D > 0 && a.D < g.Xa() ? 2E4 : 1E4)
        },
        ptb = function(a) {
            c8("OnlineScreenService", a)
        },
        utb = function(a) {
            var b = {};
            g.cc(a.K(), function(c) {
                c.token ? b[c.token] = c.id : this.gg("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        stb = function(a) {
            a = g.xc(g.rc(a.j, function(b) {
                return b
            }));
            g.$b(a);
            a.length ? g.bt("yt-remote-online-screen-ids", a.join(","), 60) : g.dt("yt-remote-online-screen-ids")
        },
        m8 = function(a, b) {
            b = b === void 0 ? !1 : b;
            h8.call(this, "ScreenService");
            this.D = a;
            this.N = b;
            this.j = this.B = null;
            this.C = [];
            this.G = {};
            vtb(this)
        },
        xtb = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.G[b]);
            var h = a.Dl(),
                l = c ? m7(h, c) : null;
            c && (a.N || l) || (l = m7(h, b));
            if (l) {
                l.uuid = b;
                var m = n8(a, l);
                rtb(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? wtb(a, c, (0, g.Ua)(function(n) {
                var p = n8(this, new j7({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                rtb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        ytb = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        ztb = function(a, b, c) {
            rtb(a.j, b, c)
        },
        wtb = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.Ur(a8(a.D, "/pairing/get_lounge_token_batch"), e)
        },
        Atb = function(a) {
            a.screens = a.B.Dl();
            var b = a.G,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + Jqb(a.screens))
        },
        vtb = function(a) {
            Btb(a);
            a.B = new j8(a.D);
            a.B.subscribe("screenChange", (0, g.Ua)(a.I9, a));
            Atb(a);
            a.N || (a.C = Iqb(g.ct("yt-remote-automatic-screen-cache") || []));
            Btb(a);
            a.info("Initializing automatic screens: " + Jqb(a.C));
            a.j = new qtb(a.D, (0, g.Ua)(a.Dl, a, !0));
            a.j.subscribe("screenChange", (0, g.Ua)(function() {
                this.publish("onlineScreenChange")
            }, a))
        },
        n8 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = m7(a.C, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.C.push(b), a.N || Ctb(a));
            Btb(a);
            a.G[b.uuid] = b.id;
            g.bt("yt-remote-device-id-map", a.G, 31536E3);
            return b
        },
        Ctb = function(a) {
            a = g.kn(a.C, function(b) {
                return b.idType != "shortLived"
            });
            g.bt("yt-remote-automatic-screen-cache", g.Al(a, Gqb))
        },
        Btb = function(a) {
            a.G = g.ct("yt-remote-device-id-map") || {}
        },
        o8 = function(a, b, c) {
            g.Fx.call(this);
            this.Ga = c;
            this.D = a;
            this.B = b;
            this.j = null
        },
        p8 = function(a, b) {
            a.j = b;
            a.publish("sessionScreen", a.j)
        },
        Dtb = function(a, b) {
            a.j && (a.j.token = b, n8(a.D, a.j));
            a.publish("sessionScreen", a.j)
        },
        q8 = function(a, b) {
            c8(a.Ga, b)
        },
        r8 = function(a, b, c) {
            o8.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.C = null;
            this.ra = (0, g.Ua)(this.n5, this);
            this.Fa = (0, g.Ua)(this.Kca, this);
            this.qa = g.Kr(function() {
                Etb(d, null)
            }, 12E4);
            this.N = this.G = this.K = this.Z = 0;
            this.Ba = !1;
            this.Y = "unknown"
        },
        Gtb = function(a, b) {
            g.Mr(a.N);
            a.N = 0;
            b == 0 ? Ftb(a) : a.N = g.Kr(function() {
                Ftb(a)
            }, b)
        },
        Ftb = function(a) {
            Htb(a, "getLoungeToken");
            g.Mr(a.G);
            a.G = g.Kr(function() {
                Itb(a, null)
            }, 3E4)
        },
        Htb = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Ci());
            var c = {};
            c.type = b;
            a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.Ua)(function() {
                q8(this, "Failed to send message: " + b + ".")
            }, a)) : q8(a, "Sending yt message without session: " + g.Ci(c))
        },
        Jtb = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.HY(b, function(c) {
                p8(a, c)
            }, function() {
                return a.Kj()
            }, 5)) : a.Kj(Error("Waiting for session status timed out."))
        },
        Ltb = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new j7(b);
            Ktb(a, d, function(e) {
                e ? (a.Ba = !0, n8(a.D, d), p8(a, d), a.Y = "unknown", Gtb(a, c)) : (g.sr(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Kj())
            }, 5)
        },
        Etb = function(a, b) {
            g.Mr(a.qa);
            a.qa = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? Ltb(a, {
                    name: a.B.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.sr(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), Jtb(a, b.screenId))) : (g.sr(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), Jtb(a, b.screenId)) :
                Jtb(a, b.screenId) : a.Kj(Error("Waiting for session status timed out."))
        },
        Itb = function(a, b) {
            g.Mr(a.G);
            a.G = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    ((d = a.j) == null ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.Y = c, Gtb(a, 3E4)) : (Dtb(a, b.loungeToken), a.Ba = !1, a.Y = "unknown", Gtb(a, b.loungeTokenRefreshIntervalMs))
        },
        Ktb = function(a, b, c, d) {
            g.Mr(a.K);
            a.K = 0;
            ztb(a.D, b, function(e) {
                e || d < 0 ? c(e) : a.K = g.Kr(function() {
                    Ktb(a, b, c, d - 1)
                }, 300)
            })
        },
        Mtb = function(a) {
            g.Mr(a.Z);
            a.Z = 0;
            g.Mr(a.K);
            a.K = 0;
            g.Mr(a.qa);
            a.qa = 0;
            g.Mr(a.G);
            a.G = 0;
            g.Mr(a.N);
            a.N = 0
        },
        s8 = function(a, b, c, d) {
            o8.call(this, a, b, "DialSession");
            this.config_ = d;
            this.C = this.Z = null;
            this.Fa = "";
            this.Ra = c;
            this.Ka = null;
            this.qa = function() {};
            this.Y = NaN;
            this.Ma = (0, g.Ua)(this.o5, this);
            this.G = function() {};
            this.N = this.K = 0;
            this.ra = !1;
            this.Ba = "unknown"
        },
        t8 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && ((b = a.C) == null ? 0 : b.getDialAppInfo))
        },
        Ntb = function(a) {
            a.G = a.D.sV(a.Fa, a.B.label, a.B.friendlyName, t8(a), function(b, c) {
                a.G = function() {};
                a.ra = !0;
                p8(a, b);
                b.idType == "shortLived" && c > 0 && u8(a, c)
            }, function(b) {
                a.G = function() {};
                a.Kj(b)
            })
        },
        Otb = function(a) {
            var b = {};
            b.pairingCode = a.Fa;
            b.theme = a.Ra;
            Xqb() && (b.env_useStageMdx = 1);
            return g.Si(b)
        },
        Ptb = function(a) {
            return new Promise(function(b) {
                a.Fa = Kqb();
                if (a.Ka) {
                    var c = new chrome.cast.DialLaunchResponse(!0, Otb(a));
                    b(c);
                    Ntb(a)
                } else a.qa = function() {
                    g.Mr(a.Y);
                    a.qa = function() {};
                    a.Y = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, Otb(a));
                    b(d);
                    Ntb(a)
                }, a.Y = g.Kr(function() {
                    a.qa()
                }, 100)
            })
        },
        Rtb = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new j7(b);
            return (new Promise(function(e) {
                Qtb(a, d, function(f) {
                    f ? (a.ra = !0, n8(a.D, d), p8(a, d), u8(a, c)) : g.sr(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : Ptb(a)
            })
        },
        Stb = function(a, b) {
            var c = a.Z.receiver.label,
                d = a.B.friendlyName;
            return (new Promise(function(e) {
                xtb(a.D, c, b, d, function(f) {
                    f && f.token && p8(a, f);
                    e(f)
                }, function(f) {
                    q8(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : Ptb(a)
            })
        },
        Qtb = function(a, b, c, d) {
            g.Mr(a.K);
            a.K = 0;
            ztb(a.D, b, function(e) {
                e || d < 0 ? c(e) : a.K = g.Kr(function() {
                    Qtb(a, b, c, d - 1)
                }, 300)
            })
        },
        u8 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            t8(a) && (g.Mr(a.N), a.N = 0, b == 0 ? Ttb(a) : a.N = g.Kr(function() {
                Ttb(a)
            }, b))
        },
        Ttb = function(a) {
            t8(a) && a.C.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    ((d = a.j) == null ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Ba = c, u8(a, 3E4)) : (a.ra = !1, a.Ba = "unknown", Dtb(a, b.loungeToken), u8(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Ba = "noLoungeTokenResponse";
                u8(a, 3E4)
            })
        },
        Utb = function(a) {
            g.Mr(a.K);
            a.K = 0;
            g.Mr(a.N);
            a.N = 0;
            a.G();
            a.G = function() {};
            g.Mr(a.Y)
        },
        v8 = function(a, b) {
            o8.call(this, a, b, "ManualSession");
            this.C = g.Kr((0, g.Ua)(this.aB, this, null), 150)
        },
        w8 = function(a, b) {
            g.Fx.call(this);
            this.config_ = b;
            this.B = a;
            this.Z = b.appId || "233637DE";
            this.D = b.theme || "cl";
            this.Y = b.disableCastApi || !1;
            this.K = b.forceMirroring || !1;
            this.j = null;
            this.N = !1;
            this.C = [];
            this.G = (0, g.Ua)(this.Kba, this)
        },
        Vtb = function(a, b) {
            return b ? g.Kb(a.C, function(c) {
                return k7(b, c.label)
            }, a) : null
        },
        x8 = function(a) {
            c8("Controller", a)
        },
        dtb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        y8 = function(a) {
            return a.N || !!a.C.length || !!a.j
        },
        z8 = function(a, b, c) {
            b != a.j && (g.fb(a.j), (a.j = b) ? (c ? a.publish("yt-remote-cast2-receiver-resumed",
                b.B) : a.publish("yt-remote-cast2-receiver-selected", b.B), b.subscribe("sessionScreen", (0, g.Ua)(a.D0, a, b)), b.subscribe("sessionFailed", function() {
                return Wtb(a, b)
            }), b.j ? a.publish("yt-remote-cast2-session-change", b.j) : c && a.j.aB(null)) : a.publish("yt-remote-cast2-session-change", null))
        },
        Wtb = function(a, b) {
            a.j == b && a.publish("yt-remote-cast2-session-failed")
        },
        Xtb = function(a) {
            var b = a.B.rV(),
                c = a.j && a.j.B;
            a = g.Al(b, function(d) {
                c && k7(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = Vtb(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        dub = function(a, b, c, d) {
            d.disableCastApi ? A8("Cannot initialize because disabled by Mdx config.") : Ytb() ? Ztb(b, d) && ($tb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? aub(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? aub(a, c) : (B8("Failed to load cast API: " + f), bub(!1), $tb(!1), g.dt("yt-remote-cast-available"), g.dt("yt-remote-cast-receiver"),
                    cub(), c(!1))
            }, d.loadCastApiSetupScript ? g.Jv("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : window.navigator.userAgent.indexOf("Android") >= 0 && window.navigator.userAgent.indexOf("Chrome/") >= 0 && window.navigator.presentation ? Zqb() >= 60 && hrb() : !window.chrome || !window.navigator.presentation || window.navigator.userAgent.indexOf("Edge") >= 0 ? crb() : Zqb() >= 89 ? jrb() : (grb(), t7(irb.map(drb))))) : A8("Cannot initialize because not running Chrome")
        },
        cub = function() {
            A8("dispose");
            var a = C8();
            a && a.dispose();
            g.Ka("yt.mdx.remote.cloudview.instance_", null);
            eub(!1);
            g.Hv(fub);
            fub.length = 0
        },
        D8 = function() {
            return !!g.ct("yt-remote-cast-installed")
        },
        gub = function() {
            var a = g.ct("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        hub = function() {
            A8("clearCurrentReceiver");
            g.dt("yt-remote-cast-receiver")
        },
        iub = function() {
            return D8() ? C8() ? C8().getCastSession() : (B8("getCastSelector: Cast is not initialized."), null) : (B8("getCastSelector: Cast API is not installed!"), null)
        },
        jub = function() {
            D8() ? C8() ? E8() ? (A8("Requesting cast selector."), C8().requestSession()) : (A8("Wait for cast API to be ready to request the session."), fub.push(g.Gv("yt-remote-cast2-api-ready", jub))) : B8("requestCastSelector: Cast is not initialized.") : B8("requestCastSelector: Cast API is not installed!")
        },
        F8 = function(a, b) {
            E8() ? C8().setConnectedScreenStatus(a, b) : B8("setConnectedScreenStatus called before ready.")
        },
        Ytb = function() {
            var a = g.wb().search(/ (CrMo|Chrome|CriOS)\//) >= 0;
            return g.KE || a
        },
        kub = function(a, b) {
            C8().init(a, b)
        },
        Ztb = function(a, b) {
            var c = !1;
            C8() || (a = new w8(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.bt("yt-remote-cast-available", d);
                r7("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                A8("onReceiverSelected: " + d.friendlyName);
                g.bt("yt-remote-cast-receiver", d);
                r7("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                A8("onReceiverResumed: " + d.friendlyName);
                g.bt("yt-remote-cast-receiver", d);
                r7("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                A8("onSessionChange: " + l7(d));
                d || g.dt("yt-remote-cast-receiver");
                r7("yt-remote-cast2-session-change", d)
            }), g.Ka("yt.mdx.remote.cloudview.instance_", a), c = !0);
            A8("cloudview.createSingleton_: " + c);
            return c
        },
        C8 = function() {
            return g.La("yt.mdx.remote.cloudview.instance_")
        },
        aub = function(a, b) {
            bub(!0);
            $tb(!1);
            kub(a, function(c) {
                c ? (eub(!0), g.Iv("yt-remote-cast2-api-ready")) : (B8("Failed to initialize cast API."), bub(!1), g.dt("yt-remote-cast-available"), g.dt("yt-remote-cast-receiver"), cub());
                b(c)
            })
        },
        A8 = function(a) {
            c8("cloudview", a)
        },
        B8 = function(a) {
            c8("cloudview", a)
        },
        bub = function(a) {
            A8("setCastInstalled_ " + a);
            g.bt("yt-remote-cast-installed", a)
        },
        E8 = function() {
            return !!g.La("yt.mdx.remote.cloudview.apiReady_")
        },
        eub = function(a) {
            A8("setApiReady_ " + a);
            g.Ka("yt.mdx.remote.cloudview.apiReady_", a)
        },
        $tb = function(a) {
            g.Ka("yt.mdx.remote.cloudview.initializing_", a)
        },
        G8 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.K = this.N = 0;
            this.trackData = null;
            this.Gl = this.Yp = !1;
            this.Z = this.G = this.j = this.D = 0;
            this.C = NaN;
            this.B = !1;
            this.reset(a)
        },
        lub = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.Yp = !1;
            a.Gl = !1;
            a.N = 0;
            a.K = g.Xa();
            a.D = 0;
            a.j = 0;
            a.G = 0;
            a.Z = 0;
            a.C = NaN;
            a.B = !1
        },
        H8 = function(a) {
            return a.isPlaying() ? (g.Xa() - a.K) / 1E3 : 0
        },
        I8 = function(a, b) {
            a.N = b;
            a.K = g.Xa()
        },
        J8 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Xa() - a.K) / 1E3 + a.N;
                case -1E3:
                    return 0
            }
            return a.N
        },
        K8 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && lub(a)
        },
        mub = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.Gc(a.trackData);
            b.hasPrevious = a.Yp;
            b.hasNext = a.Gl;
            b.playerTime = a.N;
            b.playerTimeAt = a.K;
            b.seekableStart = a.D;
            b.seekableEnd = a.j;
            b.duration = a.G;
            b.loadedTime = a.Z;
            b.liveIngestionTime = a.C;
            return b
        },
        M8 = function(a, b) {
            g.Fx.call(this);
            var c = this;
            this.C = 0;
            this.D = a;
            this.K = [];
            this.G = new Ssb;
            this.B = this.j = null;
            this.Y = (0, g.Ua)(this.xaa, this);
            this.N = (0, g.Ua)(this.uG, this);
            this.Z = (0, g.Ua)(this.waa, this);
            this.qa = (0, g.Ua)(this.zaa, this);
            var d = 0;
            a ? (d = a.getProxyState(), d != 3 && (a.subscribe("proxyStateChange", this.CT, this), nub(this))) : d = 3;
            d != 0 && (b ? this.CT(d) : g.Kr(function() {
                c.CT(d)
            }, 0));
            (a = iub()) && L8(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.qa)
        },
        N8 = function(a) {
            return new G8(a.D.getPlayerContextData())
        },
        nub = function(a) {
            g.cc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.K.push(this.D.subscribe(b, g.Va(this.Iba, b), this))
            }, a)
        },
        oub = function(a) {
            g.cc(a.K, function(b) {
                this.D.unsubscribeByKey(b)
            }, a);
            a.K.length = 0
        },
        O8 = function(a) {
            return a.getState() == 1
        },
        P8 = function(a, b) {
            var c = a.G;
            c.j.length + c.B.length < 50 && a.G.enqueue(b)
        },
        pub = function(a, b, c) {
            var d = N8(a);
            I8(d, c);
            d.playerState != -1E3 && (d.playerState = b);
            Q8(a, d)
        },
        R8 = function(a, b, c) {
            a.D.sendMessage(b, c)
        },
        Q8 = function(a, b) {
            oub(a);
            a.D.setPlayerContextData(mub(b));
            nub(a)
        },
        L8 = function(a, b) {
            a.B && (a.B.removeUpdateListener(a.Y), a.B.removeMediaListener(a.N), a.uG(null));
            a.B = b;
            a.B && (d8("Setting cast session: " + a.B.sessionId), a.B.addUpdateListener(a.Y), a.B.addMediaListener(a.N), a.B.media.length && a.uG(a.B.media[0]))
        },
        qub = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = N8(a);
                b.contentId != d.videoId && d8("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                I8(d, a.j.getEstimatedTime());
                Q8(a, d)
            } else d8("No cast media video. Ignoring state update.")
        },
        S8 = function(a, b, c) {
            return (0, g.Ua)(function(d) {
                this.gg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.gg("Retrying " + b + " using MDx browser channel."), R8(this, b, c))
            }, a)
        },
        V8 = function(a, b, c, d) {
            d = d === void 0 ? !1 : d;
            g.Fx.call(this);
            var e = this;
            this.K = NaN;
            this.Fa = !1;
            this.Y = this.Z = this.ra = this.Ba = NaN;
            this.qa = [];
            this.G = this.N = this.D = this.j = this.B = null;
            this.Ka = a;
            this.Ma = d;
            this.qa.push(g.Rs(window, "beforeunload", function() {
                e.aA(2)
            }));
            this.C = [];
            this.j = new G8;
            this.Ra = b.id;
            this.Ga = b.idType;
            this.B = ctb(this.Ka, c, this.wV, this.Ga == "shortLived", this.Ra);
            this.B.listen("channelOpened", function() {
                rub(e)
            });
            this.B.listen("channelClosed", function() {
                T8("Channel closed");
                isNaN(e.K) ? p7(!0) : p7();
                e.dispose()
            });
            this.B.listen("channelError", function(f) {
                p7();
                isNaN(e.pF()) ? (f == 1 && e.Ga == "shortLived" && e.publish("browserChannelAuthError", f), T8("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Fa = !0, T8("Channel error: " + f + " with reconnection in " + e.pF() + " ms"), U8(e, 2))
            });
            this.B.listen("channelMessage", function(f) {
                sub(e, f)
            });
            this.B.Ks(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.et() && g.bt("yt-remote-session-video-id", f)
            })
        },
        tub = function(a) {
            return g.Kb(a.C, function(b) {
                return b.type == "LOUNGE_SCREEN"
            })
        },
        T8 = function(a) {
            c8("conn", a)
        },
        U8 = function(a, b) {
            a.publish("proxyStateChange", b)
        },
        uub = function(a) {
            a.K = g.Kr(function() {
                T8("Connecting timeout");
                a.aA(1)
            }, 2E4)
        },
        vub = function(a) {
            g.Mr(a.K);
            a.K = NaN
        },
        wub = function(a) {
            g.Mr(a.Ba);
            a.Ba = NaN
        },
        yub = function(a) {
            xub(a);
            a.ra = g.Kr(function() {
                W8(a, "getNowPlaying")
            }, 2E4)
        },
        xub = function(a) {
            g.Mr(a.ra);
            a.ra = NaN
        },
        rub = function(a) {
            T8("Channel opened");
            a.Fa && (a.Fa = !1, wub(a), a.Ba = g.Kr(function() {
                T8("Timing out waiting for a screen.");
                a.aA(1)
            }, 15E3))
        },
        Aub = function(a, b) {
            var c = null;
            if (b) {
                var d = tub(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ka("yt.mdx.remote.remoteClient_", c);
            b && (vub(a), wub(a));
            c = a.B.LA() && isNaN(a.K);
            b == c ? b && (U8(a, 1), W8(a, "getSubtitlesTrack")) : b ? (a.CY() && a.j.reset(), U8(a, 1), W8(a, "getNowPlaying"), zub(a)) : a.aA(1)
        },
        Bub = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.Bc(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.publish("remotePlayerChange"))
        },
        Cub = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            K8(a.j, d, e);
            a.publish("remoteQueueChange", c)
        },
        Eub = function(a, b) {
            b.params = b.params || {};
            Cub(a, b, "NOW_PLAYING_MAY_CHANGE");
            Dub(a, b);
            a.publish("autoplayDismissed")
        },
        Dub = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            I8(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c;
            c == -1 && a.j.playerState == -1E3 && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.Z = isNaN(c) ? 0 : c;
            a.j.Xo(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.C = d;
            c.B = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.D = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            a.j.playerState == 1 ? yub(a) : xub(a);
            a.publish("remotePlayerChange")
        },
        Fub = function(a, b) {
            if (a.j.playerState != -1E3) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                I8(a.j, isNaN(b) ? 0 : b);
                a.publish("remotePlayerChange")
            }
        },
        Gub = function(a, b) {
            var c = b.params.muted == "true";
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.publish("remotePlayerChange")
        },
        Hub = function(a, b) {
            a.N = b.params.videoId;
            a.publish("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        Iub = function(a, b) {
            a.N = b.params.videoId || null;
            a.publish("autoplayUpNext", a.N)
        },
        Jub = function(a, b) {
            a.G = b.params.autoplayMode;
            a.publish("autoplayModeChange", a.G);
            a.G == "DISABLED" && a.publish("autoplayDismissed")
        },
        Kub = function(a, b) {
            var c = b.params.hasNext == "true";
            a.j.Yp = b.params.hasPrevious == "true";
            a.j.Gl = c;
            a.publish("previousNextChange")
        },
        sub = function(a, b) {
            b = b.message;
            b.params ? T8("Received: action=" + b.action + ", params=" + g.Ci(b.params)) : T8("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = e7(b.params.devices);
                    a.C = g.Al(b, function(d) {
                        return new Dqb(d)
                    });
                    b = !!g.Kb(a.C, function(d) {
                        return d.type == "LOUNGE_SCREEN"
                    });
                    Aub(a, b);
                    b = a.IZ("mlm");
                    a.publish("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.Qb(a.C, function(d) {
                        return d.type == "LOUNGE_SCREEN"
                    });
                    Aub(a, !1);
                    break;
                case "remoteConnected":
                    var c = new Dqb(e7(b.params.device));
                    g.Kb(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    }) || hqb(a.C, c);
                    break;
                case "remoteDisconnected":
                    c = new Dqb(e7(b.params.device));
                    g.Qb(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    Cub(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    Eub(a, b);
                    break;
                case "onStateChange":
                    Dub(a, b);
                    break;
                case "onAdStateChange":
                    Fub(a, b);
                    break;
                case "onVolumeChanged":
                    Gub(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    Bub(a, b);
                    break;
                case "nowAutoplaying":
                    Hub(a, b);
                    break;
                case "autoplayDismissed":
                    a.publish("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    Iub(a, b);
                    break;
                case "onAutoplayModeChanged":
                    Jub(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    Kub(a,
                        b);
                    break;
                case "requestAssistedSignIn":
                    a.publish("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.publish("loopModeChange", b.params.loopMode);
                    break;
                default:
                    T8("Unrecognized action: " + b.action)
            }
        },
        zub = function(a) {
            g.Mr(a.Y);
            a.Y = g.Kr(function() {
                a.aA(1)
            }, 864E5)
        },
        W8 = function(a, b, c) {
            c ? T8("Sending: action=" + b + ", params=" + g.Ci(c)) : T8("Sending: action=" + b);
            a.B.sendMessage(b, c)
        },
        Lub = function(a) {
            h8.call(this, "ScreenServiceProxy");
            this.ih = a;
            this.j = [];
            this.j.push(this.ih.$_s("screenChange", (0, g.Ua)(this.s5, this)));
            this.j.push(this.ih.$_s("onlineScreenChange", (0, g.Ua)(this.qba, this)))
        },
        Qub = function(a, b) {
            Wqb();
            if (!q7 || !q7.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.pr("MDX_CONFIG") || b;
                Nqb();
                Rqb();
                X8 || (X8 = new $7(b ? b.loungeApiHost : void 0), Xqb() && (X8.j = "/api/loungedev"));
                Y8 || (Y8 = g.La("yt.mdx.remote.deferredProxies_") || [], g.Ka("yt.mdx.remote.deferredProxies_", Y8));
                Mub();
                var c = Z8();
                if (!c) {
                    var d = new m8(X8, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ka("yt.mdx.remote.screenService_", d);
                    c = Z8();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ka("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    dub(a, d, function(f) {
                        f ? $8() && F8($8(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            r7("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.La("yt.mdx.remote.initialized_") && (g.Ka("yt.mdx.remote.initialized_", !0), a9("Initializing: " + g.Ci(b)),
                    b9.push(g.Gv("yt-remote-cast2-api-ready", function() {
                        r7("yt-remote-api-ready")
                    })), b9.push(g.Gv("yt-remote-cast2-availability-change", function() {
                        r7("yt-remote-receiver-availability-change")
                    })), b9.push(g.Gv("yt-remote-cast2-receiver-selected", function() {
                        c9(null);
                        r7("yt-remote-auto-connect", "cast-selector-receiver")
                    })), b9.push(g.Gv("yt-remote-cast2-receiver-resumed", function() {
                        r7("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), b9.push(g.Gv("yt-remote-cast2-session-change", Nub)), b9.push(g.Gv("yt-remote-connection-change", function(f) {
                        f ? F8($8(), "YouTube TV") : d9() || (F8(null, null), hub())
                    })), b9.push(g.Gv("yt-remote-cast2-session-failed", function() {
                        r7("yt-remote-connection-failed")
                    })), a = Oub(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.Pr("desktop_enable_autoplay") &&
                    e.push("atp"), e.length > 0 && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), a9(" -- with channel params: " + g.Ci(a)), a ? (g.bt("yt-remote-session-app", a.app), g.bt("yt-remote-session-name", a.name)) : (g.dt("yt-remote-session-app"), g.dt("yt-remote-session-name")), g.Ka("yt.mdx.remote.channelParams_", a), c.start(), $8() || Pub())
            }
        },
        Rub = function() {
            var a = Z8().ih.$_gos();
            var b = e9();
            b && f9() && (Mqb(a, b) || a.push(b));
            return Lqb(a)
        },
        Tub = function() {
            var a = Sub();
            !a && D8() && gub() && (a = {
                key: "cast-selector-receiver",
                name: gub()
            });
            return a
        },
        Sub = function() {
            var a = Rub(),
                b = e9();
            b || (b = d9());
            return g.Kb(a, function(c) {
                return b && k7(b, c.key) ? !0 : !1
            })
        },
        e9 = function() {
            var a = $8();
            if (!a) return null;
            var b = Z8().Dl();
            return m7(b, a)
        },
        Nub = function(a) {
            a9("remote.onCastSessionChange_: " + l7(a));
            if (a) {
                var b = e9();
                if (b && b.id == a.id) {
                    if (F8(b.id, "YouTube TV"), a.idType == "shortLived" && (a = a.token)) g9 && (g9.token = a), (b = f9()) && b.Ks(a)
                } else b && h9(), i9(a, 1)
            } else f9() && h9()
        },
        h9 = function() {
            E8() ? C8().stopSession() : B8("stopSession called before API ready.");
            var a = f9();
            a && (a.disconnect(1), Uub(null))
        },
        Vub = function() {
            var a = f9();
            return !!a && a.getProxyState() != 3
        },
        a9 = function(a) {
            c8("remote", a)
        },
        Z8 = function() {
            if (!Wub) {
                var a = g.La("yt.mdx.remote.screenService_");
                Wub = a ? new Lub(a) : null
            }
            return Wub
        },
        $8 = function() {
            return g.La("yt.mdx.remote.currentScreenId_")
        },
        Xub = function(a) {
            g.Ka("yt.mdx.remote.currentScreenId_", a)
        },
        Yub = function() {
            return g.La("yt.mdx.remote.connectData_")
        },
        c9 = function(a) {
            g.Ka("yt.mdx.remote.connectData_", a)
        },
        f9 = function() {
            return g.La("yt.mdx.remote.connection_")
        },
        Uub = function(a) {
            var b = f9();
            c9(null);
            a || Xub("");
            g.Ka("yt.mdx.remote.connection_", a);
            Y8 && (g.cc(Y8, function(c) {
                c(a)
            }), Y8.length = 0);
            b && !a ? r7("yt-remote-connection-change", !1) : !b && a && r7("yt-remote-connection-change", !0)
        },
        d9 = function() {
            var a = g.et();
            if (!a) return null;
            var b = Z8();
            if (!b) return null;
            b = b.Dl();
            return m7(b, a)
        },
        i9 = function(a, b) {
            $8();
            e9() && e9();
            if (j9) g9 = a;
            else {
                Xub(a.id);
                var c = g.La("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new V8(X8, a, Oub(), c);
                a.connect(b, Yub());
                a.subscribe("beforeDisconnect", function(d) {
                    r7("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    f9() && (f9(), Uub(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = e9();
                    d && d.idType == "shortLived" && (E8() ? C8().handleBrowserChannelAuthError() : B8("refreshLoungeToken called before API ready."))
                });
                Uub(a)
            }
        },
        Pub = function() {
            var a = d9();
            a ? (a9("Resume connection to: " + l7(a)), i9(a, 0)) : (p7(), hub(), a9("Skipping connecting because no session screen found."))
        },
        Mub = function() {
            var a = Oub();
            if (g.Bc(a)) {
                a = o7();
                var b = g.ct("yt-remote-session-name") || "",
                    c = g.ct("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                a.authuser = String(g.pr("SESSION_INDEX", "0"));
                (b = g.pr("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
                g.Ka("yt.mdx.remote.channelParams_", a)
            }
        },
        Oub = function() {
            return g.La("yt.mdx.remote.channelParams_") || {}
        },
        avb = function(a, b, c) {
            g.O.call(this);
            var d = this;
            this.module = a;
            this.J = b;
            this.Ic = c;
            this.events = new g.OE(this);
            this.D = !1;
            this.G = new g.LF(64);
            this.j = new g.fp(this.E2, 500, this);
            this.B = new g.fp(this.F2, 1E3, this);
            this.N = new u7(this.ffa, 0, this);
            this.C = {};
            this.Z = new g.fp(this.C3, 1E3, this);
            this.K = new v7(this.seekTo, 1E3, this);
            this.Y = this.events.T(this.J, "onVolumeChange", function(e) {
                Zub(d, e)
            });
            g.P(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.Zaa);
            this.events.T(b, "captionschanged", this.uaa);
            this.events.T(b, "captionssettingschanged", this.M2);
            this.events.T(b, "videoplayerreset", this.IL);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Ic.PX()
            });
            b.L("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
                $ub(d.module) || k9(d) || l9(d, 0)
            });
            a = this.Ic;
            a.La();
            a.subscribe("proxyStateChange", this.z0, this);
            a.subscribe("remotePlayerChange", this.EG, this);
            a.subscribe("remoteQueueChange", this.IL, this);
            a.subscribe("previousNextChange", this.w0, this);
            a.subscribe("nowAutoplaying", this.s0, this);
            a.subscribe("autoplayDismissed", this.X_, this);
            g.P(this, this.j);
            g.P(this, this.B);
            g.P(this, this.N);
            g.P(this, this.Z);
            g.P(this, this.K);
            this.M2();
            this.IL();
            this.EG()
        },
        Zub = function(a, b) {
            if (k9(a)) {
                a.Ic.unsubscribe("remotePlayerChange", a.EG, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = N8(a.Ic);
                if (c !== d.volume || b !== d.muted) a.Ic.setVolume(c, b), a.Z.start();
                a.Ic.subscribe("remotePlayerChange", a.EG, a)
            }
        },
        bvb = function(a) {
            a.Tc(0);
            a.j.stop();
            a.Ec(new g.LF(64))
        },
        cvb = function(a, b) {
            if (k9(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.J.getSubtitlesUserSettings()
                }, g.Hc(c, b));
                a.Ic.vV(a.J.getVideoData(1).videoId, c);
                a.C = N8(a.Ic).trackData
            }
        },
        l9 = function(a, b) {
            var c = a.J.getPlaylist();
            if (c == null ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.J.getVideoData(1);
            a.Ic.playVideo(c.videoId, b, d, e, c.playerParams, c.Ma, gqb(c));
            a.Ec(new g.LF(1))
        },
        dvb = function(a, b) {
            if (b) {
                var c = a.J.getOption("captions", "tracklist", {
                    rZ: 1
                });
                c && c.length ? (a.J.setOption("captions", "track", b), a.D = !1) : (a.J.loadModule("captions"), a.D = !0)
            } else a.J.setOption("captions", "track", {})
        },
        k9 = function(a) {
            return N8(a.Ic).videoId === a.J.getVideoData(1).videoId
        },
        m9 = function() {
            g.T.call(this, {
                I: "div",
                S: "ytp-mdx-popup-dialog",
                X: {
                    role: "dialog"
                },
                V: [{
                    I: "div",
                    S: "ytp-mdx-popup-dialog-inner-content",
                    V: [{
                        I: "div",
                        S: "ytp-mdx-popup-title",
                        va: "You're signed out"
                    }, {
                        I: "div",
                        S: "ytp-mdx-popup-description",
                        va: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        I: "div",
                        S: "ytp-mdx-privacy-popup-buttons",
                        V: [{
                            I: "button",
                            Na: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            va: "Cancel"
                        }, {
                            I: "button",
                            Na: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            va: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.Dy(this, 250);
            this.cancelButton = this.Ea("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Ea("ytp-mdx-privacy-popup-confirm");
            g.P(this, this.j);
            this.T(this.cancelButton, "click", this.B);
            this.T(this.confirmButton, "click", this.C)
        },
        n9 = function(a) {
            g.T.call(this, {
                I: "div",
                S: "ytp-remote",
                V: [{
                    I: "div",
                    S: "ytp-remote-display-status",
                    V: [{
                        I: "div",
                        S: "ytp-remote-display-status-icon",
                        V: [g.isa()]
                    }, {
                        I: "div",
                        S: "ytp-remote-display-status-text",
                        va: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.Dy(this, 250);
            g.P(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.zd(a.getPlayerStateObject())
        },
        o9 = function(a, b) {
            g.oT.call(this, "Play on", 1, a, b);
            this.J = a;
            this.bv = {};
            this.T(a, "onMdxReceiversChange", this.D);
            this.T(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        evb = function(a) {
            g.XT.call(this, a);
            this.mq = {
                key: Kqb(),
                name: "This computer"
            };
            this.ym = null;
            this.subscriptions = [];
            this.LS = this.Ic = null;
            this.bv = [this.mq];
            this.Mt = this.mq;
            this.Ee = new g.LF(64);
            this.WZ = 0;
            this.wi = -1;
            this.XG = !1;
            this.WG = this.UB = null;
            if (!g.PO(this.player.U()) && !g.hz(this.player.U())) {
                a = this.player;
                var b = g.nR(a);
                b && (b = b.Lm()) && (b = new o9(a, b), g.P(this, b));
                b = new n9(a);
                g.P(this, b);
                g.GR(a, b.element, 4);
                this.UB = new m9;
                g.P(this, this.UB);
                g.GR(a, this.UB.element, 4);
                this.XG = !!d9()
            }
        },
        n$ = function(a) {
            a.WG && (a.player.removeEventListener("presentingplayerstatechange",
                a.WG), a.WG = null)
        },
        fvb = function(a, b, c) {
            a.Ee = c;
            a.player.publish("presentingplayerstatechange", new g.Oy(c, b))
        },
        p$ = function(a, b) {
            if (b.key !== a.Mt.key)
                if (b.key === a.mq.key) h9();
                else if ($ub(a) && gvb(a), a.Mt = b, !a.player.U().L("disable_mdx_connection_in_mdx_module_for_music_web") || !g.hz(a.player.U())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (a.player.getAppState() === 2 || a.player.getAppState() === 1) && a.player.U().L("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.length; l++) h[l] = g.UT(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.Ma,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: f === 0 ? void 0 : f
                    };
                    (d = gqb(d)) && (a.locationInfo = d);
                    d = a
                }
                a9("Connecting to: " + g.Ci(b));
                b.key == "cast-selector-receiver" ? (c9(d || null), b = d || null, E8() ? C8().setLaunchParams(b) : B8("setLaunchParams called before ready.")) : !d && Vub() && $8() == b.key ? r7("yt-remote-connection-change", !0) : (h9(), c9(d || null), d = Z8().Dl(), (b = m7(d, b.key)) && i9(b, 1))
            }
        },
        $ub = function(a) {
            var b = a.player.U();
            return !b.L("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.XG || !a.UB ? !1 : g.bP(b) || g.dP(b)
        },
        gvb = function(a) {
            a.player.getPlayerStateObject().isPlaying() ? a.player.pauseVideo() : (a.WG = function(b) {
                !a.XG && g.Qy(b, 8) && (a.player.pauseVideo(), n$(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.WG));
            a.UB && a.UB.pd();
            f9() || (j9 = !0)
        };
    g.k = h7.prototype;
    g.k.Mm = function() {
        i7(this);
        for (var a = [], b = 0; b < this.j.length; b++) a.push(this.B[this.j[b]]);
        return a
    };
    g.k.Xn = function() {
        i7(this);
        return this.j.concat()
    };
    g.k.has = function(a) {
        return g7(this.B, a)
    };
    g.k.isEmpty = function() {
        return this.size == 0
    };
    g.k.clear = function() {
        this.B = {};
        this.Iv = this.size = this.j.length = 0
    };
    g.k.remove = function(a) {
        return this.delete(a)
    };
    g.k.delete = function(a) {
        return g7(this.B, a) ? (delete this.B[a], --this.size, this.Iv++, this.j.length > 2 * this.size && i7(this), !0) : !1
    };
    g.k.get = function(a, b) {
        return g7(this.B, a) ? this.B[a] : b
    };
    g.k.set = function(a, b) {
        g7(this.B, a) || (this.size += 1, this.j.push(a), this.Iv++);
        this.B[a] = b
    };
    g.k.forEach = function(a, b) {
        for (var c = this.Xn(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    g.k.clone = function() {
        return new h7(this)
    };
    g.k.keys = function() {
        return g.Ap(this.wm(!0)).j()
    };
    g.k.values = function() {
        return g.Ap(this.wm(!1)).j()
    };
    g.k.entries = function() {
        var a = this;
        return zqb(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    g.k.wm = function(a) {
        i7(this);
        var b = 0,
            c = this.Iv,
            d = this,
            e = new g.en;
        e.next = function() {
            if (c != d.Iv) throw Error("The map has changed since the iterator was created");
            if (b >= d.j.length) return g.n1;
            var f = d.j[b++];
            return g.fn(a ? f : d.B[f])
        };
        return e
    };
    var Eqb = {
            tga: "atp",
            Qka: "ska",
            mka: "que",
            yja: "mus",
            Oka: "sus",
            aia: "dsp",
            Bka: "seq",
            pja: "mic",
            oha: "dpa",
            Bga: "cds",
            wja: "mlm",
            mha: "dsdtr",
            Fja: "ntb",
            Fla: "vsp",
            zha: "scn",
            oka: "rpe",
            iha: "dcn",
            jha: "dcp",
            Uja: "pas",
            lha: "drq",
            Kja: "opf",
            yha: "els",
            Gka: "svq",
            xja: "mvp"
        },
        Fqb = {
            Ela: "u",
            Lga: "cl",
            Via: "k",
            sia: "i",
            aha: "cr",
            zja: "m",
            Nha: "g",
            W6: "up"
        },
        Qqb = "",
        q7 = null;
    Yqb.prototype.flush = function(a, b) {
        a = a === void 0 ? [] : a;
        b = b === void 0 ? !1 : b;
        if (g.Pr("enable_client_streamz_web")) {
            a = g.w(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.kfa(c.value), c = {
                serializedIncrementBatch: g.Te(c.j())
            }, g.Ht("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var s7, frb = $qb("loadCastFramework") || $qb("loadCastApplicationFramework"),
        irb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.Ya(u7, g.O);
    g.k = u7.prototype;
    g.k.V4 = function(a) {
        this.D = arguments;
        this.j = !1;
        this.ud ? this.C = g.Xa() + this.cj : this.ud = g.Ne(this.G, this.cj)
    };
    g.k.stop = function() {
        this.ud && (g.Ja.clearTimeout(this.ud), this.ud = null);
        this.C = null;
        this.j = !1;
        this.D = []
    };
    g.k.pause = function() {
        ++this.B
    };
    g.k.resume = function() {
        this.B && (--this.B, !this.B && this.j && (this.j = !1, this.K.apply(null, this.D)))
    };
    g.k.xa = function() {
        this.stop();
        u7.Of.xa.call(this)
    };
    g.k.W4 = function() {
        this.ud && (g.Ja.clearTimeout(this.ud), this.ud = null);
        this.C ? (this.ud = g.Ne(this.G, this.C - g.Xa()), this.C = null) : this.B ? this.j = !0 : (this.j = !1, this.K.apply(null, this.D))
    };
    g.z(v7, g.O);
    g.k = v7.prototype;
    g.k.pN = function(a) {
        this.C = arguments;
        this.ud || this.B ? this.j = !0 : krb(this)
    };
    g.k.stop = function() {
        this.ud && (g.Ja.clearTimeout(this.ud), this.ud = null, this.j = !1, this.C = null)
    };
    g.k.pause = function() {
        this.B++
    };
    g.k.resume = function() {
        this.B--;
        this.B || !this.j || this.ud || (this.j = !1, krb(this))
    };
    g.k.xa = function() {
        g.O.prototype.xa.call(this);
        this.stop()
    };
    w7.prototype.stringify = function(a) {
        return g.Ja.JSON.stringify(a, void 0)
    };
    w7.prototype.parse = function(a) {
        return g.Ja.JSON.parse(a, void 0)
    };
    g.Ya(lrb, g.lb);
    g.Ya(mrb, g.lb);
    var nrb = null;
    g.Ya(prb, g.lb);
    g.Ya(qrb, g.lb);
    g.Ya(rrb, g.lb);
    A7.prototype.debug = function() {};
    A7.prototype.info = function() {};
    A7.prototype.warning = function() {};
    var zrb = {},
        yrb = {};
    g.k = B7.prototype;
    g.k.setTimeout = function(a) {
        this.fb = a
    };
    g.k.Y4 = function(a) {
        a = a.target;
        var b = this.Wa;
        b && g.$i(a) == 3 ? b.pN() : this.ZU(a)
    };
    g.k.ZU = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.$i(this.j),
                    c = this.j.B,
                    d = this.j.getStatus();
                if (!(b < 3) && (b != 3 || this.j && (this.B.B || g.bj(this.j) || g.cj(this.j)))) {
                    this.Ma || b != 4 || c == 7 || (c == 8 || d <= 0 ? x7(3) : x7(2));
                    Crb(this);
                    var e = this.j.getStatus();
                    this.Jb = e;
                    var f = xrb(this);
                    if (this.K = e == 200) {
                        if (this.Ab && !this.Va) {
                            b: {
                                if (this.j) {
                                    var h = g.dj(this.j, "X-HTTP-Initial-Response");
                                    if (h && !g.pb(h)) {
                                        var l = h;
                                        break b
                                    }
                                }
                                l = null
                            }
                            if (a = l) this.Va = !0,
                            Lrb(this, a);
                            else {
                                this.K = !1;
                                this.G = 3;
                                y7(12);
                                D7(this);
                                E7(this);
                                break a
                            }
                        }
                        if (this.Ga) {
                            a = !0;
                            for (var m; !this.Ma && this.N < f.length;)
                                if (m = Arb(this, f), m == yrb) {
                                    b == 4 && (this.G = 4, y7(14), a = !1);
                                    break
                                } else if (m == zrb) {
                                this.G = 4;
                                y7(15);
                                a = !1;
                                break
                            } else Lrb(this, m);
                            wrb(this) && this.N != 0 && (this.B.j = this.B.j.slice(this.N), this.N = 0);
                            b != 4 || f.length != 0 || this.B.B || (this.G = 1, y7(16), a = !1);
                            this.K = this.K && a;
                            a ? f.length > 0 && !this.Kb && (this.Kb = !0, this.C.UR(this)) : (D7(this), E7(this))
                        } else Lrb(this, f);
                        b == 4 && D7(this);
                        this.K && !this.Ma && (b == 4 ? Drb(this.C, this) : (this.K = !1, C7(this)))
                    } else g.aga(this.j), e == 400 && f.indexOf("Unknown SID") >
                        0 ? (this.G = 3, y7(12)) : (this.G = 0, y7(13)), D7(this), E7(this)
                }
            }
        } catch (n) {} finally {}
    };
    g.k.cancel = function() {
        this.Ma = !0;
        D7(this)
    };
    g.k.X4 = function() {
        this.qa = null;
        var a = Date.now();
        a - this.ob >= 0 ? (this.Ra != 2 && (x7(3), y7(17)), D7(this), this.G = 2, E7(this)) : Brb(this, this.ob - a)
    };
    g.k.getLastError = function() {
        return this.G
    };
    g.k.mQ = function() {
        return this.j
    };
    Nrb.prototype.cancel = function() {
        this.C = Prb(this);
        if (this.B) this.B.cancel(), this.B = null;
        else if (this.j && this.j.size !== 0) {
            for (var a = g.w(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = Urb.prototype;
    g.k.aV = 8;
    g.k.Sh = 1;
    g.k.connect = function(a, b, c, d) {
        y7(0);
        this.Tb = a;
        this.Ma = b || {};
        c && d !== void 0 && (this.Ma.OSID = c, this.Ma.OAID = d);
        this.Va = this.wc;
        this.Ka = Irb(this, null, this.Tb);
        I7(this)
    };
    g.k.disconnect = function() {
        Wrb(this);
        if (this.Sh == 3) {
            var a = this.Ya++,
                b = this.Ka.clone();
            g.pk(b, "SID", this.D);
            g.pk(b, "RID", a);
            g.pk(b, "TYPE", "terminate");
            L7(this, b);
            a = new B7(this, this.D, a);
            a.Ra = 2;
            a.Z = c7(b.clone());
            b = !1;
            if (g.Ja.navigator && g.Ja.navigator.sendBeacon) try {
                b = g.Ja.navigator.sendBeacon(a.Z.toString(), "")
            } catch (c) {}!b && g.Ja.Image && ((new Image).src = a.Z, b = !0);
            b || (a.j = vrb(a.C, null), a.j.send(a.Z));
            a.Ba = Date.now();
            C7(a)
        }
        bsb(this)
    };
    g.k.Ng = function() {
        return this.Sh == 0
    };
    g.k.getState = function() {
        return this.Sh
    };
    g.k.cV = function(a) {
        if (this.K)
            if (this.K = null, this.Sh == 1) {
                if (!a) {
                    this.Ya = Math.floor(Math.random() * 1E5);
                    a = this.Ya++;
                    var b = new B7(this, "", a),
                        c = this.Y;
                    this.Jb && (c ? (c = g.Fc(c), g.Hc(c, this.Jb)) : c = this.Jb);
                    this.N !== null || this.ob || (b.Ka = c, c = null);
                    var d;
                    if (this.yb) a: {
                        for (var e = d = 0; e < this.C.length; e++) {
                            b: {
                                var f = this.C[e];
                                if ("__data__" in f.map && (f = f.map.__data__, typeof f === "string")) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (f === void 0) break;d += f;
                            if (d > 4096) {
                                d = e;
                                break a
                            }
                            if (d === 4096 || e === this.C.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = Zrb(this, b, d);
                    e = this.Ka.clone();
                    g.pk(e, "RID", a);
                    g.pk(e, "CVER", 22);
                    this.Ga && g.pk(e, "X-HTTP-Session-Id", this.Ga);
                    L7(this, e);
                    c && (this.ob ? d = "headers=" + g.Rd(g.$ga(c)) + "&" + d : this.N && g.tk(e, this.N, c));
                    Hrb(this.B, b);
                    this.Tf && g.pk(e, "TYPE", "init");
                    this.yb ? (g.pk(e, "$req", d), g.pk(e, "SID", "null"), b.Ab = !0, urb(b, e, null)) : urb(b, e, d);
                    this.Sh = 2
                }
            } else this.Sh == 3 && (a ? $rb(this, a) : this.C.length == 0 || Orb(this.B) || $rb(this))
    };
    g.k.bV = function() {
        this.Z = null;
        asb(this);
        if (this.yc && !(this.fb || this.j == null || this.Wc <= 0)) {
            var a = 2 * this.Wc;
            this.Fa = z7((0, g.Ua)(this.taa, this), a)
        }
    };
    g.k.taa = function() {
        this.Fa && (this.Fa = null, this.Va = !1, this.fb = !0, y7(10), G7(this), asb(this))
    };
    g.k.UR = function(a) {
        this.j == a && this.yc && !this.fb && (Vrb(this), this.fb = !0, y7(11))
    };
    g.k.Z4 = function() {
        this.qa != null && (this.qa = null, G7(this), Frb(this), y7(19))
    };
    g.k.Jea = function(a) {
        a ? y7(2) : y7(1)
    };
    g.k.isActive = function() {
        return !!this.G && this.G.isActive(this)
    };
    g.k = dsb.prototype;
    g.k.gV = function() {};
    g.k.fV = function() {};
    g.k.eV = function() {};
    g.k.dV = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.a5 = function() {};
    g.Ya(N7, g.Vc);
    N7.prototype.open = function() {
        this.j.G = this.C;
        this.K && (this.j.Ra = !0);
        this.j.connect(this.G, this.B || void 0)
    };
    N7.prototype.close = function() {
        this.j.disconnect()
    };
    N7.prototype.send = function(a) {
        var b = this.j;
        if (typeof a === "string") {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.D && (c = {}, c.__data__ = g.Ci(a), a = c);
        b.C.push(new Mrb(b.Rf++, a));
        b.Sh == 3 && I7(b)
    };
    N7.prototype.xa = function() {
        this.j.G = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        N7.Of.xa.call(this)
    };
    g.Ya(fsb, lrb);
    g.Ya(gsb, mrb);
    g.Ya(M7, dsb);
    M7.prototype.gV = function() {
        this.j.dispatchEvent("m")
    };
    M7.prototype.fV = function(a) {
        this.j.dispatchEvent(new fsb(a))
    };
    M7.prototype.eV = function(a) {
        this.j.dispatchEvent(new gsb(a))
    };
    M7.prototype.dV = function() {
        this.j.dispatchEvent("n")
    };
    var P7 = new g.Vc;
    g.z(jsb, g.lb);
    g.k = R7.prototype;
    g.k.Vv = null;
    g.k.jt = !1;
    g.k.nz = null;
    g.k.rN = null;
    g.k.oD = null;
    g.k.xI = null;
    g.k.lD = null;
    g.k.wI = null;
    g.k.Xv = null;
    g.k.uj = null;
    g.k.zI = 0;
    g.k.d3 = null;
    g.k.yI = null;
    g.k.Wv = null;
    g.k.nD = -1;
    g.k.W1 = !0;
    g.k.mD = !1;
    g.k.qN = 0;
    g.k.vI = null;
    var psb = {},
        osb = {};
    g.k = R7.prototype;
    g.k.setTimeout = function(a) {
        this.B = a
    };
    g.k.c5 = function(a) {
        a = a.target;
        var b = this.vI;
        b && g.$i(a) == 3 ? b.pN() : this.hV(a)
    };
    g.k.hV = function(a) {
        try {
            if (a == this.uj) a: {
                var b = g.$i(this.uj),
                    c = this.uj.B,
                    d = this.uj.getStatus();
                if (g.lc && !g.kc("420+")) {
                    if (b < 4) break a
                } else if (b < 3 || b == 3 && !g.bj(this.uj)) break a;this.mD || b != 4 || c == 7 || (c == 8 || d <= 0 ? this.j.xs(3) : this.j.xs(2));ssb(this);
                var e = this.uj.getStatus();this.nD = e;
                var f = g.bj(this.uj);
                if (this.jt = e == 200) {
                    b == 4 && S7(this);
                    if (this.Ga) {
                        for (a = !0; !this.mD && this.zI < f.length;) {
                            var h = qsb(this, f);
                            if (h == osb) {
                                b == 4 && (this.Wv = 4, Q7(15), a = !1);
                                break
                            } else if (h == psb) {
                                this.Wv = 4;
                                Q7(16);
                                a = !1;
                                break
                            } else usb(this,
                                h)
                        }
                        b == 4 && f.length == 0 && (this.Wv = 1, Q7(17), a = !1);
                        this.jt = this.jt && a;
                        a || (S7(this), tsb(this))
                    } else usb(this, f);
                    this.jt && !this.mD && (b == 4 ? this.j.uN(this) : (this.jt = !1, nsb(this)))
                } else e == 400 && f.indexOf("Unknown SID") > 0 ? (this.Wv = 3, Q7(13)) : (this.Wv = 0, Q7(14)),
                S7(this),
                tsb(this)
            }
        } catch (l) {} finally {}
    };
    g.k.cancel = function() {
        this.mD = !0;
        S7(this)
    };
    g.k.b5 = function() {
        this.nz = null;
        var a = Date.now();
        a - this.rN >= 0 ? (this.xI != 2 && this.j.xs(3), S7(this), this.Wv = 2, Q7(18), tsb(this)) : rsb(this, this.rN - a)
    };
    g.k.getLastError = function() {
        return this.Wv
    };
    g.k = xsb.prototype;
    g.k.tN = null;
    g.k.il = null;
    g.k.hM = !1;
    g.k.vN = null;
    g.k.im = null;
    g.k.ir = -1;
    g.k.AI = null;
    g.k.lE = null;
    g.k.connect = function(a) {
        this.vN = a;
        a = U7(this.j, null, this.vN);
        Q7(3);
        Date.now();
        var b = this.j.Y;
        b != null ? (this.AI = b[0], (this.lE = b[1]) ? (this.im = 1, ysb(this)) : (this.im = 2, zsb(this))) : (d7(a, "MODE", "init"), this.il = new R7(this), this.il.Vv = this.tN, msb(this.il, a, !1, null, !0), this.im = 0)
    };
    g.k.t7 = function(a) {
        if (a) this.im = 2, zsb(this);
        else {
            Q7(4);
            var b = this.j;
            b.vp = b.Jt.ir;
            Y7(b, 9)
        }
        a && this.xs(2)
    };
    g.k.sN = function(a) {
        return this.j.sN(a)
    };
    g.k.abort = function() {
        this.il && (this.il.cancel(), this.il = null);
        this.ir = -1
    };
    g.k.Ng = function() {
        return !1
    };
    g.k.iV = function(a, b) {
        this.ir = a.nD;
        if (this.im == 0)
            if (b) {
                try {
                    var c = this.B.parse(b)
                } catch (d) {
                    a = this.j;
                    a.vp = this.ir;
                    Y7(a, 2);
                    return
                }
                this.AI = c[0];
                this.lE = c[1]
            } else a = this.j, a.vp = this.ir, Y7(a, 2);
        else this.im == 2 && (this.hM ? (Q7(7), Date.now()) : b == "11111" ? (Q7(6), this.hM = !0, Date.now(), this.ir = 200, this.il.cancel(), Q7(12), V7(this.j, this, !0)) : (Q7(8), Date.now(), this.hM = !1))
    };
    g.k.uN = function() {
        this.ir = this.il.nD;
        if (this.il.jt) this.im == 0 ? this.lE ? (this.im = 1, ysb(this)) : (this.im = 2, zsb(this)) : this.im == 2 && (this.hM ? (Q7(12), V7(this.j, this, !0)) : (Q7(11), V7(this.j, this, !1)));
        else {
            this.im == 0 ? Q7(9) : this.im == 2 && Q7(10);
            var a = this.j;
            this.il.getLastError();
            a.vp = this.ir;
            Y7(a, 2)
        }
    };
    g.k.pD = function() {
        return this.j.pD()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.xs = function(a) {
        this.j.xs(a)
    };
    g.k = Asb.prototype;
    g.k.tp = null;
    g.k.qD = null;
    g.k.yk = null;
    g.k.Wg = null;
    g.k.xN = null;
    g.k.BI = null;
    g.k.jV = null;
    g.k.wN = null;
    g.k.rD = 0;
    g.k.e5 = 0;
    g.k.Si = null;
    g.k.kt = null;
    g.k.jr = null;
    g.k.Zv = null;
    g.k.Jt = null;
    g.k.dN = null;
    g.k.qz = -1;
    g.k.kV = -1;
    g.k.vp = -1;
    g.k.pz = 0;
    g.k.oz = 0;
    g.k.Yv = 8;
    g.Ya(Csb, g.lb);
    g.Ya(Dsb, g.lb);
    g.k = Asb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        Q7(0);
        this.xN = b;
        this.qD = c || {};
        d && e !== void 0 && (this.qD.OSID = d, this.qD.OAID = e);
        this.Z ? (O7((0, g.Ua)(this.zX, this, a), 100), Fsb(this)) : this.zX(a)
    };
    g.k.disconnect = function() {
        Gsb(this);
        if (this.j == 3) {
            var a = this.rD++,
                b = this.BI.clone();
            g.pk(b, "SID", this.D);
            g.pk(b, "RID", a);
            g.pk(b, "TYPE", "terminate");
            X7(this, b);
            a = new R7(this, this.D, a);
            a.xI = 2;
            a.lD = c7(b.clone());
            (new Image).src = a.lD.toString();
            a.oD = Date.now();
            nsb(a)
        }
        Qsb(this)
    };
    g.k.zX = function(a) {
        this.Jt = new xsb(this);
        this.Jt.tN = this.tp;
        this.Jt.B = this.G;
        this.Jt.connect(a)
    };
    g.k.Ng = function() {
        return this.j == 0
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.mV = function(a) {
        this.kt = null;
        Lsb(this, a)
    };
    g.k.lV = function() {
        this.jr = null;
        this.Wg = new R7(this, this.D, "rpc", this.N);
        this.Wg.Vv = this.tp;
        this.Wg.qN = 0;
        var a = this.jV.clone();
        g.pk(a, "RID", "rpc");
        g.pk(a, "SID", this.D);
        g.pk(a, "CI", this.dN ? "0" : "1");
        g.pk(a, "AID", this.qz);
        X7(this, a);
        g.pk(a, "TYPE", "xmlhttp");
        msb(this.Wg, a, !0, this.wN, !1)
    };
    g.k.iV = function(a, b) {
        if (this.j != 0 && (this.Wg == a || this.yk == a))
            if (this.vp = a.nD, this.yk == a && this.j == 3)
                if (this.Yv > 7) {
                    try {
                        var c = this.G.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && c.length == 3)
                        if (a = c, a[0] == 0) a: {
                            if (!this.jr) {
                                if (this.Wg)
                                    if (this.Wg.oD + 3E3 < this.yk.oD) W7(this), this.Wg.cancel(), this.Wg = null;
                                    else break a;
                                Osb(this);
                                Q7(19)
                            }
                        }
                    else this.kV = a[1], 0 < this.kV - this.qz && a[2] < 37500 && this.dN && this.oz == 0 && !this.Zv && (this.Zv = O7((0, g.Ua)(this.f5, this), 6E3));
                    else Y7(this, 11)
                } else b != null && Y7(this, 11);
        else if (this.Wg ==
            a && W7(this), !g.pb(b))
            for (a = this.G.parse(b), b = 0; b < a.length; b++) c = a[b], this.qz = c[0], c = c[1], this.j == 2 ? c[0] == "c" ? (this.D = c[1], this.wN = c[2], c = c[3], c != null ? this.Yv = c : this.Yv = 6, this.j = 3, this.Si && this.Si.pV(), this.jV = U7(this, this.pD() ? this.wN : null, this.xN), Msb(this)) : c[0] == "stop" && Y7(this, 7) : this.j == 3 && (c[0] == "stop" ? Y7(this, 7) : c[0] != "noop" && this.Si && this.Si.oV(c), this.oz = 0)
    };
    g.k.f5 = function() {
        this.Zv != null && (this.Zv = null, this.Wg.cancel(), this.Wg = null, Osb(this), Q7(20))
    };
    g.k.uN = function(a) {
        if (this.Wg == a) {
            W7(this);
            this.Wg = null;
            var b = 2
        } else if (this.yk == a) this.yk = null, b = 1;
        else return;
        this.vp = a.nD;
        if (this.j != 0)
            if (a.jt)
                if (b == 1) {
                    b = a.Xv ? a.Xv.length : 0;
                    a = Date.now() - a.oD;
                    var c = P7;
                    c.dispatchEvent(new Csb(c, b, a, this.pz));
                    Esb(this);
                    this.C.length = 0
                } else Msb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = c == 3 || c == 7 || c == 0 && this.vp > 0)) {
                if (d = b == 1) this.yk || this.kt || this.j == 1 || this.pz >= 2 ? d = !1 : (this.kt = O7((0, g.Ua)(this.mV, this, a), Nsb(this, this.pz)), this.pz++, d = !0);
                d = !(d || b == 2 && Osb(this))
            }
            if (d) switch (c) {
                case 1:
                    Y7(this,
                        5);
                    break;
                case 4:
                    Y7(this, 10);
                    break;
                case 3:
                    Y7(this, 6);
                    break;
                case 7:
                    Y7(this, 12);
                    break;
                default:
                    Y7(this, 2)
            }
        }
    };
    g.k.d5 = function(a) {
        if (!g.Mb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.Iea = function(a) {
        a ? Q7(2) : (Q7(1), Psb(this, 8))
    };
    g.k.sN = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.Xi;
        a.K = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Si && this.Si.isActive(this)
    };
    g.k.xs = function(a) {
        var b = P7;
        b.dispatchEvent(new Dsb(b, a))
    };
    g.k.pD = function() {
        return !1
    };
    g.k = Rsb.prototype;
    g.k.pV = function() {};
    g.k.oV = function() {};
    g.k.nV = function() {};
    g.k.yN = function() {};
    g.k.qV = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = Ssb.prototype;
    g.k.enqueue = function(a) {
        this.B.push(a)
    };
    g.k.isEmpty = function() {
        return this.j.length === 0 && this.B.length === 0
    };
    g.k.clear = function() {
        this.j = [];
        this.B = []
    };
    g.k.contains = function(a) {
        return g.Mb(this.j, a) || g.Mb(this.B, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.Z8a)(b, a);
        c >= 0 ? (g.Nb(b, c), b = !0) : b = !1;
        return b || g.Pb(this.B, a)
    };
    g.k.Mm = function() {
        for (var a = [], b = this.j.length - 1; b >= 0; --b) a.push(this.j[b]);
        var c = this.B.length;
        for (b = 0; b < c; ++b) a.push(this.B[b]);
        return a
    };
    g.z(Tsb, g.lb);
    g.z(Usb, g.lb);
    g.Ya(Z7, g.O);
    g.k = Z7.prototype;
    g.k.xca = function() {
        this.cj = Math.min(3E5, this.cj * 2);
        this.C();
        this.B && this.start()
    };
    g.k.start = function() {
        var a = this.cj + 15E3 * Math.random();
        g.gp(this.j, a);
        this.B = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.B = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.cj = 5E3
    };
    g.Ya(Wsb, Rsb);
    g.k = Wsb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.C.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.C.unsubscribe(a, b, c)
    };
    g.k.uh = function(a) {
        return this.C.uh(a)
    };
    g.k.publish = function(a, b) {
        return this.C.publish.apply(this.C, arguments)
    };
    g.k.dispose = function() {
        this.qa || (this.qa = !0, g.fb(this.C), this.disconnect(), g.fb(this.B), this.B = null, this.ra = function() {
            return ""
        })
    };
    g.k.La = function() {
        return this.qa
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || this.j.getState() != 2) {
            this.Y = "";
            this.B.stop();
            this.K = a || null;
            this.G = b || 0;
            a = this.Ba + "/test";
            b = this.Ba + "/bind";
            var d = new Asb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Ra),
                e = this.j;
            e && (e.Si = null);
            d.Si = this;
            this.j = d;
            Xsb(this);
            if (this.j) {
                d = g.pr("ID_TOKEN");
                var f = this.j.tp || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.tp = f
            }
            e ? (e.getState() != 3 && Isb(e) == 0 || e.getState(), this.j.connect(a, b, this.N, e.D, e.qz)) : c ? this.j.connect(a,
                b, this.N, c.sessionId, c.arrayId) : this.j.connect(a, b, this.N)
        }
    };
    g.k.disconnect = function(a) {
        this.Z = a || 0;
        this.B.stop();
        Xsb(this);
        this.j && (this.j.getState() == 3 && Lsb(this.j), this.j.disconnect());
        this.Z = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.Hc(a, b);
        this.B.isActive() || (this.j ? this.j.getState() : 0) == 2 ? this.D.push(a) : this.LA() && (Xsb(this), Hsb(this.j, a))
    };
    g.k.pV = function() {
        this.B.reset();
        this.K = null;
        this.G = 0;
        if (this.D.length) {
            var a = this.D;
            this.D = [];
            for (var b = 0, c = a.length; b < c; ++b) Hsb(this.j, a[b])
        }
        this.publish("handlerOpened");
        qqb(this.Ka, "BROWSER_CHANNEL")
    };
    g.k.nV = function(a) {
        var b = a == 2 && this.j.vp == 401;
        a == 4 || b || this.B.start();
        this.publish("handlerError", a, b);
        wqb(this.Ga, "BROWSER_CHANNEL")
    };
    g.k.yN = function(a, b) {
        if (!this.B.isActive()) this.publish("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.D.push(e)
            }
        sqb(this.Fa, "BROWSER_CHANNEL");
        a && this.Wa.j.AN("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.Ya.j.AN("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.qV = function() {
        var a = {
            v: 2
        };
        this.Y && (a.gsessionid = this.Y);
        this.G != 0 && (a.ui = "" + this.G);
        this.Z != 0 && (a.ui = "" + this.Z);
        this.K && g.Hc(a, this.K);
        return a
    };
    g.k.oV = function(a) {
        a[0] == "S" ? this.Y = a[1] : a[0] == "gracefulReconnect" ? (this.B.start(), this.j.disconnect()) : this.publish("handlerMessage", new Vsb(a[0], a[1]));
        uqb(this.Ma, "BROWSER_CHANNEL")
    };
    g.k.LA = function() {
        return !!this.j && this.j.getState() == 3
    };
    g.k.Ks = function(a) {
        (this.N.loungeIdToken = a) || this.B.stop();
        if (this.Va && this.j) {
            var b = this.j.tp || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.tp = b
        }
    };
    g.k.getDeviceId = function() {
        return this.N.id
    };
    g.k.au = function() {
        return this.B.isActive() ? this.B.B - Date.now() : NaN
    };
    g.k.Dy = function() {
        var a = this.B;
        g.hp(a.j);
        a.start()
    };
    g.k.Nda = function() {
        this.B.isActive();
        Isb(this.j) == 0 && this.connect(this.K, this.G)
    };
    $7.prototype.sendRequest = function(a, b, c, d, e, f, h) {
        a = {
            format: f ? "RAW" : "JSON",
            method: a,
            context: this,
            timeout: 5E3,
            withCredentials: !!h,
            onSuccess: g.Va(this.D, d, !f),
            onError: g.Va(this.C, e),
            onTimeout: g.Va(this.G, e)
        };
        c && (a.postParams = c, a.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return g.Ur(b, a)
    };
    $7.prototype.D = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    $7.prototype.C = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    $7.prototype.G = function(a) {
        a(Error("request timed out"))
    };
    g.z(Ysb, g.Vc);
    g.k = Ysb.prototype;
    g.k.connect = function(a, b, c) {
        this.Hd.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Hd.disconnect(a)
    };
    g.k.Dy = function() {
        this.Hd.Dy()
    };
    g.k.getDeviceId = function() {
        return this.Hd.getDeviceId()
    };
    g.k.au = function() {
        return this.Hd.au()
    };
    g.k.LA = function() {
        return this.Hd.LA()
    };
    g.k.g5 = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Hd,
            b = this.j;
        g.bt("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.dN,
            sessionId: a.j.D,
            arrayId: a.j.qz
        });
        g.bt("yt-remote-session-screen-id", b);
        a = n7();
        b = o7();
        g.Mb(a, b) || a.push(b);
        Pqb(a);
        Rqb()
    };
    g.k.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.onMessage = function(a) {
        this.dispatchEvent(new Tsb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new Usb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Hd.sendMessage(a, b)
    };
    g.k.Ks = function(a) {
        this.Hd.Ks(a)
    };
    g.k.dispose = function() {
        this.Hd.dispose()
    };
    g.k = Zsb.prototype;
    g.k.connect = function(a, b) {
        a = a === void 0 ? {} : a;
        b = b === void 0 ? 0 : b;
        this.K !== 2 && (this.C.stop(), this.Z = a, this.N = b, atb(this), (a = g.pr("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"], this.j && (this.B.device = this.j.device, this.B.name = this.j.name, this.B.app = this.j.app, this.B.id = this.j.id, this.j.J$ && (this.B.mdxVersion = "" + this.j.J$), this.j.theme && (this.B.theme = this.j.theme), this.j.capabilities && (this.B.capabilities = this.j.capabilities), this.j.K7 && (this.B.cst = this.j.K7),
            this.j.authuser && (this.B.authuser = this.j.authuser), this.j.pageId && (this.B.pageId = this.j.pageId)), this.N !== 0 ? this.B.ui = "" + this.N : delete this.B.ui, Object.assign(this.B, this.Z), this.channel = new N7(this.pathPrefix, {
            Y9: "gsessionid",
            N$: this.D,
            O$: this.B
        }), this.channel.open(), this.K = 2, $sb(this))
    };
    g.k.disconnect = function(a) {
        this.Y = a === void 0 ? 0 : a;
        this.C.stop();
        atb(this);
        this.channel && (this.Y !== 0 ? this.B.ui = "" + this.Y : delete this.B.ui, this.channel.close());
        this.Y = 0
    };
    g.k.au = function() {
        return this.C.isActive() ? this.C.B - Date.now() : NaN
    };
    g.k.Dy = function() {
        var a = this.C;
        g.hp(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (atb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.Ks = function(a) {
        a || this.C.stop();
        a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"]
    };
    g.k.getDeviceId = function() {
        return this.j ? this.j.id : ""
    };
    g.k.publish = function(a) {
        return this.G.publish.apply(this.G, [a].concat(g.x(g.Ca.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.G.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.G.unsubscribe(a, b, c)
    };
    g.k.uh = function(a) {
        return this.G.uh(a)
    };
    g.k.dispose = function() {
        this.qa || (this.qa = !0, g.fb(this.G), this.disconnect(), g.fb(this.C), this.Ba = function() {
            return ""
        })
    };
    g.k.La = function() {
        return this.qa
    };
    g.z(btb, g.Vc);
    g.k = btb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.Dy = function() {
        this.j.Dy()
    };
    g.k.getDeviceId = function() {
        return this.j.getDeviceId()
    };
    g.k.au = function() {
        return this.j.au()
    };
    g.k.LA = function() {
        return this.j.K === 3
    };
    g.k.i5 = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.onMessage = function(a) {
        this.dispatchEvent(new Tsb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new Usb(this.j.Ag === 401 ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.Ks = function(a) {
        this.j.Ks(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var jtb = Date.now(),
        b8 = null,
        f8 = Array(50),
        e8 = -1,
        g8 = !1;
    g.Ya(h8, g.Fx);
    h8.prototype.Dl = function() {
        return this.screens
    };
    h8.prototype.contains = function(a) {
        return !!Mqb(this.screens, a)
    };
    h8.prototype.get = function(a) {
        return a ? m7(this.screens, a) : null
    };
    h8.prototype.info = function(a) {
        c8(this.K, a)
    };
    g.z(ntb, g.Fx);
    g.k = ntb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.ud) && this.d1()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.ud) || (g.Mr(this.ud), this.ud = NaN)
    };
    g.k.xa = function() {
        this.stop();
        g.Fx.prototype.xa.call(this)
    };
    g.k.d1 = function() {
        this.ud = NaN;
        this.j = g.Ur(a8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.N
            },
            timeout: 5E3,
            onSuccess: (0, g.Ua)(this.k5, this),
            onError: (0, g.Ua)(this.j5, this),
            onTimeout: (0, g.Ua)(this.l5, this)
        })
    };
    g.k.k5 = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.D;
        a.name = this.K;
        b = -1;
        this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.publish("pairingComplete", new j7(a), b)
    };
    g.k.j5 = function(a) {
        this.j = null;
        a.status && a.status == 404 ? this.B >= hvb.length ? this.publish("pairingFailed", Error("DIAL polling timed out")) : (a = hvb[this.B], this.ud = g.Kr((0, g.Ua)(this.d1, this), a), this.B++) : this.publish("pairingFailed", Error("Server error " + a.status))
    };
    g.k.l5 = function() {
        this.j = null;
        this.publish("pairingFailed", Error("Server not responding"))
    };
    var hvb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Ya(j8, h8);
    g.k = j8.prototype;
    g.k.start = function() {
        i8(this) && this.publish("screenChange");
        !g.ct("yt-remote-lounge-token-expiration") && otb(this);
        g.Mr(this.j);
        this.j = g.Kr((0, g.Ua)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        i8(this);
        ktb(this, a);
        k8(this, !1);
        this.publish("screenChange");
        b(a);
        a.token || otb(this)
    };
    g.k.remove = function(a, b) {
        var c = i8(this);
        mtb(this, a) && (k8(this, !1), c = !0);
        b(a);
        c && this.publish("screenChange")
    };
    g.k.cN = function(a, b, c, d) {
        var e = i8(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, k8(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.publish("screenChange")
    };
    g.k.xa = function() {
        g.Mr(this.j);
        j8.Of.xa.call(this)
    };
    g.k.y9 = function(a) {
        i8(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        k8(this, !b);
        b && c8(this.K, "Missed " + b + " lounge tokens.")
    };
    g.k.x9 = function(a) {
        c8(this.K, "Requesting lounge tokens failed: " + a)
    };
    g.z(qtb, g.Fx);
    g.k = qtb.prototype;
    g.k.start = function() {
        var a = parseInt(g.ct("yt-remote-fast-check-period") || "0", 10);
        (this.D = g.Xa() - 144E5 < a ? 0 : a) ? l8(this): (this.D = g.Xa() + 3E5, g.bt("yt-remote-fast-check-period", this.D), this.gT())
    };
    g.k.isEmpty = function() {
        return g.Bc(this.j)
    };
    g.k.update = function() {
        ptb("Updating availability on schedule.");
        var a = this.K(),
            b = g.rc(this.j, function(c, d) {
                return c && !!m7(a, d)
            }, this);
        ttb(this, b)
    };
    g.k.xa = function() {
        g.Mr(this.C);
        this.C = NaN;
        this.B && (this.B.abort(), this.B = null);
        g.Fx.prototype.xa.call(this)
    };
    g.k.gT = function() {
        g.Mr(this.C);
        this.C = NaN;
        this.B && this.B.abort();
        var a = utb(this);
        if (iqb(a)) {
            var b = a8(this.G, "/pairing/get_screen_availability");
            this.B = this.G.sendRequest("POST", b, {
                lounge_token: g.xc(a).join(",")
            }, (0, g.Ua)(this.fca, this, a), (0, g.Ua)(this.eca, this))
        } else ttb(this, {}), l8(this)
    };
    g.k.fca = function(a, b) {
        this.B = null;
        var c = g.xc(utb(this));
        if (g.ac(c, g.xc(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = b[e].status == "online";
            ttb(this, c);
            l8(this)
        } else this.gg("Changing Screen set during request."), this.gT()
    };
    g.k.eca = function(a) {
        this.gg("Screen availability failed: " + a);
        this.B = null;
        l8(this)
    };
    g.k.gg = function(a) {
        c8("OnlineScreenService", a)
    };
    g.Ya(m8, h8);
    g.k = m8.prototype;
    g.k.start = function() {
        this.B.start();
        this.j.start();
        this.screens.length && (this.publish("screenChange"), this.j.isEmpty() || this.publish("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.B.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.B.remove(a, b, c);
        this.j.update()
    };
    g.k.cN = function(a, b, c, d) {
        this.B.contains(a) ? this.B.cN(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, c8(this.K, a), d(Error(a)))
    };
    g.k.Dl = function(a) {
        return a ? this.screens : g.Sb(this.screens, g.kn(this.C, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.rV = function() {
        return g.kn(this.Dl(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.sV = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new ntb(this.D, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.fb(l);
            e(n8(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.fb(l);
            f(m)
        });
        l.start();
        return (0, g.Ua)(l.stop, l)
    };
    g.k.m5 = function(a, b, c, d) {
        g.Ur(a8(this.D, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.Ua)(function(e, f) {
                e = new j7(f.screen || {});
                if (!e.name || ytb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); ytb(this, l);) {
                            h++;
                            if (h > 20) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(n8(this, e))
            }, this),
            onError: (0, g.Ua)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.Ua)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.xa = function() {
        g.fb(this.B);
        g.fb(this.j);
        m8.Of.xa.call(this)
    };
    g.k.I9 = function() {
        Atb(this);
        this.publish("screenChange");
        this.j.update()
    };
    m8.prototype.dispose = m8.prototype.dispose;
    g.Ya(o8, g.Fx);
    g.k = o8.prototype;
    g.k.Kj = function(a) {
        this.La() || (a && (q8(this, "" + a), this.publish("sessionFailed")), this.j = null, this.publish("sessionScreen", null))
    };
    g.k.info = function(a) {
        c8(this.Ga, a)
    };
    g.k.tV = function() {
        return null
    };
    g.k.yT = function(a) {
        var b = this.B;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.Ua)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.Ua)(function() {
            q8(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.xa = function() {
        this.yT("");
        o8.Of.xa.call(this)
    };
    g.z(r8, o8);
    g.k = r8.prototype;
    g.k.wT = function(a) {
        if (this.C) {
            if (this.C == a) return;
            q8(this, "Overriding cast session with new session object");
            Mtb(this);
            this.Ba = !1;
            this.Y = "unknown";
            this.C.removeUpdateListener(this.ra);
            this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa)
        }
        this.C = a;
        this.C.addUpdateListener(this.ra);
        this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa);
        Htb(this, "getMdxSessionStatus")
    };
    g.k.aB = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Ci(a))
    };
    g.k.stop = function() {
        this.C ? this.C.stop((0, g.Ua)(function() {
            this.Kj()
        }, this), (0, g.Ua)(function() {
            this.Kj(Error("Failed to stop receiver app."))
        }, this)) : this.Kj(Error("Stopping cast device without session."))
    };
    g.k.yT = function() {};
    g.k.xa = function() {
        this.info("disposeInternal");
        Mtb(this);
        this.C && (this.C.removeUpdateListener(this.ra), this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa));
        this.C = null;
        o8.prototype.xa.call(this)
    };
    g.k.Kca = function(a, b) {
        if (!this.La())
            if (b)
                if (b = e7(b), g.Qa(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Ci(b)), a) {
                    case "mdxSessionStatus":
                        Etb(this, b);
                        break;
                    case "loungeToken":
                        Itb(this, b);
                        break;
                    default:
                        q8(this, "Unknown youtube message: " + a)
                } else q8(this, "Unable to parse message.");
                else q8(this, "No data in message.")
    };
    g.k.HY = function(a, b, c, d) {
        g.Mr(this.Z);
        this.Z = 0;
        xtb(this.D, this.B.label, a, this.B.friendlyName, (0, g.Ua)(function(e) {
            e ? b(e) : d >= 0 ? (q8(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.Z = g.Kr((0, g.Ua)(this.HY, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.tV = function() {
        return this.C
    };
    g.k.n5 = function(a) {
        this.La() || a || (q8(this, "Cast session died."), this.Kj())
    };
    g.z(s8, o8);
    g.k = s8.prototype;
    g.k.wT = function(a) {
        this.C = a;
        this.C.addUpdateListener(this.Ma)
    };
    g.k.aB = function(a) {
        this.Ka = a;
        this.qa()
    };
    g.k.stop = function() {
        Utb(this);
        this.C ? this.C.stop((0, g.Ua)(this.Kj, this, null), (0, g.Ua)(this.Kj, this, "Failed to stop DIAL device.")) : this.Kj()
    };
    g.k.xa = function() {
        Utb(this);
        this.C && this.C.removeUpdateListener(this.Ma);
        this.C = null;
        o8.prototype.xa.call(this)
    };
    g.k.o5 = function(a) {
        this.La() || a || (q8(this, "DIAL session died."), this.G(), this.G = function() {}, this.Kj())
    };
    g.z(v8, o8);
    v8.prototype.stop = function() {
        this.Kj()
    };
    v8.prototype.wT = function() {};
    v8.prototype.aB = function() {
        g.Mr(this.C);
        this.C = NaN;
        var a = m7(this.D.Dl(), this.B.label);
        a ? p8(this, a) : this.Kj(Error("No such screen"))
    };
    v8.prototype.xa = function() {
        g.Mr(this.C);
        this.C = NaN;
        o8.prototype.xa.call(this)
    };
    g.z(w8, g.Fx);
    g.k = w8.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.Z, [chrome.cast.Capability.AUDIO_OUT]);
        g.Pr("desktop_enable_cast_connect") && (c.androidReceiverCompatible = !0);
        this.Y || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.K ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.Ua)(this.Nba, this);
        c = new chrome.cast.ApiConfig(c, (0, g.Ua)(this.B0,
            this), e, d, a);
        c.customDialLaunchCallback = (0, g.Ua)(this.Gaa, this);
        chrome.cast.initialize(c, (0, g.Ua)(function() {
            this.La() || (chrome.cast.addReceiverActionListener(this.G), gtb(), this.B.subscribe("onlineScreenChange", (0, g.Ua)(this.uV, this)), this.C = Xtb(this), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.Ua)(function(f) {
                this.gg("Failed to set initial custom receivers: " + g.Ci(f))
            }, this)), this.publish("yt-remote-cast2-availability-change", y8(this)), b(!0))
        }, this), (0, g.Ua)(function(f) {
            this.gg("Failed to initialize API: " +
                g.Ci(f));
            b(!1)
        }, this))
    };
    g.k.Zda = function(a, b) {
        x8("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) x8("Unsetting old screen status: " + this.j.B.friendlyName), z8(this, null)
        }
        if (a && b) {
            if (!this.j) {
                a = m7(this.B.Dl(), a);
                if (!a) {
                    x8("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if (a.idType == "shortLived") {
                    x8("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                c = Vtb(this, a);
                c || (x8("setConnectedScreenStatus: Connected receiver not custom..."), c = new chrome.cast.Receiver(a.uuid ?
                    a.uuid : a.id, a.name), c.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(c), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.Ua)(function(d) {
                    this.gg("Failed to set initial custom receivers: " + g.Ci(d))
                }, this)));
                x8("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
                z8(this, new v8(this.B, c), !0)
            }
            this.j.yT(b)
        } else x8("setConnectedScreenStatus: no screen.")
    };
    g.k.cea = function(a) {
        this.La() ? this.gg("Setting connection data on disposed cast v2") : this.j ? this.j.aB(a) : this.gg("Setting connection data without a session")
    };
    g.k.q5 = function() {
        this.La() ? this.gg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), z8(this, null)) : x8("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.Ua)(this.B0, this), (0, g.Ua)(this.ica, this))
    };
    g.k.xa = function() {
        this.B.unsubscribe("onlineScreenChange", (0, g.Ua)(this.uV, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G);
        var a = dtb,
            b = g.La("yt.mdx.remote.debug.handlers_");
        g.Pb(b || [], a);
        g.fb(this.j);
        g.Fx.prototype.xa.call(this)
    };
    g.k.gg = function(a) {
        c8("Controller", a)
    };
    g.k.D0 = function(a, b) {
        this.j == a && (b || z8(this, null), this.publish("yt-remote-cast2-session-change", b))
    };
    g.k.Kba = function(a, b) {
        if (!this.La())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), x8("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.B.label != a.label) x8("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName), this.j.stop();
                        else {
                            x8("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.publish("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            z8(this,
                                new v8(this.B, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            z8(this, new s8(this.B, a, this.D, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            z8(this, new r8(this.B, a, this.config_));
                            break;
                        default:
                            this.gg("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.B.label == a.label ? this.j.stop() : this.gg("Stopping receiver w/o session: " + a.friendlyName)
            } else this.gg("onReceiverAction_ called without receiver.")
    };
    g.k.Gaa = function(a) {
        if (this.La()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.gg("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.B : null;
        if (!c || c.label != b.label) return this.gg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return x8("Reselecting dial screen."),
                this.publish("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.gg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            z8(this, new s8(this.B, b, this.D, this.config_))
        }
        b = this.j;
        b.Z = a;
        b.Z.appState == chrome.cast.DialAppState.RUNNING ? (a = b.Z.extraData || {}, c = a.screenId || null, t8(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = Rtb(b, {
            name: b.B.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.Z.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.sr(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = Stb(b, c)) : a = Stb(b, c)) : a = Ptb(b);
        return a
    };
    g.k.B0 = function(a) {
        var b = this;
        if (!this.La() && !this.K) {
            x8("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) x8("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), z8(this, new r8(this.B, c, this.config_), !0);
                    else {
                        this.gg("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.B,
                    e = m7(this.B.Dl(),
                        d.label);
                e && k7(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (x8("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.fb(this.j), this.j = new r8(this.B, c, this.config_), this.j.subscribe("sessionScreen", (0, g.Ua)(this.D0, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return Wtb(b, b.j)
                }), this.j.aB(null));
                this.j.wT(a)
            }
        }
    };
    g.k.p5 = function() {
        return this.j ? this.j.tV() : null
    };
    g.k.ica = function(a) {
        this.La() || (this.gg("Failed to estabilish a session: " + g.Ci(a)), a.code != chrome.cast.ErrorCode.CANCEL && z8(this, null), this.publish("yt-remote-cast2-session-failed"))
    };
    g.k.Nba = function(a) {
        x8("Receiver availability updated: " + a);
        if (!this.La()) {
            var b = y8(this);
            this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            y8(this) != b && this.publish("yt-remote-cast2-availability-change", y8(this))
        }
    };
    g.k.uV = function() {
        this.La() || (this.C = Xtb(this), x8("Updating custom receivers: " + g.Ci(this.C)), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.Ua)(function() {
            this.gg("Failed to set custom receivers.")
        }, this)), this.publish("yt-remote-cast2-availability-change", y8(this)))
    };
    w8.prototype.setLaunchParams = w8.prototype.cea;
    w8.prototype.setConnectedScreenStatus = w8.prototype.Zda;
    w8.prototype.stopSession = w8.prototype.q5;
    w8.prototype.getCastSession = w8.prototype.p5;
    w8.prototype.requestSession = w8.prototype.requestSession;
    w8.prototype.init = w8.prototype.init;
    w8.prototype.dispose = w8.prototype.dispose;
    var fub = [];
    g.k = G8.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        lub(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Yp = a.hasPrevious, this.Gl = a.hasNext, this.N = a.playerTime, this.K = a.playerTimeAt, this.D = a.seekableStart, this.j = a.seekableEnd, this.G = a.duration, this.Z = a.loadedTime, this.C = a.liveIngestionTime, this.B = !isNaN(this.C))
    };
    g.k.isPlaying = function() {
        return this.playerState == 1
    };
    g.k.isBuffering = function() {
        return this.playerState == 3
    };
    g.k.Hl = function() {
        return this.playerState == 1081
    };
    g.k.Xo = function(a) {
        this.G = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.B ? this.G + H8(this) : this.G
    };
    g.k.clone = function() {
        return new G8(mub(this))
    };
    g.z(M8, g.Fx);
    g.k = M8.prototype;
    g.k.getState = function() {
        return this.C
    };
    g.k.au = function() {
        return this.D.getReconnectTimeout()
    };
    g.k.Dy = function() {
        this.D.reconnect()
    };
    g.k.play = function() {
        O8(this) ? (this.j ? this.j.play(null, g.Zc, S8(this, "play")) : R8(this, "play"), pub(this, 1, J8(N8(this))), this.publish("remotePlayerChange")) : P8(this, this.play)
    };
    g.k.pause = function() {
        O8(this) ? (this.j ? this.j.pause(null, g.Zc, S8(this, "pause")) : R8(this, "pause"), pub(this, 2, J8(N8(this))), this.publish("remotePlayerChange")) : P8(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (O8(this)) {
            if (this.j) {
                var b = N8(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.isPlaying() || b.isBuffering() ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.Zc, S8(this, "seekTo", {
                    newTime: a
                }))
            } else R8(this, "seekTo", {
                newTime: a
            });
            pub(this, 3, a);
            this.publish("remotePlayerChange")
        } else P8(this, g.Va(this.seekTo, a))
    };
    g.k.stop = function() {
        if (O8(this)) {
            this.j ? this.j.stop(null, g.Zc, S8(this, "stopVideo")) : R8(this, "stopVideo");
            var a = N8(this);
            a.index = -1;
            a.videoId = "";
            lub(a);
            Q8(this, a);
            this.publish("remotePlayerChange")
        } else P8(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (O8(this)) {
            var c = N8(this);
            if (this.B) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.B.setReceiverVolumeLevel(d, (0, g.Ua)(function() {
                        d8("set receiver volume: " + d)
                    }, this), (0, g.Ua)(function() {
                        this.gg("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.B.setReceiverMuted(b, (0, g.Ua)(function() {
                    d8("set receiver muted: " + b)
                }, this), (0, g.Ua)(function() {
                    this.gg("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                };
                c.volume != -1 && (e.delta = a - c.volume);
                R8(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            Q8(this, c)
        } else P8(this, g.Va(this.setVolume, a, b))
    };
    g.k.vV = function(a, b) {
        if (O8(this)) {
            var c = N8(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Ci(b.style), g.Hc(a, c.trackData));
            R8(this, "setSubtitlesTrack", a);
            Q8(this, c)
        } else P8(this, g.Va(this.vV, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        O8(this) ? (b = b.getLanguageInfo().getId(), R8(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = N8(this), a.audioTrackId = b, Q8(this, a)) : P8(this, g.Va(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = d === void 0 ? null : d;
        e = e === void 0 ? null : e;
        f = f === void 0 ? null : f;
        h = h === void 0 ? null : h;
        var l = N8(this),
            m = {
                videoId: a
            };
        c !== void 0 && (m.currentIndex = c);
        K8(l, a, c || 0);
        b !== void 0 && (I8(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Ci(h));
        R8(this, "setPlaylist", m);
        d || Q8(this, l)
    };
    g.k.bM = function(a, b) {
        if (O8(this)) {
            if (a && b) {
                var c = N8(this);
                K8(c, a, b);
                Q8(this, c)
            }
            R8(this, "previous")
        } else P8(this, g.Va(this.bM, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (O8(this)) {
            if (a && b) {
                var c = N8(this);
                K8(c, a, b);
                Q8(this, c)
            }
            R8(this, "next")
        } else P8(this, g.Va(this.nextVideo, a, b))
    };
    g.k.SO = function() {
        if (O8(this)) {
            R8(this, "clearPlaylist");
            var a = N8(this);
            a.reset();
            Q8(this, a);
            this.publish("remotePlayerChange")
        } else P8(this, this.SO)
    };
    g.k.PX = function() {
        O8(this) ? R8(this, "dismissAutoplay") : P8(this, this.PX)
    };
    g.k.dispose = function() {
        if (this.C != 3) {
            var a = this.C;
            this.C = 3;
            this.publish("proxyStateChange", a, this.C)
        }
        g.Fx.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        oub(this);
        this.D = null;
        this.G.clear();
        L8(this, null);
        g.Fx.prototype.xa.call(this)
    };
    g.k.CT = function(a) {
        if ((a != this.C || a == 2) && this.C != 3 && a != 0) {
            var b = this.C;
            this.C = a;
            this.publish("proxyStateChange", b, a);
            if (a == 1)
                for (; !this.G.isEmpty();) b = a = this.G, b.j.length === 0 && (b.j = b.B, b.j.reverse(), b.B = []), a.j.pop().apply(this);
            else a == 3 && this.dispose()
        }
    };
    g.k.Iba = function(a, b) {
        this.publish(a, b)
    };
    g.k.xaa = function(a) {
        if (!a) this.uG(null), L8(this, null);
        else if (this.B.receiver.volume) {
            a = this.B.receiver.volume;
            var b = N8(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) d8("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, Q8(this, b)
        }
    };
    g.k.uG = function(a) {
        d8("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.Z);
        if (this.j = a) this.j.addUpdateListener(this.Z), qub(this), this.publish("remotePlayerChange")
    };
    g.k.waa = function(a) {
        a ? (qub(this), this.publish("remotePlayerChange")) : this.uG(null)
    };
    g.k.iU = function() {
        R8(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.zaa = function() {
        var a = iub();
        a && L8(this, a)
    };
    g.k.gg = function(a) {
        c8("CP", a)
    };
    g.z(V8, g.Fx);
    g.k = V8.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            n !== void 0 && (m.currentTime = n <= 5 ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && e.length > 0 && (m.videoIds = e.join(","));
            l !== void 0 && (m.currentIndex = l);
            this.Ma && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            I8(this.j,
                n);
            this.G = "UNSUPPORTED";
            c = this.Ma ? "setInitialState" : "setPlaylist";
            T8("Connecting with " + c + " and params: " + g.Ci(m));
            this.B.connect({
                method: c,
                params: g.Ci(m)
            }, a, Sqb())
        } else T8("Connecting without params"), this.B.connect({}, a, Sqb());
        uub(this)
    };
    g.k.Ks = function(a) {
        this.B.Ks(a)
    };
    g.k.dispose = function() {
        this.La() || (g.Ka("yt.mdx.remote.remoteClient_", null), this.publish("beforeDispose"), U8(this, 3));
        g.Fx.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        vub(this);
        xub(this);
        wub(this);
        g.Mr(this.Z);
        this.Z = NaN;
        g.Mr(this.Y);
        this.Y = NaN;
        this.D = null;
        g.Ss(this.qa);
        this.qa.length = 0;
        this.B.dispose();
        g.Fx.prototype.xa.call(this);
        this.G = this.N = this.C = this.j = this.B = null
    };
    g.k.IZ = function(a) {
        if (!this.C || this.C.length === 0) return !1;
        for (var b = g.w(this.C), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.f9 = function() {
        var a = 3;
        this.La() || (a = 0, isNaN(this.pF()) ? this.B.LA() && isNaN(this.K) && (a = 1) : a = 2);
        return a
    };
    g.k.aA = function(a) {
        T8("Disconnecting with " + a);
        g.Ka("yt.mdx.remote.remoteClient_", null);
        vub(this);
        this.publish("beforeDisconnect", a);
        a == 1 && p7();
        this.B.disconnect(a);
        this.dispose()
    };
    g.k.Z8 = function() {
        var a = this.j;
        this.D && (a = this.j.clone(), K8(a, this.D, a.index));
        return mub(a)
    };
    g.k.fea = function(a) {
        var b = this,
            c = new G8(a);
        c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId, g.Mr(this.Z), this.Z = g.Kr(function() {
            if (b.D) {
                var e = b.D;
                b.D = null;
                b.j.videoId != e && W8(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && J8(this.j) == J8(c) && g.Ci(this.j.trackData) == g.Ci(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.cc(d, function(e) {
            this.publish(e)
        }, this)
    };
    g.k.CY = function() {
        var a = this.B.getDeviceId(),
            b = g.Kb(this.C, function(c) {
                return c.type == "REMOTE_CONTROL" && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.pF = function() {
        return this.B.au()
    };
    g.k.I8 = function() {
        return this.G || "UNSUPPORTED"
    };
    g.k.J8 = function() {
        return this.N || ""
    };
    g.k.r5 = function() {
        !isNaN(this.pF()) && this.B.Dy()
    };
    g.k.Wda = function(a, b) {
        W8(this, a, b);
        zub(this)
    };
    g.k.wV = function() {
        var a = g.es("SAPISID", "") || g.es("__Secure-1PAPISID") || "",
            b = g.es("__Secure-3PAPISID", "") || "";
        if (!a && !b) return "";
        a = g.Te(g.Se(a), 2);
        b = g.Te(g.Se(b), 2);
        return g.Te(g.Se("," + a + "," + b), 2)
    };
    V8.prototype.subscribe = V8.prototype.subscribe;
    V8.prototype.unsubscribeByKey = V8.prototype.uh;
    V8.prototype.getProxyState = V8.prototype.f9;
    V8.prototype.disconnect = V8.prototype.aA;
    V8.prototype.getPlayerContextData = V8.prototype.Z8;
    V8.prototype.setPlayerContextData = V8.prototype.fea;
    V8.prototype.getOtherConnectedRemoteId = V8.prototype.CY;
    V8.prototype.getReconnectTimeout = V8.prototype.pF;
    V8.prototype.getAutoplayMode = V8.prototype.I8;
    V8.prototype.getAutoplayVideoId = V8.prototype.J8;
    V8.prototype.reconnect = V8.prototype.r5;
    V8.prototype.sendMessage = V8.prototype.Wda;
    V8.prototype.getXsrfToken = V8.prototype.wV;
    V8.prototype.isCapabilitySupportedOnConnectedDevices = V8.prototype.IZ;
    g.z(Lub, h8);
    g.k = Lub.prototype;
    g.k.Dl = function(a) {
        return this.ih.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.ih.$_c(a)
    };
    g.k.get = function(a) {
        return this.ih.$_g(a)
    };
    g.k.start = function() {
        this.ih.$_st()
    };
    g.k.add = function(a, b, c) {
        this.ih.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.ih.$_r(a, b, c)
    };
    g.k.cN = function(a, b, c, d) {
        this.ih.$_un(a, b, c, d)
    };
    g.k.xa = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.ih.$_ubk(this.j[a]);
        this.j.length = 0;
        this.ih = null;
        h8.prototype.xa.call(this)
    };
    g.k.s5 = function() {
        this.publish("screenChange")
    };
    g.k.qba = function() {
        this.publish("onlineScreenChange")
    };
    m8.prototype.$_st = m8.prototype.start;
    m8.prototype.$_gspc = m8.prototype.m5;
    m8.prototype.$_gsppc = m8.prototype.sV;
    m8.prototype.$_c = m8.prototype.contains;
    m8.prototype.$_g = m8.prototype.get;
    m8.prototype.$_a = m8.prototype.add;
    m8.prototype.$_un = m8.prototype.cN;
    m8.prototype.$_r = m8.prototype.remove;
    m8.prototype.$_gs = m8.prototype.Dl;
    m8.prototype.$_gos = m8.prototype.rV;
    m8.prototype.$_s = m8.prototype.subscribe;
    m8.prototype.$_ubk = m8.prototype.uh;
    var g9 = null,
        j9 = !1,
        X8 = null,
        Y8 = null,
        Wub = null,
        b9 = [];
    g.z(avb, g.O);
    g.k = avb.prototype;
    g.k.xa = function() {
        g.O.prototype.xa.call(this);
        this.j.stop();
        this.B.stop();
        this.N.stop();
        var a = this.Ic;
        a.unsubscribe("proxyStateChange", this.z0, this);
        a.unsubscribe("remotePlayerChange", this.EG, this);
        a.unsubscribe("remoteQueueChange", this.IL, this);
        a.unsubscribe("previousNextChange", this.w0, this);
        a.unsubscribe("nowAutoplaying", this.s0, this);
        a.unsubscribe("autoplayDismissed", this.X_, this);
        this.Ic = this.module = null
    };
    g.k.Fl = function(a) {
        var b = g.Ca.apply(1, arguments);
        if (this.Ic.C != 2)
            if (k9(this)) {
                if (!N8(this.Ic).Hl() || a !== "control_seek") switch (a) {
                    case "control_toggle_play_pause":
                        N8(this.Ic).isPlaying() ? this.Ic.pause() : this.Ic.play();
                        break;
                    case "control_play":
                        this.Ic.play();
                        break;
                    case "control_pause":
                        this.Ic.pause();
                        break;
                    case "control_seek":
                        this.K.pN(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        cvb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.J.getCurrentTime();
                    l9(this, b === 0 ? void 0 : b);
                    break;
                case "control_seek":
                    l9(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    cvb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.uaa = function(a) {
        this.N.V4(a)
    };
    g.k.ffa = function(a) {
        this.Fl("control_subtitles_set_track", g.Bc(a) ? null : a)
    };
    g.k.M2 = function() {
        var a = this.J.getOption("captions", "track");
        g.Bc(a) || cvb(this, a)
    };
    g.k.Tc = function(a) {
        this.module.Tc(a, this.J.getVideoData().lengthSeconds)
    };
    g.k.Zaa = function() {
        g.Bc(this.C) || dvb(this, this.C);
        this.D = !1
    };
    g.k.z0 = function(a, b) {
        this.B.stop();
        b === 2 && this.F2()
    };
    g.k.EG = function() {
        if (k9(this)) {
            this.j.stop();
            var a = N8(this.Ic);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.wi = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.wi = 0;
                    break;
                default:
                    this.module.wi = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Ec(new g.LF(8));
                    this.E2();
                    break;
                case 1085:
                case 3:
                    this.Ec(new g.LF(9));
                    break;
                case 1083:
                case 0:
                    this.Ec(new g.LF(2));
                    this.K.stop();
                    this.Tc(this.J.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Ec(new g.LF(4));
                    break;
                case 2:
                    this.Ec(new g.LF(4));
                    this.Tc(J8(a));
                    break;
                case -1:
                    this.Ec(new g.LF(64));
                    break;
                case -1E3:
                    this.Ec(new g.LF(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        cA: 2
                    }))
            }
            a = N8(this.Ic).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, dvb(this, a));
            a = N8(this.Ic);
            a.volume === -1 || Math.round(this.J.getVolume()) === a.volume && this.J.isMuted() === a.muted || this.Z.isActive() || this.C3()
        } else bvb(this)
    };
    g.k.w0 = function() {
        this.J.publish("mdxpreviousnextchange")
    };
    g.k.IL = function() {
        k9(this) || bvb(this)
    };
    g.k.s0 = function(a) {
        isNaN(a) || this.J.publish("mdxnowautoplaying", a)
    };
    g.k.X_ = function() {
        this.J.publish("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        k9(this) && this.Ic.setAudioTrack(this.J.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        N8(this.Ic).playerState === -1 ? l9(this, a) : b && this.Ic.seekTo(a)
    };
    g.k.C3 = function() {
        var a = this;
        if (k9(this)) {
            var b = N8(this.Ic);
            this.events.Oc(this.Y);
            b.muted ? this.J.mute() : this.J.unMute();
            this.J.setVolume(b.volume);
            this.Y = this.events.T(this.J, "onVolumeChange", function(c) {
                Zub(a, c)
            })
        }
    };
    g.k.E2 = function() {
        this.j.stop();
        if (!this.Ic.La()) {
            var a = N8(this.Ic);
            a.isPlaying() && this.Ec(new g.LF(8));
            this.Tc(J8(a));
            this.j.start()
        }
    };
    g.k.F2 = function() {
        this.B.stop();
        this.j.stop();
        var a = this.Ic.au();
        this.Ic.C == 2 && !isNaN(a) && this.B.start()
    };
    g.k.Ec = function(a) {
        this.B.stop();
        var b = this.G;
        if (!g.RF(b, a)) {
            var c = g.U(a, 2);
            c !== g.U(this.G, 2) && this.J.rC(c);
            this.G = a;
            fvb(this.module, b, a)
        }
    };
    g.z(m9, g.T);
    m9.prototype.pd = function() {
        this.j.show()
    };
    m9.prototype.Nb = function() {
        this.j.hide()
    };
    m9.prototype.B = function() {
        r7("mdx-privacy-popup-cancel");
        this.Nb()
    };
    m9.prototype.C = function() {
        r7("mdx-privacy-popup-confirm");
        this.Nb()
    };
    g.z(n9, g.T);
    n9.prototype.onStateChange = function(a) {
        this.zd(a.state)
    };
    n9.prototype.zd = function(a) {
        if (this.api.getPresentingPlayerType() === 3) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.U(a, 128) ? g.DD("Error on $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.DD("Playing on $RECEIVER_NAME", b) : g.DD("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.z(o9, g.oT);
    o9.prototype.D = function() {
        var a = this.J.getOption("remote", "receivers");
        a && a.length > 1 && !this.J.getOption("remote", "quickCast") ? (this.bv = g.dc(a, this.j, this), g.pT(this, g.Al(a, this.j)), a = this.J.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Ti(a), this.enable(!0)) : this.enable(!1)
    };
    o9.prototype.j = function(a) {
        return a.key
    };
    o9.prototype.ll = function(a) {
        return a === "cast-selector-receiver" ? "Cast..." : this.bv[a].name
    };
    o9.prototype.Hg = function(a) {
        g.oT.prototype.Hg.call(this, a);
        this.J.setOption("remote", "currentReceiver", this.bv[a]);
        this.Fb.Nb()
    };
    g.z(evb, g.XT);
    g.k = evb.prototype;
    g.k.create = function() {
        var a = this.player.U(),
            b = g.OO(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token")
        };
        Qub(b, a);
        this.subscriptions.push(g.Gv("yt-remote-before-disconnect", this.saa, this));
        this.subscriptions.push(g.Gv("yt-remote-connection-change", this.Oba, this));
        this.subscriptions.push(g.Gv("yt-remote-receiver-availability-change", this.y0,
            this));
        this.subscriptions.push(g.Gv("yt-remote-auto-connect", this.Mba, this));
        this.subscriptions.push(g.Gv("yt-remote-receiver-resumed", this.Lba, this));
        this.subscriptions.push(g.Gv("mdx-privacy-popup-confirm", this.ida, this));
        this.subscriptions.push(g.Gv("mdx-privacy-popup-cancel", this.hda, this));
        this.y0()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.XT.prototype.load.call(this);
        this.ym = new avb(this, this.player, this.Ic);
        var a = (a = Yub()) ? a.currentTime : 0;
        var b = Vub() ? new M8(f9(), void 0) : null;
        a == 0 && b && (a = J8(N8(b)));
        a !== 0 && this.Tc(a);
        fvb(this, this.Ee, this.Ee);
        this.player.Mq(6)
    };
    g.k.unload = function() {
        this.player.publish("mdxautoplaycanceled");
        this.Mt = this.mq;
        g.gb(this.ym, this.Ic);
        this.Ic = this.ym = null;
        g.XT.prototype.unload.call(this);
        this.player.Mq(5);
        n$(this)
    };
    g.k.xa = function() {
        g.Hv(this.subscriptions);
        g.XT.prototype.xa.call(this)
    };
    g.k.zG = function(a) {
        var b = g.Ca.apply(1, arguments);
        this.loaded && this.ym.Fl.apply(this.ym, [a].concat(g.x(b)))
    };
    g.k.getAdState = function() {
        return this.wi
    };
    g.k.Yp = function() {
        return this.Ic ? N8(this.Ic).Yp : !1
    };
    g.k.Gl = function() {
        return this.Ic ? N8(this.Ic).Gl : !1
    };
    g.k.Tc = function(a, b) {
        this.WZ = a || 0;
        this.player.publish("progresssync", a, b);
        this.player.Hc("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.WZ
    };
    g.k.getProgressState = function() {
        var a = N8(this.Ic),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: !a.Hl() && this.player.Jh(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.B ? a.C + H8(a) : a.C,
            isAtLiveHead: (a.B ? a.j + H8(a) : a.j) - this.getCurrentTime() <= 1,
            loaded: a.Z,
            seekableEnd: a.B ? a.j + H8(a) : a.j,
            seekableStart: a.D > 0 ? a.D + H8(a) : a.D,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    };
    g.k.nextVideo = function() {
        this.Ic && this.Ic.nextVideo()
    };
    g.k.bM = function() {
        this.Ic && this.Ic.bM()
    };
    g.k.saa = function(a) {
        a === 1 && (this.LS = this.Ic ? N8(this.Ic) : null)
    };
    g.k.Oba = function() {
        var a = Vub() ? new M8(f9(), void 0) : null;
        if (a) {
            var b = this.Mt;
            this.loaded && this.unload();
            this.Ic = a;
            this.LS = null;
            b.key !== this.mq.key && (this.Mt = b, this.load())
        } else g.fb(this.Ic), this.Ic = null, this.loaded && (this.unload(), (a = this.LS) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, J8(a)));
        this.player.publish("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.y0 = function() {
        var a = [this.mq],
            b = a.concat,
            c = Rub();
        D8() && g.ct("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.bv = b.call(a, c);
        a = Tub() || this.mq;
        p$(this, a);
        this.player.Hc("onMdxReceiversChange")
    };
    g.k.Mba = function() {
        var a = Tub();
        p$(this, a)
    };
    g.k.Lba = function() {
        this.Mt = Tub()
    };
    g.k.ida = function() {
        this.XG = !0;
        n$(this);
        j9 = !1;
        g9 && i9(g9, 1);
        g9 = null
    };
    g.k.hda = function() {
        this.XG = !1;
        n$(this);
        p$(this, this.mq);
        this.Mt = this.mq;
        j9 = !1;
        g9 = null;
        this.player.playVideo()
    };
    g.k.Uh = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.bv;
            case "currentReceiver":
                return b && (b.key === "cast-selector-receiver" ? jub() : p$(this, b)), this.loaded ? this.Mt : this.mq;
            case "quickCast":
                return this.bv.length === 2 && this.bv[1].key === "cast-selector-receiver" ? (b && jub(), !0) : !1
        }
    };
    g.k.iU = function() {
        this.Ic.iU()
    };
    g.k.jn = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.k.isLoggedIn = function() {
        var a, b;
        return ((a = g.pr("PLAYER_CONFIG")) == null ? void 0 : (b = a.args) == null ? void 0 : b.authuser) !== void 0 ? !0 : !(!g.pr("SESSION_INDEX") && !g.pr("LOGGED_IN"))
    };
    g.WT("remote", evb);
})(_yt_player);