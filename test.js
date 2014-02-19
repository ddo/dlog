log = new dlog({name: 'Ddo', level: 'trace'});

var str = 'lorem ipsum dolor sit amet, consectetuer adipiscing elit';
test(str);

function func() {return 123;}
test(func);

var arr = [1,2,3,4];
test(arr);

var obj = {1:2, 2:3, 3:4, 5:6};
test(obj);

var arr_obj = [obj, obj, obj, obj];
test(arr_obj);

function test(type) {
    log.info(type);
    log.warn(type);
    log.debug(type);
    log.trace(type);
    log.error(type);
}