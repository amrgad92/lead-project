// let show = document.getElementById('show');

// test = () => {
//     display();
// }

// display = () => {
//     let testchild = document.createElement('h1');
//     testchild.innerHTML = "hello";
//     show.appendChild(testchild);
// }




// let cont = document.getElementById('cont');
// let input = document.getElementById('input');



// amr = () => {
//     if(input.value == "")
//     {
//         alert("there is no value")
//     }
//     else
//     {
//         let ele = document.createElement('div');
//         ele.innerHTML = input.value;
//         ele.classList.add("bg-info" ,  "w-50" , "mt-3");
//         cont.appendChild(ele);
//         input.value = ""
//     }
// }

// dropdown = () => {
//     let parent = document.createElement('div');
//     parent.classList.add("parent-style");
//     root.appendChild(parent);
//     let child1 = document.createElement('div');
//     child1.classList.add("child1-style");
//     parent.appendChild(child1);

//     let child2 = document.createElement('div');
//     child2.classList.add("child2-style");
//     parent.appendChild(child2);

//     let child3 = document.createElement('div');
//     child3.classList.add("child3-style");
//     parent.appendChild(child3);

//     let imgcard = document.createElement('img');
//     child1.appendChild(imgcard);
//     imgcard.src = "css/images/Trefoil_Festival_Bag_Black_EI7411_01_standard.jpg";
//     imgcard.classList.add("img-style");
//     let head = document.createElement('h6');
//     head.innerHTML = "hello";
//     child2.appendChild(head);
//     let para = document.createElement('p');
//     para.innerHTML = "amr";
//     child2.appendChild(para);
//     let icon = document.createElement('i');
//     icon.classList.add("fas", "fa-exclamation-triangle", "icon-style")
//     child3.appendChild(icon);

// }
var root = document.getElementById('root');




function hamo() {
    creatcard();
}

function creatcard() {
    var pushcard = "";
    pushcard +="<div class='card-creat'><div class='close'><i class='fas fa-times'></i></div><div><h5>hello</h5><p>hello</p></div></div><br>";
    root.innerHTML = pushcard;
    console.log("hello");
}

