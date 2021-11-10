(function(g){var window=this;'use strict';var GQa=function(a,b){a.Oa("onAutonavCoundownStarted",b)},J5=function(a,b,c){g.O(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.He(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.SF&&(b.lengthText?(e=b.lengthText||null,f=b.Zp||null):b.lengthSeconds&&(e=g.ML(b.lengthSeconds),f=g.ML(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.OF(d).type;var l=b instanceof g.SF?b.isLivePlayback:null,m=b instanceof g.SF?b.isUpcoming:null;c={title:b.title,author:b.author,author_and_views:b.shortViewCount?b.author+" \u2022 "+b.shortViewCount:b.author,aria_label:b.Al||g.qI("Watch $TITLE",{TITLE:b.title}),duration:e,
timestamp:f,url:b.Bk(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:b.shortViewCount?b.shortViewCount+" \u2022 "+b.publishedTimeText:b.publishedTimeText,autoplayAlternativeHeader:b.Nm};b instanceof g.RF&&(c.playlist_length=b.playlistLength);a.update(c)},K5=function(a){var b=a.V(),c=b.u;
g.U.call(this,{G:"a",L:"ytp-autonav-suggestion-card",W:{href:"{{url}}",target:c?b.K:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},U:[{G:"div",Ga:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],W:{style:"{{background}}"},U:[{G:"div",W:{"aria-label":"{{timestamp}}"},Ga:["ytp-autonav-timestamp"],va:"{{duration}}"},{G:"div",Ga:["ytp-autonav-live-stamp"],va:"Live"},{G:"div",
Ga:["ytp-autonav-upcoming-stamp"],va:"Upcoming"},{G:"div",L:"ytp-autonav-list-overlay",U:[{G:"div",L:"ytp-autonav-mix-text",va:"Mix"},{G:"div",L:"ytp-autonav-mix-icon"}]}]},{G:"div",Ga:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],va:"{{title}}"},{G:"div",Ga:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],va:"{{author}}"},{G:"div",Ga:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],va:"{{views_and_publish_time}}"}]});this.I=a;this.suggestion=
null;this.i=c;this.Qa("click",this.onClick);this.Qa("keypress",this.onKeyPress)},M5=function(a,b){b=void 0===b?!1:b;
g.U.call(this,{G:"div",L:"ytp-autonav-endscreen-countdown-container"});var c=this;this.D=b;this.u=0;b=a.V();var d=b.u;this.I=a;this.suggestion=null;this.i=new g.U({G:"div",L:"ytp-autonav-endscreen-upnext-container",W:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},U:[{G:"div",L:"ytp-autonav-endscreen-upnext-header"},{G:"div",L:"ytp-autonav-endscreen-upnext-alternative-header",va:"{{autoplayAlternativeHeader}}"},
{G:"a",L:"ytp-autonav-endscreen-link-container",W:{href:"{{url}}",target:d?b.K:""},U:[{G:"div",L:"ytp-autonav-endscreen-upnext-thumbnail",W:{style:"{{background}}"},U:[{G:"div",W:{"aria-label":"{{timestamp}}"},Ga:["ytp-autonav-timestamp"],va:"{{duration}}"},{G:"div",Ga:["ytp-autonav-live-stamp"],va:"Live"},{G:"div",Ga:["ytp-autonav-upcoming-stamp"],va:"Upcoming"}]},{G:"div",L:"ytp-autonav-endscreen-video-info",U:[{G:"div",L:"ytp-autonav-endscreen-premium-badge"},{G:"div",L:"ytp-autonav-endscreen-upnext-title",
va:"{{title}}"},{G:"div",L:"ytp-autonav-endscreen-upnext-author",va:"{{author}}"},{G:"div",L:"ytp-autonav-view-and-date",va:"{{views_and_publish_time}}"},{G:"div",L:"ytp-autonav-author-and-view",va:"{{author_and_views}}"}]}]}]});g.J(this,this.i);this.i.Ea(this.element);d||this.T(this.i.Fa("ytp-autonav-endscreen-link-container"),"click",this.NH);this.I.Wb(this.element,this,115127);this.I.Wb(this.i.Fa("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.U({G:"div",L:"ytp-autonav-overlay"});
g.J(this,this.overlay);this.overlay.Ea(this.element);this.B=new g.U({G:"div",L:"ytp-autonav-endscreen-button-container"});g.J(this,this.B);this.B.Ea(this.element);this.cancelButton=new g.U({G:"button",Ga:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button"],W:{"aria-label":"Cancel autoplay"},va:"Cancel"});g.J(this,this.cancelButton);this.cancelButton.Ea(this.B.element);this.cancelButton.Qa("click",this.VP,this);this.I.Wb(this.cancelButton.element,this,115129);this.playButton=
new g.U({G:"a",Ga:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button"],W:{href:"{{url}}",role:"button","aria-label":"Play next video"},va:"Play now"});g.J(this,this.playButton);this.playButton.Ea(this.B.element);this.playButton.Qa("click",this.NH,this);this.I.Wb(this.playButton.element,this,115130);this.C=new g.M(function(){L5(c)},500);
g.J(this,this.C);this.MH();this.T(a,"autonavvisibility",this.MH)},P5=function(a){var b=a.I.ij(!0,a.I.isFullscreen());
g.O(a.element,"ytp-autonav-endscreen-small-mode",a.uf(b));g.O(a.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.TA);g.O(a.I.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.I.Xd());g.O(a.I.getRootNode(),"countdown-running",a.Jh());g.O(a.element,"ytp-player-content",a.I.Xd());g.Jl(a.overlay.element,{width:b.width+"px"});if(!a.Jh()){a.I.Xd()?N5(a,Math.round(O5(a)/1E3)):N5(a);b=!!a.suggestion&&!!a.suggestion.Nm;var c=a.I.Xd()||!b;g.O(a.element,"ytp-autonav-endscreen-upnext-alternative-header-only",
!c&&b);g.O(a.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.QK(a.B,a.I.Xd())}},L5=function(a){var b=O5(a),c=Math,d=c.min;
var e=a.u?Date.now()-a.u:0;c=d.call(c,e,b);N5(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Jh()?a.select(!0):a.Jh()&&a.C.start()},O5=function(a){var b=a.I.zp();
return 0<=b?b:g.sE(a.I.V().experiments,"autoplay_time")||1E4},N5=function(a,b){b=void 0===b?-1:b;
a=a.i.Fa("ytp-autonav-endscreen-upnext-header");g.Bg(a);if(0<=b){b=String(b);var c="Up next in $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Up next in $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.Ag("Up next in $SECONDS".slice(0,d)));var e=g.zg("span");g.Jq(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Gg(e,b);a.appendChild(e);a.appendChild(g.Ag("Up next in $SECONDS".slice(d+c.length)));return}}g.Gg(a,"Up next")},Q5=function(a,b){g.U.call(this,{G:"div",
Ga:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},R5=function(a){g.U.call(this,{G:"div",
Ga:["ytp-upnext","ytp-player-content"],W:{"aria-label":"{{aria_label}}"},U:[{G:"div",L:"ytp-cued-thumbnail-overlay-image",W:{style:"{{background}}"}},{G:"span",L:"ytp-upnext-top",U:[{G:"span",L:"ytp-upnext-header",va:"Up Next"},{G:"span",L:"ytp-upnext-title",va:"{{title}}"},{G:"span",L:"ytp-upnext-author",va:"{{author}}"}]},{G:"a",L:"ytp-upnext-autoplay-icon",W:{role:"button",href:"{{url}}","aria-label":"Play next video"},U:[{G:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
U:[{G:"circle",L:"ytp-svg-autoplay-circle",W:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{G:"circle",L:"ytp-svg-autoplay-ring",W:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{G:"path",L:"ytp-svg-fill",W:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{G:"span",L:"ytp-upnext-bottom",U:[{G:"span",L:"ytp-upnext-cancel"},{G:"span",L:"ytp-upnext-paused",
va:"Auto-play is paused"}]}]});this.api=a;this.cancelButton=null;this.D=this.Fa("ytp-svg-autoplay-ring");this.B=this.notification=this.i=this.suggestion=null;this.C=new g.M(this.py,5E3,this);this.u=0;var b=this.Fa("ytp-upnext-cancel");this.cancelButton=new g.U({G:"button",Ga:["ytp-upnext-cancel-button","ytp-button"],W:{tabindex:"0","aria-label":"Cancel autoplay"},va:"Cancel"});g.J(this,this.cancelButton);this.cancelButton.Qa("click",this.WP,this);this.cancelButton.Ea(b);this.cancelButton&&this.api.Wb(this.cancelButton.element,
this,115129);g.J(this,this.C);this.api.Wb(this.element,this,18788);b=this.Fa("ytp-upnext-autoplay-icon");this.T(b,"click",this.XP);this.api.Wb(b,this,115130);this.OH();this.T(a,"autonavvisibility",this.OH);this.T(a,"mdxnowautoplaying",this.BU);this.T(a,"mdxautoplaycanceled",this.CU);g.O(this.element,"ytp-upnext-mobile",this.api.V().i)},HQa=function(a,b){return b?b:0<=a.api.zp()?a.api.zp():g.sE(a.api.V().experiments,"autoplay_time")||1E4},S5=function(a,b){b=HQa(a,b);
var c=Math,d=c.min;var e=(0,g.Q)()-a.u;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.D.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Jh()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Jh()&&a.i.start()},T5=function(a){Q5.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.U({G:"div",L:"ytp-suggestion-panel",U:[{G:"div",Ga:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],va:"More videos"}]});this.K=new g.U({G:"div",L:"ytp-suggestions-container"});this.videos=[];this.B=null;this.D=this.J=!1;this.u=new M5(this.player);g.J(this,this.u);this.u.Ea(this.element);a.getVideoData().wc?this.i=this.u:(this.i=new R5(a),g.MM(this.player,this.i.element,4),g.J(this,this.i));this.overlay=new g.U({G:"div",
L:"ytp-autonav-overlay-cancelled-state"});g.J(this,this.overlay);this.overlay.Ea(this.element);this.C=new g.wD(this);g.J(this,this.C);g.J(this,this.table);this.table.Ea(this.element);this.table.show();g.J(this,this.K);this.K.Ea(this.table.element);this.hide()},U5=function(a){var b=a.Xd();
b!==a.D&&(a.D=b,a.player.ea("autonavvisibility"),a.D?(a.u!==a.i&&a.u.hide(),a.table.hide()):(a.u!==a.i&&a.u.show(),a.table.show()))},V5=function(a){Q5.call(this,a,"subscribecard-endscreen");
this.i=new g.U({G:"div",L:"ytp-subscribe-card",U:[{G:"img",L:"ytp-author-image",W:{src:"{{profilePicture}}"}},{G:"div",L:"ytp-subscribe-card-right",U:[{G:"div",L:"ytp-author-name",va:"{{author}}"},{G:"div",L:"html5-subscribe-button-container"}]}]});g.J(this,this.i);this.i.Ea(this.element);var b=a.getVideoData();this.subscribeButton=new g.bO("Subscribe",null,"Unsubscribe",null,!0,!1,b.Si,b.subscribed,"trailer-endscreen",null,null,a);g.J(this,this.subscribeButton);this.subscribeButton.Ea(this.i.Fa("html5-subscribe-button-container"));
this.T(a,"videodatachange",this.Pa);this.Pa();this.hide()},W5=function(a){var b=a.V(),c=g.Si||g.WE?{style:"will-change: opacity"}:void 0,d=b.u,e=["ytp-videowall-still"];
b.i&&e.push("ytp-videowall-show-text");g.U.call(this,{G:"a",Ga:e,W:{href:"{{url}}",target:d?b.K:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},U:[{G:"div",L:"ytp-videowall-still-image",W:{style:"{{background}}"}},{G:"span",L:"ytp-videowall-still-info",U:[{G:"span",L:"ytp-videowall-still-info-bg",U:[{G:"span",L:"ytp-videowall-still-info-content",W:c,U:[{G:"span",L:"ytp-videowall-still-info-title",va:"{{title}}"},{G:"span",L:"ytp-videowall-still-info-author",
va:"{{author_and_views}}"},{G:"span",L:"ytp-videowall-still-info-live",va:"Live"},{G:"span",L:"ytp-videowall-still-info-duration",va:"{{duration}}"}]}]}]},{G:"span",Ga:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],U:[{G:"span",L:"ytp-videowall-still-listlabel-icon"},"Playlist",{G:"span",L:"ytp-videowall-still-listlabel-length",U:[" (",{G:"span",va:"{{playlist_length}}"},")"]}]},{G:"span",Ga:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],U:[{G:"span",
L:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{G:"span",L:"ytp-videowall-still-listlabel-length",va:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.i=new g.wD(this);g.J(this,this.i);this.Qa("click",this.onClick);this.Qa("keypress",this.onKeyPress);this.i.T(a,"videodatachange",this.onVideoDataChange);a.Rg(this.element,this);this.onVideoDataChange()},X5=function(a){Q5.call(this,a,"videowall-endscreen");
var b=this;this.I=a;this.B=0;this.stills=[];this.C=this.videoData=null;this.D=this.K=!1;this.S=null;this.u=new g.wD(this);g.J(this,this.u);this.J=new g.M(function(){g.N(b.element,"ytp-show-tiles")},0);
g.J(this,this.J);var c=new g.U({G:"button",Ga:["ytp-button","ytp-endscreen-previous"],W:{"aria-label":"Previous"},U:[g.VK()]});g.J(this,c);c.Ea(this.element);c.Qa("click",this.bQ,this);this.table=new g.NK({G:"div",L:"ytp-endscreen-content"});g.J(this,this.table);this.table.Ea(this.element);c=new g.U({G:"button",Ga:["ytp-button","ytp-endscreen-next"],W:{"aria-label":"Next"},U:[g.WK()]});g.J(this,c);c.Ea(this.element);c.Qa("click",this.aQ,this);a.getVideoData().wc?this.i=new M5(a,!0):this.i=new R5(a);
g.J(this,this.i);g.MM(this.player,this.i.element,4);this.hide()},Y5=function(a){return g.NM(a.player)&&a.Ku()&&!a.C},Z5=function(a){var b=a.Xd();
b!==a.K&&(a.K=b,a.player.ea("autonavvisibility"))},$5=function(a){g.ZM.call(this,a);
var b=this;this.endScreen=null;this.i=this.u=this.B=!1;this.listeners=new g.wD(this);g.J(this,this.listeners);this.env=a.V();IQa(a)?(this.B=!0,JQa(this),this.i?this.endScreen=new T5(a):this.endScreen=new X5(this.player)):this.env.cd?this.endScreen=new V5(this.player):this.endScreen=new Q5(this.player);g.J(this,this.endScreen);g.MM(this.player,this.endScreen.element,4);KQa(this);this.listeners.T(a,"videodatachange",this.onVideoDataChange,this);this.listeners.T(a,g.pA("endscreen"),function(c){b.onCueRangeEnter(c)});
this.listeners.T(a,g.qA("endscreen"),function(c){b.onCueRangeExit(c)})},JQa=function(a){var b=a.player.getVideoData();
if(!b||a.i===b.Lh&&a.u===b.wc)return!1;a.i=b.Lh;a.u=b.wc;return!0},IQa=function(a){a=a.V();
return a.Eb&&!a.cd},KQa=function(a){a.player.Ve("endscreen");
var b=a.player.getVideoData();b=new g.nA(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.nA(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.Ed([b,c])};
g.FM.prototype.zp=g.ca(2,function(){return this.app.zp()});
g.VX.prototype.zp=g.ca(1,function(){return this.getVideoData().iL});g.w(K5,g.U);K5.prototype.select=function(){(this.I.Nj(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.qv||void 0)||this.I.N("web_player_endscreen_double_log_fix_killswitch"))&&this.I.Gb(this.element)};
K5.prototype.onClick=function(a){g.vN(a,this.I,this.i,this.suggestion.sessionData||void 0)&&this.select()};
K5.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.Du(a)||(this.select(),g.Cu(a))}};g.w(M5,g.U);g.k=M5.prototype;g.k.Nx=function(a){this.suggestion!==a&&(this.suggestion=a,J5(this.i,a),this.playButton.Ra("url",this.suggestion.Bk()),P5(this))};
g.k.Jh=function(){return 0<this.u};
g.k.jt=function(){this.Jh()||(this.u=Date.now(),L5(this),GQa(this.I,O5(this)),g.O(this.I.getRootNode(),"countdown-running",this.Jh()))};
g.k.kq=function(){this.zm();L5(this);var a=this.i.Fa("ytp-autonav-endscreen-upnext-header");a&&g.Gg(a,"Up next")};
g.k.zm=function(){this.Jh()&&(this.C.stop(),this.u=0)};
g.k.select=function(a){this.I.nextVideo(!1,void 0===a?!1:a);this.zm()};
g.k.NH=function(a){g.vN(a,this.I)&&(a.currentTarget===this.playButton.element?this.I.Gb(this.playButton.element):a.currentTarget===this.i.Fa("ytp-autonav-endscreen-link-container")&&(a=this.i.Fa("ytp-autonav-endscreen-link-container"),this.I.ib(a,!0),this.I.Gb(a)),this.select())};
g.k.VP=function(){this.I.Gb(this.cancelButton.element);g.HM(this.I,!0)};
g.k.MH=function(){var a=this.I.Xd();this.D&&this.Ab!==a&&g.QK(this,a);P5(this);this.I.ib(this.element,a);this.I.ib(this.cancelButton.element,a);this.I.ib(this.i.Fa("ytp-autonav-endscreen-link-container"),a);this.I.ib(this.playButton.element,a)};
g.k.uf=function(a){return 400>a.width||459>a.height};g.w(Q5,g.U);g.k=Q5.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.Ku=function(){return!1};
g.k.Xd=function(){return!1};
g.k.fL=function(){return!1};g.w(R5,g.U);g.k=R5.prototype;g.k.py=function(){this.notification&&(this.C.stop(),this.jc(this.B),this.B=null,this.notification.close(),this.notification=null)};
g.k.Nx=function(a){this.suggestion=a;J5(this,a,"hqdefault.jpg")};
g.k.OH=function(){g.QK(this,this.api.Xd());this.api.ib(this.element,this.api.Xd());this.api.ib(this.Fa("ytp-upnext-autoplay-icon"),this.api.Xd());this.cancelButton&&this.api.ib(this.cancelButton.element,this.api.Xd())};
g.k.KU=function(){window.focus();this.py()};
g.k.jt=function(a){var b=this;this.Jh()||(g.fv("a11y-announce","Up Next "+this.suggestion.title),this.u=(0,g.Q)(),this.i=new g.M(function(){S5(b,a)},25),S5(this,a),GQa(this.api,HQa(this,a)));
g.Mq(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.U.prototype.hide.call(this)};
g.k.Jh=function(){return!!this.i};
g.k.kq=function(){this.zm();this.u=(0,g.Q)();S5(this);g.N(this.element,"ytp-upnext-autoplay-paused")};
g.k.zm=function(){this.Jh()&&(this.i.dispose(),this.i=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.V().N("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.py(),this.notification=new Notification("Up Next",{body:this.suggestion.title,icon:this.suggestion.He()}),this.B=this.T(this.notification,"click",this.KU),this.C.start())}this.zm();this.api.nextVideo(!1,a)};
g.k.XP=function(a){!g.Fg(this.cancelButton.element,g.yu(a))&&g.vN(a,this.api)&&(this.api.Xd()&&this.api.Gb(this.Fa("ytp-upnext-autoplay-icon")),this.select())};
g.k.WP=function(){this.api.Xd()&&this.cancelButton&&this.api.Gb(this.cancelButton.element);g.HM(this.api,!0)};
g.k.BU=function(a){this.api.getPresentingPlayerType();this.show();this.jt(a)};
g.k.CU=function(){this.api.getPresentingPlayerType();this.zm();this.hide()};
g.k.xa=function(){this.zm();this.py();g.U.prototype.xa.call(this)};g.w(T5,Q5);g.k=T5.prototype;g.k.create=function(){Q5.prototype.create.call(this);this.C.T(this.player,"appresize",this.ju);this.C.T(this.player,"onVideoAreaChange",this.ju);this.C.T(this.player,"videodatachange",this.onVideoDataChange);this.C.T(this.player,"autonavchange",this.PH);this.C.T(this.player,"autonavcancel",this.YP);this.onVideoDataChange()};
g.k.show=function(){Q5.prototype.show.call(this);(this.J||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.HM(this.player,!1);g.NM(this.player)&&this.Ku()&&!this.B?(U5(this),2===this.videoData.autonavState?this.player.V().N("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.jt():3===this.videoData.autonavState&&this.i.kq()):(g.HM(this.player,!0),U5(this));this.ju()};
g.k.hide=function(){Q5.prototype.hide.call(this);this.i.kq();U5(this)};
g.k.ju=function(){var a=this.player.ij(!0,this.player.isFullscreen());U5(this);P5(this.u);g.O(this.element,"ytp-autonav-cancelled-small-mode",this.uf(a));g.O(this.element,"ytp-autonav-cancelled-tiny-mode",this.wz(a));g.O(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.Jl(this.overlay.element,{width:a.width+"px"});if(!this.D){a=g.r(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){var c=g.r(b.value);b=c.next().value;c=c.next().value;g.O(c.element,
"ytp-suggestion-card-with-margin",1===b%2)}}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length){this.i.Nx(a[0]);this.i!==this.u&&this.u.Nx(a[0]);for(var b=0;b<LQa.length;++b){var c=LQa[b];if(a&&a[c]){this.videos[b]=new K5(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,J5(d,c));g.J(this,this.videos[b]);this.videos[b].Ea(this.K.element)}}}this.ju()}};
g.k.PH=function(a){1===a?(this.J=!1,this.B=this.videoData.clientPlaybackNonce,this.i.zm(),this.Ab&&this.ju()):(this.J=!0,this.Xd()&&(2===a?this.i.jt():3===a&&this.i.kq()))};
g.k.YP=function(a){a?this.PH(1):(this.B=null,this.J=!1)};
g.k.Ku=function(){return 1!==this.videoData.autonavState};
g.k.uf=function(a){return(910>a.width||459>a.height)&&!this.wz(a)&&!(400>=a.width||360>=a.height)};
g.k.wz=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Xd=function(){return this.Ab&&g.NM(this.player)&&this.Ku()&&!this.B};
var LQa=[1,3,2,4];g.w(V5,Q5);V5.prototype.Pa=function(){var a=this.player.getVideoData();this.i.update({profilePicture:a.Qh,author:a.author});this.subscribeButton.channelId=a.Si;var b=this.subscribeButton;a.subscribed?b.u():b.B()};g.w(W5,g.U);W5.prototype.select=function(){(this.api.Nj(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.qv||void 0)||this.api.N("web_player_endscreen_double_log_fix_killswitch"))&&this.api.Gb(this.element)};
W5.prototype.onClick=function(a){g.vN(a,this.api,this.u,this.suggestion.sessionData||void 0)&&this.select()};
W5.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.Du(a)||(this.select(),g.Cu(a))}};
W5.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.V();this.u=a.D?!1:b.u};g.w(X5,Q5);g.k=X5.prototype;g.k.create=function(){Q5.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.dl();this.u.T(this.player,"appresize",this.dl);this.u.T(this.player,"onVideoAreaChange",this.dl);this.u.T(this.player,"videodatachange",this.onVideoDataChange);this.u.T(this.player,"autonavchange",this.ZB);this.u.T(this.player,"autonavcancel",this.ZP);a=this.videoData.autonavState;a!==this.S&&this.ZB(a);this.u.T(this.element,"transitionend",this.aW)};
g.k.destroy=function(){g.my(this.u);g.pe(this.stills);this.stills=[];Q5.prototype.destroy.call(this);g.Mq(this.element,"ytp-show-tiles");this.J.stop();this.S=this.videoData.autonavState};
g.k.Ku=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){Q5.prototype.show.call(this);g.Mq(this.element,"ytp-show-tiles");this.player.V().i?g.Eq(this.J):this.J.start();(this.D||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.HM(this.player,!1);Y5(this)?(Z5(this),2===this.videoData.autonavState?this.player.V().N("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.jt():3===this.videoData.autonavState&&this.i.kq()):(g.HM(this.player,!0),Z5(this))};
g.k.hide=function(){Q5.prototype.hide.call(this);this.i.kq();Z5(this)};
g.k.aW=function(a){g.yu(a)===this.element&&this.dl()};
g.k.dl=function(){if(this.videoData&&this.videoData.suggestions&&this.videoData.suggestions.length){g.N(this.element,"ytp-endscreen-paginate");var a=this.I.ij(!0,this.I.isFullscreen()),b=g.CM(this.I);b&&(b=b.Qe()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.videoData.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var p=b/2,q=e/2,t=b<=f-2&&n>=q*m,u=e<=h-2&&n>=p*m;if((p+
1)/q*d/c>c/(p/(q+1)*d)&&u)n-=p*m,e+=2;else if(t)n-=q*m,b+=2;else if(u)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.Xl(a,m,n);g.Jl(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.i.Nx(this.videoData.suggestions[0]);this.i instanceof M5&&P5(this.i);g.O(this.element,"ytp-endscreen-takeover",Y5(this));Z5(this);m+=4;n+=4;for(f=
c=0;f<b;f++)for(h=0;h<e;h++)if(p=c,q=0,d&&f>=b-2&&h>=e-2?q=1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(q=2):q=2),p=g.Rf(p+this.B,l),0!==q){t=this.stills[c];t||(t=new W5(this.player),this.stills[c]=t,a.appendChild(t.element));u=Math.floor(n*h/e);var x=Math.floor(m*f/b),y=Math.floor(n*(h+q)/e)-u-4,A=Math.floor(m*(f+q)/b)-x-4;g.Ql(t.element,x,u);g.Xl(t.element,A,y);g.Jl(t.element,"transitionDelay",(h+f)/20+"s");g.O(t.element,"ytp-videowall-still-mini",1===q);g.O(t.element,"ytp-videowall-still-large",
2<q);q=t;p=this.videoData.suggestions[p];q.suggestion!==p&&(q.suggestion=p,t=q.api.V(),u=g.Kq(q.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",J5(q,p,u),g.YE(t)&&(t=p.Bk(),t=g.pi(t,g.uM("emb_rel_end")),q.Ra("url",t)),(p=(p=p.sessionData)&&p.itct)&&q.api.xm(q.element,p));c++}g.O(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.Dg(e.element),g.oe(e);this.stills.length=c}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.B=0,this.videoData=a,this.dl())};
g.k.aQ=function(){this.B+=this.stills.length;this.dl()};
g.k.bQ=function(){this.B-=this.stills.length;this.dl()};
g.k.fL=function(){return this.i.Jh()};
g.k.ZB=function(a){1===a?(this.D=!1,this.C=this.videoData.clientPlaybackNonce,this.i.zm(),this.Ab&&this.dl()):(this.D=!0,this.Ab&&Y5(this)&&(2===a?this.i.jt():3===a&&this.i.kq()))};
g.k.ZP=function(a){if(a){for(a=0;a<this.stills.length;a++)this.I.ib(this.stills[a].element,!0);this.ZB(1)}else this.C=null,this.D=!1;this.dl()};
g.k.Xd=function(){return this.Ab&&Y5(this)};g.w($5,g.ZM);g.k=$5.prototype;g.k.Bq=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!IQa(this.player)||b;var c=a.Xe||g.iF(a.B),d=this.player.yv();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.Xd=function(){return this.endScreen.Xd()};
g.k.wS=function(){return this.Xd()?this.endScreen.fL():!1};
g.k.xa=function(){this.player.Ve("endscreen");g.ZM.prototype.xa.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.mJ;if(b&&b.videoId){var c=this.player.ub().Cd.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].videoId&&!a.bI?a=!1:(this.player.Nj(b.videoId,void 0,void 0,!0,!0,b),c&&c.Fz("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.ZM.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.ZM.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.Bq()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){KQa(this);this.B&&JQa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.i?this.endScreen=new T5(this.player):this.endScreen=new X5(this.player),g.J(this,this.endScreen),g.MM(this.player,this.endScreen.element,4))};g.YM("endscreen",$5);})(_yt_player);
