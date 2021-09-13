export interface RoadMap {
  title: string;
  interestPoints: Array<InterestPoints>;
  duration: string;
  price: number;
  description: string;
}

export interface InterestPoints {
  title: string;
  lat: number;
  lng: number;
}
