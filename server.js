const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// هاذ ملف server.js هو الملف الرئيسي لتشغيل تطبيق Express. في البداية، يتم استيراد مكتبة dotenv لتحميل المتغيرات البيئية من ملف config.env. بعد ذلك، يتم استيراد التطبيق من ملف app.js.