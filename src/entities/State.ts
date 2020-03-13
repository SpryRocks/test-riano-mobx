import {action, observable} from 'mobx';
import Country from "entities/Country";
import Currency from "entities/Currency";

export default class State {
  @action init() {
    // FIXME: find a way to initialize mobx object
    // noinspection BadExpressionStatementJS
    this.countries;
  }

  @observable
  countries: Country[] = [];

  @observable
  currentCountry: Country | undefined;

  @observable
  currencies: Currency[] = [];

  @observable
  currentCurrency: Currency | undefined;

  @action
  setCurrentCountry(currentCountry: Country | undefined) {
    this.currentCountry = currentCountry;
  }

  @action
  setCurrentCurrency(currentCurrency: Currency | undefined) {
    this.currentCurrency = currentCurrency;
  }
}
