import React from 'react';
import {styles} from './styles';
import {View, Button} from 'react-native';
import {updateAppState} from "../../reducers/syncActions";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ScreenOne extends React.Component {

    static navigationOptions = {
        title: 'ScreenOne',
    };

    render() {
        return (
            <View
                style={styles.container}>
                <Button
                    title={'Open ScreenTwo'}
                    onPress={() => this.openScreenTwo()}
                />
            </View>
        );
    }

    openScreenTwo() {
        this.props.actions.updateAppState({isLoading: true});
        setTimeout(() => {
            this.props.actions.updateAppState({isLoading: false});
            this.props.navigation.navigate('ScreenTwo')
        }, 3000);
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                updateAppState
            },
            dispatch
        )
    };
};

export default connect(null, mapDispatchToProps)(ScreenOne);