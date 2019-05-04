import React from 'react';
import { Grid, Divider } from '@material-ui/core';

export default class Sidebar extends React.Component {

    render() {

        return (
            <Grid container className="sidebar">
                <Grid item xs={12} sm={12} md={12}>
                    <h2>Filters</h2>
                    <Divider />
                </Grid>
            </Grid>
        )
    }
}