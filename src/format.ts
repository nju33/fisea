const KEYLESS_SYMBOL = '_';

/**
 * @param parsed object to format
 */
export function format(parsed: {[x: string]: string[]}): string {
  const keys = Object.keys(parsed);

  const normalizedAndUniqKeys = Array.from(
    keys.reduce((acc, key) => {
      let currentKey = key;
      if (/[A-Z]/.test(key)) {
        currentKey = key.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
        parsed[currentKey] = parsed[key];
      }

      return acc.add(currentKey);
    }, new Set<string>()),
  );

  const stringResult = normalizedAndUniqKeys.reduce((result, key) => {
    // tslint:disable-next-line:no-typeof-undefined
    if (typeof parsed[key] === 'undefined') {
      return result;
    }

    if (key === KEYLESS_SYMBOL) {
      return result + ` ${parsed[key]}`;
    }

    const dictionary = parsed[key].reduce(
      (acc, value) => {
        let realValue = value;
        if (/\s/.test(value)) {
          realValue = `"${value}"`;
        }

        acc[key] = realValue;
        return acc;
      },
      {} as {[x: string]: string},
    );

    const chunk = Object.keys(dictionary)
      .map(realProp => {
        return `${realProp}:${dictionary[realProp]}`;
      })
      .join(' ');

    return `${result} ${chunk}`;
  }, '');

  return stringResult.trim();
}
