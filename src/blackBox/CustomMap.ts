export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  content(): string;
}

export class CustomMap {
  private googleMaps: google.maps.Map;

  constructor(divId: string) {
    this.googleMaps = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
      backgroundColor: "gray",
    });
  }

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      draggable: true,
      map: this.googleMaps,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.content(),
      });

      infoWindow.open(this.googleMaps, marker);
    });
  }
}
