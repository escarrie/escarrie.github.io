/* eslint-disable */
import TopBar from "./TopBar"
// import Footer from "./Footer"

export const Layout = ({ children }: any) => {
    return (
        <>
            <TopBar />
            {children}
            {/* <Footer /> */}
        </>
    )
}