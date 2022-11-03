import React from 'react'
import { Button, Grid, InputLabel } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

import './Card.css'

const Card = (props) => {

    return (
        <div className='fixedCard'>
           {props.data.isDeletable && <CancelRoundedIcon fontSize='small' color='disabled' className = 'cardCloseBtn'/>}
            <Grid container spacing={0.5}>
                <Grid item >
                    <InputLabel id="version-label" className='formLabel'>Age</InputLabel>
                    <Select value={props.data.versionKey} labelId='version-label' className='version'>
                        <MenuItem value={props.data.versionKey}>{props.data.versionValue}</MenuItem>
                    </Select>
                </Grid>
                <Grid item >
                    <InputLabel id="timestamp-label" className='formLabel'>TimeStamp</InputLabel>
                    <Select value={'V1'} labelId='timestamp-label' className='timeStamp'>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Grid>
                <Grid item>
                    <InputLabel id="algorithm-label" className='formLabel'>Algorithm</InputLabel>
                    <Select value={'V1'} labelId='algorithm-label' className='algorithm'>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Grid>
                <Grid item>
                    <InputLabel id="cluster-label" className='formLabel'>Cluster</InputLabel>
                    <Select value={'V1'} labelId='cluster-label' className='cluster'>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Grid>
            </Grid>
        </div>
    )
}

export default Card