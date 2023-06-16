$(function () {
    $("#signNext").on("click",function(){
        $("#signFirstPart").toggleClass("displaySet");
        $("#signSecondPart").toggleClass("displaySet");
    })
    $("#signPrevious").on("click",function(){
        $("#signFirstPart").toggleClass("displaySet");
        $("#signSecondPart").toggleClass("displaySet");
    })

    
    $("#schoolComfirmBtn").on("click",function () {
        let selectedText = $('input[name="schoolSelected"]:radio:checked').val();
        let selectedVal = $('input[name="schoolSelected"]:radio:checked').attr("data-schoolValue");
        if(selectedText != ""){
            $("#selectShool").text(selectedText);
            $("#schoolSelected").val(selectedVal);
            
        }else{
            $("#selectShool").text("學校");
            $("#schoolSelected").val("");
        };
    });

    $("#majorClassComfirmBtn").on("click",function () {
        let selectedText = $('input[name="majorClass"]:radio:checked').val();
        let selectedVal = $('input[name="majorClass"]:radio:checked').attr("data-majorClassValue");

        if(selectedText != ""){
            $("#selectMajorClass").text(selectedText);
            $("#majorClassSelected").val(selectedVal);
            
            
        }else{
            $("#selectMajorClass").text("科系類別");
            $("#majorClassSelected").val("");
        };
    });


    
    
    
   





    //上傳圖片預覽
    $(function() {
    $(document).on("change",".uploadFile", function()
    {
    		var uploadFile = $(this);
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
 
        if (/^image/.test( files[0].type)){ // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file
 
            reader.onloadend = function(){ // set image data as background of div
                //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
            uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
            }
        }
    });
    //上傳圖片預覽end


});
})



