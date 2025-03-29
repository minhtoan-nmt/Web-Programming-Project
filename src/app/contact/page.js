import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="container mx-auto p-6">
      {/* Đường dẫn */}
      <nav className="text-gray-500 mb-4">
        <span>Trang chủ / </span>
        <span className="text-black font-semibold">Liên hệ</span>
      </nav>

      {/* Lưới giao diện */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Thông tin liên hệ */}
        <div className="bg-white shadow-lg p-6 rounded-lg border">
          <div className="mb-4">
            <h3 className="text-red-500 text-lg font-semibold flex items-center">
              📞 Gọi tới chúng tôi
            </h3>
            <p className="text-gray-600">
              Làm việc 24/7, 7 ngày trong tuần. <br />
              Số điện thoại: <span className="font-semibold">+88091112222</span>
            </p>
          </div>
          <div>
            <h3 className="text-red-500 text-lg font-semibold flex items-center">
              ✉ Viết tới chúng tôi
            </h3>
            <p className="text-gray-600">
              Viết vào ô nội dung và chúng tôi sẽ liên hệ lại trong vòng 24 giờ.
            </p>
            <p className="font-semibold">Emails:</p>
            <p className="text-gray-600">customer@exclusive.com</p>
            <p className="text-gray-600">support@exclusive.com</p>
          </div>
        </div>

        {/* Form liên hệ */}
        <ContactForm />
      </div>
    </div>
  );
}
