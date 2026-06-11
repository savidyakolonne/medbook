import logo from "/logo.png"

const AdminFooter = () => {
    return(
        <>
          <div className="flex justify-center mt-10 md:mt-16 px-4">
            <footer className="bg-[#F8F8F8] text-black w-full max-w-6xl p-6 md:p-8 rounded-t-3xl md:rounded-t-4xl">
              <div className="mx-auto max-w-6xl px-2 md:px-6 py-6 md:py-10">
                <div className="grid gap-8 md:grid-cols-3 text-center md:text-left">

                  {/* Logo & Description */}
                  <div className="flex flex-col items-center md:items-start">
                    <div to="/">
                      <img src={logo} alt="MedBook Logo" width={150} className="md:w-[120px]" />
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <div className="flex flex-col gap-2 text-sm md:text-base">
                      <div className="hover:text-cyan-400 cursor-pointer">Privacy & Policies</div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div>
                    <div className="space-y-2 text-sm">
                      <p>✉️ support@medbook.com</p>
                    </div>
                  </div>

                </div>

                {/* Bottom */}
                <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm text-black">
                  © {new Date().getFullYear()}{" "}
                  <div className="text-blue-800 hover:underline">
                    MedBook
                  </div>
                  . All Rights Reserved.
                </div>
              </div>

            </footer>  
          </div>
        </>
    )
}

export default AdminFooter;