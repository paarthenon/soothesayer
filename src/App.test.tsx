import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { Container } from "./Container"

test("renders learn react link", () => {
  render(<Container />)
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})
