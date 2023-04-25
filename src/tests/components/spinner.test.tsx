import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import Spinner from "@/components/Spinner";

describe("Spinner", () => {
  it("should render currectly", () => {
    const { container } = renderWithTheme(<Spinner isHidden={true} />);

    expect(screen.getByLabelText("loader")).toBeInTheDocument();

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        display: block;
        margin: 15px auto;
        position: relative;
        background: #29292E;
        box-shadow: -24px 0 #29292E, 24px 0 #29292E;
        box-sizing: border-box;
        -webkit-animation: shadowPulse 1.5s linear infinite;
        animation: shadowPulse 1.5s linear infinite;
      }

      <div>
        <span
          aria-hidden="true"
          aria-label="loader"
          class="c0"
          role="loader"
        />
      </div>
    `);
  });
});
