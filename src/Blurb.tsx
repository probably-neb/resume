import React from 'react';
import theme from './theme';

interface BlurbProps {
    blurb: string
}

export default function Blurb({blurb}: BlurbProps) {
    return <div><p><b className={ `text-${theme.accent.tw}` }>About Me:</b> {blurb}</p></div>
}
