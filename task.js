document.addEventListener('DOMContentLoaded', () => {
    const tabContainers = document.querySelectorAll('.tab__navigation');

    tabContainers.forEach(tabContainer => {
        const tabs = tabContainer.querySelectorAll('.tab');
        const tabContents = tabContainer.nextElementSibling.querySelectorAll('.tab__content');

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Удаление классов активных вкладок и контента
                tabContainer.querySelector('.tab_active').classList.remove('tab_active');
                tabContainer.nextElementSibling.querySelector('.tab__content_active').classList.remove('tab__content_active');

                // Добавление классов активной вкладке и контенту
                tab.classList.add('tab_active');
                tabContents[index].classList.add('tab__content_active');
            });
        });
    });
});
