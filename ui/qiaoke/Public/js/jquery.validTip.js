!function(t){var e="SimpleValidErrorTips",i="lt-plugins-"+e.toLowerCase();t.fn[e]=function(e){return this.each(function(){var r,o;t("."+i).remove(),e?(r=Math.random().toString().replace(".",""),o=t(this).is(":visible")?t(this).position():t(this).closest(":visible").position(),t('<div id="'+r+'" class="'+i+'"><span class="error-content">'+e+"</span><em></em><i></i></div>").insertAfter(this).css({left:o.left,top:function(){return o.top-t(this).outerHeight()+"px"}}),t(this).attr("data-simplevaliderrortips-id",r)):(r=t(this).attr("data-simplevaliderrortips-id")||"",r&&t(this).removeAttr("data-simplevaliderrortips-id"))})},function(t){var e=""+t+"{position:absolute;font-size:12px;background:#f5c3bf;border:1px solid #edbcb9;padding:0px 10px;color:#e75c00;line-height:20px;z-index:997;}"+t+" .error-content{white-space:nowrap;}"+t+"em,"+t+"i{position:absolute;bottom:-14px;left:20px;overflow:hidden;width:0;height:0;z-index:999;border-width:8px;border-style:solid;border-color:transparent transparent transparent transparent;_border-color:tomato tomato tomato tomato;border-top-color:#f5c3bf;_filter:chroma(color=tomato);}"+t+"em{bottom:-15px;z-index:998;border-top-color:#edbcb9;}";style=document.createElement("style"),style.setAttribute("type","text/css"),style.styleSheet?style.styleSheet.cssText=e:style.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(style)}("."+i+" ")}(jQuery),function(t){var e="SimpleValidTips";t.fn[e]=function(){return this.bind("change blur",function(){var e=t(this).closest("form"),i=t(this).attr("data-ui"),r=e.valid("validate",t(this))[0]||{valid:!0},o=t(this);if("LocalDataUIC"===i?o=t(this)[i]("fetch").ui.helper:"SelectUI"===i&&(o=t(this).closest(".selectui")),o){if(o.SimpleValidErrorTips(""),t(this).is(":input")&&""===t(this).val())return!0;t(this).trigger("highlight",!r.valid)}}).bind("focus",function(){var e,i,r,o,s,a;if(!t(this).attr("data-valid"))return!0;if(e=t(this).closest("form"),i=t(this).attr("data-ui"),r=e.valid("validate",t(this))[0]||{valid:!0},o=t(this),s=r.valid?"":r.customErrorMsg,"LocalDataUIC"===i?o=t(this)[i]("fetch").ui.helper:"SelectUI"===i&&(o=t(this).closest(".selectui")),o){if("Skip"!==i&&!o.hasClass("text-error"))return!0;o.SimpleValidErrorTips(s),r.valid||(a=o.offset().top,a<(document.documentElement.scrollTop||document.body.scrollTop)&&window.scrollTo(0,a-80))}}).bind("highlight",function(e,i){var r=(t(this).closest("form"),t(this).attr("data-ui")),o=t(this),s=i?"addClass":"removeClass";"LocalDataUIC"===r?o=t(this)[r]("fetch").ui.helper:"SelectUI"===r?o=t(this).closest(".selectui"):"Skip"===r&&(o=null),o&&(o[s]("text-error"),o.triggerHandler("click"))}),this.filter("[validate-group]").find(":input").bind("change",function(){t(this).closest("[validate-group]").triggerHandler("change")}),this}}(jQuery);