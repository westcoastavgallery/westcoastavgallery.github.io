/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

!function(t){var e=function(){};t.extend(e.prototype,{name:"Comment",options:{cookiePrefix:"zoo-comment_",cookieLifetime:15552e3,msgCancel:"Cancel"},initialize:function(e,i){this.options=t.extend({},this.options,i);var n=this;var o=e.find("#respond");o.find("a.facebook-connect").bind("click",function(){n.setLoginCookie("facebook")});o.find("a.facebook-logout").bind("click",function(){n.setLoginCookie("")});o.find("a.twitter-connect").bind("click",function(){n.setLoginCookie("twitter")});o.find("a.twitter-logout").bind("click",function(){n.setLoginCookie("")});o.find("input:text").placeholder();e.find(".comment").each(function(){var e=t(this);e.find(".reply > a").bind("click",function(i){i.preventDefault();o.find(".comment-cancelReply").remove();t("<a>"+n.options.msgCancel+"</a>").addClass("comment-cancelReply").attr("href","#respond").bind("click",function(e){e.preventDefault();o.find(".comment-cancelReply").remove();o.appendTo(t("#comments"));o.find("input[name=parent_id]").val(0)}).appendTo(o.find(".actions"));o.appendTo(e);o.find("input[name=parent_id]").val(t(this).closest(".comment").attr("id").replace(/comment-/i,""))})})},setLoginCookie:function(e){t.cookie(this.options.cookiePrefix+"login",e,{expires:this.options.cookieLifetime/(60*60*24),path:"/"})}});t.fn[e.prototype.name]=function(){var i=arguments;var n=i[0]?i[0]:null;return this.each(function(){var o=t(this);if(e.prototype[n]&&o.data(e.prototype.name)&&n!="initialize"){o.data(e.prototype.name)[n].apply(o.data(e.prototype.name),Array.prototype.slice.call(i,1))}else if(!n||t.isPlainObject(n)){var a=new e;if(e.prototype["initialize"]){a.initialize.apply(a,t.merge([o],i))}o.data(e.prototype.name,a)}else{t.error("Method "+n+" does not exist on jQuery."+e.name)}})}}(jQuery);!function(t){var e=function(){};t.extend(e.prototype,{name:"BrowseComments",options:{url:"index.php?option=com_zoo&controller=comment",id:"edit-comment-editor"},initialize:function(e,i){this.options=t.extend({},this.options,i);var n=this;this.form=e;e.delegate("tr.comment-row .actions-links .edit, tr.comment-row .actions-links .reply","click",function(e){e.preventDefault();var i=t(this).attr("class");n.modifyEvent(t(this).closest("tr.comment-row"),i)});e.delegate("tr.comment-row .actions-links span","click",function(e){e.preventDefault();switch(t(this).attr("class")){case"no-spam":var i="approve";break;case"delete":var i="remove";break;default:var i=t(this).attr("class");break}n.stateEvent(t(this).closest("tr.comment-row"),i)})},modifyEvent:function(e,i){var n=this;t.ajax({url:this.options.url,data:{task:i,format:"raw",cid:e.find('input[name^="cid["]').val()},success:function(o){n.removeEditor();n.insertEditor(e,o);if(i=="edit")e.hide();n.form.unbind("save").unbind("cancel").bind("save",function(o,a){n.removeEditor();if(i=="edit"){e.replaceWith(a)}else{t(a).insertAfter(e)}n.stripe()}).bind("cancel",function(){n.removeEditor()})}})},stateEvent:function(e,i){t('<input type="hidden" name="cid">').val(e.find('input[name^="cid["]').val()).appendTo(this.form);this.form.find("input[name=task]").val(i);this.form.submit()},insertEditor:function(e,i){var n=this,o=e.after(i).next();o.find(".actions .save").bind("click",function(e){e.preventDefault();var i={};t.each(n.form.serializeArray(),function(t,e){i[e.name]=e.value});t.ajax({type:"POST",url:n.options.url,data:t.extend(i,{task:"save",format:"raw"}),success:function(t){n.form.triggerHandler("save",t)}})});o.find(".actions .cancel").bind("click",function(t){t.preventDefault();n.form.triggerHandler("cancel")});o.find(".content textarea").focus()},removeEditor:function(){t("#"+this.options.id,this.form).prev("tr").show();t("#"+this.options.id,this.form).remove()},stripe:function(){t("table.stripe tbody tr").removeClass("odd even").each(function(){t(this).addClass(t(this).is("tr:odd")?"odd":"even")})}});t.fn[e.prototype.name]=function(){var i=arguments;var n=i[0]?i[0]:null;return this.each(function(){var o=t(this);if(e.prototype[n]&&o.data(e.prototype.name)&&n!="initialize"){o.data(e.prototype.name)[n].apply(o.data(e.prototype.name),Array.prototype.slice.call(i,1))}else if(!n||t.isPlainObject(n)){var a=new e;if(e.prototype["initialize"]){a.initialize.apply(a,t.merge([o],i))}o.data(e.prototype.name,a)}else{t.error("Method "+n+" does not exist on jQuery."+e.name)}})}}(jQuery);