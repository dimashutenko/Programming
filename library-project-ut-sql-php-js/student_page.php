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

        <h1 class="mb-3">Library</h1>

        <h3 class="mt-3 mb-3">Student pannel</h3>

        <nav class="navbar navbar-expand-sm navbar-light bg-light">
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <a href="index.php" class="nav-link">Main</a>
              </li>
              <li class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">List ...</a>
                <ul class="dropdown-menu">
                  <li><a href="#" class="dropdown-item" onclick="list_available_books()">List available books</a></li>
                  <li><a href="#" class="dropdown-item" onclick="list_available_computers()">List available computers</a></li>
                  <li><a href="#" class="dropdown-item" onclick="list_student_borrowed_books()">List my borrowed books</a></li>
                  <li><a href="#" class="dropdown-item" onclick="list_student_borrowed_computers()">List my borrowed computers</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Account</a>
                <ul class="dropdown-menu">
                  <li><a href="#" class="nav-link" onclick="manage_account()">Manage</a></li>
                  <li><a href="index.php" class="nav-link" onclick="log_out()">Log out</a></li>
                </ul>
              </li>
              <li class="nav-item">

              </li>
            </ul>
          </div>
        </nav>


        

      </div>
    </header>

    <section id="list_resources"  class="mt-3">
      <div class="container">
        <h4 class="table-name mb-2"></h4>
        <div id="txtHint"></div>
      </div>
    </section>

    <section id="manage_account"  class="mt-3 d-none">
      <div class="container">
        <form id="changePwForm">
          <p id="username" class="fw-bold"></p>
          <div class="mb-3">
            <label for="InputPasswordChange" class="form-label">Enter New password</label>
            <input type="password" class="form-control" id="InputPasswordChange" name="newPassword" aria-describedby="NewPasswordHelp" placeholder="New password" value="" required>
            <div id="NewPasswordHelp" class="form-text"></div>
          </div>
          <button type="submit" class="btn btn-primary" onclick="pw_change();">Change password</button>
        </form>
      </div>
    </section>


   


    <?php include ('footer.php'); ?> 

    <script>

      try {
          $("#changePwForm")[0].addEventListener('submit', handleForm);
      } catch(error){
          console.log(error);
      }

      

       

    </script>

  </body>
</html>