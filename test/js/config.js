define(function() {
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
                }, 960, function() {
                    $(this).animate({
                        "left": "40%"
                    }, 1280, function() {
                        $(this).animate({
                            "left": "50%"
                        }, 960)
                    })
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
                    duration: 960,
                    complete: function() {
                        $(this).animate({
                            r: -45
                        }, {
                            step: function(now, fx) {
                                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                                $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                                $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
                                $(this).css('-o-transform', 'rotate(' + now + 'deg)');
                                $(this).css('transform', 'rotate(' + now + 'deg)');
                            },
                            duration: 1280,
                            complete: function() {
                                $(this).animate({
                                    r: 0
                                }, {
                                    step: function(now, fx) {
                                        $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('-o-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('transform', 'rotate(' + now + 'deg)');
                                    },
                                    duration: 960

                                });
                            }
                        });
                    }
                });

                $p1.animate({
                    "left": "28%",
                    "top": "16%",
                    "opacity": "0.8"
                }, 1200, function() {
                    $(this).animate({
                        "left": "20%",
                        "opacity": "0.5"
                    }, 1000, function() {
                        $(this).animate({
                            "left": "23%",
                            "opacity": "1"
                        }, 1000);
                    });
                });

                $p2.animate({
                    "right": "29%",
                    "top": "25%",
                    "opacity": "0.8"
                }, 1200, function() {
                    $(this).animate({
                        "right": "20%",
                        "opacity": "0.5"
                    }, 1000, function() {
                        $(this).animate({
                            "right": "24%",
                            "opacity": "1"
                        }, 1000, function() {
                            $arrow.slideDown(500);
                        });
                    });
                });

                $ma.animate({
                    "left": "0%",
                    "opacity": "1"
                }, {
                    duration: 3000,
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
                var $obj = $("#" + this.name),
                    $circle = $obj.find(".circle"),
                    $p1 = $obj.find(".p1"),
                    $p2 = $obj.find(".p2"),
                    $p3 = $obj.find(".p3"),
                    $rp = $obj.find(".rp"),
                    $arrow = $obj.find(".arrow");

                $arrow.hide();
                $rp.hide();
                $p1.hide();
                $p2.hide();
                $p3.hide();
                $circle.hide();
            },
            afterLoad: function() {
                var $obj = $("#" + this.name),
                    $circle = $obj.find(".circle"),
                    $p1 = $obj.find(".p1"),
                    $p2 = $obj.find(".p2"),
                    $p3 = $obj.find(".p3"),
                    $rp = $obj.find(".rp"),
                    $arrow = $obj.find(".arrow");

                $rp.slideDown(1500);

                $p1.fadeIn(500, function() {
                    $p3.fadeIn(2000);
                    $p2.fadeIn(1000, function() {
                        $circle.fadeIn(2000);
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
                            duration: 960,
                            complete: function() {
                                $(this).animate({
                                    r: -45
                                }, {
                                    step: function(now, fx) {
                                        $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('-o-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('transform', 'rotate(' + now + 'deg)');
                                    },
                                    duration: 1280,
                                    complete: function() {
                                        $arrow.slideDown(500);
                                        $(this).animate({
                                            r: 0
                                        }, {
                                            step: function(now, fx) {
                                                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                                                $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                                                $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
                                                $(this).css('-o-transform', 'rotate(' + now + 'deg)');
                                                $(this).css('transform', 'rotate(' + now + 'deg)');
                                            },
                                            duration: 960
                                        });
                                    }
                                });
                            }
                        });
                    });

                });

            }
        }, {
            name: "fame",
            url: "fame.html",
            beforeLoad: function() {
                var $obj = $("#" + this.name),
                    $circle = $obj.find(".circle"),
                    $p1 = $obj.find(".p1"),
                    $p2 = $obj.find(".p2"),
                    $p3 = $obj.find(".p3"),
                    $rp = $obj.find(".rp"),
                    $arrow = $obj.find(".arrow");

                $arrow.hide();
                $rp.hide();
                $p1.hide();
                $p2.hide();
                $p3.hide();
                $circle.hide();
            },
            afterLoad: function() {
                var $obj = $("#" + this.name),
                    $circle = $obj.find(".circle"),
                    $p1 = $obj.find(".p1"),
                    $p2 = $obj.find(".p2"),
                    $p3 = $obj.find(".p3"),
                    $rp = $obj.find(".rp"),
                    $arrow = $obj.find(".arrow");

                $rp.slideDown(1500);
                
                $p1.fadeIn(500, function() {
                    $p3.fadeIn(2000);
                    $p2.fadeIn(1000, function() {
                        $circle.fadeIn(2000);
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
                            duration: 960,
                            complete: function() {
                                $arrow.slideDown(500);

                                $(this).animate({
                                    r: -45
                                }, {
                                    step: function(now, fx) {
                                        $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('-o-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('transform', 'rotate(' + now + 'deg)');
                                    },
                                    duration: 1280,
                                    complete: function() {
                                        $(this).animate({
                                            r: 0
                                        }, {
                                            step: function(now, fx) {
                                                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                                                $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                                                $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
                                                $(this).css('-o-transform', 'rotate(' + now + 'deg)');
                                                $(this).css('transform', 'rotate(' + now + 'deg)');
                                            },
                                            duration: 960
                                        });
                                    }
                                });
                            }
                        });
                    });

                });
            }
        }, {
            name: "family",
            url: "family.html",
            beforeLoad: function() {
                var $obj = $("#" + this.name),
                    $circle = $obj.find(".circle"),
                    $p1 = $obj.find(".p1"),
                    $p2 = $obj.find(".p2"),
                    $p3 = $obj.find(".p3"),
                    $rp = $obj.find(".rp"),
                    $arrow = $obj.find(".arrow");

                $arrow.hide();
                $rp.hide();
                $p1.hide();
                $p2.hide();
                $p3.hide();
                $circle.hide();
            },
            afterLoad: function() {
                var $obj = $("#" + this.name),
                    $circle = $obj.find(".circle"),
                    $p1 = $obj.find(".p1"),
                    $p2 = $obj.find(".p2"),
                    $p3 = $obj.find(".p3"),
                    $rp = $obj.find(".rp"),
                    $arrow = $obj.find(".arrow");

                $rp.slideDown(1500);
                
                $p1.fadeIn(500, function() {
                    $p3.fadeIn(2000);
                    $p2.fadeIn(1000, function() {
                        $circle.fadeIn(2000);
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
                            duration: 960,
                            complete: function() {
                                $(this).animate({
                                    r: -45
                                }, {
                                    step: function(now, fx) {
                                        $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('-o-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('transform', 'rotate(' + now + 'deg)');
                                    },
                                    duration: 1280,
                                    complete: function() {
                                        $arrow.slideDown(500);
                                        $(this).animate({
                                            r: 0
                                        }, {
                                            step: function(now, fx) {
                                                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                                                $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                                                $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
                                                $(this).css('-o-transform', 'rotate(' + now + 'deg)');
                                                $(this).css('transform', 'rotate(' + now + 'deg)');
                                            },
                                            duration: 960

                                        });
                                    }
                                });
                            }
                        });
                    });

                });
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

                $p1.fadeIn(1500, function() {
                    $p2.fadeIn(1500);
                });

                $ma.animate({
                    "left": "0%",
                    "opacity": "1"
                }, {
                    duration: 3000,
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
                        $arrow.slideDown(500);
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

                $logo.fadeIn(500,function(){
                    $title.fadeIn(500,function(){
                        $news.slideDown(500);
                    });
                });
            }
        }]
    };
    return config;
});