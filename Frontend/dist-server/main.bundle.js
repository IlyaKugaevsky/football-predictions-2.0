!function(l,n){for(var e in n)l[e]=n[e]}(exports,function(l){function n(t){if(e[t])return e[t].exports;var u=e[t]={i:t,l:!1,exports:{}};return l[t].call(u.exports,u,u.exports,n),u.l=!0,u.exports}var e={};return n.m=l,n.c=e,n.d=function(l,e,t){n.o(l,e)||Object.defineProperty(l,e,{configurable:!1,enumerable:!0,get:t})},n.n=function(l){var e=l&&l.__esModule?function(){return l.default}:function(){return l};return n.d(e,"a",e),e},n.o=function(l,n){return Object.prototype.hasOwnProperty.call(l,n)},n.p="",n(n.s=0)}({0:function(l,n,e){l.exports=e("aVAX")},"8wGh":function(l,n){l.exports=require("@angular/animations/browser")},ASwt:function(l,n){l.exports=require("@angular/platform-server")},EIu6:function(l,n,e){"use strict";var t=e("OQ0P"),u=e("EXGM"),o=e("wQAS"),r=e("gou4"),p=e("yv0u"),i=e("wp5R"),d=e("ASwt"),a=e("8wGh"),m=e("Hq/i"),c=e("f9NF"),s=e("Ir0Z"),M=e("l0JX"),A=e("aR8+");n.ServerAppModuleNgFactory=t.\u0275cmf(u.ServerAppModule,[o.AppComponent],function(l){return t.\u0275mod([t.\u0275mpd(512,t.ComponentFactoryResolver,t.\u0275CodegenComponentFactoryResolver,[[8,[r.AppComponentNgFactory]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t.\u0275mpd(5120,t.LOCALE_ID,t.\u0275m,[[3,t.LOCALE_ID]]),t.\u0275mpd(4608,p.NgLocalization,p.NgLocaleLocalization,[t.LOCALE_ID,[2,p.\u0275a]]),t.\u0275mpd(4608,t.Compiler,t.Compiler,[]),t.\u0275mpd(5120,t.IterableDiffers,t.\u0275k,[]),t.\u0275mpd(5120,t.KeyValueDiffers,t.\u0275l,[]),t.\u0275mpd(4608,i.DomSanitizer,i.\u0275e,[p.DOCUMENT]),t.\u0275mpd(6144,t.Sanitizer,null,[i.DomSanitizer]),t.\u0275mpd(4608,i.HAMMER_GESTURE_CONFIG,i.HammerGestureConfig,[]),t.\u0275mpd(5120,i.EVENT_MANAGER_PLUGINS,function(l,n,e,t,u){return[new i.\u0275DomEventsPlugin(l,n),new i.\u0275KeyEventsPlugin(e),new i.\u0275HammerGesturesPlugin(t,u)]},[p.DOCUMENT,t.NgZone,p.DOCUMENT,p.DOCUMENT,i.HAMMER_GESTURE_CONFIG]),t.\u0275mpd(4608,i.EventManager,i.EventManager,[i.EVENT_MANAGER_PLUGINS,t.NgZone]),t.\u0275mpd(135680,i.\u0275DomSharedStylesHost,i.\u0275DomSharedStylesHost,[p.DOCUMENT]),t.\u0275mpd(4608,i.\u0275DomRendererFactory2,i.\u0275DomRendererFactory2,[i.EventManager,i.\u0275DomSharedStylesHost]),t.\u0275mpd(4608,d.\u0275c,d.\u0275c,[i.DOCUMENT,[2,i.\u0275TRANSITION_ID]]),t.\u0275mpd(6144,i.\u0275SharedStylesHost,null,[d.\u0275c]),t.\u0275mpd(4608,d.\u0275ServerRendererFactory2,d.\u0275ServerRendererFactory2,[t.NgZone,i.DOCUMENT,i.\u0275SharedStylesHost]),t.\u0275mpd(4608,a.AnimationDriver,a.\u0275NoopAnimationDriver,[]),t.\u0275mpd(5120,a.\u0275AnimationStyleNormalizer,m.\u0275d,[]),t.\u0275mpd(4608,a.\u0275AnimationEngine,m.\u0275b,[a.AnimationDriver,a.\u0275AnimationStyleNormalizer]),t.\u0275mpd(5120,t.RendererFactory2,d.\u0275a,[d.\u0275ServerRendererFactory2,a.\u0275AnimationEngine,t.NgZone]),t.\u0275mpd(4352,t.Testability,null,[]),t.\u0275mpd(4608,i.Meta,i.Meta,[p.DOCUMENT]),t.\u0275mpd(4608,i.Title,i.Title,[p.DOCUMENT]),t.\u0275mpd(4608,c.BrowserXhr,d.\u0275d,[]),t.\u0275mpd(4608,c.ResponseOptions,c.BaseResponseOptions,[]),t.\u0275mpd(4608,c.XSRFStrategy,d.\u0275e,[]),t.\u0275mpd(4608,c.XHRBackend,c.XHRBackend,[c.BrowserXhr,c.ResponseOptions,c.XSRFStrategy]),t.\u0275mpd(4608,c.RequestOptions,c.BaseRequestOptions,[]),t.\u0275mpd(5120,c.Http,d.\u0275f,[c.XHRBackend,c.RequestOptions]),t.\u0275mpd(4608,s.HttpXsrfTokenExtractor,s.\u0275g,[p.DOCUMENT,t.PLATFORM_ID,s.\u0275e]),t.\u0275mpd(4608,s.\u0275h,s.\u0275h,[s.HttpXsrfTokenExtractor,s.\u0275f]),t.\u0275mpd(5120,s.HTTP_INTERCEPTORS,function(l){return[l]},[s.\u0275h]),t.\u0275mpd(4608,s.XhrFactory,d.\u0275d,[]),t.\u0275mpd(4608,s.HttpXhrBackend,s.HttpXhrBackend,[s.XhrFactory]),t.\u0275mpd(6144,s.HttpBackend,null,[s.HttpXhrBackend]),t.\u0275mpd(5120,s.HttpHandler,d.\u0275g,[s.HttpBackend,[2,s.HTTP_INTERCEPTORS]]),t.\u0275mpd(4608,s.HttpClient,s.HttpClient,[s.HttpHandler]),t.\u0275mpd(4608,s.\u0275d,s.\u0275d,[]),t.\u0275mpd(4608,M.AnimationBuilder,m.\u0275BrowserAnimationBuilder,[t.RendererFactory2,i.DOCUMENT]),t.\u0275mpd(512,p.CommonModule,p.CommonModule,[]),t.\u0275mpd(1024,t.ErrorHandler,i.\u0275a,[]),t.\u0275mpd(256,t.APP_ID,"my-app-id",[]),t.\u0275mpd(2048,i.\u0275TRANSITION_ID,null,[t.APP_ID]),t.\u0275mpd(1024,t.APP_INITIALIZER,function(l,n,e,t){return[i.\u0275h(l),i.\u0275f(n,e,t)]},[[2,t.NgProbeToken],i.\u0275TRANSITION_ID,p.DOCUMENT,t.Injector]),t.\u0275mpd(512,t.ApplicationInitStatus,t.ApplicationInitStatus,[[2,t.APP_INITIALIZER]]),t.\u0275mpd(131584,t.ApplicationRef,t.ApplicationRef,[t.NgZone,t.\u0275Console,t.Injector,t.ErrorHandler,t.ComponentFactoryResolver,t.ApplicationInitStatus]),t.\u0275mpd(512,t.ApplicationModule,t.ApplicationModule,[t.ApplicationRef]),t.\u0275mpd(512,i.BrowserModule,i.BrowserModule,[[3,i.BrowserModule]]),t.\u0275mpd(512,c.HttpModule,c.HttpModule,[]),t.\u0275mpd(512,s.HttpClientXsrfModule,s.HttpClientXsrfModule,[]),t.\u0275mpd(512,s.HttpClientModule,s.HttpClientModule,[]),t.\u0275mpd(512,m.NoopAnimationsModule,m.NoopAnimationsModule,[]),t.\u0275mpd(512,d.ServerModule,d.ServerModule,[]),t.\u0275mpd(512,A.AppModule,A.AppModule,[]),t.\u0275mpd(512,u.ServerAppModule,u.ServerAppModule,[]),t.\u0275mpd(256,s.\u0275e,"XSRF-TOKEN",[]),t.\u0275mpd(256,s.\u0275f,"X-XSRF-TOKEN",[])])})},EXGM:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ServerAppModule=function(){}},"Hq/i":function(l,n){l.exports=require("@angular/platform-browser/animations")},Ir0Z:function(l,n){l.exports=require("@angular/common/http")},OQ0P:function(l,n){l.exports=require("@angular/core")},QK5h:function(l,n,e){"use strict";n.styles=[""]},"aR8+":function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.AppModule=function(){}},aVAX:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("EIu6");n.ServerAppModuleNgFactory=t.ServerAppModuleNgFactory;var u=e("EXGM");n.ServerAppModule=u.ServerAppModule,n.LAZY_MODULE_MAP={}},f9NF:function(l,n){l.exports=require("@angular/http")},gou4:function(l,n,e){"use strict";function t(l){return r.\u0275vid(0,[(l()(),r.\u0275ted(-1,null,["\n"])),(l()(),r.\u0275eld(1,0,null,null,6,"div",[["style","text-align:center"]],null,null,null,null,null)),(l()(),r.\u0275ted(-1,null,["\n  "])),(l()(),r.\u0275eld(3,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),r.\u0275ted(4,null,["\n    Welcome to ","!\n  "])),(l()(),r.\u0275ted(-1,null,["\n  "])),(l()(),r.\u0275eld(6,0,null,null,0,"img",[["alt","Angular Logo"],["src","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="],["width","300"]],null,null,null,null,null)),(l()(),r.\u0275ted(-1,null,["\n"])),(l()(),r.\u0275ted(-1,null,["\n"])),(l()(),r.\u0275eld(9,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),r.\u0275ted(-1,null,["Here are some links to help you start: "])),(l()(),r.\u0275ted(-1,null,["\n"])),(l()(),r.\u0275eld(12,0,null,null,22,"ul",[],null,null,null,null,null)),(l()(),r.\u0275ted(-1,null,["\n  "])),(l()(),r.\u0275eld(14,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),r.\u0275ted(-1,null,["\n    "])),(l()(),r.\u0275eld(16,0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),r.\u0275eld(17,0,null,null,1,"a",[["href","https://angular.io/tutorial"],["rel","noopener"],["target","_blank"]],null,null,null,null,null)),(l()(),r.\u0275ted(-1,null,["Tour of Heroes"])),(l()(),r.\u0275ted(-1,null,["\n  "])),(l()(),r.\u0275ted(-1,null,["\n  "])),(l()(),r.\u0275eld(21,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),r.\u0275ted(-1,null,["\n    "])),(l()(),r.\u0275eld(23,0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),r.\u0275eld(24,0,null,null,1,"a",[["href","https://github.com/angular/angular-cli/wiki"],["rel","noopener"],["target","_blank"]],null,null,null,null,null)),(l()(),r.\u0275ted(-1,null,["CLI Documentation"])),(l()(),r.\u0275ted(-1,null,["\n  "])),(l()(),r.\u0275ted(-1,null,["\n  "])),(l()(),r.\u0275eld(28,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),r.\u0275ted(-1,null,["\n    "])),(l()(),r.\u0275eld(30,0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),r.\u0275eld(31,0,null,null,1,"a",[["href","https://blog.angular.io/"],["rel","noopener"],["target","_blank"]],null,null,null,null,null)),(l()(),r.\u0275ted(-1,null,["Angular blog"])),(l()(),r.\u0275ted(-1,null,["\n  "])),(l()(),r.\u0275ted(-1,null,["\n"])),(l()(),r.\u0275ted(-1,null,["\n\n"]))],null,function(l,n){l(n,4,0,n.component.title)})}function u(l){return r.\u0275vid(0,[(l()(),r.\u0275eld(0,0,null,null,1,"app-root",[],null,null,null,t,i)),r.\u0275did(1,49152,null,0,p.AppComponent,[],null,null)],null,null)}var o=e("QK5h"),r=e("OQ0P"),p=e("wQAS"),i=r.\u0275crt({encapsulation:0,styles:[o.styles],data:{}});n.RenderType_AppComponent=i,n.View_AppComponent_0=t,n.View_AppComponent_Host_0=u,n.AppComponentNgFactory=r.\u0275ccf("app-root",p.AppComponent,u,{},{},[])},l0JX:function(l,n){l.exports=require("@angular/animations")},wQAS:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.AppComponent=function(){this.title="app"}},wp5R:function(l,n){l.exports=require("@angular/platform-browser")},yv0u:function(l,n){l.exports=require("@angular/common")}}));