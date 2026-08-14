/*! For license information please see techo.8cd28a4ae13e48edceaf.bundle.js.LICENSE.txt */
( () => {
    var t, e = {
        1037: (t, e, n) => {
            "use strict";
            n(3826);
            var i = n(3751)
              , a = n(834)
              , s = n(3711);
            function r(t) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                r(t)
            }
            function o(t, e) {
                return moment(t).format(e)
            }
            function l(t, e) {
                if (void 0 !== e) {
                    var n = ngettext(t, t, 1);
                    return Array.isArray(e) ? interpolate(n, e) : "object" === r(e) ? interpolate(n, e, !0) : interpolate(n, [e])
                }
                return gettext(t)
            }
            const c = {
                beforeMount: function(t, e, n) {
                    !function(t) {
                        $(t).each((function() {
                            var t = new RegExp(/((https?)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+))/g)
                              , e = $(this).html();
                            e && e.length > 0 && (e = e.replace(t, "<a href='$1' target='_blank'>$1</a>"),
                            $(this).html(e),
                            $(this).find("a").on("click", (function(t) {
                                t.stopPropagation()
                            }
                            )))
                        }
                        ))
                    }(t)
                },
                updated: function(t, e, n) {}
            };
            var u = null;
            const d = {
                created: function(t) {
                    var e = function() {
                        t.style.height = "auto",
                        t.style.height = "".concat(t.scrollHeight + 2, "px")
                    }
                      , n = function() {
                        window.setTimeout(e, 0)
                    };
                    (u = new ResizeObserver((function(t) {
                        e()
                    }
                    ))).observe(t),
                    t.addEventListener("change", e, !1),
                    t.addEventListener("cut", n, !1),
                    t.addEventListener("paste", n, !1),
                    t.addEventListener("drop", n, !1),
                    t.addEventListener("keydown", n, !1)
                },
                unmounted: function() {
                    u.disconnect()
                }
            };
            var f = JSON.parse(document.getElementById("global-user-data").textContent);
            const p = {
                state: function() {
                    return {
                        me: f.me,
                        currentLanguage: f.currentLanguage,
                        timezone: f.timezone
                    }
                },
                getters: {
                    isLogin: function(t) {
                        return null !== t.me
                    },
                    isProUp: function(t, e) {
                        return e.isLogin && (t.me.is_qovo_pro || t.me.is_duo)
                    }
                },
                actions: {},
                mutations: {}
            };
            var m = n(641)
              , h = n(33);
            const g = n.p + "23dab46710e1544de832.png"
              , y = n.p + "1a7116c367fac7a354d5.png";
            var v = {
                class: "container"
            }
              , k = {
                class: "syncing-area"
            }
              , w = {
                key: 0,
                class: "p-3"
            }
              , L = {
                key: 0,
                class: "text-center pt-3 pb-4 english-title"
            }
              , x = {
                key: 1,
                class: ""
            }
              , b = {
                class: "add-btn d-flex aic jcc"
            }
              , S = {
                key: 0,
                class: "ms-2"
            }
              , D = {
                key: 0,
                class: "archived-pages"
            }
              , C = {
                key: 0,
                class: "drag-here p-3 w-100"
            }
              , j = {
                key: 2
            }
              , M = {
                class: "page mb-4"
            }
              , E = {
                class: "title text-center py-3"
            }
              , O = {
                class: "text-center subtitle mb-5"
            }
              , T = {
                class: "text-center w-100"
            }
              , X = {
                key: 4,
                class: "d-flex jcc mt-5"
            }
              , z = {
                class: "notice p-3 mb-5 d-inline-block"
            }
              , I = {
                class: "d-flex jcc my-3"
            }
              , N = {
                class: "small",
                style: {
                    color: "yellow"
                }
            }
              , A = {
                class: "text-center"
            }
              , W = ["href"]
              , _ = {
                class: "d-flex jcc mt-3"
            }
              , P = {
                class: "text-white small"
            }
              , Y = ["innerHTML"]
              , Q = {
                key: 5,
                class: "d-flex flex-column aic mt-5"
            }
              , F = {
                class: "sub-title small mb-3"
            }
              , B = {
                class: "py-5 p-2 d-flex flex-column aic small text-white"
            }
              , H = {
                class: "d-flex flex-wrap mb-3"
            }
              , V = {
                href: "/support/tos",
                class: "me-3"
            }
              , U = {
                href: "/support/privacy-policy",
                class: "me-3"
            }
              , K = {
                key: 0,
                href: "/logout?next=/dojin-techo",
                class: ""
            }
              , R = {
                class: "d-flex flex-wrap"
            }
              , G = {
                class: "form-check form-switch"
            }
              , Z = {
                class: "form-check-label",
                for: "dark-mode-switch"
            }
              , J = n(432)
              , q = n.n(J)
              , tt = n(953);
            function et(t) {
                return et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                et(t)
            }
            var nt = {
                key: 0,
                class: "modal-header p-2 d-flex jcb"
            }
              , it = {
                class: "modal-header-label px-2"
            }
              , at = {
                key: 1,
                class: "p-3"
            }
              , st = {
                class: "w-100 d-flex jcb"
            }
              , rt = {
                class: "d-flex aic"
            }
              , ot = ["disabled"]
              , lt = {
                key: 1,
                class: "disabled-btn modal-default-button"
            }
              , ct = {
                key: 2,
                class: "disabled-btn modal-default-button"
            };
            const ut = {
                setup: function() {
                    var t = function() {
                        var t = (0,
                        tt.KR)($(window).outerWidth())
                          , e = (0,
                        tt.KR)($(window).outerHeight());
                        function n() {
                            t.value = $(window).outerWidth(),
                            e.value = $(window).outerHeight()
                        }
                        (0,
                        m.sV)((function() {
                            return window.addEventListener("resize", n)
                        }
                        )),
                        (0,
                        m.hi)((function() {
                            return window.removeEventListener("resize", n)
                        }
                        ));
                        var i = (0,
                        m.EW)((function() {
                            return t.value < 576
                        }
                        ))
                          , a = (0,
                        m.EW)((function() {
                            return t.value >= 576 && t.value < 768
                        }
                        ))
                          , s = (0,
                        m.EW)((function() {
                            return t.value >= 768 && t.value < 992
                        }
                        ))
                          , r = (0,
                        m.EW)((function() {
                            return t.value >= 992 && t.value < 1200
                        }
                        ))
                          , o = (0,
                        m.EW)((function() {
                            return t.value >= 1200 && t.value < 1400
                        }
                        ))
                          , l = (0,
                        m.EW)((function() {
                            return t.value >= 1400
                        }
                        ))
                          , c = (0,
                        m.EW)((function() {
                            return i.value || a.value
                        }
                        ))
                          , u = (0,
                        m.EW)((function() {
                            return c.value || s.value
                        }
                        ))
                          , d = (0,
                        m.EW)((function() {
                            return u.value || r.value
                        }
                        ))
                          , f = (0,
                        m.EW)((function() {
                            return d.value || o.value
                        }
                        ))
                          , p = (0,
                        m.EW)((function() {
                            return o.value || l.value
                        }
                        ))
                          , h = (0,
                        m.EW)((function() {
                            return r.value || p.value
                        }
                        ))
                          , g = (0,
                        m.EW)((function() {
                            return s.value || h.value
                        }
                        ))
                          , y = (0,
                        m.EW)((function() {
                            return a.value || g.value
                        }
                        ));
                        return {
                            windowW: t,
                            windowH: e,
                            xs: i,
                            sm: a,
                            md: s,
                            lg: r,
                            xl: o,
                            xxl: l,
                            underSm: c,
                            underMd: u,
                            underLg: d,
                            underXl: f,
                            overXl: p,
                            overLg: h,
                            overMd: g,
                            overSm: y
                        }
                    }();
                    return {
                        windowW: t.windowW,
                        windowH: t.windowH
                    }
                },
                data: function() {
                    return {
                        homingData: {
                            enable: !1,
                            left: 0,
                            top: 0
                        },
                        shown: !1
                    }
                },
                emits: ["cancel", "apply", "show", "shown", "hide"],
                props: {
                    showHeader: {
                        type: Boolean,
                        default: !1
                    },
                    processing: {
                        type: Boolean,
                        default: !1
                    },
                    preventOutsideClick: {
                        type: Boolean,
                        default: !1
                    },
                    applylabel: {
                        type: String,
                        default: "OK"
                    },
                    modalclass: {
                        type: String,
                        default: ""
                    },
                    hideCancelButton: {
                        type: Boolean,
                        default: !1
                    },
                    hideFooter: {
                        type: Boolean,
                        default: !1
                    },
                    buttonType: {
                        type: String,
                        default: "default"
                    },
                    homingTarget: {
                        type: HTMLElement,
                        default: null
                    },
                    show: {
                        type: [Boolean, Object],
                        default: !1
                    },
                    firstFocus: {
                        type: String,
                        default: null
                    },
                    overflow: {
                        type: Boolean,
                        default: !1
                    },
                    applyTest: {
                        type: Boolean,
                        default: !0
                    },
                    enterToApply: {
                        type: Boolean,
                        default: !1
                    },
                    escToCancel: {
                        type: Boolean,
                        default: !0
                    },
                    noDark: {
                        type: Boolean,
                        default: !1
                    },
                    fill: {
                        type: [String, null],
                        default: null
                    },
                    zIndex: {
                        type: [Number, Boolean],
                        default: !1
                    }
                },
                watch: {
                    show: function() {
                        var t = this;
                        if (this.show) {
                            if (this.shown)
                                return;
                            this.homingData.enable = !1,
                            this.$emit("show"),
                            this.$nextTick((function() {
                                t.homing(),
                                t.resizeObserver.disconnect(),
                                t.resizeObserver.observe(t.$refs.pane),
                                t.focusElement(),
                                t.shown = !0,
                                t.$emit("shown")
                            }
                            ))
                        } else
                            this.$emit("hide"),
                            this.resizeObserver.disconnect(),
                            this.shown = !1
                    },
                    homingTarget: function() {
                        this.homing()
                    }
                },
                created: function() {
                    var t = this;
                    this.resizeObserver = new ResizeObserver((function(e) {
                        t.changeElementSize(e)
                    }
                    ))
                },
                mounted: function() {
                    window.addEventListener("scroll", this.onScroll),
                    window.addEventListener("keyup", this.onKeyUp)
                },
                unmounted: function() {
                    window.removeEventListener("scroll", this.onScroll),
                    window.removeEventListener("keyup", this.onKeyUp),
                    this.resizeObserver.disconnect()
                },
                methods: {
                    changeElementSize: function(t) {
                        this.homing()
                    },
                    onScroll: function() {
                        this.shown && this.homing()
                    },
                    clickOutOfArea: function(t) {
                        if (t.target.classList.contains("modal-mask")) {
                            if (this.processing)
                                return;
                            this.preventOutsideClick || (this._show = !1,
                            this.$emit("cancel"))
                        }
                    },
                    onKeyUp: function(t) {
                        this.shown && (13 === t.keyCode ? (t.ctrlKey || this.enterToApply) && this.$emit("apply") : 27 === t.keyCode && this.escToCancel && this.$emit("cancel"))
                    },
                    homing: function() {
                        if (this.homingTarget && this.homingTarget.getBoundingClientRect && this.$refs.pane && !this.fill) {
                            this.homingData.enable = !0;
                            var t = this.homingTarget.getBoundingClientRect()
                              , e = this.$refs.pane.getBoundingClientRect()
                              , n = t.x
                              , i = t.y + t.height;
                            n < 0 && (n = 0),
                            i < 0 && (i = 0),
                            i + e.height > this.windowH && (i = this.windowH - e.height),
                            n + e.width > this.windowW && (n = this.windowW - e.width),
                            this.homingData.left = n,
                            this.homingData.top = i
                        }
                    },
                    focusElement: function() {
                        var t = this;
                        this.firstFocus && this.$nextTick((function() {
                            $(t.firstFocus).focus()
                        }
                        ))
                    }
                }
            };
            var dt = n(6262);
            const ft = (0,
            dt.A)(ut, [["render", function(t, e, n, a, s, r) {
                return (0,
                m.uX)(),
                (0,
                m.Wv)(m.Im, {
                    to: "body"
                }, [(0,
                m.bF)(i.Transition, {
                    name: n.fill ? "modal-fill-".concat(n.fill) : "modal"
                }, {
                    default: (0,
                    m.k6)((function() {
                        return [n.show ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", (0,
                        m.v6)({
                            key: 0
                        }, t.$attrs, {
                            class: ["d-flex jcc aic", {
                                "modal-mask-homing": s.homingData.enable,
                                "modal-mask": !s.homingData.enable,
                                "no-dark": n.noDark
                            }],
                            onClick: e[4] || (e[4] = function() {
                                return r.clickOutOfArea && r.clickOutOfArea.apply(r, arguments)
                            }
                            ),
                            style: {
                                "z-index": n.zIndex
                            }
                        }), [(0,
                        m.Lk)("div", {
                            class: (0,
                            h.normalizeClass)(["modal-wrapper", {
                                "modal-homing": s.homingData.enable,
                                "d-flex aic jcc": !s.homingData.enable && !n.fill,
                                "modal-fill": n.fill,
                                left: "left" == n.fill,
                                right: "right" == n.fill
                            }]),
                            ref: "pane",
                            style: (0,
                            h.normalizeStyle)(s.homingData.enable ? {
                                top: "".concat(s.homingData.top, "px"),
                                left: "".concat(s.homingData.left, "px")
                            } : {})
                        }, [(0,
                        m.Lk)("div", {
                            class: (0,
                            h.normalizeClass)(["modal-container", n.modalclass]),
                            style: (0,
                            h.normalizeStyle)({
                                overflow: n.overflow ? "auto" : null
                            })
                        }, [n.showHeader ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", nt, [(0,
                        m.Lk)("div", it, [(0,
                        m.RG)(t.$slots, "title", {}, void 0, !0)]), (0,
                        m.Lk)("div", {
                            class: "",
                            onClick: e[0] || (e[0] = function(e) {
                                return t.$emit("cancel")
                            }
                            )
                        }, e[5] || (e[5] = [(0,
                        m.Lk)("div", {
                            class: "modal-close-btn"
                        }, [(0,
                        m.Lk)("i", {
                            class: "fas fa-times fa-lg fa-fw"
                        })], -1)]))])) : (0,
                        m.Q3)("v-if", !0), (0,
                        m.Lk)("div", {
                            class: "modal-body",
                            style: (0,
                            h.normalizeStyle)({
                                overflow: n.overflow ? "auto" : null
                            })
                        }, [(0,
                        m.RG)(t.$slots, "body", {}, void 0, !0)], 4), n.hideFooter ? (0,
                        m.Q3)("v-if", !0) : ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", at, [(0,
                        m.Lk)("div", st, [(0,
                        m.Lk)("div", null, [(0,
                        m.RG)(t.$slots, "footer", {}, void 0, !0)]), (0,
                        m.Lk)("div", rt, [n.hideCancelButton || n.processing || n.fill ? (0,
                        m.Q3)("v-if", !0) : ((0,
                        m.uX)(),
                        (0,
                        m.CE)("a", {
                            key: 0,
                            disabled: n.processing,
                            class: "silent-link me-3 modal-default-button small",
                            onClick: e[1] || (e[1] = function(e) {
                                return t.$emit("cancel")
                            }
                            )
                        }, (0,
                        h.toDisplayString)(t.pgettext("modal", "キャンセル")), 9, ot)), n.processing ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("button", lt, e[6] || (e[6] = [(0,
                        m.Lk)("i", {
                            class: "fa-solid fa-spinner fa-spin"
                        }, null, -1)]))) : n.applyTest ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("button", {
                            key: 3,
                            class: (0,
                            h.normalizeClass)(["modal-default-button", {
                                "primary-btn": "default" == n.buttonType || !n.buttonType,
                                "secondary-btn": "secondary" == n.buttonType,
                                "alert-btn": "alert" == n.buttonType
                            }]),
                            onClick: e[2] || (e[2] = function(e) {
                                return t.$emit("apply")
                            }
                            )
                        }, [(0,
                        m.Lk)("span", null, (0,
                        h.toDisplayString)(n.applylabel ? n.applylabel : "OK"), 1)], 2)) : ((0,
                        m.uX)(),
                        (0,
                        m.CE)("button", ct, [(0,
                        m.Lk)("span", null, (0,
                        h.toDisplayString)(n.applylabel ? n.applylabel : "OK"), 1)]))])])]))], 6), n.hideCancelButton || n.processing || !n.fill ? (0,
                        m.Q3)("v-if", !0) : ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", {
                            key: 0,
                            class: (0,
                            h.normalizeClass)(["modal-fill-closer p-3", {
                                left: "left" == n.fill,
                                right: "right" == n.fill
                            }]),
                            onClick: e[3] || (e[3] = function(e) {
                                return t.$emit("cancel")
                            }
                            )
                        }, e[7] || (e[7] = [(0,
                        m.Lk)("i", {
                            class: "fa fa-times fa-fw"
                        }, null, -1)]), 2))], 6)], 16)) : (0,
                        m.Q3)("v-if", !0)]
                    }
                    )),
                    _: 3
                }, 8, ["name"])])
            }
            ], ["__scopeId", "data-v-4ffb8798"]]);
            var pt = {
                class: "range-slider-bar",
                ref: "slider-bar"
            };
            const mt = {
                data: function() {
                    return {
                        value: null !== this.defaultValue ? this.defaultValue : 0,
                        rangeSliderData: null,
                        rangeSteps: this.steps,
                        index: 0
                    }
                },
                props: {
                    steps: {
                        type: Array,
                        default: null
                    },
                    defaultValue: {
                        type: [Number, null],
                        default: null
                    },
                    readOnlyValue: {
                        type: [Number, null],
                        default: null
                    },
                    modelValue: {
                        type: [Number, null],
                        default: null
                    },
                    min: {
                        type: Number,
                        default: 0
                    },
                    max: {
                        type: Number,
                        default: 100
                    },
                    showDots: {
                        type: Boolean,
                        default: !1
                    },
                    viewType: {
                        type: String,
                        default: "range"
                    }
                },
                watch: {
                    modelValue: function() {
                        this.detectIndex()
                    },
                    readOnlyValue: function() {
                        this.detectIndex()
                    }
                },
                computed: {
                    sliderLeft: function() {
                        return this.rangeSteps ? this.index / (this.rangeSteps.length - 1) * 100 : 0
                    },
                    rangeDots: function() {
                        var t = this;
                        return this.rangeSteps ? this.rangeSteps.map((function(e, n) {
                            return n / (t.rangeSteps.length - 1) * 100
                        }
                        )) : []
                    }
                },
                mounted: function() {
                    if (this.min >= this.max)
                        console.warn("the min value is grater than max value");
                    else {
                        if (!this.steps) {
                            this.rangeSteps = [];
                            for (var t = this.min; t <= this.max; t++)
                                this.rangeSteps.push(t)
                        }
                        this.detectIndex(),
                        window.addEventListener("pointermove", this.onMove),
                        window.addEventListener("pointerup", this.onUp)
                    }
                },
                unmounted: function() {
                    window.removeEventListener("pointermove", this.onMove),
                    window.removeEventListener("pointerup", this.onUp)
                },
                methods: {
                    detectIndex: function() {
                        var t = null !== this.modelValue ? this.modelValue : null !== this.readOnlyValue ? this.readOnlyValue : this.value;
                        if (null !== t) {
                            var e = [];
                            for (var n in this.rangeSteps)
                                e.push({
                                    index: n,
                                    distance: Math.abs(this.rangeSteps[n] - t)
                                });
                            e.sort((function(t, e) {
                                return t.distance > e.distance ? 1 : -1
                            }
                            )),
                            this.index = e[0].index
                        }
                    },
                    onDown: function(t) {
                        this.move(t.clientX, t.clientY, !0)
                    },
                    onMove: function(t) {
                        this.rangeSliderData && (t.stopPropagation(),
                        this.move(t.clientX, t.clientY, !1))
                    },
                    onUp: function(t) {
                        this.rangeSliderData = null
                    },
                    move: function(t, e, n) {
                        !0 === n && (this.rangeSliderData = {
                            x: t,
                            y: e
                        });
                        var i = t - $(this.$refs["slider-bar"]).offset().left
                          , a = $(this.$refs.slider).outerWidth();
                        i < 0 ? i = 0 : i > a && (i = a);
                        var s = this.rangeSteps[this.index]
                          , r = a / this.rangeSteps.length
                          , o = Math.round((i - r / 2) / r);
                        o < 0 ? o = 0 : o >= this.rangeSteps.length && (o = this.rangeSteps.length - 1),
                        o != this.index && (this.index = o,
                        this.value = this.rangeSteps[o],
                        this.$emit("change", this.value, s),
                        null !== this.modelValue && this.$emit("update:modelValue", this.value))
                    }
                }
            }
              , ht = (0,
            dt.A)(mt, [["render", function(t, e, n, a, s, r) {
                return (0,
                m.uX)(),
                (0,
                m.CE)("div", {
                    class: "range-slider noselect",
                    ref: "slider",
                    onPointerdown: e[0] || (e[0] = (0,
                    i.withModifiers)((function() {
                        return r.onDown && r.onDown.apply(r, arguments)
                    }
                    ), ["stop"])),
                    onDrop: e[1] || (e[1] = (0,
                    i.withModifiers)((function() {}
                    ), ["prevent"]))
                }, [(0,
                m.Lk)("div", pt, ["range" == n.viewType ? ((0,
                m.uX)(),
                (0,
                m.CE)("div", {
                    key: 0,
                    class: "range-slider-meter",
                    ref: "slider-meter",
                    style: (0,
                    h.normalizeStyle)({
                        width: "".concat(r.sliderLeft, "%")
                    })
                }, null, 4)) : (0,
                m.Q3)("v-if", !0), n.showDots ? ((0,
                m.uX)(!0),
                (0,
                m.CE)(m.FK, {
                    key: 1
                }, (0,
                m.pI)(r.rangeDots, (function(t) {
                    return (0,
                    m.uX)(),
                    (0,
                    m.CE)("div", {
                        class: "range-slider-dot",
                        style: (0,
                        h.normalizeStyle)({
                            left: "".concat(t, "%")
                        })
                    }, null, 4)
                }
                )), 256)) : (0,
                m.Q3)("v-if", !0), (0,
                m.Lk)("div", {
                    class: "range-slider-handle",
                    ref: "slider-handle",
                    style: (0,
                    h.normalizeStyle)({
                        left: "".concat(r.sliderLeft, "%")
                    })
                }, null, 4)], 512)], 544)
            }
            ], ["__scopeId", "data-v-3cb68678"]]);
            var gt = {
                key: 0,
                class: "fa-solid fa-check fa-fw me-1"
            }
              , yt = {
                key: 1,
                class: "fa-solid fa-circle-exclamation fa-fw me-1"
            }
              , vt = {
                class: "toast-message"
            };
            const kt = {
                data: function() {
                    return {
                        showToastPane: !1,
                        message: "",
                        type: "",
                        icon: ""
                    }
                },
                props: {},
                computed: {},
                created: function() {
                    this.toastTimer = null
                },
                mounted: function() {},
                unmounted: function() {},
                methods: {
                    show: function(t, e) {
                        var n = this
                          , i = "";
                        e && "alert" == e.type ? i = "error" : e && "success" == e.type && (i = "success");
                        var a = e && e.duration || 5e3
                          , s = e && e.icon || "";
                        this.message = t,
                        this.type = i,
                        this.icon = s,
                        this.showToastPane = !0,
                        clearTimeout(this.toastTimer),
                        this.toastTimer = setTimeout((function() {
                            n.showToastPane = !1
                        }
                        ), a)
                    }
                }
            }
              , wt = (0,
            dt.A)(kt, [["render", function(t, e, n, a, s, r) {
                return (0,
                m.uX)(),
                (0,
                m.Wv)(m.Im, {
                    to: "body"
                }, [(0,
                m.bF)(i.Transition, {
                    name: "toast-pane"
                }, {
                    default: (0,
                    m.k6)((function() {
                        return [s.showToastPane ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", {
                            key: 0,
                            class: "toast-pane d-flex jcc",
                            onClick: e[0] || (e[0] = function(t) {
                                return s.showToastPane = !1
                            }
                            )
                        }, [(0,
                        m.Lk)("div", {
                            class: (0,
                            h.normalizeClass)(["toast-pane-panel py-2 px-3 text-center", {
                                error: "error" == s.type,
                                success: "success" == s.type
                            }])
                        }, [s.icon ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)(m.FK, {
                            key: 0
                        }, ["checked" == s.icon ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("i", gt)) : "alert" == s.icon ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("i", yt)) : (0,
                        m.Q3)("v-if", !0)], 64)) : (0,
                        m.Q3)("v-if", !0), (0,
                        m.Lk)("span", vt, (0,
                        h.toDisplayString)(s.message), 1)], 2)])) : (0,
                        m.Q3)("v-if", !0)]
                    }
                    )),
                    _: 1
                })])
            }
            ], ["__scopeId", "data-v-3c1aa142"]]);
            var Lt = {
                class: "p-3 d-flex flex-column confirm-modal"
            }
              , xt = {
                key: 0,
                class: "confirm-title"
            }
              , bt = {
                key: 1,
                class: "confirm-lead"
            }
              , St = {
                key: 2,
                class: "confirm-alert mt-1"
            }
              , Dt = {
                key: 3,
                class: "confirm-alert mt-1"
            }
              , Ct = {
                key: 4,
                class: "confirm-aside mt-1"
            };
            const jt = {
                components: {
                    modal: ft
                },
                data: function() {
                    return {
                        posting: !1,
                        showModal: !1,
                        type: null,
                        title: "",
                        lead: "",
                        alert: "",
                        info: "",
                        button: "",
                        callback: null,
                        onFinally: null,
                        hideCancelButton: !1
                    }
                },
                props: {},
                computed: {},
                created: function() {},
                mounted: function() {},
                unmounted: function() {},
                methods: {
                    reset: function() {
                        this.showModal = !1,
                        this.title = "",
                        this.lead = "",
                        this.alert = "",
                        this.info = "",
                        this.aside = "",
                        this.button = "",
                        this.callback = null,
                        this.onFinally = null,
                        this.posting = !1,
                        this.hideCancelButton = !1
                    },
                    onConfirmOk: function() {
                        this.showModal = !1,
                        this.callback && this.callback()
                    },
                    onShow: function() {
                        this.activeElement = document.activeElement,
                        this.activeElement && this.activeElement.blur()
                    },
                    onHide: function() {
                        this.onFinally && this.onFinally(),
                        this.activeElement && this.activeElement.focus()
                    },
                    show: function(t, e, n) {
                        var i = this;
                        this.reset(),
                        this.title = t.title || "",
                        this.lead = t.lead || "",
                        this.type = t.type || "",
                        this.alert = t.alert || "",
                        this.info = t.info || "",
                        this.aside = t.aside || "",
                        this.button = t.button,
                        this.hideCancelButton = t.hideCancelButton || !1,
                        this.callback = e,
                        this.onFinally = n,
                        t.lazy ? (this.showModal = !1,
                        setTimeout((function() {
                            i.showModal = !0,
                            t.onShown && t.onShown()
                        }
                        ), t.lazy)) : (this.showModal = !0,
                        t.onShown && t.onShown())
                    }
                }
            }
              , Mt = (0,
            dt.A)(jt, [["render", function(t, e, n, i, a, s) {
                var r = (0,
                m.g2)("modal");
                return (0,
                m.uX)(),
                (0,
                m.Wv)(r, {
                    show: a.showModal,
                    onCancel: e[0] || (e[0] = function(t) {
                        return a.showModal = !1
                    }
                    ),
                    onApply: s.onConfirmOk,
                    onShow: s.onShow,
                    onHide: s.onHide,
                    "enter-to-apply": !0,
                    "hide-cancel-button": a.hideCancelButton,
                    applylabel: a.button,
                    "button-type": a.type || null,
                    processing: a.posting,
                    "prevent-outside-click": !0,
                    "z-index": "9999"
                }, {
                    body: (0,
                    m.k6)((function() {
                        return [(0,
                        m.Lk)("div", Lt, [a.title ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", xt, (0,
                        h.toDisplayString)(a.title), 1)) : (0,
                        m.Q3)("v-if", !0), a.lead ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", bt, (0,
                        h.toDisplayString)(a.lead), 1)) : (0,
                        m.Q3)("v-if", !0), a.alert ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", St, [e[1] || (e[1] = (0,
                        m.Lk)("i", {
                            class: "fas fa-exclamation-circle text-danger me-1"
                        }, null, -1)), (0,
                        m.eW)((0,
                        h.toDisplayString)(a.alert), 1)])) : (0,
                        m.Q3)("v-if", !0), a.info ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", Dt, [e[2] || (e[2] = (0,
                        m.Lk)("i", {
                            class: "fa-solid fa-circle-info text-primary me-1"
                        }, null, -1)), (0,
                        m.eW)((0,
                        h.toDisplayString)(a.info), 1)])) : (0,
                        m.Q3)("v-if", !0), t.aside ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", Ct, (0,
                        h.toDisplayString)(t.aside), 1)) : (0,
                        m.Q3)("v-if", !0)])]
                    }
                    )),
                    _: 1
                }, 8, ["show", "onApply", "onShow", "onHide", "hide-cancel-button", "applylabel", "button-type", "processing"])
            }
            ], ["__scopeId", "data-v-56e2cd8a"]]);
            var Et = {
                class: "d-flex flex-column flex-md-row justify-content-md-between align-items-md-center w-100"
            }
              , Ot = {
                key: 0,
                class: "fas fa-chevron-circle-down fa-fw text-inactive"
            }
              , Tt = {
                key: 1,
                class: "fas fa-chevron-circle-right fa-fw text-primary"
            }
              , $t = {
                class: "ms-1 me-2"
            }
              , Xt = {
                class: "d-flex aic jce"
            }
              , zt = {
                key: 0,
                class: "progress-head"
            }
              , It = {
                class: "progress-percent mx-1"
            }
              , Nt = {
                key: 1,
                class: "progress-head done"
            }
              , At = {
                class: "d-flex jcc aic"
            }
              , Wt = {
                key: 0,
                class: "handle align-self-stretch d-flex aic ms-3"
            }
              , _t = {
                class: "mt-2"
            }
              , Pt = {
                class: "small text-aside mb-2"
            }
              , Yt = {
                class: ""
            }
              , Qt = {
                class: ""
            }
              , Ft = {
                class: ""
            }
              , Bt = {
                key: 0,
                class: "fas fa-chevron-circle-down fa-fw text-inactive"
            }
              , Ht = {
                key: 1,
                class: "fas fa-chevron-circle-right fa-fw"
            }
              , Vt = {
                class: "ms-1"
            }
              , Ut = ["placeholder"]
              , Kt = {
                key: 1,
                class: "bt mt-2"
            }
              , Rt = {
                key: 0,
                class: "fas fa-chevron-circle-down fa-fw text-inactive"
            }
              , Gt = {
                key: 1,
                class: "fas fa-chevron-circle-right fa-fw"
            }
              , Zt = {
                class: "ms-1"
            }
              , Jt = {
                key: 0,
                class: "d-flex jcb bt-dashed mt-2 pt-2 flex-column flex-sm-row"
            }
              , qt = {
                class: ""
            }
              , te = {
                class: "nowrap"
            }
              , ee = {
                key: 0,
                class: "fas fa-check fa-fw text-primary"
            }
              , ne = {
                key: 0,
                class: "small text-aside mb-2 mb-sm-0"
            }
              , ie = {
                class: "d-flex aic"
            }
              , ae = {
                class: "slider"
            }
              , se = {
                class: "slider-progress text-right"
            }
              , re = {
                key: 1,
                class: "d-flex flex-column bt-dashed mt-2 pt-2"
            }
              , oe = {
                class: "d-flex jcb flex-column flex-sm-row"
            }
              , le = {
                class: "nowrap"
            }
              , ce = {
                key: 0,
                class: "fas fa-check fa-fw text-primary"
            }
              , ue = {
                key: 0,
                class: "small text-aside mb-2 mb-sm-0"
            }
              , de = {
                class: "me-2"
            }
              , fe = {
                class: "d-flex aic justify-content-end"
            }
              , pe = {
                key: 0
            }
              , me = ["onClick"]
              , he = {
                key: 1
            }
              , ge = ["onClick"]
              , ye = {
                class: "ms-3 slider-progress text-right"
            }
              , ve = {
                key: 0,
                class: "mt-3 align-self-stretch align-self-sm-end noselect"
            }
              , ke = {
                class: "d-flex jcb mb-1"
            }
              , we = {
                class: "nowrap small text-aside me-2"
            }
              , Le = {
                class: "slider"
            }
              , xe = {
                class: "nowrap small text-aside slider-progress text-right"
            }
              , be = {
                key: 3,
                class: "bt mt-2"
            }
              , Se = {
                key: 4,
                class: "mt-4"
            }
              , De = {
                key: 0
            }
              , Ce = {
                class: "subtitle text-primary"
            }
              , je = {
                key: 1
            }
              , Me = {
                key: 0,
                class: "subtitle text-danger"
            }
              , Ee = {
                class: "small"
            }
              , Oe = {
                key: 1,
                class: "subtitle text-danger"
            }
              , Te = ["innerHTML"]
              , $e = {
                key: 2,
                class: "subtitle text-primary"
            }
              , Xe = {
                key: 3,
                class: "subtitle text-primary"
            }
              , ze = {
                key: 5,
                class: "mt-4"
            }
              , Ie = {
                class: "subtitle text-primary"
            }
              , Ne = {
                class: "calendar result mt-4 mb-2",
                ref: "calendar"
            }
              , Ae = {
                key: 0,
                class: "small d-inline-block"
            }
              , We = {
                key: 1,
                class: "small"
            }
              , _e = {
                class: "presentation w-100"
            }
              , Pe = {
                class: "schedule-box-label small"
            }
              , Ye = {
                class: "text"
            }
              , Qe = {
                class: "holiday-cells"
            }
              , Fe = {
                class: "text-aside text-right small"
            }
              , Be = {
                class: "mt-4 d-flex jcb"
            };
            function He(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = Array(e); n < e; n++)
                    i[n] = t[n];
                return i
            }
            var Ve = function(t) {
                t || (t = {}),
                "string" == typeof t.progress && (t.progress = parseInt(t.progress)),
                "string" == typeof t.time && (t.time = parseFloat(t.time)),
                "string" == typeof t.par_page && (t.par_page = parseInt(t.par_page)),
                "string" == typeof t.frozen && (t.frozen = "true" == t.frozen),
                this.name = t.name || "",
                this.time = t.time || 8,
                this.par_page = 0 === t.par_page ? 0 : 1,
                this.frozen = !0 === t.frozen,
                this.progress = t.progress || 0,
                this.progresses = t.progresses || {},
                this.show_detail = !1
            };
            Ve.prototype = {
                hours: function(t) {
                    return this.time || (this.time = 1),
                    0 == this.par_page ? this.time : t ? this.time * t : 1
                },
                frozenHours: function(t) {
                    return this.time || (this.time = 1),
                    this.frozen ? this.time : Math.round(this.time * t * 10) / 10
                }
            };
            var Ue = [new Ve({
                name: gettext("プロット"),
                time: 40,
                par_page: 0
            }), new Ve({
                name: gettext("ネーム"),
                time: 2,
                par_page: 1
            }), new Ve({
                name: gettext("下描き"),
                time: 4,
                par_page: 1
            }), new Ve({
                name: gettext("ペン入れ・ベタ"),
                time: 7,
                par_page: 1
            }), new Ve({
                name: gettext("トーン作業・仕上げ"),
                time: 3,
                par_page: 1
            }), new Ve({
                name: gettext("表紙"),
                time: 40,
                par_page: 0
            })]
              , Ke = [{
                time: 8
            }, {
                time: 8
            }, {
                time: 8
            }, {
                time: 8
            }, {
                time: 8
            }, {
                time: 8
            }, {
                time: 8
            }]
              , Re = function(t) {
                if (t || (t = {}),
                "string" == typeof t.adjustment && (t.adjustment = parseFloat(t.adjustment)),
                "string" == typeof t.page && (t.page = parseInt(t.page)),
                this.id = t.id || null,
                this.guid = t.guid || null,
                this.filename = t.filename || "",
                this.worktime = t.worktime || Ke,
                this.dueDate = t.dueDate ? moment(t.dueDate) : null,
                this.startDate = t.startDate ? moment(t.startDate) : null,
                this.adjustment = t.adjustment || 1,
                this.updated_at = t.updated_at || 0,
                this.memo = t.memo || "",
                this.page = t.page || 16,
                this.order = t.order || 0,
                this.holidays = t.holidays || [],
                this.actEndDate = t.actEndDate ? moment(t.actEndDate) : moment(),
                this.reAdjustment = 0,
                this.archived = void 0 !== t.archived && t.archived,
                t.processes)
                    for (var e in this.processes = [],
                    t.processes)
                        this.processes.push(new Ve(t.processes[e]));
                else
                    this.processes = Ue
            };
            function Ge(t) {
                return moment().isSame(t, "days")
            }
            function Ze(t) {
                var e = Math.floor(t)
                  , n = t - e;
                return n = Math.round(60 * n),
                (e ? l("%s時間", [e]) : "") + (n ? l("%s分", [n]) : "")
            }
            function Je(t, e, n, i, a, s, r) {
                if (0 == e.reduce((function(t, e) {
                    return t + e.time
                }
                ), 0))
                    return [];
                s || (s = 1);
                var o = moment(t).startOf("day")
                  , l = e[o.day()].time;
                n.contains(o.format("YYYYMMDD")) && (l = 0);
                var c, u = [], d = function(t, e) {
                    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (!n) {
                        if (Array.isArray(t) || (n = function(t, e) {
                            if (t) {
                                if ("string" == typeof t)
                                    return He(t, e);
                                var n = {}.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name),
                                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? He(t, e) : void 0
                            }
                        }(t)) || e && t && "number" == typeof t.length) {
                            n && (t = n);
                            var i = 0
                              , a = function() {};
                            return {
                                s: a,
                                n: function() {
                                    return i >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[i++]
                                    }
                                },
                                e: function(t) {
                                    throw t
                                },
                                f: a
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var s, r = !0, o = !1;
                    return {
                        s: function() {
                            n = n.call(t)
                        },
                        n: function() {
                            var t = n.next();
                            return r = t.done,
                            t
                        },
                        e: function(t) {
                            o = !0,
                            s = t
                        },
                        f: function() {
                            try {
                                r || null == n.return || n.return()
                            } finally {
                                if (o)
                                    throw s
                            }
                        }
                    }
                }(i);
                try {
                    for (d.s(); !(c = d.n()).done; ) {
                        var f = c.value
                          , p = f.hours(a);
                        if (f.frozen || (p *= s),
                        !0 === r) {
                            if (100 == f.progress)
                                continue;
                            f.progress > 0 && (p *= (100 - f.progress) / 100)
                        }
                        for (var m = {
                            name: f.name,
                            start: o.clone()
                        }; ; ) {
                            if (!(p > l)) {
                                m.end = o.clone(),
                                0 == (l -= p) && o.add(1, "day");
                                break
                            }
                            p -= l,
                            o.add(1, "day"),
                            l = n.contains(o.format("YYYYMMDD")) ? 0 : e[o.day()].time
                        }
                        u.push(m)
                    }
                } catch (t) {
                    d.e(t)
                } finally {
                    d.f()
                }
                return u
            }
            function qe(t) {
                var e = Math.min.apply(Math, Object.keys(t).map((function(e, n) {
                    return t[e].start.valueOf()
                }
                )))
                  , n = Math.max.apply(Math, Object.keys(t).map((function(e, n) {
                    return t[e].end.valueOf()
                }
                )));
                e = moment(e).startOf("week"),
                n = moment(n).endOf("week").add(1, "day");
                for (var i = [], a = e.clone(); a.isBefore(n, "day"); a.add(1, "week")) {
                    var s = a.clone().endOf("week")
                      , r = {
                        cells: [],
                        view: []
                    }
                      , o = t.filter((function(t) {
                        return t.start >= a && t.start <= s || t.end >= a && t.end <= s || t.start < a && t.end > s
                    }
                    ))
                      , l = {}
                      , c = o.length
                      , u = 0;
                    for (var d in o) {
                        for (var f = o[d], p = {
                            schedule: f,
                            startDay: f.start < a ? 0 : f.start.day(),
                            endDay: f.end > s ? 6 : f.end.day(),
                            step: 0
                        }, m = 0, h = 0; h < c; h++) {
                            for (var g = !1, y = p.startDay; y <= p.endDay; y++)
                                if (l[v = a.clone().add(y, "days").format("YYYYMMDD")] || (l[v] = new Array(c),
                                l[v].fill(0)),
                                1 == l[v][h]) {
                                    g = !0;
                                    break
                                }
                            if (!g) {
                                m = h;
                                break
                            }
                        }
                        for (p.isFirst = f.start >= a,
                        p.isLast = f.end <= s,
                        p.step = m,
                        r.view.push(p),
                        u = Math.max(u, m),
                        y = p.startDay; y <= p.endDay; y++) {
                            var v;
                            l[v = a.clone().add(y, "days").format("YYYYMMDD")] || (l[v] = new Array(c,0),
                            l[v].fill(0)),
                            l[v][m] = 1
                        }
                    }
                    for (var k = 0; k < 7; k++)
                        r.cells.push(a.clone().add(k, "days"));
                    r.maxStep = u,
                    i.push(r)
                }
                return i
            }
            function tn(t, e, n, i, a, s, r) {
                var o = moment(t).add(-1, "days")
                  , l = function(t, c, u) {
                    var d = Je(e, n, i, a, s, t, r);
                    if (!d || 0 == d.length)
                        return 1;
                    var f = d[d.length - 1].end;
                    return !(t < 1e-5) && (t > 100 || u <= .001 || f.isSame(o, "day") ? t : f.isAfter(o, "day") ? (!1 === c && (u *= .1),
                    l(t - u, !0, u)) : f.isBefore(o, "day") ? (!0 === c && (u *= .1),
                    l(t + u, !1, u)) : void 0)
                };
                return l(1, null, .1)
            }
            Re.prototype = {
                getProgress: function() {
                    var t = 0
                      , e = 0;
                    for (var n in this.processes) {
                        var i = this.processes[n];
                        t += i.hours(this.page),
                        e += i.hours(this.page) * (i.progress / 100)
                    }
                    var a = Math.round(e / t * 1e3) / 10;
                    return a > 100 ? 100 : a
                },
                copy: function() {
                    return new Re({
                        id: this.id,
                        guid: this.guid,
                        filename: this.filename,
                        worktime: this.worktime,
                        dueDate: this.dueDate,
                        startDate: this.startDate,
                        adjustment: this.adjustment,
                        updated_at: this.updated_at,
                        memo: this.memo,
                        page: this.page,
                        order: this.order,
                        holidays: this.holidays,
                        actEndDate: this.actEndDate,
                        archived: this.archived,
                        processes: this.processes
                    })
                }
            };
            const en = {
                setup: function() {
                    return {
                        format: o,
                        isToday: Ge,
                        toHourMin: Ze
                    }
                },
                components: {
                    RangeSlider: ht,
                    Modal: ft
                },
                props: {
                    estimate: {
                        type: Object,
                        required: !0
                    },
                    archived: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        opened: !1,
                        memoOpened: !0,
                        progressOpened: !0,
                        deleting: !1,
                        now: moment(),
                        holidayView: []
                    }
                },
                computed: {
                    startDate: function() {
                        return this.estimate.startDate && this.now.isAfter(this.estimate.startDate) ? this.now : this.estimate.startDate
                    },
                    schedule: function() {
                        var t = this.estimate;
                        return Je(this.startDate, t.worktime, t.holidays, t.processes, t.page, t.adjustment)
                    },
                    originalSchedule: function() {
                        var t = this.estimate
                          , e = Je(t.startDate, t.worktime, t.holidays, t.processes, t.page, t.adjustment < 1 ? t.adjustment : 1);
                        return e.forEach((function(t) {
                            t.original = !0
                        }
                        )),
                        e
                    },
                    originalEndDate: function() {
                        return this.originalSchedule[this.originalSchedule.length - 1].end
                    },
                    realStart: function() {
                        var t = this.estimate
                          , e = moment();
                        return t.startDate && t.startDate.isAfter(e) ? t.startDate : e
                    },
                    adjustment: function() {
                        var t = this.estimate;
                        return tn(t.dueDate, this.realStart, t.worktime, t.holidays, t.processes, t.page, !0)
                    },
                    adjustmentForOrigin: function() {
                        var t = this.estimate;
                        return tn(this.originalEndDate, this.realStart, t.worktime, t.holidays, t.processes, t.page, !0)
                    },
                    adjustedSchedule: function() {
                        var t = this.estimate;
                        return !1 === this.adjustment ? [] : Je(this.realStart, t.worktime, t.holidays, t.processes, t.page, this.adjustment < 1 ? this.adjustment : 1, !0)
                    },
                    reAdjustment: function() {
                        return !1 !== this.adjustment && this.adjustment / this.estimate.adjustment
                    },
                    realAdjustment: function() {
                        return !1 !== this.adjustment && this.adjustment * this.estimate.adjustment
                    },
                    scheduleView: function() {
                        return qe(this.originalSchedule.concat(this.adjustedSchedule))
                    }
                },
                created: function() {
                    this.progressStep = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                    this.progressTimer = null
                },
                mounted: function() {
                    var t = this
                      , e = this;
                    this.resizeObserver = new ResizeObserver((function(t) {
                        e.holidayCellsChanged()
                    }
                    )),
                    this.resizeObserver.observe(this.$refs.calendar),
                    this.$refs["calendar-row"].forEach((function(e) {
                        t.resizeObserver.observe(e)
                    }
                    ))
                },
                unmounted: function() {
                    this.resizeObserver.disconnect()
                },
                methods: {
                    clickWhole: function(t) {
                        this.estimate.opened || (this.estimate.opened = !this.estimate.opened)
                    },
                    holidayCellsChanged: function() {
                        var t = this
                          , e = this.$refs.calendar.getBoundingClientRect();
                        this.holidayView = this.estimate.holidays.map((function(n) {
                            var i = t.$refs["cell-".concat(n)];
                            if (i) {
                                var a = i[0].getBoundingClientRect();
                                return {
                                    width: a.width + 1,
                                    height: a.height + 1,
                                    top: a.top - e.top - 1,
                                    left: a.left - e.left - 1
                                }
                            }
                        }
                        ))
                    },
                    setProgress: function(t, e, n) {
                        if (this.estimate && this.estimate.id && (this.progressTimer || (this.progressTimer = moment().valueOf()),
                        !(moment().valueOf - this.progressTimer < 500))) {
                            if (this.progressTimer = moment().valueOf(),
                            0 == e.par_page)
                                e.progress = t;
                            else {
                                e.progresses[n] = t;
                                var i = Object.values(e.progresses).slice(0, this.estimate.page);
                                if (i.length > 0) {
                                    var a = i.reduce((function(t, e) {
                                        return t + parseInt(e)
                                    }
                                    ), 0);
                                    e.progress = a / this.estimate.page
                                }
                            }
                            this.$emit("changed")
                        }
                    },
                    setMemo: function() {
                        this.progressTimer || (this.progressTimer = moment().valueOf()),
                        moment().valueOf - this.progressTimer < 500 || (this.progressTimer = moment().valueOf(),
                        this.$emit("changed"))
                    }
                }
            }
              , nn = (0,
            dt.A)(en, [["render", function(t, e, n, a, s, r) {
                var o = (0,
                m.g2)("RangeSlider")
                  , l = (0,
                m.gN)("flexible");
                return (0,
                m.uX)(),
                (0,
                m.CE)("div", {
                    onClick: e[7] || (e[7] = function() {
                        return r.clickWhole && r.clickWhole.apply(r, arguments)
                    }
                    ),
                    class: (0,
                    h.normalizeClass)({
                        opening: n.estimate.opened
                    })
                }, [(0,
                m.Lk)("div", {
                    class: "d-flex jcb aic pointer list-title",
                    onClick: e[0] || (e[0] = (0,
                    i.withModifiers)((function(t) {
                        return n.estimate.opened = !n.estimate.opened
                    }
                    ), ["stop"]))
                }, [(0,
                m.Lk)("div", Et, [(0,
                m.Lk)("div", null, [n.estimate.opened ? ((0,
                m.uX)(),
                (0,
                m.CE)("i", Ot)) : ((0,
                m.uX)(),
                (0,
                m.CE)("i", Tt)), (0,
                m.Lk)("span", $t, (0,
                h.toDisplayString)(n.estimate.filename), 1)]), (0,
                m.Lk)("div", Xt, [n.archived ? (0,
                m.Q3)("v-if", !0) : ((0,
                m.uX)(),
                (0,
                m.CE)(m.FK, {
                    key: 0
                }, [100 != n.estimate.getProgress() ? ((0,
                m.uX)(),
                (0,
                m.CE)("div", zt, [(0,
                m.Lk)("span", It, (0,
                h.toDisplayString)(n.estimate.getProgress()), 1), e[8] || (e[8] = (0,
                m.eW)("%"))])) : ((0,
                m.uX)(),
                (0,
                m.CE)("div", Nt, [e[9] || (e[9] = (0,
                m.Lk)("i", {
                    class: "fas fa-check fa-fw"
                }, null, -1)), (0,
                m.eW)((0,
                h.toDisplayString)(t.$t("完了")), 1)]))], 64))])]), (0,
                m.Lk)("div", At, [n.estimate.opened ? (0,
                m.Q3)("v-if", !0) : ((0,
                m.uX)(),
                (0,
                m.CE)("div", Wt, e[10] || (e[10] = [(0,
                m.Lk)("i", {
                    class: "fas fa-grip-lines fa-fw text-disabled"
                }, null, -1)])))])]), (0,
                m.bo)((0,
                m.Lk)("div", _t, [(0,
                m.Lk)("div", Pt, (0,
                h.toDisplayString)(t.$t("最終更新日")) + " " + (0,
                h.toDisplayString)(a.format(n.estimate.updated_at, t.$t("YYYY/M/D HH:mm:ss"))), 1), (0,
                m.Lk)("div", Yt, [e[11] || (e[11] = (0,
                m.Lk)("i", {
                    class: "fas fa-dot-circle text-dt me-2"
                }, null, -1)), (0,
                m.eW)((0,
                h.toDisplayString)(t.pgettext("page count", "%sページ", n.estimate.page)), 1)]), (0,
                m.Lk)("div", Qt, [e[12] || (e[12] = (0,
                m.Lk)("i", {
                    class: "fas fa-dot-circle text-dt me-2"
                }, null, -1)), (0,
                m.eW)((0,
                h.toDisplayString)(n.estimate.startDate.format(t.$t("YYYY年M月D日スタート"))), 1)]), (0,
                m.Lk)("div", Ft, [e[13] || (e[13] = (0,
                m.Lk)("i", {
                    class: "fas fa-dot-circle text-dt me-2"
                }, null, -1)), (0,
                m.eW)((0,
                h.toDisplayString)(n.estimate.dueDate.format(t.$t("YYYY年M月D日〆切"))), 1)]), (0,
                m.Lk)("div", {
                    class: "mt-3 pointer text-dt",
                    onClick: e[1] || (e[1] = function(t) {
                        return s.memoOpened = !s.memoOpened
                    }
                    )
                }, [s.memoOpened ? ((0,
                m.uX)(),
                (0,
                m.CE)("i", Bt)) : ((0,
                m.uX)(),
                (0,
                m.CE)("i", Ht)), (0,
                m.Lk)("span", Vt, (0,
                h.toDisplayString)(t.$t("メモ")), 1)]), s.memoOpened ? (0,
                m.bo)(((0,
                m.uX)(),
                (0,
                m.CE)("textarea", {
                    key: 0,
                    class: "form-control mt-2",
                    onInput: e[2] || (e[2] = function() {
                        return r.setMemo && r.setMemo.apply(r, arguments)
                    }
                    ),
                    "onUpdate:modelValue": e[3] || (e[3] = function(t) {
                        return n.estimate.memo = t
                    }
                    ),
                    placeholder: t.$t("メモを入力")
                }, null, 40, Ut)), [[i.vModelText, n.estimate.memo], [l]]) : ((0,
                m.uX)(),
                (0,
                m.CE)("div", Kt)), (0,
                m.Lk)("div", {
                    class: "mt-3 pointer text-dt",
                    onClick: e[4] || (e[4] = function(t) {
                        return s.progressOpened = !s.progressOpened
                    }
                    )
                }, [s.progressOpened ? ((0,
                m.uX)(),
                (0,
                m.CE)("i", Rt)) : ((0,
                m.uX)(),
                (0,
                m.CE)("i", Gt)), (0,
                m.Lk)("span", Zt, (0,
                h.toDisplayString)(t.$t("進捗入力")), 1)]), s.progressOpened ? ((0,
                m.uX)(!0),
                (0,
                m.CE)(m.FK, {
                    key: 2
                }, (0,
                m.pI)(r.schedule, (function(s, l) {
                    return (0,
                    m.uX)(),
                    (0,
                    m.CE)(m.FK, null, [0 == n.estimate.processes[l].par_page ? ((0,
                    m.uX)(),
                    (0,
                    m.CE)("div", Jt, [(0,
                    m.Lk)("div", qt, [(0,
                    m.Lk)("div", te, [100 == n.estimate.processes[l].progress ? ((0,
                    m.uX)(),
                    (0,
                    m.CE)("i", ee)) : (0,
                    m.Q3)("v-if", !0), (0,
                    m.eW)((0,
                    h.toDisplayString)(s.name), 1)]), r.adjustment && n.estimate.processes[l].progress < 100 ? ((0,
                    m.uX)(),
                    (0,
                    m.CE)("div", ne, [e[14] || (e[14] = (0,
                    m.Lk)("i", {
                        class: "far fa-clock fa-fw"
                    }, null, -1)), (0,
                    m.eW)((0,
                    h.toDisplayString)(t.$t("猶予")) + " " + (0,
                    h.toDisplayString)(a.toHourMin(n.estimate.processes[l].frozenHours(r.adjustment * n.estimate.adjustment))), 1)])) : (0,
                    m.Q3)("v-if", !0)]), (0,
                    m.Lk)("div", ie, [(0,
                    m.Lk)("div", ae, [(0,
                    m.bF)(o, {
                        steps: t.progressStep,
                        "default-value": n.estimate.processes[l].progress,
                        onChange: function(t) {
                            return r.setProgress(t, n.estimate.processes[l])
                        }
                    }, null, 8, ["steps", "default-value", "onChange"])]), (0,
                    m.Lk)("div", se, (0,
                    h.toDisplayString)(n.estimate.processes[l].progress) + "%", 1)])])) : ((0,
                    m.uX)(),
                    (0,
                    m.CE)("div", re, [(0,
                    m.Lk)("div", oe, [(0,
                    m.Lk)("div", null, [(0,
                    m.Lk)("div", null, [(0,
                    m.Lk)("span", le, [100 == n.estimate.processes[l].progress ? ((0,
                    m.uX)(),
                    (0,
                    m.CE)("i", ce)) : (0,
                    m.Q3)("v-if", !0), (0,
                    m.eW)((0,
                    h.toDisplayString)(s.name), 1)])]), r.adjustment && n.estimate.processes[l].progress < 100 ? ((0,
                    m.uX)(),
                    (0,
                    m.CE)("div", ue, [e[15] || (e[15] = (0,
                    m.Lk)("i", {
                        class: "far fa-clock fa-fw"
                    }, null, -1)), (0,
                    m.eW)((0,
                    h.toDisplayString)(t.$t("猶予")) + " ", 1), (0,
                    m.Lk)("span", de, (0,
                    h.toDisplayString)(t.$t("1ページにつき")), 1), (0,
                    m.eW)((0,
                    h.toDisplayString)(a.toHourMin(n.estimate.processes[l].frozenHours(r.adjustment * n.estimate.adjustment))), 1)])) : (0,
                    m.Q3)("v-if", !0)]), (0,
                    m.Lk)("div", fe, [n.estimate.processes[l].show_detail ? ((0,
                    m.uX)(),
                    (0,
                    m.CE)("div", he, [(0,
                    m.Lk)("a", {
                        href: "",
                        class: "small text-primary",
                        onClick: (0,
                        i.withModifiers)((function(t) {
                            return n.estimate.processes[l].show_detail = !1
                        }
                        ), ["prevent"])
                    }, [e[17] || (e[17] = (0,
                    m.Lk)("i", {
                        class: "fas fa-chevron-circle-down fa-fw"
                    }, null, -1)), (0,
                    m.eW)((0,
                    h.toDisplayString)(t.$t("詳細を隠す")), 1)], 8, ge)])) : ((0,
                    m.uX)(),
                    (0,
                    m.CE)("div", pe, [(0,
                    m.Lk)("a", {
                        href: "",
                        class: "small text-primary",
                        onClick: (0,
                        i.withModifiers)((function(t) {
                            return n.estimate.processes[l].show_detail = !0
                        }
                        ), ["prevent"])
                    }, [e[16] || (e[16] = (0,
                    m.Lk)("i", {
                        class: "fas fa-chevron-circle-up fa-fw"
                    }, null, -1)), (0,
                    m.eW)((0,
                    h.toDisplayString)(t.$t("詳細を表示")), 1)], 8, me)])), (0,
                    m.Lk)("div", ye, (0,
                    h.toDisplayString)(Math.round(10 * n.estimate.processes[l].progress) / 10) + "% ", 1)])]), n.estimate.processes[l].show_detail ? ((0,
                    m.uX)(),
                    (0,
                    m.CE)("div", ve, [((0,
                    m.uX)(!0),
                    (0,
                    m.CE)(m.FK, null, (0,
                    m.pI)(n.estimate.page, (function(e) {
                        return (0,
                        m.uX)(),
                        (0,
                        m.CE)("div", ke, [(0,
                        m.Lk)("div", we, (0,
                        h.toDisplayString)(t.pgettext("page number", "%sページ", e)), 1), (0,
                        m.Lk)("div", Le, [(0,
                        m.bF)(o, {
                            steps: t.progressStep,
                            "default-value": n.estimate.processes[l].progresses[e],
                            onChange: function(t) {
                                return r.setProgress(t, n.estimate.processes[l], e)
                            }
                        }, null, 8, ["steps", "default-value", "onChange"])]), (0,
                        m.Lk)("div", xe, (0,
                        h.toDisplayString)(n.estimate.processes[l].progresses[e] || 0) + "%", 1)])
                    }
                    )), 256))])) : (0,
                    m.Q3)("v-if", !0)]))], 64)
                }
                )), 256)) : ((0,
                m.uX)(),
                (0,
                m.CE)("div", be)), (0,
                m.Q3)(" re:{{reAdjustment}} | adj:{{adjustment}} | est.adj:{{estimate.adjustment}} | real: {{realAdjustment}} | orig: {{adjustmentForOrigin}} "), n.estimate.getProgress() < 100 ? ((0,
                m.uX)(),
                (0,
                m.CE)("div", Se, [r.adjustmentForOrigin < 1 && r.adjustment > 1 ? ((0,
                m.uX)(),
                (0,
                m.CE)("div", De, [(0,
                m.Lk)("div", Ce, (0,
                h.toDisplayString)(t.$t("計画より遅れていますが、〆切まではまだ余裕があります")), 1)])) : ((0,
                m.uX)(),
                (0,
                m.CE)("div", je, [0 == r.adjustment ? ((0,
                m.uX)(),
                (0,
                m.CE)("div", Me, [(0,
                m.eW)((0,
                h.toDisplayString)(t.$t("スケジュールが破綻してます！")), 1), e[18] || (e[18] = (0,
                m.Lk)("br", null, null, -1)), (0,
                m.Lk)("span", Ee, (0,
                h.toDisplayString)(t.$t("進捗を入力するか、再計画しましょう")), 1)])) : r.adjustment < 1 ? ((0,
                m.uX)(),
                (0,
                m.CE)("div", Oe, [(0,
                m.eW)((0,
                h.toDisplayString)(t.$t("計画より遅れています")), 1), e[19] || (e[19] = (0,
                m.Lk)("br", null, null, -1)), (0,
                m.Lk)("span", {
                    class: "small",
                    innerHTML: t.$t("進捗を入力するか、今の計画のさらに<span class='h5'>%s倍</span>がんばりましょう", [Math.round(100 / r.adjustment) / 100])
                }, null, 8, Te)])) : r.adjustment > 2 ? ((0,
                m.uX)(),
                (0,
                m.CE)("div", $e, [e[20] || (e[20] = (0,
                m.Lk)("i", {
                    class: "far fa-thumbs-up fa-fw"
                }, null, -1)), (0,
                m.eW)((0,
                h.toDisplayString)(t.$t("計画よりかなり早く進んでいます")), 1)])) : r.adjustment > 1 ? ((0,
                m.uX)(),
                (0,
                m.CE)("div", Xe, [e[21] || (e[21] = (0,
                m.Lk)("i", {
                    class: "far fa-thumbs-up fa-fw"
                }, null, -1)), (0,
                m.eW)((0,
                h.toDisplayString)(t.$t("計画より早く進んでいます")), 1)])) : (0,
                m.Q3)("v-if", !0)]))])) : (0,
                m.Q3)("v-if", !0), 100 == n.estimate.getProgress() ? ((0,
                m.uX)(),
                (0,
                m.CE)("div", ze, [(0,
                m.Lk)("div", Ie, [e[22] || (e[22] = (0,
                m.Lk)("i", {
                    class: "far fa-thumbs-up fa-fw"
                }, null, -1)), (0,
                m.eW)((0,
                h.toDisplayString)(t.$t("次の作品の予定を立てましょう")), 1)])])) : (0,
                m.Q3)("v-if", !0), (0,
                m.Lk)("div", Ne, [((0,
                m.uX)(!0),
                (0,
                m.CE)(m.FK, null, (0,
                m.pI)(r.scheduleView, (function(i) {
                    return (0,
                    m.uX)(),
                    (0,
                    m.CE)("div", {
                        class: "calendar-row d-flex",
                        ref_for: !0,
                        ref: "calendar-row"
                    }, [((0,
                    m.uX)(!0),
                    (0,
                    m.CE)(m.FK, null, (0,
                    m.pI)(i.cells, (function(e) {
                        return (0,
                        m.uX)(),
                        (0,
                        m.CE)("div", {
                            class: (0,
                            h.normalizeClass)(["calendar-cell d-flex flex-column", {
                                "out-range": e.isBefore(n.estimate.startDate, "day") || e.isAfter(n.estimate.dueDate, "day"),
                                sunday: 0 == e.days()
                            }]),
                            ref_for: !0,
                            ref: "cell-".concat(e.format("YYYYMMDD"))
                        }, [(0,
                        m.Lk)("div", {
                            class: (0,
                            h.normalizeClass)(["text-center p-2 calendar-date", {
                                today: a.isToday(e)
                            }]),
                            style: {
                                "line-height": "1.5rem"
                            }
                        }, [e && 1 == e.date() ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("span", Ae, (0,
                        h.toDisplayString)(e.format("M/")), 1)) : (0,
                        m.Q3)("v-if", !0), (0,
                        m.eW)((0,
                        h.toDisplayString)(e.format("D")) + " ", 1), e.isSame(n.estimate.dueDate, "day") ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", We, (0,
                        h.toDisplayString)(t.$t("〆切")), 1)) : (0,
                        m.Q3)("v-if", !0)], 2), (0,
                        m.Lk)("div", {
                            class: "adjuster",
                            style: (0,
                            h.normalizeStyle)({
                                height: 40 * (i.maxStep + 1) + "px"
                            })
                        }, null, 4)], 2)
                    }
                    )), 256)), (0,
                    m.Lk)("div", _e, [((0,
                    m.uX)(!0),
                    (0,
                    m.CE)(m.FK, null, (0,
                    m.pI)(i.view, (function(t) {
                        return (0,
                        m.uX)(),
                        (0,
                        m.CE)("div", {
                            class: (0,
                            h.normalizeClass)(["schedule-box", {
                                "edge-l": t.isFirst,
                                "edge-r": t.isLast,
                                original: t.schedule.original
                            }]),
                            style: (0,
                            h.normalizeStyle)({
                                left: "calc(" + t.startDay / 7 * 100 + "% + 8px)",
                                top: 10 + 36 * t.step + "px",
                                width: "calc(" + (t.endDay - t.startDay + 1) / 7 * 100 + "% - 16px)"
                            })
                        }, [e[23] || (e[23] = (0,
                        m.Lk)("div", {
                            class: "schedule-box-arrow my-auto"
                        }, null, -1)), (0,
                        m.Lk)("div", Pe, [(0,
                        m.Lk)("span", Ye, (0,
                        h.toDisplayString)(t.schedule.name), 1)])], 6)
                    }
                    )), 256))])], 512)
                }
                )), 256)), ((0,
                m.uX)(!0),
                (0,
                m.CE)(m.FK, null, (0,
                m.pI)(s.holidayView, (function(t) {
                    return (0,
                    m.uX)(),
                    (0,
                    m.CE)("div", Qe, [t ? ((0,
                    m.uX)(),
                    (0,
                    m.CE)("div", {
                        key: 0,
                        class: "holiday-cell",
                        style: (0,
                        h.normalizeStyle)({
                            width: "".concat(t.width, "px"),
                            height: "".concat(t.height, "px"),
                            top: "".concat(t.top, "px"),
                            left: "".concat(t.left, "px")
                        })
                    }, null, 4)) : (0,
                    m.Q3)("v-if", !0)])
                }
                )), 256))], 512), (0,
                m.Lk)("div", Fe, (0,
                h.toDisplayString)(t.$t("点線は計画時のスケジュールです")), 1), (0,
                m.Lk)("div", Be, [(0,
                m.Lk)("div", {
                    class: "secondary-button px-4 py-1 d-flex aic jcc",
                    onClick: e[5] || (e[5] = function(e) {
                        return t.$emit("remove")
                    }
                    )
                }, (0,
                h.toDisplayString)(t.$t("消す")), 1), (0,
                m.Lk)("div", {
                    class: "button",
                    onClick: e[6] || (e[6] = function(e) {
                        return t.$emit("edit")
                    }
                    )
                }, (0,
                h.toDisplayString)(t.$t("計画を変更")), 1)])], 512), [[i.vShow, n.estimate.opened]])], 2)
            }
            ], ["__scopeId", "data-v-78641dfd"]])
              , an = nn;
            var sn = {
                class: "planner"
            }
              , rn = {
                class: "d-flex jcc my-3 aic px-2",
                ref: "edit-nav"
            }
              , on = {
                class: "page",
                key: "due"
            }
              , ln = {
                class: "title text-center mt-5 mb-3"
            }
              , cn = {
                class: "text-center subtitle mb-5"
            }
              , un = {
                class: "calendar-month d-flex jcc mb-3"
            }
              , dn = ["innerHTML"]
              , fn = {
                class: "calendar d-flex flex-wrap"
            }
              , pn = ["onClick"]
              , mn = {
                class: "calendar-date text-center",
                style: {
                    "line-height": "1.5rem"
                }
            }
              , hn = {
                key: 0,
                class: "small d-inline-block"
            }
              , gn = {
                class: "text-right text-gray small mt-2"
            }
              , yn = {
                class: "page",
                key: "start"
            }
              , vn = {
                class: "title text-center mt-5"
            }
              , kn = {
                class: "text-center subtitle mb-5"
            }
              , wn = {
                class: "calendar-month d-flex jcc mb-3"
            }
              , Ln = ["innerHTML"]
              , xn = {
                class: "calendar d-flex flex-wrap"
            }
              , bn = ["onClick"]
              , Sn = {
                class: "calendar-date text-center",
                style: {
                    "line-height": "1.5rem"
                }
            }
              , Dn = {
                key: 0,
                class: "small d-inline-block"
            }
              , Cn = {
                key: 1,
                class: "small"
            }
              , jn = {
                class: "d-flex jcb mt-4"
            }
              , Mn = {
                class: "page",
                key: "page"
            }
              , En = {
                class: "title text-center mt-5"
            }
              , On = {
                class: "text-center subtitle mb-5"
            }
              , Tn = {
                class: "text-center page-count"
            }
              , $n = {
                class: "text-center text-gray mt-3 mb-5"
            }
              , Xn = {
                class: "d-flex jcb mt-4"
            }
              , zn = {
                class: "page",
                key: "process"
            }
              , In = {
                class: "title text-center mt-5"
            }
              , Nn = {
                class: "text-center subtitle mb-5"
            }
              , An = {
                class: "d-flex aic proc-row"
            }
              , Wn = {
                class: "me-2 h5"
            }
              , _n = ["onUpdate:modelValue", "placeholder"]
              , Pn = {
                class: "d-flex jcc aic mx-2 proc-remove-wrapper pointer"
            }
              , Yn = {
                class: "proc-remove"
            }
              , Qn = ["onClick"]
              , Fn = {
                class: "text-right text-placeholder"
            }
              , Bn = {
                class: "text-center my-3"
            }
              , Hn = {
                class: "d-flex jcb mt-4"
            }
              , Vn = {
                class: "page",
                key: "time"
            }
              , Un = {
                class: "title text-center mt-5"
            }
              , Kn = {
                class: "text-center subtitle mb-5"
            }
              , Rn = {
                key: 0,
                class: "d-flex flex-column flex-sm-row jcb bt mt-2 pt-2"
            }
              , Gn = {
                class: "d-flex aic"
            }
              , Zn = {
                class: "form-check form-check-inline"
            }
              , Jn = ["onUpdate:modelValue", "id"]
              , qn = ["for"]
              , ti = {
                class: "form-check form-check-inline"
            }
              , ei = ["onUpdate:modelValue", "id"]
              , ni = ["for"]
              , ii = {
                class: "d-flex aic"
            }
              , ai = ["onUpdate:modelValue", "onInput"]
              , si = {
                class: "nowrap"
            }
              , ri = {
                class: "text-right text-gray mt-3 mb-5"
            }
              , oi = {
                class: "d-flex jcb mt-4"
            }
              , li = {
                class: "page",
                key: "worktime"
            }
              , ci = {
                class: "title text-center mt-5"
            }
              , ui = {
                class: "text-center subtitle mb-5"
            }
              , di = {
                class: "d-flex w-100 noselect"
            }
              , fi = ["onPointerdown"]
              , pi = {
                class: "text-center"
            }
              , mi = {
                class: "worktime-label"
            }
              , hi = {
                class: "worktime-label-time"
            }
              , gi = {
                class: "small d-inline-block ms-1 small"
            }
              , yi = {
                key: 0,
                class: "py-4 d-flex flex-column aic"
            }
              , vi = {
                class: "my-4 text-center"
            }
              , ki = {
                class: "subtitle text-primary"
            }
              , wi = {
                class: "text-inactive"
            }
              , Li = {
                class: "holidays d-flex flex-wrap"
            }
              , xi = ["onClick"]
              , bi = {
                key: 0,
                class: "holiday-month"
            }
              , Si = {
                class: "holiday-day"
            }
              , Di = {
                class: "d-flex jcb mt-4"
            }
              , Ci = {
                class: "page",
                key: "result"
            }
              , ji = {
                class: "title text-center py-4"
            }
              , Mi = {
                key: 0
            }
              , Ei = {
                class: ""
            }
              , Oi = {
                class: ""
            }
              , Ti = {
                class: ""
            }
              , $i = {
                key: 0
            }
              , Xi = {
                class: "text-danger unreal text-center my-5"
            }
              , zi = {
                key: 1
            }
              , Ii = {
                class: "calendar result mt-4"
            }
              , Ni = {
                class: "calendar-row d-flex"
            }
              , Ai = {
                class: "presentation w-100"
            }
              , Wi = {
                class: "schedule-box-label small"
            }
              , _i = {
                class: "text"
            }
              , Pi = {
                key: 0,
                class: "d-flex jce mt-2 text-danger"
            }
              , Yi = ["innerHTML"]
              , Qi = {
                key: 2
            }
              , Fi = {
                class: "calendar result mt-5"
            }
              , Bi = {
                class: "calendar-row d-flex"
            }
              , Hi = {
                class: "presentation w-100"
            }
              , Vi = {
                class: "schedule-box-label small"
            }
              , Ui = {
                class: "text"
            }
              , Ki = {
                key: 0,
                class: "d-flex jce mt-2 text-danger"
            }
              , Ri = ["innerHTML"]
              , Gi = {
                class: "d-flex jcb bt mt-2 pt-2 flex-column flex-sm-row"
            }
              , Zi = {
                class: "d-flex flex-column flex-sm-row"
            }
              , Ji = {
                class: ""
            }
              , qi = {
                class: "text-right"
            }
              , ta = {
                key: 0,
                class: "small text-gray me-2"
            }
              , ea = {
                key: 0,
                class: "mx-2"
            }
              , na = {
                key: 1,
                class: "text-right"
            }
              , ia = {
                class: "text-right ms-3"
            }
              , aa = {
                class: "form-check form-switch"
            }
              , sa = ["onUpdate:modelValue", "id"]
              , ra = ["for"]
              , oa = {
                class: "text-center my-4"
            }
              , la = {
                class: "d-flex jcb mt-4"
            }
              , ca = {
                class: "p-3"
            }
              , ua = ["placeholder"];
            const da = {
                setup: function() {
                    return {
                        format: o,
                        isToday: Ge,
                        toHourMin: Ze
                    }
                },
                components: {
                    draggable: q(),
                    RangeSlider: ht,
                    Modal: ft
                },
                props: {
                    defaultStep: {
                        type: String,
                        required: !0,
                        default: "due"
                    }
                },
                data: function() {
                    return {
                        originalEstimate: null,
                        id: null,
                        filename: "",
                        dueDate: null,
                        startDate: null,
                        processes: [],
                        worktime: [],
                        holidays: [],
                        page: 16,
                        step: this.defaultStep,
                        calendarMonth: moment(),
                        pageForward: !0,
                        worktimePressing: !1,
                        showSave: !1
                    }
                },
                inject: ["$toast"],
                computed: {
                    calendar: function() {
                        for (var t = this.calendarMonth.clone().startOf("month").startOf("week"), e = this.calendarMonth.clone().endOf("month").endOf("week").add(1, "day"), n = [], i = t.clone(); i.isBefore(e, "day"); i.add(1, "day"))
                            n.push(i.clone());
                        return n
                    },
                    properSchedule: function() {
                        return Je(this.startDate, this.worktime, this.holidays, this.processes, this.page, 1, !0)
                    },
                    properScheduleView: function() {
                        return qe(this.properSchedule)
                    },
                    actEndDate: function() {
                        return !!this.properSchedule && this.properSchedule[this.properSchedule.length - 1].end
                    },
                    remain: function() {
                        return !(!this.dueDate || !this.actEndDate) && Math.round((this.dueDate - this.actEndDate) / 864e5) - 1
                    },
                    adjustedScheduleView: function() {
                        var t = tn(this.dueDate, this.startDate, this.worktime, this.holidays, this.processes, this.page);
                        return qe(Je(this.startDate, this.worktime, this.holidays, this.processes, this.page, t))
                    },
                    currentAdjustment: function() {
                        return tn(this.dueDate, this.startDate, this.worktime, this.holidays, this.processes, this.page)
                    },
                    currentAdjustmentTimes: function() {
                        return Math.round(100 / this.currentAdjustment) / 100
                    },
                    canShowResult: function() {
                        return this.startDate && this.dueDate
                    },
                    days: function() {
                        var t = moment(this.startDate)
                          , e = moment(this.dueDate);
                        if (this.startDate && this.dueDate && t.isSameOrBefore(e, "day")) {
                            for (var n = [], i = moment(t).startOf("week"), a = moment(e).endOf("week"); i.isSameOrBefore(a, "day"); )
                                n.push({
                                    date: i.clone(),
                                    key: i.format("YYYYMMDD"),
                                    outRange: i.isBefore(t, "day") || i.isAfter(e, "day")
                                }),
                                i.add(1, "days");
                            return n
                        }
                        return []
                    }
                },
                created: function() {
                    this.daysLabel = [pgettext("sunday", "日"), pgettext("monday", "月"), pgettext("tuesday", "火"), pgettext("wednesday", "水"), pgettext("thursday", "木"), pgettext("friday", "金"), pgettext("saturday", "土")]
                },
                mounted: function() {
                    window.addEventListener("pointermove", this.worktimeMove),
                    window.addEventListener("pointerup", this.worktimeUp)
                },
                unmounted: function() {
                    window.removeEventListener("pointermove", this.worktimeMove),
                    window.removeEventListener("pointerup", this.worktimeUp)
                },
                methods: {
                    init: function(t) {
                        this.originalEstimate = t,
                        this.id = t.id,
                        this.filename = t.filename,
                        this.dueDate = t.dueDate ? moment(t.dueDate) : null,
                        this.startDate = t.startDate ? moment(t.startDate) : null,
                        this.processes = t.processes,
                        this.worktime = t.worktime,
                        this.holidays = t.holidays,
                        this.page = t.page
                    },
                    jump: function(t) {
                        var e = ["due", "start", "page", "process", "time", "worktime", "result"];
                        e.indexOf(t) > e.indexOf(this.step) ? this.pageForward = !0 : this.pageForward = !1,
                        this.step = t,
                        this.$nextTick((function() {
                            $("html, body").animate({
                                scrollTop: 0
                            }, 100, "swing")
                        }
                        )),
                        "due" == t ? this.calendarMonth = this.dueDate || moment() : "start" == t && (this.calendarMonth = this.startDate || moment())
                    },
                    selectDue: function(t) {
                        this.jump("start"),
                        this.dueDate = t
                    },
                    selectStart: function(t) {
                        this.dueDate.isBefore(t, "day") ? this.$toast(gettext("締切よりあとにすることはできません")) : (this.jump("page"),
                        this.startDate = t)
                    },
                    addProcess: function() {
                        this.processes.push(new Ve)
                    },
                    removeProcess: function(t) {
                        this.processes.splice(t, 1)
                    },
                    prevMonth: function() {
                        var t = this.calendarMonth.clone().add(-1, "month");
                        this.calendarMonth = t
                    },
                    nextMonth: function() {
                        var t = this.calendarMonth.clone().add(1, "month");
                        this.calendarMonth = t
                    },
                    changeTime: function(t) {
                        if (t.time) {
                            try {
                                parseFloat(t.time)
                            } catch (e) {
                                t.time = 1
                            }
                            t.time < 0 && (t.time = 1)
                        }
                    },
                    worktimeDown: function(t, e) {
                        var n = this.$refs["worktime-" + e]
                          , i = (this.$refs["worktime-bar-" + e],
                        $(n).innerHeight())
                          , a = i - (t.pageY - $(n).offset().top)
                          , s = Math.round(a / i * 24);
                        s < 0 && (s = 0),
                        s > 24 && (s = 24),
                        this.worktime[e].time = s,
                        this.worktimePressing = e
                    },
                    worktimeMove: function(t) {
                        !1 !== this.worktimePressing && (t.stopPropagation(),
                        this.worktimeDown(t, this.worktimePressing))
                    },
                    worktimeUp: function(t) {
                        this.worktimePressing = !1
                    },
                    toggleHoliday: function(t) {
                        this.holidays.contains(t) ? this.holidays.takeoff(t) : this.holidays.push(t)
                    },
                    save: function() {
                        if (this.filename && this.filename.trim())
                            if (!this.startDate || !this.dueDate || 0 == this.processes.length || 0 == this.worktime.length || this.page <= 0)
                                this.$toast(gettext("不正なデータです"));
                            else {
                                var t = this.originalEstimate.copy();
                                t.filename = this.filename,
                                t.dueDate = this.dueDate,
                                t.startDate = this.startDate,
                                t.processes = this.processes,
                                t.worktime = this.worktime,
                                t.holidays = this.holidays,
                                t.page = this.page,
                                t.adjustment = this.currentAdjustment,
                                this.showSave = !1,
                                this.$emit("save", t)
                            }
                        else
                            this.$toast(gettext("名前をつけてください"))
                    }
                }
            }
              , fa = (0,
            dt.A)(da, [["render", function(t, e, n, a, s, r) {
                var o = (0,
                m.g2)("range-slider")
                  , l = (0,
                m.g2)("draggable")
                  , c = (0,
                m.g2)("modal")
                  , u = (0,
                m.gN)("tooltip");
                return (0,
                m.uX)(),
                (0,
                m.CE)(m.FK, null, [(0,
                m.Lk)("div", sn, [(0,
                m.Lk)("div", rn, [(0,
                m.bo)((0,
                m.Lk)("div", {
                    class: (0,
                    h.normalizeClass)(["link-dot", {
                        active: "due" == s.step
                    }]),
                    onClick: e[0] || (e[0] = function(t) {
                        return r.jump("due")
                    }
                    )
                }, null, 2), [[u, t.$t("〆切")]]), (0,
                m.bo)((0,
                m.Lk)("div", {
                    class: (0,
                    h.normalizeClass)(["link-dot", {
                        active: "start" == s.step
                    }]),
                    onClick: e[1] || (e[1] = function(t) {
                        return r.jump("start")
                    }
                    )
                }, null, 2), [[u, t.$t("開始日")]]), (0,
                m.bo)((0,
                m.Lk)("div", {
                    class: (0,
                    h.normalizeClass)(["link-dot", {
                        active: "page" == s.step
                    }]),
                    onClick: e[2] || (e[2] = function(t) {
                        return r.jump("page")
                    }
                    )
                }, null, 2), [[u, t.$t("ページ数")]]), (0,
                m.bo)((0,
                m.Lk)("div", {
                    class: (0,
                    h.normalizeClass)(["link-dot", {
                        active: "process" == s.step
                    }]),
                    onClick: e[3] || (e[3] = function(t) {
                        return r.jump("process")
                    }
                    )
                }, null, 2), [[u, t.$t("工程")]]), (0,
                m.bo)((0,
                m.Lk)("div", {
                    class: (0,
                    h.normalizeClass)(["link-dot", {
                        active: "time" == s.step
                    }]),
                    onClick: e[4] || (e[4] = function(t) {
                        return r.jump("time")
                    }
                    )
                }, null, 2), [[u, t.$t("予想時間")]]), (0,
                m.bo)((0,
                m.Lk)("div", {
                    class: (0,
                    h.normalizeClass)(["link-dot", {
                        active: "worktime" == s.step
                    }]),
                    onClick: e[5] || (e[5] = function(t) {
                        return r.jump("worktime")
                    }
                    )
                }, null, 2), [[u, t.$t("一日の作業時間")]]), r.canShowResult ? ((0,
                m.uX)(),
                (0,
                m.CE)("div", {
                    key: 0,
                    class: (0,
                    h.normalizeClass)(["link-dot py-1 px-3", {
                        active: "result" == s.step
                    }]),
                    onClick: e[6] || (e[6] = function(t) {
                        return r.jump("result")
                    }
                    )
                }, (0,
                h.toDisplayString)(t.$t("結果")), 3)) : (0,
                m.Q3)("v-if", !0)], 512), (0,
                m.bF)(i.Transition, {
                    name: s.pageForward ? "page" : "page-back",
                    mode: "out-in"
                }, {
                    default: (0,
                    m.k6)((function() {
                        return ["due" == s.step ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", on, [(0,
                        m.Lk)("div", ln, (0,
                        h.toDisplayString)(t.$t("〆切はいつ？")), 1), (0,
                        m.Lk)("div", cn, (0,
                        h.toDisplayString)(t.$t("日付を選んでください")), 1), (0,
                        m.Lk)("div", un, [(0,
                        m.Lk)("div", {
                            class: "px-4 pointer",
                            onClick: e[7] || (e[7] = function() {
                                return r.prevMonth && r.prevMonth.apply(r, arguments)
                            }
                            )
                        }, e[29] || (e[29] = [(0,
                        m.Lk)("i", {
                            class: "fa-solid fa-circle-chevron-left"
                        }, null, -1)])), (0,
                        m.Lk)("div", {
                            innerHTML: t.$t("%(year)s<span class='mx-1 small'>年</span>%(month)s<span class='mx-1 small'>月</span>", {
                                year: s.calendarMonth.format("YYYY"),
                                month: s.calendarMonth.format(t.pgettext("long name", "MM"))
                            })
                        }, null, 8, dn), (0,
                        m.Lk)("div", {
                            class: "px-4 pointer",
                            onClick: e[8] || (e[8] = function() {
                                return r.nextMonth && r.nextMonth.apply(r, arguments)
                            }
                            )
                        }, e[30] || (e[30] = [(0,
                        m.Lk)("i", {
                            class: "fa-solid fa-circle-chevron-right"
                        }, null, -1)]))]), (0,
                        m.Lk)("div", fn, [r.calendar.length > 0 ? ((0,
                        m.uX)(!0),
                        (0,
                        m.CE)(m.FK, {
                            key: 0
                        }, (0,
                        m.pI)(r.calendar, (function(t) {
                            return (0,
                            m.uX)(),
                            (0,
                            m.CE)("div", {
                                class: (0,
                                h.normalizeClass)(["calendar-cell hoverable d-flex aic jcc", {
                                    "out-range": !s.calendarMonth.isSame(t, "month"),
                                    active: t.isSame(s.dueDate, "day"),
                                    sunday: 0 == t.days(),
                                    today: a.isToday(t)
                                }]),
                                onClick: function(e) {
                                    return r.selectDue(t)
                                }
                            }, [(0,
                            m.Lk)("div", mn, [t && 1 == t.date() ? ((0,
                            m.uX)(),
                            (0,
                            m.CE)("span", hn, (0,
                            h.toDisplayString)(t.format("M/")), 1)) : (0,
                            m.Q3)("v-if", !0), (0,
                            m.eW)((0,
                            h.toDisplayString)(t.format("D")), 1)])], 10, pn)
                        }
                        )), 256)) : (0,
                        m.Q3)("v-if", !0)]), (0,
                        m.Lk)("div", gn, (0,
                        h.toDisplayString)(t.$t("※締切当日はスケジュールに含まれません")), 1)])) : "start" == s.step ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", yn, [(0,
                        m.Lk)("div", vn, (0,
                        h.toDisplayString)(t.$t("いつから作業をはじめる？")), 1), (0,
                        m.Lk)("div", kn, (0,
                        h.toDisplayString)(t.$t("日付を選んでください")), 1), (0,
                        m.Lk)("div", wn, [(0,
                        m.Lk)("div", {
                            class: "px-4 pointer",
                            onClick: e[9] || (e[9] = function() {
                                return r.prevMonth && r.prevMonth.apply(r, arguments)
                            }
                            )
                        }, e[31] || (e[31] = [(0,
                        m.Lk)("i", {
                            class: "fa-solid fa-circle-chevron-left"
                        }, null, -1)])), (0,
                        m.Lk)("div", {
                            innerHTML: t.$t("%(year)s<span class='mx-1 small'>年</span>%(month)s<span class='mx-1 small'>月</span>", {
                                year: s.calendarMonth.format("YYYY"),
                                month: s.calendarMonth.format(t.pgettext("long name", "MM"))
                            })
                        }, null, 8, Ln), (0,
                        m.Lk)("div", {
                            class: "px-4 pointer",
                            onClick: e[10] || (e[10] = function() {
                                return r.nextMonth && r.nextMonth.apply(r, arguments)
                            }
                            )
                        }, e[32] || (e[32] = [(0,
                        m.Lk)("i", {
                            class: "fa-solid fa-circle-chevron-right"
                        }, null, -1)]))]), (0,
                        m.Lk)("div", xn, [r.calendar.length > 0 ? ((0,
                        m.uX)(!0),
                        (0,
                        m.CE)(m.FK, {
                            key: 0
                        }, (0,
                        m.pI)(r.calendar, (function(e) {
                            return (0,
                            m.uX)(),
                            (0,
                            m.CE)("div", {
                                class: (0,
                                h.normalizeClass)(["calendar-cell hoverable d-flex flex-column aic jcc", {
                                    "out-range": !s.calendarMonth.isSame(e, "month"),
                                    active: e.isSame(s.startDate, "day"),
                                    due: e.isSame(s.dueDate, "day"),
                                    sunday: 0 == e.days(),
                                    today: a.isToday(e)
                                }]),
                                onClick: function(t) {
                                    return r.selectStart(e)
                                }
                            }, [(0,
                            m.Lk)("div", Sn, [e && 1 == e.date() ? ((0,
                            m.uX)(),
                            (0,
                            m.CE)("span", Dn, (0,
                            h.toDisplayString)(e.format(t.$t("M/"))), 1)) : (0,
                            m.Q3)("v-if", !0), (0,
                            m.eW)((0,
                            h.toDisplayString)(e.format("D")) + " ", 1), e.isSame(s.dueDate, "day") ? ((0,
                            m.uX)(),
                            (0,
                            m.CE)("div", Cn, (0,
                            h.toDisplayString)(t.$t("〆切")), 1)) : (0,
                            m.Q3)("v-if", !0)])], 10, bn)
                        }
                        )), 256)) : (0,
                        m.Q3)("v-if", !0)]), (0,
                        m.Lk)("div", jn, [(0,
                        m.Lk)("div", {
                            class: "button secondary",
                            onClick: e[11] || (e[11] = function(t) {
                                return r.jump("due")
                            }
                            )
                        }, [e[33] || (e[33] = (0,
                        m.Lk)("i", {
                            class: "fas fa-angle-double-left fa-fw"
                        }, null, -1)), (0,
                        m.eW)((0,
                        h.toDisplayString)(t.$t("もどる")), 1)])])])) : "page" == s.step ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", Mn, [(0,
                        m.Lk)("div", En, (0,
                        h.toDisplayString)(t.$t("本文のページ数は？")), 1), (0,
                        m.Lk)("div", On, (0,
                        h.toDisplayString)(t.$t("決まってなくてもとりあえず進もう")), 1), (0,
                        m.Lk)("div", Tn, [(0,
                        m.bo)((0,
                        m.Lk)("input", {
                            type: "text",
                            "onUpdate:modelValue": e[12] || (e[12] = function(t) {
                                return s.page = t
                            }
                            ),
                            class: "b-0 text-center"
                        }, null, 512), [[i.vModelText, s.page]]), (0,
                        m.eW)((0,
                        h.toDisplayString)(t.$t("ページ")), 1)]), (0,
                        m.bF)(o, {
                            min: "1",
                            max: "100",
                            modelValue: s.page,
                            "onUpdate:modelValue": e[13] || (e[13] = function(t) {
                                return s.page = t
                            }
                            )
                        }, null, 8, ["modelValue"]), (0,
                        m.Lk)("div", $n, (0,
                        h.toDisplayString)(t.$t("※100ページ以上は直接入力してください")), 1), (0,
                        m.Lk)("div", Xn, [(0,
                        m.Lk)("div", {
                            class: "button secondary",
                            onClick: e[14] || (e[14] = function(t) {
                                return r.jump("start")
                            }
                            )
                        }, [e[34] || (e[34] = (0,
                        m.Lk)("i", {
                            class: "fas fa-angle-double-left fa-fw"
                        }, null, -1)), (0,
                        m.eW)((0,
                        h.toDisplayString)(t.$t("もどる")), 1)]), (0,
                        m.Lk)("div", {
                            class: "button active",
                            onClick: e[15] || (e[15] = function(t) {
                                return r.jump("process")
                            }
                            )
                        }, [(0,
                        m.eW)((0,
                        h.toDisplayString)(t.$t("次へ")), 1), e[35] || (e[35] = (0,
                        m.Lk)("i", {
                            class: "fas fa-angle-double-right fa-fw"
                        }, null, -1))])])])) : "process" == s.step ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", zn, [(0,
                        m.Lk)("div", In, (0,
                        h.toDisplayString)(t.$t("今回の作業工程は？")), 1), (0,
                        m.Lk)("div", Nn, (0,
                        h.toDisplayString)(t.$t("同時に行う作業は１行にまとめよう")), 1), (0,
                        m.Lk)("div", null, [(0,
                        m.bF)(l, {
                            modelValue: s.processes,
                            "onUpdate:modelValue": e[16] || (e[16] = function(t) {
                                return s.processes = t
                            }
                            ),
                            group: "proc",
                            handle: ".handle",
                            animation: "200"
                        }, {
                            item: (0,
                            m.k6)((function(n) {
                                var a = n.element
                                  , s = n.index;
                                return [(0,
                                m.Lk)("div", An, [(0,
                                m.Lk)("div", Wn, (0,
                                h.toDisplayString)(s + 1) + ".", 1), (0,
                                m.bo)((0,
                                m.Lk)("input", {
                                    "onUpdate:modelValue": function(t) {
                                        return a.name = t
                                    },
                                    type: "text",
                                    class: "mb-2 form-control form-control-lg b-0",
                                    placeholder: t.$t("ここに入力")
                                }, null, 8, _n), [[i.vModelText, a.name]]), (0,
                                m.Lk)("div", Pn, [(0,
                                m.Lk)("div", Yn, [(0,
                                m.Lk)("i", {
                                    class: "fas fa-times fa-fw",
                                    onClick: function(t) {
                                        return r.removeProcess(s)
                                    }
                                }, null, 8, Qn)])]), e[36] || (e[36] = (0,
                                m.Lk)("div", {
                                    class: "handle align-self-stretch d-flex aic"
                                }, [(0,
                                m.Lk)("i", {
                                    class: "fas fa-grip-lines fa-fw fa-lg text-disabled"
                                })], -1))])]
                            }
                            )),
                            _: 1
                        }, 8, ["modelValue"]), (0,
                        m.Lk)("div", Fn, [e[37] || (e[37] = (0,
                        m.Lk)("i", {
                            class: "fas fa-grip-lines fa-fw"
                        }, null, -1)), (0,
                        m.eW)((0,
                        h.toDisplayString)(t.$t("ドラッグで順番を入れ替え")), 1)]), (0,
                        m.Lk)("div", Bn, [(0,
                        m.Lk)("div", {
                            class: "px-5 py-1 secondary-button",
                            onClick: e[17] || (e[17] = function() {
                                return r.addProcess && r.addProcess.apply(r, arguments)
                            }
                            )
                        }, [e[38] || (e[38] = (0,
                        m.Lk)("i", {
                            class: "fas fa-plus me-3"
                        }, null, -1)), (0,
                        m.eW)((0,
                        h.toDisplayString)(t.$t("あたらしい工程")), 1)])])]), (0,
                        m.Lk)("div", Hn, [(0,
                        m.Lk)("div", {
                            class: "button secondary",
                            onClick: e[18] || (e[18] = function(t) {
                                return r.jump("page")
                            }
                            )
                        }, [e[39] || (e[39] = (0,
                        m.Lk)("i", {
                            class: "fas fa-angle-double-left fa-fw"
                        }, null, -1)), (0,
                        m.eW)((0,
                        h.toDisplayString)(t.$t("もどる")), 1)]), (0,
                        m.Lk)("div", {
                            class: "button active",
                            onClick: e[19] || (e[19] = function(t) {
                                return r.jump("time")
                            }
                            )
                        }, [(0,
                        m.eW)((0,
                        h.toDisplayString)(t.$t("次へ")), 1), e[40] || (e[40] = (0,
                        m.Lk)("i", {
                            class: "fas fa-angle-double-right fa-fw"
                        }, null, -1))])])])) : "time" == s.step ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", Vn, [(0,
                        m.Lk)("div", Un, (0,
                        h.toDisplayString)(t.$t("各工程の予想時間は？")), 1), (0,
                        m.Lk)("div", Kn, (0,
                        h.toDisplayString)(t.$t("分からないときはとりあえず進もう")), 1), (0,
                        m.Lk)("div", null, [((0,
                        m.uX)(!0),
                        (0,
                        m.CE)(m.FK, null, (0,
                        m.pI)(s.processes, (function(e, n) {
                            return (0,
                            m.uX)(),
                            (0,
                            m.CE)(m.FK, {
                                key: e.name
                            }, [e.name ? ((0,
                            m.uX)(),
                            (0,
                            m.CE)("div", Rn, [(0,
                            m.Lk)("div", null, (0,
                            h.toDisplayString)(n + 1) + ". " + (0,
                            h.toDisplayString)(e.name), 1), (0,
                            m.Lk)("div", Gn, [(0,
                            m.Lk)("div", null, [(0,
                            m.Lk)("div", Zn, [(0,
                            m.bo)((0,
                            m.Lk)("input", {
                                class: "form-check-input",
                                type: "radio",
                                "onUpdate:modelValue": function(t) {
                                    return e.par_page = t
                                },
                                id: "id-parpage-0-" + n,
                                value: "0"
                            }, null, 8, Jn), [[i.vModelRadio, e.par_page]]), (0,
                            m.Lk)("label", {
                                for: "id-parpage-0-" + n,
                                class: "form-check-label"
                            }, (0,
                            h.toDisplayString)(t.$t("全体で")), 9, qn)]), (0,
                            m.Lk)("div", ti, [(0,
                            m.bo)((0,
                            m.Lk)("input", {
                                class: "form-check-input",
                                type: "radio",
                                "onUpdate:modelValue": function(t) {
                                    return e.par_page = t
                                },
                                id: "id-parpage-1-" + n,
                                value: "1"
                            }, null, 8, ei), [[i.vModelRadio, e.par_page]]), (0,
                            m.Lk)("label", {
                                for: "id-parpage-1-" + n,
                                class: "form-check-label"
                            }, (0,
                            h.toDisplayString)(t.$t("１ページにつき")), 9, ni)])]), (0,
                            m.Lk)("div", ii, [(0,
                            m.bo)((0,
                            m.Lk)("input", {
                                type: "number",
                                min: "1",
                                "onUpdate:modelValue": function(t) {
                                    return e.time = t
                                },
                                onInput: function(t) {
                                    return r.changeTime(e)
                                },
                                style: {
                                    width: "100px"
                                },
                                class: "form-control me-2 text-right"
                            }, null, 40, ai), [[i.vModelText, e.time]]), (0,
                            m.Lk)("span", si, (0,
                            h.toDisplayString)(t.$t("時間")), 1)])])])) : (0,
                            m.Q3)("v-if", !0)], 64)
                        }
                        )), 128)), (0,
                        m.Lk)("div", ri, (0,
                        h.toDisplayString)(t.$t("※分単位にしたいときは小数点で入力してください")), 1)]), (0,
                        m.Lk)("div", oi, [(0,
                        m.Lk)("div", {
                            class: "button secondary",
                            onClick: e[20] || (e[20] = function(t) {
                                return r.jump("process")
                            }
                            )
                        }, [e[41] || (e[41] = (0,
                        m.Lk)("i", {
                            class: "fas fa-angle-double-left fa-fw"
                        }, null, -1)), (0,
                        m.eW)((0,
                        h.toDisplayString)(t.$t("もどる")), 1)]), (0,
                        m.Lk)("div", {
                            class: "button active",
                            onClick: e[21] || (e[21] = function(t) {
                                return r.jump("worktime")
                            }
                            )
                        }, [(0,
                        m.eW)((0,
                        h.toDisplayString)(t.$t("次へ")), 1), e[42] || (e[42] = (0,
                        m.Lk)("i", {
                            class: "fas fa-angle-double-right fa-fw"
                        }, null, -1))])])])) : "worktime" == s.step ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", li, [(0,
                        m.Lk)("div", ci, (0,
                        h.toDisplayString)(t.$t("１日に作業できる時間は？")), 1), (0,
                        m.Lk)("div", ui, (0,
                        h.toDisplayString)(t.$t("グラフをタップして時間を決めよう")), 1), (0,
                        m.Lk)("div", di, [((0,
                        m.uX)(!0),
                        (0,
                        m.CE)(m.FK, null, (0,
                        m.pI)(s.worktime, (function(e, n) {
                            return (0,
                            m.uX)(),
                            (0,
                            m.CE)("div", {
                                class: "w-100 px-1",
                                onPointerdown: function(t) {
                                    return r.worktimeDown(t, n)
                                }
                            }, [(0,
                            m.Lk)("div", {
                                class: "worktimes mb-2",
                                ref_for: !0,
                                ref: "worktime-" + n
                            }, [(0,
                            m.Lk)("div", {
                                class: (0,
                                h.normalizeClass)(["worktime-bar", {
                                    danger: e.time > 12
                                }]),
                                style: (0,
                                h.normalizeStyle)({
                                    height: 100 * e.time / 24 + "%"
                                }),
                                ref_for: !0,
                                ref: "worktime-bar-" + n
                            }, null, 6)], 512), (0,
                            m.Lk)("div", pi, [(0,
                            m.Lk)("div", mi, (0,
                            h.toDisplayString)(t.daysLabel[n]), 1), (0,
                            m.Lk)("div", hi, [(0,
                            m.eW)((0,
                            h.toDisplayString)(e.time), 1), (0,
                            m.Lk)("span", gi, (0,
                            h.toDisplayString)(t.pgettext("unit", "時間")), 1)])])], 40, fi)
                        }
                        )), 256))]), r.days.length > 0 ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", yi, [(0,
                        m.Lk)("div", vi, [(0,
                        m.Lk)("div", ki, (0,
                        h.toDisplayString)(t.$t("休日設定")), 1), (0,
                        m.Lk)("div", wi, (0,
                        h.toDisplayString)(t.$t("作業できない日を指定できます")), 1)]), (0,
                        m.Lk)("div", Li, [((0,
                        m.uX)(!0),
                        (0,
                        m.CE)(m.FK, null, (0,
                        m.pI)(r.days, (function(t, e) {
                            return (0,
                            m.uX)(),
                            (0,
                            m.CE)("div", {
                                class: (0,
                                h.normalizeClass)(["holiday p-2", {
                                    active: s.holidays.contains(t.key),
                                    sunday: 0 == t.date.days(),
                                    "out-range": t.outRange
                                }]),
                                onClick: function(e) {
                                    return r.toggleHoliday(t.key)
                                }
                            }, [0 == e || 1 == t.date.date() ? ((0,
                            m.uX)(),
                            (0,
                            m.CE)("span", bi, (0,
                            h.toDisplayString)(t.date.format("M/")), 1)) : (0,
                            m.Q3)("v-if", !0), (0,
                            m.Lk)("span", Si, (0,
                            h.toDisplayString)(t.date.format("D")), 1)], 10, xi)
                        }
                        )), 256))])])) : (0,
                        m.Q3)("v-if", !0), (0,
                        m.Lk)("div", Di, [(0,
                        m.Lk)("div", {
                            class: "button secondary",
                            onClick: e[22] || (e[22] = function(t) {
                                return r.jump("time")
                            }
                            )
                        }, [e[43] || (e[43] = (0,
                        m.Lk)("i", {
                            class: "fas fa-angle-double-left fa-fw"
                        }, null, -1)), (0,
                        m.eW)((0,
                        h.toDisplayString)(t.$t("もどる")), 1)]), (0,
                        m.Lk)("div", {
                            class: "button active",
                            onClick: e[23] || (e[23] = function(t) {
                                return r.jump("result")
                            }
                            )
                        }, [(0,
                        m.eW)((0,
                        h.toDisplayString)(t.$t("次へ")), 1), e[44] || (e[44] = (0,
                        m.Lk)("i", {
                            class: "fas fa-angle-double-right fa-fw"
                        }, null, -1))])])])) : "result" == s.step ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", Ci, [(0,
                        m.Lk)("div", ji, (0,
                        h.toDisplayString)(t.$t("スケジュール完成")), 1), r.actEndDate ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", Mi, [(0,
                        m.Lk)("div", Ei, [e[45] || (e[45] = (0,
                        m.Lk)("i", {
                            class: "fas fa-dot-circle text-dt me-2"
                        }, null, -1)), (0,
                        m.eW)((0,
                        h.toDisplayString)(t.pgettext("page count", "%sページ", s.page)), 1)]), (0,
                        m.Lk)("div", Oi, [e[46] || (e[46] = (0,
                        m.Lk)("i", {
                            class: "fas fa-dot-circle text-dt me-2"
                        }, null, -1)), (0,
                        m.eW)((0,
                        h.toDisplayString)(s.startDate.format(t.$t("YYYY年M月D日スタート"))), 1)]), (0,
                        m.Lk)("div", Ti, [e[47] || (e[47] = (0,
                        m.Lk)("i", {
                            class: "fas fa-dot-circle text-dt me-2"
                        }, null, -1)), (0,
                        m.eW)((0,
                        h.toDisplayString)(s.dueDate.format(t.$t("YYYY年M月D日〆切"))), 1)]), !1 === r.currentAdjustment ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", $i, [(0,
                        m.Lk)("div", Xi, (0,
                        h.toDisplayString)(t.$t("計画にムリがあります！見直しましょう")), 1)])) : r.currentAdjustmentTimes > 1 ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", zi, [(0,
                        m.Lk)("div", Ii, [((0,
                        m.uX)(!0),
                        (0,
                        m.CE)(m.FK, null, (0,
                        m.pI)(r.adjustedScheduleView, (function(t) {
                            return (0,
                            m.uX)(),
                            (0,
                            m.CE)("div", Ni, [r.adjustedScheduleView.length > 0 ? ((0,
                            m.uX)(!0),
                            (0,
                            m.CE)(m.FK, {
                                key: 0
                            }, (0,
                            m.pI)(t.cells, (function(e) {
                                return (0,
                                m.uX)(),
                                (0,
                                m.CE)("div", {
                                    class: (0,
                                    h.normalizeClass)(["calendar-cell d-flex flex-column", {
                                        "out-range": e.isBefore(s.startDate, "day") || e.isAfter(s.dueDate, "day"),
                                        sunday: 0 == e.days()
                                    }])
                                }, [(0,
                                m.Lk)("div", {
                                    class: (0,
                                    h.normalizeClass)(["text-center p-2 calendar-date", {
                                        today: a.isToday(e)
                                    }]),
                                    style: {
                                        "line-height": "1.5rem"
                                    }
                                }, (0,
                                h.toDisplayString)(e && (1 == e.date() ? e.format("M/") : "") + e.format("D")), 3), (0,
                                m.Lk)("div", {
                                    class: "adjuster",
                                    style: (0,
                                    h.normalizeStyle)({
                                        height: 40 * (t.maxStep + 1) + "px"
                                    })
                                }, null, 4)], 2)
                            }
                            )), 256)) : (0,
                            m.Q3)("v-if", !0), (0,
                            m.Lk)("div", Ai, [((0,
                            m.uX)(!0),
                            (0,
                            m.CE)(m.FK, null, (0,
                            m.pI)(t.view, (function(t) {
                                return (0,
                                m.uX)(),
                                (0,
                                m.CE)("div", {
                                    class: (0,
                                    h.normalizeClass)(["schedule-box", {
                                        "edge-l": t.isFirst,
                                        "edge-r": t.isLast
                                    }]),
                                    style: (0,
                                    h.normalizeStyle)({
                                        left: "calc(" + t.startDay / 7 * 100 + "% + 8px)",
                                        top: 10 + 36 * t.step + "px",
                                        width: "calc(" + (t.endDay - t.startDay + 1) / 7 * 100 + "% - 16px)"
                                    })
                                }, [e[48] || (e[48] = (0,
                                m.Lk)("div", {
                                    class: "schedule-box-arrow my-auto"
                                }, null, -1)), (0,
                                m.Lk)("div", Wi, [(0,
                                m.Lk)("span", _i, (0,
                                h.toDisplayString)(t.schedule.name), 1)])], 6)
                            }
                            )), 256))])])
                        }
                        )), 256))]), s.originalEstimate && s.originalEstimate.getProgress() > 0 ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", Pi, (0,
                        h.toDisplayString)(t.$t("※いまの進捗はこの計画には反映されていません")), 1)) : (0,
                        m.Q3)("v-if", !0), (0,
                        m.Lk)("div", {
                            class: "subtitle text-center my-5",
                            innerHTML: t.$t("%(date)sに間に合わせるには<br>予定の<span class='h3 text-danger'>%(times)s倍</span>がんばりましょう", {
                                date: s.dueDate.format(t.$t("YYYY/MM/DD")),
                                times: r.currentAdjustmentTimes
                            })
                        }, null, 8, Yi)])) : ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", Qi, [(0,
                        m.Lk)("div", Fi, [((0,
                        m.uX)(!0),
                        (0,
                        m.CE)(m.FK, null, (0,
                        m.pI)(r.properScheduleView, (function(t) {
                            return (0,
                            m.uX)(),
                            (0,
                            m.CE)("div", Bi, [r.properScheduleView.length > 0 ? ((0,
                            m.uX)(!0),
                            (0,
                            m.CE)(m.FK, {
                                key: 0
                            }, (0,
                            m.pI)(t.cells, (function(e) {
                                return (0,
                                m.uX)(),
                                (0,
                                m.CE)("div", {
                                    class: (0,
                                    h.normalizeClass)(["calendar-cell d-flex flex-column", {
                                        "out-range": e.isBefore(s.startDate, "day") || e.isAfter(s.dueDate, "day"),
                                        sunday: 0 == e.days()
                                    }])
                                }, [(0,
                                m.Lk)("div", {
                                    class: (0,
                                    h.normalizeClass)(["text-center p-2 calendar-date", {
                                        today: a.isToday(e)
                                    }]),
                                    style: {
                                        "line-height": "1.5rem"
                                    }
                                }, (0,
                                h.toDisplayString)(e && (1 == e.date() ? e.format("M/") : "") + e.format("D")), 3), (0,
                                m.Lk)("div", {
                                    class: "adjuster",
                                    style: (0,
                                    h.normalizeStyle)({
                                        height: 40 * (t.maxStep + 1) + "px"
                                    })
                                }, null, 4)], 2)
                            }
                            )), 256)) : (0,
                            m.Q3)("v-if", !0), (0,
                            m.Lk)("div", Hi, [((0,
                            m.uX)(!0),
                            (0,
                            m.CE)(m.FK, null, (0,
                            m.pI)(t.view, (function(t) {
                                return (0,
                                m.uX)(),
                                (0,
                                m.CE)("div", {
                                    class: (0,
                                    h.normalizeClass)(["schedule-box", {
                                        "edge-l": t.isFirst,
                                        "edge-r": t.isLast
                                    }]),
                                    style: (0,
                                    h.normalizeStyle)({
                                        left: "calc(" + t.startDay / 7 * 100 + "% + 8px)",
                                        top: 10 + 36 * t.step + "px",
                                        width: "calc(" + (t.endDay - t.startDay + 1) / 7 * 100 + "% - 16px)"
                                    })
                                }, [e[49] || (e[49] = (0,
                                m.Lk)("div", {
                                    class: "schedule-box-arrow my-auto"
                                }, null, -1)), (0,
                                m.Lk)("div", Vi, [(0,
                                m.Lk)("span", Ui, (0,
                                h.toDisplayString)(t.schedule.name), 1)])], 6)
                            }
                            )), 256))])])
                        }
                        )), 256))]), s.originalEstimate && s.originalEstimate.getProgress() > 0 ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", Ki, (0,
                        h.toDisplayString)(t.$t("※いまの進捗はこの計画には反映されていません")), 1)) : (0,
                        m.Q3)("v-if", !0), r.remain > 0 ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", {
                            key: 1,
                            class: "text-center subtitle my-4",
                            innerHTML: t.$t("締切より%s日早く完了します", r.remain)
                        }, null, 8, Ri)) : (0,
                        m.Q3)("v-if", !0)])), (0,
                        m.Lk)("div", null, [((0,
                        m.uX)(!0),
                        (0,
                        m.CE)(m.FK, null, (0,
                        m.pI)(r.properSchedule, (function(n, o) {
                            return (0,
                            m.uX)(),
                            (0,
                            m.CE)("div", Gi, [(0,
                            m.Lk)("div", null, (0,
                            h.toDisplayString)(n.name), 1), (0,
                            m.Lk)("div", Zi, [(0,
                            m.Lk)("div", Ji, [(0,
                            m.Lk)("span", qi, [1 == s.processes[o].par_page ? ((0,
                            m.uX)(),
                            (0,
                            m.CE)("span", ta, (0,
                            h.toDisplayString)(t.$t("1ページにつき")), 1)) : (0,
                            m.Q3)("v-if", !0), (0,
                            m.eW)((0,
                            h.toDisplayString)(a.toHourMin(s.processes[o].time)), 1)]), r.currentAdjustment < 1 ? ((0,
                            m.uX)(),
                            (0,
                            m.CE)("span", ea, e[50] || (e[50] = [(0,
                            m.Lk)("i", {
                                class: "fas fa-caret-right"
                            }, null, -1)]))) : (0,
                            m.Q3)("v-if", !0), r.currentAdjustment < 1 ? ((0,
                            m.uX)(),
                            (0,
                            m.CE)("span", na, (0,
                            h.toDisplayString)(a.toHourMin(s.processes[o].frozenHours(r.currentAdjustment))), 1)) : (0,
                            m.Q3)("v-if", !0)]), (0,
                            m.Lk)("div", ia, [(0,
                            m.Lk)("div", aa, [(0,
                            m.bo)((0,
                            m.Lk)("input", {
                                type: "checkbox",
                                class: "form-check-input",
                                "onUpdate:modelValue": function(t) {
                                    return s.processes[o].frozen = t
                                },
                                id: "frozen-" + o
                            }, null, 8, sa), [[i.vModelCheckbox, s.processes[o].frozen]]), (0,
                            m.Lk)("label", {
                                class: "form-check-label small",
                                for: "frozen-" + o
                            }, (0,
                            h.toDisplayString)(t.$t("調整しない")), 9, ra)])])])])
                        }
                        )), 256))]), (0,
                        m.Lk)("div", oa, [(0,
                        m.Lk)("span", {
                            class: "text-primary",
                            onClick: e[24] || (e[24] = function(t) {
                                return r.jump("time")
                            }
                            )
                        }, [e[51] || (e[51] = (0,
                        m.Lk)("i", {
                            class: "fas fa-sync-alt fa-fw me-1"
                        }, null, -1)), (0,
                        m.eW)((0,
                        h.toDisplayString)(t.$t("時間を変更する")), 1)])])])) : (0,
                        m.Q3)("v-if", !0), (0,
                        m.Lk)("div", la, [(0,
                        m.Lk)("div", {
                            class: "button secondary",
                            onClick: e[25] || (e[25] = function(t) {
                                return r.jump("worktime")
                            }
                            )
                        }, [e[52] || (e[52] = (0,
                        m.Lk)("i", {
                            class: "fas fa-angle-double-left fa-fw"
                        }, null, -1)), (0,
                        m.eW)((0,
                        h.toDisplayString)(t.$t("もどる")), 1)]), !1 !== r.currentAdjustment ? ((0,
                        m.uX)(),
                        (0,
                        m.CE)("div", {
                            key: 0,
                            class: "button active",
                            onClick: e[26] || (e[26] = function(t) {
                                return s.showSave = !0
                            }
                            )
                        }, (0,
                        h.toDisplayString)(t.$t("この計画を保存")), 1)) : (0,
                        m.Q3)("v-if", !0)])])) : (0,
                        m.Q3)("v-if", !0)]
                    }
                    )),
                    _: 1
                }, 8, ["name"])]), (0,
                m.bF)(c, {
                    show: s.showSave,
                    onCancel: e[28] || (e[28] = function(t) {
                        return s.showSave = !1
                    }
                    ),
                    onApply: r.save,
                    modalclass: "w-500"
                }, {
                    body: (0,
                    m.k6)((function() {
                        return [(0,
                        m.Lk)("div", ca, [(0,
                        m.bo)((0,
                        m.Lk)("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": e[27] || (e[27] = function(t) {
                                return s.filename = t
                            }
                            ),
                            placeholder: t.$t("保存する名前"),
                            autocomplete: "off"
                        }, null, 8, ua), [[i.vModelText, s.filename]])])]
                    }
                    )),
                    _: 1
                }, 8, ["show", "onApply"])], 64)
            }
            ], ["__scopeId", "data-v-f5193566"]]);
            function pa(t) {
                return pa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                pa(t)
            }
            function ma(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = ha(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0
                          , a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var s, r = !0, o = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return r = t.done,
                        t
                    },
                    e: function(t) {
                        o = !0,
                        s = t
                    },
                    f: function() {
                        try {
                            r || null == n.return || n.return()
                        } finally {
                            if (o)
                                throw s
                        }
                    }
                }
            }
            function ha(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return ga(t, e);
                    var n = {}.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ga(t, e) : void 0
                }
            }
            function ga(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = Array(e); n < e; n++)
                    i[n] = t[n];
                return i
            }
            function ya() {
                ya = function() {
                    return e
                }
                ;
                var t, e = {}, n = Object.prototype, i = n.hasOwnProperty, a = Object.defineProperty || function(t, e, n) {
                    t[e] = n.value
                }
                , s = "function" == typeof Symbol ? Symbol : {}, r = s.iterator || "@@iterator", o = s.asyncIterator || "@@asyncIterator", l = s.toStringTag || "@@toStringTag";
                function c(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    t[e]
                }
                try {
                    c({}, "")
                } catch (t) {
                    c = function(t, e, n) {
                        return t[e] = n
                    }
                }
                function u(t, e, n, i) {
                    var s = e && e.prototype instanceof y ? e : y
                      , r = Object.create(s.prototype)
                      , o = new O(i || []);
                    return a(r, "_invoke", {
                        value: C(t, n, o)
                    }),
                    r
                }
                function d(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = u;
                var f = "suspendedStart"
                  , p = "suspendedYield"
                  , m = "executing"
                  , h = "completed"
                  , g = {};
                function y() {}
                function v() {}
                function k() {}
                var w = {};
                c(w, r, (function() {
                    return this
                }
                ));
                var L = Object.getPrototypeOf
                  , x = L && L(L(T([])));
                x && x !== n && i.call(x, r) && (w = x);
                var b = k.prototype = y.prototype = Object.create(w);
                function S(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        c(t, e, (function(t) {
                            return this._invoke(e, t)
                        }
                        ))
                    }
                    ))
                }
                function D(t, e) {
                    function n(a, s, r, o) {
                        var l = d(t[a], t, s);
                        if ("throw" !== l.type) {
                            var c = l.arg
                              , u = c.value;
                            return u && "object" == pa(u) && i.call(u, "__await") ? e.resolve(u.__await).then((function(t) {
                                n("next", t, r, o)
                            }
                            ), (function(t) {
                                n("throw", t, r, o)
                            }
                            )) : e.resolve(u).then((function(t) {
                                c.value = t,
                                r(c)
                            }
                            ), (function(t) {
                                return n("throw", t, r, o)
                            }
                            ))
                        }
                        o(l.arg)
                    }
                    var s;
                    a(this, "_invoke", {
                        value: function(t, i) {
                            function a() {
                                return new e((function(e, a) {
                                    n(t, i, e, a)
                                }
                                ))
                            }
                            return s = s ? s.then(a, a) : a()
                        }
                    })
                }
                function C(e, n, i) {
                    var a = f;
                    return function(s, r) {
                        if (a === m)
                            throw Error("Generator is already running");
                        if (a === h) {
                            if ("throw" === s)
                                throw r;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (i.method = s,
                        i.arg = r; ; ) {
                            var o = i.delegate;
                            if (o) {
                                var l = j(o, i);
                                if (l) {
                                    if (l === g)
                                        continue;
                                    return l
                                }
                            }
                            if ("next" === i.method)
                                i.sent = i._sent = i.arg;
                            else if ("throw" === i.method) {
                                if (a === f)
                                    throw a = h,
                                    i.arg;
                                i.dispatchException(i.arg)
                            } else
                                "return" === i.method && i.abrupt("return", i.arg);
                            a = m;
                            var c = d(e, n, i);
                            if ("normal" === c.type) {
                                if (a = i.done ? h : p,
                                c.arg === g)
                                    continue;
                                return {
                                    value: c.arg,
                                    done: i.done
                                }
                            }
                            "throw" === c.type && (a = h,
                            i.method = "throw",
                            i.arg = c.arg)
                        }
                    }
                }
                function j(e, n) {
                    var i = n.method
                      , a = e.iterator[i];
                    if (a === t)
                        return n.delegate = null,
                        "throw" === i && e.iterator.return && (n.method = "return",
                        n.arg = t,
                        j(e, n),
                        "throw" === n.method) || "return" !== i && (n.method = "throw",
                        n.arg = new TypeError("The iterator does not provide a '" + i + "' method")),
                        g;
                    var s = d(a, e.iterator, n.arg);
                    if ("throw" === s.type)
                        return n.method = "throw",
                        n.arg = s.arg,
                        n.delegate = null,
                        g;
                    var r = s.arg;
                    return r ? r.done ? (n[e.resultName] = r.value,
                    n.next = e.nextLoc,
                    "return" !== n.method && (n.method = "next",
                    n.arg = t),
                    n.delegate = null,
                    g) : r : (n.method = "throw",
                    n.arg = new TypeError("iterator result is not an object"),
                    n.delegate = null,
                    g)
                }
                function M(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]),
                    2 in t && (e.finallyLoc = t[2],
                    e.afterLoc = t[3]),
                    this.tryEntries.push(e)
                }
                function E(t) {
                    var e = t.completion || {};
                    e.type = "normal",
                    delete e.arg,
                    t.completion = e
                }
                function O(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    t.forEach(M, this),
                    this.reset(!0)
                }
                function T(e) {
                    if (e || "" === e) {
                        var n = e[r];
                        if (n)
                            return n.call(e);
                        if ("function" == typeof e.next)
                            return e;
                        if (!isNaN(e.length)) {
                            var a = -1
                              , s = function n() {
                                for (; ++a < e.length; )
                                    if (i.call(e, a))
                                        return n.value = e[a],
                                        n.done = !1,
                                        n;
                                return n.value = t,
                                n.done = !0,
                                n
                            };
                            return s.next = s
                        }
                    }
                    throw new TypeError(pa(e) + " is not iterable")
                }
                return v.prototype = k,
                a(b, "constructor", {
                    value: k,
                    configurable: !0
                }),
                a(k, "constructor", {
                    value: v,
                    configurable: !0
                }),
                v.displayName = c(k, l, "GeneratorFunction"),
                e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
                }
                ,
                e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, k) : (t.__proto__ = k,
                    c(t, l, "GeneratorFunction")),
                    t.prototype = Object.create(b),
                    t
                }
                ,
                e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }
                ,
                S(D.prototype),
                c(D.prototype, o, (function() {
                    return this
                }
                )),
                e.AsyncIterator = D,
                e.async = function(t, n, i, a, s) {
                    void 0 === s && (s = Promise);
                    var r = new D(u(t, n, i, a),s);
                    return e.isGeneratorFunction(n) ? r : r.next().then((function(t) {
                        return t.done ? t.value : r.next()
                    }
                    ))
                }
                ,
                S(b),
                c(b, l, "Generator"),
                c(b, r, (function() {
                    return this
                }
                )),
                c(b, "toString", (function() {
                    return "[object Generator]"
                }
                )),
                e.keys = function(t) {
                    var e = Object(t)
                      , n = [];
                    for (var i in e)
                        n.push(i);
                    return n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var i = n.pop();
                            if (i in e)
                                return t.value = i,
                                t.done = !1,
                                t
                        }
                        return t.done = !0,
                        t
                    }
                }
                ,
                e.values = T,
                O.prototype = {
                    constructor: O,
                    reset: function(e) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = t,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = t,
                        this.tryEntries.forEach(E),
                        !e)
                            for (var n in this)
                                "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done)
                            throw e;
                        var n = this;
                        function a(i, a) {
                            return o.type = "throw",
                            o.arg = e,
                            n.next = i,
                            a && (n.method = "next",
                            n.arg = t),
                            !!a
                        }
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var r = this.tryEntries[s]
                              , o = r.completion;
                            if ("root" === r.tryLoc)
                                return a("end");
                            if (r.tryLoc <= this.prev) {
                                var l = i.call(r, "catchLoc")
                                  , c = i.call(r, "finallyLoc");
                                if (l && c) {
                                    if (this.prev < r.catchLoc)
                                        return a(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc)
                                        return a(r.finallyLoc)
                                } else if (l) {
                                    if (this.prev < r.catchLoc)
                                        return a(r.catchLoc, !0)
                                } else {
                                    if (!c)
                                        throw Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc)
                                        return a(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n];
                            if (a.tryLoc <= this.prev && i.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var s = a;
                                break
                            }
                        }
                        s && ("break" === t || "continue" === t) && s.tryLoc <= e && e <= s.finallyLoc && (s = null);
                        var r = s ? s.completion : {};
                        return r.type = t,
                        r.arg = e,
                        s ? (this.method = "next",
                        this.next = s.finallyLoc,
                        g) : this.complete(r)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === t.type && e && (this.next = e),
                        g
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t)
                                return this.complete(n.completion, n.afterLoc),
                                E(n),
                                g
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var a = i.arg;
                                    E(n)
                                }
                                return a
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(e, n, i) {
                        return this.delegate = {
                            iterator: T(e),
                            resultName: n,
                            nextLoc: i
                        },
                        "next" === this.method && (this.arg = t),
                        g
                    }
                },
                e
            }
            function va(t, e, n, i, a, s, r) {
                try {
                    var o = t[s](r)
                      , l = o.value
                } catch (t) {
                    return void n(t)
                }
                o.done ? e(l) : Promise.resolve(l).then(i, a)
            }
            function ka(t) {
                return function() {
                    var e = this
                      , n = arguments;
                    return new Promise((function(i, a) {
                        var s = t.apply(e, n);
                        function r(t) {
                            va(s, i, a, r, o, "next", t)
                        }
                        function o(t) {
                            va(s, i, a, r, o, "throw", t)
                        }
                        r(void 0)
                    }
                    ))
                }
            }
            window.gettext = function(t) {
                var e = django.catalog[t];
                return void 0 === e ? t : "string" == typeof e ? e : e[0]
            }
            ,
            window.ngettext = function(t, e, n) {
                var i = django.catalog[t];
                return void 0 === i ? 1 == n ? t : e : i.constructor === Array ? i[django.pluralidx(n)] : i
            }
            ,
            window.gettext_noop = function(t) {
                return t
            }
            ,
            window.pgettext = function(t, e) {
                var n = window.gettext(t + "" + e);
                return -1 != n.indexOf("") && (n = e),
                n
            }
            ,
            window.npgettext = function(t, e, n, i) {
                var a = window.ngettext(t + "" + e, t + "" + n, i);
                return -1 != a.indexOf("") && (a = window.ngettext(e, n, i)),
                a
            }
            ,
            window.interpolate = function(t, e, n) {
                return n ? t.replace(/%\(\w+\)s/g, (function(t) {
                    return String(e[t.slice(2, -2)])
                }
                )) : t.replace(/%s/g, (function(t) {
                    return String(e.shift())
                }
                ))
            }
            ;
            const wa = {
                setup: function() {
                    return {
                        format: o,
                        colorScheme: function(t, e) {
                            if (t) {
                                var n = localStorage.getItem("storage-utils." + t)
                                  , i = e;
                                null !== n && (i = JSON.parse(n).value);
                                var a = (0,
                                tt.KR)(i)
                                  , s = "object" === et(e)
                                  , r = null;
                                return (0,
                                m.wB)(a, (function(e, n) {
                                    var i = et(e);
                                    r && (clearTimeout(r),
                                    r = null),
                                    r = setTimeout((function() {
                                        localStorage.setItem("storage-utils." + t, JSON.stringify({
                                            type: i,
                                            value: e
                                        }))
                                    }
                                    ), 200)
                                }
                                ), {
                                    deep: s
                                }),
                                a
                            }
                            console.error("The key name must not be empty")
                        }("color-scheme", "light")
                    }
                },
                watch: {
                    colorScheme: {
                        handler: function() {
                            this.onChangeColorScheme()
                        },
                        immediate: !0
                    }
                },
                data: function() {
                    return {
                        mode: null,
                        estimates: [],
                        syncing: !1,
                        sorting: !1,
                        archivedOpened: !1,
                        editingEstimate: null
                    }
                },
                components: {
                    Modal: ft,
                    RangeSlider: ht,
                    draggable: q(),
                    Toast: wt,
                    ConfirmModal: Mt,
                    Page: an,
                    Planner: fa
                },
                provide: function() {
                    return {
                        $confirm: this.$confirm,
                        $toast: this.$toast
                    }
                },
                computed: {
                    isLogin: function() {
                        return this.$store.getters.isLogin
                    },
                    currentLanguage: function() {
                        return this.$store.state.currentLanguage
                    },
                    allEstimates: {
                        get: function() {
                            var t = this.estimates.filter((function(t) {
                                return !t.archived
                            }
                            ));
                            return t.sort((function(t, e) {
                                return parseInt(t.order || 0) > parseInt(e.order || 0) ? 1 : -1
                            }
                            )),
                            t
                        },
                        set: function(t) {
                            this.estimates.forEach((function(t) {
                                t.archived = !0
                            }
                            ));
                            var e = 0;
                            t.forEach((function(t) {
                                t.order = e++,
                                t.archived = !1
                            }
                            )),
                            this.saveAll()
                        }
                    },
                    archivedEstimates: {
                        get: function() {
                            var t = this.estimates.filter((function(t) {
                                return !0 === t.archived
                            }
                            ));
                            return t.sort((function(t, e) {
                                return parseInt(t.order || 0) > parseInt(e.order || 0) ? 1 : -1
                            }
                            )),
                            t
                        },
                        set: function(t) {
                            this.estimates.forEach((function(t) {
                                t.archived = !1
                            }
                            ));
                            var e = 0;
                            t.forEach((function(t) {
                                t.order = e++,
                                t.archived = !0
                            }
                            )),
                            this.saveAll()
                        }
                    }
                },
                created: function() {
                    this.syncTimer = null,
                    this.syncAllTimer = null
                },
                mounted: function() {
                    var t = this;
                    return ka(ya().mark((function e() {
                        return ya().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t.syncing = !0,
                                    t.loadLocalEstimates(),
                                    e.next = 5,
                                    t.syncAll();
                                case 5:
                                    t.syncing = !1,
                                    0 == t.estimates.length ? t.mode = "top" : t.mode = "list";
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                unmounted: function() {},
                methods: {
                    changeColorScheme: function(t) {
                        this.colorScheme = t
                    },
                    onChangeColorScheme: function() {
                        var t = document.querySelector("html");
                        "dark" == this.colorScheme ? t.dataset.bsTheme = "dark" : delete t.dataset.bsTheme
                    },
                    jumpToTop: function() {
                        this.mode = "list"
                    },
                    deleteAll: function() {
                        for (var t in localStorage)
                            t.startsWith("estimate.") && localStorage.removeItem(t)
                    },
                    saveAll: function() {
                        var t, e = ma(this.estimates);
                        try {
                            for (e.s(); !(t = e.n()).done; ) {
                                var n = t.value;
                                this.saveItem(n)
                            }
                        } catch (t) {
                            e.e(t)
                        } finally {
                            e.f()
                        }
                        this.syncAllWithTimer()
                    },
                    pageChanged: function(t) {
                        t.updated_at = moment().valueOf(),
                        this.saveLocalStorage(t),
                        this.sync(t)
                    },
                    loadLocalEstimates: function() {
                        for (var t in this.estimates = [],
                        localStorage)
                            if (t.startsWith("estimate."))
                                try {
                                    var e = t.substr(9)
                                      , n = new Re(JSON.parse(localStorage[t]));
                                    if (!n.id)
                                        continue;
                                    n.id = e,
                                    n.opened = !1,
                                    n.progressOpened = !0,
                                    n.memoOpened = !0,
                                    this.estimates.push(n)
                                } catch (t) {
                                    console.warn(t)
                                }
                    },
                    startCreate: function(t) {
                        var e = this;
                        this.mode = "edit",
                        this.$nextTick((function() {
                            var n = e.$refs.planner;
                            n.init(new Re),
                            n.jump(t || "due")
                        }
                        ))
                    },
                    startEdit: function(t) {
                        var e = this;
                        this.mode = "edit",
                        this.$nextTick((function() {
                            var n = e.$refs.planner;
                            n.init(t),
                            n.jump("due")
                        }
                        ))
                    },
                    save: function(t) {
                        if (t.id) {
                            var e = this.estimates.findIndex((function(e) {
                                return e.id == t.id
                            }
                            ));
                            e >= 0 && (this.estimates[e] = t)
                        } else
                            t.id = this.getNextId(),
                            this.estimates.push(t);
                        this.saveItem(t),
                        this.sync(t),
                        this.mode = "list"
                    },
                    saveItem: function(t) {
                        t.updated_at = moment().valueOf(),
                        this.saveLocalStorage(t)
                    },
                    saveLocalStorage: function(t) {
                        localStorage.setItem("estimate.".concat(t.id), JSON.stringify(t))
                    },
                    getNextId: function() {
                        var t, e = "0";
                        return null === localStorage.getItem("estimate.id_cursor") ? this.estimates.length > 0 && (e = Math.max.apply(Math, function(t) {
                            if (Array.isArray(t))
                                return ga(t)
                        }(t = this.estimates.map((function(t) {
                            return t.id
                        }
                        ))) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                                return Array.from(t)
                        }(t) || ha(t) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }())) : e = localStorage.getItem("estimate.id_cursor"),
                        e = parseInt(e),
                        e++,
                        localStorage.setItem("estimate.id_cursor", e),
                        e
                    },
                    remove: function(t) {
                        var e = this;
                        this.$confirm({
                            lead: e.$t("この計画を削除します。元には戻せません。"),
                            alert: e.isLogin ? gettext("クラウドからも削除されます") : "",
                            type: "alert",
                            button: gettext("削除")
                        }, (function() {
                            var n = t.guid;
                            if (localStorage.removeItem("estimate." + t.id),
                            e.loadLocalEstimates(),
                            e.isLogin && n) {
                                var i = new FormData;
                                i.append("guid", n),
                                axios.post("/dojin-techo/delete", i).then((function(t) {
                                    t.data.success
                                }
                                ))
                            }
                        }
                        ))
                    },
                    sync: function(t) {
                        var e = this;
                        this.isLogin && (this.syncing = !0,
                        this.syncTimer && window.clearInterval(this.syncTimer),
                        this.syncTimer = setTimeout(ka(ya().mark((function n() {
                            var i, a, s, r, o;
                            return ya().wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                    case 0:
                                        if (i = !1,
                                        !t.guid) {
                                            n.next = 6;
                                            break
                                        }
                                        return n.next = 4,
                                        axios.get("/dojin-techo/get/".concat(t.guid));
                                    case 4:
                                        (a = n.sent).data.success && (s = JSON.parse(a.data.techo.ex_data),
                                        t.updated_at <= s.updated_at && (s.guid = a.data.techo.guid,
                                        s.id = t.id,
                                        e.saveLocalStorage(s),
                                        i = !0));
                                    case 6:
                                        if (i) {
                                            n.next = 20;
                                            break
                                        }
                                        return (r = new FormData).append("guid", t.guid),
                                        r.append("data", JSON.stringify(t)),
                                        n.prev = 10,
                                        n.next = 13,
                                        axios.post("/dojin-techo/upload", r);
                                    case 13:
                                        (o = n.sent).data.success && (JSON.parse(o.data.techo.ex_data),
                                        t.guid = o.data.techo.guid,
                                        e.saveLocalStorage(t)),
                                        n.next = 20;
                                        break;
                                    case 17:
                                        n.prev = 17,
                                        n.t0 = n.catch(10),
                                        console.error(n.t0);
                                    case 20:
                                        e.syncing = !1;
                                    case 21:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n, null, [[10, 17]])
                        }
                        ))), 1e3))
                    },
                    syncAll: function() {
                        var t = this;
                        return ka(ya().mark((function e() {
                            var n, i, a, s, r, o, l, c, u, d, f, p, m, h;
                            return ya().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t,
                                        t.isLogin) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.next = 5,
                                        axios.get("/dojin-techo/list");
                                    case 5:
                                        if (!(i = e.sent).data.success) {
                                            e.next = 40;
                                            break
                                        }
                                        a = [],
                                        s = ma(i.data.techos);
                                        try {
                                            for (s.s(); !(r = s.n()).done; )
                                                o = r.value,
                                                l = new Re(JSON.parse(o.ex_data)),
                                                -1 == (c = n.estimates.findIndex((function(t) {
                                                    return t.guid == o.guid
                                                }
                                                ))) ? (l.id = n.getNextId(),
                                                l.guid = o.guid,
                                                n.saveLocalStorage(l),
                                                n.estimates.push(l)) : (u = n.estimates[c]).updated_at <= l.updated_at && (l.guid = o.guid,
                                                l.id = u.id,
                                                n.saveLocalStorage(l),
                                                a.push(u.id),
                                                n.estimates[c] = l)
                                        } catch (t) {
                                            s.e(t)
                                        } finally {
                                            s.f()
                                        }
                                        d = ma(n.estimates),
                                        e.prev = 11,
                                        d.s();
                                    case 13:
                                        if ((f = d.n()).done) {
                                            e.next = 32;
                                            break
                                        }
                                        if (p = f.value,
                                        !a.contains(p.id)) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.abrupt("continue", 30);
                                    case 17:
                                        return (m = new FormData).append("guid", p.guid),
                                        m.append("data", JSON.stringify(p)),
                                        e.prev = 20,
                                        e.next = 23,
                                        axios.post("/dojin-techo/upload", m);
                                    case 23:
                                        (h = e.sent).data.success && (u = JSON.parse(h.data.techo.ex_data),
                                        p.guid = h.data.techo.guid,
                                        n.saveLocalStorage(p)),
                                        e.next = 30;
                                        break;
                                    case 27:
                                        e.prev = 27,
                                        e.t0 = e.catch(20),
                                        console.error(e.t0);
                                    case 30:
                                        e.next = 13;
                                        break;
                                    case 32:
                                        e.next = 37;
                                        break;
                                    case 34:
                                        e.prev = 34,
                                        e.t1 = e.catch(11),
                                        d.e(e.t1);
                                    case 37:
                                        return e.prev = 37,
                                        d.f(),
                                        e.finish(37);
                                    case 40:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[11, 34, 37, 40], [20, 27]])
                        }
                        )))()
                    },
                    syncAllWithTimer: function() {
                        var t = this;
                        t.syncing = !0,
                        this.syncAllTimer && window.clearInterval(this.syncAllTimer),
                        this.syncAllTimer = setTimeout(ka(ya().mark((function e() {
                            return ya().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        t.syncAll();
                                    case 2:
                                        t.syncing = !1;
                                    case 3:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        ))), 1e3)
                    },
                    $toast: function(t, e) {
                        this.$refs.toast.show(t, e)
                    },
                    $confirm: function(t, e, n) {
                        this.$refs.confirm.show(t, e, n)
                    }
                }
            }
              , La = (0,
            dt.A)(wa, [["render", function(t, e, n, a, s, r) {
                var o = (0,
                m.g2)("Page")
                  , l = (0,
                m.g2)("draggable")
                  , c = (0,
                m.g2)("Planner")
                  , u = (0,
                m.g2)("Toast")
                  , d = (0,
                m.g2)("ConfirmModal");
                return (0,
                m.uX)(),
                (0,
                m.CE)(m.FK, null, [(0,
                m.Lk)("div", v, [(0,
                m.Lk)("div", k, [s.syncing ? ((0,
                m.uX)(),
                (0,
                m.CE)("div", w, [e[9] || (e[9] = (0,
                m.Lk)("i", {
                    class: "fas fa-spinner fa-fw fa-spin me-1"
                }, null, -1)), (0,
                m.eW)((0,
                h.toDisplayString)(t.$t("同期中...")), 1)])) : (0,
                m.Q3)("v-if", !0)]), (0,
                m.Lk)("div", {
                    class: "d-block pointer text-center mt-5",
                    onClick: e[0] || (e[0] = function() {
                        return r.jumpToTop && r.jumpToTop.apply(r, arguments)
                    }
                    )
                }, e[10] || (e[10] = [(0,
                m.Lk)("img", {
                    src: "/static/techo/techo_logo.svg",
                    style: {
                        width: "200px"
                    }
                }, null, -1)])), "ja" != r.currentLanguage ? ((0,
                m.uX)(),
                (0,
                m.CE)("div", L, "Dojin Techo")) : (0,
                m.Q3)("v-if", !0), e[16] || (e[16] = (0,
                m.Lk)("div", {
                    class: "text-center my-4"
                }, [(0,
                m.Lk)("a", {
                    href: "/",
                    class: "text-white"
                }, [(0,
                m.eW)("powered by "), (0,
                m.Lk)("img", {
                    style: {
                        width: "18px"
                    },
                    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOC4xNCA0OS4xNiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOndoaXRlO308L3N0eWxlPjwvZGVmcz48ZyBpZD0i44Os44Kk44Ok44O8XzIiIGRhdGEtbmFtZT0i44Os44Kk44Ok44O8IDIiPjxnIGlkPSLjg6zjgqTjg6Tjg7xfMS0yIiBkYXRhLW5hbWU9IuODrOOCpOODpOODvCAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zMy41Miw4LjgzQzQwLjE5LDQsMzguOSwwLDMwLjY1LDBINy4zMUMtLjk0LDAtMi40Myw0LjI0LDQsOS40Mmw3LjE2LDUuNzljNi40Miw1LjE4LDYuNDMsMTMuNjcsMCwxOC44NmwtNyw1LjY1Yy02LjQxLDUuMTktNC45LDkuNDQsMy4zNSw5LjQ0SDMxYzguMjUsMCw5LjUzLTQsMi44NS04LjhsLTkuNzItN2MtNi42OC00Ljg0LTYuNjktMTIuNzcsMC0xNy42M1oiLz48L2c+PC9nPjwvc3ZnPg==",
                    class: "my-2 mx-2"
                }), (0,
                m.Lk)("img", {
                    style: {
                        width: "60px",
                        top: "4px",
                        position: "relative"
                    },
                    src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i44Os44Kk44Ok44O8XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTMzLjggNTUuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMzLjggNTUuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I2ZmZjt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTcwLjcsNDYuNmwtMC41LDNjLTUuOSwzLjYtMTIuNyw1LjUtMTkuOCw1LjVjLTExLjUsMC0yMi41LTUuMi0zMS4yLTE2LjNDOC45LDM4LjcsMCwzMC43LDAsMTkuNlM4LjksMCwxOS42LDANCgljMTAuNSwwLDE5LjYsOC4xLDE5LjYsMTkuM2MwLDkuMi02LjEsMTYuNi0xNC4zLDE4LjhjNy4yLDguOSwxNS43LDEzLjUsMjYuNSwxMy41QzU4LjksNTEuNiw2NC44LDQ5LjksNzAuNyw0Ni42eiBNMTkuOCwzNQ0KCWM4LjIsMCwxNC41LTYuMiwxNC41LTE1LjVjMC05LjktNy4xLTE1LjctMTQuOS0xNS43QzExLjIsMy44LDQuOSwxMCw0LjksMTkuNEM0LjksMjkuMywxMiwzNSwxOS44LDM1eiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTczLjksMjMuMWMwLDcuMS01LjQsMTIuMy0xMi4xLDEyLjNjLTYuNiwwLTEyLjEtNS4xLTEyLjEtMTIuM2MwLTcuMSw1LjUtMTIuMywxMi4xLTEyLjMNCglDNjguNCwxMC44LDczLjksMTYsNzMuOSwyMy4xeiBNNjkuNiwyMy41YzAtNS0zLjMtOS4xLTguMS05LjFjLTQuNSwwLTcuNSwzLjctNy41LDguM2MwLDUsMy4zLDkuMSw4LjEsOS4xDQoJQzY2LjYsMzEuOCw2OS42LDI4LjEsNjkuNiwyMy41eiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEwNC4xLDExLjRMOTMuNiwzNS4xSDkxTDgwLjIsMTEuNGg0LjZsNy44LDE3LjFsNy4zLTE3LjFIMTA0LjF6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTMzLjgsMjMuMWMwLDcuMS01LjQsMTIuMy0xMi4xLDEyLjNjLTYuNiwwLTEyLjEtNS4xLTEyLjEtMTIuM2MwLTcuMSw1LjUtMTIuMywxMi4xLTEyLjMNCglDMTI4LjMsMTAuOCwxMzMuOCwxNiwxMzMuOCwyMy4xeiBNMTI5LjUsMjMuNWMwLTUtMy4zLTkuMS04LjEtOS4xYy00LjUsMC03LjUsMy43LTcuNSw4LjNjMCw1LDMuMyw5LjEsOC4xLDkuMQ0KCUMxMjYuNiwzMS44LDEyOS41LDI4LjEsMTI5LjUsMjMuNXoiLz4NCjwvc3ZnPg0K",
                    class: "my-2"
                })])], -1)), "list" == s.mode ? ((0,
                m.uX)(),
                (0,
                m.CE)("div", x, [(0,
                m.Lk)("div", {
                    class: "text-center py-3 my-3 d-flex jcc",
                    onClick: e[1] || (e[1] = function(t) {
                        return r.startCreate("due")
                    }
                    )
                }, [(0,
                m.Lk)("div", b, [e[11] || (e[11] = (0,
                m.Lk)("i", {
                    class: "fas fa-plus fa-fw me-1"
                }, null, -1)), (0,
                m.eW)((0,
                h.toDisplayString)(t.$t("あたらしい本")), 1)])]), (0,
                m.bF)(l, {
                    modelValue: r.allEstimates,
                    "onUpdate:modelValue": e[2] || (e[2] = function(t) {
                        return r.allEstimates = t
                    }
                    ),
                    group: "estimates",
                    handle: ".handle",
                    animation: "200",
                    onStart: e[3] || (e[3] = function(t) {
                        return s.sorting = !0
                    }
                    ),
                    onEnd: e[4] || (e[4] = function(t) {
                        return s.sorting = !1
                    }
                    )
                }, {
                    item: (0,
                    m.k6)((function(t) {
                        var e = t.element;
                        return t.index,
                        [((0,
                        m.uX)(),
                        (0,
                        m.Wv)(o, {
                            estimate: e,
                            class: "mt-2 page w-100",
                            key: e.id,
                            onRemove: function(t) {
                                return r.remove(e)
                            },
                            onEdit: function(t) {
                                return r.startEdit(e)
                            },
                            onChanged: function(t) {
                                return r.pageChanged(e)
                            }
                        }, null, 8, ["estimate", "onRemove", "onEdit", "onChanged"]))]
                    }
                    )),
                    _: 1
                }, 8, ["modelValue"]), s.estimates.length > 0 ? ((0,
                m.uX)(),
                (0,
                m.CE)(m.FK, {
                    key: 0
                }, [(0,
                m.Lk)("div", {
                    class: "archived-title p-2 mt-4",
                    onClick: e[5] || (e[5] = function(t) {
                        return s.archivedOpened = !s.archivedOpened
                    }
                    )
                }, [(0,
                m.Lk)("i", {
                    class: (0,
                    h.normalizeClass)(["fa-regular fa-fw me-2", s.sorting || s.archivedOpened ? "fa-folder-open" : "fa-folder"])
                }, null, 2), (0,
                m.eW)((0,
                h.toDisplayString)(t.$t("おわった本")), 1), s.archivedOpened ? (0,
                m.Q3)("v-if", !0) : ((0,
                m.uX)(),
                (0,
                m.CE)("span", S, "(" + (0,
                h.toDisplayString)(r.archivedEstimates.length) + ")", 1))]), s.sorting || s.archivedOpened ? ((0,
                m.uX)(),
                (0,
                m.CE)("div", D, [(0,
                m.bF)(l, {
                    modelValue: r.archivedEstimates,
                    "onUpdate:modelValue": e[6] || (e[6] = function(t) {
                        return r.archivedEstimates = t
                    }
                    ),
                    group: "estimates",
                    handle: ".handle",
                    animation: "200",
                    class: "d-flex flex-wrap w-100"
                }, {
                    item: (0,
                    m.k6)((function(t) {
                        var e = t.element;
                        return t.index,
                        [((0,
                        m.uX)(),
                        (0,
                        m.Wv)(o, {
                            estimate: e,
                            class: "mt-2 page archived",
                            key: e.id,
                            onRemove: function(t) {
                                return r.remove(e)
                            },
                            onEdit: function(t) {
                                return r.startEdit(e)
                            },
                            onChanged: function(t) {
                                return r.pageChanged(e)
                            },
                            archived: !0
                        }, null, 8, ["estimate", "onRemove", "onEdit", "onChanged"]))]
                    }
                    )),
                    _: 1
                }, 8, ["modelValue"]), 0 == r.archivedEstimates.length ? ((0,
                m.uX)(),
                (0,
                m.CE)("div", C, (0,
                h.toDisplayString)(t.$t("ここにドラッグ")), 1)) : (0,
                m.Q3)("v-if", !0)])) : (0,
                m.Q3)("v-if", !0)], 64)) : (0,
                m.Q3)("v-if", !0)])) : "top" == s.mode ? ((0,
                m.uX)(),
                (0,
                m.CE)("div", j, [(0,
                m.Lk)("div", M, [e[12] || (e[12] = (0,
                m.Lk)("div", {
                    class: "text-primary text-center mt-5"
                }, [(0,
                m.Lk)("i", {
                    class: "fas fa-book-open fa-3x"
                })], -1)), (0,
                m.Lk)("div", E, (0,
                h.toDisplayString)(t.$t("同人誌の計画を立てよう")), 1), (0,
                m.Lk)("div", O, (0,
                h.toDisplayString)(t.$t("めざせ早期入稿！")), 1), (0,
                m.Lk)("div", T, [(0,
                m.Lk)("div", {
                    class: "button active mb-3",
                    onClick: e[7] || (e[7] = function(t) {
                        return r.startCreate("due")
                    }
                    )
                }, (0,
                h.toDisplayString)(t.$t("計画をはじめる")), 1)])])])) : "edit" == s.mode ? ((0,
                m.uX)(),
                (0,
                m.Wv)(c, {
                    key: 3,
                    ref: "planner",
                    onSave: r.save
                }, null, 8, ["onSave"])) : (0,
                m.Q3)("v-if", !0), r.isLogin ? (0,
                m.Q3)("v-if", !0) : ((0,
                m.uX)(),
                (0,
                m.CE)("div", X, [(0,
                m.Lk)("div", z, [(0,
                m.Lk)("div", I, [(0,
                m.Lk)("div", N, (0,
                h.toDisplayString)(t.$t("同人手帳のデータは、ブラウザのキャッシュを消したりすると消えてしまいます！ログインしてクラウドに保存しましょう。")), 1)]), (0,
                m.Lk)("div", A, [(0,
                m.Lk)("a", {
                    class: "secondary-btn",
                    href: "".concat(t.$settings.twitterOAuthUrl, "?next=/dojin-techo")
                }, (0,
                h.toDisplayString)(t.$t("Xでログイン")), 9, W)]), (0,
                m.Lk)("div", _, [(0,
                m.Lk)("ul", P, [(0,
                m.Lk)("li", null, (0,
                h.toDisplayString)(t.$t("ログインするとデータがクラウドに自動的にバックアップされるようになります。")), 1), (0,
                m.Lk)("li", {
                    innerHTML: t.$t("ログインすると<a href='/'>Qovo</a>にアカウント登録されます。利用規約をご確認ください。")
                }, null, 8, Y)])])])])), "list" == s.mode ? ((0,
                m.uX)(),
                (0,
                m.CE)("div", Q, [(0,
                m.Lk)("div", F, (0,
                h.toDisplayString)(t.$t("＼本づくりのおともに／")), 1), e[13] || (e[13] = (0,
                m.Fv)('<div class="d-flex flex-column flex-md-row qovo-qoso" data-v-6df5c5d6><div class="w-100 p-1" data-v-6df5c5d6><a href="http://qovo.jp" class="banner" target="" data-v-6df5c5d6><img src="' + g + '" class="mw-100" data-v-6df5c5d6></a></div><div class="w-100 p-1" data-v-6df5c5d6><a href="http://qoso.jp" class="banner" target="" data-v-6df5c5d6><img src="' + y + '" class="mw-100" data-v-6df5c5d6></a></div></div>', 1))])) : (0,
                m.Q3)("v-if", !0), (0,
                m.Lk)("footer", B, [(0,
                m.Lk)("div", H, [(0,
                m.Lk)("a", V, (0,
                h.toDisplayString)(t.$t("利用規約")), 1), (0,
                m.Lk)("a", U, (0,
                h.toDisplayString)(t.$t("プライバシーポリシー")), 1), r.isLogin ? ((0,
                m.uX)(),
                (0,
                m.CE)("a", K, (0,
                h.toDisplayString)(t.$t("ログアウト")), 1)) : (0,
                m.Q3)("v-if", !0)]), (0,
                m.Lk)("div", R, [e[14] || (e[14] = (0,
                m.Lk)("a", {
                    href: "/change_language/ja?next=/dojin-techo",
                    class: "me-3"
                }, "日本語", -1)), e[15] || (e[15] = (0,
                m.Lk)("a", {
                    href: "/change_language/en?next=/dojin-techo",
                    class: "me-3"
                }, "English", -1)), (0,
                m.Lk)("div", G, [(0,
                m.bo)((0,
                m.Lk)("input", {
                    class: "form-check-input",
                    type: "checkbox",
                    "onUpdate:modelValue": e[8] || (e[8] = function(t) {
                        return a.colorScheme = t
                    }
                    ),
                    id: "dark-mode-switch",
                    "true-value": "dark",
                    "false-value": "light"
                }, null, 512), [[i.vModelCheckbox, a.colorScheme]]), (0,
                m.Lk)("label", Z, (0,
                h.toDisplayString)(t.$t("ダークモード")), 1)])])])]), (0,
                m.bF)(u, {
                    ref: "toast"
                }, null, 512), (0,
                m.bF)(d, {
                    ref: "confirm"
                }, null, 512)], 64)
            }
            ], ["__scopeId", "data-v-6df5c5d6"]]);
            var xa = (0,
            i.createApp)(La);
            xa.use((0,
            a.y$)(p)),
            xa.use(s.Ay),
            xa.directive("enlink", c),
            xa.directive("flexible", d),
            xa.config.globalProperties.$t = l,
            xa.config.globalProperties.pgettext = function(t, e, n) {
                if (void 0 !== n) {
                    var i = npgettext(t, e, e, 1);
                    return Array.isArray(n) ? interpolate(i, n) : "object" === r(n) ? interpolate(i, n, !0) : interpolate(i, [n])
                }
                return pgettext(t, e)
            }
            ;
            var ba = JSON.parse(document.getElementById("global-settings").textContent);
            xa.config.globalProperties.$settings = ba,
            xa.config.globalProperties.$toast = function(t, e) {
                Sa.showToast(t, e)
            }
            ,
            xa.config.globalProperties.$confirm = function(t, e, n) {
                Sa.showConfirm(t, e, n)
            }
            ;
            var Sa = xa.mount("#world")
        }
        ,
        3826: () => {
            Object.defineProperty(Number.prototype, "intcomma", {
                value: function() {
                    return this.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                }
            }),
            Object.defineProperty(String.prototype, "nl2br", {
                value: function() {
                    return this.toString().replace(/\r?\n/g, "<br>")
                }
            }),
            Object.defineProperty(String.prototype, "sanitize", {
                value: function() {
                    return this.toString().replace(/>/g, "&gt;").replace(/</g, "&lt;")
                }
            }),
            Object.defineProperty(String.prototype, "unsanitize_br", {
                value: function() {
                    return this.toString().replace(/&lt;br&gt;/g, "<br>")
                }
            }),
            Object.defineProperty(String.prototype, "unsanitize", {
                value: function() {
                    return this.toString().replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                }
            }),
            Object.defineProperty(String.prototype, "shrink_br", {
                value: function() {
                    return this.toString().replace(/(<br>){3,}/g, "<br><br>")
                }
            }),
            Object.defineProperty(String.prototype, "shrink_space", {
                value: function() {
                    return this.toString().replace(/([\s　]){3,}/g, " ")
                }
            }),
            Object.defineProperty(String.prototype, "hankaku", {
                value: function() {
                    return this.toString().replace(/[Ａ-Ｚａ-ｚ０-９]/g, (function(t) {
                        return String.fromCharCode(t.charCodeAt(0) - 65248)
                    }
                    )).replace(/　/g, " ").trim()
                }
            }),
            Object.defineProperty(String.prototype, "startsWith", {
                value: function(t) {
                    return this.toString().substring(0, t.length) == t
                }
            }),
            Object.defineProperty(String.prototype, "splitext", {
                value: function(t) {
                    var e = this.toString().lastIndexOf(".");
                    return e >= 0 ? {
                        root: this.toString().substring(0, e),
                        ext: this.toString().substring(e + 1)
                    } : {
                        root: this.toString(),
                        ext: ""
                    }
                }
            }),
            Object.defineProperty(String.prototype, "safeCut", {
                value: function(t) {
                    return Array.from(this.toString()).slice(0, t).join("")
                }
            }),
            Object.defineProperty(String.prototype, "br2nl", {
                value: function() {
                    return this.toString().replace(/<br>/g, "\n")
                }
            }),
            Object.defineProperty(Array.prototype, "unique", {
                value: function() {
                    for (var t = this.concat(), e = 0; e < t.length; ++e)
                        for (var n = e + 1; n < t.length; ++n)
                            t[e] === t[n] && t.splice(n--, 1);
                    return t
                }
            }),
            Object.defineProperty(Number.prototype, "zeroPadding", {
                value: function(t) {
                    return String(this).padStart(t, "0")
                }
            }),
            Object.defineProperty(Array.prototype, "toDictWithId", {
                value: function() {
                    var t = {};
                    for (var e in this) {
                        var n = this[e];
                        t[n.id] = n
                    }
                    return t
                }
            }),
            Object.defineProperty(Array.prototype, "removeAll", {
                value: function(t) {
                    this.some && 0 != this.length && this.some((function(e, n) {
                        this[n] && t(this[n], n, this) && this.splice(n, 1)
                    }
                    ))
                }
            }),
            Object.defineProperty(Array.prototype, "contains", {
                value: function(t) {
                    return this.indexOf(t) >= 0
                }
            }),
            Object.defineProperty(Array.prototype, "takeoff", {
                value: function(t) {
                    if (this.some) {
                        var e = this;
                        this.some((function(n, i) {
                            n == t && e.splice(i, 1)
                        }
                        ))
                    }
                }
            })
        }
    }, n = {};
    function i(t) {
        var a = n[t];
        if (void 0 !== a)
            return a.exports;
        var s = n[t] = {
            exports: {}
        };
        return e[t].call(s.exports, s, s.exports, i),
        s.exports
    }
    i.m = e,
    t = [],
    i.O = (e, n, a, s) => {
        if (!n) {
            var r = 1 / 0;
            for (u = 0; u < t.length; u++) {
                for (var [n,a,s] = t[u], o = !0, l = 0; l < n.length; l++)
                    (!1 & s || r >= s) && Object.keys(i.O).every((t => i.O[t](n[l]))) ? n.splice(l--, 1) : (o = !1,
                    s < r && (r = s));
                if (o) {
                    t.splice(u--, 1);
                    var c = a();
                    void 0 !== c && (e = c)
                }
            }
            return e
        }
        s = s || 0;
        for (var u = t.length; u > 0 && t[u - 1][2] > s; u--)
            t[u] = t[u - 1];
        t[u] = [n, a, s]
    }
    ,
    i.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return i.d(e, {
            a: e
        }),
        e
    }
    ,
    i.d = (t, e) => {
        for (var n in e)
            i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            })
    }
    ,
    i.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
    i.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    i.j = 470,
    i.p = "/static/bundle/",
    ( () => {
        var t = {
            470: 0
        };
        i.O.j = e => 0 === t[e];
        var e = (e, n) => {
            var a, s, [r,o,l] = n, c = 0;
            if (r.some((e => 0 !== t[e]))) {
                for (a in o)
                    i.o(o, a) && (i.m[a] = o[a]);
                if (l)
                    var u = l(i)
            }
            for (e && e(n); c < r.length; c++)
                s = r[c],
                i.o(t, s) && t[s] && t[s][0](),
                t[s] = 0;
            return i.O(u)
        }
          , n = self.webpackChunkqovo_front = self.webpackChunkqovo_front || [];
        n.forEach(e.bind(null, 0)),
        n.push = e.bind(null, n.push.bind(n))
    }
    )();
    var a = i.O(void 0, [121], ( () => i(1037)));
    a = i.O(a)
}
)();
