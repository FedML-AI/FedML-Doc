import { defineClientConfig } from "@vuepress/client";
import { defineGiscusConfig } from "vuepress-plugin-comment2/client";
import Layout from "./layouts/LayoutWithComment.vue";

defineGiscusConfig({
    repo: "FedML-AI/FedML-Doc",
    repoId: "R_kgDOJxSihw",
    category: "Announcements",
    categoryId: "DIC_kwDOJxSih84CXVBO",
    mapping: "pathname",
    strict: false,
    reactionsEnabled: true,
});

export default defineClientConfig({
    layouts: {
        // we override the default layout to provide comment service
        Layout,
    },
});
