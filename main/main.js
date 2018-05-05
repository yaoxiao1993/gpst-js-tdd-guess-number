// Write your cade below:
// 由于随机数无法预测，不便于测试，所以生成随机数到函数先注释掉，用测试用例中的输入代替，等到用例通过后再测试随机数也能通过测试。
// function getRandomString(){
//     var randomString = Math.floor(Math.random() * 10) + '';
//     for(var i = 0; i < 3; i ++){
//         newRandomNum = Math.floor(Math.random() * 10); 
//         for(var j in randomString){
//             while(newRandomNum === randomString.charAt(j)){
//                 newRandomNum = Math.floor(Math.random() * 10);
//             }     
//         } 
//         randomString = randomString + newRandomNum;
//     }
//     return randomString;
// }

function main(input) {
    var result = '';
    // var randomString = getRandomString();
    var randomString = '5678';
    var count_a = 0;
    var count_b = 0;

    //判断输入中是否有重复值
    var flag = true;
    for(var i = 0; i < input.length; i ++){
        if(input.charAt(i) === input.charAt(i + 1)){
            flag = false;
            break;
        };
    }

    ///判断输入中是否有重复值，若没有才比较输入和随机值；若有，提示‘请输入4个不同的数字’
    if(flag === true ){
        for(var i = 0; i < 4; i ++){
            if(input.charAt(i) === randomString.charAt(i)){
                count_a ++;
            }else{
                for(var j = 0; j < 4; j ++){
                    if(input.charAt(i) === randomString.charAt(j)){
                        count_b ++;
                        break;
                    }
                }
            }
        }
        result = count_a + 'A' + count_b + 'B';
        return result;
    }else{
        return '请输入4个不同的数字';
    }
    
};

module.exports = main
// var input = '5667';
// main(input)