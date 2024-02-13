function toggleNameEdit() {
    var nameSpan = document.getElementById('fullName');
    var nameInput = document.getElementById('fullNameInput');
    var editButton = document.querySelector('.editbtn');

    if (nameSpan.style.display !== 'none') {
        nameInput.value = nameSpan.textContent;
        nameSpan.style.display = 'none';
        nameInput.style.display = 'inline-block';
        editButton.textContent = 'Save';
    } else {
        nameSpan.textContent = nameInput.value;
        nameInput.style.display = 'none';
        nameSpan.style.display = 'inline-block';
        editButton.textContent = 'Edit';
    }
}

function toggleBioEdit() {
    var bioSpan = document.getElementById('bioInfo');
    var bioInput = document.getElementById('bioInput');
    var editButton = document.querySelector('.editbtnn');

    if (bioSpan.style.display !== 'none') {
        bioInput.value = bioSpan.textContent;
        bioSpan.style.display = 'none';
        bioInput.style.display = 'inline-block';
        editButton.textContent = 'Save';
    } else {
        bioSpan.textContent = bioInput.value;
        bioInput.style.display = 'none';
        bioSpan.style.display = 'inline-block';
        editButton.textContent = 'Edit';
    }
}

let cancel_navigate=document.querySelector(".cancel_btn")
cancel_navigate.addEventListener("click",()=>{
    window.location.href="main_profile.html"
})
