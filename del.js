import fs from 'fs'
function del(i){try{fs.unlinkSync(i);
console.log('Menghapus file:',i);
}catch(err){console.error('File sudah dihapus')}};
await del('session.json');
await del('package-lock.json');
await del('yarn.lock');