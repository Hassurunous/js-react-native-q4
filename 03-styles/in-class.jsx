import React from 'react';
import { View, StyleSheet }, from 'react-native';

const inClass = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
        </View>
    );
}

export default InClass;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f00'
    },
    box: {
        flex: 1,
        margin: 5,
        backgroundColor: '#0f0'
    },
    redbg: {backgroundColor: '#f00'},
    greenbg: {backgroundColor: '#0f0'},
    bluebg: {backgroundColor: '#00f'},
    yellowbg: {backgroundColor: '#ff0'},
    cyanbg: {backgroundColor: '#0ff'},
    whitebg: {backgroundColor: '#fff'}
});
