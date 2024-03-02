const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>TQV-D17CNPM1</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style> 	
		p{
		  background: #8598CC;
		  width: 140px;
		  padding:10px;
		  color: white;
		}
		.highlight{
		  color:#00AEFF;
		  font-weight:bold;
	}
		.button{
		     background-color: black;
		     color: white;
  	   	     border:none ;
		     padding: 10px 20px;
		     margin: 5px;
		     border-radius:15px;
		     cursor: pointer;
	}
	</style>
	<center>
		<p>190 x 50 </p>
	</center>	
</head>
<body>
<center>
	<h1> Best <span class="highlight"> Shared Hosting </span> Company</h1>
	<h4 style ="font-weight: initial">With this reponsive landing page template, you can promote your all hosting ,domain and email services</h4>
	<button class="button"> View Plans</button>     <button class="button"> All Features</button>
</center>
</body>
</html>
</html>
`
