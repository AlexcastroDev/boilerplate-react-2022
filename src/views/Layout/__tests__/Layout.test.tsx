import { cleanup, render, screen } from "@testing-library/react"
import { Layout } from ".."

describe('Layout View', () => {
    beforeEach(() => {
        cleanup()
    })

    it("should render Layout", () => {
        render(<Layout />)
        expect(screen).toMatchSnapshot()
    })
 })