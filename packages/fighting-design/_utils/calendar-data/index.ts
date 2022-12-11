/**
 * 星期
 */
export const WEEK_DATA = ['日', '一', '二', '三', '四', '五', '六'] as const

/**
 * 农历 1900-2100 的润大小信息表
 */
export const LUNAR_INFO = [
  0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255,
  0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
  0x06566, 0x0d4a0, 0x0ea50, 0x16a95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4,
  0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4,
  0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552,
  0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0,
  0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
  0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, 0x092e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0,
  0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, 0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,
  0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, 0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0,
  0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, 0x0d520
] as const

/**
 * 天干地支 - 天干速查表
 */
export const DAY_GAN = ['\u7532', '\u4e59', '\u4e19', '\u4e01', '\u620a', '\u5df1', '\u5e9a', '\u8f9b', '\u58ec', '\u7678'] as const

/**
 * 天干地支 - 地支速查表
 */
export const DAY_ZHI = [
  '\u5b50',
  '\u4e11',
  '\u5bc5',
  '\u536f',
  '\u8fb0',
  '\u5df3',
  '\u5348',
  '\u672a',
  '\u7533',
  '\u9149',
  '\u620c',
  '\u4ea5'
] as const

/**
 * 天干地支 - 生肖速查表
 *
 * ['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪']
 */
export const ANIMALS = [
  '\u9f20',
  '\u725b',
  '\u864e',
  '\u5154',
  '\u9f99',
  '\u86c7',
  '\u9a6c',
  '\u7f8a',
  '\u7334',
  '\u9e21',
  '\u72d7',
  '\u732a'
] as const

/**
 * 阳历节日
 */
export const SOLAR_CALENDAR_FESTIVE: Record<string, { title: string }> = {
  '1-1': { title: '元旦节' },
  '2-14': { title: '情人节' },
  '5-1': { title: '劳动节' },
  '5-4': { title: '青年节' },
  '6-1': { title: '儿童节' },
  '9-10': { title: '教师节' },
  '10-1': { title: '国庆节' },
  '12-25': { title: '圣诞节' },
  '3-8': { title: '妇女节' },
  '3-12': { title: '植树节' },
  '4-1': { title: '愚人节' },
  '5-12': { title: '护士节' },
  '7-1': { title: '建党节' },
  '8-1': { title: '建军节' },
  '12-24': { title: '平安夜' }
} as const

/**
 * 农历节日
 */
export const LUNAR_FESTIVE: Record<string, { title: string }> = {
  '12-30': { title: '除夕' },
  '1-1': { title: '春节' },
  '1-15': { title: '元宵节' },
  '2-2': { title: '龙抬头' },
  '5-5': { title: '端午节' },
  '7-7': { title: '七夕节' },
  '7-15': { title: '中元节' },
  '8-15': { title: '中秋节' },
  '9-9': { title: '重阳节' },
  '10-1': { title: '寒衣节' },
  '10-15': { title: '下元节' },
  '12-8': { title: '腊八节' },
  '12-23': { title: '北方小年' },
  '12-24': { title: '南方小年' }
} as const

/**
 * 二十四节气
 *
 * ['小寒','大寒','立春','雨水','惊蛰','春分','清明','谷雨','立夏','小满','芒种','夏至','小暑','大暑','立秋','处暑','白露','秋分','寒露','霜降','立冬','小雪','大雪','冬至']
 */
export const SOLAR_TERM = [
  '\u5c0f\u5bd2',
  '\u5927\u5bd2',
  '\u7acb\u6625',
  '\u96e8\u6c34',
  '\u60ca\u86f0',
  '\u6625\u5206',
  '\u6e05\u660e',
  '\u8c37\u96e8',
  '\u7acb\u590f',
  '\u5c0f\u6ee1',
  '\u8292\u79cd',
  '\u590f\u81f3',
  '\u5c0f\u6691',
  '\u5927\u6691',
  '\u7acb\u79cb',
  '\u5904\u6691',
  '\u767d\u9732',
  '\u79cb\u5206',
  '\u5bd2\u9732',
  '\u971c\u964d',
  '\u7acb\u51ac',
  '\u5c0f\u96ea',
  '\u5927\u96ea',
  '\u51ac\u81f3'
] as const

/**
 * 数字转中文速查表
 *
 * ['日','一','二','三','四','五','六','七','八','九','十']
 */
export const CONVERT_DIGIT_CHINES = [
  '\u65e5',
  '\u4e00',
  '\u4e8c',
  '\u4e09',
  '\u56db',
  '\u4e94',
  '\u516d',
  '\u4e03',
  '\u516b',
  '\u4e5d',
  '\u5341'
] as const

/**
 * 日期转农历称呼速查表
 *
 * ['初','十','廿','卅']
 */
export const DATE_CHANG_LUNAR_CALENDAR = ['\u521d', '\u5341', '\u5eff', '\u5345'] as const

/**
 * 月份转农历称呼速查表
 *
 * ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
 */
export const CHANG_MONTH_LUNAR_CALENDAR = [
  '\u6b63',
  '\u4e8c',
  '\u4e09',
  '\u56db',
  '\u4e94',
  '\u516d',
  '\u4e03',
  '\u516b',
  '\u4e5d',
  '\u5341',
  '\u51ac',
  '\u814a'
] as const

/**
 * 1900-2100 各年的 24 节气日期速查表
 */
export const SOLAR_TERM_LIST = [
  '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c3598082c95f8c965cc920f',
  '97bd0b06bdb0722c965ce1cfcc920f',
  'b027097bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c359801ec95f8c965cc920f',
  '97bd0b06bdb0722c965ce1cfcc920f',
  'b027097bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c359801ec95f8c965cc920f',
  '97bd0b06bdb0722c965ce1cfcc920f',
  'b027097bd097c36b0b6fc9274c91aa',
  '9778397bd19801ec9210c965cc920e',
  '97b6b97bd19801ec95f8c965cc920f',
  '97bd09801d98082c95f8e1cfcc920f',
  '97bd097bd097c36b0b6fc9210c8dc2',
  '9778397bd197c36c9210c9274c91aa',
  '97b6b97bd19801ec95f8c965cc920e',
  '97bd09801d98082c95f8e1cfcc920f',
  '97bd097bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36c9210c9274c91aa',
  '97b6b97bd19801ec95f8c965cc920e',
  '97bcf97c3598082c95f8e1cfcc920f',
  '97bd097bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36c9210c9274c91aa',
  '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c3598082c95f8c965cc920f',
  '97bd097bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c3598082c95f8c965cc920f',
  '97bd097bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c359801ec95f8c965cc920f',
  '97bd097bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c359801ec95f8c965cc920f',
  '97bd097bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c359801ec95f8c965cc920f',
  '97bd097bd07f595b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9210c8dc2',
  '9778397bd19801ec9210c9274c920e',
  '97b6b97bd19801ec95f8c965cc920f',
  '97bd07f5307f595b0b0bc920fb0722',
  '7f0e397bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36c9210c9274c920e',
  '97b6b97bd19801ec95f8c965cc920f',
  '97bd07f5307f595b0b0bc920fb0722',
  '7f0e397bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36c9210c9274c91aa',
  '97b6b97bd19801ec9210c965cc920e',
  '97bd07f1487f595b0b0bc920fb0722',
  '7f0e397bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e',
  '97bcf7f1487f595b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e',
  '97bcf7f1487f595b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e',
  '97bcf7f1487f531b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e',
  '97bcf7f1487f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c9274c920e',
  '97bcf7f0e47f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722',
  '9778397bd097c36b0b6fc9210c91aa',
  '97b6b97bd197c36c9210c9274c920e',
  '97bcf7f0e47f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722',
  '9778397bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36c9210c9274c920e',
  '97b6b7f0e47f531b0723b0b6fb0722',
  '7f0e37f5307f595b0b0bc920fb0722',
  '7f0e397bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36b0b70c9274c91aa',
  '97b6b7f0e47f531b0723b0b6fb0721',
  '7f0e37f1487f595b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc9210c8dc2',
  '9778397bd097c36b0b6fc9274c91aa',
  '97b6b7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f595b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa',
  '97b6b7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa',
  '97b6b7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa',
  '97b6b7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa',
  '97b6b7f0e47f531b0723b0787b0721',
  '7f0e27f0e47f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722',
  '9778397bd097c36b0b6fc9210c91aa',
  '97b6b7f0e47f149b0723b0787b0721',
  '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722',
  '9778397bd097c36b0b6fc9210c8dc2',
  '977837f0e37f149b0723b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722',
  '7f0e37f5307f595b0b0bc920fb0722',
  '7f0e397bd097c35b0b6fc9210c8dc2',
  '977837f0e37f14998082b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e37f1487f595b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc9210c8dc2',
  '977837f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722',
  '977837f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722',
  '977837f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722',
  '977837f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722',
  '977837f0e37f14998082b0787b06bd',
  '7f07e7f0e47f149b0723b0787b0721',
  '7f0e27f0e47f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722',
  '977837f0e37f14998082b0723b06bd',
  '7f07e7f0e37f149b0723b0787b0721',
  '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722',
  '977837f0e37f14898082b0723b02d5',
  '7ec967f0e37f14998082b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722',
  '7f0e37f1487f595b0b0bb0b6fb0722',
  '7f0e37f0e37f14898082b0723b02d5',
  '7ec967f0e37f14998082b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722',
  '7f0e37f1487f531b0b0bb0b6fb0722',
  '7f0e37f0e37f14898082b0723b02d5',
  '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e37f1487f531b0b0bb0b6fb0722',
  '7f0e37f0e37f14898082b072297c35',
  '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e37f0e37f14898082b072297c35',
  '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e37f0e366aa89801eb072297c35',
  '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f149b0723b0787b0721',
  '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e37f0e366aa89801eb072297c35',
  '7ec967f0e37f14998082b0723b06bd',
  '7f07e7f0e47f149b0723b0787b0721',
  '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e37f0e366aa89801eb072297c35',
  '7ec967f0e37f14998082b0723b06bd',
  '7f07e7f0e37f14998083b0787b0721',
  '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e37f0e366aa89801eb072297c35',
  '7ec967f0e37f14898082b0723b02d5',
  '7f07e7f0e37f14998082b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722',
  '7f0e36665b66aa89801e9808297c35',
  '665f67f0e37f14898082b0723b02d5',
  '7ec967f0e37f14998082b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722',
  '7f0e36665b66a449801e9808297c35',
  '665f67f0e37f14898082b0723b02d5',
  '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e36665b66a449801e9808297c35',
  '665f67f0e37f14898082b072297c35',
  '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e26665b66a449801e9808297c35',
  '665f67f0e37f1489801eb072297c35',
  '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722'
] as const
