import { defineStore } from "pinia";
import { IInfoStoreState } from "./types";
import { alertController } from "@ionic/vue";

const useInfoStore = defineStore("info", {
  state: (): IInfoStoreState => ({
    cityInfo: null,
    weatherInfo: null,
  }),
  actions: {
    async getCityInfo(zip: number) {
      try {
        const res = await fetch(`https://api.zippopotam.us/fr/${zip}`);
        const data = await res.json();
        this.cityInfo = {
          city: data.places[0]["place name"],
          zipcode: data["post code"],
          state: data.places[0].state,
          latitude: data.places[0].latitude,
          longitude: data.places[0].longitude,
        };
      } catch (error) {
        console.error(error);
        const alert = await alertController.create({
          header: "Error",
          message: "Failed to fetch the data for this zip code",
          buttons: ["Ok"],
        });
        await alert.present();
      }
    },
    clearCityInfo() {
      this.cityInfo = null;
    },
    async getWeatherInfo() {
      if (this.cityInfo) {
        const { latitude, longitude } = this.cityInfo;
        try {
          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
          );
          const data = await res.json();
          this.weatherInfo = data;
        } catch (error) {
          console.error(error);
          const alert = await alertController.create({
            header: "Error",
            message: "Failed to fetch the weather data for this city",
            buttons: ["Ok"],
          });
          await alert.present();
        }
      }
    },
  },
});

export default useInfoStore;
