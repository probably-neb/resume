import React from 'react';

interface BlurbProps {
    blurb: string
}
export default function Blurb({blurb}: BlurbProps) {
    return <div><p><b>About Me:</b> {blurb}</p></div>
}
