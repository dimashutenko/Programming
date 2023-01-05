<!DOCTYPE html>
<html lang="ua">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <?php include ('head.php'); ?> 
    <title>Library</title>
  </head>
  <body>
    <header>
      <div class="container">

        <h1 class="">Library</h1>

      </div>
    </header>

    <section class="mt-3">
      <div class="container">
        <div class="row">
          <div class="col-5">
            <form id="student-login-form" method="POST" >
              <h3 class="form-title mb-3">Student Login</h3>
              <div class="mb-3">
                <label for="InputStudentUsername" class="form-label">Enter your username</label>
                <input type="test" class="form-control" id="InputStudentUsername" name="studentUsername" aria-describedby="HelpStudentUsername" placeholder="email@mail.com" value="dima" required>
                <div id="HelpStudentUsername" class="form-text">Required</div>
              </div>
              <div class="mb-3">
                <label for="InputLoginPassword" class="form-label">Enter your password</label>
                <input type="password" class="form-control" id="InputLoginPassword" name="studentPassword" aria-describedby="LoginPasswordHelp" placeholder="password" value="password" required>
                <div id="LoginPasswordHelp" class="form-text">Required</div>
              </div>
              <button type="submit" class="btn btn-primary" onclick="student_login();">Login</button>
            </form>
          </div>
          <div class="col-5 offset-2">
            <form id="staff-login-form" method="POST" >
              <h3 class="form-title mb-3">Staff Login</h3>
              <div class="mb-3">
                <label for="InputStaffUsername" class="form-label">Enter your username</label>
                <input type="text" class="form-control" id="InputStaffUsername" name="staffUsername" aria-describedby="StaffUsernameHelp" placeholder="shutenko" value="shutenko" required>
                <div id="StaffUsernameHelp" class="form-text">Required</div>
              </div>
              <div class="mb-3">
                <label for="InputLoginPassword" class="form-label">Enter your password</label>
                <input type="password" class="form-control" id="InputStaffPassword" name="loginStaffPassword" aria-describedby="LoginPasswordHelp" placeholder="password" value="password" required>
                <div id="LoginPasswordHelp" class="form-text">Required</div>
              </div>
              <button type="submit" class="btn btn-primary" onclick="staff_login();">Login</button>
            </form>
          </div>
        </div>
      </div>
    </section>


   


    <?php include ('footer.php'); ?>

    <script>

      try {
        $("#staff-login-form")[0].addEventListener('submit', handleForm);
      } catch(error){
        console.log(error);
      }

      function staff_login(){ 

        // https://www.abstractapi.com/guides/email-validation-regex-javascript
        //const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
        // if( emailRegex.test(user_email) != true ){
        //   alert("email must follow a format email@mail.com");
        //   return;
        // }

        let username = $("input[name=staffUsername]").val();
        let password = $("input[name=loginStaffPassword]").val();        

        $.ajax({
            url: './php/login.php',
            type: 'POST',
            data: {
              username: username,
              password: password,
              action: "staff_login"
            },
            success:function(response){
              if(response == 'admin'){
                alert("User " + username + " is logged in as admin");
                sessionStorage.setItem('role', response);
                sessionStorage.setItem('username', username);
                window.location.href = "admin_page.php";
              } else if(response == 'librarian'){
                alert("User " + username + " is logged in as librarian");
                sessionStorage.setItem('role', response);
                sessionStorage.setItem('username', username);
                window.location.href = "librarian_page.php";
              } else {
                alert("error: " + response)                                
              }
            }
        });

      }




      try {
        $("#student-login-form")[0].addEventListener('submit', handleForm);
      } catch(error){
        console.log(error);
      }

      function student_login(){ 

        let username = $("input[name=studentUsername]").val();
        let password = $("input[name=studentPassword]").val();        

        $.ajax({
            url: './php/login.php',
            type: 'POST',
            data: {
              username: username,
              password: password,
              action: "student_login"
            },
            success:function(response){
              if(response == 1){
                alert("User " + username + " is logged in as Student");
                sessionStorage.setItem('role', 'student');
                sessionStorage.setItem('username', username);
                window.location.href = "student_page.php";
              } else {
                alert("error: " + response)                                
              }
            }
        });

      }

    </script> 


  </body>
</html>