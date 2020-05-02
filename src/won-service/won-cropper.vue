<template>
  <div
    class="won-cropper"
    v-loading="imgLoading"
  >
    <div class="won-cropper-main">
      <img
        ref="mainImg"
        :src="src"
      />
    </div>
    <div class="mt15">
      <i class="clearmid"></i>
      <!-- <div class="won-cropper-preview" ref="previewImg"></div> -->
      <div>
        <div class="scale">
          <el-button
            size="small"
            type="success"
            @click="$emit('zoom', 0.1)"
          >Zoom In</el-button>
          <el-button
            size="small"
            type="success"
            @click="$emit('zoom', -0.1)"
          >Zoom Out</el-button>
          <!-- <el-button size="small" type="success" @click="setAspectRatio"
            >Rotate</el-button
          > -->
        </div>
        <div class="mb15">
          <!-- <el-radio-group v-model="aspectRatio" size="small">
            <el-radio-button :label="originAspectRatio"
              >锁定比例</el-radio-button
            > -->
          <!-- <el-radio-button :label="NaN">自由比例</el-radio-button> -->
          <!-- </el-radio-group> -->
        </div>
        <!-- <div class="mb15">
          <el-button-group>
            <el-button size="small" type="success" @click="$emit('rotate', 90)"
              >右转</el-button
            >
            <el-button size="small" type="success" @click="$emit('rotate', -90)"
              >左转</el-button
            >
          </el-button-group>
        </div>
        <div>
          <el-button-group>
            <el-button
              size="small"
              type="success"
              @click="$emit('scaleX', scaleX === 1 ? -1 : 1)"
              >左右翻转</el-button
            >
            <el-button
              size="small"
              type="success"
              @click="$emit('scaleY', scaleY === 1 ? -1 : 1)"
              >上下翻转</el-button
            >
          </el-button-group>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";
import { Button, ButtonGroup, RadioButton, RadioGroup } from "element-ui";

export default {
  props: {
    isFree: {
      type: Boolean,
      default: false
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    src: {},
    picType: {
      type: String
    }
  },

  data() {
    // HH0213WHI01  3:4
    // HH0214BLK01  4:6
    // HH0214BLL01  5:8
    // HH0215WHI01  4:6
    // TY0098WHI01  5:7
    let aspectRatio = 1;
    switch (this.picType) {
      case "HH0213WHI01":
        aspectRatio = 3 / 4;
        break;
      case "HH0214BLK01":
        aspectRatio = 4 / 6;
        break;
      case "HH0214BLL01":
        aspectRatio = 5 / 8;
        break;
      case "HH0215WHI01":
        aspectRatio = 4 / 6;
        break;
      case "TY0098WHI01":
        aspectRatio = 5 / 7;
        break;
      case "circle":
        aspectRatio = 1;
        break;  
    }
    return {
      imgLoading: true,
      scaleX: 1,
      scaleY: 1,
      aspectRatio
      // originAspectRatio: 1
      // judgeAspectRatio: true
    };
  },

  computed: {},

  watch: {
    // aspectRatio(val) {
    //   this.cropper.setAspectRatio(val);
    // }
  },

  mounted() {
    this.cropperInit();
    this.$on("zoom", msg => {
      this.cropper.zoom(msg);
    });
    this.$on("rotate", msg => {
      this.cropper.rotate(msg);
    });
    this.$on("scaleX", msg => {
      this.scaleX = msg;
      this.cropper.scaleX(msg);
    });
    this.$on("scaleY", msg => {
      this.scaleY = msg;
      this.cropper.scaleY(msg);
    });
  },

  methods: {
    // setAspectRatio() {
    //   if (!this.judgeAspectRatio) {
    //     this.judgeAspectRatio = true;
    //     this.cropper.setAspectRatio(70 / 150);
    //   } else {
    //     this.judgeAspectRatio = false;
    //     this.cropper.setAspectRatio(150 / 70);
    //   }
    // },
    cropperInit() {
      let image = new Image();
      this.imgLoading = true;
      image.onload = () => {
        this.imgLoading = false;
      };
      image.src = this.src;

      let img = this.$refs["mainImg"];
      // let preview = this.$refs["previewImg"];
      this.cropper = new Cropper(img, {
        // preview,
        background: false,
        responsive: true,
        restore: true,
        aspectRatio: this.aspectRatio,
        viewMode: 1,
        autoCropArea: 1,
        minContainerWidth: 600
      });
    }
  },

  components: {
    [Button.name]: Button,
    [ButtonGroup.name]: ButtonGroup,
    [RadioButton.name]: RadioButton,
    [RadioGroup.name]: RadioGroup
  }
};
</script>
<style lang="scss">
.won-cropper {
  &-main {
    width: 100%;
    height: 400px;
    overflow: hidden;
  }
  &-preview {
    width: 180px;
    height: 180px;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
  }
  &-controls {
    overflow: hidden;
    float: right;
    text-align: right;
  }
}
.scale {
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
}
.mb15 {
  margin-bottom: 15px;
}
.mt15 {
  margin-top: 15px;
}
</style>
