import { popularPicksData } from '@/constans';
import { MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const FoodsDetails = () => {
    // this is count foods state
    let [countFoods, setCountFoods] = useState(0)
    const { id } = useLocalSearchParams();
    const filterdFoodDetails = popularPicksData.find((details: any) => details.id === parseInt(id as string))
    if (!filterdFoodDetails) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text>Food item not found!</Text>
            </View>
        );
    }
    const { name, price, distance, overTime, deliveryTime, image, category, rating, description } = filterdFoodDetails;
    console.log(image);

    return (
        <ScrollView>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    justifyContent: "space-between",
                    top: 40,
                    zIndex: 10,
                    paddingLeft: 40,
                    paddingRight: 40,
                    width: "100%"
                }}
            >
                <Text className='backButton' onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back-ios" size={15} style={{ paddingLeft: 4 }} color="black" />
                </Text>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "4px",
                        alignItems: "center",
                        padding: 10
                    }}
                    className='middle_location'
                >
                    <Text>
                        <SimpleLineIcons name="location-pin" size={18} color="rgba(249, 250, 251, 1)" />
                    </Text>
                    <Text
                        className='nowrap'
                    >
                        Area 7, Garki Abuja
                    </Text>
                </View>
                <View>
                    <MaterialCommunityIcons name="email-outline" size={26} color="white" />
                </View>
            </View>
            <Stack.Screen
                options={{
                    title: `foods_details ${id}`
                }}
            />
            <View>
                <ImageBackground
                    style={{
                        position: "relative"
                    }}
                    className='details_img'
                    source={{ uri: image }}>
                    <MaterialCommunityIcons
                        style={{
                            left: 32,
                            top: 383,
                            zIndex: 40
                        }}
                        name="account-heart-outline"
                        size={24} color="white" />
                    {/* this is for rating star */}
                    <Text
                        className='rating_star'
                        style={{
                            position: "absolute",
                            bottom: 27,
                            right: 32,
                        }}
                    >
                        🌟 {rating} Ratings
                    </Text>
                </ImageBackground>
                <View style={{
                    marginTop: 0,
                    paddingLeft: 20,
                    paddingRight: 20,
                }}>
                    {/* this is details content */}
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 12,
                    }}>
                        <Text className='foodsDetails_heading'
                        >{name}</Text>
                        <Text className='countFoods' onPress={() => setCountFoods(countFoods--)}>-</Text>
                        <Text>{countFoods}</Text>
                        <Text className='countFoods' onPress={() => setCountFoods(countFoods++)}>+</Text>
                    </View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "18px"
                        }}
                    >
                        <Text>
                            {price}
                        </Text>
                        {/* this is for distance delivery and overtime */}
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text className='textSize10'>Distance | <Text className='textSize2'>{distance}🛵</Text></Text>
                            <Text className='textSize10'>Delivery time | <Text className='textSize2'>{deliveryTime}⌚</Text></Text>
                            <Text className='textSize10'>Overtime | <Text className='textSize2'>{overTime}🚦</Text></Text>
                        </View>
                    </View>
                    {/* this is for Description */}
                    <View style={{
                        marginTop: 26,
                        marginBottom: 18
                    }}>
                        <Text className='descriptionCaption'>Description</Text>
                        <Text className='description'>{description}</Text>
                    </View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity onPress={() => router.push(`/orders/track_live`)} className='placeOrder_btn'>
                            <Text className='placeOrder_text'>Place order x1</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default FoodsDetails