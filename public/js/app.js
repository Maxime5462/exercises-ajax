$(function() {
  $.ajax({
    url : 'ajax/content.html', // La ressource ciblée
    type : 'GET', // Le type de la requête HTTP
    success:function(html){
      $('#img1').html(html);
    },
    error:function(response){

    }
  });

  setTimeout(function(){
    $.ajax({
      url : 'ajax/delay5.html', // La ressource ciblée
      type : 'GET', // Le type de la requête HTTP
      success:function(html){
        $('#img2').html(html);
      },
      error:function(response){

      }
    });}
    ,5000)

    $.ajax({
      url : 'ajax/info.html', // La ressource ciblée
      type : 'GET', // Le type de la requête HTTP
      success:function(html){
        $('#bt3').click(function(){
          $('#img3').html(html);
        });
      },
      error:function(response){

      }
    });




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









    var h = parseInt($('#h').text());
    var m = parseInt($('#m').text());
    var s = parseInt($('#s').text());
    //Ajout 1 seconde
    s = s+1;
    console.log(s)
    if(s>59) {
      s=0;
      m=m+1;
    }

    if(m>59){
      m=0;
      h=h+1;
    }

    if(h>23){
      h=0;
    }

    if(h<10){
      h='0'+h;
    }

    if(m<10){
      m='0'+m;
    }

    if(s<10){
      s='0'+s;
    }

    $('#h1').html(h);
    $('#m1').html(m);
    $('#s1').html(s);




  });
