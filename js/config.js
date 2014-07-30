define(function() {
	var config = {
		page:[{
			name:"1",
			url:"1.html",
            beforeLoad:function(){
                
            },
            afterLoad:function(){
                $('#logo').animate({
                    r: 135
                }, {
                    step: function(now, fx) {
                        $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                        $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                        $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
                        $(this).css('-o-transform', 'rotate(' + now + 'deg)');
                        $(this).css('transform', 'rotate(' + now + 'deg)');
                    },
                    duration: 1200,
                    complete  :function(){
                        $(this).animate({r:-45},{
                            step: function(now, fx) {
                                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                                $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                                $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
                                $(this).css('-o-transform', 'rotate(' + now + 'deg)');
                                $(this).css('transform', 'rotate(' + now + 'deg)');
                            },
                            duration: 1600,
                            complete  :function(){
                                $(this).animate({r:0},{
                                    step: function(now, fx) {
                                        $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('-o-transform', 'rotate(' + now + 'deg)');
                                        $(this).css('transform', 'rotate(' + now + 'deg)');
                                    },
                                    duration: 1200,
                                    
                                });
                            }
                        });
                    }
                });

            }
		},{
            name:"2",
            url:"2.html",
            beforeLoad:function(){
                $("img");
            },
            afterLoad:function(){

            }
        },{
            name:"3",
            url:"3.html",
            beforeLoad:function(){
                
            },
            afterLoad:function(){
                
            }
        }]
	};
	return config;
});