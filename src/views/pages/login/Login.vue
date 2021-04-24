<template>
  <div>
    <v-container>
      <v-row justify="center" style="margin-top: 5%">
        <v-col cols="12" md="4">
          <v-card outlined shaped class="pa-12">
            <v-form>
              <div>
                <v-text-field
                  dense
                  filled
                  rounded
                  clearable
                  prepend-inner-icon="mdi-account-outline"
                  label="Username"
                >
                </v-text-field>

                <v-text-field
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  dense
                  filled
                  rounded
                  clearable
                  prepend-inner-icon="mdi-lock-outline"
                  label="Password"
                  @click:append="showPassword = !showPassword"
                >
                </v-text-field>

                <v-btn
                  :loading="loadingButton"
                  :disabled="loadingButton"
                  @click="loaderButton = 'loadingButton'"
                  rounded
                  color="primary"
                >
                  GİRİŞ YAP
                </v-btn>
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loaderButton: null,
      showPassword: false,
      loadingButton: false,
    };
  },
  watch: {
    loaderButton() {
      const l = this.loaderButton;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 1000);

      this.loaderButton = null;
      //Vue Toast
    },
  },
};
</script>

<style>
</style>