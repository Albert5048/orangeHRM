from pathlib import Path
import yaml

path = Path('.github/workflows/playwright.yml')
data = yaml.safe_load(path.read_text(encoding='utf-8'))
assert data['jobs']['test']['steps'][-1]['uses'] == 'actions/upload-artifact@v4'
print('YAML syntax is valid')
