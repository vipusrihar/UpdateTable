var popup=document.querySelector(".popup");
var addbtn=document.getElementById("add");
addbtn.addEventListener("click",function(){
    popup.style.display="block";
});

var submitbtn = document.getElementById("submitbtn");
submitbtn.addEventListener("click",function(event){
    event.preventDefault();
    var name = document.getElementById("stuname");
    var age = document.getElementById("stuage");
    var address = document.getElementById("stuaddress");
    var gendervalue;
    var gender = document.getElementsByName("gender");
    for(i=0;i<gender.length;i++){
        if(gender[i].checked){
            gendervalue = gender[i].value;
        }
    }
    var courseval;
    var course = document.getElementsByTagName("option");
    for(i=0;i<course.length;i++){
        if(course[i].selected){
            courseval = course[i].value;
        }
    }
    var paymentval;
    var payment = document.getElementsByName("payment");
    for(i=0;i<payment.length;i++){
        if(payment[i].checked){
            paymentval = payment[i].value;
        }
    }
    var detail = document.getElementById("detailtable");
    var detailadd = document.createElement("tr")
    detailadd.innerHTML =`<td> ${name.value} </td>
     <td> ${age.value} </td>
    <td> ${address.value} </td>
    <td> ${gendervalue} </td>
     <td> ${courseval}</td>
     <td> ${paymentval}</td>
     <td><button onclick="deletebtn(event)">Delete</button>`;
    detail.append(detailadd);
    document.getElementById('myform').reset();
    popup.style.display = "none";
});

function deletebtn(event){
    console.log(event);
    var td = event.target.parentNode;
    td.parentElement.remove();
}