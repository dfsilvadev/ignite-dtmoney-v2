import { renderWithTheme } from "@/utils/tests";

import { Container } from "@/components";

describe("Container", () => {
  it("should render the Container correctly", () => {
    const { container } = renderWithTheme(
      <Container>
        <span>DT Money</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyle({
      width: "100%",
      maxWidth: "70rem",
      margin: "0 auto",
      padding: "0 1rem"
    });

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 70rem;
        margin: 0 auto;
        padding: 0 1rem;
      }

      <header
        class="c0"
      >
        <span>
          DT Money
        </span>
      </header>
    `);
  });
});
