import hljs from "highlight.js";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
export { hljs, PlayArrowIcon, handlePusherClick };

const url =
  "https://phenomenal-treacle-7ef031.netlify.app/.netlify/functions/index";

import Pusher from "pusher-js";
const pusher = new Pusher("51f659ce3f43900892ff", {
  cluster: "eu",
});

const channel = pusher.subscribe("my-channel");
channel.bind("my-event", function ({ number, line }) {
  //const myElm = document.createElement("p"); // Create a new element
  //myElm.innerText = `Line: ${number} -- ${line}`; // Change the text of the element
  //myElm.style.color = 'red';		// Change the text color of the element
  //document.body.appendChild(myElm);
  alert(number, line);
});
const handlePusherClick = (event) => {
  event.preventDefault();
  console.log("sending Data");
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lang: "fr",
      data: `
            // Enable pusher logging - don't include this in production\n
            Pusher.logToConsole = true;\n
            \n
            var pusher = new Pusher('51f659ce3f43900892ff', {\n
                cluster: 'eu'\n
            });\n
            \n
            var channel = pusher.subscribe('my-channel');\n
            channel.bind('my-event', function({message}) {\n
                // alert(JSON.stringify(data));\n
                let myElm = document.createElement("p");	// Create a new element\n
                myElm.innerText = message;		// Change the text of the element\n
                //myElm.style.color = 'red';		// Change the text color of the element\n
                document.body.appendChild(myElm);\n
            });\n
            const handleClick = (event) => {\n
                fetch('http://localhost:8000', {\n
                    method: 'POST',\n
                    headers: {\n
                        'Accept': 'application/json',\n
                        'Content-Type': 'application/json'\n
                    },\n
                    body: JSON.stringify({ "data": "" })\n
                })\n
                .then(response => response.json())\n
                .then(response => console.log(JSON.stringify(response)))\n
                //channel.trigger('client-button-click', { some: 'some test data' });\n
}\n
        `,
    }),
  })
    .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)))
    .catch((error) => console.log("rejected") && alert(error));
  //channel.trigger('client-button-click', { some: 'some test data' });
};
