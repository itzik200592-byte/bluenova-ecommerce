# BlueNova eCommerce - NovaTrack 360™

עמוד מכירות ממוצא אחד וממשק ניהול עבור NovaTrack 360™ - מערכת צילום חכמה עם מעקב פנים AI.

## 🚀 תכונות

- ✅ דף נחיתה מורה עברית עם RTL מלא
- ✅ עיצוב תיכניסה פרימיום (Dark Theme + Neon Blue)
- ✅ תשלום PayPal משלב
- ✅ יצירת הזמנה אוטומטית ב-CJ Dropshipping
- ✅ ממשק ניהול הזמנות
- ✅ הודעות מצב ומעקבה
- ✅ ולידציה קלט (טלפון ישראלי, וכו')
- ✅ בסיס נתונים SQLite (ניתן להחליף ל-Postgres)
- ✅ הימור זמן אמת בתחום פרטיות

## 📋 דרישות מקדימות

- Node.js 18+
- npm או yarn
- PayPal Sandbox Account (לעיתוד - בדיקה)
- CJ Dropshipping API Credentials

## 🔧 התקנה

### 1. Clone או הורדת הפרויקט

```bash
git clone <repo-url>
cd bluenova-ecommerce
npm install
```

### 2. הגדרת משתנים סביבה

העתק את `.env.example` ל-`.env.local`:

```bash
cp .env.example .env.local
```

מלא את הערכים:

```env
# Database
DATABASE_URL="file:./prisma/dev.db"

# Admin Password
ADMIN_PASSWORD_HASH="your_bcrypt_hash"
ADMIN_SECRET_KEY="your_secret_key"

# PayPal
PAYPAL_CLIENT_ID="your_client_id"
PAYPAL_CLIENT_SECRET="your_secret"
PAYPAL_MODE="sandbox"

# CJ Dropshipping
CJ_API_KEY="your_api_key"
CJ_BASE_URL="https://api.cjdropshipping.com"
CJ_WAREHOUSE_ID="your_warehouse_id"

# Site
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 3. הגדרת סוסמה מנהל

צור hash bcrypt לסיסמתך:

```bash
node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('your-password', 10).then(h => console.log(h))"
```

הדביק את ה-hash ב-`.env.local`:

```env
ADMIN_PASSWORD_HASH="$2a$10$..."
```

### 4. התחלת בסיס הנתונים

```bash
npx prisma migrate dev --name init
```

זה ייצור את קובצי הבסיס נתונים ויהפוך את הטבלאות.

### 5. הפעלה בפיתוח

```bash
npm run dev
```

הפרויקט יהיה זמין ב-`http://localhost:3000`

## 🛒 זרימת קנייה

1. **דף הנחיתה** → משתמש קורא על NovaTrack 360™
2. **Checkout** → משתמש ממלא פרטים
3. **PayPal** → משלם בBayPal
4. **הוצאת הזמנה** → מערכת יוצרת הזמנה ב-CJ API
5. **עדכון מעקבה** → לקוח מקבל דוא"ל עם עקיבה

## 🔐 ניהול

### כניסה לניהול

גש ל: `http://localhost:3000/admin/login`

סיסמה: הסיסמה שהגדרת (הסיסמה המקורית, לא ה-hash)

### תכונות ניהול

- ✅ הצגת כל הזמנות
- ✅ סינון לפי מצב משלוח
- ✅ צפייה בפרטי ההזמנה
- ✅ מעקבה CJ אוטומטית
- ✅ ניסיון שידור מחדש ל-CJ אם נכשל

## 🔌 PayPal Sandbox

### הגדרה

1. עבור ל-[PayPal Developer](https://developer.paypal.com)
2. צור Sandbox Business Account
3. עבור לתוך האפליקציה שלך וקבל:
   - `Client ID`
   - `Client Secret`

### בדיקה

השתמש בפרטי כרטיס Sandbox של PayPal:
- **Credit Card**: 4111111111111111
- **Expiry**: 12/25
- **CVV**: 123

## 🚚 CJ Dropshipping

### הגדרה

1. צור חשבון ב-[CJ Dropshipping](https://cjdropshipping.com)
2. הוסף את המוצר NovaTrack 360™ לחנות
3. קבל את ה-API Key מהגדרות
4. העדקן את רחזיהן ב-`.env.local`

### הערות חשובות

⚠️ קבצי CJ API צריכים להיות מותאמים לתיעוד הרשמי!

- ראה `src/lib/cj.ts` לפרטים
- בדוק את שדות ה-API המדויקים של CJ
- עדכן את `CJ_CONFIG.endpoints` ו`CJ_CONFIG.fieldMapping`

## 📧 בדיקה סופה-לסופ

```
1. כנס ל: http://localhost:3000
2. לחץ על "קנייה מאובטחת"
3. מלא פרטים (טלפון בפורמט: 0501234567)
4. לחץ על "המשך לתשלום"
5. בחר "עגלה כעקו" ללא התחברות
6. השתמש בכרטיס Sandbox: 4111111111111111
7. בדוק דף ההצלחה
8. כנס לניהול ובדוק שהזמנה נוצרה
```

## 🏗️ מבנה פרויקט

```
src/
├── app/
│   ├── page.tsx (דף הנחיתה)
│   ├── checkout/ (דף קנייה)
│   ├── admin/ (לוח ניהול)
│   └── api/ (endpoints API)
├── components/
│   ├── sections/ (סקציות דף הנחיתה)
│   ├── layout/ (header, footer)
│   └── common/ (כפתורים, קלט וכו')
├── lib/
│   ├── paypal.ts (PayPal integration)
│   ├── cj.ts (CJ API integration)
│   ├── auth.ts (auth אדמין)
│   ├── validators.ts (ולידציה)
│   └── utils.ts (עזרים)
├── types/
│   └── index.ts (TypeScript types)
├── constants/
│   └── config.ts (קבועים וטקסט עברית)
└── prisma/
    └── schema.prisma (מודל בסיס נתונים)
```

## 🔄 Cron Jobs (ללא שרת תזמור)

כדי לעדכן מעקבה של הזמנות מובטלות, צור cron job שקורא:

```
GET /api/cron/update-fulfillment?secret=YOUR_WEBHOOK_SECRET
```

קביעה כל שעה לעדכון מעקבה מ-CJ.

## 🐛 בעיות נפוצות

### PayPal Error: "Invalid Client ID"
- בדוק ש-`PAYPAL_CLIENT_ID` ו-`PAYPAL_CLIENT_SECRET` נכונים
- בדוק ש-`PAYPAL_MODE` = "sandbox" לעיתוד

### CJ API Error
- בדוק ש-`CJ_API_KEY` נכון
- בדוק את סוף ה-API ב-`src/lib/cj.ts`
- ודא שהמוצר קיים ב-CJ

### טלפון לא מתקבל
- ערכים בפורמט: `0501234567` או `+972501234567`
- ראה `src/lib/validators.ts`

## 📚 תיעוד נוסף

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [PayPal API](https://developer.paypal.com/docs)

## 🚀 Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

עדכן משתנים סביבה ב-Vercel Dashboard.

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 License

All rights reserved - BlueNova 2024

## 🆘 Support

- **Email**: support@bluenova.co.il
- **Phone**: +972-50-123-4567

---

**תאריך עדכון אחרון**: March 2026
