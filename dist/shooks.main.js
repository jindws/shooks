var $8M2gN$react = require("react");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $fa170128f8c97660$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useMap", function () { return $80e8dff17c106379$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useSet", function () { return $d0040752fbf3c017$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useBoolean", function () { return $a58f74a897fd5b17$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useLocalStorage", function () { return $2047587efc98bb27$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useSessionStorage", function () { return $33b1bdcef4bd88f3$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useDebounce", function () { return $637db389d5c4f3e8$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useDebounceValue", function () { return $5c27c88268695acc$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useThrottle", function () { return $786fe0237ee350ed$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useThrottleValue", function () { return $c221a08f1f5807f4$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useTitle", function () { return $16e370a6f136a2fd$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useSize", function () { return $bd20d58749bb379c$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useScroll", function () { return $ef2b4bda0936676f$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useCountDown", function () { return $15242d4563fbadf0$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useAdd", function () { return $d8b411e60558e886$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useRandom", function () { return $96e0015d93f0bcde$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useSetState", function () { return $a8dce27bd42932c7$exports.default; });
$parcel$export(module.exports, "useFavicon", function () { return $fcf0725ff67b042d$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useUpdate", function () { return $43508a669d32ab6f$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useParams", function () { return $7da77ae9ae21e4da$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useFullScreen", function () { return $47ef470e3e03b4ce$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useUUID", function () { return $0fc1ee9d319f37bf$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useRem", function () { return $82541effc73c2a67$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useCookie", function () { return $f9894971bea60777$export$2e2bcd8739ae039; });

function $80e8dff17c106379$var$useMap(init) {
    var intiData = $8M2gN$react.useMemo(function() {
        if (!init || !Array.isArray(init)) return new Map();
        return new Map(init);
    }, []);
    var _a = $8M2gN$react.useState(intiData), map = _a[0], setMap = _a[1];
    var remove = function remove(key) {
        setMap(function(prev) {
            var temp = new Map(prev);
            temp.delete(key);
            return temp;
        });
    };
    var set = function set(key, value) {
        setMap(function(prev) {
            var temp = new Map(prev);
            temp.set(key, value);
            return temp;
        });
    };
    var clear = function clear() {
        setMap(function(prev) {
            var temp = new Map(prev);
            temp.clear();
            return temp;
        });
    };
    var reset = function reset() {
        return setMap(new Map(intiData));
    };
    var has = function has(key) {
        return map.has(key);
    };
    var size = $8M2gN$react.useMemo(function() {
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
var $80e8dff17c106379$export$2e2bcd8739ae039 = $80e8dff17c106379$var$useMap;



function $d0040752fbf3c017$var$useSet(init) {
    var intiData = $8M2gN$react.useMemo(function() {
        if (!init || !Array.isArray(init)) return new Set();
        return new Set(init);
    }, []);
    var _a = $8M2gN$react.useState(intiData), set = _a[0], setSet = _a[1];
    var remove = function remove(itm) {
        setSet(function(prev) {
            set.delete(itm);
            return set;
        });
    };
    var add = function add(itm) {
        setSet(function(prev) {
            var temp = new Set(prev);
            temp.add(itm);
            return temp;
        });
    };
    var clear = function clear() {
        setSet(function(prev) {
            return new Set();
        });
    };
    var reset = function reset() {
        return setSet(new Set(intiData));
    };
    var has = function has(itm) {
        return set.has(itm);
    };
    var size = $8M2gN$react.useMemo(function() {
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
var $d0040752fbf3c017$export$2e2bcd8739ae039 = $d0040752fbf3c017$var$useSet;



function $a58f74a897fd5b17$var$useBoolean(init) {
    var intiData = $8M2gN$react.useMemo(function() {
        return !!init;
    }, []);
    var _a = $8M2gN$react.useState(intiData), state = _a[0], setState = _a[1];
    var actions = $8M2gN$react.useMemo(function() {
        var setTrue = function setTrue() {
            return setState(true);
        };
        var setFalse = function setFalse() {
            return setState(false);
        };
        var toggle = function toggle() {
            return setState(function(prevState) {
                return !prevState;
            });
        };
        return {
            toggle: toggle,
            set: function set(val) {
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
var $a58f74a897fd5b17$export$2e2bcd8739ae039 = $a58f74a897fd5b17$var$useBoolean;



function $fb39d5ffc0b58506$var$useStorage(type, key, options) {
    var init = $8M2gN$react.useMemo(function() {
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
    var _a1 = $8M2gN$react.useState(init), state = _a1[0], setState = _a1[1];
    $8M2gN$react.useEffect(function() {
        type[key] = JSON.stringify(state);
    }, [
        state
    ]);
    var actions = $8M2gN$react.useMemo(function() {
        var reset = function reset() {
            return setState(init);
        };
        var set = function set(value) {
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
var $fb39d5ffc0b58506$export$2e2bcd8739ae039 = $fb39d5ffc0b58506$var$useStorage;


function $2047587efc98bb27$var$useLocalStorage(key, options) {
    return $fb39d5ffc0b58506$export$2e2bcd8739ae039(localStorage, key, options);
}
var $2047587efc98bb27$export$2e2bcd8739ae039 = $2047587efc98bb27$var$useLocalStorage;



function $33b1bdcef4bd88f3$var$useSessionStorage(key, options) {
    return $fb39d5ffc0b58506$export$2e2bcd8739ae039(sessionStorage, key, options);
}
var $33b1bdcef4bd88f3$export$2e2bcd8739ae039 = $33b1bdcef4bd88f3$var$useSessionStorage;



function $637db389d5c4f3e8$var$useDebounce(init, wait) {
    if (wait === void 0) wait = 1000;
    var _a = $8M2gN$react.useState(init), value = _a[0], setValue = _a[1];
    var update = $8M2gN$react.useMemo(function() {
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
var $637db389d5c4f3e8$export$2e2bcd8739ae039 = $637db389d5c4f3e8$var$useDebounce;



function $5c27c88268695acc$var$useDebounceValue(init, wait) {
    if (wait === void 0) wait = 1000;
    var _a = $8M2gN$react.useState(init), value = _a[0], setValue = _a[1];
    $8M2gN$react.useEffect(function() {
        update(init);
    }, [
        init
    ]);
    var update = $8M2gN$react.useMemo(function() {
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
var $5c27c88268695acc$export$2e2bcd8739ae039 = $5c27c88268695acc$var$useDebounceValue;



function $786fe0237ee350ed$var$useThrottle(init, wait) {
    if (wait === void 0) wait = 1000;
    var _a = $8M2gN$react.useState(init), value = _a[0], setValue = _a[1];
    var update = $8M2gN$react.useMemo(function() {
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
var $786fe0237ee350ed$export$2e2bcd8739ae039 = $786fe0237ee350ed$var$useThrottle;



function $c221a08f1f5807f4$var$useThrottleValue(init, wait) {
    if (wait === void 0) wait = 1000;
    var _a = $8M2gN$react.useState(init), value = _a[0], setValue = _a[1];
    $8M2gN$react.useEffect(function() {
        update(init);
    }, [
        init
    ]);
    var update = $8M2gN$react.useMemo(function() {
        var time = Date.now();
        return function(newValue) {
            if (Date.now() - time < wait) return;
            setValue(newValue);
            time = Date.now();
        };
    }, []);
    return value;
}
var $c221a08f1f5807f4$export$2e2bcd8739ae039 = $c221a08f1f5807f4$var$useThrottleValue;



function $16e370a6f136a2fd$var$useTitle(title) {
    $8M2gN$react.useEffect(function() {
        document.title = title;
    }, []);
}
var $16e370a6f136a2fd$export$2e2bcd8739ae039 = $16e370a6f136a2fd$var$useTitle;



function $bd20d58749bb379c$var$useSize(ref) {
    var _a1 = $8M2gN$react.useState([
        0,
        0
    ]), data1 = _a1[0], setData = _a1[1];
    if (!window.ResizeObserver) return data1;
    $8M2gN$react.useEffect(function() {
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
var $bd20d58749bb379c$export$2e2bcd8739ae039 = $bd20d58749bb379c$var$useSize;



function $ef2b4bda0936676f$var$useScroll(ref) {
    var _a1 = $8M2gN$react.useState(0), left = _a1[0], setLeft = _a1[1];
    var _b = $8M2gN$react.useState(0), top = _b[0], setTop = _b[1];
    var isRef = $8M2gN$react.useMemo(function() {
        return "current" in ref;
    }, []);
    $8M2gN$react.useEffect(function() {
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
var $ef2b4bda0936676f$export$2e2bcd8739ae039 = $ef2b4bda0936676f$var$useScroll;



function $15242d4563fbadf0$var$useCountDown(time, options) {
    if (options === void 0) options = {};
    var _a = $8M2gN$react.useState(Math.max(time, 0)), remain = _a[0], setRemain = _a[1];
    var _remain = $8M2gN$react.useRef(remain);
    var _interval = $8M2gN$react.useMemo(function() {
        return Math.min(Math.max(1, Math.floor(options.interval || 1)), time);
    }, []);
    $8M2gN$react.useEffect(function() {
        _remain.current = remain;
    }, [
        remain
    ]);
    var _b = $8M2gN$react.useState(false), running = _b[0], setRunning = _b[1];
    $8M2gN$react.useEffect(function() {
        action.start();
    }, []);
    var action = $8M2gN$react.useMemo(function() {
        var si;
        return function() {
            var start = function start() {
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
            var wait = function wait() {
                clearInterval(si);
                setRunning(false);
            };
            var stop = function stop() {
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
var $15242d4563fbadf0$export$2e2bcd8739ae039 = $15242d4563fbadf0$var$useCountDown;



function $d8b411e60558e886$var$useAdd() {
    var nums1 = [];
    for(var _i1 = 0; _i1 < arguments.length; _i1++)nums1[_i1] = arguments[_i1];
    var _a1 = $8M2gN$react.useState(nums1[0] || 0), result1 = _a1[0], setResult = _a1[1];
    function addNow() {
        var _loop = function(i) {
            for(var _a = 0, arr_1 = arr; _a < arr_1.length; _a++){
                var itm = arr_1[_a];
                result[i].push(itm[i] || 0);
            }
            result[i] = result[i].reduce(function(a, b) {
                return +a + +b;
            });
            result[i + 1] = [
                Math.floor(result[i] / 10)
            ];
            result[i] = result[i] % 10;
        };
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
        for(var i = 0; i < maxL; i++)_loop(i);
        result[maxL] = result[maxL].reduce(function(a, b) {
            return +a + +b;
        });
        setResult(result.reverse().join("").replace(/^0*/g, ""));
    }
    $8M2gN$react.useEffect(function() {
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
var $d8b411e60558e886$export$2e2bcd8739ae039 = $d8b411e60558e886$var$useAdd;



function $96e0015d93f0bcde$var$useRandom() {
    var data = [];
    for(var _i = 0; _i < arguments.length; _i++)data[_i] = arguments[_i];
    var length = $8M2gN$react.useMemo(function() {
        return data.length;
    }, [
        data
    ]);
    var _a = $8M2gN$react.useState(data[Math.floor(Math.random() * length)]), result = _a[0], upResult = _a[1];
    function update() {
        var it = data[Math.floor(Math.random() * length)];
        upResult(it);
    }
    return [
        result,
        update
    ];
}
var $96e0015d93f0bcde$export$2e2bcd8739ae039 = $96e0015d93f0bcde$var$useRandom;


var $a8dce27bd42932c7$exports = {};

$parcel$export($a8dce27bd42932c7$exports, "default", function () { return $a8dce27bd42932c7$export$2e2bcd8739ae039; }, function (v) { return $a8dce27bd42932c7$export$2e2bcd8739ae039 = v; });

var $a8dce27bd42932c7$var$__assign = undefined && undefined.__assign || function() {
    $a8dce27bd42932c7$var$__assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $a8dce27bd42932c7$var$__assign.apply(this, arguments);
};
function $a8dce27bd42932c7$var$useSetState(data) {
    var _a = $8M2gN$react.useState(data), state = _a[0], setState = _a[1];
    function update(newData) {
        setState(function(prevDate) {
            var _$data = typeof newData === "function" ? newData(prevDate) : newData;
            return $a8dce27bd42932c7$var$__assign($a8dce27bd42932c7$var$__assign({}, state), _$data);
        });
    }
    return [
        state,
        update
    ];
}
var $a8dce27bd42932c7$export$2e2bcd8739ae039 = $a8dce27bd42932c7$var$useSetState;



function $fcf0725ff67b042d$var$useFavicon(init) {
    var _a = $8M2gN$react.useState(init), url = _a[0], setUrl = _a[1];
    $8M2gN$react.useEffect(function() {
        if (!url) return;
        var link = document.querySelector("link[rel*='icon']") || document.createElement("link");
        link.rel = "shortcut icon";
        link.href = url;
        document.head.append(link);
    }, [
        url
    ]);
    function update(newUrl) {
        if (newUrl) setUrl(newUrl);
    }
    return [
        url,
        update
    ];
}
var $fcf0725ff67b042d$export$2e2bcd8739ae039 = $fcf0725ff67b042d$var$useFavicon;



function $43508a669d32ab6f$var$useUpdate() {
    var _a = $8M2gN$react.useState({}), upData = _a[1];
    return $8M2gN$react.useCallback(function() {
        upData({});
    }, []);
}
var $43508a669d32ab6f$export$2e2bcd8739ae039 = $43508a669d32ab6f$var$useUpdate;



function $5e6b23e993c5946f$export$2e2bcd8739ae039(params) {
    var arr = decodeURIComponent(params).match(/[^?&]+\=[^&]*/g) || [];
    var result = {};
    for(var _i = 0, arr_1 = arr; _i < arr_1.length; _i++){
        var itm = arr_1[_i];
        var _a = itm.split("="), k = _a[0], v = _a[1];
        if (k in result) {
            if (Array.isArray(result[k])) result[k].push(v);
            else result[k] = [
                result[k],
                v
            ];
        } else result[k] = v;
    }
    return result;
}


function $7da77ae9ae21e4da$var$useParams(params) {
    if (params === void 0) params = location.search;
    return $8M2gN$react.useMemo(function() {
        return $5e6b23e993c5946f$export$2e2bcd8739ae039(params);
    }, [
        params
    ]);
}
var $7da77ae9ae21e4da$export$2e2bcd8739ae039 = $7da77ae9ae21e4da$var$useParams;



function $47ef470e3e03b4ce$var$useFullScreen(ele) {
    var _a = $8M2gN$react.useState(!!document.fullscreenElement), isFullScreen = _a[0], upIsFullScreen = _a[1];
    var isEnabled = $8M2gN$react.useMemo(function() {
        return document.fullscreenEnabled;
    }, []);
    $8M2gN$react.useEffect(function() {
        document.onfullscreenchange = function() {
            upIsFullScreen(!!document.fullscreenElement);
        };
        return function() {
            return document.onfullscreenchange = null;
        };
    }, []);
    var action = $8M2gN$react.useMemo(function() {
        var enterFullscreen = function enterFullscreen() {
            var element = document.documentElement;
            if (typeof ele === "function") element = ele();
            else if (ele) {
                if ("current" in ele) element = ele.current;
                else element = ele;
            }
            element && element.requestFullscreen({
            });
        };
        var exitFullscreen = function exitFullscreen() {
            if (document.fullscreenElement) return document.exitFullscreen();
        };
        var toggleFullscreen = function toggleFullscreen() {
            if (document.fullscreenElement) return exitFullscreen();
            else return enterFullscreen();
        };
        return {
            enterFullscreen: enterFullscreen,
            exitFullscreen: exitFullscreen,
            toggleFullscreen: toggleFullscreen,
            isEnabled: isEnabled
        };
    }, []);
    return [
        isFullScreen,
        action
    ];
}
var $47ef470e3e03b4ce$export$2e2bcd8739ae039 = $47ef470e3e03b4ce$var$useFullScreen;



function $0fc1ee9d319f37bf$var$useUUID(len1) {
    if (len1 === void 0) len1 = [
        8,
        4,
        4,
        4,
        12
    ];
    var _a = $8M2gN$react.useState(""), value = _a[0], setValue = _a[1];
    var getRandom = $8M2gN$react.useCallback(function(len) {
        if (len === void 0) len = 0;
        var result = "";
        while(len > 0){
            result += Math.random().toString(16).substr(2, Math.min(10, len));
            len -= 10;
        }
        return result;
    }, []);
    $8M2gN$react.useEffect(function() {
        refresh();
    }, []);
    var refresh = $8M2gN$react.useCallback(function() {
        if (Array.isArray(len1)) {
            var result = [];
            for(var _i = 0, len_1 = len1; _i < len_1.length; _i++){
                var itm = len_1[_i];
                result.push(getRandom(itm));
            }
            setValue(result.join("-"));
        } else setValue(getRandom(len1));
    }, []);
    return [
        value,
        refresh
    ];
}
var $0fc1ee9d319f37bf$export$2e2bcd8739ae039 = $0fc1ee9d319f37bf$var$useUUID;



function $82541effc73c2a67$var$useRem(options) {
    var _a = options || {}, _b = _a.baseWidth, baseWidth = _b === void 0 ? 375 : _b, _c = _a.baseFontSize, baseFontSize = _c === void 0 ? 16 : _c, _d = _a.maxWidth, maxWidth = _d === void 0 ? innerWidth : _d;
    var _e = $8M2gN$react.useState(0), data = _e[0], setData = _e[1];
    var resize = $8M2gN$react.useCallback(function() {
        var size = Math.min(innerWidth, maxWidth) / baseWidth * baseFontSize;
        setData(size);
        document.documentElement.style.fontSize = "".concat(size, "px");
    }, []);
    $8M2gN$react.useEffect(function() {
        resize();
        addEventListener("resize", resize);
        return function() {
            return removeEventListener("resize", resize);
        };
    }, []);
    return data;
}
var $82541effc73c2a67$export$2e2bcd8739ae039 = $82541effc73c2a67$var$useRem;




function $f9894971bea60777$var$useCookie(key, options) {
    var _a = options || {}, _b = _a.defaultValue, defaultValue = _b === void 0 ? "" : _b, expires = _a.expires, path = _a.path, domain = _a.domain, secure = _a.secure, sameSite = _a.sameSite;
    var _c = $8M2gN$react.useState(String(defaultValue)), value1 = _c[0], setValue = _c[1];
    $8M2gN$react.useEffect(function() {
        if (options === null || options === void 0 ? void 0 : options.defaultValue) update(defaultValue);
        else {
            var cookie = $5e6b23e993c5946f$export$2e2bcd8739ae039(document.cookie.replace(/; */g, "&"));
            var value_1 = cookie[key];
            if (Array.isArray(value_1)) value_1 = value_1[0];
            setValue(value_1);
        }
    }, []);
    var cook1 = $8M2gN$react.useMemo(function() {
        var cook = "";
        if (expires) {
            if (typeof expires === "number") expires = Date.now() + expires;
            cook += "expires=".concat(new Date(expires), ";");
        }
        if (path) cook += "path=".concat(path, ";");
        if (domain) cook += "domain=".concat(domain, ";");
        if (secure) cook += "secure;";
        if (sameSite) cook += "sameSite=".concat(sameSite, ";");
        return cook;
    }, [
        options
    ]);
    var update = $8M2gN$react.useCallback(function(value) {
        document.cookie = "".concat(key, "=").concat(value, ";") + cook1;
        setValue(value);
    }, []);
    return [
        value1,
        update
    ];
}
var $f9894971bea60777$export$2e2bcd8739ae039 = $f9894971bea60777$var$useCookie;


var $fa170128f8c97660$export$2e2bcd8739ae039 = {
    useMap: $80e8dff17c106379$export$2e2bcd8739ae039,
    useSet: $d0040752fbf3c017$export$2e2bcd8739ae039,
    useBoolean: $a58f74a897fd5b17$export$2e2bcd8739ae039,
    useLocalStorage: $2047587efc98bb27$export$2e2bcd8739ae039,
    useSessionStorage: $33b1bdcef4bd88f3$export$2e2bcd8739ae039,
    useDebounce: $637db389d5c4f3e8$export$2e2bcd8739ae039,
    useDebounceValue: $5c27c88268695acc$export$2e2bcd8739ae039,
    useThrottle: $786fe0237ee350ed$export$2e2bcd8739ae039,
    useThrottleValue: $c221a08f1f5807f4$export$2e2bcd8739ae039,
    useTitle: $16e370a6f136a2fd$export$2e2bcd8739ae039,
    useSize: $bd20d58749bb379c$export$2e2bcd8739ae039,
    useScroll: $ef2b4bda0936676f$export$2e2bcd8739ae039,
    useCountDown: $15242d4563fbadf0$export$2e2bcd8739ae039,
    useAdd: $d8b411e60558e886$export$2e2bcd8739ae039,
    useRandom: $96e0015d93f0bcde$export$2e2bcd8739ae039,
    useSetState: $a8dce27bd42932c7$exports.default,
    useFavicon: $fcf0725ff67b042d$export$2e2bcd8739ae039,
    useUpdate: $43508a669d32ab6f$export$2e2bcd8739ae039,
    useParams: $7da77ae9ae21e4da$export$2e2bcd8739ae039,
    useFullScreen: $47ef470e3e03b4ce$export$2e2bcd8739ae039,
    useUUID: $0fc1ee9d319f37bf$export$2e2bcd8739ae039,
    useRem: $82541effc73c2a67$export$2e2bcd8739ae039,
    useCookie: $f9894971bea60777$export$2e2bcd8739ae039
};


//# sourceMappingURL=shooks.main.js.map
