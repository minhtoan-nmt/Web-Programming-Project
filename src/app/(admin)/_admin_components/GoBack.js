export function GoBackButton({router}) {
    return <button 
        type="button" 
        className="py-2 px-3 bg-gray-100 rounded-lg hover:scale-110 ease-in duration-75 cursor-pointer"
        onClick={() => router.back()}
    >
        Không
    </button>
}