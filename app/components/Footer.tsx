export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          © {new Date().getFullYear()} تمامی حقوق مادی و معنوی این وب‌سایت برای
          <span className="font-semibold"> تیم ربات پرشین </span>
          محفوظ است.
        </p>
      </aside>
    </footer>
  );
}
