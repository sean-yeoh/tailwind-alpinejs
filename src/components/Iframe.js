import React from 'react'
import srcdocStart from '../snippets/srcdoc-start'
import srcdocEnd from '../snippets/srcdoc-end'

export default function Iframe(props) {
  return (
    <iframe srcdoc={`${srcdocStart}${props.html}<script>${props.js}</script>${srcdocEnd}`}></iframe>
  );
}
