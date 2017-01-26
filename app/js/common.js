$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

    $('.gamburger').on('click',function(){
        $(this).toggleClass('active');
        $(".mnu-adaptive").toggleClass('active');
    });
    $(document).on("click",function(event){
        if( $(event.target).closest(".mnu-adaptive,.gamburger").length )return;
        $('.gamburger').removeClass('active');
        $(".mnu-adaptive").removeClass('active');
        event.stopPropagation();
    });

    $(document).ready(function() {
        var dveriSlider = $('#dveri-slider1').lightSlider({
            item:4,
            loop:true,
            slideMove:1,
            slideMargin: 0,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            controls: false,
            pager: false,
            responsive : [
                {
                    breakpoint:1185,
                    settings: {
                        item:5,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:992,
                    settings: {
                        item:4,
                        slideMove:1
                    }
                },
                {
                    breakpoint:800,
                    settings: {
                        item:3,
                        slideMove:1
                    }
                },
                {
                    breakpoint:600,
                    settings: {
                        item:2,
                        slideMove:1
                    }
                },
                {
                    breakpoint:451,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }

            ]
        });

        $(".dveri-sliders__0-prev").on("click",function(e){
            e.preventDefault();
            dveriSlider.goToPrevSlide();
        });

        $(".dveri-sliders__0-next").on("click",function(e){
            e.preventDefault();
            dveriSlider.goToNextSlide();
        });
    });

    $(document).ready(function() {
        var dveriSlider = $('#dveri-slider2').lightSlider({
            item:4,
            loop:true,
            slideMove:1,
            slideMargin: 0,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            controls: false,
            pager: false,
            responsive : [
                {
                    breakpoint:1185,
                    settings: {
                        item:5,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:992,
                    settings: {
                        item:4,
                        slideMove:1
                    }
                },
                {
                    breakpoint:800,
                    settings: {
                        item:3,
                        slideMove:1
                    }
                },
                {
                    breakpoint:600,
                    settings: {
                        item:2,
                        slideMove:1
                    }
                },
                {
                    breakpoint:451,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
            ]
        });

        $(".dveri-sliders__2-prev").on("click",function(e){
            e.preventDefault();
            dveriSlider.goToPrevSlide();
        });

        $(".dveri-sliders__2-next").on("click",function(e){
            e.preventDefault();
            dveriSlider.goToNextSlide();
        });
    });

    $(document).ready(function() {
        var dveriSlider = $('#dveri-slider3').lightSlider({
            item:4,
            loop:true,
            slideMove:1,
            slideMargin: 0,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            controls: false,
            pager: false,
            responsive : [
                {
                    breakpoint:1185,
                    settings: {
                        item:5,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:992,
                    settings: {
                        item:4,
                        slideMove:1
                    }
                },
                {
                    breakpoint:800,
                    settings: {
                        item:3,
                        slideMove:1
                    }
                },
                {
                    breakpoint:600,
                    settings: {
                        item:2,
                        slideMove:1
                    }
                },
                {
                    breakpoint:451,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
            ]
        });

        $(".dveri-sliders__3-prev").on("click",function(e){
            e.preventDefault();
            dveriSlider.goToPrevSlide();
        });

        $(".dveri-sliders__3-next").on("click",function(e){
            e.preventDefault();
            dveriSlider.goToNextSlide();
        });
    });

    $(document).ready(function() {
        var shopSlider = $('#shop-slider').lightSlider({
            item:4,
            loop:true,
            slideMove:1,
            pager: false,
            controls: false,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            responsive : [
                {
                    breakpoint:900,
                    settings: {
                        item:3,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:680,
                    settings: {
                        item:2,
                        slideMove:1
                    }
                },
                {
                    breakpoint:500,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
            ]
        });

        $(".shopslider-aPrev").on("click",function(e){
            e.preventDefault();
            shopSlider.goToPrevSlide();
        });

        $(".shopslider-aNext").on("click",function(e){
            e.preventDefault();
            shopSlider.goToNextSlide();
        });

    });

    $(document).ready(function() {
        var shopSlider = $('#shop-slider2').lightSlider({
            item:4,
            loop:true,
            slideMove:1,
            pager: false,
            controls: false,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            responsive : [
                {
                    breakpoint:900,
                    settings: {
                        item:3,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:680,
                    settings: {
                        item:2,
                        slideMove:1
                    }
                },
                {
                    breakpoint:500,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
            ]
        });

        $(".shopslider-aPrev2").on("click",function(e){
            e.preventDefault();
            shopSlider.goToPrevSlide();
        });

        $(".shopslider-aNext2").on("click",function(e){
            e.preventDefault();
            shopSlider.goToNextSlide();
        });

    });

    $(document).ready(function() {
        var arkiSlider = $('#dveri-slider4').lightSlider({
            item:4,
            loop:true,
            slideMove:1,
            slideMargin: 0,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            controls: false,
            pager: false,
            responsive : [
                {
                    breakpoint:1185,
                    settings: {
                        item:5,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:1060,
                    settings: {
                        item:4,
                        slideMove:1
                    }
                },
                {
                    breakpoint:860,
                    settings: {
                        item:3,
                        slideMove:1
                    }
                },
                {
                    breakpoint:660,
                    settings: {
                        item:2,
                        slideMove:1
                    }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
            ]
        });

        $(".dveri-sliders__4-prev").on("click",function(e){
            e.preventDefault();
            arkiSlider.goToPrevSlide();
        });

        $(".dveri-sliders__4-next").on("click",function(e){
            e.preventDefault();
            arkiSlider.goToNextSlide();
        });
    });

    $(document).ready(function() {
        var arkiSlider = $('#dveri-slider5').lightSlider({
            item:4,
            loop:true,
            slideMove:1,
            slideMargin: 0,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            controls: false,
            pager: false,
            responsive : [
                {
                    breakpoint:1185,
                    settings: {
                        item:5,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:1060,
                    settings: {
                        item:4,
                        slideMove:1
                    }
                },
                {
                    breakpoint:860,
                    settings: {
                        item:3,
                        slideMove:1
                    }
                },
                {
                    breakpoint:660,
                    settings: {
                        item:2,
                        slideMove:1
                    }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
            ]
        });

        $(".dveri-sliders__5-prev").on("click",function(e){
            e.preventDefault();
            arkiSlider.goToPrevSlide();
        });

        $(".dveri-sliders__5-next").on("click",function(e){
            e.preventDefault();
            arkiSlider.goToNextSlide();
        });
    });

    $(document).ready(function() {
        var arkiSlider = $('#dveri-slider6').lightSlider({
            item:4,
            loop:true,
            slideMove:1,
            slideMargin: 0,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            controls: false,
            pager: false,
            responsive : [
                {
                    breakpoint:1185,
                    settings: {
                        item:5,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:1060,
                    settings: {
                        item:4,
                        slideMove:1
                    }
                },
                {
                    breakpoint:860,
                    settings: {
                        item:3,
                        slideMove:1
                    }
                },
                {
                    breakpoint:660,
                    settings: {
                        item:2,
                        slideMove:1
                    }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
            ]
        });

        $(".dveri-sliders__6-prev").on("click",function(e){
            e.preventDefault();
            arkiSlider.goToPrevSlide();
        });

        $(".dveri-sliders__6-next").on("click",function(e){
            e.preventDefault();
            arkiSlider.goToNextSlide();
        });
    });

    $(document).ready(function() {
        var furnitSlider = $('#furnitSlider1').lightSlider({
            item:4,
            loop:true,
            slideMove:1,
            slideMargin: 0,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            controls: false,
            pager: false,
            responsive : [
                {
                    breakpoint:1185,
                    settings: {
                        item:5,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:1060,
                    settings: {
                        item:4,
                        slideMove:1
                    }
                },
                {
                    breakpoint:860,
                    settings: {
                        item:3,
                        slideMove:1
                    }
                },
                {
                    breakpoint:660,
                    settings: {
                        item:2,
                        slideMove:1
                    }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
            ]
        });

        $(".furnit-slider__1-prev").on("click",function(e){
            e.preventDefault();
            furnitSlider.goToPrevSlide();
        });

        $(".furnit-slider__1-next").on("click",function(e){
            e.preventDefault();
            furnitSlider.goToNextSlide();
        });
    });

    $(document).ready(function() {
        var furnitSlider = $('#furnitSlider2').lightSlider({
            item:4,
            loop:true,
            slideMove:1,
            slideMargin: 0,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            controls: false,
            pager: false,
            responsive : [
                {
                    breakpoint:1185,
                    settings: {
                        item:5,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:1060,
                    settings: {
                        item:4,
                        slideMove:1
                    }
                },
                {
                    breakpoint:860,
                    settings: {
                        item:3,
                        slideMove:1
                    }
                },
                {
                    breakpoint:660,
                    settings: {
                        item:2,
                        slideMove:1
                    }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
            ]
        });

        $(".furnit-slider__2-prev").on("click",function(e){
            e.preventDefault();
            furnitSlider.goToPrevSlide();
        });

        $(".furnit-slider__2-next").on("click",function(e){
            e.preventDefault();
            furnitSlider.goToNextSlide();
        });
    });

    $(document).ready(function() {
        var furnitSlider = $('#furnitSlider3').lightSlider({
            item:4,
            loop:true,
            slideMove:1,
            slideMargin: 0,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            controls: false,
            pager: false,
            responsive : [
                {
                    breakpoint:1185,
                    settings: {
                        item:5,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:1060,
                    settings: {
                        item:4,
                        slideMove:1
                    }
                },
                {
                    breakpoint:860,
                    settings: {
                        item:3,
                        slideMove:1
                    }
                },
                {
                    breakpoint:660,
                    settings: {
                        item:2,
                        slideMove:1
                    }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
            ]
        });

        $(".furnit-slider__3-prev").on("click",function(e){
            e.preventDefault();
            furnitSlider.goToPrevSlide();
        });

        $(".furnit-slider__3-next").on("click",function(e){
            e.preventDefault();
            furnitSlider.goToNextSlide();
        });
    });

    $(document).ready(function() {
        var furnitSlider = $('#furnitSlider4').lightSlider({
            item:4,
            loop:true,
            slideMove:1,
            slideMargin: 0,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            controls: false,
            pager: false,
            responsive : [
                {
                    breakpoint:1185,
                    settings: {
                        item:5,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:1060,
                    settings: {
                        item:4,
                        slideMove:1
                    }
                },
                {
                    breakpoint:860,
                    settings: {
                        item:3,
                        slideMove:1
                    }
                },
                {
                    breakpoint:660,
                    settings: {
                        item:2,
                        slideMove:1
                    }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
            ]
        });

        $(".furnit-slider__4-prev").on("click",function(e){
            e.preventDefault();
            furnitSlider.goToPrevSlide();
        });

        $(".furnit-slider__4-next").on("click",function(e){
            e.preventDefault();
            furnitSlider.goToNextSlide();
        });
    });

    $(document).ready(function() {
        var laminatSlider = $('#laminatSlider1').lightSlider({
            item:4,
            loop:true,
            slideMove:1,
            slideMargin: 0,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            controls: false,
            pager: false,
            responsive : [
                {
                    breakpoint:1185,
                    settings: {
                        item:5,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:1060,
                    settings: {
                        item:4,
                        slideMove:1
                    }
                },
                {
                    breakpoint:860,
                    settings: {
                        item:3,
                        slideMove:1
                    }
                },
                {
                    breakpoint:660,
                    settings: {
                        item:2,
                        slideMove:1
                    }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
            ]
        });

        $(".laminat-slider__1-prev").on("click",function(e){
            e.preventDefault();
            laminatSlider.goToPrevSlide();
        });

        $(".laminat-slider__1-next").on("click",function(e){
            e.preventDefault();
            laminatSlider.goToNextSlide();
        });
    });

    $(document).ready(function() {
        var laminatSlider = $('#laminatSlider2').lightSlider({
            item:4,
            loop:true,
            slideMove:1,
            slideMargin: 0,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            controls: false,
            pager: false,
            responsive : [
                {
                    breakpoint:1185,
                    settings: {
                        item:5,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:1060,
                    settings: {
                        item:4,
                        slideMove:1
                    }
                },
                {
                    breakpoint:860,
                    settings: {
                        item:3,
                        slideMove:1
                    }
                },
                {
                    breakpoint:660,
                    settings: {
                        item:2,
                        slideMove:1
                    }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
            ]
        });

        $(".laminat-slider__2-prev").on("click",function(e){
            e.preventDefault();
            laminatSlider.goToPrevSlide();
        });

        $(".laminat-slider__2-next").on("click",function(e){
            e.preventDefault();
            laminatSlider.goToNextSlide();
        });
    });

    $(document).ready(function() {
        var laminatSlider = $('#laminatSlider3').lightSlider({
            item:4,
            loop:true,
            slideMove:1,
            slideMargin: 0,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            controls: false,
            pager: false,
            responsive : [
                {
                    breakpoint:1185,
                    settings: {
                        item:5,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:1060,
                    settings: {
                        item:4,
                        slideMove:1
                    }
                },
                {
                    breakpoint:860,
                    settings: {
                        item:3,
                        slideMove:1
                    }
                },
                {
                    breakpoint:660,
                    settings: {
                        item:2,
                        slideMove:1
                    }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
            ]
        });

        $(".laminat-slider__3-prev").on("click",function(e){
            e.preventDefault();
            laminatSlider.goToPrevSlide();
        });

        $(".laminat-slider__3-next").on("click",function(e){
            e.preventDefault();
            laminatSlider.goToNextSlide();
        });
    });

});

//Форма отправки 2.0
$(function() {
    $("[name=send]").click(function () {
        $(":input.error").removeClass('error');
        $(".allert").remove();

        var error;
        var btn = $(this);
        var ref = btn.closest('form').find('[required]');
        var msg = btn.closest('form').find('input, textarea');
        var send_btn = btn.closest('form').find('[name=send]');
        var subject = btn.closest('form').find('[name=form_subject]');
        $(ref).each(function () {
            if ($(this).val() == '') {
                var errorfield = $(this);
                $(this).addClass('error').parent('.field').append('<div class="allert"><span>Заполните это поле</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                error = 1;
                $(":input.error:first").focus();
                return;
            } else {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if ($(this).attr("type") == 'email') {
                    if (!pattern.test($(this).val())) {
                        $("[name=email]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный e-mail</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
                var patterntel = /^()[0-9]{9,18}/i;
                if ($(this).attr("type") == 'tel') {
                    if (!patterntel.test($(this).val())) {
                        $("[name=phone]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный номер телефона</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
            }
        });
        if (!(error == 1)) {
            $(send_btn).each(function () {
                $(this).attr('disabled', true);
            });

            var form = btn.closest('form'), name = form.find('[name=name]').val();

            $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: msg,
                success: function (data) {
                    $.magnificPopup.close();
                    form[0].reset();
                    $(send_btn).each(function () {
                        $(this).attr('disabled', false);
                    });

                    if(subject == "Заказать звонок"){
                        $("a[href='#popupthx']").click();
                    }else{
                        $("a[href='#block-popup']").click();
                    }


                },
                error: function (xhr, str) {
                    alert('Возникла ошибка: ' + xhr.responseCode);
                }
            });
        }
        return false;
    });
});