window.addEventListener('scroll', function() {
    const navigation = document.querySelector('.navigation');
    const distanceY = window.scrollY || document.documentElement.scrollTop;
    const shrinkOn = 100;

    if (distanceY > shrinkOn) {
        navigation.style.backgroundColor = '#111';
    } else {
        navigation.style.backgroundColor = '#333';
    }
});
