

const TermsAndConditions = () => {
    return (
        <div>
             <h1 className="text-slate-800 font-medium text-xl mb-3">
          Terms and Conditions:
        </h1>
        <p>
          <ol className="space-y-3 px-4 list-decimal ">
            <li className="text-slate-800 font-medium text-md">
              Order Cancellation Policy:
              <p className="text-neutral-500 text-base">
                Once an order is placed and confirmed, cancellations are not
                allowed. Please double-check your order before completing the
                payment.
              </p>
            </li>
            <li className="text-slate-800 font-medium text-md">
              Delivery and Pick-Up
              <p className="text-neutral-500 text-base">
                Delivery times may vary based on location and order volume. Any
                delays caused by unforeseen circumstances will be communicated
                promptly. Customers are advised to provide accurate delivery
                details.
              </p>
            </li>
            <li className="text-slate-800 font-medium text-md">
              Food Quality Assurance
              <p className="text-neutral-500 text-base">
                Our biryani is freshly prepared daily. In the rare event of
                dissatisfaction with the quality, please report it within 2
                hours of delivery, accompanied by photos for review.
              </p>
            </li>
            <li className="text-slate-800 font-medium text-md">
              Refund Policy
              <p className="text-neutral-500 text-base">
                Refunds are only applicable for undelivered or incorrect orders.
                Issues must be reported within 24 hours of receiving the
                delivery.
              </p>
            </li>
          </ol>
        </p>
        </div>
    );
};

export default TermsAndConditions;