import { CodedocConfig } from '@codedoc/core';
import { Footer as _Footer } from '@codedoc/core/components';


export function Footer(config: CodedocConfig, renderer: any) {
  const github$ = <a href={`https://github.com/${config.misc?.github?.user}/${config.misc?.github?.repo}/`} 
                target="_blank">GitHub</a>;
  const npm$ = <a href='https://www.npmjs.com/package/rxmetics' target="_blank">NPM</a>

  return <_Footer>{github$}<hr/>{npm$}</_Footer>
}
