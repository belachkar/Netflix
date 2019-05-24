(function () {
  const tabItems = document.querySelectorAll('.tab-item');
  const tabContentItems = document.querySelectorAll('.tab-content-item');

  // Remove class from all elements
  const removeClass = (className, items) => {
    if (items && items.length > 0) {
      items.forEach(item => item.classList.remove(className));
    } else {
      items.classList.remove(className);
    }
  }

  // Select tab cntent item
  function selectItem() {
    const tabBorderClass = 'tab-border';
    const showupClass = 'show';

    removeClass(tabBorderClass, tabItems);
    removeClass(showupClass, tabContentItems);

    // Add border to current tab
    this.classList.add(tabBorderClass);

    // Get the id of the content tab to show up
    const idToShow = this.id + '-content';

    // Grab content item from DOM (show up)
    const getItemToShow = document.getElementById(idToShow);

    // Add show class to the content tab
    getItemToShow.classList.add(showupClass);
  }

  // Listening for tab click
  tabItems.forEach(item => item.addEventListener('click', selectItem));
})();
