<template>
<div @click="getimg()">
    test
</div>
</template>

<script>
import { getCodeImg,getInfo } from '@/api/login';
export default  {
    data(){
        return{
            dataForm: {
                userName: '',
                password: '',
                uuid: '',
                captcha: ''
            },
        }
    },
    mounted(){
        // getCodeImg(1)
        this.getCaptcha()
    },
    methods:{
        getimg(){
            console.log(55)
            // getCodeImg()
            getInfo()
        },
            // 获取验证码
        getCaptcha() {
            this.dataForm.uuid = this.getUUID()
            // this.captchaPath = this.$http.adornUrl(`/captcha.jpg?uuid=${this.dataForm.uuid}`)
        },
        getUUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
                return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
            })
        }
    },
}
</script>

<style>
</style>
  