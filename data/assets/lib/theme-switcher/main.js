/*!
 * amaretti v0.0.1 (http://foxythemes.net/themes/amaretti)
 * Copyright 2014-2015 Foxy Themes all rights reserved 
 */
var App = function () {
    "use strict";

    function a(a) {
        var b = $("<div>", {
            "class": a
        }).appendTo("body"),
            c = b.css("background-color");
        return b.remove(), c
    }

    function b() {
        function a() {
            d.addClass("open-left-sidebar")
        }

        function b() {
            d.removeClass("open-left-sidebar")
        }

        function c(a) {
            var b = $(".am-left-sidebar .sidebar-elements > li");
            "undefined" != typeof a && (b = a), $.each(b, function (a, b) {
                var c = $(this).find("> a span").html(),
                    d = $(this).find("> ul"),
                    e = $("> li", d),
                    c = $('<li class="title">' + c + "</li>"),
                    f = $('<li class="nav-items"><div class="am-scroller nano"><div class="content nano-content"><ul></ul></div></div></li>');
                !d.find("> li.title").length > 0 && (d.prepend(c), e.appendTo(f.find(".content ul")), f.appendTo(d))
            })
        }
        var d = $("body"),
            e = $(".am-left-sidebar");
        if ($(".am-toggle-left-sidebar").on("click", function (c) {
                d.hasClass("open-left-sidebar") ? b() : a(), c.stopPropagation(), c.preventDefault()
        }), $(document).on("click", function (a) {
                !$(a.target).closest(e).length && d.hasClass("open-left-sidebar") && b()
        }), $(".am-left-sidebar .sidebar-elements > li > a").on("mouseover", function () {
                var a = $(this).parent().find(".am-scroller"),
                    b = $(this).parent(),
                    d = b.find("> ul");
                $.isXs() || d.addClass("visible"), a.nanoScroller({
            destroy: !0
        }), a.nanoScroller(), f.syncSubMenuOnHover && c(b)
        }), $(".am-left-sidebar .sidebar-elements > li > a").on("mouseleave", function () {
                var a = $(this).parent().find("> ul");
                $.isXs() || setTimeout(function () {
                    a.removeClass("visible")
        }, 300)
        }), $(".am-left-sidebar .sidebar-elements li a").on("click", function (a) {
                if ($.isXs()) {
                    var b, c = $(this),
                        d = f.leftSidebarSlideSpeed;
                    b = c.parent().siblings(".open"), b && b.toggleClass("open").find("> ul:visible").slideUp({
            duration: d
        }), c.parent().hasClass("open") ? c.next().slideUp({
            duration: d,
            complete: function () {
                            c.parent().toggleClass("open")
        }
        }) : c.next().slideDown({
            duration: d,
            complete: function () {
                            c.parent().toggleClass("open")
        }
        }), c.next().is("ul") && a.preventDefault()
        }
        }), $("li.active", e).parents(".parent").addClass("active open"), c(), $(".am-wrapper").hasClass("am-fixed-sidebar")) {
            var g = $(".am-left-sidebar > .content");
            g.wrap('<div class="am-scroller nano"></div>'), g.addClass("nano-content"), g.parent().nanoScroller()
        }
        $(window).resize(function () {
            h(function () {
                $.isXs() || ($(".am-scroller").nanoScroller({
                    destroy: !0
                }), $(".am-scroller").nanoScroller())
            }, 500, "am_check_phone_classes")
        })
    }

    function c() {
        function a() {
            c.addClass("open-right-sidebar")
        }

        function b() {
            c.removeClass("open-right-sidebar")
        }
        var c = $("body"),
            d = $(".am-right-sidebar");
        $(".am-toggle-right-sidebar").on("click", function (d) {
            c.hasClass("open-right-sidebar") ? b() : a(), d.stopPropagation(), d.preventDefault()
        }), $(document).on("click", function (a) {
            $(a.target).closest(d).length || b()
        })
    }

    function d() {
        function a() {
            d.hasClass("chat-opened") || (d.addClass("chat-opened"), $(".am-scroller", h).nanoScroller())
        }

        function b() {
            d.hasClass("chat-opened") && d.removeClass("chat-opened")
        }

        function c(a, b) {
            var c = $('<li class="' + (b ? "self" : "friend") + '"></li>');
            "" != a && ($('<div class="msg">' + a + "</div>").appendTo(c), c.appendTo(i), j.stop().animate({
                scrollTop: j.prop("scrollHeight")
            }, 900, "swing"), e())
        }
        var d = $(".am-right-sidebar .tab-pane.chat"),
            f = $(".chat-contacts", d),
            g = $(".chat-window", d),
            h = $(".chat-messages", g),
            i = $(".content > ul", h),
            j = $(".nano-content", h),
            k = $(".chat-input", g),
            l = $("input", k),
            m = $(".send-msg", k);
        $(".user a", f).on("click", function (b) {
            $(".am-scroller", f).nanoScroller({
                stop: !0
            }), a(), b.preventDefault()
        }), $(".title .return", g).on("click", function (a) {
            b(), e()
        }), l.keypress(function (a) {
            var b = a.keyCode ? a.keyCode : a.which,
                d = $(this).val();
            "13" == b && (c(d, !0), $(this).val("")), a.stopPropagation()
        }), m.on("click", function () {
            var a = l.val();
            c(a, !0), l.val("")
        })
    }

    function e() {
        $(".am-scroller").nanoScroller()
    }
    var f = {
        assetsPath: "assets",
        imgPath: "img",
        jsPath: "js",
        libsPath: "lib",
        leftSidebarSlideSpeed: 200,
        syncSubMenuOnHover: !1
    },
        g = {},
        h = function () {
            var a = {};
            return function (b, c, d) {
                d || (d = "x1x2x3x4"), a[d] && clearTimeout(a[d]), a[d] = setTimeout(b, c)
            }
        }();
    return {
        conf: f,
        color: g,
        init: function (h) {
            $.extend(f, h), FastClick.attach(document.body), b(), c(), d(), g.primary = a("clr-primary"), g.success = a("clr-success"), g.info = a("clr-info"), g.warning = a("clr-warning"), g.danger = a("clr-danger"), g.alt1 = a("clr-alt1"), g.alt2 = a("clr-alt2"), g.alt3 = a("clr-alt3"), g.alt4 = a("clr-alt4"), $(".am-connections").on("click", function (a) {
                a.stopPropagation()
            }), e(), $(".dropdown").on("shown.bs.dropdown", function () {
                $(".am-scroller").nanoScroller()
            }), $(".nav-tabs").on("shown.bs.tab", function (a) {
                $(".am-scroller").nanoScroller()
            }), $('[data-toggle="tooltip"]').tooltip(), $('[data-toggle="popover"]').popover(), $(".modal").on("show.bs.modal", function () {
                $("html").addClass("am-modal-open")
            }), $(".modal").on("hidden.bs.modal", function () {
                $("html").removeClass("am-modal-open")
            })
        }
    }
}();
! function () {
    "use strict";

    function a(b, d) {
        function e(a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        }
        var f;
        if (d = d || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = d.touchBoundary || 10, this.layer = b, this.tapDelay = d.tapDelay || 200, this.tapTimeout = d.tapTimeout || 700, !a.notNeeded(b)) {
            for (var g = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], h = this, i = 0, j = g.length; j > i; i++) h[g[i]] = e(h[g[i]], h);
            c && (b.addEventListener("mouseover", this.onMouse, !0), b.addEventListener("mousedown", this.onMouse, !0), b.addEventListener("mouseup", this.onMouse, !0)), b.addEventListener("click", this.onClick, !0), b.addEventListener("touchstart", this.onTouchStart, !1), b.addEventListener("touchmove", this.onTouchMove, !1), b.addEventListener("touchend", this.onTouchEnd, !1), b.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (b.removeEventListener = function (a, c, d) {
                var e = Node.prototype.removeEventListener;
                "click" === a ? e.call(b, a, c.hijacked || c, d) : e.call(b, a, c, d)
            }, b.addEventListener = function (a, c, d) {
                var e = Node.prototype.addEventListener;
                "click" === a ? e.call(b, a, c.hijacked || (c.hijacked = function (a) {
                    a.propagationStopped || c(a)
                }), d) : e.call(b, a, c, d)
            }), "function" == typeof b.onclick && (f = b.onclick, b.addEventListener("click", function (a) {
                f(a)
            }, !1), b.onclick = null)
        }
    }
    var b = navigator.userAgent.indexOf("Windows Phone") >= 0,
        c = navigator.userAgent.indexOf("Android") > 0 && !b,
        d = /iP(ad|hone|od)/.test(navigator.userAgent) && !b,
        e = d && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        f = d && /OS [6-7]_\d/.test(navigator.userAgent),
        g = navigator.userAgent.indexOf("BB10") > 0;
    a.prototype.needsClick = function (a) {
        switch (a.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (a.disabled) return !0;
                break;
            case "input":
                if (d && "file" === a.type || a.disabled) return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(a.className)
    }, a.prototype.needsFocus = function (a) {
        switch (a.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !c;
            case "input":
                switch (a.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !a.disabled && !a.readOnly;
            default:
                return /\bneedsfocus\b/.test(a.className)
        }
    }, a.prototype.sendClick = function (a, b) {
        var c, d;
        document.activeElement && document.activeElement !== a && document.activeElement.blur(), d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent = !0, a.dispatchEvent(c)
    }, a.prototype.determineEventType = function (a) {
        return c && "select" === a.tagName.toLowerCase() ? "mousedown" : "click"
    }, a.prototype.focus = function (a) {
        var b;
        d && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type && "month" !== a.type ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus()
    }, a.prototype.updateScrollParent = function (a) {
        var b, c;
        if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
            c = a;
            do {
                if (c.scrollHeight > c.offsetHeight) {
                    b = c, a.fastClickScrollParent = c;
                    break
                }
                c = c.parentElement
            } while (c)
        }
        b && (b.fastClickLastScrollTop = b.scrollTop)
    }, a.prototype.getTargetElementFromEventTarget = function (a) {
        return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
    }, a.prototype.onTouchStart = function (a) {
        var b, c, f;
        if (a.targetTouches.length > 1) return !0;
        if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], d) {
            if (f = window.getSelection(), f.rangeCount && !f.isCollapsed) return !0;
            if (!e) {
                if (c.identifier && c.identifier === this.lastTouchIdentifier) return a.preventDefault(), !1;
                this.lastTouchIdentifier = c.identifier, this.updateScrollParent(b)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = b, this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < this.tapDelay && a.preventDefault(), !0
    }, a.prototype.touchHasMoved = function (a) {
        var b = a.changedTouches[0],
            c = this.touchBoundary;
        return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 : !1
    }, a.prototype.onTouchMove = function (a) {
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
    }, a.prototype.findControl = function (a) {
        return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, a.prototype.onTouchEnd = function (a) {
        var b, g, h, i, j, k = this.targetElement;
        if (!this.trackingClick) return !0;
        if (a.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (a.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = a.timeStamp, g = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, f && (j = a.changedTouches[0], k = document.elementFromPoint(j.pageX - window.pageXOffset, j.pageY - window.pageYOffset) || k, k.fastClickScrollParent = this.targetElement.fastClickScrollParent), h = k.tagName.toLowerCase(), "label" === h) {
            if (b = this.findControl(k)) {
                if (this.focus(k), c) return !1;
                k = b
            }
        } else if (this.needsFocus(k)) return a.timeStamp - g > 100 || d && window.top !== window && "input" === h ? (this.targetElement = null, !1) : (this.focus(k), this.sendClick(k, a), d && "select" === h || (this.targetElement = null, a.preventDefault()), !1);
        return d && !e && (i = k.fastClickScrollParent, i && i.fastClickLastScrollTop !== i.scrollTop) ? !0 : (this.needsClick(k) || (a.preventDefault(), this.sendClick(k, a)), !1)
    }, a.prototype.onTouchCancel = function () {
        this.trackingClick = !1, this.targetElement = null
    }, a.prototype.onMouse = function (a) {
        return this.targetElement ? a.forwardedTouchEvent ? !0 : !a.cancelable || this.needsClick(this.targetElement) && !this.cancelNextClick ? !0 : (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0
    }, a.prototype.onClick = function (a) {
        var b;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), b || (this.targetElement = null), b)
    }, a.prototype.destroy = function () {
        var a = this.layer;
        c && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, a.notNeeded = function (a) {
        var b, d, e, f;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (d = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!c) return !0;
            if (b = document.querySelector("meta[name=viewport]")) {
                if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
                if (d > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (g && (e = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), e[1] >= 10 && e[2] >= 3 && (b = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === a.style.msTouchAction || "manipulation" === a.style.touchAction ? !0 : (f = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], f >= 27 && (b = document.querySelector("meta[name=viewport]"), b && (-1 !== b.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === a.style.touchAction || "manipulation" === a.style.touchAction ? !0 : !1)
    }, a.attach = function (b, c) {
        return new a(b, c)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return a
    }) : "undefined" != typeof module && module.exports ? (module.exports = a.attach, module.exports.FastClick = a) : window.FastClick = a
}(), ! function () {
    function a(c, d) {
        if (c = c ? c : "", d = d || {}, c instanceof a) return c;
        if (!(this instanceof a)) return new a(c, d);
        var e = b(c);
        this._originalInput = c, this._r = e.r, this._g = e.g, this._b = e.b, this._a = e.a, this._roundA = N(100 * this._a) / 100, this._format = d.format || e.format, this._gradientType = d.gradientType, this._r < 1 && (this._r = N(this._r)), this._g < 1 && (this._g = N(this._g)), this._b < 1 && (this._b = N(this._b)), this._ok = e.ok, this._tc_id = L++
    }

    function b(a) {
        var b = {
            r: 0,
            g: 0,
            b: 0
        },
            d = 1,
            f = !1,
            h = !1;
        return "string" == typeof a && (a = H(a)), "object" == typeof a && (a.hasOwnProperty("r") && a.hasOwnProperty("g") && a.hasOwnProperty("b") ? (b = c(a.r, a.g, a.b), f = !0, h = "%" === String(a.r).substr(-1) ? "prgb" : "rgb") : a.hasOwnProperty("h") && a.hasOwnProperty("s") && a.hasOwnProperty("v") ? (a.s = E(a.s), a.v = E(a.v), b = g(a.h, a.s, a.v), f = !0, h = "hsv") : a.hasOwnProperty("h") && a.hasOwnProperty("s") && a.hasOwnProperty("l") && (a.s = E(a.s), a.l = E(a.l), b = e(a.h, a.s, a.l), f = !0, h = "hsl"), a.hasOwnProperty("a") && (d = a.a)), d = x(d), {
            ok: f,
            format: a.format || h,
            r: O(255, P(b.r, 0)),
            g: O(255, P(b.g, 0)),
            b: O(255, P(b.b, 0)),
            a: d
        }
    }

    function c(a, b, c) {
        return {
            r: 255 * y(a, 255),
            g: 255 * y(b, 255),
            b: 255 * y(c, 255)
        }
    }

    function d(a, b, c) {
        a = y(a, 255), b = y(b, 255), c = y(c, 255);
        var d, e, f = P(a, b, c),
            g = O(a, b, c),
            h = (f + g) / 2;
        if (f == g) d = e = 0;
        else {
            var i = f - g;
            switch (e = h > .5 ? i / (2 - f - g) : i / (f + g), f) {
                case a:
                    d = (b - c) / i + (c > b ? 6 : 0);
                    break;
                case b:
                    d = (c - a) / i + 2;
                    break;
                case c:
                    d = (a - b) / i + 4
            }
            d /= 6
        }
        return {
            h: d,
            s: e,
            l: h
        }
    }

    function e(a, b, c) {
        function d(a, b, c) {
            return 0 > c && (c += 1), c > 1 && (c -= 1), 1 / 6 > c ? a + 6 * (b - a) * c : .5 > c ? b : 2 / 3 > c ? a + 6 * (b - a) * (2 / 3 - c) : a
        }
        var e, f, g;
        if (a = y(a, 360), b = y(b, 100), c = y(c, 100), 0 === b) e = f = g = c;
        else {
            var h = .5 > c ? c * (1 + b) : c + b - c * b,
                i = 2 * c - h;
            e = d(i, h, a + 1 / 3), f = d(i, h, a), g = d(i, h, a - 1 / 3)
        }
        return {
            r: 255 * e,
            g: 255 * f,
            b: 255 * g
        }
    }

    function f(a, b, c) {
        a = y(a, 255), b = y(b, 255), c = y(c, 255);
        var d, e, f = P(a, b, c),
            g = O(a, b, c),
            h = f,
            i = f - g;
        if (e = 0 === f ? 0 : i / f, f == g) d = 0;
        else {
            switch (f) {
                case a:
                    d = (b - c) / i + (c > b ? 6 : 0);
                    break;
                case b:
                    d = (c - a) / i + 2;
                    break;
                case c:
                    d = (a - b) / i + 4
            }
            d /= 6
        }
        return {
            h: d,
            s: e,
            v: h
        }
    }

    function g(a, b, c) {
        a = 6 * y(a, 360), b = y(b, 100), c = y(c, 100);
        var d = M.floor(a),
            e = a - d,
            f = c * (1 - b),
            g = c * (1 - e * b),
            h = c * (1 - (1 - e) * b),
            i = d % 6,
            j = [c, g, f, f, h, c][i],
            k = [h, c, c, g, f, f][i],
            l = [f, f, h, c, c, g][i];
        return {
            r: 255 * j,
            g: 255 * k,
            b: 255 * l
        }
    }

    function h(a, b, c, d) {
        var e = [D(N(a).toString(16)), D(N(b).toString(16)), D(N(c).toString(16))];
        return d && e[0].charAt(0) == e[0].charAt(1) && e[1].charAt(0) == e[1].charAt(1) && e[2].charAt(0) == e[2].charAt(1) ? e[0].charAt(0) + e[1].charAt(0) + e[2].charAt(0) : e.join("")
    }

    function i(a, b, c, d) {
        var e = [D(F(d)), D(N(a).toString(16)), D(N(b).toString(16)), D(N(c).toString(16))];
        return e.join("")
    }

    function j(b, c) {
        c = 0 === c ? 0 : c || 10;
        var d = a(b).toHsl();
        return d.s -= c / 100, d.s = z(d.s), a(d)
    }

    function k(b, c) {
        c = 0 === c ? 0 : c || 10;
        var d = a(b).toHsl();
        return d.s += c / 100, d.s = z(d.s), a(d)
    }

    function l(b) {
        return a(b).desaturate(100)
    }

    function m(b, c) {
        c = 0 === c ? 0 : c || 10;
        var d = a(b).toHsl();
        return d.l += c / 100, d.l = z(d.l), a(d)
    }

    function n(b, c) {
        c = 0 === c ? 0 : c || 10;
        var d = a(b).toRgb();
        return d.r = P(0, O(255, d.r - N(255 * -(c / 100)))), d.g = P(0, O(255, d.g - N(255 * -(c / 100)))), d.b = P(0, O(255, d.b - N(255 * -(c / 100)))), a(d)
    }

    function o(b, c) {
        c = 0 === c ? 0 : c || 10;
        var d = a(b).toHsl();
        return d.l -= c / 100, d.l = z(d.l), a(d)
    }

    function p(b, c) {
        var d = a(b).toHsl(),
            e = (N(d.h) + c) % 360;
        return d.h = 0 > e ? 360 + e : e, a(d)
    }

    function q(b) {
        var c = a(b).toHsl();
        return c.h = (c.h + 180) % 360, a(c)
    }

    function r(b) {
        var c = a(b).toHsl(),
            d = c.h;
        return [a(b), a({
            h: (d + 120) % 360,
            s: c.s,
            l: c.l
        }), a({
            h: (d + 240) % 360,
            s: c.s,
            l: c.l
        })]
    }

    function s(b) {
        var c = a(b).toHsl(),
            d = c.h;
        return [a(b), a({
            h: (d + 90) % 360,
            s: c.s,
            l: c.l
        }), a({
            h: (d + 180) % 360,
            s: c.s,
            l: c.l
        }), a({
            h: (d + 270) % 360,
            s: c.s,
            l: c.l
        })]
    }

    function t(b) {
        var c = a(b).toHsl(),
            d = c.h;
        return [a(b), a({
            h: (d + 72) % 360,
            s: c.s,
            l: c.l
        }), a({
            h: (d + 216) % 360,
            s: c.s,
            l: c.l
        })]
    }

    function u(b, c, d) {
        c = c || 6, d = d || 30;
        var e = a(b).toHsl(),
            f = 360 / d,
            g = [a(b)];
        for (e.h = (e.h - (f * c >> 1) + 720) % 360; --c;) e.h = (e.h + f) % 360, g.push(a(e));
        return g
    }

    function v(b, c) {
        c = c || 6;
        for (var d = a(b).toHsv(), e = d.h, f = d.s, g = d.v, h = [], i = 1 / c; c--;) h.push(a({
            h: e,
            s: f,
            v: g
        })), g = (g + i) % 1;
        return h
    }

    function w(a) {
        var b = {};
        for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
        return b
    }

    function x(a) {
        return a = parseFloat(a), (isNaN(a) || 0 > a || a > 1) && (a = 1), a
    }

    function y(a, b) {
        B(a) && (a = "100%");
        var c = C(a);
        return a = O(b, P(0, parseFloat(a))), c && (a = parseInt(a * b, 10) / 100), M.abs(a - b) < 1e-6 ? 1 : a % b / parseFloat(b)
    }

    function z(a) {
        return O(1, P(0, a))
    }

    function A(a) {
        return parseInt(a, 16)
    }

    function B(a) {
        return "string" == typeof a && -1 != a.indexOf(".") && 1 === parseFloat(a)
    }

    function C(a) {
        return "string" == typeof a && -1 != a.indexOf("%")
    }

    function D(a) {
        return 1 == a.length ? "0" + a : "" + a
    }

    function E(a) {
        return 1 >= a && (a = 100 * a + "%"), a
    }

    function F(a) {
        return Math.round(255 * parseFloat(a)).toString(16)
    }

    function G(a) {
        return A(a) / 255
    }

    function H(a) {
        a = a.replace(J, "").replace(K, "").toLowerCase();
        var b = !1;
        if (R[a]) a = R[a], b = !0;
        else if ("transparent" == a) return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
        var c;
        return (c = T.rgb.exec(a)) ? {
            r: c[1],
            g: c[2],
            b: c[3]
        } : (c = T.rgba.exec(a)) ? {
            r: c[1],
            g: c[2],
            b: c[3],
            a: c[4]
        } : (c = T.hsl.exec(a)) ? {
            h: c[1],
            s: c[2],
            l: c[3]
        } : (c = T.hsla.exec(a)) ? {
            h: c[1],
            s: c[2],
            l: c[3],
            a: c[4]
        } : (c = T.hsv.exec(a)) ? {
            h: c[1],
            s: c[2],
            v: c[3]
        } : (c = T.hsva.exec(a)) ? {
            h: c[1],
            s: c[2],
            v: c[3],
            a: c[4]
        } : (c = T.hex8.exec(a)) ? {
            a: G(c[1]),
            r: A(c[2]),
            g: A(c[3]),
            b: A(c[4]),
            format: b ? "name" : "hex8"
        } : (c = T.hex6.exec(a)) ? {
            r: A(c[1]),
            g: A(c[2]),
            b: A(c[3]),
            format: b ? "name" : "hex"
        } : (c = T.hex3.exec(a)) ? {
            r: A(c[1] + "" + c[1]),
            g: A(c[2] + "" + c[2]),
            b: A(c[3] + "" + c[3]),
            format: b ? "name" : "hex"
        } : !1
    }

    function I(a) {
        var b, c;
        return a = a || {
            level: "AA",
            size: "small"
        }, b = (a.level || "AA").toUpperCase(), c = (a.size || "small").toLowerCase(), "AA" !== b && "AAA" !== b && (b = "AA"), "small" !== c && "large" !== c && (c = "small"), {
            level: b,
            size: c
        }
    }
    var J = /^[\s,#]+/,
        K = /\s+$/,
        L = 0,
        M = Math,
        N = M.round,
        O = M.min,
        P = M.max,
        Q = M.random;
    a.prototype = {
        isDark: function () {
            return this.getBrightness() < 128
        },
        isLight: function () {
            return !this.isDark()
        },
        isValid: function () {
            return this._ok
        },
        getOriginalInput: function () {
            return this._originalInput
        },
        getFormat: function () {
            return this._format
        },
        getAlpha: function () {
            return this._a
        },
        getBrightness: function () {
            var a = this.toRgb();
            return (299 * a.r + 587 * a.g + 114 * a.b) / 1e3
        },
        getLuminance: function () {
            var a, b, c, d, e, f, g = this.toRgb();
            return a = g.r / 255, b = g.g / 255, c = g.b / 255, d = .03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4), e = .03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4), f = .03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4), .2126 * d + .7152 * e + .0722 * f
        },
        setAlpha: function (a) {
            return this._a = x(a), this._roundA = N(100 * this._a) / 100, this
        },
        toHsv: function () {
            var a = f(this._r, this._g, this._b);
            return {
                h: 360 * a.h,
                s: a.s,
                v: a.v,
                a: this._a
            }
        },
        toHsvString: function () {
            var a = f(this._r, this._g, this._b),
                b = N(360 * a.h),
                c = N(100 * a.s),
                d = N(100 * a.v);
            return 1 == this._a ? "hsv(" + b + ", " + c + "%, " + d + "%)" : "hsva(" + b + ", " + c + "%, " + d + "%, " + this._roundA + ")"
        },
        toHsl: function () {
            var a = d(this._r, this._g, this._b);
            return {
                h: 360 * a.h,
                s: a.s,
                l: a.l,
                a: this._a
            }
        },
        toHslString: function () {
            var a = d(this._r, this._g, this._b),
                b = N(360 * a.h),
                c = N(100 * a.s),
                e = N(100 * a.l);
            return 1 == this._a ? "hsl(" + b + ", " + c + "%, " + e + "%)" : "hsla(" + b + ", " + c + "%, " + e + "%, " + this._roundA + ")"
        },
        toHex: function (a) {
            return h(this._r, this._g, this._b, a)
        },
        toHexString: function (a) {
            return "#" + this.toHex(a)
        },
        toHex8: function () {
            return i(this._r, this._g, this._b, this._a)
        },
        toHex8String: function () {
            return "#" + this.toHex8()
        },
        toRgb: function () {
            return {
                r: N(this._r),
                g: N(this._g),
                b: N(this._b),
                a: this._a
            }
        },
        toRgbString: function () {
            return 1 == this._a ? "rgb(" + N(this._r) + ", " + N(this._g) + ", " + N(this._b) + ")" : "rgba(" + N(this._r) + ", " + N(this._g) + ", " + N(this._b) + ", " + this._roundA + ")"
        },
        toPercentageRgb: function () {
            return {
                r: N(100 * y(this._r, 255)) + "%",
                g: N(100 * y(this._g, 255)) + "%",
                b: N(100 * y(this._b, 255)) + "%",
                a: this._a
            }
        },
        toPercentageRgbString: function () {
            return 1 == this._a ? "rgb(" + N(100 * y(this._r, 255)) + "%, " + N(100 * y(this._g, 255)) + "%, " + N(100 * y(this._b, 255)) + "%)" : "rgba(" + N(100 * y(this._r, 255)) + "%, " + N(100 * y(this._g, 255)) + "%, " + N(100 * y(this._b, 255)) + "%, " + this._roundA + ")"
        },
        toName: function () {
            return 0 === this._a ? "transparent" : this._a < 1 ? !1 : S[h(this._r, this._g, this._b, !0)] || !1
        },
        toFilter: function (b) {
            var c = "#" + i(this._r, this._g, this._b, this._a),
                d = c,
                e = this._gradientType ? "GradientType = 1, " : "";
            if (b) {
                var f = a(b);
                d = f.toHex8String()
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + e + "startColorstr=" + c + ",endColorstr=" + d + ")"
        },
        toString: function (a) {
            var b = !!a;
            a = a || this._format;
            var c = !1,
                d = this._a < 1 && this._a >= 0,
                e = !b && d && ("hex" === a || "hex6" === a || "hex3" === a || "name" === a);
            return e ? "name" === a && 0 === this._a ? this.toName() : this.toRgbString() : ("rgb" === a && (c = this.toRgbString()), "prgb" === a && (c = this.toPercentageRgbString()), ("hex" === a || "hex6" === a) && (c = this.toHexString()), "hex3" === a && (c = this.toHexString(!0)), "hex8" === a && (c = this.toHex8String()), "name" === a && (c = this.toName()), "hsl" === a && (c = this.toHslString()), "hsv" === a && (c = this.toHsvString()), c || this.toHexString())
        },
        _applyModification: function (a, b) {
            var c = a.apply(null, [this].concat([].slice.call(b)));
            return this._r = c._r, this._g = c._g, this._b = c._b, this.setAlpha(c._a), this
        },
        lighten: function () {
            return this._applyModification(m, arguments)
        },
        brighten: function () {
            return this._applyModification(n, arguments)
        },
        darken: function () {
            return this._applyModification(o, arguments)
        },
        desaturate: function () {
            return this._applyModification(j, arguments)
        },
        saturate: function () {
            return this._applyModification(k, arguments)
        },
        greyscale: function () {
            return this._applyModification(l, arguments)
        },
        spin: function () {
            return this._applyModification(p, arguments)
        },
        _applyCombination: function (a, b) {
            return a.apply(null, [this].concat([].slice.call(b)))
        },
        analogous: function () {
            return this._applyCombination(u, arguments)
        },
        complement: function () {
            return this._applyCombination(q, arguments)
        },
        monochromatic: function () {
            return this._applyCombination(v, arguments)
        },
        splitcomplement: function () {
            return this._applyCombination(t, arguments)
        },
        triad: function () {
            return this._applyCombination(r, arguments)
        },
        tetrad: function () {
            return this._applyCombination(s, arguments)
        }
    }, a.fromRatio = function (b, c) {
        if ("object" == typeof b) {
            var d = {};
            for (var e in b) b.hasOwnProperty(e) && (d[e] = "a" === e ? b[e] : E(b[e]));
            b = d
        }
        return a(b, c)
    }, a.equals = function (b, c) {
        return b && c ? a(b).toRgbString() == a(c).toRgbString() : !1
    }, a.random = function () {
        return a.fromRatio({
            r: Q(),
            g: Q(),
            b: Q()
        })
    }, a.mix = function (b, c, d) {
        d = 0 === d ? 0 : d || 50;
        var e, f = a(b).toRgb(),
            g = a(c).toRgb(),
            h = d / 100,
            i = 2 * h - 1,
            j = g.a - f.a;
        e = -1 == i * j ? i : (i + j) / (1 + i * j), e = (e + 1) / 2;
        var k = 1 - e,
            l = {
                r: g.r * e + f.r * k,
                g: g.g * e + f.g * k,
                b: g.b * e + f.b * k,
                a: g.a * h + f.a * (1 - h)
            };
        return a(l)
    }, a.readability = function (b, c) {
        var d = a(b),
            e = a(c);
        return (Math.max(d.getLuminance(), e.getLuminance()) + .05) / (Math.min(d.getLuminance(), e.getLuminance()) + .05)
    }, a.isReadable = function (b, c, d) {
        var e, f, g = a.readability(b, c);
        switch (f = !1, e = I(d), e.level + e.size) {
            case "AAsmall":
            case "AAAlarge":
                f = g >= 4.5;
                break;
            case "AAlarge":
                f = g >= 3;
                break;
            case "AAAsmall":
                f = g >= 7
        }
        return f
    }, a.mostReadable = function (b, c, d) {
        var e, f, g, h, i = null,
            j = 0;
        d = d || {}, f = d.includeFallbackColors, g = d.level, h = d.size;
        for (var k = 0; k < c.length; k++) e = a.readability(b, c[k]), e > j && (j = e, i = a(c[k]));
        return a.isReadable(b, i, {
            level: g,
            size: h
        }) || !f ? i : (d.includeFallbackColors = !1, a.mostReadable(b, ["#fff", "#000"], d))
    };
    var R = a.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    },
        S = a.hexNames = w(R),
        T = function () {
            var a = "[-\\+]?\\d+%?",
                b = "[-\\+]?\\d*\\.\\d+%?",
                c = "(?:" + b + ")|(?:" + a + ")",
                d = "[\\s|\\(]+(" + c + ")[,|\\s]+(" + c + ")[,|\\s]+(" + c + ")\\s*\\)?",
                e = "[\\s|\\(]+(" + c + ")[,|\\s]+(" + c + ")[,|\\s]+(" + c + ")[,|\\s]+(" + c + ")\\s*\\)?";
            return {
                rgb: new RegExp("rgb" + d),
                rgba: new RegExp("rgba" + e),
                hsl: new RegExp("hsl" + d),
                hsla: new RegExp("hsla" + e),
                hsv: new RegExp("hsv" + d),
                hsva: new RegExp("hsva" + e),
                hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
            }
        }();
    "undefined" != typeof module && module.exports ? module.exports = a : "function" == typeof define && define.amd ? define(function () {
        return a
    }) : window.tinycolor = a
}(), ! function (a) {
    a.isBreakpoint = function (b) {
        var c, d;
        return c = a("<div/>", {
            "class": "visible-" + b
        }).appendTo("body"), d = c.is(":visible"), c.remove(), d
    }, a.extend(a, {
        isXs: function () {
            return a.isBreakpoint("xs")
        },
        isSm: function () {
            return a.isBreakpoint("sm")
        },
        isMd: function () {
            return a.isBreakpoint("md")
        },
        isLg: function () {
            return a.isBreakpoint("lg")
        }
    })
}(jQuery);
var App = function () {
    "use strict";
    return App.charts = function () {
        function a() {
            return Math.floor(31 * Math.random()) + 10
        }

        function b() {
            $('[data-toggle="counter"]').each(function (a, b) {
                var c = $(this),
                    d = "",
                    e = "",
                    f = 0,
                    g = 0,
                    h = 0,
                    i = 2.5;
                c.data("prefix") && (d = c.data("prefix")), c.data("suffix") && (e = c.data("suffix")), c.data("start") && (f = c.data("start")), c.data("end") && (g = c.data("end")), c.data("decimals") && (h = c.data("decimals")), c.data("duration") && (i = c.data("duration"));
                var j = new CountUp(c.get(0), f, g, h, i, {
                    suffix: e,
                    prefix: d
                });
                j.start()
            })
        }

        function c() {
            var a = App.color.alt2;
            $.plot($("#line-chart1"), [{
                data: [
                    [0, 20],
                    [1, 30],
                    [2, 25],
                    [3, 39],
                    [4, 35],
                    [5, 40],
                    [6, 30],
                    [7, 45]
                ],
                label: "Page Views"
            }], {
                series: {
                    lines: {
                        show: !0,
                        lineWidth: 2,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: .2
                            }, {
                                opacity: .2
                            }]
                        }
                    },
                    points: {
                        show: !0
                    },
                    shadowSize: 0
                },
                legend: {
                    show: !1
                },
                grid: {
                    margin: {
                        left: -8,
                        right: -8,
                        top: 0,
                        bottom: 0
                    },
                    show: !1,
                    labelMargin: 15,
                    axisMargin: 500,
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "rgba(0,0,0,0.15)",
                    borderWidth: 0
                },
                colors: [a],
                xaxis: {
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    autoscaleMargin: .5,
                    ticks: 4,
                    tickDecimals: 0
                }
            })
        }

        function d() {
            var a = [{
                label: "Google",
                data: 45
            }, {
                label: "Dribbble",
                data: 25
            }, {
                label: "Twitter",
                data: 20
            }, {
                label: "Facebook",
                data: 10
            }],
                b = tinycolor(App.color.primary).brighten(9).toString(),
                c = tinycolor(App.color.primary).lighten(13).toString(),
                d = tinycolor(App.color.primary).lighten(20).toString(),
                e = tinycolor(App.color.primary).lighten(27).toString();
            $.plot("#pie-chart4", a, {
                series: {
                    pie: {
                        show: !0,
                        innerRadius: .27,
                        shadow: {
                            top: 5,
                            left: 15,
                            alpha: .3
                        },
                        stroke: {
                            width: 0
                        },
                        label: {
                            show: !0,
                            formatter: function (a, b) {
                                return '<div style="font-size:12px;text-align:center;padding:2px;color:#333;">' + a + "</div>"
                            }
                        },
                        highlight: {
                            opacity: .08
                        }
                    }
                },
                grid: {
                    hoverable: !0,
                    clickable: !0
                },
                colors: [b, c, d, e],
                legend: {
                    show: !1
                }
            })
        }

        function e() {
            var a = tinycolor(App.color.alt3).lighten(15).toString(),
                b = tinycolor(App.color.alt3).brighten(3).toString();
            $.plot($("#bar-chart1"), [{
                data: [
                    [0, 15],
                    [1, 15],
                    [2, 19],
                    [3, 28],
                    [4, 30],
                    [5, 37],
                    [6, 35],
                    [7, 38],
                    [8, 48],
                    [9, 43],
                    [10, 38],
                    [11, 32],
                    [12, 38]
                ],
                label: "Page Views"
            }, {
                data: [
                    [0, 7],
                    [1, 10],
                    [2, 15],
                    [3, 23],
                    [4, 24],
                    [5, 29],
                    [6, 25],
                    [7, 33],
                    [8, 35],
                    [9, 38],
                    [10, 32],
                    [11, 27],
                    [12, 32]
                ],
                label: "Unique Visitor"
            }], {
                series: {
                    bars: {
                        align: "center",
                        show: !0,
                        lineWidth: 1,
                        barWidth: .6,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: 1
                            }, {
                                opacity: 1
                            }]
                        }
                    },
                    shadowSize: 2
                },
                legend: {
                    show: !1
                },
                grid: {
                    margin: 0,
                    show: !1,
                    labelMargin: 10,
                    axisMargin: 500,
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "rgba(0,0,0,0.15)",
                    borderWidth: 0
                },
                colors: [a, b],
                xaxis: {
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    autoscaleMargin: .5,
                    ticks: 4,
                    tickDecimals: 0
                }
            })
        }

        function f() {
            var a = [{
                label: "Premium Purchases",
                data: 15
            }, {
                label: "Standard Plans",
                data: 25
            }, {
                label: "Services",
                data: 60
            }],
                b = tinycolor(App.color.primary).lighten(5).toString(),
                c = App.color.alt2,
                d = App.color.alt1,
                e = $("#widget-top-1").parent().next().find(".legend");
            $.plot("#widget-top-1", a, {
                series: {
                    pie: {
                        show: !0,
                        highlight: {
                            opacity: .1
                        }
                    }
                },
                grid: {
                    hoverable: !0
                },
                legend: {
                    container: e
                },
                colors: [b, c, d]
            })
        }

        function g() {
            var a = tinycolor(App.color.alt1).lighten(7).toString(),
                b = App.color.alt1,
                c = [
                    [1, 20],
                    [2, 60],
                    [3, 35],
                    [4, 70],
                    [5, 45]
                ],
                d = [
                    [1, 60],
                    [2, 20],
                    [3, 65],
                    [4, 35],
                    [5, 65]
                ];
            $.plot("#linechart-mini1", [{
                data: c,
                canvasRender: !0
            }, {
                data: d,
                canvasRender: !0
            }], {
                series: {
                    lines: {
                        show: !0,
                        lineWidth: 0,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: .7
                            }, {
                                opacity: .7
                            }]
                        }
                    },
                    fillColor: "rgba(0, 0, 0, 1)",
                    shadowSize: 0,
                    curvedLines: {
                        apply: !0,
                        active: !0,
                        monotonicFit: !0
                    }
                },
                legend: {
                    show: !1
                },
                grid: {
                    show: !1,
                    hoverable: !0,
                    clickable: !0
                },
                colors: [a, b],
                xaxis: {
                    autoscaleMargin: 0,
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    autoscaleMargin: .5,
                    ticks: 5,
                    tickDecimals: 0
                }
            })
        }

        function h() {
            var a = tinycolor(App.color.primary).lighten(6),
                b = tinycolor(App.color.alt4).lighten(6.5),
                c = {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                        label: "My First dataset",
                        fillColor: b.setAlpha(.5).toString(),
                        pointColor: b.setAlpha(.8).toString(),
                        strokeColor: b.setAlpha(.8).toString(),
                        highlightFill: b.setAlpha(.75).toString(),
                        highlightStroke: b.toString(),
                        data: [65, 59, 80, 81, 56, 55, 40]
                    }, {
                        label: "My Second dataset",
                        fillColor: a.setAlpha(.5).toString(),
                        pointColor: a.setAlpha(.8).toString(),
                        strokeColor: a.setAlpha(.8).toString(),
                        highlightFill: a.setAlpha(.75).toString(),
                        highlightStroke: a.toString(),
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }]
                };
            new Chart($("#radar-chart1").get(0).getContext("2d")).Radar(c, {
                scaleShowLine: !0,
                responsive: !0,
                maintainAspectRatio: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            })
        }

        function i() {
            var b = tinycolor(App.color.primary).lighten(22),
                c = App.color.primary,
                d = [
                    [1, a()],
                    [2, a()],
                    [3, 2 + a()],
                    [4, 3 + a()],
                    [5, 5 + a()],
                    [6, 10 + a()],
                    [7, 15 + a()],
                    [8, 20 + a()],
                    [9, 25 + a()],
                    [10, 30 + a()],
                    [11, 35 + a()],
                    [12, 25 + a()],
                    [13, 15 + a()],
                    [14, 20 + a()],
                    [15, 45 + a()],
                    [16, 50 + a()],
                    [17, 65 + a()],
                    [18, 70 + a()],
                    [19, 85 + a()],
                    [20, 80 + a()],
                    [21, 75 + a()],
                    [22, 80 + a()],
                    [23, 75 + a()]
                ],
                e = [
                    [1, a()],
                    [2, a()],
                    [3, 10 + a()],
                    [4, 15 + a()],
                    [5, 20 + a()],
                    [6, 25 + a()],
                    [7, 30 + a()],
                    [8, 35 + a()],
                    [9, 40 + a()],
                    [10, 45 + a()],
                    [11, 50 + a()],
                    [12, 55 + a()],
                    [13, 60 + a()],
                    [14, 70 + a()],
                    [15, 75 + a()],
                    [16, 80 + a()],
                    [17, 85 + a()],
                    [18, 90 + a()],
                    [19, 95 + a()],
                    [20, 100 + a()],
                    [21, 110 + a()],
                    [22, 120 + a()],
                    [23, 130 + a()]
                ];
            $.plot($("#line-chart-live"), [{
                data: e,
                showLabels: !0,
                label: "New Visitors",
                labelPlacement: "below",
                canvasRender: !0,
                cColor: "#FFFFFF"
            }, {
                data: d,
                showLabels: !0,
                label: "Old Visitors",
                labelPlacement: "below",
                canvasRender: !0,
                cColor: "#FFFFFF"
            }], {
                series: {
                    lines: {
                        show: !0,
                        lineWidth: 1.5,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: .5
                            }, {
                                opacity: .5
                            }]
                        }
                    },
                    fillColor: "rgba(0, 0, 0, 1)",
                    points: {
                        show: !1,
                        fill: !0
                    },
                    shadowSize: 0
                },
                legend: {
                    show: !1
                },
                grid: {
                    show: !0,
                    margin: {
                        top: -20,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    labelMargin: 0,
                    axisMargin: 0,
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    minBorderMargin: 0
                },
                colors: [b, c],
                xaxis: {
                    autoscaleMargin: 0,
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    autoscaleMargin: .2,
                    ticks: 5,
                    tickDecimals: 0
                }
            })
        }

        function j() {
            var a = App.color.alt3,
                b = $("#line-chart2"),
                c = b.parent().find(".counter .value").get(0),
                d = [
                    [1, 10],
                    [2, 30],
                    [3, 55],
                    [4, 36],
                    [5, 57],
                    [6, 80],
                    [7, 65],
                    [8, 50],
                    [9, 80],
                    [10, 70],
                    [11, 90],
                    [12, 67],
                    [12, 67]
                ],
                e = ($.plot("#line-chart2", [{
                    data: d,
                    showLabels: !0,
                    label: "New Visitors",
                    labelPlacement: "below",
                    canvasRender: !0,
                    cColor: "#FFFFFF"
                }], {
                    series: {
                        lines: {
                            show: !0,
                            lineWidth: 2,
                            fill: !0,
                            fillColor: {
                                colors: [{
                                    opacity: .6
                                }, {
                                    opacity: .6
                                }]
                            }
                        },
                        fillColor: "rgba(0, 0, 0, 1)",
                        points: {
                            show: !0,
                            fill: !0,
                            fillColor: a
                        },
                        shadowSize: 0
                    },
                    legend: {
                        show: !1
                    },
                    grid: {
                        show: !1,
                        margin: {
                            left: -8,
                            right: -8,
                            top: 0,
                            botttom: 0
                        },
                        labelMargin: 0,
                        axisMargin: 0,
                        hoverable: !0,
                        clickable: !0,
                        tickColor: "rgba(0, 0, 0, 0)",
                        borderWidth: 0
                    },
                    colors: [a],
                    xaxis: {
                        autoscaleMargin: 0,
                        ticks: 11,
                        tickDecimals: 0
                    },
                    yaxis: {
                        autoscaleMargin: .5,
                        ticks: 5,
                        tickDecimals: 0
                    }
                }), new CountUp(c, 0, 80, 0, 2.5, {
                    suffix: "%"
                }));
            e.start()
        }

        function k() {
            var a = tinycolor(App.color.primary).lighten(5).toString();
            $.plot($("#line-chart3"), [{
                data: [
                    [0, 20],
                    [1, 30],
                    [2, 25],
                    [3, 39],
                    [4, 35],
                    [5, 40],
                    [6, 30],
                    [7, 45]
                ],
                label: "Page Views"
            }], {
                series: {
                    lines: {
                        show: !0,
                        lineWidth: 2,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: .1
                            }, {
                                opacity: .1
                            }]
                        }
                    },
                    points: {
                        show: !0
                    },
                    shadowSize: 0
                },
                legend: {
                    show: !1
                },
                grid: {
                    labelMargin: 15,
                    axisMargin: 500,
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "rgba(0,0,0,0.15)",
                    borderWidth: 0
                },
                colors: [a],
                xaxis: {
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    ticks: 4,
                    tickSize: 15,
                    tickDecimals: 0
                }
            })
        }

        function l() {
            var a = App.color.alt3,
                b = tinycolor(App.color.alt3).lighten(22).toString();
            $.plot($("#bar-chart2"), [{
                data: [
                    [0, 7],
                    [1, 13],
                    [2, 17],
                    [3, 20],
                    [4, 26],
                    [5, 37],
                    [6, 35],
                    [7, 28],
                    [8, 38],
                    [9, 38],
                    [10, 32]
                ],
                label: "Page Views"
            }, {
                data: [
                    [0, 15],
                    [1, 10],
                    [2, 15],
                    [3, 25],
                    [4, 30],
                    [5, 29],
                    [6, 25],
                    [7, 33],
                    [8, 45],
                    [9, 43],
                    [10, 38]
                ],
                label: "Unique Visitor"
            }], {
                series: {
                    bars: {
                        order: 2,
                        align: "center",
                        show: !0,
                        lineWidth: 1,
                        barWidth: .35,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: 1
                            }, {
                                opacity: 1
                            }]
                        }
                    },
                    shadowSize: 2
                },
                legend: {
                    show: !1
                },
                grid: {
                    labelMargin: 10,
                    axisMargin: 500,
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "rgba(0,0,0,0.15)",
                    borderWidth: 0
                },
                colors: [a, b],
                xaxis: {
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    ticks: 4,
                    tickDecimals: 0
                }
            })
        }
        b(), c(), d(), e(), f(), g(), h(), i(), j(), k(), l()
    }, App
}(App || {}),
    App = function () {
        "use strict";
        return App.dashboard = function () {
            function a() {
                $('[data-toggle="counter"]').each(function (a, b) {
                    var c = $(this),
                        d = "",
                        e = "",
                        f = 0,
                        g = 0,
                        h = 0,
                        i = 2.5;
                    c.data("prefix") && (d = c.data("prefix")), c.data("suffix") && (e = c.data("suffix")), c.data("start") && (f = c.data("start")), c.data("end") && (g = c.data("end")), c.data("decimals") && (h = c.data("decimals")), c.data("duration") && (i = c.data("duration"));
                    var j = new CountUp(c.get(0), f, g, h, i, {
                        suffix: e,
                        prefix: d
                    });
                    j.start()
                })
            }

            function b() {
                var a = [{
                    label: "Premium Purchases",
                    data: 15
                }, {
                    label: "Standard Plans",
                    data: 25
                }, {
                    label: "Services",
                    data: 60
                }],
                    b = tinycolor(App.color.primary).lighten(5).toString(),
                    c = App.color.alt2,
                    d = App.color.alt1,
                    e = $("#widget-top-1").parent().next().find(".legend");
                $.plot("#widget-top-1", a, {
                    series: {
                        pie: {
                            show: !0,
                            highlight: {
                                opacity: .1
                            }
                        }
                    },
                    grid: {
                        hoverable: !0
                    },
                    legend: {
                        container: e
                    },
                    colors: [b, c, d]
                })
            }

            function c() {
                var a = [{
                    label: "Direct Access",
                    data: 20
                }, {
                    label: "Advertisment",
                    data: 15
                }, {
                    label: "Facebook",
                    data: 15
                }, {
                    label: "Twitter",
                    data: 30
                }, {
                    label: "Google Plus",
                    data: 20
                }],
                    b = App.color.alt2,
                    c = App.color.alt4,
                    d = App.color.alt3,
                    e = App.color.alt1,
                    f = tinycolor(App.color.primary).lighten(5).toString(),
                    g = $("#widget-top-2").parent().next().find(".legend");
                $.plot("#widget-top-2", a, {
                    series: {
                        pie: {
                            innerRadius: .5,
                            show: !0,
                            highlight: {
                                opacity: .1
                            }
                        }
                    },
                    grid: {
                        hoverable: !0
                    },
                    legend: {
                        container: g
                    },
                    colors: [b, c, d, e, f]
                })
            }

            function d() {
                var a = [{
                    label: "Google Ads",
                    data: 70
                }, {
                    label: "Facebook",
                    data: 30
                }],
                    b = App.color.alt3,
                    c = tinycolor(App.color.alt4).lighten(6.5).toString();
                $.plot("#widget-top-3", a, {
                    series: {
                        pie: {
                            show: !0,
                            label: {
                                show: !1
                            },
                            highlight: {
                                opacity: .1
                            }
                        }
                    },
                    grid: {
                        hoverable: !0
                    },
                    legend: {
                        show: !1
                    },
                    colors: [b, c]
                })
            }

            function e() {
                var a = $(".widget-calendar"),
                    b = $(".cal-notes", a),
                    c = $(".day", b),
                    d = $(".date", b),
                    e = new Date,
                    f = new Array(7);
                f[0] = "Sunday", f[1] = "Monday", f[2] = "Tuesday", f[3] = "Wednesday", f[4] = "Thursday", f[5] = "Friday", f[6] = "Saturday";
                var g = f[e.getDay()];
                c.html(g);
                var h = new Array;
                h[0] = "January", h[1] = "February", h[2] = "March", h[3] = "April", h[4] = "May", h[5] = "June", h[6] = "July", h[7] = "August", h[8] = "September", h[9] = "October", h[10] = "November", h[11] = "December";
                var i = h[e.getMonth()],
                    j = e.getDate();
                d.html(i + " " + j), "undefined" != typeof jQuery.ui && $(".ui-datepicker").datepicker({
                    onSelect: function (a, b) {
                        var e = new Date(a),
                            g = f[e.getDay()],
                            i = h[e.getMonth()],
                            j = e.getDate();
                        c.html(g), d.html(i + " " + j)
                    }
                })
            }

            function f() {
                var a = ($("#line-chart1"), [
                        [1, 10],
                        [2, 30],
                        [3, 55],
                        [4, 36],
                        [5, 57],
                        [6, 80],
                        [7, 65],
                        [8, 50],
                        [9, 80],
                        [10, 70],
                        [11, 90],
                        [12, 67],
                        [12, 67]
                ]),
                    b = App.color.alt3;
                $.plot("#line-chart1", [{
                    data: a,
                    showLabels: !0,
                    label: "New Visitors",
                    labelPlacement: "below",
                    canvasRender: !0,
                    cColor: "#FFFFFF"
                }], {
                    series: {
                        lines: {
                            show: !0,
                            lineWidth: 2,
                            fill: !0,
                            fillColor: {
                                colors: [{
                                    opacity: .6
                                }, {
                                    opacity: .6
                                }]
                            }
                        },
                        fillColor: "rgba(0, 0, 0, 1)",
                        points: {
                            show: !0,
                            fill: !0,
                            fillColor: b
                        },
                        shadowSize: 0
                    },
                    legend: {
                        show: !1
                    },
                    grid: {
                        show: !1,
                        margin: {
                            left: -8,
                            right: -8,
                            top: 0,
                            botttom: 0
                        },
                        labelMargin: 0,
                        axisMargin: 0,
                        hoverable: !0,
                        clickable: !0,
                        tickColor: "rgba(0, 0, 0, 0)",
                        borderWidth: 0
                    },
                    colors: [b, "#1fb594"],
                    xaxis: {
                        autoscaleMargin: 0,
                        ticks: 11,
                        tickDecimals: 0
                    },
                    yaxis: {
                        autoscaleMargin: .5,
                        ticks: 5,
                        tickDecimals: 0
                    }
                })
            }

            function g() {
                var a = App.color.alt1;
                $("#world-map").vectorMap({
                    map: "world_mill_en",
                    backgroundColor: "transparent",
                    regionStyle: {
                        initial: {
                            fill: a
                        },
                        hover: {
                            "fill-opacity": .8
                        }
                    },
                    markerStyle: {
                        initial: {
                            r: 10
                        },
                        hover: {
                            r: 12,
                            stroke: "rgba(255,255,255,0.8)",
                            "stroke-width": 4
                        }
                    },
                    markers: [{
                        latLng: [41.9, 12.45],
                        name: "1.512 Visits",
                        style: {
                            fill: "#F07878",
                            stroke: "rgba(255,255,255,0.7)",
                            "stroke-width": 3
                        }
                    }, {
                        latLng: [1.3, 103.8],
                        name: "940 Visits",
                        style: {
                            fill: "#F07878",
                            stroke: "rgba(255,255,255,0.7)",
                            "stroke-width": 3
                        }
                    }, {
                        latLng: [51.511214, -.119824],
                        name: "530 Visits",
                        style: {
                            fill: "#F07878",
                            stroke: "rgba(255,255,255,0.7)",
                            "stroke-width": 3
                        }
                    }, {
                        latLng: [40.714353, -74.005973],
                        name: "340 Visits",
                        style: {
                            fill: "#F07878",
                            stroke: "rgba(255,255,255,0.7)",
                            "stroke-width": 3
                        }
                    }, {
                        latLng: [-22.913395, -43.20071],
                        name: "1.800 Visits",
                        style: {
                            fill: "#F07878",
                            stroke: "rgba(255,255,255,0.7)",
                            "stroke-width": 3
                        }
                    }]
                })
            }

            function h() {
                var a = [
                        [1, 20],
                        [2, 60],
                        [3, 35],
                        [4, 70],
                        [5, 45]
                ],
                    b = [
                        [1, 60],
                        [2, 20],
                        [3, 65],
                        [4, 35],
                        [5, 65]
                    ],
                    c = App.color.alt2;
                $.plot("#linechart-mini1", [{
                    data: a,
                    canvasRender: !0
                }, {
                    data: b,
                    canvasRender: !0
                }], {
                    series: {
                        lines: {
                            show: !0,
                            lineWidth: 0,
                            fill: !0,
                            fillColor: {
                                colors: [{
                                    opacity: .7
                                }, {
                                    opacity: .7
                                }]
                            }
                        },
                        fillColor: "rgba(0, 0, 0, 1)",
                        shadowSize: 0,
                        curvedLines: {
                            apply: !0,
                            active: !0,
                            monotonicFit: !0
                        }
                    },
                    legend: {
                        show: !1
                    },
                    grid: {
                        show: !1,
                        hoverable: !0,
                        clickable: !0
                    },
                    colors: [c, c],
                    xaxis: {
                        autoscaleMargin: 0,
                        ticks: 11,
                        tickDecimals: 0
                    },
                    yaxis: {
                        autoscaleMargin: .5,
                        ticks: 5,
                        tickDecimals: 0
                    }
                })
            }

            function i() {
                var a = tinycolor(App.color.primary).lighten(23).toString(),
                    b = tinycolor(App.color.primary).brighten(5).toString();
                $.plot($("#barchart-mini1"), [{
                    data: [
                        [0, 15],
                        [1, 15],
                        [2, 19],
                        [3, 28],
                        [4, 30],
                        [5, 37],
                        [6, 35],
                        [7, 38],
                        [8, 48],
                        [9, 43],
                        [10, 38],
                        [11, 32],
                        [12, 38]
                    ],
                    label: "Page Views"
                }, {
                    data: [
                        [0, 7],
                        [1, 10],
                        [2, 15],
                        [3, 23],
                        [4, 24],
                        [5, 29],
                        [6, 25],
                        [7, 33],
                        [8, 35],
                        [9, 38],
                        [10, 32],
                        [11, 27],
                        [12, 32]
                    ],
                    label: "Unique Visitor"
                }], {
                    series: {
                        bars: {
                            align: "center",
                            show: !0,
                            lineWidth: 1,
                            barWidth: .8,
                            fill: !0,
                            fillColor: {
                                colors: [{
                                    opacity: 1
                                }, {
                                    opacity: 1
                                }]
                            }
                        },
                        shadowSize: 0
                    },
                    legend: {
                        show: !1
                    },
                    grid: {
                        margin: 0,
                        show: !1,
                        labelMargin: 10,
                        axisMargin: 500,
                        hoverable: !0,
                        clickable: !0,
                        tickColor: "rgba(0,0,0,0.15)",
                        borderWidth: 0
                    },
                    colors: [a, b],
                    xaxis: {
                        ticks: 11,
                        tickDecimals: 0
                    },
                    yaxis: {
                        autoscaleMargin: .5,
                        ticks: 4,
                        tickDecimals: 0
                    }
                })
            }

            function j() {
                var a = tinycolor(App.color.primary).lighten(6),
                    b = tinycolor(App.color.alt4).lighten(6.5),
                    c = {
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [{
                            label: "My First dataset",
                            fillColor: b.setAlpha(.5).toString(),
                            pointColor: b.setAlpha(.8).toString(),
                            strokeColor: b.setAlpha(.8).toString(),
                            highlightFill: b.setAlpha(.75).toString(),
                            highlightStroke: b.toString(),
                            data: [65, 59, 80, 81, 56, 55, 40]
                        }, {
                            label: "My Second dataset",
                            fillColor: a.setAlpha(.5).toString(),
                            pointColor: a.setAlpha(.8).toString(),
                            strokeColor: a.setAlpha(.8).toString(),
                            highlightFill: a.setAlpha(.75).toString(),
                            highlightStroke: a.toString(),
                            data: [28, 48, 40, 19, 86, 27, 90]
                        }]
                    };
                new Chart($("#radar-chart1").get(0).getContext("2d")).Radar(c, {
                    scaleShowLine: !0,
                    responsive: !0,
                    maintainAspectRatio: !1,
                    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
                })
            }
            a(), b(), c(), d();
            var k = App.color.alt2,
                l = tinycolor(App.color.primary).lighten(5).toString();
            $("#spk1").sparkline([2, 4, 3, 6, 7, 5, 8, 9, 4, 2, 10], {
                type: "bar",
                width: "80px",
                height: "30px",
                barColor: k
            }), $("#spk2").sparkline([5, 3, 5, 6, 5, 7, 4, 8, 6, 9, 8], {
                type: "bar",
                width: "80px",
                height: "30px",
                barColor: l
            }), e(), f(), h(), i(), g(), j()
        }, App
    }(App || {}),
    App = function () {
        "use strict";
        return App.dashboard2 = function () {
            function a() {
                return Math.floor(31 * Math.random()) + 10
            }

            function b() {
                $('[data-toggle="counter"]').each(function (a, b) {
                    var c = $(this),
                        d = "",
                        e = "",
                        f = 0,
                        g = 0,
                        h = 0,
                        i = 2.5;
                    c.data("prefix") && (d = c.data("prefix")), c.data("suffix") && (e = c.data("suffix")), c.data("start") && (f = c.data("start")), c.data("end") && (g = c.data("end")), c.data("decimals") && (h = c.data("decimals")), c.data("duration") && (i = c.data("duration"));
                    var j = new CountUp(c.get(0), f, g, h, i, {
                        suffix: e,
                        prefix: d
                    });
                    j.start()
                })
            }

            function c() {
                var b = [
                        [1, a()],
                        [2, a()],
                        [3, 2 + a()],
                        [4, 3 + a()],
                        [5, 5 + a()],
                        [6, 10 + a()],
                        [7, 15 + a()],
                        [8, 20 + a()],
                        [9, 25 + a()],
                        [10, 30 + a()],
                        [11, 35 + a()],
                        [12, 25 + a()],
                        [13, 15 + a()],
                        [14, 20 + a()],
                        [15, 45 + a()],
                        [16, 50 + a()],
                        [17, 65 + a()],
                        [18, 70 + a()],
                        [19, 85 + a()],
                        [20, 80 + a()],
                        [21, 75 + a()],
                        [22, 80 + a()],
                        [23, 75 + a()]
                ],
                    c = [
                        [1, a()],
                        [2, a()],
                        [3, 10 + a()],
                        [4, 15 + a()],
                        [5, 20 + a()],
                        [6, 25 + a()],
                        [7, 30 + a()],
                        [8, 35 + a()],
                        [9, 40 + a()],
                        [10, 45 + a()],
                        [11, 50 + a()],
                        [12, 55 + a()],
                        [13, 60 + a()],
                        [14, 70 + a()],
                        [15, 75 + a()],
                        [16, 80 + a()],
                        [17, 85 + a()],
                        [18, 90 + a()],
                        [19, 95 + a()],
                        [20, 100 + a()],
                        [21, 110 + a()],
                        [22, 120 + a()],
                        [23, 130 + a()]
                    ],
                    d = tinycolor(App.color.primary).lighten(22),
                    e = App.color.primary;
                $.plot($("#line-chart-live"), [{
                    data: c,
                    showLabels: !0,
                    label: "New Visitors",
                    labelPlacement: "below",
                    canvasRender: !0,
                    cColor: "#FFFFFF"
                }, {
                    data: b,
                    showLabels: !0,
                    label: "Old Visitors",
                    labelPlacement: "below",
                    canvasRender: !0,
                    cColor: "#FFFFFF"
                }], {
                    series: {
                        lines: {
                            show: !0,
                            lineWidth: 1.5,
                            fill: !0,
                            fillColor: {
                                colors: [{
                                    opacity: .5
                                }, {
                                    opacity: .5
                                }]
                            }
                        },
                        fillColor: "rgba(0, 0, 0, 1)",
                        points: {
                            show: !1,
                            fill: !0
                        },
                        shadowSize: 0
                    },
                    legend: {
                        show: !1
                    },
                    grid: {
                        show: !0,
                        margin: {
                            top: -20,
                            bottom: 0,
                            left: 0,
                            right: 0
                        },
                        labelMargin: 0,
                        axisMargin: 0,
                        hoverable: !0,
                        clickable: !0,
                        tickColor: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        minBorderMargin: 0
                    },
                    colors: [d, e],
                    xaxis: {
                        autoscaleMargin: 0,
                        ticks: 11,
                        tickDecimals: 0
                    },
                    yaxis: {
                        autoscaleMargin: .2,
                        ticks: 5,
                        tickDecimals: 0
                    }
                })
            }

            function d() {
                var a = tinycolor(App.color.primary).lighten(5).toString();
                $.plot($("#line-chart1"), [{
                    data: [
                        [0, 20],
                        [1, 30],
                        [2, 25],
                        [3, 39],
                        [4, 35],
                        [5, 40],
                        [6, 30],
                        [7, 45]
                    ],
                    label: "Page Views"
                }], {
                    series: {
                        lines: {
                            show: !0,
                            lineWidth: 2,
                            fill: !0,
                            fillColor: {
                                colors: [{
                                    opacity: .1
                                }, {
                                    opacity: .1
                                }]
                            }
                        },
                        points: {
                            show: !0
                        },
                        shadowSize: 0
                    },
                    legend: {
                        show: !1
                    },
                    grid: {
                        margin: {
                            left: -8,
                            right: -8,
                            top: 0,
                            bottom: 0
                        },
                        show: !1,
                        labelMargin: 15,
                        axisMargin: 500,
                        hoverable: !0,
                        clickable: !0,
                        tickColor: "rgba(0,0,0,0.15)",
                        borderWidth: 0
                    },
                    colors: [a, "#95D9F0", "#FFDC7A"],
                    xaxis: {
                        ticks: 11,
                        tickDecimals: 0
                    },
                    yaxis: {
                        autoscaleMargin: .5,
                        ticks: 4,
                        tickDecimals: 0
                    }
                })
            }

            function e() {
                var a = [{
                    label: "Google",
                    data: 45
                }, {
                    label: "Dribbble",
                    data: 25
                }, {
                    label: "Twitter",
                    data: 20
                }, {
                    label: "Facebook",
                    data: 10
                }],
                    b = tinycolor(App.color.primary).brighten(9).toString(),
                    c = tinycolor(App.color.primary).lighten(13).toString(),
                    d = tinycolor(App.color.primary).lighten(20).toString(),
                    e = tinycolor(App.color.primary).lighten(27).toString();
                $.plot("#pie-chart4", a, {
                    series: {
                        pie: {
                            show: !0,
                            innerRadius: .27,
                            shadow: {
                                top: 5,
                                left: 15,
                                alpha: .3
                            },
                            stroke: {
                                width: 0
                            },
                            label: {
                                show: !0,
                                formatter: function (a, b) {
                                    return '<div style="font-size:12px;text-align:center;padding:2px;color:#333;">' + a + "</div>"
                                }
                            },
                            highlight: {
                                opacity: .08
                            }
                        }
                    },
                    grid: {
                        hoverable: !0,
                        clickable: !0
                    },
                    colors: [b, c, d, e],
                    legend: {
                        show: !1
                    }
                })
            }

            function f() {
                var a = tinycolor(App.color.primary).lighten(23).toString(),
                    b = tinycolor(App.color.primary).brighten(5).toString();
                $.plot($("#bar-chart1"), [{
                    data: [
                        [0, 15],
                        [1, 15],
                        [2, 19],
                        [3, 28],
                        [4, 30],
                        [5, 37],
                        [6, 35],
                        [7, 38],
                        [8, 48],
                        [9, 43],
                        [10, 38],
                        [11, 32],
                        [12, 38]
                    ],
                    label: "Page Views"
                }, {
                    data: [
                        [0, 7],
                        [1, 10],
                        [2, 15],
                        [3, 23],
                        [4, 24],
                        [5, 29],
                        [6, 25],
                        [7, 33],
                        [8, 35],
                        [9, 38],
                        [10, 32],
                        [11, 27],
                        [12, 32]
                    ],
                    label: "Unique Visitor"
                }], {
                    series: {
                        bars: {
                            align: "center",
                            show: !0,
                            lineWidth: 1,
                            barWidth: .6,
                            fill: !0,
                            fillColor: {
                                colors: [{
                                    opacity: 1
                                }, {
                                    opacity: 1
                                }]
                            }
                        },
                        shadowSize: 2
                    },
                    legend: {
                        show: !1
                    },
                    grid: {
                        margin: 0,
                        show: !1,
                        labelMargin: 10,
                        axisMargin: 500,
                        hoverable: !0,
                        clickable: !0,
                        tickColor: "rgba(0,0,0,0.15)",
                        borderWidth: 0
                    },
                    colors: [a, b],
                    xaxis: {
                        ticks: 11,
                        tickDecimals: 0
                    },
                    yaxis: {
                        autoscaleMargin: .5,
                        ticks: 4,
                        tickDecimals: 0
                    }
                })
            }

            function g() {
                var a = $(".widget-calendar"),
                    b = $(".cal-notes", a),
                    c = $(".day", b),
                    d = $(".date", b),
                    e = new Date,
                    f = new Array(7);
                f[0] = "Sunday", f[1] = "Monday", f[2] = "Tuesday", f[3] = "Wednesday", f[4] = "Thursday", f[5] = "Friday", f[6] = "Saturday";
                var g = f[e.getDay()];
                c.html(g);
                var h = new Array;
                h[0] = "January", h[1] = "February", h[2] = "March", h[3] = "April", h[4] = "May", h[5] = "June", h[6] = "July", h[7] = "August", h[8] = "September", h[9] = "October", h[10] = "November", h[11] = "December";
                var i = h[e.getMonth()],
                    j = e.getDate();
                d.html(i + " " + j), "undefined" != typeof jQuery.ui && $(".ui-datepicker").datepicker({
                    onSelect: function (a, b) {
                        var e = new Date(a),
                            g = f[e.getDay()],
                            i = h[e.getMonth()],
                            j = e.getDate();
                        c.html(g), d.html(i + " " + j)
                    }
                })
            }

            function h() {
                var a = $(".widget-weather"),
                    b = new Skycons({
                        color: "#555555"
                    });
                b.add($(".icon1", a)[0], Skycons.CLEAR_DAY), b.add($(".icon2", a)[0], Skycons.PARTLY_CLOUDY_DAY), b.add($(".icon3", a)[0], Skycons.RAIN), b.play()
            }
            b(), c(), d(), e(), f(), g(), h()
        }, App
    }(App || {}),
    App = function () {
        "use strict";
        return App.formElements = function () {
            $(".datetimepicker").datetimepicker({
                autoclose: !0,
                componentIcon: ".s7-date",
                navIcons: {
                    rightIcon: "s7-angle-right",
                    leftIcon: "s7-angle-left"
                }
            }), $(".select2").select2({
                width: "100%"
            }), $(".tags").select2({
                tags: !0,
                width: "100%"
            }), $(".bslider").bootstrapSlider()
        }, App
    }(App || {}),
    App = function () {
        "use strict";
        return App.masks = function () {
            $("[data-mask='date']").mask("99/99/9999"), $("[data-mask='phone']").mask("(999) 999-9999"), $("[data-mask='phone-ext']").mask("(999) 999-9999? x99999"), $("[data-mask='phone-int']").mask("+33 999 999 999"), $("[data-mask='taxid']").mask("99-9999999"), $("[data-mask='ssn']").mask("999-99-9999"), $("[data-mask='product-key']").mask("a*-999-a999"), $("[data-mask='percent']").mask("99%"), $("[data-mask='currency']").mask("$999,999,999.99")
        }, App
    }(App || {}),
    App = function () {
        "use strict";
        return App.wizard = function () {
            $(".wizard-ux").wizard(), $(".wizard-ux").on("changed.fu.wizard", function () {
                $(".bslider").slider()
            }), $(".wizard-next").click(function (a) {
                var b = $(this).data("wizard");
                $(b).wizard("next"), a.preventDefault()
            }), $(".wizard-previous").click(function (a) {
                var b = $(this).data("wizard");
                $(b).wizard("previous"), a.preventDefault()
            }), $(".select2").select2({
                width: "100%"
            }), $(".tags").select2({
                tags: !0,
                width: "100%"
            }), $("#credit_slider").slider().on("slide", function (a) {
                $("#credits").html("$" + a.value)
            }), $("#rate_slider").slider().on("slide", function (a) {
                $("#rate").html(a.value + "%")
            })
        }, App
    }(App || {}),
    App = function () {
        "use strict";
        return App.textEditors = function () {
            $("#editor1").summernote({
                height: 300
            })
        }, App
    }(App || {}),
    App = function () {
        "use strict";
        return App.mapsGoogle = function () {
            var a, b = {
                zoom: 14,
                center: new google.maps.LatLng(-33.877827, 151.188598),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            a = new google.maps.Map(document.getElementById("map_one"), b);
            var c, b = {
                zoom: 14,
                center: new google.maps.LatLng(-33.877827, 151.188598),
                mapTypeId: google.maps.MapTypeId.HYBRID
            };
            c = new google.maps.Map(document.getElementById("map_two"), b);
            var d, b = {
                zoom: 14,
                center: new google.maps.LatLng(-33.877827, 151.188598),
                mapTypeId: google.maps.MapTypeId.TERRAIN
            };
            d = new google.maps.Map(document.getElementById("map_three"), b)
        }, App
    }(App || {}),
    App = function () {
        "use strict";
        return App.mapsVector = function () {
            var a = App.color.alt3,
                b = App.color.alt2,
                c = App.color.primary,
                d = App.color.alt4,
                e = tinycolor(App.color.alt1).lighten(3).toString(),
                f = App.color.success,
                g = tinycolor(App.color.alt4).lighten(5).toString();
            $("#usa-map").vectorMap({
                map: "us_merc_en",
                backgroundColor: "transparent",
                regionStyle: {
                    initial: {
                        fill: a
                    },
                    hover: {
                        "fill-opacity": .8
                    }
                }
            }), $("#france-map").vectorMap({
                map: "fr_merc_en",
                backgroundColor: "transparent",
                regionStyle: {
                    initial: {
                        fill: b
                    },
                    hover: {
                        "fill-opacity": .8
                    }
                }
            }), $("#uk-map").vectorMap({
                map: "uk_mill_en",
                backgroundColor: "transparent",
                regionStyle: {
                    initial: {
                        fill: c
                    },
                    hover: {
                        "fill-opacity": .8
                    }
                }
            }), $("#chicago-map").vectorMap({
                map: "us-il-chicago_mill_en",
                backgroundColor: "transparent",
                regionStyle: {
                    initial: {
                        fill: d
                    },
                    hover: {
                        "fill-opacity": .8
                    }
                }
            }), $("#australia-map").vectorMap({
                map: "au_mill_en",
                backgroundColor: "transparent",
                regionStyle: {
                    initial: {
                        fill: e
                    },
                    hover: {
                        "fill-opacity": .8
                    }
                }
            }), $("#india-map").vectorMap({
                map: "in_mill_en",
                backgroundColor: "transparent",
                regionStyle: {
                    initial: {
                        fill: f
                    },
                    hover: {
                        "fill-opacity": .8
                    }
                }
            }), $("#vector-map").vectorMap({
                map: "map",
                backgroundColor: "transparent",
                regionStyle: {
                    initial: {
                        fill: g,
                        "fill-opacity": .8,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 1
                    },
                    hover: {
                        "fill-opacity": .8
                    }
                },
                markerStyle: {
                    initial: {
                        r: 10
                    }
                },
                markers: [{
                    coords: [100, 100],
                    name: "Marker 1",
                    style: {
                        fill: "#acb1b6",
                        stroke: "#cfd5db",
                        "stroke-width": 3
                    }
                }, {
                    coords: [200, 200],
                    name: "Marker 2",
                    style: {
                        fill: "#acb1b6",
                        stroke: "#cfd5db",
                        "stroke-width": 3
                    }
                }]
            }), $("#canada-map").vectorMap({
                map: "ca_lcc_en",
                backgroundColor: "transparent",
                regionStyle: {
                    initial: {
                        fill: a
                    },
                    hover: {
                        "fill-opacity": .8
                    }
                }
            })
        }, App
    }(App || {}),
    App = function () {
        "use strict";
        return App.pageCalendar = function () {
            function a() {
                var a = $(".widget-weather"),
                    b = new Skycons({
                        color: "#555555"
                    });
                b.add($(".icon1", a)[0], Skycons.CLEAR_DAY), b.add($(".icon2", a)[0], Skycons.PARTLY_CLOUDY_DAY), b.add($(".icon3", a)[0], Skycons.RAIN), b.play()
            }
            $("#external-events div.external-event").each(function () {
                var a = {
                    title: $.trim($(this).text())
                };
                $(this).data("eventObject", a), $(this).draggable({
                    zIndex: 999,
                    revert: !0,
                    revertDuration: 0
                })
            });
            var b = new Date,
                c = b.getDate(),
                d = b.getMonth(),
                e = b.getFullYear();
            $("#calendar").fullCalendar({
                header: {
                    left: "title",
                    center: "",
                    right: "month,agendaWeek,agendaDay, today, prev,next"
                },
                editable: !0,
                events: [{
                    title: "All Day Event",
                    start: new Date(e, d, 1)
                }, {
                    title: "Long Event",
                    start: new Date(e, d, c - 5),
                    end: new Date(e, d, c - 2)
                }, {
                    id: 999,
                    title: "Repeating Event",
                    start: new Date(e, d, c - 3, 16, 0),
                    allDay: !1
                }, {
                    id: 999,
                    title: "Repeating Event",
                    start: new Date(e, d, c + 4, 16, 0),
                    allDay: !1
                }, {
                    title: "Meeting",
                    start: new Date(e, d, c, 10, 30),
                    allDay: !1
                }, {
                    title: "Lunch",
                    start: new Date(e, d, c, 12, 0),
                    end: new Date(e, d, c, 14, 0),
                    allDay: !1
                }, {
                    title: "Birthday Party",
                    start: new Date(e, d, c + 1, 19, 0),
                    end: new Date(e, d, c + 1, 22, 30),
                    allDay: !1
                }, {
                    title: "Click for Google",
                    start: new Date(e, d, 28),
                    end: new Date(e, d, 29),
                    url: "http://google.com/"
                }],
                droppable: !0,
                drop: function (a, b) {
                    var c = $(this).data("eventObject"),
                        d = $.extend({}, c);
                    d.start = a, d.allDay = b, $("#calendar").fullCalendar("renderEvent", d, !0), $("#drop-remove").is(":checked") && $(this).remove()
                }
            }), a()
        }, App
    }(App || {}),
    App = function () {
        "use strict";
        return App.pageGallery = function () {
            var a = $(".gallery-container");
            a.masonry({
                columnWidth: 0,
                itemSelector: ".item"
            }), $("#sidebar-collapse").click(function () {
                a.masonry()
            }), $(".image-zoom").magnificPopup({
                type: "image",
                mainClass: "mfp-with-zoom",
                zoom: {
                    enabled: !0,
                    duration: 300,
                    easing: "ease-in-out",
                    opener: function (a) {
                        var b = $(a).parents("div.img");
                        return b
                    }
                }
            }), a.masonry()
        }, App
    }(App || {}),
    App = function () {
        "use strict";
        return App.pageProfile = function () {
            function a() {
                var a = [
                        [1, 20],
                        [2, 60],
                        [3, 35],
                        [4, 70],
                        [5, 45]
                ],
                    b = [
                        [1, 60],
                        [2, 20],
                        [3, 65],
                        [4, 35],
                        [5, 65]
                    ];
                $.plot("#linechart-mini1", [{
                    data: a,
                    canvasRender: !0
                }, {
                    data: b,
                    canvasRender: !0
                }], {
                    series: {
                        lines: {
                            show: !0,
                            lineWidth: 0,
                            fill: !0,
                            fillColor: {
                                colors: [{
                                    opacity: .7
                                }, {
                                    opacity: .7
                                }]
                            }
                        },
                        fillColor: "rgba(0, 0, 0, 1)",
                        shadowSize: 0,
                        curvedLines: {
                            apply: !0,
                            active: !0,
                            monotonicFit: !0
                        }
                    },
                    legend: {
                        show: !1
                    },
                    grid: {
                        show: !1,
                        hoverable: !0,
                        clickable: !0
                    },
                    colors: ["#FFDC7A", "#FFDC7A"],
                    xaxis: {
                        autoscaleMargin: 0,
                        ticks: 11,
                        tickDecimals: 0
                    },
                    yaxis: {
                        autoscaleMargin: .5,
                        ticks: 5,
                        tickDecimals: 0
                    }
                })
            }

            function b() {
                $.plot($("#barchart-mini1"), [{
                    data: [
                        [0, 15],
                        [1, 15],
                        [2, 19],
                        [3, 28],
                        [4, 30],
                        [5, 37],
                        [6, 35],
                        [7, 38],
                        [8, 48],
                        [9, 43],
                        [10, 38],
                        [11, 32],
                        [12, 38]
                    ],
                    label: "Page Views"
                }, {
                    data: [
                        [0, 7],
                        [1, 10],
                        [2, 15],
                        [3, 23],
                        [4, 24],
                        [5, 29],
                        [6, 25],
                        [7, 33],
                        [8, 35],
                        [9, 38],
                        [10, 32],
                        [11, 27],
                        [12, 32]
                    ],
                    label: "Unique Visitor"
                }], {
                    series: {
                        bars: {
                            align: "center",
                            show: !0,
                            lineWidth: 1,
                            barWidth: .8,
                            fill: !0,
                            fillColor: {
                                colors: [{
                                    opacity: 1
                                }, {
                                    opacity: 1
                                }]
                            }
                        },
                        shadowSize: 0
                    },
                    legend: {
                        show: !1
                    },
                    grid: {
                        margin: 0,
                        show: !1,
                        labelMargin: 10,
                        axisMargin: 500,
                        hoverable: !0,
                        clickable: !0,
                        tickColor: "rgba(0,0,0,0.15)",
                        borderWidth: 0
                    },
                    colors: ["#ADC0D8", "#88A3C6"],
                    xaxis: {
                        ticks: 11,
                        tickDecimals: 0
                    },
                    yaxis: {
                        autoscaleMargin: .5,
                        ticks: 4,
                        tickDecimals: 0
                    }
                })
            }

            function c() {
                var a = $(".widget-calendar"),
                    b = $(".cal-notes", a),
                    c = $(".day", b),
                    d = $(".date", b),
                    e = new Date,
                    f = new Array(7);
                f[0] = "Sunday", f[1] = "Monday", f[2] = "Tuesday", f[3] = "Wednesday", f[4] = "Thursday", f[5] = "Friday", f[6] = "Saturday";
                var g = f[e.getDay()];
                c.html(g);
                var h = new Array;
                h[0] = "January", h[1] = "February", h[2] = "March", h[3] = "April", h[4] = "May", h[5] = "June", h[6] = "July", h[7] = "August", h[8] = "September", h[9] = "October", h[10] = "November", h[11] = "December";
                var i = h[e.getMonth()],
                    j = e.getDate();
                d.html(i + " " + j), "undefined" != typeof jQuery.ui && $(".ui-datepicker").datepicker({
                    onSelect: function (a, b) {
                        var e = new Date(a),
                            g = f[e.getDay()],
                            i = h[e.getMonth()],
                            j = e.getDate();
                        c.html(g), d.html(i + " " + j)
                    }
                })
            }
            a(), b(), c()
        }, App
    }(App || {}),
    App = function () {
        "use strict";
        return App.dataTables = function () {
            $.extend(!0, $.fn.dataTable.defaults, {
                dom: "<'row am-datatable-header'<'col-sm-6'l><'col-sm-6'f>><'row am-datatable-body'<'col-sm-12'tr>><'row am-datatable-footer'<'col-sm-5'i><'col-sm-7'p>>"
            }), $("#table1").dataTable(), $("#table2").dataTable({
                pageLength: 6,
                dom: "<'row am-datatable-body'<'col-sm-12'tr>><'row am-datatable-footer'<'col-sm-5'i><'col-sm-7'p>>"
            }), $("#table3").dataTable({
                buttons: ["copy", "excel", "pdf", "print"],
                lengthMenu: [
                    [6, 10, 25, 50, -1],
                    [6, 10, 25, 50, "All"]
                ],
                dom: "<'row am-datatable-header'<'col-sm-6'l><'col-sm-6 text-right'B>><'row am-datatable-body'<'col-sm-12'tr>><'row am-datatable-footer'<'col-sm-5'i><'col-sm-7'p>>"
            })
        }, App
    }(App || {}),
    App = function () {
        "use strict";
        return App.uiNestableLists = function () {
            function a(a, b) {
                var c = $(a).nestable("serialize");
                $(b).html(window.JSON.stringify(c))
            }
            $(".dd").nestable(), a("#list1", "#out1"), a("#list2", "#out2"), $("#list1").on("change", function () {
                a("#list1", "#out1")
            }), $("#list2").on("change", function () {
                a("#list2", "#out2")
            })
        }, App
    }(App || {}),
    App = function () {
        "use strict";
        return App.uiNotifications = function () {
            $("#not-basic").click(function () {
                return $.gritter.add({
                    title: "Samantha new msg!",
                    text: "You have a new Thomas message, let's checkout your inbox.",
                    image: App.conf.assetsPath + "/" + App.conf.imgPath + "/avatar.jpg",
                    time: "",
                    class_name: "img-rounded"
                }), !1
            }), $("#not-theme").click(function () {
                return $.gritter.add({
                    title: "Welcome home!",
                    text: "You can start your day checking the new messages.",
                    image: App.conf.assetsPath + "/" + App.conf.imgPath + "/avatar6.jpg",
                    class_name: "clean img-rounded",
                    time: ""
                }), !1
            }), $("#not-sticky").click(function () {
                return $.gritter.add({
                    title: "Sticky Note",
                    text: "Your daily goal is 130 new code lines, don't forget to update your work.",
                    image: App.conf.assetsPath + "/" + App.conf.imgPath + "/slack_logo.png",
                    class_name: "clean",
                    sticky: !0,
                    time: ""
                }), !1
            }), $("#not-text").click(function () {
                return $.gritter.add({
                    title: "Just Text",
                    text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum.",
                    class_name: "clean",
                    time: ""
                }), !1
            }), $("#not-tr").click(function () {
                return $.extend($.gritter.options, {
                    position: "top-right"
                }), $.gritter.add({
                    title: "Top Right",
                    text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum",
                    class_name: "clean"
                }), !1
            }), $("#not-tl").click(function () {
                return $.extend($.gritter.options, {
                    position: "top-left"
                }), $.gritter.add({
                    title: "Top Left",
                    text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum",
                    class_name: "clean"
                }), !1
            }), $("#not-bl").click(function () {
                return $.extend($.gritter.options, {
                    position: "bottom-left"
                }), $.gritter.add({
                    title: "Bottom Left",
                    text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum",
                    class_name: "clean"
                }), !1
            }), $("#not-br").click(function () {
                return $.extend($.gritter.options, {
                    position: "bottom-right"
                }), $.gritter.add({
                    title: "Bottom Right",
                    text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum",
                    class_name: "clean"
                }), !1
            }), $("#not-facebook").click(function () {
                return $.gritter.add({
                    title: "You have comments!",
                    text: "You can start your day checking the new messages.",
                    image: App.conf.assetsPath + "/" + App.conf.imgPath + "/fb-icon.png",
                    class_name: "color facebook"
                }), !1
            }), $("#not-twitter").click(function () {
                return $.gritter.add({
                    title: "You have new followers!",
                    text: "You can start your day checking the new messages.",
                    image: App.conf.assetsPath + "/" + App.conf.imgPath + "/tw-icon.png",
                    class_name: "color twitter"
                }), !1
            }), $("#not-google-plus").click(function () {
                return $.gritter.add({
                    title: "You have new +1!",
                    text: "You can start your day checking the new messages.",
                    image: App.conf.assetsPath + "/" + App.conf.imgPath + "/gp-icon.png",
                    class_name: "color google-plus"
                }), !1
            }), $("#not-dribbble").click(function () {
                return $.gritter.add({
                    title: "You have new comments!",
                    text: "You can start your day checking the new comments.",
                    image: App.conf.assetsPath + "/" + App.conf.imgPath + "/db-icon.png",
                    class_name: "color dribbble"
                }), !1
            }), $("#not-flickr").click(function () {
                return $.gritter.add({
                    title: "You have new comments!",
                    text: "You can start your day checking the new comments.",
                    image: App.conf.assetsPath + "/" + App.conf.imgPath + "/fl-icon.png",
                    class_name: "color flickr"
                }), !1
            }), $("#not-linkedin").click(function () {
                return $.gritter.add({
                    title: "You have new comments!",
                    text: "You can start your day checking the new comments.",
                    image: App.conf.assetsPath + "/" + App.conf.imgPath + "/in-icon.png",
                    class_name: "color linkedin"
                }), !1
            }), $("#not-youtube").click(function () {
                return $.gritter.add({
                    title: "You have new comments!",
                    text: "You can start your day checking the new comments.",
                    image: App.conf.assetsPath + "/" + App.conf.imgPath + "/yt-icon.png",
                    class_name: "color youtube"
                }), !1
            }), $("#not-pinterest").click(function () {
                return $.gritter.add({
                    title: "You have new comments!",
                    text: "You can start your day checking the new comments.",
                    image: App.conf.assetsPath + "/" + App.conf.imgPath + "/pi-icon.png",
                    class_name: "color pinterest"
                }), !1
            }), $("#not-github").click(function () {
                return $.gritter.add({
                    title: "You have new forks!",
                    text: "You can start your day checking the new comments.",
                    image: App.conf.assetsPath + "/" + App.conf.imgPath + "/gh-icon.png",
                    class_name: "color github"
                }), !1
            }), $("#not-tumblr").click(function () {
                return $.gritter.add({
                    title: "You have new comments!",
                    text: "You can start your day checking the new comments.",
                    image: App.conf.assetsPath + "/" + App.conf.imgPath + "/tu-icon.png",
                    class_name: "color tumblr"
                }), !1
            }), $("#not-primary").click(function () {
                $.gritter.add({
                    title: "Primary",
                    text: "This is a simple Gritter Notification.",
                    class_name: "color primary"
                })
            }), $("#not-success").click(function () {
                $.gritter.add({
                    title: "Success",
                    text: "This is a simple Gritter Notification.",
                    class_name: "color success"
                })
            }), $("#not-info").click(function () {
                $.gritter.add({
                    title: "Info",
                    text: "This is a simple Gritter Notification.",
                    class_name: "color info"
                })
            }), $("#not-warning").click(function () {
                $.gritter.add({
                    title: "Warning",
                    text: "This is a simple Gritter Notification.",
                    class_name: "color warning"
                })
            }), $("#not-danger").click(function () {
                $.gritter.add({
                    title: "Danger",
                    text: "This is a simple Gritter Notification.",
                    class_name: "color danger"
                })
            }), $("#not-ac1").click(function () {
                $.gritter.add({
                    title: "Alt Color 1",
                    text: "This is a simple Gritter Notification.",
                    class_name: "color alt1"
                })
            }), $("#not-ac2").click(function () {
                $.gritter.add({
                    title: "Alt Color 2",
                    text: "This is a simple Gritter Notification.",
                    class_name: "color alt2"
                })
            }), $("#not-ac3").click(function () {
                $.gritter.add({
                    title: "Alt Color 3",
                    text: "This is a simple Gritter Notification.",
                    class_name: "color alt3"
                })
            }), $("#not-ac4").click(function () {
                $.gritter.add({
                    title: "Alt Color 4",
                    text: "This is a simple Gritter Notification.",
                    class_name: "color alt4"
                })
            }), $("#not-dark").click(function () {
                $.gritter.add({
                    title: "Dark Color",
                    text: "This is a simple Gritter Notification.",
                    class_name: "color dark"
                })
            })
        }, App
    }(App || {});