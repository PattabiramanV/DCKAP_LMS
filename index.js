"use strict"
let over_All_Feedback_form=document.forms.Feefback_form;

let User_Name_Box=document.forms.Feefback_form.elements.user_name;

let radio_3_btn=over_All_Feedback_form.elements.radio_value;

let Email_Box=over_All_Feedback_form.elements.email_box;

let text_area_Box=over_All_Feedback_form.elements.Feedback_brief;

let Check_Box=over_All_Feedback_form.elements[6];

let Submit_btn=document.forms[0].elements[7];

let valid_invalid_box=document.querySelector(".invalid_input");

let check_alert_content=document.querySelector(".check_alert");

let tringle_icon=document.getElementById("tringle_icon");

over_All_Feedback_form.addEventListener("submit", (event) => {
    event.preventDefault();

    valid_invalid_box.classList.add("success_box");

    tringle_icon.style.display = "block";

    if (User_Name_Box.value.trim() == "") {

        check_alert_content.innerHTML = "Please enter your name";

    }
    else if (radio_3_btn.value == "") {
        check_alert_content.innerHTML = "Please select your feedback type";
    }
    else if (Email_Box.value == "") {
        check_alert_content.innerHTML = "Please enter your email";
    }
    else if (text_area_Box.value == "") {
        check_alert_content.innerHTML = "Please enter your Feed Back";

    }

    else if (!(Check_Box.checked)) {
        check_alert_content.innerHTML = "Please accept terms and conditions";

    }

    else {
        
        tringle_icon.style.display = "none";

        valid_invalid_box.classList.add("invalid_content");
        check_alert_content.innerHTML = "Submit Successfully!!!..";
        over_All_Feedback_form.reset();
    }

    setTimeout(() => {
        valid_invalid_box.classList.remove("success_box");
        valid_invalid_box.classList.remove("invalid_content");

    }, 1500);


});


