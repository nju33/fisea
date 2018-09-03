export interface FiseaOptions {
    separator: string;
}
export declare function parse(text: string, options?: FiseaOptions): {
    [k: string]: string[] | undefined;
};
