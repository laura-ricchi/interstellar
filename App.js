import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  YellowBox
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View>
          <View style={styles.header}>
            <Image
              style={styles.logo}
              source={require("./assets/logo-imdb.png")}
            ></Image>
          </View>
        </View>
        <View style={{ backgroundColor: "#212121" }}>
          <View style={{ backgroundColor: "#202020" }}>
            <Text style={styles.title}>Interstellar</Text>
            <Text style={styles.infos}>
              2014 PG-13 2h49min Adventure, Drama, Sci-Fi
            </Text>
            <View style={styles.film}>
              <Image
                style={styles.picture}
                source={require("./assets/interstellar.png")}
              ></Image>
              <View style={{ display: "flex", flex: 1 }}>
                <Text style={styles.description}>
                  A team of explorers travel through a wormhole in space in an
                  attempt to ensure humanity's survival.
                </Text>
                <TouchableHighlight
                  style={styles.button}
                  onPress={() => console.log("Added!")}
                >
                  <View>
                    <Text style={styles.buttonText}>+ ADD TO WATCHLIST</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
            <View style={styles.icons}>
              <View style={styles.star}>
                <Ionicons name="ios-star" size={30} color="#E6B91E" />
                <Text
                  style={{
                    color: "#F5F5F5",
                    fontWeight: "bold",
                    fontSize: 20
                  }}
                >
                  8.6<Text style={{ fontSize: 12 }}>/10</Text>
                </Text>
                <Text style={{ color: "#565656" }}>1.1M</Text>
              </View>
              <View style={styles.starOutline}>
                <Ionicons name="ios-star-outline" size={30} color="#C4C4C4" />
                <Text
                  style={{
                    color: "#F5F5F5",
                    fontWeight: "bold",
                    fontSize: 15,
                    display: "flex",
                    flex: 1,
                    justifyContent: "center"
                  }}
                >
                  RATE THIS
                </Text>
              </View>
              <View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={{
                      backgroundColor: "#62C750",
                      fontSize: 20,
                      color: "#D9F1D6",
                      width: 25,
                      height: 25
                    }}
                  >
                    74
                  </Text>
                  <Text style={{ color: "#E4E4E4" }}>Metascore</Text>
                  <Text style={{ color: "#565656" }}>46 critic reviews</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.casting}>
          <Text
            style={{
              color: "#FCFCFC",
              fontSize: 30,
              margin: 10
            }}
          >
            Top Billed Cast
          </Text>
          <Text
            style={{
              color: "#059FE6",
              fontWeight: "bold",
              fontSize: 15,
              display: "flex",
              marginRight: 10
            }}
          >
            SEE ALL
          </Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.cast}>
            <View style={styles.matthew}>
              <Image
                style={{ height: 180, width: 120 }}
                source={require("./assets/Matthew-McConaughey.png")}
              ></Image>
              <Text numberOfLines={1} style={{ color: "#E1E1E1" }}>
                Matthew McConaughey
              </Text>
              <Text style={{ color: "#595959" }}>Cooper</Text>
            </View>
            <View style={styles.anna}>
              <Image
                style={{ height: 180, width: 120 }}
                source={require("./assets/Anna-Hathaway.png")}
              ></Image>
              <Text numberOfLines={1} style={{ color: "#E1E1E1" }}>
                Anna Hathaway
              </Text>
              <Text style={{ color: "#595959" }}>Brand</Text>
            </View>
            <View style={styles.jessica}>
              <Image
                style={{ height: 180, width: 120 }}
                source={require("./assets/Jessica-Chastain.png")}
              ></Image>
              <Text numberOfLines={1} style={{ color: "#E1E1E1" }}>
                Jessica Chastain
              </Text>
              <Text style={{ color: "#595959" }}>Murph</Text>
            </View>
            <View style={styles.anna}>
              <Image
                style={{ height: 180, width: 120 }}
                source={require("./assets/Anna-Hathaway.png")}
              ></Image>
              <Text numberOfLines={1} style={{ color: "#E1E1E1" }}>
                Anna Hathaway
              </Text>
              <Text style={{ color: "#595959" }}>Brand</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{ marginLeft: 10, marginTop: 20 }}>
          <Text style={{ color: "#DADADA", fontSize: 17, fontWeight: "bold" }}>
            Director
          </Text>
          <Text style={{ color: "#DADADA", fontSize: 15 }}>
            Christopher Nolan
          </Text>
        </View>
        <View style={{ marginLeft: 10, marginTop: 20 }}>
          <Text style={{ color: "#DADADA", fontSize: 17, fontWeight: "bold" }}>
            Writers
          </Text>
          <Text style={{ color: "#DADADA", fontSize: 15 }}>
            Jonathan Nolan (written by) and Christopher Nolan (written by)
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#393939",
    height: 60
  },
  logo: {
    height: 40,
    width: 60,
    margin: 10
  },
  container: {
    flex: 1,
    backgroundColor: "#1D1D1D",
    fontSize: 19
  },
  title: {
    fontSize: 40,
    color: "white",
    margin: 10
  },
  infos: {
    fontSize: 15,
    color: "#909090",
    margin: 10
  },
  film: {
    display: "flex",
    flexDirection: "row"
  },
  picture: {
    height: 150,
    width: 100,
    margin: 20
  },
  description: {
    marginTop: 20,
    color: "#989898"
  },
  button: {
    backgroundColor: "#0277BD",
    height: 30,
    width: 210,
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 20
  },
  buttonText: {
    color: "#DAEAF3",
    fontWeight: "bold"
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  star: {
    alignItems: "center",
    justifyContent: "center"
  },
  starOutline: {
    alignItems: "center"
  },
  casting: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    backgroundColor: "#212121"
  },
  cast: {
    display: "flex",
    flexDirection: "row"
  },
  matthew: {
    marginLeft: 10,
    height: 180,
    width: 120
  },

  anna: {
    marginLeft: 10
  },
  jessica: {
    marginLeft: 10
  }
});
