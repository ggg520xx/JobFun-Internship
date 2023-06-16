$(function(){

    $("#areaComfirmBtn").on("click",function () {
        let selectedText = $('input[name="areaSelected"]:checkbox:checked').map(function() {
            return $(this).val();
        }).get().join(',');
        if(selectedText != ""){
            $("#selectedAreaText").text(selectedText);
        }else{
            $("#selectedAreaText").text("地區");
        };
    });
    


    $("#clsseComfirmBtn").on("click",function () {
        let selectedText = $('input[name="jobClass"]:checkbox:checked').map(function() {
            return $(this).val();
        }).get().join(',');
        if(selectedText != ""){
            $("#selectedCassText").text(selectedText);
        }else{
            $("#selectedCassText").text("類別");
        };
    });

    // searchBar fixed below navbar
    let searchBarH = $("#searchBar").offset().top; //取得searchBar與卷軸頂端的距離
    $(window).scroll(function(){
        var scroH = $(this).scrollTop(); //取得當前卷軸滾動的距離

        if(scroH + 58 >=searchBarH ){
        $("#searchBar").addClass("fixedTop");
        }else if(scroH<searchBarH){
        $("#searchBar").removeClass("fixedTop");
        }
        })

    
})