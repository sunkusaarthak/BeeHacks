function initializeMap() {
    var e = [
        { elementType: "geometry", stylers: [{ color: "#212121" }] },
        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
        {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [{ color: "#757575" }],
        },
        {
            featureType: "administrative.country",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }],
        },
        {
            featureType: "administrative.land_parcel",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#bdbdbd" }],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#181818" }],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#616161" }],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#1b1b1b" }],
        },
        {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{ color: "#2c2c2c" }],
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#8a8a8a" }],
        },
        {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#373737" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#3c3c3c" }],
        },
        {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [{ color: "#4e4e4e" }],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{ color: "#616161" }],
        },
        {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#000000" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#3d3d3d" }],
        },
    ],
        l = 39.148352,
        t = -84.443999,
        a = new google.maps.StyledMapType(e, { name: "Styled Map" }),
        o = {
            zoom: 14,
            scrollwheel: !1,
            disableDefaultUI: !0,
            draggable: !0,
            center: new google.maps.LatLng(l, t),
            mapTypeControlOptions: { mapTypeIds: [google.maps.MapTypeId.ROADMAP] },
        },
        i = new google.maps.Map(document.getElementById("map"), o),
        s = new google.maps.LatLng(l, t);
    new google.maps.Marker({
        position: s,
        map: i,
        icon: { url: "img/marker.png", scaledSize: new google.maps.Size(80, 80) },
    });
    i.mapTypes.set("map_style", a), i.setMapTypeId("map_style");
    var r = new google.maps.TransitLayer();
    r.setMap(i);
}
!(function (e) {
    "use strict";
    e(window).on("load", function () {
        e(".loader-inner").fadeOut(), e(".loader").delay(200).fadeOut("slow");
    }),
        e("a.scroll").smoothScroll({ speed: 800, offset: -50 }),
        e(".slider").flexslider({
            animation: "fade",
            slideshow: !0,
            directionNav: !0,
            controlNav: !1,
            pauseOnAction: !1,
            animationSpeed: 500,
        }),
        e(".review-slider").flexslider({
            animation: "fade",
            slideshow: !0,
            directionNav: !1,
            controlNav: !0,
            pauseOnAction: !1,
            animationSpeed: 1e3,
        });
    var l = e(".mobile-but"),
        t = e(".main-nav ul");
    t.height();
    e(l).on("click", function () {
        return (
            e(".toggle-mobile-but").toggleClass("active"),
            t.slideToggle(),
            e(".main-nav li a").addClass("mobile"),
            !1
        );
    }),
        e(window).resize(function () {
            var l = e(window).width();
            l > 320 &&
                t.is(":hidden") &&
                (t.removeAttr("style"), e(".main-nav li a").removeClass("mobile"));
        }),
        e(".main-nav li a").on("click", function () {
            e(this).hasClass("mobile") &&
                (t.slideToggle(), e(".toggle-mobile-but").toggleClass("active"));
        }),
        e(".background-img").each(function () {
            var l = e(this).children("img").attr("src");
            e(this)
                .css("background-image", 'url("' + l + '")')
                .css("background-position", "initial");
        }),
        e(".countdown").countdown("2017/11/20", function (l) {
            e(this).html(l.strftime("%D days %H:%M:%S"));
        }),
        e(".block-tabs li").on("click", function () {
            if (!e(this).hasClass("active")) {
                var l = e(this).index(),
                    t = l + 1;
                e(".block-tabs li.active").removeClass("active"),
                    e(this).addClass("active"),
                    e(".block-tab li.active").removeClass("active"),
                    e(".block-tab li:nth-child(" + t + ")").addClass("active");
            }
        }),
        e(".block-gallery li").on("mouseenter", function () {
            e(this)
                .closest(".gallery")
                .find(".block-gallery li")
                .removeClass("active"),
                e(this).addClass("active");
        }),
        e(".block-ticket").on("mouseenter", function () {
            e(this).closest(".tickets").find(".block-ticket").removeClass("active"),
                e(this).addClass("active");
        }),
        e(".venobox").venobox({ titleattr: "data-title", numeratio: !0 });
    var a = new Instafeed({
        get: "user",
        userId: "305801553",
        resolution: "standard_resolution",
        accessToken: "305801553.1677ed0.3d872300c10c4ff687868875ee8abc5d",
        limit: 6,
        template:
            '<li class="col-sm-4"><a href="{{link}}"><img src="{{image}}"/></a></li>',
    });
    a.run();
    var o = e(".registry-form");
    o.validate({
        validClass: "valid",
        errorClass: "error",
        errorPlacement: function (e, l) {
            return !0;
        },
        onfocusout: function (l, t) {
            e(l).valid();
        },
        rules: { email: { required: !0, email: !0 } },
        rules: { name: { required: !0, minlength: 3 } },
    });
})(jQuery);
