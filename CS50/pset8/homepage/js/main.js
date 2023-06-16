for (menu_item of $(".menu a")){
    menu_item.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "rgba(255,255,255, 0.6)";
    }, false)
}

for (menu_item of $(".menu a")){
    menu_item.addEventListener("mouseout", (event) => {
        console.log(event.target);
        event.target.style.backgroundColor = "transparent";
    }, false)
}
