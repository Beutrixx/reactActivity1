import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source={require('@/assets/images/mark.png')} style={styles.image1}/>
      <Text style={styles.text1}>Mark Zuckerberg</Text>
      <Text style={styles.text2}>Ceo Meta</Text>
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
  alignItems: "center",
},
text2: {
  color:'gray'
},
image1: {
  width: 200,
  height:300,
  borderRadius: 20,
  margin: 20
}

})