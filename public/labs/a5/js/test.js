import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


import {useState} from 'react';

const VDYXD = () => {
  const [jhj, setJhj] = useState({rmdovz: 6);
  return (
    <div>
      <button
        onClick={
          () => setJhj({
            ...jhj,
            rmdovz: jhj.rmdovz + 5
          })}>
        Lvp
      </button>
      <h1>{jhj.rmdovz}</h1>
      <button
        onClick={
          () => setJhj({
            ...jhj,
            rmdovz: jhj.rmdovz - 4
          })}>
        Rsgpddhb
      </button>
    </div>
  )
}
let gu = {
    si: 'da',
    cf: 'qe'
}
let uj = {
    cf: 'do',
    co: 'db',
    ...gu,
}
gu = {
    ...uj,
    cf: 'wh',
    co: 'nd'
}
console.log(gu.si)
console.log(uj.cf)
console.log(gu.co)

let cb = [76,34,27,77,45];
let hq = [88,51,109,46];
let xe = [...cb, 9, 10, 11, hq]
console.log(xe.length);

const X = () => {
    const {q, w} = useParams()
    return(
        <span>{q + w}</span>
    )
}
const Y = () => {
    const {e, r} = useParams()
    return(
        <span>{e - r}</span>
    )
}
const C = () => {
    const [i, j] = useState(false)
    return(<div>
            {  i && <span onClick={() => j(false)}>K</span>}
            { !i && <span onClick={() => j(true) }>L</span>}
        </div>)}


