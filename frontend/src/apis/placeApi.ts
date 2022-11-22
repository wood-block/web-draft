import { api } from "./configs";

interface PlacesRes {
  id: number;
}

interface PlaceReservationsRes {
  bookingStart: Date;
  bookingEnd: Date;
}

export const placeApi = {
  getUserPlaces: (userId: number) =>
    api.get<PlacesRes[]>(`/users/${userId}/places`),
  getPlaceReservations: (placeId: number) =>
    api.get<PlaceReservationsRes[]>(`/places/${placeId}/reservations`),
  getPlaceReservationsByTime: (placeId: number, from: string, to: string) =>
    api.get<PlaceReservationsRes[]>(
      `/places/${placeId}/reservations?from=${from}&to=${to}`
    ),
};
