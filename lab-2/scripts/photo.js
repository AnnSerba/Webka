function getPhotos(){
 var photos = new Array(15);
 photos[0]="images/photoAlbum/img1.jpg";
 photos[1]="images/photoAlbum/img2.jpg";
 photos[2]="images/photoAlbum/img3.jpg";
 photos[3]="images/photoAlbum/img4.jpg";
 photos[4]="images/photoAlbum/img5.jpg";
 photos[5]="images/photoAlbum/img6.jpg";
 photos[6]="images/photoAlbum/img7.jpg";
 photos[7]="images/photoAlbum/img8.jpg";
 photos[8]="images/photoAlbum/img9.jpg";
 photos[9]="images/photoAlbum/img10.jpg";
 photos[10]="images/photoAlbum/img11.jpg";
 photos[11]="images/photoAlbum/img12.jpg";
 photos[12]="images/photoAlbum/img13.jpg";
 photos[13]="images/photoAlbum/img14.jpg";
 photos[14]="images/photoAlbum/img15.jpg";

	var photoTitles = new Array(15);
	photoTitles[0]="День рождения Саши";
	photoTitles[1]="Байк шоу 2012";
	photoTitles[2]="Прогулка с Кариной";
	photoTitles[3]="Прогулка с Белкой";
	photoTitles[4]="Прогулка с Настей";
	photoTitles[5]="Фото на выпускной альбом";
	photoTitles[6]="Гуляли в парке";
	photoTitles[7]="18-ти летие";
	photoTitles[8]="Выпускной";
	photoTitles[9]="Гуляли под дождиком";
	photoTitles[10]="Розы";
	photoTitles[11]="Гуляли с Маринкой";
	photoTitles[12]="На крыше";
	photoTitles[13]="На крыше";
 photoTitles[14]="Гуляли по набережной с Маринкой";
	var line="<table>"
 for (var j=0;j<photos.length;j++){
  if(j==0){
   line+='<tr>';
  }else if(j==photos.length-1){
  }else if((j%3)==0){
   line+='</tr><tr>';
		}
		line+=
   '<td>'+
    '<a>'+
     '<img src="'+photos[j]+'" '+
     'alt="'+photoTitles[j]+'"'+
     'class="img">'+
     '<p>'+photoTitles[j]+'</p>'+
    '</a>'+
    '</td>';
	}
 line+='</tr></table>'
 document.getElementById('photos').innerHTML+=line;
}