'use client';

import Link from "next/link";
import Sidebar from "../_comhome/Sidebar";
import Banner from "../_comhome/Banner";

const getTitleColor = (name) => {
  switch (name) {
    case "Thời trang":
      return "text-rose-400";
    case "Điện tử":
      return "text-indigo-400";
    case "Gia dụng":
      return "text-teal-400";
    case "Thể thao":
      return "text-emerald-400";
    case "Sức khỏe":
      return "text-red-400";
    case "Học tập":
      return "text-sky-400";
    case "Thực phẩm":
      return "text-yellow-400";
    case "Bài báo":
      return "text-gray-400";
    default:
      return "text-gray-400";
  }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation bar */}

      {/* Main content */}
      <main className="space-y-12 min-h-screen pt-16">
        {/* Category sidebar and product list */}
        <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row px-4 pt-16">
          <aside className="hidden md:block w-full md:w-1/5">
            <Sidebar />
          </aside>
          <div className="w-full md:w-4/5 lg:w-5/6 xl:w-5/6 md:pl-6 mt-6 md:mt-0">
            <Banner />
          </div>
        </section>

        {/* Features */}
        <section className="bg-gray py-16">
          <div className="max-w-screen-xl mx-auto px-6 text-center space-y-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-indigo-400 tracking-normal">
              Bạn sẽ nhận được gì tại <span className="text-indigo-500">RCQ?</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Miễn phí vận chuyển", desc: "Giao hàng miễn phí cho đơn từ 500K trên toàn quốc." },
                { title: "Hỗ trợ 24/7", desc: "Đội ngũ hỗ trợ luôn sẵn sàng giải đáp mọi thắc mắc của bạn." },
                { title: "Ưu đãi thành viên", desc: "Tích lũy điểm và nhận các voucher độc quyền." },
                { title: "Đổi trả dễ dàng", desc: "Hỗ trợ đổi trả sản phẩm trong vòng 7 ngày." },
                { title: "Bảo hành chính hãng", desc: "Cam kết sản phẩm chính hãng từ nhà cung cấp uy tín." },
                { title: "Sản phẩm đa dạng", desc: "Hàng ngàn sản phẩm thuộc nhiều danh mục khác nhau." },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-screen-xl mx-auto px-4 space-y-12">
            <h2 className="text-3xl font-bold text-center text-teal-500">
              Khám phá các danh mục sản phẩm
            </h2>
            <p className="text-lg text-center text-gray-500 mx-auto max-w-2xl">
              Dưới đây là những sản phẩm chất lượng cao được phân loại theo các danh mục khác nhau. Mỗi danh mục mang lại những trải nghiệm và sự tiện lợi đặc biệt, giúp bạn dễ dàng lựa chọn cho nhu cầu của mình.
            </p>

            {[ 
              { name: "Thời trang", desc: "Khám phá bộ sưu tập thời trang mới nhất với các thiết kế hiện đại, từ phong cách năng động trẻ trung đến sự thanh lịch, tinh tế. Chúng tôi mang đến sự đa dạng về kiểu dáng, chất liệu và màu sắc, phù hợp với mọi độ tuổi, giới tính và hoàn cảnh. Dù bạn đi học, đi làm hay dự tiệc, đều có thể dễ dàng tìm thấy trang phục phù hợp để thể hiện cá tính và gu thẩm mỹ của riêng mình.", image: "/image/hom/banner/tttt.jpg" },
              { name: "Điện tử", desc: "Bộ sưu tập các thiết bị điện tử thông minh và tiên tiến nhất hiện nay, bao gồm điện thoại di động, máy tính bảng, tai nghe không dây, laptop hiệu năng cao và phụ kiện công nghệ. Chúng tôi chọn lọc những sản phẩm từ các thương hiệu hàng đầu, đảm bảo tính năng vượt trội, thiết kế hiện đại và độ bền cao. Phù hợp cho cả công việc, học tập và giải trí, giúp cuộc sống bạn trở nên tiện lợi hơn bao giờ hết.", image: "/image/hom/banner/dt.jpg" },
              { name: "Gia dụng", desc: "Cung cấp các thiết bị gia dụng thông minh, tiết kiệm năng lượng và thân thiện với người dùng, từ máy hút bụi, máy giặt, nồi chiên không dầu đến máy lọc không khí. Những sản phẩm này không chỉ giúp tối ưu hóa không gian sống mà còn nâng cao chất lượng cuộc sống hằng ngày, biến công việc nội trợ trở nên nhẹ nhàng và hiệu quả hơn. Thiết kế hiện đại, nhỏ gọn và dễ sử dụng phù hợp cho mọi hộ gia đình.", image: "/image/hom/banner/gd.jpg" },
              { name: "Thể thao", desc: "Chuyên cung cấp trang phục và dụng cụ thể thao chất lượng cao, hỗ trợ bạn trong quá trình rèn luyện thể chất, từ chạy bộ, gym, yoga đến các môn thể thao đồng đội. Sản phẩm được thiết kế với chất liệu thoáng khí, độ bền cao và tính năng bảo vệ cơ thể tối ưu, giúp bạn vận động thoải mái, an toàn và đạt hiệu quả cao nhất. Phù hợp với mọi đối tượng, từ người mới tập đến vận động viên chuyên nghiệp.", image: "/image/hom/banner/tt.jpg" },
              { name: "Sức khỏe", desc: "Danh mục sản phẩm chăm sóc sức khỏe toàn diện, bao gồm thực phẩm chức năng, vitamin, máy đo huyết áp, máy massage và các thiết bị hỗ trợ sức khỏe gia đình. Các sản phẩm được chọn lọc kỹ lưỡng nhằm nâng cao sức đề kháng, cải thiện thể chất và mang đến sự an tâm trong chăm sóc sức khỏe hằng ngày. Đây là lựa chọn lý tưởng để bảo vệ sức khỏe cho cả bạn và những người thân yêu.", image: "/image/hom/banner/sk.webp" },
              { name: "Học tập", desc: "Tổng hợp các sản phẩm phục vụ nhu cầu học tập và làm việc như sách vở, bút viết, văn phòng phẩm, thiết bị học online, tai nghe và bàn phím. Những sản phẩm này được thiết kế để tăng cường sự tập trung, sáng tạo và hiệu quả trong quá trình học tập. Dành cho học sinh, sinh viên và nhân viên văn phòng, danh mục này mang lại sự tiện lợi và tổ chức khoa học trong môi trường học và làm việc.", image: "/image/hom/banner/ht.jpg" },
              { name: "Thực phẩm", desc: "Mang đến các sản phẩm thực phẩm sạch, an toàn và chất lượng cao, bao gồm nguyên liệu tươi sống, thực phẩm chế biến sẵn, sản phẩm hữu cơ và đặc sản vùng miền. Tất cả đều được chọn lọc kỹ lưỡng để đảm bảo vệ sinh an toàn thực phẩm và giá trị dinh dưỡng. Phù hợp cho bữa ăn gia đình, tiệc tùng hoặc dùng làm quà biếu với sự an tâm tuyệt đối về nguồn gốc và chất lượng.", image: "/image/hom/banner/tp.jpg" },
            ].map((item, idx) => (
              <section key={idx} id={item.name} className="bg-white rounded-2xl shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.01] overflow-hidden">
                <Link href="product_page">
                <div className="flex flex-col lg:flex-row items-center gap-6 p-6">
                  <div className="flex-1 space-y-4">
                    <h3 className={`text-2xl font-semibold ${getTitleColor(item.name)}`}>{item.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="w-full max-w-sm">
                    <img src={item.image} alt={item.name} className="object-cover w-full h-auto rounded-xl" />
                  </div>
                </div>
                </Link>
              </section>
            ))}
          </div>
        </section>

         {/* Categories 1 */}
  
          <div className="max-w-screen-xl mx-auto px-4 space-y-12">
      
            {[ 
              { name: "Bài báo", desc: "Nơi chia sẻ những bài viết chuyên sâu, cập nhật xu hướng tiêu dùng, kinh nghiệm mua sắm, mẹo tiết kiệm và phân tích thị trường. Ngoài ra, chuyên mục còn mang đến các bài blog truyền cảm hứng, hướng dẫn sử dụng sản phẩm và góc nhìn đa chiều từ các chuyên gia. Đây là nguồn thông tin hữu ích giúp bạn đưa ra quyết định mua sắm sáng suốt hơn mỗi ngày.", image: "/image/hom/banner/bb.webp" },
            ].map((item, idx) => (
              <section key={idx} id={item.name} className="bg-white rounded-2xl shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.01] overflow-hidden">
                <Link href="/post">
                <div className="flex flex-col lg:flex-row items-center gap-6 p-6">
                  <div className="flex-1 space-y-4">
                    <h3 className={`text-2xl font-semibold ${getTitleColor(item.name)}`}>{item.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="w-full max-w-sm">
                    <img src={item.image} alt={item.name} className="object-cover w-full h-auto rounded-xl" />
                  </div>
                </div>
                </Link>
              </section>
            ))}
          </div>


{/* FAQ */}
<section className="max-w-screen-xl mx-auto px-4 py-12">
  <div className="bg-white p-8 rounded-2xl shadow-lg">
    <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
      Câu hỏi thường gặp
    </h2>
    <ul className="space-y-4">
      {[
        "Làm sao để đặt hàng?",
        "Phương thức thanh toán là gì?",
        "Tôi có thể trả hàng không?",
        "Thời gian giao hàng là bao lâu?",
        "Làm sao để theo dõi đơn hàng?",
      ].map((q, idx) => (
        <li key={idx} className="bg-gray-100 p-4 rounded-xl cursor-pointer transition duration-300 ease-in-out hover:bg-green-100 hover:shadow-md transform hover:scale-105">
          <Link href="/faq">
            <div className="flex items-center">
              <span className="font-semibold text-green-600 mr-4 text-lg">
                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}.
              </span>
              <p className="text-gray-700">{q}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
</section>

        {/* Call to Action */}
        <section className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-indigo-50 to-indigo-100 p-8 rounded-2xl shadow-md">
          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-blue-500">
              Đăng ký để nhận thông báo & ưu đãi!
            </h2>
            <p className="text-base text-gray-600">
              Đừng bỏ lỡ cơ hội nhận thông tin sản phẩm hấp dẫn và các ưu đãi đặc biệt từ chúng tôi. Chỉ mất vài giây để đăng ký!
            </p>
            <a href="/auth/register">
              <button className="w-48 bg-indigo-500 text-white font-medium py-3 rounded-lg hover:bg-indigo-600 transition-all duration-300">
                Đăng ký ngay
              </button>
            </a>
          </div>
          <div className="flex justify-center md:justify-end">
            <img src="/image/hom/banner/dk.avif" alt="Register now" className="w-32 md:w-40 h-auto rounded-lg shadow-lg" />
          </div>
        </section>
          {/* Liên hệ and Giới thiệu */}
          <section className="bg-gray-50 py-16">
          <div className="max-w-screen-xl mx-auto px-4 space-y-12">
            <h2 className="text-3xl font-bold text-center text-sky-500">
              Khám phá thêm thông tin về chúng tôi
            </h2>
            <p className="text-lg text-center text-gray-500 mx-auto max-w-2xl">
              Tìm hiểu về công ty chúng tôi và liên hệ với chúng tôi dễ dàng qua các liên kết dưới đây.
            </p>

            {/* Giới thiệu về chúng tôi */}
            <div className="bg-white rounded-2xl shadow-lg p-6 transition duration-300 hover:shadow-xl hover:scale-[1.01]">
              <Link href="/about">
                <h3 className="text-2xl font-semibold text-sky-400">Giới thiệu về chúng tôi</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-4">
                  Tìm hiểu về sứ mệnh, giá trị và tầm nhìn của chúng tôi, những gì làm nên thương hiệu và cam kết chất lượng mà chúng tôi mang lại cho khách hàng.
                </p>
              </Link>
            </div>

            {/* Liên hệ */}
            <div className="bg-white rounded-2xl shadow-lg p-6 transition duration-300 hover:shadow-xl hover:scale-[1.01] mt-6">
              <Link href="/contact">
                <h3 className="text-2xl font-semibold text-sky-400">Liên hệ với chúng tôi</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-4">
                  Có bất kỳ câu hỏi nào? Hãy liên hệ với chúng tôi để được hỗ trợ nhanh chóng và hiệu quả.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
