import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";

function CardDetails() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm();
  const onSubmit = async () => {
    // TODO: submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
    setTimeout(() => {
      navigate({ to: "/thankyou" });
    }, 500);
  };

  const cardholderName = watch("name", "");
  const cardNumber = watch("number", "");
  const expiryDate = watch("date", "");
  const cvc = watch("cvc", "");

  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen w-full">
        <div className="bg-gradient-to-br from-[#2b074a] via-[#1a0e33] to-[#3b0f2f] w-lg  h-screen p-4 p-8">
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
              <div className="gap-5 absolute top-45 left-50 text-4xl text-white font-light">
                <h1>
                  {cardNumber && cardNumber.trim()
                    ? cardNumber
                        .replace(/\s+/g, "") // remove spaces
                        .replace(/(.{4})/g, "$1 ") // group into 4s
                        .trim()
                    : "0000 0000 0000 0000"}
                </h1>
              </div>
              <div className=" gap-5 absolute top-60  left-50 text-xl text-white font-light">
                <h1>
                  {cardholderName && cardholderName.trim()
                    ? cardholderName.toUpperCase()
                    : "JANE APPLESEED"}
                </h1>
              </div>
              <div className=" gap-5 absolute top-62  left-125 text-sm text-white font-light">
                <h1>
                  {expiryDate && expiryDate.trim() ? expiryDate : "MM/YY"}
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
                <h1>{cvc && cvc.trim() ? cvc.replace(/\D/g, "") : "000"}</h1>
                {/* <h1>000</h1> */}
              </div>
            </div>
          </div>
        </div>
        <div className=" w-90 mx-auto my-35 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 mb-4">
              <p>CARDHOLDER NAME</p>
              <input
                className="px-4 py-2 border border-gray-300 rounded-md w-full placeholder:text-gray-400 "
                type="text"
                placeholder="eg. JANE APPLESEED "
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <p className="text-red-500">{`${errors.name.message}`}</p>
              )}
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <p>CARD NUMBER</p>
              <input
                className="px-4 py-2 border border-gray-300 rounded-md w-full placeholder:text-gray-400 "
                type="text"
                placeholder="0000 0000 0000 0000 "
                {...register("number", {
                  required: "Number is required",
                  minLength: {
                    value: 16,
                    message:
                      "Card Number must be at least 16 characters with a space after four numbers is entered ",
                  },
                })}
              />
              {errors.number && (
                <p className="text-red-500">{`${errors.number.message}`}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2 ">
                <p>EXP. DATE (MM/YY)</p>

                <input
                  className="px-4 py-2 border border-gray-300 rounded-md w-full placeholder:text-gray-400 "
                  placeholder="MM/YY"
                  type="text"
                  {...register("date", {
                    required: "Enter the expiry date",
                    minLength: {
                      value: 5,
                      message: "Put the expiry date as MM/YY ",
                    },
                  })}
                />
                {errors.expiryDate && (
                  <p className="text-red-500">{`${errors.expiryDate.message}`}</p>
                )}
              </div>
              <div className="flex flex-col gap-2 ">
                <p>CVC</p>
                <input
                  className="px-4 py-2 border border-gray-300 rounded-md w-full placeholder:text-gray-400 "
                  placeholder="e.g. 123"
                  type="text"
                  {...register("cvc", {
                    required: "CVC is required",
                    minLength: {
                      value: 3,
                      message: "CVC must be at least 3",
                    },
                  })}
                />
                {errors.cvc && (
                  <p className="text-red-500">{`${errors.cvc.message}`}</p>
                )}
              </div>
              <div className="w-90">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="text-white font-bold bg-purple-900 px-4 py-2  border border-gray-300 rounded-md w-full"
                >
                  Confirm
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default CardDetails;
