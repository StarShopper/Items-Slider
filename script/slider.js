document.body.onload = initSlider;

function initSlider() {
    //define main containers

    const sliderContainer = document.getElementById("slider");
    const paginationContainer = document.createElement('div')

    //making paginatiion container
    paginationContainer.className = 'pagination';
    sliderContainer.prepend(paginationContainer);

    //count slide items
    const slideCount = document.querySelectorAll('.slide').length;

    for (let i = slideCount; i > 0; i--){
        //Generate radio-buttons
        let radioBtn = document.createElement('input');

        radioBtn.type = 'radio';
        radioBtn.name = 'slide-radio';
        radioBtn.className = 'slide-radio';
        radioBtn.id = `slide-radio-${i}`;

        if (i === 1) radioBtn.checked = true;

        sliderContainer.prepend(radioBtn)

        // Setting lables

        let label = document.createElement('label');
        label.setAttribute('for', `slide-radio-${i}`)
        label.innerHTML = i;

        // Pagination lables to radios
        paginationContainer.prepend(label)
    }
    let autoRun = setInterval(changeSlide, 100000)

    //Stop autoRun at hover on selector

    paginationContainer.addEventListener('mouseenter', () => {
        clearTimeout(autoRun);
    })

    //Run autoRun at hover on selector

    paginationContainer.addEventListener('mouseleave', () => {
        setInterval(changeSlide, 100000)
    })

}
    //creating functionality of the changign slides
function changeSlide(){
    const radioButtons = [...document.querySelectorAll('.slide-radio')]

    const currentIndex = radioButtons.findIndex(rb => rb.checked)

    radioButtons[(currentIndex + 1) % radioButtons.length].checked = true;
}



















