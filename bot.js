const Discord = require("discord.js");
const x5bz = new Discord.Client();
console.log('mariam ra7t tmot al nas');
x5bz.on('ready', () => {
  console.log(`Logged in as ${x5bz.user.tag} !`);
});
const x5bz4 = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
   '*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدنا في نشر البوت وادخل هذا السيرفر https://discord.gg/q7X8hCD ***'
]
 x5bz.on('message', message => {
 if (message.content.startsWith('.مريم')) {

 
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${x5bz4[Math.floor(Math.random() * x5bz4.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("👧")
  }
});
var prefix="!";
let fetchMember = (guild, userResolvable, callback) => {
    if (typeof callback !== 'function') {
        return;
    }

    guild.fetchMember(userResolvable)
        .then((response) => callback(response));
};

let processRequest = (msg, hex) => {
    let guild = msg.guild;
    let author = msg.author;

    fetchMember(guild, author, (response) => {
        createGuildRole(response, hex, msg)
    });
};

let createGuildRole = (guildMember, hex, msg) => {
    let guild = guildMember.guild;
    let newRole = {
        name: `color-${guildMember.user.username}`,
        color: hex
    };
    let existingRole = null;

    existingRole = guild.roles.find('name', newRole.name);

    if (existingRole) {
        existingRole.edit(newRole)
            .then((roleData) => {
                msg.channel.sendMessage(`**ثم تغير اللون بنجاح**`);
                assignGuildMemberRole(guildMember, existingRole, msg);
            });
    } else {
        guild.createRole(newRole)
            .then((role) => {
                msg.channel.sendMessage(`**ثم تغير اللون بنجاح**`);
                assignGuildMemberRole(guildMember, role, msg);
            });
    }
};

let assignGuildMemberRole = (guildMember, role, msg) => {
    guildMember.addRole(role)
        .then((member) => {
            let savedRole = member.roles.find('name', role.name);
            setRolePosition(guildMember, savedRole, msg);
        });
};

let setRolePosition = (guildMember, role, msg) => {
    let guild = guildMember.guild;
    let highestPriorityPosition = guildMember.guild.roles.size - 2;

    role.setPosition(highestPriorityPosition)
        .then((role) => {
            console.log('Successfully moved position.');
            msg.channel.sendMessage(`**ثم تغير اللون بنجاح**`)
        })
        .catch((err) => {
            console.log('Failed to move position');
            console.error(err);
        });
};

// By:PLAQUE
x5bz.on("message", (messageObject) => {
    let message = messageObject.content.trim();
    let messageWords = message.split(' ');
    let hexCode = '';
    let hexRegex = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$');
    let errorMessage = '**خطأ في تغير اللون يجب على اللون ان يكون** `.-color #FFFFFF`.';

    if (messageWords.length > 1 && messageWords[0] === prefix+'color') {
        hexCode = messageWords[1];

        if (hexRegex.test(hexCode)) {
            processRequest(messageObject, hexCode);
        } else {
            messageObject.channel.sendMessage(errorMessage);
        }
    }
});

   x5bz.on('message', message => {
     if (message.content === "-help") {
message.author.send(".Best Commands" + `  **
 ".General Commands"
🔧               -ping | سرعة الأتصال
🔧               -id | معلومــات عــن حســابــك
🔧               -say | يكرر الكلام الذي تقولة
🔧               -avatar | صورتك في الدسكورد
🔧               -embed | يكرر الكلام بطريقة أخرى 
".Server Commands" 
🔧               -server | معلومات عن السيرفر
🔧               -clear | حذف الرسائل 
)
".Bot Commands", 
🔧               -bot | عدد السيرفرات التي تستخدم البوت
".support"
© Made By :RoyalDev ™.
**`);
    }
});

x5bz.login(process.env.BOT_TOKEN);
