
let a_block = document.getElementsByClassName("anim")
// a_block.array.forEach(el => {
//     el.onscroll = () => {

//     }
// });
// let wrap = document.querySelector(".wrapper")
// wrap.scr
// console.dir(a_block[0])


let num = document.getElementsByClassName("num")
// document.onscroll = function () {
window.addEventListener('scroll', function onScroll() {
    for (let i = 0; i < a_block.length; i++) {
        if (window.scrollY > a_block[i].offsetTop - window.innerHeight) {
            a_block[i].style.animationName = 'anim';
            if (a_block[i].classList.value.search("stats_block") != -1) {
                // console.log(a_block[i].children[1])
                // this.removeEventListener('scroll', onScroll)
                let start = +a_block[i].children[1].textContent;
                let end = +a_block[i].children[1].dataset.max
                // console.dir(a_block[i].children[1].dataset.max)
                // let end = 10;
                let interval = setInterval(function () {
                    if (end - start > 10000)
                        start += 10000
                    else if (end - start > 1000)
                        start += 1000
                    else if (end - start > 100) {
                        start += 5
                    }
                    else ++start
                    a_block[i].children[1].textContent = start
                    if (start >= end) {
                        a_block[i].children[1].textContent = end

                        clearInterval(interval)

                    }
                }, 5)
            }
        }
    }
});


// slider
function Slider(width_li, margin_right_li, col_view_img) {
    var step = width_li + margin_right_li,
        slider_box_with = col_view_img * step - margin_right_li,
        $col_img = $("#slider_box>ul>li").length,
        col_main_left = 0,
        max_col_main_left = $col_img * step;
    $("#slider_box").width(slider_box_with);
    $("#slider_box>ul>li").width(width_li).css("margin-right", margin_right_li);
    $("#left_nav").click(function () {
        if (-col_main_left == max_col_main_left - col_view_img * step) {
            col_main_left = 0;
        } else {
            col_main_left = col_main_left - step;
        }
        $("#slider_box>ul").css("margin-left", col_main_left + "px");
    });
    $("#right_nav").click(function () {
        if (col_main_left == 0) {
            col_main_left = -max_col_main_left + col_view_img * step;
        } else {
            col_main_left = col_main_left + step;
        }
        $("#slider_box>ul").css("margin-left", col_main_left + "px");
    });
}
$(Slider(520, 15, 3));

// let sub = document.getElementsByClassName("sub_menu")
// // sub.forEach(el => {
// for (let i = 0; i < sub.length; i++) {
//     sub[i].onmouseover = () => {
//         console.dir(sub[i])
//         sub[i].nextSibling.style.opacity = 1
//         sub[i].nextSibling.style.visibilty = "visible"
//     }
//     sub[i].onmouseleave = () => {
//         sub[i].nextSibling.style.visibilty = "hidden"
//         sub[i].nextSibling.style.opacity = 0
//     }
// }