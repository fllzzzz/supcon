import { createRouter,createWebHashHistory } from "vue-router";
import 'vue-router';

import routes from "./routes";

declare module 'vue-router' {
	interface RouteMeta {
		KeepAlive :boolean
	}
}

export default createRouter({
	history: createWebHashHistory(),
	routes
});

