<template>
  <ion-card v-if="cityInfo">
    <ion-card-header>
      <ion-card-title>{{ cityInfo.city }}</ion-card-title>
      <ion-card-subtitle>{{ cityInfo.zipcode }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <ion-item>
        <ion-label>Commune:</ion-label>
        <ion-note class="font-black">{{ cityInfo.state }} </ion-note>
      </ion-item>
      <ion-item>
        <ion-label> Latitude:</ion-label>
        <ion-note class="font-black"> {{ cityInfo.latitude }} °N</ion-note>
      </ion-item>
      <ion-item>
        <ion-label>Longitude:</ion-label>
        <ion-note class="font-black">{{ cityInfo.longitude }} °E</ion-note>
      </ion-item>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonNote,
} from "@ionic/vue";

import useInfoStore from "@/stores/useInfoStore";

export default defineComponent({
  name: "Zipinfo",
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonNote,
  },
  computed: {
    ...mapState(useInfoStore, ["cityInfo"]),
  },
});
</script>
