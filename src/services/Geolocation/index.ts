class GeolocationAPI {
  getGeolocation() {
    return new Promise<{ longitude: number; latitude: number } | null>(
      async (resolve, reject) => {
        if (!('geolocation' in navigator)) {
          return reject('Unable to access geolocation');
        }

        const coords = localStorage.getItem('coords');
        if (coords) {
          return resolve(JSON.parse(coords));
        }

        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { longitude, latitude } = position.coords;
            localStorage.setItem(
              'coords',
              JSON.stringify({ longitude, latitude })
            );
            resolve({ latitude, longitude });
          },
          (error) => {
            resolve(null);
          },
          { timeout: 5000 }
        );
      }
    );
  }
}

export default new GeolocationAPI();
