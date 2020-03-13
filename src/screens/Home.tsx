import React from "react";
import {
    Image,
    ImageSourcePropType,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";
import styles, {currencyCardStyles, bottomCardStyles, roundButton} from './Home.styles';
import {
    ActionButton1,
    ActionButton2,
    ActionButton3,
    ActionButton4,
    ActionButton5,
    BrowserButton,
} from './assets'

const Home: React.FunctionComponent = () => {
    const renderCurrencyCard = () => {
        return <View style={currencyCardStyles.container}>
            <Text>Currency</Text>
        </View>
    };

    const renderRoundButton = (style: ViewStyle, image: ImageSourcePropType) => {
        return <TouchableOpacity style={[roundButton, style]} activeOpacity={0.6}>
            <Image source={image}/>
        </TouchableOpacity>
    };

    const renderBottomCard = () => {
        return <View style={bottomCardStyles.container}>
            <ScrollView style={bottomCardStyles.actionButtonsContainer} horizontal>
                {renderRoundButton(bottomCardStyles.actionButton, ActionButton1)}
                {renderRoundButton(bottomCardStyles.actionButton, ActionButton2)}
                {renderRoundButton(bottomCardStyles.actionButton, ActionButton3)}
                {renderRoundButton(bottomCardStyles.actionButton, ActionButton4)}
                {renderRoundButton(bottomCardStyles.actionButton, ActionButton5)}
            </ScrollView>
            {renderRoundButton(bottomCardStyles.browserButton, BrowserButton)}
        </View>
    };

    return (
        <SafeAreaView style={styles.saveAreaView}>
            <StatusBar barStyle="light-content"/>
            <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainerStyle}>
                    <View style={styles.container}>
                        <View style={styles.stub}/>
                        {renderCurrencyCard()}
                        {renderBottomCard()}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Home;
