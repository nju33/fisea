export default class Fisea {
  constructor(keywords = []) {
    this.keywords = keywords;

    if (this.keywords.lenght === 0) {
      return;
    }

    const prefix = '(';
    const suffix = '(?:\\:[^\\s]+)?)';
    const regexpString = this.keywords
      .map(word => `${prefix}${word}${suffix}`)
      .join('|');
    this.re = new RegExp('([^\\s]+)|' + regexpString, 'g');
  }

  isTargetKeyword(keyword) {
    return this.keywords.includes(keyword);
  }

  parse(text) {
    const matches = text.match(this.re);
    const parsed = matches.reduce((result, matcheText) => {
      if (!matcheText.includes(':')) {
        if (typeof result._ === 'undefined') {
          result._ = [];
        }
        result._.push(matcheText);
        return result;
      }

      const matched = matcheText.match(/^([^:]+):?(.+$)?/);

      if (!matches.slice(1).every(item => Boolean(item))) {
        return result;
      }

      const [keyword, queryText] = matched.slice(1);

      if (!this.isTargetKeyword(keyword)) {
        if (typeof result._ === 'undefined') {
          result._ = [];
        }
        result._.push(matcheText);
        return result;
      }

      if (typeof result[keyword] === 'undefined') {
        result[keyword] = [];
      }

      result[keyword].push(queryText);
      return result;
    }, []);
    return parsed;
  }
}
