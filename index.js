import * as ts from 'typescript';

function tsCompile(source, options = null) {
	// Default options -- you could also perform a merge, or use the project tsconfig.json
	if (null === options) {
		options = {
			compilerOptions: {
				module: ts.ModuleKind.CommonJS
			}
		};
	}
	return ts.transpileModule(source, options).outputText;
}

const scriptTypeNames = ['ts'];

async function main () {

	// look for scripts with a 'type' attribute specified above.
	const scripts = [];
	for (let type of scriptTypeNames) {
		scripts.push(...document.querySelectorAll(`script[type=${type}]`));
	}
	// loop over the scripts, running their code
	for (const s of scripts) {
		const url = s.getAttribute('src');

		let text;
		if (url) {
			text = await (await (fetch(url))).text();
		} else {
			text = s.innerText;
		}

		const js = tsCompile(text);
		const newScript = document.createElement('script');
		newScript.type = 'text/javascript';
		newScript.innerText = js;
		document.body.appendChild(newScript);
	}
}


main();