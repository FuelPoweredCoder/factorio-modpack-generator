document.getElementById('processButton').addEventListener('click', function() {
  const userInput = document.getElementById('userInput').value;
  const author = document.getElementById('author').value;
  const output = createInfoJson(userInput, author);
  const info = JSON.parse(output);
  const name = info.name;
  const version = info.version;
  downloadZip(output, name, version);
});

function getEnabledMods(input) {
  const data = JSON.parse(input);
  return data.mods
    .filter(mod => mod.enabled)
    .map(mod => mod.name);
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')       // 空白をハイフンに置き換え
    .replace(/[^\w\-]+/g, '')   // 特殊文字を削除
    .replace(/\-\-+/g, '-');    // 複数のハイフンを単一のハイフンに置き換え
}

function createInfoJson(input, author) {
  const title = `modpack by ${author}`;
  const name = slugify(title);
  const info = {
    "dependencies": getEnabledMods(input),
    "version": "0.1.0",
    "factorio_version": "1.1",
    "author": author,
    "title": title,
    "name": name,
    "description": `modpack by ${author}`
  };
  return JSON.stringify(info, null, 2);
}

function downloadZip(jsonContent, name, version) {
  const zip = new JSZip();
  const folder = zip.folder(name);
  folder.file("info.json", jsonContent);

  const zipFileName = `${name}_${version}.zip`;

  zip.generateAsync({type: "blob"})
    .then(function(content) {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(content);
      a.download = zipFileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
}
