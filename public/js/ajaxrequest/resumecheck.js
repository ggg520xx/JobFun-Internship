function checkResune(e) {
    var whichApply = {
        applyId:e
    }
    
    $.ajax({
        type:"post",
        url:"/company/checkapplyresume",
        data:whichApply,
        success:function(res){
            if(res[0].companyReply == "notviewed"){
                $("#replyStatus").text("尚未回覆")
            }else if(res[0].companyReply == "invite"){
                $("#replyStatus").text("已發送面試邀請")
            }else{
                $("#replyStatus").text("已婉拒")
            }
            $("#getApplyId").val(res[0].jobAppyId)
            $("#applicantName").text(res[0].memberName)
            $("#applicantAge").text(res[0].age)
            $("#applicantPhone").text(res[0].resumePhone)
            $("#applicantGender").text(res[0].memberGender)
            $("#applicantEmail").text(res[0].resumeEmail)
            $("#applicantSchool").text(res[0].schoolName)
            $("#applicantMajorName").text(res[0].majorName)
            
            $("#studentCardOpen > img").remove();
            
            var stCardimg = `<img src="img/studentcard/${res[0].studentCardFront}" alt="" id="stcard">`
            $("#studentCardOpen").html(stCardimg);
            
            
            $("#modalImg > img").remove();
            var stCardModal = `  <img src="img/studentcard/${res[0].studentCardFront}" alt="" id="stcardFront" class="imgSize">
                                 <img src="img/studentcard/${res[0].studentCardBack}" alt="" id="stcardBack" class="imgSize">`;
            $("#modalImg").html(stCardModal);

            $("#pdfBox > iframe").remove();
            var previewPdf = `<iframe src="/resumepdf/${res[0].resumeFile}" width="100%" height="100%" style="height: 75vh;" id="viewPdf"></iframe>`
            $("#pdfBox").html(previewPdf);
        } 
    })
}


 $(function(){
     $("#rejectBtn").on("click",function(){
         Swal.fire({
                title: '婉拒',
                text: '發送遺珠訊息',
                icon: 'warning',
                input: 'textarea',
                // inputAttributes: {
                //   autocapitalize: 'off'
                // },
                showCancelButton: true,
                showLoaderOnConfirm: true,

                confirmButtonText: "發送訊息",
                cancelButtonText: "取消發送",
                animation: true,
                animation: "slide-from-top",
                inputPlaceholder: "告知對方您的考量",
                reverseButtons: true,

              }).then(function (result) {
                if (result.value) {
                  var dataSend = {
                      jobAppyId:$("#getApplyId").val(),
                      rejectMsg:result.value
                  }
                  
                  $.ajax({
                      type:"post",
                      url:"/company/rejectapply",
                      data:dataSend,
                      success:function(res){
                        if(res[0].companyReply == "reject"){
                         $("#replyStatus").text("已婉拒")
                        }
                        Swal.fire("成功", "已回覆對方：<br>" + result.value, "success");
                        
                      }
                  })
                }
                else {
                  Swal.fire("無效", "此操作取消", "error");
                }
              });

     })
     
     $("#inviteBtn").on("click",function(){
         Swal.fire({
                title: '確認',
                text: '發送詳細訊息',
                icon: 'info',
                input: 'textarea',
                // inputAttributes: {
                //   autocapitalize: 'off'
                // },
                showCancelButton: true,
                showLoaderOnConfirm: true,

                confirmButtonText: "發送訊息",
                cancelButtonText: "取消發送",
                animation: true,
                animation: "slide-from-top",
                inputPlaceholder: "告知對方您的答覆",
                reverseButtons: true,

              }).then(function (result) {


                if (result.value) {
                   var dataSend = {
                      jobAppyId:$("#getApplyId").val(),
                      inviteMsg:result.value
                  }
                  
                  $.ajax({
                      type:"post",
                      url:"/company/inviteapply",
                      data:dataSend,
                      success:function(res){
                        if(res[0].companyReply == "invite"){
                            $("#replyStatus").text("已發送面試邀請")
                        }
                        Swal.fire("成功", "已回覆對方：<br>" + result.value, "success");
                      
                      }
                  })
                }
                else {
                  Swal.fire("無效", "此操作取消", "error");
                }
              });
     })


 })