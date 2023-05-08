/** 数据类型 */
export const dataTypeLabels: { [K in TypeUtils.DataTypeStringKey]: TypeUtils.DataTypeString<K> } = {
  string: '[object String]',
  number: '[object Number]',
  boolean: '[object Boolean]',
  null: '[object Null]',
  undefined: '[object Undefined]',
  symbol: '[object Symbol]',
  bigInt: '[object BigInt]',
  object: '[object Object]',
  function: '[object Function]',
  array: '[object Array]',
  date: '[object Date]',
  regExp: '[object RegExp]',
  promise: '[object Promise]',
  set: '[object Set]',
  map: '[object Map]',
  file: '[object File]',
}

/** 语言类型 */
export const languageType = {
  zh: 'zh-CN',
  en: 'en',
}
