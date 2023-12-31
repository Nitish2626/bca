import { Router } from "express";
import { english } from "../controllers/english.js";
import { addPyq } from "../controllers/create.js";
import { maths } from "../controllers/maths.js";
import { psc } from "../controllers/psc.js";
import { oops } from "../controllers/oops.js";
import { statistics } from "../controllers/statistics.js";
import { dsa } from "../controllers/dsa.js";
import { cn } from "../controllers/cn.js";
import { evs } from "../controllers/evs.js";
import { webtech } from "../controllers/webtech.js";
import { rdbms } from "../controllers/rdbms.js";
import { python } from "../controllers/python.js";
import { os } from "../controllers/os.js";
import { csa } from "../controllers/csa.js";
import { fis } from "../controllers/fis.js";
import { java } from "../controllers/java.js";
import { se } from "../controllers/se.js";
import { aj } from "../controllers/advance.js";
import { android } from "../controllers/android.js";
import { ecommerce } from "../controllers/ecommerce.js";
import { linux } from "../controllers/linux.js";
import { pcs } from "../controllers/pcs.js";
import { php } from "../controllers/php.js";
import { qa } from "../controllers/qa.js";

const pyqRouter = Router();

pyqRouter.post("/add", addPyq);

pyqRouter.get("/eng", english);
pyqRouter.get("/mat", maths);
pyqRouter.get("/p", psc);
pyqRouter.get("/oop", oops);
pyqRouter.get("/statis", statistics);
pyqRouter.get("/comnet", cn);
pyqRouter.get("/ds", dsa);
pyqRouter.get("/envstu", evs);
pyqRouter.get("/pyt", python);
pyqRouter.get("/web", webtech);
pyqRouter.get("/opsy", os);
pyqRouter.get("/rdbms", rdbms);
pyqRouter.get("/sofeng", se);
pyqRouter.get("/jva", java);
pyqRouter.get("/finski", fis);
pyqRouter.get("/comsys", csa);
pyqRouter.get("/ecom", ecommerce);
pyqRouter.get("/advance", aj);
pyqRouter.get("/quaapi", qa);
pyqRouter.get("/lin", linux);
pyqRouter.get("/and", android);
pyqRouter.get("/hpp", php);
pyqRouter.get("/percar", pcs);

export default pyqRouter;