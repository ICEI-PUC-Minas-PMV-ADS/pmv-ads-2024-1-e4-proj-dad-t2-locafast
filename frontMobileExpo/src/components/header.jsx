import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const IconComponent = ({ family, name, size, color }) => {
    switch (family) {
        case 'Ionicons':
            return <Ionicons name={name} size={size} color={color} />;
        case 'MaterialIcons':
            return <MaterialIcons name={name} size={size} color={color} />;
        case 'FontAwesome':
            return <FontAwesome name={name} size={size} color={color} />;
        default:
            return <Ionicons name={name} size={size} color={color} />;
    }
};

const CustomHeader = (props) => {

    return (
        <View style={styles.headerContainer}>
            <View style={styles.topHeaderContainer}>
                <Text style={styles.headerText}>{props.title}</Text>
            </View>
            <View style={styles.subHeaderContainer}>
                {Array.isArray(props.icons) ?
                    props.icons.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={props.navigation.navigate('Cadastro Reserva')}
                            style={styles.iconButton}
                        >
                            <IconComponent style={styles.icon} family={item.family} name={item.iconName} size={25} color="#707070" />
                        </TouchableOpacity>
                    )) :
                    <TouchableOpacity
                        style={styles.iconButton}
                    >
                        <IconComponent family={props.icons.family} name={props.icons.iconName} size={25} color="#707070" />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topHeaderContainer: {
        height: 60,
        backgroundColor: 'rgb(172, 134, 223)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        backgroundColor: '#E4E9F7',
    },
    subHeaderContainer: {
        height: 60,
        backgroundColor: "#FFF",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    headerText: {
        color: '#FFF',
        fontSize: 25,
    },
    iconButton: {
        marginHorizontal: 15,
    },
});

export default CustomHeader;
