import {
    Home,
    Zap,
    Activity,
    Wind,
    Tv,
    Shield
} from "lucide-react";

export const devicesData = [
    { name: "Main Line", voltage: 230, current: 12.4, power: 2852, status: "Normal", switchedOn: true, icon: Home },
    { name: "Motor 1", voltage: 220, current: 8.2, power: 1804, status: "Running", switchedOn: true, icon: Activity },
    { name: "Heater", voltage: 230, current: 10, power: 2300, status: "High Load", switchedOn: true, icon: Zap },
    { name: "Generator", voltage: 240, current: 15, power: 3600, status: "Running", switchedOn: true, icon: Activity },
    { name: "Fridge", voltage: 288, current: 10.5, power: 1563, status: "Running", switchedOn: true, icon: Wind },
    { name: "Television", voltage: 305, current: 8.5, power: 2000, status: "Normal", switchedOn: false, icon: Tv },
    { name: "Kettle", voltage: 30, current: 8, power: 600, status: "Normal", switchedOn: false, icon: Zap },
    { name: "Fan", voltage: 230, current: 1, power: 80, status: "Running", switchedOn: true, icon: Wind },
    { name: "Iron box", voltage: 230, current: 3.35, power: 770, status: "High Load", switchedOn: false, icon: Shield },
];
