import _html from './home.html';//引入HTML
require('./home.css');//引入css文件

function home(){
    return {
        name:'李四-js',
        tpl:_html
    }
}

export default home