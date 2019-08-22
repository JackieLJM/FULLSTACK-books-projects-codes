from flask import Flask, render_template

'''
导入的这两个模块, Flask 是主体类, render_template 是渲染模板.
'''

# 首先创建一个变量 app, 用于初始化 flask 启动核心
app = Flask(__name__)
'''
感兴趣的可以看一下它的源码, 当我们把 __name__ 传进去后, Flask 的实例化行为:
    (flask 源码) app.py -> Flask.__init__()
        (flask 源码) helpers.py -> _PackageBoundObject.__init__()
可以看到, Flask 会根据你传的 __name__ 定位到程序 (engine.py) 所在的根路径.
这个根路径的用处和 render_template 有关. 下面会讲.
'''


@app.route('/')
def homepage():
    # 将本函数绑定到路由根地址, 这样我们访问主地址时, 就能看到这个页面
    home = 'flask_welcome.html'
    return render_template(home)


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5858)
