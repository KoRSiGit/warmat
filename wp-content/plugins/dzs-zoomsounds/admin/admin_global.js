!function e(t,a,n){function r(o,s){if(!a[o]){if(!t[o]){var c="function"==typeof require&&require;if(!s&&c)return c(o,!0);if(i)return i(o,!0);var d=new Error("Cannot find module '"+o+"'");throw d.code="MODULE_NOT_FOUND",d}var l=a[o]={exports:{}};t[o][0].call(l.exports,(function(e){return r(t[o][1][e]||e)}),l,l.exports,e,t,a,n)}return a[o].exports}for(var i="function"==typeof require&&require,o=0;o<n.length;o++)r(n[o]);return r}({1:[function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=function(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return function(){return e},e}();if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=e[i]}return a.default=e,t&&t.set(e,a),a}(e(3));function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}window.waves_fieldtaget=null,window.waves_filename=null,window.inter_dzs_check_dependency_settings=0,e(2);var c=e(10);e(5);var d=e(6),l=e(7),u=e(9),p=e(8);function f(){jQuery("#save-ajax-loading").css("visibility","visible");var e={action:"dzsap_ajax_mo",postdata:jQuery(".mainsettings").serialize()};return d.feedbacker_show_message("Options saved."),jQuery.post(ajaxurl,e,(function(e){null!=window.console&&console.log("Got this from the server: "+e),jQuery("#save-ajax-loading").css("visibility","hidden")})),!1}jQuery(document).ready((function(t){var a=window.dzsap_settings;t(document).delegate("select.vpconfig-select","change",(function(){var e=t(this),a=null;e.parent().hasClass("vpconfig-wrapper")&&(a=e.parent()),e.parent().parent().hasClass("vpconfig-wrapper")&&(a=e.parent().parent()),a&&e.children(":selected")})),t(".save-mainoptions").bind("click",f),t(document).on("click"," .btn-dzsap-create-playlist-for-woo",(function(e){var a=t(this);if("click"===e.type&&a.hasClass("btn-dzsap-create-playlist-for-woo")){var n="zoomsounds-product-playlist-"+a.attr("data-playerid"),r={action:"dzsap_create_playlist",term_name:n};return a.attr("disabled",!0),a.prop("disabled",!0),a.addClass("playlist-opened"),t.ajax({type:"POST",url:window.ajaxurl,data:r,success:function(e){void 0!==window.console&&window.console.log&&console.log("create playlist ... "+e),e&&(t('input[name="dzsap_woo_product_track"]').val(n),a.parent().parent().parent().after('<iframe class="dzsap-woo-playlist-iframe" src="'+window.dzsap_settings.admin_url+"term.php?taxonomy=dzsap_sliders&tag_ID="+e+'&post_type=dzsap_items&dzs_css=remove_wp_menu" width="100%" height="400"></iframe>'))},error:function(e){void 0!==window.console&&console.log("Got this from the server: "+e,e)}}),!1}})),u.vpconfigs_init(),l.mainoptions_init();var n=t(".wrap").eq(0);d.feedbacker_init(),r.addGutenbergButtons(),r.addUploaderButtons(),c.wave_regenerate_init(),p.systemCheck_waves_check(),t(".dzs-auto-click-after-1000").each((function(){var e=t(this);setTimeout((function(){e.trigger("click")}),1e3)})),e(4).nag_intro_tooltip(o(o({},a),{},{prefix:"dzsap"})),setTimeout(r.reskin_select,10),setTimeout((function(){t("select.vpconfig-select").trigger("change")}),1e3),window.dzs_dependency_on_document_ready(),t(document).on("change.dzsap_get_thumb",'*[name="dzsap_meta_source_attachment_id"]',(function(){var e=t(this),a=null;if(e.parent().parent().parent().parent().parent().hasClass("dzstooltip--content")&&(a=e.parent().parent().parent().parent().parent()),a){var n=a.find('*[name="dzsap_meta_item_thumb"]');if(n&&""==n.val()){var r={action:"dzsap_get_thumb_from_meta",postdata:e.val()},i=n;jQuery.ajax({type:"POST",url:window.ajaxurl,data:r,success:function(e){console.groupCollapsed("imagedata"),console.log("Got this from the server: "+e),console.groupEnd(),0==e.indexOf("image data - ")?(e=e.replace("image data - ",""))&&""==i.val()&&"none"!=i.val()&&(i.val("data:image/jpeg;base64,"+e),i.trigger("change")):""==i.val()&&"none"!=i.val()&&(i.val(e),i.trigger("change"))},error:function(e){void 0!==window.console&&console.warn("Got this from the server: "+e)}})}}})),t(document).on("change.dzsap_global",".edit_form_line input[name=source], .wrap input[name=source],input[name=playerid]",(function(){var e=t(this),a=!0;isNaN(Number(e.val()))&&""==t("input[name=playerid]").eq(0).val()||(a=!1);var n=t('*[name="dzsap_meta_source_attachment_id"]').eq(0);isNaN(Number(n.val()))&&""==n.val()||(a=!1),n.trigger("change"),a?(t('div[data-label="playerid"],*[data-vc-shortcode-param-name="playerid"]').show(),t(".notice-for-playerid").show()):t(".notice-for-playerid").hide()})),t("input[name=source]").trigger("change"),setTimeout((function(){t("input[name=source]").trigger("change")}),1e3),t(".with_colorpicker").each((function(){var e=t(this);e.hasClass("treated")||(t.fn.farbtastic?e.next().find(".picker").farbtastic(e):window.console&&console.info("declare farbtastic..."),e.addClass("treated"),e.bind("change",(function(){jQuery("#customstyle_body").html("body{ background-color:"+t("input[name=color_bg]").val()+"} .dzsportfolio, .dzsportfolio a{ color:"+t("input[name=color_main]").val()+"} .dzsportfolio .portitem:hover .the-title, .dzsportfolio .selector-con .categories .a-category.active { color:"+t("input[name=color_high]").val()+" }")})),e.trigger("change"),e.bind("click",(function(){e.next().hasClass("picker-con")&&e.next().find(".the-icon").eq(0).trigger("click")})))})),n.hasClass("wrap-for-generator-player")})),r.reskin_select()},{10:10,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9}],3:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.addUploaderButtons=function(){var e=jQuery;e(document).off("click.dzswup",".dzs-wordpress-uploader"),e(document).on("click.dzswup",".dzs-wordpress-uploader",(function(t){var a=e(this),n=a.prev();a.parent().hasClass("upload-for-target-con")?n=a.parent().find("input").eq(0):a.parent().parent().parent().hasClass("upload-for-target-con")&&(n=a.parent().parent().parent().find("input").eq(0));var r="";n.hasClass("upload-type-audio")&&(r="audio"),n.hasClass("upload-type-video")&&(r="video"),n.hasClass("upload-type-image")&&(r="image"),console.log("addUploaderButtons()");var i=wp.media.frames.dzsp_addimage=wp.media({title:"Insert Media",library:{type:r},button:{text:"Insert Media",close:!0}});return i.on("select",(function(){var e=i.state().get("selection").first(),t=e&&e.attributes&&e.attributes.filename?e.attributes.filename:"",r=e.attributes?e.attributes.id:0,o=e.attributes.url;a.hasClass("insert-id")&&(o=e.attributes.id),n.val(o),n.trigger("change"),t&&t.length>5&&(t.indexOf(".mp3")>t.length-5||t.indexOf(".wav")>t.length-5||t.indexOf(".m4a")>t.length-5)&&window.dzsap_waveform_autogenerateWithId(r);var s=null;n.parent().parent().hasClass("tab-content")&&(s=n.parent().parent()),"dzsap_meta_item_source"==n.attr("name")&&(console.info("narayana"),s&&(console.info("attachment.attributes - ",e.attributes),console.info("attachment.attributes.artist - ",e.attributes.artist),console.info("attachment.attributes.artist - ",e.attributes.artist),setTimeout((function(e){if(console.info("attachment.attributes - ",e.attributes),console.info("attachment.attributes.artist - ",e.attributes.artist),console.info("attachment.attributes.artist - ",e.attributes.artist),e.attributes.title){var t="the_post_title";""==s.find('*[name="'+t+'"]').eq(0).val()&&s.find('*[name="'+t+'"]').eq(0).val(e.attributes.title),setTimeout((function(e){e.trigger("change")}),500,s.find('*[name="'+t+'"]').eq(0))}if(e.attributes.artist){t="artistname";""==s.find('*[name="'+t+'"]').eq(0).val()&&s.find('*[name="'+t+'"]').eq(0).val(e.attributes.artist),setTimeout((function(e){e.trigger("change")}),500,s.find('*[name="'+t+'"]').eq(0))}}),500,e))),(n.attr("name").indexOf("item_source")>-1||"source"==n.attr("name"))&&n.parent().find('*[name="dzsap_meta_source_attachment_id"]').eq(0).val(e.attributes.id)})),i.open(),t.stopPropagation(),t.preventDefault(),!1})),e(document).off("click",".dzs-btn-add-media-att"),e(document).on("click",".dzs-btn-add-media-att",(function(){var t=e(this),a={title:"Add Item",button:{text:"Select"},multiple:!1};t.attr("data-library_type")&&(a.library={type:t.attr("data-library_type")});var n=wp.media.frames.downloadable_file=wp.media(a);return n.on("select",(function(){var e=n.state().get("selection");e=e.toJSON();var a=0;for(a=0;a<e.length;a++){var r=e[a];null!=r.id&&(t.hasClass("button-setting-input-url")?t.parent().parent().find("input").eq(0).val(r.url):t.parent().parent().find("input").eq(0).val(r.id),t.parent().parent().find("input").eq(0).trigger("change"))}})),n.open(),!1})),e(".uploader-target").off("change"),e(".uploader-target").on("change",(function(){var t=e(this),a=t.val(),n=null;if(t.prev().hasClass("uploader-preview")&&(n=t.prev()),n){if(a&&0==isNaN(Number(a))){var r={action:"dzs_get_attachment_src",id:a};jQuery.ajax({type:"POST",url:window.ajaxurl,data:r,success:function(e){console.warn(e,e&&(e.indexOf(".jpg")>-1||e.indexOf(".jpeg")>-1)),e&&(e.indexOf(".jpg")>-1||e.indexOf(".jpeg")>-1)?(n.css("background-image","url("+e+")"),n.html(" "),n.removeClass("empty")):(n.html(""),n.addClass("empty"))},error:function(e){void 0!==window.console&&console.warn("Got this from the server: "+e)}})}else n.css("background-image","url("+a+")"),n.html(" "),n.removeClass("empty");""==a&&(n.html(""),n.addClass("empty"))}})),setTimeout((function(){e(".uploader-target").trigger("change")}),500)},a.addGutenbergButtons=function(){return setInterval((function(){if(window.tinyMCE)for(var e in window.tinyMCE.editors){var t=window.tinyMCE.editors[e].$();t.hasClass("wp-block-freeform")&&(0===t.parent().parent().parent().find(".wp-content-media-buttons").length&&t.parent().parent().parent().find(".block-library-classic__toolbar").append('<div class="wp-content-media-buttons"></div>'),window.dzsap_add_media_buttons())}}),2e3)},a.reskin_select=function(){for(var e=0;e<jQuery("select").length;e++){var t=jQuery("select").eq(e);if(!(0==t.hasClass("styleme")||t.parent().hasClass("select_wrapper")||t.parent().hasClass("select-wrapper")||t.parent().hasClass("dzs--select-wrapper"))){var a=t.find(":selected");t.wrap('<div class="dzs--select-wrapper"></div>'),t.parent().prepend("<span>"+a.text()+"</span>")}}jQuery(document).off("change.dzsselectwrap"),jQuery(document).on("change.dzsselectwrap",".dzs--select-wrapper select",(function(){var e=jQuery(this).find(":selected").text();jQuery(this).parent().children("span").text(e)}))},a.parse_response=function(e){var t={};try{t=JSON.parse(e)}catch(a){console.log("did not parse",e)}return t},window.wp_pseudoHighlightMenuItem=function(e,t){var a=jQuery;a("#toplevel_page_"+e+", #toplevel_page_"+e+" > a").addClass("wp-has-current-submenu"),a("#toplevel_page_"+e+" .wp-first-item").addClass("current"),a("#menu-posts-"+t+", #menu-posts-"+t+">a").removeClass("wp-has-current-submenu wp-menu-open")}},{}],2:[function(e,t,a){"use strict";window.dzs_check_dependency_settings=function(e){window.inter_dzs_check_dependency_settings&&clearTimeout(window.inter_dzs_check_dependency_settings),window.inter_dzs_check_dependency_settings=setTimeout((function(){dzs_check_dependency_settings_real(e)}),100)},window.dzs_check_dependency_settings_real=function(e){var t=jQuery;t("*[data-dependency]").each((function(){var e=t(this),a={},n=e.attr("data-dependency");0==n.indexOf('"')&&(n=(n=n.substr(1,n.length)).substr(0,n.length-1)),n=n.replace(/{quotquot}/g,'"');try{if((a=JSON.parse(n))[0]){var r=null,i="name",o=t(document);e.hasClass("check-label")&&(i="data-label"),e.hasClass("check-parent1")&&(o=e.parent()),e.hasClass("check-parent2")&&(o=e.parent().parent()),e.hasClass("check-parent3")&&(o=e.parent().parent().parent()),a[0].lab&&0==(r=o.find("*["+i+'="'+a[0].lab+'"]:not(.fake-input)').eq(0)).length&&"name"==a[0].lab&&(r=o.find('*[name="0-settings-'+a[0].lab+'"]:not(.fake-input)').eq(0)),a[0].label&&0==(r=o.find("*["+i+'="'+a[0].label+'"]:not(.fake-input)').eq(0)).length&&"name"==a[0].label&&(r=o.find('*[name="0-settings-'+a[0].label+'"]:not(.fake-input)').eq(0)),a[0].element&&(t("body").hasClass("zoomsounds_page_dzsap-mo")&&(a[0].element=String(a[0].element).replace("dzsap_meta_","")),e.attr("data-option-name"),r=o.find("*["+i+'="'+a[0].element+'"]:not(.fake-input)').eq(0)),a[0].element&&a[0].element,e.attr("data-option-name");var s=r.val();"checkbox"==r.attr("type")&&(r.prop("checked")||(s=""));var c=!1;if(a[0].val)for(var d in a[0].val)if(s==a[0].val[d]){c=!0;break}if(a.relation){for(var l in a)if("relation"!=l&&a[l].value)for(var d in"AND"==a.relation&&(c=!1),a[0].element&&(r=o.find("*["+i+'="'+a[l].element+'"]:not(.fake-input)').eq(0)),a[l].value){if(r.val()==a[l].value[d]){"checkbox"==r.attr("type")?r.val()==a[l].value[d]&&r.prop("checked")&&(c=!0):c=!0;break}if("anything_but_blank"==a[l].value[d]&&s){c=!0;break}}}else if(a[0].value)for(var d in a[0].value){if(r.val()==a[0].value[d]){"checkbox"==r.attr("type")?r.val()==a[0].value[d]&&r.prop("checked")&&(c=!0):c=!0;break}if("anything_but_blank"==a[0].value[d]&&s){c=!0;break}}c?e.show():e.hide()}}catch(u){console.info("cannot parse depedency json","'",n,"'",u,e)}}))},window.dzs_handle_submit_dependency_field=function(e){var t=jQuery(this);"change"==e.type&&t.hasClass("dzs-dependency-field")&&dzs_check_dependency_settings()},window.dzs_dependency_on_document_ready=function(){var e=jQuery;e(document).off("change",".dzs-dependency-field",dzs_handle_submit_dependency_field),e(document).on("change",".dzs-dependency-field",dzs_handle_submit_dependency_field),setTimeout((function(){e(".dzs-dependency-field").trigger("change")}),800)}},{}],10:[function(e,t,a){"use strict";a.wave_regenerate_init=function(){var e=jQuery;function t(){document.querySelector("*[name=track_id]")?(e("*[name=wavedata_track_url]").val(e("*[name=track_url]").val()),e("*[name=wavedata_track_id]").val(e("*[name=track_id]").val()),e("*[name=wavedata_track_url_id]").val(e("*[name=track_url_id]").val())):(e("*[name=wavedata_track_url]").val(window.get_query_arg(window.location.href,"track_url")),e("*[name=wavedata_track_id]").val(window.get_query_arg(window.location.href,"track_id")),e("*[name=wavedata_track_url_id]").val(window.get_query_arg(window.location.href,"track_url_id")))}function a(a){var n=jQuery(a);t();var r=n.find('*[name="wavedata_track_url"]').eq(0).val(),i=n.find('*[name="wavedata_track_id"]').eq(0).val(),o=n.find('*[name="wavedata_url_id"]').eq(0).val(),s={action:"dzsap_submit_pcm",playerid:i,source:r,postdata:n.find('*[name="wavedata_pcm"]').eq(0).val(),forceUrlTrackId:o};console.log("handle_submit()",{data:s}),e.ajax({type:"POST",url:window.ajaxurl,data:s,success:function(e){console.groupCollapsed("submitted pcm"),console.info(e),console.groupEnd()},error:function(e){void 0!==window.console&&console.log("Got this from the server: "+e,e)}})}wp.media&&(wp.media.events.on("editor:image-update",(function(e){console.log(e)})),wp.media.events.on("editor:image-edit",(function(e){console.log(e)})),wp.media.frame&&wp.media.frame.on("all",(function(e){console.log(e)}))),t(),e("*[name=track_url],*[name=track_id],*[name=track_url_id]").on("keyup",(function(){t()})),window.dzsap_admin_waveforms_submitPcmData=a,console.log(".track-waveform-meta - ",e(".track-waveform-meta")),e(document).on("submit",".track-waveform-meta",(function(){return a(this),!1})),e(document).on("click",".regenerate-waveform",(function(t){var a=e(this);if("click"===t.type&&a.hasClass("regenerate-waveform")){a.attr("data-player-source",e("#dzsap_woo_product_track").val());var n=dzsap_settings.admin_url+"admin.php";return n=add_query_arg(n,"page","dzsap-mo"),n=add_query_arg(n,"dzsap_wave_regenerate","on"),n=add_query_arg(n,"track_id",a.attr("data-playerid")),n=add_query_arg(n,"track_url",a.attr("data-player-source")),a.after('<iframe class="regenerate-waveform-iframe" src="'+n+'" width="100%" height="540"></iframe>'),!1}}))},window.dzsap_waveform_autogenerateWithId=function(e){var t={action:"dzsap_get_pcm",source:e};jQuery.ajax({type:"POST",url:window.ajaxurl,data:t,success:function(t){if(!t){var a='<iframe class="regenerate-waveform-iframe" style="opacity: 0; pointer-events: none; position:absolute; bottom:0; right:0; width: 100px; height: 100px;" src="'+window.dzsap_settings.admin_url+"admin.php?page=dzsap-mo&dzsap_wave_regenerate=on&dzsap_wave_generate_auto=on&disable_isShowTrackInfo=off&track_id="+encodeURIComponent(e)+'" width="100%" height="400"></iframe>';jQuery("body").append(a)}},error:function(e){void 0!==window.console&&console.warn("Got this from the server: "+e)}})}},{}],5:[function(e,t,a){"use strict";window.get_query_arg=function(e,t){if(e.indexOf(t+"=")>-1){var a=new RegExp("[?&]"+t+"(.+?)(?=&|$)").exec(e);if(null!=a)return a[1]?a[1].replace(/=/g,""):""}},window.add_query_arg=function(e,t,a){var n=e,r=(t=encodeURIComponent(t))+"="+(a=encodeURIComponent(a)),i=new RegExp("(&|\\?)"+t+"=[^&]*");return(n=n.replace(i,"$1"+r)).indexOf(t+"=")>-1||(n.indexOf("?")>-1?n+="&"+r:n+="?"+r),n}},{}],6:[function(e,t,a){"use strict";var n=null;a.feedbacker_init=function(){var e=jQuery;(n=e(".feedbacker")).fadeOut("fast")},a.feedbacker_show_message=function(e){n.html(e),n.fadeIn("fast").delay(2e3).fadeOut("fast")}},{}],7:[function(e,t,a){"use strict";a.mainoptions_init=function(){var e=jQuery,t=document.querySelector("#dzs-tabs--main-options"),a=0;function n(a){var n,r=e(a.currentTarget).val();r?(t.api_set_fixed_mode("toggle"),t.classList.add("dzstaa-all-tabs-content-visible")):(t.api_set_fixed_mode(""),t.classList.remove("dzstaa-all-tabs-content-visible")),n=r,e(".setting").each((function(t){var a=e(this),r=n.toLowerCase(),i=a.find(".setting-label").length?String(a.find(".setting-label").eq(0).text()).toLowerCase():"",o=a.find(".sidenote").length?String(a.find(".sidenote").eq(0).text()).toLowerCase():"";r?i.indexOf(r)>-1||o.indexOf(r)>-1?a.show():a.hide():a.show()})),function(t){e(".tab-menu-con").each((function(a){var n=e(this),r=!1;n.find(".setting").each((function(t){"none"!==e(this).css("display")&&(r=!0)})),r?n.css("display",""):n.hide(),""===t&&n.css("display","")}))}(n),setTimeout((function(){t.api_handle_resize()}),300)}e(document).on("keyup change mouseup","#dzs--settings-search",(function(e){clearTimeout(a),a=setTimeout(n,400,e)}))}},{}],9:[function(e,t,a){"use strict";a.vpconfigs_init=function(){var e=jQuery;function t(){e(".btn-refresh-preview").trigger("click")}var a=0;e(document).on("change",".mainsetting",(function(){e(this),clearTimeout(a),a=setTimeout(t,150)})),e(document).on("click",".btn-refresh-preview",(function(t){var a=e(this);if("click"===t.type&&a.hasClass("btn-refresh-preview")){var n={action:"dzsap_save_configs",postdata:currSlider.serializeAnything(),called_from:"btn-refresh-preview",slider_name:"called_from_vpconfig_admin_preview",currdb:dzsap_settings.currdb};return jQuery.post(ajaxurl,n,(function(t){void 0!==window.console&&console.log("Got this from the server: "+t),setTimeout((function(){e(".preview-player-iframe").addClass("preview-iframe-hidden")}),2),setTimeout((function(){e(".preview-player-iframe").attr("src",dzsap_settings.site_url+"/wp-admin/admin.php?page=dzsap-mo&dzsap_preview_player=on&config=called_from_vpconfig_admin_preview")}),300),setTimeout((function(){e(".preview-iframe-hidden").removeClass("preview-iframe-hidden")}),1e3)})),!1}}))}},{}],8:[function(e,t,a){"use strict";a.systemCheck_waves_check=function(){var e=jQuery;e(document).on("click",".systemCheck_waves_check-regenerate-waveform",(function(t){var a=e(this),n='<iframe class="regenerate-waveform-iframe" src="'+window.dzsap_settings.admin_url+"admin.php?page=dzsap-mo&dzsap_wave_regenerate=on&disable_isShowTrackInfo=on&track_url="+encodeURIComponent(a.attr("data-track_url"))+'" width="100%" height="400"></iframe>';return a.get(0).outerHTML=n,!1})),e(document).on("change","#dzsap_is_admin_systemCheck_waves",(function(t){var a="dzsap_is_admin_systemCheck_waves";e(this).prop("checked")?document.cookie=a+"=on":document.cookie=a+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC;",setTimeout((function(){window.location.reload()}),100)}))}},{}],4:[function(e,t,a){"use strict";a.nag_intro_tooltip=function(e){e&&e.nag_intro_data&&"on"!==localStorage.getItem(e.prefix+"_nag_intro_seen")&&("on"==e.nag_intro_data&&jQuery("#toplevel_page_dzsap_menu .wp-menu-name").wrap('<span class="dzs--nag-intro-tooltip dzstooltip-con js " style="z-index: 555555"><span class="tooltip-indicator" style="color: inherit;"></span><span class=" dzstooltip active talign-end arrow-left style-rounded color-dark-light  dims-set transition-slidedown " style="width: 530px"><span class="dzstooltip--inner text-align-center">\n<h4>'.concat(e.translate_nag_intro_title,"</h4>\n<p>").concat(e.translate_nag_intro_1,'</p>\n<span class="dzs--close-btn"><span class="dashicons dashicons-no"></span></span>\n<span class="dzs-row">\n<span class="dzs-col-md-6"><h6>').concat(e.translate_nag_intro_title_1,"</h6>\n<p>").concat(e.translate_nag_intro_col1,'</p>\n<div style="background-image:url(https://i.imgur.com/Ec6Tpf5.jpg);"  class="fullwidth divimage"></div>\n</span>\n\n<span class="dzs-col-md-6"><h6>').concat(e.translate_nag_intro_title_2,"</h6>\n<p>").concat(e.translate_nag_intro_col2,'</p>\n<div style="background-image:url(https://i.imgur.com/LorVNVf.jpg);"  class="fullwidth divimage"></div>\n</span>\n</span>\n</span> </span></span>')),jQuery(document).on("click",".dzs--close-btn",(function(){return jQuery(this).parent().parent().hide(),jQuery.ajax({type:"POST",url:window.ajaxurl,data:{action:"dzsap_hide_intro_nag",postdata:"on"}}),!1})),localStorage.setItem(e.prefix+"_nag_intro_seen","on"))}},{}]},{},[1]);