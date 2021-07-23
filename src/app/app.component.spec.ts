import { of } from "rxjs";
import { Shallow } from "shallow-render";
import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";
import { QUOTES } from "./mocks/mock-quotes";
import { QuotesService } from "./services/quotes/quotes.service";

describe('AppComponent', () => {
  let shallow: Shallow<AppComponent>;

  beforeEach(() => {
    shallow = new Shallow(
      AppComponent,
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

  it('should match snapshot', async () => {
    const { fixture } = await shallow.render();

    expect(fixture).toMatchSnapshot();
  })

  describe('Adding 2 values', () => {
    it('should return 4', async () => {
      const{inject, instance} = await shallow.render();
      expect(instance.adding(2,2)).toBe(4);
    })
  })

  describe('changing showForm status', () => {
    it('should be false by default', async () => {
      const{inject, instance} = await shallow.render();
      expect(instance.showForm).toBeFalsy();
    });
    it('should change "showForm" to true', async () => {
      const{inject, instance} = await shallow.render();
      instance.onShowForm();
      expect(instance.showForm).toBeTruthy();
    });
  })

});
