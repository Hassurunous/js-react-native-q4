import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

class TitleBar2 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }
}

export default TitleBar2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'indigo'
    },
    title: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 50,
        fontFamily: 'Helvetica',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'yellow',
        backgroundColor: 'lime'
    }
});
