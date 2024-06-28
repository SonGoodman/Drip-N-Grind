const productContainers = [...document.querySelectorAll('.favs-container')];
const nxtBtn = [...document.querySelectorAll('.favs-next')];
const preBtn = [...document.querySelectorAll('.favs-prev')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})