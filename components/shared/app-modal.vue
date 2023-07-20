<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-if="buttonTitle"
          outlined
          rounded
          text
          v-bind="{ ...computedProps, ...attrs }"
          v-on="on"
        >
          {{ buttonTitle }}
        </v-btn>
        <slot name="modalButton" :on="on" v-else></slot>
      </template>
      <slot :close="close"></slot>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    modelVisibility: {
      type: Boolean,
      required: false,
    },
    buttonTitle: {
      type: String,
      required: false,
    },
    buttonColor: {
      type: String,
      default: "blue",
    },
    ButtonTextStyle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    computedProps() {
      let returnValue = {
        text: this.ButtonTextStyle,
        color: this.buttonColor,
      };
      return returnValue;
      // if (this.buttonColor) returnValue.color = this.buttonColor;
    },
  },
  methods: {
    close() {
      this.dialog = false;
    },
  },
};
</script>
