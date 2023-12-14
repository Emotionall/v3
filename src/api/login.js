import { get, post } from '@/utils/request'
import request from '@/utils/request'
// 获取验证码
export function getCodeImg1(p){
    get('/captchaImage', p);
}
export function getCodeImg() {
    return request({
      url: 'bid/main/getWeatherInfo',
      method: 'get',
      data:{
        day:5
      }
    })
}
export function getInfo() {
  return request({
    url: '/main/getWeatherInfo',
    method: 'get',
    data:{
      day:5
    }
  })
}