import { CURRENT_YEAR, } from "../config/constants"

const Footer = () => {
    return (
        <footer className="flex fixed bottom-0 border border-solid border-black">
            {`Copyright ${CURRENT_YEAR} Konstantin Bork`}
        </footer>
    )
}

export default Footer