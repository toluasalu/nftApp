import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity } from "react-native";
import COLORS from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const MyTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={{
            flexDirection: "row",
            padding: 20,
            backgroundColor: COLORS.white,
            borderTopWidth: 0.3,
            borderColor: COLORS.grey,
            alignItems: "center",
            justifyContent: "space-between",

        }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const TabBarIcon = options.tabBarIcon;

                return (
                    <TouchableOpacity onPress={() => navigation.navigate(route.name)}>
                        <TabBarIcon
                            size={30}
                            color={isFocused ? COLORS.black : COLORS.grey}
                            focus={isFocused}
                        />
                        {isFocused && (
                            <View style={{
                                height: 6,
                                width: 30,
                                position: "absolute",
                                backgroundColor: COLORS.black,
                                top: -20,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6
                            }} />

                        )}


                    </TouchableOpacity>

                )
            })}
        </View>
    )
}


const BottomNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialIcons
                            name={focused ? "home-filled" : "home"}
                            color={color}
                            size={size}
                        />
                    )
                }} />

            <Tab.Screen name="Notifications" component={HomeScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <MaterialIcons
                        name={focused ? "notifications-active" : "notifications-none"}
                        color={color}
                        size={size}
                    />
                )
            }} />

            <Tab.Screen name="Favorites" component={HomeScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <MaterialIcons
                        name={focused ? "favorite" : "favorite-outline"}
                        color={color}
                        size={size}
                    />
                )
            }} />




        </Tab.Navigator>
    )
}

export default BottomNavigator;

