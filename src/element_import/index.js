import Vue from 'vue'
import VueUeditorWrap from 'vue-ueditor-wrap' // ES6 Module 富文本编译器

import {
    Button,
    Card,
    Form,
    FormItem,
    Input,
    Message,
    Table,
    TableColumn,
    Pagination,
    Dialog,
    Tree,
    Upload,
    MessageBox
} from 'element-ui'

Vue.component(Button.name,Button)
Vue.component(Card.name,Card)
Vue.component(Form.name,Form)
Vue.component(FormItem.name,FormItem)
Vue.component(Input.name,Input)
Vue.component(Table.name,Table)
Vue.component(TableColumn.name,TableColumn)
Vue.component(Pagination.name,Pagination)
Vue.component(Dialog.name,Dialog)
Vue.component(Tree.name,Tree)
Vue.component(Upload.name,Upload)

Vue.component('vue-ueditor-wrap', VueUeditorWrap)//富文本编译器

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm; //对话框
Vue.prototype.$message = Message
