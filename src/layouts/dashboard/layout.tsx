/* eslint-disable */
import TopBar from "./TopBar"

export const Layout = ({ children }: any) => {
    return (
        <>
            <TopBar />
            {children}
        </>
    )
}