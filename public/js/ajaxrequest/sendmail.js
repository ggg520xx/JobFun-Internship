$(function () {
    $("#submitEmail").on("click",function () {
        var name = $("#nameEmail").val();      
        var mail = $("#accountEmail").val(); 
        var phone = $("#phoneEmail").val(); 
        var msg = $("#messageEmail").val();

        var mailData = {
            userName:name,
            userEmail:mail,
            userphone:phone,
            userMsg:msg
        }

        

        $.ajax({
            type:"post",
            url:"/index/replymail",
            data:mailData
        })
        swal("已收到你的回饋","","success")
    })
})