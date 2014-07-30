requirejs.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'jquery-1.11.1.min',
        'css': 'css.min',
        'config': 'config'
    }
});

requirejs(['jquery', 'config'], function($, Config) {
    $(function() {

    });
});