const btnBatu = document.querySelector("#batuuser");
const btnKertas = document.querySelector("#kertasuser");
const btnGunting = document.querySelector("#guntinguser");

const Condition = (input, ai) => {
    if (input == "Batu" && ai == "Gunting") {
        return true;
    } else if (input == "Batu" && ai == "Kertas") {
        return false;
    } else if (input == "Kertas" && ai == "Batu") {
        return true;
    } else if (input == "Kertas" && ai == "Gunting") {
        return false;
    } else if (input == "Gunting" && ai == "Batu") {
        return false;
    } else if (input == "Gunting" && ai == "Kertas") {
        return true;
    } else {
        return false;
    }
}

const chosen = (input) => {
    switch (input) {
        case 0:
            return "Batu";
            break;
        case 1:
            return "Gunting";
            break;
        case 2:
            return "Kertas";
            break;
    }
}

[btnBatu, btnKertas, btnGunting].forEach(each => {
    each.addEventListener("click", () => {
        const user = chosen(parseInt(each.value));
        const ai = chosen(Math.floor(Math.random() * 3));
        if (ai == user) {
            alert(`AI choose ${ai},Draw`);
        } else {
            if (Condition(user, ai) == 1) {
                alert(`AI choose ${ai},You Won`);
            } else {
                alert(`AI choose ${ai},You Lose`);
            }
        }
    });
})

const formKolbar = document.querySelector("#formKolbar");
    const inputBaris = document.querySelector("#baris");
    const inputKolom = document.querySelector("#kolom");
    const result = document.querySelector("#result");

    formKolbar.addEventListener("submit", (e) => {
        e.preventDefault();
        let i, j, text, loop;
        loop = inputBaris.value * inputKolom.value;
        text = "";
        for (j = 0; j < inputKolom.value; j++) {
            for (i = 0; i < inputBaris.value; i++) {
                text += (loop) % 2 == 1 ? `X` : `O`;
                loop--;
            }
            text += `\n`;
        }
        result.textContent = text;
    });

    const inputRev = document.querySelector("#numberreverse");
    const btnRev = document.querySelector("#btnrev");
    const resultInner = document.querySelector("#resultreverse");

    btnRev.addEventListener("click", () => {
        let result;
        result = "";
        for (i = inputRev.value.length; i > 0; i--) {
            result += inputRev.value.charAt(i - 1);
        }
        resultInner.textContent = result;
    });