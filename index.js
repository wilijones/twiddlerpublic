
$(document).ready(() => {
  const $body = $('body');
  //$body.html('');

  $body.append('TWIDDLER')

  $('#titleArea').css('color', 'blue',)
  .css('background-color', 'grey')
  .css('font-size', '40px')
  .css('text-shadow', '2px 2px 5px red')

  $("#header").css('background-color', 'LightGray')
  $("#tweetArea").css('background-color', 'LightSteelBlue')
  
    
    

  $("#header").append('<div id= buttonArea7 > <div>')
  $("#header").append('<div id= buttonArea8 > <div>')
  $("#header").append('<img src= default.jpg width="125" height="100" />')
  $("#header").append('<div id= buttonArea1  type= "button" > <div>')
  $("#header").append('<div id= buttonArea2 > <div>')
  $("#header").append('<div id= buttonArea3 > <div>')
  $("#header").append('<div id= buttonArea4 > <div>')
  $("#header").append('<div id= buttonArea5 > <div>')
  $("#header").append('<div id= buttonArea6 > <div>')
  var homeUser = null
  var originalTweet = ""
  var ogCreated = null
  //var timeAgo = Math.floor((new Date()- tweet.created_at) / 1000)
  
  $('#buttonArea8').append('See Your Twiddles').click(function(){
    if (!streams.users[homeUser]){alert("you got no twiddles right now")}
    else{
    $('#tweetArea').replaceWith($('<div id= tweetArea>' + streams.users[homeUser].map( function(tweet){
      return  '<div id=' + tweet.user + '>'+`@${tweet.user}: ${tweet.message} : ${ogCreated.toDateString()}--${ogCreated.toLocaleTimeString()}--${Math.floor((new Date()- ogCreated) / 1000)}seconds ago`+'</div>'
    }).join('') +'<div>'))
  }
  $("#tweetArea").css('background-color', 'LightSteelBlue')

  $('#tweetArea').children().css({"border-color": "purple", 
    "border-weight":".5px", 
    "border-style":"solid"})

})



  $('#buttonArea8').css('background-color', 'LightSteelBlue')


  $('#buttonArea7').append('Sign in Username').click(function(){
     homeUser = prompt("What Your Username User?")
}
  )
  $('#buttonArea7').css({"border-color": "#C1E0FF", 
  "border-weight":"1px", 
  "border-style":"solid"})

  $('#buttonArea6').append('Make New Twiddle').click(function(){
    if (!homeUser) {alert("Please Sign in Username") }

    else{
    originalTweet = prompt("What You Got To Say?")
    ogCreated = new Date
  if (originalTweet){
  console.log(homeUser + '   ' + originalTweet)
  if (!streams.users[homeUser]){streams.users[homeUser] = []} 
  console.log(streams.users[homeUser])
     streams.users[homeUser].push({
      user: homeUser,
      message: originalTweet,
      created_at: ogCreated,
    });
     console.log(streams.users)
      streams.home.push({
        user: homeUser,
        message: originalTweet,
        created_at: ogCreated,
      });
      console.log(streams.home)
    }  


  $('#tweetArea').replaceWith($('<div id= tweetArea>' + streams.home.map( function(tweet){
    return  '<div class=' + tweet.user + '>'+`@${tweet.user}: ${tweet.message} : ${ogCreated.toDateString()}--${ogCreated.toLocaleTimeString()}--${Math.floor((new Date()- ogCreated) / 1000)}seconds ago`+'</div>'
  }).join('') +'<div>'))
  $("#tweetArea").css('background-color', 'LightSteelBlue')

  $('#tweetArea').children().css({"border-color": "purple", 
    "border-weight":".5px", 
    "border-style":"solid"})

    }
})
  

  $('#buttonArea2').append('Shawn ').click(function(){ $('#tweetArea').replaceWith($('<div id= tweetArea>' + streams.users.shawndrost.map( function(tweet){
       return  '<div id=' + tweet.user + '>'+`@${tweet.user}: ${tweet.message} : ${tweet.created_at.toDateString()}--${Math.floor((new Date()- tweet.created_at) / 1000)}seconds ago`+'</div>'
     }).join('') +'<div>'))


     $("#tweetArea").css('background-color', 'LightSteelBlue').css({"border-color": "#C1E0FF", 
     "border-weight":"1px", 
     "border-style":"solid"})
     
     $('#tweetArea').children().css({"border-color": "purple", 
     "border-weight":".5px", 
     "border-style":"solid"})
 
    })




     $('#buttonArea1').append('Home ').click(function(){
      $('#tweetArea').replaceWith($('<div id= tweetArea>' + streams.home.map( function(tweet){
        return  '<div class=' + tweet.user + '>'+`@${tweet.user}: ${tweet.message} : ${tweet.created_at.toDateString()}--${tweet.created_at.toLocaleTimeString()}--${Math.floor((new Date()- tweet.created_at) / 1000)}seconds ago`+'</div>'
      }).join('') +'<div>'))
      
      $("#tweetArea").css('background-color', 'LightSteelBlue').css({"border-color": "#C1E0FF", 
      "border-weight":"1px", 
      "border-style":"solid"})
      
      $('#tweetArea').children().css({"border-color": "purple", 
    "border-weight":".5px", 
    "border-style":"solid"})

     })
  

    $('#buttonArea3').append('MrAcus ').click(function(){ $('#tweetArea').replaceWith($('<div id= tweetArea>' + streams.users.mracus.map( function(tweet){
      return  '<div id=' + tweet.user + '>'+`@${tweet.user}: ${tweet.message} : ${tweet.created_at.toDateString()}--${tweet.created_at.toLocaleTimeString()}--${Math.floor((new Date()- tweet.created_at) / 1000)}seconds ago`+'</div>'
    }).join('') +'<div>'))
    
    $("#tweetArea").css('background-color', 'LightSteelBlue').css({"border-color": "#C1E0FF", 
    "border-weight":"1px", 
    "border-style":"solid"})

    $('#tweetArea').children().css({"border-color": "purple", 
    "border-weight":".5px", 
    "border-style":"solid"})

  })

    $('#buttonArea4').append('Sharks4 ').click(function(){ $('#tweetArea').replaceWith($('<div id= tweetArea>' + streams.users.sharksforcheap.map( function(tweet){
      return  '<div id=' + tweet.user + '>'+`@${tweet.user}: ${tweet.message} : ${tweet.created_at.toDateString()}--${tweet.created_at.toLocaleTimeString()}--${Math.floor((new Date()- tweet.created_at) / 1000)}seconds ago`+'</div>'
    }).join('') +'<div>'))
    $("#tweetArea").css('background-color', 'LightSteelBlue').css({"border-color": "#C1E0FF", 
    "border-weight":"1px", 
    "border-style":"solid"})

    $('#tweetArea').children().css({"border-color": "purple", 
    "border-weight":".5px", 
    "border-style":"solid"})

  })
  
    $('#buttonArea5').append('Doug ').click(function(){ $('#tweetArea').replaceWith($('<div id= tweetArea>' + streams.users.douglascalhoun.map( function(tweet){
      return  '<div id=' + tweet.user + '>'+`@${tweet.user}: ${tweet.message} : ${tweet.created_at.toDateString()}--${tweet.created_at.toLocaleTimeString()}--${Math.floor((new Date()- tweet.created_at) / 1000)}seconds ago`+'</div>'
    }).join('') +'<div>'))
    $("#tweetArea").css('background-color', 'LightSteelBlue').css({"border-color": "#C1E0FF", 
    "border-weight":"1px", 
    "border-style":"solid"})

    $('#tweetArea').children().css({"border-color": "purple", 
    "border-weight":".5px", 
    "border-style":"solid"})

  })

  //$('.shawndrost').show().click(function(){ console.log("shawn")
   // $('#tweetArea').replaceWith($('<div id= tweetArea>' + streams.home.shawndrost.map( function(tweet){
   //   return  '<div id=' + tweet.user + '>'+`@${tweet.user}: ${tweet.message} : ${tweet.created_at.toDateString()}--${tweet.created_at.toLocaleTimeString()}`+'</div>'
  //  }) +'<div>'))
  //})
  $('#sharksforcheap')
  $('#mracus')
  $('#buttonArea')
  
  $("#newTwiddles").show().click(function(){
    $('#tweetArea').replaceWith($('<div id= tweetArea>' + streams.home.map( function(tweet){
      return  '<div class=' + tweet.user + '>'+`@${tweet.user}: ${tweet.message} : ${tweet.created_at.toDateString()}--${tweet.created_at.toLocaleTimeString()}--`+'</div>'
    }).join('') +'<div>'))
    $("#tweetArea").css('background-color', 'LightSteelBlue').css({"border-color": "#C1E0FF", 
    "border-weight":"1px", 
    "border-style":"solid"})
    
    $('#tweetArea').children().css({"border-color": "purple", 
    "border-weight":".5px", 
    "border-style":"solid"})

   })

  
   
 

  $("#homepage").hide()

  const $tweets = streams.home.map((tweet) => {
    const $tweet = $('<div></div>');
    const text = `@${tweet.user}: ${tweet.message} : ${tweet.created_at.toDateString()}--${tweet.created_at.toLocaleTimeString()}--${Math.floor((new Date()- tweet.created_at) / 1000)}seconds ago`;

    $tweet.text(text);

    return $tweet;
  });
  $('#tweetArea').append($tweets)
  //setInterval($body.append(uniq($tweets.concat(streams.home))), 6*1000)
 
 
  $('#tweetArea').children().css({"border-color": "purple", 
  "border-weight":".5px", 
  "border-style":"solid"})

});


//console.log(streams.home)
//$("#newTwiddles").show().click(function(){
 // $('#tweetArea').appendTo(streams.home)
//})




//$("#newTwiddles").on("click",function(){console.log("shiiiiiiiit")})
//$('#tweetArea').on("click",function(){console.log("shiiiiiiiit")})

//$("#newTwiddles").click(function(){console.log("shiiiiiiiit")})


/*
setInterval(function() {
  $('body').append($tweets)
}, 6 * 1000)

setInterval(fn60sec, 60*1000)

, function(){
    return uniq($tweets.concat(streams.home))
  }
*/


