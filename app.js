//익스프레스 가져오기
const express = require("express");
//익스프레스로 앱 객체 만들기
const app = express();
//포트번호
const port = 3000;
//라우터는 앱객체를 작게 만드는 것
const usersRouter = require("./routes/users.route.js");
const postsRouter = require("./routes/posts.route.js");

app.use(express.json());
//이게 없으면 바디를 썬더클라이언트에서 처리 할 수 없다.

app.use("/api", [usersRouter, postsRouter]);
//listen 서버번호 불러와서 실행, 계속 불러올 수 있다.
app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

//express.js 불러와서 app 담기 (포트번호 담기)
//json 파싱하는 미들웨어
//app. express.json

//listen 서버번호 불러와서 실행
//app. listen (port ~)
