import { Images } from '@/assets/custom_images/images'
import { Entypo, FontAwesome, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const VideoCall = () => {
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
                marginTop: 100,
                paddingLeft: 24,
                paddingRight: 24,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 40
            }}>
                <ImageBackground
                    source={Images.delivery_call_img}
                    style={styles.imageBackground}>
                    <Image
                        source={Images.delivery_call_img2}
                        style={{
                            width: 130,
                            height: 150,
                            position: "absolute",
                            bottom: 10,
                            right: 10
                        }}
                    />
                </ImageBackground>
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
                {/* this is for calling and message icon part*/}
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 30
                    }}
                >
                    <TouchableOpacity
                        onPress={() => router.push(`/orders/track_live`)}
                    >
                        <Text className='audioCall'><MaterialIcons name="call-end" size={24} color="white" /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push(`/orders/video_call`)}>
                        <Text className='videoCall'><FontAwesome name="video-camera" size={24} color="white" /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            position: "relative"
                        }}
                    >
                        <Text className='messageCall'><Entypo name="message" size={24} color="white" /></Text>
                        <Text className='messageActive'></Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    imageBackground: {
        height: 341,
        width: '100%',
        borderRadius: 10, // border radius for the background imagess
        overflow: 'hidden', // This is important to make sure the borderRadius is applied
    },
    text: {
        color: 'white',
        fontSize: 20,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
    },
});
export default VideoCall