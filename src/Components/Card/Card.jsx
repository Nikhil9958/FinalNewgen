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
                    <InputLabel id="version-label" className='formLabel'>Version</InputLabel>
                    <Select value={props.data.versionKey} labelId='version-label' className='version'>
                        <MenuItem value={props.data.versionKey}>{props.data.versionValue}</MenuItem>
                    </Select>
                </Grid>
                <Grid item >
                    <InputLabel id="timestamp-label" className='formLabel'>TimeStamp</InputLabel>
                    <Select value={props.data.timeStampKey} labelId='timestamp-label' className='timeStamp'>
                        <MenuItem value={props.data.timeStampKey}>{props.data.timeStampValue}</MenuItem>
                    </Select>
                </Grid>
                <Grid item>
                    <InputLabel id="algorithm-label" className='formLabel'>Algorithm</InputLabel>
                    <Select value={props.data.algorithmKey} labelId='algorithm-label' className='algorithm'>
                        <MenuItem value={props.data.algorithmKey}>{props.data.algorithmValue}</MenuItem>
                    </Select>
                </Grid>
                <Grid item>
                    <InputLabel id="cluster-label" className='formLabel'>Cluster</InputLabel>
                    <Select value={props.data.clusterKey} labelId='cluster-label' className='cluster'>
                        <MenuItem value={props.data.clusterKey}>{props.data.clusterValue}</MenuItem>
                        <MenuItem value={'C2'}>Cluster Index - 2</MenuItem>
                        <MenuItem value={'C3'}>Cluster Index - 3</MenuItem>
                        <MenuItem value={'C4'}>Cluster Index - 4</MenuItem>
                        <MenuItem value={'C5'}>Cluster Index - 5</MenuItem>
                        <MenuItem value={'C5'}>Cluster Index - 6</MenuItem>
                        <MenuItem value={'C5'}>Cluster Index - 7</MenuItem>
                        <MenuItem value={'C5'}>Cluster Index - 8</MenuItem>
                        <MenuItem value={'C5'}>Cluster Index - 9</MenuItem>
                        <MenuItem value={'C5'}>Cluster Index - 10</MenuItem>
                        
                    </Select>
                </Grid>
            </Grid>
        </div>
    )
}

export default Card