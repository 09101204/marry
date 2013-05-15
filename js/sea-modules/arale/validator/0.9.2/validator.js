define("arale/validator/0.9.2/validator",["./core","$","arale/widget/1.0.2/widget","arale/base/1.0.1/base","arale/class/1.0.0/class","arale/events/1.0.0/events"],function(a,b,c){var d=a("./core"),f=(a("arale/widget/1.0.2/widget"),a("$")),g=d.extend({events:{"mouseenter .{{attrs.inputClass}}":"mouseenter","mouseleave .{{attrs.inputClass}}":"mouseleave","mouseenter .{{attrs.textareaClass}}":"mouseenter","mouseleave .{{attrs.textareaClass}}":"mouseleave","focus .{{attrs.itemClass}} input,textarea,select":"focus","blur .{{attrs.itemClass}} input,textarea,select":"blur"},attrs:{explainClass:"ui-form-explain",itemClass:"ui-form-item",itemHoverClass:"ui-form-item-hover",itemFocusClass:"ui-form-item-focus",itemErrorClass:"ui-form-item-error",inputClass:"ui-input",textareaClass:"ui-textarea",showMessage:function(a,b){this.getExplain(b).html(a),this.getItem(b).addClass(this.get("itemErrorClass"))},hideMessage:function(a,b){this.getExplain(b).html(b.attr("data-explain")||" "),this.getItem(b).removeClass(this.get("itemErrorClass"))}},setup:function(){g.superclass.setup.call(this);var a=this;this.on("autoFocus",function(b){a.set("autoFocusEle",b)})},addItem:function(a){g.superclass.addItem.apply(this,[].slice.call(arguments));var b=this.query(a.element);return b&&this._saveExplainMessage(b),this},_saveExplainMessage:function(a){var c=a.element,d=c.attr("data-explain");void 0===d&&c.attr("data-explain",this.getExplain(c).html())},getExplain:function(a){var b=this.getItem(a),c=b.find("."+this.get("explainClass"));if(0==c.length)var c=f('<div class="'+this.get("explainClass")+'"></div>').appendTo(b);return c},getItem:function(a){a=f(a);var b=a.parents("."+this.get("itemClass"));return b},mouseenter:function(a){this.getItem(a.target).addClass(this.get("itemHoverClass"))},mouseleave:function(a){this.getItem(a.target).removeClass(this.get("itemHoverClass"))},focus:function(a){var b=a.target,c=this.get("autoFocusEle");if(c&&c.get(0)==b){var d=this;return f(b).keyup(function(){d.set("autoFocusEle",null),d.focus({target:b})}),void 0}this.getItem(b).removeClass(this.get("itemErrorClass")),this.getItem(b).addClass(this.get("itemFocusClass")),this.getExplain(b).html(f(b).attr("data-explain"))},blur:function(a){this.getItem(a.target).removeClass(this.get("itemFocusClass"))}});c.exports=g});