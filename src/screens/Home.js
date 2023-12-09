import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/home/Header";
import GoogleMapsView from "../components/home/GoogleMapsView";
import CategoryList from "../components/home/CategoryList";
import { nearByPlace } from "../services/api";
import PlaceList from "../components/home/PlaceList";
import { UserLoctionContext } from "../context/UserLocationContext";

const Home = () => {

  const [placeList, setPlaceList] = React.useState([])

  const { location, setlocation } = useContext(UserLoctionContext);
  console.log(location);

  const GetNearBySearchPlace=(value)=>{
   
    nearByPlace(location?.coords?.latitude,
      location?.coords?.longitude,value).then(resp=>{
          setPlaceList(resp?.data?.results);
          console.log(resp?.data, 'otvet');
    })
  } 


  React.useEffect(() => {
    GetNearBySearchPlace()
  }, [])

  return (
    <View style={styles.homeContainer}>
      <Header />
      <GoogleMapsView/>
      <CategoryList  setSelectedCategory={(value)=> GetNearBySearchPlace(value)} />
      {
        placeList ? <PlaceList placeList={placeList}/> : null 
      }
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    padding: 20,
    paddingTop: 40,
  },
});
