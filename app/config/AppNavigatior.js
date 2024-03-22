/* eslint-disable no-multiple-empty-lines */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from 'react-navigation';
import {View, StatusBar} from 'react-native';
import Loader from "../components/Loader";
import ScreenOne from "../screens/ScreenOne";
import ScreenTwo from "../screens/ScreenTwo";

const AppNavigator = createStackNavigator({
    ScreenOne: {screen: ScreenOne},
    ScreenTwo: {screen: ScreenTwo}
});


class AppNavigatorContainer extends Component {

    componentDidMount() {
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <AppNavigator/>
                {this.props.isLoading ? <Loader/> : null}
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        isLoading: state.appState.isLoading
    }
}

export default connect(
    mapStateToProps,
    null
)(AppNavigatorContainer)
