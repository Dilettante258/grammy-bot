import { Bot } from "https://deno.land/x/grammy@v1.26.0/mod.ts";

const token = Deno.env.get("TELEGRAM_BOT_TOKEN");
if (!token) throw new Error("TELEGRAM_BOT_TOKEN is unset");

const bot = new Bot(token);

bot.command("start", (ctx) => ctx.reply("Hello from Deno & grammY!"));

bot.on("message", (ctx) => ctx.reply("How can I help you?"));

bot.start();