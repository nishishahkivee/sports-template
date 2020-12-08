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
$(document).ready(function () {
  toastr.options = {
    "closeButton": true,
    //   // "newestOnTop": false,
    //   // "progressBar": true,
    //   "positionClass": "toast-top-right",
    //   "preventDuplicates": true,
    //   "onclick": null,
    //   "showDuration": "300",
    //   "hideDuration": "1000",
    //   "timeOut": "5000",
    //   "extendedTimeOut": "1000",
    //   "showEasing": "swing",
    //   "hideEasing": "linear",
    //   "showMethod": "fadeIn",
    //   "hideMethod": "fadeOut"
  }
  var todaysDate = new Date();
  console.log(todaysDate);
  var year = todaysDate.getFullYear();
  var month = ("0" + (todaysDate.getMonth() + 1)).slice(-2);
  var day = ("0" + todaysDate.getDate()).slice(-2);
  var maxDate = (year + "-" + month + "-" + day);
  $('#bdate').attr('max', maxDate);
  var itemCount = 0;
  var phoneno = /^\d{10}$/;
  var validate_name = /^[a-zA-Z]+$/;
  $("#register").click(function () {
    var phoneNumber = $("#cnumber").val();
    var name = $("#name").val();

    if (name.length < 3 || name.length > 20) {
      $('#name_error').html("length between 2-20");
      $("#name").css("border", "3px solid red");
    }
    else if (!phoneNumber.match(phoneno)) {
      $('#phone_error').html("* Enter valid 10 digit number like this 9876543210.");
      $("#cnumber").css("border", "3px solid red");
    }
    else {
      alert("thank you for submitting");
    }
  });

  $(".add").click(function () {
    itemCount++;
    $("#itemCount").text(itemCount);
    $(".cartItems").append("hello")
  });
  $('.t-color1').click(function () {
    $(".p-image").attr('src', "https://d19m59y37dris4.cloudfront.net/hub/1-4-3/img/shirt-small.png");
    return false;
  });
  $('.t-color2').click(function () {
    $(".p-image").attr('src', "https://d19m59y37dris4.cloudfront.net/hub/1-4-3/img/shirt-black-small.png");
    return false;
  });
  $('.t-color3').click(function () {
    $(".p-image").attr('src', "https://d19m59y37dris4.cloudfront.net/hub/1-4-3/img/shirt-green-small.png");
    return false;
  });
  $('.remove').click(function () {
    $(".item1").remove();
  });
  var maxField = 10;
  var x = 1;
  var fieldHTML = '<div class="form-group extra mt-3"><input type="text" name="hobby" class="form-control field2" placeholder="Hobby"><i class="d-inline fa fa-plus-circle fa-2x text-warning add mr-3"></i><i class="fa fa-minus-circle text-warning fa-2x remove"></i></div>';
  var wrapper = $('.field_wrapper');
  $('#Other').change(function () {
    if (this.checked) {
      if (x < maxField) {
        x++;
        $(wrapper).append(fieldHTML);
      }
    }
    else {
      $('.extra').remove();

    }
  });
  $(wrapper).on('click', '.add', function () {
    if (x < maxField) {
      x++;
      $(wrapper).append(fieldHTML);
    }
  });
  $(wrapper).on('click', '.remove', function (e) {
    e.preventDefault();
    $(this).parent('div').remove();
    x--;
  });
  var cnumber, Email, bdate, gender, address, name, fname, lname, hobby, mname,valid=true;
  $("#submit").click(function () {
    var check = '';
    $('input[name=hobby1]:checked').each(function () {
      check = check + this.value + '<br/>'
      console.log(hobby);
    });
    fname = $("#fname").val();
    lname = $("#lname").val();
    mname = $("#mname").val();
    Email = $("#email").val();
    cnumber = $("#cnumber").val();
    bdate = $("#bdate").val();
    gender = $("#gender").val();
    address = $("#address").val();
    console.log(address);
    hobby = '';
    validate_form();
    $("#name").html(fname + '&nbsp' + mname + '&nbsp' + lname);
    $("#tdata1").html(Email);
    $("#tdata2").html(cnumber);
    $("#tdata3").html(bdate);
    $("#tdata4").html(gender);
    $("#tdata5").html(address);
    $('.field2').each(function () {
      hobby = hobby + this.value + '<br/> '
    });
    $("#tdata7").html(check + hobby);
    function validate_form() {
    
      if (lname.length < 3 || lname.length > 21 || !lname.match(validate_name)) {
        $("#lname").css("border", "2px solid red");
        $("#lname").attr("title", "Name length must be 2-20");
        $("#lname").tooltip();   
        valid=false;    
      }
      if (fname.length < 3 || fname.length > 21 || !fname.match(validate_name)) {
        $("#fname").css("border", "2px solid red");
        $("#fname").attr("title", "Name length must be 2-20");
        $("#fname").tooltip();  
        valid=false;        
      }
      if (mname.length < 3 || mname.length > 21 || !mname.match(validate_name)) {
        $("#mname").css("border", "2px solid red");
        $("#mname").attr("title", "Name length must be 2-20");
        $("#mname").tooltip();  
        valid=false;        
      }
      if (!cnumber.match(phoneno)) {
        $("#cnumber").css("border", "2px solid red");
        $("#cnumber").attr("title", "Contact must be a number between 0-9 ");
        $("#cnumber").tooltip();    
        valid=false;       
      }
      if (Email == "" || !Email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
        $("#email").css("border", "2px solid red");
        $("#email").attr("title", "Email must be required @");
        $("#email").tooltip();  
        valid=false;         
      }
      if (bdate == "") {
        $("#bdate").css("border", "2px solid red");
        $("#bdate").attr("title", "enter correct birthdate");
        $("#bdate").tooltip();  
        valid=false;         
      }
      if (address == "") {
        $("#address").css("border", "2px solid red");
        $("#address").attr("title", "address must be filled out");
        $("#address").tooltip();
        valid=false;    
      }
      return valid;
    }
      if(valid) {
        $("#data").modal('show');
        toastr.success("Congratulations!You Registered Successfully.... ");      
      }
    
  });
});



