import HomeHeroTextAnim from "./HomeHeroTextAnim";

export default function HomeHero() {
  return (
    <div className="flex md:flex-row p-4 font-regular items-center flex-col-reverse">
      <div className="flex-1">
        <h1 className="lg:text-2xl font-medium flex gap-2 transition-all sm:text-xl text-lg">
          <HomeHeroTextAnim />
          <span>ربات مدیریت گروه روبیکا</span>
        </h1>

        <p className="my-5">
          با ربات ما می‌توانید گروه‌های روبیکا را به‌سادگی مدیریت کنید، اعضا را
          سرگرم کرده و از پیام‌های اضافی و اسپم‌ها راحت شوید. تجربه‌ای امن و
          خودکار برای همه اعضا!
        </p>

        <div className="flex gap-3">
          <a
            href="/freebot"
            className="btn btn-success"
            title="ربات رایگان روبیکا"
          >
            ربات رایگان
          </a>
          <a
            href="/vipbot"
            className="btn btn-soft"
            title="ربات پیشرفته روبیکا"
          >
            ربات پیشرفته
          </a>
        </div>
      </div>

      <div className="flex-1">
        <img src="/images/home-hero.png" alt="تصویر ربات مدیریت گروه روبیکا" />
      </div>
    </div>
  );
}
