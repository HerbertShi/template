define(function() {
    var utilBeforeLoad = function(e) {
        var $obj = $("#" + e.name),
            $circle = $obj.find(".circle"),
            $p1 = $obj.find(".p1"),
            $p2 = $obj.find(".p2"),
            $p3 = $obj.find(".p3"),
            $rp = $obj.find(".rp"),
            $arrow = $obj.find(".arrow"),
            $ask = $obj.find(".ask");

        $arrow.hide();
        $rp.hide();
        $p1.hide();
        $p2.hide();
        $p3.hide();
        $circle.hide();
        $ask.hide();
    }

    var utilAfterLoad = function(e) {
        var $obj = $("#" + e.name),
            $circle = $obj.find(".circle"),
            $p1 = $obj.find(".p1"),
            $p2 = $obj.find(".p2"),
            $p3 = $obj.find(".p3"),
            $rp = $obj.find(".rp"),
            $arrow = $obj.find(".arrow"),
            $ask = $obj.find(".ask");

        $p1.fadeIn(400, function() {
            $rp.slideDown(800);
            $p3.fadeIn(400);
            $p2.fadeIn(500);
            $circle.fadeIn(500);

            $circle.children("img").animate({
                r: 135
            }, {
                step: function(now, fx) {
                    $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-o-transform', 'rotate(' + now + 'deg)');
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                },
                duration: 500,
                complete: function() {
                    $arrow.slideDown(400);
                    $ask.fadeIn(500);
                    $(this).css({
                        "-webkit-animation": 'myspinner 2.5s infinite linear',
                        "-moz-animation": 'myspinner 2.5s infinite linear',
                        "-o-animation": 'myspinner 2.5s infinite linear',
                        "animation": 'myspinner 2.5s infinite linear'
                    });
                }
            });

        });

    }

    var config = {
        page: [{
            name: "home",
            url: "home.html",
            beforeLoad: function() {
                var $obj = $("#" + this.name),
                    $circle = $obj.find(".circle"),
                    $p1 = $obj.find(".p1"),
                    $p2 = $obj.find(".p2"),
                    $arrow = $obj.find(".arrow"),
                    $ma = $obj.find(".ma");

                $circle.css({
                    "left": "-50%"
                });

                $p1.css({
                    "left": "0%",
                    "top": "0%",
                    "opacity": "0"
                });

                $p2.css({
                    "right": "0%",
                    "top": "70%",
                    "opacity": "0"
                });

                $arrow.hide();
                $ma.css({
                    "left": "-100%",
                    "opacity": ".5"
                });
            },
            afterLoad: function() {
                var $obj = $("#" + this.name),
                    $circle = $obj.find(".circle"),
                    $p1 = $obj.find(".p1"),
                    $p2 = $obj.find(".p2"),
                    $arrow = $obj.find(".arrow"),
                    $ma = $obj.find(".ma");

                $circle.animate({
                    "left": "60%"
                }, 500, function() {
                    $(this).animate({
                        "left": "50%"
                    }, 800);
                });

                $circle.children("img").animate({
                    r: 135
                }, {
                    step: function(now, fx) {
                        $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                        $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                        $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
                        $(this).css('-o-transform', 'rotate(' + now + 'deg)');
                        $(this).css('transform', 'rotate(' + now + 'deg)');
                    },
                    duration: 500,
                    complete: function() {
                        $(this).css({
                            "-webkit-animation": 'myspinner 2.5s infinite linear',
                            "-moz-animation": 'myspinner 2.5s infinite linear',
                            "-o-animation": 'myspinner 2.5s infinite linear',
                            "animation": 'myspinner 2.5s infinite linear'
                        });
                    }
                });

                $p1.animate({
                    "left": "28%",
                    "top": "16%",
                    "opacity": "0.8"
                }, 800, function() {
                    $(this).animate({
                        "left": "20%",
                        "opacity": "0.5"
                    }, 500, function() {
                        $(this).animate({
                            "left": "23%",
                            "opacity": "1"
                        }, 400);
                    });
                });

                $p2.animate({
                    "right": "29%",
                    "top": "25%",
                    "opacity": "0.8"
                }, 800, function() {
                    $(this).animate({
                        "right": "20%",
                        "opacity": "0.5"
                    }, 500, function() {
                        $(this).animate({
                            "right": "24%",
                            "opacity": "1"
                        }, 400, function() {
                            $arrow.slideDown(400);
                        });
                    });
                });

                $ma.animate({
                    "left": "0%",
                    "opacity": "1"
                }, {
                    duration: 1500,
                    step: function(now, zb) {
                        if (zb.prop == "opacity") {
                            var t = parseInt($(this).css("bottom").split("px")[0]);
                            if ((now > 0.5 && now < 0.625) || (now > 0.75 && now < 0.875)) {
                                $(this).css("bottom", t - 1);
                            } else if ((now > 0.625 && now < 0.75) || (now > 0.875 && now < 1)) {
                                $(this).css("bottom", t + 1);
                            }
                        }
                    }
                });
            }
        }, {
            name: "area",
            url: "area.html",
            beforeLoad: function() {
                utilBeforeLoad(this);
            },
            afterLoad: function() {
                utilAfterLoad(this);
            }
        }, {
            name: "fame",
            url: "fame.html",
            beforeLoad: function() {
                utilBeforeLoad(this);
            },
            afterLoad: function() {
                utilAfterLoad(this);
            }
        }, {
            name: "family",
            url: "family.html",
            beforeLoad: function() {
                utilBeforeLoad(this);
            },
            afterLoad: function() {
                utilAfterLoad(this);
            }
        }, {
            name: "ma",
            url: "ma.html",
            beforeLoad: function() {
                var $obj = $("#" + this.name),

                    $p1 = $obj.find(".p1"),
                    $p2 = $obj.find(".p2"),
                    $arrow = $obj.find(".arrow"),
                    $ma = $obj.find(".ma");

                $p1.hide();
                $p2.hide();
                $arrow.hide();

                $ma.css({
                    "left": "-100%",
                    "opacity": ".5"
                });


            },
            afterLoad: function() {
                var $obj = $("#" + this.name),

                    $p1 = $obj.find(".p1"),
                    $p2 = $obj.find(".p2"),
                    $arrow = $obj.find(".arrow"),
                    $ma = $obj.find(".ma");

                $p1.fadeIn(800, function() {
                    $p2.fadeIn(800);
                });

                $ma.animate({
                    "left": "0%",
                    "opacity": "1"
                }, {
                    duration: 1500,
                    step: function(now, zb) {
                        if (zb.prop == "opacity") {
                            var t = parseInt($(this).css("bottom").split("px")[0]);
                            if ((now > 0.5 && now < 0.625) || (now > 0.75 && now < 0.875)) {
                                $(this).css("bottom", t - 1);
                            } else if ((now > 0.625 && now < 0.75) || (now > 0.875 && now < 1)) {
                                $(this).css("bottom", t + 1);
                            }
                        }
                    },
                    complete: function() {
                        $arrow.slideDown(400);
                    }
                });


            }
        }, {
            name: "act",
            url: "act.html",
            beforeLoad: function() {
                var $obj = $("#" + this.name),
                    $logo = $obj.find(".logo"),
                    $title = $obj.find(".title"),
                    $news = $obj.find(".news");

                $logo.hide();
                $title.hide();
                $news.hide();
            },
            afterLoad: function() {
                var $obj = $("#" + this.name),
                    $logo = $obj.find(".logo"),
                    $title = $obj.find(".title"),
                    $news = $obj.find(".news");

                $logo.fadeIn(400, function() {
                    $title.fadeIn(400, function() {
                        $news.slideDown(400);
                    });
                });
            }
        }]
    };
    return config;
});