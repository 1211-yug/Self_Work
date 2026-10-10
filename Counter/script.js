const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const value = document.getElementById("count");

let count = 0;

decrease.addEventListener("click", function () {
    count--;
    value.textContent = count;
    if (count < 0) {
        value.style.color = "#ff0000ff";
    }
});

reset.addEventListener("click", function(){
    count = 0;
    value.textContent = count;
    value.style.color = "white";
});

increase.addEventListener("click", function(){
    count++;
    value.textContent = count;
    if(count > 0){
        value.style.color = "#17f70fff";
    }
})




