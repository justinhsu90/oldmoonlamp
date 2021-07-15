<template>
  <div>
    <div class="container">
      <div class="form-container">
        <!-- <div class="form-title">
          <h1>Enter your details</h1>
        </div> -->
        <div class="form-content">
          <el-form
            ref="form"
            :model="form"
            label-suffix="："
            label-position="right"
            label-width="152px"
            :rules="formRules"
          >
            <el-row
              :gutter="20"
              class="content-one"
            >
              <el-col :span="24">
                <el-form-item
                  label="Voucher Code"
                  prop="order"
                >
                  <el-input
                    disabled
                    v-model="form.order"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row class="content-two">
              <el-col class="recipient-info">
                Recipient Info
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="Customer Name"
                  prop="customerName"
                >
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
                <el-form-item
                  label="City"
                  prop="city"
                >
                  <el-input v-model="form.city"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="County"
                  prop="county"
                >
                  <el-input v-model="form.county"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="Country"
                  prop="country"
                >
                  <el-select
                    @change="handleCountryChange"
                    v-model="form.country"
                    placeholder="Choose"
                  >
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
                <el-form-item
                  label="Postcode"
                  :prop="form.country == 'IE' ? '' : 'postcode'"
                >
                  <el-input v-model="form.postcode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="Phone"
                  prop="phone"
                >
                  <el-input v-model="form.phone"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="Email"
                  prop="email"
                >
                  <el-input v-model="form.email"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row class="content-three">
              <el-col class="personalized-content">
                Personalized Content
              </el-col>
              <div v-if="isPintuText">
                <el-col :span="12">
                  <el-col :span="24">
                    <el-form-item
                      label="Your name"
                      prop="personalizedWord"
                    >
                      <el-input
                        :maxlength="20"
                        v-model="form.personalizedWord"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item
                      label="your location"
                      prop="personalizedWordTest2"
                    >
                      <el-input
                        :maxlength="20"
                        v-model="form.personalizedWordTest2"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item
                      label="How many likes?"
                      prop="personalizedWordTest3"
                    >
                      <el-input
                        :maxlength="20"
                        v-model="form.personalizedWordTest3"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item
                      label="Post"
                      prop="personalizedWordTest4"
                    >
                      <el-input v-model="form.personalizedWordTest4"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item
                      label="Upload"
                      prop="formSrc"
                    >
                      <wonImage
                        :picType="type"
                        :value="form.formSrc"
                        @input="
                          (form.formSrc = $event),
                            $refs.form.validateField('formSrc')
                        "
                      ></wonImage>
                    </el-form-item>
                  </el-col>
                </el-col>
                <el-col :span="12">
                  <div class="img-container">
                    <div>Preview</div>
                    <div class="img-content">
                      <div
                        class="img-background"
                        :style="{
                          backgroundImage: `url(${form.formSrc})`
                        }"
                      ></div>
                      <span class="img-textOne">{{ form.personalizedWord }}</span>
                      <img
                        src="@/assets/img/6.png"
                        alt=""
                        class="img-text-icon"
                      >
                      <div class="img-textTwo">
                        <img
                          src="@/assets/img/1.png"
                          alt=""
                          class="img-textTwo-icon"
                        >
                        <span>
                          {{
                        form.personalizedWordTest2
                      }}
                        </span>
                      </div>
                      <img
                        src="@/assets/img/2.png"
                        alt=""
                        class="img-textThree-icon"
                      >
                      <img
                        src="@/assets/img/4.png"
                        alt=""
                        class="img-textFour-icon"
                      >
                      <img
                        src="@/assets/img/5.png"
                        alt=""
                        class="img-textFive-icon"
                      >
                      <img
                        src="@/assets/img/7.png"
                        alt=""
                        class="img-textSix-icon"
                      >
                      <div class="img-textThree">
                        <img
                          src="@/assets/img/3.png"
                          alt=""
                          class="img-textSeven-icon"
                        >
                        <span>
                          {{
                          form.personalizedWordTest3
                        }}
                        </span>
                      </div>
                      <span class="img-textFour">{{
                        form.personalizedWordTest4
                      }}</span>
                    </div>
                  </div>
                </el-col>
              </div>
              <el-col
                :span="12"
                v-if="type == 'picword' || isWord || type == 'doorbell'"
              >
                <el-form-item
                  :label="
                    type == 'doorbell'
                      ? 'House NO.'
                      : type == 'itsmetshirt'
                      ? 'Name'
                      : 'Customized Word'
                  "
                  prop="personalizedWord"
                >
                  <el-input
                    :maxlength="20"
                    v-model="form.personalizedWord"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col
                :span="12"
                v-if="isShowText"
              >
                <el-form-item
                  label="Customized Word2"
                  prop="personalizedWordTest2"
                >
                  <el-input
                    :maxlength="20"
                    v-model="form.personalizedWordTest2"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col
                :span="12"
                v-if="
                  isShowText &&
                    type != 'HH0215STF01' &&
                    type != 'HH0215STF01' &&
                    type != 'HH0215STH01'
                "
              >
                <el-form-item
                  label="Customized Word3"
                  prop="personalizedWordTest3"
                >
                  <el-input
                    :maxlength="20"
                    v-model="form.personalizedWordTest3"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col
                :span="12"
                v-if="isShowText && type == 'HH0215STG01'"
              >
                <el-form-item
                  label="Customized Word4"
                  prop="personalizedWordTest4"
                >
                  <el-input
                    :maxlength="20"
                    v-model="form.personalizedWordTest4"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col
                :span="12"
                v-if="isShowText"
              >
                <el-form-item
                  label=""
                  prop=""
                >
                  <el-button
                    v-if="!hideHavePreview"
                    @click="handlePreviewClick"
                    type="success"
                    plain
                  >Preview</el-button>
                </el-form-item>
              </el-col>
              <el-col
                :span="12"
                v-if="type == 'doorbell'"
              >
                <el-form-item
                  :label="
                    type == 'doorbell' ? 'Street Name' : 'Customized Word2'
                  "
                  prop="personalizedWord2"
                >
                  <el-input v-model="form.personalizedWord2"></el-input>
                </el-form-item>
              </el-col>
              <el-col
                :span="12"
                v-if="type == 'doorbell'"
              >
                <el-form-item
                  label="Color"
                  prop="color"
                >
                  <el-select
                    v-model="form.color"
                    placeholder="Choose"
                  >
                    <el-option
                      v-for="(v, i) in colors"
                      :key="i"
                      :label="v"
                      :value="v"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col
                :span="12"
                v-if="type == 'itsmetshirt'"
              >
                <el-form-item
                  label=""
                  prop=""
                >
                  <el-button
                    @click="handlePreviewClick"
                    type="success"
                    plain
                  >Preview</el-button>
                </el-form-item>
              </el-col>
              <el-col
                :span="12"
                v-if="type == 'picword' || isPic || type == 'itsmetshirt'"
              >
                <el-form-item
                  :label="type == 'itsmetshirt' ? 'Avatar' : 'Photo'"
                  prop="formSrc"
                  ref="formItem"
                >
                  <wonImage
                    :picType="type"
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
                  <div class="footer-submit">
                    <div
                      class="some-tip"
                      @click="handleCallPopInfo"
                    >
                      Something you need to know
                    </div>
                    <el-button
                      @click="submitBtn"
                      class="btn-right"
                      type="primary"
                      size="small"
                    >Submit</el-button>
                  </div>
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
        visible: !!previewVisible,
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
        <img
          class="preview-img"
          :src="value"
          v-if="value"
        />
        <span
          class="preview-error"
          v-else
        >{{ value }}</span>
      </div>
    </wonDialog>
    <wonDialog
      v-bind="{
        width: '565px',
        visible: !!testPreview,
        hideConfirmBtn: true,
        cancelText: 'Close',
        class: 'dialog-custom'
      }"
      v-on="{
        cancelDialog: this.testCancelPreviewDialog,
        close: this.testCancelPreviewDialog
      }"
    >
      <div slot="title">
        <span>Preview</span>
      </div>
      <div slot="content">
        <div
          class="preview-text-img"
          v-loading="!previewSrc"
        >
          <img
            style="width:100%"
            :src="previewSrc"
          />
        </div>
      </div>
    </wonDialog>
  </div>
</template>

<script>
import wonImage from "won/won-image";
import axios from "../core/axios";
import wonDialog from "won/won-dialog";
// import Photo from "@/assets/img/photo.png";
import lIsEmpty from "lodash/isEmpty";
export default {
  props: ["type", "wowchercode"],
  components: {
    wonImage,
    wonDialog
  },
  data() {
    let pics = [
      "pic",
      "HI0232CIR01",
      "HI0232WHI01",
      "HH0213WHI01",
      "HH0214BLK01",
      "HH0214BLL01",
      "HH0215WHI01",
      "TY0098WHI01",
      "HH0210PNK01",
      "HH0215CUS01"
    ];

    let words = [
      "word",
      "AC0149",
      "HH0215STA01",
      "HH0215STG01",
      "HH0215STF01",
      "HH0215STH01",
      "itsmetshirt"
    ];
    let isShowText = [
      "AC0149",
      "HH0215STA01",
      "HH0215STG01",
      "HH0215STF01",
      "HH0215STH01"
    ].includes(this.type);
    this.imgSrcObj = {
      HH0215STA01: require("@/assets/img/HH0215STA01.jpg"),
      HH0215STG01: require("@/assets/img/HH0215STG01.jpg"),
      HH0215STF01: require("@/assets/img/HH0215STF01.jpg"),
      HH0215STH01: require("@/assets/img/HH0215STH01.jpg")
    };
    let isPic = pics.includes(this.type);
    let isWord = words.includes(this.type);
    let hideHavePreview = ["AC0149"].includes(this.type);
    return {
      isPintuText: this.type == "HH0424YEL01",
      hideHavePreview,
      isShowText,
      testPreview: false,
      isPic,
      isWord,
      value: "",
      previewVisible: false,
      title: "Upload Succeed!!!!",
      uploadTip: "",
      countrys: ["GB", "IE"],
      colors: ["Silver"],
      previewSrc: "",
      form: {
        order: this.wowchercode,
        formSrc: "",
        size: "",
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
        email: "",
        personalizedWordTest2: "",
        personalizedWordTest3: "",
        personalizedWordTest4: ""
      },
      selectPhones: [],
      formRules: {
        personalizedWordTest2: {
          required: this.type == "HH0424YEL01",
          message: "required"
        },
        personalizedWordTest3: {
          required: this.type == "HH0424YEL01",
          message: "required"
        },
        personalizedWordTest4: {
          required: this.type == "HH0424YEL01",
          message: "required"
        },
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
          validator: (rule, value, callback) => {
            let { country } = this.form;
            if ((country == "GB" || country == "IE") && value) {
              if (country == "GB") {
                let postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
                if (!postcodeRegEx.test(value)) {
                  callback(new Error(`Incorrect formatted postcode`));
                  return;
                }
              }
              if (country == "IE") {
                let pattern =
                  "\\b(?:(" +
                  "a(4[125s]|6[37]|7[5s]|[8b][1-6s]|9[12468b])|" +
                  "c1[5s]|" +
                  "d([0o][1-9sb]|1[0-8osb]|2[024o]|6w)|" +
                  "e(2[15s]|3[24]|4[15s]|[5s]3|91)|" +
                  "f(12|2[368b]|3[15s]|4[25s]|[5s][26]|9[1-4])|" +
                  "h(1[2468b]|23|[5s][34]|6[25s]|[79]1)|" +
                  "k(3[246]|4[5s]|[5s]6|67|7[8b])|" +
                  "n(3[79]|[49]1)|" +
                  "p(1[247]|2[45s]|3[126]|4[37]|[5s][16]|6[17]|7[25s]|[8b][15s])|" +
                  "r(14|21|3[25s]|4[25s]|[5s][16]|9[35s])|" +
                  "t(12|23|34|4[5s]|[5s]6)|" +
                  "v(1[45s]|23|3[15s]|42|9[2-5s])|" +
                  "w(12|23|34|91)|" +
                  "x(3[5s]|42|91)|" +
                  "y(14|2[15s]|3[45s])" +
                  ")\\s?[abcdefhknoprtsvwxy\\d]{4})\\b";

                let reg = new RegExp(pattern, "i");
                let i = String(value).search(reg);
                if (i == -1) {
                  callback(new Error(`Incorrect formatted postcode`));
                  return;
                }
              }
            }
            if (value === "") {
              callback(new Error("required"));
              return;
            }
            callback();
          }
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
        formSrc: {
          required: true,
          message: "required"
        },
        personalizedWord: {
          required: true,
          validator: (rule, value, callback) => {
            if (isWord || this.type == "picword") {
              let rule = /^[0-9a-zA-ZÀ-ÿ-.,-_/#$@%&*();:'"+={}?! ]*$/;
              if (!rule.test(value)) {
                callback(
                  new Error(
                    `only English characters and  _ / # $ @ % & * ( ) ; : ' " + - = { } ? ! are allowed`
                  )
                );
                return;
              }
            }
            if (value === "") {
              callback(new Error("required"));
              return;
            }
            callback();
          }
        },
        personalizedWord2: {
          required: true,
          message: "required"
        },
        size: {
          required: true,
          message: "required"
        },
        color: {
          required: true,
          message: "required"
        },
        order: {
          required: true
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
  mounted() {
    this.handleCallPopInfo();
  },
  methods: {
    handleCallPopInfo() {
      if (this.init) {
        this.handleShow(this.popData);
        return;
      }
      axios({
        url: "wowcher/customized/notice",
        method: "get",
        params: {
          voucherCode: this.wowchercode
        }
      }).then(res => {
        this.popData = res;
        this.init = true;
        this.handleShow(res);
      });
    },
    handleShow(res) {
      let h = this.$createElement;
      let data = res;
      if (!lIsEmpty(data)) {
        data = data.map(item => {
          return h("p", { style: "color: #666" }, item);
        });
        this.$msgbox({
          title: "Something you need to know",
          message: h("div", null, data),
          showClose: false,
          confirmButtonText: "I Understand",
          showCancelButton: false,
          customClass: "custom-class",
          beforeClose: (action, instance, done) => {
            done();
          }
        }).then(() => {}, () => {});
      }
    },
    handlePreviewClick() {
      // preview 按鈕：  /data-server/wowcher/customized/generatepreview
      // POST
      // 傳 texts  四段字的json
      // orderId 傳用戶輸入的wowcher code
      // sku   傳 verify 回來的 值, 例如 pic, picword 這些
      let formData = new FormData();
      let obj = {};
      if (this.form.personalizedWord) {
        obj["first"] = this.form.personalizedWord;
      }
      if (this.form.personalizedWordTest2) {
        obj["second"] = this.form.personalizedWordTest2;
      }
      if (this.form.personalizedWordTest3) {
        obj["third"] = this.form.personalizedWordTest3;
      }
      if (this.form.personalizedWordTest4) {
        obj["forth"] = this.form.personalizedWordTest4;
      }
      formData.append("texts", JSON.stringify(obj));
      formData.append("orderId", this.wowchercode);
      formData.append("sku", this.type);
      if (this.type == "itsmetshirt") {
        if (this.form.formSrc) {
          let blob = this.toBlob(this.form.formSrc);
          formData.append("uploadfile", blob);
        }
      }
      this.previewSrc = "";
      this.testPreview = true;
      axios({
        url: "/wowcher/customized/generatepreview",
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(res => {
        this.previewSrc = res;
      });
    },
    handleCountryChange() {
      this.$refs["form"].clearValidate("postcode");
    },
    testCancelPreviewDialog() {
      this.testPreview = false;
    },
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
          formData.append("customerName", this.form.customerName);
          formData.append("address1", this.form.address1);
          formData.append("address2", this.form.address2);
          formData.append("city", this.form.city);
          formData.append("county", this.form.county);
          formData.append("country", this.form.country);
          formData.append("postcode", this.form.postcode);
          formData.append("phone", this.form.phone);
          formData.append("email", this.form.email);
          let obj = {};
          if (this.isShowText) {
            formData.append("sku", this.type);
          }
          if (this.form.personalizedWord) {
            obj["first"] = this.form.personalizedWord;
          }
          if (this.form.personalizedWordTest2 || this.form.personalizedWord2) {
            obj["second"] =
              this.form.personalizedWordTest2 || this.form.personalizedWord2;
          }
          if (this.form.personalizedWordTest3) {
            obj["third"] = this.form.personalizedWordTest3;
          }
          if (this.form.personalizedWordTest4) {
            obj["forth"] = this.form.personalizedWordTest4;
          }

          formData.append("personalizedWord", JSON.stringify(obj));

          if (this.form.color) {
            formData.append("color", this.form.color);
          }

          if (this.form.formSrc) {
            let blob = this.toBlob(this.form.formSrc);
            formData.append("uploadfile", blob);
          }

          if (this.type == "itsmetshirt") {
            formData.append("sku", "itsmetshirt");
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
              if (res.success) {
                this.$emit("submit");
                // this.title = "Upload Succeed!!!!";
                //   this.uploadTip =
                //     "We received your order info, and you will have your product soon";
                //   if (
                //     res.imageUrl.indexOf("http://") != -1 ||
                //     res.imageUrl.indexOf("https://") != -1
                //   ) {
                //     this.previewVisible = true;
                //     this.value = res.imageUrl;
                //   } else {
                //     this.value = Photo;
                //   }
                //   this.$message.success("upload success");
                // } else {
                //   this.title = "Oops!!!";
                //   this.uploadTip = "";
                //   this.$message.error("upload error");
              }
            })
            .finally(() => {
              loading.close();
            });
        } else {
          this.$message.error(
            "Voucher Code And Photo are needed for Personalisation。"
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
  height: 36px;
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
  height: 70px;
  text-align: center;
  line-height: 70px;
  color: orange;
  font-weight: 900;
  font-style: italic;
  font-size: 22px;
}
.remark-content {
  background: white;
  margin-bottom: 10px;
  display: inline-block;
  width: 450px;
  border-radius: 8px;
  margin-right: 10px;
  padding: 15px 15px;
  box-sizing: border-box;
  height: 525px;
}
.form-content {
  width: 850px;
  padding: 20px 15px 15px 15px;
  border-radius: 8px;
  background: #f8f8f8;
  box-sizing: border-box;
  display: inline-block;
  // height: 625px;
}
.footer-submit {
  display: flex;
  justify-content: flex-end;
}
.some-tip {
  color: #666;
  text-decoration: underline;
  text-align: center;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
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
.content-one {
  padding-right: 20px;
}
.content-two {
  border: 1px solid #dcdfe6;
  padding-right: 20px;
  border-radius: 10px;
}
.content-three {
  border: 1px solid #dcdfe6;
  padding-right: 20px;
  border-radius: 10px;
  margin-top: 10px;
}

.recipient-info {
  color: #606266;
  font-size: 20px;
  text-align: center;
  margin-bottom: 15px;
  margin-top: 10px;
}

.personalized-content {
  @extend .recipient-info;
}

/deep/ .el-form-item {
  margin-bottom: 19px !important;
}

.preview-text-img {
  position: relative;
}

.preview-text {
  position: absolute;
  top: 30px;
  left: 131px;
  width: 270px;
  height: 270px;
  text-align: center;
  font-size: 16px;
  font-family: "Chalkboard", Courier, monospace;
  border-radius: 50%;
  background: transparent;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  p {
    width: 100%;
    margin: 10px 0px;
  }
}

.preview-text-aaa {
  top: 37px;
  p {
    line-height: 1em;
    display: flex;
    justify-content: center;
  }
  p:nth-child(1) {
    margin-top: 0px;
  }
  p:nth-child(2) {
    margin-top: 26px;
    margin-bottom: -10px;
  }
  p:nth-child(3) {
    margin-top: 10px;
  }
  p:nth-child(4) {
    margin-top: 10px;
  }
}

.preview-text-bbb {
  top: 38px;
  left: 130px;
  p {
    line-height: 1em;
  }
  p:nth-child(1) {
    margin-bottom: 0px;
    margin-top: 0px;
  }
  p:nth-child(2) {
    margin-bottom: 0px;
    margin-top: 0px;
  }
}

.preview-text-ccc {
  top: 119px;
  left: 127px;
  height: 104px;
  p {
    line-height: 1em;
  }
  p:nth-child(1) {
    margin-bottom: 0px;
  }
  p:nth-child(2) {
    margin-bottom: 0px;
  }
}

.preview-text-ddd {
  top: -16px;
  left: 146px;
  p {
    line-height: 1em;
  }
  p:nth-child(1) {
    margin-bottom: 0px;
  }
  p:nth-child(2) {
    margin-bottom: 0px;
  }
}

.preview-text-container {
  flex: 1;
}

.PWfontSize40 {
  font-size: 40px;
}
.PWfontSize32 {
  font-size: 32px;
}
.PWfontSize20 {
  font-size: 20px;
}

.lineOne {
  .word-color-one {
    color: #eeaaad;
  }
  .word-color-two {
    color: #a7d8d9;
  }
  .word-color-three {
    color: #ebb7bd;
  }
  .word-color-four {
    color: #fffc8f;
  }
}

.lineTwo {
  .word-color-one {
    color: #a7d8d9;
  }
  .word-color-two {
    color: #fffc8f;
  }
  .word-color-three {
    color: #eeaaad;
  }
  .word-color-four {
    color: #ebb7bd;
  }
}

.lineThree {
  .word-color-one {
    color: #eeaaad;
  }
  .word-color-two {
    color: #a7d8d9;
  }
  .word-color-three {
    color: #ebb7bd;
  }
  .word-color-four {
    color: #fffc8f;
  }
}

.lineFour {
  .word-color-one {
    color: #a7d8d9;
  }
  .word-color-two {
    color: #fffc8f;
  }
  .word-color-three {
    color: #eeaaad;
  }
  .word-color-four {
    color: #ebb7bd;
  }
}

/deep/ .dialog-custom .el-dialog {
  border-radius: 10px !important;
}

.img-container {
  padding: 20px;
  padding-left: 40px;
  padding-top: 0px;
  .img-content {
    background: white;
    padding-top: 65px;
    // padding-bottom: 60px;
    min-height: 430px;
    border-radius: 10px;
    margin-top: 5px;
    width: 300px;
    position: relative;
  }
  .img-background {
    width: 300px;
    height: 300px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .img-textOne {
    position: absolute;
    top: 20px;
    font-family: "Neue Helvetica";
    left: 0px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 20px;
  }

  .img-text-icon {
    position: absolute;
    right: 20px;
    width: 30px;
    height: 40px;
    top: 20px;
  }
  .img-textTwo {
    position: absolute;
    top: 44px;
    left: 0px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    font-size: 14px;
    font-family: "Neue Helvetica";
    display: flex;
    align-items: center;
  }

  .img-textTwo-icon {
    width: 16px;
    height: 16px;
  }
  .img-textThree-icon {
    position: absolute;
    top: 370px;
    left: 10px;
    width: 30px;
    height: 30px;
  }

  .img-textFour-icon {
    position: absolute;
    top: 370px;
    left: 40px;
    width: 30px;
    height: 30px;
  }

  .img-textFive-icon {
    position: absolute;
    top: 370px;
    left: 70px;
    width: 30px;
    height: 30px;
  }

  .img-textSix-icon {
    position: absolute;
    top: 370px;
    left: 250px;
    width: 30px;
    height: 30px;
  }
  .img-textSeven-icon {
    width: 15px;
    height: 15px;
  }
  .img-textThree {
    position: absolute;
    top: 400px;
    left: 5px;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    font-size: 12px;
    font-weight: bold;
    font-family: "Neue Helvetica";
    display: flex;
    align-items: center;
  }

  .img-textFour {
    position: absolute;
    top: 420px;
    left: 0px;
    padding-left: 15px;
    padding-right: 10px;
    box-sizing: border-box;
    font-weight: bold;
    font-family: "Neue Helvetica";
    width: 100%;
    word-break: break-all;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>
