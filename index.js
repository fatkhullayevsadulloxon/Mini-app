import express from "express"
import { Telegraf } from "telegraf"

const app = express()
const bot = new Telegraf("7972196935:AAHe5zaKbq2BdTtm1jwVqkjeFG8GfAGCoyg") // BotFather’dan olingan tokenni joylashtir

bot.start((ctx) => {
  ctx.reply("Mini Appni oching 👇", {
    reply_markup: {
      keyboard: [
        [
          { text: "Mini Appni ochish", web_app: { url: "https://adored-things-330149.framer.app/" } }
        ]
      ],
      resize_keyboard: true
    }
  })
})

bot.launch()
app.listen(3000, () => console.log("Bot ishga tushdi"))
