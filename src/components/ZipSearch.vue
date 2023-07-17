<template>
  <VForm @submit="onSubmit">
    <ion-col>
      <ion-item>
        <ion-label class="text-red-200">Postal code:</ion-label>
        <Field name="zip" type="number" />
      </ion-item>
    </ion-col>
    <ion-col>
      <ion-button type="submit" color="primary" expand="block">
        Search
      </ion-button>
    </ion-col>
  </VForm>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonLabel } from "@ionic/vue";
import { Form as VForm, Field } from "vee-validate";
import { alertController } from "@ionic/vue";
import { ZIP_CODE_LENGTH } from "@/constants";

export default defineComponent({
  name: "ZipSearch",
  components: {
    VForm,
    Field,
    IonLabel,
  },
  emits: ["get-zip"],
  methods: {
    onSubmit(values: any) {
      if (!values.zip || String(values.zip).length != ZIP_CODE_LENGTH) {
        this.showAlert("Input must be 5 digits");
        return;
      }
      this.$emit("get-zip", values.zip);
    },
    async showAlert(message: string) {
      const alert = await alertController.create({
        header: "Alert",
        message: message,
        buttons: ["Ok"],
      });

      await alert.present();
    },
  },
});
</script>
