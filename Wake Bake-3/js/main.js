(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 900) return

        if (burgerIcon) {
            e.preventDefault()
        }

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }



    const button = document.querySelector('.about__img-button')
    const modal = document.querySelector('.modal')
    const cancel = document.querySelector('.modal__cancel')
    const body = document.body

    const openModal = (e) => {
        e.preventDefault()
        body.classList.add('body--opened-modal')
    }
    button.addEventListener('click', openModal)

    const closeModal = (e) => {
        body.classList.remove('body--opened-modal')
    }
    cancel.addEventListener('click', closeModal)

    modal.addEventListener('click', event => {
        if (event.target && event.target.classList.contains('modal')) {
            closeModal()
        }
    })

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && body.classList.contains('body--opened-modal')) {
            closeModal()
        }
    })

})()









