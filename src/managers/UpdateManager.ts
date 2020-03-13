import IUpdateManager from './IUpdateManager';
import {state} from 'store';
import Country from "entities/Country";
import {action} from "mobx";
import Currency from "entities/Currency";

export default class UpdateManager implements IUpdateManager {
  constructor(
  ) {}

  async updateCountries() {
    const response = await fetch<>('https://api.raino.app/countries');

    const json = await response.json();

    const items: Country[] = json.items.map(it =>({ISO: it.ISO, _id: it._id, name: it.translations.en, preferredCurrencyId: it.preferredCurrency.id}));

    this.setCountries(items);
  }

  async updateCurrencies() {
    const response = await fetch<>('https://api.raino.app/currencies');

    const json = await response.json();

    const items: Currency[] = json.items.map(it =>({_id: it._id, name: it.translations.en}));

    this.setCurrencies(items);
  }

  @action
  private setCountries(countries: Country[]) {
    state.countries = countries;
  }

  @action
  private setCurrencies(currencies: Currency[]) {
    state.currencies = currencies;
  }
}
