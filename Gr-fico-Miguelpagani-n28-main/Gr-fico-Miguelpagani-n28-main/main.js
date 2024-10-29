const grafico = document.getElementById('meuGrafico').getContext("2d");
const meuGrafico = new Chart (grafico, {
type: "pie", 
data: {
    labels:[
"Instagram",
 "WhatsApp",
 "Facebook",
 "WeChat",
 "TikTok",
 "DouYin",
 "Twitter",
 "Telegram",
 "FB Messenger",
 "LINE"
    ],
    datasets:[{
        data:[
            16.5,
            16.1,
            12.8,
            12.8,
            7.4,
            6.6,
            3.2,
            2.4,
            2.3,
            1.7,
        ],
        backgroundcolor:[
        "rgb(105,105,105)",
        "rgb(255,250,205)",
        "rgb(255,0,0)",
        "rgb(255,215,0)",
        "rgb(147,112,219)",
        "rgb(154,205,50)",
        "rgb(127,255,212)",
        "rgb(70,130,180)",
        "rgb(47,79,79)",
        "rgb(160,82,45)",

        ]
    }]
 
}
}
)

