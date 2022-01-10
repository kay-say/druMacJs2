//On click or keypress event, needs to play clip, css effect, display text
//on click, power button must sldescriptione ON <-> OFF, sound must toggle mute <-> unmute
//on click or sldescriptione, volume level must change.
//PAY ATTENTION TO ORDER IN CODE

/////data/////
const soundBank = [
    {
      keyCode: 81,
      letter: "Q",
      description: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      letter: "W",
      description: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      letter: "E",
      description: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      letter: "A",
      description: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      letter: "S",
      description: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      letter: "D",
      description: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      letter: "Z",
      description: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      letter: "X",
      description: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      letter: "C",
      description: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

/////sound/////
//play om click
document.querySelector(".pads").addEventListener("click",(e)=>{
    findPlayClip(e.target.id)
})
//play on keypress
document.addEventListener("keypress",(e)=>{
    findPlayClip(e.key)
})

////power/////
let powerStatus=true
const powerBtn=document.querySelector(".power-button")
document.querySelector(".power").addEventListener("click",(e)=>{
    powerBtn.classList.toggle("slide-power-button")
    if(powerStatus===true){
        powerBtn.textContent="OFF"
        powerStatus=false
    }else{
        powerBtn.textContent="ON"
        powerStatus=true
    }
    
})

////volume control////
let volumeLevel=30
const volumeControl=document.querySelector("#volume-control")
volumeControl.value=volumeLevel//only for display purposes, not setting real volume level
volumeControl.addEventListener("change",(e)=>{
    volumeLevel=e.currentTarget.value//real volume level setting
})


//functions
function findPlayClip(id){
    if(powerStatus===true){
        const soundBankItem=soundBank.filter(item=>item.letter==id.toUpperCase())[0]
        const clip=document.querySelector("audio#"+id)
        clip.src=soundBankItem.url
        document.querySelectorAll("audio").forEach(item=>item.pause())
        clip.currentTime=0
        document.querySelector(".display").textContent=soundBankItem.description
        clip.volume=volumeLevel/100//get the volume level before playing
        clip.play()
    }
}