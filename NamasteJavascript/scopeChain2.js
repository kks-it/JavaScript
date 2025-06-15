function a(){
    var x;
    c();
    function c(){
        console.log(x);
    }
    x = 10;
}


a();