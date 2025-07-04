fx_version "adamant"
game "gta5"

lua54 "yes"

ui_page "ui/build/index.html"

client_scripts {
  "@vrp/lib/utils.lua",
  "_config/*",
  
  "code/client/main.lua",
  "code/client/utils.lua",
  
  "code/client/prision.lua",
  "code/client/radialOptions.lua",
}

server_scripts {
  '@vrp/lib/utils.lua',
  
  "_config/*",
  
  "code/server/utils.lua",
  "code/server/main.lua",
  "code/server/sShared.lua",
}

files {
  "ui/build/*",
  "ui/build/**/*",
}