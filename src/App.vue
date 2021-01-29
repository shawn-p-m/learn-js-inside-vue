<template>
  <div id="app">
    <v-app>
      <v-container fluid>
        <v-row>
          <v-col md="4"></v-col>
          <v-col md="4">
            <img class="d-flex justify-center" alt="Vue logo" src="./assets/logo.png" />
          </v-col>
          <v-col md="4"></v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="d-flex justify-center" color="info" v-bind="attrs" v-on="on">
                  Instructions
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="headline grey lighten-2"> Instructions </v-card-title>

                <v-card-text
                  ><br />
                  Click the buttons below after implementing the functions inside
                  src/mixins/specifics.js to check if you implemented them correctly!
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="secondary" text @click="dialog = false"> Got it! 😎 </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
        <FunctionButtons />
      </v-container>
    </v-app>
  </div>
</template>

<script>
import FunctionButtons from "@/components/FunctionButtons";
export default {
  name: "App",
  components: { FunctionButtons },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 200px;
  margin: 5px auto;
}
.v-btn {
  width: 150px;
  margin: 30px auto !important;
}
</style>
