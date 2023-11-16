// call the function when the DOM is ready in the browser
function setupTabs() {
    // need access/listen to events in our buttons
    document.querySelectorAll(".tabs__button").forEach((button) => {
      button.addEventListener("click", () => {
        console.log("click event on button");
        const sideBar = button.parentElement;
        const tabsContainer = sideBar.parentElement;
        // identifying tab numbers
        const tabNumber = button.dataset.forTab;
        // activation of a given tab
        const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

        sideBar.querySelectorAll(".tabs__button").forEach((button) => {
            button.classList.remove("tabs__button--active");
          });
          
          tabsContainer.querySelectorAll(".tabs__content").forEach((tab) => {
            tab.classList.remove("tabs__content--active");
          });
          
          button.classList.add("tabs__button--active");
          tabToActivate.classList.add("tabs__content--active");

      });
    });
  }
  
  // our functions need to run after the DOM was loaded.
  document.addEventListener("DOMContentLoaded", () => {
    // call the function
    setupTabs();
  });