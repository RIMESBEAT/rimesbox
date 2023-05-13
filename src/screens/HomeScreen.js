import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
const genresData = [
  {
    name: "Overview",
  },
  {
    name: "genres & moods",
  },
  {
    name: "podcast",
  },
];

const HomeScreen = () => {
  const [genres, setGenres] = useState([
    "Overview",
    "genres & moods",
    "podcast",
    "rap",
    "hip hop",
    "afro",
  ]);



 

  return (
    <>
      <LinearGradient
        colors={["black", "#9B2DEF", "black"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 3 }}
        //   locations={[0, 4, 0.3]}
      >
        <SafeAreaView className="h-full px-4">
          <View>
            <Text className="text-4xl font-bold text-center py-2 text-white">
              Rimes Box
            </Text>

            <FlatList
              data={genres}
              keyExtractor={(index, item) => index}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <Text className="mr-4 font-bold uppercase pb-4 text-white">
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <Text className="text-lg text-white font-extrabold">
            Recently played
          </Text>

          <FlatList
            data={genres}
            keyExtractor={(index, item) => index}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Text className="mr-4 font-bold uppercase pb-4 text-white">
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default HomeScreen;
