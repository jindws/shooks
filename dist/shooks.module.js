import {useMemo as $c7J86$useMemo, useState as $c7J86$useState, useEffect as $c7J86$useEffect} from "react";


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



function $994ff314909f83f5$var$useBoolean(init) {
    var intiData = $c7J86$useMemo(function() {
        return !!init;
    }, []);
    var _a = $c7J86$useState(intiData), state = _a[0], setState = _a[1];
    var actions = $c7J86$useMemo(function() {
        var setTrue = function() {
            return setState(true);
        };
        var setFalse = function() {
            return setState(false);
        };
        var toggle = function() {
            return setState(function(prevState) {
                return !prevState;
            });
        };
        return {
            toggle: toggle,
            set: function(val) {
                return setState(!!val);
            },
            setTrue: setTrue,
            setFalse: setFalse
        };
    }, []);
    return [
        state,
        actions
    ];
}
var $994ff314909f83f5$export$2e2bcd8739ae039 = $994ff314909f83f5$var$useBoolean;



function $8c8dfaefed926d3a$var$useStorage(type, key, options) {
    var init = $c7J86$useMemo(function() {
        var localData = type[key];
        var _a = options || {}, force = _a.force, defaultValue = _a.defaultValue;
        if (defaultValue !== undefined) {
            if (localData && !force) return JSON.parse(type[key]);
            type[key] = JSON.stringify(defaultValue);
            return defaultValue;
        }
        if (force || !localData) return "";
        return JSON.parse(type[key]);
    }, []);
    var _a1 = $c7J86$useState(init), state = _a1[0], setState = _a1[1];
    $c7J86$useEffect(function() {
        type[key] = JSON.stringify(state);
    }, [
        state
    ]);
    var actions = $c7J86$useMemo(function() {
        var reset = function() {
            return setState(init);
        };
        var set = function(value) {
            return setState(value);
        };
        return {
            reset: reset,
            set: set
        };
    }, []);
    return [
        state,
        actions
    ];
}
var $8c8dfaefed926d3a$export$2e2bcd8739ae039 = $8c8dfaefed926d3a$var$useStorage;


function $717fd9294a8176d4$var$useLocalStorage(key, options) {
    return $8c8dfaefed926d3a$export$2e2bcd8739ae039(localStorage, key, options);
}
var $717fd9294a8176d4$export$2e2bcd8739ae039 = $717fd9294a8176d4$var$useLocalStorage;



function $9571cf3dfe01e6c0$var$useSessionStorage(key, options) {
    return $8c8dfaefed926d3a$export$2e2bcd8739ae039(sessionStorage, key, options);
}
var $9571cf3dfe01e6c0$export$2e2bcd8739ae039 = $9571cf3dfe01e6c0$var$useSessionStorage;



function $80a4feb8db8b4d99$var$useDebounce(init, wait) {
    if (wait === void 0) wait = 1000;
    var _a = $c7J86$useState(init), value = _a[0], setValue = _a[1];
    var update = $c7J86$useMemo(function() {
        var last;
        return function(newValue) {
            clearTimeout(last);
            last = setTimeout(function() {
                return setValue(newValue);
            }, wait);
        };
    }, []);
    return [
        value,
        update
    ];
}
var $80a4feb8db8b4d99$export$2e2bcd8739ae039 = $80a4feb8db8b4d99$var$useDebounce;


var $a85bc9c6e2eb9625$export$2e2bcd8739ae039 = {
    useMap: $37148af75344f418$export$2e2bcd8739ae039,
    useSet: $b0c9ddc93a9d9080$export$2e2bcd8739ae039,
    useBoolean: $994ff314909f83f5$export$2e2bcd8739ae039,
    useLocalStorage: $717fd9294a8176d4$export$2e2bcd8739ae039,
    useSessionStorage: $9571cf3dfe01e6c0$export$2e2bcd8739ae039,
    useDebounce: $80a4feb8db8b4d99$export$2e2bcd8739ae039
};


export {$a85bc9c6e2eb9625$export$2e2bcd8739ae039 as default, $37148af75344f418$export$2e2bcd8739ae039 as useMap, $b0c9ddc93a9d9080$export$2e2bcd8739ae039 as useSet, $994ff314909f83f5$export$2e2bcd8739ae039 as useBoolean, $717fd9294a8176d4$export$2e2bcd8739ae039 as useLocalStorage, $9571cf3dfe01e6c0$export$2e2bcd8739ae039 as useSessionStorage, $80a4feb8db8b4d99$export$2e2bcd8739ae039 as useDebounce};
//# sourceMappingURL=shooks.module.js.map
