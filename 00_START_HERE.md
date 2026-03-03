# 🚀 BlueNova eCommerce - התחל כאן!

**ברוכים הבאים לפרויקט BlueNova!**

## 📖 קראתי תחילה?

1. **[QUICK_START.md](./QUICK_START.md)** ⚡ - בתוך 5 דקות
2. **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** 🔧 - הגדרה מפורטת
3. **[README.md](./README.md)** 📚 - תיעוד מלא
4. **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** 📋 - סקירה

## 🎯 מה יש לך?

✅ **Frontend**
- דף הנחיתה עברית עם RTL
- עמוד קנייה מובטח
- Admin dashboard
- 50+ קבצים מוכנים

✅ **Backend**
- Next.js API routes
- Prisma ORM + SQLite
- PayPal integration
- CJ Dropshipping API

✅ **תכניסה**
- Dark theme + Neon blue
- Mobile responsive
- Premium design
- צבעים וטקסטים עברים

## ⚡ התחלה מהירה

```bash
# 1. התקנה
npm install

# 2. הגדרת סיסמה (ראה QUICK_START.md)
node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('admin123', 10).then(h => console.log(h))"

# 3. צור .env.local (העתק מ-.env.example וערוך)
cp .env.example .env.local
# ערוך את הערכים

# 4. בסיס נתונים
npx prisma migrate dev --name init

# 5. הפעלה
npm run dev
```

ביקור ב: **http://localhost:3000** 🌐

## 📁 מבנה מהיר

```
├── src/
│   ├── app/ .......... דפים ו-APIs
│   ├── components/ ... קומפוננטות React
│   ├── lib/ .......... PayPal, CJ, וכו'
│   ├── constants/ .... צבעים וטקסט עברי
│   └── types/ ........ TypeScript definitions
├── prisma/ .......... בסיס נתונים
├── public/ .......... תמונות/assets
└── docs/ ............ תיעוד (קבצי .md)
```

## 🔑 חשוב להגדרה

### סיסמת Admin
בעצמך בחר סיסמה וממיר אותה ל-bcrypt hash.

### PayPal
צריך Sandbox Client ID ו-Secret לבדיקה.

### CJ Dropshipping  
צריך API Key לחיבור הזמנות.

**ראה SETUP_GUIDE.md לפרטים מלאים**

## 🧪 בדיקה

```
1. http://localhost:3000 - דף הנחיתה
2. לחץ "קנייה מאובטחת"
3. מלא פרטים
4. סיימת! (PayPal צריך credentials אמתיים)
```

## 📚 תיעוד

| קובץ | תוכן |
|------|------|
| QUICK_START.md | התחלה תוך 5 דקות ⚡ |
| SETUP_GUIDE.md | הגדרה מפורטת צעד אחר צעד 🔧 |
| README.md | תיעוד מלא וקומפרהנסיבי 📖 |
| DEPLOYMENT_CHECKLIST.md | לפני פרסום בייצור 📋 |
| PROJECT_SUMMARY.md | סקירת הפרויקט המלא 📊 |

## 🆘 בעיות?

1. **בדוק את .env.local** - ודא שכל הערכים נכונים
2. **בדוק את Prisma** - `npx prisma studio`
3. **בדוק את logs** - בטרמינל כשמריצים `npm run dev`
4. **בדוק את Network** - DevTools F12 → Network

## 🚀 לאחר Quickstart

1. עדכן טקסט עברי בـ `src/constants/config.ts`
2. שנה צבעים בـ `tailwind.config.ts`
3. הוסף לוגו בـ `src/components/layout/Header.tsx`
4. בדוק PayPal & CJ credentials
5. הרץ בדיקות סופה-לסופ
6. Deploy! 🎉

## 📞 צוות

- **Support**: support@bluenova.co.il
- **Docs**: ראה קבצי .md בשורש

## ✨ מה הלאה?

- [ ] זינוק מהיר (QUICK_START.md)
- [ ] הגדרה מלאה (SETUP_GUIDE.md)
- [ ] בדיקה מקומית
- [ ] הגדרת PayPal
- [ ] הגדרת CJ
- [ ] פרסום (DEPLOYMENT_CHECKLIST.md)

---

## 🎯 צעדך הבא:

👉 **קרא את [QUICK_START.md](./QUICK_START.md) עכשיו!**

---

**developed with ❤️ by Claude**  
**Status**: ✅ Ready to Go  
**Last Updated**: March 2026
