class Password {
    generateStrongPassword() {
        let password = "";
        let str = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!@#$%^&*()_+"];
        let numbers = [0, 1, 2, 3];

        let i = 0;
        while(i < 4) {
            let randomIndex = Math.floor(Math.random() * numbers.length);
            let randomNumber = numbers.splice(randomIndex, 1);

            for(let j=0; j<4; j++) {
                let randomValue = Math.floor(Math.random() * str[randomNumber].length);
                password += str[randomNumber].charAt(randomValue);
            }

            i++;
        }
        return password;
    }

    generateWeakPassword() {
        let password = "";
        let str = "abcdefghijklmnopqrstuvwxyz" +"ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789" + "!@#$%^&*()_+";
        
        for(let i=0; i<8; i++) {
            let randomIndex = Math.floor(Math.random() * str.length);
            password += str.charAt(randomIndex);
        }
        return password;
    }
    generateSuperStrongPassword() {
        let password = "";
        let str = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!@#$%^&*()_+"];
        let numbers = [0, 1, 2, 3];

        let i = 0;
        while(i < 4) {
            let randomIndex = Math.floor(Math.random() * numbers.length);
            let randomNumber = numbers.splice(randomIndex, 1);
            
            for(let j=0; j<Math.floor(Math.random() * str[randomNumber].length); j++) {
                let randomValue = Math.floor(Math.random() * str[randomNumber].length);
                password += str[randomNumber].charAt(randomValue);
            }

            i++;
        }
        return password;

    }
    generateFunnyPassword() {
        let str = ["password", "ineedapassword", "changeme", "secret", "iamforgetful", "newpassword", "IamACompleteIdiot", "nothing", "nothingagain", "iforgot", "whydoialwaysforget", "qwerty", "asdf", "aslpls", "user", "YouWontGuessThisOne","PasswordShmashword", "youmoron", "doubleclick", "iamnottellingyoumypw", "masterpassword", "yetanotherpassword", "nomorepasswords", "password123", "myonlypassword", "cantremember", "dontaskdonttell", "memorysucks", "earlyalzheimers", "passwordforoldpeople"];
        
        let randomIndex = Math.floor(Math.random() * str.length);
        return str[randomIndex];
    }
}

let password = new Password();
console.log(password.generateStrongPassword());
console.log(password.generateWeakPassword());
console.log(password.generateSuperStrongPassword());
console.log(password.generateFunnyPassword());