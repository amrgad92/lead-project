function navcalend(){
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

navcalend()


function calendplug() {


    // sidebar navbar
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

     
    var calendarEl = document.querySelector('#calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        theme: true,
        textColor: 'blue',
        eventColor: 'black',
        color: 'green',
        buttonText: {
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day'
        },
        titleFormat: {
            year: 'numeric',
            month: 'long',
        },
        headerToolbar: {
            left: 'prevYear,prev,next,nextYear today',
            center: 'title',
            right: 'timeGridDay,timeGridWeek,dayGridMonth',
        },
        initialDate: new Date(),
        navLinks: true, // can click day/week names to navigate views
        businessHours: true, // display business hours
        editable: true,
        selectable: true,
        events: [

            {

                title: 'Business Lunch',
                start: '2020-12-03T13:00:00',
                end: '2020-12-20',
                color: '#b4ce66',


            },

            // areas where "Meeting" must be dropped
            {
                groupId: 'availableForMeeting',
                start: '2020-12-11T10:00:00',
                end: '2020-12-11T16:00:00',
                display: 'background'
            },

            // red areas where no events can be dropped
            {
                start: '2020-12-24',
                end: '2020-12-28',
                overlap: false,
                display: 'background',
                color: 'yellow'
            },


        ]
    });

    calendar.render();


}


calendplug()






