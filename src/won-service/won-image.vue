<template>
  <div class="upload-img">
    <wonDialog
      v-bind="{
        width: '725px',
        visible,
        title: 'Photo Crop'
      }"
      v-on="{
        cancelDialog: this.cancelDialog,
        confirmDialog: this.confirmDialog,
        close: this.dialogClose
      }"
    >
      <div slot="title">
        <span class="dialog-title">Photo Crop</span>
        <span class="dialog-tip"
          >Select the area you want to print on Product.</span
        >
      </div>
      <div slot="content">
        <wonCropper v-if="visible" :src="file" ref="wonCropper"></wonCropper>
      </div>
    </wonDialog>
    <div
      v-if="!value"
      class="image-upload-empty"
      :style="specailStyle"
      @click="handleUploadFile"
    >
      <i class="el-icon-plus plus-icon"></i>
    </div>
    <div v-else class="image-upload-success" :style="specailStyle">
      <img class="image-preview" :src="value" :style="specailStyle" />
      <div class="image-operate" :style="specailStyle">
        <i class="el-icon-zoom-in" @click.stop="handleLook"></i>
        <i class="el-icon-delete" @click.stop="$emit('input', '')"></i>
      </div>
    </div>
    <wonDialog
      v-bind="{
        width: '525px',
        visible: previewVisible,
        title: 'Preview Photo',
        hideConfirmBtn: true
      }"
      v-on="{
        cancelDialog: this.cancelPreviewDialog,
        confirmDialog: this.confirmPreviewDialog,
        close: this.dialogPreviewClose
      }"
    >
      <div slot="title">
        Preview Photo
      </div>
      <img class="preview-img" slot="content" :src="value" />
    </wonDialog>
  </div>
</template>

<script>
import wonDialog from "./won-dialog";
import wonCropper from "./won-cropper";

export default {
  props: {
    value: {
      required: true
    },
    accept: {
      default: "image/png, image/jpeg"
    }
  },
  components: {
    wonCropper,
    wonDialog
  },
  data() {
    return {
      visible: false,
      previewVisible: false,
      file: "",
      type: "image/jpeg",
      specailStyle: {
        width: "150px",
        height: "150px"
      }
    };
  },
  methods: {
    cancelDialog() {
      this.visible = false;
    },
    confirmDialog() {
      let crop = this.$refs["wonCropper"].cropper;
      let judgeAspectRatio = this.$refs["wonCropper"].judgeAspectRatio;
      if (judgeAspectRatio) {
        this.specailStyle = {
          width: "150px",
          height: "150px"
        };
      } else {
        this.specailStyle = {
          width: "150px",
          height: "150px"
        };
      }
      let canvas = crop.getCroppedCanvas();
      let src = canvas.toDataURL(this.type);
      this.$emit("input", src);
      this.visible = false;
    },
    cancelPreviewDialog() {
      this.previewVisible = false;
    },
    confirmPreviewDialog() {
      this.previewVisible = false;
    },
    handleLook() {
      this.previewVisible = true;
    },
    doUpload(file) {
      let URL = window.URL || window.webkitURL;
      let base64 = URL.createObjectURL(file);
      let img = document.createElement('img');
      img.src = base64;
      img.onload = () => {
        let width = img.naturalHeight;
        let height = img.naturalWidth
         if(width < 500 || height < 500){
          this.$confirm('图片像素未达到500 x 500，可能会导致图片不清晰，是否继续使用?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.file = base64;
            this.visible = true;
          }).catch(() => {});
        }else{
          this.file = base64;
          this.visible = true;
        } 
      }
          
    },
    dialogClose() {
      this.visible = false;
    },
    dialogPreviewClose() {
      this.previewVisible = false;
    },
    handleUploadFile() {
      var input = document.createElement("input");
      input.setAttribute("type", "file");
      if (this.accept) {
        input.setAttribute("accept", this.accept);
      }
      input.style.display = "none";
      var inputChange = event => {
        let file = event.target.files[0];

        if (file.size > 1024 * 1024 * 1024) {
          this.$el.removeChild(input);
          return this.$notify.warning({
            title: "错误提示",
            message: "文件大小不能超过1GB"
          });
        }
        this.type = file.type;
        this.doUpload(file);
        this.$el.removeChild(input);
      };
      input.addEventListener("change", inputChange);
      input.addEventListener("click", event => {
        event && event.stopPropagation();
      });

      this.$el.appendChild(input);
      input.click();
    }
  }
};
</script>

<style lang="scss" scoped>
.image-upload-empty {
  width: 150px;
  height: 150px;
  border: 1px solid #d9d9d9;
  border-style: dashed;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover {
    border-color: #45a2ff;
  }
}

.image-upload-success {
  width: 150px;
  height: 150px;
  border: 1px solid #43d060;
  border-style: dashed;
  position: relative;
  .image-preview {
    width: 150px;
    height: 150px;
    display: block;
  }
  &:hover {
    .image-operate {
      opacity: 1;
    }
  }
  .image-operate {
    width: 150px;
    height: 150px;
    position: absolute;
    display: flex;
    opacity: 0;
    justify-content: center;
    align-items: center;
    top: 0px;
    background: rgba(0, 0, 0, 0.7);
    line-height: normal;
    i {
      color: #fff;
      cursor: pointer;
      margin: 0px 5px;
    }
  }
}
.preview-img {
  width: 100%;
}
.plus-icon {
  font-size: 34px;
  color: #d9d9d9;
}
.dialog-title {
  font-size: 22px;
}
.dialog-tip {
  font-size: 15px;
  color: #d9d9d9;
  margin-left: 10px;
}
</style>
