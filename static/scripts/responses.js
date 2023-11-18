function getBotResponse(input) {
    var smile = String.fromCodePoint(0x1F603)
    var emoji2 = String.fromCodePoint(0x1F600)
    var wave = String.fromCodePoint(0x1F44B)
    var heart = String.fromCodePoint(0x2764)
     var thumbsup = String.fromCodePoint(0x1F44D)
     var smiley = String.fromCodePoint(0x1F60A)
    //button responses
    if (input == "I like this!") {
        return "Glad to hear that!";
    } else if (input == "I love Elite Shoppy!") {
        return "What a coincidence, Me too!"+emoji2;
    } 

    // Simple responses
    if (input == "hello") {
        return "Hello there! Is it your first time here?"+smile;
    }  else if (input == "yes") {
        return "Awesome!"+heart+"\nDont forget to check amazing discounts on our new arrivals.";}
    
    else if (input == "goodbye"||input=="bye") {
        return "Talk to you later!"+wave;}
    else if (input == "how are you") {
        return "I'm doing Great! How are you?";
    } 
     else if (input=="is there a sale" || input=="do you have a sale" || input=="sale") {
        return "Yes! We have a flat 50% sale going on"; 
    } 
     else if (input == "okay" || input=="ok"||input=="sure") {
        return thumbsup;
    } 
     else if (input == "thankyou"||input=="thanks") {
        return "My Pleasure"+smiley;
    } 
    
    
    
    else {
        return "Sorry but I don't understand what you've just said. Please try asking something else. Or else, let me flag it back to the team, they are excellent in handling these questions 💪";
    }
}