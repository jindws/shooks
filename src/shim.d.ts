interface Navigator {
  getBattery: () => Promise<{
    charging: number;
    level: number;
    chargingTime: number;
    dischargingTime: number;
    addEventListener: (name: string, fun: Function) => void;
    removeEventListener: (name: string, fun: Function) => void;
  }>;
}

export type IFunc = () => void;
