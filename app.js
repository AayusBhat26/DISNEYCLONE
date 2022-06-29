const InnerContainer = document.querySelector('.InnerContainer');

let sliders = [];
let index = 0;

const createSlide = () => {
    if(index >= movies.length){
        index = 0;
    }
    // we are creating elements here
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    
    let h1Name = document.createElement('h1');

    imgElement.appendChild(document.createTextNode(''));
    
    h1.appendChild(document.createTextNode(movies[index].Name));
    h1Name.appendChild(document.createTextNode(movies[index].Name))
    p.appendChild(document.createTextNode(movies[index].des));
    
    content.appendChild(h1); 
    content.append(h1Name);
    content.appendChild(p);

    slide.appendChild(content);
    slide.appendChild(imgElement);
    
    InnerContainer.appendChild(slide);

    imgElement.src = movies[index].image;
    index++;
    slide.className = 'slider';
    content.className = 'slideContent';
    h1.className = 'Name';
    h1Name.className = 'Name';
    p.className = 'des';

    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2 )}% -   ${30 * (sliders.length - 2)}px)`;
        // sliders[0].style.marginRight = `50px`;
    }
    // here calc is a css formula for calculation
    // - (negative sign) indicates for negative margin left
    // multiplying with 100 as we want negative 100% per slide.
    // subtracting 2 from slider.length as we want 2nd slide to be in the middle.
    //  ${30 * (sliders.length - 2)} same calculation as of left side, here it is used for 30px margin right

}
// // function fun(){


// // }
    for(let i = 0; i < 7; i++){
        createSlide();
    }
setInterval(() =>{
    createSlide();
},3500)


// card -> videos
const videoCards = [...document.querySelectorAll('.videoCard')]
// yaha per dot use hoga kyuki hum class ko select kr rhe hai. (bhul mat jana)
videoCards.forEach(item =>{
    item.addEventListener('mouseover', () =>{
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () =>{
        let video = item.children[1];
        video.pause();
    })
})
// card sliders
let cardContainers = [...document.querySelectorAll('.cardContainer')];
let preBtn = [...document.querySelectorAll('.preBtn')];
let nextBtn = [...document.querySelectorAll('.nextBtn')];

cardContainers.forEach((item,i) => {
    let dimContainer = item.getBoundingClientRect();
    // this will return the dimensions and the position of the element 
    let widthContainer = dimContainer.width;

    nextBtn[i].addEventListener('click', () =>{
        item.scrollLeft += widthContainer - 100;

    })
    preBtn[i].addEventListener('click', () =>{
        item.scrollLeft -= widthContainer + 100;

    })
})
