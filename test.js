const fs = require('fs');
test('檢查網頁標題是否正確', () => {
    const html = fs.readFileSync('src/index.html', 'utf8');
    expect(html).toMatch(/GTBooster/);
});
