const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: [""],
  description: "عرض قائمة المساعدة",
  usage: ["!help"],
  category: "info",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (safaa, message, args, config) => {
    const db2 = require("pro.db");
    const prefix = db2.get("prefix") || config.prefix;

    const embed = new MessageEmbed()
      .setColor("AQUA")
      .setTitle("قائمة الأوامر")
      .setDescription(`
> **أوامر الإدارة:**
\`${prefix}ban\` - حظر العضو من السيرفر.  
\`${prefix}unban\` - فك حظر العضو من السيرفر.  
\`${prefix}unban-all\` - فك حظر جميع الأعضاء من السيرفر.  
\`${prefix}kick\` - طرد العضو من السيرفر.  
\`${prefix}lock\` - إغلاق الشات.  
\`${prefix}unlock\` - فتح الشات.  
\`${prefix}role\` - إعطاء أو إزالة رتبة لعضو.  
\`${prefix}clear\` - مسح رسائل الشات.  
\`${prefix}listbans\` - إظهار جميع الأعضاء المحظورين.  
\`${prefix}hide\` - إخفاء الشات.  
\`${prefix}show\` - إظهار الشات.  
\`${prefix}mute\` - إسكات العضو في الشات.  
\`${prefix}unmute\` - فك إسكات العضو في الشات.  
\`${prefix}timeout\` - إعطاء العضو "تايم أوت".  
\`${prefix}hide-all\` - إخفاء جميع الرومات.  
\`${prefix}vkick\` - طرد عضو من الروم الصوتي.  
\`${prefix}role-all\` - إعطاء رول للجميع.  
\`${prefix}setnick\` - تغيير اسم أحد الأعضاء في السيرفر.  
\`${prefix}move\` - سحب الأعضاء إلى الروم.  
\`${prefix}show-all\` - إظهار جميع الرومات.  
\`${prefix}rooms\` - إظهار الأعضاء في الرومات الصوتية.  
\`${prefix}vmute\` - إعطاء ميوت صوتي.  
\`${prefix}vunmute\` - فك الميوت الصوتي.  
\`${prefix}check\` - إظهار الأعضاء الحاصلين على رتبة معينة.  
\`${prefix}role-info\` - عرض معلومات الرتبة.  

> **أوامر عامة:**
\`${prefix}avatar\` - عرض صورة العضو.  
\`${prefix}avatar server\` - عرض صورة السيرفر.  
\`${prefix}banner\` - عرض بنر العضو.  
\`${prefix}roles\` - عرض جميع رتب السيرفر.  
\`${prefix}server\` - عرض معلومات السيرفر.  
\`${prefix}user\` - عرض معلومات المستخدم.  
\`${prefix}color\` - اختيار لون.  
\`${prefix}colors\` - عرض قائمة الألوان.  
\`${prefix}invites\` - عرض عدد الدعوات.  
\`${prefix}top-invites\` - عرض قائمة الدعوات.  
\`${prefix}link\` - إرسال رابط السيرفر.  
\`${prefix}ping\` - معرفع معدل سرعه البوت وا استجابته.  

> **أوامر صاحب البوت:**
\`${prefix}setavatar\` - تغيير صورة البوت.  
\`${prefix}setprefix\` - تغيير بادئة البوت (Prefix).  
\`${prefix}setname\` - تغيير اسم البوت.  
\`${prefix}setgame\` - تغيير حالة البوت.  
\`${prefix}embed\` - إرسال رسالة على شكل Embed.  
\`${prefix}say\` - إرسال رسالة في شات معين.  
\`${prefix}image\` - إرسال صورة في الشات.  

> **أوامر الحماية:**
\`${prefix}anti-bot\` - تفعيل/إلغاء حماية البوتات.  
\`${prefix}anti-link\` - تفعيل/إلغاء حماية الروابط.  
\`${prefix}anti-word\` - تفعيل/إلغاء حماية الألفاظ السيئة.  
\`${prefix}show-bot\` - عرض قائمة بوتات السيرفر.  

> **أوامر الترحيب:**
\`${prefix}channel-wlc\` - تحديد شات الترحيب.  
\`${prefix}image-wlc\` - تحديد صورة الترحيب.  
\`${prefix}message-wlc\` - تحديد رسالة الترحيب.  
\`${prefix}toggle-wlc\` - تشغيل/إيقاف الترحيب.  
\`${prefix}setting wlc\` - عرض إعدادات الترحيب.  
\`${prefix}test\` - تجربة إعدادات الترحيب.  

> **أوامر الموسيقى:**
\`${prefix}play\` - تشغيل الأغاني.  
\`${prefix}repeat\` - تكرار الأغنية.  
\`${prefix}pause\` - إيقاف الأغنية مؤقتًا.  
\`${prefix}resume\` - استئناف الأغنية.  
\`${prefix}queue\` - عرض قائمة الأغاني قيد التشغيل.  
\`${prefix}nowplaying\` - عرض الأغنية الحالية.  
\`${prefix}volume\` - التحكم في مستوى الصوت.  
\`${prefix}skip\` - تخطي الأغنية الحالية.  
\`${prefix}stop\` - إيقاف الأغاني ومسح القائمة.  
`);

    // إرسال الرسالة الخاصة
    message.author.send({ embeds: [embed] })
      .then(() => {
        // إرسال رسالة تأكيد في الروم
        message.react("✅");
        message.reply("✅ تم إرسال قائمة الأوامر إلى الرسائل الخاصة بك");
      })
      .catch(() => {
        message.reply("❌ لا أستطيع إرسال الرسالة الخاصة. تأكد من إعدادات الخصوصية لديك.");
      });
  },
};
