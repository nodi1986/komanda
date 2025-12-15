import React from 'react'

const Bekzod = () => {
  return (
    <div>
        <div className=" px-6 py-12 max-w-[1312px] mx-auto">
              <h2 className="text-3xl font-semibold mb-10">
                Для розничных магазинов и ресторанов
              </h2>
        
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="flex flex-col gap-12">
                 <img className='w-[450px]' src={cafeImg} alt="Cafe" />
        
                       <img className='w-[450px]' src={storeImg} alt="Store" />
        
                </div>
        
                <div className="flex flex-col gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-3">
                      Получайте рекомендации по управлению ассортиментом
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».
        
        Каждую неделю вам на почту будет приходить письмо с рекомендациями:
        какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;
        какие товары у вас в избытке, а какие следует отнести к неликвидам;
        какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.
                     
                    </p>
                    <a href="#" className="text-green-600 font-medium text-sm">
                      Подробнее →
                    </a>
                  </div>
        
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-3">
                      Прогнозируйте спрос и управляйте запасами
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      Используйте 1С-Товары для более точного прогноза спроса. 1С-Товары учитывают средние продажи, тренды, периоды дефицита товара (пробелы на полках), сезонность спроса, праздники, распродажи, акции.
        Ежедневно 1С-Товары автоматически проверяют минимальные остатки и своевременно отправляет заявку поставщику, используя результаты прогноза. Так вы избежите как дефицита, так и излишков товара в магазине.
                    </p>
                    <a href="#" className="text-green-600 font-medium text-sm">
                      Подробнее →
                    </a>
                  </div>
        
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-3">
                      Планируйте ассортимент без ошибок
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                     Узнайте, какие товары приносят вам прибыль и всегда должны быть в ассортименте. И, наоборот, выводите из ассортимента товары с низкой наценкой и оборачиваемостью.
                    </p>
                  </div>
        
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-3">
                      Контролируйте бизнес и повышайте прибыль
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                     Пробуйте разные варианты повышения продаж – новые товары, изменение наценки, перераспределение площади. Убедиться в правильности действий помогут отчеты. Блок аналитики доступен через Интернет и сделан как приборная панель индикаторов деятельности, что позволяет быстро заметить изменения.
                    </p>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Bekzod