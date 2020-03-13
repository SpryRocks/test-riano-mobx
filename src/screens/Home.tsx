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
import styles, {currencyCardStyles, bottomCardStyles, roundButton} from './Home.styles';
import {
    ActionButton1,
    ActionButton2,
    ActionButton3,
    ActionButton4,
    ActionButton5,
    BrowserButton, CurrencyClose, CurrencyCloseBackground,
} from './assets';
import SelectInput from '@tele2/react-native-select-input';
import {Observer} from 'mobx-react';
import {state} from "store";
import Currencies from "entities/Currency";
import Country from "entities/Country";
import Currency from "entities/Currency";

const Home: React.FunctionComponent = () => {
    const Close = () => {
        return <View style={currencyCardStyles.closeContainer}>
            <Image
                style={currencyCardStyles.closeContainer}
                source={CurrencyCloseBackground}
            />
            <TouchableOpacity style={currencyCardStyles.closeIcon} activeOpacity={0.6} onPress={()=>state.setCurrentCurrency(undefined)}>
                <Image source={CurrencyClose}/>
            </TouchableOpacity>
        </View>
    };

    const getCountriesItems = () => {
        return state.countries.map(c => ({
            label: c.name,
            value: c._id,
        }))
    };

    const getCurrenciesItems = () => {
        return state.currencies.map(c => ({
            label: c.name,
            value: c._id,
        }))
    };

    const onCountryChange = (value: string) => {
        const country: Country | undefined = state.countries.find(c => c._id === value);
        state.setCurrentCountry(country);
    };

    const onCurrencyChange = (value: string) => {
        const currency: Currency | undefined = state.currencies.find(c => c._id === value);
        state.setCurrentCurrency(currency);
    };

    const renderCurrencyCard = () => {
        return <>
            <Close/>
            <View style={currencyCardStyles.container}>
                <Observer>{() => {
                    const currentCountry: Country | undefined = state.currentCountry ? state.currentCountry : state.countries[0];

                    const countries = getCountriesItems();

                    const currencies = getCurrenciesItems();

                    let currentCurrency: Currencies | undefined = state.currentCurrency;
                    if (!currentCurrency) {
                        if (currentCountry !== undefined) {
                            currentCurrency = state.currencies.find(c=>c._id === currentCountry.preferredCurrencyId)
                        }
                    }

                    const preferredCountryValue =
                        currentCountry ? currentCountry._id :
                            undefined;

                    const preferredCurrencyValue =
                        currentCurrency ? currentCurrency._id :
                            currencies.length > 0 ? currencies[0].value :
                                undefined;


                    return <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <SelectInput
                            containerStyle={currencyCardStyles.countrySelectInputContainer}
                            options={countries}
                            value={preferredCountryValue}
                            valueStyle={currencyCardStyles.selectInputValue}
                            onChange={onCountryChange}
                        />
                        <SelectInput
                            containerStyle={currencyCardStyles.currencySelectInputContainer}
                            options={currencies}
                            value={preferredCurrencyValue}
                            valueStyle={currencyCardStyles.selectInputValue}
                            onChange={onCurrencyChange}
                        />
                    </View>
                }}</Observer>
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
