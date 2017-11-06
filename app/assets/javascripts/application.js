// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets
function jumpScroll1() {
     window.scroll(0,700); // horizontal and vertical scroll targets
}
function jumpScroll2() {
     window.scroll(0,1850); // horizontal and vertical scroll targets
}
function jumpScroll3() {
     window.scroll(0,2500); // horizontal and vertical scroll targets
}
$('a[href=#top]').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
});
