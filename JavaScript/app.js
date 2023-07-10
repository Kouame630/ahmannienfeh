let i = 0; 			// Start Point
let j = 0;
let images = [];	// Images Array
let themes = [];
let time = 3500;	// Time Between Switch

//Themes List
themes[0] = "Visite du parc national du Banco, Abidjan-Côte d'Ivoire";
themes[1] = 'Visite de la Basilique de Yamoussoukro, Côte d\'Ivoire';
themes[2] = 'Etudiants en salle de classe à Abidjan, Côte d\'Ivoire';
themes[3] = 'Visite au Zoo national d\'Abidjan, Côte d\'Ivoire';

const son = document.querySelector('.title');

// Image List
images[0] = "donees de travail/SlideShow/banco/p1.jpeg";
images[1] = "donees de travail/SlideShow/banco/p2.jpeg";
images[2] = "donees de travail/SlideShow/banco/p3.jpeg";
images[3] = "donees de travail/SlideShow/banco/p4.jpeg";
images[4] = "donees de travail/SlideShow/banco/p5.jpeg";
images[5] = "donees de travail/SlideShow/banco/p6.jpeg";
images[6] = "donees de travail/SlideShow/banco/p7.jpeg";
images[7] = "donees de travail/SlideShow/banco/p8.jpeg";
images[8] = "donees de travail/SlideShow/banco/p9.jpeg";

images[9] = "donees de travail/SlideShow/basilique/p10.jpg";
images[10] = "donees de travail/SlideShow/basilique/p11.jpeg";
images[11] = "donees de travail/SlideShow/basilique/p12.jpg";
images[12] = "donees de travail/SlideShow/basilique/p13.jpg";
images[13] = "donees de travail/SlideShow/basilique/p14.jpg";

images[14] = "donees de travail/SlideShow/class/p15.jpg";
images[15] = "donees de travail/SlideShow/class/p16.JPEG";
images[16] = "donees de travail/SlideShow/class/p17.JPEG";

images[17] = "donees de travail/SlideShow/zoo/p18.JPEG";
images[18] = "donees de travail/SlideShow/zoo/p19.JPEG";
images[19] = "donees de travail/SlideShow/zoo/p20.JPEG";
images[20] = "donees de travail/SlideShow/zoo/p21.JPEG";
images[21] = "donees de travail/SlideShow/zoo/p22.JPEG";
images[22] = "donees de travail/SlideShow/zoo/p23.JPEG";
images[23] = "donees de travail/SlideShow/zoo/p24.JPEG";



// Change Image
function changeImg(){
	document.slide.src = images[i];
	if (i <= 8) {
		j = 0;
	} else if (i > 8 && i <= 13) {
		j = 1;
	} else if (i > 13 && i <= 16) {
		j = 2;
	} else if (i > 16 && i <= 123) {
		j = 3;
	}else { 
		j = 0;
	}
	son.innerHTML = themes[j];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}
window.onload=changeImg;

