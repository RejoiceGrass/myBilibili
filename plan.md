##1
list-style-type属性定义及用法

在css中，list-style-type属性是使用来设置列表项标记的类型，在有序列表和无序列表中经常都会使用该属性。

目前，所有主流浏览器都支持list-style-type属性，但是任何版本的Internet Explorer（包括 IE8）都不支持属性值"decimal-leading-zero"、"lower-greek"、"lower-latin"、"upper-latin"、"armenian"、"georgian" 或 "inherit"；

如果需要同时设置多个列表属性，可以使用list-style属性，list-style属性可以在一个声明中同时设置list-style-type（列表项标记的类型）, list-style-position（何处放置列表项标记）, list-style-image（图像来替换列表项的标记）属性；

list-style-type属性语法格式

css语法：list-style-type:none/disc/circle/square/decimal/decimal-leading-zero/lower-roman/upper-roman/lower-alpha/upper-alpha/lower-greek/lower-latin/upper-latin/hebrew/armenian/georgian/cjk-ideographic/hiragana/katakana/hiragana-iroha/katakana-iroha;
JavaScript语法：object.style.listStyleType="square"；
属性值说明

none：无标记。
disc：默认。标记是实心圆。
circle：标记是空心圆。
square：标记是实心方块。
decimal：标记是数字。
decimal-leading-zero：0开头的数字标记。(01, 02, 03, 等。)
lower-roman：小写罗马数字(i, ii, iii, iv, v, 等。)
upper-roman：大写罗马数字(I, II, III, IV, V, 等。)
lower-alpha：小写英文字母The marker is lower-alpha (a, b, c, d, e, 等。)
upper-alpha：大写英文字母The marker is upper-alpha (A, B, C, D, E, 等。)
lower-greek：小写希腊字母(alpha, beta, gamma, 等。)
lower-latin：小写拉丁字母(a, b, c, d, e, 等。)
upper-latin：大写拉丁字母(A, B, C, D, E, 等。)
hebrew：传统的希伯来编号方式
armenian： 传统的亚美尼亚编号方式
georgian：传统的乔治亚编号方式(an, ban, gan, 等。)
cjk-ideographic：简单的表意数字
hiragana：标记是：a, i, u, e, o, ka, ki, 等。（日文片假名）
katakana：标记是：A, I, U, E, O, KA, KI, 等。（日文片假名）
hiragana-iroha ：标记是：i, ro, ha, ni, ho, he, to, 等。（日文片假名）
katakana-iroha：标记是：I, RO, HA, NI, HO, HE, TO, 等。（日文片假名）