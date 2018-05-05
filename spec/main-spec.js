const main = require('../main/main');

describe('main()', function() {
    var result1 = '0A0B';
    var result2 = '0A2B'
    var result3 = '1A1B'
    var result4 = '4A0B'
    it('全部没猜中', function(){
        var expectResult = main('1234');
        expect(expectResult).toEqual(result1);
    });

    it('猜中数字，但没猜中位置', function(){
        var expectResult = main('1256');
        expect(expectResult).toEqual(result2);
    });

    it('猜中1个数字和它的位置，猜中1个数字但是没猜中位置', function(){
        var expectResult = main('1652');
        expect(expectResult).toEqual(result3);
    });

    it('猜中全部数字和它的位置', function(){
        var expectResult = main('5678');
        expect(expectResult).toEqual(result4);
    });

    it('输入相同的数字', function(){
        var expectResult = main('5675');
        expect(expectResult).toEqual('请输入4个不同的数字');
    });


});