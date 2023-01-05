// ideas: https://www.youtube.com/watch?v=wLFn1ijXpaw
// https://www.youtube.com/watch?v=2HVKizgcfjo
// LOcal Storage https://www.youtube.com/watch?v=GihQAC1I39Q&list=WL&index=5

function handleForm(event) { event.preventDefault(); }

// Function
function insert_student(){

    $.ajax({
        // Action
        url: './php/scripts.php',
        // Method
        type: 'POST',
        data: {
          // Get values
          firstName: $("input[name=firstName]").val(),
          lastName: $("input[name=lastName]").val(),
          email: $("input[name=email]").val(),
          phone: $("input[name=phone]").val(),
          postalCode: $("input[name=postalCode]").val(),
          username: $("input[name=username]").val(),
          password: $("input[name=password]").val(),
          registered: $("input[name=registered]:checked").val(),
          action: "insert_student"
        },
        success:function(response){
          // Response is the output of action file
          if(response == 1){
            alert("Student " + $("input[name=username]").val() + " Added Successfully!");
            $("#insert-student-form")[0].reset();
          }
          else{
            alert("error: " + response)
          }
        }
        /*
        ,
        error:function OnError(xhr, errorType, exception) {
            var responseText;
            $("#dialog").html("");
            try {
                responseText = jQuery.parseJSON(xhr.responseText);
                $("#dialog").append("<div><b>" + errorType + " " + exception + "</b></div>");
                $("#dialog").append("<div><u>Exception</u>:<br /><br />" + responseText.ExceptionType + "</div>");
                $("#dialog").append("<div><u>StackTrace</u>:<br /><br />" + responseText.StackTrace + "</div>");
                $("#dialog").append("<div><u>Message</u>:<br /><br />" + responseText.Message + "</div>");
            } catch (e) {
                responseText = xhr.responseText;
                $("#dialog").html(responseText);
            }
            $("#dialog").dialog({
                title: "jQuery Exception Details",
                width: 700,
                buttons: {
                    Close: function () {
                        $(this).dialog('close');
                    }
                }
            });
        }
        */
    });

}

/*


function insert_user(){

                //debugger;
        
       
      
        var httpr = new XMLHttpRequest();
        httpr.open("POST","./php/test.php", true);
        httpr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        httpr.onreadystatechange = get_state()
        
        httpr.send("first_name="+first_name+"&last_name="+last_name+"&email="+email+"&postal_code="+postal_code+"&phone="+phone+"&registered="+registered);

            
        //form.reset();

                
}


*/


function insert_book(){ 

    // if( isNaN(parseInt($("input[name=pageNum]").val())) ){
    //     alert("pageNum should be a number");
    //     return;
    // }

    // if( isNaN(parseInt($("input[name=proYear]").val())) ){
    //     alert("proYear should be a number");
    //     return;
    // }

    // if( isNaN(parseInt($("input[name=copiesNum]").val())) ){
    //     alert("copiesNum should be a number");
    //     return;
    // }

    let isbn_no_hyphens = $("input[name=ISBN]").val().replaceAll('-', '');

    $.ajax({
        url: './php/scripts.php',
        type: 'POST',
        data: {
            ISBN: isbn_no_hyphens,
            title: $("input[name=title]").val(),
            language: $("input[name=language]").val(),
            pageNum: $("input[name=pageNum]").val(),
            proYear: $("input[name=proYear]").val(),
            subject: $("input[name=subject]").val(),
            author: $("input[name=author]").val(),
            publisher: $("input[name=publisher]").val(),
            copiesNum: $("input[name=copiesNum]").val(),
            action: "insert_book"
        },
        success:function(response){
          if(response == 1){
            alert("Book " + $("input[name=title]").val() + $("input[name=ISBN]").val() + " Added Successfully!");
            $("#insert-book-form")[0].reset();
          }
          else{
            alert("Error. " + response)
          }
        }
    });

}




function insert_computer(){ 

    $.ajax({
        url: './php/scripts.php',
        type: 'POST',
        data: {
            comID: $("input[name=coputerID]").val(),
            model: $("input[name=model]").val(),
            action: "insert_computer"
        },
        success:function(response){
          if(response == 1){
            alert("Computer " + $("input[name=coputerID]").val() + " Added Successfully!");
            $("#insert-computer-form")[0].reset();
          }
          else{
            alert("Error. " + response)
          }
        }
    });

}


function log_out() {
    sessionStorage.setItem('role', null);
    sessionStorage.setItem('username', null);
    alert("You are logged out!")
}



function manage_account() {
    $("#manage_account")[0].classList.remove('d-none');
    let username = sessionStorage.getItem('username').toString();
    $("#username")[0].innerHTML = "Username: " + username;

    $("#list_resources")[0].classList.add('d-none');
}


function pw_change() { 

    let new_pw = $("input[name=newPassword]").val();
    let username = sessionStorage.getItem('username').toString();
    let role = sessionStorage.getItem('role').toString();
    let table;
    if ( role == 'student' ){
        table = 'student'
    } else {
        table = 'staff'
    }

    $.ajax({
        url: './php/scripts.php',
        type: 'POST',
        data: {
            table: table,
            username: username,
            new_pw: new_pw,
            action: "pw_change"
        },
        success:function(response){
          if(response == 1){
            alert("New Password was set!");
            $("#changePwForm")[0].reset();
            log_out();
          }
          else{
            alert("Error. " + response)
          }
        }
    });

}

function list_books() {

    $("#list_resources")[0].classList.remove('d-none');
    $(".table-name")[0].innerHTML = "Books";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","./php/get_book.php", true);
    xmlhttp.send();
}


function list_available_books() {

    $("#list_resources")[0].classList.remove('d-none');
    $(".table-name")[0].innerHTML = "Available Books";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","./php/get_available_books.php", true);
    xmlhttp.send();
}


function list_computers() {

    $("#list_resources")[0].classList.remove('d-none');
    $(".table-name")[0].innerHTML = "Computers";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","./php/get_computer.php", true);
    xmlhttp.send();
}


function list_available_computers() {

    $("#list_resources")[0].classList.remove('d-none');
    $(".table-name")[0].innerHTML = "Available Computers";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","./php/get_available_computers.php", true);
    xmlhttp.send();
}



function list_borrowed_books() {

    $("#list_resources")[0].classList.remove('d-none');
    $(".table-name")[0].innerHTML = "Borrowed Books";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","./php/get_borrow_book.php", true);
    xmlhttp.send();
}


function list_borrowed_computers() {

    $("#list_resources")[0].classList.remove('d-none');
    $(".table-name")[0].innerHTML = "Borrowed Computers";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","./php/get_borrow_computer.php", true);
    xmlhttp.send();
}

function list_student_borrowed_books() {

    $("#list_resources")[0].classList.remove('d-none');
    let username = sessionStorage.getItem('username');
    $(".table-name")[0].innerHTML = "Books borrowed by student " + username;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","./php/get_student_borrowed_books.php?username="+username, true);
    xmlhttp.send();
}


function list_student_borrowed_computers() {

    $("#list_resources")[0].classList.remove('d-none');
    let username = sessionStorage.getItem('username');
    $(".table-name")[0].innerHTML = "Computers borrowed by student " + username;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","./php/get_student_borrowed_computers.php?username="+username, true);
    xmlhttp.send();
}


function list_student() {

    $("#list_resources")[0].classList.remove('d-none');
    $(".table-name")[0].innerHTML = "Students"
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","./php/get_student.php", true);
    xmlhttp.send();

}

function list_staff() {

        $("#list_resources")[0].classList.remove('d-none');

        $(".table-name")[0].innerHTML = "Staff"

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("txtHint").innerHTML = this.responseText;
          }
        };
        xmlhttp.open("GET","./php/get_staff.php", true);
        xmlhttp.send();

}


function borrow_book() {

    list_available_books();

    $("#borrow_book")[0].classList.remove('d-none');


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","./php/get_available_books.php", true);
    xmlhttp.send();
}

function borrow_book_php(){

    let card = $("input[name=card]").val();
    let copyBookID = $("input[name=copyBookID]").val();
    let studentID = $("input[name=studentID]").val();

    $.ajax({
        url: './php/scripts.php',
        type: 'POST',
        data: {
            card: card,
            copyBookID: copyBookID,
            studentID: studentID,
            action: "borrow_book_php"
        },
        success:function(response){
          if(response == 1){
            alert("Book borrowed!");
            $("#borrow-book-form")[0].reset();
          }
          else{
            alert("Error. " + response)
          }
        }
    });

}





$(document).ready( function() {

    var pathname = window.location.pathname;

    // if admin page
    if ( pathname.search('admin') != -1 || pathname.search('insert') != -1 ) { 
        if ( sessionStorage.getItem('role') != 'admin' ){
            alert("You are logged in as "+ sessionStorage.getItem('role') + ", you can't be here, redirecting to Main...");
            log_out();
            window.location.href = "index.php";
        }
    } 

    // if librarian page
    if ( pathname.search('librarian') != -1 ) { 
        if ( sessionStorage.getItem('role') != 'librarian' ){
            alert("You are logged in as "+ sessionStorage.getItem('role') + ", you can't be here, redirecting to Main...");
            log_out();
            window.location.href = "index.php";
        }
    } 
    
    
    




    if($(window).width() < 576)
    {


        


    }
    else if($(window).width() < 960)
    {

        


    }else{ //more tham 960px
	   
        
	};



});