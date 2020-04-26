import Vue from 'vue'
import {
    Button,
    Card,
    Form,
    FormItem,
    Input,
    Message,
} from 'element-ui'

Vue.component(Button.name,Button)
Vue.component(Card.name,Card)
Vue.component(Form.name,Form)
Vue.component(FormItem.name,FormItem)
Vue.component(Input.name,Input)
Vue.prototype.$message = Message
