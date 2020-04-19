(function () {
    "use strict"

    /* Animation Effects
   ===================*/
    new WOW().init({
        mobile: true
    });

    /* Handle Form Resubmission
   ===================*/
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }

})();