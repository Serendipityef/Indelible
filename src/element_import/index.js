import Vue from 'vue'
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
    Upload
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
Vue.prototype.$message = Message
