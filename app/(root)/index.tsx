import { Images } from "@/assets/custom_images/images";
import HomeScreenNavbar from "@/components/HomeScreenNavbar";
import { popularPicksData, popularRecipes } from "@/constans";
import { EvilIcons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import "../../global.css";
export default function HomeScreen() {
    // this is for routing to profile screen and settging 
    const router = useRouter();

    const HomeScreen = () => {

        return (
            <ScrollView>
                <HomeScreenNavbar />
                <View style={styles.container} className="pt-10">
                    <View className='flex flex-col gap-5 pb-[43px]'>
                        {/* this is for What are we ordering today? text */}
                        <Text className='homeLayoutHeading'>What are we ordering today?</Text>
                        {/* this is for popular revipe part */}
                        <View style={{ marginTop: 19, display: "flex", flexDirection: "row", gap: "4px" }} className=''>
                            {
                                popularRecipes.map((item) => (
                                    <Text key={item.id}
                                        style={{ color: "rgba(152, 162, 179, 1)" }}
                                        className={`nowrap ${item.name === "Popular🔥" ? "popularRecipeCardTitle" : "popularRecipeCardTitle2"}`}>{item.name}</Text>
                                ))
                            }
                        </View>
                    </View>
                    {/* this is for Spaghetti Specials month */}
                    <ImageBackground
                        source={Images.spacial}
                        style={{ marginTop: 43, paddingRight: 24, paddingBottom: 16, paddingTop: 16, paddingLeft: 24, width: "100%" }}
                        className="spacialLyout"
                    >
                        <View className='px-6 py-4 flex flex-col gap-1'>
                            <Text className='spacialHeading'>Spaghetti Specials month</Text>
                            <Text className='spacialText'>For all spaghetti lovers, get $10 off
                                all spaghetti based meals.
                            </Text>
                            <Text className="claimButton">
                                Claim Now
                            </Text>
                        </View>
                        <View style={{ position: 'absolute', bottom: -28, right: -5 }}>
                            <Image source={Images.spacial_child} />
                        </View>
                    </ImageBackground>
                    {/* this is for home layout  */}
                    <View style={{ position: "relative" }}>
                        <TextInput className="homeLayoutInput" placeholder="Find your favourite delicacy" />
                        <EvilIcons style={{ position: "absolute", right: 10, top: 38 }} name="search" size={24} color="black" />
                    </View>
                    {/* this is  Popular picks🍲*/}
                    <View>
                        <View style={{ marginTop: 27, marginBottom: 24, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Text className='popularPicksHeading'>Popular picks🍲</Text>
                            <Text className='seeMoreButton'>See more...</Text>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="popularPicksScrollView">
                            <View style={{ display: "flex", flexDirection: "row", gap: 28 }} >
                                {
                                    popularPicksData.map((item: any) => (
                                        <View key={item.id}>
                                            <TouchableOpacity
                                                onPress={() => router.push(`/foods_details/${item.id}` as Href)}
                                            >
                                                <View className="popularPicksCard">
                                                    <Image source={{ uri: item.image }} className="popularPic" />
                                                    <View className="popularPicksCardContent">
                                                        <Text className="popularPicksCardTitle">{item.name}</Text>
                                                        <Text className="popularPicksCardPrice">{item.price}</Text>
                                                        <Text className="deliveryTime"> Delivery time | {item.deliveryTime}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    ))
                                }
                            </View>
                        </ScrollView>
                    </View>
                    {/* this is for Today’s favourites🍜 */}
                    <View>
                        <View style={{ marginTop: 27, marginBottom: 24, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Text className='popularPicksHeading'>Today’s favourites🍜</Text>
                            <Text className='seeMoreButton'>See more...</Text>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="popularPicksScrollView">
                            <View style={{ display: "flex", flexDirection: "row-reverse", gap: 28 }} >
                                {
                                    popularPicksData.map((item: any) => (
                                        <View key={item.id}>
                                            <View className="popularPicksCard">
                                                <Image source={{ uri: item.image }} className="popularPic" />
                                                <View className="popularPicksCardContent">
                                                    <Text className="popularPicksCardTitle">{item.name}</Text>
                                                    <Text className="popularPicksCardPrice">{item.price}</Text>
                                                    <Text className="deliveryTime"> Delivery time | {item.deliveryTime}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    ))
                                }
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>

        );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingLeft: 16,
            paddingRight: 16,
        }
    });

    return <HomeScreen />;
}