import { TravelMode } from "./enums/travel-mode.enum";
import { UnitSystem } from "./enums/unit-system.enum";
import { TrafficModel } from "./enums/traffic-model.enum";
import { Settings } from "./models/settings.model";

const googleApiKey = 'AIzaSyBtpBBEMpGPGtNdVpgjIljd_oDR4KVWRN0';
const autocompleteApiRoot = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?';
const distanceMatrixApiRoot = 'https://maps.googleapis.com/maps/api/distancematrix/json?';

export class Helper {

    static buildPlacesUrl(fragment: string) {
        return (
            autocompleteApiRoot +
            "input=" + fragment +
            "&key=" + googleApiKey
        );
    }

    static buildTravelTimesUrl(
        origin: string,
        destination: string,
        settings: Settings,
        departureTime: number
    ): string {
        return (
            distanceMatrixApiRoot +
            'origins=' + origin +
            '&destinations=' + destination +
            '&mode=' + settings.travelMode +
            '&units=' + settings.unitSystem +
            '&departure_time=' + departureTime +
            '&traffic_model=' + settings.trafficModel +
            '&key=' + googleApiKey
        );
    }
}
