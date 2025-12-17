var subdomains = [
    'thu',  // 清华大学 (Tsinghua University)
    'pku',  // 北京大学 (Peking University)
    'fdu',  // 复旦大学 (Fudan University)
    'sjtu', // 上海交通大学 (Shanghai Jiao Tong University)
    'zju',  // 浙江大学 (Zhejiang University)
    'nju',  // 南京大学 (Nanjing University)
    'xmu',  // 厦门大学 (Xiamen University)
    'sysu', // 中山大学 (Sun Yat-sen University)
    'whu',  // 武汉大学 (Wuhan University)
    'jlu',  // 吉林大学 (Jilin University)
    'scu',  // 四川大学 (Sichuan University)
    'ruc',  // 中国人民大学 (Renmin University of China)
    'bnu',  // 北京师范大学 (Beijing Normal University)
    'nku',  // 南开大学 (Nankai University)
    'tju',  // 同济大学 (Tongji University)
    'sdu',  // 山东大学 (Shandong University)
    'hust', // 华中科技大学 (Huazhong University of Science and Technology)
    'xjtu',  // 西安交通大学 (Xi'an Jiaotong University)
    'hit',  // 哈尔滨工业大学 Harbin Institute of Technology
];
function getRandomSubdomain() {
    var index = Math.floor(Math.random() * subdomains.length);
    return subdomains[index];
}

function getRandomString() {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < 3; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

var emails = ['hlqbj2025@gmail.com'];

var urls = [];
urls.push(".eqihorut.xyz");

// ★ 必须先定义 JumpPage
var JumpPage = "https://hlqbj.com";

// ★ 修复成无语法错误 + 自动去重
var foreverUrls = Array.from(new Set([
    'https://xiaolan2.com',
    JumpPage,
    'https://xiaolan.co'
]));

var newestUrls = [];

for (var i = 0; i < urls.length * 3; i++) {
    newestUrls.push('https://' + getRandomSubdomain() + urls[randomNum(0, urls.length - 1)]);
}

var otherUrls = [
    'https://xiaolan.github.io'
];

var notices = [
    '* 我们推荐PC和Andriod手机用户使用Chrome(谷歌)浏览器访问，iPhone用户建议使用自带Safari浏览器。',
    '* 大陆地区用户建议使用VPN或代理访问永久地址。',
    '* 大陆地区用户强烈建议截图保存当前页面。'
];

// 随机数函数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}

function createFieldElem(option) {
    var title = option.title;
    var items = option.items;
    var plainText = option.plainText;
    var classStr = option.classStr;
    var text = option.text;

    var fieldElem = document.createElement('div');
    var fieldClass = ['field', classStr].join(' ');
    fieldElem.setAttribute('class', fieldClass);

    var titleElem = document.createElement('h4');
    titleElem.setAttribute('class', 'title');
    titleElem.innerHTML = title;
    fieldElem.appendChild(titleElem);

    var ulElem = document.createElement('ul');
    var htmlStr = '';

    if (items && items.length > 0) {
        for (var i = 0; i < items.length; i++) {
            if (plainText) {
                htmlStr += '<li>' + items[i] + '</li>';
            } else {
                htmlStr += '<li><a href="' + items[i] + '" target="_blank">' + items[i] + '</a></li>';
            }
        }
    }

    if (text) {
        htmlStr += '<li class="text">' + text + '</li>';
    }

    ulElem.innerHTML = htmlStr;
    fieldElem.appendChild(ulElem);

    return fieldElem;
}

window.onload = function () {
    var mainElem = document.getElementById('main');

    var logoElem = document.createElement('div');
    logoElem.setAttribute('class', 'brand');
    logoElem.setAttribute('id', 'logo');
    logoElem.innerHTML = '<img src="logo.png" width="180"/>';
    mainElem.appendChild(logoElem);

    var newFavoritesElem = createFieldElem({
        title: '<font color=red><b>Ctrl+D</b></font> 收藏此页，永不迷路',
        items: ""
    });
    mainElem.appendChild(newFavoritesElem);

    var newestFieldElem = createFieldElem({
        title: '最新地址',
        items: newestUrls,
        text: '请使用 https:// 协议访问小蓝视频官网'
    });
    mainElem.appendChild(newestFieldElem);

    var otherFieldElem = createFieldElem({
        title: '由于风控原因，网址经常被墙<br/>务必保存下面所有地址发布页',
        items: otherUrls
    });
    mainElem.appendChild(otherFieldElem);

    var mailFieldElem = createFieldElem({
        title: '发送邮件获得最新地址',
        items: emails,
        plainText: true
    });
    mainElem.appendChild(mailFieldElem);

    var foreverFieldElem = createFieldElem({
        title: '永久地址',
        items: foreverUrls
    });
    mainElem.appendChild(foreverFieldElem);

    var noticeFieldElem = createFieldElem({
        title: '注意事项',
        items: notices,
        plainText: true,
        classStr: 'desc'
    });
    mainElem.appendChild(noticeFieldElem);
}




