import { useCallback, useEffect } from "react";
import { useLegacyState } from "../../index";

/**
 * Firefox：43+
 * Chrome：38+
 * Opera：25+
 */
function useBattery() {
  const [state, setState] = useLegacyState({});

  const update = useCallback((data: Record<string, unknown>) => {
    setState(data);
  }, []);

  useEffect(() => {
    let _battery: any;

    let chargingChange = () => {};
    let levelChange = () => {};
    let chargingTimeChange = () => {};
    let dischargingTimeChange = () => {};
    navigator.getBattery().then((battery) => {
      _battery = battery;
      update({
        charging: battery.charging,
        level: battery.level * 100,
        chargingTime: battery.chargingTime,
        dischargingTime: battery.dischargingTime,
      });

      chargingChange = function () {
        update({ charging: battery.charging });
      };

      levelChange = function () {
        update({ level: battery.level * 100 });
      };
      chargingTimeChange = function () {
        update({ chargingTime: battery.chargingTime });
      };
      dischargingTimeChange = function () {
        update({ dischargingTime: battery.dischargingTime });
      };

      battery.addEventListener("chargingchange", chargingChange);

      battery.addEventListener("levelchange", levelChange);

      battery.addEventListener("chargingtimechange", chargingTimeChange);

      battery.addEventListener("dischargingtimechange", dischargingTimeChange);
    });
    return () => {
      _battery.removeEventListener("chargingchange", chargingChange);
      _battery.removeEventListener("levelchange", levelChange);
      _battery.removeEventListener("chargingtimechange", chargingTimeChange);
      _battery.removeEventListener(
        "dischargingtimechange",
        dischargingTimeChange
      );
    };
  }, []);
  return state;
}

export default useBattery;
