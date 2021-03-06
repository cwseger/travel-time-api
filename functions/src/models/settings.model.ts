import { TrafficModel } from "../enums/traffic-model.enum";
import { TravelMode } from "../enums/travel-mode.enum";
import { UnitSystem } from "../enums/unit-system.enum";

export interface Settings {
    timeIncrement: number; // Seconds
    timeRange: number; // Seconds
    trafficModel: TrafficModel;
    travelMode: TravelMode;
    unitSystem: UnitSystem;
}
