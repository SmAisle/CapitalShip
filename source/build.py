import pathlib
d=pathlib.Path(__file__).parent
src=(d/'src.html').read_text()
logic=(d/'logic.js').read_text().replace("if(typeof module!=='undefined')","//")
out=src.replace('/*LOGIC*/',logic).replace('/*SMICO*/',(d/'smico.css').read_text())
(d.parent/'index.html').write_text(out)
print(len(out))
