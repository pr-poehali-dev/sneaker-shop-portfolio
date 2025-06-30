import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredProducts = products.slice(0, 4);
  const newProducts = products.filter((p) => p.isNew);
  const saleProducts = products.filter((p) => p.isSale);

  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Лучшие кроссовки
              <span className="block text-gray-600">для вашего стиля</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Откройте для себя коллекцию премиальных кроссовок от ведущих
              мировых брендов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/catalog">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Grid3X3" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
              </Link>
              <Link to="/catalog">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="Zap" size={20} className="mr-2" />
                  Новинки
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {newProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Новинки
                </h2>
                <p className="text-gray-600">Самые свежие поступления</p>
              </div>
              <Link to="/catalog">
                <Button variant="outline">
                  Все новинки
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Популярные товары
              </h2>
              <p className="text-gray-600">Выбор покупателей</p>
            </div>
            <Link to="/catalog">
              <Button variant="outline">
                Весь каталог
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {saleProducts.length > 0 && (
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-red-900 mb-2">Скидки</h2>
                <p className="text-red-700">Выгодные предложения</p>
              </div>
              <Link to="/catalog">
                <Button
                  variant="outline"
                  className="border-red-200 text-red-700 hover:bg-red-100"
                >
                  Все скидки
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {saleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Почему выбирают нас?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Быстрая доставка
                </h3>
                <p className="text-gray-600">
                  Доставим ваш заказ в течение 1-2 дней
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Гарантия качества
                </h3>
                <p className="text-gray-600">
                  Только оригинальная продукция от брендов
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={32} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Поддержка 24/7
                </h3>
                <p className="text-gray-600">Всегда готовы помочь с выбором</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
