# BlueNova - מדריך הגדרה מפורט

## שלב 1: הגדרת סיסמה מנהל

בטרם כל דבר, עליך לייצור hash bcrypt לסיסמתך.

### אפשרות א: שימוש בנוד

```bash
node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('your-password-here', 10).then(h => console.log(h))"
```

(החלף `your-password-here` בסיסמה שתבחר)

### אפשרות ב: שימוש בטרמינל (macOS/Linux)

```bash
echo "const bcrypt = require('bcryptjs'); bcrypt.hash('your-password-here', 10).then(h => console.log(h));" | node
```

### אפשרות ג: npm package

```bash
npm install -g bcryptjs
bcrypt your-password-here 10
```

**הוקד**: save את ה-hash - תחתיכו אותו ב-.env.local

דוגמה:
```
ADMIN_PASSWORD_HASH="$2a$10$abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP"
```

## שלב 2: PayPal Sandbox הגדרה

### 1. צור חשבון

1. עבור ל-[PayPal Developer Dashboard](https://developer.paypal.com/dashboard)
2. התחבר או הירשם
3. בחר "Sandbox" מה-Accounts menu

### 2. צור Business Account

```
Sandbox Account Type: Business
Email: סוג הדוא"ל בעדכון (יכול להיות כלשהו@example.com)
```

### 3. העתק Credentials

בעמוד ה-"Sandbox" של AppID:

```
CLIENT ID: (לדוגמה: AU3lX4n...)
SECRET: (לדוגמה: ECoHrpMuZ5j...)
```

### 4. עדכון .env.local

```env
PAYPAL_CLIENT_ID="שלך-CLIENT-ID-כאן"
PAYPAL_CLIENT_SECRET="שלך-SECRET-כאן"
PAYPAL_MODE="sandbox"
PAYPAL_BASE_URL="https://api-m.sandbox.paypal.com"
```

### 5. כרטיסי בדיקה

**Credit Card (סך הכול)**:
- Number: 4111111111111111
- Expiry: 12/25
- CVV: 123

**Debit Card**:
- Number: 6011111111111117
- Expiry: 12/25
- CVV: 123

## שלב 3: CJ Dropshipping הגדרה

⚠️ **חשוב**: ודא שעדכנת ישירות עם [CJ Dropshipping API Documentation](https://developers.cjdropshipping.com)

### 1. צור חשבון CJ

- עבור ל-[CJ Dropshipping](https://cjdropshipping.com)
- הירשם כברוקר
- בדוק דוא"ל שלך

### 2. הוסף מוצר

1. בדוק מוצרים שקיימים בסיפר או תוכן לווי משלך
2. רשום את ה-**Product ID** (תחתיך אותו)

### 3. קבל API Credentials

1. עבור ל-Account Settings
2. בחר "API Integration"
3. יצור API Key
4. copy את ה-Key (לדוגמה: `ck_12345...`)

### 4. קבל Warehouse ID

1. תחת "Warehouses"
2. copy את ה-ID של מחסן ברירת המחדל

### 5. עדכון .env.local

```env
CJ_API_KEY="your_api_key_from_step_3"
CJ_BASE_URL="https://api.cjdropshipping.com"
CJ_WAREHOUSE_ID="your_warehouse_id_from_step_4"
```

### 6. עדכון CJ Configuration

בקובץ `src/lib/cj.ts`:

```typescript
// בשורה ~10, עדכן את endpoints:
const CJ_CONFIG = {
  endpoints: {
    createOrder: '/v1/orders/create', // ← עדכן לפי CJ docs
    getOrder: '/v1/orders/:id',       // ← עדכן לפי CJ docs
    getTracking: '/v1/tracking/:id',  // ← עדכן לפי CJ docs
  },
  // ...
};

// וגם את fieldMapping בשורה ~25:
fieldMapping: {
  customerName: 'customer_name',  // ← בדוק שדות בCJ
  email: 'email_address',         // ← בדוק שדות בCJ
  phone: 'phone',                 // ← בדוק שדות בCJ
  // ...
}
```

⚠️ **הערה חשובה**: ודא שכל השדות מתאימים לתעודות CJ הרשמיות!

## שלב 4: הקמת בסיס נתונים

```bash
# התקנת תלויות
npm install

# יצירת בסיס הנתונים
npx prisma migrate dev --name init

# (אופציונלי) צפייה בGUI
npx prisma studio
```

## שלב 5: הפעלה מקומית

```bash
npm run dev
```

הפרויקט יהיה זמין ב-`http://localhost:3000`

## בדיקה מלאה

### 1. בדוק את דף הנחיתה
```
http://localhost:3000
```

- בדוק RTL (טקסט לימיני לשמאל)
- בדוק צבעים (כחול כהה + עברית)

### 2. בדוק את Checkout
```
1. לחץ "קנייה מאובטחת"
2. מלא:
   - שם מלא: דוד כהן
   - דוא"ל: david@example.com
   - טלפון: 0501234567
   - כתובת: רחוב שוקן 10
   - עיר: תל אביב
   - מיקוד: 69321
3. לחץ "המשך לתשלום"
```

### 3. בדוק PayPal
```
1. תתוקל לדף PayPal
2. בחר "עגלה ללא התחברות"
3. השתמש בכרטיס: 4111111111111111
4. מלא סכום וכו'
5. אישור
```

### 4. בדוק דף הצלחה
```
- בדוק שמספר ההזמנה מוצג
- בדוק שפרטים נשמרו בבסיס הנתונים
```

### 5. בדוק ניהול
```
http://localhost:3000/admin/login
סיסמה: (הסיסמה שהגדרת בשלב 1)

צפה בהזמנה שנוצרה זה עתה
```

## בעיות נפוצות ופתרונות

### "ADMIN_PASSWORD_HASH not configured"
- בדוק שיש לך את זה בـ.env.local
- וודא שה-hash לא ריק

### "PayPal: Invalid Client ID"
- בדוק את CLIENT ID ו-SECRET מ-PayPal Dashboard
- וודא שאתה ב-Sandbox mode

### "CJ API: 401 Unauthorized"
- בדוק את ה-API Key
- וודא שהוא אינו פג תוקף
- בדוק שאתה משתמש בודאות נכונה

### טלפון לא מתקבל
```
❌ שגוי: 0-50-1234567
✅ נכון: 0501234567
✅ נכון: +972501234567
```

### עדיין לא עובד?
1. בדוק את ה-logs בטרמינל
2. בדוק את הטבלאות בטרמינל:
   ```bash
   npx prisma studio
   ```
3. בדוק את ה-Network tab בדפדפן

## הצעדים הבאים

- [ ] התאם את תוכן העברית לדרישות שלך
- [ ] הוסף לוגו וצבעי מותאמים
- [ ] הגדר דוא"ל לשליחה (Resend/SMTP)
- [ ] הוסף ביקורות אמתיות של לקוחות
- [ ] שדרג ל-PostgreSQL לייצור
- [ ] הוסף Google Analytics
- [ ] התקן SSL certificate
- [ ] הגדר Cloudflare CDN

## עזרה נוספת

- בחזרה לـREADME.md
- עמוד GitHub Issues
- דוא"ל support: support@bluenova.co.il
