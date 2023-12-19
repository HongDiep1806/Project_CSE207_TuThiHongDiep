Array.from(document.getElementsByTagName('input')).forEach((e, i) => {
    e.addEventListener('keypress', (el) => {
        if (e.value.length > 0) {
            document.getElementsByClassName('fa-caret-down')[i].style.transform = "rotate(180deg)";

        } else {
            document.getElementsByClassName('fa-caret-down')[i].style.transform = "rotate(0deg)";

        }
    })
})
