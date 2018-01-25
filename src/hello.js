window.addEventListener("DOMContentLoaded", function () {
    // 区分DOMContentLoaded----load
    let target = window.document.getElementById('baidu');
    let taobao = window.document.getElementById('taobao');

    target.addEventListener('click', function () {
        window.open("https://www.baidu.com");
    });
    taobao.addEventListener('clcik', function(){
        window.open('./tt.html');
    })
})