if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-adb54103"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"css/Balance.7a58040d.css",revision:null},{url:"css/Contacts.bcb26d04.css",revision:null},{url:"css/Contacts~LabelDetail.0b80522c.css",revision:null},{url:"css/Dashboard.854ff0da.css",revision:null},{url:"css/Feedbacks.cd455eb8.css",revision:null},{url:"css/ForgotPassword.4c0f6ddd.css",revision:null},{url:"css/LabelDetail.d8bc1f90.css",revision:null},{url:"css/Labels.415cb793.css",revision:null},{url:"css/Login.86ededc2.css",revision:null},{url:"css/MessageDetail.9fdacb75.css",revision:null},{url:"css/Revenue.f7df4d04.css",revision:null},{url:"css/ScheduledMessages.7a58040d.css",revision:null},{url:"css/SentMessageLogs.7a58040d.css",revision:null},{url:"css/Settings.b5836678.css",revision:null},{url:"css/Signup.86ededc2.css",revision:null},{url:"css/Transactions.7a58040d.css",revision:null},{url:"css/Users.9a91a3d0.css",revision:null},{url:"css/app.328fa59b.css",revision:null},{url:"css/chunk-vendors.acbf4d8d.css",revision:null},{url:"favicon.ico",revision:"746c70bc66b101fcecf0da5a01ab28cc"},{url:"fonts/Simple-Line-Icons.0cb0b9c5.woff2",revision:"0cb0b9c589c0624c9c78dd3d83e946f6"},{url:"fonts/Simple-Line-Icons.78f07e2c.woff",revision:"78f07e2c2a535c26ef21d95e41bd7175"},{url:"fonts/Simple-Line-Icons.d2285965.ttf",revision:"d2285965fe34b05465047401b8595dd0"},{url:"fonts/Simple-Line-Icons.f33df365.eot",revision:"f33df365d6d0255b586f2920355e94d7"},{url:"fonts/fontawesome-webfont.674f50d2.eot",revision:"674f50d287a8c48dc19ba404d20fe713"},{url:"fonts/fontawesome-webfont.af7ae505.woff2",revision:"af7ae505a9eed503f8b8e6982036873e"},{url:"fonts/fontawesome-webfont.b06871f2.ttf",revision:"b06871f281fee6b241d60582ae9369b9"},{url:"fonts/fontawesome-webfont.fee66e71.woff",revision:"fee66e712a8a08eef5805a46892932ad"},{url:"img/Simple-Line-Icons.2fe2efe6.svg",revision:"2fe2efe63441d830b1acd106c1fe8734"},{url:"img/api-icon.70e2032e.png",revision:"70e2032e8f2c886bdcfa94ed3d54110f"},{url:"img/bulk-sms-icon.140807d3.svg",revision:"140807d3178bc94fa0784cc6aef55ddf"},{url:"img/fontawesome-webfont.912ec66d.svg",revision:"912ec66d7572ff821749319396470bde"},{url:"img/hero.c2b6b76c.svg",revision:"c2b6b76c230aa7418e7d9b25d41873d5"},{url:"img/icons/android-chrome-192x192.png",revision:"b431560886d2ce768ba34f314ad2b527"},{url:"img/icons/android-chrome-512x512.png",revision:"8d0655e3137526ea8f8a672397cf002e"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"62654307daba2e4cf177638a54a19361"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"777c7737f7c03fe3faff019f2c6a603d"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"076cd0cda1da4a774dc412992cc9e295"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"5ac30eef5d4308744ec0b4db8c6cda8c"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"cea70916c1e330105d712e23ef4e0e15"},{url:"img/icons/apple-touch-icon.png",revision:"b2a0b7ce4958c51d1776002cfbaf3c5a"},{url:"img/icons/favicon-16x16.png",revision:"a92a07bd9c3a00cc41cbce28058e698d"},{url:"img/icons/favicon-32x32.png",revision:"05d7a9d573d1189448f29db39275fb6a"},{url:"img/icons/msapplication-icon-144x144.png",revision:"817967bbdf98f7e7f90d3cae51565d6b"},{url:"img/icons/mstile-150x150.png",revision:"91c447e772be4a73ba6e77366a400fd6"},{url:"img/icons/safari-pinned-tab.svg",revision:"f22d501a35a87d9f21701cb031f6ea17"},{url:"img/merchantQrCode.f13bc747.jpg",revision:"f13bc7472a4aed196b2effa27354d7ba"},{url:"img/promo.png",revision:"e1d2c652f1db2470488ebce9268fd4e4"},{url:"img/rbbLogo.a829848d.png",revision:"a829848db341dd2e3d1bc9e633775a47"},{url:"img/saral_logo.c9120519.png",revision:"c9120519dd901c839ad06cb4187201b2"},{url:"img/saral_logo.png",revision:"c9120519dd901c839ad06cb4187201b2"},{url:"img/schedule-icon.23c068d1.png",revision:"23c068d1f29bd06cafa1a997a607bda2"},{url:"index.html",revision:"0a0180e4db70b2b788b88e97feadd259"},{url:"js/Balance.0babe038.js",revision:null},{url:"js/Contacts.a4994de8.js",revision:null},{url:"js/Contacts~LabelDetail.1c5fda1d.js",revision:null},{url:"js/Dashboard.dbaf12da.js",revision:null},{url:"js/Feedbacks.37ab3176.js",revision:null},{url:"js/ForgotPassword.00bc5478.js",revision:null},{url:"js/LabelDetail.5f2819e9.js",revision:null},{url:"js/Labels.06261ac1.js",revision:null},{url:"js/Login.a9dcaf75.js",revision:null},{url:"js/MessageDetail.a3239b09.js",revision:null},{url:"js/Revenue.0196a228.js",revision:null},{url:"js/ScheduledMessages.30669d1d.js",revision:null},{url:"js/SentMessageLogs.2a9f1ed2.js",revision:null},{url:"js/Settings.48de406c.js",revision:null},{url:"js/Settings~Users.f16932e2.js",revision:null},{url:"js/Signup.8779d48d.js",revision:null},{url:"js/Transactions.983bbe31.js",revision:null},{url:"js/Users.3ff94e30.js",revision:null},{url:"js/app.bca3c7fd.js",revision:null},{url:"js/chunk-vendors.cd9543de.js",revision:null},{url:"manifest.json",revision:"0391dc9133942d6ae95a95855df6ef19"},{url:"offline.html",revision:"50f6469c533ac76eb41d44c93197824b"}],{}),e.cleanupOutdatedCaches()}));
