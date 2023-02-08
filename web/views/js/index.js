$(function () {
    renderInfo()
     // 点击首页按钮 
     $('.homePage').on('click', function () {
        // 跳转到首页
        location.href = '../views/index.html'
    })
    // 点击分类按钮
    $('.catePage').on('click', function () {
        // 跳转到分类页面
        location.href = '../views/category.html'
    })
    // 定义一个获取后台数据渲染页面的函数
    function renderInfo() {
        // 发起ajax请求
        $.ajax({
            method: 'GET',
            url: 'http://127.0.0.1:3001/',
            success: function (res) {
                // 获取数据失败
                if (res.status !== 0) return alert('获取数据失败！')
                // 调用模板引擎
                let htmlStr = template('tpl-course',res)
                // 渲染页面
                $('.goods').html(htmlStr)
            }
        })
    }





})