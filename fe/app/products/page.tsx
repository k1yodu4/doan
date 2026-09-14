import products from '@/data/mock-products.json';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">
        Danh sách sản phẩm
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
          >
            <img
              src={p.imageUrl}
              alt={p.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {p.name}
              </h2>
              <p className="mt-1 text-xl font-bold text-red-600">
                {p.price.toLocaleString('vi-VN')}đ
              </p>
              <p className="mt-1 text-sm text-yellow-500">
                ⭐ {p.rating} / 5
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}