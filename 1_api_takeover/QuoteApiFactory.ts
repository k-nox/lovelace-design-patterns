import IQuoteApi from './IQuoteApi';
import Dadaptor from './Dadaptor';

export default class QuoteApiFactory {
    public static makeQuoteApi(): IQuoteApi {
        return new Dadaptor();
    }
};
