import {StyleSheet, ViewStyle} from "react-native";

const cardStyle: ViewStyle = {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    padding: 16,
};

const roundButton: ViewStyle = {
    width: 40,
    height: 40,
};

const styles = StyleSheet.create({
    saveAreaView: {
        flex: 1,
        backgroundColor: '#F6F7F8',
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    scrollViewContentContainerStyle: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        padding: 16,
    },
    stub: {
        flex: 1,
    },
});

const currencyCardStyles = StyleSheet.create({
    container: {
        ...cardStyle,
        minHeight: 162,
    },
    closeContainer: {
        alignSelf: 'center',
        alignItems: 'center',
    },
    closeBackground: {
    },
    closeIcon: {
        position: 'absolute',
        top: 16,
    },
    selectInputValue: {
        color: '#505B76'
    },
    countrySelectInputContainer: {
        flex: 1,
        marginRight: 8,
    },
    currencySelectInputContainer: {
        flex: 1,
        marginLeft: 8,
    },
});

const bottomCardStyles = StyleSheet.create({
    container: {
        ...cardStyle,
        marginTop: 16,
        flexDirection: 'row',
        borderRadius: 76,
    },
    actionButtonsContainer: {
        flex: 1,
    },
    actionButton: {
        marginRight: 10,
    },
    browserButton: {
    },
});

export default styles;

export {
    currencyCardStyles,
    bottomCardStyles,
    roundButton,
};
