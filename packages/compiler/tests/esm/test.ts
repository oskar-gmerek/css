import { execSync } from 'child_process'
import { expectFileIncludes } from '../../../../utils/expect-file-includes'
import { OPTIONS_ESM_TEXT } from '../../src'

it('init by type module', () => {
    execSync('node ../../../css/dist/cjs/bin init -c -o', { cwd: __dirname }).toString()
    expectFileIncludes('master.css-compiler.mjs', [OPTIONS_ESM_TEXT])
})