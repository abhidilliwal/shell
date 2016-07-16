console.log('hey there');

window.Something = {
    doSomething: function() {
        var a = 1;
        return a+arguments[0];
    }
}


function doAnother() {
    console.log('doAnother');
}