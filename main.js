$(document).ready(function () {
    function ItemFadeIn(selector) {
        var items = $(selector);
        var index = 0;

        function next() {
            if (index < items.length) {
                items.eq(index++).fadeIn(150, next)
            }
        }
        next();
    }

    ItemFadeIn('.item');
});