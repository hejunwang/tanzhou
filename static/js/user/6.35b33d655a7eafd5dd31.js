webpackJsonp([6], {
    1019: function (e, t, a) {
        "use strict";

        function r(e, t) {
            for (var a = u()({}, e), r = 0; r < t.length; r++) {
                delete a[t[r]]
            }
            return a
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var n = a(21), u = a.n(n);
        t.default = r
    }, 1311: function (e, t, a) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function n(e) {
            return (0, c.default)({url: h.sgkeyPrefix + "/file/base64Upload", method: "post", data: {img: e}})
        }

        function u(e, t) {
            return (0, c.default)({
                url: h.authPrefix + "/verify/email/send",
                fetchType: "jsonp",
                data: {email: e, redirectUrl: t, mailType: 1}
            })
        }

        function s(e) {
            return (0, c.default)({url: h.authPrefix + "/verify/sms/send", fetchType: "jsonp", data: {phone: e}})
        }

        function o(e) {
            return (0, c.default)({
                url: h.authPrefix + "/update/password/standard",
                fetchType: "jsonp",
                data: (0, l.default)({}, e)
            })
        }

        function d(e, t, a) {
            return (0, c.default)({url: h.authPrefix + "/bind/phone", fetchType: "jsonp", data: {phone: e, code: t}})
        }

        function f(e) {
            return (0, c.default)({
                url: h.authPrefix + "/update/userInfo",
                fetchType: "jsonp",
                data: (0, l.default)({}, e)
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = a(21), l = r(i);
        t.uploadImg = n, t.verifyEmail = u, t.verifySms = s, t.resetPassword = o, t.verifyPhone = d, t.changeUserInfo = f;
        var p = a(357), c = r(p), h = a(77)
    }, 857: function (e, t, a) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var n = a(21), u = r(n), s = a(149), o = r(s), d = a(361), f = r(d), i = a(1019), l = r(i), p = a(226),
            c = r(p), h = a(1311), v = a(151);
        t.default = {
            namespace: "profile",
            state: {activeTabKey: "0", avatarUrl: "", reseted: 0},
            subscriptions: {
                setup: function (e, t) {
                    var a = e.dispatch, r = (e.history, f.default.parse(location.search));
                    r.status > 0 ? (t(r), a(v.routerRedux.push("/i/profile"))) : r.verify && (t({
                        msg: "\u90ae\u7bb1\u4fee\u6539\u6210\u529f",
                        status: 1
                    }), a(v.routerRedux.push("/i/profile")))
                }
            },
            effects: {
                uploadAvatar: o.default.mark(function e(t, a) {
                    var r, n, u = t.payload, s = void 0 === u ? {} : u, d = a.call, f = a.put;
                    return o.default.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, d(h.uploadImg, s.img.replace("data:image/png;base64,", ""));
                            case 2:
                                return r = e.sent, n = r.data.path, e.next = 6, f({
                                    type: "updateState",
                                    payload: {avatarUrl: n}
                                });
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }), sendVerifyEmail: o.default.mark(function e(t, a) {
                    var r, n, u = t.payload, s = void 0 === u ? {} : u, d = a.call, f = a.put;
                    return o.default.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return r = location.href + (~location.href.indexOf("?") ? "&" : "?") + "verify=1", e.next = 3, d(h.verifyEmail, s.email, r);
                            case 3:
                                return n = e.sent, e.next = 6, f({
                                    type: "app/updateUserinfo",
                                    payload: {email: s.email}
                                });
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }), sendVerifySms: o.default.mark(function e(t, a) {
                    var r, n = t.payload, u = void 0 === n ? {} : n, s = a.call;
                    a.put;
                    return o.default.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, s(h.verifySms, u.phone);
                            case 2:
                                r = e.sent;
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }), handleVerifyPhone: o.default.mark(function e(t, a) {
                    var r, n = t.payload, u = void 0 === n ? {} : n, s = a.call, d = a.put;
                    return o.default.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, s(h.verifyPhone, u.phone, u.code);
                            case 2:
                                return r = e.sent, e.next = 5, d({
                                    type: "app/updateUserinfo",
                                    payload: {phone: u.phone}
                                });
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }), handleChangeUserInfo: o.default.mark(function e(t, a) {
                    var r, n = t.payload, u = void 0 === n ? {} : n, s = a.call, d = a.put;
                    return o.default.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, s(h.changeUserInfo, (0, l.default)(u, ["birthday"]));
                            case 2:
                                return r = e.sent, c.default.msg("\u4e2a\u4eba\u4fe1\u606f\u66f4\u65b0\u6210\u529f"), e.next = 6, d({
                                    type: "app/updateUserinfo",
                                    payload: (0, l.default)(u, ["birthdayTime"])
                                });
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }), handleResetPassword: o.default.mark(function e(t, a) {
                    var r, n = t.payload, u = void 0 === n ? {} : n, s = a.call;
                    a.put;
                    return o.default.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, s(h.resetPassword, u);
                            case 2:
                                r = e.sent, c.default.msg("\u5bc6\u7801\u4fee\u6539\u6210\u529f");
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                })
            },
            reducers: {
                updateState: function (e, t) {
                    var a = t.payload;
                    return (0, u.default)({}, e, a)
                }
            }
        }, e.exports = t.default
    }
});