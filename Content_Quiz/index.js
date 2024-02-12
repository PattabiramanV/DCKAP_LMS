"use strict"

let Quiz_object=[

    {
        Question:'1.What  is Full form of HTML?',
        Options: ['Hyper Text Markup Language','Hyper Text Makeup Language',
        'Hyper Text Mark Language','Hyper Test Markup Language']
    },

    {
        Question:'2.Which tag is used to create a hyperlink in HTML?',
        Options:['&lt;link&gt;','&lt;a&gt;','&lt;href&gt;','hyper']
     
    },
    {
        Question:`3.In HTML, what is the purpose of the &lt;head&gt; element?`,
        Options:['It contains the main content of the document.','It defines a header for the document.',
        'It provides metadata about the document.','It creates a navigation bar.' ]
 
    },
    {
        Question:'4.Which HTML tag is used to define the structure of the table?',
        Options: ['&lt;table&gt;','&lt;tr&gt;','&lt;td&gt;','&lt;th&gt;']
    },
    {
        Question:'5.Which HTML tag is used to define the body of the HTML document?',
        Options:['&lt;head&gt;','&lt;body&gt;','&lt;title&gt;','&lt;html&gt;']
     
    }


]

let quiz_options=document.querySelectorAll("label");
let quiz_Question=document.getElementById("Quiz_question");
let next_btn=document.querySelector(".quiz_next_btn");
let previous_btn=document.querySelector(".previous_btn");
let submit_btn=document.querySelector('.quiz_sunmit_btn');
let form_radio_btn_4=document.forms.radio_4_btn_form;
let all_radio_btn=form_radio_btn_4.radio_value_1;

next_btn.addEventListener("click",function(){ Quiz_change_Fun(this)});
previous_btn.addEventListener("click",function(){ Quiz_change_Fun(this)});

let index=0;
// previous_btn.style.display='none';
// submit_btn.style.display='none';

function Quiz_change_Fun(value){

    next_btn.style.display='block';
    previous_btn.style.display='block';
submit_btn.style.display='none';
    
    next_btn.parentElement.style.justifyContent='space-between';

if(value.innerHTML=='Next'&& all_radio_btn.value!=''){
    index++;
}
else if(index!=0 && value.innerHTML=='Previous'){
    
index--;
}
quiz_Question.innerHTML=Quiz_object[index].Question;
quiz_options[0].innerHTML=Quiz_object[index].Options[0];
quiz_options[1].innerHTML=Quiz_object[index].Options[1];
quiz_options[2].innerHTML=Quiz_object[index].Options[2];
quiz_options[3].innerHTML=Quiz_object[index].Options[3];


button_showing_Fun();

}


function button_showing_Fun(){

    if(index==4){
        next_btn.style.display='none';
        submit_btn.style.display='block'
    }
    else if(index==0){
        previous_btn.style.display='none';
        next_btn.parentElement.style.justifyContent='end';

    }
    form_radio_btn_4.reset();
}

