$(function () {
    
    
    //student
    $("#stSignInBtn").on("click",function () {
        if(!$("#stUserName").val() || !$("#stUserPassword").val()){
            swal("請輸入完整帳號密碼","" ,"error")
           
        }else{
            var accountData = {
                sUserName:$("#stUserName").val(),
                sUserPassword:$("#stUserPassword").val()
            }
            $.ajax({
                    type:'post',
                    url:'/signinstudent',
                    data: accountData,
                    success:function(res){
                        if(res.length == 0){
                            $("#stUserName").val("")
                            $("#stUserPassword").val("")
                            swal("帳號或密碼錯誤","","error")
                        }
                        else{
                            window.location.replace("/member")
                         }   
                    },
                });
        }
    });


    //company

    $("#cSignInBtn").on("click",function () {
        if(!$("#cUserName").val() || !$("#cUserPassword").val()){
            swal("請輸入完整帳號密碼","" ,"error")
        }else{
            var accountData = {
                cUserName:$("#cUserName").val(),
                cUserPassword:$("#cUserPassword").val()
            }
            $.ajax({
                    type:'post',
                    url:'/signincompany',
                    data: accountData,
                    success:function(res){
                        if(res.length == 0){
                            $("#cUserName").val("")
                            $("#cUserPassword").val("")
                            swal("帳號或密碼錯誤","","error")
                        }
                        else{
                            window.location.replace("/company")
                         }   
                    },
                });
        }
    });
})