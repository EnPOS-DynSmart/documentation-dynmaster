import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Müşteri İlişkileri Yönetimi',
    Svg: require('@site/static/img/anasayfa/dunya.svg').default,
    description: (
      <>
        DynMaster‘ın müşteri yönetimi modülü, müşteri ilişkilerinizi güçlendirmenize ve müşterilerinizi daha iyi anlamanıza olanak tanır.
      </>
    ),
  },
  {
    title: 'Kampanya/Promosyon Modülü',
    Svg: require('@site/static/img/anasayfa/touch.svg').default,
    description: (
      <>
        Ürün, fiyat kampanyaları düzenleyebilir, özel gün uygulamaları yapabilirsiniz. Seçilmiş gruplara özel kişiselleştirilmiş pazarlama uygulamalarını esnek ve kapsamlı biçimde yönetebilirsiniz.
      </>
    ),
  },
  {
    title: 'Raporlama',
    Svg: require('@site/static/img/anasayfa/rapor.svg').default,
    description: (
      <>
        Ürün, fiyat, müşteri, satış, kampanya vb. tüm işlemlerinizi raporlayabilir, dilediğiniz esneklikte analiz edip işletmenizin stratejilerini buna göre belirleyebilirsiniz.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
