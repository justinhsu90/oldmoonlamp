<template>
  <svg
    :class="className"
    t="1564210895830"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="1988"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="200"
    height="200"
  >
    <path
      d="M914.618182 477.090909H546.909091V109.381818c0-18.618182-16.290909-34.909091-34.909091-34.909091s-34.909091 16.290909-34.909091 34.909091v367.709091H109.381818c-18.618182 0-34.909091 16.290909-34.909091 34.909091s16.290909 34.909091 34.909091 34.909091h367.709091v367.709091c0 18.618182 16.290909 34.909091 34.909091 34.909091s34.909091-16.290909 34.909091-34.909091V546.909091h367.709091c18.618182 0 34.909091-16.290909 34.909091-34.909091s-16.290909-34.909091-34.909091-34.909091z"
      fill="#999999"
      p-id="1989"
    ></path>
  </svg>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style scoped lang="scss">
svg {
  width: 70px;
  height: 70px;
  fill: #d9d9d9;
}
</style>
