import React from "react";
import {
    Image,
    ImageSourcePropType,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";
import styles, {currencyCardStyles, bottomCardStyles, roundButton, currencyPicker} from './Home.styles';
import {
    ActionButton1,
    ActionButton2,
    ActionButton3,
    ActionButton4,
    ActionButton5,
    BrowserButton, CurrencyClose, CurrencyCloseBackground,
} from './assets';
import SelectInput from '@tele2/react-native-select-input';

const Home: React.FunctionComponent = () => {
    const Close = () => {
        return <View style={currencyCardStyles.closeContainer}>
            <Image
                style={currencyCardStyles.closeContainer}
                source={CurrencyCloseBackground}
            />
            <Image style={currencyCardStyles.closeIcon} source={CurrencyClose}/>
        </View>
    };

    const renderCurrencyCard = () => {
        return <>
            <Close/>
            <View style={currencyCardStyles.container}>
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <SelectInput
                        containerStyle={currencyCardStyles.countrySelectInputContainer}
                        options={[{
                            value: 'United States',
                            label: 'United States',
                        }]}
                        value="United States"
                    />
                    <SelectInput
                        containerStyle={currencyCardStyles.currencySelectInputContainer}
                        options={[{
                            value: 'USD',
                            label: 'USD',
                        }]}
                        value="USD"
                    />
                </View>
            </View>
        </>
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
