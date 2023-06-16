
editResume = function (e) {
   
    var whichResume = {
        resume:e
    };
    $.ajax({
        type:"post",
        url:"/member/editresume",
        data: whichResume,
        success:function(res){
            
            $("#editResumeId").val(res[0].resumeId);
            $("#editResumeName").val(res[0].resumeName);
            $("#editResumePhone").val(res[0].resumePhone);
            $("#editResumeEmail").val(res[0].resumeEmail);
            $("#editResumeSkill").val(res[0].resumeSkill);
            $("#edit_resume").attr("hidden",false);
            $("#hide_page").attr("hidden",true);
            $("#check_click").addClass("d-none");
            
            $("#pePdfBox > iframe").remove();
            var previewPdf = `<iframe src="/resumepdf/${res[0].resumeFile}" width="100%" height="100%" style="height: 75vh;" id="previewEditPdf"></iframe>`
            $("#pePdfBox").html(previewPdf);
        }
    })
};




delResume = function (e) {

    var whichResume = {
        resumeId:e
    };
    swal({
        title: "確定刪除?",  
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            $.ajax({
                type:"post",
                url:"/member/delresume",
                data:whichResume,
                success:function(res){
                    if(res){
                        if (res.length == "0"){
                             swal("刪除成功","","success")
                            var insertStr = `<div class="text_member_tips">
                            <img src="img/member/tip_resume.png" alt="">
                            </div>`;
                            $("#resumeCard").html(insertStr)
                        }else{
                        swal("刪除成功","","success")
                        var insertStr = "";
                             res.forEach(function(resume){
                                 insertStr += `
                                    <div class=" services-item-box fadeInDown">
                                    <div class="card-body row ">
                                    <div class="col-6 outercard">
                                    ${resume.resumeName}
                                    </div>

                                    <div class="col-6">
                                    <div style="float: right;">
                                    <button class="btn btn-common" onclick="editResume('${resume.resumeId}')"
                                    id="edit_click">編輯</button>
                                    <button class="btn btn-common" onclick="delResume('${resume.resumeId}')"
                                    id="delResumebtn">刪除</button>
                                    </div>
                                    </div>

                                    </div>
                                    </div>
                                    <br>
                                    `
                                })

                             $("#resumeCard").html(insertStr)
                        }   
                    }
                }
            })
        } 
    });
}


$(function(){

    $("#check_back").on("click",function(){
        $("#check_click").removeClass("d-none");
        window.scrollTo(0,0);
    })

    //input選擇檔案後預覽
    $("#editResumePdf").on("change",function () {
        var fileInfo = $("#editResumePdf")[0];
        var reader= new window.FileReader() ;
        var file = fileInfo.files[0]
        
         var url = window.URL.createObjectURL(file);
        $("#pePdfBox > iframe").remove();
        var previewPdf = `<iframe src="${url}" width="100%" height="100%" style="height: 75vh;" id="previewEditPdf"></iframe>`;				
        $("#pePdfBox").html(previewPdf);
        
        // reader.readAsDataURL(file);
        // reader.onloadend = function(e){
		// var src = e.target.result;
        // var src2 = src.replace(/=+$/,'');
        // $("#pePdfBox > iframe").remove();
        // var previewPdf = `<iframe src="${src2}" width="100%" height="100%" style="height: 75vh;" id="previewEditPdf"></iframe>`;				
        // $("#pePdfBox").html(previewPdf);
				
		// }
       
    })

    $("#comfirmEdit").on("click",function(){
        var editResumeId = $("#editResumeId").val();
        var editResumeName = $("#editResumeName").val();
        var editResumeEmail = $("#editResumeEmail").val();
        var editResumePhone = $("#editResumePhone").val();
        var editResumeSkill = $("#editResumeSkill").val();
        var editResumePdf = $("#editResumePdf").val();

        var editList = [editResumeName,editResumeEmail,editResumePhone,editResumeSkill]
        if (editList.includes("")) {
            swal("請輸入完整資訊","" ,"error")
        }else{
            if(editResumePdf){
            var fileInfo = $("#editResumePdf")[0];
            var formData=new FormData();
            var memberId = $("#memberInfoId").val();
            
            formData.append('file',fileInfo.files[0]);
            formData.append('stResumeId',editResumeId);
            formData.append('stMemberId',memberId);
            formData.append('stResumeEmail',editResumeEmail);
            formData.append('stResumePhone',editResumePhone);
            formData.append('stResumeName',editResumeName);
            formData.append('stResumeSkill',editResumeSkill);
            
            $.ajax({
                type:"post",
                url:"/member/editresumehavepdf",
                data:formData,                
                contentType: false,
                processData: false,
                success:function(res){
                    swal("履歷修改成功","","success").then(function(){
                              
                              $("#check_click").removeClass("d-none");
                              $("#edit_resume").attr("hidden",true);
                              $("#hide_page").attr("hidden",false);
                             
                             var insertStr = "";
                             res.forEach(function(resume){
                                 insertStr += `
                                    <div class=" services-item-box fadeInDown">
                                    <div class="card-body row ">
                                    <div class="col-6 outercard">
                                    ${resume.resumeName}
                                    </div>

                                    <div class="col-6">
                                    <div style="float: right;">
                                    <button class="btn btn-common" onclick="editResume('${resume.resumeId}')"
                                    id="edit_click">編輯</button>
                                    <button class="btn btn-common" onclick="delResume('${resume.resumeId}')"
                                    id="delResumebtn">刪除</button>
                                    </div>
                                    </div>

                                    </div>
                                    </div>
                                    <br>
                                    `
                             })

                             $("#resumeCard").html(insertStr)
                     
                              window.scrollTo(0,0);
                            })
                }
            })
           
            }else{
                
                var editData = {

                    resumeId:editResumeId, 
                    resumeName:editResumeName,
                    resumeEmail:editResumeEmail,
                    resumePhone:editResumePhone,
                    resumeSkill:editResumeSkill
                };

                //ajaxstart
                
                $.ajax({
                    type:"post",
                    url:"/member/editresumenopdf",
                    data:editData,
                    success:function(res){
                        if(res){
                            swal("履歷修改成功","","success").then(function(){
                              
                              $("#check_click").removeClass("d-none");
                              $("#edit_resume").attr("hidden",true);
                              $("#hide_page").attr("hidden",false);
                             
                             var insertStr = "";
                             res.forEach(function(resume){
                                 insertStr += `
                                    <div class=" services-item-box fadeInDown">
                                    <div class="card-body row ">
                                    <div class="col-6 outercard">
                                    ${resume.resumeName}
                                    </div>

                                    <div class="col-6">
                                    <div style="float: right;">
                                    <button class="btn btn-common" onclick="editResume('${resume.resumeId}')"
                                    id="edit_click">編輯</button>
                                    <button class="btn btn-common" onclick="delResume('${resume.resumeId}')"
                                    id="delResumebtn">刪除</button>
                                    </div>
                                    </div>

                                    </div>
                                    </div>
                                    <br>
                                    `
                             })

                             $("#resumeCard").html(insertStr)
                     
                              window.scrollTo(0,0);
                            })
                        }
                    }
                })
                
            
                //ajaxEnd
            }
        }
    })


    $("#edit_back").on("click",function(){
        window.scrollTo(0,0);
        $("#check_click").removeClass("d-none");
        $('#edit_resume').attr('hidden',true);
        $('#hide_page').attr('hidden',false);                 
    })

})


