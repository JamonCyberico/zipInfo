<template>
  <VForm @submit="onSubmit">
    <div class="p-2 flex justify-between items-center">
      <ion-label>Postal code:</ion-label>
      <Field
        name="zip"
        type="number"
        class="p-1 border border-grey-200 rounded-lg"
      />
    </div>
    <button
      type="submit"
      class="bg-green-500 w-full rounded-xl p-4 text-white text-center font-bold"
      expand="block"
    >
      Search
    </button>
  </VForm>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonLabel, IonButton, alertController } from "@ionic/vue";
import { Form as VForm, Field } from "vee-validate";

import { ZIP_CODE_LENGTH } from "@/constants";

export default defineComponent({
  name: "ZipSearch",
  components: {
    VForm,
    Field,
    IonLabel,
    IonButton,
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
