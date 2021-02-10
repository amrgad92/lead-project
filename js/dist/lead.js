// function myFunction() {
//     setTimeout(function(){ alert("Hello"); }, 3000);
//   }

//   myFunction();


$('#noti').click(function(){
    $('.notification').fadeToggle()
});

$('.noti2').click(function(){
    $('.notification').fadeToggle()
});

let searchInput = document.querySelector('.search-input');
let searchOutput = document.querySelector('.search-output');

searchInput.addEventListener('keyup' , function(){
    if(searchInput.value != "")
    {
        searchOutput.style.display = "block"
    }else
    
    {
        searchOutput.style.display = "none"
    }

    
})


let setReminder = document.querySelector('#setReminder');
let reminder = document.querySelector('#reminder');
let addTime = document.querySelector('#addTime');
let beforeReminder = document.querySelector('.beforeReminder');
let beforeReminder2 = document.querySelector('.beforeReminder2');
let dateReminder = document.querySelector('.dateReminder');
let dateReminder2 = document.querySelector('.dateReminder2');

try
{
    addTime.addEventListener('click' , function(){
        if(this.checked == true)
        {
            dateReminder.style.display = 'none';
            dateReminder2.style.display = 'none';
            beforeReminder.style.display = 'block';
            beforeReminder2.style.display = 'block';
        }
        else
        {
            dateReminder.style.display = 'block';
            dateReminder2.style.display = 'block';
            beforeReminder.style.display = 'none';
            beforeReminder2.style.display = 'none';
        }
    })
}
catch(e)
{
    console.log(e);
}

try
{
    setReminder.addEventListener('click' , function(){
        this.style.display = 'none';
        reminder.style.display = 'block'; 
    })
}
catch(e)
{
    console.log(e);
}

try{
    document.addEventListener('DOMContentLoaded', function() {
    
        var calendartodo = document.querySelector('#calendartodo');
        
        
    
        var calendartodo = new FullCalendar.Calendar(calendartodo, {
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
          initialView: 'timeGridWeek',
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
    
        calendartodo.render();
        
    
      });

}
catch(e){
    console.log(e);
}


try{

    $(".toggle-password").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });

}

catch(e)
{
    console.log(e);
}




let root = document.querySelector('#root');
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
try{
    function drop() {


        let parent = document.createElement('div');
        parent.classList.add("parent-style");
       // $("#root").appendChild
        root.appendChild(parent);
        let child1 = document.createElement('div');
        child1.classList.add("child1-style");
        parent.appendChild(child1);
    
        let child2 = document.createElement('div');
        child2.classList.add("child2-style");
        parent.appendChild(child2);
    
        let child3 = document.createElement('div');
        child3.classList.add("child3-style");
        parent.appendChild(child3);
    
        let imgcard = document.createElement('img');
        child1.appendChild(imgcard);
        imgcard.src = "css/images/Trefoil_Festival_Bag_Black_EI7411_01_standard.jpg";
        imgcard.classList.add("img-style");
        let head = document.createElement('h6');
        head.innerHTML = "hello";
        child2.appendChild(head);
        let para = document.createElement('p');
        para.innerHTML = "amr";
        child2.appendChild(para);
        let icon = document.createElement('i');
        icon.classList.add("fas", "fa-exclamation-triangle", "icon-style")
        child3.appendChild(icon);
    
    }
}
catch(e)
{
    console.log(e);
}

try{
    let address = $("#addressp").offset().top;
    $(window).scroll(function(){

        let top = $(window).scrollTop();
        
        if( top > address )
        {
            $(".navbar").css({"backgroundColor":"#007cba"} );
        
        }
        else
        {
                $(".navbar").css({"backgroundColor":"transparent"} );
        
        }
        });
}
catch(e){
    console.log(e);
}

try{
    document.addEventListener('DOMContentLoaded', function() {

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
        
    
      });

}
catch(e){
    console.log(e);
}


// calendarwire

try{
    document.addEventListener('DOMContentLoaded', function() {

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

}
catch(e){
    console.log(e);
}






$(document).ready(function () {

    try
    {
        new WOW().init();
    }
    catch(e)
    {
        console.log(e);
    }

    $(function() {  
        $("body").niceScroll({
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

        try{
            $("#example-basic").steps({
                headerTag: "h3",
                bodyTag: "section",
                transitionEffect: "slideLeft",
                autoFocus: true
            });
        }
        catch(e)
        {
            console.log(e);
        }

        try{
            $(function() {
                $('.skitter-large').skitter({
                    fullscreen: true,
                    dots: false
                });
            });
        }
        catch(e)
        {
            console.log(e);
        }

        try
        {
            $('#example').DataTable({
                "scrollX": true
                });
        }
        catch(e)
        {
            console.log(e);
        }




        try{
         // SmartWizard initialize
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
        }
        catch(e){
            console.log(e);
        }


        try{
            // SmartWizard initialize
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
           catch(e){
               console.log(e);
           }

           try{
            // SmartWizard initialize
           $('#smartwizardwire').smartWizard({
               theme: 'dots',
               transitionEffect: 'slide',
               transitionSpeed: '400',
               toolbarSettings: {
                   toolbarPosition: 'bottom', // none, top, bottom, both
                   toolbarButtonPosition: 'right', // left, right, center
                   showNextButton: false, // show/hide a Next button
                   showPreviousButton: false, // show/hide a Previous button
                   toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
               },
           });
           }
           catch(e){
               console.log(e);
           }

        try{
            $('.side-child2').click(function(){
                $('.side-child').fadeToggle()
            })
        }
        catch(e)
        {
            console.log(e);
        }







    $("#ken").click(function(){
        $("#admin").fadeToggle(300)
    })

    try
    {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    }
    catch(e)
    {
        console.log(e);
    }



    let newname = document.querySelector('#newname');
    let newnote = document.querySelector('#newnote');
    let closenote = document.querySelector('#closenote');
    let savenote = document.querySelector('#savenote');


    try
    {
        savenote.addEventListener('click', function(){
            alert('save & new');
            newname.value = "";
            newnote.value = "";
        })
    }
    catch(e)
    {
        console.log(e);
    }

    try
    {
        closenote.addEventListener('click', function(){
            alert('save & close');
            newname.value = "";
            newnote.value = "";
        })
    }
    catch(e)
    {
        console.log(e);
    }







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


let input = document.querySelector('#input');
let searchbar = document.querySelector('#searchbar');


input.addEventListener('keyup' , function(){
    if(input.value != "")
    {
        searchbar.style.display = 'block'
    }else

    {
        searchbar.style.display = 'none'
    }
})











box1.addEventListener( 'click', function(){

    if (box1.checked == true)
    {
        check1.style.display = 'block';
    }else

    {
        check1.style.display = 'none';
    }

})


box2.addEventListener( 'click', function(){

    if (box2.checked == true)
    {
        check2.style.display = 'block';
    }else

    {
        check2.style.display = 'none';
    }

})


box3.addEventListener( 'click', function(){

    if (box3.checked == true)
    {
        check3.style.display = 'block';
    }else

    {
        check3.style.display = 'none';
    }

})

box4.addEventListener( 'click', function(){

    if (box4.checked == true)
    {
        check4.style.display = 'block';
    }else

    {
        check4.style.display = 'none';
    }

})

box5.addEventListener( 'click', function(){

    if (box5.checked == true)
    {
        check5.style.display = 'block';
    }else

    {
        check5.style.display = 'none';
    }

})

box6.addEventListener( 'click', function(){

    if (box6.checked == true)
    {
        check6.style.display = 'block';
    }else

    {
        check6.style.display = 'none';
    }

})

box7.addEventListener( 'click', function(){

    if (box7.checked == true)
    {
        check7.style.display = 'block';
    }else

    {
        check7.style.display = 'none';
    }

})

box8.addEventListener( 'click', function(){

    if (box8.checked == true)
    {
        check8.style.display = 'block';
    }else

    {
        check8.style.display = 'none';
    }

})

box9.addEventListener( 'click', function(){

    if (box9.checked == true)
    {
        check9.style.display = 'block';
    }else

    {
        check9.style.display = 'none';
    }

})

box10.addEventListener( 'click', function(){

    if (box10.checked == true)
    {
        check10.style.display = 'block';
    }else

    {
        check10.style.display = 'none';
    }

})

box11.addEventListener( 'click', function(){

    if (box11.checked == true)
    {
        check11.style.display = 'block';
    }else

    {
        check11.style.display = 'none';
    }

})

box12.addEventListener( 'click', function(){

    if (box12.checked == true)
    {
        check12.style.display = 'block';
    }else

    {
        check12.style.display = 'none';
    }

})

box13.addEventListener( 'click', function(){

    if (box13.checked == true)
    {
        check13.style.display = 'block';
    }else

    {
        check13.style.display = 'none';
    }

})

box14.addEventListener( 'click', function(){

    if (box14.checked == true)
    {
        check14.style.display = 'block';
    }else

    {
        check14.style.display = 'none';
    }

})

box15.addEventListener( 'click', function(){

    if (box15.checked == true)
    {
        check15.style.display = 'block';
    }else

    {
        check15.style.display = 'none';
    }

})

box16.addEventListener( 'click', function(){

    if (box16.checked == true)
    {
        check16.style.display = 'block';
    }else

    {
        check16.style.display = 'none';
    }

})



try{
    let searchInput = document.querySelector('.search-input');
let searchOutput = document.querySelector('.search-output');

searchInput.addEventListener('keyup' , function(){
    if(searchInput.value != "")
    {
        searchOutput.style.display = "block"
    }else
    
    {
        searchOutput.style.display = "none"
    }

    
});
}
catch(e){
    console.log(e);
}














