import { StaticFileRoute } from "vlserver";
import { ManagedServer } from "./managed/server";
import { join } from "path";

const app = new ManagedServer();

app.use(new StaticFileRoute('/', join(process.cwd(), '..', 'client', 'dist')));
app.use(new StaticFileRoute('/assets', join(process.cwd(), '..', 'client', 'assets')));

app.prepareRoutes();
app.use(new StaticFileRoute('*', join(process.cwd(), '..', 'client', 'dist', 'index.html')));

app.start(+process.env.PORT! || 3000);