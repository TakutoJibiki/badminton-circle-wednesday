$(function () {
    $('a[href^="#"]').click(internal_click);
    $('button[href^="#"]').click(internal_click);
    
});

function internal_click() {
    var headerHeight = $('header').outerHeight(); // ヘッダーについているID、クラス名など、余白を開けたい場合は + 10を追記する。
    var href = $(this).attr("href"); // ページ内リンク先を取得
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({ scrollTop: position }, 'fast'); // スクロール速度ミリ秒
    return false; // #付与なし、付与したい場合は、true
}