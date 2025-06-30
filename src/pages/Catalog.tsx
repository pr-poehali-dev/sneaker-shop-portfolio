import { useState, useMemo } from "react";
import { products, brands, sizes } from "@/data/products";
import { FilterState } from "@/types";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";

export default function Catalog() {
  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    sizes: [],
    priceRange: [0, 20000],
    category: "all",
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (
        filters.brands.length > 0 &&
        !filters.brands.includes(product.brand)
      ) {
        return false;
      }

      if (filters.sizes.length > 0) {
        const hasSize = filters.sizes.some((size) =>
          product.sizes.includes(size),
        );
        if (!hasSize) return false;
      }

      if (
        product.price < filters.priceRange[0] ||
        product.price > filters.priceRange[1]
      ) {
        return false;
      }

      if (filters.category !== "all" && product.category !== filters.category) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Каталог кроссовок
          </h1>
          <p className="text-gray-600">
            Найдено {filteredProducts.length} из {products.length} товаров
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <ProductFilters
              filters={filters}
              onFiltersChange={setFilters}
              availableBrands={brands}
              availableSizes={sizes}
            />
          </aside>

          <main className="lg:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">Товары не найдены</p>
                <p className="text-gray-400">
                  Попробуйте изменить фильтры поиска
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
}
