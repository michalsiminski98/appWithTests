import { of } from "rxjs";
import { Shallow } from "shallow-render";
import { AppModule } from "../app.module";
import { QUOTES } from "../mocks/mock-quotes";
import { QuotesService } from "../services/quotes/quotes.service";
import { QuoteListComponent } from "./quote-list.component";

describe('QuoteListComponent', () => {
  let shallow: Shallow<QuoteListComponent>;

  beforeEach(() => {
    shallow = new Shallow(
      QuoteListComponent,
      AppModule
    ).provideMock([
      {
        provide: QuotesService,
        useValue: {
          quotes: jest.fn(() => of(QUOTES))
        }
      }
  ]);
  });

  it('should create', async () => {
    const { instance } = await shallow.render();

    expect(instance).toBeTruthy();
  })
});
