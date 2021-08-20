let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const start2 = () => {
    if (isMobile) {
        let spans = document.getElementsByTagName("link")[2]
        spans.remove()
    } else {
        let spans = document.getElementsByTagName("link")[1]
        spans.remove()
    }
}

const start1 = () => {
    if (isMobile) {
        let spans = document.getElementsByTagName("link")[2]
        spans.remove()
    } else {
        document.getElementById("banneres").className = "login container text-center"
        let spans = document.getElementsByTagName("link")[1]
        spans.remove()
    }
}

const start = () => {
    if (isMobile) {
        $(".sidebar").css("display", "none")
        $(".bar").css("display", "block")
        $(".dashboard_banner").css("padding-left", "0px")
        let spans = document.getElementsByTagName("link")[2]
        spans.remove()
        $('.table').dataTable({
            "order": []
        });
    } else {
        $(".sidebar").css("display", "block")
        $(".bar").css("display", "none")
        document.getElementById("banneres").className = "dashboard_banner container text-center"
        let spans = document.getElementsByTagName("link")[1]
        spans.remove()
    }
}

const toggle = () => {
    if (isMobile) {
        if ($(".sidebar").is(":visible")) {
            $(".sidebar").css("display", "none")
            $(".sidebar").prop("disabled", "true")
            $(".bar").css("display", "block")
        } else {
            $(".sidebar").css("display", "block")
        }
    } else {
        if ($(".sidebar").is(":visible")) {
            $(".sidebar").css("display", "none")
            $(".sidebar").prop("disabled", "true")
            $(".bar").css("display", "block")
            $(".bar").css("padding-left", "2px")
            $(".pic").css("padding-left","0px")
            $(".pic1").css("padding-left","0px")
            $(".pic2").css("padding-left","0px")
            $(".prev").css("margin-left","0px")
            $(".dashboard_banner").css("padding-left", "5%")
        } else {
            $(".sidebar").css("display", "block")
        }
    }
}

const toggleBar = () => {
    if (isMobile) {
        if ($(".sidebar").is(":visible")) {
            $(".sidebar").css("display", "none")
            $(".bar").prop("disabled", true)
        } else {
            $(".sidebar").css("display", "block")
            $(".bar").css("display", "none")
        }
    } else {
        if ($(".sidebar").is(":visible")) {
            $(".sidebar").css("display", "none")
            $(".sidebar").css("transition", "0.3")
            $(".bar").prop("disabled", true)
        } else {
            $(".sidebar").css("display", "block")
            $(".bar").css("display", "none")
            $(".dashboard_banner").css("padding-left", "13rem")
            $(".pic").css("padding-left","13rem")
            $(".pic1").css("padding-left","13rem")
            $(".pic2").css("padding-left","13rem")
            $(".prev").css("margin-left","13rem")
        }
    }
}
const preving = () =>{
    if($(".pic").is(":visible")){

    }
    else if($(".pic1").is(":visible")){
        $(".pic").css("display","block")
        $(".pic1").css("display","none")
        $(".pic2").css("display","none")
    }
    else if($(".pic2").is(":visible")){
        $(".pic").css("display","none")
        $(".pic1").css("display","block")
        $(".pic2").css("display","none")
    }
}

const nexting = () =>{
    if($(".pic").is(":visible")){
        $(".pic").css("display","none")
        $(".pic1").css("display","block")
        $(".pic2").css("display","none")
    }
    else if($(".pic1").is(":visible")){
        $(".pic").css("display","none")
        $(".pic1").css("display","none")
        $(".pic2").css("display","block")
    }
    else if($(".pic2").is(":visible")){

    }
}

const inc = () =>{
    if($(".second-nav").css("margin-top")=="62px"){
        $(".second-nav").addClass("second-nav1")
        $(".second-nav").removeClass("second-nav3")
    } else if($(".second-nav").css("margin-top")=="173px"){
        $(".second-nav").removeClass("second-nav1")
        $(".second-nav").removeClass("second-nav3")
    } else if($(".second-nav").css("margin-top")=="100px"){
        $(".second-nav").addClass("second-nav3")
        $(".second-nav").removeClass("second-nav1")
    } else if($(".second-nav").css("margin-top")=="212px"){
        $(".second-nav").removeClass("second-nav1")
        $(".second-nav").removeClass("second-nav3")
    }
}

