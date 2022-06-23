import {reactive, onMounted, onBeforeUnmount} from "vue"
// 自定义 hook ，类似于 mixin混入
export default () => {
    // 页面打点相关的数据
    const point = reactive({
        x: 0,
        y: 0
    })
    // 页面打点相关的函数
    const savePoint = e => {
        point.x = e.pageX
        point.y = e.pageY
        console.log(point.x, point.y)
    }
    // 组件挂载后给 window 绑定点击事件
    onMounted(() => {
        window.addEventListener('click', savePoint)
    })
    // 组件销毁前取消绑定事件
    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })

    // 将数据返回出去
    return point
}
