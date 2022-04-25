interface Navigator {
  getBattery: () => Promise<{
    charging: number;
    level: number;
    chargingTime: number;
    dischargingTime: number;
    addEventListener: (name: string, Function) => void;
    removeEventListener: (name: string, Function) => void;
  }>;
}
