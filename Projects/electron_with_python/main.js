const { app, BrowserWindow } = require("electron")

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600
    })
//    win.loadFile("index.html")
    win.loadFile("templates/flask_welcome.html")
}

// 从 python-shell 导入一个 PythonShell 对象 (注意大小写)
const {PythonShell}  = require("python-shell")
// PythonShell 主要有 run() 和 runString() 两个方法, 这里我们用 run()
// run() 第一个参数是要调用的 py 文件的路径
// 第二个参数是可选配置 (一般传 null)
// 第三个参数是回调函数
PythonShell.run(
	"engine.py", null, function (err, results) {
        if (err) throw err
        console.log('engine.py running')
        console.log('results', results)
    }
)

// 启动
app.on("ready", createWindow)
