"use strict";

// let input = document.getElementById('input');
// input.addEventListener('keyup' , function(){
//     if(input.value != ""){
//         document.getElementById('test').style.display = 'block';
//     }else
//     {
//         document.getElementById('test').style.display = 'none';
//     }
// })
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
//   function filterFunction() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     div = document.getElementById("myDropdown");
//     a = div.getElementsByTagName("a");
//     for (i = 0; i < a.length; i++) {
//       txtValue = a[i].textContent || a[i].innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         a[i].style.display = "";
//       } else {
//         a[i].style.display = "none";
//       }
//     }
//   }
// $(document).ready(function(){
//     $("#btn").click(function(){
//       $("#amr").fadeOut()
//     });
//   });
var amr = document.getElementById("amr") / $(document).ready(function () {
  $('#langp').click(function () {
    $('#langchild').fadeToggle("fast");
  });
  $("#btn").click(function () {
    $("input").fadeToggle();
  });
  $(".skitter-large").skitter(); // $(".a").click(function(){
  //   $(".board-a").fadeToggle("fast"),
  //   $(".board-b").fadeOut("fast"),
  //   $(".board-c").fadeOut("fast"),
  //   $(".board-d").fadeOut("fast"),
  //   $(".board-e").fadeOut("fast"),
  //   $(".board-f").fadeOut("fast")
  // });
  // $(".b").click(function(){
  //   $(".board-b").fadeToggle("fast"),
  //   $(".board-a").fadeOut("fast"),
  //   $(".board-c").fadeOut("fast"),
  //   $(".board-d").fadeOut("fast"),
  //   $(".board-e").fadeOut("fast"),
  //   $(".board-f").fadeOut("fast")
  // });
  // $(".c").click(function(){
  //   $(".board-c").fadeToggle("fast"),
  //   $(".board-a").fadeOut("fast"),
  //   $(".board-b").fadeOut("fast"),
  //   $(".board-d").fadeOut("fast"),
  //   $(".board-e").fadeOut("fast"),
  //   $(".board-f").fadeOut("fast")
  // });
  // $(".d").click(function(){
  //   $(".board-d").fadeToggle("fast"),
  //   $(".board-a").fadeOut("fast"),
  //   $(".board-b").fadeOut("fast"),
  //   $(".board-c").fadeOut("fast"),
  //   $(".board-e").fadeOut("fast"),
  //   $(".board-f").fadeOut("fast")
  // });
  // $(".e").click(function(){
  //   $(".board-e").fadeToggle("fast"),
  //   $(".board-a").fadeOut("fast"),
  //   $(".board-b").fadeOut("fast"),
  //   $(".board-c").fadeOut("fast"),
  //   $(".board-d").fadeOut("fast"),
  //   $(".board-f").fadeOut("fast")
  // });
  // $(".f").click(function(){
  //   $(".board-f").fadeToggle("fast"),
  //   $(".board-a").fadeOut("fast"),
  //   $(".board-b").fadeOut("fast"),
  //   $(".board-c").fadeOut("fast"),
  //   $(".board-d").fadeOut("fast"),
  //   $(".board-e").fadeOut("fast")
  // });
});