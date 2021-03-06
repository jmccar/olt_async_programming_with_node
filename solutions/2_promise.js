const fsPromises = require('fs').promises;
function doTruncate() {
    let filehandle = null;
    return fsPromises.open('large.txt', 'r+')
        .then(result => {
            filehandle = result;
            return filehandle.truncate(100); // Keep first 100 bytes
        })
        .finally(() => {
            if (filehandle) { return filehandle.close();} // Close file descriptor
        })  
}
// Solution: Handle proise rejections from filehandle.close()
doTruncate().catch(console.error);




