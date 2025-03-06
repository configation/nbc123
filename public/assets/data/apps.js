var apps = [
    {
      'id': 'customapp',
      'title': 'Add custom app',
      'image': 'assets/images/add.png'
    },
    {
      "id": "google",
      "title": "Google",
      "url": "https://www.google.com/?safe=active&ssui=on",
      'image': 'https://img.freepik.com/free-icon/search_318-265146.jpg'
      
    },
    {
      "id": "discord",
      "title": "Discord",
      "url": "https://discord.com/app",
      'image': 'https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg'
    },
    {
      "id": "telegram",
      "title": "Telegram",
      "url": "https://web.telegram.org/a/",
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png'
    }, 
    {
      "id": "geforce",
      "title": "GeForce NOW",
      "url": "https://play.geforcenow.com",
      'image': '<img src="data:image/png;base64,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"'
    },
    {
      'id': 'vscode',
      'title': 'VS Code',
      'url': 'https://vscode.dev/',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png'
    },
    {
      "id": "tiktok",
      "title": "TikTok",
      "url": "https://tiktok.com",
      'image': 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png'
    },
    {
      "id": "youtube",
      "title": "YouTube",
      "url": "https://youtube.com",
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/2048px-YouTube_social_red_square_%282017%29.svg.png'
    },
    {
      "id": "twitter",
      "title": "Twitter",
      "url": "https://twitter.com",
      'image': 'https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png'
    },
    {
      'id': 'spotify',
      'title': 'Spotify',
      'url': 'https://open.spotify.com/browse',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png'
    },
    {
      'id': 'chess',
      'title': 'Chess',
      'url': 'https://chess.com',
      'image': 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png'
    },
    {
      'id': 'coolmathgames',
      'title': 'Cool Math Games',
      'url': 'https://coolmathgames.com',
      'image': 'https://docs.google.com/drawings/d/e/2PACX-1vR6y2GvcGu9PdrX9zzE24dhm24hClcNsdAmZjIgSUC8sFOahf6t7Yg6l_W8Rd4GduWOH_X02GHVFdBb/pub?w=512&h=512'
    },
  ]
  
  var customapps = JSON.parse(localStorage.getItem("customapps"))
  if (customapps) customapps.forEach(app => {
    apps.push(app)
  })
  
  console.log("Loaded " + apps.length + " apps")
  if (customapps) console.log("Loaded " + customapps.length + " custom apps")
