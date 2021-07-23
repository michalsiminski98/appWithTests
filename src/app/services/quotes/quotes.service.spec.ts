import { QuotesService } from './quotes.service';
import { Quote } from '../../interfaces/quote';
import { QUOTES } from '../../mocks/mock-quotes';

describe('QuotesService', () => {
  let service: QuotesService;
  let result: Quote[];

  beforeEach(() => {
    service = new QuotesService();
    result = [];

    service.quotes$.subscribe((quotes) => {
      result = quotes;
    });
  });

  describe('quotes$', () => {
    it('should be initialised to four quotes', () => {
      expect(result).toEqual(QUOTES);
    });
  });

  describe('worstQuotes$', () => {
    it('should return quootes with rate below 0', () => {
      let worstQuotes: Quote[] = [];

      service.worstQuotes$.subscribe((quotes) => {
        worstQuotes = quotes;
      });

      service.quotesSource.next([]);

      expect(worstQuotes).toEqual([]);

      service.quotesSource.next([{ rate: 1 }] as Quote[]);

      expect(worstQuotes).toEqual([]);

      service.quotesSource.next([{ rate: 0 }] as Quote[]);

      expect(worstQuotes).toEqual([]);

      service.quotesSource.next([{ rate: -1 }] as Quote[]);

      expect(worstQuotes).toEqual([{ rate: -1 }]);
    });
  });

  describe('bestQuote$', () => {
    it('should return quote with the highest rate', () => {
      let bestQuote: Quote = {} as Quote;

      service.bestQuote$.subscribe((quote) => {
        bestQuote = quote;
      });

      service.quotesSource.next([{ rate: 5 }, { rate: 6 }] as Quote[]);

      expect(bestQuote).toEqual({ rate: 6 });
    });
  });

  describe('createQuote()', () => {
    it('should create a new quote', () => {
      jest.spyOn(service, 'createQuoteId').mockReturnValue(42);

      service.createQuote('Tomasz', 'Meaning of universe');

      expect(result.length).toEqual(5);

      expect(result[0]).toEqual({
        id: 42,
        rate: 0,
        author: 'Tomasz',
        quotation: 'Meaning of universe',
      });
    });
  });

  describe('addingRate()', () => {
    it('should add rate to quote', () => {
      const prevRate = result[0].rate;

      service.addingRate(result[0].id);

      expect(result[0].rate).toEqual(prevRate + 1);
    });
  });

  describe('subtracting Rate()', () => {
    it('should add rate to quote', () => {
      const prevRate = result[0].rate;

      service.subtractingRate(result[0].id);

      expect(result[0].rate).toEqual(prevRate - 1);
    });
  });
});
