# BlueNova - התחלה מהירה ⚡

## 🚀 בתוך 5 דקות:

### 1️⃣ התקנה
```bash
cd bluenova-ecommerce
npm install
```

### 2️⃣ הגדרת סיסמה אדמין
```bash
node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('admin123', 10).then(h => console.log(h))"
```

העתק את ה-hash שנוצר.

### 3️⃣ קובץ .env.local

צור קובץ `.env.local` בשורש הפרויקט:

```env
DATABASE_URL="file:./prisma/dev.db"
ADMIN_PASSWORD_HASH="paste_hash_here"
ADMIN_SECRET_KEY="my-secret-key-12345"
PAYPAL_CLIENT_ID="test"
PAYPAL_CLIENT_SECRET="test"
PAYPAL_MODE="sandbox"
PAYPAL_BASE_URL="https://api-m.sandbox.paypal.com"
CJ_API_KEY="test"
CJ_BASE_URL="https://api.cjdropshipping.com"
CJ_WAREHOUSE_ID="test"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 4️⃣ בסיס נתונים

```bash
npx prisma migrate dev --name init
```

### 5️⃣ הפעלה

```bash
npm run dev
```

## 🌐 גישה

- **Website**: http://localhost:3000
- **Checkout**: http://localhost:3000/checkout
- **Admin**: http://localhost:3000/admin/login (password: `admin123`)

## 📝 עריכה

### שנה טקסט עברי
בקובץ: `src/constants/config.ts`

### שנה צבעים
בקובץ: `tailwind.config.ts`

### שנה לוגו
בקובץ: `src/components/layout/Header.tsx`

## 🔌 הגדרות PayPal (עיתוד)

1. עבור ל: https://developer.paypal.com
2. צור Sandbox Account
3. העתק Client ID ו-Secret
4. הדבק ב-.env.local:
```env
PAYPAL_CLIENT_ID="YOUR_CLIENT_ID"
PAYPAL_CLIENT_SECRET="YOUR_SECRET"
```

## 🚚 הגדרות CJ

1. צור חשבון: https://cjdropshipping.com
2. קבל API Key
3. הדבק ב-.env.local:
```env
CJ_API_KEY="YOUR_API_KEY"
```

## 📄 תיעוד מלא

- [`README.md`](./README.md) - תיעוד מלא
- [`SETUP_GUIDE.md`](./SETUP_GUIDE.md) - הגדרה מפורטת
- [`PROJECT_SUMMARY.md`](./PROJECT_SUMMARY.md) - סקירה
- [`DEPLOYMENT_CHECKLIST.md`](./DEPLOYMENT_CHECKLIST.md) - לפני פרסום

## 🎨 מבנה

```
src/
├── app/ .............. Pages & APIs
├── components/ ....... React components
├── lib/ .............. Logic & integrations
├── types/ ............ TypeScript types
├── constants/ ........ Config & text
└── middleware.ts .... Route protection
```

## ✨ תכונות בעיצוב

- ✅ RTL עברית מלאה
- ✅ תיכניסה Dark Theme
- ✅ PayPal integration
- ✅ CJ API integration
- ✅ Admin dashboard
- ✅ SEO-ready
- ✅ Mobile responsive

## 🐛 בעיות?

```bash
# נקה node_modules
rm -rf node_modules
npm install

# נקה .next
rm -rf .next

# בדוק environment variables
cat .env.local

# בדוק logs בטרמינל
npm run dev
```

## 📱 בדיקה מהירה

```
1. כנס ל: http://localhost:3000
2. לחץ "קנייה מאובטחת"
3. מלא:
   - שם: דוד כהן
   - דוא"ל: david@test.com
   - טלפון: 0501234567
   - כתובת: רחוב לך 1
   - עיר: תל אביב
   - מיקוד: 69321
4. "המשך לתשלום"
5. **אופס**: זה לא יעבוד בלי PayPal credentials אמתיים
```

## 🎯 להגדרה אמיתית

ראה [`SETUP_GUIDE.md`](./SETUP_GUIDE.md) לקבלת הנחיות מלאות.

## 💡 טיפים

- בדוק את Browser Console לשגיאות
- בדוק את Network Tab ב-DevTools
- בדוק את Prisma Studio: `npx prisma studio`
- בדוק את ה-logs בטרמינל

---

**תעדכן פעם אחת את `.env.local` ואתה מוכן ללכת! 🚀**
