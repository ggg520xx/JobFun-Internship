function delJobBtn(e){
    var whichJob = {
        jobId:e
    };
    $.ajax({
        type:"post",
        url:"/company/deletejob",
        data:whichJob,
        success:function (res) {
                    Swal.fire("刪除成功","","success")
                    if(res.length == "0"){
                      var insertStr = `<div class="text_member_tips_company">
                                       <img src="img/member/tip_job.png" alt="">
                                       </div>`;
                      $("#job_page").html(insertStr)
                    }else{
                       var insertStr = "";
                    res.forEach(function(job){
                        if(job.jobStatus == "on"){
                            
                            //
                            insertStr += `
                            <div class=" services-item-box fadeInDown">
                            <div class="card-body row">
                        
                      
                            <div class="col-6 text-left" style="padding-left: 30px;">
                            <h5 class="card-title"><a href="/job?id=<%=${job.jobId}%>">${job.jobName}</a></h5>
                            <h6>${job.companyName} </h6>
                            <h6>${job.cityName} ${job.townshipName}</h6>
                          
                            <div id="switchJobStatus" data-bindJobId="${job.jobId}">
                            <h5 data-bindId="${job.jobId}" data-color="green" type="button"
                              onclick="chColor('${job.jobId}');jobStatusToDb('${job.jobId}')">狀態切換：<u
                                style="color: rgb(76, 166, 51);">目前上架中</u></h5>
                             </div>
                         
                            </div>

                            <div class="col-6" style="position: relative;">
                            <div style="position: absolute; bottom: 0px; right: 20px;">
                            <button class="btn btn-common" onclick="openEditPage('${job.jobId}')">編輯</button>
                            <button class="btn btn-common" onclick="delJobBtn('${job.jobId}')">刪除</button>
                            </div>
                            </div>

                            </div>
                            </div>
                            <br>
                          `
 

                            //
                        }else{
                            //
                            insertStr +=`
                            <div class="services-item-box fadeInDown">
                            <div class="card-body row">
                        
                      
                            <div class="col-6 text-left" style="padding-left: 30px;">
                            <h5 class="card-title"><a href="/job?id=<%=${job.jobId}%>">${job.jobName}</a></h5>
                            <h6>${job.companyName} </h6>
                            <h6>${job.cityName} ${job.townshipName}</h6>
                          
                         
                            <div id="switchJobStatus" data-bindJobId="${job.jobId}">
                            <h5 data-bindId="${job.jobId}" data-color="red" type="button"
                              onclick="chColor('${job.jobId}');jobStatusToDb('${job.jobId}')">
                              狀態切換：<u style="color: rgb(227, 82, 82);">目前下架中</u></h5>
                            </div>

                         
                            </div>

                            <div class="col-6" style="position: relative;">
                            <div style="position: absolute; bottom: 0px; right: 20px;">
                            <button class="btn btn-common" onclick="openEditPage('${job.jobId}')">編輯</button>
                            <button class="btn btn-common" onclick="delJobBtn('${job.jobId}')">刪除</button>
                            </div>
                            </div>

                            </div>
                            </div>
                            <br>`


                            //
                        }
                    })
                    $("#job_page").html(insertStr)
                    }
                   
                }
    })
}
//








 
 
 
 
 
 








//
function jobStatusToDb(jobId) {
    var jobIdToDb = {
        aJobId : jobId
    }

    $.ajax({
        type:"post",
        url:"/company/chjobstatus",
        data:jobIdToDb
    })
}

function chColor(e) {
   var color = $(`h5[data-bindId="${e}"]`).attr("data-color");
    if (color == "green") {
        $(`#switchJobStatus[data-bindJobId="${e}"]`).html(`<h5 data-bindId="${e}" data-color="red" type="button" onclick="chColor('${e}');jobStatusToDb('${e}')">
                              狀態切換：<u style="color: rgb(227, 82, 82);">目前下架中</u></h5>`)
    }else{
         $(`#switchJobStatus[data-bindJobId="${e}"]`).html(`<h5 data-bindId="${e}" data-color="green" type="button" onclick="chColor('${e}');jobStatusToDb('${e}')">
                              狀態切換：<u style="color: rgb(76, 166, 51);">目前上架中</u></h5>`)
    }
}

function openEditPage (e){
    $("#filter_click").addClass("d-none");
    $("#newAddBtn").addClass("d-none");
    var jobIdData = {
        jobId:e
    }
    $.ajax({
        type:"post",
        url:"/company/openedit",
        data:jobIdData,
        success:function(res){
            $("#editJobId").val(res[0].jobId)
            $("#editJobName").val(res[0].jobName)
            $("#editAreaText").text(res[0].cityName + res[0].townshipName)
            $("#editAreaVal").val(res[0].jobAera)
            $("#editJobAddress").val(res[0].jobAddress)
            $("#editJobClassText").text(res[0].jobClassName)
            $("#editJobClassVal").val(res[0].jobClassId)
            $("#editJobStart").val(res[0].jobStartTimeF)
            $("#editJobEnd").val(res[0].jobEndTimeF)
            $("#editJobIntro").val(res[0].jobContent)
            $("#editJobCondition").val(res[0].jobCondition)
            $("#editJobPay").val(res[0].jobPay)

            $("#edit_job").attr("hidden",false)
            $("#job_page").attr("hidden",true)
            $("#check_click").attr("style","display:none")
        }
    })
}




$(function(){

    $("#editComfirm").on("click",function(){
        var editJobId = $("#editJobId").val()
        var editJobName = $("#editJobName").val()
        var editAreaVal = $("#editAreaVal").val()
        var editJobAddress = $("#editJobAddress").val()
        var editJobClassVal = $("#editJobClassVal").val()
        var editJobStart = $("#editJobStart").val()
        var editJobEnd = $("#editJobEnd").val()
        var editJobIntro = $("#editJobIntro").val()
        var editJobCondition = $("#editJobCondition").val()
        var editJobPay = $("#editJobPay").val()

        var editArray = [editJobName,editAreaVal,editJobAddress,editJobClassVal,editJobStart,editJobEnd,editJobIntro,editJobCondition,editJobPay]
        if ( editArray.includes("")) {
            Swal.fire("請輸入完整資訊","" ,"error");
        }else{
            var editData = {
                eJobId:editJobId,
                eJobName:editJobName,
                eJobAreaVal:editAreaVal,
                eJobAddress:editJobAddress,
                eJobClassVal:editJobClassVal,
                eJobStart:editJobStart,
                eJobEnd:editJobEnd,
                eJobIntro:editJobIntro,
                eJobCondition:editJobCondition,
                eJobPay:editJobPay
            }
            console.log(editData);

            $.ajax({

                type:"post",
                url:"/company/editjob",
                data:editData,
                success:function(res){

                    //動態更換葉面
                    var insertStr = "";
                    res.forEach(function(job){
                        if(job.jobStatus == "on"){
                            
                            //
                            insertStr += `
                            <div class="services-item-box fadeInDown">
                            <div class="card-body row">
                        
                      
                            <div class="col-6 text-left" style="padding-left: 30px;">
                            <h5 class="card-title"><a href="/job?id=<%=${job.jobId}%>">${job.jobName}</a></h5>
                            <h6>${job.companyName} </h6>
                            <h6>${job.cityName} ${job.townshipName}</h6>
                          
                            <div id="switchJobStatus" data-bindJobId="${job.jobId}">
                            <h5 data-bindId="${job.jobId}" data-color="green" type="button"
                              onclick="chColor('${job.jobId}');jobStatusToDb('${job.jobId}')">狀態切換：<u
                                style="color: rgb(76, 166, 51);">目前上架中</u></h5>
                            </div>
                         
                            </div>

                            <div class="col-6" style="position: relative;">
                            <div style="position: absolute; bottom: 0px; right: 20px;">
                            <button class="btn btn-common" onclick="openEditPage('${job.jobId}')">編輯</button>
                            <button class="btn btn-common" onclick="delJobBtn('${job.jobId}')">刪除</button>
                            </div>
                            </div>

                            </div>
                            </div>
                            <br>`

                            //
                        }else{
                            //
                            insertStr +=`
                            <div class="services-item-box fadeInDown">
                            <div class="card-body row">
                        
                      
                            <div class="col-6 text-left" style="padding-left: 30px;">
                            <h5 class="card-title"><a href="/job?id=<%=${job.jobId}%>">${job.jobName}</a></h5>
                            <h6>${job.companyName} </h6>
                            <h6>${job.cityName} ${job.townshipName}</h6>
                          
                         
                            <div id="switchJobStatus" data-bindJobId="${job.jobId}">
                            <h5 data-bindId="${job.jobId}" data-color="red" type="button"
                              onclick="chColor('${job.jobId}');jobStatusToDb('${job.jobId}')">
                              狀態切換：<u style="color: rgb(227, 82, 82);">目前下架中</u></h5>
                            </div>

                         
                            </div>

                            <div class="col-6" style="position: relative;">
                            <div style="position: absolute; bottom: 0px; right: 20px;">
                            <button class="btn btn-common" onclick="openEditPage('${job.jobId}')">編輯</button>
                            <button class="btn btn-common" onclick="delJobBtn('${job.jobId}')">刪除</button>
                            </div>
                            </div>

                            </div>
                            </div>
                            <br>`



                            //
                        }
                    })
                    $("#job_page").html(insertStr)

                    //

                    Swal.fire("職缺修改成功","","success")
                    $("#edit_job").attr("hidden",true)
                    $("#job_page").attr("hidden",false)
                    $("#filter_click").removeClass("d-none");
                    $("#newAddBtn").removeClass("d-none");
                    window.scrollTo(0,0);
                }
            })

        }
    })

    $("#filter_click").on("change",function(){
      var selectVal = $("#filter_click").val();
      console.log(selectVal);
      var selectData = {
        statusData : selectVal
      }
      $.ajax({
        type:"post",
        url:"/company/selectstatus",
        data:selectData,
        success:function(res){

                    if(res.length == "0"){
                      var insertStr = `<div class="text_member_tips_company">
                                      <img src="img/member/tip_job.png" alt="">
                                      </div>`;
                      $("#job_page").html(insertStr)
                    }else{
                      //動態更換葉面
                      var insertStr = "";
                      res.forEach(function(job){
                          if(job.jobStatus == "on"){
                              
                              //
                              insertStr += `
                              <div class="services-item-box fadeInDown">
                              <div class="card-body row">
                          
                        
                              <div class="col-6 text-left" style="padding-left: 30px;">
                              <h5 class="card-title"><a href="/job?id=<%=${job.jobId}%>">${job.jobName}</a></h5>
                              <h6>${job.companyName} </h6>
                              <h6>${job.cityName} ${job.townshipName}</h6>
                            
                              <div id="switchJobStatus" data-bindJobId="${job.jobId}">
                              <h5 data-bindId="${job.jobId}" data-color="green" type="button"
                                onclick="chColor('${job.jobId}');jobStatusToDb('${job.jobId}')">狀態切換：<u
                                  style="color: rgb(76, 166, 51);">目前上架中</u></h5>
                              </div>
                          
                              </div>

                              <div class="col-6" style="position: relative;">
                              <div style="position: absolute; bottom: 0px; right: 20px;">
                              <button class="btn btn-common" onclick="openEditPage('${job.jobId}')">編輯</button>
                              <button class="btn btn-common" onclick="delJobBtn('${job.jobId}')">刪除</button>
                              </div>
                              </div>

                              </div>
                              </div>
                              <br>`

                              //
                          }else{
                              //
                              insertStr +=`
                              <div class="services-item-box fadeInDown">
                              <div class="card-body row">
                          
                        
                              <div class="col-6 text-left" style="padding-left: 30px;">
                              <h5 class="card-title"><a href="/job?id=<%=${job.jobId}%>">${job.jobName}</a></h5>
                              <h6>${job.companyName} </h6>
                              <h6>${job.cityName} ${job.townshipName}</h6>
                            
                          
                              <div id="switchJobStatus" data-bindJobId="${job.jobId}">
                              <h5 data-bindId="${job.jobId}" data-color="red" type="button"
                                onclick="chColor('${job.jobId}');jobStatusToDb('${job.jobId}')">
                                狀態切換：<u style="color: rgb(227, 82, 82);">目前下架中</u></h5>
                              </div>

                          
                              </div>

                              <div class="col-6" style="position: relative;">
                              <div style="position: absolute; bottom: 0px; right: 20px;">
                              <button class="btn btn-common" onclick="openEditPage('${job.jobId}')">編輯</button>
                              <button class="btn btn-common" onclick="delJobBtn('${job.jobId}')">刪除</button>
                              </div>
                              </div>

                              </div>
                              </div>
                              <br>`



                              //
                          }
                      })
                      $("#job_page").html(insertStr)

                      //
                    }
                    
        }
      })
    })

    $("#check_back_edit").on("click",function(){
      $("#edit_job").attr("hidden",true)
      $("#job_page").attr("hidden",false)
      $("#filter_click").removeClass("d-none");
      $("#newAddBtn").removeClass("d-none");
      window.scrollTo(0,0);
  })


})