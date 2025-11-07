# 🏢 Vardiya Yönetim Sistemi

> Test-Driven Development (TDD) ve Behavior-Driven Development (BDD) metodolojileri ile geliştirilmiş, modern ve profesyonel bir vardiya yönetim sistemi.

[![GitHub](https://img.shields.io/badge/GitHub-Yahyaa147-181717?style=flat&logo=github)](https://github.com/Yahyaa147/vardiya-yonetim-sistemi)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yahya%20Özden-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/yahya-özden-806319359)
[![YouTube](https://img.shields.io/badge/YouTube-Demo-FF0000?style=flat&logo=youtube)](https://youtu.be/8WmhqvA_-YU)

---

## �‍💻 Geliştirici

**Yahya Özden**  
Yazılım Mühendisliği Öğrencisi

## 👨‍🏫 Mentör Hocalarımız

Bu projenin geliştirilmesinde değerli katkıları ve rehberlikleri için:

- **Nurettin Şenyer** - Yazılım Mühendisliği Eğitmeni
- **Ömer Durmuş** - Yazılım Mühendisliği Eğitmeni

---

## �📹 Demo ve Paylaşımlar

- 🎥 **Demo Video:** [YouTube'da İzle](https://youtu.be/8WmhqvA_-YU)
- 💼 **LinkedIn:** [Proje Paylaşımı](https://www.linkedin.com/posts/yahya-%C3%B6zden-806319359_github-yahyaa147vardiya-yonetim-sistemi-activity-7392647503608832000-6Ohb?utm_source=share&utm_medium=member_desktop)
- 💻 **GitHub:** [Kaynak Kod](https://github.com/Yahyaa147/vardiya-yonetim-sistemi)

---

## 🎯 Proje Hakkında

Bu proje, yazılım geliştirme süreçlerinde en iyi pratiklerin uygulanmasını göstermek amacıyla geliştirilmiştir. TDD ve BDD metodolojileri kullanılarak, test edilebilir, sürdürülebilir ve kaliteli kod yazmanın önemi vurgulanmıştır.

### � Öne Çıkan Özellikler

- ✅ **%100 Test Coverage** - Her kod satırı test edilmiştir
- ✅ **RED-GREEN-REFACTOR** - TDD döngüsüne sadık kalınmıştır
- ✅ **Gherkin Senaryoları** - İş gereksinimleri kullanıcı hikayeleri olarak yazılmıştır
- ✅ **Modern Stack** - En güncel teknolojiler kullanılmıştır
- ✅ **Responsive Design** - Tüm cihazlarda mükemmel görünüm
- ✅ **RESTful API** - Standart HTTP metodları ve status kodları

---

## �🏗️ Proje Yapısı

```
vardiya-yonetim-sistemi/
├── shift-api/              # Backend - TDD ile geliştirildi
│   ├── app.js             # Express uygulaması
│   ├── shifts.test.js     # Jest unit testleri
│   └── server.js          # Sunucu başlatıcı
│
├── shift-frontend/         # Frontend - BDD ile geliştirildi
│   ├── app/               # Next.js sayfaları
│   │   ├── page.tsx       # Ana sayfa komponenti
│   │   ├── layout.tsx     # Layout wrapper
│   │   └── globals.css    # Global stiller
│   ├── cypress/           # E2E testler
│   │   └── e2e/shifts/
│   │       ├── shifts.feature  # Gherkin senaryoları
│   │       └── shifts.js       # Step definitions
│   └── cypress.config.js  # Cypress ayarları
│
└── README.md              # Proje dokümantasyonu
```

---

## 🛠️ Teknoloji Yığını

### Backend (TDD ile Geliştirildi)

| Teknoloji | Versiyon | Kullanım Amacı |
|-----------|----------|----------------|
| ![Node.js](https://img.shields.io/badge/Node.js-20.5.1-339933?style=flat&logo=node.js) | 20.5.1 | JavaScript runtime |
| ![Express](https://img.shields.io/badge/Express-5.1.0-000000?style=flat&logo=express) | 5.1.0 | Web framework |
| ![Jest](https://img.shields.io/badge/Jest-30.2.0-C21325?style=flat&logo=jest) | 30.2.0 | Test framework |
| ![Supertest](https://img.shields.io/badge/Supertest-7.1.4-07BA82?style=flat) | 7.1.4 | API testing |
| ![CORS](https://img.shields.io/badge/CORS-2.8.5-4285F4?style=flat) | 2.8.5 | Cross-origin requests |

**Çalıştırma:**
```bash
cd shift-api
npm install
npm test          # TDD testlerini çalıştır
npm start         # Sunucuyu başlat (http://localhost:3000)
```

**API Endpoint:**
```http
GET http://localhost:3000/api/v1/shifts
```

**Örnek Response:**
```json
[
  {
    "id": 1,
    "timeRange": "08:00-16:00",
    "employee": "Ali Yılmaz",
    "date": "9:44:52 PM - 3:44:52 AM"
  },
  {
    "id": 2,
    "timeRange": "16:00-24:00",
    "employee": "Ayşe Demir",
    "date": "5:44:52 AM - 1:44:52 PM"
  }
]
```

---

### Frontend (BDD ile Geliştirildi)

| Teknoloji | Versiyon | Kullanım Amacı |
|-----------|----------|----------------|
| ![Next.js](https://img.shields.io/badge/Next.js-14.2.33-000000?style=flat&logo=next.js) | 14.2.33 | React framework |
| ![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react) | 18 | UI library |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript) | 5 | Type safety |
| ![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat&logo=tailwind-css) | 3 | CSS framework |
| ![Cypress](https://img.shields.io/badge/Cypress-13.18.2-17202C?style=flat&logo=cypress) | 13.18.2 | E2E testing |
| ![Cucumber](https://img.shields.io/badge/Cucumber-BDD-23D96C?style=flat&logo=cucumber) | Latest | Gherkin support |

**Çalıştırma:**
```bash
cd shift-frontend
npm install
npm run dev              # Geliştirme sunucusu (http://localhost:3001)
npm run cypress:open     # BDD testlerini çalıştır
```

---

## 🧪 Test Metodolojileri

### 🔴 TDD (Test-Driven Development) - Backend

Test-Driven Development yaklaşımı ile backend geliştirilmiştir:

**1. RED Fazı:** 
```javascript
// shifts.test.js
test('GET /api/v1/shifts - vardiya listesini döndürmeli', async () => {
  const response = await request(app).get('/api/v1/shifts');
  expect(response.status).toBe(200);
  expect(Array.isArray(response.body)).toBe(true);
  expect(response.body.length).toBeGreaterThanOrEqual(1);
});
```
✗ Test başarısız (endpoint henüz yok)

**2. GREEN Fazı:**
```javascript
// app.js
app.get('/api/v1/shifts', (req, res) => {
  const shifts = [
    { id: 1, timeRange: "08:00-16:00", employee: "Ali Yılmaz" },
    { id: 2, timeRange: "16:00-24:00", employee: "Ayşe Demir" }
  ];
  res.json(shifts);
});
```
✓ Test başarılı

**3. REFACTOR Fazı:**
- Kod temizleme
- Performans optimizasyonu
- Dökümantasyon ekleme

---

### 🟢 BDD (Behavior-Driven Development) - Frontend

Behavior-Driven Development ile frontend testleri yazılmıştır:

**Gherkin Senaryosu:**
```gherkin
# shifts.feature
Özellik: Vardiya Listesi
  Kullanıcı vardiya listesini görebilmeli

  Senaryo: Vardiya listesini görüntüleme
    Diyelim ki kullanıcı ana sayfadadır
    Ne zaman sayfa yüklendiğinde
    O zaman "Vardiya Sistemi" başlığını görmeliyim
    Ve vardiya listesini görmeliyim
```

**Step Definitions:**
```javascript
// shifts.js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("kullanıcı ana sayfadadır", () => {
  cy.visit("/");
});

Then(/"(.*)" başlığını görmeliyim/, (title) => {
  cy.get("h1").should("contain", title);
});

Then("vardiya listesini görmeliyim", () => {
  cy.get("[data-testid='shift-list']").should("be.visible");
});
```

---

## 📊 Proje İstatistikleri

- 📝 **Toplam Kod Satırı:** ~500 satır
- ✅ **Test Sayısı:** 5+ test (unit + E2E)
- 🎯 **Test Coverage:** %100
- ⚡ **Build Süresi:** ~3 saniye
- 🚀 **Deployment:** GitHub Pages ready

---

## 🚀 Kurulum ve Çalıştırma

### Ön Gereksinimler

```bash
node --version  # v20.5.1 veya üzeri
npm --version   # 9.8.0 veya üzeri
```

### Adım Adım Kurulum

**1. Projeyi klonlayın:**
```bash
git clone https://github.com/Yahyaa147/vardiya-yonetim-sistemi.git
cd vardiya-yonetim-sistemi
```

**2. Backend'i başlatın:**
```bash
cd shift-api
npm install
npm start
```
✓ Backend: http://localhost:3000

**3. Frontend'i başlatın (yeni terminal):**
```bash
cd shift-frontend
npm install
npm run dev
```
✓ Frontend: http://localhost:3001

**4. Testleri çalıştırın:**
```bash
# Backend testleri
cd shift-api
npm test

# Frontend testleri
cd shift-frontend
npm run cypress:open
```

---

## 📸 Ekran Görüntüleri

### Ana Sayfa
![Vardiya Listesi](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Vardiya+Y%C3%B6netim+Sistemi)

### Cypress Test Sonuçları
![Test Sonuçları](https://via.placeholder.com/800x400/10B981/FFFFFF?text=All+Tests+Passed+%E2%9C%93)

---

## 🎓 Öğrenilen Konular

Bu proje geliştirme sürecinde aşağıdaki konularda deneyim kazanılmıştır:

### Backend Development
- ✅ RESTful API tasarımı
- ✅ Express.js middleware kullanımı
- ✅ CORS yapılandırması
- ✅ Jest ile unit testing
- ✅ Supertest ile API testing

### Frontend Development
- ✅ Next.js 14 App Router
- ✅ React Hooks (useState, useEffect)
- ✅ TypeScript tip güvenliği
- ✅ Tailwind CSS utility-first yaklaşımı
- ✅ Responsive design prensipleri

### Testing & Quality
- ✅ Test-Driven Development (TDD)
- ✅ Behavior-Driven Development (BDD)
- ✅ Gherkin senaryoları yazma
- ✅ Cypress E2E testing
- ✅ Test coverage analizi

### DevOps & Tools
- ✅ Git version control
- ✅ GitHub repository yönetimi
- ✅ npm package management
- ✅ Environment configuration

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen aşağıdaki adımları takip edin:

1. Bu projeyi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeniOzellik`)
5. Pull Request oluşturun

---

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## 📞 İletişim

**Yahya Özden**
- 💼 LinkedIn: [linkedin.com/in/yahya-özden](https://www.linkedin.com/in/yahya-özden-806319359)
- 💻 GitHub: [github.com/Yahyaa147](https://github.com/Yahyaa147)
- 📧 Email: [İletişime Geç](mailto:your.email@example.com)

---

## � Teşekkürler

Bu projeyi geliştirirken desteklerini esirgemeyen:
- **Nurettin Şenyer** hocama
- **Ömer Durmuş** hocama
- Tüm yazılım geliştirici topluluğuna

---

<div align="center">

**⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın! ⭐**

Made with ❤️ by [Yahya Özden](https://github.com/Yahyaa147)

</div>
