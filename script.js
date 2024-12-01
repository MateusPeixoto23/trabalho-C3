// Lista completa de cores HTML5
const allColors = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", 
    "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue",
    "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki",
    "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
    "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray",
    "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold",
    "GoldenRod", "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki",
    "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan",
    "LightGoldenRodYellow", "LightGray", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue",
    "LightSlateGray", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon",
    "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue",
    "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin",
    "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod",
    "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue",
    "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen",
    "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan",
    "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
];

// Seleção de 10 cores aleatórias
const randomColors = allColors.sort(() => 0.5 - Math.random()).slice(0, 10);
console.log("Cores disponíveis:", randomColors);

// Escolha da cor correta
const correctColor = randomColors[Math.floor(Math.random() * randomColors.length)];
console.log("Cor escolhida:", correctColor);

// Elementos da página
const hint = document.getElementById("hint");
const colorInput = document.getElementById("colorInput");
const guessButton = document.getElementById("guessButton");

// Função para verificar a tentativa do usuário
function checkGuess() {
    const userGuess = colorInput.value.trim();
    if (!userGuess) {
        hint.textContent = "Por favor, insira uma cor.";
        return;
    }

    if (userGuess.toLowerCase() === correctColor.toLowerCase()) {
        document.body.style.backgroundColor = correctColor;
        hint.textContent = `Parabéns! Você acertou! A cor é ${correctColor}.`;
    } else if (userGuess.toLowerCase() < correctColor.toLowerCase()) {
        hint.textContent = "Errou! A cor correta vem depois na ordem alfabética.";
    } else {
        hint.textContent = "Errou! A cor correta vem antes na ordem alfabética.";
    }
}

// Associar o evento ao botão
guessButton.addEventListener("click", checkGuess);
