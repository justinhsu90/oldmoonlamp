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
                Find your Voucher Code in your Wowcher order page. Voucher Code
                will be shown on order page. (as shown in red box).
              </p>
            </div>
          </div>
          <div class="content__item">
            <h3>Setp 2:</h3>
            <div class="item__div">
              <p>Enter your Voucher Code into field on personalized page.</p>
              <img
                class="item-two__img"
                width="300"
                :src="require('../assets/img/1.jpg')"
                alt=""
              />
            </div>
          </div>
          <!-- 1 word -->
          <template v-if="isWord || type == 'doorbell'">
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
                  Before your submission, please make sure both Voucher code and
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
          <template v-if="isPic">
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
                  Before your submission, please make sure both Voucher Code and
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
                  Before your submission, please make sure both Voucher code and
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

              <!-- <el-col :span="12">
                <el-form-item
                  label="Product"
                  prop="model"
                >
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
                  <el-input
                    disabled
                    v-model="form.model"
                    v-else
                  ></el-input>
                </el-form-item>
              </el-col> -->
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
                  prop="postcode"
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
              <el-col
                :span="12"
                v-if="type == 'picword' || isWord || type == 'doorbell'"
              >
                <el-form-item
                  :label="type == 'doorbell' ? 'House NO.' : 'Customized Word'"
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
                v-if="isShowText && type != 'HH0215STF01'"
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
                v-if="type == 'picword' || isPic"
              >
                <el-form-item
                  label="Photo"
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
                  <el-button
                    @click="submitBtn"
                    class="btn-right"
                    type="primary"
                    size="small"
                  >Submit</el-button>
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
        visible: testPreview,
        hideConfirmBtn: true,
        cancelText: 'Close'
      }"
      v-on="{
        cancelDialog: this.testCancelPreviewDialog,
        close: this.testCancelPreviewDialog
      }"
    >
      <div slot="title">
        <span>預覽</span>
      </div>
      <div slot="content">
        <div class="preview-text-img">
          <img
            class="preview-img"
            :src="imgSrcObj[type]"
          />
          <div :class="[
              'preview-text',
              {
                'preview-text-aaa': type == 'HH0215STG01',
                'preview-text-bbb': type == 'HH0215STF01',
                'preview-text-ccc': type == 'HH0215STH01'
              }
            ]">
            <div class="preview-text-container">
              <p
                v-if="form.personalizedWord"
                :class="{
                  PWfontSize40: form.personalizedWord.length <= 10,
                  PWfontSize32:
                    form.personalizedWord.length <= 15 &&
                    form.personalizedWord.length > 10,
                  PWfontSize28:
                    (form.personalizedWord.length <= 40) &
                    (form.personalizedWord.length > 15)
                }"
              >
                <template v-if="type == 'HH0215STG01'">
                  <span
                    :class="{
                      'word-color-one': (i + 1) % 5 == 1,
                      'word-color-two': (i + 1) % 5 == 2,
                      'word-color-three': (i + 1) % 5 == 3,
                      'word-color-four': (i + 1) % 5 == 4,
                      'word-color-five': (i + 1) % 5 == 0
                    }"
                    v-for="(v, i) in form.personalizedWord"
                    :key="i"
                  >{{ v }}</span>
                </template>
                <span v-else>
                  {{ form.personalizedWord }}
                </span>
              </p>
              <p
                v-if="form.personalizedWordTest2"
                :class="{
                  PWfontSize40: form.personalizedWordTest2.length <= 10,
                  PWfontSize32:
                    form.personalizedWordTest2.length <= 15 &&
                    form.personalizedWordTest2.length > 10,
                  PWfontSize28:
                    (form.personalizedWordTest2.length <= 40) &
                    (form.personalizedWordTest2.length > 15)
                }"
              >
                <template v-if="type == 'HH0215STG01'">
                  <span
                    :class="{
                      'word-color-one': (i + 1) % 5 == 1,
                      'word-color-two': (i + 1) % 5 == 2,
                      'word-color-three': (i + 1) % 5 == 3,
                      'word-color-four': (i + 1) % 5 == 4,
                      'word-color-five': (i + 1) % 5 == 0
                    }"
                    v-for="(v, i) in form.personalizedWordTest2"
                    :key="i"
                  >{{ v }}
                  </span>
                </template>
                <span v-else>
                  {{ form.personalizedWordTest2 }}
                </span>
              </p>
              <p
                v-if="form.personalizedWordTest3"
                :class="{
                  PWfontSize40: form.personalizedWordTest3.length <= 10,
                  PWfontSize32:
                    form.personalizedWordTest3.length <= 15 &&
                    form.personalizedWordTest3.length > 10,
                  PWfontSize28:
                    (form.personalizedWordTest3.length <= 40) &
                    (form.personalizedWordTest3.length > 15)
                }"
              >
                <template v-if="type == 'HH0215STG01'">
                  <span
                    :class="{
                      'word-color-one': (i + 1) % 5 == 1,
                      'word-color-two': (i + 1) % 5 == 2,
                      'word-color-three': (i + 1) % 5 == 3,
                      'word-color-four': (i + 1) % 5 == 4,
                      'word-color-five': (i + 1) % 5 == 0
                    }"
                    v-for="(v, i) in form.personalizedWordTest3"
                    :key="i"
                  >{{ v }}
                  </span>
                </template>
                <span v-else>
                  {{ form.personalizedWordTest3 }}
                </span>
              </p>
              <p
                v-if="form.personalizedWordTest4"
                :class="{
                  PWfontSize40: form.personalizedWordTest3.length <= 10,
                  PWfontSize32:
                    form.personalizedWordTest3.length <= 15 &&
                    form.personalizedWordTest3.length > 10,
                  PWfontSize28:
                    (form.personalizedWordTest3.length <= 40) &
                    (form.personalizedWordTest3.length > 15)
                }"
              >
                <template v-if="type == 'HH0215STG01'">
                  <span
                    :class="{
                      'word-color-one': (i + 1) % 5 == 1,
                      'word-color-two': (i + 1) % 5 == 2,
                      'word-color-three': (i + 1) % 5 == 3,
                      'word-color-four': (i + 1) % 5 == 4,
                      'word-color-five': (i + 1) % 5 == 0
                    }"
                    v-for="(v, i) in form.personalizedWordTest4"
                    :key="i"
                  >{{ v }}
                  </span>
                </template>
                <span v-else>
                  {{ form.personalizedWordTest4 }}
                </span>
              </p>
            </div>
          </div>
        </div>
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
    let pics = [
      "pic",
      "HH0213WHI01",
      "HH0214BLK01",
      "HH0214BLL01",
      "HH0215WHI01",
      "TY0098WHI01"
    ];
    // aaa,bbb,ccc,ddd

    let words = ["word", "ddd", "aaa", "bbb", "ccc"];
    let isShowText = ["ddd", "aaa", "bbb", "ccc"];
    this.imgSrcObj = {
      ddd: require("@/assets/img/HH0215STA01.jpg"),
      aaa: require("@/assets/img/HH0215STG01.jpg"),
      bbb: require("@/assets/img/HH0215STF01.jpg"),
      ccc: require("@/assets/img/HH0215STH01.jpg")
    };
    let isPic = pics.includes(this.type);
    let isWord = words.includes(this.type);
    return {
      isShowText,
      testPreview: false,
      isPic,
      isWord,
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
        email: "",
        personalizedWordTest2: "",
        personalizedWordTest3: "",
        personalizedWordTest4: ""
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
        // personalizedWordTest2: {
        //   required: true,
        //   message: "required"
        // },
        // personalizedWordTest3: {
        //   required: true,
        //   message: "required"
        // },
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
                  "Please enter Voucher Code in format as shown in guide。"
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
    handlePreviewClick() {
      this.testPreview = true;
    },
    handleCountryChange() {
      this.$refs["form"].validateField("postcode");
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

          if (this.isShowText) {
            let str = this.form.personalizedWord;
            if (this.form.personalizedWordTest2) {
              str += "\n" + this.form.personalizedWordTest2;
            }
            if (this.form.personalizedWordTest3) {
              str += "\n" + this.form.personalizedWordTest3;
            }
            if (this.form.personalizedWordTest4) {
              str += "\n" + this.form.personalizedWordTest4;
            }
            formData.append("personalizedWord", str);
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
  }
  p:nth-child(1) {
    margin-top: 13px;
  }
  p:nth-child(2) {
    margin-top: 20px;
    margin-bottom: 0px;
  }
  p:nth-child(3) {
    margin: 0px;
  }
  p:nth-child(4) {
    margin: 0px;
  }
}

.preview-text-bbb {
  top: 120px;
  left: 130px;
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

.preview-text-ccc {
  top: 115px;
  left: 127px;
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

.word-color-one {
  color: red;
}
.word-color-two {
  color: green;
}
.word-color-three {
  color: blue;
}
.word-color-four {
  color: yellow;
}
.word-color-five {
  color: violet;
}
</style>
