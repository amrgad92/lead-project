
    let input = document.querySelector('#input');
    let searchbar = document.querySelector('#searchbar');
$(input).on('keyup', function () { 
        if (input.value != "") {
            searchbar.style.display = 'block'
        } else {
            searchbar.style.display = 'none'
        }
     });

$('#noti').click(function(){
    $('.notification').fadeToggle()
});


$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });



  $(window).scroll(function(){

      let top = $(window).scrollTop();
      
      if( top > 10 )
      {
          $(".navhome").css({"backgroundColor":"#007cba"} );
      
      }
      else
      {
              $(".navhome").css({"backgroundColor":"transparent"} );
      
      }
      });























$(document).ready(function () {

    $(function(){
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    })

    $(function() {
        $('.skitter-large').skitter({
            fullscreen: true,
            dots: false
        });
    });


    $(function() {
        $('#example').DataTable({
            "scrollX": true
            });
    });

    $(function() {
      $('#example2').DataTable({
          "scrollX": true
          });
  });

  $(function() {
    $('#example3').DataTable({
        "scrollX": true
        });
});



    
    $(function() {  
        $("body ,html").niceScroll({
            cursorcolor: "#b4ce66",
        });

        $(".tableBodyScroll").niceScroll({
            cursorcolor: "#b4ce66",
            cursorfixedheight: 40
        });

        $(".num-parent").niceScroll({
            cursorcolor: "#b4ce66",
            cursorfixedheight: 40
        });

        $(".num-head").niceScroll({
            cursorcolor: "#b4ce66",
            cursorfixedheight: 40
        });

    });

    $(function() {
        new WOW().init();
    });


    $(function(){
        var calendarEl = document.querySelector('#calendar');   
        var calendar = new FullCalendar.Calendar(calendarEl, {
          theme: true,
          textColor: 'blue',
          eventColor: 'black',
          color: 'green',
          buttonText:{
              today:'Today',
              month:'Month',
              week:'Week',
              day:'Day'
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
    })


    $(function(){
        
        var calendarwire = document.querySelector('#calendarwire');
        
        
    
        var calendarwire = new FullCalendar.Calendar(calendarwire, {
          theme: true,
          textColor: 'blue',
          eventColor: 'black',
          color: 'green',
          buttonText:{
              today:'Today',
              month:'Month',
              week:'Week',
              day:'Day'
          },
          titleFormat: {
            year: 'numeric',
            month: 'long',
          },
          headerToolbar: {
            right: 'prevYear,prev,next,nextYear today',
            left: 'title',
            // right: 'timeGridDay',
          },
          initialDate: new Date(),
          initialView: 'timeGridDay',
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
    
        calendarwire.render();
        
    
      });

    




    




        // try{
        //     $("#example-basic").steps({
        //         headerTag: "h3",
        //         bodyTag: "section",
        //         transitionEffect: "slideLeft",
        //         autoFocus: true
        //     });
        // }
        // catch(e)
        // {
        //     console.log(e);
        // }








         // SmartWizard initialize
         $('#smartwizard2').smartWizard({
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

        $(function(){
            $('.side-child2').click(function(){
                $('.side-child').fadeToggle()
            })
        })

        $("#ken").click(function(){
            $("#admin").fadeToggle(300)
        })























    $('#colorbtn').click(function(){
        $('#input').fadeToggle()
    })

    $('#funone').click(function(){
        $('#cardone').slideToggle()
    });

    $('#funtwo').click(function(){
        $('#cardtwo').slideToggle()
    });

    $('#funthree').click(function(){
        $('#cardthree').slideToggle()
    });

    $('#funfour').click(function(){
        $('#cardfour').slideToggle()
    });

    $('#funfive').click(function(){
        $('#cardfive').slideToggle()
    });

    $('#funsix').click(function(){
        $('#cardsix').slideToggle()
    });

    $('#funseven').click(function(){
        $('#cardseven').slideToggle()
    });

    $('#funeight').click(function(){
        $('#cardeight').slideToggle()
    });


    $('.searchtest').click(function(){
        alert("hello")
    });





    });

    let counter1 = 0;

    function countnum()
    {
        counter1++;
        if(counter1 == 8)
        {
            clearInterval(counterone)
        }
        document.querySelector('#counter1').innerHTML = counter1;
    }

    let counterone = setInterval(countnum , 50);




    let counter2 = 0;

    function countnum2()
    {
        counter2+=200;
        if(counter2 == 42000)
        {
            clearInterval(countertwo)
        }
        document.querySelector('#counter2').innerHTML = counter2;
    }

    let countertwo = setInterval(countnum2 , 1);


    

    let counter3 = 0;

    function countnum3()
    {
        counter3++;
        if(counter3 == 8)
        {
            clearInterval(counterthree)
        }
        document.querySelector('#counter3').innerHTML = counter3;
    }

    let counterthree = setInterval(countnum3 , 50);






    var elem = document.querySelector("#myframe");
    function openFullscreen() {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    }
    


    







$('#btnscreen').on('click',function() {
	if(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement) { 
		
		if(document.exitFullscreen) {
			document.exitFullscreen();
		} else if(document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if(document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if(document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	} else { 
		
		if(document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else if(document.documentElement.webkitRequestFullscreen) {
			document.documentElement.webkitRequestFullscreen();
		} else if(document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if(document.documentElement.msRequestFullscreen) {
			document.documentElement.msRequestFullscreen();
		}
	}
});











