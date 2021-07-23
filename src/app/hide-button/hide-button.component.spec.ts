import { Shallow } from "shallow-render";
import { AppModule } from "../app.module";
import { HideButtonComponent } from "./hide-button.component";

describe('HideButtonComponent', () => {
  let shallow: Shallow<HideButtonComponent>;

  beforeEach(() => {
    shallow = new Shallow(
      HideButtonComponent,
      AppModule
    );
  });

  it('should match snapshot', async () => {
    const { instance } = await shallow.render();
    expect(instance).toMatchSnapshot();
  })
});
