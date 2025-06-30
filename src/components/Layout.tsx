import { Link, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useCartStore } from "@/store/cartStore";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const totalItems = useCartStore((state) => state.getTotalItems());

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/catalog", label: "Каталог", icon: "Grid3X3" },
    { path: "/cart", label: "Корзина", icon: "ShoppingCart" },
    { path: "/contacts", label: "Контакты", icon: "Mail" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold text-gray-900">
              SneakerStore
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon name={item.icon as any} size={16} />
                  <span>{item.label}</span>
                  {item.path === "/cart" && totalItems > 0 && (
                    <Badge variant="secondary" className="ml-1">
                      {totalItems}
                    </Badge>
                  )}
                </Link>
              ))}
            </nav>

            <div className="md:hidden flex items-center space-x-4">
              <Link to="/cart" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {totalItems > 0 && (
                  <Badge
                    variant="secondary"
                    className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Link>
            </div>
          </div>

          <div className="md:hidden border-t">
            <nav className="flex items-center justify-around py-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "text-gray-900 bg-gray-100"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <div className="relative">
                    <Icon name={item.icon as any} size={18} />
                    {item.path === "/cart" && totalItems > 0 && (
                      <Badge
                        variant="secondary"
                        className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center text-xs"
                      >
                        {totalItems > 9 ? "9+" : totalItems}
                      </Badge>
                    )}
                  </div>
                  <span className="text-xs">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              SneakerStore
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Лучшие кроссовки от мировых брендов
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Icon name="Facebook" size={20} />
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                © 2024 SneakerStore. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
