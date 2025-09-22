// Importar dependencias
require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

// Crear el cliente con intents básicos
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,          // para slash commands
    GatewayIntentBits.GuildMessages,   // para leer mensajes
    GatewayIntentBits.MessageContent   // para leer contenido de los mensajes
  ]
});

// Evento: cuando el bot se conecta
client.once("ready", () => {
  console.log(`✅ Bot conectado como ${client.user.tag}`);
});

// Evento: cuando alguien manda un mensaje
client.on("messageCreate", (message) => {
  // Evitar que el bot se responda a sí mismo
  if (message.author.bot) return;

  // Comando base: !hola
  if (message.content === "!hola") {
    message.reply("👋 ¡Hola! Soy tu bot en pruebas.");
  }

  if (message.content === "!adios") {
    message.channel.send("👋 ¡Adiós! Hasta la próxima.");
  }
});

// Iniciar sesión con el token
client.login(process.env.DISCORD_TOKEN);