//menu nav mobile
function menuNav() {
    const btnMenu = document.querySelector('.header__cta-mobile');
    const nav = document.querySelector('.menumobile');
    const body = document.querySelector('.body');

    btnMenu.addEventListener("click", () => {
        // add class active / removed
        btnMenu.classList.toggle("--active");
        nav.classList.toggle("--active");
        body.classList.toggle("--active");

    });
    // // thay doi width
    window.addEventListener("resize", () => {
        let windowWidth = window.innerWidth;
        if (windowWidth > 992) {
            nav.classList.remove('--active');
            btnMenu.classList.remove('--active');
            body.classList.remove("--active");

        }
    })
}
menuNav();
// signup
function handleSignup() {
    const register = document.querySelector('.register'),
        signup = document.querySelector('.header__cta-signup'),
        signupMobile = document.querySelector('.header__menu-signup'),
        close = document.querySelector('.register .register_inner .close'),
        nav = document.querySelector('.menumobile'),
        btnMenu = document.querySelector('.header__cta-mobile'),
        body = document.querySelector('.body');
    signup.addEventListener("click", () => {
        register.classList.add("--active");
        body.classList.add("--active");
    });
    signupMobile.addEventListener("click", () => {
        register.classList.add("--active");
        body.classList.add("--active");
        nav.classList.remove('--active');
        btnMenu.classList.remove('--active');
    });
    function removeActiveSignup() {
        register.classList.remove('--active');
        body.classList.remove("--active");
    }
    close.addEventListener("click", (e) => {
        removeActiveSignup();
    });
    register.addEventListener('click', () => {
        // removeActiveSignup();
    });


}
handleSignup();

// scroll change color header
function scrollChangeColorHeader() {
    const header = document.querySelector('header'),
        hero = document.querySelector('.schero');
    // get height of hero
    let heightHero = hero.offsetHeight;
    window.addEventListener('scroll', () => {
        // get scroll window
        const scrolled = window.scrollY;
        if (scrolled + 1 > heightHero) {
            header.classList.add('--active');
        }
        else {
            header.classList.remove('--active');
        }
    })
}
scrollChangeColorHeader();

// back to top
function backToTop() {
    const backToTop = document.querySelector('.footer__baktotop'),
        product = document.querySelector('.scproducts');
    // get height to top and height of the banner
    let heightProduct = product.offsetTop - header.offsetHeight;
    window.addEventListener('scroll', () => {
        // get scroll window
        const scrolled = window.scrollY;
        if (scrolled > heightProduct) {
            backToTop.classList.add('--active');
        }
        else {
            backToTop.classList.remove('--active');
        }
    })

    backToTop.addEventListener('click', () => {
        // scroll top 
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}
backToTop();

// btn languages
function languages() {
    const lang = document.querySelector('.header__cta-lang'),
        currentItem = lang.querySelector('.current .current__text'),
        langItems = lang.querySelectorAll('.dropdown li'),
        icon = lang.querySelector('.current .current__icon');
    lang.addEventListener('click', (e) => {
        // ngan chan su kien noi bot - click
        e.stopPropagation();
        lang.classList.toggle('--active');
        icon.classList.toggle('--active');
    });

    langItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            // get lang from dropdown
            let langItem = item.textContent;
            // get lang current
            let langCurrent = currentItem.textContent;
            // set lang current to lang dropdown
            currentItem.innerHTML = langItem;
            // set lang dropdown to lang current
            item.innerHTML = langCurrent;
        });
    })
    // remove active outside 
    document.addEventListener('click', () => {
        lang.classList.remove('--active');
    });
}
languages();


// popup video
function handlePopupVideo() {
    let videos = document.querySelectorAll('.scvideos__list-box .boxvideo'),
        popup = document.querySelector('.popupvideo'),
        iframevideo = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe'),
        closeVideo = document.querySelector('.popupvideo .popupvideo__inner-close'),
        body = document.querySelector('.body');
    videos.forEach(function (item) {
        item.addEventListener('click', () => {
            // show popup video
            popup.classList.add('--active');
            body.classList.add("--active");

            // get id src video
            let dataId = item.getAttribute('data-video-src');
            // link to video
            iframevideo.setAttribute('src', `https://www.youtube.com/embed/${dataId}?autoplay=1&mute=1`);
        })
    })
    // function close popup video
    function closeModal() {
        popup.classList.remove('--active');
        iframevideo.setAttribute('src', ``)
        body.classList.remove("--active");
    }
    // close popup video - icon close button
    closeVideo.addEventListener('click', () => {
        closeModal()
    });
    // close popup video outside
    popup.addEventListener('click', () => {
        closeModal()
    });
}
handlePopupVideo()

// csroll propressbar
function handlePropressbar() {
    let propressbar = document.querySelector('.propressbarheader');
    window.addEventListener('scroll', () => {
        // get scroll window
        let scrolled = window.scrollY;
        // get scroll body
        let heightScroll = document.body.clientHeight - window.innerHeight;
        // percnet window/body
        let percent = scrolled / heightScroll * 100;
        console.log(percent);
        propressbar.style.width = `${percent}%`;
    });
}
// loading window
window.addEventListener('load', handlePropressbar());

// tabs news
function handleTabs() {
    let tabs = document.querySelectorAll('.tab'),
        content = document.querySelectorAll('.scnews__content');
    tabs.forEach((item) => {
        item.addEventListener('click', () => {
            // remove class active tabs
            tabs.forEach((item) => {
                item.classList.remove('--active');
            });
            // add class active tab
            item.classList.add('--active');
            // remove class active contents
            content.forEach((item) => {
                item.classList.remove('--active');
            });
            // get id tab active content
            let id = item.getAttribute('data-tab');
            // add class active vao scnews__list- + id active
            document.querySelector('.scnews__list-' + id).classList.add('--active');
        });

    });
}
handleTabs();

// scroll to section
function scrollToSection() {
    let section = document.querySelectorAll('.header__menu-item')
    const nav = document.querySelector('.menumobile');
    section.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            // remove class active menu nav
            const btnMenu = document.querySelector('.header__cta-mobile');
            const nav = document.querySelector('.menumobile');
            const body = document.querySelector('.body');
            // add class active / removed
            btnMenu.classList.remove("--active");
            nav.classList.remove("--active");
            body.classList.remove("--active");
            // add active item
            item.classList.add('--active');
            // get id item
            let idItem = item.getAttribute('href');
            // get height item
            let heightItem = document.querySelector(`${idItem}`).offsetTop;
            // get height header
            let heigthHeader = document.querySelector('.header').offsetHeight;
            window.scrollTo({ top: heightItem - heigthHeader, behavior: 'smooth' });
            removeActiveSection();
        });
    });
    // function remove active
    function removeActiveSection(e) {
        section.forEach((item) => {
            item.classList.remove('--active');
        });
    }



    // scroll to active section
    let sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let scrolled = window.scrollY;
        sections.forEach((item, index) => {
            // index item
            let heightTop = item.offsetTop;
            let heightItem = item.offsetHeight;
            let height = heightTop + heightItem;
            let headerHeight = document.querySelector('.header').offsetHeight;
            if (scrolled > heightTop - headerHeight - 1 && scrolled < height + headerHeight) {
                removeActiveSection();
                section[index].classList.add('--active');
            }
        });

    });
}
scrollToSection();


// slider hero

function handleSliderHero() {
    // tao slider hero
    var slider = document.querySelector('.schero__slider');
    var flktySlider = new Flickity(slider, {
        // options
        cellAlign: 'left',
        contain: true,
        draggable: '>1',
        wrapAround: true,
        prevNextButtons: false,
        // autoPlay: 500,
        // pauseAutoPlayOnHover: true,
        // fullscreen: true,
        on: {
            ready: function () {
                console.log('Flickity is ready');
                handleDotsSlider();
            },
            change: function (index) {
                console.log('Slide changed to' + index);
                handleNumberSlider(index);
            }
        }
    },);


    // btn prev -- next 
    let btnPrev = document.querySelector('.--btnprev');
    let btnNext = document.querySelector('.--btnnext');
    btnPrev.addEventListener('click', () => {
        flktySlider.previous(true);
    });
    btnNext.addEventListener('click', () => {
        flktySlider.next(true);
    });
    // dots
    // xu li dot slider
    function handleDotsSlider() {
        let dots = document.querySelector('.flickity-page-dots'),
            heroBottom = document.querySelector('.schero__bottom-left');
        heroBottom.appendChild(dots);
    }
    // xu li number slider
    function handleNumberSlider(index) {
        let number = document.querySelector('.number .current__number');
        number.innerHTML = (index + 1).toString().padStart(2, '0');
    }
}
handleSliderHero();


// siler carousel
function handleSliderCarousel() {
    let slider = document.querySelector('.sccarouset__thumb');
    let progressBar = document.querySelector('.sccarouset__propress-bar');
    let flktySlider = new Flickity(slider, {
        // options
        cellAlign: 'left',
        contain: true,
        draggable: '>1',
        freeScroll: true,
        prevNextButtons: false,
        // autoPlay: 500,
        // pauseAutoPlayOnHover: true,
        // fullscreen: true,
    },);
    flktySlider.on('scroll', function (progress) {
        progress = Math.max(0, Math.min(1, progress));
        progressBar.style.width = progress * 100 + '%';
    });
}
handleSliderCarousel();


// fancybox img
function handleFancyboxImg() {
    Fancybox.bind('[data-fancybox="gallery"],[data-caption]', {
        infinite: true,
        keyboard:
        {
            Escape: "close",
            Delete: "close",
            Backspace: "close",
            PageUp: "next",
            PageDown: "prev",
            ArrowUp: "prev",
            ArrowDown: "next",
            ArrowRight: "next",
            ArrowLeft: "prev",
        },
        caption: (Fancybox, slide) => {
            const caption = slide.caption || "";
            return ` ${caption}`;
        },
    });
}
handleFancyboxImg();

// loading images 
function loadingImages() {
    let loading = 0;
    // all images page
    imgs = document.querySelectorAll('img').length,
        // get body
        container = document.querySelector('body');

    let imgLoaded = imagesLoaded(container);
    imgLoaded.on('progress', (instance) => {
        loading++;
        percent = Math.floor((loading / imgs) * 100);
        handleLoading();
    }).on('always', (instance) => {
        console.log('always');
    }).on('fail', (instance) => {
        console.log('fail');
    }).on('done', (instance) => {
        console.log('done');
        hideLoading();

    });
}
// loadding... % and number
function handleLoading() {
    const propressbar = document.querySelector('.propressbar'),
        textPercent = document.querySelector('.loading__inner-percent');
    propressbar.style.width = `${percent}%`;
    textPercent.innerHTML = `${percent}%`;
}
// ấn hiện loadding
function hideLoading() {
    const loading = document.querySelector('.loading');
    loading.classList.add('is__loading');
}
loadingImages();


// accordion

function handlerAccordion() {
    let accordion = document.querySelectorAll('.accordion');
    accordion.forEach(function (item) {
        item.addEventListener('click', function () {

            this.classList.toggle('--active');

            let panel = this.nextElementSibling;

            if (panel.style.maxHeight) {

                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });
}
handlerAccordion();

// handle eyeicon
function handleEyeIcon() {
    let eyeicon = document.querySelector('#eyeicon'),
        cfeyeicon = document.querySelector('#cfeyeicon'),
        password = document.querySelector('#password'),
        cfpassword = document.querySelector('#cfpassword');

    eyeicon.addEventListener('click', () => {
        if (password.type == 'password') {
            password.type = 'text';
            eyeicon.src = 'img/show.svg';
        } else {
            password.type = 'password';
            eyeicon.src = 'img/hide.svg';
        }
    });
    cfeyeicon.addEventListener('click', () => {
        if (cfpassword.type == 'password') {
            cfpassword.type = 'text';
            cfeyeicon.src = 'img/show.svg';
        } else {
            cfpassword.type = 'password';
            cfeyeicon.src = 'img/hide.svg';
        }
    });
}
handleEyeIcon();

// form 
function validateForm() {
    const form = document.querySelector('.register__form'),
        fullname = document.querySelector('#fullname'),
        email = document.querySelector('#email'),
        username = document.querySelector('#username'),
        password = document.querySelector('#password'),
        cfpassword = document.querySelector('#cfpassword'),
        confirm = document.querySelector('#confirm');


    // get parent 
    function getParentInput(element, selector = '') {
        while (element.parentElement) {
            // kiem tra element == .form__group
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            // get parentElement - element
            element = element.parentElement;
        }
    }
    // handler errors
    function handleError(input, textError = '') {

        const parentInput = getParentInput(input, '.form__group');
        let error = parentInput.querySelector('.error');
        if (textError != '') {
            // them loi
            error.innerText = textError;
            input.classList.add('--inputerror');
        } else {
            // xoa loi
            error.innerText = textError;
            input.classList.remove('--inputerror');
        }
    }
    // check is email
    function isEmail(value) {
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
        return regexEmail.test(value);
    }
    // check is username
    function isUsername(value) {
        const regexUsername = /^[a-zA-Z0-9]+$/;
        return regexUsername.test(value);
    }
    // check is username
    function isPassword(value) {
        const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
        return regexPassword.test(value);
    }
    //handler check input
    function checkInputs() {
        let arrData = [];
        // fullname check
        const valueFullname = fullname.value.trim();
        if (valueFullname == '') {
            handleError(fullname, 'Vui long dien full name');
            return false;
        } else {
            arrData.push(valueFullname);
            handleError(fullname);

        }
        // email check
        const valueEmail = email.value.trim();
        if (valueEmail == '') {
            handleError(email, 'Vui long dien email');
            return false;
        } else if (!isEmail(valueEmail)) {
            handleError(email, 'Vui long nhap dung email');
            return false;
        } else {
            arrData.push(valueEmail);
            handleError(email);
        }
        // username check
        const valueUsername = username.value.trim();
        if (valueUsername == '') {
            handleError(username, 'Vui long dien username');
            return false;
        } else if (!isUsername(valueUsername)) {
            handleError(username, 'Vui long nhap dung username');
            return false;
        } else {
            arrData.push(valueUsername);
            handleError(username);
        }
        // password check
        const valuePassword = password.value.trim();
        if (valuePassword == '') {
            handleError(password, 'Vui long dien password');
            return false;
        } else if (!isPassword(valuePassword)) {
            handleError(password, 'Vui long nhap dung password');
            return false;
        } else {
            arrData.push(valuePassword);
            handleError(password);
        }
        // cfpassword check
        const valueCfpassword = cfpassword.value.trim();
        if (valueCfpassword == '') {
            handleError(cfpassword, 'Vui long dien password');
            return false;
        } else if (valuePassword != valueCfpassword) {
            handleError(cfpassword, 'Password khong giong');
            return false;
        } else {
            arrData.push(valuePassword);
            handleError(cfpassword);
        }
        // confirm 
        if (!confirm.checked) {
            handleError(confirm, 'Vui long xac nhan');
            return false;
        } else {
            handleError(confirm);
        }
        return arrData;
    }

    // form submit button
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isCheck = checkInputs();
        if (isCheck.length > 0) {
            alert(isCheck);
        } else {
            console.error('error');
        }
    });
}
validateForm();