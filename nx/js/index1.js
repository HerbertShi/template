requirejs.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'jquery-1.11.1.min',
        'css': 'css.min',
        'swipe': 'jquery.touchSwipe.min',
        'jquery-ui': 'jquery-ui/jquery-ui-1.10.4.custom.min',
        'config': 'config1'
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
    $(function() {
        $(Config.page).map(function(i) {
            $("<div id='" + this.name + "' data-role='page' data-index='" + i + "'></div>").css({
                "position": "absolute",
                "width": "100%",
                "height": "100%",
                "left": "0%",
                "top": (i == 0 ? 0 :100) + "%",
                "zIndex":999
            }).data(this).swipe({
                swipe: function(event, direction, distance, duration, fingerCount) {
                    loadPage(direction,"handle");
                }
            }).appendTo($("body"));
        });

        loadPage("first");
    });



    $(document).on("click", ".nextPage", function() {
        loadPage("up");

    });

    $(document).on("click", "input[type=text],textarea", function() {
        loadPage("up","handle");
    });

    $(document).on("touchstart", function() {
        if($("#audio")[0].currentTime<=0){
            $("#audio")[0].play();
        }
    });
});

var currentIndex = 0;

function loadPage(direction,isHandle) {
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
        if (newObj.size() > 0 && newObj.html() && isHandle != "handle") {
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
        }else if (newObj.size() > 0 && newObj.html() && isHandle == "show") {
            goAnimate = function() {
                oldObj.css({"top": "-100%"});
            }

            comeAnimate = function() {
                newObj.css({"top": "0%"});
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


var messageTimeout;
function showMessage(message) {
    var $obj = $("div[data-role='page'][data-index='" + currentIndex + "']");
    clearTimeout(messageTimeout);
    $obj.find('.alex span').html(message);
    $obj.find('.alex').stop(true, false).fadeIn(500, function() {
        messageTimeout = setTimeout(function() {
            $obj.find('.alex').fadeOut(1000, function() {
                $(this).find("span").html("");
            });
        }, 1000);
    });
}