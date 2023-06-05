export class Kata {
  static getCount(str: string): number {
    return str.replace(/^a-z/ig, '').match(/['a'|'e'|'i'|'o'|'u']/ig)?.length ?? 0
  }
}
