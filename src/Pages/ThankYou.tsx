import { Button } from "@/components/ui/button"
import { useNavigate } from '@tanstack/react-router'
function ThankYou(){
    const navigate = useNavigate()
    const handleContinue = () => {
    setTimeout(() => {
      navigate({ to: '/' }) 
    }, 500)
  }

    return(
        <div className="flex">
            <div className="bg-gradient-to-br from-[#2b074a] via-[#1a0e33] to-[#3b0f2f] w-lg h-screen p-4 p-8">
                <div className="flex flex-col gap-10 ">
                    <img
              className="absolute top-15  left-40 "
              src="./images/bg-card-front.png"
              alt="Front Card"
            />

            <div>
              <img
                src="./images/card-logo.svg"
                alt="card logo"
                className="absolute top-20  left-50 "
              />
              <div className=" gap-5 absolute top-45  left-50 text-4xl text-white font-light">
                <h1>
                 0000 0000 0000 0000
                </h1>
              </div>
              <div className=" gap-5 absolute top-60  left-50 text-xl text-white font-light">
                <h1>
                 JANE APPLESEED
                </h1>
              </div>
              <div className=" gap-5 absolute top-62  left-125 text-sm text-white font-light">
                <h1>
                  MM/YY
                </h1>
              </div>
            </div>
            <div>
              <img
                className="absolute top-85  left-55"
                src="./images/bg-card-back.png"
                alt="Back Card"
              />
              <div className="absolute top-113  left-147 text-sm text-white font-bold">
               <h1>000</h1>
              </div>
            </div>
            </div>
            

            </div>
            <div className="w-90 mx-auto my-50  text-center space-y-5 p-5">
                <div className="flex items-center justify-center">
                    <img src="./images/icon-complete.svg" alt="check icon" />
                </div>
                <h1 className="text-purple-900 text-2xl font-bold">Thank You!</h1>
                <p className="font-light">We've added your card details</p>
                <Button
                 onClick={handleContinue}
                  className="text-white font-bold bg-purple-900 px-4 py-2  border border-gray-300 rounded-md w-full"
                >
                  Continue
                </Button>


            </div>
        </div>
    )
}
export default ThankYou;
 