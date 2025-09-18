import { plans } from "../data/config";
import Plan from "./Plan";
import { admins } from "../data/config";
export default function PricingPlans() {
  const currentAdmin = admins[Math.floor(Math.random() * admins.length)];

  return (
    <div id="PricingPlans" className="p-4 font-regular mt-10">
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          پلن‌های ربات پرشین
        </h2>
        <p className="text-gray-500 text-base md:text-lg">
          انتخاب کنید: نسخه رایگان برای شروع، یا نسخه حرفه‌ای با امکانات کامل و
          پشتیبانی ۲۴ ساعته.
        </p>
      </div>

      <div className="flex items-start gap-4 justify-evenly flex-wrap">
        {plans.map((plan) => (
          <Plan admin={currentAdmin} plan={plan} key={plan.price} />
        ))}
      </div>
    </div>
  );
}
