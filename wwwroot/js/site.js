window.onscroll = function () { revealContent() };

function revealContent() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.querySelector(".section-one-image-one").classList.add = "visible";
    } else {
        document.querySelector(".section-one-image-one").classList.remove = "visible";
    }
}