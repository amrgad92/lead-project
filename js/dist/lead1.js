function navlead(){
    let box1 = document.querySelector('#box1');
    let box2 = document.querySelector('#box2');
    let box3 = document.querySelector('#box3');
    let box4 = document.querySelector('#box4');
    let box5 = document.querySelector('#box5');
    let box6 = document.querySelector('#box6');
    let box7 = document.querySelector('#box7');
    let box8 = document.querySelector('#box8');
    let box9 = document.querySelector('#box9');
    let box10 = document.querySelector('#box10');
    let box11 = document.querySelector('#box11');
    let box12 = document.querySelector('#box12');
    let box13 = document.querySelector('#box13');
    let box14 = document.querySelector('#box14');
    let box15 = document.querySelector('#box15');
    let box16 = document.querySelector('#box16');

    let check1 = document.querySelector('#check1');
    let check2 = document.querySelector('#check2');
    let check3 = document.querySelector('#check3');
    let check4 = document.querySelector('#check4');
    let check5 = document.querySelector('#check5');
    let check6 = document.querySelector('#check6');
    let check7 = document.querySelector('#check7');
    let check8 = document.querySelector('#check8');
    let check9 = document.querySelector('#check9');
    let check10 = document.querySelector('#check10');
    let check11 = document.querySelector('#check11');
    let check12 = document.querySelector('#check12');
    let check13 = document.querySelector('#check13');
    let check14 = document.querySelector('#check14');
    let check15 = document.querySelector('#check15');
    let check16 = document.querySelector('#check16');


    let input = document.querySelector('#input');
    let searchbar = document.querySelector('#searchbar');

        // slidetoggle

        $('#funone').click(function () {
            $('#cardone').slideToggle()
        });
    
        $('#funtwo').click(function () {
            $('#cardtwo').slideToggle()
        });
    
        $('#funthree').click(function () {
            $('#cardthree').slideToggle()
        });
    
        $('#funfour').click(function () {
            $('#cardfour').slideToggle()
        });
    
        $('#funfive').click(function () {
            $('#cardfive').slideToggle()
        });
    
        $('#funsix').click(function () {
            $('#cardsix').slideToggle()
        });
    
        $('#funseven').click(function () {
            $('#cardseven').slideToggle()
        });
    
        $('#funeight').click(function () {
            $('#cardeight').slideToggle()
        });
    
    
    
    
        // box
    
        $(box1).click(function(){
    
            if (box1.checked == true) {
                check1.style.display = 'block';
            } else {
                check1.style.display = 'none';
            }
    
        });
    
    
        $(box2).click(function(){
    
            if (box2.checked == true) {
                check2.style.display = 'block';
            } else {
                check2.style.display = 'none';
            }
    
        });
    
    
        $(box3).click(function(){
    
            if (box3.checked == true) {
                check3.style.display = 'block';
            } else {
                check3.style.display = 'none';
            }
    
        });
    
        $(box4).click(function(){
    
            if (box4.checked == true) {
                check4.style.display = 'block';
            } else {
                check4.style.display = 'none';
            }
    
        });
    
        $(box5).click(function(){
    
            if (box5.checked == true) {
                check5.style.display = 'block';
            } else {
                check5.style.display = 'none';
            }
    
        });
    
        $(box6).click(function(){
    
            if (box6.checked == true) {
                check6.style.display = 'block';
            } else {
                check6.style.display = 'none';
            }
    
        });
    
        $(box7).click(function(){
    
            if (box7.checked == true) {
                check7.style.display = 'block';
            } else {
                check7.style.display = 'none';
            }
    
        });
    
        $(box8).click(function(){
    
            if (box8.checked == true) {
                check8.style.display = 'block';
            } else {
                check8.style.display = 'none';
            }
    
        });
    
        $(box9).click(function(){
    
            if (box9.checked == true) {
                check9.style.display = 'block';
            } else {
                check9.style.display = 'none';
            }
    
        });
    
        $(box10).click(function(){
    
            if (box10.checked == true) {
                check10.style.display = 'block';
            } else {
                check10.style.display = 'none';
            }
    
        });
    
        $(box11).click(function(){
    
            if (box11.checked == true) {
                check11.style.display = 'block';
            } else {
                check11.style.display = 'none';
            }
    
        });
    
        $(box12).click(function(){
    
            if (box12.checked == true) {
                check12.style.display = 'block';
            } else {
                check12.style.display = 'none';
            }
    
        });
    
        $(box13).click(function(){
    
            if (box13.checked == true) {
                check13.style.display = 'block';
            } else {
                check13.style.display = 'none';
            }
    
        });
    
        $(box14).click(function(){
    
            if (box14.checked == true) {
                check14.style.display = 'block';
            } else {
                check14.style.display = 'none';
            }
    
        });
    
        $(box15).click(function(){
    
            if (box15.checked == true) {
                check15.style.display = 'block';
            } else {
                check15.style.display = 'none';
            }
    
        });
    
            $(box16).click(function(){
    
            if (box16.checked == true) {
                check16.style.display = 'block';
            } else {
                check16.style.display = 'none';
            }
    
        });

    $(input).on('keyup', function () { 
        if (input.value != "") {
            searchbar.style.display = 'block'
        } else {
            searchbar.style.display = 'none'
        }
     });

   //kennavbar 
     $("#ken").click(function () {
        $("#admin").fadeToggle(300)
    })

    // fullscreen
    $('#btnscreen').on('click', function () {
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
    
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        } else {
    
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
        }
    });
}

navlead()



 function leadplug() {

            // sidebar navbar
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });




                // smartwizard navbar
                $('#smartwizard').smartWizard({
                    // theme: 'dots',
                    // transitionEffect: 'slide',
                    // transitionSpeed: '400',
                    toolbarSettings: {
                        toolbarPosition: 'bottom', // none, top, bottom, both
                        toolbarButtonPosition: 'right', // left, right, center
                        showNextButton: true, // show/hide a Next button
                        showPreviousButton: true, // show/hide a Previous button
                        toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
                    },
                });
            
            
                $('#smartwizard2').smartWizard({
                    theme: 'dots',
                    transitionEffect: 'slide',
                    transitionSpeed: '400',
                    toolbarSettings: {
                        toolbarPosition: 'bottom', // none, top, bottom, both
                        toolbarButtonPosition: 'right', // left, right, center
                        showNextButton: true, // show/hide a Next button
                        showPreviousButton: true, // show/hide a Previous button
                        toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
                    },
                });



    
    

}



leadplug()





