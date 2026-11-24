const r = document.querySelector(':root');
const contentContainer = document.getElementById('panel_container');
const tabContainer = document.getElementById('tab_container');

window.addEventListener("hashchange", HashChanged);
let currentHash = location.hash;
let hasTab = false;

function HashChanged() {
    currentHash = location.hash == "" ? "#about" : location.hash;

    var i = 0;
    contentContainer.querySelectorAll(".panel").forEach(page => {
        i++;
        var isActive = UpdateContent(page);
        if (isActive) r.style.setProperty('--active-tab', i);
    });

    hasTab = false;
    tabContainer.querySelectorAll(".tab").forEach(UpdateTabs);

    if (hasTab && tabContainer.classList.contains("hidden")) {
        tabContainer.classList.remove("hidden");
    } else if (!hasTab && !tabContainer.classList.contains("hidden")) {
        tabContainer.classList.add("hidden");
    }
}

function UpdateContent(page) {
    if (page.classList.contains("active")) {
        page.classList.remove("active");
    }

    if (currentHash + "_panel" == "#" + page.id) {
        page.classList.add("active");
        return true;
    }

    return false;
}

function UpdateTabs(tab) {
    if (tab.classList.contains("selected")) {
        tab.classList.remove("selected");
    }
    
    if (currentHash + "_tab" == "#" + tab.id) {
        tab.classList.add("selected");
        hasTab = true;
    }
}

HashChanged();