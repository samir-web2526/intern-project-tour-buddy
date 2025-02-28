const Payment = () => {
  return (
    <div className="mx-6">
      <h1 className="text-3xl font-medium mb-10">Payment</h1>
      <p className="text-3xl mb-12">Choose Your Method</p>
      <div className="grid md:grid-cols-3 md:gap-12">
        <div className="col-span-2">
          <div className="flex flex-col mb-2">
            <label className="font-medium mb-2" htmlFor="">Name:</label>
            <input className="bg-base-300 py-1 pl-5 rounded" placeholder="Enter Name" type="text" name="" id="" />
          </div>
          <div className="flex flex-col mb-2">
            <label className="font-medium mb-2" htmlFor="">Transaction Id:</label>
            <input className="bg-base-300 py-1 pl-5 rounded" placeholder="Enter Tnx Id" type="text" name="" id="" />
          </div>
          <div className="flex flex-col mb-2">
            <label className="font-medium mb-2" htmlFor="">Phone Number:</label>
            <input className="bg-base-300 py-1 pl-5 rounded" placeholder="Enter Phone Number" type="text" name="" id="" />
          </div>
          <div className="flex flex-col mb-2">
            <label className="font-medium mb-2" htmlFor="">Pin Code:</label>
            <input className="bg-base-300 py-1 pl-5 rounded" placeholder="Enter Pin" type="text" name="" id="" />
          </div>
        </div>
        <div>
          <img src="/images/payment.png" alt="" />
        </div>
      </div>
      <div>
        <h1 className="font-medium mt-6">Select Method:</h1>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-4 mb-6 ml-6">
          <div className="bg-[#7BBCB0] rounded-full py-1 text-center font-medium hover:bg-green-200">
            <h1>Bkash</h1>
          </div>
          <div className="bg-[#7BBCB0] rounded-full py-1 text-center font-medium hover:bg-green-200">
            <h1>Nogod</h1>
          </div>
          <div className="bg-[#7BBCB0] rounded-full py-1 text-center font-medium hover:bg-green-200">
            <h1>UPAY</h1>
          </div>
          <div className="bg-[#7BBCB0] rounded-full py-1 text-center font-medium hover:bg-green-200">
            <h1>VISA</h1>
          </div>
          <div className="bg-[#7BBCB0] rounded-full py-1 text-center font-medium hover:bg-green-200">
            <h1>MasterCard</h1>
          </div>
          <div className="bg-[#7BBCB0] rounded-full py-1 text-center font-medium hover:bg-green-200">
            <h1>Others</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-items-center mb-6">
        <div className="flex justify-center mb-6">
          <h1 className=" bg-black text-white py-2 px-12 hover:bg-blue-300 rounded-full">
            Confirm Payment
          </h1>
        </div>

        <div className="md:w-[700px]">
          <div className="grid grid-cols-4 md:grid-cols-9 gap-2">
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/ab.png"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/bankasia.jpg"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/bkash.jpg"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/brac.png"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/citytouch.png"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/dbl.jpg"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/firstcash.jpg"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/fsib.jpg"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/ipay.png"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/islamibank.png"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/islamiwallet.jpg"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/imcb.jpg"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/modhumoti.png"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/mtb.jpg"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/mycash.png"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/nogodlogo.jpg"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/cashq.png"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/rocketlogo.png"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/southeastbank.jpg"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/surecash.jpg"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/tappay.jpg"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/union.png"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/upaylogo.png"
              alt=""
            />
            <img
              className="border shadow-sm rounded-xl w-18 h-18"
              src="/images/wallet.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
