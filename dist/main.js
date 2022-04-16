var $8M2gN$react = require("react");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useMap", function () { return $80e8dff17c106379$export$2e2bcd8739ae039; });

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




//# sourceMappingURL=main.js.map
