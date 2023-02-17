
import 'dotenv/config';
import app from './app';
import cors from 'cors';
import colors from '@colors/colors';
import db from './db/database';


const PORT = process.env.PORT || 3001;

app.use(cors());



function main(){

  app.listen(PORT, () => {
    console.log(colors.bgGreen.black(`==>> Server is running on PORT ${PORT}`));
  });
  db().then(() => console.log(colors.cyan('==>> Database is connect')))
}

main();