/*--------------iDemand Accordian---------------------*/
$(document).ready(function(){
    $(".dPlus").addClass("accordianHide");
   /* $(".dPlus").eq(1).parents(".iDemandMid").children(".dAns").slideDown();
    $(".dPlus").eq(1).removeClass("accordianHide");*/

    $(".dPlus").click(function(e){
       if($(this).hasClass("accordianHide")){
           $(".dPlus").parents(".iDemandMid").children(".dAns").slideUp();
           $(this).parents(".iDemandMid").children(".dAns").slideDown();
           $(".dPlus").addClass("accordianHide");
           $(this).removeClass("accordianHide");
       }else
       {
           $(this).parents(".iDemandMid").children(".dAns").slideUp();
           $(this).addClass("accordianHide");
       }
    });

 });

/*--------------Corruption Accordian---------------------*/
$(document).ready(function(){
    $(".cPlus").click(function(e){
        if($(this).hasClass("cAccordianHide")){
            $(this).removeClass("cAccordianHide");
            $(this).parent().next().slideUp();
        }else{
            $(".cAns").slideUp();
            $(".cPlus").removeClass("cAccordianHide");
            $(this).addClass("cAccordianHide");
            $(this).parent().next().slideDown();
        }
    });

});
/*--------------RR View Sidebar Recent Post Accordian---------------------*/
/*
$(document).ready(function(){
    $(".rrRightRecentPostLi a").click(function(){
        if($(this).parent().hasClass("rrPostAccordian")){
            $(this).next().slideUp();
            $(this).parent().removeClass("rrPostAccordian");
        }else
        {
            $(".rrRightRecentPostLi").removeClass("rrPostAccordian");
            $(".rrRightRecentSubPost").slideUp();
            $(this).next().slideDown();
            $(this).parent().addClass("rrPostAccordian");
        }
    });
});
*/


/*--------------RR View Sidebar Issues Accordian---------------------*/
/*$(document).ready(function(){
    $(".rrRightIssueLi a").click(function(){
        if($(this).parent().hasClass("rrAccordian")){
            $(this).next().slideUp();
            $(this).parent().removeClass("rrAccordian");
        }else
        {
            $(".rrRightIssueLi").removeClass("rrAccordian");
            $(".rrRightSubIssues").slideUp();
            $(this).next().slideDown();
            $(this).parent().addClass("rrAccordian");
        }
    });
});*/

/*--------------RR View Sidebar Archieves Accordian---------------------*/
/*$(document).ready(function(){
    $(".rrRightYear a").click(function(){
        if($(this).parent().hasClass("rrAccordian")){
            $(this).next().slideUp();
            $(this).parent().removeClass("rrAccordian");
        }else
        {
            $(".rrRightYear").removeClass("rrAccordian");
            $(".rrRightArchieve").slideUp();
            $(this).next().slideDown();
            $(this).parent().addClass("rrAccordian");
        }
    });
});*/
/*--------------RR View Sidebar Archieves Sub Accordian-------------------*/
/*
$(document).ready(function(){
    $(".rrRightSubArchieve").eq(0).slideDown();
    $(".rrRightMonth").eq(0).addClass("rrSubAccordian");

    $(".rrRightMonth").click(function(){
        if($(this).parent().hasClass("rrSubAccordian")){
            $(this).next().slideUp();
            $(this).parent().removeClass("rrSubAccordian");
        }else
        {
            $(".rrRightMonth").removeClass("rrSubAccordian");
            $(".rrRightSubArchieve").slideUp();
            $(this).next().slideDown();
            $(this).parent().addClass("rrSubAccordian");
        }
    });
});*/
