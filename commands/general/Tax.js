const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "tax",
  aliases: ["ضريبة", "taxcalc"],
  description: "حساب الضريبة الخاصة بـ ProBot مع دعم الحروف k/m/b",
  usage: ["!tax <amount>"],
  category: "general",
  botPermission: ["SEND_MESSAGES"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [5],
  ownerOnly: false,
  run: async (client, message, args) => {
    try {
      // التحقق من إدخال المبلغ
      if (!args[0]) {
        return message.channel.send("❌ **الرجاء إدخال المبلغ بشكل صحيح.** \n`!tax <amount>`");
      }

      // تحويل الحروف الاختصارية (k, m, b) إلى أرقام
      const parseAmount = (input) => {
        const value = input.toLowerCase();
        if (value.endsWith("k")) return parseFloat(value) * 1000; // 1k = 1000
        if (value.endsWith("m")) return parseFloat(value) * 1000000; // 1m = 1,000,000
        if (value.endsWith("b")) return parseFloat(value) * 1000000000; // 1b = 1,000,000,000
        return parseFloat(value); // إذا لم تكن هناك اختصارات
      };

      const amount = parseAmount(args[0]); // تحويل المبلغ
      if (isNaN(amount) || amount <= 0) {
        return message.channel.send("❌ **الرجاء إدخال مبلغ صحيح.** \nمثال: `!tax 1k` أو `!tax 1000`");
      }

      const taxRate = 20 / 19; // معدل الضريبة في ProBot
      const totalAmount = Math.ceil(amount * taxRate); // المبلغ الإجمالي مع الضريبة
      const taxAmount = totalAmount - amount; // قيمة الضريبة نفسها

      // إنشاء رسالة Embed
      const embed = new MessageEmbed()
        .setTitle("🧾 **حساب الضريبة - ProBot**")
        .setColor("#00FF00") // اللون الاخضر
        .addField("💰 **المبلغ الأساسي:**", `${amount} `)
        .addField("🔢 **الضريبة:**", `${taxAmount} `)
        .addField("✅ **المبلغ المطلوب إرساله:**", `${totalAmount} `)
        .setFooter(`طلب بواسطة: ${message.author.tag}`, message.author.displayAvatarURL())
        .setTimestamp();

      // إرسال الرسالة
      message.reply({ embeds: [embed] });
    } catch (err) {
      console.error(err);
      message.channel.send("❌ **حدث خطأ أثناء حساب الضريبة.**");
    }
  },
};
