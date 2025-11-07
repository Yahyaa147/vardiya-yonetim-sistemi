# Vardiya Yönetim Sistemi - TDD/BDD

Bu proje, Test-Driven Development (TDD) ve Behavior-Driven Development (BDD) metodolojileri kullanılarak geliştirilmiş bir vardiya yönetim sistemidir.

## 📹 Demo Video
[YouTube'da İzle](https://youtu.be/8WmhqvA_-YU)

## 🏗️ Proje Yapısı

### Backend - TDD ile Geliştirildi
- **Framework:** Node.js + Express 5.1.0
- **Test Framework:** Jest 30.2.0
- **Port:** 3000
- **Endpoint:** `GET /api/v1/shifts`

### Frontend - BDD ile Geliştirildi
- **Framework:** Next.js 14 + React 18 + TypeScript
- **Styling:** Tailwind CSS 3
- **Test Framework:** Cypress + Cucumber (Gherkin)
- **Port:** 3001

## 🚀 Kurulum ve Çalıştırma

### Backend
```bash
cd shift-api
npm install
npm test          # TDD testlerini çalıştır
npm start         # Sunucuyu başlat (port 3000)
```

### Frontend
```bash
cd shift-frontend
npm install
npm run dev       # Geliştirme sunucusu (port 3001)
npm run cypress:open  # BDD testlerini çalıştır
```

## 🧪 Test Yaklaşımları

### TDD (Backend)
- **RED:** Önce test yaz → Test başarısız
- **GREEN:** Minimum kod yaz → Test başarılı
- **REFACTOR:** Kodu iyileştir

Test dosyası: `shift-api/shifts.test.js`

### BDD (Frontend)
- **Gherkin Senaryoları:** `shift-frontend/cypress/e2e/shifts/shifts.feature`
- **Step Definitions:** `shift-frontend/cypress/e2e/shifts/shifts.js`
- Kullanıcı hikayesi odaklı testler

## 📊 Özellikler

- ✅ RESTful API (Express)
- ✅ Jest ile unit testler
- ✅ Cypress ile E2E testler
- ✅ Cucumber/Gherkin senaryoları
- ✅ CORS desteği
- ✅ Responsive tasarım (Tailwind CSS)

## 🛠️ Teknolojiler

**Backend:**
- Node.js 20.5.1
- Express 5.1.0
- Jest 30.2.0
- Supertest 7.1.4
- CORS

**Frontend:**
- Next.js 14.2.33
- React 18
- TypeScript
- Tailwind CSS 3
- Cypress 13.18.2
- @badeball/cypress-cucumber-preprocessor

## 📝 Lisans

MIT
