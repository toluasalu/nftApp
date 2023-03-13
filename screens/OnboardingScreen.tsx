import React from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, SafeAreaView, View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import COLORS from "../constants/colors";
import collections from "../constants/collections";
import { MaterialIcons } from "@expo/vector-icons"

const OnboardingScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageBg}>
                <Image style={{ height: 250, width: 180, marginTop: 70 }} source={require("../assets/nft.png")} />
            </View>
            <View style={{
                paddingHorizontal: 20,
                marginTop: 50,
                justifyContent: "space-between",
            }}>
                <Text style={styles.title}>Collecting Best</Text>
                <Text style={styles.title}>NFT Crypto Art</Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.btn} onPress={() => navigation.replace("Home")}>
                    <Text style={{ color: COLORS.black, fontWeight: "bold" }}>Get Started</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="light" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,

    },
    imageBg: {
        height: 320,
        width: 220,
        backgroundColor: COLORS.violet,
        marginTop: 70,
        marginHorizontal: 20,
        borderRadius: 40,
        paddingHorizontal: 20,
        overflow: "hidden"
    },
    title: {
        color: COLORS.white,
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 12
    },
    btn: {
        height: 50,
        width: 150,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
});


export default OnboardingScreen;
