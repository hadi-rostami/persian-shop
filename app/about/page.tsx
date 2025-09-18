import { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره ما | ربات پرشین",
  description:
    "آشنایی با تیم ربات پرشین؛ سازنده اصلی و ادمین‌های فروش و پشتیبانی. ما یک تیم کوچک و پرانرژی هستیم که بهترین ابزار مدیریت گروه‌های روبیکا را برای شما فراهم می‌کنیم.",
  openGraph: {
    title: "درباره ما | ربات پرشین",
    description:
      "سازنده و تیم ربات پرشین را بشناسید؛ ربات هوشمند مدیریت گروه‌های روبیکا با پشتیبانی و فروش اختصاصی. همراه با سه ادمین فروش و پشتیبانی فعال.",
    url: "https://persian-shop.vercel.app/about",
    siteName: "ربات پرشین",
    images: [
      {
        url: "https://persian-shop.vercel.app/images/about-image.png", // بهتره عکس تیم یا لوگو خاص درباره ما باشه
        width: 1200,
        height: 630,
        alt: "تیم ربات پرشین",
      },
    ],
    locale: "fa-IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "درباره ما | ربات پرشین",
    description:
      "با تیم ربات پرشین بیشتر آشنا شوید؛ سازنده اصلی و سه ادمین فروش و پشتیبانی همیشه کنار شما هستند.",
    images: ["https://persian-shop.vercel.app/images/about-image.png"],
  },
};

function page() {
  return (
    <section className="font-regular p-7 flex flex-col-reverse md:flex-row">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-5">درباره ما</h2>
        <p className="text-justify mb-5">
          من <strong>هادی رستمی</strong> هستم، سازنده و برنامه‌نویس اصلی
          <strong> ربات پرشین</strong>. این ربات با هدف ساده‌کردن مدیریت
          گروه‌های روبیکا ساخته شد تا مدیران گروه‌ها بتونن با خیال راحت روی رشد
          جامعه خودشون تمرکز کنن و دیگه درگیر مشکلات روزمره مثل اسپم، پیام‌های
          بی‌ربط و مدیریت دستی اعضا نباشن.
        </p>

        <p className="mb-5">
          ربات <strong>پرشین</strong> امکانات متنوعی مثل مدیریت خودکار پیام‌ها،
          فیلتر کلمات، سرگرمی برای اعضا، قفل و باز کردن گروه، ارسال اعلان‌های
          مهم و بسیاری قابلیت‌های دیگه داره. ما همیشه تلاش می‌کنیم با اضافه کردن
          ویژگی‌های جدید، تجربه‌ای متفاوت و کاربردی به کاربران بدیم.
        </p>

        <h3 className="text-lg font-medium mb-2">چرا ربات پرشین؟</h3>
        <p>
          ما اعتقاد داریم که یک ربات خوب باید هم <strong>ساده</strong> باشه، هم{" "}
          <strong>سریع</strong>و هم <strong>قابل اعتماد</strong>. به همین خاطر،
          ربات پرشین به صورت مداوم به‌روزرسانی میشه و تیم ما همیشه آماده
          پشتیبانی از کاربران هست.
        </p>

        <h3 className="text-lg font-medium mt-5 mb-2">تیم ما</h3>
        <p>
          گرچه من به عنوان توسعه‌دهنده اصلی ربات پرشین فعالیت می‌کنم، اما بدون
          کمک دوستانم ادامه دادن این مسیر ممکن نبود. تیم ما شامل سه ادمین فروش و
          پشتیبانی هست که همیشه پاسخگوی نیازها و سوالات کاربران هستن:
        </p>
        <ul>
          <li>
            🛒{" "}
            <strong>
              <a className="underline" href="https://rubika.ir/@PBot_Support">
                جواد
              </a>
            </strong>{" "}
            – ادمین فروش و پشتیبانی{" "}
          </li>
          <li>
            🛒{" "}
            <strong>
              <a
                className="underline"
                href="https://rubika.ir/@Sales_admin_2020"
              >
                بهار
              </a>
            </strong>{" "}
            – ادمین فروش و پشتیبانی{" "}
          </li>
          <li>
            🛒{" "}
            <strong>
              <a className="underline" href="https://rubika.ir/@Ms_Nasim">
                نسیم
              </a>
            </strong>{" "}
            – ادمین فروش و پشتیبانی{" "}
          </li>
        </ul>

        <h3 className="text-lg font-medium mt-5 mb-2">ماموریت ما</h3>
        <p>
          ماموریت ما اینه که بهترین ابزار مدیریت گروه در روبیکا رو ارائه بدیم و
          مطمئن بشیم مدیران و اعضا از حضور در گروه‌ها لذت می‌برن. ربات پرشین فقط
          یک ابزار نیست؛ یک دستیار دیجیتالیه که همیشه کنار شماست. ❤️
        </p>
      </div>
      <div className="flex-1">
        <img
          src="/images/about-image.png"
          alt="تصویر ربات مدیریت گروه روبیکا"
        />
      </div>
    </section>
  );
}

export default page;
