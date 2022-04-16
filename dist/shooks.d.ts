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
declare const _default: {
    useMap: typeof useMap;
    useSet: typeof useSet;
    useBoolean: typeof useBoolean;
};
export default _default;

//# sourceMappingURL=shooks.d.ts.map
