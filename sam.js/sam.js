//상단메뉴
    $('.mainMenu').on('mouseenter focus', ()=>{
       $('header nav').stop().slideDown();
       $('#bg').stop().slideDown();
    });
    $('header ul').mouseleave( ()=> {
        $('header nav').stop().slideUp();
        $('#bg').stop().slideUp();
    });
    //상단메뉴 웹 접근성 향상
    $('.last').blur( ()=>{
        $('header nav').stop().slideUp();
        $('#bg').stop().slideUp();
    });
    $(document).keydown( e=> {
        if( e.key === "Escaps") $('popup').stop().fadeOut();
    });