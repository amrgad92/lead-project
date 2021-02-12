
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

$(document).ready(function(){


    // $('#example').DataTable( {


    //     columnDefs: [ {
    //         orderable: false,
    //         className: 'select-checkbox',
    //         targets:   0
    //     } ],
    //     select: {
    //         style:    'os',
    //         selector: 'td:first-child'
    //     },
    //     order: [[ 1, 'asc' ]]
    // } );


        $('table.display').DataTable({
                
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        
        });








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

    
});






// $('#chevron-down').click(function(){
//     $(this).css("display" , "none");
//     $('#chevron-up').css("display" , "block");
//     $('.info-content').css("height" , "650px");
// })


// $('#chevron-up').click(function(){
//     $(this).css("display" , "none");
//     $('#chevron-down').css("display" , "block");
//     $('.info-content').css("height" , "220px");
// })

// let newname = document.getElementById('newname');
// let newnote = document.getElementById('newnote');
// let savenote = document.getElementById('savenote');
// let tablenote = document.getElementById('tablenote');
// arrnote = [];


// savenote.addEventListener('click' , function(){
//   let product =
//   {
//     newname:newname.value,
//     newnote:newnote.value,
//   }
//   arrnote.push(product);
//   showdata();
// })


// let showdata = () => {
  
//   let cartoona = ``;
  
//   for( let i= 0 ; i < arrnote.length ; i++)
//   {
//     cartoona += `<tr><td>test</td><td>test</td><td>test</td></tr>`;
//   }

//   document.getElementById('tablenote').innerHTML = cartoona;
// }





// try{
//     document.addEventListener('DOMContentLoaded', function() {

    
//         var calendarwire = document.getElementById('calendarwire');
        
        
    
//         var calendarwire = new FullCalendar.Calendar(calendarwire, {
//           theme: true,
//           textColor: 'blue',
//           eventColor: 'black',
//           color: 'green',
//           buttonText:{
//               today:'Today',
//               month:'Month',
//               week:'Week',
//               day:'Day'
//           },
//           titleFormat: {
//             year: 'numeric',
//             month: 'long',
//           },
//           headerToolbar: {
//             left: 'prevYear,prev,next,nextYear today',
//             center: 'title',
//             right: 'timeGridDay',
//           },
//           initialDate: new Date(),
//           initialView: 'timeGridDay',
//           navLinks: true, // can click day/week names to navigate views
//           businessHours: true, // display business hours
//           editable: true,
//           selectable: true,
//           events: [
            
//             {
    
//               title: 'Business Lunch',
//               start: '2020-12-03T13:00:00',
//               end: '2020-12-20',
//               color: '#b4ce66',
              
    
//             },
    
//             // areas where "Meeting" must be dropped
//             {
//               groupId: 'availableForMeeting',
//               start: '2020-12-11T10:00:00',
//               end: '2020-12-11T16:00:00',
//               display: 'background'
//             },
    
//             // red areas where no events can be dropped
//             {
//               start: '2020-12-24',
//               end: '2020-12-28',
//               overlap: false,
//               display: 'background',
//               color: 'yellow'
//             },
    
            
//           ]
//         });
    
//         calendarwire.render();
        
    
//       });

// }
// catch(e){
//     console.log(e);
// }



// let savenote = document.getElementById('savenote');
// let closenote = document.getElementById('closenote');

// savenote.disabled = true;
// closenote.disabled = true;


// newnote.addEventListener('keyup' , function(){

//     if(newname.value == '' && newnote.value == '' ){
//         savenote.disabled = true;
//         closenote.disabled = true;
//     }else
//     {
//         savenote.disabled = false;
//         closenote.disabled = false;

//     }

// });



// newname.addEventListener('keyup' , function(){

//     if(newname.value == '' && newnote.value == '' ){
//         savenote.disabled = true;
//         closenote.disabled = true;
//     }else
//     {
//         savenote.disabled = false;
//         closenote.disabled = false;

//     }

// });






// $('#searchicon').click(function(){
//     $('.search-parent').css("width" , "400px");
//     $('.search-child2').css("width", "100%");
//     $('#searchclose').css("display", "block");
//     $('.search-input').css("display", "block");
//     $('.search-input').css("width", "100%");
// }
// )

// $('#searchclose').click(function(){
//     $('.search-parent').css("width" , "0px");
//     $('.search-input').css("width", "0%");
//     $('.search-input').css("display", "none");
//     $('#searchclose').css("display", "none");
//     $('.search-child2').css("width", "0%");
// }
// )