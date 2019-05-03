## 更新日志

## [v0.5.9](https://github.com/youzan/vant-weapp/tree/v0.5.9) (2019-04-03)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.8...v0.5.9)

**Breaking changes**

- 是否有编译后的es5版本 [\#1469](https://github.com/youzan/vant-weapp/issues/1469)
- 使用tabBar组件作为小程序自定义tabBar [\#1429](https://github.com/youzan/vant-weapp/issues/1429)
- 有计划支持iphonex吗 [\#1327](https://github.com/youzan/vant-weapp/issues/1327)

**Bug Fixes**

- Slider 单击滑动区域，不能修改滑块位置 [\#1477](https://github.com/youzan/vant-weapp/issues/1477)
- swipe-cell不能触发事件 [\#1449](https://github.com/youzan/vant-weapp/issues/1449)

**Issue**

- 设置van-tabbar为自定义tabbar时，调用wx.switchTab后active激活状态异常，无法正常对应tabbar [\#1481](https://github.com/youzan/vant-weapp/issues/1481)
- swiperCell组件的event事件无效 [\#1475](https://github.com/youzan/vant-weapp/issues/1475)
- 组件用最新的开发工具，各种报错 [\#1474](https://github.com/youzan/vant-weapp/issues/1474)
- uni-app框架支持 [\#1473](https://github.com/youzan/vant-weapp/issues/1473)
- van-popup无法关闭弹出层，只能关闭遮罩层，微信小程序 [\#1472](https://github.com/youzan/vant-weapp/issues/1472)
- van-cell组件跳转深度层级页数问题？ [\#1470](https://github.com/youzan/vant-weapp/issues/1470)
- van-popup 微信苹果IOS下不显示弹出框 [\#1468](https://github.com/youzan/vant-weapp/issues/1468)
- Tab组件若被包含在 if block当中会存在bug [\#1467](https://github.com/youzan/vant-weapp/issues/1467)
- Toast引用求助 [\#1466](https://github.com/youzan/vant-weapp/issues/1466)
- tab标签页，bind:scroll如何使用 [\#1465](https://github.com/youzan/vant-weapp/issues/1465)
- 在微信小程序预览，可以详细一些吗， [\#1463](https://github.com/youzan/vant-weapp/issues/1463)
- 文档错误·checkbox自定义图标image标签缺少闭合斜杠 [\#1462](https://github.com/youzan/vant-weapp/issues/1462)
- Popup不能弹出图片 [\#1458](https://github.com/youzan/vant-weapp/issues/1458)
- vant tab页  可以加上竖着滑动 [\#1456](https://github.com/youzan/vant-weapp/issues/1456)
- 增强DatetimePicker控件 [\#1455](https://github.com/youzan/vant-weapp/issues/1455)
- Picker选择器 默认选中项 实现方式 [\#1454](https://github.com/youzan/vant-weapp/issues/1454)
- radio加载字体图标报错 [\#1453](https://github.com/youzan/vant-weapp/issues/1453)
- Picker 选择器默认值 [\#1452](https://github.com/youzan/vant-weapp/issues/1452)
- tab标签页设置背景后  下面没有内容就没有背景颜色了   而且设置了滑动   没有内容的地方也不能滑动 [\#1451](https://github.com/youzan/vant-weapp/issues/1451)
- van-field里添加popup，输入法会弹出覆盖popup，怎么禁用输入法 [\#1450](https://github.com/youzan/vant-weapp/issues/1450)
- 构建npm后编译出错提示找不到../wxs/utils.wxs [\#1448](https://github.com/youzan/vant-weapp/issues/1448)
- 如何支持 i18n ? [\#1446](https://github.com/youzan/vant-weapp/issues/1446)
- 使用tab标签页"usingComponents": {   "van-tab": "path/to/vant-weapp/dist/tab/index",   "van-tabs": "path/to/vant-weapp/dist/tabs/index" }这个组件时，设置Tabs API中的color初始化时会无效 [\#1411](https://github.com/youzan/vant-weapp/issues/1411)
- slider可以增加竖向样式的么 [\#1410](https://github.com/youzan/vant-weapp/issues/1410)
- van-slider滑动块时报 TypeError: Cannot read property 'split' of undefined [\#1398](https://github.com/youzan/vant-weapp/issues/1398)
- field组件输入速度稍快会回退 [\#1294](https://github.com/youzan/vant-weapp/issues/1294)

**Improvements**

- \[new feature\]: compile es5 dist [\#1485](https://github.com/youzan/vant-weapp/pull/1485) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Slider: fix click not work [\#1484](https://github.com/youzan/vant-weapp/pull/1484) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Icon: avoid using tag selector [\#1482](https://github.com/youzan/vant-weapp/pull/1482) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Stepper: add input-width prop [\#1480](https://github.com/youzan/vant-weapp/pull/1480) ([chenjiahan](https://github.com/chenjiahan))
- \[docs\] Checkbox: fix doc error [\#1479](https://github.com/youzan/vant-weapp/pull/1479) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\]: support safe-area-inset-top [\#1478](https://github.com/youzan/vant-weapp/pull/1478) ([rex-zsd](https://github.com/rex-zsd))
- \[build\]: fix watch not work [\#1461](https://github.com/youzan/vant-weapp/pull/1461) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] Tabbar: improve performance [\#1460](https://github.com/youzan/vant-weapp/pull/1460) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] SwipeCell: close event never emit [\#1459](https://github.com/youzan/vant-weapp/pull/1459) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Button: add hairline prop [\#1439](https://github.com/youzan/vant-weapp/pull/1439) ([chenjiahan](https://github.com/chenjiahan))

## [v0.5.8](https://github.com/youzan/vant-weapp/tree/v0.5.8) (2019-03-22)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.7...v0.5.8)

**Breaking changes**

- tabs无法设置tab的百分比高度 [\#1372](https://github.com/youzan/vant-weapp/issues/1372)
- 关于dialog，popup 事件绑定的一点建议 [\#1366](https://github.com/youzan/vant-weapp/issues/1366)

**Bug Fixes**

- van-popup组件BUG [\#1431](https://github.com/youzan/vant-weapp/issues/1431)
- van-icon的name为图片路径时，van-info的层级显示有问题 [\#1393](https://github.com/youzan/vant-weapp/issues/1393)
- mpvue中使用picker组件，配置defaultIndex无效 [\#1379](https://github.com/youzan/vant-weapp/issues/1379)
- toast.loading 异常无法点击页面 [\#1377](https://github.com/youzan/vant-weapp/issues/1377)

**Issue**

- button组件 [\#1445](https://github.com/youzan/vant-weapp/issues/1445)
- vant什么时候出支持其他小程序的UI？ [\#1444](https://github.com/youzan/vant-weapp/issues/1444)
- picker的render渲染延迟与设置选中项的冲突问题 [\#1443](https://github.com/youzan/vant-weapp/issues/1443)
- van-field 没有效果 [\#1442](https://github.com/youzan/vant-weapp/issues/1442)
- picker column 选中效果 [\#1441](https://github.com/youzan/vant-weapp/issues/1441)
- van-field 组件中的size 有哪些可选值，能不能在说明文档中列出来？ [\#1440](https://github.com/youzan/vant-weapp/issues/1440)
- 关于VantComponent内置的computed和watch的一些困惑 [\#1436](https://github.com/youzan/vant-weapp/issues/1436)
- 使用var-tabs组件，给tab自定义数据属性 [\#1432](https://github.com/youzan/vant-weapp/issues/1432)
- 使用 megalo vue tabs 吸顶失效，页面滚动事件失效 [\#1428](https://github.com/youzan/vant-weapp/issues/1428)
- van-popup组件不能完全遮盖van-field，当 type="textarea"，会透明重叠显示 [\#1427](https://github.com/youzan/vant-weapp/issues/1427)
- van-fieldt组件type="textarea"时，van-popup没有罩住，会透明重叠显示 [\#1426](https://github.com/youzan/vant-weapp/issues/1426)
- GoodsActionIcon type 属性无效 [\#1425](https://github.com/youzan/vant-weapp/issues/1425)
- Stepper 的input框为空时按退格造成maximum call stack size exceeded错误 [\#1422](https://github.com/youzan/vant-weapp/issues/1422)
- 部分机型van-filed 发送验证码按钮无法触发 [\#1421](https://github.com/youzan/vant-weapp/issues/1421)
- cell里图标上下居中显示 [\#1418](https://github.com/youzan/vant-weapp/issues/1418)
- van-button 设置 form-type 无效，表单无法提交 [\#1417](https://github.com/youzan/vant-weapp/issues/1417)
- form 表单提交无反应 [\#1416](https://github.com/youzan/vant-weapp/issues/1416)
- 受控组件不能包装为自定义组件 [\#1415](https://github.com/youzan/vant-weapp/issues/1415)
- mpvue+vant tabs标签页使用echarts切换宽度无法适应 [\#1414](https://github.com/youzan/vant-weapp/issues/1414)
- 可以增加color-picker组件吗 [\#1409](https://github.com/youzan/vant-weapp/issues/1409)
- 新增 Pagination 分页组件 [\#1406](https://github.com/youzan/vant-weapp/issues/1406)
- van-field中当设置了error=false 后，真机调试时输入框中字体仍为红色 [\#1405](https://github.com/youzan/vant-weapp/issues/1405)
- 关于van-tabbar [\#1403](https://github.com/youzan/vant-weapp/issues/1403)
- 增加Grid组件 和List组件 [\#1402](https://github.com/youzan/vant-weapp/issues/1402)
- 希望field组件的背景色可以修改 [\#1401](https://github.com/youzan/vant-weapp/issues/1401)
- 希望cell组件新增value的slot插槽 [\#1400](https://github.com/youzan/vant-weapp/issues/1400)
- \<van-button\>标签内无法正常嵌套\<text\> [\#1395](https://github.com/youzan/vant-weapp/issues/1395)
- this.setData is not a function; [\#1394](https://github.com/youzan/vant-weapp/issues/1394)
- Search 组件 this.set is not a function [\#1387](https://github.com/youzan/vant-weapp/issues/1387)
- swipe-cell在真机上左右滑动时，页面也会上下滚动 [\#1380](https://github.com/youzan/vant-weapp/issues/1380)
- bug！MPVUE使用单选框模板，将van-radio嵌套在div中循环，此时点击图标切换时，有事件产生但无打勾效果，但点击后面的字就有。 [\#1358](https://github.com/youzan/vant-weapp/issues/1358)

**Improvements**

- \[build\]: upgrade dependence & use cssnano instead of clean-css [\#1447](https://github.com/youzan/vant-weapp/pull/1447) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] ActionSheet: slot content should above cancel-text [\#1438](https://github.com/youzan/vant-weapp/pull/1438) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] optimize active color [\#1437](https://github.com/youzan/vant-weapp/pull/1437) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] GoodsAction: fix document error, fix disabled & loading not work [\#1435](https://github.com/youzan/vant-weapp/pull/1435) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Transition: behavior error when set duration zero [\#1434](https://github.com/youzan/vant-weapp/pull/1434) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Info: fix wrong style [\#1433](https://github.com/youzan/vant-weapp/pull/1433) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Stepper: update style [\#1424](https://github.com/youzan/vant-weapp/pull/1424) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Picker: defaultIndex not work [\#1423](https://github.com/youzan/vant-weapp/pull/1423) ([rex-zsd](https://github.com/rex-zsd))
- \[docs\] DatetimePicker: fix wrong example [\#1420](https://github.com/youzan/vant-weapp/pull/1420) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] SwipeCell: prevent page scroll [\#1419](https://github.com/youzan/vant-weapp/pull/1419) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Collapse: add border prop [\#1408](https://github.com/youzan/vant-weapp/pull/1408) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] CellGroup: add title prop [\#1407](https://github.com/youzan/vant-weapp/pull/1407) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Transition: overlay still show after closed [\#1404](https://github.com/youzan/vant-weapp/pull/1404) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Icon: info z-index higher than image [\#1397](https://github.com/youzan/vant-weapp/pull/1397) ([rex-zsd](https://github.com/rex-zsd))
- feat\(Search\): update style & add new prop label shape & add new slot … [\#1396](https://github.com/youzan/vant-weapp/pull/1396) ([rex-zsd](https://github.com/rex-zsd))
- Popup 添加 `transitionEnd` 事件 [\#1345](https://github.com/youzan/vant-weapp/pull/1345) ([thoamsy](https://github.com/thoamsy))

## [v0.5.7](https://github.com/youzan/vant-weapp/tree/v0.5.7) (2019-03-09)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.6...v0.5.7)

**Breaking changes**

- 建议给field 也加入 size=”large“ 毕竟cell支持，field 又是调用的cell [\#1350](https://github.com/youzan/vant-weapp/issues/1350)
- Tab组件不能设置背景颜色 [\#1313](https://github.com/youzan/vant-weapp/issues/1313)

**Bug Fixes**

- steps 第一次可以打开第二次进入后空白 提示 Error: Expect END descriptor with depth 0 but get another  [\#1336](https://github.com/youzan/vant-weapp/issues/1336)
- Area 省市区选择 显示bug [\#1318](https://github.com/youzan/vant-weapp/issues/1318)
- tab 组件bug [\#1310](https://github.com/youzan/vant-weapp/issues/1310)

**Issue**

- https://youzan.github.io/vant-weapp/\#/picker文档中 多联互动 代码错误 [\#1389](https://github.com/youzan/vant-weapp/issues/1389)
- van-tabs 如何固定在顶部？ [\#1388](https://github.com/youzan/vant-weapp/issues/1388)
- popup弹出层方法失效只有click-overlay有效果 [\#1386](https://github.com/youzan/vant-weapp/issues/1386)
- navbar图标不居中 [\#1385](https://github.com/youzan/vant-weapp/issues/1385)
- van-button 使用custom-class自定义样式无效，不能覆盖，即使使用!important 也没有效果 [\#1384](https://github.com/youzan/vant-weapp/issues/1384)
- 小程序报错:无法加载字体 [\#1383](https://github.com/youzan/vant-weapp/issues/1383)
- router-patch之后，cell的url无法跳转 [\#1382](https://github.com/youzan/vant-weapp/issues/1382)
- h5版的vant有sku，小程序的却没有，以后会出嘛？ [\#1381](https://github.com/youzan/vant-weapp/issues/1381)
- field组件输入的内容异常清空 [\#1378](https://github.com/youzan/vant-weapp/issues/1378)
- 添加搜索组件高级用法的示例 [\#1375](https://github.com/youzan/vant-weapp/issues/1375)
- example 微信开发者工具中，无法运行 [\#1373](https://github.com/youzan/vant-weapp/issues/1373)
- van-popup 在基础库 2.6.1 下报渲染层错误 [\#1371](https://github.com/youzan/vant-weapp/issues/1371)
- Tab 自定义标签 [\#1368](https://github.com/youzan/vant-weapp/issues/1368)
- Field组件 [\#1365](https://github.com/youzan/vant-weapp/issues/1365)
- 引入miniprogram-api-typings导致找不到wx的定义？ [\#1364](https://github.com/youzan/vant-weapp/issues/1364)
- 可不可以出一个不引入wxs文件的版本 [\#1361](https://github.com/youzan/vant-weapp/issues/1361)
- 好多组件都会有一个组件名-index的class 并且没有空格 [\#1360](https://github.com/youzan/vant-weapp/issues/1360)
- tabbar-item 可否提供一个插槽 [\#1357](https://github.com/youzan/vant-weapp/issues/1357)
- Failed to load font https://img.yzcdn.cn/vant/vant-icon-956c55.woff2 [\#1354](https://github.com/youzan/vant-weapp/issues/1354)
- 部分iPhone机型出现白屏 [\#1353](https://github.com/youzan/vant-weapp/issues/1353)
- Collapse 通过setData改变data数据 但是视图不更新 也不报错 完全按照官网手风琴代码书写引入 点击无任何反应 [\#1352](https://github.com/youzan/vant-weapp/issues/1352)
- tab标题的点击事件bind：click和bind：change不能同时用 [\#1339](https://github.com/youzan/vant-weapp/issues/1339)
- van-collapse嵌套van-collapse右侧图标显示不正确,内部的图标,在未展开时箭头应该朝下,现在一律朝上 [\#1307](https://github.com/youzan/vant-weapp/issues/1307)

**Improvements**

- build: compile typescript with gulp-typescript instead of babel [\#1392](https://github.com/youzan/vant-weapp/pull/1392) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Tab: add new external class nav-class、tab-class、tab-active-class [\#1391](https://github.com/youzan/vant-weapp/pull/1391) ([rex-zsd](https://github.com/rex-zsd))
- \[docs\] Picker: advanced example incorrect [\#1390](https://github.com/youzan/vant-weapp/pull/1390) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Area: incorrect initial index when set columns-num 2 [\#1376](https://github.com/youzan/vant-weapp/pull/1376) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Tab: offset-set not work、build class wrong [\#1370](https://github.com/youzan/vant-weapp/pull/1370) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Field: add new prop size [\#1369](https://github.com/youzan/vant-weapp/pull/1369) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Steps: fix render error in wechat 7.0.3 [\#1367](https://github.com/youzan/vant-weapp/pull/1367) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] Icon: optimzie round corner of some icons [\#1363](https://github.com/youzan/vant-weapp/pull/1363) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] Tabbar: optimize performance [\#1362](https://github.com/youzan/vant-weapp/pull/1362) ([chenjiahan](https://github.com/chenjiahan))

## [v0.5.6](https://github.com/youzan/vant-weapp/tree/v0.5.6) (2019-02-28)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.5...v0.5.6)

**Breaking changes**

- notify支持换行 [\#1324](https://github.com/youzan/vant-weapp/issues/1324)
- tabs加一个slot [\#1316](https://github.com/youzan/vant-weapp/issues/1316)

**Issue**

- van-picker 的setColumnValues 第二次set无效 [\#1349](https://github.com/youzan/vant-weapp/issues/1349)

**Improvements**

- \[bugfix\] Area: 修复初始化概率性失败 [\#1351](https://github.com/youzan/vant-weapp/pull/1351) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Stepper: add focus event [\#1347](https://github.com/youzan/vant-weapp/pull/1347) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Button: add loading-size prop [\#1346](https://github.com/youzan/vant-weapp/pull/1346) ([chenjiahan](https://github.com/chenjiahan))

## [v0.5.5](https://github.com/youzan/vant-weapp/tree/v0.5.5) (2019-02-26)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.4...v0.5.5)

**Bug Fixes**

- van-action-sheet带取消按钮时会有上下滚动条 [\#1312](https://github.com/youzan/vant-weapp/issues/1312)

**Issue**

- 请教：如何加入组件单元测试？ [\#1343](https://github.com/youzan/vant-weapp/issues/1343)
- tab组件支持循环渲染嘛 [\#1342](https://github.com/youzan/vant-weapp/issues/1342)
- Tabs swipe-threshold 失效 [\#1338](https://github.com/youzan/vant-weapp/issues/1338)
- 微信小程序时间选择器回掉函数没有value值\<van-datetime-picker type="date" value="{{ currentDate }}" min-date="{{ minDate }}" bind:change="onChange"/\> [\#1337](https://github.com/youzan/vant-weapp/issues/1337)
- rate和icon无法显示图标 [\#1335](https://github.com/youzan/vant-weapp/issues/1335)
- 在小程序中使用\<van-area area-list="{{ areaList }}" /\>组件,没数据展示 [\#1334](https://github.com/youzan/vant-weapp/issues/1334)
- iponeXS MAX 语言问题 [\#1331](https://github.com/youzan/vant-weapp/issues/1331)
- Dialog点击穿透如何解决？ [\#1330](https://github.com/youzan/vant-weapp/issues/1330)
- row的垂直居中有计划增加吗 [\#1329](https://github.com/youzan/vant-weapp/issues/1329)
- tabs的底线如何去掉？ [\#1328](https://github.com/youzan/vant-weapp/issues/1328)
- van-tabs,显示异常 [\#1326](https://github.com/youzan/vant-weapp/issues/1326)
- navbar的leftarrow不出现 [\#1323](https://github.com/youzan/vant-weapp/issues/1323)
- tab怎么做到懒加载 [\#1319](https://github.com/youzan/vant-weapp/issues/1319)
- datetime-picker 返回为undefined [\#1299](https://github.com/youzan/vant-weapp/issues/1299)

**Improvements**

- \[improvement\]: change miniprogram-api-typings for typescript definition [\#1344](https://github.com/youzan/vant-weapp/pull/1344) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Transition: refactor with css transition [\#1341](https://github.com/youzan/vant-weapp/pull/1341) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Button: add info type [\#1340](https://github.com/youzan/vant-weapp/pull/1340) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Tab: refactor component & add new slot [\#1332](https://github.com/youzan/vant-weapp/pull/1332) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] Notify: support word break [\#1325](https://github.com/youzan/vant-weapp/pull/1325) ([rex-zsd](https://github.com/rex-zsd))

## [v0.5.4](https://github.com/youzan/vant-weapp/tree/v0.5.4) (2019-02-18)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.3...v0.5.4)

**Issue**

- 功能使用疑问之传值是否支持data-xxx [\#1320](https://github.com/youzan/vant-weapp/issues/1320)
- 可以设置tree-select中选中的颜色，不是现在的红色 [\#1315](https://github.com/youzan/vant-weapp/issues/1315)
- toast组件无法使用 在mpvue2.0中 [\#1314](https://github.com/youzan/vant-weapp/issues/1314)
- dist错误 [\#1309](https://github.com/youzan/vant-weapp/issues/1309)
- v0.5.3版本的Notify在mpvue功做不正常了 [\#1306](https://github.com/youzan/vant-weapp/issues/1306)
- 使用van-button的时候获取不到form\_id [\#1305](https://github.com/youzan/vant-weapp/issues/1305)
- 使用van-button调用分享的时候如data-name=1,回调函数获取不到这个值 [\#1304](https://github.com/youzan/vant-weapp/issues/1304)
- List组件有计划实现吗 [\#1303](https://github.com/youzan/vant-weapp/issues/1303)
- checkbox超过一定数量卡死 [\#1302](https://github.com/youzan/vant-weapp/issues/1302)
- NoticeBar在link 模式出现错误 [\#1293](https://github.com/youzan/vant-weapp/issues/1293)
- 能否支持多货币 [\#1292](https://github.com/youzan/vant-weapp/issues/1292)
- layout布局和checkbox group一起使用导致全选 [\#1290](https://github.com/youzan/vant-weapp/issues/1290)
- van-field不支持双向绑定？ [\#1289](https://github.com/youzan/vant-weapp/issues/1289)
- Notify控件的参数与vant不一致 [\#1287](https://github.com/youzan/vant-weapp/issues/1287)
- 缺少replay图标 [\#1283](https://github.com/youzan/vant-weapp/issues/1283)

**Improvements**

- \[new feature\] Dialog: 支持openType相关参数 [\#1321](https://github.com/youzan/vant-weapp/pull/1321) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] Area: setValues in one micro task [\#1317](https://github.com/youzan/vant-weapp/pull/1317) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] ActionSheet: cancel button height [\#1311](https://github.com/youzan/vant-weapp/pull/1311) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Button: add business-id prop [\#1308](https://github.com/youzan/vant-weapp/pull/1308) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] Button: missing loading-text prop [\#1301](https://github.com/youzan/vant-weapp/pull/1301) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Button: add loading-text prop [\#1300](https://github.com/youzan/vant-weapp/pull/1300) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] SwitchCell: add active-value & inactive-value prop [\#1298](https://github.com/youzan/vant-weapp/pull/1298) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Switch: add active-value & inactive-value prop [\#1297](https://github.com/youzan/vant-weapp/pull/1297) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Area: add confirm-button-text prop [\#1296](https://github.com/youzan/vant-weapp/pull/1296) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Tab: should not have line animation when inited [\#1295](https://github.com/youzan/vant-weapp/pull/1295) ([chenjiahan](https://github.com/chenjiahan))

## [v0.5.3](https://github.com/youzan/vant-weapp/tree/v0.5.3) (2019-02-06)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.2...v0.5.3)

**Issue**

- 自定义样式 [\#1282](https://github.com/youzan/vant-weapp/issues/1282)
- van-collapse-item组件点击失效 [\#1281](https://github.com/youzan/vant-weapp/issues/1281)
- 单选框选中item时无法触发函数，控制台显示组件没有触发事件对应的方法 [\#1279](https://github.com/youzan/vant-weapp/issues/1279)
- wepy2.x引入有赞vant组件报错 [\#1275](https://github.com/youzan/vant-weapp/issues/1275)

**Improvements**

- \[build\] 0.5.3 [\#1288](https://github.com/youzan/vant-weapp/pull/1288) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] add weapp-nav icon [\#1286](https://github.com/youzan/vant-weapp/pull/1286) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Area: 修复特殊情况下初始化选项错误 [\#1285](https://github.com/youzan/vant-weapp/pull/1285) ([rex-zsd](https://github.com/rex-zsd))
- \[build\] Icon: 升级 @vant/icons [\#1284](https://github.com/youzan/vant-weapp/pull/1284) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\]: 使用hover-class定义点击态样式 [\#1280](https://github.com/youzan/vant-weapp/pull/1280) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] NoticeBar: 性能优化 [\#1278](https://github.com/youzan/vant-weapp/pull/1278) ([rex-zsd](https://github.com/rex-zsd))
- improvement: 更新weapp类型定义 [\#1277](https://github.com/youzan/vant-weapp/pull/1277) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] Dialog: 提高 zIndex 默认值为 2000 [\#1276](https://github.com/youzan/vant-weapp/pull/1276) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] TreeSelect: 优化性能 [\#1274](https://github.com/youzan/vant-weapp/pull/1274) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Button:  增加新属性 ariaLabel、增加外部样式类 hover-class、增加launchapp事件 [\#1273](https://github.com/youzan/vant-weapp/pull/1273) ([rex-zsd](https://github.com/rex-zsd))

## [v0.5.2](https://github.com/youzan/vant-weapp/tree/v0.5.2) (2019-01-20)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.1...v0.5.2)

## [v0.5.1](https://github.com/youzan/vant-weapp/tree/v0.5.1) (2019-01-10)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.0...v0.5.1)



\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*