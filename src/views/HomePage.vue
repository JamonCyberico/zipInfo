<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="text-green-700">City Info</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ZipSearch @get-zip="getCityInfo" />
      <ZipInfo :data="cityInfo" />
      <ClearInfo :data="cityInfo" @clear-info="clearCityInfo" />
      <WeatherInfo v-if="cityInfo" />
      <ion-button v-if="cityInfo" expand="block" @click="getWeatherInfo"
        >Weather Info</ion-button
      >
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ZipSearch from "@/components/ZipSearch.vue";
import ZipInfo from "@/components/ZipInfo.vue";
import ClearInfo from "@/components/ClearInfo.vue";
import WeatherInfo from "@/components/WeatherInfo.vue";

import useInfoStore from "@/stores/useInfoStore";
import { mapActions, mapState } from "pinia";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

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
    ...mapState(useInfoStore, ["cityInfo"]),
  },
  methods: {
    ...mapActions(useInfoStore, [
      "getCityInfo",
      "clearCityInfo",
      "getWeatherInfo",
    ]),
  },
});
</script>
