document.addEventListener("DOMContentLoaded", () => {
    const mainPanels = document.querySelectorAll('.panel');
    const mainTabs = document.querySelectorAll('.tab');
    const subTabs = document.querySelectorAll('.sub-tab');

    // Tab Navigation
    mainTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            targetId = tab.getAttribute("target-id");
            targetPanel = document.getElementById(targetId);

            mainTabs.forEach(btn => {btn.classList.remove("selected")});
            mainPanels.forEach(panel => {panel.classList.remove("active")});
            
            tab.classList.add("selected");
            targetPanel.classList.add("active");
        });
    });

    // Subtab Navigation
    subTabs.forEach(subTab => {
        subTab.addEventListener("click", () => {
            parentPanel = subTab.closest(".panel");
            subPanels = parentPanel.querySelectorAll(".sub-panel");
            
            targetId = subTab.getAttribute("target-id");
            targetPanel = document.getElementById(targetId);

            subPanels.forEach(panel => {panel.classList.remove("active")});
            
            targetPanel.classList.add("active");
        });
    });
});
