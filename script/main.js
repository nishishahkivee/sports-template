// (function(){
//     $('.carousel-showmanymoveone .item').each(function(){
//       var itemToClone = $(this);
  
//       for (var i=1;i<6;i++) {
//         itemToClone = itemToClone.next();
  
//         // wrap around if at end of item collection
//         if (!itemToClone.length) {
//           itemToClone = $(this).siblings(':first');
//         }
  
//         // grab item, clone, add marker class, add to collection
//         itemToClone.children(':first-child').clone()
//           .addClass("cloneditem-"+(i))
//           .appendTo($(this));
//       }
//     });
//   }());
$(document).ready(function(){    
 
    var itemCount = 0;    
    $("#register").click(function(){    
    var phoneNumber=$("#cnumber").val();
  var name=$("#name").val();
   
var phoneno = /^\d{10}$/;  
//   var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
	
	if(name.length<3 || name.length>20)  
	{  
    $('#name_error').html("length between 2-20");
    $("#name").css("border", "3px solid red");
    } 
    else if(!phoneNumber.match(phoneno))  
	{  
    $('#phone_error').html("* Enter valid 10 digit number like this 9876543210.");
    $("#cnumber").css("border", "3px solid red");
	}  
  else{
    alert("thank you for submitting");
  }
});
    
$(".add").click(function(){        
    itemCount++;
    $("#itemCount").text(itemCount);
     $(".cartItems").append("hello")
});
      $('.t-color1').click(function(){
        $(".p-image").attr('src',"https://d19m59y37dris4.cloudfront.net/hub/1-4-3/img/shirt-small.png");
        return false;
      });
      $('.t-color2').click(function(){
        $(".p-image").attr('src',"https://d19m59y37dris4.cloudfront.net/hub/1-4-3/img/shirt-black-small.png");
        return false;
      });
      $('.t-color3').click(function(){
        $(".p-image").attr('src',"https://d19m59y37dris4.cloudfront.net/hub/1-4-3/img/shirt-green-small.png");
        return false;
      });
      $('.remove').click(function(){        
        $(".item1").remove();
      });
}); 


