export interface FiseaOptions {
    separator: string;
}
export declare function parse<T extends string>(text: string, options?: FiseaOptions): Record<T, string[] | undefined> & {
    _?: string[];
} & {
    [k: string]: string[] | undefined;
};
