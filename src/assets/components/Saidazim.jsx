import React from "react";

/*
  Saidazim.jsx
  - Весь код страницы в одном файле (компонент + данные + маленькие CSS-подправки).
  - Предполагается, что Tailwind CSS уже настроен в проекте (index.css с @tailwind ...).
  - Если Tailwind не настроен, напишите — я перепишу компонент на обычные стили/inline CSS.
*/

const Saidazim = [
  {
    id: 1,
    title: "Управление запасами",
    color: "amber",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 6V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text:
      "Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полках (уровень запасов), помочь организовать систему контроля за остатками и закупками у поставщиков.",
  },
  {
    id: 2,
    title: "Автозаказ товаров",
    color: "violet",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7h18M7 7v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 11l3-3-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text:
      "Сервис прогнозирует спрос и формирует автоматический заказ. Поддерживается работа с разными правилами для разных групп товаров.",
  },
  {
    id: 3,
    title: "Анализ магазина",
    color: "teal",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 12h3M12 8h3M12 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text:
      "Система контроля упущенных продаж позволяет увеличить выручку, анализирует показатели и предлагает инструменты для управления ценой и скидками.",
  },
  {
    id: 4,
    title: "Прогнозирование спроса",
    color: "rose",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text:
      "Сервис рассчитывает прогноз спроса, автоматически подбирает модель и предоставляет корректировки для выполнения расчётов.",
  },
  {
    id: 5,
    title: "Управление поставками",
    color: "blue",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7h18v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 7v-2h10v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text:
      "Планирование и контроль поставок: автоматизация задач приёмки и распределения товаров между точками продаж.",
  },
  {
    id: 6,
    title: "Управление ассортиментом",
    color: "green",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text:
      "Сервис позволяет определить оптимальную ассортиментную матрицу, отслеживать дефицит и оптимальный остаток.",
  },
  {
    id: 7,
    title: "Управление продажами",
    color: "yellow",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3h18v4H3V3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 21V9h14v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text:
      "Контроль упрощённых продаж, анализ среднего чека, динамики и инструментов для увеличения выручки.",
  },
  {
    id: 8,
    title: "Дополнительные сервисы",
    color: "pink",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text:
      "Набор дополнительных модулей для интеграции и расширения функциональности под ваши задачи.",
  },
];

function Card({ title, color = "green", icon, children }) {
  const colorMap = {
    green: "text-green-600 bg-green-50 border-green-100",
    blue: "text-blue-600 bg-blue-50 border-blue-100",
    amber: "text-amber-600 bg-amber-50 border-amber-100",
    violet: "text-violet-600 bg-violet-50 border-violet-100",
    teal: "text-teal-600 bg-teal-50 border-teal-100",
    rose: "text-rose-600 bg-rose-50 border-rose-100",
    yellow: "text-yellow-600 bg-yellow-50 border-yellow-100",
    pink: "text-pink-600 bg-pink-50 border-pink-100",
  };
  const colorClass = colorMap[color] || colorMap.green;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_6px_24px_rgba(2,6,23,0.06)] ring-1 ring-gray-100">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${colorClass}`}>
          <div className="w-6 h-6" style={{ color: "currentColor" }}>
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">{children}</p>
          <div>
            <button className="text-green-600 border border-green-200 hover:bg-green-50 px-4 py-1.5 rounded-full text-sm font-medium">
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Saidazim() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* Встроенная маленькая кастомная стилизация, чтобы тени/радиус были ближе к макету */}
      <style>{`
        /* Доп. мелкие правки, не требующие Tailwind конфигурации */
        .shadow-custom { box-shadow: 0 10px 30px rgba(2,6,23,0.06); }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-2xl p-6 shadow-custom ring-1 ring-blue-50">dd
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Сервисы</h2>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <Card key={c.id} title={c.title} color={c.color} icon={c.icon}>
                {c.text}
              </Card>
            ))}
          </div>

          <div className="mt-6 border-t pt-6">
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-600" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 8v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 8V6a5 5 0 0 1 10 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="text-green-700 font-medium">Подключи любой продукт на 1 месяц бесплатно и оцени наши преимущества</div>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm shadow-sm">Подключить сейчас</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}