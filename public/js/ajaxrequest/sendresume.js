$(function () {
    $("#companyReject").on("click",function () {
        Swal.fire("學生才能應徵喔!!","","warning")
    })  
    
    $("#sendResune").on("click",function () {
        var sJobId = $("#jobId").val();
        var sMemberId = $("#memberId").val();
        var choseResume = $("input[name=whichResune]:checked").val();
        var msgForCompanyText = $("#msgForCompany").val();
        var userCharacter = $("#userCharacter").val();
        
        
        if (choseResume) {
            var applyData = {
                jobId:sJobId,
                memberId:sMemberId,
                resumId:choseResume,
                msgForCompany:msgForCompanyText
            }

            $.ajax({
                type:"post",
                url:"/job/applyjob",
                data:applyData,
                success:function(res){
                    console.log(res);
                    if(res.resError =="applied"){
                        Swal.fire("你已經投遞過","","error")
                    }else{
                        Swal.fire("履歷投遞成功","","success")
                    }
                }
            })
        }else{
            Swal.fire("請選擇履歷","","warning")
        }

        
    
    })

})