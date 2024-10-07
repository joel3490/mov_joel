import server from "./server";
import color from 'colours'

server.listen(3000, ()=>{
    console.log(color.cyan('desde el puerto 3000'))
})