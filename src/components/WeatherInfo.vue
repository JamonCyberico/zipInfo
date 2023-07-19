<template>
  <ion-card v-if="cityInfo" @click="consoleLog">
    <ion-item>
      <ion-label>Temperature:</ion-label>
      <ion-note slot="end"
        >{{ weatherInfo?.current_weather?.temperature }} °C</ion-note
      >
    </ion-item>
    <ion-item>
      <ion-label>Wind speed:</ion-label>
      <ion-note slot="end"
        >{{ weatherInfo?.current_weather?.windspeed }} km/h</ion-note
      >
    </ion-item>
    <ion-item>
      <ion-label>Wind direction:</ion-label>
      <ion-note slot="end"
        >{{ weatherInfo?.current_weather?.winddirection }}°</ion-note
      >
    </ion-item>
    <ion-item>
      <ion-label>Is day:</ion-label>
      <ion-note slot="end">{{ isDay }}</ion-note>
    </ion-item>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import useInfoStore from "@/stores/useInfoStore";
import { IonCard, IonItem, IonLabel, IonNote } from "@ionic/vue";

export default defineComponent({
  name: "WeatherInfo",
  components: {
    IonCard,
    IonItem,
    IonLabel,
    IonNote,
  },
  computed: {
    ...mapState(useInfoStore, ["weatherInfo", "cityInfo"]),
    isDay() {
      return this.weatherInfo?.currentWeather?.is_day ? "Yes" : "No";
    },
  },
  methods: {
    consoleLog() {
      console.log(this.weatherInfo);
    },
  },
});
</script>
