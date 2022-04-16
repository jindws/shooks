import {useMemo as $c7J86$useMemo, useState as $c7J86$useState, useEffect as $c7J86$useEffect, useRef as $c7J86$useRef} from "react";


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



function $1ed12b17764f4877$var$useStorage(type, key, options) {
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
var $1ed12b17764f4877$export$2e2bcd8739ae039 = $1ed12b17764f4877$var$useStorage;


function $717fd9294a8176d4$var$useLocalStorage(key, options) {
    return $1ed12b17764f4877$export$2e2bcd8739ae039(localStorage, key, options);
}
var $717fd9294a8176d4$export$2e2bcd8739ae039 = $717fd9294a8176d4$var$useLocalStorage;



function $9571cf3dfe01e6c0$var$useSessionStorage(key, options) {
    return $1ed12b17764f4877$export$2e2bcd8739ae039(sessionStorage, key, options);
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



function $f92ff3bc9f1f5c1f$var$useDebounceValue(init, wait) {
    if (wait === void 0) wait = 1000;
    var _a = $c7J86$useState(init), value = _a[0], setValue = _a[1];
    $c7J86$useEffect(function() {
        update(init);
    }, [
        init
    ]);
    var update = $c7J86$useMemo(function() {
        var last;
        return function(newValue) {
            clearTimeout(last);
            last = setTimeout(function() {
                setValue(newValue);
            }, wait);
        };
    }, []);
    return value;
}
var $f92ff3bc9f1f5c1f$export$2e2bcd8739ae039 = $f92ff3bc9f1f5c1f$var$useDebounceValue;



function $b3cada967fbdc80a$var$useThrottle(init, wait) {
    if (wait === void 0) wait = 1000;
    var _a = $c7J86$useState(init), value = _a[0], setValue = _a[1];
    var update = $c7J86$useMemo(function() {
        var time = Date.now();
        return function(newValue) {
            if (Date.now() - time < wait) return;
            setValue(newValue);
            time = Date.now();
        };
    }, []);
    return [
        value,
        update
    ];
}
var $b3cada967fbdc80a$export$2e2bcd8739ae039 = $b3cada967fbdc80a$var$useThrottle;



function $ed974ba9f6cef09e$var$useThrottleValue(init, wait) {
    if (wait === void 0) wait = 1000;
    var _a = $c7J86$useState(init), value = _a[0], setValue = _a[1];
    $c7J86$useEffect(function() {
        update(init);
    }, [
        init
    ]);
    var update = $c7J86$useMemo(function() {
        var time = Date.now();
        return function(newValue) {
            if (Date.now() - time < wait) return;
            setValue(newValue);
            time = Date.now();
        };
    }, []);
    return value;
}
var $ed974ba9f6cef09e$export$2e2bcd8739ae039 = $ed974ba9f6cef09e$var$useThrottleValue;



function $837ea68df79e1827$var$useTitle(title) {
    $c7J86$useEffect(function() {
        document.title = title;
    }, []);
}
var $837ea68df79e1827$export$2e2bcd8739ae039 = $837ea68df79e1827$var$useTitle;



function $a59b9f750e292331$var$useSize(ref) {
    var _a1 = $c7J86$useState([
        0,
        0
    ]), data1 = _a1[0], setData = _a1[1];
    if (!window.ResizeObserver) return data1;
    $c7J86$useEffect(function() {
        var dom;
        if (!ref) return;
        else if ("current" in ref) {
            if (!ref.current) return;
            dom = ref.current;
        } else dom = ref;
        var resizeObserver = new ResizeObserver(function(data) {
            var _a = data[0].contentRect, width = _a.width, height = _a.height;
            setData([
                width,
                height
            ]);
        });
        console.log("don", dom);
        resizeObserver.observe(dom);
        return function() {
            return resizeObserver.unobserve(dom);
        };
    }, []);
    return data1;
}
var $a59b9f750e292331$export$2e2bcd8739ae039 = $a59b9f750e292331$var$useSize;



function $9b8a6b4a37073e24$var$useScroll(ref) {
    var _a1 = $c7J86$useState(0), left = _a1[0], setLeft = _a1[1];
    var _b = $c7J86$useState(0), top = _b[0], setTop = _b[1];
    var isRef = $c7J86$useMemo(function() {
        return "current" in ref;
    }, []);
    $c7J86$useEffect(function() {
        var dom = isRef ? ref.current : ref;
        if (!dom) return;
        dom.onscroll = function() {
            var ele = dom;
            if (!isRef) ele = ele.scrollingElement;
            var _a = ele, scrollLeft = _a.scrollLeft, scrollTop = _a.scrollTop;
            setLeft(scrollLeft);
            setTop(scrollTop);
        };
    }, []);
    return [
        left,
        top
    ];
}
var $9b8a6b4a37073e24$export$2e2bcd8739ae039 = $9b8a6b4a37073e24$var$useScroll;



function $8b344e2b60a44e70$var$useCountDown(time, options) {
    if (options === void 0) options = {};
    var _a = $c7J86$useState(Math.max(time, 0)), remain = _a[0], setRemain = _a[1];
    var _remain = $c7J86$useRef(remain);
    var _interval = $c7J86$useMemo(function() {
        return Math.min(Math.max(1, Math.floor(options.interval || 1)), time);
    }, []);
    $c7J86$useEffect(function() {
        _remain.current = remain;
    }, [
        remain
    ]);
    var _b = $c7J86$useState(false), running = _b[0], setRunning = _b[1];
    $c7J86$useEffect(function() {
        action.start();
    }, []);
    var action = $c7J86$useMemo(function() {
        var si;
        return function() {
            var start = function() {
                if (running) return;
                if (!_remain.current) setRemain(time);
                si = setInterval(function() {
                    setRemain(function(prevState) {
                        var result = prevState - _interval;
                        if (result <= 0) {
                            clearInterval(si);
                            setRunning(false);
                            options.callback && options.callback();
                        }
                        return result;
                    });
                }, Math.min(_interval, _remain.current || 1) * 1000);
            };
            var wait = function() {
                clearInterval(si);
                setRunning(false);
            };
            var stop = function() {
                clearInterval(si);
                setRemain(time);
                setRunning(false);
            };
            return {
                start: start,
                wait: wait,
                stop: stop
            };
        }();
    }, []);
    return [
        remain,
        action
    ];
}
var $8b344e2b60a44e70$export$2e2bcd8739ae039 = $8b344e2b60a44e70$var$useCountDown;



function $2faca32e6971e721$var$useAdd() {
    var nums1 = [];
    for(var _i1 = 0; _i1 < arguments.length; _i1++)nums1[_i1] = arguments[_i1];
    var _a1 = $c7J86$useState(nums1[0] || 0), result1 = _a1[0], setResult = _a1[1];
    function addNow() {
        var nums = [];
        for(var _i = 0; _i < arguments.length; _i++)nums[_i] = arguments[_i];
        if (nums.length <= 1) return;
        var arr = [];
        var maxL = 0;
        nums.forEach(function(itm) {
            itm = String(itm);
            arr.push(itm.split("").reverse());
            if (itm.length > maxL) maxL = itm.length;
        });
        var result = new Array(maxL + 1).fill(0).map(function() {
            return [
                0
            ];
        });
        for(var i = 0; i < maxL; i++){
            for(var _a = 0, arr_1 = arr; _a < arr_1.length; _a++){
                var itm1 = arr_1[_a];
                result[i].push(itm1[i] || 0);
            }
            result[i] = result[i].reduce(function(a, b) {
                return +a + +b;
            });
            result[i + 1] = [
                Math.floor(result[i] / 10)
            ];
            result[i] = result[i] % 10;
        }
        result[maxL] = result[maxL].reduce(function(a, b) {
            return +a + +b;
        });
        setResult(result.reverse().join("").replace(/^0*/g, ""));
    }
    $c7J86$useEffect(function() {
        return addNow.apply(void 0, nums1);
    }, []);
    function add(num) {
        addNow(result1, num);
    }
    return [
        result1,
        add
    ];
}
var $2faca32e6971e721$export$2e2bcd8739ae039 = $2faca32e6971e721$var$useAdd;



function $0fe741a2572793a0$var$useRandom() {
    var data = [];
    for(var _i = 0; _i < arguments.length; _i++)data[_i] = arguments[_i];
    var length = $c7J86$useMemo(function() {
        return data.length;
    }, [
        data
    ]);
    var _a = $c7J86$useState(data[Math.floor(Math.random() * length)]), result = _a[0], upResult = _a[1];
    function update() {
        var it = data[Math.floor(Math.random() * length)];
        upResult(it);
    }
    return [
        result,
        update
    ];
}
var $0fe741a2572793a0$export$2e2bcd8739ae039 = $0fe741a2572793a0$var$useRandom;


var $a85bc9c6e2eb9625$export$2e2bcd8739ae039 = {
    useMap: $37148af75344f418$export$2e2bcd8739ae039,
    useSet: $b0c9ddc93a9d9080$export$2e2bcd8739ae039,
    useBoolean: $994ff314909f83f5$export$2e2bcd8739ae039,
    useLocalStorage: $717fd9294a8176d4$export$2e2bcd8739ae039,
    useSessionStorage: $9571cf3dfe01e6c0$export$2e2bcd8739ae039,
    useDebounce: $80a4feb8db8b4d99$export$2e2bcd8739ae039,
    useDebounceValue: $f92ff3bc9f1f5c1f$export$2e2bcd8739ae039,
    useThrottle: $b3cada967fbdc80a$export$2e2bcd8739ae039,
    useThrottleValue: $ed974ba9f6cef09e$export$2e2bcd8739ae039,
    useTitle: $837ea68df79e1827$export$2e2bcd8739ae039,
    useSize: $a59b9f750e292331$export$2e2bcd8739ae039,
    useScroll: $9b8a6b4a37073e24$export$2e2bcd8739ae039,
    useCountDown: $8b344e2b60a44e70$export$2e2bcd8739ae039,
    useAdd: $2faca32e6971e721$export$2e2bcd8739ae039,
    useRandom: $0fe741a2572793a0$export$2e2bcd8739ae039
};


export {$a85bc9c6e2eb9625$export$2e2bcd8739ae039 as default, $37148af75344f418$export$2e2bcd8739ae039 as useMap, $b0c9ddc93a9d9080$export$2e2bcd8739ae039 as useSet, $994ff314909f83f5$export$2e2bcd8739ae039 as useBoolean, $717fd9294a8176d4$export$2e2bcd8739ae039 as useLocalStorage, $9571cf3dfe01e6c0$export$2e2bcd8739ae039 as useSessionStorage, $80a4feb8db8b4d99$export$2e2bcd8739ae039 as useDebounce, $f92ff3bc9f1f5c1f$export$2e2bcd8739ae039 as useDebounceValue, $b3cada967fbdc80a$export$2e2bcd8739ae039 as useThrottle, $ed974ba9f6cef09e$export$2e2bcd8739ae039 as useThrottleValue, $837ea68df79e1827$export$2e2bcd8739ae039 as useTitle, $a59b9f750e292331$export$2e2bcd8739ae039 as useSize, $9b8a6b4a37073e24$export$2e2bcd8739ae039 as useScroll, $8b344e2b60a44e70$export$2e2bcd8739ae039 as useCountDown, $2faca32e6971e721$export$2e2bcd8739ae039 as useAdd, $0fe741a2572793a0$export$2e2bcd8739ae039 as useRandom};
//# sourceMappingURL=shooks.module.js.map
