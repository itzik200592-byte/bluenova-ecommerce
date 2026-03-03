# BlueNova - רשימת בדיקה לפרסום

## 🔐 אבטחה

- [ ] **סיסמה מנהל**: שנה סיסמה חזקה (12+ תווים)
- [ ] **ADMIN_SECRET_KEY**: שנה ל-key אקראי חזק בקובץ .env
- [ ] **PayPal**: שנה מ-Sandbox ל-Live Mode
- [ ] **CJ API Key**: וודא שה-credentials לא חשופים
- [ ] **CORS**: בדוק שאנקדים חוקים בלבד
- [ ] **HTTPS**: בקח SSL certificate
- [ ] **Rate Limiting**: הוסף rate limiting ל-API

## 🗄️ בסיס נתונים

- [ ] **Backup**: ערוך backup של כל הנתונים
- [ ] **PostgreSQL**: התקן Postgres לייצור
  ```bash
  DATABASE_URL="postgresql://user:password@host:port/dbname"
  ```
- [ ] **Migration**: הרץ migration בייצור
  ```bash
  npx prisma migrate deploy
  ```
- [ ] **Indexes**: בדוק indexes לביצועים

## 💳 PayPal

- [ ] **Live Mode**: בחר "Live" בדוגמה
  ```env
  PAYPAL_MODE="live"
  PAYPAL_BASE_URL="https://api-m.paypal.com"
  ```
- [ ] **New Credentials**: קבל Live Client ID & Secret
- [ ] **IPN/Webhooks**: הגדר webhooks לעדכוני תשלום
- [ ] **Return URLs**: עדכן ל-production URLs

## 🚚 CJ Dropshipping

- [ ] **Live Warehouse**: בחר warehouse הפקה
- [ ] **Product ID**: בדוק שה-product ID נכון
- [ ] **Shipping**: בדוק שיטות משלוח זמינות
- [ ] **Testing**: בדוק הזמנה תחילה

## 📧 דוא"ל

- [ ] **Email Provider**: בחר (Resend, SendGrid, וכו')
  ```bash
  npm install resend
  ```
- [ ] **Email Templates**: עצוב טמפלטים
  - קבלת הזמנה
  - עדכון משלוח
  - זקיפה חידוש
- [ ] **SMTP**: הגדר credentials
  ```env
  SMTP_HOST="smtp.gmail.com"
  SMTP_USER="your-email@gmail.com"
  SMTP_PASS="your-app-password"
  ```

## 🌐 דומיין

- [ ] **Domain**: רכש דומיין (.co.il / .com)
- [ ] **DNS**: הצב ל-hosting שלך
- [ ] **SSL**: בקח Let's Encrypt certificate
- [ ] **Email**: הגדר MX records אם צריך דוא"ל

## 🏠 Hosting

### Vercel (מומלץ)
```bash
npm install -g vercel
vercel
# עדכן environment variables בـ Vercel Dashboard
```

### AWS EC2
```bash
# התקן Node.js, PM2
npm install -g pm2
pm2 start "npm start"
pm2 startup
pm2 save
```

### DigitalOcean App Platform
- Connect GitHub repo
- הגדר environment variables
- Deploy

## 📊 Monitoring

- [ ] **Sentry**: הגדר error tracking
  ```bash
  npm install @sentry/nextjs
  ```
- [ ] **Analytics**: הוסף Google Analytics
- [ ] **Uptime**: הגדר uptime monitoring

## 🧪 בדיקה סופה-לסופ

### Landing Page
- [ ] [ ] RTL עברית תקין
- [ ] Responsive mobile/tablet/desktop
- [ ] Loadלא בעיות בדף
- [ ] Seo metadata (Open Graph וכו')

### Checkout
- [ ] Validation טופס עובד
- [ ] PayPal integration פועל
- [ ] פרטי ניסיון נשמרים נכון
- [ ] צלם הודעת הצלחה

### Admin
- [ ] Login עובד
- [ ] הזמנות מוצגות
- [ ] סינון עובד
- [ ] פרטי הזמנה נכונים
- [ ] עדכון מצב עובד

### CJ Integration
- [ ] הזמנות נשלחות ל-CJ
- [ ] מעקבה משודרת
- [ ] retry logic עובד אם נכשל

## 📱 SEO & Social

- [ ] **Meta Tags**: בדוק Open Graph
- [ ] **Sitemap**: צור sitemap.xml
- [ ] **Robots.txt**: הוסף robots.txt
- [ ] **Performance**: בדוק Core Web Vitals
  ```bash
  npm install -g lighthouse
  lighthouse https://your-site.com
  ```

## 💰 Costs

- [ ] Hosting: $5-50/month
- [ ] Database: $15-100/month
- [ ] Domain: $10-15/year
- [ ] SSL: Free (Let's Encrypt)
- [ ] Email: Free-$20/month
- [ ] PayPal: 2.9% + $0.30 per transaction

## 📋 גיבוי & Disaster Recovery

- [ ] **Database Backup**: יומי
- [ ] **Image Backup**: שבועי
- [ ] **Code Repository**: Git backup
- [ ] **Disaster Plan**: דוק מה לעשות אם יש בעיה

## 🚀 מה אחרי הפרסום

1. **Monitor**: עקוב אחרי metrics
2. **Feedback**: אסוף משוב מלקוחות
3. **Iterate**: שפר בהתאם למשוב
4. **Scale**: אם הוא עובד, קנה יותר traffic
5. **Automate**: אוטומציה תהליכים נוספים

## 📞 Contact Info

בודא שמידע ההוצאה זמין:
- [ ] דוא"ל: support@bluenova.co.il
- [ ] טלפון: +972-50-123-4567
- [ ] שעות פתיחה: 9:00-18:00 (ישראל)
- [ ] Form contact בעמוד

## ✅ Final Checklist

- [ ] כל המשתנים סביבה הוגדרו
- [ ] בדיקה סופה-לסופ עברה
- [ ] Backup עודכן
- [ ] Team יודע את סיסמה
- [ ] Documentation מעודכן
- [ ] Monitoring כביל מעלה
- [ ] **GO LIVE! 🚀**

---

**תאריך בדיקה**: ___________  
**אנשי צוות**: _____________  
**הערות**: _______________
