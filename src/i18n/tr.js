const tr = {
  topbar: { phone: 'Tel', email: 'E-posta' },
  nav: {
    home: 'Ana Sayfa',
    about: 'Hakkımızda',
    products:'ÜRÜNLERİMİZ',
    services: 'HİZMETLERİMİZ',
    contact: 'İLETİŞİM',
    switchLang: 'Switch to English',
  },
  home: {
    heroLabel: 'Uzmanlık Alanlarımız',
    heroWords: [
      'SAP ERP Danışmanlığı',
      'CRM Çözümleri',
      'e-Dönüşüm Hizmetleri',
      'Fiori / UI5 Uygulamaları',
      'Yapay Zeka Projeleri',
    ],
    heroTitle: 'Kurumsal Süreçlerinizi Sağlam Zemine Oturtan Danışmanlık Ortağınız',
    heroText: 'SAP ERP ile başlayan yolculuğumuz; iş zekâsı, tedarik zinciri, müşteri ilişkileri ve e-dönüşüm alanlarında güçlenerek sürüyor.',
    getInTouch: 'Ürünlerimiz',
    whoWeAre: 'BİZ KİMİZ?',
    aboutTitle: 'Hakkımızda',
    aboutP1: 'Protek, 2013 yılından bu yana kurumsal uygulamalar alanında yazılım ve danışmanlık hizmetleri sunarak müşterilerinin iş süreçlerini kolaylaştıran, hızlı ve doğru çözümler ortaya koymaktadır.',
    aboutP2: 'SAP ve ERP ile başlayan çözüm serüvenimiz; bugün iş zekâsı, tedarik zinciri yönetimi, müşteri ilişkileri, e-dönüşüm ve mobil uygulamalar gibi farklı alanlarda güçlenerek devam etmektedir.',
    featuredSectionLabel: 'Öne Çıkan Ürünlerimiz',
    featuredKicker: 'NELER YAPTIK?',
    aboutHighlightsTitle: 'Öne Çıkan Ürün ve Hizmetlerimiz',
    aboutHighlightsList: [
      'Protek e-Defter',
      'Corpro enflasyon muhasebesi paketi',
      'Cloud Bigdata ve finansal hesaplamalar çözümü',
      'Duran Varlık Yönetim ve Sayım Kokpiti',
      'Otomotiv sektöründe bir firma için "Mühendislik ve Değişiklik Yönetimi Sistemi" projemiz',
      'Evde sağlık hizmetleri platform geliştirmesi projelerimiz devam etmektedir',
    ],
    featuredCarouselCta: 'Bilgi Al',
    featuredMoreLabel: 'Daha Fazlası',
 featuredProjects: [
      {
        kicker: 'DURAN VARLIK YÖNETİMİ',
        title: 'CORPRO Duran Varlık Yönetim Kokpiti',
        desc: 'Sabit kıymetlerinizi tek ekrandan yönetin; sayım, zimmet ve raporlama süreçlerinizi kolaylaştırın.',
        link: 'duran-varlik-yonetimi',
      },
       {
        kicker: 'YAPAY ZEKÂ DESTEKLİ İŞ GÜCÜ',
        title: 'Yapay Zekâ Destekli Dinamik İş Gücü Yönetimi',
        desc: 'Görev ve atama süreçlerini yapay zeka destekli bir karar motoruyla optimize edin.',
        link: 'yapayzeka',
      },
      {
        kicker: 'ENFLASYON MUHASEBESİ',
        title: 'CORPRO Enflasyon Muhasebesi Kokpiti',
        desc: 'Enflasyonlu dönemlerde mali tablolarınızı gerçek değerleriyle güncelleyin, güvenilir verilerle doğru kararlar alın.',
        link: 'enflasyon-muhasebesi',
      },
     
    ],
    whatWeOffer: 'NELER SUNUYORUZ?',
    ourServices: 'Hizmetlerimiz',
    ourTeam: 'EKİBİMİZ',
  },
    common: {
    learnMore: 'Detaylı bilgi →',
    contactArrow: 'İletişim →',
    logoAlt: 'Protek Yazılım Sistem Danışmanlık',
    menuAria: 'Menü',
    enLabel: 'English',
    trLabel: 'Türkçe',
  },
  services: {
    erp: {
      title: 'ERP Danışmanlığı',
      cardDesc: 'SAP ERP ile finans, tedarik zinciri ve operasyon süreçlerinizi tek bir platformda yönetin.',
      body: 'SAP ERP, şirketiniz için hayati önemde olan süreç ve operasyonlarınızı yönetmenizi kolaylaştırır ve bulunduğunuz sektörün ihtiyaçlarına uygun çözümler sunar.',
      features: [
        'SAP Finans Çözümleri ile bütünleşik mali işlemler yönetimi',
        'Tedarikçiden müşteriye tüm iş süreçlerinin yönetimi',
        'Esnek mimari ve gelişmiş otomasyon ile hata oranlarının azaltılması',
        'Grafiksel raporlama ve ülke bazlı hızlı uyarlama imkânı',
      ],
    },
    crm: {
      title: 'CRM Danışmanlığı',
      cardDesc: 'Pazarlama, satış ve servis modülleriyle bütünleşik SAP CRM çözümleri.',
      body: 'SAP CRM; Pazarlama, Satış ve Servis modüllerinden oluşur ve temel ERP modülleriyle çift yönlü entegrasyon içinde çalışarak müşteri odaklı süreçlerinizi güçlendirir.',
      features: [
        'Pazarlama: kaynak ve marka yönetimi, segmentasyon, kampanya ve aday müşteri yönetimi',
        'Satış: aktivite, fırsat, teklif, sipariş ve sözleşme yönetimi ile e-ticaret entegrasyonu',
        'Servis: kurulum, garanti, servis sözleşmeleri ve şikayet/iade yönetimi',
        'Etkileşim merkezi, e-servis ve mobil uygulama fonksiyonları',
      ],
    },
    edefter: {
      title: 'e-Defter',
      cardDesc: 'SAP sistemleri için XBRL raporlama altyapısı ile hızlı e-defter üretimi.',
      body: 'Protek e-Defter yazılımı ile SAP sistemini kullanan firmaların e-defter gereksinimlerini hızlı ve kaliteli bir şekilde karşılıyoruz.',
      features: [
        'SAP sistemi üzerinde XBRL raporlama alt yapısı',
        'Kullanıcılar sadece aşina oldukları SAP ekranlarını görür',
        'Mevcut Yevmiye Defteri programınıza kolay adaptasyon',
        'Performans sorunu yaşamadan hızlı sonuç alma',
      ],
    },
    ui5: {
      title: 'Fiori / UI5 Uygulamaları',
      cardDesc: 'Kurulum gerektirmeden tarayıcı üzerinden çalışan mobil, tablet ve masaüstü uygulamaları.',
      body: 'SAPUI5 teknolojisi ile tarayıcı üzerinden mobil, PC ve tablet gibi pek çok cihazda kurulum gerekmeden veri girişi, onay işlemleri ve raporlamalar yapılabilmektedir.',
      features: [
        'Tedarikçi ana veri yönetim uygulaması',
        'İş akışı ve onay ekranları',
        'Servis / saha uygulamaları',
        'Kaynak planlama çizelgesi',
      ],
    },
    ik: {
      title: 'İnsan Kaynakları',
      cardDesc: 'Sürekli eğitim, şeffaf yönetim ve çalışan haklarının korunması prensipleri.',
      body: 'Protek Yazılım’ı bugün bu noktaya getiren, şirket kültürümüzün ve temel prensiplerimizin tüm çalışanlarımız tarafından benimsenmiş olmasıdır.',
      features: [
        'Çalışanlarımıza sürekli eğitim ve kendini geliştirme olanakları sağlamak',
        'Şeffaf ve açık bir yönetim politikası izlemek',
        'Çalışanlarımızın maddi ve manevi haklarının korunmasını gözetmek',
      ],
      pillars: [
    { title: 'Sürekli Gelişim', desc: 'Çalışanlarımıza sürekli eğitim ve kendini geliştirme imkânları sunuyoruz.' },
    { title: 'Şeffaf İletişim', desc: 'Şeffaf ve açık bir yönetim politikası izliyor, çalışanlarımızla düzenli iletişim kuruyoruz.' },
    { title: 'Hakların Korunması', desc: 'Çalışanlarımızın maddi ve manevi haklarının korunmasını temel ilke olarak benimsiyoruz.' },
  ],
    },
    yapayzeka: {
      title: 'Yapay Zeka Proje Geliştirme',
      cardDesc: 'Makine öğrenmesi ve yapay zeka tabanlı çözümlerle iş süreçlerinizi otomatikleştirin.',
      body: 'İş süreçlerinizi verimli hale getirmek için makine öğrenmesi, doğal dil işleme ve öneri sistemleri gibi yapay zeka teknolojilerini kullanan uçtan uca projeler geliştiriyoruz. İhtiyaçlarınıza özel modeller tasarlıyor, mevcut sistemlerinize entegre ediyoruz.',
      features: [
        'Süreç otomasyonu ve akıllı karar destek sistemleri',
        'Makine öğrenmesi tabanlı tahmin ve optimizasyon modelleri',
        'Doğal dil işleme ve akıllı doküman/analiz çözümleri',
        'Mevcut SAP ve iş sistemlerinize entegre yapay zeka modülleri',
      ],
    },
  },
  contactCard: {
    title: 'Bize Ulaşın',
    desc: 'Projeleriniz veya demo taleplerimiz için ekibimizle iletişime geçin.',
  },
serviceDetail: {
    eyebrow: 'HİZMETLERİMİZ',
    whyProtek: 'Neden Protek?',
    ourSolutions: 'Sunduğumuz Çözümler:',
    requestInfo: 'Bilgi Talep Et',
    emailSubject: 'Bilgi Talebi',
    allServices: '← Tüm Hizmetler',
    notFound: 'Hizmet bulunamadı',
    backToServices: 'Hizmetlerimize Dön',
  },
  backButton: {
    goBack: 'Geri Dön',
  },
  footer: {
    brand: 'Protek Yazılım',
    rights: 'Tüm hakları saklıdır.',
  },
  footerLinks: {
    privacy: 'GİZLİLİK POLİTİKASI',
    kvkk: 'KVKK AYDINLATMA METNİ',
    cookies: 'ÇEREZ POLİTİKASI',
    terms: 'KULLANIM KOŞULLARI',
    registry: 'TİCARET SİCİL / MERSİS BİLGİLERİ',
    sla: 'HİZMET SEVİYESİ TAAHHÜTLERİ',
    quality: 'KALİTE POLİTİKASI',
    security: 'BİLGİ GÜVENLİĞİ POLİTİKASI',
  },
  products: {
    'duran-varlik-yonetimi': {
      eyebrow: 'İŞ ORTAĞI ÇÖZÜMÜ',
      title: 'CORPRO Duran Varlık Yönetim Kokpiti',
      partnerNote: 'İş ortağımız Corsist ile birlikte hayata geçirdiğimiz bir çözümdür.',
      lead: 'SAP altyapısına tam entegre çalışan bu kokpit, duran varlıklarınızın edinimden elden çıkarmaya kadar tüm yaşam döngüsünü tek ekrandan yönetmenizi sağlar; sayım, zimmet, transfer ve raporlama süreçlerini büyük ölçüde otomatikleştirir.',
      features: [
        'Barkod, QR kod ve RFID ile hızlı ve hatasız duran varlık sayımı',
        'Toplu veya bireysel zimmetleme; onay süreci PDF form üzerinden SAP dışından bile tamamlanabilir',
        'Sayım dışı transfer taleplerinin onay adımlarıyla yönetilmesi ve SAP\'ye otomatik yansıması',
        'Mobil sayım verilerinin harita üzerinde görüntülenmesi ve konum bazlı takip',
        'Araç takip sistemleriyle entegrasyon sayesinde mobil varlıkların gerçek zamanlı izlenmesi',
        'SAP FI-AA modülüyle tam entegre ana veri, değerleme ve raporlama süreçleri',
      ],
      partnerLinkLabel: 'Corsist ürün sayfasını görüntüle →',
      partnerLinkUrl: 'https://corsist.com/tr/cozumler/finans-ve-muhasebe-uygulamalar/corpro-duran-varlik-yonetim-kokpiti/',
    },
    'enflasyon-muhasebesi': {
      eyebrow: 'İŞ ORTAĞI ÇÖZÜMÜ',
      title: 'CORPRO Enflasyon Muhasebesi Kokpiti',
      partnerNote: 'İş ortağımız Corsist ile birlikte hayata geçirdiğimiz bir çözümdür.',
      lead: 'SAP R3 ve S/4HANA sistemlerine tam entegre çalışan kokpit, UFRS ve VUK standartlarına uygun enflasyon değerlemelerini otomatikleştirerek mali tablolarınızın enflasyonist ortamda gerçek durumu yansıtmasını sağlar.',
      features: [
        'UFRS ve VUK\'a göre standarda uygun endeks seçimi ve otomatik güncelleme',
        'SAP FI, CO, AA ve MM modülleriyle tam entegrasyon; değerleme farklarının otomatik muhasebeleştirilmesi',
        'Kâr merkezi, iş alanı ve muhatap şirket gibi kırılımlarda detaylı raporlama',
        'Stok, duran varlık, peşin ödenen gider/gelir ve bilanço hesapları için modül bazlı değerleme',
        'Danışmansız kullanıcı uyarlama ekranları ile esnek yapılandırma',
        'Muhasebe kaydı oluşturmadan test edebileceğiniz simülasyon modu',
      ],
      partnerLinkLabel: 'Corsist ürün sayfasını görüntüle →',
      partnerLinkUrl: 'https://corsist.com/tr/cozumler/finans-ve-muhasebe-uygulamalar/corpro-enflasyon-muhasebesi-kokpiti/',
    },
   yapayzeka: {
  eyebrow: 'YAPAY ZEKÂ DESTEKLİ ÜRÜN',
  title: 'Yapay Zekâ Destekli Dinamik İş Gücü Yönetimi',
  lead: 'Görev atama, takip ve raporlama süreçlerini yapay zeka ile optimize eden uçtan uca çözümler geliştiriyoruz. Makine öğrenmesi tabanlı karar motorlarını gerçek zamanlı operasyonel verilerle birleştirerek, doğru görevi doğru zamanda doğru kişiyle eşleştirmenizi sağlıyor; manuel planlama yükünü azaltırken verimliliği artırıyoruz.',
  features: [
    'Süreç otomasyonu ve akıllı karar destek sistemleri',
    'Makine öğrenmesi tabanlı tahmin ve optimizasyon modelleri',
    'Doğal dil işleme ve akıllı doküman/analiz çözümleri',
    'Mevcut SAP ve iş sistemlerinize entegre yapay zeka modülleri',
  ],
  subProduct: {
    kicker: 'HAYATA GEÇİRDİĞİMİZ ÜRÜN',
    title: 'ATS — Aktivite Takip Sistemi',
    featuresHeading: 'ATS Özellikleri:',
    lead: 'ATS, bu yapay zeka destekli iş gücü yönetimi yaklaşımını uygulamaya taşıyan web ve mobil uygulamadır. Ekiplerin ve bireysel kullanıcıların günlük efor kayıtlarını, görevlerini ve proje ilerlemesini tek bir merkezden takip etmesini sağlar. Alan (domain) bazlı girişle kurumsal düzeyde güvenlik sunar ve ekibinizin zamanını nereye harcadığını netleştirir.',
    features: [
      'Saniyeler içinde görev bazlı efor ve zaman kaydı girişi',
      'Gerçek zamanlı görev takibi ve önceliklendirme ile düzenli iş akışı',
      'Kolay okunur performans göstergeleri sunan canlı dashboard',
      'Alan (domain) bazlı girişle kurumsal düzeyde güvenli erişim',
      'Web ve mobil arasında kesintisiz senkronizasyon',
      'Proje, müşteri ve etiket bazlı filtreleme ile detaylı raporlama',
    ],
  },
  partnerNote: 'ATS, Protek Yazılım tarafından geliştirilen kendi ürünümüzdür.',
  partnerLinkLabel: "Google Play'de görüntüle →",
  partnerLinkUrl: 'https://play.google.com/store/apps/details?id=com.protek.ats_mobile&hl=tr',
  appStoreLinkLabel: "App Store'da görüntüle →",
  appStoreLinkUrl: 'https://apps.apple.com/tr/app/activity-tracking-system/id6670606350?l=tr',
},
  },
  policies: {
   privacy: {
      title: 'Gizlilik Politikası',
      updated: 'Son güncelleme: 31.07.2026',
      sections: [
        {
          heading: '1. Amaç ve Kapsam',
          body: [
            'Bu Gizlilik Politikası, Protek Yazılım Sistem Danışmanlık Bilgisayar Sanayi ve Ticaret Limited Şirketi ("Protek", "biz") tarafından ATS (Aktivite Takip Sistemi) platformu kapsamında kişisel verilerin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklamak amacıyla hazırlanmıştır.',
            'Bu politika, ats.proteksistem.com adresinden erişilen ATS web uygulaması ve buna eşlik eden mobil uygulamalar için geçerlidir. ATS platformunu kullanarak bu Gizlilik Politikası\'nın şartlarını kabul etmiş olursunuz.',
            'Sorularınız veya endişeleriniz için bilgi@proteksistem.com adresinden bizimle iletişime geçebilirsiniz.',
          ],
        },
        {
          heading: '2. Topladığımız Veriler',
          body: ['ATS\'e kayıt olduğunuzda ve platformu kullandığınızda aşağıdaki kişisel verileri toplayabiliriz:'],
          list: [
            'Ad, soyad ve e-posta adresi (giriş bilgisi olarak kullanılır)',
            'Çalışma alanı/organizasyon bilgisi',
            'Platform üzerinden girdiğiniz efor kayıtları, görev kayıtları ve proje verileri',
            'Cihaz bilgileri ve FCM push bildirim token\'ları (mobil uygulama bildirimleri için)',
            'IP adresi, tarayıcı türü ve oturum bilgileri (otomatik olarak toplanır)',
          ],
        },
        {
          heading: '3. Verilerinizi Nasıl Kullanıyoruz',
          body: ['Topladığımız veriler yalnızca aşağıdaki amaçlarla kullanılır:'],
          list: [
            'ATS platformunu sağlamak, işletmek ve sürdürmek',
            'Kimliğinizi doğrulamak ve oturumunuzu güvenli şekilde yönetmek',
            'İş aktivitenizle ilgili push bildirimleri göndermek (mobil uygulama)',
            'Efor geçmişinizi, proje ilerlemenizi ve performans verilerinizi size ve organizasyonunuzdaki yetkili yöneticilere göstermek',
            'Yasal yükümlülüklerimizi yerine getirmek',
          ],
        },
        {
          heading: '4. Veri Paylaşımı',
          body: ['Verileriniz hiçbir zaman reklam veya pazarlama kampanyaları amacıyla kullanılmaz ya da üçüncü taraflara satılmaz. Kişisel verilerinizi aşağıdaki durumlar dışında üçüncü taraflarla paylaşmayız:'],
          list: [
            'Organizasyonunuz içinde: Alanınızdaki yetkili kullanıcılar (ör. yöneticiler), girdiğiniz efor ve görev kayıtlarını görüntüleyebilir.',
            'Firebase (Google): FCM token\'ları, yalnızca cihazınıza push bildirimi gönderebilmek amacıyla Google Firebase ile paylaşılır.',
            'Yasal yükümlülükler: Kanunen gerekli olduğunda yetkili makamlara bilgi açıklayabiliriz.',
          ],
        },
        {
          heading: '5. Veri Güvenliği',
          body: ['Verilerinizin güvenliğini ciddiye alıyoruz. ATS platformu aşağıdaki güvenlik önlemlerini uygular:'],
          list: [
            'Aktarım halindeki tüm veriler SSL/TLS (256-bit) ile şifrelenir',
            'Hassas istek verileri, Hibrit RSA + AES-GCM şifreleme ile ek olarak korunur',
            'Kimlik doğrulama; kısa ömürlü erişim token\'ları ve dönen (rotating) yenileme token\'ları içeren JWT (JSON Web Token) ile yapılır',
            'Veriler güvenli, düzenli olarak yedeklenen bir veritabanında saklanır',
          ],
        },
        {
          heading: '6. Çerezler ve Oturum Verileri',
          body: [
            'ATS, oturumunuzu güvenli şekilde sürdürebilmek için oturum çerezleri, mobil uygulamada ise güvenli kalıcı bir çerez kullanır. Bu çerezler, sizi oturumda tutmak için gerekli olanın ötesinde kimliğinizi belirleyici bir bilgi içermez. Çerezleri istediğiniz zaman tarayıcı veya cihaz ayarlarınızdan temizleyebilirsiniz.',
          ],
        },
        {
          heading: '7. Haklarınız (KVKK / GDPR)',
          body: ['Yürürlükteki veri koruma mevzuatı uyarınca (6698 sayılı Kişisel Verilerin Korunması Kanunu - KVKK dahil), kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:'],
          list: [
            'Kişisel verilerinizin işlenip işlenmediğini öğrenme',
            'Verileriniz işlenmişse buna ilişkin bilgi talep etme',
            'İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme',
            'Verilerinizin aktarıldığı üçüncü tarafları bilme',
            'Eksik veya yanlış verilerin düzeltilmesini talep etme',
            'Verilerinizin silinmesini veya yok edilmesini talep etme (yasal saklama yükümlülükleri saklı kalmak kaydıyla)',
            'Yalnızca otomatik sistemler aracılığıyla oluşan işleme sonuçlarına itiraz etme',
            'Hukuka aykırı işleme nedeniyle uğradığınız zararların tazmin edilmesini talep etme',
          ],
        },
        {
          heading: '8. Veri Saklama Süresi',
          body: [
            'Kişisel verilerinizi, hesabınız aktif olduğu sürece veya ATS hizmetini sunmak için gerekli olduğu sürece saklarız. Efor ve proje kayıtları, kurumsal ve yasal kayıt tutma gerekliliklerini karşılamak amacıyla daha uzun süre saklanabilir. Hesap silme talebi üzerine, geçerli yasal yükümlülükler saklı kalmak kaydıyla kimlik belirleyici bilgileriniz kaldırılır.',
          ],
        },
        {
          heading: '9. Bu Politikadaki Değişiklikler',
          body: [
            'Protek Yazılım Sistem Danışmanlık, bu Gizlilik Politikası\'nı istediği zaman güncelleme hakkını saklı tutar. Değişiklikler, güncellenmiş bir yürürlük tarihiyle bu sayfada yayımlanır. Değişikliklerden sonra ATS platformunu kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.',
          ],
        },
      ],
    },
    kvkk: {
      title: '6698 Sayılı KVKK Kapsamında Aydınlatma Metni',
      updated: 'Son güncelleme: 2026',
      sections: [
        {
          heading: '1. Veri Sorumlusu',
          body: ['6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla Protek Yazılım Sistem Danışmanlık Bilgisayar Sanayi ve Ticaret Limited Şirketi tarafından işlenmektedir.'],
        },
        {
          heading: '2. İşlenen Kişisel Veriler ve Toplama Yöntemi',
          body: ['İletişim formları, teklif talepleri ve web sitesi kullanımı sırasında ad-soyad, e-posta, telefon ve mesaj içeriği gibi veriler, elektronik ortamda doğrudan sizin tarafınızdan sağlanan bilgiler yoluyla toplanır.'],
        },
        {
          heading: '3. İşleme Amaçları',
          list: [
            'Talep ve mesajlarınıza yanıt verilmesi',
            'Sunulan hizmetler hakkında bilgilendirme yapılması',
            'Müşteri ilişkileri süreçlerinin yürütülmesi',
            'Yasal yükümlülüklerin yerine getirilmesi',
          ],
        },
        {
          heading: '4. Kişisel Verilerin Aktarılması',
          body: ['Kişisel verileriniz, yasal zorunluluklar ve hizmet alınan tedarikçiler (barındırma/e-posta hizmet sağlayıcıları) haricinde üçüncü kişilerle paylaşılmamaktadır.'],
        },
        {
          heading: '5. İlgili Kişi Hakları (KVKK m.11)',
          body: ['KVKK\'nın 11. maddesi kapsamında; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme, yurt içinde/yurt dışında aktarıldığı üçüncü kişileri bilme, eksik/yanlış işlenmişse düzeltilmesini isteme, silinmesini/yok edilmesini isteme ve itiraz etme haklarına sahipsiniz.'],
        },
        {
          heading: '6. Başvuru Yöntemi',
          body: ['Yukarıdaki haklarınızı kullanmak için iletişim sayfamızda yer alan adres veya e-posta üzerinden yazılı olarak başvurabilirsiniz.'],
        },
      ],
    },
    cookies: {
      title: 'Çerez Politikası',
      updated: 'Son güncelleme: 31.07.2026',
      sections: [
        {
          heading: '1. Giriş',
          body: [
            'Çerez politikamız, gizlilik politikamızın bir parçasını oluşturur.',
            'proteksistem.com\'un ("Protek", "biz") temel işlevselliğini sağlamak, içeriği ve deneyimi kişiselleştirmek, site trafiğini analiz edebilmek ve sitemizi nasıl kullandığınızı anlayabilmek amacıyla çerezler kullanıyoruz. Bu politikayı, size sitemizde kullanılan çerezler ve bunlara ilişkin yapabileceğiniz seçimler hakkında bilgi vermek amacıyla hazırladık.',
            'Sitemizi ziyaret ettiğiniz süre boyunca "cookie" olarak da adlandırılan çerezlerin ve benzer teknolojilerin tarayıcınıza yerleştirilmesi söz konusu olabilir. "Tümünü Kabul Et" seçeneğini tercih etmeniz halinde çerez kullanımına izin vermiş olursunuz.',
          ],
        },
        {
          heading: '2. Çerez Nedir?',
          body: [
            'Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcınıza yerleştirilen basit metin dosyalarıdır ve kimlik bilgisi ya da başka özel bilgi içermez. Çerezler kişisel bilgi içermemekle birlikte, oturum bilgileri ve benzeri veriler anonim olarak saklanarak sizi tekrar tanımak ve benzeri işlevler için kullanılabilir.',
          ],
        },
        {
          heading: '3. Hangi Tür Çerezleri Kullanıyoruz?',
          list: [
            'Oturum Çerezleri: Sitede gezinirken geçici hafızada yer alan, tarayıcınızı kapattığınızda silinen çerezlerdir.',
            'Kalıcı Çerezler: Belirli bir tarih ya da süreyle sınırlı olan, bu süre sonunda kendiliğinden ya da siz silene kadar cihazınızda kalan çerezlerdir.',
            'Zorunlu Çerezler: Sitenin doğru şekilde çalışmasını sağlayan (dil tercihi, form doldurma, gezinme gibi) işlevler için kullanılır. Bu çerezler için onayınız aranmaz; yine de tarayıcı ayarlarınızdan engelleyebilirsiniz, ancak bu durumda sitenin bazı kısımları düzgün çalışmayabilir.',
            '3. Taraf Çerezleri: Kendi çerezlerimize ek olarak, iş ortaklarımızın sitemizi ve diğer siteleri önceki ziyaretlerinize dayalı olarak analiz etmesini ve size daha iyi bir deneyim sunmasını sağlayan çerezlerdir.',
          ],
        },
        {
          heading: '4. Sitemizde Hangi 3. Taraf Çerezleri Kullanılıyor?',
          body: [
            'Google Analytics: Sitemizin trafiğini analiz ederek kullanıcı deneyimini daha iyi anlamamızı sağlar. Daha fazla bilgi ve bu çerezlerden vazgeçme seçeneği için Google\'ın gizlilik ve çerez politikalarını inceleyebilirsiniz.',
            'Yukarıda belirtilen üçüncü taraflara ait bağlantılar aracılığıyla ulaşacağınız içeriklerin güvenilirliğine ilişkin herhangi bir sorumluluğumuz bulunmamaktadır.',
          ],
        },
        {
          heading: '5. Çerezler Hangi Amaçlarla Kullanılıyor?',
          body: ['Sitemizde çerezler, genel olarak size daha iyi bir deneyim sunmak ve hizmetlerimizi geliştirmemize yardımcı olmak amacıyla kullanılır. Bu çerezler sayesinde aşağıdaki hedefler gerçekleştirilebilir:'],
          list: [
            'Sitenin temel işlevlerinin (dil seçimi, form gönderimi, gezinme) düzgün çalışmasını sağlamak',
            'Site trafiğini ve kullanım istatistiklerini analiz etmek',
            'Sitemizi nasıl kullandığınızı anlamak ve kullanıcı deneyimini iyileştirmek',
          ],
        },
        {
          heading: '6. Çerezleri Nasıl Yönetebilir veya Silebilirsiniz?',
          body: [
            'Çerezleri, tarayıcınız imkân tanıyorsa tarayıcı ayarlarınızdan yönetebilirsiniz. Bu şekilde tüm çerezleri reddedebilir, bir çerez kaydedilmeden önce uyarı alabilir, yalnızca belirlediğiniz siteler için çerezleri kabul edebilir ya da önceden kabul ettiğiniz çerezleri silebilirsiniz.',
            'Sitemizdeki 3. taraf çerezlerinden, ilgili tarafın kendi sitesi üzerinden vazgeçme imkânı sunuyorsa faydalanabilirsiniz.',
            'Çerezleri reddetmeniz durumunda sitemizdeki bazı özellik ve işlevleri kullanamayabilirsiniz.',
            'Sitemize farklı tarayıcı ve/veya cihazlardan erişiyorsanız, her birinin çerez ayarlarını ayrı ayrı kontrol etmeniz gerektiğini hatırlatırız.',
          ],
        },
        {
          heading: '7. Politikadaki Değişiklikler',
          body: ['Çerez politikamızda yapılacak değişiklikler bu sayfa üzerinden yayımlanır. Politikamızı belirli aralıklarla yeniden gözden geçirmenizi öneririz.'],
        },
      ],
    },
    terms: {
      title: 'Kullanım Koşulları',
      updated: 'Son güncelleme: 2026',
      sections: [
        {
          heading: '1. Genel Hükümler',
          body: ['proteksistem.com web sitesini kullanarak bu Kullanım Koşullarını kabul etmiş sayılırsınız. Bu koşullar, sitenin kullanımına ilişkin kuralları ve sorumluluk sınırlarını belirler.'],
        },
        {
          heading: '2. Fikri Mülkiyet',
          body: ['Sitede yer alan tüm içerikler (metin, logo, görsel, tasarım vb.) Protek Yazılım\'a aittir veya Protek Yazılım tarafından lisanslı olarak kullanılmaktadır. İzinsiz kopyalanamaz, çoğaltılamaz veya dağıtılamaz.'],
        },
        {
          heading: '3. Sorumluluk Reddi',
          body: ['Site içeriği bilgilendirme amaçlıdır. Protek Yazılım, sitedeki bilgilerin güncelliği, doğruluğu veya eksiksizliğine ilişkin herhangi bir garanti vermez ve içeriğin kullanımından doğabilecek zararlardan sorumlu tutulamaz.'],
        },
        {
          heading: '4. Kullanım Sınırları',
          body: ['Kullanıcılar, siteyi yasalara aykırı, üçüncü kişilerin haklarını ihlal edici veya sitenin işleyişine zarar verici şekilde kullanamaz.'],
        },
        {
          heading: '5. Değişiklikler',
          body: ['Protek Yazılım, bu Kullanım Koşullarını önceden bildirimde bulunmaksızın güncelleme hakkını saklı tutar.'],
        },
      ],
    },
    registry: {
      title: 'Ticaret Sicil / MERSİS Bilgileri',
      updated: 'Son güncelleme: 2026',
      sections: [
        {
          heading: '1. Şirket Bilgileri',
          list: [
            'Ticaret Unvanı: Protek Yazılım Sistem Danışmanlık Bilgisayar Sanayi ve Ticaret Limited Şirketi',
            'MERSİS Numarası: 0733039662000010',
            'Ticaret Sicil Numarası: 26831',
            'Ticaret Sicil Müdürlüğü: GEBZE Ticaret Sicili Müdürlüğü',
            'Merkez Adresi: Barış Mah. Koşu Yolu Cad. TÜBİTAK Gebze Yerleşkesi Marmara Teknokent No: 32/17 İç Kapı No: Z01, Gebze / Kocaeli',
          ],
        },
        {
          heading: '2. İletişim',
          body: ['Şirket kayıt bilgileriyle ilgili sorularınız için iletişim sayfamızdaki kanallardan bize ulaşabilirsiniz.'],
        },
      ],
    },
    sla: {
      title: 'Hizmet Seviyesi Taahhütleri',
      updated: 'Son güncelleme: 31.07.2026',
      sections: [
        {
          heading: '1. Amaç ve Kapsam',
          body: ['Bu belge, Protek Yazılım tarafından sunulan yazılım ürünleri ("Protek e-Defter", "Corpro" ve diğer kurumsal çözümler) ile destek hizmetlerine ilişkin genel hizmet seviyesi taahhütlerimizi bilgilendirme amacıyla açıklar. Taahhütlerin kapsamı, ilgili müşteri ile imzalanan sözleşme ve hizmet şartlarına göre değişebilir.'],
        },
        {
          heading: '2. Teknik Destek Süreçleri',
          body: ['Müşterilerimize sunduğumuz teknik destek hizmeti, talep önceliğine göre sınıflandırılan bir süreçle yürütülür. Destek talepleri e-posta, telefon veya müşteri portalı üzerinden iletilebilir ve kayıt altına alınarak takip edilir.'],
        },
        {
          heading: '3. Erişilebilirlik (Uptime) Taahhüdü',
          body: ['Bulut tabanlı çözümlerimiz için hedeflenen sistem erişilebilirlik oranı %99,5 ve üzeridir. Planlı bakım çalışmaları önceden bildirilir ve mümkün olduğunca yoğun kullanım saatleri dışında gerçekleştirilir.'],
        },
        {
          heading: '4. Müdahale ve Çözüm Süreleri',
          list: [
            'Kritik önceliğe sahip arızalarda ilk müdahale süresi: 2 iş saati',
            'Yüksek önceliğe sahip taleplerde ilk müdahale süresi: 4 iş saati',
            'Normal öncelikli taleplerde ilk müdahale süresi: 1 iş günü',
            'Çözüm süreleri, sorunun kapsamına ve karmaşıklığına göre değişiklik gösterebilir',
          ],
        },
        {
          heading: '5. Kapsam Dışı Durumlar',
          body: ['Mücbir sebepler, üçüncü taraf altyapı sağlayıcılarından kaynaklanan kesintiler ve müşteri kaynaklı yapılandırma hataları bu taahhütlerin kapsamı dışındadır.'],
        },
        {
          heading: '6. İletişim',
          body: ['Hizmet seviyesi taahhütlerimiz hakkında detaylı bilgi almak için iletişim sayfamızdaki kanallardan bize ulaşabilirsiniz.'],
        },
      ],
    },
    quality: {
      title: 'Kalite Politikası',
      updated: 'Son güncelleme: 31.07.2026',
      sections: [
        {
          heading: '1. Amaç',
          body: ['Protek Yazılım Sistem Danışmanlık Bilgisayar Sanayi ve Ticaret Limited Şirketi olarak, sunduğumuz danışmanlık ve yazılım hizmetlerinde en yüksek kalite standartlarını sağlamayı ve bunu sürdürülebilir kılmayı taahhüt ederiz.'],
        },
        {
          heading: '2. Kalite Yaklaşımımız',
          body: ['Kalite yönetim sistemimiz, müşteri beklentilerini doğru anlamak, projelerimizi zamanında ve eksiksiz teslim etmek ve sunduğumuz her çözümde tutarlı bir kalite seviyesi sağlamak üzerine kurulmuştur.'],
        },
        {
          heading: '3. Sürekli İyileştirme',
          body: ['Süreçlerimizi düzenli olarak gözden geçirir, elde ettiğimiz geri bildirimler ve performans verileri doğrultusunda hizmetlerimizi sürekli olarak geliştiririz. Bu yaklaşım, hem iç süreçlerimize hem de müşterilerimize sunduğumuz çözümlere yansır.'],
        },
        {
          heading: '4. Müşteri Memnuniyeti',
          body: ['Müşteri memnuniyeti, kalite politikamızın merkezinde yer alır. Projelerimizin her aşamasında müşteri geri bildirimlerini dikkate alır, beklentileri karşılayan ya da aşan çözümler üretmeyi hedefleriz.'],
        },
        {
          heading: '5. Çalışan Katılımı',
          body: ['Kalite hedeflerimize ulaşmak için tüm çalışanlarımızın bilinçli katılımını önemser, ekibimize düzenli eğitim ve gelişim imkânları sunarız.'],
        },
        {
          heading: '6. Gözden Geçirme',
          body: ['Kalite politikamız, uygunluğunu, doğruluğunu ve etkinliğini sağlamak amacıyla yılda bir kez veya önemli değişiklikler olması durumunda yönetim katılımıyla gözden geçirilir ve güncellenir.'],
        },
      ],
    },
  },

  contact: {
    title: 'İletişim',
    companyName: 'Protek Yazılım Sistem Danışmanlık',
    address: 'Adres',
    addressText: 'Barış Mah. Koşu Yolu Cad. TÜBİTAK Gebze Yerleşkesi Marmara Teknokent No: 32/17 İç Kapı No: Z01, Gebze / Kocaeli',
    phone: 'Telefon',
    email: 'E-posta',
    location: 'Konum',
    mapLinkText: "Google Haritalar'da Aç →",
    formTitle: 'İletişim Formu',
    formSubtitle: 'Size nasıl yardımcı olabiliriz?',
    namePlaceholder: 'Adınız Soyadınız',
    emailPlaceholder: 'E-posta Adresiniz',
    messagePlaceholder: 'Mesajınız',
    sending: 'Gönderiliyor...',
    send: 'Gönder',
    successMsg: 'Mesajınız gönderildi, teşekkürler!',
    errorMsg: 'Bir hata oluştu, lütfen tekrar deneyin.',
    mapTitle: 'Protek Yazılım Konum Haritası',
    kvkkLinkLabel: 'KVKK Aydınlatma Metni',
    kvkkConsentText: "'ni okudum, kabul ediyorum.",
  },
  
  cookieConsent: {
    title: 'İzin Tercihlerinizi Özelleştirin',
    text: 'İnternet sitemizde deneyiminizi kişiselleştirmek amacıyla çerezler kullanılmaktadır. İzin vermeniz halinde zorunlu çerezler dışındaki çerezlerle toplanan veriler işlenmektedir. Çerez tercihlerinizi çerez ayarları kısmından yönetebilir, detaylı bilgiye',
    policyLinkLabel: 'Çerez Politikası',
    policyLinkSuffix: 'sayfasından ulaşabilirsiniz.',
    settingsLink: 'Çerez Ayarları',
    reject: 'Reddet',
    accept: 'Kabul Et',
    modalTitle: 'Çerez Ayarları',
    modalIntro: 'Herhangi bir web sitesini ziyaret ettiğinizde, site tarayıcınızdan genellikle tanımlama bilgileri biçiminde bilgi alabilir veya depolayabilir. Bu bilgiler sizi doğrudan tanımlamaz ancak size daha kişiselleştirilmiş bir web deneyimi sunar. Bazı çerez türlerine izin vermemeyi seçebilirsiniz.',
    acceptAll: 'Tümünü Kabul Et',
    necessary: 'Zorunlu Çerezler',
    necessaryDesc: 'Bu çerezler sitenin temel işlevleri için gereklidir ve kapatılamaz.',
    functionalDesc: 'Dil tercihi gibi kişiselleştirilmiş özellikleri hatırlamak için kullanılır.',
    targetingDesc: 'Size özel reklam gösterebilmek için ilgi alanlarınızı takip eder.',
    performanceDesc: 'Site trafiğini ve kullanım istatistiklerini analiz etmemizi sağlar.',
    necessaryAlwaysOn: 'Her Zaman Etkin',
    functional: 'İşlevsellik İçin Gerekli Olan Çerezler',
    targeting: 'Hedefleme ve Kişiselleştirilmiş Reklam Çerezleri',
    performance: 'Performans ve Analiz İçin Gerekli Olan Çerezler',
    saveSettings: 'Çerez Ayarlarımı Kaydet',
  },
    validation: {
    name: 'Lütfen adınızı soyadınızı girin.',
    email: 'Lütfen geçerli bir e-posta adresi girin.',
    message: 'Lütfen bir mesaj yazın.',
    kvkk: 'Formu gönderebilmek için KVKK Aydınlatma Metni\'ni onaylamanız gerekmektedir.',
  },
  securityPolicy: {
    docNo: 'Doküman No: POL.01',
    issueDate: 'Yayım Tarihi: 20.02.2026',
    revNo: 'Rev. No: 00',
    title: 'Bilgi Güvenliği Politikası',
    paragraphs: [
      'Kurumumuz gizlilik, bütünlük ve tüm fiziksel ve elektronik bilgi varlıklarını korumayı taahhüt etmektedir. Bilgi ve bilgi güvenliği gereksinimleri kurumsal hedeflerimiz ile aynı doğrultuda olacaktır.',
      'Kurumumuz yönetimi değişime açık, iyi eğitim almış, konusunda yetkin personel istihdamı sağlayacak ve sektör içerisinde rakiplerimizle rekabeti sağlayacak finansmanı sağlamak, yeterli donanım ve altyapıyı bulunduracaktır. Bu altyapı ve personel ile birlikte gerekli finansmanda sağlanacaktır.',
      'İş sürekliliği ve acil durum planları, veri yedekleme prosedürleri, virüslerden ve bilgisayar korsanlarından sakınma, erişim kontrol sistemleri ve bilgi güvenliği ihlal bildirimi temel faaliyetlerimizin temel taşlarını oluşturacaktır.',
      'Yapılan risk değerlendirmeleri sonucunda elde edilen açıklıklar ve tehditler bertaraf edilerek müşteri ve personelimizin bilgilerine güvenli erişim sağlanacaktır. Ayrıca risk değerlendirmeleri sonucunda amaçlarımızı belirleyip bu amaçların başarılması için gerekli olan kaynaklar ve şartlar sağlanacaktır.',
      'Bu politikayı gerçekleştirmek için başta çalışanlarımızın Bilgi Güvenliği Yönetim Sistemi şartlarını çalışma biçimi haline getirmelerini beklemekteyiz. Tüm personel ve belirli üçüncü tarafların Bilgi Güvenliği Yönetim Sistemi ile ilgili uygun eğitimleri alması sağlanacaktır.',
      'Bilgi güvenliği ile ilgili uygulanabilir şartlar ve bu şartların getirdiği fırsatlar ve gereklilikler yerine getirilecek ve bu şartlar sürekli iyileştirilecektir. Ayrıca, bölüm personelimizin ve tüm ilgili tarafların bu sisteme adaptasyonu sağlanacaktır.',
      'Bilgi Güvenliği Politikamız yılda bir kez ya da firmamızla ilgili önemli değişikliklerin olması durumunda uygunluğunu, doğruluğunu ve etkinliğini sağlamak için yönetim ve birim sorumlularının katılımıyla gözden geçirilmekte ve güncelliği sağlanmaktadır.',
    ],
    signature1: 'Protek Yazılım Sistem Danışmanlık Bilgisayar Sanayi ve Ticaret Limited Şirketi',
    signature2: 'Genel Müdür',
  },
};

export default tr;