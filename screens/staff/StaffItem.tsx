import { Thumbnail } from 'native-base';
import React, { useEffect, memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Theme, Style } from '../../Theme.style';
import { TouchableOpacity } from "react-native-gesture-handler"
import * as Linking from 'expo-linking';

const style = StyleSheet.create({
    container: {
        marginTop: 6,
        padding: 15,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomLeftRadius: 25,
        borderColor: "gray"
    },
    pictureContainer: {
        marginTop: 0,
        backgroundColor: "#54565A",
        borderRadius: 100,
        width: 48,
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    picture: {
        justifyContent: 'center',
        height: 25,
        width: 25
    },
    Name: {
        color: "white",
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "700",
        fontFamily: Theme.fonts.fontFamilyRegular
    },
    Position: {
        marginTop: 2,
        color: "white",
        fontWeight: "400",
        fontSize: 12,
        flexWrap: "wrap",
    },
    footerText: {
        marginTop: 6,
        color: "white",
        textDecorationLine: "underline",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 18
    },
    icon: { ...Style.icon, width: 21, height: 21, },
    iconContainer: {
        justifyContent: "center",
        padding: 16
    },
})
interface Props {
    staff: {
        FirstName: string
        LastName: string
        Email: string
        Position: string
        Phone: string
    }
}
function StaffItem(props: Props): JSX.Element {
    return (
        <View style={style.container}>
            <View style={style.pictureContainer}><Thumbnail style={style.picture} source={Theme.icons.white.user}></Thumbnail></View>
            <View style={{ marginLeft: 15, flexDirection: "column" }}>
                {props.staff.FirstName && props.staff.LastName ?
                    <Text style={style.Name}>{props.staff.FirstName} {props.staff.LastName}</Text>
                    : null}
                {props.staff.Position ?
                    <Text style={style.Position}>{props.staff.Position}</Text>
                    : null}
                {false ?
                    <TouchableOpacity>
                        <Text style={style.footerText}>
                            View Teaching
                        </Text>
                    </TouchableOpacity>
                    : null}
            </View>
            <View style={{ flexDirection: "column", flex: 1, }}>
                <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                    <TouchableOpacity onPress={() => Linking.openURL(`tel:${props.staff.Phone}`)} style={style.iconContainer}>
                        <Thumbnail style={style.icon} source={Theme.icons.white.phone} square></Thumbnail>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL(`mailto:${props.staff.Email}`)} style={style.iconContainer}>
                        <Thumbnail style={style.icon} source={Theme.icons.white.contact} square></Thumbnail>
                    </TouchableOpacity>
                </View>
            </View>
        </View >

    )
}
export default memo(StaffItem);