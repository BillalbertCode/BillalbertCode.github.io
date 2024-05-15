function videoSlider(event,links){
    const sliderItems = document.querySelectorAll(".slider-video-item")
    sliderItems.forEach((item) => {
        item.classList.remove("active")
    })

    const clickedItem = event.target.closest(".slider-video-item")
    clickedItem.classList.add("active")

    document.querySelector(".sliderVideo").src = links;
}