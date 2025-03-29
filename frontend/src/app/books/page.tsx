const BooksPage = () => {
  return (
    <div className="py-8">
      <div className="flex items-center mb-6">
        <div className="h-8 bg-gray-200 rounded w-48 animate-pulse"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm h-full">
            <div className="aspect-[3/4] bg-gray-200 rounded-t-lg animate-pulse"></div>
            <div className="p-3">
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mt-2 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
