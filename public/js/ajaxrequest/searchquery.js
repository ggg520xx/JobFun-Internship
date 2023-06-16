$(function () {
    $("#searchBtnComfirm").on("click",function () { 
        var keyWord = $("#keyWord").val();
        var area = $("#areaValue").val();
        var jobClass = $("#jobClassValue").val();
        
        // if ((!keyWord && !area) && !jobClass) {
        //     //3個選項 X X X
        //     window.location.replace("/search")
            
        // }else if ((keyWord && !area ) && !jobClass ){
        //     //3個選項 V X X
            
        //     $.ajax({
        //         type:"get",
        //         url:"search/result?keyword=wqewqew"
                
        //     })
        // }else if((!keyWord && area ) && !jobClass ){
        //     // X V X
        //     alert("ok2")
        // }else if((!keyWord && !area) && jobClass){
        //     // X X V
        //     alert("ok3")
        // }else if((keyWord && area) && !jobClass){
        //     // V V X
        //     alert(area)
        // }else if((keyWord && !area) && jobClass){
        //     // V X V
        //     alert("ok5")
        // }else if ((!keyWord && area) && jobClass){
        //     // X V V
        //     alert("ok6")
        // }else if ((keyWord && area) && jobClass){
        //     // V V V
        //     alert("ok7")
        // }

    })



})