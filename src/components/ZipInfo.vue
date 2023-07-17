<template>
  <ion-card v-if="data">
    <ion-card-header>
      <ion-card-title>{{ data.places[0]["place name"] }}</ion-card-title>
      <ion-card-subtitle>{{ data["post code"] }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <ion-item>
        <ion-label>Commune:</ion-label>
        <ion-note>{{ data.places[0].state }} </ion-note>
      </ion-item>
      <ion-item>
        <ion-label> Latitude:</ion-label>
        <ion-note> {{ data.places[0].latitude }}</ion-note>
      </ion-item>
      <ion-item>
        <ion-label>Longitude:</ion-label>
        <ion-note>{{ data.places[0].longitude }} </ion-note></ion-item
      >
    </ion-card-content>
  </ion-card>
  <div v-else>No data yet</div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
export default defineComponent({
  name: "Zipinfo",
  props: {
    data: {
      type: Object as PropType<any>,
      default: null,
    },
  },
  components: {},
  methods: {},
});
</script>
