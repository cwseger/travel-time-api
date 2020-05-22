import { Settings } from "./models/settings.model";

const autocompleteApiRoot = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?';
const distanceMatrixApiRoot = 'https://maps.googleapis.com/maps/api/distancematrix/json?';

declare var process: {
    env: {
        GOOGLE_MAPS_API_KEY: string,
    }
}

export class Helper {

    static buildPlacesUrl(fragment: string) {
        return (
            autocompleteApiRoot +
            "input=" + fragment +
            "&key=" + process.env.GOOGLE_MAPS_API_KEY
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
            '&key=' + process.env.GOOGLE_MAPS_API_KEY
        );
    }
}
