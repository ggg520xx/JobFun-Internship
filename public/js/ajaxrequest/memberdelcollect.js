function delCollect(e) {
    var delWhichCollect = {
        collectId : e
    }
    $.ajax({
        type:"post",
        url:"/member/delcollect",
        data:delWhichCollect,
        success:function(res){
            if(res.length == "0"){
                swal("取消收藏成功","","success")
                var insertStr = `<div class="col-1"></div>
                                 <div class="text_member_tips col-10 text-center">
                                 <img src="img/member/nocollect.png" alt="">
                                 </div>
                                 <div class="col-1"></div>`
                $("#collectList").html(insertStr)
            }else{
                swal("取消收藏成功","","success")
                var insertStr = "";
                res.forEach(function(collect){
                    insertStr +=` 
                    <div class="col-1"></div>
                    <div class="services-item fadeInDown col-3 mb-4" style="padding: 20px;">
                    <a href="/job?id=${collect.jobId}">
                    <h5 class="collectlink">${collect.jobName}</h5>
                    </a>
                    <br>
                    <h6>${collect.companyName}</h6>
                    <br>
                    <h6>${collect.cityName}${collect.townshipName}</h6>
                    <br>
                    <div class="input-group mb-3 group-end">
                    <a class="filter btn btn-common" style="margin: auto;" onclick="delCollect('${collect.collcetId}')">刪除</a>
                    </div>
                    </div>
                    `
                })
                $("#collectList").html(insertStr)
            }
        }
        
    })
}


