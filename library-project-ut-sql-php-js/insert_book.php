<!DOCTYPE html>
<html lang="ua">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <?php include ('head.php'); ?> 
    <title>Insert user</title>
  </head>
  <body>
  	<header>
  		<div class="container">
  			<h1 class="mb-3">Insert a Book</h1>

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

    		<form id="insert-book-form" method="POST" >
    			<div class="mt-5 mb-3">
    				<label for="InputISBN" class="form-label">ISBN</label>
			    	<input type="number" class="form-control" id="InputISBN" name="ISBN" aria-describedby="ISBNHelp" placeholder="ISBN" required>
			    	<div id="ISBNHelp" class="form-text">Required</div>
			  	</div>
    			<div class="mb-3">
			    	<label for="InputTitle" class="form-label">Title</label>
			    	<input type="text" class="form-control" id="InputTitle" name="title" aria-describedby="titleHelp" placeholder="Title" required>
			    	<!-- <div id="titleHelp" class="form-text">Required</div> -->
			  	</div>
			  	<div class="mb-3">
			    	<!-- <label for="InputLastName" class="form-label">Student last name</label> -->
			    	<input type="text" class="form-control" id="InputLanguage" name="language" aria-describedby="languageHelp" placeholder="Language" >
			    	<!-- <div id="" class="form-text">Required</div> -->
			  	</div>
    			<div class="mb-3">
    				<label for="InputPageNum" class="form-label">Number of pages</label>
			    	<input type="number" min="1" class="form-control" id="InputPageNum" name="pageNum" aria-describedby="pageNumHelp" placeholder="Number of pages" >
			    	<div id="pageNumHelp" class="form-text">Integer value required</div>
    			</div>
    			<div class="mb-3">
			    	<label for="InputProYear" class="form-label">Year of production</label>
			    	<input type="number" min="1" class="form-control" id="InputProYear" name="proYear" aria-describedby="ProYearHelp" placeholder="Year of production" >
			    	<div id="ProYearHelp" class="form-text">Integer value required</div>
			  	</div>
			  	<div class="mb-3">
			  		<input type="text"  class="form-control" id="InputSubject" name="subject" aria-describedby="SubjectHelp" placeholder="Subject" >
					</div>
					<div class="mb-3">
						<label for="InputAuthor" class="form-label">Author</label>
			  		<input type="text"  class="form-control" id="InputAuthor" name="author" aria-describedby="AuthorHelp" placeholder="Author" required>
			    	<!-- <div id="AuthorHelp" class="form-text">Required</div> -->
					</div>
					<div class="mb-3">
			  		<input type="text"  class="form-control" id="PublisherRank" name="publisher" aria-describedby="PublisherHelp" placeholder="Publisher" >
			    	<!-- <div id="PhoneHelp" class="form-text">Required</div> -->
					</div>
					<div class="mb-3">
						<label for="InputCopiesNum" class="form-label">Number of Copies</label>
			  		<input type="number" min="0" class="form-control" id="InputCopiesNum" name="copiesNum" aria-describedby="CopiesNumHelp" placeholder="Number of Copies" required value="0">
			    	<div id="CopiesNumHelp" class="form-text">Integer value required. Default: 0</div>
					</div>
					
					<button type="submit" class="btn btn-primary" onclick="insert_book();">Submit</button>
				</form>

  		</div>
  	</header>

   


    <?php include ('footer.php'); ?>   

    <script>
    	
			try {
			    $("#insert-book-form")[0].addEventListener('submit', handleForm);
			} catch(error){
			    console.log(error);
			}

    </script>


  </body>
</html>