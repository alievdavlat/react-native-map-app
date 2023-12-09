import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { UserLoctionContext } from "../../context/UserLocationContext";

const GoogleMapsView = () => {
  const [mapRegion, setMapRegion] = React.useState({});

  const { location, setlocation } = useContext(UserLoctionContext);
  console.log(location);
  React.useEffect(() => {
    if (location !== null) {
      setMapRegion({
        latitude: location?.coords?.latitude,
        longitude: location?.coords?.longitude,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421,
      });
    }
  }, []);

  return (
    <View style={styles.mapContainer}>
      <Text style={styles.text}>Top Near By Places</Text>

      <View>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}>
          {/* <Marker
            title="You"
            coordinate={
              mapRegion || {
                latitude: '',
                longitude: '',
                latitudeDelta: '',
                longitudeDelta: '',
              }
            }
          /> */}
        </MapView>
      </View>
    </View>
  );
};

export default GoogleMapsView;

const styles = StyleSheet.create({
  mapContainer: {
    width: responsiveWidth(95),
    height: responsiveHeight(25),
    marginTop: 20,
    borderRadius: responsiveWidth(3),
    overflow: "hidden",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  map: {
    width: Dimensions.get("screen").width * 0.89,
    height: Dimensions.get("screen").height * 0.23,
  },
  loaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
