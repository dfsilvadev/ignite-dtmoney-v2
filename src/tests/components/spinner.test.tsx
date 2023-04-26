import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import Spinner from "@/components/Spinner";

describe("Spinner", () => {
  it("should render currectly", () => {
    const { container } = renderWithTheme(<Spinner isHidden={true} />);

    expect(screen.getByLabelText("loader")).toBeInTheDocument();

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        padding: 1rem;
        display: grid;
        place-items: center;
      }

      .c1 {
        width: 20px;
        height: 20px;
        border: 3px solid #29292E;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        -webkit-animation: rotation 1s linear infinite;
        animation: rotation 1s linear infinite;
      }

      <div>
        <span
          class="c0"
        >
          <span
            aria-label="loader"
            class="c1"
            role="loader"
          />
        </span>
      </div>
    `);
  });
});
