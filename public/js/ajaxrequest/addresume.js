$(function () {
    $("#check_click").on("click",function(){
        $("#hide_page").attr("hidden",true);
        $('#show_here').attr('hidden',false);
        $("#check_click").addClass("d-none");
    })
    
    $("#addResumeComfirm").on("click",function () {
        var addResumeName = $("#addResumeName").val();
        var addResumeEmail = $("#addResumeEmail").val();
        var addResumePhone = $("#addResumePhone").val();
        var addResumeSkill = $("#addResumeSkill").val();
        var addResumePdf = $("#addResumePdf").val();
        
        var addResumeList = [addResumeName,addResumeEmail,addResumePhone,addResumeSkill,addResumePdf]
       
       
        
        if (addResumeList.includes("")) {
            swal("請輸入完整資訊","" ,"error")
        }else{
            var fileInfo = $("#addResumePdf")[0];
            var formData=new FormData();
            console.log(fileInfo );
            var memberId = $("#memberInfoId").val();
            
            formData.append('file',fileInfo.files[0]);
            formData.append('stMemberId',memberId);
            formData.append('stResumeEmail',addResumeEmail);
            formData.append('stResumePhone',addResumePhone);
            formData.append('stResumeName',addResumeName);
            formData.append('stResumeSkill',addResumeSkill);
           
            $.ajax({
                type:"post",
                url:"/member/addresume",
                data:formData,
                contentType: false,
                processData: false,
                success:function(res){
                    if(res){
                        swal("新增履歷成功","","success");
                        
                        $("#addResumeName").val("");
                        $("#addResumeSkill").val("");
                        $("#addResumePdf").val("");
                        $("#check_click").removeClass("d-none");
                        $('#show_here').attr('hidden',true);
                        $('#hide_page').attr('hidden',false);
                        

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
                    }
                }

            })
        }
    })
   
})

$(function(){
    $("#add_back").on("click",function(){
        window.scrollTo(0,0);
        $("#check_click").removeClass("d-none");
        $('#show_here').attr('hidden',true);
        $('#hide_page').attr('hidden',false);
                        
    })
})