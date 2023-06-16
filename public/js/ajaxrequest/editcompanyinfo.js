$(function () {
   $("#companyIntroBtn").on("click",function () {
       console.log($("#companyIntro").val(),);
       var introData = {
           aera:$("#aeraIntroVal").val(),
           address:$("#addressIntro").val(),
           intro:$("#companyIntro").val(),
           companyId:$("#companyId").val()
       }  

       $.ajax({
           type:"post",
           url:"/company/intro",
           data:introData,
           success:function(res){
               Swal.fire("廠商介紹修改成功","","success")
           }
       })
   })

    //修改帳號資料
   $("#editAccountCom").on("click",function(){
       var ePassword = $("#editPasswordInfo").val();
       var ePasswordCom = $("#editPasswordComInfo").val();
       var eEmail = $("#editEmailInfo").val();
       var ePhone = $("#editPhoneInfo").val();
       var eCompanyId = $("#companyId").val();

       var editArray = [ePassword,ePasswordCom,eEmail,eCompanyId]
        if (editArray.includes("")) {
            swal("請輸入完整資訊","","error")
        }else{
            if(ePassword != ePasswordCom){
                Swal.fire("確認密碼不符","","error")
            }else{
                var editData = {
                    editPassword:ePassword,
                    editEmail:eEmail,
                    editPhone:ePhone,
                    editMemberId:eCompanyId
                }

                $.ajax({
                    type:"post",
                    url:"/company/editaccount",
                    data:editData,
                    success:function(){
                        Swal.fire("帳號修改成功","","success")
                    }
                })
            }
        }
   })
})