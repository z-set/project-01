// controler.js 业务处理模块
// 导入数据库模块
const dataImg = require('../db/data.json')
module.exports = {
    // 请求根目录业务逻辑
    getRoot: (req, res) => {
        res.send({
            status: 0,
            message: '获取数据表数据成功！',
            data: dataImg.result.data
        })
    },
    // 获取全部课程逻辑接口
    // http://127.0.0.1:3001/getAllCourse
    getAllCourse: (req, res) => {
        res.json(dataImg);
    }
}