define("arale/overlay/1.0.1/overlay",["$","arale/position/1.0.0/position","arale/iframe-shim/1.0.1/iframe-shim","arale/widget/1.0.2/widget","arale/base/1.0.1/base","arale/class/1.0.0/class","arale/events/1.0.0/events"],function(a,b,c){function j(a){return d.contains(document.documentElement,a)}function k(a){d(h.blurOverlays).each(function(b,c){if(c&&c.get("visible")){for(var e=0;c._relativeElements.length>e;e++){var f=d(c._relativeElements[e])[0];if(f===a.target||d.contains(f,a.target))return}c.hide()}})}function l(a,b){for(var c=0;b.length>c;c++)if(a===b[c])return b.splice(c,1),b}var d=a("$"),e=a("arale/position/1.0.0/position"),f=a("arale/iframe-shim/1.0.1/iframe-shim"),g=a("arale/widget/1.0.2/widget"),h=g.extend({attrs:{width:"",height:"",zIndex:99,visible:!1,align:{selfXY:[0,0],baseElement:e.VIEWPORT,baseXY:[0,0]},parentNode:document.body},show:function(){return this.rendered||this.render(),this.set("visible",!0),this},hide:function(){return this.set("visible",!1),this},setup:function(){var a=this;this._setupShim(),this._setupResize(),this.after("show",function(){a._setPosition()})},destroy:function(){return l(this,h.allOverlays),l(this,h.blurOverlays),h.superclass.destroy.call(this)},_setPosition:function(a){if(j(this.element[0])){a||(a=this.get("align"));var b="none"===this.element.css("display");return b&&this.element.css({visibility:"hidden",display:"block"}),e.pin({element:this.element,x:a.selfXY[0],y:a.selfXY[1]},{element:a.baseElement,x:a.baseXY[0],y:a.baseXY[1]}),b&&this.element.css({visibility:"",display:"none"}),this}},_setupShim:function(){var a=new f(this.element);this.after("hide _setPosition",a.sync,a);var b=["width","height"];for(var c in b)b.hasOwnProperty(c)&&this.on("change:"+c,a.sync,a);this.before("destroy",a.destroy,a)},_setupResize:function(){h.allOverlays.push(this)},_blurHide:function(a){a=d.makeArray(a),a.push(this.element),this._relativeElements=a,h.blurOverlays.push(this)},_onRenderWidth:function(a){this.element.css("width",a)},_onRenderHeight:function(a){this.element.css("height",a)},_onRenderZIndex:function(a){this.element.css("zIndex",a)},_onRenderAlign:function(a){this._setPosition(a)},_onRenderVisible:function(a){this.element[a?"show":"hide"]()}});h.blurOverlays=[],d(document).on("click",function(a){k(a)});var i;h.allOverlays=[],d(window).resize(function(){i&&clearTimeout(i),i=setTimeout(function(){d(h.allOverlays).each(function(a,b){b&&b.get("visible")&&b._setPosition()})},80)}),c.exports=h});