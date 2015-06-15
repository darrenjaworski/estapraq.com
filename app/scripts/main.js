$(document).ready( function()	{
    'use strict';
    $('.accordion-button').click( function(){
        $(this).toggleClass('open').next().stop().slideToggle();
    });
    $('.toggle').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('header').toggleClass('active');
    });

});
