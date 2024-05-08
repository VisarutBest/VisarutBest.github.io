var datetabs = document.getElementsByClassName("datetabs");
var details = document.getElementsByClassName("details");

function opentab(tabname) {
    for (datetab of datetabs) {
        datetab.classList.remove("active-link");
    }
    for (detail of details) {
        detail.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}