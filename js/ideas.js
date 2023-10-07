const ideas = [
    {
        id: 1,
        title: 'CSS Card Flip',
        description: 'Поворот осуществляется при помощи CSS transform и transform-style со значением preserve-3d.',
        source: 'https://codepen.io/frontenderboy/pen/gOZXMvP',
        imgSource: 'img/ideas/flip-card.png',
        date: '2023-09-16'
    },
    {
        id: 2,
        title: 'Scratch Card',
        description: 'Интерактивная подарочная карта с анимацией конфетти. Реализована с помощью CSS и JavaScript',
        source: 'https://codepen.io/frontenderboy/pen/PoXOzvW',
        imgSource: 'img/ideas/scratch-card.png',
        date: '2023-09-18'
    },
    {
        id: 3,
        title: 'Check Password',
        description: 'Анимация, которая сделает ваш сайт похожим на макбук',
        source: 'https://codepen.io/frontenderboy/pen/dywZOvd?editors=1100',
        imgSource: 'img/ideas/check-password.png',
        date: '2023-09-07'
    },
    {
        id: 4,
        title: 'SVG Tutorial',
        description: '',
        source: 'https://codepen.io/frontenderboy/pen/WNLXpoJ',
        imgSource: 'img/ideas/svg-tutorial.png',
        date: '2023-08-21'
    },
    {
        id: 5,
        title: 'Slider',
        description: '',
        source: 'https://codepen.io/frontenderboy/pen/PoXOmYB',
        imgSource: 'img/ideas/slider.png',
        date: '2023-08-15'
    },
    {
        id: 6,
        title: 'Responsive Grid',
        description: 'Адаптивная сетка без медиа-запросов на чистом CSS.',
        source: 'https://codepen.io/frontenderboy/pen/wvRPdaR',
        imgSource: 'img/ideas/responsive-grid.png',
        date: '2023-08-14'
    },
    {
        id: 7,
        title: 'Order button animation',
        description: 'Анимация, которая появляется после нажатия кнопки вместо лоадера. Когда заказ принят, кнопка возвращается обратно.',
        source: 'https://codepen.io/frontenderboy/pen/abPVwLR',
        imgSource: 'img/ideas/order-button.png',
        date: '2023-08-11'
    },
    {
        id: 8,
        title: 'Menu Animation',
        description: 'Анимация в виде гибких линий. Реализована с помощью CSS и JavaScript',
        source: 'https://codepen.io/frontenderboy/pen/wvRPeXo?editors=1010',
        imgSource: 'img/ideas/menu-animation.png',
        date: '2023-08-07'
    },
    {
        id: 9,
        title: 'Colourful Flower Popup Menu',
        description: 'Набор действий на странице. Реализована с помощью CSS',
        source: 'https://codepen.io/frontenderboy/pen/rNoYwoZ',
        imgSource: 'img/ideas/colourfu-popup.png',
        date: '2023-08-07'
    },
    {
        id: 10,
        title: 'Tooltip',
        description: '',
        source: 'https://codepen.io/frontenderboy/pen/xxmPLxo',
        imgSource: 'img/ideas/tooltip.png',
        date: '2023-08-04'
    },
    {
        id: 11,
        title: 'Card Hover Interaction | HTML & CSS',
        description: 'Карточки с всплывающей информацией при наведении. Реализована с помощью CSS',
        source: 'https://codepen.io/frontenderboy/pen/YzdExwq',
        imgSource: 'img/ideas/card-hover.png',
        date: '2023-08-02'
    },
    {
        id: 12,
        title: 'Expand-o-panel',
        description: 'Набор элементов, которые меняют ширину и цвет при наведении на них курсора. Подойдет для карточек или для меню товаров на сайте.',
        source: 'https://codepen.io/frontenderboy/pen/oNJoeLj',
        imgSource: 'img/ideas/expand-o-panel.png',
        date: '2023-08-01'
    },
    {
        id: 13,
        title: 'Content reveal cards with CSS scroll-linked animations',
        description: 'Слайдер для карточек. Реализован с помощью CSS.',
        source: 'https://codepen.io/frontenderboy/pen/oNJoeZb',
        imgSource: 'img/ideas/scroll-cards.png',
        date: '2023-07-31'
    },
    {
        id: 14,
        title: 'Tile hover multi-button',
        description: 'варианты выпадающего меню для карточек. Можно менять цвет фона, иконок и количество элементов в левом верхнем углу.',
        source: 'https://codepen.io/frontenderboy/pen/Vwqrzrm',
        imgSource: 'img/ideas/hover-multi-btn.png',
        date: '2023-07-25'
    },
    {
        id: 15,
        title: 'CSS vertical carousel animation',
        description: '',
        source: 'https://codepen.io/frontenderboy/pen/zYyPdjY',
        imgSource: 'img/ideas/vertical-carousel.png',
        date: '2023-07-20'
    },
    {
        id: 16,
        title: 'Page Rotator',
        description: 'Переключатель вкладок, элементы которого двигаются относительно друг друга. Движение направо происходит по часовой стрелке, а обратно - против часовой стрелки.',
        source: 'https://codepen.io/frontenderboy/pen/GRPOvYO',
        imgSource: 'img/ideas/page-rotator.png',
        date: '2023-07-18'
    },
    {
        id: 17,
        title: 'Liquid UI Elements',
        description: 'Элементы, которые при изменении своего состояния имеют "жидкую" анимацию, похожую на капли.',
        source: 'https://codepen.io/frontenderboy/pen/YzdExgx',
        imgSource: 'img/ideas/liquid-ui-elements.png',
        date: '2023-07-04'
    },
    {
        id: 18,
        title: 'Feedback Reactions',
        description: 'Набор смайликов для оценки рейтинга. Сразу несколько элементов выбрать невозможно.',
        source: 'https://codepen.io/frontenderboy/pen/YzdExmr',
        imgSource: 'img/ideas/reactions.png',
        date: '2023-06-10'
    },
    {
        id: 19,
        title: 'CSS Mechanical Keyboard',
        description: 'Интерактивная экранная клавиатура. Реализованная с помощью SCSS и JavaScript.',
        source: 'https://codepen.io/frontenderboy/pen/OJrOxPo',
        imgSource: 'img/ideas/mechanical-keyboard.png',
        date: '2023-06-09'
    },
    {
        id: 20,
        title: 'Animated Button',
        description: 'Кнопка анимируется в CSS. При завершении анимации создаются частицы на canvas.',
        source: 'https://codepen.io/frontenderboy/pen/RwExLaj',
        imgSource: 'img/ideas/animated-btn.png',
        date: '2023-06-05'
    },
    {
        id: 21,
        title: 'Timeline Slider',
        description: 'Полностью адаптивный красивый слайдер временной шкалы.',
        source: 'https://codepen.io/frontenderboy/pen/bGOaowm',
        imgSource: 'img/ideas/timeline-slider.png',
        date: '2023-05-18'
    },
    {
        id: 22,
        title: 'Click to send',
        description: 'Удобная и красивая кнопка для отправки писем. Сделано на CSS и JS.',
        source: 'https://codepen.io/frontenderboy/pen/RwExLVQ',
        imgSource: 'img/ideas/send-btn.png',
        date: '2023-05-18'
    },
    {
        id: 23,
        title: 'Checkbox group styled as tiles',
        description: 'Набор карточек с иконками и чекбоксами. Состояние чекбокса, а также цвет иконки и рамки меняются при нажатии на карточку.',
        source: 'https://codepen.io/frontenderboy/pen/WNLdzYo',
        imgSource: 'img/ideas/checkboxes.png',
        date: '2023-05-13'
    },
    {
        id: 24,
        title: '404 Page',
        description: 'Пример того, как можно красочно оформить ошибку 404.',
        source: 'https://codepen.io/frontenderboy/pen/ExGoLKG',
        imgSource: 'img/ideas/404-page.png',
        date: '2023-05-12'
    },
    {
        id: 25,
        title: 'Simple CSS Waves',
        description: 'Легенькая анимация между заголовком и содержимым. Легко настроить и применить на любом веб-сайте',
        source: 'https://codepen.io/frontenderboy/pen/BavJxRR',
        imgSource: 'img/ideas/simple-waves.png',
        date: '2023-05-12'
    },
    {
        id: 26,
        title: 'Sparkle Button ✨',
        description: 'При наведении задействуются CSS анимации и генерируются частицы в JS.',
        source: 'https://codepen.io/frontenderboy/pen/mdapKdM',
        imgSource: 'img/ideas/sparkle-btn.png',
        date: '2023-04-16'
    },
    {
        id: 27,
        title: 'Sticky Slider Navigation',
        description: 'Слайдер, основанный на якорных ссылках, созданный на HTML, SCSS и JS.',
        source: 'https://codepen.io/frontenderboy/pen/XWoVYgm',
        imgSource: 'img/ideas/sticky-slider-navigation.png',
        date: '2023-03-25'
    },
    {
        id: 28,
        title: 'Changing Background Color on Scroll',
        description: 'Эффект изменения цвета фона при скролле. Его можно использовать в лендинге вместо того, чтобы создавать отдельный фон для каждого раздела.',
        source: 'https://codepen.io/frontenderboy/pen/JjwMZvN',
        imgSource: 'img/ideas/changing-background.png',
        date: '2023-05-11'
    },
    {
        id: 31,
        title: 'eCommerce Slide Effect',
        description: 'Изящный слайдер для интернет-магазинов',
        source: 'https://codepen.io/frontenderboy/pen/yLGpErY',
        imgSource: 'img/ideas/eCommerce-slide-effect.png',
        date: '2023-03-08'
    },
    {
        id: 32,
        title: 'Airplanes',
        description: '✈️ Пример лендинга с эффектом полета, вслед за скроллом.',
        source: 'https://codepen.io/frontenderboy/pen/oNJpyrE?editors=1000',
        imgSource: 'img/ideas/airplanes.png',
        date: '2023-02-25'
    },
    {
        id: 33,
        title: 'Card Hover Interactions',
        description: 'Анимация для карточек. При наведении курсора на изображение всплывает дополнительная информация о карточке и кнопка.',
        source: 'https://codepen.io/frontenderboy/pen/BavJPNg',
        imgSource: 'img/ideas/card-hover-animation.png',
        date: '2023-02-24'
    },
    {
        id: 34,
        title: 'CSS controlled Lamp',
        description: 'Создано без использования JS. Значение из input автор берет из data-атрибута и устанавливает определенные стили, исходя из полученного значения.',
        source: 'https://codepen.io/frontenderboy/pen/XWoVBKg',
        imgSource: 'img/ideas/controlled-lamp.png',
        date: '2023-02-19'
    },
    {
        id: 35,
        title: 'Escalade Loader',
        description: 'Необычный загрузчик, созданный и анимированный на HTML и SCSS',
        source: 'https://codepen.io/frontenderboy/pen/WNLdKoQ',
        imgSource: 'img/ideas/escalade-loader.png',
        date: '2023-02-17'
    },
    {
        id: 36,
        title: 'Payment form',
        description: 'Красивая платежная форма на JS с валидацией правильности заполнения полей.Если в браузере пользователя сохранены платежные данные, то форма и предложит их автозаполнение.',
        source: 'https://codepen.io/frontenderboy/pen/OJrzwEV',
        imgSource: 'img/ideas/payment-from.png',
        date: '2023-02-17'
    },
    {
        id: 37,
        title: 'Star Rating',
        description: '',
        source: 'https://codepen.io/frontenderboy/pen/RwExBeX',
        imgSource: 'img/ideas/star-rating.png',
        date: '2023-02-15'
    },
]

export default ideas