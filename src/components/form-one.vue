<template>
  <div class="model">
    <div class="form-container">
      <h1 class="form__tt-one">Enter Your Wowcher Code</h1>
      <el-form
        @submit.native.prevent
        @keyup.native.enter="handleSubmit"
        ref="form"
        :model="form"
        label-width="0px"
        label-position="left"
        :rules="formRules"
      >
        <el-form-item
          label=""
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
      <div>
        <h3 class="form__tt-two">Please enter YOUR OWN code as below</h3>
        <div>
          <img
            class="form__tip-img"
            src="@/assets/img/form-tip.jpg"
            alt=""
          />
        </div>
        <div class="form__tip-title">
          Note: According to policy of the platform, customized product can’t be
          cancelled or refund after redeemed.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/core/axios";
export default {
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
              this.$emit("submit", {
                type: this.type,
                order: this.form.order
              });
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
      form: {
        order: ""
      },
      formRules: Object.freeze({
        order: {
          required: true
        }
      }),
      btnloading: false
    };
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
  .form-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    width: 600px;
    padding: 30px 80px 30px 80px;
    border-radius: 10px;
  }

  .form__tt-one {
    color: orange;
    text-align: center;
    margin-bottom: 20px;
  }
  .form__tt-two {
    color: orange;
    text-align: center;
    margin-bottom: 10px;
  }
  .form__tip-img {
    width: 300px;
    margin: 0 auto;
    display: block;
    margin-bottom: 20px;
  }
  .form__tip-title {
    color: #606266;
    font-size: 16px;
    text-indent: 10px;
  }
}
</style>
