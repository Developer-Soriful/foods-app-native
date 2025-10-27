import { Images } from '@/assets/custom_images/images'
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const TrackOrder = () => {
    return (
        <View style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
        }}>
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
                    width: "100%",
                }}
            >
                <Text className='backButton' style={{
                    backgroundColor: "rgba(3, 7, 30, 1)",
                }} onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back-ios" size={15} style={{ paddingLeft: 4 }} color="white" />
                </Text>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "4px",
                        alignItems: "center",
                        padding: 10
                    }}
                    className='middle_location2'
                >
                    <Text>
                        <SimpleLineIcons name="location-pin" size={18} color="black" />
                    </Text>
                    <Text
                        className='nowrap2'
                    >
                        Area 7, Garki Abuja
                    </Text>
                </View>
                <Text></Text>
            </View>
            {/* this is for live tracking images */}
            <Image
                source={Images.live_track}
                style={{
                    width: "100%",
                    height: 200,
                }}
            />
            <View style={{
                marginTop: 34,
                marginBottom: 34,
            }}>
                <Text className='liveTrackingCaption'>Your order is on the way</Text>
            </View>
            <TouchableOpacity
                onPress={() => router.push(`/orders/voice_call`)}
                className='placeOrder_btn'
            >
                <Text className='placeOrder_text'>Tracking Live</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => router.push('/')}
                className='back_btn'
            >
                <Text className='backOrder_text'>Back Home</Text>
            </TouchableOpacity>
            <Text className='border_style'></Text>
        </View>
    )
}

export default TrackOrder