radio.setGroup(69)
let difference: number 
let start: number
music.setVolume(20)

basic.forever(function (){
console.log("gdfnjkgs")
    function connectionTest(){
        radio.onReceivedNumber(function(receivedNumber: number){
        difference = input.runningTime() - receivedNumber
        })
        radio.sendNumber(0)
    }


    radio.onReceivedNumber(function(receivedNumber: number) {
    start = receivedNumber - difference
    })
    
    Sensors.SetLightLevel()
    let finish: number
    
    Sensors.OnLightDrop(function() {
    finish = input.runningTime()
    })
    let runTime: number = finish - start
    basic.showNumber(runTime/1000)
    input.buttonIsPressed(Button.A) 
    {
        basic.showNumber(runTime/1000)
    }
basic.pause(50)
})