<template>
  <ion-card v-if="data">
    <ion-card-header>
      <ion-card-title>{{ data.city }}</ion-card-title>
      <ion-card-subtitle>{{ data.zipcode }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <ion-item>
        <ion-label>Commune:</ion-label>
        <ion-note class="font-black">{{ data.state }} </ion-note>
      </ion-item>
      <ion-item>
        <ion-label> Latitude:</ion-label>
        <ion-note class="font-black"> {{ data.latitude }} °N</ion-note>
      </ion-item>
      <ion-item>
        <ion-label>Longitude:</ion-label>
        <ion-note class="font-black">{{ data.longitude }} °E</ion-note>
      </ion-item>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { ICityInfo } from "@/stores/types";
import { PropType, defineComponent } from "vue";
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
  props: {
    data: {
      type: Object as PropType<ICityInfo | null>,
      default: null,
    },
  },
});
</script>
