import Layout from "@/components/Layout";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Cart() {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } =
    useCartStore();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <Icon
              name="ShoppingCart"
              size={64}
              className="mx-auto text-gray-300 mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Корзина пуста
            </h1>
            <p className="text-gray-600 mb-6">
              Добавьте товары в корзину, чтобы продолжить покупки
            </p>
            <Link to="/catalog">
              <Button size="lg">Перейти в каталог</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Корзина</h1>
          <Button variant="outline" onClick={clearCart}>
            Очистить корзину
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={`${item.product.id}-${item.selectedSize}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {item.product.name}
                      </h3>
                      <p className="text-gray-600">{item.product.brand}</p>
                      <p className="text-sm text-gray-500">
                        Размер: {item.selectedSize}
                      </p>
                      <p className="font-semibold text-gray-900 mt-1">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.selectedSize,
                            item.quantity - 1,
                          )
                        }
                      >
                        <Icon name="Minus" size={16} />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.selectedSize,
                            item.quantity + 1,
                          )
                        }
                      >
                        <Icon name="Plus" size={16} />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        removeItem(item.product.id, item.selectedSize)
                      }
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Итого
                </h2>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>
                      Товары (
                      {items.reduce((sum, item) => sum + item.quantity, 0)})
                    </span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Доставка</span>
                    <span className="text-green-600">Бесплатно</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>К оплате</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>

                <Button size="lg" className="w-full mb-3">
                  Оформить заказ
                </Button>

                <Link to="/catalog">
                  <Button variant="outline" size="lg" className="w-full">
                    Продолжить покупки
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
