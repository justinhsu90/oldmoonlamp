<template>
  <div>
    <div class="container">
      <div class="remark">
        <div class="remark-title">
          <h1>How to do it</h1>
        </div>
        <div class="remark-content">
          <div class="content__item">
            <h3>Setp 1:</h3>
            <div class="item__div">
              <img
                class="item-one__img"
                width="200"
                :src="require('../assets/img/2.jpg')"
                alt=""
              />
              <p>
                Find your Wowcher Code in your Wowcher order page. Wowcher Code
                will be shown on order page. (as shown in red box).
              </p>
            </div>
          </div>
          <div class="content__item">
            <h3>Setp 2:</h3>
            <div class="item__div">
              <p>Enter your Wowcher Code into field on personalized page.</p>
              <img
                class="item-two__img"
                width="400"
                :src="require('../assets/img/1.jpg')"
                alt=""
              />
            </div>
          </div>
          <!-- 1 word -->
          <template v-if="type == 'word' || type == 'doorbell'">
            <div class="content__item">
              <h3>Setp 3:</h3>
              <div class="item__div">
                <p>
                  Please enter delivery info.
                </p>
              </div>
            </div>
            <div class="content__item">
              <h3>Setp 4:</h3>
              <div class="item__div">
                <p>
                  Please enter the content you want to personalise.
                </p>
              </div>
            </div>
            <div class="content__item">
              <h3>Setp 5:</h3>
              <div class="item__div">
                <p>
                  Before your submission, please make sure both wowcher code and
                  the personalised field are entered and selected.
                </p>
              </div>
            </div>
            <div class="content__item">
              <h3>Setp 6:</h3>
              <div class="item__div">
                <p>
                  Click on submit button, and your lovely personalised item will
                  be with you shortly.
                </p>
              </div>
            </div>
          </template>
          <!-- 2 pic-->
          <template v-if="type == 'pic'">
            <div class="content__item">
              <h3>Setp 3:</h3>
              <div class="item__div">
                <p>
                  Please enter delivery info.
                </p>
              </div>
            </div>
            <div class="content__item">
              <h3>Setp 4:</h3>
              <div class="item__div">
                <p>
                  Click on photo area to pick a favorite photo you want to
                  personalize.
                </p>
              </div>
            </div>
            <div class="content__item">
              <h3>Setp 5:</h3>
              <div class="item__div">
                <p>
                  Before your submission, please make sure both Wowcher Code and
                  image are entered and selected.
                </p>
              </div>
            </div>
            <div class="content__item">
              <h3>Setp 6:</h3>
              <div class="item__div">
                <p>
                  Click on submit button, and your lovely personalised item will
                  be with you shortly.
                </p>
              </div>
            </div>
          </template>
          <!-- 3 picword -->
          <template v-if="type == 'picword'">
            <div class="content__item">
              <h3>Setp 3:</h3>
              <div class="item__div">
                <p>
                  Please enter delivery info.
                </p>
              </div>
            </div>
            <div class="content__item">
              <h3>Setp 4:</h3>
              <div class="item__div">
                <p>
                  Please enter the content and pick a favourite photo you want
                  to personalise.
                </p>
              </div>
            </div>
            <div class="content__item">
              <h3>Setp 5:</h3>
              <div class="item__div">
                <p>
                  Before your submission, please make sure both wowcher code and
                  the personalised field and image are entered and selected.
                </p>
              </div>
            </div>
            <div class="content__item">
              <h3>Setp 6:</h3>
              <div class="item__div">
                <p>
                  Click on submit button, and your lovely personalized item will
                  be with you shortly.
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="form-container">
        <div class="form-title">
          <h1>Enter your details</h1>
        </div>
        <div class="form-content">
          <el-form
            ref="form"
            :model="form"
            label-suffix="："
            label-position="right"
            label-width="152px"
            :rules="formRules"
          >
            <el-row :gutter="20" class="content-one">
              <el-col :span="24">
                <el-form-item label="Wowcher Code" prop="order">
                  <el-input disabled v-model="form.order"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item label="Product" prop="model">
                  <el-select
                    v-model="form.model"
                    placeholder="Choose"
                    v-if="type != 'doorbell'"
                  >
                    <el-option
                      v-for="v in selectPhones"
                      :key="v"
                      :label="v"
                      :value="v"
                    ></el-option>
                  </el-select>
                  <el-input disabled v-model="form.model" v-else></el-input>
                </el-form-item>
              </el-col>
          </el-row>
          <el-row class="content-two">
              <el-col class="recipient-info">
                Recipient Info
              </el-col> 
              <el-col :span="12">
                <el-form-item label="Customer Name" prop="customerName">
                  <el-input v-model="form.customerName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  :label="type == 'doorbell' ? 'Address Line 1' : 'Address1'"
                  prop="address1"
                >
                  <el-input v-model="form.address1"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  :label="type == 'doorbell' ? 'Address Line 2' : 'Address2'"
                  prop="address2"
                >
                  <el-input v-model="form.address2"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="City" prop="city">
                  <el-input v-model="form.city"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="County" prop="county">
                  <el-input v-model="form.county"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Country" prop="country">
                  <el-select v-model="form.country" placeholder="Choose">
                    <el-option
                      v-for="(v, i) in countrys"
                      :key="i"
                      :label="v"
                      :value="v"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Postcode" prop="postcode">
                  <el-input v-model="form.postcode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Phone" prop="phone">
                  <el-input v-model="form.phone"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Email" prop="email">
                  <el-input v-model="form.email"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
           <el-row class="content-three">
             <el-col class="personalized-content">
                Personalized Content
              </el-col> 
              <el-col
                :span="12"
                v-if="type == 'picword' || type == 'word' || type == 'doorbell'"
              >
                <el-form-item
                  :label="type == 'doorbell' ? 'House NO.' : 'Customized Word'"
                  prop="personalizedWord"
                >
                  <el-input v-model="form.personalizedWord"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" v-if="type == 'doorbell'">
                <el-form-item
                  :label="
                    type == 'doorbell' ? 'Street Name' : 'Customized Word2'
                  "
                  prop="personalizedWord2"
                >
                  <el-input v-model="form.personalizedWord2"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" v-if="type == 'doorbell'">
                <el-form-item label="Color" prop="color">
                  <el-select v-model="form.color" placeholder="Choose">
                    <el-option
                      v-for="(v, i) in colors"
                      :key="i"
                      :label="v"
                      :value="v"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12" v-if="type == 'picword' || type == 'pic'">
                <el-form-item label="Photo" prop="formSrc" ref="formItem">
                  <wonImage
                    :value="form.formSrc"
                    @input="
                      (form.formSrc = $event),
                        $refs.form.validateField('formSrc')
                    "
                  ></wonImage>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <el-form-item class="form-margin">
                  <el-button
                    @click="submitBtn"
                    class="btn-right"
                    type="primary"
                    size="small"
                    >Submit</el-button
                  >
                </el-form-item>
              </el-col>
             </el-row> 
          </el-form>
        </div>
      </div>
    </div>
    <wonDialog
      v-bind="{
        width: '565px',
        visible: previewVisible,
        hideConfirmBtn: true,
        cancelText: 'Close'
      }"
      v-on="{
        cancelDialog: this.cancelPreviewDialog,
        close: this.cancelPreviewDialog
      }"
    >
      <div slot="title">
        <span>{{ title }}</span>
        <span class="tip">{{ uploadTip }}</span>
      </div>
      <div slot="content">
        <img class="preview-img" :src="value" v-if="value" />
        <span class="preview-error" v-else>{{ value }}</span>
      </div>
    </wonDialog>
  </div>
</template>

<script>
import wonImage from "won/won-image";
import axios from "../core/axios";
import wonDialog from "won/won-dialog";
export default {
  props: ["type", "wowchercode"],
  components: {
    wonImage,
    wonDialog
  },
  data() {
    let model = "";
    if (this.type == "doorbell") {
      model = "doorbell";
    }
    return {
      value: "",
      previewVisible: false,
      title: "Upload Succeed!!!!",
      uploadTip: "",
      countrys: ["GB", "IE"],
      colors: ["Silver", "Black"],
      form: {
        order: this.wowchercode,
        formSrc: "",
        model,
        personalizedWord: "",
        personalizedWord2: "",
        color: "",
        customerName: "",
        address1: "",
        address2: "",
        city: "",
        county: "",
        country: "",
        postcode: "",
        phone: "",
        email: ""
      },
      selectPhones: [],
      formRules: {
        customerName: {
          required: true,
          message: "required"
        },
        address1: {
          required: true,
          message: "required"
        },
        address2: {
          required: false,
          message: "required"
        },
        city: {
          required: true,
          message: "required"
        },
        county: {
          required: true,
          message: "required"
        },
        country: {
          required: true,
          message: "required"
        },
        postcode: {
          required: true,
          message: "required"
        },
        phone: {
          required: true,
          message: "required"
        },
        email: {
          type: "email",
          required: true,
          message: "required"
        },
        model: {
          required: true,
          message: "required"
        },
        formSrc: {
          required: true,
          message: "required"
        },
        personalizedWord: {
          required: true,
          message: "required"
        },
        personalizedWord2: {
          required: true,
          message: "required"
        },
        color: {
          required: true,
          message: "required"
        },
        order: {
          required: true,
          validator: (rule, value, callback) => {
            let rules = /[0-9a-zA-z]{6}-[0-9a-zA-z]{6}$/;
            if (!rules.test(value)) {
              callback(
                new Error(
                  "Please enter Wowcher Code in format as shown in guide。"
                )
              );
            } else {
              callback();
            }
          }
        }
      }
    };
  },
  created() {
    axios({
      url: "/wowcher/customized/model",
      method: "get",
      params: {
        category: "product"
      }
    }).then(res => {
      this.selectPhones = res;
    });
  },
  methods: {
    cancelPreviewDialog() {
      this.previewVisible = false;
    },
    toBlob: dataurl => {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },

    submitBtn() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: " Image Uploading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          });
          let formData = new FormData();
          formData.append("orderId", this.form.order);
          formData.append("model", this.form.model);
          formData.append("customerName", this.form.customerName);
          formData.append("address1", this.form.address1);
          formData.append("address2", this.form.address2);
          formData.append("city", this.form.city);
          formData.append("county", this.form.county);
          formData.append("country", this.form.country);
          formData.append("postcode", this.form.postcode);
          formData.append("phone", this.form.phone);
          formData.append("email", this.form.email);

          if (this.form.personalizedWord) {
            formData.append("personalizedWord", this.form.personalizedWord);
          }

          if (this.form.personalizedWord2) {
            formData.append("personalizedWord2", this.form.personalizedWord2);
          }

          if (this.form.color) {
            formData.append("color", this.form.color);
          }

          if (this.form.formSrc) {
            let blob = this.toBlob(this.form.formSrc);
            formData.append("uploadfile", blob);
          }

          axios({
            url: "wowcher/customized/add",
            method: "POST",
            data: formData,
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
            .then(res => {
              this.previewVisible = true;
              if (res.success) {
                this.title = "Upload Succeed!!!!";
                this.uploadTip =
                  "We received your order info, and you will have your product soon";
                if (this.form.formSrc) {
                  this.value = res.imageUrl;
                }
                this.$message.success("upload success");
              } else {
                if (this.form.formSrc) {
                  this.value = res.errorMsg;
                }
                this.title = "Oops!!!";
                this.uploadTip = "";
                this.$message.error("upload error");
              }
            })
            .finally(() => {
              loading.close();
            });
        } else {
          this.$message.error(
            "Wowcher Code And Photo are needed for Personalisation。"
          );
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.btn-right {
  float: right;
}
.preview-img {
  width: 100%;
}
.preview-error {
  font-size: 17px;
  color: #f56c6c;
}
.remark-title {
  width: 100%;
  height: 80px;
  text-align: center;
  line-height: 80px;
  color: orange;
  font-size: 26px;
  font-weight: 900;
  font-style: italic;
  font-size: 22px;
}
.form-title {
  width: 100%;
  height: 80px;
  text-align: center;
  line-height: 80px;
  color: orange;
  font-size: 26px;
  font-weight: 900;
  font-style: italic;
  font-size: 22px;
}
.remark-content {
  width: 100%;
  background: white;
  margin-bottom: 10px;
  display: inline-block;
  width: 550px;
  border-radius: 8px;
  margin-right: 10px;
  padding: 15px 15px;
  box-sizing: border-box;
  height: 525px;
}
.form-content {
  width: 750px;
  padding: 20px 15px 15px 15px;
  border-radius: 8px;
  background: #f8f8f8;
  box-sizing: border-box;
  display: inline-block;
  // height: 625px;
}
.title {
  width: 1000px;
  margin: 0 auto;
  height: 80px;
  background: white;
  margin-bottom: 10px;
}
.form-margin {
  margin-top: 20px;
}

.content__item {
  margin: 15px 0px;
  font-size: 17px;
  display: flex;
  color: orange;
  h3 {
    width: 75px;
    flex-shrink: 0;
    font-size: 22px;
  }
}
.item-one__img {
  float: right;
}
.item-two__img {
  margin-top: 10px;
}
.item__div {
  p {
    text-indent: 5px;
    padding-left: 5px;
  }
}
.item__note {
  color: black;
  font-size: 14px;
  margin-top: 5px;
}
/deep/ .el-dialog__body {
  padding-top: 15px;
}
.tip {
  color: #666;
  font-size: 12px;
  margin-left: 5px;
}
.content-one{
  padding-right: 20px;
}
.content-two{
  border: 1px solid #DCDFE6;
  padding-right: 20px;
  border-radius: 10px;
}
.content-three{
  border: 1px solid #DCDFE6;
  padding-right: 20px;
  border-radius: 10px;
  margin-top: 10px;
}

.recipient-info{
  color: #606266;
  font-size: 20px;
  text-align: center;
  margin-bottom: 15px;
  margin-top: 10px;
}

.personalized-content{
  @extend .recipient-info;
}

/deep/ .el-form-item{
  margin-bottom: 19px !important;
}
</style>
