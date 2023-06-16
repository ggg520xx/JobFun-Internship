$(function () {
    //student signup
    $("#sSignUpConfirm").on("click",function () {
        var sAccount = $("#sAccount").val();
        var sPassword = $("#sPassword").val();
        var sPasswordComfirm = $("#sPasswordComfirm").val();
        var sName = $("#sName").val();
        var sEmail = $("#sEmail").val();
        var sPhone = $("#sPhone").val();
        var schoolSelected = $("#schoolSelected").val();
        var majorClassSelected = $("#majorClassSelected").val();
        var majorName = $("#majorName").val();
        var cardFront = $("#cardFront").val();
        var cardBack = $("#cardBack").val();
        var sGender = $("#sGender").val();
        var sBirthday = $("#sBirthday").val();

        var checkArray = [sAccount,sPassword,sPasswordComfirm,sName,sEmail,sPhone,schoolSelected,majorClassSelected,majorName,cardFront,cardBack,sGender,sBirthday ]
        
        if(checkArray.includes("")){
            swal("請輸入完整資訊","" ,"error")
        }else if(sPassword != sPasswordComfirm){
            swal("確認密碼不同","","error")
        }else{
        var cardFrontFile = $("#cardFront")[0]
        var cardBackFile = $("#cardBack")[0]
        var formData=new FormData();
        console.log(cardFrontFile.files[0]);
        console.log(cardBackFile.files[0]);
        formData.append('file',cardFrontFile.files[0]);
        formData.append('file',cardBackFile.files[0]);
        
        formData.append("stAccount",sAccount)
        formData.append("stPassword",sPassword)
        formData.append("stName",sName)
        formData.append("stEmail",sEmail)
        formData.append("stPhone",sPhone)
        formData.append("stSchool",schoolSelected)
        formData.append("stMajorClass",majorClassSelected)
        formData.append("stMajorName",majorName)
        formData.append("stGender",sGender)
        formData.append("stBirthday",sBirthday)


        $.ajax({
            type:"post",
            url:"/signupstudent",
            data:formData,
            contentType: false,
            processData: false,
            success:function(res){
                if (res.signupResult ===  "same") {
                        $("#sAccount").val("")
                        swal("帳號已被註冊","","error")
                    }else{
                        swal({
                            icon:'success',
                            title:'註冊成功',
                            text:'請重新登入',
                            allowOutsideClick: false
                        }).then(function(){
                             window.location.replace("/signinstudent")
                        })

                    }
            }
        })
        }
});


    //company signup
    $("#cSignUpConfirm").on("click",function () {
        var cAccount = $("#cAccount").val();
        var cPassword = $("#cPassword").val();
        var cPasswordComfirm = $("#cPasswordComfirm").val();
        var cName = $("#cName").val();
        var cEmail = $("#cEmail").val();
        var cPhone = $("#cPhone").val();
        
        var checkArray = [cAccount,cPassword,cPasswordComfirm,cName,cEmail,cPhone]
        
        if(checkArray.includes("")){
            swal("請輸入完整資訊","" ,"error")
        }else if(cPassword != cPasswordComfirm){
            swal("確認密碼不同","","error");
            $("#cPassword").val("");
            $("#cPasswordComfirm").val("");
        }else{
            var accountData = {
                cpAccount:cAccount,
                cpPassword:cPassword,
                cpName:cName,
                cpEmail :cEmail ,
                cpPhone:cPhone
            }

            $.ajax({
                type:"post",
                url:"/signupcompany",
                data:accountData,
                success:function(res){
                    if (res.signupResult ===  "same") {
                        $("#cAccount").val("")
                        swal("帳號已被註冊","","error")
                    }
                    if(res.signupResult ===  "success") {
                        swal("註冊成功","請重新登入","success").then(function(){
                             window.location.replace("/signincompany")
                        })
                    }
                }

            })

        }
    })
    
})