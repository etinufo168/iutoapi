$(document).ready(function(){
            
            //根據捲軸的位置改變右方導覽列游標的顏色
            $(window).scroll(function(){
                 if($(window).scrollTop()>=$(".p01").offset().top && $(window).scrollTop()<$(".p02").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(0)").css("background-color","#46dd46")
                }else if($(window).scrollTop()>=$(".p02").offset().top && $(window).scrollTop()<$(".p03").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(1)").css("background-color","#46dd46")
                }else if($(window).scrollTop()>=$(".p03").offset().top && $(window).scrollTop()<$(".p04").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(2)").css("background-color","#46dd46")
                }else if($(window).scrollTop()>=$(".p04").offset().top && $(window).scrollTop()<$(".p05").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(3)").css("background-color","#46dd46")
                }else if($(window).scrollTop()>=$(".p05").offset().top && $(window).scrollTop()<$(".p06").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(4)").css("background-color","#46dd46")
                }else if($(window).scrollTop()>=$(".p06").offset().top && $(window).scrollTop()<$(".p07").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(5)").css("background-color","#46dd46")
                }else if($(window).scrollTop()>=$(".p07").offset().top && $(window).scrollTop()<$(".p08").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(6)").css("background-color","#46dd46")
                }else if($(window).scrollTop()>=$(".p08").offset().top && $(window).scrollTop()<$(".p09").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(7)").css("background-color","#46dd46")
                }else if($(window).scrollTop()>=$(".p09").offset().top && $(window).scrollTop()<$(".p010").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(8)").css("background-color","#46dd46")
                }else if($(window).scrollTop()>=$(".p010").offset().top && $(window).scrollTop()<$(".p011").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(9)").css("background-color","#46dd46")
                }else if($(window).scrollTop()>=$(".p011").offset().top && $(window).scrollTop()<$(".p012").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(10)").css("background-color","#46dd46")
                }else if($(window).scrollTop()>=$(".p012").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(11)").css("background-color","#46dd46")
                }

            })
                     
            //點選右方導覽列時會到指定圖片
            var num_li=$("li").length
            for(i=0;i<=num_li;i++){
                $(".nav li:eq("+i+")").click({id:i},function(e){
                    $("html,body").stop()
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    page=e.data.id+1
                    $("html,body").animate({"scrollTop":$(".p0"+page).offset().top})
                    $(".nav li:eq("+e.data.id+")").css("background-color","#46dd46")//被點擊到的游標變色，前面的selector用this也可以
                })
            }
            //一進入網頁時，將導覽列垂直置中計算導覽列置中的位置
           center()
            
           //縮放網頁時，將導覽列垂直置中
            $(window).resize(function(){
                center()
            })
            
            //計算導覽列垂直置中的高度
            function center(){
                pos=$(window).height()/2-$(".nav").height()/2
                $(".nav").css("top",pos)
            }
            
        })