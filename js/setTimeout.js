/**
 * 用 setTimeout 实现 setInterval
 * setTimout 表示当前运行完毕后再隔1s执行，setInterval 指每隔1s中执行
 */
function intv(count){
    if(count<=0) return;
    setTimeout(()=>{
        console.log('ok')
        intv(--count)
    },1000)
}
intv(5)

