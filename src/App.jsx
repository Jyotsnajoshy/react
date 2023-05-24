import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
export default function App() {

  var districts = [ 
    {
      "id":1,
    "title":"kasargod",
    "Decription" : "the land of gods.",
  "img":"https://tourismnewslive.com/wp-content/uploads/2018/12/bakel_fort.jpg"  ,
},
 {
  "id":2,
  "title":"kannur",
  "Decriprion": "the City of Looms and Lores",
"img":"https://www.keralatourism.org/images/enchanting_kerala/large/kannur_fort20200908052017_1019_1.jpg",


},
{
"id" : 3,
"title" :"kozhikode",
"Decription":"City of Spices",
"img": "https://yometro.com/images/places/kozhikode-beach.jpg"
},
{
  "id" : 4,
"title" :"Wayanad",
"Decription":"Ooty of Kerala ",
"img": "https://img.onmanorama.com/content/dam/mm/en/travel/kerala/images/2021/3/24/wayanad-ghat.jpg",
},
{"id" : 5,
"title" :"Malappuram",
"Decription":" City of Hills, Soccer Capital",
"img": "https://townplanning.kerala.gov.in/town/wp-content/uploads/2018/12/malappuram.jpg",
},
{"id" : 6,
"title":"Thiruvanathapuram",
"Decription":"Capital city of Kerala",
"img":"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/04/bc/96.jpg"
},
{
  "id" : 7,
"title" :"Thrissur",
"Decription":"Thrissur is known as the cultural capital of Kerala",
"img": "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/14/07/49/fd/beauty-at-its-bestin.jpg",
},
{
  "id" : 8,
"title" :"Palakkad",
"Decription":"he granary of Kerala",
"img": "htps://media-cdn.tripadvisor.com/media/photo-c/1280x250/14/07/49/fd/beauty-at-its-bestin.jpg",
},
{
  "id" : 9,
"title" :"Ernakulam",
"Decription":"the Queen of Arabian Sea",
"img": "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/04/Fort-Kochi.jpg",
},
{
  "id" : 10,
"title" :"Pathanamthitta",
"Decription":"'Headquarters of Pilgrimage Tourism'of kerala",
"img": "https://drprem.com/travel/wp-content/uploads/sites/53/2016/06/Gavi-Kerala-a-perfect-Eco-Tourism-Destination.jpg",
},
{
  "id" : 11,
"title" :"Idukki",
"Decription":"spice garden of Kerala",
"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzweOvzsUwzggTiUEzabKw3jQPMoAPTMhJsoianTdWuRSJDkOPXlIJ7bUG829ANrsHVwM&usqp=CAU",
},
{
  "id" : 12,
"title" :"Alappuzha",
"Decription":"Venice of the East",
"img": "https://www.outlookindia.com/outlooktraveller/public/uploads/articles/travelnews/Alappuzha.jpg",
},
{
  "id" : 13,
"title" :"Kottayam",
"Decription":"city of letters",
"img": "https://www.shutterstock.com/image-photo/morning-landscape-illikkalkallukottayamsouth-india-upcoming-260nw-1633736497.jpg",
},
{
  "id" : 14,
"title" :"Kollam",
"Decription":"Cashew Capital of the World",
"img":"https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/Jatayu-Earth-Centre-Kollam-Kerala.jpg?resize=1024%2C576&ssl=1"
}
]

  return (
    <>
      <Container>   
       <Image src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/04/bc/96.jpg" fluid />
       </Container> 
       <Button variant="warning">Kerala</Button>
       <Carousel>
       {
        districts.map((d)=>{
         return(
       
           <Carousel.Item>
        <img
          className="d-block w-100"
          src={d.img}
          alt="first slide"
        />
        <Carousel.Caption>
          <h3>{d.title}</h3>
          <p>{d.Decription}</p>
        </Carousel.Caption>
      </Carousel.Item>

         
         )
        })
       }
       
      
     
       </Carousel>
    </>
  );
} 
   

