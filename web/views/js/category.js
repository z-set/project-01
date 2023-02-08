$(function() {
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
    // 通过事件委托的方式给li标签绑定点击事件
    $('.sidebar').on('click', 'li', function () {
        // 移除所以兄弟元素的active 给自己添加active
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
    })
    // 为log绑定点击事件
    $('.log').on('click', function () {
        // 跳转到首页
        location.href = '../views/index.html'
    })

})