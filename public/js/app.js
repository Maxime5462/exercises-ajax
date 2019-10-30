$(function() {
  $.ajax({
    url : 'ajax/content.html', // La ressource ciblée
    type : 'GET', // Le type de la requête HTTP
    success:function(html){
      console.log(html);
      $('#img1').html(html);
    },
    error:function(response){
      console.log('error')

    }
  });

  setTimeout(function(){
    $.ajax({
      url : 'ajax/delay5.html', // La ressource ciblée
      type : 'GET', // Le type de la requête HTTP
      success:function(html){
        console.log(html);
        $('#img2').html(html);
      },
      error:function(response){
        console.log('error')

      }
    });}
    ,5000)

    $.ajax({
      url : 'ajax/info.html', // La ressource ciblée
      type : 'GET', // Le type de la requête HTTP
      success:function(html){
        console.log(html);
        $('#bt3').click(function(){
          $('#img3').html(html);
        });
      },
      error:function(response){
        console.log('error')

      }
    });

    //


    $('#formulaire').submit(function(e){
      var name =$(this).find('[name="name"]').val();
      var sex =$(this).find('[name="sex"]:checked').val();
      var type =$(this).find('[name="type"]').val();

      var data = {
        name: name,
        sex: sex,
        type:type,
      };
      console.log(data);
      $.ajax({
        url:"/user",
        method:"POST", //First change type to method here
        data: data,
        success:function(res) {
           $('#user').html(res);
         },
         error:function(){
          alert("error post");
         }

      });

    })


    //

  });
