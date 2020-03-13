export default interface IUpdateManager {
    updateCountries(): Promise<void>;
    updateCurrencies(): Promise<void>;
}
