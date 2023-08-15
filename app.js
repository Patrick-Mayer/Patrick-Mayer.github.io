/*
TODO:

*Apply grid to footer to center it and add space in between icons.
*Implement Tabs System for Navbar
*Center paragraph and make it look clean, make border a bunch of programming language icons, maybe make them move clockwise

Brainstorm:
Themes - Terminal, USA, Holidays, 
*/

function copyToClipboard(input) {
    
    //for email cause HTML reads '@' as special character
    if (input === 'e'){
        var copy = "pmayer1278@floridapoly.edu";
        navigator.clipboard.writeText(copy);
        alert("Coppied to clipboard");
    }
    else{
        var copy = input;
        navigator.clipboard.writeText(copy);
        alert("Coppied to clipboard");
    }
}