<!DOCTYPE html>
<html lang="ua">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <?php include ('head.php'); ?> 
    <title>Insert a computer</title>
  </head>
  <body>
  	<header>
  		<div class="container">
  			<h1 class="mb-3">Insert a Computer</h1>

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
              
            </ul>
          </div>
        </nav>

    		<form id="insert-computer-form" method="POST" >
    			<div class="mt-5 mb-3">
			    	<!-- <label for="InputFirstName" class="form-label">Student first name</label> -->
			    	<input type="number" class="form-control" id="InputComputerID" name="coputerID" aria-describedby="coputerIDHelp" placeholder="CoputerID" required>
			    	<div id="coputerIDHelp" class="form-text">Required</div>
			  	</div>
			  	<div class="mb-3">
			    	<!-- <label for="InputLastName" class="form-label">Student last name</label> -->
			    	<input type="text" class="form-control" id="InputModel" name="model" aria-describedby="ModelHelp" placeholder="Model" >
			    	<!-- <div id="" class="form-text">Required</div> -->
			  	</div>					
					<button type="submit" class="btn btn-primary" onclick="insert_computer();">Submit</button>
				</form>

  		</div>
  	</header>

   


    <?php include ('footer.php'); ?>   

    <script>
    	
			try {
			    $("#insert-computer-form")[0].addEventListener('submit', handleForm);
			} catch(error){
			    console.log(error);
			}

    </script>

  </body>
</html>