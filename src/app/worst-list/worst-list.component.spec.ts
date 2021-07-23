import { Shallow } from "shallow-render";
import { AppModule } from "../app.module";
import { WorstListComponent } from "./worst-list.component"

describe('WorstListComponent', () => {
  let shallow: Shallow<WorstListComponent>;

  beforeEach(() => {
    shallow = new Shallow(
      WorstListComponent,
      AppModule
    );
  });

  it('should match snapshot', async () => {
    const{instance} = await shallow.render();
    expect(instance).toMatchSnapshot();
  })
})
