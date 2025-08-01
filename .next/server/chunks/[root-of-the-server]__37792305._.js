module.exports = {

"[project]/.next-internal/server/app/api/scans/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/scans/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
// Initialize the global scans Map if it doesn't exist
if (!global.scans) {
    global.scans = new Map();
}
async function POST(request) {
    try {
        const body = await request.json();
        const { repoUrl, scanType } = body;
        console.log('[Scan API] Initiating scan for:', repoUrl, 'type:', scanType);
        if (!global.scans) {
            console.log('[Scan API] Initializing scans map');
            global.scans = new Map();
        }
        // Generate a unique scan ID
        const scanId = Math.random().toString(36).substring(7);
        // Store scan information
        global.scans.set(scanId, {
            scanId,
            repoUrl,
            scanType,
            status: 'initiated',
            progress: 0,
            startTime: Date.now()
        });
        // Simulate starting a background process
        simulateScanProgress(scanId);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            scanId,
            status: 'initiated',
            progress: 0
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to initiate scan'
        }, {
            status: 500
        });
    }
}
function simulateScanProgress(scanId) {
    console.log(`[Scan API] Starting progress simulation for scan ${scanId}`);
    const scan = global.scans.get(scanId);
    if (!scan) {
        console.log(`[Scan API] No scan found for ID ${scanId}`);
        return;
    }
    scan.status = 'in-progress';
    let progress = 0;
    const interval = setInterval(()=>{
        try {
            progress += 10;
            scan.progress = progress;
            console.log(`[Scan API] Updated progress for ${scanId}: ${progress}%`);
            if (progress >= 100) {
                scan.status = 'completed';
                scan.progress = 100;
                console.log(`[Scan API] Scan ${scanId} completed`);
                clearInterval(interval);
            }
            // Create a new scan object to ensure changes are persisted
            const updatedScan = {
                ...scan
            };
            global.scans.set(scanId, updatedScan);
            console.log(`[Scan API] Updated scan:`, updatedScan);
        } catch (error) {
            console.error(`[Scan API] Error updating scan progress:`, error);
        }
    }, 2000);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__37792305._.js.map