function clickMe() {
    document.querySelector(".block").classList.toggle("block-spin");
};


// ******************************************
// *****************************************

const link = document.querySelectorAll('.sclink');
const box = document.querySelectorAll('.scripremo');



for(let i = 0; i < link.length; i++){

    link[i].addEventListener('click', function() {

        for(let ix = 0; ix < link.length; ix++){
            link[ix].classList.remove('active');
            box[ix].classList.remove('active-box');
        }

        link[i].classList.add('active');
        box[i].classList.add('active-box');
    });
}