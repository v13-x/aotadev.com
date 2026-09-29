const contentContainer = document.getElementById('content_container');
const tabContainer = document.getElementById('tab_container');

window.addEventListener("hashchange", HashChanged);
let currentHash = location.hash;

function HashChanged() {
    currentHash = location.hash;

    contentContainer.querySelectorAll(".content").forEach(UpdateContent); ;
    tabContainer.querySelectorAll(".tab").forEach(UpdateTabs);
}

function UpdateContent(page) {
    console.log("---")
    console.log(currentHash + "_content")
    console.log("#" + page.id)
    if (currentHash + "_content" == "#" + page.id) {
        page.classList.remove("inactive");
    }
    else if (!page.classList.contains("inactive")) {
        page.classList.add("inactive");
    }
}

function UpdateTabs(tab) {
    if (currentHash + "_tab" == "#" + tab.id) {
        tab.classList.add("selected");
    }
    else if (tab.classList.contains("selected")) {
        tab.classList.remove("selected");
    }
}

location.hash = "#about";
contentContainer.querySelectorAll(".content").forEach(UpdateContent); ;
tabContainer.querySelectorAll(".tab").forEach(UpdateTabs);