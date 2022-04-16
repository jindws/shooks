import { MutableRefObject } from "react";
export function useMap<K, V>(init?: any): (Map<any, any> | {
    set: (key: K, value: V) => void;
    remove: (key: K) => void;
    clear: () => void;
    reset: () => void;
    has: (key: K) => boolean;
    size: number;
})[];
export default useMap;
export function useSet<K>(init?: []): (Set<unknown> | {
    add: (itm: K) => void;
    remove: (itm: K) => void;
    clear: () => void;
    reset: () => void;
    has: (itm: K) => boolean;
    size: number;
})[];
export default useSet;
interface Actions {
    setTrue: () => void;
    setFalse: () => void;
    set: (val?: boolean) => void;
    toggle: () => void;
}
export function useBoolean(init?: boolean): [boolean, Actions];
export default useBoolean;
interface _Actions1 {
    reset: () => void;
    set: (value: unknown) => void;
}
export function useLocalStorage(key: string, options?: {
    defaultValue?: unknown;
    force?: boolean;
}): [any, _Actions1];
export default useLocalStorage;
interface _Actions2 {
    reset: () => void;
    set: (value: unknown) => void;
}
export function useSessionStorage(key: string, options?: {
    defaultValue?: unknown;
    force?: boolean;
}): [any, _Actions2];
export default useSessionStorage;
export function useDebounce<T>(init: T | undefined, wait?: number): [T | undefined, (value: T) => void];
export default useDebounce;
export function useDebounceValue<T>(init: T | undefined, wait?: number): T | undefined;
export default useDebounceValue;
export function useThrottle<T>(init: T | undefined, wait?: number): [T | undefined, (value: T) => void];
export default useThrottle;
export function useThrottleValue<T>(init: T | undefined, wait?: number): T | undefined;
export default useThrottleValue;
export function useTitle(title: string): void;
export default useTitle;
export function useSize(ref: MutableRefObject<HTMLElement | null> | HTMLElement | null): [number, number];
export default useSize;
export function useScroll(ref: MutableRefObject<HTMLElement | null> | Document): [number, number];
export default useScroll;
interface IAction {
    start: () => void;
    wait: () => void;
    stop: () => void;
}
export function useCountDown(time: number, options?: {
    interval?: number;
    callback?: Function;
}): [number, IAction];
export default useCountDown;
/**
 * @desc 大数相加
 */
export function useAdd(...nums: (number | string)[]): string | number;
export default useAdd;
declare const _default: {
    useMap: typeof useMap;
    useSet: typeof useSet;
    useBoolean: typeof useBoolean;
    useLocalStorage: typeof useLocalStorage;
    useSessionStorage: typeof useSessionStorage;
    useDebounce: typeof useDebounce;
    useDebounceValue: typeof useDebounceValue;
    useThrottle: typeof useThrottle;
    useThrottleValue: typeof useThrottleValue;
    useTitle: typeof useTitle;
    useSize: typeof useSize;
    useScroll: typeof useScroll;
    useCountDown: typeof useCountDown;
    useAdd: typeof useAdd;
};
export default _default;

//# sourceMappingURL=shooks.d.ts.map
