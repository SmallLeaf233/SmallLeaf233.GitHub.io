(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{511:function(t,s,n){"use strict";n.r(s);var a=n(4),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"frp内网穿透"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#frp内网穿透"}},[t._v("#")]),t._v(" frp内网穿透")]),t._v(" "),n("p",[t._v("一开始只是为了和朋友联机玩Minecraft，只是在github上把frp的压缩包下下来进行了最简单的配置")]),t._v(" "),n("p",[t._v("服务端配置：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("[common]\nbind_port = 7000\n")])])]),n("p",[t._v("客户端配置：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("[common]\nserver_addr = 这里是服务器地址\nserver_port = 7000\n\n[MC]\ntype = tcp\nlocal_ip = 127.0.0.1\nlocal_port = 12345\nremote_port = 6001\n")])])]),n("p",[t._v("然后分别启动就能用了，就是这么简单"),n("br"),t._v("\n但是我的世界的联机的端口号每次都会变，如果每次都要手动修改配置文件就显得很麻烦"),n("br"),t._v("\n我把这样的客户端发给别人，别人不一定会用"),n("br"),t._v("\n那么就用python写一个简单的程序来修改配置文件吧")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" re\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"frpc.ini"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"r"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    content "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    tab "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local_port = "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    pos "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tab"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    insert "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请输入需要映射的端口："')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"frpc.ini"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"w"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        content "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("pos "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" insert "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pos "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writelines"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("对，前面研究python在文件中指定位置插入内容就是为了在这修改配置文件"),n("br"),t._v("\n但是很快啊，出现了bug"),n("br"),t._v("\n端口号不一定是五位数，而且也不排除打错的可能性，配置文件的格式很容易被打乱"),n("br"),t._v("\n于是我打算换一种方式，直接写入整个配置文件不就行了？反正字数不多"),n("br"),t._v("\n并且在末尾使用"),n("code",[t._v("os.system")]),t._v("启动 frpc.exe")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\ninsert "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请输入需要映射的端口："')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"frpc.ini"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"w"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    list1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[common]\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'server_addr = 这里是服务器地址\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'server_port = 7000\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token = 这里是密钥\\n'")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[MC]\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type = tcp\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'local_ip = 127.0.0.1\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'local_port = '")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("insert"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'remote_port = 6001'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writelines"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("system"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frpc.exe'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("但是朋友的电脑上没有python环境，为了他也能用，我打算把py文件打包成exe文件"),n("br"),t._v("\n使用的是pyinstaller"),n("br"),t._v("\n首先创建虚拟环境，然后在虚拟环境中")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(" pip install pyinstaller\n")])])]),n("p",[t._v("把py文件放入文件夹，然后输入")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("pyinstaller -F -i icon.ico main.py\n")])])]),n("p",[t._v("常用参数："),n("br"),t._v("\n-F 表示生成单个可执行文件"),n("br"),t._v("\n-w 表示去掉控制台窗口，一般在打包GUI程序时使用，我这是命令行程序，故不使用"),n("br"),t._v("\n-i 表示exe文件的图标"),n("br"),t._v("\n打包完成后就能在其他电脑上使用了"),n("br"),t._v("\n只需要双击main.exe后输入端口号就行"),n("br")])])}),[],!1,null,null,null);s.default=r.exports}}]);