var myForm = document.getElementById("myForm");
let openPoupp = document.getElementById("openPoupp");
openPoupp.addEventListener("click", openForm);
function openForm() {
    myForm.style.display = "block";
    Progress.style.display = "none";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    Progress.style.display = "flex";
}
