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




export {$37148af75344f418$export$2e2bcd8739ae039 as useMap};
//# sourceMappingURL=module.js.map
