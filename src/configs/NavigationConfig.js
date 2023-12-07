import {
  DashboardOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  FileImageOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  MobileOutlined,
  SettingOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const systemsNavTree = [
  {
    key: "systems",
    path: `${APP_PREFIX_PATH}/systems`,
    title: "Системные",
    icon: DashboardOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "extra-systems-options",
        path: `${APP_PREFIX_PATH}/systems/options`,
        title: "Настройки",
        icon: SettingOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "extra-systems-mobile-app",
        path: `${APP_PREFIX_PATH}/systems/mobile-app`,
        title: "Мобильное приложение",
        icon: MobileOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "extra-systems-logs",
        path: `${APP_PREFIX_PATH}/systems/logs`,
        title: "Логи",
        icon: FileTextOutlined,
        breadcrumb: true,
        submenu: [],
      },
    ],
  },
];

const dashBoardNavTree = [
  {
    key: "home",
    path: `${APP_PREFIX_PATH}/home`,
    title: "Основные",
    icon: DashboardOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "extra-catalog",
        path: `${APP_PREFIX_PATH}/catalog`,
        title: "Каталог",
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "extra-catalog-products",
            path: `${APP_PREFIX_PATH}/catalog/products`,
            title: "Товары",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "extra-catalog-categories",
            path: `${APP_PREFIX_PATH}/catalog/categories`,
            title: "Категории",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "extra-catalog-collections",
            path: `${APP_PREFIX_PATH}/catalog/collections`,
            title: "Коллекции",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "extra-catalog-combos",
            path: `${APP_PREFIX_PATH}/catalog/combos`,
            title: "Комбо",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "extra-orders",
        path: `${APP_PREFIX_PATH}/orders`,
        title: "Заказы",
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "extra",
        path: `${APP_PREFIX_PATH}/customers`,
        title: "Клиенты",
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "extra-customers-list",
            path: `${APP_PREFIX_PATH}/customers/user-list`,
            title: "Список клиентов",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "extra-customers-setting",
            path: `${APP_PREFIX_PATH}/customers/user-list`,
            title: "Группы клиентов",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "extra-banners",
        path: `${APP_PREFIX_PATH}/banners`,
        title: "Баннеры",
        icon: FileImageOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "extra-promos",
        path: `${APP_PREFIX_PATH}/promos`,
        title: "Промокоды",
        icon: GiftOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "extra-offline-points",
        path: `${APP_PREFIX_PATH}/offline-points`,
        title: "Оффлайн точки",
        icon: ShopOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "extra-addresses",
            path: `${APP_PREFIX_PATH}/offline-points/addresses`,
            title: "Адреса",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "extra-geo-zones",
            path: `${APP_PREFIX_PATH}/offline-points/geo-zones`,
            title: "Геозоны",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "extra-employees",
        path: `${APP_PREFIX_PATH}/employees`,
        title: "Сотрудники",
        icon: UsergroupAddOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "extra-mailings",
        path: `${APP_PREFIX_PATH}/mailings`,
        title: "Рассылки",
        icon: MailOutlined,
        breadcrumb: true,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree, ...systemsNavTree];

export default navigationConfig;
