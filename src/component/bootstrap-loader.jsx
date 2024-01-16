"use client";

import { useEffect } from "react";

/**
 * **Import Bootstrap JS file.** <br>
 * bootstrap.js is file for client-side. <br>
 * So, we need import bootstrap.js by "use client" and useEffect(). <br>
 * But we can't use "use client" in @/app/layout.js (root layout). <br>
 * By this reason, we should separate bootstrap.js loader to client-side only component.
 */
export default function BootstrapLoader() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.min.js");
    }, [])
    return <></>;
}
