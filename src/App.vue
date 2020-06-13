<template>
  <div id="app">
    <header class="header">
      <span class="header-span">
        Personalized Your Product (by MagicTrend)
      </span>
      <span class="logo"></span>
    </header>
    <br />
    <transition name="fade">
      <User-Upload
        v-if="showUpload"
        :type="type"
        :wowchercode="form.order"
      ></User-Upload>
    </transition>
    <wonDialog v-bind="{
        width: '525px',
        visible: !!previewVisible,
        hideConfirmBtn: true,
        hideCancelBtn: true,
        showClose: false
      }">
      <div slot="title"></div>
      <div slot="content">
        <el-form
          @submit.native.prevent
          @keyup.native.enter="handleSubmit"
          ref="form"
          :model="form"
          label-width="120px"
          label-position="left"
          :rules="formRules"
        >
          <el-form-item
            label="Voucher Code"
            prop="order"
          >
            <el-input v-model="form.order"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              @click="handleSubmit"
              :loading="btnloading"
              type="primary"
              size="small"
            >Submit</el-button>
          </el-form-item>
        </el-form>
      </div>
    </wonDialog>
  </div>
</template>

<script>
import UserUpload from "./components/user-upload";
import wonDialog from "./won-service/won-dialog";
import axios from "./core/axios";
export default {
  name: "app",
  components: {
    UserUpload,
    wonDialog
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs["form"].$el.onkeyup = event => {
        if (event.keyCode == 13) {
          this.handleSubmit();
        }
      };
    });
  },
  methods: {
    handleSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.btnloading = true;
          axios
            .get("/wowcher/customized/verify", {
              params: {
                voucherCode: this.form.order
              }
            })
            .then(res => {
              if (!res) {
                this.$message.error("Your Voucher Code is invalid.");
                return;
              }
              this.type = res;
              this.previewVisible = false;
              this.showUpload = true;
            })
            .finally(() => {
              this.btnloading = false;
            });
        }
      });
    }
  },
  data() {
    return {
      showUpload: false,
      type: "",
      form: {
        order: ""
      },
      formRules: Object.freeze({
        order: {
          required: true,
          validator: (rule, value, callback) => {
            let rules = /[0-9a-zA-z]{6}-[0-9a-zA-z]{6}$/;
            if (!rules.test(value)) {
              callback(
                new Error(
                  "Please enter Voucher Code in format as shown in guide。"
                )
              );
            } else {
              callback();
            }
          }
        }
      }),
      btnloading: false,
      previewVisible: true
    };
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

header {
  margin: 0 auto;
  padding-bottom: 5px;
  background-color: #f8f8f8;
  background-position: left top;
  background-repeat: no-repeat;
  border-top: 3px solid #eb4141;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
  height: 50px;
  line-height: 50px;
}
.header-span {
  padding-left: 80px;
  color: #555;
  font-size: 26px;
  font-weight: 900;
  font-style: italic;
}
.logo {
  float: right;
  width: 100px;
  height: 50px;
  background: url("./assets/img/logo.jpg") no-repeat center/ 100% auto;
  margin-right: 80px;
}
#app {
  background: url("./assets/img/background.jpg") no-repeat center / 100% 100%;
  min-height: 100%;
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
</style>
