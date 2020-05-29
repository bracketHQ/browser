import React from 'react';

import { StyledError, Emoji, Heading, Summary, Code } from "./style";

import dot from '../../store'
import { observer } from 'mobx-react';

export const Error = observer(() => {
    const emoji = dot.error && require(`../../../../../resources/icons/${dot.error.emote}.svg`)

    return (
        <StyledError>
            {dot.error && dot.error.emote && <Emoji src={emoji.default} />}
            <Heading>{dot.error && dot.error.heading}</Heading>
            <Summary dangerouslySetInnerHTML={{ __html: dot.error && dot.error.summary.replace(/\[b]/g, "<b>").replace(/\[\/b\]/g, "</b>") }} />
            <Code>{dot.error && dot.error.code}</Code>
        </StyledError>
    )
})