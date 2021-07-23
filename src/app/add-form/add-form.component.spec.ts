import { of } from "rxjs";
import { Shallow } from "shallow-render"
import { AppModule } from "../app.module";
import { QUOTES } from "../mocks/mock-quotes";
import { QuotesService } from "../services/quotes/quotes.service";
import { AddFormComponent } from "./add-form.component"

describe('AddFormComponent', () => {
  let shallow: Shallow<AddFormComponent>;

  beforeEach(() => {
    shallow = new Shallow(
      AddFormComponent,
      AppModule
    ).provideMock([
      {
        provide: QuotesService,
        useValue: {
          createQuote: jest.fn()
        }
      }
  ]);
  });

  it('should match snapshot', async () => {
    const{fixture} = await shallow.render();
    expect(fixture).toMatchSnapshot();
  });
  describe('addQuote button', () => {
    it('NOT call service createQuote function after input author NOT refill', async () => {
      const { inject, find, fixture, instance } = await shallow.render();
      const service = inject(QuotesService);
      instance.quoteForm.controls.quotation.patchValue('TestTestTest');
      fixture.detectChanges();
      find('[data-test=create-button]').nativeElement.click();
      expect(service.createQuote).not.toHaveBeenCalled();
    });

    it('NOT call service createQuote function after input quotation NOT refill', async () => {
      const { inject, find, fixture, instance } = await shallow.render();
      const service = inject(QuotesService);
      instance.quoteForm.controls.author.patchValue('TestTestTest');
      fixture.detectChanges();
      find('[data-test=create-button]').nativeElement.click();
      expect(service.createQuote).not.toHaveBeenCalled();
    });

    it('call service createQuote function after input author and quotation refill', async () => {
    const { find, inject, fixture } = await shallow.render();
    const authorInput = find('[data-test="author-input"]').nativeElement;
    authorInput.value = 'TestTestTest';
    authorInput.dispatchEvent(new Event('input'));
    const quotationInput = find('[data-test="quotation-input"]').nativeElement;
    quotationInput.value = 'TestTestTest';
    quotationInput.dispatchEvent(new Event('input'));
    const service = inject(QuotesService);
    fixture.detectChanges();
    find('[data-test=create-button]').nativeElement.click();
    expect(service.createQuote).toHaveBeenCalled();
    });
  });
});
