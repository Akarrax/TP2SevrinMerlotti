import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { compteurs } from "./"
import image8 from "./Images TP2/argent.jpg"
import imagePas8 from "./Images TP2/pleurer.jpg"

 

 export default function PageRichesse() {
    const criteres = useLocalSearchParams<compteurs>()
    let nombreCool = Number(criteres.nombreCool)
    let image
    let text
    let textGain
   if(nombreCool == 8){
    image= require("./Images TP2/argent.jpg")
    text="le nombre magique était 8."
    textGain="tu as gagné 100$"
   }else{
    text="le nombre magique était pas "+nombreCool +"."
    image= require("./Images TP2/pleurer.jpg")
    textGain="Malheurseusement tu a 0 $"
   }
 return (
    <View style={styles.container}>
      <Text style={styles.primaireTexte}>{text}</Text>
      <Image source={image} style={{ width: 600, height: 400 }} />
       <Text style={styles.primaireTexte}>{textGain}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00966C"
  },
  primaire: {
    backgroundColor: " #474C55",
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
  },
  primaireTexte: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 'bold',
  }
});
