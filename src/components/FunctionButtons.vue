<template>
  <div id="function-buttons">
    <div class="d-flex justify-space-between flex-wrap" style="height: 300px">
      <v-btn width="120" :color="arrowButtonColor" @click="arrowButtonColor = arrow()">
        Arrow
      </v-btn>

      <v-btn width="120" :color="mapButtonColor" @click="mapButtonColor = map()"> Map </v-btn>

      <v-btn width="120" :color="reduceButtonColor" @click="reduce()"> Reduce </v-btn>

      <v-btn width="120" :color="promiseButtonColor" @click="promiseButtonColor = promise()">
        Promise
      </v-btn>

      <v-btn width="120" :color="spreadButtonColor" @click="spreadButtonColor = spread()">
        Spread
      </v-btn>

      <v-btn width="120" :color="generatorButtonColor" @click="generatorButtonColor = generator()">
        Generator
      </v-btn>
    </div>
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
import { mapGetters } from "vuex";

const giveSuccessOrError = (condition) => {
  if (condition) {
    return "success";
  } else {
    return "error";
  }
};

export default {
  name: "FunctionButtons",

  data() {
    return {
      arrowButtonColor: "",
      mapButtonColor: "",
      promiseButtonColor: "",
      spreadButtonColor: "",
      generatorButtonColor: "",
    };
  },

  computed: mapGetters(["reduceButtonColor"]),
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

<style lang="scss" scoped></style>
