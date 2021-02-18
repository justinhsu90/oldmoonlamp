<template>
  <div class="model">
    <div class="success-container">
      <h1 class="success__tt-one">Completed!!</h1>
      <div>
        <div>
          <img
            class="success__tip-img"
            src="@/assets/img/success.jpg"
            alt=""
          />
        </div>
        <div class="success__tip-title">
          Thanks for your order.
        </div>
        <div class="success__tip-title">
          We received your customised order information.
        </div>
        <div class="success__tip-title">
          The order is in progress now and will be dispatched out in a few days.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {}
  }
};
</script>

<style lang="scss" scoped>
.model {
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 999;
  .success-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    width: 600px;
    padding: 30px 80px 30px 80px;
    border-radius: 10px;
  }

  .success__tt-one {
    color: orange;
    text-align: center;
    margin-bottom: 20px;
  }
  .success__tt-two {
    color: orange;
    text-align: center;
    margin-bottom: 10px;
  }
  .success__tip-img {
    width: 300px;
    margin: 0 auto;
    display: block;
    margin-bottom: 20px;
  }
  .success__tip-title {
    color: #606266;
    font-size: 16px;
    color: orange;
    text-align: center;
  }
}
</style>
