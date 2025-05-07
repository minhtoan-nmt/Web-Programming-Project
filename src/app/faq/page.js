'use client';
import { useState, useEffect } from 'react';

export default function QAPage() {
    const [faqs, setFaqs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Hàm lấy danh sách FAQ
    const fetchFaqs = async () => {
        try {
            setLoading(true);
            setError(null);
            console.log('Fetching FAQs...');
            const response = await fetch('http://localhost/BTL/web-backend/faq_about/clients_api/faq.php');
            console.log('Response status:', response.status);
            const data = await response.json();
            console.log('API Response:', data);
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

    // Hàm tìm kiếm FAQ
    const searchFaqs = async () => {
        try {
            setLoading(true);
            setError(null);
            console.log('Searching for:', searchTerm);
            const response = await fetch(`http://localhost/BTL/web-backend/faq_about/clients_api/faq.php?search=${encodeURIComponent(searchTerm)}`);
            console.log('Search response status:', response.status);
            const data = await response.json();
            console.log('Search Response:', data);
            if (data.success) {
                setFaqs(data.data);
            } else {
                setError(data.message || 'Có lỗi xảy ra khi tìm kiếm');
            }
        } catch (error) {
            console.error('Error searching FAQs:', error);
            setError('Không thể kết nối đến server');
        } finally {
            setLoading(false);
        }
    };

    // Load FAQs khi component mount
    useEffect(() => {
        fetchFaqs();
    }, []);

    // Xử lý tìm kiếm khi nhấn Enter
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter pressed, searching...');
            searchFaqs();
        }
    };

    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="text-gray-500 text-sm mb-4">
          <span className="text-gray-700">Trang chủ</span> / <span className="font-semibold">Hỏi đáp</span>
        </div>
  
        <div className="flex items-center space-x-5 mb-6">
          <input
            type="text"
            placeholder="Tìm câu hỏi"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={searchTerm}
                    onChange={(e) => {
                        console.log('Search term changed:', e.target.value);
                        setSearchTerm(e.target.value);
                    }}
                    onKeyPress={handleSearch}
          />
                <button 
                    className="bg-green-300 text-green-900 font-semibold rounded-lg px-4 h-12 flex items-center justify-center text-sm hover:bg-green-400 active:bg-green-500 transition duration-200"
                    onClick={() => {
                        console.log('Search button clicked');
                        searchFaqs();
                    }}
                >
                    Tìm kiếm
          </button>
        </div>
  
        <h1 className="text-green-700 font-bold text-2xl mb-6">Câu hỏi mới nhất</h1>
  
            {loading ? (
                <div className="text-center">Đang tải...</div>
            ) : error ? (
                <div className="text-center text-red-500">{error}</div>
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
                        <div className="text-center text-gray-500">Không tìm thấy câu hỏi nào</div>
                    )}
        </div>
            )}
      </div>
    );
  }
  