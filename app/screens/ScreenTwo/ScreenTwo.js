import React from "react";
import {styles} from './styles';
import {View, Button} from 'react-native';

export default class ScreenTwo extends React.Component {

    static navigationOptions = {
        title: 'ScreenTwo',
    };

    render() {
        return (
            <View
                style={styles.container}>
                <Button
                    title={'Go Back'}
                    onPress={() => this.props.navigation.goBack(null)}
                />
            </View>
        );
    }
}