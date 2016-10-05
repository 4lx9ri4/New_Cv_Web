<?php
	// On définit les 4 variables nécessaires à la connexion MySQL :
	$hostname = "xxxxxxxxxxxxx";
	$user     = "xxxxxxxxxxxxx";
	$password = "xxxxxxxxxxxxx";
	$nom_base_donnees = "xxxxxxxxxxxxx";

	// Connexion au serveur MySQL
	$conn = mysqli_connect($hostname, $user, $password, $nom_base_donnees) or die(mysqli_error());

?>