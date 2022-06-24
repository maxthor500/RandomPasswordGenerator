export const renderBtn = () => {
    const button = document.createElement("button");
    const div = document.createElement("div");
    div.classList.add("container");
    root.appendChild(div);
    div.appendChild(button)
    button.id = "generate-btn";
    button.textContent = "Generate Password";
};


export const generatePassword = (paragraph, lengthPassword, hasSymbols) => {
        const characters = [
            "A","B","C","D","E",
            "F","G","H","I","J",
            "K","L","M","N","O",
            "P","Q","R","S","T",
            "U","V","W","X","Y",
            "Z","a","b","c","d",
            "e","f","g","h","i",
            "j","k","l","m","n",
            "o","p","q","r","s",
            "t","u","v","w","x",
            "y","z", "0", "1", "2",
             "3", "4", "5", "6", "7",
              "8", "9","~","`","!",
              "@","#","$","%","^",
              "&","*","(",")","_",
              "-","+","=","{","[",
              "}","]",",","|",":",
              ";","<",">",".","?","/"
            ];
        let password = "";

        for (let i = 0; i < lengthPassword; i++) {
            let char = Math.floor(Math.random()
                        * characters.length);
            password += characters[char];
        }
        paragraph.textContent = password;
}
