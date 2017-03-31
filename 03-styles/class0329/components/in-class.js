import React from 'react';
import { View, StyleSheet } from 'react-native';

const InClass = (props) => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.yellowbox]}></View>
            <View style={[styles.box, styles.bluebox]}></View>
            <View style={[styles.box, styles.cyanbox]}></View>
            <View style={[styles.box, styles.greenbox]}></View>
        </View>
    );
}

export default InClass;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f00',
    },
    box: {
        flex: 1,
        margin: 5,
        backgroundColor: '#0f0',
    },
    redbox: {backgroundColor: '#f00'},
    greenbox: {backgroundColor: '#0f0', flex: 2},
    bluebox: {backgroundColor: '#00f', flex: 4},
    yellowbox: {backgroundColor: '#ff0', flex: 1},
    cyanbox: {backgroundColor: '#0ff', flex: 1},
    whitebox: {backgroundColor: '#fff', flex: 1}
});
