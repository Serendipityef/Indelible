<<<<<<< HEAD
<template>
  <div>
    <!-- 顶部button按钮 -->
    <div class="center">
      <el-button type="primary" @click="addProduct">添加商品</el-button>
    </div>
    <!-- product列表 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="id" label="商品id" width="100"></el-table-column>
      <el-table-column prop="title" label="商品名称" width="150"></el-table-column>
      <el-table-column prop="image" label="商品图片" width="150" show-overflow-tooltip></el-table-column>
      <el-table-column prop="sellPoint" label="商品卖点" width="220" show-overflow-tooltip></el-table-column>
      <el-table-column prop="price" label="商品价格" width="100"></el-table-column>
      <el-table-column prop="num" label="商品数量" width="100"></el-table-column>
      <el-table-column prop="descs" label="商品描述" show-overflow-tooltip></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="bianji(scope.row)" size="small">编辑</el-button>
          <el-button @click="shanchu(scope.row)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <div class="center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="20"
        :current-page="currentPage"
        @current-change="currentChange"
      ></el-pagination>
    </div>

    <!-- Dialog对话框内容 -->
    <el-dialog title="添加产品" width="80%" :visible.sync="outerVisible">
      <el-dialog width="70%" title="商品类目" :visible.sync="innerVisible" append-to-body>
        <!--  append-to-body  Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true -->

        <!-- 树形控件 -->
        <ProductTree @getleimu="getNodeData" />
        <el-button type="primary" @click="innerVisible = false">确定</el-button>
      </el-dialog>

      <ProductFrom
        :outerVisible="outerVisible"
        :innerVisible="innerVisible"
        @changeOuter="changeOuter"
        @changeInner="changeInner"
        :shopleimu="shopleimu"
        :cid="cid"
        @getdata="getdata"
        @clearLmId="clearLmId"
        :preData='preData'
      />
    </el-dialog>
  </div>
</template>

<script>
import ProductFrom from "./ProductForm";
import ProductTree from "./ProductTree";

export default {
  name: "Home",
  components: {
    ProductFrom,
    ProductTree
  },
  data() {
    return {
      tableData: [],
      currentPage: 1,
      outerVisible: false,
      innerVisible: false,
      shopleimu: "",
      cid: "",
      preData:{}
    };
  },
  methods: {
    //接收树形控件组件数据
    getNodeData(data) {
      this.shopleimu = data.name;
      this.cid = data.cid;
    },
    //清空类目和id
    clearLmId() {
      this.shopleimu = "";
      this.cid = "";
    },
    //重复使用网络请求 简单封装
    getdata(page) {
      this.$api.productList(page).then(res => {
        // console.log(res)
        this.tableData = res.data.result;
      });
    },
    // 分页器事件
    currentChange(page) {
      console.log(page);
      this.currentPage = page;
      this.getdata(page);
    },
    //点击编辑按钮时事件
    bianji(cs) {
      console.log(cs);
      this.outerVisible = true
      this.$api.getPreUpdateItem(cs.id)
      .then(res=>{
        console.log(res)
        if(res.status == 200){
          this.preData = res.data
        }
      })
    },
    //点击删除按钮事件
    shanchu(cs) {
      console.log(cs);
      //网络请求删除接口
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$api.getDeleteItemById(cs.id).then(res => {
            // console.log(res);
            if (res.status == 200) {
              this.getdata(1);
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
    //点击添加商品按钮事件
    addProduct() {
      this.outerVisible = true;
      this.preData = {}
    },
    //修改outerVisible的值
    changeOuter(v) {
      this.outerVisible = v;
    },
    //修改innerVisible的值
    changeInner(v) {
      this.innerVisible = v;
    }
  },
  mounted() {
    this.getdata(this.currentPage);
  }
};
</script>

<style lang="less" scoped>
.center {
  margin: 10px 0;
  text-align: center;
}
</style>
=======
<template>
  <div>
    <!-- 顶部button按钮 -->
    <div class="center">
      <el-button type='primary' @click="addProduct">添加商品</el-button>
    </div>
    <!-- product列表 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="id" label="商品id" width="100"></el-table-column>
      <el-table-column prop="title" label="商品名称" width="150"></el-table-column>
      <el-table-column prop="image" label="商品图片" width="150" show-overflow-tooltip ></el-table-column>
      <el-table-column prop="sellPoint" label="商品卖点" width="220" show-overflow-tooltip></el-table-column>
      <el-table-column prop="price" label="商品价格" width="100"></el-table-column>
      <el-table-column prop="num" label="商品数量" width='100'></el-table-column>
      <el-table-column prop="descs" label="商品描述" show-overflow-tooltip></el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="180">
      <template slot-scope="scope">
        <el-button @click="bianji(scope.row)"  size="small">编辑</el-button>
        <el-button @click='shanchu(scope.row)' type="danger" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <div class="center">
      <el-pagination
      background
      layout="prev, pager, next"
      :total="20"
      :current-page='currentPage'
      @current-change='currentChange'
      >
      </el-pagination>
    </div>

    <!-- Dialog对话框内容 -->
    <el-dialog
      title="添加产品"
      width='80%'
      :visible.sync="outerVisible"
    >
      <el-dialog
        width='70%'
        title='商品类目'
        :visible.sync="innerVisible"
        append-to-body
      >  
      <!--  append-to-body  Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true -->

        <!-- 树形控件 -->
        <ProductTree @getleimu='getNodeData' />
        <el-button type='primary' @click='innerVisible = false'>确定</el-button>

      </el-dialog>


        <ProductFrom :outerVisible='outerVisible' :innerVisible='innerVisible' 
          @changeOuter="changeOuter" @changeInner='changeInner'
          :shopleimu='shopleimu' :cid='cid'
        />

    </el-dialog>
  </div>
</template>

<script>
import ProductFrom from './ProductForm'
import ProductTree from './ProductTree'

export default {
  name: "Home",
  components:{
    ProductFrom,
    ProductTree,
  },
  data(){
    return{
      tableData:[],
      currentPage:1,
      outerVisible:false,
      innerVisible:false,
      shopleimu:'',
      cid:''
    }
  },
  methods:{
    //接收树形控件组件数据
    getNodeData(data){
      this.shopleimu = data.name;
      this.cid = data.cid
    },
    //重复使用网络请求 简单封装
    getdata(page){
      this.$api.productList(page)
      .then(res=>{
        // console.log(res)
        this.tableData = res.data.result
      })
    },
    // 分页器事件
    currentChange(page){
      console.log(page)
      this.currentPage = page;
      this.getdata(page)
    },
    //点击编辑按钮时事件
    bianji(cs){
      console.log(cs)
    },
    //点击删除按钮事件
    shanchu(cs){
      console.log(cs)
    },
    //点击添加商品按钮事件
    addProduct(){
      this.outerVisible = true
    },
    //修改outerVisible的值
    changeOuter(v){
      this.outerVisible = v
    },
    //修改innerVisible的值
    changeInner(v){
      this.innerVisible = v
    }
  },
  mounted(){
    this.getdata(this.currentPage)
  }
};
</script>

<style lang="less" scoped>
.center{
  margin: 10px  0;
  text-align: center;
}
</style>
>>>>>>> 87822c509980302f81671397ac6e0c6d4685f535
