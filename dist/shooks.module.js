import {useMemo as $c7J86$useMemo, useState as $c7J86$useState} from "react";


function $37148af75344f418$var$useMap(init) {
    var intiData = $c7J86$useMemo(function() {
        if (!init || !Array.isArray(init)) return new Map();
        return new Map(init);
    }, []);
    var _a = $c7J86$useState(intiData), map = _a[0], setMap = _a[1];
    var remove = function(key) {
        setMap(function(prev) {
            var temp = new Map(prev);
            temp.delete(key);
            return temp;
        });
    };
    var set = function(key, value) {
        setMap(function(prev) {
            var temp = new Map(prev);
            temp.set(key, value);
            return temp;
        });
    };
    var clear = function() {
        setMap(function(prev) {
            var temp = new Map(prev);
            temp.clear();
            return temp;
        });
    };
    var reset = function() {
        return setMap(new Map(intiData));
    };
    var has = function(key) {
        return map.has(key);
    };
    var size = $c7J86$useMemo(function() {
        return map.size;
    }, [
        map
    ]);
    return [
        map,
        {
            set: set,
            remove: remove,
            clear: clear,
            reset: reset,
            has: has,
            size: size
        }, 
    ];
}
var $37148af75344f418$export$2e2bcd8739ae039 = $37148af75344f418$var$useMap;



function $b0c9ddc93a9d9080$var$useSet(init) {
    var intiData = $c7J86$useMemo(function() {
        if (!init || !Array.isArray(init)) return new Set();
        return new Set(init);
    }, []);
    var _a = $c7J86$useState(intiData), set = _a[0], setSet = _a[1];
    var remove = function(itm) {
        setSet(function(prev) {
            set.delete(itm);
            return set;
        });
    };
    var add = function(itm) {
        setSet(function(prev) {
            var temp = new Set(prev);
            temp.add(itm);
            return temp;
        });
    };
    var clear = function() {
        setSet(function(prev) {
            return new Set();
        });
    };
    var reset = function() {
        return setSet(new Set(intiData));
    };
    var has = function(itm) {
        return set.has(itm);
    };
    var size = $c7J86$useMemo(function() {
        return set.size;
    }, [
        set
    ]);
    return [
        set,
        {
            add: add,
            remove: remove,
            clear: clear,
            reset: reset,
            has: has,
            size: size
        }, 
    ];
}
var $b0c9ddc93a9d9080$export$2e2bcd8739ae039 = $b0c9ddc93a9d9080$var$useSet;


var $a85bc9c6e2eb9625$export$2e2bcd8739ae039 = {
    useMap: $37148af75344f418$export$2e2bcd8739ae039,
    useSet: $b0c9ddc93a9d9080$export$2e2bcd8739ae039
};


export {$a85bc9c6e2eb9625$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=shooks.module.js.map
