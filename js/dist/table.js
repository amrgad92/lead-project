function navtable(){
    let input = document.querySelector('#input');
    let searchbar = document.querySelector('#searchbar');
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

navtable()



function tableplug() {

        // sidebar navbar
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    
    
        // data table
        $('#example').DataTable({
            "scrollX": true
        });
}

tableplug()