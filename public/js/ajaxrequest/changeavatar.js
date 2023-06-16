$(function () {
    
    //member avatar
    $("#file").on("change",function () {
       var fileInfo = $("#file")[0];
       var memberId = $("#memberInfoId").val();
       var formData=new FormData();
       
       formData.append('file',fileInfo.files[0]);
       formData.append('stMemberId',memberId);
       
       $.ajax({
            type:"post",
            url:"/member/chavatar",
            data:formData,
            contentType: false,
            processData: false,
            success:function(res){
                if(res){
                swal("大頭貼更換成功","","success");
                }
            }
       })
    })


})


