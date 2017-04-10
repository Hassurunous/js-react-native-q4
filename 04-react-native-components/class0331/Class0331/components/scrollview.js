import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

const ScrollingFun = (props) => {
    var viewArray = []
    for(var i; i < 20; i++) {
        viewArray.push(<View style = {styles.box} />);
    }
    return (
        <ScrollView>
            {viewArray}
        </ScrollView>
    )
}

export default ScrollingFun

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box: {
        height: 100,
        margin: 5,
        backgroundColor: 'aquamarine'
    }
});
