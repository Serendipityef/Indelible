<<<<<<< HEAD
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
        <UploadImg @getImage='getImage' ref="child" />
    </el-form-item>
    <el-form-item label="商品描述">
        <!-- <el-input v-model="form.desc"></el-input> -->
        <!-- 富文本编辑器 -->
        <vue-ueditor-wrap v-model="form.desc" :config='myConfig'></vue-ueditor-wrap>
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
            id:'',
            form:{
                title:'',
                cid:"",
                sellPoint:"",
                price:"",
                num:"",
                desc:"",
                image:""
            },
            myConfig:{
                // 编辑器不自动被内容撑高
                autoHeightEnabled: false,
                // 初始容器高度
                initialFrameHeight: 240,
                // 初始容器宽度
                initialFrameWidth: '100%',
                // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
                UEDITOR_HOME_URL: '/UEditor/'
            }
        }
    },
    watch:{
        cid(n){
            //设置cid
            if(n){
                this.form.cid = n
            }
        },
        preData(n){
            console.log(n)
            if(n){
                this.form.title = n.id;
                this.form.cid = n.cid
                this.form.sellPoint = n.sellPoint
                this.form.price = n.price
                this.form.num = n.num
                this.form.desc = n.descs
                this.form.image = n.image
                this.id = n.id
            }
        }
    },
    props:['innerVisible','outerVisible','shopleimu','cid','preData'],
    methods:{
        //选择类目事件 触发父级组件事件 修改innerVisible的值
        selectClass(){
            this.$emit('changeInner',true)
        },
        //获取图片image
        getImage(v){
            // console.log(v)
            this.form.image = v
        },
        cancel(){
            // console.log('取消')
            this.$emit('changeOuter',false)
        },
        //提交
        onSubmit(){
            // console.log('提交',this.form)
            this.$emit('changeOuter',false)
            if(this.id){
                // id存在 编辑
                console.log('编辑')
                this.$api.getUpdateTbItem({...this.form,id:this.id})
                .then(res=>{
                    console.log(res);
                    if(res.status == 200){
                        this.$emit('getdata',1)
                        this.$message({
                            message:'编辑成功',
                            type:'success'
                        })
                    }else{
                        this.$message.error('编辑失败')
                    }
                })
            }else{
                //id不存在 提交
                console.log('提交')
                this.$api.getInsertTbItem(this.form)
                .then(res=>{
                    if(res.status == 200){
                        //成功后调用父级事件 请求数据 刷新视图
                        this.$emit('getdata',1)
                        //再次点击添加时清空上次添加的内容
                        this.form = {
                            title:'',
                            cid:"",
                            sellPoint:"",
                            price:"",
                            num:"",
                            desc:"",
                            image:""
                        }
                        //商品类目需要单独设置,调用父级组件事件 清空cid和类目
                        this.$emit('clearLmId')
                        //清空UploadImg中picimg
                        this.$refs.child.clearImg()
                    }
                })
            }
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
=======
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
>>>>>>> 87822c509980302f81671397ac6e0c6d4685f535
</style>