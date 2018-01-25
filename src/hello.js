window.addEventListener("DOMContentLoaded", function () {
    // 区分DOMContentLoaded----load
    let target = window.document.getElementById('baidu');

    target.addEventListener('click', function () {
        window.open("https://www.baidu.com");
    })
})