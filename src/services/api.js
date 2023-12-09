import axios from "axios"

const  BASE_URL = 'https://console.cloud.google.com/api/place'

const API_KEY = 'AIzaSyAFKxJEnXC5vrzfDCtrXy9QHHp595dN_Fc'

const nearByPlace=(lat,lng,type)=>axios.get(BASE_URL+
  "/nearbysearch/json?"+
  "&location="+lat+","+lng+"&radius=1500&type="+type
  +"&key="+API_KEY)


  const searchByText=(searchText)=>axios.get(BASE_URL+
      "/textsearch/json?query="+searchText+
"&key="+API_KEY)



export  {
  nearByPlace,
  searchByText
}