import { Text, View, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router"


export type compteurs = {
  nombreCool: string
}

export default function Index() {
  const routeur = useRouter()

  var [nombreCool, setnombreCool] = useState(0)

  function imagCliquee() {
    setnombreCool(nombreCool + 1)

  }
  function compteur() {

    const objRecherche :compteurs = {
     nombreCool: nombreCool.toString()
    }
    setnombreCool(0)

    routeur.push({ pathname: "/richesse", params: objRecherche })
    // alert("Rechercher")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.primaireTexte}>Devine le nombre magique</Text>
      <Pressable onPress={imagCliquee}>
        <Image source={require('../app/Images TP2/cegep.png')} style={{ width: 200, height: 400 }} />
      </Pressable>
      <TouchableOpacity
        onPress={compteur}
        style={styles.primaire}>
        <Text style={styles.primaireTexte}>Participer</Text>
      </TouchableOpacity>
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
    backgroundColor: "#474C55",
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
