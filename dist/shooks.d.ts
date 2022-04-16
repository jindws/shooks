declare function useMap<K, V>(init?: any): (Map<any, any> | {
    set: (key: K, value: V) => void;
    remove: (key: K) => void;
    clear: () => void;
    reset: () => void;
    has: (key: K) => boolean;
    size: number;
})[];
declare function useSet<K>(init?: []): (Set<unknown> | {
    add: (itm: K) => void;
    remove: (itm: K) => void;
    clear: () => void;
    reset: () => void;
    has: (itm: K) => boolean;
    size: number;
})[];
declare const _default: {
    useMap: typeof useMap;
    useSet: typeof useSet;
};
export default _default;

//# sourceMappingURL=shooks.d.ts.map
