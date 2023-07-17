<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>City Info</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-">
      <ZipSearch />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ZipSearch from "@/components/ZipSearch.vue";

export default defineComponent({
  components: {
    ZipSearch,
  },
});
</script>
