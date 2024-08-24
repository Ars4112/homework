import { CircularProgress } from '@mui/material'
import s from './Loader.module.css'

export const Loader = () => {
return <CircularProgress className={s.loader}/>
}