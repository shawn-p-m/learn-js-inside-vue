<template>
  <div id="function-buttons">
    <v-row>
      <v-col md="1"></v-col>
      <v-col md="3">
        <v-btn
          class="d-flex justify-center"
          :color="arrowButtonColor"
          @click="arrowButtonColor = arrow()"
        >
          Arrow
        </v-btn>
      </v-col>
      <v-col md="4">
        <v-btn
          class="d-flex justify-center"
          :color="mapButtonColor"
          @click="mapButtonColor = map()"
        >
          Map
        </v-btn>
      </v-col>
      <v-col md="3">
        <v-btn
          class="d-flex justify-center"
          :color="reduceButtonColor"
          @click="reduceButtonColor = reduce()"
        >
          Reduce
        </v-btn>
      </v-col>
      <v-col md="1"></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          class="d-flex justify-center"
          :color="promiseButtonColor"
          @click="promiseButtonColor = promise()"
        >
          Promise
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          class="d-flex justify-center"
          :color="spreadButtonColor"
          @click="spreadButtonColor = spread()"
        >
          Spread
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          class="d-flex justify-center"
          :color="generatorButtonColor"
          @click="generatorButtonColor = generator()"
        >
          Generator
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {
  arrowGivesThree,
  averageDollaz,
  numsWithOddOrEven,
  promiseWithTitle,
  spreadedArray,
  generatorArray,
} from "@/mixins/specifics";

const giveSuccessOrError = (condition) => {
  if (condition) {
    return "success";
  } else {
    return "error";
  }
};

export default {
  name: "FunctionButtons",
  created() {
    if (this.arrowButtonColor === "error" || this.arrowButtonColor === "success") this.arrow();
    this.arrowButtonColor = this.$store.state.arrowButtonColor;

    if (this.mapButtonColor === "error" || this.mapButtonColor === "success") this.map();
    this.mapButtonColor = this.$store.state.mapButtonColor;

    if (this.reduceButtonColor === "error" || this.reduceButtonColor === "success") this.map();
    this.reduceButtonColor = this.$store.state.reduceButtonColor;

    if (this.promiseButtonColor === "error" || this.promiseButtonColor === "success")
      this.promise();
    this.promiseButtonColor = this.$store.state.promiseButtonColor;

    if (this.spreadButtonColor === "error" || this.spreadButtonColor === "success") this.spread();
    this.spreadButtonColor = this.$store.state.spreadButtonColor;

    if (this.generatorButtonColor === "error" || this.generatorButtonColor === "success")
      this.spread();
    this.generatorButtonColor = this.$store.state.generatorButtonColor;
  },
  data() {
    return {
      arrowButtonColor: "",
      mapButtonColor: "",
      reduceButtonColor: "",
      promiseButtonColor: "",
      spreadButtonColor: "",
      generatorButtonColor: "",
    };
  },

  methods: {
    arrow() {
      this.$store.commit("saveArrowButtonColor", giveSuccessOrError(arrowGivesThree() === 3));

      return this.$store.state.arrowButtonColor;
    },
    map() {
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
    reduce() {
      this.$store.commit(
        "saveReduceButtonColor",
        giveSuccessOrError(JSON.stringify(averageDollaz) === JSON.stringify("885.53"))
      );

      return this.$store.state.reduceButtonColor;
    },
    async promise() {
      promiseWithTitle.then((title) => {
        try {
          this.$store.commit(
            "savePromiseButtonColor",
            giveSuccessOrError(JSON.stringify(title) === JSON.stringify("delectus aut autem"))
          );
        } catch (e) {
          alert(e);
        } finally {
          this.promiseButtonColor = this.$store.state.promiseButtonColor;
        }
      });
    },
    spread() {
      this.$store.commit(
        "saveSpreadButtonColor",
        giveSuccessOrError(
          JSON.stringify(spreadedArray) === JSON.stringify([1, 12, 7, 8, 2, 3, 1, 6, 3, 6, 2, 1])
        )
      );
      return this.$store.state.spreadButtonColor;
    },
    generator() {
      this.$store.commit(
        "saveGeneratorButtonColor",
        giveSuccessOrError(JSON.stringify(generatorArray) === JSON.stringify([5, 15, 25, 7]))
      );
      return this.$store.state.generatorButtonColor;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  width: 100px;
  margin: 30px auto;
}
</style>
