/**
 * Created with JetBrains WebStorm.
 * User: fish
 * Date: 13-2-17
 * Time: 下午9:40
 * To change this template use File | Settings | File Templates.
 */
var mongoskin = require('mongoskin');

exports.config = {

    //site settings
    name:'未志',
    version:'0.0.3',
    postNum: process.env.POST_NUM || '5',//每页显示文章个数
    session_secret: process.env.SESSION_SECRET || 'a743894a0e',//session加密串
    cookie_secret: process.env.COOKIE_SECRET ||'a743894a0e',//session加密串
    auth_cookie_name: process.env.AUTH_COOKIE_NAME || 'nd_secret',//cookie 名字
    port : process.env.PORT || 3000,//端口号
    theme : process.env.THEME || 'one',//主题名称

    // Feed Setting
    rss:{
        max_rss_items:"5",
        title:"fish",
        description:"写给未来的自己。",
        link: process.env.RSS_LINK || "http://fishlynn.com",
        language:"zh-cn",
        managingEditor:"codeyuyu@gmail.com (fish)",
        webMaster:"codeyuyu@gmail.com (fish)",
        generator:"codeyuyu",
        author:{
            name:"codeyuyu",
            uri:"http://fishlynn.com"
        }
    }
};

//mongodb settings
exports.db = mongoskin.db(process.env.MONGOLAB_URI || "mongodb:~~~~~~");//数据库连接串