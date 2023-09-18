fx_version "adamant"
game "gta5"

lua54 "yes"

dependency "oxmysql"

ui_page "ui/build/index.html"

client_scripts {
  "client/*",
  "client/**/*"
}

server_scripts {
  '@oxmysql/lib/MySQL.lua',
  '@vrp/lib/utils.lua',
  
  "server/*",
  "server/services/*",
  "server/config/*",
  "server/repositories/*",

  "server/modules/**/main.lua",
  "server/modules/**/*",
  "server/modules/**/**/*",
}

files {
  "ui/build/*",
  "ui/build/**/*",
}