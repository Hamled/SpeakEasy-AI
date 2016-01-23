module.exports = function parseTextBody(sentence) {
    var text = "";
    // Eliminate everything with URLs
    if (sentence.indexOf('http') === -1) {
        var text = sentence.trim().toLowerCase();
        // Add punctuation if there isn 't any
        if (text.charAt(text.length - 1) !== '\.' && text.charAt(text.length - 1) !== '\!' && text.charAt(text.length - 1) !== '\?') {
            text = text.concat('\.');
        }
        //Remove everything inside parentheses and brackets
        text = text.replace(/\[([^\[\]]*)\]/g, '').replace(/\(([^\(\)]+)\)/g, '');

        //Fix "I" capitalization
        text = text.replace(/\si(?=[\s\.\!\?])/g, " I")
            .replace(/\si\'m(?=[\s\.\!\?])/g, " I'm")
            .replace(/\si\'ve(?=[\s\.\!\?])/g, " I've")
            .replace(/\si\'d(?=[\s\.\!\?])/g, " I'd")
            .replace(/\si\'ll(?=[\s\.\!\?])/g, " I'll")
            .replace(/\sim(?=[\s\.\!\?])/g, " I'm")
            .replace(/\sive(?=[\s\.\!\?])/g, " I've")
            .replace(/\sid(?=[\s\.\!\?])/g, " I'd")
            .replace(/\sill(?=[\s\.\!\?])/g, " I'll");

        text = text.replace(/^i(?=[\s\.\!\?])/g, "I")
            .replace(/^i\'m(?=[\s\.\!\?])/g, "I'm")
            .replace(/^i\'ve(?=[\s\.\!\?])/g, "I've")
            .replace(/^i\'d(?=[\s\.\!\?])/g, "I'd")
            .replace(/^i\'ll(?=[\s\.\!\?])/g, "I'll")
            .replace(/^im(?=[\s\.\!\?])/g, "I'm")
            .replace(/^ive(?=[\s\.\!\?])/g, "I've")
            .replace(/^id(?=[\s\.\!\?])/g, "I'd")
            .replace(/^ill(?=[\s\.\!\?])/g, "I'll");

        //Remove newlines (nor sure why there would be any)
        text = text.replace(/\n/g, " ");

        text = text.replace(/(\.)\1{1,}/g, ".")
            .replace(/(\!)\1{1,}/g, "!")
            .replace(/(\?)\1{1,}/g, "?")
            .replace(/\.\s\.\s\./g, ".")
            .replace(/\!\s\!\s\!/g, "!")
            .replace(/\?\s\?\s\?/g, "?")
            .replace(/mrs\./g, 'mrs ')
            .replace(/mr\./g, 'mr ')
            .replace(/ms\./g, 'ms ')
            .replace(/dr\./g, 'dr ')
            .replace(/♪/g, '')
            .replace(/�/g, '')
            .replace(/(\s)\1{1,}/g, " ")
            .replace(/(\_)\1{1,}/g, '');

        //FUCKING HASHTAGS
        text = text.replace(/#\w+/g, '');

        //GRAMMARZ, not shed or wed...
        text = text.replace(/\su(?=[\s\.\!\?])/g, " you")
            .replace(/\suve(?=[\s\.\!\?])/g, " you've")
            .replace(/\sud(?=[\s\.\!\?])/g, " you'd")
            .replace(/\sull(?=[\s\.\!\?])/g, " you'll")
            .replace(/\suve(?=[\s\.\!\?])/g, " you've")
            .replace(/\shed(?=[\s\.\!\?])/g, " he'd")
            .replace(/\sitd(?=[\s\.\!\?])/g, " it'd")
            .replace(/\shed(?=[\s\.\!\?])/g, " he'd")
            .replace(/\stheyd(?=[\s\.\!\?])/g, " they'd")
            .replace(/\sthatd(?=[\s\.\!\?])/g, " that'd")
            .replace(/\swhod(?=[\s\.\!\?])/g, " who'd")
            .replace(/\swhatd(?=[\s\.\!\?])/g, " what'd")
            .replace(/\swhered(?=[\s\.\!\?])/g, " where'd")
            .replace(/\swhend(?=[\s\.\!\?])/g, " when'd")
            .replace(/\swhyd(?=[\s\.\!\?])/g, " why'd")
            .replace(/\showd(?=[\s\.\!\?])/g, " how'd")
            .replace(/\shes(?=[\s\.\!\?])/g, " he's")
            .replace(/\sshes(?=[\s\.\!\?])/g, " she's")
            .replace(/\stheres(?=[\s\.\!\?])/g, " there's")
            .replace(/\sisnt(?=[\s\.\!\?])/g, " isn't")
            .replace(/\sarent(?=[\s\.\!\?])/g, " aren't")
            .replace(/\swasnt(?=[\s\.\!\?])/g, " wasn't")
            .replace(/\swerent(?=[\s\.\!\?])/g, " weren't")
            .replace(/\shavent(?=[\s\.\!\?])/g, " haven't")
            .replace(/\shasnt(?=[\s\.\!\?])/g, " hasn't")
            .replace(/\shadnt(?=[\s\.\!\?])/g, " hadn't")
            .replace(/\swont(?=[\s\.\!\?])/g, " won't")
            .replace(/\swouldnt(?=[\s\.\!\?])/g, " wouldn't")
            .replace(/\sdont(?=[\s\.\!\?])/g, " don't")
            .replace(/\sdoesnt(?=[\s\.\!\?])/g, " doesn't")
            .replace(/\sdidnt(?=[\s\.\!\?])/g, " didn't")
            .replace(/\scant(?=[\s\.\!\?])/g, " can't")
            .replace(/couldnt(?=[\s\.\!\?])/g, "couldn't")
            .replace(/shouldnt(?=[\s\.\!\?])/g, "shouldn't")
            .replace(/mightnt(?=[\s\.\!\?])/g, "mightn't")
            .replace(/mustnt(?=[\s\.\!\?])/g, "mustn't")
            .replace(/wouldve(?=[\s\.\!\?])/g, "would've")
            .replace(/shouldve(?=[\s\.\!\?])/g, "should've")
            .replace(/couldve(?=[\s\.\!\?])/g, "could've")
            .replace(/mightve(?=[\s\.\!\?])/g, "might've")
            .replace(/mustve(?=[\s\.\!\?])/g, "must've");

        text = text.replace(/^u(?=[\s\.\!\?])/g, "you")
            .replace(/^uve(?=[\s\.\!\?])/g, "you've")
            .replace(/^ud(?=[\s\.\!\?])/g, "you'd")
            .replace(/^ull(?=[\s\.\!\?])/g, "you'll")
            .replace(/^uve(?=[\s\.\!\?])/g, "you've")
            .replace(/^hed(?=[\s\.\!\?])/g, "he'd")
            .replace(/^itd(?=[\s\.\!\?])/g, "it'd")
            .replace(/^hed(?=[\s\.\!\?])/g, "he'd")
            .replace(/^theyd(?=[\s\.\!\?])/g, "they'd")
            .replace(/^thatd(?=[\s\.\!\?])/g, "that'd")
            .replace(/^whod(?=[\s\.\!\?])/g, "who'd")
            .replace(/^whatd(?=[\s\.\!\?])/g, "what'd")
            .replace(/^whered(?=[\s\.\!\?])/g, "where'd")
            .replace(/^whend(?=[\s\.\!\?])/g, "when'd")
            .replace(/^whyd(?=[\s\.\!\?])/g, "why'd")
            .replace(/^howd(?=[\s\.\!\?])/g, "how'd")
            .replace(/^hes(?=[\s\.\!\?])/g, "he's")
            .replace(/^shes(?=[\s\.\!\?])/g, "she's")
            .replace(/^theres(?=[\s\.\!\?])/g, "there's")
            .replace(/^isnt(?=[\s\.\!\?])/g, "isn't")
            .replace(/^arent(?=[\s\.\!\?])/g, "aren't")
            .replace(/^wasnt(?=[\s\.\!\?])/g, "wasn't")
            .replace(/^werent(?=[\s\.\!\?])/g, "weren't")
            .replace(/^havent(?=[\s\.\!\?])/g, "haven't")
            .replace(/^hasnt(?=[\s\.\!\?])/g, "hasn't")
            .replace(/^hadnt(?=[\s\.\!\?])/g, "hadn't")
            .replace(/^wont(?=[\s\.\!\?])/g, "won't")
            .replace(/^wouldnt(?=[\s\.\!\?])/g, "wouldn't")
            .replace(/^dont(?=[\s\.\!\?])/g, "don't")
            .replace(/^doesnt(?=[\s\.\!\?])/g, "doesn't")
            .replace(/^didnt(?=[\s\.\!\?])/g, "didn't")
            .replace(/^cant(?=[\s\.\!\?])/g, "can't");



        //Remove the rest of the garbage
        text = text.replace(/[^\w\s\.\!\,\?\']/g, '').trim();

        return text
    }
}
