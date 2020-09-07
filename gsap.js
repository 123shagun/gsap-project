let circle = document.querySelector('#circle');

window.addEventListener('mousemove', function(details){
    console.log(details.clientX, details.clientY,details.pageX,details.pageY);
    let cursorX = details.pageX;
    let cursorY = details.pageY;

    setTimeout(function(){
        circle.style.top = cursorY + 'px';
    circle.style.left = cursorX + 'px';
    },100)
    
})