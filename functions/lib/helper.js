"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const autocompleteApiRoot = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?';
const distanceMatrixApiRoot = 'https://maps.googleapis.com/maps/api/distancematrix/json?';
class Helper {
    static buildPlacesUrl(fragment) {
        return (autocompleteApiRoot +
            "input=" + fragment +
            "&key=" + process.env.GOOGLE_MAPS_API_KEY);
    }
    static buildTravelTimesUrl(origin, destination, settings, departureTime) {
        return (distanceMatrixApiRoot +
            'origins=' + origin +
            '&destinations=' + destination +
            '&mode=' + settings.travelMode +
            '&units=' + settings.unitSystem +
            '&departure_time=' + departureTime +
            '&traffic_model=' + settings.trafficModel +
            '&key=' + process.env.GOOGLE_MAPS_API_KEY);
    }
}
exports.Helper = Helper;
//# sourceMappingURL=helper.js.map