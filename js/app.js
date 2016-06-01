(function() {
	
    var f, g, result;

    function sum() {

        var f = 4;
        var g = 2;
        result = f + g;
        console.log("The sum for the values are " + result);

    }

    function multiply() {

        var f = 5;
        var g = 4;
        result = f * g;
        console.log("The product for the value is " + result);
    }

    function division() {
        var f = 10;
        var g = 5;
        result = f / g;
        console.log("The dividend for the value is " + result);
    }
    var buttonOne = document.getElementById('buttonOne');
    buttonOne.addEventListener('click', sum, false);
    var buttonTwo = document.getElementById('buttonTwo');
    buttonTwo.addEventListener('click',multiply,false);
    var buttonThree = document.getElementById('buttonThree');
    buttonThree.addEventListener('click',division,false);
})();