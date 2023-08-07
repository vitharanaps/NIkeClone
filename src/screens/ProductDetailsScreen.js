import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import products from "../data/products";

const ProductDetails = () => {
  const product = products[0];
  const { width } = useWindowDimensions();
  return (
    <View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={product.images}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{ width: width, aspectRatio: 1 }}
          />
        )}
      />
      <View style={{ padding: 10 }}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style = {styles.price}> $ {product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Add To Cart</Text>
    </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing:1.5
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  button:{
position:"absolute",
backgroundColor:"black",
bottom:30,
width:"90%",
alignSelf:"center",
padding:20,
borderRadius:100,
justifyContent:"center",alignItems:"center"
  },
  buttonText:{
color:"white",
fontWeight:"500",
fontSize:20
  }
});
export default ProductDetails;
