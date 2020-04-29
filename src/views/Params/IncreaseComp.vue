<template>
  <div>
    <el-form :model="fenzu">
      <el-form-item class="center">
        <el-button @click="addDomain">添加分组</el-button>
      </el-form-item>

      <el-form-item
        label-width="80px"
        v-for="(domain, index) in fenzu.mainFenzu"
        :label="'分组' + index"
        :key="domain.key"
        :prop="'mainFenzu.' + index + '.value'"
        :rules="{
            required: true, message: '域名不能为空', trigger: 'blur'
        }"
      >
        <el-input v-model="domain.value"></el-input>
        <el-button @click="removeParent(domain)">删除(主)</el-button>
        <el-button type='primary' @click="addChildren(domain)">添加子分支</el-button>
        <div 
            v-for="(item,idx) in domain.children" 
            :key='idx'
            :label="'子分支'+idx"
            :prop="'mainFenzu.' + index + '.children'+idx+'.value'"
            :rules="{
            required: true, message: '域名不能为空', trigger: 'blur'
        }"
        >
            <el-input v-model="item.value"></el-input>
            <el-button @click="removeChildren(item,domain)">删除子分支</el-button>
        </div>
      </el-form-item>
      <el-form-item class="center">
        <el-button type="primary">提交</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "IncreaseComp",
  data() {
    return {
      fenzu: {
            mainFenzu: [{
                value: '主分组1',
                key:1,
                children:[
                    {
                        value:'主分组1-分支1',
                        key:11
                    },
                    {
                        value:'主分组1-分支2',
                        key:12
                    }
                ]
            },{
                value: '主分组2',
                key:2,
                children:[
                    {
                        value:'主分组2-分支1',
                        key:21
                    },
                    {
                        value:'主分组2-分支2',
                        key:22
                    }
                ]
            }]
        }
    };
  },
  methods: {
    //主分支添加
    addDomain() {
      this.fenzu.mainFenzu.push({
        value: "主分组"+(this.fenzu.mainFenzu.length+1),
        key: this.fenzu.mainFenzu.length+1,
        children: [
          {
            value: "主分组"+(this.fenzu.mainFenzu.length+1) +'分支1',
            key: (this.fenzu.mainFenzu.length+1) + '1'
          }
        ]
      });
    },
    //删除主分支
    removeParent(domain){
        console.log(domain)
        let index = this.fenzu.mainFenzu.indexOf(domain)
        if(index != -1){
            this.fenzu.mainFenzu.splice(index,1)
        }
    },
    //删除子分支
    removeChildren(item,domain){
        console.log(item)
        console.log(domain)
        let index = domain.children.indexOf(item)
        if(index != -1){
            domain.children.splice(index,1)
        }
    },
    // 子分支添加
    addChildren(domain){
        console.log(domain)
        domain.children.push({
            value:'主分组'+domain.key+'分支'+(domain.children.length+1),
            key:domain.children.length+1
        })
    }
  }
};
</script>

<style scoped>
.center {
  text-align: center;
}
</style>