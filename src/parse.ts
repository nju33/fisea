export interface FiseaOptions {
  separator: string;
}

const defaultOptions = {
  separator: ':'
};

export function parse<T extends string>(
  text: string,
  options: FiseaOptions = defaultOptions
): Record<T, string[] | undefined> & {_?: string[]} & {
  [k: string]: string[] | undefined;
} {
  const chunks = text.split(/\s+/);

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
        if (result[prop] === undefined) {
          result[prop] = [];
        }

        (result[prop] as any).push(value);
      }

      return result;
    },
    {} as Record<T, string[] | undefined> & {_?: string[]} & {
      [k: string]: string[] | undefined;
    }
  );
}
