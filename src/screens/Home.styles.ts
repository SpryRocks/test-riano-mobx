import {StyleSheet, ViewStyle} from "react-native";

const cardStyle: ViewStyle = {
    backgroundColor: '#ffffff',
    borderRadius: 76,
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
    }
});

const bottomCardStyles = StyleSheet.create({
    container: {
        ...cardStyle,
        marginTop: 16,
        flexDirection: 'row',
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

