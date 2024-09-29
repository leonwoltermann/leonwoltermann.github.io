


// const preElement = document.getElementById("string")
// const preStyles = window.getComputedStyle(preElement);
// const preWidth = parseInt(preStyles.width);
// const preHeight = parseInt(preStyles.height);
// const fontSize = parseInt(preStyles.fontSize);

// // Approximate character width and line height
// const charWidth = fontSize * 0.6; // Character width depends on the font
// const lineHeight = fontSize * 1.2; // Line height approximation or use the CSS if set

// const charsPerLine = Math.floor(preWidth / charWidth);
// const totalLines = Math.floor(preHeight / lineHeight);

// const chars = " 一丨人大木口日目田星雪魚鳥楓龍瀑龍驕鬱靂龘";
// const charsLength = chars.length;



// noise.seed(Math.random());

// const depth = 100; 

// function output() {
//     let output = "";
//     let time = 0;

//     // time
//     for (let z = 0; z < depth; z++) {
//         time += 0.01;

//         // lines
//         for (let i = 0; i < totalLines + 1; i++) {

//             // characters
//             for (let j = 0; j < charsPerLine + 1; j++) {
    

//                 // values range from approximately -0.7 to 0.7
//                 var value = noise.simplex3(i / 50, j / 50, time);
//                 console.log(value);

                

//                 // if value is under the threshold, print a space
//                 if (value < -0.8) {
//                     output += "  ";
//                     }
//                 else {
//                     // normalize range from -0.6 to 0.7 to 1 to charsLength
//                     normValue = (value + 0.6) / 1.3 * charsLength;
//                     output += chars.charAt(Math.floor(normValue));
//                 }
//             }
//         output += "\n";
//         }
//     }
//     preElement.textContent = output;
//     setTimeout(output, 30);
// }

// output();

const preElement = document.getElementById("string");
        const preStyles = window.getComputedStyle(preElement);
        const preWidth = parseInt(preStyles.width);
        const preHeight = parseInt(preStyles.height);
        const fontSize = parseInt(preStyles.fontSize);

        const charWidth = fontSize;
        const lineHeight = fontSize; 

        const charsPerLine = Math.floor(preWidth / charWidth);
        const totalLines = Math.floor(preHeight / lineHeight);

        const chars = " 一丨人大木口日目田星雪魚鳥楓龍瀑龍驕鬱靂龘";
        const charsLength = chars.length;

        noise.seed(Math.random());

        const depth = 100; 
        let currentDepth = 0; // Start at the first depth layer

        function update() {
            let output = "";
            let time = currentDepth * 0.005; // Increment the time for each depth layer

            for (let i = 0; i < totalLines + 1; i++) {
                for (let j = 0; j < charsPerLine + 1; j++) {
                    // Generate noise value
                    var value = noise.simplex3(i / 30, j / 30, time);
                    
                    // Append space or character based on threshold
                    if (value < -0.4) {
                        output += "  ";
                    } else {
                        // Normalize and get character
                        let normValue = (value + 0.4) / 1.3 * charsLength;
                        output += chars.charAt(Math.floor(normValue));
                    }
                }
                output += "\n"; // New line after each row
            }

            preElement.textContent = output; // Update the content
            currentDepth = (currentDepth + 1); // Loop depth back to start
        }

        setInterval(update, 10); // Call update every 100 milliseconds







