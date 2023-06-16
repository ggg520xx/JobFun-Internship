$(function () {
    $(window).keydown(function (event) {
        
        if (event.which == "49") {
            $("#sAccount").val("zxcv123");
            $("#sPassword").val("123456");
            $("#sPasswordComfirm").val("123456");
            $("#sName").val("JasonChen");
            $("#sEmail").val("json1@gxmail.com");
            $("#sPhone").val("0912789547");
            $("#sPhone").val("0912789547");
            $("#sBirthday").val("1995-10-13");
            $("#sGender").val("男");
            $("#majorName").val("資訊工程學系");
            $("#selectShool").text("國立台灣大學");
            $("#schoolSelected").val("1")
            $("#selectMajorClass").text("資訊");
            $("#majorClassSelected").val("1")
        }

        if (event.which == "50") {
            $("#cAccount").val("aaa123");
            $("#cPassword").val("1234");
            $("#cPasswordComfirm").val("1234");
            $("#cName").val("NVNC Product Inc.");
            $("#cEmail").val("nvos@gnmail.com");
            $("#cPhone").val("06-3154778");
            
        }

        if (event.which == "192") {
            $("#addressIntro").val("台北市中正區大埔街36號");
            $("#companyIntro").val("專注於企業IT軟硬體設備代理業務將近四十年，\n多年來零壹以專業的能力、熱情的態度、服務的精神，結合專業與服務，\n並力行實踐，與合作夥伴達到雙贏的目標；\n創造與客戶共生互利的價值，讓原廠、經銷夥伴，以及終端客戶，\n都能透過零壹提供的解決方案獲得最大價值與商機。");
        }

        if (event.which == "187") {
            $("#addJobName").val("實習前端工程師");
            $("#addJobAdress").val("台北市中正區大埔街36號");
            $("#addJobAdress").val("台北市中正區大埔街36號");
            $("#addjobStartTime").val("2021-01-01");
            $("#addJobEndTime").val("2021-02-28");
            $("#addjobIntro").val(`【工作內容】\n• 資訊相關科系 大三大四生或剛畢業者尤佳\n• 熟悉javascript, Git版控尤佳\n`);
            $("#addJobCondition").val(`【相關條件】\n- 科系要求：資訊工程相關\n- 語文條件：不拘\n- 擅長工具：JavaScript、jQuery、CSS、Node.js、D3.js\n- 工作技能：資料庫程式設計`);
            $("#addJobPay").val(`●實習福利制度：\n1.訓練計畫：我們不只提供實習，更給予專業培訓，若無快速學習能力、學習熱誠者，請審慎申請\n2.獎助學金：工作態度及格者，將提供獎助學金五千元，非台中人另提供住宿或交通津貼(最高五千)，表現優秀者可申請留任獎助學金兩萬元。`);
        }
    })
})