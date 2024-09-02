(function ($) {
    "use strict";
        $(document).ready(function(){
            $(".thumbnail").on('click',function () {
                var SourcePetiteImage = $(this).attr('src');
                var SourceGrandeImage = SourcePetiteImage.replace("petites", "grandes");
                $("#imgPreview").html("<img src='" + SourceGrandeImage + "'>");
                $("#imgPreview").fadeIn("slow").css("display", "flex");
            });
        
            $("#imgPreview").on('click',function () {
                $("#imgPreview").fadeOut("fast");
            });

            $('#mainMenu a').on('click',function(){
                $('#mainMenu a').removeClass('active');
                $(this).addClass('active');
                var section = $(this).attr('data-section');
                $('section').addClass('hidden');
                $('section[data-section="'+section+'"]').removeClass('hidden');
            });
            $('#mainMenu a[data-section="intro"]').trigger('click');

            console.log(document.location.href);
            if(document.location.href.indexOf('#') > -1){
                var anchor = document.location.href.substr(document.location.href.indexOf('#')+1,document.location.href.length);
                $('#mainMenu a[data-section="'+anchor+'"]').trigger('click');
            }
        });
})(jQuery);