$(document).ready(function () {
    
    $('.fadein').on('webkitAnimationEnd', function(e) {
    $(this).addClass('visible');});

    //array to hold fading in/out text
    var descriptionList = ['Web Designer', 'Software Developer', 'UBC Computer Engineering Major', 'Seeking an internship for Summer 2k17'];
    
    var listLen = descriptionList.length;
    var i = 0;

    function fadingtext() {

        $('#fadingDescription').delay(1000).fadeTo(1200, 0, function () {
            $(this).text(descriptionList[++i % listLen]).fadeTo(1200, 0.7, fadingtext);
        });
    }

    fadingtext();


});
