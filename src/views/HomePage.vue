<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>City Info</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-">
      <ZipSearch @get-zip="onGetZipCode" />
      <ZipInfo :data="info" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ZipSearch from "@/components/ZipSearch.vue";
import ZipInfo from "@/components/ZipInfo.vue";
import { alertController } from "@ionic/vue";

export default defineComponent({
  components: {
    ZipSearch,
    ZipInfo,
  },
  data() {
    return {
      info: null,
    };
  },
  methods: {
    async onGetZipCode(zip: number) {
      const res = await fetch(`https://api.zippopotam.us/fr/${zip}`);
      if (res.status === 404) {
        const alert = await alertController.create({
          header: "Invalid zip",
          message: "The zip code does not exist",
          buttons: ["Ok"],
        });
        await alert.present();
        return;
      }
      const data = await res.json();
      this.info = data;
      console.log(data);
    },
  },
});
</script>
