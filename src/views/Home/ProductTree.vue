<template>
  <el-tree
  :props="props"
  :load="loadNode"
  lazy
  @node-click='getNodeData'
  
  >

  </el-tree>
</template>

<script>
export default {
    name:'ProductTree',
    data(){
        return{
            props: {
                label: 'name',
                children: 'zones',
            },
        }
    },
    methods:{
        //getNodeData tree节点被点击时回调
        getNodeData(data){
            // console.log(data)
            this.$emit('getleimu',data)
        },
        loadNode(node, resolve) {
        // console.log(node)
        if (node.level === 0) {
            this.$api.getSelectCategory(1)
            .then(res=>{
            // console.log(res)
            return resolve(res.data);
            })
        }else{
            this.$api.getSelectCategory(node.data.cid)
            .then(res=>{
                // console.log(res)
                return resolve(res.data)
            })
            .catch(error=>{//eslint-disable-line
                return resolve([])//内部有foreach处理 只能返回空数组
            })
        }
      }
    }
}
</script>

<style>

</style>