import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TitleBar2 from './components/titlebar';
import ScrollingFun from './components/scrollview';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Hello? Are you still there</Text>
                <TitleBar2 title="Class Time" />
                <ScrollingFun />
            </View>
        );
    }
}

export default App;

const styles = StyleSheet.create({

});
