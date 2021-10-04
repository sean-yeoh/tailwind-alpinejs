import React from 'react'
import srcdocStart from '../snippets/srcdoc-start'
import srcdocEnd from '../snippets/srcdoc-end'

export default function Iframe(props) {
  return (
    <iframe srcDoc={`
    ${srcdocStart.replace('CUSTOM_SCRIPT', props.script)}
      ${props.html}
    ${srcdocEnd}`}>
    </iframe>
  );
}
