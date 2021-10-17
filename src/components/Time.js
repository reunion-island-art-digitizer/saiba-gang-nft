var Express = require('express')
    , dnode = require('dnode')
    , nQuery = require('nodeQuery')
    , express = Express.createServer();

var app = function ($) {
    $(".timeline-wrapper .timeline-content-item > span").on(
        "mouseenter mouseleave",
        function (e) {
            $(".timeline-wrapper .timeline-content-item.active").removeClass("active");
            $(this).parent().addClass("active");
        }
    );;};

nQuery
    .use(app);

express
    .use(nQuery.middleware)
    .use(Express.static(__dirname + '/public'))
    .listen(3000);

dnode(nQuery.middleware).listen(express);