$(function () {
    //photo1
    $("#file-ip-1").on("change",function () {
       var fileInfo = $("#file-ip-1")[0];
       var companyId = $("#companyId").val();
       var formData=new FormData();
       
       formData.append('file',fileInfo.files[0]);
       formData.append('companyId',companyId);
       
       $.ajax({
            type:"post",
            url:"/company/chcompanyphoto1",
            data:formData,
            contentType: false,
            processData: false,
            success:function(res){
                return
            }
       })
    })

    //photo2
    $("#file-ip-2").on("change",function () {
       var fileInfo = $("#file-ip-2")[0];
       var companyId = $("#companyId").val();
       var formData=new FormData();
       
       formData.append('file',fileInfo.files[0]);
       formData.append('companyId',companyId);
       
       $.ajax({
            type:"post",
            url:"/company/chcompanyphoto2",
            data:formData,
            contentType: false,
            processData: false,
            success:function(res){
                return
            }
       })
    })

    //photo3
    $("#file-ip-3").on("change",function () {
       var fileInfo = $("#file-ip-3")[0];
       var companyId = $("#companyId").val();
       var formData=new FormData();
       
       formData.append('file',fileInfo.files[0]);
       formData.append('companyId',companyId);
       
       $.ajax({
            type:"post",
            url:"/company/chcompanyphoto3",
            data:formData,
            contentType: false,
            processData: false,
            success:function(res){
                return
            }
       })
    })

    //photo4
    $("#file-ip-4").on("change",function () {
       var fileInfo = $("#file-ip-4")[0];
       var companyId = $("#companyId").val();
       var formData=new FormData();
       
       formData.append('file',fileInfo.files[0]);
       formData.append('companyId',companyId);
       
       $.ajax({
            type:"post",
            url:"/company/chcompanyphoto4",
            data:formData,
            contentType: false,
            processData: false,
            success:function(res){
                return
            }
       })
    })

    //photo5
    $("#file-ip-5").on("change",function () {
       var fileInfo = $("#file-ip-5")[0];
       var companyId = $("#companyId").val();
       var formData=new FormData();
       
       formData.append('file',fileInfo.files[0]);
       formData.append('companyId',companyId);
       
       $.ajax({
            type:"post",
            url:"/company/chcompanyphoto5",
            data:formData,
            contentType: false,
            processData: false,
            success:function(res){
                return
            }
       })
    })
})