<template>
  <div style="opacity: 0.8">
    <v-container>
      <v-row justify="center" style="margin-top: 1%">
        <v-col cols="12" md="4">
          <v-card outlined shaped class="pa-12">
            <v-form>
              <div style="text-align: center; margin-bottom: 25px">
                <img
                  style="width: auto; height: auto"
                  src="@/assets/akwelLogo.jpg"
                  alt="TrainX Logo"
                />
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
                <v-card class="mb-3 py-2" align="center" outlined>
                  <v-card-text style="font-size: 26px">
                    {{ recaptchaToken }}
                  </v-card-text>
                  <v-card-text>
                    <v-btn icon color="primary" @click="setCapcthaToken">
                      <v-icon>mdi-cached</v-icon>
                    </v-btn>
                  </v-card-text>
                </v-card>

                <v-text-field
                  type="captcha"
                  v-model="enteredCapctha"
                  filled
                  :placeholder="
                    GetLabel(this, 'authentication_login_captcha_verification')
                  "
                  dense
                  onselectstart="return false"
                  onpaste="return false;"
                  onCopy="return false"
                  onCut="return false"
                  onDrag="return false"
                  onDrop="return false"
                  autocomplete="off"
                ></v-text-field>
                <v-btn
                  :loading="loadingButton"
                  :disabled="loadingButton"
                  @click="loaderButton = 'loadingButton'"
                  rounded
                  color="primary"
                >
                  {{ GetLabel(this, "authentication_login") }}
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
      recaptchaToken: "",
      enteredCapctha: "",
    };
  },
  watch: {
    loaderButton() {
      const l = this.loaderButton;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 1000);

      if (this.loaderButton != null)
        this.$toaster.success("Giriş Başarılı! Yönlendiriliyorsunuz...", {
          timeout: 1000,
        });

      this.loaderButton = null;
    },
  },
  created() {
    this.setCapcthaToken();
  },
  methods: {
    setCapcthaToken() {
      this.recaptchaToken = "";
      this.enteredCapctha = "";
      var characters =
        "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 6; i++) {
        this.recaptchaToken += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
    },
  },
};
</script>

<style>
</style>