import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import "../../global.css";
export default function TabLayout() {
    return (
        <SafeAreaView style={{ flex: 1, position: "relative" }}>
            {/* <HomeScreenNavbar /> */}
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                    headerShown: false,
                }}
            >
                {/* this is for */}
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons
                                name={focused ? 'home' : 'home-outline'}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="orders"
                    options={{
                        title: 'Orders',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons
                                name={focused ? 'cart' : 'cart-outline'}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons
                                name={focused ? 'person' : 'person-outline'}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="favorites"
                    options={{
                        title: 'Favorites',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons
                                name={focused ? 'heart' : 'heart-outline'}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="foods_details/[id]"
                    options={{
                        href: null
                    }}
                />
            </Tabs>
        </SafeAreaView>
    );
}