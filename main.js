let btn = document.getElementById('btn')
let mobile_menu = document.getElementById('mobile_menu')
let body = document.getElementById('body')

function myFunction() 
{
    if(mobile_menu.style.display === "none")
    {
        mobile_menu.style.display = "block"
        body.style.overflow = "hidden"
    }else
    {
        mobile_menu.style.display = "none"
        body.style.overflow = "auto"
    }
}