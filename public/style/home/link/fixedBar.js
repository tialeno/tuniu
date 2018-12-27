!function(e,t,n,o){var i=e(t);e.fn.lazyload=function(r){function f(){var t=0;l.each(function(){var n=e(this);if(!h.skip_invisible||"none"!==n.css("display"))if(e.abovethetop(this,h)||e.leftofbegin(this,h));else if(e.belowthefold(this,h)||e.rightoffold(this,h)){if(++t>h.failure_limit)return!1}else n.trigger("appear"),t=0})}var a,l=this,h={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return r&&(o!==r.failurelimit&&(r.failure_limit=r.failurelimit,delete r.failurelimit),o!==r.effectspeed&&(r.effect_speed=r.effectspeed,delete r.effectspeed),e.extend(h,r)),a=h.container===o||h.container===t?i:e(h.container),0===h.event.indexOf("scroll")&&a.bind(h.event,function(){return f()}),this.each(function(){var t=this,n=e(t);t.loaded=!1,(n.attr("src")===o||n.attr("src")===!1)&&n.is("img")&&n.attr("src",h.placeholder),n.one("appear",function(){if(!this.loaded){if(h.appear){var o=l.length;h.appear.call(t,o,h)}e("<img />").bind("load",function(){var o=n.attr("data-"+h.data_attribute);n.hide(),n.is("img")?n.attr("src",o):n.css("background-image","url('"+o+"')"),n[h.effect](h.effect_speed),t.loaded=!0;var i=e.grep(l,function(e){return!e.loaded});if(l=e(i),h.load){var r=l.length;h.load.call(t,r,h)}}).attr("src",n.attr("data-"+h.data_attribute))}}),0!==h.event.indexOf("scroll")&&n.bind(h.event,function(){t.loaded||n.trigger("appear")})}),i.bind("resize",function(){f()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&i.bind("pageshow",function(t){t.originalEvent&&t.originalEvent.persisted&&l.each(function(){e(this).trigger("appear")})}),e(n).ready(function(){f()}),this},e.belowthefold=function(n,r){var f;return f=r.container===o||r.container===t?(t.innerHeight?t.innerHeight:i.height())+i.scrollTop():e(r.container).offset().top+e(r.container).height(),f<=e(n).offset().top-r.threshold},e.rightoffold=function(n,r){var f;return f=r.container===o||r.container===t?i.width()+i.scrollLeft():e(r.container).offset().left+e(r.container).width(),f<=e(n).offset().left-r.threshold},e.abovethetop=function(n,r){var f;return f=r.container===o||r.container===t?i.scrollTop():e(r.container).offset().top,f>=e(n).offset().top+r.threshold+e(n).height()},e.leftofbegin=function(n,r){var f;return f=r.container===o||r.container===t?i.scrollLeft():e(r.container).offset().left,f>=e(n).offset().left+r.threshold+e(n).width()},e.inviewport=function(t,n){return!(e.rightoffold(t,n)||e.leftofbegin(t,n)||e.belowthefold(t,n)||e.abovethetop(t,n))},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})}(jQuery,window,document);
;(function($){$.fn.setFixed=function(optison){var defaults={initial:0};var isFixed=false;var self=this;this.setting=$.extend(defaults,optison);this.offsetTop=$(this).offset().top;$(window).scroll(function(){var scrollTop=$(window).scrollTop();if(!isFixed&&scrollTop>self.offsetTop){$(self).css({position:'fixed',left:0,top:self.setting.initial});isFixed=true;}else if(isFixed&&scrollTop<=self.offsetTop){$(self).css({position:'static'});isFixed=false;}});};$.fn.positionScroll=function(options){var defaults={flag:0}
var items=$(this).find('a');var opt=$.extend(defaults,options);items.bind('click',function(e){if(!$(this).data('to'))return false;$('html,body').animate({scrollTop:$($(this).data('to')).offset().top-opt.flag},500);e.preventDefault();});}})(jQuery);