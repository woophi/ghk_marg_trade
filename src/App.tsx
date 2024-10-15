import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Collapse } from '@alfalab/core-components/collapse';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import article_1 from './assets/article_1.png';
import article_2 from './assets/article_2.png';
import article_3 from './assets/article_3.png';
import article_4 from './assets/article_4.png';
import article_5 from './assets/article_5.png';
import hb from './assets/hb.png';
import mts from './assets/mts.png';
import mtsBank from './assets/mts_bank.png';
import sber from './assets/sber.png';
import { appSt } from './style.css';

const swiperData = [
  {
    title: 'Акции, не включенные в котировальные списки',
    link: 'https://alfabank.ru/make-money/investments/learn/testirovanie-cb-akcii/',
  },
  {
    title: 'Облигации с низким кредитным рейтингом',
    link: 'https://alfabank.ru/make-money/investments/learn/obligacii-i-kreditnyj-rejting/',
  },
  {
    title: 'Что такое ETF и как это работает?',
    link: 'https://alfabank.ru/make-money/investments/learn/testirovanie-cb-etf/',
  },
  {
    title: 'Закрытые паевые инвестиционные фонды',
    link: 'https://alfabank.ru/make-money/investments/learn/testirovanie-cb-pai/',
  },
  {
    title: 'Рынок FORTS: Что такое фьючерсы и опционы',
    link: 'https://alfabank.ru/make-money/investments/learn/testirovanie-cb-forts/',
  },
  {
    title: 'Марджинальные сделки: торговля за счет брокера',
    link: 'https://alfabank.ru/make-money/investments/learn/testirovanie-cb-marzhinalnaja-torgovlja/',
  },
  {
    title: 'Сделки РЕПО: встречная купля-продажа',
    link: 'https://alfabank.ru/make-money/investments/learn/testirovanie-cb-sdelki-repo/',
  },
  {
    title: 'Структурные облигации: бумаги со стратегией',
    link: 'https://alfabank.ru/make-money/investments/learn/testirovanie-cb-strukturnye-obligacii/',
  },
];

const articles = [
  {
    img: article_1,
    title: 'Как торговать за счет брокера?',
    subtitle: 'Подготовка к тесту ЦБ',
    link: 'https://alfabank.ru/make-money/investments/learn/testirovanie-cb-marzhinalnaja-torgovlja/',
  },
  {
    img: article_2,
    title: 'В какие ловушки маржинальной торговли может попасть инвестор',
    subtitle: 'Рассказываем, что новичкам нужно знать о рисках при использовании плеча.',
    link: 'https://alfabank.ru/make-money/investments/learn/t/v-kakie-lovushki-marzhinalnoi-torgovli-mozhet-popast-investor/',
  },
  {
    img: article_3,
    title: 'FOMO в инвестициях на фондовом рынке: что это и как преодолеть',
    subtitle: 'Эмоции и страх упущенной выгоды заставляют инвесторов принимать необдуманные решения — как с этим бороться',
    link: 'https://alfabank.ru/make-money/investments/learn/t/fomo-v-investitsiyakh-na-fondovom-rinke-chto-eto-i-kak-preodolet/',
  },
  {
    img: article_4,
    title: 'Зарабатываем на падении. В каких ситуациях инвесторам нужен шорт',
    subtitle: 'Акции растут не всегда, иногда они движутся вниз — и это тоже возможности для увеличения доходов.',
    link: 'https://alfabank.ru/make-money/investments/learn/t/zarabativaem-na-padenii-v-kakikh-situatsiyakh-investoram-nuzhen-short/',
  },
  {
    img: article_5,
    title: 'Дискретный аукцион. О чём нужно знать инвесторам',
    subtitle: 'Рассказываем об особом режиме торгов для защиты инвесторов от волатильности — дискретном аукционе.',
    link: 'https://alfabank.ru/make-money/investments/learn/t/diskretnii-auktsion-o-chyom-nuzhno-znat-investoram/',
  },
];

const whatElses = [
  {
    title: 'Маржильное кредитование',
    subtitle: 'Доступный лимит средств от брокера для торговли',
    link: 'https://alfa.me/AI_test_list',
    analytics: 'Margin_credit_3514_click',
  },
  {
    title: 'Тарифы',
    subtitle: 'Сделки РЕПО и СВОП',
    link: null,
    analytics: 'Tarifs_3514_click',
  },
  {
    title: 'Требуемое обеспечение',
    subtitle: 'Необходимый обеспечение для марджинальных сделок',
    link: 'https://alfabank.ru/make-money/investments/help/trebuemoe-obespechenie/',
    analytics: 'Required_security_3514_click',
  },
  {
    title: 'Безопасно ли это?',
    subtitle: 'Как безопасно торговать на средства брокера',
    link: 'https://alfabank.ru/make-money/investments/learn/t/kak-snizit-riski-na-fondovom-rinke/',
    analytics: 'Safety_3514_click',
  },
];

const tariffs = [
  {
    left: 'до 30 000 ₽',
    right: 'Бесплатно',
  },
  {
    left: 'до 90 000 ₽',
    right: '90 ₽',
  },
  {
    left: 'до 200 000 ₽',
    right: '180 ₽',
  },
  {
    left: 'до 650 000 ₽',
    right: '560 ₽',
  },
  {
    left: 'до 1 500 000 ₽',
    right: '1280 ₽',
  },
  {
    left: 'до 3 000 000 ₽',
    right: '2540 ₽',
  },
  {
    left: 'до 6 000 000 ₽',
    right: '4990 ₽',
  },
  {
    left: 'до 9 000 000 ₽',
    right: '7290 ₽',
  },
  {
    left: 'до 35 000 000 ₽',
    right: '0,078%',
  },
  {
    left: 'до 100 000 000 ₽',
    right: '0,073%',
  },
  {
    left: 'от 100 000 000 ₽',
    right: '0,062%',
  },
];

export const App = () => {
  const [openBs, setOpenBs] = useState(false);
  const [openBsTariffs, setOpenBsTariffs] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive
          style={{ marginTop: '1rem', textAlign: 'center' }}
          tag="h1"
          view="large"
          font="system"
          weight="bold"
        >
          Марджинальная торговля
        </Typography.TitleResponsive>
        <Typography.Text
          view="primary-medium"
          color="secondary"
          tag="p"
          style={{ textAlign: 'center' }}
          defaultMargins={false}
        >
          Покупайте и продавайте акции, которыми не владеете на деньги брокера
        </Typography.Text>
        <div>
          <img src={hb} width="100%" />
          <div className={appSt.box}>
            <div>
              <Typography.TitleResponsive tag="h2" view="small" font="system" weight="semibold">
                Обучение
              </Typography.TitleResponsive>
              <Typography.Text view="primary-medium" color="secondary" tag="p" defaultMargins={false}>
                8 уроков от специалистов помогут разобраться в тонкстях маржинальной торговли
              </Typography.Text>
            </div>
            <Swiper spaceBetween={16} slidesPerView="auto" style={{ width: '100%' }}>
              {swiperData.map((slide, index) => (
                <SwiperSlide
                  className={appSt.slide}
                  key={slide.link}
                  onClick={() => {
                    window.gtag('event', `Lesson_${index + 1}_3514_click`);
                    window.location.replace(slide.link);
                  }}
                >
                  <div className={appSt.slideRow}>
                    <Typography.Text view="primary-medium" style={{ fontWeight: 600 }}>
                      {slide.title}
                    </Typography.Text>
                    <CDNIcon name="glyph_book_m" />
                  </div>
                  <Typography.Text view="primary-small" color="secondary">
                    Урок {index + 1}
                  </Typography.Text>
                </SwiperSlide>
              ))}
            </Swiper>
            <ButtonMobile
              block
              view="primary"
              onClick={() => {
                window.gtag('event', 'Test_3514_click');
                window.location.replace('https://lk.alfadirect.ru/testing/list?mt=mt&sign=sign');
              }}
            >
              Пройти тестирование
            </ButtonMobile>
          </div>
        </div>

        <div
          className={appSt.boxRow}
          onClick={() => {
            window.gtag('event', 'Articles_3514_click');
            setOpenBs(true);
          }}
        >
          <Typography.TitleResponsive tag="h2" view="small" font="system" weight="semibold">
            Статьи
          </Typography.TitleResponsive>
          <CDNIcon name="glyph_document-lines_m" />
        </div>

        <div className={appSt.boxExpanded({ expanded })}>
          <div
            className={appSt.boxRow}
            onClick={() => {
              window.gtag('event', 'What_else_3514_click');
              setExpanded(!expanded);
            }}
          >
            <div>
              <Typography.TitleResponsive tag="h2" view="small" font="system" weight="semibold">
                Что еще?
              </Typography.TitleResponsive>
              <Typography.Text tag="p" defaultMargins={false} view="primary-medium" color="secondary">
                Что еще следует знать перед началом маржинальной торговли
              </Typography.Text>
            </div>

            <CDNIcon name={expanded ? 'glyph_chevron-up_m' : 'glyph_chevron-down_m'} />
          </div>
          <Collapse expanded={expanded}>
            {whatElses.map(we => (
              <div
                key={we.title}
                className={appSt.weRow}
                onClick={() => {
                  window.gtag('event', we.analytics);
                  if (we.link) {
                    window.location.replace(we.link);
                  } else {
                    setOpenBsTariffs(true);
                  }
                }}
              >
                <div>
                  <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
                    {we.title}
                  </Typography.Text>
                  <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="secondary">
                    {we.subtitle}
                  </Typography.Text>
                </div>

                <CDNIcon name="glyph_chevron-right_m" color="#A4A4A4" />
              </div>
            ))}
          </Collapse>
        </div>
      </div>
      <div className={appSt.containerBottom}>
        <Typography.TitleResponsive style={{ margin: '1rem 0' }} tag="h2" view="small" font="system" weight="semibold">
          Популярные активы с плечом
        </Typography.TitleResponsive>

        <div className={appSt.bottomRow} onClick={() => window.gtag('event', 'MTS_Bank_3514_click')}>
          <img src={mtsBank} width={48} height={48} />
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
              МТС Банк
            </Typography.Text>
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="secondary">
              Ставка риска 91%
            </Typography.Text>
          </div>
        </div>
        <div className={appSt.bottomRow} onClick={() => window.gtag('event', 'MTS_3514_click')}>
          <img src={mts} width={48} height={48} />
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
              МТС
            </Typography.Text>
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="secondary">
              Ставка риска 24,31%
            </Typography.Text>
          </div>
        </div>
        <div className={appSt.bottomRow} onClick={() => window.gtag('event', 'SBER_3514_click')}>
          <img src={sber} width={48} height={48} />
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
              Сбербанк а.п.
            </Typography.Text>
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="secondary">
              Ставка риска 20,79%
            </Typography.Text>
          </div>
        </div>

        <Typography.Text view="primary-small" color="secondary" style={{ textAlign: 'center' }} tag="p">
          Перед началом торговли пройдите обучение и завершите тестирование!
        </Typography.Text>
      </div>
      <div className={appSt.container}>
        <ButtonMobile
          block
          view="primary"
          href="https://alfa.me/AI_test_list"
          onClick={() => window.gtag('event', 'Terminal_3514_click')}
        >
          Перейти в терминал
        </ButtonMobile>
      </div>

      <BottomSheet
        stickyHeader
        title={
          <Typography.Text view="component" weight="medium">
            Статьи
          </Typography.Text>
        }
        open={openBs}
        onClose={() => {
          setOpenBs(false);
        }}
        hasCloser
        titleAlign="center"
        initialHeight="full"
      >
        <div className={appSt.containerBS}>
          {articles.map((article, index) => (
            <div
              key={article.link}
              className={appSt.articleRow}
              onClick={() => {
                window.gtag('event', `Arcticles_${index + 1}_3514_click`);
                window.location.replace(article.link);
              }}
            >
              <img width={56} height={56} src={article.img} />
              <div>
                <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
                  {article.title}
                </Typography.Text>
                <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="secondary">
                  {article.subtitle}
                </Typography.Text>
              </div>
            </div>
          ))}
        </div>
      </BottomSheet>
      <BottomSheet
        stickyHeader
        title={
          <Typography.Text view="component" weight="medium">
            Тарифы
          </Typography.Text>
        }
        open={openBsTariffs}
        onClose={() => {
          setOpenBsTariffs(false);
        }}
        hasCloser
        titleAlign="center"
        initialHeight="full"
      >
        <div className={appSt.containerBS}>
          <Typography.TitleResponsive tag="h2" view="small" font="system" weight="semibold">
            Сделки РЕПО и СВОП
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="secondary">
            При «Привлечении» РЕПО — 0,7% годовых
          </Typography.Text>

          <div className={appSt.boxExpanded({ tariffs: true })}>
            <div className={appSt.slideRow}>
              <Typography.Text view="primary-medium" weight="medium" color="secondary">
                Объем сделок
              </Typography.Text>
              <Typography.Text view="primary-medium" weight="medium">
                Ставка в день
              </Typography.Text>
            </div>
            {tariffs.map(tariff => (
              <div className={appSt.slideRow} key={tariff.left}>
                <Typography.Text view="primary-medium" weight="medium" color="secondary">
                  {tariff.left}
                </Typography.Text>
                <Typography.Text view="primary-medium" weight="medium">
                  {tariff.right}
                </Typography.Text>
              </div>
            ))}
          </div>

          <div
            className={appSt.slideRow}
            onClick={() => {
              window.gtag('event', 'Repo_3514_click');
              setExpanded2(!expanded2);
            }}
          >
            <Typography.Text view="primary-medium" weight="medium">
              Что такое РЕПО
            </Typography.Text>
            <CDNIcon name={expanded2 ? 'glyph_chevron-up_m' : 'glyph_chevron-down_m'} />
          </div>

          <Collapse expanded={expanded2}>
            Сделка РЕПО, или соглашение РЕПО — сделка купли (продажи) ценной бумаги с обязательством обратной продажи
            (покупки) через определённый срок по заранее определённой в этом соглашении цене. Иначе говоря, соглашение РЕПО
            условно может рассматриваться как краткосрочный заём денежных средств под залог ценных бумаг.
          </Collapse>
          <div
            className={appSt.slideRow}
            onClick={() => {
              window.gtag('event', 'Swap_3514_click');
              setExpanded3(!expanded3);
            }}
          >
            <Typography.Text view="primary-medium" weight="medium">
              Что такое СВОП
            </Typography.Text>
            <CDNIcon name={expanded3 ? 'glyph_chevron-up_m' : 'glyph_chevron-down_m'} />
          </div>

          <Collapse expanded={expanded3}>
            Своп — торгово-финансовая обменная операция в виде обмена разнообразными активами, в которой заключение сделки о
            покупке (продаже) ценных бумаг, валюты сопровождается заключением контрсделки, сделки об обратной продаже
            (покупке) того же товара через определённый срок на тех же или иных условиях.
          </Collapse>
        </div>
      </BottomSheet>
    </>
  );
};
