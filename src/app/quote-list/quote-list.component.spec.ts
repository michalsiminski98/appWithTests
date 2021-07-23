import { of } from 'rxjs';
import { Shallow } from 'shallow-render';
import { AppModule } from '../app.module';
import { QUOTES } from '../mocks/mock-quotes';
import { QuotesService } from '../services/quotes/quotes.service';
import { QuoteListComponent } from './quote-list.component';

describe('QuoteListComponent', () => {
  let shallow: Shallow<QuoteListComponent>;

  beforeEach(() => {
    shallow = new Shallow(QuoteListComponent, AppModule).provideMock([
      {
        provide: QuotesService,
        useValue: {
          quotes$: of(QUOTES),
        },
      },
    ]);
  });

  it('should match snapshot', async () => {
    const { fixture } = await shallow.render();
    expect(fixture).toMatchSnapshot();
  });

  describe('changing rate of quote', () => {
    it('adds rate to quote', async () => {
      const { inject, instance } = await shallow.render();
      const service = inject(QuotesService);
    });
  });
});
