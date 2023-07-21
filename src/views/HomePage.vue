<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="text-green-700">City Info</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ZipSearch @get-zip="fetchData" />
      <ZipInfo />
      <WeatherInfo />

      <ClearInfo v-if="cityInfo" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import ZipSearch from "@/components/ZipSearch.vue";
import ZipInfo from "@/components/ZipInfo.vue";
import ClearInfo from "@/components/ClearInfo.vue";
import WeatherInfo from "@/components/WeatherInfo.vue";
import useInfoStore from "@/stores/useInfoStore";

export default defineComponent({
  components: {
    ZipSearch,
    ZipInfo,
    WeatherInfo,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ClearInfo,
  },
  computed: {
    ...mapState(useInfoStore, ["cityInfo", "weatherInfo"]),
  },
  methods: {
    ...mapActions(useInfoStore, [
      "getCityInfo",
      "getWeatherInfo",
      "clearCityInfo",
    ]),
    async fetchData(zip: number) {
      await this.getCityInfo(zip);
      await this.getWeatherInfo();
    },
  },
});
</script>
