/**
 * @typedef { { title: string, description: string } } HTMLMetadata
 */

/**
 * HTML Metadata for Next.js `export const metadata`
 * @type { HTMLMetadata }
 */
const defaultMetadata = {
    title: "Ezports",
    description: "Ezports"
};

/**
 * Generate HTML Metadata for Next.js `export function generateMetadata()`
 * @returns { HTMLMetadata }
 */
function getDefaultMetadata() {
    return defaultMetadata;
}

export { defaultMetadata, getDefaultMetadata };
