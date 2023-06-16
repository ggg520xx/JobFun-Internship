$(function () {
    //新增職業類別選擇
    $("#classBtnForAdd").on("click",function () {
        var forJobText =  $('input:radio[name=jobClassForAdd]:checked').val();
        var forJobVal =  $('input:radio[name=jobClassForAdd]:checked').attr("data-jobClassValue");
        $("#addJobClassText").text(forJobText)
        $("#addJobClassVal").val(forJobVal);
    })

    //新增地區選擇
    $("#areaBtnForAdd").on("click",function () {
        var forAreaText =  $('input:radio[name=areaSelectForAdd]:checked').val();
        var forAreaVal =  $('input:radio[name=areaSelectForAdd]:checked').attr("data-areaValue");

        $("#addAreaText").text(forAreaText)
        $("#addAreaVal").val(forAreaVal);
    })


    //修改職業類別選擇
     $("#classBtnForEdit").on("click",function () {
        var forJobText =  $('input:radio[name=jobClassForEdit]:checked').val();
        var forJobVal =  $('input:radio[name=jobClassForEdit]:checked').attr("data-jobClassValue");
        $("#editJobClassText").text(forJobText)
        $("#editJobClassVal").val(forJobVal);
    })

    //修改地區選擇地區選擇
     $("#areaBtnForEdit").on("click",function(){
        var forAreaText =  $('input:radio[name=areaSelectForEdit]:checked').val();
        var forAreaVal =  $('input:radio[name=areaSelectForEdit]:checked').attr("data-areaValue");
        $("#editAreaText").text(forAreaText)
        $("#editAreaVal").val(forAreaVal);
     })

     
     //修改廠商介紹選擇地區
     $("#areaBtnForIntro").on("click",function(){
        var forAreaText =  $('input:radio[name=areaSelectForIntro]:checked').val();
        var forAreaVal =  $('input:radio[name=areaSelectForIntro]:checked').attr("data-areaValue");
        $("#aeraIntro").text(forAreaText)
        $("#aeraIntroVal").val(forAreaVal);
     })

})