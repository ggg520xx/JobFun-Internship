$(function () {
    
    //member avatar
    $("#file").on("change",function () {
       var fileInfo = $("#file")[0];
       var companyId = $("#companyId").val();
       var formData=new FormData();
       
       formData.append('file',fileInfo.files[0]);
       formData.append('companyId',companyId);
       
       $.ajax({
            type:"post",
            url:"/company/chlogo",
            data:formData,
            contentType: false,
            processData: false,
            success:function(res){
                if(res){
                 Swal.fire("Logo更換成功","","success")
                }
            }
       })
    })


})


