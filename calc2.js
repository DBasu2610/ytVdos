var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var result = document.getElementById('result');
var form = document.getElementById('x%y');



form.addEventListener('submit', function(event) {
    if(!num1.value || !num2.value) {
        alert("please enter a valid number");
    }
    else {
        var x = parseFloat(num1.value);
        var y = parseFloat(num2.value);
        var results = x/y *100;

        result.innerText = "Answer: " + results + "%";
        event.preventDefault();
        
        
    }
    
    
    
});