





// Get reference to the next page link
const nextPageLink = document.querySelector('.next_page');
const htmlCertificate=document.querySelector('.html_Cer')
const csslCertificate=document.querySelector('.css_Cer')
const jslCertificate=document.querySelector('.js_Cer')
const mysqlCertificate=document.querySelector('.mysql_Cer')

// Add event listener to the next page link
nextPageLink.addEventListener('click', function(event) {
    // Prevent the default action of the link (i.e., navigating to another page)
    event.preventDefault();

    // Check if any certificate has been selected
    if (htmlCertificate.checked || csslCertificate.checked || jslCertificate.checked || mysqlCertificate.checked) {
        window.location.href = nextPageLink.getAttribute('index.html');
    } else {
        alert('Please select a certificate before proceeding to the next page.');
    }
});

// View Profile Navigate

const View_P_navigate=document.querySelector(".View_profile")
View_P_navigate.addEventListener("click",()=>{
         window.location.href="/profile_user_page/profile.html";
})