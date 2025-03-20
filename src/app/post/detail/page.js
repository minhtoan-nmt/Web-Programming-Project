export default function Page() {
  const pageContent = [
    {
      type: 'p',
      content: `Chính sự phát triển của ngành công nghệ thông tin đã đánh dấu một giai đoạn phát triển mới cho con người. Cuộc sống trở nên hiện đại hơn, thông minh hơn và tiện ích hơn. Tuy nhiên, bên cạnh những tiện ích mà công nghệ mang lại, cũng tồn tại những tác động tiêu cực đối với cuộc sống của chúng ta. Vậy công nghệ ảnh hưởng thế nào đến cuộc sống con người? Hãy cùng chúng tôi khám phá điều này thông qua bài viết dưới đây.

      Sự xuất hiện của khoa học công nghệ cùng với những phát minh khoa học tiên tiến đã hoàn toàn thay đổi bản chất cuộc sống của con người. Điện thoại thông minh, máy tính, điều hòa, robot, thanh toán bằng thẻ, và cả ô tô tự lái, máy bay tự lái,... đều là những sáng chế tiên tiến, thông minh của con người, đánh dấu một kỷ nguyên phát triển mới trong lịch sử nhân loại.

      Sự xuất hiện của các thiết bị công nghệ tiên tiến đã thúc đẩy sự phát triển kinh tế và xã hội. Những thiết bị này giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả, mà không cần phải tốn nhiều sức lao động.

      Điện thoại không chỉ giúp chúng ta duy trì liên lạc với nhau, mà còn hỗ trợ giải trí, kinh doanh, và thanh toán. Điện thoại thông minh đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta. Máy tính cũng đã giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả. Hơn nữa, máy tính là công cụ giúp con người tìm kiếm thông tin hiệu quả, và không thể thiếu kết nối internet để hoàn thành nhiều nhiệm vụ. Điện thoại, máy tính và internet đều liên quan chặt chẽ và cùng nhau tạo nên cuộc sống hiện đại.

      Những phát minh hiện đại như máy bay, ô tô tự lái, và cửa hàng tự động mà không cần người bán cũng mang lại nhiều lợi ích. Chúng đã đánh dấu một bước tiến mới trong sự phát triển của con người. Các thiết bị công nghệ tiên tiến, từ việc thay thế con người trong nhiều tác vụ, đến việc làm nhà bằng robot và hệ thống tự động trong gia đình, đều đã thay đổi cách chúng ta sống và làm việc.`
    },
    {
      type: 'img',
      src: '/image/post/detail/img1.png'
    },
    {
      type: 'p',
      content: `Tuy nhiên, bên cạnh những lợi ích rõ ràng, không thể phủ nhận rằng còn tồn tại những hệ lụy của công nghệ. Công nghệ có thể làm cho chúng ta trở nên lười biếng hơn và đôi khi tạo ra sự ích kỷ và tình trạng căng thẳng. Chúng ta có thể thay thế công việc nhà bằng robot trong khi chỉ ngồi nghe nhạc hoặc xem phim. Khi điện thoại hoặc máy tính gặp sự cố, chúng ta có thể trở nên cáu kỉnh và tức giận.`
    }
  ];

  return (
    <div className="flex flex-col p-24">
      <span className="text-sm text-gray-500">
        Trang chủ / Bài viết / Bài viết chi tiết
      </span>
      <div className="flex flex-col text-justify m-6">
        <h1 className="text-center font-bold text-2xl text-green-700 mb-12">
          Thảo luận về vai trò của công nghệ đối với đời sống con người hay nhất
        </h1>
        <div className="font-bold">
          {pageContent.map((item, index) => {
            if (item.type === 'p') {
              return (
                <p key={index} style={{ whiteSpace: 'pre-line' }} className="mb-6">
                  {item.content}
                </p>
              );
            } else if (item.type === 'img') {
              return (
                <img
                  key={index}
                  src={item.src}
                  alt={`Image ${index + 1}`}
                  className="mx-auto mb-6"
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}