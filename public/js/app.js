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
  });

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

});
