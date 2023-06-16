$(function () {
            $("#testSqlQuery").on("click", function () {
                // let dataToSever =$("#inputValue").val();
                
                // $.ajax({
                //     type: 'get',
                //     url: '/testdatabase/city',
                //     data: dataToSever,
                //     // dataType: 'JSON',
                //     success:function(data){
                //         $("#cityText").html("hi")
                //     }
                   
                // });

                let data ={dataToSever:  $("#inputValue").val()}
                
                $.ajax({
                    type:'post',
                    url:'/testdatabase',
                    data: data,
                    success:function(res){
                        if(res.length == 0){
                         $("#cityText").html("查無結果");
                        }else{
                        $("#cityText").html(res[0].cityName);
                        console.log(res)
                        }
                    },
                });

                // fetch('/testdatabase', {
                //     method: 'POST', // or 'PUT'
                //     body: JSON.stringify(data), // data can be `string` or {object}!
                //         headers: new Headers({
                //             'Content-Type': 'application/json'
                //         })
                //     }).then(res => res.json())
                //     .catch(error => console.error('Error:', error))
                //     .then(response => console.log('Success:', response));
            })

})