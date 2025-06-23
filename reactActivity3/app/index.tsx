import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text1}>COLLEGE OF COMPUTING AND INFORMATION SCIENCES</Text>
      <Image source={require('@/assets/images/ccis.png')} style={styles.image1}/>
      <Text style={styles.text2}>Developed by</Text>
      <Text style={styles.text3}>Bea P. Mangornong</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
text1: {
  color: 'black',
  fontWeight: 'bold',
  fontSize: 25,
  textAlign: "center"
},
text2: {
  color:'black',
},
text3: {
  color:'black',
  fontWeight: 'bold'
},
image1: {
  width: 350,
  height:450,
  borderRadius: 20,
  margin: 20
}

})