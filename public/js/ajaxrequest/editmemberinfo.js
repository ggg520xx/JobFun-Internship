$(function () {
    $("#editCom").on("click",function () {
        var ePassword = $("#editPassword").val();
        var ePasswordCom = $("#editPasswordCom").val();
        var eEmail = $("#editEmail").val();
        var ePhone = $("#editPhone").val();
        var eMemberId =  $("#editMemberId").val();

        var editArray = [ePassword,ePasswordCom,eEmail,ePhone]
        if (editArray.includes("")) {
            swal("請輸入完整資訊","","error")
        }else{
            if(ePassword != ePasswordCom){
                swal("確認密碼不符","","error")
            }else{
                var editData = {
                    editPassword:ePassword,
                    editEmail:eEmail,
                    editPhone:ePhone,
                    editMemberId:eMemberId
                }

                $.ajax({
                    type:"post",
                    url:"/member/editinfo",
                    data:editData,
                    success:function(){
                        swal("帳號修改成功","","success")
                    }
                })
            }
        }
    })
})