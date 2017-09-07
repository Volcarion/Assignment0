function revealName(){
        //This variable will store the users first name.
        var name = document.getElementById("first").value;

        var i;
        var number = 0;
        var letter;
        for (i = 0; i < name.length; i++) 
        { 
            letter = name.charAt(i).toUpperCase();
            number += letter.charCodeAt();
        }
        var firstNameLocation = Math.round(((number/26).toFixed(2) - Math.floor(number/26)).toFixed(2) * 25);
        
        var lastNameLocation = Math.round(((number/13).toFixed(2) - Math.floor(number/13)).toFixed(2) * 25);
        
        var firstNameList = [
            "Adrik",
            "Breena",
            "Ander",
            "Farideh",
            "Mindartis",
            "Finellen",
            "Erky",
            "Lavinia",
            "Medrash",
            "Naivara",
            "Kildrak",
            "Shamil",
            "Merric",
            "Kava",
            "Thamior",
            "Vistra",
            "Roondar",
            "Seraphina",
            "Rhogar",
            "Mialee",
            "Ulfgar",
            "Nissa",
            "Perrin",
            "Mishann",
            "Quarion",
            "Felosial"
            ];
        var lastNameList = [
            "Battlehammer",
            "Daergel",
            "Goodbarrel",
            "Fenkenkabradon",
            "Amastacia",
            "Rumnaheim",
            "Nackle",
            "Thorngage",
            "Kimbatuul",
            "Holimion",
            "Holderhek",
            "Raulnor",
            "Tosscobble",
            "Turnuroth",
            "Siannodel",
            "Torunn",
            "Murnig",
            "Leagallow",
            "Nemmonis",
            "Amakiir",
            "Strakeln",
            "Scheppen",
            "Underbough",
            "Myastan",
            "Meliamne",
            "Liadon"
            ];

        
        
        document.getElementById("result").innerHTML = "Welcome to the realm of fantasy.";
        document.getElementById("result2").innerHTML = "From this day forth you shall be known as " + firstNameList[firstNameLocation] + " " + lastNameList[lastNameLocation];
         }