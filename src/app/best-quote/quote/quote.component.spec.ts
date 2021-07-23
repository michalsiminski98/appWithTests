import { Shallow } from "shallow-render"
import { AppModule } from "src/app/app.module";
import { QuoteComponent } from "./quote.component"

describe('QuoteComponent', () =>{
  let shallow: Shallow<QuoteComponent>;

  beforeEach(() => {
    shallow = new Shallow(
      QuoteComponent,
      AppModule
    )
  });

  it('should match snapshot', async () => {
    const{instance} = await shallow.render();
    expect(instance).toMatchSnapshot();
  })
});
