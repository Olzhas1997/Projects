var array = [6, 2, 3, 1, 7, 4, 8, 5];

array.sort( (a,b) => a-b );

function DrawArray() {
    var wrapper = $(".blocks-wrapper");
    wrapper.html('');
    
    array.forEach(element => {
        console.log(element);
        wrapper.append(`<div class="block" id="block-${element}">${element}</div>`);
    });
    wrapper.addClass('reDrawed');

    setTimeout(() => {
        wrapper.removeClass('reDrawed');
    },1000)
}

document.addEventListener("DOMContentLoaded", DrawArray);