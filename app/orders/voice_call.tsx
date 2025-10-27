import { Images } from '@/assets/custom_images/images'
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, View } from 'react-native'

const VoiceCall = () => {
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
            {/* this is for voice call demo img */}
            <View style={{
                paddingLeft: 64,
                paddingRight: 64,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 40
            }}>
                <Image
                    source={Images.delivery_call_img}
                    style={{
                        height: 341,
                        width: "100%",
                        borderRadius: "10px"
                    }}
                />
                <View
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 4
                    }}>
                    <Text className='liveTrackingCaption'>Gojo</Text>
                    <Text
                        style={{
                            color: "#98a3b2",
                        }}
                    >(Delivery personnel)</Text>
                </View>
            </View>
        </View>
    )
}

export default VoiceCall