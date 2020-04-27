<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="商品类目" >
        <el-button type='primary' @click='selectClass'>选择类目</el-button>
        <span class="myLeimu">{{shopleimu}}</span>
    </el-form-item>
    <el-form-item label="商品标题">
        <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="商品卖点">
        <el-input v-model="form.sellPoint"></el-input>
    </el-form-item>
    <el-form-item label="活动价格">
        <el-input v-model="form.price"></el-input>
    </el-form-item>
    <el-form-item label="库存数量">
        <el-input v-model="form.num"></el-input>
    </el-form-item>
    <el-form-item label="上传图片">
        <UploadImg />
    </el-form-item>
    <el-form-item label="商品描述">
        <el-input v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item class="Form-btns">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import UploadImg from './UploadImg'

export default {
    name:'ProductForm',
    components:{
        UploadImg
    },
    data(){
        return{
            form:{
                title:'',
                cid:"",
                sellPoint:"",
                price:"",
                num:"",
                desc:"",
                image:""
            }
        }
    },
    props:['innerVisible','outerVisible','shopleimu','cid'],
    methods:{
        //选择类目事件 触发父级组件事件 修改innerVisible的值
        selectClass(){
            this.$emit('changeInner',true)
        },

        cancel(){
            // console.log('取消')
            this.$emit('changeOuter',false)
        },
        onSubmit(){
            // console.log('提交')
            this.$emit('changeOuter',false)
        }
    }
}
</script>

<style scpoed>
.myLeimu{
    margin-left: 15px;
}
.Form-btns{
    text-align: center;
}
</style>