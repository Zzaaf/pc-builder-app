# PC Builder App

Ты разработчик в стартапе который разрабатывает веб-приложение для сборки компьютеров: `PC Builder App`. 
Это инструмент, который поможет пользователям создавать свои собственные компьютерные сборки с помощью удобного интерфейса. Оно позволяет пользователям выбирать различные компоненты, такие как процессор, материнскую плату, видеокарту, оперативную память и т.д., а затем сочетать их вместе, чтобы создать свою оптимальную конфигурацию компьютера. 

Твоя задача с нуля написать базовый функционал по ТЗ, чтобы по итогу сделать клиентский билд. 
Этот билд нужно будет использовать как статические файлы на сервере.

## Release 0. Установка необходимых пакетов
Первым делом нужно определиться какие пакеты тебе нужны. Заметь файлов `package.json` и `package-lock.json` нет, и тебе нужно вспомнить назначение каждого пакета. Одно точно известно, что используется `React`, остальное нужно установить в зависимоти от задач.

## Release 1. Создание клиентской структуры проекта
   - Создай роутер с тремя основными маршрутами: Главная страница, Список компонентов и Создание нового компонента.
   - Реализуй заголовок и навигационную панель с ссылками на эти страницы.

## Release 2. Отображение списка модулей
   - Создай фейковые данные о компонентах, такие как имя, производитель, цена и изображение.
   - Создай компонент для отображения списка компонентов, где каждый компонент будет отображать имя, производителя и изображение.
   - Подключи этот компонент к одному из маршрутов на главной странице.

## Release 3. Создание нового модуля
   - Создай форму с полями для ввода имени, производителя, цены и загрузки изображения.
   - Реализуй обработку отправки формы и добавление нового компонента в список.
   - После успешного добавления компонента перенаправь пользователя на список компонентов.

## Release 4. Редактирование модуля
   - Реализуй функциональность редактирования компонента.
   - Создай отдельный маршрут для редактирования компонента, где пользователь сможет изменять имя, производителя, цену и изображение компонента.
   - После успешного редактирования компонента перенаправь пользователя на список компонентов.

## Release 5. Удаление модуля  
   - Реализуй функциональность удаления компонента из списка.
   - Добавь кнопку или иконку удаления рядом с каждым компонентом.
   - По нажатию на кнопку или иконку удаления удаляй компонент из списка.

## Release 6. Создание серверной структуры проекта*

## Release 7. Назначение статики*