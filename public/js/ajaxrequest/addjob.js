$(function(){

    $("#newAddBtn").on("click",function(){
        $("#filter_click").addClass("d-none");
        $("#newAddBtn").addClass("d-none");
        $("#show_create_job").prop("hidden",false);
        $("#job_page").prop("hidden",true);

    })

    $("#submitAddJob").on("click",function () {
        var jobName = $("#addJobName").val();
        var jobArea = $("#addAreaVal").val();
        var jobAddress = $("#addJobAdress").val();
        var jobClass = $("#addJobClassVal").val();
        var jobStartTime = $("#addjobStartTime").val();
        var jobEndTime = $("#addJobEndTime").val();
        var jobIntro = $("#addjobIntro").val();
        var jobCondition = $("#addJobCondition").val();
        var jobPay = $("#addJobPay").val();
        var companyIdInfo = $("#companyId").val();

        var dataArray = [jobName,jobArea,jobAddress,jobClass,jobStartTime,jobEndTime,jobIntro,jobCondition,jobPay];
       if(dataArray.includes("")){
           Swal.fire("請輸入完整資訊","","error")
       }else{
           var addJobData = {
               addJobName:jobName,
               addJobArea:jobArea,
               addJobAddress:jobAddress,
               addJobClass:jobClass,
               addJobStartTime:jobStartTime,
               addJobEndTime:jobEndTime,
               addJobIntro:jobIntro,
               addJobCondition:jobCondition,
               addJobPay:jobPay,
               companyId:companyIdInfo 
           }
           
           $.ajax({
               type:'post',
               url:'/company/addjob',
               data:addJobData,
               success:function(res){
                   //動態更換頁面
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
                   $("#addJobName").val("");
                   $("#addAreaVal").val("");
                   $("#addJobAdress").val("");
                   $("#addJobClassVal").val("");
                   $("#addjobStartTime").val("");
                   $("#addJobEndTime").val("");
                   $("#addjobIntro").val("");
                   $("#addJobCondition").val("");
                   $("#addJobPay").val("");
                   $("#addAreaText").text("")
                   $("#addJobClassText").text("")
                  

                   Swal.fire("新增成功","","success")
                   $("#show_create_job").prop("hidden",true)
                   $("#job_page").prop("hidden",false)
                   $("#filter_click").removeClass("d-none");
                   $("#newAddBtn").removeClass("d-none");
                   window.scrollTo(0,0);
               }
               
           })
       }
    })

  $("#check_back_add").on("click",function(){
      $("#show_create_job").prop("hidden",true)
      $("#job_page").prop("hidden",false)
      $("#filter_click").removeClass("d-none");
      $("#newAddBtn").removeClass("d-none");
      window.scrollTo(0,0);
  })


})