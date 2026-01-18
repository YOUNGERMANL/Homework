(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 1200) return

        if (burgerIcon) {
            e.preventDefault()
        }

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // Слайдер-продукт

    new Swiper('.product__slider', {
        direction: 'vertical',
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="${className}">${index + 1}</span>`;
            },
        },
    });

    // слайдер с расписанием
    const buttons = document.querySelectorAll('.filters button');
    const cards = document.querySelectorAll('.class-card');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('filters__button--active'));
            btn.classList.add('filters__button--active');

            const filter = btn.dataset.filter;

            cards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    card.classList.toggle(
                        'hidden',
                        !card.classList.contains(filter)
                    );
                }
            });
        });
    });


})()

