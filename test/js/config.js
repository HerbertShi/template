define(function() {
    var config = {
        page: [{
            name: "home",
            url: "home.html",
            beforeLoad: function() {
                var $obj = $("#"+this.name),
                    $circle = $obj.find(".circle"),
                    $p1 = $obj.find(".p1"),
                    $p2 = $obj.find(".p2"),
                    $arrow = $obj.find(".arrow"),
                    $ma = $obj.find(".ma");

                $circle.css({
                    "left":"-50%"
                });

                $p1.css({
                    "left":"0%",
                    "top":"0%",
                    "opacity":"0"
                });

                $p2.css({
                    "right":"0%",
                    "top":"70%",
                    "opacity":"0"
                });

                $arrow.hide();
                $ma.css({"left":"-100%","opacity":".5"});
            },
            afterLoad: function() {
                var $obj = $("#"+this.name),
                    $circle = $obj.find(".circle"),
                    $p1 = $obj.find(".p1"),
                    $p2 = $obj.find(".p2"),
                    $arrow = $obj.find(".arrow"),
                    $ma = $obj.find(".ma");

                $circle.animate({
                    "left":"60%"
                },960,function(){
                    $(this).animate({
                        "left":"40%"
                    },1280,function(){
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
                                    duration: 960,

                                });
                            }
                        });
                    }
                });

                $p1.animate({
                    "left": "24%",
                    "top": "24%",
                    "opacity": "0.8"
                }, 1200, function() {
                    $(this).animate({
                        "left": "5%",
                        "opacity": "0.5"
                    }, 1000, function() {
                        $(this).animate({
                            "left": "14%",
                            "opacity": "1"
                        }, 1000);
                    });
                });

                $p2.animate({
                    "right": "25%",
                    "top": "37%",
                    "opacity": "0.8"
                }, 1200, function() {
                    $(this).animate({
                        "right": "6%",
                        "opacity": "0.5"
                    }, 1000, function() {
                        $(this).animate({
                            "right": "15%",
                            "opacity": "1"
                        }, 1000,function(){
                            $arrow.slideDown();
                        });
                    });
                });

                $ma.animate({
                    "left":"0%",
                    "opacity":"1"
                },{
                    duration:3000,
                    step:function(now,zb){
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

                // $ma.animate({
                //     "bottom":"10%"
                // },500,function(){
                //     $(this).animate({"bottom":"0%"},500)
                // });
            }
        }, {
            name: "area",
            url: "area.html",
            beforeLoad: function() {
                
            },
            afterLoad: function() {

            }
        }, {
            name: "fame",
            url: "fame.html",
            beforeLoad: function() {

            },
            afterLoad: function() {

            }
	}, {
            name: "family",
            url: "family.html",
            beforeLoad: function() {

            },
            afterLoad: function() {

            }
	}, {
            name: "ma",
            url: "ma.html",
            beforeLoad: function() {

            },
            afterLoad: function() {

            }
	}, {
            name: "act",
            url: "act.html",
            beforeLoad: function() {

            },
            afterLoad: function() {

            }
        }]
    };
    return config;
});