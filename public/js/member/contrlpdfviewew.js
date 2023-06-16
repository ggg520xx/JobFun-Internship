$(function () {
    $("#addResumePdf").on("change",function () {
        var fileInfo = $("#addResumePdf")[0];
        var reader= new window.FileReader() ;
        var file = fileInfo.files[0]
        $("#previewAddresumeBtn").removeClass("d-none");
        
        var url = window.URL.createObjectURL(file);
        $("#paPdfBox > iframe").remove();
        var previewPdf = `<iframe src="${url}" width="100%" height="100%" style="height: 75vh;" id="previewAddPdf"></iframe>`;				
        $("#paPdfBox").html(previewPdf);
				
        // reader.readAsDataURL(file);
        // reader.onloadend = function(e){
				// var src = e.target.result;
        // var src2 = src.replace(/=+$/,'');
        // $("#paPdfBox > iframe").remove();
        // var previewPdf = `<iframe src="${src2}" width="100%" height="100%" style="height: 75vh;" id="previewAddPdf"></iframe>`;				
        // $("#paPdfBox").html(previewPdf);
				
		    // }
       
    })
})