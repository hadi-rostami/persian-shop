import { IoMdCheckmark } from "react-icons/io";
import type { Plan } from "../types";
import { IoTimeOutline } from "react-icons/io5";
import Link from "next/link";

export default function Plan({ plan, admin }: { plan: Plan; admin: string }) {
  return (
    <div
      className={`card w-80 ${
        plan.badge ? "bg-primary text-primary-content" : " bg-base-300"
      } shadow-lg`}
    >
      <div className="card-body">
        {plan.badge && (
          <span className="badge badge-xs badge-warning">{plan.badge}</span>
        )}
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">{plan.planName}</h2>
          <span className="text-lg">{plan.price}</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {plan.features.map((feature, index) => (
            <li key={index} className={`${!feature.available && "opacity-50"}`}>
              <IoMdCheckmark
                className={`size-4 me-2 inline-block ${
                  feature.available ? "text-success" : "text-base-content/50"
                }`}
              />
              <span className={`${!feature.available && "line-through"}`}>
                {feature.text}
              </span>
            </li>
          ))}

          <li>
            <IoTimeOutline className={`size-4 me-2 inline-block `} />
            <span>مدت زمان: {plan.duration}</span>
          </li>
        </ul>
        <div className="mt-6">
          <Link
            href={admin}
            className={`btn ${
              !plan.badge && "btn-primary"
            } btn-block rounded-md`}
          >
            {plan.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
