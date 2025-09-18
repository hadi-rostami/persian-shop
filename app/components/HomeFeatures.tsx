import {
  MdOutlineSecurity,
  MdOutlineSpeed,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";

export default function HomeFeatures() {
  return (
    <section className="p-4 bg-base-200 py-10">
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          چرا ربات مدیریت گروه پرشین؟
        </h2>
        <p className="text-base md:text-md md:text-lg text-gray-500">
          با امکانات پیشرفته، امنیت بالا و سرعت فوق‌العاده، ربات پرشین بهترین
          انتخاب برای مدیریت گروه‌های روبیکاست.
        </p>
      </div>
      <div className=" gap-5 flex flex-wrap">
        <div
          className="flex-1 flex items-center flex-col bg-base-100 rounded-2xl p-4 gap-3 
  transform transition-transform duration-300 hover:rotate-1 hover:-rotate-x-6 hover:scale-105"
        >
          <MdOutlineSpeed className="w-[70px] md:w-[100px] h-[70px] md:h-[100px]" />
          <h4 className="font-medium  text-lg underline">سرعت بالا </h4>
          <p className="text-center font-regular text-sm sm:text-base">
            سرعت بالا در اجرای دستورات و مدیریت گروه‌ها بدون تأخیر.
          </p>
        </div>

        <div
          className="flex-1 flex items-center flex-col bg-base-100 rounded-2xl p-4 gap-3 
  transform transition-transform duration-300 hover:rotate-1 hover:-rotate-x-6 hover:scale-105"
        >
          <MdOutlineSecurity className="w-[70px] md:w-[100px] h-[70px] md:h-[100px]" />
          <h4 className="font-medium  text-md md:text-lg underline"> امنیت کامل </h4>
          <p className="text-center font-regular text-sm sm:text-base">
            امنیت پیشرفته برای جلوگیری از اسپم و مزاحمت در گروه‌ها.
          </p>
        </div>
        <div
          className="flex-1 flex items-center flex-col bg-base-100 rounded-2xl p-4 gap-3 
  transform transition-transform duration-300 hover:rotate-1 hover:-rotate-x-6 hover:scale-105"
        >
          <MdOutlineSupportAgent className="w-[70px] md:w-[100px] h-[70px] md:h-[100px]" />
          <h4 className="font-medium  text-md md:text-lg underline"> پشتیبانی فوری </h4>
          <p className="text-center font-regular text-sm sm:text-base">
            پشتیبانی حرفه‌ای و پاسخگویی سریع به سوالات کاربران.
          </p>
        </div>
        <div
          className="flex-1 flex items-center flex-col bg-base-100 rounded-2xl p-4 gap-3 
  transform transition-transform duration-300 hover:rotate-1 hover:-rotate-x-6 hover:scale-105"
        >
          <Ri24HoursFill className="w-[70px] md:w-[100px] h-[70px] md:h-[100px]" />
          <h4 className="font-medium  text-md md:text-lg underline"> فعالیت دائمی </h4>
          <p className="text-center font-regular text-sm sm:text-base">
            فعالیت ۲۴ ساعته و بدون وقفه برای مدیریت گروه شما.
          </p>
        </div>
      </div>
    </section>
  );
}
