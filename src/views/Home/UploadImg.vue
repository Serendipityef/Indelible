<template>
  <div>
    <div>
      <el-button type="primary"  @click="dialogVisible = true">上传图片</el-button>
      <span style='margin-left:20px;'>{{picurl}}</span>
    </div>
    <div>
      <el-dialog title="上传图片" :visible.sync="dialogVisible" width="50%" append-to-body>
        <el-upload
        class="upload-demo"
        ref="upload"
        action="http://localhost:3000/upload"
        :on-success='successFn'
        :file-list="fileList"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type='primary' @click="dialogVisible = false">确定</el-button>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadImg",
  data(){
      return{
          dialogVisible:false,
          fileList:[],
          picurl:''
      }
  },
  methods:{
      submitUpload() {
        this.$refs.upload.submit();
      },
      //提交成功时的回调
      successFn(response){
          console.log(response)
          this.picurl = response.url;
          this.$emit('getImage',response.url)
          if(Object.keys(response).length>0){
              this.dialogVisible = false
          }
      },
      clearImg(){
        this.picurl = ''
      }
  }
};
</script>

<style>
</style>