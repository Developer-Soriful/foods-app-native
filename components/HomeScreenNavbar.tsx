import { Images } from '@/assets/custom_images/images'
import React from 'react'
import { Image, View } from 'react-native'

const HomeScreenNavbar = () => {
    return (
        <View>
            <View className='flex flex-col justify-between px-4 border-none my-[40px] '
            // style={{
            //     backgroundColor: "rgba(0,0,0,0)"
            // }}
            >
                {/* this is for image */}
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%"
                    }}
                >
                    <Image source={Images.apps} />
                    <Image source={Images.email} />
                </View>
            </View>

        </View>
    )
}

export default HomeScreenNavbar