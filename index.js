var cron = require('node-cron');

// อิงจากเวลาจริงของเครื่องหรือเซิร์ฟ ไม่ใช่อิงจากเวลาเริ่มรันแอป

cron.schedule('2 * * * *', () => {
  console.log('Running a task every hourse two minutes');
});

cron.schedule('*/30 * * * *', () => {
    console.log('Running a task every 30 minutes');
  });

cron.schedule('27 15 * * *', () => {
    // Code to execute every day at 15:27
    console.log('Running cron job at 15:27!');
  });