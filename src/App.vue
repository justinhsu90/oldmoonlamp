<template>
  <div id="app">
    <header class="header">
      <img
        class="header__logo"
        src="@/assets/img/logo.jpg"
        alt=""
      />
    </header>
    <transition name="fade">
      <FormOne
        @submit="handleSumbit"
        v-if="previewType == 'one'"
      ></FormOne>
      <FormTwo
        v-if="previewType == 'two'"
        :type="type"
        :wowchercode="order"
        @submit="handleSumbitTwo"
      ></FormTwo>
      <FormThree v-if="previewType == 'three'"></FormThree>
    </transition>
  </div>
</template>

<script>
import FormOne from "./components/form-one";
import FormTwo from "./components/form-two";
import FormThree from "./components/form-three";
export default {
  components: {
    FormOne,
    FormTwo,
    FormThree
  },
  data() {
    return {
      type: "",
      order: "",
      previewType: "one"
    };
  },
  methods: {
    handleSumbit(data) {
      this.type = data.type;
      this.order = data.order;
      this.previewType = "two";
    },
    handleSumbitTwo() {
      this.previewType = "three";
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  background: url("./assets/img/background.jpg") no-repeat center / 100% 100%;
  min-height: 100%;
  .header__logo {
    width: 350px;
    display: block;
    margin: 0 auto;
  }
  .fade-enter-active {
    animation: fade-in 0.5s;
  }
  .fade-leave-active {
    animation: fade-in 0.5s reverse;
  }
  @keyframes fade-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
