<template>
  <el-dialog v-on="$listeners" v-bind="$attrs">
    <div slot="title">
      <slot name="title"></slot>
    </div>
    <slot name="content"></slot>
    <div slot="footer">
      <el-button v-if="!hideCancelBtn" @click="handleCancel">{{
        cancelText
      }}</el-button>
      <el-button v-if="!hideConfirmBtn" type="primary" @click="handleConfirm"
        >OK</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    cancelText: {
      default: "Cancel"
    },
    hideCancelBtn: {
      required: false,
      default: false
    },
    hideConfirmBtn: {
      required: false,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleCancel() {
      this.$emit("cancelDialog", false);
    },
    handleConfirm() {
      this.$emit("confirmDialog");
    }
  }
};
</script>

<style></style>
