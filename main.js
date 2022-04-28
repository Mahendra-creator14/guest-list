var students=[];
var sortstudent=[];
function Submit ()
{
    for (var id=1;id<=10; id++){
        var studentname=document.getElementById("name_of_the_student_"+id).value;
        students.push(studentname);
        console.log(students);
    }
        
   for (var id=1;id<=students.length;id++){
       sortstudent.push("<h4> Name - "+students[id]+"</h4>");
       console.log(sortstudent)
   }
 document.getElementById("display_name_with_commas").innerHTML=sortstudent;
 var removecomma=sortstudent.join(" ");
 document.getElementById("display_name_without_commas").innerHTML=removecomma;

 document.getElementById("sort_button").style.display="inline-block";
 document.getElementById("submit_button").style.display="none";

 
}

function sorting (){

    students.sort();
    for (var id=1;id<=students.length;id++){
        sortstudent.push("<h4> Name - "+students[id]+"</h4>");
        console.log(sortstudent)
    }
  document.getElementById("display_name_with_commas").innerHTML=sortstudent;
  var removecomma=sortstudent.join(" ")
  document.getElementById("display_name_without_commas").innerHTML=removecomma;
 
}