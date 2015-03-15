$(document).ready( function()	{
    "use strict";
    $('.accordion-button').click( function(){
        $(this).toggleClass('open').next().stop().slideToggle();
    });
    $('.toggle').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('header').toggleClass('active');
    });
    $(window).scroll(function(){
        var position = $(this).scrollTop();
        var documentheight = $(document).height();

        if (position < (documentheight / 2)) {
            $('footer').css('z-index', -2);
        } else {
            $('footer').css('z-index', -1);
        }
    });

    // (function(){
    //
    //     var w = parseInt($('svg').width()),
    //     h = parseInt($('svg').height()),
    //     start = Date.now();
    //
    //     var rings = [ ];
    //     var lines = [ ];
    //
    //     var n = 25;
    //     var m = 60;
    //
    //     for (i in d3.range(n)) {
    //         if(i < 3) {
    //             var speed = (i-3) * 1e-2;
    //         } else {
    //             //var speed = (i-2) * 1e-2;
    //             var speed = .001 * i * 4;
    //
    //             var data = d3.range(m)
    //             lines.push({
    //                 width: 4,
    //                 height: 14,
    //                 speed: speed,
    //                 index: i,
    //                 data: data
    //             })
    //         }
    //
    //     };
    //
    //     var xscale = d3.scale.linear()
    //         .domain([0, m])
    //         .range([0, w+20]);
    //
    //     var omega = -.22
    //     function line_maker( data, speed )
    //     {
    //         var freq = Math.PI*.4 + 3 * omega * data.index // * 3000
    //         var svgline = d3.svg.line()
    //         .x(function(d,i)
    //         {
    //             return xscale(d);
    //         })
    //         .y(function(d,i)
    //         {
    //             var theta = freq * d/m * Math.PI * 4
    //             var y = data.height * (Math.cos(theta + (n-data.index) * .1 * speed * .18 ));
    //             return y
    //         })
    //         .interpolate("basis")
    //         return svgline(data.data);
    //     }
    //
    //     var spacing = 26;
    //     function lineEnter(d, i) {
    //
    //         d3.select(this).selectAll("path.path")
    //         .data([d])
    //         .enter()
    //         .append("svg:path")
    //         .attr("class", "path")
    //         .attr("d", function(d,i) {
    //             return line_maker( d, 0 )
    //         })
    //         .attr("stroke-width", function(e,i) { return e.width;});
    //
    //         update_spacing()
    //     }
    //
    //     var svg = d3.select("svg");
    //
    //     var line = svg.selectAll("g.line")
    //     .data(lines)
    //     .enter().append("svg:g")
    //     .attr("class", "line")
    //     .each(lineEnter);
    //
    //     var sm = .1
    //     function update_spacing()
    //     {
    //         var th = spacing * n;
    //         var hscale = d3.scale.linear()
    //         .domain([0, n])
    //         .range([0, h])
    //
    //         d3.selectAll("g.line path")
    //         .attr("transform", function(d, i) {
    //             //return "translate(" + [0, th - spacing * d.index] + ")";
    //             return "translate(" + [0, h/2 + th / 2 - spacing * d.index] + ")";
    //         })
    //     }
    //     // jwerty.key('↑', function () {
    //     //     spacing += 1;
    //     //     update_spacing();
    //     // });
    //     // jwerty.key('↓', function () {
    //     //     spacing -= 1;
    //     //     update_spacing();
    //     // });
    //     // //jwerty.key('↑', function () {
    //     // jwerty.key('←', function () {
    //     //     sm -= .01;
    //     //     console.log("speed multiplier", sm);
    //     // });
    //     // //jwerty.key('↓', function () {
    //     // jwerty.key('→', function () {
    //     //     sm += .01;
    //     //     console.log("speed multiplier", sm);
    //     // });
    //
    //
    //     var color = d3.scale.linear()
    //     .domain([-1, 1])
    //     .interpolate(d3.interpolateRgb)
    //     .range(['#fff', '#000'])
    //
    //     var opacity = d3.scale.linear()
    //     .domain([0, n])
    //     .range([1, .4])
    //
    //     d3.timer(function() {
    //         var elapsed = Date.now() - start;
    //
    //         rotate = function(d,i) {
    //             var speed = sm * d.speed * elapsed * .1
    //             return "rotate(" + speed + ")";
    //         };
    //
    //         line = d3.selectAll("g.line path")
    //         .attr("d", function(d,i) {
    //             //var speed = a * d.speed * elapsed + .01 * d.index
    //             var speed = sm * .08 * elapsed + d.index * 4
    //             return line_maker( d, speed )
    //         })
    //         .attr("stroke-opacity", function(d,i) { return opacity(d.index);})
    //
    //
    //     });
    // })();

});
