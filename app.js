(function (e) {
    function n(o) {
        if (t[o]) return t[o].exports;
        var a = t[o] = { exports: {}, id: o, loaded: !1 };
        return e[o].call(a.exports, a, a.exports, n), a.loaded = !0, a.exports
    }
    var t = {};
    return n.m = e, n.c = t, n.p = "", n(0)
})({
    0: function (e, n, t) {
        e.exports = t(20)
    },
    11: function (e, n) {
        "use strict";
        ! function () {
            function e(e, n) {}

            function n(e, n) {}

            function t(e, n) {}

            function o(e, n) {}

            function a(e, n) {}
            var r = (console.log.bind(console), "/src/assets/images/fox.svg");
            !window.CubeTwo;
            var i = new window.CubeTwo({
                cubeComponent: document.getElementById("cubetwo-component-1"),
                isTapEnabled: !0,
                isRotateAnimationEnabled: !0,
                borderOnTheCube: !0,
                backgroundBlendModeOnTheCube: "multiply",
                backfaceVisibilityHiddenOnTheCube: !1,
                transition: "transform cubic-bezier(0.4, 0.0, 0.2, 1) 190ms",
                backgroundImages: {
                    u: r,
                    d: r,
                    f: r,
                    b: r,
                    r: r,
                    l: r
                },
                backgroundColors: {
                    u: "rgba(255, 255, 255, .9)",
                    d: "rgba(255, 213, 0, .9)",
                    f: "rgba(0, 158, 96, .9)",
                    b: "rgba(0, 81, 186, .9)",
                    r: "rgba(196, 30, 58, .9)",
                    l: "rgba(255, 88, 0, .9)",
                    backface: "transparent"
                },
                cubeSize: {}
            });
            i.addCallbackForEvent("init", n),
                i.addCallbackForEvent("statechange", e),
                i.addCallbackForEvent("beforerotate", t),
                i.addCallbackForEvent("afterrotate", o),
                i.addCallbackForEvent("issolved", a),
                i.init(),
                window.addEventListener("keydown", i.handleGlobalKeyEvent, !1),
                window.cubetwo = i
        }()
    },
    20: function (e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var o = t(11);
        Object.defineProperty(n, "App", { enumerable: !0, get: function () { return o.App } })
    }
});
