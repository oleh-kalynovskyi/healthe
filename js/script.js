document.addEventListener("DOMContentLoaded", function(event) {
    //swiper banner
    let mySwiper = new Swiper('.first-swiper', {
        slidesPerViwe: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    // swiper Featured Products
    let swiperS = new Swiper('.second-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        breakpoints: {
            425: {       
               slidesPerView: 2      
            },
            575: {       
                slidesPerView: 3      
             },
            768: {       
                slidesPerView: 4      
            }
         },
    });
    
    // swiper INSTAGRAM FEED
    var swiperT = new Swiper('.thrity_swiper', {
    slidesPerView: 2,
    spaceBetween: 0,
    freeMode: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        425: {       
            slidesPerView: 3      
        },
        768: {       
            slidesPerView: 4      
            },
        1024: {       
            slidesPerView: 6      
        }
        },
    });
    
    //add/remove account modal window form
    $(document).ready(function(){
        $("#account_show").on("click", function(e) {
            $('body').append('<section class="account"> <div class="account_modal"> <h4 class="account_modal_title"> Login form </h4> <form method="post" action="form.php" class="account_modal_form"> <div class="account_modal_form_email"> <label for="name">Email or Phone</label> <input type="text" name="name" required> </div> <div class="account_modal_form_passwod"> <label for="email">Password</label> <input type="password" name="email" required> </div> <button type="submit" class="account_modal_form_login">Login</button> <div class="account_modal_form_for_register"> <p class="account_modal_form_for_register_text">Not a member? <a href="#" class="singup">Singup now</a></p> </div> </form> <div id="account_closed" class="account_modal_closed"><i class="fas fa-times account_closed_icon"></i></div> </div> </section>');
        });
    // remove account registration click button
        $("body").on("click",'.account_closed_icon', function() {
            $(".account").remove();
        });
    // remove account modal form click outside
        $("body").mouseup(function (e){
            if (!$(".account_modal").is(e.target) && $(".account_modal").has(e.target).length === 0){
                $(".account").remove();
            }
        });
    });
    
    // MediaQuery search
    $(window).resize(checkWidth);
    function checkWidth() {
        if ($(window).width() < 768) {
            $(function() {
                $(".navigation_form").on("click", function(e) {
                    $(".header_box_logo").addClass("display_none");
                    $("#label").addClass("display_none");
                    $("#shop_show").addClass("display_none");
                    $("#account_show").addClass("display_none");
                });
                $(document).on("click", function (e) {
                    if (e.target.id != ".header" && !$(e.target).closest(".header").length) {
                        $(".header_box_logo").removeClass("display_none");
                        $("#label").removeClass("display_none");
                        $("#shop_show").removeClass("display_none");
                        $("#account_show").removeClass("display_none");
                    }
                });
            });
        }
    }
    
    // Map Modal window
    $(document).ready(function(){
        $(".map_box").hide();
        // show Map Modal window
        $("#open_map").on("click", function(e) {
            $('.map_box').show();
        });
        // hide Map Modal window
        $("body").on("click",'#map_close', function() {
            $(".map_box").hide();
        });
        // hide Map Modal window click outside
        $("body").mouseup(function (e){
            if (!$("#map").is(e.target) && $("#map").has(e.target).length === 0){
                $(".map_box").hide();
            }
        });
    });
    
    // Initialize and add map
    function initMap() {
        const originalMapCenter = new google.maps.LatLng(38.123337618675016, -98.76646123466585);
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 17,
          center: originalMapCenter,
        });
        const marker = new google.maps.Marker({
          position: originalMapCenter,
          map: map,
          title: "adres"
        });
        const infowindow = new google.maps.InfoWindow({
          content: 
          "<br><b>Contact</b><br><br><b>Phone:</b><br><a href=tel:+1 (578) 789-65-20>+1 (578) 789-65-20</a><br><br><b>Hourse available:<br></b>11AM - 8PM</p><br><b>Email:</b><br><a href=mailto:support@kanafy.com>support@kanafy.com</a><br><br> ",
          position: originalMapCenter,
        });
          marker.addListener("click", () => {
          infowindow.open(map, marker);
        });
        infowindow.open(map);
    };
});


