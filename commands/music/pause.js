const player = require("../../client/player");

module.exports = {
    name: "pause",
    description: "Pauses the currently playing track.",
    run: async (client, message, args) => {
       var _0xe34e=["\x63\x68\x61\x6E\x6E\x65\x6C","\x76\x6F\x69\x63\x65","\x6D\x65\x6D\x62\x65\x72","\x3A\x6E\x6F\x5F\x65\x6E\x74\x72\x79\x5F\x73\x69\x67\x6E\x3A\x20\x2A\x2A\x59\x6F\x75\x20\x6D\x75\x73\x74\x20\x6A\x6F\x69\x6E\x20\x61\x20\x76\x6F\x69\x63\x65\x20\x63\x68\x61\x6E\x6E\x65\x6C\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x61\x74\x21\x2A\x2A","\x72\x65\x70\x6C\x79","\x6D\x65","\x67\x75\x69\x6C\x64","\x69\x64","\x3A\x6E\x6F\x5F\x65\x6E\x74\x72\x79\x5F\x73\x69\x67\x6E\x3A\x20\x59\x6F\x75\x20\x6D\x75\x73\x74\x20\x62\x65\x20\x6C\x69\x73\x74\x65\x6E\x69\x6E\x67\x20\x69\x6E\x20\x2A\x2A","\x6E\x61\x6D\x65","\x2A\x2A\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x61\x74\x21","\x67\x65\x74\x51\x75\x65\x75\x65","\x70\x6C\x61\x79\x69\x6E\x67","\x3A\x6E\x6F\x5F\x65\x6E\x74\x72\x79\x5F\x73\x69\x67\x6E\x3A\x20\x2A\x2A\x54\x68\x65\x72\x65\x20\x6D\x75\x73\x74\x20\x62\x65\x20\x6D\x75\x73\x69\x63\x20\x70\x6C\x61\x79\x69\x6E\x67\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x61\x74\x21\x2A\x2A","\x73\x65\x74\x50\x61\x75\x73\x65\x64","\x3A\x6E\x6F\x74\x65\x73\x3A\x20\x50\x61\x75\x73\x65\x64\x20\x2A\x2A","\x74\x69\x74\x6C\x65","\x63\x75\x72\x72\x65\x6E\x74","\x2A\x2A\x2E\x20\x54\x79\x70\x65\x20\x5C\x60\x2F\x72\x65\x73\x75\x6D\x65\x5C\x60\x20\x74\x6F\x20\x75\x6E\x70\x61\x75\x73\x65\x21"];if(!message[_0xe34e[2]][_0xe34e[1]][_0xe34e[0]]){return message[_0xe34e[4]]({content:_0xe34e[3]})};if(message[_0xe34e[6]][_0xe34e[5]][_0xe34e[1]][_0xe34e[0]]&& message[_0xe34e[2]][_0xe34e[1]][_0xe34e[0]][_0xe34e[7]]!== message[_0xe34e[6]][_0xe34e[5]][_0xe34e[1]][_0xe34e[0]][_0xe34e[7]]){return message[_0xe34e[4]]({content:`${_0xe34e[8]}${message[_0xe34e[6]][_0xe34e[5]][_0xe34e[1]][_0xe34e[0]][_0xe34e[9]]}${_0xe34e[10]}`})};const queue=player[_0xe34e[11]](message[_0xe34e[6]][_0xe34e[7]]);if(!queue[_0xe34e[12]]){return message[_0xe34e[4]]({content:_0xe34e[13]})};queue[_0xe34e[14]](true);return message[_0xe34e[4]]({content:`${_0xe34e[15]}${queue[_0xe34e[17]][_0xe34e[16]]}${_0xe34e[18]}`})
    }
}