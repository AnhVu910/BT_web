<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Untitled Document</title>
	</head>

	<body>
		<?php
			$date = $_POST["date_onside"];
			$phone = $_POST["phone"];
			$email = $_POST["email"];
			$gender = $_POST["gender"];
			$pass = $_POST["password"];
			$homeTown = $_POST["user_home"];
			$name = $_POST["user_name"];
			if(empty($name)) echo "Thieu Name";
			if(empty($phone)) echo "Thieu Phone";
			if(empty($date)) echo "Thieu date";
			if(empty($email)) echo "Thieu email";
			if(empty($pass)) echo "Thieu pass";
			if(empty($homeTown)) echo "Thieu hometown";
			if(empty($gender)) echo "Thieu gender";
			$output = "\r\nName: ".$name. " Gender: ".$gender." Date: ".$date." Home: ".$homeTown." Email: ".$email. " Phone: ".$phone." Pass: ".$pass; 
			echo $output;
		
		?>
		<?php
			$target_dir = "uploads/";
			$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
			$uploadOk = 1;
			$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

			// Check if image file is a actual image or fake image
			if(isset($_POST["submit"])) {
				$check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
				if($check !== false) {
					echo "File is an image - " . $check["mime"] . ".";
					$uploadOk = 1;
  				} else {
					echo "File is not an image.";
					$uploadOk = 0;
				}
			}

			// Check if file already exists
			if (file_exists($target_file)) {
				echo "Sorry, file already exists.";
				$uploadOk = 0;
			}

			// Check file size
			if ($_FILES["fileToUpload"]["size"] > 500000) {
				echo "Sorry, your file is too large.";
				$uploadOk = 0;
			}

			// Allow certain file formats
			if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) {
  				echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
  				$uploadOk = 0;
			}

			// Check if $uploadOk is set to 0 by an error
			if ($uploadOk == 0) {
				echo "Sorry, your file was not uploaded.";
				// if everything is ok, try to upload file
			} else {
  				if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    				echo "\nThe file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
					$filepath = $target_file;
					echo "<img src=".$filepath." height=200 width=300 />";
  				} else {
					echo "Sorry, there was an error uploading your file.";
  				}
			}
?>
		
		
	</body>
</html>