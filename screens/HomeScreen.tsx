import React from "react";
import { Dimensions, StyleSheet, ScrollView, Text, SafeAreaView, View, Image, FlatList, TouchableOpacity } from "react-native";
import COLORS from "../constants/colors";
import collections from "../constants/collections";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const width = Dimensions.get("window").width;

const Card = ({ data, navigation }) => {
    return (
        <TouchableOpacity style={styles.card}>
            <MaterialIcons
                style={{ position: "absolute", zIndex: 1, right: 10, top: 20 }}
                name="favorite-outline"
                size={28}
                color={COLORS.white}

            />
            <Image style={{ height: "100%", width: "100", borderRadius: 20 }}
                source={data.image} />
            <View style={styles.cardDetailsContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image style={{
                        marginLeft: 5,
                        width: 25,
                        height: 25,
                        borderRadius: 25
                    }}
                        source={require("../assets/eth.png")} />
                    <Text style={{
                        color: COLORS.white,
                        marginLeft: 2,
                        fontWeight: "bold",
                        fontSize: 12,

                    }}>
                        {data.price}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )

}

const HomeScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{
                flexDirection: "row",
                padding: 20,
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <View style={{
                    marginTop: 20,
                    width: 70,
                    height: 25,
                    backgroundColor: COLORS.violet,
                    borderRadius: 20,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 5,
                }}>
                    <Image style={{
                        width: 20,
                        height: 20,
                        borderRadius: 20
                    }} source={require("../assets/eth.png")} />
                    <Text style={{
                        color: COLORS.white,
                        marginLeft: 2,
                        fontWeight: "bold",
                        fontSize: 14
                    }}>
                        22.6
                    </Text>
                </View>
                <Image style={{
                    marginTop: 10,
                    width: 40,
                    height: 40,
                    borderRadius: 40
                }}
                    source={require("../assets/person.jpeg")} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Top NFTs</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingRight: 20,
                        paddingBottom: 20,
                    }}
                    horizontal
                    data={collections}
                    renderItem={({ item }) => <Card data={item} navigation={navigation} />}

                />
            </ScrollView>
            <StatusBar style="dark" backgroundColor={COLORS.white} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        margin: 20,
        fontWeight: "bold",
        color: COLORS.black,
        fontSize: 22
    },
    card: {
        height: 300,
        width: width * 0.55,
        backgroundColor: COLORS.white,
        marginLeft: 20,
        shadowColor: COLORS.grey,
        elevation: 10,
        borderRadius: 20,
        borderWidth: 7,
        borderColor: COLORS.white
    },
    cardDetailsContainer: {
        height: 70,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.4)",
        bottom: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",



    }
})

export default HomeScreen;
