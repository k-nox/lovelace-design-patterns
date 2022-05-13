import DadJokeApi from './DadJokeApi';
import IQuoteApi from './IQuoteApi';
import Quote from './Quote';

export default class Dadaptor implements IQuoteApi {
    private dadJokeApi: DadJokeApi;

    public constructor() {
        this.dadJokeApi = new DadJokeApi;
    }

    async getQuote(): Promise<Quote> {
        const joke = await this.dadJokeApi.retrieveJoke();
        return new Quote(joke.joke, 'Anonymous Dad');
    }
}
