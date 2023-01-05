<!DOCTYPE html>
<html lang="ua">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <?php include ('head.php'); ?> 
    <title>Insert student</title>
  </head>
  <body>
  	<header>
  		<div class="container">
  			<h1 class="mb-3">Insert a Student</h1>

    		<nav class="navbar navbar-expand-sm navbar-light bg-light">
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="index.php" class="nav-link">Main</a>
              </li>
              <li class="nav-item">
                <a href="admin_page.php" class="nav-link">Admin pannel</a>
              </li>
              <li class="nav-item dropdown">
                <a href="index.php" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Insert ...</a>
                <ul class="dropdown-menu">
                  <li><a href="insert_student.php" class="dropdown-item">Insert a student</a></li>
                  <li><a href="insert_book.php" class="dropdown-item">Insert a book</a></li>
                  <li><a href="insert_computer.php" class="dropdown-item">Insert a computer</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a href="index.php" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Features</a>
                <ul class="dropdown-menu">
                  <li><a href="#" class="dropdown-item">1</a></li>
                  <li><a href="#" class="dropdown-item">2</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

    		<form id="insert-student-form" method="POST" > <!-- action="php/insert_user_script.php" -->
    			<div class="mt-5 mb-3">
			    	<!-- <label for="InputFirstName" class="form-label">Student first name</label> -->
			    	<input type="text" class="form-control" id="InputFirstName" name="firstName" aria-describedby="FirstNameHelp" placeholder="Student first name" required>
			    	<!-- <div id="" class="form-text">Required</div> -->
			  	</div>
			  	<div class="mb-3">
			    	<!-- <label for="InputLastName" class="form-label">Student last name</label> -->
			    	<input type="text" class="form-control" id="InputLastName" name="lastName" aria-describedby="LastNameHelp" placeholder="Student last name" >
			    	<!-- <div id="" class="form-text">Required</div> -->
			  	</div>
    			<div class="mb-3">
    				<!-- <label for="InputEmail" class="form-label">Email</label> -->
			    	<input type="email" pattern=".+@+." class="form-control" id="InputEmail" name="email" aria-describedby="emailHelp" placeholder="Email" required>
			    	<!-- <div id="" class="form-text">Required</div> -->
    			</div>
    			<div class="mb-3">
			  		<input type="tel"  class="form-control" id="InputPhone" name="phone" aria-describedby="PhoneHelp" placeholder="Phone" >
			    	<!-- <div id="PhoneHelp" class="form-text">Required</div> -->
				</div>
    			<div class="mb-3">
			    	<input type="number" class="form-control" id="InputPostalCode" name="postalCode" aria-describedby="PostalCodeHelp" placeholder="Postal code" >
			    	<!-- <div id="" class="form-text">Required</div> -->
			  	</div>
			  	<div class="mb-3">
			  		<label for="InputUsername" class="form-label">Username</label>
			    	<input type="text" class="form-control" id="InputUsername" name="username" aria-describedby="usernameHelp" placeholder="Username" required>
			    	<div id="usernameHelp" class="form-text">Required</div>
    			</div>
    			<div class="mb-3">
    				<label for="InputPassword" class="form-label">Password</label>
			    	<input type="text" class="form-control" id="InputPassword" name="password" aria-describedby="passwordHelp" placeholder="Password" required>
			    	<!-- <div id="passwordHelp" class="form-text">Required</div> -->
    			</div>
				<div class="mb-3">
				    <input type="checkbox" class="check-input-registered" id="registered-user" name="registered">
				    <label class="check-label-registered" for="registered-user">Registered student</label>
				</div>
				<button type="submit" class="btn btn-primary" onclick="insert_student();">Submit</button>
			</form>

  		</div>
  	</header>

   


    <?php include ('footer.php'); ?>

		<script>

  		try {
			    $("#insert-student-form")[0].addEventListener('submit', handleForm);
			} catch(error){
			    console.log(error);
			}
			
  	</script>

  </body>
</html>