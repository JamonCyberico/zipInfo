<template>
  <ion-button expand="block" @click="clearCityInfo">Clear</ion-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonButton } from "@ionic/vue";
import { mapActions } from "pinia";

import useInfoStore from "@/stores/useInfoStore";

export default defineComponent({
  name: "ClearInfo",
  components: {
    IonButton,
  },
  methods: {
    ...mapActions(useInfoStore, ["clearCityInfo"]),
  },
});
</script>
