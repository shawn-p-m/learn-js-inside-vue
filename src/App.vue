<template>
  <div id="app">
    <v-app>
      <img alt="Vue logo" src="./assets/logo.png" />
      <v-btn :color="arrowButtonColor" @click="arrowButtonColor = arrow()">
        Arrow Function
      </v-btn>
      <v-btn :color="mapButtonColor" @click="mapButtonColor = map()">
        Map Function
      </v-btn>
    </v-app>
  </div>
</template>

<script>
import { arrowFunction, numsWithOddOrEven } from "@/mixins/specifics";

const giveSuccessOrError = (condition) => {
  if (condition) {
    return "success";
  } else {
    return "error";
  }
};

export default {
  name: "App",
  created: function () {
    if (
      this.arrowButtonColor === "error" ||
      this.arrowButtonColor === "success"
    )
      this.arrow();

    if (this.mapButtonColor === "error" || this.mapButtonColor === "success")
      this.map();
    this.arrowButtonColor = this.$store.state.arrowButtonColor;
    this.mapButtonColor = this.$store.state.mapButtonColor;
  },
  data: () => {
    return {
      arrowButtonColor: "",
      mapButtonColor: "",
    };
  },
  methods: {
    arrow: function () {
      this.$store.commit(
        "saveArrowButtonColor",
        giveSuccessOrError(arrowFunction() === 3)
      );

      return this.$store.state.arrowButtonColor;
    },
    map: function () {
      this.$store.commit(
        "saveMapButtonColor",
        giveSuccessOrError(
          JSON.stringify(numsWithOddOrEven) ===
            JSON.stringify([
              "12: is even",
              "13: is odd",
              "16: is even",
              "17: is odd",
              "8: is even",
              "32: is even",
              "33: is odd",
            ])
        )
      );

      return this.$store.state.mapButtonColor;
    },
  },
};
</script>

<style lang="scss">
img {
  width: 200px;
  margin: 5px auto;
}
.v-btn {
  width: 200px;
  margin: 10px auto;
}
</style>
