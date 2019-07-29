let s = [
    { 'type': 'callPhone', 'content': '1', 'contactMethod': 'phone', 'contactTime': '2019-03-25 09:26:55.110000 +00:00', 'saler': 'y' },
    { 'type': 'callPhone', 'content': '18039519860', 'contactMethod': 'phone', 'contactTime': '2019-03-25 09:26:55.110000 +00:00', 'saler': '朱辛浩' },
    { 'type': 'callPhone', 'content': '1', 'contactMethod': 'phone', 'contactTime': '2019-03-25 09:26:55.110000 +00:00', 'saler': '朱辛浩' }
]
let b = [
    { 'type': 'callPhone', 'content': '1', 'saler': '朱辛浩' },
    { 'type': 'callPhone', 'content': '1', 'saler': 'y' }
]
// console.log(utils.findIndex(s,{'type':'callPhone','content':'1','contactTime':'2019-03-25 09:26:55.110000 +00:00','saler':'y'}))

console.log(
    s.filter(sItem => {
        // 遍历 s 
        let hasSame = false;
        // 遍历 b
        b.forEach(bItem => {
            let isSame = true;

            for (let key in bItem) {
                if (sItem[key] != bItem[key]) {
                    isSame = false
                    return;
                }
            }

            if (isSame) {
                hasSame = true;
                return
            }
        })

        return !hasSame
    }))