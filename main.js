/* ============================================================
   Sudan Cyber House — main.js
   Vanilla JS only. No frameworks, no backend.
   ============================================================ */

(function () {
  'use strict';

  /* ==========================================================
     1) TRANSLATIONS
     ========================================================== */
  const translations = {
    ar: {
      /* nav */
      'nav.home': 'الرئيسية',
      'nav.about': 'من نحن',
      'nav.events': 'الفعاليات',
      'nav.invest': 'الاستثمار',
      'nav.contact': 'تواصل معنا',
      'nav.menu': 'الأقسام',

      /* footer */
      'footer.tagline': 'نبني مستقبل السودان السيبراني.',
      'footer.linksTitle': 'روابط',
      'footer.contactTitle': 'تواصل',
      'footer.rights': '© 2026 Sudan Cyber House. جميع الحقوق محفوظة.',
      'footer.signature': 'تصميم وتطوير: Kin — د. أيمن الكناني',

      /* hero */
      'hero.kicker': 'الأمن السيبراني · السودان · المستقبل',
      'hero.title.ar': 'البيت السيبراني السوداني',
      'hero.title.en': 'Sudan Cyber House',
      'hero.tagline': 'نبني جيلًا سودانيًا يقود مستقبل الأمن السيبراني.',
      'hero.sub': 'تعليم مجاني، مهارات حقيقية، وفرص عالمية للسودانيين من 10 إلى 70 عامًا.',
      'hero.cta1': 'ابدأ رحلة التعلم',
      'hero.cta2': 'اكتشف المشروع',
      'hero.meta1num': '10–70',
      'hero.meta1label': 'سنوات العمر المستهدف',
      'hero.meta2num': '100%',
      'hero.meta2label': 'تعليم مجاني',
      'hero.meta3num': 'Online',
      'hero.meta3label': 'المرحلة الحالية',

      /* vision & mission */
      'vision.eyebrow': 'رؤيتنا',
      'vision.title': 'رؤيتنا',
      'vision.text': 'نؤمن أن السودان يمتلك عقولًا قادرة على المنافسة عالميًا في الأمن السيبراني، وأن الوصول إلى المعرفة لا يجب أن يكون امتيازًا لمن يستطيع دفع تكلفتها. لذلك نبني بيئة تعليمية سودانية مجانية ومفتوحة للجميع، ونحوّل المعرفة إلى مهارات وفرص حقيقية.',
      'mission.title': 'رسالتنا',
      'mission.text': 'إتاحة التعليم والتدريب العملي في الأمن السيبراني لكل سوداني، من الأطفال إلى كبار السن، وبناء مجتمع رقمي آمن يمتلك المهارات اللازمة للعمل والمنافسة عالميًا.',

      /* audience */
      'audience.eyebrow': 'الفئة المستهدفة',
      'audience.title': 'الأمن السيبراني للجميع',
      'audience.desc': 'من الطفولة إلى الحكمة — كل مرحلة عمرية لها مكانها في هذه الرحلة.',
      'audience.note1': 'لا يوجد عمر متأخر لتعلم الأمن السيبراني.',
      'audience.note2': 'لا يشترط أن تكون مبرمجًا لتبدأ.',

      /* inclusion */
      'inclusion.eyebrow': 'الشمول',
      'inclusion.title': 'مكان للجميع',
      'inclusion.text': 'Sudan Cyber House مفتوح للسودانيين من جميع الخلفيات، للنساء والرجال، للطلاب والموظفين، للمبتدئين والمحترفين، ولكل شخص لديه الرغبة في التعلم والمساهمة.',
      'inclusion.tag1': 'نساء ورجال',
      'inclusion.tag2': 'طلاب وموظفون',
      'inclusion.tag3': 'مبتدئون ومحترفون',
      'inclusion.tag4': 'جميع الخلفيات',
      'inclusion.tag5': 'جميع الولايات',
      'inclusion.tag6': 'من الداخل والخارج',

      /* roadmap */
      'roadmap.eyebrow': 'مسار التعلم',
      'roadmap.title': 'من المعرفة الأساسية إلى العمل',
      'roadmap.desc': 'عشر مراحل تأخذ المتعلم خطوة بخطوة نحو الاحتراف.',
      'road1.t': 'الوعي السيبراني', 'road1.d': 'فهم المخاطر الرقمية الأساسية في الحياة اليومية.',
      'road2.t': 'السلامة الرقمية', 'road2.d': 'حماية الهوية والبيانات الشخصية على الإنترنت.',
      'road3.t': 'أساسيات الأمن السيبراني', 'road3.d': 'المفاهيم والمبادئ التي يقوم عليها المجال.',
      'road4.t': 'الشبكات', 'road4.d': 'فهم كيفية عمل الشبكات وبنيتها التحتية.',
      'road5.t': 'الاختراق الأخلاقي', 'road5.d': 'اكتشاف الثغرات بأسلوب مسؤول ومرخّص.',
      'road6.t': 'الأمن الدفاعي', 'road6.d': 'بناء أنظمة حماية واستجابة استباقية.',
      'road7.t': 'مراكز العمليات والاستجابة', 'road7.d': 'التعامل مع الحوادث الأمنية لحظة وقوعها.',
      'road8.t': 'الأمن السيبراني المتقدم', 'road8.d': 'تخصصات عميقة في مجالات متقدمة.',
      'road9.t': 'مشاريع حقيقية', 'road9.d': 'تطبيق المهارات على حالات وسيناريوهات واقعية.',
      'road10.t': 'المسار المهني والتوظيف', 'road10.d': 'الانتقال من التعلم إلى فرص عمل حقيقية.',

      /* flow */
      'flow.eyebrow': 'من متعلم إلى محترف',
      'flow.title': 'من متعلم إلى محترف',
      'flow.text': 'هدفنا ألا تنتهي رحلة المتعلم عند الشهادة. نريد بناء مسار يسمح للمتميزين بتحويل مهاراتهم إلى مشاريع حقيقية، ثم إلى فرص عمل ومساهمة داخل Sudan Cyber House أو في السوق العالمي.',
      'flow.learn': 'تعلّم', 'flow.practice': 'طبّق', 'flow.build': 'ابنِ', 'flow.work': 'اعمل', 'flow.lead': 'قد',

      /* stats */
      'stats.n1': '10–70', 'stats.l1': 'سنوات العمر المستهدف',
      'stats.n2': '100%', 'stats.l2': 'تعلم مجاني',
      'stats.n3': 'Online', 'stats.l3': 'المرحلة الحالية',
      'stats.n4': 'Global', 'stats.l4': 'الهدف النهائي',

      /* why sudan */
      'why.eyebrow': 'لماذا السودان؟',
      'why.title': 'لماذا السودان؟',
      'why.li1': 'شباب موهوب يمتلك فضولًا تقنيًا حقيقيًا.',
      'why.li2': 'طاقات رقمية لم تُستثمر بالشكل الكافي بعد.',
      'why.li3': 'احتياج متزايد للمهارات الرقمية محليًا وإقليميًا.',
      'why.li4': 'فرصة حقيقية لبناء قطاع Cybersecurity من الصفر.',
      'why.li5': 'إمكانية تصدير خدمات رقمية سودانية للعالم.',
      'why.quote': 'لا نريد أن يكون السودان مستهلكًا للتكنولوجيا فقط؛ نريد أن يكون السودان منتجًا للمعرفة والخدمات السيبرانية.',

      /* global goal */
      'goal.eyebrow': 'الهدف العالمي',
      'goal.titleEn': 'Our Goal: Make Sudan a Global Cyber Destination',
      'goal.titleAr': 'هدفنا: جعل السودان وجهة سيبرانية دولية',
      'goal.text': 'من مجتمع محلي متعلم إلى شبكة سودانية قادرة على المنافسة والتعاون مع العالم أجمع.',

      /* page hero generic */
      'page.about.eyebrow': 'من نحن',
      'page.about.title': 'قصة Sudan Cyber House',
      'page.about.sub': 'مشروع سوداني واحد، برؤية عالمية.',

      /* about page */
      'about.n1': '01', 'about.who.title': 'من نحن', 'about.who.text': 'Sudan Cyber House هو مبادرة سودانية تهدف إلى نشر ثقافة ومهارات الأمن السيبراني بين السودانيين على اختلاف أعمارهم وخلفياتهم، بشكل مجاني بالكامل في مرحلته الحالية.',
      'about.n2': '02', 'about.vision.title': 'رؤيتنا', 'about.vision.text': 'بناء جيل سوداني قوي في الأمن السيبراني، وإتاحة التعلم مجانًا للجميع من عمر 10 إلى 70 سنة، بغض النظر عن الجنس أو الخلفية أو المستوى الاقتصادي.',
      'about.n3': '03', 'about.mission.title': 'رسالتنا', 'about.mission.text': 'إتاحة التعليم والتدريب العملي في الأمن السيبراني لكل سوداني، وبناء مجتمع رقمي آمن يمتلك المهارات اللازمة للعمل والمنافسة عالميًا.',
      'about.n4': '04', 'about.goals.title': 'أهدافنا', 'about.goals.text': 'تدريب آلاف السودانيين، وبناء مسار واضح من التعلم إلى العمل الفعلي، وتأسيس مجتمع سيبراني سوداني قادر على المنافسة دوليًا.',
      'about.n5': '05', 'about.why.title': 'لماذا السودان؟', 'about.why.text': 'لأن السودان يستحق أن يكون منتجًا للمعرفة السيبرانية، لا مجرد مستهلك لها، ولأن شبابه يملكون كل المقومات لتحقيق ذلك.',
      'about.n6': '06', 'about.audience.title': 'الفئة المستهدفة', 'about.audience.text': 'كل سوداني بين 10 و70 عامًا، بغض النظر عن خلفيته التعليمية أو التقنية، مرحّب به في هذه الرحلة.',
      'about.n7': '07', 'about.philosophy.title': 'فلسفة المشروع', 'about.philosophy.text': 'المعرفة حق، لا امتياز. نبدأ من التعليم المجاني، وننتهي ببناء صناعة سيبرانية سودانية حقيقية: Learn → Practice → Build → Work → Lead.',
      'about.n8': '08', 'about.future.title': 'مستقبل Sudan Cyber House', 'about.future.text': 'من مشروع Online بسيط اليوم، إلى منظومة سودانية متكاملة تصنع فرصًا وتصدّر خبرات سيبرانية للعالم غدًا.',

      'founder.role': 'المؤسس والمصمم والمطور الوحيد',
      'founder.text': 'تم تصميم وبناء Sudan Cyber House بالكامل بواسطة شخص واحد: Kin — د. أيمن الكناني.',
      'founder.badge': 'Designed & Built by Kin',

      /* events page */
      'page.events.eyebrow': 'الفعاليات',
      'page.events.title': 'فعاليات Sudan Cyber House',
      'page.events.sub': 'محطات قادمة في رحلة بناء المجتمع السيبراني السوداني.',
      'event1.num': 'الفعالية 01',
      'event1.title': 'Sudan Cyber House — مارس 2027',
      'event1.date': 'March 2027',
      'event1.status': 'قريبًا',
      'event2.num': 'الفعالية 02',
      'event2.title': 'Sudan Cyber House — سبتمبر 2027',
      'event2.date': 'September 2027',
      'event2.status': 'قريبًا',
      'event.viewMore': 'عرض التفاصيل',

      'modal.title': 'المشروع قيد التطوير',
      'modal.text1': 'مازال المشروع قيد التنفيذ.',
      'modal.text2': 'سيتم نشر تفاصيل الفعالية على الموقع فور الاستعداد.',
      'modal.ok': 'حسنًا',

      /* invest page */
      'page.invest.eyebrow': 'الاستثمار',
      'invest.title.ar': 'استثمر في مستقبل السودان السيبراني',
      'invest.title.en': "Invest in Sudan's Cyber Future",
      'invest.sub': 'شراكة استراتيجية لبناء منظومة سيبرانية سودانية متكاملة.',
      'invest.card1.t': 'التعليم السيبراني', 'invest.card1.d': 'برامج تعلم مجانية وشاملة لكل الأعمار.',
      'invest.card2.t': 'المعامل السيبرانية', 'invest.card2.d': 'بيئات تدريب عملية وواقعية.',
      'invest.card3.t': 'البنية التحتية للتدريب', 'invest.card3.d': 'أدوات ومنصات تدعم التعلم المستمر.',
      'invest.card4.t': 'البحث العلمي', 'invest.card4.d': 'دراسات وأبحاث تخدم المجال محليًا.',
      'invest.card5.t': 'تطوير المواهب', 'invest.card5.d': 'صقل المهارات وتأهيلها لسوق العمل.',
      'invest.card6.t': 'التوظيف', 'invest.card6.d': 'ربط المتعلمين المتميزين بفرص حقيقية.',
      'invest.card7.t': 'الشراكات الدولية', 'invest.card7.d': 'بناء جسور تعاون مع جهات عالمية.',
      'invest.card8.t': 'الابتكار السيبراني', 'invest.card8.d': 'دعم أفكار ومشاريع سيبرانية سودانية جديدة.',
      'invest.message': 'الاستثمار في الإنسان السوداني هو استثمار في مستقبل السودان.',
      'invest.ctaTitle': 'كن شريكًا في المستقبل',
      'invest.ctaText': 'انضم إلينا كشريك أو مستثمر في بناء أول منظومة سيبرانية سودانية متكاملة.',
      'invest.ctaBtn': 'تواصل معنا',

      /* contact page */
      'page.contact.eyebrow': 'تواصل معنا',
      'contact.title': 'تواصل مع Sudan Cyber House',
      'contact.sub': 'يسعدنا تواصلك معنا لأي استفسار أو شراكة أو فكرة.',
      'contact.infoTitle': 'معلومات التواصل',
      'contact.email': 'البريد الإلكتروني',
      'contact.location': 'الموقع',
      'contact.locationVal': 'السودان — Online',
      'contact.formName': 'الاسم',
      'contact.formEmail': 'البريد الإلكتروني',
      'contact.formSubject': 'الموضوع',
      'contact.formMessage': 'الرسالة',
      'contact.formSubmit': 'إرسال',
      'contact.errRequired': 'هذا الحقل مطلوب.',
      'contact.errEmail': 'يرجى إدخال بريد إلكتروني صحيح.',
      'contact.success': 'شكرًا لتواصلك معنا. المشروع مازال في مرحلة التطوير وسيتم تفعيل نظام التواصل الكامل قريبًا.',
    },

    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.events': 'Events',
      'nav.invest': 'Invest',
      'nav.contact': 'Contact',
      'nav.menu': 'Menu',

      'footer.tagline': "Building Sudan's Cyber Future.",
      'footer.linksTitle': 'Links',
      'footer.contactTitle': 'Contact',
      'footer.rights': '© 2026 Sudan Cyber House. All Rights Reserved.',
      'footer.signature': 'Designed & Built by Kin — Dr. Ayman Alkinani',

      'hero.kicker': 'Cybersecurity · Sudan · The Future',
      'hero.title.ar': 'Sudan Cyber House',
      'hero.title.en': 'البيت السيبراني السوداني',
      'hero.tagline': "Building a Sudanese generation that leads the future of cybersecurity.",
      'hero.sub': 'Free education, real skills, and global opportunities for Sudanese people aged 10 to 70.',
      'hero.cta1': 'Start Learning',
      'hero.cta2': 'Discover the Project',
      'hero.meta1num': '10–70',
      'hero.meta1label': 'target age range',
      'hero.meta2num': '100%',
      'hero.meta2label': 'free education',
      'hero.meta3num': 'Online',
      'hero.meta3label': 'current stage',

      'vision.eyebrow': 'Our Vision',
      'vision.title': 'Our Vision',
      'vision.text': 'We believe Sudan has minds capable of competing globally in cybersecurity, and that access to knowledge should never be a privilege reserved for those who can afford it. That is why we are building a free, open Sudanese learning environment — turning knowledge into real skills and opportunities.',
      'mission.title': 'Our Mission',
      'mission.text': 'Making cybersecurity education and hands-on training available to every Sudanese person, from children to the elderly, and building a safe digital community with the skills to work and compete globally.',

      'audience.eyebrow': 'Who It Is For',
      'audience.title': 'Cybersecurity for Everyone',
      'audience.desc': 'From childhood to wisdom — every age group has a place in this journey.',
      'audience.note1': "It's never too late to learn cybersecurity.",
      'audience.note2': "You don't need to be a programmer to start.",

      'inclusion.eyebrow': 'Inclusion',
      'inclusion.title': 'A Place for Everyone',
      'inclusion.text': 'Sudan Cyber House is open to Sudanese people of all backgrounds — women and men, students and professionals, beginners and experts, and anyone with the will to learn and contribute.',
      'inclusion.tag1': 'Women & Men',
      'inclusion.tag2': 'Students & Professionals',
      'inclusion.tag3': 'Beginners & Experts',
      'inclusion.tag4': 'All Backgrounds',
      'inclusion.tag5': 'All States',
      'inclusion.tag6': 'At Home & Abroad',

      'roadmap.eyebrow': 'Learning Path',
      'roadmap.title': 'From Fundamentals to a Career',
      'roadmap.desc': 'Ten stages that guide learners step by step toward mastery.',
      'road1.t': 'Cyber Awareness', 'road1.d': 'Understanding basic digital risks in everyday life.',
      'road2.t': 'Digital Safety', 'road2.d': 'Protecting identity and personal data online.',
      'road3.t': 'Cybersecurity Fundamentals', 'road3.d': 'The core concepts the field is built on.',
      'road4.t': 'Networking', 'road4.d': 'Understanding how networks and infrastructure work.',
      'road5.t': 'Ethical Hacking', 'road5.d': 'Finding vulnerabilities responsibly and legally.',
      'road6.t': 'Defensive Security', 'road6.d': 'Building proactive protection and response systems.',
      'road7.t': 'SOC & Incident Response', 'road7.d': 'Handling security incidents as they happen.',
      'road8.t': 'Advanced Cybersecurity', 'road8.d': 'Deep specialization in advanced domains.',
      'road9.t': 'Real Projects', 'road9.d': 'Applying skills to real-world scenarios.',
      'road10.t': 'Career & Employment', 'road10.d': 'Moving from learning to real job opportunities.',

      'flow.eyebrow': 'From Learner to Professional',
      'flow.title': 'From Learner to Professional',
      'flow.text': "Our goal is that a learner's journey doesn't end with a certificate. We want to build a path that lets top talent turn their skills into real projects — and then into jobs and contributions inside Sudan Cyber House or the global market.",
      'flow.learn': 'Learn', 'flow.practice': 'Practice', 'flow.build': 'Build', 'flow.work': 'Work', 'flow.lead': 'Lead',

      'stats.n1': '10–70', 'stats.l1': 'target age range',
      'stats.n2': '100%', 'stats.l2': 'free learning',
      'stats.n3': 'Online', 'stats.l3': 'current stage',
      'stats.n4': 'Global', 'stats.l4': 'ultimate goal',

      'why.eyebrow': 'Why Sudan?',
      'why.title': 'Why Sudan?',
      'why.li1': 'Talented young people with genuine technical curiosity.',
      'why.li2': 'Digital potential that remains largely untapped.',
      'why.li3': 'Growing demand for digital skills locally and regionally.',
      'why.li4': 'A real opportunity to build a cybersecurity sector from scratch.',
      'why.li5': 'The potential to export Sudanese digital services to the world.',
      'why.quote': "We don't want Sudan to only consume technology; we want Sudan to produce cybersecurity knowledge and services.",

      'goal.eyebrow': 'The Global Goal',
      'goal.titleEn': 'Our Goal: Make Sudan a Global Cyber Destination',
      'goal.titleAr': 'هدفنا: جعل السودان وجهة سيبرانية دولية',
      'goal.text': 'From a local learning community to a Sudanese network able to compete and collaborate with the world.',

      'page.about.eyebrow': 'About Us',
      'page.about.title': 'The Story of Sudan Cyber House',
      'page.about.sub': 'One Sudanese project, one global vision.',

      'about.n1': '01', 'about.who.title': 'Who We Are', 'about.who.text': 'Sudan Cyber House is a Sudanese initiative dedicated to spreading cybersecurity culture and skills among Sudanese people of all ages and backgrounds, completely free in its current stage.',
      'about.n2': '02', 'about.vision.title': 'Our Vision', 'about.vision.text': 'Building a strong Sudanese generation in cybersecurity, with free learning for everyone aged 10 to 70, regardless of gender, background, or economic status.',
      'about.n3': '03', 'about.mission.title': 'Our Mission', 'about.mission.text': 'Making cybersecurity education and practical training available to every Sudanese person, and building a safe digital community with the skills to work and compete globally.',
      'about.n4': '04', 'about.goals.title': 'Our Goals', 'about.goals.text': 'Training thousands of Sudanese people, building a clear path from learning to real work, and establishing a Sudanese cyber community able to compete internationally.',
      'about.n5': '05', 'about.why.title': 'Why Sudan?', 'about.why.text': 'Because Sudan deserves to produce cybersecurity knowledge, not just consume it — and because its youth have everything it takes to make that happen.',
      'about.n6': '06', 'about.audience.title': 'Who It Is For', 'about.audience.text': 'Every Sudanese person aged 10 to 70, regardless of educational or technical background, is welcome on this journey.',
      'about.n7': '07', 'about.philosophy.title': 'Project Philosophy', 'about.philosophy.text': 'Knowledge is a right, not a privilege. We start with free education and build toward a real Sudanese cyber industry: Learn → Practice → Build → Work → Lead.',
      'about.n8': '08', 'about.future.title': 'The Future of Sudan Cyber House', 'about.future.text': "From a simple online project today, to a complete Sudanese ecosystem that creates opportunities and exports cyber expertise to the world tomorrow.",

      'founder.role': 'Founder, Designer & Sole Developer',
      'founder.text': 'Sudan Cyber House is designed and built entirely by one person: Kin — Dr. Ayman Alkinani.',
      'founder.badge': 'Designed & Built by Kin',

      'page.events.eyebrow': 'Events',
      'page.events.title': 'Sudan Cyber House Events',
      'page.events.sub': 'Upcoming milestones in building the Sudanese cyber community.',
      'event1.num': 'Event 01',
      'event1.title': 'Sudan Cyber House — March 2027',
      'event1.date': 'March 2027',
      'event1.status': 'Coming Soon',
      'event2.num': 'Event 02',
      'event2.title': 'Sudan Cyber House — September 2027',
      'event2.date': 'September 2027',
      'event2.status': 'Coming Soon',
      'event.viewMore': 'View details',

      'modal.title': 'Project Under Development',
      'modal.text1': 'The project is still under development.',
      'modal.text2': 'Event details will be published on the website when ready.',
      'modal.ok': 'OK',

      'page.invest.eyebrow': 'Invest',
      'invest.title.ar': "Invest in Sudan's Cyber Future",
      'invest.title.en': 'استثمر في مستقبل السودان السيبراني',
      'invest.sub': 'A strategic partnership to build a complete Sudanese cyber ecosystem.',
      'invest.card1.t': 'Cybersecurity Education', 'invest.card1.d': 'Free, comprehensive learning programs for all ages.',
      'invest.card2.t': 'Cyber Labs', 'invest.card2.d': 'Practical, real-world training environments.',
      'invest.card3.t': 'Training Infrastructure', 'invest.card3.d': 'Tools and platforms that support continuous learning.',
      'invest.card4.t': 'Research', 'invest.card4.d': 'Studies and research that serve the field locally.',
      'invest.card5.t': 'Talent Development', 'invest.card5.d': 'Refining skills and preparing talent for the job market.',
      'invest.card6.t': 'Employment', 'invest.card6.d': 'Connecting top learners with real opportunities.',
      'invest.card7.t': 'International Partnerships', 'invest.card7.d': 'Building bridges of cooperation with global entities.',
      'invest.card8.t': 'Cybersecurity Innovation', 'invest.card8.d': 'Supporting new Sudanese cybersecurity ideas and projects.',
      'invest.message': "Investing in the Sudanese person is investing in Sudan's future.",
      'invest.ctaTitle': 'Be a Partner in the Future',
      'invest.ctaText': 'Join us as a partner or investor in building the first complete Sudanese cyber ecosystem.',
      'invest.ctaBtn': 'Contact Us',

      'page.contact.eyebrow': 'Contact',
      'contact.title': 'Contact Sudan Cyber House',
      'contact.sub': "We'd love to hear from you — questions, partnerships, or ideas.",
      'contact.infoTitle': 'Contact Information',
      'contact.email': 'Email',
      'contact.location': 'Location',
      'contact.locationVal': 'Sudan — Online',
      'contact.formName': 'Name',
      'contact.formEmail': 'Email',
      'contact.formSubject': 'Subject',
      'contact.formMessage': 'Message',
      'contact.formSubmit': 'Send',
      'contact.errRequired': 'This field is required.',
      'contact.errEmail': 'Please enter a valid email address.',
      'contact.success': "Thank you for reaching out. The project is still in development, and the full contact system will be activated soon.",
    }
  };

  const STORAGE_KEY = 'sch_lang';
  const getSavedLang = () => localStorage.getItem(STORAGE_KEY);
  const setSavedLang = (lang) => { try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {} };

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.ar;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('.lang-toggle span').forEach((s) => {
      s.classList.toggle('is-active', s.getAttribute('data-lang') === lang);
    });
    document.title = document.title; // no-op, titles set per page below
    updatePageTitle(lang);
  }

  const pageTitles = {
    index: { ar: 'Sudan Cyber House | البيت السيبراني السوداني', en: 'Sudan Cyber House' },
    about: { ar: 'من نحن | Sudan Cyber House', en: 'About Us | Sudan Cyber House' },
    events: { ar: 'الفعاليات | Sudan Cyber House', en: 'Events | Sudan Cyber House' },
    invest: { ar: 'الاستثمار | Sudan Cyber House', en: 'Invest | Sudan Cyber House' },
    contact: { ar: 'تواصل معنا | Sudan Cyber House', en: 'Contact | Sudan Cyber House' },
  };

  function updatePageTitle(lang) {
    const page = document.body.getAttribute('data-page') || 'index';
    const map = pageTitles[page];
    if (map) document.title = map[lang] || map.ar;
  }

  function initLanguage() {
    const saved = getSavedLang() || 'ar';
    applyTranslations(saved);

    document.querySelectorAll('.lang-toggle span').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setSavedLang(lang);
        applyTranslations(lang);
      });
    });
  }

  /* ==========================================================
     2) MOBILE MENU
     ========================================================== */
  function initMobileMenu() {
    const toggle = document.querySelector('.btn-menu-toggle');
    const nav = document.querySelector('.mobile-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ==========================================================
     3) HEADER SCROLL BEHAVIOR
     ========================================================== */
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ==========================================================
     4) ACTIVE NAVIGATION
     ========================================================== */
  function initActiveNav() {
    const page = document.body.getAttribute('data-page') || 'index';
    document.querySelectorAll('.main-nav a, .mobile-nav a').forEach((a) => {
      if (a.getAttribute('data-page') === page) a.classList.add('active');
    });
  }

  /* ==========================================================
     5) SMOOTH SCROLL (in-page anchors)
     ========================================================== */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const headerH = document.querySelector('.site-header')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ==========================================================
     6) SCROLL REVEAL
     ========================================================== */
  function initScrollReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    items.forEach((el) => io.observe(el));
  }

  /* ==========================================================
     7) ANIMATED COUNTERS
     ========================================================== */
  function animateCounter(el) {
    const raw = el.getAttribute('data-count-to');
    if (!raw) return;
    const isNumeric = /^\d+$/.test(raw);
    if (!isNumeric) { el.textContent = raw; return; }
    const target = parseInt(raw, 10);
    const suffix = el.getAttribute('data-count-suffix') || '';
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-count-to]');
    if (!counters.length) return;
    if (!('IntersectionObserver' in window)) {
      counters.forEach(animateCounter);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach((el) => io.observe(el));
  }

  /* ==========================================================
     8) EVENT MODAL
     ========================================================== */
  function initEventModal() {
    const overlay = document.querySelector('.modal-overlay');
    if (!overlay) return;
    const cards = document.querySelectorAll('.event-card');
    const closeBtn = overlay.querySelector('[data-modal-close]');

    function open() {
      overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      overlay.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    cards.forEach((card) => {
      card.addEventListener('click', open);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
      });
    });
    closeBtn?.addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  /* ==========================================================
     9) CONTACT FORM VALIDATION
     ========================================================== */
  function initContactForm() {
    const form = document.querySelector('#contact-form');
    if (!form) return;
    const successBox = document.querySelector('.form-success');
    const lang = () => document.documentElement.getAttribute('lang') || 'ar';

    function showError(group, key) {
      group.classList.add('has-error');
      const errEl = group.querySelector('.form-error');
      if (errEl) errEl.textContent = translations[lang()][key];
    }
    function clearError(group) {
      group.classList.remove('has-error');
    }

    function validEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      const fields = form.querySelectorAll('[data-field]');

      fields.forEach((input) => {
        const group = input.closest('.form-group');
        const value = input.value.trim();
        clearError(group);

        if (!value) {
          showError(group, 'contact.errRequired');
          isValid = false;
          return;
        }
        if (input.type === 'email' && !validEmail(value)) {
          showError(group, 'contact.errEmail');
          isValid = false;
        }
      });

      if (!isValid) return;

      successBox.textContent = translations[lang()]['contact.success'];
      successBox.classList.add('is-shown');
      form.reset();
      successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    form.querySelectorAll('[data-field]').forEach((input) => {
      input.addEventListener('input', () => clearError(input.closest('.form-group')));
    });
  }

  /* ==========================================================
     10) CURRENT YEAR
     ========================================================== */
  function initCurrentYear() {
    document.querySelectorAll('[data-current-year]').forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ==========================================================
     INIT
     ========================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initMobileMenu();
    initHeaderScroll();
    initActiveNav();
    initSmoothScroll();
    initScrollReveal();
    initCounters();
    initEventModal();
    initContactForm();
    initCurrentYear();
  });
})();
console.log("What are you doing in the console?")
