<<<<<<< HEAD
<template>
  <div>
    <!-- 规格参数按钮 -->
    <div class="center">
      <el-button type="primary" @click="addCS">添加规格参数</el-button>
    </div>
    <!-- 弹出层 -->
    <el-dialog title="添加规格参数" width="60%" :visible.sync="outerVisible">
      <el-dialog width="50%" title="添加分组" :visible.sync="innerVisible" append-to-body>
        <IncreaseComp />
      </el-dialog>
      <!-- tree -->
      <ParamsTree @getleimu="getNodeData" />
      <div class="btns">
        <el-button type='text' @click="outerVisible = false">取消</el-button>
        <el-button type='primary' @click="addFenzu" >确定并添加分组</el-button>
      </div>
    </el-dialog>
    <!-- 列表展示 -->
    <el-table :data="paramsList" border style="width: 100%">
      <el-table-column fixed prop="id" label="规格参数ID" width="150"></el-table-column>
      <el-table-column prop="itemCatId" label="分类ID" width="150"></el-table-column>
      <el-table-column prop="paramData" label="规格参数结构" show-overflow-tooltip></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="shanchu(scope.row)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import ParamsTree from '../Home/ProductTree'
import IncreaseComp from './IncreaseComp'

export default {
  name: "Params",
  components:{
    ParamsTree,
    IncreaseComp
  },
  data() {
    return {
      curPage: 1,
      paramsList: [],
      outerVisible:false,
      innerVisible:false
    };
  },
  mounted() {
    this.getdata(this.curPage);
  },
  methods: {
    shanchu(cs) {
      console.log(cs);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$api.getDeleteItemParamById(cs.id).then(res => {
            // console.log(res);
            if (res.status == 200) {
              this.getdata(this.curPage);
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //请求数据
    getdata(page) {
      this.$api.getSelectItemParamAll(page).then(res => {
        // console.log(res);
        if (res.status == 200) {
          this.paramsList = res.data.result;
        }
      });
    },
    //点击添加规格参数按钮
    addCS(){
      this.outerVisible = true
    },
    //点击确定并添加分组按钮
    addFenzu(){
      this.innerVisible = true
    },
    //tree中数据
    getNodeData(v){
      console.log(v)
    }
  }
};
</script>

<style scoped>
.center {
  text-align: center;
  margin: 10px 0;
}
.btns{
  text-align: right;
}
=======
<template>
  <div>
      Params
  </div>
</template>

<script>
export default {
    name:'Params'
}
</script>

<style>

>>>>>>> 87822c509980302f81671397ac6e0c6d4685f535
</style>