$(function () {
   $("#ctrlCollect").on("click",function(){
       var memberIdS = $("#memberId").val();
       var jobIdS = $("#jobId").val();
       var userCharacterS = $("#userCharacter").val()
       
       var dataCollect = {
           memberId:memberIdS,
           jobId:jobIdS,
           userCharacter:userCharacterS
       } 

        $.ajax({
            type:"post",
            url:"/job/collect",
            data:dataCollect,
            success:function(res){
                if(res.errCode == "1"){
                    Swal.fire(`${res.errMsg}`,"","error")
                }else if(res.errCode == "2"){
                    Swal.fire(`${res.errMsg}`,"","error")
                }else{
                    
                }
            }
        })

   })
})