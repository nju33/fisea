export interface FiseaOptions {
  separator: string;
}

const defaultOptions = {
  separator: ':'
};

export function parse(
  text: string,
  options: FiseaOptions = defaultOptions
): {[k: string]: string[] | undefined} {
  const chunks = text
    .replace(/'.*?'|".*?"/g, match => match.replace(/\s/g, '_____'))
    .split(/\s+/)
    .map(chunk => chunk.replace(/_____/g, ' '))
    .map(chunk => chunk.replace(/'|"/g, ''));

  return chunks.reduce(
    (result, chunk) => {
      const splitted = chunk.split(options.separator);
      if (splitted.length === 1) {
        if (result._ === undefined) {
          result._ = [];
        }

        result._.push(splitted[0]);
      } else {
        const [prop, value] = splitted;
        let camelcaseProp = null;
        if (result[prop] === undefined) {
          result[prop] = [];
          if (/-/.test(prop)) {
            camelcaseProp = prop.replace(/-\w/, match =>
              match.slice(1).toUpperCase()
            );
            result[camelcaseProp] = [];
          }
        }

        (result[prop] as any).push(value);
        if (camelcaseProp !== null) {
          (result[camelcaseProp] as any).push(value);
        }
      }

      return result;
    },
    {} as {[k: string]: string[] | undefined}
  );
}
