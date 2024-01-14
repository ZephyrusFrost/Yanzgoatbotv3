const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "owner2",
  aurthor:"Tokodori",// Convert By Goatbot Tokodori 
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "admin",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: '𝗞𝗬𝗟𝗘 𝗕𝗔𝗜𝗧-𝗜𝗧',
      gender: 'Male',
      age: '19',
      height: 'Unknown',
      weight: 'unknown', 
      pogi: '999999999%',
      status: 'need kausap sa private message babae sana', 
      chix: '9999',
      NOOBGAMER: '100%',
      LEARNINGTOCODE: '✅',
      relationship: 'secret baka myday mo pa.',
      moto: 'subrang pogi ko naman para pag lalaruan.', 
      facebookLink: 'https://www.facebook.com/Itzkyleigopjk',
      nicknameOwner: 'Kyle'
    };

    const bold = 'https://i.imgur.com/DDO686J.mp4'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
Owner Information:🧾
Name: ${ownerInfo.name}
Gender: ${ownerInfo.gender}
Age: ${ownerInfo.age}
Height: ${ownerInfo.height}
weight: ${ownerInfo.weight}
pogi: ${ownerInfo.pogi%}
status: ${ownerInfo.status}
chix: ${ownerInfo.chix}
NOOBGAMER: ${ownerInfo.NOOBGAMER}
LEARNINGTOCODE: ${ownerInfo.LEARNINGTOCODE}
relationship: ${ownerInfo.relationship}
moto: ${ownerInfo.moto}
Facebook: ${ownerInfo.facebookLink}
Nick: ${ownerInfo.nick}
`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('😎', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};