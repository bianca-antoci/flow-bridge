/**
* This is the json model of Sensor Data entity
*/
export class SensorDataModel {
    id: string;
    box_id: string;
    sensor_type: string;
    unit: string;
    range_l: number;
    range_u: number;
    longitude: number;
    latitude: number;
    reading: number;
    reading_ts: string;
}