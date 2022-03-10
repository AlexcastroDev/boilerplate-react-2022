import { FunctionComponent } from "react"
import { StyledContainer } from "./Layout.styles"

export const Layout: FunctionComponent = ({ children }) => {

    return (
        <StyledContainer>
            { children }
        </StyledContainer>
    )
}