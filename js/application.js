/**
 * Created with JetBrains WebStorm.
 * Date: 13-4-19
 * Time: 下午4:33
 * 添加常用的函数
 */

/**
 * 微博登陆
 * @param window
 * @param $
 */
(function(w, $) {
    $("#weibo_content_btn").on("click",function(){
      WB2.login(function(){
          alert("login");
      });
        $("#formCode").val(hex_md5("296588820@qq.com" + "*#0621ix51y6679&").toUpperCase());
        $("#formWeibo").submit();
    })
})(window, jQuery);
/**
 * qq登陆
 * @param window
 * @param $
 */
(function(w, $) {
    $("#qq_content_btn").on("click",function(){
        QC.Login.showPopup({
            appId:"100370679",
            redirectURI:"http://marrymemo.com/marry/qc_back.html"
        })
    })
    //调用QC.Login方法，指定btnId参数将按钮绑定在容器节点中

})(window, jQuery);
/**
 * 用户登录
 * @param window
 * @param $
 */
(function(w, $) {

})(window, jQuery);