$(document).ready(function () {

    //array to hold fading in/out text
    var descriptionList = ['Web Designer', 'Software Developer', 'UBC Computer Engineering Student'];
    var listLen = descriptionList.length;
    var i = 0;

    function fadingtext() {

        $('#fadingDescription').delay(1000).fadeTo(1200, 0, function () {
            $(this).text(descriptionList[++i % listLen]).fadeTo(1200, 0.7, fadingtext);
        });
    }

    fadingtext();


});
