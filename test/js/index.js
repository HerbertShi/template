requirejs.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'jquery-1.11.1.min',
        'css': 'css.min',
        'swipe': 'jquery.touchSwipe.min',
        'jquery-ui': 'jquery-ui/jquery-ui-1.10.4.custom.min',
        'config': 'config'
    },
    shim: {
        'swipe': {
            deps: ['jquery']
        },
        'jquery-ui': {
            deps: ['jquery']
        }
    }
});

requirejs(['jquery', 'config', 'swipe', 'jquery-ui'], function($, Config) {
    var messageTimeout;

    function showMessage(message) {
        clearTimeout(messageTimeout);
        $('.alex span').html(message);
        $('.alex').stop(true, false).fadeIn(500, function() {
            messageTimeout = setTimeout(function() {
                $('.alex').fadeOut(1000, function() {
                    $(this).find("span").html("");
                });
            }, 2000);
        });
    }

    window.reg_submit = function() {
        var name = $("#name").val();
        var mobile_phone = $("#mobile").val();

        if ($.trim(name) == '') {
            showMessage('姓名不能为空!');
            return;
        }

        var reg = /^0?1[358]\d{9}$/;
        if (!reg.test($.trim(mobile_phone))) {
            showMessage('手机格式:15866668888!');
            return;
        }

        $.ajax({
            url: "mobile.php",
            type: "post",
            data: "act=register&name=" + name + "&mobile=" + mobile_phone,
            success: function(data) {
                showMessage(data);
            }
        });
    }



    var currentIndex = 0;
    $(function() {
        $(Config.page).map(function(i) {
            $("<div id='" + this.name + "' data-role='page' data-index='" + i + "'></div>").css({
                "position": "absolute",
                "width": "100%",
                "height": "100%",
                "left": "0%",
                "top": (100 * i) + "%"
            }).data(this).swipe({
                swipe: function(event, direction, distance, duration, fingerCount) {
                    loadPage(direction);
                }
            }).appendTo($("body"));
        });

        loadPage("first");
    });

    function loadPage(direction) {
        if (direction == "up") {
            currentIndex++;
        } else if (direction == "down") {
            currentIndex--;
        }

        var newObj = $("div[data-role='page'][data-index='" + currentIndex + "']"),
            data = newObj.data(),
            oldObj, goAnimate, comeAnimate;

        if (direction == "up") {
            oldObj = $("div[data-role='page'][data-index='" + (currentIndex - 1) + "']");
            if (newObj.size() > 0 && newObj.html()) {
                goAnimate = function() {
                    oldObj.animate({
                        "top": "-105%"
                    }, 1000, function() {
                        $(this).animate({
                            "top": "-100%"
                        }, 500);
                    });
                }

                comeAnimate = function() {
                    newObj.animate({
                        "top": "-5%"
                    }, 1000, function() {
                        data.afterLoad();
                        $(this).animate({
                            "top": "0%"
                        }, 500);
                    });
                }
            } else {
                oldObj.animate({
                    "top": "-5%"
                }, 500, function() {
                    $(this).animate({
                        "top": "0%"
                    }, 400);
                });
                currentIndex--
            }

        } else if (direction == "down") {
            oldObj = $("div[data-role='page'][data-index='" + (currentIndex + 1) + "']");

            if (newObj.size() > 0 && newObj.html()) {
                goAnimate = function() {
                    oldObj.animate({
                        "top": "105%"
                    }, 1000, function() {
                        $(this).animate({
                            "top": "100%"
                        }, 500);
                    });
                }

                comeAnimate = function() {
                    newObj.animate({
                        "top": "5%"
                    }, 1000, function() {
                        data.afterLoad();
                        $(this).animate({
                            "top": "0%"
                        }, 500);
                    });
                }
            } else {
                oldObj.animate({
                    "top": "5%"
                }, 500, function() {
                    $(this).animate({
                        "top": "0%"
                    }, 400);
                });
                currentIndex++;
            }
        } else if (direction == "first") {
            newObj.hide();
            newObj.load(data.url, function() {
                data.beforeLoad();
                newObj.show();
                data.afterLoad();
            });
        }

        if (goAnimate && comeAnimate) {
            data.beforeLoad();
            comeAnimate();
            goAnimate();
        }


        var nextObj = newObj.next("div[data-role='page']");
        if (nextObj.html() == "") {
            nextObj.load(nextObj.data("url"));
        }
    }
});