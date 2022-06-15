let headerElement = document.getElementById('header_o_cb');
let headerAttribute = headerElement.dataset.include;
headerAttribute = [headerAttribute]
headerAttribute.forEach(element => {
    let file = element + ".html";
    //console.log(file)
    window.onload = (event) => {

        // headerElement.src = file.innerHTML
        //console.log(`${file}`.innerHTML);
    };
});

(function ($) {
    var includes = $("[data-include]");
    jQuery.each(includes, function () {
        var file = $(this).data("include") + ".html";
        $(this).load(file);
    });
})(jQuery);





