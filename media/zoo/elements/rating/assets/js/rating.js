/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

!function(t){var e=function(){};t.extend(e.prototype,{name:"ElementRating",options:{url:null},initialize:function(e,i){this.options=t.extend({},this.options,i);var n=this;var a=e.find("div.stars");a.each(function(i){t(this).bind("click",function(){var o=a.length-i;t.ajax({url:n.options.url,data:{method:"vote","args[0]":o},type:"post",datatype:"json",success:function(i){var n=t.parseJSON(i);var a=n.value;if(a>0)e.find("div.previous-rating").css("width",a+"%");e.find("div.vote-message").text(n.message)}})}).bind("mouseenter",function(){t(this).addClass("hover")}).bind("mouseleave",function(){t(this).removeClass("hover")})})}});t.fn[e.prototype.name]=function(){var i=arguments;var n=i[0]?i[0]:null;return this.each(function(){var a=t(this);if(e.prototype[n]&&a.data(e.prototype.name)&&n!="initialize"){a.data(e.prototype.name)[n].apply(a.data(e.prototype.name),Array.prototype.slice.call(i,1))}else if(!n||t.isPlainObject(n)){var o=new e;if(e.prototype["initialize"]){o.initialize.apply(o,t.merge([a],i))}a.data(e.prototype.name,o)}else{t.error("Method "+n+" does not exist on jQuery."+e.name)}})}}(jQuery);!function(t){var e=function(){};t.extend(e.prototype,{name:"EditElementRating",options:{url:null},initialize:function(e,i){this.options=t.extend({},this.options,i);var n=this;e.find('input[name="reset-rating"]').bind("click",function(){t.ajax({url:n.options.url+"&task=callelement&method=reset",success:function(t){e.replaceWith(t)}})})}});t.fn[e.prototype.name]=function(){var i=arguments;var n=i[0]?i[0]:null;return this.each(function(){var a=t(this);if(e.prototype[n]&&a.data(e.prototype.name)&&n!="initialize"){a.data(e.prototype.name)[n].apply(a.data(e.prototype.name),Array.prototype.slice.call(i,1))}else if(!n||t.isPlainObject(n)){var o=new e;if(e.prototype["initialize"]){o.initialize.apply(o,t.merge([a],i))}a.data(e.prototype.name,o)}else{t.error("Method "+n+" does not exist on jQuery."+e.name)}})}}(jQuery);