'use client';
import { useState, useEffect } from 'react';

export default function AdminPage() {
    const [faqs, setFaqs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [editingFaq, setEditingFaq] = useState(null);
    const [answer, setAnswer] = useState('');

    // Hàm lấy danh sách FAQ
    const fetchFaqs = async () => {
        try {
            setLoading(true);
            setError(null);
            const url = searchTerm 
                ? `http://localhost/BTL/web-backend/faq_about/admin_api/faq.php?search=${encodeURIComponent(searchTerm)}`
                : 'http://localhost/BTL/web-backend/faq_about/admin_api/faq.php';
            console.log('Fetching from URL:', url); // Debug log
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Response data:', data); // Debug log
            if (data.success) {
                setFaqs(data.data);
            } else {
                setError(data.message || 'Có lỗi xảy ra khi tải dữ liệu');
            }
        } catch (error) {
            console.error('Error fetching FAQs:', error);
            setError(`Không thể kết nối đến server: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    // Hàm xóa FAQ
    const deleteFaq = async (id) => {
        if (!confirm('Bạn có chắc chắn muốn xóa câu hỏi này?')) return;

        try {
            setLoading(true);
            setError(null);
            const url = `http://localhost/BTL/web-backend/faq_about/admin_api/faq.php?id=${id}`;
            console.log('Deleting from URL:', url); // Debug log
            const response = await fetch(url, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Delete response:', data); // Debug log
            if (data.success) {
                setSuccess('Xóa câu hỏi thành công!');
                fetchFaqs();
            } else {
                setError(data.message || 'Có lỗi xảy ra khi xóa câu hỏi');
            }
        } catch (error) {
            console.error('Error deleting FAQ:', error);
            setError(`Không thể kết nối đến server: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    // Hàm cập nhật câu trả lời
    const updateAnswer = async (e) => {
        e.preventDefault();
        if (!editingFaq || !answer.trim()) return;

        try {
            setLoading(true);
            setError(null);
            const url = 'http://localhost/BTL/web-backend/faq_about/admin_api/faq.php';
            console.log('Updating answer at URL:', url); // Debug log
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: editingFaq.id,
                    answer: answer
                })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Update response:', data); // Debug log
            if (data.success) {
                setSuccess('Cập nhật câu trả lời thành công!');
                setEditingFaq(null);
                setAnswer('');
                fetchFaqs();
            } else {
                setError(data.message || 'Có lỗi xảy ra khi cập nhật câu trả lời');
            }
        } catch (error) {
            console.error('Error updating answer:', error);
            setError(`Không thể kết nối đến server: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    // Load FAQs khi component mount hoặc searchTerm thay đổi
    useEffect(() => {
        fetchFaqs();
    }, [searchTerm]);

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <div className="text-gray-500 text-sm mb-4">
                <span className="text-gray-700">Trang chủ</span> / <span className="font-semibold">Quản lý FAQ</span>
            </div>

            <h1 className="text-green-700 font-bold text-2xl mb-6">Quản lý FAQ</h1>

            {/* Thanh tìm kiếm */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Tìm kiếm câu hỏi..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Thông báo */}
            {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                    {error}
                </div>
            )}
            {success && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                    {success}
                </div>
            )}

            {/* Danh sách FAQ */}
            {loading ? (
                <div className="text-center">Đang tải...</div>
            ) : (
                <div className="space-y-6">
                    {faqs && faqs.length > 0 ? (
                        faqs.map((faq) => (
                            <div key={faq.id} className="bg-white rounded-lg shadow-md p-6">
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
                                    {editingFaq?.id === faq.id ? (
                                        <form onSubmit={updateAnswer} className="pl-4">
                                            <textarea
                                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                                rows="3"
                                                value={answer}
                                                onChange={(e) => setAnswer(e.target.value)}
                                                placeholder="Nhập câu trả lời..."
                                            ></textarea>
                                            <div className="mt-2 space-x-2">
                                                <button
                                                    type="submit"
                                                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                                                    disabled={loading}
                                                >
                                                    Lưu
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setEditingFaq(null);
                                                        setAnswer('');
                                                    }}
                                                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                                                >
                                                    Hủy
                                                </button>
                                            </div>
                                        </form>
                                    ) : (
                                        <div className="pl-4">
                                            <p className="text-black">{faq.answer}</p>
                                            <div className="mt-2 space-x-2">
                                                <button
                                                    onClick={() => {
                                                        setEditingFaq(faq);
                                                        setAnswer(faq.answer);
                                                    }}
                                                    className="text-blue-500 hover:text-blue-700"
                                                >
                                                    Trả lời
                                                </button>
                                                <button
                                                    onClick={() => deleteFaq(faq.id)}
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    Xóa
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-500">Không tìm thấy câu hỏi nào</div>
                    )}
                </div>
            )}
        </div>
    );
} 