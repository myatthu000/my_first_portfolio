// let images_list = ['bg1.png','bg2.png','bg3.png','bg4.png'];

var body = document.body;

// Get the Computed Styles of the Body
var computedStyles = window.getComputedStyle(body);

// Access Specific CSS Properties
var backgroundColor = computedStyles.backgroundColor;
var backgroundImage = computedStyles.backgroundImage;
var color = computedStyles.color;

// Set body default image;
if(localStorage.getItem('image-key') == null){
    // Default
    body.style.backgroundImage = `url(./assets/images/bg12.jpg)`
}else{
    body.style.backgroundImage = localStorage.getItem('image-key')
}

let _blank_a = document.getElementsByTagName('a');
for(let i=0;i<_blank_a.length;i++){
    _blank_a[i].setAttribute("target","_blank");
}


let count = 0;
body.addEventListener('dblclick',(event)=>{
    event.preventDefault();
    if(count < 25){
        count = count+1;
        // console.log(count,`url(./assets/images/bg${count}.jpg)`)
        body.style.backgroundImage = `url(./assets/images/bg${count}.jpg)`
        localStorage.setItem('image-key',body.style.backgroundImage)
        // clearLocalStorageSetTime();
    }else{
        count = 0;
    }
});

// function clearLocalStorageSetTime(){
    setTimeout(function(){
        // location.reload();
        localStorage.removeItem('image-key')
    }, 2000);
// }
