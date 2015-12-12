$(document).ready(function(){

	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    return false;
	});

    var imgLen = document.getElementById('iphone-slides');
    var images = imgLen.getElementsByTagName('img');
    var counter = 1;

    if(counter <= images.length){
        setInterval(function(){
            images[0].src = images[counter].src;
            console.log(images[counter].src);
            counter++;

            if(counter === images.length){
                counter = 1;
            }
        },3000);
    }


// // $(document).ready(function(){
//     var img = document.getElementById('iphone-slides');
//     var images = $('img');
//     var counter = 0;

//     if(counter <= images.length){
//         setInterval(function(){
//             $(images).hide();
//             $(images[counter]).show();
//             counter++;

//             if(counter === images.length){
//                 counter = 0;
//             }
//         },3000);
//     }
});