define(function() {
    var config = {
        page: [{
            name: "home",
            url: "home.html",
            beforeLoad: function() {
                var obj = $("#"+this.name),
                    b_title = obj.find(".b_title"),
                    l_label = obj.find(".l_label"),
                    r_label = obj.find(".r_label");

                l_label.css({
                    marginLeft:"-150%"
                });

                r_label.css({
                    marginLeft:"50%"
                });

                b_title.hide();
            },
            afterLoad: function() {
                var obj = $("#"+this.name),
                    b_title = obj.find(".b_title"),
                    l_label = obj.find(".l_label"),
                    r_label = obj.find(".r_label");

                l_label.animate({"marginLeft":"-45%"},800,function(){
                    $(this).animate({"marginLeft":"-50%"},400);
                });

                r_label.animate({"marginLeft":"-55%"},800,function(){
                    $(this).animate({"marginLeft":"-50%"},400);
                });

                b_title.fadeIn(1500);
            }
        },{
            name: "join",
            url: "join.html",
            beforeLoad: function() {

            },
            afterLoad: function() {
            }
        },{
            name: "act1",
            url: "act1.html",
            beforeLoad: function() {
                $("#"+this.name).find(".alex").hide();
            },
            afterLoad: function() {
            }
        },{
        //     name: "act2",
        //     url: "act2.html",
        //     beforeLoad: function() {
        //         $("#"+this.name).find(".alex").hide();
        //     },
        //     afterLoad: function() {
               
        //     }
        // },{
            name: "ty",
            url: "ty.html",
            beforeLoad: function() {
               
            },
            afterLoad: function() {
               
            }
        }]
    };
    return config;
});