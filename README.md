# fake-news

&#x202b;
פרוייקט שיעזור לזהות חדשות מזוייפות.
חשבתי לעצמי איך אני בודק אם מידע הוא אמיתי או שקרי.
אני מניח שרוב האנשים יחפשו בגוגל ואם הם ימצאו מספיק תוצאות לאותו סיפור אז כנראה שיש אמת בפרסום.
לעומת זאת סיפור שקרי כנראה יחופש בתאריכים מסויימים בצורה גבוהה מאוד - ולאחר מכן יישכח ולא יחפשו אותו.
לכן השתמשתי בgoogle trends.
כאשר מחפשים כותרת כלשהי של סיפור הוא בודק בgoogle trends לגבי מגמות חיפוש של המונח ומציג אותם
אני מסנן מידע שרלוונטי לפחות מ10% מכמות החיפושים המקסימלית לתקופה מסויימת
בנוסף חיפשתי באינטרנט ומצאתי אתר שלם שמוקדש לאמת כתבות (בדיוק מה שאני צריך)
אז הוספתי בעיגול יפה את הסבירות שהאתר מביא על הכותרת באחוזים.

&#x202b;
מבחינת פיתוח את הclient עשיתי עם vue.js
את הצד שרת עשיתי בהתחלה עםnode.js והעלתי לfirebase ואז כשראיתי שצריך לשלם עבור קריאות רשת מהשרת עצמו אז התנתקתי מfirebase.

&#x202b;
ישנן תמונות בתיקייה של demo