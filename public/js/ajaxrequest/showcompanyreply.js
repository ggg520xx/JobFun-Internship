function showMsg(e) {
    console.log(e);
    var applyData = {
        jobApplyId:e,
        memberId:$("#memberInfoId").val()
    }

    $.ajax({
        type:"post",
        url:"/member/companyreply",
        data:applyData,
        success:function(res){
           
           $("#replyJobName").text(res[0].jobName)
           $("#replyCompanyName").text(res[0].companyName)
           if(res[0].companyReplyMsg){
               var replyMsg = res[0].companyReplyMsg.replace(/(\r\n)|(\n)/g,'<br>');
               $("#companyReplyMsg").html(replyMsg)
           }else{
               $("#companyReplyMsg").html("")
           }
            
        
           if(res[0].companyReply == "notviewed"){
               $("#replyStatus").text("尚未回覆")
           }else if(res[0].companyReply == "invite"){
               $("#replyStatus").text("已邀請面試")
           }else{
               $("#replyStatus").text("已婉拒")
           }
        }
    })
}