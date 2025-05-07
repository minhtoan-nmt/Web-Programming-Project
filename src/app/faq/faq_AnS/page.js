'use client';
import { useState, useEffect } from 'react';

export default function AskQuestionPage() {
    const [faqs, setFaqs] = useState([]);
    const [newQuestion, setNewQuestion] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    // Hàm lấy danh sách FAQ
    const fetchFaqs = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch('http://localhost/BTL/web-backend/faq_about/clients_api/faq.php');
            const data = await response.json();
            if (data.success) {
                setFaqs(data.data);
            } else {
                setError(data.message || 'Có lỗi xảy ra khi tải dữ liệu');
            }
        } catch (error) {
            console.error('Error fetching FAQs:', error);
            setError('Không thể kết nối đến server');
        } finally {
            setLoading(false);
        }
    };

    // Hàm gửi câu hỏi mới
    const submitQuestion = async (e) => {
        e.preventDefault();
        if (!newQuestion.trim()) {
            setError('Vui lòng nhập câu hỏi');
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const response = await fetch('http://localhost/BTL/web-backend/faq_about/clients_api/faq.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    question: newQuestion,
                    answer: 'Câu hỏi của bạn đang được xử lý. Chúng tôi sẽ trả lời sớm nhất có thể.'
                })
            });

            const data = await response.json();
            if (data.success) {
                setSuccess('Câu hỏi của bạn đã được gửi thành công!');
                setNewQuestion('');
                fetchFaqs(); // Refresh danh sách câu hỏi
            } else {
                setError(data.message || 'Có lỗi xảy ra khi gửi câu hỏi');
            }
        } catch (error) {
            console.error('Error submitting question:', error);
            setError('Không thể kết nối đến server');
        } finally {
            setLoading(false);
        }
    };

    // Load FAQs khi component mount
    useEffect(() => {
        fetchFaqs();
    }, []);

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <div className="text-gray-500 text-sm mb-4">
                <span className="text-gray-700">Trang chủ</span> / <span className="font-semibold">Đặt câu hỏi</span>
            </div>

            <h1 className="text-green-700 font-bold text-2xl mb-6">Đặt câu hỏi</h1>

            {/* Form đặt câu hỏi */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <form onSubmit={submitQuestion}>
                    <div className="mb-4">
                        <label htmlFor="question" className="block text-gray-700 font-semibold mb-2">
                            Câu hỏi của bạn
                        </label>
                        <textarea
                            id="question"
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Nhập câu hỏi của bạn ở đây..."
                            value={newQuestion}
                            onChange={(e) => setNewQuestion(e.target.value)}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition duration-200"
                        disabled={loading}
                    >
                        {loading ? 'Đang gửi...' : 'Gửi câu hỏi'}
                    </button>
                </form>

                {error && (
                    <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                        {success}
                    </div>
                )}
            </div>

            {/* Danh sách câu hỏi */}
            <h2 className="text-green-700 font-bold text-xl mb-4">Câu hỏi gần đây</h2>
            {loading ? (
                <div className="text-center">Đang tải...</div>
            ) : (
                <div className="space-y-6">
                    {faqs && faqs.length > 0 ? (
                        faqs.map((faq) => (
                            <div key={faq.id} className="bg-gray-100 rounded-lg p-4">
                                <div className="grid grid-cols-[auto_1fr] items-center border-b border-gray-300 py-2">
                                    <span className="text-green-700 font-bold text-lg text-center border-r border-green-700 pr-4 w-16">
                                        Hỏi
                                    </span>
                                    <p className="text-black font-semibold pl-4">{faq.question}</p>
                                </div>
                                <div className="grid grid-cols-[auto_1fr] items-center py-2">
                                    <span className="text-gray-800 font-bold text-lg text-center border-r border-gray-700 pr-4 w-16">
                                        Đáp
                                    </span>
                                    <p className="text-black pl-4">{faq.answer}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-500">Chưa có câu hỏi nào</div>
                    )}
                </div>
            )}
        </div>
    );
}
  