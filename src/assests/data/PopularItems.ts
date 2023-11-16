
interface PopularItem {
  id: number;
  image: string; // Assuming images is a string representing the image source
  text: string;
}

const Popular_Items:PopularItem[] =[{
  id: 1,
  image: require('../images/thumbnails/1.png'),
  text : "Ore no Koto ga Daikirai na Imouto ga Kowai",
},
{
  id:2,
  image: require('../images/thumbnails/2.png'),
  text:"Solo Levelling",
},
{
  id:3,
  image: require('../images/thumbnails/3.png'),
  text: "Some crazy hoe",
}
]

  export default Popular_Items;