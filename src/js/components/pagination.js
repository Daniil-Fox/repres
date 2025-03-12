const pagination = document.querySelector(".pagination ul");
if (pagination) {
  const items = Array.from(pagination.children);

  const adjustPagination = () => {
    const availableWidth = pagination.offsetWidth;
    const totalItems = items.length;

    // Сброс всех скрытых элементов
    items.forEach((item) => item.classList.remove("hidden"));

    // Получаем важные элементы
    const first = items[1]; // Первая страница
    const last = items[items.length - 2]; // Последняя страница
    const prev = items[0]; // Кнопка "Назад"
    const next = items[items.length - 1]; // Кнопка "Вперед"

    let currentWidth = Array.from(items).reduce(
      (sum, item) => sum + item.offsetWidth,
      0
    );

    if (currentWidth > availableWidth) {
      // Начинаем скрывать элементы
      const middleItems = items.slice(1, -2);

      // Первый этап: оставляем только 1, 2, ..., последнюю
      middleItems.forEach((item, index) => {
        if (index !== 0 && index !== middleItems.length - 1) {
          item.classList.add("is-hidden");
        }
      });

      currentWidth = Array.from(items).reduce(
        (sum, item) =>
          sum + (item.classList.contains("is-hidden") ? 0 : item.offsetWidth),
        0
      );

      // Если всё ещё не помещается, оставляем только 1, ..., последнюю
      if (currentWidth > availableWidth) {
        middleItems.forEach((item) => {
          if (!item.querySelector("a")) {
            item.classList.add("is-hidden");
          }
        });
      }
    }
  };

  // Обработчики событий
  adjustPagination();
  window.addEventListener("resize", adjustPagination);
}
