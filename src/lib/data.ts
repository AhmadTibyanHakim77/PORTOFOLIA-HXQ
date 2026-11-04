// Single source of truth untuk konten portfolio Ahmad Tibyan Hakim
// Sesuai data terverifikasi — Tanpa data fiktif / placeholder

export type Locale = "id" | "en";

export const site = {
  name: "Ahmad Tibyan Hakim",
  headline: {
    id: "Membangun Produk Digital Terukur & Mentransformasi Data Menjadi Solusi Cerdas.",
    en: "Building Scalable Digital Products and Transforming Data into Intelligent Solutions.",
  },
  description: {
    id: "Full Stack Developer dan Data Science Enthusiast yang berdedikasi membangun aplikasi web modern, merancang solusi perangkat lunak terukur, menganalisis data, serta mengeksplorasi teknologi machine learning.",
    en: "Full Stack Developer and Data Science Enthusiast passionate about building modern web applications, developing scalable software solutions, analyzing data, and exploring machine learning technologies.",
  },
  title: {
    id: "Full Stack Developer · Data Analyst & Data Science Enthusiast",
    en: "Full Stack Developer · Data Analyst & Data Science Enthusiast",
  },
  url: "https://github.com/AhmadTibyanHakim77",
  email: "ahmadtibyanhakim09@gmail.com",
  github: "https://github.com/AhmadTibyanHakim77",
  githubUsername: "AhmadTibyanHakim77",
  location: {
    id: "Yogyakarta, Indonesia",
    en: "Yogyakarta, Indonesia",
  },
  avatar: "/profile.svg",
};

export const heroOrbitChips = [
  "Next.js",
  "Laravel",
  "Python",
  "TypeScript",
  "Machine Learning",
];

export const navItems = {
  id: [
    { id: "hero", label: "Intro" },
    { id: "about", label: "Tentang" },
    { id: "stack", label: "Tech Stack" },
    { id: "projects", label: "Proyek" },
    { id: "github", label: "GitHub" },
    { id: "process", label: "Proses" },
    { id: "expertise", label: "Keahlian" },
    { id: "contact", label: "Kontak" },
  ],
  en: [
    { id: "hero", label: "Intro" },
    { id: "about", label: "About" },
    { id: "stack", label: "Tech Stack" },
    { id: "projects", label: "Projects" },
    { id: "github", label: "GitHub" },
    { id: "process", label: "Process" },
    { id: "expertise", label: "Expertise" },
    { id: "contact", label: "Contact" },
  ],
};

export interface StackItem {
  n: string;
  d: string;
}

export interface StackGroup {
  group: string;
  items: StackItem[];
}

export const stackData: Record<Locale, StackGroup[]> = {
  id: [
    {
      group: "Programming Languages",
      items: [
        { n: "PHP", d: "Pengembangan server-side dan backend web application modern." },
        { n: "Python", d: "Analisis data komputasional, automasi, dan pemodelan machine learning." },
        { n: "JavaScript", d: "Pengembangan logika web interaktif dan arsitektur runtime modern." },
        { n: "TypeScript", d: "Sistem type-safety statis untuk skalabilitas basis kode besar." },
        { n: "Java", d: "Pemrograman berorientasi objek yang kuat dan perancangan sistem enterprise." },
        { n: "C++", d: "Algoritma komputasi performa tinggi dan manajemen memori sistem." },
      ],
    },
    {
      group: "Frontend Development",
      items: [
        { n: "React", d: "Arsitektur antarmuka berbasis komponen modular dan reaktif." },
        { n: "Next.js", d: "Server Components, App Router, SSR, dan optimasi SEO." },
        { n: "Tailwind CSS", d: "Sistem desain utilitas cepat dan konsisten di seluruh breakpoint." },
        { n: "HTML5", d: "Struktur semantik dokumen web modern dan aksesibilitas ramah SEO." },
        { n: "CSS3", d: "Styling modern, transisi responsif, dan layout flexbox/grid." },
        { n: "Vite", d: "Build tool performa tinggi dengan Hot Module Replacement instan." },
      ],
    },
    {
      group: "Backend Development",
      items: [
        { n: "Laravel", d: "Framework PHP elegan dengan ORM Eloquent, autentikasi, & REST API." },
        { n: "Node.js", d: "Runtime JavaScript asynchronous berkecepatan tinggi di sisi server." },
        { n: "Express.js", d: "Framework minimalis untuk membangun mikroservis dan API endpoints." },
      ],
    },
    {
      group: "Database",
      items: [
        { n: "MySQL", d: "RDBMS andal dengan integritas data transaksional terstandarisasi." },
        { n: "PostgreSQL", d: "Database objek-relasional canggih untuk query data kompleks." },
        { n: "MongoDB", d: "Database NoSQL berorientasi dokumen untuk skema data fleksibel." },
      ],
    },
    {
      group: "Data Analytics",
      items: [
        { n: "SQL", d: "Query agregasi data tingkat lanjut, filtering, dan data extraction." },
        { n: "Microsoft Excel", d: "Eksplorasi data, pembuatan pivot table, dan pemodelan kalkulasi." },
        { n: "Tableau", d: "Perancangan dashboard analitik visual dan visualisasi bisnis interaktif." },
        { n: "Google Colab", d: "Eksekusi notebook berbasis cloud dengan dukungan akselerasi GPU." },
        { n: "Jupyter Notebook", d: "Lingkungan interaktif untuk eksplorasi dataset dan dokumentasi riset." },
      ],
    },
    {
      group: "Data Science",
      items: [
        { n: "Pandas", d: "Manipulasi data tabular, pembersihan dataset, dan data wrangling." },
        { n: "NumPy", d: "Komputasi numerik array multi-dimensi dan operasi aljabar linier." },
        { n: "Matplotlib", d: "Pembuatan grafik ilmiah dan visualisasi distribusi data fundamental." },
        { n: "Seaborn", d: "Visualisasi data statistik dengan styling tingkat lanjut dan estetik." },
      ],
    },
    {
      group: "Machine Learning",
      items: [
        { n: "Scikit-learn", d: "Algoritma klasifikasi, regresi, clustering, & pipeline preprocessing." },
        { n: "XGBoost", d: "Gradient boosting teroptimasi untuk performa kompetitif data terstruktur." },
        { n: "LightGBM", d: "Gradient boosting berkecepatan tinggi dengan efisiensi memori optimal." },
        { n: "CatBoost", d: "Algoritma gradient boosting tangguh untuk menangani fitur kategorikal." },
        { n: "Optuna", d: "Framework automasi penyesuaian hyperparameter (hyperparameter tuning)." },
        { n: "SHAP", d: "Interpretasi dan visualisasi kontribusi fitur pada prediksi model ML." },
      ],
    },
    {
      group: "Deep Learning & AI",
      items: [
        { n: "TensorFlow", d: "Ekosistem open-source komprehensif untuk melatih model deep learning." },
        { n: "Keras", d: "API tingkat tinggi untuk perancangan dan pelatihan arsitektur neural network." },
        { n: "CNN", d: "Convolutional Neural Network untuk ekstraksi fitur spasial dan pemrosesan citra." },
        { n: "RNN & LSTM", d: "Jaringan saraf berulang untuk memodelkan data deret waktu dan sekuensial." },
        { n: "Transformers & NLP", d: "Pemrosesan bahasa alami modern berbasis mekanisme attention." },
        { n: "Hugging Face", d: "Pemanfaatan model pretrained mutakhir untuk berbagai tugas AI." },
      ],
    },
    {
      group: "Development Tools",
      items: [
        { n: "Git & GitHub", d: "Version control kolaboratif, branching strategy, dan repositori kode." },
        { n: "VS Code", d: "Editor kode terkonfigurasi dengan extension debugging dan linting." },
        { n: "Docker", d: "Kontainerisasi lingkungan deployment untuk konsistensi lintas mesin." },
        { n: "Postman", d: "Pengujian fungsionalitas, dokumentasi, dan automasi endpoint REST API." },
        { n: "Linux", d: "Pengelolaan server, shell scripting bash, dan navigasi command line." },
      ],
    },
  ],
  en: [
    {
      group: "Programming Languages",
      items: [
        { n: "PHP", d: "Server-side logic and robust web application backend engineering." },
        { n: "Python", d: "Computational data analysis, automation, and machine learning modeling." },
        { n: "JavaScript", d: "Interactive browser interfaces and asynchronous server-side logic." },
        { n: "TypeScript", d: "Static typing for scalable, maintainable, and bug-free codebases." },
        { n: "Java", d: "Solid object-oriented programming principles and enterprise architecture." },
        { n: "C++", d: "High-performance systems programming, memory management, & algorithms." },
      ],
    },
    {
      group: "Frontend Development",
      items: [
        { n: "React", d: "Declarative component-driven user interfaces with reactive state." },
        { n: "Next.js", d: "Server Components, App Router, SSR performance, and SEO optimization." },
        { n: "Tailwind CSS", d: "Rapid utility-first styling with consistent design tokens." },
        { n: "HTML5", d: "Semantic structural markup engineered for accessibility and web standards." },
        { n: "CSS3", d: "Modern responsive layouts, flexbox, grid, and fluid micro-interactions." },
        { n: "Vite", d: "Ultra-fast frontend build tooling with instantaneous Hot Module Reloading." },
      ],
    },
    {
      group: "Backend Development",
      items: [
        { n: "Laravel", d: "Elegant PHP framework featuring Eloquent ORM, auth, and REST APIs." },
        { n: "Node.js", d: "High-throughput asynchronous JavaScript runtime for backend services." },
        { n: "Express.js", d: "Lightweight and unopinionated web framework for APIs and microservices." },
      ],
    },
    {
      group: "Database",
      items: [
        { n: "MySQL", d: "Relational database management with transactional data integrity." },
        { n: "PostgreSQL", d: "Advanced enterprise-grade SQL database for complex relational data." },
        { n: "MongoDB", d: "Document-oriented NoSQL database supporting flexible dynamic schemas." },
      ],
    },
    {
      group: "Data Analytics",
      items: [
        { n: "SQL", d: "Complex data querying, aggregations, schema joins, and data extraction." },
        { n: "Microsoft Excel", d: "Data manipulation, advanced formula modeling, and pivot tables." },
        { n: "Tableau", d: "Interactive dashboard creation and visual business intelligence analytics." },
        { n: "Google Colab", d: "Cloud-hosted notebooks with hardware GPU accelerators for data experiments." },
        { n: "Jupyter Notebook", d: "Interactive workflow for data exploration, prototyping, and analysis." },
      ],
    },
    {
      group: "Data Science",
      items: [
        { n: "Pandas", d: "Tabular data structures, preprocessing, wrangling, and dataset cleaning." },
        { n: "NumPy", d: "High-performance multi-dimensional array operations and linear algebra." },
        { n: "Matplotlib", d: "Foundational publication-quality plotting and distribution visualization." },
        { n: "Seaborn", d: "Statistical graphic exploration with refined aesthetic presets." },
      ],
    },
    {
      group: "Machine Learning",
      items: [
        { n: "Scikit-learn", d: "Supervised and unsupervised algorithms, classification, and metrics." },
        { n: "XGBoost", d: "Optimized gradient boosted decision trees for competitive accuracy." },
        { n: "LightGBM", d: "Fast, distributed gradient boosting framework for large-scale data." },
        { n: "CatBoost", d: "High-accuracy gradient boosting with native categorical feature support." },
        { n: "Optuna", d: "Automated hyperparameter optimization framework with pruning mechanisms." },
        { n: "SHAP", d: "Explainable AI framework quantifying feature impact on model outcomes." },
      ],
    },
    {
      group: "Deep Learning & AI",
      items: [
        { n: "TensorFlow", d: "End-to-end open source platform for training deep learning models." },
        { n: "Keras", d: "High-level neural network API for rapid neural architecture prototyping." },
        { n: "CNN", d: "Convolutional Neural Networks for spatial representation and image analysis." },
        { n: "RNN & LSTM", d: "Recurrent networks tailored for sequential processing and time series." },
        { n: "Transformers & NLP", d: "Attention-based language architectures for natural language understanding." },
        { n: "Hugging Face", d: "Pretrained foundation models and tokenizers for state-of-the-art AI tasks." },
      ],
    },
    {
      group: "Development Tools",
      items: [
        { n: "Git & GitHub", d: "Collaborative distributed version control, pull requests, and Git flow." },
        { n: "VS Code", d: "Extensible code editor configured with strict linters and debuggers." },
        { n: "Docker", d: "Containerized reproducible application environments from dev to deploy." },
        { n: "Postman", d: "API testing, endpoint benchmarking, automated collection runs, and docs." },
        { n: "Linux", d: "Server administration, bash automation scripts, and command-line tooling." },
      ],
    },
  ],
};

export type ProjectCategory = "web" | "ai-ml" | "data";

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  tags: string[];
  image: string;
  description: string;
  role: string;
  features: string[];
  github: string;
  demo: string | null;
}

export const projectsData: Record<Locale, ProjectItem[]> = {
  id: [
    {
      id: "tunas-tabung",
      title: "Tunas-Tabung",
      category: "web",
      categoryLabel: "Web Application",
      tags: ["Laravel", "Blade", "PHP", "MySQL"],
      image: "/projects/tunastabung.svg",
      description: "Aplikasi web manajemen tabungan digital terstruktur yang dirancang untuk pencatatan alokasi dana dan monitoring pencapaian target finansial.",
      role: "Full Stack Developer",
      features: [
        "Sistem pencatatan transaksi tabungan dan alokasi anggaran berkala",
        "Dashboard pemantauan progres target finansial secara real-time",
        "Autentikasi pengguna dan manajemen data finansial aman",
      ],
      github: "https://github.com/AhmadTibyanHakim77/Tunas-Tabung",
      demo: null,
    },
    {
      id: "antrein",
      title: "Antrein",
      category: "web",
      categoryLabel: "Web Application",
      tags: ["TypeScript", "React", "Node.js", "Tailwind CSS"],
      image: "/projects/antrein.svg",
      description: "Platform antrean digital berbasis web yang mengotomasi alur pemanggilan tiket dan memangkas waktu tunggu layanan secara efisien.",
      role: "Frontend & Full Stack Engineer",
      features: [
        "Pembaruan status nomor antrean secara responsif dan interaktif",
        "Panel kontrol loket layanan untuk administrasi panggilan pelanggan",
        "Antarmuka pengguna teroptimasi untuk layar publik dan perangkat mobile",
      ],
      github: "https://github.com/AhmadTibyanHakim77/Antrein",
      demo: null,
    },
    {
      id: "studymate-ai",
      title: "StudyMate-AI",
      category: "ai-ml",
      categoryLabel: "AI Application",
      tags: ["TypeScript", "AI Integration", "React", "Next.js"],
      image: "/projects/studymate-ai.svg",
      description: "Aplikasi pendamping belajar cerdas terintegrasi kecerdasan buatan untuk membantu mahasiswa menyusun materi dan memecahkan soal akademik.",
      role: "AI & Full Stack Developer",
      features: [
        "Integrasi antarmuka chat cerdas untuk tanya-jawab materi akademik",
        "Rangkuman materi otomatis dan generator kuis belajar interaktif",
        "Arsitektur frontend type-safe berbasis Next.js dan TypeScript",
      ],
      github: "https://github.com/AhmadTibyanHakim77/StudyMate-AI",
      demo: null,
    },
    {
      id: "careerly",
      title: "Careerly AI Career Platform",
      category: "ai-ml",
      categoryLabel: "AI Career Platform",
      tags: ["TypeScript", "AI Modeling", "Next.js", "Tailwind CSS"],
      image: "/projects/careerly.svg",
      description: "Platform karir cerdas berbasis AI yang menganalisis profil keahlian kandidat serta memberikan rekomendasi jalur karir dan persiapan kerja.",
      role: "Full Stack & AI Engineer",
      features: [
        "Analisis profil keahlian dan pencocokan rekomendasi peran industri",
        "Umpan balik kurikulum vitae dan panduan persiapan wawancara",
        "Pengalaman pengguna modular dan responsif",
      ],
      github: "https://github.com/AhmadTibyanHakim77/careerly-ai-career-platform",
      demo: null,
    },
    {
      id: "projek-dimas-baby-shop",
      title: "Projek Dimas Baby Shop",
      category: "web",
      categoryLabel: "E-Commerce",
      tags: ["PHP", "Blade", "Laravel", "MySQL"],
      image: "/projects/dimas-baby-shop.svg",
      description: "Sistem e-commerce toko perlengkapan bayi yang menyediakan katalog produk terstruktur, manajemen inventaris, dan transaksi pembelian.",
      role: "Backend & Web Developer",
      features: [
        "Katalog produk perlengkapan bayi dengan kategori dan pencarian",
        "Sistem keranjang belanja terintegrasi dengan kalkulasi pesanan",
        "Dashboard admin untuk pengelolaan stok dan data pesanan",
      ],
      github: "https://github.com/AhmadTibyanHakim77/projek-dimas-baby-shop",
      demo: null,
    },
    {
      id: "obat-tani",
      title: "Obat Tani",
      category: "web",
      categoryLabel: "Agricultural Website",
      tags: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      image: "/projects/obat-tani.svg",
      description: "Website portal informasi dan penyedia produk pertanian untuk mendukung petani dalam memilih obat dan pupuk tanaman yang tepat.",
      role: "Web Developer",
      features: [
        "Katalog obat dan nutrisi pertanian terorganisir berdasarkan hama tanaman",
        "Sistem database MySQL untuk penyimpanan data produk pertanian",
        "Antarmuka responsif dan mudah diakses dari perangkat mobile",
      ],
      github: "https://github.com/AhmadTibyanHakim77/obat-tani",
      demo: null,
    },
    {
      id: "adidas-store",
      title: "Adidas Store",
      category: "web",
      categoryLabel: "E-Commerce Website",
      tags: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
      image: "/projects/adidas-store.svg",
      description: "Implementasi antarmuka e-commerce ritel sepatu dan pakaian olahraga dengan fokus pada pengalaman visual dinamis dan navigasi katalog.",
      role: "Frontend Developer",
      features: [
        "Showcase produk dengan layout grid modern dan filter kategori",
        "Interaksi micro-animations pada detail produk dan tombol aksi",
        "Desain responsif yang optimal di smartphone, tablet, dan desktop",
      ],
      github: "https://github.com/AhmadTibyanHakim77/adidas-store",
      demo: null,
    },
    {
      id: "bakery",
      title: "Bakery",
      category: "web",
      categoryLabel: "Website",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/projects/bakery.svg",
      description: "Website bakery modern yang menampilkan katalog produk roti artisanal, informasi outlet, dan layanan pemesanan dengan performa tinggi.",
      role: "Frontend Developer",
      features: [
        "Arsitektur Server-Side Rendering untuk loading cepat dan optimasi SEO",
        "Tampilan galeri menu roti berkualitas tinggi dengan micro-interaction",
        "Sistem type-safe TypeScript untuk pemeliharaan kode jangka panjang",
      ],
      github: "https://github.com/AhmadTibyanHakim77/bakery",
      demo: null,
    },
    {
      id: "tetra-coffee",
      title: "Tetra Coffee",
      category: "web",
      categoryLabel: "Coffee Shop Website",
      tags: ["Next.js", "Laravel", "TypeScript", "Tailwind CSS"],
      image: "/projects/tetra-coffee.svg",
      description: "Aplikasi web coffee shop modern yang mengintegrasikan frontend Next.js interaktif dengan backend Laravel untuk katalog dan reservasi.",
      role: "Full Stack Developer",
      features: [
        "Integrasi antarmuka Next.js dengan RESTful API backend Laravel",
        "Menu kopi digital interaktif dan alur pemesanan meja",
        "Desain bertema warm-minimalist dengan animasi transisi halus",
      ],
      github: "https://github.com/AhmadTibyanHakim77/tetra-coffee",
      demo: null,
    },
    {
      id: "adult-income-prediction",
      title: "Adult Income Prediction",
      category: "ai-ml",
      categoryLabel: "Machine Learning",
      tags: ["Python", "Jupyter Notebook", "Scikit-learn", "Pandas"],
      image: "/projects/adult-income-prediction.svg",
      description: "Proyek machine learning klasifikasi untuk memprediksi tingkat pendapatan individu (>50K vs <=50K) berdasarkan data demografis sensus.",
      role: "Machine Learning Engineer",
      features: [
        "Pembersihan data sensus, penanganan missing values, dan encoding fitur",
        "Pelatihan dan evaluasi model komparatif (Random Forest, Logistic Regression)",
        "Analisis metrik evaluasi klasifikasi (Accuracy, ROC-AUC, Precision, Recall)",
      ],
      github: "https://github.com/AhmadTibyanHakim77/adult-income-prediction",
      demo: null,
    },
    {
      id: "stock-market-analysis",
      title: "Stock Market Analysis",
      category: "data",
      categoryLabel: "Financial Data Analysis",
      tags: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib"],
      image: "/projects/stock-market-prediction.svg",
      description: "Analisis data historis pasar saham untuk mengidentifikasi tren pergerakan harga, volatilitas aset, dan indikator teknikal keuangan.",
      role: "Data Analyst",
      features: [
        "Pengolahan time-series data harga penutupan dan volume perdagangan saham",
        "Kalkulasi moving averages (SMA/EMA) dan evaluasi volatilitas",
        "Visualisasi visual interaktif untuk mendukung pengambilan keputusan investasi",
      ],
      github: "https://github.com/AhmadTibyanHakim77/stock-market-analysis",
      demo: null,
    },
    {
      id: "gold-price-forecasting",
      title: "Gold Price Forecasting",
      category: "data",
      categoryLabel: "Time Series Analysis",
      tags: ["Python", "Jupyter Notebook", "Time Series", "Pandas"],
      image: "/projects/gold-price.svg",
      description: "Pemodelan peramalan deret waktu untuk memproyeksikan fluktuasi harga komoditas emas menggunakan data historis multivariat.",
      role: "Data Analyst & Modeler",
      features: [
        "Analisis stasioneritas data deret waktu dan dekomposisi tren musiman",
        "Penerapan model forecasting deret waktu untuk estimasi pergerakan harga",
        "Evaluasi error metrik (RMSE, MAE) dan interpretasi hasil peramalan",
      ],
      github: "https://github.com/AhmadTibyanHakim77/gold-price-forecasting",
      demo: null,
    },
    {
      id: "leres-sae",
      title: "LERES SAE",
      category: "web",
      categoryLabel: "Institutional Web Platform",
      tags: ["Web Architecture", "Database Design", "Full Stack"],
      image: "/projects/leres-sae.svg",
      description: "Inisiatif platform web institusional untuk digitalisasi pencatatan data dan koordinasi aktivitas operasional secara terpusat.",
      role: "Lead Full Stack Developer",
      features: [
        "Perancangan arsitektur antarmuka dan pemodelan relasi database",
        "Sistem pelaporan data terstruktur untuk efisiensi koordinasi tim",
      ],
      github: "https://github.com/AhmadTibyanHakim77",
      demo: null,
    },
  ],
  en: [
    {
      id: "tunas-tabung",
      title: "Tunas-Tabung",
      category: "web",
      categoryLabel: "Web Application",
      tags: ["Laravel", "Blade", "PHP", "MySQL"],
      image: "/projects/tunastabung.svg",
      description: "A structured digital savings management web application designed for systematic budget allocation and financial milestone tracking.",
      role: "Full Stack Developer",
      features: [
        "Periodic transaction logging and budget allocation system",
        "Real-time visual dashboard monitoring financial progress milestones",
        "Secure user authentication and data integrity mechanisms",
      ],
      github: "https://github.com/AhmadTibyanHakim77/Tunas-Tabung",
      demo: null,
    },
    {
      id: "antrein",
      title: "Antrein",
      category: "web",
      categoryLabel: "Web Application",
      tags: ["TypeScript", "React", "Node.js", "Tailwind CSS"],
      image: "/projects/antrein.svg",
      description: "A web-based digital queue management platform that streamlines service ticketing and eliminates customer waiting bottlenecks.",
      role: "Frontend & Full Stack Engineer",
      features: [
        "Responsive, low-latency live ticket state synchronization",
        "Operator service desk control panel for call management",
        "Accessible interfaces optimized for both public monitors and mobile devices",
      ],
      github: "https://github.com/AhmadTibyanHakim77/Antrein",
      demo: null,
    },
    {
      id: "studymate-ai",
      title: "StudyMate-AI",
      category: "ai-ml",
      categoryLabel: "AI Application",
      tags: ["TypeScript", "AI Integration", "React", "Next.js"],
      image: "/projects/studymate-ai.svg",
      description: "An AI-powered academic study companion assisting students in synthesizing study materials, generating quizzes, and clarifying concepts.",
      role: "AI & Full Stack Developer",
      features: [
        "Context-aware AI conversational interface for academic Q&A",
        "Automated study notes summarization and interactive quiz generation",
        "Type-safe frontend architecture built with Next.js and TypeScript",
      ],
      github: "https://github.com/AhmadTibyanHakim77/StudyMate-AI",
      demo: null,
    },
    {
      id: "careerly",
      title: "Careerly AI Career Platform",
      category: "ai-ml",
      categoryLabel: "AI Career Platform",
      tags: ["TypeScript", "AI Modeling", "Next.js", "Tailwind CSS"],
      image: "/projects/careerly.svg",
      description: "An intelligent career navigation system utilizing AI to analyze skill profiles, recommend industry pathways, and guide job readiness.",
      role: "Full Stack & AI Engineer",
      features: [
        "Skill matrix gap analysis and targeted career role mapping",
        "Resume evaluation insights and interview preparation prompts",
        "Modern responsive user experience with fluid design tokens",
      ],
      github: "https://github.com/AhmadTibyanHakim77/careerly-ai-career-platform",
      demo: null,
    },
    {
      id: "projek-dimas-baby-shop",
      title: "Projek Dimas Baby Shop",
      category: "web",
      categoryLabel: "E-Commerce",
      tags: ["PHP", "Blade", "Laravel", "MySQL"],
      image: "/projects/dimas-baby-shop.svg",
      description: "A complete e-commerce solution for baby merchandise featuring categorized product catalogs, cart logic, and admin order control.",
      role: "Backend & Web Developer",
      features: [
        "Product catalog with granular category filters and quick search",
        "Integrated shopping cart with dynamic order calculation",
        "Administrative dashboard for inventory and transaction oversight",
      ],
      github: "https://github.com/AhmadTibyanHakim77/projek-dimas-baby-shop",
      demo: null,
    },
    {
      id: "obat-tani",
      title: "Obat Tani",
      category: "web",
      categoryLabel: "Agricultural Website",
      tags: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      image: "/projects/obat-tani.svg",
      description: "An agricultural advisory and product directory enabling farmers to discover targeted crop remedies, fertilizers, and usage guides.",
      role: "Web Developer",
      features: [
        "Pest-specific crop medicine categorization and dosage guides",
        "Relational MySQL database schema storing agricultural products",
        "Lightweight mobile-first layout accessible in low-bandwidth conditions",
      ],
      github: "https://github.com/AhmadTibyanHakim77/obat-tani",
      demo: null,
    },
    {
      id: "adidas-store",
      title: "Adidas Store",
      category: "web",
      categoryLabel: "E-Commerce Website",
      tags: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
      image: "/projects/adidas-store.svg",
      description: "An athletic footwear and apparel e-commerce interface emphasizing dynamic visual merchandising and intuitive catalog discovery.",
      role: "Frontend Developer",
      features: [
        "Product display grid with smooth hover interactions and quick specs",
        "Interactive micro-animations across buttons and cart drawers",
        "Robust responsive styling across desktop, tablet, and mobile",
      ],
      github: "https://github.com/AhmadTibyanHakim77/adidas-store",
      demo: null,
    },
    {
      id: "bakery",
      title: "Bakery",
      category: "web",
      categoryLabel: "Website",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/projects/bakery.svg",
      description: "A fast artisanal bakery web storefront presenting handcrafted pastry collections, outlet locations, and direct ordering inquiries.",
      role: "Frontend Developer",
      features: [
        "Server-Side Rendering delivering instant page loads and SEO scores",
        "Visual product menu presentation with smooth transition states",
        "Type-safe TypeScript codebase ensuring maintainability",
      ],
      github: "https://github.com/AhmadTibyanHakim77/bakery",
      demo: null,
    },
    {
      id: "tetra-coffee",
      title: "Tetra Coffee",
      category: "web",
      categoryLabel: "Coffee Shop Website",
      tags: ["Next.js", "Laravel", "TypeScript", "Tailwind CSS"],
      image: "/projects/tetra-coffee.svg",
      description: "A coffeehouse digital experience integrating an interactive Next.js frontend with a Laravel REST API for digital menu and reservations.",
      role: "Full Stack Developer",
      features: [
        "Frontend decoupled architecture powered by a Laravel RESTful backend",
        "Interactive digital coffee menu and reservation inquiry flow",
        "Warm minimalist visual aesthetic with subtle micro-interactions",
      ],
      github: "https://github.com/AhmadTibyanHakim77/tetra-coffee",
      demo: null,
    },
    {
      id: "adult-income-prediction",
      title: "Adult Income Prediction",
      category: "ai-ml",
      categoryLabel: "Machine Learning",
      tags: ["Python", "Jupyter Notebook", "Scikit-learn", "Pandas"],
      image: "/projects/adult-income-prediction.svg",
      description: "Supervised machine learning pipeline evaluating census demographic variables to predict binary individual income thresholds (>50K vs <=50K).",
      role: "Machine Learning Engineer",
      features: [
        "Census data cleaning, missing value imputation, and feature encoding",
        "Model training and cross-comparison across algorithms (Random Forest, Logistic Regression)",
        "Classification benchmark analysis across Accuracy, ROC-AUC, and F1 scores",
      ],
      github: "https://github.com/AhmadTibyanHakim77/adult-income-prediction",
      demo: null,
    },
    {
      id: "stock-market-analysis",
      title: "Stock Market Analysis",
      category: "data",
      categoryLabel: "Financial Data Analysis",
      tags: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib"],
      image: "/projects/stock-market-prediction.svg",
      description: "Financial time-series data exploration uncovering market trends, asset volatility, and technical momentum indicators from historical stock prices.",
      role: "Data Analyst",
      features: [
        "Time-series data cleaning and transformation of closing prices and volume",
        "Moving average calculations (SMA/EMA) and volatility indicators",
        "Analytical data visualizations aiding informed financial decision-making",
      ],
      github: "https://github.com/AhmadTibyanHakim77/stock-market-analysis",
      demo: null,
    },
    {
      id: "gold-price-forecasting",
      title: "Gold Price Forecasting",
      category: "data",
      categoryLabel: "Time Series Analysis",
      tags: ["Python", "Jupyter Notebook", "Time Series", "Pandas"],
      image: "/projects/gold-price.svg",
      description: "Time series forecasting framework projecting gold commodity price dynamics using multivariate historical price indices.",
      role: "Data Analyst & Modeler",
      features: [
        "Stationarity testing, autocorrelation analysis, and seasonal trend decomposition",
        "Implementation of time series predictive algorithms",
        "Residual metric benchmarking (RMSE, MAE) and forecast visualization",
      ],
      github: "https://github.com/AhmadTibyanHakim77/gold-price-forecasting",
      demo: null,
    },
    {
      id: "leres-sae",
      title: "LERES SAE",
      category: "web",
      categoryLabel: "Institutional Web Platform",
      tags: ["Web Architecture", "Database Design", "Full Stack"],
      image: "/projects/leres-sae.svg",
      description: "An institutional web platform initiative developed to digitize records, automate reporting, and centralize operational data management.",
      role: "Lead Full Stack Developer",
      features: [
        "Frontend architecture and relational database schema modeling",
        "Structured data reporting system streamlining institutional coordination",
      ],
      github: "https://github.com/AhmadTibyanHakim77",
      demo: null,
    },
  ],
};

export const aboutData = {
  id: {
    heading: "Membangun sistem web yang terukur dan mengekstrak nilai bermakna dari data.",
    intro: "Saya Ahmad Tibyan Hakim, Full Stack Developer dan Data Science Enthusiast yang berdomisili di Yogyakarta, Indonesia. Saya berfokus pada perpaduan rekayasa perangkat lunak modern dan analitika data cerdas untuk memecahkan tantangan nyata.",
    pillars: [
      {
        title: "Full Stack Development",
        desc: "Membangun aplikasi web modern, responsif, dan mudah dirawat menggunakan teknologi frontend dan backend seperti Next.js, React, Laravel, Node.js, dan database relasional.",
      },
      {
        title: "Data Analytics",
        desc: "Mengeksplorasi dataset, melakukan pembersihan dan pengolahan data, visualisasi interaktif, serta mengekstraksi wawasan berharga untuk mendukung pengambilan keputusan.",
      },
      {
        title: "Data Science & Machine Learning",
        desc: "Mengembangkan model prediktif, eksperimen algoritma machine learning dan deep learning menggunakan ekosistem Python seperti Scikit-learn, Pandas, XGBoost, dan TensorFlow.",
      },
    ],
    cardTitle: "Ahmad Tibyan Hakim",
    cardSubtitle: "Full Stack Developer",
    cardBadge: "Data Science Enthusiast",
    cardLocation: "Yogyakarta, Indonesia",
  },
  en: {
    heading: "Engineering scalable web platforms and transforming raw data into intelligent solutions.",
    intro: "I am Ahmad Tibyan Hakim, a Full Stack Developer and Data Science Enthusiast based in Yogyakarta, Indonesia. My work connects modern software engineering with data-driven intelligence to solve complex real-world challenges.",
    pillars: [
      {
        title: "Full Stack Development",
        desc: "Architecting modern, responsive, and maintainable web applications across frontend and backend technologies including Next.js, React, Laravel, Node.js, and relational databases.",
      },
      {
        title: "Data Analytics",
        desc: "Exploring datasets, performing structured data processing, interactive visualization, and extracting actionable insights that drive sound strategic decisions.",
      },
      {
        title: "Data Science & Machine Learning",
        desc: "Building predictive models, training machine learning and deep learning algorithms using the Python ecosystem including Scikit-learn, Pandas, XGBoost, and TensorFlow.",
      },
    ],
    cardTitle: "Ahmad Tibyan Hakim",
    cardSubtitle: "Full Stack Developer",
    cardBadge: "Data Science Enthusiast",
    cardLocation: "Yogyakarta, Indonesia",
  },
};

export interface ExpertiseItem {
  title: string;
  desc: string;
}

export const expertiseData: Record<Locale, ExpertiseItem[]> = {
  id: [
    {
      title: "Full Stack Web Development",
      desc: "Membangun solusi aplikasi web komprehensif dari arsitektur server-side hingga antarmuka pengguna interaktif.",
    },
    {
      title: "Responsive UI Engineering",
      desc: "Merancang antarmuka ramah pengguna yang mulus, adaptif, dan konsisten di berbagai ukuran perangkat.",
    },
    {
      title: "Database Design & Architecture",
      desc: "Menyusun skema database relasional dan NoSQL yang teroptimasi, type-safe, serta efisien untuk query kompleks.",
    },
    {
      title: "RESTful API Development & Integration",
      desc: "Mengembangkan endpoint API yang aman, berstandar industri, terdokumentasi, dan mudah diintegrasikan.",
    },
    {
      title: "Modern Frontend Architecture",
      desc: "Menerapkan Server-Side Rendering, modularitas komponen, dan optimasi performa tinggi pada Next.js & React.",
    },
    {
      title: "Data Analytics & Machine Learning",
      desc: "Melakukan eksplorasi data, rekayasa fitur, serta pelatihan model prediktif berbasis Python untuk ekstraksi wawasan cerdas.",
    },
  ],
  en: [
    {
      title: "Full Stack Web Development",
      desc: "Delivering complete end-to-end web solutions from robust server-side backends to responsive client interfaces.",
    },
    {
      title: "Responsive UI Engineering",
      desc: "Designing intuitive, fluid, and accessible user experiences that adapt flawlessly across every screen size.",
    },
    {
      title: "Database Design & Architecture",
      desc: "Structuring optimized relational and NoSQL database schemas built for transactional integrity and low-latency queries.",
    },
    {
      title: "RESTful API Development & Integration",
      desc: "Building secure, well-documented, and scalable RESTful endpoints ready for seamless client consumption.",
    },
    {
      title: "Modern Frontend Architecture",
      desc: "Harnessing Next.js Server Components, reactive state management, and high Core Web Vitals performance.",
    },
    {
      title: "Data Analytics & Machine Learning",
      desc: "Conducting rigorous exploratory analysis, feature pipelines, and predictive modeling using modern Python tools.",
    },
  ],
};

export const processData: Record<Locale, [string, string][]> = {
  id: [
    ["Discover", "Mengidentifikasi akar permasalahan, memetakan tujuan proyek, dan merumuskan kebutuhan fungsional sistem."],
    ["Research", "Mengkaji opsi arsitektur teknis, benchmark performa, dan referensi implementasi data maupun web."],
    ["Design", "Merancang alur logika data, skema database, wireframe antarmuka, dan struktur komponen modular."],
    ["Develop", "Menulis kode yang bersih, type-safe, efisien, terdokumentasi, dan berorientasi pada kemudahan pemeliharaan."],
    ["Test", "Menguji kehandalan validasi input, fungsionalitas logika, responsivitas breakpoint, dan akurasi model."],
    ["Deploy", "Merilis aplikasi dengan alur deployment yang teratur, teruji, serta memantau stabilitas sistem."],
  ],
  en: [
    ["Discover", "Deconstructing core problems, aligning product objectives, and specifying system requirements."],
    ["Research", "Evaluating optimal technical architectures, performance benchmarks, and industry best practices."],
    ["Design", "Drafting system data flows, relational schemas, user interface wireframes, and component hierarchies."],
    ["Develop", "Crafting clean, type-safe, maintainable, and modular production code adhering to modern standards."],
    ["Test", "Verifying functionality, edge case handling, cross-device responsiveness, and model evaluation metrics."],
    ["Deploy", "Shipping stable production deployments with automated checks and monitoring system reliability."],
  ],
};

export const uiLabels = {
  id: {
    skipToContent: "Lewati ke konten utama",
    exploreWork: "Jelajahi Portofolio",
    exploreGithub: "Jelajahi Repositori GitHub",
    scrollDown: "Gulir ke bawah",
    heroBadge: "Full Stack & Data Science",
    heroHeadline1: "AHMAD",
    heroHeadline2: "TIBYAN HAKIM",
    aboutSectionTitle: "Tentang Saya",
    aboutLocationLabel: "Lokasi",
    stackSectionTitle: "Tech Stack & Keahlian",
    stackSubtitle: "Teknologi dan perangkat yang saya gunakan untuk membangun aplikasi web dan pemodelan data.",
    projectsSectionTitle: "Portofolio Proyek",
    projectsSubtitle: "Koleksi proyek nyata yang mencakup Web Development, AI, dan Analisis Data.",
    filterAll: "Semua Proyek",
    filterWeb: "Web Development",
    filterAi: "AI & Machine Learning",
    filterData: "Data Analytics",
    projectsRoleLabel: "Peran",
    projectsFeaturesLabel: "Fitur & Kapabilitas",
    projectsViewGithub: "Lihat Repositori",
    projectsViewDemo: "Live Demo",
    githubSectionTitle: "Aktivitas GitHub",
    githubSubtitle: "Eksplorasi kode sumber, arsitektur proyek, dan kontribusi saya di GitHub.",
    processSectionTitle: "Proses Pengembangan",
    processSubtitle: "Metodologi terstruktur dari eksplorasi ide hingga implementasi solusi produksi.",
    expertiseSectionTitle: "Bidang Keahlian Profesional",
    contactHeading: "Mulai Kolaborasi atau Diskusi Proyek",
    contactSubtitle: "Terbuka untuk peluang rekayasa perangkat lunak, proyek pengembangan web, maupun inisiatif analisis data.",
    contactCta: "Kirim Email Sekarang",
    copyEmail: "Salin Alamat Email",
    copied: "Alamat email disalin ke clipboard!",
    footerCopyright: "Dibangun dengan Next.js & React 19.",
    languageToggle: "Bahasa",
    menuOpen: "Buka menu",
    menuClose: "Tutup menu",
    location: "Yogyakarta, Indonesia",
  },
  en: {
    skipToContent: "Skip to main content",
    exploreWork: "Explore Portfolio",
    exploreGithub: "Explore GitHub Repositories",
    scrollDown: "Scroll to discover",
    heroBadge: "Full Stack & Data Science",
    heroHeadline1: "AHMAD",
    heroHeadline2: "TIBYAN HAKIM",
    aboutSectionTitle: "About Me",
    aboutLocationLabel: "Location",
    stackSectionTitle: "Tech Stack & Capabilities",
    stackSubtitle: "Technologies and tools I leverage to build scalable web applications and data solutions.",
    projectsSectionTitle: "Project Portfolio",
    projectsSubtitle: "Verified projects spanning Full Stack Web Development, Artificial Intelligence, and Data Analytics.",
    filterAll: "All Projects",
    filterWeb: "Web Development",
    filterAi: "AI & Machine Learning",
    filterData: "Data Analytics",
    projectsRoleLabel: "Role",
    projectsFeaturesLabel: "Key Features & Capabilities",
    projectsViewGithub: "View Repository",
    projectsViewDemo: "Live Demo",
    githubSectionTitle: "GitHub Ecosystem",
    githubSubtitle: "Explore source code repositories, open-source work, and system architectures on GitHub.",
    processSectionTitle: "Engineering Process",
    processSubtitle: "A deliberate engineering methodology transforming complex ideas into reliable digital products.",
    expertiseSectionTitle: "Core Professional Expertise",
    contactHeading: "Let's Build Something Impactful Together",
    contactSubtitle: "Open for full-stack engineering collaborations, modern web platforms, and data analytics initiatives.",
    contactCta: "Send Direct Email",
    copyEmail: "Copy Email Address",
    copied: "Email address copied to clipboard!",
    footerCopyright: "Built with Next.js & React 19.",
    languageToggle: "Language",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    location: "Yogyakarta, Indonesia",
  },
};
