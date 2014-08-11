define(function() {
    var config = {
        page: [{
            name: "act1",
            url: "act1.html",
            beforeLoad: function() {
                $("#"+this.name).find(".alex").hide();
            },
            afterLoad: function() {
            }
        },{
            name: "act2",
            url: "act2.html",
            beforeLoad: function() {
                $("#"+this.name).find(".alex").hide();
            },
            afterLoad: function() {
               
            }
        },{
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