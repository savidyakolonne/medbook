import logo from "../assets/logo.png"

const Footer = () => {
    return(
        <div className="mx-auto flex max-w-6xl items-center px-4 py-4">
            <div>
                <img src={logo} alt="medbook logo" width={100}/>
            </div>

            <div className="flex justify-center items-center">
                <h1>© 2026 MedBook All right recevied</h1>
            </div>
        </div>
    )
}

export default Footer ; 