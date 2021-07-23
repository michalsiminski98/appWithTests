import { Shallow } from "shallow-render"
import { AppModule } from "../app.module";
import { BestQuoteComponent } from "./best-quote.component"

describe('bestQuoteComponent', () =>{
  let shallow: Shallow<BestQuoteComponent>;

  beforeEach(() => {
    shallow = new Shallow(
    BestQuoteComponent,
    AppModule
    )
  })

    it('should match snapshot', async () => {
      const{instance} = await shallow.render();
      expect(instance).toMatchSnapshot();
    })

})
