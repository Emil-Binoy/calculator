
const toggleButton = document.querySelector('[data-collapse-toggle="navbar-cta"]');
const menu = document.getElementById("navbar-cta");


toggleButton.addEventListener("click", function () {
    
    menu.classList.toggle("hidden");

    
    const isExpanded = menu.classList.contains("hidden");
    toggleButton.setAttribute("aria-expanded", !isExpanded);
});
function inp(num){
    document.getElementById("inpbox").value +=num;
}
function clr(){
    document.getElementById("inpbox").value=" ";
}
function calc(){
    const display =document.getElementById("inpbox");
    try{
        display.value=eval(display.value);
    }
    catch(e){
        display.value= "Error";
    }

}