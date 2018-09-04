export function format(parsed: {[k: string]: string[]}): string {
  const keys = Object.keys(parsed);

  const stringResult = keys
    .filter(key => !/[A-Z]/.test(key))
    .reduce((result, key) => {
      const chunk = parsed[key]
        .map(value => {
          if (key === '_') {
            return value;
          }

          if (/[A-Z]/.test(key)) {
            const chaincaseKey = key.replace(
              /[A-Z]/g,
              match => `-${match.toLowerCase()}`
            );
          }

          let realValue = value;
          if (/\s/.test(value)) {
            realValue = `"${value}"`;
          }

          return `${key}:${realValue}`;
        })
        .join(' ');

      const nextString = `${result} ${chunk}`;
      return nextString;
    }, '');

  return stringResult.trim();
}
