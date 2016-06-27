/**
 * Created by tanglili on 16/6/27.
 */
// 控制视频在移动端的safari浏览器中不全屏播放,嵌入在页面中播放
$(function () {
    var video = $('video').get(0);
    makeVideoPlayableInline(video, false);
    video.addEventListener('touchstart', function () {
        video.play();
    });
});

// 检测当前用户设备
function getDeviceName() {
    var parser = new UAParser();
    var deviceInfo = parser.getDevice();
    var InfoArr = [];
    $.each(deviceInfo,function (i,n) {
        InfoArr += i + "," + n + ",";
    });
    var arg = InfoArr.split(",");
    arg = arg.map(function (item) {
        return item.toLowerCase();
    });
    // alert(arg);
    // if(!($.inArray("iphone", arg) && $.inArray("apple", arg))){
    //
    // }
}

$(function () {
    // 控制视频播放
    var example_video_1 = $("#example_video_1"),
        defPlayTime = 20;
    var player = videojs('example_video_1');
    player.on('timeupdate', function () {
        if (player.currentTime() >= defPlayTime) {
            player.pause();
            $(".video-page").remove();
            showDiv();
        }
    });
    // 点击取消按扭
    $("#btnclose").on("click", function () {
        hideDiv();
    });
});

// 显示遮罩层 START
function showDiv() {
//        $(".video-box").remove();
    $("#pauseTipDiv").show();
    $(".bg").show();

    $("body,html").css({"overflow": "hidden"});
}
// 隐藏遮罩层 START
function hideDiv() {
    $(".bg").hide();
    $("#pauseTipDiv").hide();
    $("body,html").css({"overflow": "auto"});
}