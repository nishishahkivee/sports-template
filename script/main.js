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
    var counter = 0;    
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
    
$(".btn-outline-dark").click(function(){        
    counter++;
    $("#counter").text(counter);
    });
  
    $('.carousel.carousel-multi .item').each(function () {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().attr("aria-hidden", "true").appendTo($(this));
    
      if (next.next().length > 0) {
        next.next().children(':first-child').clone().attr("aria-hidden", "true").appendTo($(this));
      }
      else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
      }
    });

}); 


