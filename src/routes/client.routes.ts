import  {Router} from 'express';
import { list, create, delet } from '../controllers/client.controller';

const ClientRoutes = Router()

ClientRoutes.get("/list", list)

ClientRoutes.post("/create", create)

ClientRoutes.delete("/delete/:id", delet)

export default ClientRoutes