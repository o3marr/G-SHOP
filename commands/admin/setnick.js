const { Message, Client } = require("discord.js");

module.exports = {
        name: "setnick",
        description: `to change the member nickname.`,
  category: "admin",
  botPermission: ["MANAGE_MEMBERS"],
  authorPermission: ["MANAGE_MEMBERS"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {

              var _0x9f00=["\x66\x69\x72\x73\x74","\x6D\x65\x6D\x62\x65\x72\x73","\x6D\x65\x6E\x74\x69\x6F\x6E\x73","\x67\x65\x74","\x63\x61\x63\x68\x65","\x67\x75\x69\x6C\x64","\x69\x20\x63\x6F\x75\x6C\x64\x6E\x27\x74\x20\x72\x65\x70\x6C\x79\x20\x74\x6F\x20\x74\x68\x65\x20\x6D\x65\x73\x73\x61\x67\x65\x3A\x20","\x6D\x65\x73\x73\x61\x67\x65","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x50\x6C\x65\x61\x73\x65\x20\x6D\x65\x6E\x74\x69\x6F\x6E\x20\x6D\x65\x6D\x62\x65\x72\x20\x6F\x72\x20\x69\x64\x2A\x2A","\x72\x65\x70\x6C\x79","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x49\x20\x63\x61\x6E\x27\x74\x20\x66\x69\x6E\x64\x20\x74\x68\x69\x73\x20\x6D\x65\x6D\x62\x65\x72\x2A\x2A","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x68\x69\x67\x68\x65\x73\x74","\x72\x6F\x6C\x65\x73","\x6D\x65\x6D\x62\x65\x72","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A","\x75\x73\x65\x72\x6E\x61\x6D\x65","\x75\x73\x65\x72","\x20\x68\x61\x76\x65\x20\x68\x69\x67\x68\x65\x72\x20\x72\x6F\x6C\x65\x20\x74\x68\x61\x6E\x20\x79\x6F\x75\x2A\x2A","\x20","\x6A\x6F\x69\x6E","\x73\x6C\x69\x63\x65","\x3A\x77\x68\x69\x74\x65\x5F\x63\x68\x65\x63\x6B\x5F\x6D\x61\x72\x6B\x3A\x20\x2A\x2A","\x2A\x2A\x20\x6E\x69\x63\x6B\x6E\x61\x6D\x65\x20\x68\x61\x73\x20\x62\x65\x65\x6E\x20\x72\x65\x73\x65\x74","\x74\x68\x65\x6E","\x73\x65\x74\x4E\x69\x63\x6B\x6E\x61\x6D\x65","\x2A\x2A\x20\x6E\x69\x63\x6B\x6E\x61\x6D\x65\x20\x68\x61\x73\x20\x62\x65\x65\x6E\x20\x63\x68\x61\x6E\x67\x65\x64\x20\x74\x6F\x20\x2A\x2A","\x2A\x2A",""];const member=message[_0x9f00[2]][_0x9f00[1]][_0x9f00[0]]()|| message[_0x9f00[5]][_0x9f00[1]][_0x9f00[4]][_0x9f00[3]](args[0]);if(!args[0]){return message[_0x9f00[11]]({content:`${_0x9f00[10]}`})[_0x9f00[9]]((_0xfa1ex2)=>{console[_0x9f00[8]](`${_0x9f00[6]}`+ _0xfa1ex2[_0x9f00[7]])})};if(!member){return message[_0x9f00[11]]({content:`${_0x9f00[12]}`})[_0x9f00[9]]((_0xfa1ex2)=>{console[_0x9f00[8]](`${_0x9f00[6]}`+ _0xfa1ex2[_0x9f00[7]])})};if(message[_0x9f00[16]][_0x9f00[15]][_0x9f00[14]][_0x9f00[13]]< member[_0x9f00[15]][_0x9f00[14]][_0x9f00[13]]){return message[_0x9f00[11]]({content:`${_0x9f00[17]}${member[_0x9f00[19]][_0x9f00[18]]}${_0x9f00[20]}`})};let name=args[_0x9f00[23]](1)[_0x9f00[22]](_0x9f00[21]);if(!name){member[_0x9f00[27]](`${_0x9f00[21]}`)[_0x9f00[26]](()=>{message[_0x9f00[11]](`${_0x9f00[24]}${member[_0x9f00[19]][_0x9f00[18]]}${_0x9f00[25]}`)})}else {member[_0x9f00[27]](`${_0x9f00[30]}${name}${_0x9f00[30]}`)[_0x9f00[26]](()=>{message[_0x9f00[11]](`${_0x9f00[24]}${member[_0x9f00[19]][_0x9f00[18]]}${_0x9f00[28]}${name}${_0x9f00[29]}`)})[_0x9f00[9]]((_0xfa1ex2)=>{console[_0x9f00[8]](`${_0x9f00[6]}`+ _0xfa1ex2[_0x9f00[7]])})}
  }
}