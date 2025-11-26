const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const urlModule = require('url');

const projectRoot = __dirname;
const filesToCheck = [
    path.join(projectRoot, 'src', 'translate', 'iniSpanish.json'),
    path.join(projectRoot, 'src', 'translate', 'iniEnglish.json')
];

const keysToCheck = [
    'url',
    'cv_url',
    'enterpriseImage',
    'educationImage',
    'certificationImage',
    'certificationUrl',
    'enterpriseUrl'
];

async function checkUrl(url) {
    return new Promise((resolve) => {
        const protocol = url.startsWith('https') ? https : http;
        const options = {
            method: 'HEAD',
            timeout: 5000
        };

        // Handle some sites that might block HEAD requests or require User-Agent
        const parsedUrl = urlModule.parse(url);
        const reqOptions = {
            ...options,
            hostname: parsedUrl.hostname,
            path: parsedUrl.path,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
            }
        };

        const req = protocol.request(reqOptions, (res) => {
            if (res.statusCode >= 200 && res.statusCode < 400) {
                resolve({ valid: true, status: res.statusCode });
            } else if (res.statusCode === 405 || res.statusCode === 403) {
                // Retry with GET if HEAD fails with 405 (Method Not Allowed) or 403 (Forbidden - sometimes works with GET)
                retryWithGet(url, protocol, reqOptions).then(resolve);
            } else {
                resolve({ valid: false, status: res.statusCode });
            }
        });

        req.on('error', (err) => {
            resolve({ valid: false, error: err.message });
        });

        req.on('timeout', () => {
            req.destroy();
            resolve({ valid: false, error: 'Timeout' });
        });

        req.end();
    });
}

function retryWithGet(url, protocol, options) {
    return new Promise((resolve) => {
        const reqOptions = { ...options, method: 'GET' };
        const req = protocol.request(reqOptions, (res) => {
            // Consume data to free memory
            res.resume();
            if (res.statusCode >= 200 && res.statusCode < 400) {
                resolve({ valid: true, status: res.statusCode });
            } else {
                resolve({ valid: false, status: res.statusCode });
            }
        });
        req.on('error', (err) => resolve({ valid: false, error: err.message }));
        req.on('timeout', () => { req.destroy(); resolve({ valid: false, error: 'Timeout' }); });
        req.end();
    });
}

function checkLocalFile(filePath) {
    // Assuming local paths starting with / are relative to public folder or root
    // The code uses /public/images/... so we should check relative to project root
    const absolutePath = path.join(projectRoot, filePath);
    return fs.existsSync(absolutePath);
}

async function traverseAndCheck(obj, filePath) {
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            await traverseAndCheck(obj[key], filePath);
        } else if (keysToCheck.includes(key)) {
            const value = obj[key];
            if (typeof value === 'string') {
                if (value.startsWith('http')) {
                    process.stdout.write(`Checking ${value}... `);
                    const result = await checkUrl(value);
                    if (!result.valid) {
                        console.log(`\n[BROKEN] File: ${path.basename(filePath)}, Key: ${key}, URL: ${value}, Error: ${result.status || result.error}`);
                    } else {
                        console.log(`OK (${result.status})`);
                    }
                } else if (value.startsWith('/')) {
                    process.stdout.write(`Checking local ${value}... `);
                    if (!checkLocalFile(value)) {
                        console.log(`\n[MISSING] File: ${path.basename(filePath)}, Key: ${key}, Path: ${value}`);
                    } else {
                        console.log(`OK`);
                    }
                }
            }
        }
    }
}

async function main() {
    console.log('Starting link check...');
    for (const file of filesToCheck) {
        if (fs.existsSync(file)) {
            console.log(`\nScanning ${path.basename(file)}...`);
            const content = JSON.parse(fs.readFileSync(file, 'utf8'));
            await traverseAndCheck(content, file);
        } else {
            console.error(`File not found: ${file}`);
        }
    }
    console.log('\nLink check complete.');
}

main();
