webpackJsonp([0],{EMVv:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});a("g3Gj"),a("5LIk");var t={data:function(){return{playerOptions:{playbackRates:[.7,1,1.5,2],autoplay:!1,controls:!0,preload:"auto",muted:!1,loop:!1,language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"video/mp4",src:"http://vjs.zencdn.net/v/oceans.mp4"}],poster:"https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",width:document.documentElement.clientWidth,notSupportedMessage:"此视频暂无法播放，请稍后再试"}}},computed:{},methods:{toplay:function(){this.$refs.videoPlayer.player.play()},onPlayerPlay:function(e){console.log("player play!")},onPlayerPause:function(e){console.log("player pause!")},onPlayerEnded:function(e){console.log("player ended!")},onPlayerLoadeddata:function(e){},onPlayerWaiting:function(e){},onPlayerPlaying:function(e){},onPlayerTimeupdate:function(e){},onPlayerCanplay:function(e){},onPlayerCanplaythrough:function(e){},playerStateChanged:function(e){},playerReadied:function(e){console.log("example player 1 readied",e)}}},o={render:function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"player-container"},[a("div",{staticClass:"vd"},[a("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,"x5-playsinline":!0,"x5-video-player-type":"h5",options:e.playerOptions},on:{play:function(n){return e.onPlayerPlay(n)},pause:function(n){return e.onPlayerPause(n)},ended:function(n){return e.onPlayerEnded(n)},loadeddata:function(n){return e.onPlayerLoadeddata(n)},waiting:function(n){return e.onPlayerWaiting(n)},playing:function(n){return e.onPlayerPlaying(n)},timeupdate:function(n){return e.onPlayerTimeupdate(n)},canplay:function(n){return e.onPlayerCanplay(n)},canplaythrough:function(n){return e.onPlayerCanplaythrough(n)},ready:e.playerReadied,statechanged:function(n){return e.playerStateChanged(n)}}})],1),e._v(" "),a("mt-button",{staticClass:"mtbtn",attrs:{type:"primary"}},[e._v("分享")])],1)},staticRenderFns:[]};var r=a("VU/8")(t,o,!1,function(e){a("q0x2")},"data-v-716ec4ab",null);n.default=r.exports},q0x2:function(e,n){}});
//# sourceMappingURL=0.4ee7e87888e2ee4c87b4.js.map