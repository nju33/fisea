export function format(parsed: {[k: string]: string[]}): string {
  const keys = Object.keys(parsed);

  const result = keys.reduce((result, key) => {
    const chunk = parsed[key]
      .map(value => {
        if (key === '_') {
          return value;
        }

        return `${key}:${value}`;
      })
      .join(' ');
    result += ` ${chunk}`;
    return result;
  }, '');

  return result.trim();
}
