import { ordersData, yourOrders } from '@/constans'
import { Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Orders = () => {
    return (
        <View style={{ flex: 1, marginLeft: 30, marginRight: 30 }}>
            <View style={{ display: "flex", flexDirection: "row", position: "absolute", justifyContent: "space-between", top: 40, zIndex: 10, width: "100%" }} >
                <Text className='backButton' onPress={() => router.back()}> <MaterialIcons name="arrow-back-ios" size={15} style={{ paddingLeft: 4 }} color="black" /> </Text> {/* <View style={{ display: "flex", flexDirection: "row", gap: "4px", alignItems: "center", padding: 10 }} className='middle_location' > <Text> <SimpleLineIcons name="location-pin" size={18} color="rgba(249, 250, 251, 1)" /> </Text> <Text className='nowrap' > Area 7, Garki Abuja </Text> </View> */} <View> <MaterialCommunityIcons name="email-outline" size={26} color="black" /> </View>
            </View>
            {/* this is for your order part in this page */}
            <View
                style={{
                    marginTop: 120
                }}
            >
                <Text style={styles.yourOrder}>Your Order</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.yourOrder}
                >
                    {yourOrders.map((item) => (
                        <Text
                            key={item.id}
                            style={{ color: "rgba(152, 162, 179, 1)", marginRight: 4 }}
                            className={`nowrap ${item.name === "Pending" ? "popularRecipeCardTitle" : "popularRecipeCardTitle2"}`}
                        >
                            {item.name}
                        </Text>
                    ))}
                </ScrollView>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                // contentContainerStyle={{ paddingBottom: 20 }}
                style={{
                    marginTop: 20
                }}
            >
                {ordersData.map((data: any, index: number) => (
                    <View key={index} className='orderCard' style={{ display: "flex", justifyContent: "center", padding: 12, marginBottom: 14 }}>
                        {/* <Image
                            source={data.image_url}
                        /> */}
                        <View>
                            <Text>
                                {data.food_name}
                            </Text>
                            {/* this is for food status  */}
                            <Text>
                                {data.status}
                            </Text>
                            <Text>
                                {data.price}
                            </Text>
                            <View>
                                Delivery Time : {data.delivery_time}
                            </View>
                        </View>
                        {/* this is for messeging part */}
                        <View
                            style={{
                                display: 'flex',
                                alignItems: "flex-end"
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    position: "relative",

                                }}
                            >
                                <Text className='messageCall'><Entypo name="message" size={24} color="white" /></Text>
                                <Text className='messageActive'></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    yourOrder: {
        color: "rgba(3, 7, 30, 1)",

        fontFamily: "Plus Jakarta Sans",
        fontSize: 20,
        fontWeight: 800,
        lineHeight: 100,
        letterSpacing: 0,
        textAlign: "left"
    },
    orderStatus: {
        marginTop: 19,
        marginBottom: 13,
        display: "flex",
        flexDirection: "row",
        gap: 10
    }
})

export default Orders