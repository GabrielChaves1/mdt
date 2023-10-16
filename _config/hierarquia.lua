webhook = {
    saveImagesScreenShotBasic = "https://discord.com/api/webhooks/1155258139256570028/v1x0MU44TC795eJcKjGONCTBWy-v7TfM5WuPDOMl9srWWz6Js5ra11kSA3j0201f2PH4"
}

orgsConfigList = {
    ["PoliciaMilitar"] = {
		details = {
			maxMembers = 150,
			displayName = "Policia Militar",
		},
		
		hierarchy = {
			["PMESPComandante"] = {
				displayName = "Comandante",
                offServiceSet = "PaisanaPMESPComandante",
                position = 1,
                exp = 3000
			},

            ["PMESPCoronel"] = {
				displayName = "Coronel",
                offServiceSet = "PaisanaPMESPCoronel",
                position = 2,
                exp = 1500
			},

            ["PMESPTenenteCoronel"] = {
				displayName = "Tenente Coronel",
                offServiceSet = "PaisanaPMESPTenenteCoronel",
                position = 3,
                exp = 1000
			},

            ["PMESPcapitao"] = {
				displayName = "Capitão",
                offServiceSet = "PaisanaPMESPcapitao",
                position = 4,
                exp = 900
			},

            ["PMESP1_tenente"] = {
                displayName = "1º Tenente",
                offServiceSet = "PaisanaPMESP1_tenente",
                position = 5,
                exp = 800
            },

            ["PMESP2_tenente"] = {
                displayName = "2º Tenente",
                offServiceSet = "PaisanaPMESP2_tenente",
                position = 6,
                exp = 700
            },

            ["PMESPsub_tenente"] = {
                displayName = "Sub Tenente",
                offServiceSet = "PaisanaPMESPsub_tenente",
                position = 7,
                exp = 600
            },

            ["PMESP1_sargento"] = {
                displayName = "1º Sargento",
                offServiceSet = "PaisanaPMESP1_sargento",
                position = 8,
                exp = 500
            },

            ["PMESP2_sargento"] = {
                displayName = "2º Sargento",
                offServiceSet = "PaisanaPMESP2_sargento",
                position = 9,
                exp = 400
            },

            ["PMESP3_sargento"] = {
                displayName = "3º Sargento",
                offServiceSet = "PaisanaPMESP3_sargento",
                position = 10,
                exp = 300
            },

            ["PMESPcabo"] = {
                displayName = "PMESP Cabo",
                offServiceSet = "PaisanaPMESPcabo",
                position = 11,
                exp = 250
            },

            ["PMESPsoldado"] = {
                displayName = "Soldado",
                offServiceSet = "PaisanaPMESPsoldado",
                position = 12,
                exp = 150
            },

            ["PMESPrecruta"] = {
                displayName = "Recruta",
                offServiceSet = "PaisanaPMESPrecruta",
                position = 13,
                exp = 100
            },
		}
	},
}