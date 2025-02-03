document.addEventListener("DOMContentLoaded", function () {
    const channelsGrid = document.querySelector(".channels-grid");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Всего 20 каналов, показываем по 10
    const totalChannels = 19;
    const perPage = 10;
    let currentPage = 1;

    // Создание массива каналов
    let channels = [];
    for (let i = 1; i <= totalChannels; i++) {
        channels.push(`
            <div class="channel-card">
                <img src="./img/text.svg" alt="Лого" class="channel-logo">
                <div class="channel-info">
                    <span class="channel-name">Канал ${i}</span>
                    <button class="live-btn">Live</button>
                </div>
            </div>
        `);
    }

    // Функция отрисовки текущей страницы каналов
    function renderChannels() {
        const start = (currentPage - 1) * perPage;
        const end = start + perPage;
        channelsGrid.innerHTML = channels.slice(start, end).join("");

        // Блокируем кнопки, если достигли начала/конца
        prevBtn.classList.toggle("active", currentPage > 1);
        nextBtn.classList.toggle("active", currentPage < totalChannels / perPage);
    }

    // Кнопка "Next" – следующая страница
    nextBtn.addEventListener("click", function () {
        if (currentPage < totalChannels / perPage) {
            currentPage++;
            renderChannels();
        }
    });

    // Кнопка "Prev" – предыдущая страница
    prevBtn.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            renderChannels();
        }
    });

    // Первая загрузка
    renderChannels();
});
