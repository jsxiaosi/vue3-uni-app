import { defaultFilePath } from '../utils';
import type { Recordable } from '#/global';

const config: Recordable = import.meta.globEager('./modules/*.ts');

export default defaultFilePath(config);
