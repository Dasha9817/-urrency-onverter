export class CurrencyService {
    API_KEY = '2CwfC83O4DKvpyv2r7j30PK3DvCWMyeLI60AnH7a';

    BASE_URL = 'https://api.freecurrencyapi.com/v1/';

    CURRENCIES_URI = 'currencies'
    CONVERTER_URI = 'latest'

    async getCurrency () {
        const url = `${this.BASE_URL}${this.CURRENCIES_URI}?apikey=${this.API_KEY}`;
        const response = await fetch(url)
        const result = await response.json();
        return Object.keys(result.data)
    }

    async convert (num, from, to) {
        const url = `${this.BASE_URL}${this.CONVERTER_URI}?apikey=${this.API_KEY}&base_currency=${from}&currencies=${to}`;
        const response = await fetch(url)
        const result = await response.json();
        return num * result.data[to]
    }


    defaultCurrency () {
        return "USD"
    }
}
