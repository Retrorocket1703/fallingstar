//Get the contents of the text file
$text = file_get_contents("path/to/urls.txt");

//Split them by the seperate lines
$textArr = explode("\n", $text);

//loop through the array
for ($i = 0; $i < count($textArr); $i++) {
  //Echo the images
  //   echo "<img src='" . $textArr[$i] . "' style='width:100%'>";
}
