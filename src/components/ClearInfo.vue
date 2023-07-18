<template>
  <ion-button v-if="data" expand="block" @click="$emit('clear-info')">
    Clear
  </ion-button>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { IonButton } from "@ionic/vue";
import { ICityInfo } from "@/stores/types";

export default defineComponent({
  name: "ClearInfo",
  components: {
    IonButton,
  },
  emits: ["clear-info"],
  props: {
    data: {
      type: Object as PropType<ICityInfo | null>,
      default: null,
    },
  },
});
</script>
